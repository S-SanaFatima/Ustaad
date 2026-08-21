import { useState, type ReactNode } from 'react';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import {
  Calculator, Sigma, FunctionSquare, LineChart,
  Brackets, Compass, Network, ScanSearch, Workflow, ShieldCheck,
  ClipboardCheck, Timer, PenTool, Gauge, CheckCircle2, ArrowRight,
  ChevronDown, ChevronLeft, ChevronRight, Plus, Sparkles, MapPin, FileSearch, Wrench, ListChecks,
  BookOpen, FlaskConical,
  Route as RouteIcon, Brain, Target, Eye, Star, Atom, MessageCircle,
} from 'lucide-react';
import { Layout, GoldButton, FinalCTA, StatsBar, SchoolsMarquee } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, courseSchema } from './shared/schemas';
import RelatedContent from './shared/RelatedContent';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20support%20with%20Mathematics.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

const mathsSchoolLogos = [
  { name: 'The British School Al Khubairat', file: 'british-school-al-khubairat-abu-dhabi.png', alt: 'The British School Al Khubairat logo, an Abu Dhabi school where students sit IGCSE and A-Level maths', scale: 1.25 },
  { name: 'Brighton College Abu Dhabi', file: 'brighton.png', alt: 'Brighton College Abu Dhabi logo, a British curriculum school known for strong IGCSE and A-Level maths results', scale: 1.25 },
  { name: 'Repton School Abu Dhabi', file: 'repton.png', alt: 'Repton School Abu Dhabi logo, a British and IB school in the capital for IGCSE and A-Level mathematics', scale: 1.25 },
  { name: 'Raha International School', file: 'raha.png', alt: 'Raha International School logo, an Abu Dhabi school offering IB and IGCSE mathematics pathways' },
  { name: 'Al Bateen Academy', file: 'al-bateen.png', alt: 'Al Bateen Academy logo, an Aldar British curriculum school in Abu Dhabi for GCSE and A-Level maths' },
  { name: 'Merryland International School', file: 'merryland.png', alt: 'Merryland International School logo, a British curriculum school in Abu Dhabi supporting IGCSE maths', scale: 1.25 },
];

/* faint math grid background */
const MathGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'grid-l' : 'grid-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(15,74,155,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'grid-l' : 'grid-d'})`} />
  </svg>
);

type Step = { n: string; icon: ReactNode; title: string; desc: string };

type Challenge = { notation: string; icon: ReactNode; title: string; problem: string; fix: string; related?: { label: string; href: string } };

const CARD_PASTEL_BGS = [
  'linear-gradient(145deg,#ede9fe,#ddd6fe)',
  'linear-gradient(145deg,#fef9c3,#fde68a)',
  'linear-gradient(145deg,#dcfce7,#bbf7d0)',
  'linear-gradient(145deg,#ffe4e6,#fecdd3)',
  'linear-gradient(145deg,#e0f2fe,#bae6fd)',
  'linear-gradient(145deg,#fce7f3,#fbcfe8)',
];

/* ─── Per-card icon data ─── */
const CHIP_DATA: { icon: ReactNode; notation: string }[] = [
  { icon: <Calculator     className="w-5 h-5" strokeWidth={1.8} />, notation: 'ax²+bx+c'  },
  { icon: <LineChart      className="w-5 h-5" strokeWidth={1.8} />, notation: 'y=mx+b'    },
  { icon: <Compass        className="w-5 h-5" strokeWidth={1.8} />, notation: 'sinθ/cosθ' },
  { icon: <Sigma          className="w-5 h-5" strokeWidth={1.8} />, notation: 'μ, σ, r'   },
  { icon: <Network        className="w-5 h-5" strokeWidth={1.8} />, notation: 'P(A|B)'    },
  { icon: <FunctionSquare className="w-5 h-5" strokeWidth={1.8} />, notation: 'dy/dx'     },
];

/* ─── Challenges Accordion ─── */
function ChallengeCard({ c, index, delay }: { c: Challenge; index: number; delay: number; wide?: boolean }) {
  return null; // unused — accordion handles rendering
}

