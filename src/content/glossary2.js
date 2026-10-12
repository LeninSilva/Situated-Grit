/* Glossary, part 2: the vocabulary of Grit, plus research-methods terms for reading the evidence. */
Object.assign(SG.glossary, {
  grit: {
    term: "Grit", cat: "Grit", aka: ["passion and perseverance for long-term goals"],
    short: "Duckworth's term for the combination of passion (consistent interest in a long-term goal) and perseverance (sustained effort despite setbacks).",
    deep: `In *Grit* (2016), grit has two components, measured by the Grit Scale. **Passion** in Duckworth's sense is not intensity but *consistency*: holding the same top-level goal for a long time. **Perseverance** is working hard and bouncing back. Gritty people have "not only determination, they had direction."

*Grit*'s headline findings: grit predicted who completed West Point's Beast Barracks better than the academy's own "Whole Candidate Score," who advanced at the National Spelling Bee, and who stayed in sales jobs and graduated from Chicago high schools. Grit was essentially uncorrelated with measured talent.

*Situated* keeps grit and reframes it: grit is "necessary but not sufficient," and situations shape how gritty anyone is in a given setting.`,
    origin: `Duckworth, Peterson, Matthews & Kelly (2007), *JPSP*; Duckworth & Quinn (2009), Short Grit Scale; earlier echoes in Galton's "zeal" and "capacity for hard labor" (1869) and William James's "The Energies of Men" (1907).`,
    debate: `**Overlap with conscientiousness:** Credé, Tynan & Harms's (2017) meta-analysis (88 samples, ~67,000 people) found grit correlates very highly with conscientiousness (ρ≈.84) and predicts performance only modestly (ρ≈.18 for academic performance). The perseverance facet did most of the work, and the claimed higher-order structure was not supported. **Heritability:** in a UK twin study, grit was moderately heritable and added little prediction of exam results beyond Big Five personality (Rimfeld et al., 2016). **Use in schools:** Duckworth herself warned against grading schools on grit (NYT, 2016) and against using self-report character scales for accountability (Duckworth & Yeager, 2015). **Structural critique:** education writers argued "grit" can shift attention from inequality to children's character (e.g., Kohn, 2014; Ris, 2015). *Situated* can be read partly as a response to that last critique.`,
    find: ["grit"], where: [["grit", "ch01", "defined and measured"], ["grit", "ch04", "Grit Scale"], ["situated", "ch01", "Beyond Grit"], ["situated", "ch13"]],
    related: ["grit-scale", "conscientiousness", "passion-consistency", "perseverance", "self-control"],
  },
  "grit-scale": {
    term: "Grit Scale", cat: "Grit", aka: ["Grit-O", "Grit-S", "Short Grit Scale"],
    short: "A brief self-report questionnaire measuring passion (consistency of interests) and perseverance (of effort). Scores run from 1 (not at all gritty) to 5 (extremely gritty).",
    deep: `The original Grit Scale (Grit-O) had 12 items; the Short Grit Scale (Grit-S) has 8. The book's 10-item version mixes perseverance items ("I finish whatever I begin") with reverse-scored passion items ("My interests change from year to year"). Duckworth wrote items "sometimes verbatim" from interviews with high achievers.

Self-report has known limits: social desirability, and **reference bias**. People judge themselves against local standards, so students at demanding schools can rate themselves *less* conscientious than students at lax schools (West et al., 2016). That is a situational artifact Duckworth has written about.`,
    origin: `Duckworth et al. (2007); Duckworth & Quinn (2009), *Journal of Personality Assessment*.`,
    debate: `Psychometric reviews find good internal reliability but question the two-facet structure. The consistency-of-interests facet is weaker and behaves differently across cultures, being less predictive in collectivist samples (Datu, Valdez & King, 2016). Disabato, Goodman & Kashdan (2019) argue perseverance is the active ingredient.`,
    find: ["Grit Scale"], where: [["grit", "ch01"], ["grit", "ch04", "take the scale"]], related: ["grit", "reference-bias", "conscientiousness"],
  },
  "passion-consistency": {
    term: "Passion (as consistency of interest)", cat: "Grit", aka: ["consistency of interests"],
    short: "In Grit, passion means steadiness: caring about the same ultimate goal over years. It is not fiery emotion.",
    deep: `Duckworth's redefinition is easy to miss: "passion" is a *compass*, not a fireworks display. The Grit Scale's passion items ask whether your interests shift, whether new ideas distract you from old ones, and whether you lose interest in projects. The goal-hierarchy diagram makes it concrete: a stable top-level goal organizing many changeable lower-level goals.`,
    origin: `Duckworth et al. (2007); *Grit*, Ch. 4.`,
    debate: `Psychologists of passion (Vallerand's dualistic model) distinguish *harmonious* from *obsessive* passion; obsessive passion predicts burnout and conflict. Jachimowicz et al. (2018, *PNAS*) argued Grit's consistency facet misses "passion attainment," the felt sense of loving the work, which predicted performance when combined with perseverance.`,
    find: ["consistency"], where: [["grit", "ch04"], ["grit", "ch06"]], related: ["grit", "goal-hierarchy", "interest", "perseverance"],
  },
  perseverance: {
    term: "Perseverance (of effort)", cat: "Grit",
    short: "Sustained hard work, and getting back up after failure. It is the facet of grit that best predicts outcomes in the research.",
    deep: `Grit Scale perseverance items include "Setbacks don't discourage me" and "I am diligent." In the large meta-analyses (Credé et al., 2017), perseverance correlated with performance more strongly than consistency of interests did, and it is closest to the "industriousness" aspect of conscientiousness.`,
    origin: `Duckworth et al. (2007).`,
    find: [], where: [["grit", "ch01"], ["grit", "ch04"]], related: ["grit", "passion-consistency", "conscientiousness"],
  },
  conscientiousness: {
    term: "Conscientiousness", cat: "Personality psychology", aka: ["Big Five", "industriousness", "orderliness"],
    short: "One of the Big Five personality traits: being organized, dependable, hardworking, and self-disciplined. It is the strongest personality predictor of job and school performance.",
    deep: `The Big Five (openness, conscientiousness, extraversion, agreeableness, neuroticism) emerged from factor analyses of personality language. Conscientiousness predicts grades, job performance, health behaviors, and longevity (Roberts et al., 2007; Bogg & Roberts, 2004). It has two aspects: industriousness (closest to grit's perseverance) and orderliness.

*Grit* (Ch. 1) reports that grit predicted sales retention and high-school graduation better than conscientiousness. Later meta-analyses complicate that.`,
    origin: `Goldberg (1990); Costa & McCrae's NEO inventories; DeYoung, Quilty & Peterson (2007) on aspects.`,
    debate: `The **jangle fallacy** (Kelley, 1927) is giving a new name to an old construct. Credé et al. (2017) argued grit may be largely a jangle of conscientiousness. Duckworth's response is that grit emphasizes *long-term* stamina toward one goal, a narrower and more specific predictor. Conscientiousness also rises through adulthood (the **maturity principle**; Roberts, Walton & Viechtbauer, 2006), consistent with *Grit*'s Ch. 5 age data.`,
    find: ["conscientiousness"], where: [["grit", "ch01"], ["grit", "ch05"]], related: ["grit", "self-control", "maturity-principle"],
  },
  "maturity-principle": {
    term: "Maturity principle", cat: "Personality psychology",
    short: "The finding that, on average, people become more conscientious, agreeable, and emotionally stable as they age, especially between 20 and 40.",
    deep: `Roberts, Walton & Viechtbauer's (2006) meta-analysis of 92 longitudinal samples found mean-level increases in conscientiousness and emotional stability across adulthood. Proposed causes include social roles (work, partnership, parenting) that reward reliability, which is a situational account of personality change.

*Grit*'s Ch. 5 shows older adults scoring higher on the Grit Scale, and offers both a cohort explanation and this maturation explanation. Duckworth favors maturation driven by life lessons and roles.`,
    origin: `Roberts, Walton & Viechtbauer (2006), *Psychological Bulletin*; Social Investment Theory (Roberts, Wood & Smith, 2005).`,
    debate: `Cross-sectional data like *Grit*'s age graph can't separate aging from generational (cohort) differences. Longitudinal studies are needed, and they generally support maturation.`,
    find: [], where: [["grit", "ch05"]], related: ["conscientiousness", "heritability"],
  },
  talent: {
    term: "Talent", cat: "Grit",
    short: "In Grit, the rate at which your skill improves when you invest effort: how fast you climb the learning curve. It is real, but over-weighted.",
    deep: `Duckworth's narrow definition lets her separate talent cleanly from achievement. Talent × effort = skill; skill × effort = achievement. Her complaint is not that talent doesn't exist but that we are "distracted" by it, so effort, practice, and situations go unnoticed.`,
    origin: `*Grit*, Ch. 3. Compare Galton (1869) on innate "ability"; Chambliss (1989) on talent as a lay explanation that "mystifies" excellence.`,
    debate: `Behavior-genetic research finds most abilities substantially heritable, and deliberate-practice research leaves a lot of variance unexplained by practice (Macnamara et al., 2014). Duckworth's two equations are a conceptual sketch, not a fitted model. Talent may also affect *how much* effort people invest, since early success breeds motivation.`,
    find: ["talent"], where: [["grit", "ch02"], ["grit", "ch03"]], related: ["effort-counts-twice", "naturalness-bias", "heritability", "deliberate-practice"],
  },
  "naturalness-bias": {
    term: "Naturalness bias", cat: "Social psychology", aka: ["naturals vs. strivers"],
    short: "Chia-Jung Tsay's finding that people say effort matters most but, in practice, judge a \"natural\" more favorably than an equally accomplished \"striver.\"",
    deep: `In Tsay & Banaji (2011), professional musicians heard the same pianist but rated the one described as a natural as more likely to succeed. In entrepreneurship studies, a striver needed about four more years of leadership experience and $40,000 more capital to be judged equal to a natural (Tsay, 2016). It is a *revealed* preference that contradicts the *stated* one.`,
    origin: `Tsay & Banaji (2011), *JESP*; Tsay (2016), *PSPB*.`,
    find: ["naturalness bias"], where: [["grit", "ch02"]], related: ["talent", "fundamental-attribution-error"],
  },
  "effort-counts-twice": {
    term: "Effort counts twice", cat: "Grit",
    short: "Duckworth's model in two equations: talent × effort = skill, and skill × effort = achievement. Effort builds skill and also makes skill productive.",
    deep: `The point of writing it as two multiplications is that effort appears in both. Someone "twice as talented but half as hardworking" might reach the same skill level but will produce "dramatically less over time," because achievement requires using skill. Woody Allen's "80 percent of success is showing up" and Will Smith's treadmill appear as illustrations.`,
    origin: `*Grit*, Ch. 3.`,
    debate: `Treat it as a theory sketch. Real relationships are not neatly multiplicative, and talent and effort are not independent: people invest more where they get faster returns. It is a useful corrective to talent-worship, and it later meets *Situated*'s point that situations shape effort itself.`,
    find: ["effort counts twice"], where: [["grit", "ch03"]], related: ["talent", "deliberate-practice", "grit"],
  },
  "whole-candidate-score": {
    term: "Whole Candidate Score", cat: "Grit",
    short: "West Point's weighted admissions index (test scores, class rank, leadership potential, fitness). It predicted almost everything about cadets except who quit during Beast Barracks.",
    deep: `Duckworth's first West Point study (2004, n=1,218) found grit was unrelated to the Whole Candidate Score and predicted completion of Beast; the Score didn't. Among cadets who stayed, the Score predicted grades, military ratings, and fitness. Talent predicts performance; grit predicts *staying*.

A 2019 *PNAS* paper (Duckworth et al., "Cognitive and noncognitive predictors of success") followed over 11,000 cadets and found grit predicted graduation, while cognitive ability better predicted academic grades. *Situated* (Ch. 1) adds that completion rates rose over decades as West Point shifted from an "attrition model" to a "developmental model." The culture changed, not the cadets.`,
    origin: `Duckworth et al. (2007); Duckworth et al. (2019), *PNAS*.`,
    find: ["Whole Candidate Score"], where: [["grit", "ch01"], ["situated", "ch01", "West Point's culture"]], related: ["grit", "talent"],
  },
  heritability: {
    term: "Heritability", cat: "Behavioral genetics",
    short: "The proportion of variation in a trait within a population that is statistically associated with genetic differences. It says nothing about how changeable the trait is or about individuals.",
    deep: `*Grit*'s Ch. 5 makes three key points. Traits are influenced by both genes and experience. Most traits are polygenic, shaped by many genes of tiny effect. And heritability describes *variance* around a mean, not the mean itself: height is highly heritable, yet average height rose dramatically over a century because of nutrition.

Twin studies estimate heritability by comparing identical and fraternal twins; grit's estimates are about 20–40%, depending on the facet (Rimfeld et al., 2016).`,
    origin: `Galton (twin method, 1875); Falconer's formula; Polderman et al. (2015) meta-analysis of 50 years of twin studies (average heritability ~49% across traits).`,
    debate: `Heritability is population- and environment-specific. In more equal environments, more of the remaining variance is genetic, so high heritability can be a sign of *fair* opportunity. Gene–environment correlation (people with certain genes seek certain situations) blurs the line between nature and situation, which links straight to *Situated*'s flywheel.`,
    find: ["heritability"], where: [["grit", "ch05"]], related: ["flynn-effect", "talent", "flywheel"],
  },
  "flynn-effect": {
    term: "Flynn effect", cat: "Behavioral genetics",
    short: "The large rise in average IQ test scores across the 20th century, roughly three points per decade, far too fast to be genetic.",
    deep: `James Flynn documented the rise across dozens of countries. Gains were largest on abstract-reasoning tests (Raven's matrices), suggesting modern environments trained new habits of mind: schooling, scientific thinking, complex work. Dickens & Flynn (2001) proposed a **social multiplier**: small advantages draw people into richer environments, which amplify the advantage. It is the theoretical ancestor of *Situated*'s flywheel.

*Grit* (Ch. 5) uses it to show that highly heritable traits can still shift a lot with the environment.`,
    origin: `Flynn (1984, 1987); Dickens & Flynn (2001), *Psychological Review*.`,
    debate: `Several countries show a recent reversal ("negative Flynn effect"), with environmental rather than genetic causes (Bratsberg & Rogeberg, 2018).`,
    find: ["Flynn effect"], where: [["grit", "ch05"]], related: ["heritability", "flywheel"],
  },
  "goal-hierarchy": {
    term: "Goal hierarchy", cat: "Motivation",
    short: "Goals arranged from concrete low-level tasks up to a single abstract top-level goal (an \"ultimate concern\") that gives the lower goals their purpose.",
    deep: `*Grit* (Ch. 4) uses the hierarchy to clarify what grit is *not*: stubbornly pursuing every low-level goal. Low-level goals are means and should be swapped when they fail. Bob Mankoff submitted his *New Yorker* cartoons in batches of ten because "nine out of ten things never work out." Gritty people have a well-aligned hierarchy, with most mid-level goals serving the top one.

Warren Buffett's "two-list" prioritizing exercise, with Duckworth's added step ("To what extent do these goals serve a common purpose?"), is the practical tool.`,
    origin: `Control theory of self-regulation (Carver & Scheier, 1981, 1998); goal-systems theory (Kruglanski et al., 2002); Pete Carroll's "life philosophy."`,
    debate: `The Buffett "avoid at all costs" story is widely told but likely apocryphal. Goal-systems research shows that a goal served by many means is pursued more flexibly, and that one means serving many goals ("multifinality") is attractive.`,
    find: ["top-level goal"], where: [["grit", "ch04"]], related: ["ultimate-concern", "passion-consistency", "purpose"],
  },
  "ultimate-concern": {
    term: "Ultimate concern", cat: "Grit",
    short: "The top of the goal hierarchy: the abstract, enduring aim that organizes everything else. Duckworth borrows the phrase from theologian Paul Tillich.",
    deep: `For Tillich, faith is the state of being ultimately concerned. Duckworth uses the phrase secularly for the one thing your efforts serve. Hers: "Use psychological science to help kids thrive." The test of grit is the stability of the ultimate concern, not of the projects beneath it.`,
    origin: `Tillich, *Dynamics of Faith* (1957); *Grit*, Ch. 4.`,
    find: ["ultimate concern"], where: [["grit", "ch04"]], related: ["goal-hierarchy", "purpose"],
  },
  interest: {
    term: "Interest (development of)", cat: "Motivation", aka: ["triggered vs. maintained interest", "four-phase model"],
    short: "In Grit, the first source of passion. Interests are rarely discovered by introspection; they are triggered by experience, deepened by knowledge, and kept alive by others' encouragement.",
    deep: `Duckworth's correction of "follow your passion" is that most passions *develop*. Following Benjamin Bloom's study of world-class performers (*Developing Talent in Young People*, 1985), early years are playful and low-pressure ("romance"), middle years bring rigor and a demanding teacher, and later years bring purpose. Interest needs triggering, then re-triggering, and a crowd of encouraging supporters.

Hidi & Renninger's four-phase model (triggered situational interest → maintained situational interest → emerging individual interest → well-developed individual interest) is the scholarly backbone. Experts keep interest alive through **novelty in nuance**: finding fresh questions inside a familiar field (Paul Silvia).`,
    origin: `Bloom (1985); Hidi & Renninger (2006), *Educational Psychologist*; Silvia, *Exploring the Psychology of Interest* (2006).`,
    debate: `"Fixed" vs. "growth" theories of interest: people who believe passions are found rather than developed abandon new interests sooner when difficulty arises (O'Keefe, Dweck & Walton, 2018). Note how *situational* the early phases are: interest is "triggered" by environments, which bridges to *Situated*.`,
    find: ["interest"], where: [["grit", "ch06"]], related: ["passion-consistency", "deliberate-practice", "purpose"],
  },
  flow: {
    term: "Flow", cat: "Motivation", aka: ["optimal experience"],
    short: "Mihaly Csikszentmihalyi's term for total absorption in an activity, where challenge matches skill, attention narrows, self-consciousness fades, and time distorts.",
    deep: `Flow arises when a challenging task meets high skill and offers clear goals and immediate feedback. *Grit* (Ch. 7) stages a debate between Csikszentmihalyi (experts love what they do) and Ericsson (deliberate practice is not inherently enjoyable). Duckworth's resolution: deliberate practice is for *preparation* and is effortful; flow is for *performance* and is effortless. Gritty people do more of both.`,
    origin: `Csikszentmihalyi, *Beyond Boredom and Anxiety* (1975); *Flow* (1990).`,
    debate: `Flow research relies heavily on self-report (the Experience Sampling Method, which Csikszentmihalyi pioneered). Some studies find flow during practice too, which blurs Duckworth's clean split.`,
    find: ["flow"], where: [["grit", "ch07"]], related: ["deliberate-practice", "experience-sampling"],
  },
  purpose: {
    term: "Purpose", cat: "Motivation", aka: ["beyond-the-self purpose", "prosocial motivation"],
    short: "In Grit, the intention to contribute to the well-being of others. It is the third psychological asset of grit, and it deepens passion as people mature.",
    deep: `Grit paragons usually describe their work as connected to other people. Duckworth's survey of 16,000 adults found grittier people scored higher on purpose (an "eudaimonic" orientation), with no tradeoff against pleasure-seeking.

William Damon defines purpose as a stable, generalized intention to accomplish something meaningful to the self *and* consequential for the world beyond the self. Purpose can be cultivated by reflecting on how current work helps others, by finding a purposeful role model, and by "job crafting" small changes that make work more meaningful (Wrzesniewski).`,
    origin: `Damon, *The Path to Purpose* (2008); Grant (2008) on prosocial motivation; Yeager et al. (2014) on self-transcendent purpose for learning.`,
    debate: `Adam Grant's call-center studies found that a brief meeting with a beneficiary sharply raised fundraising (Grant et al., 2007), a dramatic but small-sample result. Prosocial motivation helps most when combined with intrinsic interest (Grant, 2008, firefighters and fundraisers).`,
    find: ["purpose"], where: [["grit", "ch08"], ["situated", "ch12", "self-transcendence"]], related: ["calling", "self-transcendence", "ultimate-concern"],
  },
  calling: {
    term: "Job, career, calling", cat: "Organizational psychology", aka: ["work orientation"],
    short: "Amy Wrzesniewski's three orientations to work: a job (a paycheck), a career (advancement), or a calling (meaningful in itself and to others). It is like the three bricklayers.",
    deep: `In Wrzesniewski et al. (1997), people in the same occupation, administrative assistants for example, split roughly into thirds across the three orientations. Callings predicted greater satisfaction and fewer missed days. Crucially, orientation depends more on the person's construal than on the job title, so it can change ("job crafting"; Wrzesniewski & Dutton, 2001).`,
    origin: `Bellah et al., *Habits of the Heart* (1985); Wrzesniewski, McCauley, Rozin & Schwartz (1997), *Journal of Research in Personality*.`,
    debate: `Callings have a dark side: zookeepers with strong callings accepted lower pay and more sacrifice (Bunderson & Thompson, 2009). That is a caution for organizations that exploit meaning.`,
    find: ["calling"], where: [["grit", "ch08"], ["situated", "ch09", "Tim Risser's sweet spot"]], related: ["purpose", "job-crafting"],
  },
  "job-crafting": {
    term: "Job crafting", cat: "Organizational psychology",
    short: "Employees reshaping the tasks, relationships, and meaning of their job to make it more engaging and purposeful, without changing their formal role.",
    deep: `Hospital cleaners who saw themselves as part of patient care, chatting with patients and timing their cleaning around visits, are the canonical example. Job crafting is a person-level way to shift one's own work situation, a small form of situational agency.`,
    origin: `Wrzesniewski & Dutton (2001), *Academy of Management Review*.`,
    find: ["job crafting"], where: [["grit", "ch08"]], related: ["calling", "situational-agency"],
  },
  "learned-helplessness": {
    term: "Learned helplessness", cat: "Motivation",
    short: "Passivity after repeated uncontrollable bad events. Seligman and Maier first thought it was learned; Maier's later neuroscience showed passivity is the default, and what gets learned is control.",
    deep: `In the 1967 triadic design, dogs given escapable shock, or no shock, later learned to escape. Dogs given the identical but *inescapable* shock (yoked) mostly stopped trying. The phenomenon became a model of depression.

Fifty years later, Maier & Seligman (2016) reversed the mechanism. Prolonged aversive events trigger passivity by default (via the dorsal raphe nucleus). Detecting *control* engages the prefrontal cortex, which inhibits that response, and this "immunizes" against later helplessness. In *Grit* (Ch. 9) this supports the "rising to the occasion" argument: adversity you can master builds hope.`,
    origin: `Overmier & Seligman (1967); Seligman & Maier (1967), *JEP*; Maier & Seligman (2016), *Psychological Review*.`,
    debate: `Ethical criticism of the original animal research persists. The human literature moved toward attributional explanations (explanatory style).`,
    find: ["learned helplessness"], where: [["grit", "ch09"]], related: ["explanatory-style", "growth-mindset", "learned-industriousness"],
  },
  "explanatory-style": {
    term: "Explanatory style (learned optimism)", cat: "Motivation", aka: ["attributional style", "optimism"],
    short: "How you habitually explain bad events. Pessimists see causes as permanent and pervasive; optimists see them as temporary and specific.",
    deep: `The reformulated helplessness theory (Abramson, Seligman & Teasdale, 1978) said helplessness depends on the explanations people make. Seligman's Attributional Style Questionnaire measures this. At MetLife, optimistic insurance agents sold more and quit less (Seligman & Schulman, 1986). Duckworth's study of Teach For America teachers found optimistic explanatory style predicted effectiveness.

Cognitive therapy teaches people to dispute pessimistic explanations: a Box Two strategy.`,
    origin: `Abramson, Seligman & Teasdale (1978); Seligman, *Learned Optimism* (1991); Peterson & Seligman (1984).`,
    debate: `Optimism interventions (e.g., the Penn Resiliency Program) show small, sometimes short-lived effects in large trials (Brunwasser, Gillham & Kim, 2009).`,
    find: ["learned optimism"], where: [["grit", "ch09"]], related: ["learned-helplessness", "growth-mindset", "cognitive-therapy"],
  },
  "learned-industriousness": {
    term: "Learned industriousness", cat: "Motivation",
    short: "Robert Eisenberger's finding that rewarding effort (not just success) teaches animals and people to associate hard work with reward, making later effort feel less aversive.",
    deep: `Rats rewarded for pressing a lever many times, rather than once, later persisted longer at other tasks. Children rewarded for effortful performance persevered more later. *Grit* (Ch. 11) uses it to argue for structured extracurriculars where effort pays off, and for the family **Hard Thing Rule**.

In *Situated*'s terms, it is the "make it rewarding" principle applied to effort itself: a situation that reliably pays off hard work teaches you to work hard.`,
    origin: `Eisenberger (1992), "Learned industriousness," *Psychological Review*.`,
    find: ["learned industriousness"], where: [["grit", "ch11"]], related: ["learned-helplessness", "hard-thing-rule", "extracurricular-follow-through"],
  },
  "hard-thing-rule": {
    term: "Hard Thing Rule", cat: "Grit",
    short: "The Duckworth family rule: everyone does a hard thing that requires daily deliberate practice, you can quit only at a natural stopping point, and you pick your own hard thing.",
    deep: `The fourth clause, added for her daughters in high school, requires sticking with one hard thing for at least two years. The rule combines challenge (hard, daily practice) with support and autonomy (you choose it, you can switch at natural endpoints), which is the sweet-spot grid in household form.`,
    origin: `*Grit*, Ch. 11.`,
    find: ["Hard Thing Rule"], where: [["grit", "ch11"]], related: ["learned-industriousness", "extracurricular-follow-through", "sweet-spot"],
  },
  "extracurricular-follow-through": {
    term: "Follow-through (extracurriculars)", cat: "Grit",
    short: "Sustained, multi-year commitment and advancement in an activity. In Willingham's Personal Qualities Project it predicted college accomplishment better than test scores.",
    deep: `Warren Willingham's Personal Qualities Project (ETS, 1978–) followed thousands of students and found that "follow-through," meaning purposeful, continuous commitment to activities in high school, predicted college leadership and accomplishment. Duckworth replicated the idea with the **Grit Grid** and found follow-through predicted college graduation and, later, teacher effectiveness.`,
    origin: `Willingham, *Success in College* (1985); Duckworth's Grit Grid studies.`,
    debate: `Nonexperimental: students who stick with activities differ in many ways, and Duckworth says so directly in Ch. 11. Access is unequal. Putnam (*Our Kids*, 2015) documents the class gap in extracurricular participation, a situational barrier.`,
    find: ["follow-through"], where: [["grit", "ch11"]], related: ["learned-industriousness", "hard-thing-rule", "grit"],
  },
  "authoritative-parenting": {
    term: "Authoritative (\"wise\") parenting", cat: "Developmental psychology", aka: ["demanding and supportive parenting", "wise parenting"],
    short: "Parenting that is both warm and demanding. Diana Baumrind's authoritative style, which Grit calls \"wise parenting,\" predicts better outcomes than authoritarian, permissive, or neglectful styles.",
    deep: `Baumrind's typology (1966) was formalized by Maccoby & Martin (1983) as two dimensions, demandingness and responsiveness, giving four styles. Authoritative parents set high standards *and* explain, listen, and support autonomy. *Grit* (Ch. 10) illustrates it with Steve Young's and Francesca Martinez's parents and argues grit grows best in this combination.

It is the parental ancestor of *Situated*'s challenge × support "sweet spot."`,
    origin: `Baumrind (1966, 1971); Maccoby & Martin (1983); Lamborn et al. (1991); Steinberg's adolescent research.`,
    debate: `Cultural context matters. Ruth Chao (1994) argued Chinese-American "training" (*guan*) parenting looks authoritarian on Western measures but carries warmth and different meanings. Darling & Steinberg (1993) separated parenting *style* from *practices*. Much of the evidence is correlational, and children's temperaments also shape parenting (evocative effects).`,
    find: ["authoritative"], where: [["grit", "ch10"], ["situated", "ch10"]], related: ["sweet-spot", "situational-parenting"],
  },
  "situational-parenting": {
    term: "Situational parenting", cat: "Core concept",
    short: "Duckworth's term in Situated for raising children by shaping their situations (home, school, neighborhood, activities) rather than by exhortation.",
    deep: `When children are young: set up their space (books in, screens out) and model the behavior you want ("children see, children do"). As they grow: choose schools and neighborhoods where peers and mentors will be good influences, and support structured activities where effort pays off (Debbie Phelps's minivan).

Mister Rogers's reframe captures it: "Why can't my boy concentrate?" becomes "Where can my boy concentrate?"`,
    origin: `*Situated*, Ch. 10; Bronfenbrenner's ecological systems theory; Steinberg on adolescent peers.`,
    debate: `"Buy the smallest house in the best district" is advice that only some families can follow and that can't work for everyone simultaneously. Readers might ask what *policy* version of situational parenting Duckworth would endorse (Ch. 12 gestures at this).`,
    find: ["situational parenting"], where: [["situated", "ch10"]], related: ["authoritative-parenting", "economic-mobility", "home-literacy"],
  },
  "home-literacy": {
    term: "Books in the home (scholarly culture)", cat: "Sociology of education",
    short: "The finding that the number of books in a child's home predicts educational attainment across many countries, even after controlling for parents' education and class.",
    deep: `Evans, Kelley, Sikora & Treiman (2010) analyzed data from 27 nations and found growing up with about 500 books was associated with roughly three more years of schooling, comparable to having university-educated parents. Duckworth reads this as a situational signal of family values: "around here, we value education over entertainment."`,
    origin: `Evans et al. (2010), *Research in Social Stratification and Mobility*.`,
    debate: `Books are a marker as much as a cause. They proxy for parental reading, cognitive culture, and (in genetically sensitive designs) shared genes. No study has randomly assigned 500 books. Book-gifting programs (e.g., Dolly Parton's Imagination Library) show modest benefits for early literacy.`,
    find: ["books in a child"], where: [["situated", "ch10"]], related: ["situational-parenting", "natural-experiment"],
  },
  "screen-time": {
    term: "Screen time and youth well-being", cat: "Developmental psychology",
    short: "The contested question of whether heavy smartphone and social-media use harms adolescents' mental health and achievement.",
    deep: `*Situated* treats screens as a situational temptation to push away: "the farther the phone, the higher the GPA," fewer screens and more books at home. The average US teen's roughly nine hours a day of screen media (Common Sense Media) is the backdrop.`,
    origin: `Twenge (2017); Haidt, *The Anxious Generation* (2024).`,
    debate: `A heated scientific debate. Haidt and Twenge argue social media caused a post-2012 teen mental-health decline. Orben & Przybylski (2019, *Nature Human Behaviour*) found screen-use associations with well-being tiny on average, "comparable to eating potatoes." Odgers (2024, *Nature*) criticized Haidt's causal claims. School phone bans are now being evaluated, with mixed early results. Duckworth's claims are narrower: phones as *distractors* during study, where the attention evidence is stronger.`,
    find: ["screen time"], where: [["situated", "ch10"], ["situated", "ch06", "phone distance"]], related: ["physical-distance", "friction"],
  },
  "neonatal-imitation": {
    term: "Imitation (in infants)", cat: "Developmental psychology",
    short: "Learning by copying others. Andrew Meltzoff reported newborns imitate facial gestures within days of birth, a claim now disputed.",
    deep: `Meltzoff & Moore (1977, *Science*) reported 12–21-day-old infants imitating tongue protrusion and other gestures. Imitation is clearly central to human learning by toddlerhood ("over-imitation," Horner & Whiten, 2005). Duckworth uses it for "children see, children do."`,
    origin: `Meltzoff & Moore (1977, 1983).`,
    debate: `A large longitudinal study (Oostenbroek et al., 2016, *Current Biology*, 106 infants) found no evidence of neonatal imitation; Meltzoff and colleagues disputed the methods. The broader claim, that children learn heavily by imitation from infancy onward, is not in question.`,
    find: ["imitate"], where: [["situated", "ch10"]], related: ["situational-parenting", "collective-brain"],
  },
  sisu: {
    term: "Sisu", cat: "Grit",
    short: "A Finnish word for extraordinary determination in the face of adversity, often described as a \"second wind.\" Grit uses it as an example of grit carried by a national culture.",
    deep: `Emilia Lahti's research describes sisu as action-oriented courage in the face of extreme hardship, part of Finnish national identity since at least the Winter War (1939–40). In *Grit* (Ch. 12) it shows how cultures shape identity: "people like us do things like this."`,
    origin: `Lahti (2013 onward); *Grit*, Ch. 12.`,
    find: ["sisu"], where: [["grit", "ch12"]], related: ["culture", "identity-motivation"],
  },
  "identity-motivation": {
    term: "Identity-based motivation (\"people like us\")", cat: "Social psychology", aka: ["logic of appropriateness"],
    short: "The idea that people act in ways that fit their identities (\"What does a person like me do in a situation like this?\") more than by calculating costs and benefits.",
    deep: `James March distinguished the **logic of consequences** (weigh costs and benefits) from the **logic of appropriateness** (ask who I am and what someone like me does here). *Grit* (Ch. 12) argues that grit cultures work through identity: Seahawks, West Point cadets, and Finns *become* people who don't quit. Daphna Oyserman's identity-based motivation theory and Cialdini's consistency principle provide research support.

*Situated* adds the mechanism: culture is "the way we do things around here," and over time "around here" becomes "who I am."`,
    origin: `March, *A Primer on Decision Making* (1994); Oyserman (2007, 2015).`,
    find: ["James March"], where: [["grit", "ch12"], ["situated", "ch09"]], related: ["culture", "sisu", "social-norms"],
  },
  "mundanity-excellence": {
    term: "The mundanity of excellence", cat: "Expertise",
    short: "Daniel Chambliss's finding, from years with competitive swimmers, that top performance is a sum of many ordinary, drilled-in skills. \"Talent\" is a lay label that mystifies it.",
    deep: `Chambliss argued excellence is *qualitatively* different (Olympians do different things, not just more of the same things), that it comes from consistently doing many small things correctly, and that talent explanations obscure the *social world* of excellence: parents with money and interest, coaches, pools, teammates. That makes his paper a quiet ancestor of *Situated*. Michael Phelps and Bob Bowman reappear in both books.`,
    origin: `Chambliss (1989), "The mundanity of excellence: An ethnographic report on stratification and Olympic swimmers," *Sociological Theory*.`,
    find: ["Mundanity of Excellence"], where: [["grit", "ch03"], ["grit", "ch12"]], related: ["talent", "deliberate-practice", "culture"],
  },
  "zone-proximal": {
    term: "Zone of proximal development", cat: "Developmental psychology", aka: ["scaffolding"],
    short: "Lev Vygotsky's term for the range of tasks a learner can do with guidance but not yet alone. It is where teaching, and mentoring, should aim.",
    deep: `Vygotsky (1930s) argued learning is social: higher mental functions appear first between people, then within the person. Wood, Bruner & Ross (1976) named the supportive structure "scaffolding." Deliberate practice's "stretch goal" is a ZPD target, and mentors provide the scaffold. It is the developmental version of the challenge-plus-support sweet spot.`,
    origin: `Vygotsky, *Mind in Society* (translated 1978); Wood, Bruner & Ross (1976).`,
    find: [], where: [["situated", "ch08"], ["grit", "ch07"]], related: ["sweet-spot", "deliberate-practice", "mentor"],
  },
  "reference-bias": {
    term: "Reference bias", cat: "Research methods",
    short: "A distortion in self-report questionnaires that arises because people rate themselves against the standards of their own group or situation.",
    deep: `If your classmates all work 60 hours a week, you may rate yourself "not very hardworking" at 50. West et al. (2016) found students at high-performing charter schools reported *lower* conscientiousness and grit than peers at other schools despite better behavior and outcomes. Reference bias is a reason Duckworth opposes using self-reported character for accountability. It is also a measurement version of *Situated*'s thesis: even our self-perceptions are situated.`,
    origin: `Heine et al. (2002) cross-cultural; West et al. (2016), *Educational Evaluation and Policy Analysis*; Duckworth & Yeager (2015), *Educational Researcher*.`,
    find: [], where: [["grit", "ch04"]], related: ["grit-scale", "effect-size"],
  },
  "effect-size": {
    term: "Effect size", cat: "Research methods", aka: ["Cohen's d", "correlation r", "percentage points"],
    short: "How big a difference or relationship is, not just whether it is \"statistically significant.\" Essential for judging the book's numbers.",
    deep: `Common measures: **Cohen's d** (difference in standard-deviation units; Cohen's rough benchmarks are 0.2 small, 0.5 medium, 0.8 large); **correlation r** (−1 to 1; in personality research, r = .10/.20/.30 is small/typical/large, per Gignac & Szodorai, 2016); and **relative vs. absolute** changes.

Read *Situated*'s percentages carefully. "19 percent better" or "27 percent more turnout" are often *relative* changes. A 27% relative increase on a 30% base is about 8 percentage points. Ask: percent of what? Compared to what?`,
    origin: `Cohen (1988); Funder & Ozer (2019), "Evaluating effect size in psychological research."`,
    debate: `Small effects can matter at scale (a 1-point nudge across millions of people), and big lab effects often shrink in the field. Funder & Ozer argue r = .05 can be consequential when cumulative.`,
    find: [], where: [["situated", "ch02"], ["situated", "ch06"]], related: ["rct", "replication-crisis", "megastudy"],
  },
  rct: {
    term: "Randomized controlled trial (RCT)", cat: "Research methods", aka: ["random assignment", "field experiment"],
    short: "A study in which participants are randomly assigned to treatment or control, so differences in outcomes can be attributed to the treatment rather than to who chose it.",
    deep: `Random assignment is the gold standard for causal claims because it balances both known and unknown differences between groups on average. *Situated*'s strongest evidence of this kind includes the young-adult situation-change intervention (Ch. 2), the temptation-bundling gym study (Ch. 6), the LinkedIn weak-ties experiment (Ch. 8), the coin-flip study (Ch. 9), and the megastudies.

Much else in both books is correlational (grit and outcomes, phone distance and GPA, books at home) or anecdotal (Phelps, Swift, Coleman).`,
    origin: `Fisher (1935); medicine's adoption after the 1948 streptomycin trial; economics' "credibility revolution."`,
    debate: `RCTs answer narrow questions about average effects in specific samples. Generalizing them (external validity) and running them on life-sized choices (where to live) is often impossible, which is why natural experiments matter.`,
    find: ["randomly assigned"], where: [["situated", "ch02"], ["situated", "ch09"]], related: ["natural-experiment", "effect-size", "megastudy", "correlation-causation"],
  },
  "correlation-causation": {
    term: "Correlation vs. causation", cat: "Research methods", aka: ["confounding", "reverse causation", "selection"],
    short: "Two things moving together doesn't mean one causes the other. A third factor may cause both, the arrow may run backward, or people may select into groups.",
    deep: `Three questions to ask of every correlational claim in these books:

1. **Confounding:** could something else (family income, parental education, genes) cause both? Books at home and educational attainment is the classic case.
2. **Reverse causation:** could the outcome cause the "cause"? Do good students keep phones away, or do phones away make good students?
3. **Selection:** did people choose their situation? People who move to walkable neighborhoods may already want to walk. Duckworth's natural experiments partly address this.`,
    origin: `Pearson, Yule (1900s) on spurious correlation; Rubin's potential-outcomes framework; Pearl, *The Book of Why* (2018).`,
    find: [], where: [["situated", "ch06"], ["situated", "ch10"], ["grit", "ch11"]], related: ["rct", "natural-experiment", "survivorship-bias"],
  },
  "survivorship-bias": {
    term: "Survivorship bias", cat: "Research methods", aka: ["selecting on the dependent variable"],
    short: "Drawing conclusions only from successes (Phelps, Swift, Marchand) while ignoring the many who did the same things and didn't succeed.",
    deep: `Both books open with champions. That is good storytelling but weak inference. Thousands of young swimmers trained in elite clubs and thousands of teenagers moved to Nashville. To know whether a situation *causes* success, you need the people who entered it and failed, and people who succeeded without it. Duckworth acknowledges this for Taylor Swift ("by no means a guarantee") and backs the stories with large-sample data elsewhere, which is the right move. Readers should ask of each anecdote: what study stands behind it?

Abraham Wald's WWII analysis of bombers (armor where returning planes *weren't* hit) is the classic illustration.`,
    origin: `Wald (1943); popular treatment in Ellenberg, *How Not to Be Wrong* (2014).`,
    find: [], where: [["situated", "ch01"], ["situated", "ch09", "Taylor Swift"], ["grit", "ch01"]], related: ["correlation-causation", "rct"],
  },
  megastudy: {
    term: "Megastudy", cat: "Research methods", aka: ["Behavior Change for Good"],
    short: "A massive field experiment that tests dozens of interventions at once in the same population, with the same outcome, so their effects can be compared directly.",
    deep: `Katy Milkman and Angela Duckworth's **Behavior Change for Good** initiative pioneered the format. In a 24 Hour Fitness megastudy (Milkman et al., 2021, *Nature*), about 61,000 gym members were randomly assigned to 54 different four-week programs; about half significantly increased visits. Other megastudies tested flu-vaccination text reminders (~680,000 Walmart pharmacy patients), teacher-email nudges for math, and savings reminders.

A sobering lesson: experts and laypeople were poor at predicting which interventions would work best.`,
    origin: `Milkman et al. (2021), *Nature*; Duckworth & Milkman (2022), "A guide to megastudies," *PNAS Nexus*.`,
    debate: `Megastudies solve the comparability problem and limit publication bias, but they test short, cheap interventions with short follow-ups. Many effects fade when programs end (the 24 Hour Fitness gains mostly didn't persist after the four weeks).`,
    find: ["Behavior Change for Good"], where: [["situated", "ch05"], ["situated", "ch06"]], related: ["nudge", "rct", "effect-size", "replication-crisis"],
  },
  "experience-sampling": {
    term: "Experience sampling", cat: "Research methods", aka: ["ecological momentary assessment", "EMA", "ESM"],
    short: "Surveying people many times a day, in the flow of daily life, about what they are doing, thinking, and feeling. Most of the \"personality has range\" evidence relies on it.",
    deep: `Pioneered by Csikszentmihalyi with pagers in the 1970s, now done with phones. It powers Fleeson's density distributions, Hofmann's "Everyday Temptations" study (Ch. 2), and flow research. Its strength is capturing behavior *in situations*; its weakness is that it still relies on self-report and can be intrusive.`,
    origin: `Larson & Csikszentmihalyi (1983); Shiffman, Stone & Hufford (2008) on EMA.`,
    find: [], where: [["situated", "ch02"], ["situated", "ch03"]], related: ["personality-range", "flow"],
  },
});
