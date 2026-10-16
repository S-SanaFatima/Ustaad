import { useState, useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Dna, Microscope, Heart, Leaf, FlaskConical, Bug, RefreshCw,
  HelpCircle, ChevronDown, ChevronLeft, ChevronRight, MessageCircle, MapPin,
  Search, RotateCcw, Brain, BookOpen, CheckCircle2, X, AlertTriangle,
  Tag, BarChart2, Link2, Eye, ShieldCheck, Sparkles, Target, Star,
  AlignLeft, ClipboardList, PenTool, Award, Timer, Layers,
  Calculator, Activity, Compass, FileCheck
} from 'lucide-react';

import { Layout, GoldButton, FinalCTA, StatsBar, SchoolsMarquee, WhatsAppIcon, DUBAI_SCHOOL_LOGOS, RelatedContent, BiologyDiagnosticApproach, SwipeIndicator, InteractiveCardStack } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, courseSchema } from './shared/schemas';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20support%20with%20Biology%20in%20Dubai.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

/* ── Rich Biology Hero Background with animated DNA double helix, cell membrane, and floating biochemical labels ── */
const BiologyHeroBackground = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
    {/* Ambient Glow Orbs */}
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.22, 0.35, 0.22] }}
      transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      className="absolute -top-16 left-1/2 -translate-x-1/2 w-[540px] h-[540px] bg-[#0f4a9b]/35 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.3, 0.18] }}
      transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
      className="absolute top-10 right-0 w-[400px] h-[400px] bg-[#10b981]/20 rounded-full blur-[100px]"
    />
    <motion.div
      animate={{ scale: [1, 1.18, 1], opacity: [0.15, 0.26, 0.15] }}
      transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 2 }}
      className="absolute bottom-10 left-0 w-[380px] h-[380px] bg-[#f0c96a]/20 rounded-full blur-[90px]"
    />

    {/* Desktop Biology SVG Animation */}
    <svg
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full hidden md:block opacity-90"
      aria-hidden="true"
    >
      <defs>
        <pattern id="bio-grid-desk" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
          <circle cx="48" cy="48" r="0.75" fill="rgba(16,185,129,0.25)" />
        </pattern>

        <linearGradient id="bioEmeraldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        <linearGradient id="bioGoldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#C7A24A" />
        </linearGradient>

        <linearGradient id="bioCyanGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="1" />
        </linearGradient>

        <filter id="bioGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid Pattern */}
      <rect width="100%" height="100%" fill="url(#bio-grid-desk)" />

      {/* Telemetry Header */}
      <text x="60" y="44" fill="rgba(52,211,153,0.7)" fontSize="10" fontFamily="monospace" letterSpacing="0.14em">
        DUBAI · 25.2048° N, 55.2708° E · IB DP THEMES A–D · SPECIFICATION PRECISION
      </text>
      <text x="1380" y="44" textAnchor="end" fill="rgba(240,201,106,0.65)" fontSize="9.5" fontFamily="monospace" letterSpacing="0.12em">
        EXAM TECHNIQUE · CAMBRIDGE 9700 · EDEXCEL IAL · 6-MARK DECODER
      </text>
      <line x1="60" y1="52" x2="1380" y2="52" stroke="rgba(52,211,153,0.18)" strokeWidth="0.8" strokeDasharray="4 6" />

      {/* ── LEFT VISUAL: ROTATING DNA DOUBLE HELIX WITH BASE PAIR HYDROGEN BONDS ── */}
      <g transform="translate(130, 250)" opacity="0.9">
        <text x="0" y="-120" fill="rgba(52,211,153,0.85)" fontSize="10" fontFamily="monospace" fontWeight="bold">
          DNA DUPLEX &amp; BASE PAIRING (A=T, G≡C)
        </text>

        {/* 10 Animated Base Pairs */}
        {[-80, -60, -40, -20, 0, 20, 40, 60, 80, 100].map((yPos, i) => {
          const phase = (i * 0.6);
          return (
            <motion.g
              key={yPos}
              animate={{
                scaleX: [1, -1, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: phase
              }}
            >
              {/* Strand 1 Node */}
              <circle cx="-45" cy={yPos} r="4.5" fill="#34d399" filter="url(#bioGlow)" />
              {/* Hydrogen Bond Line */}
              <line x1="-40" y1={yPos} x2="40" y2={yPos} stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="2 3" />
              {/* Center Bond Node */}
              <circle cx="0" cy={yPos} r="2" fill="#fde68a" />
              {/* Strand 2 Node */}
              <circle cx="45" cy={yPos} r="4.5" fill="#38bdf8" filter="url(#bioGlow)" />
            </motion.g>
          );
        })}

        {/* Floating Biochemical Annotations */}
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <rect x="-115" y="-30" width="56" height="22" rx="11" fill="rgba(15,74,155,0.6)" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
          <text x="-87" y="-15" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">mRNA</text>
        </motion.g>

        <motion.g
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
        >
          <rect x="62" y="30" width="50" height="22" rx="11" fill="rgba(240,201,106,0.15)" stroke="rgba(240,201,106,0.5)" strokeWidth="1" />
          <text x="87" y="45" textAnchor="middle" fill="#fde68a" fontSize="9" fontFamily="monospace" fontWeight="bold">ATP</text>
        </motion.g>
      </g>

      {/* ── RIGHT VISUAL: CELL MEMBRANE PHOSPHOLIPID BILAYER & TRANSPORT PROTEIN ── */}
      <g transform="translate(1260, 250)" opacity="0.9">
        <text x="-90" y="-120" fill="rgba(240,201,106,0.85)" fontSize="10" fontFamily="monospace" fontWeight="bold">
          FLUID MOSAIC: TRANSPORT PROTEIN
        </text>

        {/* Top Phospholipid Heads */}
        {[-80, -60, -40, 40, 60, 80].map((x) => (
          <g key={`top-${x}`}>
            <circle cx={x} cy="-45" r="5" fill="#34d399" />
            <line x1={x - 2} y1="-40" x2={x - 2} y2="-15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
            <line x1={x + 2} y1="-40" x2={x + 2} y2="-15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
          </g>
        ))}

        {/* Channel Protein Barrel (Center) */}
        <rect x="-24" y="-60" width="48" height="120" rx="12" fill="url(#bioCyanGrad)" stroke="#38bdf8" strokeWidth="1.5" />
        <path d="M -8 -60 L -8 60 M 8 -60 L 8 60" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeDasharray="3 3" />

        {/* Bottom Phospholipid Heads */}
        {[-80, -60, -40, 40, 60, 80].map((x) => (
          <g key={`bot-${x}`}>
            <circle cx={x} cy="45" r="5" fill="#34d399" />
            <line x1={x - 2} y1="40" x2={x - 2} y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
            <line x1={x + 2} y1="40" x2={x + 2} y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
          </g>
        ))}

        {/* Animated Substrate / Ion Passing Through Pore */}
        <motion.circle
          cx="0"
          cy="-75"
          r="5"
          fill="#f0c96a"
          filter="url(#bioGlow)"
          animate={{
            cy: [-75, 75],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
        />

        {/* Floating Biochemical Annotations */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.5 }}
        >
          <rect x="-110" y="65" width="48" height="22" rx="11" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
          <text x="-86" y="80" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold">ΔG &lt; 0</text>
        </motion.g>

        <motion.g
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut', delay: 1.5 }}
        >
          <rect x="65" y="-85" width="46" height="22" rx="11" fill="rgba(240,201,106,0.15)" stroke="rgba(240,201,106,0.4)" strokeWidth="1" />
          <text x="88" y="-70" textAnchor="middle" fill="#fde68a" fontSize="9" fontFamily="monospace" fontWeight="bold">Q₁₀ ≈ 2</text>
        </motion.g>
      </g>
    </svg>

    {/* ── Mobile Biology SVG Animation (Visible on Mobile < md) ── */}
    <svg
      viewBox="0 0 390 640"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full block md:hidden opacity-85"
      aria-hidden="true"
    >
      <defs>
        <pattern id="bio-grid-mob" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
          <circle cx="36" cy="36" r="0.8" fill="rgba(52,211,153,0.3)" />
        </pattern>

        <linearGradient id="bioMobCyanGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="1" />
        </linearGradient>

        <filter id="bioMobGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid Pattern */}
      <rect width="100%" height="100%" fill="url(#bio-grid-mob)" />

      {/* Mobile Telemetry Top Header */}
      <text x="20" y="32" fill="rgba(52,211,153,0.75)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.1em">
        DUBAI · IB DP THEMES · CAMBRIDGE 9700
      </text>
      <line x1="20" y1="38" x2="370" y2="38" stroke="rgba(52,211,153,0.18)" strokeWidth="0.8" strokeDasharray="3 4" />

      {/* Mobile DNA Double Helix (Positioned subtly on the right side) */}
      <g transform="translate(330, 240)" opacity="0.85">
        {[-140, -105, -70, -35, 0, 35, 70, 105, 140, 175].map((yPos, i) => {
          const phase = i * 0.55;
          return (
            <motion.g
              key={yPos}
              animate={{
                scaleX: [1, -1, 1],
                opacity: [0.55, 1, 0.55],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: phase,
              }}
            >
              {/* Strand 1 Node */}
              <circle cx="-26" cy={yPos} r="3.5" fill="#34d399" filter="url(#bioMobGlow)" />
              {/* Bond Line */}
              <line x1="-22" y1={yPos} x2="22" y2={yPos} stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeDasharray="2 2" />
              {/* Center Bond Node */}
              <circle cx="0" cy={yPos} r="1.6" fill="#fde68a" />
              {/* Strand 2 Node */}
              <circle cx="26" cy={yPos} r="3.5" fill="#38bdf8" filter="url(#bioMobGlow)" />
            </motion.g>
          );
        })}
      </g>

      {/* Mobile Phospholipid Bilayer & Ion Channel (Positioned subtly on bottom left) */}
      <g transform="translate(60, 480)" opacity="0.75">
        {/* Phospholipid Heads Top */}
        {[-36, -18, 18, 36].map((x) => (
          <g key={`mtop-${x}`}>
            <circle cx={x} cy="-24" r="3.5" fill="#34d399" />
            <line x1={x} y1="-20" x2={x} y2="-8" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          </g>
        ))}
        {/* Channel Protein */}
        <rect x="-12" y="-32" width="24" height="64" rx="6" fill="url(#bioMobCyanGrad)" stroke="#38bdf8" strokeWidth="1" />
        {/* Phospholipid Heads Bottom */}
        {[-36, -18, 18, 36].map((x) => (
          <g key={`mbot-${x}`}>
            <circle cx={x} cy="24" r="3.5" fill="#34d399" />
            <line x1={x} y1="20" x2={x} y2="8" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          </g>
        ))}
        {/* Passing Ion */}
        <motion.circle
          cx="0"
          cy="-38"
          r="3"
          fill="#f0c96a"
          filter="url(#bioMobGlow)"
          animate={{ cy: [-38, 38], opacity: [0, 1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />
      </g>

      {/* Mobile Floating Biochemical Annotations */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
      >
        <rect x="22" y="70" width="48" height="20" rx="10" fill="rgba(15,74,155,0.7)" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
        <text x="46" y="83" textAnchor="middle" fill="#38bdf8" fontSize="8.5" fontFamily="monospace" fontWeight="bold">mRNA</text>
      </motion.g>

      <motion.g
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 1 }}
      >
        <rect x="24" y="220" width="44" height="20" rx="10" fill="rgba(240,201,106,0.18)" stroke="rgba(240,201,106,0.6)" strokeWidth="1" />
        <text x="46" y="233" textAnchor="middle" fill="#fde68a" fontSize="8.5" fontFamily="monospace" fontWeight="bold">ATP</text>
      </motion.g>

      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1.8 }}
      >
        <rect x="280" y="75" width="76" height="20" rx="10" fill="rgba(52,211,153,0.18)" stroke="rgba(52,211,153,0.5)" strokeWidth="1" />
        <text x="318" y="88" textAnchor="middle" fill="#34d399" fontSize="8" fontFamily="monospace" fontWeight="bold">A=T · G≡C</text>
      </motion.g>
    </svg>
  </div>
);

/* ── Section 4: Mark Scheme Decoder Component ── */
function MarkSchemeDecoder() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const decoderCards = [
    {
      id: 0,
      title: "1. Command Terms",
      subtitle: "Describe vs Explain vs Evaluate",
      problem: "Describing what is happening when the mark scheme specifically requires explaining the underlying biological mechanism.",
      solution: "Decipher command verbs immediately: 'Describe' = state trend & quote data; 'Explain' = biological mechanism (e.g. active site conformational change); 'Evaluate' = balance evidence vs limitations.",
      markGained: "+2 to +3 marks per question",
      example: "✗ Weak: \"Rate falls after 45°C.\" (0/3 marks)\n✓ Precise: \"Kinetic heat breaks hydrogen and ionic bonds, denaturing tertiary active site shape so substrate cannot bind.\" (3/3 marks)"
    },
    {
      id: 1,
      title: "2. Linking Ideas",
      subtitle: "Causal chains vs disjointed lists",
      problem: "Writing isolated biological facts without causal connectors, capping answers in Level 1 (1–2 marks).",
      solution: "Master our 'Cause → Mechanism → Effect' framework to consistently secure Level 3 mark bands (5–6 marks).",
      markGained: "+3 to +4 marks in 6-markers",
      example: "Weak: \"Insulin released. Glycogen formed. Glucose drops.\"\nTop mark: \"High blood glucose → β-cells secrete insulin → binds liver receptors → activates enzymes converting soluble glucose to insoluble glycogen → restores set-point.\""
    },
    {
      id: 2,
      title: "3. Precise Vocabulary",
      subtitle: "Exam-board terms vs everyday words",
      problem: "Everyday conversational words lose marks on Cambridge, Edexcel and IB mark schemes.",
      solution: "Substitute vague terms with exact syllabus terminology: 'denatures' not 'dies'; 'complementary in shape' not 'fits'; 'lower water potential' not 'stronger concentration'.",
      markGained: "+1 mark per point",
      example: "Mark schemes award 0 marks for \"enzymes die\". Only \"active site undergoes irreversible denaturation\" earns credit."
    },
    {
      id: 3,
      title: "4. Data Handling",
      subtitle: "Graphs, rates & percentages",
      problem: "Describing graphs vaguely as 'increasing rapidly' without calculating percentage change or quoting paired units.",
      solution: "Train data precision: calculate percentage difference [(Δ/initial) × 100], gradient rates (Δy/Δx), and always quote paired coordinate data with units.",
      markGained: "+2 marks in Papers 4 & 6",
      example: "✗ Weak: \"Activity was high at pH 7 but dropped at pH 9.\"\n✓ Precise: \"Peaked at 24 cm³/min at optimum pH 7.0, dropping 75% to 6 cm³/min at pH 9.0 due to altered charge of active site amino acids.\""
    }
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-white relative overflow-hidden text-left border-t border-slate-100 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header - Compact */}
        <div className="text-center mb-4 sm:mb-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-widest mb-1 shadow-2xs">
            <ClipboardList className="h-3 w-3 text-[#C7A24A]" />
            <span>MARK-SCHEME DECODER</span>
          </div>

          <h2 className="text-lg sm:text-2xl font-extrabold text-[#0a1f3d] leading-tight mb-1">
            Why Biology answers lose marks <span className="text-[#0f4a9b]">they should have earned</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
            A student can know the content thoroughly and still drop marks in exams. Biology mark schemes reward specific wording, in a specific order.
          </p>
        </div>

        {/* Decoder Interactive Tabs & Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
          
          {/* Left Selection Pills - 2x2 grid on mobile, vertical stack on desktop */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-2">
            {decoderCards.map((card, idx) => {
              const isActive = activeCard === idx;
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveCard(idx)}
                  className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0a1f3d] to-[#0f4a9b] text-white border-transparent shadow-md shadow-[#0f4a9b]/20 scale-[1.01]'
                      : 'bg-slate-50 hover:bg-slate-100 text-[#0a1f3d] border-slate-200/90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5 gap-1">
                    <span className={`text-[11.5px] sm:text-[12px] font-bold truncate ${isActive ? 'text-[#f0c96a]' : 'text-[#0f4a9b]'}`}>
                      {card.title}
                    </span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded shrink-0 ${isActive ? 'bg-white/15 text-white' : 'bg-slate-200 text-slate-700'}`}>
                      {card.markGained.split(' ')[0]} {card.markGained.split(' ')[1]}
                    </span>
                  </div>
                  <p className={`text-[10px] sm:text-[11px] leading-tight line-clamp-1 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    {card.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Selected Card Detail - Compact and High-Impact */}
          <div className="md:col-span-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs relative flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-2.5 mb-3">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
                  <span className="text-[9.5px] uppercase font-bold tracking-wider text-[#0f4a9b] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                    CRITICAL EXAM WEAKNESS
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#0a1f3d] break-words leading-snug">
                    {decoderCards[activeCard].title}: {decoderCards[activeCard].subtitle}
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0 self-start sm:self-auto">
                  {decoderCards[activeCard].markGained}
                </span>
              </div>

              <div className="space-y-2 sm:space-y-2.5 text-[11px] sm:text-xs">
                <div className="p-2.5 rounded-xl bg-rose-50/80 border border-rose-200/80 text-rose-950">
                  <span className="font-bold text-rose-700 block mb-0.5 text-[10px] uppercase tracking-wider">Where marks leak:</span>
                  <p className="leading-snug">{decoderCards[activeCard].problem}</p>
                </div>

                <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-[#0a1f3d]">
                  <span className="font-bold text-[#0f4a9b] block mb-0.5 text-[10px] uppercase tracking-wider">The Ustaad Solution:</span>
                  <p className="leading-snug">{decoderCards[activeCard].solution}</p>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-mono text-[10.5px] sm:text-[11px] leading-relaxed">
                  <span className="font-sans font-bold text-[#C7A24A] block mb-0.5 text-[10px] uppercase tracking-wider">
                    Real Exam Comparison:
                  </span>
                  <p className="whitespace-pre-line text-slate-600">{decoderCards[activeCard].example}</p>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-[10.5px] text-slate-500">
              <span>Cambridge · Edexcel · AQA · IB DP</span>
              <a href={BOOKING} className="font-bold text-[#0f4a9b] hover:underline shrink-0">
                Practise with a Biology tutor in Dubai
              </a>
            </div>
          </div>

        </div>

        {/* Closing Line */}
        <p className="text-center text-[11px] sm:text-xs font-semibold text-[#0a1f3d] mt-4">
          Most Biology marks are lost in how the answer is written, not in what the student knows.
        </p>

      </div>
    </section>
  );
}

/* ── Section 5: Syllabus Breakdown ── */
function BiologySyllabusBreakdown() {
  const topics = [
    {
      num: "01",
      name: "Cell Biology",
      icon: Microscope,
      kicker: "Theme A · Ultrastructure",
      desc: "Cell ultrastructure, membrane transport (osmosis, active transport) & mitosis."
    },
    {
      num: "02",
      name: "Biochemistry",
      icon: FlaskConical,
      kicker: "Vmax, Km & Kinetics",
      desc: "Enzyme kinetics, activation energy, inhibition models & biological macromolecules."
    },
    {
      num: "03",
      name: "Genetics",
      icon: Dna,
      kicker: "Crosses & χ² Testing",
      desc: "DNA replication, transcription, Punnett squares, sex-linkage & chi-squared testing."
    },
    {
      num: "04",
      name: "Energy & Respiration",
      icon: Activity,
      kicker: "ATP & Chemiosmosis",
      desc: "Photosynthesis (Calvin cycle), cellular respiration, Krebs cycle & ATP gradients."
    },
    {
      num: "05",
      name: "Physiology",
      icon: Heart,
      kicker: "Feedback & Homeostasis",
      desc: "Action potentials, synaptic transmission, hormonal control & nephron osmoregulation."
    },
    {
      num: "06",
      name: "Ecology & Evolution",
      icon: Leaf,
      kicker: "Hardy-Weinberg (p²+2pq)",
      desc: "Trophic energy transfers, natural selection, cladistics & population allele frequencies."
    }
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#f4f7fc] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] text-xs font-bold mb-2 shadow-2xs">
            <Dna className="h-3.5 w-3.5 text-[#C7A24A]" />
            <span>SYLLABUS ARCHITECTURE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-1.5 tracking-tight">
            Biology Syllabus Covered: <span className="text-[#0f4a9b]">IGCSE, A-Level &amp; IB DP</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Core content taught from first principles. Updated for current IB DP Themes, Cambridge 9700 and Edexcel IAL.
          </p>
        </div>

        {/* 6 Cards Container: Horizontally scrollable on mobile, single row (6 cols) on desktop */}
        <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-3.5 items-stretch overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-3 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {topics.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="w-[78vw] max-w-[280px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink bg-white rounded-2xl border border-[#0f4a9b]/25 p-4 shadow-[0_4px_18px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_30px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group text-left"
              >
                {/* Top accent gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]" />

                <div>
                  {/* Top Row: Topic Badge + Blue Icon Badge */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono font-black tracking-wider text-[#0f4a9b] bg-blue-50/90 px-2 py-0.5 rounded border border-blue-100/80 shadow-2xs">
                      TOPIC {step.num}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#0f4a9b] border border-[#0f4a9b] text-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-sm lg:text-[14.5px] font-black text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-1.5 leading-snug">
                    {step.name}
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

        {/* Mobile Swipe Indicator (Clean, below cards, no arrows, no dots) */}
        <div className="sm:hidden mt-3 mb-1 flex justify-center">
          <SwipeIndicator text="Swipe to see more" hideArrows hideDots />
        </div>

        <div className="mt-5 text-center">
          <p className="text-[11px] text-slate-500">
            Syllabus codes: Cambridge IGCSE 0610 / 0970 · Edexcel IGCSE 4BI1 · Cambridge International A-Level 9700 · Edexcel IAL · IB DP Biology SL/HL
          </p>
        </div>

      </div>
    </section>
  );
}

/* ── Section 6: Two Years, One Timeline (Interactive 3D Stacked Deck with Biology SVGs) ── */
function BiologyTwoYearTimeline() {
  const cardsData = [
    {
      num: "01",
      period: "Year 1, Term 1",
      title: "Cell Biology & Biochemistry Foundations",
      desc: "Ultrastructure, transport kinetics, macromolecules and enzyme rate assays. Establishing clear scientific communication.",
      deliverable: "Diagnostic Baseline & Practical Logbook Setup",
      topBorder: "from-[#0f4a9b] to-[#0284c7]",
      specChip: "Enzyme Kinetics · Km & Vmax Assay",
      chipStyle: "bg-blue-50/90 text-[#0f4a9b] border-blue-200/80",
      graphic: (
        <svg viewBox="0 0 120 120" className="w-full h-full select-none overflow-visible">
          <defs>
            <radialGradient id="bioStackGlow1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="54" fill="url(#bioStackGlow1)" />
          <circle cx="60" cy="60" r="48" fill="none" stroke="#0f4a9b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="60" cy="60" r="32" fill="none" stroke="#3b82f6" strokeWidth="0.8" />
          <motion.ellipse
            cx="60"
            cy="60"
            rx="46"
            ry="20"
            fill="none"
            stroke="#0f4a9b"
            strokeWidth="1.6"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            style={{ originX: "60px", originY: "60px" }}
          />
          <motion.ellipse
            cx="60"
            cy="60"
            rx="20"
            ry="46"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.6"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
            style={{ originX: "60px", originY: "60px" }}
          />
          <circle cx="60" cy="60" r="4" fill="#C7A24A" />
          <circle cx="60" cy="60" r="8" fill="none" stroke="#C7A24A" strokeWidth="0.8" strokeDasharray="2 2" />
          <text x="66" y="44" fill="#0f4a9b" fontSize="9" fontFamily="monospace" fontWeight="bold">Km</text>
          <text x="82" y="74" fill="#0f4a9b" fontSize="8" fontFamily="monospace" fontWeight="bold">Vmax</text>
          <text x="18" y="32" fill="#64748b" fontSize="8" fontFamily="monospace">Enzyme-Substrate</text>
        </svg>
      )
    },
    {
      num: "02",
      period: "Year 1, Term 2",
      title: "Genetics, Transport & Physiology",
      desc: "DNA replication, transcription/translation, cardiovascular and gas exchange systems. Introducing 6-mark cause-and-effect answer chains.",
      deliverable: "First Full Paper 4/Paper 2 Theory Drill",
      topBorder: "from-[#059669] to-[#10b981]",
      specChip: "DNA Polymerase III · Synoptic 6-Mark Chain",
      chipStyle: "bg-emerald-50/90 text-[#059669] border-emerald-200/80",
      graphic: (
        <svg viewBox="0 0 120 120" className="w-full h-full select-none overflow-visible">
          <defs>
            <radialGradient id="bioStackGlow2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="54" fill="url(#bioStackGlow2)" />
          <motion.path
            d="M 15 35 Q 35 15 60 60 T 105 85"
            fill="none"
            stroke="#059669"
            strokeWidth="2.2"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [0, 40] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />
          <motion.path
            d="M 15 85 Q 35 105 60 60 T 105 35"
            fill="none"
            stroke="#0f4a9b"
            strokeWidth="2.2"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [40, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />
          <line x1="30" y1="42" x2="30" y2="78" stroke="#C7A24A" strokeWidth="1.6" strokeDasharray="2 2" />
          <line x1="60" y1="52" x2="60" y2="68" stroke="#C7A24A" strokeWidth="1.6" />
          <line x1="90" y1="42" x2="90" y2="78" stroke="#C7A24A" strokeWidth="1.6" strokeDasharray="2 2" />
          <circle cx="30" cy="60" r="3" fill="#10b981" />
          <circle cx="90" cy="60" r="3" fill="#0f4a9b" />
          <text x="18" y="24" fill="#059669" fontSize="9" fontFamily="monospace" fontWeight="bold">5'→3' DNA</text>
          <text x="68" y="98" fill="#0f4a9b" fontSize="8" fontFamily="monospace">mRNA Codon</text>
        </svg>
      )
    },
    {
      num: "03",
      period: "Year 1, Summer",
      title: "Practical Skills & IA Topic Planning",
      desc: "Formulating a focused, testable research question with controlled variables. Refining experimental method to isolate quantitative biological data.",
      deliverable: "Approved IA / Coursework Proposal",
      topBorder: "from-[#4f46e5] to-[#7c3aed]",
      specChip: "Independent IA Variable · R² ≥ 0.985 Calibration",
      chipStyle: "bg-indigo-50/90 text-[#4f46e5] border-indigo-200/80",
      graphic: (
        <svg viewBox="0 0 120 120" className="w-full h-full select-none overflow-visible">
          <defs>
            <radialGradient id="bioStackGlow3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="54" fill="url(#bioStackGlow3)" />
          <rect x="44" y="25" width="32" height="65" rx="6" fill="#e0e7ff" fillOpacity="0.4" stroke="#4f46e5" strokeWidth="1.8" />
          <rect x="47" y="45" width="26" height="42" rx="4" fill="#6366f1" fillOpacity="0.25" />
          <motion.line
            x1="12"
            y1="62"
            x2="108"
            y2="62"
            stroke="#C7A24A"
            strokeWidth="2.2"
            strokeDasharray="4 3"
            animate={{ strokeDashoffset: [-20, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          <circle cx="56" cy="55" r="2" fill="#4f46e5" />
          <circle cx="64" cy="70" r="2.5" fill="#4f46e5" />
          <circle cx="52" cy="80" r="1.8" fill="#4f46e5" />
          <text x="18" y="22" fill="#4f46e5" fontSize="8.5" fontFamily="monospace" fontWeight="bold">Abs λ=540nm</text>
          <text x="16" y="104" fill="#6366f1" fontSize="8" fontFamily="monospace">R² ≥ 0.985 Calibration</text>
        </svg>
      )
    },
    {
      num: "04",
      period: "Year 2, Term 1",
      title: "IA Drafting, Statistics & Energy Pathways",
      desc: "Data processing with standard deviations, t-tests, and chi-squared tests. Cellular respiration, photosynthesis and ecology.",
      deliverable: "Complete Draft IA Submission + Evaluation",
      topBorder: "from-[#d97706] to-[#f59e0b]",
      specChip: "ATP Synthase Rotor · p < 0.05 χ² Testing",
      chipStyle: "bg-amber-50/90 text-[#b45309] border-amber-200/80",
      graphic: (
        <svg viewBox="0 0 120 120" className="w-full h-full select-none overflow-visible">
          <defs>
            <radialGradient id="bioStackGlow4" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="54" fill="url(#bioStackGlow4)" />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            style={{ originX: "60px", originY: "60px" }}
          >
            <polygon points="60,30 85,45 85,75 60,90 35,75 35,45" fill="none" stroke="#d97706" strokeWidth="1.6" />
            <circle cx="60" cy="30" r="3" fill="#f59e0b" />
            <circle cx="85" cy="45" r="3" fill="#d97706" />
            <circle cx="85" cy="75" r="3" fill="#f59e0b" />
            <circle cx="60" cy="90" r="3" fill="#d97706" />
            <circle cx="35" cy="75" r="3" fill="#f59e0b" />
            <circle cx="35" cy="45" r="3" fill="#d97706" />
          </motion.g>
          <circle cx="60" cy="60" r="5" fill="#C7A24A" />
          <line x1="20" y1="96" x2="100" y2="96" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M 25 96 Q 60 55 95 96" fill="none" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="16" y="24" fill="#d97706" fontSize="9" fontFamily="monospace" fontWeight="bold">ADP + Pi → ATP</text>
          <text x="64" y="110" fill="#92400e" fontSize="8" fontFamily="monospace">p &lt; 0.05 χ²</text>
        </svg>
      )
    },
    {
      num: "05",
      period: "Year 2, Term 2",
      title: "Mock Exams & Past-Paper Cycles",
      desc: "Simulating full 2-hour papers under strict timed conditions. Targeting mark-scheme command words and eliminating casual wording.",
      deliverable: "Full Mock Review & Error-Log Remediation",
      topBorder: "from-[#e11d48] to-[#be123c]",
      specChip: "Command Terms · Paper 4 Full Simulation",
      chipStyle: "bg-rose-50/90 text-[#e11d48] border-rose-200/80",
      graphic: (
        <svg viewBox="0 0 120 120" className="w-full h-full select-none overflow-visible">
          <defs>
            <radialGradient id="bioStackGlow5" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e11d48" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#e11d48" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="54" fill="url(#bioStackGlow5)" />
          <rect x="30" y="20" width="60" height="78" rx="5" fill="#fff1f2" stroke="#e11d48" strokeWidth="1.6" />
          <line x1="38" y1="36" x2="82" y2="36" stroke="#fda4af" strokeWidth="1.5" />
          <line x1="38" y1="48" x2="82" y2="48" stroke="#fda4af" strokeWidth="1.5" />
          <line x1="38" y1="60" x2="72" y2="60" stroke="#fda4af" strokeWidth="1.5" />
          <circle cx="80" cy="74" r="16" fill="white" stroke="#e11d48" strokeWidth="1.6" />
          <motion.line
            x1="80"
            y1="74"
            x2="80"
            y2="64"
            stroke="#be123c"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            style={{ originX: "80px", originY: "74px" }}
          />
          <text x="40" y="80" fill="#e11d48" fontSize="10" fontFamily="monospace" fontWeight="bold">[6M]</text>
          <text x="16" y="110" fill="#9f1239" fontSize="8" fontFamily="monospace">MP1·MP2·MP3·MP4·MP5·MP6</text>
        </svg>
      )
    },
    {
      num: "06",
      period: "Final Term",
      title: "Exam Technique & Final Consolidation",
      desc: "High-tariff 6-mark essay structuring, synoptic linking across topics, and Alternative to Practical Paper 6 data interpretation.",
      deliverable: "Grade 9 / Level 7 Exam Preparedness",
      topBorder: "from-[#0a1f3d] to-[#C7A24A]",
      specChip: "Synoptic Paper 5/6 · Level 7 / Grade 9 Target",
      chipStyle: "bg-slate-100/90 text-[#0a1f3d] border-slate-200/90",
      graphic: (
        <svg viewBox="0 0 120 120" className="w-full h-full select-none overflow-visible">
          <defs>
            <radialGradient id="bioStackGlow6" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#C7A24A" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="54" fill="url(#bioStackGlow6)" />
          <motion.circle
            cx="60"
            cy="60"
            r="18"
            fill="none"
            stroke="#C7A24A"
            strokeWidth="1.8"
            strokeDasharray="3 3"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            style={{ originX: "60px", originY: "60px" }}
          />
          <circle cx="60" cy="60" r="5" fill="#0f4a9b" />
          <line x1="60" y1="60" x2="25" y2="35" stroke="#0f4a9b" strokeWidth="1.6" />
          <line x1="60" y1="60" x2="95" y2="35" stroke="#C7A24A" strokeWidth="1.6" />
          <line x1="60" y1="60" x2="30" y2="90" stroke="#0f4a9b" strokeWidth="1.6" />
          <line x1="60" y1="60" x2="90" y2="90" stroke="#C7A24A" strokeWidth="1.6" />
          <circle cx="25" cy="35" r="4" fill="#0f4a9b" />
          <circle cx="95" cy="35" r="4" fill="#C7A24A" />
          <circle cx="30" cy="90" r="4" fill="#0f4a9b" />
          <circle cx="90" cy="90" r="4" fill="#C7A24A" />
          <text x="42" y="24" fill="#0f4a9b" fontSize="9" fontFamily="monospace" fontWeight="bold">SYNOPTIC</text>
          <text x="24" y="110" fill="#C7A24A" fontSize="8.5" fontFamily="monospace" fontWeight="bold">GRADE 9 / LEVEL 7</text>
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f4f7fc] border-t border-b border-slate-200/80 relative overflow-hidden select-none text-left">
      {/* Soft background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-[#0f4a9b]/10 via-[#10b981]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-xs font-bold mb-2">
            <Timer className="h-3.5 w-3.5 text-[#C7A24A]" />
            <span>PROGRESSION MAP</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-2 tracking-tight">
            Two Years, <span className="text-[#0f4a9b]">One Timeline</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Most parents manage the course without seeing what happens when. This shows the whole progression and where targeted tuition makes the most difference.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* Interactive Card Stack Container */}
          <div className="w-[330px] sm:w-[440px] md:w-[490px] h-[270px] sm:h-[295px]">
            <InteractiveCardStack
              cards={cardsData.map((step, idx) => (
                <div
                  key={idx}
                  className="w-full h-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_16px_40px_rgba(15,74,155,0.08)] flex flex-col justify-between select-none relative overflow-hidden group cursor-grab active:cursor-grabbing"
                  style={{
                    backgroundImage: "radial-gradient(#e2e8f0 0.85px, transparent 0.85px)",
                    backgroundSize: "15px 15px",
                  }}
                >
                  {/* Top Accent Strip */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${step.topBorder}`} />

                  {/* Floating 3D Biological Artwork in Background */}
                  <motion.div
                    className="absolute -right-4 -bottom-4 sm:-right-2 sm:-bottom-2 w-52 h-52 sm:w-64 sm:h-64 pointer-events-none opacity-25 sm:opacity-35 group-hover:opacity-45 transition-opacity duration-500 overflow-visible"
                    animate={{
                      x: [0, 8, -6, 0],
                      y: [0, -7, 5, 0],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 12 + idx * 2.5,
                      ease: "easeInOut",
                    }}
                  >
                    {step.graphic}
                  </motion.div>

                  {/* Foreground Content */}
                  <div className="relative z-10">
                    {/* Top Row: Step Number, Stage & Deliverable */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl sm:text-3xl font-black text-[#C7A24A] leading-none drop-shadow-xs">
                          {step.num}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50/90 text-[#0f4a9b] border border-blue-200/80 shadow-2xs">
                          {step.period}
                        </span>
                      </div>
                      <span className="text-[9.5px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 truncate max-w-[170px] sm:max-w-none">
                        ✓ {step.deliverable}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-base sm:text-lg font-black text-[#0a1f3d] mb-1.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3 pr-6 sm:pr-10">
                      {step.desc}
                    </p>

                    {/* Biological Spec Chip */}
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-md border text-[10px] font-mono font-bold shadow-2xs backdrop-blur-xs ${step.chipStyle}`}>
                      {step.specChip}
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-bold pt-2 border-t border-slate-100/90 text-slate-400">
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                      Drag or click card to cycle
                    </span>
                    <span className="text-[#0f4a9b] group-hover:text-[#C7A24A] transition-colors flex items-center gap-1 font-bold">
                      Next Stage
                    </span>
                  </div>
                </div>
              ))}
              sendToBackOnClick={true}
              randomRotation={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 7: Practical Skills & Internal Assessment ── */
function PracticalSkillsAndIA() {
  const practicalCards = [
    {
      num: "01",
      tag: "Criterion B · Experimental",
      title: "Research Question & Variables",
      icon: <Target className="w-4 h-4 text-[#0f4a9b]" />,
      desc: "Writing a focused, testable hypothesis with explicitly controlled biological variables for Criterion B.",
      keyFocus: "Controlled Variables"
    },
    {
      num: "02",
      tag: "Criterion C · Data Precision",
      title: "Data & Uncertainties",
      icon: <Calculator className="w-4 h-4 text-[#059669]" />,
      desc: "Consistent decimal precision, standard deviations, and justified error bars that prove biological slopes.",
      keyFocus: "Decimals & Error Bars"
    },
    {
      num: "03",
      tag: "Statistics · Analytical Rigor",
      title: "Statistical Testing",
      icon: <BarChart2 className="w-4 h-4 text-[#d97706]" />,
      desc: "Computing Student's t-test for comparing two means, Chi-squared (χ²) ratios, and Spearman's rank.",
      keyFocus: "t-test · Chi-squared (χ²)"
    },
    {
      num: "04",
      tag: "Criterion D · Critical Review",
      title: "Conclusion & Evaluation",
      icon: <FileCheck className="w-4 h-4 text-[#4f46e5]" />,
      desc: "Evaluating conclusions against raw data, apparatus errors vs biological variability, and improvements.",
      keyFocus: "Apparatus vs Variation"
    }
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-slate-50 relative overflow-hidden text-left border-t border-slate-100 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="text-center mb-4 sm:mb-5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-widest mb-1 shadow-2xs">
            <FlaskConical className="h-3 w-3 text-[#C7A24A]" />
            <span>PRACTICAL &amp; INTERNAL ASSESSMENT</span>
          </div>

          <h2 className="text-lg sm:text-2xl font-extrabold text-[#0a1f3d] leading-tight mb-1">
            The Biology practical work <span className="text-[#0f4a9b]">examiners actually assess</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-2xl mx-auto">
            Practical skills, Paper 6 / Alternative to Practical, and the IB Biology Internal Assessment reward experimental design, statistical treatment and honest evaluation. We coach every stage with mark-scheme precision.
          </p>
        </div>

        {/* 4 Cards: Mobile Horizontal Snap Scroll + Desktop 4-in-one-row Grid (Fits completely in one view) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3.5 mb-3 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-none touch-pan-x">
          {practicalCards.map((c, idx) => (
            <div
              key={idx}
              className="w-[78vw] max-w-[280px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0f4a9b]/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-transparent opacity-90" />

              <div>
                {/* Header Row: Step Badge & Tag */}
                <div className="flex items-center justify-between gap-1.5 mb-2">
                  <span className="text-[10px] font-mono font-black text-[#0f4a9b] bg-blue-50/90 px-2 py-0.5 rounded border border-blue-200/70 shrink-0">
                    STEP {c.num}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 truncate text-right">
                    {c.tag}
                  </span>
                </div>

                {/* Card Title & Icon */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-50/50 transition-all">
                    {c.icon}
                  </div>
                  <h3 className="text-xs sm:text-[13.5px] font-extrabold text-[#0a1f3d] leading-snug">
                    {c.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-[11px] sm:text-[11.5px] leading-relaxed mb-2.5">
                  {c.desc}
                </p>
              </div>

              {/* Focus Badge at bottom */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[9.5px]">
                <span className="font-semibold text-slate-400">Core Skill:</span>
                <span className="font-mono font-bold text-[#0f4a9b] bg-blue-50/70 px-1.5 py-0.5 rounded border border-blue-100/80 truncate max-w-[130px]">
                  {c.keyFocus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicator (Clean, below cards, no arrows, no dots) */}
        <div className="sm:hidden mb-2.5 flex justify-center">
          <SwipeIndicator text="Swipe to see more" hideArrows hideDots />
        </div>

        {/* Compact Sub-block: Crucial Mark Recovery & Statistics Guide */}
        <div className="bg-gradient-to-r from-blue-50/80 via-white to-amber-50/60 rounded-2xl p-2.5 sm:p-3 border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-2 text-left">
          <div className="flex items-center gap-2">
            <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-[#0f4a9b] bg-blue-100/70 px-2 py-0.5 rounded border border-blue-200 shrink-0">
              CRUCIAL MARK RECOVERY
            </span>
            <p className="text-[11px] sm:text-xs text-slate-700 font-medium leading-snug">
              <strong className="text-[#0a1f3d]">Data & Statistics Focus:</strong> p-values, χ² test &amp; degrees of freedom are where top marks are won.
            </p>
          </div>
          <a
            href="/blogs/why-igcse-biology-students-lose-marks-on-6-mark-questions"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0f4a9b] hover:text-[#0a1f3d] underline transition-colors shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#C7A24A]" />
            <span>How to Answer 6-Mark Questions</span>
          </a>
        </div>

      </div>
    </section>
  );
}



/* ── Section 9: Decision Helper (HL or SL? Four Honest Questions) ── */
function BiologyDecisionHelper() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const books = [
    {
      num: "01",
      volume: "Vol. I",
      theme: "Memory & Detail",
      gradient: "from-[#0f4a9b] via-[#163e77] to-[#0a1f3d]",
      accent: "#38bdf8",
      accentBg: "bg-sky-500/20 text-sky-300 border-sky-400/30",
      icon: Brain,
      q: "Does your child enjoy memorising detail and linking it into long explanations?",
      ans: "HL Biology requires encyclopaedic detail across extra topics (cladistics, gene expression regulation, Calvin cycle nuances, kidney counter-current multipliers) and expects multi-layered synoptic linking under strict time constraints. SL tests the core concepts thoroughly, but with significantly fewer metabolic steps to recall.",
      takeaway: "Choose HL only if your child has genuine stamina for extensive factual recall and synoptic essays."
    },
    {
      num: "02",
      volume: "Vol. II",
      theme: "Medicine & Career",
      gradient: "from-[#059669] via-[#047857] to-[#064e3b]",
      accent: "#34d399",
      accentBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
      icon: Heart,
      q: "Are they planning a university course in medicine, biomedical science, dentistry, veterinary science or biology?",
      ans: "Most premier medical schools (both in the UK, UAE, and internationally) mandate Chemistry HL, and many either require or strongly favour Biology at HL. If medicine or biological research is on their horizon, taking HL is the established pathway.",
      takeaway: "Essential for Medicine/Bio degrees; if pursuing Engineering or Law, SL frees up valuable study hours."
    },
    {
      num: "03",
      volume: "Vol. III",
      theme: "Data & Statistics",
      gradient: "from-[#4338ca] via-[#3730a3] to-[#1e1b4b]",
      accent: "#a78bfa",
      accentBg: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30",
      icon: BarChart2,
      q: "How comfortable are they with data handling and statistics?",
      ans: "Both HL and SL require statistical analysis in the Internal Assessment. However, HL exam papers feature significantly more quantitative data analysis and experimental design questions. A child comfortable reading rates, slopes, and error bars will thrive in HL.",
      takeaway: "HL examinations reward quantitative reasoning, standard deviation interpretation, and chi-squared testing."
    },
    {
      num: "04",
      volume: "Vol. IV",
      theme: "Subject Workload",
      gradient: "from-[#92400e] via-[#78350f] to-[#451a03]",
      accent: "#fbbf24",
      accentBg: "bg-amber-500/20 text-amber-300 border-amber-400/30",
      icon: Layers,
      q: "How does Biology fit alongside the rest of their subject load?",
      ans: "Biology HL carries one of the heaviest reading and recall workloads in the IB Diploma. If paired with Maths AA HL or Chemistry HL, study schedules require rigorous time management from Term 1.",
      takeaway: "Pairing Bio HL + Chem HL + Maths HL is the highest-workload combination in the entire IB Diploma."
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-14 bg-slate-50 relative overflow-hidden text-left border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[10.5px] font-extrabold uppercase tracking-widest mb-2 shadow-2xs">
            <HelpCircle className="h-3.5 w-3.5 text-[#C7A24A]" />
            <span>DECISION HELPER</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
            HL or SL? <span className="text-[#0f4a9b]">Four honest questions</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Not a quiz. Four things worth being truthful about before your child's IB subject choices are locked in.
          </p>
          <p className="text-[11px] font-bold text-[#0f4a9b] mt-1.5">
            Tap any biology book to inspect the question and mark-scheme reality.
          </p>
        </div>

        {/* ── 4 Interactive Biology Books ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5 mb-7">
          {books.map((book, idx) => {
            const isSelected = activeQuestion === idx;
            const IconComp = book.icon;
            return (
              <button
                key={book.num}
                type="button"
                onClick={() => setActiveQuestion(isSelected ? null : idx)}
                className={`group relative text-left rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between aspect-[3/4] shadow-md border ${
                  isSelected
                    ? "ring-2 sm:ring-[3px] ring-[#C7A24A] -translate-y-2 shadow-2xl scale-[1.02]"
                    : "hover:-translate-y-1.5 hover:shadow-xl opacity-90 hover:opacity-100"
                } bg-gradient-to-br ${book.gradient}`}
              >
                {/* Book Spine Texture Shadow (Left edge) */}
                <div className="absolute inset-y-0 left-0 w-3 sm:w-4 bg-black/25 border-r border-white/10" />
                
                {/* Book Bookmark Ribbon */}
                <div className="absolute top-0 right-3.5 sm:right-4 w-3.5 sm:w-4 h-6 sm:h-7 bg-[#C7A24A] shadow-sm flex flex-col items-center">
                  <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[5px] border-b-transparent mt-auto" />
                </div>

                {/* Top Book Header */}
                <div className="pl-2 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase text-white/70">
                      IB BIO {book.volume}
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-white/80 mt-0.5 truncate">
                    {book.theme}
                  </div>
                </div>

                {/* Middle: Biology Cover Icon */}
                <div className="pl-2 my-auto relative z-10 flex flex-col items-center justify-center py-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xs flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                {/* Bottom Cover Title */}
                <div className="pl-2 relative z-10 border-t border-white/15 pt-2">
                  <span className="text-[9px] font-bold text-[#fde68a] uppercase tracking-wider block">
                    Question
                  </span>
                  <div className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-none mt-0.5">
                    {book.num}
                  </div>
                  <div className="mt-1 flex items-center text-[9px] sm:text-[10px] text-white/80 font-medium">
                    <span>{isSelected ? "Open" : "Tap to open"}</span>
                  </div>
                </div>

                {/* Subtle sheen highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />
              </button>
            );
          })}
        </div>

        {/* ── Active Revealed Question Modal Dialog (Appears as a card on the screen) ── */}
        <AnimatePresence>
          {activeQuestion !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200">
              {/* Backdrop Click Dismiss */}
              <div 
                className="absolute inset-0" 
                onClick={() => setActiveQuestion(null)} 
              />

              <motion.div
                key={activeQuestion}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 10 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                onTouchStart={(e) => {
                  setTouchEnd(null);
                  setTouchStart(e.targetTouches[0].clientX);
                }}
                onTouchMove={(e) => {
                  setTouchEnd(e.targetTouches[0].clientX);
                }}
                onTouchEnd={() => {
                  if (!touchStart || !touchEnd) return;
                  const distance = touchStart - touchEnd;
                  if (distance > 45 && activeQuestion !== null && activeQuestion < books.length - 1) {
                    setActiveQuestion(activeQuestion + 1);
                  }
                  if (distance < -45 && activeQuestion !== null && activeQuestion > 0) {
                    setActiveQuestion(activeQuestion - 1);
                  }
                }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-2xl relative z-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-extrabold text-[#0f4a9b] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200 uppercase">
                      Question {books[activeQuestion].num}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {books[activeQuestion].theme}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-400">
                      {activeQuestion + 1} of 4
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveQuestion(null)}
                      className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
                      aria-label="Close question"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Question Title */}
                <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-[#0a1f3d] mb-3 leading-snug">
                  {books[activeQuestion].q}
                </h3>

                {/* Full Answer Details */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
                  {books[activeQuestion].ans}
                </p>

                {/* Key Takeaway Box */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 flex items-start gap-2.5 text-xs text-amber-900 leading-snug">
                  <Sparkles className="w-4 h-4 text-[#C7A24A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold uppercase text-[10px] tracking-wider text-amber-800 block mb-0.5">
                      Strategic Advisor Advice:
                    </span>
                    <span>{books[activeQuestion].takeaway}</span>
                  </div>
                </div>

                {/* Quick Navigation Footer: Aligned, responsive, no arrows on mobile, no dots on mobile */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2.5 w-full">
                  <button
                    type="button"
                    disabled={activeQuestion === 0}
                    onClick={() => setActiveQuestion((prev) => (prev !== null ? Math.max(0, prev - 1) : 0))}
                    className="px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer transition-colors shrink-0"
                  >
                    <ChevronLeft className="hidden sm:inline w-4 h-4 mr-0.5" />
                    <span>Prev</span>
                  </button>

                  {/* Mobile: Counter + Swipe Hint (No dots, no arrows) | Desktop: Interactive Dots */}
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="sm:hidden text-[11px] font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      {activeQuestion + 1} / {books.length}
                    </span>
                    <span className="sm:hidden text-[9.5px] font-semibold text-slate-400 mt-0.5">
                      Swipe to see more
                    </span>

                    {/* Desktop Dots only */}
                    <div className="hidden sm:flex items-center gap-1.5">
                      {books.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={() => setActiveQuestion(dotIdx)}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            activeQuestion === dotIdx
                              ? "w-5 bg-[#0f4a9b]"
                              : "w-2 bg-slate-300 hover:bg-slate-400"
                          }`}
                          aria-label={`Jump to Question ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={activeQuestion === books.length - 1}
                    onClick={() => setActiveQuestion((prev) => (prev !== null ? Math.min(books.length - 1, prev + 1) : 0))}
                    className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-white bg-[#0f4a9b] hover:bg-[#0a3a79] rounded-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer shadow-2xs transition-colors shrink-0"
                  >
                    <span>Next</span>
                    <ChevronRight className="hidden sm:inline w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ── Extra A-Level Workload Box (Centered & Ustaad Branding Blue Tone) ── */}
        <div className="bg-gradient-to-br from-[#0f4a9b] via-[#0b3877] to-[#07244f] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-blue-400/20 text-center max-w-3xl mx-auto relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#C7A24A]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3 text-[#C7A24A]" />
            <span>A-Level Workload Reality</span>
          </div>

          <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white mb-2.5 leading-snug">
            Is your child choosing Biology as one of three A-Levels? Here is what the workload looks like:
          </h3>
          
          <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed max-w-2xl mx-auto">
            A-Level Biology (Cambridge 9700 / Edexcel IAL) requires bridging the gap from simple GCSE recall to synoptic essay writing (Paper 5) and advanced practical skills (Paper 3 / Paper 5). The course moves quickly; establishing diagnostic support early prevents cumulative topic debt.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ── Animated Biology Icons ── */
const AnimatedCellIcon = () => (
  <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-emerald-500/5 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] overflow-hidden shrink-0">
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
      {/* Pulsing Outer Cell Membrane */}
      <motion.ellipse
        cx="24"
        cy="24"
        rx="18"
        ry="17"
        stroke="#10b981"
        strokeWidth="2"
        strokeDasharray="3 2"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
      {/* Inner Cytoplasm Glow */}
      <circle cx="24" cy="24" r="14" fill="#10b981" fillOpacity="0.08" />
      {/* Pulsing Nucleus */}
      <motion.circle
        cx="22"
        cy="22"
        r="6"
        fill="#059669"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <circle cx="20.5" cy="20.5" r="2" fill="#a7f3d0" />
      {/* Floating Organelle 1 (Mitochondrion) */}
      <motion.ellipse
        cx="32"
        cy="20"
        rx="3.5"
        ry="1.8"
        fill="#0d9488"
        animate={{
          x: [0, 1.5, 0, -1.5, 0],
          y: [0, -1.5, 0, 1.5, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Floating Organelle 2 (Vacuole/Ribosomes) */}
      <motion.circle
        cx="26"
        cy="33"
        r="2.5"
        fill="#14b8a6"
        animate={{
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <circle cx="16" cy="28" r="1.5" fill="#34d399" />
    </svg>
  </div>
);

const AnimatedDnaIcon = () => (
  <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 via-[#0f4a9b]/15 to-indigo-500/10 border border-[#0f4a9b]/30 shadow-[0_0_15px_rgba(15,74,155,0.18)] overflow-hidden shrink-0">
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
      {/* Animated Base Pairs Waves */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.g
          key={i}
          animate={{
            scaleX: [1, 0.15, 1],
            opacity: [0.95, 0.45, 0.95],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.32,
          }}
        >
          <line
            x1="14"
            y1={10 + i * 5.5}
            x2="34"
            y2={10 + i * 5.5}
            stroke={i % 2 === 0 ? '#0f4a9b' : '#3b82f6'}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="14" cy={10 + i * 5.5} r="2.2" fill="#0f4a9b" />
          <circle cx="34" cy={10 + i * 5.5} r="2.2" fill="#60a5fa" />
        </motion.g>
      ))}
      {/* Central Hydrogen Bonding Sparkle */}
      <motion.circle
        cx="24"
        cy="24"
        r="2"
        fill="#C7A24A"
        animate={{ scale: [0.8, 1.6, 0.8], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  </div>
);

const AnimatedBioRhythmIcon = () => (
  <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/15 via-[#C7A24A]/15 to-purple-500/10 border border-[#C7A24A]/35 shadow-[0_0_15px_rgba(199,162,74,0.18)] overflow-hidden shrink-0">
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
      {/* Bio-electrical ECG Grid line */}
      <line x1="6" y1="24" x2="42" y2="24" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" />
      {/* Animated Action Potential Wave */}
      <motion.path
        d="M6 24 H15 L18 19 L21 29 L25 12 L29 34 L32 24 H42"
        stroke="#d97706"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          pathLength: [0.2, 1, 0.2],
          pathOffset: [0, 1, 2],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {/* Glowing Action Potential Pulse Dot */}
      <motion.circle
        cx="25"
        cy="12"
        r="3"
        fill="#b45309"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <circle cx="25" cy="12" r="1.2" fill="#fef3c7" />
    </svg>
  </div>
);

/* ── Section 10: Curriculum Pathways (Streamlined Minimal Design) ── */
function BiologyCurriculumPathways() {
  const pathways = [
    {
      level: "Years 10–11",
      title: "IGCSE & GCSE Biology",
      subtitle: "Cellular Systems & Organisms",
      iconComponent: <AnimatedCellIcon />,
      badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      topStripe: "from-emerald-500 via-teal-400 to-emerald-600",
      hoverBorder: "hover:border-emerald-500/40",
      link: "/igcse",
      linkLabel: "Explore IGCSE Biology",
      pillars: [
        "Cambridge (0610) & Edexcel (4BI1) syllabus mastery",
        "Paper 4 structured theory & Paper 6 lab skills",
        "Step-by-step 6-mark command word technique"
      ]
    },
    {
      level: "Years 12–13",
      title: "A-Level Biology",
      subtitle: "Biochemistry & Genetics",
      iconComponent: <AnimatedDnaIcon />,
      badgeClass: "bg-blue-50 text-[#0f4a9b] border-blue-200",
      topStripe: "from-[#0f4a9b] via-blue-500 to-[#C7A24A]",
      hoverBorder: "hover:border-[#0f4a9b]/40",
      link: "/a-level",
      linkLabel: "Explore A-Level Biology",
      pillars: [
        "Cambridge 9700 & Pearson Edexcel IAL syllabus",
        "Synoptic essay planning & Paper 5 data analysis",
        "Targeted medicine & bioscience university prep"
      ]
    },
    {
      level: "Years 12–13",
      title: "IB DP Biology (SL & HL)",
      subtitle: "Systems Biology & IA",
      iconComponent: <AnimatedBioRhythmIcon />,
      badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
      topStripe: "from-[#C7A24A] via-amber-500 to-[#0f4a9b]",
      hoverBorder: "hover:border-amber-500/40",
      link: "/ib-curriculum",
      linkLabel: "Explore IB Biology",
      pillars: [
        "Full 2025/2026 Themes A–D syllabus alignment",
        "End-to-end IA research design & Chi-Square testing",
        "HL extensions: gene regulation & chemiosmosis"
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-slate-50/70 relative overflow-hidden text-left border-t border-slate-100">
      {/* Ambient Scientific Background Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-r from-emerald-100/25 via-blue-100/35 to-amber-100/25 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-widest mb-1.5 shadow-2xs">
            <Dna className="h-3 w-3 text-[#C7A24A]" />
            <span>CURRICULUM SPECIALISATION</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] tracking-tight mb-1.5">
            The Biology Journey <span className="text-[#0f4a9b]">With Ustaad</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Tailored instruction aligned with the exact syllabus your child studies across Dubai schools.
          </p>
        </div>

        {/* 3 Pathway Cards (Grid on Desktop, Touch-Swipeable on Mobile) */}
        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pt-1 pb-3 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x">
          {pathways.map((card, i) => (
            <div
              key={i}
              className={`w-[85vw] sm:w-[310px] max-w-[340px] md:max-w-none md:w-auto shrink-0 snap-center md:shrink bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_4px_20px_-6px_rgba(15,74,155,0.06)] hover:shadow-[0_14px_32px_-8px_rgba(15,74,155,0.12)] ${card.hoverBorder} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
            >
              {/* Top Glowing Accent Line */}
              <div
                className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${card.topStripe} transition-all duration-300 group-hover:h-1.5`}
                aria-hidden="true"
              />

              <div>
                {/* Top Bar: Animated Biology Icon + Stage Level */}
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  {card.iconComponent}
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${card.badgeClass}`}>
                    {card.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] mb-0.5 leading-snug group-hover:text-[#0f4a9b] transition-colors">
                  {card.title}
                </h3>

                {/* Biology Topic Tag */}
                <p className="text-[11px] font-semibold text-[#0f4a9b] mb-3">
                  {card.subtitle}
                </p>

                {/* Streamlined Syllabus Key Pillars */}
                <div className="space-y-2 mb-4">
                  {card.pillars.map((pil, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-700 leading-snug"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pil}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card CTA Link */}
              <div className="pt-2.5 border-t border-slate-100">
                <a
                  href={card.link}
                  className="inline-flex items-center text-xs font-bold text-[#0f4a9b] hover:text-[#0a3a79] transition-colors"
                >
                  <span>{card.linkLabel}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden mt-3 flex justify-center">
          <SwipeIndicator text="Swipe to see more" hideArrows hideDots />
        </div>

        {/* Bottom Trust Badge */}
        <div className="text-center mt-5 sm:mt-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0a1f3d] text-[11px] sm:text-xs font-bold border border-slate-200/90 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>100% Dubai Syllabus Aligned · Cambridge, Edexcel &amp; IB Diploma</span>
          </span>
        </div>

      </div>
    </section>
  );
}

/* ── Section 11: Worked Question Showcase ── */
function WorkedQuestionShowcase() {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  const stages = [
    {
      num: "Stage 1",
      name: "Read Command Term",
      title: "Identify 'Explain' vs 'Describe'",
      summary: "The question asks: 'Explain the effect of increasing temperature from 10°C to 60°C on the rate of an amylase-catalysed reaction. [6 marks]'",
      points: [
        "Command term is 'Explain', which demands underlying reasons and biological mechanisms, not merely a description of the graph line.",
        "Split the temperature range into two distinct biological phases: (1) 10°C to optimum (~37°C–40°C), and (2) optimum to 60°C."
      ]
    },
    {
      num: "Stage 2",
      name: "Plan the Chain",
      title: "Map Cause → Mechanism → Effect",
      summary: "Never write unlinked sentences. Build an unbroken causal chain.",
      points: [
        "Phase 1 Chain: Higher temp → increased kinetic energy of molecules → faster movement → higher frequency of successful collisions between amylase active site and starch substrate → more enzyme-substrate complexes formed per unit time.",
        "Phase 2 Chain: Thermal energy exceeds bond strength → hydrogen and ionic bonds in tertiary protein structure vibrate and break → active site changes conformation (denatures) → starch no longer complementary → reaction rate falls to zero."
      ]
    },
    {
      num: "Stage 3",
      name: "Precise Vocabulary",
      title: "Substitute Mark-Scheme Wording",
      summary: "Examiners penalise everyday approximations.",
      points: [
        "✗ DO NOT write: 'The enzyme gets tired' or 'the enzyme dies'.",
        "✓ DO write: 'The enzyme undergoes irreversible thermal denaturation.'",
        "✗ DO NOT write: 'The starch fits in the enzyme.'",
        "✓ DO write: 'Substrate is complementary in shape to the specific 3D conformation of the active site.'"
      ]
    },
    {
      num: "Stage 4",
      name: "Add the Data",
      title: "Integrate Values & Quantitative Proof",
      summary: "Biology examiners award marks for numerical reference points.",
      points: [
        "Identify the optimum temperature explicitly (e.g. 'Optimum reaction rate is observed between 37°C and 40°C').",
        "Reference the Q₁₀ temperature coefficient (rate approximately doubles for every 10°C rise below optimum).",
        "State that beyond 55°C–60°C, the rate drops to 0 arbitrary units as 100% of enzyme molecules are denatured."
      ]
    },
    {
      num: "Stage 5",
      name: "Check Mark Scheme",
      title: "Count the 6 Marking Points",
      summary: "Examiners tick 6 independent marking points (MP1 to MP6):",
      points: [
        "MP1: Kinetic energy increase (10°C to ~40°C).",
        "MP2: Increased collision frequency between enzyme active site and substrate.",
        "MP3: Increased rate of enzyme-substrate (E-S) complex formation.",
        "MP4: Optimum temperature reached (~37°C–40°C).",
        "MP5: Thermal vibrations break tertiary bonds (hydrogen/ionic/disulfide).",
        "MP6: Active site denatures and loses complementary shape; rate plummets to zero."
      ]
    }
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-slate-50 relative overflow-hidden text-left border-t border-slate-100 flex flex-col justify-center">
      {/* ── Biology Background Theme: Ambient Molecular Grid, Floating Badges & Icons ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Soft Radial Gradients */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />

        {/* Ambient SVG Molecular & DNA Helix Lattice */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.09]"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagonal molecular structures */}
          <g stroke="#0f4a9b" strokeWidth="1.5">
            <polygon points="120,60 160,83 160,129 120,152 80,129 80,83" />
            <polygon points="160,83 200,60 240,83 240,129 200,152 160,129" />
            <line x1="120" y1="152" x2="120" y2="195" />
            <circle cx="120" cy="195" r="4" fill="#0f4a9b" />

            <polygon points="1060,420 1100,443 1100,489 1060,512 1020,489 1020,443" />
            <polygon points="1100,443 1140,420 1180,443 1180,489 1140,512 1100,489" />
            <line x1="1020" y1="443" x2="990" y2="425" />
            <circle cx="990" cy="425" r="4" fill="#0f4a9b" />
          </g>

          {/* DNA Strand waves across background */}
          <path
            d="M -50,300 C 150,220 300,380 500,300 C 700,220 850,380 1050,300 C 1150,260 1250,340 1350,300"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M -50,300 C 150,380 300,220 500,300 C 700,380 850,220 1050,300 C 1150,340 1250,260 1350,300"
            stroke="#0f4a9b"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </svg>

        {/* Ambient Big Watermark Icons */}
        <div className="absolute -top-6 -left-6 text-[#0f4a9b]/[0.05] hidden lg:block">
          <Dna className="w-56 h-56 rotate-12" />
        </div>
        <div className="absolute -bottom-10 -right-6 text-emerald-800/[0.05] hidden lg:block">
          <Microscope className="w-60 h-60 -rotate-12" />
        </div>
        <div className="absolute top-1/3 -left-8 text-blue-900/[0.04] hidden md:block">
          <FlaskConical className="w-44 h-44 rotate-6" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="text-center mb-3 sm:mb-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-widest mb-1.5 shadow-2xs">
            <Sparkles className="h-3 w-3 text-[#C7A24A]" />
            <span>INTERACTIVE WORKED EXAMPLE</span>
          </div>

          <h2 className="text-lg sm:text-2xl font-extrabold text-[#0a1f3d] leading-tight mb-1">
            Inside a <span className="text-[#0f4a9b]">6-Mark Biology Question</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
            Inspect step-by-step how examiners award marks and how a student transforms an answer into a full 6/6.
          </p>
        </div>

        {/* Active Stage Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-slate-200/90 shadow-xs relative">
          <div className="flex items-center justify-between border-b border-slate-200/70 pb-2.5 mb-2.5">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#0f4a9b] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 uppercase">
                {stages[selectedStage].num}
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-[#0a1f3d] mt-1">
                {stages[selectedStage].title}
              </h3>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              Exam Precision Step
            </span>
          </div>

          <p className="text-xs sm:text-[13px] text-slate-700 font-medium mb-2.5">
            {stages[selectedStage].summary}
          </p>

          <div className={`grid ${stages[selectedStage].points.length >= 4 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-2`}>
            {stages[selectedStage].points.map((pt, idx) => (
              <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] sm:text-xs text-slate-700 leading-snug flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold text-xs shrink-0 mt-0.5">•</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="mt-3.5 pt-3 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-500">
              <span>Amylase Temperature Assay</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Score: 6/6 Marks
              </span>
            </div>

            {/* Interactive Step Navigation */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedStage((prev) => Math.max(0, prev - 1))}
                disabled={selectedStage === 0}
                className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Prev
              </button>

              <span className="text-[11px] font-mono font-bold text-slate-500 px-1">
                {selectedStage + 1} / {stages.length}
              </span>

              <button
                type="button"
                onClick={() => setSelectedStage((prev) => (prev + 1) % stages.length)}
                className="px-3 py-1 rounded-lg bg-[#0f4a9b] text-white hover:bg-[#0a3a79] text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
              >
                {selectedStage === stages.length - 1 ? (
                  <>Restart <RotateCcw className="w-3 h-3" /></>
                ) : (
                  <>Next Step <ChevronRight className="w-3.5 h-3.5" /></>
                )}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Section 12: Curriculum Transition ── */
function CurriculumTransition() {
  const transitions = [
    {
      past: "Recalling textbook definitions & fixed diagrams",
      present: "Applying concepts to novel organisms & data contexts"
    },
    {
      past: "Isolated facts and single-word fill-in blanks",
      present: "Multi-step chains of biochemical cause & effect"
    },
    {
      past: "Following pre-set cookbook practicals in class",
      present: "Designing controlled investigations & IA protocols"
    },
    {
      past: "End-of-year papers testing syllabus recall",
      present: "Two-year IA coursework & evaluative analysis"
    }
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-white relative overflow-hidden text-left border-t border-slate-100 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="text-center mb-4 sm:mb-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-widest mb-1.5 shadow-2xs">
            <RefreshCw className="h-3 w-3 text-[#C7A24A]" />
            <span>TRANSITION ADAPTATION</span>
          </div>

          <h2 className="text-lg sm:text-2xl font-extrabold text-[#0a1f3d] leading-tight mb-1 sm:mb-1.5">
            Moving into IB or A-Level <span className="text-[#0f4a9b]">partway through</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
            Students arriving from another curriculum or moving up from Year 11 are rarely behind on content. They are behind on how the work is judged.
          </p>
        </div>

        {/* Transition Table */}
        <div className="bg-slate-50/80 rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-2 bg-[#0a1f3d] text-white px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
            <div>What was rewarded previously</div>
            <div>What the new course asks for</div>
          </div>
          <div className="divide-y divide-slate-200/80">
            {transitions.map((item, idx) => (
              <div key={idx} className="grid grid-cols-2 px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs leading-snug gap-3 sm:gap-4 items-center">
                <div className="text-slate-500 flex items-start gap-1.5 sm:gap-2">
                  <span className="text-rose-500 font-bold shrink-0 text-xs">✗</span>
                  <span>{item.past}</span>
                </div>
                <div className="text-[#0a1f3d] font-semibold flex items-start gap-1.5 sm:gap-2">
                  <span className="text-emerald-600 font-bold shrink-0 text-xs">✓</span>
                  <span>{item.present}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Section 13: 3-Step Diagnostic Approach (imported from ./shared) ── */

/* ── Section 14: Reviews Slider ── */
const PARENT_REVIEWS = [
  {
    text: "Our daughter was getting 5s in IB Biology HL at Dubai College because she kept writing descriptions instead of explanations. After four sessions targeting command words and biochemical linking, her Paper 2 technique transformed completely.",
    name: "Dr. K. Al-Mansoor",
    initials: "KM",
    location: "Al Barsha, Dubai",
    subject: "IB Biology HL · Dubai College"
  },
  {
    text: "The IA coaching alone was worth every dirham. Her tutor helped refine her research question on catalase inhibition and showed her how to run proper Chi-squared and t-tests with error bars. Outstanding precision.",
    name: "S. Crawford",
    initials: "SC",
    location: "Jumeirah Golf Estates, Dubai",
    subject: "IB DP Biology SL · JESS Arabian Ranches"
  },
  {
    text: "My son used to dread 6-mark questions on Cambridge IGCSE Biology Paper 4. Ustaad gave him a simple three-step template that stopped him dropping marks on vocabulary. His teacher noticed the difference in the next assessment.",
    name: "R. Mehta",
    initials: "RM",
    location: "Downtown Dubai",
    subject: "Cambridge IGCSE Biology · GEMS Wellington"
  },
  {
    text: "Finding an A-Level Biology tutor who actually knows the Cambridge 9700 syllabus in depth is difficult in Dubai. Ustaad paired us with a real specialist who broke down respiration and photosynthesis until it clicked.",
    name: "N. Tremblay",
    initials: "NT",
    location: "Palm Jumeirah, Dubai",
    subject: "A-Level Biology 9700 · Nord Anglia Dubai"
  }
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

/* ── Section 15: FAQs (10 Detailed Questions in British English) ── */
const FAQS = [
  {
    q: "How much does a Biology tutor cost in Dubai?",
    plain: "Biology tutoring fees in Dubai depend on the level of study (IGCSE, A-Level, or IB DP) and whether the student requires intensive coursework or IA coaching. For up-to-date session rates and package options, please visit our pricing page or contact our team directly for a transparent quote.",
    a: <>Biology tutoring fees in Dubai depend on the level of study (IGCSE, A-Level, or IB DP) and whether the student requires intensive coursework or IA coaching. For up-to-date session rates and package options, please visit our <a href="/contact" className="text-[#0f4a9b] font-semibold underline">contact page</a> or speak with our academic advisory team on WhatsApp for a transparent quote.</>
  },
  {
    q: "Do you teach IGCSE, A-Level and IB Biology?",
    plain: "Yes. We provide specialist 1-to-1 biology tuition across Cambridge IGCSE (0610/0970), Pearson Edexcel IGCSE (4BI1), Cambridge International A-Level (9700), Pearson Edexcel IAL, and the International Baccalaureate (IB) Diploma Programme at both Standard Level (SL) and Higher Level (HL).",
    a: <>Yes. We provide specialist 1-to-1 biology tuition across Cambridge IGCSE (0610/0970), Pearson Edexcel IGCSE (4BI1), Cambridge International A-Level (9700), Pearson Edexcel IAL, and the International Baccalaureate (IB) Diploma Programme at both Standard Level (SL) and Higher Level (HL).</>
  },
  {
    q: "What is the IB Biology Internal Assessment, and how much does it count?",
    plain: "The Internal Assessment (IA) is an individual scientific investigation that contributes 20% of the final IB Biology grade. Students formulate their own research question, design an experimental method or database simulation, process the biological data with statistical tests, and evaluate limitations. It is completed before written examinations, making it the most controllable mark on the course.",
    a: <>The Internal Assessment (IA) is an individual scientific investigation that contributes 20% of the final IB Biology grade. Students formulate their own research question, design an experimental method or database simulation, process the biological data with statistical tests, and evaluate limitations. It is completed before written examinations, making it the most controllable mark on the course.</>
  },
  {
    q: "My child understands Biology but loses marks in exams. Why?",
    plain: "Biology mark schemes reward precise technical terminology and rigorous causal chains. Students often write conversational approximations—such as 'the enzyme dies' instead of 'the tertiary active site denatures'—or provide descriptive summaries when questions require analytical explanation. Our tutors diagnose whether marks leak from recall, answer structure, or data handling.",
    a: <>Biology mark schemes reward precise technical terminology and rigorous causal chains. Students often write conversational approximations—such as 'the enzyme dies' instead of 'the tertiary active site denatures'—or provide descriptive summaries when questions require analytical explanation. Our tutors diagnose whether marks leak from recall, answer structure, or data handling.</>
  },
  {
    q: "How do I help my child answer 6-mark questions?",
    plain: "Top-tier 6-mark responses require an unbroken chain of cause and effect: Cause → Mechanism → Effect. Rather than writing a disorganised list of facts, students should plan their points, integrate exact mark-scheme keywords, and quote quantitative data from accompanying graphs. Our structured 6-mark drills train students to secure full credit systematically.",
    a: <>Top-tier 6-mark responses require an unbroken chain of cause and effect: Cause → Mechanism → Effect. Rather than writing a disorganised list of facts, students should plan their points, integrate exact mark-scheme keywords, and quote quantitative data from accompanying graphs. Read our <a href="/blogs/why-igcse-biology-students-lose-marks-on-6-mark-questions" className="text-[#0f4a9b] font-semibold underline">guide to 6-mark biology questions</a> for step-by-step examples.</>
  },
  {
    q: "Should my child take Biology HL or SL?",
    plain: "If your child intends to study medicine, dentistry, veterinary medicine, or biomedical sciences at university, Higher Level (HL) is typically required. Standard Level (SL) covers core biological principles with less mathematical and biochemical depth. We evaluate your child's overall workload, career goals, and data-handling confidence before helping you finalise this choice.",
    a: <>If your child intends to study medicine, dentistry, veterinary medicine, or biomedical sciences at university, Higher Level (HL) is typically required. Standard Level (SL) covers core biological principles with less mathematical and biochemical depth. We evaluate your child's overall workload, career goals, and data-handling confidence before helping you finalise this choice.</>
  },
  {
    q: "Are the lessons online or in Dubai?",
    plain: "All Ustaad lessons are delivered 1-to-1 online via our dedicated interactive digital whiteboards. This allows families across Dubai (including Emirates Hills, Jumeirah, Downtown, Arabian Ranches, and Dubai Marina) to work directly with senior exam-board specialists without commute times, while enabling session recordings for revision.",
    a: <>All Ustaad lessons are delivered 1-to-1 online via our dedicated interactive digital whiteboards. This allows families across Dubai (including Emirates Hills, Jumeirah, Downtown, Arabian Ranches, and Dubai Marina) to work directly with senior exam-board specialists without commute times, while enabling session recordings for revision.</>
  },
  {
    q: "Is a Biology tutor useful for a medicine or biomedical application?",
    plain: "Yes. Beyond securing the required Grade 9, A*, or Level 7 in examinations, our biology specialists mentor aspiring medical applicants. We reinforce human physiology, clinical data interpretation, and ethical analysis, helping students demonstrate authentic scientific curiosity in university interviews and personal statements.",
    a: <>Yes. Beyond securing the required Grade 9, A*, or Level 7 in examinations, our biology specialists mentor aspiring medical applicants. We reinforce human physiology, clinical data interpretation, and ethical analysis, helping students demonstrate authentic scientific curiosity in university interviews and personal statements.</>
  },
  {
    q: "Do you cover the current Cambridge 9700, Edexcel and IB Biology syllabuses?",
    plain: "Yes. All our tutors teach the current specifications, including the latest IB DP Biology curriculum organised around Themes A to D (Unity and Diversity, Form and Function, Interaction and Interdependence, and Continuity and Change), alongside the updated Cambridge 9700 and Pearson Edexcel IAL syllabuses.",
    a: <>Yes. All our tutors teach the current specifications, including the latest IB DP Biology curriculum organised around Themes A to D (Unity and Diversity, Form and Function, Interaction and Interdependence, and Continuity and Change), alongside the updated Cambridge 9700 and Pearson Edexcel IAL syllabuses.</>
  },
  {
    q: "Who will actually teach my child?",
    plain: "Your child will be matched with a verified, degree-qualified biology specialist with extensive experience teaching British and IB curricula in UAE schools. Every tutor passes our rigorous four-stage screening process, assessing syllabus mastery, pedagogical clarity, and exam-board alignment before their first lesson.",
    a: <>Your child will be matched with a verified, degree-qualified biology specialist with extensive experience teaching British and IB curricula in UAE schools. Every tutor passes our rigorous four-stage screening process, assessing syllabus mastery, pedagogical clarity, and exam-board alignment before their first lesson. You can <a href="/tutors" className="text-[#0f4a9b] font-semibold underline">meet our faculty</a> or book a trial to begin.</>
  }
];

export default function BiologyTutorDubaiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEOHead
        title="Biology Tutor Dubai | IGCSE, A-Level & IB Biology | Ustaad"
        description="1-to-1 Biology tutors in Dubai for IGCSE, A-Level & IB DP SL/HL. Master 6-mark answers, practicals and the IA. Book a free 30-minute trial with Ustaad."
        canonical="/subjects/biology-tutor-dubai"
        placename="Dubai, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Dubai',
            url: '/subjects/biology-tutor-dubai',
            name: 'Ustaad | Biology Tutor Dubai',
            description: '1-to-1 Biology tutors in Dubai for IGCSE, A-Level & IB DP SL/HL. Master 6-mark answers, practicals and the IA. Book a free 30-minute trial with Ustaad.',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Biology', url: '/biology' },
            { name: 'Biology Tutor Dubai', url: '/subjects/biology-tutor-dubai' },
          ]),
          serviceSchema('Private Biology Tutoring Dubai', 'Expert 1-to-1 Biology tutors in Dubai for IGCSE, A-Level, and IB DP students. Specialised in 6-mark questions, data handling, and Internal Assessments.', '/subjects/biology-tutor-dubai'),
          courseSchema({
            courseName: 'IGCSE, A-Level & IB Biology Tutoring Dubai',
            description: 'Specialist 1-to-1 biology tuition in Dubai for Cambridge 0610, Edexcel, A-Level 9700 and IB DP Biology.',
            url: '/subjects/biology-tutor-dubai',
            city: 'Dubai',
          }),
          faqSchema(FAQS.map(f => ({ q: f.q, a: f.plain }))),
        ]}
      />

      {/* SECTION 01: HERO */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center pt-8 pb-4 md:pt-12 md:pb-6">
        <BiologyHeroBackground />
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-3 sm:pt-24 sm:pb-4 max-w-4xl w-full">
          <h1 className="font-extrabold tracking-tight text-white leading-[1.12] mb-3 text-[clamp(1.75rem,4.5vw,3.1rem)] max-w-3xl">
            Biology Tutor Dubai,{' '}
            <span style={{ background: 'linear-gradient(92deg,#34d399 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Built for Exam Precision
            </span>
          </h1>

          <p className="text-blue-100/80 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl mb-6 px-4 font-medium">
            Biology marks are rarely lost on knowledge alone. They are lost on how an answer is built. Work 1-to-1 with specialist Biology tutors in Dubai to master 6-mark questions, data analysis, practical skills and the Internal Assessment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 mb-2">
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

      <div className="py-2.5 bg-slate-100/70 text-center text-xs text-slate-600 border-b border-slate-200/80">
        Supporting Biology students across Dubai's leading British, IB and international schools since 2015.
      </div>

      {/* SECTION 03: LOGO STRIP & EXAM BOARD BADGES */}
      <SchoolsMarquee
        logoList={DUBAI_SCHOOL_LOGOS}
        header={
          <div className="text-center mb-4 max-w-2xl mx-auto px-4">
            <p className="text-xs sm:text-sm font-bold text-[#0a1f3d] leading-relaxed">
              Tutoring Biology students across Dubai's leading British, IB, and International schools.
            </p>
          </div>
        }
      />

      {/* Exam board text badges & Trust Badges */}
      <section className="py-3 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] font-semibold text-slate-600">
          <span className="text-[#0a1f3d] font-bold">Exam Boards Covered:</span>
          <span className="px-2.5 py-0.5 bg-slate-50 border border-slate-200 rounded-full">Cambridge IGCSE</span>
          <span className="px-2.5 py-0.5 bg-slate-50 border border-slate-200 rounded-full">Cambridge International A Level (9700)</span>
          <span className="px-2.5 py-0.5 bg-slate-50 border border-slate-200 rounded-full">Pearson Edexcel</span>
          <span className="px-2.5 py-0.5 bg-slate-50 border border-slate-200 rounded-full">AQA</span>
          <span className="px-2.5 py-0.5 bg-slate-50 border border-slate-200 rounded-full">IB Diploma Programme</span>
        </div>
      </section>

      {/* SECTION 04: MARK SCHEME DECODER */}
      <MarkSchemeDecoder />

      {/* SECTION 05: SYLLABUS BREAKDOWN */}
      <BiologySyllabusBreakdown />

      {/* SECTION 06: TWO YEARS, ONE TIMELINE */}
      <BiologyTwoYearTimeline />

      {/* SECTION 07: PRACTICAL SKILLS & INTERNAL ASSESSMENT */}
      <PracticalSkillsAndIA />



      {/* SECTION 09: DECISION HELPER (HL OR SL) */}
      <BiologyDecisionHelper />

      {/* SECTION 10: CURRICULUM PATHWAYS */}
      <BiologyCurriculumPathways />

      {/* SECTION 11: WORKED QUESTION SHOWCASE */}
      <WorkedQuestionShowcase />

      {/* SECTION 12: CURRICULUM TRANSITION */}
      <CurriculumTransition />

      {/* SECTION 13: 3-STEP DIAGNOSTIC APPROACH */}
      <BiologyDiagnosticApproach />

      {/* SECTION 14: REVIEWS */}
      <section className="py-8 sm:py-10 lg:py-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 50%, #1e5ba8 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                What Dubai Parents{' '}
                <span style={{ background: 'linear-gradient(92deg,#34d399 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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

      {/* SECTION 15: FAQS */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2 bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b]">
                <HelpCircle className="h-3.5 w-3.5" /> Common Questions
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
                What Dubai <span className="text-[#0f4a9b]">parents ask</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Clear, honest guidance on Biology tuition across Dubai international schools.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-2.5">
              {FAQS.map((f, i) => {
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

      {/* SECTION 16: FINAL CTA */}
      <FinalCTA
        title="Start Biology Support in Dubai Today"
        subtitle=""
        subtitleNode={null}
        button1Text="Book First Free Trial"
        button1Href={BOOKING}
        subtext1=""
        button2Text="Ask on WhatsApp"
        subtext2=""
      />

      {/* SECTION 17: INTERNAL LINKING */}
      <RelatedContent
        subjects={[
          {
            label: 'Chemistry Tutor Dubai',
            href: '/chemistry-tutor-dubai',
            note: 'One-to-one IGCSE, GCSE, A-Level & IB chemistry tutoring in Dubai.'
          },
          {
            label: 'Physics Tutor Dubai',
            href: '/physics-tutor-dubai',
            note: 'Cambridge 0625, A-Level 9702 & IB DP Physics specialists in Dubai.'
          },
          {
            label: 'Maths Tutor Dubai',
            href: '/maths-tutor-dubai',
            note: 'Coordinate calculus, vectors, algebra, and statistics in Dubai.'
          },
          {
            label: 'Sciences Subject Hub',
            href: '/sciences',
            note: 'Comprehensive overview of our sciences faculty and curriculum tracks.'
          },
        ]}
        curricula={[
          {
            label: 'IB DP Biology (SL & HL)',
            href: '/ib-curriculum',
            note: 'Core syllabus preparation, Themes A–D & Internal Assessment coaching.'
          },
          {
            label: 'IGCSE Biology',
            href: '/igcse',
            note: 'Cambridge 0610 & Edexcel 4BI1 Paper 4 theory & Paper 6 practical skills.'
          },
          {
            label: 'A-Level Biology',
            href: '/a-level',
            note: 'Cambridge 9700 & Edexcel IAL synoptic essay and data analysis.'
          },
          {
            label: 'MYP Sciences | IB Middle Years',
            href: '/myp',
            note: 'Years 7–10 inquiry, experimental design & Criterion B/C analysis.'
          },
        ]}
      />
    </Layout>
  );
}
