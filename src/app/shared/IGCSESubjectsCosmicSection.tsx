import { useState } from 'react';
import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';

/* ── 1. MATHS 3D GRAPHIC: Wireframe Icosahedron / Polyhedron ── */
function Maths3DIcosahedron({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center pointer-events-none select-none">
      {/* Ambient Radial Cyan Glow */}
      <motion.div
        className="absolute inset-0 bg-[#0f4a9b]/10 rounded-full blur-lg pointer-events-none"
        animate={{ scale: isHovered ? [1, 1.25, 1] : [1, 1.1, 1], opacity: isHovered ? 0.9 : 0.4 }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="mathsCyanGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f4a9b" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Outer Orbiting Coordinate Ring */}
        <motion.ellipse
          cx="60"
          cy="60"
          rx="52"
          ry="20"
          fill="none"
          stroke="#0284c7"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.45"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: isHovered ? 6 : 14, ease: 'linear' }}
          style={{ originX: '60px', originY: '60px' }}
        />

        {/* 3D Wireframe Icosahedron */}
        <motion.g
          animate={{
            rotateY: isHovered ? [0, 180, 360] : [0, 360],
            rotateZ: [0, 12, -12, 0],
            y: [-2, 2, -2],
          }}
          transition={{
            rotateY: { repeat: Infinity, duration: isHovered ? 5 : 10, ease: 'linear' },
            rotateZ: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
            y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
          }}
          style={{ originX: '60px', originY: '60px' }}
        >
          {/* Inner Polyhedron Faces & Edges */}
          <polygon points="60,18 94,38 78,82 42,82 26,38" fill="rgba(15,74,155,0.08)" stroke="url(#mathsCyanGradLight)" strokeWidth="1.8" />
          <polygon points="60,18 78,82 42,82" fill="rgba(2,132,199,0.12)" stroke="#0284c7" strokeWidth="1.4" />
          <polygon points="60,18 94,38 78,82" fill="rgba(6,182,212,0.08)" stroke="url(#mathsCyanGradLight)" strokeWidth="1.4" />
          <polygon points="60,18 26,38 42,82" fill="rgba(15,74,155,0.1)" stroke="url(#mathsCyanGradLight)" strokeWidth="1.4" />

          {/* Lower Pyramid Cap */}
          <line x1="60" y1="102" x2="78" y2="82" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="60" y1="102" x2="42" y2="82" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="60" y1="102" x2="94" y2="38" stroke="#0f4a9b" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />
          <line x1="60" y1="102" x2="26" y2="38" stroke="#0f4a9b" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />

          {/* Glowing Vertex Nodes */}
          {[[60,18], [94,38], [78,82], [42,82], [26,38], [60,102]].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="3" fill="#ffffff" stroke="#0f4a9b" strokeWidth="2" />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 2. PHYSICS 3D GRAPHIC: Glowing Rutherford Quantum Atom ── */
function Physics3DAtom({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center pointer-events-none select-none">
      <motion.div
        className="absolute inset-0 bg-[#0f4a9b]/10 rounded-full blur-lg pointer-events-none"
        animate={{ scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1], opacity: isHovered ? 0.9 : 0.4 }}
        transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <radialGradient id="physCoreGlowLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="physRing1Light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="physRing2Light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>

        {/* Orbit Ring 1 (Diagonal 1) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: isHovered ? 3.5 : 7, ease: 'linear' }}
          style={{ originX: '60px', originY: '60px' }}
        >
          <ellipse cx="60" cy="60" rx="46" ry="16" fill="none" stroke="url(#physRing1Light)" strokeWidth="1.8" transform="rotate(30 60 60)" />
          <circle cx="100" cy="80" r="3.5" fill="#0f4a9b" stroke="#ffffff" strokeWidth="1" />
        </motion.g>

        {/* Orbit Ring 2 (Diagonal 2) */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: isHovered ? 4 : 8, ease: 'linear' }}
          style={{ originX: '60px', originY: '60px' }}
        >
          <ellipse cx="60" cy="60" rx="46" ry="16" fill="none" stroke="url(#physRing2Light)" strokeWidth="1.8" transform="rotate(-30 60 60)" />
          <circle cx="20" cy="80" r="3.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
        </motion.g>

        {/* Orbit Ring 3 (Vertical) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: isHovered ? 5 : 9, ease: 'linear' }}
          style={{ originX: '60px', originY: '60px' }}
        >
          <ellipse cx="60" cy="60" rx="46" ry="14" fill="none" stroke="#60a5fa" strokeWidth="1.4" transform="rotate(90 60 60)" strokeDasharray="5 3" />
          <circle cx="60" cy="14" r="3" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
        </motion.g>

        {/* Energetic Nucleus */}
        <circle cx="60" cy="60" r="14" fill="url(#physCoreGlowLight)" />
        <motion.circle
          cx="60"
          cy="60"
          r="7"
          fill="#fbbf24"
          stroke="#d97706"
          strokeWidth="1.5"
          animate={{ scale: [0.9, 1.2, 0.9] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ originX: '60px', originY: '60px' }}
        />
      </svg>
    </div>
  );
}

/* ── 3. CHEMISTRY 3D GRAPHIC: Laboratory Flask & Molecular Lattice ── */
function Chemistry3DFlask({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center pointer-events-none select-none">
      <motion.div
        className="absolute inset-0 bg-teal-500/10 rounded-full blur-lg pointer-events-none"
        animate={{ scale: isHovered ? [1, 1.25, 1] : [1, 1.1, 1], opacity: isHovered ? 0.8 : 0.4 }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="chemFlaskGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="chemLiquidLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Molecular Connected Lattice */}
        <motion.g
          animate={{ y: [-2, 2, -2], rotate: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
          style={{ originX: '85px', originY: '35px' }}
        >
          <line x1="85" y1="28" x2="105" y2="38" stroke="#14b8a6" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="85" y1="28" x2="72" y2="44" stroke="#14b8a6" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="105" y1="38" x2="100" y2="60" stroke="#14b8a6" strokeWidth="2.2" strokeLinecap="round" />

          <circle cx="85" cy="28" r="6.5" fill="#e11d48" stroke="#ffffff" strokeWidth="1.8" />
          <circle cx="105" cy="38" r="6" fill="#0284c7" stroke="#ffffff" strokeWidth="1.8" />
          <circle cx="72" cy="44" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="100" cy="60" r="5.5" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.5" />
        </motion.g>

        {/* 3D Glass Flask Body */}
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
        >
          <path
            d="M 46,28 L 54,28 L 54,48 L 74,86 C 76,90 72,94 67,94 L 33,94 C 28,94 24,90 26,86 L 46,48 Z"
            fill="none"
            stroke="url(#chemFlaskGradLight)"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <ellipse cx="50" cy="28" rx="6" ry="2.5" fill="rgba(13,148,136,0.15)" stroke="#0d9488" strokeWidth="1.8" />

          {/* Liquid Inside */}
          <path
            d="M 39,66 Q 50,62 61,66 L 72,86 C 73.5,89 71,92 66,92 L 34,92 C 29,92 26.5,89 28,86 Z"
            fill="url(#chemLiquidLight)"
          />

          {/* Animated Rising Reaction Bubbles */}
          <motion.circle
            cx="44"
            cy="82"
            r="2.5"
            fill="#ffffff"
            animate={{ cy: [82, 64, 52], opacity: [0.9, 0.6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
          />
          <motion.circle
            cx="56"
            cy="86"
            r="3"
            fill="#ffffff"
            animate={{ cy: [86, 68, 56], opacity: [0.9, 0.7, 0] }}
            transition={{ repeat: Infinity, duration: 2.6, delay: 0.7, ease: 'easeOut' }}
          />
          <motion.circle
            cx="50"
            cy="76"
            r="2"
            fill="#ffffff"
            animate={{ cy: [76, 62, 48], opacity: [0.9, 0.5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, delay: 1.2, ease: 'easeOut' }}
          />
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 4. BIOLOGY 3D GRAPHIC: Radiant DNA Double Helix & Neural Synapse ── */
function Biology3DDna({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center pointer-events-none select-none">
      <motion.div
        className="absolute inset-0 bg-emerald-500/10 rounded-full blur-lg pointer-events-none"
        animate={{ scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1], opacity: isHovered ? 0.9 : 0.4 }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="bioHelixGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>

        {/* 3D DNA Double Helix Ladder */}
        <motion.g
          animate={{ y: [-2, 2, -2], rotate: [0, isHovered ? 6 : 3, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          style={{ originX: '45px', originY: '60px' }}
        >
          {[
            { y: 24, x1: 30, x2: 60, col: '#059669' },
            { y: 36, x1: 38, x2: 52, col: '#10b981' },
            { y: 48, x1: 44, x2: 46, col: '#34d399' },
            { y: 60, x1: 36, x2: 54, col: '#059669' },
            { y: 72, x1: 28, x2: 62, col: '#10b981' },
            { y: 84, x1: 38, x2: 52, col: '#34d399' },
            { y: 96, x1: 44, x2: 46, col: '#059669' },
          ].map((rung, idx) => (
            <g key={idx}>
              <line x1={rung.x1} y1={rung.y} x2={rung.x2} y2={rung.y} stroke={rung.col} strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
              <circle cx={rung.x1} cy={rung.y} r="3" fill="#ffffff" stroke="#059669" strokeWidth="1.5" />
              <circle cx={rung.x2} cy={rung.y} r="3" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            </g>
          ))}

          <path
            d="M 30,24 Q 48,48 44,60 Q 30,72 44,96"
            fill="none"
            stroke="url(#bioHelixGradLight)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 60,24 Q 42,48 46,60 Q 60,72 46,96"
            fill="none"
            stroke="#059669"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Neural Synapse Branching Cell */}
        <motion.g
          animate={{ scale: isHovered ? [1, 1.08, 1] : [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          style={{ originX: '85px', originY: '50px' }}
        >
          <line x1="85" y1="50" x2="105" y2="35" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          <line x1="85" y1="50" x2="108" y2="55" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          <line x1="85" y1="50" x2="95" y2="72" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          <line x1="85" y1="50" x2="72" y2="35" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />

          <circle cx="105" cy="35" r="3.5" fill="#34d399" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="108" cy="55" r="3.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="95" cy="72" r="3.5" fill="#059669" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="72" cy="35" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="1.2" />

          <circle cx="85" cy="50" r="7" fill="#059669" stroke="#ffffff" strokeWidth="2" />
          <circle cx="85" cy="50" r="3" fill="#ffffff" />
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 5. ENGLISH 3D GRAPHIC: Holographic Open Book with Radiant Pages ── */
function English3DBook({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center pointer-events-none select-none">
      <motion.div
        className="absolute inset-0 bg-[#0f4a9b]/10 rounded-full blur-lg pointer-events-none"
        animate={{ scale: isHovered ? [1, 1.25, 1] : [1, 1.1, 1], opacity: isHovered ? 0.85 : 0.4 }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="engBookGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>

        {/* 3D Open Perspective Book */}
        <motion.g
          animate={{
            y: [-2, 2, -2],
            rotateX: [10, 20, 10],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          style={{ originX: '60px', originY: '65px' }}
        >
          {/* Base Book Cover Spine */}
          <path
            d="M 20,82 Q 60,94 100,82 L 104,86 Q 60,98 16,86 Z"
            fill="#0a1f3d"
            stroke="#0f4a9b"
            strokeWidth="1.5"
          />

          {/* Left Wing Pages */}
          <path
            d="M 60,78 Q 38,72 20,80 L 22,46 Q 40,40 60,46 Z"
            fill="rgba(15,74,155,0.08)"
            stroke="url(#engBookGradLight)"
            strokeWidth="2"
          />
          <path
            d="M 60,78 Q 40,70 24,76 L 26,42 Q 42,36 60,42 Z"
            fill="rgba(255,255,255,0.9)"
            stroke="#0284c7"
            strokeWidth="1.2"
          />

          {/* Right Wing Pages */}
          <path
            d="M 60,78 Q 82,72 100,80 L 98,46 Q 80,40 60,46 Z"
            fill="rgba(15,74,155,0.08)"
            stroke="url(#engBookGradLight)"
            strokeWidth="2"
          />
          <path
            d="M 60,78 Q 80,70 96,76 L 94,42 Q 78,36 60,42 Z"
            fill="rgba(255,255,255,0.9)"
            stroke="#0284c7"
            strokeWidth="1.2"
          />

          {/* Center Spine Line */}
          <line x1="60" y1="42" x2="60" y2="78" stroke="#0a1f3d" strokeWidth="2.2" />

          {/* Text Lines */}
          {[
            { y: 52, x1: 30, x2: 52 },
            { y: 58, x1: 32, x2: 50 },
            { y: 64, x1: 28, x2: 48 },
          ].map((line, i) => (
            <line key={`l-${i}`} x1={line.x1} y1={line.y} x2={line.x2} y2={line.y} stroke="#0f4a9b" strokeWidth="1.4" strokeDasharray="3 2" opacity="0.75" />
          ))}
          {[
            { y: 52, x1: 68, x2: 90 },
            { y: 58, x1: 70, x2: 88 },
            { y: 64, x1: 72, x2: 92 },
          ].map((line, i) => (
            <line key={`r-${i}`} x1={line.x1} y1={line.y} x2={line.x2} y2={line.y} stroke="#0f4a9b" strokeWidth="1.4" strokeDasharray="3 2" opacity="0.75" />
          ))}

          {/* Floating Rising Stars */}
          <motion.circle
            cx="60"
            cy="36"
            r="2"
            fill="#0f4a9b"
            animate={{ cy: [36, 18, 10], opacity: [0.9, 0.7, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut' }}
          />
          <motion.circle
            cx="48"
            cy="30"
            r="1.8"
            fill="#0284c7"
            animate={{ cy: [30, 16, 8], opacity: [0.8, 0.6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: 0.6, ease: 'easeOut' }}
          />
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 6. BUSINESS 3D GRAPHIC: 3D Global Analytics, Bar Charts & Metric Sphere ── */
function Business3DAnalytics({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center pointer-events-none select-none">
      <motion.div
        className="absolute inset-0 bg-[#0f4a9b]/10 rounded-full blur-lg pointer-events-none"
        animate={{ scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1], opacity: isHovered ? 0.9 : 0.4 }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="bizBarGradLight1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0f4a9b" />
          </linearGradient>
          <linearGradient id="bizBarGradLight2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="bizBarGradLight3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#6b21a8" />
          </linearGradient>
        </defs>

        {/* 3D Global Wireframe Grid */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: isHovered ? 12 : 25, ease: 'linear' }}
          style={{ originX: '82px', originY: '48px' }}
        >
          <circle cx="82" cy="48" r="22" fill="rgba(15,74,155,0.06)" stroke="#0f4a9b" strokeWidth="1.2" />
          <ellipse cx="82" cy="48" rx="22" ry="9" fill="none" stroke="#0284c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.75" />
          <line x1="82" y1="26" x2="82" y2="70" stroke="#0284c7" strokeWidth="1" opacity="0.5" />
        </motion.g>

        {/* 3D Isometric Bar Charts */}
        <motion.g
          animate={{ y: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        >
          <polygon points="20,92 58,104 96,92 58,80" fill="rgba(15,74,155,0.12)" stroke="#0f4a9b" strokeWidth="1.2" />

          {/* Bar 1 */}
          <polygon points="28,86 36,89 36,66 28,63" fill="url(#bizBarGradLight1)" stroke="#0f4a9b" strokeWidth="1" />
          <polygon points="36,89 44,86 44,63 36,66" fill="#0284c7" stroke="#0f4a9b" strokeWidth="1" />
          <polygon points="28,63 36,66 44,63 36,60" fill="#bae6fd" stroke="#ffffff" strokeWidth="0.8" />

          {/* Bar 2 */}
          <polygon points="46,89 54,92 54,54 46,51" fill="url(#bizBarGradLight2)" stroke="#1e3a8a" strokeWidth="1" />
          <polygon points="54,92 62,89 62,51 54,54" fill="#1d4ed8" stroke="#1e3a8a" strokeWidth="1" />
          <polygon points="46,51 54,54 62,51 54,48" fill="#bfdbfe" stroke="#ffffff" strokeWidth="0.8" />

          {/* Bar 3 */}
          <polygon points="64,92 72,95 72,42 64,39" fill="url(#bizBarGradLight3)" stroke="#7e22ce" strokeWidth="1" />
          <polygon points="72,95 80,92 80,39 72,42" fill="#7e22ce" stroke="#7e22ce" strokeWidth="1" />
          <polygon points="64,39 72,42 80,39 72,36" fill="#f3e8ff" stroke="#ffffff" strokeWidth="0.8" />

          {/* Trend Arrow */}
          <path
            d="M 28,60 Q 52,48 76,28"
            fill="none"
            stroke="#C7A24A"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <polygon points="76,24 82,29 74,32" fill="#C7A24A" />
        </motion.g>
      </svg>
    </div>
  );
}

/* ── SUBJECT CONFIGURATION ── */
const IGCSE_SUBJECTS = [
  {
    num: "01",
    title: "IGCSE Maths",
    topics: "Simultaneous Equations · Transformations · Bearings",
    href: "/maths",
    Graphic: Maths3DIcosahedron,
    badgeBg: "bg-[#0f4a9b]/10",
    badgeBorder: "border-[#0f4a9b]/25",
    badgeText: "text-[#0f4a9b]",
    hoverBorder: "hover:border-[#0f4a9b]/40",
  },
  {
    num: "02",
    title: "IGCSE Physics",
    topics: "Electromagnetism · Radioactivity · Energy Transfer",
    href: "/physics",
    Graphic: Physics3DAtom,
    badgeBg: "bg-blue-500/10",
    badgeBorder: "border-blue-500/25",
    badgeText: "text-blue-700",
    hoverBorder: "hover:border-blue-500/40",
  },
  {
    num: "03",
    title: "IGCSE Chemistry",
    topics: "Metal Extraction · Ionic Equations · Acids & Salts",
    href: "/chemistry",
    Graphic: Chemistry3DFlask,
    badgeBg: "bg-teal-500/10",
    badgeBorder: "border-teal-500/25",
    badgeText: "text-teal-700",
    hoverBorder: "hover:border-teal-500/40",
  },
  {
    num: "04",
    title: "IGCSE Biology",
    topics: "Enzyme Action · Aerobic Respiration · Plant Transport",
    href: "/biology",
    Graphic: Biology3DDna,
    badgeBg: "bg-emerald-500/10",
    badgeBorder: "border-emerald-500/25",
    badgeText: "text-emerald-700",
    hoverBorder: "hover:border-emerald-500/40",
  },
  {
    num: "05",
    title: "IGCSE English",
    topics: "Summary Writing · Descriptive Writing · Word Choice",
    href: "/english",
    Graphic: English3DBook,
    badgeBg: "bg-sky-500/10",
    badgeBorder: "border-sky-500/25",
    badgeText: "text-sky-700",
    hoverBorder: "hover:border-sky-500/40",
  },
  {
    num: "06",
    title: "IGCSE Business",
    topics: "Workforce Planning · Production · External Influences",
    href: "/business",
    Graphic: Business3DAnalytics,
    badgeBg: "bg-indigo-500/10",
    badgeBorder: "border-indigo-500/25",
    badgeText: "text-indigo-700",
    hoverBorder: "hover:border-indigo-500/40",
  },
];

export default function IGCSESubjectsCosmicSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative py-12 sm:py-16 bg-[#f8fafc] border-b border-gray-100 overflow-hidden">
      {/* ── BACKGROUND SUBTLE ORNAMENTS & LIGHT AMBIENCE ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0f4a9b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C7A24A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-2 tracking-tight">
            <span className="text-[#0f4a9b]">IGCSE</span> Subjects We Tutor
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
            Six core subjects, each with its own tutor and its own page.
          </p>
        </div>

        {/* ── 6 WHITE HOLOGRAPHIC 3D SUBJECT CARDS (SCROLLABLE ON MOBILE, GRID ON DESKTOP) ── */}
        <div className="flex overflow-x-auto pb-4 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 gap-4 sm:gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 mb-8 snap-x snap-mandatory scrollbar-none">
          {IGCSE_SUBJECTS.map((sub, i) => {
            const GraphicComponent = sub.Graphic;
            const isHovered = hoveredIdx === i;

            return (
              <motion.a
                key={sub.num}
                href={sub.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative flex flex-col justify-between w-[285px] sm:w-auto shrink-0 sm:shrink snap-center rounded-2xl p-5 sm:p-5 bg-white border border-gray-200/90 shadow-xs hover:shadow-lg transition-all duration-300 select-none overflow-hidden ${sub.hoverBorder}`}
                style={{
                  transform: isHovered ? 'translateY(-3px)' : 'translateY(0px)',
                }}
              >
                {/* Top Brand Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0a1f3d] via-[#0f4a9b] to-[#0284c7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Card Top: Dark Circular Number Badge, Title & 3D Vector Graphic */}
                <div className="flex items-start justify-between gap-3 mb-3 relative z-10">
                  <div className="flex-1 pr-1">
                    {/* Dark Solid Circular Number Badge (As in Reference) */}
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0a1f3d] text-white flex items-center justify-center font-black text-[12px] sm:text-[13px] mb-2.5 shadow-[0_2px_8px_rgba(10,31,61,0.25)] ring-2 ring-white"
                    >
                      {sub.num}
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200 leading-snug">
                      {sub.title}
                    </h3>
                  </div>

                  {/* 3D Animated Vector Artifact */}
                  <div className="shrink-0 -mr-1 -mt-1 group-hover:scale-105 transition-transform duration-300">
                    <GraphicComponent isHovered={isHovered} />
                  </div>
                </div>

                {/* Card Bottom: Topic Line */}
                <div className="relative z-10 pt-3 border-t border-gray-100">
                  <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed font-medium">
                    {sub.topics}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Swipe Hint (Clean text only, no dots, no arrows) */}
        <div className="sm:hidden text-center -mt-2 mb-5 text-xs font-semibold text-gray-400 tracking-wide">
          Swipe to see more
        </div>

        {/* ── BOTTOM CONSOLE: "ALSO AVAILABLE" ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="relative max-w-4xl mx-auto rounded-2xl px-5 py-4 bg-gradient-to-r from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] shadow-md overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#C7A24A]/15 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -left-8 -top-8 w-28 h-28 bg-white/10 rounded-full blur-lg pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0 shadow-xs">
                <Lightbulb className="w-4 h-4 text-[#C7A24A]" />
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C7A24A] block mb-0.5">
                  ALSO AVAILABLE
                </span>
                <p className="text-white text-xs sm:text-sm font-medium leading-tight">
                  Additional Mathematics, Economics, and Computer Science at IGCSE, available on request.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
