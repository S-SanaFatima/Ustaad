import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  XCircle,
  CheckCircle2,
  Lightbulb,
  ChevronRight,
  BookOpen,
  ArrowRight,
  X,
  Layers,
  Check,
  MousePointerClick,
  Maximize2
} from 'lucide-react';

type StageKey = 'question' | 'mistake' | 'solution' | 'ustaad';

interface StageConfig {
  id: StageKey;
  num: string;
  label: string;
  name: string;
  subtitle: string;
}

const STAGES: StageConfig[] = [
  { id: 'question', num: '01', label: 'The Question', name: 'Exam Prompt', subtitle: 'IB DP Physics Paper 2 Theory' },
  { id: 'mistake', num: '02', label: 'Common Pitfall', name: 'Frequent Mistake', subtitle: 'Frequent Calculation Error' },
  { id: 'solution', num: '03', label: 'Full Mark Scheme', name: '5-Mark Solution', subtitle: 'Full 5-Mark Solution' },
  { id: 'ustaad', num: '04', label: 'Ustaad Method', name: 'Strategy Protocol', subtitle: 'Uncertainty Protocol' }
];

/* ── OBJECT 1: REALISTIC 3D GOLD & BLUE EXAM BOOKLET ── */
function Realistic3DBook({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer select-none flex flex-col items-center justify-between p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#0f4a9b]/40 transition-colors"
    >
      {/* 3D Realistic Book Graphic */}
      <div className="w-full h-32 sm:h-36 flex items-center justify-center relative">
        <div
          className="relative w-22 h-26 sm:w-24 sm:h-30 rounded-r-md rounded-l-xs shadow-md"
          style={{
            background: 'linear-gradient(135deg, #0f4a9b 0%, #1e5bb3 50%, #0a3a79 100%)',
            boxShadow: '0 10px 20px -4px rgba(15,74,155,0.3), 0 0 12px rgba(199,162,74,0.15)'
          }}
        >
          {/* Spine Fold / Binding Crease */}
          <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-blue-950/60 via-transparent to-white/20 rounded-l-xs border-r border-[#0a2a6e]" />
          
          {/* Pages Thickness Edge (Right) */}
          <div
            className="absolute top-1.5 bottom-1.5 -right-2.5 w-2.5 rounded-r-xs bg-[#f8fafc] border-y border-r border-slate-300 shadow-xs flex flex-col justify-around py-1"
          >
            <div className="w-full h-px bg-slate-200" />
            <div className="w-full h-px bg-slate-200" />
            <div className="w-full h-px bg-slate-200" />
          </div>

          {/* Book Cover Design */}
          <div className="p-2.5 sm:p-3 h-full flex flex-col justify-between text-left relative z-10 pl-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-black tracking-widest text-[#f0c96a] uppercase font-mono">
                IB DP
              </span>
              <BookOpen className="w-3.5 h-3.5 text-[#fde68a]" />
            </div>

            <div className="my-auto">
              <div className="text-[9.5px] font-serif font-black text-white leading-tight">
                PAPER 2
              </div>
              <div className="text-[7px] text-blue-100 font-mono tracking-wider">
                QUESTION
              </div>
            </div>

            {/* Gold Seal on Cover */}
            <div className="flex items-center justify-between pt-1 border-t border-white/25">
              <span className="text-[7.5px] font-extrabold text-[#fde68a]">5 MARKS</span>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#f0c96a] to-[#C7A24A] flex items-center justify-center text-[6px] text-[#0a1f3d] font-black shadow-xs">
                ★
              </div>
            </div>
          </div>

          {/* Satin Gold Bookmark Ribbon */}
          <div className="absolute -bottom-2.5 left-7 w-2.5 h-4 bg-gradient-to-b from-[#f0c96a] to-[#C7A24A] rounded-b-xs shadow-xs z-20" />
        </div>
      </div>

      <div className="text-center mt-3 w-full">
        <h3 className="text-xs sm:text-[14px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
          The Question
        </h3>
        <p className="text-[11px] text-slate-500 font-medium mt-0.5">Exam Prompt</p>
      </div>

      <div className="mt-2.5 flex items-center justify-center gap-1 text-[11px] font-bold text-[#0f4a9b] group-hover:text-[#0a1f3d] transition-colors">
        <span>Click to open</span>
        <Maximize2 className="w-3 h-3" />
      </div>
    </div>
  );
}

/* ── OBJECT 2: REALISTIC 3D GOLD & BLUE PITFALL DISC (CIRCLE WITH X) ── */
function Realistic3DPitfallDisc({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer select-none flex flex-col items-center justify-between p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#0f4a9b]/40 transition-colors"
    >
      {/* 3D Realistic Blue & Gold Convex Pitfall Coin/Disc */}
      <div className="w-full h-32 sm:h-36 flex items-center justify-center relative">
        <div
          className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-md"
          style={{
            background: 'radial-gradient(circle at 35% 25%, #60a5fa 0%, #2563eb 35%, #0f4a9b 75%, #08285a 100%)',
            boxShadow: '0 10px 20px -4px rgba(15,74,155,0.35), 0 0 14px rgba(240,201,106,0.25)'
          }}
        >
          {/* Gold Metallic Outer Beveled Ring */}
          <div className="absolute inset-1 rounded-full border-2 border-[#f0c96a] shadow-[0_0_6px_rgba(240,201,106,0.35)] pointer-events-none" />
          
          {/* Raised Convex Blue Core Dome */}
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border border-blue-300/60 shadow-[0_3px_8px_rgba(0,0,0,0.25)] relative overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 35% 25%, #3b82f6 0%, #1d4ed8 50%, #0f3675 100%)'
            }}
          >
            {/* Top Light Flare Reflection */}
            <div className="absolute top-1 left-2 right-2 h-4 bg-gradient-to-b from-white/60 to-transparent rounded-full pointer-events-none" />

            {/* Embossed Gold X Symbol */}
            <div className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 stroke-[#fde68a] fill-none stroke-[3.5] stroke-linecap-round stroke-linejoin-round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>

          {/* Outer Glass Specular Arc */}
          <div className="absolute top-1 left-3 right-3 h-5 bg-gradient-to-b from-white/70 to-transparent rounded-t-full pointer-events-none" />
        </div>
      </div>

      <div className="text-center mt-3 w-full">
        <h3 className="text-xs sm:text-[13.5px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
          Common Pitfall
        </h3>
        <p className="text-[11px] text-slate-500 font-medium mt-0.5">Frequent Mistake</p>
      </div>

      <div className="mt-2.5 flex items-center justify-center gap-1 text-[11px] font-bold text-[#0f4a9b] group-hover:text-[#0a1f3d] transition-colors">
        <span>Click to open</span>
        <Maximize2 className="w-3 h-3" />
      </div>
    </div>
  );
}

