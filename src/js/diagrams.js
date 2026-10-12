/* Diagram kit: theme-aware inline SVG built from tokens (classes defined in styles.css). */
(function (SG) {
  "use strict";
  let mk = 0;
  const E = (s) => SG.esc(s);

  function lines(x, y, txt, cls, lh, anchor) {
    const arr = String(txt).split("|");
    const a = anchor || "middle";
    const y0 = y - ((arr.length - 1) * lh) / 2;
    return arr.map((t, i) => '<text x="' + x + '" y="' + (y0 + i * lh) + '" class="' + cls + '" text-anchor="' + a + '" dominant-baseline="middle">' + E(t) + "</text>").join("");
  }
  function box(x, y, w, h, title, sub, cls, opt) {
    const o = opt || {};
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (o.r == null ? 10 : o.r) + '" class="' + (cls || "d-box") + '"/>';
    if (title && sub) {
      s += lines(x + w / 2, y + h / 2 - (o.gap || 12), title, o.tcls || "d-t", 18);
      s += lines(x + w / 2, y + h / 2 + (o.gap || 14) + (String(title).split("|").length - 1) * 6, sub, o.scls || "d-t2", 16);
    } else if (title) s += lines(x + w / 2, y + h / 2, title, o.tcls || "d-t", 18);
    return s;
  }
  function arrow(id, x1, y1, x2, y2, cls) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="' + (cls || "d-line") + '" marker-end="url(#' + id + (cls === "d-line-c" ? "c" : "") + ')"/>';
  }
  function curve(id, d, cls) { return '<path d="' + d + '" class="' + (cls || "d-line") + '" marker-end="url(#' + id + (cls === "d-line-c" ? "c" : "") + ')"/>'; }
  function svg(w, h, body, label) {
    const id = "m" + (++mk);
    const defs = '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="d-ink" style="fill:var(--ink-2)"/></marker>' +
      '<marker id="' + id + 'c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--coral)"/></marker></defs>';
    return '<svg viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="' + E(label || "") + '" xmlns="http://www.w3.org/2000/svg">' + defs + body(id) + "</svg>";
  }
  function quad(o) {
    // 2x2 matrix: o.x (left,right labels) o.y (bottom,top) o.cells [tl,tr,bl,br] {t,s,hot}
    return svg(760, 470, () => {
      let s = "";
      const X = 140, Y = 30, W = 560, H = 360;
      const cw = W / 2, chh = H / 2;
      const pos = [[X, Y], [X + cw, Y], [X, Y + chh], [X + cw, Y + chh]];
      o.cells.forEach((c, i) => {
        s += box(pos[i][0] + 6, pos[i][1] + 6, cw - 12, chh - 12, c.t, c.s, c.hot ? "d-hot" : "d-box2", { tcls: c.hot ? "d-bigc" : "d-big", gap: 18 });
      });
      s += '<line x1="' + X + '" y1="' + (Y + H + 8) + '" x2="' + (X + W) + '" y2="' + (Y + H + 8) + '" class="d-line"/>';
      s += '<line x1="' + (X - 8) + '" y1="' + Y + '" x2="' + (X - 8) + '" y2="' + (Y + H) + '" class="d-line"/>';
      s += lines(X + cw / 2, Y + H + 30, o.x[0], "d-t3", 14) + lines(X + cw * 1.5, Y + H + 30, o.x[1], "d-t3", 14);
      s += lines(X + W / 2, Y + H + 56, o.xLabel, "d-t", 16);
      s += lines(X - 26, Y + chh * 1.5, o.y[0], "d-t3", 14, "end") + lines(X - 26, Y + chh / 2, o.y[1], "d-t3", 14, "end");
      s += '<text x="22" y="' + (Y + H / 2) + '" class="d-t" text-anchor="middle" transform="rotate(-90 22 ' + (Y + H / 2) + ')">' + E(o.yLabel) + "</text>";
      return s;
    }, o.label);
  }

  const D = {};

  D["three-boxes"] = {
    title: "The Three Boxes model",
    caption: "Adapted from James Gross's process model of emotion regulation (Gross, 1998), generalized by Duckworth & Gross to all behavior change. The earlier in the sequence you intervene, the less effort the change costs. Willpower acts only at Box Three, after the situation has already produced the thought and the urge.",
    svg: () => svg(820, 330, (id) => {
      let s = "";
      s += box(20, 60, 220, 120, "BOX ONE|Situation", "objective: places,|people, objects, norms", "d-hot", { tcls: "d-t", gap: 22 });
      s += box(300, 60, 220, 120, "BOX TWO|Thoughts", "subjective: what you|notice and how you read it", "d-box", { gap: 22 });
      s += box(580, 60, 220, 120, "BOX THREE|Response", "feelings, urges,|actions, effort", "d-box", { gap: 22 });
      s += arrow(id, 244, 120, 294, 120) + arrow(id, 524, 120, 574, 120);
      s += '<line x1="40" y1="230" x2="780" y2="230" class="d-faint"/>';
      s += lines(130, 215, "Change the situation", "d-t", 16) + lines(410, 215, "Change your thinking", "d-t", 16) + lines(690, 215, "Use willpower", "d-t", 16);
      s += lines(130, 255, "set up space · pick peers ·|attract mentors · choose culture", "d-t2", 16) + lines(410, 255, "redirect attention ·|reframe (reappraisal)", "d-t2", 16) + lines(690, 255, "suppress, resist,|“just do it”", "d-t2", 16);
      s += curve(id, "M 690 300 C 520 318, 300 318, 140 300", "d-line-c");
      s += lines(415, 300, "EARLIER = EASIER, MORE DURABLE", "d-t3", 14);
      s += lines(410, 28, "Situation → Thoughts → Response", "d-t3", 14);
      return s;
    }, "Three boxes: situation leads to thoughts leads to response"),
  };

  D["four-thoughts"] = {
    title: "Four thoughts that fuel effort, and where they come from",
    caption: "Duckworth's synthesis of Grit (interest, purpose, hope, practice) with Situated: each motivating thought is more likely in a particular kind of situation. The arrow from situation to thought is the book's central causal claim.",
    svg: () => svg(820, 360, (id) => {
      let s = "";
      const rows = [["Distraction-free space", "“This is interesting!”", "d-y"], ["Like-minded peers", "“This is important!”", "d-o"], ["A mentor with high standards|and belief in you", "“I can do this!”", "d-p"], ["A culture of excellence", "“I know what to try next!”", "d-s"]];
      rows.forEach((r, i) => {
        const y = 20 + i * 80;
        s += box(20, y, 250, 62, r[0], null, "d-box2", { tcls: "d-t" });
        s += '<rect x="330" y="' + y + '" width="270" height="62" rx="31" class="' + r[2] + '" />';
        s += lines(465, y + 31, r[1], "d-t", 18);
        s += arrow(id, 274, y + 31, 324, y + 31);
        s += arrow(id, 604, y + 31, 664, 180);
      });
      s += box(668, 130, 132, 100, "EFFORT", "sustained,|less forced", "d-hot", { tcls: "d-bigc", gap: 16 });
      s += lines(145, 345, "BOX ONE", "d-t3", 14) + lines(465, 345, "BOX TWO", "d-t3", 14) + lines(734, 250, "BOX THREE", "d-t3", 14);
      return s;
    }, "Situations produce four motivating thoughts that produce effort"),
  };

  D["sweet-spot"] = {
    title: "Finding your sweet spot: challenge × support",
    caption: "The book's own figure in Chapter 3 maps the same grid. The vocabulary converges with older work: Baumrind's authoritative parenting (demanding + responsive), Kim Scott's Radical Candor (challenge directly + care personally), and Maslach's account of burnout as a person–job mismatch.",
    svg: () => quad({
      label: "Two by two of challenge and support",
      xLabel: "SUPPORT →", yLabel: "CHALLENGE →", x: ["Low", "High"], y: ["Low", "High"],
      cells: [{ t: "BURNOUT", s: "challenge without support" }, { t: "SWEET SPOT", s: "high standards + high support", hot: true }, { t: "APATHY", s: "neither asked nor helped" }, { t: "COMPLACENCY", s: "support without challenge" }],
    }),
  };

  D["serenity-grid"] = {
    title: "The annotated Serenity Prayer",
    caption: "Duckworth's extension of 'control the controllables': control is not only a property of your mind. Some features of the situation are controllable (what is on your counter, whom you sit next to), and some features of you are not (genes, history). The book's own figure in Chapter 4 makes the same cut.",
    svg: () => quad({
      label: "Two by two of controllable and uncontrollable, person and situation",
      xLabel: "CAN YOU CHANGE IT?", yLabel: "WHERE IT LIVES", x: ["Uncontrollable", "Controllable"], y: ["Situation", "Person"],
      cells: [{ t: "ACCEPT", s: "genes · temperament · your past" }, { t: "CHANGE", s: "mindset · goals · interpretations" }, { t: "ACCEPT", s: "parents · birthplace · junk food everywhere" }, { t: "CHANGE TOO", s: "what's within reach · company you keep", hot: true }],
    }),
  };

  D["range"] = {
    title: "Personality has range (density distributions)",
    caption: "Illustrative, not data. William Fleeson's experience-sampling studies show that the spread of one person's moment-to-moment behavior is usually wider than the gap between two people's averages. Traits describe the center of a distribution; situations move you around inside it.",
    svg: () => svg(820, 300, () => {
      let s = '<line x1="40" y1="240" x2="780" y2="240" class="d-line"/>';
      const bell = (mu, sd, cls, lab) => {
        let d = "";
        for (let x = 40; x <= 780; x += 6) { const z = (x - mu) / sd; const y = 240 - 170 * Math.exp(-0.5 * z * z); d += (x === 40 ? "M" : "L") + x + "," + y.toFixed(1); }
        return '<path d="' + d + '" class="' + cls + '" style="fill:none;stroke-width:3"/>' + lines(mu, 50, lab, "d-t", 16);
      };
      s += bell(340, 95, "d-line", "Person A") + bell(470, 95, "d-line-c", "Person B");
      s += '<line x1="340" y1="65" x2="340" y2="240" class="d-faint"/><line x1="470" y1="65" x2="470" y2="240" class="d-faint"/>';
      s += lines(405, 262, "difference in averages (the trait)", "d-t2", 14);
      s += lines(140, 262, "← less extraverted, gritty, cheerful…", "d-t3", 14) + lines(680, 262, "more →", "d-t3", 14);
      s += lines(405, 285, "Each curve: one person's behavior across many everyday situations", "d-t2", 14);
      return s;
    }, "Two overlapping bell curves for two people"),
  };

  D["portrait-mode"] = {
    title: "Why we miss the situation: portrait mode",
    caption: "The fundamental attribution error (Ross, 1977): observers over-weight dispositions and under-weight situational constraints. Duckworth links it to figure–ground perception: attention sharpens the person and blurs the background. Gilbert & Malone (1995) list four mechanisms: situations are invisible, expectations are unrealistic, behaviors are inflated, and corrections are incomplete.",
    svg: () => svg(820, 300, () => {
      let s = '<rect x="20" y="20" width="380" height="250" rx="14" class="d-box2"/>';
      for (let i = 0; i < 14; i++) s += '<circle cx="' + (40 + (i * 53) % 350) + '" cy="' + (40 + (i * 37) % 220) + '" r="' + (14 + (i % 4) * 5) + '" class="d-faint" style="stroke:var(--ink-3);stroke-dasharray:3 4"/>';
      s += '<circle cx="210" cy="115" r="34" class="d-hot"/><rect x="160" y="155" width="100" height="95" rx="40" class="d-hot"/>';
      s += lines(210, 288, "What we see: the person, sharp", "d-t2", 14);
      s += '<rect x="420" y="20" width="380" height="250" rx="14" class="d-box"/>';
      const labels = [["Coach", 470, 60], ["Teammates", 740, 70], ["Pool", 480, 230], ["Culture", 740, 230], ["Receivers", 610, 40], ["Mentor", 450, 150]];
      labels.forEach((l) => { s += '<rect x="' + (l[1] - 46) + '" y="' + (l[2] - 15) + '" width="92" height="30" rx="15" class="d-box2"/>' + lines(l[1], l[2], l[0], "d-t2", 14); });
      s += '<circle cx="610" cy="125" r="26" class="d-hot"/><rect x="572" y="155" width="76" height="70" rx="30" class="d-hot"/>';
      s += lines(610, 288, "What is there: the person in a situation", "d-t2", 14);
      return s;
    }, "Portrait mode versus wide angle"),
  };

  D["three-acts"] = {
    title: "Duckworth's life in three acts",
    caption: "The memoir structure of Chapter 5. The point is not that effort failed, but that effort was being spent at Box Three in a situation that made sustained effort impossible.",
    svg: () => svg(820, 210, () => {
      let s = "";
      s += '<rect x="20" y="60" width="470" height="60" rx="8" class="d-box2"/>' + lines(255, 90, "ACT I · Just Try Harder · ~40 years", "d-t", 16);
      s += '<rect x="494" y="60" width="70" height="60" rx="8" class="d-hot"/>' + lines(529, 90, "ACT II", "d-t", 14);
      s += '<rect x="568" y="60" width="232" height="60" rx="8" class="d-box"/>' + lines(684, 90, "ACT III · Get Situated", "d-t", 16);
      s += lines(529, 140, "Burnout|1–2 years", "d-t2", 16);
      s += lines(255, 150, "willpower, grades, Harvard, MacArthur", "d-t2", 14);
      s += lines(684, 150, "therapists · advisory board · EO peers|James Gross · team science · move to Center City", "d-t2", 16);
      s += lines(410, 30, "2007–08 housing crash + tenure clock = the situation that broke the strategy", "d-t3", 14);
      return s;
    }, "Timeline of three acts"),
  };

  D["agency-rings"] = {
    title: "Situational agency, near to far",
    caption: "Part 2's sequence: start with what is within arm's reach and can change today, move outward to what may take months. The same four elements reappear in parenting (Ch. 10), leadership (Ch. 11), and the Situated Scorecard.",
    svg: () => svg(820, 400, () => {
      let s = "";
      const cx = 290, cy = 200;
      [[180, "d-box2", "CULTURE", "where you live & work · ~5 miles"], [135, "d-box2", "MENTORS", "teach · believe · open doors"], [90, "d-box2", "PEERS", "accountability · learning · solidarity"], [45, "d-hot", "SPACE", "~3 ft: within sight & reach"]].forEach((r, i) => {
        s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r[0] + '" class="' + r[1] + '"/>';
        s += lines(cx, cy - r[0] + (i === 3 ? 45 : 22), r[2], i === 3 ? "d-t" : "d-t3", 14);
      });
      const notes = [["Ch. 6 Set up your space", "obvious · easy · rewarding"], ["Ch. 7 Pick your peers", "go far, go together"], ["Ch. 8 Attract mentors", "reason · season · life"], ["Ch. 9 Choose your culture", "overcome status quo bias"]];
      notes.forEach((n, i) => { s += box(520, 40 + i * 84, 280, 66, n[0], n[1], i === 0 ? "d-hot" : "d-box", { gap: 12 }); });
      s += '<text x="520" y="380" class="d-t3">NEAR / FAST / CONCRETE → FAR / SLOW / ABSTRACT</text>';
      return s;
    }, "Concentric rings of space, peers, mentors, culture"),
  };

  D["habit-loop"] = {
    title: "Setting up your space: make it obvious, easy, rewarding",
    caption: "Behavioral-economics design levers (Thaler & Sunstein's choice architecture; the same triad appears in the habit literature of Wood, Neal, and others). Repetition builds a habit only when it happens in the same situation, because a habit is a cue–response link, not a quantity of practice.",
    svg: () => svg(820, 300, (id) => {
      let s = "";
      s += box(20, 40, 200, 100, "OBVIOUS", "a cue you can't miss|(checklist, Post-it)", "d-y", { tcls: "d-big", gap: 18 });
      s += box(250, 40, 200, 100, "EASY", "friction down for goals,|friction up for temptations", "d-o", { tcls: "d-big", gap: 18 });
      s += box(480, 40, 200, 100, "REWARDING", "immediate payoff|(temptation bundling)", "d-p", { tcls: "d-big", gap: 18 });
      s += arrow(id, 222, 90, 246, 90) + arrow(id, 452, 90, 476, 90);
      s += curve(id, "M 690 110 C 770 180, 600 250, 360 250 C 160 250, 60 200, 100 150", "d-line-c");
      s += lines(410, 275, "same cue, same response, again and again → habit (Box One triggers Box Three, skipping Box Two)", "d-t2", 14);
      s += box(700, 50, 104, 80, "AUTO-|PILOT", null, "d-hot", { tcls: "d-t" });
      return s;
    }, "Obvious, easy, rewarding leads to habit"),
  };

  D["empathy-gap"] = {
    title: "The hot–cold empathy gap and binding yourself to the mast",
    caption: "Loewenstein's hot–cold empathy gap; Schelling's 'intimate contest for self-command'; Thaler & Shefrin's Planner–Doer model. The planning self cannot feel the doing self's cravings, so it should act on the situation while it still can.",
    svg: () => svg(820, 280, (id) => {
      let s = "";
      s += box(20, 60, 230, 130, "COLD SELF (now)", "Night Guy's opposite: the|Planner, Morning-Guy's ally|reflective, far-sighted", "d-s", { tcls: "d-t", gap: 30 });
      s += box(570, 60, 230, 130, "HOT SELF (later)", "the Doer, Night Guy|tempted, tired, distracted", "d-p", { tcls: "d-t", gap: 24 });
      s += '<path d="M 270 125 L 550 125" class="d-faint" style="stroke-dasharray:6 6;stroke:var(--ink-3)"/>';
      s += lines(410, 105, "can't feel what the other will feel", "d-t2", 14);
      s += box(320, 160, 180, 80, "COMMITMENT", "change Box One now:|bind yourself to the mast", "d-hot", { tcls: "d-t", gap: 16 });
      s += arrow(id, 250, 175, 316, 195, "d-line-c") + arrow(id, 504, 200, 566, 170, "d-line-c");
      s += lines(410, 30, "Intention–action gap ≈ empathy gap between selves", "d-t3", 14);
      return s;
    }, "Cold self commits to constrain hot self"),
  };

  D["distance"] = {
    title: "Physical distance creates psychological distance",
    caption: "Conceptual summary (no data plotted). Moving a temptation away makes it less obvious, less easy, and its reward more delayed, all at once. The book's own bar chart in Chapter 6 shows the phone-position result.",
    svg: () => svg(820, 250, () => {
      let s = '<line x1="40" y1="180" x2="780" y2="180" class="d-line"/>';
      const st = ["in hand, sound on", "on desk, face up", "on desk, face down", "in a bag", "another room"];
      st.forEach((t, i) => {
        const x = 90 + i * 160;
        s += '<circle cx="' + x + '" cy="180" r="' + (26 - i * 4) + '" class="' + (i === 0 ? "d-hot" : "d-box2") + '"/>';
        s += lines(x, 220, t, "d-t2", 14);
      });
      s += lines(410, 60, "→ less obvious · less easy · reward further away →", "d-t", 16);
      s += lines(410, 100, "temptation's pull weakens; attention for the goal strengthens", "d-t2", 14);
      s += lines(90, 140, "STRONG PULL", "d-t3", 14) + lines(730, 140, "WEAK PULL", "d-t3", 14);
      return s;
    }, "Five phone positions from near to far"),
  };

  D["peer-triad"] = {
    title: "Why peers matter: three mechanisms",
    caption: "Duckworth's three-part account maps onto established literatures: accountability (public commitment, social-pressure field experiments), learning (Henrich's collective brain, cultural evolution), and solidarity (AA's social-network mechanism, belonging).",
    svg: () => svg(820, 340, () => {
      let s = "";
      s += box(300, 120, 220, 100, "“I” → “WE”", "peer solidarity puts|you in your place", "d-hot", { tcls: "d-bigc", gap: 16 });
      s += box(20, 20, 250, 90, "ACCOUNTABILITY", "Commitment Cards · public,|face-to-face, reciprocal", "d-y", { tcls: "d-t", gap: 16 });
      s += box(550, 20, 250, 90, "LEARNING", "Y Combinator batches · havruta ·|superforecaster teams", "d-s", { tcls: "d-t", gap: 16 });
      s += box(285, 240, 250, 90, "SOLIDARITY", "Alcoholics Anonymous ·|“to keep it, give it away”", "d-m", { tcls: "d-t", gap: 16 });
      s += '<line x1="270" y1="80" x2="320" y2="125" class="d-line"/><line x1="550" y1="80" x2="500" y2="125" class="d-line"/><line x1="410" y1="220" x2="410" y2="240" class="d-line"/>';
      return s;
    }, "Triad of peer mechanisms"),
  };

  D["mentors"] = {
    title: "What mentors do, and the three kinds you collect",
    caption: "Functions (top) follow Kram's (1983) classic split between career functions (teaching, sponsorship) and psychosocial functions (belief, role modeling). Durations (bottom) are Duckworth's: reason, season, life.",
    svg: () => svg(820, 330, () => {
      let s = "";
      [["TEACH", "deliberate practice needs|a teacher (Ericsson)", "d-y"], ["BELIEVE", "borrowed confidence|(Pygmalion, ‘surrogate grit’)", "d-p"], ["OPEN DOORS", "sponsorship, weak ties,|circle jumping", "d-s"]].forEach((f, i) => { s += box(20 + i * 270, 20, 250, 110, f[0], f[1], f[2], { tcls: "d-big", gap: 22 }); });
      s += '<line x1="40" y1="250" x2="790" y2="250" class="d-line"/>';
      s += '<rect x="60" y="232" width="40" height="36" rx="6" class="d-hot"/>' + lines(80, 290, "REASON", "d-t3", 14) + lines(80, 310, "one conversation", "d-t2", 14);
      s += '<rect x="240" y="232" width="230" height="36" rx="6" class="d-box2"/>' + lines(355, 290, "SEASON", "d-t3", 14) + lines(355, 310, "a project, a class, an internship", "d-t2", 14);
      s += '<rect x="500" y="232" width="290" height="36" rx="6" class="d-box"/>' + lines(645, 290, "LIFE", "d-t3", 14) + lines(645, 310, "surrogate parent · gratitude letter", "d-t2", 14);
      s += lines(410, 205, "HOW LONG THEY STAY →", "d-t3", 14);
      return s;
    }, "Mentor functions and durations"),
  };

  D["weak-ties"] = {
    title: "The strength of weak ties",
    caption: "Granovetter (1973): close friends know what you know; acquaintances bridge to other clusters and carry new information. Rajkumar et al. (2022) confirmed it causally on LinkedIn, with an inverted-U: moderately weak ties helped most. Mentors are well-placed bridges.",
    svg: () => svg(820, 320, () => {
      let s = "";
      const cl = (cx, cy, cls) => { let t = ""; const pts = [[0, -40], [38, -12], [24, 34], [-24, 34], [-38, -12]]; pts.forEach((p, i) => pts.forEach((q, j) => { if (j > i) t += '<line x1="' + (cx + p[0]) + '" y1="' + (cy + p[1]) + '" x2="' + (cx + q[0]) + '" y2="' + (cy + q[1]) + '" class="d-line" style="stroke-width:2.5"/>'; })); pts.forEach((p) => { t += '<circle cx="' + (cx + p[0]) + '" cy="' + (cy + p[1]) + '" r="9" class="' + cls + '"/>'; }); return t; };
      s += cl(150, 160, "d-box2") + cl(670, 90, "d-box2") + cl(640, 250, "d-box2");
      s += '<circle cx="150" cy="160" r="16" class="d-hot"/>' + lines(150, 222, "YOU + strong ties", "d-t3", 14);
      s += '<path d="M 188 148 C 330 80, 480 70, 632 82" class="d-line-c" style="stroke-dasharray:8 6"/>';
      s += '<path d="M 174 194 C 330 280, 480 270, 602 262" class="d-line-c" style="stroke-dasharray:8 6"/>';
      s += lines(410, 70, "weak tie (acquaintance, mentor's contact)", "d-t2", 14) + lines(410, 296, "weak tie → new job, new idea", "d-t2", 14);
      s += lines(670, 30, "other circle", "d-t3", 14);
      return s;
    }, "Clusters connected by weak ties"),
  };

  D["culture-onion"] = {
    title: "What a culture is made of",
    caption: "Duckworth's six ingredients, from the visible to the invisible. Edgar Schein's organizational-culture model makes a similar cut: artifacts, espoused values, basic assumptions. 'The way we do things around here' is Marvin Bower's phrase, popularized by Deal & Kennedy (1982).",
    svg: () => svg(820, 330, () => {
      let s = "";
      const lay = [["ARTIFACTS", "dress, tools, colors"], ["LANGUAGE", "how we talk"], ["RITUALS", "traditions, routines"], ["NORMS", "what most people do"], ["VALUES", "what we hold important"], ["IDENTITY", "who we think we are"]];
      lay.forEach((l, i) => {
        const w = 760 - i * 110, x = 30 + i * 55, y = 20 + i * 46;
        s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (300 - i * 46) + '" rx="16" class="' + (i === 5 ? "d-hot" : "d-box2") + '"/>';
        s += '<text x="' + (x + 16) + '" y="' + (y + 26) + '" class="d-t3">' + l[0] + '</text><text x="' + (x + w - 16) + '" y="' + (y + 26) + '" class="d-t2" text-anchor="end">' + l[1] + "</text>";
      });
      s += lines(410, 300, "VISIBLE → INVISIBLE", "d-t3", 14);
      return s;
    }, "Nested layers of culture"),
  };

  D["status-quo"] = {
    title: "Status quo bias, tested with a coin",
    caption: "Levitt (2021): about 20,000 people facing hard decisions let a coin suggest 'change' or 'keep the status quo'. Heads made change more likely, and six months later those who changed (especially on quitting a job or ending a relationship) reported being happier. Read with care: participants were self-selected, outcomes were mostly self-reported, and follow-up attrition was substantial.",
    svg: () => svg(820, 260, (id) => {
      let s = "";
      s += '<circle cx="110" cy="130" r="70" class="d-hot"/>' + lines(110, 130, "COIN|FLIP", "d-bigc", 26);
      s += box(300, 30, 230, 80, "HEADS → change", "quit, move, propose", "d-box", { gap: 14 });
      s += box(300, 150, 230, 80, "TAILS → stay", "status quo", "d-box2", { gap: 14 });
      s += arrow(id, 182, 110, 296, 72) + arrow(id, 182, 150, 296, 188);
      s += box(580, 30, 220, 80, "happier at 6 mo.", "esp. big decisions", "d-m", { gap: 14 });
      s += box(580, 150, 220, 80, "no happier", "on average", "d-box2", { gap: 14 });
      s += arrow(id, 534, 70, 576, 70) + arrow(id, 534, 190, 576, 190);
      return s;
    }, "Coin flip experiment"),
  };

  D["parenting-shift"] = {
    title: "Situational parenting across childhood",
    caption: "As children grow, parents' direct influence gives way to peers and non-parental mentors (Steinberg & Morris, 2001). Parents keep leverage by choosing the settings where those peers and mentors are found: home, school, neighborhood. Chetty's mobility research says those settings are hyperlocal.",
    svg: () => svg(820, 300, () => {
      let s = '<line x1="60" y1="250" x2="780" y2="250" class="d-line"/><line x1="60" y1="40" x2="60" y2="250" class="d-line"/>';
      s += '<path d="M 60 70 C 300 80, 420 170, 780 210" class="d-line-c" style="stroke-width:4;fill:none"/>';
      s += '<path d="M 60 230 C 300 220, 420 110, 780 80" style="stroke:var(--ink);stroke-width:4;fill:none"/>';
      s += lines(160, 55, "parents' direct influence", "d-t2", 14) + lines(690, 60, "peers & other adults", "d-t2", 14);
      s += lines(150, 275, "HOME · imitation", "d-t3", 14) + lines(420, 275, "SCHOOL · peers, teachers", "d-t3", 14) + lines(700, 275, "NEIGHBORHOOD · culture", "d-t3", 14);
      s += '<text x="30" y="150" class="d-t3" text-anchor="middle" transform="rotate(-90 30 150)">INFLUENCE</text>';
      s += lines(420, 20, "Lever stays the same: choose the setting", "d-t", 16);
      return s;
    }, "Influence of parents and peers over age"),
  };

  D["leadership"] = {
    title: "Situational leadership: the Cleveland Clinic case",
    caption: "Cosgrove's four moves map one-to-one onto the four elements of situational agency, now applied to other people. 'Why' (mission) and 'way' (culture) parallel the distinction between espoused and enacted values in organizational research.",
    svg: () => svg(820, 330, () => {
      let s = "";
      const rows = [["Set up their space", "skyway, co-located offices, gowns, price tags, Go! labels, patient parking"], ["Pick their peers", "institutes by organ/disease, shared metrics and case reviews"], ["Make mentorship the mode", "elective program, peer coaches, training, curiosity conversations"], ["Champion culture carriers", "chief experience officer, empathy film, ‘Caregiver’ badge for all"]];
      rows.forEach((r, i) => {
        const y = 20 + i * 74;
        s += '<rect x="20" y="' + y + '" width="250" height="60" rx="10" class="' + (i === 0 ? "d-hot" : "d-box") + '"/>' + lines(145, y + 30, r[0], "d-t", 16);
        s += '<rect x="282" y="' + y + '" width="518" height="60" rx="10" class="d-box2"/>' + lines(541, y + 30, r[1], "d-t2", 14);
      });
      s += lines(410, 318, "WHY = Patients First (mission) · WAY = the Cleveland Clinic Way (culture)", "d-t3", 14);
      return s;
    }, "Four leadership moves"),
  };

  D["maslow"] = {
    title: "Maslow, corrected",
    caption: "Maslow (1943) proposed prepotency, not a staircase, and never drew the pyramid; it was popularized later in management textbooks (Bridgman et al., 2019 trace it to McDermid, 1960). In late work (1969) he described self-transcendence as the highest motive, partly in dialogue with Frankl. Koltko-Rivera (2006) and Kaufman (2020) argue for this revised version.",
    svg: () => svg(820, 380, () => {
      let s = "";
      const levels = [["SELF-TRANSCENDENCE", "a cause beyond the self", "d-hot"], ["SELF-ACTUALIZATION", "become what you can be", "d-s"], ["ESTEEM", "respect, competence", "d-m"], ["LOVE & BELONGING", "connection", "d-y"], ["SAFETY", "security, order", "d-o"], ["PHYSIOLOGICAL", "food, rest, warmth", "d-p"]];
      levels.forEach((l, i) => {
        const y = 20 + i * 56, half = 60 + i * 52, cx = 300;
        s += '<path d="M ' + (cx - half + 26) + "," + y + " L " + (cx + half - 26) + "," + y + " L " + (cx + half) + "," + (y + 50) + " L " + (cx - half) + "," + (y + 50) + ' Z" class="' + l[2] + '" style="stroke:var(--ink);stroke-width:1.5"/>';
        s += lines(cx, y + 18, l[0], "d-t3", 14) + lines(cx, y + 35, l[1], "d-t2", 14);
      });
      s += box(610, 40, 190, 120, "IN SYNCHRONY", "needs are pursued|together, not one|level at a time", "d-box", { gap: 26 });
      s += box(610, 190, 190, 140, "MANCHESTER|BIDWELL", "beauty + order +|purpose + support|at every level", "d-box2", { gap: 30 });
      return s;
    }, "Pyramid with self-transcendence at top"),
  };

  D["flywheel"] = {
    title: "Situation multiplication: the flywheel",
    caption: "Add one arrow from Box Three back to Box One and the model becomes a feedback loop. Small situational advantages compound, which echoes Merton's 'Matthew effect' of cumulative advantage. Cody Coleman's arc is the book's example.",
    svg: () => svg(820, 330, (id) => {
      let s = "";
      s += box(300, 20, 220, 80, "SITUATION", "a mentor, a quiet room", "d-hot", { gap: 14 });
      s += box(560, 200, 220, 80, "THOUGHTS", "“I can do this!”", "d-box", { gap: 14 });
      s += box(40, 200, 220, 80, "RESPONSE", "effort → small wins", "d-box", { gap: 14 });
      s += curve(id, "M 522 70 C 640 80, 680 130, 670 196", "d-line") + curve(id, "M 556 250 L 264 250", "d-line") + curve(id, "M 150 196 C 150 120, 200 70, 296 62", "d-line-c");
      s += lines(410, 170, "each turn, a slightly|better situation", "d-t2", 16);
      s += lines(160, 120, "NEW ARROW", "d-t3", 14);
      return s;
    }, "Feedback loop of three boxes"),
  };

  D["curves"] = {
    title: "Life on paper vs. the life actually lived",
    caption: "Cody Coleman's napkin sketch. A straight line implies a steady trait; an exponential curve implies compounding. Statistically, a small constant advantage in the rate of improvement produces a gap that keeps widening over time.",
    svg: () => svg(820, 300, () => {
      let s = '<line x1="60" y1="260" x2="780" y2="260" class="d-line"/><line x1="60" y1="30" x2="60" y2="260" class="d-line"/>';
      s += '<line x1="60" y1="230" x2="780" y2="150" style="stroke:var(--ink-3);stroke-width:3;stroke-dasharray:8 6"/>';
      let d = ""; for (let x = 0; x <= 720; x += 10) { const y = 255 - 225 * (Math.exp(x / 170) - 1) / (Math.exp(720 / 170) - 1); d += (x === 0 ? "M" : "L") + (60 + x) + "," + y.toFixed(1); }
      s += '<path d="' + d + '" class="d-line-c" style="stroke-width:4;fill:none"/>';
      s += lines(640, 175, "steady effort, steady situation", "d-t2", 14) + lines(660, 40, "situation multiplication", "d-t", 16);
      s += lines(420, 285, "TIME →", "d-t3", 14) + '<text x="30" y="150" class="d-t3" text-anchor="middle" transform="rotate(-90 30 150)">SUCCESS</text>';
      return s;
    }, "Linear versus exponential trajectories"),
  };

  D["book-map"] = {
    title: "The architecture of Situated",
    caption: "Four parts: see the situation, take charge of your own, take responsibility for others', then come back to grit. Back matter turns the argument into tools (Scorecard, Blueprint, Playbook).",
    svg: () => svg(820, 360, (id) => {
      let s = "";
      s += box(20, 20, 780, 70, "PART 1 · SITUATIONAL AWARENESS", "Ch. 1 Beyond Grit · 2 How Do We Change? · 3 The Sweet Spot · 4 The Courage to Change · 5 Saving a Marriage", "d-box2", { gap: 14 });
      s += box(20, 110, 780, 70, "PART 2 · SITUATIONAL AGENCY", "Ch. 6 Space · 7 Peers · 8 Mentors · 9 Culture", "d-hot", { gap: 14 });
      s += box(20, 200, 780, 70, "PART 3 · SITUATIONAL RESPONSIBILITY", "Ch. 10 Parenting · 11 Leadership · 12 Citizenship", "d-box2", { gap: 14 });
      s += box(20, 290, 380, 60, "PART 4 · Ch. 13 From Grit to Great", null, "d-box", { tcls: "d-t" });
      s += box(420, 290, 380, 60, "Scorecard · Blueprint · Playbook", null, "d-box", { tcls: "d-t" });
      return s;
    }, "Structure of the book"),
  };

  D["grit-situated"] = {
    title: "From Grit (2016) to Situated (2026)",
    caption: "Grit located success mainly in the person (passion + perseverance), with a closing section on growing grit 'from the outside in'. Situated keeps the person and widens the frame: the outside-in section becomes the whole book. It reads as an interactionist position, B = f(P, E), stated in Lewin's 1936 notation.",
    svg: () => svg(820, 300, (id) => {
      let s = "";
      s += box(20, 40, 330, 220, "GRIT", "passion + perseverance|interest · practice ·|purpose · hope|(inside out)", "d-box2", { tcls: "d-big", gap: 40 });
      s += box(470, 40, 330, 220, "SITUATED", "space · peers · mentors ·|culture, chosen and shaped|(outside in)", "d-hot", { tcls: "d-bigc", gap: 36 });
      s += arrow(id, 354, 150, 466, 150, "d-line-c");
      s += lines(410, 125, "B = f(P, E)", "d-t", 16);
      s += lines(410, 285, "“Grit is necessary but not sufficient.”", "d-t2", 14);
      return s;
    }, "Grit to Situated"),
  };

  D["debate-map"] = {
    title: "Where these books sit in the person–situation debate",
    caption: "A simplified map of a century of argument. Duckworth began on the 'person' side (grit as a trait that predicts outcomes) and with Situated moves toward the interactionist middle, adding a twist: people can choose and engineer their situations ('situational agency').",
    svg: () => svg(820, 300, () => {
      let s = '<line x1="40" y1="150" x2="780" y2="150" class="d-line" style="stroke-width:3"/>';
      s += lines(90, 120, "PERSON", "d-big", 24) + lines(730, 120, "SITUATION", "d-big", 24);
      const pts = [[120, "Allport (1937)|Big Five, trait theory", 1], [250, "Grit (2007/2016)", 1, "d-hot"], [410, "Lewin B = f(P,E) · Mischel &|Shoda CAPS · Fleeson", 0], [560, "Situated (2026)", 1, "d-hot"], [690, "Mischel (1968) critique ·|Ross & Nisbett · Barker · Milgram", 0]];
      pts.forEach((p, i) => {
        s += '<circle cx="' + p[0] + '" cy="150" r="' + (p[3] ? 14 : 9) + '" class="' + (p[3] || "d-box") + '"/>';
        s += lines(p[0], i % 2 ? 205 : 215, p[1], p[3] ? "d-t" : "d-t2", 16);
      });
      s += lines(410, 270, "INTERACTIONIST MIDDLE: people differ, and they select, evoke, and shape situations", "d-t3", 14);
      return s;
    }, "Spectrum from person to situation"),
  };

  /* ---------------- Grit diagrams ---------------- */
  D["effort-twice"] = {
    title: "Effort counts twice",
    caption: "Duckworth's two equations (Grit, Ch. 3). They are a theory sketch, not fitted models: talent is the rate at which skill grows with effort, and achievement is what you do with skill, again multiplied by effort. Effort therefore appears in both steps.",
    svg: () => svg(820, 220, (id) => {
      let s = "";
      s += box(20, 60, 140, 70, "TALENT", null, "d-box2", { tcls: "d-big" }) + lines(185, 95, "×", "d-big", 24);
      s += box(210, 60, 140, 70, "EFFORT", null, "d-hot", { tcls: "d-bigc" }) + lines(375, 95, "=", "d-big", 24);
      s += box(400, 60, 120, 70, "SKILL", null, "d-box", { tcls: "d-big" }) + lines(540, 95, "×", "d-big", 24);
      s += box(560, 60, 120, 70, "EFFORT", null, "d-hot", { tcls: "d-bigc" }) + lines(700, 95, "=", "d-big", 24);
      s += box(716, 50, 90, 90, "ACHIEVE-|MENT", null, "d-box", { tcls: "d-t" });
      s += lines(410, 175, "talent: how fast skill grows per unit effort · skill: what effort can turn into output", "d-t2", 14);
      return s;
    }, "Talent times effort equals skill; skill times effort equals achievement"),
  };

  D["goal-hierarchy"] = {
    title: "Goal hierarchy",
    caption: "From Grit, Ch. 4, building on goal-systems theory (Carver & Scheier; Kruglanski). Grit means holding the top-level goal for a long time. Low-level goals are means, and are meant to be swapped when they fail. Conflict at the top is what wastes effort.",
    svg: () => svg(820, 330, () => {
      let s = "";
      s += box(300, 20, 220, 70, "TOP-LEVEL GOAL", "an ultimate concern / compass", "d-hot", { gap: 14 });
      [140, 410, 680].forEach((x, i) => {
        s += '<line x1="410" y1="90" x2="' + x + '" y2="140" class="d-line"/>';
        s += box(x - 100, 140, 200, 60, "mid-level goal", null, "d-box", { tcls: "d-t" });
        [-60, 0, 60].forEach((dx) => { s += '<line x1="' + x + '" y1="200" x2="' + (x + dx) + '" y2="250" class="d-faint" style="stroke:var(--ink-3)"/><rect x="' + (x + dx - 26) + '" y="250" width="52" height="34" rx="6" class="d-box2"/>'; });
      });
      s += lines(410, 312, "LOW-LEVEL GOALS: concrete, substitutable, often abandoned", "d-t3", 14);
      return s;
    }, "Tree of goals"),
  };

  D["grit-assets"] = {
    title: "Four psychological assets of grit",
    caption: "Grit Part II. They tend to unfold in this order over a life of committed work: interest sparks, practice builds skill, purpose deepens passion, and hope runs through every stage.",
    svg: () => svg(820, 220, (id) => {
      let s = "";
      [["INTEREST", "enjoy what you do", "d-y"], ["PRACTICE", "deliberate, daily", "d-o"], ["PURPOSE", "it matters to others", "d-p"]].forEach((a, i) => {
        s += box(20 + i * 270, 30, 240, 90, a[0], a[1], a[2], { tcls: "d-big", gap: 18 });
        if (i < 2) s += arrow(id, 262 + i * 270, 75, 286 + i * 270, 75);
      });
      s += '<rect x="20" y="150" width="780" height="50" rx="10" class="d-s"/>' + lines(410, 175, "HOPE: rising to the occasion at every stage (growth mindset, optimistic explanatory style)", "d-t", 16);
      return s;
    }, "Interest, practice, purpose, hope"),
  };

  D["practice-flow"] = {
    title: "Deliberate practice vs. flow",
    caption: "The Ericsson–Csikszentmihalyi debate staged in Grit, Ch. 7. Duckworth's resolution: they are different activities. Deliberate practice is preparation and feels effortful; flow is performance and feels effortless. Gritty people do more of both.",
    svg: () => svg(820, 280, () => {
      let s = "";
      s += box(20, 20, 380, 240, "DELIBERATE PRACTICE", "goal: improve a weakness|challenge > skill|full concentration|immediate feedback|repetition with reflection|feels effortful, often unpleasant", "d-o", { tcls: "d-t", gap: 60 });
      s += box(420, 20, 380, 240, "FLOW", "goal: perform|challenge ≈ skill|total absorption|loss of self-consciousness|time distortion|feels effortless, enjoyable", "d-s", { tcls: "d-t", gap: 60 });
      return s;
    }, "Practice versus flow comparison"),
  };

  D["helplessness"] = {
    title: "Learned helplessness and its antidote",
    caption: "Seligman & Maier (1967) used a triadic design: animals with escapable shock, yoked inescapable shock, or no shock. Only the inescapable group later stopped trying. Maier's later neuroscience (Maier & Seligman, 2016) reversed the interpretation: passivity is the default response to prolonged stress, and what is learned is control.",
    svg: () => svg(820, 280, (id) => {
      let s = "";
      [["ESCAPABLE shock", "could stop it", "later: escapes", "d-m"], ["INESCAPABLE (yoked)", "same shock, no control", "later: gives up", "d-p"], ["NO shock", "control group", "later: escapes", "d-box2"]].forEach((r, i) => {
        const y = 20 + i * 82;
        s += box(20, y, 260, 66, r[0], r[1], r[3], { gap: 12 });
        s += arrow(id, 284, y + 33, 360, y + 33);
        s += box(364, y, 200, 66, r[2], null, i === 1 ? "d-hot" : "d-box", { tcls: "d-t" });
      });
      s += box(600, 60, 200, 160, "WHAT MATTERS", "perceived control,|explanatory style|(temporary, specific,|controllable)", "d-box", { gap: 40 });
      return s;
    }, "Triadic design of helplessness experiments"),
  };

  D["parenting-quad"] = {
    title: "Wise parenting: demanding and supportive",
    caption: "Grit, Ch. 10, uses the Baumrind / Maccoby–Martin typology. 'Authoritative' is what Duckworth calls wise parenting. Note the direct line to Situated's challenge × support sweet spot: it is the same grid, generalized from parents to all situations.",
    svg: () => quad({
      label: "Parenting styles",
      xLabel: "SUPPORTIVE →", yLabel: "DEMANDING →", x: ["Low", "High"], y: ["Low", "High"],
      cells: [{ t: "AUTHORITARIAN", s: "high standards, little warmth" }, { t: "WISE", s: "authoritative: warm, respectful, demanding", hot: true }, { t: "NEGLECTFUL", s: "neither" }, { t: "PERMISSIVE", s: "warm, few demands" }],
    }),
  };

  D["bricklayers"] = {
    title: "Job, career, calling",
    caption: "Wrzesniewski et al. (1997): roughly equal thirds of workers in many occupations describe their work as a job, a career, or a calling. The three bricklayers parable dramatizes it, and the framing can change without the job changing ('job crafting').",
    svg: () => svg(820, 220, () => {
      let s = "";
      [["JOB", "“I am laying bricks.”", "paycheck", "d-box2"], ["CAREER", "“I am building a church.”", "advancement", "d-box"], ["CALLING", "“I am building the house of God.”", "meaning beyond the self", "d-hot"]].forEach((c, i) => {
        s += box(20 + i * 270, 30, 240, 160, c[0], c[1] + "|" + c[2], c[3], { tcls: i === 2 ? "d-bigc" : "d-big", gap: 26 });
      });
      return s;
    }, "Three orientations to work"),
  };

  /* ---------------- Rendering ---------------- */
  function diagramHtml(id) {
    const d = D[id];
    if (!d) return "";
    let inner = "";
    try { inner = d.svg(); } catch (e) { inner = "<p>Diagram unavailable.</p>"; }
    return '<figure class="dia" data-dia="' + id + '"><div class="diahead"><b>' + E(d.title) + '</b><button type="button" class="iconbtn" data-act="enlarge" data-dia="' + id + '" aria-label="Enlarge diagram">Enlarge</button></div><div class="diabody">' + inner + '</div><figcaption class="cap">' + SG.inline(d.caption) + "</figcaption></figure>";
  }
  SG.diagrams = D;
  SG.diagramHtml = diagramHtml;
})(window.SG);
