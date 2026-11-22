// Puts <div data-viz="id"></div> at the end of a tab: node tools/place-viz.js <topic-id> <tab-title-start> <viz-id>
const fs = require('fs'), path = require('path');
const [tid, title, vid] = process.argv.slice(2);
for (const f of fs.readdirSync('content').filter((x) => /^chunk-/.test(x))) {
  const p = path.join('content', f); let s = fs.readFileSync(p, 'utf8');
  const ti = s.indexOf(`id: '${tid}'`); if (ti < 0) continue;
  const at = s.indexOf(`title: '${title}`, ti); if (at < 0) { console.error('tab not found'); process.exit(1); }
  if (s.slice(at, s.indexOf('`', s.indexOf('html: `', at) + 7)).includes(`data-viz="${vid}"`)) { console.log('already placed'); process.exit(0); }
  const end = s.indexOf('`', s.indexOf('html: `', at) + 7);
  s = s.slice(0, end) + `  <div data-viz="${vid}"></div>\n        ` + s.slice(end);
  fs.writeFileSync(p, s); console.log('placed', vid, 'in', f); process.exit(0);
}
console.error('topic not found'); process.exit(1);
