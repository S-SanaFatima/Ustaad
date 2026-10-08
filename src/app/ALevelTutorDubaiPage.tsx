import React, { useState, useEffect, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
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
    coreTopics: ['Calculus & Differential Equations', 'Proof & Algebraic Structure', 'Vector 3D Geometry', 'Mechanics Resolving & Friction'],
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
    coreTopics: ['Gravitational & Electric Fields', 'SHM & Oscillations', 'Wave Particle Duality', 'Practical Data Analysis & Uncertainties'],
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
    coreTopics: ['Organic Synthesis & Reaction Mechanisms', 'Thermodynamics & Born-Haber Cycles', 'Transition Metal Ligand Chemistry', 'Equilibrium & pH Buffers'],
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
    coreTopics: ['Photosynthesis & Cellular Respiration', 'Gene Expression & Epigenetics', 'Neurobiology & Synaptic Transmission', 'Synoptic 25-Mark Essays'],
    challenges: 'Detailed biological knowledge that fails to score because answers use conversational descriptions instead of mark-scheme keywords.',
    strategy: 'Targeted vocabulary mapping, comparative table structuring, and step-by-step training for the 25-mark synoptic essay in AQA.',
    href: '/biology'
  },
  {
    id: 'economics',
    name: 'Economics & Business',
    badge: 'Micro · Macro · Evaluation',
    icon: <LineChart className="w-6 h-6 text-[#0f4a9b]" />,
    boards: 'Edexcel 9EC0 · Cambridge 9708 · AQA 7136',
    coreTopics: ['Market Failure & Government Intervention', 'Macroeconomic Policy Mixes', 'Monetary & Fiscal Transmission', '25-Mark Essay Evaluation Chains'],
    challenges: 'Essay answers that provide factual descriptions rather than two-sided economic evaluation chains with real-world context.',
    strategy: 'Teaching KAA (Knowledge, Application, Analysis) alongside rigorous EV (Evaluation) structures with verified contemporary UAE & global data.',
    href: '/economics'
  },
  {
    id: 'english',
    name: 'English Literature & Language',
    badge: 'Comparative · Drama · Unseen',
    icon: <BookOpen className="w-6 h-6 text-[#0f4a9b]" />,
    boards: 'Edexcel 9ET0 · AQA 7712/7717 · Cambridge 9093/9695',
    coreTopics: ['Paired-Text Comparative Structure', 'Critical Literary Perspectives', 'Unseen Poetry & Prose Commentary', 'NEA Coursework Structuring'],
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
    schools: ['Dubai College', 'Repton School Dubai', 'GEMS Wellington International', 'Sunmarke School']
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
    schools: ["JESS Arabian Ranches", "Kings' School Al Barsha", "Safa Community School", "Brighton College Dubai"]
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
    schools: ['Hartland International', 'Horizon International School', 'Nord Anglia Dubai', 'Durham School Dubai']
  }
};

const PROTOCOL_STEPS = [
  {
    num: '01',
    title: 'Diagnostic & Paper Audit',
    tagline: 'Pinpoint the exact marks lost',
    desc: 'We review recent school test scripts and mock papers to identify whether lost marks stem from core topic gaps, weak method notation, or time-management collapse.',
    icon: <Target className="w-5 h-5 text-[#0f4a9b]" strokeWidth={2} />,
    deliverable: 'Diagnostic mark-loss breakdown report within 24 hours'
  },
  {
    num: '02',
    title: 'First-Principles Rebuild',
    tagline: 'Understanding before memorisation',
    desc: 'Instead of passive worksheet drills, tutors rebuild foundational logic from the ground up so students understand the underlying mechanism and can tackle unseen question styles.',
    icon: <Brain className="w-5 h-5 text-[#0f4a9b]" strokeWidth={2} />,
    deliverable: 'Customized topic recovery plan matching your school scheme'
  },
  {
    num: '03',
    title: 'Mark-Scheme Calibration',
    tagline: 'Think like an examiner',
    desc: 'Students learn the exact task verbs, keywords, and structural conventions rewarded by official College Board and UK exam board examiners to eliminate careless dropped marks.',
    icon: <PenTool className="w-5 h-5 text-[#0f4a9b]" strokeWidth={2} />,
    deliverable: 'Topic-by-topic examiner rubric mastery cards'
  },
  {
    num: '04',
    title: 'Timed Past-Paper Stamina',
    tagline: 'Exam-room speed & composure',
    desc: 'Weekly full-length and sectional timed paper practice under realistic exam conditions. Lessons analyze the exact reasons for every dropped mark until A* accuracy becomes second nature.',
    icon: <Clock className="w-5 h-5 text-[#0f4a9b]" strokeWidth={2} />,
    deliverable: 'Grade boundary trajectory tracking updated weekly'
  }
];

