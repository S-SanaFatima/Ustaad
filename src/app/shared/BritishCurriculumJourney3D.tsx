import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, Award, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GradientHeadingText } from './GradientHeadingText';

const JOURNEY_STAGES = [
  {
    key: 'igcse',
    label: 'IGCSE',
    color: '#0f4a9b',
    icon: BookOpen,
    title: 'IGCSE',
    eyebrow: 'Years 9 to 11',
    points: ['Foundation building', 'Exam preparation', 'Subject understanding'],
    href: '/igcse',
    cta: 'Explore IGCSE',
  },
  {
    key: 'gcse',
    label: 'GCSE',
    color: '#A8892A',
    icon: GraduationCap,
    title: 'GCSE',
    eyebrow: 'Years 10 to 11',
    points: ['Grade improvement', 'Exam technique', 'Coursework support'],
    href: '/gcse',
    cta: 'Explore GCSE',
  },
  {
    key: 'alevel',
    label: 'A-LEVEL',
    color: '#0f4a9b',
    icon: Award,
    title: 'A-Level',
    eyebrow: 'Years 12 to 13',
    points: ['Advanced subject mastery', 'Independent learning', 'University preparation'],
    href: '/a-level',
    cta: 'Explore A-Level',
  },
] as const;

function ClosedJourneyBook({
  stage,
  index,
  onClick,
}: {
  stage: (typeof JOURNEY_STAGES)[number];
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = stage.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center w-full"
    >
      <div
        style={{ perspective: '1200px' }}
        className="relative w-[92px] h-[145px] min-[375px]:w-[104px] min-[375px]:h-[158px] sm:w-[170px] sm:h-[245px] lg:w-[190px] lg:h-[270px] mx-auto cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            rotateY: isHovered ? -22 : -12,
            rotateX: isHovered ? 5 : 5,
            y: isHovered ? -12 : 0,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        >
          {/* Back Cover */}
          <div
            className="absolute inset-0 rounded-r-lg sm:rounded-r-2xl shadow-xl origin-left"
            style={{ backgroundColor: stage.color, transform: 'translateZ(-10px)' }}
          />

          {/* Pages block for realistic thickness */}
          <div
            className="absolute inset-y-0.5 sm:inset-y-1 right-0.5 sm:right-1 left-0 bg-[#f4f4f4] rounded-r-md sm:rounded-r-xl border border-gray-200/50"
            style={{ transform: 'translateZ(-5px)' }}
          />

          {/* Spine */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[10px] sm:w-[22px] origin-right flex items-center justify-center"
            style={{
              backgroundColor: stage.color,
              transform: 'translateX(-100%) rotateY(-90deg)',
              filter: 'brightness(0.75)',
            }}
          >
            <span className="text-white/50 text-[5.5px] sm:text-[8px] font-bold uppercase tracking-widest -rotate-90 whitespace-nowrap">
              {stage.label}
            </span>
          </div>

          {/* Front Cover */}
          <motion.div
            className="absolute inset-0 rounded-r-lg sm:rounded-r-2xl shadow-lg origin-left flex flex-col p-0.5 sm:p-1.5 border-l-2 sm:border-l-4 border-black/30"
            style={{ backgroundColor: stage.color, transformStyle: 'preserve-3d' }}
            animate={{ rotateY: isHovered ? -18 : 0 }}
          >
            <div
              className="w-full h-full p-1 sm:p-3 flex flex-col items-center justify-center text-center backface-hidden bg-gradient-to-br from-white/20 to-transparent rounded-r-md sm:rounded-r-xl border border-white/20 relative overflow-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              {/* Inner Decorative Border */}
              <div className="absolute inset-0.5 sm:inset-1.5 border border-white/10 rounded-sm sm:rounded-lg pointer-events-none" />

              <Icon className="w-5 h-5 min-[375px]:w-6 min-[375px]:h-6 sm:w-10 sm:h-10 text-white mb-1 min-[375px]:mb-1.5 sm:mb-2 opacity-95 drop-shadow-md relative z-10 shrink-0" />
              
              <h4 className="text-white font-extrabold text-[10px] min-[375px]:text-[12px] sm:text-xl leading-tight sm:leading-snug px-0.5 sm:px-1 relative z-10">
                {stage.title}
              </h4>

              <span className="text-white/75 text-[6px] min-[375px]:text-[7.5px] sm:text-xs font-semibold uppercase tracking-wider mb-1 sm:mb-2 relative z-10">
                {stage.eyebrow}
              </span>

              <div className="absolute bottom-1.5 min-[375px]:bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-white/15 group-hover:bg-white/25 transition-colors px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full backdrop-blur-md border border-white/30 whitespace-nowrap flex items-center gap-1 sm:gap-1.5 z-10">
                <BookOpen className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                <span className="text-white text-[6px] min-[375px]:text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.08em] sm:tracking-[0.15em]">
                  Read
                </span>
              </div>
            </div>

            {/* Inside Front Cover */}
            <div
              className="absolute inset-0 bg-[#fdfdfc] rounded-r-lg sm:rounded-r-2xl border border-gray-200"
              style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
            >
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:100%_20px]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ExpandedJourneyModal({
  stage,
  onClose,
}: {
  stage: (typeof JOURNEY_STAGES)[number];
  onClose: () => void;
}) {
  const Icon = stage.icon;
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
      {/* --- DESKTOP BOOK SPREAD --- */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="hidden md:flex relative w-full max-w-[720px] min-h-[420px] bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-8 h-8 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Page (Inside Cover) */}
        <div
          className="w-1/2 flex flex-col justify-center p-10 lg:p-12 relative text-white"
          style={{ backgroundColor: stage.color }}
        >
          {/* Inner spine shadow */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none mix-blend-multiply" />

          <Icon className="w-12 h-12 text-white mb-6 opacity-90 drop-shadow-sm" />
          <div className="inline-flex items-center px-3 py-1 bg-white/15 rounded-full text-xs font-bold w-max mb-3 border border-white/20">
            {stage.eyebrow}
          </div>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight drop-shadow-sm">
            {stage.title}
          </h3>
          <div className="w-12 h-1 bg-white/40 rounded-full" />
        </div>

        {/* Right Page (Content) */}
        <div className="w-1/2 bg-[#fdfdfc] flex flex-col justify-center p-10 lg:p-12 relative border-l border-gray-200/50">
          {/* Inner spine shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/5 to-transparent pointer-events-none mix-blend-multiply" />

          <h4 className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-6">
            Key Academic Focus
          </h4>

          <ul className="space-y-4 mb-8">
            {stage.points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
                className="flex items-center gap-3 text-[#0a1f3d] font-bold text-sm"
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border border-gray-100 shadow-xs"
                  style={{ backgroundColor: `${stage.color}15` }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: stage.color }} />
                </div>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>

          <a
            href={stage.href}
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 mt-auto"
            style={{ backgroundColor: stage.color }}
          >
            {stage.cta} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* --- MOBILE CARD MODAL --- */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="block md:hidden relative w-full max-w-[340px] max-h-[85vh] overflow-y-auto overscroll-contain bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 pb-5 text-white relative" style={{ backgroundColor: stage.color }}>
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 z-50 w-8 h-8 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="inline-flex items-center px-2.5 py-0.5 bg-white/20 rounded-full text-[10px] font-bold w-max mb-1.5">
            {stage.eyebrow}
          </div>
          <Icon className="w-7 h-7 mb-1.5 drop-shadow-md relative z-10" />
          <h3 className="text-2xl font-black relative z-10 leading-tight">{stage.title}</h3>
        </div>
        <div className="p-5 bg-[#fdfdfc]">
          <h4 className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-3.5">
            Key Academic Focus
          </h4>
          <ul className="space-y-2.5 mb-5">
            {stage.points.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-[#0a1f3d] font-bold text-xs">
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${stage.color}15` }}
                >
                  <CheckCircle2 className="w-3 h-3" style={{ color: stage.color }} />
                </div>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <a
            href={stage.href}
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-white text-xs font-bold shadow-md"
            style={{ backgroundColor: stage.color }}
          >
            {stage.cta} <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

export function BritishCurriculumJourney3D() {
  const [activeStage, setActiveStage] = useState<(typeof JOURNEY_STAGES)[number] | null>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc] border-y border-gray-100 relative overflow-hidden isolate">
      {/* Decorative Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Radial Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#0f4a9b]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-2 sm:mb-3 tracking-tight"
          >
            <GradientHeadingText text="The British Curriculum Journey" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-xs sm:text-base lg:text-lg font-medium"
          >
            Three British Curriculum stages your child moves through during school.
          </motion.p>
        </div>

        {/* 3D Journey Books Row */}
        <div className="grid grid-cols-3 gap-2 min-[375px]:gap-3 sm:gap-6 lg:gap-8 max-w-4xl mx-auto items-center justify-center px-1 sm:px-4">
          {JOURNEY_STAGES.map((stage, idx) => (
            <ClosedJourneyBook
              key={stage.key}
              stage={stage}
              index={idx}
              onClick={() => setActiveStage(stage)}
            />
          ))}
        </div>
      </div>

      {/* Expanded Journey Modal / Screen Node */}
      <AnimatePresence>
        {activeStage && (
          <ExpandedJourneyModal
            stage={activeStage}
            onClose={() => setActiveStage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
