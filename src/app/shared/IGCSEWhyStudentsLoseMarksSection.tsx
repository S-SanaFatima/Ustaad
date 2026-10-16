import React from 'react';
import { motion } from 'motion/react';

/* ── 1. VECTOR 1: Magnifying Glass Fine-Print Breakdown (Misread) ── */
function MisreadVector() {
  return (
    <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] flex items-center justify-center select-none mb-3">
      <svg viewBox="0 0 88 88" className="w-full h-full drop-shadow-[0_4px_10px_rgba(15,74,155,0.12)]" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Exam Paper Sheet */}
        <rect x="14" y="12" width="46" height="56" rx="6" fill="#ffffff" stroke="#0a2558" strokeWidth="2.5" />
        <line x1="22" y1="24" x2="48" y2="24" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="32" x2="42" y2="32" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="40" x2="38" y2="40" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="48" x2="46" y2="48" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />

        {/* Magnifying Glass with Keyword Alert */}
        <g transform="translate(32, 28)">
          <circle cx="22" cy="22" r="18" fill="#eff6ff" stroke="#0a2558" strokeWidth="3" />
          <circle cx="22" cy="22" r="14" fill="#dbeafe" opacity="0.6" />
          
          <circle cx="22" cy="22" r="6" stroke="#ef4444" strokeWidth="2" />
          <circle cx="22" cy="22" r="2" fill="#ef4444" />

          <line x1="35" y1="35" x2="48" y2="48" stroke="#0a2558" strokeWidth="4" strokeLinecap="round" />
          <line x1="35" y1="35" x2="48" y2="48" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

/* ── 2. VECTOR 2: Structured Working & Pen (Wrote it Wrong) ── */
function WroteWrongVector() {
  return (
    <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] flex items-center justify-center select-none mb-3">
      <svg viewBox="0 0 88 88" className="w-full h-full drop-shadow-[0_4px_10px_rgba(15,74,155,0.12)]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="16" width="64" height="52" rx="7" fill="#ffffff" stroke="#0a2558" strokeWidth="2.5" />
        
        <text x="20" y="32" fill="#0f4a9b" fontSize="10" fontFamily="monospace" fontWeight="bold">2x + 5 = 19</text>
        <text x="20" y="44" fill="#64748b" fontSize="10" fontFamily="monospace">2x = 14</text>
        
        <line x1="48" y1="42" x2="68" y2="42" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        <path d="M 58,36 L 64,42 L 58,48" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        <g transform="translate(48, 10)">
          <path d="M 12,2 L 20,10 L 8,26 L 0,22 Z" fill="#2563eb" stroke="#0a2558" strokeWidth="2" />
          <path d="M 0,22 L 8,26 L 4,32 Z" fill="#f59e0b" stroke="#0a2558" strokeWidth="1.5" />
          <circle cx="5" cy="28" r="0.8" fill="#0a2558" />
        </g>
      </svg>
    </div>
  );
}

/* ── 3. VECTOR 3: Stopwatch & Escaping Sand/Pacing (Time Ran Out) ── */
function TimeOutVector() {
  return (
    <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] flex items-center justify-center select-none mb-3">
      <svg viewBox="0 0 88 88" className="w-full h-full drop-shadow-[0_4px_10px_rgba(15,74,155,0.12)]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="44" cy="48" r="28" fill="#ffffff" stroke="#0a2558" strokeWidth="3" />
        <circle cx="44" cy="48" r="23" fill="#fef2f2" />

        <rect x="41" y="12" width="6" height="6" rx="1.5" fill="#0a2558" />
        <rect x="38" y="9" width="12" height="3" rx="1.5" fill="#ef4444" />

        <path d="M 44,48 L 44,30 A 18,18 0 0,1 59,42 Z" fill="#fecaca" stroke="#ef4444" strokeWidth="1.5" />
        
        <circle cx="44" cy="48" r="3" fill="#0a2558" />
        <line x1="44" y1="48" x2="60" y2="36" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
        
        <circle cx="44" cy="28" r="1.5" fill="#0a2558" />
        <circle cx="64" cy="48" r="1.5" fill="#0a2558" />
        <circle cx="44" cy="68" r="1.5" fill="#0a2558" />
        <circle cx="24" cy="48" r="1.5" fill="#0a2558" />
      </svg>
    </div>
  );
}

