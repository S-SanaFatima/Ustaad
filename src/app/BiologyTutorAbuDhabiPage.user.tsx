import { useState, useEffect, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  MapPin, Phone, Mail, ArrowRight, ChevronDown, ChevronLeft, ChevronRight,
  Star, CheckCircle2, X, MessageCircle, BookOpen, Calculator, PenTool,
  ShieldCheck, ClipboardCheck, Brain, Target, FlaskConical, Timer, FileSearch, Wrench
} from 'lucide-react';
import { Layout, GoldButton, FinalCTA, StatsBar, SchoolsMarquee } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, reviewsSchema } from './shared/schemas';

const BOOKING = "/contact#form";

const BioGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'bgrid-l' : 'bgrid-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(15,74,155,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'bgrid-l' : 'bgrid-d'})`} />
  </svg>
);

type Step = { n: string; icon: ReactNode; title: string; desc: string };
type Challenge = { notation: string; icon: ReactNode; title: string; problem: string };

function ChallengesAccordion({ challenges }: { challenges: Challenge[] }) {
  const [active, setActive] = useState<number>(-1);
  return (
    <div className="relative">
      <div className="flex flex-col gap-[10px]">
        {challenges.map((c, i) => {
          const isOpen = active === i;
          return (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: 40, height: 40, minWidth: 40, minHeight: 40,
                    background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                    color: isOpen ? '#fff' : '#0f4a9b',
                    transition: 'background 300ms ease, color 300ms ease',
                    cursor: 'pointer', border: 'none', boxShadow: 'inset 0 0 0 2px #fff'
                  }}
                >
                  <span className="flex items-center justify-center w-full h-full">{c.icon}</span>
                </button>
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex-1 flex items-center gap-3 text-left rounded-full border"
                  style={{
                    minHeight: '48px', padding: '8px 14px', cursor: 'pointer',
                    background: 'transparent', borderColor: 'rgba(15,74,155,0.15)'
                  }}
                >
                  <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{c.title}</span>
                  <span
                    className="flex-shrink-0 flex items-center justify-center animate-all duration-300"
                    style={{
                      width: 32, height: 32, minWidth: 32, minHeight: 32, borderRadius: '50%',
                      background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                      color: isOpen ? '#fff' : '#0f4a9b',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="ml-[52px] mt-1">
                      <div className="rounded-2xl px-4 py-3" style={{ background: 'linear-gradient(135deg, rgba(15,74,155,0.06) 0%, rgba(15,74,155,0.02) 100%)', border: '1px solid rgba(15,74,155,0.12)', backdropFilter: 'blur(8px)' }}>
                        <p className="text-[13px] text-[#3a4f6e] leading-relaxed">{c.problem}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const PARENT_REVIEWS = [
  { name: 'Elyazia Alkaabi', initials: 'EA', location: 'Abu Dhabi, UAE', text: 'He is a very good teacher, he makes the lessons easier to understand and has good ways of getting the information in my mind easily.' },
];

function ParentsSlider() {
  const [index, setIndex] = useState(0);
  const count = PARENT_REVIEWS.length;
  const go = (i: number) => setIndex(((i % count) + count) % count);

  useEffect(() => {
    if (count <= 1) return;
    const t = setInterval(() => setIndex(p => (p + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count]);

  const r = PARENT_REVIEWS[index];

  return (
    <div>
      <div className="relative min-h-[230px] sm:min-h-[210px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl p-5 sm:p-6 lg:p-8 overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
          >
            <div className="absolute top-3 left-4 text-[90px] font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(240,201,106,0.12)', fontFamily: 'Georgia, serif' }}>“</div>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.06) 100%)' }} />
            <div className="relative z-10">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="h-3.5 w-3.5 fill-[#f0c96a] text-[#f0c96a]" />
                ))}
              </div>
              <p className="text-white/90 text-[15px] sm:text-[16px] leading-[1.7] mb-5 font-medium text-justify">{r.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-extrabold text-white shrink-0 border-2 border-white/20 notranslate"
                  translate="no"
                  style={{ background: 'linear-gradient(135deg, rgba(240,201,106,0.3), rgba(199,162,74,0.5))' }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-white font-extrabold text-[14px] leading-tight notranslate" translate="no">{r.name}</p>
                  <p className="text-blue-200/70 text-[11px] mt-0.5 notranslate" translate="no">{r.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {count > 1 && (
        <div className="flex items-center justify-center gap-3 mt-5">
          <button onClick={() => go(index - 1)} aria-label="Previous review" className="flex items-center justify-center w-9 h-9 rounded-full transition-all hover:-translate-x-0.5" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}><ChevronLeft className="h-4 w-4 text-white" /></button>
          <div className="flex items-center gap-2">
            {PARENT_REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to review ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 22 : 8,
                  height: 8,
                  background: i === index ? 'linear-gradient(92deg,#f0c96a,#fde68a)' : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>
          <button onClick={() => go(index + 1)} aria-label="Next review" className="flex items-center justify-center w-9 h-9 rounded-full transition-all hover:translate-x-0.5" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}><ChevronRight className="h-4 w-4 text-white" /></button>
        </div>
      )}
    </div>
  );
}

const Eyebrow = ({ icon, text, dark = false }: { icon: React.ReactNode; text: string; dark?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-5 border ${dark ? 'bg-white/5 border-white/15 text-blue-200' : 'bg-[#0f4a9b]/5 border-[#0f4a9b]/15 text-[#0f4a9b]'}`}>
    {icon}{text}
  </div>
);

type ChatPhase = 'question' | 'typing' | 'answer' | 'fading' | 'paused';

const biologyAskExpertServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Free Biology Homework Question Answered in 15 Minutes",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Ustaad",
    "url": "https://ustaad.ae"
  },
  "serviceType": "Educational Support",
  "areaServed": {
    "@type": "Place",
    "name": "Abu Dhabi, United Arab Emirates"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "AED",
    "availability": "https://schema.org/InStock"
  }
};

const BIOLOGY_EXAMPLES = [
  {
    question: 'How do I draw a monohybrid cross for tall × short pea plants?',
    answer: 'Tall (T) is dominant, short (t) is recessive. Cross TT × tt gives all Tt in F1 (100% tall). Cross Tt × Tt in F2 gives TT, Tt, Tt, tt, giving a 3:1 tall to short ratio.',
  },
  {
    question: 'Why does the enzyme activity drop after 40 degrees?',
    answer: 'The active site starts to denature. Bonds holding the shape break, the substrate no longer fits, and the reaction rate falls. Above about 60 degrees for most human enzymes, activity is close to zero.',
  },
  {
    question: 'Why do the alveoli have such thin walls?',
    answer: 'A short diffusion distance. Oxygen and carbon dioxide only cross one thin cell layer, so exchange is fast. Thicker walls would slow the rate, and the body could not meet its oxygen demand at rest, let alone during exercise.',
  }
];

function TypingDots() {
  return (
    <div className="typing-indicator" aria-hidden="true">
      <span className="dot animate-pulse-dot" style={{ animationDelay: '0ms' }} />
      <span className="dot animate-pulse-dot" style={{ animationDelay: '300ms' }} />
      <span className="dot animate-pulse-dot" style={{ animationDelay: '600ms' }} />
    </div>
  );
}

function BiologyChatMockup() {
  const [exIdx, setExIdx] = useState(0);
  const [phase, setPhase] = useState<ChatPhase>('answer');
  const [timerSec, setTimerSec] = useState(12);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const timersRef = useRef<(ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>)[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) {
      setPhase('answer');
      return;
    }

    function clearAll() {
      timersRef.current.forEach(t => { clearTimeout(t as any); clearInterval(t as any); });
      timersRef.current = [];
    }

    function runCycle(idx: number) {
      clearAll();
      setExIdx(idx);
      setPhase('question');
      setTimerSec(0);

      const t1 = setTimeout(() => {
        setPhase('typing');
        let sec = 0;
        const ticker = setInterval(() => {
          sec++;
          setTimerSec(sec);
        }, 1000);
        timersRef.current.push(ticker as any);

        const t2 = setTimeout(() => {
          clearInterval(ticker);
          setPhase('answer');

          const t3 = setTimeout(() => {
            setPhase('fading');

            const t4 = setTimeout(() => {
              runCycle((idx + 1) % BIOLOGY_EXAMPLES.length);
            }, 500);
            timersRef.current.push(t4);
          }, 3500);
          timersRef.current.push(t3);
        }, 2000);
        timersRef.current.push(t2);
      }, 2000);
      timersRef.current.push(t1);
    }

    const init = setTimeout(() => runCycle(0), 500);
    timersRef.current.push(init);

    return clearAll;
  }, []);

  const ex = BIOLOGY_EXAMPLES[prefersReducedMotion ? 0 : exIdx];
  const showQuestion = prefersReducedMotion || phase === 'question' || phase === 'typing' || phase === 'answer';
  const showTimer = prefersReducedMotion || phase === 'typing' || phase === 'answer';
  const showTyping = !prefersReducedMotion && phase === 'typing';
  const showAnswer = prefersReducedMotion || phase === 'answer';

  return (
    <div
      className={`biology-chat-mockup-wrapper transition-opacity duration-500 ${
        phase === 'fading' ? 'opacity-40' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="chat-card">
        {/* Chat header */}
        <div className="chat-header">
          <div className="avatar-wrapper">
            <div className="avatar">BT</div>
            <span className="online-dot" aria-hidden="true"></span>
          </div>
          <div className="chat-meta">
            <span className="role">Biology Teacher</span>
            <span className="affiliation">Ustaad UAE</span>
          </div>
        </div>

        {/* Chat body */}
        <div className="chat-body" id="biology-chat-body">
          {/* Student Bubble */}
          <div
            className="chat-bubble student-bubble"
            style={{
              transform: showQuestion ? 'translateX(0)' : 'translateX(20px)',
              opacity: showQuestion ? 1 : 0,
              transition: 'transform 200ms ease-in, opacity 200ms ease-in',
            }}
          >
            {ex.question}
          </div>

          {/* Timer Chip */}
          {showTimer && (
            <div className="timer-chip">
              {prefersReducedMotion || phase === 'answer' ? (
                <>
                  <span className="timer-value-solved">00:12</span> · Solved
                </>
              ) : (
                <>
                  00:{String(timerSec).padStart(2, '0')} · Waiting for specialist
                </>
              )}
            </div>
          )}

          {/* Typing Indicator */}
          {showTyping && <TypingDots />}

          {/* Specialist Bubble */}
          {showAnswer && (
            <div
              className="chat-bubble specialist-bubble animate-slide-in"
            >
              {ex.answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BiologyAskExpertSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewFiredRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !viewFiredRef.current) {
          viewFiredRef.current = true;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'biology_ask_expert_view');
          }
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="biology-ask-expert"
      ref={sectionRef}
      className="biology-ask-expert-section"
      aria-labelledby="biology-ask-expert-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(biologyAskExpertServiceSchema) }}
      />
      <div className="container">
        <div className="biology-ask-expert-grid">
          {/* Left column: sell */}
          <div className="biology-ask-expert-content">
            <p className="eyebrow">STUCK ON A BIOLOGY QUESTION?</p>
            <h2 id="biology-ask-expert-heading">Get a Free Worked Solution in 15 Minutes</h2>
            <p className="subhead">
              Send us any biology homework question your child is stuck on. A UAE biology specialist replies with a worked solution, free.
            </p>

            <ul className="trust-markers">
              <li>
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0f4a9b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[10px] h-[10px]">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                Average reply time: 12 minutes
              </li>
              <li>
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0f4a9b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[10px] h-[10px]">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                IGCSE 0610, A-Level 9700, IB Biology HL and SL, AP Biology
              </li>
              <li>
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0f4a9b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[10px] h-[10px]">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                Biology questions answered every week by our team
              </li>
            </ul>

            <a
              className="btn-whatsapp"
              href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20have%20a%20biology%20question"
              aria-label="Ask a biology expert on WhatsApp. Opens WhatsApp with your message pre-filled"
              target="_blank"
              rel="noopener"
              onClick={() => {
                if ((window as any).gtag) {
                  (window as any).gtag('event', 'biology_ask_expert_whatsapp_click');
                }
              }}
            >
              <svg className="whatsapp-icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ask on WhatsApp
            </a>

            <p className="reassurance">No sign-up. No credit card. Just send your biology question.</p>
            <a
              className="secondary-link"
              href="/contact#form"
              onClick={() => {
                if ((window as any).gtag) {
                  (window as any).gtag('event', 'biology_ask_expert_form_link_click');
                }
              }}
            >
              Prefer the form? Send it here →
            </a>
          </div>

          {/* Right column: animated chat mockup */}
          <div className="biology-ask-expert-mockup" aria-hidden="true">
            <BiologyChatMockup />
          </div>
        </div>
      </div>
      <style>{`
        .biology-ask-expert-section {
          background: var(--colour-biology-bg);
          padding: 80px 0;
          font-family: 'Inter', 'DM Sans', sans-serif;
        }
        .biology-ask-expert-section .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .biology-ask-expert-grid {
          display: grid;
          grid-template-columns: 55fr 45fr;
          gap: 48px;
          align-items: center;
        }
        .biology-ask-expert-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .biology-ask-expert-content .eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--colour-biology-teal);
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .biology-ask-expert-content h2 {
          font-size: 32px;
          font-weight: 700;
          color: var(--colour-biology-dark);
          line-height: 1.25;
          margin-bottom: 16px;
        }
        .biology-ask-expert-content .subhead {
          font-size: 16px;
          font-weight: 400;
          color: var(--colour-biology-muted);
          line-height: 1.5;
          margin-bottom: 24px;
        }
        .trust-markers {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .trust-markers li {
          font-size: 15px;
          font-weight: 400;
          color: var(--colour-biology-dark);
          line-height: 1.55;
          display: flex;
          align-items: center;
        }
        .btn-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: var(--colour-whatsapp-green);
          color: var(--colour-biology-white);
          font-size: 16px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: var(--radius-button);
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 150ms ease, transform 150ms ease;
          width: auto;
        }
        .btn-whatsapp:hover {
          background-color: var(--colour-whatsapp-green-hover);
          transform: scale(1.02);
        }
        .btn-whatsapp:active {
          transform: scale(0.98);
          transition-duration: 100ms;
        }
        .btn-whatsapp:focus {
          outline: 2px solid var(--colour-biology-teal);
          outline-offset: 3px;
        }
        .biology-ask-expert-content .reassurance {
          font-size: 13px;
          font-style: italic;
          color: var(--colour-biology-muted);
          margin-top: 12px;
          margin-bottom: 8px;
        }
        .secondary-link {
          font-size: 14px;
          color: var(--colour-biology-dark);
          text-decoration: none;
          font-weight: 500;
        }
        .secondary-link:hover {
          text-decoration: underline;
        }

        /* Mockup styling */
        .biology-ask-expert-mockup {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .biology-chat-mockup-wrapper {
          width: 100%;
          max-width: 480px;
        }
        .chat-card {
          width: 100%;
          aspect-ratio: 6 / 5;
          background: var(--colour-biology-white);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-biology-card);
          border: 1px solid var(--colour-biology-border);
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          overflow: hidden;
        }
        .chat-header {
          height: 56px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 20px;
          border-bottom: 1px solid var(--colour-biology-border);
          background: var(--colour-biology-white);
        }
        .avatar-wrapper {
          position: relative;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
        }
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(15, 74, 155, 0.12);
          color: var(--colour-biology-teal);
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .online-dot {
          position: absolute;
          top: 0;
          right: 0;
          width: 8px;
          height: 8px;
          background-color: var(--colour-biology-teal);
          border-radius: 50%;
          border: 1.5px solid var(--colour-biology-white);
        }
        .chat-meta {
          display: flex;
          flex-direction: column;
        }
        .chat-meta .role {
          font-size: 14px;
          font-weight: 500;
          color: var(--colour-biology-dark);
        }
        .chat-meta .affiliation {
          font-size: 12px;
          color: var(--colour-biology-muted);
        }
        .chat-body {
          flex: 1;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow: hidden;
          background: var(--colour-biology-white);
          justify-content: flex-start;
        }
        .chat-bubble {
          max-width: 85%;
          padding: 10px 14px;
          border-radius: var(--radius-bubble);
          font-size: 14px;
          line-height: 1.4;
          box-sizing: border-box;
        }
        .student-bubble {
          align-self: flex-end;
          background: var(--colour-biology-bg);
          color: var(--colour-biology-dark);
        }
        .specialist-bubble {
          align-self: flex-start;
          background: rgba(15, 74, 155, 0.10);
          border: 1px solid rgba(15, 74, 155, 0.35);
          color: var(--colour-biology-dark);
        }
        .timer-chip {
          align-self: flex-end;
          font-size: 12px;
          color: var(--colour-biology-muted);
          background: var(--colour-biology-bg);
          padding: 4px 10px;
          border-radius: 9999px;
          font-family: monospace;
        }
        .timer-value-solved {
          color: var(--colour-biology-teal);
          font-weight: 600;
        }
        .typing-indicator {
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(15, 74, 155, 0.05);
          padding: 10px 16px;
          border-radius: var(--radius-bubble);
        }
        .typing-indicator .dot {
          width: 6px;
          height: 6px;
          background-color: var(--colour-biology-teal);
          border-radius: 50%;
        }
        .check-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          background: rgba(15, 74, 155, 0.12);
          border-radius: 50%;
          margin-right: 10px;
          vertical-align: middle;
          flex-shrink: 0;
        }

        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(0.6);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        .animate-pulse-dot {
          animation: pulse-dot 1000ms infinite ease-in-out;
        }

        @keyframes slide-in-left {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in-left 200ms ease-in forwards;
        }

        @media (max-width: 1023px) {
          .biology-ask-expert-section {
            padding: 64px 0;
          }
          .biology-ask-expert-grid {
            grid-template-columns: 60fr 40fr;
            gap: 32px;
          }
        }

        @media (max-width: 767px) {
          .biology-ask-expert-section {
            padding: 48px 0;
          }
          .biology-ask-expert-section .container {
            padding: 0 20px;
          }
          .biology-ask-expert-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .btn-whatsapp {
            width: 100%;
          }
          .btn-whatsapp {
            font-size: 15px;
          }
          .biology-ask-expert-content h2 {
            font-size: 24px;
          }
          .chat-card {
            aspect-ratio: auto;
            min-height: 310px;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .biology-ask-expert-content h2 {
            font-size: 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .chat-body * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default function BiologyLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowSticky(true);
      } else if (currentScrollY < lastScrollY) {
        setShowSticky(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const challenges: Challenge[] = [
    {
      notation: 'diag',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      ),
      title: 'Memorised Diagrams',
      problem: 'Students misread diagrams, lose easy marks interpreting electron micrographs on real papers.'
    },
    {
      notation: 'gen',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" strokeDasharray="2 2" />
          <path d="M15 3v18" strokeDasharray="2 2" />
          <path d="M3 9h18" strokeDasharray="2 2" />
          <path d="M3 15h18" strokeDasharray="2 2" />
        </svg>
      ),
      title: 'Genetics Traps',
      problem: 'Monohybrid crosses feel simple until pedigree charts, sex linkage or codominance appear in exams.'
    },
    {
      notation: 'phys',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      title: 'Physiology Gaps',
      problem: 'Students learn body systems in isolation and cannot connect them in cross-system exam questions.'
    },
    {
      notation: 'enz',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M3 21c4-12 8-16 12-4 2 6 4 4 6-12" />
        </svg>
      ),
      title: 'Enzyme Graphs',
      problem: 'Students misread enzyme graphs when temperature, pH and substrate concentration combine in one question.'
    },
    {
      notation: 'prac',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12" />
          <path d="M18 3v3c0 2-1 4-3 6l-5 5v4h6v-4l-5-5c-2-2-3-4-3-6V3" />
        </svg>
      ),
      title: 'Weak Practicals',
      problem: 'Students without lab experience lose easy marks on Paper 3 practicals and ATP planning.'
    },
    {
      notation: 'ia',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      title: 'IB IA',
      problem: 'IB Biology IA marks stall when research questions lack focus or methodology is thin.'
    }
  ];

  const steps: Step[] = [
    {
      n: '01',
      icon: <FileSearch className="h-6 w-6" />,
      title: 'Diagnose The Gap',
      desc: 'Your tutor finds whether the gap sits in diagrams, practical papers, or deep syllabus content.'
    },
    {
      n: '02',
      icon: <Wrench className="h-6 w-6" />,
      title: 'Rebuild The Topic',
      desc: 'Each weak topic is rebuilt from first principles, diagram by diagram, before exam practice begins.'
    },
    {
      n: '03',
      icon: <Timer className="h-6 w-6" />,
      title: 'Drill Past Papers',
      desc: 'Past Cambridge, Edexcel, and IB biology papers cement each topic under timed exam conditions.'
    }
  ];

  const journey = [
    { years: 'Year 7–9', title: 'Foundation (KS3)', desc: 'KS3 biology builds organ systems, cells, and scientific vocabulary early.', link: { label: 'Core sciences', href: '/middle-school' } },
    { years: 'Year 10–11', title: 'IGCSE / GCSE', desc: 'Cambridge 0610, Edexcel 4BI1, and GCSE Biology theory and ATP prep.', link: { label: 'IGCSE biology tutor Abu Dhabi', href: '/igcse' } },
    { years: 'Year 12–13', title: 'A-Level / IB / AP', desc: 'A-Level Biology, IB Biology SL/HL, and College Board AP Biology support.', link: { label: 'A-Level biology tutor Abu Dhabi', href: '/a-level' } }
  ];

  const topics = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 6c-2 0-3 1.5-3 3" />
        </svg>
      ),
      title: 'Cell Biology',
      desc: 'Students practise real electron micrographs until identifying organelles under exam conditions becomes second nature.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none" strokeWidth="1.5">
          <path d="M4.5 10.5c3-6 5-6 8 0s5 6 8 0" />
          <path d="M4.5 13.5c3 6 5 6 8 0s5-6 8 0" />
        </svg>
      ),
      title: 'Inheritance Patterns',
      desc: 'Every past-paper style of monohybrid, dihybrid and pedigree drilled until patterns become instantly recognisable.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none" strokeWidth="1.5">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      title: 'Human Physiology',
      desc: 'Students learn one clear pathway per body system, then connect them across exam questions.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none" strokeWidth="1.5">
          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
          <circle cx="16" cy="7" r="1.5" />
        </svg>
      ),
      title: 'Molecular Biochemistry',
      desc: 'Students read enzyme graphs the way mark schemes reward: temperature, pH and substrate compared.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none" strokeWidth="1.5">
          <path d="M12 22V12" />
          <path d="M12 12c2-3 5-3 7-1" />
          <path d="M12 15c-2-3-5-3-7-1" />
        </svg>
      ),
      title: 'Plant Systems',
      desc: 'Photosynthesis, transpiration and osmosis taught early using diagrams the student redraws, not just reads.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none" strokeWidth="1.5">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M8 10l4-2 4 2" />
        </svg>
      ),
      title: 'Ecology Essays',
      desc: 'Essay openings and case studies answer the actual command word, not what students assume.'
    }
  ];

  const medicinePathway = [
    { title: 'MBRU Dubai', desc: 'MBRU Dubai expects strong Biology and Chemistry passes with proven English proficiency and an interview.' },
    { title: 'Khalifa Medicine', desc: 'Khalifa University expects strong Biology, Chemistry and Physics with high overall grades and an interview.' },
    { title: 'UK Russell', desc: 'Russell Group medical schools ask AAA to A*AA including Chemistry and Biology, plus UCAT.' },
    { title: 'Ireland RCSI', desc: 'RCSI Ireland requires A-Levels including Chemistry and Biology or an equivalent HL IB grade profile.' }
  ];

  const boardRows = [
    { title: 'IGCSE Cambridge', desc: 'Cambridge IGCSE Biology 0610: cells, transport, biochemistry, coordination and reproduction.', link: '/igcse' },
    { title: 'IGCSE Edexcel', desc: 'Edexcel International 4BI1 covers nutrition, transport, coordination and reproduction across every module.', link: '/igcse' },
    { title: 'A-Level Cambridge', desc: 'Cambridge 9700: cell biochemistry, enzymes, transport, gene technology and mammalian physiology.', link: '/a-level' },
    { title: 'A-Level Edexcel', desc: 'Edexcel 9BI0: lifestyle, genes, genome, biodiversity, environmental change and biotechnology.', link: '/a-level' },
    { title: 'IB Diploma', desc: 'Biology HL and SL, including Internal Assessment support and every required practical.', link: '/ib-curriculum' },
    { title: 'AP Biology', desc: 'College Board AP: chemistry of life, cellular energetics, heredity, gene expression and ecology.', link: '/ap' }
  ];

  const gapChecks = [
    { q: 'Does your child memorize biology diagrams but fail to apply them to raw micrographs?', tag: 'Diagram gap' },
    { q: 'Do they miss marks on genetics pedigree charts and codominance questions?', tag: 'Genetics gap' },
    { q: 'Are their exam practical planning answers lacking controlled variables?', tag: 'Practical gap' }
  ];

  const compareRows = [
    { label: 'Topic diagnosis first', ustaad: 'yes', market: 'no', school: 'no' },
    { label: 'Curriculum-matched tutor', ustaad: 'yes', market: 'sometimes', school: 'yes' },
    { label: 'Weekly past paper drills', ustaad: 'yes', market: 'no', school: 'rare' },
    { label: 'Practical Paper 3/ATP coverage', ustaad: 'yes', market: 'no', school: 'yes' },
    { label: 'Parent progress notes', ustaad: 'yes', market: 'no', school: 'no' }
  ];

  const faqs: { q: string; a: React.ReactNode; plain: string }[] = [
    {
      q: 'How do I find a good biology tutor in Abu Dhabi?',
      plain: 'Start with the curriculum. Ask any tutor whether they teach Cambridge IGCSE 0610, Edexcel 4BI1, A-Level 9700 or 9BI0, IB HL or SL, or AP Biology. Match on that first, and on district or online delivery second.',
      a: <>Start with the curriculum. Ask any tutor whether they teach Cambridge IGCSE 0610, Edexcel 4BI1, A-Level 9700 or 9BI0, IB HL or SL, or AP Biology. Match on that first, and on district or online delivery second.</>
    },
    {
      q: 'Do you offer 1-to-1 biology tutoring or group classes?',
      plain: 'Ustaad is a one-to-one biology tutoring service. Group settings can hide specific weaknesses like genetics or physiology gaps for months. In a 1-to-1 session, the tutor spots the gap in the first lesson and rebuilds it directly.',
      a: <><strong>Ustaad</strong> is a one-to-one biology tutoring service. Group settings can hide specific weaknesses like genetics or physiology gaps for months. In a 1-to-1 session, the tutor spots the gap in the first lesson and rebuilds it directly.</>
    },
    {
      q: 'Can biology tutoring help with medicine or dentistry applications?',
      plain: 'Yes. Most competitive UK medical schools ask for AAA to A*AA including Biology and Chemistry. UAE options like MBRU Dubai and Khalifa University also expect strong science grades. We focus on the topics that carry the highest marks, plus regular past-paper practice.',
      a: <>Yes. Most competitive UK medical schools ask for AAA to A*AA including Biology and Chemistry. UAE options like MBRU Dubai and Khalifa University also expect strong science grades. We focus on the topics that carry the highest marks, plus regular past-paper practice.</>
    },
    {
      q: 'Do you tutor IB Biology HL and SL?',
      plain: 'Yes, both. Ustaad supports IB Diploma Biology at Higher Level and Standard Level, including the syllabus content, the required practicals, and the full Internal Assessment across every criterion.',
      a: <>Yes, both. <strong>Ustaad</strong> supports IB Diploma Biology at Higher Level and Standard Level, including the syllabus content, the required practicals, and the full Internal Assessment across every criterion.</>
    },
    {
      q: 'How much does biology tutoring cost in Abu Dhabi?',
      plain: 'Rates depend on year group and how many sessions per week. Every family gets a free 30-minute diagnostic lesson first, and a transparent rate quote before any commitment.',
      a: <>Rates depend on year group and how many sessions per week. Every family gets a free 30-minute diagnostic lesson first, and a transparent rate quote before any commitment.</>
    },
    {
      q: 'Is online biology tutoring effective for practical skills?',
      plain: 'Yes for the theory-linked practical skills, which is where most marks sit on Paper 3. Sessions use annotated whiteboards and shared documents, so variable control, error analysis and improvement design are drawn out clearly.',
      a: <>Yes for the theory-linked practical skills, which is where most marks sit on Paper 3. Sessions use annotated whiteboards and shared documents, so variable control, error analysis and improvement design are drawn out clearly.</>
    },
    {
      q: 'When should my child start biology tutoring?',
      plain: 'For IGCSE, ideally the start of Year 10. For A-Level and IB, before the second term of Year 12 or DP1. Starting earlier keeps topic gaps from compounding.',
      a: <>For IGCSE, ideally the start of Year 10. For A-Level and IB, before the second term of Year 12 or DP1. Starting earlier keeps topic gaps from compounding.</>
    },
    {
      q: 'What if my child does not connect with the tutor?',
      plain: 'Rematching is always free. A better fit usually happens within 48 hours, and lessons pick up from the point the previous tutor reached.',
      a: <>Rematching is always free. A better fit usually happens within 48 hours, and lessons pick up from the point the previous tutor reached.</>
    }
  ];

  const Mark = ({ v }: { v: string }) => {
    if (v === 'yes') return <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] mx-auto" />;
    if (v === 'no') return <X className="h-4 w-4 text-gray-300 mx-auto" />;
    return <span className="text-[11px] text-gray-400 italic">{v}</span>;
  };

  return (
    <Layout>
      <SEOHead
        title="Biology Tutor Abu Dhabi | IGCSE, A-Level & IB | Ustaad"
        description="Specialist 1-to-1 biology tutors in Abu Dhabi for IGCSE, A-Level and IB. Master genetics, physiology and IA. Ideal for medicine pathways. Free trial."
        canonical="/biology-tutor-abu-dhabi"
        ogImage="/UpdatedImages/abu-dhabi-biology-tutor-student-online-session.jpg"
        placename="Abu Dhabi, UAE"
        geoPosition="24.4539;54.3773"
        geoRegion="AE-AZ"
        robots="noindex,follow"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Biology Tutor Abu Dhabi', url: '/biology-tutor-abu-dhabi' }]),
          serviceSchema('Private Biology Tutoring', 'One-to-one biology tutors in Abu Dhabi for IGCSE, GCSE, A-Level, IB, and AP students. Trusted by Abu Dhabi families since 2015.', '/biology-tutor-abu-dhabi'),
          faqSchema(faqs.map(f => ({ q: f.q, a: f.plain }))),
          ...reviewsSchema,
        ]}
      />

      {/* HERO SECTION */}
      <section className="relative -mt-16 overflow-hidden bg-[#0a1f3d] flex flex-col items-center justify-center md:min-h-[75vh]">
        <BioGrid />
        <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 85% 30%, rgba(15,74,155,0.22) 0%, transparent 80%)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 flex flex-col items-center text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center text-left w-full">
            <div>
              <Eyebrow icon={<MapPin className="h-3.5 w-3.5" />} text="Abu Dhabi · UAE" dark />
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
                Biology That<br />
                <span className="text-[#0f4a9b]" style={{ background: 'linear-gradient(92deg,#3b7fd4 0%,#0f4a9b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Opens Medicine</span>
              </h1>
              <p className="text-[#f8f9fb]/80 text-lg sm:text-xl mb-8 leading-relaxed max-w-xl">
                IB Biology IA and required practicals fully supported. Specialist 1-to-1 biology tutors in Abu Dhabi.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {['Cambridge 0610', 'Edexcel 4BI1', 'IB Biology HL', 'AP Biology', 'A-Level'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-bold text-white/80" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3.5">
                <GoldButton href={BOOKING} className="px-7 py-3.5 text-sm font-semibold rounded-lg bg-[#0f4a9b] text-white hover:bg-[#0a3a79] transition duration-200 shadow-lg">
                  Book Free Biology Diagnostic
                </GoldButton>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5">
                <picture>
                  <source srcSet="/UpdatedImages/abu-dhabi-biology-tutor-student-online-session.webp" type="image/webp" />
                  <source srcSet="/UpdatedImages/abu-dhabi-biology-tutor-student-online-session.jpg" type="image/jpeg" />
                  <img
                    src="/UpdatedImages/abu-dhabi-biology-tutor-student-online-session.jpg"
                    alt="Ustaad biology tutor guiding an Abu Dhabi student through active transport and biology topics in an online 1-to-1 session."
                    className="w-full h-[400px] object-cover"
                    width={800}
                    height={400}
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/60 to-transparent" />
                <div className="absolute bottom-5 left-5 flex gap-2">
                  <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-bold text-white bg-black/45 backdrop-filter backdrop-blur-[8px]">1-to-1 Lessons</span>
                  <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-bold text-white bg-black/45 backdrop-filter backdrop-blur-[8px]">Medicine Prep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <StatsBar />

      {/* SECTION 1: BIOLOGY LEARNING GAPS */}
      <section className="py-12 sm:py-16 bg-[#f8f9fb] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(15,74,155,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow icon={<Target className="h-3.5 w-3.5" />} text="Targeted Diagnostics" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">Biology Learning Gaps</h2>
            <p className="text-[#6b7c93] text-[15px] leading-relaxed">Six gaps we see every year in Abu Dhabi biology students.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-xl border border-[#e2e6ec] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between"
                style={{ minHeight: '190px' }}
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-[#0f4a9b]/8 flex items-center justify-center text-[#0f4a9b] mb-4">
                    {c.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#0a1f3d] mb-2">{c.title}</h3>
                  <p className="text-[15px] text-[#3a4f6e] leading-[1.55]">{c.problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: TOPICS WE REBUILD */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow icon={<Brain className="h-3.5 w-3.5" />} text="Focused Rebuilds" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">Topics We Rebuild</h2>
            <p className="text-[#6b7c93] text-[15px] leading-relaxed">Our biology tutors close each gap above through focused topic rebuilds.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#f8f9fb] p-6 rounded-xl border border-[#e2e6ec] hover:border-[#0f4a9b]/30 transition duration-350"
                style={{ minHeight: '210px' }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0f4a9b]/8 flex items-center justify-center text-[#0f4a9b] mb-4">
                  {t.icon}
                </div>
                <h3 className="text-[18px] font-semibold text-[#0a1f3d] mb-2">{t.title}</h3>
                <p className="text-[15px] text-[#3a4f6e] leading-[1.55]">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MEDICINE PATHWAY */}
      <section className="py-12 sm:py-16 bg-[#f8f9fb] relative overflow-hidden">
        <BioGrid light />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow icon={<ClipboardCheck className="h-3.5 w-3.5" />} text="Admissions Roadmap" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">The Medicine Pathway</h2>
            <p className="text-[#6b7c93] text-[15px] leading-relaxed">Typical requirements for medicine, dentistry and biomedical courses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {medicinePathway.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#e2e6ec] shadow-[0_2px_8px_rgba(0,0,0,0.04)]" style={{ minHeight: '130px' }}>
                <h3 className="text-[18px] font-semibold text-[#0a1f3d] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[#3a4f6e] leading-[1.55]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Infographic SVG timeline */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e2e6ec] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <h3 className="text-[18px] font-semibold text-[#0a1f3d] mb-6 text-center">Medicine Admissions Pathway for UAE Students</h3>
            
            {/* Desktop Horizontal Timeline */}
            <div className="hidden lg:block relative w-full pt-10 pb-8">
              <svg viewBox="0 0 1000 120" className="w-full h-auto">
                <defs>
                  <marker id="arr" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#0f4a9b" />
                  </marker>
                </defs>
                <line x1="80" y1="50" x2="900" y2="50" stroke="#e2e6ec" strokeWidth="3" />
                <line x1="80" y1="50" x2="920" y2="50" stroke="#0f4a9b" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arr)" />

                {/* Step 1 */}
                <g transform="translate(100, 50)">
                  <circle cx="0" cy="0" r="14" fill="#0f4a9b" />
                  <text x="0" y="4" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">1</text>
                  <text x="0" y="-22" fill="#0a1f3d" fontSize="12" fontWeight="bold" textAnchor="middle">Year 11</text>
                  <text x="0" y="32" fill="#6b7c93" fontSize="10" textAnchor="middle">Foundations</text>
                </g>

                {/* Step 2 */}
                <g transform="translate(300, 50)">
                  <circle cx="0" cy="0" r="14" fill="#0f4a9b" />
                  <text x="0" y="4" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">2</text>
                  <text x="0" y="-22" fill="#0a1f3d" fontSize="12" fontWeight="bold" textAnchor="middle">Year 12</text>
                  <text x="0" y="32" fill="#6b7c93" fontSize="10" textAnchor="middle">Grade Targets</text>
                </g>

                {/* Step 3 */}
                <g transform="translate(500, 50)">
                  <circle cx="0" cy="0" r="14" fill="#0f4a9b" />
                  <text x="0" y="4" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">3</text>
                  <text x="0" y="-22" fill="#0a1f3d" fontSize="12" fontWeight="bold" textAnchor="middle">Year 13</text>
                  <text x="0" y="32" fill="#6b7c93" fontSize="10" textAnchor="middle">Exams & UCAT</text>
                </g>

                {/* Step 4 */}
                <g transform="translate(700, 50)">
                  <circle cx="0" cy="0" r="14" fill="#0f4a9b" />
                  <text x="0" y="4" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">4</text>
                  <text x="0" y="-22" fill="#0a1f3d" fontSize="12" fontWeight="bold" textAnchor="middle">Interview</text>
                  <text x="0" y="32" fill="#6b7c93" fontSize="10" textAnchor="middle">Preparation</text>
                </g>

                {/* Step 5 */}
                <g transform="translate(900, 50)">
                  <circle cx="0" cy="0" r="14" fill="#0f4a9b" />
                  <text x="0" y="4" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">5</text>
                  <text x="0" y="-22" fill="#0a1f3d" fontSize="12" fontWeight="bold" textAnchor="middle">Offer</text>
                  <text x="0" y="32" fill="#6b7c93" fontSize="10" textAnchor="middle">Secured Entry</text>
                </g>
              </svg>
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="lg:hidden relative pl-8 py-4">
              <div className="absolute top-4 bottom-4 left-3 w-[2px] bg-[#e2e6ec]" />
              <div className="absolute top-4 bottom-4 left-3 w-[2px] bg-[#0f4a9b] stroke-dasharray" style={{ height: '80%' }} />

              <div className="flex flex-col gap-6">
                {[
                  { stage: '1', title: 'Year 11', sub: 'Foundations' },
                  { stage: '2', title: 'Year 12', sub: 'Grade Targets' },
                  { stage: '3', title: 'Year 13', sub: 'Final Exams & UCAT' },
                  { stage: '4', title: 'Interview', sub: 'Critical Preparation' },
                  { stage: '5', title: 'Offer', sub: 'Secured Entry' }
                ].map((s, idx) => (
                  <div key={idx} className="relative flex items-center">
                    <div className="absolute -left-[27px] w-6 h-6 rounded-full bg-[#0f4a9b] text-white text-xs font-bold flex items-center justify-center">
                      {s.stage}
                    </div>
                    <div className="ml-3">
                      <h4 className="text-[14px] font-bold text-[#0a1f3d]">{s.title}</h4>
                      <p className="text-[12px] text-[#6b7c93]">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE BIOLOGY DIFFERENCE */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow icon={<CheckCircle2 className="h-3.5 w-3.5" />} text="The Ustaad Edge" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">The Biology Difference</h2>
            <p className="text-[#6b7c93] text-[15px] leading-relaxed">Four things every Ustaad biology session includes.</p>
          </div>

          <div className="bg-[#f8f9fb] rounded-2xl border border-[#e2e6ec] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-b md:border-b-0 md:border-r border-[#e2e6ec] flex flex-col justify-start">
                <div className="w-10 h-10 rounded-full bg-[#0f4a9b]/8 flex items-center justify-center text-[#0f4a9b] mb-4">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0a1f3d] mb-2">Board Match</h3>
                <p className="text-[15px] text-[#3a4f6e] leading-[1.55]">Tutor matched to your child's exact syllabus.</p>
              </div>

              <div className="p-8 border-b border-[#e2e6ec] md:border-b-0 flex flex-col justify-start">
                <div className="w-10 h-10 rounded-full bg-[#0f4a9b]/8 flex items-center justify-center text-[#0f4a9b] mb-4">
                  <ClipboardCheck className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0a1f3d] mb-2">Written Summary</h3>
                <p className="text-[15px] text-[#3a4f6e] leading-[1.55]">One-page written summary after the diagnostic.</p>
              </div>

              <div className="p-8 border-r border-[#e2e6ec] flex flex-col justify-start">
                <div className="w-10 h-10 rounded-full bg-[#0f4a9b]/8 flex items-center justify-center text-[#0f4a9b] mb-4">
                  <Timer className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0a1f3d] mb-2">Past Papers</h3>
                <p className="text-[15px] text-[#3a4f6e] leading-[1.55]">Every lesson ends with past-paper questions.</p>
              </div>

              <div className="p-8 flex flex-col justify-start">
                <div className="w-10 h-10 rounded-full bg-[#0f4a9b]/8 flex items-center justify-center text-[#0f4a9b] mb-4">
                  <PenTool className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0a1f3d] mb-2">Mark Schemes</h3>
                <p className="text-[15px] text-[#3a4f6e] leading-[1.55]">Official Cambridge and Edexcel schemes used.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW OUR TUTORS TEACH */}
      <section className="py-12 sm:py-16 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0a1f3d 0%, #0f3575 50%, #0a2a6e 100%)' }}>
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <BioGrid />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow icon={<Timer className="h-3.5 w-3.5" />} text="Our Method" dark />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-2">How Our Tutors Teach</h2>
            <p className="text-blue-100/55 text-[15px] leading-relaxed">A four-step method built around biology exam mechanics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Diagnostic Lesson', desc: 'Free diagnostic lesson identifies each student\'s biology learning gaps and current exam-readiness level.' },
              { num: '02', title: 'Topic Rebuild', desc: 'Weak topics reworked in the school\'s teaching order, with diagrams the student redraws, not just reads.' },
              { num: '03', title: 'Exam Practice', desc: 'Fortnightly past paper practice marked together using the official mark scheme, error by error.' },
              { num: '04', title: 'Coursework Coaching', desc: 'IB IA design and A-Level essay drills across the highest-mark criteria.' }
            ].map((step, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-white/10 shadow-lg flex flex-col justify-between" style={{ minHeight: '190px', background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(110,168,255,0.18)' }}>
                <div>
                  <span className="text-[24px] font-black block mb-2" style={{ color: '#fde68a' }}>{step.num}</span>
                  <h3 className="text-[16px] font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[14px] text-blue-100/65 leading-[1.5]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a href="/tutors" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-[#0a1f3d] transition-all bg-[#f0c96a] hover:bg-[#e0b95a] shadow-md">
              Meet Our Tutors <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <BiologyAskExpertSection />

      {/* SECTION 6: EVERY BOARD COVERED */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow icon={<BookOpen className="h-3.5 w-3.5" />} text="Syllabi Covered" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">Every Board Covered</h2>
            <p className="text-[#6b7c93] text-[15px] leading-relaxed">Cambridge, Edexcel, IB and AP biology syllabi supported at every level.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardRows.map((b, idx) => (
              <div key={idx} className="bg-[#f8f9fb] p-6 rounded-xl border border-[#e2e6ec] flex flex-col justify-between" style={{ minHeight: '180px' }}>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#0a1f3d] mb-2 border-b border-[#e2e6ec] pb-2 text-[#0f4a9b]">{b.title}</h3>
                  <p className="text-[14px] text-[#3a4f6e] leading-[1.5]">{b.desc}</p>
                </div>
                <div className="mt-4">
                  <a href={b.link} className="text-xs font-bold text-[#0f4a9b] hover:underline inline-flex items-center gap-1">
                    Explore curriculum <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: REAL ABU DHABI RESULTS */}
      <section className="py-12 sm:py-16 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow icon={<ClipboardCheck className="h-3.5 w-3.5" />} text="Proven Performance" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">Real Abu Dhabi Results</h2>
            <p className="text-[#6b7c93] text-[15px] leading-relaxed">Grade shifts from students we have actually taught.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Reem Grade */}
            <div className="bg-white p-6 rounded-xl border border-[#e2e6ec] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <h3 className="text-[18px] font-semibold text-[#0a1f3d] mb-1">Reem Grade</h3>
                <p className="text-[14px] text-[#6b7c93] mb-4">Year 11 Cambridge 0610 student, Al Reem Island.</p>
                <div className="w-full bg-[#f8f9fb] rounded-lg p-2 mb-4">
                  <svg viewBox="0 0 200 100" className="w-full h-[100px]">
                    <line x1="20" y1="80" x2="180" y2="80" stroke="#e2e6ec" strokeWidth="2" />
                    <rect x="55" y="55" width="25" height="25" fill="#6b7c93" rx="4" />
                    <text x="67.5" y="47" textAnchor="middle" fill="#6b7c93" fontSize="12" fontWeight="bold">D</text>
                    <rect x="120" y="25" width="25" height="55" fill="#0f4a9b" rx="4" />
                    <text x="132.5" y="17" textAnchor="middle" fill="#0f4a9b" fontSize="12" fontWeight="bold">B</text>
                    <path d="M 90 50 L 110 50" stroke="#0f4a9b" strokeWidth="2" fill="none" />
                    <polygon points="110,47 116,50 110,53" fill="#0f4a9b" />
                  </svg>
                </div>
              </div>
              <p className="text-[14px] text-[#3a4f6e] font-semibold text-center text-[#0f4a9b]">Moved D to B</p>
            </div>

            {/* Khalifa Offer */}
            <div className="bg-white p-6 rounded-xl border border-[#e2e6ec] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <h3 className="text-[18px] font-semibold text-[#0a1f3d] mb-1">Khalifa Offer</h3>
                <p className="text-[14px] text-[#6b7c93] mb-4">Year 13 Edexcel 9BI0 student, Khalifa City.</p>
                <div className="w-full bg-[#f8f9fb] rounded-lg p-2 mb-4">
                  <svg viewBox="0 0 200 100" className="w-full h-[100px]">
                    <rect x="10" y="10" width="180" height="80" rx="12" fill="#ffffff" stroke="#e2e6ec" strokeWidth="1" />
                    <text x="50" y="40" textAnchor="middle" fill="#6b7c93" fontSize="10" fontWeight="semibold">Current</text>
                    <text x="50" y="70" textAnchor="middle" fill="#6b7c93" fontSize="24" fontWeight="bold">B</text>
                    <path d="M 88 50 L 108 50" stroke="#0f4a9b" strokeWidth="2" fill="none" />
                    <polygon points="108,47 114,50 108,53" fill="#0f4a9b" />
                    <text x="145" y="40" textAnchor="middle" fill="#0f4a9b" fontSize="10" fontWeight="bold">Achieved</text>
                    <text x="145" y="70" textAnchor="middle" fill="#0f4a9b" fontSize="24" fontWeight="bold">A</text>
                  </svg>
                </div>
              </div>
              <p className="text-[14px] text-[#3a4f6e] font-semibold text-center text-[#0f4a9b]">A Grade & Russell Group Offer</p>
            </div>

            {/* Saadiyat IA */}
            <div className="bg-white p-6 rounded-xl border border-[#e2e6ec] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <h3 className="text-[18px] font-semibold text-[#0a1f3d] mb-1">Saadiyat IA</h3>
                <p className="text-[14px] text-[#6b7c93] mb-4">IB HL Biology student, Saadiyat Island.</p>
                <div className="w-full bg-[#f8f9fb] rounded-lg p-2 mb-4">
                  <svg viewBox="0 0 200 100" className="w-full h-[100px]">
                    <line x1="20" y1="80" x2="180" y2="80" stroke="#e2e6ec" strokeWidth="2" />
                    <circle cx="50" cy="50" r="16" fill="#6b7c93" />
                    <text x="50" y="54" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">4</text>
                    <path d="M 82 50 L 112 50" stroke="#0f4a9b" strokeWidth="2" fill="none" />
                    <polygon points="112,47 118,50 112,53" fill="#0f4a9b" />
                    <circle cx="150" cy="50" r="16" fill="#0f4a9b" />
                    <text x="150" y="54" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">6</text>
                  </svg>
                </div>
              </div>
              <p className="text-[14px] text-[#3a4f6e] font-semibold text-center text-[#0f4a9b]">IA Moved 4 to 6</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW TRUSTED BY PARENTS SLIDER */}
      <section className="py-10 sm:py-12 lg:py-14" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 50%, #1e5ba8 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5 sm:mb-6">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                Trusted by{' '}
                <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Parents</span>
              </h2>
            </div>
            <div className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full" style={{ background: 'rgba(240,201,106,0.12)', border: '1px solid rgba(240,201,106,0.25)' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="h-3 w-3 fill-[#f0c96a] text-[#f0c96a]" />
                ))}
              </div>
              <span className="text-[11px] font-bold ml-1" style={{ color: '#f0c96a' }}>5.0 · Verified Google Review</span>
            </div>
          </div>
          <ParentsSlider />
        </div>
      </section>

      {/* SECTION 8: ACROSS ABU DHABI */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow icon={<MapPin className="h-3.5 w-3.5" />} text="Coverage Areas" />
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-4">Across Abu Dhabi</h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                Online biology tutoring reaches every district with the same tutor quality.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Khalifa City', desc: 'Biology tutors online for BSAK, Cranleigh and Repton families.' },
                  { name: 'Al Reem', desc: 'Al Reem Island students matched within twenty-four hours.' },
                  { name: 'Saadiyat Island', desc: 'Brighton College and Cranleigh Saadiyat families supported.' },
                  { name: 'MBZ City', desc: 'Students tutored online across every board and year.' },
                  { name: 'Yas Reef', desc: 'Yas Island and Al Reef families reach premium tutoring.' },
                  { name: 'Al Mushrif', desc: 'Al Mushrif and central Abu Dhabi students tutored evenings.' }
                ].map((d, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#f8f9fb] border border-[#e2e6ec]">
                    <h4 className="text-[15px] font-bold text-[#0a1f3d] mb-1">{d.name}</h4>
                    <p className="text-[12.5px] text-[#3a4f6e] leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                See every <a href="/tutors?city=abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">biology tutor near you</a> across Abu Dhabi.
              </p>
            </div>

            <div className="bg-[#f8f9fb] p-6 rounded-2xl border border-[#e2e6ec] shadow-sm">
              <h3 className="text-[16px] font-bold text-[#0a1f3d] mb-4 text-center">Abu Dhabi District Coverage Map</h3>
              <svg viewBox="0 0 400 200" className="w-full h-auto">
                <path d="M 30 140 Q 60 110, 100 120 T 170 90 T 240 100 T 320 80 T 380 90 L 380 180 L 30 180 Z" fill="#ffffff" stroke="#e2e6ec" strokeWidth="1.5" />
                <path d="M 120 85 Q 130 80, 140 85 T 130 95 Z" fill="#ffffff" stroke="#e2e6ec" strokeWidth="1" />
                <path d="M 150 70 Q 170 65, 185 75 T 160 85 Z" fill="#ffffff" stroke="#e2e6ec" strokeWidth="1" />
                <path d="M 210 65 Q 230 55, 245 70 T 225 80 Z" fill="#ffffff" stroke="#e2e6ec" strokeWidth="1" />
                
                {/* Pins */}
                <g transform="translate(230, 120)">
                  <circle cx="0" cy="0" r="4" fill="#0f4a9b" />
                  <text x="6" y="3" fill="#0a1f3d" fontSize="8" fontWeight="bold">Khalifa City</text>
                </g>
                <g transform="translate(130, 88)">
                  <circle cx="0" cy="0" r="4" fill="#0f4a9b" />
                  <text x="-6" y="-6" fill="#0a1f3d" fontSize="8" fontWeight="bold" textAnchor="end">Al Reem</text>
                </g>
                <g transform="translate(165, 75)">
                  <circle cx="0" cy="0" r="4" fill="#0f4a9b" />
                  <text x="0" y="-8" fill="#0a1f3d" fontSize="8" fontWeight="bold" textAnchor="middle">Saadiyat</text>
                </g>
                <g transform="translate(250, 150)">
                  <circle cx="0" cy="0" r="4" fill="#0f4a9b" />
                  <text x="6" y="3" fill="#0a1f3d" fontSize="8" fontWeight="bold">MBZ City</text>
                </g>
                <g transform="translate(225, 70)">
                  <circle cx="0" cy="0" r="4" fill="#0f4a9b" />
                  <text x="6" y="-3" fill="#0a1f3d" fontSize="8" fontWeight="bold">Yas Island</text>
                </g>
                <g transform="translate(110, 115)">
                  <circle cx="0" cy="0" r="4" fill="#0f4a9b" />
                  <text x="-6" y="3" fill="#0a1f3d" fontSize="8" fontWeight="bold" textAnchor="end">Al Mushrif</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQs */}
      <section className="py-12 sm:py-16 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight">Frequently Asked Questions</h2>
            <p className="text-[#6b7c93] text-[15px] mt-2">Real answers to the biology questions Abu Dhabi parents ask.</p>
          </div>

          <div className="flex flex-col gap-[10px]">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      style={{
                        width: 40, height: 40,
                        background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                        color: isOpen ? '#fff' : '#0f4a9b',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, fontWeight: 'bold', fontSize: '18px', border: 'none', cursor: 'pointer'
                      }}
                    >
                      ?
                    </button>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex-1 flex items-center gap-3 text-left rounded-full border"
                      style={{
                        minHeight: '48px', padding: '8px 14px',
                        borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)',
                        background: isOpen ? 'rgba(15,74,155,0.04)' : 'transparent', cursor: 'pointer'
                      }}
                    >
                      <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                      <span style={{
                        width: 32, height: 32, borderRadius: '50%',
                        background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s'
                      }}>
                        <ChevronDown className="h-3.5 w-3.5" style={{ color: isOpen ? '#fff' : '#0f4a9b' }} />
                      </span>
                    </button>
                  </div>
                  <div style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.25s ease' }} aria-hidden={!isOpen}>
                    <div className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4" style={{ background: '#ffffff', borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 4px 16px rgba(15,74,155,0.06)' }}>
                      <p className="flex-1 text-[#3a4f6e] text-[13px] leading-relaxed">{faq.a}</p>
                      <span style={{ width: 32, height: 32, background: '#0f4a9b', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <MessageCircle className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCHOOLS MARQUEE */}
      <SchoolsMarquee />

      {/* SECTION 10: START BIOLOGY PROGRESS */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-10 text-center" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #071833 100%)' }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Start Biology Progress</h2>
            <p className="text-[#f8f9fb]/80 text-[15px] mb-6 max-w-lg mx-auto">Two ways to begin, both free. No commitment.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white mb-1.5 text-[15px]">Free Diagnostic</h4>
                <p className="text-[13px] text-blue-200/80 leading-relaxed">Thirty focused minutes with a biology tutor, plus a written summary of your child's exam-readiness.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-[#25D366] mb-1.5 text-[15px]">WhatsApp Question</h4>
                <p className="text-[13px] text-blue-200/80 leading-relaxed">Send any biology past-paper question; a tutor replies within fifteen minutes with a worked solution.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <GoldButton href={BOOKING} className="px-7 py-3.5 text-sm font-semibold rounded-lg bg-[#0f4a9b] text-white hover:bg-[#0a3a79] transition duration-200 shadow-lg">Book Your Free Trial</GoldButton>
              <a href="https://wa.me/971561249005" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-sm font-bold text-white border border-white/20 hover:bg-white/10 transition">
                <Phone className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOOKING FOR ANOTHER SUBJECT */}
      <section className="py-12 sm:py-16 bg-[#f8f9fb]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">Looking For Another Subject?</h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Same calm approach across every core subject Abu Dhabi students study.</p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="/physics-tutor-abu-dhabi"
              className="group block rounded-2xl p-5 sm:p-6 transition-all bg-white border border-[#e2e6ec] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0f4a9b]/8 text-[#0f4a9b]">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-extrabold text-[#0a1f3d] mb-1 flex items-center gap-1.5 group-hover:text-[#0f4a9b] transition-colors">
                    Physics Tutor Abu Dhabi <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">For formulas, derivations, diagrams, mechanics and circuit calculations.</p>
                </div>
              </div>
            </a>

            <a
              href="/chemistry-tutor-abu-dhabi"
              className="group block rounded-2xl p-5 sm:p-6 transition-all bg-white border border-[#e2e6ec] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0f4a9b]/8 text-[#0f4a9b]">
                  <Calculator className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-extrabold text-[#0a1f3d] mb-1 flex items-center gap-1.5 group-hover:text-[#0f4a9b] transition-colors">
                    Chemistry Tutor Abu Dhabi <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">For mole calculations, equation balancing, organic reaction routes and past papers.</p>
                </div>
              </div>
            </a>

            <a
              href="/maths-tutor-abu-dhabi"
              className="group block rounded-2xl p-5 sm:p-6 transition-all bg-white border border-[#e2e6ec] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0f4a9b]/8 text-[#0f4a9b]">
                  <Calculator className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-extrabold text-[#0a1f3d] mb-1 flex items-center gap-1.5 group-hover:text-[#0f4a9b] transition-colors">
                    Maths Tutor Abu Dhabi <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">For algebra fluency, past-paper drilling, and IGCSE 0580 or IB Maths AA and AI support.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <FinalCTA
        title="Start Biology Support Today"
        subtitleNode={
          <div className="text-gray-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
            <p>Book your free trial with a private biology tutor Abu Dhabi families trust.</p>
            <p className="text-[13px] text-gray-500 mt-2">
              Or speak with student support: <a href="tel:8009005" className="font-semibold text-[#0f4a9b]">800 9005 (USTAAD)</a>.
            </p>
          </div>
        }
        button1Text="Book Your Free Trial"
        button1Href={BOOKING}
        button2Text="Ask Your Question"
        subtext1="Free Trial • No Commitment"
        subtext2="Stuck on a topic? Send it across."
      />

      {/* STICKY MOBILE BAR */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 left-0 right-0 z-[9990] h-[64px] bg-[#0a1f3d] border-t border-white/10 px-4 py-2 flex items-center justify-between gap-3 md:hidden"
          >
            <a href={BOOKING} className="flex-1 h-10 inline-flex items-center justify-center bg-[#0f4a9b] text-white text-[13px] font-bold rounded-lg hover:bg-[#0a3a79] transition">
              Book Trial
            </a>
            <a href="https://wa.me/971561249005" target="_blank" rel="noopener noreferrer" className="flex-1 h-10 inline-flex items-center justify-center bg-[#25D366] text-white text-[13px] font-bold rounded-lg hover:brightness-95 transition gap-1.5">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.832L.057 23.477a.5.5 0 0 0 .608.61l5.801-1.525A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.003-1.37l-.36-.213-3.44.905.919-3.355-.234-.375A9.818 9.818 0 1 1 12 21.818z"/></svg>
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
