import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Gauge,
  Thermometer,
  Waves,
  Zap,
  Atom,
  Layers,
  CheckCircle2
} from 'lucide-react';

// ── MINIMAL THEME A: VECTOR KINEMATICS ANIMATION ──
function MotionMicroAnim() {
  const [t, setT] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const update = (now: number) => {
      setT(((now - start) / 1000) % 2.5);
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  const progress = t / 2.5;
  const x = 16 + progress * 138;

  return (
    <div className="w-full h-16 bg-slate-50/90 rounded-xl border border-slate-200/80 relative overflow-hidden flex items-center px-2 select-none">
      <svg viewBox="0 0 170 42" className="w-full h-full">
        {/* Track Line */}
        <line x1="10" y1="28" x2="160" y2="28" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
        
        {/* Vector Arrow Line */}
        <g transform={`translate(${x}, 24)`}>
          <circle cx="0" cy="0" r="3.5" fill="#0f4a9b" stroke="#ffffff" strokeWidth="1" />
          <line x1="3.5" y1="0" x2={12 + progress * 10} y2="0" stroke="#C7A24A" strokeWidth="1.5" />
          <polygon points={`${12 + progress * 10},0 ${9 + progress * 10},-2.5 ${9 + progress * 10},2.5`} fill="#C7A24A" />
        </g>
        
        <text x="14" y="38" fill="#94a3b8" fontSize="6" fontFamily="monospace">x=0</text>
        <text x="156" y="38" fill="#0f4a9b" fontSize="6" fontFamily="monospace" textAnchor="end">v=u+at</text>
      </svg>
    </div>
  );
}

// ── MINIMAL THEME B: THERMAL GAS KINETICS ANIMATION ──
function ThermalMicroAnim() {
  return (
    <div className="w-full h-16 bg-slate-50/90 rounded-xl border border-slate-200/80 relative overflow-hidden flex items-center px-2 select-none">
      <svg viewBox="0 0 170 42" className="w-full h-full">
        {/* Chamber Outline */}
        <rect x="10" y="6" width="150" height="30" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        
        {/* Floating Thermal Particles */}
        {[
          { cx: 30, cy: 18, dx: 14, dy: 6, dur: 1.4 },
          { cx: 65, cy: 26, dx: -12, dy: -8, dur: 1.8 },
          { cx: 100, cy: 15, dx: 15, dy: 10, dur: 1.2 },
          { cx: 135, cy: 24, dx: -10, dy: -6, dur: 1.6 },
        ].map((p, idx) => (
          <motion.circle
            key={idx}
            r="2.6"
            fill={idx % 2 === 0 ? '#ea580c' : '#C7A24A'}
            animate={{
              cx: [p.cx, p.cx + p.dx, p.cx],
              cy: [p.cy, p.cy + p.dy, p.cy]
            }}
            transition={{ repeat: Infinity, duration: p.dur, ease: 'easeInOut' }}
          />
        ))}

        <text x="154" y="32" fill="#ea580c" fontSize="6" fontFamily="monospace" textAnchor="end">pV=nRT</text>
      </svg>
    </div>
  );
}

// ── MINIMAL THEME C: HARMONIC WAVE SINE ANIMATION ──
function WaveMicroAnim() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const update = (now: number) => {
      setPhase(((now - start) / 1000) * 3.5);
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  const sampleCount = 28;
  const points: string[] = [];
  for (let i = 0; i <= sampleCount; i++) {
    const x = 12 + (i / sampleCount) * 146;
    const y = 21 + Math.sin(phase + (i / sampleCount) * Math.PI * 3.5) * 8.5;
    points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  const pathD = points.join(' ');

  return (
    <div className="w-full h-16 bg-slate-50/90 rounded-xl border border-slate-200/80 relative overflow-hidden flex items-center px-2 select-none">
      <svg viewBox="0 0 170 42" className="w-full h-full">
        {/* Baseline Axis */}
        <line x1="10" y1="21" x2="160" y2="21" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Sine Wave */}
        <path d={pathD} fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
        
        <text x="156" y="38" fill="#0284c7" fontSize="6" fontFamily="monospace" textAnchor="end">v=fλ</text>
      </svg>
    </div>
  );
}

// ── MINIMAL THEME D: ELECTROMAGNETIC FIELD DEFLECTION ──
function FieldsMicroAnim() {
  return (
    <div className="w-full h-16 bg-slate-50/90 rounded-xl border border-slate-200/80 relative overflow-hidden flex items-center px-2 select-none">
      <svg viewBox="0 0 170 42" className="w-full h-full">
        {/* Equipotential Field Lines */}
        <line x1="10" y1="12" x2="160" y2="12" stroke="#e2e8f0" strokeWidth="0.8" />
        <line x1="10" y1="21" x2="160" y2="21" stroke="#e2e8f0" strokeWidth="0.8" />
        <line x1="10" y1="30" x2="160" y2="30" stroke="#e2e8f0" strokeWidth="0.8" />
        
        {/* Curved Path */}
        <path d="M 15 32 Q 80 32 155 10" fill="none" stroke="#d97706" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.6" />
        
        {/* Moving Charge Particle */}
        <motion.circle
          r="3"
          fill="#d97706"
          stroke="#ffffff"
          strokeWidth="1"
          animate={{
            cx: [15, 80, 155],
            cy: [32, 27, 10]
          }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        />

        <text x="156" y="38" fill="#d97706" fontSize="6" fontFamily="monospace" textAnchor="end">F=qvB</text>
      </svg>
    </div>
  );
}

// ── MINIMAL THEME E: QUANTUM ATOM TRANSITION ──
function QuantumMicroAnim() {
  return (
    <div className="w-full h-16 bg-slate-50/90 rounded-xl border border-slate-200/80 relative overflow-hidden flex items-center px-2 select-none">
      <svg viewBox="0 0 170 42" className="w-full h-full">
        {/* Nucleus */}
        <circle cx="48" cy="21" r="4.5" fill="#7c3aed" />
        
        {/* Orbits */}
        <circle cx="48" cy="21" r="10" fill="none" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2 2" />
        <circle cx="48" cy="21" r="17" fill="none" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2 2" />
        
        {/* Jumping Electron */}
        <motion.circle
          cx="48"
          r="2.2"
          fill="#0284c7"
          animate={{ cy: [4, 11, 4] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />

        {/* Emitted Photon Pulse */}
        <motion.path
          d="M 68 18 Q 74 12 80 18 T 92 18 T 104 18"
          fill="none"
          stroke="#C7A24A"
          strokeWidth="1.5"
          animate={{ x: [0, 45, 90], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
        />

        <text x="156" y="38" fill="#7c3aed" fontSize="6" fontFamily="monospace" textAnchor="end">E=hf</text>
      </svg>
    </div>
  );
}

interface MinimalTheme {
  letter: string;
  name: string;
  concept: string;
  formula: string;
  AnimComp: React.ComponentType;
  accent: string;
}

const MINIMAL_THEMES: MinimalTheme[] = [
  {
    letter: 'A',
    name: 'Space, Time & Motion',
    concept: 'Kinematics, forces, momentum & energy',
    formula: 'v = u + at',
    AnimComp: MotionMicroAnim,
    accent: '#0f4a9b'
  },
  {
    letter: 'B',
    name: 'Particulate Matter',
    concept: 'Thermal transfers, gas laws & thermodynamics',
    formula: 'pV = nRT',
    AnimComp: ThermalMicroAnim,
    accent: '#ea580c'
  },
  {
    letter: 'C',
    name: 'Wave Behaviour',
    concept: 'Harmonic motion, wave optics & Doppler',
    formula: 'v = fλ',
    AnimComp: WaveMicroAnim,
    accent: '#0284c7'
  },
  {
    letter: 'D',
    name: 'Fields & Induction',
    concept: 'Gravitational, electric & magnetic fields',
    formula: 'F = qvB',
    AnimComp: FieldsMicroAnim,
    accent: '#d97706'
  },
  {
    letter: 'E',
    name: 'Nuclear & Quantum',
    concept: 'Atomic transitions, photons & particle physics',
    formula: 'E = hf',
    AnimComp: QuantumMicroAnim,
    accent: '#7c3aed'
  }
];

interface Props {
  bookingUrl?: string;
}

export function PhysicsLaboratoryThemesStation({ bookingUrl = '/contact#form' }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    if (offsetWidth > 0) {
      const newIndex = Math.round(scrollLeft / (offsetWidth * 0.78));
      setActiveSlide(Math.min(Math.max(newIndex, 0), MINIMAL_THEMES.length - 1));
    }
  };

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-white relative overflow-hidden text-left">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimal Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0f4a9b] text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest mb-1 shadow-2xs">
            <Layers className="h-3 w-3 text-[#C7A24A]" />
            <span>SYLLABUS BREAKDOWN</span>
          </div>

          <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1">
            DP Physics Themes A–E <span className="text-[#0f4a9b]">&amp; MYP Sciences</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-lg mx-auto">
            Core syllabus taught with first-principles derivation, vector modeling, and statistical error treatment.
          </p>
        </div>

        {/* 5 Clean Minimal Theme Cards (Responsive Carousel on Mobile, 5-Columns on Desktop) */}
        <div className="w-full">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 touch-pan-x items-stretch"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {MINIMAL_THEMES.map((theme, i) => {
              const Anim = theme.AnimComp;
              return (
                <div
                  key={theme.letter}
                  className="w-[78vw] max-w-[270px] shrink-0 snap-center sm:w-auto sm:max-w-none rounded-2xl p-3 sm:p-3.5 bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0f4a9b]/35 transition-all duration-200 flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Theme Header & Tag */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black tracking-wider uppercase text-[#0f4a9b] bg-blue-50/90 px-2 py-0.5 rounded-md border border-blue-200/70">
                        THEME {theme.letter}
                      </span>
                      <span className="font-mono text-[9.5px] font-bold text-[#9E7B24] bg-[#C7A24A]/10 px-1.5 py-0.5 rounded border border-[#C7A24A]/25">
                        {theme.formula}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-[13px] font-extrabold text-[#0a1f3d] mb-1.5 leading-snug group-hover:text-[#0f4a9b] transition-colors truncate">
                      {theme.name}
                    </h3>

                    {/* In-Card Micro-Animation */}
                    <div className="mb-2">
                      <Anim />
                    </div>

                    {/* Concept Line */}
                    <p className="text-slate-600 text-[11px] sm:text-[11.5px] leading-snug font-medium min-h-[34px] sm:min-h-[36px]">
                      {theme.concept}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1 text-slate-600">
                      <CheckCircle2 className="w-3 h-3 text-[#C7A24A]" />
                      DP SL &amp; HL
                    </span>
                    <span className="text-[#0f4a9b] font-bold">1-to-1</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex sm:hidden justify-center items-center gap-1.5 mt-2.5">
            {MINIMAL_THEMES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => {
                  if (scrollRef.current) {
                    const child = scrollRef.current.children[dotIdx] as HTMLElement;
                    if (child) {
                      child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    }
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === dotIdx ? 'w-5 bg-[#0f4a9b]' : 'w-1.5 bg-slate-300'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
