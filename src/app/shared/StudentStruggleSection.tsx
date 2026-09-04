import React from 'react';
import { motion } from 'motion/react';
import { Brain, EyeOff, AlertTriangle } from 'lucide-react';
import { GradientHeadingText } from './GradientHeadingText';

/* ── 1. Circular Neural Ring Gauge (Confusion) — Automatic continuous motion ── */
function NeuralDial() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center my-2 select-none">
      {/* Outer Dial Calibration Ring */}
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="6"
          strokeDasharray="4 6"
        />
        {/* Animated calibration progress arc (oscillates automatically on loop) */}
        <motion.circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#0f4a9b"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="314"
          animate={{
            strokeDashoffset: [210, 110, 190, 80, 210],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* Rotating Synapse Ring */}
      <motion.div
        className="absolute inset-2 rounded-full border border-dashed border-[#0f4a9b]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      {/* Orbiting Satellite Node */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#0f4a9b] shadow-[0_0_8px_#0f4a9b] translate-x-[42px]" />
      </motion.div>

      {/* Center Brain Icon Stage */}
      <div className="absolute w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-[0_8px_20px_rgba(15,74,155,0.22)]">
        <Brain className="w-7 h-7 text-white" strokeWidth={2.2} />
      </div>

      {/* Live Readout Badge */}
      <div className="absolute -bottom-2.5 bg-white border border-[#0f4a9b]/25 px-2.5 py-0.5 rounded-full shadow-sm">
        <span className="text-[9px] font-black text-[#0f4a9b] tracking-wider uppercase">
          CALIBRATING
        </span>
      </div>
    </div>
  );
}

/* ── 2. Radar Scanner Sweep Dial (Unfocused Revision) — Automatic continuous motion ── */
function RadarDial() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center my-2 select-none">
      {/* Concentric Radar Target Grid */}
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <circle cx="60" cy="60" r="50" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="35" fill="none" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="60" cy="60" r="20" fill="none" stroke="#e2e8f0" strokeWidth="1" />
        {/* Crosshairs */}
        <line x1="60" y1="10" x2="60" y2="110" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="10" y1="60" x2="110" y2="60" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 4" />
      </svg>

      {/* Rotating Radar Sweep Cone (runs automatically continuously) */}
      <motion.div
        className="absolute inset-1 rounded-full pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(193, 123, 47, 0.35) 360deg)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
      />

      {/* Detected Blindspot Blips (pulsing automatically) */}
      <motion.div
        className="absolute top-6 right-7 w-2 h-2 rounded-full bg-[#c17b2f] shadow-[0_0_8px_#c17b2f]"
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-7 left-7 w-1.5 h-1.5 rounded-full bg-[#c17b2f]/70"
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Center Radar Icon Stage */}
      <div className="absolute w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c17b2f] to-[#8c5418] flex items-center justify-center shadow-[0_8px_20px_rgba(193,123,47,0.22)]">
        <EyeOff className="w-7 h-7 text-white" strokeWidth={2.2} />
      </div>

      {/* Live Readout Badge */}
      <div className="absolute -bottom-2.5 bg-white border border-[#c17b2f]/30 px-2.5 py-0.5 rounded-full shadow-sm">
        <span className="text-[9px] font-black text-[#c17b2f] tracking-wider uppercase">
          SCANNING
        </span>
      </div>
    </div>
  );
}

