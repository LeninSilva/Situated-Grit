/* "Before You Begin": the introductory chapter written for this companion. */
SG.intro = {
  lede: "Read this first. It gives you the vocabulary, the history, and the critical tools you need to read *Grit* and *Situated* the way a graduate seminar would: generously enough to understand the argument at its strongest, and skeptically enough to know where it is still being argued.",
  sections: [
    {
      id: "how-to-read",
      title: "How to read these two books",
      body: `**Who is writing.** Angela Duckworth is the Rosa Lee and Egbert Chang Professor at the University of Pennsylvania, with appointments in psychology and at the Wharton School. Her path explains a lot about her books. She studied neurobiology at Harvard and neuroscience at Oxford, worked at McKinsey, taught middle- and high-school math in New York and San Francisco, and earned a PhD in psychology at Penn under Martin Seligman, a founder of positive psychology. She won a MacArthur Fellowship in 2013, cofounded the nonprofit Character Lab, cofounded the Behavior Change for Good initiative with Katy Milkman, and cohosts the *No Stupid Questions* podcast with Stephen Dubner. Teacher, consultant, scientist and storyteller all show up on the page.

**What kind of books these are.** Both are *trade science* books: written for the public by a working scientist, built from stories plus studies. That genre has conventions you should read *through*:

- **Stories carry the argument; studies anchor it.** A champion's story (Michael Phelps, Taylor Swift) makes an idea vivid. The endnotes tell you which claims rest on randomized experiments, which on correlations, and which on interviews. This companion's **Sources** tab sorts that out chapter by chapter.
- **The author's own research is central.** Duckworth cites many of her own studies, including several marked "manuscript in preparation." Those had not been peer-reviewed when the book went to press. Treat them as promising rather than settled.
- **Simplification is a feature, not a bug.** The Three Boxes model and the "four elements" are deliberately simple. Judge them by whether they help you act, and separately by whether they are true. Those are different tests.

**What "charitable reading" means here.** The *principle of charity* asks you to reconstruct an argument in its strongest form before you criticize it. Every chapter guide includes an **"In the author's voice"** section that does exactly that: a paraphrase in Duckworth's first person, clearly labeled. The verbatim text is always one tab away in **Read**. After you have the strongest version, the **"The debate"** section gives you the best objections and the current state of the research.

**How the two books relate.** *Grit* (2016) is mostly about what is inside successful people: passion and perseverance, interest, practice, purpose, hope. Its last third, "Growing Grit from the Outside In," is about parents, coaches, and cultures. *Situated* (2026) takes that last third and makes it the whole book, with a new theory (Three Boxes), new evidence, and a new stance (situational agency). Reading *Situated* first and then *Grit* works well: you will see *Grit*'s situational seeds everywhere. Reading in publication order shows you a scientist changing her mind in public, which is its own lesson.`,
      after: `{{dia:grit-situated}}`,
    },
    {
      id: "argument",
      title: "The argument in one page",
      body: `### Grit, in five claims
1. Achievement depends on talent, but we are "distracted by talent" and underrate effort.
2. Effort counts twice: talent × effort = skill; skill × effort = achievement.
3. Grit, meaning **passion** (consistency of interest in a top-level goal) plus **perseverance** (sustained effort through setbacks), predicts who keeps going in hard situations, independent of measured talent.
4. Grit grows. From the inside it grows through **interest, deliberate practice, purpose, and hope**. From the outside it grows through wise parenting, extracurricular follow-through, and cultures of grit.
5. You can cultivate grit in yourself and in others.

### Situated, in seven claims
1. **Situations are powerful and invisible.** Behavior depends on where you are and who you're with at least as much as on who you are. We overlook this (the [[fundamental-attribution-error]]).
2. **The Three Boxes.** Situation → thoughts → response. Willpower acts at the last box and is the weakest strategy. Changing the situation acts at the first box and is the strongest.
3. **Personality has range.** We each contain multiple selves, and situations select which one shows up. Seek the [[sweet-spot]]: high challenge plus high support.
4. **We moralize willpower.** Changing your situation feels like cheating, but it is honest, effective and even heroic.
5. **Situational agency.** You can set up your **space**, pick your **peers**, attract **mentors**, and choose your **culture**, in that order from near to far.
6. **Situational responsibility.** As parents, leaders and citizens, we help others most by improving their situations rather than urging them to try harder. That also shows them respect.
7. **Situations multiply.** Responses change future situations, so small situational advantages compound like a flywheel.

### The bridge sentence
"Grit is necessary but not sufficient." *Situated* doesn't retract *Grit*. It adds the missing variable, and in doing so lands near the oldest equation in social psychology, Kurt Lewin's B = f(P, E): behavior is a function of the person *and* the environment.`,
      after: `{{dia:three-boxes}}

{{dia:book-map}}`,
    },
    {
      id: "vocabulary",
      title: "Vocabulary to know first",
      body: `Every technical term is underlined in the book text and defined in the [Glossary](#/glossary). These are the ones you need before page one.

### The core model
- [[situation]]: objective circumstances (places, people, objects, norms), as distinct from your interpretation of them.
- [[three-boxes]], adapted from [[process-model|James Gross's process model]].
- [[willpower]] vs. [[self-control]]: for Duckworth, willpower is one *strategy* (resisting in the moment); self-control is the *capacity* to act on long-term goals, by any strategy.
- [[situational-awareness]], [[situational-agency]], [[situational-responsibility]]: the three parts of the book.

### Person and situation
- [[fundamental-attribution-error]]: overweighting character, underweighting circumstance.
- [[personality-range|Personality range]]: traits are averages over a wide spread of states.
- [[behavior-setting]]: Roger Barker's places that "require certain behavior."
- [[person-situation-debate]] and [[interactionism]].

### Changing behavior
- [[nudge]], [[default-effect]], [[friction]], [[habit]], [[commitment-device]], [[empathy-gap]], [[temptation-bundling]].

### People and places
- [[peer-effects]], [[collective-brain]], [[mentor]], [[pygmalion-effect]], [[weak-ties]], [[culture]], [[status-quo-bias]], [[economic-mobility]], [[social-capital]].

### From Grit
- [[grit]], [[grit-scale]], [[talent]], [[effort-counts-twice]], [[deliberate-practice]], [[flow]], [[goal-hierarchy]], [[growth-mindset]], [[learned-helplessness]], [[authoritative-parenting]].

### For reading the evidence
- [[rct]], [[natural-experiment]], [[correlation-causation]], [[effect-size]], [[survivorship-bias]], [[replication-crisis]], [[megastudy]].`,
    },
    {
      id: "history",
      title: "A century-long argument: person vs. situation",
      body: `*Situated* enters one of psychology's oldest arguments: is behavior better explained by what is inside people (traits, abilities, character) or by what surrounds them (situations, roles, norms)? Knowing the history lets you see what is new in Duckworth's position and what is inherited.`,
      timeline: [
        ["1580", "Montaigne, *Essays*", "\"We are more unlike ourselves than we are unlike other people.\" The prologue's epigraph about being \"carried\" by the water comes from the same essay. Situationism has deep humanist roots."],
        ["1869", "Galton, *Hereditary Genius*", "Eminence runs in families, so it must be inherited ability plus \"zeal\" and capacity for hard labor. *Grit* Ch. 2 opens here. Darwin's reply: men differ less in intellect than in zeal and hard work."],
        ["1907", "William James, \"The Energies of Men\"", "We habitually live \"far within our limits.\" The gap between potential and use is the question *Grit* inherits."],
        ["1936", "Lewin: B = f(P, E)", "Behavior is a function of person and environment together. Lewin's \"channel factors\" (small situational paths) prefigure *Situated*'s friction."],
        ["1937", "Allport, *Personality*", "Traits as real, enduring \"neuropsychic structures.\" The founding text of the person side."],
        ["1947–72", "Barker's Midwest Field Station", "Children behave according to *where* they are. Behavior settings coerce. The research was forgotten, then revived; Chapter 4 retells it."],
        ["1961–71", "Milgram; Darley & Batson; Zimbardo", "Famous demonstrations that ordinary people do extraordinary things under situational pressure. Later scrutiny complicated several of them, especially the Stanford Prison Experiment (Le Texier, 2019)."],
        ["1968", "Mischel, *Personality and Assessment*", "Trait measures rarely predict behavior in a given situation above r ≈ .30. That set off the person–situation debate."],
        ["1977", "Ross names the fundamental attribution error", "Observers over-attribute behavior to dispositions. The \"quiz bowl\" study is in Chapter 3."],
        ["1979–83", "Epstein; Funder & Ozer", "Traits predict *aggregated* behavior well; classic situational effects are about as large as trait effects. The debate starts to settle."],
        ["1983–87", "Scarr & McCartney; Buss", "People select, evoke, and shape their environments. This is the scholarly home of \"situational agency.\""],
        ["1991", "Ross & Nisbett, *The Person and the Situation*", "The classic statement of the situationist lesson, with \"construal\" and \"channel factors.\""],
        ["1995", "Mischel & Shoda, CAPS", "Personality as a stable *if…then* signature of responses to situations. Interactionism formalized."],
        ["1998", "Gross's process model", "Situation selection and modification are the earliest emotion-regulation strategies: the seed of Three Boxes."],
        ["2001", "Fleeson: traits as density distributions", "Within-person variability is huge, and averages are stable. \"Personality has range.\""],
        ["2007", "Duckworth et al., \"Grit\"", "A trait (passion + perseverance) predicts persistence at West Point and the Spelling Bee."],
        ["2008", "Thaler & Sunstein, *Nudge*", "Choice architecture enters public policy."],
        ["2014–22", "Chetty and colleagues", "Opportunity is hyperlocal; neighborhoods and social connections causally shape life outcomes."],
        ["2016", "Duckworth, Gendler & Gross", "\"Situational Strategies for Self-Control\": the academic blueprint of *Situated*."],
        ["2016", "*Grit* (the book)", "Part III, \"Growing Grit from the Outside In,\" anticipates the next book."],
        ["2026", "*Situated*", "Grit is necessary but not sufficient. Situational awareness, agency, and responsibility."],
      ],
      after: `{{dia:debate-map}}

**Where does Duckworth land?** Not on the extreme situationist end, where Robert Sapolsky's *Determined* (2023) argues there is no free will at all, and not on the old trait end. Her distinctive contribution is to treat the situation as something people can deliberately **choose and engineer**, and to make that a moral and practical program. In the scholarly vocabulary, that is a call to exploit **active person–environment correlation**: pick and build the niches that elicit your best states.`,
    },
    {
      id: "evidence",
      title: "How sure can we be? Reading the evidence",
      body: `Popular psychology books mix evidence of very different strength. A graduate reader sorts claims into tiers before deciding how much to believe them. Here is a field guide for both books.

### Tier 1: Randomized and natural experiments
The strongest causal evidence. Examples: the situation-change vs. willpower intervention (Ch. 2), temptation bundling at the gym (Ch. 6), the voting social-pressure study (Ch. 7), the LinkedIn weak-ties experiment (Ch. 8), the coin-flip study and Hurricane Katrina (Ch. 9), randomly assigned roommates and military postings (Chs. 9–10), the megastudies. Even here ask: how big is the effect (absolute or relative)? How long did it last? Who was studied?

### Tier 2: Large correlational studies
Associations in big datasets: grit and West Point completion, phone distance and GPA, books in the home and education, school culture and grit, social capital and mobility. Ask about [[correlation-causation|confounding, reverse causation, and selection]]. Chetty's work combines both tiers: correlational maps plus quasi-experimental movers.

### Tier 3: Lab experiments
Clean causal tests but artificial settings: the quiz-bowl study, forgetting intentions after five seconds, ego depletion. Ask whether the finding has replicated and whether it generalizes beyond the lab.

### Tier 4: Interviews, case studies, stories
Phelps, Marchand, Swift, Seinfeld, Cleveland Clinic, Wegmans, Cody Coleman, Duckworth's own marriage. These illustrate mechanisms and make ideas memorable. They can't establish them, because of [[survivorship-bias]]: we don't hear from the swimmers who trained with great coaches and didn't win.

### The replication crisis, briefly
Since about 2011 psychology has discovered that many published effects shrink or vanish in larger, preregistered replications ([[replication-crisis]]). Findings near these books that have been challenged: [[ego-depletion]] (which *Situated* treats as a dead end, to its credit), the long-run predictive power of the marshmallow test, the size of the [[pygmalion-effect]], average [[nudge]] effects (much smaller in government trials than in journals), and [[growth-mindset]] intervention effects (small and context-dependent). Findings that have held up well: defaults, implementation intentions, the basic attribution error, the importance of practice (if smaller than once claimed), peer effects in randomized roommate designs, and neighborhood effects on mobility.

### Three reading habits
1. **Find the number behind the adjective.** "Dramatically," "astonishing," "significantly": check the endnote and the [[effect-size]].
2. **Notice "manuscript in preparation."** Several of *Situated*'s own new findings (NFL quarterbacks, phone distance and GPA, microdelays, situation neglect) were not yet peer-reviewed.
3. **Separate the advice from the evidence.** Much of the advice (put the phone in another room) is low-cost and sensible even if the effect is small. Bigger advice (move cities) deserves a higher evidentiary bar.`,
    },
    {
      id: "critics",
      title: "The critics of grit, and how Situated answers them",
      body: `*Grit* was a phenomenon: a TED talk with tens of millions of views, a #1 bestseller, and a wave of "grit" curricula in schools. It also drew three serious lines of criticism. Knowing them makes *Situated* far more interesting, because it reads as a partial reply.

### 1. "Grit is just conscientiousness"
The **jangle fallacy** is giving an old construct a new name. Credé, Tynan & Harms's 2017 meta-analysis (about 67,000 people) found grit correlates about .84 with conscientiousness and predicts academic performance only modestly (around .18). Perseverance carried most of the predictive weight; the "passion/consistency" facet added little. A UK twin study (Rimfeld et al., 2016) found grit added little beyond the Big Five in predicting exam results. Duckworth's reply: grit was never meant to replace conscientiousness. It emphasizes stamina toward one long-term goal, and in some settings (West Point completion) it predicts where other measures don't.

### 2. "Measuring and grading grit is a mistake"
Self-report character scales are vulnerable to faking and [[reference-bias]]. Duckworth largely agreed and argued publicly against using grit scores to evaluate schools (Duckworth & Yeager, 2015; "Don't Grade Schools on Grit," *New York Times*, 2016).

### 3. "Grit blames kids for structural problems"
The sharpest critique came from education scholars and journalists. Telling poor children to be grittier, they argued, puts the burden of inequality on the children and celebrates enduring bad conditions rather than changing them (Alfie Kohn; Ethan Ris's history of "grit" as a concept; Paul Gorski on "grit ideology" and deficit thinking). Paul Tough's *Helping Children Succeed* (2016) made a related turn: noncognitive skills are better understood as products of children's environments than as lessons to be taught.

### How Situated responds
Read *Situated* as taking the third critique seriously while keeping the first two in view:
- It says grit is **necessary but not sufficient**. Situations matter "to an astonishing degree."
- Its central image is the ocean current: "a force that can't be overpowered through sheer determination alone."
- Part 3 makes improving *other people's* situations a responsibility of parents, leaders and citizens, and calls helping indirectly more respectful.
- Chapter 12 attacks poverty programs that "feed the body but starve the spirit."

### What a critic might still say
- **Agency is unequally distributed.** "Choose your culture" and "buy the smallest house in the best district" assume options many people lack. Duckworth concedes this ("some of us have much more freedom… than others") and points to immigrants and Strickland. Is that enough?
- **The individual is still the unit of action.** Part 2 asks *you* to change your situation. A structural critic would ask for more about policy, institutions, and collective action, and less about personal strategy.
- **Influence ethics.** Shaping others' situations ("situational responsibility") raises the same consent and paternalism questions as nudging. Hertwig's distinction between *nudges* (change the environment) and *boosts* (build people's competence to change their own environment) is a useful lens. Duckworth's "nudge thyself" sits interestingly between them.
- **Evidence quality.** Some new findings are unpublished, and the most dramatic stories are survivors.

The best book-club discussions hold both books up together: what did Duckworth change her mind about, and what did she keep?`,
    },
    {
      id: "conversation",
      title: "Who else is in the conversation",
      body: `Placing these books among others helps you integrate them with what you already know. The ones most worth reading alongside them:

### Habits and behavior design
- **Wendy Wood**, *Good Habits, Bad Habits* (2019): the scientific case that context, friction, and repetition drive habits. Closest scientific sibling to *Situated* Ch. 6.
- **James Clear**, *Atomic Habits* (2018): "make it obvious, attractive, easy, satisfying." Nearly identical to *Situated*'s obvious / easy / rewarding. Clear is a practitioner; Duckworth supplies the research base.
- **Katy Milkman**, *How to Change* (2021): Duckworth's collaborator; temptation bundling, fresh starts, megastudies.
- **BJ Fogg**, *Tiny Habits* (2019): B = MAP (behavior = motivation × ability × prompt), another descendant of Lewin's equation.
- **Thaler & Sunstein**, *Nudge* (2008/2021): choice architecture.

### Situations, character, and free will
- **Lee Ross & Richard Nisbett**, *The Person and the Situation* (1991): the classic statement of the situationist lesson.
- **John Doris**, *Lack of Character* (2002), and **Kwame Anthony Appiah**, *Experiments in Ethics* (2008): philosophers on whether situationism undermines virtue ethics.
- **Robert Sapolsky**, *Determined* (2023): the far situationist pole, no free will. A useful foil for "situational agency."
- **Walter Mischel**, *The Marshmallow Test* (2014): self-control as strategy, including the situational strategies he found children using.

### Talent, practice, and success
- **Anders Ericsson & Robert Pool**, *Peak* (2016): deliberate practice, and Duckworth's mentor.
- **Malcolm Gladwell**, *Outliers* (2008): success as accumulated situational advantage (birth month, the Beatles in Hamburg, 10,000 hours), a more structural cousin of both books.
- **David Epstein**, *Range* (2019): a counterweight to early specialization and narrow grit.
- **Carol Dweck**, *Mindset* (2006): the hope chapter of *Grit* and the school-culture study in *Situated*.

### Opportunity, place, and merit
- **Raj Chetty** and Opportunity Insights: neighborhoods, social capital, mobility (opportunityinsights.org).
- **Robert Putnam**, *Our Kids* (2015): the class gap in children's situations.
- **Michael Sandel**, *The Tyranny of Merit* (2020), and **Robert Frank**, *Success and Luck* (2016): moral arguments about how much credit individuals deserve. They are challenging companions to the Phelps and Marchand stories.
- **Paul Tough**, *How Children Succeed* (2012) and *Helping Children Succeed* (2016): the education debate around grit.

### Meaning and needs
- **Viktor Frankl**, *Man's Search for Meaning* (1946): quoted in Chs. 2 and 12.
- **Scott Barry Kaufman**, *Transcend* (2020): the modern reworking of Maslow that Ch. 12 draws on.
- **Amartya Sen** and **Martha Nussbaum**'s capabilities approach: development as expanding the real choices people can make, a philosophical frame for "situational agency" as a matter of justice.`,
    },
    {
      id: "why",
      title: "Why it matters, and the questions to carry",
      body: `**Why should you care?** Because the explanation you give for success and failure drives what you do about it, in your own life and in your judgments of others. If you think success is talent, you sort people. If you think it is grit, you exhort them. If you think it is situations, you redesign: your desk, your friendships, your workplace, your schools, your policies. Each explanation also carries moral weight: who deserves credit, who deserves blame, who deserves help.

There is also a quieter personal stake. Duckworth calls *Situated* "the most personal" work of her life: the near-drowning of her mother, the near-end of her marriage, her mother's unfinished art career. The book argues that understanding situations made her "a better person." Her claim is that seeing the water you swim in is a path to humility (about your own successes) and hope (about others' failures).

### Questions to carry through both books
1. When you succeeded at something hard, how much was you and how much was your situation? How would you even tell?
2. Is changing your situation an act of self-control, or an escape from it? Why does it feel like "cheating"?
3. If situations shape character, where does responsibility live, for your actions and for others'?
4. Who gets to choose their situation? What do the four elements of situational agency look like with little money or power?
5. When is grit wise and when is it foolish? When should you quit the situation rather than persevere in it?
6. What is the difference between shaping someone's situation to help them and manipulating them?
7. Which of Duckworth's claims would you bet on, and which would you want to see replicated?
8. How does *Situated* change how you read *Grit*, and vice versa?`,
    },
    {
      id: "plan",
      title: "A reading plan for your book club",
      body: `A suggested seven-session plan. Each session lists the reading, the one idea to master, and a lead question. The **Discuss** tab on every chapter has many more.

1. **Before You Begin + *Situated* Prologue & Chapters 1–2.** Idea: the [[three-boxes]]. Lead question: "Think of a habit you tried and failed to change by willpower. What would a Box One fix have looked like?"
2. ***Situated* Chapters 3–5.** Ideas: personality has range; the sweet spot; why changing your situation feels like cheating. Lead question: "Which situations bring out your best self and your worst?"
3. ***Situated* Part 2 intro + Chapters 6–7.** Ideas: obvious / easy / rewarding; the power of peers. Exercise: everyone brings a Three Boxes Blueprint (back matter) for one behavior.
4. ***Situated* Chapters 8–9.** Ideas: mentors teach, believe, open doors; choose your culture; status quo bias. Exercise: score yourselves on the Situated Scorecard and compare.
5. ***Situated* Part 3 + Chapters 10–13 + Epilogue.** Ideas: situational responsibility; Maslow corrected; the flywheel. Lead question: "Where is your 'hand reaching down'?"
6. ***Grit* Parts I–II (Chapters 1–9).** Ideas: grit, effort counts twice, interest, practice, purpose, hope. Lead question: "Reading *Grit* after *Situated*, what looks different?"
7. ***Grit* Part III (Chapters 10–13) + synthesis.** Ideas: parenting, extracurriculars, cultures of grit. Lead question: "Write your own one-paragraph theory of success that uses both books, then argue with it."

**Shorter option (four sessions):** *Situated* Part 1 / *Situated* Part 2 / *Situated* Parts 3–4 / *Grit* highlights.

**Before each meeting:** read the chapter's Guide tab, do the Read tab with highlighter in hand (the five colors default to key claim, evidence, question, connection, and apply-to-my-life), and draft two answers in the Discuss tab. Then export your notebook as Markdown and bring it.`,
    },
  ],
};
