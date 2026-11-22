/* ea-kit.js — building blocks for the English animations (registered with VIZ like any diagram).
 * Everything follows the app's colour variables, so it works in dark and light mode, and HTML text wraps on phones.
 *
 *   EA.player(api, body, { modes, mode, onMode })   step-through player: stage, caption, Back / Play / Next, step dots
 *       p.stage              the element the widget draws in
 *       p.load(steps, show)  steps: [{ cap: 'html', hold?: ms }]; show(i, prev) draws step i (may return a Promise)
 *   EA.tokens(api, parent)  a sentence of word tokens; set([{ k, t, c?, tag?, j? }], { links }) animates the change:
 *       kept words slide to their new place, removed words strike out and fade, new words drop in
 *       links: [{ from: k, to: k, c?, label? }] curved arrows above the words
 *   EA.scene(api)           keyed SVG elements; to({ key: { x, y, s, o, ... } }, seconds) tweens them together
 *   EA.svg(api, parent, viewBox, label) responsive SVG stage;  EA.t(svg, x, y, text, cls, attrs) text with \n lines
 *   EA.draw(api, path, seconds)  draws a stroke from start to end
 */
(function () {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const EASE = 'cubic-bezier(.2,.7,.2,1)';
  const CSS = `
.ea { display: grid; gap: 12px; }
.ea-stage { position: relative; min-width: 0; }
.ea-svgwrap { max-width: 660px; margin: 0 auto; width: 100%; }
.ea-svg { display: block; width: 100%; height: auto; overflow: visible; font-family: var(--sans); }
.ea-svg text { fill: var(--text); font-size: 15px; }
.ea-svg .w { fill: var(--white); } .ea-svg .d { fill: var(--text-dim); } .ea-svg .f { fill: var(--text-faint); }
.ea-svg .b { font-weight: 600; } .ea-svg .sm { font-size: 13px; } .ea-svg .lg { font-size: 18px; } .ea-svg .xl { font-size: 22px; }
.ea-svg .serif { font-family: var(--serif); }
.ea-svg .mid { text-anchor: middle; } .ea-svg .end { text-anchor: end; }
.ea-svg .box { fill: var(--surface); stroke: var(--line-2); stroke-width: 1.2; }
.ea-svg .box2 { fill: var(--surface-2); stroke: var(--line-2); stroke-width: 1.2; }
.ea-svg .bg { fill: var(--bg); stroke: var(--line); stroke-width: 1; }
.ea-svg .ln { fill: none; stroke: var(--line-2); stroke-width: 1.5; }
.ea-svg .ln2 { fill: none; stroke: var(--text-faint); stroke-width: 1.5; }
.ea-svg .lnw { fill: none; stroke: var(--white); stroke-width: 2; }
.ea-svg .dash { stroke-dasharray: 5 5; }
${['e', 'cat', 'an', 'good', 'warn', 'bad', 'hole', 'photon'].map((c) => `.ea-svg .c-${c} { fill: var(--${c}); } .ea-svg .s-${c} { stroke: var(--${c}); fill: none; stroke-width: 2; } .ea-svg .f-${c} { fill: color-mix(in srgb, var(--${c}) 15%, var(--surface)); stroke: var(--${c}); stroke-width: 1.5; } .ea-svg .k-${c} { fill: var(--${c}); stroke: none; }`).join('\n')}
.ea-sent { position: relative; font-family: var(--serif); font-size: 19px; line-height: 1.5; color: var(--text-2); padding: 26px 6px 22px; overflow-wrap: anywhere; }
.ea-sent.sm { font-size: 17px; padding: 22px 4px 18px; }
.ea-sent .ea-tok { display: inline-block; position: relative; margin: 0 .26em 16px 0; padding: 1px 3px; border-radius: 6px;
  transition: color .35s, background-color .35s, box-shadow .35s, opacity .35s; }
.ea-sent .ea-tok.j { margin-left: -.26em; }
.ea-sent .ea-tok.out { text-decoration: line-through; text-decoration-color: var(--bad); color: var(--bad); }
.ea-sent .ea-tok.new { background: color-mix(in srgb, var(--good) 24%, transparent); }
.ea-sent .ea-tok.hl { background: color-mix(in srgb, var(--warn) 28%, transparent); color: var(--white); }
.ea-sent .ea-tok.key { color: var(--white); font-weight: 600; }
.ea-sent .ea-tok.dim { opacity: .34; }
.ea-sent .ea-tok.bad { color: var(--bad); text-decoration: line-through; text-decoration-color: var(--bad); }
.ea-sent .ea-tok.good { color: var(--good); background: color-mix(in srgb, var(--good) 14%, transparent); }
.ea-sent .ea-tok.clue { box-shadow: inset 0 0 0 2px var(--warn); color: var(--white); }
.ea-sent .ea-tok.ring { box-shadow: inset 0 0 0 2px var(--white); color: var(--white); }
${['e', 'cat', 'an', 'good', 'warn', 'bad'].map((c) => `.ea-sent .ea-tok.u-${c} { color: var(--${c}); box-shadow: inset 0 -2px 0 var(--${c}); } .ea-sent .ea-tok.b-${c} { background: color-mix(in srgb, var(--${c}) 20%, transparent); color: var(--white); }`).join('\n')}
.ea-sent .ea-tag { position: absolute; left: 50%; top: 100%; transform: translate(-50%, 2px); font: 600 12px/1.15 var(--sans); color: var(--text-dim);
  white-space: nowrap; letter-spacing: 0; pointer-events: none; }
.ea-ov { position: absolute; left: 0; top: 0; overflow: visible; pointer-events: none; }
.ea-ov .ea-link { fill: none; stroke: var(--warn); stroke-width: 2; }
.ea-ov .ea-link.e { stroke: var(--e); } .ea-ov .ea-link.good { stroke: var(--good); } .ea-ov .ea-link.bad { stroke: var(--bad); } .ea-ov .ea-link.an { stroke: var(--an); } .ea-ov .ea-link.cat { stroke: var(--cat); }
.ea-ov text { font: 600 12px var(--sans); fill: var(--text-dim); }
.ea-cap { font-size: 15px; line-height: 1.6; color: var(--text); min-height: 4.8em; margin: 0; border-top: 1px solid var(--line); padding-top: 10px; }
.ea-cap b { color: var(--white); }
.ea-bar { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.ea-bar .viz-steps { margin: 0 0 0 auto; }
.ea-modes { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.ea-card { border: 1px solid var(--line-2); border-radius: 12px; background: var(--surface); padding: 10px 14px; font-size: 15px; line-height: 1.55; color: var(--text); }
.ea-card b { color: var(--white); }
.ea-card .lbl { display: block; font-size: 13px; color: var(--text-dim); font-weight: 600; margin-bottom: 2px; }
.ea-grid2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; }
.ea-pill { display: inline-block; font: 600 13px/1.3 var(--sans); padding: 3px 9px; border-radius: 99px; border: 1px solid var(--line-2); color: var(--text-2); background: var(--surface); }
${['e', 'cat', 'an', 'good', 'warn', 'bad'].map((c) => `.ea-pill.p-${c} { border-color: color-mix(in srgb, var(--${c}) 60%, transparent); color: var(--${c}); }`).join('\n')}
.ea-fade { transition: opacity .45s, transform .45s; }
@media (max-width: 560px) { .ea-sent { font-size: 17px; } .ea-sent.sm { font-size: 16px; } .ea-cap { font-size: 14px; } }
`;
  function css(api) { api.css('ea-kit', CSS); }
  const wait = (api, ms) => new Promise((r) => (ms > 0 ? api.timeout(r, ms) : r()));
  const textLen = (html) => String(html || '').replace(/<[^>]+>/g, '').length;

  // ------------------------------------------------------------------ player
  function player(api, body, cfg) {
    css(api);
    cfg = cfg || {};
    const root = api.el('div', { class: 'ea' }, body);
    let modeSeg = null;
    if (cfg.modes) {
      const row = api.el('div', { class: 'ea-modes' }, root);
      if (cfg.modeLabel) api.el('span', { class: 'ea-instr', html: cfg.modeLabel, style: 'font-size:13px;color:var(--text-dim)' }, row);
      modeSeg = api.segmented(cfg.modes, cfg.mode, (v) => { stop(); cfg.onMode && cfg.onMode(v); }, row);
    }
    const stage = api.el('div', { class: 'ea-stage' }, root);
    const cap = api.el('p', { class: 'ea-cap', 'aria-live': 'polite' }, root);
    const bar = api.el('div', { class: 'ea-bar' }, root);
    const bBack = api.button('Back', () => { stop(); if (i > 0) go(i - 1); }, bar);
    const bPlay = api.button('Play', () => { if (playing) stop(); else play(); }, bar, { primary: true });
    const bNext = api.button('Next', () => { stop(); if (i < steps.length - 1) go(i + 1); }, bar);
    let dots = null, steps = [], show = null, i = -1, playing = false, token = 0;
    function setDots() {
      if (dots) dots.el.remove();
      dots = api.stepper(steps.length, (k) => { stop(); go(k); }, bar);
    }
    function paintBtns() {
      bBack.disabled = i <= 0;
      bNext.disabled = i >= steps.length - 1;
      bPlay.textContent = playing ? 'Pause' : (i >= steps.length - 1 ? 'Replay' : 'Play');
    }
    async function go(k) {
      const my = ++token;
      const prev = i;
      i = k;
      cap.innerHTML = steps[k].cap || '';
      dots && dots.set(k);
      paintBtns();
      try { await (show(k, prev) || null); } catch (e) { console.error('ea step', e); }
      if (my !== token || !playing) return;
      await wait(api, steps[k].hold != null ? steps[k].hold : Math.max(1800, Math.min(6500, 900 + textLen(steps[k].cap) * 32)));
      if (my !== token || !playing) return;
      if (i < steps.length - 1) go(i + 1); else { playing = false; paintBtns(); }
    }
    function play() { playing = true; if (i >= steps.length - 1) go(0); else go(i + 1); paintBtns(); }
    function stop() { playing = false; token++; paintBtns(); }
    function load(st, sh, opts) {
      stop();
      steps = st; show = sh; i = -1;
      setDots();
      playing = !((opts && opts.autoplay === false) || api.reduced);
      go(0);
    }
    return { root, stage, cap, bar, load, go, stop, get index() { return i; }, setMode(v) { modeSeg && modeSeg.set(v); } };
  }

  // ------------------------------------------------------------------ tokens (FLIP)
  function tokens(api, parent, opts) {
    css(api);
    opts = opts || {};
    const box = api.el('div', { class: 'ea-sent' + (opts.cls ? ' ' + opts.cls : '') }, parent);
    const ov = document.createElementNS(NS, 'svg');
    ov.setAttribute('class', 'ea-ov');
    ov.setAttribute('aria-hidden', 'true');
    box.appendChild(ov);
    const live = new Map();
    let links = [], linkTimer = 0;
    const arrowId = api.uid('ea-arr');
    function paint(s, it) {
      if (s.__t !== it.t) { s.firstChild.textContent = it.t; s.__t = it.t; }
      s.className = 'ea-tok' + (it.c ? ' ' + it.c : '') + (it.j ? ' j' : '') + (s.__isNew ? ' new' : '');
      let tg = s.querySelector('.ea-tag');
      if (it.tag) { if (!tg) { tg = document.createElement('i'); tg.className = 'ea-tag'; s.appendChild(tg); } tg.innerHTML = it.tag; tg.style.color = it.tagc ? `var(--${it.tagc})` : ''; }
      else if (tg) tg.remove();
    }
    function mk(it) {
      const s = document.createElement('span');
      s.dataset.k = it.k;
      s.appendChild(document.createElement('span'));
      return s;
    }
    function set(spec, o) {
      o = o || {};
      const dur = api.reduced ? 0 : (o.dur != null ? o.dur : 560);
      const br = box.getBoundingClientRect();
      const first = new Map();
      live.forEach((s, k) => { const r = s.getBoundingClientRect(); first.set(k, { x: r.left - br.left, y: r.top - br.top }); });
      const h0 = box.offsetHeight;
      const keys = new Set(spec.map((it) => it.k));
      live.forEach((s, k) => {
        if (keys.has(k)) return;
        const f = first.get(k);
        live.delete(k);
        s.getAnimations().forEach((a) => a.cancel());
        s.classList.add('out');
        s.classList.remove('new');
        Object.assign(s.style, { position: 'absolute', left: f.x + 'px', top: f.y + 'px', margin: '0' });
        if (dur) { const a = s.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(8px)' }], { duration: dur * 1.2, delay: dur * 0.5, easing: 'ease-in', fill: 'forwards' }); a.onfinish = () => s.remove(); }
        else s.remove();
      });
      const order = spec.map((it) => {
        let s = live.get(it.k);
        const isNew = !s;
        if (isNew) { s = mk(it); live.set(it.k, s); }
        s.__isNew = isNew && o.mark !== false;
        paint(s, it);
        s.__fresh = isNew;
        return s;
      });
      order.forEach((s) => { s.getAnimations().forEach((a) => a.cancel()); box.insertBefore(s, ov); });
      const br2 = box.getBoundingClientRect();
      order.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (s.__fresh) {
          if (dur) s.animate([{ opacity: 0, transform: 'translateY(-12px) scale(.9)' }, { opacity: 1, transform: 'none' }], { duration: dur, delay: o.inDelay != null ? o.inDelay : dur * 0.45, easing: EASE, fill: 'backwards' });
          if (s.__isNew) api.timeout(() => { s.__isNew = false; s.classList.remove('new'); }, dur * 2.2 + 1200);
        } else {
          const f = first.get(s.dataset.k);
          if (f && dur) {
            const dx = f.x - (r.left - br2.left), dy = f.y - (r.top - br2.top);
            if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) s.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: dur * 1.15, easing: EASE });
          }
        }
      });
      const h1 = box.offsetHeight;
      if (dur && Math.abs(h1 - h0) > 1) box.animate([{ height: h0 + 'px' }, { height: h1 + 'px' }], { duration: dur, easing: EASE });
      links = o.links || [];
      clearTimeout(linkTimer);
      ov.innerHTML = '';
      linkTimer = api.timeout(() => drawLinks(true), dur ? dur * 1.3 : 0);
      return wait(api, dur ? dur * 1.7 : 0);
    }
    function drawLinks(anim) {
      ov.innerHTML = '';
      if (!links.length) return;
      const br = box.getBoundingClientRect();
      ov.setAttribute('width', br.width); ov.setAttribute('height', br.height);
      ov.setAttribute('viewBox', `0 0 ${br.width} ${br.height}`);
      const defs = document.createElementNS(NS, 'defs');
      ov.appendChild(defs);
      links.forEach((L, n) => {
        const a = live.get(L.from), b = live.get(L.to);
        if (!a || !b) return;
        const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
        const x1 = ra.left - br.left + ra.width / 2, y1 = ra.top - br.top + 1;
        const x2 = rb.left - br.left + rb.width / 2, y2 = rb.top - br.top + 1;
        const lift = Math.min(24, 12 + Math.abs(x2 - x1) * 0.08) + (Math.abs(y2 - y1) > 4 ? 6 : 0);
        const mid = arrowId + '-' + n;
        const m = document.createElementNS(NS, 'marker');
        Object.entries({ id: mid, viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' }).forEach(([k, v]) => m.setAttribute(k, v));
        const mp = document.createElementNS(NS, 'path');
        mp.setAttribute('d', 'M0,0 L10,5 L0,10 z');
        mp.setAttribute('class', 'ea-head');
        mp.style.fill = `var(--${({ e: 'e', good: 'good', bad: 'bad', an: 'an', cat: 'cat' })[L.c] || 'warn'})`;
        m.appendChild(mp); defs.appendChild(m);
        const p = document.createElementNS(NS, 'path');
        p.setAttribute('d', `M${x1} ${y1} C ${x1} ${y1 - lift}, ${x2} ${y2 - lift}, ${x2} ${y2 - 2}`);
        p.setAttribute('class', 'ea-link' + (L.c ? ' ' + L.c : ''));
        p.setAttribute('marker-end', `url(#${mid})`);
        ov.appendChild(p);
        if (L.label) {
          const t = document.createElementNS(NS, 'text');
          t.setAttribute('x', (x1 + x2) / 2); t.setAttribute('y', Math.min(y1, y2) - lift + 2); t.setAttribute('text-anchor', 'middle');
          t.textContent = L.label;
          ov.appendChild(t);
        }
        if (anim && !api.reduced) {
          const len = p.getTotalLength();
          p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
          p.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }], { duration: 650, easing: EASE, fill: 'forwards' });
        }
      });
    }
    if ('ResizeObserver' in window) {
      let w = 0;
      const ro = new ResizeObserver(() => { const nw = box.clientWidth; if (Math.abs(nw - w) > 1) { w = nw; drawLinks(false); } });
      ro.observe(box);
      api.onDestroy(() => ro.disconnect());
    }
    return { el: box, set, tok: (k) => live.get(k), clear() { set([], { dur: 0 }); } };
  }

  // ------------------------------------------------------------------ svg helpers
  function svg(api, parent, viewBox, label) {
    css(api);
    const wrap = api.el('div', { class: 'ea-svgwrap' }, parent);
    return api.svg('svg', { viewBox, class: 'ea-svg', role: 'img', 'aria-label': label || '', preserveAspectRatio: 'xMidYMid meet' }, wrap);
  }
  function t(parent, x, y, str, cls, attrs) {
    const lines = String(str).split('\n');
    const el = document.createElementNS(NS, 'text');
    el.setAttribute('x', x); el.setAttribute('y', y);
    if (cls) el.setAttribute('class', cls);
    if (attrs) for (const k in attrs) el.setAttribute(k, attrs[k]);
    const lh = (attrs && attrs.lh) || 1.25;
    if (lines.length === 1) el.textContent = str;
    else lines.forEach((ln, n) => { const s = document.createElementNS(NS, 'tspan'); s.setAttribute('x', x); s.setAttribute('dy', n ? lh + 'em' : '0'); s.textContent = ln; el.appendChild(s); });
    parent.appendChild(el);
    return el;
  }
  function scene(api) {
    const items = new Map();
    function defSet(el, p) {
      el.setAttribute('transform', `translate(${(+p.x).toFixed(2)} ${(+p.y).toFixed(2)})` + (p.s !== 1 ? ` scale(${(+p.s).toFixed(3)})` : '') + (p.r ? ` rotate(${(+p.r).toFixed(2)})` : ''));
      el.style.opacity = p.o;
    }
    function add(key, el, init, setter) {
      const it = { el, st: Object.assign({ x: 0, y: 0, s: 1, o: 1, r: 0 }, init || {}), setter: setter || defSet };
      items.set(key, it);
      it.setter(el, it.st);
      return el;
    }
    function to(map, dur, ease) {
      const d = api.reduced ? 0 : (dur == null ? 0.6 : dur);
      const jobs = [];
      Object.keys(map).forEach((k) => {
        const it = items.get(k);
        if (!it) return;
        jobs.push({ it, from: Object.assign({}, it.st), tgt: Object.assign({}, it.st, map[k]) });
      });
      if (!jobs.length) return Promise.resolve();
      return api.tween(d, (p) => {
        jobs.forEach(({ it, from, tgt }) => {
          const cur = {};
          for (const n in tgt) { const a = from[n], b = tgt[n]; cur[n] = (typeof a === 'number' && typeof b === 'number') ? a + (b - a) * p : (p >= 1 ? b : a); }
          it.st = cur;
          it.setter(it.el, cur);
        });
      }, ease);
    }
    return { add, to, set: (map) => to(map, 0), get: (k) => items.get(k), state: (k) => items.get(k) && items.get(k).st };
  }
  function draw(api, path, dur) {
    const len = path.getTotalLength ? path.getTotalLength() : 0;
    if (!len) return Promise.resolve();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    return api.tween(api.reduced ? 0 : (dur == null ? 0.8 : dur), (p) => { path.style.strokeDashoffset = len * (1 - p); });
  }
  function undraw(path) { path.style.strokeDasharray = ''; path.style.strokeDashoffset = ''; }
  // words of a sentence -> token specs with keys prefix+index (punctuation stays attached to its word)
  function words(str, prefix, cls) { return String(str).split(/\s+/).filter(Boolean).map((w, n) => ({ k: (prefix || 'w') + n, t: w, c: cls || '' })); }

  // ------------------------------------------------------------------ drill (exam-style: find the error, pick the fix, then see why)
  // items: [{ w: 'sentence words', bad: [i..], fix: 'right words', opts: ['wrong choice', ...], clue: [i..], ct: 'clue label', why: 'html', blank?: true, tag?: 'tense name' }]
  // blank: the bad word is a gap like "____ (pass)" and is pre-selected; the student only picks the form.
  function drill(api, body, cfg) {
    css(api);
    const root = api.el('div', { class: 'ea' }, body);
    if (cfg.instr) api.el('p', { class: 'ea-cap', style: 'border:0;padding:0;min-height:0', html: cfg.instr }, root);
    const head = api.el('div', { class: 'ea-bar', style: 'font-size:14px;color:var(--text-dim)' }, root);
    const tk = tokens(api, root);
    const ask = api.el('p', { class: 'ea-cap', 'aria-live': 'polite' }, root);
    const opts = api.el('div', { class: 'ea-modes' }, root);
    const bar = api.el('div', { class: 'ea-bar' }, root);
    const bNext = api.button('Next sentence', () => { n++; start(); }, bar, { primary: true });
    api.button('New round', () => { order = shuffle(cfg.items); n = 0; right = 0; start(); }, bar);
    tk.el.style.cursor = 'pointer';
    let order = shuffle(cfg.items), n = 0, right = 0, phase = 0, miss = 0, it = null;
    function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
    const W = () => it.w.split(' ');
    function base(cls) { return W().map((w, i) => ({ k: 'd' + n + '-' + i, t: w, c: cls ? cls(i) : '' })); }
    function start() {
      opts.innerHTML = ''; bNext.hidden = true; miss = 0;
      if (n >= order.length) {
        tk.set([], { dur: 0 });
        head.innerHTML = `Round done · <b style="color:var(--white)">${right} of ${order.length}</b> right first time`;
        ask.innerHTML = right === order.length ? 'Every one right first time.' : 'Tap <b>New round</b> to go again in a new order.';
        return;
      }
      it = order[n];
      head.innerHTML = `Sentence <b style="color:var(--white)">${n + 1}</b> of ${order.length} · <b style="color:var(--white)">${right}</b> right first time`;
      tk.set([], { dur: 0 });
      if (it.blank) { phase = 1; tk.set(base((i) => (it.bad.includes(i) ? 'ring' : '')), { mark: false }); choose(); }
      else { phase = 0; tk.set(base(), { mark: false }); ask.innerHTML = cfg.ask || 'Tap the word that is wrong.'; }
    }
    function choose() {
      ask.innerHTML = it.blank ? 'Pick the right form for the gap.' : 'Right word. Now pick the correction.';
      opts.innerHTML = '';
      shuffle([it.fix].concat(it.opts)).forEach((o) => {
        const b = api.el('button', { type: 'button', class: 'vbtn', html: o }, opts);
        b.addEventListener('click', () => pick(o, b));
      });
    }
    function pick(o, b) {
      if (phase !== 1) return;
      if (o !== it.fix) { miss++; b.disabled = true; b.style.borderColor = 'var(--bad)'; ask.innerHTML = 'Not that one. ' + (it.hint || 'Look at the clue words again.'); return; }
      phase = 2;
      if (!miss) right++;
      opts.querySelectorAll('button').forEach((x) => { x.disabled = true; if (x === b) { x.style.borderColor = 'var(--good)'; x.style.color = 'var(--good)'; } });
      reveal();
    }
    async function reveal() {
      const pre = 'd' + n + '-', clue = it.clue || [];
      const toks = base((i) => (clue.includes(i) ? 'clue' : it.bad.includes(i) ? 'bad' : ''));
      if (clue.length) toks[clue[0]].tag = it.ct || 'clue';
      await tk.set(toks, { links: clue.length ? [{ from: pre + clue[0], to: pre + it.bad[0], c: 'bad' }] : [], mark: false });
      const out = [];
      let fk = null;
      W().forEach((w, i) => {
        if (it.bad.includes(i)) {
          if (i !== it.bad[0]) return;
          it.fix.split(' ').forEach((f, j) => { const k = pre + 'f' + j; if (!fk) fk = k; out.push({ k, t: f + (j === it.fix.split(' ').length - 1 ? (it.punct || '') : ''), c: 'good', tag: j === 0 ? it.tag || '' : '', tagc: 'good' }); });
          return;
        }
        out.push({ k: pre + i, t: w, c: clue.includes(i) ? 'clue' : '', tag: clue[0] === i ? it.ct || 'clue' : '' });
      });
      await tk.set(out, { links: clue.length ? [{ from: pre + clue[0], to: fk, c: 'good' }] : [] });
      ask.innerHTML = (miss ? '' : '<b style="color:var(--good)">Right first time.</b> ') + it.why;
      bNext.hidden = false;
      bNext.textContent = n + 1 < order.length ? 'Next sentence' : 'See score';
    }
    api.listen(tk.el, 'click', (e) => {
      if (phase !== 0) return;
      const s = e.target.closest('.ea-tok');
      if (!s) return;
      const i = +s.dataset.k.split('-')[1];
      if (it.bad.includes(i)) { phase = 1; tk.set(base((j) => (it.bad.includes(j) ? 'ring' : '')), { mark: false }); choose(); }
      else { miss++; s.classList.add('bad'); ask.innerHTML = miss > 1 ? 'Hint: ' + (it.hint || 'look at the verb.') : 'That word is fine. Try another.'; api.timeout(() => s.classList.remove('bad'), 700); }
    });
    start();
  }

  window.EA = { drill, css, player, tokens, svg, t, scene, draw, undraw, words, wait };
})();
