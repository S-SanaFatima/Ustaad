import { useEffect } from 'react';
import {
  X, BookOpen, GraduationCap, Calculator, Atom, Globe,
  CheckCircle, MessageCircle,
} from 'lucide-react';
import { motion } from 'motion/react';

const WA_URL =
  'https://wa.me/971561249005?text=' +
  encodeURIComponent("Hi Ustaad, I have a homework question I'd like help with.");

type WelcomePopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function WelcomePopup({ open, onClose }: WelcomePopupProps) {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#0e1d3f]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcomePopTitle"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[650px] bg-white rounded-[20px] shadow-[0_24px_70px_rgba(10,31,61,0.5)] overflow-visible mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close welcome popup"
          onClick={onClose}
          className="absolute -top-3 -right-1 sm:-top-4 sm:-right-4 z-50 w-8 h-8 rounded-full bg-[#ef4444] border-2 border-white shadow-md flex items-center justify-center text-white hover:bg-[#dc2626] transition-all"
        >
          <X className="w-4 h-4" strokeWidth={2.5} />
        </button>

        <motion.div
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
          style={{
            backgroundSize: '300% 300%',
            backgroundImage: 'linear-gradient(-45deg, #f0f7ff, #fff0f5, #f0fff4, #fff9e6)',
          }}
          className="flex flex-col p-5 sm:p-8 rounded-[20px] overflow-hidden relative items-center text-center w-full"
        >
          <motion.div
            className="absolute top-4 left-4 sm:top-8 sm:left-8 z-0 flex items-center justify-center p-2 sm:p-3 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgba(15,74,155,0.12)] scale-75 sm:scale-100"
            animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
          >
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#0f4a9b]" strokeWidth={1.5} />
          </motion.div>
          <motion.div
            className="absolute bottom-6 right-4 sm:bottom-10 sm:right-8 z-0 flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgba(37,211,102,0.12)] scale-75 sm:scale-100"
            animate={{ y: [0, 20, 0], x: [0, -15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
          >
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-[#25D366]" strokeWidth={1.5} />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-4 sm:right-12 z-0 flex items-center justify-center p-2 sm:p-2.5 rounded-xl bg-white/40 backdrop-blur-sm border border-white/70 shadow-[0_8px_20px_rgba(199,162,74,0.15)] scale-75 sm:scale-100"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, delay: 2 }}
          >
            <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-[#C7A24A]" strokeWidth={1.5} />
          </motion.div>
          <motion.div
            className="absolute top-8 right-16 sm:top-12 sm:right-24 z-0 flex items-center justify-center p-2 sm:p-2.5 rounded-xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-lg scale-75 sm:scale-100"
            animate={{ y: [0, 15, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, delay: 1.5 }}
          >
            <Atom className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff9a9e]" strokeWidth={1.5} />
          </motion.div>
          <motion.div
            className="absolute bottom-12 left-4 sm:bottom-16 sm:left-12 z-0 flex items-center justify-center p-2 sm:p-3 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-lg scale-75 sm:scale-100"
            animate={{ y: [0, -15, 0], x: [0, -10, 0], rotate: [0, -15, 15, 0] }}
            transition={{ duration: 7.5, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
          >
            <Globe className="w-5 h-5 sm:w-7 sm:h-7 text-[#9c27b0]" strokeWidth={1.5} />
          </motion.div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <div className="inline-flex items-center rounded-full bg-[#f7f1df]/90 backdrop-blur-sm border border-[#eadfbc] px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.1em] text-[#8a6a2f] font-extrabold shadow-sm mb-3 sm:mb-4">
              Stuck on a question? Ask us
            </div>

            <h3
              id="welcomePopTitle"
              className="text-xl sm:text-[24px] text-[#0a1f3d] font-serif font-bold mb-2.5 sm:mb-3 leading-[1.25]"
            >
              Get a <span className="italic text-[#b8883f]">free written</span> solution in 15 minutes.
            </h3>

            <p className="text-[#5f6f86] text-[12px] sm:text-[13px] leading-relaxed mb-5 max-w-[480px]">
              Send us any homework question your child is stuck on. A UAE subject specialist will reply with a worked solution, completely free.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-start sm:items-center gap-2.5 sm:gap-x-5 sm:gap-y-2.5 mb-6 w-full max-w-[480px] mx-auto text-left sm:text-center">
              <div className="flex items-center gap-2 text-[12px] text-[#344e72] font-semibold bg-white/40 px-3 py-1.5 rounded-full border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                12 min average reply time
              </div>
              <div className="flex items-center gap-2 text-[12px] text-[#344e72] font-semibold bg-white/40 px-3 py-1.5 rounded-full border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                IGCSE, A-Level, IB &amp; American
              </div>
              <div className="flex items-center gap-2 text-[12px] text-[#344e72] font-semibold bg-white/40 px-3 py-1.5 rounded-full border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                Hundreds of questions answered
              </div>
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full sm:w-[280px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1fb858] text-white font-extrabold text-[14px] sm:text-[15px] py-3 sm:py-3.5 transition-all shadow-[0_8px_16px_rgba(37,211,102,0.25)] hover:shadow-[0_12px_20px_rgba(37,211,102,0.35)] hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Ask on WhatsApp
            </a>

            <p className="mt-3.5 text-[10px] sm:text-[11px] text-[#9aa5b5] font-medium">
              No sign-up. No credit card. Just send your question.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
