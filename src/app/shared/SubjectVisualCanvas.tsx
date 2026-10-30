import React from 'react';
import { motion } from 'motion/react';

export default function SubjectVisualCanvas({ subjectId }: { subjectId: string }) {
  if (subjectId === 'maths') {
    return (
      <div className="relative w-full h-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50/70 via-slate-50 to-indigo-50/50 border border-blue-100/80 p-3 sm:p-4 overflow-hidden shadow-inner">
        {/* Subtle coordinate grid */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mathsSubjGrid" width="18" height="18" patternUnits="userSpaceOnUse">
              <path d="M 18 0 L 0 0 0 18" fill="none" stroke="#0f4a9b" strokeWidth="0.6" strokeOpacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mathsSubjGrid)" />
        </svg>

        <svg viewBox="0 0 260 160" className="w-full h-full relative z-10 overflow-visible">
          <defs>
            <linearGradient id="mathsCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f4a9b" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#C7A24A" />
            </linearGradient>
            <linearGradient id="mathsFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Axes */}
          <line x1="20" y1="130" x2="240" y2="130" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="30" y1="20" x2="30" y2="140" stroke="#94a3b8" strokeWidth="1.2" />

          {/* Shaded Integral Area */}
          <path d="M 60 130 Q 110 30, 160 85 T 230 40 L 230 130 Z" fill="url(#mathsFillGrad)" />

          {/* Animated Calculus Curve */}
          <motion.path
            d="M 30 120 Q 80 20, 130 85 T 235 35"
            fill="none"
            stroke="url(#mathsCurveGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ pathLength: [0.25, 1, 0.25] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />

          {/* Floating Tangent Line */}
          <motion.line
            x1="85" y1="110" x2="155" y2="45"
            stroke="#C7A24A"
            strokeWidth="2"
            strokeDasharray="4 3"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
          />

          {/* Formula Badges */}
          <g transform="translate(140, 20)">
            <rect x="0" y="0" width="82" height="22" rx="6" fill="#ffffff" stroke="#0f4a9b" strokeWidth="1" />
            <text x="41" y="14.5" textAnchor="middle" fill="#0f4a9b" fontSize="9" fontWeight="bold" fontFamily="monospace">
              dy/dx = 3x² - 4
            </text>
          </g>
          <g transform="translate(45, 24)">
            <rect x="0" y="0" width="75" height="20" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="37.5" y="13.5" textAnchor="middle" fill="#C7A24A" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              ∫ 2x dx = x² + c
            </text>
          </g>
        </svg>

        {/* Live Indicator Tag */}
        <div className="absolute bottom-2.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-blue-200/80 shadow-2xs text-[10px] font-bold text-[#0f4a9b]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Pure Maths & Mechanics P3
        </div>
      </div>
    );
  }

  if (subjectId === 'physics') {
    return (
      <div className="relative w-full h-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50/70 via-slate-50 to-blue-50/50 border border-indigo-100/80 p-3 sm:p-4 overflow-hidden shadow-inner">
        <svg viewBox="0 0 260 160" className="w-full h-full relative z-10 overflow-visible">
          {/* Orbital Ellipses */}
          <motion.ellipse
            cx="130" cy="80" rx="90" ry="38"
            fill="none" stroke="#0f4a9b" strokeWidth="1.5" strokeDasharray="3 3"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
            style={{ originX: '130px', originY: '80px' }}
          />
          <motion.ellipse
            cx="130" cy="80" rx="90" ry="38"
            fill="none" stroke="#0284c7" strokeWidth="1.2"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            style={{ originX: '130px', originY: '80px', transform: 'rotate(60deg)' }}
          />

          {/* Central Pulsing Nucleus */}
          <circle cx="130" cy="80" r="16" fill="#0f4a9b" />
          <motion.circle
            cx="130" cy="80" r="22"
            fill="none" stroke="#38bdf8" strokeWidth="1.5"
            animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.8, 0.2, 0.8] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
          <text x="130" y="84" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">λ</text>

          {/* Orbiting Quantum Particle */}
          <motion.circle
            cx="220" cy="80" r="5"
            fill="#C7A24A" stroke="#ffffff" strokeWidth="1"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            style={{ originX: '130px', originY: '80px' }}
          />

          {/* Floating Physics Tag */}
          <g transform="translate(155, 20)">
            <rect x="0" y="0" width="80" height="22" rx="6" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
            <text x="40" y="14.5" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="bold" fontFamily="monospace">
              E = hf · p = h/λ
            </text>
          </g>
          <g transform="translate(25, 24)">
            <rect x="0" y="0" width="75" height="20" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="37.5" y="13.5" textAnchor="middle" fill="#0f4a9b" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              F = dp/dt
            </text>
          </g>
        </svg>

        <div className="absolute bottom-2.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-indigo-200/80 shadow-2xs text-[10px] font-bold text-[#0f4a9b]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          Fields, Waves & Quantum Physics
        </div>
      </div>
    );
  }

  if (subjectId === 'chemistry') {
    return (
      <div className="relative w-full h-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50/70 via-slate-50 to-orange-50/40 border border-amber-100/80 p-3 sm:p-4 overflow-hidden shadow-inner">
        <svg viewBox="0 0 260 160" className="w-full h-full relative z-10 overflow-visible">
          {/* Benzene Ring (Hexagon with delocalized pi circle) */}
          <g transform="translate(130, 80)">
            <motion.polygon
              points="0,-38 33,-19 33,19 0,38 -33,19 -33,-19"
              fill="none" stroke="#0f4a9b" strokeWidth="2.5"
            />
            {/* Inner Delocalized Circle */}
            <motion.circle
              cx="0" cy="0" r="22"
              fill="none" stroke="#C7A24A" strokeWidth="2" strokeDasharray="5 3"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            />
            <circle cx="0" cy="0" r="6" fill="#C7A24A" />

            {/* Functional Group Bonds */}
            <line x1="33" y1="-19" x2="52" y2="-30" stroke="#0f4a9b" strokeWidth="2" />
            <text x="58" y="-28" fill="#0f4a9b" fontSize="10" fontWeight="bold">OH</text>

            <line x1="-33" y1="19" x2="-52" y2="30" stroke="#0f4a9b" strokeWidth="2" />
            <text x="-75" y="34" fill="#0f4a9b" fontSize="10" fontWeight="bold">NO₂</text>
          </g>

          {/* Curly Reaction Arrow */}
          <motion.path
            d="M 60 45 Q 85 20, 110 40"
            fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          {/* Badges */}
          <g transform="translate(155, 18)">
            <rect x="0" y="0" width="85" height="22" rx="6" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />
            <text x="42.5" y="14.5" textAnchor="middle" fill="#d97706" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              ΔG = ΔH - TΔS
            </text>
          </g>
          <g transform="translate(25, 24)">
            <rect x="0" y="0" width="75" height="20" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="37.5" y="13.5" textAnchor="middle" fill="#0f4a9b" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              pH = -log[H⁺]
            </text>
          </g>
        </svg>

        <div className="absolute bottom-2.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-amber-200/80 shadow-2xs text-[10px] font-bold text-[#0f4a9b]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          Organic Mechanisms & Energetics
        </div>
      </div>
    );
  }

  if (subjectId === 'biology') {
    return (
      <div className="relative w-full h-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-teal-50/40 border border-emerald-100/80 p-3 sm:p-4 overflow-hidden shadow-inner">
        <svg viewBox="0 0 260 160" className="w-full h-full relative z-10 overflow-visible">
          {/* DNA Strand Animation */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const x = 36 + i * 27;
            const delay = i * 0.22;
            return (
              <g key={i}>
                <motion.line
                  x1={x} y1="42" x2={x} y2="118"
                  stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="2 2"
                />
                <motion.circle
                  cx={x} cy="42" r="4.5" fill="#0f4a9b"
                  animate={{ y: [0, 76, 0] }}
                  transition={{ repeat: Infinity, duration: 3.2, delay, ease: 'easeInOut' }}
                />
                <motion.circle
                  cx={x} cy="118" r="4.5" fill="#10b981"
                  animate={{ y: [0, -76, 0] }}
                  transition={{ repeat: Infinity, duration: 3.2, delay, ease: 'easeInOut' }}
                />
                <motion.line
                  x1={x} y1="62" x2={x} y2="98"
                  stroke="#C7A24A" strokeWidth="2" strokeLinecap="round"
                  animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 3.2, delay, ease: 'easeInOut' }}
                />
              </g>
            );
          })}

          <g transform="translate(150, 18)">
            <rect x="0" y="0" width="90" height="22" rx="6" fill="#ffffff" stroke="#10b981" strokeWidth="1" />
            <text x="45" y="14.5" textAnchor="middle" fill="#059669" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              25-Mark Synoptic Link
            </text>
          </g>
          <g transform="translate(25, 18)">
            <rect x="0" y="0" width="75" height="20" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="37.5" y="13.5" textAnchor="middle" fill="#0f4a9b" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              Gene Expression
            </text>
          </g>
        </svg>

        <div className="absolute bottom-2.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-emerald-200/80 shadow-2xs text-[10px] font-bold text-[#0f4a9b]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Genetics & Physiology Precision
        </div>
      </div>
    );
  }

  if (subjectId === 'economics') {
    return (
      <div className="relative w-full h-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50/70 via-slate-50 to-emerald-50/40 border border-blue-100/80 p-3 sm:p-4 overflow-hidden shadow-inner">
        <svg viewBox="0 0 260 160" className="w-full h-full relative z-10 overflow-visible">
          {/* Axes */}
          <line x1="30" y1="130" x2="230" y2="130" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="40" y1="20" x2="40" y2="140" stroke="#94a3b8" strokeWidth="1.2" />
          <text x="235" y="133" fill="#64748b" fontSize="9" fontWeight="bold">Q</text>
          <text x="36" y="16" fill="#64748b" fontSize="9" fontWeight="bold">P</text>

          {/* Supply Curve (Upward) */}
          <line x1="55" y1="120" x2="205" y2="35" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
          <text x="210" y="38" fill="#059669" fontSize="10" fontWeight="black">S</text>

          {/* Demand Curve 1 (Downward) */}
          <line x1="55" y1="35" x2="205" y2="120" stroke="#0f4a9b" strokeWidth="2.5" strokeLinecap="round" />
          <text x="210" y="123" fill="#0f4a9b" fontSize="10" fontWeight="black">D₁</text>

          {/* Shifting Demand Curve 2 */}
          <motion.line
            x1="85" y1="35" x2="235" y2="120"
            stroke="#C7A24A" strokeWidth="1.8" strokeDasharray="4 3"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />

          {/* Equilibrium Point Pulse */}
          <circle cx="130" cy="78" r="5" fill="#0f4a9b" />
          <motion.circle
            cx="130" cy="78" r="10"
            fill="none" stroke="#38bdf8" strokeWidth="1.5"
            animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          />
          <text x="135" y="72" fill="#0a1f3d" fontSize="9" fontWeight="bold">E* (P*, Q*)</text>

          {/* Badges */}
          <g transform="translate(145, 18)">
            <rect x="0" y="0" width="85" height="22" rx="6" fill="#ffffff" stroke="#0f4a9b" strokeWidth="1" />
            <text x="42.5" y="14.5" textAnchor="middle" fill="#0f4a9b" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              KAA + EV Chains
            </text>
          </g>
        </svg>

        <div className="absolute bottom-2.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-blue-200/80 shadow-2xs text-[10px] font-bold text-[#0f4a9b]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Macro & Micro Evaluative Rigour
        </div>
      </div>
    );
  }

  // English
  return (
    <div className="relative w-full h-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50/60 via-slate-50 to-blue-50/40 border border-purple-100/80 p-3 sm:p-4 overflow-hidden shadow-inner">
      <svg viewBox="0 0 260 160" className="w-full h-full relative z-10 overflow-visible">
        {/* Open Book Outline */}
        <g transform="translate(50, 40)">
          <rect x="0" y="0" width="70" height="75" rx="4" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="10" y1="18" x2="60" y2="18" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <motion.line
            x1="10" y1="30" x2="50" y2="30"
            stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"
            animate={{ width: [20, 50, 20] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <line x1="10" y1="42" x2="55" y2="42" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="54" x2="40" y2="54" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(130, 40)">
          <rect x="0" y="0" width="70" height="75" rx="4" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="10" y1="18" x2="55" y2="18" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="30" x2="60" y2="30" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="42" x2="45" y2="42" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="54" x2="50" y2="54" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Big Stylized Quote Marks in Center */}
        <text x="125" y="32" textAnchor="middle" fill="#C7A24A" fontSize="32" fontWeight="black" fontFamily="Georgia, serif">“ ”</text>

        {/* Badges */}
        <g transform="translate(145, 18)">
          <rect x="0" y="0" width="90" height="22" rx="6" fill="#ffffff" stroke="#8b5cf6" strokeWidth="1" />
          <text x="45" y="14.5" textAnchor="middle" fill="#7c3aed" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
            Band 5 Critical Analysis
          </text>
        </g>
        <g transform="translate(25, 18)">
          <rect x="0" y="0" width="75" height="20" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <text x="37.5" y="13.5" textAnchor="middle" fill="#0f4a9b" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
            AO1 · AO2 · AO3
          </text>
        </g>
      </svg>

      <div className="absolute bottom-2.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-purple-200/80 shadow-2xs text-[10px] font-bold text-[#0f4a9b]">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
        Comparative Argument & Textual Rubric
      </div>
    </div>
  );
}

export default function ALevelTutorDubaiPage() {
  const [selectedBoard, setSelectedBoard] = useState<'cambridge' | 'edexcel' | 'aqa'>('cambridge');
  const [selectedSubject, setSelectedSubject] = useState<string>('maths');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
