/* Grit: Preface and Part I (What Grit Is and Why It Matters). */
SG.books.grit.about = `*Grit: The Power of Passion and Perseverance* (2016) made Angela Duckworth's research famous. Its argument: in the long run, **grit** (passion and perseverance for long-term goals) may matter more than talent, and grit can grow.

**Part I** defines grit, shows it predicting who persists (West Point, the Spelling Bee, sales, schools), argues we are "distracted by talent" and that "effort counts twice," and offers the Grit Scale. **Part II** grows grit "from the inside out" through four psychological assets: **interest, practice, purpose, and hope**. **Part III** grows it "from the outside in" through wise parenting, extracurricular "playing fields," and cultures of grit, the seed of *Situated*.

Read it now with the debates in mind: the overlap with conscientiousness, measurement limits, and the critique that grit talk can individualize structural problems. All of these are covered in this companion's guides and in "Before You Begin."`;

SG.fill("grit", "preface", {
  thesis: "\"You're no genius,\" her father said. He had the right answer to the wrong question: what we accomplish may depend more on passion and perseverance than on innate talent.",
  overview: `Duckworth's father, a DuPont chemist obsessed with genius, often told her she was "no genius." Years later she won a MacArthur "genius grant" for research showing achievement may depend more on grit than on talent. The irony frames the book. She imagines telling her younger self's father: "I may not be the smartest person in the room, but I'll strive to be the grittiest." She has evidence that grit predicts success, that it is "mutable, not fixed," and insights on how to grow it. She ends reading the manuscript to her father, then battling Parkinson's, who nods and smiles.`,
  voice: `My father thought the most important question about a person was how smart they were. I've spent my career showing that it's the wrong question. Talent matters, but what we eventually accomplish may depend more on our passion and perseverance. And grit isn't fixed; it can grow. This book is everything I've learned about it.`,
  quotes: [{ text: "In the long run, Dad, grit may matter more than talent." }],
  sections: [{ key: "s0", title: "Preface: \"You're no genius\"", gist: "Her father's talent obsession; the MacArthur irony; the claim that grit may matter more than talent and can grow; reading the book to her father.", idea: "The right answer to the wrong question.", q: "What question did the adults in your childhood ask about success?", terms: ["grit", "talent"] }],
  diagrams: ["effort-twice"],
  origins: `The preface sets up the talent vs. effort debate that runs from Galton (1869) through Dweck's mindset research. It also introduces the father who returns in *Situated* Ch. 5, where we see the costs of a childhood in which love felt conditional on achievement.`,
  evidence: [{ cite: "Personal narrative", note: "Framing, not evidence." }],
  debates: `"Grit may matter more than talent" is a carefully hedged claim ("may," "in the long run"). Later meta-analyses (Credé et al., 2017) found grit's predictive power modest and comparable to conscientiousness, and cognitive ability remains a strong predictor of many outcomes (Schmidt & Hunter's 1998 meta-analysis for job performance). Read the book's claims as about *persistence and long-run accomplishment* rather than about all performance.`,
  people: [["Martin Seligman", "Duckworth's PhD advisor."], ["Francis Galton", "*Hereditary Genius* (1869): the talent tradition."]],
  why: `It frames the moral stakes. Theories of talent sort people; theories of effort invite them to grow. The question is which is truer, and the answer, per *Situated*, is more complicated than either.`,
  terms: ["grit", "talent"],
  questions: {
    comprehension: ["What does Duckworth mean by \"the right answer to the wrong question\"?"],
    critical: ["\"Grit may matter more than talent.\" In what sense (prediction, causation, controllability) could that be true, and in what sense not?"],
    personal: ["Were you labeled \"gifted\" or \"not gifted\" as a child? How did it shape you?"],
    club: ["Read *Situated* Ch. 5's account of her father after this preface. How does it change your reading?"],
  },
  annotations: [
    { anchor: "to the wrong question", title: "Talent as the default question", body: `Duckworth's reframing echoes Dweck's work on implicit theories: people who see ability as fixed ask "Am I smart?" and people with a growth view ask "How can I improve?" The wrong question can shape the answer.` },
    { anchor: "grit may matter more than talent", title: "Hedged claim", body: `The research behind this sentence shows grit predicting *persistence* (e.g., West Point completion) independently of talent measures. For grades and job performance, cognitive ability often predicts as well or better. "In the long run" signals the domain: sustained commitment.` },
    { anchor: "I know that grit is mutable, not fixed", title: "How mutable?", body: `Grit is moderately heritable (~20–37%) and rises with age in cross-sectional data. Whether interventions can raise grit is less established. Duckworth's later work moved toward changing situations, which may be the most reliable way to make people grittier *in a domain*.` },
  ],
});

