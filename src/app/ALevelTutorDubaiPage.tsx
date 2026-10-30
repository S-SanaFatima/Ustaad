import React, { useState, useEffect, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  Award, BookOpen, CheckCircle, ChevronDown, Clock, GraduationCap, MapPin,
  MessageCircle, PenTool, ShieldCheck, Sparkles, Star, Target,
  Users, ArrowRight, ArrowRightLeft, Calculator, FileText, Calendar, Compass,
  Layers, CheckCircle2, TrendingUp, AlertTriangle, Video, Timer, Atom, FlaskConical,
  Dna, Briefcase, LineChart, Code2, Brain, Laptop, Sparkle, Trophy, Check
} from 'lucide-react';
import {
  Layout,
  GoldButton,
  StatsBar,
  SchoolsMarquee,
  GradientHeadingText,
  DUBAI_SCHOOL_LOGOS,
  WhatsAppIcon,
  FinalCTA,
  RelatedContent
} from './shared';
import SEOHead from './shared/SEOHead';
import {
  cityLocalBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  reviewSchema
} from './shared/schemas';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20an%20A-Level%20tutor%20in%20Dubai.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

const GridBackground = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'aldubai-l' : 'aldubai-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(15,74,155,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'aldubai-l' : 'aldubai-d'})`} />
  </svg>
);

interface SubjectTrack {
  id: string;
  name: string;
  badge: string;
  icon: ReactNode;
  boards: string;
  coreTopics: string[];
  challenges: string;
  strategy: string;
  href: string;
}

const A_LEVEL_SUBJECTS: SubjectTrack[] = [
  {
    id: 'maths',
    name: 'Mathematics & Further Maths',
    badge: 'Pure · Mechanics · Statistics',
    icon: <Calculator className="w-6 h-6 text-[#0f4a9b]" />,
    boards: 'Edexcel 9MA0/9FM0 · Cambridge 9709 · AQA 7357',
    coreTopics: ['Binomial Expansion', 'Parametric Equations', 'Proof by Induction', 'Numerical Methods'],
    challenges: 'Students know the formulas but drop 15–20 method marks when derivation steps are multi-layered or unguided.',
    strategy: 'We install rigorous line-by-line working protocols and structured verification checkpoints that protect every single method mark.',
    href: '/maths'
  },
  {
    id: 'physics',
    name: 'A-Level Physics',
    badge: 'Core · Fields · Quantum',
    icon: <Atom className="w-6 h-6 text-[#0f4a9b]" />,
    boards: 'Cambridge 9702 · Edexcel 9PH0 · AQA 7408 · OCR A',
    coreTopics: ['Stationary Waves', 'Simple Harmonic Motion', 'Specific Heat Capacity', 'Practical Uncertainties'],
    challenges: 'Unseen question contexts create cognitive panic; students struggle to translate descriptive scenarios into solvable equations.',
    strategy: 'Visual free-body breakdowns, unit-consistency checks, and systematic drilling of 6-mark qualitative reasoning answers.',
    href: '/physics'
  },
  {
    id: 'chemistry',
    name: 'A-Level Chemistry',
    badge: 'Physical · Organic · Inorganic',
    icon: <FlaskConical className="w-6 h-6 text-[#0f4a9b]" />,
    boards: 'Edexcel 9CH0 · Cambridge 9701 · AQA 7405 · OCR A',
    coreTopics: ['Born-Haber Cycles', 'Buffer Solutions', 'Electrode Potentials', 'Nucleophilic Substitution'],
    challenges: 'Curly mechanism arrows missing electron pairs and vague explanations in energetics costing critical A/A* boundary marks.',
    strategy: 'Drilling exact IUPAC conventions, full mechanism arrow pathways, and precision mark-scheme keyword wording for every topic.',
    href: '/chemistry'
  },
  {
    id: 'biology',
    name: 'A-Level Biology',
    badge: 'Genetics · Biochemistry · Physiology',
    icon: <Dna className="w-6 h-6 text-[#0f4a9b]" />,
    boards: 'Cambridge 9700 · AQA 7402 · Edexcel 9BI0',
    coreTopics: ['Genetic Crosses', 'Kidney & Osmoregulation', 'Hardy-Weinberg Principle', 'Statistical Tests'],
    challenges: 'Detailed biological knowledge that fails to score because answers use conversational descriptions instead of mark-scheme keywords.',
    strategy: 'Targeted vocabulary mapping, comparative table structuring, and step-by-step training for the 25-mark synoptic essay in AQA.',
    href: '/biology'
  },
  {
    id: 'economics',
    name: 'Economics',
    badge: 'Micro · Macro · Evaluation',
    icon: <LineChart className="w-6 h-6 text-[#0f4a9b]" />,
    boards: 'Edexcel 9EC0 · Cambridge 9708 · AQA 7136',
    coreTopics: ['Price Discrimination', 'Fiscal Policy', 'Exchange Rates', 'Evaluation Essays'],
    challenges: 'Essay answers that provide factual descriptions rather than two-sided economic evaluation chains with real-world context.',
    strategy: 'Teaching KAA (Knowledge, Application, Analysis) alongside rigorous EV (Evaluation) structures with verified contemporary UAE & global data.',
    href: '/economics'
  },
  {
    id: 'english',
    name: 'English Literature',
    badge: 'Comparative · Drama · Unseen',
    icon: <BookOpen className="w-6 h-6 text-[#0f4a9b]" />,
    boards: 'Edexcel 9ET0 · AQA 7712/7717 · Cambridge 9093/9695',
    coreTopics: ['Close Reading of Form', 'Critical Interpretations', 'Historical Context', 'Coursework Drafting'],
    challenges: 'Essays drifting into narrative plot summary under timed conditions instead of maintaining a sustained analytical line of reasoning.',
    strategy: 'Thesis-driven paragraph blueprints, embedded textual quotations, and examiner-rubric alignment for top-band literary criticism.',
    href: '/english'
  }
];

const BOARD_DATA = {
  cambridge: {
    name: 'Cambridge International (CIE)',
    code: '9709 / 9702 / 9701 / 9700 / 9708',
    description: 'Staged AS and A2 system with separate practical exam papers (Paper 3 / Paper 5). Heavily sat across British schools in Dubai.',
    keyPoints: [
      'Separate AS (Year 12) examination that contributes 50% directly to the final A-Level grade.',
      'Paper 3 practical laboratory skills and Paper 5 experimental design/data analysis require specialized exam training.',
      'Strict, highly specific mark schemes where synonym substitution often forfeits marks.'
    ],
    schools: ['Dubai College', 'Repton School Dubai', 'Sunmarke School']
  },
  edexcel: {
    name: 'Pearson Edexcel (UK & International)',
    code: '9MA0 / 9PH0 / 9CH0 / 9EC0 / 9ET0',
    description: 'Linear structure with synoptic Paper 3 papers assessing content across all two years. High emphasis on mathematical modeling.',
    keyPoints: [
      'Comprehensive synoptic papers where questions combine multiple disparate units from Year 12 and Year 13.',
      'Practical Endorsement is internally assessed; written papers heavily test experimental method questions.',
      'Large data set questions in Statistics and calculus-heavy modeling in Physics.'
    ],
    schools: ['Brighton College Dubai', 'Safa Community School', 'Sunmarke School']
  },
  aqa: {
    name: 'AQA (UK & OxfordAQA)',
    code: '7357 / 7408 / 7405 / 7402 / 7136',
    description: 'Renowned for rigorous evaluation essays in Economics/Psychology and synoptic 25-mark essays in Biology.',
    keyPoints: [
      'Multiple-choice section (Section A) in Physics/Chemistry tests rapid conceptual agility.',
      'Biology 25-mark synoptic essay requires linking across at least 4 distinct specification areas.',
      'High grade-boundary volatility requiring sustained practice on Grade 9 / A* discriminator questions.'
    ],
    schools: ['Hartland International', 'Horizon International School', 'Nord Anglia Dubai']
  }
};

const PROTOCOL_STEPS = [
  {
    num: '01',
    title: 'Diagnostic & Paper Audit',
    tagline: 'Pinpoint exact mark drops',
    desc: 'We audit recent school scripts to determine whether dropped marks stem from conceptual blind spots, weak notation, or exam timing breakdown.',
    icon: <Target className="w-4.5 h-4.5 text-[#0f4a9b]" strokeWidth={2.2} />,
    deliverable: 'Personalised diagnostic mark audit'
  },
  {
    num: '02',
    title: 'First-Principles Rebuild',
    tagline: 'Master core foundational logic',
    desc: 'Tutors rebuild fundamental reasoning from the ground up so students thoroughly grasp underlying mechanics and conquer unfamiliar questions.',
    icon: <Brain className="w-4.5 h-4.5 text-[#0f4a9b]" strokeWidth={2.2} />,
    deliverable: 'Personalised topic recovery roadmap'
  },
  {
    num: '03',
    title: 'Mark-Scheme Calibration',
    tagline: 'Decode examiner mark schemes',
    desc: 'Students learn the exact command words, keywords, and structural conventions rewarded by Cambridge, Edexcel and AQA examiners to eliminate careless dropped marks.',
    icon: <PenTool className="w-4.5 h-4.5 text-[#0f4a9b]" strokeWidth={2.2} />,
    deliverable: 'Exam-board rubric mastery guides'
  },
  {
    num: '04',
    title: 'Timed Past-Paper Stamina',
    tagline: 'Build timed exam composure',
    desc: 'Weekly full-length timed past papers drill exam pacing under real conditions until producing A* accuracy feels completely instinctive.',
    icon: <Clock className="w-4.5 h-4.5 text-[#0f4a9b]" strokeWidth={2.2} />,
    deliverable: 'Weekly A* grade trajectory tracking'
  }
];

const DUBAI_AREAS = [
  { name: 'Downtown Dubai', sub: 'DIFC · Business Bay · City Walk', image: '/images/communities/downtown-dubai.jpg' },
  { name: 'Dubai Hills Estate', sub: 'Sidra · Maple · Parkway', image: '/images/communities/dubai-hills-estate.png' },
  { name: 'Arabian Ranches', sub: 'Ranches 1, 2 & 3 · Polo Homes', image: '/images/communities/arabian-ranches.png' },
  { name: 'Palm Jumeirah', sub: 'Fronds · Crescent · Shoreline', image: '/images/communities/palm-jumeirah.png' },
  { name: 'Dubai Marina & JBR', sub: 'Marina Walk · Bluewaters', image: '/images/communities/dubai-marina.png' },
  { name: 'Jumeirah', sub: 'Jumeirah 1, 2, 3 · Umm Suqeim', image: '/images/communities/jumeirah.png' },
  { name: 'Emirates Hills', sub: 'The Lakes · Meadows · Springs', image: '/images/communities/emirates-hills.png' },
  { name: 'Jumeirah Golf Estates', sub: 'Whispering Pines · Orange Lake', image: '/images/communities/jumeirah-golf-estates.png' },
  { name: 'Al Barsha & Barsha Heights', sub: 'Near Kings & American Academy', image: '/images/communities/al-barsha.png' },
  { name: 'Meydan & MBR City', sub: 'District One · Sobha Hartland', image: '/images/communities/meydan.jpg' },
  { name: 'Mirdif & Uptown', sub: 'Near international schools', image: '/images/communities/mirdif.png' },
  { name: 'JLT & Discovery Gardens', sub: 'Cluster community support', image: '/images/communities/jlt-discovery-gardens.jpg' }
];

