import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import SwipeIndicator from './SwipeIndicator';

/* ── Section 13: 3-Step Diagnostic Approach (High-Res Custom Artwork) ── */
export function BiologyDiagnosticApproach() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const steps = [
    {
      name: "DIAGNOSE",
      subtitle: "Diagnostic Baseline",
      desc: "We pinpoint whether marks leak from content gaps, answer structure, data skills, or the IA. A 30-minute diagnostic reveals the exact mark-scheme barrier.",
      image: "/images/biology/bio_card1_clean.png",
    },
    {
      name: "REBUILD",
      subtitle: "First-Principles Rebuilding",
      desc: "Difficult topics such as oxidative phosphorylation, protein synthesis, synaptic transmission, and homeostasis are taught step-by-step until intuitive.",
      image: "/images/biology/bio_card2_clean.png",
    },
    {
      name: "PRECISION",
      subtitle: "Exam-Standard Drills",
      desc: "Timed past-paper questions mapped to the exact mark scheme. Students learn to count marks as they write, ensuring no points are left on the table.",
      image: "/images/biology/bio_card3_clean.png",
    }
  ];

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / steps.length;
    const newIdx = Math.round(el.scrollLeft / cardWidth);
    if (newIdx !== activeIdx && newIdx >= 0 && newIdx < steps.length) {
      setActiveIdx(newIdx);
    }
  };

  const scrollToStep = (idx: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>('.diagnostic-step-card');
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    setActiveIdx(idx);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/60 relative overflow-hidden text-left border-t border-slate-100">
      {/* Soft Ambient Radial Background Accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-blue-100/30 via-slate-100/40 to-blue-100/30 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/20 text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-widest mb-3 shadow-2xs">
            <ShieldCheck className="h-4 w-4 text-[#C7A24A]" />
            <span>THE USTAAD METHOD</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] tracking-tight mb-3">
            How Biology Lessons <span className="text-[#0f4a9b]">Are Planned</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            A systematic framework designed to convert biological knowledge into examination precision.
          </p>
        </div>

        {/* 3 Step Cards Grid - Scrollable on Mobile */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full flex md:grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-7 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pt-1 pb-3 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
        >
          {steps.map((st, idx) => (
            <motion.div
              key={st.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="diagnostic-step-card w-[86vw] sm:w-[320px] max-w-[340px] md:max-w-none md:w-auto shrink-0 snap-center md:shrink bg-white rounded-[26px] p-6 lg:p-7 border border-slate-200/90 shadow-[0_4px_24px_-6px_rgba(15,74,155,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/40 transition-all duration-300 flex flex-col group overflow-hidden relative"
            >
              {/* Subtle Top Accent Border on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Artwork with subtle floating micro-animation */}
                <motion.div
                  className="w-full h-36 sm:h-40 flex items-center justify-center mb-5 overflow-hidden"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.35,
                  }}
                >
                  <img
                    src={st.image}
                    alt={st.subtitle}
                    className="max-h-full max-w-full w-auto object-contain select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Category Tag */}
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0f4a9b] block mb-1.5">
                  {st.name}
                </span>

                {/* Subtitle / Heading */}
                <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] mb-2 leading-snug group-hover:text-[#0f4a9b] transition-colors">
                  {st.subtitle}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Indicator (Clean 'Swipe to see more', no arrows, no dots) */}
        <div className="md:hidden mt-4 flex justify-center">
          <SwipeIndicator text="Swipe to see more" hideArrows hideDots />
        </div>

      </div>
    </section>
  );
}

export default BiologyDiagnosticApproach;
