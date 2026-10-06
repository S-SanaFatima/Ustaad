import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ClipboardCheck, Sparkles, ChevronRight, AlertTriangle } from 'lucide-react';

interface CriterionItem {
  letter: 'A' | 'B' | 'C' | 'D';
  name: string;
  desc: string;
  hasWarning?: boolean;
  warningLabel?: string;
  bgGradient: string;
  activeBorder: string;
  badgeBg: string;
  badgeText: string;
}

const CRITERIA: CriterionItem[] = [
  {
    letter: 'A',
    name: 'Knowing and understanding',
    desc: 'The content itself, the physics your child can recall and apply. Usually the criterion that is already fine.',
    bgGradient: 'from-slate-50 via-white to-blue-50/30',
    activeBorder: 'border-slate-300',
    badgeBg: 'bg-slate-100 text-slate-800 border-slate-200',
    badgeText: 'Standard',
  },
  {
    letter: 'B',
    name: 'Inquiring and designing',
    desc: 'The research question, the variables, the method. Vague questions cost marks before any data is collected.',
    hasWarning: true,
    warningLabel: 'MARKS LOST',
    bgGradient: 'from-[#fffbf5] via-white to-[#fff5f5]',
    activeBorder: 'border-[#C7A24A]/60',
    badgeBg: 'bg-rose-50 text-rose-600 border-rose-200',
    badgeText: 'Marks Lost',
  },
  {
    letter: 'C',
    name: 'Processing and evaluating',
    desc: 'The data, the analysis, and whether the conclusion actually holds. This is where most science marks quietly go.',
    hasWarning: true,
    warningLabel: 'MARKS LOST',
    bgGradient: 'from-[#fffbf5] via-white to-[#fff5f5]',
    activeBorder: 'border-[#C7A24A]/60',
    badgeBg: 'bg-rose-50 text-rose-600 border-rose-200',
    badgeText: 'Marks Lost',
  },
  {
    letter: 'D',
    name: 'Reflecting on the impacts of science',
    desc: 'The wider context. Often rushed at the end, and usually recoverable with a clear structure.',
    bgGradient: 'from-slate-50 via-white to-blue-50/30',
    activeBorder: 'border-slate-300',
    badgeBg: 'bg-slate-100 text-slate-800 border-slate-200',
    badgeText: 'Standard',
  }
];

export function InteractiveCriterionDecoder3D() {
  const [activeLetter, setActiveLetter] = useState<'A' | 'B' | 'C' | 'D'>('A');

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-white relative overflow-hidden text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[10px] font-extrabold uppercase tracking-widest mb-1.5 shadow-2xs">
            <ClipboardCheck className="h-3.5 w-3.5 text-[#C7A24A]" />
            <span>CRITERION DECODER</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1">
            What <span className="text-[#0f4a9b]">Criterion B and C</span> actually mean
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Four letters appear on every MYP report. Most parents are never told what they measure.
          </p>
        </div>

        {/* ── 4 EXPANDING HORIZONTAL BLADE CARDS ── */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch max-w-4xl mx-auto min-h-[290px] md:min-h-[220px] mb-5">
          {CRITERIA.map((item) => {
            const isActive = activeLetter === item.letter;

            return (
              <div
                key={item.letter}
                onClick={() => setActiveLetter(item.letter)}
                className={`relative rounded-2xl sm:rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between select-none ${
                  isActive
                    ? `md:flex-[3.5] bg-gradient-to-br ${item.bgGradient} ${item.activeBorder} shadow-lg ring-1 ring-black/5`
                    : 'md:flex-1 bg-slate-50/90 hover:bg-slate-100/80 border-slate-200/80 shadow-2xs hover:shadow-xs'
                }`}
              >
                {/* Collapsed State Header for Mobile or Desktop */}
                {!isActive ? (
                  <div className="p-3 sm:p-4 h-full flex flex-row md:flex-col items-center justify-between gap-2">
                    <div className="flex items-center md:flex-col gap-2.5">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center font-black text-sm sm:text-base text-[#0a1f3d]">
                        {item.letter}
                      </span>
                      <span className="font-extrabold text-xs text-[#0a1f3d] md:hidden truncate">
                        {item.name}
                      </span>
                    </div>

                    {/* Vertical label for Desktop collapsed view */}
                    <div className="hidden md:flex flex-col items-center gap-1.5 my-auto">
                      <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
                        Criterion {item.letter}
                      </span>
                    </div>

                    {/* Alert Badge if Marks Lost */}
                    {item.hasWarning ? (
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200 shrink-0">
                        Marks Lost
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold text-slate-400 md:hidden">
                        View
                      </span>
                    )}
                  </div>
                ) : (
                  /* ── EXPANDED BLADE VIEW ── */
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 sm:p-6 flex-1 flex flex-col justify-between text-left h-full"
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200/70">
                        <div className="flex items-center gap-2.5">
                          <span className="w-10 h-10 rounded-xl bg-[#0a1f3d] text-[#f0c96a] font-black text-base flex items-center justify-center shadow-md">
                            {item.letter}
                          </span>
                          <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0f4a9b] block">
                              MYP CRITERION {item.letter}
                            </span>
                            <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] leading-snug">
                              {item.name}
                            </h3>
                          </div>
                        </div>

                        {item.hasWarning && (
                          <span className="text-[10.5px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-50 text-rose-600 border border-rose-200 shadow-2xs shrink-0">
                            MARKS LOST
                          </span>
                        )}
                      </div>

                      {/* Criterion Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium mt-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Navigation Hint */}
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                      <span>Click other letters to compare</span>
                      <span className="text-[#0f4a9b] font-bold flex items-center gap-0.5">
                        Active Criterion <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Insight Plaque */}
        <div className="max-w-3xl mx-auto">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#FEFBF3] to-[#FBF6E8] border border-[#C7A24A]/30 text-center">
            <p className="text-xs sm:text-sm font-semibold text-[#0a1f3d]">
              Most science marks are lost in C, while parents are told their child is "weak at science".{' '}
              <span className="text-[#0f4a9b] font-bold">They are usually weak at one criterion.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
