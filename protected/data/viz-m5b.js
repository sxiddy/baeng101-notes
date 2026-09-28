/* Module 5 · Interpersonal Communication — statement of purpose widgets (paid). Built on ew-kit.js. */
(function () {
  'use strict';
  const EW = window.EW;
  const esc = EW.esc;

  // ---------------------------------------------------------------- sop-builder
  // Pick a programme, fill five short fields, see the SoP assemble with no subheadings, a word count and a rule-based checklist.
  const FIELDS = [
    { k: 'hook', label: 'Opening: a moment that sparked your interest', prompt: 'Where were you, what happened, what did you do? End with your long-term goal.' },
    { k: 'acad', label: 'Academic highlight', prompt: 'Marks with numbers, one named project or research, its result, what it taught you.' },
    { k: 'why', label: 'Why this programme', prompt: 'Name the programme and two features (courses, labs, faculty, credit system) that fit your interest.' },
    { k: 'goal', label: 'Your goal and contribution', prompt: 'What you will do after the degree, and who benefits.' },
    { k: 'close', label: 'Closing', prompt: 'Readiness (with one action you have taken) and a positive, forward-looking last line.' },
  ];
  const EXAMPLES = {
    btech: {
      name: 'B.Tech',
      hook: 'When I was fourteen, our apartment\'s water pump kept burning out. I opened the starter box with my uncle, an electrician, and found a relay clicking on and off every few seconds. Tracing that one fault showed me that every machine has a logic you can read. I want to design low-cost sensors that help farmers water their fields on time.',
      acad: 'In the CBSE Class 12 examinations I scored 94%, with 98 in Physics. For the district science exhibition I built a soil-moisture alarm with an Arduino and a 60-rupee sensor, and it won first prize. Its false alarms every morning turned out to be dew on the probe, which taught me to test one variable at a time.',
      why: 'The B.Tech in Electronics and Communication Engineering at VIT fits the way I want to learn. Its flexible credit system will let me take embedded systems and IoT electives early, and its project-based courses mean I will build hardware from the first year.',
      goal: 'After my degree I want to work as a hardware design engineer on sensor products. In the long run I plan to build soil and weather sensors that cost less than 500 rupees per acre, starting with the millet farms around my home town.',
      close: 'I know the first year will be demanding, and I have already started teaching myself C and circuit simulation. I look forward to joining VIT and starting that work.',
    },
    ms: {
      name: 'MS',
      hook: 'During my third-year internship at a Chennai logistics start-up, our route-planning service slowed to a crawl every evening. I traced the delay to one unindexed database query and cut the response time from 9 seconds to 400 milliseconds. My long-term goal is to build infrastructure that keeps public services online under peak load.',
      acad: 'I completed my B.Tech in Computer Science at VIT with a CGPA of 8.9. With my project guide, I built the caching layer for a campus attendance system that serves 20,000 students, and our paper on it was accepted at a national student conference.',
      why: 'Your MS programme\'s focus on distributed systems matches the problems I want to study, in particular how storage systems stay consistent when servers fail. I would value the chance to work with your faculty on fault-tolerant storage, the area my caching project first led me to.',
      goal: 'After the MS I aim to join a systems research team, and in the long term to help build booking and payment systems that stay up during festival rushes, when millions of people depend on them at once.',
      close: 'I have spent this year reading the classic papers on consensus and implementing one protocol myself. I am ready for graduate study and look forward to contributing to your department.',
    },
    mba: {
      name: 'MBA',
      hook: 'Two years into my job as a network engineer, I watched our team lose a large client, not because the technology failed but because nobody had planned the rollout budget. That meeting convinced me to learn the business side of engineering. My goal is to start a firm that brings affordable internet to small towns in my state.',
      acad: 'I graduated in Electrical Engineering with a CGPA of 8.4 and have since worked three years at a telecom firm. I led a team of five that set up a 4G test lab in six weeks against a three-month deadline, and the client extended our contract for two years.',
      why: 'Your MBA\'s courses in operations and corporate finance, and its live consulting project with partner companies, are what I need to move from running projects to planning them.',
      goal: 'In the short term I want to work in strategy at a telecom operator. In the long term I plan to start a company that connects small-town schools and clinics, where good internet would change how people learn and get treated.',
      close: 'I have already completed an online course in financial accounting to prepare. I bring the discipline of an engineer and experience of leading teams under deadlines, and I look forward to joining your programme.',
    },
  };
  const LIMITS = [{ value: 200, label: '200' }, { value: 500, label: '500' }, { value: 1000, label: '1000' }];

  const words = (s) => (String(s).trim().match(/\S+/g) || []).length;
  function findAll(re, text) { const out = []; let m; const r = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g'); while ((m = r.exec(text))) { out.push(m[0]); if (out.length > 3) break; } return out; }

  const PASSIVE = /\b(?:was|were|been|being|is|are|am|got|get)\s+(?:given|taken|chosen|made|awarded|selected|shown|taught|told|done|asked|assigned|entrusted|appreciated|encouraged|inspired|offered|provided|allotted|picked|motivated|recognised|recognized|completed|handled|organised|organized|guided|exposed)\b/i;
  const TELL = /\b(?:I am|I'm|I have always been|I consider myself)\s+(?:a\s+|an\s+)?(?:very\s+|really\s+|extremely\s+|truly\s+|highly\s+|deeply\s+)?(?:passionate|hard-?working|dedicated|motivated|self-motivated|persistent|determined|creative|curious|sincere|disciplined|natural leader|team player|quick learner|enthusiastic|talented)\b|\bmy (?:passion|zeal|love) for\b|\bunwavering\b/i;
  const VAGUE = /\b(?:esteemed|reputed|prestigious|world-class|renowned|top-ranked|best university|best college|premier)\b/i;
  const NEG = /\b(?:failed|could not|couldn't|unfortunately|poor marks|weak in|bad marks|did not get)\b/i;
  const BEG = /\b(?:I hope I (?:will|would) get|please (?:give|consider|admit)|financial (?:assistance|aid|help)|grateful if)\b/i;
  const HEAD = /(?:^|\n)\s*(?:opening|introduction|academic background|academics|achievements|reasons for|why this|future goals|career goals|goals|conclusion|closing)[^\n.]{0,40}:/i;
  const BLANK = /_{3,}|\(mention[^)]*\)|\[[^\]]{1,40}\]/i;
  const NAMEHDR = /\b(?:name of the applicant|name\s*:|course applied)/i;
  const GOALW = /\b(?:goal|aim|plan to|want to|wish to|hope to|intend to|become|career|long term|long-term|in the future)\b/i;
  const EVID = /\d|\b(?:built|designed|won|led|organised|organized|coded|wrote|created|developed|published|ranked|prize|award|project|competition|olympiad|internship|interned)\b/i;
  const SPEC = /\b(?:course|courses|curriculum|elective|electives|lab|labs|laboratory|professor|prof\.|faculty|research|credit system|project-based|programme in|program in|b\.tech in|ms in|mba)\b/i;
  const READY = /\b(?:ready|look forward|looking forward|eager|confident|prepared|excited)\b/i;

  VIZ.register('sop-builder', {
    title: 'SoP builder', kind: 'Tool',
    mount(body, api) {
      const wrap = api.el('div', { class: 'ew' }, body);
      api.el('p', { class: 'ew-instr', html: 'Pick the programme, then fill the five fields (a few sentences each). The draft below assembles itself with <b>no subheadings</b>; the checklist flags what to fix. Nothing is saved.' }, wrap);
      const top = api.el('div', { class: 'ew-row' }, wrap);
      let purpose = 'btech', limit = 500;
      api.segmented([{ value: 'btech', label: 'B.Tech' }, { value: 'ms', label: 'MS' }, { value: 'mba', label: 'MBA' }], purpose, (v) => { purpose = v; paintPrompts(); update(); }, top);
      const form = api.el('div', { class: 'ew' }, wrap);
      const inputs = {}, exEls = {};
      FIELDS.forEach((f) => {
        const card = api.el('div', { class: 'ew-card' }, form);
        api.el('h4', { html: esc(f.label) }, card);
        api.el('p', { class: 'ew-instr', html: esc(f.prompt) }, card);
        exEls[f.k] = api.el('p', { class: 'ew-instr', html: '' }, card);
        inputs[f.k] = api.el('textarea', { class: 'ew-textarea', rows: '4', 'aria-label': f.label, style: 'min-height:96px;margin-top:8px' }, card);
        api.listen(inputs[f.k], 'input', update);
      });
      const btnRow = api.el('div', { class: 'ew-row' }, wrap);
      api.button('Fill with example', () => { const ex = EXAMPLES[purpose]; FIELDS.forEach((f) => { inputs[f.k].value = ex[f.k]; }); update(); }, btnRow, { primary: true });

      api.el('h4', { html: 'Your draft', style: 'margin:0;color:var(--white)' }, wrap);
      const preview = api.el('div', { class: 'ew-card ew-text' }, wrap);
      const countRow = api.el('div', { class: 'ew-row' }, wrap);
      const count = api.el('span', { class: 'ew-score' }, countRow);
      api.el('span', { class: 'ew-score', html: 'limit' }, countRow);
      api.segmented(LIMITS, limit, (v) => { limit = v; update(); }, countRow);
      const meter = api.el('div', { class: 'ew-meter' }, wrap);
      const bar = api.el('i', {}, meter);
      api.el('h4', { html: 'Checklist', style: 'margin:0;color:var(--white)' }, wrap);
      const checks = api.el('div', { class: 'ew' , style: 'gap:8px' }, wrap);

      const foot = api.el('div', { class: 'ew-foot' }, wrap);
      const score = api.el('span', { class: 'ew-score' }, foot);
      const fbtns = api.el('div', { class: 'ew-row' }, foot);
      api.button('Reset', () => { FIELDS.forEach((f) => { inputs[f.k].value = ''; }); update(); }, fbtns);

      function paintPrompts() {
        const ex = EXAMPLES[purpose];
        FIELDS.forEach((f) => {
          const s = ex[f.k].split(/(?<=\.)\s/)[0];
          exEls[f.k].innerHTML = '<em>e.g.</em> ' + esc(s.length > 140 ? s.slice(0, 137) + '…' : s);
          inputs[f.k].placeholder = f.prompt;
        });
      }

      function item(ok, title, why) {
        return `<div class="ew-fb ${ok ? 'ok' : 'no'}"><span class="tag">${ok ? 'OK' : 'Fix'}</span><b>${title}</b> ${why}</div>`;
      }

      function update() {
        const v = {}; FIELDS.forEach((f) => { v[f.k] = inputs[f.k].value.trim(); });
        const paras = FIELDS.map((f) => v[f.k]).filter(Boolean);
        preview.innerHTML = paras.length ? paras.map((p) => `<p style="margin:0 0 10px">${esc(p)}</p>`).join('') : '<p class="ew-instr" style="margin:0">Your paragraphs appear here as you type, one per field, with no headings.</p>';
        const all = FIELDS.map((f) => v[f.k]).join('\n');
        const n = words(all);
        count.innerHTML = `<b>${n}</b> words`;
        meter.className = 'ew-meter' + (n > limit ? ' over' : n >= limit * 0.6 ? ' ok' : '');
        bar.style.width = Math.min(100, (n / limit) * 100) + '%';

        const out = [];
        const filled = FIELDS.filter((f) => v[f.k]).length;
        if (!filled) { checks.innerHTML = '<p class="ew-instr">Start typing, or tap "Fill with example".</p>'; score.innerHTML = `Checks passed <b>0</b>`; return; }
        let pass = 0; const add = (ok, t, w) => { if (ok) pass++; out.push(item(ok, t, w)); };

        add(filled === 5, 'All five paragraphs', filled === 5 ? 'Opening, academics, reasons, goal and closing are all there.' : `${5 - filled} field(s) still empty. The slides\' structure needs every part.`);
        add(GOALW.test(v.goal) && words(v.goal) >= 8, 'Goal stated', GOALW.test(v.goal) && words(v.goal) >= 8 ? 'The goal paragraph names what you want to do.' : 'Say what you want to become or build ("My goal is to…", "I plan to…"), in at least one full sentence.');
        add(GOALW.test(v.hook), 'Goal in the opening', GOALW.test(v.hook) ? 'The opening connects to a long-term goal, as the slides advise.' : 'The slides want your long-term goal in the first paragraph too. Add one line.');
        add(EVID.test(v.hook + ' ' + v.acad), 'Specific example', EVID.test(v.hook + ' ' + v.acad) ? 'There is a number or a concrete action (built, won, led…).' : 'Add a number, a named project or a result. Evidence convinces; adjectives do not.');
        const vg = findAll(VAGUE, v.why);
        add(SPEC.test(v.why) && !vg.length, 'Why this programme is specific', vg.length ? `Replace vague praise (<b>${vg.map(esc).join(', ')}</b>) with a feature: a course, lab, faculty member or the credit system.` : SPEC.test(v.why) ? 'It names a feature of the programme.' : 'Name at least one course, lab, faculty member or programme feature.');
        const ps = findAll(PASSIVE, all);
        add(!ps.length, 'Active voice', ps.length ? `Passive phrase(s): <b>${ps.map(esc).join(', ')}</b>. If you did the action, make "I" the subject ("I led…"). Keep it only if someone else really acted.` : 'No "I was given"-style passives found.');
        const tl = findAll(TELL, all);
        add(!tl.length, 'Show, don\'t tell', tl.length ? `Telling phrase(s): <b>${tl.map(esc).join(', ')}</b>. Replace with an action and a result that prove it.` : 'No "I am passionate"-style claims found.');
        const ng = findAll(NEG, all);
        add(!ng.length, 'Positive framing', ng.length ? `<b>${ng.map(esc).join(', ')}</b>: if you mention a setback, say what you did next (tip 4, affirmatively).` : 'Nothing negative left hanging.');
        const bg = findAll(BEG, v.close);
        add(!!v.close && READY.test(v.close) && !bg.length, 'Positive closing', bg.length ? `<b>${bg.map(esc).join(', ')}</b> sounds like pleading. End on readiness ("I am ready…", "I look forward to…").` : READY.test(v.close) ? 'The closing shows readiness.' : 'End with readiness or looking forward to joining.');
        const hd = HEAD.test(all), bl = BLANK.test(all), nm = NAMEHDR.test(all);
        add(!hd && !bl && !nm, 'No subheadings, blanks or header', hd ? 'Delete the subheading: the CAT format says "Do not write the subheadings".' : bl ? 'A blank or "(mention…)" is left in. Fill it with a real detail.' : nm ? 'No name or course header: a traditional SoP does not need them.' : 'Clean: paragraphs only.');
        const longF = FIELDS.filter((f) => words(v[f.k]) > 150);
        add(!longF.length && n <= limit, 'Length', n > limit ? `${n} words is over the ${limit}-word limit. Cut repeated ideas first.` : longF.length ? `"${esc(longF[0].label)}" runs past 150 words. Keep each paragraph tight.` : `Within ${limit} words. A full SoP is usually 800–1000; some programmes allow 500 or even 200.`);

        checks.innerHTML = out.join('');
        score.innerHTML = `Checks passed <b>${pass}</b> of ${out.length}`;
      }
      paintPrompts();
      update();
    },
  });

  // ---------------------------------------------------------------- sop-order
  VIZ.register('sop-order', {
    title: 'Put the SoP in order', kind: 'Practice',
    mount(body, api) {
      EW.order(body, api, {
        instr: 'These are one-line summaries of the six paragraphs of an SoP for B.Tech EEE. Tap them in the order they should appear.',
        items: [
          'A power cut during my board exams made me want to design reliable home inverters.',
          'I scored 93% in Class 12; my solar charge-controller model won the district science fair.',
          'Last summer I volunteered at a solar installer, testing panels and wiring on rooftops.',
          'Your power electronics courses and the renewable energy lab match exactly what I want to study.',
          'My goal is to design low-cost inverters for homes in towns with daily power cuts.',
          'I am ready for the workload, and I look forward to joining your programme.',
        ],
        label: (k) => ['Opening', 'Academics', 'Recent', 'Why here', 'Goals', 'Closing'][k],
        why: 'The order follows the slides: <b>Part 1</b> introduce yourself and what sparked the interest; <b>Part 2</b> your academic record; <b>Part 3</b> recent and current activities; <b>Part 4</b> academic interests and why this programme; then <b>career goals</b> and a <b>closing</b> that ends positively. (The first slide deck shows Part 4 before Part 3; the second deck has the right order.)',
      });
    },
  });

  // ---------------------------------------------------------------- show-dont-tell
  VIZ.register('show-dont-tell', {
    title: 'Show, don\'t tell', kind: 'Practice',
    mount(body, api) {
      EW.rounds(body, api, {
        instr: 'Tip 3: demonstrate by example. Tap the sentence that <b>shows</b> the trait instead of claiming it.',
        items: [
          { tag: 'Persistence', q: 'Which sentence shows persistence?', options: ['My line-follower robot lost its first two contests; I rebuilt the sensor board and it won the third.', 'I am a very persistent person who never gives up.', 'Persistence is my greatest strength.'], correct: 0, why: 'Two failures and a rebuilt board let the reader conclude "persistent". The other two only claim it.' },
          { tag: 'Leadership', q: 'Which sentence shows leadership?', options: ['I am a natural leader.', 'As quiz club captain I trained two juniors, and they won the inter-school quiz the next year.', 'People have always looked up to me as a leader.'], correct: 1, why: 'Training juniors who then won is evidence. "A natural leader" is the phrase the course\'s UG sample uses, and it convinces no one.' },
          { tag: 'Passion for coding', q: 'Which sentence shows a passion for coding?', options: ['Coding is my passion and my life.', 'I have always been deeply passionate about computers.', 'Since Class 10 I have solved 300 problems on an online judge and built a timetable app my class uses.'], correct: 2, why: 'Numbers and a product people use show the passion. "Passionate" is the most overused word in SoPs.' },
          { tag: 'Teamwork', q: 'Which sentence shows teamwork?', options: ['Our five-member team split the drone into frame, power and code, and met every Friday to merge our parts.', 'I am an excellent team player.', 'I work well with everyone in a team.'], correct: 0, why: 'It shows how the team divided work and coordinated. The others are claims.' },
          { tag: 'Curiosity', q: 'Which sentence shows curiosity?', options: ['I am a very curious person by nature.', 'After our fridge broke, I read the service manual and traced the fault to a stuck relay in the compressor starter.', 'My curiosity knows no bounds.'], correct: 1, why: 'Reading a manual nobody asked you to read is curiosity in action, and it points to engineering.' },
          { tag: 'Self-motivation', q: 'Which sentence shows self-motivation?', options: ['I am highly self-motivated.', 'I always motivate myself to do better.', 'With no coaching available in my town, I learned Python from free videos and built a quiz app for my school.'], correct: 2, why: 'Learning with no one pushing you, and producing something, is exactly what the committee reads "between the lines" for.' },
          { tag: 'Responsibility', q: 'Which sentence shows responsibility, in the active voice?', options: ['I was given the responsibility of organising the tech fest.', 'I organised our school tech fest for 600 students and kept it within a 40,000-rupee budget.', 'The tech fest was organised very well under me.'], correct: 1, why: 'Active voice with "I" as the subject, plus numbers. The other two hide the work behind a passive.' },
          { tag: 'Overcoming a setback', q: 'Which sentence states a hardship affirmatively?', options: ['Dengue kept me out of school for two months in Class 11; I caught up through recorded lectures and scored 93% in Class 12.', 'My marks were low because I was ill and nobody helped me.', 'Unfortunately I could not study properly in Class 11.'], correct: 0, why: 'Tip 4: state the problem, then show the perseverance. The other two stop at the excuse.' },
        ],
      });
    },
  });
})();
