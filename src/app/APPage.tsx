import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom, Award, BarChart3, BookOpen, Brain, Calculator, ChevronDown,
  Clock, Dna, FileText, FlaskConical, GraduationCap, HelpCircle,
  MapPin, MessageCircle, Target, TrendingUp, Zap, Calendar,
  ShieldCheck, ArrowRight, CheckCircle2, School,
} from 'lucide-react';
import { Layout, GradientHeadingText, StatsBar, GoldButton, WhatsAppIcon, FinalCTA, APFreeTrialWhiteboardSection } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const apSchemaFaqs = [
  {
    q: "Are AP lessons online or in person?",
    a: "Every lesson is live, one-to-one and online. The tutor shares past exam questions on screen, and your child joins from home in any emirate.",
  },
  {
    q: "When should my child start AP tutoring?",
    a: "September is best, because tutoring then runs alongside the school course. Students who start in January still have time for a full content review and timed practice.",
  },
  {
    q: "Can my child sit an AP exam if the school does not offer the course?",
    a: "Yes. Students can self-study with a tutor and sit the exam at an authorised test centre. Registration usually closes in the autumn, so confirm the deadline with the centre early.",
  },
  {
    q: "How many AP courses should a student take?",
    a: "Most students take between two and four AP courses per academic year, depending on their target universities and overall workload. Focusing on quality scores (4s and 5s) in relevant subjects is far more impactful than taking too many courses.",
  },
  {
    q: "Are AP qualifications recognised by UAE universities?",
    a: "Many UAE universities accept AP scores for admission or course credit. The score each one asks for varies, so check with the university your child is applying to.",
  },
  {
    q: "Where are AP exams sat in the UAE?",
    a: "AP exams are administered at authorized test centres and participating schools across Dubai, Abu Dhabi, and other emirates during the first two weeks of May.",
  },
];

const WA_URL = "https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20need%20an%20AP%20tutor%20for";

