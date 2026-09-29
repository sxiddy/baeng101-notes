/* Module 3 · Reading — inference and secondary-source widgets (free module). Built on ew-kit.js. */
(function () {
  'use strict';
  const EW = window.EW;

  // ---------------------------------------------------------------- inference-detective
  // Read a passage (the three course passages, retold), then label each statement: stated / can be inferred / not supported.
  const LABELS = [['s', 'Stated'], ['i', 'Can be inferred'], ['n', 'Not supported']];
  const PASSAGES = [
    {
      name: 'Height and status',
      src: 'Retold from Locker (2003), p. 301',
      text: 'In many parts of the world, height signals status. Executive offices are usually on the top floors, and junior staff work below. Being tall can help a person succeed: studies found employers more willing to hire men over 6 feet than shorter men with the same credentials, and taller men earn more. In one study each extra inch was worth about $1,300 a year. But being too big can be a disadvantage: a tall, heavily built football player said people found him intimidating off the field and assumed he had no brains.',
      items: [
        ['Executive offices are usually on the top floors.', 's', 'One line says exactly this.'],
        ['In one study, each extra inch of height was worth about $1,300 a year.', 's', 'The figure is given in the passage.'],
        ['Hiring decisions are not always based on qualifications alone.', 'i', 'Clue: taller men were preferred over shorter men with the <b>same credentials</b>. If qualifications were all that mattered, height would make no difference.'],
        ['Height is an advantage only up to a point.', 'i', 'Clues: tall "can help", but being "too big can be a disadvantage". Put together, the benefit has a limit.'],
        ['Tall women also earn more for every extra inch.', 'n', 'The studies are about <b>men</b> only. Extending them to women is a scope shift.'],
        ['Height causes people to earn more.', 'n', 'The passage shows a <b>link</b> between height and pay, not a proven cause.'],
        ['Companies should stop considering height when they hire.', 'n', 'An opinion about what <b>should</b> happen. The author reports; they don\'t argue this.'],
      ],
    },
    {
      name: 'Insect decline',
      src: 'Retold from a BBC News report',
      text: 'Scientists warn that the world is losing insects so fast that it threatens a "collapse of nature" and could badly hurt food production. A landmark review in the journal Biological Conservation found a dramatic fall in insect numbers across the globe; some studies suggest falls of as much as 75% in recent decades. The researchers name habitat loss, pesticide use and climate change as the main drivers, call for urgent action, and warn that doing nothing could be catastrophic.',
      items: [
        ['The review was published in Biological Conservation.', 's', 'The journal is named in the passage.'],
        ['Habitat loss, pesticide use and climate change are named as the main drivers.', 's', 'Stated in the last sentence.'],
        ['Fewer insects could mean smaller harvests of crops that need pollinating.', 'i', 'The text links the decline to <b>food production</b>; common knowledge adds that insects pollinate many crops.'],
        ['The size of the decline varies from one study to another.', 'i', 'Clues: "<b>some</b> studies suggest" and "<b>as much as</b> 75%". Not every study found 75%.'],
        ['Reducing pesticide use could help slow the decline.', 'i', 'Pesticides are named as a driver, and the researchers call for action, so cutting a driver should help.'],
        ['Climate change is the single biggest cause of insect decline.', 'n', 'Three drivers are named but <b>not ranked</b>.'],
        ['All insect species will be extinct within ten years.', 'n', 'Over-reaching: no "all" and no time frame appear in the text.'],
      ],
    },
    {
      name: 'Plagiarism support',
      src: 'Retold from Sutherland-Smith (2010), p. 9',
      text: 'Universities put the burden of understanding plagiarism and referencing rules on students. The universities studied offer many online self-help tutorials and workshops, and many of these are excellent and useful. Nevertheless, there is little extra, detailed one-to-one help with academic writing, especially for students studying off-campus or by distance, and this raises equity issues for those who make plagiarism policy.',
      items: [
        ['Many of the online self-help tutorials are excellent.', 's', 'Said directly: "many of these are excellent".'],
        ['Universities place the burden of understanding plagiarism on students.', 's', 'The first sentence says it.'],
        ['The author thinks online resources alone are not enough.', 'i', '"<b>Nevertheless</b>" turns from the tutorials to the lack of individual help: that gap is the author\'s point.'],
        ['Off-campus and distance students are at a disadvantage.', 'i', 'They are singled out as lacking help, and "equity" means fairness between groups.'],
        ['The author would support more one-to-one writing help.', 'i', 'The lack of individual assistance is exactly the problem the author raises.'],
        ['The online tutorials are useless.', 'n', 'It <b>contradicts</b> the passage, which calls many of them excellent.'],
        ['Distance students plagiarise more than on-campus students.', 'n', 'The passage gives no data on how much anyone plagiarises; it is about support, not behaviour.'],
      ],
    },
  ];

  VIZ.register('inference-detective', {
    title: 'Inference detective', kind: 'Practice',
    mount(body, api) {
      const wrap = api.el('div', { class: 'ew' }, body);
      api.el('p', { class: 'ew-instr', html: 'Pick a passage and read it. For each statement, tap <b>Stated</b>, <b>Can be inferred</b> or <b>Not supported</b>.' }, wrap);
      const tabs = api.el('div', { class: 'ew-row' }, wrap);
      const card = api.el('div', { class: 'ew-card' }, wrap);
      const box = api.el('div', { class: 'ew' }, wrap);
      const foot = api.el('div', { class: 'ew-foot' }, wrap);
      const score = api.el('span', { class: 'ew-score' }, foot);
      const btns = api.el('div', { class: 'ew-row' }, foot);
      const next = api.button('Next', () => { i++; paint(); }, btns, { primary: true });
      api.button('Reset', () => load(p), btns);
      let p = 0, order, i, right, answered;
      function load(n) { p = n; order = EW.shuffle(PASSAGES[p].items); i = 0; right = 0; paint(); }
      function paint() {
        const P = PASSAGES[p];
        tabs.innerHTML = PASSAGES.map((x, k) => `<button type="button" class="ew-chip${k === p ? ' on' : ''}" data-p="${k}">${x.name}</button>`).join('');
        card.innerHTML = `<h4>${P.name}</h4><div class="ew-text">${EW.esc(P.text)}</div><p class="ew-instr" style="margin-top:6px">${P.src}</p>`;
        answered = false; next.hidden = true;
        if (i >= order.length) {
          const all = right === order.length;
          box.innerHTML = `<p class="ew-q">${right} of ${order.length} right on this passage.</p><div class="ew-fb ${all ? 'ok' : 'no'}"><span class="tag">${all ? 'All right' : 'Keep going'}</span>${all ? 'Every label correct.' : 'Tap Reset to try this passage again.'} ${p + 1 < PASSAGES.length ? 'Or pick the next passage above.' : 'Or pick another passage above.'}</div>`;
          score.innerHTML = `Done · <b>${right}/${order.length}</b>`;
          return;
        }
        const it = order[i];
        box.innerHTML = `<span class="ew-score">Statement ${i + 1} of ${order.length}</span><p class="ew-q">${it[0]}</p><div class="ew-opts">${LABELS.map(([k, l]) => `<button type="button" class="ew-opt" data-k="${k}">${l}</button>`).join('')}</div><div class="ew-fb"></div>`;
        score.innerHTML = `Statement <b>${i + 1}</b> of ${order.length} · <b>${right}</b> right`;
      }
      api.listen(tabs, 'click', (e) => { const b = e.target.closest('[data-p]'); if (b) load(+b.dataset.p); });
      api.listen(box, 'click', (e) => {
        const b = e.target.closest('.ew-opt'); if (!b || answered) return;
        answered = true;
        const it = order[i], ok = b.dataset.k === it[1];
        if (ok) right++;
        box.querySelectorAll('.ew-opt').forEach((x) => { x.disabled = true; x.classList.add(x.dataset.k === it[1] ? 'right' : x === b ? 'wrong' : 'dim'); });
        const name = LABELS.find((l) => l[0] === it[1])[1];
        const fb = box.querySelector('.ew-fb');
        fb.className = 'ew-fb ' + (ok ? 'ok' : 'no');
        fb.innerHTML = `<span class="tag">${ok ? 'Right' : 'Not quite'}</span><b>${name}.</b> ${it[2]}`;
        score.innerHTML = `Statement <b>${i + 1}</b> of ${order.length} · <b>${right}</b> right`;
        next.hidden = false; next.textContent = i + 1 < order.length ? 'Next' : 'See score';
      });
      load(0);
    },
  });

  // ---------------------------------------------------------------- source-rater
  VIZ.register('source-rater', {
    title: 'Which source would you use?', kind: 'Practice',
    mount(body, api) {
      EW.rounds(body, api, {
        instr: 'Read the research need, then tap the source you would use or trust most.',
        items: [
          { q: 'Your report on mobile-tower radiation needs <b>checked research findings</b> you can cite.', options: ['A peer-reviewed article found through Google Scholar', 'A popular blog post on phone safety', 'A viral social media thread', 'The first page of plain Google results'], correct: 0, why: 'Peer-reviewed articles are checked by other experts before publication. Google Scholar is the recommended route to them.' },
          { q: 'You know nothing about electromagnetic radiation yet and want a <b>quick overview</b> before you start.', options: ['A Wikipedia entry, then follow its footnotes', 'A Wikipedia entry, cited as your final source', 'An online group\'s discussion', 'A random news comment section'], correct: 0, why: 'Wikipedia is a good <b>starting point</b> for an overview and its footnotes lead to real sources, but it is not the final destination, since anyone can edit it.' },
          { q: 'You need to know whether your college library has a <b>particular textbook</b>.', options: ['The library\'s OPAC', 'PubMed', 'Google Scholar', 'Project Gutenberg'], correct: 0, why: 'The <b>online public access catalog</b> searches all of that library\'s holdings.' },
          { q: 'Your project is on <b>exam anxiety</b> among engineering students.', options: ['APA PsycINFO', 'Business Source Premier', 'LexisNexis', 'InfoTrac for magazine articles only'], correct: 0, why: 'PsycINFO covers articles in <b>psychology</b>, which is where anxiety research sits.' },
          { q: 'A health report needs research on how a <b>new drug</b> affects blood pressure.', options: ['PubMed', 'JSTOR\'s magazine section', 'A pharmacy\'s advertisement', 'Business Source Premier'], correct: 0, why: 'PubMed indexes articles in the <b>health sciences</b>. An advertisement exists to sell, not to inform.' },
          { q: 'A lawyer asks you for <b>court decisions</b> on a faulty product, as in the Casamonte example.', options: ['LexisNexis legal database', 'Google Books', 'A consumer forum', 'Wikipedia'], correct: 0, why: 'Casamonte used <b>LexisNexis</b> for full-length legal articles and cases after a first Google search.' },
          { q: 'You want the <b>free full text</b> of a nineteenth-century science book that is out of copyright.', options: ['Project Gutenberg or HathiTrust', 'A citation manager', 'Business Source Premier', 'A news site'], correct: 0, why: 'Digital libraries hold works in the <b>public domain</b>; a citation manager only stores your references.' },
          { q: 'You need <b>official air-quality figures</b> for Indian cities.', options: ['A government pollution board\'s website', 'A blogger\'s summary of the figures', 'A social media post with a chart', 'An online group for runners'], correct: 0, why: 'A government website is the <b>official body</b> behind the data. Others may copy it wrongly or out of date.' },
          { q: 'Two sources give different insect-decline figures. What would a careful researcher do, like Casamonte with Dialog?', options: ['Double-check in a second credible source or the original study', 'Pick the bigger number', 'Use whichever appeared first in Google', 'Ask on social media'], correct: 0, why: 'Casamonte <b>double-checked</b> in a second database. Trace the figure to the original review.' },
          { q: 'You found a useful web page with <b>no author and no date</b>.', options: ['Treat it with caution and look for a source with a named author', 'Cite it; the content sounds right', 'Cite it as "Internet"', 'Copy it into your notes without the URL'], correct: 0, why: 'Without an author or date you can\'t judge its <b>authority</b> or whether it is current, and you can\'t cite it properly.' },
        ],
      });
    },
  });
})();