/* ── OBJECT 3: REALISTIC 3D GOLD & BLUE MARK SCHEME MEDAL (CIRCLE WITH TICK) ── */
function Realistic3DCheckMedal({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer select-none flex flex-col items-center justify-between p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#C7A24A]/40 transition-colors"
    >
      {/* 3D Realistic Gold Medal with Blue Center & Tick */}
      <div className="w-full h-32 sm:h-36 flex items-center justify-center relative">
        <div
          className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-md"
          style={{
            background: 'radial-gradient(circle at 35% 25%, #fffbeb 0%, #fef08a 25%, #f0c96a 55%, #C7A24A 85%, #9E7B24 100%)',
            boxShadow: '0 10px 20px -4px rgba(199,162,74,0.4), 0 0 14px rgba(15,74,155,0.15)'
          }}
        >
          {/* Blue Metallic Trim Ring */}
          <div className="absolute inset-1 rounded-full border-2 border-[#0f4a9b]/70 pointer-events-none" />

          {/* Raised Convex Cobalt Core Dome */}
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border border-amber-200/80 shadow-[0_3px_8px_rgba(0,0,0,0.25)] relative overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 35% 25%, #2563eb 0%, #0f4a9b 55%, #08285a 100%)'
            }}
          >
            {/* Top Light Flare Reflection */}
            <div className="absolute top-1 left-2 right-2 h-4 bg-gradient-to-b from-white/60 to-transparent rounded-full pointer-events-none" />

            {/* Embossed Gold Checkmark Tick */}
            <div className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 stroke-[#fde68a] fill-none stroke-[3.8] stroke-linecap-round stroke-linejoin-round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          {/* Top Specular Glare Arc */}
          <div className="absolute top-1 left-3 right-3 h-5 bg-gradient-to-b from-white/80 to-transparent rounded-t-full pointer-events-none" />
        </div>
      </div>

      <div className="text-center mt-3 w-full">
        <h3 className="text-xs sm:text-[13.5px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
          Full Mark Scheme
        </h3>
        <p className="text-[11px] text-slate-500 font-medium mt-0.5">5-Mark Solution</p>
      </div>

      <div className="mt-2.5 flex items-center justify-center gap-1 text-[11px] font-bold text-[#9E7B24] group-hover:text-[#0a1f3d] transition-colors">
        <span>Click to open</span>
        <Maximize2 className="w-3 h-3" />
      </div>
    </div>
  );
}

