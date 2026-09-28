// GET /data/<file>.js (rewritten to /api/content?f=<file>) -> notes, questions, summaries and paid diagram code.
// Everything needs a signed-in VIT student (or the owner). Free modules (content/modules.json) stop there;
// the rest also needs payment or free access.
const fs = require('fs'), path = require('path');
const { hasAccess, getUser, isOwner, signinOff, handle } = require('./_lib');
const ACCESS = require('./_access.json');
const FREE = new Set(ACCESS.freeFiles);
module.exports = handle(async (req, res) => {
  const f = new URL(req.url, 'http://x').searchParams.get('f') || '';
  if (!/^((chunk|q|summary|viz|papers)-[A-Za-z0-9]+|figs)\.js$/.test(f)) { res.statusCode = 404; return res.end('not found'); }
  const deny = (code) => { res.statusCode = code; res.setHeader('Cache-Control', 'no-store'); return res.end(code === 401 ? '/* sign in required */' : '/* payment required */'); };
  if (!getUser(req) && !isOwner(req) && !(await signinOff())) return deny(401);
  if (!FREE.has(f)) {
    const t = await hasAccess(req), mod = (ACCESS.fileModule || {})[f];
    if (!t || (t.modules && mod && !t.modules.includes(mod))) return deny(402);
  }
  const p = path.join(process.cwd(), 'protected', 'data', f);
  if (!fs.existsSync(p)) { res.statusCode = 404; return res.end('not found'); }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
  res.setHeader('Cache-Control', 'private, max-age=' + (FREE.has(f) ? 300 : 3600));
  res.end(fs.readFileSync(p));
});
