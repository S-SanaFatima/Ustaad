import { useState, useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Atom, Zap, Waves, Thermometer, Gauge,
  ScanSearch, CheckCircle2, X,
  ChevronDown, ChevronLeft, ChevronRight, Sparkles, FileSearch, Wrench, Timer, PenTool, ShieldCheck,
  ClipboardCheck, Target, Star, MessageCircle, FlaskConical,
  Calculator, MapPin, Phone, Mail, ArrowRight, Layers, Compass, GraduationCap
} from 'lucide-react';

import { Layout, GoldButton, FinalCTA, StatsBar, SchoolsMarquee, WhatsAppIcon } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, courseSchema } from './shared/schemas';
import RelatedContent from './shared/RelatedContent';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20support%20with%20Physics%20in%20Dubai.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

const physicsDubaiSchoolLogos = [
  { name: 'Dubai College', file: 'dubai-college.png', alt: 'Dubai College logo, leading British curriculum secondary school in Dubai for IGCSE and A-Level physics', scale: 1.25 },
  { name: 'Jumeirah English Speaking School (JESS)', file: 'jess.png', alt: 'JESS Dubai logo, British and IB World School in Arabian Ranches for IGCSE and IB DP physics', scale: 1.25 },
  { name: 'Brighton College Dubai', file: 'brighton-college-dubai.png', alt: 'Brighton College Dubai logo, British curriculum school with strong GCSE and A-Level physics programmes', scale: 1.25 },
  { name: 'Repton School Dubai', file: 'repton-dubai.png', alt: 'Repton School Dubai logo, British and IB curriculum school in Nad Al Sheba teaching IGCSE and IB physics', scale: 1.25 },
  { name: 'Nord Anglia International School Dubai', file: 'nord-anglia-dubai.png', alt: 'Nord Anglia International School Dubai logo, premium British and IB school for physics students', scale: 1.25 },
  { name: 'Hartland International School', file: 'hartland-international-school.png', alt: 'Hartland International School logo, British curriculum school in Sobha Hartland Dubai', scale: 1.25 },
  { name: 'Sunmarke School Dubai', file: 'sunmarke.png', alt: 'Sunmarke School logo, British and IB school in JVT Dubai offering IGCSE, A-Level and IB physics', scale: 1.25 },
  { name: 'Safa Community School', file: 'safa.png', alt: 'Safa Community School logo, British curriculum school in Al Barsha South Dubai', scale: 1.25 },
];

/* Faint physics grid background */
const PhysGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'dubai-pgrid-l' : 'dubai-pgrid-d'} width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke={light ? 'rgba(15,74,155,0.05)' : 'rgba(255,255,255,0.04)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'dubai-pgrid-l' : 'dubai-pgrid-d'})`} />
  </svg>
);

type Step = { n: string; icon: ReactNode; title: string; desc: string };
type Challenge = { notation: string; icon: ReactNode; title: string; problem: string; tag: string };