/* ── OBJECT 4: REALISTIC 3D GOLD & BLUE EDISON LIGHT BULB ── */
function Realistic3DLightBulb({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer select-none flex flex-col items-center justify-between p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#C7A24A]/40 transition-colors"
    >
      {/* 3D Realistic Bulb Graphic */}
      <div className="w-full h-32 sm:h-36 flex items-center justify-center relative">
        <div
          className="relative w-20 h-26 sm:w-22 sm:h-28 flex flex-col items-center justify-center"
        >
          {/* Glass Dome */}
          <div
            className="relative w-15 h-17 sm:w-17 sm:h-19 rounded-t-full rounded-b-2xl border border-amber-200/80 overflow-hidden flex items-center justify-center shadow-[0_6px_14px_rgba(15,74,155,0.12)]"
            style={{
              background: 'radial-gradient(circle at 40% 30%, rgba(255,255,255,0.95) 0%, rgba(254,243,199,0.5) 45%, rgba(199,162,74,0.25) 80%, rgba(255,255,255,0.15) 100%)'
            }}
          >
            {/* Glowing Tungsten Filament */}
            <svg viewBox="0 0 40 50" className="w-9 h-11 drop-shadow-sm">
              {/* Support Wires */}
              <line x1="16" y1="50" x2="16" y2="28" stroke="#C7A24A" strokeWidth="1.3" />
              <line x1="24" y1="50" x2="24" y2="28" stroke="#C7A24A" strokeWidth="1.3" />
              
              {/* Coiled Filament Loop */}
              <path
                d="M 16 28 Q 20 15 24 28"
                fill="none"
                stroke="#fde68a"
                strokeWidth="2.4"
                strokeLinecap="round"
                className="filter drop-shadow-[0_0_6px_#fde68a]"
              />
            </svg>

            {/* Glass Glare */}
            <div className="absolute top-2 left-2 w-3.5 h-6 bg-gradient-to-b from-white/80 to-transparent rounded-full rotate-[-20deg] pointer-events-none" />
          </div>

          {/* Blue & Gold Screw Base */}
          <div className="w-9 h-5.5 sm:w-10 sm:h-6 rounded-b-md bg-gradient-to-r from-[#0f4a9b] via-[#1e5bb3] to-[#0a2558] border-x border-b border-[#0f4a9b] shadow-xs flex flex-col justify-around py-0.5">
            <div className="w-full h-0.5 bg-[#f0c96a]/80" />
            <div className="w-full h-0.5 bg-[#f0c96a]/80" />
            <div className="w-full h-0.5 bg-[#f0c96a]/50" />
          </div>

          {/* Base Contact Point */}
          <div className="w-4 h-1 bg-[#C7A24A] rounded-b-full shadow-2xs" />
        </div>
      </div>

      <div className="text-center mt-3 w-full">
        <h3 className="text-xs sm:text-[13.5px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
          Ustaad Method
        </h3>
        <p className="text-[11px] text-slate-500 font-medium mt-0.5">Strategy Protocol</p>
      </div>

      <div className="mt-2.5 flex items-center justify-center gap-1 text-[11px] font-bold text-[#9E7B24] group-hover:text-[#0a1f3d] transition-colors">
        <span>Click to open</span>
        <Maximize2 className="w-3 h-3" />
      </div>
    </div>
  );
}