SG.fill("grit", "ch01", {
  thesis: "At West Point, grit (passion + perseverance), not measured talent, predicted who survived Beast Barracks. The pattern repeated in sales, schools, Special Forces, and the Spelling Bee.",
  overview: `West Point admits only about 1,200 of 14,000 starting applicants, yet one in five leaves, many during the first summer's **Beast Barracks**. The academy's **Whole Candidate Score** (SAT, rank, leadership, fitness) didn't predict who stayed. Military psychologist Mike Matthews suspected a "never give up" attitude.

Duckworth's interviews with top performers across fields found a shared pattern: they were resilient and hardworking, *and* they knew what they wanted. "They not only had determination, they had direction." She called it **grit** and wrote the **Grit Scale**, half perseverance and half passion items.

In 2004, 1,218 cadets took it. Grit was unrelated to the Whole Candidate Score, and it predicted who finished Beast; talent didn't. It replicated the next year, then in time-share sales (vs. extraversion, emotional stability, conscientiousness), Chicago high-school graduation, educational attainment (grit higher for community-college graduates, who beat steep dropout odds), and Green Beret selection. At the National Spelling Bee, grittier kids practiced more and advanced further; verbal IQ also predicted success but was unrelated to grit. Among Ivy League students, grit and SAT were even slightly *inversely* related. "Our potential is one thing. What we do with it is quite another."`,
  voice: `Who drops out of a place they spent two years getting into? Not the least talented. At West Point the academy's best estimate of talent didn't predict who quit Beast. What did was a combination I kept hearing about in interviews with high achievers in every field: they worked hard and bounced back, and they knew in a very deep way what they wanted. Passion and perseverance. Grit.

When I measured it, grit had nothing to do with talent scores, and it predicted who made it, at West Point and in sales, schools, the Green Berets, and the Spelling Bee. Talent still mattered for how well people did once they stayed. But our potential is one thing. What we do with it is quite another.`,
  quotes: [
    { text: "They not only had determination, they had direction." },
    { text: "Our potential is one thing. What we do with it is quite another." },
  ],
  diagrams: ["grit-assets"],
  sections: [
    { title: "Beast Barracks", gist: "West Point's rigorous admissions; one in five cadets drops out, many during the seven-week summer \"Beast\"; its brutal daily schedule.", q: "Why would people who worked two years to get in quit in two months?", terms: ["whole-candidate-score"] },
    { title: "Who makes it through Beast?", gist: "Jerry Kagan's failed projective tests; Mike Matthews; the Whole Candidate Score predicts nothing about quitting; challenges that exceed current skills; a \"never give up\" attitude.", q: "What does the Whole Candidate Score measure, and what does it miss?", terms: ["whole-candidate-score", "talent"] },
    { title: "Passion and perseverance", gist: "Interviews with leaders across fields: field-specific traits plus a common thread: resilience, hard work, and knowing what they wanted. \"Satisfied being unsatisfied.\"", idea: "Determination plus direction = grit.", q: "Which do you have more of: determination or direction?", terms: ["grit", "passion-consistency", "perseverance"] },
    { title: "Measuring grit", gist: "Writing the Grit Scale from interview notes; perseverance items (\"I finish whatever I begin\") and passion items (\"My interests change from year to year\").", q: "What are the strengths and limits of measuring grit by self-report?", terms: ["grit-scale", "reference-bias"] },
    { title: "Grit and talent at West Point", gist: "1,218 cadets take the Grit Scale in 2004; grit is unrelated to the Whole Candidate Score; talent predicts grades and ratings among those who stay.", idea: "Talent is no guarantee of grit.", q: "Why might talented people be no grittier than others?", terms: ["grit", "talent"] },
    { title: "What matters for Beast", gist: "71 dropouts; grit predicts who stays; replication the next year with 62 dropouts; stayers and leavers have indistinguishable talent scores.", idea: "What matters for making it through Beast is grit.", q: "What would make you more confident this is causal?", terms: ["grit", "correlation-causation"] },
    { title: "Beyond West Point", gist: "Sales retention, Chicago high-school graduation, educational attainment (community-college grads), Green Beret selection: grit predicts persistence even after accounting for experience, teacher support, fitness.", q: "Why do community-college graduates score so high?", terms: ["grit", "conscientiousness"] },
    { title: "The Spelling Bee", gist: "Spellbound; grittier spellers practiced more and advanced further; verbal IQ also predicted success but was unrelated to grit; Ivy League grit and SAT slightly inversely correlated.", idea: "Our potential is one thing. What we do with it is quite another.", q: "How can talent and grit both predict success while being unrelated to each other?", terms: ["grit", "talent", "deliberate-practice"] },
  ],
  origins: `**Military psychology** has long tried to predict attrition. Duckworth's mentor in college, Jerome Kagan, worked on it at West Point in 1955. **Personality and achievement**: Galton's "zeal," James's "energies," Catharine Cox's 1926 "persistence of motive" (Ch. 4). **Measurement**: the Grit Scale belongs to the self-report personality tradition. Duckworth et al. (2007) and Duckworth & Quinn (2009) are the founding papers.`,
  evidence: [
    { cite: "Duckworth, Peterson, Matthews & Kelly (2007), *JPSP*", note: "Six studies, including West Point (2004, 2006) and the Spelling Bee. Grit added incremental prediction beyond IQ and conscientiousness in several samples. Effect sizes were modest-to-moderate." },
    { cite: "Eskreis-Winkler, Shulman, Beal & Duckworth (2014), \"The grit effect,\" *Frontiers in Psychology*", note: "Grit predicted retention in Special Forces selection, sales, high school graduation and marriage." },
    { cite: "Duckworth et al. (2019), *PNAS*", note: "The large follow-up: grit predicted West Point graduation; cognitive ability predicted academic grades. Grit's niche is persistence." },
    { cite: "Credé, Tynan & Harms (2017), *JPSP*", note: "The major critical meta-analysis: grit's correlations with performance are modest and largely overlap with conscientiousness." },
  ],
  debates: `**Incremental validity.** The key methodological question is whether grit predicts beyond what we already measure. In some samples yes (West Point, Spelling Bee); across the literature, grit's unique contribution beyond conscientiousness is small (Credé et al., 2017). Grit's perseverance facet carries most of the weight.

**Which outcome?** Grit predicts *staying* better than *excelling*. At West Point, talent predicted grades and grit predicted completion. That distinction is important and often lost in popular retellings.

**The talent–grit independence.** Independence (no correlation) in selective samples may reflect **range restriction** and **compensation**: in an elite sample admitted on talent *or* effort, the two can look unrelated or even negatively related, which is Berkson's paradox. The Ivy League inverse correlation is a likely example.

**Context.** *Situated* Ch. 1 adds that West Point's completion rates rose over decades through culture change, a reminder that grit operates within situations.`,
  people: [["Jerome Kagan", "Developmental psychologist; temperament research; Duckworth's college mentor."], ["Mike Matthews", "West Point military psychologist."], ["Marcus Credé", "Lead author of the critical grit meta-analysis."], ["Joseph Berkson", "Berkson's paradox: selection can create spurious correlations."]],
  why: `It introduces the book's empirical core and a durable insight: in demanding situations, the question "Who stays?" can differ from "Who is most talented?"`,
  terms: ["grit", "grit-scale", "whole-candidate-score", "talent", "conscientiousness", "passion-consistency", "perseverance", "correlation-causation", "survivorship-bias"],
  questions: {
    comprehension: ["What is the Whole Candidate Score, and what did it fail to predict?", "Describe the two halves of the Grit Scale.", "Summarize the Spelling Bee findings about grit, practice and verbal IQ."],
    critical: [
      "Explain how range restriction or Berkson's paradox could produce the Ivy League inverse correlation between grit and SAT.",
      "Grit predicted completion; talent predicted grades. What does this imply about how we should use each measure?",
      "Credé et al. found grit largely overlaps with conscientiousness. Does this undermine the chapter, or refine it?",
    ],
    personal: ["Think of a time you quit something hard. Was it lack of talent, or something else?"],
    club: ["Is \"grit\" a new idea or an old virtue with a new name?"],
  },
  annotations: [
    { anchor: "one in five cadets will drop out before graduation", title: "Attrition and selection", body: `West Point's admissions select heavily on talent and fitness. Within such a selected group, variation in talent is compressed (range restriction), which can make other traits like grit look relatively more predictive.` },
    { anchor: "cadets with the highest Whole Candidate Scores were just as likely to drop out as those with the lowest", title: "Predicting the wrong outcome", body: `Selection indices are built to predict performance, not persistence. Organizational psychology finds different predictors for task performance (cognitive ability) and turnover (job satisfaction, fit, commitment).` },
    { anchor: "They not only had determination, they had direction", title: "Two facets", body: `The perseverance facet resembles conscientiousness's industriousness; the consistency facet resembles long-term goal orientation. Factor analyses often find them correlated but separable.` },
    { anchor: "satisfied being unsatisfied", title: "Striving and well-being", body: `Research on "striving" finds pursuing valued goals predicts well-being, especially when goals are intrinsic and progress is felt (Sheldon & Elliot's self-concordance). Chronic dissatisfaction can also signal perfectionism, whose "concerns" facet predicts distress (Stoeber & Otto, 2006).` },
    { anchor: "Half of the questions were about perseverance", title: "Item writing", body: `Writing items from interviews is common in scale development. Later psychometric work asks whether items load cleanly on two factors and whether the scale is measurement-invariant across groups. Some studies find the consistency items behave differently in non-Western samples.` },
    { anchor: "Grit scores bore absolutely no relationship to the Whole Candidate Scores", title: "Independence of grit and talent", body: `Across broader samples, grit and cognitive ability correlate weakly (near zero). That supports Duckworth's point that they are different variables, and makes incremental prediction possible.` },
    { anchor: "Grit turned out to be an astoundingly reliable predictor", title: "How big was the effect?", body: `In the 2007 paper, grittier cadets were more likely to complete Beast. A one-standard-deviation increase in grit corresponded to meaningfully higher odds of completion. "Astoundingly" is rhetorical. The finding replicated, which is what matters most.` },
    { anchor: "was as effective as grit in predicting job retention", title: "Incremental validity claims", body: `Single-sample comparisons can flatter a new measure. The 2017 meta-analysis found grit's validity similar to conscientiousness's on average. Both are useful; grit is not a magic bullet.` },
    { anchor: "adults who’d successfully earned degrees from two-year colleges scored slightly higher", title: "Selection on difficulty", body: `Completing community college is a high-attrition path, so completers may be selected for persistence. The same logic explains why grit predicts completion in high-dropout settings best.` },
    { anchor: "SAT scores and grit were, in fact, inversely correlated", title: "Berkson's paradox", body: `If admission requires high talent *or* high effort, admitted students who are lower on one tend to be higher on the other, producing a negative correlation within the admitted group even if there is none in the population.` },
    { anchor: "Our potential is one thing. What we do with it is quite another", title: "Potential vs. realization", body: `This echoes William James (Ch. 2) and the economist's distinction between endowments and investments. *Situated* adds a third term: the situation that converts potential into realization.` },
  ],
});