/* Challenges Accordion */
function ChallengesAccordion({ challenges }: { challenges: Challenge[] }) {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="relative">
      <div className="flex flex-col gap-2.5">
        {challenges.map((c, i) => {
          const isOpen = active === i;
          return (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                isOpen
                  ? 'border-[#0f4a9b]/30 shadow-[0_8px_24px_rgba(15,74,155,0.08)]'
                  : 'border-slate-200/80 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <button
                onClick={() => setActive(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left focus:outline-none select-none gap-3 cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#0f4a9b] text-white shadow-sm shadow-[#0f4a9b]/25'
                        : 'bg-[#0f4a9b]/5 text-[#0f4a9b]'
                    }`}
                  >
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-[#C7A24A] block mb-0.5">
                      {c.tag}
                    </span>
                    <h3 className="font-bold text-[#0a1f3d] text-xs sm:text-sm leading-snug truncate">
                      {c.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-block font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                    {c.notation}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#0f4a9b] bg-[#0f4a9b]/10' : ''
                    }`}
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-1 border-t border-slate-100 bg-[#f8fafc]/80 text-left">
                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed pl-2 border-l-2 border-[#C7A24A]">
                        {c.problem}
                      </p>
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
    <section className="py-8 sm:py-10 lg:py-12 bg-white relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(15,74,155,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          <div className="lg:col-span-5 text-left lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] text-xs font-bold uppercase tracking-wider mb-2.5">
              <Target className="h-3.5 w-3.5 text-[#C7A24A]" />
              Dubai Exam Insight
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-2 leading-tight">
              Where Physics <span className="text-[#0f4a9b]">Marks Vanish</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              Most physics marks slip away in three quiet areas Dubai students rarely notice until mock exam reports arrive.
            </p>
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#FEFBF3] to-[#FBF6E8] border border-[#C7A24A]/30">
              <p className="text-xs font-semibold text-[#0a1f3d] leading-relaxed">
                <strong className="text-[#C7A24A]">The Diagnostic Solution:</strong> We target algebraic rearrangements, experimental logic, and mark-scheme keywords first before drilling full papers.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ChallengesAccordion challenges={challenges} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Wave Timeline */
function StepsCarousel({ steps }: { steps: Step[] }) {
  const W = 1200;

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#f4f7fc] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,74,155,0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] text-xs font-bold uppercase tracking-wider mb-2">
            METHODICAL PROGRESS
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1.5">
            Our Simple <span className="text-[#0f4a9b]">3-Step Process</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Three structured steps from physics confusion to confident, independent exam practice in Dubai.
          </p>
        </div>

        {/* Wave timeline: desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6 mb-0">
            {steps.map((s, i) => {
              const above = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col items-center text-center px-4 cursor-default group hover:-translate-y-1 transition-all duration-300 ${
                    above ? 'justify-end pb-4' : 'invisible'
                  }`}
                  style={{ minHeight: '120px' }}
                >
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#0f4a9b]/15 shadow-sm flex items-center justify-center text-[#0f4a9b] mb-2">
                    {s.icon}
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0a1f3d] leading-snug mb-0.5">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs">{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="relative w-full" style={{ height: '110px' }}>
            <svg viewBox={`0 0 ${W} 110`} preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
              <defs>
                <linearGradient id="pwaveGradDubai" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e5ba8" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#0f4a9b" stopOpacity="1" />
                  <stop offset="100%" stopColor="#1e5ba8" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="pnodeFillDubai" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e5ba8" />
                  <stop offset="100%" stopColor="#0a3a79" />
                </linearGradient>
              </defs>
              {(() => {
                const pts = [{ x: 150, y: 15 }, { x: 600, y: 85 }, { x: 1050, y: 15 }];
                const wp = `M ${pts[0].x} ${pts[0].y}
                  C ${pts[0].x+180} ${pts[0].y}, ${pts[1].x-180} ${pts[1].y}, ${pts[1].x} ${pts[1].y}
                  C ${pts[1].x+180} ${pts[1].y}, ${pts[2].x-180} ${pts[2].y}, ${pts[2].x} ${pts[2].y}`;
                return (
                  <>
                    <path d={wp} fill="none" stroke="rgba(15,74,155,0.08)" strokeWidth="14" strokeLinecap="round" />
                    <path d={wp} fill="none" stroke="url(#pwaveGradDubai)" strokeWidth="2.5" strokeLinecap="round" />
                    {pts.map((p, i) => (
                      <text
                        key={`wm${i}`}
                        x={p.x}
                        y={p.y + (i%2===0 ? 45 : -25)}
                        textAnchor="middle"
                        fontSize="60"
                        fontWeight="900"
                        fontFamily="system-ui,sans-serif"
                        fill="rgba(15,74,155,0.06)"
                        style={{ userSelect: 'none' }}
                      >
                        {i + 1}
                      </text>
                    ))}
                    {pts.map((p, i) => (
                      <g key={`nd${i}`}>
                        <circle cx={p.x} cy={p.y} r="18" fill="white" stroke="rgba(15,74,155,0.15)" strokeWidth="1.5" />
                        <circle cx={p.x} cy={p.y} r="12" fill="url(#pnodeFillDubai)" />
                      </g>
                    ))}
                  </>
                );
              })()}
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-0">
            {steps.map((s, i) => {
              const below = i % 2 !== 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col items-center text-center px-4 cursor-default group hover:-translate-y-1 transition-all duration-300 ${
                    below ? 'justify-start pt-4' : 'invisible'
                  }`}
                  style={{ minHeight: '120px' }}
                >
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#0f4a9b]/15 shadow-sm flex items-center justify-center text-[#0f4a9b] mb-2">
                    {s.icon}
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0a1f3d] leading-snug mb-0.5">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: compact vertical timeline */}
        <div className="lg:hidden relative pl-[48px] mt-4">
          <div
            className="absolute top-2 bottom-2 w-[2px] rounded-full"
            style={{ left: '16px', background: 'linear-gradient(180deg, rgba(30,91,168,0.3), #0f4a9b 50%, rgba(30,91,168,0.3))' }}
          />
          <div className="flex flex-col gap-4">
            {steps.map((s, i) => (
              <div key={i} className="relative flex items-start gap-2.5 text-left">
                <div
                  className="absolute top-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-xs font-extrabold text-[#0f4a9b]"
                  style={{ left: '-48px', border: '1px solid rgba(15,74,155,0.15)', boxShadow: '0 3px 10px rgba(15,74,155,0.1)' }}
                >
                  {i + 1}
                </div>
                <div className="shrink-0 w-9 h-9 rounded-xl bg-white border border-[#0f4a9b]/15 shadow-2xs flex items-center justify-center text-[#0f4a9b]">
                  {s.icon}
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#0a1f3d] leading-snug mb-0.5">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Eyebrow = ({ icon, text, dark = false }: { icon: React.ReactNode; text: string; dark?: boolean }) => (
  <div
    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.16em] mb-2.5 border ${
      dark
        ? 'bg-white/5 border-white/15 text-blue-200'
        : 'bg-[#0f4a9b]/5 border-[#0f4a9b]/15 text-[#0f4a9b]'
    }`}
  >
    {icon}
    {text}
  </div>
);

/* Parents Testimonial Slider: Dubai Parents */
const PARENT_REVIEWS = [
  { 
    name: 'Rashid A.', 
    initials: 'RA', 
    location: 'Dubai Hills Estate, Dubai', 
    subject: 'IB DP Physics Higher Level (HL) · Verified Parent',
    text: 'My son at JESS Arabian Ranches was finding the new IB Physics HL syllabus challenging, particularly wave mechanics and his Internal Assessment data analysis. His Ustaad tutor broke down difficult multi-topic problems with great clarity. He went from a predicted 5 to achieving a strong 7.' 
  },
  { 
    name: 'Kavita M.', 
    initials: 'KM', 
    location: 'Emirates Hills, Dubai', 
    subject: 'Cambridge IGCSE Physics 0625 · Verified Parent',
    text: 'Our daughter at Dubai College was losing marks on Paper 4 calculations and Paper 6 practical design. Her tutor methodically rebuilt her formula rearrangements and graph interpretation skills. Her confidence grew significantly, and she achieved an A* in her final IGCSE exams.' 
  },
  { 
    name: 'Jonathan P.', 
    initials: 'JP', 
    location: 'Dubai Marina, Dubai', 
    subject: 'Edexcel A-Level Physics (9PH0) · Verified Parent',
    text: 'Transitioning to Year 12 Physics at Brighton College Dubai was a steep step. Ustaad provided a fantastic specialist who taught exact examiner mark-scheme phrasing for electric fields and electromagnetic induction. Truly a dependable tutoring service.' 
  },
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
      <div className="relative min-h-[190px] sm:min-h-[170px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl p-5 sm:p-7 overflow-hidden text-left"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
            }}
          >
            <div
              className="absolute top-2 left-3 text-[70px] font-black leading-none select-none pointer-events-none"
              style={{ color: 'rgba(240,201,106,0.12)', fontFamily: 'Georgia, serif' }}
            >
              “
            </div>
            <div className="relative z-10">
              <div className="flex gap-1 mb-2.5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="h-3.5 w-3.5 fill-[#f0c96a] text-[#f0c96a]" />
                ))}
              </div>
              <p className="text-white text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/15">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold text-white shrink-0 border border-white/20 notranslate shadow-xs"
                  translate="no"
                  style={{ background: 'linear-gradient(135deg, rgba(240,201,106,0.5), rgba(199,162,74,0.8))' }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-white font-extrabold text-xs sm:text-sm leading-tight notranslate" translate="no">{r.name}</p>
                  <p className="text-blue-200/80 text-[11px] mt-0.5 notranslate" translate="no">{r.location} · {r.subject}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous review"
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:-translate-x-0.5 cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20"
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </button>

          <div className="flex items-center gap-1.5">
            {PARENT_REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to review ${i + 1}`}
                className="rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: i === index ? 20 : 6,
                  height: 6,
                  background: i === index ? 'linear-gradient(92deg,#f0c96a,#fde68a)' : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(index + 1)}
            aria-label="Next review"
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:translate-x-0.5 cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20"
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function PhysicsTutorDubaiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCurriculumTab, setActiveCurriculumTab] = useState(1);
  const [activeDomainTab, setActiveDomainTab] = useState(0);

  const challenges: Challenge[] = [
    { 
      notation: 'ΣF=ma', 
      icon: <PenTool className="h-4 w-4" />, 
      tag: 'Vector Components',
      title: 'Vector Resolution & Free-Body Forces', 
      problem: 'When exam questions require resolving contact forces on inclined planes or non-perpendicular magnetic fields, students frequently forget trigonometric components or drop normal reaction forces, losing easy method marks.' 
    },
    { 
      notation: 'Δy/Δx', 
      icon: <FlaskConical className="h-4 w-4" />, 
      tag: 'Paper 6 Practical',
      title: 'Paper 6 & Experimental Logic Flaws', 
      problem: 'Students lose 6 to 10 marks on practical papers by choosing awkward graph scales, drawing lines of best fit that ignore outliers, or writing vague precautions like "be careful" instead of specific controlled variables.' 
    },
    { 
      notation: 'E=mc²', 
      icon: <Calculator className="h-4 w-4" />, 
      tag: 'Units & Prefixes',
      title: 'Multi-Step Derivations & Unit Errors', 
      problem: 'Questions combining SUVAT kinematics, work-energy theorem, or circuit resistance collapse when students rush into calculator numbers without showing algebraic substitutions or converting Mega/Micro SI prefixes.' 
    },
  ];

  const steps: Step[] = [
    { n: '01', icon: <FileSearch className="h-5 w-5" />, title: 'Diagnostic Past-Paper Baseline', desc: "We evaluate your child's mock performance to isolate whether marks leak from mathematical derivation, concept comprehension, or practical paper logic." },
    { n: '02', icon: <Wrench className="h-5 w-5" />, title: 'First-Principles Rebuilding', desc: "Complex physics topics, from electromagnetic induction to wave superposition, are explained with visual models until thoroughly understood." },
    { n: '03', icon: <Timer className="h-5 w-5" />, title: 'Examiner-Standard Drills', desc: "Students complete timed past paper questions mapped to exact Cambridge, Edexcel, and IB mark schemes to develop sharp exam technique." },
  ];

  const curriculumTabs = [
    {
      name: 'Middle School (KS3)',
      level: 'Years 7–9',
      boards: 'British & American NGSS',
      lead: 'Building vector intuition, metric unit conversions, and experimental thinking before GCSE pressure begins.',
      bullets: [
        'Speed, velocity & acceleration graphs',
        'Basic circuit components & Ohm’s law introduction',
        'Energy transfers & conservation principles',
        'Metric unit conversions & scientific notation'
      ],
      link: { label: 'Middle School Sciences', href: '/middle-school' }
    },
    {
      name: 'IGCSE & GCSE Physics',
      level: 'Years 10–11',
      boards: 'Cambridge 0625/0972 · Edexcel 4PH1 · AQA',
      lead: 'Mastering Paper 2 multiple-choice technique, Paper 4 structured theory, and Paper 6 Alternative to Practical.',
      bullets: [
        'SUVAT mechanics & momentum conservation',
        'Electromagnetic induction & transformer calculations',
        'Waves, refraction, critical angles & ray diagrams',
        'Paper 6 graph scales, gradients & experimental design'
      ],
      link: { label: 'IGCSE Physics Tutor Dubai', href: '/igcse-tutor-dubai' }
    },
    {
      name: 'A-Level & IB DP Physics',
      level: 'Years 12–13',
      boards: 'Cambridge 9702 · Edexcel 9PH0 · IB DP Themes A–E',
      lead: 'Advanced calculus-based derivations, electric/gravitational fields, and Internal Assessment (IA) scientific papers.',
      bullets: [
        'Circular motion, simple harmonic motion & thermal physics',
        'Capacitance, magnetic flux & quantum phenomena',
        'Paper 3 / Paper 5 experimental planning & error analysis',
        'IB Physics IA research question & data processing'
      ],
      link: { label: 'A-Level Tutors Dubai', href: '/a-level' }
    }
  ];

  const physicsDomains = [
    {
      id: 'mechanics',
      name: 'Mechanics & Dynamics',
      icon: <Gauge className="w-4 h-4" />,
      tag: 'Core Domain 01',
      title: 'Classical Mechanics, Kinematics & Energy',
      desc: "SUVAT kinematics, Newton's laws of motion, circular dynamics, projectile trajectories, and momentum conservation.",
      keyFormulas: ['v = u + at', 's = ut + ½at²', 'F = ma', 'p = mv', 'W = Fs cos θ'],
      examTip: 'Examiners award method marks for writing algebraic formulas before inserting numeric values.'
    },
    {
      id: 'electricity',
      name: 'Electricity & Fields',
      icon: <Zap className="w-4 h-4" />,
      tag: 'Core Domain 02',
      title: 'Circuits, Electromagnetism & Fields',
      desc: "Kirchhoff's circuit rules, potential dividers, capacitance, electric fields, and Faraday & Lenz electromagnetic induction.",
      keyFormulas: ['V = IR', 'P = VI = I²R', 'ε = -N(ΔΦ/Δt)', 'F = BIl sin θ', 'E = V/d'],
      examTip: 'Always sketch current flow and right-hand grip rules for magnetic field orientation.'
    },
    {
      id: 'waves',
      name: 'Waves & Optics',
      icon: <Waves className="w-4 h-4" />,
      tag: 'Core Domain 03',
      title: 'Oscillations, Superposition & Wave Optics',
      desc: 'Simple harmonic motion, Doppler effect, diffraction gratings, wave superposition, and total internal reflection.',
      keyFormulas: ['v = fλ', 'n = sin i / sin r', 'd sin θ = nλ', 'T = 2π√(l/g)'],
      examTip: 'Ensure phase difference is calculated in radians for A-Level and IB wave interference.'
    },
    {
      id: 'quantum',
      name: 'Thermal & Quantum',
      icon: <Thermometer className="w-4 h-4" />,
      tag: 'Core Domain 04',
      title: 'Thermodynamics, Nuclear & Modern Physics',
      desc: 'Specific & latent heat, ideal gas laws, photoelectric effect, de Broglie wavelength, and nuclear binding energy.',
      keyFormulas: ['E = mcΔT', 'pV = nRT', 'E = hf', 'hf = Φ + ½mv²max', 'E = mc²'],
      examTip: 'Convert minutes to seconds and Celsius to Kelvin before substituting into gas equations.'
    }
  ];

  const paperLab = [
    {
      icon: <PenTool className="w-5 h-5 text-[#0f4a9b]" />,
      title: 'Method-Mark Mastery',
      desc: 'Writing structured multi-step calculations with clear formulas so method marks are secured even if arithmetic slips occur.'
    },
    {
      icon: <FlaskConical className="w-5 h-5 text-[#0f4a9b]" />,
      title: 'Alternative to Practical (Paper 6)',
      desc: 'Mastering graph axes selection, gradient determination with large triangles, source of error evaluations, and controlled variable design.'
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-[#0f4a9b]" />,
      title: 'Command-Word Decoding',
      desc: 'Deconstructing the precise mark-scheme expectations behind "State", "Describe", "Explain", and "Deduce".'
    },
    {
      icon: <Timer className="w-5 h-5 text-[#0f4a9b]" />,
      title: 'Paced Mock Simulations',
      desc: 'Practicing authentic 75-minute and 120-minute papers under strict timed conditions to eliminate timing anxiety.'
    },
  ];

  const compareRows = [
    { label: 'Diagnostic baseline assessment before matching', ustaad: 'yes', market: 'no', school: 'no' },
    { label: 'Exact Dubai board match (0625, 4PH1, 9PH0, IB)', ustaad: 'yes', market: 'sometimes', school: 'yes' },
    { label: 'Weekly timed past-paper question drills', ustaad: 'yes', market: 'no', school: 'rare' },
    { label: 'Paper 6 / practical experimental coaching', ustaad: 'yes', market: 'no', school: 'yes' },
    { label: 'Comprehensive post-lesson parent progress tracking', ustaad: 'yes', market: 'no', school: 'no' },
  ];

  const gapChecks = [
    { q: 'Does your child know the physics formula but struggle to rearrange it algebraically for the target variable?', tag: 'Derivation Gap', focus: 'Algebraic modeling & variable isolation' },
    { q: 'Do they lose marks on 4-mark and 6-mark explanation questions for omitting examiner keywords?', tag: 'Keywords Gap', focus: 'Mark scheme vocabulary & step-by-step logic' },
    { q: 'Are Paper 6 practical marks slipping due to careless graph scales or vague experimental safety comments?', tag: 'Practical Gap', focus: 'Graph calibration & error evaluation protocols' },
  ];

  const faqs: { q: string; a: React.ReactNode; plain: string }[] = [
    { 
      q: 'Which Physics exam boards do your Dubai tutors support?', 
      plain: "We support all major Physics exam boards taught across Dubai private schools: Cambridge IGCSE Physics (0625/0972), Pearson Edexcel International GCSE (4PH1), OxfordAQA GCSE, Cambridge International A-Level (9702), Pearson Edexcel A-Level (9PH0), AQA A-Level, and the International Baccalaureate (IB DP Physics SL & HL). Your tutor will be aligned specifically with your child's exact school syllabus.", 
      a: <>We support all major Physics exam boards taught across Dubai private schools: Cambridge IGCSE Physics (0625/0972), Pearson Edexcel International GCSE (4PH1), OxfordAQA, Cambridge International <a href="/a-level" className="text-[#0f4a9b] font-semibold underline">A-Level Physics (9702)</a>, Pearson Edexcel A-Level (9PH0), and the International Baccalaureate (<a href="/ib-curriculum" className="text-[#0f4a9b] font-semibold underline">IB DP Physics SL & HL</a>). Your tutor will be aligned specifically with your child's exact school syllabus.</> 
    },
    { 
      q: 'How do you prepare Dubai students for Alternative to Practical (Paper 6 / Paper 5)?', 
      plain: 'Paper 6 and Paper 5 carry substantial weight in IGCSE and A-Level physics grades. We coach students on precise graph-drawing rules (scale utilization, point plotting, line of best fit), accurate gradient calculations with large triangles, source of error identification, and structured experimental design plans.', 
      a: <>Paper 6 and Paper 5 carry substantial weight in IGCSE and A-Level physics grades. We coach students on precise graph-drawing rules (scale utilization, point plotting, line of best fit), accurate gradient calculations with large triangles, source of error identification, and structured experimental design plans.</> 
    },
    { 
      q: 'Can your physics tutors assist with the new IB DP Physics syllabus and Internal Assessment (IA)?', 
      plain: 'Yes. Our IB Physics specialists are fully trained on the new IB DP Physics syllabus (Themes A–E). We provide comprehensive guidance on formulating authentic IA research questions, setting up rigorous error analysis, processing quantitative data, and structuring the final scientific paper to maximize criterion marks.', 
      a: <>Yes. Our IB Physics specialists are fully trained on the new IB DP Physics syllabus (Themes A–E). We provide comprehensive guidance on formulating authentic IA research questions, setting up rigorous error analysis, processing quantitative data, and structuring the final scientific paper to maximize criterion marks.</> 
    },
    { 
      q: 'Do you offer 1-to-1 online physics lessons across all Dubai communities?', 
      plain: 'Yes. We provide interactive 1-to-1 online physics tutoring with digital stylus annotation, live past-paper sharing, and post-session notes to students across Dubai, including Dubai Hills Estate, Arabian Ranches (1, 2 & 3), Emirates Hills, Dubai Marina, Downtown Dubai, Palm Jumeirah, Jumeirah, Al Barsha, JLT, Damac Hills, and Mirdif.', 
      a: <>Yes. We provide interactive 1-to-1 online physics tutoring with digital stylus annotation, live past-paper sharing, and post-session notes to students across Dubai, including Dubai Hills Estate, Arabian Ranches (1, 2 & 3), Emirates Hills, Dubai Marina, Downtown Dubai, Palm Jumeirah, Jumeirah, Al Barsha, JLT, Damac Hills, and Mirdif.</> 
    },
    { 
      q: 'How do you support students targeting Engineering, Computer Science, or Medicine at top universities?', 
      plain: 'Competitive university courses (such as Oxford, Cambridge, Imperial, UCL, and top US/Canadian engineering faculties) require A* grades in A-Level Physics or a 7 in IB Physics HL. Our tutors train students on multi-concept extension questions, advanced calculus-based derivations, and physics aptitude tests (such as the ESAT / PAT).', 
      a: <>Competitive university courses (such as Oxford, Cambridge, Imperial, UCL, and top US/Canadian engineering faculties) require A* grades in A-Level Physics or a 7 in IB Physics HL. Our tutors train students on multi-concept extension questions, advanced calculus-based derivations, and physics aptitude tests (such as the ESAT / PAT).</> 
    },
    { 
      q: 'How quickly can we schedule our first free diagnostic trial in Dubai?', 
      plain: 'You can book immediately. Submit our diagnostic contact form or reach out via WhatsApp, and our academic team will match your child with a dedicated physics tutor within 24 to 48 hours for their free trial lesson.', 
      a: <>You can book immediately. Submit our <a href="/contact" className="text-[#0f4a9b] font-semibold underline">diagnostic contact form</a> or reach out via WhatsApp, and our academic team will match your child with a dedicated physics tutor within 24 to 48 hours for their free trial lesson.</> 
    },
  ];

  const Mark = ({ v }: { v: string }) => {
    if (v === 'yes') return <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] mx-auto" />;
    if (v === 'no') return <X className="h-4 w-4 text-gray-300 mx-auto" />;
    return <span className="text-[11px] text-gray-400 italic">{v}</span>;
  };

  return (
    <Layout>
      <SEOHead
        title="Physics Tutor Dubai | IGCSE, A-Level & IB Physics Tuition | Ustaad"
        description="Expert 1-to-1 physics tutors in Dubai for Cambridge 0625, Edexcel, A-Level and IB DP Physics. Rebuild weak topics, drill past papers, and achieve top exam grades."
        canonical="/physics-tutor-dubai"
        placename="Dubai, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Dubai',
            url: '/physics-tutor-dubai',
            name: 'Ustaad | Physics Tutor Dubai',
            description: 'Expert 1-to-1 physics tutors in Dubai for Cambridge 0625, Edexcel, A-Level and IB DP Physics. Rebuild weak topics and achieve top exam grades.',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Curriculum', url: '/curriculum' },
            { name: 'Dubai', url: '/physics-tutor-dubai' },
            { name: 'Physics Tutor Dubai', url: '/physics-tutor-dubai' },
          ]),
          serviceSchema('Private Physics Tutoring Dubai', 'One-to-one physics tutors in Dubai for IGCSE, GCSE, A-Level, IB, and AP students. Trusted by Dubai families since 2015.', '/physics-tutor-dubai'),
          courseSchema({
            courseName: 'Physics Private Tutoring Dubai',
            description: 'Expert 1-to-1 physics tutors in Dubai for IGCSE, A-Level and IB Physics.',
            url: '/physics-tutor-dubai',
            city: 'Dubai',
          }),
          faqSchema(faqs.map(f => ({ q: f.q, a: f.plain }))),
        ]}
      />

      {/* SECTION 01: HERO */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center py-12 md:py-16">
        <PhysGrid />
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-8 sm:pt-24 sm:pb-10 max-w-4xl w-full">
          {/* Hero pill tags */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3">
            {['Cambridge 0625/0972', 'Edexcel 4PH1', 'A-Level 9702/9PH0', 'IB DP Themes A–E'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold text-blue-100/80 bg-white/[0.08] border border-white/15"
              >
                <span className="w-1.5 h-1.5 rounded-full inline-block shrink-0 bg-[#f0c96a]" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-extrabold tracking-tight text-white leading-[1.12] mb-3 text-[clamp(1.75rem,4.5vw,3.1rem)] max-w-3xl">
            Physics Tutor Dubai,{' '}
            <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Built For Exam Precision
            </span>
          </h1>

          <p className="text-blue-100/80 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl mb-6 px-4 font-medium">
            Master multi-step calculations, vector resolutions, and Paper 6 practical experiments with 1-to-1 physics specialists in Dubai.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4">
            <a
              href={BOOKING}
              className="inline-flex items-center justify-center gap-2 px-7 h-11 rounded-full font-bold text-sm sm:text-base text-white transition-all hover:-translate-y-0.5 shadow-lg"
              style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 16px rgba(15,74,155,0.5)' }}
            >
              Book Your Free Trial
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-md shadow-[#25D366]/20"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp a Tutor
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 02: STATS BAR */}
      <StatsBar />

      {/* SECTION 03: TRUSTED BY DUBAI SCHOOLS */}
      <SchoolsMarquee
        logoList={physicsDubaiSchoolLogos}
        header={
          <div className="text-center mb-4 sm:mb-5 max-w-2xl mx-auto px-4">
            <p className="text-xs sm:text-sm font-bold text-[#0a1f3d] leading-relaxed mb-0.5">
              Tutoring physics students across Dubai's leading British, IB, and International schools since 2015.
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
              Trusted by families from Dubai College, JESS Arabian Ranches, Brighton College Dubai, Repton, and Nord Anglia.
            </p>
          </div>
        }
      />

      {/* SECTION 04: WHERE PHYSICS MARKS VANISH */}
      <ChallengesCarousel challenges={challenges} />

      {/* SECTION 05: INTERACTIVE PHYSICS CORE DOMAINS */}
      <section className="py-8 sm:py-10 lg:py-12 bg-slate-50 relative overflow-hidden">
        <PhysGrid light />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] text-xs font-bold uppercase tracking-wider mb-2">
              <Atom className="w-3.5 h-3.5 text-[#C7A24A]" />
              SYLLABUS BREAKDOWN
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1.5">
              Physics Core Domains <span className="text-[#0f4a9b]">Covered in Dubai</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              From classical mechanics to atomic and quantum physics, every topic taught at full exam depth with first-principles derivation.
            </p>
          </div>

          {/* Domain Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-6">
            {physicsDomains.map((dom, idx) => (
              <button
                key={dom.id}
                onClick={() => setActiveDomainTab(idx)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-bold text-xs transition-all duration-200 border cursor-pointer ${
                  activeDomainTab === idx
                    ? 'bg-[#0f4a9b] text-white border-[#0f4a9b] shadow-md shadow-[#0f4a9b]/25 scale-102'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#0f4a9b]/30 hover:text-[#0f4a9b]'
                }`}
              >
                {dom.icon}
                <span>{dom.name}</span>
              </button>
            ))}
          </div>

          {/* Active Domain Feature Panel */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {(() => {
                const dom = physicsDomains[activeDomainTab];
                return (
                  <motion.div
                    key={activeDomainTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-md text-left relative overflow-hidden"
                  >
                    <div className="grid md:grid-cols-12 gap-5 items-start">
                      <div className="md:col-span-7 flex flex-col justify-between h-full">
                        <div>
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C7A24A]/10 border border-[#C7A24A]/25 text-[#9E7B24] text-[10px] font-extrabold uppercase tracking-widest mb-2">
                            {dom.tag}
                          </div>
                          <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] mb-2 leading-snug">
                            {dom.title}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                            {dom.desc}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-gradient-to-r from-[#FEFBF3] to-[#FBF6E8] border border-[#C7A24A]/30 text-xs text-[#0a1f3d]">
                          <strong className="text-[#C7A24A] font-bold block mb-0.5">Examiner Mark Scheme Focus:</strong>
                          {dom.examTip}
                        </div>
                      </div>

                      <div className="md:col-span-5 bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col justify-between h-full">
                        <div className="mb-3">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">
                            Essential Formula Derivations
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {dom.keyFormulas.map((f, fIdx) => (
                              <span
                                key={fIdx}
                                className="font-mono text-[11px] font-bold px-2 py-1 rounded-md bg-white border border-slate-200 text-[#0f4a9b] shadow-2xs"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                          <span className="text-[11px] text-slate-500 font-semibold">1-to-1 Aligned</span>
                          <a
                            href={BOOKING}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#0f4a9b] hover:underline"
                          >
                            Rebuild topic <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 06: FROM THEORY TO LAB MASTERY */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <Eyebrow icon={<FlaskConical className="h-3.5 w-3.5" />} text="Paper & Practical" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1.5">
              From Theory <span className="text-[#0f4a9b]">To Lab Mastery</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Physics exams test rigorous mathematical theory alongside experimental lab skills. We cover both with mark-scheme precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {paperLab.map((card, i) => (
              <div
                key={i}
                className="rounded-2xl p-4 text-left relative overflow-hidden bg-slate-50/70 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-[#0f4a9b]/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#0f4a9b]/15 shadow-2xs flex items-center justify-center mb-3">
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0a1f3d] mb-1.5 leading-snug">{card.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{card.desc}</p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-slate-200/60 flex items-center gap-1.5 text-[10.5px] font-bold text-[#0f4a9b]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A24A]" /> Examiner Standard
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07: FEATURED FACULTY (TABRAIZ KHAN - 3-SUBJECT BRIDGE) */}
      <section className="py-8 sm:py-10 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7A24A]/10 border border-[#C7A24A]/25 text-[#9E7B24] text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
              EXPERT STEM FACULTY
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d]">
              Meet Your Physics Specialist: <span className="text-[#C7A24A]">Tabraiz Khan</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mt-1">
              Physics is grounded in mathematical modeling. Tabraiz connects complex mechanics with vector and calculus fluency.
            </p>
          </div>

          <article className="grid md:grid-cols-12 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/80 max-w-3xl mx-auto">
            {/* Left Column */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#061530] via-[#0A1F3C] to-[#12305A] text-white p-5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#C7A24A]/15 rounded-full blur-xl pointer-events-none" />

              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] text-[10px] font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
                  <CheckCircle2 className="w-3 h-3" /> Cambridge Certified
                </span>

                <div className="relative aspect-[4/4.5] rounded-xl overflow-hidden border border-[#C7A24A]/30 shadow-md mb-3 bg-[#0A1F3C]">
                  <img
                    src="/images/tutors/tabraiz-khan.jpg"
                    alt="Tabraiz Khan, Physics, Maths, and Statistics tutor in Dubai"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Signed Off Banner */}
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-[#C7A24A]/25 text-left">
                <div className="flex -space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] font-bold text-[8.5px] flex items-center justify-center border border-[#0A1F3C]">
                    FZ
                  </span>
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] font-bold text-[8.5px] flex items-center justify-center border border-[#0A1F3C]">
                    MR
                  </span>
                </div>
                <div className="text-[10px] text-slate-300 leading-snug">
                  <strong className="text-white font-bold">Signed off</strong> by academic leadership
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between text-left gap-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#0a1f3d] leading-tight">
                  Tabraiz Khan
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-0.5">
                  Cambridge Certified · Physics &amp; Mathematics Faculty
                </p>
              </div>

              {/* Subject Bridge Container */}
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#C7A24A] mb-1.5 flex items-center gap-1.5">
                  <span className="w-3 h-[1.5px] bg-[#C7A24A]" />
                  THE SUBJECT BRIDGE
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-b from-[#FEFBF3] to-[#FBF6E8] border border-[#C7A24A]/30">
                  <div className="flex items-center justify-between gap-1 text-center">
                    <div className="flex-1 bg-white border border-[#C7A24A]/60 rounded-lg p-1.5 shadow-2xs">
                      <div className="font-bold text-xs text-[#0a1f3d]">Physics</div>
                      <div className="text-[9px] font-bold text-slate-500 uppercase">IGCSE / A-L / IB</div>
                    </div>
                    <span className="text-[#C7A24A] font-bold text-xs shrink-0">↔</span>
                    <div className="flex-1 bg-white border border-[#C7A24A]/60 rounded-lg p-1.5 shadow-2xs">
                      <div className="font-bold text-xs text-[#0a1f3d]">Math AA</div>
                      <div className="text-[9px] font-bold text-slate-500 uppercase">Calculus &amp; Vectors</div>
                    </div>
                    <span className="text-[#C7A24A] font-bold text-xs shrink-0">↔</span>
                    <div className="flex-1 bg-white border border-[#C7A24A]/60 rounded-lg p-1.5 shadow-2xs">
                      <div className="font-bold text-xs text-[#0a1f3d]">Paper 6 &amp; IA</div>
                      <div className="text-[9px] font-bold text-slate-500 uppercase">Data Analysis</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credentials list */}
              <ul className="space-y-1.5 border-y border-slate-100 py-2.5">
                {[
                  { bold: "Master's in Statistics", text: "· Cambridge Certified Tutor" },
                  { bold: "9+ years", text: "teaching IGCSE 0625, A-Level 9702, and IB DP Physics" },
                  { bold: "Proven track record", text: "moving student predictions from 4/5s to 7s and A*s" }
                ].map((cred, cIdx) => (
                  <li key={cIdx} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-3.5 h-3.5 rounded bg-gradient-to-br from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] flex items-center justify-center shrink-0 font-bold text-[9px]">
                      ✓
                    </span>
                    <span>
                      <strong className="text-[#0a1f3d] font-bold">{cred.bold}</strong> {cred.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <div>
                  <div className="text-xl font-serif font-bold text-[#C7A24A] leading-none">
                    9<span className="text-xs font-sans font-semibold text-slate-500 ml-0.5">yrs</span>
                  </div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Physics Teaching</div>
                </div>

                <a
                  href="/tutors/tabraiz-khan"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0a1f3d] hover:bg-gradient-to-r hover:from-[#E4C069] hover:to-[#C9A24C] hover:text-[#0A1F3C] text-white font-bold text-xs transition-all duration-200 shadow-sm"
                >
                  View Profile
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION 08: THE PHYSICS SYLLABUS JOURNEY IN DUBAI */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 max-w-xl mx-auto">
            <Eyebrow icon={<Compass className="w-3.5 h-3.5" />} text="Curriculum Pathways" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1.5">
              The Physics Journey <span className="text-[#0f4a9b]">With Ustaad</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              From middle school foundations to A-Level and IB Diploma exams, we align with the exact syllabus your child studies in Dubai.
            </p>
          </div>

          {/* Curriculum Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-6">
            {curriculumTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCurriculumTab(idx)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs transition-all duration-200 border cursor-pointer ${
                  activeCurriculumTab === idx
                    ? 'bg-[#0f4a9b] text-white border-[#0f4a9b] shadow-md shadow-[#0f4a9b]/25'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-[#0f4a9b]'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Active Curriculum Panel */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {(() => {
                const c = curriculumTabs[activeCurriculumTab];
                return (
                  <motion.div
                    key={activeCurriculumTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gradient-to-br from-[#0a1f3d] via-[#0f3575] to-[#0a2a6e] rounded-2xl p-5 sm:p-7 text-white shadow-xl relative overflow-hidden text-left"
                  >
                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#C7A24A]/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="grid md:grid-cols-12 gap-6 items-start relative z-10">
                      <div className="md:col-span-6 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-[#fde68a]">
                              {c.level}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1 leading-tight">
                            {c.name}
                          </h3>
                          <div className="text-[11px] text-blue-200/80 font-mono mb-3">
                            {c.boards}
                          </div>
                          <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                            {c.lead}
                          </p>
                        </div>

                        <div>
                          <a
                            href={c.link.href}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] font-extrabold text-xs shadow-sm hover:brightness-105 transition-all"
                          >
                            {c.link.label}
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      <div className="md:col-span-6 bg-white/5 border border-white/15 rounded-xl p-4 backdrop-blur-2xs">
                        <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-[#fde68a] mb-3">
                          Key Curriculum Focus Areas:
                        </h4>
                        <ul className="space-y-2">
                          {c.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-xs text-blue-100/90 leading-snug">
                              <span className="w-3.5 h-3.5 rounded-full bg-[#C7A24A] text-[#0A1F3C] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[9px]">
                                ✓
                              </span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 09: INSIDE A REAL DUBAI EXAM PAPER */}
      <section className="py-8 sm:py-10 bg-slate-50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 max-w-xl mx-auto">
            <Eyebrow icon={<Sparkles className="h-3.5 w-3.5" />} text="Worked Question" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1.5">
              Inside A <span className="text-[#0f4a9b]">Real Exam Paper</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Here is one classic Cambridge 0625 / Edexcel 4PH1 question, the common pitfall, and what secures all 5 marks.
            </p>
          </div>

          <div className="rounded-2xl p-5 sm:p-7 bg-white border border-slate-200/80 shadow-sm relative overflow-hidden text-left">
            <div className="flex flex-wrap items-center gap-1.5 mb-4">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#0f4a9b]/5 text-[#0f4a9b] border border-[#0f4a9b]/15">
                Cambridge 0625 &amp; Edexcel 4PH1 Sample
              </span>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#C7A24A]/10 text-[#9E7B24] border border-[#C7A24A]/25">
                Theory Paper 4 · 5 marks
              </span>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#0a1f3d] font-medium mb-4 italic border-l-2 border-[#0f4a9b] pl-3 py-1 bg-slate-50/60 rounded-r-lg">
              "An electric immersion heater rated at 300 W is placed into 0.60 kg of liquid at 22 °C. The liquid reaches 70 °C in 4.0 minutes. Calculate the specific heat capacity of the liquid, assuming zero heat loss."
            </p>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-red-50/70 border border-red-100 flex items-start gap-2.5">
                <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-red-900 font-bold block mb-0.5">Common student mistake:</strong>
                  Forgetting to convert time from minutes to seconds (4.0 min = 240 s), or confusing temperature change (ΔT = 48 °C) with absolute temperature.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-emerald-900 font-bold block mb-0.5">What earns all 5 marks:</strong>
                  Stating E = P × t = 300 × 240 = 72,000 J, setting E = mcΔT, rearranging c = 72,000 / (0.60 × 48) = 2,500 J/(kg·°C), with explicit standard SI units.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-[#0a1f3d] font-bold block mb-0.5">How Ustaad teaches it:</strong>
                  "Unit Audit" protocol: converting all non-SI quantities before writing the formula ensures students never lose method marks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: OUR 3-STEP PROCESS TIMELINE */}
      <StepsCarousel steps={steps} />

      {/* SECTION 11: WHERE USTAAD STANDS APART (COMPARISON MATRIX) */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 max-w-xl mx-auto">
            <Eyebrow icon={<Layers className="w-3.5 h-3.5" />} text="Comparative Value" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1.5">
              Where Ustaad <span className="text-[#0f4a9b]">Stands Apart in Dubai</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Honest comparison between Ustaad, open marketplace tutors, and school-only physics support in Dubai.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                  <th className="py-3 px-3 sm:px-5 text-xs font-bold text-white">Feature</th>
                  <th className="py-3 px-2 sm:px-4 text-xs font-extrabold text-white text-center bg-[#0a1f3d]/20">
                    Ustaad
                  </th>
                  <th className="py-3 px-2 sm:px-4 text-xs font-semibold text-blue-100/90 text-center">
                    Marketplace Tutor
                  </th>
                  <th className="py-3 px-2 sm:px-4 text-xs font-semibold text-blue-100/90 text-center">
                    School Only
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 last:border-0 ${i % 2 === 1 ? 'bg-slate-50/60' : ''}`}>
                    <td className="py-3 px-3 sm:px-5 text-xs font-semibold text-[#0a1f3d]">{row.label}</td>
                    <td className="py-3 px-2 sm:px-4 text-center bg-[#0f4a9b]/[0.04]"><Mark v={row.ustaad} /></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><Mark v={row.market} /></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><Mark v={row.school} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 12: SELF-DIAGNOSIS (CHECK THE GAP YOURSELF) */}
      <section className="py-8 sm:py-10 bg-slate-50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 max-w-xl mx-auto">
            <Eyebrow icon={<ScanSearch className="h-3.5 w-3.5" />} text="Self Diagnosis" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1.5">
              Check The <span className="text-[#0f4a9b]">Gap Yourself</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Three quick diagnostic questions to pinpoint where physics marks are leaking.
            </p>
          </div>

          <div className="space-y-2.5">
            {gapChecks.map((g, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-xl p-3.5 sm:p-4 bg-white border border-slate-200 shadow-2xs hover:border-[#0f4a9b]/30 hover:shadow-xs transition-all text-left"
              >
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#0a1f3d] leading-snug mb-0.5">{g.q}</p>
                  <p className="text-[11px] text-slate-500 font-medium">{g.focus}</p>
                </div>
                <span className="shrink-0 text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-[#0f4a9b]/8 text-[#0f4a9b] border border-[#0f4a9b]/15 self-start sm:self-center">
                  {g.tag}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 leading-relaxed mt-4 mb-4">
            Most students experience two of these three. We start with the highest-impact gap first during your free trial.
          </p>

          <div className="flex justify-center">
            <GoldButton href={BOOKING} className="px-6 py-2.5 text-xs shadow-sm">
              Book Your Diagnostic Trial
            </GoldButton>
          </div>
        </div>
      </section>

      {/* SECTION 13: WHAT PARENTS SAY */}
      <section className="py-8 sm:py-10 lg:py-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 50%, #1e5ba8 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                What Dubai Parents{' '}
                <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Say
                </span>
              </h2>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="h-3 w-3 fill-[#f0c96a] text-[#f0c96a]" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-[#f0c96a]">5.0 · Verified Reviews</span>
            </div>
          </div>
          <ParentsSlider />
        </div>
      </section>

      {/* SECTION 14: FAQs */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-24">
              <Eyebrow icon={<Atom className="h-3.5 w-3.5" />} text="Common Questions" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
                Dubai Parents <span className="text-[#0f4a9b]">Often Ask</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Honest answers to physics tutoring questions Dubai parents ask before their first session.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-2.5">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-sm rounded-full cursor-pointer"
                        style={{
                          width: 36,
                          height: 36,
                          minWidth: 36,
                          minHeight: 36,
                          background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                          color: isOpen ? '#fff' : '#0f4a9b',
                          transition: 'background 250ms ease, color 250ms ease',
                          border: 'none',
                          boxShadow: 'inset 0 0 0 2px #fff',
                        }}
                      >
                        ?
                      </button>

                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-2.5 text-left rounded-full border bg-white shadow-2xs cursor-pointer"
                        style={{
                          minHeight: '46px',
                          padding: '8px 14px',
                          borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)',
                        }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-xs sm:text-[13.5px] leading-snug">{f.q}</span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 28,
                            height: 28,
                            minWidth: 28,
                            minHeight: 28,
                            borderRadius: '50%',
                            background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                            color: isOpen ? '#fff' : '#0f4a9b',
                            transition: 'background 250ms ease, color 250ms ease, transform 250ms cubic-bezier(0.22,1,0.36,1)',
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
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className="ml-[46px] overflow-hidden"
                        >
                          <div
                            className="flex items-start gap-2.5 rounded-xl border p-3.5 bg-[#f8fafc] text-left"
                            style={{ borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 3px 12px rgba(15,74,155,0.05)' }}
                          >
                            <p className="flex-1 text-slate-600 text-xs sm:text-[13px] leading-relaxed">{f.a}</p>
                            <span
                              className="flex-shrink-0 flex items-center justify-center rounded-full"
                              style={{ width: 28, height: 28, minWidth: 28, minHeight: 28, background: '#0f4a9b', color: '#fff' }}
                            >
                              <MessageCircle className="h-3.5 w-3.5" />
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

      {/* RELATED CONTENT */}
      <RelatedContent
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Curriculum', href: '/curriculum' },
          { name: 'Dubai', href: '/physics-tutor-dubai' },
          { name: 'Physics Tutor Dubai', href: '/physics-tutor-dubai' },
        ]}
        subjects={[
          { label: 'Maths Tutor Dubai', href: '/maths-tutor-dubai' },
          { label: 'IGCSE Tutor Dubai', href: '/igcse-tutor-dubai' },
          { label: 'GCSE Tutor Dubai', href: '/gcse-tutor-dubai' },
          { label: 'Physics subject hub', href: '/physics' },
          { label: 'Physics Tutor Abu Dhabi', href: '/physics-tutor-abu-dhabi' },
        ]}
        curricula={[
          { label: 'IGCSE', href: '/igcse' },
          { label: 'A-Level', href: '/a-level' },
          { label: 'IB Curriculum', href: '/ib-curriculum' },
          { label: 'British Curriculum', href: '/british-curriculum' },
          { label: 'American Curriculum', href: '/american-curriculum' },
        ]}
      />

      {/* SECTION 15: FINAL CTA */}
      <FinalCTA
        title="Start Physics Support in Dubai Today"
        subtitleNode={
          <div className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            <p>Book your free trial with a private physics tutor Dubai parents trust.</p>
            <p className="text-xs text-gray-500 mt-1.5">
              Or speak directly with student support: <a href="tel:8009005" className="font-semibold text-[#0f4a9b]">800 9005 (USTAAD)</a>.
            </p>
          </div>
        }
        button1Text="Book Free Trial"
        button1Href={BOOKING}
        subtext1=""
        button2Text="Ask Question on WhatsApp"
        subtext2=""
      />

      {/* SECTION 16: LOOKING FOR ANOTHER SUBJECT? */}
      <section className="py-8 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#0a1f3d] leading-tight mb-1">
              Looking For <span className="text-[#0f4a9b]">Another Subject in Dubai?</span>
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed">
              Same calm, topic-rooted approach across every core subject Dubai students study.
            </p>
          </div>
          <a
            href="/maths-tutor-dubai"
            className="group block rounded-2xl p-4 sm:p-5 transition-all hover:-translate-y-0.5 bg-gradient-to-b from-[#fafbff] to-[#f5f7ff] border border-[#0f4a9b]/15 shadow-2xs hover:shadow-sm"
          >
            <div className="flex items-center gap-3.5 text-left">
              <div
                className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl"
                style={{ background: 'linear-gradient(135deg, rgba(15,74,155,0.12) 0%, rgba(30,91,168,0.08) 100%)' }}
              >
                <Calculator className="w-5 h-5 text-[#0f4a9b]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-extrabold text-[#0a1f3d] mb-0.5 flex items-center gap-1.5 group-hover:text-[#0f4a9b] transition-colors">
                  Maths Tutor Dubai
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For algebra, calculus, Cambridge 0580 Paper 4, IB Maths AA/AI, and the same structured problem-solving approach.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* SECTION 17: ASK A PHYSICS TUTOR */}
      <section className="py-6 sm:py-8 bg-[#f4f7fc] border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
          <div className="flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0f4a9b]/70 mb-0.5">
              Ask A Dubai Physics Tutor
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#0a1f3d] mb-1.5">
              Send a challenging past-paper question. We'll send a worked solution.
            </p>
            <div className="flex flex-col gap-1 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-[#0f4a9b] shrink-0" />
                <span>Ustaad UAE · Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="h-3 w-3 text-[#0f4a9b] shrink-0" />
                <span>800 9005 (USTAAD) · WhatsApp +971 56 124 9005</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="h-3 w-3 text-[#0f4a9b] shrink-0" />
                <span>
                  <a href="mailto:support@ustaad.ae" className="hover:text-[#0f4a9b] transition-colors">support@ustaad.ae</a>
                </span>
              </div>
            </div>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-5 h-10 rounded-full font-bold text-xs text-white transition-all hover:-translate-y-0.5 shrink-0 shadow-sm"
            style={{ background: 'linear-gradient(135deg,#25d366,#128c4a)', boxShadow: '0 3px 10px rgba(37,211,102,0.3)' }}
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            WhatsApp Us
          </a>
        </div>
      </section>
    </Layout>
  );
}
