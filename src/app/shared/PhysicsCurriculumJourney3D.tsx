import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Activity, 
  Target, 
  Sparkles, 
  BookOpen, 
  Award,
  Zap,
  Atom,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface CurriculumPathway {
  name: string;
  shortName: string;
  mobileStep: string;
  level: string;
  boards: string;
  lead: string;
  bullets: string[];
  link: { label: string; href: string };
  badgeColor: string;
  accentGradient: string;
  pillBg: string;
  physicsTopic: string;
  diagramType: 'optics' | 'waves' | 'quantum';
}

const CURRICULUM_PATHWAYS: CurriculumPathway[] = [
  {
    name: 'MYP Sciences (Physics)',
    shortName: 'MYP Physics',
    mobileStep: 'Years 7–10',
    level: 'Years 7–10 / MYP 1–5',
    boards: 'IB Middle Years Programme',
    lead: 'Building scientific inquiry, Criterion B experimental design, and Criterion C quantitative data analysis before the Diploma.',
    bullets: [
      'Criterion A: Knowledge & understanding of mechanics, energy & waves',
      'Criterion B: Inquiring & designing rigorous scientific investigations',
      'Criterion C: Processing data, graphing & mathematical modeling',
      'Criterion D: Reflecting on the real-world scientific & ethical impacts'
    ],
    link: { label: 'Explore MYP Sciences', href: '/myp' },
    badgeColor: '#0f4a9b',
    accentGradient: 'from-blue-600 via-indigo-600 to-sky-500',
    pillBg: 'bg-blue-50 text-blue-700 border-blue-200',
    physicsTopic: 'Inquiry & Foundation Mechanics',
    diagramType: 'optics'
  },
  {
    name: 'IB DP Physics (Standard Level)',
    shortName: 'IB DP SL',
    mobileStep: 'DP SL 1–2',
    level: 'Years 12–13 / DP 1–2',
    boards: 'IB Diploma Programme SL · Themes A–E',
    lead: 'Core syllabus mastery, Paper 1A/1B & Paper 2 exam techniques, and full Internal Assessment (IA) scientific report coaching.',
    bullets: [
      'Themes A–E core conceptual and mathematical mastery',
      'Paper 1 (Multiple choice & data-based) & Paper 2 structured theory',
      'Internal Assessment (IA) research design and uncertainty propagation',
      'Focused past-paper drills targeting IB mark-scheme command terms'
    ],
    link: { label: 'Explore DP Physics SL', href: '/dp-sl' },
    badgeColor: '#C7A24A',
    accentGradient: 'from-amber-500 via-[#C7A24A] to-blue-700',
    pillBg: 'bg-amber-50 text-amber-800 border-amber-200',
    physicsTopic: 'Themes A–E Core & IA Mastery',
    diagramType: 'waves'
  },
  {
    name: 'IB DP Physics (Higher Level)',
    shortName: 'IB DP HL',
    mobileStep: 'DP HL 1–2',
    level: 'Years 12–13 / DP 1–2',
    boards: 'IB Diploma Programme HL · Advanced Extension',
    lead: 'Advanced mathematical derivations, HL extension topics (rotational dynamics, thermodynamics, induction), and complex IA data processing.',
    bullets: [
      'Full HL extension topics: fields, induction, thermodynamics & quantum',
      'Advanced calculus and vector modeling alongside Maths AA',
      'Rigorous IA statistical modeling, maximum/minimum gradient analysis',
      'Multi-concept Paper 2 extended problem solving under timed pressure'
    ],
    link: { label: 'Explore DP Physics HL', href: '/dp-hl' },
    badgeColor: '#0a1f3d',
    accentGradient: 'from-[#0a1f3d] via-blue-800 to-[#C7A24A]',
    pillBg: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    physicsTopic: 'HL Extension & Quantum Calculus',
    diagramType: 'quantum'
  }
];

