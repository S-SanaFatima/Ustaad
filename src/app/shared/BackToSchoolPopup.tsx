import { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ENROL_URL = '/contact#form';

type BackToSchoolPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function BackToSchoolPopup({ open, onClose }: BackToSchoolPopupProps) {
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

  const logoBlock = (
    <div className="popup-logo-frame w-full flex justify-start shrink-0">
      <img
        src="/ustaad-private-tutors-uae-logo.png"
        alt="Ustaad"
        width={110}
        height={28}
        className="h-7 w-auto object-contain"
        loading="eager"
      />
    </div>
  );

  const offerBlock = (
    <div className="popup-offer-frame flex w-full flex-col items-start text-left">
      <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] text-[#0a1f3d] leading-none">
        Back to
      </p>
      <h2
        id="campaignModalTitle"
        className="mt-0.5 text-[2.1rem] sm:text-[2.4rem] md:text-[2.8rem] font-black uppercase leading-[0.92] tracking-tight bg-gradient-to-r from-[#D4AF37] via-[#C7A24A] to-[#8C6D1F] bg-clip-text text-transparent"
        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        School
      </h2>

      <p className="mt-1.5 text-xs md:text-[13px] text-[#0a1f3d]/80 font-medium">
        Stronger start. Brighter year.
      </p>

      <div className="my-2.5 md:my-3 h-0.5 w-12 bg-gradient-to-r from-[#C7A24A] to-[#0a1f3d]/20 rounded-full" aria-hidden="true" />

      <div className="flex flex-wrap items-end justify-start gap-x-2 gap-y-0.5">
        <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.16em] text-[#0a1f3d] pb-0.5">
          Get
        </span>
        <span
          className="text-[2.35rem] md:text-[2.85rem] font-black leading-none bg-gradient-to-b from-[#D4AF37] to-[#9E7C20] bg-clip-text text-transparent"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          10%
        </span>
        <span className="text-lg md:text-xl font-black uppercase text-[#0a1f3d] pb-0.5">
          Off
        </span>
      </div>

      <p className="mt-1 text-xs md:text-[13px] text-[#0a1f3d] font-medium">
        your first enrolment with Ustaad.
      </p>

      <p className="mt-2 text-[10px] md:text-[11px] font-semibold text-[#0a1f3d]/75 leading-snug">
        <span className="text-[#C7A24A]">★</span> 5.0 Google Reviews · Matched IGCSE, A-Level &amp; IB tutors
      </p>

      <a
        href={ENROL_URL}
        onClick={onClose}
        className="popup-cta-btn mt-3.5 md:mt-4 flex w-full md:w-auto md:min-w-[250px] items-center justify-center rounded-xl bg-gradient-to-r from-[#0a1f3d] via-[#0f4a9b] to-[#0a1f3d] hover:brightness-110 border border-[#C7A24A]/50 px-6 py-3.5 text-[11px] md:text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_10px_25px_rgba(10,31,61,0.3)] transition-all duration-200"
      >
        Claim My 10% Discount
      </a>

      <div className="popup-validity-box mt-3 md:mt-4 flex w-full md:w-auto md:min-w-[250px] items-center gap-2.5 rounded-xl border border-[#C7A24A]/35 bg-gradient-to-r from-[#fdf8ee] via-white to-[#fcf6e8] px-6 py-3.5 shadow-[0_2px_8px_rgba(199,162,74,0.12)]">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0a1f3d] text-[#C7A24A] shadow-sm">
          <Calendar className="h-4 w-4" strokeWidth={2.2} />
        </div>
        <div className="text-left leading-tight">
          <span className="block text-[9px] md:text-[10px] font-bold uppercase tracking-[0.16em] text-[#0a1f3d]/60">
            Valid until
          </span>
          <span
            className="block text-[11px] md:text-xs font-extrabold uppercase tracking-[0.08em] text-[#0a1f3d]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            30 September 2026
          </span>
        </div>
      </div>
    </div>
  );

  const leftColumn = (
    <div className="popup-left-column flex w-full flex-col gap-4 md:gap-5">
      {logoBlock}
      {offerBlock}
    </div>
  );

  const studentImageDesktop = (
    <img
      src="/images/back-to-school-popup-student.jpg"
      alt="Student ready for the new school year with Ustaad"
      className="block h-[102%] w-full max-w-none object-cover object-[78%_15%]"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 16%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 16%)',
      }}
      loading="eager"
    />
  );

  const studentImageMobile = (
    <img
      src="/images/back-to-school-popup-student.jpg"
      alt="Student ready for the new school year with Ustaad"
      className="absolute inset-x-0 top-5 bottom-0 block w-full object-cover object-[50%_14%] sm:top-6"
      loading="eager"
    />
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#040c1a]/75 p-3 sm:p-4 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="campaignModalTitle"
          onClick={onClose}
        >
          {/* Executive Modal Card with Metallic Corner Accents & Luxury Gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-[690px] my-auto overflow-hidden rounded-[24px] bg-gradient-to-br from-white via-[#fcfbfa] to-[#f6f2e8] border border-[#C7A24A]/40 shadow-[0_32px_90px_rgba(10,31,61,0.38)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Executive Corner Edge Designs */}
            <div className="absolute top-2.5 left-2.5 w-6 h-6 border-t-2 border-l-2 border-[#C7A24A]/70 rounded-tl-md pointer-events-none z-30" />
            <div className="absolute bottom-2.5 left-2.5 w-6 h-6 border-b-2 border-l-2 border-[#C7A24A]/70 rounded-bl-md pointer-events-none z-30" />
            <div className="absolute top-2.5 right-2.5 w-6 h-6 border-t-2 border-r-2 border-[#C7A24A]/50 rounded-tr-md pointer-events-none z-30" />
            <div className="absolute bottom-2.5 right-2.5 w-6 h-6 border-b-2 border-r-2 border-[#C7A24A]/50 rounded-br-md pointer-events-none z-30" />

            {/* Subtle Gold Background Radial Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#C7A24A]/10 rounded-full blur-3xl pointer-events-none" />

            <button
              type="button"
              aria-label="Close dialog"
              onClick={onClose}
              className="absolute right-3.5 top-3.5 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#0a1f3d] border border-[#C7A24A]/30 shadow-md hover:bg-[#0a1f3d] hover:text-white transition duration-200"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </button>

            {/* DESKTOP — text + image overlap, no middle gap */}
            <div className="popup-body-frame hidden md:block relative z-10 min-h-[385px] overflow-hidden bg-gradient-to-br from-white via-[#fcfbfa] to-[#f6f2e8]">
              <div className="relative z-10 max-w-[54%] py-6 pl-7 pr-2 lg:pl-8 lg:pr-3 flex flex-col justify-center">
                {leftColumn}
              </div>

              <div className="absolute -top-px -bottom-px right-0 flex w-[50%] items-center overflow-hidden pointer-events-none lg:w-[48%]">
                {studentImageDesktop}
              </div>
            </div>

            {/* MOBILE — unified stacked frame */}
            <div className="popup-body-frame md:hidden relative z-10 overflow-hidden bg-gradient-to-br from-white via-[#fcfbfa] to-[#f6f2e8]">
              <div className="relative h-52 overflow-hidden bg-[#fcfbfa] sm:h-56">
                {studentImageMobile}
                <div
                  className="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, #fcfbfa 0%, rgba(252, 251, 250, 0.75) 50%, transparent 100%)',
                  }}
                />
              </div>
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-4">
                {leftColumn}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
