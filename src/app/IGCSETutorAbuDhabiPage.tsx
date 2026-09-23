import { useState, useEffect, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Atom, Zap, Waves, Thermometer, Magnet, Orbit, Gauge, Activity,
  ScanSearch, Eye, CheckCircle2, ArrowRight, X,
  ChevronDown, ChevronLeft, ChevronRight, Sparkles, FileSearch, Wrench, Timer, PenTool, ShieldCheck,
  ClipboardCheck, Brain, Target, Star, MessageCircle, FlaskConical,
  BookOpen, Calculator, MapPin, Phone, Mail, Dna, Briefcase, Microscope, ClipboardList, TrendingDown, Scale, LineChart
} from 'lucide-react';
import { Layout, GoldButton, FinalCTA, StatsBar, SchoolsMarquee } from './shared';
import { IGCSEAcademicYearPaintSection } from './shared/IGCSEAcademicYearPaintSection';
import { IGCSESubjectMicroLabsSection } from './shared/IGCSESubjectMicroLabsSection';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, courseSchema } from './shared/schemas';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20support%20with%20IGCSE.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

/* Faint grid background */
const IgcseGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'igrid-l' : 'igrid-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(15,74,155,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'igrid-l' : 'igrid-d'})`} />
  </svg>
);

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type Challenge = { notation: string; icon: ReactNode; title: string; problem: string };
type Step = { n: string; icon: ReactNode; title: string; desc: string };

const CHALLENGES: Challenge[] = [
  {
    notation: '01',
    icon: <PenTool className="w-5 h-5" />,
    title: 'Mark Scheme Wording',
    problem: 'Right idea, wrong terminology. Cambridge and Edexcel mark schemes reward specific subject keywords, not vague paraphrases.',
  },
  {
    notation: '02',
    icon: <Microscope className="w-5 h-5" />,
    title: 'Required Practical Write-ups',
    problem: 'Paper 6 and Alternative to Practical marks slip away when experimental method write-ups and variable controls read thin.',
  },
  {
    notation: '03',
    icon: <ClipboardList className="w-5 h-5" />,
    title: 'Formula and Data Sheet Traps',
    problem: 'Students memorise provided formulas while forgetting essential unit conversions and constants needed in calculation steps.',
  },
  {
    notation: '04',
    icon: <TrendingDown className="w-5 h-5" />,
    title: 'Core vs. Extended Depth Gaps',
    problem: 'Extended paper candidates often give shallow Core-level explanations, losing 2-3 marks on multi-step reasoning questions.',
  },
  {
    notation: '05',
    icon: <Scale className="w-5 h-5" />,
    title: 'Revision Weighting Mistakes',
    problem: 'Spending hours on minor chapters instead of mastering high-tariff topics that account for 60%+ of total paper marks.',
  },
  {
    notation: '06',
    icon: <LineChart className="w-5 h-5" />,
    title: 'Graph Plotting & Data Handling',
    problem: 'Easy plotting, gradient calculation, and error margin marks vanish due to rushed graph drawing under time pressure.',
  },
];

const PROCESS_STEPS: Step[] = [
  {
    n: '1',
    icon: <Brain className="w-5 h-5" />,
    title: 'Diagnostic Assessment',
    desc: 'We analyze mock paper errors to pinpoint exact syllabus topic gaps and mark scheme traps.',
  },
  {
    n: '2',
    icon: <Target className="w-5 h-5" />,
    title: 'Syllabus-Aligned Mentorship',
    desc: '1-to-1 lessons structured around your school\'s exact board (Cambridge 0580/0625 or Edexcel 4MA1/4PH1).',
  },
  {
    n: '3',
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Past-Paper Mastery',
    desc: 'Timed exam paper drills build real speed, keyword precision, and exam-day confidence.',
  },
];

const ABU_DHABI_SCHOOLS = [
  { name: 'The British International School Abu Dhabi', file: 'bisad.png' },
  { name: 'Nord Anglia International School Abu Dhabi', file: 'nord-anglia.png' },
  { name: 'Merryland International School', file: 'merryland.png' },
  { name: 'Al Basma British School', file: 'al-basma.png' },
  { name: 'Belvedere International School', file: 'belvedere.png' },
  { name: 'Creative British School', file: 'creative-british.png' },
];

