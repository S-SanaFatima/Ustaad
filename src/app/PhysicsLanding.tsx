import { useState, useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Atom, Zap, Waves, Thermometer, Gauge, CheckCircle2, ArrowRight, X,
  ChevronDown, ChevronLeft, ChevronRight, Sparkles, FileSearch, Wrench, Timer, PenTool,
  FlaskConical, BookOpen, Calculator, MapPin, Phone, Mail, HelpCircle, Layers, GraduationCap,
  Scale, Binary, Activity, Compass, AlertTriangle, ShieldCheck, Brain,
} from 'lucide-react';
import { Layout, GoldButton, FinalCTA, StatsBar, SchoolsMarquee, WhatsAppIcon } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, courseSchema } from './shared/schemas';
import RelatedContent from './shared/RelatedContent';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20ask%20about%20IGCSE%20or%20A-Level%20physics%20tutoring%20in%20Abu%20Dhabi';

const physicsSchoolLogos = [
  { name: 'Cranleigh Abu Dhabi', file: 'cranleigh.png', alt: 'Cranleigh Abu Dhabi logo, a premium Saadiyat school for IGCSE and A-Level physics students', scale: 1.25 },
  { name: 'The British International School Abu Dhabi', file: 'bisad.png', alt: 'The British International School Abu Dhabi logo, a Nord Anglia school for IGCSE and A-Level physics', scale: 1.25 },
  { name: 'Brighton College Abu Dhabi', file: 'brighton.png', alt: 'Brighton College Abu Dhabi logo, a British school with strong A-Level physics provision in the capital', scale: 1.25 },
  { name: 'Al Yasmina Academy', file: 'al-yasmina-academy-abu-dhabi.png', alt: 'Al Yasmina Academy logo, a British curriculum school in Khalifa City Abu Dhabi teaching IGCSE physics', scale: 1.25 },
  { name: 'Repton School Abu Dhabi', file: 'repton.png', alt: 'Repton School Abu Dhabi logo, a British and IB school in Abu Dhabi for IGCSE and A-Level physics', scale: 1.25 },
  { name: 'Al Basma British School', file: 'albasma.png', alt: 'Al Basma British School logo, an ADEK Very Good British school in Abu Dhabi for IGCSE physics', scale: 1.25 },
];

/* faint physics grid background */
const PhysGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'pgrid-l' : 'pgrid-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(15,74,155,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'pgrid-l' : 'pgrid-d'})`} />
  </svg>
);

type Challenge = { icon: ReactNode; title: string; problem: string; link?: { label: string; href: string } };

