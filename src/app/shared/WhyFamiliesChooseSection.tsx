import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Crosshair, UserPlus, BarChart3, FileStack, Target, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { GradientHeadingText } from './GradientHeadingText';

const REASONS = [
  { title: "Focus from the Start", desc: "We understand what needs attention and how to improve it right from the very first session.", icon: Crosshair },
  { title: "Carefully Matched", desc: "Tutors are selected based on the student's specific learning needs and curriculum.", icon: UserPlus },
  { title: "Stronger Habits", desc: "Students make progress through lessons designed to develop academic habits over time.", icon: BarChart3 },
  { title: "Past Paper Practice", desc: "Consistent exam practice sessions help students dramatically improve accuracy and timing.", icon: FileStack },
  { title: "Focused Exam Prep", desc: "Revision sessions are strategically planned before exams to refresh weak topics.", icon: Target },
  { title: "Flexible Schedule", desc: "Lessons are scheduled in a way that fits the student's busy routine.", icon: Clock }
];

export function WhyFamiliesChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => prev + 1);
  const prevSlide = () => setActiveIndex((prev) => prev - 1);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // 360 degrees / 6 items = 60 degrees per panel
  const angle = 60;

  return (
    <section id="why" className="py-12 md:py-16 bg-[#F4F8FD] relative overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-xs font-bold text-[#C7A24A] tracking-widest uppercase mb-3">The Ustaad Difference</p>
          <h2 className="text-2xl lg:text-4xl font-black text-[#0a1f3d] mb-3">
            Why Families Choose <span className="text-[#0f4a9b]">Ustaad</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Swipe or use the arrows to explore our carousel.
          </p>
        </div>

        {/* 2.5D Carousel Container */}
        <div className="relative h-[340px] md:h-[420px] w-full max-w-5xl mx-auto flex items-center justify-center overflow-hidden">
          
          <div className="relative w-full h-full flex items-center justify-center">
            {REASONS.map((item, i) => {
              const Icon = item.icon;
              
              // Calculate wrapping distance from active index (-2, -1, 0, 1, 2, 3)
              let diff = (i - (activeIndex % 6)) % 6;
              if (diff < -3) diff += 6;
              if (diff > 2) diff -= 6;
              if (activeIndex % 6 < 0) {
                 // Handle negative activeIndex mathematically correctly
                 diff = (i - ((activeIndex % 6) + 6) % 6) % 6;
                 if (diff < -3) diff += 6;
                 if (diff > 2) diff -= 6;
              }

              const isCenter = diff === 0;
              const isVisible = Math.abs(diff) <= 2;

              const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

              return (
                <motion.div
                  key={i}
                  className="absolute w-[240px] sm:w-[280px] md:w-[320px] h-[300px] sm:h-[340px] md:h-[380px] bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex flex-col items-center text-center justify-center select-none"
                  initial={false}
                  animate={{
                    x: diff * (isMobile ? 160 : 240), // Distance between cards
                    scale: isCenter ? 1 : 0.8, // Side cards are smaller
                    opacity: isCenter ? 1 : (Math.abs(diff) === 1 ? 0.6 : 0), // Fade side cards
                    zIndex: 20 - Math.abs(diff)
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  style={{ pointerEvents: isCenter ? 'auto' : 'none' }}
                >
                  {/* Glowing Icon Badge */}
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-4 md:mb-5 shadow-[0_8px_20px_rgba(15,74,155,0.25)]">
                    <Icon className="h-7 w-7 md:h-8 md:w-8 text-white" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-extrabold text-[#0a1f3d] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Invisible Drag Overlay for swiping */}
          <motion.div
            drag="x"
            dragSnapToOrigin
            onDragEnd={(e, { offset }) => {
              const swipe = offset.x;
              if (swipe < -30) nextSlide();
              else if (swipe > 30) prevSlide();
            }}
            className="absolute inset-0 z-20 touch-pan-y cursor-grab active:cursor-grabbing"
          />

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:px-4 md:px-8 pointer-events-none z-30">
            <button 
              onClick={prevSlide}
              className="w-11 h-11 md:w-12 md:h-12 bg-white hover:bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-[#0f4a9b] transition-all pointer-events-auto hover:scale-110 shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
              aria-label="Previous reason"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-11 h-11 md:w-12 md:h-12 bg-white hover:bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-[#0f4a9b] transition-all pointer-events-auto hover:scale-110 shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
              aria-label="Next reason"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-1.5 md:gap-2 mt-8 md:mt-10">
          {REASONS.map((_, i) => {
             const normalizedActive = ((activeIndex % 6) + 6) % 6;
             const isActive = normalizedActive === i;
             return (
               <button
                 key={i}
                 onClick={() => {
                   const diff = i - normalizedActive;
                   let jump = diff;
                   if (diff > 3) jump -= 6;
                   if (diff < -3) jump += 6;
                   setActiveIndex(activeIndex + jump);
                 }}
                 className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${isActive ? 'w-8 md:w-10 bg-[#C7A24A]' : 'w-2 md:w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                 aria-label={`Go to reason ${i + 1}`}
               />
             )
          })}
        </div>

      </div>
    </section>
  )
}
