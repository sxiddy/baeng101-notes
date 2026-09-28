/* Module 3 · Reading — technical definitions widgets (free module). Built on ew-kit.js. */
(function () {
  'use strict';
  const EW = window.EW;

  // ---------------------------------------------------------------- def-builder
  // Build a sentence definition: pick the class, then the distinguishing feature; see the finished sentence.
  const BUILD = [
    { term: 'A thermometer', classes: [['an instrument', 1, 'A real category of devices that measure things.'], ['a thing', 0, '"Thing" fits everything, so it tells the reader nothing.'], ['a glass tube', 0, 'Too narrow: digital thermometers have no glass tube.']],
      feats: [['that measures temperature', 1, 'This separates it from other instruments (barometers measure pressure).'], ['that is useful in hospitals', 0, 'Many instruments are useful in hospitals; this does not single it out.'], ['that thermometers use', 0, 'Circular: it defines the term with itself.']] },
    { term: 'Stress', classes: [['an applied force', 1, 'The slides\' class for stress in mechanics.'], ['a feeling of worry', 0, 'Wrong sense of the word for an engineering document.'], ['a kind of strain', 0, 'Strain is the effect; stress is the force that causes it.']],
      feats: [['that strains or deforms a body', 1, 'This is what distinguishes stress from other forces in the slides.'], ['that is measured', 0, 'Every force can be measured; nothing distinguishing.'], ['that is very stressful', 0, 'Circular, and the wrong meaning.']] },
    { term: 'A Bunsen burner', classes: [['a small laboratory burner', 1, 'Specific and correct: the slides\' class.'], ['a fire', 0, 'A burner makes a flame; it is not the flame.'], ['equipment', 0, 'Too broad: a beaker is equipment too.']],
      feats: [['consisting of a vertical metal tube connected to a gas source', 1, 'This sets it apart from spirit lamps and hot plates.'], ['that chemistry students use', 0, 'Students use many burners; this does not distinguish it.'], ['invented by Bunsen', 0, 'That is history (an expansion method), not a distinguishing feature of the object.']] },
    { term: 'A chair', classes: [['a piece of furniture', 1, 'The natural category for a chair.'], ['a wooden object', 0, 'Too narrow (plastic chairs) and too broad (a wooden spoon).'], ['a seat', 0, 'Close, but a stool and a bench are seats too, so you would still need to separate them.']],
      feats: [['for one person to sit on, with a seat and a back', 1, '"One person" rules out a sofa and a bench; "a back" rules out a stool.'], ['used for sitting', 0, 'A sofa, bench and stool are also used for sitting.'], ['found in every classroom', 0, 'Where it is found does not say what it is.']] },
    { term: 'A carburettor', classes: [['a mixing device', 1, 'The slides\' class: it mixes air and fuel.'], ['an engine', 0, 'It is a part inside an engine, not the engine.'], ['a car part', 0, 'Too broad: a tyre is a car part too.']],
      feats: [['in petrol engines that blends air and fuel into a vapour for combustion', 1, 'This says exactly what it mixes and why.'], ['that carburettes the fuel', 0, 'Circular.'], ['that is expensive to repair', 0, 'An opinion, not a distinguishing feature.']] },
  ];
  VIZ.register('def-builder', {
    title: 'Definition builder', kind: 'Interactive',
    mount(body, api) {
      const wrap = api.el('div', { class: 'ew' }, body);
      api.el('p', { class: 'ew-instr', html: 'Build a sentence definition: pick the best <b>class</b>, then the best <b>distinguishing feature</b>.' }, wrap);
      const box = api.el('div', { class: 'ew' }, wrap);
      const foot = api.el('div', { class: 'ew-foot' }, wrap);
      const score = api.el('span', { class: 'ew-score' }, foot);
      const btns = api.el('div', { class: 'ew-row' }, foot);
      const next = api.button('Next term', () => { i++; stage = 0; paint(); }, btns, { primary: true });
      api.button('Reset', () => { i = 0; stage = 0; good = 0; tries = 0; paint(); }, btns);
      let i = 0, stage = 0, good = 0, tries = 0, pickC = null, pickF = null;
      function sentence() {
        const t = BUILD[i];
        return `<b>${t.term}</b> is <span class="ew-tok ${stage > 0 ? 'hit' : 'pick'}">${stage > 0 ? pickC : '[class]'}</span> <span class="ew-tok ${stage > 1 ? 'hit' : 'pick'}">${stage > 1 ? pickF : '[distinguishing features]'}</span>.`;
      }
      function paint(msg) {
        // after the last term: a finish screen instead of starting over
        if (i >= BUILD.length) {
          next.hidden = true;
          const all = good === tries;
          box.innerHTML = `<p class="ew-q">All ${BUILD.length} definitions built.</p><div class="ew-fb ${all ? 'ok' : 'no'}"><span class="tag">${all ? 'Perfect' : 'Done'}</span>${good} of ${tries} picks right first time.${all ? '' : ' Tap Reset to try again.'}</div>`;
          score.innerHTML = `Done · first-try picks <b>${good}</b>/${tries}`;
          return;
        }
        const t = BUILD[i];
        const list = stage === 0 ? t.classes : t.feats;
        next.hidden = stage < 2;
        next.innerHTML = i === BUILD.length - 1 ? 'Finish' : 'Next term';
        box.innerHTML = `<p class="ew-q">${sentence()}</p>
          ${stage < 2 ? `<span class="ew-score">Step ${stage + 1} of 2 · choose the ${stage === 0 ? 'class' : 'distinguishing feature'}</span>
          <div class="ew-opts">${EW.shuffle(list.map((x, k) => k)).map((k) => `<button type="button" class="ew-opt" data-k="${k}">${list[k][0]}</button>`).join('')}</div>` : ''}
          <div class="ew-fb${msg ? ' ' + msg.cls : ''}">${msg ? msg.html : ''}</div>`;
        score.innerHTML = `Term <b>${i + 1}</b> of ${BUILD.length} · first-try picks <b>${good}</b>/${tries}`;
      }
      let firstTry = true;
      api.listen(box, 'click', (e) => {
        const b = e.target.closest('.ew-opt'); if (!b) return;
        const t = BUILD[i], list = stage === 0 ? t.classes : t.feats, x = list[+b.dataset.k];
        if (firstTry) { tries++; if (x[1]) good++; }
        if (!x[1]) { firstTry = false; b.classList.add('wrong'); b.disabled = true; const fb = box.querySelector('.ew-fb'); fb.className = 'ew-fb no'; fb.innerHTML = `<span class="tag">Not that one</span>${x[2]}`; score.innerHTML = `Term <b>${i + 1}</b> of ${BUILD.length} · first-try picks <b>${good}</b>/${tries}`; return; }
        firstTry = true;
        if (stage === 0) pickC = x[0]; else pickF = x[0];
        stage++;
        paint({ cls: 'ok', html: `<span class="tag">Right</span>${x[2]}${stage === 2 ? ' The definition is complete: term, class, distinguishing features.' : ''}` });
      });
      paint();
    },
  });

  // ---------------------------------------------------------------- expand-methods
  VIZ.register('expand-methods', {
    title: 'Which expansion method?', kind: 'Practice',
    mount(body, api) {
      const M = ['Etymology', 'History', 'Negation', 'Operating principle', 'Analysis of parts', 'Visuals', 'Comparison and contrast', 'Required conditions', 'Examples'];
      const item = (q, right, others, why) => { const opts = [right].concat(others); return { q, options: opts.map((k) => M[k]), correct: 0, why }; };
      EW.rounds(body, api, {
        instr: 'Each passage expands a basic definition. Tap the method it uses.',
        items: [
          item('"The word <em>laser</em> is an acronym for light amplification by stimulated emission of radiation."', 0, [1, 7, 8], 'It explains where the word comes from. An acronym is part of a word\'s origin, so this is <b>etymology</b>.'),
          item('"Lasers emit a narrow beam of intense light, so their invention in 1960 solved the first problem…"', 1, [0, 3, 8], 'Dates and how the invention came about: <b>history</b>.'),
          item('"…and not, as science fiction might tell you, a transport medium to other dimensions."', 2, [6, 8, 1], 'It clears up what a laser is <b>not</b>: <b>negation</b>.'),
          item('"A laser uses electrical energy to produce coherent light: light in which all the waves are in phase."', 3, [4, 7, 0], 'It answers "How does it work?": <b>operating principle</b>.'),
          item('"Consider its three main parts: a source of energy, a resonant circuit, and optical elements."', 4, [3, 5, 7], 'It lists and explains the parts: <b>analysis of parts</b>.'),
          item('"Voice frequencies operate at 1,000 hertz… light waves at hundreds of trillions of hertz."', 6, [8, 1, 3], 'It sets light against familiar signal carriers: <b>comparison and contrast</b>.'),
          item('"To emit its beam, the laser must absorb energy, amplify the photons between the reflecting ends, and release them through lenses and mirrors."', 7, [3, 4, 8], 'It states what must happen or be present for it to work: <b>required conditions</b>. (Operating principle explains the idea; required conditions list what is needed.)'),
          item('"Ophthalmologists perform thousands of cataract operations with lasers every year."', 8, [1, 6, 3], 'It shows the term in real use: <b>examples</b>.'),
          item('"Biometrics comes from the Greek <em>bio</em>, life, and <em>metron</em>, measure."', 0, [1, 4, 6], 'Greek roots: <b>etymology</b>.'),
          item('"Figure 1 shows the plunger, return spring and coil of the solenoid, each labelled."', 5, [4, 3, 8], 'A labelled figure the text introduces: <b>visuals</b>.'),
        ],
      });
    },
  });

  // ---------------------------------------------------------------- def-type-sort
  VIZ.register('def-type-sort', {
    title: 'Sort the definitions', kind: 'Practice',
    mount(body, api) {
      EW.sorter(body, api, {
        instr: 'Tap a definition, then tap the type it is.',
        slots: [{ k: 'p', label: 'Parenthetical' }, { k: 's', label: 'Sentence' }, { k: 'e', label: 'Expanded' }],
        pieces: [
          { text: 'The trees are mostly deciduous (shedding foliage at season\'s end).', slot: 'p', why: 'A short phrase in brackets inside the sentence.' },
          { text: 'Voltaire was imprisoned in the Bastille (French fortress).', slot: 'p', why: 'Brackets give a simpler description.' },
          { text: 'Stress is an applied force that strains or deforms a body.', slot: 's', why: 'Term + class + feature in one sentence.' },
          { text: 'A neodymium magnet is a permanent magnet made of a neodymium, boron, iron alloy.', slot: 's', why: 'Term, class (permanent magnet), feature (the alloy).' },
          { text: 'A paragraph on the laser: its acronym, its invention in 1960, its three parts and its use in eye surgery.', slot: 'e', why: 'Several expansion methods in a paragraph.' },
          { text: 'A public health report\'s full page on leaching fields and groundwater contamination.', slot: 'e', why: 'The whole document depends on the term, so it is defined at length.' },
          { text: 'Throughout this document, local fauna refers to native animals living in the wild; zoo animals are not included.', slot: 's', why: 'A working definition: still a sentence definition, over two sentences.' },
        ],
        done: 'All sorted. Parenthetical = brackets; sentence = term, class, features; expanded = a paragraph with several methods.',
      });
    },
  });

  // ---------------------------------------------------------------- def-fixer
  VIZ.register('def-fixer', {
    title: 'What\'s wrong with this definition?', kind: 'Practice',
    mount(body, api) {
      const F = ['Circular', 'Class too broad', 'Features don\'t distinguish', 'Harder words than the term', 'Nothing wrong'];
      const it = (q, right, why) => { const others = [0, 1, 2, 3, 4].filter((k) => k !== right).sort(() => Math.random() - 0.5).slice(0, 3); return { q, options: [right].concat(others).map((k) => F[k]), correct: 0, why }; };
      EW.rounds(body, api, {
        instr: 'Read the definition, then tap its main problem.',
        items: [
          it('"An <b>amplifier</b> is a device that amplifies."', 0, 'The term defines itself. Say what it does: a device that <b>increases the power</b> of a signal.'),
          it('"A <b>resistor</b> is something used in circuits."', 1, '"Something" is not a class. Use <b>an electrical component</b> that opposes the flow of current.'),
          it('"A <b>bicycle</b> is a vehicle that people ride."', 2, 'People ride motorbikes and horses too. Add what sets it apart: <b>two wheels, pedals and handlebars</b>.'),
          it('"A <b>fuse</b> is a sacrificial overcurrent protective device incorporating a fusible element."', 3, 'Fine for an electrician, but the explanation is harder than the word. For a general reader: a safety device with a <b>thin wire that melts</b> when too much current flows.'),
          it('"<b>Stress</b> is an applied force that strains or deforms a body."', 4, 'Term, a real class, and a distinguishing feature. This is the slides\' own definition.'),
          it('"<b>Corrosion</b> is when metal gets damaged."', 1, '"Is when" skips the class, and the damage could be a dent. Better: <b>a chemical process</b> in which a metal is slowly destroyed by reaction with its environment.'),
          it('"A <b>calculator</b> is a calculating machine."', 0, 'Circular. Try: an electronic device that <b>performs arithmetic</b> operations.'),
          it('"A <b>pen</b> is a writing instrument."', 2, 'Pencils and chalk are writing instruments too. Add the feature: one that <b>applies ink</b>.'),
        ],
      });
    },
  });
})();
