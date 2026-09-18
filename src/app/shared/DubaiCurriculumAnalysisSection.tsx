import React from 'react';
import { Compass, ShieldAlert, Layers, Clock, ArrowLeftRight } from 'lucide-react';

export function DubaiCurriculumAnalysisSection() {
  const cards = [
    {
      num: '01',
      tag: 'Curriculum Transition',
      title: 'Notation & Working Style Shifts',
      text: 'Families relocate between British, American and IB schools more often here than elsewhere in the Emirates, and notation and expected working style change with the board.',
      icon: ArrowLeftRight,
    },
    {
      num: '02',
      tag: 'Multi-Exam Boards',
      title: 'Single-Worksheet Half-Fit',
      text: 'Many Dubai schools run AQA, Edexcel, OCR and Cambridge cohorts within the same year group, so a one-size worksheet only ever half-fits.',
      icon: Layers,
    },
    {
      num: '03',
      tag: 'Calendar Pressure',
      title: 'Evening Revision Squeeze',
      text: 'A packed school calendar (sport, travel, activities) leaves revision squeezed into short evening windows rather than long weekend blocks.',
      icon: Clock,
    },
    {
      num: '04',
      tag: 'Syllabus Sequence',
      title: 'Mid-Year Curriculum Lag',
      text: 'A mid-year school change often means a new syllabus order, so a topic taught early at one school arrives late at the next.',
      icon: ShieldAlert,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0f4a9b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C7A24A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-xs font-bold mb-3 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#0f4a9b]" />
            <span>DUBAI CURRICULUM ANALYSIS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] tracking-tight mb-3">
            Why Maths Slips in Dubai&apos;s Mixed-Curriculum Classrooms
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Dubai has more curricula sitting side by side than anywhere else in the UAE. That mix is exactly where marks get lost, not always in the topic itself.
          </p>
        </div>

        {/* Responsive Cards: Horizontally scrollable on mobile, grid on tablet/desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="w-[82vw] max-w-[310px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink bg-white rounded-2xl border border-[#0f4a9b]/25 p-5 sm:p-6 shadow-[0_6px_24px_rgba(15,74,155,0.06)] hover:shadow-[0_14px_36px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Top accent gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]" />

                <div>
                  {/* Top Row: Tag & Index */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[11px] font-mono font-black tracking-wider text-[#0f4a9b] bg-blue-50/90 px-2.5 py-0.5 rounded-md border border-blue-100 shadow-2xs">
                      {card.tag}
                    </span>
                    <span className="text-xl font-black font-mono text-slate-300 group-hover:text-[#0f4a9b] transition-colors">
                      {card.num}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#0f4a9b] border border-[#0f4a9b] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {/* Body Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.text}
                  </p>
                </div>

                {/* Card Bottom Indicator */}
                <div className="pt-3.5 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 font-medium">Curriculum Insight</span>
                  <span className="text-[#0f4a9b] font-bold">Point {card.num}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Swipe indicator on mobile */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 mt-3 text-[11px] font-mono text-slate-400">
          <span>Swipe across 4 points</span>
          <span>→</span>
        </div>
      </div>
    </section>
  );
}
