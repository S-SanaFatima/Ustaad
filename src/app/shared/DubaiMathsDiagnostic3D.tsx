import { useState } from 'react';
import { motion } from 'motion/react';
import { Target, CheckCircle2 } from 'lucide-react';
import SwipeIndicator from './SwipeIndicator';

// ── 1. 3D STOPWATCH OBJECT (Edexcel 4MA1 Calculator Timing) ──
function Stopwatch3D({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-[95px] sm:h-[105px] flex items-center justify-center select-none">
      {/* Ambient shadow */}
      <motion.div
        animate={{
          scale: isHovered ? 1.15 : 1,
          opacity: isHovered ? 0.35 : 0.22,
          y: isHovered ? 8 : 4,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute bottom-1 w-20 sm:w-24 h-4 rounded-full bg-[#0f4a9b]/30 blur-sm pointer-events-none"
      />

      {/* Floating 3D Stopwatch Body */}
      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
          rotateX: isHovered ? 14 : 7,
          rotateY: isHovered ? -12 : -5,
          rotateZ: isHovered ? 3 : 0,
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 18 }}
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
        className="relative w-24 sm:w-28 h-24 sm:h-28 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full overflow-visible drop-shadow-[0_10px_16px_rgba(15,74,155,0.2)]"
        >
          <defs>
            {/* Outer Bezel Gradients */}
            <linearGradient id="swBezelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="40%" stopColor="#0f4a9b" />
              <stop offset="100%" stopColor="#061c3d" />
            </linearGradient>
            <linearGradient id="swRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <radialGradient id="swDialGrad" cx="45%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="85%" stopColor="#f0f7ff" />
              <stop offset="100%" stopColor="#dbeafe" />
            </radialGradient>
            <linearGradient id="swCrownGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="swGoldHand" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>

          {/* ── TOP CROWN & LOOP ── */}
          <rect x="91" y="8" width="18" height="16" rx="4" fill="url(#swCrownGrad)" stroke="#0f4a9b" strokeWidth="1.5" />
          <path d="M 80 14 C 80 2, 120 2, 120 14" fill="none" stroke="#93c5fd" strokeWidth="3.5" strokeLinecap="round" />
          
          {/* Top Right Split Pusher */}
          <g transform="rotate(35 100 105)">
            <rect x="94" y="6" width="12" height="12" rx="3" fill="#60a5fa" stroke="#0f4a9b" strokeWidth="1.5" />
          </g>

          {/* ── MAIN CASE ── */}
          <circle cx="100" cy="105" r="76" fill="url(#swBezelGrad)" stroke="#0a1f3d" strokeWidth="2.5" />
          <circle cx="100" cy="105" r="71" fill="none" stroke="url(#swRimGrad)" strokeWidth="2" />
          <circle cx="100" cy="105" r="64" fill="url(#swDialGrad)" stroke="#bfdbfe" strokeWidth="1.5" />

          {/* ── DIAL MARKINGS ── */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30;
            const isMajor = i % 3 === 0;
            return (
              <line
                key={i}
                x1="100"
                y1={isMajor ? '46' : '49'}
                x2="100"
                y2="54"
                stroke={isMajor ? '#0f4a9b' : '#94a3b8'}
                strokeWidth={isMajor ? '2.5' : '1.2'}
                strokeLinecap="round"
                transform={`rotate(${angle} 100 105)`}
              />
            );
          })}

          {/* Subdial (Pacing timer) */}
          <circle cx="100" cy="78" r="16" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="100" y1="78" x2="100" y2="68" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" transform="rotate(45 100 78)" />
          <circle cx="100" cy="78" r="2" fill="#0f4a9b" />

          {/* Digital Timer Readout Badge */}
          <rect x="76" y="126" width="48" height="18" rx="4" fill="#0a1f3d" stroke="#3b82f6" strokeWidth="1" />
          <text x="100" y="139" fill="#60a5fa" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle">
            05:00
          </text>

          {/* ── STOPWATCH HANDS ── */}
          {/* Main Second Hand (Sweeping Red/Gold Needle) */}
          <g transform={isHovered ? 'rotate(110 100 105)' : 'rotate(65 100 105)'} className="transition-transform duration-700 ease-out">
            <line x1="100" y1="118" x2="100" y2="52" stroke="url(#swGoldHand)" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="100,48 97,55 103,55" fill="#f59e0b" />
          </g>

          {/* Center Pivot Cap */}
          <circle cx="100" cy="105" r="5" fill="#0f4a9b" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="100" cy="105" r="2" fill="#f59e0b" />

          {/* Glass Reflection Arc */}
          <path
            d="M 46 95 A 58 58 0 0 1 154 95"
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </motion.div>
    </div>
  );
}

