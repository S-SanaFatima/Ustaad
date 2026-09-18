import { useState, useEffect, useRef, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calculator, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Star,
  ArrowRight, ShieldCheck, Clock, Target, Check, Laptop,
  HelpCircle, MessageCircle, X, Timer, MapPin, TrendingUp, Quote,
  FileText, Video, UserCheck
} from 'lucide-react';
import { 
  Layout, 
  StatsBar, 
  WhatsAppIcon,
  SEOHead,
  WhyFamiliesChoose3DSection,
  InteractiveCardStack,
  MathsEquations3DSection,
  MathsBookComparisonSection,
  DubaiCurriculumAnalysisSection,
  DubaiMathsDiagnostic3D
} from './shared';
import {
  cityLocalBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  reviewSchema,
} from './shared/schemas';

const BOOKING = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20a%20Maths%20tutor%20in%20Dubai.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

const PARENT_REVIEWS = [
  {
    name: 'Omar H., Dubai Marina',
    initials: 'OH',
    subject: 'Edexcel A-Level Maths (9MA0) · Verified Google Review',
    stars: 5,
    text: 'My son moved to Dubai in Year 12 and struggled with the jump from IGCSE to A-Level Maths at his new school. His Ustaad tutor rebuilt the algebra and calculus foundations he had missed, worked through Edexcel past papers weekly, and helped him hit a grade A in his AS Maths mock by January.',
  },
];

const FAQS = [
  {
    q: 'Which Maths boards do Dubai schools most commonly sit?',
    a: "Cambridge IGCSE 0580 is the most common Maths board across Dubai British-curriculum schools including Dubai College, JESS, and Nord Anglia. Pearson Edexcel International GCSE 4MA1 sits at several Dubai schools including The Winchester School and Deira International School. AQA GCSE Maths appears at UK-national-programme schools only. Tell us your child's school and we confirm the board before matching a tutor.",
  },
  {
    q: 'My child is strong at Maths in class but freezes on the non-calculator paper. What specifically do you do?',
    a: 'The non-calculator paper (Paper 1 for AQA GCSE, or Paper 1 for Cambridge 0580 Core / Paper 2 for Extended) tests fluency, not method. Sessions drill mental arithmetic under time pressure, fraction and percentage speed, and question-selection order, which is the technique students at competitive Dubai schools rarely learn in class.',
  },
  {
    q: 'My child is choosing between IB Maths AA and IB Maths AI at a Dubai IB school. How do you support that decision?',
    a: 'IB Maths AA is required for most engineering, physics, and mathematics degrees. IB Maths AI suits students moving toward business, social sciences, or design at university. Our tutors work with students in both routes at Dubai IB schools. See the Maths hub for a full comparison.',
  },
  {
    q: 'My daughter is aiming for medicine at a UAE university. Which Maths grade profile does she actually need?',
    a: 'Most UAE medicine programmes require a strong IGCSE or GCSE Maths grade plus a science combination, and competitive university entry typically considers A-Level Maths or IB Maths AA at grade 7 or above. Our tutors work with pre-med Dubai students on the specific grade thresholds each target university publishes.',
  },
  {
    q: 'Our son is at a Dubai school that teaches Maths one year ahead. Will your tutor keep up?',
    a: 'Yes. Advanced-track Maths in Year 9 or Year 10 covering Year 11 IGCSE content is a Dubai school pattern we see often. Tutors are matched to the actual topic depth, not to nominal year group. If the school is running IGCSE topics in Year 9, we tutor at IGCSE level from day one.',
  },
  {
    q: 'Can the same tutor take my child from IGCSE Maths in Year 11 into A-Level Maths in Year 12?',
    a: 'Yes, and continuity through that summer is one of the strongest predictors of a smooth A-Level Maths start. Where families prefer, the same specialist stays through the IGCSE-to-A-Level bridge, particularly for Further Maths candidates.',
  },
  {
    q: 'My child wants engineering at a UK university. Which subjects should Maths tutoring connect with?',
    a: 'UK engineering degrees require A-Level Maths, usually A-Level Physics, and often Further Maths. Sessions can be coordinated across Maths and Physics with the same weekly plan. See Physics Tutor Dubai for the paired subject page.',
  },
];

