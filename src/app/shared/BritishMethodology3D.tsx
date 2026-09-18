import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Brain, TrendingUp, GraduationCap, X, ChevronRight } from 'lucide-react';
import { GradientHeadingText } from './GradientHeadingText';

const METHODOLOGY_ITEMS = [
  {
    label: 'FOUNDATION',
    color: '#0f4a9b',
    tasselColor: '#C7A24A',
    icon: Target,
    title: 'Build Strong Foundations',
    desc: 'Small learning gaps grow quickly. We strengthen core concepts before they widen.',
    category: 'Core Concepts',
    step: '01',
  },
  {
    label: 'THINKING',
    color: '#A8892A',
    tasselColor: '#0f4a9b',
    icon: Brain,
    title: 'Develop Independent Thinking',
    desc: 'British exams reward thinking over recall. Application over memorisation.',
    category: 'Application & Recall',
    step: '02',
  },
  {
    label: 'PROGRESSION',
    color: '#0f4a9b',
    tasselColor: '#C7A24A',
    icon: TrendingUp,
    title: 'Higher Stage Ahead',
    desc: 'Students step into IGCSE, GCSE, and A-Levels ready for sharper academic demands.',
    category: 'IGCSE · GCSE · A-Levels',
    step: '03',
  },
] as const;

