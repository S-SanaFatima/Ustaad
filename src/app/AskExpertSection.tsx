import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { TypewriterHeadingText } from './shared';

const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20book%20my%20first%2030-minute%20session%20with%20a%20subject%20and%20curriculum-fit%20tutor.';

const EXAMPLES = [
  {
    subject: 'Chemistry Teacher',
    initials: 'CT',
    question: 'How do I balance the equation for FeCl₃ + 3NaOH?',
    answer: 'Balance step by step. FeCl₃ has 1 Fe and 3 Cl. Cross-multiply to get the same on both sides: FeCl₃ + 3NaOH → Fe(OH)₃ + 3NaCl',
    solvedTime: '00:12',
  },
  {
    subject: 'Maths Teacher',
    initials: 'MT',
    question: 'Rearrange y = 2x + 3 for x',
    answer: 'x = (y − 3) / 2',
    solvedTime: '00:08',
  },
  {
    subject: 'Physics Teacher',
    initials: 'PT',
    question: 'Explain why the resultant force is zero on a book resting on a table',
    answer: 'The book has weight pulling down and the table pushes up with an equal normal force. Equal and opposite forces cancel; resultant is zero.',
    solvedTime: '00:10',
  },
];

type ChatPhase = 'question' | 'typing' | 'answer' | 'fading';

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TypingDots() {
  return (
    <div className="flex gap-1.5 py-1" aria-hidden="true">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-[#0f4a9b] animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

function ChatMockup() {
  const [exIdx, setExIdx] = useState(0);
  const [phase, setPhase] = useState<ChatPhase>('answer');
  const [timerSec, setTimerSec] = useState(12);
  const timersRef = useRef<(ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

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
        const ticker = setInterval(() => { sec++; setTimerSec(sec); }, 1000);
        timersRef.current.push(ticker as any);

        const t2 = setTimeout(() => {
          clearInterval(ticker);
          setPhase('answer');

          const t3 = setTimeout(() => {
            setPhase('fading');
            const t4 = setTimeout(() => runCycle((idx + 1) % EXAMPLES.length), 600);
            timersRef.current.push(t4);
          }, 2000);
          timersRef.current.push(t3);
        }, 2000);
        timersRef.current.push(t2);
      }, 2000);
      timersRef.current.push(t1);
    }

    const init = setTimeout(() => runCycle(0), 800);
    timersRef.current.push(init);

    return clearAll;
  }, []);

  const ex = EXAMPLES[exIdx];
  const showQuestion = phase === 'question' || phase === 'typing' || phase === 'answer';
  const showTimer = phase === 'typing' || phase === 'answer';
  const showTyping = phase === 'typing';
  const showAnswer = phase === 'answer';

  return (
    <div
      aria-hidden="true"
      className={`max-w-[480px] mx-auto transition-opacity duration-500 ${phase === 'fading' ? 'opacity-40' : 'opacity-100'}`}
    >
      <div className="bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        {/* Chat header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E5E7EB]">
          <div className="relative shrink-0">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm notranslate"
              translate="no"
              style={{ background: 'rgba(193,123,47,0.15)', color: '#c17b2f' }}
            >
              {ex.initials}
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white bg-[#25d366]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-[#0b1f3a] notranslate" translate="no">
              {ex.subject}
            </div>
            <div className="text-xs text-[#6B7280]">Ustaad UAE</div>
          </div>
        </div>

        {/* Chat body */}
        <div className="flex flex-col gap-3 p-5 min-h-[200px]">
          {/* Student question bubble */}
          <div
            className="self-end max-w-[85%] px-3.5 py-2.5 rounded-xl rounded-br-sm text-sm bg-[#F4F8FD] text-[#0b1f3a]"
            style={{
              transform: showQuestion ? 'translateX(0)' : 'translateX(20px)',
              opacity: showQuestion ? 1 : 0,
              transition: 'transform 200ms ease-in, opacity 200ms ease-in',
            }}
          >
            {ex.question}
          </div>

          {/* Timer chip */}
          {showTimer && (
            <div className={`self-end text-xs font-mono px-2.5 py-1 rounded-full ${
              phase === 'answer'
                ? 'bg-[#EAF2FB] text-[#0f4a9b]'
                : 'bg-[#F4F8FD] text-[#6B7280]'
            }`}>
              {phase === 'answer'
                ? `${ex.solvedTime} · Solved`
                : `00:${String(timerSec).padStart(2, '0')} · Waiting for specialist`}
            </div>
          )}

          {/* Typing dots */}
          {showTyping && <TypingDots />}

          {/* Specialist reply */}
          {showAnswer && (
            <div
              className="max-w-[85%] px-3.5 py-2.5 rounded-xl rounded-bl-sm text-sm text-[#0b1f3a] bg-[#EAF2FB] border border-[#0f4a9b]/20"
              style={{ animation: 'ask-chat-in 200ms ease-in' }}
            >
              {ex.answer}
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes ask-chat-in {
          from { transform: translateX(-12px); opacity: 0; }
          to   { transform: translateX(0);      opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          [aria-hidden="true"] * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}

const askExpertServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Free Homework Question Answered in 15 Minutes',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Ustaad',
    url: 'https://ustaad.ae',
  },
  serviceType: 'Educational Support',
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'AED',
    availability: 'https://schema.org/InStock',
  },
};

export default function AskExpertSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewFiredRef = useRef(false);
  const inViewRef = useRef(false);
  const [animCycle, setAnimCycle] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!inViewRef.current) {
            setAnimCycle((cycle) => cycle + 1);
          }
          inViewRef.current = true;

          if (!viewFiredRef.current) {
            viewFiredRef.current = true;
            if ((window as any).gtag) (window as any).gtag('event', 'ask_expert_section_view');
          }
        } else {
          inViewRef.current = false;
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ask-expert"
      ref={sectionRef}
      aria-labelledby="ask-expert-heading"
      className="py-20 bg-white"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(askExpertServiceSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#c17b2f] mb-3">
              STUCK ON A QUESTION? ASK US
            </p>

            <h2
              id="ask-expert-heading"
              className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight mb-4"
            >
              <TypewriterHeadingText
                key={`ask-heading-${animCycle}`}
                text="Get a Free Written Solution in 15 Minutes"
              />
            </h2>

            <p className="text-[#6B7280] text-base lg:text-lg leading-relaxed mb-8 max-w-[520px]">
              <TypewriterHeadingText
                key={`ask-desc-${animCycle}`}
                text="Send us any homework question your child is stuck on. A UAE subject specialist replies with a worked solution, free."
                highlightLastWord={false}
                charDelay={0.018}
                delay={0.35}
                className="inline"
              />
            </p>

            <ul className="list-none p-0 m-0 mb-8 flex flex-col gap-3">
              {[
                'Average reply time: 12 minutes',
                'IGCSE, A-Level, IB, and American curriculum specialists',
                'Questions answered every week by our team',
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#333]">
                  <CheckCircle className="h-5 w-5 text-[#0f4a9b] shrink-0" strokeWidth={2} />
                  <TypewriterHeadingText
                    key={`ask-bullet-${animCycle}-${i}`}
                    text={item}
                    highlightLastWord={false}
                    charDelay={0.022}
                    delay={0.9 + i * 0.35}
                    className="inline"
                  />
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener"
                aria-label="Ask an expert on WhatsApp — opens WhatsApp with your message pre-filled"
                onClick={() => { if ((window as any).gtag) (window as any).gtag('event', 'ask_expert_whatsapp_click'); }}
                className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3.5 text-base text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: '#25d366' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#128c7e'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#25d366'; }}
              >
                <WhatsappIcon />
                Ask on WhatsApp
              </a>

            </div>

            <p className="text-xs text-[#6B7280] italic">
              No sign-up. No credit card. Just send your question.
            </p>
          </div>

          {/* ── Right: animated chat mockup ── */}
          <div>
            <ChatMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
