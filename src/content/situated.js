SG.books = SG.books || {};
SG.books.situated = {
  id: "situated", title: "Situated", subtitle: "Find the People and Places That Bring Out Your Best", author: "Angela Duckworth", publisher: "Simon & Schuster", year: 2026,
  match: /situated/i, signature: ["prologue.xhtml", "bm01.xhtml"], notesFiles: ["endnotes.xhtml"], sectioning: "h3",
  about: "", diagram: "book-map",
  chapters: [
    { id: "prologue", files: ["prologue.xhtml"], num: "Prologue", short: "P", title: "Prologue", partLabel: "", part: 0 },
    { id: "ch01", files: ["ch01.xhtml"], num: 1, title: "Beyond Grit", partLabel: "Part 1 · Situational Awareness", part: 1 },
    { id: "ch02", files: ["ch02.xhtml"], num: 2, title: "How Do We Change?", partLabel: "Part 1 · Situational Awareness", part: 1 },
    { id: "ch03", files: ["ch03.xhtml"], num: 3, title: "The Sweet Spot", partLabel: "Part 1 · Situational Awareness", part: 1 },
    { id: "ch04", files: ["ch04.xhtml"], num: 4, title: "The Courage to Change", partLabel: "Part 1 · Situational Awareness", part: 1 },
    { id: "ch05", files: ["ch05.xhtml"], num: 5, title: "Saving a Marriage from the Outside In", partLabel: "Part 1 · Situational Awareness", part: 1 },
    { id: "part2", files: ["part02_sub01.xhtml"], num: "Part 2", short: "II", title: "Introduction to Part 2", partLabel: "Part 2 · Situational Agency", part: 2 },
    { id: "ch06", files: ["ch06.xhtml"], num: 6, title: "Set Up Your Space", partLabel: "Part 2 · Situational Agency", part: 2 },
    { id: "ch07", files: ["ch07.xhtml"], num: 7, title: "Pick Your Peers", partLabel: "Part 2 · Situational Agency", part: 2 },
    { id: "ch08", files: ["ch08.xhtml"], num: 8, title: "Attract Mentors", partLabel: "Part 2 · Situational Agency", part: 2 },
    { id: "ch09", files: ["ch09.xhtml"], num: 9, title: "Choose Your Culture", partLabel: "Part 2 · Situational Agency", part: 2 },
    { id: "part3", files: ["part03_sub01.xhtml"], num: "Part 3", short: "III", title: "Introduction to Part 3", partLabel: "Part 3 · Situational Responsibility", part: 3 },
    { id: "ch10", files: ["ch10.xhtml"], num: 10, title: "Situational Parenting", partLabel: "Part 3 · Situational Responsibility", part: 3 },
    { id: "ch11", files: ["ch11.xhtml"], num: 11, title: "Situational Leadership", partLabel: "Part 3 · Situational Responsibility", part: 3 },
    { id: "ch12", files: ["ch12.xhtml"], num: 12, title: "Situational Citizenship", partLabel: "Part 3 · Situational Responsibility", part: 3 },
    { id: "ch13", files: ["ch13.xhtml"], num: 13, title: "From Grit to Great", partLabel: "Part 4 · Conclusion", part: 4 },
    { id: "epilogue", files: ["epilogue.xhtml"], num: "Epilogue", short: "E", title: "Epilogue", partLabel: "Part 4 · Conclusion", part: 4 },
    { id: "scorecard", files: ["bm01.xhtml"], num: "Tool", short: "★", title: "Situated Scorecard", partLabel: "Tools from the book", part: 5, interactive: "checklist" },
    { id: "blueprint", files: ["bm02.xhtml"], num: "Tool", short: "★", title: "Three Boxes Blueprint", partLabel: "Tools from the book", part: 5 },
    { id: "playbook", files: ["bm03.xhtml"], num: "Tool", short: "★", title: "Situation Change Playbook", partLabel: "Tools from the book", part: 5, splitOn: "h2" },
  ],
};
SG.fill = (bid, id, obj) => {
  const ch = SG.books[bid].chapters.find((c) => c.id === id);
  if (!ch) throw new Error("No chapter " + bid + "/" + id);
  Object.assign(ch, obj);
};
SG.books.situated.about = `*Situated* (2026) is Angela Duckworth's sequel and counterweight to *Grit*. Its claim: "grit is necessary but not sufficient." What we think and do is shaped, far more than we notice, by our **situation**: the objects within reach, the peers we keep, the mentors who teach and believe in us, and the culture of where we work and live.

The book builds a single model, the **Three Boxes** (situation → thoughts → response), and uses it three ways. **Situational awareness** (Part 1): see the water you swim in. **Situational agency** (Part 2): set up your space, pick your peers, attract mentors, choose your culture. **Situational responsibility** (Part 3): improve the situations of the people you parent, lead, and live among. It closes with the flywheel of "situation multiplication" and practical tools: the Situated Scorecard, the Three Boxes Blueprint, and the Situation Change Playbook.`;