const FAQS = [
  {
    q: 'How do I find a good IGCSE tutor in Abu Dhabi?',
    a: 'Start with the board. Ask whether the tutor teaches Cambridge IGCSE (0580, 0625, 0620, 0610) or Edexcel (4MA1, 4PH1, 4CH1, 4BI1). Match on the exact syllabus first, then on district or online delivery.',
  },
  {
    q: 'My child is moving from a Cambridge school to an Edexcel school in Abu Dhabi. Can you help?',
    a: 'Yes. Board switches mid-IGCSE are common in Abu Dhabi as families change schools. We move your child to a tutor who teaches the new specification and carry forward the topics already covered, so nothing restarts from zero.',
  },
  {
    q: 'Do you offer in-person IGCSE tutoring in Abu Dhabi, or only online?',
    a: 'Both. Many Abu Dhabi families choose online 1-to-1 for flexibility around school and traffic, while others prefer in-person sessions at home. We match you to a tutor who fits the format you want.',
  },
  {
    q: 'When should my child start IGCSE tutoring?',
    a: 'Ideally in Year 9 or the start of Year 10, while foundations are still being set. That said, focused Year 11 work in the final months still lifts grades by one to three points.',
  },
  {
    q: 'Do you offer group classes or one-to-one?',
    a: 'Ustaad is a one-to-one IGCSE tutoring service. Group settings can hide specific weaknesses for months; in a 1-to-1 session the tutor spots the gap in the first lesson and rebuilds it directly.',
  },
  {
    q: 'Can you help with coursework and required practicals?',
    a: 'Yes. We support IGCSE coursework in English composition and required practical write-ups across biology, chemistry and physics, using annotated whiteboards and shared documents.',
  },
  {
    q: 'What if my child does not connect with the tutor?',
    a: 'Rematching is always free. A better fit usually happens within 48 hours, and lessons pick up from where the previous tutor reached.',
  },
  {
    q: 'Do you support IGCSE students at Cranleigh Abu Dhabi or Brighton College Abu Dhabi?',
    a: 'Yes. We have active students at both schools. Cranleigh Abu Dhabi sits the Cambridge IGCSE board (CAIE); Brighton College Abu Dhabi also runs Cambridge. We match your child to a tutor already familiar with each school\'s internal mock schedule and marking style.',
  },
  {
    q: 'Does Ustaad cover both Cambridge and Edexcel IGCSE Maths?',
    a: 'Yes. Cambridge IGCSE Maths (0580) and Edexcel IGCSE Maths (4MA1) have different paper structures and mark scheme styles. Our tutors are board-specific — your child gets a tutor who teaches their exact specification, not a generic Maths tutor.',
  },
  {
    q: 'Can lessons shift to post-Iftar timing during Ramadan?',
    a: 'Yes, automatically. During Ramadan we move evening lesson slots to post-Iftar windows (typically 9 pm–11 pm UAE time) or pre-Suhoor slots on request. No re-booking needed — we adjust the schedule and confirm the new times with parents by message.',
  },
  {
    q: 'Do you help IGCSE students preparing for the November series?',
    a: 'Yes. Cambridge offers a November exam series for IGCSE, and some Abu Dhabi schools enter students for it. We run a condensed 8–10 week preparation plan focused on the specific papers available in November, with timed past-paper drills and mark scheme work from June and November series papers.',
  },
];

