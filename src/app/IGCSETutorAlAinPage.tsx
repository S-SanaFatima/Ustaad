import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award, BookOpen, Clock, GraduationCap,
  MessageCircle, Target, Calculator,
  Atom, FlaskConical, Dna, LineChart,
  CheckCircle2, ChevronDown, Check,
  Compass, Scale,
  PenTool, CheckCircle,
  ShieldCheck, ChevronRight, School,
  TrendingUp, AlertTriangle, Star
} from 'lucide-react';
import { Layout, GoldButton, WhatsAppIcon, StatsBar } from './shared';
import SEOHead from './shared/SEOHead';
import {
  cityLocalBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema
} from './shared/schemas';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20an%20IGCSE%20tutor%20in%20Al%20Ain.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

/* ── BESPOKE HERO BACKGROUND: AL AIN HORIZON & IGCSE ORBITAL TELEMETRY ── */
const AlAinIgcseHeroBackground = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
    {/* Soft Breathing Ambient Glow Orbs */}
    <div
      className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-45 will-change-transform"
      style={{
        background: 'radial-gradient(circle, rgba(15,74,155,0.5) 0%, rgba(15,74,155,0) 70%)',
        transform: 'translate3d(-50%, 0, 0)',
      }}
    />
    <div
      className="absolute top-10 -right-12 w-[440px] h-[440px] rounded-full blur-[85px] pointer-events-none opacity-25 will-change-transform"
      style={{
        background: 'radial-gradient(circle, rgba(240,201,106,0.35) 0%, rgba(240,201,106,0) 70%)',
        transform: 'translate3d(0, 0, 0)',
      }}
    />
    <div
      className="absolute bottom-6 -left-12 w-[420px] h-[420px] rounded-full blur-[85px] pointer-events-none opacity-25 will-change-transform"
      style={{
        background: 'radial-gradient(circle, rgba(34,184,205,0.35) 0%, rgba(34,184,205,0) 70%)',
        transform: 'translate3d(0, 0, 0)',
      }}
    />

    {/* SVG Engineering & Spec Canvas */}
    <svg
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMid slice"
      className="hidden md:block absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="alAinIgcseArcGold" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22b8cd" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f0c96a" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="alAinIgcseCurveArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.14" />
          <stop offset="55%" stopColor="#22b8cd" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
        </linearGradient>

        <pattern id="alain-igcse-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.6" />
          <circle cx="48" cy="48" r="0.75" fill="rgba(240,201,106,0.15)" />
        </pattern>
      </defs>

      {/* Grid */}
      <rect width="100%" height="100%" fill="url(#alain-igcse-grid)" />

      {/* Top Academic Line */}
      <g opacity="0.45">
        <line x1="60" y1="36" x2="1380" y2="36" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" strokeDasharray="3 6" />
      </g>

      {/* Left Spec Curves */}
      <g opacity="0.55">
        <path
          d="M 60 380 C 140 370, 190 310, 240 230 C 290 150, 320 130, 360 110 L 360 410 L 60 410 Z"
          fill="url(#alAinIgcseCurveArea)"
        />
        <path
          d="M 60 380 C 140 370, 190 310, 240 230 C 290 150, 320 130, 360 110"
          fill="none"
          stroke="url(#alAinIgcseArcGold)"
          strokeWidth="2.4"
        />
      </g>

      {/* Right Spec Curves (Al Ain Jebel Hafeet Mountain Silhouette Motif) */}
      <g opacity="0.4">
        <path
          d="M 1080 410 Q 1200 240 1380 340 L 1380 410 Z"
          fill="url(#alAinIgcseCurveArea)"
        />
        <path
          d="M 1080 410 Q 1200 240 1380 340"
          fill="none"
          stroke="rgba(240,201,106,0.45)"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
      </g>
    </svg>
  </div>
);

/* ── DATA: FAQS ── */
const IGCSE_AL_AIN_FAQS = [
  {
    q: "My child is joining a British-curriculum school in Al Ain for Year 10. Can you help them catch up?",
    a: "Yes. Students who move into IGCSE from the MoE, American or IB MYP curriculum often meet topics in Year 10 that classmates covered in Year 9, such as algebraic manipulation, chemical formulae or the structure of an English directed-writing answer. The tutor checks these first and closes the gaps while the class moves on."
  },
  {
    q: "Which IGCSE board does my child’s Al Ain school use?",
    a: "Most British-curriculum schools in Al Ain teach Cambridge or Pearson Edexcel IGCSE, and some use both across different subjects. The syllabus code in your child’s subject handbook or exam entry, such as 0580 or 4MA1, tells us which one, and we match the tutor to that code."
  },
  {
    q: "Can my child have lessons during Ramadan?",
    a: "Yes. Because lessons are online, families can move them to a time that suits the shorter Ramadan school day, including the evening."
  },
  {
    q: "How much does an IGCSE tutor cost in Al Ain?",
    a: "The fee depends on the subject, the exam board and how many lessons a week your child takes. We share the price for your child’s plan before the first paid lesson, and there is no registration fee."
  }
];

/* ── DATA: RELATED UAE TUTORING PATHWAYS ── */
const IGCSE_RELATED_PATHWAYS = [
  {
    title: 'IGCSE Maths Tutor',
    sub: 'Algebra, Geometry & Statistics',
    href: '/maths',
    icon: Calculator,
    bg: 'bg-blue-50 border border-blue-100',
    color: 'text-[#0f4a9b]',
    tag: 'CAIE & Edexcel'
  },
  {
    title: 'IGCSE Physics Tutor',
    sub: 'Forces, Waves & Paper 6',
    href: '/physics',
    icon: Atom,
    bg: 'bg-cyan-50 border border-cyan-100',
    color: 'text-cyan-700',
    tag: '0625 & 4PH1'
  },
  {
    title: 'IGCSE Chemistry Tutor',
    sub: 'Organic & Mole Calculations',
    href: '/chemistry',
    icon: FlaskConical,
    bg: 'bg-emerald-50 border border-emerald-100',
    color: 'text-emerald-700',
    tag: '0620 & 4CH1'
  },
  {
    title: 'IGCSE Biology Tutor',
    sub: 'Genetics, Ecology & 6-Mark Prep',
    href: '/biology',
    icon: Dna,
    bg: 'bg-rose-50 border border-rose-100',
    color: 'text-rose-700',
    tag: 'Extended Tier'
  },
  {
    title: 'A-Level Tutor Al Ain',
    sub: 'Year 12 & 13 Sixth-Form Prep',
    href: '/a-level-tutor-al-ain',
    icon: GraduationCap,
    bg: 'bg-amber-50 border border-amber-100',
    color: 'text-amber-800',
    tag: 'Al Ain Sixth Form'
  },
  {
    title: 'IGCSE Tutor Abu Dhabi',
    sub: 'Capital Exam Board Specialists',
    href: '/igcse-tutor-abu-dhabi',
    icon: Award,
    bg: 'bg-indigo-50 border border-indigo-100',
    color: 'text-indigo-700',
    tag: 'Capital Specialists'
  },
  {
    title: 'IGCSE Tutor Dubai',
    sub: 'Cambridge & Edexcel Specialists',
    href: '/igcse-tutor-dubai',
    icon: BookOpen,
    bg: 'bg-sky-50 border border-sky-100',
    color: 'text-sky-700',
    tag: 'Dubai Hub'
  },
  {
    title: 'GCSE Curriculum',
    sub: 'AQA, OCR & Edexcel Pathways',
    href: '/gcse',
    icon: Compass,
    bg: 'bg-purple-50 border border-purple-100',
    color: 'text-purple-700',
    tag: 'UK Curriculum'
  }
];

/* ── DATA: SUBJECTS ── */
const IGCSE_SUBJECTS = [
  {
    name: "IGCSE Mathematics",
    slug: "/maths",
    desc: "Algebra, quadratic equations, geometry, trigonometry, and statistics across Core and Extended tiers.",
    boards: ["Cambridge 0580", "Edexcel 4MA1"],
    papers: "Paper 2 & 4 (Linear)",
    icon: Calculator,
    highlight: "Core vs Extended mastery, quadratic proofs & trigonometry methods"
  },
  {
    name: "IGCSE Physics",
    slug: "/physics",
    desc: "Forces, motion, energy, thermal physics, waves, electricity, and numerical calculation mastery.",
    boards: ["Cambridge 0625", "Edexcel 4PH1"],
    papers: "Theory + Paper 6 Practical",
    icon: Atom,
    highlight: "Unit conversions, circuit calculations & practical planning"
  },
  {
    name: "IGCSE Chemistry",
    slug: "/chemistry",
    desc: "Atomic structure, chemical bonding, stoichiometry, reaction kinetics, and mole calculation routines.",
    boards: ["Cambridge 0620", "Edexcel 4CH1"],
    papers: "Paper 4 Theory & Paper 6",
    icon: FlaskConical,
    highlight: "Mole ratios, organic synthesis & quantitative reaction tables"
  },
  {
    name: "IGCSE Biology",
    slug: "/biology",
    desc: "Cell biology, enzymes, physiology, genetics, ecosystems, data analysis, and 6-mark structured answers.",
    boards: ["Cambridge 0610", "Edexcel 4BI1"],
    papers: "Structured + Alternative to Practical",
    icon: Dna,
    highlight: "6-mark extended responses & experimental enzyme rate analysis"
  },
  {
    name: "IGCSE English",
    slug: "/english",
    desc: "Reading comprehension, summary writing, directed writing, narrative technique, and text analysis.",
    boards: ["Cambridge 0500", "Edexcel 4EA1"],
    papers: "Reading & Directed Writing",
    icon: BookOpen,
    highlight: "Writer's effect decoding, précis writing & vocabulary precision"
  },
  {
    name: "IGCSE Economics & Business",
    slug: "/business",
    desc: "Market equilibrium, price elasticity, business finance, economic indicators, and case-study answers.",
    boards: ["Cambridge 0455 / 0450", "Edexcel 4EC1 / 4BS1"],
    papers: "Data Response & Essays",
    icon: LineChart,
    highlight: "Economic evaluation, cash-flow analysis & 8-mark recommendations"
  }
];

