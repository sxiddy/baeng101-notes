# Diagrams

One file per figure: `figs-svg/<figure id>.svg`, our own drawing (never a copy of a slide image). The figure list,
captions and alt text live in `content/chunk-*.js`. `tools/build.js` copies every file here to `protected/img/` and the app
inlines each SVG so it follows dark and light mode.

## Rules for every file

- `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 H">`: always 600 wide (phone-first; H as needed). No width/height attributes, no
  background rectangle (transparent), no scripts, no `<style>`, no fixed colours for text or lines.
- Colours only through these classes (defined in `app/css/app.css`, they flip for light mode):
  - text: `dt` main, `dt2` secondary, `dt3` dim; accents `dtb` blue, `dto` orange, `dtr` red, `dtp` purple, `dtg` green, `dty` gold
  - strokes: `ds` main, `ds2` dim, `ds3` faint; accents `dsb dso dsr dsp dsg dsy` (stroke-only shapes also need `fill="none"`)
  - fills: `df` `df2` `df3` surfaces (light to darker), `dfw` main colour, `dfd` dim; accents `dfb dfo dfr dfp dfg dfy`
    (use `fill-opacity` for tints, e.g. an electrolyte `class="dfb" fill-opacity=".22"`)
- Fonts are set by the page. Use `class="mono"` on text that should be monospace (cell notation, equations).
- Sizes: a figure is only ~315 px wide on a phone, so the text must be at least as big as on the slides there
  (12–14 px). In the 600-wide viewBox: smallest text 22, labels 24–26, headings 28. That is about 40 characters
  per line at most. Stack multi-panel figures vertically instead of squeezing them side by side; move long
  labels into a legend; fewer, larger labels beat a crowded copy of the slide. Nothing may overlap.
- Check every batch at real phone size before committing: the phone preview (each figure in a 375 px wide
  "phone", 2x pixel density, slide picture beside the redraw, dark and light) must show text at least as large
  as the slide picture's.
- Arrowhead markers: draw the head pointing right (`M0 0 10 5 0 10z`) with `orient="auto"` (or
  `auto-start-reverse` for double-headed arrows).
- Arrowheads: one `<marker>` per colour in `<defs>`, ids short (the app prefixes them per figure).
- Draw the information, not a tracing: same labels, arrows, axes, values. Fix clear scientific mistakes.
  Photos become simple labelled schematics; text tables become SVG tables.
- Subscripts/superscripts: use Unicode (H₂O, Zn²⁺, e⁻) or `<tspan dy>`; don't rely on fonts for combining marks.

## Tools

- `node tools/figs/phone-preview.js <repo folder> <out.html> <id> <id> ...` puts each figure in a 375 px wide "phone", dark and
  light mode side by side. Screenshot it with headless Chrome:
  `"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --allow-file-access-from-files --window-size=800,<height>
  --force-device-scale-factor=1 --screenshot=<png> file:///<out.html>` and look at the PNG with the Read tool.
