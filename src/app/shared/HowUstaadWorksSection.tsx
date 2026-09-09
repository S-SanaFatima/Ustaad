import React from 'react';
import { motion } from 'motion/react';
import { Search, ClipboardCheck, TrendingUp } from 'lucide-react';
import { GradientHeadingText } from './GradientHeadingText';

const STEPS = [
  {
    step: "Step 1",
    title: "Understand the Gap",
    desc: "Our tutors identify where the student is struggling and what's causing it.",
    icon: Search
  },
  {
    step: "Step 2",
    title: "Learn with Purpose",
    desc: "Tutors design lessons around the student's pace and curriculum.",
    icon: ClipboardCheck
  },
  {
    step: "Step 3",
    title: "Consistent Progress",
    desc: "Students usually advance once things start making more sense.",
    icon: TrendingUp
  }
];

export function HowUstaadWorksSection() {
  return (
    <section id="how" className="py-8 sm:py-20 bg-[#F4F8FD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-1.5 sm:mb-4"
          >
            <GradientHeadingText text="How Ustaad Works" />
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-xs sm:text-base lg:text-lg"
          >
            A simple process that helps students study with more direction.
          </motion.p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-3 gap-2 sm:gap-10 lg:gap-16 relative max-w-5xl mx-auto">
          
          {/* Animated Connecting Line */}
          <div className="block absolute top-6 sm:top-10 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0 overflow-hidden">
             <motion.div 
               className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent"
               initial={{ x: "-100%" }}
               whileInView={{ x: "200%" }}
               viewport={{ once: false }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               style={{ width: '50%' }}
             />
          </div>
          
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Circular Icon Container with smooth hover */}
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mb-2 sm:mb-5 shadow-[0_0_0_2px_white,0_4px_12px_rgba(15,74,155,0.08)] sm:shadow-[0_0_0_4px_white,0_8px_20px_rgba(15,74,155,0.08)] group-hover:shadow-[0_0_0_4px_#0f4a9b,0_12px_25px_rgba(15,74,155,0.15)] group-hover:-translate-y-1 sm:group-hover:-translate-y-2 transition-all duration-300">
                  <Icon className="h-5 w-5 sm:h-9 sm:w-9 text-[#0f4a9b] group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                </div>
                
                {/* Step Label */}
                <span className="text-[#C7A24A] font-bold text-[9px] sm:text-sm mb-1 sm:mb-2 tracking-wider sm:tracking-widest uppercase">{step.step}</span>
                
                {/* Title */}
                <h3 className="text-xs sm:text-xl font-extrabold text-[#1F3F66] mb-1 sm:mb-3 group-hover:text-[#0f4a9b] transition-colors leading-tight">{step.title}</h3>
                
                {/* Description */}
                <p className="text-[#6B7280] text-[10px] sm:text-sm leading-tight sm:leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
