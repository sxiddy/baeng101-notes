#!/usr/bin/env node
// Assemble the app.
//   node tools/build.js
// Public (app/): shell, styles, diagram code, payment gate.
// Protected (protected/): notes, questions, summaries (protected/data) and figures (protected/img),
// served only to paid users by api/content.js and api/img.js.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app');
const PDATA = path.join(ROOT, 'protected', 'data');
const PIMG = path.join(ROOT, 'protected', 'img');
const CONTENT = path.join(ROOT, 'content');

const TITLE = 'BAENG101 Notes';
const FONTS = 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400;1,8..60,500&display=swap';

fs.mkdirSync(PDATA, { recursive: true });
for (const f of fs.readdirSync(PDATA)) fs.unlinkSync(path.join(PDATA, f));
fs.rmSync(path.join(APP, 'data'), { recursive: true, force: true }); // never ship notes publicly

const order = (f) => (f.startsWith('chunk-') ? 0 : f.startsWith('q-') ? 1 : f.startsWith('summary-') ? 2 : f.startsWith('papers-') ? 3 : 4);
const contentFiles = fs.readdirSync(CONTENT).filter((f) => /^(chunk|q|summary|papers)-[A-Za-z0-9]+\.js$/.test(f)).sort((a, b) => order(a) - order(b) || a.localeCompare(b));
for (const f of contentFiles) fs.copyFileSync(path.join(CONTENT, f), path.join(PDATA, f));

// Every figure is the site's own drawing (figs-svg/<id>.svg, no slide images), copied to protected/img and
// served by api/img.js; the app inlines each SVG so it follows dark and light mode.
const dims = {};
const SVGSRC = path.join(ROOT, 'figs-svg');
for (const f of fs.readdirSync(PIMG).filter((f) => /\.svg$/.test(f))) fs.unlinkSync(path.join(PIMG, f));
{
  for (const f of fs.readdirSync(SVGSRC).filter((f) => /^m\d+-[a-z0-9-]+\.svg$/.test(f))) {
    const id = f.slice(0, -4), svg = fs.readFileSync(path.join(SVGSRC, f), 'utf8');
    const vb = (svg.match(/viewBox="([^"]+)"/) || [])[1];
    if (!vb) continue;
    const [, , w, h] = vb.trim().split(/[\s,]+/).map(Number);
    dims[id] = { w: Math.round(w), h: Math.round(h), svg: 1 };
    fs.copyFileSync(path.join(SVGSRC, f), path.join(PIMG, f));
  }
}
fs.writeFileSync(path.join(PDATA, 'figs.js'), `FIGDIMS(${JSON.stringify(dims)});\n`);
// Each module's diagrams also travel inside that module's first notes file (same sign-in and payment rules as
// the notes), so they show even when a separate /img request fails; api/img.js stays as the fallback.
{
  const mods = JSON.parse(fs.readFileSync(path.join(CONTENT, 'modules.json'), 'utf8'));
  for (const m of mods) {
    const first = (m.chunks || [])[0], file = first && path.join(PDATA, 'chunk-' + first + '.js');
    if (!file || !fs.existsSync(file)) continue;
    const pack = {};
    for (const id of Object.keys(dims).filter((id) => id.startsWith(m.id + '-'))) pack[id] = fs.readFileSync(path.join(SVGSRC, id + '.svg'), 'utf8');
    if (Object.keys(pack).length) fs.appendFileSync(file, '\nFIGSVG(' + JSON.stringify(pack) + ');\n');
  }
}

// paid diagram code (Modules 3 and 4) lives outside app/ and is served like the notes
const paidViz = fs.readdirSync(path.join(ROOT, 'viz-paid')).filter((f) => /\.js$/.test(f)).sort();
for (const f of paidViz) fs.copyFileSync(path.join(ROOT, 'viz-paid', f), path.join(PDATA, f));

