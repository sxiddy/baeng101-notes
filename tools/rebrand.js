// One-off: turn the BACHY105 (Applied Chemistry) engine into BAENG101 (Technical English).
// Plain split/join replacements (no regex replacement strings, so "$" stays "$"). Fails loudly if a target is missing.
const fs = require('fs'), path = require('path');
const R = path.join(__dirname, '..');
let missing = 0;
function patch(file, pairs, { global = [] } = {}) {
  const f = path.join(R, file);
  let s = fs.readFileSync(f, 'utf8');
  for (const [a, b] of pairs) {
    if (!s.includes(a)) { console.log('MISSING in', file, '::', a.slice(0, 90)); missing++; continue; }
    s = s.split(a).join(b);
  }
  for (const [a, b] of global) s = s.split(a).join(b);
  fs.writeFileSync(f, s);
}
const G = [['BACHY105', 'BAENG101'], ['bachy105', 'baeng101'], ['Applied Chemistry', 'Technical English']];

patch('app/js/app.js', [
  ["const words = ['Applied', 'Chemistry'];", "const words = ['Technical', 'English'];"],
  ["'heads-up': ['info', 'Heads-up: slide vs textbook']", "'heads-up': ['info', 'Heads-up']"],
  ["<p class=\"blurb\">Modules 2, 3 and 4, rebuilt as short tabbed notes with every diagram from the slides${nViz ? `, ${nViz} interactive models` : ''} and ${QS.length} questions that make you use what you read.",
   "<p class=\"blurb\">The CAT-2 portion, rebuilt as short tabbed notes with clear diagrams${nViz ? `, ${nViz} interactive exercises` : ''} and ${QS.length} questions that make you use what you read."],
  ['Slide diagrams are reproduced from the course slides and credited to their authors; the notes, questions and interactive models are written for this site.',
   'The notes, diagrams, questions and interactive exercises are written and drawn for this site; short quoted examples are credited to their sources.'],
  ['<p>Notes, slide diagrams, interactive models, questions, quiz, flashcards and summary. One-time UPI payment.</p>',
   '<p>Notes, diagrams, interactive exercises, questions, quiz, flashcards and summary. One-time UPI payment.</p>'],
  ["<a class=\"tile\" href=\"#formulas\"><span class=\"tt\">${icon('sigma')}Formula sheet</span><p>Every equation, the numbers worth memorising and the classic traps, per module.</p></a>",
   "<a class=\"tile\" href=\"#formulas\"><span class=\"tt\">${icon('rules')}Rules & templates</span><p>The rules to remember, ready-to-copy answer templates and the classic traps, per module.</p></a>"],
  ["<a class=\"tile\" href=\"#lab\"><span class=\"tt\">${icon('flask')}Lab bench</span>${nViz ? `<span class=\"big\">${nViz}</span>` : ''}<p>All the interactive models and calculators in one place: Nernst, Beer–Lambert, Bragg, Scherrer and more.</p></a>",
   "<a class=\"tile\" href=\"#lab\"><span class=\"tt\">${icon('puzzle')}Practice lab</span>${nViz ? `<span class=\"big\">${nViz}</span>` : ''}<p>Every interactive exercise in one place: definition builder, summary trimmer, conflict-style grid, SoP builder and more.</p></a>"],
  ['<p class="muted">Progress, tags, highlights and notes are saved in this browser only. Back them up to move them to another device.</p>',
   '<p class="muted">Progress, tags, highlights and notes follow your student account, so they show up on your phone and your laptop. A backup makes a copy you can keep.</p>'],
  ["<a class=\"sb-link\" href=\"#formulas\" data-key=\"formulas\">${icon('sigma')}<span>Formula sheet</span></a>",
   "<a class=\"sb-link\" href=\"#formulas\" data-key=\"formulas\">${icon('rules')}<span>Rules & templates</span></a>"],
  ["<a class=\"sb-link\" href=\"#lab\" data-key=\"lab\">${icon('flask')}<span>Lab bench</span>",
   "<a class=\"sb-link\" href=\"#lab\" data-key=\"lab\">${icon('puzzle')}<span>Practice lab</span>"],
  ['Big ideas, comparison tables, every equation, the numbers to remember and the classic traps, on one page',
   'Big ideas, comparison tables, the rules and templates to remember and the classic traps, on one page'],
  ['<h2 class="h-sec">Equations to write from memory <small>${forms.length}</small></h2><div class="forms">${forms.map((f) => `<div class="form">',
   '<h2 class="h-sec">Rules to remember <small>${forms.length}</small></h2><div class="forms">${forms.map((f) => `<div class="form recallable">'],
  ["${s && s.traps && s.traps.length ? `<section class=\"sum-sec\"><h2 class=\"h-sec\">Traps",
   "${s && s.templates && s.templates.length ? `<section class=\"sum-sec\"><h2 class=\"h-sec\">Templates <small>${s.templates.length}</small></h2><div class=\"tpls\">${s.templates.map(tplHTML).join('')}</div></section>` : ''}\n      ${s && s.traps && s.traps.length ? `<section class=\"sum-sec\"><h2 class=\"h-sec\">Traps"],
  ["troubleshoot: 'Troubleshoot', design: 'Design', numerical: 'Numerical', interpret: 'Interpret' };",
   "troubleshoot: 'Troubleshoot', design: 'Write', numerical: 'Numerical', interpret: 'Interpret', rewrite: 'Rewrite', spot: 'Spot the error', analyse: 'Analyse' };\n  const tplHTML = (t) => `<div class=\"tpl\"><div class=\"tpl-name\">${rt(t.name)}</div>${t.note ? `<p class=\"tpl-note\">${t.note}</p>` : ''}<div class=\"tpl-body\">${t.html}</div></div>`;"],
  // rules & templates sheet
  ["setCrumbs([{ t: 'Home', href: '#home' }, { t: 'Formula sheet' }]); setActive('formulas'); document.title = 'Formula sheet · BACHY105 Notes';",
   "setCrumbs([{ t: 'Home', href: '#home' }, { t: 'Rules & templates' }]); setActive('formulas'); document.title = 'Rules & templates · BACHY105 Notes';"],
  ['<div class="eyebrow"><span class="code">Practice</span><span>Formula sheet</span></div>\n      <h1 class="h-display">Formula sheet</h1>\n      <p class="blurb">Everything you should be able to write from memory, grouped by module. Turn on Recall to test the key values.</p>\n      <div class="vseg" style="margin-bottom:10px"><button class="vseg-btn" data-t="f">Equations</button><button class="vseg-btn" data-t="n">Numbers</button><button class="vseg-btn" data-t="x">Traps</button></div>',
   '<div class="eyebrow"><span class="code">Practice</span><span>Rules &amp; templates</span></div>\n      <h1 class="h-display">Rules &amp; templates</h1>\n      <p class="blurb">Everything you should know by heart, grouped by module: the rules, the answer layouts to copy, and the mistakes that cost marks. Turn on Recall to test yourself.</p>\n      <div class="vseg" style="margin-bottom:10px"><button class="vseg-btn" data-t="f">Rules</button><button class="vseg-btn" data-t="n">Templates</button><button class="vseg-btn" data-t="x">Traps</button></div>'],
  ["        } else if (tab === 'n') {\n          inner = s.numbers && s.numbers.length ? `<div class=\"nums recallable\">${s.numbers.map((x) => `<div><div class=\"nv\"><b>${x.value}</b></div><div class=\"nw\">${x.what}</div></div>`).join('')}</div>`\n            : `<ul class=\"prose\">${[].concat(...m.topics.map((t) => t.oneLiners || [])).map((x) => `<li>${x}</li>`).join('')}</ul>`;",
   "        } else if (tab === 'n') {\n          inner = s.templates && s.templates.length ? `<div class=\"tpls recallable\">${s.templates.map(tplHTML).join('')}</div>` : '';"],
  // practice lab
  ["setCrumbs([{ t: 'Home', href: '#home' }, { t: 'Lab bench' }]); setActive('lab'); document.title = 'Lab bench · BACHY105 Notes';",
   "setCrumbs([{ t: 'Home', href: '#home' }, { t: 'Practice lab' }]); setActive('lab'); document.title = 'Practice lab · BACHY105 Notes';"],
  ['<div class="eyebrow"><span class="code">Practice</span><span>${ids.length} interactive models</span></div>\n      <h1 class="h-display">Lab bench</h1>\n      <p class="blurb">Every animation, model and calculator from the notes, in one place. Open one, play with it, then jump to the tab where it\'s explained.</p>\n      ${ids.length ? \'\' : \'<div class="empty">Interactive models are still loading.</div>\'}',
   '<div class="eyebrow"><span class="code">Practice</span><span>${ids.length} interactive exercises</span></div>\n      <h1 class="h-display">Practice lab</h1>\n      <p class="blurb">Every interactive exercise from the notes, in one place. Open one, try it, then jump to the tab where it\'s explained.</p>\n      ${ids.length ? \'\' : \'<div class="empty">Interactive exercises are still loading.</div>\'}'],
  // search
  ["INDEX.push({ k: 'Formula',", "INDEX.push({ k: 'Rule',"],
  ['placeholder="Search topics, sections, questions, formulas"', 'placeholder="Search topics, sections, questions, rules"'],
  ["'e.g. The SOFC temperature says 80 °C but the slide says 800–1000 °C'", "'e.g. The sentence definition example is missing its class'"],
  // battle
  ['one battle on a single Module 2 topic.', 'one battle on a single Module 1 topic.'],
  ['free accounts get one preview battle on one Module 2 topic.', 'free accounts get one preview battle on one Module 1 topic.'],
  // icons for the English pages
  ["    flask: '", "    rules: '<path d=\"M6 3h9l4 4v14H6z\"/><path d=\"M14 3v5h5M9 12h7M9 16h7\"/>',\n    puzzle: '<path d=\"M4 8h3.5a2 2 0 1 1 4 0H15v3.5a2 2 0 1 1 0 4V20H4z\"/>',\n    flask: '"],
], { global: G });

patch('app/js/gate.js', [
  ['their notes, slide diagrams, interactive models, questions, quiz, flashcards and summaries.', 'their notes, diagrams, interactive exercises, questions, quiz, flashcards and summaries.'],
], { global: G });

patch('api/_lib.js', [
  ["const PRICE = parseInt(process.env.PRICE_PAISE || '5000', 10); // ₹50 default;", "const PRICE = parseInt(process.env.PRICE_PAISE || '3000', 10); // ₹30 default;"],
  // match on our product tag only, never on the amount (the chemistry site uses the same Razorpay account)
  ["  && ((p.notes || {}).product === 'bachy105-notes' || p.amount === PRICE);", "  && (p.notes || {}).product === 'baeng101-notes';"],
], { global: G });
for (const f of ['api/create-order.js', 'app/stats.html', 'app/privacy.html', 'tools/build.js', 'app/js/boot.js', 'app/js/viz-core.js', 'api/stats.js', 'api/restore.js', 'api/login.js', 'api/session.js', 'README.md']) patch(f, [], { global: G });
console.log(missing ? `${missing} target(s) missing` : 'all patched');
