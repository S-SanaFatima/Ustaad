import { useEffect } from 'react';
import { GoldButton } from './GoldButton';
import { X, Star, ShieldCheck, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ENROL_URL = '/contact#form';

type BackToSchoolPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function BackToSchoolPopup({ open, onClose }: BackToSchoolPopupProps) {
  // Prevent background scrolling when open
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Handle escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a1f3d]/50 p-4 backdrop-blur-[4px] sm:p-6"
          onClick={onClose}
        >
          {/* Notebook Paper Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: -2, y: 15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, rotate: 2, y: 15 }}
            transition={{ type: 'spring', damping: 20, stiffness: 120 }}
            className="relative w-[92%] sm:w-full max-w-[360px] md:max-w-[620px] rounded-2xl bg-[#faf9f6] bg-[linear-gradient(rgba(15,74,155,0.04)_1px,transparent_1px)] bg-[size:100%_24px] pl-12 pr-5 py-6 md:pl-14 md:pr-6 md:py-8 shadow-[0_24px_60px_rgba(10,31,61,0.25)] border border-gray-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner curl paper effect (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-br-2xl">
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-200 to-transparent rotate-45 transform origin-bottom-right" />
              <div className="absolute bottom-0 right-0 w-[22px] h-[22px] bg-[#f0ede6] border-t border-l border-gray-300/60 shadow-[-2px_-2px_4px_rgba(0,0,0,0.06)]" />
            </div>

            {/* Notebook punched spiral holes (Far Left Margin) */}
            <div className="absolute left-2 md:left-2.5 top-0 bottom-0 flex flex-col justify-around py-5 pointer-events-none z-20">
              {Array.from({ length: 9 }).map((_, idx) => (
                <div key={idx} className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#0a1f3d]/70 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)]" />
              ))}
            </div>

            {/* Red notebook margin line */}
            <div className="absolute left-8 md:left-10 top-0 bottom-0 w-[1px] bg-red-300/80 pointer-events-none z-10" />

            {/* Close Button - Frosted Glass & Dark Black */}
            <motion.button
              type="button"
              aria-label="Close promotion dialog"
              whileHover={{ scale: 1.08, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="absolute right-3.5 top-3.5 z-50 flex h-7.5 w-7.5 items-center justify-center rounded-full bg-white/60 text-gray-900 border border-gray-300 backdrop-blur-md hover:bg-gray-100 hover:text-black transition duration-200 shadow-sm"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </motion.button>

            {/* Teacher's Approved Grade Stamp */}
            <div className="absolute top-4 right-14 md:right-16 rotate-[10deg] border-2 border-dashed border-[#C7A24A]/70 rounded-md px-2 py-0.5 md:px-2.5 md:py-0.5 flex flex-col items-center justify-center font-serif text-[#C7A24A] tracking-wider uppercase pointer-events-none select-none bg-[#faf9f6] scale-90 md:scale-100">
              <span className="text-[9px] font-black leading-none">APPROVED</span>
              <span className="text-[7px] font-bold leading-none mt-0.5">Ustaad Offer</span>
            </div>

            {/* Content Container (2-Column Grid on Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 mt-4">
              
              {/* Left Side (Desktop: Spans 6 Columns) */}
              <div className="md:col-span-6 flex flex-col justify-center">
                {/* Ustaad Logo */}
                <img
                  src="/ustaad-private-tutors-uae-logo.png"
                  alt="Ustaad"
                  width={90}
                  height={24}
                  className="h-6 w-auto mb-4 self-start"
                  loading="eager"
                />

                {/* Header Tag */}
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C7A24A]">
                  Back to School
                </span>

                {/* Main Highlighted Discount */}
                <h3 className="text-[38px] md:text-[46px] font-black text-[#0a1f3d] tracking-tight leading-none mt-1">
                  10% <span className="text-[#C7A24A]">OFF</span>
                </h3>
                <p className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mt-1">
                  Your first enrolment
                </p>

                {/* Lined paper visual spacer */}
                <div className="h-[24px]" />

                {/* Hand-drawn style Claimed Progress Bar */}
                <div className="max-w-[220px]">
                  <div className="flex justify-between text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                    <span>Offer Capacity</span>
                    <span>82/100 claimed</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200/60 rounded-full overflow-hidden p-[1px] border border-gray-300/40">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '82%' }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side (Desktop: Spans 6 Columns) */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-[#0a1f3d] tracking-tight leading-tight">
                    Start the academic term right
                  </h4>
                  <p id="ustPopDesc" className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                    Managed 1-to-1 premium tutoring matching your child's curriculum, board, and schedule.
                  </p>
                </div>

                {/* highlighted exam box CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4"
                >
                  <GoldButton 
                    href={ENROL_URL} 
                    className="w-full py-3 bg-[#FFE57F] hover:bg-[#FFD54F] border-2 border-dashed border-[#C7A24A] text-[#0a1f3d] text-xs font-black uppercase tracking-widest rounded-lg shadow-sm hover:shadow transition duration-200"
                  >
                    Claim my 10% discount
                  </GoldButton>
                </motion.div>
              </div>

            </div>

            {/* Footer / Report Card footer strip (Spans full width) */}
            <div className="mt-6 border-t border-b border-dashed border-gray-300 py-2.5 grid grid-cols-3 gap-2 text-center text-gray-500 leading-none">
              <div className="border-r border-gray-200 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-[#0a1f3d]">5.0 Rating</span>
                <span className="text-[8px] uppercase tracking-wider text-gray-400 font-bold mt-1">Google Reviews</span>
              </div>
              <div className="border-r border-gray-200 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-[#0a1f3d]">Match Guarantee</span>
                <span className="text-[8px] uppercase tracking-wider text-gray-400 font-bold mt-1">Tutor Check</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-[#0a1f3d]">All Boards</span>
                <span className="text-[8px] uppercase tracking-wider text-gray-400 font-bold mt-1">IB, British & American</span>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
