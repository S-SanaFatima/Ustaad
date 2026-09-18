import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Book, Check, X, ChevronRight } from 'lucide-react';

export function MathsBookComparisonSection() {
  const [isOpen, setIsOpen] = useState(false);

  const beforePoints = [
    'Mixed-subject tutor, not Maths specialist',
    'Textbook-order revision, not board-focused',
    'Marked for right answer, not mark scheme method',
    'Gaps only surface when the mock lands',
  ];

  const ustaadPoints = [
    'Dedicated Maths specialist for your exact board',
    'Sessions target topics dragging grades down',
    'Every step checked against official mark scheme',
    'Gaps caught and closed weeks before the mock',
  ];

  const floatingMathSymbols = [
    { label: '∫ f(x) dx', x: '12%', y: '16%', duration: 4.2, delay: 0 },
    { label: 'a² + b² = c²', x: '68%', y: '14%', duration: 5.1, delay: 0.8 },
    { label: '∑(x - μ)²', x: '78%', y: '68%', duration: 4.8, delay: 1.2 },
    { label: 'dy/dx', x: '14%', y: '74%', duration: 4.5, delay: 0.4 },
    { label: 'πr²', x: '82%', y: '40%', duration: 3.9, delay: 1.5 },
    { label: 'lim(x→∞)', x: '8%', y: '45%', duration: 5.4, delay: 0.2 },
    { label: 'x = (-b ± √Δ)/2a', x: '42%', y: '84%', duration: 5.8, delay: 1.0 },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white border-b border-slate-100 relative overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1 px-3 py-0.5 bg-blue-50 border border-blue-200/80 text-[#0f4a9b] rounded-full text-[11px] font-bold mb-2 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-[#0f4a9b]" />
            <span>METHODOLOGY COMPARISON</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0a1f3d] tracking-tight mb-1.5">
            The Usual Grind, Rethought for Maths
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Most students haven&apos;t had a Maths problem explained badly: they&apos;ve had it explained once, generally, and never checked against their own method.
          </p>
        </div>

        {/* ── 3D MATHS BOOK VIEW ── */}
        <div className="flex justify-center items-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* ── 1. CLOSED BOOK VIEW (AUTHENTIC PROPORTIONS ON DESKTOP, COMPACT ON MOBILE) ── */
              <motion.div
                key="closed-book"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(true)}
                className="w-full max-w-sm sm:max-w-md md:max-w-lg cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label="Open Maths Book"
                onKeyDown={e => e.key === 'Enter' && setIsOpen(true)}
              >
                <div className="relative p-1 transition-transform duration-300 group-hover:-translate-y-1.5">
                  {/* Realistic 3D Drop Shadow */}
                  <div className="absolute inset-x-6 bottom-0 h-8 sm:h-12 bg-slate-900/25 blur-xl rounded-full group-hover:bg-slate-900/35 transition-all" />

                  {/* Hardcover Book Jacket */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-[#0a1f3d] via-[#07172d] to-[#040c18] border-2 border-[#C7A24A]/60 shadow-[0_20px_50px_rgba(10,31,61,0.3)] p-5 sm:p-7 md:p-9 text-white overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[310px] md:min-h-[350px]">
                    {/* Spine Left Edge with Golden Ribs */}
                    <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-r from-black/60 via-black/25 to-transparent border-r border-[#C7A24A]/30 flex flex-col justify-around py-6 items-center">
                      <div className="w-1.5 h-4 sm:h-6 rounded-full bg-[#C7A24A]/40" />
                      <div className="w-1.5 h-4 sm:h-6 rounded-full bg-[#C7A24A]/40" />
                      <div className="w-1.5 h-4 sm:h-6 rounded-full bg-[#C7A24A]/40" />
                    </div>

                    {/* Gold Silk Bookmark Ribbon */}
                    <div className="absolute right-8 sm:right-10 top-0 w-3 sm:w-4 h-12 sm:h-16 bg-gradient-to-b from-[#C7A24A] to-[#a6802e] shadow-md rounded-b-xs">
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#040c18] [clip-path:polygon(0_100%,50_0,100%_100%)]" />
                    </div>

                    {/* ── FLOATING ANIMATED MATHEMATICAL FORMULAS ON BOOK COVER ── */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                      {floatingMathSymbols.map((item, idx) => (
                        <motion.span
                          key={idx}
                          className="absolute text-[#f0c96a] font-mono font-bold text-[10px] sm:text-xs tracking-wider"
                          style={{ left: item.x, top: item.y }}
                          animate={{
                            y: [0, -7, 0],
                            opacity: [0.2, 0.45, 0.2],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: item.duration,
                            delay: item.delay,
                            ease: 'easeInOut',
                          }}
                        >
                          {item.label}
                        </motion.span>
                      ))}

                      {/* Subtle Geometric Wireframe in Background */}
                      <svg className="absolute -right-6 -bottom-6 w-40 h-40 opacity-15 text-[#C7A24A]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                        <polygon points="10,90 90,90 90,30" strokeWidth="1.5" />
                        <circle cx="50" cy="50" r="35" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="10" y1="90" x2="90" y2="30" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* Gold Filigree Corner Ornaments */}
                    <div className="absolute top-3 left-8 text-[#C7A24A]/60 text-xs font-serif">✦</div>
                    <div className="absolute top-3 right-4 text-[#C7A24A]/60 text-xs font-serif">✦</div>
                    <div className="absolute bottom-3 left-8 text-[#C7A24A]/60 text-xs font-serif">✦</div>
                    <div className="absolute bottom-3 right-4 text-[#C7A24A]/60 text-xs font-serif">✦</div>

                    {/* Title & Emblem Plate */}
                    <div className="relative z-10 pl-4 sm:pl-6 text-center flex flex-col items-center my-auto">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C7A24A]/15 border border-[#C7A24A]/50 flex items-center justify-center text-[#f0c96a] mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
                        <Book className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-[#C7A24A] font-bold uppercase mb-1.5">
                        MATHEMATICS METHODOLOGY
                      </span>

                      <h3 className="text-base sm:text-xl md:text-2xl font-black text-white tracking-tight leading-snug mb-2">
                        The Usual Grind, Rethought
                      </h3>

                      <div className="w-20 sm:w-28 h-0.5 bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent my-1" />

                      <p className="text-blue-200/80 text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-xs mt-2">
                        Before vs. With Ustaad: A side-by-side study in mathematical outcomes.
                      </p>
                    </div>

                    {/* Click To Open Button */}
                    <div className="relative z-10 pl-4 sm:pl-6 mt-4 flex justify-center">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:py-2 rounded-full bg-[#C7A24A] hover:bg-[#d6b052] text-[#0a1f3d] font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(199,162,74,0.4)] transition-all group-hover:scale-105">
                        <BookOpen className="w-4 h-4" />
                        <span>Tap to Open Book</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ── 2. OPEN BOOK SPREAD (PROPORTIONATE ON DESKTOP, COMPACT ON MOBILE) ── */
              <motion.div
                key="open-book"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl"
              >
                {/* Book Exterior Shell */}
                <div className="relative rounded-2xl bg-[#08172c] p-2 sm:p-3 md:p-3.5 shadow-2xl border border-[#C7A24A]/40">
                  {/* Top Bar: Title + Close Toggle */}
                  <div className="flex items-center justify-between px-2.5 py-1 text-white/80 text-[11px] sm:text-xs font-mono mb-1.5">
                    <span className="flex items-center gap-1.5 text-[#f0c96a] font-bold truncate">
                      <BookOpen className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">Maths Methodology Comparison</span>
                    </span>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-2.5 py-0.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold transition-colors cursor-pointer flex items-center gap-1 border border-white/20"
                      aria-label="Close book"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Close Book</span>
                    </button>
                  </div>

                  {/* 2-PAGE SPREAD (Always side-by-side on mobile & desktop) */}
                  <div className="grid grid-cols-2 rounded-xl overflow-hidden bg-white shadow-inner relative">
                    {/* Spine Shadow Seam */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-6 -translate-x-1/2 bg-gradient-to-r from-black/15 via-black/5 to-black/15 pointer-events-none z-20" />
                    
                    {/* Center Silk Ribbon */}
                    <div className="absolute left-1/2 top-0 w-2.5 h-16 sm:h-20 -translate-x-1/2 bg-gradient-to-b from-[#C7A24A] to-[#a6802e] shadow-sm z-30 rounded-b-xs pointer-events-none" />

                    {/* ── LEFT PAGE: BEFORE ── */}
                    <div className="p-3 sm:p-5 md:p-6 lg:p-7 bg-gradient-to-br from-red-50/20 via-white to-slate-50/30 border-r border-slate-200/80 flex flex-col justify-between">
                      <div>
                        {/* Page Header */}
                        <div className="flex items-center justify-between pb-1 mb-2.5 border-b border-slate-100 text-[9.5px] sm:text-[11px] font-mono font-bold text-slate-400">
                          <span>PAGE 01</span>
                          <span className="text-red-500 font-bold">TRADITIONAL</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xs sm:text-base md:text-lg font-black text-slate-800 flex items-center gap-1.5 mb-2.5 sm:mb-3">
                          <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                          Before
                        </h3>

                        {/* Minimal 4 Points */}
                        <div className="space-y-2 sm:space-y-2.5 md:space-y-3 text-[10px] sm:text-xs md:text-sm text-slate-600 leading-snug">
                          {beforePoints.map((row, i) => (
                            <div key={i} className="flex items-start gap-1.5 sm:gap-2">
                              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-[9px] sm:text-[10px] font-bold">
                                ✕
                              </span>
                              <span>{row}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Left Page Number */}
                      <div className="mt-4 pt-1.5 border-t border-slate-100 text-[9.5px] sm:text-[11px] font-mono text-slate-400 text-center">
                        - 42 -
                      </div>
                    </div>

                    {/* ── RIGHT PAGE: WITH USTAAD ── */}
                    <div className="p-3 sm:p-5 md:p-6 lg:p-7 bg-gradient-to-br from-amber-50/20 via-white to-blue-50/20 flex flex-col justify-between">
                      <div>
                        {/* Page Header */}
                        <div className="flex items-center justify-between pb-1 mb-2.5 border-b border-slate-100 text-[9.5px] sm:text-[11px] font-mono font-bold text-slate-400">
                          <span className="text-emerald-600 font-bold">USTAAD</span>
                          <span>PAGE 02</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xs sm:text-base md:text-lg font-black text-[#0a1f3d] flex items-center gap-1.5 mb-2.5 sm:mb-3">
                          <span className="w-2 h-2 rounded-full bg-[#f0c96a] shrink-0" />
                          With Ustaad
                        </h3>

                        {/* Minimal 4 Points */}
                        <div className="space-y-2 sm:space-y-2.5 md:space-y-3 text-[10px] sm:text-xs md:text-sm text-slate-800 leading-snug font-medium">
                          {ustaadPoints.map((row, i) => (
                            <div key={i} className="flex items-start gap-1.5 sm:gap-2">
                              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[9px] sm:text-[10px] font-bold">
                                ✓
                              </span>
                              <span>{row}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Page Number */}
                      <div className="mt-4 pt-1.5 border-t border-slate-100 text-[9.5px] sm:text-[11px] font-mono text-slate-400 text-center">
                        - 43 -
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
