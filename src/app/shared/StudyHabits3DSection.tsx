import { useState } from 'react';
import { motion } from 'motion/react';
import { GradientHeadingText } from './GradientHeadingText';

/* ── COMPACT 3D EMBLEM 1: Study Journal & Stylus ── */
function MinimalJournal3D({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center select-none pointer-events-none">
      <div
        className={`absolute inset-0 bg-blue-500/20 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-125' : 'opacity-40 scale-95'
        }`}
      />

      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="minNbCover" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#0a1f3d" />
          </linearGradient>
          <linearGradient id="minNbGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>
          <linearGradient id="minNbPages" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <filter id="minNbShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0f4a9b" floodOpacity="0.25" />
          </filter>
        </defs>

        <motion.g
          filter="url(#minNbShadow)"
          animate={{
            y: isHovered ? [-4, 4, -4] : [-2, 2, -2],
            rotateZ: isHovered ? [-2, 2, -2] : [-1, 1, -1],
          }}
          transition={{
            repeat: Infinity,
            duration: isHovered ? 2.5 : 4,
            ease: 'easeInOut',
          }}
        >
          {/* Back Cover */}
          <polygon points="26,26 96,16 104,82 34,92" fill="url(#minNbCover)" stroke="url(#minNbGold)" strokeWidth="1.2" />

          {/* Pages */}
          <polygon points="32,24 94,15 101,80 35,90" fill="url(#minNbPages)" stroke="#cbd5e1" strokeWidth="1" />

          {/* Lined Text */}
          <line x1="44" y1="32" x2="86" y2="26" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" opacity="0.75" />
          <line x1="44" y1="42" x2="84" y2="36" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" opacity="0.75" />
          <line x1="44" y1="52" x2="78" y2="47" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" opacity="0.75" />
          <line x1="44" y1="62" x2="72" y2="58" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" opacity="0.75" />

          {/* Gold Bookmark Ribbon */}
          <polygon points="86,16 98,14 100,26 88,28" fill="url(#minNbGold)" />

          {/* Spiral Rings */}
          {[28, 40, 52, 64, 76, 88].map((y, idx) => (
            <ellipse
              key={idx}
              cx="30"
              cy={y - idx * 1.5}
              rx="4"
              ry="2.4"
              fill="url(#minNbGold)"
              stroke="#78350f"
              strokeWidth="0.8"
              transform={`rotate(-15 30 ${y - idx * 1.5})`}
            />
          ))}
        </motion.g>

        {/* Floating Stylus */}
        <motion.g
          animate={{
            y: isHovered ? [6, -6, 6] : [3, -3, 3],
            rotate: [20, 26, 20],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 2 : 3.5, ease: 'easeInOut' }}
        >
          <rect x="84" y="38" width="8" height="34" rx="3" fill="#0f4a9b" stroke="url(#minNbGold)" strokeWidth="1" />
          <polygon points="86,72 90,72 88,80" fill="url(#minNbGold)" />
        </motion.g>
      </svg>
    </div>
  );
}