/* ─── Challenges Accordion (Where Physics Marks Vanish — 5 Cards) ─── */
function ChallengesAccordion({ challenges }: { challenges: Challenge[] }) {
  const [active, setActive] = useState<number>(-1);

  return (
    <div className="relative">
      <div className="flex flex-col gap-[10px]">
        {challenges.map((c, i) => {
          const isOpen = active === i;
          return (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: 40, height: 40, minWidth: 40, minHeight: 40,
                    background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                    color: isOpen ? '#fff' : '#0f4a9b',
                    transition: 'background 300ms ease, color 300ms ease',
                    cursor: 'pointer', border: 'none', boxShadow: 'inset 0 0 0 2px #fff',
                  }}
                  aria-label={`Toggle challenge ${c.title}`}
                >
                  <span className="flex items-center justify-center w-full h-full">{c.icon}</span>
                </button>

                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex-1 flex items-center gap-3 text-left rounded-full border"
                  style={{ minHeight: '48px', padding: '8px 14px', cursor: 'pointer', background: 'transparent', borderColor: 'rgba(15,74,155,0.1)' }}
                >
                  <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{c.title}</span>
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
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="ml-[52px] mt-1">
                      <div className="rounded-2xl px-4 py-3" style={{ background: 'linear-gradient(135deg, rgba(15,74,155,0.06) 0%, rgba(30,91,168,0.03) 100%)', border: '1px solid rgba(15,74,155,0.12)', backdropFilter: 'blur(8px)' }}>
                        <p className="text-[13px] text-[#3a4f6e] leading-relaxed">
                          {c.problem}
                          {c.link && (
                            <span className="block mt-1.5">
                              <a href={c.link.href} className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                                {c.link.label}
                              </a>
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ChallengesCarousel({ challenges }: { challenges: Challenge[] }) {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(15,74,155,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0f4a9b]" />
              <span className="text-sm font-bold">Exam Insight</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
              Where Physics{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">
                Marks Vanish
              </span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Most physics marks are not lost on the physics. They go on the five lines of working either side of it.
            </p>
          </div>

          <ChallengesAccordion challenges={challenges} />
        </div>
      </div>
    </section>
  );
}

const Eyebrow = ({ icon, text, dark = false }: { icon: React.ReactNode; text: string; dark?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-5 border ${dark ? 'bg-white/5 border-white/15 text-blue-200' : 'bg-[#0f4a9b]/5 border-[#0f4a9b]/15 text-[#0f4a9b]'}`}>
    {icon}{text}
  </div>
);

/* ─── Parents Testimonial Slider — Abu Dhabi parents only ─── */
const PARENT_REVIEWS = [
  { name: 'Wadeema Al M', initials: 'WA', location: 'Abu Dhabi, UAE', text: 'Very good tutoring institute with supportive tutor and clear teaching methods. Would definitely recommend to anyone looking for quality education.' },
];

function ParentsSlider() {
  const [index, setIndex] = useState(0);
  const count = PARENT_REVIEWS.length;
  const go = (i: number) => setIndex(((i % count) + count) % count);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count]);

  const r = PARENT_REVIEWS[index];

  return (
    <div>
      <div className="relative min-h-[230px] sm:min-h-[210px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl p-5 sm:p-6 lg:p-8 overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
          >
            <div className="absolute top-3 left-4 text-[90px] font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(240,201,106,0.12)', fontFamily: 'Georgia, serif' }}>“</div>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.06) 100%)' }} />
            <div className="relative z-10">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, si) => (
                  <span key={si} className="text-[#f0c96a] text-sm">★</span>
                ))}
              </div>
              <p className="text-white/90 text-[15px] sm:text-[16px] leading-[1.7] mb-5 font-medium text-justify">
                {r.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-extrabold text-white shrink-0 border-2 border-white/20 notranslate" translate="no"
                  style={{ background: 'linear-gradient(135deg, rgba(240,201,106,0.3), rgba(199,162,74,0.5))' }}>
                  {r.initials}
                </div>
                <div>
                  <p className="text-white font-extrabold text-[14px] leading-tight notranslate" translate="no">{r.name}</p>
                  <p className="text-blue-200/70 text-[11px] mt-0.5 notranslate" translate="no">{r.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous review"
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all hover:-translate-x-0.5"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </button>

          <div className="flex items-center gap-2">
            {PARENT_REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to review ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 22 : 8,
                  height: 8,
                  background: i === index ? 'linear-gradient(92deg,#f0c96a,#fde68a)' : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(index + 1)}
            aria-label="Next review"
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all hover:translate-x-0.5"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Exam Board Decoder Minimal Component ─── */
const EXAM_BOARDS_DATA = [
  {
    board: 'Cambridge IGCSE 0625',
    level: 'IGCSE',
    papers: 'Papers 1–4 (MCQ & Theory) + Paper 5/6 (Practical)',
    rule: 'Tier decides the paper. A Core student never sits Paper 4.',
    href: '/igcse',
  },
  {
    board: 'Edexcel IGCSE 4PH1',
    level: 'IGCSE',
    papers: 'Paper 1P & Paper 2P (Theory & Applications)',
    rule: 'No tiers. Every student sits the same two papers.',
    href: '/igcse',
  },
  {
    board: 'Cambridge A-Level 9702',
    level: 'A-Level',
    papers: 'AS Papers 1–3 + A2 Papers 4–5 (Theory & Lab)',
    rule: 'Paper 3 is lab practical. Paper 5 is written analysis.',
    href: '/a-level',
  },
  {
    board: 'Edexcel A-Level 9PH0',
    level: 'A-Level',
    papers: 'Papers 1, 2 & 3 (Theory, Fields & Synoptic)',
    rule: 'Paper 3 covers general and practical principles.',
    href: '/a-level',
  },
];

function ExamBoardDecoderSection() {
  return (
    <section className="py-8 sm:py-10 bg-[#f8fafd] border-y border-slate-200/70" aria-labelledby="board-decoder-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <Eyebrow icon={<Layers className="h-3.5 w-3.5" />} text="Exam Board Decoder" />
          <h2 id="board-decoder-heading" className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
            Which physics paper does your child{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
              actually sit?
            </span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed">
            Abu Dhabi schools enter students for different boards and tiers. We confirm the specification before the first lesson.
          </p>
        </div>

        {/* 4 Minimal Compact Cards Grid */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pb-3.5 sm:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 scroll-pl-4 sm:scroll-pl-0">
          {EXAM_BOARDS_DATA.map((card, i) => (
            <div
              key={i}
              className="w-[82vw] max-w-[300px] sm:w-auto sm:max-w-none snap-start shrink-0 sm:shrink bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-[#0f4a9b]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="text-[11.5px] font-extrabold text-[#0f4a9b]">
                    {card.board}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                    {card.level}
                  </span>
                </div>

                <p className="text-[11.5px] text-slate-700 font-medium leading-relaxed mb-2.5">
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">Papers:</span>
                  {card.papers}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-2.5 mt-1">
                <p className="text-[11px] text-amber-900 bg-amber-50/80 border border-amber-200/50 rounded-md p-2 italic mb-2 leading-snug">
                  {card.rule}
                </p>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0f4a9b] hover:text-[#0a3a79]"
                >
                  View Track
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Physics Micro-Animations & 3D Tilt Card ─── */
function MechanicsMicroAnimation({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="trajGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#1e5ba8" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="1" />
          </linearGradient>
          <filter id="mballglow"><feGaussianBlur stdDeviation="2.5"/></filter>
        </defs>

        {/* Ground reference line */}
        <line x1="4" y1="50" x2="56" y2="50" stroke="#0f4a9b" strokeOpacity="0.5" strokeWidth="2.2" strokeDasharray="4 4" />

        {/* Parabolic Trajectory */}
        <path
          d="M 6 50 Q 30 10 54 50"
          stroke="url(#trajGrad)"
          strokeWidth="3.2"
          strokeDasharray="5 3"
          fill="none"
        />

        {/* Tangent Velocity Vector Arrow */}
        <g
          style={{
            transformOrigin: '30px 22px',
            transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transform: isHovered ? 'rotate(-32deg) scale(1.2)' : 'rotate(0deg) scale(1)',
          }}
        >
          <line x1="14" y1="22" x2="46" y2="22" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
          <polygon points="45,17 53,22 45,27" fill="#d97706" />
          <text x="44" y="14" fill="#0f4a9b" fontSize="11" fontWeight="900" fontFamily="monospace">v</text>
        </g>

        {/* Bouncing Projectile Mass */}
        <motion.circle
          cx="30"
          cy="22"
          r="6"
          fill="#0f4a9b"
          stroke="#f59e0b"
          strokeWidth="2.2"
          animate={isHovered ? { y: [-9, 5, -9], scale: [1, 1.18, 1] } : { y: [0, -4, 0], scale: 1 }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.0 : 2.2, ease: 'easeInOut' }}
        />
        <circle cx="30" cy="22" r="11" fill="#0f4a9b" opacity={isHovered ? 0.45 : 0.22} filter="url(#mballglow)" />
      </svg>
    </div>
  );
}

function ElectricityMicroAnimation({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        <defs>
          <filter id="elecGlow"><feGaussianBlur stdDeviation="3"/></filter>
        </defs>

        {/* Circuit Loop */}
        <rect
          x="8"
          y="10"
          width="44"
          height="40"
          rx="10"
          stroke="#0f4a9b"
          strokeWidth="3.2"
          strokeOpacity={isHovered ? 1 : 0.85}
          className="transition-all duration-300"
        />

        {/* Capacitor / Power Gap */}
        <rect x="23" y="8" width="14" height="4" fill="#fff" />
        <line x1="24" y1="5" x2="24" y2="15" stroke="#f59e0b" strokeWidth="3.2" strokeLinecap="round" />
        <line x1="36" y1="7" x2="36" y2="13" stroke="#0f4a9b" strokeWidth="3.2" strokeLinecap="round" />

        {/* Moving Electron Particles with glow */}
        <motion.circle
          r="3.5"
          fill="#00d4ff"
          stroke="#fff"
          strokeWidth="1.2"
          animate={{
            cx: [8, 52, 52, 8, 8],
            cy: [50, 50, 10, 10, 50],
            opacity: [1, 1, 1, 1, 1],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.3 : 2.6, ease: 'linear' }}
        />
        <motion.circle
          r="3"
          fill="#f59e0b"
          stroke="#fff"
          strokeWidth="1"
          animate={{
            cx: [52, 8, 8, 52, 52],
            cy: [10, 10, 50, 50, 10],
            opacity: [1, 1, 1, 1, 1],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.3 : 2.6, ease: 'linear' }}
        />

        {/* Center Spark / Voltage Indicator */}
        <path
          d="M 31 20 L 24 30 L 32 30 L 27 40 L 37 28 L 29 28 Z"
          fill={isHovered ? '#f59e0b' : '#0f4a9b'}
          filter="url(#elecGlow)"
          opacity={isHovered ? 0.75 : 0.35}
        />
        <path
          d="M 31 20 L 24 30 L 32 30 L 27 40 L 37 28 L 29 28 Z"
          fill={isHovered ? '#f59e0b' : '#0f4a9b'}
          className="transition-colors duration-300"
          style={{
            transformOrigin: '30px 30px',
            transform: isHovered ? 'scale(1.2)' : 'scale(1.05)',
          }}
        />
      </svg>
    </div>
  );
}

function WavesMicroAnimation({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="prismGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Triangular Prism */}
        <polygon
          points="30,7 52,43 8,43"
          fill="url(#prismGrad)"
          stroke="#0f4a9b"
          strokeWidth="2.6"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />

        {/* Incident light beam */}
        <line
          x1="3"
          y1="28"
          x2="22"
          y2="26"
          stroke="#0f4a9b"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Dispersed Spectrum Rays (Red, Green, Violet) */}
        <motion.line
          x1="36"
          y1="28"
          x2="57"
          y2="18"
          stroke="#ef4444"
          strokeWidth="2.8"
          strokeLinecap="round"
          animate={isHovered ? { opacity: 1, x2: 58, y2: 16 } : { opacity: 0.95, x2: 56, y2: 19 }}
          transition={{ duration: 0.3 }}
        />
        <circle cx="56" cy="19" r="1.8" fill="#ef4444" />

        <motion.line
          x1="36"
          y1="28"
          x2="57"
          y2="28"
          stroke="#10b981"
          strokeWidth="2.8"
          strokeLinecap="round"
          animate={isHovered ? { opacity: 1, x2: 58, y2: 28 } : { opacity: 0.95, x2: 56, y2: 28 }}
          transition={{ duration: 0.3 }}
        />
        <circle cx="56" cy="28" r="1.8" fill="#10b981" />

        <motion.line
          x1="36"
          y1="28"
          x2="57"
          y2="38"
          stroke="#8b5cf6"
          strokeWidth="2.8"
          strokeLinecap="round"
          animate={isHovered ? { opacity: 1, x2: 58, y2: 40 } : { opacity: 0.95, x2: 56, y2: 37 }}
          transition={{ duration: 0.3 }}
        />
        <circle cx="56" cy="37" r="1.8" fill="#8b5cf6" />

        {/* Oscillating sine wave at bottom */}
        <motion.path
          d="M 8 53 Q 18 46 28 53 T 48 53 T 56 53"
          stroke="#0f4a9b"
          strokeWidth="2.6"
          fill="none"
          strokeOpacity={isHovered ? 1 : 0.85}
          animate={{ d: ['M 8 53 Q 18 46 28 53 T 48 53 T 56 53', 'M 8 53 Q 18 60 28 53 T 48 53 T 56 53', 'M 8 53 Q 18 46 28 53 T 48 53 T 56 53'] }}
          transition={{ repeat: Infinity, duration: isHovered ? 0.9 : 1.8, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

function ThermalQuantumMicroAnimation({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        <defs>
          <radialGradient id="qCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Concentric Quantum Energy Shells */}
        <circle cx="30" cy="30" r="24" stroke="#0f4a9b" strokeOpacity="0.45" strokeWidth="1.8" strokeDasharray="4 4" />
        <circle cx="30" cy="30" r="15" stroke="#0f4a9b" strokeOpacity="0.7" strokeWidth="1.8" />

        {/* Quantum Nucleus */}
        <circle cx="30" cy="30" r="13" fill="url(#qCoreGlow)" opacity={isHovered ? 1 : 0.55} />
        <circle cx="30" cy="30" r="6.5" fill="#0f4a9b" stroke="#f59e0b" strokeWidth="1.8" />

        {/* Gas molecules kinetic motion */}
        <motion.circle
          cx="17"
          cy="21"
          r="4"
          fill="#ef4444"
          stroke="#fff"
          strokeWidth="1.2"
          animate={isHovered ? { x: [-6, 9, -5, -6], y: [7, -8, 4, 7] } : { x: [-3, 3, -3], y: [3, -3, 3] }}
          transition={{ repeat: Infinity, duration: isHovered ? 0.7 : 1.8, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="43"
          cy="39"
          r="3.5"
          fill="#06b6d4"
          stroke="#fff"
          strokeWidth="1.2"
          animate={isHovered ? { x: [7, -9, 4, 7], y: [-6, 7, -4, -6] } : { x: [3, -3, 3], y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: isHovered ? 0.6 : 1.6, ease: 'easeInOut' }}
        />

        {/* Emitted Photon Packet (E = hf) */}
        <motion.g
          animate={{
            x: [0, 18],
            y: [0, -18],
            opacity: [0, 1, 0],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.0 : 1.9, ease: 'easeOut' }}
        >
          <path d="M 30 30 Q 35 24 40 30 T 50 30" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="50" cy="30" r="3" fill="#f59e0b" />
        </motion.g>
      </svg>
    </div>
  );
}

/* ─── Clean Minimal Topic Card for Topics We Cover ─── */
function PhysicsTopicCard({
  children,
  className = '',
}: {
  children: (isHovered: boolean) => React.ReactNode;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full group"
    >
      <div
        className={`relative h-full rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-center overflow-hidden transition-all duration-300 ease-out flex flex-col justify-between bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-lg hover:shadow-blue-900/5 hover:border-[#0f4a9b]/30 ${className}`}
      >
        {children(isHovered)}
      </div>
    </div>
  );
}
const PhysicsTiltCard = PhysicsTopicCard;

/* ─── Examiner Lab Sheet Table Component (Compact 1-Section Fit) ─── */
function ExaminerLabSheetTable({
  equations,
}: {
  equations: { eq: string; rearranged: string; trap: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#d6dfeb] bg-[#f8fbff] shadow-[0_8px_24px_rgba(15,74,155,0.06)] mb-3 relative">
      {/* Top Examiner Diagnostic Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-[#0a1f3d] text-white px-4 sm:px-6 py-2.5 border-b border-[#0f3575]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs sm:text-[12.5px] font-bold tracking-wide uppercase">
            Examiner Diagnostic Sheet · Method Marks &amp; Unit Traps
          </span>
        </div>
        <span className="text-[10.5px] font-bold font-mono tracking-wider uppercase text-[#f0c96a] bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-full">
          Cambridge 0625 · Edexcel 4PH1 · 9702
        </span>
      </div>

      {/* Squared Grid Paper Background Container */}
      <div
        className="relative p-2.5 sm:p-4 lg:p-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 74, 155, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 74, 155, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '18px 18px',
        }}
      >
        {/* 2-Column Grid of 6 Formulas on Desktop */}
        <div className="grid md:grid-cols-2 gap-2.5 sm:gap-3">
          {equations.map((row, i) => (
            <div
              key={i}
              className="rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-xs p-3 sm:p-3.5 transition-all duration-200 hover:border-[#0f4a9b]/35 hover:shadow-xs"
            >
              {/* Equation & Target Rearrangement */}
              <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                    0{i + 1}
                  </span>
                  <span className="font-mono text-[15px] sm:text-[16px] font-extrabold text-[#0f4a9b]">
                    {row.eq}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs sm:text-[13px] font-bold text-[#0a1f3d] bg-blue-50/80 border border-blue-100/80 px-2.5 py-1 rounded-lg">
                  <span className="text-[10px] text-[#0f4a9b] uppercase font-sans font-semibold">Rearranged:</span>
                  <span>{row.rearranged}</span>
                </div>
              </div>

              {/* Where It Goes Wrong / Mark Loss Trap */}
              <div className="flex items-start gap-2">
                <span className="shrink-0 inline-block font-mono text-[9.5px] font-bold uppercase text-rose-700 bg-rose-50 border border-rose-200/80 px-1.5 py-0.5 rounded mt-0.5">
                  Trap
                </span>
                <p className="text-[12px] sm:text-[12.5px] text-slate-700 font-medium leading-snug">
                  {row.trap}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Animated Badges for The Practical Papers Section ─── */
function Paper5AnimatedBadge() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 50 50" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="p5FluidGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Flask Glass Outline */}
        <path
          d="M 21 8 L 29 8 L 29 18 L 39 36 C 41 39 39 43 35 43 L 15 43 C 11 43 9 39 11 36 L 21 18 Z"
          stroke="#93c5fd"
          strokeWidth="2.2"
          strokeLinejoin="round"
          fill="rgba(14, 165, 233, 0.12)"
        />

        {/* Animated Bubbling Liquid Fill */}
        <motion.path
          d="M 13 38 Q 25 35 37 38 L 35 42 L 15 42 Z"
          fill="url(#p5FluidGrad)"
          animate={{
            d: [
              'M 13 38 Q 25 35 37 38 L 35 42 L 15 42 Z',
              'M 13 37 Q 25 40 37 37 L 35 42 L 15 42 Z',
              'M 13 38 Q 25 35 37 38 L 35 42 L 15 42 Z',
            ],
          }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />

        {/* Floating Gas Bubble 1 */}
        <motion.circle
          cx="25"
          r="2"
          fill="#38bdf8"
          animate={{ cy: [38, 20], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeOut' }}
        />

        {/* Floating Gas Bubble 2 */}
        <motion.circle
          cx="20"
          r="1.5"
          fill="#f0c96a"
          animate={{ cy: [39, 24], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.1, delay: 0.5, ease: 'easeOut' }}
        />

        {/* Measurement graduation ticks */}
        <line x1="22" y1="28" x2="26" y2="28" stroke="#f0c96a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="34" x2="24" y2="34" stroke="#f0c96a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function Paper6AnimatedBadge() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 50 50" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="p6LineGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#f0c96a" />
          </linearGradient>
        </defs>

        {/* Graph Paper Axes */}
        <line x1="10" y1="10" x2="10" y2="40" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="40" x2="42" y2="40" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />

        {/* Subtle grid ticks */}
        <line x1="10" y1="25" x2="40" y2="25" stroke="rgba(147, 197, 253, 0.25)" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="25" y1="10" x2="25" y2="40" stroke="rgba(147, 197, 253, 0.25)" strokeWidth="1" strokeDasharray="2 2" />

        {/* Data Points */}
        <motion.g animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}>
          <circle cx="16" cy="34" r="2.2" fill="#f0c96a" />
          <circle cx="25" cy="25" r="2.2" fill="#f0c96a" />
          <circle cx="34" cy="16" r="2.2" fill="#f0c96a" />
        </motion.g>

        {/* Animated Best Fit Regression Line */}
        <motion.line
          x1="12"
          y1="38"
          x2="38"
          y2="12"
          stroke="url(#p6LineGrad)"
          strokeWidth="2.4"
          strokeLinecap="round"
          animate={{ pathLength: [0.3, 1, 0.3], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />

        {/* Gradient Delta Triangle */}
        <polygon points="25,25 34,25 34,16" fill="rgba(240, 201, 106, 0.2)" stroke="#f0c96a" strokeWidth="1" />
      </svg>
    </div>
  );
}

function TheoryPapersAnimatedBadge() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 50 50" className="w-full h-full" fill="none">
        {/* Exam Blueprint Sheets Stack */}
        <rect x="14" y="8" width="24" height="32" rx="4" fill="rgba(30, 91, 168, 0.3)" stroke="#93c5fd" strokeOpacity="0.4" strokeWidth="1.5" />
        <rect x="10" y="12" width="24" height="32" rx="4" fill="#0c2d5e" stroke="#93c5fd" strokeWidth="2" />

        {/* Structured Questions lines */}
        <line x1="15" y1="18" x2="29" y2="18" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="24" x2="25" y2="24" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
        <line x1="15" y1="30" x2="27" y2="30" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />

        {/* Examiner Mark Badge M1/A1 with pulse */}
        <motion.g
          animate={{ scale: [1, 1.15, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <circle cx="28" cy="34" r="8" fill="#f59e0b" />
          <path d="M 25 34 L 27 36 L 31 32" stroke="#0a1f3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      </svg>
    </div>
  );
}

function DrillsAnimatedBadge() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 50 50" className="w-full h-full" fill="none">
        {/* Stopwatch Top Pin */}
        <rect x="23" y="6" width="4" height="4" rx="1" fill="#f0c96a" />
        <line x1="21" y1="6" x2="29" y2="6" stroke="#f0c96a" strokeWidth="2" strokeLinecap="round" />

        {/* Outer Dial Circle */}
        <circle cx="25" cy="27" r="16" stroke="#93c5fd" strokeWidth="2.2" fill="#0c2d5e" />

        {/* Dial Ticks */}
        <circle cx="25" cy="15" r="1.5" fill="#f0c96a" />
        <circle cx="37" cy="27" r="1.5" fill="#93c5fd" />
        <circle cx="25" cy="39" r="1.5" fill="#93c5fd" />
        <circle cx="13" cy="27" r="1.5" fill="#93c5fd" />

        {/* Rotating Chronograph Needle */}
        <motion.g
          style={{ transformOrigin: '25px 27px' }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        >
          <line x1="25" y1="27" x2="25" y2="16" stroke="#f0c96a" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="25" cy="27" r="3" fill="#f0c96a" />
        </motion.g>

        {/* Speed Arc Ring */}
        <motion.path
          d="M 25 11 A 16 16 0 0 1 41 27"
          stroke="#38bdf8"
          strokeWidth="2.4"
          strokeLinecap="round"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

/* ─── Micro-Animations for Practical Skills ─── */
function ApparatusSkillAnimation({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 50 50" className="w-full h-full" fill="none">
        {/* Gauge Body */}
        <path d="M 10 38 A 18 18 0 1 1 40 38" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 15 36 A 13 13 0 1 1 35 36" stroke="rgba(15,74,155,0.12)" strokeWidth="4" strokeLinecap="round" />

        {/* Measurement Ticks */}
        <line x1="14" y1="20" x2="18" y2="22" stroke="#0f4a9b" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="25" y1="12" x2="25" y2="17" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        <line x1="36" y1="20" x2="32" y2="22" stroke="#0f4a9b" strokeWidth="1.8" strokeLinecap="round" />

        {/* Active Oscillating Needle with Voltage Spark */}
        <motion.g
          style={{ transformOrigin: '25px 35px' }}
          animate={isHovered ? { rotate: [-40, 35, -20, 25, -40] } : { rotate: [-15, 15, -15] }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.4 : 3, ease: 'easeInOut' }}
        >
          <line x1="25" y1="35" x2="25" y2="14" stroke="#f59e0b" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="25" cy="14" r="2" fill="#ef4444" />
        </motion.g>

        {/* Center Pivot Dial */}
        <circle cx="25" cy="35" r="4.5" fill="#0f4a9b" stroke="#fff" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function TablesSkillAnimation({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 50 50" className="w-full h-full" fill="none">
        {/* Table Outer Grid */}
        <rect x="8" y="9" width="34" height="32" rx="4" stroke="#93c5fd" strokeWidth="2.2" fill="rgba(15,74,155,0.04)" />
        <line x1="8" y1="20" x2="42" y2="20" stroke="#0f4a9b" strokeWidth="1.8" />
        <line x1="8" y1="31" x2="42" y2="31" stroke="#93c5fd" strokeWidth="1.4" strokeDasharray="3 3" />
        <line x1="25" y1="9" x2="25" y2="41" stroke="#0f4a9b" strokeWidth="1.8" />

        {/* Header Unit Indicators */}
        <text x="13" y="17" fontSize="7" fontWeight="bold" fill="#0f4a9b" fontFamily="monospace">t / s</text>
        <text x="29" y="17" fontSize="7" fontWeight="bold" fill="#0f4a9b" fontFamily="monospace">V / V</text>

        {/* Data Cells & Animated Precision Dots */}
        <motion.g
          animate={isHovered ? { opacity: [0.7, 1, 0.7] } : { opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          <text x="12" y="28" fontSize="6.5" fontWeight="bold" fill="#334155" fontFamily="monospace">1.25</text>
          <text x="28" y="28" fontSize="6.5" fontWeight="bold" fill="#f59e0b" fontFamily="monospace">2.40</text>
          <text x="12" y="38" fontSize="6.5" fontWeight="bold" fill="#334155" fontFamily="monospace">2.50</text>
          <text x="28" y="38" fontSize="6.5" fontWeight="bold" fill="#f59e0b" fontFamily="monospace">4.80</text>
        </motion.g>

        {/* Scanning Precision Laser Bar */}
        <motion.line
          x1="9"
          x2="41"
          stroke="#38bdf8"
          strokeWidth="1.8"
          strokeLinecap="round"
          animate={{ y1: [10, 40, 10], y2: [10, 40, 10], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.2 : 2.4, ease: 'linear' }}
        />
      </svg>
    </div>
  );
}

function GraphsSkillAnimation({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 50 50" className="w-full h-full" fill="none">
        {/* Axes */}
        <line x1="10" y1="10" x2="10" y2="40" stroke="#0f4a9b" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="10" y1="40" x2="42" y2="40" stroke="#0f4a9b" strokeWidth="2.2" strokeLinecap="round" />

        {/* Grid lines */}
        <line x1="10" y1="25" x2="40" y2="25" stroke="rgba(147,197,253,0.3)" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="25" y1="10" x2="25" y2="40" stroke="rgba(147,197,253,0.3)" strokeWidth="1" strokeDasharray="2 2" />

        {/* Delta Gradient Triangle */}
        <polygon points="20,30 36,30 36,14" fill="rgba(245,158,11,0.18)" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="2 2" />

        {/* Scatter Points */}
        <circle cx="15" cy="35" r="2.2" fill="#0f4a9b" />
        <circle cx="20" cy="30" r="2.2" fill="#0f4a9b" />
        <circle cx="28" cy="22" r="2.2" fill="#0f4a9b" />
        <circle cx="36" cy="14" r="2.2" fill="#0f4a9b" />

        {/* Animated Line of Best Fit with draw & glow */}
        <motion.line
          x1="12"
          y1="38"
          x2="40"
          y2="10"
          stroke="#f59e0b"
          strokeWidth="2.6"
          strokeLinecap="round"
          animate={{ pathLength: [0.3, 1, 0.3], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.5 : 2.8, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

function EvaluationSkillAnimation({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 50 50" className="w-full h-full" fill="none">
        {/* Outer Circular Shield Target */}
        <circle cx="25" cy="25" r="18" stroke="#93c5fd" strokeWidth="2.2" fill="rgba(16,185,129,0.06)" />
        <motion.circle
          cx="25"
          cy="25"
          r="14"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{ rotate: 360 }}
          style={{ transformOrigin: '25px 25px' }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
        />

        {/* Animated Verified Checkmark */}
        <motion.path
          d="M 16 25 L 22 31 L 34 19"
          stroke="#10b981"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={isHovered ? { scale: [1, 1.2, 1] } : { scale: [1, 1.06, 1] }}
          style={{ transformOrigin: '25px 25px' }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        />

        {/* Score Mark Badge Tag (+1) */}
        <motion.g
          animate={isHovered ? { y: [-2, 2, -2], opacity: [0.8, 1, 0.8] } : {}}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          <rect x="30" y="8" width="14" height="10" rx="3" fill="#f59e0b" />
          <text x="32" y="15.5" fontSize="6.5" fontWeight="bold" fill="#0c2340" fontFamily="sans-serif">+1</text>
        </motion.g>
      </svg>
    </div>
  );
}

function PracticalSkillCard({ card }: { card: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 text-left flex flex-col justify-between hover:shadow-lg hover:shadow-blue-900/5 hover:border-[#0f4a9b]/35 hover:-translate-y-1.5 transition-all duration-300 group h-full"
    >
      <div>
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50/70 border border-blue-100 text-[#0f4a9b] mb-4 shadow-2xs group-hover:scale-105 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
          {card.renderAnimation(isHovered)}
        </div>
        <div className="min-h-[44px] flex items-center mb-2">
          <h3 className="text-[15px] sm:text-[16px] font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200">
            {card.title}
          </h3>
        </div>
        <p className="text-[12.5px] sm:text-[13px] text-gray-600 leading-relaxed">
          {card.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Custom Tabraiz Khan Tutor Card for Abu Dhabi Physics (Fitted to 1 Section & Brand Aligned) ─── */
function TabraizTutorCard() {
  return (
    <section className="py-5 sm:py-6 lg:py-7 bg-gradient-to-b from-[#f8fbff] to-white border-y border-blue-100/70 font-sans" aria-labelledby="tabraiz-card-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-3 sm:mb-4">
          <span className="inline-block font-bold text-[10px] sm:text-[10.5px] tracking-[0.14em] uppercase text-[#0f4a9b] bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full mb-1 font-mono">
            IGCSE &amp; A-Level Physics Faculty
          </span>
          <h2 id="tabraiz-card-title" className="font-extrabold text-[#0a1f3d] text-lg sm:text-2xl lg:text-[26px] leading-tight mb-1">
            The maths underneath the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">physics</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-[12.5px] leading-snug max-w-xl mx-auto">
            Most physics marks are not lost on the physics. They go on rearranging an equation under time pressure, on a prefix, on a unit conversion, or on rounding one step too early.
          </p>
        </div>

        {/* Main Panel */}
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-[0_8px_30px_rgba(15,74,155,0.06)] overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-2 bg-gradient-to-r from-[#0a1f3d] via-[#0f4a9b] to-[#0a1f3d] text-white px-3.5 py-1.5 sm:px-4 sm:py-2">
            <span className="font-bold text-[11px] sm:text-xs tracking-wider uppercase text-blue-100">Physics Faculty · Abu Dhabi</span>
            <span className="font-bold text-[9.5px] sm:text-[10.5px] tracking-wide uppercase bg-gradient-to-r from-[#f0c96a] via-[#d4af37] to-[#C9A227] text-[#0a1f3d] px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(201,162,39,0.4)]">
              Cambridge Certified
            </span>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-[210px_1fr] items-stretch">
            {/* Left: Identity Column */}
            <div className="border-b md:border-b-0 md:border-r border-slate-200/90 bg-[#f8fbff]/60 p-3.5 sm:p-4 flex flex-col items-stretch justify-between">
              <div>
                <div className="flex md:flex-col items-center md:text-center gap-3 md:gap-0 mb-2.5">
                  <img
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl object-cover object-top bg-white border border-blue-100 shadow-2xs md:mx-auto md:mb-1.5 shrink-0"
                    src="/images/tutors/tabraiz-khan.jpg"
                    alt="Tabraiz Khan, IGCSE and A-Level physics tutor at Ustaad, teaching Abu Dhabi students online"
                    width={160}
                    height={160}
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-sm sm:text-base text-[#0a1f3d] leading-tight">Tabraiz Khan</p>
                    <p className="text-[10.5px] text-gray-500">Physics &amp; Maths · Abu Dhabi</p>
                  </div>
                </div>

                <ul className="space-y-1.5 text-left">
                  <li className="relative pl-3 text-[11px] sm:text-[11.5px] leading-tight text-gray-700">
                    <span className="absolute left-0 top-1 w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                    <b className="text-[#0a1f3d] font-bold">Cambridge Certified</b>
                    <span className="text-gray-500 text-[10px] block">Assessed to board standards</span>
                  </li>
                  <li className="relative pl-3 text-[11px] sm:text-[11.5px] leading-tight text-gray-700">
                    <span className="absolute left-0 top-1 w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                    <b className="text-[#0a1f3d] font-bold">9 years teaching</b>
                    <span className="text-gray-500 text-[10px] block">IGCSE &amp; A-Level physics</span>
                  </li>
                  <li className="relative pl-3 text-[11px] sm:text-[11.5px] leading-tight text-gray-700">
                    <span className="absolute left-0 top-1 w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                    <b className="text-[#0a1f3d] font-bold">Master's in Statistics</b>
                    <span className="text-gray-500 text-[10px] block">Algebra never slips</span>
                  </li>
                </ul>
              </div>

              <p className="text-[10px] text-gray-500 border-t border-dashed border-slate-200 pt-1.5 mt-2 leading-tight">
                Screened &amp; approved by Ustaad academic leadership.
              </p>
            </div>

            {/* Right: The Working Strip */}
            <div className="p-3.5 sm:p-4 flex flex-col justify-between bg-white">
              <div>
                <p className="font-bold text-[9.5px] tracking-widest uppercase text-[#0f4a9b] mb-1">
                  Four marks, one place to lose them
                </p>

                {/* The Question */}
                <div className="bg-[#f8fbff] border border-blue-100 rounded-lg px-3 py-1.5 mb-2">
                  <span className="block font-bold text-[9px] tracking-wider uppercase text-[#0f4a9b] mb-0.5">The question</span>
                  <p className="text-xs sm:text-[12.5px] font-semibold text-[#0a1f3d]">A 2.4 kW heater runs at 240 V. Calculate its resistance.</p>
                </div>

                {/* Squared Paper Strip */}
                <div
                  className="border border-blue-200/70 rounded-lg overflow-hidden mb-2 shadow-inner text-xs sm:text-[12.5px]"
                  style={{
                    backgroundColor: '#ffffff',
                    backgroundImage: 'linear-gradient(#e8f1fa 1px, transparent 1px), linear-gradient(90deg, #e8f1fa 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                >
                  <div className="flex items-center gap-2 px-2.5 py-1 border-b border-blue-100/80">
                    <span className="shrink-0 w-3.5 h-3.5 rounded-full bg-[#0f4a9b] text-white font-bold text-[8.5px] flex items-center justify-center">1</span>
                    <p className="font-semibold text-[#0a1f3d]">P = V² / R</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 px-2.5 py-1 border-b border-blue-100/80">
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 w-3.5 h-3.5 rounded-full bg-[#0f4a9b] text-white font-bold text-[8.5px] flex items-center justify-center">2</span>
                      <p className="font-semibold text-[#0a1f3d]">R = V² / P</p>
                    </div>
                    <span className="text-[10px] text-gray-500">Rearranged before numbers go in</span>
                  </div>

                  {/* Step 3: Trap Step */}
                  <div className="flex items-center justify-between gap-2 px-2.5 py-1 border-b border-amber-200/60 bg-amber-50/70">
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 w-3.5 h-3.5 rounded-full bg-rose-600 text-white font-bold text-[8.5px] flex items-center justify-center">3</span>
                      <p className="font-semibold text-[#0a1f3d]">2.4 kW = 2400 W</p>
                    </div>
                    <span className="text-rose-700 text-[10px] font-bold italic">
                      miss this → answer is 1000× out
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 px-2.5 py-1">
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 w-3.5 h-3.5 rounded-full bg-[#0f4a9b] text-white font-bold text-[8.5px] flex items-center justify-center">4</span>
                      <p className="font-semibold text-[#0a1f3d]">R = 57 600 / 2400 = 24 Ω</p>
                    </div>
                    <span className="text-[10px] text-gray-500">240² = 57 600</span>
                  </div>
                </div>

                {/* The Pattern Callout */}
                <div className="border-l-3 border-[#0f4a9b] pl-2.5 py-0.5 mb-2 bg-blue-50/60 rounded-r">
                  <p className="text-[11.5px] sm:text-xs text-[#0a1f3d] font-semibold italic">
                    "The physics took one line. The marks were decided on line three."
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-0.5">
                <div className="flex flex-wrap gap-2 items-center mb-1.5">
                  <a
                    href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20ask%20about%20IGCSE%20or%20A-Level%20physics%20tutoring%20in%20Abu%20Dhabi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-3.5 py-1.5 rounded-lg transition shadow-2xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    Ask about Tabraiz on WhatsApp
                  </a>
                  <a
                    href="/tutors/tabraiz-khan"
                    className="inline-flex items-center justify-center text-[#0f4a9b] border border-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white font-bold text-xs px-3.5 py-1.5 rounded-lg transition"
                  >
                    See full profile
                  </a>
                </div>
                <p className="text-[10px] text-gray-500 leading-tight">
                  Free 30-minute trial. No card required. He teaches{' '}
                  <a href="/maths-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a1f3d]">
                    maths in Abu Dhabi
                  </a>{' '}
                  as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Animated Sequential Process Steps ─── */
function InteractiveProcessSteps({
  steps,
}: {
  steps: { n: string; title: string; desc: string }[];
}) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [steps.length]);

  const stepIcons = [
    <FileSearch key="1" className="w-3.5 h-3.5" />,
    <Layers key="2" className="w-3.5 h-3.5" />,
    <CheckCircle2 key="3" className="w-3.5 h-3.5" />,
  ];

  return (
    <div className="relative mb-6 sm:mb-7">
      {/* Top Step Breadcrumb / Indicator Pills */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
        {steps.map((s, i) => {
          const isActive = activeStep === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActiveStep(i)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#f0c96a] via-[#d4af37] to-[#C9A227] text-[#0a1f3d] shadow-[0_0_14px_rgba(201,162,39,0.5)] scale-105 font-bold'
                  : 'bg-white/10 text-blue-100/70 hover:bg-white/15 hover:text-white'
              }`}
            >
              <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center ${isActive ? 'bg-[#0a1f3d] text-[#f0c96a] font-extrabold' : 'bg-white/20 text-white'}`}>
                {i + 1}
              </span>
              <span className="hidden sm:inline">{s.title}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 relative z-10 text-left">
        {steps.map((s, i) => {
          const isActive = activeStep === i;
          return (
            <div
              key={i}
              onClick={() => setActiveStep(i)}
              onMouseEnter={() => setActiveStep(i)}
              className={`group relative rounded-2xl p-3.5 sm:p-4.5 cursor-pointer transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                isActive
                  ? 'bg-gradient-to-b from-[#124285]/95 to-[#0b2954]/95 border-[#C9A227]/90 shadow-[0_12px_28px_rgba(15,74,155,0.5),0_0_18px_rgba(201,162,39,0.25)] sm:-translate-y-1'
                  : 'bg-white/[0.05] border-white/10 hover:bg-white/[0.08] hover:border-white/20'
              } border`}
            >
              {/* Dynamic Animated Countdown Progress Bar on the active card */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/15 overflow-hidden">
                  <motion.div
                    key={`progress-${activeStep}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3.6, ease: 'linear' }}
                    className="h-full bg-gradient-to-r from-[#C9A227] via-[#f0c96a] to-[#C9A227]"
                  />
                </div>
              )}

              <div>
                {/* Top Step Number Badge & Title */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-[#f0c96a] to-[#C9A227] text-[#0a1f3d] shadow-[0_0_10px_rgba(201,162,39,0.6)] font-extrabold'
                          : 'bg-white/10 text-white/80'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`font-extrabold text-[13.5px] sm:text-[14px] transition-colors duration-300 ${
                        isActive ? 'text-[#fde68a]' : 'text-white'
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isActive ? 'bg-[#C9A227]/25 text-[#f0c96a]' : 'bg-white/5 text-blue-200/50'
                    }`}
                  >
                    {stepIcons[i]}
                  </div>
                </div>

                {/* Exact Description */}
                <p className="text-[12px] sm:text-[12.5px] text-blue-100/75 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Animated Word-by-Word Font Reveal for Exam Questions ─── */
function AnimatedTextWords({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.08 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 5, filter: 'blur(2px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={`inline ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ─── Animated Background Physics Elements for Self-Diagnosis ─── */
function FloatingPhysicsElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Radiant physics field glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] rounded-full pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(ellipse, rgba(15,74,155,0.08) 0%, rgba(201,162,39,0.04) 50%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* SVG Physics Sine Waves */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="physGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#C9A227" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -100 70 Q 150 15, 400 70 T 900 70 T 1400 70"
          fill="none"
          stroke="url(#physGrad)"
          strokeWidth="2.5"
          animate={{ x: [-80, 80, -80] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M -100 220 Q 200 270, 500 220 T 1000 220 T 1500 220"
          fill="none"
          stroke="url(#physGrad)"
          strokeWidth="2"
          animate={{ x: [60, -60, 60] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Animated Orbiting Electrons & Quantum Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute top-6 left-[6%] w-28 h-28 border border-dashed border-[#0f4a9b]/20 rounded-full"
      >
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0f4a9b]/40 shadow-[0_0_8px_rgba(15,74,155,0.4)]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-6 right-[8%] w-32 h-32 border border-dashed border-[#C9A227]/25 rounded-full"
      >
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#C9A227]/50 shadow-[0_0_8px_rgba(201,162,39,0.5)]" />
      </motion.div>

      {/* Floating Physics Formulas */}
      <motion.span
        animate={{ y: [0, -7, 0], opacity: [0.18, 0.4, 0.18] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-[15%] text-[11px] font-mono font-bold text-[#0f4a9b] select-none"
      >
        ΔV = I·R
      </motion.span>
      <motion.span
        animate={{ y: [0, 8, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 left-[14%] text-[11px] font-mono font-bold text-[#0f4a9b] select-none"
      >
        λ = v / f
      </motion.span>
      <motion.span
        animate={{ y: [0, -6, 0], opacity: [0.14, 0.32, 0.14] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 left-[3%] text-[11px] font-mono font-bold text-[#C9A227] select-none hidden sm:inline"
      >
        p = m·v
      </motion.span>
    </div>
  );
}

export default function PhysicsLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Five New Cards for Where Physics Marks Vanish */
  const challenges: Challenge[] = [
    {
      icon: <Calculator className="h-5 w-5" />,
      title: 'Rearranging under pressure',
      problem: 'Numbers go in before the equation is rearranged, and the thread is lost halfway down the page.',
    },
    {
      icon: <Binary className="h-5 w-5" />,
      title: 'Prefixes',
      problem: 'kW, mA, cm and kJ left unconverted. The method is right and the answer is out by a factor of a thousand.',
      link: { label: 'Read why physics formulas fail under pressure →', href: '/blogs/igcse-physics-formulas-exam' },
    },
    {
      icon: <Scale className="h-5 w-5" />,
      title: 'Units',
      problem: 'The right number written with the wrong unit, or with no unit at all. One mark, every time.',
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: 'Significant figures',
      problem: 'Rounding partway through instead of at the end, so the final answer drifts outside the accepted range.',
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: 'Definitions',
      problem: "Newton's laws, momentum and energy written in everyday words rather than the wording the mark scheme accepts.",
      link: { label: 'Explore exam command words guide →', href: '/blogs/command-words-igcse-a-level-exams' },
    },
  ];

  /* Merged Simple Process into Journey */
  const mergedSteps = [
    { n: '01', icon: <FileSearch className="h-5 w-5" />, title: 'Diagnose The Gap', desc: 'Your tutor finds whether the gap is in words, equations, or diagrams.' },
    { n: '02', icon: <Wrench className="h-5 w-5" />, title: 'Rebuild The Topic', desc: 'Each weak topic is rebuilt from the foundation up.' },
    { n: '03', icon: <Timer className="h-5 w-5" />, title: 'Practise Past Papers', desc: 'Past Cambridge and Edexcel physics papers cement each topic permanently.' },
  ];

  const journey = [
    { years: 'Year 7–9', title: 'Foundation (KS3)', desc: 'KS3 physics builds diagrams, units, and equation habits early on.', link: { label: 'Core sciences', href: '/middle-school' } },
    { years: 'Year 10–11', title: 'IGCSE / GCSE', desc: 'Cambridge 0625, Edexcel 4PH1, and GCSE physics, papers 1 to 6 covered.', link: { label: 'IGCSE physics tutor Abu Dhabi', href: '/igcse' } },
    { years: 'Year 12–13', title: 'A-Level / AP', desc: 'A-Level Physics and AP Physics 1/2/C support.', link: { label: 'A-Level physics tutor Abu Dhabi', href: '/a-level' } },
  ];

  const topics = [
    {
      id: 'mechanics',
      title: 'Mechanics',
      desc: "Newton's laws, SUVAT, momentum, energy, and circular motion taught structurally.",
      renderMicroAnimation: (isHovered: boolean) => <MechanicsMicroAnimation isHovered={isHovered} />,
      watermark: <Gauge className="w-28 h-28 sm:w-32 sm:h-32" strokeWidth={1.2} />,
      tag: 'Kinematics & Forces',
    },
    {
      id: 'electricity',
      title: 'Electricity',
      desc: "Circuits, Ohm's law, capacitors, and electromagnetic induction explained with diagrams.",
      renderMicroAnimation: (isHovered: boolean) => <ElectricityMicroAnimation isHovered={isHovered} />,
      watermark: <Zap className="w-28 h-28 sm:w-32 sm:h-32" strokeWidth={1.2} />,
      tag: 'Circuits & Induction',
    },
    {
      id: 'waves',
      title: 'Waves & Optics',
      desc: 'Wave equation, refraction, diffraction, and superposition taught with worked diagrams.',
      renderMicroAnimation: (isHovered: boolean) => <WavesMicroAnimation isHovered={isHovered} />,
      watermark: <Waves className="w-28 h-28 sm:w-32 sm:h-32" strokeWidth={1.2} />,
      tag: 'Ray & Wave Physics',
    },
    {
      id: 'thermal',
      title: 'Thermal & Quantum',
      desc: 'Kinetic theory, photoelectric effect, and de Broglie wavelength explained clearly.',
      renderMicroAnimation: (isHovered: boolean) => <ThermalQuantumMicroAnimation isHovered={isHovered} />,
      watermark: <Thermometer className="w-28 h-28 sm:w-32 sm:h-32" strokeWidth={1.2} />,
      tag: 'Particles & Photons',
    },
  ];

  /* Six Equations That Carry The Most Marks */
  const highMarkEquations = [
    { eq: 'F = ma', rearranged: 'a = F / m', trap: 'Mass given in grams and used as kilograms.' },
    { eq: 'V = IR', rearranged: 'R = V / I', trap: 'Current given in milliamps and used as amps.' },
    { eq: 'P = V² / R', rearranged: 'R = V² / P', trap: 'Power given in kilowatts and used as watts.' },
    { eq: 'v² = u² + 2as', rearranged: 'a = (v² − u²) / 2s', trap: 'Assuming the object started at rest when it did not.' },
    { eq: 'E = mcΔθ', rearranged: 'Δθ = E / mc', trap: 'Using the final temperature instead of the temperature change.' },
    { eq: 'ρ = m / V', rearranged: 'V = m / ρ', trap: 'Mixing g/cm³ with kg/m³, a factor of a thousand.' },
  ];

  /* The Practical Papers */
  const practicalCards = [
    {
      badge: <Paper5AnimatedBadge />,
      tag: 'Laboratory Practical',
      title: 'Paper 5, Practical Test',
      desc: 'Taken in the school laboratory under supervision. Marks go on taking readings carefully, recording them to a consistent precision, and drawing a graph that can actually be used.',
    },
    {
      badge: <Paper6AnimatedBadge />,
      tag: 'Written Alternative',
      title: 'Paper 6, Alternative to Practical',
      desc: 'A written paper about experiments, taken at a desk. Marks go on reading apparatus diagrams, completing data tables, plotting, taking gradients, and identifying sources of error.',
    },
  ];

  /* Practical Papers Without a Lab */
  const onlinePracticalCards = [
    {
      renderAnimation: (isHovered: boolean) => <ApparatusSkillAnimation isHovered={isHovered} />,
      title: 'Reading the apparatus',
      desc: 'Interpreting diagrams of circuits, optics benches and measuring instruments from the page.',
    },
    {
      renderAnimation: (isHovered: boolean) => <TablesSkillAnimation isHovered={isHovered} />,
      title: 'Tables and precision',
      desc: 'Headings with units, consistent decimal places, and repeat readings handled properly.',
    },
    {
      renderAnimation: (isHovered: boolean) => <GraphsSkillAnimation isHovered={isHovered} />,
      title: 'Graphs and gradients',
      desc: 'Scale choice, plotting accuracy, line of best fit, and taking a gradient that earns the mark.',
    },
    {
      renderAnimation: (isHovered: boolean) => <EvaluationSkillAnimation isHovered={isHovered} />,
      title: 'Evaluation that scores',
      desc: 'Naming specific sources of error and realistic improvements, not generic ones.',
    },
  ];



  /* From IGCSE to A-Level: What Changes */
  const aLevelTransitionRows = [
    {
      usedTo: 'One equation, one substitution',
      aLevelAsks: 'Several equations chained together, with one slip carrying through',
    },
    {
      usedTo: 'Numbers that stay in sensible units',
      aLevelAsks: 'Standard form throughout, and logs and exponentials by the second year',
    },
    {
      usedTo: 'Practical skills tested in one paper',
      aLevelAsks: 'Practical work assessed in the lab and again in a written analysis paper',
    },
    {
      usedTo: 'Significant figures checked at the end',
      aLevelAsks: 'Precision and uncertainty assessed as marks in their own right',
    },
  ];

  const gapChecks = [
    { q: 'Does your child know the equations but pick the wrong one?', tag: 'Equation gap' },
    { q: 'Do they skip diagrams when a question asks for one?', tag: 'Diagram gap' },
    { q: 'Are their answers short, losing definition marks?', tag: 'Words gap' },
  ];

  /* Seven New FAQs */
  const faqs: { q: string; a: React.ReactNode; plain: string }[] = [
    {
      q: 'Which Cambridge physics paper does my child sit, Paper 5 or Paper 6?',
      plain: 'The school decides. Paper 5 is a practical test taken in the laboratory, Paper 6 is a written paper about experiments taken at a desk. Tell us the school and year group and we will confirm which one your child is entered for.',
      a: <>The school decides. Paper 5 is a practical test taken in the laboratory, Paper 6 is a written paper about experiments taken at a desk. Tell us the school and year group and we will confirm which one your child is entered for.</>,
    },
    {
      q: 'My child understands physics but loses marks in the calculations. What is going wrong?',
      plain: 'Almost always the algebra rather than the physics. Substituting before rearranging, leaving a prefix unconverted, or rounding partway through. We fix the habit first, which is faster than reteaching topics.',
      a: <>Almost always the algebra rather than the physics. Substituting before rearranging, leaving a prefix unconverted, or rounding partway through. We fix the habit first, which is faster than reteaching topics.</>,
    },
    {
      q: 'Do you teach Edexcel IGCSE Physics 4PH1 as well as Cambridge 0625?',
      plain: 'Yes, and we teach to the one your child actually sits. The two boards differ in paper structure and in what the mark schemes reward, so we confirm the specification before the first lesson.',
      a: <>Yes, and we teach to the one your child actually sits. The two boards differ in paper structure and in what the mark schemes reward, so we confirm the specification before the first lesson.</>,
    },
    {
      q: 'How big is the step from IGCSE physics to A-Level 9702?',
      plain: 'Bigger in maths than in physics. Questions chain several equations together, standard form appears throughout, and precision becomes a mark in its own right. We run a bridging block over the summer or the first term.',
      a: <>Bigger in maths than in physics. Questions chain several equations together, standard form appears throughout, and precision becomes a mark in its own right. We run a bridging block over the summer or the first term.</>,
    },
    {
      q: 'Can the same tutor teach both physics and maths?',
      plain: 'Yes. Tabraiz Khan teaches both, which matters because most physics mark loss at this level is mathematical. One tutor, one timetable, and the maths gets fixed in the physics lesson rather than waiting for a separate one.',
      a: <>Yes. <a href="/tutors/tabraiz-khan" className="text-[#0f4a9b] font-semibold underline">Tabraiz Khan</a> teaches both, which matters because most physics mark loss at this level is mathematical. One tutor, one timetable, and the maths gets fixed in the physics lesson rather than waiting for a separate one.</>,
    },
    {
      q: 'Do lessons fit around the Abu Dhabi school calendar and ADEK term dates?',
      plain: 'Yes. We schedule around school hours, mock windows, exam leave, UAE public holidays and Ramadan, in Abu Dhabi time.',
      a: <>Yes. We schedule around school hours, mock windows, exam leave, UAE public holidays and Ramadan, in Abu Dhabi time.</>,
    },
    {
      q: 'What happens in the free physics trial?',
      plain: 'Thirty minutes with a matched tutor, and it is a diagnostic rather than a sales call. Your child works a real exam question while the tutor watches where the marks go, and you leave with a starting point and a plan. No card required.',
      a: <>Thirty minutes with a matched tutor, and it is a diagnostic rather than a sales call. Your child works a real exam question while the tutor watches where the marks go, and you leave with a starting point and a plan. No card required.</>,
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="IGCSE & A-Level Physics Tutor | Abu Dhabi & UAE | Ustaad"
        description="One-to-one IGCSE and A-Level physics tutoring for Abu Dhabi families, taught online across the UAE. Cambridge 0625, Edexcel 4PH1 and A-Level 9702, including the practical papers. Free 30-minute trial."
        canonical="/physics-tutor-abu-dhabi"
        placename="Abu Dhabi, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Abu Dhabi',
            url: '/physics-tutor-abu-dhabi',
            name: 'Ustaad — Physics Tutor Abu Dhabi',
            description: 'One-to-one IGCSE and A-Level physics tutoring for Abu Dhabi families, taught online across the UAE. Cambridge 0625, Edexcel 4PH1 and A-Level 9702, including the practical papers.',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Curriculum', url: '/curriculum' },
            { name: 'Abu Dhabi', url: '/physics-tutor-abu-dhabi' },
            { name: 'Physics', url: '/physics-tutor-abu-dhabi' },
          ]),
          serviceSchema('Private Physics Tutoring', 'One-to-one IGCSE and A-Level physics tutoring for Abu Dhabi families, taught online across the UAE. Cambridge 0625, Edexcel 4PH1 and A-Level 9702, including practical papers.', '/physics-tutor-abu-dhabi'),
          courseSchema({
            courseName: 'IGCSE & A-Level Physics Tutoring Abu Dhabi',
            description: 'One-to-one IGCSE and A-Level physics tutoring for Abu Dhabi families, taught online across the UAE.',
            url: '/physics-tutor-abu-dhabi',
            city: 'Abu Dhabi',
          }),
          faqSchema(faqs.map(f => ({ q: f.q, a: f.plain }))),
        ]}
      />

      {/* SECTION 01 — HERO */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">
        {/* Full background wave & orbit vectors on desktop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full" aria-hidden="true" style={{ background: '#060f22' }}>
            <defs>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.15"/>
                <stop offset="40%" stopColor="#5fd3e6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#5fd3e6" stopOpacity="0.15"/>
              </linearGradient>
              <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#5fd3e6" stopOpacity="0.2"/>
              </linearGradient>
              <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22b8cd" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="0"/>
              </radialGradient>
              <filter id="pglow"><feGaussianBlur stdDeviation="3"/></filter>
              <filter id="pglow2"><feGaussianBlur stdDeviation="6"/></filter>
              <marker id="arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(240,201,106,0.8)"/>
              </marker>
            </defs>

            {/* Background dot grid */}
            {(() => {
              const dots: React.ReactNode[] = [];
              for (let x = 40; x < 1400; x += 55) for (let y = 30; y < 600; y += 55)
                dots.push(<circle key={`d${x}${y}`} cx={x} cy={y} r="1" fill="rgba(255,255,255,0.04)"/>);
              return dots;
            })()}

            {/* Left side: Transverse wave */}
            {(() => {
              const out: React.ReactNode[] = [];
              const WY = 310, WAMP = 90, NWAVES = 2.2;
              const wpts: string[] = [];
              for (let i = 0; i <= 120; i++) {
                const x = 30 + (i / 120) * 580;
                const phase = (i / 120) * NWAVES * 2 * Math.PI;
                const fade = Math.min(1, Math.min(i / 18, (120 - i) / 18));
                wpts.push(`${x},${WY - Math.sin(phase) * WAMP * fade}`);
              }
              out.push(<polyline key="wave" points={wpts.join(' ')} fill="none" stroke="url(#waveGrad)" strokeWidth="2.6" filter="url(#pglow)"/>);
              out.push(<line key="waxis" x1="30" y1={WY} x2="610" y2={WY} stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6"/>);
              [0.25, 0.75, 1.25, 1.75].forEach((t, i) => {
                const bx = 30 + (t / NWAVES) * 580;
                const by = WY;
                const amp = 70;
                out.push(<line key={`bar${i}`} x1={bx} y1={by - amp} x2={bx} y2={by + amp}
                  stroke="rgba(95,211,230,0.25)" strokeWidth="1.2" strokeDasharray="3 4"/>);
              });
              out.push(<line key="wavedir" x1="580" y1={WY} x2="640" y2={WY}
                stroke="rgba(95,211,230,0.7)" strokeWidth="2" markerEnd="url(#arrow)"/>);
              out.push(<text key="elbl" x="42" y={WY - WAMP - 12} fill="rgba(95,211,230,0.7)" fontSize="13" fontFamily="monospace">E</text>);
              out.push(<text key="wlbl" x="560" y={WY - 14} fill="rgba(95,211,230,0.55)" fontSize="11" fontFamily="monospace">→ λ</text>);
              out.push(<text key="fma" x="48" y="480" fill="rgba(240,201,106,0.60)" fontSize="14" fontFamily="monospace" letterSpacing="1">F = ma</text>);
              out.push(<text key="ke" x="48" y="505" fill="rgba(95,211,230,0.45)" fontSize="13" fontFamily="monospace" letterSpacing="1">½mv²</text>);
              out.push(<text key="vir" x="200" y="480" fill="rgba(180,180,255,0.40)" fontSize="13" fontFamily="monospace" letterSpacing="1">V = IR</text>);
              return out;
            })()}

            {/* Right side: Bohr atom */}
            {(() => {
              const out: React.ReactNode[] = [];
              const AX = 1090, AY = 250;
              const orbitDefs = [
                { rx: 105, ry: 36, rot: 0, eAng: 1.0 },
                { rx: 105, ry: 36, rot: 60, eAng: 2.2 },
                { rx: 105, ry: 36, rot: 120, eAng: 4.5 },
              ];
              orbitDefs.forEach((o, oi) => {
                out.push(
                  <ellipse key={`orb${oi}`} cx={AX} cy={AY} rx={o.rx} ry={o.ry}
                    fill="none" stroke="url(#orbitGrad)" strokeWidth="1.6"
                    transform={`rotate(${o.rot} ${AX} ${AY})`}
                    filter="url(#pglow)"/>
                );
                const cosA = Math.cos(o.eAng), sinA = Math.sin(o.eAng);
                const rotR = o.rot * Math.PI / 180;
                const ex = AX + (o.rx * cosA * Math.cos(rotR) - o.ry * sinA * Math.sin(rotR));
                const ey = AY + (o.rx * cosA * Math.sin(rotR) + o.ry * sinA * Math.cos(rotR));
                out.push(<circle key={`eg${oi}`} cx={ex} cy={ey} r="9" fill="rgba(95,211,230,0.2)" filter="url(#pglow)"/>);
                out.push(<circle key={`el${oi}`} cx={ex} cy={ey} r="4.5" fill="#5fd3e6"/>);
                out.push(<text key={`ellt${oi}`} x={ex + 7} y={ey - 6} fill="rgba(95,211,230,0.65)" fontSize="10" fontFamily="monospace">e⁻</text>);
              });
              out.push(<circle key="nglow2" cx={AX} cy={AY} r="36" fill="url(#nucleusGlow)" filter="url(#pglow2)"/>);
              out.push(<circle key="nglow" cx={AX} cy={AY} r="18" fill="rgba(34,184,205,0.15)"/>);
              out.push(<circle key="ncore" cx={AX} cy={AY} r="9" fill="#22b8cd" opacity="0.9"/>);
              [[-4,-3],[4,-3],[0,4]].forEach(([dx,dy],i) => {
                out.push(<circle key={`p${i}`} cx={AX+dx} cy={AY+dy} r="3" fill="rgba(255,120,100,0.8)"/>);
              });
              out.push(<text key="albl" x={AX + 120} y={AY - 40} fill="rgba(95,211,230,0.55)" fontSize="12" fontFamily="monospace">E = hf</text>);
              out.push(<text key="albl2" x={AX + 120} y={AY - 20} fill="rgba(180,180,255,0.40)" fontSize="12" fontFamily="monospace">p = mv</text>);
              return out;
            })()}
          </svg>
        </div>

        {/* Mobile-optimized physics graphics & wave background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 md:hidden overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#22b8cd]/15 blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-[#f0c96a]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#0f4a9b]/30 blur-2xl" />

          <svg viewBox="0 0 400 680" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="mWaveGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.1"/>
                <stop offset="40%" stopColor="#5fd3e6" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#5fd3e6" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="mOrbitGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="0.85"/>
                <stop offset="100%" stopColor="#5fd3e6" stopOpacity="0.2"/>
              </linearGradient>
              <radialGradient id="mNucleusGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22b8cd" stopOpacity="0.75"/>
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="0"/>
              </radialGradient>
              <filter id="mPglow"><feGaussianBlur stdDeviation="2.5"/></filter>
            </defs>

            {/* Mobile background dot grid */}
            {(() => {
              const dots: React.ReactNode[] = [];
              for (let x = 20; x < 400; x += 40) for (let y = 20; y < 680; y += 40)
                dots.push(<circle key={`md${x}${y}`} cx={x} cy={y} r="0.9" fill="rgba(255,255,255,0.04)"/>);
              return dots;
            })()}

            {/* Top-Right Bohr Atom visual */}
            {(() => {
              const AX = 330, AY = 100;
              const orbits = [
                { rx: 55, ry: 20, rot: 15, eAng: 1.2 },
                { rx: 55, ry: 20, rot: 75, eAng: 3.4 },
                { rx: 55, ry: 20, rot: 135, eAng: 5.1 },
              ];
              const out: React.ReactNode[] = [];
              orbits.forEach((o, oi) => {
                out.push(
                  <ellipse key={`m-orb${oi}`} cx={AX} cy={AY} rx={o.rx} ry={o.ry}
                    fill="none" stroke="url(#mOrbitGrad)" strokeWidth="1.3"
                    transform={`rotate(${o.rot} ${AX} ${AY})`} filter="url(#mPglow)"/>
                );
                const cosA = Math.cos(o.eAng), sinA = Math.sin(o.eAng);
                const rotR = o.rot * Math.PI / 180;
                const ex = AX + (o.rx * cosA * Math.cos(rotR) - o.ry * sinA * Math.sin(rotR));
                const ey = AY + (o.rx * cosA * Math.sin(rotR) + o.ry * sinA * Math.cos(rotR));
                out.push(<circle key={`m-el${oi}`} cx={ex} cy={ey} r="3" fill="#5fd3e6"/>);
              });
              out.push(<circle key="m-nglow" cx={AX} cy={AY} r="18" fill="url(#mNucleusGlow)" filter="url(#mPglow)"/>);
              out.push(<circle key="m-ncore" cx={AX} cy={AY} r="5" fill="#22b8cd"/>);
              return out;
            })()}

            {/* Transverse Physics Wave across bottom */}
            {(() => {
              const out: React.ReactNode[] = [];
              const WY = 590, WAMP = 42, NWAVES = 2;
              const wpts: string[] = [];
              for (let i = 0; i <= 80; i++) {
                const x = 10 + (i / 80) * 380;
                const phase = (i / 80) * NWAVES * 2 * Math.PI;
                const fade = Math.min(1, Math.min(i / 10, (80 - i) / 10));
                wpts.push(`${x},${WY - Math.sin(phase) * WAMP * fade}`);
              }
              out.push(<polyline key="m-wave" points={wpts.join(' ')} fill="none" stroke="url(#mWaveGrad)" strokeWidth="2" filter="url(#mPglow)"/>);
              out.push(<line key="m-waxis" x1="10" y1={WY} x2="390" y2={WY} stroke="rgba(95,211,230,0.12)" strokeWidth="1" strokeDasharray="4 4"/>);
              return out;
            })()}

            {/* Subtle Physics Formula Watermarks */}
            <text x="24" y="110" fill="rgba(240,201,106,0.35)" fontSize="12" fontFamily="monospace" fontWeight="600">F = ma</text>
            <text x="24" y="130" fill="rgba(95,211,230,0.30)" fontSize="11" fontFamily="monospace">V = IR</text>
            <text x="280" y="635" fill="rgba(240,201,106,0.35)" fontSize="11" fontFamily="monospace">P = V²/R</text>
            <text x="28" y="635" fill="rgba(95,211,230,0.35)" fontSize="11" fontFamily="monospace">λ = v/f</text>
          </svg>
        </div>

        {/* Hero Text Block */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-20 md:pb-14 max-w-5xl w-full">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2.5"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f0c96a' }} />
            <span className="text-blue-100/80 text-[11px] sm:text-[12px] font-semibold">Trusted by Abu Dhabi families since 2015</span>
          </div>

          {/* H1 Heading */}
          <h1 className="font-extrabold tracking-tight text-white leading-[1.08] mb-3 md:mb-4 text-[clamp(1.6rem,4.8vw,3.2rem)] max-w-3xl">
            IGCSE and A-Level Physics Tutor in{' '}
            <span style={{ background:'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Abu Dhabi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-blue-100/80 text-[clamp(0.88rem,2vw,1.02rem)] leading-relaxed max-w-2xl mb-6 md:mb-8 px-4">
            One-to-one physics tutoring, matched to your child's exam board and taught online across the UAE.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full px-4">
            <div className="sm:hidden w-full max-w-[340px] flex flex-col items-center gap-2.5 p-3.5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}>
              <a href={BOOKING}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white transition-all hover:-translate-y-0.5"
                style={{ background:'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow:'0 4px 16px rgba(15,74,155,0.5)' }}>
                Book Your Free Trial
              </a>
              <span className="text-blue-200/50 text-[11px] -my-1">or</span>
              <a href={WA_URL} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20">
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
              </a>
              <p className="text-blue-200/50 text-[11px] mt-1">No commitment. Cancel anytime.</p>
            </div>

            <div className="hidden sm:flex items-start justify-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <a href={BOOKING}
                  className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[15px] md:text-base text-white transition-all hover:-translate-y-0.5"
                  style={{ background:'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow:'0 4px 18px rgba(15,74,155,0.55)' }}>
                  Book Your Free Trial
                </a>
                <p className="text-blue-200/50 text-[11px]">No commitment. Cancel anytime.</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <a href={WA_URL} className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[14px] md:text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20">
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — STATS BAR */}
      <StatsBar />

      {/* SECTION 03 — WHERE PHYSICS MARKS VANISH (5 Cards) */}
      <ChallengesCarousel challenges={challenges} />

      {/* NEW SECTION — EXAM BOARD DECODER */}
      <ExamBoardDecoderSection />

      {/* SECTION 04 — PHYSICS TUTORING FOR ABU DHABI FAMILIES, TAUGHT ONLINE */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <Eyebrow icon={<Brain className="h-3.5 w-3.5" />} text="Our Approach" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
              Physics tutoring for Abu Dhabi families,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">taught online</span>
            </h2>
            <p className="text-gray-600 text-[14px] sm:text-[14.5px] leading-relaxed">
              One-to-one specialist physics instruction tailored to your child's exam board and pace.
            </p>
          </div>

          {/* 3 Core Approach Cards */}
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-3.5 sm:gap-6 mb-6 sm:mb-7 pb-3.5 sm:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 scroll-pl-4 sm:scroll-pl-0">
            {[
              {
                icon: <Calculator className="w-6 h-6" />,
                watermark: <Calculator className="w-28 h-28 sm:w-32 sm:h-32" strokeWidth={1.2} />,
                title: 'Algebra rebuilt first',
                desc: 'Before F = ma or V = IR, the rearranging is made automatic. Everything after it depends on that.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                watermark: <ShieldCheck className="w-28 h-28 sm:w-32 sm:h-32" strokeWidth={1.2} />,
                title: 'Same tutor every week',
                desc: "One specialist who knows your child's board, their tier and what they got wrong last month.",
              },
              {
                icon: <Timer className="w-6 h-6" />,
                watermark: <Timer className="w-28 h-28 sm:w-32 sm:h-32" strokeWidth={1.2} />,
                title: 'Scheduled around school',
                desc: 'Weekday evenings and weekend mornings in Abu Dhabi time, adjusted during mocks and Ramadan.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="w-[82vw] max-w-[310px] sm:w-auto sm:max-w-none snap-start shrink-0 sm:shrink group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center overflow-hidden cursor-default transition-all duration-300 border border-slate-200/90 bg-[#f8fbff] shadow-xs hover:shadow-md hover:border-[#0f4a9b]/35 flex flex-col justify-between"
              >
                {/* Background Watermark Icon */}
                <div className="absolute -bottom-3 -right-3 text-[#0f4a9b]/[0.05] pointer-events-none transition-all duration-300 ease-out group-hover:scale-105 group-hover:text-[#0f4a9b]/[0.12]">
                  {card.watermark}
                </div>

                <div>
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-2xl mb-3.5 mx-auto bg-blue-50/80 border border-blue-100 text-[#0f4a9b] group-hover:scale-105 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300 shadow-2xs">
                    {card.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-[15px] sm:text-base font-extrabold text-[#0a1f3d] mb-2 leading-tight group-hover:text-[#0f4a9b] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Context Banner Strap Box */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#0f4a9b]/15 bg-gradient-to-r from-[#f4f8fe] via-[#f8fbff] to-[#f4f8fe] p-5 sm:p-6 shadow-2xs">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
              {/* Left: School Experience */}
              <div className="flex items-start gap-3.5 sm:pr-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-[#0f4a9b]/15 text-[#0f4a9b] flex items-center justify-center shadow-2xs mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#0a1f3d] mb-1">
                    Abu Dhabi School Experience Since 2015
                  </h4>
                  <p className="text-[12.5px] text-gray-600 leading-relaxed">
                    We have taught physics to Abu Dhabi students since 2015, including families at Brighton College Abu Dhabi, Cranleigh, GEMS World Academy and other ADEK schools.
                  </p>
                </div>
              </div>

              {/* Right: Online & Commute-Free Learning */}
              <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-6">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-[#0f4a9b]/15 text-[#0f4a9b] flex items-center justify-center shadow-2xs mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#0a1f3d] mb-1">
                    Zero-Commute Online Delivery
                  </h4>
                  <p className="text-[12.5px] text-gray-600 leading-relaxed">
                    Every lesson is online, so your child learns from home in Al Reem, Khalifa City, Yas Island, Al Raha or anywhere in the emirate, and travel never costs a session. Sessions are scheduled around the ADEK calendar, school mock windows and exam leave.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — TOPICS WE COVER */}
      <section className="py-14 sm:py-18 lg:py-20 bg-gradient-to-b from-[#f8fafc] via-[#eef4fc] to-[#f8fafc] relative overflow-hidden">
        {/* Prominent Animated Background Canvas */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Glowing Ambient Light Orbs */}
          <div className="absolute top-1/4 left-6 w-[450px] h-[450px] bg-[#0f4a9b]/[0.08] blur-[100px] rounded-full" />
          <div className="absolute bottom-10 right-6 w-[480px] h-[480px] bg-[#00d4ff]/[0.08] blur-[110px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#f0c96a]/[0.07] blur-[120px] rounded-full" />

          {/* Animated SVG Field Lines, Waves & Coordinates */}
          <svg className="absolute inset-0 w-full h-full opacity-70" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600" aria-hidden="true">
            <defs>
              <pattern id="topicGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(15,74,155,0.045)" strokeWidth="1" />
                <circle cx="40" cy="40" r="1.2" fill="rgba(15,74,155,0.12)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topicGrid)" />
            {/* Smooth undulating wave 1 */}
            <motion.path
              d="M 0 180 Q 300 110 600 180 T 1200 180"
              fill="none"
              stroke="rgba(15,74,155,0.14)"
              strokeWidth="2.2"
              strokeDasharray="6 6"
              animate={{ d: [
                'M 0 180 Q 300 110 600 180 T 1200 180',
                'M 0 180 Q 300 250 600 180 T 1200 180',
                'M 0 180 Q 300 110 600 180 T 1200 180'
              ] }}
              transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
            />
            {/* Smooth undulating wave 2 */}
            <motion.path
              d="M 0 420 Q 300 480 600 420 T 1200 420"
              fill="none"
              stroke="rgba(30,91,168,0.12)"
              strokeWidth="2.2"
              animate={{ d: [
                'M 0 420 Q 300 480 600 420 T 1200 420',
                'M 0 420 Q 300 360 600 420 T 1200 420',
                'M 0 420 Q 300 480 600 420 T 1200 420'
              ] }}
              transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut' }}
            />
            {/* Physics Field Rings in background */}
            <circle cx="150" cy="300" r="180" fill="none" stroke="rgba(15,74,155,0.07)" strokeWidth="1.6" strokeDasharray="8 8" />
            <circle cx="1050" cy="280" r="220" fill="none" stroke="rgba(15,74,155,0.07)" strokeWidth="1.6" strokeDasharray="10 10" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <Eyebrow icon={<Atom className="h-3.5 w-3.5" />} text="Topic Coverage" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
              Topics{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">We Cover</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              From classical mechanics to modern physics, every major topic taught at exam depth.
            </p>
          </div>
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 items-stretch pb-3.5 sm:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 scroll-pl-4 sm:scroll-pl-0">
            {topics.map((card, i) => (
              <div key={card.id || i} className="w-[82vw] max-w-[310px] sm:w-auto sm:max-w-none snap-start shrink-0 sm:shrink h-full">
                <PhysicsTiltCard>
                  {(isHovered) => (
                    <div className="flex flex-col justify-between h-full relative z-10">
                      {/* Background Watermark Icon */}
                      <div className="absolute -bottom-3 -right-3 text-[#0f4a9b]/[0.06] pointer-events-none transition-all duration-300 ease-out group-hover:scale-105 group-hover:text-[#0f4a9b]/[0.14]">
                        {card.watermark}
                      </div>

                      <div>
                        {/* Top Micro-Animation Header Container */}
                        <div className="inline-flex items-center justify-center w-15 h-15 rounded-2xl mb-3.5 mx-auto transition-all duration-300 ease-out bg-blue-50/70 border border-blue-100 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:scale-105 shadow-2xs">
                          {card.renderMicroAnimation(isHovered)}
                        </div>

                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          {card.tag}
                        </span>
                        <h3
                          className="text-[16px] font-extrabold text-[#0a1f3d] mb-2 leading-tight transition-colors duration-200"
                          style={{ color: isHovered ? '#0f4a9b' : '#0a1f3d' }}
                        >
                          {card.title}
                        </h3>
                      </div>

                      <p className="text-[12.5px] sm:text-[13px] text-gray-600 leading-relaxed mt-1">
                        {card.desc}
                      </p>
                    </div>
                  )}
                </PhysicsTiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION — THE EQUATIONS THAT CARRY THE MOST MARKS */}
      <section className="py-6 sm:py-8 lg:py-9 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-3.5 sm:mb-4">
            <Eyebrow icon={<Calculator className="h-3.5 w-3.5" />} text="Key Formulas" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1.5">
              The equations that carry the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                most marks
              </span>
            </h2>
            <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed">
              Six equations appear again and again across Cambridge 0625, Edexcel 4PH1 and A-Level. Each one has a rearrangement students get wrong and a unit that catches them out.{' '}
              <a href="/blogs/igcse-physics-formulas-exam" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                Read why physics formulas fail under pressure
              </a>
            </p>
          </div>

          <ExaminerLabSheetTable equations={highMarkEquations} />

          <p className="text-center text-[11.5px] sm:text-xs text-gray-500 font-medium mt-2">
            We drill these until the rearranging happens before the numbers go in, which is the habit that protects the method marks.
          </p>
        </div>
      </section>

      {/* SECTION 07 — THE PRACTICAL PAPERS */}
      <section className="py-10 sm:py-12 lg:py-14 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0a1f3d 0%, #0f3575 50%, #0a2a6e 100%)' }}>
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <PhysGrid />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <Eyebrow icon={<FlaskConical className="h-3.5 w-3.5" />} text="Paper And Practical" dark />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-[1.1] mb-2">
              The practical{' '}
              <span style={{ background:'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>papers</span>
            </h2>
            <p className="text-blue-100/65 text-[15px] leading-relaxed">
              Cambridge students sit one of two practical papers, and most parents are never told which. They are different exams and they are prepared for differently.
            </p>
          </div>
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto pb-3.5 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-auto md:px-0 scroll-pl-4 md:scroll-pl-0">
            {practicalCards.map((card, i) => (
              <div
                key={i}
                className="w-[84vw] max-w-[330px] md:w-auto md:max-w-none snap-start shrink-0 md:shrink group rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-left relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,74,155,0.35)]"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                  border: '1px solid rgba(147,197,253,0.22)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div>
                  {/* Top Animated Badge Container */}
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-all duration-300 ease-out group-hover:scale-108"
                    style={{
                      background: 'linear-gradient(135deg, rgba(56,189,248,0.18) 0%, rgba(15,74,155,0.30) 100%)',
                      border: '1.5px solid rgba(147,197,253,0.35)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                    }}
                  >
                    {card.badge}
                  </div>

                  {card.tag && (
                    <span className="inline-block text-[10.5px] font-mono font-bold tracking-wide uppercase text-[#f0c96a] bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-full mb-2">
                      {card.tag}
                    </span>
                  )}

                  <div className="min-h-[46px] flex items-center mb-2">
                    <h3 className="text-[17px] sm:text-[18px] font-extrabold text-white leading-tight group-hover:text-[#f0c96a] transition-colors duration-200">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-blue-100/75 text-[13.5px] sm:text-[14px] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — CAN PRACTICALS BE TAUGHT ONLINE? */}
      <section className="py-12 sm:py-16 lg:py-18 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <Eyebrow icon={<FlaskConical className="h-3.5 w-3.5" />} text="Online Practical Mastery" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-3">
              Can practicals be taught{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">online?</span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-[13px] font-bold px-3.5 py-1.5 rounded-full shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Yes — and more directly than most parents expect.</span>
            </div>
          </div>

          {/* 2-Column Structured Comparison: Paper 6 vs Paper 5 */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto pb-3.5 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-auto md:px-0 scroll-pl-4 md:scroll-pl-0">
            {/* Paper 6 Box */}
            <div className="w-[84vw] max-w-[330px] md:w-auto md:max-w-none snap-start shrink-0 md:shrink rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200 bg-gradient-to-b from-[#f8fbff] to-white shadow-xs hover:border-[#0f4a9b]/35 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-[#0f4a9b] bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                    Paper 6 · Written Paper
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 font-mono">100% On Desk</span>
                </div>
                <h3 className="text-base sm:text-[17px] font-extrabold text-[#0a1f3d] mb-2 leading-snug">
                  Desk-Based Experimental Analysis
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed">
                  Paper 6 is a written paper. Nothing in it requires apparatus, so it is taught exactly the way any written paper is taught, using past papers and the mark scheme.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0f4a9b]">
                <CheckCircle2 className="w-4 h-4 text-[#0f4a9b]" />
                <span>Practiced via official Cambridge &amp; Edexcel mark schemes</span>
              </div>
            </div>

            {/* Paper 5 Box */}
            <div className="w-[84vw] max-w-[330px] md:w-auto md:max-w-none snap-start shrink-0 md:shrink rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200 bg-gradient-to-b from-[#f8fbff] to-white shadow-xs hover:border-[#0f4a9b]/35 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-full">
                    Paper 5 · Laboratory Test
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 font-mono">Method Marks</span>
                </div>
                <h3 className="text-base sm:text-[17px] font-extrabold text-[#0a1f3d] mb-2 leading-snug">
                  What Marks Are Actually Awarded For
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed mb-3">
                  Paper 5 is sat in your child's school laboratory, so the experiment itself stays with the school. What we teach is everything the marks are actually awarded for:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11.5px] text-slate-700 font-medium">
                  <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-2 py-1 rounded-md">
                    <span className="text-[#0f4a9b] font-bold">•</span> Table setup &amp; decimals
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-2 py-1 rounded-md">
                    <span className="text-[#0f4a9b] font-bold">•</span> Graph point plotting
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-2 py-1 rounded-md">
                    <span className="text-[#0f4a9b] font-bold">•</span> Grid scale selection
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-2 py-1 rounded-md">
                    <span className="text-[#0f4a9b] font-bold">•</span> Specific error evaluation
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-800">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Names real sources of error rather than generic "human error"</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — FOUR CORE PRACTICAL SKILLS */}
      <section className="py-12 sm:py-16 lg:py-18 bg-gradient-to-b from-[#f8fafc] via-[#f0f5fc] to-[#f8fafc] border-y border-slate-200/60 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <Eyebrow icon={<Layers className="h-3.5 w-3.5" />} text="Practical Skills Breakdown" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
              Four core practical skills,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">mastered online</span>
            </h2>
            <p className="text-gray-600 text-[14px] sm:text-[14.5px] leading-relaxed mb-3.5">
              Every practical paper tests these four core areas. We drill them systematically from past papers and examiner mark schemes.
            </p>
            <a
              href="/blogs/what-does-gradient-mean-maths-physics"
              className="inline-flex items-center gap-1.5 text-xs sm:text-[12.5px] font-bold text-[#0f4a9b] bg-white border border-blue-200/80 hover:bg-blue-50 hover:border-blue-300 px-3.5 py-1.5 rounded-full transition-all duration-200 shadow-2xs group"
            >
              <span>How to calculate &amp; interpret exam gradients</span>
            </a>
          </div>

          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 items-stretch pb-3.5 sm:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 scroll-pl-4 sm:scroll-pl-0">
            {onlinePracticalCards.map((card, i) => (
              <div key={i} className="w-[80vw] max-w-[300px] sm:w-auto sm:max-w-none snap-start shrink-0 sm:shrink h-full">
                <PracticalSkillCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08 — PHYSICS JOURNEY WITH USTAAD (with merged 3-step diagnosis) */}
      <section className="py-10 sm:py-12 lg:py-14 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0a1f3d 0%, #0f3575 50%, #0a2a6e 100%)' }}>
        <div className="absolute top-[-10%] right-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <PhysGrid />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl lg:text-2xl font-extrabold text-white leading-[1.1] mb-1.5">
              Physics Journey{' '}
              <span style={{ background:'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>With Ustaad</span>
            </h2>
            <p className="text-blue-100/55 text-[13px] leading-relaxed max-w-xl mx-auto mb-6">
              From foundation physics to advanced exams, we match the syllabus your child studies.
            </p>

            {/* Animated Sequential 3-Step Process */}
            <InteractiveProcessSteps steps={mergedSteps} />
          </div>

          {/* Journey Cards — 1-Col Grid on Mobile, 3-Col Grid on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {journey.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl p-4 sm:p-5 flex flex-col gap-2.5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
                style={{ background: 'rgba(15,74,155,0.18)', border: '1px solid rgba(110,168,255,0.18)' }}
              >
                <div className="flex flex-col gap-1.5">
                  <span
                    className="self-start text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: 'rgba(240,201,106,0.12)', color: '#fde68a', border: '1px solid rgba(240,201,106,0.25)' }}
                  >
                    {c.years}
                  </span>
                  <span className="font-extrabold text-[15px] text-white leading-tight">{c.title}</span>
                </div>
                <div className="h-px" style={{ background: 'rgba(110,168,255,0.12)' }} />
                <p className="text-blue-100/65 text-[12px] leading-relaxed font-medium">{c.desc}</p>
                <div className="mt-auto pt-0.5">
                  <a
                    href={c.link.href}
                    className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full whitespace-nowrap transition-all hover:brightness-110"
                    style={{ color: '#93c5fd', background: 'rgba(15,74,155,0.3)', border: '1px solid rgba(110,168,255,0.2)' }}
                  >
                    {c.link.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09 — TABRAIZ KHAN FACULTY CARD */}
      <TabraizTutorCard />

      {/* SECTION 10 — INSIDE A REAL PAPER */}
      <section className="py-5 sm:py-6 lg:py-7 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-2xl lg:text-[26px] font-extrabold text-[#0a1f3d] leading-tight mb-1">
              Inside A{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Real Paper</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] leading-snug max-w-xl mx-auto">
              Here is one Cambridge 0625 question, the common mistake, and what scores marks.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative rounded-2xl p-4 sm:p-5 lg:p-6 overflow-hidden bg-white border border-slate-200/90 shadow-[0_8px_28px_rgba(15,74,155,0.06)]"
          >
            {/* Header Badges */}
            <div className="relative z-10 flex flex-wrap items-center gap-2 mb-2.5 sm:mb-3">
              <span className="text-[10px] sm:text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0f4a9b] border border-blue-200/60 font-mono">
                One Real Cambridge 0625 Question
              </span>
              <span className="text-[10px] sm:text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 font-mono">
                Paper 4 · 4 marks
              </span>
            </div>

            {/* Exam Question with Word-by-Word Font Reveal Animation */}
            <div className="relative z-10 bg-[#f8fbff] border-l-3 sm:border-l-4 border-[#0f4a9b] rounded-r-xl p-3 sm:p-3.5 mb-2.5 sm:mb-3 shadow-2xs">
              <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#0a1f3d] font-medium italic">
                “<AnimatedTextWords text="A 2.0 kg trolley moves at 3.0 m/s and collides with a stationary 4.0 kg trolley. They move together after the collision. Calculate the final velocity." />”
              </p>
            </div>

            {/* Breakdown Steps with Animated Cascading Entry */}
            <div className="relative z-10 flex flex-col gap-2 sm:gap-2.5">
              {/* Row 1: Common Student Mistake */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center sm:items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-rose-50/70 border border-rose-100"
              >
                <div className="shrink-0 w-6 h-6 rounded-lg bg-rose-100/90 text-rose-600 flex items-center justify-center">
                  <X className="h-3.5 w-3.5" />
                </div>
                <p className="text-xs sm:text-[13px] text-gray-700 leading-snug">
                  <span className="font-extrabold text-rose-900 mr-1.5">Common student mistake:</span>
                  Skipping the conservation of momentum statement.
                </p>
              </motion.div>

              {/* Row 2: What Earns Full Marks */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="flex items-center sm:items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-emerald-50/70 border border-emerald-100"
              >
                <div className="shrink-0 w-6 h-6 rounded-lg bg-emerald-100/90 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
                <p className="text-xs sm:text-[13px] text-gray-700 leading-snug">
                  <span className="font-extrabold text-emerald-900 mr-1.5">What earns full marks:</span>
                  Equation written, masses substituted, working shown, units included.
                </p>
              </motion.div>

              {/* Row 3: How Ustaad Teaches It */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center sm:items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-blue-50/80 border border-blue-100"
              >
                <div className="shrink-0 w-6 h-6 rounded-lg bg-blue-100/90 text-[#0f4a9b] flex items-center justify-center">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <p className="text-xs sm:text-[13px] text-gray-700 leading-snug">
                  <span className="font-extrabold text-[#0a1f3d] mr-1.5">How Ustaad teaches it:</span>
                  Diagram first, momentum equation second, arithmetic last.
                </p>
              </motion.div>
            </div>

            <p className="relative z-10 text-[10.5px] sm:text-[11px] text-gray-400 mt-3 pt-2 border-t border-slate-100 font-medium">
              Past paper guidance reviewed by Cambridge-trained physics tutors with examiner experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION — FROM IGCSE PHYSICS TO A-LEVEL: WHAT CHANGES (Fitted to 1 Section) */}
      <section className="py-5 sm:py-6 lg:py-7 bg-gradient-to-b from-[#f8fafd] to-white border-y border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-[#0f4a9b] border border-blue-200/60 text-[11px] font-bold mb-1 font-mono">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Syllabus Transition</span>
            </div>
            <h2 className="text-lg sm:text-2xl lg:text-[26px] font-extrabold text-[#0a1f3d] leading-tight mb-1">
              From IGCSE physics to A-Level:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                what changes
              </span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] leading-snug max-w-xl mx-auto">
              Students who did well at IGCSE often stall in the first term of Year 12. The content is not the problem.
            </p>
          </div>

          {/* Comparison Matrix */}
          <div className="bg-white border border-slate-200/90 rounded-2xl shadow-[0_8px_30px_rgba(15,74,155,0.06)] overflow-hidden mb-3">
            {/* Column Headers */}
            <div className="grid grid-cols-2 bg-gradient-to-r from-[#0a1f3d] to-[#0d2a54] text-white px-3.5 py-2 sm:px-5 sm:py-2.5">
              <div className="flex items-center">
                <span className="text-[10px] sm:text-[11.5px] font-bold tracking-wider uppercase text-slate-200">What they are used to</span>
              </div>
              <div className="flex items-center pl-3 sm:pl-4 border-l border-white/15">
                <span className="text-[10px] sm:text-[11.5px] font-bold tracking-wider uppercase text-amber-300">What A-Level asks</span>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-slate-100">
              {aLevelTransitionRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 items-center text-xs sm:text-[13px] transition-all duration-200 ${
                    i % 2 === 1 ? 'bg-[#f9fbff]/70 hover:bg-blue-50/50' : 'bg-white hover:bg-slate-50/80'
                  }`}
                >
                  <div className="py-2.5 px-3.5 sm:px-5 text-slate-600 font-medium leading-relaxed">
                    {row.usedTo}
                  </div>
                  <div className="py-2.5 px-3.5 sm:px-5 font-semibold text-[#0a1f3d] leading-relaxed border-l border-slate-100">
                    {row.aLevelAsks}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info Strap */}
          <div className="py-2.5 px-3.5 sm:px-4 rounded-xl bg-blue-50/60 border border-blue-100 text-center max-w-2xl mx-auto shadow-2xs">
            <p className="text-xs sm:text-[12.5px] text-gray-700 leading-snug font-medium">
              The gap is describable, which is why it closes quickly once someone names it. Most of our Year 12 work in the first term is exactly this.{' '}
              <a href="/a-level-tutor-abu-dhabi" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">
                Explore A-Level tutoring in Abu Dhabi
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11 — CHECK THE GAP YOURSELF (Fitted to 1 Section with Animated Physics BG) */}
      <section className="py-5 sm:py-6 lg:py-7 relative overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-white border-b border-slate-200/70">
        <FloatingPhysicsElements />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-[#0f4a9b] border border-blue-200/60 text-[11px] font-bold mb-1 font-mono">
              <FileSearch className="h-3.5 w-3.5" />
              <span>Self Diagnosis</span>
            </div>
            <h2 className="text-lg sm:text-2xl lg:text-[26px] font-extrabold text-[#0a1f3d] leading-tight mb-1">
              Check The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Gap Yourself</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] leading-snug max-w-xl mx-auto">
              Three quick yes/no questions to find the gap before booking a tutor.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:gap-2.5 mb-2.5">
            {gapChecks.map((g, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-3 rounded-xl p-2.5 sm:p-3 bg-white/95 backdrop-blur-xs border border-blue-100 shadow-[0_4px_16px_rgba(15,74,155,0.04)] hover:shadow-[0_8px_24px_rgba(15,74,155,0.08)] hover:border-[#0f4a9b]/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <p className="text-xs sm:text-[13.5px] font-semibold text-[#0a1f3d] leading-snug">{g.q}</p>
                <span className="shrink-0 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap bg-blue-50 text-[#0f4a9b] border border-blue-200/60 shadow-2xs">
                  {g.tag}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-[11.5px] sm:text-xs text-gray-500 leading-snug mb-3">
            Most students hit two of three. We start with the highest-impact gap first.
          </p>

          <div className="flex justify-center">
            <GoldButton href={BOOKING} className="px-5 py-2 text-xs sm:text-sm font-bold shadow-sm">
              Book Diagnostic Trial
            </GoldButton>
          </div>
        </div>
      </section>

      {/* SECTION 12 — WHAT PARENTS SAY */}
      <section className="py-10 sm:py-12 lg:py-14" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 50%, #1e5ba8 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5 sm:mb-6">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                What Parents{' '}
                <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Say</span>
              </h2>
            </div>
            <div className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full" style={{ background: 'rgba(240,201,106,0.12)', border: '1px solid rgba(240,201,106,0.25)' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <span key={si} className="text-[#f0c96a] text-xs">★</span>
                ))}
              </div>
              <span className="text-[11px] font-bold ml-1" style={{ color: '#f0c96a' }}>5.0 · Verified Google Review</span>
            </div>
          </div>
          <ParentsSlider />
        </div>
      </section>

      {/* SECTION 13 — PARENTS OFTEN ASK (7 NEW FAQs) */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-start">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:sticky lg:top-24">
              <Eyebrow icon={<Atom className="h-3.5 w-3.5" />} text="Common Questions" />
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
                Parents{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Often Ask</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Honest answers to physics questions Abu Dhabi parents ask before their first session.
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{
                          width: 40, height: 40, minWidth: 40, minHeight: 40,
                          background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                          color: isOpen ? '#fff' : '#0f4a9b',
                          transition: 'background 300ms ease, color 300ms ease',
                          cursor: 'pointer', border: 'none', boxShadow: 'inset 0 0 0 2px #fff',
                        }}
                        aria-label={`Toggle FAQ: ${f.q}`}
                      >
                        <span className="flex items-center justify-center w-full h-full">?</span>
                      </button>

                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border"
                        style={{ minHeight: '48px', padding: '8px 14px', cursor: 'pointer', background: 'transparent', borderColor: 'rgba(15,74,155,0.1)' }}
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
                          <ChevronDown className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="ml-[56px]"
                        >
                          <div className="flex items-start gap-3 rounded-2xl border p-4" style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 4px 16px rgba(15,74,155,0.06)' }}>
                            <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{f.a}</p>
                            <span className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, background: '#0f4a9b', color: '#fff' }}>
                              <HelpCircle className="h-4 w-4" />
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14 — CLOSING CALL TO ACTION */}
      <FinalCTA
        title="Book a free physics trial in Abu Dhabi"
        subtitle=""
        subtitleNode={null}
        button1Text="Book Your Free Trial"
        button1Href={BOOKING}
        button2Text="Ask on WhatsApp"
        subtext2="Free 30-min trial · No card required"
      />

      {/* SECTION 15 — CONNECTED LEARNING PATHWAYS */}
      <RelatedContent
        title="Connected Learning Pathways"
        subtitle="Explore complementary subjects and accredited curricula tailored for Abu Dhabi and UAE students."
        subjects={[
          {
            label: 'Maths Tutor Abu Dhabi',
            href: '/maths-tutor-abu-dhabi',
            note: 'Coordinate calculus, vectors, and mechanics support in Abu Dhabi.'
          },
          {
            label: 'Chemistry Tutor Abu Dhabi',
            href: '/chemistry-tutor-abu-dhabi',
            note: 'One-to-one IGCSE, A-Level & IB chemistry tutoring in Abu Dhabi.'
          },
          {
            label: 'Physics Subject Hub',
            href: '/physics',
            note: 'Comprehensive overview of physics faculty and syllabus tracks.'
          },
        ]}
        curricula={[
          {
            label: 'IB DP Physics (SL & HL)',
            href: '/ib-curriculum',
            note: 'Core syllabus preparation, HL theory & internal assessment coaching.'
          },
          {
            label: 'IGCSE Physics Abu Dhabi',
            href: '/igcse-tutor-abu-dhabi',
            note: 'Cambridge and Edexcel past paper and calculation mastery.'
          },
          {
            label: 'A-Level Physics Abu Dhabi',
            href: '/a-level-tutor-abu-dhabi',
            note: 'Advanced mechanics, fields & Paper 3 practical preparation.'
          },
        ]}
      />
    </Layout>
  );
}