const DUBAI_REVIEWS = [
  {
    initials: 'TA',
    name: 'Tariq A., Dubai Hills Estate',
    school: 'Parent of Year 13 student at Dubai College',
    subject: 'Edexcel A-Level Mathematics & Further Maths (9MA0 / 9FM0)',
    text: "My son was hovering at a high B in his Year 12 mock exams and needed an A* for Imperial Mechanical Engineering. His Ustaad tutor completely rebuilt his calculus derivations and mechanics setup habits. He achieved an A* in both Maths and Further Maths and secured his firm university choice."
  },
  {
    initials: 'FK',
    name: 'Faris K., Palm Jumeirah',
    school: 'Parent of Year 12 student at Repton Dubai',
    subject: 'AQA A-Level Economics (7136) & Physics (7408)',
    text: "What sets Ustaad apart is the academic mentorship. The weekly parent feedback notes gave us complete visibility into what was covered and where exam timing was improving. It eliminated the evening stress entirely."
  }
];

const DUBAI_FAQS = [
  {
    q: "Can you accommodate Dubai school schedules, sports commitments, and travel?",
    a: "Yes. All sessions are scheduled flexibly after school hours (between 4:00 PM and 9:30 PM UAE time) and on weekends. Because lessons are online, students can maintain consistent weekly progress even when traveling for family holidays or school tournaments."
  },
  {
    q: "Do you have an A-Level tuition centre in Dubai?",
    a: "No. Every lesson is live and online, so your child joins from home anywhere in Dubai, from Jumeirah to Mirdif."
  },
  {
    q: "My child's school uses different exam boards for different subjects. Can you cover all of them?",
    a: "Yes. Each subject has its own tutor, chosen for that subject's board, so Edexcel Maths and Cambridge Physics can run side by side."
  },
  {
    q: "Can my child have separate tutors for Maths and Further Maths?",
    a: "Yes. Some students keep one tutor for both and others prefer two. We arrange whichever suits the workload."
  },
  {
    q: "Do you tutor students who are resitting an A-Level?",
    a: "Yes. Resit students follow a short plan built on the papers that cost them marks, timed to the next exam series for their board."
  }
];

const A_LEVEL_DUBAI_SCHOOL_LOGOS = [
  { name: 'Dubai College', file: 'dubai-college.png' },
  { name: 'Repton School Dubai', file: 'repton-dubai.png' },
  { name: 'Brighton College Dubai', file: 'brighton-college-dubai.png' },
  { name: 'Sunmarke School', file: 'sunmarke.png' },
  { name: 'Nord Anglia International School Dubai', file: 'nord-anglia-dubai.png' },
  { name: 'Safa Community School', file: 'safa.png' },
  { name: 'Hartland International School', file: 'hartland-international-school.png' },
  { name: 'Horizon International School', file: 'horizon-international-school.png' },
];





// ── 3D INTERACTIVE LAB DATA ──
interface DissectorProblem {
  id: string;
  subject: string;
  board: string;
  paper: string;
  marks: number;
  questionTitle: string;
  questionStem: string;
  studentTrap: string;
  trapStats: string;
  ustaadSolution: {
    step1: string;
    step2: string;
    step3: string;
    final: string;
  };
  examinerQuote: string;
}

const DISSECTOR_PROBLEMS: Record<string, DissectorProblem> = {
  maths: {
    id: 'maths',
    subject: 'Pure Mathematics',
    board: 'Cambridge 9709 / Edexcel 9MA0',
    paper: 'Paper 3 (Calculus & Proof)',
    marks: 7,
    questionTitle: 'Integration by Parts with Boundary Conditions',
    questionStem: 'Find the exact value of ∫ [1 to e] (x² · ln(x)) dx, giving your answer in the form (a·e³ + b)/c where a, b, c are integers.',
    studentTrap: 'Candidates frequently choose u = x² and dv/dx = ln(x), causing an endless recursive integral loop, or drop the negative sign when applying limits to the second term.',
    trapStats: '44% of Dubai candidates drop 3+ method marks here.',
    ustaadSolution: {
      step1: 'Identify LIATE hierarchy: u = ln(x) ⇒ du/dx = 1/x; dv/dx = x² ⇒ v = x³/3.',
      step2: 'Apply uv - ∫ v (du/dx) dx = [ (x³/3) ln(x) ]_1^e - ∫ (x³/3 · 1/x) dx = [ (x³/3) ln(x) ]_1^e - ∫ (x²/3) dx.',
      step3: 'Integrate remaining term: [ (x³/3) ln(x) - x³/9 ]_1^e.',
      final: 'Substitute limits: (e³/3 - e³/9) - (0 - 1/9) = (2e³ + 1)/9. (a=2, b=1, c=9).'
    },
    examinerQuote: '"Candidates who set out their integration steps using clear u and v labels gained full M1 M1 A1 A1 without algebraic confusion."'
  },
  physics: {
    id: 'physics',
    subject: 'A-Level Physics',
    board: 'Edexcel 9PH0 / Cambridge 9702',
    paper: 'Paper 2 (Fields & Induction)',
    marks: 6,
    questionTitle: 'Electromagnetic Induction & Lenz\'s Law Synoptic',
    questionStem: 'A copper ring falls freely through a uniform horizontal magnetic field. Explain the direction and magnitude of the resultant force on the ring as it enters and exits the field.',
    studentTrap: 'Students mention Faraday\'s Law but fail to state Lenz\'s Law opposes the change in flux linkage, or forget that eddy currents generate upward resistive forces at both entry AND exit.',
    trapStats: '52% fail to secure the top Band 3 (5–6 marks).',
    ustaadSolution: {
      step1: 'Entry: Changing magnetic flux linkage induces an EMF (Faraday\'s Law: ε = -dΦ/dt).',
      step2: 'Induced eddy current flows in copper ring creating a magnetic field that opposes entry (Lenz\'s Law).',
      step3: 'Resultant force: Upward magnetic force opposes gravity (F_res = mg - F_magnetic; acceleration < g).',
      final: 'Exit: Flux decreases, inducing opposite current which still produces an UPWARD attractive force, slowing descent.'
    },
    examinerQuote: '"Top-band answers explicitly stated the conservation of energy justification and analyzed both entry and exit boundaries."'
  },
  chemistry: {
    id: 'chemistry',
    subject: 'A-Level Chemistry',
    board: 'AQA 7405 / Edexcel 9CH0',
    paper: 'Paper 2 (Organic Synthesis)',
    marks: 6,
    questionTitle: 'Multi-Step Carbonyl & Ester Synthesis',
    questionStem: 'Devise a reaction pathway to synthesize 2-hydroxy-2-methylbutanoic acid starting from butanone. Include reagents, intermediate structures, and mechanism classifications.',
    studentTrap: 'Drawing mechanism arrows from the delta-positive carbon instead of the lone pair on the cyanide nucleophile (:CN⁻), and forgetting the dilute acid hydrolysis stage.',
    trapStats: '39% of students lose the 2nd stage hydrolysis mark.',
    ustaadSolution: {
      step1: 'Step 1: Nucleophilic addition of KCN / dilute H2SO4 to butanone (CH3-CO-CH2CH3).',
      step2: 'Lone pair on :CN⁻ attacks carbonyl carbon C=O; electron pair shifts to oxygen.',
      step3: 'Intermediate formation: 2-hydroxy-2-methylbutanenitrile.',
      final: 'Step 2: Reflux with dilute aqueous acid (HCl(aq) or H2SO4(aq)) to hydrolyze nitrile -C≡N group to carboxylic acid -COOH.'
    },
    examinerQuote: '"Mechanisms with unlabelled lone pairs or incorrect curly arrow origins from positive centres were severely penalized."'
  },
  economics: {
    id: 'economics',
    subject: 'A-Level Economics',
    board: 'Edexcel 9EC0 / Cambridge 9708',
    paper: 'Paper 3 (Macroeconomic Policy)',
    marks: 25,
    questionTitle: 'Monetary vs Supply-Side Policy Evaluation',
    questionStem: 'Evaluate the view that supply-side policies are more effective than monetary policy in controlling cost-push inflation while maintaining economic growth.',
    studentTrap: 'Writing purely descriptive paragraphs about interest rates without drawing AD/AS diagrams or failing to evaluate the long time-lags and opportunity cost of infrastructure spending.',
    trapStats: 'Over 60% of scripts miss the top Level 4 Evaluation band.',
    ustaadSolution: {
      step1: 'Define Cost-Push Inflation & illustrate LRAS shift outwards vs AD contraction.',
      step2: 'Analysis 1: Monetary rate hikes curb AD but risk recessionary output gaps (KAA).',
      step3: 'Analysis 2: Supply-side deregulation & training reduce unit labor costs without demand destruction.',
      final: 'Evaluation (EV): Significant time lags (5-10 yrs) of supply-side reforms require short-term monetary stabilization; policy mix is essential.'
    },
    examinerQuote: '"Distinction answers balanced the time horizon differences and weighed fiscal opportunity costs against immediate rate levers."'
  }
};

function MobileHeroBackground() {
  return (
    <div className="md:hidden absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-[#0f4a9b]/40 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
        className="absolute top-20 -right-10 w-[220px] h-[220px] bg-[#f0c96a]/25 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-24 -left-10 w-[200px] h-[200px] bg-[#22b8cd]/20 rounded-full blur-[75px]"
      />

      <svg
        viewBox="0 0 380 620"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-90"
      >
        <defs>
          <linearGradient id="mobGoldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#C7A24A" />
          </linearGradient>

          <radialGradient id="mobOrbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#0f4a9b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
          </radialGradient>

          <filter id="mobGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {(() => {
          const dots: ReactNode[] = [];
          for (let x = 20; x < 380; x += 40) {
            for (let y = 25; y < 620; y += 42) {
              dots.push(
                <circle
                  key={`mbd_${x}_${y}`}
                  cx={x}
                  cy={y}
                  r="1"
                  fill="rgba(255,255,255,0.06)"
                />
              );
            }
          }
          return dots;
        })()}

        <text x="24" y="46" fill="rgba(95,211,230,0.65)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.1em">
          DUBAI · 25.2048° N, 55.2708° E
        </text>
        <text x="24" y="60" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace" letterSpacing="0.08em">
          AQA · EDEXCEL · CAMBRIDGE 1-TO-1
        </text>

        <line x1="20" y1="68" x2="360" y2="68" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="3 4" />
        <line x1="20" y1="540" x2="360" y2="540" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="3 4" />
        <line x1="20" y1="68" x2="20" y2="540" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="3 4" />
        <line x1="360" y1="68" x2="360" y2="540" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="3 4" />

        <g transform="translate(322, 102)">
          <circle cx="0" cy="0" r="42" fill="url(#mobOrbGlow)" />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
          >
            <circle cx="0" cy="0" r="32" fill="none" stroke="rgba(240,201,106,0.35)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="22" fill="none" stroke="rgba(95,211,230,0.35)" strokeWidth="0.8" strokeDasharray="2 3" />
            <circle cx="32" cy="0" r="2" fill="#f0c96a" />
            <circle cx="-22" cy="0" r="1.5" fill="#5fd3e6" />
          </motion.g>
          <circle cx="0" cy="0" r="15" fill="rgba(240,201,106,0.12)" stroke="url(#mobGoldGrad)" strokeWidth="1.2" />
          <text x="0" y="3.5" textAnchor="middle" fill="#f0c96a" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">
            A-LEVEL
          </text>
        </g>

        <circle cx="30" cy="500" r="3.5" fill="#22b8cd" />
        <circle cx="30" cy="500" r="7" fill="none" stroke="#22b8cd" strokeWidth="0.8" opacity="0.6" />
        <text x="44" y="504" fill="rgba(255,255,255,0.5)" fontSize="8.5" fontFamily="monospace">
          Diagnostic (Baseline)
        </text>

        <motion.circle
          cx="322"
          cy="102"
          r="4.5"
          fill="#f0c96a"
          filter="url(#mobGlow)"
          animate={{ r: [4, 6.5, 4], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        />
        <text x="240" y="90" fill="#f0c96a" fontSize="10" fontFamily="monospace" fontWeight="bold">
          Target: Grade A* ★
        </text>

        <text x="24" y="195" fill="rgba(95,211,230,0.35)" fontSize="11" fontFamily="monospace">
          Cambridge 9709
        </text>
        <text x="24" y="320" fill="rgba(240,201,106,0.32)" fontSize="10.5" fontFamily="monospace">
          Edexcel 9MA0 / 9CH0
        </text>
        <text x="24" y="440" fill="rgba(255,255,255,0.28)" fontSize="9" fontFamily="monospace">
          AQA 7408 / 7402
        </text>
        <text x="230" y="475" fill="rgba(95,211,230,0.3)" fontSize="10" fontFamily="monospace">
          OCR A
        </text>
      </svg>
    </div>
  );
}

