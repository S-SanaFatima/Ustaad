import { useState, useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Atom, Zap, Waves, Thermometer, Gauge,
  ScanSearch, CheckCircle2, X,
  ChevronDown, ChevronLeft, ChevronRight, Sparkles, FileSearch, Wrench, Timer, PenTool, ShieldCheck,
  ClipboardCheck, Brain, Target, Star, MessageCircle, FlaskConical,
  BookOpen, Calculator, MapPin, Phone, Mail,
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

/* faint physics grid background */
const PhysGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'dubai-pgrid-l' : 'dubai-pgrid-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(15,74,155,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'dubai-pgrid-l' : 'dubai-pgrid-d'})`} />
  </svg>
);

type Step = { n: string; icon: ReactNode; title: string; desc: string };
type Challenge = { notation: string; icon: ReactNode; title: string; problem: string };

/* ─── Challenges Accordion (FAQ-style compact) ─── */
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
    <section className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(15,74,155,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full mb-5">
              <Target className="h-4 w-4" />
              <span className="text-sm font-bold">Exam Insight</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
              Where Physics{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">
                Marks Vanish
              </span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Most physics marks slip away in three quiet places Dubai students rarely notice until mock exam reports arrive.
            </p>
          </div>

          <ChallengesAccordion challenges={challenges} />
        </div>
      </div>
    </section>
  );
}