/* ── FULL SCREEN / MAIN POP-UP MODAL (EXPANDED LIGHTBOX) ── */
function Paper2DetailPopupModal({
  activeTab,
  onSelectStage,
  onClose
}: {
  activeTab: StageKey;
  onSelectStage: (stage: StageKey) => void;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const activeIndex = STAGES.findIndex((s) => s.id === activeTab);
  const activeConfig = STAGES[activeIndex] || STAGES[0];

  useEffect(() => {
    setMounted(true);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!mounted || typeof document === 'undefined') return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#0a1f3d]/75 backdrop-blur-md overflow-y-auto overscroll-contain"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-slate-100 overflow-hidden my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold & Blue Brand Header */}
        <div className="bg-gradient-to-r from-[#0a1f3d] via-[#0f4a9b] to-[#0a2a6e] text-white p-4 sm:p-5 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C7A24A]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#f0c96a] shadow-inner shrink-0">
              {activeTab === 'question' && <BookOpen className="w-5 h-5 text-[#fde68a]" />}
              {activeTab === 'mistake' && <XCircle className="w-5 h-5 text-[#fde68a]" />}
              {activeTab === 'solution' && <CheckCircle2 className="w-5 h-5 text-[#fde68a]" />}
              {activeTab === 'ustaad' && <Lightbulb className="w-5 h-5 text-[#fde68a]" />}
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                {activeConfig.label} <span className="text-[#f0c96a]">({activeConfig.name})</span>
              </h3>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Pop-up"
            className="relative z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs shrink-0 hover:scale-105"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stage Switcher Tabs Inside Pop-up */}
        <div className="bg-slate-100/90 border-b border-slate-200 p-2 sm:p-2.5 flex items-center justify-between gap-1.5 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 w-full">
            {STAGES.map((s, idx) => {
              const isCurrent = activeTab === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelectStage(s.id)}
                  className={`flex-1 min-w-[120px] sm:min-w-0 px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    isCurrent
                      ? 'bg-[#0f4a9b] text-white shadow-xs'
                      : 'bg-white hover:bg-slate-200/70 text-slate-600 border border-slate-200'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white/20 text-[9px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="truncate">{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pop-up Body Content */}
        <div className="p-5 sm:p-7 max-h-[72vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            
            {/* ── POP-UP STAGE 1: THE QUESTION ── */}
            {activeTab === 'question' && (
              <motion.div
                key="question"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-12 gap-4 items-center">
                  
                  {/* Left: Question Prompt */}
                  <div className="md:col-span-7 p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-[#0a1f3d]">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-blue-100/80">
                      <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#0f4a9b] flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#C7A24A]" /> EXAMINATION PROMPT
                      </span>
                      <span className="text-[10.5px] font-bold text-slate-500">[5 Marks]</span>
                    </div>
                    <p className="text-xs sm:text-[13.5px] font-medium leading-relaxed italic border-l-2 border-[#0f4a9b] pl-3 text-slate-800">
                      "A block of mass 0.50 ± 0.02 kg slides down a frictionless curve from height h = 1.20 ± 0.05 m. Calculate the velocity at the bottom of the curve and determine the absolute uncertainty in this calculated velocity."
                    </p>
                  </div>

                  {/* Right: Vector SVG Diagram */}
                  <div className="md:col-span-5 p-4 bg-gradient-to-br from-blue-50/60 via-white to-amber-50/40 rounded-2xl border border-blue-100 flex flex-col justify-between h-full gap-3">
                    <div className="h-24 w-full flex items-center justify-center">
                      <svg viewBox="0 0 160 65" className="w-full h-full max-w-[200px] drop-shadow-2xs">
                        <line x1="10" y1="55" x2="150" y2="55" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                        <path d="M 20 15 Q 40 55 140 55" fill="none" stroke="#0f4a9b" strokeWidth="2.4" />
                        <rect x="15" y="10" width="10" height="9" rx="1.5" fill="#C7A24A" stroke="#0a1f3d" strokeWidth="1" />
                        <text x="30" y="16" fontSize="6.5" fontWeight="bold" fill="#0a1f3d">m = 0.50 ± 0.02 kg</text>
                        <line x1="15" y1="15" x2="15" y2="55" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
                        <text x="4" y="38" fontSize="6.5" fontWeight="bold" fill="#64748b">h</text>
                        <line x1="110" y1="51" x2="135" y2="51" stroke="#0f4a9b" strokeWidth="1.5" />
                        <text x="115" y="46" fontSize="6.5" fontWeight="bold" fill="#0f4a9b">v = ?</text>
                      </svg>
                    </div>

                    <div className="text-[11px] text-slate-600 font-semibold text-center border-t border-slate-200/80 pt-2">
                      Energy conservation &amp; power rule analysis
                    </div>
                  </div>

                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-medium">
                    Ready to see what students usually get wrong?
                  </span>
                  <button
                    onClick={() => onSelectStage('mistake')}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#0f4a9b] hover:bg-[#0a1f3d] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    View Common Pitfall
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── POP-UP STAGE 2: COMMON PITFALL ── */}
            {activeTab === 'mistake' && (
              <motion.div
                key="mistake"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="p-5 rounded-2xl bg-blue-50/50 border border-[#0f4a9b]/25 text-left">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#0f4a9b] text-[#f0c96a] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs font-extrabold text-base">
                      ✕
                    </div>
                    <div className="flex-1">
                      <strong className="text-sm sm:text-base font-extrabold text-[#0a1f3d] block mb-1.5">
                        Common student mistake:
                      </strong>
                      <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed font-normal">
                        Applying v = √(2gh) to obtain 4.85 m·s⁻¹ correctly, but adding uncertainties directly (±0.05) rather than calculating fractional uncertainty and applying the power rule (Δv/v = ½ × Δh/h).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 text-[11.5px] text-[#9E7B24] font-semibold flex items-center gap-2">
                  <span>Cost of this error: Loss of 2 out of 5 marks on Paper 2 data processing!</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onSelectStage('question')}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                  >
                    Back to Question
                  </button>
                  <button
                    onClick={() => onSelectStage('solution')}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#0f4a9b] hover:bg-[#0a1f3d] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    See Full 5-Mark Solution
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── POP-UP STAGE 3: FULL MARK SCHEME ── */}
            {activeTab === 'solution' && (
              <motion.div
                key="solution"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="p-5 rounded-2xl bg-amber-50/50 border border-[#C7A24A]/40 text-left">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f0c96a] to-[#C7A24A] text-[#0a1f3d] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs font-extrabold text-base">
                      ✓
                    </div>
                    <div className="flex-1">
                      <strong className="text-sm sm:text-base font-extrabold text-[#0a1f3d] block mb-1.5">
                        What earns all 5 marks:
                      </strong>
                      <p className="text-xs sm:text-[14px] text-slate-800 leading-relaxed font-normal">
                        v = √(2 × 9.81 × 1.20) = 4.85 m·s⁻¹. Fractional uncertainty in h = 0.05/1.20 = 4.17%. Fractional uncertainty in v = ½(4.17%) = 2.08%. Absolute uncertainty Δv = 4.85 × 0.0208 = ±0.10 m·s⁻¹. Final answer stated as <strong className="text-[#0f4a9b] font-black">4.9 ± 0.1 m·s⁻¹</strong> with matching significant figures.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-[11.5px] text-[#0f4a9b] font-mono flex items-center justify-around font-bold">
                  <span>v = √(2gh) = 4.85</span>
                  <span>·</span>
                  <span>Δv/v = ½(Δh/h)</span>
                  <span>·</span>
                  <span>Final: 4.9 ± 0.1 m·s⁻¹</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onSelectStage('mistake')}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                  >
                    Review Pitfall
                  </button>
                  <button
                    onClick={() => onSelectStage('ustaad')}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#0a1f3d] hover:bg-[#0f4a9b] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    How Ustaad Teaches It
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── POP-UP STAGE 4: HOW USTAAD TEACHES IT ── */}
            {activeTab === 'ustaad' && (
              <motion.div
                key="ustaad"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="p-5 rounded-2xl bg-blue-50/60 border border-[#0f4a9b]/30 text-left">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#0a1f3d] text-[#f0c96a] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <strong className="text-sm sm:text-base font-extrabold text-[#0a1f3d] block mb-1.5">
                        How Ustaad teaches it:
                      </strong>
                      <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed font-normal">
                        "Uncertainty Protocol": Separating raw value calculation from fractional uncertainty propagation prevents loss of method and precision marks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onSelectStage('solution')}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                  >
                    ← Back to Solution
                  </button>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#0f4a9b] hover:bg-[#0a1f3d] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    Close Pop-up <Check className="w-3.5 h-3.5 text-[#f0c96a]" />
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </motion.div>
    </motion.div>,
    document.body
  );
}

export function InteractivePaper2Whiteboard() {
  const [modalStage, setModalStage] = useState<StageKey | null>(null);
  const [activeScrollIndex, setActiveScrollIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards.length) return;

    const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
    let closestIndex = 0;
    let minDiff = Infinity;

    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const diff = Math.abs(containerCenter - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    setActiveScrollIndex(closestIndex);
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cards = scrollContainerRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/60 via-white to-blue-50/20 relative overflow-hidden text-left border-t border-slate-100">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 max-w-xl mx-auto">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0f4a9b] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest mb-2 shadow-2xs">
            <span>WORKED QUESTION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight mb-2 tracking-tight">
            Inside an <span className="text-[#0f4a9b]">IB Paper 2 question</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Click any stage below to open the full interactive examination breakdown.
          </p>
        </div>

        {/* ── 4 REALISTIC 3D INTERACTIVE OBJECTS (GOLD & BLUE) WITH FULL MOBILE SCROLLING ── */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mx-auto mb-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 px-4 -mx-4 sm:mx-auto sm:px-0 sm:pb-0 touch-pan-x"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="w-[78vw] max-w-[270px] sm:w-auto shrink-0 snap-center">
            <Realistic3DBook onClick={() => setModalStage('question')} />
          </div>

          <div className="w-[78vw] max-w-[270px] sm:w-auto shrink-0 snap-center">
            <Realistic3DPitfallDisc onClick={() => setModalStage('mistake')} />
          </div>

          <div className="w-[78vw] max-w-[270px] sm:w-auto shrink-0 snap-center">
            <Realistic3DCheckMedal onClick={() => setModalStage('solution')} />
          </div>

          <div className="w-[78vw] max-w-[270px] sm:w-auto shrink-0 snap-center">
            <Realistic3DLightBulb onClick={() => setModalStage('ustaad')} />
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="sm:hidden flex flex-col items-center gap-2 mt-2 mb-1">
          {/* Active Stage Dots */}
          <div className="flex items-center gap-1.5" aria-label="Slide indicators">
            {STAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to stage ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeScrollIndex === i
                    ? 'w-6 bg-[#0f4a9b]'
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── FULL SCREEN / MAIN POP-UP MODAL (EXPANDED LIGHTBOX) ── */}
        <AnimatePresence>
          {modalStage && (
            <Paper2DetailPopupModal
              activeTab={modalStage}
              onSelectStage={(stage) => setModalStage(stage)}
              onClose={() => setModalStage(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
