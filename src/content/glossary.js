/* Glossary, part 1: the vocabulary of Situated and of the person–situation debate.
   Fields: term, cat, short (one line), deep (markup), origin, debate, find (phrases to
   underline in the book text), where [[book, chapter, note]], related, aka. */
SG.glossary = {
  situation: {
    term: "Situation", cat: "Core concept", aka: ["Box One", "environment", "context"],
    short: "Everything and everyone around you, objectively described: places, people, objects within reach, and the cultural norms you live inside. Not your interpretation of them.",
    deep: `Duckworth defines the situation as "the set of objective physical and social circumstances you inhabit," and draws a hard line between it and what is in your head. Your *reading* of the situation belongs to Box Two (thoughts). The situation itself is Box One.

The definition is deliberately wide. It runs from the phone on your desk (three feet away) through your peers and mentors to the culture of your town (about five miles). Part 2 of *Situated* walks outward through exactly that order.

Two distinctions matter. **Objective vs. psychological situation:** Kurt Lewin's "life space" and later "situational construal" research (Ross & Nisbett) stress that people respond to the situation *as they perceive it*. Duckworth keeps the two apart on purpose, because the objective situation is the part you can rearrange. **Situation vs. environment:** "Environment" in behavioral genetics means everything that is not genes (including chance). Duckworth's "situation" is narrower and more actionable.`,
    origin: `The modern psychological use descends from Lewin (1936), Roger Barker's behavior settings (1947 onward), and the "situationist" critique of trait psychology (Mischel, 1968; Ross & Nisbett, 1991).`,
    debate: `Psychologists still lack an agreed taxonomy of situations. Recent efforts include the DIAMONDS model (Rauthmann et al., 2014: Duty, Intellect, Adversity, Mating, pOsitivity, Negativity, Deception, Sociality) and the Riverside Situational Q-sort (Funder and colleagues). Duckworth's space–peers–mentors–culture scheme is a practical taxonomy for goal pursuit, not a psychometric one.`,
    find: ["situation"], where: [["situated", "prologue", "defined"], ["situated", "ch02", "as Box One"], ["situated", "part2", "four elements"]],
    related: ["three-boxes", "behavior-setting", "situational-agency", "person-situation-debate", "interactionism"],
  },
  "three-boxes": {
    term: "Three Boxes model", cat: "Core concept", aka: ["situation → thoughts → response", "process model"],
    short: "Duckworth's organizing framework: a situation (Box One) prompts thoughts (Box Two), which produce a response (Box Three). The earlier you intervene, the easier the change.",
    deep: `The model is a simplified version of James Gross's **process model of emotion regulation**, which Duckworth and Gross extended to self-control and then to behavior change in general. The order is causal and temporal: you meet a situation, you appraise it, then you feel and act.

Its practical bite is the claim that *where* you intervene matters. Willpower works at Box Three, after the urge has already formed, so it is the most effortful and least reliable strategy. Changing your thinking (Box Two: redirecting attention, reappraisal) comes earlier. Changing the situation (Box One: selecting or modifying it) comes earliest of all, and once in place it works without further effort.

In Chapter 13 Duckworth adds a fourth arrow from Response back to Situation. That turns the chain into a feedback loop, which she calls the flywheel of "situation multiplication."`,
    origin: `Gross, J. J. (1998), "The emerging field of emotion regulation: An integrative review," *Review of General Psychology*. Duckworth, Gendler & Gross (2016), "Situational strategies for self-control," *Perspectives on Psychological Science*. Duckworth & Gross (2020), "Behavior change," *OBHDP*.`,
    debate: `The model is a heuristic ordering, not a claim that cognition always precedes emotion. Appraisal theorists (Lazarus) broadly agree with the order, but the Zajonc–Lazarus debate of the 1980s and later dual-process work show that affect can arise very fast, with minimal cognition. Habits are the clearest case where Box One triggers Box Three with no Box Two thought at all, and Duckworth embraces that case in Chapter 6.`,
    find: ["Three Boxes"], where: [["situated", "ch02", "introduced"], ["situated", "ch06", "habits skip Box Two"], ["situated", "ch13", "becomes a flywheel"], ["situated", "blueprint", "worksheet"]],
    related: ["process-model", "situation-selection", "cognitive-reappraisal", "willpower", "flywheel", "habit"],
  },
  "process-model": {
    term: "Process model of emotion regulation", cat: "Emotion science", aka: ["modal model", "Gross's process model"],
    short: "James Gross's account of five families of strategies for changing emotions, ordered by when they act: situation selection, situation modification, attentional deployment, cognitive change, and response modulation.",
    deep: `Gross's "modal model" says an emotion unfolds as situation → attention → appraisal → response. Each step offers a point of intervention:

1. **Situation selection**: choose which situations to enter (sit at the other end of the table from your brother-in-law).
2. **Situation modification**: change the situation you are in (volunteer to wash dishes).
3. **Attentional deployment**: shift what you attend to (think about the pie).
4. **Cognitive change**: reinterpret the situation, usually called reappraisal ("What does he see that I don't?").
5. **Response modulation**: act on the response directly, for example by suppressing an expression.

Duckworth's Three Boxes collapses the first two into Box One, the middle two into Box Two, and the last into Box Three.`,
    origin: `Gross (1998); Gross (2015), "Emotion regulation: Current status and future prospects," *Psychological Inquiry*.`,
    debate: `Lab evidence consistently finds reappraisal more effective and less costly than expressive suppression (Gross & John, 2003; Webb, Miles & Sheeran's 2012 meta-analysis). Situation-focused strategies are much less studied, because they are hard to test in a lab where the experimenter controls the situation. That gap is partly why Duckworth's field studies matter.`,
    where: [["situated", "ch02", "the conference talk"]], related: ["three-boxes", "situation-selection", "cognitive-reappraisal"],
  },
  "situation-selection": {
    term: "Situation selection and modification", cat: "Self-control", aka: ["situational strategies", "Box One strategies"],
    short: "Choosing which situations to enter, or changing the one you are in, so that the temptation or the trigger never fully arises.",
    deep: `These are the two earliest strategies in Gross's process model and the heart of *Situated*. **Selection** examples: avoiding the bar, choosing the gym with the friendly morning crowd, moving to a walkable neighborhood. **Modification** examples: putting cookies on a high shelf (or feeding them to the birds), turning the phone face down or putting it in another room, laying out running shoes the night before.

Duckworth, Gendler & Gross (2016) argue these strategies are underused because people don't think of them as "self-control" at all. We tend to equate self-control with resisting in the moment.`,
    origin: `Gross (1998); Duckworth, Gendler & Gross (2016). A parallel personality literature on *situation selection* dates to Ickes, Snyder & Ireland (1982) and Buss (1987): people choose situations that fit their dispositions.`,
    debate: `Correlational work (Ent, Baumeister & Tice, 2015; Hofmann et al., 2012) suggests people high in trait self-control encounter fewer temptations, which fits situation selection. Experimental tests are fewer. Duckworth et al.'s "A Stitch in Time" (2016) and the young-adult intervention described in Chapter 2 are among them.`,
    find: ["situational strategies"], where: [["situated", "ch02"], ["situated", "ch06"]], related: ["process-model", "three-boxes", "commitment-device", "friction"],
  },
  "cognitive-reappraisal": {
    term: "Cognitive reappraisal", cat: "Emotion science", aka: ["reframing", "Box Two strategy"],
    short: "Changing how you interpret a situation in order to change how you feel about it, for example from \"he's an idiot\" to \"what does he see that I don't?\"",
    deep: `Reappraisal is the best-studied emotion-regulation strategy. It works at Box Two: the situation is unchanged, but its meaning is different. Cognitive therapy (Beck) is in large part structured, repeated reappraisal of distorted thoughts. Growth-mindset messages and "stress is enhancing" interventions are reappraisals too.

In *Situated*, reappraisal is the middle option. It beats willpower but loses to changing the situation, because it still has to be done in the moment, every time.`,
    origin: `Lazarus's appraisal theory (1960s–1990s); Gross & John (2003) on individual differences in reappraisal and suppression.`,
    debate: `Reappraisal is not uniformly good. Troy et al. (2013) found it helps when the stressor is uncontrollable and can hurt (by encouraging acceptance) when the stressor is controllable, where changing the situation is the better response. That is close to Duckworth's annotated Serenity Prayer.`,
    find: ["reframe"], where: [["situated", "ch02"], ["situated", "ch03", "Beck's cognitive therapy"]], related: ["process-model", "cognitive-therapy", "growth-mindset"],
  },
  willpower: {
    term: "Willpower", cat: "Self-control", aka: ["Box Three strategy", "response modulation", "brute force"],
    short: "In Duckworth's usage, the effortful, in-the-moment resistance of a temptation or forcing yourself through a task: Frog's \"trying hard not to do something that you really want to do.\"",
    deep: `*Situated* makes a sharp, deliberate distinction between **willpower** (a strategy, applied at Box Three) and **self-control** (the broader capacity to align behavior with long-term goals, by any means). The book's thesis is that people over-rely on willpower, admire it morally, and under-use situational strategies, even though the latter work better.

Two empirical claims carry the argument. First, people who report using willpower ("just forced myself") do worse on outcomes like SAT scores than people who report situational strategies. Second, people successful at self-control report *fewer* temptations, not more resistance (Hofmann et al., 2012). Duckworth also argues that "a little willpower goes a long way when you use it to get situated": effort spent once on the setup pays off repeatedly.`,
    origin: `Folk psychology; the Victorian "will" (Samuel Smiles, *Self-Help*, 1859); the strength model of self-control (Baumeister et al., 1998).`,
    debate: `How willpower works is contested. The strength or "muscle" model, which says self-control depletes like a resource, has fared poorly in large replications (see [[ego-depletion]]). Rival accounts treat effort as a cost–benefit or opportunity-cost computation (Kurzban et al., 2013), or as shaped by beliefs about willpower (Job, Dweck & Walton, 2010). None of these accounts makes in-the-moment resistance cheap.`,
    find: ["willpower"], where: [["situated", "ch02", "Frog and Toad"], ["situated", "ch04", "worshipping willpower"], ["grit", "ch01"]],
    related: ["self-control", "ego-depletion", "three-boxes", "strategy-beliefs"],
  },
  "self-control": {
    term: "Self-control", cat: "Self-control", aka: ["self-regulation", "conscientiousness (related)"],
    short: "The capacity to align your actions with goals you value more in the long run, especially when a momentary impulse pulls the other way.",
    deep: `Duckworth's academic work defines self-control as the regulation of impulses in service of valued long-term goals. That is distinct from **grit**, which is about sustaining effort and interest toward one goal over years. The two correlate but separate in data (Duckworth & Gross, 2014, "Self-control and grit: Related but separable determinants of success").

Self-control predicts a wide range of life outcomes. The Dunedin cohort study (Moffitt et al., 2011) followed ~1,000 New Zealanders from birth and found childhood self-control predicted adult health, wealth, and criminal convictions, even controlling for IQ and social class. Duckworth's own research found self-discipline predicted adolescents' grades better than IQ (Duckworth & Seligman, 2005).

*Situated* reframes the construct: self-control is achieved by many strategies, and the best are situational.`,
    origin: `Freud's reality principle; Mischel's delay-of-gratification ("marshmallow") studies (1960s–80s); Baumeister's self-regulation research.`,
    debate: `The marshmallow test's long-term predictions shrank substantially in a larger, more diverse replication (Watts, Duncan & Quan, 2018), largely after controlling for family background. That is itself a situational finding. Mischel had long argued delay depends heavily on how the situation is arranged, for example whether the treat is covered or visible (Mischel, Ebbesen & Zeiss, 1972).`,
    find: ["self-control"], where: [["situated", "ch02"], ["situated", "ch03", "domain-specific impulsivity"], ["situated", "ch04", "Strategy Beliefs Scale"]],
    related: ["willpower", "situation-selection", "grit", "conscientiousness"],
  },
  "ego-depletion": {
    term: "Ego depletion", cat: "Self-control", aka: ["strength model", "the willpower muscle"],
    short: "The hypothesis that self-control draws on a limited resource that gets used up, so resisting one temptation leaves you weaker against the next.",
    deep: `Baumeister and colleagues (1998) had hungry participants resist chocolate chip cookies and eat radishes instead. Those participants then gave up sooner on unsolvable puzzles. Hundreds of follow-up studies seemed to confirm a "muscle" that tires with use and strengthens with exercise.

Duckworth describes believing this model in graduate school and trying to build grit by "just-do-it" exercises: handgrips, rowing machines, avoiding filler words. The interventions "failed spectacularly." *Situated* treats that failure as a turning point.`,
    origin: `Baumeister, Bratslavsky, Muraven & Tice (1998), *JPSP*. The glucose version: Gailliot et al. (2007).`,
    debate: `Ego depletion is one of the best-known casualties of the replication crisis. A 23-lab preregistered replication (Hagger et al., 2016; n≈2,100) found an effect near zero. A larger 36-lab test (Vohs et al., 2021; n≈3,500) found at most a tiny effect. The glucose account was also challenged (Kurzban, 2010). Duckworth's endnote points to Kurzban et al.'s (2013) opportunity-cost model, which says effort *feels* costly because attention has better alternative uses, not because a tank empties. Chapter 2's framing is consistent with where the field has moved.`,
    find: ["willpower grew fatigued"], where: [["situated", "ch02", "failed just-do-it interventions"]], related: ["willpower", "replication-crisis", "self-control"],
  },
  "situational-awareness": {
    term: "Situational awareness", cat: "Core concept",
    short: "Noticing the situation at all: seeing the ocean current, not just your own strokes. Part 1 of Situated.",
    deep: `The first of the book's three stances. In the prologue it means recognizing, just in time, how strong the tide is. More generally it is the habit of asking "What's wrong with my situation?" alongside "What's wrong with me?"

Duckworth argues this is hard for three reasons, each of which is a chapter. Perceptually, we see the person and blur the background ([[fundamental-attribution-error]], Ch. 3). Culturally and morally, changing the situation feels like cheating (Ch. 4). And language itself lacks good words for the backdrop: "Background. Backdrop. Backstory. Periphery."`,
    origin: `The phrase comes from aviation and military human-factors research (Endsley, 1995), where it means perceiving and projecting the state of the environment. Duckworth borrows the phrase with a broader meaning.`,
    find: ["situational awareness"], where: [["situated", "prologue"], ["situated", "ch01"]], related: ["situational-agency", "situational-responsibility", "fundamental-attribution-error"],
  },
  "situational-agency": {
    term: "Situational agency", cat: "Core concept",
    short: "Taking charge of your circumstances: choosing to be with people and in places that bring out your best. Part 2 of Situated.",
    deep: `This is the book's answer to the classic worry that situationism erodes free will. Duckworth's move is to relocate agency rather than deny it: you may not control the current, but you can choose where to swim, signal for help, and pick the boat.

It has four elements, ordered from near and fast to far and slow: **set up your space**, **pick your peers**, **attract mentors**, and **choose your culture**. The Situated Scorecard measures each.

Situational agency is also how she reconciles the book with *Grit*. Léon Marchand is gritty, *and* he got on a plane.`,
    origin: `Duckworth's coinage. Related ideas: active gene–environment correlation and "niche picking" (Scarr & McCartney, 1983); selection, evocation and manipulation (Buss, 1987); Bandura's "reciprocal determinism" (1978); the capabilities approach (Sen, Nussbaum), which asks which choices a person is really able to make.`,
    debate: `Critics may ask how much agency over situations is distributed by privilege. Duckworth concedes "some of us have much more freedom to change our situation than others," then argues "there's almost always something you can" change. Whether that is empowering or quietly shifts responsibility back onto individuals is one of the best book-club questions.`,
    find: ["situational agency"], where: [["situated", "ch01", "Léon Marchand"], ["situated", "part2", "four elements"], ["situated", "ch13", "Cody Coleman"]],
    related: ["situational-awareness", "situational-responsibility", "situation-selection", "interactionism"],
  },
  "situational-responsibility": {
    term: "Situational responsibility", cat: "Core concept",
    short: "Doing what you can to set up other people for success, as a parent, leader, or citizen, rather than exhorting them to try harder. Part 3 of Situated.",
    deep: `Part 3 turns the lens outward: you are part of other people's situations. The Three Boxes logic says pep talks act at Box Three and rarely work. Instead, ask without judgment what thoughts drive someone's behavior, and what situation produces those thoughts.

Duckworth adds an ethical claim: helping indirectly "shows respect. It's not the person that needs fixing, it's their situation." Chapters 10–12 apply this to parenting, organizational leadership, and civic life, ending with Frankl's proposed "Statue of Responsibility."`,
    origin: `Duckworth's coinage; resonates with Frankl's "freedom … lived in terms of responsibleness," Lewin's action research, and the "choice architect" role in Thaler & Sunstein's *Nudge*.`,
    debate: `Arranging other people's situations raises the same questions as nudging: paternalism, consent, and transparency. Sunstein's *The Ethics of Influence* (2016) and Hertwig & Grüne-Yanoff's "boosts vs. nudges" (2017) are good companions.`,
    find: ["situational responsibility"], where: [["situated", "part3"], ["situated", "ch12"]], related: ["situational-agency", "nudge", "maslow-hierarchy"],
  },
  "intention-action-gap": {
    term: "Intention–action gap", cat: "Behavior change", aka: ["intention–behavior gap"],
    short: "The distance between what we sincerely intend to do and what we actually do when the time comes.",
    deep: `Meta-analyses find intentions explain only about a quarter to a third of the variance in behavior. Webb & Sheeran (2006) found that a medium-to-large change in intentions produced only a small-to-medium change in behavior. Sheeran & Webb (2016) estimate people fail to act on roughly half of their intentions, the figure Duckworth cites.

*Situated* explains the gap as an [[empathy-gap]] between selves (Night Guy vs. Morning Guy) and prescribes situational fixes rather than stronger resolve.`,
    origin: `Ajzen's theory of planned behavior (1991) made intentions the proximal cause of behavior; the "gap" literature grew from its shortfalls.`,
    debate: `Implementation intentions ("If situation X, then I will do Y"; Gollwitzer, 1999) are one of the most reliable gap-closers (Gollwitzer & Sheeran, 2006, d≈0.65). They are a Box Two strategy that explicitly links a plan to a situational cue, a near cousin of Duckworth's advice.`,
    find: ["intention-action gap"], where: [["situated", "ch06"]], related: ["empathy-gap", "commitment-device", "habit"],
  },
  "empathy-gap": {
    term: "Hot–cold empathy gap", cat: "Behavioral economics", aka: ["projection bias", "Night Guy vs. Morning Guy"],
    short: "Our inability, when calm (\"cold\"), to appreciate how differently we will think and act when hungry, tired, craving, or excited (\"hot\"), and vice versa.",
    deep: `George Loewenstein's insight is that visceral states (hunger, pain, sexual arousal, craving) change preferences, and people in one state systematically mispredict their behavior in the other. Duckworth's jogging anecdote, "I could do that again!" five minutes after nearly dying on a hill, is the cold self failing to remember the hot one.

The practical upshot is that resolutions made cold will be broken hot. So the cold self should change the situation while it is in charge: bind yourself to the mast.`,
    origin: `Loewenstein (1996), "Out of control: Visceral influences on behavior," *OBHDP*; Van Boven & Loewenstein (2003); Nordgren, van Harreveld & van der Pligt (2009), the "restraint bias" study of smokers cited in Chapter 6.`,
    debate: `Projection bias is well supported in field data, for example grocery purchases made while hungry and catalog orders of cold-weather clothing on cold days (Conlin, O'Donoghue & Vogelsang, 2007). The restraint-bias paradox, where people more confident in their self-control expose themselves to more temptation, is a strong argument for Duckworth's humility about willpower.`,
    find: ["empathy gap"], where: [["situated", "ch06", "Seinfeld, Loewenstein"]], related: ["intention-action-gap", "commitment-device", "planner-doer", "delay-discounting"],
  },
  "commitment-device": {
    term: "Commitment device", cat: "Behavioral economics", aka: ["precommitment", "binding yourself to the mast", "Ulysses contract"],
    short: "An arrangement made now that restricts or penalizes your future options, so your later, tempted self cannot easily undo your current, wiser choice.",
    deep: `Odysseus asking to be tied to the mast before passing the Sirens is the founding image. Thomas Schelling called the inner struggle "the intimate contest for self-command" and catalogued "little tricks": flushing cigarettes, putting the alarm across the room, setting your watch fast.

Modern versions include savings accounts that lock funds until a goal is met, apps that block websites, and stakes contracts (stickK.com).`,
    origin: `Strotz (1955) on dynamic inconsistency; Schelling (1978, 1980, 1984); Elster, *Ulysses and the Sirens* (1979).`,
    debate: `Field evidence is mixed but real. A Philippine commitment-savings product raised savings (Ashraf, Karlan & Yin, 2006), and a commitment contract raised smoking cessation (Giné, Karlan & Zinman, 2010). But take-up is often low, and some people commit to goals they then fail and pay for (Bryan, Karlan & Nelson, 2010). Kristal & Zlatev (2024), cited in Ch. 4, find observers trust commitment-device users *less*, a social cost of situational strategies.`,
    find: ["bind yourself to the mast"], where: [["situated", "ch06", "Schelling, Odysseus"], ["situated", "ch04", "social costs"]], related: ["empathy-gap", "planner-doer", "situation-selection", "friction"],
  },
  "planner-doer": {
    term: "Planner–Doer model", cat: "Behavioral economics", aka: ["dual-self model", "multiple selves"],
    short: "Thaler and Shefrin's model of a far-sighted \"planner\" self that tries to control a myopic \"doer\" self, much as a firm's owner controls a manager.",
    deep: `Richard Thaler, who calls himself lazy and a daydreamer, built it into a theory. The Planner cares about lifetime welfare. The Doer lives in the moment. The Planner can control the Doer by changing incentives or constraints, which cost something, or by willpower, which costs effort.

*Situated* turns this into practical advice: nudge your "Future Self" by making wise choices obvious, easy, and rewarding.`,
    origin: `Thaler & Shefrin (1981), "An economic theory of self-control," *Journal of Political Economy*. Later formal dual-self models: Fudenberg & Levine (2006).`,
    debate: `Philosophers ask whether "selves" are a metaphor or a claim about the mind (Ainslie's *Picoeconomics*, 1992, models intertemporal bargaining between successive selves). Psychology increasingly frames the conflict as competing valuation processes rather than two agents.`,
    find: ["the Planner"], where: [["situated", "ch06"]], related: ["empathy-gap", "commitment-device", "nudge", "multiple-selves"],
  },
  nudge: {
    term: "Nudge", cat: "Behavioral economics", aka: ["choice architecture", "libertarian paternalism"],
    short: "Any aspect of how choices are presented that predictably changes behavior without forbidding options or significantly changing economic incentives.",
    deep: `Thaler & Sunstein's *Nudge* (2008) argued that there is no neutral way to present a choice, so designers ("choice architects") should present choices in ways that help people by their own lights. Classic examples in *Situated* include water at eye level, auto-enrollment in retirement plans (Madrian & Shea, 2001), slower elevator doors, rumble strips, and the Schiphol urinal fly.

Duckworth's "nudge thyself" applies the logic to your own environment, a move Reijula & Hertwig (2022) call **self-nudging**.`,
    origin: `Thaler & Sunstein (2008); the UK Behavioural Insights Team (2010) and later hundreds of government "nudge units"; Thaler's 2017 Nobel Prize.`,
    debate: `Two live debates. **Effect size:** DellaVigna & Linos (2022, *Econometrica*) compared academic nudge papers (average effect ~8.7 percentage points) with all trials run by two US nudge units (~1.4 points). Most of the gap came from publication bias. A 2022 *PNAS* meta-analysis reporting d≈0.43 was challenged as showing no reliable effect after bias correction (Maier et al., 2022). **Ethics:** critics worry about manipulation and paternalism; defenders say influence is unavoidable and nudges preserve choice. Megastudies (Milkman, Duckworth et al.) try to address the first problem by testing many nudges at once.`,
    find: ["nudge"], where: [["situated", "ch06", "nudge thyself"], ["situated", "ch11", "Cleveland Clinic labels"]], related: ["default-effect", "friction", "megastudy", "situational-responsibility"],
  },
  "default-effect": {
    term: "Default effect", cat: "Behavioral economics", aka: ["status quo default", "opt-out design"],
    short: "People disproportionately stick with whatever option is preselected, so setting the default changes outcomes.",
    deep: `When 401(k) enrollment became automatic, participation among new hires jumped from roughly half to almost all (Madrian & Shea, 2001). Organ-donation rates differ hugely between opt-in and opt-out countries (Johnson & Goldstein, 2003). Defaults work through inertia, through implied endorsement ("this must be recommended"), and through loss aversion relative to the reference point.

The default effect is the institutional cousin of [[status-quo-bias]] in Chapter 9: in both, the current situation has gravity.`,
    origin: `Samuelson & Zeckhauser (1988) on status quo bias; Madrian & Shea (2001).`,
    debate: `Defaults are among the most robust nudges (Jachimowicz et al., 2019 meta-analysis, d≈0.68), though effects vary with how much people care and whether the default seems to carry an implicit recommendation.`,
    find: ["default option"], where: [["situated", "ch06"]], related: ["nudge", "status-quo-bias", "friction"],
  },
  friction: {
    term: "Friction", cat: "Behavior change", aka: ["hassle factors", "channel factors"],
    short: "Small obstacles (extra clicks, steps, seconds, or distance) between you and an action. They matter far more than people expect.",
    deep: `"Friction up" for temptations and "friction down" for goals is the second rule of setting up your space. Asaf Mazar's research, cited in Chapter 6, shows people systematically underestimate friction, for example how much distance to a polling place lowers turnout. Amazon's one-click patent made the commercial version of the point.

Kurt Lewin called these "channel factors": small situational paths that open or block action. In a classic study, students given a map and asked to plan a time were far more likely to get a tetanus shot (Leventhal, Singer & Jones, 1965).`,
    origin: `Lewin's channel factors; Ross & Nisbett (1991) made them a centerpiece of *The Person and the Situation*; Wendy Wood's habit research calls friction the most underrated lever.`,
    debate: `The One Sec app study (Grüning, Riedel & Lorenz-Spreen, 2023, *PNAS*) is a clean field test: a few seconds' delay cut opening of target apps by 57%. Friction can also be used against people ("sludge"; Sunstein, 2021), for example hard-to-cancel subscriptions.`,
    find: ["friction"], where: [["situated", "ch06", "make it easy"]], related: ["nudge", "habit", "physical-distance", "default-effect"],
  },
  habit: {
    term: "Habit", cat: "Behavior change", aka: ["automaticity", "neural autopilot"],
    short: "A learned, automatic link between a situational cue and a response, triggered without deliberation. In Three Boxes terms, Box One directly produces Box Three.",
    deep: `Duckworth's key correction to folk wisdom is that repetition alone does not make a habit; **repetition in the same situation** does. Habits link context to action, which is why they survive changes in motivation and why changing context (a move, a new job) is the best time to break or build them (the "habit discontinuity hypothesis," Verplanken & Wood, 2006).

She calls habits "the holy grail of behavior change," because once formed they need no willpower. William James said much the same in 1890: hand the details of life "to the effortless custody of automatism."`,
    origin: `William James, *Principles of Psychology* (1890); Wood & Neal (2007) "A new look at habits and the habit–goal interface"; Wood, *Good Habits, Bad Habits* (2019); Camerer et al.'s "neural autopilot" theory (2024).`,
    debate: `How long habit formation takes varies widely: in Lally et al. (2010) the median was 66 days, with a range of 18 to 254. Researchers also debate how much everyday behavior is truly habitual. Wood estimated roughly 43% of daily actions are performed in the same context nearly every day.`,
    find: ["habit"], where: [["situated", "ch06", "from goals to habits"], ["grit", "ch07"]], related: ["neural-autopilot", "friction", "three-boxes", "temptation-bundling"],
  },
  "neural-autopilot": {
    term: "Neural autopilot", cat: "Behavior change",
    short: "Colin Camerer's term for the brain's switch from deliberate, value-computing choice to automatic, habitual responding in familiar, stable situations.",
    deep: `In the neural-autopilot theory (Camerer, Xin & Zhao, 2024), the brain tracks how reliably a choice has paid off in a given context. When the reward is stable, control shifts to an automatic system. When surprise rises, it shifts back. This mirrors the neuroscience distinction between goal-directed (prefrontal, dorsomedial striatum) and habitual (dorsolateral striatum) control.

For Duckworth, it is the mechanism by which a well-designed space eventually lets you "do what's right automatically."`,
    origin: `Camerer, Xin & Zhao (2024), *JEAB*; Daw, Niv & Dayan (2005) on model-based vs. model-free control.`,
    find: ["neural autopilot"], where: [["situated", "ch06"]], related: ["habit"],
  },
  "temptation-bundling": {
    term: "Temptation bundling", cat: "Behavior change",
    short: "Pairing something you should do but don't enjoy (a \"should\") with something you enjoy but shouldn't overdo (a \"want\"), such as audiobooks only at the gym.",
    deep: `Katy Milkman coined the term. In the original field experiment (Milkman, Minson & Volpp, 2014), gym members who could listen to page-turner audiobooks *only* at the gym initially exercised more, though the effect faded after a holiday break. Duckworth's collaboration (Kirgios et al., 2020) found a roughly 10% boost in gym visits from teaching the idea and giving a free audiobook.

It works at the third rule, "make it rewarding," by adding immediate reward to a behavior whose payoff is delayed.`,
    origin: `Milkman, Minson & Volpp (2014), *Management Science*; Milkman, *How to Change* (2021).`,
    debate: `Effects are real but modest and decay. It also helps to pick an activity you enjoy in the first place (Woolley & Fishbach, 2016, cited in Ch. 6), which raised persistence more than picking the "most useful" exercise.`,
    find: ["temptation bundling"], where: [["situated", "ch06"]], related: ["habit", "delay-discounting", "megastudy"],
  },
  "delay-discounting": {
    term: "Delay discounting", cat: "Behavioral economics", aka: ["temporal discounting", "hyperbolic discounting", "present bias"],
    short: "The tendency to value rewards less the further away they are in time. Humans and other animals discount steeply, especially over short delays.",
    deep: `Discounting explains why "make it rewarding *now*" matters. A reward delayed even seconds can lose much of its pull, which is why page-load times affect engagement and why moving the phone farther away weakens its grip.

Hyperbolic (rather than exponential) discounting predicts **preference reversals**: you prefer $110 in 31 days over $100 in 30 days, but $100 today over $110 tomorrow. That inconsistency is what commitment devices exploit.`,
    origin: `Ainslie (1975), "Specious reward"; Laibson (1997) quasi-hyperbolic "beta-delta" model; Rachlin, *The Science of Self-Control* (2000), cited in Ch. 9.`,
    debate: `Measured discount rates vary with framing, magnitude, and domain. Some "impatience" reflects reasonable uncertainty or scarcity rather than bias: for people facing instability, discounting the future can be rational (Kidd, Palmeri & Aslin, 2013, on the marshmallow test and reliability of the environment).`,
    find: ["steeply discount"], where: [["situated", "ch06", "physical distance"]], related: ["empathy-gap", "commitment-device", "physical-distance"],
  },
  "physical-distance": {
    term: "Physical distance → psychological distance", cat: "Behavior change", aka: ["proximity effect"],
    short: "Duckworth's rule that moving a temptation farther away makes it less obvious, less easy, and less immediately rewarding all at once, and moving a goal closer does the reverse.",
    deep: `"What you want to do more, draw near. And what you want to do less, push away." The rule bundles all three habit levers into one move. Evidence includes the cafeteria water-bottle study, candy-dish proximity studies (Wansink, Painter & Lee, 2006: candy within reach was eaten more), and Duckworth's own survey of where teens put their phones while studying.

Duckworth's "personal space" is roughly Leonardo's Vitruvian square, about three feet in any direction. Within it, objects "loom large."`,
    origin: `Proxemics (Hall, 1966) for the spatial zones; Cole, Dominick & Balcetis (2021) on distancing as a self-control strategy.`,
    debate: `Note the caveat on food-environment research: several studies by Brian Wansink were retracted for data problems (2017–2019). The proximity principle itself is supported by independent work (e.g., Hunter et al., 2019, on food distance). The "farther the phone, the higher the GPA" result in Ch. 6 is from a manuscript in preparation and correlational: students who leave phones in another room may differ in many ways.`,
    find: ["physical distance creates psychological distance"], where: [["situated", "ch06"], ["situated", "ch11", "Cleveland Clinic offices"]], related: ["friction", "delay-discounting", "habit"],
  },
  "prospective-memory": {
    term: "Prospective memory", cat: "Cognitive psychology",
    short: "Remembering to do something in the future, at the right moment. It fails surprisingly often, and external cues fix it.",
    deep: `Forgetting intentions is the problem "make it obvious" solves. Einstein, McDaniel and colleagues showed intentions are forgotten within seconds when people are interrupted, and that a simple external cue (a blue dot) eliminated the interruption effect. Checklists in medicine and aviation externalize prospective memory for life-or-death procedures.`,
    origin: `Einstein & McDaniel (1990s–2000s); Crovitz & Daniel (1984) on everyday forgetting.`,
    debate: `The Keystone ICU project in Michigan (Pronovost et al., 2006, *NEJM*) cut catheter infections by about two-thirds with a checklist plus culture change. Later mandated checklists sometimes failed (Urbach et al., 2014, Ontario surgical checklist). That suggests the checklist works through the surrounding culture, not just the paper. Duckworth would say: through peers and leadership too.`,
    find: ["half of the things we forget"], where: [["situated", "ch06", "make it obvious"]], related: ["habit", "friction"],
  },
  "fundamental-attribution-error": {
    term: "Fundamental attribution error", cat: "Social psychology", aka: ["correspondence bias", "dispositional bias"],
    short: "The tendency to explain other people's behavior by their character or abilities while underestimating the power of their situation.",
    deep: `Lee Ross named it in 1977, generalizing an earlier finding by Jones & Harris (1967): readers judged an essay-writer's true attitude from the essay even when told a coin flip had assigned the position. Ross's "quiz bowl" study, told in Chapter 3, showed questioners look smarter than contestants even when everyone knows roles were assigned at random.

Duckworth gives two explanations, one perceptual and one economic. We process people as figures and situations as backgrounds ("portrait mode"). And even NFL teams pay quarterbacks for "yards after catch," which depend on receivers and are not consistent when a quarterback changes teams.`,
    origin: `Jones & Harris (1967); Ross (1977), "The intuitive psychologist and his shortcomings"; Ross, Amabile & Steinmetz (1977); Gilbert & Malone (1995), "The correspondence bias," *Psychological Bulletin*.`,
    debate: `Three qualifications are worth raising. **Culture:** people in more collectivist cultures make more situational attributions (Miller, 1984; Morris & Peng, 1994), so the error is not equally "fundamental" everywhere. **Actor–observer asymmetry:** the classic claim that we blame situations for our own behavior and dispositions for others' did not hold up in a meta-analysis (Malle, 2006). **Accuracy:** some argue dispositional inferences are often reasonable shortcuts, since people do select their situations (Funder). Duckworth's twist is to apply the error to *ourselves*: we underweight our own situations too.`,
    find: ["fundamental attribution error"], where: [["situated", "ch03", "Lee Ross; NFL quarterbacks"]], related: ["situational-awareness", "person-situation-debate", "personality-range"],
  },
  "personality-range": {
    term: "Personality range (traits as density distributions)", cat: "Personality psychology", aka: ["within-person variability", "personality states", "whole trait theory"],
    short: "The finding that a person's behavior varies enormously from situation to situation. A trait is better described as the average of a wide distribution of states than as a fixed level.",
    deep: `"To an astonishing degree, your personality has range." William Fleeson asked people to report their behavior several times a day. The spread of any one person's extraversion across a week was typically as wide as, or wider than, the difference between people's averages. Yet the *averages* were very stable from week to week.

This reconciles the person–situation debate. Traits are real and predictive in aggregate; situations drive moment-to-moment behavior. Duckworth's personal examples (Angela-the-professor vs. teenage Angela on her parents' carpet) are density distributions in miniature.`,
    origin: `Fleeson (2001), *JPSP*; Fleeson & Jayawickreme (2015), "Whole trait theory." The Little League study (Smith, Shoda, Cumming & Smoll, 2009) shows stable *if–then* signatures.`,
    debate: `Interactionists (Mischel & Shoda's CAPS model, 1995) add that variability is not noise: each person has a stable pattern of *how* they vary across situations, an "if…then" behavioral signature. Duckworth's coaches illustrate that: one praises when winning, another when losing.`,
    find: ["personality has range"], where: [["situated", "ch03"]], related: ["multiple-selves", "person-situation-debate", "modes", "interactionism"],
  },
  "multiple-selves": {
    term: "Multiple selves", cat: "Personality psychology", aka: ["self-complexity", "role identities"],
    short: "The idea that each of us has several identities or modes, each activated by particular people and places. Duckworth argues this is normal and healthy, not a disorder.",
    deep: `Whitman's "I contain multitudes" and Montaigne's "we are more unlike ourselves than we are unlike other people" frame the chapter. In psychology, the idea appears in William James's "social selves" (a person "has as many social selves as there are individuals who recognize him"), in role theory, in Linville's self-complexity research, and in Beck's late theory of modes.

The practical consequence: if the situation triggers which self appears, choosing situations is choosing which self you will be.`,
    origin: `James, *Principles of Psychology* (1890); Markus & Nurius, "Possible selves" (1986); Beck's theory of modes (1996, 2021).`,
    debate: `Behavioral economists use "multiple selves" for *temporal* conflict (Planner vs. Doer), while personality psychologists use it for *contextual* variation. Duckworth uses both senses: Ch. 3 is contextual and Ch. 6 temporal. Be alert to the shift when discussing them.`,
    find: ["multiple personalities"], where: [["situated", "ch03"], ["situated", "ch06", "Night Guy / Morning Guy"]], related: ["personality-range", "modes", "planner-doer", "dissociative-identity-disorder"],
  },
  "dissociative-identity-disorder": {
    term: "Dissociative identity disorder (DID)", cat: "Clinical psychology", aka: ["multiple personality disorder (former name)"],
    short: "A rare and controversial psychiatric diagnosis involving two or more distinct identity states with gaps in memory between them. It is not the same as ordinary situational variation.",
    deep: `Duckworth corrects Jason's joke by noting the name change. "Multiple personality disorder" became DID in DSM-IV (1994). The diagnosis requires disruption of identity plus recurrent amnesia. Duckworth's point is the contrast: ordinary people switch modes *with* awareness and continuity; DID involves a breakdown of that continuity.`,
    origin: `DSM-IV (1994); DSM-5-TR (2022).`,
    debate: `DID's causes are disputed between the trauma model (dissociation as a response to severe early trauma) and the sociocognitive model (identities shaped partly by therapy, media, and expectations; Lilienfeld et al., 1999; Lynn et al., 2014).`,
    find: ["dissociative identity disorder"], where: [["situated", "ch03"]], related: ["multiple-selves", "modes"],
  },
  modes: {
    term: "Modes (Beck's theory of modes)", cat: "Clinical psychology", aka: ["adaptive mode", "recovery-oriented cognitive therapy", "CT-R"],
    short: "Aaron Beck's late-career idea that personality shifts \"drastically and holistically\" into different states, or modes, depending on fit with the environment, and that therapy can deliberately activate adaptive ones.",
    deep: `Beck founded cognitive therapy on the idea that distorted thoughts (Box Two) cause problematic emotions (Box Three). His later theory of modes adds Box One. Clusters of beliefs, motives, and behaviors switch on together in particular situations.

**Recovery-oriented cognitive therapy (CT-R)**, developed with Paul Grant and colleagues for people with serious mental illness, looks for the "adaptive mode": situations and activities that activate a person's energy and values. Then it builds life around them. The story of David in the hospital cafeteria comes from this work.`,
    origin: `Beck (1996), "Beyond belief: A theory of modes, personality, and psychopathology"; Beck, Grant, Inverso, Brinen & Perivoliotis (2021), *Recovery-Oriented Cognitive Therapy for Serious Mental Health Conditions*; Beck, Finkel & Beck (2021), *Cognitive Therapy and Research*.`,
    debate: `CT-R has encouraging but still limited trial evidence (e.g., Grant et al., 2012, *Archives of General Psychiatry*, with low-functioning patients with schizophrenia). It belongs to the broader recovery and strengths-based movement in psychiatry.`,
    find: ["modes"], where: [["situated", "ch03", "the sweet spot; David"]], related: ["cognitive-therapy", "multiple-selves", "sweet-spot"],
  },
  "cognitive-therapy": {
    term: "Cognitive therapy (CBT)", cat: "Clinical psychology", aka: ["cognitive behavioral therapy"],
    short: "A form of psychotherapy, founded by Aaron T. Beck in the 1960s, that treats emotional problems by identifying and correcting distorted, automatic thoughts.",
    deep: `Beck noticed his depressed patients had rapid, negative "automatic thoughts" about themselves, the world, and the future (the cognitive triad). Therapy teaches clients to catch, test, and revise those thoughts. In Three Boxes terms, it is a Box Two intervention. CBT is now the best-evidenced psychotherapy for depression and anxiety disorders.

Duckworth's friendship with Beck at the end of his life (he died in 2021 at 100) led her to his late emphasis on situations.`,
    origin: `Beck (1963, 1967); Albert Ellis's rational emotive therapy is a parallel tradition. Behavioral activation (Jacobson; Martell), a component that schedules rewarding activities, is effectively a Box One intervention and does about as well as full CBT for depression (Dimidjian et al., 2006).`,
    find: ["cognitive therapy"], where: [["situated", "ch03"], ["grit", "ch09", "Beck and Seligman"]], related: ["modes", "cognitive-reappraisal", "explanatory-style"],
  },
  "sweet-spot": {
    term: "Sweet spot (challenge + support)", cat: "Core concept", aka: ["high challenge, high support"],
    short: "A situation that is both demanding and supportive. Low on both breeds apathy, support alone breeds complacency, challenge alone breeds burnout.",
    deep: `This 2×2 is the most portable idea in the book. It reappears in mentoring (high standards plus belief), leadership (the Cleveland Clinic's institutes), culture (Wegmans: "high standards and caring go hand in hand"), parenting (*Grit*'s "wise parenting" grid), and citizenship (Bill Strickland: the poor need challenge as well as support).

It has deep roots: Baumrind's authoritative parenting, Vygotsky's zone of proximal development (challenge just beyond current skill, with scaffolding), Csikszentmihalyi's flow channel, Yeager et al.'s "wise feedback" ("I'm giving you these comments because I have very high expectations and I know that you can reach them"), and Kim Scott's Radical Candor.`,
    origin: `Duckworth's synthesis; Beck's clinical phrase "sweet spot"; Yeager et al. (2014), "Breaking the cycle of mistrust: Wise interventions to provide critical feedback across the racial divide," *JEP: General*.`,
    debate: `The 2×2 is a heuristic. In real data, challenge and support are continuous, and the right mix varies by person, task, and moment. Too much challenge even *with* support can still overwhelm. The Yerkes–Dodson inverted-U relationship between arousal and performance is the classic caution.`,
    find: ["sweet spot"], where: [["situated", "ch03", "the 2×2"], ["situated", "ch09", "Wegmans"], ["situated", "ch11"], ["grit", "ch10", "wise parenting"]],
    related: ["burnout", "radical-candor", "authoritative-parenting", "zone-proximal"],
  },
  burnout: {
    term: "Burnout", cat: "Organizational psychology",
    short: "A syndrome of exhaustion, cynicism or detachment, and reduced efficacy that results from chronic workplace stress. Christina Maslach traces it to a mismatch between person and job.",
    deep: `Maslach (with Susan Jackson) built the Maslach Burnout Inventory in 1981. With Michael Leiter she identified six areas of worklife where mismatches cause burnout: workload, control, reward, community, fairness, and values. Her point, which Duckworth quotes, is that "there is a bias toward fixing people, rather than fixing the job situation."

Duckworth's own Act II is a burnout story. In the sweet-spot grid, burnout is high challenge without support.`,
    origin: `Freudenberger (1974) coined the clinical usage; Maslach & Jackson (1981); WHO's ICD-11 (2019) classifies it as an "occupational phenomenon," not a medical condition.`,
    debate: `Researchers debate whether burnout is distinct from depression. Bianchi, Schonfeld & Laurent (2015) find heavy overlap; Maslach maintains it is a work-specific syndrome. The intervention literature mirrors Duckworth's theme: organization-level changes outperform individual resilience training (Panagioti et al., 2017, physician burnout meta-analysis).`,
    find: ["burnout"], where: [["situated", "ch03"], ["situated", "ch05", "Act II"], ["situated", "ch11", "physician burnout"]], related: ["sweet-spot", "radical-candor"],
  },
  "radical-candor": {
    term: "Radical Candor", cat: "Management",
    short: "Kim Scott's management framework: care personally while challenging directly. Too much niceness without challenge becomes \"ruinous empathy.\"",
    deep: `Scott's 2×2 has "care personally" on one axis and "challenge directly" on the other, giving radical candor, ruinous empathy, obnoxious aggression, and manipulative insincerity. Duckworth cites it as the workplace version of the sweet spot, and in Ch. 8 retells Scott's advice for receiving feedback: "reward the feedback," and per Sheryl Sandberg, overcorrect.`,
    origin: `Scott, *Radical Candor* (2017).`,
    find: ["Radical Candor"], where: [["situated", "ch03"], ["situated", "ch08", "reward the feedback"]], related: ["sweet-spot", "mentor"],
  },
  "behavior-setting": {
    term: "Behavior setting", cat: "Ecological psychology",
    short: "Roger Barker's unit of analysis: a bounded place-and-time with a standing pattern of behavior (a drugstore, a courtroom, a church potluck) that coerces people into conformity largely regardless of who they are.",
    deep: `At the Midwest Psychological Field Station in Oskaloosa, Kansas (1947–1972), Barker and Herbert Wright's teams recorded children's behavior minute by minute (*One Boy's Day*, 1951). They found behavior was better predicted by *where* a child was than by *who* the child was. Second graders "cease writing, reading, spelling… with startling swiftness and unanimity" when crossing to the playground.

Settings have "programs" and enforce them through social norms and physical layout. Deviants get corrected or "vetoed," meaning ejected. Barker's later "undermanning" (staffing) theory showed small schools, with fewer people per setting, pull more students into active roles (Barker & Gump, *Big School, Small School*, 1964).`,
    origin: `Barker, *Ecological Psychology* (1968); Barker & Wright, *Midwest and Its Children* (1955); Barker (1979) autobiographical article cited in Ch. 4.`,
    debate: `Barker's work faded partly because it was labor-intensive and seemed to threaten agency, Duckworth's reading. It has revived in public health (Val Curtis's "Behaviour Centred Design"), environmental psychology, and smartphone-based "ecological momentary assessment." Critics note behavior settings describe *conformity* well and individual differences within settings less well.`,
    find: ["behavior settings", "behavior setting"], where: [["situated", "ch04", "Roger Barker; Val Curtis"]], related: ["situation", "ecological-psychology", "social-norms", "culture"],
  },
  "ecological-psychology": {
    term: "Ecological / environmental psychology", cat: "Ecological psychology",
    short: "The study of behavior in its natural physical and social settings rather than in the lab. It includes Barker's behavior settings and later work on how built environments shape action.",
    deep: `"Ecological psychology" covers two traditions: Barker's study of settings, and J. J. Gibson's ecological approach to perception (affordances: what an environment offers an animal). Environmental psychology broadened into architecture, crowding, noise, nature exposure, and design. Bronfenbrenner's *ecological systems theory* (1979) nested a child's micro-, meso-, exo-, and macrosystems, a near ancestor of *Situated*'s space–peers–mentors–culture rings.`,
    origin: `Barker (1968); Gibson (1979); Bronfenbrenner (1979).`,
    find: ["environmental psychology"], where: [["situated", "ch04"]], related: ["behavior-setting", "situation"],
  },
  "strategy-beliefs": {
    term: "Strategy beliefs (situation neglect)", cat: "Self-control", aka: ["moral character beliefs", "willpower worship"],
    short: "The belief that needing strategies (apps, accountability partners, keeping temptations away) signals weak self-control, which leads people to neglect the most effective ones.",
    deep: `Chapter 4 assembles several findings into one argument: we moralize willpower. Observers judge medication users as having weaker character ("Good people don't need medication"). They distrust people who use commitment devices (Kristal & Zlatev, 2024). Teens advise friends to use situational strategies but bully themselves with "just suck it up." Adults say situation change is better, then report using willpower anyway, because they want to be "the type of person" who doesn't need help.

The **Strategy Beliefs Scale** items ("If someone has to trick themselves into keeping their goals… they lack self-control") come from Gennara, Peetz & Milyavskaya.`,
    origin: `Gennara, Peetz & Milyavskaya, *JESP*; Kristal & Zlatev (2024), *JPSP*; Kristal, Duckworth et al., "Situation neglect" (manuscript in preparation).`,
    debate: `Philosophers note an old tension: Aristotle distinguished the *enkratic* person, who resists temptation by effort, from the *temperate* person, who doesn't feel it. He ranked temperance higher, which supports Duckworth: not wanting the cookie beats resisting it. Kant, by contrast, located moral worth in acting from duty against inclination. Our admiration for willpower may be Kantian.`,
    find: ["Strategy Beliefs Scale"], where: [["situated", "ch04"]], related: ["willpower", "commitment-device", "self-control"],
  },
  "obesogenic-environment": {
    term: "Obesogenic environment", cat: "Public health",
    short: "Surroundings that promote weight gain: ubiquitous cheap, energy-dense, heavily marketed food, large portions, and car-dependent design.",
    deep: `Swinburn and colleagues (1999) coined "obesogenic" for environments that make the healthy choice hard. Duckworth uses it to make the Ch. 4 argument: if Box One is engineered against you, Box Three willpower is a weak defense. Medication is then a legitimate way to reduce the situation's grip.`,
    origin: `Swinburn, Egger & Raza (1999), ANGELO framework.`,
    debate: `How much the environment versus biology explains obesity is debated. Twin studies estimate BMI heritability at 40–70%, but heritability can coexist with environmental causes of the population-wide rise. Genes shape who is susceptible to the environment.`,
    find: ["obesogenic"], where: [["situated", "ch04"]], related: ["ultraprocessed-food", "glp1", "behavior-setting"],
  },
  "ultraprocessed-food": {
    term: "Ultraprocessed food", cat: "Public health", aka: ["UPF", "NOVA group 4"],
    short: "Industrial food formulations, usually high in sugar, fat, salt, and additives, engineered for palatability and convenience. They make up over half of US calories.",
    deep: `The NOVA classification (Carlos Monteiro) sorts foods by degree of processing. In a tightly controlled inpatient trial, people offered ultraprocessed diets ate about 500 more calories a day than when offered unprocessed diets matched on nutrients, and gained weight (Hall et al., 2019, *Cell Metabolism*). That is a striking situational effect on intake.`,
    origin: `Monteiro et al. (2010 onward); Hall et al. (2019).`,
    debate: `Critics argue NOVA lumps nutritionally different foods together and that "processing" is a proxy for energy density and palatability. The comparison to nicotine's dopamine response is contested. "Food addiction" is not a formal DSM diagnosis, though the Yale Food Addiction Scale is widely studied.`,
    find: ["ultraprocessed"], where: [["situated", "ch04"]], related: ["obesogenic-environment", "glp1"],
  },
  glp1: {
    term: "GLP-1 receptor agonists", cat: "Medicine", aka: ["semaglutide", "Ozempic", "Wegovy", "tirzepatide"],
    short: "Medications that mimic the gut hormone GLP-1, slowing digestion and signaling fullness to the brain. Users often report that \"food noise\" goes quiet.",
    deep: `Approved first for type 2 diabetes, semaglutide (Wegovy, 2021) and tirzepatide (Zepbound, 2023) produce average weight losses of roughly 15–20% in trials (STEP-1, SURMOUNT-1). Duckworth's provocative move is to classify medication as a **Box One** change: something you deliberately introduce into your situation (your body chemistry) to reduce the environment's pull on Box Two thoughts.`,
    origin: `Discovery of incretin hormones (1980s); Wilding et al. (2021), *NEJM* (STEP-1).`,
    debate: `Open questions include long-term safety, cost and access, loss of lean mass, and weight regain after stopping (STEP-1 extension). Ethically, the "it's cheating" intuition Duckworth challenges is exactly what Scott & colleagues' "Good people don't need medication" studies measure. Is treating a biological predisposition with medication more like using a commitment device, or more like changing who you are?`,
    find: ["GLP-1"], where: [["situated", "ch04", "Aaron Carroll, Oprah"]], related: ["obesogenic-environment", "strategy-beliefs"],
  },
  "serenity-prayer": {
    term: "Serenity Prayer", cat: "Philosophy & culture",
    short: "\"God, grant me the serenity to accept the things I cannot change; courage to change the things I can; and the wisdom to know the difference.\" Usually attributed to Reinhold Niebuhr.",
    deep: `Niebuhr composed versions in the early 1930s; Alcoholics Anonymous adopted it in the 1940s. Its Stoic ancestry runs through Epictetus's dichotomy of control: "Some things are up to us and some are not."

Duckworth annotates it. Unchangeable things include your genes and past as well as your birthplace. Changeable things include your personal space and company as well as your mindset. That makes "control the controllables" a 2×2 rather than an inside/outside split.`,
    origin: `Niebuhr (c. 1932–43); Epictetus, *Enchiridion* 1.`,
    find: ["Serenity Prayer"], where: [["situated", "ch04"], ["situated", "ch07", "AA meetings"]], related: ["situational-agency", "aa"],
  },
  "peer-effects": {
    term: "Peer effects", cat: "Economics of education", aka: ["social contagion", "peer influence"],
    short: "The causal influence of the people around you (roommates, classmates, coworkers, neighbors) on your behavior and outcomes.",
    deep: `Peer effects are hard to measure because people choose their friends (selection) and share environments (common shocks). The cleanest designs use random assignment. Dartmouth randomly assigned roommates (Sacerdote, 2001): roommates' GPAs and fraternity choices rubbed off. Other designs use military postings (Datar & Nicosia, 2018) or randomly assigned residence halls (Ricart-Huguet & Paluck).

Chapters 7 and 9 lean on this literature for drinking, BMI, civic engagement, and career choices.`,
    origin: `Manski (1993) on the "reflection problem"; Sacerdote (2001, 2014 review); Christakis & Fowler's network-contagion studies (2007).`,
    debate: `Christakis & Fowler's claims that obesity and happiness spread through networks were criticized for confounding by homophily and shared environments (Cohen-Cole & Fletcher, 2008; Shalizi & Thomas, 2011). Randomized-roommate studies find real but usually modest and domain-specific peer effects.`,
    find: ["peer pressure"], where: [["situated", "ch07"], ["situated", "ch09", "roommates"]], related: ["peer-accountability", "collective-brain", "social-norms"],
  },
  "peer-accountability": {
    term: "Peer accountability", cat: "Behavior change", aka: ["public commitment", "commitment card"],
    short: "Making a goal public and checkable by peers who hold you to it while you hold them to theirs. De La Salle's Commitment Cards are the model.",
    deep: `Duckworth notes that the Commitment Card ritual matches research on goal setting. Specific, measurable goals work (Locke & Latham, 2002). An audience raises follow-through: in a 180,000-household field experiment, telling voters their neighbors would see who voted raised turnout (Gerber, Green & Larimer, 2008). Face-to-face commitment adds more (Epton, Currie & Armitage, 2017).

Her addition, which she flags as untested, is **reciprocity**: mutual accountability may be stronger than one-way.`,
    origin: `Cialdini's commitment and consistency principle (*Influence*, 1984); Gerber, Green & Larimer (2008).`,
    debate: `Public announcement can backfire for identity goals. Announcing "I will become a lawyer" can create a premature sense of completion (Gollwitzer et al., 2009, "When intentions go public"). The difference may lie in announcing *specific actions* to people who will *check*, which is exactly how the Commitment Cards work.`,
    find: ["peer accountability"], where: [["situated", "ch07", "De La Salle Spartans"]], related: ["peer-effects", "commitment-device"],
  },
  "collective-brain": {
    term: "Collective brain", cat: "Cultural evolution", aka: ["cumulative culture", "cultural intelligence hypothesis"],
    short: "Joseph Henrich and Michael Muthukrishna's thesis that human innovation comes mainly from large, interconnected groups learning from one another, not from solitary genius.",
    deep: `Henrich argues humans are a "cultural species." Our survival depends on accumulated know-how no individual could reinvent: how to process manioc safely, build a kayak, or hunt seals. In the "relay" experiment Duckworth describes (Muthukrishna et al., 2014), participants who could learn from five predecessors improved over generations, while those learning from one did not.

Corollaries: bigger and better-connected populations innovate more, and isolation can cause technological *loss*. The Tasmanian case is the famous, debated example.`,
    origin: `Boyd, Richerson & Henrich (2011), *PNAS*; Henrich, *The Secret of Our Success* (2016); Herrmann et al. (2007), *Science*, the cultural intelligence hypothesis.`,
    debate: `The population-size–complexity link is contested in ethnographic data (Collard et al.) and in the Tasmanian case. Critics also argue the theory under-weights individual cognition. As a frame for "pick your peers," the key claim is modest and well supported: social learning beats individual trial and error for most problems.`,
    find: ["collective brain"], where: [["situated", "ch07"]], related: ["peer-effects", "illusion-self-sufficiency", "superforecasting"],
  },
  "illusion-self-sufficiency": {
    term: "Illusion of self-sufficiency", cat: "Cognitive development",
    short: "The overestimate of how much we could have figured out alone. Learners who were helped often believe they would have discovered the solution unaided.",
    deep: `Richardson, Sheskin & Keil (2021) showed children who learned with scaffolding later overestimated how well they would have done on their own, while observers did not. It is a cousin of the "illusion of explanatory depth" (Rozenblit & Keil, 2002) and of the [[fundamental-attribution-error]] applied to our own learning: we credit ourselves and forget the situation that taught us.`,
    origin: `Richardson, Sheskin & Keil (2021), *Child Development*.`,
    find: ["illusion of self-sufficiency"], where: [["situated", "ch07"]], related: ["collective-brain", "fundamental-attribution-error"],
  },
  "social-loafing": {
    term: "Social loafing", cat: "Social psychology", aka: ["Ringelmann effect"],
    short: "Reduced individual effort when working in a group whose output is pooled, because individual contribution is less identifiable.",
    deep: `Ringelmann (1913) found people pulled less hard on a rope in groups. Latané, Williams & Harkins (1979) showed similar drops for clapping and shouting. Karau & Williams's (1993) meta-analysis found loafing shrinks when individual contributions are identifiable, the task is meaningful, and the group is valued. Those are exactly the design features of Mellers and Tetlock's superforecaster teams.`,
    origin: `Ringelmann (1913); Latané, Williams & Harkins (1979); Karau & Williams (1993).`,
    debate: `Groupthink (Janis, 1972) and anchoring on a dominant voice are the other classic risks of teams. "Wisdom of crowds" effects depend on independent judgments being aggregated (Surowiecki, 2004).`,
    find: ["social loafing"], where: [["situated", "ch07"]], related: ["superforecasting", "peer-effects"],
  },
  superforecasting: {
    term: "Superforecasters", cat: "Judgment & decision making",
    short: "The top few percent of forecasters in Philip Tetlock and Barbara Mellers's geopolitical forecasting tournaments. Putting them on teams made them even more accurate.",
    deep: `In the US intelligence community's IARPA forecasting tournament (2011–2015), Tetlock and Mellers's Good Judgment Project beat rival teams and intelligence analysts with access to classified data. Training in probabilistic reasoning, teaming, and "tracking" the best forecasters into elite teams each improved accuracy.

Duckworth uses the case to show peers help even the best performers, provided the group is designed to prevent loafing and conformity.`,
    origin: `Tetlock, *Expert Political Judgment* (2005); Mellers et al. (2014, 2015), *Psychological Science* and *Perspectives*; Tetlock & Gardner, *Superforecasting* (2015).`,
    find: ["superforecasters"], where: [["situated", "ch07"]], related: ["social-loafing", "collective-brain"],
  },
  aa: {
    term: "Alcoholics Anonymous (mutual aid)", cat: "Clinical psychology", aka: ["twelve-step facilitation", "AA", "mutual-help groups"],
    short: "A peer-led fellowship founded in 1935 by Bill W. and Dr. Bob. Its effectiveness appears to run mainly through changes in members' social networks.",
    deep: `AA has no professionals and no fees, and is organized by the Twelve Steps and Twelve Traditions. Duckworth's friend Stokely's half-joking answer, "Peer pressure!", matches the research. In John Kelly's mediation analyses, the main mechanism of AA's benefit is a shift in the social network from pro-drinking to pro-abstinence friends, plus boosted self-efficacy and coping.

The founding story itself is situational. Bill W. stayed sober in Akron by finding another alcoholic to talk to.`,
    origin: `Kelly et al. (2012), *Addiction*; Kelly, Humphreys & Ferri (2020), Cochrane Review.`,
    debate: `The 2020 Cochrane review found manualized AA/twelve-step facilitation produced higher rates of continuous abstinence than other established treatments such as CBT, with similar results on other outcomes. Earlier reviews (2006) found no clear advantage. Critics stress self-selection, dropout, and the spiritual framing (e.g., Dodes & Dodes, *The Sober Truth*, 2014). "The opposite of addiction is connection" is a popular phrase (often credited to Johann Hari), not a research finding in itself.`,
    find: ["Alcoholics Anonymous"], where: [["situated", "ch07", "Stokely Chaffin, Bill W."], ["situated", "ch09", "Tim Risser"]], related: ["peer-effects", "serenity-prayer", "addiction-context"],
  },
  "addiction-context": {
    term: "Context-dependence of addiction", cat: "Clinical psychology", aka: ["situational specificity of tolerance", "conditioned cues"],
    short: "Drug cravings, tolerance, and relapse are tied to the places, people, and cues associated with past use, which is why returning Vietnam veterans mostly stopped using heroin.",
    deep: `Lee Robins's study of returning soldiers found that of the roughly one in five men addicted to heroin in Vietnam, about 95% were not readdicted within a year of returning to the US. Shepard Siegel's lab showed why: tolerance is partly a conditioned response to drug-paired cues. Rats given heroin in a novel setting were far more likely to overdose than rats given the same dose in the familiar one (Siegel et al., 1982, *Science*).

Hence Siegel's "relocate, relocate, relocate!" and Duckworth's reversal of "wherever you go, there you are."`,
    origin: `Robins (1973, 1993); Siegel (1975, 1982); Siegel, *The Ghost in the Addict* (2024).`,
    debate: `Vietnam's lesson is often over-generalized. Veterans were mostly young, had used heroin for months not years, often smoked rather than injected, and lacked pre-war addiction. Many used heroin again occasionally after return without becoming readdicted. Still, the finding challenged the "once an addict, always an addict" view.`,
    find: ["The Vietnam Drug User Returns"], where: [["situated", "ch09", "Vietnam heroin"]], related: ["aa", "habit", "social-norms"],
  },
  "deliberate-practice": {
    term: "Deliberate practice", cat: "Expertise", aka: ["expert practice", "10,000 hours"],
    short: "Anders Ericsson's term for practice designed to improve performance: a specific stretch goal, full concentration, immediate feedback, and repetition with reflection, usually guided by a teacher.",
    deep: `Ericsson, Krampe & Tesch-Römer (1993) found the best violinists at a Berlin music academy had accumulated far more solitary deliberate practice than less accomplished peers, around 10,000 hours by age 20. Malcolm Gladwell's "10,000-hour rule" (*Outliers*, 2008) popularized the number, which Ericsson said misread his work: quality matters, not just quantity.

*Grit* (Ch. 7) built on deliberate practice. *Situated* (Ch. 8) stresses what Ericsson stressed late in life: deliberate practice is designed by a **teacher**. It is "precisely the opposite of DIY."`,
    origin: `Ericsson, Krampe & Tesch-Römer (1993), *Psychological Review*; Ericsson & Pool, *Peak* (2016); Duckworth et al. (2011), "Deliberate practice spells success," *SPPS*.`,
    debate: `Macnamara, Hambrick & Oswald's (2014) meta-analysis found deliberate practice explained about 26% of performance variance in games, 21% in music, 18% in sports, 4% in education and under 1% in professions. That leaves room for talent, starting age, and other factors. A direct replication of the violin study found a smaller effect (Macnamara & Maitra, 2019). Ericsson disputed both the definitions and the coding.`,
    find: ["deliberate practice"], where: [["grit", "ch07"], ["situated", "ch08", "mentors teach"]], related: ["flow", "mentor", "effort-counts-twice"],
  },
  mentor: {
    term: "Mentor", cat: "Core concept", aka: ["sponsor", "coach", "master teacher"],
    short: "A more experienced person who invests in your development. Duckworth's three functions: mentors teach, believe, and open doors.",
    deep: `The word comes from Mentor in Homer's *Odyssey*, the old friend asked to guide Telemachus, whom Athena often impersonates. Organizational research since Kathy Kram (1983, 1985) distinguishes **career functions** (sponsorship, coaching, exposure, protection, challenging assignments) from **psychosocial functions** (role modeling, acceptance, counseling, friendship). Duckworth's teach / believe / open doors maps onto these.

Her durations ("for a reason, a season, a life") echo Kram's phases: initiation, cultivation, separation, redefinition.`,
    origin: `Homer; Kram (1983), *Academy of Management Journal*; Kram (1985), *Mentoring at Work*.`,
    debate: `Meta-analyses find mentoring benefits are reliable but modest (Eby et al., 2008). Formal, assigned mentoring programs usually do less than informal ones that emerge from mutual choice (Ragins & Cotton, 1999), an argument for Duckworth's "mentor magnet" stance. Sponsorship (Hewlett, *Forget a Mentor, Find a Sponsor*, 2013) is often what women and minorities lack most.`,
    find: ["mentor"], where: [["situated", "ch08"], ["situated", "ch01", "Bob Bowman"], ["situated", "ch11", "Cleveland Clinic"]], related: ["mentor-magnet", "pygmalion-effect", "weak-ties", "deliberate-practice"],
  },
  "pygmalion-effect": {
    term: "Pygmalion effect", cat: "Social psychology", aka: ["expectancy effect", "teacher expectancy", "surrogate grit", "Ted Lasso effect"],
    short: "The finding that another person's high expectations of you can become a self-fulfilling prophecy, raising your actual performance.",
    deep: `Rosenthal & Jacobson (1968) told teachers that randomly chosen students were "bloomers." A year later those students, especially first and second graders, showed larger IQ gains. Mechanisms proposed later include warmer climate, more feedback, more input, and more opportunities to respond (Rosenthal's four-factor theory).

Duckworth's gloss is "borrowed" confidence, or "surrogate grit": the inner voice "I can do this!" often starts as a mentor's outer voice.`,
    origin: `Rosenthal & Jacobson, "Pygmalion in the Classroom" (1968); Merton's "self-fulfilling prophecy" (1948); Eden's military "Galatea" and Pygmalion studies (1980s–90s).`,
    debate: `Pygmalion is a classic contested finding. The original IQ tests were unreliable for young children, and the effect appeared only in the youngest grades. Raudenbush's (1984) meta-analysis found effects mainly when teachers had known students for less than two weeks. Jussim & Harber (2005) concluded expectancy effects are real but typically small, often fade, and teacher expectations are mostly *accurate* rather than self-fulfilling. They may matter more for stigmatized groups. Duckworth's framing is cautious: "Many questions remain open."`,
    find: ["Pygmalion Effect", "Pygmalion"], where: [["situated", "ch08", "mentors believe"], ["grit", "ch02"]], related: ["self-fulfilling-prophecy", "mentor", "self-efficacy"],
  },
  "self-fulfilling-prophecy": {
    term: "Self-fulfilling prophecy", cat: "Sociology",
    short: "A false belief that brings about its own truth by changing behavior, such as a bank rumored to fail suffering a run and failing.",
    deep: `Robert K. Merton coined the term in 1948, building on the Thomas theorem ("If men define situations as real, they are real in their consequences"). Teacher expectancy (Pygmalion), stereotype threat (Steele & Aronson, 1995), and the "Golem effect" of low expectations are psychological cases. *Grit* (Ch. 2) warns that labeling children "talented" sets one in motion.`,
    origin: `Merton (1948), *Antioch Review*.`,
    find: ["self-fulfilling prophecy"], where: [["grit", "ch02"], ["situated", "ch08"]], related: ["pygmalion-effect"],
  },
  "self-efficacy": {
    term: "Self-efficacy", cat: "Social psychology",
    short: "Albert Bandura's term for your belief that you can succeed at a specific task. It is built mainly by mastery experiences, watching similar others succeed, persuasion, and calm physiology.",
    deep: `Bandura's four sources of self-efficacy line up neatly with *Situated*. **Mastery experiences** come from the flywheel's small wins. **Vicarious experience** comes from peers: Stokely thinking "if that drunk can do it, I can too." **Verbal persuasion** comes from mentors who believe in you (Pygmalion). **Physiological states** come from calm, supportive settings.

The "I can do this!" thought in the Three Boxes diagram is self-efficacy by another name.`,
    origin: `Bandura (1977), "Self-efficacy: Toward a unifying theory of behavioral change," *Psychological Review*; Bandura, *Self-Efficacy* (1997).`,
    find: [], where: [["situated", "ch08"], ["situated", "ch07", "Stokely"], ["grit", "ch09"]], related: ["pygmalion-effect", "flywheel", "growth-mindset"],
  },
  "weak-ties": {
    term: "Strength of weak ties", cat: "Sociology",
    short: "Mark Granovetter's 1973 finding that acquaintances, not close friends, are the main source of new information and job leads, because they bridge to other social circles.",
    deep: `In his study of Boston-area professional, technical and managerial workers, Granovetter found most jobs came through contacts seen "occasionally" or "rarely," often a connection of a connection. Strong ties cluster and know what you know. Weak ties bridge "structural holes" (Burt, 1992) to novel information.

Mentors, by virtue of seniority, are especially rich in weak ties, which is why they "open doors."`,
    origin: `Granovetter (1973), *American Journal of Sociology*; Granovetter, *Getting a Job* (1974).`,
    debate: `Rajkumar et al. (2022, *Science*) ran experiments on 20 million LinkedIn users and found causal support, with a twist: *moderately* weak ties helped most (an inverted U), and the very weakest helped little. Some later work questions whether weak ties help people with fewer resources as much (Lin's social resources theory).`,
    find: ["Strength of Weak Ties", "weak ties"], where: [["situated", "ch08", "mentors open doors"]], related: ["mentor", "circle-jumping", "social-capital"],
  },
  "circle-jumping": {
    term: "Circle jumping", cat: "Sociology",
    short: "Anindya Kundu's term for moving from one social network into another, gaining skills and widening your \"opportunity horizon\" along the way, often through a mentor's introduction.",
    deep: `Kundu's research on students who succeeded despite poverty (*The Power of Student Agency*, 2020) emphasizes agency as something structured by relationships. A teacher's connection to a music-industry friend became an internship, then a finance career. Circle jumping is the lived version of weak-ties theory.`,
    origin: `Kundu (2017), *National Youth Advocacy and Resilience Journal*; Kundu (2020).`,
    find: ["circle jumping"], where: [["situated", "ch08"]], related: ["weak-ties", "social-capital"],
  },
  "mentor-magnet": {
    term: "Mentor magnet", cat: "Core concept",
    short: "Duckworth's term for someone who proactively attracts mentors: curious, coachable, prepared, grateful, and quick to act on advice.",
    deep: `A mentor magnet doesn't wait for mentors to happen. They request short curiosity conversations, show up prepared, offer to help on a mentor's existing project, "reward the feedback" by acting on it (even overcorrecting), and thank mentors by writing gratitude letters and mentoring others.

Duckworth's tell: when she, the mentor, would miss the relationship more than the protégé would.`,
    origin: `Duckworth's coinage. Related research on proactive behavior in mentoring (Higgins & Kram, 2001, "developmental networks").`,
    debate: `Proactive help-seeking is learned and unequally distributed. Jack (2019, *The Privileged Poor*) shows first-generation college students often don't know office hours exist. That supports Duckworth's advice to go anyway, and suggests institutions should teach it explicitly.`,
    find: ["mentor magnet"], where: [["situated", "ch08"], ["situated", "ch13", "Cody Coleman"]], related: ["mentor", "curiosity-conversation", "gratitude-letter"],
  },
  "curiosity-conversation": {
    term: "Curiosity conversation", cat: "Practice",
    short: "Brian Grazer's habit of asking interesting people for a short conversation simply to learn how they think. Duckworth assigns it as homework.",
    deep: `The format: a polite, specific request (five minutes is fine), real preparation, two core questions ("What do you do? How do you do it?"), and a thank-you note within a day that offers help in return. Duckworth's argument is that people underestimate how willing others are to help. Flynn & Lake (2008) found people underestimate others' compliance with direct requests by as much as half.`,
    origin: `Grazer & Fishman, *A Curious Mind* (2015); Flynn & Lake (2008), *JPSP*.`,
    find: ["curiosity conversation"], where: [["situated", "ch08"], ["situated", "ch11", "Toby Cosgrove and Michael Porter"]], related: ["mentor-magnet"],
  },
  "gratitude-letter": {
    term: "Gratitude letter", cat: "Positive psychology", aka: ["gratitude visit"],
    short: "A letter thanking someone you never properly thanked. It reliably makes both writer and recipient happier than the writer expects.",
    deep: `Seligman's "gratitude visit" was one of the strongest short-term exercises in early positive-psychology trials (Seligman, Steen, Park & Peterson, 2005). Kumar & Epley (2018) showed writers underestimate how surprised and moved recipients will be, and overestimate how awkward they will feel. That miscalibration keeps people from writing.`,
    origin: `Seligman et al. (2005), *American Psychologist*; Kumar & Epley (2018), *Psychological Science*.`,
    find: ["gratitude letter"], where: [["situated", "ch08", "letter to Anders Ericsson"]], related: ["mentor-magnet"],
  },
  culture: {
    term: "Culture (\"the way we do things around here\")", cat: "Core concept",
    short: "The shared language, rituals, artifacts, norms, values, and identity of a group, summed up as \"the way we do things around here.\"",
    deep: `Duckworth's six ingredients run from the visible (artifacts, language) to the invisible (values, identity). That matches Edgar Schein's layers: artifacts, espoused values, underlying assumptions. Her strongest claim is that culture is **local**: microcultures within five miles, or within one office, shape behavior as much as nations do.

The book's culture advice has two forms: choose a culture (move, switch jobs) and, as a leader, build one (Ch. 11).`,
    origin: `Marvin Bower (McKinsey) is credited with "the way we do things around here," popularized by Deal & Kennedy, *Corporate Cultures* (1982); Schein, *Organizational Culture and Leadership* (1985).`,
    debate: `"Culture" is notoriously hard to define and measure. Anthropologists (Geertz's "webs of significance") use it more richly than management writers. Cross-cultural psychology (Hofstede; Henrich's WEIRD thesis) studies national-level culture, which Duckworth mostly sets aside for the local.`,
    find: ["the way we do things around here"], where: [["situated", "ch09"], ["situated", "ch11"], ["grit", "ch12"]], related: ["social-norms", "microculture", "agglomeration", "identity-motivation"],
  },
  "social-norms": {
    term: "Social norms", cat: "Social psychology", aka: ["descriptive norms", "injunctive norms"],
    short: "Shared expectations about how people behave (descriptive norms) and how they should behave (injunctive norms). They powerfully guide behavior, often without our awareness.",
    deep: `Cialdini distinguishes descriptive norms (what most people do) from injunctive norms (what people approve of). Telling hotel guests that most guests reuse their towels raised reuse more than an environmental appeal (Goldstein, Cialdini & Griskevicius, 2008). Barbara Corcoran's line, "everybody wants what everybody wants," is the descriptive norm in plain English.

Asch's conformity experiments (1950s) and Sherif's autokinetic studies (1936) are the classic demonstrations.`,
    origin: `Sherif (1936); Asch (1951); Cialdini, Reno & Kallgren (1990).`,
    debate: `Norm messages can boomerang. Telling heavy users the average lowers their use, but can *raise* light users' use unless paired with approval (Schultz et al., 2007). Social-norms campaigns against college binge drinking have had mixed results.`,
    find: ["social norms"], where: [["situated", "ch04", "behavior settings"], ["situated", "ch09"]], related: ["culture", "behavior-setting", "peer-effects"],
  },
  microculture: {
    term: "Microculture", cat: "Sociology",
    short: "The distinctive \"way we do things\" of a small unit (an office, a residence hall, a household, a neighborhood) as opposed to a nation or region.",
    deep: `Duckworth's "culture is local" rests on several findings. Most people spend nearly all waking hours within about five miles of home or work (Song et al., 2010, cell-phone mobility data). Smokers are more likely to quit in smoke-free workplaces and much more likely in smoke-free homes. Randomly assigned residence halls leave lasting marks on civic engagement.

The implication is practical: you may not be able to change countries, but you may be able to change desks, teams, or zip codes.`,
    origin: `Song et al. (2010), *Science*; Ricart-Huguet & Paluck (2023), *QJPS*.`,
    find: ["microcultures"], where: [["situated", "ch09"]], related: ["culture", "peer-effects", "economic-mobility"],
  },
  agglomeration: {
    term: "Agglomeration (economies)", cat: "Economics",
    short: "The clustering of firms and talent in one place (Silicon Valley for tech, Nashville for country music, 1950s Paris for painting), which makes everyone in the cluster more productive.",
    deep: `Alfred Marshall (1890) named three advantages of industrial districts: shared labor pools, specialized suppliers, and knowledge spillovers ("the mysteries of the trade become no mysteries, but are as it were in the air"). Duckworth's portraits of Nashville ("music was in the air, literally") and Paris for Chu Teh-Chun are Marshall's spillovers seen from the inside.`,
    origin: `Marshall, *Principles of Economics* (1890); Glaeser, *Triumph of the City* (2011); Moretti, *The New Geography of Jobs* (2012).`,
    debate: `Agglomeration raises productivity but also housing costs, which can lock lower-income people out of the clusters that would most benefit them (Hsieh & Moretti, 2019). This is a structural limit on "choose your culture."`,
    find: ["agglomeration"], where: [["situated", "ch09"]], related: ["culture", "place-premium", "lost-einsteins"],
  },
  "status-quo-bias": {
    term: "Status quo bias", cat: "Behavioral economics",
    short: "A preference for the current state of affairs, even when a better alternative is available. It is especially strong for decisions about where to live.",
    deep: `Samuelson & Zeckhauser (1988) documented it in choices about health plans and retirement funds. It draws on loss aversion (losses loom larger than gains), regret aversion (we regret actions more than inactions, at least in the short run), and inertia.

Levitt's coin-flip study is Duckworth's main exhibit. People who were nudged by a coin to make a change reported being happier months later, which suggests they had been *too* cautious. Moving was the one decision the coin couldn't budge.`,
    origin: `Samuelson & Zeckhauser (1988), *Journal of Risk and Uncertainty*; Kahneman, Knetsch & Thaler (1991); Levitt (2021), *Review of Economic Studies*.`,
    debate: `Levitt's design is clever but limited. Participants self-selected (they came to a coin-flipping website), happiness was self-reported, and attrition was substantial, though some reports were corroborated by third parties. Long-run regret research (Gilovich & Medvec, 1995) finds people regret *inactions* more over a lifetime, which supports Duckworth's push.`,
    find: ["status quo bias"], where: [["situated", "ch09"], ["situated", "playbook"]], related: ["default-effect", "culture"],
  },
  "place-premium": {
    term: "Place premium", cat: "Economics",
    short: "The wage gain a worker gets simply by working in a richer country, holding the worker's skills constant. It is often several-fold.",
    deep: `Clemens, Montenegro & Pritchett (2019) compared observably identical workers born and educated in the same developing country, some working at home and some in the US. The US wage was often three to six times higher. Duckworth uses it to show how much "where you are" sets income, independent of "who you are."`,
    origin: `Clemens, Montenegro & Pritchett (2019), *Review of Economics and Statistics*.`,
    find: ["place premium"], where: [["situated", "ch09"]], related: ["agglomeration", "economic-mobility"],
  },
  "lost-einsteins": {
    term: "Lost Einsteins", cat: "Economics",
    short: "Raj Chetty, Alex Bell and colleagues' finding that exposure to inventors in childhood, not just talent, strongly predicts who becomes an inventor. Many talented children never get that exposure.",
    deep: `Linking patent records to tax data for 1.2 million inventors, Bell et al. (2019) found children from top-1% families were about ten times more likely to become inventors than those from below-median families, and math test scores explained little of that gap. Children who grew up in areas with more inventors in a particular *field* were more likely to invent in that same field. The authors estimated the US would have four times as many inventors if women, minorities, and lower-income children invented at the rate of high-income white men.`,
    origin: `Bell, Chetty, Jaravel, Petkova & Van Reenen (2019), *Quarterly Journal of Economics*.`,
    debate: `Exposure is measured by place of childhood residence. Families who live near inventors differ in many ways, though the field-specific pattern is hard to explain without exposure.`,
    find: ["Lost Einsteins"], where: [["situated", "ch09"]], related: ["economic-mobility", "agglomeration", "social-capital"],
  },
  "blue-zones": {
    term: "Blue Zones", cat: "Public health",
    short: "Regions reported to have unusually many centenarians (Sardinia, Okinawa, Ikaria, Nicoya, Loma Linda), popularized by Dan Buettner as models of longevity-promoting environments.",
    deep: `Michel Poulain and Gianni Pes circled Sardinian villages in blue ink. Buettner extracted lifestyle commonalities, the "Power 9": natural movement, purpose, downshifting, the 80% rule, plant-heavy diets, moderate wine, belonging, loved ones first, and the right tribe. He now consults on remaking cities ("Blue Zones Projects").

Duckworth uses Buettner's advice ("change your environment") rather than the age claims themselves.`,
    origin: `Poulain et al. (2004), *Experimental Gerontology*; Buettner, *The Blue Zones* (2008).`,
    debate: `Demographer Saul Newman argues many extreme-age records reflect clerical errors and pension fraud, and that "supercentenarian" hotspots correlate with poor record-keeping (Ig Nobel Prize, 2024). Poulain and Pes defend their age validation in Sardinia. Duckworth notes the critique; the 2024 *Science* feature she cites ("Shades of Blue") summarizes both sides.`,
    find: ["Blue Zones"], where: [["situated", "ch09"]], related: ["culture", "social-norms"],
  },
  "natural-experiment": {
    term: "Natural experiment", cat: "Research methods",
    short: "A situation where something like random assignment happens by accident (a lottery, a hurricane, a military posting, a roommate draw), letting researchers estimate causal effects outside the lab.",
    deep: `*Situated* leans heavily on natural experiments for its biggest claims about place. Examples include military families assigned to bases (BMI drifts toward the county average; children's outcomes track neighborhood quality), Hurricane Katrina evacuees (earnings and survival improved after forced moves), randomly assigned roommates, and the Vietnam heroin study.

They are the bridge between correlational data (people choose where they live) and true experiments (which would be unethical for most life choices).`,
    origin: `Angrist & Krueger and the "credibility revolution" in economics (2021 Nobel to Card, Angrist & Imbens).`,
    debate: `Natural experiments are only as good as their "as-if random" assumption. Military assignments are partly influenced by preferences; hurricane evacuees differ in who chose where to resettle. Each estimate also applies to a specific population and setting (external validity).`,
    find: ["natural experiment"], where: [["situated", "ch09"], ["situated", "ch10", "military families"]], related: ["rct", "peer-effects", "economic-mobility"],
  },
  "economic-mobility": {
    term: "Economic mobility (Chetty)", cat: "Economics", aka: ["intergenerational mobility", "neighborhood effects", "Opportunity Atlas"],
    short: "The chance that children grow up to earn more than their parents. Raj Chetty's research shows it varies sharply from neighborhood to neighborhood.",
    deep: `Using de-identified tax records for tens of millions of Americans, Chetty and colleagues mapped mobility down to the census tract. Two findings anchor Chapter 10. **Hyperlocal:** outcomes can differ dramatically a few miles apart ("from Alabama to Iowa"). **Exposure:** children whose families move to better areas earn more as adults, roughly in proportion to how many childhood years they spend there (Chetty & Hendren, 2018). Re-analysis of the Moving to Opportunity experiment found young children whose families moved to low-poverty areas earned ~31% more as adults (Chetty, Hendren & Katz, 2016).

The four neighborhood correlates Duckworth lists are school quality, income mix, two-parent households, and social capital.`,
    origin: `Chetty et al. (2014), "Where is the land of opportunity?"; Chetty & Hendren (2018), *QJE*; Opportunity Insights' Opportunity Atlas (opportunityatlas.org).`,
    debate: `Neighborhood effects are causal but not the whole story. Family, race, and policy matter enormously; Black boys have much lower mobility than white boys even in the same neighborhoods (Chetty et al., 2020). And "buy the smallest house in the best school district" works for individual families but can't work for everyone at once, a classic fallacy of composition.`,
    find: ["economic mobility"], where: [["situated", "ch10"]], related: ["social-capital", "lost-einsteins", "natural-experiment"],
  },
  "social-capital": {
    term: "Social capital (economic connectedness)", cat: "Sociology",
    short: "The resources embedded in relationships. In Chetty's 2022 work, the share of a lower-income person's friends who are higher-income was the strongest predictor of upward mobility yet found.",
    deep: `Using 21 billion Facebook friendships, Chetty et al. (2022) measured **economic connectedness**. If low-income children grew up in counties where their friends were as affluent as high-income children's friends, their adult incomes would rise by about 20% on average. A companion paper found about half of the friendship gap comes from *exposure* (who is in your school or neighborhood) and half from *friending bias* (who you befriend among those present).

Raj Chetty's emotional aside in Ch. 10, "It's aspirations," names one mechanism among several: information, referrals, norms, and imagination.`,
    origin: `Bourdieu (1986); Coleman (1988); Putnam, *Bowling Alone* (2000); Chetty et al. (2022), *Nature*, "Social Capital I" and "II."`,
    debate: `Correlational at the county level, but robust across many controls. Policy implications include school integration, mixed-income housing, and designing spaces that cut friending bias, such as mixed-age extracurriculars.`,
    find: ["social capital"], where: [["situated", "ch10"]], related: ["economic-mobility", "weak-ties", "circle-jumping"],
  },
  "growth-mindset": {
    term: "Growth mindset", cat: "Motivation", aka: ["implicit theories of intelligence", "fixed mindset", "incremental theory"],
    short: "Carol Dweck's term for the belief that abilities can be developed through effort, strategies, and help. A fixed mindset holds that ability is a fixed trait.",
    deep: `Dweck's research (with Elliott, Leggett, Mueller and others) found that a fixed mindset leads people to avoid challenges and interpret failure as proof of low ability, while a growth mindset leads to persistence. Praise for intelligence ("you're so smart") can induce a fixed mindset; praise for process can induce a growth mindset (Mueller & Dweck, 1998).

*Grit* (Ch. 9) makes growth mindset one root of hope. *Situated* (Ch. 10) moves it from the individual to the **school culture**: students in schools perceived as growth-minded showed more grit and better grades.`,
    origin: `Dweck & Leggett (1988); Dweck, *Mindset* (2006); Yeager et al. (2019), *Nature*, the National Study of Learning Mindsets.`,
    debate: `This is one of the most debated findings in education. Sisk et al. (2018) meta-analyses found weak average links between mindset and achievement and small intervention effects (d≈0.08). Yeager et al.'s (2019) national randomized trial found a small but meaningful GPA boost (~0.1 points) for lower-achieving students, and Yeager et al. (2022) showed the effect depends on teachers' own mindsets, a situational moderator. Macnamara & Burgoyne (2023) argue the evidence is inflated by bias; Burnette et al. (2023) find heterogeneous, context-dependent effects.`,
    find: ["growth mindset"], where: [["grit", "ch09"], ["situated", "ch10", "school culture"]], related: ["explanatory-style", "self-efficacy", "learned-helplessness"],
  },
  "maslow-hierarchy": {
    term: "Maslow's hierarchy of needs", cat: "Motivation",
    short: "Abraham Maslow's 1943 theory of five sets of needs (physiological, safety, love, esteem, self-actualization) that become dominant in roughly that order when lower needs are unmet.",
    deep: `Duckworth's Chapter 12 corrects three misreadings. **There was no pyramid:** Maslow never drew one; the pyramid was popularized by management educators (Bridgman, Cummings & Ballard, 2019, trace it to Charles McDermid, 1960). **Not lockstep:** Maslow said lower needs take *priority* when deprived ("prepotency"), but normally we pursue several at once, partially satisfied. **Not the top:** late in life Maslow placed *self-transcendence* above self-actualization.

The policy point is that programs which meet only bottom-level needs "feed the body but starve the spirit."`,
    origin: `Maslow (1943), "A theory of human motivation," *Psychological Review*; Maslow (1969), "The farther reaches of human nature"; Koltko-Rivera (2006), *Review of General Psychology*.`,
    debate: `Cross-cultural data (Tay & Diener, 2011, 123 countries) found needs are universal and that well-being links to fulfilling each need fairly independently of order. Evolutionary psychologists proposed a "renovated pyramid" with parenting at the top (Kenrick et al., 2010). Scott Barry Kaufman's *Transcend* (2020) replaces the pyramid with a **sailboat**: security needs are the hull, growth needs are the sail. That is a lovely echo of the sailboat painting in *Situated*'s epilogue.`,
    find: ["hierarchy of needs"], where: [["situated", "ch12"]], related: ["self-actualization", "self-transcendence", "situational-responsibility"],
  },
  "self-actualization": {
    term: "Self-actualization", cat: "Motivation",
    short: "Maslow's term for \"the desire to become more and more what one is, to become everything that one is capable of becoming.\" \"A musician must make music.\"",
    deep: `Maslow studied people he judged self-actualizing (Lincoln, Eleanor Roosevelt, Einstein) and listed traits like autonomy, acceptance, creativity, and "peak experiences." The concept shaped humanistic psychology (with Carl Rogers) and later positive psychology.

Duckworth's twist, following Maslow's own late writing and Frankl, is that self-actualization pursued "directly, selfishly" fails. Self-actualizers "practically always have a mission in life."`,
    origin: `Kurt Goldstein coined the term (1934); Maslow (1943, 1954).`,
    debate: `Maslow's sample of exemplars was small and hand-picked, a form of selecting on the outcome. Kaufman (2018) developed a modern Characteristics of Self-Actualization Scale and found it predicts well-being and creativity.`,
    find: ["self-actualization"], where: [["situated", "ch12"]], related: ["maslow-hierarchy", "self-transcendence", "calling"],
  },
  "self-transcendence": {
    term: "Self-transcendence", cat: "Motivation", aka: ["beyond-the-self purpose"],
    short: "Commitment to something beyond one's own needs (a cause, a person, an ideal). Late Maslow and Viktor Frankl both put it at the summit of human motivation.",
    deep: `Frankl's logotherapy held that the "primary motivation" in human beings is the search for meaning, found by turning outward: "It is a constitutive characteristic of being human that it always points… to something other than itself." Maslow conceded in his late work that "self-actualization is not enough."

*Grit*'s chapter on purpose and *Situated*'s chapter on citizenship meet here. Bill Strickland says he served others "to be myself." Duckworth's redrawn pyramid places self-transcendence at the apex.`,
    origin: `Frankl, *Man's Search for Meaning* (1946/1959); Maslow (1969); Koltko-Rivera (2006).`,
    debate: `Research on "self-transcendent purpose for learning" (Yeager et al., 2014) found students who connected schoolwork to helping others persisted longer on boring tasks. Measurement of self-transcendence remains diffuse, ranging from spirituality scales to prosocial-purpose measures.`,
    find: ["self-transcendence"], where: [["situated", "ch12"], ["grit", "ch08", "purpose"]], related: ["self-actualization", "maslow-hierarchy", "calling"],
  },
  flywheel: {
    term: "Situation multiplication (the flywheel)", cat: "Core concept", aka: ["virtuous cycle", "cumulative advantage", "Matthew effect"],
    short: "Chapter 13's addition to the model: your response changes your next situation, so small situational improvements compound over time.",
    deep: `Draw an arrow from Box Three back to Box One. A slightly better situation produces slightly better thoughts and effort, which produce small wins, which attract better mentors and peers. In other words, a better situation. Cody Coleman's exponential curve and Amanda's math comeback are the book's examples.

The idea has strong scholarly cousins. Merton's **Matthew effect** (1968): "to every one who has will more be given." Stanovich's (1986) Matthew effects in reading. Dickens & Flynn's (2001) **multiplier model**: small initial advantages lead people into enriching environments that magnify them, which reconciles high heritability with large environmental gains such as the Flynn effect.`,
    origin: `Merton (1968), *Science*; Dickens & Flynn (2001), *Psychological Review*; DiPrete & Eirich (2006) review of cumulative advantage. "Flywheel" is Jim Collins's business metaphor (*Good to Great*, 2001), which Duckworth's chapter title, "From Grit to Great," nods to.`,
    debate: `The same mechanism runs in reverse as cumulative *disadvantage*. If situations multiply, early inequality multiplies too, which strengthens the case for Part 3's situational responsibility.`,
    find: ["flywheel"], where: [["situated", "ch13"], ["situated", "blueprint"]], related: ["three-boxes", "self-efficacy", "economic-mobility"],
  },
  "why-and-way": {
    term: "Why vs. way (mission vs. culture)", cat: "Management",
    short: "Duckworth's leadership distinction: an organization's why is its mission; its way is its culture, how things are actually done. Leaders must build both, and the way takes longer.",
    deep: `The test is whether the security guard explains the mission as faithfully as the CEO. The NASA janitor story ("I'm putting a man on the moon"), studied by Andrew Carton (2018), shows leaders can link everyday work to the ultimate aim by clarifying a few concrete objectives.

The idea parallels the gap between *espoused* and *enacted* values (Argyris & Schön), and Schein's warning that posters are artifacts, not culture.`,
    origin: `Carton (2018), *Administrative Science Quarterly*; Sinek's "Start with why" (2009) for the popular framing.`,
    find: ["The why of an organization"], where: [["situated", "ch11"]], related: ["culture", "situational-responsibility"],
  },
  "person-situation-debate": {
    term: "Person–situation debate", cat: "History of psychology",
    short: "A decades-long argument in psychology over whether behavior is better explained by stable personal traits or by the situation. It was largely resolved as \"both, interacting.\"",
    deep: `Walter Mischel's *Personality and Assessment* (1968) argued that trait measures rarely predicted behavior in a specific situation above a correlation of about .30 (the "personality coefficient"). Classic social-psychology experiments such as Milgram's obedience studies, Darley & Batson's Good Samaritan study, and Zimbardo's prison simulation seemed to show situations overwhelming character.

Trait psychologists replied that traits predict *aggregated* behavior well (Epstein, 1979) and that situational effects are not larger than trait effects (Funder & Ozer, 1983: classic situational effects correspond to correlations of about .30–.40). The settlement is **interactionism**: traits describe averages; situations drive variation; people select and shape their situations.

*Grit* sat on the person side, *Situated* moves toward the middle.`,
    origin: `Mischel (1968); Bowers (1973); Epstein (1979); Kenrick & Funder (1988), "Profiting from controversy"; Ross & Nisbett, *The Person and the Situation* (1991).`,
    debate: `Philosophers revived the debate as **situationism** versus virtue ethics (Harman, 1999; Doris, *Lack of Character*, 2002): if situations drive behavior, do robust virtues exist? Some of the famous situationist experiments have since been questioned. Zimbardo's prison study was coached by experimenters (Le Texier, 2019), and Milgram's results varied greatly across conditions (Perry, 2013).`,
    where: [["situated", "ch03"], ["situated", "ch04", "Barker forgotten"]], related: ["interactionism", "fundamental-attribution-error", "personality-range", "situation"],
  },
  interactionism: {
    term: "Interactionism: B = f(P, E)", cat: "History of psychology", aka: ["Lewin's equation", "person–environment transaction", "CAPS"],
    short: "Kurt Lewin's formula that behavior (B) is a function of the person (P) and the environment (E), together. It is the shared foundation of both books.",
    deep: `Lewin (1936) wrote B = f(P, E) to insist neither term can be dropped. Modern interactionism has several forms:

- **Statistical interaction**: the effect of a situation depends on the person (e.g., stress affects neurotic people more).
- **If…then signatures**: Mischel & Shoda's Cognitive-Affective Personality System (1995) treats personality as a stable pattern of situation-specific responses.
- **Transactions**: people *select*, *evoke*, and *modify* situations (Buss, 1987), and genes shape which environments we seek, through passive, evocative and active gene–environment correlation (Scarr & McCartney, 1983).

*Situated*'s "situational agency" is the third form made into advice: a person (P) shaping E, which then shapes B.`,
    origin: `Lewin, *Principles of Topological Psychology* (1936); Mischel & Shoda (1995), *Psychological Review*; Buss (1987), *JPSP*; Bandura's "reciprocal determinism" (1978).`,
    find: [], where: [["situated", "ch01"], ["situated", "ch03"]], related: ["person-situation-debate", "situational-agency", "personality-range"],
  },
  "replication-crisis": {
    term: "Replication crisis", cat: "Research methods", aka: ["reproducibility crisis", "credibility revolution"],
    short: "The discovery, starting around 2011, that many published findings in psychology and other fields don't hold up when repeated with larger samples and preregistered methods.",
    deep: `The Open Science Collaboration (2015) replicated 100 psychology studies; about 36–39% reproduced significant results, with effect sizes roughly half the originals. Causes include small samples, flexible analyses ("p-hacking"), selective publication, and incentives to publish surprising results.

Several findings near these books have been affected: ego depletion (Ch. 2 of *Situated*), power posing, some priming effects, and the marshmallow test's long-term predictions. Others have held up or been refined, such as defaults, implementation intentions, and the fundamental attribution error in its basic form.

Reforms include preregistration, registered reports, open data, multi-lab replications, and megastudies.`,
    origin: `Simmons, Nelson & Simonsohn (2011), "False-positive psychology"; Open Science Collaboration (2015), *Science*.`,
    find: [], where: [["situated", "ch02", "ego depletion"]], related: ["ego-depletion", "effect-size", "megastudy", "rct"],
  },
};