/* ─── Challenges Accordion (PhysicsLanding aesthetic) ─── */
function ChallengesAccordion({ challenges }: { challenges: Challenge[] }) {
  const [active, setActive] = useState<number>(0);

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

/* ─── Wave Sine Timeline Component ─── */
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
            Three calm steps from IGCSE struggle to confident exam execution.
          </p>
        </div>

        {/* Desktop Wave Timeline */}
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
                  className={`flex flex-col items-center text-center px-3 ${above ? 'justify-end pb-5' : 'invisible'}`}
                  style={{ minHeight: '140px' }}
                >
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#0f4a9b]/15 shadow-[0_4px_20px_rgba(15,74,155,0.15)] flex items-center justify-center text-[#0f4a9b] mb-3">
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
                <linearGradient id="iwaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e5ba8" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#0f4a9b" stopOpacity="1" />
                  <stop offset="100%" stopColor="#1e5ba8" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="inodeFill" x1="0%" y1="0%" x2="100%" y2="100%">
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
                    <path d={wp} fill="none" stroke="url(#iwaveGrad)" strokeWidth="2.5" strokeLinecap="round" />
                    {pts.map((p, i) => (
                      <text key={`wm${i}`} x={p.x} y={p.y + (i%2===0 ? 55 : -35)}
                        textAnchor="middle" fontSize="72" fontWeight="900"
                        fontFamily="system-ui,sans-serif" fill="rgba(15,74,155,0.06)"
                        style={{ userSelect: 'none' }}>{i + 1}</text>
                    ))}
                    {pts.map((p, i) => (
                      <g key={`nd${i}`}>
                        <circle cx={p.x} cy={p.y} r="22" fill="white" stroke="rgba(15,74,155,0.15)" strokeWidth="1.5" />
                        <circle cx={p.x} cy={p.y} r="15" fill="url(#inodeFill)" />
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
                  className={`flex flex-col items-center text-center px-3 ${below ? 'justify-start pt-5' : 'invisible'}`}
                  style={{ minHeight: '140px' }}
                >
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#0f4a9b]/15 shadow-[0_4px_20px_rgba(15,74,155,0.15)] flex items-center justify-center text-[#0f4a9b] mb-3">
                    {s.icon}
                  </div>
                  <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-1">{s.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Spine */}
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
                className="relative bg-white rounded-2xl p-4 border border-[#0f4a9b]/15 shadow-[0_4px_20px_rgba(15,74,155,0.06)]"
              >
                <div className="absolute -left-[52px] top-4 w-[34px] h-[34px] rounded-full bg-white border border-[#0f4a9b]/30 shadow-md flex items-center justify-center text-[#0f4a9b]">
                  {s.icon}
                </div>
                <h3 className="text-sm font-extrabold text-[#0a1f3d] mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main IGCSE Abu Dhabi Landing Page Component ─────────────────────────────
export default function IGCSETutorAbuDhabiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      <SEOHead
        title="IGCSE Tutor Abu Dhabi | Cambridge, Edexcel & OxfordAQA"
        description="1-to-1 IGCSE tutors Abu Dhabi. Cambridge, Edexcel, OxfordAQA. Each tutor carefully vetted by our academic and operations team. Free 30-min trial."
        canonical="/igcse-tutor-abu-dhabi"
        ogImage="/UpdatedImages/igcse-abudhabi-hero.jpg"
        placename="Abu Dhabi, UAE"
        schema={[
          cityLocalBusinessSchema({ city: 'Abu Dhabi', url: '/igcse-tutor-abu-dhabi', name: 'Ustaad — IGCSE Tutor Abu Dhabi', description: 'Cambridge and Edexcel IGCSE tutors in Abu Dhabi.' }),
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'IGCSE', url: '/igcse' }, { name: 'IGCSE Tutor Abu Dhabi', url: '/igcse-tutor-abu-dhabi' }]),
          serviceSchema('IGCSE Tutor Abu Dhabi', 'Private 1-to-1 IGCSE tutoring in Abu Dhabi across Cambridge and Edexcel.', '/igcse-tutor-abu-dhabi'),
          courseSchema({ courseName: 'IGCSE Private Tutoring Abu Dhabi', description: 'Cambridge and Edexcel IGCSE tutors in Abu Dhabi.', url: '/igcse-tutor-abu-dhabi', city: 'Abu Dhabi' }),
          faqSchema(FAQS),
        ]}
      />

      {/* ── SECTION 01: HERO CANVAS (Centered layout matching Physics page) ── */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">
        {/* ── Background SVG canvas on desktop ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.15"/>
                <stop offset="40%" stopColor="#5fd3e6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#5fd3e6" stopOpacity="0.15"/>
              </linearGradient>
              <linearGradient id="igcseStarGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0c96a"/>
                <stop offset="100%" stopColor="#C7A24A"/>
              </linearGradient>
              <radialGradient id="igcseCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22b8cd" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#060f22" stopOpacity="0"/>
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

            {/* LEFT SIDE: Transverse wave curve */}
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
              out.push(<line key="wavedir" x1="580" y1={WY} x2="640" y2={WY} stroke="rgba(95,211,230,0.7)" strokeWidth="2" markerEnd="url(#arrow)"/>);
              out.push(<text key="elbl" x="42" y={WY - WAMP - 12} fill="rgba(95,211,230,0.7)" fontSize="13" fontFamily="monospace">A*</text>);
              out.push(<text key="wlbl" x="560" y={WY - 14} fill="rgba(95,211,230,0.55)" fontSize="11" fontFamily="monospace">→ Grade 9</text>);
              out.push(<text key="c0580" x="48" y="480" fill="rgba(240,201,106,0.60)" fontSize="14" fontFamily="monospace" letterSpacing="1">Cambridge 0580</text>);
              out.push(<text key="e4ma1" x="48" y="505" fill="rgba(95,211,230,0.45)" fontSize="13" fontFamily="monospace" letterSpacing="1">Edexcel 4MA1</text>);
              out.push(<text key="c0625" x="200" y="480" fill="rgba(180,180,255,0.40)" fontSize="13" fontFamily="monospace" letterSpacing="1">CIE 0625 / 0620</text>);
              return out;
            })()}

            {/* RIGHT SIDE: IGCSE Multi-Subject Emblem & Academic Orbits */}
            {(() => {
              const out: React.ReactNode[] = [];
              const AX = 1100, AY = 260;
              // Concentric glowing academic rings
              out.push(<circle key="iglowbg" cx={AX} cy={AY} r="140" fill="url(#igcseCoreGlow)"/>);
              out.push(<circle key="irings1" cx={AX} cy={AY} r="95" fill="none" stroke="rgba(95,211,230,0.25)" strokeWidth="1.5" strokeDasharray="6 6"/>);
              out.push(<circle key="irings2" cx={AX} cy={AY} r="65" fill="none" stroke="url(#igcseStarGrad)" strokeWidth="2" opacity="0.6"/>);
              out.push(<circle key="irings3" cx={AX} cy={AY} r="35" fill="rgba(15,74,155,0.4)" stroke="rgba(240,201,106,0.5)" strokeWidth="1.5"/>);
              out.push(<text key="astar" x={AX} y={AY + 7} textAnchor="middle" fill="#f0c96a" fontSize="22" fontWeight="900" fontFamily="sans-serif">A*</text>);

              // Floating subject notation labels around ring
              out.push(<text key="lbl_m" x={AX + 105} y={AY - 60} fill="rgba(95,211,230,0.7)" fontSize="12" fontFamily="monospace">dy/dx = 2x</text>);
              out.push(<text key="lbl_c" x={AX - 160} y={AY - 40} fill="rgba(240,201,106,0.65)" fontSize="12" fontFamily="monospace">C₆H₁₂O₆</text>);
              out.push(<text key="lbl_b" x={AX + 80} y={AY + 80} fill="rgba(180,180,255,0.6)" fontSize="12" fontFamily="monospace">DNA 0610</text>);
              out.push(<text key="lbl_e" x={AX - 150} y={AY + 90} fill="rgba(95,211,230,0.55)" fontSize="12" fontFamily="monospace">Mark Scheme</text>);

              return out;
            })()}
          </svg>
        </div>

        {/* Mobile visual at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none z-0 md:hidden">
          <svg viewBox="0 0 800 220" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="m-waveGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.1"/>
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#5fd3e6" stopOpacity="0.1"/>
              </linearGradient>
              <radialGradient id="m-nucleusGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22b8cd" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="0"/>
              </radialGradient>
              <filter id="m-pglow"><feGaussianBlur stdDeviation="3"/></filter>
            </defs>
            {(() => {
              const pts: string[] = [];
              for (let i = 0; i <= 80; i++) {
                const x = 20 + (i / 80) * 320;
                const phase = (i / 80) * 2 * 2 * Math.PI;
                const fade = Math.min(1, Math.min(i / 12, (80 - i) / 12));
                pts.push(`${x},${110 - Math.sin(phase) * 55 * fade}`);
              }
              return [
                <polyline key="mwave" points={pts.join(' ')} fill="none" stroke="url(#m-waveGrad)" strokeWidth="2.2" filter="url(#m-pglow)"/>,
                <line key="mwaxis" x1="20" y1="110" x2="340" y2="110" stroke="rgba(95,211,230,0.12)" strokeWidth="1" strokeDasharray="5 5"/>,
              ];
            })()}
          </svg>
        </div>

        {/* ── CENTERED TEXT BLOCK ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-20 md:pb-14 max-w-5xl w-full"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2.5"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f0c96a' }} />
            <span className="text-blue-100/80 text-[11px] sm:text-[12px] font-semibold">Trusted by Abu Dhabi families since 2015</span>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
            className="font-extrabold tracking-tight text-white leading-[1.05] mb-3 md:mb-5 text-[clamp(1.5rem,5vw,3.4rem)] max-w-[90%] sm:max-w-none"
          >
            Master IGCSE,{' '}
            <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Step By Step
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="text-blue-100/80 text-[clamp(0.88rem,2vw,1.02rem)] leading-relaxed max-w-2xl mb-6 md:mb-8 px-4"
          >
            Cambridge and Edexcel IGCSE tutors Abu Dhabi parents trust for steady, real exam progress.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full px-4"
          >
            <div className="sm:hidden w-full max-w-[340px] flex flex-col items-center gap-2.5 p-3.5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}>
              <a href={BOOKING}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 16px rgba(15,74,155,0.5)' }}>
                Book Your Free Trial
              </a>
              <span className="text-blue-200/50 text-[11px] -my-1">or</span>
              <a href={WA_URL} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
              <p className="text-blue-200/50 text-[11px] mt-1">No commitment. Cancel anytime.</p>
            </div>

            <div className="hidden sm:flex items-start justify-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <a href={BOOKING}
                  className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[15px] md:text-base text-white transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 18px rgba(15,74,155,0.55)' }}>
                  Book Your Free Trial
                </a>
                <p className="text-blue-200/50 text-[11px]">No commitment. Cancel anytime.</p>
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

      {/* ── SECTION 02: FLOATING STATS BAR ── */}
      <StatsBar />

      {/* ── SECTION 03: WHERE IGCSE MARKS VANISH (Accordion) ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full mb-5">
                <Target className="h-4 w-4" />
                <span className="text-sm font-bold">Exam Insight</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
                Where IGCSE{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">
                  Marks Vanish
                </span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Small habits across Cambridge & Edexcel papers that quietly cost 1 to 3 grade boundaries every year in Abu Dhabi.
              </p>
            </div>

            <ChallengesAccordion challenges={CHALLENGES} />
          </div>
        </div>
      </section>

      {/* ── SECTION 04: HOW WE PLAN THE IGCSE YEAR (3D ANIMATED PAINT SECTION) ── */}
      <IGCSEAcademicYearPaintSection />

      {/* ── SECTION A: MEET YOUR IGCSE TUTORS ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#f4f7fc] relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold mb-1.5 uppercase tracking-widest text-[#0a1f3d]"
              style={{ background: 'linear-gradient(135deg, rgba(15,74,155,0.06), rgba(201,162,76,0.14))', border: '1px solid rgba(201,162,76,0.35)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a24c]" />
              Your IGCSE Tutors
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0a1f3d] mb-1"
              style={{ fontFamily: 'var(--font-serif,"Fraunces",Georgia,serif)', letterSpacing: '-.01em' }}>
              Meet Your IGCSE Tutors
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-lg mx-auto">
              Each tutor is carefully vetted by our academic and operations team before taking a single IGCSE session.
            </p>
          </div>

          {/* Cards container: horizontal swipe on mobile, 2-col grid on tablet/desktop */}
          <div className="flex sm:grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-none">

            {/* ── FAHAD KHAN ── */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-[84vw] max-w-[340px] sm:w-auto sm:max-w-none shrink-0 snap-center relative bg-white rounded-2xl overflow-visible transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between"
              style={{ padding: '16px 18px 14px', boxShadow: '0 6px 22px rgba(10,31,60,0.06), 0 0 0 1px rgba(201,162,76,0.22)' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 30px rgba(10,31,60,0.12), 0 0 0 1px rgba(201,162,76,0.45)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 6px 22px rgba(10,31,60,0.06), 0 0 0 1px rgba(201,162,76,0.22)')}
            >
              <div>
                {/* Photo + speech bubble */}
                <div className="flex items-start gap-3 mb-2.5">
                  {/* Circular photo with classy gold border */}
                  <div className="relative flex-shrink-0">
                    <div className="w-[66px] h-[66px] sm:w-[76px] sm:h-[76px] rounded-full overflow-hidden border-2 border-[#c9a24c]"
                      style={{ background: 'linear-gradient(135deg,#0a1f3d,#12305a)', boxShadow: '0 4px 14px rgba(10,31,60,0.22)' }}>
                      <img src="/images/tutors/fahad-khan-cover.jpg" alt="Fahad Khan, IGCSE Maths tutor at Ustaad Abu Dhabi"
                        className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    {/* soft gold outer ring */}
                    <div className="absolute rounded-full border border-[#c9a24c]/35 pointer-events-none" style={{ inset: -3 }} />
                  </div>

                  {/* Speech bubble with classy gold border & soft ivory-blue background */}
                  <div className="relative flex-1 min-w-0 rounded-xl rounded-tl-xs border border-[#c9a24c]/30"
                    style={{ background: 'linear-gradient(135deg,#fefdfa 0%,#f4f7fc 100%)', padding: '8px 12px', boxShadow: '0 2px 10px rgba(10,31,60,0.04)' }}>
                    {/* CSS tail */}
                    <span className="absolute border-l border-b border-[#c9a24c]/30 rounded-bl-xs"
                      style={{ top: 22, left: -6, width: 11, height: 11, background: 'linear-gradient(135deg,#fefdfa 0%,#f4f7fc 100%)', transform: 'rotate(45deg)' }} />
                    {/* gold open-quote */}
                    <span className="absolute select-none pointer-events-none"
                      style={{ top: -5, left: 6, fontFamily: 'var(--font-serif,"Fraunces",Georgia,serif)', fontWeight: 700, fontSize: '1.6rem', color: 'rgba(201,162,76,0.55)', lineHeight: 1 }}>"</span>
                    <p className="leading-snug pl-3 text-[#0a1f3d]"
                      style={{ fontFamily: 'var(--font-serif,"Fraunces",Georgia,serif)', fontStyle: 'italic', fontWeight: 500, fontSize: '.80rem' }}>
                      I start every IGCSE student on a diagnostic paper before we plan the term. It tells us exactly which topics need daylight.
                    </p>
                  </div>
                </div>

                {/* Name + role */}
                <div className="mb-2">
                  <h3 className="leading-tight text-[#0a1f3d]"
                    style={{ fontFamily: 'var(--font-serif,"Fraunces",Georgia,serif)', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '-.005em' }}>
                    Fahad Khan
                  </h3>
                  <div className="mt-0.5 font-semibold uppercase text-[#0f4a9b]" style={{ fontSize: '.68rem', letterSpacing: '.08em' }}>IGCSE Maths Lead · Ustaad UAE</div>
                </div>

                {/* Credentials */}
                <ul className="flex flex-col gap-1 py-1.5 mb-2" style={{ borderTop: '1px solid rgba(10,31,60,0.07)', borderBottom: '1px solid rgba(10,31,60,0.07)' }}>
                  {[
                    { b: 'BS Mathematics, B.Ed', r: ' · 10+ yrs teaching' },
                    { b: '', r: 'Cambridge 0580 & Edexcel 4MA1' },
                    { b: 'Specialism:', r: ' rebuilding algebra confidence from Year 9' },
                  ].map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-[#334155]" style={{ fontSize: '.75rem', lineHeight: 1.3 }}>
                      <span className="flex-shrink-0 rounded-full flex items-center justify-center mt-0.5"
                        style={{ width: 13, height: 13, background: 'linear-gradient(135deg,#e4c069,#c9a24c)' }}>
                        <svg viewBox="0 0 12 12" fill="none" stroke="#0a1f3d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 6.5, height: 6.5 }}><path d="M2 6.5 L5 9.5 L10 3"/></svg>
                      </span>
                      <span>{c.b && <strong style={{ color: '#0a1f3d', fontWeight: 600 }}>{c.b}</strong>}{c.r}</span>
                    </li>
                  ))}
                </ul>

                {/* Subject chips */}
                <div className="flex flex-wrap gap-1 mb-2.5">
                  {['IGCSE Maths', 'Cambridge', 'Edexcel', 'Extended Tier'].map((s, idx) => (
                    <span key={s} className="rounded-full font-semibold"
                      style={{
                        fontSize: '.64rem',
                        padding: '2px 8px',
                        letterSpacing: '.02em',
                        background: idx % 2 === 0 ? 'rgba(201,162,76,0.12)' : 'rgba(15,74,155,0.06)',
                        border: idx % 2 === 0 ? '1px solid rgba(201,162,76,0.28)' : '1px solid rgba(15,74,155,0.15)',
                        color: idx % 2 === 0 ? '#0a1f3d' : '#0f4a9b'
                      }}>{s}</span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#0a1f3d]/07">
                <div className="flex items-center gap-1 text-[#64748b]" style={{ fontSize: '.66rem', fontWeight: 500 }}>
                  <span className="flex">
                    {['FZ','NI'].map((init, i) => (
                      <span key={init} className="rounded-full flex items-center justify-center font-bold border border-white"
                        style={{ width: 18, height: 18, fontSize: '.5rem', background: 'linear-gradient(135deg,#0a1f3d,#12305a)', color: '#e4c069', marginLeft: i === 0 ? 0 : -4 }}>{init}</span>
                    ))}
                  </span>
                  Signed off by FZ &amp; NI
                </div>
                <a href="/tutors/fahad-khan"
                  className="inline-flex items-center gap-1 font-bold text-white rounded-md transition-all hover:scale-[1.02]"
                  style={{
                    padding: '5px 12px',
                    fontSize: '.74rem',
                    background: 'linear-gradient(135deg,#0a1f3d,#0f4a9b)',
                    border: '1px solid rgba(201,162,76,0.35)',
                    boxShadow: '0 2px 8px rgba(10,31,60,0.20)'
                  }}>
                  Profile <ArrowRight className="w-2.5 h-2.5 text-[#e4c069]" />
                </a>
              </div>
            </motion.article>

            {/* ── TABRAIZ KHAN ── */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="w-[84vw] max-w-[340px] sm:w-auto sm:max-w-none shrink-0 snap-center relative bg-white rounded-2xl overflow-visible transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between"
              style={{ padding: '16px 18px 14px', boxShadow: '0 6px 22px rgba(10,31,60,0.06), 0 0 0 1px rgba(201,162,76,0.22)' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 30px rgba(10,31,60,0.12), 0 0 0 1px rgba(201,162,76,0.45)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 6px 22px rgba(10,31,60,0.06), 0 0 0 1px rgba(201,162,76,0.22)')}
            >
              <div>
                {/* Photo + speech bubble */}
                <div className="flex items-start gap-3 mb-2.5">
                  <div className="relative flex-shrink-0">
                    <div className="w-[66px] h-[66px] sm:w-[76px] sm:h-[76px] rounded-full overflow-hidden border-2 border-[#c9a24c]"
                      style={{ background: 'linear-gradient(135deg,#0a1f3d,#12305a)', boxShadow: '0 4px 14px rgba(10,31,60,0.22)' }}>
                      <img src="/images/tutors/tabraiz-khan-cover.jpg" alt="Tabraiz Khan, IGCSE triple science and Maths tutor at Ustaad Abu Dhabi"
                        className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="absolute rounded-full border border-[#c9a24c]/35 pointer-events-none" style={{ inset: -3 }} />
                  </div>

                  <div className="relative flex-1 min-w-0 rounded-xl rounded-tl-xs border border-[#c9a24c]/30"
                    style={{ background: 'linear-gradient(135deg,#fefdfa 0%,#f4f7fc 100%)', padding: '8px 12px', boxShadow: '0 2px 10px rgba(10,31,60,0.04)' }}>
                    <span className="absolute border-l border-b border-[#c9a24c]/30 rounded-bl-xs"
                      style={{ top: 22, left: -6, width: 11, height: 11, background: 'linear-gradient(135deg,#fefdfa 0%,#f4f7fc 100%)', transform: 'rotate(45deg)' }} />
                    <span className="absolute select-none pointer-events-none"
                      style={{ top: -5, left: 6, fontFamily: 'var(--font-serif,"Fraunces",Georgia,serif)', fontWeight: 700, fontSize: '1.6rem', color: 'rgba(201,162,76,0.55)', lineHeight: 1 }}>"</span>
                    <p className="leading-snug pl-3 text-[#0a1f3d]"
                      style={{ fontFamily: 'var(--font-serif,"Fraunces",Georgia,serif)', fontStyle: 'italic', fontWeight: 500, fontSize: '.80rem' }}>
                      IGCSE mark schemes reward structure. My job is to make that structure automatic before the exam room.
                    </p>
                  </div>
                </div>

                {/* Name + role */}
                <div className="mb-2">
                  <h3 className="leading-tight text-[#0a1f3d]"
                    style={{ fontFamily: 'var(--font-serif,"Fraunces",Georgia,serif)', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '-.005em' }}>
                    Tabraiz Khan
                  </h3>
                  <div className="mt-0.5 font-semibold uppercase text-[#0f4a9b]" style={{ fontSize: '.68rem', letterSpacing: '.08em' }}>Cambridge Certified · Maths &amp; Physics</div>
                </div>

                {/* Credentials */}
                <ul className="flex flex-col gap-1 py-1.5 mb-2" style={{ borderTop: '1px solid rgba(10,31,60,0.07)', borderBottom: '1px solid rgba(10,31,60,0.07)' }}>
                  {[
                    { b: "Master's in Statistics", r: ' · Cambridge Certified' },
                    { b: '', r: '9 yrs across IGCSE Maths, Physics & Add Maths' },
                    { b: 'Specialism:', r: ' students juggling 3 sciences with Extended Maths' },
                  ].map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-[#334155]" style={{ fontSize: '.75rem', lineHeight: 1.3 }}>
                      <span className="flex-shrink-0 rounded-full flex items-center justify-center mt-0.5"
                        style={{ width: 13, height: 13, background: 'linear-gradient(135deg,#e4c069,#c9a24c)' }}>
                        <svg viewBox="0 0 12 12" fill="none" stroke="#0a1f3d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 6.5, height: 6.5 }}><path d="M2 6.5 L5 9.5 L10 3"/></svg>
                      </span>
                      <span>{c.b && <strong style={{ color: '#0a1f3d', fontWeight: 600 }}>{c.b}</strong>}{c.r}</span>
                    </li>
                  ))}
                </ul>

                {/* Subject chips */}
                <div className="flex flex-wrap gap-1 mb-2.5">
                  {['IGCSE Maths', 'IGCSE Physics', 'Cambridge Certified', 'Additional Maths'].map((s, idx) => (
                    <span key={s} className="rounded-full font-semibold"
                      style={{
                        fontSize: '.64rem',
                        padding: '2px 8px',
                        letterSpacing: '.02em',
                        background: idx % 2 === 0 ? 'rgba(201,162,76,0.12)' : 'rgba(15,74,155,0.06)',
                        border: idx % 2 === 0 ? '1px solid rgba(201,162,76,0.28)' : '1px solid rgba(15,74,155,0.15)',
                        color: idx % 2 === 0 ? '#0a1f3d' : '#0f4a9b'
                      }}>{s}</span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#0a1f3d]/07">
                <div className="flex items-center gap-1 text-[#64748b]" style={{ fontSize: '.66rem', fontWeight: 500 }}>
                  <span className="flex">
                    {['FZ','NI'].map((init, i) => (
                      <span key={init} className="rounded-full flex items-center justify-center font-bold border border-white"
                        style={{ width: 18, height: 18, fontSize: '.5rem', background: 'linear-gradient(135deg,#0a1f3d,#12305a)', color: '#e4c069', marginLeft: i === 0 ? 0 : -4 }}>{init}</span>
                    ))}
                  </span>
                  Signed off by FZ &amp; NI
                </div>
                <a href="/tutors/tabraiz-khan"
                  className="inline-flex items-center gap-1 font-bold text-white rounded-md transition-all hover:scale-[1.02]"
                  style={{
                    padding: '5px 12px',
                    fontSize: '.74rem',
                    background: 'linear-gradient(135deg,#0a1f3d,#0f4a9b)',
                    border: '1px solid rgba(201,162,76,0.35)',
                    boxShadow: '0 2px 8px rgba(10,31,60,0.20)'
                  }}>
                  Profile <ArrowRight className="w-2.5 h-2.5 text-[#e4c069]" />
                </a>
              </div>
            </motion.article>

          </div>

          {/* Mobile swipe hint */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-2 text-[11px] text-[#0f4a9b]/70 font-medium">
            <span>Swipe for more tutors</span>
            <ArrowRight className="w-3 h-3 animate-pulse text-[#c9a24c]" />
          </div>

        </div>
      </section>

      {/* ── SECTION 05: IGCSE SUBJECT HUB (INTERACTIVE MICRO-LABS) ── */}
      <IGCSESubjectMicroLabsSection />

      {/* ── SECTION 06: EXAM BOARDS (CAIE & Edexcel) ── */}
      <section className="py-14 lg:py-18 bg-[#f4f7fc] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3">
              Exam Boards
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">
              Which Board Does Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">
                Abu Dhabi School Sit?
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Two IGCSE boards run across Abu Dhabi schools. We tutor both, matching your child's exact board.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-2xl border border-[#0f4a9b]/20 p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_8px_30px_rgba(15,74,155,0.12)] transition-all">
              <h3 className="text-lg font-extrabold mb-2 text-[#0f4a9b]">Cambridge IGCSE (CAIE)</h3>
              <div className="w-12 h-1 bg-[#0f4a9b] rounded-full mb-3" />
              <p className="text-xs sm:text-sm text-[#3a4f6e] leading-relaxed mb-4">
                Sat by many British-curriculum schools in Abu Dhabi. Longer application questions; mark schemes reward exact terminology.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {['0580', '0625', '0620', '0610', '0500', '0450'].map(code => (
                  <span key={code} className="px-2.5 py-1 text-xs font-bold rounded-full border border-[#0f4a9b]/25 text-[#0f4a9b] bg-[#f4f7fc]">{code}</span>
                ))}
              </div>
              <div className="text-[11px] text-slate-500 leading-snug">
                <span className="font-semibold text-[#0f4a9b]/70">Schools include:</span>{' '}BSAK · Cranleigh Abu Dhabi · Repton Abu Dhabi
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#C7A24A]/40 p-6 sm:p-8 shadow-[0_4px_20px_rgba(199,162,74,0.08)] hover:shadow-[0_8px_30px_rgba(199,162,74,0.14)] transition-all">
              <h3 className="text-lg font-extrabold mb-2 text-[#8a6a2f]">Edexcel IGCSE (Pearson)</h3>
              <div className="w-12 h-1 bg-[#f0c96a] rounded-full mb-3" />
              <p className="text-xs sm:text-sm text-[#3a4f6e] leading-relaxed mb-4">
                Sat by several Abu Dhabi schools. Close-marked calculation, structured reasoning, and rapid formula applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {['4MA1', '4PH1', '4CH1', '4BI1'].map(code => (
                  <span key={code} className="px-2.5 py-1 text-xs font-bold rounded-full border border-[#f0c96a]/40 text-[#8a6a2f] bg-[#fffdf5]">{code}</span>
                ))}
              </div>
              <div className="text-[11px] text-slate-500 leading-snug">
                <span className="font-semibold text-[#8a6a2f]/70">Schools include:</span>{' '}GEMS World Academy AD · Al Bateen Academy · Reach British
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 06.7: COMMAND WORD DECODER ── */}
      <section className="py-14 lg:py-18 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3 uppercase tracking-widest">
              Exam Technique
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">
              The IGCSE Command Word Decoder
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
              Four exam command words parents can decode in two minutes. Left shows the common misread; right shows what the mark scheme actually rewards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                word: '"State"',
                thinks: 'Write a fact.',
                rewards: 'One clear sentence, no context. One mark, one answer, move on.',
              },
              {
                word: '"Describe"',
                thinks: 'Write what it looks like.',
                rewards: 'Observations in order; do not include the reason yet.',
              },
              {
                word: '"Explain"',
                thinks: 'Write a lot to be safe.',
                rewards: 'The reason, cause linked to effect, exact subject terminology.',
              },
              {
                word: '"Evaluate"',
                thinks: 'Give an opinion.',
                rewards: 'Two sides weighed, evidence for each, conclusion in the final line.',
              },
            ].map((cw, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,74,155,0.15)' }}
                className="rounded-2xl p-5 flex flex-col gap-4 cursor-default"
                style={{ background: 'rgba(15,74,155,0.06)', border: '1px solid rgba(15,74,155,0.15)', transition: 'border-color 200ms ease' }}
              >
                <div className="text-lg font-extrabold text-[#0a1f3d]">{cw.word}</div>
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="text-[10px] font-bold text-[#0f4a9b]/60 uppercase tracking-wider mb-1">Student thinks</div>
                    <div className="text-[13px] text-[#3a4f6e] leading-snug">{cw.thinks}</div>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-[#0f4a9b] font-bold text-xs mt-0.5 shrink-0">›</span>
                    <div>
                      <div className="text-[10px] font-bold text-[#0f4a9b] uppercase tracking-wider mb-1">Mark scheme rewards</div>
                      <div className="text-[13px] text-[#0a1f3d] font-semibold leading-snug">{cw.rewards}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 07: ABU DHABI SCHOOL LOGOS ── */}
      <section className="py-14 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3">
              Abu Dhabi Schools
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d]">
              Trusted by Students from Top Abu Dhabi Schools
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {ABU_DHABI_SCHOOLS.map((logo, idx) => (
              <div key={idx} className="w-full h-[140px] sm:h-[160px] flex items-center justify-center rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_4px_16px_rgba(15,74,155,0.05)] px-4 py-5 cursor-default relative overflow-hidden transition-transform hover:-translate-y-0.5">
                <img
                  src={`/school-logos/${logo.file}`}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    e.currentTarget.nextElementSibling?.classList.add('flex');
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center p-4 text-center bg-white text-[12px] font-bold text-[#0a1f3d] leading-tight">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 08: WHERE OUR IGCSE STUDENTS LIVE (DISTRICT TABLE) ── */}
      <section className="py-14 bg-[#f8fafe] border-b border-[#0f4a9b]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-[#0a1f3d] mb-2">Where Our IGCSE Students Live</h2>
            <p className="text-xs sm:text-sm text-gray-600">Online and home tutoring across all primary Abu Dhabi districts.</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200/80 shadow-sm max-w-4xl mx-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#0f4a9b]/5 border-b border-slate-200/80 text-[#0a1f3d] font-extrabold">
                  <th className="p-3.5 sm:p-4">District</th>
                  <th className="p-3.5 sm:p-4">Notable IGCSE Schools</th>
                  <th className="p-3.5 sm:p-4">Typical Session Slots</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-gray-700 font-medium">
                {[
                  { district: 'Khalifa City', schools: 'BSAK, Cranleigh, Repton', slots: 'Weekday evenings' },
                  { district: 'Al Reem Island', schools: 'Repton Al Reem, Reach British', slots: 'Weekend mornings' },
                  { district: 'Saadiyat Island', schools: 'Brighton College, Cranleigh Saadiyat', slots: 'Weekday evenings' },
                  { district: 'MBZ City', schools: 'American International, GEMS American', slots: 'Weekend evenings' },
                  { district: 'Yas Reef', schools: 'West Yas Academy, Yasmina British', slots: 'Weekday and weekend' },
                  { district: 'Al Mushrif', schools: 'Al Yasmina, Merryland International', slots: 'Weekend afternoons' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-[#0a1f3d] flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
                      {row.district}
                    </td>
                    <td className="p-3.5 sm:p-4">{row.schools}</td>
                    <td className="p-3.5 sm:p-4 text-gray-500">{row.slots}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


        </div>
      </section>

      {/* ── SECTION 09: FAQS (2-Column Accordion Matching Screenshot Reference) ── */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
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
                Honest answers to the IGCSE questions Abu Dhabi parents ask before their first session.
              </p>
            </motion.div>

            {/* Right Accordion Column */}
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

      {/* ── SECTION 10: EXPLORE DEDICATED SUBJECT HUBS ── */}
      <section className="py-12 sm:py-16 bg-[#f8fafc] border-t border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center sm:text-left mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold mb-2 uppercase tracking-widest text-[#0f4a9b] bg-[#0f4a9b]/06 border border-[#0f4a9b]/15">
              <Sparkles className="w-3 h-3 text-[#c9a24c]" />
              Subject Hubs
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0a1f3d]" style={{ fontFamily: 'var(--font-serif,"Fraunces",Georgia,serif)' }}>
              Explore Dedicated IGCSE Subject Pages
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-2xl">
              Detailed syllabus breakdowns, past paper methodologies &amp; tutor profiles for each discipline across Abu Dhabi.
            </p>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-none">
            {[
              {
                title: 'Maths Tutor',
                location: 'Abu Dhabi',
                syllabus: '0580 · 4MA1',
                href: '/maths-tutor-abu-dhabi',
                Icon: Calculator,
                desc: 'Algebra, calculus, statistics & exam past-paper strategy.',
                badgeColor: 'bg-blue-50 text-[#0f4a9b] border-blue-200/60',
              },
              {
                title: 'Physics Tutor',
                location: 'Abu Dhabi',
                syllabus: '0625 · 4PH1',
                href: '/physics-tutor-abu-dhabi',
                Icon: Atom,
                desc: 'Mechanics, electricity, waves & practical Paper 6 prep.',
                badgeColor: 'bg-amber-50 text-[#b45309] border-amber-200/60',
              },
              {
                title: 'Chemistry Tutor',
                location: 'Abu Dhabi',
                syllabus: '0620 · 4CH1',
                href: '/chemistry-tutor-abu-dhabi',
                Icon: FlaskConical,
                desc: 'Stoichiometry, organic chemistry & experimental methods.',
                badgeColor: 'bg-emerald-50 text-[#047857] border-emerald-200/60',
              },
              {
                title: 'Biology Tutor',
                location: 'Abu Dhabi',
                syllabus: '0610 · 4BI1',
                href: '/biology-tutor-abu-dhabi',
                Icon: Dna,
                desc: 'Genetics, physiology, ecology & 6-mark extended answers.',
                badgeColor: 'bg-indigo-50 text-[#4338ca] border-indigo-200/60',
              },
            ].map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="w-[78vw] max-w-[280px] sm:w-auto sm:max-w-none shrink-0 snap-center group relative bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-[#c9a24c]/60 shadow-[0_4px_16px_rgba(10,31,60,0.04)] hover:shadow-[0_10px_28px_rgba(10,31,60,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top-right accent glow on hover */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-[#c9a24c]/10 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, rgba(15,74,155,0.08), rgba(201,162,76,0.12))', border: '1px solid rgba(201,162,76,0.25)' }}
                    >
                      <card.Icon className="w-5 h-5 text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors" />
                    </div>
                    <span className={`text-[10.5px] font-mono font-bold px-2 py-0.5 rounded-full border ${card.badgeColor}`}>
                      {card.syllabus}
                    </span>
                  </div>

                  <h3 className="text-[15px] font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-1 leading-snug">
                    {card.title}
                  </h3>
                  <div className="text-[11.5px] font-semibold text-[#c9a24c] mb-2.5">
                    {card.location}
                  </div>
                  <p className="text-[12.5px] text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0f4a9b] group-hover:text-[#0a1f3d] transition-colors">
                  <span>View Subject Details</span>
                  <span className="text-[#c9a24c] transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile swipe hint */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-3 text-[11px] text-[#0f4a9b]/70 font-medium">
            <span>Swipe for more subjects</span>
            <span className="text-[#c9a24c] animate-pulse">→</span>
          </div>

        </div>
      </section>

      {/* ── SECTION 05: WHAT PARENTS SAY ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              What <span style={{ color: '#f0c96a' }}>Parents Say</span>
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs text-white/90 font-semibold self-start sm:self-auto">
              <span className="text-[#f0c96a] tracking-tighter">★★★★★</span>
              <span>5.0 · Verified Google Review</span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-2xl relative text-left">
            <div className="text-6xl font-serif text-white/15 absolute top-3 left-6 select-none pointer-events-none">
              “
            </div>
            <p className="relative z-10 text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-6 pt-2">
              Very good site if you want a good teacher for your studies. The tutors really know how to make difficult topics easy to understand.
            </p>
            <div className="flex items-center gap-3.5 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-sm shadow-inner shrink-0">
                HK
              </div>
              <div>
                <div className="font-extrabold text-white text-base leading-tight">Humaid Khalaf</div>
                <div className="text-blue-200/70 text-xs mt-0.5">Abu Dhabi, UAE · IGCSE Parent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Start IGCSE Support Today"
        subtitle="No commitment. Weekend and evening slots. UAE-registered since 2015."
        button1Text="Book Free Diagnostic"
        button2Text="Ask Question on WhatsApp"
        subtext2="Send any IGCSE past-paper question; a tutor replies within 15 minutes with a worked solution."
      />
    </Layout>
  );
}
