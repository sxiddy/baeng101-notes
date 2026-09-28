/* Module 4 · Writing — summary (précis) and abstract widgets (paid module). Built on ew-kit.js. */
(function () {
  'use strict';
  const EW = window.EW;
  const wc = (s) => String(s).split(/\s+/).filter(Boolean).length;

  // ---------------------------------------------------------------- summary-trimmer
  // "The Northern Lights" (slides 28–29) split into phrases. e = essential idea (warn if cut), with the reason.
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
      model.innerHTML = `<h4>Model summary (${wc(MODEL)} words)</h4><p>${MODEL}</p><p style="margin-top:8px"><small>Cutting is only the first pass. A real précis then rewrites the kept ideas in your own words and joins them, as here. The slides' own model says the ancient people thought the lights were "dragon on fire", which merges two beliefs (fiery dragons; the heavens on fire), and that scientists don't know what the lights <em>are</em>, when the passage says what <em>causes</em> them.</small></p>`;
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

  // ---------------------------------------------------------------- wordiness-fixer
  VIZ.register('wordiness-fixer', {
    title: 'Cut the wordiness', kind: 'Practice',
    mount(body, api) {
      EW.rounds(body, api, {
        instr: 'Each sentence is wordy or redundant. Tap the version that is shortest <b>without losing meaning</b>.',
        items: [
          { tag: 'From the slides', q: '"The Chairman wants to meet those employees who are working in the production department, so that he can discuss the difficult crisis immediately."',
            options: ['The Chairman wants to meet the employees of the production department to discuss the crisis immediately.', 'The Chairman wants to meet those employees working in production, so that he can discuss the difficult crisis at once.', 'The Chairman wants to meet employees.'], correct: 0,
            why: 'The slides\' answer, 23 → 16 words: "who are working in" → "of", "so that he can discuss" → "to discuss", and "difficult" goes because a crisis is difficult by definition. The three-word version is shorter but loses which employees, why and when.' },
          { tag: 'From the slides', q: '"The secretary\'s proposal was adopted with the full agreement of all the members."',
            options: ['The members unanimously adopted the secretary\'s proposal.', 'The secretary\'s proposal was adopted with the full and complete agreement of every member.', 'The proposal was adopted.'], correct: 0,
            why: '"With the full agreement of all the members" is one word, <b>unanimously</b>, and the active voice puts the doer first: 13 → 7 words. "The proposal was adopted" drops whose proposal and that everyone agreed.' },
          { q: '"Due to the fact that the pump failed, the line was shut down."',
            options: ['Because the pump failed, the line was shut down.', 'Due to the fact of the pump failure, the line was shut down.', 'The line was shut down.'], correct: 0,
            why: '"Due to the fact that" = <b>because</b>. Dropping the cause altogether loses the main point.' },
          { q: '"At this point in time, the results of the tests are not yet available."',
            options: ['The test results are not yet available.', 'At present, the results of the tests are not available at this time.', 'No results.'], correct: 0,
            why: '"At this point in time" adds nothing that "not yet" doesn\'t already say, and "the results of the tests" is "the test results". "No results" is a note, not a sentence.' },
          { q: '"The two samples were exactly identical in each and every respect."',
            options: ['The two samples were identical.', 'The two samples were exactly identical in every respect.', 'The samples were similar.'], correct: 0,
            why: '"Identical" already means the same in every respect, so "exactly" and "each and every respect" are redundant. "Similar" changes the meaning.' },
          { q: '"In order to reduce costs, the team made a decision to cut down on the number of test runs."',
            options: ['To reduce costs, the team decided to run fewer tests.', 'In order to reduce costs, the team decided to cut down the number of test runs.', 'The team ran fewer tests.'], correct: 0,
            why: '"In order to" → "to", "made a decision" → "decided", "cut down on the number of" → "fewer". The last option drops why, which is the point of the sentence.' },
          { q: '"The past history of the project shows that delays are a common occurrence."',
            options: ['The project\'s history shows that delays are common.', 'The past history of the project shows delays are common occurrences.', 'Delays happen.'], correct: 0,
            why: 'History is always past, and "a common occurrence" is just "common". "Delays happen" loses the evidence (the project\'s history).' },
          { q: '"The report, which was written by the committee, gives a description of the reasons why the bridge collapsed."',
            options: ['The committee\'s report explains why the bridge collapsed.', 'The report written by the committee gives a description of why the bridge collapsed.', 'The bridge collapsed.'], correct: 0,
            why: '"Which was written by the committee" → "the committee\'s"; "gives a description of the reasons why" → "explains why". The last option drops the report entirely.' },
          { q: '"It is to be noted that the final outcome will depend on the amount of rainfall."',
            options: ['The outcome will depend on the rainfall.', 'Note that the final outcome depends on the amount of rainfall.', 'Rainfall matters.'], correct: 0,
            why: '"It is to be noted that" is an empty opener, and "final outcome" is redundant. "Rainfall matters" is too vague: matters for what?' },
        ],
      });
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
