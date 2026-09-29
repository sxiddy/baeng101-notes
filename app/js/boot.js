/* Collects the content files (they call these globals) before app.js runs. */
window.DATA = { chunks: [], questions: [], summaries: {}, figs: {} };
window.CHUNK = function (d) { window.DATA.chunks.push(d); };
window.QUESTIONS = function (d) {
  (d.questions || []).forEach(function (q) { q.chunk = d.chunk; window.DATA.questions.push(q); });
};
window.SUMMARY = function (d) { window.DATA.summaries[d.module] = d; };
window.FIGDIMS = function (d) { Object.assign(window.DATA.figs, d); };
window.FIGSVG = function (d) { window.DATA.figsvg = Object.assign(window.DATA.figsvg || {}, d); };
// CAT-2 question papers: papers-free.js (actual papers, the index of every model paper, which topics were asked)
// for everyone signed in; papers-paid.js (the other model papers) after payment.
window.PAPERS = function (d) {
  window.DATA.papers = (window.DATA.papers || []).concat(d.papers || []);
  if (d.index) window.DATA.paperIndex = d.index;
  if (d.asked) window.DATA.asked = d.asked;
};
