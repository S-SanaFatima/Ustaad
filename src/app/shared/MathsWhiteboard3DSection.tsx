import React, { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  Sparkles,
  PenTool,
  Calendar,
  FileText,
  UserCheck,
  GraduationCap,
  Target,
  Clock,
  Video,
  Play,
  RotateCcw,
  Layers,
  ChevronRight,
  Calculator
} from 'lucide-react';

export function MathsWhiteboard3DSection() {
  const [activeReason, setActiveReason] = useState<number>(0);
  const rigRef = useRef<HTMLDivElement>(null);

  // 3D Parallax physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 160, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!rigRef.current) return;
    const rect = rigRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const reasons = [
    {
      id: 0,
      icon: GraduationCap,
      title: 'Maths specialists only',
      desc: 'Interviewed for how they teach Maths specifically, and reference-checked.',
      badge: 'Top 5% Tutors',
      annotation: 'Every proof explained from first principles, not rote memorization.',
    },
    {
      id: 1,
      icon: Target,
      title: 'Tutors who know Dubai schools',
      desc: "They teach to your child's exact school scheme and exam board.",
      badge: 'AQA · Edexcel · CIE',
      annotation: 'Aligned with Dubai College, JESS, DESC and Repton assessment schedules.',
    },
    {
      id: 2,
      icon: UserCheck,
      title: 'The same tutor every week',
      desc: 'One consistent face, never a rotating pool.',
      badge: '1-to-1 Dedication',
      annotation: 'Building continuity and academic rapport that lifts mock scores.',
    },
    {
      id: 3,
      icon: Sparkles,
      title: 'Explained until it clicks',
      desc: 'Hard topics broken down until the method finally makes sense.',
      badge: 'Deep Mastery',
      annotation: 'Multi-step algebra, calculus and mechanics made completely intuitive.',
    },
    {
      id: 4,
      icon: FileText,
      title: 'Parents kept in the loop',
      desc: 'A short, honest progress note every fortnight.',
      badge: 'Fortnightly Report',
      annotation: 'Transparent tracking of syllabus pacing and mock question scores.',
    },
    {
      id: 5,
      icon: Calendar,
      title: 'Built around your week',
      desc: 'Evening, weekend and Ramadan slots, moved when you travel.',
      badge: 'Dubai Friendly',
      annotation: 'Flexible scheduling that fits Dubai traffic and family holidays.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-200/80 select-none">
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-br from-blue-400/10 via-[#C7A24A]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-[#0f4a9b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-xs font-bold mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#0f4a9b]" />
            <span>WHY DUBAI FAMILIES CHOOSE USTAAD</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] tracking-tight mb-3">
            Specialist Maths Tutors, Carefully Vetted
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Live 1-to-1 whiteboard sessions working through real past papers step by step, recorded so your child can rewatch anytime.
          </p>
        </div>

        {/* ── 3D SHOWCASE GRID (Left: 3D Live Digital Whiteboard Rig | Right: Interactive Reason Cards) ── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT: 3D DIGITAL WHITEBOARD & LIVE SESSION RIG */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div
              ref={rigRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[560px] mx-auto py-4"
              style={{ perspective: 1200 }}
            >
              {/* Radial glow underneath device */}
              <div className="absolute inset-8 bg-gradient-to-tr from-[#0f4a9b]/25 via-sky-400/20 to-[#C7A24A]/25 rounded-3xl blur-2xl pointer-events-none" />

              {/* 3D Tilted Device Chassis */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative rounded-3xl bg-[#0a1f3d] p-3 sm:p-4 shadow-[0_25px_60px_rgba(10,31,61,0.35)] border border-slate-700/80 overflow-visible transition-shadow duration-300"
              >
                {/* Metallic Gold Top Bezel Indicator */}
                <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent opacity-80" />

                {/* Hardware Header Bar */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-700/60 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-400">
                      LIVE · 1-TO-1 SESSION
                    </span>
                    <span className="text-slate-500 text-xs hidden sm:inline">|</span>
                    <span className="text-[11px] font-semibold text-slate-300 hidden sm:inline">
                      Dubai College Past Paper Working
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C7A24A]/20 text-[#f0d080] border border-[#C7A24A]/40">
                      <Play className="w-2.5 h-2.5 fill-current" />
                      Recorded to Rewatch
                    </span>
                  </div>
                </div>

                {/* ── THE WHITEBOARD SCREEN (Interactive Math Canvas) ── */}
                <div
                  className="relative rounded-2xl bg-[#ffffff] p-4 sm:p-5 text-[#0a1f3d] shadow-inner overflow-hidden"
                  style={{
                    backgroundImage: 'radial-gradient(#cbd5e1 0.75px, transparent 0.75px)',
                    backgroundSize: '16px 16px',
                  }}
                >
                  {/* Subtle Screen Glare Overlay */}
                  <div className="absolute top-0 right-0 w-64 h-32 bg-gradient-to-bl from-white/60 via-transparent to-transparent pointer-events-none" />

                  {/* Past-Paper Banner */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#0f4a9b] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">
                        Edexcel 1MA1 · Paper 1 (Non-Calculator)
                      </span>
                      <h4 className="text-xs sm:text-[13px] font-extrabold text-[#0a1f3d] mt-1">
                        Question 18: Algebraic Fractions &amp; Quadratic Roots
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-black text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
                        [5 Marks]
                      </span>
                    </div>
                  </div>

                  {/* Live Step-by-Step Mathematical Proof */}
                  <div className="space-y-3 font-mono text-xs sm:text-[13px] text-slate-800 leading-relaxed">
                    {/* Step 1 */}
                    <div className="flex items-start justify-between bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block font-sans uppercase">
                          Step 1: Common Denominator
                        </span>
                        <div className="mt-0.5">
                          <span className="font-bold text-[#0a1f3d]">3(x - 2) + 2(x + 1)</span> = <span className="text-[#0f4a9b] font-bold">(x + 1)(x - 2)</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                        M1
                      </span>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start justify-between bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block font-sans uppercase">
                          Step 2: Expand &amp; Collect Like Terms
                        </span>
                        <div className="mt-0.5">
                          3x - 6 + 2x + 2 = x² - x - 2 &rarr; <span className="text-[#0a1f3d] font-bold">5x - 4 = x² - x - 2</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                        M1
                      </span>
                    </div>

                    {/* Step 3 - Highlighted Live Working */}
                    <motion.div
                      animate={{
                        borderColor: ['#38bdf8', '#C7A24A', '#38bdf8'],
                      }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                      className="flex items-start justify-between bg-blue-50/70 p-2.5 rounded-xl border-2 shadow-xs"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-[#0f4a9b] block font-sans uppercase flex items-center gap-1">
                          <PenTool className="w-3 h-3 text-[#C7A24A]" />
                          Step 3: Quadratic Form &amp; Exact Roots
                        </span>
                        <div className="mt-0.5">
                          x² - 6x + 2 = 0 &rarr; <span className="font-black text-[#0f4a9b] text-sm">x = 3 &plusmn; &radic;7</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-white bg-emerald-600 px-2 py-0.5 rounded-md shadow-xs">
                        A1 (Full Marks)
                      </span>
                    </motion.div>
                  </div>

                  {/* Tutor Annotation Bar responding to active card */}
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-[9px]">
                        TK
                      </div>
                      <div className="text-slate-600 font-medium">
                        <span className="font-bold text-[#0a1f3d]">Tutor Tabraiz K: </span>
                        <span className="italic text-slate-700">
                          {reasons[activeReason].annotation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 3D FLOATING ACCENTS (Layered in 3D Space via translateZ) ── */}
                {/* Floating Stylus Pen */}
                <motion.div
                  style={{ transform: 'translateZ(45px)' }}
                  animate={{
                    x: [0, 8, 0],
                    y: [0, -6, 0],
                    rotate: [25, 20, 25],
                  }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#0a1f3d] to-[#0f4a9b] border-2 border-[#C7A24A] shadow-[0_12px_24px_rgba(15,74,155,0.4)] flex items-center justify-center text-[#f0c96a] pointer-events-none"
                >
                  <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />
                  <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
                </motion.div>

                {/* Floating "Full Method Marks" Badge */}
                <motion.div
                  style={{ transform: 'translateZ(35px)' }}
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-3 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-[0_10px_25px_rgba(15,74,155,0.15)] flex items-center gap-1.5 text-xs font-black text-[#0a1f3d] pointer-events-none"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Method Marks Unlocked</span>
                </motion.div>

                {/* Whiteboard Control Deck */}
                <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400 px-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-slate-300">
                      <PenTool className="w-3 h-3 text-[#38bdf8]" /> Pen
                    </span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Layers className="w-3 h-3 text-[#C7A24A]" /> Layers
                    </span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <RotateCcw className="w-3 h-3 text-slate-400" /> Undo
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Interactive Audio/Video Sync
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: THE 6 SPECIALIST REASONS TILES */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-3 sm:gap-3.5">
            {reasons.map((card, idx) => {
              const Icon = card.icon;
              const isActive = activeReason === idx;

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveReason(idx)}
                  onMouseEnter={() => setActiveReason(idx)}
                  className={`relative rounded-2xl p-4 sm:p-4.5 cursor-pointer transition-all duration-300 border text-left overflow-hidden group ${
                    isActive
                      ? 'bg-white border-[#0f4a9b] shadow-[0_10px_28px_rgba(15,74,155,0.12)] -translate-x-1 sm:-translate-x-1.5'
                      : 'bg-white/80 border-slate-200/90 shadow-xs hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {/* Left Accent Bar on Active */}
                  <div
                    className={`absolute top-0 bottom-0 left-0 w-1.5 transition-all duration-300 ${
                      isActive ? 'bg-gradient-to-b from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]' : 'bg-transparent'
                    }`}
                  />

                  <div className="flex items-start gap-3.5 pl-1">
                    {/* Icon Box */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#0f4a9b] text-white shadow-md shadow-[#0f4a9b]/25 scale-105'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-[#0f4a9b]/10 group-hover:text-[#0f4a9b]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3
                          className={`text-sm sm:text-base font-extrabold transition-colors duration-200 leading-snug ${
                            isActive ? 'text-[#0f4a9b]' : 'text-[#0a1f3d]'
                          }`}
                        >
                          {card.title}
                        </h3>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 uppercase tracking-wider transition-colors ${
                            isActive
                              ? 'bg-blue-50 text-[#0f4a9b] border border-blue-200'
                              : 'bg-slate-100 text-slate-500 border border-slate-200/80'
                          }`}
                        >
                          {card.badge}
                        </span>
                      </div>

                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 mt-1 transition-transform duration-200 ${
                        isActive ? 'text-[#0f4a9b] translate-x-0.5 opacity-100' : 'text-slate-300 opacity-60 group-hover:opacity-100'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
