import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, ClipboardList, TrendingUp, BookOpen, X } from 'lucide-react';
import { GradientHeadingText } from './GradientHeadingText';

const HELP_BOOKS = [
  {
    label: 'LEARN',
    color: '#0f4a9b',
    icon: Lightbulb,
    title: 'Learning Feels Easier',
    desc: 'In private sessions, tutors explain concepts clearly without rushing weak areas.',
    papers: ['Concept clarity', 'Patient pacing', 'Weak areas first'],
  },
  {
    label: 'PRACTICE',
    color: '#A8892A',
    icon: ClipboardList,
    title: 'Guided Practice',
    desc: 'We walk students through past papers, exam revision, and exam techniques.',
    papers: ['Past papers', 'Exam technique', 'Timed practice'],
  },
  {
    label: 'PROGRESS',
    color: '#0f4a9b',
    icon: TrendingUp,
    title: 'Tangible Improvement',
    desc: 'With time, students begin approaching difficult topics with greater ease.',
    papers: ['Steady gains', 'More confidence', 'Better results'],
  },
] as const;

function ClosedBookCard({ book, index, onClick }: { book: (typeof HELP_BOOKS)[number], index: number, onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = book.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center w-full"
    >
      <div 
        style={{ perspective: '1200px' }} 
        className="relative w-[155px] h-[225px] sm:w-[170px] sm:h-[245px] lg:w-[185px] lg:h-[265px] mx-auto cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ 
            rotateY: isHovered ? -22 : -12, // Show spine slightly
            rotateX: isHovered ? 5 : 5,
            y: isHovered ? -12 : 0, // Float up slightly
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        >
          {/* Back Cover */}
          <div 
            className="absolute inset-0 rounded-r-2xl shadow-xl origin-left"
            style={{ backgroundColor: book.color, transform: 'translateZ(-22px)' }}
          />
          
          {/* Pages block for thickness */}
          <div 
            className="absolute inset-y-1 right-1 left-0 bg-[#f4f4f4] rounded-r-xl border border-gray-200/50"
            style={{ transform: 'translateZ(-11px)' }}
          />

          {/* Spine */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-[22px] origin-right flex items-center justify-center"
            style={{ 
              backgroundColor: book.color, 
              transform: 'translateX(-100%) rotateY(-90deg)',
              filter: 'brightness(0.75)'
            }}
          >
             <span className="text-white/50 text-[8px] font-bold uppercase tracking-widest -rotate-90 whitespace-nowrap">
               {book.label}
             </span>
          </div>

          {/* Front Cover */}
          <motion.div 
            className="absolute inset-0 rounded-r-2xl shadow-lg origin-left flex flex-col p-1.5 border-l-4 border-black/30"
            style={{ backgroundColor: book.color, transformStyle: 'preserve-3d' }}
            animate={{ rotateY: isHovered ? -18 : 0 }} // Cover cracks open slightly!
          >
            <div 
              className="w-full h-full p-3 flex flex-col items-center justify-center text-center backface-hidden bg-gradient-to-br from-white/20 to-transparent rounded-r-xl border border-white/20 relative overflow-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
               {/* Decorative inner border */}
               <div className="absolute inset-1.5 border border-white/10 rounded-lg pointer-events-none" />

               <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-white mb-3 opacity-95 drop-shadow-md relative z-10" />
               <h4 className="text-white font-extrabold text-base sm:text-lg leading-snug px-1 relative z-10">{book.title}</h4>
               
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/15 group-hover:bg-white/25 transition-colors px-3 py-1 rounded-full backdrop-blur-md border border-white/30 whitespace-nowrap flex items-center gap-1.5 z-10">
                 <BookOpen className="w-3 h-3 text-white" />
                 <span className="text-white text-[8px] font-bold uppercase tracking-[0.15em]">Read</span>
               </div>
            </div>
            
            {/* Inside Front Cover (Visible when cracked open) */}
            <div 
              className="absolute inset-0 bg-[#fdfdfc] rounded-r-2xl border border-gray-200"
              style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
            >
               <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:100%_20px]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ExpandedBookModal({ book, onClose }: { book: (typeof HELP_BOOKS)[number], onClose: () => void }) {
  const Icon = book.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0a1f3d]/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      {/* --- DESKTOP BOOK SPREAD --- */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="hidden md:flex relative w-full max-w-[720px] min-h-[420px] bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 z-50 w-8 h-8 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors">
          <X className="w-4 h-4" />
        </button>

        {/* Left Page (Inside Cover) */}
        <div 
          className="w-1/2 flex flex-col justify-center p-10 lg:p-12 relative"
          style={{ backgroundColor: book.color }}
        >
           {/* Inner spine shadow */}
           <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none mix-blend-multiply" />
           
           <Icon className="w-10 h-10 text-white mb-6 opacity-90 drop-shadow-sm" />
           <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight drop-shadow-sm">{book.title}</h2>
           <p className="text-white/90 text-sm leading-relaxed font-medium">{book.desc}</p>
        </div>

        {/* Right Page (Content) */}
        <div className="w-1/2 bg-[#fdfdfc] flex flex-col justify-center p-10 lg:p-12 relative border-l border-gray-200/50">
           {/* Inner spine shadow */}
           <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/5 to-transparent pointer-events-none mix-blend-multiply" />
           
           <h4 className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-6">Inside the Process</h4>
           
           <div className="space-y-6">
              {book.papers.map((paper, i) => (
                <motion.div 
                  key={paper}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + (i * 0.1) }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-gray-100 shadow-sm" style={{ backgroundColor: `${book.color}15` }}>
                    <Icon className="w-4 h-4" style={{ color: book.color }} />
                  </div>
                  <span className="text-[15px] font-extrabold text-[#0a1f3d]">{paper}</span>
                </motion.div>
              ))}
           </div>
        </div>
      </motion.div>

      {/* --- MOBILE CARD MODAL --- */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="block md:hidden relative w-full max-w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 pb-8 text-white relative" style={{ backgroundColor: book.color }}>
          <button onClick={onClose} className="absolute top-4 right-4 z-50 w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          <Icon className="w-8 h-8 mb-4 drop-shadow-md relative z-10" />
          <h2 className="text-2xl font-black mb-3 relative z-10 leading-tight">{book.title}</h2>
          <p className="text-white/90 text-sm font-medium leading-relaxed relative z-10">{book.desc}</p>
        </div>
        <div className="p-6 bg-[#fdfdfc]">
          <h4 className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-5">Inside the Process</h4>
          <div className="space-y-4">
            {book.papers.map((paper) => (
               <div key={paper} className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-gray-100 shadow-sm" style={{ backgroundColor: `${book.color}15` }}>
                   <Icon className="w-4 h-4" style={{ color: book.color }} />
                 </div>
                 <span className="font-extrabold text-[#0a1f3d] text-sm">{paper}</span>
               </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ExplodedViewSection() {
  const [activeBook, setActiveBook] = useState<typeof HELP_BOOKS[number] | null>(null);

  return (
    <section className="relative py-14 lg:py-20 bg-[#f8fafc] overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#0f4a9b]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 lg:mb-14 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-3 tracking-tight"
          >
            <GradientHeadingText text="How Ustaad Helps" />
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-base lg:text-lg font-medium"
          >
            With the right guidance, difficult topics start feeling more manageable.
          </motion.p>
        </div>

        {/* 3 Books Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-[800px] mx-auto">
          {HELP_BOOKS.map((book, i) => (
            <ClosedBookCard 
              key={book.title} 
              book={book} 
              index={i} 
              onClick={() => setActiveBook(book)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeBook && (
          <ExpandedBookModal book={activeBook} onClose={() => setActiveBook(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