/* ── INTERACTIVE SUBJECT ANIMATIONS ── */
function MathsVisualAnimation() {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0f4a9b] via-[#1e3a8a] to-[#0a1f3d] p-1.5 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-blue-500/30 group-hover:scale-105 transition-all duration-300">
      {/* Background Math Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:8px_8px] pointer-events-none" />
      
      <svg className="w-full h-full relative z-10" viewBox="0 0 64 64" fill="none">
        {/* Coordinate Axes */}
        <line x1="8" y1="32" x2="56" y2="32" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="32" y1="8" x2="32" y2="56" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="2 2" />

        {/* Animated Sine Wave */}
        <motion.path
          d="M 8 32 Q 20 12, 32 32 T 56 32"
          stroke="#60a5fa"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.85 }}
          animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Tracing Coordinate Point */}
        <motion.circle
          r="3"
          fill="#f0c96a"
          animate={{
            cx: [8, 20, 32, 44, 56],
            cy: [32, 17, 32, 47, 32]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Math Symbols */}
        <motion.text
          x="12"
          y="18"
          fill="#93c5fd"
          fontSize="9"
          fontWeight="bold"
          fontFamily="serif"
          animate={{ y: [18, 14, 18], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          π
        </motion.text>
        <motion.text
          x="44"
          y="22"
          fill="#fcd34d"
          fontSize="9"
          fontWeight="bold"
          fontFamily="monospace"
          animate={{ y: [22, 25, 22], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          x²
        </motion.text>
        <motion.text
          x="14"
          y="52"
          fill="#e0e7ff"
          fontSize="8"
          fontWeight="bold"
          fontFamily="serif"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          √
        </motion.text>
      </svg>
    </div>
  );
}

function PhysicsVisualAnimation() {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#0a1f3d] p-1.5 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-cyan-500/30 group-hover:scale-105 transition-all duration-300">
      <svg className="w-full h-full relative z-10" viewBox="0 0 64 64" fill="none">
        {/* Pulsating Nucleus Core */}
        <motion.circle
          cx="32"
          cy="32"
          r="5.5"
          fill="#f0c96a"
          animate={{ scale: [1, 1.25, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="32" cy="32" r="2.5" fill="#ffffff" />

        {/* Orbit Ring 1 (Horizontal) */}
        <g transform="translate(32 32)">
          <ellipse rx="24" ry="9" stroke="rgba(56, 189, 248, 0.45)" strokeWidth="1.2" fill="none" />
          <motion.circle
            r="2.5"
            fill="#38bdf8"
            animate={{
              cx: [24, 0, -24, 0, 24],
              cy: [0, 9, 0, -9, 0],
              scale: [1, 1.2, 0.8, 0.7, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* Orbit Ring 2 (Tilted 60 deg) */}
        <g transform="translate(32 32) rotate(60)">
          <ellipse rx="24" ry="9" stroke="rgba(240, 201, 106, 0.5)" strokeWidth="1.2" fill="none" />
          <motion.circle
            r="2.5"
            fill="#f0c96a"
            animate={{
              cx: [-24, 0, 24, 0, -24],
              cy: [0, 9, 0, -9, 0],
              scale: [0.8, 1.2, 1, 0.7, 0.8]
            }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* Orbit Ring 3 (Tilted -60 deg) */}
        <g transform="translate(32 32) rotate(-60)">
          <ellipse rx="24" ry="9" stroke="rgba(125, 211, 252, 0.45)" strokeWidth="1.2" fill="none" />
          <motion.circle
            r="2.5"
            fill="#a5f3fc"
            animate={{
              cx: [0, 24, 0, -24, 0],
              cy: [9, 0, -9, 0, 9],
              scale: [1.2, 0.8, 0.7, 1.1, 1.2]
            }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
          />
        </g>
      </svg>
    </div>
  );
}

function ChemistryVisualAnimation() {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#059669] via-[#047857] to-[#064e3b] p-1.5 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-emerald-500/30 group-hover:scale-105 transition-all duration-300">
      <svg className="w-full h-full relative z-10" viewBox="0 0 64 64" fill="none">
        {/* Floating Molecule in background */}
        <motion.g
          opacity="0.3"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "48px 16px" }}
        >
          <circle cx="48" cy="16" r="3" stroke="#a7f3d0" strokeWidth="1" fill="none" />
          <circle cx="56" cy="12" r="2" fill="#a7f3d0" />
          <line x1="48" y1="16" x2="56" y2="12" stroke="#a7f3d0" strokeWidth="1" />
        </motion.g>

        {/* Flask Glass Outline */}
        <path
          d="M 28 12 L 36 12 M 30 12 L 30 24 L 16 48 C 14 52 17 56 22 56 L 42 56 C 47 56 50 52 48 48 L 34 24 L 34 12"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Sloshing Liquid in Flask */}
        <motion.path
          d="M 19 46 Q 32 43 45 46 L 42 54 C 40 55 38 55 32 55 C 26 55 24 55 22 54 Z"
          fill="#34d399"
          animate={{
            d: [
              "M 19 46 Q 32 43 45 46 L 42 54 C 40 55 38 55 32 55 C 26 55 24 55 22 54 Z",
              "M 19 47 Q 32 49 45 45 L 42 54 C 40 55 38 55 32 55 C 26 55 24 55 22 54 Z",
              "M 19 46 Q 32 43 45 46 L 42 54 C 40 55 38 55 32 55 C 26 55 24 55 22 54 Z"
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bubbles Rising */}
        <motion.circle
          cx="26"
          cy="48"
          r="1.8"
          fill="#fef08a"
          animate={{
            cy: [48, 36, 20],
            cx: [26, 28, 26],
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.5]
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.circle
          cx="36"
          cy="50"
          r="2.2"
          fill="#a7f3d0"
          animate={{
            cy: [50, 38, 22],
            cx: [36, 34, 35],
            opacity: [0, 1, 0],
            scale: [0.7, 1.3, 0.4]
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
        />
        <motion.circle
          cx="31"
          cy="49"
          r="1.5"
          fill="#ffffff"
          animate={{
            cy: [49, 34, 18],
            cx: [31, 32, 31],
            opacity: [0, 0.9, 0],
            scale: [0.8, 1.1, 0.3]
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 1.3 }}
        />

        {/* Vapor wisps rising from neck */}
        <motion.path
          d="M 31 10 Q 29 6 33 2"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          animate={{ opacity: [0, 0.8, 0], y: [0, -3, -6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

function BiologyVisualAnimation() {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0d9488] via-[#0f766e] to-[#134e4a] p-1.5 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-teal-500/30 group-hover:scale-105 transition-all duration-300">
      <svg className="w-full h-full relative z-10" viewBox="0 0 64 64" fill="none">
        {/* DNA Helix Rungs pulsating */}
        {[14, 22, 30, 38, 46, 54].map((y, idx) => {
          const delay = idx * 0.25;
          return (
            <g key={y}>
              <motion.line
                x1="20"
                y1={y}
                x2="44"
                y2={y}
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="2 2"
                animate={{
                  x1: [20, 24, 20],
                  x2: [44, 40, 44],
                  stroke: [
                    "rgba(255, 255, 255, 0.3)",
                    "rgba(240, 201, 106, 0.7)",
                    "rgba(255, 255, 255, 0.3)"
                  ]
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay }}
              />

              {/* Left Helix Node */}
              <motion.circle
                cy={y}
                r="3"
                fill="#2dd4bf"
                animate={{
                  cx: [18, 46, 18],
                  scale: [1, 0.7, 1],
                  opacity: [1, 0.6, 1]
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay }}
              />

              {/* Right Helix Node */}
              <motion.circle
                cy={y}
                r="3"
                fill="#f0c96a"
                animate={{
                  cx: [46, 18, 46],
                  scale: [0.7, 1, 0.7],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function EnglishVisualAnimation() {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#b45309] via-[#92400e] to-[#451a03] p-1.5 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-amber-500/30 group-hover:scale-105 transition-all duration-300">
      <svg className="w-full h-full relative z-10" viewBox="0 0 64 64" fill="none">
        {/* Open Book Base */}
        <path
          d="M 12 44 Q 22 40 32 44 Q 42 40 52 44 L 52 24 Q 42 20 32 24 Q 22 20 12 24 Z"
          fill="rgba(255, 255, 255, 0.15)"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line x1="32" y1="24" x2="32" y2="44" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />

        {/* Flowing Ink Script Line */}
        <motion.path
          d="M 16 34 Q 24 30 30 35 M 34 32 Q 40 37 48 33"
          stroke="#fde68a"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Quill Feather */}
        <motion.g
          animate={{
            x: [0, 3, 0],
            y: [0, -2, 0],
            rotate: [0, 4, 0]
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "44px 34px" }}
        >
          <path
            d="M 44 32 Q 48 20 54 10 Q 42 16 41 28 Z"
            fill="#fde68a"
            stroke="#fef3c7"
            strokeWidth="1"
          />
          <line x1="44" y1="32" x2="42" y2="36" stroke="#f0c96a" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Floating Quotation Marks */}
        <motion.text
          x="14"
          y="18"
          fill="#fef3c7"
          fontSize="14"
          fontWeight="bold"
          fontFamily="serif"
          animate={{ y: [18, 15, 18], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          “
        </motion.text>
        <motion.text
          x="46"
          y="18"
          fill="#fef3c7"
          fontSize="14"
          fontWeight="bold"
          fontFamily="serif"
          animate={{ y: [18, 20, 18], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          ”
        </motion.text>
      </svg>
    </div>
  );
}

function EconomicsVisualAnimation() {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#4f46e5] via-[#4338ca] to-[#1e1b4b] p-1.5 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-indigo-500/30 group-hover:scale-105 transition-all duration-300">
      <svg className="w-full h-full relative z-10" viewBox="0 0 64 64" fill="none">
        {/* Background Grid */}
        <line x1="10" y1="52" x2="54" y2="52" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <line x1="10" y1="12" x2="10" y2="52" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

        {/* Animated Bar Columns Rising */}
        <motion.rect
          x="14"
          y="38"
          width="6"
          height="14"
          rx="1"
          fill="rgba(165, 180, 252, 0.4)"
          animate={{ height: [14, 18, 14], y: [38, 34, 38] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="24"
          y="30"
          width="6"
          height="22"
          rx="1"
          fill="rgba(165, 180, 252, 0.55)"
          animate={{ height: [22, 26, 22], y: [30, 26, 30] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.rect
          x="34"
          y="24"
          width="6"
          height="28"
          rx="1"
          fill="rgba(165, 180, 252, 0.7)"
          animate={{ height: [28, 32, 28], y: [24, 20, 24] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />

        {/* Surging Trend Line */}
        <motion.path
          d="M 12 46 L 22 36 L 32 38 L 44 20 L 52 14"
          stroke="#f0c96a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pulsing Peak Target Node */}
        <motion.circle
          cx="52"
          cy="14"
          r="3.5"
          fill="#f0c96a"
          animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="52"
          cy="14"
          r="6.5"
          stroke="#f0c96a"
          strokeWidth="1"
          fill="none"
          animate={{ scale: [1, 1.8, 2.2], opacity: [0.8, 0.2, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Floating Percentage / Growth Badge */}
        <motion.text
          x="14"
          y="20"
          fill="#a7f3d0"
          fontSize="8"
          fontWeight="bold"
          fontFamily="monospace"
          animate={{ opacity: [0.6, 1, 0.6], y: [20, 18, 20] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          +24%
        </motion.text>
      </svg>
    </div>
  );
}

const SUBJECT_ANIMATIONS: Record<string, React.ComponentType> = {
  "/maths": MathsVisualAnimation,
  "/physics": PhysicsVisualAnimation,
  "/chemistry": ChemistryVisualAnimation,
  "/biology": BiologyVisualAnimation,
  "/english": EnglishVisualAnimation,
  "/business": EconomicsVisualAnimation,
};

/* ── DATA: AL AIN SCHOOLS ── */
const AL_AIN_SCHOOLS = [
  {
    name: "Brighton College Al Ain",
    curriculum: "British Curriculum · Cambridge IGCSE & A-Levels",
    location: "Zakher, Al Ain",
    logo: "/images/schools/al-ain/brighton-college-al-ain.webp",
    alt: "Brighton College Al Ain logo"
  },
  {
    name: "Al Ain British Academy",
    curriculum: "Aldar Academies · Cambridge IGCSE & A-Levels",
    location: "Saruoj, Al Ain",
    logo: "/images/schools/al-ain/al-ain-british-academy.webp",
    alt: "Al Ain British Academy logo"
  },
  {
    name: "Al Ain English Speaking School",
    curriculum: "UK National Curriculum · IGCSE & A-Levels",
    location: "Al Muwaiji, Al Ain",
    logo: "/images/schools/al-ain/aaess.webp",
    alt: "Al Ain English Speaking School AAESS logo"
  },
  {
    name: "Belvedere International School",
    curriculum: "National Curriculum for England · IGCSE Pathways",
    location: "Al Hili, Al Ain",
    logo: "/images/schools/al-ain/belvedere-international.webp",
    alt: "Belvedere International School Al Ain logo"
  },
  {
    name: "Excel International School",
    curriculum: "Cambridge International · IGCSE & Sixth Form",
    location: "Falaj Hazzaa, Al Ain",
    logo: "/images/schools/al-ain/excel-international.webp",
    alt: "Excel International School Al Ain logo"
  }
];

/* ── DIAGRAMS: EXAM TRAP VISUALISATIONS (MATHS, BIOLOGY, CHEMISTRY, PHYSICS) ── */
const MathsTrapDiagram = () => (
  <div className="w-full h-full min-h-[170px] sm:min-h-[230px] bg-white rounded-2xl p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden border border-slate-200/90 shadow-2xs">
    <div className="flex items-center justify-between text-[11px] font-mono">
      <span className="text-[#0a1f3d] font-extrabold">Parabola &amp; Roots</span>
      <span className="bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold text-[10.5px]">M1 Method Mark</span>
    </div>

    {/* SVG Parabola graph */}
    <div className="relative my-auto flex items-center justify-center py-2">
      <svg viewBox="0 0 280 110" className="w-full max-w-[260px] h-auto overflow-visible">
        <line x1="20" y1="75" x2="260" y2="75" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="120" y1="10" x2="120" y2="100" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="255" y="70" fill="#64748b" fontSize="10" fontFamily="monospace">x</text>
        <text x="125" y="16" fill="#64748b" fontSize="10" fontFamily="monospace">y</text>

        <motion.path
          d="M 30,15 Q 100,120 180,75 T 250,15"
          fill="none"
          stroke="#0f4a9b"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <circle cx="58" cy="75" r="4.5" fill="#f0c96a" stroke="#0a1f3d" strokeWidth="2" />
        <text x="36" y="93" fill="#0a1f3d" fontSize="10.5" fontWeight="bold" fontFamily="monospace">x = -4</text>

        <circle cx="180" cy="75" r="4.5" fill="#f0c96a" stroke="#0a1f3d" strokeWidth="2" />
        <text x="184" y="93" fill="#0a1f3d" fontSize="10.5" fontWeight="bold" fontFamily="monospace">x = 0.5</text>
      </svg>
    </div>

    <div className="bg-slate-50 rounded-xl px-3 py-1.5 border border-slate-200/80 flex items-center justify-between text-xs">
      <span className="font-mono font-bold text-[#0a1f3d]">(2x − 1)(x + 4) = 0</span>
      <span className="text-emerald-700 font-bold text-[11px]">✓ Method Step Awarded</span>
    </div>
  </div>
);

const BiologyTrapDiagram = () => (
  <div className="w-full h-full min-h-[170px] sm:min-h-[230px] bg-white rounded-2xl p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden border border-slate-200/90 shadow-2xs">
    <div className="flex items-center justify-between text-[11px] font-mono">
      <span className="text-[#0a1f3d] font-extrabold">Lock &amp; Key vs Denatured</span>
      <span className="bg-rose-50 text-rose-800 px-2.5 py-0.5 rounded-full border border-rose-200 font-bold text-[10.5px]">Never say "Dies"</span>
    </div>

    <div className="grid grid-cols-2 gap-2.5 my-auto py-1">
      <div className="bg-slate-50/80 rounded-xl p-2.5 text-center border border-slate-200/80">
        <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase block mb-1">37°C (Normal)</span>
        <svg viewBox="0 0 100 55" className="w-20 h-11 mx-auto">
          <polygon points="40,5 60,5 50,20" fill="#0f4a9b" />
          <path d="M 20,23 L 40,23 L 50,38 L 60,23 L 80,23 L 80,50 L 20,50 Z" fill="#e0f2fe" stroke="#0f4a9b" strokeWidth="1.5" />
        </svg>
        <span className="text-[10px] font-medium text-slate-600 block mt-0.5">Substrate Fits</span>
      </div>

      <div className="bg-rose-50/50 rounded-xl p-2.5 text-center border border-rose-200/80">
        <span className="text-[10px] font-mono font-bold text-rose-700 uppercase block mb-1">&gt;45°C (Denatured)</span>
        <svg viewBox="0 0 100 55" className="w-20 h-11 mx-auto">
          <polygon points="25,5 45,5 35,20" fill="#0f4a9b" transform="rotate(25, 35, 12)" />
          <path d="M 20,23 Q 40,33 50,26 Q 65,35 80,23 L 80,50 L 20,50 Z" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
        </svg>
        <span className="text-[10px] font-medium text-rose-700 block mt-0.5">Active Site Altered</span>
      </div>
    </div>

    <div className="bg-slate-50 rounded-xl px-3 py-1.5 border border-slate-200/80 flex items-center justify-between text-xs">
      <span className="font-mono text-slate-700">Enzyme: Protein</span>
      <span className="text-amber-800 font-bold text-[11px]">Denatures, Not Dies</span>
    </div>
  </div>
);

const ChemistryTrapDiagram = () => (
  <div className="w-full h-full min-h-[170px] sm:min-h-[230px] bg-white rounded-2xl p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden border border-slate-200/90 shadow-2xs">
    <div className="flex items-center justify-between text-[11px] font-mono">
      <span className="text-[#0a1f3d] font-extrabold">Group 7 Diatomics (Cl₂ / Br₂)</span>
      <span className="bg-blue-50 text-[#0f4a9b] px-2.5 py-0.5 rounded-full border border-blue-200 font-bold text-[10.5px]">Bond Hierarchy</span>
    </div>

    <div className="my-auto py-1 flex flex-col items-center justify-center">
      <svg viewBox="0 0 240 65" className="w-full max-w-[240px] h-auto">
        <circle cx="45" cy="32" r="16" fill="#e0f2fe" stroke="#0f4a9b" strokeWidth="2" />
        <text x="45" y="36" fill="#0a1f3d" fontSize="10.5" fontWeight="bold" textAnchor="middle">Br</text>
        <line x1="61" y1="32" x2="84" y2="32" stroke="#C7A24A" strokeWidth="3.5" />
        <circle cx="100" cy="32" r="16" fill="#e0f2fe" stroke="#0f4a9b" strokeWidth="2" />
        <text x="100" y="36" fill="#0a1f3d" fontSize="10.5" fontWeight="bold" textAnchor="middle">Br</text>

        <path d="M 120,22 Q 130,32 120,42 M 126,19 Q 136,32 126,45" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />

        <circle cx="150" cy="32" r="16" fill="#e0f2fe" stroke="#0f4a9b" strokeWidth="2" />
        <text x="150" y="36" fill="#0a1f3d" fontSize="10.5" fontWeight="bold" textAnchor="middle">Br</text>
        <line x1="166" y1="32" x2="189" y2="32" stroke="#C7A24A" strokeWidth="3.5" />
        <circle cx="205" cy="32" r="16" fill="#e0f2fe" stroke="#0f4a9b" strokeWidth="2" />
        <text x="205" y="36" fill="#0a1f3d" fontSize="10.5" fontWeight="bold" textAnchor="middle">Br</text>
      </svg>

      <div className="flex items-center justify-around w-full mt-1 text-[10px] font-mono">
        <span className="text-[#8c6c19] font-bold">Covalent (Intact)</span>
        <span className="text-rose-600 font-bold">IMF (Overcome)</span>
      </div>
    </div>

    <div className="bg-slate-50 rounded-xl px-3 py-1.5 border border-slate-200/80 flex items-center justify-between text-xs">
      <span className="font-mono text-slate-700">Larger Molecules = Stronger IMF</span>
      <span className="text-emerald-700 font-bold text-[11px]">✓ Full 3 Marks</span>
    </div>
  </div>
);

const PhysicsTrapDiagram = () => (
  <div className="w-full h-full min-h-[170px] sm:min-h-[230px] bg-white rounded-2xl p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden border border-slate-200/90 shadow-2xs">
    <div className="flex items-center justify-between text-[11px] font-mono">
      <span className="text-[#0a1f3d] font-extrabold">Transformer Induction</span>
      <span className="bg-rose-50 text-rose-800 px-2.5 py-0.5 rounded-full border border-rose-200 font-bold text-[10.5px]">DC Flux = Constant</span>
    </div>

    <div className="my-auto py-1 flex items-center justify-center">
      <svg viewBox="0 0 240 75" className="w-full max-w-[240px] h-auto">
        <rect x="40" y="8" width="160" height="60" rx="8" fill="none" stroke="#cbd5e1" strokeWidth="12" />
        <rect x="52" y="20" width="136" height="36" rx="4" fill="#f8fafc" />

        <path d="M 33,16 Q 23,26 33,36 Q 23,46 33,56" fill="none" stroke="#0f4a9b" strokeWidth="3" />
        <text x="14" y="39" fill="#0f4a9b" fontSize="10" fontWeight="bold" fontFamily="monospace">DC</text>

        <path d="M 207,16 Q 217,26 207,36 Q 217,46 207,56" fill="none" stroke="#C7A24A" strokeWidth="3" />
        <circle cx="228" cy="38" r="9" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="228" y="41" fill="#dc2626" fontSize="8.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">0 V</text>
      </svg>
    </div>

    <div className="bg-slate-50 rounded-xl px-3 py-1.5 border border-slate-200/80 flex items-center justify-between text-xs">
      <span className="font-mono text-slate-700">Flux Rate: ΔΦ/Δt = 0</span>
      <span className="text-amber-800 font-bold text-[11px]">Requires AC to Induce</span>
    </div>
  </div>
);

/* ── DATA: EXAM QUESTION DECODER (CATCHY FOR STUDENTS) ── */
const EXAM_HACKS = [
  {
    subject: "Maths (0580 / 4MA1)",
    tabLabel: "Maths",
    question: "Show that 2x² + 7x - 4 = 0 has solutions x = 0.5 and x = -4.",
    marks: "2 Marks",
    trap: "Writing the final solutions without factorisation loses both method marks.",
    fix: "Write (2x − 1)(x + 4) = 0 first to capture the M1 mark before stating roots.",
    icon: Calculator,
    diagram: MathsTrapDiagram
  },
  {
    subject: "Biology (0610 / 4BI1)",
    tabLabel: "Biology",
    question: "Explain the effect of high temperature (>45°C) on enzyme activity.",
    marks: "4 Marks",
    trap: "Writing 'the enzyme dies'. Enzymes are protein molecules, not living cells.",
    fix: "Active site denatures (loses shape) → Substrate cannot bind → No ES complexes.",
    icon: Dna,
    diagram: BiologyTrapDiagram
  },
  {
    subject: "Chemistry (0620 / 4CH1)",
    tabLabel: "Chemistry",
    question: "Describe the trend in boiling points down Group 7 (Halogens).",
    marks: "3 Marks",
    trap: "Claiming 'covalent bonds break' during boiling. Covalent bonds stay intact.",
    fix: "Molecules get larger down Group 7 → Intermolecular forces strengthen → More heat needed.",
    icon: FlaskConical,
    diagram: ChemistryTrapDiagram
  },
  {
    subject: "Physics (0625 / 4PH1)",
    tabLabel: "Physics",
    question: "Explain why a transformer does not operate with a DC supply.",
    marks: "2 Marks",
    trap: "Writing 'DC current is too weak' or 'DC cannot travel across iron'.",
    fix: "DC creates a static magnetic field. Induction strictly requires a changing flux (ΔΦ/Δt).",
    icon: Atom,
    diagram: PhysicsTrapDiagram
  }
];

export default function IGCSETutorAlAinPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedTier, setSelectedTier] = useState<'core' | 'extended'>('extended');
  const [activeHackIdx, setActiveHackIdx] = useState<number>(0);
  const [activeSubjectSlide, setActiveSubjectSlide] = useState<number>(0);

  // Build LocalBusiness schema matching Ustaad's registered Abu Dhabi address
  const rawCitySchema = cityLocalBusinessSchema({
    city: 'Al Ain',
    url: '/igcse-tutor-al-ain',
    name: 'Ustaad: IGCSE Tutor Al Ain',
    description: 'Online 1-to-1 IGCSE tutors for Al Ain students in Years 9-11. Cambridge and Edexcel Maths, Sciences and English. Free 15-min orientation with your first lesson.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abu Dhabi',
      addressRegion: 'Abu Dhabi',
      addressCountry: 'AE'
    }
  });
  const { priceRange: _unusedPrice, geo: _unusedGeo, ...citySchemaRest } = rawCitySchema as Record<string, any>;
  const alAinLocalBusinessSchema = {
    ...citySchemaRest,
    paymentAccepted: 'Credit Card, Bank Transfer'
  };

  const alAinCourseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Ustaad: IGCSE Tutor Al Ain',
    description: 'Online 1-to-1 IGCSE tutoring for students in Al Ain across Years 9, 10 and 11.',
    provider: {
      '@type': 'EducationalOrganization',
      '@id': 'https://ustaad.ae/#organization',
      name: 'Ustaad',
      url: 'https://ustaad.ae'
    },
    url: 'https://ustaad.ae/igcse-tutor-al-ain',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H'
    },
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      priceCurrency: 'AED'
    }
  };

  return (
    <Layout>
      <SEOHead
        title="IGCSE Tutor Al Ain | Online 1-to-1 IGCSE Tutors | Ustaad"
        description="Online 1-to-1 IGCSE tutors for Al Ain students in Years 9-11. Cambridge and Edexcel Maths, Sciences and English. Free 15-min orientation with your first lesson."
        canonical="/igcse-tutor-al-ain"
        ogImage="/UpdatedImages/year-10-igcse-cambridge-0580-edexcel-4ma1-mathematics-tutor-uae.webp"
        placename="Al Ain, Abu Dhabi, UAE"
        schema={[
          alAinLocalBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'IGCSE', url: '/igcse' },
            { name: 'IGCSE Tutor Al Ain', url: '/igcse-tutor-al-ain' }
          ]),
          serviceSchema(
            'IGCSE Tutor Al Ain',
            'Online 1-to-1 IGCSE tutoring for Years 9-11 students in Al Ain, matched to Cambridge and Edexcel specifications.',
            '/igcse-tutor-al-ain'
          ),
          alAinCourseSchema,
          faqSchema(IGCSE_AL_AIN_FAQS.map(({ q, a }) => ({ q, a })))
        ]}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative -mt-10 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-18">
        <AlAinIgcseHeroBackground />

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full">
          {/* Top Trust Chips (Balanced in One Line) */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 mb-5 text-[11px] sm:text-xs text-blue-100 font-medium">
            <span className="inline-flex items-center gap-1.5 bg-white/[0.08] border border-white/15 px-3.5 py-1.5 rounded-full shadow-xs whitespace-nowrap">
              <Check className="h-3.5 w-3.5 text-[#f0c96a] shrink-0" />
              <span>Online 1-to-1</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/[0.08] border border-white/15 px-3.5 py-1.5 rounded-full shadow-xs whitespace-nowrap">
              <Check className="h-3.5 w-3.5 text-[#f0c96a] shrink-0" />
              <span>Cambridge &amp; Edexcel</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/[0.08] border border-white/15 px-3.5 py-1.5 rounded-full shadow-xs whitespace-nowrap">
              <Check className="h-3.5 w-3.5 text-[#f0c96a] shrink-0" />
              <span>Free 15-min orientation with your first lesson</span>
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-extrabold tracking-tight text-white leading-[1.14] mb-4 text-[clamp(1.85rem,4.5vw,3.2rem)] max-w-3xl">
            IGCSE Tutor Al Ain:{' '}
            <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Online 1-to-1 Support for Years 9-11
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-blue-100/85 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mb-7 px-4 font-normal">
            IGCSE is where subject choices, study routines and exam technique begin to matter. Our online tutors work one to one with Al Ain students on the papers, practicals and skills each subject rewards.
          </p>

          {/* CTAs: Compact, Curved, Centered on Mobile & Desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full">
            <GoldButton
              href={BOOKING}
              className="w-auto min-w-[200px] sm:min-w-0 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold !rounded-full shadow-lg shadow-black/20"
            >
              Book First Session
            </GoldButton>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto min-w-[200px] sm:min-w-0 inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20 transition-all duration-200"
            >
              <WhatsAppIcon className="h-4 w-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <StatsBar />

      {/* ── SECTION 2: WHAT CHANGES WHEN YEAR 9 BECOMES YEAR 10 ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#f8fafc] border-b border-gray-100 relative overflow-hidden">
        {/* Subtle background ambient blur in Ustaad Gold & Royal Blue */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[280px] bg-gradient-to-r from-[#0f4a9b]/5 via-[#C7A24A]/6 to-[#0a1f3d]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            <span className="inline-flex items-center text-[11px] font-bold text-[#8c6c19] uppercase tracking-wider bg-[#C7A24A]/10 border border-[#C7A24A]/30 px-3 py-1 rounded-full shadow-2xs">
              Key Stage 4 Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] tracking-tight mt-2.5 mb-2">
              What Changes When Year 9 Becomes Year 10
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Many Al Ain students find the first IGCSE term faster and more demanding than expected. Three things shift at once.
            </p>
          </div>

          {/* 3 Streamlined Cards in Ustaad Brand Theme */}
          <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 lg:gap-5 pb-3 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mb-5 sm:mb-6">
            {/* Card 1: Pace */}
            <div className="w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto group bg-white rounded-2xl p-5 sm:p-5.5 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-[#0f4a9b]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <TrendingUp className="w-4 h-4 text-[#f0c96a]" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/8 px-2.5 py-0.5 rounded-full border border-[#0f4a9b]/20">
                    01 · Speed Shift
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d] mb-1.5">
                  Pace
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed">
                  Topics arrive quickly, with less time to revisit them. Each week introduces new subtopics that teachers expect students to absorb on first delivery.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0a1f3d]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#C7A24A]" />
                <span>Weekly revision cadences prevent backlogs</span>
              </div>
            </div>

            {/* Card 2: Independence */}
            <div className="w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto group bg-white rounded-2xl p-5 sm:p-5.5 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-[#C7A24A]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C7A24A] to-[#9a7620] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <Compass className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8c6c19] bg-[#C7A24A]/12 px-2.5 py-0.5 rounded-full border border-[#C7A24A]/30">
                    02 · Study Habits
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d] mb-1.5">
                  Independence
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed">
                  Teachers guide, but students are expected to organise their own revision, maintain syllabus topic checklists, and detect gaps before end-of-term tests.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0a1f3d]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#C7A24A]" />
                <span>Student note consolidation &amp; self-monitoring</span>
              </div>
            </div>

            {/* Card 3: Exam Style */}
            <div className="w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto group bg-white rounded-2xl p-5 sm:p-5.5 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-[#0a1f3d]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0a1f3d] to-[#0f4a9b] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <Award className="w-4 h-4 text-[#f0c96a]" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0a1f3d] bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-300/70">
                    03 · Mark Scheme
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d] mb-1.5">
                  Exam Style
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed">
                  Marks reward precise command words and structured answers, not just correct facts. Knowing what examiners award makes the difference between Grade 6 and Grade 9.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0a1f3d]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#C7A24A]" />
                <span>CAIE &amp; Pearson rubric keyword alignment</span>
              </div>
            </div>
          </div>

          {/* Sleek Takeaway Banner in Ustaad Gold Theme */}
          <div className="bg-gradient-to-r from-[#FAF8F5] via-white to-[#F5F1E9] rounded-2xl p-4 sm:px-6 sm:py-3.5 border border-[#C7A24A]/35 shadow-[0_2px_12px_rgba(199,162,74,0.06)] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#C7A24A] to-[#9a7620] text-white flex items-center justify-center shadow-xs">
                <GraduationCap className="h-4 w-4 text-white" />
              </div>
              <h4 className="text-sm font-extrabold text-[#0a1f3d] tracking-tight">
                Moving from Year 9 with Confidence
              </h4>
            </div>
            <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed text-center sm:text-left flex-1 font-normal">
              Students rarely struggle because they lack ability. They struggle because the pace and exam style change. A few focused sessions can make Year 10 feel far more manageable.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CORE OR EXTENDED TIER EXPLORER (1-DESKTOP SECTION) ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-b border-gray-100 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6 max-w-2xl mx-auto">
            <span className="inline-flex items-center text-[11px] font-bold text-[#8c6c19] uppercase tracking-wider bg-[#C7A24A]/10 border border-[#C7A24A]/30 px-3 py-1 rounded-full shadow-2xs">
              Tier Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] tracking-tight mt-2 mb-1.5">
              Core or Extended: Choosing the Right Tier
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              The tier decides the highest grade a student can reach and which A-Level routes stay open. Cambridge calls the two tiers Core and Extended; Pearson Edexcel calls them Foundation and Higher.
            </p>
          </div>

          {/* Interactive Tier Switcher */}
          <div className="flex justify-center mb-4 sm:mb-5">
            <div className="inline-flex w-full sm:w-auto p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 shadow-2xs">
              <button
                type="button"
                onClick={() => setSelectedTier('core')}
                className={`flex-1 sm:flex-initial px-3 sm:px-6 py-2 rounded-lg text-xs sm:text-[13px] font-bold transition-all cursor-pointer text-center ${
                  selectedTier === 'core'
                    ? 'bg-[#0f4a9b] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0a1f3d] hover:bg-slate-200/50'
                }`}
              >
                Core (Grades C–G)
              </button>
              <button
                type="button"
                onClick={() => setSelectedTier('extended')}
                className={`flex-1 sm:flex-initial px-3 sm:px-6 py-2 rounded-lg text-xs sm:text-[13px] font-bold transition-all cursor-pointer text-center ${
                  selectedTier === 'extended'
                    ? 'bg-[#0f4a9b] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0a1f3d] hover:bg-slate-200/50'
                }`}
              >
                Extended (Grades A*–E)
              </button>
            </div>
          </div>

          {/* Single Focused Card: Only the Selected Tier Appears on Desktop & Mobile */}
          <div className="max-w-2xl mx-auto mb-4 sm:mb-5">
            <AnimatePresence mode="wait">
              {selectedTier === 'core' ? (
                <motion.div
                  key="core"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="bg-white rounded-2xl p-4.5 sm:p-6 border border-slate-200/90 shadow-md ring-1 ring-slate-200/70 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Grade Cap Badge & Route Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200 shrink-0">
                        Max Grade: C / Level 5
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 text-right">
                        Foundational Route
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0a1f3d] mb-1.5">Core Tier</h3>
                    <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-3.5">
                      Secures essential syllabus concepts and standard questions without the pressure of high-tier proofs or complex derivations.
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-3 text-xs text-gray-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-0.5" />
                        <span><strong className="text-[#0a1f3d]">Concept Mastery:</strong> Thorough drilling of essential syllabus topics.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-0.5" />
                        <span><strong className="text-[#0a1f3d]">Exam Confidence:</strong> Targets accessible questions to secure safe passes.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-amber-950"><strong className="text-amber-900">Grade Ceiling:</strong> Results are capped at Grade C (or Level 5 in Edexcel).</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsive Footer Info Bar */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="font-bold text-[#0a1f3d]">Papers:</span>
                      <span>Papers 1 &amp; 3 (Core) · Edexcel Foundation</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5 text-slate-600">
                      <span className="font-bold text-[#0a1f3d]">Target:</span>
                      <span className="font-semibold text-[#0f4a9b]">Grades C–G (Levels 5–1)</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="extended"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="bg-gradient-to-br from-white via-blue-50/20 to-blue-50/40 rounded-2xl p-4.5 sm:p-6 border border-[#0f4a9b]/35 shadow-md ring-2 ring-[#0f4a9b]/15 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Grade Cap Badge & Route Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#0f4a9b] text-white shadow-2xs shrink-0">
                        Max Grade: A* / Level 9
                      </span>
                      <span className="text-[11px] font-bold text-[#0f4a9b] text-right">
                        A-Level &amp; IB Pathway
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0a1f3d] mb-1.5">Extended Tier</h3>
                    <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-3.5">
                      Covers full syllabus plus advanced extension theory and multi-step derivations required for Sixth Form science, maths, and medicine.
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-3 text-xs text-gray-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-0.5" />
                        <span><strong className="text-[#0a1f3d]">Full Curriculum:</strong> Extension theory, formal proofs, and multi-step questions.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-0.5" />
                        <span><strong className="text-[#0a1f3d]">Sixth Form Ready:</strong> Keeps competitive UK &amp; UAE Sixth Form pathways open.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#C7A24A] shrink-0 mt-0.5" />
                        <span><strong className="text-[#0a1f3d]">Uncapped Grades:</strong> Unlocks every top grade from A* down to E (or 9 to 4).</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsive Footer Info Bar */}
                  <div className="mt-3.5 pt-3 border-t border-blue-100/80 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="font-bold text-[#0a1f3d]">Papers:</span>
                      <span>Papers 2 &amp; 4 (Extended) · Edexcel Higher</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5 text-slate-600">
                      <span className="font-bold text-[#0a1f3d]">Target:</span>
                      <span className="font-semibold text-[#0f4a9b]">Grades A*–B (Levels 9–7)</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Our Role Clarification Box */}
          <div className="bg-slate-50/90 rounded-xl px-4 py-2.5 sm:py-3 border border-slate-200/80 text-center max-w-2xl mx-auto shadow-2xs">
            <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed">
              <strong className="text-[#0a1f3d]">Our Guidance:</strong> After initial diagnostic sessions, tutors share an honest assessment of working levels so families choose the right tier with total confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SUBJECTS WE TEACH (COMPACT 1-DESKTOP SECTION WITH ANIMATIONS) ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#f8fafc] border-b border-gray-100 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-blue-500/5 via-[#0f4a9b]/5 to-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Row with Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5 sm:mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0f4a9b] uppercase tracking-wider bg-blue-50 border border-blue-200/70 px-3 py-1 rounded-full shadow-2xs">
                Syllabus Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] tracking-tight mt-2 mb-1">
                IGCSE Subjects We Teach to Al Ain Students
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Specialist one-to-one coaching matched to Cambridge and Pearson Edexcel specifications taught in British curriculum schools across Al Ain.
              </p>
            </div>

            {/* Desktop Controls: Category Switcher & Arrows */}
            <div className="flex items-center gap-2 self-start md:self-end shrink-0">
              <div className="bg-white p-1 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveSubjectSlide(0)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeSubjectSlide === 0
                      ? 'bg-[#0f4a9b] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#0a1f3d] hover:bg-slate-100/70'
                  }`}
                >
                  Core STEM (3)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSubjectSlide(1)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeSubjectSlide === 1
                      ? 'bg-[#0f4a9b] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#0a1f3d] hover:bg-slate-100/70'
                  }`}
                >
                  Bio &amp; Humanities (3)
                </button>
              </div>


            </div>
          </div>

          {/* Desktop 1-Row Grid with Slide Animation */}
          <div className="hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSubjectSlide}
                initial={{ opacity: 0, x: activeSubjectSlide === 0 ? -16 : 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeSubjectSlide === 0 ? 16 : -16 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="grid grid-cols-3 gap-4 lg:gap-5"
              >
                {(activeSubjectSlide === 0
                  ? IGCSE_SUBJECTS.slice(0, 3)
                  : IGCSE_SUBJECTS.slice(3, 6)
                ).map((sub) => {
                  const VisualAnimation = SUBJECT_ANIMATIONS[sub.slug];
                  return (
                    <div
                      key={sub.name}
                      className="group bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0f4a9b]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Header: Subject-Specific Animation + Board Pills */}
                        <div className="flex items-start justify-between mb-3.5">
                          {VisualAnimation && <VisualAnimation />}
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#0f4a9b]">
                              {sub.papers}
                            </span>
                            <div className="flex gap-1 items-center">
                              {sub.boards.map((b, bIdx) => (
                                <React.Fragment key={b}>
                                  {bIdx > 0 && <span className="text-[10px] text-gray-400">·</span>}
                                  <span className="text-[10px] font-mono font-medium text-gray-500">
                                    {b.replace(/^(Cambridge|Edexcel)\s+/, '')}
                                  </span>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-1.5">
                          {sub.name}
                        </h3>

                        <p className="text-xs text-gray-600 leading-relaxed mb-3 font-normal">
                          {sub.desc}
                        </p>

                        <div className="bg-slate-50/90 rounded-xl p-2.5 border border-slate-100 text-[11px] text-gray-600 leading-snug mb-3">
                          <span className="font-bold text-[#0a1f3d]">Exam Focus:</span> {sub.highlight}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#f0c96a] bg-slate-900 px-2 py-0.5 rounded">
                          Cambridge &amp; Edexcel
                        </span>
                        <a
                          href={sub.slug}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#0f4a9b] group-hover:text-[#0a1f3d] transition-colors"
                        >
                          Subject Details <ChevronRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-4">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => setActiveSubjectSlide(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeSubjectSlide === idx ? 'w-6 bg-[#0f4a9b]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Swipeable Track */}
          <div className="sm:hidden">
            <div className="flex gap-3.5 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {IGCSE_SUBJECTS.map((sub) => {
                const VisualAnimation = SUBJECT_ANIMATIONS[sub.slug];
                return (
                  <div
                    key={sub.name}
                    className="w-[85vw] max-w-[320px] shrink-0 snap-center bg-white rounded-2xl p-4.5 border border-slate-200/90 shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        {VisualAnimation && <VisualAnimation />}
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#0f4a9b]">
                            {sub.papers}
                          </span>
                          <div className="flex gap-1 items-center">
                            {sub.boards.map((b, bIdx) => (
                              <React.Fragment key={b}>
                                {bIdx > 0 && <span className="text-[10px] text-gray-400">·</span>}
                                <span className="text-[10px] font-mono font-medium text-gray-500">
                                  {b.replace(/^(Cambridge|Edexcel)\s+/, '')}
                                </span>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-[#0a1f3d] mb-1.5">
                        {sub.name}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        {sub.desc}
                      </p>
                      <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 text-[11px] text-gray-600 leading-snug mb-3">
                        <span className="font-bold text-[#0a1f3d]">Exam Focus:</span> {sub.highlight}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#f0c96a] bg-slate-900 px-2 py-0.5 rounded">
                        Cambridge &amp; Edexcel
                      </span>
                      <a
                        href={sub.slug}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0f4a9b]"
                      >
                        Subject Details <ChevronRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CATCHY STUDENT EXAM TRAPS VS MARK SCHEME FIXES (1-DESKTOP VIEWPORT WITH BESPOKE DIAGRAMS) ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 max-w-2xl mx-auto">
            <span className="inline-flex items-center text-[11px] font-bold text-[#8c6c19] uppercase tracking-wider bg-[#C7A24A]/10 border border-[#C7A24A]/30 px-3 py-0.5 rounded-full shadow-2xs mb-2">
              Examiner Rubrics Demystified
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] tracking-tight">
              Common Student Traps vs. Examiner Mark Schemes
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              IGCSE marks don't just reward knowledge. They reward the exact wording and method steps written into each exam board's scheme.
            </p>
          </div>

          {/* Interactive Subject Switcher: Single Balanced Row on Both Mobile & Desktop */}
          <div className="max-w-md mx-auto mb-4 sm:mb-6">
            <div className="grid grid-cols-4 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 shadow-2xs gap-1">
              {EXAM_HACKS.map((hack, hIdx) => {
                const Icon = hack.icon;
                const isActive = activeHackIdx === hIdx;
                return (
                  <button
                    key={hack.tabLabel}
                    type="button"
                    onClick={() => setActiveHackIdx(hIdx)}
                    className={`flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                      isActive
                        ? 'bg-[#0f4a9b] text-white shadow-xs'
                        : 'text-slate-600 hover:text-[#0a1f3d] hover:bg-slate-200/50'
                    }`}
                  >
                    <Icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 ${isActive ? 'text-[#f0c96a]' : 'text-slate-400'}`} />
                    <span className="truncate">{hack.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Question Spotlight: Left Diagram, Right Minimal Content */}
          {(() => {
            const currentHack = EXAM_HACKS[activeHackIdx];
            const DiagramComponent = currentHack.diagram;
            return (
              <div className="bg-slate-50/80 rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-slate-200/90 shadow-sm max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 items-stretch">
                  {/* Left Column: Visual Diagram */}
                  <div className="lg:col-span-5 flex flex-col">
                    <DiagramComponent />
                  </div>

                  {/* Right Column: Minimal Punchy Content */}
                  <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200/90 shadow-2xs">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-[#0f4a9b] bg-blue-50 border border-blue-200/80 px-2 sm:px-2.5 py-0.5 rounded-full shrink-0">
                          {currentHack.subject}
                        </span>
                        <span className="text-[10.5px] sm:text-[11px] font-mono font-bold text-[#8c6c19] bg-[#C7A24A]/15 border border-[#C7A24A]/35 px-2.5 py-0.5 rounded-full shrink-0">
                          {currentHack.marks}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-2.5">
                        "{currentHack.question}"
                      </h3>
                    </div>

                    <div className="space-y-2 my-1">
                      {/* Trap Box */}
                      <div className="bg-rose-50/80 border border-rose-200/80 rounded-xl p-2.5 sm:p-3 flex items-start gap-2 sm:gap-2.5">
                        <span className="text-rose-700 font-bold text-xs shrink-0 mt-0.5">⚠️ Trap:</span>
                        <p className="text-xs text-rose-950 font-normal leading-relaxed">
                          {currentHack.trap}
                        </p>
                      </div>

                      {/* Fix Box */}
                      <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-2.5 sm:p-3 flex items-start gap-2 sm:gap-2.5">
                        <span className="text-emerald-800 font-bold text-xs shrink-0 mt-0.5">✓ Scheme:</span>
                        <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                          {currentHack.fix}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 mt-1 border-t border-slate-100 flex items-center justify-between text-[10.5px] sm:text-[11px] font-mono text-slate-500">
                      <span>CAIE &amp; Pearson Rubrics</span>
                      <span className="text-[#0f4a9b] font-bold">Method Marks Focus</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}</div>
      </section>

      {/* ── SECTION 6: PRACTICALS & PAPER 6 (COMPACT 1-DESKTOP SECTION WITH USTAAD BRANDING) ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            <span className="inline-flex items-center text-[11px] font-bold text-[#8c6c19] uppercase tracking-wider bg-[#C7A24A]/10 border border-[#C7A24A]/30 px-3 py-0.5 rounded-full shadow-2xs mb-2">
              Experimental Skills Studio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] tracking-tight">
              Practicals and Paper 6
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Alternative to Practical (Paper 6) tests scientific methodology over memorisation. We train students on the exact rubric triggers examiners award:
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 sm:gap-5 pb-3 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {/* 1. Planning */}
            <div className="w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto group relative bg-white rounded-2xl p-5 sm:p-5.5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#0f4a9b]/35 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A] opacity-80 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0f4a9b] border border-blue-200/80 flex items-center justify-center">
                    <PenTool className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400">01 / PLAN</span>
                </div>
                <h3 className="text-base font-extrabold text-[#0a1f3d] mb-1.5 group-hover:text-[#0f4a9b] transition-colors">
                  Planning
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3.5">
                  Reproducible experimental design. Specifying independent, dependent, and control variables with precise measuring apparatus.
                </p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-700 leading-snug">
                <span className="font-bold text-[#0a1f3d]">Rubric Focus:</span> Variable controls, apparatus range &amp; fair test logic.
              </div>
            </div>

            {/* 2. Handling Data */}
            <div className="w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto group relative bg-white rounded-2xl p-5 sm:p-5.5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#0f4a9b]/35 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A] opacity-80 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0f4a9b] border border-blue-200/80 flex items-center justify-center">
                    <LineChart className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400">02 / DATA</span>
                </div>
                <h3 className="text-base font-extrabold text-[#0a1f3d] mb-1.5 group-hover:text-[#0f4a9b] transition-colors">
                  Handling Data
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3.5">
                  Tables, graphs and anomalies. Proper axis scaling (50%+ grid rule), best-fit curves, gradient triangles, and unit consistency.
                </p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-700 leading-snug">
                <span className="font-bold text-[#0a1f3d]">Rubric Focus:</span> 50%+ grid usage, anomaly circling &amp; gradient method.
              </div>
            </div>

            {/* 3. Evaluating */}
            <div className="w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto group relative bg-white rounded-2xl p-5 sm:p-5.5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#0f4a9b]/35 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A] opacity-80 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0f4a9b] border border-blue-200/80 flex items-center justify-center">
                    <Scale className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400">03 / EVAL</span>
                </div>
                <h3 className="text-base font-extrabold text-[#0a1f3d] mb-1.5 group-hover:text-[#0f4a9b] transition-colors">
                  Evaluating
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3.5">
                  Error detection and valid improvements. Identifying systematic vs random errors, parallax avoidance, and repeat calculations.
                </p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-700 leading-snug">
                <span className="font-bold text-[#0a1f3d]">Rubric Focus:</span> Realistic errors &amp; syllabus-credited modifications.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: AL AIN SCHOOLS LOGOS ONLY ── */}
      <section className="py-12 sm:py-16 bg-[#f8fafc] border-b border-gray-100 [content-visibility:auto] [contain-intrinsic-size:auto_450px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0f4a9b] bg-blue-50 border border-blue-100 mb-2">
              Al Ain Community
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] tracking-tight">
              Supporting IGCSE Students Across Al Ain
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Students join us from British-curriculum schools across Al Ain. Tutors teach to the syllabus code your child’s school follows and plan revision around the school’s own test and mock dates, which you share with us at the start.
            </p>
          </div>

          {/* 5 Schools: 1 single row on desktop (lg:grid-cols-5), horizontal swipe on mobile/tablet */}
          <div className="flex lg:grid lg:grid-cols-5 overflow-x-auto lg:overflow-visible gap-3 sm:gap-4 pb-3 lg:pb-0 snap-x snap-mandatory scrollbar-none w-full">
            {AL_AIN_SCHOOLS.map((school, idx) => (
              <div
                key={idx}
                className="w-[190px] sm:w-[210px] shrink-0 snap-center lg:w-auto group relative bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_12px_rgba(15,74,155,0.03)] hover:shadow-lg hover:border-[#0f4a9b]/35 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-h-[110px] sm:min-h-[130px]"
                title={school.name}
              >
                <img
                  src={school.logo}
                  alt={school.alt}
                  width="160"
                  height="80"
                  className={`max-h-16 sm:max-h-20 max-w-[150px] sm:max-w-[160px] w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                    school.name.includes("Belvedere") ? "scale-115 sm:scale-120" : ""
                  }`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: TUTOR SPOTLIGHT (FEATURED IGCSE SPECIALIST - PLACED DIRECTLY BELOW SCHOOL LOGOS) ── */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-gray-100 relative overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_550px]">
        {/* Background Animated Ambient Glows */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -left-12 w-96 h-96 bg-[#0f4a9b] rounded-full blur-[110px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-16 -right-12 w-[420px] h-[420px] bg-[#C7A24A] rounded-full blur-[130px] pointer-events-none"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Background Floating Academic Icons: Graduation Caps, Books, Pens, Awards */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-8 lg:left-24 text-[#0f4a9b]/[0.08] pointer-events-none select-none hidden sm:block"
          aria-hidden="true"
        >
          <GraduationCap className="w-16 h-16 lg:w-20 lg:h-20" />
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-14 right-8 lg:right-24 text-[#C7A24A]/[0.12] pointer-events-none select-none hidden sm:block"
          aria-hidden="true"
        >
          <BookOpen className="w-16 h-16 lg:w-20 lg:h-20" />
        </motion.div>

        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [-15, -5, -15] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-12 left-12 lg:left-28 text-[#0f4a9b]/[0.08] pointer-events-none select-none hidden sm:block"
          aria-hidden="true"
        >
          <PenTool className="w-14 h-14 lg:w-16 lg:h-16" />
        </motion.div>

        <motion.div
          animate={{ y: [8, -8, 8], rotate: [10, 20, 10] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-14 right-12 lg:right-28 text-[#C7A24A]/[0.11] pointer-events-none select-none hidden sm:block"
          aria-hidden="true"
        >
          <Award className="w-14 h-14 lg:w-16 lg:h-16" />
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center text-[11px] font-bold text-[#8c6c19] uppercase tracking-wider bg-[#C7A24A]/10 border border-[#C7A24A]/30 px-3 py-1 rounded-full shadow-2xs">
              Tutor Profile
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mt-2.5 mb-2 tracking-tight">
              Featured IGCSE Specialist
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Real educators verified by qualifications, track record, and exam board certification.
            </p>
          </div>

          {/* Profile Card Container with Floating Academic Badges */}
          <div className="relative max-w-3xl mx-auto">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,74,155,0.06)] hover:shadow-[0_20px_45px_rgba(15,74,155,0.12)] hover:border-[#C7A24A]/40 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7 overflow-hidden"
            >
              {/* Top Brand Shimmer Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0a1f3d] opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Left Column: Tutor Image & Action Button Directly Underneath */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative">
                  <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#0f4a9b]/20 to-[#C7A24A]/30 blur-sm group-hover:blur-md transition-all duration-300 pointer-events-none" />
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-slate-100">
                    <img
                      src="/images/tutors/tabraiz-khan.webp"
                      alt="Tabraiz Khan, Cambridge Certified Maths, Physics and Statistics Tutor at Ustaad"
                      width={128}
                      height={128}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Floating Shield Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white p-1.5 rounded-xl shadow-md border-2 border-white flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-[#f0c96a]" />
                  </div>
                </div>

                {/* View Profile Button Placed Directly Below Image */}
                <a
                  href="/tutors/tabraiz-khan"
                  className="mt-3.5 w-full max-w-[128px] sm:max-w-[136px] inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#0f4a9b] hover:bg-[#0a3a79] text-white text-xs sm:text-[12.5px] font-bold transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer text-center"
                >
                  View Profile
                </a>
              </div>

              <div className="flex-1 text-center sm:text-left">
                {/* Header Badges */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
                    Tabraiz Khan
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8c6c19] bg-[#C7A24A]/15 border border-[#C7A24A]/35 px-2.5 py-0.5 rounded-full shadow-2xs">
                    <Award className="w-3 h-3 text-[#C7A24A]" />
                    Cambridge Certified
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    5.0 Rating
                  </span>
                </div>

                <p className="text-xs font-semibold text-[#0f4a9b] mb-3">
                  9+ Years Experience · Master in Statistics · IGCSE Specialist
                </p>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Specializes in Cambridge 0580 Mathematics and 0625 Physics, helping students build conceptual clarity from Year 9 through Year 11 with structured paper walkthroughs and rubric calibration.
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] bg-slate-50 text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200/90 font-mono font-medium shadow-2xs">
                    <Check className="w-3 h-3 text-[#0f4a9b]" />
                    CAIE 0580 Maths
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] bg-slate-50 text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200/90 font-mono font-medium shadow-2xs">
                    <Check className="w-3 h-3 text-[#0f4a9b]" />
                    CAIE 0625 Physics
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] bg-slate-50 text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200/90 font-mono font-medium shadow-2xs">
                    <Check className="w-3 h-3 text-[#0f4a9b]" />
                    Edexcel 4MA1 / 4PH1
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── SECTION 10: RHYTHM & FLEXIBILITY AROUND SCHOOL (WITH SCROLL-TRIGGERED FONT ANIMATION & USTAAD BLUE CARD) ── */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-100 overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_450px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Animated Typography on Scroll */}
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="mb-3"
              >
                <span className="inline-flex items-center text-[11px] font-bold text-[#0f4a9b] uppercase tracking-wider bg-blue-50 border border-blue-100/80 px-3 py-1 rounded-full">
                  Online Convenience
                </span>
              </motion.div>

              {/* Scroll-triggered staggered word animation for the heading */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.07,
                    },
                  },
                }}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mt-2 mb-3.5 tracking-tight flex flex-wrap gap-x-2.5"
              >
                {"Tuition That Fits Around School".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { type: "spring", damping: 14, stiffness: 120 },
                      },
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5"
              >
                Lessons run online, so Al Ain students can book after school without travel. Many families choose a weekly slot, then add short bursts before mocks or end-of-term tests.
              </motion.p>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.14, delayChildren: 0.25 },
                  },
                }}
                className="space-y-3.5 text-xs sm:text-sm text-gray-700 mb-6"
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -14 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                  }}
                  className="flex items-start gap-2.5"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-[#0f4a9b]" />
                  </div>
                  <span className="leading-snug">Interactive digital whiteboard for working through questions together.</span>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -14 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                  }}
                  className="flex items-start gap-2.5"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-[#0f4a9b]" />
                  </div>
                  <span className="leading-snug">Flexible rescheduling around school athletics, fixtures, and internal exams.</span>
                </motion.li>
              </motion.ul>
            </div>

            {/* Right Column: Ustaad Deep Navy & Royal Blue Card */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 18 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.55, type: "spring", stiffness: 110 }}
                className="relative bg-gradient-to-br from-[#0a1f3d] via-[#0d2a54] to-[#0f4a9b] rounded-3xl p-6 sm:p-7 border border-[#C7A24A]/35 shadow-[0_12px_36px_rgba(10,31,61,0.18)] text-white overflow-hidden group hover:shadow-[0_20px_45px_rgba(15,74,155,0.25)] hover:border-[#C7A24A]/60 transition-all duration-300"
              >
                {/* Gold Brand Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#f0c96a] to-transparent opacity-90" />

                {/* Soft ambient background glow */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#C7A24A]/15 rounded-full blur-2xl pointer-events-none" />

                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#f0c96a] uppercase tracking-wider bg-white/10 border border-[#f0c96a]/30 px-3 py-1 rounded-full mb-3.5 shadow-2xs">
                  <Clock className="w-3 h-3 text-[#f0c96a]" />
                  Session Outline
                </span>

                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2.5 tracking-tight">
                  What Happens in the First Session
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Your child brings real work: a topic they are studying or a past-paper question they found hard. The tutor starts there.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: PLANNING AHEAD FOR A-LEVEL OR IB (EXECUTIVE USTAAD BRAND BANNER) ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#f8fafc] border-b border-gray-100 relative overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_350px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0a2754] via-[#0f4a9b] to-[#1256b0] border border-blue-400/30 shadow-[0_16px_45px_rgba(15,74,155,0.22)] p-6 sm:p-8 lg:p-9 text-center max-w-3xl mx-auto overflow-hidden">
            {/* Top Gold Shimmer Line */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#f0c96a] to-transparent opacity-90" />

            {/* Subtle Ambient Brand Glows */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/15 rounded-full blur-[70px] pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#f0c96a]/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/15 text-[#f0c96a] border border-[#f0c96a]/40 shadow-2xs mb-3">
                Sixth Form Pathways
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2.5">
                Planning Ahead for <span className="text-[#f0c96a]">A-Level or IB</span>
              </h2>

              <p className="text-blue-50 text-xs sm:text-sm md:text-[14px] leading-relaxed max-w-xl mx-auto font-normal">
                Sixth-form places usually depend on IGCSE grades in the subjects a student wants to continue, so subject and tier choices in Year 9 matter. We help students check which grades their chosen A-Level or IB subjects ask for and plan Years 10 and 11 around them.
              </p>

              {/* Pathway Indicator Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5 pt-4 border-t border-white/15">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-xs font-semibold text-white shadow-2xs">
                  <GraduationCap className="w-3.5 h-3.5 text-[#f0c96a]" />
                  Cambridge &amp; Edexcel A-Level
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-xs font-semibold text-white shadow-2xs">
                  <Compass className="w-3.5 h-3.5 text-[#7dd3fc]" />
                  IB Diploma SL &amp; HL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: VERIFIED REVIEW (Card matching MathsTutorDubaiPage) ── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden border-b border-gray-100 [content-visibility:auto] [contain-intrinsic-size:auto_350px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-[#0a1f3d] mb-3 shadow-xs">
              <span className="text-[#C7A24A] tracking-tighter">★★★★★</span>
              <span>5.0 · Verified Google reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d]">
              What Parents Say on Google
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_32px_rgba(15,74,155,0.08)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Star key={j} className="h-4 w-4 fill-[#C7A24A] text-[#C7A24A]" />
                  ))}
                </div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
                  GOOGLE REVIEW
                </span>
              </div>
              <p className="text-[#374151] text-[15px] sm:text-[16px] leading-relaxed mb-6 italic">
                &ldquo;I had very good experience with Ustad for my daughter &hellip; her math teacher is one of the best tuters i experienced .. he explains the concepts very well and have an excellent experience of IGCSE and A levels examination. Highly recommended&rdquo;
              </p>
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_8px_rgba(15,74,155,0.28)] notranslate shrink-0" translate="no">
                  SA
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold text-[#0a1f3d] text-[15px] notranslate truncate" translate="no">
                    Sumayya Alamri
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5 truncate">
                    Google review
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: FAQS (What Al Ain Families Ask) ── */}
      <section id="faqs" className="py-16 sm:py-20 bg-white border-b border-gray-100 [content-visibility:auto] [contain-intrinsic-size:auto_500px]">
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
                What Al Ain Families <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Ask About IGCSE Tutoring</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                School moves, exam boards, Ramadan timings and fees, answered for Al Ain families.
              </p>
            </motion.div>

            {/* Right Accordion Column */}
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {IGCSE_AL_AIN_FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-label={`Toggle FAQ: ${faq.q}`}
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
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border bg-white shadow-xs transition-colors hover:border-[#0f4a9b]/50"
                        style={{
                          minHeight: '52px',
                          padding: '10px 18px',
                          cursor: 'pointer',
                          borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)',
                        }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[13.5px] sm:text-[14px] leading-snug">
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
                            className="flex items-start gap-3 rounded-2xl border p-4 sm:p-4.5 bg-[#f8fafc]"
                            style={{
                              borderColor: 'rgba(15,74,155,0.15)',
                              boxShadow: '0 4px 16px rgba(15,74,155,0.06)',
                            }}
                          >
                            <p className="flex-1 text-gray-600 text-[13px] sm:text-[13.5px] leading-relaxed">
                              {faq.a}
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

      {/* ── SECTION 14: INTERNAL LINKS HUB (Related Pathways) ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/70 [content-visibility:auto] [contain-intrinsic-size:auto_350px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-[#0f4a9b] bg-blue-50 border border-blue-100 mb-2.5 tracking-wide">
              UAE Curriculum Ecosystem
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0a1f3d] tracking-tight">
              Explore Related UAE Tutoring Pathways
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-lg mx-auto leading-relaxed">
              Online 1-to-1 tutoring for families in Dubai, Abu Dhabi and Al Ain, matched to their curriculum.
            </p>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible gap-3.5 sm:gap-4 pb-2 sm:pb-0 snap-x snap-mandatory scrollbar-none w-full">
            {IGCSE_RELATED_PATHWAYS.map((pathway) => (
              <a
                key={pathway.href}
                href={pathway.href}
                className="w-[230px] shrink-0 snap-center sm:w-auto group relative bg-[#f8fafc] hover:bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-[#0f4a9b]/35 shadow-[0_2px_8px_rgba(15,74,155,0.02)] hover:shadow-[0_8px_24px_rgba(15,74,155,0.08)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl ${pathway.bg} ${pathway.color} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200`}>
                      <pathway.icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-600 bg-white px-2 py-0.5 rounded-full border border-slate-200/60 shadow-2xs">
                      {pathway.tag}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-snug mb-1">
                    {pathway.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {pathway.sub}
                  </p>
                </div>
                <div className="pt-2.5 mt-2.5 border-t border-slate-200/60 text-[11px] font-semibold text-[#0f4a9b] group-hover:underline">
                  Explore Pathway
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 15: FINAL CONVERSION CTA (Compact White Box Card) ── */}
      <section className="py-10 sm:py-14 bg-[#f8fafc] relative overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_400px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-9 md:p-10 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,74,155,0.06)] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />
            
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-[#0f4a9b] bg-blue-50 border border-blue-100 mb-3 sm:mb-3.5 shadow-2xs">
              Start IGCSE Support in Al Ain Today
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#0a1f3d] mb-3 leading-snug">
              Start IGCSE Lessons{' '}
              <span style={{ background: 'linear-gradient(92deg,#0f4a9b 0%,#1e5bb3 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                From Home in Al Ain
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed font-normal">
              Connect with a specialist Cambridge or Pearson Edexcel IGCSE tutor for your child. Every first 1-hour lesson includes a complimentary 15-minute orientation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full">
              <a
                href={BOOKING}
                className="w-auto min-w-[200px] sm:min-w-0 inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm text-white transition-all hover:-translate-y-0.5 shadow-md shadow-[#0f4a9b]/25"
                style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)' }}
              >
                Book Your First Session
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto min-w-[200px] sm:min-w-0 inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-md shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" /> WhatsApp Us
              </a>
            </div>

            <p className="text-[11px] sm:text-xs text-gray-400 mt-3.5 font-medium">
              No commitment. Cancel anytime.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
