import React from 'react';
import { motion } from 'motion/react';

export interface FreeTrialTimelineSectionProps {
  location?: string;
}

interface StepItem {
  id: string;
  title: string;
  desc: string;
  startDeg: number;
  endDeg: number;
}

// Minimal Animated Clock Dial
function AnimatedClockDial({ 
  startDeg, 
  endDeg 
}: { 
  startDeg: number; 
  endDeg: number; 
}) {
  const cx = 45;
  const cy = 45;
  const r = 32;

  // Compute sector arc for the quadrant
  const toRad = (deg: number) => ((deg - 90) * Math.PI) / 180;
  const x1 = cx + r * Math.cos(toRad(startDeg));
  const y1 = cy + r * Math.sin(toRad(startDeg));
  const x2 = cx + r * Math.cos(toRad(endDeg));
  const y2 = cy + r * Math.sin(toRad(endDeg));
  const arcPath = `M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;

  // 12 hour ticks
  const ticks = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    const isMajor = i % 3 === 0;
    const len = isMajor ? 4 : 2;
    const tx1 = cx + (r - 1) * Math.sin(angle);
    const ty1 = cy - (r - 1) * Math.cos(angle);
    const tx2 = cx + (r - 1 - len) * Math.sin(angle);
    const ty2 = cy - (r - 1 - len) * Math.cos(angle);
    return { tx1, ty1, tx2, ty2, isMajor, i };
  });

  return (
    <div className="relative w-20 h-20 sm:w-22 sm:h-22 shrink-0 flex items-center justify-center">
      <svg viewBox="0 0 90 90" className="w-full h-full drop-shadow-xs select-none">
        <defs>
          <linearGradient id="dialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafd" />
            <stop offset="100%" stopColor="#e2ecf8" />
          </linearGradient>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#C7A24A" stopOpacity="0.32" />
          </linearGradient>
        </defs>

        {/* Outer Dial Circle */}
        <circle cx={cx} cy={cy} r="41" fill="url(#dialGrad)" stroke="#cdd9e8" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r="37" fill="#ffffff" stroke="#e1e8f2" strokeWidth="1" />

        {/* Quadrant Arc */}
        <path d={arcPath} fill="url(#arcGrad)" />

        {/* Ticks */}
        {ticks.map((t) => (
          <line
            key={t.i}
            x1={t.tx1}
            y1={t.ty1}
            x2={t.tx2}
            y2={t.ty2}
            stroke={t.isMajor ? '#0f4a9b' : '#94a3b8'}
            strokeWidth={t.isMajor ? 1.5 : 0.8}
            strokeLinecap="round"
          />
        ))}

        {/* Stationary Hour Hand pointing to Quadrant Anchor */}
        <g transform={`rotate(${startDeg}, 45, 45)`}>
          <line
            x1="45"
            y1="45"
            x2="45"
            y2="28"
            stroke="#0a1f3d"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* Sweeping Minute Hand (Continuous 360° Clockwise Rotation around exact center) */}
        <motion.g
          animate={{
            rotate: [startDeg, startDeg + 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          style={{ transformOrigin: '45px 45px' }}
        >
          {/* Invisible symmetrical boundary to lock pivot mathematically to (45, 45) */}
          <circle cx="45" cy="45" r="40" fill="none" stroke="none" pointerEvents="none" />

          {/* Minute Hand Needle */}
          <line
            x1="45"
            y1="45"
            x2="45"
            y2="17"
            stroke="#0f4a9b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Counterweight Tail */}
          <line
            x1="45"
            y1="45"
            x2="45"
            y2="51"
            stroke="#C7A24A"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Center Cap / Pin */}
        <circle cx="45" cy="45" r="3.5" fill="#0a1f3d" stroke="#C7A24A" strokeWidth="1.5" />
        <circle cx="45" cy="45" r="1.2" fill="#ffffff" />
      </svg>
    </div>
  );
}

export function FreeTrialTimelineSection({ location = 'Dubai' }: FreeTrialTimelineSectionProps) {
  // Exactly the 4 items requested by the user
  const steps: StepItem[] = [
    {
      id: '01',
      title: 'An honest conversation',
      desc: 'About the subject, the school, and the target grade.',
      startDeg: 0,
      endDeg: 90,
    },
    {
      id: '02',
      title: 'A real past paper, live',
      desc: 'Your child works a genuine exam question with the tutor.',
      startDeg: 90,
      endDeg: 180,
    },
    {
      id: '03',
      title: 'A clear plan and target',
      desc: 'You leave with a starting point and the route ahead.',
      startDeg: 180,
      endDeg: 270,
    },
    {
      id: '04',
      title: 'Method marks live in the steps',
      desc: 'Step-by-step working shown live, not just the final answer.',
      startDeg: 270,
      endDeg: 360,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with exact copy */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3">
            Free Trial
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">
            Thirty free minutes that tell you everything
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
            Free, and a real diagnostic, not a sales call.
          </p>
        </div>

        {/* ── 4 FIXED CARDS WITH CONTENT AND ANIMATED CLOCKS SIDE-BY-SIDE (NO FLIP) ── */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {steps.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#0f4a9b]/10 p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_10px_28px_rgba(15,74,155,0.1)] hover:-translate-y-0.5 hover:border-[#0f4a9b]/25 transition-all duration-300 flex items-center justify-between gap-4"
            >
              {/* Left Side: Number + Exact Content */}
              <div className="flex items-start gap-4 flex-1">
                <div className="text-3xl sm:text-4xl font-black text-[#0f4a9b]/30 leading-none mt-1 shrink-0">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0f4a9b] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3a4f6e] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Right Side: Animated Clock */}
              <AnimatedClockDial startDeg={item.startDeg} endDeg={item.endDeg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
