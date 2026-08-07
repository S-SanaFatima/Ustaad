import { useState } from 'react';
import SubjectPageTemplate, { GradientHeadingText, GoldButton } from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  Calculator, Sigma, LineChart, Triangle, RotateCw, Infinity, BarChart2, Hash,
  Building2, BookMarked, AlertTriangle, GitBranch,
  Layers, Lightbulb,
  BookOpen, GraduationCap, Trophy, Globe, Flag,
  Filter, FileText, Headphones, TrendingUp,
  BarChart3, Cpu, Target,
  FlaskConical, Settings, ArrowRight, Variable, Grid3X3, GitBranch as BranchIcon, ClipboardCheck, Clock, Footprints, Hammer, FunctionSquare, Calculator as CalcIcon, Network, Dice5, FileDigit, Split, Shapes, Route as RouteIcon, CheckCircle, FileEdit, PenLine, Timer, MapPin, ChevronDown, MessageCircle } from 'lucide-react';

const W = "h-6 w-6 text-white";
const WM = "h-28 w-28 text-[#0f4a9b]/[0.12]";
const S = "h-7 w-7 text-gray-400";
const M = "h-7 w-7 text-white";
const C = "h-6 w-6 text-[#0f4a9b]";
const P = "h-7 w-7 text-white";
const R = "h-7 w-7 text-white";

