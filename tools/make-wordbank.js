// Builds content/chunk-S.js (Module 3, "Word bank: all 100 definitions") from src/wordbank/words.txt.
// Line format: Term|class|differentia (with *bold* parts); "# Group" starts a family. Run: node tools/make-wordbank.js
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const lines = fs.readFileSync(path.join(ROOT, 'src/wordbank/words.txt'), 'utf8').split(/\r?\n/).filter(Boolean);
const NOART = new Set(['Software', 'Equipment', 'Data', 'Headphones', 'Malware', 'Storage', 'Cement', 'Revenue', 'Energy', 'Renewable energy', 'Pressure', 'Temperature', 'Voltage', 'Pollution', 'Sustainability', 'Cybersecurity', 'Phishing', 'Communication', 'Innovation', 'Research', 'Testing', 'Debugging', 'Recycling', 'Photosynthesis', 'Installation', 'Measurement', 'Design', 'Analysis', 'Authentication', 'Biometric authentication', 'Internet banking', 'Telemedicine', 'Quick commerce', '3D Printing', 'Artificial Intelligence (AI)', 'UPI (Unified Payments Interface)', 'Virtual Reality (VR)', 'Airdrop', 'Structure', 'Function', 'Material']);
const KEEPCASE = /^(UPI|USB|AI|VR|3D|Airdrop)/;
const groups = []; let g;
for (const l of lines) {
  if (l.startsWith('#')) { g = { name: l.slice(1).trim(), words: [] }; groups.push(g); continue; }
  const [term, cls, diff] = l.split('|'); g.words.push({ term, cls, diff });
}
const b = (s) => s.replace(/\*([^*]+)\*/g, '<b>$1</b>');
const safe = (s) => s.replace(/`/g, "'").replace(/\$\{/g, '$ {');
const sentence = (w) => {
  const plural = w.term === 'Headphones';
  const art = !NOART.has(w.term) && /^an? /.test(w.cls);
  const t = art ? (/^[aeio]/i.test(w.term) ? 'An ' : 'A ') + (KEEPCASE.test(w.term) ? w.term : w.term[0].toLowerCase() + w.term.slice(1)) : w.term;
  return `${t} ${plural ? 'are' : 'is'} <b>${w.cls}</b> ${b(w.diff)}.`;
};
const n = groups.reduce((a, x) => a + x.words.length, 0);
const hooks = {
  'Devices and hardware': 'Class word: <b>device / instrument / machine</b>. Ask: what does it <b>convert, carry or do</b>?',
  'Digital world and software': 'Class word: <b>software / system / process / data</b>. Ask: what does it <b>store, protect, connect or trick</b>?',
  'Processes and methods': 'Class word: <b>process / procedure</b>. Ask: what goes <b>in</b>, what comes <b>out</b>, and why?',
  'People and documents': 'Class word: <b>a person who…</b> or <b>a written account / document</b>. Ask: what does the person <b>do or believe</b>; for a document, <b>who writes it</b> and <b>what it is for</b>?',
  'Science and the physical world': 'Class word: <b>physical quantity / event / practice</b>. Add the <b>formula or unit</b> when there is one.',
  'Business and everyday life': 'Class word: <b>a company / ceremony / payment / dish…</b>. Ask: <b>where</b> or <b>when</b> it is used?',
};
const tabs = [];
tabs.push({ title: 'How to learn all 100', html: `
          <p class="lead">The definition word bank has <b>100 numbered words</b> (97 different: <b>3D printing, revenue and airdrop are listed twice</b>). Every answer uses the same <b>formal (sentence) definition</b> pattern, so you learn <b>one pattern</b> and <b>six families</b>, not 97 separate answers.</p>
          <h3>The pattern: Term = Class + Differentia</h3>
          <p><b>Term</b> + <b>is a</b> + <b>class</b> (the family it belongs to) + <b>that / which / who</b> + <b>differentia</b> (what makes it different from everything else in that family).</p>
          <table class="tbl"><thead><tr><th>Term</th><th>Class</th><th>Differentia</th></tr></thead><tbody>
            <tr><td>A microphone</td><td>is an electronic device</td><td>that converts sound waves into electrical signals.</td></tr>
            <tr><td>A biography</td><td>is a written account of a person's life</td><td>that is written by someone else.</td></tr>
          </tbody></table>
          <h3>Four steps to memorise them</h3>
          <ol>
            <li><b>Learn by family, not by number.</b> The words fall into 6 families (one tab each). Inside a family the class word is almost the same, so you only memorise the <b>differentia</b>.</li>
            <li><b>Ask the family question.</b> Each tab starts with one question (for a device: "what does it convert or do?"). The answer to that question is the differentia.</li>
            <li><b>Learn opposite pairs together:</b> optimist / pessimist, biography / autobiography, emoji / emoticon, password / username, authentication / biometric authentication, debugging / testing. Knowing one tells you most of the other.</li>
            <li><b>Test yourself with Recall on.</b> Switch on <b>Recall</b> (top right): the bold class and differentia are hidden. Say the full sentence for each word, then reveal. Do one family a day, and the Self-test tab for mixed practice.</li>
          </ol>
          <div class="note exam"><p>In the exam write <b>one complete sentence</b>: term, class, differentia, with an <b>article</b> ("A sensor is a device that…"). Do not use the term itself inside the definition (no circular definitions), keep the class <b>narrow</b> ("an electronic device", not "a thing") and make the differentia fit <b>only</b> that term.</p></div>
          <div class="note heads-up"><p>These definitions were written for this site in the course's formal-definition pattern; the word bank gives only the words. "Dias" is the word bank's spelling of <b>dais</b>.</p></div>
        ` });
for (const gr of groups) {
  tabs.push({ title: `${gr.name} (${gr.words.length})`, html: `
          <p class="lead">${hooks[gr.name] || ''}</p>
          <table class="tbl"><thead><tr><th>Word</th><th>Formal definition</th></tr></thead><tbody>
${gr.words.map((w) => `            <tr><td><b>${w.term}</b></td><td>${safe(sentence(w))}</td></tr>`).join('\n')}
          </tbody></table>
        ` });
}
tabs.push({ title: 'Self-test', html: `
          <p class="lead">Cover the definitions: for each word say the <b>class</b> and the <b>differentia</b> in one sentence, then check in its family tab.</p>
${groups.map((gr) => `          <h3>${gr.name}</h3>\n          <div class="chips">${gr.words.map((w) => `<span class="chip">${w.term}</span>`).join('')}</div>`).join('\n')}
        ` });
const topic = { id: 'm3-word-bank', title: 'Word bank: all 100 definitions', short: 'Word bank (100 words)', blurb: "Formal definitions (term + class + differentia) for every word in the course's definition word bank, grouped into 6 families, with a method to memorise them.", source: 'Module 3 Reading / Definition_Word Bank.pdf', tabs };
const cards = [].concat(...groups.map((gr) => gr.words.map((w) => ({ front: `Define: ${w.term}`, back: sentence(w) }))));
const oneLiners = ['A formal definition = term + class + differentia, in one sentence with an article.', 'Learn the 97 words by family: the class is shared, so only the differentia is new.', '3D printing, revenue and airdrop appear twice in the 100-word list.'];
const out = `CHUNK({\n  chunk: 'S',\n  module: 'm3',\n  topics: [\n    {\n      id: ${JSON.stringify(topic.id)},\n      title: ${JSON.stringify(topic.title)},\n      short: ${JSON.stringify(topic.short)},\n      blurb: ${JSON.stringify(topic.blurb)},\n      source: ${JSON.stringify(topic.source)},\n      formulas: [],\n      oneLiners: [\n${oneLiners.map((x) => `        ${JSON.stringify(x)},`).join('\n')}\n      ],\n      flashcards: [\n${cards.map((c) => `        { front: ${JSON.stringify(c.front)}, back: ${JSON.stringify(c.back)} },`).join('\n')}\n      ],\n      tabs: [\n${tabs.map((t) => `        { title: ${JSON.stringify(t.title)}, html: \`${t.html}\` },`).join('\n')}\n      ],\n    },\n  ],\n});\n`;
fs.writeFileSync(path.join(ROOT, 'content/chunk-S.js'), out);
console.log('words', n, 'tabs', tabs.length);
