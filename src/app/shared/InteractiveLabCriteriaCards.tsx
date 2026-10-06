import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Activity, TrendingUp, ShieldCheck } from 'lucide-react';

// ── 1. WIDGET 1: VARIABLE SCOPE & CONTROL MATRIX SIMULATOR ──
function VariableScopeWidget() {
  const [sliderVal, setSliderVal] = useState(40);

  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.03;
      setSliderVal(50 + Math.sin(t) * 35);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const indepVal = (0.2 + (sliderVal / 100) * 0.8).toFixed(2);
  const depVal = (2 * Math.PI * Math.sqrt(parseFloat(indepVal) / 9.81)).toFixed(2);

  return (
    <div className="w-full bg-slate-50/90 rounded-xl p-2.5 border border-slate-200/90 shadow-2xs select-none mb-3.5 space-y-2">
      {/* Top Status Bar */}
      <div className="flex items-center justify-between text-[10px] font-mono text-[#0f4a9b] font-bold">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] animate-pulse" />
          SCOPE: L vs T² MODEL
        </span>
        <span className="text-[9px] text-[#9E7B24] font-bold bg-[#C7A24A]/15 px-1.5 py-0.5 rounded border border-[#C7A24A]/30">
          IV → DV LOCKED
        </span>
      </div>

      {/* Center Oscillating Variable Coordinate Track */}
      <div className="relative w-full h-10 bg-white rounded-lg border border-slate-200 shadow-2xs flex items-center px-2">
        {/* Coordinate Track Line */}
        <div className="w-full h-1 bg-slate-100 rounded-full relative border border-slate-200/60">
          {/* Target Reticle Slider Indicator */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center"
            style={{ left: `${sliderVal}%` }}
          >
            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#0f4a9b] bg-blue-100 flex items-center justify-center shadow-xs">
              <div className="w-1 h-1 rounded-full bg-[#0f4a9b]" />
            </div>
          </div>
        </div>

        {/* Readouts Inside Track */}
        <div className="absolute top-1 left-2 text-[9px] font-mono text-slate-500 font-medium">
          L (indep): <span className="text-[#0f4a9b] font-bold">{indepVal} m</span>
        </div>
        <div className="absolute bottom-1 right-2 text-[9px] font-mono text-slate-500 font-medium">
          T (dep): <span className="text-[#b45309] font-bold">{depVal} s</span>
        </div>
      </div>

      {/* Controlled Variables Footer Badges */}
      <div className="flex items-center justify-between text-[8.5px] font-mono text-slate-600 pt-0.5">
        <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
          <span className="text-emerald-600 font-bold">✓</span> Controlled: m = 100g
        </span>
        <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
          <span className="text-emerald-600 font-bold">✓</span> θ &lt; 10°
        </span>
      </div>
    </div>
  );
}

// ── 2. WIDGET 2: STATISTICAL UNCERTAINTY PROPAGATION ENGINE ──
function UncertaintyEngineWidget() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => (p + 1) % 4);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const samples = [
    { calc: 'ΔT/T = ½(ΔL/L)', val: '± 0.018 s', sfig: '3 S.F. ✓' },
    { calc: 'Fractional: 1.8%', val: '± 0.021 s', sfig: '3 S.F. ✓' },
    { calc: 'Δg/g = 2(ΔT/T)', val: '± 0.14 m/s²', sfig: '2 S.F. ✓' },
    { calc: 'Absolute: ±0.14', val: 'g = 9.81', sfig: 'PASSED ✓' }
  ];
  const curr = samples[pulse];

  return (
    <div className="w-full bg-slate-50/90 rounded-xl p-2.5 border border-slate-200/90 shadow-2xs select-none mb-3.5 space-y-2">
      {/* Top Header */}
      <div className="flex items-center justify-between text-[10px] font-mono text-amber-800 font-bold">
        <span className="flex items-center gap-1">
          <Activity className="w-3 h-3 text-amber-600 animate-spin" />
          UNCERTAINTY MATRIX
        </span>
        <span className="text-[9px] text-emerald-800 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
          {curr.sfig}
        </span>
      </div>

      {/* Uncertainty Propagation Visualizer */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-2xs p-2 flex items-center justify-between">
        <div>
          <div className="text-[8.5px] font-mono text-slate-500 font-medium mb-0.5">PROPAGATION:</div>
          <div className="text-[11px] font-mono font-bold text-[#b45309]">{curr.calc}</div>
        </div>
        <div className="text-right">
          <div className="text-[8.5px] font-mono text-slate-500 font-medium mb-0.5">RESULT:</div>
          <div className="text-[11px] font-mono font-bold text-emerald-700">{curr.val}</div>
        </div>
      </div>

      {/* Live Tolerance Bar with Normal Distribution Gaussian Curve */}
      <div className="flex items-center justify-between text-[8.5px] font-mono text-slate-600 pt-0.5">
        <span>Gaussian: σ = 0.012</span>
        <span className="text-[#0f4a9b] font-bold">95% Conf. Interval</span>
      </div>
    </div>
  );
}

