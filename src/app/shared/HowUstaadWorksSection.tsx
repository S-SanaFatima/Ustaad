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
    <section id="how" className="py-20 bg-[#F4F8FD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4"
          >
            <GradientHeadingText text="How Ustaad Works" />
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-base lg:text-lg"
          >
            A simple process that helps students study with more direction.
          </motion.p>
        </div>

        {/* Steps Container (Original Layout) */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 relative max-w-5xl mx-auto">
          
          {/* Animated Connecting Line */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0 overflow-hidden">
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
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-5 shadow-[0_0_0_4px_white,0_8px_20px_rgba(15,74,155,0.08)] group-hover:shadow-[0_0_0_4px_#0f4a9b,0_12px_25px_rgba(15,74,155,0.15)] group-hover:-translate-y-2 transition-all duration-300">
                  <Icon className="h-9 w-9 text-[#0f4a9b] group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                </div>
                
                {/* Step Label */}
                <span className="text-[#C7A24A] font-bold text-sm mb-2 tracking-widest uppercase">{step.step}</span>
                
                {/* Title */}
                <h3 className="text-xl font-extrabold text-[#1F3F66] mb-3 group-hover:text-[#0f4a9b] transition-colors">{step.title}</h3>
                
                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