const DUBAI_A_LEVEL_PRESSURE_POINTS = [
  {
    num: '01',
    title: 'Mid-Course School Moves',
    desc: 'Families who relocate to Dubai during Year 12 often find the new school follows a different board or teaches units in a different order.',
    tag: 'Board Transition',
    icon: TrendingUp,
    badgeBg: 'bg-blue-50/90 text-[#0f4a9b] border-blue-200/60',
    dotColor: 'bg-[#0f4a9b]',
    glowColor: 'from-[#0f4a9b]/10 to-transparent'
  },
  {
    num: '02',
    title: 'Board-Specific Command Words',
    desc: 'Cambridge 9709 Maths penalises lack of exact proofs, while Edexcel 9MA0 prioritises modeling interpretations. Generic revision fails on specific board rubrics.',
    tag: 'Rubric Precision',
    icon: FileText,
    badgeBg: 'bg-indigo-50/90 text-indigo-600 border-indigo-200/60',
    dotColor: 'bg-indigo-500',
    glowColor: 'from-indigo-500/10 to-transparent'
  },
  {
    num: '03',
    title: 'Year 12 Predicted Grade Stakes',
    desc: 'UCAS university applications are submitted in early Year 13. A single slip in Year 12 summer mocks permanently caps predicted grades before final exams are sat.',
    tag: 'UCAS Trajectory',
    icon: Target,
    badgeBg: 'bg-amber-50/90 text-amber-700 border-amber-200/60',
    dotColor: 'bg-amber-500',
    glowColor: 'from-amber-500/10 to-transparent'
  },
  {
    num: '04',
    title: 'Practical Papers 3 & 5 Weighting',
    desc: 'Science papers heavily assess practical design, error analysis, and percentage uncertainties. Students without laboratory confidence lose easy grade boundary margins.',
    tag: 'Lab Margin Loss',
    icon: FlaskConical,
    badgeBg: 'bg-emerald-50/90 text-emerald-700 border-emerald-200/60',
    dotColor: 'bg-emerald-500',
    glowColor: 'from-emerald-500/10 to-transparent'
  },
  {
    num: '05',
    title: 'Synoptic Multi-Topic Questions',
    desc: 'Final A2 papers combine disparate topics across two years into single 12-mark questions. Students who revise chapters in isolation freeze under synoptic pressure.',
    tag: 'Synoptic Rigour',
    icon: Layers,
    badgeBg: 'bg-purple-50/90 text-purple-700 border-purple-200/60',
    dotColor: 'bg-purple-500',
    glowColor: 'from-purple-500/10 to-transparent'
  },
  {
    num: '06',
    title: 'Compressed Dubai Calendar',
    desc: 'Term breaks, spring travel, and Ramadan condense the active study window. Without structured weekly pacing, revision is left dangerously late in April.',
    tag: 'Pacing Strategy',
    icon: Calendar,
    badgeBg: 'bg-rose-50/90 text-rose-700 border-rose-200/60',
    dotColor: 'bg-rose-500',
    glowColor: 'from-rose-500/10 to-transparent'
  }
];

function DubaiALevelSlipSection() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#f8fafc] relative overflow-hidden border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-1.5 shadow-2xs">
            <AlertTriangle className="w-3 h-3 text-[#0f4a9b]" />
            <span className="text-[#0f4a9b] text-[10.5px] font-bold uppercase tracking-[0.14em]">
              Diagnostic Insights
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-1 tracking-tight">
            <GradientHeadingText text="Why A-Level Marks Slip in Dubai Schools" />
          </h2>
          <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto">
            Achieving an 8 or 9 at GCSE is no guarantee of an A* at A-Level. Here are the six exact fault lines where students lose marks.
          </p>
        </div>

        {/* Scrollable on Mobile, Responsive Centered Grid on Tablet & Desktop (Single Viewport Fit) */}
        <div
          className="w-full flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 items-stretch justify-center overflow-x-auto sm:overflow-visible snap-x snap-mandatory pt-0.5 pb-2.5 sm:pb-0 px-4 sm:px-0 -mx-4 sm:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {DUBAI_A_LEVEL_PRESSURE_POINTS.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.num}
                className="group relative bg-white border border-slate-200/80 hover:border-[#0f4a9b]/35 rounded-2xl p-3.5 sm:p-4 lg:p-4.5 shadow-[0_2px_10px_rgba(15,74,155,0.03)] hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between w-[84vw] max-w-[320px] sm:w-full sm:max-w-none shrink-0 sm:shrink snap-center overflow-hidden"
              >
                {/* Subtle cute ambient corner glow */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${pt.glowColor} rounded-full blur-xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex items-center justify-between mb-2.5">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-105 ${pt.badgeBg}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="relative z-10 flex-1">
                  <h3 className="text-[14px] sm:text-[14.5px] lg:text-[15px] font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-snug mb-1">
                    {pt.title}
                  </h3>
                  <p className="text-slate-600 text-[11.5px] sm:text-xs leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-2.5 pt-2 border-t border-slate-100 flex items-center">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100/80 text-slate-600 text-[10px] font-medium">
                    {pt.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint (No arrows, no dots) */}
        <div className="sm:hidden flex items-center justify-center mt-3 mb-1">
          <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold text-slate-500 bg-slate-100/90 border border-slate-200/80 tracking-tight select-none">
            Swipe to see more
          </span>
        </div>
      </div>
    </section>
  );
}

