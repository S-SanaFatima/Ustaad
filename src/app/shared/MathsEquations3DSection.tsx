import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ChevronRight, RotateCcw } from 'lucide-react';

// ── 1. PYTHAGORAS THEOREM ANIMATION (LIGHT THEME) ──
function PythagorasAnimation() {
  const [phase, setPhase] = useState<'split' | 'assembled'>('split');

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase(p => (p === 'split' ? 'assembled' : 'split'));
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-3.5 relative select-none">
      {/* Top Header Tag */}
      <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-600 border-b border-slate-200/80 pb-2 mb-1">
        <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          PYTHAGOREAN PROOF · a² + b² = c²
        </span>
        <button
          onClick={() => setPhase(p => (p === 'split' ? 'assembled' : 'split'))}
          className="text-[10px] px-2 py-0.5 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs transition-colors cursor-pointer flex items-center gap-1"
        >
          <RotateCcw className="w-2.5 h-2.5" />
          {phase === 'split' ? 'Tile to c²' : 'Reset'}
        </button>
      </div>

      {/* SVG Canvas */}
      <svg viewBox="0 0 340 260" className="w-full flex-1 min-h-0 overflow-hidden">
        <defs>
          <linearGradient id="squareAGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="squareBGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="hypoGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* Hypotenuse Square Outline (Target c² = 100 x 100) */}
        <polygon
          points="130,170 190,90 110,30 50,110"
          fill="url(#hypoGradLight)"
          stroke="#0284c7"
          strokeWidth="2"
          strokeDasharray={phase === 'assembled' ? '0' : '4 4'}
          className="transition-all duration-700"
        />

        {/* Dynamic Tiling Pieces of a² (60x60 = 3600) */}
        <motion.polygon
          points="130,170 190,170 190,230 130,230"
          fill="url(#squareAGradLight)"
          stroke="#047857"
          strokeWidth="1.8"
          animate={
            phase === 'assembled'
              ? { x: -40, y: -60, rotate: 53.13, opacity: 0.95 }
              : { x: 0, y: 0, rotate: 0, opacity: 0.9 }
          }
          transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ originX: '160px', originY: '200px' }}
        />

        {/* Dynamic Tiling Pieces of b² (80x80 = 6400) */}
        <motion.polygon
          points="190,90 270,90 270,170 190,170"
          fill="url(#squareBGradLight)"
          stroke="#b45309"
          strokeWidth="1.8"
          animate={
            phase === 'assembled'
              ? { x: -110, y: -50, rotate: -36.87, opacity: 0.95 }
              : { x: 0, y: 0, rotate: 0, opacity: 0.9 }
          }
          transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ originX: '230px', originY: '130px' }}
        />

        {/* Central Right-Angled Triangle */}
        <polygon
          points="190,170 130,170 190,90"
          fill="#ffffff"
          stroke="#0a1f3d"
          strokeWidth="2.5"
        />

        {/* Right-angle square indicator at (190, 170) */}
        <polyline
          points="180,170 180,160 190,160"
          fill="none"
          stroke="#0f4a9b"
          strokeWidth="2"
        />

        {/* Side Dimension Labels */}
        <text x="156" y="164" fill="#047857" fontSize="11" fontFamily="monospace" fontWeight="bold">
          a
        </text>
        <text x="195" y="135" fill="#b45309" fontSize="11" fontFamily="monospace" fontWeight="bold">
          b
        </text>
        <text x="145" y="122" fill="#0284c7" fontSize="12" fontFamily="monospace" fontWeight="bold">
          c
        </text>

        {/* Area Tags */}
        <text x="147" y="205" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
          a²
        </text>
        <text x="222" y="135" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
          b²
        </text>
        <text x="110" y="100" fill="#0284c7" fontSize="13" fontFamily="monospace" fontWeight="black">
          c²
        </text>
      </svg>

      {/* Formula Readout Bar */}
      <div className="w-full shrink-0 py-1.5 px-2.5 sm:px-3 rounded-lg bg-white/95 border border-slate-200/90 shadow-2xs flex items-center justify-between text-[11px] sm:text-xs font-mono">
        <span className="text-emerald-700 font-bold whitespace-nowrap">a² = 9</span>
        <span className="text-slate-400">+</span>
        <span className="text-amber-700 font-bold whitespace-nowrap">b² = 16</span>
        <span className="text-slate-400">=</span>
        <span className="text-sky-700 font-extrabold whitespace-nowrap">c² = 25</span>
        <span className="text-[10px] text-slate-500 hidden sm:inline whitespace-nowrap">(3:4:5 Triplet)</span>
      </div>
    </div>
  );
}

