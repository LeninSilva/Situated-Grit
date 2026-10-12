# Situated × Grit — Book Club Companion

An interactive study app for Angela Duckworth's *Grit: The Power of Passion and Perseverance* (2016) and *Situated: Find the People and Places That Bring Out Your Best* (2026). You can read either book chapter by chapter and section by section, with guides, diagrams, defined terms, scholarly annotations, the books' own endnotes, colour highlighting, notes, and search.

## Open it

1. Open `index.html` in a browser. It is a single self-contained file, so you can double-click it or serve it with GitHub Pages.
2. On the **Load books** screen, choose your own EPUB copies of the two books. You can select both at once.
3. Done. The books are kept in your browser (IndexedDB), so you load them only once per device.

**Why you load the books yourself:** this repository is public and contains none of the books' text. Everything original lives here: the guides, the glossary, the diagrams, the annotations, and the questions. The verbatim text, endnotes, and figures are read from **your** EPUB, entirely inside your browser. Nothing is uploaded anywhere.

## What's inside

- **Before You Begin.** A generated introductory chapter that covers:
  - how the two books fit together;
  - the core vocabulary;
  - a history of the person–situation debate (Lewin → Mischel → Ross & Nisbett → Funder → today);
  - how to weigh the evidence (effect sizes, replication, reference bias);
  - the critics (Credé and colleagues’ meta-analysis, the replication debates);
  - who else is in the conversation;
  - a reading plan for the club.
- **Every chapter and section.** Each chapter has four tabs:
  - **Guide**: the argument in brief, the author's voice in her own key lines (each with its page number and a *Show in text* link), a section-by-section guide, where the idea comes from, the evidence, the live debates, people to know, why it matters, and diagrams.
  - **Read**: the full verbatim text, split into navigable sections, with a guide card and a notes box at each section.
  - **Sources**: every endnote and footnote for the chapter, searchable.
  - **Discuss**: comprehension, critical (graduate and PhD level), personal, and book-club questions, each with a space for your answer.
- **Clickable terms.** About 120 technical terms are underlined in the text. Tap one to open a drawer with:
  - a plain definition;
  - a deeper explanation;
  - its intellectual origin;
  - the current debate;
  - related terms and where it appears in each book.
- **✦ Scholar's notes.** Graduate-level annotations pinned to exact passages.
- **31 original diagrams.** These illustrate each book's arguments. Tap **Enlarge** to see one full size.
- **Highlighting.** Select any passage and choose one of five colours. Each colour has a label you can rename (Key claim, Evidence, Question, Connection, Apply to my life). You can add a note to any highlight.
- **Endnotes in place.** Tap a superscript number to read the citation without losing your place.
- **Interactive exercises.**
  - *Grit* ch. 4: the Grit Scale, scored automatically against the book's percentile table.
  - *Situated*: the Situational Awareness Scorecard as a checklist.
- **Search.** Press `/` or `Ctrl/⌘ K` to search across both books' text, endnotes, guides, glossary, annotations, questions, and your own notes. Use the filter chips and the arrow keys and Enter.
- **Notebook.** All your highlights, notes, and answers in one place, filterable by book, colour, and type. You can export them as Markdown or make a JSON backup and restore it, for example to move to another device.
- **Light and dark themes.** Adjustable text size, toggles for guides, terms, notes, and page numbers, and a layout that works on mobile.

Your notes and highlights are stored in your browser's local storage. Use **Notebook → Backup** to keep a copy.

## Develop

```
src/styles.css         design
src/js/*.js            app shell, EPUB parser, reader, diagrams, markup
src/content/*.js       intro, glossary, per-chapter guides (original commentary)
tools/build.py         bundles everything → index.html (standalone) and dist/companion.html
tools/validate.mjs     checks every term/diagram reference resolves
tools/smoke.mjs        loads both EPUBs in headless Chromium, walks every chapter
tools/interact.mjs     clicks through the UI: highlight, notes, scale, search, notebook, backup, reload, mobile
```

```
python3 tools/build.py
node tools/validate.mjs
node tools/smoke.mjs    path/to/situated.epub path/to/grit.epub
node tools/interact.mjs path/to/situated.epub path/to/grit.epub
```

The smoke and interaction tests need Playwright with Chromium.

JSZip 3.10.1 (MIT) is vendored in `src/vendor/` and inlined into `index.html`, so the app works offline.