function ReviewsScroller() {
  const n = DUBAI_REVIEWS.length;
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (n <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % n), 5500);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [n]);

  const go = (idx: number) => {
    if (n <= 1) return;
    setActive(((idx % n) + n) % n);
    startTimer();
  };

  const prevIdx = (active - 1 + n) % n;
  const nextIdx = (active + 1) % n;

  const SideCard = ({ idx }: { idx: number }) => (
    <button
      type="button"
      onClick={() => go(idx)}
      className="hidden md:block w-[22%] shrink-0 text-left opacity-40 hover:opacity-70 transition duration-300 cursor-pointer"
      aria-label={`Show review by ${DUBAI_REVIEWS[idx].name}`}
    >
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs relative overflow-hidden h-full">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]" />
        <div className="flex gap-0.5 mb-2">
          {[1, 2, 3, 4, 5].map((j) => (
            <Star key={j} className="h-3 w-3 fill-[#C7A24A] text-[#C7A24A]" />
          ))}
        </div>
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">&ldquo;{DUBAI_REVIEWS[idx].text}&rdquo;</p>
        <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-100">
          <div
            className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-[10px] notranslate shrink-0"
            translate="no"
          >
            {DUBAI_REVIEWS[idx].initials}
          </div>
          <span className="font-bold text-[#0a1f3d] text-xs notranslate truncate" translate="no">
            {DUBAI_REVIEWS[idx].name.split(',')[0]}
          </span>
        </div>
      </div>
    </button>
  );

  const r = DUBAI_REVIEWS[active];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-stretch gap-3 lg:gap-4">
        <SideCard idx={prevIdx} />

        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_32px_rgba(15,74,155,0.08)] relative overflow-hidden text-left"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Star key={j} className="h-4 w-4 fill-[#C7A24A] text-[#C7A24A]" />
                  ))}
                </div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
                  Parent Testimonial
                </span>
              </div>
              <p className="text-[#374151] text-[15px] sm:text-[16px] leading-relaxed mb-6 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_8px_rgba(15,74,155,0.28)] notranslate shrink-0"
                  translate="no"
                >
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold text-[#0a1f3d] text-[15px] notranslate truncate" translate="no">
                    {r.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5 truncate">
                    {r.school || r.subject} · Parent Feedback
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <SideCard idx={nextIdx} />
      </div>

      {/* Dots navigation */}
      <div className="flex items-center justify-center gap-1.5 mt-5">
        {DUBAI_REVIEWS.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => go(idx)}
            aria-label={`Go to review ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === idx ? 'w-6 bg-[#0f4a9b]' : 'w-1.5 bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── MINIMAL ANIMATED VISUAL 01: Interactive Whiteboard & Markup ── */
function MinimalWhiteboardVisual() {
  return (
    <div className="relative w-full h-24 rounded-2xl bg-gradient-to-br from-blue-50/70 via-slate-50 to-blue-50/30 border border-blue-100/70 p-3 flex items-center justify-between overflow-hidden">
      {/* Light subtle grid background */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#0f4a9b_0.75px,transparent_0.75px)] [background-size:12px_12px] pointer-events-none" />

      {/* Left: Icon container */}
      <div className="relative z-10 w-11 h-11 rounded-xl bg-white border border-blue-200/70 shadow-xs flex items-center justify-center text-[#0f4a9b] group-hover:scale-105 group-hover:border-[#0f4a9b]/40 group-hover:bg-blue-50/50 transition-all duration-300">
        <Laptop className="w-5 h-5" />
      </div>

      {/* Middle: Minimal formula & animated pen stroke */}
      <div className="relative z-10 flex-1 px-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="font-mono text-xs font-bold text-[#0f4a9b] bg-white/95 px-2 py-0.5 rounded-md border border-blue-100 shadow-2xs">
            dy/dx = 3x²
          </span>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
            +4 marks
          </span>
        </div>
        {/* Animated wave underline */}
        <div className="w-28 h-1.5 bg-blue-100/70 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A] rounded-full"
            animate={{ width: ['35%', '100%', '35%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Right: Live cursor badge */}
      <div className="relative z-10 hidden sm:flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 border border-blue-100 text-[10px] font-semibold text-slate-600 shadow-2xs">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Live Sync
      </div>
    </div>
  );
}

/* ── MINIMAL ANIMATED VISUAL 02: Session Recordings for Revision ── */
function MinimalRecordingVisual() {
  return (
    <div className="relative w-full h-24 rounded-2xl bg-gradient-to-br from-amber-50/60 via-slate-50 to-amber-50/20 border border-amber-100/70 p-3 flex items-center justify-between overflow-hidden">
      {/* Light subtle glow */}
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-200/20 rounded-full blur-xl pointer-events-none" />

      {/* Left: Play Icon in white squircle */}
      <div className="relative z-10 w-11 h-11 rounded-xl bg-white border border-amber-200/70 shadow-xs flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:border-amber-400/60 group-hover:bg-amber-50/50 transition-all duration-300">
        <Video className="w-5 h-5" />
      </div>

      {/* Middle: Equalizer soundwaves (minimal animated) */}
      <div className="relative z-10 flex-1 px-4 flex items-center justify-center gap-1">
        {[
          { h: 10, d: 0.1 },
          { h: 22, d: 0.3 },
          { h: 14, d: 0.15 },
          { h: 26, d: 0.4 },
          { h: 18, d: 0.2 },
          { h: 12, d: 0.35 },
        ].map((bar, i) => (
          <motion.div
            key={i}
            className="w-1 bg-[#0f4a9b] rounded-full"
            animate={{ height: [bar.h, bar.h * 1.5, bar.h] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: bar.d, ease: 'easeInOut' }}
            style={{ height: bar.h }}
          />
        ))}
      </div>

      {/* Right: REC + 1080p Badge */}
      <div className="relative z-10 flex flex-col items-end gap-1">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200/70 text-[10px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          REC
        </span>
        <span className="text-[10px] font-mono font-semibold text-slate-500">
          1080p HD
        </span>
      </div>
    </div>
  );
}

/* ── MINIMAL ANIMATED VISUAL 03: Weekly Parent Progress Notes ── */
function MinimalProgressVisual() {
  return (
    <div className="relative w-full h-24 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-slate-50 to-emerald-50/20 border border-emerald-100/70 p-3 flex items-center justify-between overflow-hidden">
      {/* Light subtle glow */}
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-200/20 rounded-full blur-xl pointer-events-none" />

      {/* Left: FileText Icon in white squircle */}
      <div className="relative z-10 w-11 h-11 rounded-xl bg-white border border-emerald-200/70 shadow-xs flex items-center justify-center text-emerald-600 group-hover:scale-105 group-hover:border-emerald-400/60 group-hover:bg-emerald-50/50 transition-all duration-300">
        <FileText className="w-5 h-5" />
      </div>

      {/* Middle: 3 Minimal Ascending Progress Bars */}
      <div className="relative z-10 flex-1 px-4 flex items-end justify-center gap-3.5 h-12 pb-1">
        <div className="flex flex-col items-center gap-1">
          <motion.div
            className="w-3.5 bg-blue-300 rounded-sm"
            animate={{ height: [18, 20, 18] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ height: 18 }}
          />
          <span className="text-[9px] font-bold text-slate-500 font-mono">B</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <motion.div
            className="w-3.5 bg-[#C7A24A] rounded-sm"
            animate={{ height: [26, 28, 26] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
            style={{ height: 26 }}
          />
          <span className="text-[9px] font-bold text-slate-500 font-mono">A</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <motion.div
            className="w-3.5 bg-emerald-500 rounded-sm shadow-xs"
            animate={{ height: [34, 38, 34] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
            style={{ height: 34 }}
          />
          <span className="text-[9px] font-black text-emerald-700 font-mono">A*</span>
        </div>
      </div>

      {/* Right: Target Badge */}
      <div className="relative z-10 flex flex-col items-end gap-1">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
          <Check className="w-2.5 h-2.5 text-emerald-700" />
          A* Pace
        </span>
        <span className="text-[10px] font-semibold text-slate-500">
          Weekly Sync
        </span>
      </div>
    </div>
  );
}

/* ── MINIMAL ANIMATED SESSION CARD CONTAINER ── */
function MinimalSessionCard({
  step,
  title,
  desc,
  highlight,
  badgeText,
  renderVisual,
}: {
  step: string;
  title: string;
  desc: string;
  highlight: string;
  badgeText: string;
  renderVisual: () => React.ReactNode;
}) {
  return (
    <div className="group relative flex-1 flex flex-col justify-between bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,74,155,0.04)] hover:shadow-[0_12px_32px_rgba(15,74,155,0.08)] hover:border-[#0f4a9b]/30 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A] group-hover:h-1.5 transition-all duration-300" />

      {/* TOP ROW: Feature step & Category tag */}
      <div className="flex items-center justify-between mb-3.5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-[10.5px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
          Feature {step}
        </div>
        <span className="text-[11px] font-semibold text-[#0f4a9b] bg-[#0f4a9b]/8 px-2.5 py-0.5 rounded-full border border-[#0f4a9b]/15">
          {badgeText}
        </span>
      </div>

      {/* Minimal Visual Header */}
      <div className="mb-4">
        {renderVisual()}
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col justify-start mb-4">
        <h3 className="text-base sm:text-[17px] font-extrabold text-[#0a1f3d] mb-1.5 group-hover:text-[#0f4a9b] transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed">
          {desc}
        </p>
      </div>

      {/* FOOTER BADGE */}
      <div className="pt-3.5 border-t border-slate-100 flex items-center">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f4a9b]">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="tracking-tight text-slate-700">{highlight}</span>
        </div>
      </div>
    </div>
  );
}

/* ── ANIMATED SUBJECT INTERACTIVE VISUAL CANVAS ── */
function SubjectVisualCanvas({ subjectId }: { subjectId: string }) {
  if (subjectId === 'maths') {
    return (
      <div className="relative w-full h-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50/70 via-slate-50 to-indigo-50/50 border border-blue-100/80 p-3 sm:p-4 overflow-hidden shadow-inner">
        {/* Subtle coordinate grid */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mathsSubjGrid" width="18" height="18" patternUnits="userSpaceOnUse">
              <path d="M 18 0 L 0 0 0 18" fill="none" stroke="#0f4a9b" strokeWidth="0.6" strokeOpacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mathsSubjGrid)" />
        </svg>

        <svg viewBox="0 0 260 160" className="w-full h-full relative z-10 overflow-visible">
          <defs>
            <linearGradient id="mathsCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f4a9b" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#C7A24A" />
            </linearGradient>
            <linearGradient id="mathsFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Axes */}
          <line x1="20" y1="130" x2="240" y2="130" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="30" y1="20" x2="30" y2="140" stroke="#94a3b8" strokeWidth="1.2" />

          {/* Shaded Integral Area */}
          <path d="M 60 130 Q 110 30, 160 85 T 230 40 L 230 130 Z" fill="url(#mathsFillGrad)" />

          {/* Animated Calculus Curve */}
          <motion.path
            d="M 30 120 Q 80 20, 130 85 T 235 35"
            fill="none"
            stroke="url(#mathsCurveGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ pathLength: [0.25, 1, 0.25] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />

          {/* Floating Tangent Line */}
          <motion.line
            x1="85" y1="110" x2="155" y2="45"
            stroke="#C7A24A"
            strokeWidth="2"
            strokeDasharray="4 3"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
          />

          {/* Formula Badges */}
          <g transform="translate(140, 20)">
            <rect x="0" y="0" width="82" height="22" rx="6" fill="#ffffff" stroke="#0f4a9b" strokeWidth="1" />
            <text x="41" y="14.5" textAnchor="middle" fill="#0f4a9b" fontSize="9" fontWeight="bold" fontFamily="monospace">
              dy/dx = 3x² - 4
            </text>
          </g>
          <g transform="translate(45, 24)">
            <rect x="0" y="0" width="75" height="20" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="37.5" y="13.5" textAnchor="middle" fill="#C7A24A" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              ∫ 2x dx = x² + c
            </text>
          </g>
        </svg>

        {/* Live Indicator Tag */}
        <div className="absolute bottom-2.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-blue-200/80 shadow-2xs text-[10px] font-bold text-[#0f4a9b]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Pure Maths & Mechanics P3
        </div>
      </div>
    );
  }

  if (subjectId === 'physics') {
    return (
      <div className="relative w-full h-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50/70 via-slate-50 to-blue-50/50 border border-indigo-100/80 p-3 sm:p-4 overflow-hidden shadow-inner">
        <svg viewBox="0 0 260 160" className="w-full h-full relative z-10 overflow-visible">
          {/* Orbital Ellipses */}
          <motion.ellipse
            cx="130" cy="80" rx="90" ry="38"
            fill="none" stroke="#0f4a9b" strokeWidth="1.5" strokeDasharray="3 3"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
            style={{ originX: '130px', originY: '80px' }}
          />
          <motion.ellipse
            cx="130" cy="80" rx="90" ry="38"
            fill="none" stroke="#0284c7" strokeWidth="1.2"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            style={{ originX: '130px', originY: '80px', transform: 'rotate(60deg)' }}
          />

          {/* Central Pulsing Nucleus */}
          <circle cx="130" cy="80" r="16" fill="#0f4a9b" />
          <motion.circle
            cx="130" cy="80" r="22"
            fill="none" stroke="#38bdf8" strokeWidth="1.5"
            animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.8, 0.2, 0.8] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
          <text x="130" y="84" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">λ</text>

          {/* Orbiting Quantum Particle */}
          <motion.circle
            cx="220" cy="80" r="5"
            fill="#C7A24A" stroke="#ffffff" strokeWidth="1"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            style={{ originX: '130px', originY: '80px' }}
          />

          {/* Floating Physics Tag */}
          <g transform="translate(155, 20)">
            <rect x="0" y="0" width="80" height="22" rx="6" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
            <text x="40" y="14.5" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="bold" fontFamily="monospace">
              E = hf · p = h/λ
            </text>
          </g>
          <g transform="translate(25, 24)">
            <rect x="0" y="0" width="75" height="20" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="37.5" y="13.5" textAnchor="middle" fill="#0f4a9b" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              F = dp/dt
            </text>
          </g>
        </svg>

        <div className="absolute bottom-2.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-indigo-200/80 shadow-2xs text-[10px] font-bold text-[#0f4a9b]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          Fields, Waves & Quantum Physics
        </div>
      </div>
    );
  }

  if (subjectId === 'chemistry') {
    return (
      <div className="relative w-full h-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50/70 via-slate-50 to-orange-50/40 border border-amber-100/80 p-3 sm:p-4 overflow-hidden shadow-inner">
        <svg viewBox="0 0 260 160" className="w-full h-full relative z-10 overflow-visible">
          {/* Benzene Ring (Hexagon with delocalized pi circle) */}
          <g transform="translate(130, 80)">
            <motion.polygon
              points="0,-38 33,-19 33,19 0,38 -33,19 -33,-19"
              fill="none" stroke="#0f4a9b" strokeWidth="2.5"
            />
            {/* Inner Delocalized Circle */}
            <motion.circle
              cx="0" cy="0" r="22"
              fill="none" stroke="#C7A24A" strokeWidth="2" strokeDasharray="5 3"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            />
            <circle cx="0" cy="0" r="6" fill="#C7A24A" />

            {/* Functional Group Bonds */}
            <line x1="33" y1="-19" x2="52" y2="-30" stroke="#0f4a9b" strokeWidth="2" />
            <text x="58" y="-28" fill="#0f4a9b" fontSize="10" fontWeight="bold">OH</text>

            <line x1="-33" y1="19" x2="-52" y2="30" stroke="#0f4a9b" strokeWidth="2" />
            <text x="-75" y="34" fill="#0f4a9b" fontSize="10" fontWeight="bold">NO₂</text>
          </g>

          {/* Curly Reaction Arrow */}
          <motion.path
            d="M 60 45 Q 85 20, 110 40"
            fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          {/* Badges */}
          <g transform="translate(155, 18)">
            <rect x="0" y="0" width="85" height="22" rx="6" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />
            <text x="42.5" y="14.5" textAnchor="middle" fill="#d97706" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              ΔG = ΔH - TΔS
            </text>
          </g>
          <g transform="translate(25, 24)">
            <rect x="0" y="0" width="75" height="20" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="37.5" y="13.5" textAnchor="middle" fill="#0f4a9b" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              pH = -log[H⁺]
            </text>
          </g>
        </svg>

        <div className="absolute bottom-2.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-amber-200/80 shadow-2xs text-[10px] font-bold text-[#0f4a9b]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          Organic Mechanisms & Energetics
        </div>
      </div>
    );
  }

  if (subjectId === 'biology') {
    return (
      <div className="relative w-full h-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-teal-50/40 border border-emerald-100/80 p-3 sm:p-4 overflow-hidden shadow-inner">
        <svg viewBox="0 0 260 160" className="w-full h-full relative z-10 overflow-visible">
          {/* DNA Strand Animation */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const x = 36 + i * 27;
            const delay = i * 0.22;
            return (
              <g key={i}>
                <motion.line
                  x1={x} y1="42" x2={x} y2="118"
                  stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="2 2"
                />
                <motion.circle
                  cx={x} cy="42" r="4.5" fill="#0f4a9b"
                  animate={{ y: [0, 76, 0] }}
                  transition={{ repeat: Infinity, duration: 3.2, delay, ease: 'easeInOut' }}
                />
                <motion.circle
                  cx={x} cy="118" r="4.5" fill="#10b981"
                  animate={{ y: [0, -76, 0] }}
                  transition={{ repeat: Infinity, duration: 3.2, delay, ease: 'easeInOut' }}
                />
                <motion.line
                  x1={x} y1="62" x2={x} y2="98"
                  stroke="#C7A24A" strokeWidth="2" strokeLinecap="round"
                  animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 3.2, delay, ease: 'easeInOut' }}
                />
              </g>
            );
          })}

          <g transform="translate(150, 18)">
            <rect x="0" y="0" width="90" height="22" rx="6" fill="#ffffff" stroke="#10b981" strokeWidth="1" />
            <text x="45" y="14.5" textAnchor="middle" fill="#059669" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              25-Mark Synoptic Link
            </text>
          </g>
          <g transform="translate(25, 18)">
            <rect x="0" y="0" width="75" height="20" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="37.5" y="13.5" textAnchor="middle" fill="#0f4a9b" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              Gene Expression
            </text>
          </g>
        </svg>

        <div className="absolute bottom-2.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-emerald-200/80 shadow-2xs text-[10px] font-bold text-[#0f4a9b]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Genetics & Physiology Precision
        </div>
      </div>
    );
  }

  if (subjectId === 'economics') {
    return (
      <div className="relative w-full h-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50/70 via-slate-50 to-emerald-50/40 border border-blue-100/80 p-3 sm:p-4 overflow-hidden shadow-inner">
        <svg viewBox="0 0 260 160" className="w-full h-full relative z-10 overflow-visible">
          {/* Axes */}
          <line x1="30" y1="130" x2="230" y2="130" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="40" y1="20" x2="40" y2="140" stroke="#94a3b8" strokeWidth="1.2" />
          <text x="235" y="133" fill="#64748b" fontSize="9" fontWeight="bold">Q</text>
          <text x="36" y="16" fill="#64748b" fontSize="9" fontWeight="bold">P</text>

          {/* Supply Curve (Upward) */}
          <line x1="55" y1="120" x2="205" y2="35" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
          <text x="210" y="38" fill="#059669" fontSize="10" fontWeight="black">S</text>

          {/* Demand Curve 1 (Downward) */}
          <line x1="55" y1="35" x2="205" y2="120" stroke="#0f4a9b" strokeWidth="2.5" strokeLinecap="round" />
          <text x="210" y="123" fill="#0f4a9b" fontSize="10" fontWeight="black">D₁</text>

          {/* Shifting Demand Curve 2 */}
          <motion.line
            x1="85" y1="35" x2="235" y2="120"
            stroke="#C7A24A" strokeWidth="1.8" strokeDasharray="4 3"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />

          {/* Equilibrium Point Pulse */}
          <circle cx="130" cy="78" r="5" fill="#0f4a9b" />
          <motion.circle
            cx="130" cy="78" r="10"
            fill="none" stroke="#38bdf8" strokeWidth="1.5"
            animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          />
          <text x="135" y="72" fill="#0a1f3d" fontSize="9" fontWeight="bold">E* (P*, Q*)</text>

          {/* Badges */}
          <g transform="translate(145, 18)">
            <rect x="0" y="0" width="85" height="22" rx="6" fill="#ffffff" stroke="#0f4a9b" strokeWidth="1" />
            <text x="42.5" y="14.5" textAnchor="middle" fill="#0f4a9b" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              KAA + EV Chains
            </text>
          </g>
        </svg>

        <div className="absolute bottom-2.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-blue-200/80 shadow-2xs text-[10px] font-bold text-[#0f4a9b]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Macro & Micro Evaluative Rigour
        </div>
      </div>
    );
  }

  // English
  return (
    <div className="relative w-full h-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50/60 via-slate-50 to-blue-50/40 border border-purple-100/80 p-3 sm:p-4 overflow-hidden shadow-inner">
      <svg viewBox="0 0 260 160" className="w-full h-full relative z-10 overflow-visible">
        {/* Open Book Outline */}
        <g transform="translate(50, 40)">
          <rect x="0" y="0" width="70" height="75" rx="4" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="10" y1="18" x2="60" y2="18" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <motion.line
            x1="10" y1="30" x2="50" y2="30"
            stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"
            animate={{ width: [20, 50, 20] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <line x1="10" y1="42" x2="55" y2="42" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="54" x2="40" y2="54" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(130, 40)">
          <rect x="0" y="0" width="70" height="75" rx="4" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="10" y1="18" x2="55" y2="18" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="30" x2="60" y2="30" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="42" x2="45" y2="42" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="54" x2="50" y2="54" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Big Stylized Quote Marks in Center */}
        <text x="125" y="32" textAnchor="middle" fill="#C7A24A" fontSize="32" fontWeight="black" fontFamily="Georgia, serif">“ ”</text>

        {/* Badges */}
        <g transform="translate(145, 18)">
          <rect x="0" y="0" width="90" height="22" rx="6" fill="#ffffff" stroke="#8b5cf6" strokeWidth="1" />
          <text x="45" y="14.5" textAnchor="middle" fill="#7c3aed" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
            Band 5 Critical Analysis
          </text>
        </g>
        <g transform="translate(25, 18)">
          <rect x="0" y="0" width="75" height="20" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <text x="37.5" y="13.5" textAnchor="middle" fill="#0f4a9b" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
            AO1 · AO2 · AO3
          </text>
        </g>
      </svg>

      <div className="absolute bottom-2.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-purple-200/80 shadow-2xs text-[10px] font-bold text-[#0f4a9b]">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
        Comparative Argument & Textual Rubric
      </div>
    </div>
  );
}

export default function ALevelTutorDubaiPage() {
  const [selectedBoard, setSelectedBoard] = useState<'cambridge' | 'edexcel' | 'aqa'>('cambridge');
  const [selectedSubject, setSelectedSubject] = useState<string>('maths');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // 3D Lab States
  const [active3DTab, setActive3DTab] = useState<'dissector' | 'ucas' | 'whiteboard'>('dissector');
  const [dissectorSubj, setDissectorSubj] = useState<string>('maths');
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [p1Score, setP1Score] = useState<number>(84);
  const [p2Score, setP2Score] = useState<number>(78);
  const [p3Score, setP3Score] = useState<number>(86);






  // UCAS calculation
  const totalRaw = Math.round((p1Score + p2Score + p3Score) / 3);
  let predictedLetter = 'C';
  let ucasPoints = 32;
  let gradeColor = 'from-amber-500 to-orange-600';
  let badgeBorder = 'border-amber-400';
  let offerTier = 'Foundation / Standard Entry';

  if (totalRaw >= 82) {
    predictedLetter = 'A*';
    ucasPoints = 56;
    gradeColor = 'from-emerald-400 to-teal-500';
    badgeBorder = 'border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.5)]';
    offerTier = 'Oxford · Cambridge · Imperial · UCL Direct Entry';
  } else if (totalRaw >= 72) {
    predictedLetter = 'A';
    ucasPoints = 48;
    gradeColor = 'from-blue-400 to-[#0f4a9b]';
    badgeBorder = 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]';
    offerTier = 'King\'s College · Edinburgh · Manchester · Warwick Offers';
  } else if (totalRaw >= 60) {
    predictedLetter = 'B';
    ucasPoints = 40;
    gradeColor = 'from-amber-400 to-yellow-600';
    badgeBorder = 'border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]';
    offerTier = 'Exeter · Bristol · AUS Dubai · Khalifa University Matches';
  }

  const activeSubject = A_LEVEL_SUBJECTS.find((s) => s.id === selectedSubject) || A_LEVEL_SUBJECTS[0];

  return (
    <Layout>
      <SEOHead
        title="A-Level Tutors in Dubai | Cambridge, Edexcel & AQA | Ustaad"
        description="Online 1-to-1 A-Level tuition in Dubai for Maths, Further Maths, Physics, Chemistry, Biology and Economics. Cambridge, Edexcel and AQA. Free 15-min orientation with the first lesson."
        canonical="/a-level-tutor-dubai"
        ogImage="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp"
        preloadHeroImage="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp"
        placename="Dubai, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Dubai',
            url: '/a-level-tutor-dubai',
            name: 'Ustaad — A-Level Tutor Dubai',
            description: 'Online 1-to-1 A-Level tuition in Dubai for Maths, Further Maths, Physics, Chemistry, Biology and Economics. Cambridge, Edexcel and AQA.'
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'A-Level', url: '/a-level' },
            { name: 'A-Level Tutor Dubai', url: '/a-level-tutor-dubai' }
          ]),
          serviceSchema(
            'A-Level Tutor Dubai',
            'Private 1-to-1 online A-Level tutoring in Dubai for Cambridge, Edexcel and AQA curriculums.',
            '/a-level-tutor-dubai'
          ),
          faqSchema(DUBAI_FAQS)
        ]}
      />

      {/* ── HERO SECTION (USTAAD SIGNATURE NAVY & GOLD) ── */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Desktop SVG background */}
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full hidden md:block" aria-hidden="true">
            <defs>
              <linearGradient id="alDubaiGrowthGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="alDubaiHexGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0c96a" />
                <stop offset="100%" stopColor="#C7A24A" />
              </linearGradient>
              <radialGradient id="alDubaiHexGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
              </radialGradient>
              <filter id="alDubaiPglow"><feGaussianBlur stdDeviation="3" /></filter>
              <marker id="alDubaiArrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(95,211,230,0.8)" />
              </marker>
            </defs>

            {(() => {
              const dots: ReactNode[] = [];
              for (let x = 40; x < 1400; x += 55)
                for (let y = 30; y < 600; y += 55)
                  dots.push(<circle key={`ald_${x}_${y}`} cx={x} cy={y} r="1" fill="rgba(255,255,255,0.03)" />);
              return dots;
            })()}

            {/* Left growth trajectory line */}
            <path d="M 40 480 Q 200 460 360 140" fill="none" stroke="url(#alDubaiGrowthGrad)" strokeWidth="3" filter="url(#alDubaiPglow)" />
            <path d="M 40 480 Q 200 460 360 140" fill="none" stroke="url(#alDubaiGrowthGrad)" strokeWidth="1.5" markerEnd="url(#alDubaiArrow)" />
            <line x1="30" y1="480" x2="380" y2="480" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="40" y1="490" x2="40" y2="100" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <text x="350" y="115" fill="rgba(95,211,230,0.85)" fontSize="13" fontFamily="monospace" fontWeight="bold">Target: Grade A*</text>
            <text x="350" y="500" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">Exam Week</text>
            <text x="45" y="500" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">Current</text>

            {/* Right A-Level Hexagon badge */}
            {(() => {
              const HX = 1270;
              const HY = 240;
              const SIZE = 80;
              const pts = [];
              for (let i = 0; i < 6; i++) {
                const angle_rad = (Math.PI / 180) * (60 * i - 30);
                pts.push(`${HX + SIZE * Math.cos(angle_rad)},${HY + SIZE * Math.sin(angle_rad)}`);
              }
              return (
                <>
                  <circle cx={HX} cy={HY} r={SIZE * 1.5} fill="url(#alDubaiHexGlow)" />
                  <polygon points={pts.join(' ')} fill="none" stroke="url(#alDubaiHexGrad)" strokeWidth="2" filter="url(#alDubaiPglow)" />
                  <polygon points={pts.join(' ')} fill="none" stroke="rgba(240,201,106,0.5)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx={HX} cy={HY} r="25" fill="rgba(240,201,106,0.1)" stroke="#f0c96a" strokeWidth="1.5" />
                  <text x={HX} y={HY + 6} textAnchor="middle" fill="#f0c96a" fontSize="14" fontWeight="900" fontFamily="sans-serif">A-LEVEL</text>
                  <text x={HX - 100} y={HY - 65} fill="rgba(95,211,230,0.7)" fontSize="11" fontFamily="monospace">Cambridge 9709</text>
                  <text x={HX + 45} y={HY - 75} fill="rgba(180,180,255,0.7)" fontSize="11" fontFamily="monospace">Edexcel 9MA0</text>
                  <text x={HX + 60} y={HY + 75} fill="rgba(240,201,106,0.7)" fontSize="11" fontFamily="monospace">AQA · OCR A</text>
                </>
              );
            })()}
          </svg>

          {/* Clean ambient background glowing accents on mobile */}
          <MobileHeroBackground />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-20 md:pb-14 max-w-5xl w-full"
        >
          {/* Eyebrow */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-3"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f0c96a' }} />
            <span className="text-blue-100/90 text-[11px] sm:text-[12px] font-semibold tracking-wide">
              ONLINE A-LEVEL TUITION · DUBAI
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
            className="font-extrabold tracking-tight text-white leading-[1.08] mb-3 md:mb-5 text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] max-w-[95%] sm:max-w-none"
          >
            A-Level Tutors in Dubai{' '}
            <span className="block sm:inline" style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Who Turn Grades Around
            </span>
          </motion.h1>

          {/* Lead */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="text-blue-100/80 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mb-6 md:mb-8 px-2 italic"
          >
            One-to-one A-Level tutoring for Cambridge, Edexcel and AQA students, matched to your child&apos;s exact exam board and school syllabus. Also looking for options nationwide? See our <a href="/a-level" className="underline font-bold text-amber-300 hover:text-white">A-Level tutoring across the UAE</a>.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md sm:max-w-none px-4"
          >
            {/* Mobile CTAs */}
            <div className="sm:hidden w-full flex flex-col items-center gap-3">
              <a
                href={BOOKING}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-[15px] text-white transition-all hover:-translate-y-0.5 text-center active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 6px 20px rgba(15,74,155,0.45)' }}
              >
                Book Your First Session
              </a>
              <span className="text-blue-200/60 text-[11px]">✦ No Commitment · Cancel Anytime</span>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20 active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" /> WhatsApp Us
              </a>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-start justify-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <a
                  href={BOOKING}
                  className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[15px] md:text-base text-white transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 18px rgba(15,74,155,0.55)' }}
                >
                  Book Your First Session
                </a>
                <p className="text-blue-200/50 text-[11px]">✦ No Commitment · Cancel Anytime</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Ustaad on WhatsApp"
                  className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[14px] md:text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Dubai School Logos Marquee */}
      <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#0f4a9b]">
            Trusted by A-Level Families Across Premier Dubai British Schools
          </p>
        </div>
        <SchoolsMarquee
          title="Trusted by Families at Leading Dubai Schools"
          logoList={A_LEVEL_DUBAI_SCHOOL_LOGOS}
        />
      </section>

      {/* ── SECTION 02: THE 6 A-LEVEL PRESSURE POINTS IN DUBAI ── */}
      <DubaiALevelSlipSection />

      {/* ── SECTION 03: INTERACTIVE EXAM BOARD ALIGNMENT (SINGLE VIEWPORT FIT) ── */}
      <section className="py-7 sm:py-8 lg:py-10 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 sm:mb-5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-2 shadow-2xs">
              <Layers className="w-3 h-3 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[10.5px] font-bold uppercase tracking-[0.14em]">
                Specification Mastery
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-1.5 tracking-tight">
              <GradientHeadingText text="Taught to Your School's Exact Exam Board" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto">
              We never teach generic syllabus content. Your tutor is matched to the specific board, specification code, and assessment series followed by your Dubai school.
            </p>
          </div>

          {/* Board Selector Tabs */}
          <div className="flex justify-center mb-4 sm:mb-5">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200/80 shadow-2xs">
              {(['cambridge', 'edexcel', 'aqa'] as const).map((bKey) => (
                <button
                  key={bKey}
                  type="button"
                  onClick={() => setSelectedBoard(bKey)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs sm:text-[13px] font-bold transition-all ${
                    selectedBoard === bKey
                      ? 'bg-white text-[#0f4a9b] shadow-xs'
                      : 'text-slate-600 hover:text-[#0a1f3d]'
                  }`}
                >
                  {BOARD_DATA[bKey].name.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Board Details Card */}
          <motion.div
            key={selectedBoard}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="max-w-3xl mx-auto bg-gradient-to-br from-[#f8fafc] to-white border border-[#0f4a9b]/15 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3.5 mb-3 border-b border-gray-100">
              <div>
                <span className="text-[10px] font-bold text-[#0f4a9b] uppercase tracking-wider block mb-0.5">
                  Active Specification
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1f3d] leading-tight">
                  {BOARD_DATA[selectedBoard].name}
                </h3>
              </div>
              <div className="inline-flex items-center self-start sm:self-auto px-2.5 py-1 rounded-full bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[11px] font-bold">
                {BOARD_DATA[selectedBoard].code}
              </div>
            </div>

            <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed mb-3">
              {BOARD_DATA[selectedBoard].description}
            </p>

            <div className="space-y-2 mb-4">
              {BOARD_DATA[selectedBoard].keyPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-gray-700 text-xs sm:text-[12.5px] leading-snug">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10.5px] font-medium text-gray-500 block mb-0.5">Commonly Sat At:</span>
                <span className="text-[11px] sm:text-xs font-bold text-[#0a1f3d]">
                  {BOARD_DATA[selectedBoard].schools.join(' · ')}
                </span>
              </div>
              <GoldButton href={BOOKING} className="text-xs px-4 py-2 shrink-0">
                Match My Child's Board
              </GoldButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 04: CORE A-LEVEL SUBJECT TRACKS (MINIMAL & ANIMATED) ── */}
      <section className="py-5 sm:py-8 lg:py-10 bg-[#f8fafc] border-t border-gray-100 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-3 sm:mb-5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-1 shadow-2xs">
              <BookOpen className="w-3 h-3 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.14em]">
                Subject Excellence
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-0.5 tracking-tight">
              <GradientHeadingText text="Core A-Level Subjects We Tutor in Dubai" />
            </h2>
            <p className="text-gray-600 text-[11px] sm:text-[13px] leading-relaxed max-w-xl mx-auto">
              Diagnostic mark-scheme mastery matched to your child's exact school syllabus.
            </p>
          </div>

          {/* Animated Subject Navigation Buttons - Scroll on mobile */}
          <div className="flex sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto mb-3 sm:mb-5 overflow-x-auto no-scrollbar pb-1 px-1">
            {A_LEVEL_SUBJECTS.map((subj) => {
              const isSelected = selectedSubject === subj.id;
              return (
                <button
                  key={subj.id}
                  type="button"
                  onClick={() => setSelectedSubject(subj.id)}
                  className={`relative shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[12.5px] font-bold transition-colors duration-200 ${
                    isSelected
                      ? 'text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#0a1f3d] bg-white border border-slate-200/80 hover:border-[#0f4a9b]/30'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeSubjPill"
                      className="absolute inset-0 bg-[#0f4a9b] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {subj.name.split(' &')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Subject Detail Card with Animated Visual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSubject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl mx-auto bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-7 shadow-[0_4px_24px_rgba(15,74,155,0.04)] overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />

              <div className="grid lg:grid-cols-12 gap-3.5 sm:gap-5 lg:gap-7 items-center">
                
                {/* Left Column: Subject Info & Specification Units */}
                <div className="lg:col-span-6 space-y-2.5 sm:space-y-3.5">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center text-[#0f4a9b] shadow-2xs shrink-0">
                      {activeSubject.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-extrabold text-[#0a1f3d] leading-tight">
                        {activeSubject.name}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-[#0f4a9b] bg-blue-50/80 px-2 sm:px-2.5 py-0.5 rounded-full border border-blue-100/60 inline-block mt-0.5">
                        {activeSubject.boards}
                      </span>
                    </div>
                  </div>

                  {/* Core Topics Chips - Full text, no truncation (...) */}
                  <div>
                    <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Specification Core Units
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                      {activeSubject.coreTopics.map((topic, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 bg-slate-50/90 px-2.5 py-1.5 rounded-lg border border-slate-200/60 leading-snug"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] shrink-0 mt-1" />
                          <span className="break-words">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Compact Action Row without arrow */}
                  <div className="flex flex-wrap items-center gap-3 pt-0.5">
                    <GoldButton href={BOOKING} className="text-xs py-1.5 sm:py-2 px-3.5 sm:px-4 justify-center shadow-xs">
                      Book First Session
                    </GoldButton>
                    <a
                      href={activeSubject.href}
                      className="text-xs font-bold text-[#0f4a9b] hover:text-[#0a1f3d] inline-flex items-center transition-colors"
                    >
                      Full {activeSubject.name.split(' &')[0]} Hub
                    </a>
                    {activeSubject.id === 'physics' && (
                      <span className="text-xs text-slate-500">
                        Looking for physics? See our{' '}
                        <a
                          href="/physics-tutor-dubai"
                          className="font-bold text-[#0f4a9b] hover:text-[#0a1f3d] underline transition-colors"
                        >
                          Physics tutors in Dubai
                        </a>.
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column: Animated Subject Interactive Canvas */}
                <div className="lg:col-span-6 h-[160px] sm:h-[220px] lg:h-[240px] flex items-center">
                  <SubjectVisualCanvas subjectId={activeSubject.id} />
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── INTERACTIVE A-LEVEL EXAM & MARK-SCHEME LAB (WHITE CLASSY & SINGLE VIEWPORT FIT) ── */}
      <section className="py-7 sm:py-8 lg:py-10 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-gradient-to-b from-blue-50/70 via-indigo-50/20 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#C7A24A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Compact Section Header */}
          <div className="text-center mb-4 sm:mb-5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-1.5 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#C7A24A]" />
              <span className="text-[#0f4a9b] text-[10.5px] font-bold uppercase tracking-[0.14em]">
                Interactive Exam Laboratory
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-1 tracking-tight">
              <GradientHeadingText text="See an A-Level Question Marked Step by Step" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto">
              Explore step-by-step mark dissection, test raw grade thresholds, and experience real-time 1-on-1 intervention.
            </p>

            {/* Classy Mode Switcher Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3.5">
              {[
                { id: 'dissector', label: 'Question Dissector', icon: <Layers className="w-3.5 h-3.5" /> },
                { id: 'ucas', label: 'Grade & UCAS Simulator', icon: <TrendingUp className="w-3.5 h-3.5" /> },
                { id: 'whiteboard', label: 'Live Lesson Simulator', icon: <Laptop className="w-3.5 h-3.5" /> }
              ].map((tab) => {
                const isActive = active3DTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActive3DTab(tab.id as any)}
                    className={`relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                      isActive
                        ? 'text-white shadow-xs'
                        : 'text-slate-600 hover:text-[#0a1f3d] bg-slate-50 border border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeLabTabPill"
                        className="absolute inset-0 bg-[#0f4a9b] rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {tab.icon}
                      <span>{tab.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* TAB 1: QUESTION DISSECTOR */}
          {active3DTab === 'dissector' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgba(15,74,155,0.06)] relative overflow-hidden"
            >
              {/* Top Metallic Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />

              {/* Subject Selector Sub-Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 mb-4 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-1.5">
                  {Object.keys(DISSECTOR_PROBLEMS).map((key) => {
                    const prob = DISSECTOR_PROBLEMS[key];
                    const isSubjSelected = dissectorSubj === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setDissectorSubj(key);
                          setActiveLayer(0);
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isSubjSelected
                            ? 'bg-[#0f4a9b] text-white shadow-2xs'
                            : 'bg-slate-50 text-slate-600 hover:text-[#0a1f3d] border border-slate-200/70 hover:border-slate-300'
                        }`}
                      >
                        {prob.subject.split(' &')[0]}
                      </button>
                    );
                  })}
                </div>

                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50/80 text-[#0f4a9b] text-[11px] font-bold border border-blue-100/70">
                  <span>{DISSECTOR_PROBLEMS[dissectorSubj].board.split(' /')[0]}</span>
                  <span>·</span>
                  <span>{DISSECTOR_PROBLEMS[dissectorSubj].paper.split(' (')[0]}</span>
                  <span className="text-amber-600 font-extrabold ml-1">({DISSECTOR_PROBLEMS[dissectorSubj].marks} Marks)</span>
                </div>
              </div>

              {/* Problem Title */}
              <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] mb-3">
                {DISSECTOR_PROBLEMS[dissectorSubj].questionTitle}
              </h3>

              {/* 2-Column Comparative Layout: Exam Prompt & Trap vs. Ustaad Mark-Scheme Solution */}
              <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 items-stretch mb-4">
                
                {/* Left: Original Prompt & Student Trap */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-3 bg-slate-50/70 border border-slate-200/70 rounded-2xl p-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Original Exam Paper Prompt
                    </span>
                    <p className="text-xs sm:text-[12.5px] font-mono text-slate-800 leading-relaxed bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs">
                      {DISSECTOR_PROBLEMS[dissectorSubj].questionStem}
                    </p>
                  </div>

                  <div className="bg-rose-50/70 border border-rose-200/70 rounded-xl p-3 text-rose-900 text-xs leading-relaxed">
                    <div className="flex items-center gap-1.5 font-bold text-rose-700 text-[11px] uppercase tracking-wider mb-1">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>Mark-Loss Trap</span>
                    </div>
                    {DISSECTOR_PROBLEMS[dissectorSubj].studentTrap}
                  </div>
                </div>

                {/* Right: Step-by-Step Mark Scheme Breakdown */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-2.5 bg-emerald-50/30 border border-emerald-200/60 rounded-2xl p-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                      Ustaad Step-by-Step Examiner Rubric
                    </span>
                    <div className="space-y-1.5 text-xs font-mono">
                      <div className="bg-white/95 p-2 rounded-lg border border-emerald-100 shadow-2xs flex items-start gap-2">
                        <span className="text-emerald-600 font-bold shrink-0">[M1]</span>
                        <span className="text-slate-700">{DISSECTOR_PROBLEMS[dissectorSubj].ustaadSolution.step1}</span>
                      </div>
                      <div className="bg-white/95 p-2 rounded-lg border border-emerald-100 shadow-2xs flex items-start gap-2">
                        <span className="text-emerald-600 font-bold shrink-0">[M2]</span>
                        <span className="text-slate-700">{DISSECTOR_PROBLEMS[dissectorSubj].ustaadSolution.step2}</span>
                      </div>
                      <div className="bg-white/95 p-2 rounded-lg border border-emerald-100 shadow-2xs flex items-start gap-2">
                        <span className="text-emerald-600 font-bold shrink-0">[A1]</span>
                        <span className="text-slate-700">{DISSECTOR_PROBLEMS[dissectorSubj].ustaadSolution.step3}</span>
                      </div>
                      <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200 shadow-2xs flex items-start gap-2 font-bold text-emerald-900">
                        <span className="text-amber-600 font-bold shrink-0">[Final]</span>
                        <span>{DISSECTOR_PROBLEMS[dissectorSubj].ustaadSolution.final}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] italic text-slate-500 border-l-2 border-[#C7A24A] pl-2.5 py-0.5 mt-1">
                    {DISSECTOR_PROBLEMS[dissectorSubj].examinerQuote}
                  </p>
                </div>

              </div>

              {/* Bottom Card Action Bar */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-600 text-center sm:text-left">
                  Master full past-paper questions with this line-by-line mark scheme precision.
                </span>
                <GoldButton href={BOOKING} className="text-xs px-5 py-2 shrink-0 shadow-xs">
                  Book First Session
                </GoldButton>
              </div>
            </motion.div>
          )}

          {/* TAB 2: GRADE & UCAS SIMULATOR */}
          {active3DTab === 'ucas' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgba(15,74,155,0.06)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />

              <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-center">
                
                {/* Left: Sliders */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f4a9b] block mb-0.5">
                      Component Raw-Mark Modeler
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1f3d]">
                      Simulate Your Predicted Component Scores
                    </h3>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Adjust your marks across Papers 1, 2, and 3 to test real grade boundary thresholds.
                    </p>
                  </div>

                  <div className="space-y-3 bg-slate-50/70 border border-slate-200/70 rounded-2xl p-4">
                    {/* Paper 1 Slider */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span className="text-slate-700">Paper 1 (Core / Pure):</span>
                        <span className="text-[#0f4a9b] font-mono font-extrabold text-xs">{p1Score} / 100</span>
                      </div>
                      <input
                        type="range"
                        min="40"
                        max="100"
                        value={p1Score}
                        onChange={(e) => setP1Score(Number(e.target.value))}
                        className="w-full accent-[#0f4a9b] cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                      />
                    </div>

                    {/* Paper 2 Slider */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span className="text-slate-700">Paper 2 (Applications):</span>
                        <span className="text-[#0f4a9b] font-mono font-extrabold text-xs">{p2Score} / 100</span>
                      </div>
                      <input
                        type="range"
                        min="40"
                        max="100"
                        value={p2Score}
                        onChange={(e) => setP2Score(Number(e.target.value))}
                        className="w-full accent-[#0f4a9b] cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                      />
                    </div>

                    {/* Paper 3 Slider */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span className="text-slate-700">Paper 3 (Synoptic / Options):</span>
                        <span className="text-[#0f4a9b] font-mono font-extrabold text-xs">{p3Score} / 100</span>
                      </div>
                      <input
                        type="range"
                        min="40"
                        max="100"
                        value={p3Score}
                        onChange={(e) => setP3Score(Number(e.target.value))}
                        className="w-full accent-[#0f4a9b] cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C7A24A]" />
                      Weighted Aggregate: <strong className="text-[#0a1f3d] font-mono font-extrabold">{totalRaw}%</strong>
                    </span>
                    <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      Live Assessment Active
                    </span>
                  </div>
                </div>

                {/* Right: Projected Grade Badge & University Tier */}
                <div className="lg:col-span-5 flex flex-col items-center text-center p-4 bg-gradient-to-br from-blue-50/50 via-slate-50 to-amber-50/30 border border-slate-200/80 rounded-2xl">
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-36 h-36 rounded-2xl bg-white border-2 border-[#C7A24A] shadow-[0_8px_24px_rgba(199,162,74,0.15)] flex flex-col items-center justify-center p-3 mb-3"
                  >
                    <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-slate-400">
                      Projected Grade
                    </span>
                    <span className="text-5xl font-black text-[#0a1f3d] my-0.5 tracking-tight">
                      {predictedLetter}
                    </span>
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-[10.5px] font-bold text-[#0f4a9b] border border-blue-100">
                      <Trophy className="w-3 h-3 text-[#C7A24A]" />
                      <span>{ucasPoints} UCAS Points</span>
                    </div>
                  </motion.div>

                  <div className="space-y-1 mb-3">
                    <span className="text-[11px] font-bold text-[#C7A24A] block">
                      Eligible University Offer Tier:
                    </span>
                    <p className="text-xs text-slate-700 font-bold leading-snug">
                      {offerTier}
                    </p>
                  </div>

                  <GoldButton href={BOOKING} className="text-xs px-5 py-2 w-full justify-center shadow-xs">
                    Lock in Your Target Grade
                  </GoldButton>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: LIVE LESSON SIMULATOR */}
          {active3DTab === 'whiteboard' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgba(15,74,155,0.06)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />

              {/* Classroom Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-slate-600 font-mono text-[11px] ml-2 font-medium">Ustaad Live Classroom · Dubai 1-to-1</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Ultra-HD Audio/Video Active</span>
                </div>
              </div>

              {/* Canvas & Sidebar */}
              <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
                
                {/* Whiteboard Math Stream */}
                <div className="lg:col-span-8 bg-slate-50/80 rounded-2xl p-4.5 border border-slate-200/70 font-mono text-xs sm:text-[12.5px] text-slate-800 flex flex-col justify-between space-y-2.5">
                  <div className="space-y-2">
                    <div className="text-slate-500 text-[10.5px] border-b border-slate-200/60 pb-1.5">
                      // Calculus P3: Implicit Differentiation at Point P
                    </div>
                    <div className="text-[#0f4a9b] font-bold">
                      f(x, y) = x³ + y³ - 6xy = 0
                    </div>
                    <div className="text-slate-600">
                      d/dx [x³] + d/dx [y³] - 6 d/dx [xy] = 0
                    </div>
                    <div className="text-emerald-900 bg-emerald-50 p-2 rounded-lg border border-emerald-200/80 font-bold">
                      3x² + 3y²(dy/dx) - 6(y + x(dy/dx)) = 0 <span className="text-[#C7A24A] ml-2 font-black">✓ Product rule applied</span>
                    </div>
                    <div className="text-slate-700">
                      dy/dx [3y² - 6x] = 6y - 3x² ⇒ dy/dx = (2y - x²) / (y² - 2x)
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 border-t border-slate-200/60 text-[10.5px] text-slate-500">
                    <span>Digital Stylus Pressure-Sensitive Canvas</span>
                    <span className="text-[#0f4a9b] font-bold">Latency: 12ms (Direct Co-Markup)</span>
                  </div>
                </div>

                {/* Tutor Intervention Sidebar */}
                <div className="lg:col-span-4 bg-blue-50/40 rounded-2xl p-4 border border-blue-100/70 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C7A24A] block mb-1">
                      Real-Time Interception
                    </span>
                    <h4 className="text-sm font-extrabold text-[#0a1f3d] mb-1.5">
                      Tutor Correction Notes
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Tutor immediately pauses the student during product rule expansion on 6xy, ensuring the negative sign distributes cleanly.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-blue-200/70 text-[11px] text-[#0f4a9b] font-semibold">
                    <strong>Session Result:</strong> Student identified implicit chain rule without hesitation.
                  </div>

                  <GoldButton href={BOOKING} className="w-full text-xs py-2 justify-center shadow-xs">
                    Book First Session
                  </GoldButton>
                </div>

              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* ── SECTION 05: 4-STAGE GRADE TURNAROUND PROTOCOL (SINGLE VIEWPORT FIT & MINIMAL CLASSY) ── */}
      <section className="py-7 sm:py-8 lg:py-10 bg-white border-t border-gray-100 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Compact Section Header */}
          <div className="text-center mb-5 sm:mb-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-1.5 shadow-2xs">
              <Compass className="w-3 h-3 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[10.5px] font-bold uppercase tracking-[0.14em]">
                The Ustaad Method
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-1 tracking-tight">
              <GradientHeadingText text="The 4-Stage Grade Turnaround Protocol" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto">
              How we move students from shaky conceptual grasp to confident, examiner-grade execution.
            </p>
          </div>

          {/* Minimal Classy Cards (Single Viewport Fit on Desktop, Swipe on Mobile) */}
          <div className="w-full flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 items-stretch justify-center overflow-x-auto sm:overflow-visible snap-x snap-mandatory pt-0.5 pb-2.5 sm:pb-0 px-4 sm:px-0 -mx-4 sm:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {PROTOCOL_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="w-[82vw] max-w-[290px] sm:w-full sm:max-w-none shrink-0 sm:shrink snap-center flex flex-col group relative bg-white border border-slate-200/80 hover:border-[#0f4a9b]/35 rounded-2xl sm:rounded-3xl p-4.5 sm:p-5 lg:p-5.5 justify-between shadow-[0_4px_20px_rgba(15,74,155,0.03)] hover:shadow-[0_12px_28px_rgba(15,74,155,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Top Metallic Border Highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A] group-hover:h-1.5 transition-all duration-300" />
                
                {/* Subtle Ambient Corner Glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/5 group-hover:bg-[#C7A24A]/10 rounded-full blur-xl pointer-events-none transition-colors duration-500" />

                <div>
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center text-[#0f4a9b] group-hover:border-[#0f4a9b]/35 group-hover:bg-blue-50/40 group-hover:scale-105 transition-all duration-300 shadow-2xs">
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-extrabold text-[#0f4a9b] uppercase tracking-wider bg-[#0f4a9b]/8 px-2.5 py-0.5 rounded-full border border-[#0f4a9b]/15">
                      Stage {step.num}
                    </span>
                  </div>

                  {/* Title & Tagline with uniform vertical rhythm */}
                  <h3 className="text-[15.5px] sm:text-[16px] lg:text-[16.5px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-snug min-h-[44px] flex items-center mb-1">
                    {step.title}
                  </h3>
                  <span className="text-[11.5px] font-bold text-[#C7A24A] block mb-2.5 tracking-tight">
                    {step.tagline}
                  </span>

                  {/* Balanced Description */}
                  <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Footer Deliverable */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Hint (No arrows, no dots) */}
          <div className="sm:hidden flex items-center justify-center mt-3 mb-1">
            <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold text-slate-500 bg-slate-100/90 border border-slate-200/80 tracking-tight select-none">
              Swipe to see more
            </span>
          </div>

        </div>
      </section>

      {/* ── SECTION 06: HOW ONLINE SESSIONS WORK (INTERACTIVE 3D ANIMATED) ── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#f8fafc] border-t border-gray-100 relative overflow-hidden">
        {/* Subtle ambient lighting orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-gradient-to-b from-[#0f4a9b]/8 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#C7A24A]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-3.5 shadow-2xs">
              <Video className="w-3.5 h-3.5 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">
                Live Learning Platform
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3">
              <GradientHeadingText text="How Live Online A-Level Tutoring Works" />
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Engineered specifically for rigorous mathematics working, chemical structures, and live mark-scheme dissection.
            </p>
          </div>

          {/* Minimal Animated Interactive Cards */}
          <div className="w-full flex md:grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch justify-center overflow-x-auto md:overflow-visible snap-x snap-mandatory pt-1 pb-3 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            
            {/* Card 01: Interactive Whiteboard & Markup */}
            <div className="w-[84vw] max-w-[340px] md:w-full md:max-w-none shrink-0 md:shrink snap-center flex flex-col">
              <MinimalSessionCard
                step="01"
                title="Interactive Whiteboard & Markup"
                desc="Tutor and student write simultaneously on past-paper PDFs and digital graph paper. No blurry phone photos or awkward webcam setups."
                highlight="Tutor & Student Live Co-Markup"
                badgeText="Real-Time Canvas"
                renderVisual={() => <MinimalWhiteboardVisual />}
              />
            </div>

            {/* Card 02: Session Recordings for Revision */}
            <div className="w-[84vw] max-w-[340px] md:w-full md:max-w-none shrink-0 md:shrink snap-center flex flex-col">
              <MinimalSessionCard
                step="02"
                title="Session Recordings for Revision"
                desc="Every online lesson is automatically recorded. Students can rewatch complex organic mechanisms or physics derivations 24 hours before school tests."
                highlight="Unlimited 24/7 Revision Access"
                badgeText="1080p Cloud Vault"
                renderVisual={() => <MinimalRecordingVisual />}
              />
            </div>

            {/* Card 03: Weekly Parent Progress Notes */}
            <div className="w-[84vw] max-w-[340px] md:w-full md:max-w-none shrink-0 md:shrink snap-center flex flex-col">
              <MinimalSessionCard
                step="03"
                title="Weekly Parent Progress Notes"
                desc="Parents receive concise weekly updates detailing topics mastered, homework completed, and timed mock grade trajectories."
                highlight="Direct WhatsApp Weekly Reports"
                badgeText="Weekly Pacing Sync"
                renderVisual={() => <MinimalProgressVisual />}
              />
            </div>

          </div>

          {/* Mobile Swipe Hint (No arrows, no dots) */}
          <div className="md:hidden flex items-center justify-center mt-3 mb-1">
            <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold text-slate-500 bg-slate-100/90 border border-slate-200/80 tracking-tight select-none">
              Swipe to see more
            </span>
          </div>
        </div>
      </section>





      {/* ── SECTION 07: DUBAI AREAS COVERED ── */}
      <section className="py-16 sm:py-20 bg-white border-y border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-3.5 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#0f4a9b]" />
            <span className="text-[11px] font-bold text-[#0f4a9b] uppercase tracking-wider">
              Across Dubai
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3">
            Serving Families <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Across Dubai</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Online 1-to-1 A-Level lessons connecting students across all major residential communities in Dubai. Also serving the capital with our <a href="/a-level-tutor-abu-dhabi" className="text-[#0f4a9b] font-bold underline hover:text-[#0a254a]">A-Level tutors in Abu Dhabi</a> and the Garden City with our dedicated <a href="/a-level-tutor-al-ain" className="text-[#0f4a9b] font-bold underline hover:text-[#0a254a]">A-Level tutors in Al Ain</a>.
          </p>
        </div>

        {/* Auto-scrolling Row of Community Cards (Infinite Marquee) */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          <style>{`
            @keyframes ustaad-communities-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ustaad-communities-marquee {
              display: flex;
              width: max-content;
              gap: 1.25rem;
              animation: ustaad-communities-marquee 45s linear infinite;
            }
            .ustaad-communities-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="ustaad-communities-marquee py-3">
            {[...DUBAI_AREAS, ...DUBAI_AREAS].map((area, idx) => (
              <div
                key={idx}
                className="group relative w-[290px] sm:w-[330px] h-[190px] sm:h-[210px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 shrink-0 border border-slate-200/80 cursor-default"
              >
                {/* Background photo */}
                {area.image ? (
                  <img
                    src={area.image}
                    alt={area.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] to-[#13233c]" />
                )}

                {/* Dark gradient overlay for pristine contrast and legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f22]/95 via-[#060f22]/55 to-black/25" />

                {/* Card Content */}
                <div className="relative z-10 h-full p-5 flex flex-col justify-between text-left">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-xs">
                      <MapPin className="w-4 h-4 text-[#f0c96a]" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10.5px] font-semibold text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f0c96a] animate-pulse" />
                      Dubai
                    </span>
                  </div>

                  <div>
                    <h3 className="text-white font-extrabold text-[17px] sm:text-[18px] leading-snug mb-1 drop-shadow-sm group-hover:text-[#f0c96a] transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-blue-100/80 text-xs sm:text-[12.5px] leading-snug drop-shadow-sm">
                      {area.sub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 08: PARENT REVIEWS (From Dubai Families) ── */}
      <section className="py-12 lg:py-16 relative overflow-hidden bg-[#f4f7fc] border-y border-slate-100">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#0f4a9b]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#C7A24A]/10 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-[#0a1f3d] mb-3 shadow-xs">
              <span className="text-[#C7A24A] tracking-tighter">★★★★★</span>
              <span>5.0 ★ · Dubai Parent Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d]">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Dubai Families</span>
            </h2>
          </div>
          <ReviewsScroller />
        </div>
      </section>

      {/* ── SECTION 09: DUBAI A-LEVEL FAQS ── */}
      <section id="faqs" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Header Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-24"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/12 text-[#0f4a9b] text-xs font-bold mb-4">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0f4a9b]/10 text-[10px]">?</span>
                COMMON QUESTIONS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight mb-3">
                Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Often Ask</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Honest answers to the A-Level questions Dubai parents ask before their first session.
              </p>
            </motion.div>

            {/* Right Accordion Column */}
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {DUBAI_FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{
                          width: 40,
                          height: 40,
                          minWidth: 40,
                          minHeight: 40,
                          background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                          color: isOpen ? '#fff' : '#0f4a9b',
                          transition: 'background 300ms ease, color 300ms ease',
                          cursor: 'pointer',
                          border: 'none',
                          boxShadow: 'inset 0 0 0 2px #fff',
                        }}
                      >
                        ?
                      </button>

                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border bg-white shadow-xs"
                        style={{
                          minHeight: '52px',
                          padding: '10px 16px',
                          cursor: 'pointer',
                          borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)',
                        }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">
                          {faq.q}
                        </span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 32,
                            height: 32,
                            minWidth: 32,
                            minHeight: 32,
                            borderRadius: '50%',
                            background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                            color: isOpen ? '#fff' : '#0f4a9b',
                            transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </span>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="ml-[52px] overflow-hidden"
                        >
                          <div
                            className="flex items-start gap-3 rounded-2xl border p-4.5 bg-[#f8fafc]"
                            style={{
                              borderColor: 'rgba(15,74,155,0.15)',
                              boxShadow: '0 4px 16px rgba(15,74,155,0.06)',
                            }}
                          >
                            <p className="flex-1 text-gray-600 text-[13.5px] leading-relaxed">
                              {faq.a}
                            </p>
                            <span
                              className="flex-shrink-0 flex items-center justify-center rounded-full"
                              style={{
                                width: 32,
                                height: 32,
                                minWidth: 32,
                                minHeight: 32,
                                background: '#0f4a9b',
                                color: '#fff',
                              }}
                            >
                              <MessageCircle className="h-4 w-4" />
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CTA ── */}
      <FinalCTA
        title="Book an A-Level Tutor in Dubai"
        subtitle="1-to-1 online lessons matched to your child's exact school, exam board, and target university grade."
        button1Text="Book First Session"
        button1Href={BOOKING}
        subtext1="No commitment. Cancel anytime."
      />
    </Layout>
  );
}
