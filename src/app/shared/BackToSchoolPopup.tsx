import { useEffect, useState } from 'react';
import { GoldButton } from './GoldButton';
import { Star, ShieldCheck, Users, X } from 'lucide-react';

const ENROL_URL = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=' +
  encodeURIComponent('Hi Ustaad, I have a homework question.');

type BackToSchoolPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function BackToSchoolPopup({ open, onClose }: BackToSchoolPopupProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!open) {
      setEntered(false);
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const raf = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setEntered(true));
    });
    return () => {
      document.body.style.overflow = previousOverflow;
      window.cancelAnimationFrame(raf);
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
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#0a1f3d]/60 p-4 backdrop-blur-[6px] sm:p-6"
      style={{
        paddingTop: 'max(1rem, env(safe-area-inset-top))',
        paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
        paddingLeft: 'max(1rem, env(safe-area-inset-left))',
        paddingRight: 'max(1rem, env(safe-area-inset-right))',
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ustPopTitle"
      aria-describedby="ustPopDesc"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`relative my-auto w-full max-w-[400px] max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-2xl bg-white shadow-[0_32px_80px_-12px_rgba(10,31,61,0.45)] transition-all duration-500 ease-out ${
          entered ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-0'
        }`}
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0f4a9b] via-[#0a3a79] to-[#072d5e] px-5 pb-10 pt-6 text-center sm:px-6 sm:pb-12 sm:pt-7">
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#C7A24A]/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/5 blur-xl"
            aria-hidden="true"
          />

          <button
            type="button"
            aria-label="Close promotional popup"
            onClick={onClose}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25"
          >
            <X className="h-4 w-4" strokeWidth={2.5} />
          </button>

          <img
            src="/ustaad-private-tutors-uae-logo.png"
            alt="Ustaad"
            width={140}
            height={36}
            className="mx-auto h-9 w-auto brightness-0 invert"
            loading="eager"
          />

          <p
            id="ustPopTitle"
            className="mt-4 inline-flex max-w-[calc(100%-2rem)] flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-[#C7A24A]/40 bg-[#C7A24A]/15 px-3 py-1.5 text-[9px] font-bold uppercase leading-snug tracking-[0.12em] text-[#F5E6C0] sm:mt-5 sm:px-3.5 sm:text-[10px] sm:tracking-[0.16em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C7A24A]" aria-hidden="true" />
            Back to School · Enrolment Offer
          </p>
        </div>

        {/* Offer card — overlaps header */}
        <div className="relative z-10 -mt-7 mx-3 mb-3 rounded-xl border border-gray-100 bg-white px-4 py-5 text-center shadow-[0_8px_32px_rgba(15,74,155,0.12)] sm:-mt-8 sm:mx-5 sm:mb-4 sm:px-5 sm:py-6">
          <div className="flex items-baseline justify-center gap-1 leading-none">
            <span className="text-[clamp(2.75rem,14vw,3.75rem)] font-extrabold tracking-tight text-[#0f4a9b]">
              10%
            </span>
            <span className="text-xl font-bold text-[#C7A24A] sm:text-2xl">OFF</span>
          </div>

          <p id="ustPopDesc" className="mt-2 text-sm font-semibold text-[#0a1f3d] sm:text-[15px]">
            Your first enrolment with Ustaad
          </p>
          <p className="mt-1.5 text-[11px] text-gray-500 sm:text-xs">
            First 100 students · Valid till 30 September 2026
          </p>

          <GoldButton href={ENROL_URL} className="mt-4 w-full py-3 text-sm shadow-[0_8px_24px_rgba(199,162,74,0.35)] sm:mt-5 sm:py-3.5 sm:text-[15px]">
            Claim my 10% discount
          </GoldButton>

          <ul className="mt-4 grid grid-cols-3 gap-1.5 border-t border-gray-100 pt-3.5 sm:mt-5 sm:gap-2 sm:pt-4">
            {[
              { icon: Star, label: '5.0 Google rating' },
              { icon: Users, label: 'Matched tutors' },
              { icon: ShieldCheck, label: 'All curriculums' },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-1">
                <Icon className="h-4 w-4 text-[#C7A24A]" strokeWidth={2} aria-hidden="true" />
                <span className="text-[10px] font-medium leading-tight text-gray-500">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* WhatsApp — secondary, understated */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp"
          aria-label="Ask a homework question on WhatsApp for a free written solution in 15 minutes"
          className="flex items-center gap-2.5 border-t border-gray-100 px-4 py-3 text-left transition hover:bg-gray-50 sm:gap-3 sm:px-5 sm:py-3.5"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xs font-semibold text-[#0a1f3d]">Got a homework question?</span>
            <span className="block text-[11px] text-gray-500">Free written solution in 15 minutes</span>
          </span>
        </a>
      </div>
    </div>
  );
}
