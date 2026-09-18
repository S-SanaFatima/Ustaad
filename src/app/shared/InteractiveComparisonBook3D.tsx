import React, { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { X, CheckCircle2, BookOpen, Sparkles, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';
import { GradientHeadingText } from './GradientHeadingText';

export interface InteractiveComparisonBook3DProps {
  badge?: string;
  title?: string;
}

export function InteractiveComparisonBook3D({
  badge = 'The Ustaad Difference',
  title = 'The usual grind, rethought for GCSE',
}: InteractiveComparisonBook3DProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobilePage, setMobilePage] = useState<0 | 1>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle 3D mouse parallax when closed
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 180, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isOpen || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-200/80">
      {/* Ambient Top & Center Lighting Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-gradient-to-b from-[#0f4a9b]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#C7A24A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center mb-4 sm:mb-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-0.5 bg-white border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-[10.5px] font-bold mb-1.5 shadow-xs"
          >
            <span>{badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0a1f3d] mb-1 tracking-tight"
          >
            <GradientHeadingText text={title} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-xs sm:text-[13px] italic"
          >
            {isOpen ? 'Tap anywhere or click "Close Book" to fold back shut.' : 'Tap the volume below to open the comparison ledger.'}
          </motion.p>
        </div>

        {/* 3D BOOK STAGE */}
        <div className="relative flex flex-col items-center justify-center min-h-[320px] sm:min-h-[370px]">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* ── STATE 1: CLOSED 3D HARDCOVER BOOK (Sleeker, Compact Dimensions) ── */
              <motion.div
                key="closed-book"
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(true)}
                style={{ perspective: 1400 }}
                className="relative cursor-pointer group select-none py-2"
              >
                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative w-[230px] sm:w-[270px] md:w-[295px] h-[310px] sm:h-[355px] md:h-[385px] transition-transform duration-300 group-hover:scale-[1.02]"
                >
                  {/* Outer Book Drop Shadow & Ground Contact */}
                  <div className="absolute inset-x-3 -bottom-5 h-8 bg-slate-900/25 blur-xl rounded-full transform group-hover:scale-105 transition-transform duration-500 pointer-events-none" />

                  {/* Layered Book Pages (Stacked Paper Effect on Right Edge) */}
                  <div 
                    className="absolute top-2 bottom-2 right-[-12px] sm:right-[-15px] w-5 sm:w-6 bg-gradient-to-r from-amber-100 via-amber-50 to-[#fdfbf7] rounded-r-md border-r border-y border-amber-200/80 shadow-md flex flex-col justify-evenly py-3"
                    style={{ transform: 'translateZ(-10px)' }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="h-px bg-amber-200/50 w-full" />
                    ))}
                  </div>

                  {/* Back Hardcover Spine Rim */}
                  <div
                    className="absolute inset-0 bg-[#061224] rounded-2xl"
                    style={{ transform: 'translateZ(-16px)' }}
                  />

                  {/* 3D FRONT HARDCOVER (Royal Sapphire Navy with Gilded Gold Foil) */}
                  <div
                    className="relative w-full h-full rounded-2xl p-4 sm:p-5.5 flex flex-col justify-between overflow-hidden border border-[#C7A24A]/50 shadow-[0_12px_32px_rgba(10,31,61,0.3)] group-hover:shadow-[0_20px_45px_rgba(15,74,155,0.38)] transition-shadow duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #07162c 0%, #0a1f3d 40%, #0e2a52 75%, #081a34 100%)',
                      transform: 'translateZ(8px)',
                    }}
                  >
                    {/* Spine Left Edge Crease Highlight */}
                    <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-black/50 via-white/10 to-transparent pointer-events-none border-r border-white/5" />

                    {/* Book Cover Gilded Border Inset */}
                    <div className="absolute inset-2.5 sm:inset-3 rounded-xl border border-[#C7A24A]/40 pointer-events-none" />
                    <div className="absolute inset-3.5 sm:inset-4 rounded-lg border border-[#C7A24A]/20 pointer-events-none" />

                    {/* 4 Brass Corner Protectors */}
                    <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C7A24A] rounded-tl pointer-events-none" />
                    <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C7A24A] rounded-tr pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C7A24A] rounded-bl pointer-events-none" />
                    <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C7A24A] rounded-br pointer-events-none" />

                    {/* Top Cover Header */}
                    <div className="relative z-10 text-center pt-1">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#C7A24A]/15 border border-[#C7A24A]/40 text-[#f0c96a] text-[8.5px] sm:text-[9px] font-black uppercase tracking-widest shadow-2xs">
                        Official Academic Tome
                      </div>
                      <h4 className="text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#C7A24A] mt-1">
                        Ustaad UAE
                      </h4>
                    </div>

                    {/* Center Official 3D Crest & Title */}
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto py-1">
                      {/* 3D Genuine Brand Emblem */}
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-2 filter drop-shadow-[0_6px_12px_rgba(199,162,74,0.3)] group-hover:scale-105 transition-transform duration-300">
                        <img
                          src="/ustaad-emblem-3d.png"
                          alt="Ustaad Emblem"
                          className="w-full h-full object-contain pointer-events-none"
                        />
                      </div>

                      <h3 className="text-base sm:text-lg md:text-[19px] font-black text-white text-center leading-tight tracking-tight mb-0.5">
                        The GCSE Strategy
                      </h3>
                      <p className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#f0c96a] text-center tracking-wide">
                        Before vs. With Ustaad
                      </p>

                      <div className="w-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent my-1.5" />
                    </div>

                    {/* Hanging Silk Bookmark Ribbon */}
                    <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 w-5 h-6 bg-gradient-to-b from-[#C7A24A] to-[#854d0e] rounded-b shadow-md flex items-end justify-center pb-0.5">
                      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[6px] border-b-[#07162c]" />
                    </div>

                    {/* Bottom Prompt Bar */}
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] sm:text-[11px] font-bold tracking-wide flex items-center gap-1.5 backdrop-blur-xs group-hover:border-[#C7A24A] group-hover:text-[#f0c96a] transition-all">
                        <BookOpen className="w-3 h-3 text-[#C7A24A] animate-bounce" />
                        <span>Tap Book to Open</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              /* ── STATE 2: OPEN 3D TWO-PAGE SPREAD ── */
              <motion.div
                key="open-book"
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-4xl"
              >
                {/* Top Action Bar (Close Book Toggle) */}
                <div className="flex items-center justify-between mb-3 px-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0f4a9b]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Folio Spread Opened</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-slate-50 text-[#0a1f3d] border border-slate-200 rounded-full text-xs font-bold shadow-xs hover:border-[#0f4a9b]/40 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3 text-[#0f4a9b]" />
                    <span>Close Book</span>
                  </button>
                </div>

                {/* Mobile Two-Page Ledger Tab Switcher */}
                <div className="lg:hidden flex items-center justify-between p-1 bg-slate-200/70 rounded-2xl mb-3 border border-slate-300/60 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setMobilePage(0)}
                    className={`flex-1 py-2 px-2.5 rounded-xl text-[11.5px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      mobilePage === 0
                        ? 'bg-white text-red-600 shadow-xs border border-red-100'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <X className="w-3.5 h-3.5 text-red-500" strokeWidth={2.5} />
                    <span>Page I · Before</span>
                  </button>

                  <div className="w-6 h-6 rounded-full bg-white border border-[#C7A24A]/60 flex items-center justify-center mx-1 shrink-0 shadow-2xs">
                    <span className="text-[9px] font-black text-[#A8892A]">VS</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setMobilePage(1)}
                    className={`flex-1 py-2 px-2.5 rounded-xl text-[11.5px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      mobilePage === 1
                        ? 'bg-gradient-to-r from-[#0a1f3d] to-[#0f4a9b] text-white shadow-xs border border-blue-400/30'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#f0c96a]" strokeWidth={2.5} />
                    <span>Page II · With Ustaad</span>
                  </button>
                </div>

                {/* THE OPEN BOOK TWO-PAGE SPREAD */}
                <div className="relative rounded-3xl overflow-hidden border border-[#0f4a9b]/15 shadow-[0_20px_60px_rgba(15,74,155,0.18)] bg-white grid lg:grid-cols-2 gap-0">
                  
                  {/* ── LEFT PAGE: BEFORE (The Usual Grind) ── */}
                  <div className={`relative p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-[#ffffff] via-[#fcfdff] to-[#f8fafd] border-b lg:border-b-0 lg:border-r border-slate-200/80 flex flex-col justify-between ${
                    mobilePage === 0 ? 'flex' : 'hidden lg:flex'
                  }`}>
                    {/* Spine Shadow on Right Edge */}
                    <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-slate-900/8 to-transparent pointer-events-none" />

                    <div>
                      {/* Left Page Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-red-50 border border-red-200/80 flex items-center justify-center shrink-0">
                            <X className="w-3.5 h-3.5 text-red-500" strokeWidth={2.5} />
                          </div>
                          <div>
                            <p className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-red-500 mb-0.5">Page I · Before</p>
                            <h3 className="text-[15px] sm:text-base font-extrabold text-[#0a1f3d] leading-none">The usual grind</h3>
                          </div>
                        </div>
                        <span className="text-[9.5px] font-bold text-slate-400 uppercase tracking-widest">Pain Points</span>
                      </div>

                      {/* Left Page Pain Points List */}
                      <ul className="space-y-2">
                        {[
                          'A packed timetable with no clear priority.',
                          'A general tutor, strong here, shaky there.',
                          'Endless videos that never answer the real question.',
                          'The slip only surfaces when the mock lands.',
                        ].map((item, i) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 rounded-xl bg-white border border-slate-100 p-2 sm:p-2.5 shadow-2xs hover:border-red-200 transition-colors"
                          >
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-50 text-[9.5px] font-bold text-red-500 border border-red-200">
                              {i + 1}
                            </span>
                            <span className="text-xs sm:text-[12.5px] text-[#475569] leading-snug font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mobile Turn to Page II Button */}
                    <div className="lg:hidden pt-2.5 mt-2.5 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setMobilePage(1)}
                        className="w-full py-2 px-3 rounded-xl bg-[#0f4a9b]/8 hover:bg-[#0f4a9b]/15 text-[#0f4a9b] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Turn to Page II: With Ustaad</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Page Footer Foliation */}
                    <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>FOLIO · 01</span>
                      <span>Fragmented Method</span>
                    </div>
                  </div>

                  {/* ── CENTER VS BADGE ── */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-[#C7A24A] shadow-[0_4px_16px_rgba(15,74,155,0.18)] flex items-center justify-center">
                      <span className="text-[9px] font-black tracking-wider text-[#A8892A]">VS</span>
                    </div>
                  </div>

                  {/* ── RIGHT PAGE: AFTER (With Ustaad) ── */}
                  <div
                    className={`relative p-4 sm:p-5 lg:p-6 text-white flex flex-col justify-between overflow-hidden ${
                      mobilePage === 1 ? 'flex' : 'hidden lg:flex'
                    }`}
                    style={{ background: 'linear-gradient(145deg, #07162c 0%, #0a1f3d 45%, #0f4a9b 100%)' }}
                  >
                    {/* Spine Shadow on Left Edge */}
                    <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />

                    <div>
                      {/* Right Page Header */}
                      <div className="flex items-center justify-between mb-3 relative z-10">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#C7A24A]/20 border border-[#C7A24A]/40 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#f0c96a]" strokeWidth={2.5} />
                          </div>
                          <div>
                            <p className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-blue-200/70 mb-0.5">Page II · After</p>
                            <h3 className="text-[15px] sm:text-base font-extrabold text-[#f0c96a] leading-none">With Ustaad</h3>
                          </div>
                        </div>
                        <span className="text-[9.5px] font-bold text-[#C7A24A] uppercase tracking-widest">The Fix</span>
                      </div>

                      {/* Right Page Solutions List */}
                      <ul className="space-y-2 relative z-10">
                        {[
                          'We spend the hour on the subjects dragging the grade down.',
                          'A separate specialist for each subject your child takes.',
                          "A real tutor answering your child's exact question, live.",
                          'A specialist steadies the wobble weeks before the mock.',
                        ].map((item, i) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 rounded-xl bg-[#0f2a52]/80 border border-white/12 p-2 sm:p-2.5 shadow-2xs hover:border-[#C7A24A]/50 transition-colors"
                          >
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C7A24A]/20 text-[9.5px] font-bold text-[#f0c96a] border border-[#C7A24A]/40">
                              {i + 1}
                            </span>
                            <span className="text-xs sm:text-[12.5px] text-blue-50/95 leading-snug font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mobile Turn back to Page I Button */}
                    <div className="lg:hidden pt-2.5 mt-2.5 border-t border-white/10 relative z-10">
                      <button
                        type="button"
                        onClick={() => setMobilePage(0)}
                        className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-blue-100 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Turn back to Page I: Before</span>
                      </button>
                    </div>

                    {/* Page Footer Foliation */}
                    <div className="pt-2.5 mt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-blue-200/60 font-mono relative z-10">
                      <span>FOLIO · 02</span>
                      <span className="text-[#f0c96a]">1-to-1 Mastery</span>
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
