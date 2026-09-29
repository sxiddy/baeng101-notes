/* Module 5 · Interpersonal communication: conflict management widgets (paid module). Built on ew-kit.js. */
(function () {
  'use strict';
  const EW = window.EW;

  // ---------------------------------------------------------------- tki-grid
  // A 3x3 tap grid: rows = assertiveness (high, medium, low), columns = cooperativeness (low, medium, high).
  const MODES = {
    compete: { name: 'Competing', pos: 'High assertiveness, low cooperativeness', out: 'I win, you lose', line: '"It\'s my way or the highway!"', power: 'a position of strength',
      use: 'A quick decision on a small conflict that is wasting time (Sophia and the team-building venue).',
      pros: 'Fast; shows strength and principle; you own the decision.', cons: 'Seen as authoritarian; lowers trust and morale; good ideas get crushed (Sophia and Alex).' },
    collaborate: { name: 'Collaborating', pos: 'High assertiveness, high cooperativeness', out: 'I win, you win', line: '"Let\'s do it our way! This is what I prefer... What do you want?"', power: 'openness, clarity and cooperation',
      use: 'The relationship is vital to preserve, or the solution will have a significant impact (Terry and Janet\'s prototype).',
      pros: 'Everyone leaves happy; the real problem is solved; the manager looks skilled.', cons: 'Slow; can delay deadlines and cause losses; fatigue.' },
    compromise: { name: 'Compromising', pos: 'Medium assertiveness, medium cooperativeness', out: 'Win some, lose some', line: '"OK, I\'ll meet you half way!"', power: 'moderation and reasonableness',
      use: 'A time crunch, or a solution simply needs to happen rather than be perfect (Rosa and Charles\'s budget).',
      pros: 'Quick; both feel heard; can lead to collaboration later.', cons: 'Nobody is fully happy; the root issue stays; overused, it burns goodwill.' },
    avoid: { name: 'Avoiding', pos: 'Low assertiveness, low cooperativeness', out: 'I lose, you lose', line: '"No way! Let\'s not make a big deal out of this!"', power: 'silence and lack of cooperation',
      use: 'The issue is unimportant, there is a risk of harm, or people need time to cool down (Jake and Amy\'s deadline).',
      pros: 'Time and space calm people and give perspective; some issues fix themselves.', cons: 'Conflicts can grow and go underground; overused, the manager looks incompetent.' },
    accommodate: { name: 'Accommodating', pos: 'Low assertiveness, high cooperativeness', out: 'I lose, you win', line: '"OK, whatever you say. We\'ll do it your way!"', power: 'relationships and the approval of others',
      use: 'You care less than the other person, arguing is not worth it, or you might be wrong (Gina lets Raymond pick the colours).',
      pros: 'Small issues settled quickly; you look easygoing; people speak up freely.', cons: 'Seen as weak if overused; useless on big issues; you may feel taken advantage of.' },
  };
  const EDGE = {
    '0,1': { a: 'compete', b: 'collaborate', text: 'Firm on your own goal and half open to theirs. You sit between <b>competing</b> and <b>collaborating</b>. If the relationship or their idea matters, move right: ask what they need.' },
    '1,0': { a: 'compete', b: 'avoid', text: 'Some push for yourself, little interest in them: between <b>competing</b> and <b>avoiding</b>. It often looks like grumbling without acting. Either state your case clearly or let it go.' },
    '1,2': { a: 'collaborate', b: 'accommodate', text: 'You care a lot about them and push a little for yourself: between <b>collaborating</b> and <b>accommodating</b>. Say what you need too, or you drift into giving in.' },
    '2,1': { a: 'avoid', b: 'accommodate', text: 'Little push for yourself, some care for them: between <b>avoiding</b> and <b>accommodating</b>. Fine for small matters; on important ones this is how problems go unsaid.' },
  };
  const CELL = { '0,0': 'compete', '0,2': 'collaborate', '1,1': 'compromise', '2,0': 'avoid', '2,2': 'accommodate' };
  const WHERE = { compete: [0, 0], collaborate: [0, 2], compromise: [1, 1], avoid: [2, 0], accommodate: [2, 2] };
  const LV = ['high', 'medium', 'low'], CV = ['low', 'medium', 'high'];
  const SHORT = { compete: 'Compe&shy;ting', collaborate: 'Colla&shy;bora&shy;ting', compromise: 'Compro&shy;mising', avoid: 'Avoid&shy;ing', accommodate: 'Accom&shy;moda&shy;ting' };
  const QUIZ = [
    { ask: 'Where does <b>Avoiding</b> sit?', k: 'avoid' },
    { ask: 'Where does <b>Collaborating</b> sit?', k: 'collaborate' },
    { ask: 'Where does <b>Accommodating</b> sit?', k: 'accommodate' },
    { ask: 'Where does <b>Competing</b> sit?', k: 'compete' },
    { ask: 'Where does <b>Compromising</b> sit?', k: 'compromise' },
    { ask: 'Tap the mode that says "OK, I\'ll meet you half way!"', k: 'compromise' },
    { ask: 'Tap the mode that says "It\'s my way or the highway!"', k: 'compete' },
    { ask: 'Tap the mode that says "No way! Let\'s not make a big deal out of this!"', k: 'avoid' },
    { ask: 'Tap the mode that says "OK, whatever you say. We\'ll do it your way!"', k: 'accommodate' },
    { ask: 'Tap the mode that says "This is what I prefer... What do you want?"', k: 'collaborate' },
    { ask: 'Tap the mode labelled <b>I lose, you win</b>.', k: 'accommodate' },
    { ask: 'Tap the mode labelled <b>I win, you lose</b>.', k: 'compete' },
    { ask: 'Tap the mode labelled <b>I lose, you lose</b>.', k: 'avoid' },
    { ask: 'Tap the mode labelled <b>I win, you win</b>.', k: 'collaborate' },
  ];
  function modeCard(m) {
    return `<div class="ew-card"><h4>${m.name}</h4><p>${m.pos} · <b>${m.out}</b></p><p style="margin-top:6px"><em>${m.line}</em></p>
      <p style="margin-top:8px"><b>Use it when</b>: ${m.use}</p><p style="margin-top:4px"><b>Pros</b>: ${m.pros}</p><p style="margin-top:4px"><b>Cons</b>: ${m.cons}</p>
      <p style="margin-top:4px"><b>Power comes from</b>: ${m.power}.</p></div>`;
  }
  VIZ.register('tki-grid', {
    title: 'Find your mode on the grid', kind: 'Interactive',
    mount(body, api) {
      const wrap = api.el('div', { class: 'ew' }, body);
      const instr = api.el('p', { class: 'ew-instr' }, wrap);
      const modeRow = api.el('div', { class: 'ew-row' }, wrap);
      const prompt = api.el('p', { class: 'ew-q' }, wrap);
      api.el('p', { class: 'ew-instr', html: '↑ Rows: <b>assertiveness</b> (your own concerns)' }, wrap);
      const grid = api.el('div', { style: 'display:grid;grid-template-columns:52px repeat(3,minmax(0,1fr));gap:6px;align-items:stretch' }, wrap);
      api.el('p', { class: 'ew-instr', html: 'Columns: <b>cooperativeness</b> (the other person\'s concerns) →' }, wrap);
      const out = api.el('div', { class: 'ew' }, wrap);
      const foot = api.el('div', { class: 'ew-foot' }, wrap);
      const score = api.el('span', { class: 'ew-score' }, foot);
      const btns = api.el('div', { class: 'ew-row' }, foot);
      const next = api.button('Next', () => { qi++; answered = false; sel = null; paint(); }, btns, { primary: true });
      api.button('Reset', reset, btns);
      let mode = 'explore', sel = null, order = [], qi = 0, right = 0, answered = false;
      const seg = api.segmented([{ value: 'explore', label: 'Explore' }, { value: 'quiz', label: 'Quiz me' }], 'explore', (v) => { mode = v; start(); }, modeRow);
      function start() { sel = null; order = EW.shuffle(QUIZ); qi = 0; right = 0; answered = false; paint(); }
      function reset() { mode = 'explore'; seg.set('explore'); start(); }
      function cellLabel(r, c) {
        const k = CELL[r + ',' + c];
        if (mode === 'quiz') return answered && k ? SHORT[k] : '?';
        return k ? SHORT[k] : '<small style="opacity:.7">between</small>';
      }
      function paint() {
        const quiz = mode === 'quiz';
        instr.innerHTML = quiz ? 'Names are hidden. Tap the cell the question asks for.' : 'Tap a cell: how hard do you push for yourself (row), and how much for the other person (column)?';
        const done = quiz && qi >= order.length;
        prompt.hidden = !quiz;
        prompt.innerHTML = quiz ? (done ? `${right} of ${order.length} right.` : order[qi].ask) : '';
        let h = '<span></span>' + CV.map((v) => `<span class="ew-score" style="text-align:center">${v}</span>`).join('');
        for (let r = 0; r < 3; r++) {
          h += `<span class="ew-score" style="align-self:center">${LV[r]}</span>`;
          for (let c = 0; c < 3; c++) {
            const k = r + ',' + c, on = sel === k;
            let cls = 'ew-opt' + (on ? ' on' : '');
            if (quiz && answered) { const want = WHERE[order[qi].k].join(','); if (k === want) cls = 'ew-opt right'; else if (on) cls = 'ew-opt wrong'; }
            h += `<button type="button" class="${cls}" data-c="${k}" lang="en" style="text-align:center;padding:8px 3px;min-height:58px;font-size:13px;line-height:1.25;hyphens:manual;overflow-wrap:anywhere"${done ? ' disabled' : ''}>${cellLabel(r, c)}</button>`;
          }
        }
        grid.innerHTML = h;
        next.hidden = !(quiz && answered && !done);
        if (quiz) score.innerHTML = done ? `Done · <b>${right}/${order.length}</b>` : `Question <b>${qi + 1}</b> of ${order.length} · <b>${right}</b> right`;
        else score.innerHTML = sel ? `Assertiveness <b>${LV[+sel[0]]}</b> · cooperativeness <b>${CV[+sel[2]]}</b>` : 'Tap any cell';
        if (!quiz) {
          if (!sel) out.innerHTML = '';
          else if (CELL[sel]) out.innerHTML = modeCard(MODES[CELL[sel]]);
          else { const e = EDGE[sel]; out.innerHTML = `<div class="ew-card"><h4>Between ${MODES[e.a].name} and ${MODES[e.b].name}</h4><p>${e.text}</p><p style="margin-top:6px"><small>The model names five modes; the in-between cells are a guide to which ones you are closest to.</small></p></div>`; }
        } else if (done) {
          out.innerHTML = `<div class="ew-fb ${right === order.length ? 'ok' : 'no'}"><span class="tag">${right === order.length ? 'All right' : 'Try again'}</span>${right === order.length ? 'You know the grid. Corners: collaborate top right, compete top left, avoid bottom left, accommodate bottom right; compromise in the middle.' : 'Tap Reset, or switch to Explore and tap each corner to revise.'}</div>`;
        } else if (!answered) out.innerHTML = '';
      }
      api.listen(grid, 'click', (e) => {
        const b = e.target.closest('[data-c]'); if (!b || b.disabled) return;
        sel = b.dataset.c;
        if (mode === 'explore') { paint(); return; }
        if (answered || qi >= order.length) return;
        answered = true;
        const it = order[qi], want = WHERE[it.k].join(','), m = MODES[it.k], ok = sel === want;
        if (ok) right++;
        const got = CELL[sel] ? MODES[CELL[sel]].name : 'an in-between cell (no named mode)';
        paint();
        out.innerHTML = `<div class="ew-fb ${ok ? 'ok' : 'no'}"><span class="tag">${ok ? 'Right' : 'Not quite'}</span>${ok ? '' : `You tapped ${got}. `}<b>${m.name}</b> is ${m.pos.toLowerCase()}: ${m.out}. ${m.line}</div>`;
      });
      start();
    },
  });

  // ---------------------------------------------------------------- style-spotter
  VIZ.register('style-spotter', {
    title: 'Spot the style, judge the choice', kind: 'Practice',
    mount(body, api) {
      const S = ['Competing', 'Collaborating', 'Compromising', 'Avoiding', 'Accommodating'];
      const it = (q, k, why) => ({ q, options: S, correct: k, why });
      EW.rounds(body, api, {
        instr: 'Read the situation and tap the Thomas-Kilmann style being used. The feedback says whether it was a good choice.',
        shuffleOptions: false,
        items: [
          it('Your group is choosing the colour of the project poster. You slightly prefer blue, but say "Fine, go with green, both look good."', 4, '<b>Accommodating</b>: you let them win. <b>Good choice</b>: a small issue you care less about, like Gina letting Raymond pick the campaign colours.'),
          it('Two roommates want the AC at 20 °C and 28 °C. They settle on 24 °C.', 2, '<b>Compromising</b>: each gives up part of what they wanted. <b>Fine here</b>: quick, low stakes, and any solution beats nightly arguments.'),
          it('Two hours before submission, two teammates argue over the report layout. The team leader says: "We use the department template. Decision made."', 0, '<b>Competing</b>, and a <b>good use</b> of it: a quick decision stops a small conflict wasting time, like Sophia choosing the escape room.'),
          it('An engineer keeps proposing a change that would make her project more successful. Her manager says: "Do it the way I told you."', 0, '<b>Competing</b>, and the <b>wrong choice</b>: like Sophia with Alex, the engineer feels unheard and the manager throws away a chance to improve the project.'),
          it('You and a friend have argued for an hour and both of you are angry. You say, "Let\'s talk about this tomorrow."', 3, '<b>Avoiding</b> as a pause. <b>Good choice</b>: time to calm down solves a surprising amount, as with Jake and Amy. It only works if you do talk tomorrow.'),
          it('For six weeks nobody in the lab group mentions that one member never turns up. "Let\'s not make a big deal out of this."', 3, '<b>Avoiding</b>, and the <b>wrong choice</b>: the issue goes underground and grows. Resentment will explode near the deadline.'),
          it('Two co-founders go through every feature of their app, discuss why each matters, and end up with a mix of both lists plus two new ideas.', 1, '<b>Collaborating</b>: win-win with new options, like Terry and Janet\'s prototype. <b>Right</b> for a decision with significant impact.'),
          it('A class representative agrees to every demand from every classmate, every time, and now feels used.', 4, '<b>Accommodating</b>, <b>overused</b>. The course warns it makes you look weak, and the handout says you may feel taken advantage of.'),
          it('Rosa wants a full-time social media hire; Charles wants more digital ads. They hire someone part-time and spend the rest on ads.', 2, '<b>Compromising</b>, the course\'s own example. Reasonable when the budget decision has to be made and neither option is clearly better.'),
          it('"This is what I prefer. Now tell me what you need, and let\'s find something that works for both of us."', 1, '<b>Collaborating</b>: high on your own concerns and on theirs. The handout\'s line: "Let\'s do it our way!"'),
          it('A manager splits every single dispute down the middle. Staff now feel they always lose half, and no one will give ground.', 2, '<b>Compromising</b>, <b>overused</b>. The course says relying on it burns up goodwill, and one side may refuse to compromise again.'),
          it('A lab partner wants to skip safety goggles to save time. You refuse to start the experiment until both of you wear them.', 0, '<b>Competing</b>, and <b>right</b>: safety is not up for negotiation. (Using competing for safety rules comes from Thomas and Kilmann\'s own guidance, beyond the course.)'),
          it('A student says "It\'s not my problem" when the group asks why the data is missing, and blames the previous member.', 3, '<b>Avoiding</b>: the handout lists denying the problem, deflecting responsibility and blaming others. <b>Wrong</b> here: very little gets done.'),
        ],
      });
    },
  });

  // ---------------------------------------------------------------- case-analyser
  const CASE = '<b>The mini-project review.</b> Meera leads a four-member team: Meera, Farah, Rahul and Arjun. The review with their guide, Dr Iyer, is in three days, and Rahul has not finished the sensor module. Last night Farah, who has done extra work for weeks, posted in the team chat: "Some people are just passengers in this team." Rahul replied that he was told to do only the report, left the chat and is not answering calls. Arjun wants to stay out of it. Dr Iyer has told Meera to sort out the team before the review.';
  const STEPS = [
    { q: '<b>Q1 · What are the main issues here?</b>', options: [
        'The unfinished module and Farah\'s public remark, on top of roles that were never clearly agreed and an uneven workload.',
        'Rahul is lazy and should be removed from the team.',
        'Farah was rude in the group chat.',
        'The review date is too early.'],
      correct: 0, why: 'A good Q1 separates the <b>trigger</b> (the remark, the unfinished module) from the <b>underlying issue</b> (Rahul thought he was on the report only; Farah has been overloaded for weeks). The other options take sides or pick one surface detail.' },
    { q: '<b>Q2 · Why are these issues important?</b>', options: [
        'All four share the review marks, and the team has to work together for the rest of the semester.',
        'Because Dr Iyer will be angry with Meera.',
        'Because group chats should be polite.',
        'They are not important; group projects always have arguments.'],
      correct: 0, why: 'Name what is <b>at stake</b>: marks for everyone, the working relationship all semester, and people (Farah\'s overload, Rahul\'s withdrawal). The guide\'s opinion is part of it, not the main point.' },
    { q: '<b>Q3 · Whose problem is this?</b>', options: [
        'Meera\'s: she leads the team and the guide has handed the problem to her.',
        'Rahul\'s, because the module is his.',
        'Dr Iyer\'s, because he is the guide.',
        'Nobody\'s; it will sort itself out.'],
      correct: 0, why: 'Name the <b>decision-maker</b> and say why. Rahul and Farah are parties to the conflict, and Dr Iyer has passed it on, so it lands on <b>Meera</b>.' },
    { q: '<b>Q4 · What precisely are her objectives?</b>', options: [
        'A working module and demo in three days; Rahul back in the team; the remark dealt with; roles written down so it does not repeat.',
        'To prove that Farah was right.',
        'To finish the project, whatever it takes.',
        'To keep everyone happy.'],
      correct: 0, why: 'Objectives must be <b>precise</b> and cover the short term (the demo) and the long term (roles, relationships). "Keep everyone happy" and "whatever it takes" are too vague to judge options against.' },
    { q: '<b>Q5 · Which set of courses of action is best laid out?</b>', options: [
        'Order Rahul to finish (competing); do it herself (avoiding); let Rahul off (accommodating); split the module (compromising); a four-person meeting to re-plan (collaborating).',
        'Talk to Rahul.',
        'Collaborate, because it is the best style.',
        'Complain to Dr Iyer, then complain to the HOD.'],
      correct: 0, why: 'Give <b>several distinct options</b> and tag each with a <b>Thomas-Kilmann mode</b>. One option, or a style named as a slogan, is not an analysis.' },
    { q: '<b>Q6 · How realistic is a full collaborative re-plan?</b>', options: [
        'Realistic if kept to one short meeting tomorrow; a long negotiation is not, with three days left.',
        'Completely unrealistic: collaboration always takes weeks.',
        'Realistic only if Dr Iyer runs the meeting.',
        'Realistic, because collaboration always works.'],
      correct: 0, why: 'Test against <b>time, power, willingness and cost</b>. Three days allows one focused meeting, not a long process. Absolute answers ("always", "never") ignore the facts.' },
    { q: '<b>Q7 · Which recommendation weighs the effects best?</b>', options: [
        'A short collaborative meeting to clear up roles and the remark, with a compromise split of the remaining work if needed, then a written role sheet.',
        'Meera should finish the module herself to avoid conflict.',
        'Meera should tell Farah to apologise and Rahul to finish, no discussion.',
        'Wait until after the review, then talk.'],
      correct: 0, why: 'Doing it herself (<b>avoiding/accommodating</b>) overloads Meera and teaches nothing. Pure orders (<b>competing</b>) may not bring Rahul back. Waiting misses the deadline. The staged plan meets the deadline, repairs the relationship and <b>prevents</b> a repeat.' },
  ];
  const MODEL = [
    ['Issues', 'Trigger: unfinished module, public put-down, Rahul withdrawn. Underlying: roles never agreed, uneven workload.'],
    ['Why important', 'Marks for all four; the team works together all semester; Farah overloaded, Rahul humiliated.'],
    ['Whose problem', 'Meera\'s, as leader, asked by the guide.'],
    ['Objectives', 'Demo ready in three days; Rahul back; remark addressed; roles written down; fairer workload.'],
    ['Options', 'Compete (order), avoid (do it herself), accommodate (let Rahul off), compromise (split the module), collaborate (meeting of all four).'],
    ['Realistic?', 'One meeting is realistic in three days; avoiding misses the deadline; accommodating overloads Farah and Meera.'],
    ['Effects and choice', 'Short collaborative meeting + compromise split if needed + role sheet: meets the deadline and prevents a repeat.'],
  ];
  VIZ.register('case-analyser', {
    title: 'Case analyser: seven questions', kind: 'Practice',
    mount(body, api) {
      const wrap = api.el('div', { class: 'ew' }, body);
      api.el('div', { class: 'ew-card', html: `<p>${CASE}</p>` }, wrap);
      const rounds = api.el('div', {}, wrap);
      EW.rounds(rounds, api, { instr: 'Work through the seven analysis questions in order. At each step, tap the best answer.', shuffle: false, items: STEPS });
      const row = api.el('div', { class: 'ew-row' }, wrap);
      const model = api.el('div', { class: 'ew-card' }, wrap);
      model.hidden = true;
      model.innerHTML = '<h4>Model points</h4>' + MODEL.map(([k, v], i) => `<p style="margin-top:6px"><b>${i + 1}. ${k}</b>: ${v}</p>`).join('');
      const tog = api.button('Show all model points', () => { model.hidden = !model.hidden; tog.textContent = model.hidden ? 'Show all model points' : 'Hide model points'; }, row);
    },
  });
})();
