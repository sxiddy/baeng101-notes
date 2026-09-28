# BAENG101 Notes — content spec

Study notes for **BAENG101 Technical English Communication** (VIT), CAT-2 portion, built to look and work exactly
like the BACHY105 chemistry site (same engine). Modules follow the official syllabus (`src/syllabus.pdf`):

| Module | Title | Chunks | CAT-2 topics | Source (in `src/text/`) |
|---|---|---|---|---|
| `m3` (free) | Reading | A, B | Technical definitions; reading comprehension (drawing inferences) | `Technical Definitions.txt`, `Technical Definitions MCQ Worksheet.txt`, `Reading comprehension - Making Inferences.txt` |
| `m4` | Writing | C | Summary / précis writing; abstract writing | `Summarising.txt`, `Sample Abstracts.txt` |
| `m5` | Interpersonal Communication | D, E | Thomas-Kilmann conflict management + case study analysis; statement of purpose | `Conflict  Management.txt`, `Conflict management styles.txt`, `sop__*.txt` |

Slide pictures are in `src/media/` (look with the Read tool when a slide's text is empty). Textbook behind the
slides: Lannon & Gurak, *Technical Communication* (Pearson). Everything in the notes must come from the material;
where the slides are thin, add correct general knowledge and say so in a `.note heads-up` ("Not on the slides:").

**Copyright / VIT code of conduct:** never copy slide images, and never paste long passages from the slides or
samples. Write in your own words. A short quoted example (one or two sentences, e.g. a sample definition or a
passage that a question is about) is fine when credited in the text ("from the course slides").

---

## 1. Content files

One file per chunk: `content/chunk-<X>.js`. Plain JavaScript calling a global. **Backtick strings for all HTML**
(never a backtick or `${` inside the HTML).

```js
CHUNK({
  chunk: 'A',
  module: 'm3',
  topics: [
    {
      id: 'm3-sentence-def',           // unique, kebab-case, starts with the module id
      title: 'Sentence definitions',     // page title
      short: 'Sentence definitions',     // sidebar label, <= 24 chars
      blurb: 'One or two sentences: what the topic covers.',
      source: 'Technical Definitions slides 17–25',
      tabs: [ { title: 'What it is', html: `<p class="lead">…</p>…` } ],   // 3–8 tabs, one idea each
      flashcards: [ { front: 'The three parts of a sentence definition?', back: '<b>Term</b>, <b>class</b>, <b>distinguishing features</b>.' } ],
      oneLiners: [ 'A sentence definition = term + class + distinguishing features.' ],   // 5–8, for the summary page
      formulas: [ { name: 'Sentence definition pattern', html: `Term + class + distinguishing features`, note: 'e.g. …' } ]  // RULES to know by heart ("Rules & templates" sheet), 1–4
    }
  ],
  figures: [ { id: 'm3-term-class-features', caption: '…', alt: '…' } ]   // drawn by us: figs-svg/<id>.svg
});
```

`formulas` holds **rules** (the engine's field name is kept; the UI says "Rules & templates"). Answer layouts go in
the module summary's `templates` (§3).

### Tab HTML vocabulary

Only these tags: `p h3 h4 b em sub sup br ul ol li table thead tbody tr th td div span figure details summary small code`.

| Markup | Use |
|---|---|
| `<p class="lead">` | First paragraph of a tab: the idea in 1–2 plain sentences. At most one per tab. |
| `<b>` | **Must-remember** term or phrase. Rendered white; blanked in Recall mode. A noun phrase, never a whole sentence. About one per sentence or bullet. Never `<strong>`. |
| `<h3>` | Sub-heading inside a tab (sparingly). |
| `<table class="tbl">` | Comparisons (with `<thead>`). |
| `<div class="kv"><div><span>Label</span><b>Value</b></div>…</div>` | Fact grid. |
| `<div class="vs"><div class="side"><h4>…</h4>…</div><div class="side"><h4>…</h4>…</div></div>` | Two-up contrast, e.g. **wrong vs right**, weak vs strong paragraph. |
| `<ol class="steps"><li><b>Step</b> what you do</li>…</ol>` | A real sequence (how to write a summary, 9 conflict-management steps). |
| `<div class="chips"><span class="chip">…</span>…</div>` | Short example lists. |
| `<div class="note why">` | Why a rule works. |
| `<div class="note exam">` | How it's asked in CAT / how marks are given / what to write. |
| `<div class="note trap">` | The mistake most students make. |
| `<div class="note heads-up">` | Where the slides and standard usage differ, or "Not on the slides:" added knowledge. |
| `<div class="note example">` | A named example / case. |
| `<div class="worked"><div class="given">…</div><div class="solve">…</div><div class="result">…</div></div>` | Worked example for anything with a method: task → working → answer (write a definition, trim a paragraph, analyse a case, draft an SoP paragraph). |
| `<div class="mnemonic">` | A memory hook, only if genuinely useful. |
| `<details class="more"><summary>…</summary>…</details>` | Optional extra depth, collapsed. |
| `<figure data-fig="id"></figure>` | One of our SVG figures (§4). Each figure once. |
| `<div data-viz="id"></div>` | An interactive widget (§5). Each widget once in the whole site. |

Notes take `<p>` or plain text inside; the app adds the label. No inline styles, ids, other classes, links, images, emoji.

### Writing style (the owner explicitly does not want AI-sounding text)

Explain like the sharpest student in class explaining it to a friend the night before the CAT: plain words, short
sentences, concrete, a little warm. Lots of examples, especially **wrong → right** pairs.

- First tab of every topic: what it is in one or two plain sentences, and why it matters (CAT marks, the emails,
  reports and applications you'll actually write).
- Nothing from the source is dropped: every definition, list item, example, name, number, pro/con. Compress the
  wording, not the content. Merge repeated slides.
- Explain the *why* when the slides only give the *what*.
- Tables, `.vs`, `.steps`, `.chips`, `.worked` instead of walls of text. One tab = 1–3 minutes of reading, ≤ 650 words.
- Banned: "delve", "crucial", "pivotal", "vital role", "landscape", "realm", "harness", "leverage", "seamless",
  "robust", "unlock", "game-changer", "In summary", "In conclusion", "In essence", "It's worth noting", "It is
  important to note", "Let's dive", "Moreover", "Furthermore", "Additionally", "not only … but also", "isn't just …
  it's", "Imagine…" openers, rhetorical-question openers, em dashes (—), emoji, exclamation marks (except inside a
  quoted line of speech). Tab titles are plain nouns ("Term, class, features"). (When a banned word is the thing
  being taught, e.g. a sample SoP that says "In conclusion", quote it and let the validator warning stand.)
- Second person is fine. No filler.

---

## 2. Question files

`content/q-M<n>.js` (one per module; Module 5 has `q-M5.js` for conflict and `q-M5b.js` for SoP):

```js
QUESTIONS({
  questions: [
    {
      id: 'm3-a-01', module: 'm3', topic: 'm3-sentence-def',   // or 'summary' for cross-topic
      type: 'decide',        // decide | rewrite | spot | explain | design | interpret | analyse
      level: 2,              // 1 warm-up, 2 solid, 3 stretch
      q: `<p>Scenario…</p>`,
      options: ['…', '…', '…', '…'],   // 4 options, or null for open questions
      correct: 1,                      // index, or null
      answer: `<p><b>Verdict first.</b> one or two sentences</p>`,
      explain: `<p>The reasoning, tied to the notes.</p>`,
      points: ['what the examiner wants to see', '…']   // 2–6
    }
  ]
});
```

- Make students **use** the skill: "Your lab manual defines a *burette* as 'a thing used in titration'. What is
  missing?", "Which summary of this paragraph keeps to one-third and stays objective?", "Spot the self-referential
  phrase", "Which Thomas-Kilmann mode is Priya using, and is it the right one here?". Types: decide, rewrite,
  spot (spot the error), explain, design (write a short piece), interpret, analyse (case study).
- Never open with "Define / List / State / What is / Differentiate".
- **At least 5 MCQs per topic** (one clearly right option, plausible wrong ones built from real mistakes), plus
  2–3 open ones per topic with a model answer and examiner points. The quiz and the 1v1 battle need the MCQs.
- Open "design"/"rewrite" answers give a full model answer (e.g. a complete 100-word abstract).

## 3. Module summaries

`content/summary-m<n>.js`:

```js
SUMMARY({
  module: 'm3',
  tldr: `<p>…3–5 sentences…</p>`,
  storyline: [ { title: '…', html: `<p>…</p>` } ],            // how the module fits together, 3–6 steps
  bigIdeas: [ { title: '…', topic: 'm3-…', html: `<ul><li>…</li></ul>` } ],   // one per topic (4+)
  compare: [ { title: 'Parenthetical vs sentence vs expanded', html: `<table class="tbl">…</table>` } ],
  formulas: [],        // leave empty: the rules sheet collects each topic's formulas (rules)
  templates: [ { name: 'Sentence definition', note: 'when to use it', html: `<p>…labelled layout…</p>` } ],  // answer layouts to copy
  traps: [ `…one line per common mistake…` ],
  questions: [ /* 3–6 cross-topic questions, same format, topic: 'summary' */ ]
});
```

## 4. Figures (our own SVG drawings, never slide images)

`figs-svg/<figure id>.svg`, rules in `figs-svg/README.md` (600 wide, text ≥ 22, labels 24–26, headings 28, colours
only through the theme classes, transparent background, stack vertically, nothing overlaps). Caption: what the
figure shows. The app adds nothing, so end the caption with "Based on BAENG101 course material, VIT."

## 5. Interactive widgets

Registered with `VIZ.register(id, { title, kind, mount(body, api) })` (see `app/js/viz-core.js`) and built with the
tap-first helpers in `app/js/viz/ew-kit.js` (`EW.rounds`, `EW.sorter`, `EW.order`) or custom HTML using the `.ew-*`
classes in `app/css/app.css`. Free module (m3) widgets live in `app/js/viz/viz-m3*.js`; paid modules in
`viz-paid/viz-m4*.js` / `viz-m5*.js` (sent only to paid users). Each widget: a one-line instruction, feedback that
explains **why**, a Reset button, works by tapping at 375 px wide, both themes, no paid AI (rule-based or prepared
examples). `kind`: 'Interactive' | 'Practice' | 'Animation' | 'Tool'. Place each once in the tab that explains it.

## 6. Tooling

- `node tools/validate.js --all` — schema, allowed HTML, figure/viz references, style warnings. 0 errors, clear warnings.
- `node tools/build.js` then `node tools/qa.js` — headless smoke test of every route, tab and widget.
- `node --check <file.js>` for syntax.