SG.fill("grit", "ch02", {
  thesis: "We say effort matters but secretly favor \"naturals.\" That bias toward talent hides effort, grit and opportunity, sometimes with disastrous results.",
  overview: `As a young math teacher in New York and San Francisco, Duckworth noticed that "talent for math was different from excelling in math class." Some quick learners coasted; some strugglers, like David Luong, who later earned a PhD in mechanical engineering, outworked everyone. "I'd been distracted by talent."

History offers both sides: **Galton** saw ability, zeal and hard labor; **Darwin** replied that men differ less in intellect than "in zeal and hard work." **William James**: we live "far within our limits."

Surveys say Americans value effort, but **Chia-Jung Tsay**'s experiments reveal a **naturalness bias**. Musicians and entrepreneurs judged "naturals" more favorably than identical "strivers"; a striver needed four more years of leadership experience and $40,000 more capital to break even. Tsay herself practiced four to six hours a day.

**McKinsey's "War for Talent"** illustrates the cost at scale. Enron embodied the "talent mindset," with rank-and-yank firing and a culture of smugness and deception (Gladwell's critique). Finally, **Scott Barry Kaufman**, placed in special education after a bad IQ test, found a teacher who believed in him, practiced cello eight hours a day, and became a psychologist of intelligence: "At what point does achievement trump potential?" Focusing on talent "distracts us from something that is at least as important… effort."`,
  voice: `I began my teaching career assuming the kids who got math quickly would always lead. I was wrong. Talent for math was different from excelling in math class. When I looked closer, my struggling students were brilliant about things that interested them, and the ones who kept coming back for help went far.

We say we value hard work, but experiments show we secretly prefer naturals. That bias isn't harmless. It shapes whom we invest in, whom we hire, how we see ourselves. When a company prizes being the smartest above all, you can get Enron. When a school sorts eight-year-olds by one test, you can lose a Scott Barry Kaufman. Talent is real. But by shining the spotlight on it, we leave everything else in the shadows, including effort.`,
  quotes: [
    { text: "Talent for math was different from excelling in math class." },
    { text: "By shining our spotlight on talent, we risk leaving everything else in the shadows." },
  ],
  diagrams: ["effort-twice"],
  sections: [
    { title: "Teaching math: talent isn't destiny", gist: "Leaving McKinsey to teach seventh-grade math on the Lower East Side; some talented students underperform, some strugglers excel through effort; \"I'd been distracted by talent.\"", q: "Have you ever misjudged someone's potential based on how quickly they learned?", terms: ["talent", "fundamental-attribution-error"] },
    { title: "Lowell High and David Luong", gist: "San Francisco's selective Lowell; work ethic over intelligence; David in the regular track turns in perfect work, moves up, earns a D, seeks help, and later becomes a rocket scientist.", idea: "Aptitude tests can get a lot of things wrong.", q: "What did David do after his D that mattered?", terms: ["talent", "growth-mindset"] },
    { title: "Galton and Darwin", gist: "Galton's prodigy childhood and *Hereditary Genius*: ability plus zeal plus capacity for labor; Darwin's reply that zeal and hard work matter more; Darwin as a plodder who kept questions alive.", q: "Who do you side with, Galton or Darwin?", terms: ["talent", "heritability"] },
    { title: "William James: \"The Energies of Men\"", gist: "We are \"only half awake\"; we live far within our limits; why fixate on talent when most of us are nowhere near our limits?", q: "Where in your life are you \"half awake\"?", terms: ["talent"] },
    { title: "Naturals vs. strivers", gist: "Surveys favor effort, but Chia-Jung Tsay's experiments show musicians and entrepreneurs prefer naturals; striver needs four more years' experience and $40,000 more capital.", idea: "The naturalness bias is a hidden preference.", q: "When have you favored a \"natural\"?", terms: ["naturalness-bias"] },
    { title: "Chia-Jung Tsay herself", gist: "Juilliard, Harvard degrees, Carnegie Hall; \"talent\" vs. practicing four to six hours a day; expectations become self-fulfilling.", q: "How would you describe Tsay: natural or striver?", terms: ["naturalness-bias", "self-fulfilling-prophecy", "pygmalion-effect"] },
    { title: "McKinsey's War for Talent", gist: "The report and book; talent defined with \"intrinsic gifts\" first; the premium on being \"bright\"; brainteaser interviews and SAT screening.", q: "What does your workplace reward: brightness or growth?", terms: ["talent", "culture"] },
    { title: "The \"best and brightest\"", gist: "Clearwater mini-MBA; consultants with no industry knowledge advising billion-dollar companies; hiring the \"brightest\" as if that made them best.", q: "What's the difference between being bright and being right?", terms: ["talent"] },
    { title: "Enron and the talent mindset", gist: "Rewarding the most talented and culling the rest; Duff McDonald and Malcolm Gladwell's critiques; Enron's rank-and-yank and its narcissistic culture.", idea: "A talent culture can encourage short-term performance and discourage learning.", q: "Can a culture make smart people behave badly?", terms: ["culture", "growth-mindset"] },
    { title: "Scott Barry Kaufman", gist: "Special education after a bad IQ test; a teacher's belief; cello eight hours a day; \"At what point does achievement trump potential?\"; opera to psychology at Carnegie Mellon.", idea: "A teacher who believed in him changed his trajectory.", q: "Who first asked \"Who knows what you can do?\" about you?", terms: ["pygmalion-effect", "mentor"] },
    { title: "Tests of talent", gist: "Duckworth's own borderline gifted retest; tests of talent (and grit) are imperfect; the focus on talent distracts from effort.", q: "What did a test once tell you about yourself that turned out wrong?", terms: ["talent", "reference-bias"] },
  ],
  origins: `**Galton vs. Darwin** is the founding debate of differential psychology. **James** (1907) is the founding statement of the gap between potential and use. **Tsay & Banaji** (2011) and Tsay (2016) documented the naturalness bias. **The War for Talent** (Michaels, Handfield-Jones & Axelrod, 2001) and **Gladwell**'s "The Talent Myth" (New Yorker, 2002) frame the business critique. **Kaufman**'s later work (*Ungifted*, 2013) develops his story.`,
  evidence: [
    { cite: "Tsay & Banaji (2011), \"Naturals and strivers,\" *JESP*; Tsay (2016), *PSPB*", note: "Controlled experiments: identical performances, different labels. Robust demonstrations of a stated–revealed preference gap." },
    { cite: "Gladwell (2002), \"The Talent Myth,\" *The New Yorker*", note: "Journalistic critique of McKinsey and Enron. Persuasive but not systematic." },
    { cite: "Darwin's letter to Galton (1869)", note: "Historical source; Darwin's self-assessment from his *Autobiography*." },
  ],
  debates: `**Talent is real.** Cognitive ability strongly predicts job performance and learning (Schmidt & Hunter, 1998), and gifted-education research (Lubinski & Benbow's SMPY) finds that talent identified early predicts eminent achievement decades later, even among the top 1%. Duckworth agrees talent matters. Her claim is about over-weighting and its side effects.

**Tracking.** Debates over gifted programs and tracking are heated. Research finds mixed effects of ability grouping, with gains for high achievers in some designs and losses or no change for others, and identification often biased by test access and teacher referral (Card & Giuliano, 2016: universal screening increased identification of disadvantaged students).

**Enron's lesson.** Was Enron's failure about a talent culture or about fraud, incentives and leadership? Gladwell's account is one reading. Organizational research on "forced ranking" (e.g., Scullen et al., 2005) finds initial gains that decline quickly.`,
  people: [["Francis Galton", "*Hereditary Genius*; eugenics' founder, a troubling legacy."], ["Charles Darwin", "Zeal and hard work."], ["William James", "\"The Energies of Men.\""], ["Chia-Jung Tsay", "Naturalness bias."], ["Scott Barry Kaufman", "*Ungifted*; *Transcend*."], ["David Lubinski & Camilla Benbow", "SMPY: longitudinal evidence that early talent predicts achievement."]],
  why: `It names a bias you can catch in yourself: preferring the effortless performer. That bias shapes hiring, teaching and self-belief.`,
  terms: ["talent", "naturalness-bias", "self-fulfilling-prophecy", "pygmalion-effect", "culture", "heritability"],
  questions: {
    comprehension: ["What did Duckworth learn as a teacher?", "Summarize Tsay's experiments.", "How does Enron illustrate the risks of a talent mindset?"],
    critical: ["Talent-identification research (SMPY) finds early ability predicts eminence. How would Duckworth reconcile that with this chapter?", "Is the naturalness bias irrational? Could favoring naturals be a reasonable inference about future learning rates?"],
    personal: ["Where do you hide your effort to look like a natural?"],
    club: ["Should schools label children \"gifted\"?"],
  },
  annotations: [
    { anchor: "Talent for math was different from excelling in math class", title: "Ability vs. achievement", body: `Educational research distinguishes ability tests from achievement tests. Self-discipline predicted report-card grades better than IQ in Duckworth & Seligman (2005), while IQ better predicted standardized test scores. Effort shows up most in cumulative, effortful outcomes.` },
    { anchor: "I’d been distracted by talent", title: "Teacher expectations", body: `Teacher judgments of ability are fairly accurate on average but can be biased by early impressions and stereotypes, and initial impressions can stick (Jussim & Harber, 2005).` },
    { anchor: "excepting fools, men did not differ much in intellect, only in zeal and hard work", title: "Darwin's humility", body: `Darwin's contemporaries considered him brilliant. His self-description reflects Victorian modesty as much as accuracy. The point survives: sustained, curious attention was his signature.` },
    { anchor: "Compared with what we ought to be, we are only half awake", title: "James's energies", body: `James wrote "The Energies of Men" (1907) as a presidential address. He argued most people habitually use a fraction of their capacity and that crises, ideas, and "excitements" unlock more, an early situational theory of effort.` },
    { anchor: "the point of indifference between a striver and a natural", title: "Pricing a bias", body: `Translating a bias into money and years is a powerful experimental technique: it shows the bias has real economic consequences.` },
    { anchor: "a hidden prejudice against those who’ve achieved what they have because they worked for it", title: "Effort heuristics", body: `People sometimes infer *more* value from effort (the "effort heuristic," Kruger et al., 2004), so the naturalness bias is domain-specific, strongest when judging potential or talent.` },
    { anchor: "that expectation becomes a self-fulfilling prophecy", title: "Expectancy effects", body: `See [[pygmalion-effect]] for the current evidence. The effects are real but modest, and stronger when early impressions form.` },
    { anchor: "rank-and-yank", title: "Forced ranking", body: `GE under Jack Welch popularized "vitality curves." Simulation and field studies suggest forced distribution improves workforce performance at first, with diminishing returns, while harming collaboration and trust. Many firms, including GE and Microsoft, later abandoned it.` },
    { anchor: "does achievement trump potential?", title: "Kaufman's question", body: `Kaufman later argued for a "theory of personal intelligence": engagement and achievement in valued domains are better guides to potential than one-shot IQ tests, especially for children with learning differences.` },
    { anchor: "talent is great, but tests of talent stink", title: "Measurement error", body: `Every test has error. A single cutoff misclassifies children near the threshold. Duckworth's own retest is an example. Universal screening and multiple measures reduce error and bias.` },
  ],
});

