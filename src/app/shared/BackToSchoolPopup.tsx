import { useEffect, useRef, useState } from 'react';

const ENROL_URL = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=' +
  encodeURIComponent('Hi Ustaad, I have a homework question.');
const AUTO_MS = 3800;
const SLIDE_COUNT = 3;

type BackToSchoolPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function BackToSchoolPopup({ open, onClose }: BackToSchoolPopupProps) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [entered, setEntered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const dx = useRef(0);
  const swiping = useRef(false);
  const resumeTimer = useRef<number | null>(null);

  const softPause = () => {
    setPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    // Resume autoplay shortly after the last touch/interaction (mobile taps were
    // permanently pausing the carousel before).
    resumeTimer.current = window.setTimeout(() => setPaused(false), AUTO_MS + 900);
  };

  const goTo = (i: number, user = false) => {
    const next = ((i % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT;
    setIdx(next);
    if (user) softPause();
  };

  useEffect(() => {
    if (!open) {
      setEntered(false);
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setIdx(0);
    setPaused(false);
    // Defer data-open so CSS entrance animations reliably run on mobile WebKit.
    const raf = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setEntered(true));
    });
    return () => {
      document.body.style.overflow = previousOverflow;
      window.cancelAnimationFrame(raf);
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, [open]);

  useEffect(() => {
    if (!open || paused) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const timer = window.setTimeout(() => goTo(idx + 1), AUTO_MS);
    return () => window.clearTimeout(timer);
  }, [open, paused, idx]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goTo(idx + 1, true);
      if (e.key === 'ArrowLeft') goTo(idx - 1, true);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, idx, onClose]);

  if (!open) return null;

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    dx.current = 0;
    swiping.current = true;
    softPause();
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!swiping.current || startX.current === null) return;
    dx.current = e.clientX - startX.current;
  };

  const onPointerUp = () => {
    if (!swiping.current) return;
    swiping.current = false;
    if (Math.abs(dx.current) > 40) {
      goTo(idx + (dx.current < 0 ? 1 : -1), true);
    }
    startX.current = null;
    dx.current = 0;
  };

  return (
    <>
      <style>{POPUP_CSS}</style>
      <div
        className="ust-pop"
        data-open={entered ? 'true' : 'false'}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ustPopTitle"
        aria-describedby="ustPopDesc"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          className="ust-card"
          role="document"
          data-entered={entered ? 'true' : 'false'}
        >
          <button
            className="ust-close"
            type="button"
            aria-label="Close promotional popup"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="ust-brand">
            <img
              className="ust-brand-logo"
              src="/ustaad-private-tutors-uae-logo.png"
              alt="Ustaad"
              width={168}
              height={42}
              loading="eager"
              decoding="async"
            />
          </div>

          <div
            className="ust-slides"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div
              className="ust-track"
              ref={trackRef}
              style={{ transform: `translateX(-${(100 / SLIDE_COUNT) * idx}%)` }}
            >
              {/* Slide 1 */}
              <section
                className="ust-slide"
                data-active={idx === 0 ? 'true' : 'false'}
                aria-roledescription="slide"
                aria-label="Slide 1 of 3: The offer"
              >
                <span className="offer-eyebrow a1" id="ustPopTitle">
                  Back to School · Enrolment Offer
                </span>
                <div className="offer-hero">
                  <div>
                    <span className="offer-big a2">10%</span>
                    <span className="offer-off a2">OFF</span>
                  </div>
                  <p className="offer-sub a3" id="ustPopDesc">
                    Your first enrolment with Ustaad
                  </p>
                  <div className="offer-urgency a4">
                    <span className="dot" aria-hidden="true" />
                    First 100 students · Valid till 30 September 2026
                  </div>
                </div>
                <div className="ust-cta-wrap a5" style={{ marginTop: 'auto' }}>
                  <a className="ust-cta" href={ENROL_URL} data-cta="enrol">
                    Claim my 10% discount
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </section>

              {/* Slide 2 */}
              <section
                className="ust-slide"
                data-active={idx === 1 ? 'true' : 'false'}
                aria-roledescription="slide"
                aria-label="Slide 2 of 3: Why Ustaad"
              >
                <div className="stagger" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 className="why-title">Not just any tutor. The right tutor.</h3>
                  <p className="why-lede">A quiet, considered approach to one-to-one tutoring in the UAE.</p>
                  <ul className="why-list">
                    <li className="why-item">
                      <span className="why-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
                        </svg>
                      </span>
                      <span className="why-text">
                        <b>Personalised tutor matching</b>
                        <span>Chosen around your child's subject, level and learning style.</span>
                      </span>
                    </li>
                    <li className="why-item">
                      <span className="why-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 5h10v10H4z" />
                          <path d="M14 9h6v10H8" />
                        </svg>
                      </span>
                      <span className="why-text">
                        <b>One-to-one attention</b>
                        <span>Every session shaped by your child's pace and goals.</span>
                      </span>
                    </li>
                    <li className="why-item">
                      <span className="why-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 6h16M4 12h16M4 18h10" />
                        </svg>
                      </span>
                      <span className="why-text">
                        <b>Curriculum-aligned support</b>
                        <span>British, IGCSE, A Level, IB, American and AP.</span>
                      </span>
                    </li>
                  </ul>
                  <p className="why-close">Matched to your child. Never assigned at random.</p>
                </div>
                <div className="ust-cta-wrap" style={{ marginTop: 'auto' }}>
                  <a className="ust-cta" href={ENROL_URL} data-cta="enrol">
                    Claim my 10% discount
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </section>

              {/* Slide 3 */}
              <section
                className="ust-slide"
                data-active={idx === 2 ? 'true' : 'false'}
                aria-roledescription="slide"
                aria-label="Slide 3 of 3: Trusted by families"
              >
                <div className="stagger" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 className="trust-title">Trusted by UAE families.</h3>
                  <div className="trust-grid">
                    <div className="trust-card">
                      <div className="rating-row">
                        <span className="rating-num">5.0</span>
                        <span className="stars" aria-label="5 out of 5 stars">
                          {[0, 1, 2, 3, 4].map((n) => (
                            <svg key={n} viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </span>
                      </div>
                      <span className="google-chip">
                        <span className="g-logo" aria-hidden="true" /> Google rating
                      </span>
                    </div>
                    <div className="trust-card">
                      <b>Personalised 1:1 tutoring</b>
                      <span>Considered, in person or online across the UAE.</span>
                    </div>
                  </div>
                  <div className="sibling-strip">
                    <span className="why-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="8" cy="9" r="3" />
                        <circle cx="17" cy="10" r="2.5" />
                        <path d="M2 20c1-3 3.5-4.5 6-4.5s5 1.5 6 4.5" />
                        <path d="M14 20c.6-2 2.2-3.2 3.8-3.2 1.6 0 3.1 1.1 3.7 3" />
                      </svg>
                    </span>
                    <div>
                      <b>Enrolling more than one child?</b>
                      <span>Ask about our sibling savings.</span>
                    </div>
                  </div>
                </div>
                <div className="ust-cta-wrap" style={{ marginTop: 'auto' }}>
                  <a className="ust-cta" href={ENROL_URL} data-cta="enrol">
                    Claim my 10% discount
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </section>
            </div>
          </div>

          <div className="ust-dots" role="tablist" aria-label="Popup slides">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                className="ust-dot"
                type="button"
                role="tab"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={idx === i ? 'true' : undefined}
                onClick={() => goTo(i, true)}
              />
            ))}
          </div>

          <a
            className="ust-wa"
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp"
            aria-label="Ask a homework question on WhatsApp for a free written solution in 15 minutes"
          >
            <span className="ust-wa-left">
              <span className="ust-wa-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.396.703 4.63 1.912 6.51L4 29l7.71-1.87A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm6.86 16.9c-.29.82-1.68 1.57-2.34 1.66-.6.08-1.35.11-2.18-.14-.5-.16-1.14-.37-1.97-.72-3.46-1.49-5.72-4.98-5.9-5.21-.17-.23-1.4-1.86-1.4-3.54s.88-2.51 1.2-2.85c.31-.34.68-.42.9-.42h.65c.21 0 .5-.08.78.6.29.7.99 2.42 1.08 2.6.09.17.15.38.03.61-.11.23-.17.37-.34.57-.17.2-.36.44-.51.59-.17.17-.35.36-.15.7.2.34.9 1.48 1.93 2.4 1.33 1.19 2.45 1.56 2.79 1.73.34.17.54.14.74-.09.2-.22.86-1 1.09-1.35.23-.34.46-.28.77-.17.31.11 1.99.94 2.33 1.11.34.17.57.26.65.4.09.14.09.8-.2 1.62z" />
                </svg>
              </span>
              <span className="ust-wa-text">
                <b>Got a homework question?</b>
                <span>Free written solution in 15 minutes</span>
              </span>
            </span>
            <span className="ust-wa-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

const POPUP_CSS = `
  .ust-pop{
    position:fixed;inset:0;
    display:flex;align-items:center;justify-content:center;
    padding:max(10px, env(safe-area-inset-top)) max(10px, env(safe-area-inset-right)) max(10px, env(safe-area-inset-bottom)) max(10px, env(safe-area-inset-left));
    background:rgba(8,20,42,.55);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    z-index:9999;
  }
  .ust-card{
    position:relative;
    width:min(460px, 100%);
    max-height:min(640px, calc(100dvh - 20px));
    background:#ffffff;
    border-radius:20px;
    box-shadow: 0 30px 80px -20px rgba(11,37,69,.35), 0 8px 24px -8px rgba(11,37,69,.2);
    overflow:hidden;
    display:flex;flex-direction:column;
    isolation:isolate;
    font-family: Inter, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
    color:#12203A;
    opacity:0;
    transform:translateY(14px) scale(.98);
  }
  .ust-card[data-entered="true"]{
    animation:ustCardIn .55s cubic-bezier(.2,.7,.2,1) both;
    -webkit-animation:ustCardIn .55s cubic-bezier(.2,.7,.2,1) both;
  }
  @keyframes ustCardIn{
    from{transform:translateY(14px) scale(.98);opacity:0;}
    to{transform:translateY(0) scale(1);opacity:1;}
  }
  @-webkit-keyframes ustCardIn{
    from{transform:translateY(14px) scale(.98);opacity:0;}
    to{transform:translateY(0) scale(1);opacity:1;}
  }
  .ust-close{
    position:absolute;top:10px;right:10px;
    width:36px;height:36px;border:0;border-radius:999px;
    background:rgba(255,255,255,.85);
    color:#0B2545;
    display:grid;place-items:center;cursor:pointer;
    z-index:5;
    transition:background .2s ease, transform .2s ease;
    box-shadow:0 2px 6px rgba(0,0,0,.08);
  }
  .ust-close:hover{background:#fff;transform:scale(1.05);}
  .ust-close svg{width:16px;height:16px;}
  .ust-brand{
    display:flex;align-items:center;justify-content:center;
    padding:14px 48px 4px;
  }
  .ust-brand-logo{
    height:42px;
    width:auto;
    max-width:180px;
    object-fit:contain;
    object-position:center;
    display:block;
  }
  .ust-slides{
    position:relative;
    flex:1 1 auto;
    overflow:hidden;
    touch-action:pan-y;
    min-height:0;
  }
  .ust-track{
    display:flex;
    width:300%;
    height:100%;
    transition:transform .55s cubic-bezier(.2,.7,.2,1);
    will-change:transform;
  }
  .ust-slide{
    width:calc(100% / 3);
    padding:14px 22px 8px;
    display:flex;flex-direction:column;
    align-items:center;
    text-align:center;
  }
  .ust-slide .why-list,
  .ust-slide .trust-grid,
  .ust-slide .sibling-strip,
  .ust-slide .ust-cta-wrap{
    width:100%;
    text-align:left;
  }
  .ust-slide .ust-cta-wrap{text-align:center;}
  .ust-slide .why-title,
  .ust-slide .why-lede,
  .ust-slide .trust-title,
  .ust-slide .why-close{text-align:center;}
  .offer-eyebrow{
    display:inline-flex;align-items:center;gap:8px;
    align-self:center;
    background:linear-gradient(90deg, rgba(212,169,74,.14), rgba(212,169,74,.05));
    color:#0B2545;
    border:1px solid rgba(212,169,74,.35);
    padding:6px 12px;border-radius:999px;
    font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;
    margin-top:8px;
  }
  .offer-eyebrow::before{
    content:"";width:6px;height:6px;border-radius:50%;
    background:#D4A94A;box-shadow:0 0 0 3px rgba(212,169,74,.2);
  }
  .offer-hero{
    text-align:center;
    padding:18px 4px 6px;
    position:relative;
  }
  .offer-hero::before,.offer-hero::after{
    content:"";position:absolute;top:50%;height:1px;width:22%;
    background:linear-gradient(90deg,transparent,rgba(11,37,69,.08),transparent);
  }
  .offer-hero::before{left:4px;}
  .offer-hero::after{right:4px;transform:scaleX(-1);}
  .offer-big{
    font-family: Georgia, "Playfair Display", serif;
    font-weight:700;
    font-size:clamp(56px, 16vw, 84px);
    line-height:1;
    background:linear-gradient(180deg,#0B2545 0%,#123566 55%, #D4A94A 130%);
    -webkit-background-clip:text;background-clip:text;color:transparent;
    letter-spacing:-.02em;
    display:inline-block;
  }
  .offer-off{
    display:inline-block;margin-left:6px;
    font-family: Georgia, "Playfair Display", serif;font-weight:600;
    color:#0B2545;
    font-size:clamp(20px,5vw,26px);
    letter-spacing:.02em;
  }
  .offer-sub{
    margin:8px 0 0;
    font-size:15px;color:#12203A;
    font-weight:500;
  }
  .offer-urgency{
    display:inline-flex;align-items:center;gap:8px;
    margin:12px auto 0;
    background:#FDF8EE;
    border:1px solid rgba(212,169,74,.35);
    color:#0B2545;
    padding:8px 14px;border-radius:999px;
    font-size:12.5px;font-weight:600;
  }
  .offer-urgency .dot{
    width:7px;height:7px;border-radius:50%;background:#D4A94A;
    box-shadow:0 0 0 0 rgba(212,169,74,.55);
    animation:ustPulseDot 2.2s ease-out infinite;
  }
  @keyframes ustPulseDot{
    0%{box-shadow:0 0 0 0 rgba(212,169,74,.55);}
    70%{box-shadow:0 0 0 8px rgba(212,169,74,0);}
    100%{box-shadow:0 0 0 0 rgba(212,169,74,0);}
  }
  .why-title{
    font-family: Georgia, "Playfair Display", serif;
    font-weight:600;
    font-size:22px;line-height:1.2;
    color:#0B2545;
    margin:10px 0 4px;
    text-align:center;
  }
  .why-lede{
    color:#5B6B85;
    font-size:13.5px;text-align:center;margin:0 0 12px;
  }
  .why-list{
    list-style:none;padding:0;margin:4px 0 8px;
    display:flex;flex-direction:column;gap:8px;
  }
  .why-item{
    display:flex;gap:10px;align-items:flex-start;
    padding:10px 12px;
    background:linear-gradient(180deg,#fff, #FAF7EF);
    border:1px solid rgba(11,37,69,.08);
    border-radius:14px;
  }
  .why-icon{
    flex:0 0 34px;height:34px;border-radius:10px;
    background:linear-gradient(135deg,#0B2545,#123566);
    color:#D4A94A;display:grid;place-items:center;
  }
  .why-icon svg{width:18px;height:18px;}
  .why-text b{display:block;font-size:14px;color:#0B2545;font-weight:600;letter-spacing:.01em;}
  .why-text span{font-size:12.5px;color:#5B6B85;line-height:1.4;}
  .why-close{
    text-align:center;
    font-family: Georgia, "Playfair Display", serif;
    font-weight:500;color:#0B2545;
    font-size:14px;font-style:italic;
    margin:6px 0 0;
  }
  .trust-title{
    font-family: Georgia, "Playfair Display", serif;
    font-weight:600;
    font-size:22px;line-height:1.2;
    color:#0B2545;
    margin:10px 0 10px;
    text-align:center;
  }
  .trust-grid{
    display:grid;grid-template-columns:1fr 1fr;gap:10px;
    margin-bottom:10px;
  }
  .trust-card{
    background:#fff;border:1px solid rgba(11,37,69,.08);border-radius:14px;
    padding:12px;display:flex;flex-direction:column;gap:4px;
  }
  .trust-card b{font-size:13px;color:#0B2545;font-weight:700;}
  .trust-card span{font-size:11.5px;color:#5B6B85;line-height:1.35;}
  .rating-row{display:flex;align-items:center;gap:6px;}
  .rating-num{font-family: Georgia, "Playfair Display", serif;font-size:20px;font-weight:700;color:#0B2545;line-height:1;}
  .stars{display:inline-flex;gap:2px;color:#D4A94A;}
  .stars svg{width:12px;height:12px;}
  .google-chip{
    display:inline-flex;align-items:center;gap:5px;
    font-size:10.5px;color:#5B6B85;font-weight:600;
    margin-top:2px;
  }
  .g-logo{
    width:12px;height:12px;border-radius:50%;
    background:conic-gradient(from -45deg,#4285F4 0 25%,#34A853 0 50%,#FBBC05 0 75%,#EA4335 0 100%);
    display:inline-block;
  }
  .sibling-strip{
    display:flex;gap:10px;align-items:center;
    padding:10px 12px;border-radius:14px;
    background:linear-gradient(90deg, rgba(212,169,74,.14), rgba(212,169,74,.05));
    border:1px solid rgba(212,169,74,.3);
    margin-bottom:6px;
  }
  .sibling-strip .why-icon{background:linear-gradient(135deg,#D4A94A,#E8C47A);color:#0B2545;}
  .sibling-strip b{display:block;font-size:13px;color:#0B2545;}
  .sibling-strip span{font-size:12px;color:#5B6B85;}
  .ust-cta-wrap{padding:6px 0 10px;}
  .ust-cta{
    display:flex;align-items:center;justify-content:center;gap:8px;
    width:100%;
    background:linear-gradient(180deg,#0B2545 0%,#123566 100%);
    color:#fff;
    border:0;
    padding:14px 18px;
    border-radius:14px;
    font-family:inherit;font-weight:700;font-size:15px;letter-spacing:.01em;
    cursor:pointer;
    box-shadow:0 10px 24px -10px rgba(11,37,69,.55), inset 0 1px 0 rgba(255,255,255,.08);
    transition:transform .15s ease, box-shadow .2s ease;
    position:relative;overflow:hidden;
    text-decoration:none;
  }
  .ust-cta::after{
    content:"";position:absolute;inset:0;
    background:linear-gradient(120deg, transparent 30%, rgba(212,169,74,.35) 50%, transparent 70%);
    transform:translateX(-120%);
    transition:transform .8s ease;
  }
  .ust-cta:hover{transform:translateY(-1px);}
  .ust-cta:hover::after{transform:translateX(120%);}
  .ust-cta svg{width:16px;height:16px;}
  .ust-dots{
    display:flex;justify-content:center;gap:8px;
    padding:2px 0 8px;
  }
  .ust-dot{
    width:7px;height:7px;border-radius:50%;
    background:rgba(11,37,69,.18);
    border:0;padding:0;cursor:pointer;
    transition:all .3s ease;
  }
  .ust-dot[aria-current="true"]{
    width:22px;border-radius:999px;
    background:linear-gradient(90deg,#0B2545,#D4A94A);
  }
  .ust-wa{
    display:flex;align-items:center;justify-content:space-between;gap:10px;
    padding:10px 16px max(12px, env(safe-area-inset-bottom));
    background:linear-gradient(180deg,#F6F9F5,#EEF6EC);
    border-top:1px solid rgba(37,211,102,.18);
    text-decoration:none;
    color:#12203A;
    transition:background .2s ease;
  }
  .ust-wa:hover{background:linear-gradient(180deg,#EEF6EC,#E4F1E0);}
  .ust-wa-left{display:flex;align-items:center;gap:10px;min-width:0;}
  .ust-wa-icon{
    flex:0 0 32px;height:32px;border-radius:9px;
    background:#25D366;color:#fff;
    display:grid;place-items:center;
    box-shadow:0 3px 8px rgba(37,211,102,.35);
  }
  .ust-wa-icon svg{width:16px;height:16px;}
  .ust-wa-text{min-width:0;text-align:left;}
  .ust-wa-text b{display:block;font-size:12.5px;color:#0B2545;font-weight:700;line-height:1.2;}
  .ust-wa-text span{display:block;font-size:11.5px;color:#3f5a6b;line-height:1.3;
    white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .ust-wa-arrow{color:#25D366;flex:0 0 auto;}
  .ust-wa-arrow svg{width:16px;height:16px;}
  @keyframes ustFadeUp{
    from{opacity:0;transform:translateY(10px);}
    to{opacity:1;transform:translateY(0);}
  }
  @keyframes ustPopIn{
    0%{opacity:0;transform:scale(.85);}
    60%{opacity:1;transform:scale(1.03);}
    100%{opacity:1;transform:scale(1);}
  }
  .ust-pop[data-open="true"] .a1{animation:ustFadeUp .5s .15s both;-webkit-animation:ustFadeUp .5s .15s both;}
  .ust-pop[data-open="true"] .a2{animation:ustPopIn .7s .35s both;-webkit-animation:ustPopIn .7s .35s both;transform-origin:center;-webkit-transform-origin:center;}
  .ust-pop[data-open="true"] .a3{animation:ustFadeUp .5s .55s both;-webkit-animation:ustFadeUp .5s .55s both;}
  .ust-pop[data-open="true"] .a4{animation:ustFadeUp .5s .7s both;-webkit-animation:ustFadeUp .5s .7s both;}
  .ust-pop[data-open="true"] .a5{animation:ustFadeUp .5s .85s both;-webkit-animation:ustFadeUp .5s .85s both;}
  .ust-slide[data-active="true"] .stagger>*{
    opacity:0;transform:translateY(8px);
    animation:ustFadeUp .45s ease forwards;
    -webkit-animation:ustFadeUp .45s ease forwards;
  }
  .ust-slide[data-active="true"] .stagger>*:nth-child(1){animation-delay:.1s;}
  .ust-slide[data-active="true"] .stagger>*:nth-child(2){animation-delay:.22s;}
  .ust-slide[data-active="true"] .stagger>*:nth-child(3){animation-delay:.34s;}
  .ust-slide[data-active="true"] .stagger>*:nth-child(4){animation-delay:.46s;}
  .ust-slide[data-active="true"] .stagger>*:nth-child(5){animation-delay:.58s;}
  /* Tablet / phones */
  @media (max-width:640px){
    .ust-card{
      width:100%;
      max-height:calc(100dvh - 20px);
      border-radius:18px;
    }
    .ust-brand{padding:12px 48px 2px;}
    .ust-brand-logo{height:38px;max-width:160px;}
    .ust-close{top:8px;right:8px;width:40px;height:40px;}
    .ust-slide{padding:10px 14px 6px;}
    .offer-eyebrow{
      font-size:10px;letter-spacing:.1em;padding:5px 10px;
      white-space:normal;line-height:1.25;text-align:center;
    }
    .offer-big{font-size:clamp(48px, 14vw, 68px);}
    .offer-sub{font-size:14px;}
    .offer-urgency{font-size:11.5px;padding:7px 12px;line-height:1.3;}
    .ust-cta{padding:13px 14px;font-size:14px;}
    .why-title,.trust-title{font-size:18px;}
    .why-lede{font-size:12.5px;margin-bottom:8px;}
    .why-item{padding:8px 10px;gap:8px;}
    .why-text b{font-size:13px;}
    .why-text span{font-size:12px;}
    .trust-grid{gap:8px;}
    .trust-card{padding:10px;}
    .ust-wa{
      padding:9px 12px max(10px, env(safe-area-inset-bottom));
      gap:8px;
    }
    .ust-wa-text b{font-size:12px;}
    .ust-wa-text span{
      white-space:normal;
      font-size:11px;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
      overflow:hidden;
    }
    .ust-dots{padding:4px 0 10px;gap:10px;}
    .ust-dot{width:8px;height:8px;}
  }

  /* Small phones */
  @media (max-width:400px){
    .ust-pop{padding:8px;align-items:flex-end;}
    .ust-card{
      width:100%;
      max-height:calc(100dvh - 16px);
      border-radius:16px 16px 12px 12px;
    }
    .ust-brand{padding:10px 44px 2px;}
    .ust-brand-logo{height:34px;max-width:148px;}
    .offer-eyebrow{font-size:9px;letter-spacing:.08em;padding:5px 9px;}
    .offer-big{font-size:clamp(44px, 13vw, 58px);}
    .offer-hero{padding:12px 4px 4px;}
    .offer-sub{font-size:13px;}
    .offer-urgency{font-size:11px;padding:6px 10px;}
    .ust-cta{padding:12px 12px;font-size:13.5px;}
    .ust-cta svg{width:14px;height:14px;}
    .sibling-strip{padding:8px 10px;}
    .sibling-strip b{font-size:12px;}
    .sibling-strip span{font-size:11px;}
  }

  /* Short screens */
  @media (max-height:700px){
    .why-item{padding:8px 10px;}
    .why-icon{flex-basis:30px;height:30px;}
    .offer-hero{padding:10px 4px 4px;}
    .offer-big{font-size:clamp(44px, 12vw, 60px);}
    .why-title,.trust-title{font-size:18px;margin-top:6px;}
    .ust-slide{padding-top:8px;}
  }
  @media (max-height:620px){
    .why-lede{display:none;}
    .why-text span{display:none;}
    .why-item{padding:8px 10px;}
    .offer-eyebrow{font-size:9px;margin-top:4px;}
    .offer-sub{font-size:13px;}
    .ust-cta{padding:11px 12px;font-size:13px;}
    .trust-card span{display:none;}
    .why-close{display:none;}
  }

  @media (min-width:641px){
    .ust-card{width:min(500px,100%);border-radius:24px;}
  }
  @media (max-height:520px) and (orientation:landscape){
    .ust-pop{padding:8px;align-items:center;}
    .ust-card{width:min(680px,100%);max-height:calc(100dvh - 16px);}
    .offer-hero{padding:4px;}
    .offer-big{font-size:48px;}
    .why-list{display:grid;grid-template-columns:1fr 1fr;}
    .why-close{display:none;}
    .ust-brand{padding:8px 44px 0;}
    .ust-brand-logo{height:32px;max-width:140px;}
  }
  @media (prefers-reduced-motion: reduce){
    .ust-card,.ust-card[data-entered="true"],.ust-pop[data-open="true"] .a1,.ust-pop[data-open="true"] .a2,
    .ust-pop[data-open="true"] .a3,.ust-pop[data-open="true"] .a4,.ust-pop[data-open="true"] .a5,
    .ust-slide[data-active="true"] .stagger>*{
      animation:none !important;-webkit-animation:none !important;
      opacity:1 !important;transform:none !important;
    }
    .ust-track{transition:none !important;}
    .offer-urgency .dot{animation:none !important;}
  }
`;