/* ── COMPACT 3D EMBLEM 2: Neural Brain & Synapse Pulse ── */
function MinimalBrain3D({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center select-none pointer-events-none">
      <div
        className={`absolute inset-0 bg-cyan-500/20 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-125' : 'opacity-40 scale-95'
        }`}
      />

      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="minBrLobe" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="45%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#0a1f3d" />
          </linearGradient>
          <linearGradient id="minBrGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>
          <filter id="minBrShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0284c7" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Orbiting Ring */}
        <motion.ellipse
          cx="60"
          cy="60"
          rx="52"
          ry="20"
          fill="none"
          stroke="url(#minBrGold)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity={isHovered ? 0.9 : 0.6}
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: isHovered ? 7 : 14, ease: 'linear' }}
          style={{ originX: '60px', originY: '60px' }}
        />

        {/* Brain Body */}
        <motion.g
          filter="url(#minBrShadow)"
          animate={{
            y: isHovered ? [-4, 4, -4] : [-2, 2, -2],
            scale: isHovered ? [1, 1.05, 1] : [1, 1.02, 1],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 2.2 : 3.8, ease: 'easeInOut' }}
        >
          <path
            d="M 58 30 C 44 26, 26 34, 24 50 C 22 62, 32 74, 30 84 C 28 92, 40 96, 52 94 C 57 93, 58 86, 58 30 Z"
            fill="url(#minBrLobe)"
            stroke="#93c5fd"
            strokeWidth="1.4"
          />
          <path
            d="M 62 30 C 76 26, 94 34, 96 50 C 98 62, 88 74, 90 84 C 92 92, 80 96, 68 94 C 63 93, 62 86, 62 30 Z"
            fill="url(#minBrLobe)"
            stroke="#93c5fd"
            strokeWidth="1.4"
          />

          <line x1="60" y1="28" x2="60" y2="94" stroke="#051020" strokeWidth="2.5" strokeLinecap="round" />

          {/* Synapses */}
          <path d="M 34 48 Q 46 50 54 44" fill="none" stroke="url(#minBrGold)" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 32 66 Q 44 62 56 68" fill="none" stroke="url(#minBrGold)" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 86 48 Q 74 50 66 44" fill="none" stroke="url(#minBrGold)" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 88 66 Q 76 62 64 68" fill="none" stroke="url(#minBrGold)" strokeWidth="1.4" strokeLinecap="round" />

          {/* Pulsing Nodes */}
          <motion.circle
            cx="44"
            cy="48"
            r="3.5"
            fill="url(#minBrGold)"
            stroke="#ffffff"
            strokeWidth="0.8"
            animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="76"
            cy="54"
            r="3.5"
            fill="#38bdf8"
            stroke="#ffffff"
            strokeWidth="0.8"
            animate={{ scale: [1.3, 0.8, 1.3], opacity: [1, 0.6, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.g>

        {/* Math particle */}
        <motion.text
          x="12"
          y="26"
          fill="#C7A24A"
          fontSize="11"
          fontWeight="bold"
          animate={{ y: [-3, 3, -3], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          ∑x²
        </motion.text>
      </svg>
    </div>
  );
}

/* ── COMPACT 3D EMBLEM 3: Geometric Challenge Shield & Prism ── */
function MinimalHazard3D({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center select-none pointer-events-none">
      <div
        className={`absolute inset-0 bg-amber-500/20 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-125' : 'opacity-40 scale-95'
        }`}
      />

      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="minHzShield" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#0f4a9b" />
          </linearGradient>
          <linearGradient id="minHzGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <filter id="minHzShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#b45309" floodOpacity="0.25" />
          </filter>
        </defs>

        <motion.g
          filter="url(#minHzShadow)"
          animate={{
            y: isHovered ? [-4, 4, -4] : [-2, 2, -2],
            rotateZ: isHovered ? [-1.5, 1.5, -1.5] : [0, 0, 0],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 2.4 : 4, ease: 'easeInOut' }}
        >
          {/* Outer Shield */}
          <polygon points="60,16 106,94 14,94" fill="url(#minHzShield)" stroke="url(#minHzGold)" strokeWidth="1.8" />

          {/* Inner Inset */}
          <polygon points="60,28 94,88 26,88" fill="#0a1f3d" stroke="url(#minHzGold)" strokeWidth="1.4" />

          {/* Hazard Stripes */}
          <line x1="38" y1="84" x2="48" y2="72" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          <line x1="52" y1="84" x2="62" y2="72" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          <line x1="66" y1="84" x2="76" y2="72" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />

          {/* Exclamation Core */}
          <motion.g
            animate={{ scale: isHovered ? [0.95, 1.15, 0.95] : [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            style={{ originX: '60px', originY: '54px' }}
          >
            <rect x="57.5" y="40" width="5" height="18" rx="2.5" fill="#fef08a" stroke="#ffffff" strokeWidth="0.8" />
            <circle cx="60" cy="65" r="3" fill="#fef08a" stroke="#ffffff" strokeWidth="0.8" />
          </motion.g>
        </motion.g>

        {/* Floating Spark Badge */}
        <motion.g animate={{ y: [-3, 3, -3] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}>
          <circle cx="96" cy="30" r="10" fill="#0f4a9b" stroke="url(#minHzGold)" strokeWidth="1.2" />
          <text x="96" y="34" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
            !
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ── EXACT CONTENT DATA (100% Preserved) ── */
const HABITS = [
  {
    id: 'notes',
    title: 'Just Reading Notes',
    desc: 'Re-reading feels useful, but solving questions builds real skill.',
    emblemComponent: MinimalJournal3D,
    cta: 'Explore Revision Guide',
    href: '/blogs/igcse-maths-revision-low-marks',
  },
  {
    id: 'memorising',
    title: 'Memorising Everything',
    desc: 'Formulas come easily, but reworded exam questions cause trouble.',
    emblemComponent: MinimalBrain3D,
    cta: 'Explore Revision Guide',
    href: '/blogs/why-chemistry-fades-from-memory',
  },
  {
    id: 'skipping',
    title: 'Skipping Hard Topics',
    desc: 'Easy work feels safe while tough chapters cost marks.',
    emblemComponent: MinimalHazard3D,
    cta: 'Explore Revision Guide',
    href: '/blogs/igcse-physics-formulas-exam',
  },
];

export function StudyHabits3DSection() {
  const [hoveredHabit, setHoveredHabit] = useState<string | null>(null);

  return (
    <section
      id="why-students-understand-in-class-but-struggle-alone"
      className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc] relative overflow-hidden"
    >
      {/* Background Lighting Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#0f4a9b]/5 via-transparent to-[#C7A24A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Exact content preserved) */}
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
            <GradientHeadingText text="Habits That Often Hold Students Back" />
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            For many students, effort isn't the issue. It's how revision is done.
          </p>
        </div>

        {/* Minimalist Glassmorphic Habit Cards Grid */}
        <div className="flex flex-nowrap overflow-x-auto sm:grid md:grid-cols-3 gap-6 sm:gap-7 max-w-5xl mx-auto snap-x snap-mandatory pb-4 pt-1 px-4 sm:px-0 -mx-4 sm:mx-auto">
          {HABITS.map((item) => {
            const isHovered = hoveredHabit === item.id;
            const EmblemComponent = item.emblemComponent;

            return (
              <a
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredHabit(item.id)}
                onMouseLeave={() => setHoveredHabit(null)}
                className="w-[82vw] max-w-[320px] sm:w-auto flex-shrink-0 sm:flex-shrink snap-center bg-white rounded-[24px] border border-slate-200/90 p-6 sm:p-7 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(15,74,155,0.14)] hover:-translate-y-1.5 hover:border-[#0f4a9b]/50 group cursor-pointer"
                style={{ minHeight: 280 }}
              >
                {/* Top Ambient Highlight Gradient */}
                <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#0f4a9b] group-hover:via-[#1e5ba8] group-hover:to-[#C7A24A] transition-all duration-300" />

                {/* 3D Animated Vector Emblem */}
                <div className="mb-4 mt-1 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <EmblemComponent isHovered={isHovered} />
                </div>

                {/* Habit Title */}
                <h3 className="text-lg sm:text-[19px] font-extrabold text-[#0a1f3d] mb-2 group-hover:text-[#0f4a9b] transition-colors">
                  {item.title}
                </h3>

                {/* Gold Accent Divider */}
                <div className="w-8 h-[2px] bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3 group-hover:w-14 transition-all duration-300" />

                {/* Habit Description (Exact text) */}
                <p className="text-gray-500 text-xs sm:text-[13px] font-medium leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* Clean Bottom Action Pill (Strictly Arrow-Free) */}
                <div className="mt-auto pt-1 w-full flex items-center justify-center">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 group-hover:bg-[#0f4a9b] group-hover:text-white transition-all duration-300">
                    Read Guide
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StudyHabits3DSection;
