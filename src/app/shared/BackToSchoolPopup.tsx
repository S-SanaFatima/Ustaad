import { useEffect, type CSSProperties } from 'react';
import {
  X,
  Calendar,
  Star,
  BookOpen,
  BadgePercent,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ENROL_URL = '/contact#form';

const SERIF: CSSProperties = { fontFamily: 'Georgia, "Times New Roman", serif' };

const PERKS = [
  { icon: Star, label: '5.0 Rated', filled: true },
  { icon: BookOpen, label: 'IGCSE & IB', filled: false },
  { icon: BadgePercent, label: '10% Off', filled: false },
] as const;

function HeadingBlock() {
  return (
    <div className="min-w-0 w-full text-left">
      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0a1f3d]/55 leading-none md:text-[11px]">
        Back to
      </p>
      <h2
        className="mt-0.5 text-[1.55rem] font-bold uppercase leading-[0.95] tracking-tight text-[#C7A24A] md:mt-1 md:text-[2.35rem]"
        style={SERIF}
      >
        School
      </h2>
      <p className="mt-1.5 text-[12px] font-medium leading-snug text-[#0a1f3d]/75 md:mt-2 md:text-sm">
        Stronger start. Brighter year.
      </p>
    </div>
  );
}

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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a1f3d]/65 p-3 backdrop-blur-[6px] overflow-y-auto md:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Back to School — Get 10% off your first enrolment with Ustaad"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 6 }}
            transition={{ type: 'spring', damping: 30, stiffness: 320 }}
            className="relative my-auto w-full max-w-[318px] overflow-hidden rounded-xl bg-white shadow-[0_20px_60px_rgba(10,31,61,0.28)] ring-1 ring-[#0a1f3d]/8 md:max-w-[720px] md:rounded-[1.35rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-[2px] w-full bg-gradient-to-r from-[#C7A24A] via-[#E8D5A3] to-[#C7A24A] md:h-[3px]" aria-hidden="true" />

            <button
              type="button"
              aria-label="Close dialog"
              onClick={onClose}
              className="absolute right-2.5 top-[calc(0.625rem+2px)] z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#0a1f3d]/70 ring-1 ring-[#0a1f3d]/10 shadow-sm transition hover:bg-[#0a1f3d] hover:text-white md:right-4 md:top-[calc(0.875rem+3px)] md:h-8 md:w-8"
            >
              <X className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2.25} />
            </button>

            <div className="grid md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_280px]">
              <div className="flex flex-col items-start px-4 pb-4 pt-4 text-left md:px-8 md:pb-8 md:pt-6">
                <img
                  src="/ustaad-private-tutors-uae-logo.png"
                  alt="Ustaad"
                  width={108}
                  height={28}
                  className="mb-3 block h-6 w-auto object-contain object-left md:mb-6 md:h-7"
                  loading="eager"
                />

                {/* Mobile — integrated hero panel (photo blends into text area) */}
                <div className="relative mb-3 w-full overflow-hidden rounded-xl border border-[#0a1f3d]/8 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef2f8] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] md:hidden">
                  <div className="relative flex min-h-[7.5rem]">
                    <div className="relative z-10 flex flex-1 flex-col justify-center py-3 pl-3 pr-1">
                      <HeadingBlock />
                    </div>
                    <div className="relative w-[6.25rem] shrink-0 overflow-hidden">
                      <img
                        src="/images/back-to-school-popup-student.jpg"
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-cover object-[72%_12%]"
                        loading="eager"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 to-transparent" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-6 bg-gradient-to-t from-[#eef2f8]/80 to-transparent" />
                    </div>
                  </div>
                </div>

                <div className="hidden w-full md:block">
                  <HeadingBlock />
                </div>

                <div className="mt-3 flex w-full flex-wrap gap-1.5 md:mt-5 md:gap-2">
                  {PERKS.map(({ icon: Icon, label, filled }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1 rounded-md border border-[#0a1f3d]/8 bg-white px-2 py-1 text-[9px] font-semibold text-[#0a1f3d]/80 shadow-sm md:gap-1.5 md:rounded-lg md:px-2.5 md:py-1.5 md:text-[10px]"
                    >
                      <Icon
                        className={`h-3 w-3 text-[#C7A24A] md:h-3.5 md:w-3.5 ${filled ? 'fill-[#C7A24A]' : ''}`}
                        strokeWidth={2.25}
                      />
                      {label}
                    </span>
                  ))}
                </div>

                <div className="my-3 h-px w-8 bg-[#C7A24A]/60 md:my-5 md:w-10" aria-hidden="true" />

                <div className="w-full rounded-lg border border-[#0a1f3d]/8 bg-[#f8fafc] px-3 py-3 text-left md:rounded-xl md:px-5 md:py-4">
                  <div className="flex items-baseline gap-x-1.5 md:gap-x-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0a1f3d] md:text-[11px]">
                      Get
                    </span>
                    <span
                      className="text-[1.65rem] font-bold leading-none text-[#C7A24A] md:text-[2.25rem]"
                      style={SERIF}
                    >
                      10%
                    </span>
                    <span className="text-base font-bold uppercase leading-none text-[#0a1f3d] md:text-lg">
                      Off
                    </span>
                  </div>
                  <p className="mt-1.5 text-[12px] font-medium text-[#0a1f3d] md:mt-2 md:text-sm">
                    your first enrolment with Ustaad.
                  </p>
                  <p className="mt-2 flex items-start gap-1 text-[10px] font-medium leading-snug text-[#0a1f3d]/65 md:mt-3 md:gap-1.5 md:text-xs">
                    <Star className="mt-0.5 h-2.5 w-2.5 shrink-0 fill-[#C7A24A] text-[#C7A24A] md:h-3 md:w-3" strokeWidth={0} />
                    <span>5.0 Google Reviews · Matched IGCSE, A-Level &amp; IB tutors</span>
                  </p>
                </div>

                <a
                  href={ENROL_URL}
                  onClick={onClose}
                  className="group mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#0a1f3d] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_6px_18px_rgba(10,31,61,0.22)] transition hover:bg-[#0f4a9b] active:scale-[0.99] md:mt-4 md:gap-2 md:rounded-xl md:px-5 md:py-3.5 md:text-xs"
                >
                  <Sparkles className="h-3 w-3 text-[#C7A24A] md:h-3.5 md:w-3.5" strokeWidth={2.25} />
                  Claim My 10% Discount
                  <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5 md:h-3.5 md:w-3.5" strokeWidth={2.5} />
                </a>

                <div className="mt-2.5 flex w-full items-center gap-2.5 rounded-lg border border-[#C7A24A]/20 bg-[#fdfaf3] px-3 py-2.5 text-left md:mt-3 md:gap-3 md:rounded-xl md:px-4 md:py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0a1f3d] text-[#C7A24A] md:h-9 md:w-9">
                    <Calendar className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#0a1f3d]/50 md:text-[10px]">
                      Valid until
                    </p>
                    <p
                      className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-[#0a1f3d] md:text-xs"
                      style={SERIF}
                    >
                      30 September 2026
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative hidden min-h-full bg-[#eef2f8] md:block">
                <img
                  src="/images/back-to-school-popup-student.jpg"
                  alt="Student ready for the new school year with Ustaad"
                  className="absolute inset-0 h-full w-full object-cover object-[62%_12%]"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
                <div
                  className="absolute bottom-6 right-5 flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-center rounded-full bg-[#0a1f3d] text-center shadow-xl ring-2 ring-[#C7A24A]/60"
                  aria-hidden="true"
                >
                  <BadgePercent className="h-5 w-5 text-[#C7A24A]" strokeWidth={2} />
                  <span className="text-sm font-black leading-none text-white">10%</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-[#C7A24A]">Off</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