const data: SubjectPageProps = {
  badgeIcon:    <Calculator className="h-4 w-4" />,
  heroBadgeLabel: "Mathematics Specialist",
  heroTitle:    "Stronger Maths. Better Results.",
  heroSubtitle: "One-to-one mathematics tutoring for IGCSE, A-Level, IB, and AP students.",
  heroDesc:     "",
  heroCTAText:  "Book Your Free Trial Lesson",
  heroCTAMicrocopy: "Stronger maths starts here.",
  finalCtaTitle:   "Pinpoint the Concepts Holding Results Back",
  finalCtaSubtitle: "If classroom understanding is not landing on the paper, another worksheet will not close the gap. A short diagnostic session pinpoints exactly what is holding your child's grade back.",
  finalCtaButton:  "Book Your Free Trial Lesson",
  finalCtaSubtext: "Stronger maths starts here.",
  topicsTitle:  "Core Areas of Mathematics",
  topicsDesc:   "Built on logic and structure. Clarity in every step.",
  topics: [
    { title: "Algebra",       desc: "expressions • equations", icon: <Sigma     className={W} strokeWidth={1.5} />, wm: <Sigma     className={`${WM}`} strokeWidth={0.8} /> },
    { title: "Functions",     desc: "graphs • behavior",       icon: <LineChart className={W} strokeWidth={1.5} />, wm: <LineChart className={`${WM}`} strokeWidth={0.8} /> },
    { title: "Geometry",      desc: "shapes • proofs",         icon: <Triangle  className={W} strokeWidth={1.5} />, wm: <Triangle  className={`${WM}`} strokeWidth={0.8} /> },
    { title: "Trigonometry",  desc: "angles • identities",     icon: <RotateCw  className={W} strokeWidth={1.5} />, wm: <RotateCw  className={`${WM}`} strokeWidth={0.8} /> },
    { title: "Calculus",      desc: "rates • change",          icon: <Infinity  className={W} strokeWidth={1.5} />, wm: <Infinity  className={`${WM}`} strokeWidth={0.8} /> },
    { title: "Statistics",    desc: "data • analysis",         icon: <BarChart2 className={W} strokeWidth={1.5} />, wm: <BarChart2 className={`${WM}`} strokeWidth={0.8} /> },
    { title: "Probability",   desc: "chance • outcomes",       icon: <Target    className={W} strokeWidth={1.5} />, wm: <Target    className={`${WM}`} strokeWidth={0.8} /> },
    { title: "Number",        desc: "rules • operations",      icon: <Hash      className={W} strokeWidth={1.5} />, wm: <Hash      className={`${WM}`} strokeWidth={0.8} /> },
  ],
  struggles: [
    { title: "Weak Basics",       desc: "concepts unclear • gaps",      icon: <Building2     className={S} /> },
    { title: "Memorized Steps",   desc: "methods • not understood",      icon: <BookMarked    className={S} /> },
    { title: "Problems Break",    desc: "approach fails • midway",       icon: <AlertTriangle className={S} /> },
    { title: "No Structure",      desc: "topics feel • separate",        icon: <GitBranch     className={S} /> },
  ],
  methods: [
    { title: "Strong Foundations", desc: "build • core clarity",          icon: <Layers    className={M} /> },
    { title: "Concept First",      desc: "logic before • steps",          icon: <Lightbulb className={M} /> },
    { title: "Clear Method",       desc: "structured • solving steps",    icon: <RouteIcon className={M} /> },
    { title: "Logical Flow",       desc: "concepts link • together",      icon: <Network   className={M} /> },
  ],
  softCtaHeading: "Mathematics is logic. We make it visible.",
  curricula: [
    { title: "IGCSE",         desc: "core • mastery",         icon: <BookOpen      className={C} /> },
    { title: "GCSE",          desc: "applied • clarity",      icon: <GraduationCap className={C} /> },
    { title: "A Levels",      desc: "analytical • depth",     icon: <Trophy        className={C} /> },
    { title: "IB (SL/HL)",   desc: "structured • reasoning",  icon: <Globe         className={C} /> },
    { title: "American (AP)", desc: "problem • solving",       icon: <Flag          className={C} /> },
  ],
  practices: [
    { title: "Layered Practice",  desc: "simple → complex",          icon: <Filter     className={P} /> },
    { title: "Exam Training",     desc: "real • conditions",          icon: <FileText   className={P} /> },
    { title: "Direct Support",    desc: "help • anytime",             icon: <Headphones className={P} /> },
    { title: "Progress Tracking", desc: "measured • weekly",          icon: <TrendingUp className={P} /> },
  ],
  results: [
    { title: "85–95% Scores",      desc: "consistent • improvement", icon: <BarChart3 className={R} /> },
    { title: "Independent Solvers",desc: "solve • confidently",       icon: <Cpu       className={R} /> },
    { title: "Exam Accuracy",      desc: "precise • execution",       icon: <Target    className={R} /> },
  ],
  faqs: [
    { q: "Do you cover all A-Level Maths topics?", a: "Yes. Pure Mathematics (algebra, calculus, trigonometry, functions) and Applied (statistics, mechanics), aligned to AQA, Edexcel, and Cambridge." },
    { q: "How do you help students who panic during exams?", a: "We build structured problem-solving habits so students always have a clear starting point, even under pressure. Method before memory." },
    { q: "Can you help with IB Maths AA and AI?", a: "Yes. Both Analysis & Approaches and Applications & Interpretations are fully covered at SL and HL level." },
    { q: "What if my child has gaps from previous years?", a: "We diagnose exactly where the gap is and rebuild from there, without wasting time on content they already know." },
    { q: "Do you help with Further Mathematics?", a: "Yes. Further Maths topics including complex numbers, matrices, and further calculus are covered for A-Level and IB." },
    { q: "How quickly can I expect grade improvement?", a: "Method clarity typically comes in the first 2–3 sessions. Consistent grade improvement shows within 4–6 weeks." },
  ],
  floatingIcon: <Calculator className="h-4 w-4" />,
  seo: {
    title: "Maths Tutors UAE | IGCSE, A-Level, IB & AP | Ustaad",
    description: "Expert private Maths tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB AA/AI, AP Calculus. 1-to-1 sessions, proven results. Book a free trial.",
    canonical: "/maths",
    schema: [
      localBusinessSchema,
      serviceSchema("Private Mathematics Tutoring UAE", "Expert 1-to-1 Maths tutoring for IGCSE, GCSE, A-Level, IB, and AP students across UAE.", "/maths"),
      breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }, { name: "Mathematics", url: "/maths" }]),
      faqSchema([
        { q: "What Maths levels do you tutor in UAE?", a: "We cover all levels: IGCSE, GCSE, A-Level (Pure, Stats, Mechanics), IB AA SL/HL, IB AI SL/HL, AP Calculus AB/BC, and Further Mathematics." },
        { q: "How do you help students who struggle with Maths?", a: "We diagnose exact topic gaps, rebuild from foundations, and build method clarity so students solve problems independently, not by memorising steps." },
        { q: "Do you offer Maths tutoring in Dubai and Abu Dhabi?", a: "Yes. We provide 1-to-1 online Maths tutoring to students across Dubai, Abu Dhabi, Sharjah, and all UAE Emirates." },
      ]),
    ],
  },
};

