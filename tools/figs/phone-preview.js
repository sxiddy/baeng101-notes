// node tools/figs/phone-preview.js <repo folder> <out.html> id...
// Then screenshot it: chrome --headless=new --allow-file-access-from-files --window-size=1210,<height> --force-device-scale-factor=2 --screenshot=<png> file:///<out.html>
// -> each figure at a phone's real content width (343 px), as the site shows it:
// our drawing in dark mode and in light mode (screenshot at --window-size=800,<height>).
const fs = require('fs'), path = require('path');
const [repo, out, ...ids] = process.argv.slice(2);
const css = 'file:///' + path.join(repo, 'app', 'css', 'app.css').replace(/\\/g, '/');
const img = (id) => 'file:///' + path.join(repo, 'protected', 'img', id + '.webp').replace(/\\/g, '/');
const svg = (id, p) => fs.readFileSync(path.join(repo, 'figs-svg', id + '.svg'), 'utf8').replace(/id="([^"]+)"/g, `id="${p}$1"`).replace(/url\(#([^)]+)\)/g, `url(#${p}$1)`);
const rows = ids.map((id) => `<div class="row">
  <div class="phone"><small>dark mode</small><figure class="fig svgfig"><div class="fig-frame"><div class="fig-svg">${svg(id, 'd')}</div></div></figure></div>
  <div class="phone light"><small>light mode</small><figure class="fig svgfig"><div class="fig-frame"><div class="fig-svg">${svg(id, 'l')}</div></div></figure></div>
</div>`).join('');
fs.writeFileSync(out, `<!doctype html><html data-mode="dark"><head><meta charset="utf-8"><link rel="stylesheet" href="${css}"><style>
body{background:#0c0c0e;margin:0;padding:12px;height:auto;overflow:visible}
.row{display:flex;gap:16px;margin-bottom:14px}
.phone{width:375px;box-sizing:border-box;padding:10px 16px 4px;background:var(--bg);border-radius:18px}
.phone small{display:block;font:12px var(--mono);color:var(--text-faint);margin-bottom:-14px}
.light{--bg:#f7f7f5;--bg-2:#efefec;--surface:#e8e8e4;--surface-2:#e0e0db;--surface-3:#d6d6d0;--line:#dcdcd6;--line-2:#cbcbc4;--text:#45454c;--text-2:#2c2c32;--text-dim:#6d6d75;--text-faint:#96969d;--white:#111114;--dg-b:#1f6fb8;--dg-o:#c2621a;--dg-r:#c0392b;--dg-p:#7b4fc9;--dg-g:#1f8a55;--dg-y:#9a7400}
</style></head><body>${rows}</body></html>`);
