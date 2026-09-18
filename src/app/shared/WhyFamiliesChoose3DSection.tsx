import React, { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { GradientHeadingText } from './GradientHeadingText';

/* ── 3D HOLOGRAPHIC USTAAD LOGO CENTERPIECE ── */
function Ustaad3DCenterpiece({ hoveredCard }: { hoveredCard: number | null }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 180, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[100px] sm:max-w-[140px] md:max-w-[170px] lg:max-w-[190px] aspect-square mx-auto flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      {/* Ambient Radiant Glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0f4a9b]/20 via-sky-400/15 to-[#C7A24A]/25 rounded-full blur-xl sm:blur-2xl scale-95 animate-pulse pointer-events-none" />
      <div 
        className={`absolute inset-2 sm:inset-3 rounded-full blur-lg sm:blur-xl transition-all duration-700 pointer-events-none ${
          hoveredCard !== null 
            ? 'bg-gradient-to-r from-[#0f4a9b]/35 to-[#C7A24A]/35 scale-110 opacity-100' 
            : 'bg-blue-500/15 scale-90 opacity-60'
        }`} 
      />

      {/* 3D Container with Parallax Physics */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Outer Orbiting Golden Gyro Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          className="absolute inset-1 sm:inset-2 rounded-full border border-dashed border-[#C7A24A]/40 pointer-events-none"
          style={{ transform: 'translateZ(-15px)' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#C7A24A] shadow-[0_0_8px_#C7A24A]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]" />
        </motion.div>

        {/* Counter-rotating Inner Sapphire Gyro Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
          className="absolute inset-3 sm:inset-5 rounded-full border border-[#0f4a9b]/30 pointer-events-none"
          style={{ transform: 'translateZ(-8px)' }}
        >
          <div className="absolute top-1/2 -left-0.5 -translate-y-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#C7A24A]" />
          <div className="absolute top-1/2 -right-0.5 -translate-y-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#0f4a9b]" />
        </motion.div>

        {/* Official 3D Ustaad Emblem */}
        <motion.div
          animate={{
            y: [-4, 4, -4],
            rotateZ: [-1, 1, -1],
            scale: hoveredCard !== null ? 1.05 : 1,
          }}
          transition={{
            repeat: Infinity,
            duration: 4.5,
            ease: 'easeInOut',
          }}
          className="relative w-[85%] h-[85%] flex flex-col items-center justify-center"
          style={{ transform: 'translateZ(30px)' }}
        >
          {/* Subtle Ambient Radial Light behind Logo */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/15 via-[#C7A24A]/15 to-transparent rounded-full blur-md sm:blur-lg pointer-events-none" />

          {/* Official 3D Ustaad Logo Image (Normal Balanced Scale) */}
          <motion.img
            src="/ustaad-emblem-3d.png"
            alt="Ustaad Official 3D Logo"
            className="w-full h-auto max-h-[80px] sm:max-h-[110px] md:max-h-[135px] lg:max-h-[150px] object-contain drop-shadow-[0_8px_16px_rgba(15,74,155,0.22)] relative z-10 filter"
            animate={{
              filter: hoveredCard !== null 
                ? [
                    'drop-shadow(0 8px 18px rgba(15,74,155,0.35)) brightness(1.04)',
                    'drop-shadow(0 12px 24px rgba(199,162,74,0.38)) brightness(1.08)',
                    'drop-shadow(0 8px 18px rgba(15,74,155,0.35)) brightness(1.04)'
                  ]
                : 'drop-shadow(0 8px 16px rgba(15,74,155,0.22)) brightness(1)',
            }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />

          {/* Floor Reflection Depth Shadow */}
          <div className="w-12 sm:w-20 h-1.5 sm:h-2 bg-[#0a1f3d]/20 rounded-full blur-xs sm:blur-sm -mt-1 pointer-events-none" />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── SLEEK CHAMFERED REASON CARD ── */
interface ChamferedReasonCardProps {
  index: number;
  title: string;
  desc: string;
  side: 'left' | 'right';
  isHovered: boolean;
  onHover: (idx: number | null) => void;
}

function ChamferedReasonCard({
  index,
  title,
  desc,
  side,
  isHovered,
  onHover,
}: ChamferedReasonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -12 : 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-10px' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="relative group select-none"
    >
      {/* Interactive Chamfered Container matching reference design */}
      <div
        className={`relative px-2.5 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3.5 transition-all duration-300 rounded-lg sm:rounded-xl bg-white/95 backdrop-blur-md border text-left ${
          isHovered
            ? 'border-[#0f4a9b]/50 shadow-[0_8px_20px_rgba(15,74,155,0.12)] -translate-y-0.5'
            : 'border-slate-200/90 shadow-[0_2px_8px_rgba(15,74,155,0.03)] hover:border-slate-300'
        }`}
        style={{
          clipPath:
            side === 'left'
              ? 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)'
              : 'polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px)',
        }}
      >
        {/* Top Metallic Gold Accent Border */}
        <div
          className={`absolute top-0 h-0.5 sm:h-1 bg-gradient-to-r ${
            side === 'left'
              ? 'from-transparent via-[#0f4a9b] to-[#C7A24A] right-0 left-2 sm:left-6'
              : 'from-[#C7A24A] via-[#0f4a9b] to-transparent left-0 right-2 sm:right-6'
          } ${isHovered ? 'h-1 sm:h-1.5' : 'h-0.5 sm:h-1'} transition-all duration-300`}
        />

        {/* Ambient Corner Glow on Hover */}
        <div
          className={`absolute w-12 sm:w-20 h-12 sm:h-20 rounded-full blur-lg sm:blur-xl transition-opacity duration-300 pointer-events-none ${
            side === 'left' ? 'top-0 right-0' : 'top-0 left-0'
          } ${isHovered ? 'bg-[#C7A24A]/15 opacity-100' : 'opacity-0'}`}
        />

        {/* Card Title */}
        <h3
          className={`text-[10px] sm:text-[12px] md:text-[13.5px] lg:text-[14.5px] font-extrabold text-[#0a1f3d] mb-0.5 sm:mb-1 leading-tight sm:leading-snug transition-colors duration-200 ${
            isHovered ? 'text-[#0f4a9b]' : ''
          }`}
        >
          {title}
        </h3>

        {/* Card Description */}
        <p className="text-gray-500 text-[8.5px] sm:text-[10.5px] md:text-[11.5px] lg:text-[12px] leading-tight sm:leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ── MAIN UNIFIED SECTION COMPONENT ── */
export interface WhyFamiliesChoose3DSectionProps {
  location?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  leftCards?: Array<{ title: string; desc: string }>;
  rightCards?: Array<{ title: string; desc: string }>;
}

export function WhyFamiliesChoose3DSection({
  location = 'Dubai',
  badge,
  title = `Why ${location} families choose Ustaad`,
  subtitle = 'Curriculum-specialist 1-to-1 tutoring engineered for grade jumps, complete clarity, and stress-free routines.',
  leftCards: customLeftCards,
  rightCards: customRightCards,
}: WhyFamiliesChoose3DSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Left 3 Cards Data (No numbers, no icons)
  const leftCards = customLeftCards || [
    {
      title: 'Specialist tutors, carefully vetted',
      desc: 'Top 5% subject specialists interviewed for how they teach, and rigorous reference verification.',
    },
    {
      title: `Tutors who know ${location} schools`,
      desc: "They teach directly to your child's exact school syllabus, exam board, and assessment schedule.",
    },
    {
      title: 'The same tutor every week',
      desc: 'One consistent, dedicated subject mentor. Never a rotating pool or substitute teacher.',
    },
  ];

  // Right 3 Cards Data (No numbers, no icons)
  const rightCards = customRightCards || [
    {
      title: 'Explained until it clicks',
      desc: 'Complex past-paper methods and tricky concepts broken down simply until genuine confidence is locked in.',
    },
    {
      title: 'Parents kept in the loop',
      desc: 'A short, honest progress note every two weeks detailing syllabus mastery, exam pacing, and next steps.',
    },
    {
      title: 'Built around your week',
      desc: 'Evening, weekend and Ramadan slots with simple rescheduling when your family travels.',
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-200/80">

      {/* Ambient Top & Center Lighting Halos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-gradient-to-b from-[#0f4a9b]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Compact Header Block matching reference design */}
        <div className="text-center mb-5 sm:mb-8 max-w-2xl mx-auto px-2">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-xs font-bold mb-2">
              {badge}
            </div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-1.5 sm:mb-2 tracking-tight"
          >
            <GradientHeadingText text={title} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-gray-600 text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* ── 3D CENTERPIECE SHOWCASE GRID (3-Column Layout on Mobile & Desktop) ── */}
        <div className="grid grid-cols-12 gap-1.5 sm:gap-3 lg:gap-5 items-center">
          {/* LEFT 3 CHAMFERED CARDS */}
          <div className="col-span-4 flex flex-col gap-1.5 sm:gap-2.5 lg:gap-3">
            {leftCards.map((card, idx) => (
              <ChamferedReasonCard
                key={idx}
                index={idx}
                title={card.title}
                desc={card.desc}
                side="left"
                isHovered={hoveredCard === idx}
                onHover={setHoveredCard}
              />
            ))}
          </div>

          {/* CENTER OFFICIAL 3D USTAAD LOGO */}
          <div className="col-span-4 flex items-center justify-center py-0 sm:py-1">
            <Ustaad3DCenterpiece hoveredCard={hoveredCard} />
          </div>

          {/* RIGHT 3 CHAMFERED CARDS */}
          <div className="col-span-4 flex flex-col gap-1.5 sm:gap-2.5 lg:gap-3">
            {rightCards.map((card, idx) => {
              const cardIndex = idx + 3;
              return (
                <ChamferedReasonCard
                  key={cardIndex}
                  index={cardIndex}
                  title={card.title}
                  desc={card.desc}
                  side="right"
                  isHovered={hoveredCard === cardIndex}
                  onHover={setHoveredCard}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
