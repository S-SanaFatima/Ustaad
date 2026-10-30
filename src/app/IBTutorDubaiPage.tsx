import React, { useState, useEffect, Fragment, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle, ChevronDown, Clock, MapPin,
  MessageCircle, Star, Target, Users,
  Calculator, BookOpen, Compass, Layers, CheckCircle2, GraduationCap, Dna, Atom, FlaskConical, LineChart,
  AlertTriangle, FileText, Timer, Sparkles, Award, ShieldCheck,
  Brain, HelpCircle, ExternalLink, RefreshCw
} from 'lucide-react';
import { Layout, GoldButton, StatsBar, SchoolsMarquee, DubaiAreasInteractiveCard, WhatsAppIcon, RelatedContent } from './shared';
import type { SchoolLogoItem } from './shared/SchoolsMarquee';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const BOOKING_URL = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20an%20IB%20tutor%20in%20Dubai%20for%20my%20child.%20Could%20we%20discuss%20the%20first%20session%3F';

// SEO Metas
const PAGE_TITLE = "IB Tutor Dubai | 1-to-1 IB DP & MYP Tutors | Ustaad";
const PAGE_DESC = "Private IB tutors in Dubai for DP SL/HL and MYP. Get expert help with the IA, Extended Essay and exams. Free 15-min orientation with the first lesson.";
const CANONICAL_PATH = "/ib-tutor-dubai";
const KEYWORDS_LIST = "IB tutor Dubai, IB DP tutor Dubai, private IB tutor Dubai, online IB tutor UAE, IB Maths tutor Dubai, IB Physics tutor Dubai, IB Chemistry tutor Dubai, IB Biology tutor Dubai, IB Economics tutor Dubai, IB IA help Dubai, IB Extended Essay help, MYP tutor Dubai, IB HL / SL tutor";

// 6 FAQs (40-60 words each, British English)
const FAQS_DATA = [
  {
    q: "How much does an IB tutor cost in Dubai?",
    a: "Fees depend on the programme (MYP or DP) and the level (SL or HL). Message us on WhatsApp or use the contact page for current rates. Every first lesson includes a free 15-minute orientation."
  },
  {
    q: "Is IB tutoring with Ustaad online?",
    a: "Yes. All IB lessons are live, online and 1-to-1, for students across Dubai, including Dubai Hills, Arabian Ranches, Emirates Hills and Downtown. Tutor and student share the screen and work on the same digital whiteboard, and lessons fit around school hours without evening traffic."
  },
  {
    q: "Can you help with the IA and Extended Essay?",
    a: "Yes. We guide students through formulating focused research questions, structuring methodology, analysing data, and aligning drafts with the official IBO assessment criteria. In line with strict academic integrity rules, tutors do not write work for students; we teach them how to critique, refine, and elevate their own scholarship."
  },
  {
    q: "Should my child take HL or SL?",
    a: "It depends on the university course your child is aiming for and where their strengths are. In the first lesson, the tutor looks at current grades and target courses and suggests which subjects to take at HL. See DP HL tutoring and DP SL tutoring for how each level is taught."
  },
  {
    q: "Is Year 12 too early, or Year 13 too late, for IB tutoring?",
    a: "Starting in Year 12 (DP1) allows students to build rigorous conceptual foundations before coursework piles up in Year 13. However, many students join in term one to stabilise early test scores, or in the final six months for targeted exam technique drilling, command term practice, and mock exam revision."
  },
  {
    q: "Do your tutors know the current IB syllabus?",
    a: "Absolutely. Our specialist tutors are fully versed in the latest curriculum specifications, including the new Biology, Chemistry and Physics courses first examined in 2025, and the Maths AA and AI routes. All teaching materials and question banks directly mirror current IBO examination rubrics."
  }
];

// 8 Verified IB Schools in Dubai
const IB_DUBAI_SCHOOL_LOGOS: SchoolLogoItem[] = [
  { name: 'GEMS World Academy Dubai', file: 'gems-world-academy.png' },
  { name: 'GEMS Wellington International School Dubai', file: 'gems-wis.png' },
  { name: 'Repton School Dubai', file: 'repton-dubai.png' },
  { name: 'Nord Anglia International School Dubai', file: 'nord-anglia-dubai.png' },
  { name: 'JESS Dubai', file: 'jess.png', alt: 'JESS Arabian Ranches logo' },
  { name: 'Sunmarke School Dubai', file: 'sunmarke.png' },
  { name: 'Deira International School Dubai', file: 'deira.png' },
  { name: 'Dwight School Dubai', file: 'dwight.png' },
];

// Interactive "What's costing you marks?" Selector items
const MARK_LOSS_FACTORS = [
  {
    id: 'content',
    tabTitle: '1. Content & Concept Gaps',
    shortTabTitle: '1. Concepts',
    title: 'Content & Conceptual Gaps',
    badge: 'Syllabus Depth',
    symptom: 'Students spend hours re-reading notes or textbook chapters, but struggle the moment an exam question applies the concept to an unfamiliar context or novel scenario.',
    examinerCriteria: 'IB questions test synthesis and transfer, not rote recall. In IB Sciences and Maths AA, examiners give no marks for memorised answers when derivations are required.',
    ustaadFix: 'We reteach weak topics from first principles using interactive digital whiteboards. Students build conceptual links step-by-step until derivations and foundational theories feel intuitive.',
    actionText: 'Book a Diagnostic Session to Spot Concept Gaps'
  },
  {
    id: 'technique',
    tabTitle: '2. Command Term Technique',
    shortTabTitle: '2. Command Terms',
    title: 'Command Terms & Marking Criteria',
    badge: 'Exam Technique',
    symptom: 'Scoring only 2 out of 6 marks on extended questions despite knowing the factual science or economics, usually because the response is descriptive rather than analytical.',
    examinerCriteria: 'Command terms dictate the mark scheme structure. "Explain" requires cause and effect; "Evaluate" demands balanced appraisal and counter-arguments; "Discuss" requires considering multiple perspectives.',
    ustaadFix: 'We drill command-term decoding line by line. Students learn the precise sentence frames and criterion requirements needed to capture every method mark and evaluation band.',
    actionText: 'Master IB Command Terms with a Specialist'
  },
  {
    id: 'coursework',
    tabTitle: '3. IA, EE & Coursework',
    shortTabTitle: '3. Coursework',
    title: 'Internal Assessments & Extended Essay',
    badge: 'Coursework Weight',
    symptom: 'Procrastinating on research questions, uncertainty over error propagation in science labs, or receiving vague school feedback with only weeks left before final moderation.',
    examinerCriteria: 'The IA accounts for 20% of science and maths grades; the EE and TOK decide the core 3 points. Examiners penalise unoriginal methodology, superficial evaluation, and missing uncertainties.',
    ustaadFix: 'We guide students through every stage: defining a defensible research question, statistical error analysis (Δx), structured mathematical modelling, and rigorous rubric alignment.',
    actionText: 'Get 1-to-1 Feedback on Your IA Draft'
  }
];

// IB 1-7 Grade Scale Levels (with official IB descriptors)
const IB_GRADE_LEVELS = [
  {
    grade: '7',
    label: 'Mastery & Synthesis',
    percentile: 'Excellent',
    color: 'from-amber-400 to-amber-500',
    borderColor: 'border-amber-400',
    criteria: 'Flawless conceptual grasp, nuanced evaluation under exam time constraints, elegant mathematical derivations, and sophisticated command of specialised terminology.'
  },
  {
    grade: '6',
    label: 'Comprehensive Analysis',
    percentile: 'Very Good',
    color: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-400',
    criteria: 'Sound analytical reasoning, clear multi-step problem solving, and accurate command of concepts with only minor omissions in unstructured or novel scenarios.'
  },
  {
    grade: '5',
    label: 'Sound Competence',
    percentile: 'Good',
    color: 'from-teal-500 to-emerald-600',
    borderColor: 'border-teal-400',
    criteria: 'Reliable grasp of standard textbook questions. Marks are typically lost on higher-order evaluation, questions that link several topics, and coursework evaluation criteria.'
  },
  {
    grade: '4',
    label: 'Basic Foundation',
    percentile: 'Satisfactory',
    color: 'from-slate-500 to-slate-600',
    borderColor: 'border-slate-300',
    criteria: 'Understands basic definitions and predictable calculations. Struggles when questions require synthesising concepts across multiple syllabus themes.'
  },
  {
    grade: '1–3',
    label: 'Significant Knowledge Gaps',
    percentile: 'Mediocre to Very Poor',
    color: 'from-rose-500 to-red-600',
    borderColor: 'border-rose-400',
    criteria: 'Severe content blind spots, confusion regarding command terms, and incomplete working. Requires systematic diagnostic rebuilding before past papers can be attempted.'
  }
];

// 6 IB Subject Cards
const IB_SUBJECTS = [
  {
    id: 'maths',
    title: 'IB Maths (AA & AI)',
    shortTitle: 'Maths',
    line: 'Calculus, probability and modelling questions.',
    icon: <Calculator className="w-5 h-5 text-amber-500" />,
    href: '/maths-tutor-dubai',
    badges: ['SL', 'HL'],
    iaSummary: 'Mathematical exploration focusing on calculus modelling, real-world data fitting, mathematical rigour, and personal engagement reflections.',
    topics: ['Calculus & Differential Equations', 'Statistical Distributions', 'Sequences & Series']
  },
  {
    id: 'physics',
    title: 'IB Physics',
    shortTitle: 'Physics',
    line: 'Waves, fields and nuclear physics.',
    icon: <Atom className="w-5 h-5 text-blue-500" />,
    href: '/physics-tutor-dubai',
    badges: ['SL', 'HL'],
    iaSummary: 'Scientific inquiry with uncertainty propagation (Δx, ±%), linear regression error bars, experimental control, and critical evaluation.',
    topics: ['Wave Behaviour (Theme C)', 'Fields (Theme D)', 'Nuclear Physics (Theme E)']
  },
  {
    id: 'chemistry',
    title: 'IB Chemistry',
    shortTitle: 'Chemistry',
    line: 'Bonding, kinetics and organic chemistry.',
    icon: <FlaskConical className="w-5 h-5 text-emerald-500" />,
    href: '/chemistry-tutor-dubai',
    badges: ['SL', 'HL'],
    iaSummary: 'Reaction kinetics, enthalpy titrations, equilibrium shifts, stoichiometric precision, and spectroscopic analysis write-ups.',
    topics: ['Kinetics & Rate Equations', 'Organic Mechanisms', 'Thermodynamics & Enthalpy']
  },
  {
    id: 'biology',
    title: 'IB Biology',
    shortTitle: 'Biology',
    line: 'Cells, genetics and ecology questions.',
    icon: <Dna className="w-5 h-5 text-teal-500" />,
    href: '/biology-tutor-dubai',
    badges: ['SL', 'HL'],
    iaSummary: 'Biological methodology, Chi-squared & Pearson correlation tests, enzyme kinetics, photosynthesis rates, and environmental variables.',
    topics: ['Molecular & Cell Biology', 'Genetics & Biotechnology', 'Ecology & Evolution']
  },
  {
    id: 'economics',
    title: 'IB Economics',
    shortTitle: 'Economics',
    line: 'Diagrams, evaluation and data response.',
    icon: <LineChart className="w-5 h-5 text-indigo-500" />,
    href: '/economics',
    badges: ['SL', 'HL'],
    iaSummary: '3 portfolio commentaries evaluating real-world news articles with dynamic micro/macro economic diagrams and policy trade-offs.',
    topics: ['Micro: Price Controls', 'Macro: Monetary/Fiscal Policies', 'Global: Aid & Development']
  },
  {
    id: 'english',
    title: 'IB English',
    shortTitle: 'English',
    line: 'Unseen analysis and Paper 2 comparisons.',
    icon: <BookOpen className="w-5 h-5 text-rose-500" />,
    href: '/english',
    badges: ['SL', 'HL'],
    iaSummary: 'Individual Oral (IO) 15-minute presentation connecting a literary extract to a global issue, plus unseen Paper 1 comparative analysis.',
    topics: ['Paper 1 Guided Textual Analysis', 'Paper 2 Literary Comparison', 'Global Issue Oral']
  }
];


