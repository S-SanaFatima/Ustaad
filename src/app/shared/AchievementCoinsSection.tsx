import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gauge, Timer, Award, BookMarked, TrendingUp } from 'lucide-react';

const RESULTS = [
  { val: "Grade Improvement", title: "A progressive approach that helps students improve step by step.", icon: Gauge },
  { val: "Better Exam Readiness", title: "Regular revision and practice build familiarity with exam structure and timings.", icon: Timer },
  { val: "Greater Exam Comfort", title: "Timed exam practice helps students feel prepared for difficult questions.", icon: Award },
  { val: "Solid Understanding", title: "Each lesson helps students build better retention over time.", icon: BookMarked }
];

function CoinCard({ item, index }: { item: typeof RESULTS[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex flex-col items-center justify-center w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[255px] mx-auto isolate"
    >
       {/* Clip 3D transforms so they cannot widen the page */}
       <div className="w-full aspect-square relative overflow-hidden rounded-full p-3.5 [contain:paint]">
         <div 
           style={{ perspective: '1200px' }} 
           className="w-full h-full relative cursor-pointer group"
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
         >
           <motion.div
             className="w-full h-full relative"
             style={{ transformStyle: 'preserve-3d' }}
             animate={{ 
               rotateY: isHovered ? 180 : 0, 
               y: isHovered ? -8 : [0, -8, 0],
               scale: isHovered ? 1.03 : 1
             }}
             transition={{ 
               rotateY: { type: 'spring', damping: 22, stiffness: 140 },
               scale: { type: 'spring', damping: 20 },
               y: isHovered 
                 ? { type: 'spring', damping: 20 } 
                 : { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }
             }}
           >
             {/* Soft glow — kept inside the clip box */}
             <div 
               className="absolute inset-0 bg-[#C7A24A]/25 blur-xl rounded-full transition-opacity duration-500 pointer-events-none" 
               style={{ transform: 'translateZ(-14px)' }} 
             />
             
             {/* Coin Edge Stack (Creates 3D Thickness) */}
             {[...Array(12)].map((_, i) => (
               <div 
                 key={i} 
                 className="absolute inset-0 rounded-full" 
                 style={{ 
                   backgroundColor: i % 2 === 0 ? '#d4af37' : '#b38728',
                   transform: `translateZ(${-i}px)`,
                 }} 
               />
             ))}
             
             {/* Front Face (The Golden Coin) */}
             <div 
               className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f8e596] via-[#d4af37] to-[#99731a] flex flex-col items-center justify-center p-5 lg:p-6 text-center border-[5px] border-[#fff5cc]/50 shadow-[inset_0_0_30px_rgba(0,0,0,0.3)]"
               style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)' }}
             >
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#a67c00]/50" />
                
                <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-[#5e4500] mb-3 drop-shadow-md" />
                <div className="text-lg lg:text-xl font-black text-[#5e4500] leading-tight px-2 drop-shadow-sm">{item.val}</div>
             </div>

             {/* Back Face (The Description Panel) */}
             <div 
               className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0a3a79] to-[#0f4a9b] flex flex-col items-center justify-center p-6 text-center border-[5px] border-[#3b82f6]/40 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]"
               style={{ backfaceVisibility: 'hidden', transform: 'translateZ(-12px) rotateY(180deg)' }}
             >
               <div className="absolute inset-2 rounded-full border border-blue-400/20" />
               <p className="text-white/95 text-sm lg:text-[15px] font-medium leading-relaxed drop-shadow-sm px-2">{item.title}</p>
               <div className="absolute bottom-4 flex items-center justify-center gap-1 opacity-60">
                 <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Result</span>
               </div>
             </div>
           </motion.div>
         </div>
       </div>
    </motion.div>
  )
}

export function AchievementCoinsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] relative overflow-hidden w-full isolate">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[min(800px,100%)] h-[600px] bg-[#C7A24A]/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[min(600px,100%)] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 shadow-lg"
          >
            <TrendingUp className="w-4 h-4 text-[#C7A24A]" />
            <span>Measurable Growth</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-md"
          >
            Real Progress. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f8e596] to-[#d4af37]">Steady Results.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-base lg:text-lg font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Ustaad focuses on improvement that students and parents can visibly notice over time. Hover a coin to reveal the strategy.
          </motion.p>
        </div>

        {/* 3D Coins Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto pb-8 overflow-hidden">
          {RESULTS.map((item, i) => (
            <CoinCard key={i} item={item} index={i} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
