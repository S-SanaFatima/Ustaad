import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export type SubjectId =
  | 'maths'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'english'
  | 'business'
  | 'economics'
  | 'accounting'
  | 'finance'
  | 'statistics'
  | 'engineering'
  | 'exam-prep';

export interface SubjectItem {
  id: SubjectId;
  name: string;
  category: 'core' | 'commerce' | 'specialised';
  topics: string;
  skills: string;
  href: string;
  cta: string;
  curricula: string[];
}

/* ─────────────────────────────────────────────────────────────────────────────
   3D ANIMATED EMBLEMS (SVG-based 3D isometric & perspective visuals)
───────────────────────────────────────────────────────────────────────────── */

export function Subject3DEmblem({ id, isHovered }: { id: SubjectId; isHovered: boolean }) {
  const reduceMotion = useReducedMotion();

  switch (id) {
    /* ── 1. MATHEMATICS: 3D Rotating Isometric Geometry Prism & Equations ── */
    case 'maths':
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
          {/* Ambient Glow */}
          <div className={`absolute inset-0 bg-blue-500/20 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-50'}`} />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="mathCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="mathCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#0f3c82" />
              </linearGradient>
              <linearGradient id="mathCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
            </defs>

            {/* Orbiting Axis Rings */}
            <motion.ellipse
              cx="50"
              cy="50"
              rx="42"
              ry="18"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="1.8"
              strokeDasharray="3 3"
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: isHovered ? 5 : 10, ease: 'linear' }}
              style={{ transformOrigin: '50px 50px' }}
            />

            {/* 3D Isometric Cube / Polyhedron */}
            <motion.g
              animate={reduceMotion ? {} : {
                y: isHovered ? [-5, 5, -5] : [-3, 3, -3],
                rotate: isHovered ? [-6, 6, -6] : [-3, 3, -3],
              }}
              transition={{ repeat: Infinity, duration: isHovered ? 1.8 : 3.2, ease: 'easeInOut' }}
              style={{ transformOrigin: '50px 50px' }}
            >
              {/* Top Face */}
              <polygon points="50,22 74,35 50,48 26,35" fill="url(#mathCubeTop)" opacity="0.95" />
              {/* Left Face */}
              <polygon points="26,35 50,48 50,76 26,63" fill="url(#mathCubeLeft)" />
              {/* Right Face */}
              <polygon points="50,48 74,35 74,63 50,76" fill="url(#mathCubeRight)" />

              {/* Internal Vertex Accent Lines */}
              <line x1="50" y1="48" x2="50" y2="76" stroke="#bfdbfe" strokeWidth="1.2" opacity="0.7" />
              <line x1="50" y1="48" x2="26" y2="35" stroke="#bfdbfe" strokeWidth="1.2" opacity="0.7" />
              <line x1="50" y1="48" x2="74" y2="35" stroke="#bfdbfe" strokeWidth="1.2" opacity="0.7" />
            </motion.g>

            {/* Floating Math Symbols */}
            <motion.text
              x="14"
              y="26"
              fill="#C7A24A"
              fontSize="13"
              fontWeight="bold"
              animate={reduceMotion ? {} : {
                y: [-4, 4, -4],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            >
              π
            </motion.text>
            <motion.text
              x="76"
              y="32"
              fill="#60a5fa"
              fontSize="13"
              fontWeight="bold"
              animate={reduceMotion ? {} : {
                y: [4, -4, 4],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            >
              ∑
            </motion.text>
            <motion.text
              x="74"
              y="74"
              fill="#C7A24A"
              fontSize="12"
              fontWeight="bold"
              animate={reduceMotion ? {} : {
                scale: [0.95, 1.2, 0.95],
                y: [-2, 2, -2]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              √x
            </motion.text>
          </svg>
        </div>
      );

    /* ── 2. PHYSICS: 3D Atomic Orbitals & Pulsing Energy Core ── */
    case 'physics':
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
          <div className={`absolute inset-0 bg-cyan-500/20 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-50'}`} />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="physCore" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="physLightning" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            {/* Orbit Ring 1 (Rotated 35deg) */}
            <motion.g
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: isHovered ? 4 : 7, ease: 'linear' }}
              style={{ transformOrigin: '50px 50px' }}
            >
              <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#38bdf8" strokeWidth="1.8" opacity="0.85" transform="rotate(35 50 50)" />
              <circle cx="82" cy="40" r="4" fill="#38bdf8" />
            </motion.g>

            {/* Orbit Ring 2 (Rotated -35deg) */}
            <motion.g
              animate={reduceMotion ? {} : { rotate: -360 }}
              transition={{ repeat: Infinity, duration: isHovered ? 4.5 : 8.5, ease: 'linear' }}
              style={{ transformOrigin: '50px 50px' }}
            >
              <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#C7A24A" strokeWidth="1.8" opacity="0.85" transform="rotate(-35 50 50)" />
              <circle cx="18" cy="40" r="4" fill="#C7A24A" />
            </motion.g>

            {/* Pulsing Quantum Nucleus Core */}
            <motion.circle
              cx="50"
              cy="50"
              r="12"
              fill="url(#physCore)"
              animate={reduceMotion ? {} : {
                scale: [1, 1.2, 1],
                filter: ['drop-shadow(0 0 2px #38bdf8)', 'drop-shadow(0 0 8px #38bdf8)', 'drop-shadow(0 0 2px #38bdf8)']
              }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              style={{ transformOrigin: '50px 50px' }}
            />
            {/* Lightning bolt inside core */}
            <motion.polygon
              points="50,42 46,50 49,50 48,58 55,48 51,48"
              fill="url(#physLightning)"
              animate={reduceMotion ? {} : { opacity: [0.8, 1, 0.8], scale: [0.95, 1.1, 0.95] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              style={{ transformOrigin: '50px 50px' }}
            />
          </svg>
        </div>
      );

    /* ── 3. CHEMISTRY: 3D Beaker with Bubbling Solution & Molecule Nodes ── */
    case 'chemistry':
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
          <div className={`absolute inset-0 bg-emerald-500/20 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-50'}`} />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="chemFluid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>

            {/* Glass Flask Body */}
            <path
              d="M44 20 L56 20 L56 34 L74 68 C76 72 74 78 68 78 L32 78 C26 78 24 72 26 68 L44 34 Z"
              fill="rgba(255,255,255,0.3)"
              stroke="#10b981"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Beaker Rim */}
            <rect x="42" y="17" width="16" height="4" rx="2" fill="#10b981" />

            {/* Bubbling Gradient Fluid Inside with oscillating wave */}
            <motion.path
              d="M30 68 L70 68 C71 72 70 76 66 76 L34 76 C30 76 29 72 30 68 Z"
              fill="url(#chemFluid)"
            />
            <motion.path
              d="M36 56 L64 56 L70 68 L30 68 Z"
              fill="url(#chemFluid)"
              opacity="0.88"
              animate={reduceMotion ? {} : { opacity: [0.75, 0.95, 0.75] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            {/* Continuous Rising Bubbles */}
            <motion.circle
              cx="46"
              cy="62"
              r="2.8"
              fill="#ecfdf5"
              animate={reduceMotion ? {} : { cy: [66, 36], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeOut' }}
            />
            <motion.circle
              cx="54"
              cy="64"
              r="3.5"
              fill="#ecfdf5"
              animate={reduceMotion ? {} : { cy: [68, 40], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, delay: 0.4, ease: 'easeOut' }}
            />
            <motion.circle
              cx="40"
              cy="65"
              r="2.4"
              fill="#ecfdf5"
              animate={reduceMotion ? {} : { cy: [68, 44], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.3, delay: 0.8, ease: 'easeOut' }}
            />

            {/* Orbiting 3D Molecule Nodes */}
            <motion.g
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: isHovered ? 5 : 10, ease: 'linear' }}
              style={{ transformOrigin: '50px 50px' }}
            >
              <circle cx="80" cy="30" r="5" fill="#0f4a9b" stroke="#fff" strokeWidth="1.5" />
              <circle cx="86" cy="42" r="3.5" fill="#C7A24A" stroke="#fff" strokeWidth="1" />
              <line x1="80" y1="30" x2="86" y2="42" stroke="#64748b" strokeWidth="1.8" />
            </motion.g>
          </svg>
        </div>
      );

    /* ── 4. BIOLOGY: 3D Twisting DNA Double Helix ── */
    case 'biology':
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
          <div className={`absolute inset-0 bg-teal-500/20 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-50'}`} />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="bioStrand1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#0d9488" />
              </linearGradient>
              <linearGradient id="bioStrand2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* Continuous twisting base pair rungs */}
            {[20, 32, 44, 56, 68, 80].map((y, index) => {
              const offset = Math.sin((index / 5) * Math.PI * 2) * 18;
              return (
                <motion.g
                  key={y}
                  animate={reduceMotion ? {} : {
                    scaleX: [-1, 1, -1],
                  }}
                  transition={{ repeat: Infinity, duration: isHovered ? 1.8 : 3, delay: index * 0.25, ease: 'easeInOut' }}
                  style={{ transformOrigin: '50px ' + y + 'px' }}
                >
                  <line
                    x1={50 - offset}
                    y1={y}
                    x2={50 + offset}
                    y2={y}
                    stroke="#C7A24A"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  {/* Left Node */}
                  <circle cx={50 - offset} cy={y} r="4.5" fill="url(#bioStrand1)" stroke="#fff" strokeWidth="1.2" />
                  {/* Right Node */}
                  <circle cx={50 + offset} cy={y} r="4.5" fill="url(#bioStrand2)" stroke="#fff" strokeWidth="1.2" />
                </motion.g>
              );
            })}
          </svg>
        </div>
      );

    /* ── 5. ENGLISH: 3D Floating Book with Layered Pages & Golden Quill ── */
    case 'english':
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
          <div className={`absolute inset-0 bg-amber-500/20 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-50'}`} />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="quillGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>

            {/* 3D Open Book Base - Continuous Levitation */}
            <motion.g
              animate={reduceMotion ? {} : {
                y: isHovered ? [-4, 4, -4] : [-2.5, 2.5, -2.5]
              }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
            >
              {/* Left Page */}
              <path d="M50 68 C34 60 20 62 16 66 L16 38 C20 34 34 32 50 40 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.6" />
              {/* Right Page */}
              <path d="M50 68 C66 60 80 62 84 66 L84 38 C80 34 66 32 50 40 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.6" />
              {/* Spine */}
              <line x1="50" y1="40" x2="50" y2="68" stroke="#C7A24A" strokeWidth="2.2" />

              {/* Text Lines */}
              <line x1="24" y1="44" x2="42" y2="46" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="24" y1="50" x2="40" y2="52" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="24" y1="56" x2="36" y2="58" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

              <line x1="58" y1="46" x2="76" y2="44" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="58" y1="52" x2="74" y2="50" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
            </motion.g>

            {/* Floating 3D Golden Quill Pen - Continuous Writing Motion */}
            <motion.g
              animate={reduceMotion ? {} : {
                x: isHovered ? [0, 5, 2, 0] : [0, 3, 1, 0],
                y: isHovered ? [0, -6, -2, 0] : [0, -4, -1, 0],
                rotate: isHovered ? [0, 10, -4, 0] : [0, 6, -2, 0],
              }}
              transition={{ repeat: Infinity, duration: isHovered ? 1.8 : 2.6, ease: 'easeInOut' }}
              style={{ transformOrigin: '70px 25px' }}
            >
              <path d="M78 14 C74 18 64 26 58 40 L62 42 C68 30 76 22 82 18 Z" fill="url(#quillGold)" />
              <polygon points="57,41 55,47 61,43" fill="#d97706" />
            </motion.g>
          </svg>
        </div>
      );

    /* ── 6. BUSINESS STUDIES: 3D Isometric Growth Chart & Upward Trend ── */
    case 'business':
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
          <div className={`absolute inset-0 bg-amber-500/20 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-50'}`} />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="bar1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C7A24A" />
                <stop offset="100%" stopColor="#926c15" />
              </linearGradient>
              <linearGradient id="bar2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>
              <linearGradient id="bar3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>

            {/* 3D Bar 1 - Continuous Wave */}
            <motion.g
              animate={reduceMotion ? {} : { scaleY: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0, ease: 'easeInOut' }}
              style={{ transformOrigin: '26px 80px' }}
            >
              <polygon points="20,58 32,52 32,74 20,80" fill="url(#bar1)" />
              <polygon points="20,58 32,52 40,56 28,62" fill="#fef08a" opacity="0.9" />
            </motion.g>

            {/* 3D Bar 2 - Continuous Wave */}
            <motion.g
              animate={reduceMotion ? {} : { scaleY: [1, 1.12, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.3, ease: 'easeInOut' }}
              style={{ transformOrigin: '44px 80px' }}
            >
              <polygon points="38,44 50,38 50,74 38,80" fill="url(#bar2)" />
              <polygon points="38,44 50,38 58,42 46,48" fill="#fef08a" opacity="0.9" />
            </motion.g>

            {/* 3D Bar 3 (Tallest) - Continuous Wave */}
            <motion.g
              animate={reduceMotion ? {} : { scaleY: isHovered ? [1, 1.18, 1] : [1, 1.14, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.6, ease: 'easeInOut' }}
              style={{ transformOrigin: '56px 80px' }}
            >
              <polygon points="56,30 68,24 68,74 56,80" fill="url(#bar3)" />
              <polygon points="56,30 68,24 76,28 64,34" fill="#fffbeb" />
            </motion.g>

            {/* Floating 3D Upward Trend Trajectory - Continuous Levitation */}
            <motion.g
              animate={reduceMotion ? {} : {
                y: isHovered ? [-5, 5, -5] : [-3, 3, -3],
                x: isHovered ? [-2, 2, -2] : [-1, 1, -1]
              }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            >
              <path
                d="M24 50 L42 36 L62 20 L76 16"
                fill="none"
                stroke="#0f4a9b"
                strokeWidth="3.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="76" cy="16" r="4.5" fill="#C7A24A" stroke="#ffffff" strokeWidth="1.5" />
            </motion.g>
          </svg>
        </div>
      );

    /* ── 7. ECONOMICS: 3D Supply & Demand Intersection & Equilibrium ── */
    case 'economics':
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
          <div className={`absolute inset-0 bg-blue-500/20 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-50'}`} />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            {/* 3D Coordinate Grid */}
            <line x1="20" y1="20" x2="20" y2="80" stroke="#94a3b8" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="20" y1="80" x2="80" y2="80" stroke="#94a3b8" strokeWidth="2.2" strokeLinecap="round" />

            {/* Demand Curve (Downward) - Continuous Drawing / Pulsing */}
            <motion.path
              d="M26 30 Q 48 50 74 74"
              fill="none"
              stroke="#0f4a9b"
              strokeWidth="3.5"
              strokeLinecap="round"
              animate={reduceMotion ? {} : {
                pathLength: [0.85, 1, 0.85],
                strokeWidth: [3, 4, 3]
              }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
            />
            {/* Supply Curve (Upward) - Continuous Drawing / Pulsing */}
            <motion.path
              d="M26 74 Q 48 50 74 30"
              fill="none"
              stroke="#C7A24A"
              strokeWidth="3.5"
              strokeLinecap="round"
              animate={reduceMotion ? {} : {
                pathLength: [0.85, 1, 0.85],
                strokeWidth: [3, 4, 3]
              }}
              transition={{ repeat: Infinity, duration: 2.8, delay: 0.4, ease: 'easeInOut' }}
            />

            {/* Equilibrium Ripple Halo */}
            <motion.circle
              cx="50"
              cy="52"
              r="10"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.5"
              animate={reduceMotion ? {} : {
                r: [6, 14, 6],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
            />

            {/* Glowing Equilibrium Point */}
            <motion.circle
              cx="50"
              cy="52"
              r="5.5"
              fill="#fbbf24"
              stroke="#0a1f3d"
              strokeWidth="2"
              animate={reduceMotion ? {} : {
                scale: [1, 1.35, 1],
                filter: ['drop-shadow(0 0 2px #fbbf24)', 'drop-shadow(0 0 6px #fbbf24)', 'drop-shadow(0 0 2px #fbbf24)']
              }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              style={{ transformOrigin: '50px 52px' }}
            />
            <motion.text
              x="57"
              y="49"
              fill="#0a1f3d"
              fontSize="11"
              fontWeight="extrabold"
              animate={reduceMotion ? {} : { opacity: [0.75, 1, 0.75] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            >
              E₀
            </motion.text>
          </svg>
        </div>
      );

    /* ── 8. ACCOUNTING: 3D Isometric Ledger & Balance Scales ── */
    case 'accounting':
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
          <div className={`absolute inset-0 bg-amber-500/20 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-50'}`} />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            {/* Isometric Ledger Stack - Continuous subtle hover float */}
            <motion.g
              animate={reduceMotion ? {} : { y: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              {/* Top Layer */}
              <polygon points="50,26 78,38 50,50 22,38" fill="#f8fafc" stroke="#C7A24A" strokeWidth="2" />
              <polygon points="22,38 50,50 50,62 22,50" fill="#C7A24A" />
              <polygon points="50,50 78,38 78,50 50,62" fill="#a17c24" />

              {/* Second Base Sheet */}
              <polygon points="22,54 50,66 50,76 22,64" fill="#0f4a9b" />
              <polygon points="50,66 78,54 78,64 50,76" fill="#0a3a79" />
            </motion.g>

            {/* Continuously Levitating & Rotating Gold Coin Badge */}
            <motion.g
              animate={reduceMotion ? {} : {
                y: isHovered ? [-5, 5, -5] : [-3.5, 3.5, -3.5],
                scale: [1, 1.15, 1],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              style={{ transformOrigin: '50px 34px' }}
            >
              <circle
                cx="50"
                cy="34"
                r="8"
                fill="#fbbf24"
                stroke="#d97706"
                strokeWidth="1.8"
                className="shadow-md"
              />
              <text x="46.5" y="38" fill="#78350f" fontSize="11" fontWeight="900">$</text>
            </motion.g>
          </svg>
        </div>
      );

    /* ── 9. FINANCE: 3D Compound Growth Shield & Currency Ring ── */
    case 'finance':
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
          <div className={`absolute inset-0 bg-yellow-500/20 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-50'}`} />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            {/* Continuously Orbiting Coin Ring */}
            <motion.g
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: isHovered ? 4 : 8, ease: 'linear' }}
              style={{ transformOrigin: '50px 50px' }}
            >
              <ellipse
                cx="50"
                cy="50"
                rx="36"
                ry="16"
                fill="none"
                stroke="#C7A24A"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <circle cx="86" cy="50" r="3.5" fill="#fbbf24" />
              <circle cx="14" cy="50" r="3.5" fill="#fbbf24" />
            </motion.g>

            {/* 3D Shield - Continuous Breathing Scale */}
            <motion.path
              d="M50 20 C64 20 74 24 74 38 C74 58 50 78 50 78 C50 78 26 58 26 38 C26 24 36 20 50 20 Z"
              fill="#0f4a9b"
              stroke="#C7A24A"
              strokeWidth="2.5"
              animate={reduceMotion ? {} : {
                scale: isHovered ? [1, 1.1, 1] : [1, 1.06, 1],
                filter: ['drop-shadow(0 0 2px rgba(199,162,74,0.3))', 'drop-shadow(0 0 8px rgba(199,162,74,0.6))', 'drop-shadow(0 0 2px rgba(199,162,74,0.3))']
              }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              style={{ transformOrigin: '50px 50px' }}
            />

            {/* % Tag - Floating Pulse */}
            <motion.text
              x="39"
              y="53"
              fill="#ffffff"
              fontSize="17"
              fontWeight="900"
              animate={reduceMotion ? {} : { scale: [0.95, 1.1, 0.95] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              style={{ transformOrigin: '50px 48px' }}
            >
              %
            </motion.text>
          </svg>
        </div>
      );


    /* ── 10. STATISTICS: 3D Gaussian Bell Curve Distribution & Dynamic Data Wave ── */
    case 'statistics':
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
          <div className={`absolute inset-0 bg-indigo-500/20 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-50'}`} />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="statCurveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="statScanLine" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C7A24A" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>

            {/* Base Grid Axis */}
            <line x1="12" y1="74" x2="88" y2="74" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />

            {/* Animated Shaded Area under Curve */}
            <motion.path
              d="M16 74 C 32 74, 38 26, 50 26 C 62 26, 68 74, 84 74 Z"
              fill="url(#statCurveGrad)"
              animate={reduceMotion ? {} : {
                d: isHovered
                  ? [
                      "M16 74 C 32 74, 38 22, 50 22 C 62 22, 68 74, 84 74 Z",
                      "M16 74 C 32 74, 38 30, 50 30 C 62 30, 68 74, 84 74 Z",
                      "M16 74 C 32 74, 38 22, 50 22 C 62 22, 68 74, 84 74 Z"
                    ]
                  : [
                      "M16 74 C 32 74, 38 26, 50 26 C 62 26, 68 74, 84 74 Z",
                      "M16 74 C 32 74, 38 30, 50 30 C 62 30, 68 74, 84 74 Z",
                      "M16 74 C 32 74, 38 26, 50 26 C 62 26, 68 74, 84 74 Z"
                    ]
              }}
              transition={{ repeat: Infinity, duration: isHovered ? 1.6 : 3, ease: 'easeInOut' }}
            />

            {/* Animated Bell Curve Line */}
            <motion.path
              d="M16 74 C 32 74, 38 26, 50 26 C 62 26, 68 74, 84 74"
              fill="none"
              stroke="#0f4a9b"
              strokeWidth="3.5"
              strokeLinecap="round"
              animate={reduceMotion ? {} : {
                d: isHovered
                  ? [
                      "M16 74 C 32 74, 38 22, 50 22 C 62 22, 68 74, 84 74",
                      "M16 74 C 32 74, 38 30, 50 30 C 62 30, 68 74, 84 74",
                      "M16 74 C 32 74, 38 22, 50 22 C 62 22, 68 74, 84 74"
                    ]
                  : [
                      "M16 74 C 32 74, 38 26, 50 26 C 62 26, 68 74, 84 74",
                      "M16 74 C 32 74, 38 30, 50 30 C 62 30, 68 74, 84 74",
                      "M16 74 C 32 74, 38 26, 50 26 C 62 26, 68 74, 84 74"
                    ]
              }}
              transition={{ repeat: Infinity, duration: isHovered ? 1.6 : 3, ease: 'easeInOut' }}
            />

            {/* Active Sweeping / Pulsing Mean Laser Line */}
            <motion.line
              x1="50"
              y1="24"
              x2="50"
              y2="74"
              stroke="url(#statScanLine)"
              strokeWidth="2.5"
              strokeDasharray="3 2"
              animate={reduceMotion ? {} : {
                opacity: [0.4, 1, 0.4],
                strokeWidth: [2, 3, 2]
              }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            />

            {/* Data Point Floating Node at Peak (μ) */}
            <motion.circle
              cx="50"
              cy="26"
              r="4"
              fill="#C7A24A"
              stroke="#ffffff"
              strokeWidth="1.5"
              animate={reduceMotion ? {} : {
                y: isHovered ? [-4, 4, -4] : [-2, 2, -2],
                scale: [1, 1.25, 1],
              }}
              transition={{ repeat: Infinity, duration: isHovered ? 1.6 : 3, ease: 'easeInOut' }}
            />

            {/* Left standard deviation point (-σ) */}
            <motion.circle
              cx="34"
              cy="52"
              r="3"
              fill="#0f4a9b"
              stroke="#ffffff"
              strokeWidth="1"
              animate={reduceMotion ? {} : { scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2.2, delay: 0.3 }}
            />

            {/* Right standard deviation point (+σ) */}
            <motion.circle
              cx="66"
              cy="52"
              r="3"
              fill="#0f4a9b"
              stroke="#ffffff"
              strokeWidth="1"
              animate={reduceMotion ? {} : { scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2.2, delay: 0.6 }}
            />

            {/* Mean text label */}
            <motion.text
              x="46"
              y="87"
              fill="#0f4a9b"
              fontSize="11"
              fontWeight="bold"
              animate={reduceMotion ? {} : { opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              μ
            </motion.text>
            <motion.text
              x="68"
              y="87"
              fill="#C7A24A"
              fontSize="10"
              fontWeight="bold"
              animate={reduceMotion ? {} : { opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
            >
              +σ
            </motion.text>
          </svg>
        </div>
      );

    /* ── 11. ENGINEERING: 3D Interlocking Spinning Gears & Blueprint ── */
    case 'engineering':
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
          <div className={`absolute inset-0 bg-blue-500/20 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-50'}`} />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            {/* Large Gear (Rotates Clockwise continuously) */}
            <motion.g
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: isHovered ? 4 : 9, ease: 'linear' }}
              style={{ transformOrigin: '42px 46px' }}
            >
              <circle cx="42" cy="46" r="22" fill="#0f4a9b" />
              <circle cx="42" cy="46" r="9" fill="#ffffff" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <rect
                  key={angle}
                  x="38"
                  y="20"
                  width="8"
                  height="7"
                  rx="1.5"
                  fill="#0f4a9b"
                  transform={`rotate(${angle} 42 46)`}
                />
              ))}
            </motion.g>

            {/* Small Interlocking Gold Gear (Rotates Counter-Clockwise continuously) */}
            <motion.g
              animate={reduceMotion ? {} : { rotate: -360 }}
              transition={{ repeat: Infinity, duration: isHovered ? 2.8 : 6, ease: 'linear' }}
              style={{ transformOrigin: '70px 62px' }}
            >
              <circle cx="70" cy="62" r="14" fill="#C7A24A" />
              <circle cx="70" cy="62" r="5" fill="#ffffff" />
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <rect
                  key={angle}
                  x="67"
                  y="45"
                  width="6"
                  height="5"
                  rx="1"
                  fill="#C7A24A"
                  transform={`rotate(${angle} 70 62)`}
                />
              ))}
            </motion.g>
          </svg>
        </div>
      );

    /* ── 12. EXAM PREP: 3D Target Bullseye with Radar Sweep & Floating A* Badge ── */
    case 'exam-prep':
    default:
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none pointer-events-none">
          <div className={`absolute inset-0 bg-red-500/20 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-50'}`} />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="radarSweep" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C7A24A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Continuous Pulsing Outer Ripple */}
            <motion.circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="#0f4a9b"
              strokeWidth="1.5"
              animate={reduceMotion ? {} : {
                r: [32, 42, 32],
                opacity: [0.6, 0.1, 0.6],
              }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
            />

            {/* Concentric 3D Target Rings */}
            <circle cx="50" cy="50" r="34" fill="rgba(15,74,155,0.06)" stroke="#0f4a9b" strokeWidth="1.8" />
            <circle cx="50" cy="50" r="24" fill="rgba(199,162,74,0.12)" stroke="#C7A24A" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="50" cy="50" r="14" fill="#0f4a9b" />

            {/* Continuous 360° Rotating Radar Crosshair Sweep Line */}
            <motion.g
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: isHovered ? 2.5 : 5, ease: 'linear' }}
              style={{ transformOrigin: '50px 50px' }}
            >
              <line x1="50" y1="50" x2="50" y2="16" stroke="#C7A24A" strokeWidth="2.5" strokeLinecap="round" />
              <polygon points="50,50 42,20 50,16 58,20" fill="url(#radarSweep)" opacity="0.35" />
            </motion.g>

            {/* Pulsing Golden Bullseye Center */}
            <motion.circle
              cx="50"
              cy="50"
              r="6.5"
              fill="#fbbf24"
              stroke="#d97706"
              strokeWidth="1"
              animate={reduceMotion ? {} : {
                scale: [1, 1.35, 1],
                filter: ['drop-shadow(0 0 2px #fbbf24)', 'drop-shadow(0 0 6px #fbbf24)', 'drop-shadow(0 0 2px #fbbf24)']
              }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              style={{ transformOrigin: '50px 50px' }}
            />

            {/* Continuously Levitating & Floating A* Achievement Badge */}
            <motion.g
              animate={reduceMotion ? {} : {
                y: isHovered ? [-5, 5, -5] : [-3, 3, -3],
                rotate: isHovered ? [-4, 4, -4] : [-2, 2, -2]
              }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              style={{ transformOrigin: '76px 24px' }}
            >
              <rect x="62" y="14" width="28" height="19" rx="6" fill="#0a1f3d" stroke="#C7A24A" strokeWidth="1.8" className="shadow-md" />
              <text x="68" y="28" fill="#fbbf24" fontSize="11" fontWeight="900" letterSpacing="0.5">A*</text>
            </motion.g>
          </svg>
        </div>
      );

  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   3D PARALLAX GLASS CARD COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export function Subject3DCard({ subject }: { subject: SubjectItem }) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt state
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    // Smooth tilt up to 6.5 degrees
    setRotateX(percentY * -6.5);
    setRotateY(percentX * 6.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const isGoldCategory = subject.category === 'commerce';

  return (
    <div style={{ perspective: 1000 }} className="w-full h-full">
      <motion.a
        ref={cardRef}
        href={subject.href}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          scale: isHovered && !reduceMotion ? 1.02 : 1,
          y: isHovered && !reduceMotion ? -3 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 22,
          stiffness: 320,
          mass: 0.6,
        }}
        className={`group relative h-full rounded-[20px] bg-white border border-[#E5E7EB] p-4 sm:p-5 flex flex-col justify-between overflow-hidden transition-shadow duration-300 select-none ${
          isGoldCategory
            ? 'hover:border-[#C7A24A]/60 hover:shadow-[0_16px_45px_rgba(199,162,74,0.16)]'
            : 'hover:border-[#0f4a9b]/50 hover:shadow-[0_16px_45px_rgba(15,74,155,0.16)]'
        }`}
        style={{
          boxShadow: isHovered
            ? isGoldCategory
              ? '0 16px 45px rgba(199,162,74,0.16)'
              : '0 16px 45px rgba(15,74,155,0.16)'
            : '0 3px 14px rgba(0,0,0,0.03)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 1. Dynamic Specular Light Glare Reflection */}
        {isHovered && !reduceMotion && (
          <div
            className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 240px at ${mousePosition.x}px ${mousePosition.y}px, ${
                isGoldCategory ? 'rgba(199,162,74,0.12)' : 'rgba(15,74,155,0.10)'
              }, transparent 70%)`,
            }}
          />
        )}

        {/* 2. Top Decorative Header Line & 3D Depth Card Content */}
        <div className="relative z-20 flex flex-col">
          {/* Header Row: 3D Animated Emblem & Category Badge */}
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            {/* 3D Animated Visual with Float effect */}
            <div
              className="relative transition-transform duration-300 group-hover:scale-105"
              style={{ transform: 'translateZ(25px)' }}
            >
              <Subject3DEmblem id={subject.id} isHovered={isHovered} />
            </div>

            {/* Curricula Chips */}
            <div
              className="flex flex-wrap gap-1 max-w-[130px] justify-end"
              style={{ transform: 'translateZ(15px)' }}
            >
              {subject.curricula.map((c) => (
                <span
                  key={c}
                  className="px-1.5 py-0.5 text-[9.5px] font-bold rounded bg-[#f1f5f9] text-[#475569] border border-slate-200/80 group-hover:bg-[#0f4a9b]/10 group-hover:text-[#0f4a9b] group-hover:border-[#0f4a9b]/20 transition-colors"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Subject Name */}
          <h4
            className="text-[16px] sm:text-[17px] font-extrabold text-[#0a1f3d] mb-1 transition-colors group-hover:text-[#0f4a9b] leading-tight"
            style={{ transform: 'translateZ(18px)' }}
          >
            {subject.name}
          </h4>

          {/* Topics Subtitle */}
          <p
            className="text-[11.5px] sm:text-xs text-gray-500 font-medium leading-relaxed mb-2"
            style={{ transform: 'translateZ(14px)' }}
          >
            {subject.topics}
          </p>

          {/* Gold Accent Divider */}
          <div
            className="w-10 h-[2px] bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-2 group-hover:w-16 transition-all duration-300"
            style={{ transform: 'translateZ(10px)' }}
          />

          {/* Key Learning Skills Focus */}
          <p
            className="text-[11.5px] sm:text-xs text-[#1e293b] font-semibold leading-relaxed"
            style={{ transform: 'translateZ(14px)' }}
          >
            {subject.skills}
          </p>
        </div>

        {/* 3. Bottom CTA Action (Single-CTA rule: Explore [Subject] →) */}
        <div
          className="relative z-20 mt-4 pt-3 border-t border-slate-100 flex items-center justify-between"
          style={{ transform: 'translateZ(20px)' }}
        >
          <span
            className={`inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13px] font-bold tracking-tight transition-all duration-300 ${
              isGoldCategory
                ? 'text-[#a17c24] group-hover:text-[#C7A24A]'
                : 'text-[#0f4a9b] group-hover:text-[#1e5ba8]'
            }`}
          >
            <span>{subject.cta}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </motion.a>
    </div>
  );
}

