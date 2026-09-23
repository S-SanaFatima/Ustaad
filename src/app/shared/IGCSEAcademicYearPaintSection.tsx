import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, CheckCircle2, Sparkles, Play, Pause } from 'lucide-react';

const PHASES = [
  {
    phase: 'PHASE 01',
    period: 'Sep to Dec',
    title: 'Diagnostic and Rebuild',
    desc: "A free 30-minute diagnostic spots weak topics and command-word gaps. Lessons rebuild foundations in line with your school's teaching order.",
    milestone: 'Term 1 Diagnostic',
    paintColor: '#0f4a9b',
    paintGradient: 'linear-gradient(135deg, #0f4a9b, #1e5ba8)',
    lightBg: 'rgba(15,74,155,0.06)',
    borderColor: 'rgba(15,74,155,0.25)',
    goldGlow: 'rgba(15,74,155,0.2)',
  },
  {
    phase: 'PHASE 02',
    period: 'Jan to Feb',
    title: 'Targeted Mock Fixes',
    desc: 'School mock results drive the plan. Lessons pivot directly to high-tariff topics and specific question formats where marks were lost.',
    milestone: 'Mock Paper Analysis',
    paintColor: '#c9a24c',
    paintGradient: 'linear-gradient(135deg, #e4c069, #c9a24c)',
    lightBg: 'rgba(201,162,76,0.08)',
    borderColor: 'rgba(201,162,76,0.35)',
    goldGlow: 'rgba(201,162,76,0.25)',
  },
  {
    phase: 'PHASE 03',
    period: 'Mar to Apr',
    title: 'Weekly Past Papers',
    desc: 'Timed practice with real Cambridge and Edexcel past papers. Strict mark scheme grading builds exam technique, speed, and accuracy.',
    milestone: 'Mark Scheme Mastery',
    paintColor: '#0284c7',
    paintGradient: 'linear-gradient(135deg, #0284c7, #38bdf8)',
    lightBg: 'rgba(2,132,199,0.06)',
    borderColor: 'rgba(2,132,199,0.25)',
    goldGlow: 'rgba(2,132,199,0.2)',
  },
  {
    phase: 'PHASE 04',
    period: 'May to Jun',
    title: 'Final Exam Polish',
    desc: 'Final sprint before official board papers. High-frequency formula drills, Paper 6 write-ups, and examiner-style final checks.',
    milestone: 'Board Exams Ready',
    paintColor: '#0a1f3d',
    paintGradient: 'linear-gradient(135deg, #0a1f3d, #12305a)',
    lightBg: 'rgba(10,31,60,0.06)',
    borderColor: 'rgba(10,31,60,0.25)',
    goldGlow: 'rgba(201,162,76,0.3)',
  },
];

