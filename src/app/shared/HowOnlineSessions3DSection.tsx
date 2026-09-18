import React, { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { 
  CheckCircle2
} from 'lucide-react';
import { GradientHeadingText } from './GradientHeadingText';

/* ── 3D VECTOR EMBLEM 01: Live Past Papers (3D Exam Booklet + Holographic Pen) ── */
function LiveExamPaper3D({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Sapphire/Gold Glow */}
      <div
        className={`absolute inset-0 bg-blue-600/20 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-125 bg-blue-500/30' : 'opacity-40 scale-90'
        }`}
      />

      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="paprPaperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          <linearGradient id="paprGoldPen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffbeb" />
            <stop offset="40%" stopColor="#fde047" />
            <stop offset="75%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <filter id="paprShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#0f4a9b" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Orbiting Exam Question Nodes */}
        <motion.ellipse
          cx="60"
          cy="60"
          rx="48"
          ry="18"
          fill="none"
          stroke="url(#paprGoldPen)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          opacity={isHovered ? 0.8 : 0.4}
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: isHovered ? 8 : 16, ease: 'linear' }}
          style={{ originX: '60px', originY: '60px' }}
        />

        {/* 3D Stacked Paper Layer Behind */}
        <rect
          x="28"
          y="28"
          width="54"
          height="66"
          rx="6"
          fill="#cbd5e1"
          stroke="#94a3b8"
          strokeWidth="1"
          transform="rotate(-7 55 60)"
          opacity="0.8"
        />

        {/* Main 3D Exam Paper Body */}
        <motion.g
          filter="url(#paprShadow)"
          animate={{
            y: isHovered ? [-3, 3, -3] : [-1.5, 1.5, -1.5],
            rotate: isHovered ? [3, -2, 3] : [0, 0, 0],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 2.5 : 4, ease: 'easeInOut' }}
        >
          <rect
            x="32"
            y="22"
            width="58"
            height="72"
            rx="6"
            fill="url(#paprPaperGrad)"
            stroke="#0f4a9b"
            strokeWidth="1.6"
          />

          {/* Exam Header Bar */}
          <rect x="36" y="27" width="50" height="12" rx="3" fill="#0f4a9b" />
          <text x="40" y="36" fill="#ffffff" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">
            AQA · EDEXCEL
          </text>

          {/* Content Lines */}
          <motion.line
            x1="38"
            y1="46"
            x2="80"
            y2="46"
            stroke="#64748b"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line x1="38" y1="54" x2="74" y2="54" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <line x1="38" y1="62" x2="66" y2="62" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

          {/* Holographic Question Highlight Area */}
          <rect
            x="38"
            y="70"
            width="46"
            height="16"
            rx="3"
            fill="#C7A24A"
            fillOpacity={isHovered ? 0.28 : 0.15}
            stroke="#C7A24A"
            strokeWidth="0.8"
          />
          <text x="42" y="81" fill="#854d0e" fontSize="6" fontWeight="bold" fontFamily="sans-serif">
            [Q4: 6 MARKS]
          </text>
        </motion.g>

        {/* 3D Floating Gold Digital Pen */}
        <motion.g
          animate={{
            x: isHovered ? [0, 6, -3, 0] : [0, 3, 0],
            y: isHovered ? [0, -8, -2, 0] : [0, -4, 0],
            rotate: isHovered ? [45, 38, 48, 45] : [45, 42, 45],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 2 : 3.5, ease: 'easeInOut' }}
          style={{ originX: '88px', originY: '40px' }}
        >
          {/* Pen Shaft */}
          <rect x="82" y="15" width="8" height="42" rx="4" fill="url(#paprGoldPen)" stroke="#854d0e" strokeWidth="1" />
          {/* Pen Nib */}
          <polygon points="82,57 90,57 86,66" fill="#0f4a9b" stroke="#0a1f3d" strokeWidth="0.8" />
          {/* Pen Laser Spark */}
          <circle cx="86" cy="67" r="2.2" fill="#38bdf8" />
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 3D VECTOR EMBLEM 02: Live Mark Scheme (3D Official Grading Board & Emerald Check) ── */
function MarkScheme3D({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Emerald/Cyan Glow */}
      <div
        className={`absolute inset-0 bg-emerald-500/20 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-125 bg-emerald-400/30' : 'opacity-40 scale-90'
        }`}
      />

      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="mrkClipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="mrkGoldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <linearGradient id="mrkEmeraldCheck" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>

          <filter id="mrkShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#047857" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Orbiting Verification Ring */}
        <motion.circle
          cx="60"
          cy="60"
          r="46"
          fill="none"
          stroke="url(#mrkGoldTrim)"
          strokeWidth="1.2"
          strokeDasharray="8 6"
          opacity={isHovered ? 0.8 : 0.35}
          animate={{ rotate: [0, -360] }}
          transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
          style={{ originX: '60px', originY: '60px' }}
        />

        {/* Clipboard Backboard */}
        <motion.g
          filter="url(#mrkShadow)"
          animate={{
            y: isHovered ? [-3, 3, -3] : [-1.5, 1.5, -1.5],
          }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        >
          {/* Board */}
          <rect x="26" y="24" width="68" height="74" rx="8" fill="url(#mrkClipGrad)" stroke="#334155" strokeWidth="1.5" />
          
          {/* Top Metal Clip */}
          <rect x="44" y="16" width="32" height="12" rx="3" fill="url(#mrkGoldTrim)" stroke="#854d0e" strokeWidth="1" />
          <circle cx="60" cy="22" r="2.5" fill="#0f172a" />

          {/* Scheme Inner Sheet */}
          <rect x="32" y="32" width="56" height="60" rx="4" fill="#ffffff" />

          {/* Criteria Checklist Rows */}
          {/* Row 1 */}
          <circle cx="40" cy="44" r="4.5" fill="#10b981" />
          <path d="M38 44 L40 46 L43 42" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="48" y1="44" x2="78" y2="44" stroke="#0f4a9b" strokeWidth="2.5" strokeLinecap="round" />

          {/* Row 2 */}
          <circle cx="40" cy="58" r="4.5" fill="#10b981" />
          <path d="M38 58 L40 60 L43 56" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="48" y1="58" x2="72" y2="58" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />

          {/* Row 3 */}
          <circle cx="40" cy="72" r="4.5" fill="url(#mrkGoldTrim)" />
          <path d="M38 72 L40 74 L43 70" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="48" y1="72" x2="68" y2="72" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />

          {/* Score Badge: 100% Full Marks */}
          <rect x="34" y="80" width="52" height="9" rx="2" fill="#ecfdf5" stroke="#10b981" strokeWidth="0.8" />
          <text x="42" y="87" fill="#047857" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">
            M1 + A1 + B1 AWARDED
          </text>
        </motion.g>

        {/* 3D Floating Official Wax/Grade Stamp Emblem */}
        <motion.g
          animate={{
            scale: isHovered ? [1, 1.15, 1] : [1, 1.05, 1],
            rotate: isHovered ? [0, 8, -4, 0] : [0, 4, 0],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 2 : 3.6, ease: 'easeInOut' }}
          style={{ originX: '84px', originY: '74px' }}
        >
          <circle cx="84" cy="74" r="16" fill="url(#mrkEmeraldCheck)" stroke="#ffffff" strokeWidth="2" filter="url(#mrkShadow)" />
          <text x="73" y="77" fill="#ffffff" fontSize="8" fontWeight="900" fontFamily="sans-serif">
            +MAX
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 3D VECTOR EMBLEM 03: Session Recordings (3D Cinema Camera & Pulsing Live REC) ── */
function VideoRecording3D({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Crimson/Violet Glow */}
      <div
        className={`absolute inset-0 bg-rose-500/20 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-125 bg-rose-500/35' : 'opacity-40 scale-90'
        }`}
      />

      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="vidBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="60%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="vidLensGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="40%" stopColor="#0284c7" />
            <stop offset="80%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#0a1f3d" />
          </linearGradient>

          <linearGradient id="vidGoldReel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <filter id="vidShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#e11d48" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Orbiting Playback / Revision Archive Ring */}
        <motion.ellipse
          cx="60"
          cy="60"
          rx="48"
          ry="18"
          fill="none"
          stroke="url(#vidGoldReel)"
          strokeWidth="1.2"
          strokeDasharray="6 6"
          opacity={isHovered ? 0.8 : 0.35}
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          style={{ originX: '60px', originY: '60px' }}
        />

        {/* 3D Camera Body */}
        <motion.g
          filter="url(#vidShadow)"
          animate={{
            y: isHovered ? [-3, 3, -3] : [-1.5, 1.5, -1.5],
          }}
          transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
        >
          {/* Main Camera Housing */}
          <rect x="24" y="36" width="56" height="48" rx="8" fill="url(#vidBodyGrad)" stroke="#334155" strokeWidth="1.6" />

          {/* Golden Top Dual Film Reels */}
          <circle cx="38" cy="30" r="10" fill="url(#vidGoldReel)" stroke="#854d0e" strokeWidth="1" />
          <circle cx="38" cy="30" r="3" fill="#0f172a" />
          <circle cx="62" cy="30" r="10" fill="url(#vidGoldReel)" stroke="#854d0e" strokeWidth="1" />
          <circle cx="62" cy="30" r="3" fill="#0f172a" />

          {/* Projecting Camera Lens */}
          <path d="M 80 46 L 96 36 L 96 74 L 80 64 Z" fill="url(#vidLensGlass)" stroke="#0284c7" strokeWidth="1.2" />

          {/* Viewfinder Screen */}
          <rect x="30" y="44" width="44" height="28" rx="4" fill="#0a1f3d" stroke="#1e3a8a" strokeWidth="1" />

          {/* Glowing Play Triangle */}
          <polygon points="46,51 46,65 60,58" fill="#38bdf8" />

          {/* Audio Waveform Bars Inside Screen */}
          <line x1="34" y1="67" x2="34" y2="61" stroke="#C7A24A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="38" y1="67" x2="38" y2="58" stroke="#C7A24A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="66" y1="67" x2="66" y2="59" stroke="#C7A24A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="70" y1="67" x2="70" y2="63" stroke="#C7A24A" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* 3D Pulsing "LIVE REC" Ruby Beacon */}
        <motion.g
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
        >
          <rect x="28" y="74" width="30" height="7" rx="3" fill="#e11d48" />
          <circle cx="33" cy="77.5" r="2" fill="#ffffff" />
          <text x="38" y="79.5" fill="#ffffff" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">
            REC 1080p
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 3D VECTOR EMBLEM 04: Same Tutor Weekly (3D Golden Specialist Crest & Laurel) ── */
function TutorSpecialist3D({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Gold/Royal Blue Glow */}
      <div
        className={`absolute inset-0 bg-amber-500/20 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-125 bg-amber-400/30' : 'opacity-40 scale-90'
        }`}
      />

      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="tutGoldShield" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffbeb" />
            <stop offset="35%" stopColor="#fde047" />
            <stop offset="70%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <linearGradient id="tutNavyCore" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="60%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#0a1f3d" />
          </linearGradient>

          <filter id="tutShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#C7A24A" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Orbiting Consistency Link Rings */}
        <motion.circle
          cx="60"
          cy="60"
          r="48"
          fill="none"
          stroke="url(#tutGoldShield)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          opacity={isHovered ? 0.8 : 0.4}
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          style={{ originX: '60px', originY: '60px' }}
        />

        {/* 3D Specialist Shield Body */}
        <motion.g
          filter="url(#tutShadow)"
          animate={{
            y: isHovered ? [-3, 3, -3] : [-1.5, 1.5, -1.5],
            rotate: isHovered ? [-2, 2, -2] : [0, 0, 0],
          }}
          transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
        >
          {/* Outer Shield Frame */}
          <path
            d="M 60 18 L 88 32 C 88 64, 76 86, 60 98 C 44 86, 32 64, 32 32 Z"
            fill="url(#tutNavyCore)"
            stroke="url(#tutGoldShield)"
            strokeWidth="2.5"
          />

          {/* Golden Crown / Academic Laurel at Top */}
          <path
            d="M 48 36 L 54 26 L 60 34 L 66 26 L 72 36 Z"
            fill="url(#tutGoldShield)"
            stroke="#854d0e"
            strokeWidth="0.8"
          />

          {/* Specialist Tutor Avatar Silhouette */}
          {/* Head */}
          <circle cx="60" cy="50" r="9" fill="url(#tutGoldShield)" stroke="#854d0e" strokeWidth="1" />
          {/* Shoulders */}
          <path
            d="M 45 74 C 45 62, 75 62, 75 74 Z"
            fill="url(#tutGoldShield)"
            stroke="#854d0e"
            strokeWidth="1"
          />

          {/* 1-on-1 Dedicated Badge */}
          <rect x="42" y="78" width="36" height="9" rx="3" fill="#ffffff" stroke="#0f4a9b" strokeWidth="0.8" />
          <text x="47" y="85" fill="#0a1f3d" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">
            1-TO-1 SPECIALIST
          </text>
        </motion.g>

        {/* Sparkle Nodes */}
        <motion.circle
          cx="88"
          cy="36"
          r="2.5"
          fill="#fde047"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        />
        <motion.circle
          cx="32"
          cy="36"
          r="2"
          fill="#fde047"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.2, delay: 0.5 }}
        />
      </svg>
    </div>
  );
}

