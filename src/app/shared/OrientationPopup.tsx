import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const KEY = 'ustaad_orientation_seen';
const DELAY_MS = 2500;
const WA_URL =
  'https://wa.me/971561249005?text=' +
  encodeURIComponent("Hi Ustaad, I'd like to book my child's first lesson with the free 15-minute orientation.");

export default function OrientationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === '';

  useEffect(() => {
    // Do not show the popup on the home page
    if (isHomePage) {
      setIsOpen(false);
      return;
    }

    try {
      if (sessionStorage.getItem(KEY) === '1') {
        return;
      }
    } catch {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, [location.pathname, isHomePage]);

  const handleClose = () => {
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {}
    setIsOpen(false);
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (isHomePage) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="usOrientation"
          role="dialog"
          aria-modal="true"
          aria-labelledby="usTitle"
          aria-describedby="usDesc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={handleClose}
          className="fixed inset-0 z-[99999] grid place-items-center p-3.5 sm:p-5 md:p-6 bg-[#0a1f3d]/70 backdrop-blur-[4px] select-none overflow-y-auto"
        >
          {/* Card: Landscape on Desktop (md:), Stacked & responsive on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[390px] md:max-w-[780px] bg-white rounded-[24px] md:rounded-[28px] overflow-hidden shadow-[0_25px_70px_rgba(10,31,61,0.4)] border border-slate-100 flex flex-col md:flex-row my-auto"
          >
            {/* ── LEFT / TOP IMAGE PANEL: 100% CLEAR, BRIGHT & FULLY VISIBLE ── */}
            <div className="relative w-full md:w-[49%] h-[190px] sm:h-[220px] md:h-auto md:min-h-[420px] bg-slate-100 shrink-0 overflow-hidden">
              <img
                src="/images/ustaad-online-orientation-session.jpg"
                alt="Online 1-to-1 tutoring orientation lesson with Ustaad tutor"
                className="w-full h-full object-cover object-[center_60%] md:object-[60%_center]"
              />
              {/* Subtle edge overlay on desktop for smooth blend into card */}
              <div className="hidden md:block absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
              {/* Mobile bottom subtle vignette */}
              <div className="md:hidden absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />

              {/* Close Button on Mobile (floats over photo) */}
              <button
                type="button"
                aria-label="Close"
                onClick={handleClose}
                className="md:hidden absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white/90 hover:bg-white active:scale-95 text-slate-700 shadow-md flex items-center justify-center cursor-pointer transition-all border border-slate-200"
              >
                <X className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>

            {/* ── RIGHT / BOTTOM CONTENT PANEL ── */}
            <div className="relative w-full md:w-[51%] p-5 sm:p-6 md:p-8 flex flex-col justify-center text-center md:text-left bg-white">
              {/* Desktop Close Button */}
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Close"
                onClick={handleClose}
                className="hidden md:flex absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-600 hover:text-slate-900 transition-all items-center justify-center cursor-pointer border border-slate-200/60"
              >
                <X className="w-4 h-4" strokeWidth={2.5} />
              </button>

              {/* Ustaad Brand Logo */}
              <div className="mb-3 mx-auto md:mx-0">
                <img
                  src="/ustaad-private-tutors-uae-logo.png"
                  alt="Ustaad Private Tutors UAE"
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain mx-auto md:mx-0"
                  width={160}
                  height={40}
                />
              </div>

              {/* Label Pill */}
              <div className="inline-flex items-center px-3 py-0.5 rounded-full bg-[#c7a24a]/15 border border-[#c7a24a]/30 mb-2.5 w-fit mx-auto md:mx-0">
                <span className="text-[10px] sm:text-[10.5px] font-extrabold tracking-[0.16em] uppercase text-[#9b7625]">
                  New at Ustaad
                </span>
              </div>

              {/* Title */}
              <h2
                id="usTitle"
                className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[25px] font-black text-[#0a1f3d] leading-[1.22] tracking-tight mb-2"
                style={{ textWrap: 'balance' }}
              >
                A stitch in time starts with 15&nbsp;minutes
              </h2>

              {/* Description line */}
              <p
                id="usDesc"
                className="text-[14px] sm:text-[14.5px] md:text-[15px] leading-snug text-slate-600 font-semibold mb-3.5"
                style={{ textWrap: 'balance' }}
              >
                Free with your child’s first 1-hour lesson.
              </p>

              {/* 3 Steps Pills */}
              <div className="mb-4 py-1 px-3 bg-slate-50 border border-slate-100 rounded-xl text-[11.5px] sm:text-[12px] font-bold text-[#0a1f3d] flex items-center justify-center md:justify-start gap-2 flex-wrap sm:flex-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c7a24a] shrink-0 inline-block" />
                <span>Meet the tutor</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c7a24a] shrink-0 inline-block" />
                <span>Name the gaps</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c7a24a] shrink-0 inline-block" />
                <span>Start right</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2.5">
                {/* Main CTA */}
                <a
                  href="/contact#form"
                  onClick={handleClose}
                  className="block w-full py-3.5 px-5 rounded-xl text-[14.5px] sm:text-[15px] font-extrabold text-white text-center transition-all duration-150 shadow-[0_6px_18px_rgba(199,162,74,0.35)] hover:shadow-[0_8px_24px_rgba(199,162,74,0.5)] hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    background: 'linear-gradient(135deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)',
                  }}
                >
                  Book the First Lesson
                </a>

                {/* WhatsApp CTA */}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-xl text-[14.5px] sm:text-[15px] font-extrabold text-white text-center transition-all duration-150 bg-[#25D366] hover:bg-[#20ba59] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)]"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>

              {/* Note */}
              <p className="mt-3 text-[11.5px] text-slate-400 font-medium text-center">
                1 to 1 online tutoring
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
