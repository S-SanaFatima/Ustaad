import { useState, useEffect, useRef, type ReactNode } from 'react';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import {
  Calculator, Sigma, FunctionSquare, LineChart,
  Brackets, Compass, Network, ScanSearch, Workflow, ShieldCheck,
  ClipboardCheck, Timer, PenTool, Gauge, CheckCircle2,
  ChevronDown, ChevronLeft, ChevronRight, Plus, Sparkles, MapPin, FileSearch, Wrench, ListChecks,
  BookOpen, FlaskConical,
  Route as RouteIcon, Brain, Target, Eye, Star, Atom, MessageCircle, Users,
  Calendar, TrendingUp, Award,
} from 'lucide-react';

import { Layout, GoldButton, FinalCTA, StatsBar, SchoolsMarquee, WhatsAppIcon, TypewriterHeadingText } from './shared';


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

const Eyebrow = ({ icon, text, dark = false }: { icon: React.ReactNode; text: string; dark?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-5 border ${dark ? 'bg-white/5 border-white/15 text-blue-200' : 'bg-[#0f4a9b]/5 border-[#0f4a9b]/15 text-[#0f4a9b]'}`}>
    {icon}{text}
  </div>
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
  const sectionRef = useRef<HTMLElement>(null);
  const inViewRef = useRef(false);
  const [animCycle, setAnimCycle] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!inViewRef.current) {
            setAnimCycle((prev) => prev + 1);
          }
          inViewRef.current = true;
        } else {
          inViewRef.current = false;
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2} />,
      title: "Not a directory.",
      desc: "One point of contact, one matched tutor, one accountable team behind every lesson.",
      highlight: "Accountable & Matched",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2} />,
      title: "UAE-licensed since 2015.",
      desc: "The same team, the same standards, ten years running.",
      highlight: "10 Years in UAE",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />,
      title: "Your tutor is paid to teach.",
      desc: "No commission cuts, no rush between clients, no marketplace bidding.",
      highlight: "100% Dedicated",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-8 sm:py-12 lg:py-14 bg-white relative overflow-hidden"
      id="why-abu-dhabi-parents-pick-ustaad"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#0b3d80]/5 via-[#0f4a9b]/5 to-[#0b3d80]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0b3d80]/10 text-[#0b3d80] text-[11px] font-extrabold rounded-full mb-2 border border-[#0b3d80]/20 shadow-xs">
            <Sparkles className="h-3 w-3 text-[#0b3d80]" /> Premium Model
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-2 tracking-tight">
            <TypewriterHeadingText
              key={`wh-title-${animCycle}`}
              text="Why Abu Dhabi parents pick Ustaad"
              highlightLastWord={false}
              charDelay={0.02}
              delay={0}
            />
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#0b3d80] to-[#1e5ba8] rounded-full mx-auto mb-3" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            <TypewriterHeadingText
              key={`wh-sub-${animCycle}`}
              text="The premium service model behind every maths lesson we deliver."
              highlightLastWord={false}
              charDelay={0.012}
              delay={0.2}
            />
          </p>
        </div>

        {/* 3 Premium Pillar Cards (Desktop 3-Col, Mobile Horizontal Swipe) */}
        <div className="flex sm:grid sm:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-3 sm:pb-0 px-2 sm:px-0 -mx-2 sm:mx-auto">
          {pillars.map((item, i) => (
            <motion.div
              key={`${i}-${animCycle}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="w-[82vw] max-w-[320px] sm:w-auto flex-shrink-0 sm:flex-shrink snap-center bg-white rounded-[22px] border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-[0_6px_25px_rgba(11,61,128,0.05)] hover:shadow-[0_16px_40px_rgba(11,61,128,0.12)] hover:border-[#0b3d80]/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0b3d80] via-[#1e5ba8] to-[#0a3a79]" />

              <div>
                {/* Icon Pod: Same blue from stats */}
                <div className="w-12 h-12 rounded-xl bg-[#0b3d80] flex items-center justify-center mb-4 shadow-[0_4px_14px_rgba(11,61,128,0.25)] group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Title (Animated on every scroll line-by-line) */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1f3d] mb-2 leading-snug">
                  <TypewriterHeadingText
                    key={`wh-card-title-${i}-${animCycle}`}
                    text={item.title}
                    highlightLastWord={false}
                    charDelay={0.02}
                    delay={0.3 + i * 0.1}
                  />
                </h3>

                {/* Description (Animated on every scroll line-by-line) */}
                <div className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed font-medium">
                  <TypewriterHeadingText
                    key={`wh-card-desc-${i}-${animCycle}`}
                    text={item.desc}
                    highlightLastWord={false}
                    charDelay={0.01}
                    delay={0.45 + i * 0.1}
                  />
                </div>
              </div>

              {/* Bottom Tag - Golden dot removed */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#0b3d80]">
                  {item.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsCarousel() {
  const monthSteps = [
    {
      num: 1,
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b3d80]" strokeWidth={2} />,
      title: 'Free 30-minute trial session',
      desc: 'Your child meets the shortlisted tutor. We identify the exact topics losing marks.',
    },
    {
      num: 2,
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b3d80]" strokeWidth={2} />,
      title: 'Matched to a specialist tutor',
      desc: 'By exam board, year group and learning style. Same tutor every week.',
    },
    {
      num: 3,
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b3d80]" strokeWidth={2} />,
      title: 'Weekly lessons & mock score lift',
      desc: 'Structured past-paper practice, regular topic mastery checks, and measurable mock score gains.',
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white relative overflow-hidden" id="how-it-works">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#0b3d80]/5 via-[#0f4a9b]/5 to-[#0b3d80]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] tracking-tight leading-tight mb-2 sm:mb-3">
            How your first month with Ustaad works
          </h2>
          <p className="text-gray-500 text-sm sm:text-base lg:text-[17px] font-medium max-w-2xl mx-auto leading-relaxed">
            Three steps from your first call to your child&apos;s first mock score lift.
          </p>
        </motion.div>

        {/* ── 3-Step Interactive Animated Timeline (Single View on All Devices) ── */}
        <div className="relative">
          
          {/* Connecting Track Line behind Circle Nodes */}
          <div className="absolute top-[28px] sm:top-[44px] md:top-[52px] left-[16.66%] right-[16.66%] h-[2.5px] -translate-y-1/2 z-0 hidden xs:block">
            {/* Base grey line */}
            <div className="w-full h-full bg-slate-200/90 rounded-full" />
            {/* Animated glowing active line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-[#0b3d80] via-[#0f4a9b] to-[#0b3d80] rounded-full shadow-[0_0_8px_rgba(11,61,128,0.3)]"
            />
          </div>

          {/* 3 Steps Grid (Displays cleanly in one unified view on mobile & desktop) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-10 relative z-10">
            {monthSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Circle Node Container */}
                <div className="relative mb-3 sm:mb-5 lg:mb-6">
                  
                  {/* Outer Pulsing Aura on Hover */}
                  <div className="absolute -inset-1.5 rounded-full bg-[#0b3d80]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />

                  {/* Main Circle Ring */}
                  <motion.div
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="w-14 h-14 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-28 lg:h-28 rounded-full bg-white border-[2px] sm:border-[2.5px] border-[#0b3d80] flex items-center justify-center shadow-[0_4px_16px_rgba(11,61,128,0.08)] group-hover:shadow-[0_8px_24px_rgba(11,61,128,0.18)] transition-all duration-300 relative z-10"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Top-Right Numbered Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 500, damping: 15, delay: 0.2 + idx * 0.15 }}
                    className="absolute -top-1 -right-1 sm:top-0 sm:right-0 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#0b3d80] text-white font-extrabold text-[10px] sm:text-xs md:text-sm flex items-center justify-center shadow-md z-20 border-[1.5px] border-white"
                  >
                    {step.num}
                  </motion.div>
                </div>

                {/* Step Title */}
                <h3 className="text-[12px] sm:text-[15px] md:text-base lg:text-[17px] font-extrabold text-[#0a1f3d] leading-tight sm:leading-snug mb-1 sm:mb-2 max-w-[190px] sm:max-w-none">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[10px] sm:text-[12.5px] md:text-[13.5px] text-gray-500 leading-snug sm:leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}


/* ── Animated Mini-Artifacts for Dark Subject Cards ── */
function DarkMathsArtifact() {
  return (
    <div className="relative w-full h-24 rounded-xl bg-[#061838]/80 border border-blue-400/20 overflow-hidden flex items-center justify-center select-none mb-3.5">
      {/* Coordinate Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.08)_1px,transparent_1px)] bg-[size:10px_10px]" />
      {/* Coordinate Axes */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-blue-400/30" />
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-blue-400/30" />
      
      {/* Dynamic Sine Wave Path */}
      <svg viewBox="0 0 180 50" className="w-full h-full relative z-10">
        <motion.path
          d="M 10 25 Q 30 5, 50 25 T 90 25 T 130 25 T 170 25"
          fill="none"
          stroke="#5fd3e6"
          strokeWidth="2.2"
          strokeLinecap="round"
          animate={{
            d: [
              "M 10 25 Q 30 5, 50 25 T 90 25 T 130 25 T 170 25",
              "M 10 25 Q 30 45, 50 25 T 90 25 T 130 25 T 170 25",
              "M 10 25 Q 30 5, 50 25 T 90 25 T 130 25 T 170 25",
            ],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Animated Tangent Cursor Blip */}
        <motion.circle
          r="3.5"
          fill="#f0c96a"
          stroke="#ffffff"
          strokeWidth="1.2"
          animate={{
            cx: [15, 50, 90, 130, 165],
            cy: [14, 25, 25, 25, 18],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Formula badges */}
      <div className="absolute top-1.5 right-2 font-mono text-[9px] font-bold text-[#5fd3e6] bg-[#0a2550]/80 px-1.5 py-0.5 rounded border border-[#5fd3e6]/30">
        f(x) = sin θ
      </div>
      <div className="absolute bottom-1.5 left-2 font-mono text-[8.5px] font-bold text-[#f0c96a] bg-[#0a2550]/80 px-1.5 py-0.5 rounded border border-[#f0c96a]/30">
        ∫ πr²
      </div>
    </div>
  );
}

function DarkPhysicsArtifact() {
  return (
    <div className="relative w-full h-24 rounded-xl bg-[#061838]/80 border border-blue-400/20 overflow-hidden flex items-center justify-center select-none mb-3.5">
      {/* Radial field gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.15)_0%,transparent_70%)]" />
      
      {/* Center Nucleus */}
      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#5fd3e6] to-[#1e5ba8] shadow-[0_0_10px_rgba(95,211,230,0.7)] flex items-center justify-center z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </div>

      {/* Orbit 1 with Electron Node */}
      <motion.div
        className="absolute w-24 h-10 rounded-[50%] border border-[#5fd3e6]/50"
        style={{ transform: 'rotate(-25deg)' }}
        animate={{ rotate: [-25, 335] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-2 h-2 rounded-full bg-[#5fd3e6] shadow-[0_0_6px_#5fd3e6] -translate-y-1 translate-x-10" />
      </motion.div>

      {/* Orbit 2 with Counter-Orbiting Electron */}
      <motion.div
        className="absolute w-24 h-10 rounded-[50%] border border-[#f0c96a]/50"
        style={{ transform: 'rotate(45deg)' }}
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-2 h-2 rounded-full bg-[#f0c96a] shadow-[0_0_6px_#f0c96a] -translate-y-1 translate-x-10" />
      </motion.div>

      {/* Physics tags */}
      <div className="absolute top-1.5 right-2 font-mono text-[9px] font-bold text-[#5fd3e6] bg-[#0a2550]/80 px-1.5 py-0.5 rounded border border-[#5fd3e6]/30">
        E = mc²
      </div>
      <div className="absolute bottom-1.5 left-2 font-mono text-[8.5px] font-bold text-blue-200/80 bg-[#0a2550]/80 px-1.5 py-0.5 rounded border border-blue-400/25">
        F = ma
      </div>
    </div>
  );
}

function DarkChemistryArtifact() {
  return (
    <div className="relative w-full h-24 rounded-xl bg-[#061838]/80 border border-teal-400/20 overflow-hidden flex items-center justify-center select-none mb-3.5">
      {/* Molecular dot matrix */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] bg-[size:10px_10px]" />
      
      {/* Flask Outline & Liquid */}
      <div className="relative w-10 h-14 flex flex-col items-center justify-end z-10">
        {/* Flask Neck */}
        <div className="w-3 h-4 border-l-2 border-r-2 border-[#2dd4bf]/70 bg-transparent -mb-0.5 z-10" />
        {/* Flask Body */}
        <div className="w-10 h-9 border-2 border-[#2dd4bf] rounded-b-xl rounded-t-xs relative overflow-hidden bg-white/10 shadow-sm flex items-end">
          {/* Animated Liquid Level */}
          <motion.div
            className="w-full bg-gradient-to-t from-[#0d9488] to-[#2dd4bf]/90 rounded-b-lg"
            animate={{ height: ['50%', '75%', '50%'] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Bubbles */}
          <motion.div
            className="absolute bottom-1 left-2 w-1.5 h-1.5 rounded-full bg-white/95"
            animate={{ y: [-1, -16], opacity: [0.9, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute bottom-1 right-2.5 w-1.5 h-1.5 rounded-full bg-white/95"
            animate={{ y: [-1, -18], opacity: [0.9, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
          />
        </div>
      </div>

      {/* Floating Benzene Ring Graphic */}
      <svg viewBox="0 0 40 40" className="w-6 h-6 absolute left-2 top-2 text-[#2dd4bf]/35">
        <polygon points="20,2 35,11 35,29 20,38 5,29 5,11" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>

      {/* Chemistry tags */}
      <div className="absolute top-1.5 right-2 font-mono text-[9px] font-bold text-[#2dd4bf] bg-[#0a2550]/80 px-1.5 py-0.5 rounded border border-[#2dd4bf]/30">
        pH: 7.0
      </div>
      <div className="absolute bottom-1.5 left-2 font-mono text-[8.5px] font-bold text-teal-200/80 bg-[#0a2550]/80 px-1.5 py-0.5 rounded border border-teal-400/25">
        PV = nRT
      </div>
    </div>
  );
}

function DarkEngineeringArtifact() {
  return (
    <div className="relative w-full h-24 rounded-xl bg-[#061838]/80 border border-amber-400/20 overflow-hidden flex items-center justify-center select-none mb-3.5">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(240,201,106,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(240,201,106,0.08)_1px,transparent_1px)] bg-[size:10px_10px]" />
      
      {/* Interlocking Gears */}
      <div className="relative w-24 h-16 flex items-center justify-center z-10">
        {/* Gear 1 (Clockwise) */}
        <motion.div
          className="absolute -left-1 w-11 h-11 rounded-full border-[3px] border-dashed border-[#f0c96a] flex items-center justify-center shadow-xs"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-3.5 h-3.5 rounded-full border border-[#f0c96a] bg-[#0a2550] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#f0c96a]" />
          </div>
        </motion.div>

        {/* Gear 2 (Counter-Clockwise) */}
        <motion.div
          className="absolute -right-1 w-9 h-9 rounded-full border-[3px] border-dashed border-[#fbbf24] flex items-center justify-center shadow-xs"
          animate={{ rotate: -360 }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-3 h-3 rounded-full border border-[#fbbf24] bg-[#0a2550] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#fbbf24]" />
          </div>
        </motion.div>
      </div>

      {/* CAD tags */}
      <div className="absolute top-1.5 right-2 font-mono text-[9px] font-bold text-[#f0c96a] bg-[#0a2550]/80 px-1.5 py-0.5 rounded border border-[#f0c96a]/30">
        CAD: ±0.01mm
      </div>
      <div className="absolute bottom-1.5 left-2 font-mono text-[8.5px] font-bold text-amber-200/80 bg-[#0a2550]/80 px-1.5 py-0.5 rounded border border-amber-400/25">
        Torque &amp; Load
      </div>
    </div>
  );
}

function DarkExamPrepArtifact() {
  return (
    <div className="relative w-full h-24 rounded-xl bg-[#061838]/80 border border-amber-400/20 overflow-hidden flex items-center justify-center select-none mb-3.5">
      {/* Background Target Rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-16 h-16 rounded-full border border-[#f0c96a]" />
        <div className="w-10 h-10 rounded-full border border-dashed border-[#f0c96a]" />
      </div>

      {/* Stopwatch & Grade 9 Stamp Stage */}
      <div className="relative flex items-center gap-3 z-10">
        {/* Stopwatch Dial */}
        <div className="relative w-10 h-10 rounded-full border-2 border-[#f0c96a] bg-[#0a2550] shadow-sm flex items-center justify-center">
          <div className="absolute -top-1 w-2.5 h-1 bg-[#f0c96a] rounded-xs" />
          {/* Sweeping Seconds Needle */}
          <motion.div
            className="w-0.5 h-4 bg-[#f0c96a] origin-bottom rounded-full -translate-y-1.5"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute w-1 h-1 rounded-full bg-white" />
        </div>

        {/* Grade 9 / A* Gold Seal */}
        <div className="flex flex-col items-center justify-center px-2.5 py-1 rounded-lg bg-gradient-to-br from-[#f0c96a] to-[#C7A24A] text-[#0a1f3d] shadow-[0_2px_8px_rgba(240,201,106,0.3)]">
          <span className="text-[12px] font-black leading-none">A*</span>
          <span className="text-[7.5px] font-extrabold tracking-widest uppercase mt-0.5">GRADE 9</span>
        </div>
      </div>

      {/* Exam Prep tags */}
      <div className="absolute top-1.5 right-2 font-mono text-[9px] font-bold text-[#f0c96a] bg-[#0a2550]/80 px-1.5 py-0.5 rounded border border-[#f0c96a]/30">
        TIMER: 45:00
      </div>
      <div className="absolute bottom-1.5 left-2 font-mono text-[8.5px] font-bold text-amber-200/80 bg-[#0a2550]/80 px-1.5 py-0.5 rounded border border-amber-400/25">
        Past Papers
      </div>
    </div>
  );
}

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
              <a href={WA_URL} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"><WhatsAppIcon className="w-4 h-4" /> WhatsApp Us</a>
              <p className="text-blue-200/50 text-[11px] mt-1">No commitment. Cancel anytime.</p>
            </div>

            {/* Desktop row */}
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
                    {c.title}
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
                      {link.label}
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
      <section className="relative py-8 sm:py-10 lg:py-14 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0a1f3d 0%, #0f3575 50%, #0a2a6e 100%)' }}>
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-10%] right-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,91,168,0.35) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <MathGrid />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Eyebrow icon={<Sparkles className="h-3.5 w-3.5" />} text="Academic Expertise" dark />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-[1.1] mb-3">
              Unlock Maths.{' '}
              <span style={{ background:'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Excel Across Subjects</span>
            </h2>
            <p className="text-blue-100/75 text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
              Strong maths helps Abu Dhabi students handle calculations across science and engineering subjects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { href: '/maths', label: 'Mathematics', desc: 'From fractions to calculus, every maths topic taught structurally.', artifact: DarkMathsArtifact },
                { href: '/physics-tutor-abu-dhabi', label: 'Physics', desc: 'Mechanics, electricity, and waves rely on rearranging equations confidently.', artifact: DarkPhysicsArtifact },
                { href: '/chemistry', label: 'Chemistry', desc: 'Moles, balancing, and titration calculations need strong fraction skills.', artifact: DarkChemistryArtifact },
                { href: '/engineering', label: 'Engineering', desc: 'Calculus, vectors, and force diagrams power engineering problem solving.', artifact: DarkEngineeringArtifact },
                { href: '/exam-preparation', label: 'Exam Preparation', desc: 'Past papers, timed practice, and mark scheme guidance for Abu Dhabi exams.', artifact: DarkExamPrepArtifact },
              ].map((s, i) => {
                const Artifact = s.artifact;
                return (
                  <motion.a
                    key={i}
                    href={s.href}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="block rounded-2xl p-4 sm:p-4.5 text-left transition-all duration-300 relative overflow-hidden group shadow-lg"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(110,168,255,0.22)', backdropFilter: 'blur(8px)' }}
                  >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#5fd3e6] via-[#f0c96a] to-[#5fd3e6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Animated Mini-Artifact */}
                    <Artifact />

                    <h3 className="text-[15px] font-extrabold text-white mb-1.5 group-hover:text-[#fde68a] transition-colors">
                      {s.label}
                    </h3>
                    <p className="text-blue-100/70 text-[12.5px] leading-relaxed relative z-10">
                      {s.desc}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 09 — HOW YOUR FIRST MONTH WITH USTAAD WORKS */}
      <StepsCarousel />

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
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]/30 rounded-full" />
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
              Meet Our Tutors
            </a>
          </div>
        </div>
      </section>

      {/* ── MEET YOUR MATHS TUTORS (COMPACT SINGLE-VIEW DESKTOP LAYOUT) ── */}
      <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] relative overflow-hidden" id="maths-tutors">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#0f4a9b]/5 via-transparent to-[#C7A24A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-4 sm:mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-[11px] font-extrabold rounded-full mb-1.5 border border-[#0f4a9b]/20 shadow-xs">
              <Users className="h-3 w-3 text-[#0f4a9b]" /> Specialist Maths Team
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-1 tracking-tight">
              Meet your maths tutors
            </h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mx-auto mb-2" />
            <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed max-w-2xl mx-auto">
              Two specialist maths teachers on the Ustaad Abu Dhabi team. Both screened by our academic team before their first lesson. Click a name to view the full profile on the Tutors page.
            </p>
          </div>

          {/* Tutor Cards Grid (Horizontal on Desktop, Swipe on Mobile) */}
          <div className="flex sm:grid sm:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-3 sm:pb-0 px-2 sm:px-0 -mx-2 sm:mx-auto">
            
            {/* ── CARD 1: FAHAD KHAN ── */}
            <article className="w-[85vw] max-w-[340px] sm:w-full sm:max-w-none flex-shrink-0 sm:flex-shrink snap-center bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgba(15,74,155,0.06)] hover:shadow-[0_16px_40px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/40 transition-all duration-300 flex flex-col sm:flex-row group hover:-translate-y-0.5">
              
              {/* Photo Column */}
              <div className="relative w-full sm:w-[145px] lg:w-[155px] h-44 sm:h-auto overflow-hidden bg-gradient-to-br from-[#0e448c] to-[#082d61] flex-shrink-0">
                <img
                  src="/images/tutors/fahad-khan-cover.jpg"
                  alt="Fahad Khan, Senior Maths Teacher at Ustaad UAE"
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082d61]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                
                {/* Initials Badge */}
                <div className="absolute top-2.5 left-2.5 z-10 w-7 h-7 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] text-white font-extrabold text-[11px] flex items-center justify-center shadow-md">
                  FK
                </div>

                {/* Screened Badge (Top Right on Mobile, Bottom on Desktop) */}
                <span className="absolute top-2.5 right-2.5 sm:top-auto sm:bottom-2.5 sm:left-2.5 sm:right-auto z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#0a1f3d] text-[9.5px] font-extrabold shadow-sm">
                  <ShieldCheck className="w-3 h-3 text-[#0f4a9b]" />
                  Screened
                </span>
              </div>

              {/* Info Column */}
              <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-baseline justify-between gap-1 mb-0.5">
                    <a href="/tutors/fahad-khan" className="hover:text-[#0f4a9b] transition-colors">
                      <h3 className="text-base sm:text-[17px] font-extrabold text-[#0a1f3d] leading-snug">
                        Fahad Khan
                      </h3>
                    </a>
                  </div>
                  <div className="text-[11px] font-bold text-[#0f4a9b] mb-2.5">
                    Senior Maths Teacher · Ustaad UAE
                  </div>

                  {/* Metadata List (Full content, zero truncation) */}
                  <div className="space-y-2 py-2.5 border-y border-slate-100 text-[12px] text-slate-700">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Credentials
                      </span>
                      <span className="font-semibold text-[#0a1f3d] leading-snug block">
                        BS Mathematics, B.Ed · 10+ years IGCSE and A-Level
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        AD Specialty
                      </span>
                      <span className="font-semibold text-slate-600 leading-snug block">
                        ADEK-school IGCSE and O-Level Maths. Works with Abu Dhabi students at BSAK, Cranleigh, and Repton Al Reem.
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Recent Student
                      </span>
                      <span className="font-semibold text-[#0f4a9b] leading-snug block">
                        Edexcel O-Level Maths grade C to grade A in one term.
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Availability
                      </span>
                      <span className="font-semibold text-[#0a1f3d] leading-snug block">
                        Weekday evenings &amp; weekend morning slots (Abu Dhabi time)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons (Strictly Arrow-Free) */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-1">
                  <a
                    href="/tutors/fahad-khan"
                    className="flex items-center justify-center px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-[#0f4a9b] text-[#0a1f3d] hover:text-white font-bold text-[11.5px] transition-all duration-300 text-center"
                  >
                    View profile
                  </a>
                  <a
                    href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20request%20Fahad%20Khan%20for%20a%20trial%20lesson."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white font-bold text-[11.5px] hover:shadow-sm hover:scale-[1.02] transition-all duration-300 text-center"
                  >
                    Request Fahad
                  </a>
                </div>

              </div>
            </article>

            {/* ── CARD 2: TABRAIZ KHAN ── */}
            <article className="w-[85vw] max-w-[340px] sm:w-full sm:max-w-none flex-shrink-0 sm:flex-shrink snap-center bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgba(15,74,155,0.06)] hover:shadow-[0_16px_40px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/40 transition-all duration-300 flex flex-col sm:flex-row group hover:-translate-y-0.5">
              
              {/* Photo Column */}
              <div className="relative w-full sm:w-[145px] lg:w-[155px] h-44 sm:h-auto overflow-hidden bg-gradient-to-br from-[#0e448c] to-[#082d61] flex-shrink-0">
                <img
                  src="/images/tutors/tabraiz-khan-cover.jpg"
                  alt="Tabraiz Khan, Senior Maths and Statistics Teacher at Ustaad UAE"
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082d61]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                
                {/* Initials Badge */}
                <div className="absolute top-2.5 left-2.5 z-10 w-7 h-7 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] text-white font-extrabold text-[11px] flex items-center justify-center shadow-md">
                  TK
                </div>

                {/* Screened Badge (Top Right on Mobile, Bottom on Desktop) */}
                <span className="absolute top-2.5 right-2.5 sm:top-auto sm:bottom-2.5 sm:left-2.5 sm:right-auto z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#0a1f3d] text-[9.5px] font-extrabold shadow-sm">
                  <ShieldCheck className="w-3 h-3 text-[#0f4a9b]" />
                  Screened
                </span>
              </div>

              {/* Info Column */}
              <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-baseline justify-between gap-1 mb-0.5">
                    <a href="/tutors/tabraiz-khan" className="hover:text-[#0f4a9b] transition-colors">
                      <h3 className="text-base sm:text-[17px] font-extrabold text-[#0a1f3d] leading-snug">
                        Tabraiz Khan
                      </h3>
                    </a>
                  </div>
                  <div className="text-[11px] font-bold text-[#0f4a9b] mb-2.5">
                    Senior Maths and Statistics Teacher · Ustaad UAE
                  </div>

                  {/* Metadata List (Full content, zero truncation) */}
                  <div className="space-y-2 py-2.5 border-y border-slate-100 text-[12px] text-slate-700">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Credentials
                      </span>
                      <span className="font-semibold text-[#0a1f3d] leading-snug block">
                        Master in Statistics · Cambridge Certified · 9 years
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        AD Specialty
                      </span>
                      <span className="font-semibold text-slate-600 leading-snug block">
                        A-Level Statistics, IGCSE Statistics, AP Statistics. Coaches Abu Dhabi A-Level students preparing for Khalifa University and MBRU pathways.
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Recent Student
                      </span>
                      <span className="font-semibold text-[#0f4a9b] leading-snug block">
                        A-Level Statistics grade C to grade A in one academic year.
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">
                        Availability
                      </span>
                      <span className="font-semibold text-[#0a1f3d] leading-snug block">
                        Weekday evenings &amp; Saturday afternoon slots (Abu Dhabi time)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons (Strictly Arrow-Free) */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-1">
                  <a
                    href="/tutors/tabraiz-khan"
                    className="flex items-center justify-center px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-[#0f4a9b] text-[#0a1f3d] hover:text-white font-bold text-[11.5px] transition-all duration-300 text-center"
                  >
                    View profile
                  </a>
                  <a
                    href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20request%20Tabraiz%20Khan%20for%20a%20trial%20lesson."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white font-bold text-[11.5px] hover:shadow-sm hover:scale-[1.02] transition-all duration-300 text-center"
                  >
                    Request Tabraiz
                  </a>
                </div>

              </div>
            </article>

          </div>

          {/* Bottom Consultation Banner (Exact text preserved) */}
          <div className="mt-4 sm:mt-5 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-xl bg-white border border-[#0f4a9b]/15 shadow-xs px-4 py-3 sm:px-5 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="space-y-0.5 flex-1">
                <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed">
                  <span className="font-extrabold text-[#0a1f3d]">Not sure who's the right fit? </span>
                  Book a free 30-minute trial and we'll match your child with the tutor who fits their board, year group and learning style.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
                <GoldButton href={BOOKING} className="px-4 py-1.5 text-xs font-bold">
                  Book Free Trial
                </GoldButton>
                <a
                  href="/tutors"
                  className="px-3.5 py-1.5 rounded-full border border-slate-200 hover:border-[#0f4a9b] text-slate-700 hover:text-[#0f4a9b] font-bold text-xs bg-white transition-colors"
                >
                  View all Ustaad tutors
                </a>
              </div>
            </div>
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
                D to B · Cambridge 0580
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
        subtext2="Stuck on a topic? Send it across."
      />
    </Layout>
  );
}