/* ── 3. Precision Tension Gauge Dial (Academic Pressure) — Needle automatically moves ── */
function PressureGauge() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center my-2 select-none">
      {/* Semi-circular Speedometer/Manometer Arc */}
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Background Arc */}
        <path
          d="M 22 88 A 46 46 0 1 1 98 88"
          fill="none"
          stroke="#f1f5f9"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Active Tension Arc */}
        <path
          d="M 22 88 A 46 46 0 1 1 98 88"
          fill="none"
          stroke="url(#pressureGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="210"
          strokeDashoffset="35"
        />
        <defs>
          <linearGradient id="pressureGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f4a9b" />
            <stop offset="65%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>

        {/* Calibration Ticks */}
        {[0, 30, 60, 90, 120, 150, 180, 210].map((deg) => (
          <line
            key={deg}
            x1="60"
            y1="16"
            x2="60"
            y2="21"
            stroke="#94a3b8"
            strokeWidth="1.5"
            transform={`rotate(${deg - 105} 60 60)`}
          />
        ))}
      </svg>

      {/* Animated Gauge Needle — Automatically moves back and forth in continuous loop for mobile & desktop */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
        animate={{
          rotate: [46, -38, 12, -45, 46],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-1.5 h-9 bg-gradient-to-t from-transparent via-[#dc2626] to-[#dc2626] rounded-full -translate-y-7 shadow-sm" />
      </motion.div>

      {/* Center Icon Stage */}
      <div className="absolute w-14 h-14 rounded-2xl bg-gradient-to-br from-[#dc2626] to-[#991b1b] flex items-center justify-center shadow-[0_8px_20px_rgba(220,38,38,0.22)]">
        <AlertTriangle className="w-7 h-7 text-white" strokeWidth={2.2} />
      </div>

      {/* Live Readout Badge */}
      <div className="absolute -bottom-2.5 bg-white border border-[#dc2626]/30 px-2.5 py-0.5 rounded-full shadow-sm">
        <span className="text-[9px] font-black text-[#dc2626] tracking-wider uppercase">
          LOAD: ACTIVE
        </span>
      </div>
    </div>
  );
}

/* ── Fixed Card Component (No movement/tilt on hover, completely stable) ── */
const STRUGGLES_DATA = [
  {
    dial: NeuralDial,
    accentColor: '#0f4a9b',
    title: 'Confusion',
    desc: 'They follow lessons in class, but struggle to apply concepts independently.',
  },
  {
    dial: RadarDial,
    accentColor: '#c17b2f',
    title: 'Unfocused Revision',
    desc: 'They study for hours without knowing which topics need more attention.',
  },
  {
    dial: PressureGauge,
    accentColor: '#dc2626',
    title: 'Academic Pressure',
    desc: 'After repeated academic pressure and setbacks, the subject starts feeling heavier.',
  },
] as const;

function DashboardInstrumentCard({ item, index }: { item: typeof STRUGGLES_DATA[number], index: number }) {
  const DialComponent = item.dial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.14, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center w-full isolate"
    >
      {/* Stationary card with smooth hover lift and font transitions */}
      <div className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[315px] select-none group cursor-pointer">
        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-[0_8px_24px_rgba(15,74,155,0.06)] group-hover:shadow-[0_18px_40px_rgba(15,74,155,0.12)] group-hover:-translate-y-1.5 group-hover:border-[#0f4a9b]/30 transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
          {/* Subtle Top Accent Indicator Bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all duration-300"
            style={{ backgroundColor: item.accentColor }}
          />

          {/* Automatic Animated Diagnostic Dial with subtle hover scale */}
          <div className="group-hover:scale-105 transition-transform duration-300">
            <DialComponent />
          </div>

          {/* Title with font hover color transition */}
          <h3 className="text-lg sm:text-xl font-black text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200 mt-4 mb-2 tracking-tight">
            {item.title}
          </h3>

          {/* Exact Description */}
          <p className="text-gray-600 group-hover:text-gray-700 text-xs sm:text-[13px] leading-relaxed transition-colors duration-200">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function StudentStruggleSection() {
  return (
    <section className="py-14 lg:py-20 bg-[#F4F8FD] relative overflow-hidden isolate">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3">
            <GradientHeadingText text="Why Students Struggle" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Many students work hard, but still feel unsure where things are going wrong.
          </p>
        </div>

        {/* 3D Dashboard Dials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {STRUGGLES_DATA.map((item, i) => (
            <DashboardInstrumentCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