// ── 2. UNIT CIRCLE & SINE WAVE ANIMATION (LIGHT THEME) ──
function UnitCircleSineAnimation() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let frame: number;
    const update = () => {
      setAngle(prev => (prev + 0.035) % (Math.PI * 2));
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  const cx = 85;
  const cy = 130;
  const r = 48;

  // Orbit point
  const px = cx + r * Math.cos(-angle);
  const py = cy + r * Math.sin(-angle);

  // Generate sine wave path points
  const waveStartX = 165;
  const waveWidth = 145;
  const sampleCount = 45;
  const wavePoints: string[] = [];

  for (let i = 0; i <= sampleCount; i++) {
    const t = (i / sampleCount) * (Math.PI * 2);
    const x = waveStartX + (i / sampleCount) * waveWidth;
    const y = cy + r * Math.sin(-(angle - t));
    wavePoints.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  const wavePath = wavePoints.join(' ');

  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-3.5 relative select-none">
      {/* Top Header Tag */}
      <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-600 border-b border-slate-200/80 pb-2 mb-1">
        <span className="flex items-center gap-1.5 text-sky-700 font-bold">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          UNIT CIRCLE ↦ HARMONIC SINE WAVE
        </span>
        <span className="text-[10px] font-mono font-bold text-[#0f4a9b]">
          θ = {(angle).toFixed(2)} rad
        </span>
      </div>

      {/* SVG Canvas */}
      <svg viewBox="0 0 340 260" className="w-full flex-1 min-h-0 overflow-hidden">
        {/* Circle Coordinate Axes */}
        <line x1="20" y1={cy} x2="150" y2={cy} stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1={cx} y1="65" x2={cx} y2="195" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="2 2" />

        {/* Unit Circle */}
        <circle cx={cx} cy={cy} r={r} fill="#0284c7" fillOpacity="0.04" stroke="#0284c7" strokeWidth="2" />

        {/* Rotating Radius Vector */}
        <line x1={cx} y1={cy} x2={px} y2={py} stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />

        {/* Vertical sine projection inside circle */}
        <line x1={px} y1={cy} x2={px} y2={py} stroke="#059669" strokeWidth="2" strokeDasharray="3 2" />
        {/* Horizontal cosine projection inside circle */}
        <line x1={cx} y1={cy} x2={px} y2={cy} stroke="#4f46e5" strokeWidth="2" strokeDasharray="3 2" />

        {/* Orbit Point on Circle */}
        <circle cx={px} cy={py} r="4.5" fill="#d97706" />
        <circle cx={px} cy={py} r="9" fill="none" stroke="#d97706" strokeWidth="1.2" strokeDasharray="2 2" />

        {/* Horizontal Projecting Line to Sine Graph */}
        <line
          x1={px}
          y1={py}
          x2={waveStartX}
          y2={py}
          stroke="#d97706"
          strokeWidth="1.6"
          strokeDasharray="3 3"
          opacity="0.9"
        />

        {/* Sine Wave Graph Axis */}
        <line x1={waveStartX} y1={cy} x2="325" y2={cy} stroke="#94a3b8" strokeWidth="1.2" />
        <line x1={waveStartX} y1="65" x2={waveStartX} y2="195" stroke="#94a3b8" strokeWidth="1.2" />
        <text x="320" y={cy - 6} fill="#64748b" fontSize="9" fontFamily="monospace">
          t
        </text>
        <text x={waveStartX + 4} y="74" fill="#059669" fontSize="9" fontFamily="monospace" fontWeight="bold">
          +1
        </text>
        <text x={waveStartX + 4} y="192" fill="#059669" fontSize="9" fontFamily="monospace" fontWeight="bold">
          -1
        </text>

        {/* Traced Continuous Sine Wave Curve */}
        <path d={wavePath} fill="none" stroke="#059669" strokeWidth="2.8" strokeLinecap="round" />

        {/* Current Peak Point on Sine Curve */}
        <circle cx={waveStartX} cy={py} r="4.5" fill="#059669" />

        {/* Coordinate Text */}
        <text x="25" y="75" fill="#4f46e5" fontSize="9" fontFamily="monospace" fontWeight="bold">
          cos θ = {Math.cos(angle).toFixed(2)}
        </text>
        <text x="25" y="88" fill="#059669" fontSize="9" fontFamily="monospace" fontWeight="bold">
          sin θ = {Math.sin(angle).toFixed(2)}
        </text>
      </svg>

      {/* Formula Readout Bar */}
      <div className="w-full shrink-0 py-1.5 px-2.5 sm:px-3 rounded-lg bg-white/95 border border-slate-200/90 shadow-2xs flex items-center justify-between text-[10.5px] sm:text-xs font-mono">
        <span className="text-amber-700 font-bold whitespace-nowrap">P(cosθ, sinθ)</span>
        <span className="text-slate-400">·</span>
        <span className="text-emerald-700 font-bold whitespace-nowrap">y = sin(ωt)</span>
        <span className="text-slate-400">·</span>
        <span className="text-sky-700 font-bold whitespace-nowrap">sin²θ + cos²θ = 1</span>
      </div>
    </div>
  );
}