/* ── RICH IB HERO BACKGROUND WITH ROTATING DIPLOMA ASTROLABE, TRAJECTORY & TELEMETRY ── */
function IBHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
      {/* ── 1. AMBIENT LUMINESCENT ORBS ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.32, 0.48, 0.32] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[580px] h-[580px] bg-[#0f4a9b]/40 rounded-full blur-[130px]"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.34, 0.2] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 1 }}
        className="absolute top-16 -right-12 w-[420px] h-[420px] bg-[#f0c96a]/25 rounded-full blur-[110px]"
      />
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.16, 0.28, 0.16] }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-16 -left-12 w-[380px] h-[380px] bg-[#22b8cd]/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-1/2 right-[20%] w-[320px] h-[320px] bg-[#6366f1]/15 rounded-full blur-[100px]"
      />

      {/* ── 2. DESKTOP ANIMATED SVG CANVAS (md+) ── */}
      <svg
        viewBox="0 0 1440 620"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full hidden md:block opacity-90"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="ibGrowthGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#22b8cd" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="ibGoldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#f0c96a" />
            <stop offset="100%" stopColor="#C7A24A" />
          </linearGradient>

          <linearGradient id="ibCyanGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5fd3e6" />
            <stop offset="100%" stopColor="#0f4a9b" />
          </linearGradient>

          <radialGradient id="ibHexGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#0f4a9b" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
          </radialGradient>

          {/* Filters */}
          <filter id="ibPglow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Micro-Dot Matrix Pattern */}
          <pattern id="ib-matrix-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="0.9" fill="rgba(255,255,255,0.05)" />
            <circle cx="25" cy="25" r="0.6" fill="rgba(95,211,230,0.07)" />
          </pattern>
        </defs>

        {/* Matrix Grid */}
        <rect width="100%" height="100%" fill="url(#ib-matrix-grid)" />

        {/* Telemetry Guide Header (Positioned below navbar) */}
        <text x="45" y="84" fill="rgba(95,211,230,0.65)" fontSize="9" fontFamily="monospace" letterSpacing="0.12em">
          DUBAI · 25.2048° N, 55.2708° E · IB DP (SL/HL) &amp; MYP 1-TO-1
        </text>
        <text x="1395" y="84" textAnchor="end" fill="rgba(240,201,106,0.65)" fontSize="9" fontFamily="monospace" letterSpacing="0.12em">
          CRITERIA-BASED MENTORING · IA &amp; EE GUIDANCE · TARGET: 45 / 7 ★
        </text>
        <line x1="45" y1="92" x2="1395" y2="92" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="4 6" />

        {/* ── LEFT FLANK: GROWTH TRAJECTORY & DIAGNOSTIC MILESTONES (Left Margin X: 35..260) ── */}
        <g opacity="0.95">
          {/* Trajectory Axis */}
          <line x1="30" y1="495" x2="270" y2="495" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="40" y1="505" x2="40" y2="110" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />

          {/* Ascending Trajectory Curve */}
          <path
            d="M 40 495 Q 140 470 240 130"
            fill="none"
            stroke="url(#ibGrowthGrad)"
            strokeWidth="3.2"
            filter="url(#ibPglow)"
          />
          <path
            d="M 40 495 Q 140 470 240 130"
            fill="none"
            stroke="url(#ibGrowthGrad)"
            strokeWidth="1.6"
          />

          {/* Checkpoint 1: Baseline */}
          <circle cx="40" cy="495" r="4.5" fill="#22b8cd" />
          <circle cx="40" cy="495" r="9" fill="none" stroke="#22b8cd" strokeWidth="0.8" opacity="0.6" />
          <text x="52" y="499" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace">
            Baseline (Level 4-5)
          </text>

          {/* Checkpoint 2: DP1 Foundations */}
          <circle cx="125" cy="445" r="3" fill="rgba(95,211,230,0.8)" />
          <text x="135" y="448" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">
            DP1 Foundations
          </text>

          {/* Checkpoint 3: IA Submissions */}
          <circle cx="190" cy="315" r="3" fill="rgba(240,201,106,0.8)" />
          <text x="200" y="318" fill="rgba(240,201,106,0.7)" fontSize="8" fontFamily="monospace">
            IA Criteria (20%)
          </text>

          {/* Top Target Beacon with Pulsing Waves */}
          <motion.circle
            cx="240"
            cy="130"
            r="5"
            fill="#f0c96a"
            filter="url(#ibPglow)"
            animate={{ r: [4.5, 7, 4.5], opacity: [0.85, 1, 0.85] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="240"
            cy="130"
            r="12"
            fill="none"
            stroke="#f0c96a"
            strokeWidth="1.2"
            animate={{ r: [10, 24, 30], opacity: [0.75, 0.25, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut' }}
          />
          <text x="135" y="112" fill="#f0c96a" fontSize="11" fontFamily="monospace" fontWeight="bold">
            Target: Grade 7 ★
          </text>

          {/* Floating Subject Formula Badges on Left */}
          <motion.g
            animate={{ y: [0, -7, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          >
            <rect x="25" y="210" width="138" height="26" rx="13" fill="rgba(15,74,155,0.55)" stroke="rgba(95,211,230,0.4)" strokeWidth="1" />
            <text x="94" y="227" textAnchor="middle" fill="#5fd3e6" fontSize="10" fontFamily="monospace" fontWeight="bold">
              Maths AA: ∫ eˣ·sin(x) dx
            </text>
          </motion.g>

          <motion.g
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
          >
            <rect x="35" y="340" width="134" height="26" rx="13" fill="rgba(240,201,106,0.12)" stroke="rgba(240,201,106,0.45)" strokeWidth="1" />
            <text x="102" y="357" textAnchor="middle" fill="#fde68a" fontSize="10" fontFamily="monospace" fontWeight="bold">
              Physics HL: Δx·Δp ≥ ℏ/2
            </text>
          </motion.g>

          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 5.6, ease: 'easeInOut', delay: 1.8 }}
          >
            <rect x="20" y="425" width="168" height="24" rx="12" fill="rgba(15,74,155,0.45)" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
            <text x="104" y="441" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">
              Chem: Structure &amp; Reactivity
            </text>
          </motion.g>
        </g>

        {/* ── RIGHT FLANK: IB DIPLOMA ROTATING ASTROLABE & CORE MODEL (Right Margin HX: 1290) ── */}
        {(() => {
          const HX = 1290;
          const HY = 250;
          const SIZE = 80;
          const pts: string[] = [];
          for (let i = 0; i < 6; i++) {
            const angle_rad = (Math.PI / 180) * (60 * i - 30);
            pts.push(`${HX + SIZE * Math.cos(angle_rad)},${HY + SIZE * Math.sin(angle_rad)}`);
          }
          return (
            <g opacity="0.95">
              {/* Radial Center Glow */}
              <circle cx={HX} cy={HY} r={SIZE * 1.6} fill="url(#ibHexGlow)" />

              {/* Outer Rotating Astrolabe Ring */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
                style={{ originX: `${HX}px`, originY: `${HY}px` }}
              >
                <circle cx={HX} cy={HY} r="100" fill="none" stroke="rgba(240,201,106,0.35)" strokeWidth="1.2" strokeDasharray="5 5" />
                <circle cx={HX + 100} cy={HY} r="3" fill="#f0c96a" />
                <circle cx={HX - 100} cy={HY} r="2.5" fill="#5fd3e6" />
                <circle cx={HX} cy={HY + 100} r="2" fill="#fde68a" />
              </motion.g>

              {/* Counter-Rotating Inner Astrolabe Ring */}
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                style={{ originX: `${HX}px`, originY: `${HY}px` }}
              >
                <circle cx={HX} cy={HY} r="64" fill="none" stroke="rgba(95,211,230,0.35)" strokeWidth="1" strokeDasharray="3 4" />
                <circle cx={HX + 64} cy={HY} r="2.5" fill="#5fd3e6" />
                <circle cx={HX - 64} cy={HY} r="2.5" fill="#f0c96a" />
              </motion.g>

              {/* IB Diploma Hexagon Frame */}
              <polygon points={pts.join(' ')} fill="rgba(15,74,155,0.08)" stroke="url(#ibGoldGrad)" strokeWidth="2.2" filter="url(#ibPglow)" />
              <polygon points={pts.join(' ')} fill="none" stroke="rgba(240,201,106,0.5)" strokeWidth="1" strokeDasharray="4 4" />

              {/* Internal Chords Connecting Opposing Vertices (TOK Synergy) */}
              {[0, 1, 2].map((i) => {
                const a1 = (Math.PI / 180) * (60 * i - 30);
                const a2 = (Math.PI / 180) * (60 * (i + 3) - 30);
                return (
                  <line
                    key={`ib_chord_${i}`}
                    x1={HX + SIZE * Math.cos(a1)}
                    y1={HY + SIZE * Math.sin(a1)}
                    x2={HX + SIZE * Math.cos(a2)}
                    y2={HY + SIZE * Math.sin(a2)}
                    stroke="rgba(240,201,106,0.18)"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Center IB Core Circle */}
              <circle cx={HX} cy={HY} r="28" fill="rgba(240,201,106,0.15)" stroke="#f0c96a" strokeWidth="1.6" />
              <text x={HX} y={HY + 5} textAnchor="middle" fill="#f0c96a" fontSize="13" fontWeight="900" fontFamily="sans-serif">
                IB DP
              </text>
              <text x={HX} y={HY + 17} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="monospace">
                MYP · 1-TO-1
              </text>

              {/* Surrounding Subject Annotations */}
              <text x={HX - 105} y={HY - 68} fill="rgba(95,211,230,0.85)" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                Maths AA / AI
              </text>
              <text x={HX + 55} y={HY - 75} fill="rgba(180,180,255,0.85)" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                Physics HL
              </text>
              <text x={HX + 65} y={HY + 68} fill="rgba(240,201,106,0.85)" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                Chemistry SL/HL
              </text>
              <text x={HX - 105} y={HY + 80} fill="rgba(52,211,153,0.85)" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                Biology &amp; ESS
              </text>

              {/* Floating Academic Badges on Right */}
              <motion.g
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.6 }}
              >
                <rect x={HX - 85} y={HY - 130} width="168" height="24" rx="12" fill="rgba(15,74,155,0.6)" stroke="rgba(240,201,106,0.4)" strokeWidth="1" />
                <text x={HX - 1} y={HY - 114} textAnchor="middle" fill="#fde68a" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                  Core: TOK + EE (+3 Points)
                </text>
              </motion.g>
            </g>
          );
        })()}
      </svg>

      {/* ── 3. MOBILE ANIMATED SVG CANVAS (Visible < md) ── */}
      <svg
        viewBox="0 0 380 620"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full block md:hidden opacity-90"
      >
        <defs>
          <linearGradient id="ibMobGoldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#C7A24A" />
          </linearGradient>

          <radialGradient id="ibMobOrbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.32" />
            <stop offset="60%" stopColor="#0f4a9b" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
          </radialGradient>

          <filter id="ibMobGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Micro-Dot Blueprint Matrix */}
        {(() => {
          const dots: ReactNode[] = [];
          for (let x = 20; x < 380; x += 40) {
            for (let y = 25; y < 620; y += 42) {
              dots.push(
                <circle
                  key={`ib_mbd_${x}_${y}`}
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

        {/* Telemetry Header */}
        <text x="24" y="46" fill="rgba(95,211,230,0.65)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.1em">
          DUBAI · 25.2048° N, 55.2708° E
        </text>
        <text x="24" y="60" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace" letterSpacing="0.08em">
          IB DP (SL/HL) &amp; MYP 1-TO-1
        </text>

        {/* Frame Boundary Accents */}
        <line x1="20" y1="68" x2="360" y2="68" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="3 4" />
        <line x1="20" y1="540" x2="360" y2="540" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="3 4" />
        <line x1="20" y1="68" x2="20" y2="540" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="3 4" />
        <line x1="360" y1="68" x2="360" y2="540" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="3 4" />

        {/* Top-Right Rotating IB Orbital Astrolabe */}
        <g transform="translate(322, 102)">
          <circle cx="0" cy="0" r="42" fill="url(#ibMobOrbGlow)" />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
          >
            <circle cx="0" cy="0" r="32" fill="none" stroke="rgba(240,201,106,0.35)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="22" fill="none" stroke="rgba(95,211,230,0.35)" strokeWidth="0.8" strokeDasharray="2 3" />
            <circle cx="32" cy="0" r="2" fill="#f0c96a" />
            <circle cx="-22" cy="0" r="1.5" fill="#5fd3e6" />
          </motion.g>
          <circle cx="0" cy="0" r="15" fill="rgba(240,201,106,0.12)" stroke="url(#ibMobGoldGrad)" strokeWidth="1.2" />
          <text x="0" y="3.5" textAnchor="middle" fill="#f0c96a" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
            IB DP
          </text>
        </g>

        {/* Baseline Node (Lower-left) */}
        <circle cx="30" cy="500" r="3.5" fill="#22b8cd" />
        <circle cx="30" cy="500" r="7" fill="none" stroke="#22b8cd" strokeWidth="0.8" opacity="0.6" />
        <text x="44" y="504" fill="rgba(255,255,255,0.5)" fontSize="8.5" fontFamily="monospace">
          Baseline (Level 4-5)
        </text>

        {/* Target Grade 7 Beacon (Top-right near IB emblem) */}
        <motion.circle
          cx="322"
          cy="102"
          r="4.5"
          fill="#f0c96a"
          filter="url(#ibMobGlow)"
          animate={{ r: [4, 6.5, 4], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        />
        <text x="238" y="90" fill="#f0c96a" fontSize="10" fontFamily="monospace" fontWeight="bold">
          Target: Grade 7 ★
        </text>

        {/* Subject watermark tags */}
        <text x="24" y="195" fill="rgba(95,211,230,0.35)" fontSize="11" fontFamily="monospace">
          Maths AA / AI (HL)
        </text>
        <text x="24" y="320" fill="rgba(240,201,106,0.32)" fontSize="10.5" fontFamily="monospace">
          Physics &amp; Chem HL
        </text>
        <text x="24" y="440" fill="rgba(255,255,255,0.28)" fontSize="9" fontFamily="monospace">
          IA Criteria (20%)
        </text>
        <text x="220" y="475" fill="rgba(95,211,230,0.3)" fontSize="10" fontFamily="monospace">
          TOK · EE (+3)
        </text>
      </svg>
    </div>
  );
}

export default function IBTutorDubaiPage() {
  const [activeLossTab, setActiveLossTab] = useState<number>(0);
  const [mobileLossView, setMobileLossView] = useState<'problem' | 'solution'>('problem');
  const [activeGrade, setActiveGrade] = useState<number>(0);
  const [activeSubjectIdx, setActiveSubjectIdx] = useState<number>(0);
  const [isSubjectHovered, setIsSubjectHovered] = useState<boolean>(false);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Auto-cycle through subjects every 4.2s (pauses on user interaction)
  useEffect(() => {
    if (isSubjectHovered) return;
    const interval = setInterval(() => {
      setActiveSubjectIdx((prev) => (prev + 1) % IB_SUBJECTS.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isSubjectHovered]);

  const toggleCard = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => (prev === idx ? null : idx));
  };

  // Structured Schemas
  const breadcrumbsList = [
    { name: 'Home', url: '/' },
    { name: 'IB Curriculum', url: '/ib-curriculum' },
    { name: 'IB Tutor Dubai', url: '/ib-tutor-dubai' }
  ];

  const rawCitySchema = cityLocalBusinessSchema({
    city: 'Dubai',
    url: '/ib-tutor-dubai',
    name: 'Ustaad — IB Tutor Dubai',
    description: 'Expert 1-to-1 IB tutoring in Dubai for DP SL/HL and MYP across Maths, Physics, Chemistry, Biology, Economics, and coursework (IA & EE).',
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressRegion: "Abu Dhabi",
      addressCountry: "AE",
    },
  });
  // PDF Section 18: Remove street line, paymentAccepted: "Credit Card, Bank Transfer", remove priceRange
  const { priceRange: _unusedPrice, ...citySchemaRest } = rawCitySchema as Record<string, any>;
  const citySchema = {
    ...citySchemaRest,
    paymentAccepted: "Credit Card, Bank Transfer",
  };

  const svcSchema = serviceSchema(
    'IB Tutoring Dubai — 1-to-1 DP & MYP',
    'Private IB tutors in Dubai for DP SL/HL and MYP. Specialist help with Internal Assessment, Extended Essay and exams. Free 15-min orientation with the first lesson.',
    '/ib-tutor-dubai'
  );

  const breadcrumbsJson = breadcrumbSchema(breadcrumbsList);
  const faqSchemaData = FAQS_DATA.map(f => {
    if (f.q === "Should my child take HL or SL?") {
      return {
        q: f.q,
        a: "It depends on the university course your child is aiming for and where their strengths are. In the first lesson, the tutor looks at current grades and target courses and suggests which subjects to take at HL. See DP HL tutoring (/dp-hl) and DP SL tutoring (/dp-sl) for how each level is taught."
      };
    }
    return f;
  });
  const faqJson = faqSchema(faqSchemaData);

  return (
    <Layout>
      <SEOHead
        title={PAGE_TITLE}
        description={PAGE_DESC}
        canonical={CANONICAL_PATH}
        schema={[citySchema, svcSchema, breadcrumbsJson, faqJson]}
      />

      {/* ── 1. HERO SECTION (USTAAD SIGNATURE NAVY & GOLD) ── */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">
        <IBHeroBackground />

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
              ONLINE IB DP &amp; MYP TUITION · DUBAI
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
            className="font-extrabold tracking-tight text-white leading-[1.08] mb-3 md:mb-5 text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] max-w-[95%] sm:max-w-none"
          >
            Private IB Tutors in Dubai{' '}
            <span className="block sm:inline" style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              for the Diploma and MYP
            </span>
          </motion.h1>

          {/* Lead */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="text-blue-100/80 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mb-6 md:mb-8 px-2 italic"
          >
            One-to-one IB tutoring for DP (SL/HL) and MYP students, matched to your child&apos;s exact subjects, IA requirements, and school syllabus. For tutoring outside Dubai, see <a href="/ib-curriculum" className="underline font-bold text-amber-300 hover:text-white">IB tutoring across the UAE</a>.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md sm:max-w-none px-4"
          >
            {/* Mobile CTAs */}
            <div className="sm:hidden w-full flex flex-col items-center gap-3">
              <a
                href={BOOKING_URL}
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
                  href={BOOKING_URL}
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

      {/* ── 3. DUBAI SCHOOLS MARQUEE ── */}
      <SchoolsMarquee title="Supporting Students at Dubai’s IB Schools" logoList={IB_DUBAI_SCHOOL_LOGOS} />

      {/* ── 4. INTERACTIVE WIDGET: WHAT'S COSTING YOU MARKS? (ONE SCREEN FIT) ── */}
      <section className="py-7 sm:py-9 lg:py-11 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Compact & impactful to fit 1 screen */}
          <div className="text-center mb-3.5 sm:mb-4 lg:mb-5">
            <span className="text-[11px] font-extrabold text-[#C7A24A] uppercase tracking-widest inline-block">
              IB Diagnostic Analysis
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#0a1f3d] mt-1 mb-1 tracking-tight leading-tight">
              What Is Costing You Marks in the IB?
            </h2>
            <p className="text-gray-500 text-xs sm:text-[13.5px] max-w-xl mx-auto leading-normal">
              Select the challenge your child faces to see the hidden examiner trap and how an experienced private IB tutor in Dubai resolves it.
            </p>
          </div>

          {/* Selector Tabs - 3 compact items in a single row on all devices */}
          <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-3.5 sm:mb-4 bg-[#F1F5F9] p-1 sm:p-1.5 rounded-xl sm:rounded-2xl max-w-2xl mx-auto">
            {MARK_LOSS_FACTORS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveLossTab(idx);
                }}
                className={`py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs md:text-[13px] font-bold transition-all duration-200 text-center truncate ${
                  activeLossTab === idx
                    ? 'bg-white text-[#0f4a9b] shadow-[0_2px_8px_rgba(15,74,155,0.12)] scale-[1.01]'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className="hidden sm:inline">{tab.tabTitle}</span>
                <span className="inline sm:hidden">{tab.shortTabTitle}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="bg-[#FAFBFD] border border-blue-100 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-blue-400" />
            
            {/* Panel Header */}
            <div className="flex items-center justify-between mb-2.5 sm:mb-3.5">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#0a1f3d]">
                {MARK_LOSS_FACTORS[activeLossTab].title}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold bg-[#0f4a9b]/10 text-[#0f4a9b]">
                {MARK_LOSS_FACTORS[activeLossTab].badge}
              </span>
            </div>

            {/* Mobile View Toggle Switcher (< md) */}
            <div className="flex md:hidden p-0.5 bg-slate-200/70 rounded-xl mb-3">
              <button
                onClick={() => setMobileLossView('problem')}
                className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  mobileLossView === 'problem'
                    ? 'bg-white text-rose-700 shadow-xs'
                    : 'text-slate-600'
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>The IB Trap</span>
              </button>
              <button
                onClick={() => setMobileLossView('solution')}
                className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  mobileLossView === 'solution'
                    ? 'bg-white text-emerald-700 shadow-xs'
                    : 'text-slate-600'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Ustaad Solution</span>
              </button>
            </div>

            {/* Content Cards: Side-by-side on desktop (md+), or Toggle-switched on mobile (< md) */}
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-3 sm:mb-4">
              {/* Problem Card */}
              <div className={`bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-4.5 border border-red-100 shadow-2xs flex flex-col justify-between ${
                mobileLossView === 'problem' ? 'block' : 'hidden md:flex'
              }`}>
                <div>
                  <div className="flex items-center gap-1.5 text-rose-600 font-bold text-xs mb-2">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>The Problem &amp; The IB Trap</span>
                  </div>
                  <p className="text-gray-600 text-[11.5px] sm:text-xs lg:text-[12.5px] leading-relaxed mb-2">
                    <strong className="text-gray-800">Symptom: </strong>
                    {MARK_LOSS_FACTORS[activeLossTab].symptom}
                  </p>
                  <p className="text-gray-600 text-[11.5px] sm:text-xs lg:text-[12.5px] leading-relaxed">
                    <strong className="text-gray-800">Examiner Reality: </strong>
                    {MARK_LOSS_FACTORS[activeLossTab].examinerCriteria}
                  </p>
                </div>
                
                {/* Mobile helper to switch to solution */}
                <div className="mt-2.5 pt-2 border-t border-rose-50 flex md:hidden items-center justify-between text-[11px]">
                  <span className="text-slate-400">See how Ustaad fixes this</span>
                  <button
                    onClick={() => setMobileLossView('solution')}
                    className="font-bold text-[#0f4a9b] hover:underline"
                  >
                    View Solution
                  </button>
                </div>
              </div>

              {/* Solution Card */}
              <div className={`bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-4.5 border border-emerald-100 shadow-2xs flex flex-col justify-between ${
                mobileLossView === 'solution' ? 'block' : 'hidden md:flex'
              }`}>
                <div>
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>The Ustaad Solution</span>
                  </div>
                  <p className="text-gray-700 text-[11.5px] sm:text-xs lg:text-[12.5px] leading-relaxed">
                    {MARK_LOSS_FACTORS[activeLossTab].ustaadFix}
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-emerald-50 flex items-center justify-between gap-2 text-[11px] text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>1-to-1 diagnostic &amp; tracking</span>
                  </span>
                  {/* Mobile helper to switch to problem */}
                  <button
                    onClick={() => setMobileLossView('problem')}
                    className="font-medium text-slate-400 hover:text-slate-700 md:hidden"
                  >
                    Review Trap
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WHY IB STUDENTS NEED DIFFERENT SUPPORT (MATCHING REFERENCE DESIGN) ── */}
      <section id="methodology-matters" className="py-7 sm:py-9 lg:py-11 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/70 to-[#f8fafc] relative overflow-hidden">
        {/* Faceted Low-Poly Watermark Background matching Reference */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-45 select-none"
          preserveAspectRatio="none"
          viewBox="0 0 1200 600"
          aria-hidden="true"
        >
          <polygon points="0,0 320,120 180,420 0,600" fill="rgba(15,74,155,0.02)" />
          <polygon points="320,120 620,20 680,280 180,420" fill="rgba(240,201,106,0.025)" />
          <polygon points="620,20 1200,0 1020,280 680,280" fill="rgba(15,74,155,0.018)" />
          <polygon points="1200,0 1200,600 880,520 1020,280" fill="rgba(52,211,153,0.025)" />
          <polygon points="180,420 680,280 820,600 0,600" fill="rgba(15,74,155,0.025)" />
          <polygon points="680,280 1020,280 880,520 820,600" fill="rgba(240,201,106,0.02)" />
          <line x1="320" y1="120" x2="180" y2="420" stroke="rgba(15,74,155,0.06)" strokeWidth="0.9" />
          <line x1="320" y1="120" x2="680" y2="280" stroke="rgba(15,74,155,0.05)" strokeWidth="0.9" />
          <line x1="620" y1="20" x2="680" y2="280" stroke="rgba(15,74,155,0.06)" strokeWidth="0.9" />
          <line x1="1020" y1="280" x2="680" y2="280" stroke="rgba(15,74,155,0.05)" strokeWidth="0.9" />
          <line x1="1020" y1="280" x2="880" y2="520" stroke="rgba(15,74,155,0.06)" strokeWidth="0.9" />
          <line x1="180" y1="420" x2="820" y2="600" stroke="rgba(15,74,155,0.05)" strokeWidth="0.9" />
        </svg>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Frosted Glass Container Card */}
          <div className="relative rounded-[26px] sm:rounded-[34px] bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_16px_45px_-12px_rgba(15,74,155,0.08)] p-5 sm:p-7 lg:p-8">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-7">
              <span className="text-[11px] font-extrabold text-[#0f4a9b] uppercase tracking-[0.16em] inline-block mb-1">
                Methodology Matters
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[30px] font-extrabold text-[#0a1f3d] tracking-tight leading-tight mb-2">
                Why IB Students Need Different Support
              </h2>
              <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto">
                Many students understand the content but lose marks on how the IB assesses it. General school tutoring rarely works for the Diploma Programme because the IB is fundamentally criterion-referenced.
              </p>
            </div>

            {/* Connecting Horizontal Pipeline Bridges on Desktop */}
            <div className="relative">
              <div
                className="hidden md:block absolute top-[45%] left-[33.3%] -translate-x-1/2 -translate-y-1/2 w-8 h-3 rounded-full bg-gradient-to-r from-blue-200/70 via-amber-200/50 to-amber-200/70 border border-white/80 shadow-2xs z-20 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="hidden md:block absolute top-[45%] left-[66.6%] -translate-x-1/2 -translate-y-1/2 w-8 h-3 rounded-full bg-gradient-to-r from-amber-200/70 via-emerald-200/50 to-emerald-200/70 border border-white/80 shadow-2xs z-20 pointer-events-none"
                aria-hidden="true"
              />

              {/* 3 Cards: Desktop Grid / Mobile Gesture Scroll */}
              <div className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 md:pb-0 px-1 -mx-1 md:mx-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                
                {/* ── CARD 1: CRITERIA, NOT JUST ANSWERS ── */}
                <div className="w-[84vw] max-w-[315px] md:w-full md:max-w-none shrink-0 snap-center rounded-2xl bg-gradient-to-b from-[#eef5ff] via-[#f5f9ff] to-[#eaf2ff] border border-blue-200/80 p-4 sm:p-5 shadow-[0_8px_20px_-6px_rgba(59,130,246,0.08)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div>
                    {/* Top Row: Mini Icon + 3D Target Graphic */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-100/90 border border-blue-200/80 flex items-center justify-center text-[#0f4a9b] shadow-2xs">
                        <Target className="w-4 h-4 text-[#0f4a9b]" />
                      </div>

                      {/* 3D Target with Magnifying Glass & Blueprint Graphic */}
                      <div className="w-14 h-14 shrink-0 -mt-1 -mr-1">
                        <svg viewBox="0 0 70 70" className="w-full h-full drop-shadow-xs" aria-hidden="true">
                          <defs>
                            <linearGradient id="targGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.25" />
                            </linearGradient>
                            <linearGradient id="targRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#93c5fd" />
                              <stop offset="50%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#1d4ed8" />
                            </linearGradient>
                          </defs>

                          {/* Blueprint Grid Plane */}
                          <g opacity="0.35" stroke="#3b82f6" strokeWidth="0.7">
                            <rect x="10" y="8" width="46" height="38" rx="4" fill="rgba(59,130,246,0.05)" />
                            <line x1="22" y1="8" x2="22" y2="46" />
                            <line x1="34" y1="8" x2="34" y2="46" />
                            <line x1="46" y1="8" x2="46" y2="46" />
                            <line x1="10" y1="20" x2="56" y2="20" />
                            <line x1="10" y1="32" x2="56" y2="32" />
                          </g>

                          {/* 3D Concentric Target Rings */}
                          <ellipse cx="32" cy="28" rx="19" ry="12" fill="none" stroke="#60a5fa" strokeWidth="1.2" opacity="0.6" />
                          <ellipse cx="32" cy="28" rx="13" ry="8.5" fill="none" stroke="#3b82f6" strokeWidth="1.2" opacity="0.8" />
                          <ellipse cx="32" cy="28" rx="7" ry="4.5" fill="rgba(37,99,235,0.18)" stroke="#2563eb" strokeWidth="1.4" />
                          <circle cx="32" cy="28" r="2.2" fill="#1d4ed8" />

                          {/* 3D Magnifying Glass */}
                          <circle cx="38" cy="25" r="13" fill="url(#targGlassGrad)" stroke="url(#targRimGrad)" strokeWidth="2" />
                          <path d="M 31 18 A 9 9 0 0 1 45 22" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
                          <rect x="47" y="34" width="5" height="15" rx="2.5" transform="rotate(-45 47 34)" fill="#1e40af" stroke="#60a5fa" strokeWidth="0.8" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-[14.5px] sm:text-[15px] font-bold text-[#0a1f3d] mb-1.5 leading-snug">
                      1. Criteria, Not Just Answers
                    </h3>
                    <p className="text-slate-600 text-[11.5px] sm:text-xs leading-relaxed">
                      Every subject is marked against published criteria rather than simple answer keys. Whether calculating error in Physics or writing an Economics data response, we teach students to structure work to the exact published rubric.
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2 border-t border-blue-200/60 text-[11px] font-bold text-[#0f4a9b]">
                    Focus: Criterion-based scoring
                  </div>
                </div>

                {/* ── CARD 2: COURSEWORK MATTERS ── */}
                <div className="w-[84vw] max-w-[315px] md:w-full md:max-w-none shrink-0 snap-center rounded-2xl bg-gradient-to-b from-[#fdf7ea] via-[#fffcf6] to-[#faf3e1] border border-amber-200/80 p-4 sm:p-5 shadow-[0_8px_20px_-6px_rgba(245,158,11,0.08)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div>
                    {/* Top Row: Mini Icon + 3D Coursework Graphic */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-100/90 border border-amber-200/80 flex items-center justify-center text-amber-700 shadow-2xs">
                        <FileText className="w-4 h-4 text-amber-700" />
                      </div>

                      {/* 3D Stacked Papers + Graduation Cap + Golden Seal */}
                      <div className="w-14 h-14 shrink-0 -mt-1 -mr-1">
                        <svg viewBox="0 0 70 70" className="w-full h-full drop-shadow-xs" aria-hidden="true">
                          <defs>
                            <linearGradient id="cwPaperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ffffff" />
                              <stop offset="100%" stopColor="#fef3c7" />
                            </linearGradient>
                            <linearGradient id="cwGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#fde68a" />
                              <stop offset="60%" stopColor="#d97706" />
                              <stop offset="100%" stopColor="#92400e" />
                            </linearGradient>
                          </defs>

                          {/* Bottom Paper Sheets */}
                          <rect x="22" y="32" width="28" height="18" rx="2" fill="#fde68a" opacity="0.45" transform="rotate(-6 22 32)" />
                          <rect x="20" y="30" width="28" height="18" rx="2" fill="#fef3c7" stroke="#f59e0b" strokeWidth="0.7" opacity="0.7" />

                          {/* Top Document with Folded Corner */}
                          <rect x="18" y="27" width="28" height="18" rx="2" fill="url(#cwPaperGrad)" stroke="#d97706" strokeWidth="0.8" />
                          <line x1="22" y1="31" x2="38" y2="31" stroke="#d97706" strokeWidth="0.9" opacity="0.5" />
                          <line x1="22" y1="35" x2="42" y2="35" stroke="#d97706" strokeWidth="0.9" opacity="0.4" />
                          <line x1="22" y1="39" x2="34" y2="39" stroke="#d97706" strokeWidth="0.9" opacity="0.4" />

                          {/* 3D Graduation Cap on Top */}
                          <g transform="translate(32, 12)">
                            <polygon points="12,4 24,9 12,14 0,9" fill="#d97706" stroke="#92400e" strokeWidth="0.8" />
                            <polygon points="12,5 22,9.5 12,13 2,9.5" fill="#f59e0b" />
                            <rect x="8" y="12" width="8" height="4" rx="1" fill="#b45309" />
                            <path d="M 20 10 L 22 17" stroke="#fde68a" strokeWidth="1.2" strokeLinecap="round" />
                            <circle cx="22" cy="18" r="1.2" fill="#d97706" />
                          </g>

                          {/* Golden Award Ribbon Seal */}
                          <circle cx="48" cy="38" r="7" fill="url(#cwGoldGrad)" stroke="#fef3c7" strokeWidth="1" />
                          <polygon points="46,44 44,52 48,49 52,52 50,44" fill="#d97706" />
                          <polygon points="48,34 50,37 53,37 51,39 52,42 48,40 45,42 46,39 44,37 47,37" fill="#ffffff" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-[14.5px] sm:text-[15px] font-bold text-[#0a1f3d] mb-1.5 leading-snug">
                      2. Coursework Matters
                    </h3>
                    <p className="text-slate-600 text-[11.5px] sm:text-xs leading-relaxed">
                      The Internal Assessment (IA), Extended Essay (EE), and Theory of Knowledge (TOK) carry real weight across both years. A poor IA draft locks in lower marks before students ever walk into the final exam hall.
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2 border-t border-amber-200/60 text-[11px] font-bold text-amber-800">
                    Focus: 20% or more of most grades
                  </div>
                </div>

                {/* ── CARD 3: COMMAND TERMS DECIDE MARKS ── */}
                <div className="w-[84vw] max-w-[315px] md:w-full md:max-w-none shrink-0 snap-center rounded-2xl bg-gradient-to-b from-[#ecf9f2] via-[#f6fcf8] to-[#e4f6ed] border border-emerald-200/80 p-4 sm:p-5 shadow-[0_8px_20px_-6px_rgba(16,185,129,0.08)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div>
                    {/* Top Row: Mini Icon + 3D Compass Graphic */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-100/90 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shadow-2xs">
                        <Compass className="w-4 h-4 text-emerald-700" />
                      </div>

                      {/* 3D Compass Dial + Magnifier Decoder Graphic */}
                      <div className="w-14 h-14 shrink-0 -mt-1 -mr-1">
                        <svg viewBox="0 0 70 70" className="w-full h-full drop-shadow-xs" aria-hidden="true">
                          <defs>
                            <linearGradient id="cmdMintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#d1fae5" />
                              <stop offset="100%" stopColor="#a7f3d0" />
                            </linearGradient>
                            <linearGradient id="cmdNeedleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#059669" />
                              <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                          </defs>

                          {/* Outer Compass Dial */}
                          <circle cx="34" cy="27" r="18" fill="url(#cmdMintGrad)" stroke="#10b981" strokeWidth="1.6" />
                          <circle cx="34" cy="27" r="15" fill="#ffffff" stroke="#a7f3d0" strokeWidth="0.8" />

                          {/* Dial Ticks */}
                          <line x1="34" y1="13" x2="34" y2="16" stroke="#059669" strokeWidth="1.2" />
                          <line x1="34" y1="38" x2="34" y2="41" stroke="#059669" strokeWidth="1.2" />
                          <line x1="20" y1="27" x2="23" y2="27" stroke="#059669" strokeWidth="1.2" />
                          <line x1="45" y1="27" x2="48" y2="27" stroke="#059669" strokeWidth="1.2" />

                          {/* Two-Tone Magnetic Needle */}
                          <polygon points="34,17 37,27 34,25" fill="#047857" />
                          <polygon points="34,17 31,27 34,25" fill="#0284c7" />
                          <polygon points="34,37 37,27 34,29" fill="#94a3b8" />
                          <polygon points="34,37 31,27 34,29" fill="#cbd5e1" />
                          <circle cx="34" cy="27" r="2" fill="#065f46" />

                          {/* Magnifier Inspecting Lines */}
                          <circle cx="45" cy="36" r="10.5" fill="rgba(255,255,255,0.7)" stroke="#059669" strokeWidth="1.8" />
                          <line x1="40" y1="34" x2="48" y2="34" stroke="#059669" strokeWidth="1" />
                          <line x1="40" y1="38" x2="46" y2="38" stroke="#059669" strokeWidth="1" />
                          <rect x="52" y="44" width="4" height="12" rx="2" transform="rotate(-45 52 44)" fill="#047857" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-[14.5px] sm:text-[15px] font-bold text-[#0a1f3d] mb-1.5 leading-snug">
                      3. Command Terms Decide Marks
                    </h3>
                    <p className="text-slate-600 text-[11.5px] sm:text-xs leading-relaxed">
                      Command terms like &ldquo;Discuss&rdquo;, &ldquo;Evaluate&rdquo;, &ldquo;To what extent&rdquo;, and &ldquo;Explain&rdquo; ask for completely different analytical frameworks. We train students to decode the prompt before writing a single word.
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2 border-t border-emerald-200/60 text-[11px] font-bold text-emerald-800">
                    Focus: Precision answer frameworks
                  </div>
                </div>

              </div>

              {/* Mobile Swipe Hint */}
              <div className="flex md:hidden items-center justify-center mt-3 text-slate-500 text-xs font-semibold tracking-wide">
                <span>Swipe to see more</span>
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* ── 6. INTERACTIVE IB GRADE-SCALE GRAPHIC (1–7) ── */}
      <section id="grade-scale-section" className="py-8 sm:py-11 lg:py-14 bg-gradient-to-b from-[#edf4fc] via-[#e4effa] to-[#eef5fd] relative overflow-hidden border-b border-blue-100/60">
        {/* ── Dynamic Ambient Glowing Light Orbs (Optimized for Mobile & Desktop) ── */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
            opacity: [0.45, 0.7, 0.45]
          }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-80 h-80 sm:w-[440px] sm:h-[440px] bg-[#0f4a9b]/25 rounded-full blur-[70px] sm:blur-[110px] pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.65, 0.4]
          }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-14 left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 w-88 h-88 sm:w-[480px] sm:h-[480px] bg-[#38bdf8]/25 rounded-full blur-[75px] sm:blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [0.95, 1.12, 0.95],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[600px] sm:h-[300px] bg-[#0f4a9b]/15 rounded-full blur-[65px] sm:blur-[100px] pointer-events-none"
        />

        {/* ── Floating Luminescent Telemetry Particles (Visible on Both Mobile & Desktop) ── */}
        {[
          { top: '10%', left: '5%', size: 5, dur: 4.8, delay: 0 },
          { top: '14%', right: '5%', size: 5, dur: 5.6, delay: 0.8 },
          { top: '36%', left: '3%', size: 6, dur: 5.2, delay: 1.4 },
          { top: '40%', right: '3%', size: 6, dur: 6.0, delay: 0.3 },
          { top: '86%', left: '6%', size: 5, dur: 4.4, delay: 1.9 },
          { top: '90%', right: '6%', size: 5, dur: 5.8, delay: 2.3 },
        ].map((p, i) => (
          <motion.div
            key={i}
            style={{ top: p.top, left: p.left, right: p.right, width: p.size, height: p.size }}
            animate={{
              y: [0, -18, 0],
              x: [0, 8, 0],
              opacity: [0.45, 1, 0.45],
              scale: [1, 1.35, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: p.dur,
              delay: p.delay,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full bg-[#0f4a9b] shadow-[0_0_12px_#38bdf8] pointer-events-none z-0"
          />
        ))}

        {/* ── High-Contrast Constellation Network SVG (Visible on BOTH Mobile & Desktop) ── */}
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="gradeBeamGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0.3" />
            </linearGradient>
            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── Central Constellation Cluster (Specifically Engineered to be Visible on Mobile) ── */}
          <g stroke="rgba(15,74,155,0.24)" strokeWidth="1.2" fill="none">
            {/* Top framing lines */}
            <line x1="540" y1="70" x2="630" y2="115" />
            <line x1="630" y1="115" x2="720" y2="60" stroke="url(#gradeBeamGrad)" strokeWidth="1.6" />
            <line x1="720" y1="60" x2="810" y2="115" stroke="url(#gradeBeamGrad)" strokeWidth="1.6" />
            <line x1="810" y1="115" x2="900" y2="70" />
            <line x1="540" y1="70" x2="580" y2="200" />
            <line x1="900" y1="70" x2="860" y2="200" />

            {/* Bottom framing lines */}
            <line x1="540" y1="480" x2="640" y2="530" />
            <line x1="640" y1="530" x2="720" y2="490" stroke="url(#gradeBeamGrad)" strokeWidth="1.6" />
            <line x1="720" y1="490" x2="800" y2="535" stroke="url(#gradeBeamGrad)" strokeWidth="1.6" />
            <line x1="800" y1="535" x2="900" y2="485" />

            {/* Central static nodes */}
            <circle cx="540" cy="70" r="3" fill="#0f4a9b" opacity="0.6" />
            <circle cx="720" cy="60" r="3.5" fill="#0f4a9b" opacity="0.7" />
            <circle cx="900" cy="70" r="3" fill="#0f4a9b" opacity="0.6" />
            <circle cx="580" cy="200" r="2.5" fill="#0f4a9b" opacity="0.5" />
            <circle cx="860" cy="200" r="2.5" fill="#0f4a9b" opacity="0.5" />
            <circle cx="540" cy="480" r="3" fill="#0f4a9b" opacity="0.5" />
            <circle cx="720" cy="490" r="3.5" fill="#0f4a9b" opacity="0.6" />
            <circle cx="900" cy="485" r="3" fill="#0f4a9b" opacity="0.5" />
          </g>

          {/* Central Animated Pulsing Radar Nodes (Active on Mobile Viewport) */}
          <g filter="url(#nodeGlow)">
            {/* Mobile Top-Left Node */}
            <motion.circle
              cx="630"
              cy="115"
              r="4.5"
              fill="#0f4a9b"
              animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="630"
              cy="115"
              r="12"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              animate={{ r: [4, 18], opacity: [0.8, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeOut' }}
            />

            {/* Mobile Top-Right Node */}
            <motion.circle
              cx="810"
              cy="115"
              r="4.5"
              fill="#0f4a9b"
              animate={{ r: [4, 6, 4], opacity: [0.75, 1, 0.75] }}
              transition={{ repeat: Infinity, duration: 3.1, ease: 'easeInOut', delay: 0.5 }}
            />
            <motion.circle
              cx="810"
              cy="115"
              r="12"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              animate={{ r: [4, 18], opacity: [0.85, 0] }}
              transition={{ repeat: Infinity, duration: 3.1, ease: 'easeOut', delay: 0.5 }}
            />

            {/* Mobile Bottom-Left Node */}
            <motion.circle
              cx="640"
              cy="530"
              r="4.5"
              fill="#0f4a9b"
              animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.8 }}
            />
            <motion.circle
              cx="640"
              cy="530"
              r="12"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              animate={{ r: [4, 18], opacity: [0.8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeOut', delay: 0.8 }}
            />

            {/* Mobile Bottom-Right Node */}
            <motion.circle
              cx="800"
              cy="535"
              r="4.5"
              fill="#38bdf8"
              animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2.9, ease: 'easeInOut', delay: 1.2 }}
            />
            <motion.circle
              cx="800"
              cy="535"
              r="12"
              fill="none"
              stroke="#0f4a9b"
              strokeWidth="1.5"
              animate={{ r: [4, 18], opacity: [0.8, 0] }}
              transition={{ repeat: Infinity, duration: 2.9, ease: 'easeOut', delay: 1.2 }}
            />
          </g>

          {/* ── Top-Right Desktop Constellation Cluster ── */}
          <g stroke="rgba(15,74,155,0.22)" strokeWidth="1.2" fill="none">
            <line x1="1080" y1="40" x2="1180" y2="90" />
            <line x1="1180" y1="90" x2="1320" y2="40" />
            <line x1="1180" y1="90" x2="1240" y2="180" />
            <line x1="1240" y1="180" x2="1390" y2="150" />
            <line x1="1240" y1="180" x2="1140" y2="240" />
            <line x1="1320" y1="40" x2="1420" y2="100" />
            <line x1="1390" y1="150" x2="1440" y2="220" />
            <line x1="1240" y1="180" x2="1340" y2="280" />
            <line x1="1080" y1="40" x2="1240" y2="180" stroke="url(#gradeBeamGrad)" strokeWidth="1.6" />
            <line x1="1140" y1="240" x2="1280" y2="340" />

            {/* Static Nodes */}
            <circle cx="1080" cy="40" r="3" fill="#0f4a9b" opacity="0.6" />
            <circle cx="1320" cy="40" r="3" fill="#0f4a9b" opacity="0.5" />
            <circle cx="1390" cy="150" r="3" fill="#0f4a9b" opacity="0.6" />
            <circle cx="1140" cy="240" r="2.5" fill="#0f4a9b" opacity="0.5" />
            <circle cx="1280" cy="340" r="2.5" fill="#0f4a9b" opacity="0.5" />
          </g>

          {/* Top-Right Desktop Animated Pulsing Radar Nodes */}
          <g filter="url(#nodeGlow)">
            <motion.circle
              cx="1180"
              cy="90"
              r="4.5"
              fill="#0f4a9b"
              animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="1180"
              cy="90"
              r="12"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              animate={{ r: [4, 18], opacity: [0.8, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeOut' }}
            />

            <motion.circle
              cx="1240"
              cy="180"
              r="5"
              fill="#0f4a9b"
              animate={{ r: [4.5, 6.5, 4.5], opacity: [0.75, 1, 0.75] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut', delay: 0.6 }}
            />
            <motion.circle
              cx="1240"
              cy="180"
              r="14"
              fill="none"
              stroke="#0f4a9b"
              strokeWidth="1.5"
              animate={{ r: [5, 20], opacity: [0.85, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeOut', delay: 0.6 }}
            />

            <motion.circle
              cx="1340"
              cy="280"
              r="4"
              fill="#38bdf8"
              animate={{ r: [3.5, 5.5, 3.5], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 1.2 }}
            />
            <motion.circle
              cx="1340"
              cy="280"
              r="11"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              animate={{ r: [4, 16], opacity: [0.75, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeOut', delay: 1.2 }}
            />
          </g>

          {/* ── Bottom-Left Desktop Constellation Cluster ── */}
          <g stroke="rgba(15,74,155,0.2)" strokeWidth="1.2" fill="none">
            <line x1="20" y1="480" x2="90" y2="520" />
            <line x1="90" y1="520" x2="190" y2="460" stroke="url(#gradeBeamGrad)" strokeWidth="1.6" />
            <line x1="90" y1="520" x2="120" y2="590" />
            <line x1="190" y1="460" x2="280" y2="510" />
            <line x1="190" y1="460" x2="220" y2="390" />
            <line x1="20" y1="480" x2="60" y2="380" />
            <line x1="60" y1="380" x2="160" y2="340" />
            <line x1="160" y1="340" x2="220" y2="390" />

            {/* Static Nodes */}
            <circle cx="20" cy="480" r="3" fill="#0f4a9b" opacity="0.5" />
            <circle cx="280" cy="510" r="3" fill="#0f4a9b" opacity="0.5" />
            <circle cx="220" cy="390" r="3" fill="#0f4a9b" opacity="0.55" />
            <circle cx="60" cy="380" r="2.5" fill="#0f4a9b" opacity="0.45" />
          </g>

          {/* Bottom-Left Desktop Animated Pulsing Radar Nodes */}
          <g filter="url(#nodeGlow)">
            <motion.circle
              cx="90"
              cy="520"
              r="4.5"
              fill="#0f4a9b"
              animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="90"
              cy="520"
              r="12"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              animate={{ r: [4, 18], opacity: [0.8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeOut' }}
            />

            <motion.circle
              cx="190"
              cy="460"
              r="5"
              fill="#0f4a9b"
              animate={{ r: [4.5, 6.5, 4.5], opacity: [0.75, 1, 0.75] }}
              transition={{ repeat: Infinity, duration: 2.7, ease: 'easeInOut', delay: 0.5 }}
            />
            <motion.circle
              cx="190"
              cy="460"
              r="13"
              fill="none"
              stroke="#0f4a9b"
              strokeWidth="1.5"
              animate={{ r: [5, 19], opacity: [0.85, 0] }}
              transition={{ repeat: Infinity, duration: 2.7, ease: 'easeOut', delay: 0.5 }}
            />

            <motion.circle
              cx="160"
              cy="340"
              r="4"
              fill="#38bdf8"
              animate={{ r: [3.5, 5.5, 3.5], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3.3, ease: 'easeInOut', delay: 1 }}
            />
            <motion.circle
              cx="160"
              cy="340"
              r="11"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              animate={{ r: [4, 16], opacity: [0.75, 0] }}
              transition={{ repeat: Infinity, duration: 3.3, ease: 'easeOut', delay: 1 }}
            />
          </g>
        </svg>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with Ustaad Brand Styling */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-7">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0f4a9b]/10 border border-[#0f4a9b]/25 text-[11px] font-extrabold text-[#0f4a9b] uppercase tracking-[0.16em] mb-2 shadow-2xs">
              Realistic Academic Benchmarks
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#0a1f3d] mt-1 mb-2 tracking-tight leading-tight">
              Decoding the IB 1–7 Grade Scale
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
              Every point on the IB 1–7 scale requires distinct cognitive execution. Explore what examiners expect at each grade band without false grade jump promises.
            </p>
          </div>

          {/* Unified Grade Selector Capsule with Ustaad Main Brand Blue (#0f4a9b) */}
          <div className="max-w-2xl mx-auto rounded-[22px] sm:rounded-full bg-white/95 backdrop-blur-md border border-blue-200/80 shadow-[0_8px_30px_rgba(15,74,155,0.1)] p-1.5 flex items-stretch relative mb-7 sm:mb-8">
            {IB_GRADE_LEVELS.map((item, idx) => {
              const isActive = activeGrade === idx;
              return (
                <Fragment key={item.grade}>
                  {idx > 0 && activeGrade !== idx && activeGrade !== idx - 1 && (
                    <div className="w-[1px] my-2 bg-blue-100 shrink-0" />
                  )}
                  <button
                    onClick={() => setActiveGrade(idx)}
                    className={`flex-1 py-2 sm:py-2.5 px-1.5 sm:px-3 text-center flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-br from-[#0f4a9b] to-[#082a5c] text-white rounded-[16px] sm:rounded-full shadow-[0_6px_20px_rgba(15,74,155,0.42)] ring-2 ring-[#0f4a9b]/25 relative z-10'
                        : 'rounded-[16px] sm:rounded-full hover:text-[#0f4a9b] hover:bg-blue-50/70'
                    }`}
                  >
                    <span className={`text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider ${
                      isActive ? 'text-blue-100' : 'text-slate-500'
                    }`}>
                      Grade
                    </span>
                    <span className={`text-lg sm:text-2xl font-black leading-none mt-0.5 ${
                      isActive ? 'text-white drop-shadow-xs' : 'text-slate-800'
                    }`}>
                      {item.grade}
                    </span>

                    {/* Downward indicator triangle caret in Ustaad blue tone */}
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#082a5c] z-20 pointer-events-none" />
                    )}
                  </button>
                </Fragment>
              );
            })}
          </div>

          {/* Cards Carousel Stage with Peeking Cards and Brand Blue Accents */}
          <div className="relative overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 sm:gap-5">
              {/* Left Peeking Card (Full Content, No Dots) */}
              {activeGrade > 0 ? (
                <div
                  onClick={() => setActiveGrade(activeGrade - 1)}
                  className="hidden md:block w-36 lg:w-48 shrink-0 rounded-3xl border border-blue-200/70 bg-white/80 backdrop-blur-xs p-4 lg:p-5 opacity-50 hover:opacity-85 transition-all cursor-pointer scale-95 select-none text-left shadow-xs hover:border-[#0f4a9b]/50 hover:shadow-sm"
                >
                  <span className="text-[10px] font-bold text-[#0f4a9b] uppercase tracking-wider block mb-1">
                    IB Level {IB_GRADE_LEVELS[activeGrade - 1].grade}
                  </span>
                  <h4 className="text-sm font-bold text-slate-700 leading-snug">
                    {IB_GRADE_LEVELS[activeGrade - 1].label}
                  </h4>
                </div>
              ) : (
                <div className="hidden md:block w-36 lg:w-48 shrink-0" />
              )}

              {/* Center Active Card in Ustaad Brand Blue */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={IB_GRADE_LEVELS[activeGrade].grade}
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="w-full max-w-xl rounded-3xl border-2 border-[#0f4a9b] bg-white p-5 sm:p-7 shadow-[0_16px_44px_rgba(15,74,155,0.14)] relative z-10 text-left overflow-hidden"
                >
                  {/* Top Glowing Gradient Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0f4a9b] via-[#38bdf8] to-[#0f4a9b]" />

                  <div className="flex items-center justify-between gap-2 mb-2 pt-1">
                    <span className="text-[11px] sm:text-xs font-bold text-[#0f4a9b] uppercase tracking-wider">
                      IB Level {IB_GRADE_LEVELS[activeGrade].grade} Standard
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[#0f4a9b] to-[#0a3570] text-white shadow-xs shrink-0">
                      {IB_GRADE_LEVELS[activeGrade].percentile}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0a1f3d] mt-1 mb-2.5">
                    {IB_GRADE_LEVELS[activeGrade].label}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    {IB_GRADE_LEVELS[activeGrade].criteria}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Right Peeking Card (Full Content, No Dots) */}
              {activeGrade < IB_GRADE_LEVELS.length - 1 ? (
                <div
                  onClick={() => setActiveGrade(activeGrade + 1)}
                  className="hidden md:block w-36 lg:w-48 shrink-0 rounded-3xl border border-blue-200/70 bg-white/80 backdrop-blur-xs p-4 lg:p-5 opacity-50 hover:opacity-85 transition-all cursor-pointer scale-95 select-none text-left shadow-xs hover:border-[#0f4a9b]/50 hover:shadow-sm"
                >
                  <span className="text-[10px] font-bold text-[#0f4a9b] uppercase tracking-wider block mb-1">
                    IB Level {IB_GRADE_LEVELS[activeGrade + 1].grade}
                  </span>
                  <h4 className="text-sm font-bold text-slate-700 leading-snug">
                    {IB_GRADE_LEVELS[activeGrade + 1].label}
                  </h4>
                </div>
              ) : (
                <div className="hidden md:block w-36 lg:w-48 shrink-0" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. IB SUBJECTS WE TEACH (ANIMATED INTERACTIVE STUDIO: ONE-SCREEN FIT) ── */}
      <section id="subjects" className="py-7 sm:py-9 lg:py-11 bg-[#F8FAFC] border-y border-gray-200/60 relative overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-500/5 via-amber-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header - Compact to fit one screen */}
          <div className="text-center max-w-2xl mx-auto mb-3.5 sm:mb-5">
            <span className="text-[11px] font-extrabold text-[#C7A24A] uppercase tracking-widest inline-block">
              Specialist Curriculum Coverage
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#0a1f3d] mt-1 mb-1 tracking-tight leading-tight">
              IB Tutors in Dubai for Every Subject
            </h2>
            <p className="text-gray-500 text-xs sm:text-[13.5px] leading-normal">
              Specialist tutors covering both Standard (SL) and Higher Level (HL). Select a subject to review syllabus depth and IA criteria.
            </p>
          </div>

          {/* Mobile Subject Chips Strip (< lg) */}
          <div className="flex lg:hidden overflow-x-auto no-scrollbar gap-1.5 pb-2 mb-3 snap-x">
            {IB_SUBJECTS.map((subj, idx) => {
              const isActive = activeSubjectIdx === idx;
              return (
                <button
                  key={subj.id}
                  onClick={() => {
                    setActiveSubjectIdx(idx);
                    setIsSubjectHovered(true);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all snap-start shrink-0 border ${
                    isActive
                      ? 'bg-[#0f4a9b] text-white border-[#0f4a9b] shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="w-4 h-4 flex items-center justify-center shrink-0">
                    {subj.icon}
                  </span>
                  <span>{subj.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop 6-Card Selector + Active Deep-Dive Showcase */}
          <div
            onMouseEnter={() => setIsSubjectHovered(true)}
            onMouseLeave={() => setIsSubjectHovered(false)}
            className="grid lg:grid-cols-[1fr_1.35fr] gap-3.5 lg:gap-5 items-stretch"
          >
            {/* Left: 6 Subject Interactive Tiles (Desktop lg+) */}
            <div className="hidden lg:grid grid-cols-2 gap-2">
              {IB_SUBJECTS.map((subj, idx) => {
                const isActive = activeSubjectIdx === idx;
                return (
                  <motion.div
                    key={subj.id}
                    onClick={() => setActiveSubjectIdx(idx)}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className={`relative p-3 rounded-2xl cursor-pointer border transition-all duration-200 flex flex-col justify-between overflow-hidden min-h-[105px] ${
                      isActive
                        ? 'bg-white border-[#0f4a9b] shadow-[0_6px_20px_rgba(15,74,155,0.12)] ring-1 ring-[#0f4a9b]/30'
                        : 'bg-white/80 border-slate-200/90 hover:bg-white hover:border-[#0f4a9b]/40 hover:shadow-2xs'
                    }`}
                  >
                    {/* Top Row: Icon + Badges */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-xl bg-[#0a1f3d] flex items-center justify-center shrink-0">
                        {subj.icon}
                      </div>
                      <div className="flex items-center gap-1">
                        {subj.badges.map((b) => (
                          <span
                            key={b}
                            className={`px-1.5 py-0.5 rounded text-[10px] font-black ${
                              isActive
                                ? 'bg-[#0f4a9b] text-white'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Middle: Title & Brief */}
                    <div>
                      <h3 className={`text-[13.5px] font-bold leading-snug mb-0.5 transition-colors ${
                        isActive ? 'text-[#0f4a9b]' : 'text-[#0a1f3d]'
                      }`}>
                        {subj.title}
                      </h3>
                      <p className="text-[11.5px] text-gray-500 leading-snug">
                        {subj.line}
                      </p>
                    </div>

                    {/* Active Progress Bar Timer */}
                    {isActive && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 4.2, ease: 'linear' }}
                        className="absolute bottom-0 left-0 h-0.5 bg-[#0f4a9b]"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Dynamic Interactive Showcase Card (Desktop & Mobile) */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={IB_SUBJECTS[activeSubjectIdx].id}
                  initial={{ opacity: 0, y: 10, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="h-full rounded-2xl sm:rounded-3xl bg-white border border-blue-100 shadow-[0_8px_30px_rgba(15,74,155,0.08)] p-4 sm:p-5 lg:p-6 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Subtle top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-blue-400" />

                  {/* Top Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-[#0a1f3d] flex items-center justify-center shrink-0 shadow-xs">
                          {IB_SUBJECTS[activeSubjectIdx].icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-base sm:text-lg font-black text-[#0a1f3d]">
                              {IB_SUBJECTS[activeSubjectIdx].title}
                            </h3>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#0f4a9b]/10 text-[#0f4a9b]">
                              SL &amp; HL
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">
                            {IB_SUBJECTS[activeSubjectIdx].line}
                          </p>
                        </div>
                      </div>

                      {/* Step Indicator */}
                      <div className="hidden sm:flex items-center gap-1 text-xs text-gray-400 font-mono">
                        <span className="font-bold text-[#0f4a9b]">0{activeSubjectIdx + 1}</span>
                        <span>/</span>
                        <span>06</span>
                      </div>
                    </div>

                    {/* Middle: 2 Modules (Key Focus & IA Mastery) */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-3.5">
                      {/* Module 1: Core Curriculum Focus */}
                      <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-[#0f4a9b] uppercase tracking-wider block mb-1">
                            Syllabus Depth
                          </span>
                          <p className="text-xs text-gray-700 leading-relaxed font-medium">
                            Past paper exam techniques tailored to official mark schemes.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2.5">
                          {IB_SUBJECTS[activeSubjectIdx].topics.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-md bg-white border border-slate-200/90 text-[10.5px] font-medium text-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Module 2: IA Moderation Focus */}
                      <div className="bg-amber-50/40 rounded-xl p-3 border border-amber-200/60 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1">
                              <FileText className="w-3 h-3 text-amber-600" />
                              IA Coursework Focus (20%)
                            </span>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {IB_SUBJECTS[activeSubjectIdx].iaSummary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <a
                      href={IB_SUBJECTS[activeSubjectIdx].href}
                      className="inline-flex items-center text-xs sm:text-[13px] font-bold text-[#0f4a9b] hover:text-[#0a3a79] transition-colors hover:underline"
                    >
                      <span>Explore {IB_SUBJECTS[activeSubjectIdx].shortTitle} Page</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. BEYOND EXAMS: IA, EE & TOK (3 THEMATIC CARDS MATCHING DESIGN REFERENCE) ── */}
      <section id="diploma-core" className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#f8faff] via-[#f5f8fd] to-[#f8faff] relative overflow-hidden">
        {/* ── 3D Isometric Ambient Cubes on Edges ── */}
        {/* Left Translucent Cyan/Gold 3D Cube */}
        <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 pointer-events-none opacity-85 select-none hidden lg:block">
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_35px_rgba(37,99,235,0.14)]">
            <polygon points="100,20 170,60 100,100 30,60" fill="url(#cubeTopGrad)" />
            <polygon points="30,60 100,100 100,180 30,140" fill="url(#cubeLeftGrad)" />
            <polygon points="100,100 170,60 170,140 100,180" fill="url(#cubeRightGrad)" />
            <defs>
              <linearGradient id="cubeTopGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#dbeafe" />
                <stop offset="60%" stopColor="#bfdbfe" />
                <stop offset="100%" stopColor="#fef08a" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="cubeLeftGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="cubeRightGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Right Translucent Purple 3D Cube */}
        <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 pointer-events-none opacity-80 select-none hidden lg:block">
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_35px_rgba(126,34,206,0.14)]">
            <polygon points="100,20 170,60 100,100 30,60" fill="url(#cubePurpleTop)" />
            <polygon points="30,60 100,100 100,180 30,140" fill="url(#cubePurpleLeft)" />
            <polygon points="100,100 170,60 170,140 100,180" fill="url(#cubePurpleRight)" />
            <defs>
              <linearGradient id="cubePurpleTop" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f3e8ff" />
                <stop offset="100%" stopColor="#e9d5ff" />
              </linearGradient>
              <linearGradient id="cubePurpleLeft" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d8b4fe" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="cubePurpleRight" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e9d5ff" />
                <stop offset="100%" stopColor="#d8b4fe" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-9 sm:mb-11">
            <span className="text-[11px] sm:text-xs font-extrabold text-[#0f4a9b] uppercase tracking-[0.18em] inline-block mb-1.5">
              The Diploma Core &amp; Moderation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] tracking-tight">
              Beyond Exams: IA, EE &amp; TOK Mentoring
            </h2>
            <p className="text-gray-600 text-xs sm:text-[14.5px] leading-relaxed mt-2.5 max-w-2xl mx-auto font-medium">
              Coursework is where high-achieving students protect their predictions. We coach students through the scholarly rigour expected by official IBO moderators.
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pt-1 pb-3 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x">
            {/* ── CARD 1: IA (Internal Assessment) ── */}
            <div className="w-[84vw] sm:w-[350px] md:w-auto shrink-0 snap-center md:shrink bg-gradient-to-b from-[#e0f0fd] via-[#ebf4fd] to-[#f4f9fe] rounded-3xl p-6 sm:p-7 border border-[#bfdbfe]/90 shadow-[0_12px_32px_rgba(37,99,235,0.07)] flex flex-col justify-between relative overflow-hidden transition-transform duration-200 hover:-translate-y-1">
              {/* Scientific Coordinate Graph Watermark */}
              <svg className="absolute top-2 right-2 w-36 h-28 pointer-events-none opacity-45 overflow-visible" viewBox="0 0 140 100" fill="none">
                <line x1="20" y1="12" x2="20" y2="85" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <line x1="20" y1="85" x2="135" y2="85" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <line x1="20" y1="50" x2="135" y2="50" stroke="#3b82f6" strokeWidth="0.7" strokeDasharray="2 2" opacity="0.3" />
                <line x1="60" y1="12" x2="60" y2="85" stroke="#3b82f6" strokeWidth="0.7" strokeDasharray="2 2" opacity="0.3" />
                <line x1="100" y1="12" x2="100" y2="85" stroke="#3b82f6" strokeWidth="0.7" strokeDasharray="2 2" opacity="0.3" />
                {/* Bell/Data Curve */}
                <path d="M 20 80 Q 40 75 55 55 T 90 25 T 120 40 T 135 30" stroke="#2563eb" strokeWidth="2" fill="none" opacity="0.75" />
                <path d="M 20 80 Q 40 75 55 55 T 90 25 T 120 40 T 135 30 L 135 85 L 20 85 Z" fill="url(#iaCurveGrad)" opacity="0.28" />
                <circle cx="90" cy="25" r="3" fill="#2563eb" opacity="0.8" />
                <circle cx="55" cy="55" r="2.5" fill="#3b82f6" opacity="0.7" />
                <defs>
                  <linearGradient id="iaCurveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <div>
                <div className="w-11 h-11 rounded-2xl bg-white/90 border border-blue-200/80 shadow-2xs text-[#0f4a9b] flex items-center justify-center font-bold mb-4">
                  <FlaskConical className="w-5 h-5 text-[#0f4a9b]" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1f3d] mb-2.5">
                  1. Internal Assessment (IA)
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-6 font-medium">
                  From a sharp, defensible research question to clean data analysis, we help students refine drafts to match examiner rubrics.
                </p>
              </div>

              <ul className="text-xs text-slate-700 space-y-2 pt-4 border-t border-blue-200/70 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Research question scoping
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Data processing and graphs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Criterion-by-criterion review
                </li>
              </ul>
            </div>

            {/* ── CARD 2: EE (Extended Essay) ── */}
            <div className="w-[84vw] sm:w-[350px] md:w-auto shrink-0 snap-center md:shrink bg-gradient-to-b from-[#fdf4dc] via-[#faedd0] to-[#fbf1d8] rounded-3xl p-6 sm:p-7 border border-[#ebd29b] shadow-[0_12px_32px_rgba(217,119,6,0.07)] flex flex-col justify-between relative overflow-hidden transition-transform duration-200 hover:-translate-y-1">
              {/* Scholarly Globe on Stand Watermark */}
              <svg className="absolute top-1 right-2 w-32 h-32 pointer-events-none opacity-45 overflow-visible" viewBox="0 0 100 100" fill="none">
                <ellipse cx="50" cy="90" rx="20" ry="4" stroke="#d97706" strokeWidth="1.5" opacity="0.5" />
                <line x1="50" y1="88" x2="50" y2="76" stroke="#d97706" strokeWidth="2" opacity="0.6" />
                <path d="M 28 50 A 26 26 0 0 0 50 76" stroke="#d97706" strokeWidth="2" opacity="0.6" fill="none" />
                <circle cx="50" cy="46" r="24" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" opacity="0.6" />
                <ellipse cx="50" cy="46" rx="14" ry="24" stroke="#b45309" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                <line x1="26" y1="46" x2="74" y2="46" stroke="#b45309" strokeWidth="1" opacity="0.5" />
                <path d="M 30 36 Q 50 40 70 36" stroke="#b45309" strokeWidth="1" opacity="0.4" fill="none" />
                <path d="M 30 56 Q 50 52 70 56" stroke="#b45309" strokeWidth="1" opacity="0.4" fill="none" />
                <path d="M 42 32 Q 48 30 54 35 Q 52 42 46 45 Q 40 40 42 32 Z" fill="#d97706" opacity="0.35" />
                <path d="M 54 48 Q 62 46 64 54 Q 58 60 52 56 Z" fill="#d97706" opacity="0.3" />
              </svg>

              <div>
                <div className="w-11 h-11 rounded-2xl bg-white/90 border border-amber-300/80 shadow-2xs text-[#b45309] flex items-center justify-center font-bold mb-4">
                  <BookOpen className="w-5 h-5 text-[#b45309]" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1f3d] mb-2.5">
                  2. Extended Essay (EE)
                </h3>
                <p className="text-amber-950/80 text-xs sm:text-[13px] leading-relaxed mb-6 font-medium">
                  Writing a 4,000-word independent paper requires academic discipline. We help students select a viable topic, structure secondary arguments, and polish scholarly formatting.
                </p>
              </div>

              <ul className="text-xs text-amber-950/90 space-y-2 pt-4 border-t border-amber-300/70 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" /> Topic &amp; bibliography framing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" /> Analytical argument structure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" /> Criterion E engagement viva coaching
                </li>
              </ul>
            </div>

            {/* ── CARD 3: TOK (Theory of Knowledge - Light Pastel Lilac/Purple) ── */}
            <div className="w-[84vw] sm:w-[350px] md:w-auto shrink-0 snap-center md:shrink bg-gradient-to-b from-[#f3eafa] via-[#f7f0fc] to-[#fbf7fe] rounded-3xl p-6 sm:p-7 border border-[#e2cff7] shadow-[0_12px_32px_rgba(147,51,234,0.07)] flex flex-col justify-between relative overflow-hidden transition-transform duration-200 hover:-translate-y-1">
              {/* Concentric Labyrinth / Maze Watermark */}
              <svg className="absolute -top-3 -right-3 w-36 h-36 pointer-events-none opacity-30 overflow-visible" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="44" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="35 8 20 6" />
                <circle cx="50" cy="50" r="36" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="25 6 15 5 20 6" />
                <circle cx="50" cy="50" r="28" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="18 5 25 5" />
                <circle cx="50" cy="50" r="20" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="12 4 18 4" />
                <circle cx="50" cy="50" r="12" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="8 3 10 3" />
                <circle cx="50" cy="50" r="4" fill="#a855f7" />
                <line x1="50" y1="6" x2="50" y2="14" stroke="#a855f7" strokeWidth="1.5" />
                <line x1="50" y1="22" x2="50" y2="30" stroke="#a855f7" strokeWidth="1.5" />
                <line x1="78" y1="50" x2="86" y2="50" stroke="#a855f7" strokeWidth="1.5" />
                <line x1="14" y1="50" x2="22" y2="50" stroke="#a855f7" strokeWidth="1.5" />
              </svg>

              {/* Concentric Radar Circle Badge on Bottom-Right */}
              <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-emerald-50 border border-emerald-400/80 shadow-2xs flex items-center justify-center pointer-events-none">
                <span className="w-6 h-6 rounded-full border-2 border-emerald-500/80 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </span>
              </div>

              <div>
                <div className="w-11 h-11 rounded-2xl bg-white/90 border border-purple-200/90 shadow-2xs text-[#7e22ce] flex items-center justify-center font-bold mb-4">
                  <Brain className="w-5 h-5 text-[#7e22ce]" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1f3d] mb-2.5">
                  3. Theory of Knowledge (TOK)
                </h3>
                <p className="text-purple-950/80 text-xs sm:text-[13px] leading-relaxed mb-6 font-medium">
                  Coaching for the 1,600-word TOK Essay and the 3-object TOK Exhibition. We help students frame knowledge questions, test perspectives and link each object to its prompt.
                </p>
              </div>

              <ul className="text-xs text-purple-950/90 space-y-2 pt-4 border-t border-purple-200/80 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" /> Prescribed title deconstruction
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" /> Areas of Knowledge (AOK) linkage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" /> 3-object exhibition curation
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="flex md:hidden items-center justify-center mt-3 text-slate-500 text-xs font-semibold tracking-wide">
            <span>Swipe to see more</span>
          </div>
        </div>
      </section>

      {/* ── 9. HOW IT WORKS (WHITE BG + USTAAD BLUE CARDS + SINGLE DESKTOP SCREEN FIT) ── */}
      <section className="py-7 sm:py-9 lg:py-10 bg-white relative overflow-hidden border-b border-slate-100">
        {/* Subtle decorative background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 lg:mb-7">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-[#0f4a9b]/10 border border-[#0f4a9b]/25 text-[10.5px] font-extrabold text-[#0f4a9b] uppercase tracking-[0.16em] mb-1 shadow-2xs">
              The 3-Step Tutoring Process
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-black text-[#0a1f3d] tracking-tight mt-0.5 mb-1.5">
              How Ustaad IB Tutoring Works
            </h2>
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-lg mx-auto font-medium">
              A systematic, low-friction framework designed to turn confusion into confident criterion execution.
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 relative items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pt-1 pb-3 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x">
            {/* Desktop Connecting Line between cards */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#0f4a9b]/20 via-[#f0c96a]/40 to-[#0f4a9b]/20 -translate-y-8 z-0" />

            {/* Step 1: Diagnose */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center md:shrink relative z-10 bg-gradient-to-br from-[#0f4a9b] via-[#0c3c80] to-[#082a5c] rounded-2xl lg:rounded-3xl p-4 sm:p-5 border border-blue-400/25 shadow-[0_12px_28px_rgba(15,74,155,0.18)] text-center flex flex-col items-center justify-between min-h-[220px] lg:min-h-[235px] transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle card sheen */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-cyan-200 flex items-center justify-center font-black text-lg mb-2.5 shadow-inner">
                  1
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 tracking-tight">Diagnose</h3>
                <p className="text-blue-100/90 text-xs sm:text-[12.5px] leading-snug font-medium">
                  We find where marks are leaking—whether in fundamental syllabus concepts, command-term execution, or incomplete coursework drafts.
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-white/10 w-full text-[10px] font-bold text-cyan-200 uppercase tracking-wider">
                Step 01 • Syllabus Audit
              </div>
            </motion.div>

            {/* Step 2: Rebuild */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center md:shrink relative z-10 bg-gradient-to-br from-[#0f4a9b] via-[#0c3c80] to-[#082a5c] rounded-2xl lg:rounded-3xl p-4 sm:p-5 border border-amber-300/30 shadow-[0_12px_28px_rgba(15,74,155,0.18)] text-center flex flex-col items-center justify-between min-h-[220px] lg:min-h-[235px] transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle gold sheen */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f0c96a]/50 to-transparent" />

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-[#f0c96a]/20 border border-[#f0c96a]/40 text-[#fde68a] flex items-center justify-center font-black text-lg mb-2.5 shadow-inner">
                  2
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 tracking-tight">Rebuild</h3>
                <p className="text-blue-100/90 text-xs sm:text-[12.5px] leading-snug font-medium">
                  Weak topics are rebuilt in short steps, each one checked with a fresh question before moving on.
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-white/10 w-full text-[10px] font-bold text-[#fde68a] uppercase tracking-wider">
                Step 02 • Conceptual Mastery
              </div>
            </motion.div>

            {/* Step 3: Practise */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center md:shrink relative z-10 bg-gradient-to-br from-[#0f4a9b] via-[#0c3c80] to-[#082a5c] rounded-2xl lg:rounded-3xl p-4 sm:p-5 border border-emerald-300/30 shadow-[0_12px_28px_rgba(15,74,155,0.18)] text-center flex flex-col items-center justify-between min-h-[220px] lg:min-h-[235px] transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle emerald sheen */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-300/40 text-emerald-200 flex items-center justify-center font-black text-lg mb-2.5 shadow-inner">
                  3
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 tracking-tight">Practise</h3>
                <p className="text-blue-100/90 text-xs sm:text-[12.5px] leading-snug font-medium">
                  Timed past-paper questions marked strictly against current IBO criteria, training speed, precision, and examiner expectations.
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-white/10 w-full text-[10px] font-bold text-emerald-200 uppercase tracking-wider">
                Step 03 • Exam Execution
              </div>
            </motion.div>
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="flex md:hidden items-center justify-center mt-2.5 text-slate-500 text-xs font-semibold tracking-wide">
            <span>Swipe to see more</span>
          </div>
        </div>
      </section>

      {/* ── 10. CHOOSE YOUR PROGRAMME (2 CARDS) ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0f4a9b] uppercase tracking-wider">
              Targeted Academic Stages
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mt-2 mb-3">
              Choose Your IB Programme
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Specialist tuition tailored to the distinct developmental demands of MYP and the Diploma.
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pt-1 pb-3 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x">
            {/* DP */}
            <div className="w-[84vw] sm:w-[380px] md:w-auto shrink-0 snap-center md:shrink bg-[#FAFBFD] rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:border-[#0f4a9b]/40 transition-all duration-300">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-[#0f4a9b]/10 text-[#0f4a9b] mb-4">
                  Years 12–13 · Ages 16–18
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0a1f3d] mb-3">
                  IB Diploma Programme (DP)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Standard Level (SL) and Higher Level (HL) tutoring, Internal Assessment coaching, Extended Essay mentoring, TOK, and intensive past-paper preparation for May and November exam sessions.
                </p>
                <div className="space-y-2 text-xs text-gray-700 mb-6">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0f4a9b]" /> Full SL and HL syllabus coverage</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0f4a9b]" /> Rigorous coursework review before final moderation</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0f4a9b]" /> Synchronised with school mock exam calendars</div>
                </div>
              </div>
              <a
                href="/dp-hl"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0f4a9b] hover:bg-[#0a3a79] text-white text-xs font-bold transition"
              >
                <span>Explore DP Tutoring</span>
              </a>
            </div>

            {/* MYP */}
            <div className="w-[84vw] sm:w-[380px] md:w-auto shrink-0 snap-center md:shrink bg-[#FAFBFD] rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:border-[#0f4a9b]/40 transition-all duration-300">
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-extrabold mb-4"
                  style={{ color: '#7A5E10', backgroundColor: 'rgba(199, 162, 74, 0.15)' }}
                >
                  Years 7–11 · Ages 11–16
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0a1f3d] mb-3">
                  IB Middle Years Programme (MYP)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Sciences, Mathematics, and inquiry skills structured around MYP Criteria A, B, C, and D. Builds the inquiry and writing skills the Diploma expects from day one.
                </p>
                <div className="space-y-2 text-xs text-gray-700 mb-6">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#A8892A]" /> Criterion-based inquiry and lab reporting</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#A8892A]" /> MYP eAssessment past-paper technique</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#A8892A]" /> Smooth transition bridge into DP Year 12</div>
                </div>
              </div>
              <a
                href="/myp"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0f4a9b] hover:bg-[#0a3a79] text-white text-xs font-bold transition"
              >
                <span>Explore MYP Tutoring</span>
              </a>
            </div>
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="flex md:hidden items-center justify-center mt-3 text-slate-500 text-xs font-semibold tracking-wide">
            <span>Swipe to see more</span>
          </div>
        </div>
      </section>

      {/* ── 11. MOVING INTO IB? (TRANSITION BRIDGE BLOCK - MODERN UI & SINGLE-SCREEN FIT) ── */}
      <section className="py-7 sm:py-9 lg:py-11 bg-gradient-to-b from-[#f8fafc] via-[#edf4fc] to-[#f8fafc] border-y border-slate-200/60 relative overflow-hidden">
        {/* Decorative background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/95 backdrop-blur-md border border-blue-200/80 rounded-[30px] sm:rounded-[36px] p-5 sm:p-7 lg:p-8 shadow-[0_16px_45px_rgba(15,74,155,0.08)] relative overflow-hidden">
            {/* Top Tri-Tone Transition Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-[#0f4a9b] to-[#22b8cd]" />

            {/* Header Lockup */}
            <div className="mb-4 sm:mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0f4a9b]/10 border border-[#0f4a9b]/25 text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-[#0f4a9b] mb-1.5 shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#0f4a9b]" />
                <span>Curriculum Transition Guide</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-[27px] font-black text-[#0a1f3d] tracking-tight mb-1.5 leading-snug">
                Moving into IB from British or American Curricula?
              </h2>
              <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-medium">
                Students arriving from British (IGCSE / GCSE) or American curricula are rarely behind on content. They are behind on how the IB judges the work. That gap closes quickly once it is named.
              </p>
            </div>

            {/* 2-Column Bridge Contrast Cards */}
            <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 mb-4">
              {/* Prior Habit Card */}
              <div className="bg-gradient-to-br from-slate-50 to-amber-50/40 p-4 rounded-2xl border border-amber-200/70 shadow-2xs flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-extrabold text-[#0a1f3d] text-xs sm:text-[13px] block">
                      British / American Prior Habit:
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800 shrink-0">
                      Recall Focus
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed font-medium">
                    Memorising formula sheets and reproducing model answers for direct factual marks.
                  </p>
                </div>
              </div>

              {/* IB Requirement Card (Ustaad Royal Blue) */}
              <div className="bg-gradient-to-br from-[#0f4a9b] to-[#0a3570] text-white p-4 rounded-2xl border border-[#0f4a9b] shadow-[0_8px_25px_rgba(15,74,155,0.2)] flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-extrabold text-white text-xs sm:text-[13px] block">
                      The IB Requirement:
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/20 text-cyan-200 shrink-0">
                      Synthesis Focus
                    </span>
                  </div>
                  <p className="text-blue-100 text-xs sm:text-[12.5px] leading-relaxed font-medium">
                    Synthesising multi-variable concepts, evaluating assumptions, and showing full derivations.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Bridge Insight Note */}
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5 bg-blue-50/60 rounded-xl px-3.5 py-2.5 border border-blue-100/70">
              <span className="w-2 h-2 rounded-full bg-[#0f4a9b] shrink-0" />
              <p className="text-[11.5px] sm:text-xs text-[#0a1f3d] font-semibold leading-normal">
                Our Dubai tutors focus on this switch, so students learn to work the way IB examiners expect from the first term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. TUTOR SPOTLIGHT (TABRAIZ KHAN - 1-SCREEN MOBILE FIT & MATCHING DESIGN REFERENCE) ── */}
      <section className="py-6 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f3f8fd] via-[#ecf4fc] to-[#f5f9fd] relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header (Compact on mobile to guarantee 1-screen fit) */}
          <div className="text-center max-w-2xl mx-auto mb-3.5 sm:mb-9 lg:mb-11">
            <span className="text-[10px] sm:text-xs font-extrabold text-[#0f4a9b] uppercase tracking-[0.18em] inline-block mb-1">
              Faculty Spotlight
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] tracking-tight">
              Meet a Verified IB Specialist
            </h2>
            <p className="text-gray-600 text-[11px] sm:text-[14.5px] leading-relaxed mt-1 sm:mt-2.5 max-w-xl mx-auto font-medium hidden sm:block">
              Every Ustaad tutor is vetted and background-checked before teaching.
            </p>
          </div>

          {/* Main Card with Custom Math & Rocket Watermarks */}
          <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-[36px] p-4 sm:p-8 lg:p-10 shadow-[0_16px_50px_rgba(15,74,155,0.06)] max-w-4xl mx-auto relative overflow-hidden">
            {/* ── Left Watermark: Math & Calculus Formulas ── */}
            <svg
              className="absolute top-4 left-1 w-36 h-36 sm:w-52 sm:h-52 pointer-events-none opacity-20 sm:opacity-25 overflow-visible select-none"
              viewBox="0 0 160 160"
              fill="none"
              aria-hidden="true"
            >
              <text x="8" y="32" fill="#64748b" fontSize="22" fontFamily="serif" fontStyle="italic">∫</text>
              <text x="24" y="32" fill="#64748b" fontSize="11" fontFamily="monospace">f(x)dx</text>
              <text x="68" y="24" fill="#64748b" fontSize="12" fontFamily="sans-serif">+ √x²</text>
              <line x1="8" y1="110" x2="8" y2="48" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="8" y1="110" x2="85" y2="110" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 8 100 Q 35 95 48 70 T 82 50" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
              <text x="6" y="145" fill="#64748b" fontSize="10" fontFamily="sans-serif">maths</text>
              <text x="46" y="140" fill="#64748b" fontSize="14" fontFamily="serif" fontStyle="italic">∑</text>
              <text x="62" y="142" fill="#64748b" fontSize="9" fontFamily="monospace">n=1</text>
            </svg>

            {/* ── Top-Right Watermark: 3D Isometric Cube ── */}
            <svg
              className="absolute top-4 right-16 sm:right-32 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none opacity-20 sm:opacity-25 overflow-visible select-none"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <polygon points="50,12 85,30 50,48 15,30" stroke="#3b82f6" strokeWidth="1.2" fill="#dbeafe" fillOpacity="0.5" />
              <polygon points="15,30 50,48 50,86 15,68" stroke="#3b82f6" strokeWidth="1.2" fill="#bfdbfe" fillOpacity="0.4" />
              <polygon points="50,48 85,30 85,68 50,86" stroke="#3b82f6" strokeWidth="1.2" fill="#93c5fd" fillOpacity="0.4" />
            </svg>

            {/* ── Bottom-Right Watermark: Hand-Drawn Rocket Spacecraft Sketch ── */}
            <svg
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-36 h-36 sm:w-52 sm:h-52 pointer-events-none opacity-20 sm:opacity-25 overflow-visible select-none"
              viewBox="0 0 160 160"
              fill="none"
              aria-hidden="true"
            >
              {/* Rocket body */}
              <path d="M 60 120 C 65 95 85 70 125 50 C 105 90 80 110 55 115 Z" stroke="#0f4a9b" strokeWidth="1.5" />
              <path d="M 125 50 L 138 37 C 130 55 125 50 125 50 Z" stroke="#0f4a9b" strokeWidth="1.5" fill="#0f4a9b" fillOpacity="0.25" />
              <circle cx="95" cy="80" r="8" stroke="#0f4a9b" strokeWidth="1.5" />
              <circle cx="95" cy="80" r="5" stroke="#0f4a9b" strokeWidth="1" />
              {/* Fins */}
              <path d="M 65 110 L 45 125 L 55 105 Z" stroke="#0f4a9b" strokeWidth="1.5" />
              <path d="M 85 90 L 105 70 L 85 75 Z" stroke="#0f4a9b" strokeWidth="1.5" />
              {/* Exhaust trail */}
              <path d="M 55 115 Q 40 130 28 148 Q 48 135 60 120" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 2" />
            </svg>

            {/* ── MOBILE COMPACT HEADER LOCKUP (< md): Photo + Name + Rating Side-by-Side ── */}
            <div className="flex md:hidden items-center gap-3.5 mb-3 relative z-10">
              <div className="relative shrink-0 rounded-2xl p-0.5 border-2 border-[#38a169] bg-white shadow-xs">
                <div className="w-18 h-18 rounded-[13px] overflow-hidden bg-slate-100">
                  <img
                    src="/images/tutors/tabraiz-khan.jpg"
                    alt="Tabraiz Khan, Cambridge Certified IB Maths and Physics Tutor at Ustaad teaching Dubai students"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="text-lg font-black text-[#0a1f3d] leading-tight">Tabraiz Khan</h3>
                  <div className="flex items-center gap-1 text-amber-500 text-[11px] font-bold">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                    <span>5.0</span>
                  </div>
                </div>
                <div className="mt-1">
                  <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#e6f4ea] text-[#137333] border border-[#ceead6] shadow-2xs">
                    Verified IB Specialist
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[210px_1fr] gap-6 lg:gap-8 items-center relative z-10">
              {/* DESKTOP Tutor Photo with Vibrant Green Border (hidden on mobile, replaced by lockup above) */}
              <div className="hidden md:flex text-center md:text-left flex-col items-center md:items-start">
                <div className="relative inline-block rounded-[26px] p-1 border-[3px] border-[#38a169] bg-white shadow-md">
                  <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-[20px] overflow-hidden bg-slate-100">
                    <img
                      src="/images/tutors/tabraiz-khan.jpg"
                      alt="Tabraiz Khan, Cambridge Certified IB Maths and Physics Tutor at Ustaad teaching Dubai students"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#e6f4ea] text-[#137333] border border-[#ceead6] shadow-2xs">
                    Verified IB Specialist
                  </span>
                </div>
              </div>

              {/* Bio & Credentials */}
              <div>
                {/* Desktop Name & Rating Header */}
                <div className="hidden md:flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-2xl sm:text-[28px] font-black text-[#0a1f3d]">Tabraiz Khan</h3>
                  <div className="flex items-center gap-1 text-amber-500 text-xs sm:text-[13px] font-bold">
                    <Star className="w-4 h-4 fill-current text-amber-500" />
                    <span>5.0 (Google Verified)</span>
                  </div>
                </div>

                <p className="text-[9.5px] sm:text-[11.5px] font-black text-slate-700 tracking-wider uppercase mb-2 sm:mb-3">
                  CAMBRIDGE CERTIFIED EDUCATOR · MSC IN APPLIED STATISTICS · 9+ YEARS EXPERIENCE
                </p>

                <p className="text-slate-600 text-[11px] sm:text-[13.5px] leading-relaxed mb-3 sm:mb-4 font-normal">
                  Tabraiz teaches IB Maths (AA and AI) and IB Physics. His MSc in Applied Statistics shapes his IA work: choosing a model, testing how well it fits the data and explaining what the results show.
                </p>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs mb-3.5 sm:mb-5">
                  <div className="bg-white/85 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-900 block mb-0.5">Subjects:</span>
                    <span className="text-[11px] sm:text-[12.5px] font-medium text-slate-700 block leading-tight">IB Maths AA/AI, IB Physics, Statistics</span>
                  </div>
                  <div className="bg-white/85 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-900 block mb-0.5">Expertise:</span>
                    <span className="text-[11px] sm:text-[12.5px] font-medium text-slate-700 block leading-tight">IA Statistical Modelling &amp; Past Papers</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="/tutors/tabraiz-khan"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#0f4a9b] hover:bg-[#0a3570] text-white text-[11.5px] sm:text-[13px] font-bold transition-all shadow-sm hover:shadow text-center"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. WHAT PARENTS SAY (Single Quote) ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              From a <span style={{ color: '#f0c96a' }}>Dubai Family</span>
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs text-white/90 font-semibold self-start sm:self-auto">
              <span className="text-[#f0c96a] tracking-tighter">★★★★★</span>
              <span>Verified</span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-2xl relative text-left">
            <div className="text-6xl font-serif text-white/15 absolute top-3 left-6 select-none pointer-events-none">“</div>
            <p className="relative z-10 text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-6 pt-2">
              &ldquo;Sincere, encouraging, and passionate for his work. He put sufficient effort to elevate the education and knowledge of my son significantly.&rdquo;
            </p>
            <div className="flex items-center gap-3.5 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-sm shadow-inner shrink-0">
                OH
              </div>
              <div>
                <div className="font-extrabold text-white text-base leading-tight">
                  Omar Howwar, Dubai
                </div>
                <div className="text-blue-200/70 text-xs mt-0.5">
                  Verified Parent Review · Google Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. DUBAI COMMUNITIES & SERVICE COVERAGE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <span className="text-xs font-bold text-[#0f4a9b] uppercase tracking-wider">
                Dubai Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mt-2 mb-4">
                1-to-1 IB Tutoring Across Every Dubai Community
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Whether your family resides in Arabian Ranches, Downtown Dubai, Dubai Hills Estate, Emirates Hills, or Jumeirah, our interactive live online sessions eliminate stressful rush-hour drives along Sheikh Zayed Road and Al Khail Road.
              </p>
              <p className="text-xs text-gray-400">
                Flexible scheduling around school extracurriculars, sport fixtures, and mock examination blocks.
              </p>
            </div>

            {/* Interactive Dubai Radar Card */}
            <div>
              <DubaiAreasInteractiveCard showFooterNote={false} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 15. FREQUENTLY ASKED QUESTIONS (Parents Often Ask) ── */}
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
                What Dubai Families <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Ask About IB Tutoring</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Fees, coursework help and HL choices, answered for Dubai families.
              </p>
            </motion.div>

            {/* Right Accordion Column */}
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {FAQS_DATA.map((faq, i) => {
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
                        onClick={() => toggleFaq(i)}
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
                        onClick={() => toggleFaq(i)}
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
                              {faq.q === "Should my child take HL or SL?" ? (
                                <>
                                  It depends on the university course your child is aiming for and where their strengths are. In the first lesson, the tutor looks at current grades and target courses and suggests which subjects to take at HL. See <a href="/dp-hl" className="underline font-semibold text-[#0f4a9b] hover:text-[#0a3570]">DP HL tutoring</a> and <a href="/dp-sl" className="underline font-semibold text-[#0f4a9b] hover:text-[#0a3570]">DP SL tutoring</a> for how each level is taught.
                                </>
                              ) : (
                                faq.a
                              )}
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

      {/* ── 16. FINAL CTA & INTERNAL LINK DIRECTORY (BLUE CARD) ── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12 text-center text-white border border-blue-400/20 shadow-[0_20px_50px_rgba(15,74,155,0.22)]"
            style={{
              background: 'linear-gradient(135deg, #071933 0%, #0a254d 40%, #0f4a9b 100%)',
            }}
          >
            {/* Ambient Background Glows & Luxury Light Accents */}
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#C7A24A]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[#f0c96a] text-xs font-bold uppercase tracking-widest mb-3.5 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#f0c96a]" />
                <span>Take the First Step</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight leading-tight">
                Bring IB Coursework Under Control Before Mocks
              </h2>

              {/* Subheading */}
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Do not let coursework panic or confusing command terms slide into mock season. Work with an <strong className="text-white font-semibold">IB tutor in Dubai</strong> for 1-to-1 guidance tailored to your child&apos;s school syllabus.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                <GoldButton
                  href={BOOKING_URL}
                  className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold shadow-[0_10px_25px_rgba(199,162,74,0.35)] hover:shadow-[0_14px_30px_rgba(199,162,74,0.45)] hover:-translate-y-0.5 transition-all"
                >
                  Book First Session
                </GoldButton>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_14px_30px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>

              {/* Micro Trust Guarantee */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 mt-5 sm:mt-6 text-[11px] sm:text-xs text-blue-200/70 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f0c96a]" />
                  15-min free orientation
                </span>
                <span className="hidden sm:inline text-blue-300/40">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f0c96a]" />
                  Zero lock-in contract
                </span>
                <span className="hidden sm:inline text-blue-300/40">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f0c96a]" />
                  Same-day response
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 17. CONNECTED LEARNING PATHWAYS (RELATED CONTENT) ── */}
      <RelatedContent
        title="Connected Learning Pathways"
        subtitle="Explore complementary IB subjects, partner curricula, and senior academic mentors across Dubai & the UAE."
        subjects={[
          {
            label: 'Physics Tutor Dubai',
            href: '/physics-tutor-dubai',
            note: 'Themes A–E physics, mathematical derivations & IA experiments in Dubai.'
          },
          {
            label: 'Chemistry Tutor Dubai',
            href: '/chemistry-tutor-dubai',
            note: 'Reaction kinetics, organic mechanisms, stoichiometry & IA guidance in Dubai.'
          },
          {
            label: 'Biology Tutor Dubai',
            href: '/biology-tutor-dubai',
            note: 'Cell biology, genetics, ecology & IA experiments in Dubai.'
          },
          {
            label: 'Maths Tutor Dubai',
            href: '/maths-tutor-dubai',
            note: 'Analysis & Approaches (AA) vs Applications (AI) HL & SL coaching in Dubai.'
          }
        ]}
        curricula={[
          {
            label: 'IB DP Standard & Higher Level',
            href: '/ib-curriculum',
            note: 'Complete Diploma Programme core syllabus, TOK, EE & IA mentorship.'
          },
          {
            label: 'MYP Sciences & Mathematics',
            href: '/myp',
            note: 'Years 7–11 inquiry-based learning and Criteria A–D assessment coaching.'
          },
          {
            label: 'A-Level Tutors Dubai',
            href: '/a-level-tutor-dubai',
            note: 'Cambridge, Edexcel & AQA sixth form British curriculum pathways in Dubai.'
          },
          {
            label: 'Abu Dhabi IB Tutors',
            href: '/ib-tutor-abu-dhabi',
            note: 'Private 1-to-1 IB DP & MYP tuition serving students across the UAE capital.'
          }
        ]}
      />

      {/* ── 17. STICKY MOBILE WHATSAPP BUTTON ── */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-full font-bold text-xs shadow-xl active:scale-95 transition-transform"
          aria-label="WhatsApp IB Tutor Dubai"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp IB Tutor</span>
        </a>
      </div>
    </Layout>
  );
}
