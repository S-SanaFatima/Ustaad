import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, CheckCircle2 } from 'lucide-react';

const DUBAI_AREAS = [
  'Downtown Dubai',
  'Business Bay',
  'JBR',
  'Emirates Hills',
  'Arabian Ranches',
  'The Meadows',
  'The Springs',
  'Motor City',
  'Sports City',
];

export function DubaiAreasInteractiveCard() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-scanning radar sequence every 2.4s (pauses when user hovers a specific card)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % DUBAI_AREAS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="relative rounded-3xl bg-white border border-[#0f4a9b]/15 p-4 sm:p-6 lg:p-7 shadow-[0_12px_36px_rgba(15,74,155,0.07)] overflow-hidden select-none"
    >
      {/* ── BACKGROUND RADAR RINGS & SWEEPING BEAM ── */}
      <div className="absolute -right-16 -bottom-16 w-80 h-80 pointer-events-none opacity-[0.07] text-[#0f4a9b]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="1" />

          {/* Sweeping Radar Scanner Needle */}
          <motion.line
            x1="100"
            y1="100"
            x2="100"
            y2="10"
            stroke="#0f4a9b"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            style={{ originX: '100px', originY: '100px' }}
          />
        </svg>
      </div>

      {/* Subtle sweeping ambient sheen */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(115deg, transparent 35%, rgba(15,74,155,0.03) 48%, rgba(199,162,74,0.06) 50%, rgba(15,74,155,0.03) 52%, transparent 65%)',
          backgroundSize: '250% 100%',
        }}
        animate={{
          backgroundPosition: ['-100% 0%', '200% 0%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'easeInOut',
        }}
      />

      {/* ── HEADER ── */}
      <div className="relative z-10 flex items-center justify-between mb-4 sm:mb-5 pb-3 sm:pb-3.5 border-b border-gray-100 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <p className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0a1f3d] whitespace-nowrap">
            Areas we cover
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[10px] sm:text-[11px] font-black uppercase tracking-wider whitespace-nowrap shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] animate-pulse shrink-0" />
          <span>Live Across Dubai</span>
        </div>
      </div>

      {/* ── 9 INTERACTIVE COMMUNITY RADAR BEACONS ── */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 lg:gap-3 py-0.5">
        {DUBAI_AREAS.map((area, idx) => {
          const isActive = activeIdx === idx;
          const isLastOnMobile = idx === DUBAI_AREAS.length - 1;

          return (
            <motion.div
              key={area}
              onMouseEnter={() => {
                setIsHovered(true);
                setActiveIdx(idx);
              }}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                y: isActive ? -1 : 0,
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2.5 rounded-xl text-[11px] sm:text-[12px] md:text-[12.5px] font-bold transition-all duration-300 cursor-pointer border ${
                isLastOnMobile ? 'col-span-2 sm:col-span-1 justify-center sm:justify-start' : ''
              } ${
                isActive
                  ? 'bg-white text-[#0f4a9b] border-[#0f4a9b]/40 shadow-[0_4px_16px_rgba(15,74,155,0.12)] ring-1 ring-[#0f4a9b]/20'
                  : 'bg-slate-50/75 text-[#0a1f3d] border-slate-200/80 hover:bg-white hover:text-[#0f4a9b] hover:border-[#0f4a9b]/25 shadow-2xs'
              }`}
            >
              {/* Active Radar Ping Node */}
              <div className="relative flex items-center justify-center shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4">
                {isActive && (
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#C7A24A] opacity-75" />
                )}
                <MapPin
                  className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-colors ${
                    isActive ? 'text-[#C7A24A]' : 'text-[#0f4a9b]'
                  }`}
                />
              </div>

              {/* Area Name — Always complete without truncation */}
              <span className="whitespace-nowrap leading-none tracking-tight">
                {area}
              </span>

              {/* Active Gold Indicator Dot — Pre-allocated to guarantee steady text alignment */}
              <span
                className={`ml-auto w-1.5 h-1.5 rounded-full bg-[#C7A24A] shrink-0 transition-opacity duration-300 ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* ── BOTTOM VERIFICATION NOTE ── */}
      <div className="relative z-10 mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-xs text-gray-500">
        <span className="flex items-center gap-2 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" />
          <span>Available in all Dubai communities &amp; across the UAE</span>
        </span>
      </div>
    </motion.div>
  );
}

export default DubaiAreasInteractiveCard;