/* ─── Wave Timeline Carousel ─── */
function StepsCarousel({ steps }: { steps: Step[] }) {
  const W = 1200;

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#f4f7fc] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(15,74,155,0.06) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1.5">
            Our Simple{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">Process</span>
          </h2>
          <p className="text-gray-500 text-[13px] sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
            Three quiet steps from physics confusion to confident, independent exam practice in Dubai.
          </p>
        </div>

        {/* Wave timeline: desktop */}
        <div className="hidden lg:block">
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

          <div className="relative w-full" style={{ height: '130px' }}>
            <svg viewBox={`0 0 ${W} 130`} preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
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
                const pts = [{ x: 150, y: 20 }, { x: 600, y: 100 }, { x: 1050, y: 20 }];
                const wp = `M ${pts[0].x} ${pts[0].y}
                  C ${pts[0].x+180} ${pts[0].y}, ${pts[1].x-180} ${pts[1].y}, ${pts[1].x} ${pts[1].y}
                  C ${pts[1].x+180} ${pts[1].y}, ${pts[2].x-180} ${pts[2].y}, ${pts[2].x} ${pts[2].y}`;
                return (
                  <>
                    <path d={wp} fill="none" stroke="rgba(15,74,155,0.10)" strokeWidth="16" strokeLinecap="round" />
                    <path d={wp} fill="none" stroke="url(#pwaveGradDubai)" strokeWidth="2.5" strokeLinecap="round" />
                    {pts.map((p, i) => (
                      <text key={`wm${i}`} x={p.x} y={p.y + (i%2===0 ? 55 : -35)}
                        textAnchor="middle" fontSize="72" fontWeight="900"
                        fontFamily="system-ui,sans-serif" fill="rgba(15,74,155,0.06)"
                        style={{ userSelect: 'none' }}>{i + 1}</text>
                    ))}
                    {pts.map((p, i) => (
                      <g key={`nd${i}`}>
                        <circle cx={p.x} cy={p.y} r="22" fill="white" stroke="rgba(15,74,155,0.15)" strokeWidth="1.5" />
                        <circle cx={p.x} cy={p.y} r="15" fill="url(#pnodeFillDubai)" />
                      </g>
                    ))}
                  </>
                );
              })()}
            </svg>
          </div>

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

        {/* Mobile: compact vertical timeline */}
        <div className="lg:hidden relative pl-[52px]">
          <div className="absolute top-3 bottom-3 w-[2px] rounded-full" style={{ left: '17px', background: 'linear-gradient(180deg, rgba(30,91,168,0.3), #0f4a9b 50%, rgba(30,91,168,0.3))' }} />
          <div className="flex flex-col gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex items-start gap-3"
              >
                <div className="absolute top-0 flex items-center justify-center w-9 h-9 rounded-full bg-white text-[13px] font-extrabold text-[#0f4a9b]" style={{ left: '-52px', border: '1px solid rgba(15,74,155,0.15)', boxShadow: '0 4px 14px rgba(15,74,155,0.12)' }}>
                  {i + 1}
                </div>
                <div className="shrink-0 w-9 h-9 rounded-xl bg-white border border-[#0f4a9b]/15 shadow-[0_3px_12px_rgba(15,74,155,0.1)] flex items-center justify-center text-[#0f4a9b]">
                  {s.icon}
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-[14px] font-extrabold text-[#0a1f3d] leading-snug mb-0.5">{s.title}</h3>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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

/* Parents Testimonial Slider: Dubai Parents */
const PARENT_REVIEWS = [
  { 
    name: 'Rashid A.', 
    initials: 'RA', 
    location: 'Dubai Hills Estate, Dubai', 
    subject: 'IB DP Physics Higher Level (HL) · Verified Google Review',
    text: 'My son at JESS Arabian Ranches was finding the new IB Physics HL syllabus overwhelming, particularly wave mechanics and his Internal Assessment (IA) data analysis. His Ustaad tutor broke down challenging multi-topic problems with extreme clarity. He went from a predicted 5 to achieving a strong 7.' 
  },
  { 
    name: 'Kavita M.', 
    initials: 'KM', 
    location: 'Emirates Hills, Dubai', 
    subject: 'Cambridge IGCSE Physics 0625 · Verified Google Review',
    text: 'Our daughter at Dubai College was losing marks on Paper 4 calculations and Paper 6 practical design. Her tutor methodically rebuilt her formula rearrangements and graph interpretation skills. Her confidence skyrocketed, and she achieved an A* in her final IGCSE exams.' 
  },
  { 
    name: 'Jonathan P.', 
    initials: 'JP', 
    location: 'Dubai Marina, UAE', 
    subject: 'Edexcel A-Level Physics (9PH0) · Verified Google Review',
    text: 'Transitioning to Year 12 Physics at Brighton College Dubai was a steep step. Ustaad provided a fantastic specialist who taught exact examiner mark-scheme phraseology for electric fields and electromagnetic induction. Truly the most reliable tutoring service in the UAE.' 
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
      <div className="relative min-h-[230px] sm:min-h-[210px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl p-5 sm:p-6 lg:p-8 overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
          >
            <div className="absolute top-3 left-4 text-[90px] font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(240,201,106,0.12)', fontFamily: 'Georgia, serif' }}>“</div>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.06) 100%)' }} />
            <div className="relative z-10">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="h-3.5 w-3.5 fill-[#f0c96a] text-[#f0c96a]" />
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
                  <p className="text-blue-200/70 text-[11px] mt-0.5 notranslate" translate="no">{r.location} · {r.subject}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls: prev arrow · dot indicators · next arrow */}
      {count > 1 && (
        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous review"
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all hover:-translate-x-0.5 cursor-pointer"
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
                className="rounded-full transition-all duration-300 cursor-pointer"
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
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all hover:translate-x-0.5 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function PhysicsTutorDubaiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const challenges: Challenge[] = [
    { 
      notation: 'ΣF=0', 
      icon: <PenTool className="h-5 w-5" />, 
      title: 'Vector Resolution & Free-Body Forces', 
      problem: 'When exam questions require resolving contact forces on inclined planes or non-perpendicular magnetic fields, students frequently forget trigonometric components or drop normal reaction forces, losing easy method marks.' 
    },
    { 
      notation: 'Δy/Δx', 
      icon: <FlaskConical className="h-5 w-5" />, 
      title: 'Paper 6 & Experimental Logic Flaws', 
      problem: 'Students lose 6 to 10 marks on practical papers by choosing awkward graph scales, drawing lines of best fit that ignore outliers, or writing vague precautions like "be careful" instead of specific control variables.' 
    },
    { 
      notation: 'E=mc²', 
      icon: <Calculator className="h-5 w-5" />, 
      title: 'Multi-Step Derivations & Unit Errors', 
      problem: 'Questions combining SUVAT kinematics, work-energy theorem, or circuit resistance collapse when students rush into calculator numbers without showing algebraic substitutions or converting Mega/Micro SI prefixes.' 
    },
  ];

  const steps: Step[] = [
    { n: '01', icon: <FileSearch className="h-6 w-6" />, title: 'Diagnostic Past-Paper Baseline', desc: "We evaluate your child's mock performance to isolate whether marks leak from mathematical derivation, concept comprehension, or practical paper logic." },
    { n: '02', icon: <Wrench className="h-6 w-6" />, title: 'First-Principles Rebuilding', desc: "Complex physics topics, from electromagnetic induction to wave superposition, are explained with visual models until thoroughly understood." },
    { n: '03', icon: <Timer className="h-6 w-6" />, title: 'Examiner-Standard Drills', desc: "Students complete timed past paper questions mapped to exact Cambridge, Edexcel, and IB mark schemes to develop sharp exam technique." },
  ];

  const journey = [
    { years: 'Year 7–9', title: 'Middle School & KS3', desc: 'Building vector intuition, metric unit conversions, and experimental thinking before GCSE pressure begins.', link: { label: 'Middle School Sciences', href: '/middle-school' } },
    { years: 'Year 10–11', title: 'IGCSE & GCSE Physics', desc: 'Cambridge 0625/0972, Edexcel 4PH1, and AQA, mastering Paper 2 MCQs, Paper 4 theory, and Paper 6 practicals.', link: { label: 'IGCSE Physics Tutor Dubai', href: '/igcse-tutor-dubai' } },
    { years: 'Year 12–13', title: 'A-Level & IB DP Physics', desc: 'Cambridge 9702, Edexcel 9PH0, and IB DP Physics (2025/2026 syllabus Themes A–E + Internal Assessment IA).', link: { label: 'A-Level Tutors Dubai', href: '/a-level' } },
  ];

  const topics = [
    { icon: <Gauge className="w-7 h-7" />, title: 'Classical Mechanics & Dynamics', desc: "SUVAT kinematics, Newton's laws of motion, circular dynamics, projectile trajectories, and momentum conservation." },
    { icon: <Zap className="w-7 h-7" />, title: 'Electricity, Magnetism & Fields', desc: "Kirchhoff's circuit rules, potential dividers, capacitance, electric fields, and Faraday & Lenz induction." },
    { icon: <Waves className="w-7 h-7" />, title: 'Oscillations, Waves & Optics', desc: 'Simple harmonic motion, Doppler effect, diffraction gratings, superposition, and total internal reflection.' },
    { icon: <Thermometer className="w-7 h-7" />, title: 'Thermal, Quantum & Nuclear', desc: 'Specific & latent heat, ideal gas laws, photoelectric effect, de Broglie wavelength, and binding energy.' },
  ];

  const paperLab = [
    { icon: <PenTool className="w-7 h-7" />, title: 'Method-Mark Mastery', desc: 'Writing structured multi-step calculations with clear formulas so method marks are secured even if arithmetic slips occur.' },
    { icon: <FlaskConical className="w-7 h-7" />, title: 'Alternative to Practical (Paper 6)', desc: 'Mastering graph axes selection, gradient determination, experimental error evaluations, and controlled variable design.' },
    { icon: <ClipboardCheck className="w-7 h-7" />, title: 'Command-Word Decoding', desc: 'Deconstructing the precise mark-scheme expectations behind "State", "Describe", "Explain", and "Deduce".' },
    { icon: <Timer className="w-7 h-7" />, title: 'Paced Mock Simulations', desc: 'Practicing authentic 75-minute and 120-minute papers under strict exam conditions to eliminate timing anxiety.' },
  ];

  const assessmentSkills = [
    { icon: <PenTool className="h-6 w-6" />, title: 'STEM Degree Specialists' },
    { icon: <ClipboardCheck className="h-6 w-6" />, title: 'Board-Specific Mastery' },
    { icon: <ShieldCheck className="h-6 w-6" />, title: 'Diagnostic-Led Lessons' },
    { icon: <CheckCircle2 className="h-6 w-6" />, title: 'Transparent Progress Reports' },
  ];

  const compareRows = [
    { label: 'Diagnostic baseline assessment before matching', ustaad: 'yes', market: 'no', school: 'no' },
    { label: 'Exact Dubai board match (0625, 4PH1, 9PH0, IB)', ustaad: 'yes', market: 'sometimes', school: 'yes' },
    { label: 'Weekly timed past-paper question drills', ustaad: 'yes', market: 'no', school: 'rare' },
    { label: 'Paper 6 / practical experimental coaching', ustaad: 'yes', market: 'no', school: 'yes' },
    { label: 'Comprehensive post-lesson parent progress tracking', ustaad: 'yes', market: 'no', school: 'no' },
  ];

  const gapChecks = [
    { q: 'Does your child know the physics formula but struggle to rearrange it algebraically for the target variable?', tag: 'Derivation Gap' },
    { q: 'Do they lose marks on 4-mark and 6-mark explanation questions for omitting examiner keywords?', tag: 'Keywords Gap' },
    { q: 'Are Paper 6 practical marks slipping due to careless graph scales or vague experimental safety comments?', tag: 'Practical Gap' },
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

      {/* SECTION 01/02: HERO */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">

        {/* PHYSICS VISUAL: Full background on desktop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full" aria-hidden="true" style={{ background: '#060f22' }}>
            <defs>
              <linearGradient id="dubaiWaveGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.15"/>
                <stop offset="40%" stopColor="#5fd3e6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#5fd3e6" stopOpacity="0.15"/>
              </linearGradient>
              <linearGradient id="dubaiOrbitGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#5fd3e6" stopOpacity="0.2"/>
              </linearGradient>
              <radialGradient id="dubaiNucleusGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22b8cd" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="0"/>
              </radialGradient>
              <filter id="dubaiPglow"><feGaussianBlur stdDeviation="3"/></filter>
              <filter id="dubaiPglow2"><feGaussianBlur stdDeviation="6"/></filter>
              <marker id="dubaiArrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
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

            {/* LEFT SIDE: Transverse wave propagation */}
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
              out.push(<polyline key="wave" points={wpts.join(' ')} fill="none" stroke="url(#dubaiWaveGrad)" strokeWidth="2.6" filter="url(#dubaiPglow)"/>);
              out.push(<line key="waxis" x1="30" y1={WY} x2="610" y2={WY} stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6"/>);
              [0.25, 0.75, 1.25, 1.75].forEach((t, i) => {
                const bx = 30 + (t / NWAVES) * 580;
                const by = WY;
                const amp = 70;
                out.push(<line key={`bar${i}`} x1={bx} y1={by - amp} x2={bx} y2={by + amp}
                  stroke="rgba(95,211,230,0.25)" strokeWidth="1.2" strokeDasharray="3 4"/>);
              });
              out.push(<line key="wavedir" x1="580" y1={WY} x2="640" y2={WY}
                stroke="rgba(95,211,230,0.7)" strokeWidth="2" markerEnd="url(#dubaiArrow)"/>);
              out.push(<text key="elbl" x="42" y={WY - WAMP - 12} fill="rgba(95,211,230,0.7)" fontSize="13" fontFamily="monospace">E</text>);
              out.push(<text key="wlbl" x="560" y={WY - 14} fill="rgba(95,211,230,0.55)" fontSize="11" fontFamily="monospace">→ λ</text>);
              out.push(<text key="fma" x="48" y="480" fill="rgba(240,201,106,0.60)" fontSize="14" fontFamily="monospace" letterSpacing="1">F = ma</text>);
              out.push(<text key="ke" x="48" y="505" fill="rgba(95,211,230,0.45)" fontSize="13" fontFamily="monospace" letterSpacing="1">½mv²</text>);
              out.push(<text key="vir" x="200" y="480" fill="rgba(180,180,255,0.40)" fontSize="13" fontFamily="monospace" letterSpacing="1">V = IR</text>);
              return out;
            })()}

            {/* RIGHT SIDE: Bohr atom simulation */}
            {(() => {
              const out: React.ReactNode[] = [];
              const AX = 1090, AY = 250;
              const orbitDefs = [
                { rx: 105, ry: 36, rot: 0,   eAng: 1.0  },
                { rx: 105, ry: 36, rot: 60,  eAng: 2.2  },
                { rx: 105, ry: 36, rot: 120, eAng: 4.5  },
              ];
              orbitDefs.forEach((o, oi) => {
                out.push(
                  <ellipse key={`orb${oi}`} cx={AX} cy={AY} rx={o.rx} ry={o.ry}
                    fill="none" stroke="url(#dubaiOrbitGrad)" strokeWidth="1.6"
                    transform={`rotate(${o.rot} ${AX} ${AY})`}
                    filter="url(#dubaiPglow)"/>
                );
                const cosA = Math.cos(o.eAng), sinA = Math.sin(o.eAng);
                const rotR = o.rot * Math.PI / 180;
                const ex = AX + (o.rx * cosA * Math.cos(rotR) - o.ry * sinA * Math.sin(rotR));
                const ey = AY + (o.rx * cosA * Math.sin(rotR) + o.ry * sinA * Math.cos(rotR));
                out.push(<circle key={`eg${oi}`} cx={ex} cy={ey} r="9" fill="rgba(95,211,230,0.2)" filter="url(#dubaiPglow)"/>);
                out.push(<circle key={`el${oi}`} cx={ex} cy={ey} r="4.5" fill="#5fd3e6"/>);
                out.push(<text key={`ellt${oi}`} x={ex + 7} y={ey - 6} fill="rgba(95,211,230,0.65)" fontSize="10" fontFamily="monospace">e⁻</text>);
              });
              out.push(<circle key="nglow2" cx={AX} cy={AY} r="36" fill="url(#dubaiNucleusGlow)" filter="url(#dubaiPglow2)"/>);
              out.push(<circle key="nglow" cx={AX} cy={AY} r="18" fill="rgba(34,184,205,0.15)"/>);
              out.push(<circle key="ncore" cx={AX} cy={AY} r="9" fill="#22b8cd" opacity="0.9"/>);
              [[-4,-3],[4,-3],[0,4]].forEach(([dx,dy],i) => {
                out.push(<circle key={`p${i}`} cx={AX+dx} cy={AY+dy} r="3" fill="rgba(255,120,100,0.8)"/>);
              });
              out.push(<text key="albl" x={AX + 120} y={AY - 40} fill="rgba(95,211,230,0.55)" fontSize="12" fontFamily="monospace">E = hf</text>);
              out.push(<text key="albl2" x={AX + 120} y={AY - 20} fill="rgba(180,180,255,0.40)" fontSize="12" fontFamily="monospace">p = mv</text>);
              const topE = (() => {
                const o = orbitDefs[0]; const cosA=Math.cos(o.eAng), sinA=Math.sin(o.eAng);
                return { x: AX + o.rx*cosA, y: AY + o.ry*sinA };
              })();
              out.push(<line key="velv" x1={topE.x} y1={topE.y} x2={topE.x + 28} y2={topE.y - 22}
                stroke="rgba(240,201,106,0.75)" strokeWidth="1.8" markerEnd="url(#dubaiArrow)"/>);
              out.push(<text key="vvlbl" x={topE.x + 32} y={topE.y - 24} fill="rgba(240,201,106,0.65)" fontSize="11" fontFamily="monospace">v</text>);
              out.push(<path key="photon" d={`M ${AX - 105} ${AY} Q ${AX - 160} ${AY - 90} ${AX - 140} ${AY - 160}`}
                fill="none" stroke="rgba(255,200,80,0.30)" strokeWidth="1.4" strokeDasharray="5 4"/>);
              out.push(<text key="photonlbl" x={AX - 145} y={AY - 170} fill="rgba(255,200,80,0.45)" fontSize="11" fontFamily="monospace">γ</text>);

              return out;
            })()}
          </svg>
        </div>

        {/* Mobile physics visual at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none z-0 md:hidden">
          <svg viewBox="0 0 800 220" preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="m-waveGradDubai" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.1"/>
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#5fd3e6" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="m-orbitGradDubai" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#5fd3e6" stopOpacity="0.2"/>
              </linearGradient>
              <radialGradient id="m-nucleusGlowDubai" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22b8cd" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="0"/>
              </radialGradient>
              <filter id="m-pglowDubai"><feGaussianBlur stdDeviation="3"/></filter>
            </defs>

            {/* Wave: left half */}
            {(() => {
              const pts: string[] = [];
              for (let i = 0; i <= 80; i++) {
                const x = 20 + (i / 80) * 320;
                const phase = (i / 80) * 2 * 2 * Math.PI;
                const fade = Math.min(1, Math.min(i / 12, (80 - i) / 12));
                pts.push(`${x},${110 - Math.sin(phase) * 55 * fade}`);
              }
              return [
                <polyline key="mwave" points={pts.join(' ')} fill="none" stroke="url(#m-waveGradDubai)" strokeWidth="2.2" filter="url(#m-pglowDubai)"/>,
                <line key="mwaxis" x1="20" y1="110" x2="340" y2="110" stroke="rgba(95,211,230,0.12)" strokeWidth="1" strokeDasharray="5 5"/>,
                <text key="mwlbl" x="26" y="34" fill="rgba(95,211,230,0.55)" fontSize="12" fontFamily="monospace">E-field wave</text>,
              ];
            })()}

            {/* Atom: right */}
            {(() => {
              const out: React.ReactNode[] = [];
              const AX = 660, AY = 110;
              [[0,80,28],[60,80,28],[120,80,28]].forEach(([rot, rx, ry], oi) => {
                out.push(<ellipse key={`morb${oi}`} cx={AX} cy={AY} rx={rx} ry={ry}
                  fill="none" stroke="url(#m-orbitGradDubai)" strokeWidth="1.4"
                  transform={`rotate(${rot} ${AX} ${AY})`} filter="url(#m-pglowDubai)"/>);
                const ang = oi * 2.1, rotR = rot * Math.PI / 180;
                const ex = AX + rx*Math.cos(ang)*Math.cos(rotR) - ry*Math.sin(ang)*Math.sin(rotR);
                const ey = AY + rx*Math.cos(ang)*Math.sin(rotR) + ry*Math.sin(ang)*Math.cos(rotR);
                out.push(<circle key={`mel${oi}`} cx={ex} cy={ey} r="4" fill="#5fd3e6"/>);
              });
              out.push(<circle key="mnglow" cx={AX} cy={AY} r="22" fill="url(#m-nucleusGlowDubai)" filter="url(#m-pglowDubai)"/>);
              out.push(<circle key="mncore" cx={AX} cy={AY} r="8" fill="#22b8cd" opacity="0.9"/>);
              return out;
            })()}
          </svg>
        </div>

        {/* ── TEXT BLOCK ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-20 md:pb-14 max-w-5xl w-full">

          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2.5"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f0c96a' }} />
            <span className="text-blue-100/80 text-[11px] sm:text-[12px] font-semibold">Trusted by Dubai families since 2015</span>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
            className="font-extrabold tracking-tight text-white leading-[1.05] mb-3 md:mb-5 text-[clamp(1.5rem,5vw,3.4rem)] max-w-[90%] sm:max-w-none">
            Elite Physics Tutoring in Dubai,{' '}
            <span style={{ background:'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Built For Exam Precision
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="text-blue-100/80 text-[clamp(0.88rem,2vw,1.02rem)] leading-relaxed max-w-2xl mb-6 md:mb-8 px-4">
            Master multi-step calculations, vector resolutions, and Paper 6 practical experiments with 1-to-1 physics specialists in Dubai.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full px-4">

            <div className="sm:hidden w-full max-w-[340px] flex flex-col items-center gap-2.5 p-3.5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}>
              <a href={BOOKING}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white transition-all hover:-translate-y-0.5"
                style={{ background:'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow:'0 4px 16px rgba(15,74,155,0.5)' }}>
                Book Your Free Trial
              </a>
              <span className="text-blue-200/50 text-[11px] -my-1">or</span>
              <a href={WA_URL} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"><WhatsAppIcon className="w-4 h-4" /> WhatsApp Us</a>
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
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 03: STATS BAR */}
      <StatsBar />

      {/* SECTION 04: WHERE PHYSICS MARKS VANISH */}
      <ChallengesCarousel challenges={challenges} />

      {/* SECTION 05: USTAAD'S ASSISTANCE */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <Eyebrow icon={<Brain className="h-3.5 w-3.5" />} text="Our Methodology" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
              Ustaad's Targeted Approach{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">For Dubai Students</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
              We eliminate exam confusion through diagnostic precision, mathematical derivations, and genuine mark-scheme fluency.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: <BookOpen className="w-7 h-7" />, title: 'Diagnostic Mark-Scheme Audit', desc: 'Every calculation step and theory definition is mapped against Cambridge and Edexcel examiner benchmarks.' },
              { icon: <Calculator className="w-7 h-7" />, title: 'Mathematical Modelling First', desc: 'Algebraic rearrangements, variable isolation, and unit conversions mastered before plugging in calculator numbers.' },
              { icon: <PenTool className="w-7 h-7" />, title: 'Diagrammatic & Practical Rigour', desc: 'Free-body vectors, ray diagrams, and Paper 6 experimental parameters trained until automatic.' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(15,74,155,0.12)' }}
                className="relative rounded-3xl p-5 sm:p-6 text-center overflow-hidden cursor-default transition-shadow duration-300"
                style={{ background: 'linear-gradient(180deg, #fafbff 0%, #f5f7ff 100%)', border: '1px solid rgba(15,74,155,0.08)' }}
              >
                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full mb-2.5"
                  style={{ background: 'linear-gradient(135deg, rgba(15,74,155,0.12) 0%, rgba(30,91,168,0.08) 100%)', boxShadow: '0 8px 24px rgba(15,74,155,0.12)' }}>
                  <div className="text-[#0f4a9b]">{card.icon}</div>
                </div>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] mb-2 leading-tight">{card.title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06: PHYSICS JOURNEY WITH USTAAD */}
      <section className="py-10 sm:py-12 lg:py-14 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0a1f3d 0%, #0f3575 50%, #0a2a6e 100%)' }}>
        <div className="absolute top-[-10%] right-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,91,168,0.35) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <PhysGrid />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6">
            <h2 className="text-xl lg:text-2xl font-extrabold text-white leading-[1.1] mb-1.5">
              Physics Journey{' '}
              <span style={{ background:'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>With Ustaad</span>
            </h2>
            <p className="text-blue-100/55 text-[13px] leading-relaxed max-w-xl mx-auto">
              From middle school fundamentals to A-Level and IB Diploma exams, we match the exact syllabus your child studies in Dubai.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {journey.map((c, i) => (
              <div key={i} className="rounded-2xl p-4 flex flex-col gap-2.5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
                style={{ background: 'rgba(15,74,155,0.18)', border: '1px solid rgba(110,168,255,0.18)' }}>
                <div className="flex flex-col gap-1.5">
                  <span className="self-start text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: 'rgba(240,201,106,0.12)', color: '#fde68a', border: '1px solid rgba(240,201,106,0.25)' }}>
                    {c.years}
                  </span>
                  <span className="font-extrabold text-[15px] text-white leading-tight">{c.title}</span>
                </div>
                <div className="h-px" style={{ background: 'rgba(110,168,255,0.12)' }} />
                <p className="text-blue-100/65 text-[12px] leading-relaxed font-medium">{c.desc}</p>
                <div className="mt-auto pt-0.5">
                  <a href={c.link.href}
                    className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full whitespace-nowrap transition-all hover:brightness-110"
                    style={{ color: '#93c5fd', background: 'rgba(15,74,155,0.3)', border: '1px solid rgba(110,168,255,0.2)' }}>
                    {c.link.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07: TRUSTED BY DUBAI SCHOOLS */}
      <SchoolsMarquee
        logoList={physicsDubaiSchoolLogos}
        header={
          <div className="text-center mb-5 sm:mb-6 max-w-2xl mx-auto">
            <p className="text-[13px] sm:text-[14px] font-bold text-[#0a1f3d] leading-relaxed mb-1">
              Tutoring physics students at Dubai's leading British, IB, and International schools since 2015.
            </p>
            <p className="text-[12px] text-gray-500 leading-relaxed">
              Including families from Dubai College, JESS Arabian Ranches, Brighton College Dubai, Repton, and Nord Anglia International School Dubai.
            </p>
          </div>
        }
      />

      {/* SECTION 08: TOPICS WE COVER */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <Eyebrow icon={<Atom className="h-3.5 w-3.5" />} text="Topic Coverage" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
              Topics{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">We Cover in Dubai</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              From classical mechanics to atomic and quantum physics, every syllabus topic taught at full exam depth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {topics.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(15,74,155,0.12)' }}
                className="relative rounded-3xl p-5 text-center overflow-hidden cursor-default transition-shadow duration-300"
                style={{ background: 'linear-gradient(180deg, #fafbff 0%, #f5f7ff 100%)', border: '1px solid rgba(15,74,155,0.08)' }}
              >
                <div className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle, rgba(15,74,155,0.15) 1px, transparent 1px)', backgroundSize: '16px 16px', maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)' }} />
                <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                  style={{ background: 'linear-gradient(135deg, rgba(15,74,155,0.12) 0%, rgba(30,91,168,0.08) 100%)', boxShadow: '0 8px 24px rgba(15,74,155,0.12)' }}>
                  <div className="text-[#0f4a9b]">{card.icon}</div>
                </div>
                <h3 className="relative z-10 text-[15px] font-extrabold text-[#0a1f3d] mb-1.5 leading-tight">{card.title}</h3>
                <p className="relative z-10 text-[13px] text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09: FROM PAPER TO LAB */}
      <section className="py-10 sm:py-12 lg:py-14 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0a1f3d 0%, #0f3575 50%, #0a2a6e 100%)' }}>
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <PhysGrid />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <Eyebrow icon={<FlaskConical className="h-3.5 w-3.5" />} text="Paper And Practical" dark />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-[1.1] mb-2">
              From Paper{' '}
              <span style={{ background:'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>To Lab</span>
            </h2>
            <p className="text-blue-100/65 text-[15px] leading-relaxed">
              Physics exams test rigorous theory and experimental skills. We cover both with mark-scheme precision.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {paperLab.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(255,255,255,0.12)' }}
                className="rounded-2xl p-5 text-left relative overflow-hidden cursor-default transition-shadow duration-300"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(110,168,255,0.18)' }}
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-full mb-3"
                  style={{ background: 'rgba(110,168,255,0.12)', border: '1px solid rgba(110,168,255,0.2)' }}>
                  <div className="text-[#93c5fd]">{card.icon}</div>
                </div>
                <h3 className="text-[15px] font-extrabold text-white mb-1.5 leading-tight">{card.title}</h3>
                <p className="text-blue-100/60 text-[13px] leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: OUR SIMPLE PROCESS */}
      <StepsCarousel steps={steps} />

      {/* SECTION 11: THE USTAAD TUTOR STANDARD */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-4">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.1] mb-2">
              The Ustaad{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Tutor Standard</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Every Ustaad physics tutor passes our rigorous vetting for curriculum mastery, subject qualifications, and teaching communication.
            </p>
          </div>

          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0f4a9b]/60 mb-5 text-center">
            Carefully Selected Tutors in Dubai
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
                    style={{ background: 'linear-gradient(135deg, #0f4a9b 0%, #1e5ba8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-tight mb-2.5">{s.title}</h3>
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
                        <linearGradient id={`pdubaiarrow-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="12" x2="48" y2="12" stroke={`url(#pdubaiarrow-grad-${i})`} strokeWidth="2.5" strokeLinecap="round" />
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
                  style={{ background: 'linear-gradient(135deg, #0f4a9b 0%, #1e5ba8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[14px] font-extrabold text-[#0a1f3d] leading-tight">{s.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a href="/tutors"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-[14px] text-white transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#0f4a9b,#1e5ba8)', boxShadow: '0 4px 16px rgba(15,74,155,0.3)' }}>
              Meet Our Tutors
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 12: INSIDE A REAL PAPER */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
              Inside A{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Real Paper</span>
            </h2>
            <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto">
              Here is one classic Cambridge 0625 / Edexcel 4PH1 question, the common pitfall, and what secures all 5 marks.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl p-5 sm:p-6 lg:p-8 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(240,248,255,0.5) 100%)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 8px 32px rgba(15,74,155,0.12)' }}
          >
            <div className="relative z-10 flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: 'rgba(15,74,155,0.06)', color: '#0f4a9b', border: '1px solid rgba(15,74,155,0.12)' }}>Cambridge 0625 & Edexcel 4PH1 Exam Sample</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(240,201,106,0.12)', color: '#C7A24A', border: '1px solid rgba(240,201,106,0.25)' }}>Theory Paper 4 · 5 marks</span>
            </div>

            <p className="relative z-10 text-[14px] sm:text-[15px] leading-[1.7] text-[#0a1f3d] font-medium mb-5 italic border-l-2 border-[#0f4a9b]/30 pl-4">
              "An electric immersion heater rated at 300 W is placed into 0.60 kg of liquid at 22 °C. The liquid reaches 70 °C in 4.0 minutes. Calculate the specific heat capacity of the liquid, assuming zero heat loss."
            </p>

            <div className="relative z-10 flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed"><span className="font-bold text-[#0a1f3d]">Common student mistake:</span> Forgetting to convert time from minutes to seconds (4.0 min = 240 s), or confusing temperature change (ΔT = 48 °C) with absolute temperature.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed"><span className="font-bold text-[#0a1f3d]">What earns all 5 marks:</span> Stating E = P × t = 300 × 240 = 72,000 J, setting E = mcΔT, rearranging c = 72,000 / (0.60 × 48) = 2,500 J/(kg·°C), with explicit standard SI units.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-0.5" />
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed"><span className="font-bold text-[#0a1f3d]">How Ustaad teaches it:</span> "Unit Audit" protocol: converting all non-SI quantities before writing the formula ensures students never lose method marks.</p>
              </div>
            </div>

            <p className="relative z-10 text-[12px] text-gray-400 mt-5 pt-4 border-t border-slate-200/60">
              Exam technique coaching prepared by Cambridge, Edexcel, and IB examiners with verified UAE grade improvements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 13: WHERE USTAAD STANDS APART */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#f4f7fc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
              Where Ustaad{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Stands Apart</span>
            </h2>
            <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto">
              Honest comparison between Ustaad, open marketplace tutors, and school-only physics support in Dubai.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,74,155,0.06)]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200" style={{ background: 'linear-gradient(135deg, #0f4a9b 0%, #1e5ba8 100%)' }}>
                  <th className="py-3 px-3 sm:px-4 text-[12px] sm:text-[13px] font-bold text-white"></th>
                  <th className="py-3 px-2 sm:px-4 text-[12px] sm:text-[13px] font-extrabold text-white text-center">Ustaad</th>
                  <th className="py-3 px-2 sm:px-4 text-[11px] sm:text-[13px] font-semibold text-blue-100/80 text-center">Marketplace tutor</th>
                  <th className="py-3 px-2 sm:px-4 text-[11px] sm:text-[13px] font-semibold text-blue-100/80 text-center">School only</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 last:border-0 ${i % 2 === 1 ? 'bg-slate-50/50' : ''}`}>
                    <td className="py-3 px-3 sm:px-4 text-[12px] sm:text-[13px] font-semibold text-[#0a1f3d]">{row.label}</td>
                    <td className="py-3 px-2 sm:px-4 text-center bg-[#0f4a9b]/[0.03]"><Mark v={row.ustaad} /></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><Mark v={row.market} /></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><Mark v={row.school} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 14: CHECK THE GAP YOURSELF */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6">
            <Eyebrow icon={<ScanSearch className="h-3.5 w-3.5" />} text="Self Diagnosis" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
              Check The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Gap Yourself</span>
            </h2>
            <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
              Three quick diagnostic questions to pinpoint where physics marks are leaking.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {gapChecks.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center justify-between gap-4 rounded-2xl p-4 sm:p-5"
                style={{ background: 'linear-gradient(180deg, #fafbff 0%, #f5f7ff 100%)', border: '1px solid rgba(15,74,155,0.1)' }}
              >
                <p className="text-[13px] sm:text-[14px] font-semibold text-[#0a1f3d] leading-snug">{g.q}</p>
                <span className="shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap" style={{ background: 'rgba(15,74,155,0.08)', color: '#0f4a9b', border: '1px solid rgba(15,74,155,0.15)' }}>{g.tag}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[13px] text-gray-500 leading-relaxed mt-5 mb-5">
            Most students experience two of three. We start with the highest-impact gap first.
          </p>
          <div className="flex justify-center">
            <GoldButton href={BOOKING} className="px-6 py-3 text-sm">
              Book Diagnostic Trial
            </GoldButton>
          </div>
        </div>
      </section>

      {/* SECTION 15: WHAT PARENTS SAY */}
      <section className="py-10 sm:py-12 lg:py-14" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 50%, #1e5ba8 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5 sm:mb-6">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                What Dubai Parents{' '}
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
          <ParentsSlider />
        </div>
      </section>

      {/* SECTION 16: FAQs */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-center justify-center text-center">
              <Eyebrow icon={<Atom className="h-3.5 w-3.5" />} text="Common Questions" />
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
                Dubai Parents{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Often Ask</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Honest answers to physics tutoring questions Dubai parents ask before their first session.
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

      {/* SECTION 17: START PHYSICS SUPPORT TODAY */}
      <FinalCTA
        title="Start Physics Support in Dubai Today"
        subtitleNode={
          <div className="text-gray-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
            <p>Book your free trial with a private physics tutor Dubai parents trust.</p>
            <p className="text-[13px] text-gray-500 mt-2">
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

      {/* SECTION 18: LOOKING FOR ANOTHER SUBJECT? */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
              Looking For{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Another Subject in Dubai?</span>
            </h2>
            <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
              Same calm, topic-rooted approach across every core subject Dubai students study.
            </p>
          </div>
          <a href="/maths-tutor-dubai"
            className="group block rounded-2xl p-5 sm:p-6 transition-all hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(180deg, #fafbff 0%, #f5f7ff 100%)', border: '1px solid rgba(15,74,155,0.12)', boxShadow: '0 4px 20px rgba(15,74,155,0.06)' }}>
            <div className="flex items-center gap-4">
              <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'linear-gradient(135deg, rgba(15,74,155,0.12) 0%, rgba(30,91,168,0.08) 100%)' }}>
                <Calculator className="w-6 h-6 text-[#0f4a9b]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[16px] font-extrabold text-[#0a1f3d] mb-1 flex items-center gap-1.5 group-hover:text-[#0f4a9b] transition-colors">
                  Maths Tutor Dubai
                </h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  For algebra, calculus, Cambridge 0580 Paper 4, IB Maths AA/AI, and the same structured problem-solving approach.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* SECTION 19: ASK A PHYSICS TUTOR */}
      <section className="py-8 sm:py-10 bg-[#f4f7fc] border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0f4a9b]/60 mb-1">Ask A Dubai Physics Tutor</p>
            <p className="text-[15px] font-semibold text-[#0a1f3d] mb-3">Send a challenging past-paper question. We'll send a worked solution.</p>
            <div className="flex flex-col gap-2 text-[12.5px] text-[#0a1f3d]/70">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
                <span>Ustaad UAE · Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
                <span>800 9005 (USTAAD) · WhatsApp +971 56 124 9005</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
                <span>
                  <a href="mailto:support@ustaad.ae" className="hover:text-[#0f4a9b] transition-colors">support@ustaad.ae</a>
                  {' · '}
                  <a href="mailto:care@ustaad.ae" className="hover:text-[#0f4a9b] transition-colors">care@ustaad.ae</a>
                </span>
              </div>
            </div>
          </div>
          <a href="https://wa.me/971561249005"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 h-11 rounded-full font-bold text-[14px] text-white transition-all hover:-translate-y-0.5 shrink-0 self-stretch sm:self-center"
            style={{ background: 'linear-gradient(135deg,#25d366,#128c4a)', boxShadow: '0 4px 14px rgba(37,211,102,0.35)' }}>
            <WhatsAppIcon className="w-[18px] h-[18px] fill-current" />
            WhatsApp Us
          </a>
        </div>
      </section>
    </Layout>
  );
}
