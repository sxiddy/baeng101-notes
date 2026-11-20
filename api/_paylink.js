// Pay with a Razorpay Payment Link (a checkout page hosted on razorpay.com) instead of the on-site checkout.
// Added 19-11-2026: Razorpay blocks on-site checkout from a website it has not approved ("website does not match"),
// and the site moved off Vercel (now Cloudflare, baeng101.notix.in). Hosted links have no website check. Ported from BACHY105.
// Switched on with PAY_VIA_LINK=1. Pro is granted (a) when the student comes back and the page checks the link,
// and (b) by the Worker's every-minute scheduled poll (worker/index.js), so a student who closes the tab still gets Pro.
const { razorpay, recordPaid, normEmail } = require('./_lib');
const PRODUCT = 'baeng101-notes';
const on = () => process.env.PAY_VIA_LINK === '1';

async function createLink(email, amount, origin) {
  const link = await razorpay('POST', '/payment_links', {
    amount, currency: 'INR', accept_partial: false,
    description: 'BAENG101 Notes Pro (' + email + ')',
    customer: { email },
    notify: { sms: false, email: false }, reminder_enable: false,
    // fill in and lock the student email on the payment page, so the Razorpay dashboard shows it on every payment
    options: { checkout: { prefill: { email }, readonly: { email: true } } },
    notes: { product: PRODUCT, email },
    callback_url: origin + '/?paid=1', callback_method: 'get',
    expire_by: Math.floor(Date.now() / 1000) + 30 * 60, // 30 minutes; Razorpay needs at least 15
  });
  return { linkId: link.id, linkUrl: link.short_url, amount: link.amount };
}

// A paid link of ours -> record Pro for the email in its notes. Returns { ok, email } or { ok:false, pending|why }.
async function unlockLink(linkOrId, onlyEmail) {
  // always fetch the link itself: the list endpoint leaves out its payments
  const link = await razorpay('GET', '/payment_links/' + (typeof linkOrId === 'string' ? linkOrId : linkOrId.id));
  const n = link.notes || {};
  if (n.product !== PRODUCT) return { ok: false, why: 'That payment link is not for these notes.' };
  const email = normEmail(n.email);
  if (!email) return { ok: false, why: 'That payment link has no student email.' };
  if (onlyEmail && email !== onlyEmail) return { ok: false, why: 'That payment link belongs to a different account.' };
  if (link.status !== 'paid') return { ok: false, pending: true, why: 'No completed payment on this link yet.' };
  let pid = ((link.payments || []).find((p) => p.status === 'captured') || {}).payment_id;
  if (!pid && link.order_id) { // fall back to the link's order: its captured payment
    const items = (await razorpay('GET', '/orders/' + link.order_id + '/payments')).items || [];
    pid = (items.find((p) => p.status === 'captured') || {}).id;
  }
  if (!pid) return { ok: false, pending: true, why: 'Payment not captured yet.' };
  const p = await razorpay('GET', '/payments/' + pid);
  if (p.status !== 'captured' || p.currency !== 'INR' || !(p.amount >= 100)) return { ok: false, why: 'Payment is ' + p.status + '.' };
  await recordPaid(email, p);
  return { ok: true, email, paymentId: pid };
}

// Every minute (Worker cron): paid links from the last day that are not recorded yet get Pro. Logs each unlock.
const DONE = new Set();
async function pollOnce() {
  if (!on() || !process.env.RAZORPAY_KEY_SECRET) return 0;
  const store = require('./_store');
  const since = Math.floor(Date.now() / 1000) - 24 * 3600;
  const list = (await razorpay('GET', '/payment_links')).payment_links || [];
  let n = 0;
  for (const l of list) {
    if (DONE.has(l.id) || l.status !== 'paid' || l.created_at < since || (l.notes || {}).product !== PRODUCT) continue;
    const email = normEmail((l.notes || {}).email);
    const [have, gone] = await store.pipeline([['HGET', 'paid', email], ['HGET', 'paidRevoked', email]]);
    if (have == null && !gone) { // gone: the owner removed this student's paid Pro on /admin
      const r = await unlockLink(l, null);
      if (r.ok) { n++; console.log('[paylink] Pro granted to', email, 'payment', r.paymentId); }
      else { console.log('[paylink] not granted', l.id, r.why); if (!r.pending) DONE.add(l.id); continue; }
    }
    DONE.add(l.id);
  }
  return n;
}

module.exports = { on, createLink, unlockLink, pollOnce };
