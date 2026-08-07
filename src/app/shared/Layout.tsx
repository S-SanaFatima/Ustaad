import { ReactNode, useState, useEffect } from 'react';
import { motion } from 'motion/react';

// Skip entrance animation on the very first page load (SSR hydration) to prevent
// the flash: pre-rendered HTML visible → motion snaps to opacity:0 → fades back in.
// After first mount this becomes false so SPA navigations animate normally.
let isFirstMount = true;
// Google Translate banner suppression styles are inlined below
import TrustBar from './TrustBar';
import Header from './Header';
import Footer from './Footer';
import FloatingWidget from './FloatingWidget';
import { observeGoogleTranslateFields, patchGoogleTranslateFields } from '../../lib/googleTranslate';

interface LayoutProps {
  children: ReactNode;
  floatingCTAs?: ReactNode;
  headerLogoAlt?: string;
  footerLogoAlt?: string;
  floatingWhatsappAlt?: string;
}

export default function Layout({ children, floatingCTAs, headerLogoAlt, footerLogoAlt, floatingWhatsappAlt }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [skipEntrance, setSkipEntrance] = useState(isFirstMount);

  useEffect(() => {
    if (isFirstMount) {
      isFirstMount = false;
      setSkipEntrance(false);
    }
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    const hash = window.location.hash;
    if (hash) {
      // Delay slightly so the target element is rendered before scrolling
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Patch translate fields after hydration — observer during hydrate caused DOM drift → wrong page.
    let translateTimer: ReturnType<typeof setTimeout> | undefined;
    let stopObservingTranslate: (() => void) | undefined;

    const startTranslateObserver = () => {
      stopObservingTranslate = observeGoogleTranslateFields();
    };

    const loadGoogleTranslate = () => {
      if (document.getElementById('gt-script')) return;

      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'ar', autoDisplay: false },
          'google_translate_element'
        );
        patchGoogleTranslateFields(document);
      };
      const s = document.createElement('script');
      s.id = 'gt-script';
      s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      s.async = true;
      document.body.appendChild(s);
    };

    const scheduleTranslate = () => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(loadGoogleTranslate, { timeout: 4000 });
      } else {
        translateTimer = setTimeout(loadGoogleTranslate, 2500);
      }
    };
    scheduleTranslate();
    translateTimer = setTimeout(startTranslateObserver, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      stopObservingTranslate?.();
      if (translateTimer) clearTimeout(translateTimer);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-[#f8fafc] font-sans text-gray-900 overflow-x-hidden selection:bg-blue-100 transition-padding duration-300 ${scrolled ? 'pt-14 lg:pt-16' : 'pt-20 lg:pt-[88px]'}`}>
      {/* Transparent container to allow premium frosted-glass blur scrolling */}
      <div className="fixed top-0 left-0 right-0 z-[9998] bg-transparent pointer-events-none" style={{ height: scrolled ? '64px' : '88px' }} />
      <TrustBar scrolled={scrolled} />
      <Header scrolled={scrolled} logoAlt={headerLogoAlt} />
      <motion.main
        initial={skipEntrance ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      >
        {children}
      </motion.main>
      <Footer logoAlt={footerLogoAlt} />
      {floatingCTAs ?? <FloatingWidget />}
      <div id="google_translate_element" style={{ display: 'none' }} />
      <style>{`
        html { scroll-behavior: smooth; }
        .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
        body { top: 0 !important; }
        .skiptranslate { display: none !important; }
      `}</style>
    </div>
  );
}
