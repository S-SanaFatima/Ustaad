import React, { useState, useRef } from 'react';
import { 
  Compass, 
  Target, 
  Activity, 
  PenTool, 
  Layers, 
  GraduationCap, 
  Calendar
} from 'lucide-react';

interface TimelineMilestone {
  num: string;
  year: string;
  phase: string;
  title: string;
  desc: string;
  accentGradient: string;
  tagBg: string;
  icon: React.ElementType;
}

const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    num: '01',
    year: 'YEAR 12 START',
    phase: 'Autumn Term · DP Year 1',
    title: 'Course begins',
    desc: 'The algebra gap shows up here, not later. Easiest point to fix anything before syllabus velocity accelerates.',
    accentGradient: 'from-[#0f4a9b] to-[#1e5bb3]',
    tagBg: 'bg-blue-50 text-[#0f4a9b] border-blue-200/80',
    icon: Compass
  },
  {
    num: '02',
    year: 'YEAR 12 MID',
    phase: 'Spring Term · DP Year 1',
    title: 'IA proposal',
    desc: 'A vague research question costs Criterion B marks for the next six months. Formulation must be precise from day one.',
    accentGradient: 'from-[#0f4a9b] to-[#0a2a6e]',
    tagBg: 'bg-blue-50 text-[#0f4a9b] border-blue-200/80',
    icon: Target
  },
  {
    num: '03',
    year: 'YEAR 12 LATE',
    phase: 'Summer Term · DP Year 1',
    title: 'IA data collection',
    desc: 'Uncertainties are decided now. Almost impossible to repair afterwards if error bars and instrument resolutions are missed.',
    accentGradient: 'from-[#C7A24A] to-[#9E7B24]',
    tagBg: 'bg-amber-50 text-[#9E7B24] border-amber-200/80',
    icon: Activity
  },
  {
    num: '04',
    year: 'YEAR 13 EARLY',
    phase: 'Autumn Term · DP Year 2',
    title: 'IA first draft',
    desc: 'One supervisor comment only, so it has to count. Mathematical write-up and evaluation must be near-complete.',
    accentGradient: 'from-[#0f4a9b] via-indigo-600 to-[#0a1f3d]',
    tagBg: 'bg-indigo-50 text-indigo-900 border-indigo-200/80',
    icon: PenTool
  },
  {
    num: '05',
    year: 'YEAR 13 MID',
    phase: 'Winter/Spring · DP Year 2',
    title: 'Mocks',
    desc: 'Predicted grades come from here, and universities see them. High-pressure timed Paper 1 & 2 exam stamina required.',
    accentGradient: 'from-[#C7A24A] to-[#0a1f3d]',
    tagBg: 'bg-amber-50 text-[#9E7B24] border-amber-200/80',
    icon: Layers
  },
  {
    num: '06',
    year: 'YEAR 13 MAY',
    phase: 'Final Exam Session',
    title: 'Final exams',
    desc: 'Papers 1 and 2. By now the IA mark is already banked. Final performance hinges on mark scheme command term mastery.',
    accentGradient: 'from-[#0a1f3d] via-[#0f4a9b] to-[#C7A24A]',
    tagBg: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    icon: GraduationCap
  }
];

export function PhysicsTwoYearTimeline() {
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
    <section className="py-10 sm:py-14 lg:py-16 bg-white relative overflow-hidden text-left border-t border-slate-100">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-50/70 via-amber-50/40 to-blue-50/70 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#0f4a9b]/20 text-[#0f4a9b] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest mb-2 shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-[#C7A24A]" />
            <span>TWO YEARS, ONE TIMELINE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight mb-2 tracking-tight">
            Two years, <span className="text-[#0f4a9b]">one timeline</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
            Most parents manage the DP with no view of what happens when. Here is the whole progression, and where targeted tuition makes the greatest impact.
          </p>
        </div>

        {/* ── PROFESSIONAL TIMELINE CARDS (DESKTOP GRID / MOBILE HORIZONTAL SCROLL) ── */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 touch-pan-x"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {TIMELINE_MILESTONES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="w-[82vw] max-w-[310px] sm:w-auto shrink-0 snap-center rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(15,74,155,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(15,74,155,0.16)] hover:border-[#0f4a9b]/35 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group select-none"
              >
                {/* Top Accent Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accentGradient}`} />

                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    {/* Number Badge with 3D Depth */}
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a2a6e] text-[#fde68a] font-black text-sm flex items-center justify-center shrink-0 shadow-md border border-[#C7A24A]/40 group-hover:scale-105 transition-transform">
                      {item.num}
                    </div>

                    <div className="flex flex-col items-end">
                      <span className={`text-[9.5px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.tagBg}`}>
                        {item.year}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 font-bold mt-0.5">
                        {item.phase}
                      </span>
                    </div>
                  </div>

                  {/* Title & Icon Header */}
                  <div className="flex items-center gap-2 mb-2">
                    <IconComponent className="w-4 h-4 text-[#0f4a9b]" />
                    <h3 className="text-base sm:text-lg font-serif font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="sm:hidden flex items-center justify-center mt-3">
          <div className="flex items-center gap-1.5" aria-label="Timeline slide indicators">
            {TIMELINE_MILESTONES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to milestone ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeScrollIndex === i
                    ? 'w-6 bg-[#0f4a9b]'
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default PhysicsTwoYearTimeline;