const DUBAI_AREAS = [
  { name: 'Downtown Dubai', sub: 'DIFC · Business Bay · City Walk' },
  { name: 'Dubai Hills Estate', sub: 'Sidra · Maple · Parkway' },
  { name: 'Arabian Ranches', sub: 'Ranches 1, 2 & 3 · Polo Homes' },
  { name: 'Palm Jumeirah', sub: 'Fronds · Crescent · Shoreline' },
  { name: 'Dubai Marina & JBR', sub: 'Marina Walk · Bluewaters' },
  { name: 'Jumeirah', sub: 'Jumeirah 1, 2, 3 · Umm Suqeim' },
  { name: 'Emirates Hills', sub: 'The Lakes · Meadows · Springs' },
  { name: 'Jumeirah Golf Estates', sub: 'Whispering Pines · Orange Lake' },
  { name: 'Al Barsha & Barsha Heights', sub: 'Near Kings & American Academy' },
  { name: 'Meydan & MBR City', sub: 'District One · Sobha Hartland' },
  { name: 'Mirdif & Uptown', sub: 'Near international schools' },
  { name: 'JLT & Discovery Gardens', sub: 'Cluster community support' }
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
    initials: 'SM',
    name: 'Sarah M., Arabian Ranches',
    school: 'Parent of Year 13 student at JESS Arabian Ranches',
    subject: 'Cambridge A-Level Chemistry (9701) & Biology (9700)',
    text: "The transition from GCSE to A-Level sciences was overwhelming for our daughter. Ustaad matched her with a board-specific tutor who broke down organic reaction mechanisms and taught her how to score full marks on practical Paper 5. She went from a C in January to an A in the summer."
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
    q: "Which A-Level exam boards do your Dubai tutors support?",
    a: "We support all major exam boards taught across British curriculum schools in Dubai: Pearson Edexcel (UK and International A-Levels), Cambridge International Assessment (CIE 9700 series), AQA, and OxfordAQA. Tutors are matched to the exact syllabus code your child's school follows."
  },
  {
    q: "How do online A-Level sessions work, and how do they compare to in-person tuition?",
    a: "Our online sessions are conducted 1-to-1 via high-definition video with an interactive shared digital whiteboard. The tutor shares real past exam papers, annotates diagrams, and walks through mark schemes live. Sessions are recorded so students can rewatch tricky derivations before school tests."
  },
  {
    q: "When is the best time for a Dubai student to start A-Level tutoring?",
    a: "September of Year 12 is ideal, as establishing strong analytical habits early prevents the common Grade 12 slump. However, we also run intensive mock preparation blocks starting in November/January and 6-week rapid exam drills leading into May/June exam papers."
  },
  {
    q: "How do you help students with Year 12 predicted grades for UCAS and US admissions?",
    a: "Predicted grades depend heavily on end-of-year assessments and Autumn Year 13 mock exams. We reverse-engineer the school's marking criteria, target the specific discriminator topics, and drill timed past papers so the student produces the evidence required for top A* and A predictions."
  },
  {
    q: "Can you accommodate Dubai school schedules, sports commitments, and travel?",
    a: "Yes. All sessions are scheduled flexibly after school hours (between 4:00 PM and 9:30 PM UAE time) and on weekends. Because lessons are online, students can maintain consistent weekly progress even when traveling for family holidays or school tournaments."
  },
  {
    q: "What is included in the Free 30-Minute Trial Session?",
    a: "In the free 30-minute diagnostic trial, the matched tutor works through a live past-paper problem with your child, evaluates their conceptual approach, identifies mark-scheme gaps, and outlines a targeted recovery plan. There is zero obligation to continue."
  }
];