function ReviewsScroller() {
  const n = PARENT_REVIEWS.length;
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (n <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % n), 5500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
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
      className="hidden md:block w-[22%] shrink-0 text-left opacity-40 hover:opacity-70 transition duration-300"
      aria-label={`Show review by ${PARENT_REVIEWS[idx].name}`}
    >
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden h-full">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]" />
        <div className="flex gap-0.5 mb-2">
          {[1, 2, 3, 4, 5].map((j) => <Star key={j} className="h-3 w-3 fill-[#C7A24A] text-[#C7A24A]" />)}
        </div>
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">&ldquo;{PARENT_REVIEWS[idx].text}&rdquo;</p>
        <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-100">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-[10px] notranslate shrink-0" translate="no">
            {PARENT_REVIEWS[idx].initials}
          </div>
          <span className="font-bold text-[#0a1f3d] text-xs notranslate truncate" translate="no">{PARENT_REVIEWS[idx].name.split(',')[0]}</span>
        </div>
      </div>
    </button>
  );

  const r = PARENT_REVIEWS[active];

  if (n === 1) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_32px_rgba(15,74,155,0.08)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((j) => <Star key={j} className="h-4 w-4 fill-[#C7A24A] text-[#C7A24A]" />)}
            </div>
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">Google · Verified Parent</span>
          </div>
          <p className="text-[#374151] text-[15px] sm:text-[16px] leading-relaxed mb-6 italic">
            &ldquo;{r.text}&rdquo;
          </p>
          <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_8px_rgba(15,74,155,0.28)] notranslate shrink-0" translate="no">
              {r.initials}
            </div>
            <div className="min-w-0">
              <div className="font-extrabold text-[#0a1f3d] text-[15px] notranslate truncate" translate="no">{r.name}</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5 truncate">{r.subject.replace('Verified Google review · ', '')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

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
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_8px_32px_rgba(15,74,155,0.10)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((j) => <Star key={j} className="h-4 w-4 fill-[#C7A24A] text-[#C7A24A]" />)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f4a9b]/70 bg-[#0f4a9b]/6 px-2.5 py-1 rounded-full">Google · Verified</span>
              </div>
              <p className="text-[#374151] text-[15px] sm:text-base leading-relaxed mb-5">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_8px_rgba(15,74,155,0.28)] notranslate shrink-0" translate="no">
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold text-[#0a1f3d] text-sm notranslate truncate" translate="no">{r.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5 truncate">{r.subject.replace('Verified Google review · ', '')}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <SideCard idx={nextIdx} />
      </div>

      <div className="flex items-center justify-center gap-3 mt-5">
        <button
          type="button"
          onClick={() => go(active - 1)}
          aria-label="Previous review"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white hover:border-[#0f4a9b] transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {PARENT_REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-6 bg-[#0f4a9b]' : 'w-1.5 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label="Next review"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white hover:border-[#0f4a9b] transition-all"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function MobileHeroBackground() {
  return (
    <div className="md:hidden absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.45, 0.35] }}
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
          <text x="0" y="3.5" textAnchor="middle" fill="#f0c96a" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
            MATHS
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
        <text x="238" y="90" fill="#f0c96a" fontSize="10" fontFamily="monospace" fontWeight="bold">
          Target: Grade 9 ★
        </text>

        <text x="24" y="195" fill="rgba(95,211,230,0.35)" fontSize="11" fontFamily="monospace">
          ∫ x² dx
        </text>
        <text x="24" y="320" fill="rgba(240,201,106,0.32)" fontSize="10.5" fontFamily="monospace">
          dy/dx = 2x
        </text>
        <text x="24" y="440" fill="rgba(255,255,255,0.28)" fontSize="9" fontFamily="monospace">
          sin²θ + cos²θ = 1
        </text>
        <text x="250" y="475" fill="rgba(95,211,230,0.3)" fontSize="10" fontFamily="monospace">
          ax² + bx + c = 0
        </text>
      </svg>
    </div>
  );
}

export default function MathsTutorDubaiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const serviceNode = {
    ...serviceSchema(
      'Maths Tutor Dubai',
      'One-to-one Maths tutoring in Dubai for GCSE, IGCSE and A-Level students. AQA, Edexcel, OCR and Cambridge specialists. Book a free trial lesson with Ustaad.',
      '/maths-tutor-dubai'
    ),
    areaServed: { '@type': 'City', name: 'Dubai' },
  };

  return (
    <Layout>
      <SEOHead
        title="Maths Tutor Dubai | Online GCSE, IGCSE & A-Level Maths Tuition | Ustaad"
        description="One-to-one Maths tutoring in Dubai for GCSE, IGCSE and A-Level students. AQA, Edexcel, OCR and Cambridge specialists. Book a free trial lesson with Ustaad."
        canonical="/maths-tutor-dubai"
        ogImage="/UpdatedImages/gcse-tutor-abu-dhabi-online-year-11-session.webp"
        placename="Dubai, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Dubai',
            url: '/maths-tutor-dubai',
            name: 'Ustaad, Maths Tutor Dubai',
            description: 'One-to-one Maths tutoring in Dubai for GCSE, IGCSE and A-Level students. AQA, Edexcel, OCR and Cambridge specialists. Book a free trial lesson with Ustaad.',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Maths', url: '/maths' },
            { name: 'Maths Tutor Dubai', url: '/maths-tutor-dubai' },
          ]),
          serviceNode,
          faqSchema(FAQS),
          reviewSchema('Ustaad, Online Maths Tutor Dubai', PARENT_REVIEWS.map((r) => ({
            author: r.name,
            reviewBody: r.text,
          }))),
        ]}
      />

      {/* ── HERO SECTION (USTAAD SIGNATURE NAVY & GOLD) ── */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Desktop SVG background */}
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full hidden md:block" aria-hidden="true">
            <defs>
              <linearGradient id="mathDubaiGrowthGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="mathDubaiHexGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0c96a" />
                <stop offset="100%" stopColor="#C7A24A" />
              </linearGradient>
              <radialGradient id="mathDubaiHexGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
              </radialGradient>
              <filter id="mathDubaiPglow"><feGaussianBlur stdDeviation="3" /></filter>
              <marker id="mathDubaiArrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(95,211,230,0.8)" />
              </marker>
            </defs>

            {(() => {
              const dots: ReactNode[] = [];
              for (let x = 40; x < 1400; x += 55)
                for (let y = 30; y < 600; y += 55)
                  dots.push(<circle key={`md_${x}_${y}`} cx={x} cy={y} r="1" fill="rgba(255,255,255,0.03)" />);
              return dots;
            })()}

            {/* Left growth trajectory line */}
            <path d="M 40 480 Q 200 460 360 140" fill="none" stroke="url(#mathDubaiGrowthGrad)" strokeWidth="3" filter="url(#mathDubaiPglow)" />
            <path d="M 40 480 Q 200 460 360 140" fill="none" stroke="url(#mathDubaiGrowthGrad)" strokeWidth="1.5" markerEnd="url(#mathDubaiArrow)" />
            <line x1="30" y1="480" x2="380" y2="480" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="40" y1="490" x2="40" y2="100" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <text x="350" y="115" fill="rgba(95,211,230,0.85)" fontSize="13" fontFamily="monospace" fontWeight="bold">Target: Grade 9</text>
            <text x="350" y="500" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">Exam Week</text>
            <text x="45" y="500" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">Current</text>

            {/* Right Maths Hexagon badge */}
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
                  <circle cx={HX} cy={HY} r={SIZE * 1.5} fill="url(#mathDubaiHexGlow)" />
                  <polygon points={pts.join(' ')} fill="none" stroke="url(#mathDubaiHexGrad)" strokeWidth="2" filter="url(#mathDubaiPglow)" />
                  <polygon points={pts.join(' ')} fill="none" stroke="rgba(240,201,106,0.5)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx={HX} cy={HY} r="25" fill="rgba(240,201,106,0.1)" stroke="#f0c96a" strokeWidth="1.5" />
                  <text x={HX} y={HY + 6} textAnchor="middle" fill="#f0c96a" fontSize="15" fontWeight="900" fontFamily="sans-serif">MATHS</text>
                  <text x={HX - 85} y={HY - 65} fill="rgba(95,211,230,0.5)" fontSize="11" fontFamily="monospace">f(x) = ax² + bx + c</text>
                  <text x={HX + 45} y={HY - 75} fill="rgba(180,180,255,0.5)" fontSize="11" fontFamily="monospace">dy/dx</text>
                  <text x={HX + 60} y={HY + 75} fill="rgba(240,201,106,0.5)" fontSize="11" fontFamily="monospace">∫ x dx</text>
                </>
              );
            })()}
          </svg>

          {/* Clean mobile background */}
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
            <span className="text-blue-100/90 text-[11px] sm:text-[12px] font-semibold tracking-wide">ONLINE MATHS TUITION · DUBAI</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
            className="font-extrabold tracking-tight text-white leading-[1.08] mb-3 md:mb-5 text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] max-w-[95%] sm:max-w-none"
          >
            Maths Tutors in Dubai{' '}
            <span className="block sm:inline" style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Who Turn Grades Around
            </span>
          </motion.h1>

          {/* Lead */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="text-blue-100/80 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mb-6 md:mb-8 px-2 italic"
          >
            One-to-one Maths tutoring for GCSE, IGCSE and A-Level students, matched to your child&apos;s exact exam board and school syllabus.
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
                Book Your Free Trial
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
                  Book Your Free Trial
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

      {/* ── STATS BAR ── */}
      <StatsBar />



      {/* ── SQUEEZE SECTION: GSAP PINNED HORIZONTAL GALLERY (Why Maths Slips in Dubai's Mixed-Curriculum Classrooms) ── */}
      <DubaiCurriculumAnalysisSection />

      {/* ── FREE TRIAL (Thirty Free Minutes That Tell You Everything) ── */}
      <section className="py-14 sm:py-20 bg-[#f4f7fc] border-b border-slate-200/80 relative overflow-hidden select-none">
        {/* Soft background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-[#0f4a9b]/10 via-[#C7A24A]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-xs font-bold mb-2">
              FREE TRIAL
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-2 tracking-tight">
              Thirty Free Minutes That Tell You Everything
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Free, and a real diagnostic, not a sales call.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            {/* Interactive Card Stack Container */}
            <div className="w-[330px] sm:w-[420px] md:w-[460px] h-[255px] sm:h-[275px]">
              <InteractiveCardStack
                cards={[
                  {
                    num: '01',
                    title: 'An honest conversation',
                    desc: 'About the board, the school, and the target grade.',
                    topBorder: 'from-[#0f4a9b] to-[#3b82f6]',
                    formulaChip: 'P(Grade ≥ 8) · Edexcel 1MA1',
                    chipStyle: 'bg-blue-50/90 text-[#0f4a9b] border-blue-200/80',
                    graphic: (
                      <svg viewBox="0 0 120 120" className="w-full h-full select-none overflow-visible">
                        <defs>
                          <radialGradient id="cardGlow1" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.14" />
                            <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <circle cx="60" cy="60" r="54" fill="url(#cardGlow1)" />
                        <circle cx="60" cy="60" r="48" fill="none" stroke="#0f4a9b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                        <circle cx="60" cy="60" r="36" fill="none" stroke="#cbd5e1" strokeWidth="0.8" />
                        <line x1="10" y1="60" x2="110" y2="60" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2 2" />
                        <line x1="60" y1="10" x2="60" y2="110" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2 2" />
                        <motion.ellipse
                          cx="60"
                          cy="60"
                          rx="48"
                          ry="18"
                          fill="none"
                          stroke="#0f4a9b"
                          strokeWidth="1.6"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                          style={{ originX: '60px', originY: '60px' }}
                        />
                        <motion.ellipse
                          cx="60"
                          cy="60"
                          rx="18"
                          ry="48"
                          fill="none"
                          stroke="#C7A24A"
                          strokeWidth="1.6"
                          animate={{ rotate: -360 }}
                          transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
                          style={{ originX: '60px', originY: '60px' }}
                        />
                        <circle cx="60" cy="60" r="4" fill="#C7A24A" />
                        <circle cx="60" cy="60" r="8" fill="none" stroke="#C7A24A" strokeWidth="0.8" strokeDasharray="2 2" />
                        <text x="66" y="44" fill="#0f4a9b" fontSize="10" fontFamily="monospace" fontWeight="bold">θ</text>
                        <text x="88" y="74" fill="#0f4a9b" fontSize="9" fontFamily="monospace" fontWeight="bold">r=1</text>
                        <text x="22" y="32" fill="#94a3b8" fontSize="8" fontFamily="monospace">sin(θ)</text>
                      </svg>
                    ),
                  },
                  {
                    num: '02',
                    title: 'A real past paper, live',
                    desc: 'Your child works a genuine exam question with the tutor.',
                    topBorder: 'from-[#C7A24A] to-[#f59e0b]',
                    formulaChip: 'dy/dx = 3x² - 6x · Q12 [4M]',
                    chipStyle: 'bg-amber-50/90 text-[#926815] border-amber-200/80',
                    graphic: (
                      <svg viewBox="0 0 120 120" className="w-full h-full select-none overflow-visible">
                        <defs>
                          <radialGradient id="cardGlow2" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#C7A24A" stopOpacity="0.14" />
                            <stop offset="100%" stopColor="#C7A24A" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <circle cx="60" cy="60" r="54" fill="url(#cardGlow2)" />
                        <line x1="14" y1="96" x2="108" y2="96" stroke="#cbd5e1" strokeWidth="1.2" />
                        <line x1="26" y1="106" x2="26" y2="16" stroke="#cbd5e1" strokeWidth="1.2" />
                        <line x1="26" y1="60" x2="108" y2="60" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="70" y1="96" x2="70" y2="16" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                        <path d="M 28 88 Q 60 22 96 88 Z" fill="#0f4a9b" fillOpacity="0.04" />
                        <path d="M 28 88 Q 60 22 96 88" fill="none" stroke="#0f4a9b" strokeWidth="2.4" strokeLinecap="round" />
                        <motion.line
                          x1="32"
                          y1="36"
                          x2="88"
                          y2="76"
                          stroke="#C7A24A"
                          strokeWidth="2.2"
                          strokeDasharray="4 3"
                          animate={{ rotate: [-9, 9, -9] }}
                          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                          style={{ originX: '60px', originY: '55px' }}
                        />
                        <circle cx="60" cy="55" r="4.5" fill="#C7A24A" />
                        <circle cx="60" cy="55" r="9" fill="none" stroke="#C7A24A" strokeWidth="1" strokeDasharray="2 2" />
                        <text x="68" y="42" fill="#926815" fontSize="10" fontFamily="monospace" fontWeight="bold">dy/dx</text>
                        <text x="78" y="90" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">∫ f(x)dx</text>
                        <text x="32" y="24" fill="#0f4a9b" fontSize="8" fontFamily="monospace">f'(x)=0</text>
                      </svg>
                    ),
                  },
                  {
                    num: '03',
                    title: 'A clear plan and target',
                    desc: 'You leave with a starting point and the route ahead.',
                    topBorder: 'from-[#0d9488] to-[#14b8a6]',
                    formulaChip: 'r = r₀ + λv · ΔGrade = +2',
                    chipStyle: 'bg-teal-50/90 text-[#0d9488] border-teal-200/80',
                    graphic: (
                      <svg viewBox="0 0 120 120" className="w-full h-full select-none overflow-visible">
                        <defs>
                          <radialGradient id="cardGlow3" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.14" />
                            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <circle cx="60" cy="60" r="54" fill="url(#cardGlow3)" />
                        <line x1="60" y1="60" x2="104" y2="82" stroke="#cbd5e1" strokeWidth="1.2" />
                        <line x1="60" y1="60" x2="16" y2="82" stroke="#cbd5e1" strokeWidth="1.2" />
                        <line x1="60" y1="60" x2="60" y2="14" stroke="#cbd5e1" strokeWidth="1.2" />
                        <text x="105" y="86" fill="#94a3b8" fontSize="8" fontFamily="monospace">X</text>
                        <text x="12" y="86" fill="#94a3b8" fontSize="8" fontFamily="monospace">Y</text>
                        <text x="62" y="14" fill="#94a3b8" fontSize="8" fontFamily="monospace">Z</text>
                        <polygon points="60,60 88,74 52,86 24,72" fill="#0d9488" fillOpacity="0.06" stroke="#0d9488" strokeWidth="0.8" strokeDasharray="3 3" />
                        <motion.circle
                          cx="60"
                          cy="60"
                          r="30"
                          fill="none"
                          stroke="#C7A24A"
                          strokeWidth="1.2"
                          strokeDasharray="3 3"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                          style={{ originX: '60px', originY: '60px' }}
                        />
                        <motion.line
                          x1="60"
                          y1="60"
                          x2="92"
                          y2="28"
                          stroke="#0d9488"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          animate={{ x2: [88, 96, 88], y2: [32, 24, 32] }}
                          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        />
                        <polygon points="92,28 84,33 89,39" fill="#0d9488" />
                        <circle cx="60" cy="60" r="4.5" fill="#0d9488" />
                        <text x="74" y="42" fill="#0d9488" fontSize="10.5" fontFamily="monospace" fontWeight="bold">λv</text>
                        <text x="34" y="48" fill="#C7A24A" fontSize="8" fontFamily="monospace">|v| = √Δ</text>
                      </svg>
                    ),
                  },
                  {
                    num: '04',
                    title: 'Method marks live in the steps',
                    desc: 'Step-by-step working shown live, not just the final answer.',
                    topBorder: 'from-[#0a1f3d] to-[#0f4a9b]',
                    formulaChip: '[M1][M2][A1] · x = (-b ± √Δ)/2a',
                    chipStyle: 'bg-slate-100/90 text-[#0a1f3d] border-slate-200/90',
                    graphic: (
                      <svg viewBox="0 0 120 120" className="w-full h-full select-none overflow-visible">
                        <defs>
                          <radialGradient id="cardGlow4" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.14" />
                            <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <circle cx="60" cy="60" r="54" fill="url(#cardGlow4)" />
                        <circle cx="60" cy="60" r="48" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 3" />
                        <motion.g
                          animate={{ rotate: [0, 360] }}
                          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                          style={{ originX: '60px', originY: '60px' }}
                        >
                          <polygon points="60,20 94,40 60,60 26,40" fill="#0a1f3d" fillOpacity="0.1" stroke="#0f4a9b" strokeWidth="1.6" />
                          <polygon points="26,40 60,60 60,100 26,80" fill="#0f4a9b" fillOpacity="0.15" stroke="#0f4a9b" strokeWidth="1.6" />
                          <polygon points="94,40 60,60 60,100 94,80" fill="#C7A24A" fillOpacity="0.22" stroke="#C7A24A" strokeWidth="1.6" />
                          <line x1="60" y1="20" x2="60" y2="60" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 2" />
                          <circle cx="60" cy="20" r="3" fill="#0f4a9b" />
                          <circle cx="94" cy="40" r="3" fill="#C7A24A" />
                          <circle cx="26" cy="40" r="3" fill="#0f4a9b" />
                          <circle cx="60" cy="100" r="3" fill="#C7A24A" />
                        </motion.g>
                        <circle cx="60" cy="60" r="4.5" fill="#C7A24A" />
                        <text x="68" y="58" fill="#0a1f3d" fontSize="9.5" fontFamily="monospace" fontWeight="black">[M1]</text>
                        <text x="96" y="86" fill="#C7A24A" fontSize="8.5" fontFamily="monospace" fontWeight="bold">[A1]</text>
                        <text x="18" y="86" fill="#0f4a9b" fontSize="8" fontFamily="monospace">x = (-b±√Δ)/2a</text>
                      </svg>
                    ),
                  },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="w-full h-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_16px_40px_rgba(15,74,155,0.08)] flex flex-col justify-between select-none relative overflow-hidden group"
                    style={{
                      backgroundImage: 'radial-gradient(#e2e8f0 0.85px, transparent 0.85px)',
                      backgroundSize: '15px 15px',
                    }}
                  >
                    {/* Top Accent Strip */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${step.topBorder}`} />

                    {/* Floating 3D Mathematical Blueprint in Background */}
                    <motion.div
                      className="absolute -right-4 -bottom-4 sm:-right-2 sm:-bottom-2 w-52 h-52 sm:w-64 sm:h-64 pointer-events-none opacity-25 sm:opacity-30 group-hover:opacity-40 transition-opacity duration-500 overflow-visible"
                      animate={{
                        x: [0, 8, -6, 0],
                        y: [0, -7, 5, 0],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 12 + idx * 2.5,
                        ease: 'easeInOut',
                      }}
                    >
                      {step.graphic}
                    </motion.div>

                    {/* Foreground Content */}
                    <div className="relative z-10">
                      {/* Top Row: Step Number & Badge */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <span className="text-2xl sm:text-3xl font-black text-[#C7A24A] leading-none drop-shadow-xs">
                          {step.num}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/95 text-slate-600 border border-slate-200/90 shadow-2xs backdrop-blur-xs">
                          Step {step.num} of 04
                        </span>
                      </div>

                      {/* Title & Desc */}
                      <h3 className="text-base sm:text-lg font-black text-[#0a1f3d] mb-1.5 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3 pr-6 sm:pr-10">
                        {step.desc}
                      </p>

                      {/* Formula & Spec Chip */}
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-md border text-[10px] font-mono font-bold shadow-2xs backdrop-blur-xs ${step.chipStyle}`}>
                        {step.formulaChip}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="relative z-10 pt-2.5 border-t border-slate-100/90 flex items-center justify-between text-[11px] text-slate-400 font-semibold backdrop-blur-[1px]">
                      <span>Drag or click card to cycle</span>
                      <span className="flex items-center gap-1 text-[#0f4a9b] font-bold">
                        Next Step &rarr;
                      </span>
                    </div>
                  </div>
                ))}
                randomRotation={true}
                sendToBackOnClick={true}
                autoplay={false}
                pauseOnHover={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY DUBAI MATHS MARKS SLIP EVEN WHEN METHOD IS RIGHT (3D Interactive Models) ── */}
      <DubaiMathsDiagnostic3D />

      {/* ── 3D MATHEMATICAL EQUATIONS & INTERACTIVE GEOMETRY ── */}
      <MathsEquations3DSection />

      {/* ── SESSION BLUEPRINT (How Online Maths Sessions Run) ── */}
      <section className="py-10 sm:py-14 bg-[#f4f7fc] border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-xs font-bold mb-2">
              SESSION BLUEPRINT
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-1.5 tracking-tight">
              How Online Maths Sessions Run
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Live past papers, marked in real time, with your child on screen.
            </p>
          </div>

          {/* Cards Container: Horizontally scrollable on mobile, single row (6 cols) on desktop */}
          <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-3.5 items-stretch overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            {[
              {
                num: '01',
                title: 'Live Past Papers',
                desc: 'AQA, Edexcel, OCR and Cambridge past papers opened on screen together.',
                kicker: 'Real-time Screen Collab',
                icon: FileText,
              },
              {
                num: '02',
                title: 'Live Mark Scheme',
                desc: 'Working checked against the official board scheme, method mark by method mark.',
                kicker: 'Official Board Criteria',
                icon: CheckCircle2,
              },
              {
                num: '03',
                title: 'Session Recordings',
                desc: 'Every session recorded so tricky topics like trigonometry can be rewatched.',
                kicker: 'On-Demand Archive',
                icon: Video,
              },
              {
                num: '04',
                title: 'Same Tutor Weekly',
                desc: 'One Maths specialist, never a rotating pool. The same face every week.',
                kicker: '1-to-1 Specialist Continuity',
                icon: UserCheck,
              },
              {
                num: '05',
                title: 'Fortnightly Report',
                desc: 'A short, honest progress note every two weeks on topics covered and gaps.',
                kicker: 'Transparent Updates',
                icon: TrendingUp,
              },
              {
                num: '06',
                title: 'Just a Laptop',
                desc: 'Just a laptop and Wi-Fi from anywhere in Dubai. We handle the rest.',
                kicker: 'Zero Travel · Dubai',
                icon: Laptop,
              },
            ].map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={idx}
                  className="w-[78vw] max-w-[290px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink bg-white rounded-2xl border border-[#0f4a9b]/25 p-4 lg:p-4.5 shadow-[0_4px_18px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_30px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Top accent gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]" />

                  <div>
                    {/* Top Row: Step Tag + Blue Icon Badge */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-mono font-black tracking-wider text-[#0f4a9b] bg-blue-50/90 px-2 py-0.5 rounded border border-blue-100/80 shadow-2xs">
                        STEP {step.num}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-[#0f4a9b] border border-[#0f4a9b] text-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-sm lg:text-[15px] font-black text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-1.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[11px] lg:text-xs text-slate-600 leading-relaxed mb-3">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center text-[10px] font-bold text-[#0f4a9b] tracking-tight">
                    <span className="truncate">{step.kicker}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Swipe indicator on mobile */}
          <div className="sm:hidden flex items-center justify-center gap-1.5 mt-3 text-[11px] font-mono text-slate-400">
            <span>Swipe across 6 steps</span>
            <span>→</span>
          </div>
        </div>
      </section>

      {/* ── TYPICAL OUTCOMES (Most Students Move One to Three Grades) ── */}
      <section className="py-14 sm:py-20 bg-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden">
        {/* Soft background glow decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-100/40 via-[#f0c96a]/10 to-transparent blur-3xl pointer-events-none -z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-xs font-bold mb-3 shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-[#0f4a9b]" />
              <span>TYPICAL OUTCOMES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-3 tracking-tight">
              Most Students Move One to Three Grades
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto italic">
              It shows first in mocks, then confidence, then the grade that counts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {[
              {
                location: 'Year 11, Arabian Ranches',
                level: 'GCSE Maths',
                start: '5',
                target: '7',
                jump: '+2 Grades',
                topBar: 'linear-gradient(90deg, #0f4a9b, #3b82f6)',
                afterGradient: 'linear-gradient(135deg, #0f4a9b 0%, #0a1f3d 100%)',
                badgeBg: 'bg-blue-50 text-[#0f4a9b] border-blue-100',
                quote: 'A shaky autumn mock became a secure grade 7 by summer, once non-calculator method was drilled weekly.',
              },
              {
                location: 'Year 10, Emirates Hills',
                level: 'IGCSE Maths',
                start: '6',
                target: '8',
                jump: '+2 Grades',
                topBar: 'linear-gradient(90deg, #0d9488, #14b8a6)',
                afterGradient: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                badgeBg: 'bg-teal-50 text-[#0d9488] border-teal-100',
                quote: 'Algebraic fractions and formula rearranging were the weak spot. Live worked examples closed the gap within a term.',
              },
              {
                location: 'Year 13, Downtown Dubai',
                level: 'A-Level Maths',
                start: 'C',
                target: 'A',
                jump: '+2 Grades',
                topBar: 'linear-gradient(90deg, #C7A24A, #eab308)',
                afterGradient: 'linear-gradient(135deg, #C7A24A 0%, #855d14 100%)',
                badgeBg: 'bg-amber-50 text-[#926815] border-amber-200/60',
                quote: 'Calculus and mechanics rebuilt from first principles turned confusion into a confident A grade.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(15,74,155,0.06)] hover:shadow-[0_16px_38px_rgba(15,74,155,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden group"
              >
                {/* Top Accent Indicator Strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ background: card.topBar }}
                />

                <div>
                  {/* Student Location & Syllabus Tag */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-[#0f4a9b] shrink-0" />
                      <span>{card.location}</span>
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${card.badgeBg}`}>
                      {card.level}
                    </span>
                  </div>

                  {/* Visual Score Transformation Block */}
                  <div className="flex items-center justify-between mb-6 px-4 py-3.5 rounded-xl bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] border border-slate-200/80 shadow-inner">
                    {/* Before Box */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center justify-center">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">
                        Before
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-slate-500 leading-none">
                        {card.start}
                      </span>
                    </div>

                    {/* Progression Bridge */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 sm:w-4 h-px bg-slate-300" />
                        <div className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ArrowRight className="w-3.5 h-3.5 text-[#C7A24A]" />
                        </div>
                        <div className="w-3 sm:w-4 h-px bg-slate-300" />
                      </div>
                      <span className="text-[10px] font-extrabold text-[#0f4a9b] bg-white px-2.5 py-0.5 rounded-full border border-blue-100 shadow-xs whitespace-nowrap">
                        {card.jump}
                      </span>
                    </div>

                    {/* After Box */}
                    <div
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl text-white shadow-md flex flex-col items-center justify-center"
                      style={{
                        background: card.afterGradient,
                      }}
                    >
                      <span className="text-[9px] font-bold text-white/80 uppercase tracking-wider leading-none mb-1">
                        After
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-white leading-none">
                        {card.target}
                      </span>
                    </div>
                  </div>

                  {/* Outcome Quote */}
                  <div className="mb-6">
                    <div className="flex items-start gap-2.5">
                      <Quote className="w-4 h-4 text-[#C7A24A] shrink-0 mt-0.5 opacity-75" />
                      <p className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed italic">
                        &ldquo;{card.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verification Footer */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 font-semibold text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Verified Dubai Academic Outcome</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline-block">
                    Dubai, UAE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DUBAI FAMILIES CHOOSE USTAAD (COMPACT 3D GYRO CENTERPIECE) ── */}
      <WhyFamiliesChoose3DSection
        location="Dubai"
        badge="WHY DUBAI FAMILIES CHOOSE USTAAD"
        title="Specialist Maths Tutors, Carefully Vetted"
        subtitle="Curriculum-specialist 1-to-1 tutoring engineered for grade jumps, complete clarity, and stress-free routines."
        leftCards={[
          {
            title: 'Maths specialists only',
            desc: 'Interviewed for how they teach Maths specifically, and reference-checked.',
          },
          {
            title: 'Tutors who know Dubai schools',
            desc: "They teach to your child's exact school scheme and exam board.",
          },
          {
            title: 'The same tutor every week',
            desc: 'One consistent face, never a rotating pool.',
          },
        ]}
        rightCards={[
          {
            title: 'Explained until it clicks',
            desc: 'Hard topics broken down until the method finally makes sense.',
          },
          {
            title: 'Parents kept in the loop',
            desc: 'A short, honest progress note every fortnight.',
          },
          {
            title: 'Built around your week',
            desc: 'Evening, weekend and Ramadan slots, moved when you travel.',
          },
        ]}
      />

      {/* ── MEET YOUR MATHS TUTORS (DUBAI SPECIALISTS) ── */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden" id="maths-tutors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-xs font-bold mb-3 shadow-xs">
              <UserCheck className="w-3.5 h-3.5 text-[#0f4a9b]" />
              <span>Vetted Maths Specialists</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-3 tracking-tight">
              Meet Your Dubai Maths Tutors
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Dedicated Maths teachers with verified track records across Dubai schools and exam boards.
            </p>
          </div>

          {/* Tutor Cards Grid (Horizontal swipe on mobile, 2-column on desktop) */}
          <div className="flex sm:grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 px-4 sm:px-0 -mx-4 sm:mx-0 scrollbar-none">
            {/* Fahad Khan */}
            <article className="w-[85vw] max-w-[340px] sm:w-full sm:max-w-none flex-shrink-0 sm:flex-shrink snap-center bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgba(15,74,155,0.06)] hover:shadow-[0_16px_40px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/40 transition-all duration-300 flex flex-col sm:flex-row group h-full">
              {/* Photo Column */}
              <div className="relative w-full sm:w-[155px] lg:w-[165px] h-48 sm:h-auto overflow-hidden bg-gradient-to-br from-[#0a1f3d] to-[#0f4a9b] flex-shrink-0">
                <img
                  src="/images/tutors/fahad-khan-cover.jpg"
                  alt="Fahad Khan, Senior Maths Teacher at Ustaad UAE"
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute top-2.5 left-2.5 z-10 w-7 h-7 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] text-white font-extrabold text-[11px] flex items-center justify-center shadow-md">
                  FK
                </div>
                <span className="absolute top-2.5 right-2.5 sm:top-auto sm:bottom-2.5 sm:left-2.5 sm:right-auto z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#0a1f3d] text-[9.5px] font-extrabold shadow-sm">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Screened
                </span>
              </div>

              {/* Info Column */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] leading-snug">
                    Fahad Khan
                  </h3>
                  <div className="text-xs font-bold text-[#0f4a9b] mb-3">
                    Senior Maths Teacher · Ustaad UAE
                  </div>

                  <div className="space-y-2 py-2.5 border-y border-slate-100 text-[12px] text-slate-700">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Credentials
                      </span>
                      <span className="font-semibold text-[#0a1f3d]">
                        BS Mathematics, B.Ed · 10+ years IGCSE and A-Level
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Dubai Specialty
                      </span>
                      <span className="font-semibold text-slate-600 leading-snug block">
                        Cambridge IGCSE 0580 Extended and Pearson Edexcel International 4MA1. Trains students to protect method marks on Paper 4.
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Recent Student
                      </span>
                      <span className="font-semibold text-[#0f4a9b]">
                        Cambridge 0580 grade 6 to grade 9 across one term of weekly sessions.
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Availability
                      </span>
                      <span className="font-semibold text-[#0a1f3d]">
                        Weekday evenings and Saturday morning intensive blocks (Dubai time).
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 pt-1">
                  <a
                    href="/tutors/fahad-khan"
                    className="flex items-center justify-center px-3 py-2 rounded-lg bg-slate-100 hover:bg-[#0f4a9b] text-[#0a1f3d] hover:text-white font-bold text-xs transition-all duration-300 text-center"
                  >
                    View profile
                  </a>
                  <a
                    href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20request%20Fahad%20Khan%20for%20a%20trial%20lesson."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-3 py-2 rounded-lg bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white font-bold text-xs hover:shadow-sm hover:scale-[1.02] transition-all duration-300 text-center"
                  >
                    Request Fahad
                  </a>
                </div>
              </div>
            </article>

            {/* Tabraiz Khan */}
            <article className="w-[85vw] max-w-[340px] sm:w-full sm:max-w-none flex-shrink-0 sm:flex-shrink snap-center bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgba(15,74,155,0.06)] hover:shadow-[0_16px_40px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/40 transition-all duration-300 flex flex-col sm:flex-row group h-full">
              {/* Photo Column */}
              <div className="relative w-full sm:w-[155px] lg:w-[165px] h-48 sm:h-auto overflow-hidden bg-gradient-to-br from-[#0e448c] to-[#082d61] flex-shrink-0">
                <img
                  src="/images/tutors/tabraiz-khan-cover.jpg"
                  alt="Tabraiz Khan, Senior Maths and Statistics Teacher at Ustaad UAE"
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082d61]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute top-2.5 left-2.5 z-10 w-7 h-7 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] text-white font-extrabold text-[11px] flex items-center justify-center shadow-md">
                  TK
                </div>
                <span className="absolute top-2.5 right-2.5 sm:top-auto sm:bottom-2.5 sm:left-2.5 sm:right-auto z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#0a1f3d] text-[9.5px] font-extrabold shadow-sm">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Screened
                </span>
              </div>

              {/* Info Column */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] leading-snug">
                    Tabraiz Khan
                  </h3>
                  <div className="text-xs font-bold text-[#0f4a9b] mb-3">
                    Senior Maths and Statistics Teacher · Ustaad UAE
                  </div>

                  <div className="space-y-2 py-2.5 border-y border-slate-100 text-[12px] text-slate-700">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Credentials
                      </span>
                      <span className="font-semibold text-[#0a1f3d]">
                        Master in Statistics · Cambridge Certified · 9 years
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Dubai Specialty
                      </span>
                      <span className="font-semibold text-slate-600 leading-snug block">
                        IB Maths Analysis and Approaches (AA), IB Maths Applications and Interpretation (AI), A-Level Further Maths.
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Recent Student
                      </span>
                      <span className="font-semibold text-[#0f4a9b]">
                        IB Maths AA HL predicted grade 5 to final grade 7.
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Availability
                      </span>
                      <span className="font-semibold text-[#0a1f3d]">
                        Weekday evenings and weekend morning slots (Dubai time).
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 pt-1">
                  <a
                    href="/tutors/tabraiz-khan"
                    className="flex items-center justify-center px-3 py-2 rounded-lg bg-slate-100 hover:bg-[#0f4a9b] text-[#0a1f3d] hover:text-white font-bold text-xs transition-all duration-300 text-center"
                  >
                    View profile
                  </a>
                  <a
                    href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20request%20Tabraiz%20Khan%20for%20a%20trial%20lesson."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-3 py-2 rounded-lg bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white font-bold text-xs hover:shadow-sm hover:scale-[1.02] transition-all duration-300 text-center"
                  >
                    Request Tabraiz
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP CTA (Stuck on a Maths question?) ── */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0d2c58 50%, #0f4a9b 100%)' }}
          >
            {/* Subtle background ambient glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7A24A]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#25D366]/10 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                Stuck on a Maths question?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-xl">
                Send any AQA, Edexcel, OCR or Cambridge Maths past-paper question. A specialist replies with a clear worked solution.
              </p>
              <p className="text-[11px] font-semibold text-blue-200/90 mt-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#f0c96a]" /> Average reply time: 12 minutes
              </p>
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] hover:scale-105 transition-all shadow-lg shadow-[#25D366]/25"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── PARENT REVIEWS (ReviewsScroller matching reference screenshot) ── */}
      <section className="py-12 lg:py-14 relative overflow-hidden bg-[#f4f7fc] border-y border-slate-100">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#0f4a9b]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#C7A24A]/10 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-[#0a1f3d] mb-3 shadow-sm">
              <span className="text-[#C7A24A] tracking-tighter">★★★★★</span>
              <span>5.0 · Verified Google reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d]">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Dubai Families</span>
            </h2>
          </div>
          <ReviewsScroller />
        </div>
      </section>

      {/* ── COMMON QUESTIONS (FAQ Accordion matching reference screenshot) ── */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
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
                Honest answers to the Maths tutoring questions Dubai parents ask before their first session.
              </p>
            </motion.div>

            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {FAQS.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{
                          width: 40, height: 40, minWidth: 40, minHeight: 40,
                          background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                          color: isOpen ? '#fff' : '#0f4a9b',
                          transition: 'background 300ms ease, color 300ms ease',
                          cursor: 'pointer', border: 'none', boxShadow: 'inset 0 0 0 2px #fff',
                        }}
                      >
                        ?
                      </button>

                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border bg-white shadow-sm"
                        style={{ minHeight: '52px', padding: '10px 16px', cursor: 'pointer', borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)' }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{f.q}</span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 32, height: 32, minWidth: 32, minHeight: 32, borderRadius: '50%',
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
                          <div className="flex items-start gap-3 rounded-2xl border p-4.5 bg-[#f8fafc]" style={{ borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 4px 16px rgba(15,74,155,0.06)' }}>
                            <p className="flex-1 text-gray-600 text-[13.5px] leading-relaxed">{f.a}</p>
                            <span className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, background: '#0f4a9b', color: '#fff' }}>
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

      {/* ── CLOSING CTA & RELATED PAGES (Matching reference screenshots 1 & 2) ── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4">Book your free Maths trial in Dubai</h2>
            <p className="text-gray-600 text-[15px]">Tell us the subject, year group and school. We match a specialist fast.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-12 items-stretch">
            <div className="bg-[#f4f7fc] p-8 rounded-[24px] border border-[#0f4a9b]/10 flex flex-col h-full text-center hover:shadow-[0_12px_32px_rgba(15,74,155,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#f0c96a]/20 text-[#b8883f] flex items-center justify-center mb-5 mx-auto">
                <Star className="w-8 h-8 fill-current" />
              </div>
              <h3 className="text-[18px] font-extrabold text-[#0a1f3d] mb-2">Free First Lesson</h3>
              <p className="text-[14px] text-gray-500 mb-6 leading-relaxed flex-1">
                Thirty online minutes with a matched Maths tutor to see if it&apos;s the right fit.
              </p>
              <a
                href={BOOKING}
                className="mt-auto w-full min-h-[48px] bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] hover:brightness-110 text-white py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(199,162,74,0.3)] hover:-translate-y-0.5"
              >
                Book a Free Trial Lesson
              </a>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgba(37,211,102,0.08)] border border-[#25D366]/20 flex flex-col h-full text-center hover:shadow-[0_12px_40px_rgba(37,211,102,0.15)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-5 mx-auto">
                <WhatsAppIcon className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="text-[18px] font-extrabold text-[#0a1f3d] mb-2">Get a Free Solution in 15 Min</h3>
              <p className="text-[14px] text-gray-500 mb-6 leading-relaxed flex-1">
                Send any past-paper question and get a reply in fifteen minutes.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full min-h-[48px] bg-[#25D366] hover:bg-[#20b958] text-white py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" /> Message Us
              </a>
            </div>
          </div>

          <div className="bg-[#f4f7fc] rounded-3xl p-6 sm:p-8 border border-gray-100">
            <h4 className="text-[15px] font-bold text-[#0a1f3d] mb-6 border-b border-gray-200 pb-4">Related pages</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <a href="/gcse-tutor-dubai" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">
                  GCSE Maths Dubai
                </a>
                <p className="text-[12px] text-gray-500">For non-calc drills, Paper 1 timing and Higher tier prep.</p>
              </div>
              <div>
                <a href="/igcse-tutor-dubai" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">
                  IGCSE Maths Dubai
                </a>
                <p className="text-[12px] text-gray-500">Cambridge 0580 and Edexcel 4MA1 past paper mastery.</p>
              </div>
              <div>
                <a href="/a-level" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">
                  A-Level Maths Dubai
                </a>
                <p className="text-[12px] text-gray-500">Pure, Mechanics and Statistics modules, board by board.</p>
              </div>
              <div>
                <a href="/maths-tutor-abu-dhabi" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">
                  Maths Tutor Abu Dhabi
                </a>
                <p className="text-[12px] text-gray-500">The same specialist model, for families across the capital.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