// ── 3. WIDGET 3: LIVE MIN/MAX GRADIENT & ERROR ENVELOPE PLOTTER ──
function GradientPlotterWidget() {
  const [slopePhase, setSlopePhase] = useState(0);

  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.025;
      setSlopePhase(Math.sin(t));
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Slope line coordinates
  const yBest1 = 40 + slopePhase * 2;
  const yBest2 = 8 - slopePhase * 2;

  return (
    <div className="w-full bg-slate-50/90 rounded-xl p-2.5 border border-slate-200/90 shadow-2xs select-none mb-3.5 space-y-2">
      {/* Top Status */}
      <div className="flex items-center justify-between text-[10px] font-mono text-emerald-800 font-bold">
        <span className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3 text-emerald-600" />
          GRADIENT UNCERTAINTY
        </span>
        <span className="text-[9px] text-[#0f4a9b] font-mono font-bold">
          Δm = ± 0.18
        </span>
      </div>

      {/* SVG Error Bar Graph */}
      <div className="w-full h-12 bg-white rounded-lg border border-slate-200 shadow-2xs relative overflow-hidden px-1">
        <svg viewBox="0 0 200 48" className="w-full h-full">
          {/* Grid lines */}
          <line x1="15" y1="42" x2="190" y2="42" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="15" y1="42" x2="15" y2="6" stroke="#e2e8f0" strokeWidth="1" />
          
          {/* Max Gradient Line (Steep - Dotted Amber) */}
          <line x1="22" y1="44" x2="182" y2="6" stroke="#d97706" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.8" />
          
          {/* Min Gradient Line (Shallow - Dotted Cyan) */}
          <line x1="22" y1="36" x2="182" y2="12" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.8" />

          {/* Line of Best Fit (Solid Green Animated) */}
          <line x1="22" y1={yBest1} x2="182" y2={yBest2} stroke="#059669" strokeWidth="2" strokeLinecap="round" />

          {/* 4 Plotted Data Points with Error Caps */}
          {[
            { x: 45, y: 34 },
            { x: 85, y: 25 },
            { x: 125, y: 18 },
            { x: 165, y: 10 }
          ].map((pt, i) => (
            <g key={i}>
              {/* Vertical Error Bar */}
              <line x1={pt.x} y1={pt.y - 3.5} x2={pt.x} y2={pt.y + 3.5} stroke="#0f4a9b" strokeWidth="1.2" />
              <line x1={pt.x - 2} y1={pt.y - 3.5} x2={pt.x + 2} y2={pt.y - 3.5} stroke="#0f4a9b" strokeWidth="1" />
              <line x1={pt.x - 2} y1={pt.y + 3.5} x2={pt.x + 2} y2={pt.y + 3.5} stroke="#0f4a9b" strokeWidth="1" />
              {/* Center Dot */}
              <circle cx={pt.x} cy={pt.y} r="1.8" fill="#d97706" />
            </g>
          ))}
        </svg>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-[8.5px] font-mono text-slate-600 font-medium pt-0.5">
        <span className="text-emerald-800 font-bold">m: 4.02</span>
        <span className="text-amber-700 font-bold">max: 4.20</span>
        <span className="text-sky-700 font-bold">min: 3.84</span>
      </div>
    </div>
  );
}