function ChallengesAccordion({ challenges }: { challenges: Challenge[] }) {
  const [active, setActive] = useState<number>(-1);

  return (
    <div className="relative">
      {/* FAQ-style compact accordion */}
      <div className="flex flex-col gap-[10px]">
        {challenges.map((c, i) => {
          const isOpen = active === i;
          return (
            <div key={i} className="flex flex-col gap-2">
              {/* Question row - icon + pill (like FAQ) */}
              <div className="flex items-center gap-3">
                {/* Left icon - matches FAQ */}
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
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
                  <span className="flex items-center justify-center w-full h-full">{c.icon}</span>
                </button>

                {/* Title pill - matches FAQ */}
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
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
                  <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{c.title}</span>

                  {/* Right chevron - matches FAQ */}
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

              {/* Expanded content */}
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
                        <p className="text-[13px] text-[#3a4f6e] leading-relaxed">{c.problem}</p>
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
    <section className="py-6 sm:py-7 lg:py-10 bg-white relative overflow-hidden">
      {/* Soft bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(15,74,155,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full mb-5">
              <Target className="h-4 w-4" />
              <span className="text-sm font-bold">Teacher Diagnosis</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
              Where Maths{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">
                Goes Wrong
              </span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Most maths trouble starts in a few topics a student never really learned.
            </p>
          </div>

          {/* Right — accordion (compact like FAQ) */}
          <ChallengesAccordion challenges={challenges} />

        </div>
      </div>
    </section>
  );
}

function ThinkingHabitsSection() {
  const cards = [
    { icon: <Target className="w-7 h-7" />, title: 'Topic Diagnosis First', desc: 'We identify whether the gap sits in algebra, geometry, or number work.' },
    { icon: <CheckCircle2 className="w-7 h-7" />, title: 'Carefully Matched Tutors', desc: 'Tutors picked for IGCSE, A-Level, IB AA HL, or AP Calculus specialisation.' },
    { icon: <Brain className="w-7 h-7" />, title: 'Stronger Study Habits', desc: 'Working memory, notation, and method order quietly build into your child\'s routine.' },
    { icon: <Sparkles className="w-7 h-7" />, title: 'Weekly Past Paper Practice', desc: 'Cambridge 0580, Edexcel 4MA1, or IB AA papers worked through every week.' },
    { icon: <RouteIcon className="w-7 h-7" />, title: 'Focused Exam Preparation', desc: 'Revision blocks target the topics historically losing your child the most marks.' },
    { icon: <CheckCircle2 className="w-7 h-7" />, title: 'Flexible Around School Life', desc: 'Sessions move easily around homework, sports, and your child\'s routine.' },
  ];

  return (
    <section className="py-6 sm:py-7 lg:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
            Why Families{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Choose Us</span>
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Abu Dhabi parents trust Ustaad for steady maths progress, not loud promises.
          </p>
        </div>

        {/* 2x3 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(15,74,155,0.12)' }}
              className="relative rounded-3xl p-3 lg:p-4 text-center overflow-hidden cursor-default transition-shadow duration-300"
              style={{
                background: 'linear-gradient(180deg, #fafbff 0%, #f5f7ff 100%)',
                border: '1px solid rgba(15,74,155,0.08)',
              }}
            >
              {/* Dotted pattern background */}
              <div className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(15,74,155,0.15) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
                }} />

              {/* Icon circle */}
              <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(15,74,155,0.12) 0%, rgba(30,91,168,0.08) 100%)',
                  boxShadow: '0 8px 24px rgba(15,74,155,0.12)',
                }}>
                <div className="text-[#0f4a9b]">{card.icon}</div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-[15px] font-extrabold text-[#0a1f3d] mb-1.5 leading-tight">
                {card.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-[13px] text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsCarousel({ steps }: { steps: Step[] }) {
  // Wave geometry — 3 nodes, alternating above/below
  const W = 1200;

  return (
    <section className="py-6 sm:py-7 lg:py-10 bg-[#f4f7fc] relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(15,74,155,0.06) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading — centred like reference */}
        <div className="text-center mb-4">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
            Our Simple{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">Process</span>
          </h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto leading-relaxed">
            Three quiet steps from weak topics to confident independent maths work.{' '}
            <a href="/how-it-works" className="font-semibold" style={{ color: '#0f4a9b' }}>See how it works →</a>
          </p>
        </div>

        {/* ── Wave timeline — desktop ── */}
        <div className="hidden lg:block">

          {/* Row 1: text blocks for steps 1 & 3 (above wave), empty cells for 2 */}
          <div className="grid grid-cols-3 gap-4 mb-0">
            {steps.map((s, i) => {
              const above = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`flex flex-col items-center text-center px-3 cursor-default group ${above ? 'justify-end pb-5' : 'invisible'}`}
                  style={{ minHeight: '140px' }}
                >
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#0f4a9b]/15 shadow-[0_4px_20px_rgba(15,74,155,0.15)] group-hover:shadow-[0_12px_32px_rgba(15,74,155,0.12)] transition-shadow duration-300 flex items-center justify-center text-[#0f4a9b] mb-3">
                    {s.icon}
                  </div>
                  <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-1">{s.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* SVG wave with node circles only — no text in SVG */}
          <div className="relative w-full" style={{ height: '130px' }}>
            <svg
              viewBox={`0 0 ${W} 130`}
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#1e5ba8" stopOpacity="0.3" />
                  <stop offset="50%"  stopColor="#0f4a9b" stopOpacity="1" />
                  <stop offset="100%" stopColor="#1e5ba8" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="nodeFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e5ba8" />
                  <stop offset="100%" stopColor="#0a3a79" />
                </linearGradient>
              </defs>

              {/* Wave: steps 1&3 connect at top (y=15), step 2 at bottom (y=85) */}
              {(() => {
                const pts = [
                  { x: 150, y: 20 },
                  { x: 600, y: 100 },
                  { x: 1050, y: 20 },
                ];
                const wp = `M ${pts[0].x} ${pts[0].y}
                  C ${pts[0].x+180} ${pts[0].y}, ${pts[1].x-180} ${pts[1].y}, ${pts[1].x} ${pts[1].y}
                  C ${pts[1].x+180} ${pts[1].y}, ${pts[2].x-180} ${pts[2].y}, ${pts[2].x} ${pts[2].y}`;
                return (
                  <>
                    {/* Glow */}
                    <path d={wp} fill="none" stroke="rgba(15,74,155,0.10)" strokeWidth="16" strokeLinecap="round" />
                    {/* Wave line */}
                    <path d={wp} fill="none" stroke="url(#waveGrad)" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Watermark numbers behind nodes - positioned further away */}
                    {pts.map((p, i) => (
                      <text key={`wm${i}`} x={p.x} y={p.y + (i%2===0 ? 55 : -35)}
                        textAnchor="middle" fontSize="72" fontWeight="900"
                        fontFamily="system-ui,sans-serif" fill="rgba(15,74,155,0.06)"
                        style={{ userSelect: 'none' }}>{i + 1}</text>
                    ))}
                    {/* Node dots */}
                    {pts.map((p, i) => (
                      <g key={`nd${i}`}>
                        <circle cx={p.x} cy={p.y} r="22" fill="white" stroke="rgba(15,74,155,0.15)" strokeWidth="1.5" />
                        <circle cx={p.x} cy={p.y} r="15" fill="url(#nodeFill)" />
                      </g>
                    ))}
                  </>
                );
              })()}
            </svg>
          </div>

          {/* Row 3: empty cells for 1 & 3 (above), text for 2 (below wave) */}
          <div className="grid grid-cols-3 gap-4 mt-0">
            {steps.map((s, i) => {
              const below = i % 2 !== 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`flex flex-col items-center text-center px-3 cursor-default group ${below ? 'justify-start pt-5' : 'invisible'}`}
                  style={{ minHeight: '140px' }}
                >
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#0f4a9b]/15 shadow-[0_4px_20px_rgba(15,74,155,0.15)] group-hover:shadow-[0_12px_32px_rgba(15,74,155,0.12)] transition-shadow duration-300 flex items-center justify-center text-[#0f4a9b] mb-3">
                    {s.icon}
                  </div>
                  <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-1">{s.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ── Mobile — vertical S-curve spine ── */}
        {(() => {
          // Each row is 150px tall. 3 rows = 450px total.
          // SVG spine is 80px wide, centred horizontally.
          // Nodes alternate: left edge (x=14) and right edge (x=66) of the 80px strip.
          // Node y = row midpoint: 75, 225, 375
          const ROW_H = 150;
          const SVG_W = 80;
          const NL = 14, NR = 66; // node x in SVG coords
          const nodePositions = [[NL,75],[NR,225],[NL,375]];
          const curvePath = `M ${NL} 75
            C ${NL} 155, ${NR} 145, ${NR} 225
            C ${NR} 305, ${NL} 295, ${NL} 375`;

          return (
            <div className="lg:hidden mt-8 relative" style={{ height: ROW_H * 3 }}>

              {/* SVG spine — fixed 80px wide, centred, NOT stretched */}
              <div className="absolute inset-0 flex justify-center pointer-events-none">
                <svg
                  width={SVG_W}
                  height={ROW_H * 3}
                  viewBox={`0 0 ${SVG_W} ${ROW_H * 3}`}
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="mvg" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%"   stopColor="#1e5ba8" stopOpacity="0.3" />
                      <stop offset="50%"  stopColor="#0f4a9b" stopOpacity="1"   />
                      <stop offset="100%" stopColor="#1e5ba8" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="mnf" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"   stopColor="#1e5ba8" />
                      <stop offset="100%" stopColor="#0a3a79" />
                    </linearGradient>
                  </defs>
                  {/* Glow */}
                  <path d={curvePath} fill="none" stroke="rgba(15,74,155,0.10)" strokeWidth="12" strokeLinecap="round" />
                  {/* Curve */}
                  <path d={curvePath} fill="none" stroke="url(#mvg)" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Watermark numbers — behind nodes, adjusted to prevent cropping */}
                  {nodePositions.map(([cx, cy], i) => {
                    const nodeOnLeft = i % 2 === 0;
                    return (
                      <text
                        key={`wm${i}`}
                        x={cx}
                        y={nodeOnLeft ? cy + 50 : cy - 30}
                        textAnchor="middle"
                        fontSize="56"
                        fontWeight="900"
                        fontFamily="system-ui, sans-serif"
                        fill="rgba(15,74,155,0.08)"
                        style={{ userSelect: 'none' }}
                      >{i + 1}</text>
                    );
                  })}
                  {/* Nodes — perfect circles, no distortion */}
                  {nodePositions.map(([cx, cy], i) => (
                    <g key={i}>
                      <circle cx={cx} cy={cy} r="13" fill="white" stroke="rgba(15,74,155,0.18)" strokeWidth="1.5" />
                      <circle cx={cx} cy={cy} r="9"  fill="url(#mnf)" />
                    </g>
                  ))}
                </svg>
              </div>

              {/* Text rows — absolutely positioned, split left/right of centre */}
              {steps.map((s, i) => {
                const nodeOnLeft = i % 2 === 0;
                const top = i * ROW_H;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: nodeOnLeft ? 16 : -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="absolute flex items-center"
                    style={{
                      top,
                      height: ROW_H,
                      // nodeOnLeft → text on RIGHT half; nodeOnRight → text on LEFT half
                      left:  nodeOnLeft ? '50%' : 0,
                      right: nodeOnLeft ? 0     : '50%',
                      paddingLeft:  nodeOnLeft ? '20px' : '12px',
                      paddingRight: nodeOnLeft ? '12px' : '20px',
                    }}
                  >
                    {nodeOnLeft ? (
                      /* text on right — icon then text */
                      <div className="flex items-start gap-2.5">
                        <div className="shrink-0 w-9 h-9 rounded-xl bg-white border border-[#0f4a9b]/15 shadow-[0_4px_14px_rgba(15,74,155,0.12)] flex items-center justify-center text-[#0f4a9b]">
                          {s.icon}
                        </div>
                        <div>
                          <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-1">{s.title}</h3>
                          <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ) : (
                      /* text on left — text then icon */
                      <div className="flex items-start gap-2.5 w-full justify-end">
                        <div className="text-right">
                          <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-1">{s.title}</h3>
                          <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                        </div>
                        <div className="shrink-0 w-9 h-9 rounded-xl bg-white border border-[#0f4a9b]/15 shadow-[0_4px_14px_rgba(15,74,155,0.12)] flex items-center justify-center text-[#0f4a9b]">
                          {s.icon}
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          );
        })()}

      </div>
    </section>
  );
}


const Eyebrow = ({ icon, text, dark = false }: { icon: React.ReactNode; text: string; dark?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-5 border ${dark ? 'bg-white/5 border-white/15 text-blue-200' : 'bg-[#0f4a9b]/5 border-[#0f4a9b]/15 text-[#0f4a9b]'}`}>
    {icon}{text}
  </div>
);

export default function MathematicsLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const challenges = [
    { notation: 'ax+b', icon: <Brackets className="h-5 w-5" />, title: 'Shaky Algebra Foundations', problem: 'Rearranging equations and forming expressions collapse without solid balance work.', fix: 'Tutors restart at linear equations, drilling rearranging until it feels natural.' },
    { notation: 'x/y', icon: <Sigma className="h-5 w-5" />, title: 'Weak Number Sense', problem: 'Fractions, decimals, and percentages stay fragile and trip ratio and probability later.', fix: 'Fractions, decimals, percentages rebuilt until ratio and probability click.' },
    { notation: 'f(x)', icon: <FunctionSquare className="h-5 w-5" />, title: 'Word Problems Misread', problem: 'Students translate questions into the wrong equation, then lose every linked mark.', fix: 'Tutors teach the language of word problems, line by line, with examples.' },
  ];

  const steps = [
    { n: '01', icon: <FileSearch className="h-6 w-6" />, title: 'Diagnose The Topics', desc: 'Your tutor finds the topics losing marks in algebra, fractions, and trigonometry.' },
    { n: '02', icon: <Wrench className="h-6 w-6" />, title: 'Rebuild The Basics', desc: 'Weak topics are rebuilt cleanly before any past paper question is attempted.' },
    { n: '03', icon: <Timer className="h-6 w-6" />, title: 'Practice Under Pressure', desc: 'Timed exam questions confirm each rebuilt topic before moving to the next.' },
  ];

  const curricula = [
    { title: 'British Curriculum', href: '/british-curriculum', tag: 'IGCSE · A-Level', exams: 'IGCSE 0580 · Edexcel 4MA1 · A-Level Maths', links: [{ label: 'IGCSE', href: '/igcse' }, { label: 'GCSE', href: '/gcse' }, { label: 'A-Level', href: '/a-level' }] },
    { title: 'American Curriculum', href: '/american-curriculum', tag: 'SAT · AP', exams: 'Common Core · SAT Math · AP Calculus', links: [{ label: 'Middle School', href: '/middle-school' }, { label: 'High School', href: '/high-school' }, { label: 'AP', href: '/ap' }] },
    { title: 'IB Curriculum', href: '/ib-curriculum', tag: 'MYP · DP', exams: 'MYP Maths · DP Maths AA · DP Maths AI', links: [{ label: 'MYP', href: '/myp' }, { label: 'DP SL', href: '/dp-sl' }, { label: 'DP HL', href: '/dp-hl' }] },
  ];

  const problemSkills = [
    { icon: <ScanSearch className="h-6 w-6" />, title: 'Question Breakdown', problem: 'Freezes when facing whole unseen questions', fix: 'We teach how to split them into parts' },
    { icon: <Eye className="h-6 w-6" />, title: 'Pattern Recognition', problem: 'Panics at unfamiliar layouts instead of patterns', fix: 'We train fast recognition of familiar shapes' },
    { icon: <RouteIcon className="h-6 w-6" />, title: 'Solution Planning', problem: 'Tries random steps when pressure builds', fix: 'We coach planned routes from start to answer' },
    { icon: <CheckCircle2 className="h-6 w-6" />, title: 'Answer Verification', problem: 'Leaves final answers unchecked under time pressure', fix: 'We install quick checks that catch slips' },
  ];

  const assessmentSkills = [
    { icon: <PenTool className="h-6 w-6" />, title: 'Subject Specialists', problem: '', fix: '' },
    { icon: <ClipboardCheck className="h-6 w-6" />, title: 'Curriculum Specialists', problem: '', fix: '' },
    { icon: <ShieldCheck className="h-6 w-6" />, title: 'Background Checked', problem: '', fix: '' },
    { icon: <CheckCircle2 className="h-6 w-6" />, title: 'One-to-One Focused', problem: '', fix: '' },
  ];

  const faqs: { q: string; a: React.ReactNode; plain: string }[] = [
    { q: 'My child keeps failing algebra. Can your tutors fix that?', plain: 'Yes. Most maths struggles in Abu Dhabi root in algebra. Our tutors restart with linear equations, balance rules, and substitution before moving to quadratics, simultaneous equations, and rearranging formulae.', a: <>Yes. Most maths struggles in Abu Dhabi root in algebra. Our tutors restart with linear equations, balance rules, and substitution before moving to quadratics, simultaneous equations, and rearranging formulae.</> },
    { q: 'Which maths topics do Abu Dhabi students struggle with most?', plain: 'Algebra rearrangement, fractions and percentages, word problems, simultaneous equations, trigonometry choice (sine, cosine, tangent), and graph sketching. Our tutors diagnose which gap is your child\'s first.', a: <>Algebra rearrangement, fractions and percentages, word problems, simultaneous equations, trigonometry choice (sine, cosine, tangent), and graph sketching. Our tutors diagnose which gap is your child's first.</> },
    { q: 'Do you support IGCSE Paper 4 and Cambridge 0580 Extended?', plain: 'Yes. Tutors specialise in Cambridge 0580 Extended, 0606 Additional Maths, and Edexcel 4MA1. Past Paper 4 questions are practised weekly under timed conditions before mock exams.', a: <>Yes. Tutors specialise in <a href="/igcse" className="text-[#0f4a9b] font-semibold underline">Cambridge 0580</a> Extended, 0606 Additional Maths, and Edexcel 4MA1. Past Paper 4 questions are practised weekly under timed conditions before mock exams.</> },
    { q: 'Can your tutors handle IB Maths AA HL or AI SL?', plain: 'Yes. We support both pathways: Analysis & Approaches and Applications & Interpretation, across MYP, DP SL, and DP HL. Internal Assessment guidance is included throughout.', a: <>Yes. We support both pathways: Analysis &amp; Approaches and Applications &amp; Interpretation, across <a href="/myp" className="text-[#0f4a9b] font-semibold underline">MYP</a>, <a href="/dp-sl" className="text-[#0f4a9b] font-semibold underline">DP SL</a>, and <a href="/dp-hl" className="text-[#0f4a9b] font-semibold underline">DP HL</a>. Internal Assessment guidance is included throughout.</> },
    { q: 'Do you offer home maths tutoring across Abu Dhabi?', plain: 'Yes. Tutors travel across Abu Dhabi Island, Khalifa City, Al Reem Island, Saadiyat, Yas Island, Al Raha, and Mussafah. Online sessions are also available for families who prefer them.', a: <>Yes. Tutors travel across Abu Dhabi Island, Khalifa City, Al Reem Island, Saadiyat, Yas Island, Al Raha, and Mussafah. Online sessions are also available for families who prefer them.</> },
    { q: 'How quickly do students see real maths progress?', plain: 'Topic confidence usually shifts within four weeks. Visible mark improvement on mocks normally follows in the second or third assessment cycle.', a: <>Topic confidence usually shifts within four weeks. Visible mark improvement on mocks normally follows in the second or third assessment cycle.</> },
  ];

  return (
    <Layout>
      <SEOHead
        title="Maths Tutor Abu Dhabi | IGCSE, A-Level, IB Maths — Ustaad"
        description="One-to-one maths tutors in Abu Dhabi fixing algebra, fractions & word problems. IGCSE, A-Level, IB AA/AI & AP maths support across Abu Dhabi."
        canonical="/maths-tutor-abu-dhabi"
        placename="Abu Dhabi, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Abu Dhabi',
            url: '/maths-tutor-abu-dhabi',
            name: 'Ustaad — Maths Tutor Abu Dhabi',
            description: 'One-to-one maths tutors in Abu Dhabi fixing algebra, fractions & word problems. IGCSE, A-Level, IB AA/AI & AP maths support across Abu Dhabi.',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Curriculum', url: '/curriculum' },
            { name: 'Abu Dhabi', url: '/maths-tutor-abu-dhabi' },
            { name: 'Maths', url: '/maths-tutor-abu-dhabi' },
          ]),
          serviceSchema('Maths Tutor Abu Dhabi', 'One-to-one maths tutors in Abu Dhabi for IGCSE, A-Level, IB, and AP students. Trusted by Abu Dhabi families since 2015.', '/maths-tutor-abu-dhabi'),
          courseSchema({
            courseName: 'Maths Private Tutoring Abu Dhabi',
            description: 'One-to-one maths tutors in Abu Dhabi fixing algebra, fractions, and word problems for IGCSE, A-Level, IB, and AP.',
            url: '/maths-tutor-abu-dhabi',
            city: 'Abu Dhabi',
          }),
          faqSchema(faqs.map(f => ({ q: f.q, a: f.plain }))),
        ]}
      />

      {/* SECTION 1 — HERO: 3D visual at bottom, dark bg above */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">

        {/* ── 3-D MATH VISUAL: Full background on desktop, mobile at bottom */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full" aria-hidden="true" style={{ background: '#060f22' }}>
            <defs>
              <linearGradient id="sinGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#5fd3e6" stopOpacity="0.3"/>
              </linearGradient>
              <linearGradient id="parGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#f0c96a" stopOpacity="0"/>
                <stop offset="40%" stopColor="#f0c96a" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#f0c96a" stopOpacity="1"/>
              </linearGradient>
              <radialGradient id="originGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22b8cd" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="0"/>
              </radialGradient>
              <filter id="softglow">
                <feGaussianBlur stdDeviation="2.5"/>
              </filter>
            </defs>

            {/* Grid floor and curves */}
            {(()=>{
              const out = [];
              const VX=700, VY=80, FLOOR_Y=520, COLS=14, ROWS=7, HALF_W=620;
              const gp = (c: number, r: number) => {
                const t = r/ROWS, wx = (c/COLS-0.5)*2*HALF_W;
                return { x: VX+wx*t, y: VY+(FLOOR_Y-VY)*t };
              };
              for (let r=1; r<ROWS; r++) {
                for (let c=0; c<COLS; c++) {
                  const A=gp(c,r), B=gp(c+1,r), D=gp(c+1,r+1), E=gp(c,r+1);
                  const br = 0.04+(r/ROWS)*0.10, alt=(r+c)%2===0;
                  out.push(<polygon key={`t${r}_${c}`} points={`${A.x},${A.y} ${B.x},${B.y} ${D.x},${D.y} ${E.x},${E.y}`}
                    fill={`rgba(30,91,179,${alt?br:br*0.55})`} stroke={`rgba(110,168,255,${0.05+(r/ROWS)*0.18})`} strokeWidth={0.4+(r/ROWS)*0.6}/>);
                }
              }
              const w2c = (wx: number) => (wx+Math.PI)/(2*Math.PI)*12+1;
              const sinPts=[];
              for (let i=0; i<=80; i++) { const wx=-Math.PI+(i/80)*2*Math.PI, base=gp(w2c(wx),ROWS); sinPts.push(`${base.x},${base.y-Math.sin(wx)*80}`); }
              out.push(<polyline key="sin" points={sinPts.join(' ')} fill="none" stroke="url(#sinGrad)" strokeWidth="2.8" filter="url(#softglow)"/>);
              const parPts=[];
              for (let i=0; i<=70; i++) { const wx=-2.8+(i/70)*5.6, base=gp(w2c(wx),ROWS), rise=Math.pow(wx*0.55,2)*12; parPts.push(`${base.x},${base.y-rise}`); }
              out.push(<path key="par" d={`M ${parPts[0]} L ${parPts.slice(1).join(' ')}`} fill="none" stroke="url(#parGrad)" strokeWidth="2.8" filter="url(#softglow)"/>);
              const yAxisBase=gp(w2c(0),ROWS), yTip={x:yAxisBase.x,y:yAxisBase.y-115};
              out.push(<line key="ya" x1={yAxisBase.x} y1={yAxisBase.y} x2={yTip.x} y2={yTip.y} stroke="url(#parGrad)" strokeWidth="2.2"/>);
              out.push(<circle key="og" cx={yAxisBase.x} cy={yAxisBase.y} r="14" fill="url(#originGlow)"/>);
              const sinLblB=gp(w2c(-2.0),ROWS), parLblB=gp(w2c(2.3),ROWS);
              out.push(<text key="slbl" x={sinLblB.x-24} y={sinLblB.y-88} fill="rgba(95,211,230,0.72)" fontSize="12" fontFamily="monospace">sin(x)</text>);
              out.push(<text key="plbl" x={parLblB.x+4} y={parLblB.y-106} fill="rgba(240,201,106,0.72)" fontSize="12" fontFamily="monospace">x²</text>);
              return out;
            })()}
          </svg>
        </div>

        {/* Mobile 3D visual at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[170px] sm:h-[190px] pointer-events-none z-0 md:hidden">
          <svg viewBox="300 100 800 250" preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full" aria-hidden="true" style={{ background: 'transparent' }}>
            <defs>
              <linearGradient id="m-sinGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#5fd3e6" stopOpacity="0.3"/>
              </linearGradient>
              <linearGradient id="m-parGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#f0c96a" stopOpacity="0"/>
                <stop offset="40%" stopColor="#f0c96a" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#f0c96a" stopOpacity="1"/>
              </linearGradient>
              <radialGradient id="m-originGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22b8cd" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="0"/>
              </radialGradient>
              <filter id="m-softglow">
                <feGaussianBlur stdDeviation="2.5"/>
              </filter>
            </defs>

            {/* Grid floor and curves */}
            {(()=>{
              const out = [];
              const VX=700, VY=80, FLOOR_Y=520, COLS=14, ROWS=7, HALF_W=620;
              const gp = (c: number, r: number) => {
                const t = r/ROWS, wx = (c/COLS-0.5)*2*HALF_W;
                return { x: VX+wx*t, y: VY+(FLOOR_Y-VY)*t };
              };
              for (let r=1; r<ROWS; r++) {
                for (let c=0; c<COLS; c++) {
                  const A=gp(c,r), B=gp(c+1,r), D=gp(c+1,r+1), E=gp(c,r+1);
                  const br = 0.04+(r/ROWS)*0.10, alt=(r+c)%2===0;
                  out.push(<polygon key={`t${r}_${c}`} points={`${A.x},${A.y} ${B.x},${B.y} ${D.x},${D.y} ${E.x},${E.y}`}
                    fill={`rgba(30,91,179,${alt?br:br*0.55})`} stroke={`rgba(110,168,255,${0.05+(r/ROWS)*0.18})`} strokeWidth={0.4+(r/ROWS)*0.6}/>);
                }
              }
              const w2c = (wx: number) => (wx+Math.PI)/(2*Math.PI)*12+1;
              const sinPts=[];
              for (let i=0; i<=80; i++) { const wx=-Math.PI+(i/80)*2*Math.PI, base=gp(w2c(wx),ROWS); sinPts.push(`${base.x},${base.y-Math.sin(wx)*80}`); }
              out.push(<polyline key="sin" points={sinPts.join(' ')} fill="none" stroke="url(#m-sinGrad)" strokeWidth="2.8" filter="url(#m-softglow)"/>);
              const parPts=[];
              for (let i=0; i<=70; i++) { const wx=-2.8+(i/70)*5.6, base=gp(w2c(wx),ROWS), rise=Math.pow(wx*0.55,2)*12; parPts.push(`${base.x},${base.y-rise}`); }
              out.push(<path key="par" d={`M ${parPts[0]} L ${parPts.slice(1).join(' ')}`} fill="none" stroke="url(#m-parGrad)" strokeWidth="2.8" filter="url(#m-softglow)"/>);
              const yAxisBase=gp(w2c(0),ROWS), yTip={x:yAxisBase.x,y:yAxisBase.y-115};
              out.push(<line key="ya" x1={yAxisBase.x} y1={yAxisBase.y} x2={yTip.x} y2={yTip.y} stroke="url(#m-parGrad)" strokeWidth="2.2"/>);
              out.push(<circle key="og" cx={yAxisBase.x} cy={yAxisBase.y} r="14" fill="url(#m-originGlow)"/>);
              const sinLblB=gp(w2c(-2.0),ROWS), parLblB=gp(w2c(2.3),ROWS);
              out.push(<text key="slbl" x={sinLblB.x-24} y={sinLblB.y-88} fill="rgba(95,211,230,0.72)" fontSize="12" fontFamily="monospace">sin(x)</text>);
              out.push(<text key="plbl" x={parLblB.x+4} y={parLblB.y-106} fill="rgba(240,201,106,0.72)" fontSize="12" fontFamily="monospace">x²</text>);
              return out;
            })()}
          </svg>
        </div>

        {/* ── TEXT BLOCK — centered by parent flex ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-20 md:pb-14 max-w-5xl w-full">

          {/* Trust badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2.5"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f0c96a' }} />
            <span className="text-blue-100/80 text-[11px] sm:text-[12px] font-semibold">Trusted by Abu Dhabi families since 2015</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
            className="font-extrabold tracking-tight text-white leading-[1.05] mb-3 md:mb-5 text-[clamp(1.5rem,5vw,3.4rem)] max-w-[90%] sm:max-w-none">
            Where Maths{' '}
            <span style={{ background:'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Finally Makes Sense
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="text-blue-100/80 text-[clamp(0.88rem,2vw,1.02rem)] leading-relaxed max-w-2xl mb-6 md:mb-8 px-4">
            One-to-one maths tutors fixing tough topics for Abu Dhabi students
          </motion.p>

          {/* CTA group — mobile: unified frosted card, desktop: row */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full px-4">

            {/* Mobile unified card */}
            <div className="sm:hidden w-full max-w-[340px] flex flex-col items-center gap-2.5 p-3.5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}>
              <a href={BOOKING}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white transition-all hover:-translate-y-0.5"
                style={{ background:'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow:'0 4px 16px rgba(15,74,155,0.5)' }}>
                Book Your Free Trial
              </a>
              <span className="text-blue-200/50 text-[11px] -my-1">or</span>
              <a href={WA_URL} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
              <p className="text-blue-200/50 text-[11px] mt-1">✦ No Commitment · Cancel Anytime</p>
            </div>

            {/* Desktop row */}
            <div className="hidden sm:flex items-start justify-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <a href={BOOKING}
                  className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[15px] md:text-base text-white transition-all hover:-translate-y-0.5"
                  style={{ background:'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow:'0 4px 18px rgba(15,74,155,0.55)' }}>
                  Book Your Free Trial
                </a>
                <p className="text-blue-200/50 text-[11px]">✦ No Commitment · Cancel Anytime</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <a href={WA_URL} className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[14px] md:text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </section>

      {/* ── STATS BAR (below hero, like homepage) ── */}
      <StatsBar />

      {/* SECTION 04 — WHERE MATHS GOES WRONG */}
      <ChallengesCarousel challenges={challenges} />

      {/* SECTION 05 — USTAAD'S MATHS APPROACH FOR ABU DHABI STUDENTS */}
      <section className="py-6 sm:py-7 lg:py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <Eyebrow icon={<Brain className="h-3.5 w-3.5" />} text="Our Approach" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
              Ustaad's Maths Approach{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">For Abu Dhabi Students</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
              We rebuild the specific maths topics where Abu Dhabi students lose the most marks.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: <Calculator className="w-7 h-7" />, title: 'Algebra From Scratch', desc: 'Tutors restart at linear equations, drilling rearranging until it feels natural.' },
              { icon: <Sigma className="w-7 h-7" />, title: 'Number Sense Restored', desc: 'Fractions, decimals, percentages rebuilt until ratio and probability click.' },
              { icon: <FunctionSquare className="w-7 h-7" />, title: 'Word Problems Decoded', desc: 'Tutors teach the language of word problems, line by line, with examples.' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(15,74,155,0.12)' }}
                className="relative rounded-3xl p-5 sm:p-6 text-center overflow-hidden cursor-default transition-shadow duration-300"
                style={{
                  background: 'linear-gradient(180deg, #fafbff 0%, #f5f7ff 100%)',
                  border: '1px solid rgba(15,74,155,0.08)',
                }}
              >
                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full mb-2.5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(15,74,155,0.12) 0%, rgba(30,91,168,0.08) 100%)',
                    boxShadow: '0 8px 24px rgba(15,74,155,0.12)',
                  }}>
                  <div className="text-[#0f4a9b]">{card.icon}</div>
                </div>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] mb-2 leading-tight">{card.title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — CURRICULA WE COVER */}
      <section className="py-7 sm:py-8 lg:py-10 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0a1f3d 0%, #0f3575 50%, #0a2a6e 100%)' }}>
        <div className="absolute top-[-10%] right-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,91,168,0.35) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <MathGrid />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6">
            <h2 className="text-xl lg:text-2xl font-extrabold text-white leading-[1.1] mb-1.5">
              Curricula{' '}
              <span style={{ background:'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>We Cover</span>
            </h2>
            <p className="text-blue-100/55 text-[13px] leading-relaxed max-w-xl mx-auto">
              Maths support across every major board followed in Abu Dhabi schools.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {curricula.map((c, i) => (
              <div key={i} className="rounded-2xl p-4 flex flex-col gap-2.5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
                style={{ background: 'rgba(15,74,155,0.18)', border: '1px solid rgba(110,168,255,0.18)' }}>
                {/* Title + tag stacked */}
                <div className="flex flex-col gap-1.5">
                  <a href={c.href}
                    className="inline-flex items-center gap-1.5 font-extrabold text-[15px] text-white hover:text-[#fde68a] transition-colors leading-tight">
                    {c.title} <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                  <span className="self-start text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: 'rgba(240,201,106,0.12)', color: '#fde68a', border: '1px solid rgba(240,201,106,0.25)' }}>
                    {c.tag}
                  </span>
                </div>
                {/* Divider */}
                <div className="h-px" style={{ background: 'rgba(110,168,255,0.12)' }} />
                {/* Exams */}
                <p className="text-blue-100/65 text-[12px] leading-relaxed font-medium">{c.exams}</p>
                {/* Sub-page links — always single row */}
                <div className="flex items-center gap-1.5 mt-auto pt-0.5 overflow-hidden">
                  {c.links.map((link, li) => (
                    <a key={li} href={link.href}
                      className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full whitespace-nowrap shrink-0 transition-all hover:brightness-110"
                      style={{ color: '#93c5fd', background: 'rgba(15,74,155,0.3)', border: '1px solid rgba(110,168,255,0.2)' }}>
                      <ArrowRight className="h-2.5 w-2.5 shrink-0" />{link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 — TRUSTED BY ABU DHABI SCHOOLS (shared SchoolsMarquee) */}
      <SchoolsMarquee
        logoList={mathsSchoolLogos}
        header={
          <div className="flex items-center justify-center gap-4 mb-5 sm:mb-6">
            <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to right, transparent, rgba(15,74,155,0.3))' }} />
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#0f4a9b]/60">Trusted by Abu Dhabi schools</p>
            <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to left, transparent, rgba(15,74,155,0.3))' }} />
          </div>
        }
      />

      {/* SECTION 08 — SUBJECTS WE COVER */}
      <section className="relative py-6 sm:py-7 lg:py-10 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0a1f3d 0%, #0f3575 50%, #0a2a6e 100%)' }}>
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-10%] right-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,91,168,0.35) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <MathGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Eyebrow icon={<Sparkles className="h-3.5 w-3.5" />} text="Academic Expertise" dark />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-[1.1] mb-4">
              Unlock Maths.{' '}
              <span style={{ background:'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Excel Across Subjects</span>
            </h2>
            <p className="text-blue-100/75 text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
              Strong maths helps Abu Dhabi students handle calculations across science and engineering subjects.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { href: '/maths', label: 'Mathematics', desc: 'From fractions to calculus, every maths topic taught structurally.' },
                { href: '/physics-tutor-abu-dhabi', label: 'Physics', desc: 'Mechanics, electricity, and waves rely on rearranging equations confidently.' },
                { href: '/chemistry', label: 'Chemistry', desc: 'Moles, balancing, and titration calculations need strong fraction skills.' },
                { href: '/engineering', label: 'Engineering', desc: 'Calculus, vectors, and force diagrams power engineering problem solving.' },
                { href: '/exam-preparation', label: 'Exam Preparation', desc: 'Past papers, timed practice, and mark scheme guidance for Abu Dhabi exams.' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="block rounded-2xl p-5 text-left hover:-translate-y-0.5 transition-all relative overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(110,168,255,0.18)' }}
                >
                  {/* Watermark icon */}
                  {[BookOpen, Atom, FlaskConical, Wrench, FileSearch][i] && (() => {
                    const Icon = [BookOpen, Atom, FlaskConical, Wrench, FileSearch][i];
                    return <Icon className="absolute bottom-2 right-2 h-14 w-14 text-[#6ea8ff] opacity-[0.08]" />;
                  })()}
                  <h3 className="text-[15px] font-extrabold text-white mb-1.5">{s.label}</h3>
                  <p className="text-blue-100/60 text-[13px] leading-relaxed relative z-10">{s.desc}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 09 — OUR SIMPLE PROCESS */}
      <StepsCarousel steps={steps} />

      {/* SECTION 10 — WHY FAMILIES CHOOSE US */}
      <ThinkingHabitsSection />

      <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />

      {/* SECTION 11 — THE USTAAD TUTOR STANDARD */}
      <section className="py-6 sm:py-7 lg:py-10 bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-4">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.1] mb-2">
              The Ustaad{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Tutor Standard</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Every Ustaad tutor is chosen for curriculum, subject expertise, and one-to-one skill.
            </p>
          </div>

          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0f4a9b]/60 mb-5 text-center">
            Carefully Selected Tutors
          </p>

          <div className="hidden lg:flex items-start gap-3 justify-center">
            {assessmentSkills.map((s, i) => (
              <div key={i} className="flex items-start flex-1 max-w-[200px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="flex flex-col items-start flex-1"
                >
                  <span className="text-[32px] font-black leading-none mb-3"
                    style={{
                      background: 'linear-gradient(135deg, #0f4a9b 0%, #1e5ba8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-tight mb-2.5">
                    {s.title}
                  </h3>
                </motion.div>
                {i < assessmentSkills.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.2 }}
                    className="flex items-center pt-8 px-4"
                    style={{ originX: 0 }}
                  >
                    <svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="shrink-0">
                      <defs>
                        <linearGradient id={`arrow-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="12" x2="48" y2="12" stroke={`url(#arrow-grad-${i})`} strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 48 12 L 42 8 M 48 12 L 42 16" stroke="#0f4a9b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="lg:hidden grid grid-cols-2 gap-4 max-w-lg mx-auto">
            {assessmentSkills.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col"
              >
                <span className="text-[24px] font-black leading-none mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #0f4a9b 0%, #1e5ba8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[14px] font-extrabold text-[#0a1f3d] leading-tight">
                  {s.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a href="/tutors"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-[14px] text-white transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#0f4a9b,#1e5ba8)', boxShadow: '0 4px 16px rgba(15,74,155,0.3)' }}>
              Meet Our Tutors <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 12 — WHAT ABU DHABI PARENTS WITNESSED */}
      <section className="py-6 sm:py-7 lg:py-10 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0a1f3d 0%, #0f3575 50%, #0a2a6e 100%)' }}>
        <div className="absolute top-[-10%] right-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,91,168,0.35) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <MathGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-7">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-[1.1] mb-2">
              What Abu Dhabi Parents{' '}
              <span style={{ background:'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Witnessed</span>
            </h2>
            <p className="text-blue-100/60 text-[14px] sm:text-[15px] leading-relaxed max-w-xl mx-auto">
              Parents see real change in homework, mock scores, and how their child feels
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Sharper Mental Arithmetic', desc: 'Multiplication tables, percentages, and unit conversions stop needing the calculator.' },
              { title: 'Algebra Becomes Automatic', desc: 'Equations, substitution and rearrangement stop costing time on long Paper 4.' },
              { title: 'Method Marks Recovered', desc: 'Students show structured working and protected method marks.' },
              { title: 'Calmer Under Pressure', desc: 'Mock papers feel familiar instead of intimidating by the third practice round.' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(110,168,255,0.3)' }}
                className="rounded-2xl p-4 cursor-default transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(110,168,255,0.18)' }}
              >
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-[#f0c96a] shrink-0 mt-0.5" />
                  <h3 className="text-[13px] sm:text-[14px] font-extrabold text-white leading-snug">{card.title}</h3>
                </div>
                <p className="text-blue-100/60 text-[12px] sm:text-[13px] leading-relaxed ml-6">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — A RECENT STUDENT STORY */}
      <section className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5 sm:mb-6">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight">
                A Recent{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Student Story</span>
              </h2>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: 'rgba(240,201,106,0.12)', border: '1px solid rgba(240,201,106,0.25)' }}>
              <span className="text-[11px] font-bold flex items-center gap-1" style={{ color: '#C7A24A' }}>
                D <ArrowRight className="h-3 w-3" /> B · Cambridge 0580
              </span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl p-5 sm:p-6 lg:p-8 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(240,248,255,0.5) 100%)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 8px 32px rgba(15,74,155,0.12)' }}
          >
            {/* Glass shine */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.3) 100%)' }} />
            {/* Meta */}
            <div className="relative z-10 flex flex-wrap gap-2 mb-4">
              {['Year 11 IGCSE', 'Khalifa City', 'British Curriculum'].map(tag => (
                <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(15,74,155,0.06)', color: '#0f4a9b', border: '1px solid rgba(15,74,155,0.12)' }}>{tag}</span>
              ))}
            </div>

            {/* Story text */}
            <p className="relative z-10 text-[14px] sm:text-[15px] leading-[1.7] text-gray-600 mb-5">
              H.A., a Year 11 IGCSE student in Khalifa City, was losing marks on rearranging formulae, simultaneous equations, and quadratic graph sketching. Her tutor rebuilt index laws and linear graphs from basics before introducing Cambridge 0580 Paper 4. By her November mock, her Paper 4 score moved from a D to a strong B. Her mother said the real change was at home. H.A. had stopped avoiding her maths homework.
            </p>

            {/* CTA */}
            <div className="relative z-10 flex justify-start">
              <GoldButton href={BOOKING} className="px-5 py-2.5 text-sm">
                Book a Free Trial
              </GoldButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 14 — WHAT PARENTS SAY */}
      <section className="py-6 sm:py-8 lg:py-10" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 50%, #1e5ba8 100%)' }}>
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
                  <Star key={si} className="h-3 w-3 fill-[#f0c96a] text-[#f0c96a]" />
                ))}
              </div>
              <span className="text-[11px] font-bold ml-1" style={{ color: '#f0c96a' }}>5.0 · Verified Google Review</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl p-5 sm:p-6 lg:p-8 overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
          >
            {/* Glass quote visual */}
            <div className="absolute top-3 left-4 text-[90px] font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(240,201,106,0.12)', fontFamily: 'Georgia, serif' }}>“</div>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.06) 100%)' }} />
            <div className="relative z-10">
              <p className="text-white/90 text-[15px] sm:text-[16px] leading-[1.7] mb-5 font-medium text-justify">
              I had a very good experience with Ustaad for my daughter. Her maths teacher is one of the best tutors I have experienced. He explains the concepts very well.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-extrabold text-white shrink-0 border-2 border-white/20"
                  style={{ background: 'linear-gradient(135deg, rgba(240,201,106,0.3), rgba(199,162,74,0.5))' }}>
                  SA
                </div>
                <div>
                  <p className="text-white font-extrabold text-[14px] leading-tight">Sumayya Alamri</p>
                  <p className="text-blue-200/70 text-[11px] mt-0.5">Abu Dhabi, UAE &middot; Maths Parent</p>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 15 — FAQs */}
      <section className="py-6 sm:py-7 lg:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">
            {/* Left: Heading */}
            <div className="flex flex-col items-center justify-center text-center">
              <Eyebrow icon={<FunctionSquare className="h-3.5 w-3.5" />} text="Common Questions" />
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
                Parents{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Often Ask</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Honest answers to the maths questions Abu Dhabi parents ask before their first session.
              </p>
            </div>

            {/* Right: Accordion items */}
            <div className="flex flex-col gap-[10px]">
              {faqs.map((f, i) => {
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
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="ml-[56px]"
                        >
                          <div
                            className="flex items-start gap-3 rounded-2xl border p-4"
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

      <RelatedContent
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Curriculum', href: '/curriculum' },
          { name: 'Abu Dhabi', href: '/maths-tutor-abu-dhabi' },
          { name: 'Maths', href: '/maths-tutor-abu-dhabi' },
        ]}
        subjects={[
          { label: 'Physics Tutor Abu Dhabi', href: '/physics-tutor-abu-dhabi' },
          { label: 'Chemistry Tutor Abu Dhabi', href: '/chemistry-tutor-abu-dhabi' },
          { label: 'Biology Tutor Abu Dhabi', href: '/biology-tutor-abu-dhabi' },
          { label: 'Maths subject hub', href: '/maths' },
          { label: 'Statistics', href: '/statistics' },
        ]}
        curricula={[
          { label: 'IGCSE', href: '/igcse' },
          { label: 'A-Level', href: '/a-level' },
          { label: 'IB Curriculum', href: '/ib-curriculum' },
          { label: 'British Curriculum', href: '/british-curriculum' },
          { label: 'IGCSE Tutor Abu Dhabi', href: '/igcse-tutor-abu-dhabi' },
        ]}
      />

      <FinalCTA
        title="Start Maths Support Today"
        subtitleNode={
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
            Book your free trial with an Abu Dhabi maths tutor this week.
          </p>
        }
        button1Text="Book Your Free Trial"
        button1Href={BOOKING}
        button2Text="Ask Your Question"
        subtext1="Free Trial · No Commitment"
        subtext2="Stuck on a topic? Send it across."
      />
    </Layout>
  );
}