/* 3D Animated Physics Apparatus Visualizer */
function PhysicsApparatusVisualizer({ type }: { type: 'optics' | 'waves' | 'quantum' }) {
  if (type === 'optics') {
    return (
      <div className="relative w-full h-28 sm:h-32 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 border border-blue-100/80 p-2 shadow-inner">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#0f4a9b_1px,transparent_1px)] opacity-[0.07] [background-size:14px_14px]" />
        
        <svg viewBox="0 0 280 130" className="w-full h-full max-w-[240px] drop-shadow-sm">
          {/* Incident Ray */}
          <motion.line
            x1="20"
            y1="35"
            x2="110"
            y2="65"
            stroke="#0f4a9b"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1 }}
          />
          
          {/* Glass Prism with 3D Facet */}
          <polygon points="140,15 190,105 90,105" fill="rgba(255,255,255,0.7)" stroke="#0f4a9b" strokeWidth="2" />
          <polygon points="140,15 190,105 160,110" fill="rgba(15,74,155,0.06)" />
          
          {/* Refracted Dispersion Rays */}
          <motion.line
            x1="130"
            y1="60"
            x2="160"
            y2="70"
            stroke="#C7A24A"
            strokeWidth="2"
            strokeDasharray="3 3"
          />
          <motion.line
            x1="160"
            y1="70"
            x2="250"
            y2="45"
            stroke="#e11d48"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line
            x1="160"
            y1="70"
            x2="255"
            y2="65"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          />
          <motion.line
            x1="160"
            y1="70"
            x2="250"
            y2="90"
            stroke="#0284c7"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          />

          {/* Scientific Labels */}
          <text x="35" y="27" fill="#0f4a9b" fontSize="7.5" fontWeight="bold" fontFamily="monospace">INCIDENT RAY</text>
          <text x="140" y="120" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">REFRACTION n₁ sin θ₁ = n₂ sin θ₂</text>
          <text x="255" y="40" fill="#e11d48" fontSize="7" fontWeight="bold" fontFamily="monospace">700nm</text>
          <text x="255" y="100" fill="#0284c7" fontSize="7" fontWeight="bold" fontFamily="monospace">400nm</text>
        </svg>

        {/* Floating badge */}
        <div className="absolute top-1.5 right-2 px-2 py-0.5 rounded-full bg-white/90 border border-blue-200/80 text-[8.5px] font-bold text-[#0f4a9b] shadow-2xs">
          CRITERION B/C LAB
        </div>
      </div>
    );
  }

  if (type === 'waves') {
    return (
      <div className="relative w-full h-28 sm:h-32 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-amber-50/70 via-white to-blue-50/50 border border-amber-200/60 p-2 shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(#C7A24A_1px,transparent_1px)] opacity-[0.09] [background-size:14px_14px]" />

        <svg viewBox="0 0 280 130" className="w-full h-full max-w-[240px] drop-shadow-sm">
          {/* Standing Wave Harmonics */}
          <line x1="20" y1="65" x2="260" y2="65" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />

          {/* Fundamental Sine Wave */}
          <motion.path
            d="M 20 65 Q 80 15, 140 65 T 260 65"
            fill="none"
            stroke="#0f4a9b"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{
              d: [
                "M 20 65 Q 80 18, 140 65 T 260 65",
                "M 20 65 Q 80 112, 140 65 T 260 65",
                "M 20 65 Q 80 18, 140 65 T 260 65"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Inverted Phase Wave */}
          <motion.path
            d="M 20 65 Q 80 115, 140 65 T 260 65"
            fill="none"
            stroke="#C7A24A"
            strokeWidth="1.8"
            strokeDasharray="4 3"
            strokeLinecap="round"
            animate={{
              d: [
                "M 20 65 Q 80 112, 140 65 T 260 65",
                "M 20 65 Q 80 18, 140 65 T 260 65",
                "M 20 65 Q 80 112, 140 65 T 260 65"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Node and Antinode Markers */}
          <circle cx="20" cy="65" r="2.5" fill="#0f4a9b" />
          <circle cx="140" cy="65" r="3" fill="#C7A24A" />
          <circle cx="260" cy="65" r="2.5" fill="#0f4a9b" />

          <text x="140" y="84" textAnchor="middle" fill="#0a1f3d" fontSize="7.5" fontWeight="bold" fontFamily="monospace">NODE (λ/2)</text>
          <text x="80" y="20" textAnchor="middle" fill="#0f4a9b" fontSize="7" fontWeight="bold" fontFamily="monospace">ANTINODE (A max)</text>
          <text x="140" y="120" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">v = fλ · T = 2π√(m/k)</text>
        </svg>

        <div className="absolute top-1.5 right-2 px-2 py-0.5 rounded-full bg-white/90 border border-amber-200 text-[8.5px] font-bold text-[#9E7B24] shadow-2xs">
          THEMES A–E · IA RIGOR
        </div>
      </div>
    );
  }

  // Quantum / HL Model
  return (
    <div className="relative w-full h-28 sm:h-32 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/70 border border-indigo-200/70 p-2 shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(#0a1f3d_1px,transparent_1px)] opacity-[0.08] [background-size:14px_14px]" />

      <svg viewBox="0 0 280 130" className="w-full h-full max-w-[240px] drop-shadow-sm">
        {/* Nucleus */}
        <g transform="translate(140, 65)">
          <circle cx="0" cy="0" r="12" fill="#0a1f3d" opacity="0.1" />
          <circle cx="0" cy="0" r="6" fill="#0a1f3d" />
          <circle cx="0" cy="0" r="2" fill="#f0c96a" />

          {/* Orbit 1 */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          >
            <ellipse cx="0" cy="0" rx="50" ry="20" fill="none" stroke="#0f4a9b" strokeWidth="1.4" strokeDasharray="3 3" transform="rotate(-25)" />
            <circle cx="44" cy="-18" r="2.5" fill="#0f4a9b" />
          </motion.g>

          {/* Orbit 2 */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 11, ease: 'linear' }}
          >
            <ellipse cx="0" cy="0" rx="60" ry="24" fill="none" stroke="#C7A24A" strokeWidth="1.4" strokeDasharray="4 4" transform="rotate(40)" />
            <circle cx="-38" cy="38" r="2.5" fill="#C7A24A" />
          </motion.g>

          {/* Orbit 3 (High Energy HL) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          >
            <ellipse cx="0" cy="0" rx="68" ry="26" fill="none" stroke="#6366f1" strokeWidth="1.2" strokeDasharray="2 3" transform="rotate(85)" />
            <circle cx="65" cy="5" r="2" fill="#6366f1" />
          </motion.g>
        </g>

        {/* Photon Wave Equation */}
        <text x="20" y="20" fill="#0a1f3d" fontSize="7.5" fontWeight="bold" fontFamily="monospace">E = hf · λ = h/p</text>
        <text x="140" y="120" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">ROTATIONAL &amp; QUANTUM DYNAMICS</text>
        <text x="260" y="20" textAnchor="end" fill="#C7A24A" fontSize="7.5" fontWeight="bold" fontFamily="monospace">ΔE = -13.6/n²</text>
      </svg>

      <div className="absolute top-1.5 right-2 px-2 py-0.5 rounded-full bg-white/90 border border-indigo-200 text-[8.5px] font-bold text-indigo-950 shadow-2xs">
        HL CALCULUS EXTENSION
      </div>
    </div>
  );
}

export function PhysicsCurriculumJourney3D() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const currentPathway = CURRICULUM_PATHWAYS[activeTab];

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-slate-50/80 via-white to-blue-50/30 relative overflow-hidden text-left">
      {/* Background Ambient Physics Blueprint Watermarks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Radial Ambient Glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-blue-100/40 via-amber-50/30 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl opacity-50" />
        
        {/* Subtle Precision Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="light-journey-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(15,74,155,0.045)" strokeWidth="1" />
              <circle cx="48" cy="48" r="0.8" fill="rgba(199,162,74,0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#light-journey-grid)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-[#0f4a9b]/20 text-[#0f4a9b] text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-widest mb-1.5 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#C7A24A]" />
            <span>Curriculum Pathways</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1.5 tracking-tight">
            The Physics Journey <span className="text-[#0f4a9b] relative inline-block">
              With Ustaad
              <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#0f4a9b]/30 to-[#C7A24A]/40 rounded-full -z-10" />
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            From MYP sciences to IB Diploma SL &amp; HL, we align with the exact syllabus your child studies in Dubai.
          </p>
        </div>

        {/* ── UNIFIED SINGLE CONTAINER: INTEGRATED PATHWAY TABS & SHOWCASE ── */}
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-[0_15px_40px_-12px_rgba(15,74,155,0.08)] overflow-hidden">
          
          {/* Top Integrated Segmented Tabs Header - 3 Steps Visible simultaneously in one unified section */}
          <div className="bg-slate-50/90 p-1 sm:p-2 border-b border-slate-200/80 grid grid-cols-3 gap-1 sm:gap-2">
            {CURRICULUM_PATHWAYS.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`relative text-left p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl transition-all duration-200 cursor-pointer select-none flex flex-col justify-between ${
                    isActive
                      ? 'bg-white text-[#0a1f3d] shadow-sm border border-slate-200/90'
                      : 'text-slate-600 hover:text-[#0a1f3d] hover:bg-white/60 border border-transparent'
                  }`}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                    <div className="absolute top-0 inset-x-2 sm:inset-x-3 h-0.5 sm:h-1 bg-[#0f4a9b] rounded-full" />
                  )}

                  <div className="flex items-center justify-between mb-0.5">
                    <span
                      className={`text-[7.5px] sm:text-[8.5px] font-extrabold tracking-wider uppercase px-1 sm:px-1.5 py-0.5 rounded border ${
                        isActive
                          ? tab.pillBg
                          : 'bg-slate-200/60 text-slate-500 border-slate-200'
                      }`}
                    >
                      STEP 0{idx + 1}
                    </span>
                    
                    <div
                      className={`hidden sm:flex w-4 h-4 rounded-full items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#0f4a9b] text-white shadow-xs'
                          : 'bg-slate-200/60 text-slate-400'
                      }`}
                    >
                      <GraduationCap className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  <div className="font-extrabold text-[10.5px] sm:text-[12.5px] text-[#0a1f3d] leading-tight truncate sm:whitespace-normal">
                    <span className="sm:hidden">{tab.shortName}</span>
                    <span className="hidden sm:inline">{tab.name}</span>
                  </div>

                  <div className="text-[9px] sm:text-[9.5px] text-slate-500 font-medium mt-0.5">
                    <span className="sm:hidden">{tab.mobileStep}</span>
                    <span className="hidden sm:inline">{tab.level}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Unified Content Body */}
          <div className="p-3.5 sm:p-5 lg:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden"
              >
                <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-center">
                  
                  {/* Left Column: Information, Level, Lead & Diagram */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-2.5 sm:space-y-3">
                    <div>
                      {/* Level Pill */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        <span className="inline-flex items-center gap-1 text-[9px] sm:text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0f4a9b]/10 border border-[#0f4a9b]/20 text-[#0f4a9b]">
                          <Layers className="w-3 h-3 text-[#C7A24A]" />
                          {currentPathway.level}
                        </span>
                        <span className="text-[9.5px] sm:text-[10px] font-mono text-slate-500 font-medium">
                          {currentPathway.boards}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-xl lg:text-2xl font-serif font-extrabold text-[#0a1f3d] mb-1 leading-tight">
                        {currentPathway.name}
                      </h3>

                      <p className="text-slate-600 text-[11.5px] sm:text-xs lg:text-[13px] leading-relaxed mb-2 font-normal">
                        {currentPathway.lead}
                      </p>
                    </div>

                    {/* 3D Physics Vector Visualizer Embedded in Card */}
                    <PhysicsApparatusVisualizer type={currentPathway.diagramType} />

                    {/* CTA Button */}
                    <div className="pt-1.5 sm:pt-2">
                      <a
                        href={currentPathway.link.href}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2 rounded-xl bg-[#0a1f3d] hover:bg-[#0f4a9b] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                      >
                        <span>{currentPathway.link.label}</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Key Curriculum Focus Areas as Tiles (Desktop Only) */}
                  <div className="hidden lg:block lg:col-span-6 bg-gradient-to-br from-slate-50 via-slate-50/50 to-blue-50/40 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-inner">
                    <div className="space-y-2">
                      {currentPathway.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-2"
                        >
                          <div className="w-4 h-4 rounded bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[9.5px]">
                            ✓
                          </div>
                          <p className="text-[11.5px] sm:text-xs text-slate-700 leading-snug font-medium">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Trust Footer Note */}
                    <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[10.5px] text-slate-500">
                      <span className="flex items-center gap-1 text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        100% Dubai Syllabus Aligned
                      </span>
                      <span className="text-[#0f4a9b] font-bold">1-to-1 Mastery</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
