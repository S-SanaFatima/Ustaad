import React from 'react';
import { Compass } from 'lucide-react';

const USED_TO_ITEMS = [
  'Marks for following a set method',
  'Practicals written to a fixed format',
  'Questions with one clear right answer',
  'Assessment focused on final exams',
];

const IB_ASKS_FOR_ITEMS = [
  'Marks for evaluating your method',
  'Investigations you design yourself',
  'Conclusions judged against your data',
  'Assessment spread across two years',
];

export function CurriculumTransitionClipboard3D() {
  return (
    <section className="py-5 sm:py-8 lg:py-10 bg-white relative overflow-hidden text-left">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0f4a9b] text-[9.5px] sm:text-[10.5px] font-extrabold uppercase tracking-widest mb-1 sm:mb-1.5 shadow-2xs">
            <Compass className="h-3 w-3 text-[#C7A24A]" />
            <span>CURRICULUM TRANSITION</span>
          </div>

          <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] tracking-tight mb-1">
            Moving into IB <span className="text-[#0f4a9b]">partway through</span>
          </h2>
          
          <p className="text-slate-600 text-[11px] sm:text-xs sm:leading-relaxed max-w-xl mx-auto">
            Students arriving from a British curriculum are rarely behind on content. They are behind on how the work is judged.
          </p>
        </div>

        {/* 2-Column Side-by-Side Dual Clipboards (Mobile & Desktop in One View) */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-11 gap-2 sm:gap-4 items-stretch">

            {/* ── LEFT CLIPBOARD: WHAT WAS REWARDED ── */}
            <div className="col-span-1 lg:col-span-5 relative">
              {/* Clipboard Base */}
              <div className="h-full rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[#2b333e] p-1.5 sm:p-3 shadow-md border border-slate-700/60 relative flex flex-col justify-between">
                
                {/* Metallic Clip Header */}
                <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-16 sm:w-28 h-4 sm:h-6 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 rounded sm:rounded-md shadow-sm border border-slate-400 flex items-center justify-between px-1.5 sm:px-3 z-20">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-600 shadow-inner" />
                  <div className="w-6 sm:w-10 h-0.5 sm:h-1 bg-slate-400/80 rounded-full" />
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-600 shadow-inner" />
                </div>

                {/* White Paper Sheet */}
                <div className="mt-1.5 sm:mt-2 h-[calc(100%-6px)] rounded-lg sm:rounded-xl lg:rounded-2xl bg-white border border-slate-200 p-2 sm:p-4 shadow-2xs relative flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="border-b border-slate-100 pb-1.5 sm:pb-2.5 mb-2 sm:mb-3">
                      <h3 className="text-[9px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                        WHAT WAS REWARDED
                      </h3>
                    </div>

                    {/* Content List */}
                    <ul className="space-y-1.5 sm:space-y-2">
                      {USED_TO_ITEMS.map((item, idx) => (
                        <li
                          key={idx}
                          className="min-h-[46px] sm:min-h-[48px] p-1.5 sm:p-2.5 rounded-md sm:rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-1.5 sm:gap-2 text-left"
                        >
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-400 shrink-0" />
                          <span className="text-[10px] sm:text-xs text-slate-700 font-medium leading-tight sm:leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CENTER TRANSITION DIVIDER (Desktop only) ── */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center py-2 lg:py-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0a1f3d] to-[#0f4a9b] text-[#f0c96a] font-bold text-[11px] flex items-center justify-center shadow-md border-2 border-white">
                VS
              </div>
            </div>

            {/* ── RIGHT CLIPBOARD: WHAT IB ASKS FOR ── */}
            <div className="col-span-1 lg:col-span-5 relative">
              {/* Clipboard Base */}
              <div className="h-full rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[#0e274c] p-1.5 sm:p-3 shadow-md border border-[#C7A24A]/40 relative flex flex-col justify-between">
                
                {/* Metallic Gold Clip Header */}
                <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-16 sm:w-28 h-4 sm:h-6 bg-gradient-to-b from-[#f7e4a8] via-[#e5be65] to-[#c79836] rounded sm:rounded-md shadow-sm border border-[#C7A24A] flex items-center justify-between px-1.5 sm:px-3 z-20">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#7a5915] shadow-inner" />
                  <div className="w-6 sm:w-10 h-0.5 sm:h-1 bg-[#8c671b]/60 rounded-full" />
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#7a5915] shadow-inner" />
                </div>

                {/* Azure Paper Sheet */}
                <div className="mt-1.5 sm:mt-2 h-[calc(100%-6px)] rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-b from-white to-[#f8fafd] border border-[#0f4a9b]/25 p-2 sm:p-4 shadow-2xs relative flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="border-b border-[#0f4a9b]/15 pb-1.5 sm:pb-2.5 mb-2 sm:mb-3">
                      <h3 className="text-[9px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0f4a9b] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                        WHAT IB ASKS FOR
                      </h3>
                    </div>

                    {/* Content List */}
                    <ul className="space-y-1.5 sm:space-y-2">
                      {IB_ASKS_FOR_ITEMS.map((item, idx) => (
                        <li
                          key={idx}
                          className="min-h-[46px] sm:min-h-[48px] p-1.5 sm:p-2.5 rounded-md sm:rounded-xl bg-white border border-[#0f4a9b]/20 shadow-2xs flex items-center gap-1.5 sm:gap-2 text-left"
                        >
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#0f4a9b] shrink-0" />
                          <span className="text-[10px] sm:text-xs text-[#0a1f3d] font-semibold leading-tight sm:leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Conclusion Plaque */}
        <div className="mt-3.5 sm:mt-5 max-w-2xl mx-auto">
          <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#f8fafd] border border-[#0f4a9b]/15 text-center">
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              The gap is describable, which means it closes quickly once someone names it.{' '}
              <strong className="text-[#0a1f3d]">
                That is most of what the first few sessions do.
              </strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