/* ── 4. VECTOR 4: Synaptic Brain Under Pressure (Mind Blank) ── */
function MindBlankVector() {
  return (
    <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] flex items-center justify-center select-none mb-3">
      <svg viewBox="0 0 88 88" className="w-full h-full drop-shadow-[0_4px_10px_rgba(15,74,155,0.12)]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="44" cy="44" r="28" fill="#f5f3ff" stroke="#0a2558" strokeWidth="2.5" />
        
        <path
          d="M 42,26 C 36,24 30,26 26,30 C 22,34 22,40 24,44 C 20,48 22,54 26,58 C 30,62 36,62 42,60 Z"
          fill="#818cf8"
          stroke="#0a2558"
          strokeWidth="2.2"
        />
        
        <path
          d="M 46,26 C 52,24 58,26 62,30 C 66,34 66,40 64,44 C 68,48 66,54 62,58 C 58,62 52,62 46,60 Z"
          fill="#c7d2fe"
          stroke="#0a2558"
          strokeWidth="2.2"
        />

        <g transform="translate(36, 36)">
          <path d="M 8,0 L 10,6 L 16,8 L 10,10 L 8,16 L 6,10 L 0,8 L 6,6 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

export default function IGCSEWhyStudentsLoseMarksSection() {
  const diagnostics = [
    {
      badge: "Common Trap · -3 to 5 Marks",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      title: "Misread the Question",
      desc: "Read it one way, but the mark scheme demanded a specific command-word response.",
      fix: "Command-Word Dissection",
      Vector: MisreadVector,
    },
    {
      badge: "Method Loss · -2 to 4 Marks",
      badgeColor: "bg-rose-50 text-rose-800 border-rose-200",
      title: "Wrote it Wrong",
      desc: "Content was strong, but incomplete working and poor layout cost essential method marks.",
      fix: "Examiner-Standard Working",
      Vector: WroteWrongVector,
    },
    {
      badge: "Pacing Issue · -6 to 10 Marks",
      badgeColor: "bg-orange-50 text-orange-800 border-orange-200",
      title: "Time Ran Out",
      desc: "Early 1-mark questions ate the clock, leaving heavy 6-mark questions rushed or skipped.",
      fix: "1-Mark-Per-Minute Pacing",
      Vector: TimeOutVector,
    },
    {
      badge: "Exam Stress · -5 to 8 Marks",
      badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
      title: "Mind Went Blank",
      desc: "Recall held during revision, but cracked under high-stakes exam room pressure.",
      fix: "Pressure-Tested Timed Drills",
      Vector: MindBlankVector,
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#ffffff] border-b border-gray-100 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-6 sm:mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-3 shadow-xs">
            <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.16em]">
              Examiner Diagnostics
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-2 leading-tight tracking-tight">
            Why Strong Students <span className="text-[#0f4a9b]">Lose Marks</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
            Most lost marks have nothing to do with knowledge.
          </p>
        </div>

        {/* ── 4 EXAMINER DIAGNOSTIC CARDS (HORIZONTAL SCROLL ON MOBILE, 4-COL GRID ON DESKTOP) ── */}
        <div className="flex overflow-x-auto pb-4 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
          {diagnostics.map((item, idx) => {
            const VectorGraphic = item.Vector;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="relative bg-[#ffffff] border-2 border-[#0a2558]/10 hover:border-[#0f4a9b]/40 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-[0_8px_25px_rgba(15,74,155,0.05)] hover:shadow-[0_16px_35px_rgba(15,74,155,0.12)] hover:-translate-y-1 transition-all duration-300 group shrink-0 w-[78vw] max-w-[275px] sm:w-auto snap-center"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent rounded-full" />

                {/* Mark Loss Diagnostic Badge */}
                <span className={`text-[10.5px] font-bold border px-2.5 py-0.5 rounded-full mb-3.5 ${item.badgeColor}`}>
                  {item.badge}
                </span>

                {/* Custom Vector Illustration */}
                <div className="group-hover:scale-105 transition-transform duration-200">
                  <VectorGraphic />
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-black text-[#0a1f3d] mb-2 leading-snug group-hover:text-[#0f4a9b] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-normal mb-4 flex-1">
                  {item.desc}
                </p>

                {/* "How Ustaad Fixes It" Pill Tag */}
                <div className="w-full pt-3 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0f4a9b] bg-[#0f4a9b]/6 border border-[#0f4a9b]/12 px-2.5 py-1 rounded-md w-full justify-center text-center">
                    ✓ {item.fix}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint (Clean text only, no dots, no arrows) */}
        <div className="sm:hidden text-center mt-3 text-xs font-semibold text-gray-400 tracking-wide">
          Swipe to see more
        </div>

      </div>
    </section>
  );
}

