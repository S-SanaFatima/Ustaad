import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const HIDDEN_PATHS = ['/contact', '/privacy', '/terms', '/sitemap'];
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20book%20my%20first%2030-minute%20session%20with%20a%20subject%20and%20curriculum-fit%20tutor.';

function fireGA(event: string, path: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event, { page_path: path });
  }
}

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

type WidgetState = 'hidden' | 'collapsed' | 'expanded' | 'dismissed';

export default function FloatingWidget() {
  const location = useLocation();
  const [widgetState, setWidgetState] = useState<WidgetState>('hidden');
  const [pulseDone, setPulseDone] = useState(false);
  const [viewFired, setViewFired] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const path = location.pathname;
  const shouldShow = !HIDDEN_PATHS.some(p => path === p || path.startsWith(p + '/'));

  // Mount: check sessionStorage, set initial state
  useEffect(() => {
    if (!shouldShow) return;
    if (typeof window !== 'undefined' && sessionStorage.getItem('ask-widget-dismissed') === '1') {
      setWidgetState('dismissed');
      return;
    }
    setWidgetState('collapsed');
    // Pulse runs for 4s (2 iterations × 2s), then we mark it done to stop animation
    const t = setTimeout(() => setPulseDone(true), 4100);
    return () => clearTimeout(t);
  }, [shouldShow]);

  // Fire view event once when widget becomes visible
  useEffect(() => {
    if (widgetState === 'collapsed' && !viewFired) {
      setViewFired(true);
      fireGA('ask_widget_view', path);
    }
  }, [widgetState, viewFired, path]);

  // Hero CTA overlap detection — hide widget when it would sit on top of the hero button (desktop only)
  useEffect(() => {
    if (widgetState === 'hidden' || widgetState === 'dismissed' || !shouldShow) return;
    const widget = document.getElementById('ask-widget');
    function checkOverlap() {
      // On mobile screens (< 768px), never hide the widget
      if (window.innerWidth < 768) {
        if (widget) { widget.style.opacity = ''; widget.style.pointerEvents = ''; }
        return;
      }
      const heroCta = document.querySelector('.hero-cta');
      if (!heroCta || !widget) return;
      const hr = heroCta.getBoundingClientRect();
      const wr = widget.getBoundingClientRect();
      const overlaps = !(hr.right < wr.left || hr.left > wr.right || hr.bottom < wr.top || hr.top > wr.bottom);
      widget.style.opacity = overlaps ? '0' : '';
      widget.style.pointerEvents = overlaps ? 'none' : '';
    }
    window.addEventListener('scroll', checkOverlap, { passive: true });
    window.addEventListener('resize', checkOverlap);
    checkOverlap();
    return () => {
      window.removeEventListener('scroll', checkOverlap);
      window.removeEventListener('resize', checkOverlap);
    };
  }, [widgetState, shouldShow]);

  // Escape key closes expanded card
  useEffect(() => {
    if (widgetState !== 'expanded') return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setWidgetState('collapsed');
        triggerRef.current?.focus();
        fireGA('ask_widget_close', path);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [widgetState, path]);

  if (!shouldShow || widgetState === 'hidden' || widgetState === 'dismissed') return null;

  const handleExpand = () => {
    setWidgetState('expanded');
    fireGA('ask_widget_expand', path);
  };

  const handleCollapse = () => {
    setWidgetState('collapsed');
    triggerRef.current?.focus();
    fireGA('ask_widget_close', path);
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined') sessionStorage.setItem('ask-widget-dismissed', '1');
    setWidgetState('dismissed');
    fireGA('ask_widget_dismiss', path);
  };

  const isExpanded = widgetState === 'expanded';

  return (
    <>
      {/* Mobile overlay when expanded */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-[9989] md:hidden"
          style={{ background: 'rgba(0,0,0,0.3)' }}
          onClick={handleCollapse}
          aria-hidden="true"
        />
      )}

      <div
        id="ask-widget"
        aria-live="polite"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9990,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'opacity 150ms ease',
        }}
      >
        {/* Expanded card */}
        {isExpanded && (
          <div
            id="ask-widget-card"
            role="dialog"
            aria-labelledby="ask-widget-title"
            aria-modal="false"
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              width: '320px',
              minHeight: '180px',
              padding: '20px',
              background: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 12px 32px rgba(11, 31, 58, 0.16)',
              animation: 'ask-slide-up 250ms ease',
            }}
            className="max-md:fixed max-md:top-1/2 max-md:left-1/2 max-md:bottom-auto max-md:right-auto max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:w-[calc(100%-32px)] max-md:max-w-[340px] max-md:z-[9991]"
          >
            <button
              onClick={handleCollapse}
              aria-label="Close"
              style={{ position: 'absolute', top: 12, right: 12, width: 24, height: 24, border: 'none', background: 'transparent', fontSize: 20, cursor: 'pointer', color: '#555', lineHeight: 1 }}
            >
              ×
            </button>
            <h3 id="ask-widget-title" style={{ fontSize: 16, fontWeight: 700, color: '#0b1f3a', margin: '0 0 8px' }}>
              Book your first 30-minute session
            </h3>
            <p style={{ fontSize: 14, color: '#333', margin: '0 0 16px', lineHeight: 1.4 }}>
              Meet a subject and curriculum-fit tutor who will pinpoint the gaps and map the next steps.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener"
              aria-label="Open WhatsApp to book a session"
              onClick={() => fireGA('ask_widget_whatsapp_click', path)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#25d366', color: '#fff', padding: '12px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, transition: 'background-color 150ms ease' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#128c7e')}
              onMouseLeave={e => (e.currentTarget.style.background = '#25d366')}
              onFocus={e => (e.currentTarget.style.outline = '2px solid #c17b2f')}
              onBlur={e => (e.currentTarget.style.outline = '')}
            >
              <WhatsappIcon />
              Book on WhatsApp
            </a>
            <a
              href="/contact#form"
              onClick={() => fireGA('ask_widget_form_click', path)}
              style={{ display: 'block', textAlign: 'center', marginTop: 16, fontSize: 13, color: '#0b1f3a', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
            >
              Prefer a form? Request a session →
            </a>
            <p style={{ margin: '16px 0 0', fontSize: 11, color: '#666', textAlign: 'center' }}>
              30 minutes with a UAE subject specialist. See the gaps, plan the next steps.
            </p>
          </div>
        )}

        {/* Collapsed: pill + circle (only shown when not expanded) */}
        {!isExpanded && (
          <>
            {/* Pill label — all screen sizes */}
            <button
              onClick={handleExpand}
              className="block"
              style={{ padding: '8px 14px', borderRadius: 24, background: '#ffffff', color: '#0b1f3a', fontSize: 13, fontWeight: 500, boxShadow: '0 4px 12px rgba(11,31,58,0.12)', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              Book a free session
            </button>

            {/* Circle trigger with dismiss X */}
            <div style={{ position: 'relative' }}>
              <button
                ref={triggerRef}
                onClick={handleExpand}
                aria-label="Book a free session"
                aria-expanded={false}
                aria-controls="ask-widget-card"
                className={pulseDone ? '' : 'ask-widget-pulse'}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: '#25d366',
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(37,211,102,0.35)',
                  transition: 'transform 150ms ease, box-shadow 150ms ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 16px rgba(37,211,102,0.45)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(37,211,102,0.35)'; }}
                onFocus={e => { (e.currentTarget as HTMLElement).style.outline = '2px solid #c17b2f'; (e.currentTarget as HTMLElement).style.outlineOffset = '3px'; }}
                onBlur={e => { (e.currentTarget as HTMLElement).style.outline = ''; (e.currentTarget as HTMLElement).style.outlineOffset = ''; }}
              >
                <WhatsappIcon />
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes ask-slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes ask-pulse {
          0%,100% { box-shadow: 0 4px 12px rgba(37,211,102,0.35); }
          50%      { box-shadow: 0 4px 12px rgba(37,211,102,0.35), 0 0 0 12px rgba(37,211,102,0.15); }
        }
        .ask-widget-pulse { animation: ask-pulse 2s ease-in-out 2; }
        @media (prefers-reduced-motion: reduce) {
          .ask-widget-pulse { animation: none !important; }
          #ask-widget-card  { animation: none !important; }
        }
        @media (max-width: 767px) {
          #ask-widget { bottom: 16px !important; right: 16px !important; opacity: 1 !important; pointer-events: auto !important; }
        }
      `}</style>
    </>
  );
}