/* ── 3D PAINTBRUSH SVG COMPONENT ── */
function Animated3DPaintbrush({ activeIndex }: { activeIndex: number }) {
  const currentPhase = PHASES[activeIndex];

  return (
    <motion.div
      className="relative pointer-events-none z-30 select-none"
      animate={{
        rotate: [0, -12, 10, -6, 0],
        y: [0, -5, 3, -2, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.8,
        ease: 'easeInOut',
      }}
    >
      <svg viewBox="0 0 100 100" className="w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] drop-shadow-xl overflow-visible">
        <defs>
          {/* Wood Handle Gradient */}
          <linearGradient id="brushHandle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="40%" stopColor="#92400e" />
            <stop offset="80%" stopColor="#451a03" />
            <stop offset="100%" stopColor="#1e1005" />
          </linearGradient>

          {/* Gold Ferrule Gradient */}
          <linearGradient id="brushFerrule" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5D061" />
            <stop offset="50%" stopColor="#C9A24C" />
            <stop offset="100%" stopColor="#8A6820" />
          </linearGradient>

          {/* Bristle Dark Gradient */}
          <linearGradient id="brushBristles" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="65%" stopColor="#1e293b" />
            <stop offset="100%" stopColor={currentPhase.paintColor} />
          </linearGradient>
        </defs>

        {/* Brush Long Handle */}
        <path
          d="M78 8 L88 18 C92 22, 90 26, 84 32 L46 70 L34 58 L72 20 C76 16, 76 10, 78 8 Z"
          fill="url(#brushHandle)"
          stroke="#451a03"
          strokeWidth="1.2"
        />

        {/* Shiny Gold Ferrule */}
        <polygon
          points="46,70 34,58 26,66 38,78"
          fill="url(#brushFerrule)"
          stroke="#C9A24C"
          strokeWidth="1"
        />
        {/* Ferrule rings */}
        <line x1="42" y1="64" x2="30" y2="76" stroke="#8A6820" strokeWidth="1" opacity="0.6" />

        {/* Bristles with active Wet Paint Tip */}
        <path
          d="M26 66 L38 78 C32 86, 20 92, 10 96 C14 86, 18 74, 26 66 Z"
          fill="url(#brushBristles)"
          stroke={currentPhase.paintColor}
          strokeWidth="1.2"
        />

        {/* Wet Paint Droplet / Splatter */}
        <motion.circle
          cx="10"
          cy="96"
          r="4.5"
          fill={currentPhase.paintColor}
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  );
}

/* ── 3D ARTIST PALETTE / PAINT BOARD WITH MONTHS ── */
function ArtistPaintBoard({
  activeIndex,
  onSelectPhase,
  isPlaying,
  togglePlay,
}: {
  activeIndex: number;
  onSelectPhase: (index: number) => void;
  isPlaying: boolean;
  togglePlay: () => void;
}) {
  return (
    <div className="relative max-w-2xl mx-auto mb-6 sm:mb-8 select-none">
      {/* 3D Acrylic / Walnut Painter's Board Container */}
      <div
        className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-[#c9a24c]/30 shadow-[0_12px_36px_rgba(10,31,60,0.08),0_0_0_1px_rgba(201,162,76,0.18)]"
        style={{ perspective: 1000 }}
      >
        {/* Top Header of the Board */}
        <div className="flex items-center justify-between gap-2 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3 border-b border-[#0a1f3d]/08">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#c9a24c] animate-ping" />
            <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-widest text-[#0a1f3d] flex items-center gap-1.5">
              <span>Academic Year Timeline</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="inline-flex items-center gap-1 text-[10.5px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#0f4a9b]/5 hover:bg-[#0f4a9b]/10 text-[#0f4a9b] border border-[#0f4a9b]/15 transition-all cursor-pointer"
              title={isPlaying ? 'Pause auto-cycle' : 'Play auto-cycle'}
            >
              {isPlaying ? <Pause className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> : <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />}
              <span>{isPlaying ? 'Auto-Cycle' : 'Resume'}</span>
            </button>
          </div>
        </div>

        {/* 4 Month Paint Wells (Color Dabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 relative">
          {PHASES.map((p, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={p.phase}
                onClick={() => onSelectPhase(idx)}
                className={`relative group rounded-xl sm:rounded-2xl p-2 sm:p-3 text-left transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isActive
                    ? 'bg-white shadow-[0_8px_20px_rgba(10,31,60,0.12)] border-[#c9a24c] -translate-y-0.5 sm:-translate-y-1 scale-[1.02]'
                    : 'bg-[#f4f7fc]/80 hover:bg-white border-slate-200/80 hover:border-[#c9a24c]/40 hover:-translate-y-0.5'
                }`}
              >
                {/* Paint Dab Circle with Fluid Animation */}
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <div className="relative">
                    <div
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-inner border border-white"
                      style={{ background: p.paintGradient }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeBrushDab"
                          className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white shadow-xs"
                          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        />
                      )}
                    </div>
                    {/* Ripple aura when active */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#c9a24c]"
                        animate={{ scale: [1, 1.45, 1], opacity: [0.9, 0, 0.9] }}
                        transition={{ repeat: Infinity, duration: 1.8 }}
                      />
                    )}
                  </div>

                  <span
                    className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider ${
                      isActive ? 'text-[#0f4a9b]' : 'text-slate-500'
                    }`}
                  >
                    {p.phase}
                  </span>
                </div>

                {/* Months Name written on paint board */}
                <div>
                  <div
                    className="text-[11.5px] sm:text-[13px] font-black leading-tight text-[#0a1f3d]"
                    style={{ fontFamily: 'var(--font-serif,"Fraunces",Georgia,serif)' }}
                  >
                    {p.period}
                  </div>
                  <div className="text-[9.5px] sm:text-[10px] text-slate-500 font-medium truncate mt-0.5">
                    {p.title}
                  </div>
                </div>

                {/* Active Paint Stroke Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activePaintUnderline"
                    className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] sm:h-[3px] rounded-full"
                    style={{ background: p.paintGradient }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT: 3D ANIMATED STRUCTURAL PAINT SECTION ── */
export function IGCSEAcademicYearPaintSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-revolve through months/phases every 3.8 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % PHASES.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activePhase = PHASES[activeIndex];

  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-[#f4f7fc] relative overflow-hidden">
      {/* Subtle background luxury ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#0f4a9b]/10 via-[#c9a24c]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-6 sm:mb-8">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-[11px] sm:text-xs font-bold mb-2.5 uppercase tracking-widest"
          >
            <Sparkles className="w-3 h-3 text-[#c9a24c]" />
            Academic Planning
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-2">
            How We Plan the IGCSE Year{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] via-[#0f4a9b] to-[#0a3a79]">
              in Abu Dhabi
            </span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            A 4-phase structured plan built around the Abu Dhabi school calendar and Cambridge and Edexcel exam timelines.
          </p>
        </div>

        {/* ── 3D ARTIST PAINT BOARD (MONTHS SELECTOR) ── */}
        <ArtistPaintBoard
          activeIndex={activeIndex}
          onSelectPhase={(idx) => {
            setActiveIndex(idx);
            setIsPlaying(false);
          }}
          isPlaying={isPlaying}
          togglePlay={() => setIsPlaying(p => !p)}
        />

        {/* ── MOBILE VIEW: ONLY THE ACTIVE CARD APPEARS (COMPACT & SWIPEABLE) ── */}
        <div className="block sm:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase.phase}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl p-4 sm:p-5 bg-white shadow-[0_14px_32px_rgba(10,31,60,0.12),0_0_0_2px_#c9a24c] overflow-visible"
              style={{
                boxShadow: `0 16px 36px rgba(10,31,60,0.14), 0 0 0 2px #c9a24c, 0 0 20px ${activePhase.goldGlow}`,
              }}
            >
              {/* Dynamic Paint Wash Overlay */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute inset-0 origin-left pointer-events-none rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${activePhase.paintColor}14 0%, rgba(201,162,76,0.08) 100%)`,
                }}
              />

              {/* Top Animated SVG Brush Stroke */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                className="absolute top-0 left-0 right-0 w-full h-1.5 pointer-events-none rounded-t-2xl"
              >
                <line
                  x1="0"
                  y1="2"
                  x2="400"
                  y2="2"
                  stroke={activePhase.paintColor}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>

              {/* Visible Floating 3D Paintbrush on Mobile */}
              <div className="absolute -top-5 -right-2 z-40">
                <Animated3DPaintbrush activeIndex={activeIndex} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="text-xs font-extrabold tracking-widest uppercase"
                    style={{ color: activePhase.paintColor }}
                  >
                    {activePhase.phase}
                  </span>

                  <span className="w-2 h-2 rounded-full bg-[#c9a24c] animate-ping" />
                </div>

                <div className="text-[11.5px] font-bold text-[#0f4a9b]/70 mb-1.5">
                  {activePhase.period}
                </div>

                <h3
                  className="text-[16px] font-extrabold text-[#0a1f3d] leading-snug mb-1.5"
                  style={{ fontFamily: 'var(--font-serif,"Fraunces",Georgia,serif)' }}
                >
                  {activePhase.title}
                </h3>

                <p className="text-[12.5px] text-[#3a4f6e] leading-relaxed mb-3">
                  {activePhase.desc}
                </p>
              </div>

              {/* Card Footer: Milestone */}
              <div
                className="relative z-10 pt-2.5 flex items-center justify-between text-[11.5px] font-bold border-t border-slate-100"
                style={{ color: '#0a1f3d' }}
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#c9a24c]" />
                  <span>{activePhase.milestone}</span>
                </div>
                <span className="text-[10.5px] font-semibold text-slate-400">
                  {activeIndex + 1} / {PHASES.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── DESKTOP & TABLET VIEW: 4-PHASE CARDS GRID ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 relative">
          {PHASES.map((p, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={p.phase}
                onClick={() => {
                  setActiveIndex(i);
                  setIsPlaying(false);
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className={`relative rounded-2xl p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-500 overflow-hidden ${
                  isActive
                    ? 'bg-white shadow-[0_16px_36px_rgba(10,31,60,0.12),0_0_0_2px_#c9a24c] -translate-y-1'
                    : 'bg-white/85 hover:bg-white border border-[#0f4a9b]/10 shadow-[0_4px_16px_rgba(10,31,60,0.04)] opacity-90'
                }`}
                style={{
                  boxShadow: isActive
                    ? `0 18px 40px rgba(10,31,60,0.14), 0 0 0 2px #c9a24c, 0 0 24px ${p.goldGlow}`
                    : undefined,
                }}
              >
                {/* Dynamic Paint Wash Overlay when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="paintWash"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="absolute inset-0 origin-left pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${p.paintColor}12 0%, rgba(201,162,76,0.08) 100%)`,
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Top Animated SVG Brush Stroke when active */}
                {isActive && (
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="absolute top-0 left-0 right-0 w-full h-1.5 pointer-events-none"
                  >
                    <line
                      x1="0"
                      y1="2"
                      x2="300"
                      y2="2"
                      stroke={p.paintColor}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                )}

                {/* Floating 3D Brush Positioned above the active card */}
                {isActive && (
                  <div className="absolute -top-6 -right-3 z-40 block">
                    <Animated3DPaintbrush activeIndex={activeIndex} />
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-[10.5px] sm:text-[11px] font-extrabold tracking-widest uppercase"
                      style={{ color: isActive ? p.paintColor : '#0f4a9b' }}
                    >
                      {p.phase}
                    </span>

                    {/* Active indicator dot */}
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#c9a24c] animate-ping" />
                    )}
                  </div>

                  <div className="text-[11px] sm:text-xs font-bold text-[#0f4a9b]/60 mb-2">
                    {p.period}
                  </div>

                  <h3
                    className="text-[15px] sm:text-[16px] font-extrabold text-[#0a1f3d] leading-snug mb-1.5 sm:mb-2"
                    style={{ fontFamily: 'var(--font-serif,"Fraunces",Georgia,serif)' }}
                  >
                    {p.title}
                  </h3>

                  <p className="text-[12.5px] sm:text-[13px] text-[#3a4f6e] leading-relaxed mb-3 sm:mb-4">
                    {p.desc}
                  </p>
                </div>

                {/* Card Footer: Milestone */}
                <div
                  className="relative z-10 mt-auto pt-2.5 sm:pt-3 flex items-center gap-1.5 text-[11.5px] sm:text-[12px] font-bold border-t border-slate-100"
                  style={{ color: isActive ? '#0a1f3d' : '#0f4a9b' }}
                >
                  <CheckCircle2
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                    style={{ color: isActive ? '#c9a24c' : '#0f4a9b' }}
                  />
                  <span>{p.milestone}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
