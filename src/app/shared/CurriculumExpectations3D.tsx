import { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, BadgeCheck } from 'lucide-react';
import { GradientHeadingText } from './GradientHeadingText';

/* ── 3D VECTOR EMBLEM 1: IGCSE & GCSE (3D Exam Scroll & Golden Wax Seal) ── */
function Scroll3DEmblem({ isHovered, isSelected }: { isHovered: boolean; isSelected: boolean }) {
  const active = isHovered || isSelected;
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Glow */}
      <div
        className={`absolute inset-0 bg-blue-500/20 rounded-full blur-xl transition-opacity duration-500 ${
          active ? 'opacity-100 scale-125' : 'opacity-40'
        }`}
      />

      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="curricScrollGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="curricGoldSeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>
          <filter id="curricScrollShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0f4a9b" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 3D Floating Parchment / Scroll Body */}
        <motion.g
          filter="url(#curricScrollShadow)"
          animate={{
            y: [-3, 3, -3],
            rotate: [-1.5, 1.5, -1.5],
          }}
          transition={{
            repeat: Infinity,
            duration: active ? 2 : 4,
            ease: 'easeInOut',
          }}
        >
          {/* Top Roll Cylinder */}
          <ellipse cx="50" cy="22" rx="28" ry="5.5" fill="#e2e8f0" stroke="#0f4a9b" strokeWidth="1.2" />
          <path
            d="M 22 22 L 22 26 C 22 29.5, 78 29.5, 78 26 L 78 22 Z"
            fill="url(#curricScrollGrad)"
            stroke="#0f4a9b"
            strokeWidth="1.2"
          />

          {/* Main Sheet */}
          <path
            d="M 23 25 Q 50 28 77 25 L 75 75 Q 49 79 25 75 Z"
            fill="url(#curricScrollGrad)"
            stroke="#0f4a9b"
            strokeWidth="1.4"
          />

          {/* Document Content Lines */}
          <line x1="32" y1="36" x2="68" y2="36" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <line x1="32" y1="44" x2="62" y2="44" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <line x1="32" y1="52" x2="56" y2="52" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

          {/* Bottom Roll Curl */}
          <path
            d="M 25 75 C 25 80, 75 80, 75 75 C 75 72, 25 72, 25 75 Z"
            fill="#e2e8f0"
            stroke="#0f4a9b"
            strokeWidth="1.2"
          />

          {/* Wax Seal Ribbon Tails */}
          <path d="M 59 62 L 56 78 L 60 74 L 64 78 Z" fill="#991b1b" opacity="0.85" />
          <path d="M 64 62 L 67 78 L 71 74 L 75 78 Z" fill="#b91c1c" opacity="0.85" />

          {/* Wax Seal / Stamp */}
          <motion.circle
            cx="64"
            cy="62"
            r="8"
            fill="url(#curricGoldSeal)"
            stroke="#ffffff"
            strokeWidth="1.2"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: 'easeInOut',
            }}
          />
          {/* Embossed Star inside Seal */}
          <path
            d="M 64 57.5 L 65.2 60.5 L 68 60.7 L 65.8 62.5 L 66.5 65.5 L 64 63.8 L 61.5 65.5 L 62.2 62.5 L 60 60.7 L 62.8 60.5 Z"
            fill="#ffffff"
            opacity="0.95"
          />
        </motion.g>

        {/* Floating Grade Badges: '9-1' and 'A*' */}
        <motion.g
          animate={{
            y: [3, -3, 3],
            x: [-1, 1, -1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.8,
            ease: 'easeInOut',
          }}
        >
          <rect x="8" y="46" width="22" height="13" rx="4" fill="#0f4a9b" />
          <text x="19" y="55.5" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">
            9-1
          </text>
        </motion.g>

        <motion.g
          animate={{
            y: [-3, 3, -3],
            x: [1, -1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.4,
            ease: 'easeInOut',
          }}
        >
          <rect x="70" y="26" width="22" height="13" rx="4" fill="#C7A24A" />
          <text x="81" y="35.5" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">
            A*
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 3D VECTOR EMBLEM 2: A-LEVEL (3D Mortarboard / Graduation Cap with Swaying Tassel) ── */
function ALevel3DEmblem({ isHovered, isSelected }: { isHovered: boolean; isSelected: boolean }) {
  const active = isHovered || isSelected;
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Glow */}
      <div
        className={`absolute inset-0 bg-indigo-500/20 rounded-full blur-xl transition-opacity duration-500 ${
          active ? 'opacity-100 scale-125' : 'opacity-40'
        }`}
      />

      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="capTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="45%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#0a1f3d" />
          </linearGradient>
          <linearGradient id="capTasselGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#a17c24" />
          </linearGradient>
          <filter id="capShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0a1f3d" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Orbiting Logic/Academic Ring */}
        <motion.ellipse
          cx="50"
          cy="52"
          rx="42"
          ry="15"
          fill="none"
          stroke="#C7A24A"
          strokeWidth="0.8"
          strokeDasharray="4 4"
          opacity="0.65"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: active ? 8 : 16,
            ease: 'linear',
          }}
          style={{ originX: '50px', originY: '52px' }}
        />

        {/* Cap Body */}
        <motion.g
          filter="url(#capShadow)"
          animate={{
            y: [-3, 3, -3],
            rotate: [-1, 1, -1],
          }}
          transition={{
            repeat: Infinity,
            duration: active ? 2.2 : 4,
            ease: 'easeInOut',
          }}
        >
          {/* Skull Cap Base (underneath) */}
          <path
            d="M 33 50 C 33 66, 67 66, 67 50 Z"
            fill="#09182d"
            stroke="#0f4a9b"
            strokeWidth="1.2"
          />

          {/* Diamond Mortarboard Top (3D perspective) */}
          <polygon
            points="50,22 88,40 50,56 12,40"
            fill="url(#capTopGrad)"
            stroke="#60a5fa"
            strokeWidth="1.4"
          />

          {/* Edge Bevel Highlight */}
          <line x1="12" y1="40" x2="50" y2="56" stroke="#93c5fd" strokeWidth="1.2" opacity="0.8" />
          <line x1="50" y1="56" x2="88" y2="40" stroke="#1d4ed8" strokeWidth="1.2" opacity="0.8" />

          {/* Center Gold Button */}
          <circle cx="50" cy="39" r="3.5" fill="url(#capTasselGold)" stroke="#ffffff" strokeWidth="0.8" />

          {/* Swaying Golden Tassel */}
          <motion.g
            animate={{
              rotate: active ? [-12, 12, -12] : [-6, 6, -6],
            }}
            transition={{
              repeat: Infinity,
              duration: active ? 1.4 : 2.5,
              ease: 'easeInOut',
            }}
            style={{ originX: '50px', originY: '39px' }}
          >
            {/* Tassel cord */}
            <path
              d="M 50 39 Q 62 42 70 54"
              fill="none"
              stroke="url(#capTasselGold)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            {/* Tassel Ribbon/Fringe */}
            <path
              d="M 68 54 L 72 54 L 75 70 L 66 70 Z"
              fill="url(#capTasselGold)"
              stroke="#ffffff"
              strokeWidth="0.5"
            />
            <circle cx="70" cy="54" r="2" fill="#a17c24" />
          </motion.g>
        </motion.g>

        {/* Floating Calculus & Depth Spark */}
        <motion.text
          x="16"
          y="28"
          fill="#C7A24A"
          fontSize="11"
          fontWeight="bold"
          animate={{
            y: [-3, 3, -3],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
        >
          ∫dx
        </motion.text>
      </svg>
    </div>
  );
}

