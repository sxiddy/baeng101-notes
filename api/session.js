// GET /api/session -> { user, paid, modules, owner, price, keyId, banner, paused, business, reviewer, googleClientId, domain }
//   user: the signed-in student's email (null = show the sign-in screen)
//   modules: null = every paid module; otherwise the module ids a single-module grant unlocks
// Also records when a signed-in student last used the site and counts their visits (one per page load), for the owner's student list on /stats.html.
const { send, getUser, isOwner, hasAccess, isReviewer, settings, claimDevice, deviceActive, userCookie, clearUserCookie, DOMAIN, handle } = require('./_lib');
const store = require('./_store');

module.exports = handle(async (req, res) => {
  const [t, cfg] = await Promise.all([hasAccess(req), settings().catch(() => ({ price: undefined, banner: null, sale: null, paused: null, business: '' }))]);
  let u = getUser(req), headers, deviceError = null;
  const reviewer = isReviewer(u); // no device slots and not in the owner's student list
  // a sign-in that arrived without a device id claims its device slot here, with the id this browser keeps
  const d = new URL(req.url, 'http://x').searchParams.get('d') || '';
  // signed out here because this account signed in on a newer phone/PC (newest sign-in wins)
  if (u && u.d && process.env.DEV_BYPASS !== '1' && !(await deviceActive(u, req))) {
    u = null; headers = { 'Set-Cookie': clearUserCookie() };
    deviceError = 'You were signed out here because your account was signed in on another device. Sign in again to use it on this one.';
  }
  if (u && !reviewer && !u.d && /^[a-f0-9]{32}$/.test(d) && process.env.DEV_BYPASS !== '1') {
    const claim = await claimDevice(u.e, d, req);
    if (claim.ok) headers = { 'Set-Cookie': userCookie(u.e, d) };
    else { deviceError = claim.why; headers = { 'Set-Cookie': clearUserCookie() }; u = null; }
  }
  if (u && !reviewer && store.configured() && process.env.DEV_BYPASS !== '1') {
    const now = new Date().toISOString();
    await store.pipeline([['HSETNX', 'userFirst', u.e, now], ['HSET', 'userSeen', u.e, now], ['HINCRBY', 'userVisits', u.e, 1]]).catch(() => {});
  }
  send(res, 200, {
    user: u ? u.e : null, deviceError, owner: isOwner(req), paid: !!t, modules: t ? t.modules : null, free: !!(t && t.free),
    price: cfg.price, normalPrice: cfg.normalPrice, sale: cfg.sale, banner: cfg.banner, paused: cfg.paused, business: cfg.business || '', reviewer, keyId: process.env.RAZORPAY_KEY_ID || null,
    googleClientId: process.env.GOOGLE_CLIENT_ID || null, domain: DOMAIN,
    storeUrl: process.env.STORE_URL ? process.env.STORE_URL.replace(/\/$/, '') : null, storeCode: 'BAENG101', storeName: 'Technical English',
    open: cfg.signin === false, signin: cfg.signin !== false, freeAll: !!cfg.freeAll, devLogin: process.env.DEV_LOGIN === '1' && !process.env.VERCEL, dev: process.env.DEV_BYPASS === '1',
  }, headers);
});
