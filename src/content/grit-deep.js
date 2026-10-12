/* Graduate-seminar supplement for Grit: extends each chapter's "where it comes from" and
   "live debates", and adds scholar's notes and people. Merged into the chapters by SG.extend
   (strings are appended as new paragraphs, arrays are concatenated). */
SG.extend = (bid, id, obj) => {
  const ch = SG.books[bid].chapters.find((c) => c.id === id);
  if (!ch) throw new Error("No chapter " + bid + "/" + id);
  for (const k in obj) {
    const v = obj[k];
    if (Array.isArray(v)) ch[k] = (ch[k] || []).concat(v);
    else if (typeof v === "string") ch[k] = ch[k] ? ch[k] + "\n\n" + v : v;
    else ch[k] = v;
  }
};

SG.extend("grit", "preface", {
  origins: `**Where the question comes from.** "Talent or effort?" is one of psychology's oldest questions. Francis Galton's *Hereditary Genius* (1869) argued that eminence runs in families and needs "ability combined with zeal and with capacity for hard labour." Galton therefore gave effort a place from the start, even though he is remembered as a hereditarian. The twentieth century split the question into two literatures that rarely spoke: **psychometrics**, which measured ability (Binet, Terman, Spearman's *g*), and **motivation science**, which studied why people try (achievement motivation from McClelland and Atkinson, then expectancy-value theory and self-determination theory). *Grit* bridges the two by proposing a measurable, trait-like *motivational* variable that sits beside ability in prediction equations.`,
  debates: `**The framing itself.** Philosophers of science would say the preface sets up a *contrast class*: grit *rather than* talent. Critics note that this framing invites a zero-sum reading, even though Duckworth's own model is multiplicative (Ch. 3). When you read on, notice whether each study tests grit *against* talent (incremental validity) or *alongside* it (interaction). The two are different empirical claims.`,
  annotations: [
    { anchor: "You know, you’re no genius!", title: "A personal frame", body: `Opening with a parent's verdict turns the book into an argument with a *lay theory* of ability. Lay theories (Dweck's "implicit theories," Heider's "naive psychology") shape how people interpret effort and failure. The preface is, in effect, a case study of how one such theory was absorbed and then resisted.` },
  ],
  people: [["Walter Mischel", "Delay of gratification; the person–situation debate that *Situated* revisits."], ["David McClelland", "Achievement motivation (\"need for achievement\"); a precursor to grit research."]],
});

SG.extend("grit", "ch01", {
  origins: `**The lineage of the construct.** Grit has three ancestors. (1) **Conscientiousness** in the Big Five, especially its *industriousness* and *achievement-striving* facets (Costa & McCrae; DeYoung, Quilty & Peterson 2007). (2) **Goal theory**: long-term, superordinate goals organizing lower ones (Carver & Scheier's control theory; Austin & Vancouver 1996). (3) **Biographical studies of eminence**: Cox (1926) and later Simonton found "persistence of motive" among the eminent. The 2007 paper's innovation was not the idea but the *instrument*: a brief self-report scale that could be put into prediction studies in schools, the military and workplaces at scale.`,
  debates: `**Construct validity.** The *jangle fallacy* is giving a new name to an old construct (Kelley, 1927). Critics argue grit is largely conscientiousness relabeled. In Credé et al. (2017), the grit–conscientiousness correlation was about .84 after correction for unreliability. Defenders respond that grit's *consistency of interest* facet adds something conscientiousness scales don't capture, and that a domain-focused construct can be useful even if it overlaps with a broad trait.

**Facet asymmetry.** Several large studies find that **perseverance of effort** predicts outcomes while **consistency of interest** adds little or nothing (e.g., Disabato, Goodman & Kashdan 2019; later meta-analyses). Jachimowicz et al. (2018, *PNAS*) offered a reconciliation: perseverance predicts performance chiefly when *passion* (for the specific pursuit) is also present, which supports Duckworth's insistence on both halves.

**Short grit scale.** Grit-S (Duckworth & Quinn 2009) has 8 items. Grit-O has 12. The 10-item version in Ch. 4 is a book variant. In practice, findings differ somewhat by version, so ask which scale a study used.`,
});