/* ── 3D VECTOR EMBLEM 3: AP (3D Neoclassical Collegiate Hall / Landmark) ── */
function AP3DEmblem({ isHovered, isSelected }: { isHovered: boolean; isSelected: boolean }) {
  const active = isHovered || isSelected;
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Glow */}
      <div
        className={`absolute inset-0 bg-sky-500/20 rounded-full blur-xl transition-opacity duration-500 ${
          active ? 'opacity-100 scale-125' : 'opacity-40'
        }`}
      />

      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="apBuildingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#0a1f3d" />
          </linearGradient>
          <linearGradient id="apGoldPediment" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="70%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>
          <filter id="apShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0f4a9b" floodOpacity="0.25" />
          </filter>
        </defs>

        <motion.g
          filter="url(#apShadow)"
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            repeat: Infinity,
            duration: active ? 2 : 4,
            ease: 'easeInOut',
          }}
        >
          {/* Triangular Pediment / Roof */}
          <polygon
            points="50,18 84,36 16,36"
            fill="url(#apBuildingGrad)"
            stroke="#60a5fa"
            strokeWidth="1.4"
          />

          {/* Roof Gold Medallion */}
          <circle cx="50" cy="28" r="4" fill="url(#apGoldPediment)" stroke="#ffffff" strokeWidth="0.8" />

          {/* Frieze / Architrave beam */}
          <rect x="18" y="36" width="64" height="6" rx="1.5" fill="#0f4a9b" stroke="#38bdf8" strokeWidth="1" />

          {/* 4 Classical Columns */}
          {/* Column 1 */}
          <rect x="22" y="42" width="8" height="28" rx="1.5" fill="url(#apBuildingGrad)" stroke="#93c5fd" strokeWidth="0.8" />
          {/* Column 2 */}
          <rect x="38" y="42" width="8" height="28" rx="1.5" fill="url(#apBuildingGrad)" stroke="#93c5fd" strokeWidth="0.8" />
          {/* Column 3 */}
          <rect x="54" y="42" width="8" height="28" rx="1.5" fill="url(#apBuildingGrad)" stroke="#93c5fd" strokeWidth="0.8" />
          {/* Column 4 */}
          <rect x="70" y="42" width="8" height="28" rx="1.5" fill="url(#apBuildingGrad)" stroke="#93c5fd" strokeWidth="0.8" />

          {/* Glowing Center Portal / Beacon */}
          <motion.rect
            x="48"
            y="52"
            width="4"
            height="18"
            rx="2"
            fill="#fef08a"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: 'easeInOut',
            }}
          />

          {/* Stepped Foundation Base (Plinth) */}
          <rect x="14" y="70" width="72" height="5" rx="1" fill="#0a1f3d" stroke="#0f4a9b" strokeWidth="1" />
          <rect x="10" y="75" width="80" height="5" rx="1.5" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />
        </motion.g>

        {/* Floating AP Score Badge: '5/5' */}
        <motion.g
          animate={{
            y: [-3, 3, -3],
            x: [1, -1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: 'easeInOut',
          }}
        >
          <rect x="68" y="14" width="24" height="13" rx="4" fill="#C7A24A" />
          <text x="80" y="23.5" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">
            5 / 5
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 3D VECTOR EMBLEM 4: IB (3D Open Knowledge Book & Global Atomic Rings) ── */
function IB3DEmblem({ isHovered, isSelected }: { isHovered: boolean; isSelected: boolean }) {
  const active = isHovered || isSelected;
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Glow */}
      <div
        className={`absolute inset-0 bg-amber-500/20 rounded-full blur-xl transition-opacity duration-500 ${
          active ? 'opacity-100 scale-125' : 'opacity-40'
        }`}
      />

      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="ibCoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f4a9b" />
            <stop offset="50%" stopColor="#0a3a79" />
            <stop offset="100%" stopColor="#071b38" />
          </linearGradient>
          <linearGradient id="ibPagesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="ibCoreGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>
          <filter id="ibShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#0f4a9b" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Orbiting Global Inquiry Rings (HL & SL) */}
        <motion.ellipse
          cx="50"
          cy="48"
          rx="40"
          ry="14"
          fill="none"
          stroke="#C7A24A"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          opacity="0.7"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: active ? 7 : 14,
            ease: 'linear',
          }}
          style={{ originX: '50px', originY: '48px' }}
        />

        <motion.g
          filter="url(#ibShadow)"
          animate={{
            y: [-3, 3, -3],
            rotate: [-1, 1, -1],
          }}
          transition={{
            repeat: Infinity,
            duration: active ? 2.2 : 4,
            ease: 'easeInOut',
          }}
        >
          {/* Hardcover Back Spine */}
          <path
            d="M 14 62 Q 50 72 86 62 L 86 66 Q 50 76 14 66 Z"
            fill="url(#ibCoverGrad)"
            stroke="#0a1f3d"
            strokeWidth="1.2"
          />

          {/* Left Open Page Wings */}
          <path
            d="M 50 64 Q 30 58 16 60 L 18 36 Q 32 34 50 40 Z"
            fill="url(#ibPagesGrad)"
            stroke="#0f4a9b"
            strokeWidth="1.2"
          />

          {/* Right Open Page Wings */}
          <path
            d="M 50 64 Q 70 58 84 60 L 82 36 Q 68 34 50 40 Z"
            fill="url(#ibPagesGrad)"
            stroke="#0f4a9b"
            strokeWidth="1.2"
          />

          {/* Center Spine Crease */}
          <line x1="50" y1="40" x2="50" y2="64" stroke="#0a3a79" strokeWidth="1.4" />

          {/* Holographic Inquiry Core Pulsing from Spine */}
          <motion.circle
            cx="50"
            cy="36"
            r="5"
            fill="url(#ibCoreGold)"
            stroke="#ffffff"
            strokeWidth="1"
            animate={{
              scale: [0.9, 1.25, 0.9],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
          />

          {/* Subtle Page Lines */}
          <line x1="26" y1="44" x2="42" y2="46" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          <line x1="26" y1="50" x2="40" y2="52" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          <line x1="58" y1="46" x2="74" y2="44" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          <line x1="60" y1="52" x2="74" y2="50" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        </motion.g>

        {/* Floating IB Badge: '7/7' */}
        <motion.g
          animate={{
            y: [3, -3, 3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: 'easeInOut',
          }}
        >
          <rect x="10" y="20" width="22" height="13" rx="4" fill="#0f4a9b" />
          <text x="21" y="29.5" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">
            7 / 7
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ── EXACT CURRICULA DATA (Content 100% Preserved) ── */
const CURRICULA = [
  {
    id: 'igcse-gcse',
    name: 'IGCSE & GCSE',
    desc: 'Students learn how to solve problems accurately under exam conditions.',
    href: '/igcse',
    emblem: Scroll3DEmblem,
    tag: 'A*-G for IGCSE · 9-1 for GCSE',
  },
  {
    id: 'a-level',
    name: 'A-Level',
    desc: 'The focus shifts toward deeper thinking and more complex questions.',
    href: '/a-level',
    emblem: ALevel3DEmblem,
    tag: 'Depth & Specialisation',
  },
  {
    id: 'ap',
    name: 'AP',
    desc: 'Students balance ongoing coursework with regular tests and end-of-course examinations.',
    href: '/ap',
    emblem: AP3DEmblem,
    tag: 'Rigorous Coursework',
  },
  {
    id: 'ib',
    name: 'IB',
    desc: 'Lessons often involve analysing, investigating, and making connections between ideas.',
    href: '/ib-curriculum',
    emblem: IB3DEmblem,
    tag: 'Inquiry & Synthesis',
  },
];

export function CurriculumExpectations3D() {
  const [hoveredCurriculum, setHoveredCurriculum] = useState<string | null>(null);

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#0f4a9b]/5 via-transparent to-[#C7A24A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header (Exact content preserved) */}
        <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-4 sm:mb-5 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.1)]">
            <Layers className="h-4 w-4" /> Curriculum Focus
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
            <GradientHeadingText text="The Same Subject, Different Expectations" />
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            <a href="/maths" className="text-[#0f4a9b] font-semibold underline">Mathematics</a>,{' '}
            <a href="/physics" className="text-[#0f4a9b] font-semibold underline">Physics</a>,{' '}
            <a href="/chemistry" className="text-[#0f4a9b] font-semibold underline">Chemistry</a>, and other subjects vary widely across IGCSE, A-Level, IB, and AP programmes. Teaching methods, question styles, and exam approaches shift to match each.
          </p>
        </div>

        {/* 4 Interactive 3D Curriculum Cards */}
        <div className="flex flex-nowrap overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto mb-10 snap-x snap-mandatory pb-4 pt-1 px-4 sm:px-0 -mx-4 sm:mx-auto">
          {CURRICULA.map((c) => {
            const isHovered = hoveredCurriculum === c.id;
            const EmblemComponent = c.emblem;

            return (
              <a
                key={c.id}
                href={c.href}
                onMouseEnter={() => setHoveredCurriculum(c.id)}
                onMouseLeave={() => setHoveredCurriculum(null)}
                className="w-[80vw] max-w-[300px] sm:w-full flex-shrink-0 sm:flex-shrink snap-center text-left relative bg-white border border-slate-200/90 rounded-[22px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#0f4a9b]/50 hover:shadow-[0_16px_36px_rgba(15,74,155,0.14)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/20"
                style={{ minHeight: 210 }}
              >
                {/* Top Ambient Gold / Navy Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#0f4a9b] group-hover:via-[#1e5ba8] group-hover:to-[#C7A24A] transition-all duration-300" />

                {/* Top Row: 3D Emblem & Action Badge */}
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="p-1 rounded-2xl bg-slate-50/80 border border-slate-100 group-hover:border-[#0f4a9b]/20 group-hover:bg-blue-50/40 transition-colors">
                    <EmblemComponent isHovered={isHovered} isSelected={false} />
                  </div>

                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#0f4a9b]/10 text-[#0f4a9b] group-hover:bg-[#0f4a9b] group-hover:text-white transition-all duration-300">
                    Explore
                  </span>
                </div>

                {/* Body Content */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-base sm:text-[17px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
                      {c.name}
                    </h4>
                  </div>
                  {c.tag && (
                    <span className="inline-block px-2 py-0.5 mb-2 text-[10px] font-bold rounded-md bg-[#0f4a9b]/8 text-[#0f4a9b] border border-[#0f4a9b]/15">
                      {c.tag}
                    </span>
                  )}
                  <p className="text-gray-500 text-xs sm:text-[12.5px] font-medium leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Closing Highlight Statement (Exact content preserved) */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl border border-[#0f4a9b]/10 shadow-[0_8px_30px_rgba(15,74,155,0.06)]">
            <div className="absolute -left-16 -top-16 w-48 h-48 bg-[#0f4a9b]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-[#C7A24A]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C7A24A] to-[#A8892A] rounded-l-2xl" />
            <div className="relative px-6 py-5 sm:px-8 sm:py-6 pl-8 flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-xl flex items-center justify-center shadow-[0_4px_14px_rgba(199,162,74,0.35)] flex-shrink-0">
                <BadgeCheck className="h-5 w-5 text-white" />
              </div>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                <span className="font-semibold text-[#0a1f3d]">
                  Each tutor is chosen for both subject expertise and curriculum experience.
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CurriculumExpectations3D;