export default function APPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const apCourses = [
    {
      num: '01',
      name: 'AP Statistics',
      desc: 'Inference · Confidence Intervals · Chi-Square Tests',
      href: '/statistics',
      graphic: (
        <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-[0_8px_16px_rgba(15,74,155,0.18)]" fill="none">
          <defs>
            <linearGradient id="apStatPlate" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#e8f1fd" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#cfe0f9" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="apStatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f4a9b" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <rect x="22" y="18" width="116" height="104" rx="22" fill="url(#apStatPlate)" stroke="#ffffff" strokeWidth="2.5" />
          <rect x="24" y="20" width="112" height="100" rx="20" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.4" />
          {/* 3D Embossed Sigma Symbol */}
          <path d="M 98 42 L 54 42 L 76 70 L 54 98 L 98 98" stroke="url(#apStatGrad)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 98 42 L 54 42 L 76 70 L 54 98 L 98 98" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          {/* Matrix accents */}
          <circle cx="112" cy="44" r="3.5" fill="#3b82f6" fillOpacity="0.8" />
          <circle cx="112" cy="70" r="3.5" fill="#C7A24A" />
          <circle cx="112" cy="96" r="3.5" fill="#3b82f6" fillOpacity="0.8" />
        </svg>
      ),
    },
    {
      num: '02',
      name: 'AP Physics',
      desc: 'Angular Momentum · Fluid Mechanics · Capacitors',
      href: '/physics',
      graphic: (
        <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-[0_10px_20px_rgba(37,99,235,0.22)]" fill="none">
          <defs>
            <linearGradient id="apAtomCore" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#0a254a" />
            </linearGradient>
            <radialGradient id="apAtomGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="80" cy="70" r="38" fill="url(#apAtomGlow)" />
          {/* 3D Orbital Rings */}
          <ellipse cx="80" cy="70" rx="58" ry="22" stroke="#93c5fd" strokeWidth="3" strokeOpacity="0.85" transform="rotate(-30 80 70)" />
          <ellipse cx="80" cy="70" rx="58" ry="22" stroke="#3b82f6" strokeWidth="3" strokeOpacity="0.85" transform="rotate(30 80 70)" />
          <ellipse cx="80" cy="70" rx="58" ry="20" stroke="#C7A24A" strokeWidth="2.5" strokeOpacity="0.9" transform="rotate(90 80 70)" />
          {/* Central Quantum Nucleus */}
          <circle cx="80" cy="70" r="14" fill="url(#apAtomCore)" stroke="#ffffff" strokeWidth="2.5" />
          <circle cx="76" cy="66" r="4" fill="#ffffff" fillOpacity="0.8" />
          {/* Electron Nodes */}
          <circle cx="124" cy="46" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="36" cy="94" r="5" fill="#C7A24A" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="80" cy="18" r="4.5" fill="#60a5fa" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      num: '03',
      name: 'AP Chemistry',
      desc: 'Thermochemistry · Lewis Structures · Intermolecular Forces',
      href: '/chemistry',
      graphic: (
        <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-[0_10px_20px_rgba(199,162,74,0.22)]" fill="none">
          <defs>
            <linearGradient id="apChemFlask" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#e2edfc" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="apChemLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          {/* 3D Glass Flask Body */}
          <path d="M 72 20 L 88 20 L 88 48 L 126 112 C 130 118, 126 126, 118 126 L 42 126 C 34 126, 30 118, 34 112 L 72 48 Z" fill="url(#apChemFlask)" stroke="#cbd5e1" strokeWidth="3" />
          <rect x="68" y="16" width="24" height="6" rx="3" fill="#cbd5e1" stroke="#ffffff" strokeWidth="1.5" />
          {/* Amber Liquid with Reflections */}
          <path d="M 52 88 L 108 88 L 122 114 C 124 118, 122 122, 116 122 L 44 122 C 38 122, 36 118, 38 114 Z" fill="url(#apChemLiquid)" opacity="0.9" />
          <ellipse cx="80" cy="88" rx="28" ry="6" fill="#fbbf24" opacity="0.8" />
          {/* Highlights & Bubbles */}
          <path d="M 44 108 L 74 52" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <circle cx="74" cy="102" r="3.5" fill="#ffffff" opacity="0.75" />
          <circle cx="86" cy="96" r="2.5" fill="#ffffff" opacity="0.8" />
          <circle cx="92" cy="108" r="3" fill="#ffffff" opacity="0.6" />
        </svg>
      ),
    },
    {
      num: '04',
      name: 'AP Biology',
      desc: 'Cellular Energetics · Cell Signaling · Animal Behavior',
      href: '/biology',
      graphic: (
        <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-[0_10px_20px_rgba(199,162,74,0.2)]" fill="none">
          <defs>
            <linearGradient id="apBioStrandA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
            <linearGradient id="apBioStrandB" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          {/* 3D DNA Helix Rungs */}
          <line x1="42" y1="36" x2="118" y2="44" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
          <circle cx="42" cy="36" r="5" fill="#d97706" />
          <circle cx="118" cy="44" r="5" fill="#3b82f6" />

          <line x1="56" y1="62" x2="104" y2="68" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
          <circle cx="56" cy="62" r="5" fill="#d97706" />
          <circle cx="104" cy="68" r="5" fill="#3b82f6" />

          <line x1="104" y1="88" x2="56" y2="94" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
          <circle cx="104" cy="88" r="5" fill="#d97706" />
          <circle cx="56" cy="94" r="5" fill="#3b82f6" />

          <line x1="118" y1="114" x2="42" y2="122" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
          <circle cx="118" cy="114" r="5" fill="#d97706" />
          <circle cx="42" cy="122" r="5" fill="#3b82f6" />

          {/* Twisted 3D Helical Ribbons */}
          <path d="M 38 24 C 44 48, 114 60, 116 80 C 118 100, 48 112, 42 134" stroke="url(#apBioStrandA)" strokeWidth="6" strokeLinecap="round" />
          <path d="M 122 24 C 116 48, 46 60, 44 80 C 42 100, 112 112, 118 134" stroke="url(#apBioStrandB)" strokeWidth="6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '05',
      name: 'AP English',
      desc: 'Synthesis Essay · Line of Reasoning · Prose Fiction',
      href: '/english',
      graphic: (
        <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-[0_8px_16px_rgba(15,74,155,0.15)]" fill="none">
          <defs>
            <linearGradient id="apBookCover" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
            <linearGradient id="apBookPage" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </linearGradient>
          </defs>
          {/* Open 3D Book Base Spine */}
          <path d="M 80 114 C 54 106, 26 108, 16 114 L 16 42 C 26 36, 54 34, 80 42 C 106 34, 134 36, 144 42 L 144 114 C 134 108, 106 106, 80 114 Z" fill="url(#apBookCover)" stroke="#93c5fd" strokeWidth="2.5" />
          {/* Left and Right 3D Pages */}
          <path d="M 80 110 C 56 102, 30 104, 22 108 L 22 40 C 30 36, 56 34, 80 40 Z" fill="url(#apBookPage)" stroke="#cbd5e1" strokeWidth="1.5" />
          <path d="M 80 110 C 104 102, 130 104, 138 108 L 138 40 C 130 36, 104 34, 80 40 Z" fill="url(#apBookPage)" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Page Text Lines */}
          <line x1="34" y1="52" x2="68" y2="49" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="64" x2="68" y2="61" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="76" x2="60" y2="73" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

          <line x1="92" y1="49" x2="126" y2="52" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="92" y1="61" x2="126" y2="64" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="92" y1="73" x2="118" y2="76" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          {/* Center Golden Bookmark Ribbon */}
          <path d="M 80 34 L 80 96 L 85 90 L 90 96 L 90 34 Z" fill="#C7A24A" />
        </svg>
      ),
    },
    {
      num: '06',
      name: 'AP Economics',
      desc: 'Elasticity · Monetary Policy · Comparative Advantage',
      href: '/economics',
      graphic: (
        <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-[0_10px_20px_rgba(199,162,74,0.22)]" fill="none">
          <defs>
            <linearGradient id="apBarGold1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="apBarGold2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fffbeb" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          {/* 3D Platform Ground */}
          <ellipse cx="80" cy="120" rx="55" ry="12" fill="#e2e8f0" opacity="0.7" />
          {/* Pillar 1 (Small) */}
          <rect x="36" y="80" width="20" height="38" rx="4" fill="url(#apBarGold1)" stroke="#ffffff" strokeWidth="1.5" />
          <ellipse cx="46" cy="80" rx="10" ry="4" fill="url(#apBarGold2)" />
          {/* Pillar 2 (Medium) */}
          <rect x="66" y="58" width="22" height="60" rx="4" fill="url(#apBarGold1)" stroke="#ffffff" strokeWidth="1.5" />
          <ellipse cx="77" cy="58" rx="11" ry="4.5" fill="url(#apBarGold2)" />
          {/* Pillar 3 (Large) */}
          <rect x="98" y="32" width="24" height="86" rx="5" fill="url(#apBarGold1)" stroke="#ffffff" strokeWidth="2" />
          <ellipse cx="110" cy="32" rx="12" ry="5" fill="url(#apBarGold2)" />
          {/* Rising 3D Trend Arrow */}
          <path d="M 32 76 L 68 50 L 102 24 L 126 14" stroke="#0f4a9b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="132,12 120,12 126,24" fill="#0f4a9b" />
        </svg>
      ),
    },
  ];

  const prepTimeline = [
    {
      num: '01',
      when: 'September to December',
      shortMonth: 'Sep - Dec',
      tag: 'Unit Mastery',
      focus: 'School Curriculum Sync & Unit Foundation',
      what: "Keeps pace with the school's units and closes gaps after each unit test.",
      deliverables: ['Continuous school unit alignment', 'Gap-closing homework reviews', 'Early FRQ concept mastery'],
      icon: <BookOpen className="w-5 h-5 text-[#0f4a9b]" />,
    },
    {
      num: '02',
      when: 'January to February',
      shortMonth: 'Jan - Feb',
      tag: 'Content & FRQs',
      focus: 'Syllabus Completion & Structured FRQs',
      what: 'Finishes the remaining course syllabus and starts mixed free-response practice with official College Board scoring rubrics.',
      deliverables: ['Full course syllabus completion', 'Free-response question (FRQ) drills', 'Official grading rubric alignment'],
      icon: <Brain className="w-5 h-5 text-[#0f4a9b]" />,
    },
    {
      num: '03',
      when: 'March',
      shortMonth: 'March',
      tag: 'Timed Mock',
      focus: 'Full Simulation & Scoring Benchmark',
      what: 'Runs the first full timed practice exam under realistic conditions, marked to official College Board scoring guidelines with in-depth feedback.',
      deliverables: ['Full-length timed mock exam', 'Question-by-question error audit', 'Practice exam scored 1 to 5'],
      icon: <Clock className="w-5 h-5 text-[#0f4a9b]" />,
    },
    {
      num: '04',
      when: 'April',
      shortMonth: 'April',
      tag: 'Weak Spot Drill',
      focus: 'Targeted High-Yield Weak Spot Elimination',
      what: 'Sets one timed past paper each week, with private 1-on-1 lessons dedicated strictly to eliminating errors on the weakest units.',
      deliverables: ['Weekly timed section papers', 'Targeted weak unit drill sessions', 'Pacing and stamina refinement'],
      icon: <Target className="w-5 h-5 text-[#0f4a9b]" />,
    },
    {
      num: '05',
      when: 'Early May',
      shortMonth: 'Early May',
      tag: 'Final Strategy',
      focus: 'Exam-Week Review',
      what: 'Reviews formulas, task verbs and timing for each exam section.',
      deliverables: ['Task verb & command word checklist', 'Formula sheet rapid-recall drill', 'Final exam day score strategy'],
      icon: <Award className="w-5 h-5 text-[#0f4a9b]" />,
    },
  ];

  const trialSteps = [
    {
      num: '01',
      title: 'Name the AP Courses',
      desc: 'Tell us which AP courses your child takes and the score they are aiming for, by form or WhatsApp.',
    },
    {
      num: '02',
      title: 'Choose a Lesson Time',
      desc: 'We suggest a tutor for that course and offer lesson times that fit around school.',
    },
    {
      num: '03',
      title: 'Try a Real AP Question',
      desc: 'In the first lesson, the tutor works through a recent free-response question with your child. You then decide whether to continue.',
    },
  ];

  const stepUpDifferences = [
    {
      num: '01',
      title: 'Faster Pace',
      desc: 'AP covers an introductory college course inside one school year.',
      icon: <Zap className="h-5 w-5 text-[#0f4a9b]" />,
    },
    {
      num: '02',
      title: 'Deeper Content',
      desc: (
        <>
          Each unit goes further than the equivalent{' '}
          <a href="/high-school" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
            high school course
          </a>{' '}
          covers.
        </>
      ),
      icon: <Brain className="h-5 w-5 text-[#0f4a9b]" />,
    },
    {
      num: '03',
      title: 'Evidence-Based Answers',
      desc: 'Free-response questions reward argument with evidence and reasoning, not recall alone.',
      icon: <Target className="h-5 w-5 text-[#0f4a9b]" />,
    },
    {
      num: '04',
      title: 'One External Exam',
      desc: 'The school grades the course, but the College Board sets and scores a separate exam in May, from 1 to 5.',
      icon: <Award className="h-5 w-5 text-[#0f4a9b]" />,
    },
  ];

  const UAE_EMIRATES = [
    {
      city: 'Abu Dhabi',
      image: '/images/emirates/abu-dhabi.jpg',
      href: '/contact#form',
    },
    {
      city: 'Dubai',
      image: '/images/emirates/dubai.jpg',
      href: '/contact#form',
    },
    {
      city: 'Sharjah',
      image: '/images/emirates/sharjah.jpg',
      href: '/contact#form',
    },
    {
      city: 'Ajman',
      image: '/images/emirates/ajman.jpg',
      href: '/contact#form',
    },
    {
      city: 'Al Ain',
      image: '/images/emirates/al-ain.jpg',
      href: '/contact#form',
    },
    {
      city: 'Ras Al Khaimah',
      image: '/images/emirates/ras-al-khaimah.jpg',
      href: '/contact#form',
    },
    {
      city: 'Fujairah',
      image: '/images/emirates/fujairah.jpg',
      href: '/contact#form',
    },
    {
      city: 'Umm Al Quwain',
      image: '/images/emirates/umm-al-quwain.jpg',
      href: '/contact#form',
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="AP Tutors in Dubai & Abu Dhabi | AP Exam Prep UAE | Ustaad"
        description="Online 1-to-1 AP tutors for Statistics, Physics, Chemistry, Biology and Economics. AP classes and exam prep through to May. Free 15-min orientation with the first lesson."
        canonical="/ap"
        ogImage="/UpdatedImages/Ap-img.webp"
        schema={[
          localBusinessSchema,
          serviceSchema(
            'AP Tutoring in Dubai and the UAE',
            'Online 1-to-1 AP tutors for Statistics, Physics, Chemistry, Biology and Economics. AP classes and exam prep through to May. Free 15-min orientation with the first lesson.',
            '/ap'
          ),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Curriculum', url: '/curriculum' },
            { name: 'AP', url: '/ap' },
          ]),
          faqSchema(apSchemaFaqs),
        ]}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative w-full min-h-[520px] lg:min-h-[580px] xl:min-h-[620px] flex items-center overflow-hidden">
        <img
          src="/UpdatedImages/Ap-img.webp"
          srcSet="/UpdatedImages/Ap-img-mobile.webp 640w, /UpdatedImages/Ap-img.webp 1200w"
          sizes="(max-width: 640px) 100vw, 1200px"
          alt="Ustaad tutor preparing AP students for College Board exams across Sciences Maths and Humanities in Dubai and Abu Dhabi UAE"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
          width={1200}
          height={800}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/70 sm:to-black/30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl pr-6 sm:pr-0"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> AP Courses
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold text-[#0a1f3d] mb-2 leading-[1.15] tracking-tight">
              AP Tutors in Dubai and Across the UAE
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-bold text-[#0f4a9b] mb-2.5 leading-snug">
              One-to-one AP classes and exam prep, live online.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3.5" />
            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed max-w-xl">
              Your child works with a tutor who teaches their AP course to the College Board units, from the first unit test to the May exam.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3 mb-2.5">
              <GoldButton
                href="/contact#form"
                className="w-auto self-start px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm shadow-[0_0_20px_rgba(199,162,74,0.35)] text-center justify-center"
              >
                Book First AP Session
              </GoldButton>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask on WhatsApp"
                className="w-auto self-start inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              No commitment. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <StatsBar />

      {/* ── SECTION 2: AP COURSES WE TUTOR ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#f8faff] via-white to-[#f4f8fd] relative overflow-hidden border-b border-gray-100">
        {/* Soft Ambient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[320px] bg-[#0f4a9b]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-6 right-1/4 w-[350px] h-[250px] bg-[#C7A24A]/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-2">
              <span className="text-[#0f4a9b] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em]">
                Curriculum Coverage
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#0a1f3d] mb-1.5 tracking-tight">
              AP Courses We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                Cover
              </span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
              Choose a subject to see how we teach it.
            </p>
          </div>

          {/* 3D Animated Subject Cards Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="flex overflow-x-auto pb-3 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5 snap-x snap-mandatory scroll-smooth no-scrollbar mb-5">
              {apCourses.map((subj, i) => (
                <motion.a
                  key={subj.name}
                  href={subj.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl lg:rounded-[24px] p-4 sm:p-5 bg-gradient-to-br from-white via-white/95 to-[#f3f7fd]/90 backdrop-blur-xl border border-white/80 hover:border-[#0f4a9b]/35 shadow-[0_10px_28px_rgba(15,74,155,0.06)] hover:shadow-[0_18px_40px_rgba(15,74,155,0.14)] transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[140px] sm:min-h-[150px] shrink-0 w-[82vw] max-w-[310px] sm:w-auto sm:max-w-none snap-center block select-none"
                >
                  {/* Subtle Inner Lighting Highlights */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-[#0f4a9b]/[0.03] pointer-events-none rounded-2xl lg:rounded-[24px]" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0f4a9b]/8 to-[#C7A24A]/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top Bar: Number Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-7 h-7 rounded-full bg-[#0a254a] text-white text-[11px] font-black flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-[#0f4a9b] transition-all duration-300">
                      <span>{subj.num}</span>
                    </div>
                  </div>

                  {/* Card Body with Right-aligned 3D Graphic */}
                  <div className="relative z-10 mt-3 sm:mt-4 flex items-end justify-between gap-2">
                    <div className="flex-1 pr-1.5">
                      <h3 className="text-base sm:text-lg font-black text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-snug tracking-tight">
                        {subj.name}
                      </h3>
                      <p className="text-gray-500 group-hover:text-gray-700 text-[11px] sm:text-xs font-medium leading-relaxed mt-1 transition-colors line-clamp-2">
                        {subj.desc}
                      </p>
                    </div>

                    {/* 3D Subject Artwork Graphic */}
                    <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex-shrink-0 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-out pointer-events-none select-none -mb-1 -mr-1">
                      {subj.graphic}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Mobile Swipe Hint (Clean text only, no dots, no arrows) */}
            <div className="sm:hidden text-center -mt-2 mb-4 text-xs font-semibold text-gray-500 tracking-wide">
              Swipe to see more
            </div>

            {/* Also Available Capsule */}
            <div className="flex justify-center pt-1">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/95 border border-gray-200/90 shadow-[0_4px_14px_rgba(15,74,155,0.06)] text-xs text-gray-600">
                <span className="font-bold text-[#0a1f3d]">Also Available:</span>
                <span>
                  AP Calculus AB and BC are also available. Taking another AP course?{' '}
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0f4a9b] font-bold underline hover:text-[#0a254a] transition-colors"
                  >
                    Message us
                  </a>{' '}
                  and we will confirm a tutor.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: AP EXAM PREP, SEPTEMBER TO MAY ── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#f9fbff] via-white to-[#f4f8fd] border-t border-gray-100 relative overflow-hidden">
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-[#0f4a9b]/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-6 right-10 w-[400px] h-[250px] bg-[#C7A24A]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-2.5 shadow-[0_2px_8px_rgba(15,74,155,0.06)]">
              <Calendar className="w-3.5 h-3.5 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em]">
                Preparation Roadmap
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0a1f3d] mb-2 tracking-tight leading-tight">
              AP Exam Prep, <span className="text-[#0f4a9b]">September to May</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base font-medium leading-relaxed max-w-xl mx-auto">
              Our step-by-step preparation plan covering every stage from school unit mastery to official College Board exam day.
            </p>
          </div>

          {/* 5-Column Connected Horizontal Roadmap (Fits 1 screen on Desktop, Swipeable on Mobile) */}
          <div className="relative mb-6 sm:mb-8">
            {/* Desktop Inter-Card Connecting Bridge Track Line */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#0f4a9b]/30 via-[#C7A24A]/50 to-[#0f4a9b]/30 z-0 pointer-events-none" />

            <div className="flex overflow-x-auto pb-4 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 lg:grid lg:grid-cols-5 gap-3.5 sm:gap-4 snap-x snap-mandatory scroll-smooth no-scrollbar items-stretch">
              {prepTimeline.map((stage, i) => (
                <motion.div
                  key={stage.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative bg-gradient-to-b from-white via-white/98 to-[#f4f8fe] rounded-2xl p-4 sm:p-5 border border-blue-100/90 hover:border-[#0f4a9b]/40 shadow-[0_6px_20px_rgba(15,74,155,0.05)] hover:shadow-[0_12px_28px_rgba(15,74,155,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden shrink-0 w-[78vw] max-w-[290px] sm:w-[45vw] lg:w-auto lg:max-w-none snap-center group select-none"
                >
                  {/* Top Header Row: Stage Number & Icon */}
                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0a254a] to-[#0f4a9b] text-white flex items-center justify-center font-black text-xs shadow-sm group-hover:scale-105 transition-transform">
                      {stage.num}
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-blue-50/90 border border-blue-100/80 flex items-center justify-center text-[#0f4a9b] shadow-2xs">
                      {stage.icon}
                    </div>
                  </div>

                  {/* Stage Time & Title */}
                  <div className="relative z-10 mb-2">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-wider mb-1.5">
                      {stage.tag}
                    </div>
                    <h3 className="text-sm sm:text-base font-black text-[#0a1f3d] tracking-tight leading-tight group-hover:text-[#0f4a9b] transition-colors">
                      {stage.when}
                    </h3>
                  </div>

                  {/* Stage Focus & Body */}
                  <div className="relative z-10 flex-1 space-y-1.5 mb-3.5">
                    <p className="text-[11px] sm:text-xs font-bold text-[#0f4a9b] leading-snug">
                      {stage.focus}
                    </p>
                    <p className="text-gray-600 text-[10.5px] sm:text-[11.5px] leading-relaxed font-normal">
                      {stage.what}
                    </p>
                  </div>

                  {/* Key Deliverables Mini-Checklist */}
                  <div className="relative z-10 pt-2.5 border-t border-slate-100 space-y-1.5 bg-slate-50/60 -mx-1 -mb-1 p-2 rounded-xl">
                    {stage.deliverables.map((deliv, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-1.5 text-[10px] sm:text-[10.5px] text-gray-700 font-medium leading-tight"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#C7A24A] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="lg:hidden text-center -mt-2 mb-2 text-xs font-semibold text-gray-500 tracking-wide">
            Swipe to see more
          </div>
        </div>
      </section>

      {/* ── SECTION 4: MEET THE AP TUTORS ── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#f5f8fc] via-[#edf3f9] to-[#f8fafc] border-t border-gray-100 relative overflow-hidden select-none">
        {/* Ambient Lighting Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.85),transparent_70%)] pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Cool Box Container */}
          <div className="relative rounded-3xl bg-white/95 backdrop-blur-md border border-[#0f4a9b]/15 shadow-[0_20px_50px_rgba(15,74,155,0.08)] p-8 sm:p-12 lg:p-14 overflow-hidden text-center transition-all duration-300 hover:shadow-[0_25px_60px_rgba(15,74,155,0.12)]">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />

            {/* Ambient Radial Color Halos */}
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* ── COLORFUL BACKGROUND SCHOOL & ACADEMIC ICONS ── */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
              {/* Top-Left: School Icon Badge (Royal Blue) */}
              <div className="absolute top-5 left-5 sm:top-7 sm:left-8 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-400/25 shadow-sm -rotate-12">
                <School className="w-5 h-5 sm:w-6 sm:h-6 text-[#0f4a9b]" />
              </div>

              {/* Bottom-Left: Graduation Cap Badge (Purple) */}
              <div className="absolute bottom-5 left-6 sm:bottom-8 sm:left-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-purple-500/15 to-indigo-600/5 border border-purple-400/25 shadow-sm rotate-6">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>

              {/* Top-Right: Award / Medal Badge (Gold / Amber) */}
              <div className="absolute top-5 right-5 sm:top-7 sm:right-8 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-amber-500/15 to-[#C7A24A]/10 border border-amber-400/30 shadow-sm rotate-12">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#C7A24A]" />
              </div>

              {/* Bottom-Right: Book / Syllabus Badge (Emerald) */}
              <div className="absolute bottom-5 right-6 sm:bottom-8 sm:right-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-emerald-600/5 border border-emerald-400/25 shadow-sm -rotate-6">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              </div>

              {/* Mid-Left Subtle Check Badge (Teal) */}
              <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-3 items-center justify-center w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-400/20 shadow-sm -rotate-6">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
              </div>

              {/* Mid-Right Subtle Target Badge (Rose) */}
              <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-3 items-center justify-center w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-400/20 shadow-sm rotate-6">
                <Target className="w-4 h-4 text-rose-600" />
              </div>

              {/* Large Soft Background Watermark Doodles */}
              <School className="absolute -top-6 left-1/3 w-32 h-32 text-[#0f4a9b]/[0.025] -rotate-12" />
              <Award className="absolute -bottom-10 right-1/3 w-36 h-36 text-[#C7A24A]/[0.03] rotate-12" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              {/* Section Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/20 rounded-full mb-3.5 sm:mb-4 shadow-sm">
                <GraduationCap className="h-4 w-4 text-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">
                  Our Educators
                </span>
              </div>

              {/* Box Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] tracking-tight mb-2.5 sm:mb-3 leading-tight">
                AP Specialists, Not a Tutor <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e6cd9]">Marketplace</span>
              </h2>

              {/* Description Paragraph */}
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base font-normal leading-relaxed mb-6 sm:mb-7">
                On a marketplace, anyone can list themselves as an AP tutor. At Ustaad, a tutor is offered for AP only after our academic team has checked they know the College Board course: its units, its free-response format and its 1 to 5 scoring. Read who they are and what they teach before you book.
              </p>

              {/* Standard CTA Button */}
              <div className="relative inline-block z-10">
                <a
                  href="/tutors"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] hover:from-[#1a5bb8] hover:to-[#0f4a9b] shadow-[0_4px_16px_rgba(15,74,155,0.25)] hover:shadow-[0_6px_20px_rgba(15,74,155,0.35)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Meet the AP Tutors</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOW THE FREE AP TRIAL WORKS ── */}
      <APFreeTrialWhiteboardSection />

      {/* ── SECTION 6: HOW AP DIFFERS FROM HIGH SCHOOL ── */}
      <section className="py-4 sm:py-7 lg:py-10 bg-gradient-to-b from-[#f9fbff] via-white to-[#f4f8fd] border-t border-gray-100 relative overflow-hidden flex items-center min-h-[auto]">
        {/* Soft Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-[#0f4a9b]/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-6 right-1/4 w-[450px] h-[250px] bg-[#C7A24A]/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Subtle Background Academic Doodles (Books, Scrolls, Hourglass, Flask, Graduation Cap, Triangle Ruler) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          {/* Left Side Doodles */}
          <div className="absolute top-1/4 -left-6 sm:left-4 w-36 sm:w-56 text-[#0f4a9b]/[0.08] space-y-6 sm:space-y-8">
            {/* Open Book & Pencil */}
            <svg viewBox="0 0 100 80" className="w-16 h-12 sm:w-24 sm:h-20 -rotate-12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M10 50 C25 45, 45 46, 50 52 C55 46, 75 45, 90 50 V20 C75 15, 55 16, 50 22 C45 16, 25 15, 10 20 Z" />
              <path d="M50 22 V52" />
              <line x1="20" y1="26" x2="42" y2="28" strokeLinecap="round" />
              <line x1="20" y1="34" x2="42" y2="36" strokeLinecap="round" />
              <line x1="58" y1="28" x2="80" y2="26" strokeLinecap="round" />
              <line x1="58" y1="36" x2="80" y2="34" strokeLinecap="round" />
            </svg>
            {/* Hourglass */}
            <svg viewBox="0 0 60 80" className="w-12 h-14 sm:w-16 sm:h-20 rotate-6 ml-6 sm:ml-8" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="10" y="8" width="40" height="6" rx="2" />
              <rect x="10" y="66" width="40" height="6" rx="2" />
              <path d="M15 14 C15 35, 45 35, 45 14" />
              <path d="M15 66 C15 45, 45 45, 45 66" />
              <circle cx="30" cy="40" r="2" fill="currentColor" />
            </svg>
            {/* Science Flask */}
            <svg viewBox="0 0 70 80" className="w-14 h-14 sm:w-18 sm:h-20 -rotate-6 hidden sm:block" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M28 10 H42 M32 10 V28 L14 62 C11 68, 16 74, 23 74 H47 C54 74, 59 68, 56 62 L38 28 V10" />
              <path d="M20 54 Q35 48, 50 54" strokeDasharray="3 2" />
              <circle cx="32" cy="62" r="2.5" fill="currentColor" />
            </svg>
          </div>

          {/* Right Side Doodles */}
          <div className="absolute top-1/3 -right-6 sm:right-6 w-36 sm:w-56 text-[#0f4a9b]/[0.08] space-y-6 sm:space-y-8 flex flex-col items-end">
            {/* Scroll with Ribbon Seal */}
            <svg viewBox="0 0 90 90" className="w-14 h-14 sm:w-20 sm:h-20 rotate-12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M25 15 C15 15, 15 25, 25 25 H68 C78 25, 78 15, 68 15 Z" />
              <path d="M25 25 V72 C15 72, 15 82, 25 82 H68 C78 82, 78 72, 68 72 V25" />
              <line x1="32" y1="38" x2="60" y2="38" strokeLinecap="round" />
              <line x1="32" y1="46" x2="60" y2="46" strokeLinecap="round" />
            </svg>
            {/* Graduation Cap */}
            <svg viewBox="0 0 90 70" className="w-14 h-11 sm:w-22 sm:h-18 -rotate-12 mr-4 sm:mr-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              <polygon points="45,10 82,26 45,42 8,26" />
              <path d="M20 32 V52 C20 52, 30 60, 45 60 C60 60, 70 52, 70 52 V32" />
              <circle cx="74" cy="52" r="2.5" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Header */}
          <div className="text-center mb-3 sm:mb-5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-1">
              <span className="text-[#0f4a9b] text-[9px] sm:text-[10.5px] font-extrabold uppercase tracking-[0.16em]">
                The Step Up
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl lg:text-[30px] font-black text-[#0a1f3d] mb-0.5 sm:mb-1 tracking-tight leading-tight">
              How AP Differs From High <span className="text-[#0f4a9b]">School</span>
            </h2>
            <p className="text-gray-500 text-[10.5px] sm:text-xs lg:text-sm font-medium leading-tight max-w-xl mx-auto">
              Four reasons an A in the regular course does not guarantee a 5 in AP.
            </p>
          </div>

          {/* Step Cards Grid - One-by-one sequence on mobile (grid-cols-1), 2-column on desktop (sm:grid-cols-2) */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3 lg:gap-3.5 relative z-10">
              
              {/* STEP 01: Faster Pace */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/95 backdrop-blur-md border border-gray-200/80 hover:border-[#0f4a9b]/35 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-3.5 shadow-[0_3px_12px_rgba(15,74,155,0.04)] hover:shadow-[0_6px_20px_rgba(15,74,155,0.08)] transition-all duration-300 flex flex-row items-center gap-2.5 sm:gap-3.5 overflow-hidden"
              >
                {/* Large Background Watermark Number */}
                <span className="absolute right-2 bottom-0 text-3xl sm:text-5xl font-black text-[#0f4a9b]/[0.05] select-none pointer-events-none tabular-nums">
                  01
                </span>

                {/* Circular Node Medallion with 3D Illustration */}
                <div className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-white via-white to-blue-50 border border-white shadow-[0_2px_8px_rgba(15,74,155,0.1)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 relative z-10 overflow-hidden p-0.5 sm:p-1 bg-white">
                  <img
                    src="/UpdatedImages/ap-diff-1-pace.jpg"
                    alt="Faster Pace - AP rocket clock illustration"
                    className="w-full h-full object-contain rounded-full"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 min-w-0 pr-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-blue-50 text-[#0f4a9b] text-[8px] sm:text-[9px] font-bold">
                      <Zap className="w-2 h-2" />
                      <span>Accelerated</span>
                    </span>
                    <h3 className="text-xs sm:text-sm lg:text-base font-black text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-tight truncate sm:whitespace-normal">
                      Faster Pace
                    </h3>
                  </div>
                  <p className="text-gray-500 text-[9.5px] sm:text-xs leading-tight sm:leading-snug">
                    AP covers an introductory college course inside one school year.
                  </p>
                </div>
              </motion.div>

              {/* STEP 02: Deeper Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="group relative bg-white/95 backdrop-blur-md border border-gray-200/80 hover:border-[#0f4a9b]/35 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-3.5 shadow-[0_3px_12px_rgba(15,74,155,0.04)] hover:shadow-[0_6px_20px_rgba(15,74,155,0.08)] transition-all duration-300 flex flex-row items-center gap-2.5 sm:gap-3.5 overflow-hidden"
              >
                {/* Large Background Watermark Number */}
                <span className="absolute right-2 bottom-0 text-3xl sm:text-5xl font-black text-[#0f4a9b]/[0.05] select-none pointer-events-none tabular-nums">
                  02
                </span>

                {/* Circular Node Medallion with 3D Illustration */}
                <div className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-white via-white to-blue-50 border border-white shadow-[0_2px_8px_rgba(15,74,155,0.1)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 relative z-10 overflow-hidden p-0.5 sm:p-1 bg-white">
                  <img
                    src="/UpdatedImages/ap-diff-2-content.jpg"
                    alt="Deeper Content - AP open book and idea bulb illustration"
                    className="w-full h-full object-contain rounded-full"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 min-w-0 pr-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-blue-50 text-[#0f4a9b] text-[8px] sm:text-[9px] font-bold">
                      <BookOpen className="w-2 h-2" />
                      <span>Advanced</span>
                    </span>
                    <h3 className="text-xs sm:text-sm lg:text-base font-black text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-tight mb-0 sm:mb-0.5 truncate sm:whitespace-normal">
                      Deeper Content
                    </h3>
                  </div>
                  <p className="text-gray-500 text-[9.5px] sm:text-xs leading-tight sm:leading-snug">
                    Each unit goes further than equivalent{' '}
                    <a href="/high-school" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79] transition-colors">
                      high school
                    </a>.
                  </p>
                </div>
              </motion.div>

              {/* STEP 03: Evidence-Based Answers */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="group relative bg-white/95 backdrop-blur-md border border-gray-200/80 hover:border-[#0f4a9b]/35 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-3.5 shadow-[0_3px_12px_rgba(15,74,155,0.04)] hover:shadow-[0_6px_20px_rgba(15,74,155,0.08)] transition-all duration-300 flex flex-row items-center gap-2.5 sm:gap-3.5 overflow-hidden"
              >
                {/* Large Background Watermark Number */}
                <span className="absolute right-2 bottom-0 text-3xl sm:text-5xl font-black text-[#0f4a9b]/[0.05] select-none pointer-events-none tabular-nums">
                  03
                </span>

                {/* Circular Node Medallion with 3D Illustration */}
                <div className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-white via-white to-blue-50 border border-white shadow-[0_2px_8px_rgba(15,74,155,0.1)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 relative z-10 overflow-hidden p-0.5 sm:p-1 bg-white">
                  <img
                    src="/UpdatedImages/ap-diff-3-answers.jpg"
                    alt="Evidence-Based Answers - Science atom podium illustration"
                    className="w-full h-full object-contain rounded-full"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 min-w-0 pr-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-blue-50 text-[#0f4a9b] text-[8px] sm:text-[9px] font-bold">
                      <Target className="w-2 h-2" />
                      <span>Analytical</span>
                    </span>
                    <h3 className="text-xs sm:text-sm lg:text-base font-black text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-tight truncate sm:whitespace-normal">
                      Evidence-Based Answers
                    </h3>
                  </div>
                  <p className="text-gray-500 text-[9.5px] sm:text-xs leading-tight sm:leading-snug">
                    FRQs reward argument with evidence and reasoning, not recall alone.
                  </p>
                </div>
              </motion.div>

              {/* STEP 04: One External Exam */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="group relative bg-white/95 backdrop-blur-md border border-gray-200/80 hover:border-[#0f4a9b]/35 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-3.5 shadow-[0_3px_12px_rgba(15,74,155,0.04)] hover:shadow-[0_6px_20px_rgba(15,74,155,0.08)] transition-all duration-300 flex flex-row items-center gap-2.5 sm:gap-3.5 overflow-hidden"
              >
                {/* Large Background Watermark Number */}
                <span className="absolute right-2 bottom-0 text-3xl sm:text-5xl font-black text-[#0f4a9b]/[0.05] select-none pointer-events-none tabular-nums">
                  04
                </span>

                {/* Circular Node Medallion with Custom Vector Artwork */}
                <div className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-white via-white to-blue-50 border border-white shadow-[0_2px_8px_rgba(15,74,155,0.1)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 relative z-10 overflow-hidden p-1 sm:p-1.5 bg-gradient-to-b from-blue-50/50 to-white">
                  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                    {/* Diploma / Certificate */}
                    <rect x="10" y="12" width="44" height="34" rx="4" fill="#ffffff" stroke="#0f4a9b" strokeWidth="2.5" />
                    <rect x="14" y="16" width="36" height="26" rx="2" stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="3 2" fill="#f0f9ff" />
                    <rect x="22" y="20" width="20" height="3.5" rx="1.5" fill="#0f4a9b" />
                    <line x1="18" y1="28" x2="36" y2="28" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                    <line x1="18" y1="34" x2="30" y2="34" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                    {/* Medal Ribbon Seal */}
                    <g transform="translate(42, 36)">
                      <path d="M-4 4 L-6 16 L0 13 L6 16 L4 4 Z" fill="#38bdf8" stroke="#0f4a9b" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="7.5" fill="#f59e0b" stroke="#0f4a9b" strokeWidth="2" />
                      <circle cx="0" cy="0" r="5" fill="#fef08a" />
                      <path d="M-2 0 L-0.5 1.5 L2.5 -1.5" stroke="#0f4a9b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 min-w-0 pr-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-blue-50 text-[#0f4a9b] text-[8px] sm:text-[9px] font-bold">
                      <Award className="w-2 h-2" />
                      <span>Standardized</span>
                    </span>
                    <h3 className="text-xs sm:text-sm lg:text-base font-black text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-tight truncate sm:whitespace-normal">
                      One External Exam
                    </h3>
                  </div>
                  <p className="text-gray-500 text-[9.5px] sm:text-xs leading-tight sm:leading-snug">
                    College Board scores separate May exams from 1 to 5.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: AP SCORES AND UNIVERSITY PATHWAYS ── */}
      <section className="py-10 sm:py-14 lg:py-18 bg-gradient-to-b from-[#f8faff] via-white to-[#f4f8fd] relative overflow-hidden border-t border-gray-100 flex items-center min-h-[auto]">
        {/* Soft Ambient Brand Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-[#0f4a9b]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-6 right-1/4 w-[400px] h-[250px] bg-[#C7A24A]/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header with scroll-triggered font animation (once: false) */}
          <div className="text-center mb-6 sm:mb-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-2.5"
            >
              <GraduationCap className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em]">
                University Pathways
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0a1f3d] mb-2 tracking-tight leading-tight"
            >
              AP Scores and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                University Pathways
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-xs sm:text-sm lg:text-base font-medium leading-relaxed max-w-2xl mx-auto"
            >
              How strong AP performance shapes university applications, course credits, and admissions at the most selective institutions.
            </motion.p>
          </div>

          {/* Container Card with interactive animated typography and subtle hover effect */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative bg-white/95 backdrop-blur-xl border border-[#0f4a9b]/15 hover:border-[#0f4a9b]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_rgba(15,74,155,0.08)] hover:shadow-[0_16px_45px_rgba(15,74,155,0.12)] transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />
            <div className="absolute bottom-4 right-6 pointer-events-none select-none opacity-[0.04]">
              <TrendingUp className="h-44 w-44 text-[#0f4a9b]" strokeWidth={0.5} />
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 relative z-10">
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#C7A24A] via-[#E5C368] to-[#987820] rounded-2xl flex items-center justify-center shadow-[0_6px_20px_rgba(199,162,74,0.35)] shrink-0"
              >
                <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" />
              </motion.div>

              <div className="space-y-3.5 text-gray-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  <strong className="text-[#0a1f3d] font-bold">Strong AP performance</strong> shows universities the student can handle first-year college work before they arrive on campus. A score of <span className="font-extrabold text-[#0f4a9b]">4 or 5</span> is widely accepted by US universities for college credit. UK universities also accept AP scores, usually asking for set scores in several subjects; check each course page.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
                  <strong className="text-[#0a1f3d] font-bold">Ustaad tutors</strong> hold unit understanding steady from September through May, so the score reflects what the student actually knows. We also help families plan the AP combination that fits the university course in view, so the scores carry real weight at admissions.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 8: AP TUTORS ACROSS THE UAE ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#fafcff] via-white to-[#f5f8fd] relative overflow-hidden border-y border-gray-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-[#0f4a9b]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[320px] bg-[#C7A24A]/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-3.5">
                <MapPin className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">Across the UAE</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight">
                AP Tutors{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                  Across the UAE
                </span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base font-medium max-w-lg md:text-right leading-relaxed">
              Online AP lessons in all seven emirates, timed to the May exams.
            </p>
          </div>

          {/* Cards Grid / Mobile Horizontal Scroll */}
          <div className="flex overflow-x-auto pb-4 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 snap-x snap-mandatory scroll-smooth no-scrollbar">
            {UAE_EMIRATES.map((item, i) => (
              <motion.a
                key={item.city}
                href={item.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#C7A24A]/70 shadow-[0_12px_32px_rgba(7,19,36,0.35)] hover:shadow-[0_20px_45px_rgba(15,74,155,0.45)] transition-all duration-500 p-6 flex flex-col justify-between min-h-[200px] group select-none block shrink-0 w-[82vw] max-w-[310px] sm:w-auto sm:max-w-none snap-center"
              >
                {/* Real Photographic Background with Rich Dark Overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.city} AP Tutors`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/95 via-[#0b1b33]/85 to-[#081528]/70 group-hover:via-[#0b1b33]/75 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,162,74,0.18),transparent_70%)] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Card Content - Top */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight group-hover:text-amber-100 transition-colors drop-shadow-sm">
                        {item.city}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[#C7A24A] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-[#C7A24A]/20 group-hover:border-[#C7A24A]/50 transition-all shrink-0">
                      <MapPin className="h-4 w-4 text-[#C7A24A]" />
                    </div>
                  </div>
                </div>

                {/* Card Content - Bottom */}
                <div className="relative z-10 mt-6 pt-3 border-t border-white/15">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-blue-200/80 mb-1.5">
                    Curriculum Alignment
                  </p>
                  <div className="flex items-center gap-2.5 text-[11px] font-semibold text-white/95">
                    <span className="inline-flex items-center gap-1">
                      American <span className="text-[#C7A24A] font-bold">✓</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      AP <span className="text-[#C7A24A] font-bold">✓</span>
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile Swipe Hint (Clean text only, no dots, no arrows) */}
          <div className="sm:hidden text-center mt-3 text-xs font-semibold text-gray-500 tracking-wide">
            Swipe to see more
          </div>
        </div>
      </section>

      {/* ── SECTION 9: AP TUTORING FAQS ── */}
      <section id="faqs" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-start">
            <div className="flex flex-col items-start text-left lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <HelpCircle className="h-3.5 w-3.5" />
                <span className="text-xs uppercase tracking-wider">Common Questions</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-3">
                AP Tutoring{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                  FAQs
                </span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Common questions from parents and students about AP tutoring.
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              {apSchemaFaqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button
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
                          border: 'none',
                          boxShadow: 'inset 0 0 0 2px #fff',
                        }}
                      >
                        <span className="flex items-center justify-center w-full h-full">?</span>
                      </button>
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
                          <ChevronDown className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    </div>
                    {isOpen && (
                      <div
                        className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
                        style={{
                          background: '#f8fafc',
                          borderColor: 'rgba(15,74,155,0.15)',
                          boxShadow: '0 4px 16px rgba(15,74,155,0.06)',
                        }}
                      >
                        <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
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
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

        {/* ── SECTION 10: BOOK AN AP TUTOR (FINAL CTA) ── */}
      <FinalCTA
        title="Book an AP Tutor"
        subtitle="Online, matched to your child's AP course."
        button1Text="Book First AP Session"
        button1Href="/contact#form"
        subtext1="No commitment. Cancel anytime."
      />
    </Layout>
  );
}
