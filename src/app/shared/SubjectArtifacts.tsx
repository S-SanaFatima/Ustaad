import React from 'react';
import { motion } from 'motion/react';

/* ── 1. Mathematics: Animated Coordinate Grid & Sine Wave ── */
export function MathsArtifact() {
  return (
    <div className="relative w-full h-18 sm:h-20 rounded-xl bg-blue-50/60 border border-blue-100/90 overflow-hidden flex items-center justify-center select-none">
      {/* Coordinate Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.06)_1px,transparent_1px)] bg-[size:12px_12px]" />
      {/* Coordinate Axes */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-[#0f4a9b]/25" />
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#0f4a9b]/25" />
      
      {/* Dynamic Sine Wave Path */}
      <svg viewBox="0 0 200 60" className="w-full h-full relative z-10">
        <motion.path
          d="M 10 30 Q 35 5, 60 30 T 110 30 T 160 30 T 190 30"
          fill="none"
          stroke="#0f4a9b"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{
            d: [
              "M 10 30 Q 35 5, 60 30 T 110 30 T 160 30 T 190 30",
              "M 10 30 Q 35 55, 60 30 T 110 30 T 160 30 T 190 30",
              "M 10 30 Q 35 5, 60 30 T 110 30 T 160 30 T 190 30",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Animated Tangent Cursor Blip */}
        <motion.circle
          r="4"
          fill="#C7A24A"
          stroke="#ffffff"
          strokeWidth="1.5"
          animate={{
            cx: [20, 60, 110, 160, 185],
            cy: [16, 30, 30, 30, 22],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Formula badges */}
      <div className="absolute top-2 right-2.5 font-mono text-[9.5px] font-bold text-[#0f4a9b] bg-white/90 px-1.5 py-0.5 rounded border border-[#0f4a9b]/15 shadow-2xs">
        f(x) = sin θ
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[8.5px] font-bold text-[#C7A24A] bg-white/90 px-1.5 py-0.5 rounded border border-[#C7A24A]/25">
        ∫ πr²
      </div>
    </div>
  );
}

/* ── 2. English: Calligraphic Ink Wave, Floating Quotes & Meter Rhythm ── */
export function EnglishArtifact() {
  return (
    <div className="relative w-full h-18 sm:h-20 rounded-xl bg-indigo-50/60 border border-indigo-100/90 overflow-hidden flex items-center justify-center select-none">
      {/* Subtle Lined Parchment Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:100%_12px]" />
      
      {/* Floating Decorative Quotation Marks */}
      <div className="absolute left-3 top-1 text-2xl font-serif font-black text-indigo-400/25 select-none">
        “
      </div>
      <div className="absolute right-3 bottom-1 text-2xl font-serif font-black text-indigo-400/25 select-none">
        ”
      </div>

      {/* Poetic Meter Rhythm / Stressed Syllable Bars */}
      <div className="flex items-center gap-1.5 z-10">
        {[
          { height: 18, delay: 0 },
          { height: 28, delay: 0.15 },
          { height: 16, delay: 0.3 },
          { height: 32, delay: 0.45 },
          { height: 20, delay: 0.6 },
          { height: 26, delay: 0.75 },
        ].map((bar, idx) => (
          <motion.div
            key={idx}
            className="w-1.5 rounded-full bg-gradient-to-t from-indigo-600 to-indigo-400 shadow-xs"
            animate={{
              height: [bar.height * 0.5, bar.height, bar.height * 0.5],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: bar.delay,
            }}
          />
        ))}
      </div>

      {/* Dynamic Quill Writing Arc */}
      <svg viewBox="0 0 160 40" className="w-full h-full absolute inset-0 pointer-events-none z-10">
        <motion.path
          d="M 20 28 C 45 14, 75 34, 105 20 C 125 12, 140 24, 150 20"
          fill="none"
          stroke="#4f46e5"
          strokeWidth="1.6"
          strokeDasharray="3 3"
          animate={{
            strokeDashoffset: [0, -24],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      {/* Badges */}
      <div className="absolute top-2 right-2.5 font-mono text-[9.5px] font-bold text-indigo-600 bg-white/90 px-1.5 py-0.5 rounded border border-indigo-200/40 shadow-2xs">
        Iambic Meter
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[8.5px] font-bold text-[#C7A24A] bg-white/90 px-1.5 py-0.5 rounded border border-[#C7A24A]/25">
        Prose & Analysis
      </div>
    </div>
  );
}

/* ── 3. Physics: Quantum Orbit & Orbiting Electron Nodes ── */
export function PhysicsArtifact() {
  return (
    <div className="relative w-full h-18 sm:h-20 rounded-xl bg-blue-50/50 border border-blue-200/60 overflow-hidden flex items-center justify-center select-none">
      {/* Radial field gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)]" />
      
      {/* Center Nucleus */}
      <div className="w-4.5 h-4.5 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1e40af] shadow-[0_0_12px_rgba(37,99,235,0.6)] flex items-center justify-center z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </div>

      {/* Orbit 1 with Electron Node */}
      <motion.div
        className="absolute w-26 h-11 rounded-[50%] border border-[#2563eb]/45"
        style={{ transform: 'rotate(-25deg)' }}
        animate={{ rotate: [-25, 335] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#2563eb] shadow-[0_0_6px_#2563eb] -translate-y-1.5 translate-x-11" />
      </motion.div>

      {/* Orbit 2 with Counter-Orbiting Electron */}
      <motion.div
        className="absolute w-26 h-11 rounded-[50%] border border-[#38bdf8]/55"
        style={{ transform: 'rotate(45deg)' }}
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8] -translate-y-1.5 translate-x-11" />
      </motion.div>

      {/* Physics tags */}
      <div className="absolute top-2 right-2.5 font-mono text-[9.5px] font-bold text-[#2563eb] bg-white/90 px-1.5 py-0.5 rounded border border-[#2563eb]/20 shadow-2xs">
        E = mc²
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[8.5px] font-bold text-gray-500 bg-white/90 px-1.5 py-0.5 rounded border border-gray-200">
        F = ma
      </div>
    </div>
  );
}

/* ── 4. Chemistry: Glass Reaction Beaker & Effervescent Bubbles ── */
export function ChemistryArtifact() {
  return (
    <div className="relative w-full h-18 sm:h-20 rounded-xl bg-teal-50/60 border border-teal-100/90 overflow-hidden flex items-center justify-center select-none">
      {/* Molecular dot matrix */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0d9488_1px,transparent_1px)] bg-[size:12px_12px]" />
      
      {/* Flask Outline & Liquid */}
      <div className="relative w-11 h-15 flex flex-col items-center justify-end z-10">
        {/* Flask Neck */}
        <div className="w-3 h-4.5 border-l-2 border-r-2 border-[#0d9488]/70 bg-transparent -mb-0.5 z-10" />
        {/* Flask Body */}
        <div className="w-11 h-9 border-2 border-[#0d9488] rounded-b-2xl rounded-t-xs relative overflow-hidden bg-white/40 shadow-sm flex items-end">
          {/* Animated Liquid Level */}
          <motion.div
            className="w-full bg-gradient-to-t from-[#0d9488] to-[#14b8a6]/80 rounded-b-xl"
            animate={{ height: ['55%', '72%', '55%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Bubbles */}
          <motion.div
            className="absolute bottom-1 left-2.5 w-1.5 h-1.5 rounded-full bg-white/95"
            animate={{ y: [-2, -18], opacity: [0.9, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute bottom-1 right-3 w-1.5 h-1.5 rounded-full bg-white/95"
            animate={{ y: [-1, -20], opacity: [0.9, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
          />
        </div>
      </div>

      {/* Floating Benzene Ring Graphic */}
      <svg viewBox="0 0 40 40" className="w-6 h-6 absolute left-3 top-2.5 text-[#0d9488]/35">
        <polygon points="20,2 35,11 35,29 20,38 5,29 5,11" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>

      {/* Chemistry tags */}
      <div className="absolute top-2 right-2.5 font-mono text-[9.5px] font-bold text-[#0d9488] bg-white/90 px-1.5 py-0.5 rounded border border-[#0d9488]/20 shadow-2xs">
        pH: 7.0
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[8.5px] font-bold text-gray-500 bg-white/90 px-1.5 py-0.5 rounded border border-gray-200">
        PV = nRT
      </div>
    </div>
  );
}

/* ── 5. Biology: Twisting DNA Double-Helix ── */
export function BiologyArtifact() {
  return (
    <div className="relative w-full h-18 sm:h-20 rounded-xl bg-emerald-50/60 border border-emerald-100/90 overflow-hidden flex items-center justify-center select-none">
      {/* Cellular micro texture */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#059669_1px,transparent_1px)] bg-[size:10px_10px]" />
      
      {/* Animated DNA Base Pairs */}
      <div className="flex items-center gap-3 z-10">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-between h-12 w-2"
            animate={{
              scaleY: [0.25, 1, 0.25],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.22,
            }}
          >
            {/* Top Node */}
            <div className="w-2 h-2 rounded-full bg-[#059669] shadow-[0_0_6px_rgba(5,150,105,0.4)]" />
            {/* Hydrogen Bond Rung */}
            <div className="w-0.5 h-full bg-gradient-to-b from-[#059669] via-[#10b981]/50 to-[#34d399]" />
            {/* Bottom Node */}
            <div className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
          </motion.div>
        ))}
      </div>

      {/* Biology tags */}
      <div className="absolute top-2 right-2.5 font-mono text-[9.5px] font-bold text-[#059669] bg-white/90 px-1.5 py-0.5 rounded border border-[#059669]/20 shadow-2xs">
        DNA: [A·T]
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[8.5px] font-bold text-gray-500 bg-white/90 px-1.5 py-0.5 rounded border border-gray-200">
        Cell Growth
      </div>
    </div>
  );
}

/* ── 6. Business Studies: Ascending Financial Growth Chart & Cashflow Sparkline ── */
export function BusinessArtifact() {
  return (
    <div className="relative w-full h-18 sm:h-20 rounded-xl bg-cyan-50/60 border border-cyan-100/90 overflow-hidden flex items-center justify-center select-none">
      {/* FinTech Dot Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(8,145,178,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.06)_1px,transparent_1px)] bg-[size:10px_10px]" />

      {/* Dynamic Animated Bar Chart Columns */}
      <div className="flex items-end gap-2.5 h-12 z-10">
        {[
          { baseHeight: 18, delay: 0 },
          { baseHeight: 28, delay: 0.15 },
          { baseHeight: 38, delay: 0.3 },
          { baseHeight: 46, delay: 0.45 },
        ].map((col, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <motion.div
              className="w-4 rounded-t-md bg-gradient-to-t from-cyan-600 via-cyan-500 to-sky-400 shadow-xs"
              animate={{
                height: [col.baseHeight * 0.6, col.baseHeight, col.baseHeight * 0.6],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: col.delay,
              }}
            />
          </div>
        ))}
      </div>

      {/* Upward Growth Trendline */}
      <svg viewBox="0 0 140 40" className="w-full h-full absolute inset-0 pointer-events-none z-10">
        <motion.path
          d="M 25 32 L 55 24 L 85 16 L 118 6"
          fill="none"
          stroke="#C7A24A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.circle
          cx="118"
          cy="6"
          r="3"
          fill="#C7A24A"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>

      {/* Business tags */}
      <div className="absolute top-2 right-2.5 font-mono text-[9.5px] font-bold text-cyan-700 bg-white/90 px-1.5 py-0.5 rounded border border-cyan-200/50 shadow-2xs">
        ROI: +28%
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[8.5px] font-bold text-[#C7A24A] bg-white/90 px-1.5 py-0.5 rounded border border-[#C7A24A]/25">
        Break-Even
      </div>
    </div>
  );
}

/* ── 7. Economics: Supply & Demand Curves with Dynamic Equilibrium Point ── */
export function EconomicsArtifact() {
  return (
    <div className="relative w-full h-18 sm:h-20 rounded-xl bg-violet-50/60 border border-violet-100/90 overflow-hidden flex items-center justify-center select-none">
      {/* Cartesian axes */}
      <div className="absolute left-6 bottom-3.5 right-4 h-px bg-violet-300/60" />
      <div className="absolute left-6 bottom-3.5 top-3 w-px bg-violet-300/60" />

      {/* Supply & Demand Curves */}
      <svg viewBox="0 0 160 60" className="w-full h-full relative z-10">
        {/* Demand Curve (D: Downward Sloping) */}
        <motion.path
          d="M 30 14 Q 75 32, 130 48"
          fill="none"
          stroke="#7c3aed"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <text x="133" y="50" fill="#7c3aed" fontSize="7" fontWeight="bold" fontFamily="sans-serif">D</text>

        {/* Supply Curve (S: Upward Sloping) with oscillating shift */}
        <motion.path
          d="M 30 46 Q 75 30, 130 14"
          fill="none"
          stroke="#0f4a9b"
          strokeWidth="2.2"
          strokeLinecap="round"
          animate={{
            d: [
              "M 30 46 Q 75 30, 130 14",
              "M 38 46 Q 83 30, 138 14",
              "M 30 46 Q 75 30, 130 14",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <text x="133" y="16" fill="#0f4a9b" fontSize="7" fontWeight="bold" fontFamily="sans-serif">S</text>

        {/* Equilibrium Point E */}
        <motion.circle
          r="3.5"
          fill="#C7A24A"
          stroke="#ffffff"
          strokeWidth="1.2"
          animate={{
            cx: [78, 83, 78],
            cy: [30, 29, 30],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Economics tags */}
      <div className="absolute top-2 right-2.5 font-mono text-[9.5px] font-bold text-violet-700 bg-white/90 px-1.5 py-0.5 rounded border border-violet-200/50 shadow-2xs">
        Equilibrium E*
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[8.5px] font-bold text-[#0f4a9b] bg-white/90 px-1.5 py-0.5 rounded border border-[#0f4a9b]/20">
        Supply & Demand
      </div>
    </div>
  );
}

/* ── 8. Statistics: Dynamic Gaussian Bell Curve, Sweeping Scanner & Data Samples ── */
export function StatisticsArtifact() {
  return (
    <div className="relative w-full h-18 sm:h-20 rounded-xl bg-amber-50/50 border border-amber-100/90 overflow-hidden flex items-center justify-center select-none">
      {/* Probability Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,119,6,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(217,119,6,0.05)_1px,transparent_1px)] bg-[size:10px_10px]" />

      {/* Baseline */}
      <div className="absolute left-4 right-4 bottom-3 h-px bg-amber-300/80" />

      {/* Normal Distribution Bell Curve with Dynamic Morph & Scanner */}
      <svg viewBox="0 0 160 50" className="w-full h-full relative z-10">
        <defs>
          <linearGradient id="statsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C7A24A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C7A24A" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Dynamic Morphing Shaded Area under Bell Curve */}
        <motion.path
          d="M 15 39 Q 55 39, 70 22 Q 80 6, 90 22 Q 105 39, 145 39 Z"
          fill="url(#statsGrad)"
          animate={{
            d: [
              "M 15 39 Q 55 39, 70 22 Q 80 6, 90 22 Q 105 39, 145 39 Z",
              "M 15 39 Q 60 39, 72 16 Q 80 3, 88 16 Q 100 39, 145 39 Z",
              "M 15 39 Q 52 39, 68 25 Q 80 10, 92 25 Q 108 39, 145 39 Z",
              "M 15 39 Q 55 39, 70 22 Q 80 6, 90 22 Q 105 39, 145 39 Z",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Dynamic Morphing Bell Curve Stroke */}
        <motion.path
          d="M 15 39 Q 55 39, 70 22 Q 80 6, 90 22 Q 105 39, 145 39"
          fill="none"
          stroke="#b45309"
          strokeWidth="2.2"
          strokeLinecap="round"
          animate={{
            d: [
              "M 15 39 Q 55 39, 70 22 Q 80 6, 90 22 Q 105 39, 145 39",
              "M 15 39 Q 60 39, 72 16 Q 80 3, 88 16 Q 100 39, 145 39",
              "M 15 39 Q 52 39, 68 25 Q 80 10, 92 25 Q 108 39, 145 39",
              "M 15 39 Q 55 39, 70 22 Q 80 6, 90 22 Q 105 39, 145 39",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated Sweeping Standard Deviation Scanner Line */}
        <motion.line
          y1="5"
          y2="39"
          stroke="#0f4a9b"
          strokeWidth="1.5"
          strokeDasharray="2 2"
          animate={{
            x1: [48, 112, 48],
            x2: [48, 112, 48],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated Sweeping Scanner Node */}
        <motion.circle
          r="3"
          fill="#0f4a9b"
          stroke="#ffffff"
          strokeWidth="1"
          animate={{
            cx: [48, 112, 48],
            cy: [34, 34, 34],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Dynamic Peak Node at Mean μ */}
        <motion.circle
          cx="80"
          r="3.5"
          fill="#C7A24A"
          stroke="#ffffff"
          strokeWidth="1.2"
          animate={{
            cy: [6, 3, 10, 6],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating Sample Data Nodes */}
        {[
          { cx: 38, cy: 37, delay: 0 },
          { cx: 62, cy: 24, delay: 0.5 },
          { cx: 98, cy: 24, delay: 1 },
          { cx: 122, cy: 37, delay: 1.5 },
        ].map((pt, idx) => (
          <motion.circle
            key={idx}
            cx={pt.cx}
            cy={pt.cy}
            r="2"
            fill="#d97706"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: pt.delay,
            }}
          />
        ))}
      </svg>

      {/* Badges */}
      <div className="absolute top-1.5 right-2 font-mono text-[9px] font-bold text-amber-800 bg-white/90 px-1.5 py-0.5 rounded border border-amber-200/50 shadow-2xs">
        Normal Dist.
      </div>
      <div className="absolute bottom-1.5 left-2 font-mono text-[8px] font-bold text-gray-600 bg-white/90 px-1.5 py-0.5 rounded border border-gray-200">
        μ ± 1.96σ
      </div>
    </div>
  );
}

/* ── 9. Engineering: Meshing Mechanical CAD Gears (Export for reuse) ── */
export function EngineeringArtifact() {
  return (
    <div className="relative w-full h-22 rounded-xl bg-amber-50/50 border border-amber-100/90 overflow-hidden flex items-center justify-center select-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(193,123,47,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(193,123,47,0.06)_1px,transparent_1px)] bg-[size:10px_10px]" />
      
      <div className="relative w-28 h-18 flex items-center justify-center z-10">
        <motion.div
          className="absolute -left-1 w-11 h-11 rounded-full border-3 border-dashed border-[#c17b2f] flex items-center justify-center shadow-xs"
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-3.5 h-3.5 rounded-full border-2 border-[#c17b2f] bg-white/90 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c17b2f]" />
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-1 w-9 h-9 rounded-full border-3 border-dashed border-[#d97706] flex items-center justify-center shadow-xs"
          animate={{ rotate: -360 }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-3 h-3 rounded-full border-2 border-[#d97706] bg-white/90 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#d97706]" />
          </div>
        </motion.div>
      </div>

      <div className="absolute top-2 right-2.5 font-mono text-[9.5px] font-bold text-[#c17b2f] bg-white/90 px-1.5 py-0.5 rounded border border-[#c17b2f]/20 shadow-2xs">
        CAD: ±0.01mm
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[8.5px] font-bold text-gray-500 bg-white/90 px-1.5 py-0.5 rounded border border-gray-200">
        Torque & Load
      </div>
    </div>
  );
}

/* ── 10. Exam Prep: Timed Stopwatch & Grade 9 / A* Seal ── */
export function ExamPrepArtifact() {
  return (
    <div className="relative w-full h-22 rounded-xl bg-amber-50/40 border border-amber-200/60 overflow-hidden flex items-center justify-center select-none">
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <div className="w-18 h-18 rounded-full border border-[#C7A24A]" />
        <div className="w-12 h-12 rounded-full border border-dashed border-[#C7A24A]" />
      </div>

      <div className="relative flex items-center gap-3.5 z-10">
        <div className="relative w-10 h-10 rounded-full border-2 border-[#C7A24A] bg-white shadow-sm flex items-center justify-center">
          <div className="absolute -top-1.5 w-2.5 h-1 bg-[#C7A24A] rounded-xs" />
          <motion.div
            className="w-0.5 h-4 bg-[#C7A24A] origin-bottom rounded-full -translate-y-1.5"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[#0a1f3d]" />
        </div>

        <div className="flex flex-col items-center justify-center px-2.5 py-1 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b38728] text-white shadow-[0_4px_12px_rgba(212,175,55,0.3)]">
          <span className="text-[13px] font-black leading-none">A*</span>
          <span className="text-[7.5px] font-extrabold tracking-widest uppercase mt-0.5">GRADE 9</span>
        </div>
      </div>

      <div className="absolute top-2 right-2.5 font-mono text-[9.5px] font-bold text-[#b38728] bg-white/90 px-1.5 py-0.5 rounded border border-[#C7A24A]/30 shadow-2xs">
        TIMER: 45:00
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[8.5px] font-bold text-gray-500 bg-white/90 px-1.5 py-0.5 rounded border border-gray-200">
        Past Papers
      </div>
    </div>
  );
}
