/* ew-kit.js — building blocks for the English practice widgets (registered with VIZ like any diagram).
 * All HTML, styled by the .ew-* classes in app.css, so every widget follows dark and light mode.
 * Everything works by tapping (no drag needed) and every answer says why.
 *
 *   EW.rounds(body, api, { instr, items: [{ q, options: [..], correct: i, why, tag? }], shuffle: true })
 *       multiple-choice rounds with a score, feedback and Reset
 *   EW.sorter(body, api, { instr, slots: [{ k, label }], pieces: [{ text, slot, why }] })
 *       tap a piece, then tap the slot (bucket) it belongs in; Check marks each placement
 *   EW.order(body, api, { instr, items: ['first', 'second', …], why, label })
 *       tap the pieces in the right order; Check compares with the model order
 */
(function () {
  'use strict';
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const div = (api, cls, parent, html) => api.el('div', { class: cls, html: html || '' }, parent);

  // footer: score on the left, buttons on the right
  function foot(api, parent) {
    const f = div(api, 'ew-foot', parent);
    const score = api.el('span', { class: 'ew-score' }, f);
    const btns = div(api, 'ew-row', f);
    return { f, score, btns };
  }

  function rounds(body, api, cfg) {
    const wrap = div(api, 'ew', body);
    if (cfg.instr) api.el('p', { class: 'ew-instr', html: cfg.instr }, wrap);
    const box = div(api, 'ew', wrap);
    const ft = foot(api, wrap);
    let order, i, right, answered;
    const next = api.button('Next', () => { i++; paint(); }, ft.btns, { primary: true });
    api.button('Reset', start, ft.btns);
    function start() { order = cfg.shuffle === false ? cfg.items.slice() : shuffle(cfg.items); i = 0; right = 0; paint(); }
    function paint() {
      answered = false; next.hidden = true;
      if (i >= order.length) {
        box.innerHTML = `<p class="ew-q">${right} of ${order.length} right.</p><div class="ew-fb ${right === order.length ? 'ok' : 'no'}">${right === order.length ? '<span class="tag">All right</span>Every one correct.' : '<span class="tag">Try again</span>Tap Reset for a fresh round in a new order.'}</div>`;
        ft.score.innerHTML = `Done · <b>${right}/${order.length}</b>`;
        return;
      }
      const it = order[i];
      const idx = cfg.shuffleOptions === false ? it.options.map((_, k) => k) : shuffle(it.options.map((_, k) => k));
      box.innerHTML = `${it.tag ? `<span class="ew-score">${esc(it.tag)}</span>` : ''}<p class="ew-q">${it.q}</p><div class="ew-opts${it.options.length === 2 ? ' two' : ''}">${idx.map((k) => `<button type="button" class="ew-opt" data-k="${k}">${it.options[k]}</button>`).join('')}</div><div class="ew-fb"></div>`;
      ft.score.innerHTML = `Question <b>${i + 1}</b> of ${order.length} · <b>${right}</b> right`;
    }
    api.listen(box, 'click', (e) => {
      const b = e.target.closest('.ew-opt'); if (!b || answered) return;
      answered = true;
      const it = order[i], k = +b.dataset.k, ok = k === it.correct;
      if (ok) right++;
      box.querySelectorAll('.ew-opt').forEach((x) => { x.disabled = true; const kk = +x.dataset.k; x.classList.add(kk === it.correct ? 'right' : kk === k ? 'wrong' : 'dim'); });
      const fb = box.querySelector('.ew-fb');
      fb.className = 'ew-fb ' + (ok ? 'ok' : 'no');
      fb.innerHTML = `<span class="tag">${ok ? 'Right' : 'Not quite'}</span>${it.why || ''}`;
      ft.score.innerHTML = `Question <b>${i + 1}</b> of ${order.length} · <b>${right}</b> right`;
      next.hidden = false; next.textContent = i + 1 < order.length ? 'Next' : 'See score';
    });
    start();
  }

  function sorter(body, api, cfg) {
    const wrap = div(api, 'ew', body);
    if (cfg.instr) api.el('p', { class: 'ew-instr', html: cfg.instr }, wrap);
    const pool = div(api, 'ew-row', wrap);
    const slots = div(api, 'ew-grid2', wrap);
    const fb = div(api, 'ew-fb', wrap);
    const ft = foot(api, wrap);
    let pieces, sel, place, checked;
    api.button('Check', check, ft.btns, { primary: true });
    api.button('Reset', start, ft.btns);
    function start() { pieces = shuffle(cfg.pieces.map((p, n) => Object.assign({ n }, p))); sel = null; place = {}; checked = false; fb.className = 'ew-fb'; fb.innerHTML = ''; paint(); }
    function paint() {
      pool.innerHTML = pieces.map((p) => `<button type="button" class="ew-chip${place[p.n] ? ' used' : ''}${sel === p.n ? ' on' : ''}" data-p="${p.n}">${p.text}</button>`).join('');
      slots.innerHTML = cfg.slots.map((s) => {
        const mine = pieces.filter((p) => place[p.n] === s.k);
        return `<div class="ew-card" data-s="${esc(s.k)}" role="button" tabindex="0"><h4>${s.label}</h4><div class="ew-row" style="margin-top:6px">${mine.length ? mine.map((p) => `<button type="button" class="ew-chip${checked ? (p.slot === s.k ? ' right' : ' wrong') : ''}" data-back="${p.n}">${p.text}</button>`).join('') : '<span class="ew-instr">Tap a piece above, then tap here.</span>'}</div></div>`;
      }).join('');
      const n = Object.keys(place).length;
      ft.score.innerHTML = `Placed <b>${n}</b> of ${pieces.length}`;
    }
    api.listen(wrap, 'click', (e) => {
      const p = e.target.closest('[data-p]'), back = e.target.closest('[data-back]'), s = e.target.closest('[data-s]');
      if (p) { const n = +p.dataset.p; if (place[n]) { delete place[n]; } sel = sel === n ? null : n; checked = false; paint(); return; }
      if (back) { delete place[+back.dataset.back]; checked = false; paint(); return; }
      if (s && sel != null) { place[sel] = s.dataset.s; sel = null; checked = false; paint(); }
    });
    function check() {
      if (Object.keys(place).length < pieces.length) { fb.className = 'ew-fb no'; fb.innerHTML = '<span class="tag">Not yet</span>Place every piece first.'; return; }
      checked = true; paint();
      const wrong = pieces.filter((p) => place[p.n] !== p.slot);
      fb.className = 'ew-fb ' + (wrong.length ? 'no' : 'ok');
      const label = (k) => (cfg.slots.find((s) => s.k === k) || {}).label || k;
      fb.innerHTML = wrong.length
        ? `<span class="tag">${pieces.length - wrong.length} of ${pieces.length}</span>Red ones are in the wrong place:<ul style="margin:8px 0 0;padding-left:18px">${wrong.map((p) => `<li><b>${p.text}</b> belongs in <b>${label(p.slot)}</b>. ${p.why || ''}</li>`).join('')}</ul>`
        : `<span class="tag">All right</span>${cfg.done || 'Every piece is in the right place.'}`;
    }
    start();
  }

  function order(body, api, cfg) {
    const wrap = div(api, 'ew', body);
    if (cfg.instr) api.el('p', { class: 'ew-instr', html: cfg.instr }, wrap);
    const built = div(api, 'ew-slots', wrap);
    const pool = div(api, 'ew-opts', wrap);
    const fb = div(api, 'ew-fb', wrap);
    const ft = foot(api, wrap);
    let mix, seq, checked;
    api.button('Check', check, ft.btns, { primary: true });
    api.button('Undo', () => { seq.pop(); checked = false; fb.className = 'ew-fb'; fb.innerHTML = ''; paint(); }, ft.btns);
    api.button('Reset', start, ft.btns);
    function start() { mix = shuffle(cfg.items.map((t, n) => ({ t, n }))); seq = []; checked = false; fb.className = 'ew-fb'; fb.innerHTML = ''; paint(); }
    function paint() {
      built.innerHTML = cfg.items.map((_, k) => { const p = seq[k] != null ? cfg.items[seq[k]] : ''; return `<div class="ew-slot${p ? ' filled' : ''}${checked && p ? (seq[k] === k ? ' right' : ' wrong') : ''}"><span class="ew-slot-k">${cfg.label ? esc(cfg.label(k)) : k + 1}</span><span class="ew-slot-v">${p}</span></div>`; }).join('');
      pool.innerHTML = mix.filter((m) => !seq.includes(m.n)).map((m) => `<button type="button" class="ew-opt" data-n="${m.n}">${m.t}</button>`).join('');
      ft.score.innerHTML = `Placed <b>${seq.length}</b> of ${cfg.items.length}`;
    }
    api.listen(pool, 'click', (e) => { const b = e.target.closest('[data-n]'); if (!b) return; seq.push(+b.dataset.n); checked = false; paint(); });
    function check() {
      if (seq.length < cfg.items.length) { fb.className = 'ew-fb no'; fb.innerHTML = '<span class="tag">Not yet</span>Place every piece first.'; return; }
      checked = true; paint();
      const good = seq.filter((n, k) => n === k).length;
      fb.className = 'ew-fb ' + (good === seq.length ? 'ok' : 'no');
      fb.innerHTML = `<span class="tag">${good} of ${seq.length} in place</span>${cfg.why || ''}`;
    }
    start();
  }

  window.EW = { rounds, sorter, order, shuffle, esc };
})();
