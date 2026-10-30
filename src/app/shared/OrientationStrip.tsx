import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

const HIDDEN_PATHS = ['/contact'];

interface LineItem {
  id: string;
  type: 'headline' | 'detail';
  text: string;
  durationMs: number;
}

const LINES: LineItem[] = [
  {
    id: 'line-1',
    type: 'headline',
    text: 'A Little Extra in Your First Lesson',
    durationMs: 3200,
  },
  {
    id: 'line-2',
    type: 'detail',
    text: 'Enjoy a complimentary 15-minute orientation with your first 1-hour paid session.',
    durationMs: 4000,
  },
];

export default function OrientationStrip() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const location = useLocation();
  const timerRef = useRef<number | null>(null);

  const isHiddenPage = HIDDEN_PATHS.some(
    p => location.pathname === p || location.pathname.startsWith(p + '/')
  );
  const isNoDotsPage = location.pathname.startsWith('/a-level-tutor-al-ain');

  // Reset dismissal on route change so strip stays accessible
  useEffect(() => {
    setIsDismissed(false);
  }, [location.pathname]);

  const shouldShow = !isDismissed && !isHiddenPage;

  // Manage body class for layout spacing
  useEffect(() => {
    if (shouldShow) {
      document.body.classList.add('has-us-strip');
    } else {
      document.body.classList.remove('has-us-strip');
    }
    return () => {
      document.body.classList.remove('has-us-strip');
    };
  }, [shouldShow]);

  // Sequential animation timer: Line 1 first -> after delay Line 2 -> loops smoothly
  useEffect(() => {
    if (!shouldShow || isPaused) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const currentDuration = LINES[activeIdx].durationMs;
    timerRef.current = window.setTimeout(() => {
      setActiveIdx(prev => (prev + 1) % LINES.length);
    }, currentDuration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [shouldShow, isPaused, activeIdx]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  const handleSelectLine = (index: number) => {
    setActiveIdx(index);
  };

  if (!shouldShow) {
    return null;
  }

  const current = LINES[activeIdx];

  return (
    <aside
      className="us-strip"
      id="usStrip"
      role="region"
      aria-label="Complimentary 15-Minute Orientation Announcement"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Animated continuous gold beam along top edge */}
      <div className="us-shimmer-beam" aria-hidden="true" />

      <div className="us-inner">
        {/* Centered Cluster: Academic Emblem directly beside Animated Text */}
        <div className="us-center-cluster">
          {/* Academic Emblem Badge with Breathing Pulse */}
          <div className="us-emblem-wrapper" aria-hidden="true">
            <div className="us-icon">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="us-icon-svg">
                <defs>
                  <linearGradient id="usGoldCap" x1="4" y1="6" x2="28" y2="25" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F5DE98" />
                    <stop offset="45%" stopColor="#C7A24A" />
                    <stop offset="100%" stopColor="#8F6F1E" />
                  </linearGradient>
                </defs>

                {/* Mortarboard Diamond Top */}
                <path
                  d="M16 6.5L4 12.5L16 18.5L28 12.5L16 6.5Z"
                  fill="url(#usGoldCap)"
                  stroke="#FFF1CA"
                  strokeWidth="0.85"
                  strokeLinejoin="round"
                />

                {/* Cap Crown Arc */}
                <path
                  d="M8.5 15.2V19.8C8.5 22.6 11.8 24.8 16 24.8C20.2 24.8 23.5 22.6 23.5 19.8V15.2"
                  stroke="url(#usGoldCap)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                {/* Academic Tassel */}
                <path
                  d="M26 13.5V20"
                  stroke="#F5DE98"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <circle cx="26" cy="21" r="1.1" fill="#FFEAA8" />

                {/* Central Excellence Sparkle with Micro-Rotation */}
                <path
                  d="M16 9.8L16.6 11.8L18.6 12.3L17.1 13.6L17.5 15.6L16 14.6L14.5 15.6L14.9 13.6L13.4 12.3L15.4 11.8L16 9.8Z"
                  fill="#FFFFFF"
                  className="us-sparkle-star"
                />
              </svg>
            </div>
            {/* Subtle live radar ping ring */}
            <span className="us-ping-ring" />
          </div>

          {/* Dynamic Animated Content Ticker */}
          <div className="us-ticker-wrapper" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8, filter: 'blur(3px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(3px)' }}
                transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                className="us-line-slide"
              >
                {current.type === 'headline' ? (
                  <span className="us-headline-text">
                    {current.text}
                  </span>
                ) : (
                  <p className="us-detail-text">
                    <span className="us-detail--desktop">
                      Enjoy a <strong className="us-gold-accent">complimentary 15-minute orientation</strong> with your first 1-hour paid session.
                    </span>
                    <span className="us-detail--mobile">
                      Your first lesson includes a <strong className="us-gold-accent">free 15 minute orientation</strong>
                    </span>
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Minimalist 2-Step Line Progress Indicator */}
            {!isNoDotsPage && (
              <div className="us-dots" role="tablist" aria-label="Line selector">
                {LINES.map((line, idx) => (
                  <button
                    key={line.id}
                    type="button"
                    role="tab"
                    aria-selected={activeIdx === idx}
                    aria-label={`Show ${idx === 0 ? 'headline' : 'orientation details'}`}
                    onClick={() => handleSelectLine(idx)}
                    className={`us-dot ${activeIdx === idx ? 'us-dot--active' : ''}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          className="us-close"
          type="button"
          aria-label="Dismiss orientation banner"
          onClick={handleDismiss}
        >
          <X className="w-3.5 h-3.5" strokeWidth={2.4} />
        </button>
      </div>

      <style>{`
        /* ============================================================
           LUXURY ANIMATED ORIENTATION STRIP — USTAAD UAE BRANDING
           ============================================================ */

        .us-strip {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9989;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-top: 1px solid rgba(199, 162, 74, 0.38);
          box-shadow: 
            0 -8px 26px rgba(10, 31, 61, 0.07), 
            0 -1px 0 rgba(255, 255, 255, 0.9) inset;
          padding-bottom: env(safe-area-inset-bottom, 0px);
          animation: us-slide-up 350ms cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        @keyframes us-slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* ── Continuous Luminous Gold Beam ── */
        .us-shimmer-beam {
          position: absolute;
          top: 0;
          left: -40%;
          width: 40%;
          height: 2px;
          background: linear-gradient(
            90deg, 
            transparent 0%, 
            rgba(245, 222, 152, 0.5) 20%, 
            #F5DE98 50%, 
            #C7A24A 80%, 
            transparent 100%
          );
          filter: drop-shadow(0 0 6px #C7A24A);
          animation: us-beam-glide 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          pointer-events: none;
        }

        @keyframes us-beam-glide {
          0% {
            left: -40%;
          }
          50%, 100% {
            left: 110%;
          }
        }

        /* ── Container Layout ── */
        .us-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 8px 50px 8px 24px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        /* ── Left-Aligned Cluster: Emblem directly beside Animated Text ── */
        .us-center-cluster {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          min-width: 0;
        }

        /* ── Academic Emblem & Pulse ── */
        .us-emblem-wrapper {
          position: relative;
          flex: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .us-icon {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background: linear-gradient(135deg, #07152b 0%, #0a1f3d 40%, #0f4a9b 100%);
          border: 1px solid rgba(199, 162, 74, 0.55);
          box-shadow: 
            0 3px 10px rgba(10, 31, 61, 0.2), 
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
          display: grid;
          place-items: center;
          position: relative;
          z-index: 2;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
        }

        .us-inner:hover .us-icon {
          transform: scale(1.06) translateY(-1px);
          box-shadow: 
            0 6px 16px rgba(199, 162, 74, 0.35), 
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .us-icon-svg {
          width: 18px;
          height: 18px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.28));
        }

        /* Sparkle star micro-rotation */
        .us-sparkle-star {
          transform-origin: 16px 12.7px;
          animation: us-sparkle 3.6s ease-in-out infinite;
        }

        @keyframes us-sparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.3) rotate(90deg);
            opacity: 1;
            filter: drop-shadow(0 0 3px #ffffff);
          }
        }

        .us-ping-ring {
          position: absolute;
          inset: -3px;
          border-radius: 12px;
          border: 1px solid rgba(199, 162, 74, 0.6);
          opacity: 0;
          animation: us-ping 3.2s cubic-bezier(0, 0, 0.2, 1) infinite;
          pointer-events: none;
        }

        @keyframes us-ping {
          0% {
            transform: scale(0.92);
            opacity: 0.8;
          }
          40% {
            transform: scale(1.22);
            opacity: 0;
          }
          100% {
            transform: scale(1.22);
            opacity: 0;
          }
        }

        /* ── Dynamic Ticker Container ── */
        .us-ticker-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          min-width: 0;
        }

        .us-line-slide {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-align: left;
          min-width: 0;
        }

        /* ── Line 1: Headline Typography ── */
        .us-headline-text {
          font-family: var(--font-serif), "Fraunces", Georgia, serif;
          font-size: 14px;
          font-weight: 700;
          color: #0a1f3d;
          letter-spacing: -0.012em;
          line-height: 1.25;
          white-space: nowrap;
        }

        /* ── Line 2: Detail Description Typography ── */
        .us-detail-text {
          margin: 0;
          font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
          font-size: 13px;
          color: #334155;
          line-height: 1.25;
          font-weight: 500;
          white-space: nowrap;
        }

        .us-gold-accent {
          color: #8c6a1e;
          font-weight: 700;
        }

        .us-detail--desktop {
          display: inline;
        }

        .us-detail--mobile {
          display: none;
        }

        /* ── Slide Progress Indicator Dots ── */
        .us-dots {
          display: flex;
          align-items: center;
          gap: 5px;
          flex: none;
        }

        .us-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #cbd5e1;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .us-dot:hover {
          background: #94a3b8;
          transform: scale(1.2);
        }

        .us-dot--active {
          width: 14px;
          background: linear-gradient(90deg, #C7A24A 0%, #A8892A 100%);
          box-shadow: 0 1px 4px rgba(199, 162, 74, 0.4);
        }

        /* ── Dismiss Button ── */
        .us-close {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 26px;
          height: 26px;
          border: 1px solid transparent;
          border-radius: 50%;
          background: transparent;
          color: #64748b;
          cursor: pointer;
          display: grid;
          place-items: center;
          padding: 0;
          transition: all 0.18s ease;
        }

        .us-close:hover {
          background: rgba(15, 74, 155, 0.08);
          border-color: rgba(15, 74, 155, 0.15);
          color: #0a1f3d;
          transform: translateY(-50%) rotate(90deg);
        }

        .us-close:focus-visible {
          outline: 2px solid #C7A24A;
          outline-offset: 1px;
        }

        /* ── Body & Floating Widget Coordination ── */
        body.has-us-strip {
          padding-bottom: 46px;
        }
        body.has-us-strip #ask-widget {
          bottom: max(54px, calc(env(safe-area-inset-bottom, 0px) + 54px)) !important;
        }

        /* ============================================================
           RESPONSIVE BREAKPOINTS (Tablets & Mobile)
           ============================================================ */

        @media (max-width: 768px) {
          .us-inner {
            padding: 6px 36px 6px 14px;
            justify-content: flex-start;
          }
          .us-center-cluster {
            gap: 10px;
            justify-content: flex-start;
          }
          .us-headline-text {
            font-size: 13px;
          }
          .us-detail-text {
            font-size: 12px;
          }
          .us-close {
            right: 8px;
          }
        }

        @media (max-width: 639px) {
          body.has-us-strip {
            padding-bottom: 46px;
          }
          body.has-us-strip #ask-widget {
            bottom: max(54px, calc(env(safe-area-inset-bottom, 0px) + 54px)) !important;
          }

          .us-inner {
            padding: 6px 30px 6px 10px;
            justify-content: flex-start;
          }

          .us-center-cluster {
            gap: 8px;
            justify-content: flex-start;
          }

          .us-icon {
            width: 26px;
            height: 26px;
            border-radius: 8px;
          }
          .us-icon-svg {
            width: 15px;
            height: 15px;
          }

          .us-ticker-wrapper {
            gap: 8px;
          }

          .us-headline-text {
            font-size: 12px;
            white-space: normal;
            line-height: 1.2;
          }

          .us-detail-text {
            font-size: 11px;
            white-space: normal;
            line-height: 1.25;
          }

          .us-detail--desktop {
            display: none !important;
          }

          .us-detail--mobile {
            display: inline !important;
          }

          .us-dots {
            display: none;
          }

          .us-close {
            right: 5px;
            width: 22px;
            height: 22px;
          }
        }

        /* Very narrow screens (≤360px) */
        @media (max-width: 359px) {
          .us-headline-text {
            font-size: 11px;
          }
          .us-detail-text {
            font-size: 10px;
          }
        }

        /* Respect accessibility preference */
        @media (prefers-reduced-motion: reduce) {
          .us-shimmer-beam,
          .us-ping-ring,
          .us-sparkle-star {
            animation: none !important;
          }
          .us-strip {
            animation: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
