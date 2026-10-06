import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Target, RefreshCw, Award, CheckCircle2, Sparkles } from 'lucide-react';

export function PhysicsDiagnosticApproach3D() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: 1,
      phase: 'DIAGNOSE',
      phaseColor: 'bg-blue-50 text-[#0f4a9b] border-blue-200',
      icon: Target,
      title: 'Diagnostic Baseline',
      desc: 'We isolate whether marks leak from algebraic derivation, conceptual gaps, or IA uncertainty treatment.',
      metric: 'Initial Assessment'
    },
    {
      num: 2,
      phase: 'REBUILD',
      phaseColor: 'bg-amber-50 text-[#9E7B24] border-amber-200',
      icon: RefreshCw,
      title: 'First-Principles Rebuilding',
      desc: 'Complex physics themes, from electromagnetic fields to wave models, are explained with structured mathematical clarity.',
      metric: 'Core Derivations'
    },
    {
      num: 3,
      phase: 'PRECISION',
      phaseColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: Award,
      title: 'IB-Standard Drills',
      desc: 'Students complete timed past paper questions mapped to exact IB mark schemes and criteria.',
      metric: 'Mark-Scheme Mastery'
    }
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollLeft = target.scrollLeft;
    const itemWidth = target.scrollWidth / steps.length;
    const index = Math.round(scrollLeft / itemWidth);
    if (index >= 0 && index < steps.length && index !== activeStepIndex) {
      setActiveStepIndex(index);
    }
  };

  const scrollToStep = (idx: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.children[idx] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden text-left border-t border-slate-100">
      {/* Ambient background blueprint accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-gradient-to-r from-blue-50/50 via-amber-50/30 to-blue-50/50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest mb-2 shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#C7A24A]" />
            <span>DIAGNOSTIC FRAMEWORK</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2 tracking-tight">
            Our 3-Step <span className="text-[#0f4a9b]">Diagnostic Approach</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            How we identify root conceptual and mathematical bottlenecks before building toward exam-board criteria.
          </p>
        </div>

        {/* 3D Stepper Cards Grid / Scrollable on Mobile */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-4xl mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 px-4 -mx-4 sm:mx-auto sm:px-0 sm:pb-0 sm:overflow-visible"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="w-[84vw] max-w-[315px] sm:w-auto shrink-0 snap-center rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-[#0f4a9b]/40 transition-all duration-300 p-5 flex flex-col justify-between group overflow-hidden relative"
              >
                {/* Top Subtle Gradient Accents on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    {/* 3D Number Orb */}
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a2a6e] text-white font-extrabold text-sm flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      {step.num}
                    </div>

                    <span className={`text-[9.5px] font-extrabold font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-md border ${step.phaseColor}`}>
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-[#0a1f3d] mb-2 group-hover:text-[#0f4a9b] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10.5px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1 text-slate-500">
                    <CheckCircle2 className="w-3 h-3 text-[#C7A24A]" />
                    {step.metric}
                  </span>
                  <span className="font-mono font-bold text-slate-300">0{step.num}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="sm:hidden flex items-center justify-center mt-3">
          <div className="flex items-center gap-1.5">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToStep(i)}
                aria-label={`Go to step ${i + 1}`}
                className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: i === activeStepIndex ? 22 : 6,
                  backgroundColor: i === activeStepIndex ? '#0f4a9b' : 'rgba(15,74,155,0.2)',
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