SG.fill("grit", "ch03", {
  thesis: "Talent × effort = skill; skill × effort = achievement. Effort counts twice, and showing up again tomorrow matters most.",
  overview: `Sociologist **Dan Chambliss**'s "The Mundanity of Excellence" found that superlative performance is a confluence of many small, drilled skills. "Greatness is doable." **Nietzsche** explained our preference for magic: "our vanity, our self-love, promotes the cult of the genius," because if genius is divine, "here there is no need to compete."

Pushed by Marty Seligman ("You don't have a theory"), Duckworth wrote two equations: **talent × effort = skill** and **skill × effort = achievement**. She notes that opportunities like a great coach "matter tremendously, too, and maybe more than anything about the individual," but her theory leaves them out. Examples: potter **Warren MacKenzie** ("The first 10,000 pots are difficult"); **John Irving**, severely dyslexic, for whom rewriting became an advantage; **Will Smith** ("I'm not afraid to die on a treadmill"), and the Harvard Treadmill Test, where run time at 20 predicted psychological adjustment decades later (George Vaillant). Woody Allen: "Eighty percent of success in life is showing up." The bigger point is getting back on the treadmill the next day. "Without effort, your talent is nothing more than your unmet potential."`,
  voice: `When we can't see how someone got so good, we call it talent. It's flattering and it lets us off the hook, because if they're divine, we don't have to compete. But look closely and excellence is mundane: many small things done well, consistently.

So here is my theory. Talent is how fast your skill grows with effort. Achievement is what you produce with that skill, which also takes effort. Effort counts twice. Someone twice as talented but half as hardworking may reach the same skill and still accomplish far less. Most of all, what matters is not how hard you push on one day but whether you come back the next.`,
  quotes: [
    { text: "Without effort, your talent is nothing more than your unmet potential." },
    { text: "But effort factors into the calculations twice, not once." },
  ],
  diagrams: ["effort-twice"],
  sections: [
    { title: "Talent everywhere", gist: "The press's reflexive \"talent\" labels; Bill vs. Hillary Clinton as natural vs. striver; Duckworth catches herself saying \"What a genius!\"", q: "When did you last call someone a genius? What did you skip over?", terms: ["talent", "naturalness-bias"] },
    { title: "The mundanity of excellence", gist: "Dan Chambliss's six years with swimmers; excellence as many small skills drilled into habit; talent as a mystifying lay explanation; the social world of swimmers (parents, money, pools, coaches); Spitz \"is a fish.\"", idea: "Greatness is many individual feats, each of them doable.", q: "Break down a skill you admire into its \"mundane\" components.", terms: ["mundanity-excellence", "talent"] },
    { title: "Nietzsche and the cult of genius", gist: "\"With everything perfect, we do not ask how it came to be\"; genius as an excuse not to compete; great people as craftsmen.", idea: "Mythologizing talent lets us off the hook.", q: "Do you secretly prefer to believe some people are just born great? Why?", terms: ["talent"] },
    { title: "\"You don't have a theory\"", gist: "Marty Seligman's critique; tears; the start of a decade of work on the psychology of achievement.", q: "What feedback hurt but changed your work?", terms: ["mentor"] },
    { title: "Two equations", gist: "Talent × effort = skill; skill × effort = achievement; opportunities and luck acknowledged but excluded.", idea: "Effort counts twice.", q: "What does the theory deliberately leave out, and why does it matter?", terms: ["effort-counts-twice", "talent"] },
    { title: "Warren MacKenzie's pots", gist: "A potter's daily practice; forty or fifty pots a day, few great; \"The first 10,000 pots are difficult.\"", q: "What's your craft's equivalent of 10,000 pots?", terms: ["effort-counts-twice", "deliberate-practice"] },
    { title: "John Irving", gist: "Not a natural: C− English, low SAT verbal, severe dyslexia; rewriting as his strength; \"I began to take my lack of talent seriously.\"", idea: "Early struggle can teach the stamina to revise.", q: "Has a weakness ever become a working advantage for you?", terms: ["talent", "perseverance"] },
    { title: "Will Smith and the treadmill", gist: "\"I'm not afraid to die on a treadmill\"; the 1940 Harvard Treadmill Test; George Vaillant's finding that run time predicted adult adjustment; Vaillant's own grit in one domain.", q: "In what domain are you a Vaillant: persistent there, if not in crosswords?", terms: ["perseverance", "grit"] },
    { title: "Showing up, again", gist: "Woody Allen's \"showing up\"; a better grit test is whether you come back to the treadmill; unused home exercise equipment; quitting too early and too often.", idea: "Consistency of effort over the long run is everything.", q: "What did you start with excitement and quit at the first plateau?", terms: ["grit", "habit"] },
    { title: "Talent half, effort double", gist: "Twice as talented, half as hardworking → same skill, less achievement; Will Smith on talent vs. skill.", idea: "Without effort, your talent is nothing more than your unmet potential.", q: "Do the math for yourself: where would doubling effort matter most?", terms: ["effort-counts-twice"] },
  ],
  origins: `**Chambliss (1989)** is a classic qualitative study. **Nietzsche**'s remarks are from *Human, All Too Human* (1878). The **two equations** were published in Duckworth & Eskreis-Winkler and colleagues' work on the psychology of achievement. The **Harvard Grant Study** (Vaillant, *Triumphs of Experience*, 2012) is the longest longitudinal study of adult development, notably all-male and all-Harvard in its original cohort.`,
  evidence: [
    { cite: "Chambliss (1989), \"The mundanity of excellence,\" *Sociological Theory*", note: "Ethnography of swimmers. Qualitative and influential." },
    { cite: "Vaillant's analyses of the Grant Study treadmill data", note: "Treadmill endurance at 20 predicted adult adjustment, even adjusting for fitness. An intriguing single-cohort finding: privileged, white, male Harvard students." },
    { cite: "Nietzsche, *Human, All Too Human*, §§162–164", note: "Philosophical source on the \"cult of genius.\"" },
  ],
  debates: `**Is the model right?** Multiplicative models imply zero effort yields zero skill, which is reasonable, and that talent and effort are independent inputs. In reality, talent affects effort (fast learners enjoy learning more), and effort is shaped by situations: coaches, opportunities, incentives. Duckworth explicitly brackets "outside forces," and *Situated* reopens that bracket.

**Practice explains part, not all.** See [[deliberate-practice]] and Macnamara et al. (2014): practice explains a substantial but not dominant share of skill differences, more in structured domains like games and music than in professions.

**Chambliss's social world.** Chambliss stressed that swimmers' excellence depended on clubs, coaches and money, which is an argument for situations. *Grit* emphasizes the mundanity, and *Situated* later the social world.`,
  people: [["Daniel Chambliss", "Sociologist of excellence."], ["Friedrich Nietzsche", "Philosopher; the cult of genius."], ["George Vaillant", "Grant Study; adult development."], ["Martin Seligman", "Advisor and goad."], ["Dean Keith Simonton", "Historiometry of creativity; productivity and the equal-odds rule."]],
  why: `The equations are a simple tool to reorient attention from fixed gifts to growable effort, and to explain why consistency compounds.`,
  terms: ["effort-counts-twice", "talent", "mundanity-excellence", "deliberate-practice", "perseverance", "habit"],
  questions: {
    comprehension: ["State the two equations and explain why effort \"counts twice.\"", "What did Chambliss mean by the mundanity of excellence?", "What did the Harvard Treadmill Test predict?"],
    critical: ["Duckworth's theory explicitly excludes opportunities and luck. How would adding a situation term change the equations?", "Are talent and effort independent? Give an example where talent increases effort, and one where it decreases it."],
    personal: ["Where are you \"twice as talented, half as hardworking\"? Where is it the reverse?"],
    club: ["Is \"eighty percent of success is showing up\" true in your work?"],
  },
  annotations: [
    { anchor: "the most dazzling human achievements are, in fact, the aggregate of countless individual elements", title: "Chunking and expertise", body: `Cognitive research on expertise (Chase & Simon, 1973, chess) shows experts perceive and act in "chunks" built from many small learned patterns. Mundane parts, assembled.` },
    { anchor: "Our vanity, our self-love, promotes the cult of the genius", title: "Self-protective attributions", body: `Social comparison research finds people protect self-esteem by attributing others' superior performance to innate gifts, which makes comparison irrelevant (Alicke et al., 1997, the "genius effect").` },
    { anchor: "You don’t have a theory for the psychology of achievement", title: "Theory in psychology", body: `Seligman's critique reflects a longstanding complaint that psychology accumulates findings without strong theory (Meehl, 1978). Duckworth's equations are a deliberately simple formal model.` },
    { anchor: "matter tremendously, too, and maybe more than anything about the individual", title: "The seed of Situated", body: `Here, in 2016, Duckworth concedes that opportunities like a great coach may matter more than anything about the individual, then sets them aside. *Situated* is, in effect, the book about this sentence.` },
    { anchor: "But effort factors into the calculations twice, not once", title: "Compounding", body: `Because effort multiplies at two stages, small differences in daily effort compound into large differences in lifetime output. That is a forerunner of *Situated*'s flywheel, but located in the person.` },
    { anchor: "The first 10,000 pots are difficult", title: "Volume and quality", body: `Simonton's equal-odds rule: across a career, a creator's proportion of hits is roughly constant, so total hits scale with total output.` },
    { anchor: "I began to take my lack of talent seriously", title: "Compensation", body: `"Desirable difficulties" research (Bjork) suggests some struggles improve long-term learning. Compensatory effort in dyslexia is well documented; many successful dyslexic adults report developing persistence and strategies.` },
    { anchor: "I’m not afraid to die on a treadmill", title: "Endurance as persistence", body: `Lab "persistence" tasks (unsolvable anagrams, handgrip) are used as behavioral measures of self-control and grit, but they correlate only weakly with questionnaire measures, a classic measurement puzzle.` },
    { anchor: "run time in the Treadmill Test at age twenty was a surprisingly reliable predictor", title: "Grant Study caveats", body: `The sample (268 Harvard men, 1939–44) limits generalization. The finding is suggestive of a stable trait of persistence, or of fitness-related health factors only partly adjusted for.` },
    { anchor: "Eighty percent of success in life is showing up", title: "Showing up", body: `Attendance and persistence are strong predictors of educational outcomes. Chronic absenteeism predicts dropout. Attendance is also highly situational: transportation, health and school climate shape it.` },
    { anchor: "Without effort, your talent is nothing more than your unmet potential", title: "Potential realized", body: `Economists model skills as built by investment: "skills beget skills" (Cunha & Heckman, 2007). Their dynamic complementarity, where early skills make later investment more productive, is a formal version of effort counting twice.` },
  ],
});