SG.extend("grit", "ch02", {
  origins: `**Why we discount effort.** Attribution theory supplies the mechanism behind naturalness bias. Kelley's **discounting principle** says that when an outcome has two plausible causes, evidence for one (visible effort) lowers our confidence in the other (ability). Kruger et al.'s (2004) **effort heuristic** shows the reverse in judging *products*: we rate work as better when told it took longer. So we admire effortful *things* and effortless *people*.`,
  debates: `**Updated validity estimates.** The chapter's critics usually cite Schmidt & Hunter (1998) for the predictive power of ability. Sackett, Zhang, Berry & Lievens (2022) re-estimated those figures with corrected range-restriction methods and found cognitive ability's validity for job performance lower than long believed. Structured interviews and job-knowledge tests do as well or better. Talent still matters, but the gap with other predictors is smaller.

**Self-fulfilling prophecy.** Rosenthal & Jacobson's *Pygmalion in the Classroom* (1968) is famous but contested. Jussim & Harber's (2005) review concludes expectancy effects are real but usually small and fade, and are larger for stigmatized groups. Duckworth's teaching anecdote is consistent with this, but it's an anecdote.`,
  annotations: [
    { anchor: "Enron was named America’s Most Innovative Company", title: "The Enron case", body: `Gladwell's argument (2002) was that a culture that rewards *being seen as* brilliant over doing reliable work encourages narcissism and risk-taking. Organizational researchers would add that Enron's failure was overdetermined: incentive design, accounting rules, and governance failures all mattered. It is a vivid example, not a controlled test.` },
  ],
  people: [["Malcolm Gladwell", "\"The Talent Myth\" (2002); later popularized the \"10,000-hour rule\" (2008)."], ["Paul Sackett", "Industrial-organizational psychologist; revised estimates of what predicts job performance (2022)."]],
});

SG.extend("grit", "ch03", {
  origins: `**Skill and output, studied separately.** "Talent × effort = skill; skill × effort = achievement" spans two research traditions. **Skill acquisition** research (Fitts & Posner's stages; Anderson's ACT theory; Ericsson's deliberate practice) studies how effort becomes skill. **Productivity** research (Simonton's "equal-odds rule": the more works a creator produces, the more hits) studies how skill becomes achievement through output.`,
  debates: `**Additive or multiplicative?** Van Iddekinge et al.'s (2018) meta-analysis of ability and motivation in job performance found mostly *additive* effects, with weak interactions. So the multiplication signs are a teaching device, not a fitted model. The conceptual point, that effort enters twice, survives either way.

**The Grant Study treadmill.** The 1940s Harvard Fatigue Laboratory treadmill test and George Vaillant's follow-up form an intriguing archival finding. But it rests on a small, elite, all-male, white sample, many outcomes and a long chain of inference. Treat it as illustrative rather than probative.`,
  annotations: [
    { anchor: "130 sophomores were asked to run on a treadmill", title: "Archival samples", body: `The Grant Study (begun 1938) followed Harvard men for decades, which made it famous and also limits it. Findings may not generalize across gender, class or race, and the number of outcomes examined raises the risk of chance associations (the "garden of forking paths").` },
    { anchor: "a good potter can make forty or fifty pots in a day", title: "Quantity breeds quality", body: `Simonton's equal-odds rule: across a career, the ratio of hits to total works is roughly constant, so the most prolific creators produce the most masterpieces *and* the most duds. MacKenzie's "some good, some mediocre" is the craftsman's version of the same law.` },
  ],
  people: [["Anders Ericsson", "Deliberate practice; the expertise tradition that grounds the \"effort counts twice\" idea (Ch. 7)."]],
});