const challenges = [
  {
    title: "Algebraic Operations",
    icon: <Variable className="h-5 w-5 text-[#0f4a9b]" strokeWidth={2} />,
    wm: <Variable className="h-20 w-20 text-[#0f4a9b]/8" strokeWidth={1} />,
    points: [
      "Drops brackets and flips signs under time pressure",
      "We rebuild steady line-by-line working"
    ]
  },
  {
    title: "Coordinate Geometry",
    icon: <Grid3X3 className="h-5 w-5 text-[#0f4a9b]" strokeWidth={2} />,
    wm: <Grid3X3 className="h-20 w-20 text-[#0f4a9b]/8" strokeWidth={1} />,
    points: [
      "Loses the equation-to-graph link mid-question",
      "We retrain that link for clean accuracy"
    ]
  },
  {
    title: "Trigonometric Identities",
    icon: <Triangle className="h-5 w-5 text-[#0f4a9b]" strokeWidth={2} />,
    wm: <Triangle className="h-20 w-20 text-[#0f4a9b]/8" strokeWidth={1} />,
    points: [
      "Loops substitutions without reaching proof",
      "We teach mental route mapping before writing"
    ]
  },
  {
    title: "Statistical Reasoning",
    icon: <BarChart3 className="h-5 w-5 text-[#0f4a9b]" strokeWidth={2} />,
    wm: <BarChart3 className="h-20 w-20 text-[#0f4a9b]/8" strokeWidth={1} />,
    points: [
      "Misreads variables hidden in long questions",
      "We train clean filtering for the core numbers"
    ]
  },
  {
    title: "Conditional Probability",
    icon: <BranchIcon className="h-5 w-5 text-[#0f4a9b]" strokeWidth={2} />,
    wm: <BranchIcon className="h-20 w-20 text-[#0f4a9b]/8" strokeWidth={1} />,
    points: [
      "Picks the wrong branch on multi-stage events",
      "We coach the right path at every step"
    ]
  },
  {
    title: "Calculus Derivations",
    icon: <Sigma className="h-5 w-5 text-[#0f4a9b]" strokeWidth={2} />,
    wm: <Sigma className="h-20 w-20 text-[#0f4a9b]/8" strokeWidth={1} />,
    points: [
      "Skips middle steps when rushing through questions",
      "We install checkpoints that protect every mark"
    ]
  }
];

const ChallengeCard = ({ challenge }: { challenge: typeof challenges[0] }) => (
  <div className="group relative flex flex-col gap-2 p-5 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden h-full border-b border-r border-gray-200">
    <div className="flex items-center gap-2 mb-1">
      {challenge.icon}
    </div>
    <h3 className="text-lg font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200">{challenge.title}</h3>
    <ul className="text-gray-500 text-[13px] leading-relaxed space-y-1">
      {challenge.points.map((point, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className={`w-1.5 h-1.5 ${idx === 0 ? 'bg-red-400' : 'bg-green-500'} rounded-full flex-shrink-0 self-center`} />
          <span>{point}</span>
        </li>
      ))}
    </ul>
    <div className="absolute bottom-4 right-4 pointer-events-none select-none">{challenge.wm}</div>
  </div>
);