// ── 3D GRADUATION CAP COMPONENT ──
function GraduationCap3D({
  item,
  isHovered,
}: {
  item: (typeof METHODOLOGY_ITEMS)[number];
  isHovered: boolean;
}) {
  const isGold = item.color === '#A8892A';

  return (
    <div className="relative w-full h-[140px] sm:h-[170px] flex items-center justify-center select-none">
      {/* Ambient shadow underneath the cap */}
      <motion.div
        animate={{
          scale: isHovered ? 1.15 : 1,
          opacity: isHovered ? 0.35 : 0.2,
          y: isHovered ? 12 : 6,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute bottom-2 w-32 sm:w-40 h-8 rounded-full bg-[#0a1f3d]/40 blur-md pointer-events-none"
      />

      {/* Floating 3D Hat Rig */}
      <motion.div
        animate={{
          y: isHovered ? -14 : 0,
          rotateX: isHovered ? 14 : 8,
          rotateY: isHovered ? -12 : -6,
          rotateZ: isHovered ? 2 : 0,
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 18 }}
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
        className="relative w-36 sm:w-48 h-28 sm:h-36 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 240 180"
          className="w-full h-full overflow-visible drop-shadow-[0_16px_20px_rgba(10,31,61,0.25)]"
        >
          <defs>
            {/* Blue Mortarboard Gradients */}
            <linearGradient id={`capTopGradBlue-${item.step}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e5cb3" />
              <stop offset="50%" stopColor="#0f4a9b" />
              <stop offset="100%" stopColor="#082b5c" />
            </linearGradient>
            <linearGradient id={`capSideGradBlue-${item.step}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0a326a" />
              <stop offset="100%" stopColor="#051733" />
            </linearGradient>
            <linearGradient id={`skullCapGradBlue-${item.step}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0c3875" />
              <stop offset="100%" stopColor="#051a38" />
            </linearGradient>

            {/* Gold Mortarboard Gradients */}
            <linearGradient id={`capTopGradGold-${item.step}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dfba5b" />
              <stop offset="50%" stopColor="#C7A24A" />
              <stop offset="100%" stopColor="#7a5d14" />
            </linearGradient>
            <linearGradient id={`capSideGradGold-${item.step}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8c6a18" />
              <stop offset="100%" stopColor="#4a370a" />
            </linearGradient>
            <linearGradient id={`skullCapGradGold-${item.step}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9e791e" />
              <stop offset="100%" stopColor="#543e0c" />
            </linearGradient>

            {/* Gold Tassel Gradient */}
            <linearGradient id={`goldTasselGrad-${item.step}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fae08c" />
              <stop offset="50%" stopColor="#C7A24A" />
              <stop offset="100%" stopColor="#8a6715" />
            </linearGradient>

            {/* Blue Tassel Gradient */}
            <linearGradient id={`blueTasselGrad-${item.step}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#0f4a9b" />
              <stop offset="100%" stopColor="#092854" />
            </linearGradient>

            {/* Metallic rim reflection */}
            <linearGradient id={`rimLight-${item.step}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* ── 1. SKULL CAP / DOME (UNDERNEATH) ── */}
          <ellipse
            cx="120"
            cy="114"
            rx="48"
            ry="26"
            fill={isGold ? `url(#skullCapGradGold-${item.step})` : `url(#skullCapGradBlue-${item.step})`}
            stroke="#0a1f3d"
            strokeWidth="1.5"
            opacity="0.95"
          />
          <path
            d="M 72 114 Q 120 148 168 114 L 164 128 Q 120 162 76 128 Z"
            fill={isGold ? "#543e0c" : "#04142d"}
            opacity="0.8"
          />

          {/* ── 2. MORTARBOARD THICKNESS / LOWER SIDES ── */}
          {/* Left/Bottom side bevel */}
          <polygon
            points="12,70 120,118 120,126 12,78"
            fill={isGold ? `url(#capSideGradGold-${item.step})` : `url(#capSideGradBlue-${item.step})`}
          />
          {/* Right/Bottom side bevel */}
          <polygon
            points="120,118 228,70 228,78 120,126"
            fill={isGold ? "#4a370a" : "#031024"}
          />

          {/* ── 3. TOP RHOMBUS BOARD (THE MORTARBOARD SURFACE) ── */}
          <polygon
            points="120,22 228,70 120,118 12,70"
            fill={isGold ? `url(#capTopGradGold-${item.step})` : `url(#capTopGradBlue-${item.step})`}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.2"
          />

          {/* Highlights along front edges */}
          <line
            x1="12"
            y1="70"
            x2="120"
            y2="118"
            stroke={`url(#rimLight-${item.step})`}
            strokeWidth="1.8"
          />
          <line
            x1="120"
            y1="118"
            x2="228"
            y2="70"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />

          {/* Subtle inner textile grid watermark on mortarboard */}
          <polygon
            points="120,32 212,70 120,108 28,70"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />

          {/* ── 4. CENTER BUTTON ── */}
          <ellipse
            cx="120"
            cy="70"
            rx="7"
            ry="4.5"
            fill={isGold ? "#fde047" : "#C7A24A"}
            stroke="#fff"
            strokeWidth="0.8"
            className="drop-shadow-sm"
          />
          <ellipse
            cx="120"
            cy="69"
            rx="4.5"
            ry="2.5"
            fill="#fff"
            opacity="0.4"
          />

          {/* ── 5. TASSEL STRAND & BRUSH ── */}
          {/* Ribbon Cord */}
          <path
            d="M 120 70 Q 75 62 48 85 Q 36 98 34 118"
            fill="none"
            stroke={item.tasselColor === '#C7A24A' ? `url(#goldTasselGrad-${item.step})` : `url(#blueTasselGrad-${item.step})`}
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Tassel Ring / Band */}
          <ellipse
            cx="34"
            cy="118"
            rx="4.5"
            ry="2.5"
            fill="#fef08a"
            stroke="#92400e"
            strokeWidth="0.8"
          />

          {/* Tassel Hanging Brush with subtle swinging animation */}
          <g className={`transition-transform duration-500 origin-[34px_118px] ${isHovered ? 'rotate-12' : 'rotate-2'}`}>
            {/* Shadow behind brush */}
            <polygon
              points="30,120 38,120 44,158 24,158"
              fill={item.tasselColor === '#C7A24A' ? `url(#goldTasselGrad-${item.step})` : `url(#blueTasselGrad-${item.step})`}
            />
            {/* Fine brush hairs */}
            <line x1="28" y1="120" x2="26" y2="158" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
            <line x1="34" y1="120" x2="34" y2="160" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            <line x1="40" y1="120" x2="42" y2="158" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

// ── SINGLE METHODOLOGY CARD ──
function MethodologyCard({
  item,
  index,
  onClick,
}: {
  item: (typeof METHODOLOGY_ITEMS)[number];
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;
  const isGold = item.color === '#A8892A';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center w-full"
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className={`relative w-full rounded-3xl p-4 sm:p-6 transition-all duration-300 cursor-pointer group flex flex-col items-center text-center overflow-hidden border ${
          isHovered
            ? 'bg-white shadow-[0_20px_45px_rgba(15,74,155,0.14)] -translate-y-2 border-[#0f4a9b]/30'
            : 'bg-white/90 shadow-[0_8px_30px_rgba(15,74,155,0.06)] border-[#0f4a9b]/10 hover:border-[#0f4a9b]/20'
        }`}
      >
        {/* Top Metallic Trim Line */}
        <div
          className={`absolute top-0 left-0 right-0 h-1.5 ${
            isGold
              ? 'bg-gradient-to-r from-[#C7A24A] via-[#f0d080] to-[#C7A24A]'
              : 'bg-gradient-to-r from-[#0f4a9b] via-[#38bdf8] to-[#0a3a79]'
          }`}
        />

        {/* 3D Graduation Cap Display */}
        <GraduationCap3D item={item} isHovered={isHovered} />

        {/* Category / Step Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100/90 border border-gray-200/80 mb-3 mt-1 shadow-2xs">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isGold ? 'bg-[#C7A24A]' : 'bg-[#0f4a9b]'
            }`}
          />
          <span
            className={`text-[10px] font-extrabold uppercase tracking-[0.14em] ${
              isGold ? 'text-[#8a6a1a]' : 'text-[#0f4a9b]'
            }`}
          >
            {item.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-[#0a1f3d] mb-2 leading-snug group-hover:text-[#0f4a9b] transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-normal">
          {item.desc}
        </p>

        {/* Action Button */}
        <div className="w-full pt-3 border-t border-gray-100 flex items-center justify-center">
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              isHovered
                ? isGold
                  ? 'bg-[#C7A24A] text-white shadow-sm'
                  : 'bg-[#0f4a9b] text-white shadow-sm'
                : 'bg-gray-50 text-gray-700 group-hover:bg-blue-50 group-hover:text-[#0f4a9b]'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>Read Methodology</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── DETAILED MODAL ──
function ExpandedMethodologyModal({
  item,
  onClose,
}: {
  item: (typeof METHODOLOGY_ITEMS)[number];
  onClose: () => void;
}) {
  const Icon = item.icon;
  const isGold = item.color === '#A8892A';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, []);

  if (!mounted || typeof document === 'undefined') return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#0a1f3d]/80 backdrop-blur-md overflow-y-auto overscroll-contain"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-[680px] max-h-[85vh] overflow-y-auto overscroll-contain bg-white rounded-2xl sm:rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.35)] border border-white/20 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-50 w-8 h-8 sm:w-9 sm:h-9 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header Banner */}
        <div
          className="p-5 sm:p-8 md:p-10 text-white relative overflow-hidden"
          style={{ backgroundColor: item.color }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <GraduationCap className="absolute -bottom-6 -right-6 w-32 sm:w-36 h-32 sm:h-36 text-white/10 pointer-events-none" />

          <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/15 border border-white/25 flex items-center justify-center backdrop-blur-md">
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/15 rounded-full border border-white/25 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider">
              {item.label} · STEP {item.step}
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white relative z-10 leading-tight">
            {item.title}
          </h3>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 md:p-10 bg-[#fdfdfc]">
          <h4 className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-2.5 sm:mb-3">
            Methodology Focus
          </h4>

          <p className="text-[#0a1f3d] text-sm sm:text-base md:text-lg leading-relaxed font-semibold mb-5 sm:mb-6">
            {item.desc}
          </p>

          <div
            className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-gray-100 shadow-2xs"
            style={{ backgroundColor: `${item.color}12` }}
          >
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: item.color }} />
            <span className="text-xs font-extrabold text-[#0a1f3d]">
              {item.category}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

// ── EXPORTED SECTION ──
export function UstaadMethodology3DSection() {
  const [activeItem, setActiveItem] = useState<(typeof METHODOLOGY_ITEMS)[number] | null>(null);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-y border-gray-100 overflow-hidden isolate">
      {/* Decorative Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Radial Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#0f4a9b]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/6 border border-[#0f4a9b]/15 rounded-full mb-3.5 shadow-2xs">
            <GraduationCap className="w-3.5 h-3.5 text-[#0f4a9b]" />
            <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">
              Academic Excellence
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-3 tracking-tight"
          >
            <GradientHeadingText text="Ustaad Methodology" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm sm:text-base lg:text-lg font-medium"
          >
            Our method matches what the curriculum asks at every stage.
          </motion.p>
        </div>

        {/* 3D Graduation Caps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch justify-center">
          {METHODOLOGY_ITEMS.map((item, idx) => (
            <MethodologyCard
              key={item.title}
              item={item}
              index={idx}
              onClick={() => setActiveItem(item)}
            />
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {activeItem && (
          <ExpandedMethodologyModal
            item={activeItem}
            onClose={() => setActiveItem(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

