import React from 'react';
import { TrendingUp } from 'lucide-react';

export function PhysicsDiagnosticApproachSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 border-t border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0f4a9b] inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-100/90 shadow-2xs mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-[#C7A24A]" />
            Our 3-Step Diagnostic Approach
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg mx-auto">
            A targeted methodology designed to isolate gaps, rebuild intuition, and achieve exam mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
          
          {/* Step 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0f4a9b]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a2a6e] text-white font-extrabold text-xs flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  1
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  DIAGNOSE
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-[#0a1f3d] mb-1.5 group-hover:text-[#0f4a9b] transition-colors">
                Diagnostic Baseline
              </h3>
              <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                We isolate whether marks leak from algebraic derivation, conceptual gaps, or IA uncertainty treatment.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0f4a9b]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a2a6e] text-white font-extrabold text-xs flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  2
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  REBUILD
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-[#0a1f3d] mb-1.5 group-hover:text-[#0f4a9b] transition-colors">
                First-Principles Rebuilding
              </h3>
              <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                Complex physics themes, from electromagnetic fields to wave models, are explained with structured mathematical clarity.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0f4a9b]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a2a6e] text-white font-extrabold text-xs flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  3
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  PRECISION
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-[#0a1f3d] mb-1.5 group-hover:text-[#0f4a9b] transition-colors">
                IB-Standard Drills
              </h3>
              <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                Students complete timed past paper questions mapped to exact IB mark schemes and criteria.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