const customTopicsSection = (
  <section id="topics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Mathematics Challenges" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Strong revision often turns into weaker results on the timed paper. We focus on the six places where your child's working slips under pressure.
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 [grid-auto-rows:1fr] [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
          {challenges.map((c, i) => <ChallengeCard key={i} challenge={c} />)}
        </div>
      </div>
    </div>
  </section>
);

const supportSteps = [
  {
    title: "Past Paper Diagnostic",
    icon: <ClipboardCheck className="h-7 w-7 text-white" strokeWidth={2} />,
    desc: "We read your child's past papers to spot exactly where their reasoning slips."
  },
  {
    title: "Foundation Repair",
    icon: <Hammer className="h-7 w-7 text-white" strokeWidth={2} />,
    desc: "We fix early arithmetic and algebra gaps so your child's working speeds up."
  },
  {
    title: "Step-by-Step Training",
    icon: <Footprints className="h-7 w-7 text-white" strokeWidth={2} />,
    desc: "Your child learns to break down unseen questions and solve them without prompts."
  },
  {
    title: "Timed Mock Practice",
    icon: <Clock className="h-7 w-7 text-white" strokeWidth={2} />,
    desc: "Your child builds calm pace and self-checking through timed mock papers."
  }
];

const SupportCard = ({ step, i }: { step: typeof supportSteps[0], i: number }) => (
  <div className="relative bg-white border border-gray-200 rounded-[24px] p-8 flex flex-col items-center text-center hover:shadow-[0_15px_40px_rgba(15,74,155,0.1)] transition duration-300 overflow-hidden group">
    {/* Top blue gradient indicator */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] to-[#1e5bb3]" />
    {/* Icon container with blue gradient and light background */}
    <div className="w-16 h-16 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(15,74,155,0.3)]">
      {step.icon}
    </div>
    <span className="text-xs font-bold text-[#0f4a9b] uppercase tracking-wider mb-2">Step {i + 1}</span>
    <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-3">{step.title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
  </div>
);

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Ustaad Mathematics Support" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Stress shows up at home long before the report card changes. Our four steps rebuild the paper habits your child needs first.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {supportSteps.map((step, i) => (
          <SupportCard key={i} step={step} i={i} />
        ))}
      </div>
    </div>
  </section>
);

const mathTopics = [
  {
    title: "Pure Algebra",
    icon: <FunctionSquare className="h-6 w-6" strokeWidth={2} />,
    wm: <FunctionSquare className="h-20 w-20" strokeWidth={1} />,
    curricula: "Cambridge IGCSE 0580 and 0606, Edexcel IGCSE 4MA1 and 4PM1, A-Level 9MA0 and 9709",
    issue: "Loses tracking on multi-step proofs. We rebuild verification habits."
  },
  {
    title: "Calculus & Analysis",
    icon: <CalcIcon className="h-6 w-6" strokeWidth={2} />,
    wm: <CalcIcon className="h-20 w-20" strokeWidth={1} />,
    curricula: "AP Calculus AB and BC, IB Diploma Analysis & Approaches (AA) SL and HL",
    issue: "Freezes on layered derivation rules. We map them visually for stamina."
  },
  {
    title: "Further Mathematics",
    icon: <Network className="h-6 w-6" strokeWidth={2} />,
    wm: <Network className="h-20 w-20" strokeWidth={1} />,
    curricula: "Edexcel A-Level Further Mathematics 9FM0, IB Diploma Higher Level routes",
    issue: "Vector and matrix shifts disorient your child. We make them repeatable."
  },
  {
    title: "Applied Mechanics",
    icon: <FileDigit className="h-6 w-6" strokeWidth={2} />,
    wm: <FileDigit className="h-20 w-20" strokeWidth={1} />,
    curricula: "Cambridge International Mechanics M1 and M2, Edexcel Applied Maths options",
    issue: "Cannot turn forces into equations. We teach diagram breakdown."
  },
  {
    title: "Probability & Statistics",
    icon: <Dice5 className="h-6 w-6" strokeWidth={2} />,
    wm: <Dice5 className="h-20 w-20" strokeWidth={1} />,
    curricula: "IB Applications & Interpretation (AI) SL and HL, A-Level Statistics components",
    issue: "Dense data confuses sample choices. We install filters that isolate real parameters."
  }
];

const TopicCard = ({ topic }: { topic: typeof mathTopics[0] }) => (
  <div className="relative bg-white border border-gray-200 rounded-[24px] p-8 flex flex-col hover:shadow-[0_15px_40px_rgba(15,74,155,0.1)] transition duration-300 overflow-hidden">
    {/* Light icon background with blue gradient icon */}
    <div className="w-14 h-14 bg-[#f0f5ff] rounded-2xl flex items-center justify-center mb-5">
      <span className="[&>svg]:stroke-[url(#blueGradient)]">
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f4a9b" />
              <stop offset="100%" stopColor="#1e5bb3" />
            </linearGradient>
          </defs>
        </svg>
        {topic.icon}
      </span>
    </div>
    <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-3">{topic.title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-3">{topic.curricula}</p>
    <p className="text-gray-600 text-sm leading-relaxed font-medium">{topic.issue}</p>
    {/* Watermarked icon */}
    <div className="absolute bottom-4 right-4 pointer-events-none select-none text-[#0f4a9b]/[0.08]">
      {topic.wm}
    </div>
  </div>
);