// ── 4. WIDGET 4: DIAGNOSTIC SYSTEMATIC VS RANDOM ERROR CALIBRATOR ──
function EvaluationAuditorWidget() {
  const [needleAngle, setNeedleAngle] = useState(0);

  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.035;
      setNeedleAngle(Math.sin(t) * 22);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="w-full bg-slate-50/90 rounded-xl p-2.5 border border-slate-200/90 shadow-2xs select-none mb-3.5 space-y-2">
      {/* Top Header */}
      <div className="flex items-center justify-between text-[10px] font-mono text-purple-900 font-bold">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-purple-700" />
          METHOD AUDITOR
        </span>
        <span className="text-[9px] text-purple-800 font-bold bg-purple-100 px-1.5 py-0.5 rounded border border-purple-200">
          PASSED ✓
        </span>
      </div>

      {/* Dual Calibration Gauge */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-2xs p-2 flex items-center justify-between">
        {/* Systematic Error Dial */}
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full border border-purple-300 bg-purple-50 flex items-center justify-center shadow-2xs shrink-0">
            {/* Rotating Meter Needle */}
            <div
              className="w-0.5 h-3.5 bg-gradient-to-t from-purple-700 to-indigo-600 rounded-full origin-bottom"
              style={{ transform: `rotate(${needleAngle}deg)` }}
            />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-[#0a1f3d] shadow-xs" />
          </div>
          <div>
            <div className="text-[8.5px] font-mono text-slate-500 font-medium">SYSTEMATIC:</div>
            <div className="text-[10px] font-mono font-bold text-amber-700">0.00% Zero-Err</div>
          </div>
        </div>

        {/* Random Error Spread */}
        <div className="text-right">
          <div className="text-[8.5px] font-mono text-slate-500 font-medium">RANDOM ERR:</div>
          <div className="text-[10px] font-mono font-bold text-emerald-700">5 Repeats Avg</div>
        </div>
      </div>

      {/* Verification Footer */}
      <div className="flex items-center justify-between text-[8.5px] font-mono text-slate-600 pt-0.5">
        <span className="text-purple-800 font-semibold">Realistic Improvements: ✓</span>
        <span className="text-emerald-700 font-bold">Verified</span>
      </div>
    </div>
  );
}

export function InteractiveLabCriteriaCards() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const criteriaData = [
    {
      title: 'Variables & RQ Design',
      desc: 'Formulating testable research questions with clearly controlled, independent, and dependent physical parameters for Criterion B.',
      Widget: VariableScopeWidget,
      accentGlow: 'hover:shadow-blue-500/10'
    },
    {
      title: 'Data & Uncertainties',
      desc: 'Propagating absolute, fractional, and percentage uncertainties across calculated data using strict significant figure rules.',
      Widget: UncertaintyEngineWidget,
      accentGlow: 'hover:shadow-amber-500/10'
    },
    {
      title: 'Gradient & Error Bars',
      desc: 'Constructing error envelopes, best-fit regressions, and minimum/maximum slope lines to determine true physical constants.',
      Widget: GradientPlotterWidget,
      accentGlow: 'hover:shadow-emerald-500/10'
    },
    {
      title: 'Method & Evaluation',
      desc: 'Isolating systematic calibration shifts from random scatter while detailing realistic, high-impact procedural upgrades.',
      Widget: EvaluationAuditorWidget,
      accentGlow: 'hover:shadow-purple-500/10'
    }
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    if (offsetWidth > 0) {
      const newIndex = Math.round(scrollLeft / (offsetWidth * 0.82));
      setActiveSlide(Math.min(Math.max(newIndex, 0), criteriaData.length - 1));
    }
  };

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-3 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 touch-pan-x items-stretch"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {criteriaData.map((card, i) => {
          const WidgetComp = card.Widget;
          return (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`w-[82vw] max-w-[310px] shrink-0 snap-center sm:w-auto sm:max-w-none group rounded-2xl p-4 text-left relative overflow-hidden bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg ${card.accentGlow} hover:border-[#0f4a9b]/35 transition-all duration-300 flex flex-col justify-between h-full`}
            >
              <div>
                {/* Live Animated Laboratory Experiment Simulation */}
                <WidgetComp />

                {/* Title & Description */}
                <h3 className="text-[13.5px] sm:text-[14px] font-extrabold text-[#0a1f3d] mb-1.5 leading-tight group-hover:text-[#0f4a9b] transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-normal text-left">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Footer */}
              <div className="mt-3.5 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10.5px] font-bold text-[#0f4a9b]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A24A]" />
                <span>IB Criteria Standard</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Pagination Indicator Dots */}
      <div className="flex sm:hidden justify-center items-center gap-1.5 mt-2.5">
        {criteriaData.map((_, dotIdx) => (
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
  );
}
