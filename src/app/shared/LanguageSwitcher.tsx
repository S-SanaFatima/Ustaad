import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

function switchLang(lang: 'en' | 'ar') {
  if (typeof window === 'undefined') return;
  const domain = window.location.hostname;
  if (lang === 'en') {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  } else {
    document.cookie = `googtrans=/en/ar; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/ar; path=/`;
  }
  window.location.reload();
}

const glassShell =
  'group/lang relative shrink-0 notranslate rounded-full ' +
  'bg-gradient-to-b from-white/75 via-white/50 to-white/35 ' +
  'backdrop-blur-xl backdrop-saturate-150 ' +
  'border border-white/80 ' +
  'shadow-[0_2px_20px_rgba(15,74,155,0.08),0_8px_32px_rgba(15,74,155,0.05),inset_0_1px_0_rgba(255,255,255,0.95)] ' +
  'ring-1 ring-[#0f4a9b]/[0.07] ' +
  'transition-[box-shadow,border-color,transform] duration-500 ease-out ' +
  'hover:shadow-[0_4px_28px_rgba(15,74,155,0.14),0_12px_40px_rgba(199,162,74,0.06),inset_0_1px_0_rgba(255,255,255,1)] ' +
  'hover:border-white';

const activePill =
  'absolute inset-0 rounded-full ' +
  'bg-gradient-to-br from-[#0f4a9b] via-[#1459a8] to-[#0a3a79] ' +
  'shadow-[0_4px_16px_rgba(15,74,155,0.4),inset_0_1px_0_rgba(255,255,255,0.25)]';

const spring = { type: 'spring' as const, stiffness: 420, damping: 32 };

type Lang = 'en' | 'ar';

function LangSegment({
  code,
  label,
  active,
  onSelect,
  layoutId,
}: {
  code: Lang;
  label: string;
  active: boolean;
  onSelect: (code: Lang) => void;
  layoutId: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(code)}
      whileHover={{ scale: active ? 1 : 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`relative z-10 min-w-[2.75rem] px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider transition-colors duration-300 ${
        active ? 'text-white' : 'text-slate-500 hover:text-[#0f4a9b]'
      }`}
      aria-pressed={active}
      aria-label={code === 'en' ? 'English' : 'Arabic'}
    >
      {active && (
        <motion.span
          layoutId={layoutId}
          className={activePill}
          transition={spring}
        />
      )}
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
}

function HeaderDesktopSwitcher({
  lang,
  toggle,
  className,
}: {
  lang: Lang;
  toggle: (selected: Lang) => void;
  className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`${glassShell} inline-flex items-center gap-1 p-1 ${className}`}
      translate="no"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
      >
        <span className="absolute -inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0f4a9b]/[0.04] via-transparent to-[#C7A24A]/[0.05] opacity-0 group-hover/lang:opacity-100 transition-opacity duration-500" />
      </span>

      <div className="relative z-10 flex items-center">
        <LangSegment
          code="en"
          label="EN"
          active={lang === 'en'}
          onSelect={toggle}
          layoutId="header-lang-pill"
        />
        <LangSegment
          code="ar"
          label="عربي"
          active={lang === 'ar'}
          onSelect={toggle}
          layoutId="header-lang-pill"
        />
      </div>
    </motion.div>
  );
}

function HeaderMobileSwitcher({
  lang,
  toggle,
  className,
  open,
  setOpen,
  ref,
}: {
  lang: Lang;
  toggle: (selected: Lang) => void;
  className: string;
  open: boolean;
  setOpen: (v: boolean) => void;
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={ref} className={`relative shrink-0 notranslate ${className}`} translate="no">
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.96 }}
        className={`${glassShell} flex items-center gap-1.5 px-3 py-2 text-[#0f4a9b] text-xs font-extrabold`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span>{lang === 'en' ? 'EN' : 'عربي'}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={spring}>
          <ChevronDown className="h-3 w-3 text-[#0f4a9b]/50" strokeWidth={2.5} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-full mt-2 z-50 min-w-[104px] p-1 rounded-2xl overflow-hidden
              bg-white/70 backdrop-blur-2xl backdrop-saturate-150
              border border-white/80
              shadow-[0_12px_40px_rgba(15,74,155,0.16),inset_0_1px_0_rgba(255,255,255,0.9)]
              ring-1 ring-[#0f4a9b]/[0.06]"
          >
            {(['en', 'ar'] as const).map((code) => (
              <motion.button
                key={code}
                type="button"
                role="option"
                aria-selected={lang === code}
                onClick={() => {
                  toggle(code);
                  setOpen(false);
                }}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative w-full px-3 py-2.5 text-xs font-extrabold text-left rounded-xl transition-colors duration-200 ${
                  lang === code
                    ? 'text-white'
                    : 'text-slate-600 hover:text-[#0f4a9b]'
                }`}
              >
                {lang === code && (
                  <motion.span
                    layoutId="mobile-lang-pill"
                    className={activePill}
                    transition={spring}
                  />
                )}
                <span className="relative z-10">{code === 'en' ? 'EN' : 'عربي'}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LanguageSwitcher({
  className = '',
  variant = 'footer',
  mobile = false,
}: {
  className?: string;
  variant?: 'header' | 'footer';
  mobile?: boolean;
}) {
  const [lang, setLang] = useState<Lang>('en');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Read cookie client-side only — avoids SSR/client hydration mismatch
    if (document.cookie.includes('googtrans=/en/ar')) setLang('ar');

    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const toggle = (selected: Lang) => {
    if (selected === lang) return;
    setLang(selected);
    switchLang(selected);
  };

  if (variant === 'header' && mobile) {
    return (
      <HeaderMobileSwitcher
        lang={lang}
        toggle={toggle}
        className={className}
        open={open}
        setOpen={setOpen}
        ref={ref}
      />
    );
  }

  if (variant === 'header') {
    return (
      <HeaderDesktopSwitcher lang={lang} toggle={toggle} className={className} />
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1 p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 shadow-inner transition-all duration-300 notranslate ${className}`}
      translate="no"
    >
      <button
        type="button"
        onClick={() => toggle('en')}
        className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider transition-all duration-300 ${
          lang === 'en'
            ? 'bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8] text-white shadow-[0_3px_10px_rgba(15,74,155,0.3)] scale-[1.02]'
            : 'text-white/60 hover:text-white hover:bg-white/5'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => toggle('ar')}
        className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider transition-all duration-300 ${
          lang === 'ar'
            ? 'bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8] text-white shadow-[0_3px_10px_rgba(15,74,155,0.3)] scale-[1.02]'
            : 'text-white/60 hover:text-white hover:bg-white/5'
        }`}
      >
        عربي
      </button>
    </div>
  );
}