SG.extend("grit", "ch04", {
  origins: `**Control theory and goal shielding.** The pyramid of goals comes from cybernetic **control theory** (Powers 1973; Carver & Scheier 1981, 1998), in which "be" goals (identity) sit above "do" goals, with feedback loops at each level. Buffett's "avoid-at-all-cost list" (attributed to him; the story's provenance is uncertain) is a folk version of **goal shielding**: active goals inhibit competing ones (Shah, Friedman & Kruglanski 2002). **Harmonious vs. obsessive passion** (Vallerand et al. 2003) refines what "staying in love" should mean: passion that fits with the rest of life, rather than controlling it, predicts sustained engagement and well-being.`,
  debates: `**Self-report and reference bias.** When you take the Grit Scale, you compare yourself to "most people." But "most people" differs by context: students at demanding schools may rate themselves *lower* because their reference group is grittier. West, Kraft et al. (2016) found that some high-performing charter schools had students with *lower* self-reported grit and self-control despite better behavioral outcomes. That is reference bias.

**Faking and stakes.** Self-report scales are easily faked when stakes are high. Duckworth & Yeager (2015, *Educational Researcher*) argued against using grit scores for accountability or admissions. That is a point worth raising whenever schools adopt "grit report cards."

**Passion vs. consistency.** Some researchers argue the "passion" items measure *stability of interests*, not passion as most people understand it. Jachimowicz et al. (2018) showed that measuring passion directly improves prediction.`,
  people: [["Robert Vallerand", "Dualistic model of passion: harmonious vs. obsessive."], ["Arie Kruglanski", "Goal systems theory: equifinality, multifinality, goal shielding."]],
});

SG.extend("grit", "ch05", {
  debates: `**What the twin study also found.** The same Rimfeld et al. (2016) study found that grit added little to predicting academic achievement once the other Big Five traits were controlled for. That finding is worth discussing next to the chapter's optimism.

**Can grit be taught?** Experiments that target grit directly are few and show modest effects. Interventions on related targets (growth mindset, purpose, self-control strategies) show small average effects with meaningful variation across settings. This is the bridge to *Situated*'s argument that changing situations may be more effective than exhorting individuals.`,
  annotations: [
    { anchor: "Digging through the raw scores of IQ tests", title: "Where the Flynn gains are", body: `Gains are largest on fluid, abstract-reasoning tests (like Raven's matrices) and smallest on vocabulary and arithmetic. Flynn's interpretation is that modern environments trained "scientific spectacles," habits of classifying and hypothesizing. Some recent data from Scandinavia show the effect stalling or reversing, which within-family analyses attribute to environmental rather than genetic causes (Bratsberg & Rogeberg 2018).` },
  ],
  people: [["Eric Turkheimer", "\"Three laws of behavior genetics\"; critic of naive readings of heritability."], ["Kaili Rimfeld", "Lead author of the twin study of grit's heritability (2016)."]],
});

SG.extend("grit", "ch06", {
  debates: `**Passion follows competence?** Critics of "follow your passion" (e.g., Cal Newport, *So Good They Can't Ignore You*, 2012) argue that passion often *follows* skill, autonomy and recognition rather than preceding them. That is compatible with Duckworth's "development" and "deepening" phases.

**Who gets to explore?** Discovery takes time, money and low stakes, which are unevenly distributed. Sociologist Annette Lareau's "concerted cultivation" (*Unequal Childhoods*) shows that affluent families structure children's exploration far more. When the chapter says interests must be "triggered again and again," ask: by whom, and for whom?`,
  annotations: [
    { anchor: "three different stages, each lasting several years", title: "Bloom's stages", body: `Bloom's retrospective interview design means stages are reconstructed by successful people and their parents. Survivors' accounts may smooth over false starts. Still, Côté's (1999) developmental model of sport participation, "sampling years" before "specializing" and "investment," independently found a similar sequence.` },
    { anchor: "I call them short-termers", title: "Turnover and fit", body: `Organizational research distinguishes turnover driven by poor fit from turnover driven by better alternatives. Jane Golden's "short-termers" may be people still in the discovery phase. That is not necessarily a deficit, since a broad early "sampling" phase predicts later expertise in many domains (Epstein's *Range*, 2019).` },
  ],
  people: [["Suzanne Hidi", "Four-phase model of interest development (with K. Ann Renninger)."], ["Paul O'Keefe", "Implicit theories of interest: \"find\" vs. \"develop\" your passion."]],
});