// ── 3. QUADRATIC FORMULA / COMPLETING THE SQUARE ANIMATION (LIGHT THEME) ──
function QuadraticDerivationAnimation() {
  const [stage, setStage] = useState(0);

  const steps = [
    { title: 'Standard Form', eq: 'ax² + bx + c = 0', desc: 'Initial Area: x(x + b/a) = -c/a' },
    { title: 'Symmetric Split', eq: 'x² + 2·(b/2a)x', desc: 'Partition (b/a)x into two (b/2a) strips' },
    { title: 'Complete Square', eq: '(x + b/2a)² = (b² - 4ac)/4a²', desc: 'Drop in (b/2a)² corner piece' },
    { title: 'Quadratic Formula', eq: 'x = (-b ± √(b² - 4ac)) / 2a', desc: 'Take square root & isolate x' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStage(s => (s + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-3.5 relative select-none">
      {/* Top Header Tag */}
      <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-600 border-b border-slate-200/80 pb-2 mb-1">
        <span className="flex items-center gap-1.5 text-amber-700 font-bold">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
          COMPLETING THE SQUARE · DERIVATION
        </span>
        <div className="flex gap-1">
          {[0, 1, 2, 3].map(i => (
            <button
              key={i}
              onClick={() => setStage(i)}
              className={`w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center transition-all cursor-pointer ${
                stage === i ? 'bg-amber-500 text-white shadow-2xs' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Canvas - Dynamic Moving Area Blocks */}
      <svg viewBox="0 0 340 230" className="w-full flex-1 min-h-0 overflow-hidden">
        <defs>
          <radialGradient id="cornerGlowLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
        </defs>

        {/* Base x² Square (75, 45, 84 x 84) */}
        <rect
          x="75"
          y="45"
          width="84"
          height="84"
          fill="#3b82f6"
          stroke="#1d4ed8"
          strokeWidth="2"
          rx="4"
        />
        <text x="117" y="92" fill="#ffffff" fontSize="15" fontFamily="monospace" fontWeight="black" textAnchor="middle">
          x²
        </text>

        {/* First Strip (b/2a · x) on the Right */}
        <motion.rect
          x="163"
          y="45"
          width="34"
          height="84"
          fill="#f59e0b"
          stroke="#d97706"
          strokeWidth="1.8"
          rx="4"
          animate={{
            opacity: stage === 0 ? 0.92 : 1,
            scale: stage >= 1 ? [1, 1.03, 1] : 1,
          }}
          transition={{ duration: 0.5 }}
        />
        <text x="180" y="92" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          {stage === 0 ? 'b/a·x' : 'b/2a·x'}
        </text>

        {/* Second Strip: In Stage 0, it sits alongside first strip. In Stage 1+, it glides and rotates to the bottom! */}
        <motion.rect
          fill="#f59e0b"
          stroke="#d97706"
          strokeWidth="1.8"
          rx="4"
          animate={
            stage === 0
              ? { x: 201, y: 45, width: 34, height: 84, opacity: 0.85 }
              : { x: 75, y: 133, width: 84, height: 34, opacity: 1 }
          }
          transition={{ duration: 0.85, ease: [0.34, 1.56, 0.64, 1] }}
        />
        <motion.text
          fill="#ffffff"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
          textAnchor="middle"
          animate={
            stage === 0
              ? { x: 218, y: 92 }
              : { x: 117, y: 154 }
          }
          transition={{ duration: 0.85 }}
        >
          b/2a·x
        </motion.text>

        {/* Missing Corner Block (b/2a)²: Drops in dynamically with spring bounce in Stage 2+ */}
        <motion.rect
          x="163"
          y="133"
          width="34"
          height="34"
          fill="url(#cornerGlowLight)"
          stroke="#b45309"
          strokeWidth="2"
          rx="4"
          animate={
            stage >= 2
              ? {
                  scale: [0, 1.25, 1],
                  opacity: 1,
                  y: [75, 133],
                }
              : { scale: 0, opacity: 0, y: 75 }
          }
          transition={{ duration: 0.7, ease: 'backOut' }}
          style={{ originX: '180px', originY: '150px' }}
        />
        {stage >= 2 && (
          <motion.text
            x="180"
            y="154"
            fill="#ffffff"
            fontSize="8"
            fontFamily="monospace"
            fontWeight="black"
            textAnchor="middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            (b/2a)²
          </motion.text>
        )}

        {/* Dimension Labels with smooth fade */}
        <text x="117" y="38" fill="#1d4ed8" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          x
        </text>
        <text x="180" y="38" fill="#d97706" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          b/2a
        </text>
        <text x="63" y="92" fill="#1d4ed8" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          x
        </text>
        {stage >= 1 && (
          <text x="58" y="154" fill="#d97706" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            b/2a
          </text>
        )}

        {/* Full Completed Square Glow Border in Stage 2 and 3 */}
        {stage >= 2 && (
          <motion.rect
            x="71"
            y="41"
            width="130"
            height="130"
            fill="none"
            stroke="#d97706"
            strokeWidth="2"
            strokeDasharray="4 4"
            rx="6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: [0.4, 1, 0.7], scale: [0.98, 1, 0.98] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{ originX: '136px', originY: '106px' }}
          />
        )}
      </svg>

      {/* Step Formula Explanation with smooth change */}
      <motion.div
        key={stage}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full shrink-0 py-1.5 px-2.5 sm:px-3 rounded-lg bg-white/95 border border-amber-300/80 text-center flex flex-col gap-0.5 shadow-2xs"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase text-amber-700">
            Step 0{stage + 1}: {steps[stage].title}
          </span>
          <span className="text-[9px] font-mono text-slate-500 font-semibold">
            {steps[stage].desc}
          </span>
        </div>
        <div className="text-xs sm:text-sm font-mono font-black text-[#0a1f3d] tracking-wide">
          {steps[stage].eq}
        </div>
      </motion.div>
    </div>
  );
}

// ── 4. MATRIX LINEAR TRANSFORMATION ANIMATION (LIGHT THEME) ──
function MatrixLinearTransformationAnimation() {
  const [t, setT] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    let frame: number;
    const animate = () => {
      setT(prev => {
        if (prev >= 1) {
          setForward(false);
          return 0.99;
        }
        if (prev <= 0) {
          setForward(true);
          return 0.01;
        }
        return forward ? prev + 0.012 : prev - 0.012;
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [forward]);

  const originX = 170;
  const originY = 145;
  const unit = 42;

  const m00 = 1 + t;
  const m01 = t;
  const m10 = 0;
  const m11 = 1;

  const transformPoint = (x: number, y: number) => {
    const tx = m00 * x + m01 * y;
    const ty = m10 * x + m11 * y;
    return {
      x: originX + tx * unit,
      y: originY - ty * unit,
    };
  };

  const iHat = transformPoint(1, 0);
  const jHat = transformPoint(0, 1);
  const pCorner = transformPoint(1, 1);
  const pOrigin = transformPoint(0, 0);

  const gridCoords = [-2, -1, 0, 1, 2];

  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-3.5 relative select-none">
      {/* Top Header Tag */}
      <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-600 border-b border-slate-200/80 pb-2 mb-1">
        <span className="flex items-center gap-1.5 text-indigo-700 font-bold">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          LINEAR MAPPING · 2D SHEAR MATRIX
        </span>
        <span className="text-[10px] font-mono font-bold text-indigo-700">
          M = [[{(1 + t).toFixed(1)}, {t.toFixed(1)}], [0, 1]]
        </span>
      </div>

      {/* SVG Canvas - Dynamic Shearing Grid */}
      <svg viewBox="0 0 340 250" className="w-full flex-1 min-h-0 overflow-hidden">
        {gridCoords.map(gx => {
          const pTop = transformPoint(gx, 2.2);
          const pBot = transformPoint(gx, -2.2);
          return (
            <line
              key={`v-${gx}`}
              x1={pTop.x}
              y1={pTop.y}
              x2={pBot.x}
              y2={pBot.y}
              stroke={gx === 0 ? '#475569' : '#cbd5e1'}
              strokeWidth={gx === 0 ? '1.5' : '1'}
              strokeDasharray={gx === 0 ? '0' : '2 2'}
              opacity="0.8"
            />
          );
        })}

        {gridCoords.map(gy => {
          const pLeft = transformPoint(-2.2, gy);
          const pRight = transformPoint(2.2, gy);
          return (
            <line
              key={`h-${gy}`}
              x1={pLeft.x}
              y1={pLeft.y}
              x2={pRight.x}
              y2={pRight.y}
              stroke={gy === 0 ? '#475569' : '#cbd5e1'}
              strokeWidth={gy === 0 ? '1.5' : '1'}
              strokeDasharray={gy === 0 ? '0' : '2 2'}
              opacity="0.8"
            />
          );
        })}

        {/* Transformed Unit Square Area (Parallelogram) */}
        <polygon
          points={`${pOrigin.x},${pOrigin.y} ${iHat.x},${iHat.y} ${pCorner.x},${pCorner.y} ${jHat.x},${jHat.y}`}
          fill="#0284c7"
          fillOpacity="0.15"
          stroke="#0284c7"
          strokeWidth="2"
        />

        {/* Basis Vector i-hat */}
        <line
          x1={pOrigin.x}
          y1={pOrigin.y}
          x2={iHat.x}
          y2={iHat.y}
          stroke="#0284c7"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx={iHat.x} cy={iHat.y} r="4" fill="#0284c7" />
        <text x={iHat.x + 5} y={iHat.y + 4} fill="#0284c7" fontSize="10" fontFamily="monospace" fontWeight="bold">
          î&apos;=[{(1 + t).toFixed(1)}, 0]
        </text>

        {/* Basis Vector j-hat */}
        <line
          x1={pOrigin.x}
          y1={pOrigin.y}
          x2={jHat.x}
          y2={jHat.y}
          stroke="#d97706"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx={jHat.x} cy={jHat.y} r="4" fill="#d97706" />
        <text x={jHat.x + 5} y={jHat.y - 4} fill="#d97706" fontSize="10" fontFamily="monospace" fontWeight="bold">
          ĵ&apos;=[{t.toFixed(1)}, 1]
        </text>

        {/* Fixed Origin Point (0, 0) */}
        <circle cx={pOrigin.x} cy={pOrigin.y} r="4.5" fill="#0a1f3d" />
        <text x={pOrigin.x - 14} y={pOrigin.y + 14} fill="#64748b" fontSize="9" fontFamily="monospace" fontWeight="bold">
          (0,0)
        </text>
      </svg>

      {/* Formula Readout Bar */}
      <div className="w-full shrink-0 py-1.5 px-2.5 sm:px-3 rounded-lg bg-white/95 border border-slate-200/90 shadow-2xs flex items-center justify-between text-[10.5px] sm:text-xs font-mono">
        <span className="text-sky-700 font-bold whitespace-nowrap">det(A) = 2</span>
        <span className="text-slate-400">·</span>
        <span className="text-amber-700 font-bold whitespace-nowrap">Origin Fixed</span>
        <span className="text-slate-400">·</span>
        <span className="text-indigo-700 font-bold whitespace-nowrap">Area Doubled (2x)</span>
      </div>
    </div>
  );
}

// ── MAIN EXPORT: WHITE BACKGROUND + MATCHING GRADIENT CANVAS ON BOTH SIDES ──
export function MathsEquations3DSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [timerKey, setTimerKey] = useState<number>(0);

  const topics = [
    {
      id: 0,
      title: "Pythagoras' Theorem",
      badge: 'Geometry & Proof',
      equation: 'a² + b² = c²',
      desc: 'Squares on legs a² and b² smoothly tile into the hypotenuse square c².',
      tag: 'GCSE & Edexcel 1MA1',
      shortTitle: 'Pythagoras',
      bgGradient: 'from-white via-white to-emerald-50/60',
      activeBgGradient: 'from-white via-emerald-50/50 to-teal-50/70',
      activeBorder: 'border-emerald-500 shadow-[0_8px_24px_rgba(16,185,129,0.16)]',
      activeRing: 'ring-1 ring-emerald-500/30',
      activeStrip: 'from-emerald-500 to-teal-400',
      numberColor: 'text-emerald-600',
      chipStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200/90',
      component: <PythagorasAnimation />,
    },
    {
      id: 1,
      title: 'Unit Circle & Sine Wave',
      shortTitle: 'Sine Wave',
      badge: 'Trigonometry & Waves',
      equation: 'sin²θ + cos²θ = 1 · y = sin(ωt)',
      desc: 'Counterclockwise rotation continuously projects the harmonic sine wave.',
      tag: 'IGCSE Tier 9 & A-Level',
      bgGradient: 'from-white via-white to-sky-50/60',
      activeBgGradient: 'from-white via-sky-50/50 to-cyan-50/70',
      activeBorder: 'border-sky-500 shadow-[0_8px_24px_rgba(14,165,233,0.16)]',
      activeRing: 'ring-1 ring-sky-500/30',
      activeStrip: 'from-sky-500 to-[#C7A24A]',
      numberColor: 'text-sky-600',
      chipStyle: 'bg-sky-50 text-sky-800 border-sky-200/90',
      component: <UnitCircleSineAnimation />,
    },
    {
      id: 2,
      title: 'Completing the Square',
      shortTitle: 'Quadratics',
      badge: 'Algebraic Mastery',
      equation: 'x = (-b ± √(b² - 4ac)) / 2a',
      desc: 'Dynamic area blocks shift on the plane to complete the square & derive formula.',
      tag: 'Higher Tier & Cambridge',
      bgGradient: 'from-white via-white to-amber-50/60',
      activeBgGradient: 'from-white via-amber-50/50 to-orange-50/60',
      activeBorder: 'border-amber-500 shadow-[0_8px_24px_rgba(245,158,11,0.16)]',
      activeRing: 'ring-1 ring-amber-500/30',
      activeStrip: 'from-amber-500 to-yellow-400',
      numberColor: 'text-amber-600',
      chipStyle: 'bg-amber-50 text-amber-800 border-amber-200/90',
      component: <QuadraticDerivationAnimation />,
    },
    {
      id: 3,
      title: 'Matrix Transformation',
      shortTitle: 'Matrices',
      badge: 'Linear Algebra & Vectors',
      equation: 'M = [[2, 1], [0, 1]] · det(A) = 2',
      desc: '2D grid vectors stretch and shear under linear mapping with origin fixed.',
      tag: 'IB HL & Further Maths',
      bgGradient: 'from-white via-white to-indigo-50/60',
      activeBgGradient: 'from-white via-indigo-50/50 to-purple-50/60',
      activeBorder: 'border-indigo-500 shadow-[0_8px_24px_rgba(99,102,241,0.16)]',
      activeRing: 'ring-1 ring-indigo-500/30',
      activeStrip: 'from-indigo-500 to-purple-400',
      numberColor: 'text-indigo-600',
      chipStyle: 'bg-indigo-50 text-indigo-800 border-indigo-200/90',
      component: <MatrixLinearTransformationAnimation />,
    },
  ];

  // Automatic Continuous Card Cycle (always auto-plays, resets timer upon click)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % topics.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [timerKey, topics.length]);

  const handleCardClick = (idx: number) => {
    setActiveTab(idx);
    setTimerKey(k => k + 1);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-14 bg-white text-slate-800 relative overflow-hidden select-none border-b border-slate-200/90">
      <div className="absolute top-0 right-1/4 w-[450px] h-[250px] bg-gradient-to-bl from-blue-100/60 via-amber-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-blue-50 border border-blue-200/80 text-[#0f4a9b] rounded-full text-xs font-bold mb-1.5 sm:mb-2 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#0f4a9b]" />
            <span>INTERACTIVE MATHEMATICAL PROOFS</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-[#0a1f3d] tracking-tight mb-1 sm:mb-1.5">
            See Equations Come to Life
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto hidden sm:block">
            When abstract formulas map to intuitive visual mechanics, high grades follow naturally. Tap any card to preview the live animation.
          </p>
        </div>

        {/* ── UNIFIED STUDIO PANEL ── */}
        <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-3 sm:p-5 lg:p-6 shadow-[0_8px_30px_rgba(15,74,155,0.05)]">
          {/* MOBILE 4-PILL TOP SWITCHER (< lg) */}
          <div className="lg:hidden mb-3">
            <div className="grid grid-cols-4 gap-1 sm:gap-1.5 p-1 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              {topics.map((item, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleCardClick(idx)}
                    className={`py-1.5 px-1 rounded-lg text-center font-mono transition-all relative overflow-hidden flex flex-col items-center justify-center cursor-pointer ${
                      isActive
                        ? 'bg-slate-100/90 text-[#0a1f3d] font-bold shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <span
                      className={`text-[10.5px] sm:text-xs font-black leading-none mb-0.5 ${
                        isActive ? item.numberColor : 'text-slate-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-[9.5px] sm:text-[11px] truncate max-w-full font-sans font-semibold leading-tight">
                      {item.shortTitle}
                    </span>
                    {isActive && (
                      <motion.div
                        key={`m-prog-${activeTab}-${timerKey}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 5, ease: 'linear' }}
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${item.activeStrip}`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-center">
            {/* LEFT COLUMN: LIVE ANIMATION STAGE */}
            <div className="lg:col-span-6 flex flex-col">
              <div
                className={`relative w-full h-[325px] sm:h-[350px] lg:h-[365px] rounded-2xl bg-gradient-to-br ${topics[activeTab].activeBgGradient} border ${topics[activeTab].activeBorder} shadow-[0_12px_36px_rgba(15,74,155,0.06)] overflow-hidden flex flex-col justify-between transition-colors duration-500`}
              >
                {/* Top Colored Accent Strip matching active diagram */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${topics[activeTab].activeStrip}`} />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="w-full h-full flex flex-col"
                  >
                    {topics[activeTab].component}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stage Controls Underneath */}
              <div className="mt-2.5 flex items-center justify-between text-xs font-mono px-1 gap-2">
                <span className="flex items-center gap-1.5 text-[#0a1f3d] font-bold text-xs sm:text-sm min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#C7A24A] animate-ping shrink-0" />
                  <span className="leading-tight">
                    Proof: <span className={topics[activeTab].numberColor}>{topics[activeTab].title}</span>
                  </span>
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500 font-semibold shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  0{activeTab + 1}/04
                </span>
              </div>

              {/* MOBILE ACTIVE CARD SUMMARY (< lg) */}
              <div className="lg:hidden mt-2.5 p-3.5 rounded-xl border bg-white shadow-2xs flex flex-col gap-1.5 border-slate-200/90 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${topics[activeTab].activeStrip}`} />
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9.5px] font-mono font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200/80 shrink-0">
                    {topics[activeTab].tag}
                  </span>
                  <span className={`text-[10px] font-bold font-mono ${topics[activeTab].numberColor}`}>
                    Interactive 3D Proof
                  </span>
                </div>
                <p className="text-[11.5px] sm:text-xs text-slate-600 leading-snug">
                  {topics[activeTab].desc}
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px] sm:text-[10.5px] font-mono">
                  <span className={`px-2 py-0.5 rounded border font-bold ${topics[activeTab].chipStyle}`}>
                    {topics[activeTab].equation}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: 4 COMPACT INTERACTIVE CARDS (DESKTOP ONLY `hidden lg:flex`) */}
            <div className="hidden lg:flex lg:col-span-6 flex-col gap-2.5">
              {topics.map((item, idx) => {
                const isActive = activeTab === idx;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleCardClick(idx)}
                    className={`p-3 sm:p-3.5 rounded-xl border transition-all duration-200 cursor-pointer text-left relative overflow-hidden group flex flex-col justify-between ${
                      isActive
                        ? `bg-gradient-to-r ${item.activeBgGradient} ${item.activeBorder} ${item.activeRing} -translate-x-1`
                        : `bg-gradient-to-r ${item.bgGradient} border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs`
                    }`}
                  >
                    {/* Left Active Colored Indicator Strip */}
                    {isActive && (
                      <motion.div
                        layoutId="activeGlowStrip"
                        className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${item.activeStrip}`}
                      />
                    )}

                    {/* Bottom Countdown Progress Bar on Active Card */}
                    {isActive && (
                      <motion.div
                        key={`progress-${activeTab}-${timerKey}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 5, ease: 'linear' }}
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${item.activeStrip}`}
                      />
                    )}

                    {/* Top row: Number, Title, Tag */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono font-black transition-colors ${
                            isActive ? item.numberColor : 'text-slate-400 group-hover:text-slate-600'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <h3
                          className={`text-sm font-black transition-colors ${
                            isActive ? 'text-[#0a1f3d]' : 'text-slate-800 group-hover:text-[#0a1f3d]'
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-[9.5px] font-mono font-semibold text-slate-500 bg-white/80 px-2 py-0.5 rounded border border-slate-200/80 shrink-0 shadow-2xs">
                        {item.tag}
                      </span>
                    </div>

                    {/* Short description */}
                    <p className="text-[11.5px] sm:text-xs text-slate-600 leading-snug mb-2 line-clamp-1">
                      {item.desc}
                    </p>

                    {/* Bottom row: Formula chip + Active status */}
                    <div className="flex items-center justify-between text-[10.5px] font-mono">
                      <span
                        className={`px-2 py-0.5 rounded border text-[10px] font-bold shadow-2xs transition-colors ${
                          isActive
                            ? item.chipStyle
                            : 'bg-white/90 text-slate-600 border-slate-200/80'
                        }`}
                      >
                        {item.equation}
                      </span>
                      <span
                        className={`flex items-center gap-1 font-bold text-[10.5px] transition-opacity ${
                          isActive ? `${item.numberColor} opacity-100` : 'text-slate-400 opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        {isActive ? 'Active' : 'Preview'}
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