// ── 2. 3D CALCULATOR OBJECT (AQA Paper 1 Fluency) ──
function Calculator3D({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-[95px] sm:h-[105px] flex items-center justify-center select-none">
      {/* Ambient shadow */}
      <motion.div
        animate={{
          scale: isHovered ? 1.15 : 1,
          opacity: isHovered ? 0.35 : 0.22,
          y: isHovered ? 8 : 4,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute bottom-1 w-20 sm:w-24 h-4 rounded-full bg-[#A8892A]/35 blur-sm pointer-events-none"
      />

      {/* Floating 3D Calculator Body */}
      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
          rotateX: isHovered ? 15 : 8,
          rotateY: isHovered ? 12 : 5,
          rotateZ: isHovered ? -2 : 0,
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 18 }}
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
        className="relative w-24 sm:w-28 h-24 sm:h-28 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 200 220"
          className="w-full h-full overflow-visible drop-shadow-[0_10px_16px_rgba(168,137,42,0.2)]"
        >
          <defs>
            {/* Calculator Body Gradients */}
            <linearGradient id="calcBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2a200a" />
              <stop offset="30%" stopColor="#1c1605" />
              <stop offset="100%" stopColor="#0a0802" />
            </linearGradient>
            <linearGradient id="calcRimGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fae08c" />
              <stop offset="50%" stopColor="#C7A24A" />
              <stop offset="100%" stopColor="#7a5b12" />
            </linearGradient>
            <linearGradient id="calcLcdGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="calcKeyGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>
            <linearGradient id="calcKeyBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>

          {/* ── MAIN CASING ── */}
          <rect x="36" y="10" width="128" height="195" rx="18" fill="url(#calcBodyGrad)" stroke="#0a0802" strokeWidth="2" />
          <rect x="38" y="12" width="124" height="191" rx="16" fill="none" stroke="url(#calcRimGold)" strokeWidth="1.8" />

          {/* Top Solar Cell */}
          <rect x="108" y="24" width="44" height="12" rx="3" fill="#3b2b10" stroke="#785315" strokeWidth="1" />
          <line x1="122" y1="24" x2="122" y2="36" stroke="#92671a" strokeWidth="0.8" />
          <line x1="136" y1="24" x2="136" y2="36" stroke="#92671a" strokeWidth="0.8" />

          {/* Model Badge */}
          <text x="50" y="34" fill="#C7A24A" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
            USTAAD fx
          </text>

          {/* ── LCD SCREEN ── */}
          <rect x="48" y="44" width="104" height="34" rx="6" fill="url(#calcLcdGrad)" stroke="#64748b" strokeWidth="1.2" />
          {/* LCD Formula */}
          <text x="54" y="58" fill="#475569" fontSize="8.5" fontFamily="monospace" fontWeight="600">
            f(x) = ∫ 2x dx
          </text>
          {/* LCD Result */}
          <text x="146" y="73" fill="#0f172a" fontSize="13" fontFamily="monospace" fontWeight="900" textAnchor="end">
            x² + C
          </text>

          {/* ── FUNCTION KEYS (ROW 1) ── */}
          <rect x="48" y="88" width="22" height="14" rx="3" fill="#475569" stroke="#1e293b" strokeWidth="1" />
          <text x="59" y="98" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">sin</text>
          
          <rect x="75" y="88" width="22" height="14" rx="3" fill="#475569" stroke="#1e293b" strokeWidth="1" />
          <text x="86" y="98" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">cos</text>

          <rect x="102" y="88" width="22" height="14" rx="3" fill="#475569" stroke="#1e293b" strokeWidth="1" />
          <text x="113" y="98" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">tan</text>

          <rect x="129" y="88" width="23" height="14" rx="3" fill="url(#calcKeyGold)" stroke="#785315" strokeWidth="1" />
          <text x="140" y="98" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">x²</text>

          {/* ── NUMBER KEYPAD ── */}
          {/* Row 2: 7, 8, 9, DEL */}
          <rect x="48" y="108" width="22" height="16" rx="4" fill="url(#calcKeyBlue)" stroke="#0f172a" strokeWidth="1" />
          <text x="59" y="120" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle">7</text>
          <rect x="75" y="108" width="22" height="16" rx="4" fill="url(#calcKeyBlue)" stroke="#0f172a" strokeWidth="1" />
          <text x="86" y="120" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle">8</text>
          <rect x="102" y="108" width="22" height="16" rx="4" fill="url(#calcKeyBlue)" stroke="#0f172a" strokeWidth="1" />
          <text x="113" y="120" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle">9</text>
          <rect x="129" y="108" width="23" height="16" rx="4" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          <text x="140" y="120" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">DEL</text>

          {/* Row 3: 4, 5, 6, × */}
          <rect x="48" y="129" width="22" height="16" rx="4" fill="url(#calcKeyBlue)" stroke="#0f172a" strokeWidth="1" />
          <text x="59" y="141" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle">4</text>
          <rect x="75" y="129" width="22" height="16" rx="4" fill="url(#calcKeyBlue)" stroke="#0f172a" strokeWidth="1" />
          <text x="86" y="141" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle">5</text>
          <rect x="102" y="129" width="22" height="16" rx="4" fill="url(#calcKeyBlue)" stroke="#0f172a" strokeWidth="1" />
          <text x="113" y="141" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle">6</text>
          <rect x="129" y="129" width="23" height="16" rx="4" fill="#475569" stroke="#1e293b" strokeWidth="1" />
          <text x="140" y="141" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">×</text>

          {/* Row 4: 1, 2, 3, + */}
          <rect x="48" y="150" width="22" height="16" rx="4" fill="url(#calcKeyBlue)" stroke="#0f172a" strokeWidth="1" />
          <text x="59" y="162" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle">1</text>
          <rect x="75" y="150" width="22" height="16" rx="4" fill="url(#calcKeyBlue)" stroke="#0f172a" strokeWidth="1" />
          <text x="86" y="162" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle">2</text>
          <rect x="102" y="150" width="22" height="16" rx="4" fill="url(#calcKeyBlue)" stroke="#0f172a" strokeWidth="1" />
          <text x="113" y="162" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle">3</text>
          <rect x="129" y="150" width="23" height="16" rx="4" fill="#475569" stroke="#1e293b" strokeWidth="1" />
          <text x="140" y="162" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">+</text>

          {/* Row 5: 0, ., π, = */}
          <rect x="48" y="171" width="22" height="16" rx="4" fill="url(#calcKeyBlue)" stroke="#0f172a" strokeWidth="1" />
          <text x="59" y="183" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle">0</text>
          <rect x="75" y="171" width="22" height="16" rx="4" fill="url(#calcKeyBlue)" stroke="#0f172a" strokeWidth="1" />
          <text x="86" y="183" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle">.</text>
          <rect x="102" y="171" width="22" height="16" rx="4" fill="#475569" stroke="#1e293b" strokeWidth="1" />
          <text x="113" y="183" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">π</text>
          <rect x="129" y="171" width="23" height="16" rx="4" fill="url(#calcKeyGold)" stroke="#785315" strokeWidth="1" />
          <text x="140" y="184" fill="#ffffff" fontSize="12" fontWeight="900" textAnchor="middle">=</text>

          {/* Diagonal Glass Sheen */}
          <path
            d="M 50 46 L 120 46 L 80 76 L 50 76 Z"
            fill="rgba(255,255,255,0.18)"
            opacity="0.7"
          />
        </svg>
      </motion.div>
    </div>
  );
}

// ── 3. 3D EXAM PAST PAPER OBJECT (Cambridge 0580 Extended Mark-Scheme Wording) ──
function ExamPaper3D({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-[95px] sm:h-[105px] flex items-center justify-center select-none">
      {/* Ambient shadow */}
      <motion.div
        animate={{
          scale: isHovered ? 1.15 : 1,
          opacity: isHovered ? 0.35 : 0.22,
          y: isHovered ? 8 : 4,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute bottom-1 w-20 sm:w-24 h-4 rounded-full bg-emerald-900/30 blur-sm pointer-events-none"
      />

      {/* Floating 3D Paper Stack */}
      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
          rotateX: isHovered ? 14 : 7,
          rotateY: isHovered ? -10 : -4,
          rotateZ: isHovered ? 2 : 0,
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 18 }}
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
        className="relative w-24 sm:w-28 h-24 sm:h-28 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 200 220"
          className="w-full h-full overflow-visible drop-shadow-[0_10px_16px_rgba(16,185,129,0.18)]"
        >
          <defs>
            {/* Paper Sheet Gradients */}
            <linearGradient id="paperGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="85%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="paperBackSheet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="paperHeaderEmerald" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="goldClipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="50%" stopColor="#C7A24A" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
          </defs>

          {/* ── BACK SHEET (Depth illusion) ── */}
          <rect x="42" y="18" width="124" height="180" rx="6" fill="url(#paperBackSheet)" stroke="#94a3b8" strokeWidth="1" transform="rotate(4 104 108)" />

          {/* ── MAIN FRONT SHEET ── */}
          <g>
            {/* Main Sheet Body with Folded Top-Right Corner */}
            <path
              d="M 36 16 L 138 16 L 160 38 L 160 196 L 36 196 Z"
              fill="url(#paperGradMain)"
              stroke="#94a3b8"
              strokeWidth="1.2"
            />
            {/* Corner Fold Triangle */}
            <path
              d="M 138 16 L 138 38 L 160 38 Z"
              fill="#cbd5e1"
              stroke="#94a3b8"
              strokeWidth="1"
            />
            <path
              d="M 138 16 L 160 38"
              stroke="#64748b"
              strokeWidth="0.8"
            />
          </g>

          {/* ── EXAM HEADER BANNER ── */}
          <rect x="44" y="24" width="88" height="16" rx="3" fill="url(#paperHeaderEmerald)" />
          <text x="88" y="35" fill="#ffffff" fontSize="7.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.4">
            CAMBRIDGE IGCSE 0580
          </text>

          {/* Subheader */}
          <text x="44" y="52" fill="#0f172a" fontSize="8" fontWeight="800" fontFamily="sans-serif">
            Paper 4 (Extended) · Mark Scheme
          </text>
          <line x1="44" y1="56" x2="152" y2="56" stroke="#059669" strokeWidth="1.2" />

          {/* Question 1 Content */}
          <text x="44" y="70" fill="#334151" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
            1(a) Prove 3x² - 12 = 0
          </text>
          
          {/* Method Working Steps */}
          <text x="52" y="82" fill="#475569" fontSize="7" fontFamily="monospace">
            3(x² - 4) = 0
          </text>
          <text x="52" y="94" fill="#475569" fontSize="7" fontFamily="monospace">
            (x - 2)(x + 2) = 0
          </text>
          <text x="52" y="106" fill="#0f172a" fontSize="7" fontWeight="bold" fontFamily="monospace">
            x = 2, x = -2
          </text>

          {/* ── EXAMINER MARK BADGES (Method Mark Protection) ── */}
          {/* M1 Method Badge */}
          <rect x="134" y="76" width="20" height="10" rx="3" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
          <text x="144" y="84" fill="#047857" fontSize="6.5" fontWeight="900" textAnchor="middle">M1</text>

          {/* A1 Accuracy Badge */}
          <rect x="134" y="98" width="20" height="10" rx="3" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
          <text x="144" y="106" fill="#047857" fontSize="6.5" fontWeight="900" textAnchor="middle">A1</text>

          {/* Question 2 Section */}
          <line x1="44" y1="116" x2="152" y2="116" stroke="#e2e8f0" strokeWidth="1" />
          <text x="44" y="128" fill="#334151" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
            1(b) Vector AB = (4, -3)
          </text>
          <text x="52" y="140" fill="#475569" fontSize="7" fontFamily="monospace">
            |AB| = √(4² + (-3)²) = 5
          </text>
          <rect x="134" y="132" width="20" height="10" rx="3" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
          <text x="144" y="140" fill="#047857" fontSize="6.5" fontWeight="900" textAnchor="middle">B2</text>

          {/* Verified Green Stamp */}
          <g transform="rotate(-8 100 170)">
            <rect x="52" y="156" width="94" height="22" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="99" y="170" fill="#047857" fontSize="8" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.6">
              ✓ METHOD PROTECTED [4/4]
            </text>
          </g>

          {/* ── METALLIC GOLD PAPERCLIP (TOP LEFT) ── */}
          <path
            d="M 50 28 L 50 10 C 50 4, 62 4, 62 10 L 62 34 C 62 42, 44 42, 44 34 L 44 14"
            fill="none"
            stroke="url(#goldClipGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}

// ── MAIN DUBAI MATHS DIAGNOSTIC 3D SECTION (Single Viewport Fit) ──
export default function DubaiMathsDiagnostic3D() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState<number>(0);
  const scrollContainerRef = useState<{ current: HTMLDivElement | null }>({ current: null })[0];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const scrollLeft = el.scrollLeft;
    const itemWidth = el.offsetWidth * 0.85;
    if (itemWidth > 0) {
      const newIdx = Math.round(scrollLeft / itemWidth);
      setActiveMobileIdx(Math.max(0, Math.min(2, newIdx)));
    }
  };

  const scrollToCard = (idx: number) => {
    setActiveMobileIdx(idx);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const child = container.children[idx] as HTMLElement;
      if (child) {
        child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const CARDS = [
    {
      tabLabel: 'Edexcel 4MA1',
      badge: 'EDEXCEL 4MA1',
      badgeStyle: 'bg-blue-50 text-[#0f4a9b] border-blue-100',
      title: 'Edexcel 4MA1 Calculator Timing',
      desc: 'Pace breakdowns on 5-mark algebra and trigonometry problems where students leave final questions unattempted despite understanding formulas.',
      highlight: 'Pacing & Question Selection Drills',
      accentColor: '#0f4a9b',
      borderStyle: 'hover:border-[#0f4a9b]/50 hover:shadow-[0_12px_28px_rgba(15,74,155,0.12)]',
      render3D: (isHovered: boolean) => <Stopwatch3D isHovered={isHovered} />,
    },
    {
      tabLabel: 'AQA Paper 1',
      badge: 'AQA PAPER 1',
      badgeStyle: 'bg-amber-50 text-[#926815] border-amber-200/70',
      title: 'AQA Paper 1 Fluency',
      desc: 'Mental calculation hesitation and non-calculator arithmetic friction draining vital time before reaching the high-tariff final questions.',
      highlight: 'Mental Arithmetic & Speed Drills',
      accentColor: '#C7A24A',
      borderStyle: 'hover:border-[#C7A24A]/60 hover:shadow-[0_12px_28px_rgba(199,162,74,0.12)]',
      render3D: (isHovered: boolean) => <Calculator3D isHovered={isHovered} />,
    },
    {
      tabLabel: 'Cambridge 0580',
      badge: 'CIE 0580 EXTENDED',
      badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      title: 'Cambridge 0580 Extended Mark-Scheme Wording',
      desc: 'Correct final numbers losing method marks due to missing intermediate working lines, unstated reasons, or inadequate proof steps.',
      highlight: 'Step-by-Step Mark Protection',
      accentColor: '#059669',
      borderStyle: 'hover:border-emerald-500/50 hover:shadow-[0_12px_28px_rgba(16,185,129,0.12)]',
      render3D: (isHovered: boolean) => <ExamPaper3D isHovered={isHovered} />,
    },
  ];

  return (
    <section className="py-7 sm:py-10 lg:py-12 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-amber-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[11px] font-bold mb-2 shadow-2xs">
            <Target className="w-3.5 h-3.5 text-[#0f4a9b]" />
            <span>Diagnostic Assessment</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-1.5 tracking-tight">
            Why Dubai Maths Marks Slip Even When Method Is Right
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Subject-specific mark leaks we pinpoint and fix across major exam boards taught in Dubai.
          </p>
        </div>

        {/* Mobile Quick-Switch Board Tabs (Shown only on mobile to switch cards without tall scrolling) */}
        <div className="md:hidden flex items-center justify-center gap-1.5 mb-3.5">
          {CARDS.map((card, idx) => {
            const isActive = activeMobileIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToCard(idx)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-tight transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#0f4a9b] text-white border-[#0f4a9b] shadow-xs'
                    : 'bg-slate-100/90 text-slate-600 border-slate-200/80 hover:bg-slate-200/70'
                }`}
              >
                {card.tabLabel}
              </button>
            );
          })}
        </div>

        {/* 3D Interactive Console (Horizontal swipe snap on mobile, 3-column grid on desktop) */}
        <div
          ref={(el) => {
            scrollContainerRef.current = el;
          }}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-5 lg:gap-6 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pt-1 pb-2 md:pb-0 px-1 md:px-0 -mx-1 md:mx-0 scrollbar-none"
        >
          {CARDS.map((card, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`w-[86vw] max-w-[320px] shrink-0 md:w-auto md:max-w-none md:shrink snap-center bg-[#f8fafd] rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_4px_16px_rgba(15,74,155,0.05)] ${card.borderStyle} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Top Colored Accent Stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: card.accentColor }}
                />

                <div>
                  {/* Top Row: Board Chip & Interactive Hint */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${card.badgeStyle}`}>
                      {card.badge}
                    </span>
                    <span className="text-[9px] font-semibold text-slate-400 opacity-70 group-hover:opacity-100 transition-opacity">
                      3D Interactive
                    </span>
                  </div>

                  {/* 3D Model Centerpiece */}
                  <div className="my-1">
                    {card.render3D(isHovered)}
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-[#0a1f3d] text-base sm:text-[16px] mb-1.5 group-hover:text-[#0f4a9b] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs leading-relaxed mb-3">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Highlight Checkmark */}
                <div
                  className="pt-2.5 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-bold"
                  style={{ color: card.accentColor }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px] sm:text-xs">{card.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel Indicators */}
        <SwipeIndicator text="Swipe across diagnostic points" className="mt-3 mb-2" />
        <div className="md:hidden flex items-center justify-center gap-1.5 mt-1">
          {CARDS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to card ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeMobileIdx === idx ? 'w-6 bg-[#0f4a9b]' : 'w-1.5 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
