// Extract plain text from the course material in src/ (pptx, docx) into src/text/*.txt.
// Local helper only; src/ is gitignored.
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const SRC = path.join(__dirname, '..', 'src'), OUT = path.join(SRC, 'text');
fs.mkdirSync(OUT, { recursive: true });

const unzipList = f => execFileSync('unzip', ['-Z1', f], { encoding: 'utf8', maxBuffer: 1 << 28 }).split('\n').filter(Boolean);
const unzipCat = (f, e) => execFileSync('unzip', ['-p', f, e], { encoding: 'utf8', maxBuffer: 1 << 28 });
const decode = s => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n)).replace(/&amp;/g, '&');
const paras = xml => {
  // one line per paragraph (a:p in pptx, w:p in docx); tabs/breaks become spaces
  const out = [];
  for (const p of xml.split(/<\/(?:a|w):p>/)) {
    let t = '';
    const re = /<(?:a|w):t(?:\s[^>]*)?>([^<]*)<\/(?:a|w):t>|<w:tab\/>|<(?:a|w):br\/>/g;
    let m;
    while ((m = re.exec(p))) t += m[1] !== undefined ? m[1] : ' ';
    t = decode(t).replace(/\s+/g, ' ').trim();
    if (t) out.push(t);
  }
  return out.join('\n');
};

function pptx(f) {
  const ents = unzipList(f);
  const slides = ents.filter(e => /^ppt\/slides\/slide\d+\.xml$/.test(e)).sort((a, b) => +a.match(/\d+/)[0] - +b.match(/\d+/)[0]);
  let s = '';
  for (const e of slides) {
    const n = e.match(/\d+/)[0];
    s += `\n=== Slide ${n} ===\n` + paras(unzipCat(f, e)) + '\n';
    const note = `ppt/notesSlides/notesSlide${n}.xml`;
    if (ents.includes(note)) { const t = paras(unzipCat(f, note)).replace(/^\d+$/m, '').trim(); if (t) s += `[notes] ${t}\n`; }
  }
  const media = ents.filter(e => e.startsWith('ppt/media/')).length;
  return s + `\n(${slides.length} slides, ${media} media files)\n`;
}
function docx(f) { return paras(unzipCat(f, 'word/document.xml')); }

function walk(d) { return fs.readdirSync(d, { withFileTypes: true }).flatMap(x => x.isDirectory() ? (x.name === 'text' ? [] : walk(path.join(d, x.name))) : [path.join(d, x.name)]); }
for (const f of walk(SRC)) {
  const ext = path.extname(f).toLowerCase();
  let t = null;
  try { if (ext === '.pptx') t = pptx(f); else if (ext === '.docx') t = docx(f); } catch (e) { t = 'ERROR ' + e.message; }
  if (t == null) { console.log('skip', path.relative(SRC, f)); continue; }
  const name = path.relative(SRC, f).replace(/[\\/]/g, '__').replace(/\.\w+$/, '') + '.txt';
  fs.writeFileSync(path.join(OUT, name), t);
  console.log('ok  ', name, t.length);
}
