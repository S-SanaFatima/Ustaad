import { useState } from 'react';
import { motion } from 'motion/react';
import { GradientHeadingText } from './GradientHeadingText';

/* ── 3D EMBLEM 1: 3D Quantum Filament Bulb & Orbiting Practice Rings ── */
function Bulb3DEmblem({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Glow */}
      <div
        className={`absolute inset-0 bg-amber-500/25 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-130' : 'opacity-45 scale-95'
        }`}
      />

      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="blbGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#fef08a" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="blbFilamentGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#fde047" />
            <stop offset="80%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <linearGradient id="blbMetalBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <filter id="blbShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#f59e0b" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Orbiting Question / Method Practice Rings */}
        <motion.ellipse
          cx="60"
          cy="52"
          rx="50"
          ry="18"
          fill="none"
          stroke="url(#blbFilamentGold)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          opacity={isHovered ? 0.9 : 0.6}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: isHovered ? 6 : 12,
            ease: 'linear',
          }}
          style={{ originX: '60px', originY: '52px' }}
        />

        {/* 3D Bulb Body */}
        <motion.g
          filter="url(#blbShadow)"
          animate={{
            y: isHovered ? [-4, 4, -4] : [-2, 2, -2],
          }}
          transition={{
            repeat: Infinity,
            duration: isHovered ? 2.2 : 3.8,
            ease: 'easeInOut',
          }}
        >
          {/* Glass Dome */}
          <path
            d="M 60 18 C 42 18, 32 32, 32 48 C 32 60, 42 70, 46 80 L 74 80 C 78 70, 88 60, 88 48 C 88 32, 78 18, 60 18 Z"
            fill="url(#blbGlassGrad)"
            stroke="#fde047"
            strokeWidth="1.6"
          />

          {/* Glowing Tungsten Core */}
          <motion.path
            d="M 50 56 L 56 36 L 64 36 L 70 56"
            fill="none"
            stroke="url(#blbFilamentGold)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              opacity: [0.7, 1, 0.7],
              strokeWidth: isHovered ? [2, 2.6, 2] : [1.8, 2.2, 1.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: 'easeInOut',
            }}
          />

          {/* Filament Sparkle Node */}
          <circle cx="60" cy="36" r="3" fill="#ffffff" />

          {/* Screw Base Collar */}
          <rect x="46" y="80" width="28" height="5" rx="1.5" fill="url(#blbMetalBase)" stroke="#94a3b8" strokeWidth="0.8" />
          <rect x="48" y="86" width="24" height="4" rx="1.5" fill="url(#blbMetalBase)" stroke="#94a3b8" strokeWidth="0.8" />
          <rect x="50" y="91" width="20" height="4" rx="1.5" fill="url(#blbMetalBase)" stroke="#94a3b8" strokeWidth="0.8" />
          <polygon points="53,95 67,95 64,100 56,100" fill="#0f172a" />
        </motion.g>

        {/* Floating Idea Spark */}
        <motion.g
          animate={{
            y: [-3, 3, -3],
            scale: [0.9, 1.2, 0.9],
          }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <polygon points="98,22 101,28 107,31 101,34 98,40 95,34 89,31 95,28" fill="#fde047" />
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 3D EMBLEM 2: 3D Titanium & Gold Adaptive Calibration Equalizer ── */
function Sliders3DEmblem({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Glow */}
      <div
        className={`absolute inset-0 bg-blue-500/25 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-130' : 'opacity-45 scale-95'
        }`}
      />

      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="eqPanelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="eqGoldKnob" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#fef08a" />
            <stop offset="70%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <filter id="eqShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0f4a9b" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* 3D Equalizer Console Body */}
        <motion.g
          filter="url(#eqShadow)"
          animate={{
            y: isHovered ? [-4, 4, -4] : [-2, 2, -2],
          }}
          transition={{
            repeat: Infinity,
            duration: isHovered ? 2.2 : 3.8,
            ease: 'easeInOut',
          }}
        >
          {/* Main Beveled Console Plate */}
          <rect x="18" y="24" width="84" height="72" rx="16" fill="url(#eqPanelGrad)" stroke="#38bdf8" strokeWidth="1.4" />

          {/* Track 1 (Left) */}
          <line x1="36" y1="36" x2="36" y2="84" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
          {/* Track 2 (Center) */}
          <line x1="60" y1="36" x2="60" y2="84" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
          {/* Track 3 (Right) */}
          <line x1="84" y1="36" x2="84" y2="84" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

          {/* Active Level Fills */}
          <line x1="36" y1="62" x2="36" y2="84" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="44" x2="60" y2="84" stroke="#C7A24A" strokeWidth="3" strokeLinecap="round" />
          <line x1="84" y1="70" x2="84" y2="84" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />

          {/* Slider 1 Knob (Animated Pace Adjustment) */}
          <motion.g
            animate={{
              y: isHovered ? [-6, 6, -6] : [-3, 3, -3],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <rect x="28" y="58" width="16" height="8" rx="2.5" fill="url(#eqGoldKnob)" stroke="#ffffff" strokeWidth="0.8" />
            <line x1="32" y1="62" x2="40" y2="62" stroke="#78350f" strokeWidth="1" strokeLinecap="round" />
          </motion.g>

          {/* Slider 2 Knob */}
          <motion.g
            animate={{
              y: isHovered ? [8, -8, 8] : [4, -4, 4],
            }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          >
            <rect x="52" y="40" width="16" height="8" rx="2.5" fill="url(#eqGoldKnob)" stroke="#ffffff" strokeWidth="0.8" />
            <line x1="56" y1="44" x2="64" y2="44" stroke="#78350f" strokeWidth="1" strokeLinecap="round" />
          </motion.g>

          {/* Slider 3 Knob */}
          <motion.g
            animate={{
              y: isHovered ? [-5, 5, -5] : [-2, 2, -2],
            }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          >
            <rect x="76" y="66" width="16" height="8" rx="2.5" fill="url(#eqGoldKnob)" stroke="#ffffff" strokeWidth="0.8" />
            <line x1="80" y1="70" x2="88" y2="70" stroke="#78350f" strokeWidth="1" strokeLinecap="round" />
          </motion.g>
        </motion.g>

        {/* Floating Calibration Spark */}
        <motion.circle
          cx="100"
          cy="26"
          r="4"
          fill="#38bdf8"
          stroke="#ffffff"
          strokeWidth="1"
          animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

/* ── 3D EMBLEM 3: 3D Concentric Feedback Radar & 24K Gold Verified Check ── */
function Feedback3DEmblem({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Glow */}
      <div
        className={`absolute inset-0 bg-emerald-500/25 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-130' : 'opacity-45 scale-95'
        }`}
      />

      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="fbCheckGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#fef08a" />
            <stop offset="70%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <linearGradient id="fbShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#0a1f3d" />
          </linearGradient>

          <filter id="fbShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#059669" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Expanding Feedback Radar Pulse Rings */}
        <motion.circle
          cx="60"
          cy="60"
          r="48"
          fill="none"
          stroke="#34d399"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{
            scale: [0.85, 1.15, 0.85],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: 'easeInOut',
          }}
          style={{ originX: '60px', originY: '60px' }}
        />

        <motion.circle
          cx="60"
          cy="60"
          r="38"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.2"
          opacity="0.6"
        />

        {/* 3D Verified Check Shield Core */}
        <motion.g
          filter="url(#fbShadow)"
          animate={{
            y: isHovered ? [-4, 4, -4] : [-2, 2, -2],
            scale: isHovered ? [1, 1.05, 1] : [1, 1.02, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: isHovered ? 2.2 : 3.8,
            ease: 'easeInOut',
          }}
        >
          {/* Star-Shaped Precision Verification Badge */}
          <path
            d="M 60 26 L 68 36 L 82 36 L 88 48 L 100 54 L 98 68 L 104 80 L 94 88 L 92 102 L 78 102 L 68 112 L 60 106 L 52 112 L 42 102 L 28 102 L 26 88 L 16 80 L 22 68 L 20 54 L 32 48 L 38 36 L 52 36 Z"
            fill="url(#fbShieldGrad)"
            stroke="url(#fbCheckGold)"
            strokeWidth="1.8"
          />

          {/* Inner Inset Disc */}
          <circle cx="60" cy="67" r="26" fill="#071b33" stroke="url(#fbCheckGold)" strokeWidth="1.4" />

          {/* 3D Bold Checkmark */}
          <motion.path
            d="M 48 67 L 56 75 L 74 57"
            fill="none"
            stroke="url(#fbCheckGold)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              pathLength: [0.85, 1, 0.85],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
          />
        </motion.g>

        {/* Floating Real-Time Correction Node */}
        <motion.circle
          cx="20"
          cy="32"
          r="4.5"
          fill="url(#fbCheckGold)"
          stroke="#ffffff"
          strokeWidth="1"
          animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

/* ── EXACT CONTENT DATA (100% Preserved) ── */
const TIMELINE_STEPS = [
  {
    step: '01',
    phase: 'Explain',
    title: 'Idea, Then Practice',
    desc: 'Each idea is taught fully, then practised with questions.',
    emblemComponent: Bulb3DEmblem,
    accentColor: 'from-amber-500 to-yellow-600',
    badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
  },
  {
    step: '02',
    phase: 'Adjust',
    title: 'Set for Each Student',
    desc: 'Some students need slower explanations, others want extra challenge.',
    emblemComponent: Sliders3DEmblem,
    accentColor: 'from-[#0f4a9b] to-[#0284c7]',
    badgeColor: 'bg-blue-50 text-blue-900 border-blue-200',
  },
  {
    step: '03',
    phase: 'Correct',
    title: 'Feedback as You Go',
    desc: 'Small corrections during lessons catch mistakes before they stick.',
    emblemComponent: Feedback3DEmblem,
    accentColor: 'from-emerald-600 to-teal-700',
    badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-200',
  },
];

export function LessonPlanningTimeline3D() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-r from-[#0f4a9b]/5 via-transparent to-[#C7A24A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Exact content preserved) */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
            <GradientHeadingText text="How Lessons Are Planned" />
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Students do better when{' '}
            <a href="/how-it-works" className="text-[#0f4a9b] font-semibold underline">
              lessons
            </a>{' '}
            feel organised, focused, and easy to follow.
          </p>
        </div>

        {/* 3D Timeline Orbit Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Timeline Connecting Track (Strictly Arrow-Free) */}
          <div className="hidden lg:block absolute top-[115px] left-[15%] right-[15%] h-[2.5px] bg-gradient-to-r from-[#C7A24A]/30 via-[#0f4a9b]/40 to-[#10b981]/30 z-0 pointer-events-none">
            {/* Real-time energetic particle pulse moving across the track */}
            <motion.div
              className="absolute -top-[3px] w-20 h-2 bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent rounded-full blur-[1.5px]"
              animate={{
                left: ['0%', '100%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* 3 Step Cards Grid */}
          <div className="flex flex-nowrap overflow-x-auto sm:grid md:grid-cols-3 gap-6 sm:gap-7 relative z-10 snap-x snap-mandatory pb-4 pt-1 px-4 sm:px-0 -mx-4 sm:mx-auto">
            {TIMELINE_STEPS.map((step, idx) => {
              const isHovered = hoveredIndex === idx;
              const EmblemComponent = step.emblemComponent;

              return (
                <div
                  key={step.step}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="w-[82vw] max-w-[320px] sm:w-auto flex-shrink-0 sm:flex-shrink snap-center relative bg-white rounded-[24px] border border-slate-200/90 p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(15,74,155,0.14)] hover:-translate-y-1.5 hover:border-[#0f4a9b]/50 group overflow-hidden"
                  style={{ minHeight: 310 }}
                >
                  {/* Top Subtle Accent Gradient */}
                  <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#0f4a9b] group-hover:via-[#1e5ba8] group-hover:to-[#C7A24A] transition-all duration-300" />

                  {/* Numbered Step Badge with Gold/Navy Depth */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white font-extrabold text-xs flex items-center justify-center shadow-[0_2px_10px_rgba(15,74,155,0.25)]">
                      {step.step}
                    </span>

                    <span className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-bold border ${step.badgeColor}`}>
                      {step.phase}
                    </span>
                  </div>

                  {/* 3D Animated Vector Emblem */}
                  <div className="my-auto py-2 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                    <EmblemComponent isHovered={isHovered} />
                  </div>

                  {/* Step Title (Exact text) */}
                  <h3 className="text-lg sm:text-[19px] font-extrabold text-[#0a1f3d] mb-1.5 group-hover:text-[#0f4a9b] transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description (Exact text) */}
                  <p className="text-gray-500 text-xs sm:text-[13px] font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LessonPlanningTimeline3D;