SG.extend("grit", "ch07", {
  origins: `**Before Ericsson.** Chase & Simon's chess studies (1973) showed that masters perceive meaningful "chunks" rather than individual pieces, so expertise is domain knowledge, not general brilliance. Afterward, the popular "10,000-hour rule" (Gladwell, *Outliers*, 2008) simplified deliberate practice into a number, and Ericsson objected that the quality and design of practice matter, not the hours alone (Ericsson & Pool, *Peak*, 2016).`,
  debates: `**The numbers.** Macnamara, Hambrick & Oswald's (2014) meta-analysis found deliberate practice explained about 26% of the variance in performance in games, 21% in music, 18% in sports, 4% in education and under 1% in professions. Ericsson replied that many included studies didn't measure *deliberate* practice properly. A 2019 replication of the violin study (Macnamara & Maitra) found smaller group differences than the original.

**Practice and ability together.** Hambrick and colleagues propose a multifactorial gene–environment model. Twin studies even find that practice *itself* is partly heritable (Mosing et al. 2014). Duckworth's position fits this model better than the strong "practice is all" view she's sometimes credited with.

**Is deliberate practice aversive?** Ericsson held that it is "not inherently enjoyable." Duckworth's survey data suggest that grittier people find effortful practice *both* hard *and* rewarding. That is consistent with Eisenberger's learned industriousness (Ch. 11).`,
  annotations: [
    { anchor: "I probably spend 70 percent of my time by myself", title: "Solitary practice", body: `In the violin study, the best students' time spent practicing alone was the strongest single discriminator. Solitary practice allows full control over difficulty and immediate repetition after errors. Team sports complicate the picture: much of their deliberate practice is coach-designed and social.` },
  ],
  people: [["David Z. Hambrick", "Multifactorial gene–environment model of expertise."], ["William Chase & Herbert Simon", "Chess chunking; founding studies of expert memory."]],
});

SG.extend("grit", "ch08", {
  origins: `**Existential and experimental roots.** Viktor Frankl's *Man's Search for Meaning* (1946) is the existential ancestor of purpose research. Carol Ryff's model of psychological well-being (1989) made "purpose in life" measurable. Adam Grant's field experiments supply causal evidence for prosocial motivation: call-center fundraisers who briefly met a student helped by their work went on to raise substantially more money (Grant et al. 2007).`,
  debates: `**Passion exploitation.** Kim, Campbell, Shepherd & Kay (2020, *JPSP*) found that people judge it more legitimate to extract unpaid or extra work from employees seen as passionate. That extends Bunderson & Thompson's zookeeper finding from the worker's side to the employer's.

**Self-transcendent purpose interventions.** Yeager et al. (2014, *JPSP*) found that brief "purpose for learning" exercises increased persistence on tedious tasks and modestly improved grades. Effects are small and context-dependent, which is typical of brief psychological interventions.

**Hedonic vs. eudaimonic.** Some researchers question whether the two can be cleanly separated empirically, since their measures correlate highly (Kashdan, Biswas-Diener & King 2008). Use the distinction as a lens, not a typology.`,
  annotations: [
    { anchor: "eudaimonic", title: "Eudaimonia, carefully", body: `In Aristotle, *eudaimonia* is not a feeling but an activity: the exercise of virtue over a complete life. Modern psychology's "eudaimonic well-being" turns it into self-reported meaning, growth and purpose. That is a useful operationalization, but it shifts the concept from the objective to the subjective.` },
    { anchor: "Amy calls this idea", title: "Job crafting evidence", body: `Job crafting includes task crafting (changing what you do), relational crafting (whom you work with) and cognitive crafting (how you frame the work). Field experiments show modest gains in well-being and performance (Berg, Dutton & Wrzesniewski; later meta-analyses by Rudolph et al. 2017). This is *Situated*'s "situation selection and modification" applied to a job.` },
    { anchor: "How could the world be a better place?", title: "Linking self to world", body: `The prompt asks students to connect mundane schoolwork to a self-transcendent aim. The mechanism is thought to be a reframing of boredom: when a task serves a valued purpose, its tedium is reinterpreted as worthwhile effort rather than wasted time.` },
  ],
  people: [["Viktor Frankl", "*Man's Search for Meaning*; logotherapy and the will to meaning."], ["Carol Ryff", "Psychological well-being model including purpose in life."], ["J. Stuart Bunderson & Jeffery Thompson", "Zookeeper study: callings as a double-edged sword."]],
});