SG.fill("grit", "ch04", {
  thesis: "Grit is stamina, not intensity: falling in love with a top-level goal and staying in love. Passion is consistency over time, organized by a goal hierarchy whose low-level goals are written in pencil.",
  overview: `Duckworth tells an eager entrepreneur that grit is "more about stamina than intensity": "not just falling in love—staying in love." Then the **Grit Scale** (ten items, five passion and five perseverance) and her prediction that your perseverance score beats your passion score.

**Passion as a compass.** Passion in her sense is consistency, not fireworks. "Enthusiasm is common. Endurance is rare." Jeff Gettleman built his passion, living in East Africa, step by step, with journalism as the means.

**Goal hierarchies.** Pete Carroll's "life philosophy" sits at the top of a goal hierarchy; Tom Seaver's pitching organized his whole life. Lack of grit shows up as top goals without means ("positive fantasizing"), mid-level goals without a top goal, or competing hierarchies. Buffett's 25-goal exercise needs one more step: "To what extent do these goals serve a common purpose?"

**Ink and pencil.** Top goals in ink, low-level goals in pencil. Bob Mankoff submitted some 2,000 rejected cartoons before his first *New Yorker* sale and advises batches of ten "because… nine out of ten things never work out."

**Catharine Cox** (1926) studied 301 geniuses: IQ barely separated the most from the least eminent, but **"persistence of motive"** did. "High but not the highest intelligence, combined with the greatest degree of persistence," wins.`,
  voice: `Grit isn't just working incredibly hard. It's working on something you care about so much that you stay loyal to it, not just falling in love but staying in love. That's why my scale asks about consistency, not intensity. Enthusiasm is common. Endurance is rare.

Think of your goals as a hierarchy. At the top is your compass, the thing that matters for its own sake. Below are means, which you should swap when they fail. Write the top goal in ink and the rest in pencil. Gritty people get rejected constantly; they just don't change compasses.`,
  quotes: [
    { text: "Enthusiasm is common. Endurance is rare." },
    { text: "It’s doing what you love, but not just falling in love—staying in love." },
    { text: "You need one internal compass—not two, three, four, or five." },
  ],
  diagrams: ["goal-hierarchy"],
  interactive: "gritscale",
  sections: [
    { title: "Stamina, not intensity", gist: "The Wharton entrepreneur's all-nighters; grit is staying loyal to something over years; \"staying in love.\"", q: "Is your current goal a fling or a long marriage?", terms: ["grit", "passion-consistency"] },
    { title: "The Grit Scale", gist: "Ten items (odd = passion, reverse-scored; even = perseverance); scoring and norms; perseverance usually exceeds passion. In the Read tab, click the numbers to score yourself.", q: "Was your perseverance score higher than your passion score?", terms: ["grit-scale", "reference-bias"] },
    { title: "Passion as a compass", gist: "Passion as consistency, not intensity; \"Enthusiasm is common. Endurance is rare\"; Jeff Gettleman's winding path to East Africa.", idea: "Passion is built, not just found.", q: "What's your East Africa: the place or end, with your job as means?", terms: ["passion-consistency", "interest"] },
    { title: "Pete Carroll's life philosophy", gist: "\"Do you have a life philosophy?\"; Carroll's after being fired; reading Wooden; \"Do things better than they have ever been done before.\"", q: "Write your life philosophy in one sentence.", terms: ["goal-hierarchy", "ultimate-concern"] },
    { title: "Goal hierarchies", gist: "Low-, mid-, top-level goals; \"Why?\" until \"Just because!\"; Tom Seaver's pitching organized everything.", idea: "The top-level goal is a compass for everything below.", q: "Run the \"Why?\" ladder on today's top task. Where does it end?", terms: ["goal-hierarchy", "ultimate-concern"] },
    { title: "When goal hierarchies go wrong", gist: "Dreams without means (Oettingen's positive fantasizing); means without a dream; competing hierarchies; Duckworth's two ultimate concerns (work and motherhood).", q: "Which broken hierarchy describes you best?", terms: ["goal-hierarchy"] },
    { title: "Buffett's priorities, revised", gist: "The pilot and 25 goals; circle five; avoid the rest; Duckworth's 32 projects; rating interest × importance; adding \"Do these serve a common purpose?\"", q: "List your projects. Which serve a common purpose?", terms: ["goal-hierarchy"] },
    { title: "Ink and pencil: Bob Mankoff", gist: "Low-level goals are swappable; Roz Chast's 90% rejection; Mankoff's path from art school to psychology to cartoons, studying every *New Yorker* cartoon, the dot style, ~2,000 rejections, then acceptance.", idea: "Top goal in ink, lower goals in pencil.", q: "What did you abandon that was only a means?", terms: ["goal-hierarchy", "perseverance"] },
    { title: "Batches of ten", gist: "\"Nine out of ten things never work out\"; give up on lower goals when better means exist; be stubborn about higher ones.", q: "Where should you be more flexible, and where more stubborn?", terms: ["goal-hierarchy"] },
    { title: "Catharine Cox's 301 geniuses", gist: "Estimated IQs of eminent figures; IQ barely separates First Ten from Last Ten; \"persistence of motive\" does.", idea: "High but not the highest intelligence, plus the greatest persistence.", q: "Why might historiometric estimates be unreliable?", terms: ["grit", "talent"] },
    { title: "Taking stock", gist: "Reflect on your score and goal alignment; next, how grit changes.", q: "What's one goal you'll move from ink to pencil, or pencil to ink?", terms: ["grit"] },
  ],
  origins: `**Goal-systems theory** (Carver & Scheier; Kruglanski), **Oettingen**'s research on positive fantasies vs. mental contrasting (WOOP), **Cox** (1926) *The Early Mental Traits of Three Hundred Geniuses*, part of Terman's *Genetic Studies of Genius*. The **Grit Scale** items here mix Grit-O and Grit-S.`,
  evidence: [
    { cite: "Duckworth & Quinn (2009), \"Development and validation of the Short Grit Scale,\" *JPA*", note: "Psychometrics and norms." },
    { cite: "Oettingen (2014), *Rethinking Positive Thinking*", note: "Experiments show indulging positive fantasies predicts lower effort and achievement; mental contrasting with implementation intentions helps." },
    { cite: "Cox (1926), *Early Mental Traits of Three Hundred Geniuses*", note: "Historiometric: IQs estimated from biographies, with obvious measurement problems. Its persistence findings are suggestive." },
  ],
  debates: `**Is consistency always good?** David Epstein's *Range* (2019) argues many high achievers sampled widely before specializing, and that early, narrow commitment can be a mistake in "wicked" learning environments. Duckworth's own path (consulting, teaching, neuroscience) and Gettleman's winding road fit "explore, then commit." The goal hierarchy reconciles them: exploration at lower levels, consistency at the top, once found.

**Measuring passion.** The consistency items are the weaker facet psychometrically and predictively (Credé et al., 2017). They may measure "not getting distracted" more than "passion."

**Historiometry.** Cox's IQ estimates for historical figures depend on available biographical records, which correlate with family wealth and fame. Persistence ratings may be contaminated by knowledge of outcomes.`,
  people: [["Gabriele Oettingen", "Positive fantasizing; WOOP."], ["Catharine Cox", "Historiometry of genius."], ["David Epstein", "*Range*: the case for sampling before specializing."], ["Pete Carroll", "Seahawks coach; \"life philosophy.\""], ["Bob Mankoff", "*New Yorker* cartoon editor."]],
  why: `The goal hierarchy is one of the most practical ideas in either book. It tells you what to persist at (ends) and what to drop (failing means).`,
  terms: ["grit-scale", "passion-consistency", "perseverance", "goal-hierarchy", "ultimate-concern", "grit", "reference-bias"],
  questions: {
    comprehension: ["How is the Grit Scale scored, and what do the passion and perseverance subscores mean?", "Explain the goal hierarchy and the \"ink and pencil\" image.", "What did Catharine Cox find?"],
    critical: ["Reconcile Duckworth's consistency with Epstein's *Range*. When is switching wise?", "The passion facet predicts outcomes weakly. Is the problem the concept or the items?", "Is \"one top-level professional goal\" ideal for everyone? What about people whose lives are organized by family, community, or several callings?"],
    personal: ["Do Buffett's exercise with Duckworth's extra step.", "Take the Grit Scale in the Read tab. Retake it in a year."],
    club: ["Share your life philosophy sentence. Who has one already?"],
  },
  annotations: [
    { anchor: "grit is more about stamina than intensity", title: "Stamina vs. intensity", body: `Motivation science separates goal *intensity* (effort per unit time) from goal *persistence* (duration). They have different predictors. Persistence is more sensitive to goal value and expectancy over time.` },
    { anchor: "but not just falling in love—staying in love", title: "Harmonious passion", body: `Vallerand's research: harmonious passion, freely integrated into identity, predicts sustained engagement and well-being; obsessive passion predicts rigid persistence and burnout.` },
    { anchor: "a wee bit higher than your passion score", title: "Facet differences", body: `Mean differences between facets are common in self-report, partly because perseverance items are socially desirable and phrased positively, while passion items are reverse-scored.` },
    { anchor: "Enthusiasm is common. Endurance is rare", title: "Interest maintenance", body: `Interest research distinguishes triggered from maintained interest. Most triggered interests fade without support, which is why interest development needs environments that re-trigger it (see Ch. 6).` },
    { anchor: "passion as a compass", title: "Constructed passion", body: `O'Keefe, Dweck & Walton (2018) found people who see passions as "found" lose interest when difficulties arise, while those who see them as "developed" persist. Gettleman's story is a developed passion.` },
    { anchor: "Some psychologists like to call this an", title: "Ultimate concern", body: `From theologian Paul Tillich's *Dynamics of Faith* (1957). Robert Emmons used "ultimate concerns" in research on personal strivings and spirituality.` },
    { anchor: "positive fantasizing", title: "Mental contrasting", body: `Oettingen's experiments: fantasizing about a positive future lowers energy (measured by blood pressure) and effort. Mental contrasting (wish → obstacle) plus "if–then" plans (WOOP) improves follow-through across domains.` },
    { anchor: "You need one internal compass—not two, three, four, or five", title: "Goal conflict", body: `Goal conflict predicts rumination and lower well-being (Emmons & King, 1988). But multiple life domains (work, family) are normal; the issue is conflict *within* a domain. Duckworth admits living with two ultimate concerns.` },
    { anchor: "the highest-level goal gets written in ink", title: "Equifinality", body: `Goal-systems theory: when a goal has many substitutable means ("equifinality"), people persist at the goal by switching means. That is grit at the top, flexibility below.` },
    { anchor: "try, try again, then try something different", title: "Strategic persistence", body: `Research on "wise persistence" finds performance improves when people persist *and* change strategies after failure, rather than repeating them. Effort without strategy change is a common failure mode.` },
    { anchor: "nine out of ten things never work out", title: "Base rates of failure", body: `Creative fields have high failure base rates. Simonton finds even eminent creators produce many duds. Expecting failure as normal protects motivation.` },
    { anchor: "persistence of motive", title: "Cox's traits", body: `Cox's four indicators map neatly onto grit's facets. Cox's study had serious method limits, but the convergence with modern findings is interesting.` },
    { anchor: "high but not the highest intelligence, combined with the greatest degree of persistence", title: "Threshold theories", body: `"Threshold" hypotheses (e.g., for creativity: IQ matters up to about 120) are contested. SMPY data suggest ability differences matter even at the very top (Lubinski & Benbow). Cox's conclusion is plausible but historiometrically fragile.` },
  ],
});