const DUBAI_SCHOOL_DOSSIERS = [
  {
    id: 'dc',
    name: 'Dubai College',
    location: 'Al Sufouh',
    badge: 'Linear GCE & Cambridge',
    curriculumInsight: 'Fast-paced academic curriculum that finishes syllabus content by February of Year 13 to enable 10+ weeks of rigorous past-paper mock blocks.',
    boards: {
      maths: 'Edexcel 9MA0 / 9FM0',
      physics: 'Cambridge 9702',
      chemistry: 'AQA 7405',
      biology: 'Cambridge 9700',
      economics: 'Edexcel 9EC0'
    },
    targetBoundary: 'A* typically requires 78–82% raw',
    keyFocus: 'Advanced multi-step calculus & 25-mark essay synoptic chains'
  },
  {
    id: 'jess',
    name: 'JESS Arabian Ranches',
    location: 'Arabian Ranches',
    badge: 'Pearson Edexcel Hub',
    curriculumInsight: 'Heavy emphasis on modeling applications, statistical large data sets, and continuous internal assessment checkpoints throughout Year 12.',
    boards: {
      maths: 'Edexcel 9MA0',
      physics: 'Edexcel 9PH0',
      chemistry: 'Edexcel 9CH0',
      biology: 'Edexcel 9BI0',
      economics: 'Edexcel 9EC0'
    },
    targetBoundary: 'A* typically requires 74–79% raw',
    keyFocus: 'Internal assessment data analysis & synoptic Paper 3 mastery'
  },
  {
    id: 'desc',
    name: 'Dubai English Speaking College (DESC)',
    location: 'Academic City',
    badge: 'AQA & Edexcel Specialism',
    curriculumInsight: 'Strict termly diagnostic mock exams used for UCAS predicted grades, requiring early Year 12 active recall and exam stamina.',
    boards: {
      maths: 'Edexcel 9MA0',
      physics: 'AQA 7408',
      chemistry: 'AQA 7405',
      biology: 'AQA 7402',
      economics: 'AQA 7136'
    },
    targetBoundary: 'A* typically requires 76–80% raw',
    keyFocus: 'AQA multiple-choice precision & synoptic 25-mark essays'
  },
  {
    id: 'nlcs',
    name: 'NLCS Dubai',
    location: 'Nad Al Sheba',
    badge: 'Cambridge CIE & IB DP',
    curriculumInsight: 'Rigorous staged AS/A2 assessment structure with emphasis on deep theoretical proofs and Paper 3 / Paper 5 laboratory design questions.',
    boards: {
      maths: 'Cambridge 9709',
      physics: 'Cambridge 9702',
      chemistry: 'Cambridge 9701',
      biology: 'Cambridge 9700',
      economics: 'Cambridge 9708'
    },
    targetBoundary: 'A* typically requires 82–88% raw',
    keyFocus: 'Paper 3 experimental uncertainties & algebraic derivation'
  },
  {
    id: 'repton',
    name: 'Repton School Dubai',
    location: 'Nad Al Sheba',
    badge: 'Dual British Pathway',
    curriculumInsight: 'Differentiated assessment models across pure sciences and humanities requiring tailored exam techniques for modular vs linear papers.',
    boards: {
      maths: 'Edexcel 9MA0',
      physics: 'Cambridge 9702',
      chemistry: 'Edexcel 9CH0',
      biology: 'Cambridge 9700',
      economics: 'Edexcel 9EC0'
    },
    targetBoundary: 'A* typically requires 75–81% raw',
    keyFocus: 'Modular unit catch-up & exam timing pace'
  }
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

export default function ALevelTutorDubaiPage() {
  const [selectedBoard, setSelectedBoard] = useState<'cambridge' | 'edexcel' | 'aqa'>('cambridge');
  const [selectedSubject, setSelectedSubject] = useState<string>('maths');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [calcCurrentGrade, setCalcCurrentGrade] = useState<'C' | 'B' | 'A'>('B');
  const [calcTargetGrade, setCalcTargetGrade] = useState<'A' | 'A*'>('A*');

  // 3D Lab States
  const [active3DTab, setActive3DTab] = useState<'dissector' | 'ucas' | 'whiteboard'>('dissector');
  const [dissectorSubj, setDissectorSubj] = useState<string>('maths');
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [p1Score, setP1Score] = useState<number>(84);
  const [p2Score, setP2Score] = useState<number>(78);
  const [p3Score, setP3Score] = useState<number>(86);

  // 3D School Dossier & Readiness States
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('dc');
  const [auditChecks, setAuditChecks] = useState<Record<string, boolean>>({
    c1: true,
    c2: true,
    c3: false,
    c4: false
  });
  const toggleAudit = (key: string) => setAuditChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  const activeSchool = DUBAI_SCHOOL_DOSSIERS.find((s) => s.id === selectedSchoolId) || DUBAI_SCHOOL_DOSSIERS[0];
  const auditScore = Object.values(auditChecks).filter(Boolean).length * 25;

  // 3D Tilt calculations
  const [mousePos, setMousePos] = useState<{ x: number; y: number; rotateX: number; rotateY: number }>({
    x: 50,
    y: 50,
    rotateX: 0,
    rotateY: 0
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const rotateY = ((x - 50) / 50) * 8; // -8 to +8 deg
    const rotateX = -((y - 50) / 50) * 8; // -8 to +8 deg
    setMousePos({ x, y, rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
  };

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
        title="A-Level Tutor Dubai | Top Private A-Level Tutoring in Dubai | Ustaad"
        description="Expert 1-to-1 online A-Level tutors in Dubai for Maths, Further Maths, Physics, Chemistry, Biology, Economics & English. AQA, Edexcel & Cambridge specialists. Free trial."
        canonical="/a-level-tutor-dubai"
        ogImage="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp"
        preloadHeroImage="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp"
        placename="Dubai, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Dubai',
            url: '/a-level-tutor-dubai',
            name: 'Ustaad — A-Level Tutor Dubai',
            description: 'Expert 1-to-1 online A-Level tutors in Dubai for Maths, Physics, Chemistry, Biology, Economics and English. Cambridge, Edexcel & AQA specialists.'
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
          faqSchema(DUBAI_FAQS),
          reviewSchema('Ustaad — A-Level Tutoring Dubai', [
            {
              author: 'Tariq A.',
              reviewBody: 'My son was hovering at a B in his Year 12 mock exams at Dubai College. Working with Ustaad rebuilt his calculus derivations and mechanics setup. He achieved A* in Maths and Further Maths.',
              ratingValue: 5
            }
          ])
        ]}
      />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center bg-[#0a1628] text-white overflow-hidden py-16 lg:py-24">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-br from-[#0f4a9b]/35 to-[#C7A24A]/15 rounded-full blur-[140px] pointer-events-none" />
        <GridBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* City Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 shadow-inner">
                <MapPin className="w-3.5 h-3.5 text-[#C7A24A]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-100">
                  Private 1-to-1 A-Level Tuition · Dubai
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-white leading-[1.12] tracking-tight mb-5">
                Expert A-Level Tutors <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#C7A24A]">
                  in Dubai
                </span>
              </h1>

              {/* Gold Divider */}
              <div className="w-20 h-1 bg-gradient-to-r from-[#C7A24A] via-[#E2C376] to-transparent rounded-full mb-6" />

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 max-w-2xl">
                Board-specialist private tutoring for Cambridge, Edexcel, and AQA. We bridge the gap between classroom teaching and examiner mark schemes to turn predicted grades into top-tier university offers.
              </p>

              {/* Key Trust Signals */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <div className="w-7 h-7 rounded-lg bg-[#0f4a9b]/30 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-[#60a5fa]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">Top 5% Vetted Tutors</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <div className="w-7 h-7 rounded-lg bg-[#0f4a9b]/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#60a5fa]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">Board-Specific Mastery</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <div className="w-7 h-7 rounded-lg bg-[#0f4a9b]/30 flex items-center justify-center shrink-0">
                    <Trophy className="w-4 h-4 text-[#C7A24A]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">Proven A* Track Record</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-4">
                <GoldButton
                  href={BOOKING}
                  className="px-8 py-4 text-sm font-extrabold shadow-[0_4px_25px_rgba(199,162,74,0.4)] text-center justify-center"
                >
                  Book a Free Trial Session
                </GoldButton>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all duration-200"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>

              <p className="text-xs text-slate-400 font-medium">
                30-Minute Diagnostic Lesson · Free of Charge · No Commitment
              </p>
            </motion.div>

            {/* Right Column: Interactive Quick Simulator Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative bg-gradient-to-b from-[#13233c] to-[#0d1a2d] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#C7A24A]/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#C7A24A] block mb-0.5">
                      Interactive Target Planner
                    </span>
                    <h3 className="text-lg font-extrabold text-white">
                      Dubai A-Level Grade Roadmap
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#0f4a9b]/30 border border-[#0f4a9b]/50 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#60a5fa]" />
                  </div>
                </div>

                {/* Grade Selectors */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">Current Mock Grade:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['C', 'B', 'A'] as const).map((grade) => (
                        <button
                          key={grade}
                          type="button"
                          onClick={() => setCalcCurrentGrade(grade)}
                          className={`py-2 px-3 rounded-xl text-xs font-extrabold transition-all ${
                            calcCurrentGrade === grade
                              ? 'bg-[#0f4a9b] text-white border border-[#60a5fa] shadow-[0_0_12px_rgba(15,74,155,0.6)]'
                              : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                          }`}
                        >
                          Grade {grade}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">Target Grade for UCAS / Offers:</label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['A', 'A*'] as const).map((grade) => (
                        <button
                          key={grade}
                          type="button"
                          onClick={() => setCalcTargetGrade(grade)}
                          className={`py-2 px-3 rounded-xl text-xs font-extrabold transition-all ${
                            calcTargetGrade === grade
                              ? 'bg-gradient-to-r from-[#C7A24A] to-[#A8892A] text-white border border-[#E2C376] shadow-[0_0_12px_rgba(199,162,74,0.5)]'
                              : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                          }`}
                        >
                          Target Grade {grade}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dynamic Recommendation Output */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2.5 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Recommended Cadence:</span>
                    <span className="text-white font-bold">
                      {calcCurrentGrade === 'C' ? '2 sessions / week (90 mins)' : '1–2 sessions / week (60–90 mins)'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Past Papers to Summer:</span>
                    <span className="text-[#C7A24A] font-bold">
                      {calcTargetGrade === 'A*' ? '18+ full timed papers + mark schemes' : '12+ full timed papers'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Primary Focus Area:</span>
                    <span className="text-blue-200 font-bold">
                      {calcCurrentGrade === 'C' ? 'Foundations & Formula Derivations' : 'Mark Scheme Keywords & Pacing'}
                    </span>
                  </div>
                </div>

                <a
                  href={BOOKING}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8] hover:from-[#1e5ba8] hover:to-[#0f4a9b] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all duration-200"
                >
                  <span>Build This Plan With a Specialist</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
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
        <SchoolsMarquee customLogos={DUBAI_SCHOOL_LOGOS} />
      </section>

      {/* ── SECTION 02: THE 6 A-LEVEL PRESSURE POINTS IN DUBAI ── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <AlertTriangle className="w-3.5 h-3.5 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">
                Diagnostic Insights
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Why A-Level Marks Slip in Dubai Schools" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Achieving an 8 or 9 at GCSE is no guarantee of an A* at A-Level. Here are the six exact fault lines where students lose marks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                num: '01',
                title: 'The GCSE-to-A-Level Chasm',
                desc: 'GCSE rewarded recall and short method steps. A-Level questions require sustained, unprompted derivation chains where a single sign slip costs 5+ marks.'
              },
              {
                num: '02',
                title: 'Board-Specific Command Words',
                desc: 'Cambridge 9709 Maths penalises lack of exact proofs, while Edexcel 9MA0 prioritises modeling interpretations. Generic revision fails on specific board rubrics.'
              },
              {
                num: '03',
                title: 'Year 12 Predicted Grade Stakes',
                desc: 'UCAS university applications are submitted in early Year 13. A single slip in Year 12 summer mocks permanently caps predicted grades before final exams are sat.'
              },
              {
                num: '04',
                title: 'Practical Papers 3 & 5 Weighting',
                desc: 'Science papers heavily assess practical design, error analysis, and percentage uncertainties. Students without laboratory confidence lose easy grade boundary margins.'
              },
              {
                num: '05',
                title: 'Synoptic Multi-Topic Questions',
                desc: 'Final A2 papers combine disparate topics across two years into single 12-mark questions. Students who revise chapters in isolation freeze under synoptic pressure.'
              },
              {
                num: '06',
                title: 'Compressed Dubai Calendar',
                desc: 'Term breaks, spring travel, and Ramadan condense the active study window. Without structured weekly pacing, revision is left dangerously late in April.'
              }
            ].map((pt, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white border border-gray-200/90 rounded-2xl p-7 shadow-xs hover:shadow-md hover:border-[#0f4a9b]/30 transition-all overflow-hidden flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#0f4a9b]/25 tabular-nums">
                    {pt.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/5 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#0f4a9b]" />
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2 leading-snug">
                  {pt.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pt.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 03: INTERACTIVE EXAM BOARD ALIGNMENT ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <Layers className="w-3.5 h-3.5 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">
                Specification Mastery
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Taught to Your School's Exact Exam Board" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              We never teach generic syllabus content. Your tutor is matched to the specific board, specification code, and assessment series followed by your Dubai school.
            </p>
          </div>

          {/* Board Selector Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200">
              {(['cambridge', 'edexcel', 'aqa'] as const).map((bKey) => (
                <button
                  key={bKey}
                  type="button"
                  onClick={() => setSelectedBoard(bKey)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                    selectedBoard === bKey
                      ? 'bg-white text-[#0f4a9b] shadow-sm'
                      : 'text-gray-600 hover:text-[#0a1f3d]'
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#f8fafc] to-white border border-[#0f4a9b]/15 rounded-3xl p-8 sm:p-10 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-200/80">
              <div>
                <span className="text-xs font-bold text-[#0f4a9b] uppercase tracking-wider block mb-1">
                  Active Specification
                </span>
                <h3 className="text-2xl font-extrabold text-[#0a1f3d]">
                  {BOARD_DATA[selectedBoard].name}
                </h3>
              </div>
              <div className="inline-flex items-center self-start px-3.5 py-1.5 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] text-xs font-bold">
                {BOARD_DATA[selectedBoard].code}
              </div>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              {BOARD_DATA[selectedBoard].description}
            </p>

            <div className="space-y-3 mb-8">
              {BOARD_DATA[selectedBoard].keyPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-gray-500 block mb-1">Commonly Sat At:</span>
                <span className="text-xs font-bold text-[#0a1f3d]">
                  {BOARD_DATA[selectedBoard].schools.join(' · ')}
                </span>
              </div>
              <GoldButton href={BOOKING} className="text-xs px-6 py-3 shrink-0">
                Match My Child's Board
              </GoldButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 04: CORE A-LEVEL SUBJECT TRACKS ── */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <BookOpen className="w-3.5 h-3.5 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">
                Subject Excellence
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Core A-Level Subjects We Tutor in Dubai" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Explore subject-specific diagnostic focus, core curriculum units, and proven exam turnaround strategies.
            </p>
          </div>

          {/* Subject Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-10">
            {A_LEVEL_SUBJECTS.map((subj) => (
              <button
                key={subj.id}
                type="button"
                onClick={() => setSelectedSubject(subj.id)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
                  selectedSubject === subj.id
                    ? 'bg-[#0f4a9b] text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#0f4a9b]/30'
                }`}
              >
                {subj.name.split(' &')[0]}
              </button>
            ))}
          </div>

          {/* Active Subject Detail Card */}
          <motion.div
            key={activeSubject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0f4a9b]/10 flex items-center justify-center">
                    {activeSubject.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#0a1f3d]">
                      {activeSubject.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#0f4a9b]">
                      {activeSubject.boards}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Key Topics Covered
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeSubject.coreTopics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-1.5">
                    Where Dubai Students Drop Marks
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activeSubject.challenges}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#f8fafc] to-[#0f4a9b]/5 border border-[#0f4a9b]/10 rounded-2xl p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] text-[11px] font-extrabold mb-3">
                    <Sparkle className="w-3 h-3" /> Ustaad Turnaround Method
                  </div>
                  <h4 className="text-base font-extrabold text-[#0a1f3d] mb-2">
                    Mark-Scheme Focus
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {activeSubject.strategy}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-200/60">
                  <a
                    href={activeSubject.href}
                    className="w-full py-3 px-4 rounded-xl bg-white border border-[#0f4a9b]/20 hover:border-[#0f4a9b] text-[#0f4a9b] text-xs font-bold flex items-center justify-between transition-colors"
                  >
                    <span>View Full {activeSubject.name} Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <GoldButton href={BOOKING} className="w-full text-xs py-3 justify-center">
                    Book a Free Trial in This Subject
                  </GoldButton>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3D INTERACTIVE A-LEVEL EXAM & MARK-SCHEME LAB ── */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#0a1628] via-[#0d1e38] to-[#0a1628] text-white relative overflow-hidden [perspective:1400px]">
        {/* Ambient 3D lighting */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0f4a9b]/30 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#C7A24A]/20 rounded-full blur-[130px] pointer-events-none" />
        <GridBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A24A]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-200">
                Interactive 3D Diagnostic Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              The A-Level Mark-Scheme <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#C7A24A]">
                3D Interactive Laboratory
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Explore step-by-step past paper dissection, test real grade boundary thresholds, and see how precision 1-on-1 tutoring secures the highest marks.
            </p>

            {/* 3D Mode Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: 'dissector', label: '3D Question Dissector', icon: <Layers className="w-4 h-4" /> },
                { id: 'ucas', label: '3D Grade & UCAS Simulator', icon: <TrendingUp className="w-4 h-4" /> },
                { id: 'whiteboard', label: '3D Live Lesson Simulator', icon: <Laptop className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive3DTab(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                    active3DTab === tab.id
                      ? 'bg-gradient-to-r from-[#C7A24A] to-[#A8892A] text-[#0a1628] shadow-[0_0_20px_rgba(199,162,74,0.4)] scale-105'
                      : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── TAB 1: 3D QUESTION DISSECTOR ── */}
          {active3DTab === 'dissector' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              {/* Subject Selector */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {Object.keys(DISSECTOR_PROBLEMS).map((key) => {
                  const prob = DISSECTOR_PROBLEMS[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setDissectorSubj(key);
                        setActiveLayer(0);
                      }}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        dissectorSubj === key
                          ? 'bg-[#0f4a9b] text-white border border-blue-400 shadow-md'
                          : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
                      }`}
                    >
                      {prob.subject}
                    </button>
                  );
                })}
              </div>

              {/* 3D Interactive Tilt Card Container */}
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.15s ease-out'
                }}
                className="relative bg-gradient-to-br from-[#0e213d]/90 via-[#0b1b33]/90 to-[#071324]/95 border border-blue-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl"
              >
                {/* Dynamic Specular Lighting Sheen */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none opacity-40 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.2), transparent 50%)`
                  }}
                />

                {/* Top Question Info Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10 relative z-10">
                  <div style={{ transform: 'translateZ(25px)' }}>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 text-[10px] font-mono uppercase tracking-wider mb-1.5 border border-blue-400/30">
                      <span>{DISSECTOR_PROBLEMS[dissectorSubj].board}</span>
                      <span>·</span>
                      <span>{DISSECTOR_PROBLEMS[dissectorSubj].paper}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {DISSECTOR_PROBLEMS[dissectorSubj].questionTitle}
                    </h3>
                  </div>

                  <div style={{ transform: 'translateZ(30px)' }} className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="px-3 py-1.5 rounded-xl bg-[#C7A24A]/20 text-[#E2C376] text-xs font-black border border-[#C7A24A]/40 shadow-sm">
                      {DISSECTOR_PROBLEMS[dissectorSubj].marks} Marks Available
                    </span>
                  </div>
                </div>

                {/* Layer Navigator Tabs */}
                <div style={{ transform: 'translateZ(35px)' }} className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {[
                    { idx: 0, title: '1. Exam Stem', icon: '📄' },
                    { idx: 1, title: '2. Mark-Loss Trap', icon: '⚠️' },
                    { idx: 2, title: '3. Ustaad Method', icon: '✍️' },
                    { idx: 3, title: '4. Examiner Report', icon: '🎓' }
                  ].map((l) => (
                    <button
                      key={l.idx}
                      type="button"
                      onClick={() => setActiveLayer(l.idx)}
                      className={`p-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                        activeLayer === l.idx
                          ? 'bg-white text-[#0a1628] shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-[1.02]'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      <span>{l.icon}</span>
                      <span className="truncate">{l.title}</span>
                    </button>
                  ))}
                </div>

                {/* Layer Viewport */}
                <div style={{ transform: 'translateZ(40px)' }} className="min-h-[220px] bg-[#06101e]/80 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
                  {activeLayer === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-2">Original Exam Paper Prompt</span>
                      <p className="text-base sm:text-lg font-mono text-slate-100 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5">
                        {DISSECTOR_PROBLEMS[dissectorSubj].questionStem}
                      </p>
                      <span className="text-xs text-slate-400 mt-3 block">
                        💡 Tip: Click on Layer 2 to see the exact derivation trap that costs students method marks.
                      </span>
                    </motion.div>
                  )}

                  {activeLayer === 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <div className="flex items-center gap-2 text-rose-400 font-extrabold text-xs uppercase tracking-wider mb-2">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Common Dubai Student Mark-Loss Trap ({DISSECTOR_PROBLEMS[dissectorSubj].trapStats})</span>
                      </div>
                      <div className="bg-rose-950/40 border border-rose-500/30 rounded-xl p-5 text-rose-100 text-sm leading-relaxed">
                        {DISSECTOR_PROBLEMS[dissectorSubj].studentTrap}
                      </div>
                    </motion.div>
                  )}

                  {activeLayer === 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">Ustaad Step-by-Step Mark Scheme Breakdown</span>
                      <div className="space-y-2 text-xs sm:text-sm font-mono text-emerald-200">
                        <div className="bg-emerald-950/40 border border-emerald-500/20 p-3 rounded-lg flex items-start gap-2">
                          <span className="text-emerald-400 font-bold shrink-0">[M1]</span>
                          <span>{DISSECTOR_PROBLEMS[dissectorSubj].ustaadSolution.step1}</span>
                        </div>
                        <div className="bg-emerald-950/40 border border-emerald-500/20 p-3 rounded-lg flex items-start gap-2">
                          <span className="text-emerald-400 font-bold shrink-0">[M2]</span>
                          <span>{DISSECTOR_PROBLEMS[dissectorSubj].ustaadSolution.step2}</span>
                        </div>
                        <div className="bg-emerald-950/40 border border-emerald-500/20 p-3 rounded-lg flex items-start gap-2">
                          <span className="text-emerald-400 font-bold shrink-0">[A1]</span>
                          <span>{DISSECTOR_PROBLEMS[dissectorSubj].ustaadSolution.step3}</span>
                        </div>
                        <div className="bg-emerald-900/60 border border-emerald-400/40 p-3 rounded-lg flex items-start gap-2 text-white font-bold">
                          <span className="text-[#C7A24A] font-bold shrink-0">[Final]</span>
                          <span>{DISSECTOR_PROBLEMS[dissectorSubj].ustaadSolution.final}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeLayer === 3 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <span className="text-[10px] font-mono text-[#E2C376] uppercase tracking-widest block mb-2">Chief Examiner Official Feedback</span>
                      <blockquote className="italic text-base text-slate-200 bg-white/5 border-l-4 border-[#C7A24A] p-5 rounded-r-xl">
                        {DISSECTOR_PROBLEMS[dissectorSubj].examinerQuote}
                      </blockquote>
                      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                        <span>Verified across recent Dubai Exam Series</span>
                        <span className="text-emerald-400 font-bold">100% Mark Scheme Compliant</span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Card Action */}
                <div style={{ transform: 'translateZ(30px)' }} className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <span className="text-xs text-slate-300">
                    Want your child to master full {DISSECTOR_PROBLEMS[dissectorSubj].subject} papers with this precision?
                  </span>
                  <GoldButton href={BOOKING} className="text-xs px-6 py-2.5 shrink-0">
                    Book a Free Diagnostic Session
                  </GoldButton>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── TAB 2: 3D GRADE & UCAS SIMULATOR ── */}
          {active3DTab === 'ucas' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.15s ease-out'
                }}
                className="relative bg-gradient-to-br from-[#0c1f3a] via-[#09172c] to-[#06101e] border border-[#0f4a9b]/40 rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Sliders */}
                  <div style={{ transform: 'translateZ(30px)' }} className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 block mb-1">
                        Component Raw-Mark Modeler
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        Simulate Component Marks
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm mt-1">
                        Adjust your raw scores across Papers 1, 2, and 3 to see how close you are to the next grade threshold.
                      </p>
                    </div>

                    <div className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                      {/* Paper 1 Slider */}
                      <div>
                        <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                          <span className="text-slate-200">Paper 1 (Core / Pure):</span>
                          <span className="text-[#60a5fa] font-mono text-sm">{p1Score} / 100</span>
                        </div>
                        <input
                          type="range"
                          min="40"
                          max="100"
                          value={p1Score}
                          onChange={(e) => setP1Score(Number(e.target.value))}
                          className="w-full accent-[#C7A24A] cursor-pointer h-2 bg-slate-700 rounded-lg"
                        />
                      </div>

                      {/* Paper 2 Slider */}
                      <div>
                        <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                          <span className="text-slate-200">Paper 2 (Applications / Synoptic):</span>
                          <span className="text-[#60a5fa] font-mono text-sm">{p2Score} / 100</span>
                        </div>
                        <input
                          type="range"
                          min="40"
                          max="100"
                          value={p2Score}
                          onChange={(e) => setP2Score(Number(e.target.value))}
                          className="w-full accent-[#C7A24A] cursor-pointer h-2 bg-slate-700 rounded-lg"
                        />
                      </div>

                      {/* Paper 3 Slider */}
                      <div>
                        <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                          <span className="text-slate-200">Paper 3 (Advanced / Options):</span>
                          <span className="text-[#60a5fa] font-mono text-sm">{p3Score} / 100</span>
                        </div>
                        <input
                          type="range"
                          min="40"
                          max="100"
                          value={p3Score}
                          onChange={(e) => setP3Score(Number(e.target.value))}
                          className="w-full accent-[#C7A24A] cursor-pointer h-2 bg-slate-700 rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="text-xs text-slate-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#C7A24A]" />
                      <span>Weighted Aggregate Score: <strong className="text-white font-mono text-sm">{totalRaw}%</strong></span>
                    </div>
                  </div>

                  {/* Right Column: 3D Holographic Grade Shield */}
                  <div style={{ transform: 'translateZ(45px)' }} className="lg:col-span-5 flex flex-col items-center text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.03, 1],
                        rotateY: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className={`relative w-44 h-44 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-br ${gradeColor} p-1 border-2 ${badgeBorder} flex flex-col items-center justify-center shadow-2xl mb-4`}
                    >
                      <div className="w-full h-full bg-[#0a1628]/85 rounded-[22px] flex flex-col items-center justify-center p-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                          Projected Grade
                        </span>
                        <span className="text-5xl sm:text-6xl font-black text-white my-1 drop-shadow-md">
                          {predictedLetter}
                        </span>
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-bold text-blue-200">
                          <Trophy className="w-3 h-3 text-[#C7A24A]" />
                          <span>{ucasPoints} UCAS Points</span>
                        </div>
                      </div>
                    </motion.div>

                    <div className="space-y-1 max-w-xs">
                      <span className="text-xs font-bold text-[#E2C376] block">
                        Eligible University Offer Tier:
                      </span>
                      <p className="text-xs text-slate-200 font-semibold leading-snug">
                        {offerTier}
                      </p>
                    </div>

                    <GoldButton href={BOOKING} className="mt-5 text-xs px-6 py-2.5 w-full justify-center">
                      Lock in Your Target Grade
                    </GoldButton>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* ── TAB 3: 3D LIVE LESSON SIMULATOR ── */}
          {active3DTab === 'whiteboard' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.15s ease-out'
                }}
                className="relative bg-gradient-to-br from-[#0b1b33] to-[#06101e] border border-blue-400/30 rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              >
                {/* Window Header */}
                <div style={{ transform: 'translateZ(20px)' }} className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-slate-400 font-mono text-[11px] ml-2">Ustaad Live Classroom · Dubai 1-to-1</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live Ultra-HD Audio/Video Active</span>
                  </div>
                </div>

                {/* Simulated Digital Canvas */}
                <div style={{ transform: 'translateZ(35px)' }} className="grid lg:grid-cols-12 gap-6 items-stretch">
                  
                  {/* Interactive Whiteboard Canvas */}
                  <div className="lg:col-span-8 bg-[#040a14] rounded-2xl p-6 border border-white/10 font-mono text-xs sm:text-sm text-slate-100 flex flex-col justify-between min-h-[260px] relative overflow-hidden">
                    <div className="space-y-3 relative z-10">
                      <div className="text-slate-400 text-[11px] border-b border-white/5 pb-2">
                        // Problem: Calculus P3 Implicit Differentiation (dy/dx at point P)
                      </div>
                      <div className="text-blue-300">
                        f(x, y) = x³ + y³ - 6xy = 0
                      </div>
                      <div className="text-slate-200">
                        d/dx [x³] + d/dx [y³] - 6 d/dx [xy] = 0
                      </div>
                      <div className="text-emerald-300 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-500/30">
                        3x² + 3y² (dy/dx) - 6(y + x (dy/dx)) = 0  <span className="text-[#C7A24A] font-bold ml-2">✓ Product rule applied</span>
                      </div>
                      <div className="text-amber-300">
                        dy/dx [3y² - 6x] = 6y - 3x²  ⇒  dy/dx = (2y - x²) / (y² - 2x)
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-[11px] text-slate-400">
                      <span>Stylus: Apple Pencil 2 (Pressure-sensitive)</span>
                      <span className="text-[#C7A24A] font-bold">Latency: 12ms (Direct Screen Mirror)</span>
                    </div>
                  </div>

                  {/* Tutor Sidebar / Interception Notes */}
                  <div className="lg:col-span-4 bg-white/5 rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#C7A24A] block mb-1">
                        Real-Time Interception
                      </span>
                      <h4 className="text-sm font-extrabold text-white mb-2">
                        Tutor Correction Notes
                      </h4>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        Notice how the tutor immediately paused the student when applying the product rule to 6xy, ensuring the negative sign was correctly distributed across both terms.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-950/50 border border-blue-400/30 text-xs text-blue-200">
                      <strong>Session Result:</strong> Student identified implicit chain rule without hesitation on second attempt.
                    </div>

                    <GoldButton href={BOOKING} className="w-full text-xs py-2.5 justify-center">
                      Try a Live 30-Min Session
                    </GoldButton>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* ── SECTION 05: 4-STAGE GRADE TURNAROUND PROTOCOL ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <Compass className="w-3.5 h-3.5 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">
                The Ustaad Method
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="The 4-Stage Grade Turnaround Protocol" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              How we move students from shaky conceptual grasp to confident, examiner-grade execution in 8 to 12 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {PROTOCOL_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white border border-gray-200 rounded-3xl p-7 flex flex-col justify-between hover:shadow-lg hover:border-[#0f4a9b]/30 transition-all duration-200 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0f4a9b]/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="text-xs font-black text-[#0f4a9b] uppercase tracking-wider">
                      Stage {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-bold text-[#C7A24A] block mb-3">
                    {step.tagline}
                  </span>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 text-[11px] font-semibold text-gray-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 06: HOW ONLINE SESSIONS WORK ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <Video className="w-3.5 h-3.5 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">
                Live Learning Platform
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="How Live Online A-Level Tutoring Works" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Engineered specifically for rigorous mathematics working, chemical structures, and live mark-scheme dissection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center mb-5">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2">Interactive Whiteboard & Markup</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tutor and student write simultaneously on past-paper PDFs and digital graph paper. No blurry phone photos or awkward webcam setups.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center mb-5">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2">Session Recordings for Revision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every online lesson is automatically recorded. Students can rewatch complex organic mechanisms or physics derivations 24 hours before school tests.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2">Weekly Parent Progress Notes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Parents receive concise weekly updates detailing topics mastered, homework completed, and timed mock grade trajectories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: DUBAI AREAS COVERED ── */}
      <section className="py-20 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 rounded-full mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#C7A24A]" />
              <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">
                Across Dubai
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Serving Families <span className="text-[#C7A24A]">Across Dubai</span>
            </h2>
            <p className="text-blue-100/70 text-sm sm:text-base leading-relaxed">
              Online 1-to-1 A-Level lessons connecting students across all major residential communities in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {DUBAI_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="bg-[#13233c] border border-white/10 rounded-2xl p-5 hover:border-[#C7A24A]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0f4a9b]/30 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-[#60a5fa]" />
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A]" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{area.name}</h3>
                <p className="text-slate-400 text-xs leading-snug">{area.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 08: VERIFIED DUBAI REVIEWS ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <Star className="w-3.5 h-3.5 text-[#C7A24A] fill-[#C7A24A]" />
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">
                Parent Testimonials
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Proven Results in Dubai British Schools" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Read how our board specialists helped Dubai students turn predicted grades into confirmed university admissions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {DUBAI_REVIEWS.map((rev, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] border border-gray-200/80 rounded-3xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C7A24A] mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-[#C7A24A]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic mb-6">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-extrabold text-xs">
                      {rev.initials}
                    </div>
                    <div>
                      <h3 className="text-xs font-extrabold text-[#0a1f3d]">{rev.name}</h3>
                      <p className="text-[11px] text-[#0f4a9b] font-medium">{rev.school}</p>
                      <p className="text-[10px] text-gray-400">{rev.subject}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3D INTERACTIVE DUBAI SCHOOL SPECIFICATION & READINESS DOSSIER ── */}
      <section className="py-20 sm:py-24 bg-white border-t border-gray-100 relative overflow-hidden [perspective:1400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 mb-4">
              <GraduationCap className="w-3.5 h-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0f4a9b]">
                Dubai School Intelligence
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f3d] tracking-tight mb-4">
              <GradientHeadingText text="Dubai School A-Level Specification Dossier" />
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Select your child's Dubai school to inspect their exact board specifications, syllabus pace, and test their current readiness score.
            </p>

            {/* School Selector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {DUBAI_SCHOOL_DOSSIERS.map((sch) => (
                <button
                  key={sch.id}
                  type="button"
                  onClick={() => setSelectedSchoolId(sch.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    selectedSchoolId === sch.id
                      ? 'bg-[#0f4a9b] text-white shadow-md scale-105'
                      : 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#0f4a9b]/40'
                  }`}
                >
                  {sch.name}
                </button>
              ))}
            </div>
          </div>

          {/* 3D Interactive School Dossier Card */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              key={activeSchool.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-gradient-to-br from-[#f8fafc] via-white to-[#0f4a9b]/5 border border-[#0f4a9b]/20 rounded-3xl p-7 sm:p-10 shadow-lg"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: School Board Blueprint */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-gray-200">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#0f4a9b]" />
                        <span className="text-xs font-bold text-gray-500">{activeSchool.location}, Dubai</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#0a1f3d]">
                        {activeSchool.name}
                      </h3>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] text-xs font-extrabold">
                      {activeSchool.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-3">
                      Active Exam Board Specifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs">
                        <span className="text-[10px] font-bold text-gray-400 uppercase block">Mathematics</span>
                        <span className="text-xs font-extrabold text-[#0a1f3d]">{activeSchool.boards.maths}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs">
                        <span className="text-[10px] font-bold text-gray-400 uppercase block">Physics</span>
                        <span className="text-xs font-extrabold text-[#0a1f3d]">{activeSchool.boards.physics}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs">
                        <span className="text-[10px] font-bold text-gray-400 uppercase block">Chemistry</span>
                        <span className="text-xs font-extrabold text-[#0a1f3d]">{activeSchool.boards.chemistry}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs">
                        <span className="text-[10px] font-bold text-gray-400 uppercase block">Economics / Biology</span>
                        <span className="text-xs font-extrabold text-[#0a1f3d]">{activeSchool.boards.economics} · {activeSchool.boards.biology}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 rounded-2xl p-4 space-y-1.5">
                    <span className="text-xs font-extrabold text-[#0f4a9b] block">Curriculum Pacing Insight:</span>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {activeSchool.curriculumInsight}
                    </p>
                  </div>
                </div>

                {/* Right Side: Interactive Readiness Self-Audit */}
                <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f4a9b] block">
                          Self-Diagnostic
                        </span>
                        <h4 className="text-base font-extrabold text-[#0a1f3d]">
                          A* Exam Readiness Check
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black text-[#0f4a9b] font-mono">{auditScore}%</span>
                        <span className="text-[10px] text-gray-400 block">Readiness</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-5">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]"
                        initial={{ width: 0 }}
                        animate={{ width: `${auditScore}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <div className="space-y-2.5">
                      {[
                        { key: 'c1', label: 'Derives line-by-line calculus & mechanics proofs without prompts' },
                        { key: 'c2', label: 'Uses exact exam board command keywords (e.g. state vs deduce)' },
                        { key: 'c3', label: 'Finishes full 2-hour timed papers with 15 mins review buffer' },
                        { key: 'c4', label: 'Logs recurring errors in a structured post-mock recovery sheet' }
                      ].map((chk) => (
                        <button
                          key={chk.key}
                          type="button"
                          onClick={() => toggleAudit(chk.key)}
                          className={`w-full p-2.5 rounded-xl text-left text-xs transition-all flex items-start gap-2.5 cursor-pointer ${
                            auditChecks[chk.key]
                              ? 'bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold'
                              : 'bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                            auditChecks[chk.key] ? 'bg-emerald-600 text-white' : 'border border-gray-400'
                          }`}>
                            {auditChecks[chk.key] && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{chk.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <GoldButton href={BOOKING} className="w-full text-xs py-3 justify-center">
                    Get Matched for {activeSchool.name}
                  </GoldButton>
                </div>

              </div>
            </motion.div>
          </div>

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
        button1Text="Book a Free Trial Session"
        button1Href={BOOKING}
        subtext1="No commitment. Matched within 24 hours."
      />
    </Layout>
  );
}