// Modules (names, chunks, free or paid) come from content/modules.json — the one place to add a module.
const MODULES = JSON.parse(fs.readFileSync(path.join(CONTENT, 'modules.json'), 'utf8'));
const filesOf = (m) => [...m.chunks.map((c) => `chunk-${c}.js`), ...[].concat(m.questions || []), `summary-${m.id}.js`].filter(Boolean);
const FREE = [...MODULES.filter((m) => m.free).flatMap(filesOf), 'papers-free.js']; // the CAT-2 papers file is free for everyone signed in
fs.writeFileSync(path.join(APP, 'js', 'modules.js'), `window.MODULES_CONFIG = ${JSON.stringify(MODULES.map(({ id, num, title, free, chunks, syllabus, syllabusRows }) => ({ id, num, title, free, chunks, syllabus, syllabusRows: syllabusRows || [] })))};\n`);
// which module each paid file belongs to, so the owner can unlock a single module for someone
const fileModule = {};
for (const m of MODULES) for (const f of filesOf(m)) fileModule[f] = m.id;
for (const f of paidViz) { const id = (f.match(/^viz-(m[0-9]+)/) || [])[1]; if (id) fileModule[f] = id; }
// interactive tools are Pro only (the one free taster lives in app/js/viz/viz-m4-free.js); the paid papers are free once every module is free
if (MODULES.every((m) => m.free)) FREE.push('papers-paid.js');
fs.writeFileSync(path.join(ROOT, 'api', '_access.json'), JSON.stringify({ freeFiles: [...FREE, 'figs.js'], freeModules: MODULES.filter((m) => m.free).map((m) => m.id), paidModules: MODULES.filter((m) => !m.free).map(({ id, num, title }) => ({ id, num, title })), fileModule }, null, 1) + '\n');
// file lists the gate loads (names only, no content): free modules for everyone, the rest after payment.
const freeFiles = [...paidViz.filter((f) => FREE.includes(f)), ...contentFiles.filter((f) => FREE.includes(f)), 'figs.js'];
const paidFiles = [...paidViz.filter((f) => !FREE.includes(f)), ...contentFiles.filter((f) => !FREE.includes(f))];
const dataFiles = [...freeFiles, ...paidFiles];
fs.writeFileSync(path.join(APP, 'js', 'data-files.js'), `window.FREE_FILES = ${JSON.stringify(freeFiles)};\nwindow.PAID_FILES = ${JSON.stringify(paidFiles)};\nwindow.FILE_MODULE = ${JSON.stringify(fileModule)};\n`);

// 1v1 battle questions, built from the flashcards (api/battle.js sends each one only when it starts and marks
// answers on the server, so nobody can read the answers ahead). topics: id -> [module, title]; cards: topic -> [[front, back]]
const battle = { topics: {}, cards: {} };
global.CHUNK = (c) => (c.topics || []).forEach((t) => {
  const m = MODULES.find((x) => x.chunks.includes(c.chunk)) || {};
  if (!m.id || battle.topics[t.id]) return;
  battle.topics[t.id] = [m.id, t.short || t.title];
  battle.cards[t.id] = (t.flashcards || []).map((f) => [f.front, f.back]);
});
for (const m of MODULES) for (const ch of m.chunks) { const p = path.join(CONTENT, `chunk-${ch}.js`); if (!fs.existsSync(p)) continue; delete require.cache[p]; require(p); }
delete global.CHUNK;
fs.writeFileSync(path.join(ROOT, 'api', '_battle.json'), JSON.stringify(battle) + '\n');

const vizFiles = fs.readdirSync(path.join(APP, 'js', 'viz')).filter((f) => /\.js$/.test(f)).sort();
const scripts = ['js/boot.js', 'js/modules.js', 'js/viz-core.js', ...vizFiles.map((f) => 'js/viz/' + f), 'js/app.js', 'js/data-files.js', 'js/gate.js', 'js/notix-extras.js'];

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${TITLE}</title>
<meta name="description" content="Technical English (BAENG101) CAT-2 topics as short tabbed study notes with diagrams, interactive exercises and scenario questions.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS}">
<link rel="stylesheet" href="css/app.css">
</head>
<body>
<div id="app"></div>
${scripts.map((s) => `<script src="${s}"></script>`).join('\n')}
</body>
</html>
`;
fs.writeFileSync(path.join(APP, 'index.html'), html);
console.log(`protected data: ${dataFiles.length} files · figures: ${Object.keys(dims).length} · viz files: ${vizFiles.length}`);

// the admin page's Content section (modules and question papers): api/_content.json
require('./admin-index').writeIndex();