/* ── 3D VECTOR EMBLEM 05: Fortnightly Report (3D Biometric Growth Cylinder & Target) ── */
function ProgressReport3D({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Blue/Cyan Glow */}
      <div
        className={`absolute inset-0 bg-sky-500/20 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-125 bg-sky-400/30' : 'opacity-40 scale-90'
        }`}
      />

      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="repBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f4a9b" />
            <stop offset="60%" stopColor="#0a1f3d" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="repBarGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <linearGradient id="repBarBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <filter id="repShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#0284c7" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Orbiting Target Ring */}
        <motion.circle
          cx="60"
          cy="60"
          r="48"
          fill="none"
          stroke="url(#repBarGold)"
          strokeWidth="1.2"
          strokeDasharray="6 6"
          opacity={isHovered ? 0.8 : 0.35}
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
          style={{ originX: '60px', originY: '60px' }}
        />

        {/* 3D Isometric Chart Stage Base */}
        <motion.g
          filter="url(#repShadow)"
          animate={{
            y: isHovered ? [-3, 3, -3] : [-1.5, 1.5, -1.5],
          }}
          transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut' }}
        >
          {/* Base Platform Cylinder */}
          <ellipse cx="60" cy="88" rx="38" ry="14" fill="url(#repBaseGrad)" stroke="#38bdf8" strokeWidth="1.2" />

          {/* Bar 1 (Baseline - Wk 0) */}
          <rect x="36" y="58" width="10" height="26" rx="2" fill="#64748b" stroke="#334155" strokeWidth="0.8" />
          <ellipse cx="41" cy="58" rx="5" ry="2.5" fill="#94a3b8" />

          {/* Bar 2 (Midway - Wk 2) */}
          <rect x="52" y="44" width="11" height="40" rx="2" fill="url(#repBarBlue)" stroke="#0369a1" strokeWidth="0.8" />
          <ellipse cx="57.5" cy="44" rx="5.5" ry="2.5" fill="#7dd3fc" />

          {/* Bar 3 (Target Grade 9 - Wk 4) */}
          <motion.g
            animate={{
              y: isHovered ? [-4, 0, -4] : [0, 0, 0],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <rect x="69" y="28" width="13" height="56" rx="2" fill="url(#repBarGold)" stroke="#854d0e" strokeWidth="0.8" />
            <ellipse cx="75.5" cy="28" rx="6.5" ry="3" fill="#fef08a" />
            
            {/* Top Grade Flag '9' */}
            <circle cx="75.5" cy="18" r="7.5" fill="#0f4a9b" stroke="#C7A24A" strokeWidth="1.2" />
            <text x="73" y="21" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="sans-serif">
              9
            </text>
          </motion.g>

          {/* Upward Ascending Trend Line */}
          <path
            d="M 40 54 Q 58 40 76 24"
            fill="none"
            stroke="#fde047"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={isHovered ? 'none' : '4 2'}
          />
        </motion.g>

        {/* Floating 2-Week Interval Badge */}
        <motion.g
          animate={{
            scale: isHovered ? [1, 1.1, 1] : [1, 1.04, 1],
          }}
          transition={{ repeat: Infinity, duration: 2.4 }}
        >
          <rect x="22" y="16" width="34" height="10" rx="3" fill="#0f4a9b" stroke="#38bdf8" strokeWidth="0.8" />
          <text x="25" y="23" fill="#ffffff" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">
            14-DAY PULSE
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 3D VECTOR EMBLEM 06: Just a Laptop (3D MacBook + Orbiting Wi-Fi Waves) ── */
function LaptopConnect3D({ isHovered, location }: { isHovered: boolean; location: string }) {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Royal Indigo Glow */}
      <div
        className={`absolute inset-0 bg-indigo-500/20 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-125 bg-indigo-400/30' : 'opacity-40 scale-90'
        }`}
      />

      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="lapBodyMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          <linearGradient id="lapScreenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#0a1f3d" />
          </linearGradient>

          <linearGradient id="lapWifiGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <filter id="lapShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#0f4a9b" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Orbiting Wi-Fi Energy Waves */}
        <motion.circle
          cx="60"
          cy="32"
          r="26"
          fill="none"
          stroke="url(#lapWifiGold)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          opacity={isHovered ? 0.9 : 0.4}
          animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="60"
          cy="32"
          r="16"
          fill="none"
          stroke="url(#lapWifiGold)"
          strokeWidth="1.4"
          animate={{ scale: [0.85, 1.2, 0.85], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 0.3 }}
        />

        {/* 3D Laptop Body */}
        <motion.g
          filter="url(#lapShadow)"
          animate={{
            y: isHovered ? [-3, 3, -3] : [-1.5, 1.5, -1.5],
            rotate: isHovered ? [-1, 1, -1] : [0, 0, 0],
          }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        >
          {/* Laptop Screen Bezel */}
          <rect x="26" y="26" width="68" height="46" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.2" />

          {/* Retina Screen Display */}
          <rect x="30" y="30" width="60" height="38" rx="3" fill="url(#lapScreenGlow)" />

          {/* Live Virtual Classroom Interface on Screen */}
          {/* Tutor Video Bubble */}
          <circle cx="40" cy="42" r="6" fill="#fde047" stroke="#ffffff" strokeWidth="1" />
          {/* Whiteboard Math Equation */}
          <line x1="52" y1="38" x2="82" y2="38" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="52" y1="44" x2="76" y2="44" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="52" y1="50" x2="68" y2="50" stroke="#cbd5e1" strokeWidth="1" strokeLinecap="round" />

          {/* Screen Camera Dot */}
          <circle cx="60" cy="28" r="1" fill="#38bdf8" />

          {/* 3D Laptop Bottom Base / Keyboard Deck */}
          <path
            d="M 16 72 L 104 72 L 96 82 L 24 82 Z"
            fill="url(#lapBodyMetal)"
            stroke="#64748b"
            strokeWidth="1.2"
          />

          {/* Trackpad */}
          <rect x="52" y="74" width="16" height="6" rx="1.5" fill="#94a3b8" />
        </motion.g>

        {/* Location Signal Badge */}
        <motion.g
          animate={{
            y: isHovered ? [-2, 2, -2] : [0, 0, 0],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <rect x="30" y="86" width="60" height="9" rx="3" fill="#0f4a9b" stroke="#C7A24A" strokeWidth="0.8" />
          <text x="35" y="93" fill="#ffffff" fontSize="5" fontWeight="bold" fontFamily="sans-serif">
            {`ANYWHERE IN ${location.toUpperCase()}`}
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ── INTERACTIVE 3D PARALLAX CARD COMPONENT ── */
interface SessionStepProps {
  step: string;
  title: string;
  desc: string;
  highlight: string;
  renderEmblem: (isHovered: boolean) => React.ReactNode;
  index: number;
}

function Session3DCard({ step, title, desc, highlight, renderEmblem, index }: SessionStepProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for 3D physics tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high-end organic feel
  const springConfig = { damping: 20, stiffness: 220, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);
  const brightness = useSpring(useTransform(y, [-0.5, 0.5], [1.06, 0.96]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize coordinates (-0.5 to 0.5)
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
      }}
      className="relative flex flex-col h-full group select-none"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          filter: `brightness(${brightness})`,
          transformStyle: 'preserve-3d',
        }}
        className="relative flex-1 flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-3.5 sm:p-4 shadow-[0_4px_16px_rgba(15,74,155,0.04)] hover:shadow-[0_12px_28px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/40 transition-shadow duration-300 overflow-hidden"
      >
        {/* Top Gold & Sapphire Metallic Border Highlight */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A] transition-all duration-300 group-hover:h-1.5" />

        {/* Dynamic Interactive Cursor Spotlight Beam */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
          style={{
            background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(15, 74, 155, 0.07), transparent 70%)',
          }}
        />

        {/* Background Ambient Depth Glow */}
        <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full blur-2xl bg-blue-500/10 group-hover:bg-[#C7A24A]/15 transition-colors duration-500 pointer-events-none" />

        {/* TOP ROW: 3D Animated Emblem & Floating Step Badge */}
        <div className="flex items-center justify-between gap-2 mb-1.5" style={{ transform: 'translateZ(25px)' }}>
          {/* 3D Animated Emblem */}
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 shrink-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 [&>div]:!w-11 [&>div]:!h-11 sm:[&>div]:!w-13 sm:[&>div]:!h-13">
            {renderEmblem(isHovered)}
          </div>

          {/* 3D Holographic Step Pill */}
          <div className="relative">
            <div className="px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-400/15 to-amber-600/10 border border-[#C7A24A]/40 text-[#92600c] text-[9.5px] sm:text-[10px] font-black tracking-wider uppercase shadow-2xs flex items-center gap-1.5 group-hover:border-[#C7A24A] transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] animate-pulse" />
              Step {step}
            </div>
          </div>
        </div>

        {/* MIDDLE CONTENT: Title & Detailed Description */}
        <div className="flex-1 flex flex-col justify-start mb-1.5" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="text-[14px] sm:text-[15px] font-extrabold text-[#0a1f3d] mb-0.5 tracking-tight group-hover:text-[#0f4a9b] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 text-[11px] sm:text-[11.5px] leading-snug line-clamp-2">
            {desc}
          </p>
        </div>

        {/* BOTTOM FEATURE BADGE: Verified Outcome */}
        <div
          className="pt-1.5 border-t border-slate-100 flex items-center"
          style={{ transform: 'translateZ(15px)' }}
        >
          <div className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-[#0f4a9b]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A24A] shrink-0" />
            <span className="tracking-tight">{highlight}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── MAIN SECTION EXPORT ── */
export interface HowOnlineSessions3DSectionProps {
  location?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
}

export function HowOnlineSessions3DSection({
  location = 'Dubai',
  badge = 'Session Blueprint',
  title = 'How Online GCSE Sessions Run',
  subtitle = 'Live past papers, marked in real time, with your child on screen.',
}: HowOnlineSessions3DSectionProps) {
  const stepsData = [
    {
      step: '01',
      title: 'Live Past Papers',
      desc: 'AQA, OCR and Edexcel past papers opened on screen together with real-time digital annotation.',
      highlight: 'Real-time Screen Collaboration',
      renderEmblem: (isHovered: boolean) => <LiveExamPaper3D isHovered={isHovered} />,
    },
    {
      step: '02',
      title: 'Live Mark Scheme',
      desc: 'Answers marked in the same session against official board criteria so mark leaks are eliminated immediately.',
      highlight: 'Official Board Criteria',
      renderEmblem: (isHovered: boolean) => <MarkScheme3D isHovered={isHovered} />,
    },
    {
      step: '03',
      title: 'Session Recordings',
      desc: 'Every session recorded in full HD so tricky concepts and model proofs can be rewatched before every mock.',
      highlight: 'On-Demand Revision Archive',
      renderEmblem: (isHovered: boolean) => <VideoRecording3D isHovered={isHovered} />,
    },
    {
      step: '04',
      title: 'Same Tutor Weekly',
      desc: 'One dedicated subject specialist, never a rotating pool. The same expert mentor every single week.',
      highlight: '1-to-1 Specialist Continuity',
      renderEmblem: (isHovered: boolean) => <TutorSpecialist3D isHovered={isHovered} />,
    },
    {
      step: '05',
      title: 'Fortnightly Report',
      desc: 'A short, honest progress note every two weeks confirming syllabus mastery, exam pacing, and remaining gaps.',
      highlight: 'Transparent Parent Updates',
      renderEmblem: (isHovered: boolean) => <ProgressReport3D isHovered={isHovered} />,
    },
    {
      step: '06',
      title: 'Just a Laptop',
      desc: `Just a laptop and Wi-Fi from anywhere in ${location}. Zero commute stress, we handle all software and materials.`,
      highlight: `Zero Travel · Across ${location}`,
      renderEmblem: (isHovered: boolean) => <LaptopConnect3D isHovered={isHovered} location={location} />,
    },
  ];

  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMobileScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, offsetWidth } = scrollContainerRef.current;
    const approxCardWidth = 280;
    const newIdx = Math.round(scrollLeft / approxCardWidth);
    setActiveMobileIdx(Math.min(Math.max(newIdx, 0), stepsData.length - 1));
  };

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-200/80">

      {/* Ambient Top & Bottom Lighting Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-b from-[#0f4a9b]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#C7A24A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center mb-5 sm:mb-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center px-3 py-1 bg-white border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-[11px] font-extrabold mb-2 shadow-xs"
          >
            <span>{badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-1.5 tracking-tight"
          >
            <GradientHeadingText text={title} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-600 text-xs sm:text-sm leading-normal italic"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* 3D Holographic Cards (Horizontal Scrollable Carousel on Mobile, 3-Col Grid on Desktop) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleMobileScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 lg:gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {stepsData.map((s, idx) => (
            <div 
              key={s.step} 
              className="w-[84vw] max-w-[310px] sm:w-auto sm:max-w-none shrink-0 sm:shrink snap-center flex flex-col"
            >
              <Session3DCard
                index={idx}
                step={s.step}
                title={s.title}
                desc={s.desc}
                highlight={s.highlight}
                renderEmblem={s.renderEmblem}
              />
            </div>
          ))}
        </div>

        {/* Mobile Swipe Pagination Indicator Dots */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 mt-2">
          {stepsData.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeMobileIdx === i
                  ? 'w-5 bg-[#0f4a9b]'
                  : 'w-1.5 bg-[#0f4a9b]/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
