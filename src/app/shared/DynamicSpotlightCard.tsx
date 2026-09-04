import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

export type HelpCardIconType = 'lightbulb' | 'practice' | 'growth';

function iconHoverMotion(type: HelpCardIconType | undefined, isHovered: boolean) {
  if (!isHovered) {
    return { scale: 1, y: 0, rotate: 0, filter: 'drop-shadow(0 0 0 rgba(199,162,74,0))' };
  }
  switch (type) {
    case 'lightbulb':
      return { scale: 1.1, y: 0, rotate: 0, filter: 'drop-shadow(0 0 10px rgba(199,162,74,0.55))' };
    case 'practice':
      return { scale: 1.08, y: -4, rotate: -2, filter: 'drop-shadow(0 0 0 rgba(199,162,74,0))' };
    case 'growth':
      return { scale: 1.08, y: -5, rotate: 0, filter: 'drop-shadow(0 0 0 rgba(199,162,74,0))' };
    default:
      return { scale: 1.15, y: -3, rotate: 0, filter: 'drop-shadow(0 0 0 rgba(199,162,74,0))' };
  }
}

export function DynamicSpotlightCard({
  icon,
  title,
  desc,
  iconType,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  iconType?: HelpCardIconType;
}) {
  const reduceMotion = useReducedMotion();
  const boundingRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // For 3D Tilt
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !boundingRef.current) return;
    const rect = boundingRef.current.getBoundingClientRect();
    
    // Spotlight position
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });

    // Tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Values between -1 and 1
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;
    
    // Max tilt is 8 degrees
    setRotateX(percentY * -8); 
    setRotateY(percentX * 8);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="w-full relative h-full">
      <motion.div
        ref={boundingRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          scale: isHovered && !reduceMotion ? 1.02 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
          mass: 0.8
        }}
        className="relative w-full h-full bg-white rounded-[24px] border border-[#E5E7EB] p-7 flex flex-col items-start text-left shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 overflow-hidden"
        style={{
          boxShadow: isHovered ? '0 20px 50px rgba(15,74,155,0.15)' : '0 4px 20px rgba(0,0,0,0.05)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Spotlight Background Glow */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                background: `radial-gradient(circle 280px at ${mousePosition.x}px ${mousePosition.y}px, rgba(199,162,74,0.12), transparent 80%)`
              }}
            />
          )}
        </AnimatePresence>
        
        {/* Border Spotlight Ring (Inner Glow) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none absolute inset-0 z-10 rounded-[24px]"
              style={{
                maskImage: `radial-gradient(circle 220px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 100%)`,
                WebkitMaskImage: `radial-gradient(circle 220px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 100%)`,
                boxShadow: 'inset 0 0 0 2px #C7A24A'
              }}
            />
          )}
        </AnimatePresence>

        <div 
          className="relative z-20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
          style={{ backgroundColor: isHovered ? 'rgba(15,74,155,0.08)' : '#E2E8F0' }}
        >
          <motion.div
            animate={iconHoverMotion(iconType, isHovered)}
            transition={{ type: 'spring', damping: 15, stiffness: iconType === 'practice' ? 280 : 320 }}
          >
            {icon}
          </motion.div>
        </div>
        
        <h3 
          className="relative z-20 text-[22px] font-extrabold mb-3 transition-colors duration-300"
          style={{ color: isHovered ? '#0a1f3d' : '#1F3F66' }}
        >
          {title}
        </h3>
        
        <p className="relative z-20 text-[#6B7280] text-[15px] leading-relaxed font-medium">
          {desc}
        </p>
      </motion.div>
    </div>
  );
}