const customMethodsSection = (
  <>
  <div className="h-1 bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent" />
  <section id="method" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Mathematics Topics We Support" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Every topic we teach is mapped to the marking style of major international boards. That way your child's working stays accurate across each curriculum.
        </p>
      </div>
      {/* First row - 3 equal cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
        {mathTopics.slice(0, 3).map((topic, i) => (
          <TopicCard key={i} topic={topic} />
        ))}
      </div>
      {/* Second row - 2 cards (larger to align width) */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {mathTopics.slice(3).map((topic, i) => (
          <TopicCard key={i + 3} topic={topic} />
        ))}
      </div>
    </div>
  </section>
  </>
);

const problemSolvingSkills = [
  {
    title: "Question Breakdown",
    icon: <Split className="h-6 w-6" strokeWidth={2} />,
    issue: "Freezes when facing unseen questions",
    solution: "We teach how to split them into parts"
  },
  {
    title: "Pattern Recognition",
    icon: <Shapes className="h-6 w-6" strokeWidth={2} />,
    issue: "Panics at unfamiliar layouts, not patterns",
    solution: "We train fast recognition of familiar shapes"
  },
  {
    title: "Solution Planning",
    icon: <RouteIcon className="h-6 w-6" strokeWidth={2} />,
    issue: "Tries random steps when pressure builds",
    solution: "We coach routes from start to answer"
  },
  {
    title: "Answer Verification",
    icon: <CheckCircle className="h-6 w-6" strokeWidth={2} />,
    issue: "Leaves final answers unchecked under pressure",
    solution: "We install quick checks that catch slips"
  }
];

const SkillCard = ({ skill }: { skill: typeof problemSolvingSkills[0] }) => (
  <div className="relative bg-white p-8 flex flex-col hover:bg-[#f7f9ff] transition-colors duration-200">
    {/* Light icon background with blue gradient icon */}
    <div className="w-14 h-14 bg-[#f0f5ff] rounded-2xl flex items-center justify-center mb-5">
      <span className="[&>svg]:stroke-[url(#blueGradient2)]">
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="blueGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f4a9b" />
              <stop offset="100%" stopColor="#1e5bb3" />
            </linearGradient>
          </defs>
        </svg>
        {skill.icon}
      </span>
    </div>
    <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-3">{skill.title}</h3>
    <ul className="text-gray-500 text-sm leading-relaxed space-y-2">
      <li className="flex items-start gap-2">
        <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 self-center" />
        <span>{skill.issue}</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 self-center" />
        <span>{skill.solution}</span>
      </li>
    </ul>
  </div>
);

const customCurriculaSection = (
  <section id="curriculum" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Mathematical Problem-Solving Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Memorised formulas fall apart the moment a question changes shape. We train the thinking that lets your child solve any new problem alone.
        </p>
      </div>
      {/* 2x2 grid with zero gap and thin borders */}
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {problemSolvingSkills.slice(0, 2).map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-t border-gray-200">
          {problemSolvingSkills.slice(2).map((skill, i) => (
            <SkillCard key={i + 2} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const assessmentSkills = [
  {
    title: "Clear Working",
    icon: <FileEdit className="h-6 w-6 text-white" strokeWidth={2} />,
    issue: "Working scatters messily across the page",
    solution: "We coach line-by-line clarity for examiners"
  },
  {
    title: "Method Marks",
    icon: <PenLine className="h-6 w-6 text-white" strokeWidth={2} />,
    issue: "Writes only to reach the final answer",
    solution: "We retrain writing for every available mark"
  },
  {
    title: "Exam Pacing",
    icon: <Timer className="h-6 w-6 text-white" strokeWidth={2} />,
    issue: "Rushes early questions and stalls later",
    solution: "Calibrate timing through past-paper drills"
  },
  {
    title: "Calculator Habits",
    icon: <Calculator className="h-6 w-6 text-white" strokeWidth={2} />,
    issue: "Leans on the calculator and skips steps",
    solution: "We restore the full written working"
  }
];

const AssessmentCard = ({ skill }: { skill: typeof assessmentSkills[0] }) => (
  <div className="bg-white border border-[#0f4a9b]/10 rounded-[24px] p-8 flex flex-col items-start text-left hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] transition duration-300">
    <div className="w-14 h-14 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-[0_0_20px_rgba(199,162,74,0.4)] mb-6">
      {skill.icon}
    </div>
    <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">{skill.title}</h3>
    <ul className="text-gray-500 text-sm font-medium space-y-2">
      <li className="flex items-start gap-2">
        <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 self-center" />
        <span>{skill.issue}</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 self-center" />
        <span>{skill.solution}</span>
      </li>
    </ul>
  </div>
);

const customPracticesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Mathematics Assessment Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Marks are lost on presentation, not on knowledge. We coach the habits examiners reward inside every major board.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {assessmentSkills.map((skill, i) => (
          <AssessmentCard key={i} skill={skill} />
        ))}
      </div>
    </div>
  </section>
);

// UAE Locations data
const uaeLocations = [
  { name: "Abu Dhabi", desc: "Capital • Most schools", icon: <MapPin className="h-4 w-4" /> },
  { name: "Dubai", desc: "Largest city • All boards", icon: <MapPin className="h-4 w-4" /> },
  { name: "Sharjah", desc: "Growing IGCSE community", icon: <MapPin className="h-4 w-4" /> },
  { name: "Ajman", desc: "Cambridge & Edexcel", icon: <MapPin className="h-4 w-4" /> },
  { name: "Al Ain", desc: "Cambridge focused", icon: <MapPin className="h-4 w-4" /> },
  { name: "Ras Al Khaimah", desc: "Northern Emirates", icon: <MapPin className="h-4 w-4" /> },
  { name: "Fujairah", desc: "East coast", icon: <MapPin className="h-4 w-4" /> },
  { name: "Umm Al Quwain", desc: "6th Emirate", icon: <MapPin className="h-4 w-4" /> },
];

// Custom Results Section - UAE Students
const customResultsSection = (
  <section id="results" className="py-16 lg:py-20 bg-[#0a1628]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
        <MapPin className="h-3.5 w-3.5 text-[#C7A24A]" />
        <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Across the UAE</span>
      </div>
      
      {/* Title */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          Mathematics Students <span className="text-[#C7A24A]">Across the UAE</span>
        </h2>
      </div>
      
      {/* Location Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {uaeLocations.map((loc, i) => (
          <div key={i} className="relative bg-[#162238] border border-white/10 rounded-xl p-5 hover:border-[#C7A24A]/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="w-8 h-8 bg-[#0f4a9b]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#0f4a9b]">{loc.icon}</span>
              </div>
              <div className="w-2 h-2 bg-[#C7A24A] rounded-full" />
            </div>
            <h3 className="text-white font-bold text-base mb-1">{loc.name}</h3>
            <p className="text-white/50 text-xs">{loc.desc}</p>
          </div>
        ))}
      </div>
      
      {/* Info Box */}
      <div className="bg-[#162238] border border-white/10 rounded-xl p-6 flex items-center gap-4">
        <div className="w-10 h-10 bg-[#0f4a9b]/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <MapPin className="h-5 w-5 text-[#0f4a9b]" />
        </div>
        <p className="text-white/70 text-sm leading-relaxed">
          We end the homework standoff at home and rebuild confidence for families across Dubai and Abu Dhabi. From Dubai Hills, Arabian Ranches, Dubai Marina, Palm Jumeirah, Khalifa City, Yas Island, and Saadiyat Island, through to our online sessions reaching the northern emirates, students develop reasoning habits that travel with them.
        </p>
      </div>
    </div>
  </section>
);

// FAQ data
const mathFAQs = [
  {
    q: "Which school boards and curricula do your specialists cover?",
    a: "Our specialists know the marking schemes of major international systems in depth. We cover Pearson Edexcel, Cambridge CIE, AQA, and OCR across GCSE, IGCSE, and A-Level routes, plus the IB Diploma Programme (AA and AI) and Advanced Placement (AP Calculus AB and BC)."
  },
  {
    q: "How do you support students preparing for IGCSE vs GCSE exams?",
    a: "IGCSE papers demand quick algebraic manipulation, while domestic GCSE papers lean on multi-step word problems. For IGCSE or GCSE, we target the exact calculation habits each paper rewards."
  },
  {
    q: "What is the main difference between IB Maths AA and IB Maths AI?",
    a: "Analysis & Approaches (AA) leans on abstract derivation and calculus fluency. Applications & Interpretation (AI) leans on calculator-driven data modelling. An IB-trained specialist helps your child close the operational gaps unique to their level and pathway."
  },
  {
    q: "How do you help students move into advanced levels?",
    a: "Advanced tracks such as AP Calculus or A-Level demand a big jump in independent calculation stamina. Families preparing for A-Level find our diagnostic surfaces hidden gaps from earlier years before real pressure builds."
  },
  {
    q: "Can my child use a graphic display calculator (GDC) in assessments?",
    a: "Yes, though leaning on the calculator often makes a student skip critical written lines. We train students to use models like the TI-84 Plus or Casio fx-CG50 as verification tools, so the written script still contains every step the examiner needs to award full credit."
  },
  {
    q: "Are Ustaad mathematics sessions online, in-person, or both?",
    a: "We deliver face-to-face sessions across Dubai and Abu Dhabi, and our online sessions reach families throughout the northern emirates."
  },
  {
    q: "What are the rates for a private mathematics tutor in Dubai?",
    a: "Rates depend on your child's academic level, from early secondary foundations to advanced university-track pathways requiring a specialist curriculum expert. Our academic advisors design packages aligned to your family's milestone goals."
  },
  {
    q: "How quickly can my child be matched with a mathematics tutor?",
    a: "We match your child with a curriculum-specific expert within 24 to 48 hours. The process opens with a script review of recent school papers so the operational gap is mapped, and a confidence-recovery plan is in place from day one."
  }
];

// FAQ Component - matching MathematicsLanding.tsx design exactly
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  return (
    <section id="faqs" className="py-8 lg:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">
          {/* Left: Heading */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <FunctionSquare className="h-3.5 w-3.5" />
              <span className="text-xs uppercase tracking-wider">Common Questions</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Questions</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Common questions from parents and students about mathematics tutoring.
            </p>
          </div>

          {/* Right: Accordion items */}
          <div className="flex flex-col gap-[10px]">
            {mathFAQs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="flex flex-col gap-2">
                  {/* Question row - icon + pill (always visible) */}
                  <div className="flex items-center gap-3">
                    {/* Left icon - centered vertically with question, has white inner stroke */}
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                      style={{
                        width: 40, height: 40,
                        minWidth: 40, minHeight: 40,
                        background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                        color: isOpen ? '#fff' : '#0f4a9b',
                        transition: 'background 300ms ease, color 300ms ease',
                        cursor: 'pointer',
                        border: 'none',
                        boxShadow: 'inset 0 0 0 2px #fff',
                      }}
                    >
                      <span className="flex items-center justify-center w-full h-full">?</span>
                    </button>

                    {/* Question pill - separate container */}
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex-1 flex items-center gap-3 text-left rounded-full border"
                      style={{
                        minHeight: '48px',
                        padding: '8px 14px',
                        cursor: 'pointer',
                        background: 'transparent',
                        borderColor: 'rgba(15,74,155,0.1)',
                      }}
                    >
                      <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{f.q}</span>

                      {/* Right chevron icon */}
                      <span
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{
                          width: 32, height: 32,
                          minWidth: 32, minHeight: 32,
                          borderRadius: '50%',
                          background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                          color: isOpen ? '#fff' : '#0f4a9b',
                          transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </div>

                  {/* Answer panel - completely independent/separate view */}
                  {isOpen && (
                    <div
                      className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
                      style={{
                        background: '#f8fafc',
                        borderColor: 'rgba(15,74,155,0.15)',
                        boxShadow: '0 4px 16px rgba(15,74,155,0.06)',
                      }}
                    >
                      <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{f.a}</p>
                      <span
                        className="flex-shrink-0 flex items-center justify-center rounded-full"
                        style={{
                          width: 32, height: 32,
                          minWidth: 32, minHeight: 32,
                          background: '#0f4a9b',
                          color: '#fff',
                        }}
                      >
                        <MessageCircle className="h-4 w-4" />
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const customFAQsSection = <FAQSection />;

export default function MathsPage() {
  return <SubjectPageTemplate {...data} customTopicsSection={customTopicsSection} customStrugglesSection={customStrugglesSection} customMethodsSection={customMethodsSection} customCurriculaSection={customCurriculaSection} customPracticesSection={customPracticesSection} customResultsSection={customResultsSection} customFAQsSection={customFAQsSection} />;
}