SG.extend("grit", "ch09", {
  origins: `**Helpless and mastery-oriented children.** Before *Mindset*, Diener & Dweck (1978) observed children solving problems aloud. After failure, "helpless" children blamed their ability and their strategies deteriorated. "Mastery-oriented" children barely mentioned failure and instead instructed themselves to try harder or differently. Those transcripts are the observational seed of implicit-theories research.`,
  debates: `**The neuroscience of the reversal.** In "Learned Helplessness at Fifty" (*Psychological Review*, 2016), Maier & Seligman locate the default passive response in the dorsal raphe nucleus. What is learned is control: the ventromedial prefrontal cortex detects controllability and inhibits that default. The chapter's quote about "higher-order brain areas" reflects this update.

**Ongoing mindset replication debate.** Macnamara & Burgoyne's (2023, *Psychological Bulletin*) meta-analysis argued that, after accounting for study quality and potential bias, average effects of mindset interventions are close to zero. Proponents counter that effects are expected only for some students in some schools. Both sides agree that context, the situation, moderates the effect.

**Optimism's limits.** Unrealistic optimism can undermine effort (Oettingen's positive fantasies, Ch. 4). Duckworth's hope is *grounded*: "I have learned how to change my situation," not "it will turn out fine."`,
  annotations: [
    { anchor: "Steve Maier and his students designed an experiment nearly identical", title: "Inoculation by control", body: `In these rat studies, experiencing controllable stress first protected animals from the effects of later uncontrollable stress, and the protection depended on the prefrontal cortex. That is a neural basis for "stress inoculation" and for Outward Bound–type programs. The leap from rats to people is plausible but should be made carefully.` },
    { anchor: "regulated by higher-order brain areas", title: "Appraisal and the brain", body: `This is appraisal theory (Lazarus) restated in neural terms: the meaning we assign to a stressor, controllable or not, modulates the physiological response. *Situated*'s Three Boxes model places this in Box Two, thoughts, between situation and response.` },
  ],
  people: [["Lyn Abramson", "Reformulated helplessness theory; hopelessness theory of depression."], ["Richard Lazarus", "Appraisal theory of stress and coping."], ["Brooke Macnamara", "Critical meta-analyses of mindset interventions."]],
});

SG.extend("grit", "ch10", {
  origins: `**Attachment.** The deeper root of "supportive" parenting is attachment theory (Bowlby; Ainsworth): a responsive caregiver provides a *secure base* from which a child dares to explore and attempt hard things. Read "demanding and supportive" as a secure base *plus* high expectations.`,
  debates: `**Better causal evidence.** Correlational parenting studies can't rule out genes or child effects. Randomized parenting interventions can. For example, the Family Check-Up (Dishion and colleagues) shows that changing parents' monitoring and positive engagement changes children's behavior. Long-run effects on traits like grit are not established.

**Teachers too.** Ferguson's Tripod surveys were used in the large Measures of Effective Teaching project, where students' perceptions of teacher support and challenge predicted learning gains. That extends "supportive and demanding" beyond the family.`,
  annotations: [
    { anchor: "proposed a moratorium on further research on parenting styles", title: "Settled science?", body: `Steinberg's "moratorium" was rhetorical: he meant the basic authoritative-parenting finding had replicated enough. Some developmentalists disagree, arguing that the typology is too coarse and that specific *practices* (monitoring, autonomy granting, harsh discipline) should be studied instead of global styles.` },
  ],
  people: [["Eleanor Maccoby", "Reorganized parenting styles into responsiveness × demandingness."], ["Annette Lareau", "*Unequal Childhoods*; class differences in \"concerted cultivation.\""]],
});

