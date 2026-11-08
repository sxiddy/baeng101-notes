/* Module 4 · Writing — summary (précis) and abstract widgets (paid module). Built on ew-kit.js. */
(function () {
  'use strict';
  const EW = window.EW;
  const wc = (s) => String(s).split(/\s+/).filter(Boolean).length;

  // ---------------------------------------------------------------- summary-trimmer
  // "The Northern Lights" split into phrases. e = essential idea (warn if cut), with the reason.
  const NL = [
    { t: 'There are times when', m: 1 },
    { t: 'the night sky glows with bands of color.', e: 'what the lights are: glowing bands of colour in the night sky' },
    { t: 'The bands may begin as cloud shapes and then spread into a great arc across the entire sky.' },
    { t: 'They may fall in folds like a curtain drawn across the heavens.' },
    { t: 'The lights usually grow brighter, then suddenly dim.' },
    { t: 'During this time the sky glows with pale yellow, pink, green, violet, blue, and red.' },
    { t: 'These lights are called the Aurora Borealis.', e: 'the name of the lights, which the reader needs' },
    { t: 'Some people call them the Northern Lights.', e: 'the common name, the one most readers know' },
    { t: 'Scientists have been watching them for hundreds of years.', o: 1 },
    { t: 'They are not quite sure what causes them.', e: 'the main scientific point: the cause is still unknown' },
    { t: 'In ancient times people were afraid of the Lights.', e: 'how people saw them in the past' },
    { t: 'They imagined that they saw fiery dragons in the sky.', o: 1 },
    { t: 'Some even concluded that the heavens were on fire.', o: 1 },
  ];
  const MODEL = 'The Aurora Borealis, or Northern Lights, are bands of colour that glow in the night sky. Scientists still do not know exactly what causes them. Ancient people feared the lights, imagining fiery dragons or a burning sky.';
  VIZ.register('summary-trimmer', {
    title: 'Summary trimmer', kind: 'Interactive',
    mount(body, api) {
      const total = NL.reduce((n, p) => n + wc(p.t), 0);
      const target = Math.floor(total / 3);
      const wrap = api.el('div', { class: 'ew' }, body);
      api.el('p', { class: 'ew-instr', html: `Tap a phrase to cut it, tap again to bring it back. Get under one-third (<b>${target}</b> of ${total} words) without cutting a key idea.` }, wrap);
      const text = api.el('div', { class: 'ew-text' }, wrap);
      const count = api.el('p', { class: 'ew-score' }, wrap);
      const meter = api.el('div', { class: 'ew-meter' }, wrap);
      const bar = api.el('i', null, meter);
      const fb = api.el('div', { class: 'ew-fb' }, wrap);
      const model = api.el('div', { class: 'ew-card' }, wrap);
      model.hidden = true;
      const foot = api.el('div', { class: 'ew-foot' }, wrap);
      const score = api.el('span', { class: 'ew-score' }, foot);
      const btns = api.el('div', { class: 'ew-row' }, foot);
      api.button('Check', check, btns, { primary: true });
      const showBtn = api.button('Show model summary', () => { model.hidden = !model.hidden; showBtn.innerHTML = model.hidden ? 'Show model summary' : 'Hide model summary'; }, btns);
      api.button('Reset', reset, btns);
      let cut;
      model.innerHTML = `<h4>Model summary (${wc(MODEL)} words)</h4><p>${MODEL}</p><p style="margin-top:8px"><small>Cutting is only the first pass. A real précis then rewrites the kept ideas in your own words and joins them, as here. The course's own model says the ancient people thought the lights were "dragon on fire", which merges two beliefs (fiery dragons; the heavens on fire), and that scientists don't know what the lights <em>are</em>, when the passage says what <em>causes</em> them.</small></p>`;
      function kept() { return NL.reduce((n, p, k) => n + (cut[k] ? 0 : wc(p.t)), 0); }
      function paint() {
        text.innerHTML = NL.map((p, k) => `<span class="ew-tok${cut[k] ? ' cut' : ''}" data-k="${k}" role="button" tabindex="0">${p.t}</span>`).join(' ');
        const n = kept();
        count.innerHTML = `Kept <b>${n}</b> of ${total} words · target <b>≤ ${target}</b>`;
        bar.style.width = Math.round(n / total * 100) + '%';
        meter.className = 'ew-meter ' + (n <= target ? 'ok' : 'over');
        score.innerHTML = `Cut <b>${cut.filter(Boolean).length}</b> of ${NL.length} phrases`;
      }
      function reset() { cut = NL.map(() => false); fb.className = 'ew-fb'; fb.innerHTML = ''; model.hidden = true; showBtn.innerHTML = 'Show model summary'; paint(); }
      function toggle(k) {
        cut[k] = !cut[k];
        const p = NL[k];
        if (cut[k] && p.e) { fb.className = 'ew-fb no'; fb.innerHTML = `<span class="tag">Careful</span>That phrase carries a key idea: <b>${p.e}</b>. Cutting it breaks completeness. Tap it again to restore it.`; }
        else if (cut[k] && p.m) { fb.className = 'ew-fb ok'; fb.innerHTML = '<span class="tag">Good cut</span>"There are times when" is a lead-in with no content of its own.'; }
        else if (cut[k] && !p.o) { fb.className = 'ew-fb ok'; fb.innerHTML = '<span class="tag">Good cut</span>A minor descriptive detail. The reader doesn\'t need it to understand the passage.'; }
        else if (cut[k]) { fb.className = 'ew-fb ok'; fb.innerHTML = '<span class="tag">Your call</span>Useful colour, but not a main idea. Cut it if you need the words.'; }
        else { fb.className = 'ew-fb'; fb.innerHTML = ''; }
        paint();
      }
      function check() {
        const n = kept();
        const lost = NL.filter((p, k) => p.e && cut[k]);
        const minor = NL.filter((p, k) => !p.e && !p.o && !p.m && !cut[k]);
        const lead = NL.some((p, k) => p.m && !cut[k]);
        if (lost.length) {
          fb.className = 'ew-fb no';
          fb.innerHTML = `<span class="tag">Key idea lost</span>You cut ${lost.length === 1 ? 'a key idea' : lost.length + ' key ideas'}:<ul style="margin:8px 0 0;padding-left:18px">${lost.map((p) => `<li><b>${p.t}</b> (${p.e})</li>`).join('')}</ul>`;
        } else if (n > target) {
          fb.className = 'ew-fb no';
          fb.innerHTML = `<span class="tag">${n - target} over</span>All key ideas kept, but ${n} words is more than one-third (${target}). ${minor.length ? 'Cut the remaining descriptive details (cloud shapes, curtain, colours, brightening) first.' : lead ? 'Cut the empty lead-in "There are times when".' : 'Cut the optional sentences (hundreds of years, dragons, heavens on fire).'}`;
        } else {
          fb.className = 'ew-fb ok';
          fb.innerHTML = `<span class="tag">Within target</span>${n} words, every key idea kept: what the lights are, both names, the unknown cause, the ancient fear. Next step in a real précis: rewrite these in your own words and link them. Compare with the model summary.`;
        }
      }
      api.listen(text, 'click', (e) => { const t = e.target.closest('.ew-tok'); if (t) toggle(+t.dataset.k); });
      api.listen(text, 'keydown', (e) => { const t = e.target.closest('.ew-tok'); if (t && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); toggle(+t.dataset.k); } });
      reset();
    },
  });

  // ---------------------------------------------------------------- abstract-sorter
  VIZ.register('abstract-sorter', {
    title: 'Sort the abstract', kind: 'Practice',
    mount(body, api) {
      EW.sorter(body, api, {
        instr: 'Sentences from the sample abstracts. Tap one, then tap the part of an abstract it belongs to.',
        slots: [{ k: 'a', label: 'Aim' }, { k: 'm', label: 'Method' }, { k: 'f', label: 'Findings' }, { k: 'c', label: 'Conclusion' }],
        pieces: [
          { text: 'The study aimed to investigate the impact of online learning on student engagement.', slot: 'a', why: 'It says what was studied: the purpose.' },
          { text: 'The objective was to determine whether harvested rainwater could supplement daily water requirements.', slot: 'a', why: '"The objective was…" states the aim.' },
          { text: 'Data were collected through online questionnaires, attendance records and faculty feedback.', slot: 'm', why: 'How the data were gathered is method.' },
          { text: '180 employees from six IT companies in Chennai were surveyed between February and April 2024.', slot: 'm', why: 'Who, where and when: method.' },
          { text: 'Two offices introduced indoor plants, while the others served as control groups.', slot: 'm', why: 'The study design (what was done to whom) is method.' },
          { text: 'Institutions reduced municipal water usage by about 30% during the rainy season.', slot: 'f', why: 'A measured result with a number: a finding.' },
          { text: 'Food packaging and disposable bottles accounted for nearly 70% of plastic waste.', slot: 'f', why: 'What the audits showed: a finding.' },
          { text: 'Employees working remotely for long periods reported communication gaps.', slot: 'f', why: 'What the data showed about one group: a finding, not yet the general claim.' },
          { text: 'The study concluded that hybrid work is effective when supported by regular communication.', slot: 'c', why: 'The general claim drawn from the findings.' },
          { text: 'The study concluded that rainwater harvesting is an economical and sustainable solution.', slot: 'c', why: '"The study concluded that…" signals the conclusion.' },
        ],
        done: 'All sorted. Aim says what and why, method says who, where, when and how, findings give what the data showed, and the conclusion says what it means.',
      });
    },
  });
})();