SG.fill("grit", "ch05", {
  thesis: "Grit is partly heritable and partly learned. It rises with age, likely because life lessons and new situations demand it. It grows through four assets: interest, practice, purpose, hope.",
  overview: `"How much of our grit is in our genes?" Both genes and experience influence every trait. Height is heritable, yet averages rose by inches with nutrition. Talents are partly experience: Dan Chambliss's anatomy limited him, but bad coaching limited him more. Twin studies estimate grit heritability at 37% for perseverance and 20% for passion, and traits are polygenic. Crucially, "heritability estimates explain why people differ from the average, but they say nothing about the average itself." That is the **Flynn effect**: IQ scores rose about three points per decade, driven by a **social multiplier**, like basketball after television.

Grit is higher in older adults. Is that a cohort difference, or maturation? Personality research finds a **maturity principle**: people become more conscientious with experience, largely because "what changes… are our circumstances." Lucy potty-trains in a day in the "big kid" classroom; the headmaster's daughter stops being late once a job fires late workers. "Lectures don't have half the effect of consequences."

People quit because of four thoughts: I'm bored, the effort isn't worth it, this isn't important, I can't do this. Their antidotes are the four assets of Part II: **interest, practice, purpose, hope**.`,
  voice: `Every trait is shaped by both genes and experience. Heritability tells you why people differ from the average, not what the average could be. The environment can raise everyone, as height and IQ show.

Older adults score grittier, and I think it's partly because we grow up. Life teaches us lessons, and new situations demand new behavior. My daughter learned the potty in a day once she was in a classroom where that's what everyone did. Lectures don't have half the effect of consequences.

When people quit, they usually think one of four thoughts. The four psychological assets of gritty people, interest, practice, purpose and hope, counter them, and each can be grown.`,
  quotes: [
    { text: "Heritability estimates explain why people differ from the average, but they say nothing about the average itself." },
    { text: "Lectures don’t have half the effect of consequences." },
  ],
  diagrams: ["grit-assets"],
  sections: [
    { title: "Nature and nurture", gist: "Every trait is influenced by genes and experience; height's heritability and its dramatic rise with nutrition.", q: "Name a trait you assumed was fixed that might not be.", terms: ["heritability"] },
    { title: "Talent is partly experience", gist: "Dan Chambliss's ankles and his terrible coaches; with good coaching he swam as fast as in high school.", idea: "Not just nature, and not just nurture. Both.", q: "Where has bad coaching limited you?", terms: ["talent", "mentor"] },
    { title: "Twins and genes", gist: "Twin studies; grit heritability 37% (perseverance) and 20% (passion); polygenicity.", q: "What does a 37% heritability estimate mean, and not mean?", terms: ["heritability"] },
    { title: "Averages can move: the Flynn effect", gist: "Heritability says nothing about averages; IQ gains of ~15 points in 50 years; abstract reasoning; Flynn's basketball-and-TV social multiplier.", idea: "Each of us enriches the environment of all of us.", q: "Where have you seen a \"social multiplier\" raise a whole group's skill?", terms: ["flynn-effect", "heritability", "flywheel"] },
    { title: "Grit by age", gist: "Older adults score grittier; one explanation: cohort/culture (\"they don't work as hard these days\").", q: "Is the cohort explanation plausible to you?", terms: ["maturity-principle"] },
    { title: "The maturity principle", gist: "Cross-sectional vs. longitudinal; personality matures; life lessons; changing circumstances: Lucy's potty training, the American Eagle job; identity evolves.", idea: "What changes are our circumstances. We rise to the occasion.", q: "What situation forced you to grow up?", terms: ["maturity-principle", "conscientiousness", "situation"] },
    { title: "Why people quit", gist: "Not \"lazy\" or \"flaky\" but four thoughts: bored, not worth it, not important, can't do it.", q: "Which of the four thoughts preceded your last quitting?", terms: ["grit"] },
    { title: "Four psychological assets", gist: "Interest, practice, purpose, hope: their order of development and how each counters a quitting thought.", idea: "Hope defines every stage.", q: "Which asset is your strongest? Your weakest?", terms: ["interest", "deliberate-practice", "purpose", "learned-helplessness"] },
    { title: "Grow grit from the inside out", gist: "You can discover interests, build discipline, cultivate purpose, and teach yourself hope.", q: "Which Part II chapter do you most need?", terms: ["grit"] },
  ],
  origins: `**Behavioral genetics** (twin studies; Polderman et al.'s 2015 meta-analysis); **Rimfeld, Kovas, Dale & Plomin (2016)** for grit heritability; **Flynn**'s work and Dickens & Flynn's (2001) social multiplier; **Roberts and colleagues**' maturity principle and social investment theory.`,
  evidence: [
    { cite: "Rimfeld et al. (2016), \"True grit and genetics,\" *JPSP*", note: "~2,300 UK twin pairs. Grit moderately heritable; little prediction of GCSE results beyond Big Five." },
    { cite: "Flynn (1987); Dickens & Flynn (2001)", note: "Large environmental gains in IQ; the multiplier model." },
    { cite: "Roberts, Walton & Viechtbauer (2006), *Psychological Bulletin*", note: "Meta-analysis of mean-level personality change across the lifespan." },
  ],
  debates: `**Heritability misreadings.** A trait can be highly heritable and highly changeable. Heritability is population- and environment-specific. Duckworth's explanation is a model of clarity here.

**Cross-sectional age data.** Duckworth correctly notes that a snapshot can't separate cohort from age. Longitudinal personality data support maturation.

**This chapter's seed of *Situated*.** "What changes… are our circumstances… Necessity is the mother of adaptation" is a situational theory of personality development (social investment theory). It is the clearest bridge between the books.`,
  people: [["Robert Plomin", "Behavioral genetics; *Blueprint* (2018)."], ["James Flynn", "The Flynn effect; social multipliers."], ["Brent Roberts", "Personality development; the maturity principle; social investment theory."]],
  why: `It moves grit from "you have it or you don't" to something that changes, and identifies circumstances as one engine of change.`,
  terms: ["heritability", "flynn-effect", "maturity-principle", "conscientiousness", "interest", "purpose", "deliberate-practice", "learned-helplessness"],
  questions: {
    comprehension: ["What do heritability estimates tell us, and what don't they?", "Explain the Flynn effect and the social multiplier.", "What two explanations does Duckworth give for the age trend in grit?", "Name the four quitting thoughts and the four assets that counter them."],
    critical: ["How does social investment theory (roles change personality) prefigure *Situated*?", "Rimfeld et al. found grit adds little beyond the Big Five. Does that matter for the claim that grit grows?"],
    personal: ["What life role made you grittier?"],
    club: ["\"Lectures don't have half the effect of consequences.\" Agree?"],
  },
  annotations: [
    { anchor: "every human trait is influenced by both genes and experience", title: "Turkheimer's first law", body: `"All human behavioral traits are heritable" is Turkheimer's (2000) first law of behavior genetics. His second is that the shared family environment matters less than genes. His third is that a substantial portion of variation is neither genetic nor shared-family, the "nonshared" environment.` },
    { anchor: "the passion subscale to be 20 percent", title: "Interpreting heritability", body: `20–37% heritability means genetic differences account for that share of *variance* in this population and environment. The rest is environmental and error. It says little about any individual or about potential change.` },
    { anchor: "heritability estimates explain why people differ from the average, but they say nothing about the average itself", title: "Between vs. within", body: `This is the same logic as *Situated* Ch. 1's West Point trend: individual differences and population means can have different causes.` },
    { anchor: "social multiplier effect", title: "The multiplier and the flywheel", body: `Dickens & Flynn's multiplier is the scholarly cousin of *Situated*'s flywheel: individuals with a small edge seek or are placed in richer environments, which amplify the edge, and collectively raise everyone's environment.` },
    { anchor: "the grittiest adults in my sample were in their late sixties or older", title: "Cohort or age?", body: `Separating age, period and cohort effects requires repeated measures over time, the "age–period–cohort identification problem." It can't be solved with a single snapshot.` },
    { anchor: "what personality psychologists now call", title: "Maturity principle", body: `Roberts et al. (2006) found conscientiousness and emotional stability rise most between 20 and 40. Social investment theory attributes this to adult roles: work, partnership, parenting.` },
    { anchor: "What changes, I think, are our circumstances", title: "Grit's situational turn", body: `Here, a decade before *Situated*, Duckworth explains personality change by changing circumstances: new roles, new demands. It is a direct ancestor of "situations bring out different selves."` },
    { anchor: "Lectures don’t have half the effect of consequences", title: "Contingencies", body: `Behavior analysis has long held that consequences (reinforcement contingencies) shape behavior more than instructions. Rule-governed behavior is weaker without contingencies (Skinner).` },
    { anchor: "Hope is a rising-to-the-occasion kind of perseverance", title: "Hope theory", body: `Snyder's hope theory defines hope as agency ("I can") plus pathways ("I know how"). Duckworth's four thoughts in *Situated* ("I can do this!" "I know what to try next!") echo both.` },
  ],
});