SG.extend("grit", "ch11", {
  debates: `**Pay-to-play.** Participation in school sports and arts has become more expensive and more unequal (Putnam 2015; Snellman et al. 2015). If follow-through predicts success *and* access is income-graded, colleges' use of extracurriculars in admissions may compound inequality. That is a *Situated*-style point about situational responsibility.

**The Hard Thing Rule as a commitment device.** Economists call rules adopted in advance to bind future choices *commitment devices* (Schelling; Bryan, Karlan & Nelson 2010). They can build habits, but too-rigid rules may teach compliance rather than intrinsic interest. Note the rule's built-in autonomy: "you pick your hard thing."`,
  annotations: [
    { anchor: "One horse did win, and by a long stretch: follow-through", title: "The horse race", body: `"Horse race" analyses enter many predictors at once and see which survive. That is informative, but the winner depends on how reliably each predictor was measured. A well-measured construct (follow-through, coded from records) can beat a poorly measured one (a brief questionnaire) for reasons of reliability, not importance.` },
    { anchor: "followed eleven thousand American teenagers", title: "Dosage", body: `Gardner and colleagues found benefits for educational attainment and civic engagement mainly for students who participated for two or more years: a "dose–response" pattern, which is one criterion (Bradford Hill) that strengthens a causal reading.` },
  ],
  people: [["Margo Gardner", "Longitudinal study of extracurricular participation and young-adult outcomes."], ["Thomas Schelling", "Commitment devices and self-binding."]],
});

SG.extend("grit", "ch12", {
  origins: `**Selection into cultures.** Benjamin Schneider's **attraction–selection–attrition** model (1987) argues that organizations become homogeneous because similar people are attracted, selected and retained. **Person–organization fit** research (O'Reilly, Chatman & Caldwell 1991) shows that value fit predicts commitment and turnover.`,
  debates: `**Selection vs. socialization.** Do gritty cultures *make* people grittier, or *attract and retain* the already gritty? Selection alone can produce a gritty-looking culture. Disentangling the two needs longitudinal within-person data, which the chapter's examples (Seahawks, UNC, JPMorgan) don't provide. They illustrate the mechanism; they don't test it.

**Strong cultures' costs.** Strong cultures improve coordination but can suppress dissent and invite groupthink (Janis 1972).

**Measuring culture.** Survey "climate" measures (shared perceptions) are easier to collect than "culture" (deep assumptions), and most quantitative culture research actually measures climate.`,
  annotations: [
    { anchor: "Competition Wednesdays", title: "Ritualized challenge", body: `A weekly ritual of competition-level practice standardizes challenge, so everyone faces stretch conditions on a schedule. That is *situation design*: instead of hoping individuals seek difficulty, the environment guarantees it. *Situated* calls this kind of lever setting up the situation.` },
    { anchor: "Fortitude is to Jamie Dimon what sisu is to Finland", title: "Leaders as culture carriers", body: `Schein argued that leaders shape culture chiefly through what they pay attention to, how they react to crises, and whom they reward, promote and fire, more than through slogans. Dimon's personal "fortitude" story matters for culture only insofar as it is enacted in those mechanisms.` },
  ],
  people: [["Edgar Schein", "Layered model of organizational culture; leaders as culture builders."], ["Benjamin Schneider", "Attraction–selection–attrition model."], ["Daphna Oyserman", "Identity-based motivation theory."]],
});

SG.extend("grit", "ch13", {
  debates: `**Which facet carries well-being?** In a large international sample, Disabato, Goodman & Kashdan (2019) found that perseverance of effort related to well-being and strengths, while consistency of interest contributed little. That fits the facet asymmetry seen elsewhere (Ch. 1).

**The politics of grit.** Educators and sociologists have criticized school "grit" programs for putting the burden of overcoming structural disadvantage on individual children. *Situated* can be read as Duckworth's own answer: grit is necessary but not sufficient, and situations, including policies, must change too.`,
  annotations: [
    { anchor: "I’m no genius, and neither is he", title: "Closing the frame", body: `The book ends where it began: with the father's verdict, now reinterpreted. Narrative psychologists (McAdams) call this a *redemptive* arc, where a negative event is reframed into growth. Redemptive self-narratives correlate with generativity and well-being in American samples, though McAdams notes they are culturally specific.` },
  ],
  people: [["Carsten Wrosch", "Goal disengagement and re-engagement as adaptive self-regulation."], ["Dan McAdams", "Narrative identity; redemptive life stories."]],
});
