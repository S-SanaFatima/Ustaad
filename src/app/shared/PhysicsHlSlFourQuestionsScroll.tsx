import React, { useState, useEffect } from 'react';
import { CardSwap, Card } from './CardSwap';
import { HelpCircle, Pause, Play, MousePointerClick } from 'lucide-react';

interface QuestionItem {
  num: string;
  q: string;
  desc: string;
  tag: string;
  tagBg: string;
  accentGradient: string;
}

const QUESTIONS: QuestionItem[] = [
  {
    num: '1',
    q: 'How comfortable is the algebra, not the physics?',
    desc: 'HL assumes fluency your child may still be building. Most HL difficulty is mathematical, not conceptual.',
    tag: 'Algebraic Rigor',
    tagBg: 'bg-blue-50 text-[#0f4a9b] border-blue-200',
    accentGradient: 'from-[#0f4a9b] to-[#1e5bb3]'
  },
  {
    num: '2',
    q: 'Is Maths AA or AI on their timetable, and at what level?',
    desc: 'HL Physics alongside AA HL is a different workload from HL Physics alongside AI SL.',
    tag: 'Curriculum Match',
    tagBg: 'bg-amber-50 text-[#9E7B24] border-amber-200',
    accentGradient: 'from-[#C7A24A] to-[#9E7B24]'
  },
  {
    num: '3',
    q: 'Is physics needed for the degree they are aiming at, or just enjoyed?',
    desc: 'Engineering and physical sciences usually want HL. Medicine often does not.',
    tag: 'University Prerequisite',
    tagBg: 'bg-blue-50 text-[#0f4a9b] border-blue-200',
    accentGradient: 'from-[#0f4a9b] to-[#0a2a6e]'
  },
  {
    num: '4',
    q: 'How many other HLs are they carrying?',
    desc: 'Three demanding HLs plus an Extended Essay is where most Year 12 stress originates.',
    tag: 'Workload Balance',
    tagBg: 'bg-amber-50 text-[#9E7B24] border-amber-200',
    accentGradient: 'from-[#C7A24A] to-[#0a1f3d]'
  }
];

export function PhysicsHlSlFourQuestionsScroll() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [isPaused, setIsPaused] = useState(false);
  const [currentFrontIndex, setCurrentFrontIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardWidth = windowWidth < 640 ? Math.min(windowWidth - 32, 380) : 540;
  const cardHeight = windowWidth < 640 ? 250 : 220;
  const cardDistance = 0; // Centered straight in face
  const verticalDistance = 26; // Stacks straight above behind

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50/80 via-white to-blue-50/30 relative overflow-hidden text-left border-t border-slate-100">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-50/70 via-amber-50/40 to-blue-50/70 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#0f4a9b]/20 text-[#0f4a9b] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest mb-2 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#C7A24A]" />
            <span>COURSE SELECTION DECISION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight mb-2 tracking-tight">
            HL or SL? <span className="text-[#0f4a9b]">Four honest questions</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            Not a quiz. Four things worth being truthful about before the choice is locked in.
          </p>
        </div>

        {/* ── 3D STRAIGHT-FACED PERSPECTIVE CARD SWAP SHOWCASE ── */}
        <div className="relative py-6 sm:py-10 flex items-center justify-center">
          <CardSwap
            width={cardWidth}
            height={cardHeight}
            cardDistance={cardDistance}
            verticalDistance={verticalDistance}
            delay={4200}
            pauseOnHover={false}
            isPaused={isPaused}
            onSwap={(idx) => setCurrentFrontIndex(idx)}
            skewAmount={0}
            easing="elastic"
          >
            {QUESTIONS.map((item, idx) => (
              <Card
                key={item.num}
                className="p-5 sm:p-6 select-none cursor-pointer text-left flex flex-col justify-between overflow-hidden transition-shadow hover:shadow-[0_25px_60px_-15px_rgba(15,74,155,0.25)]"
                title="Click to swap card"
              >
                {/* Top Accent Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accentGradient}`} />

                <div>
                  <div className="flex items-start gap-3.5 sm:gap-4 mb-3">
                    {/* Number Badge */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a2a6e] text-[#fde68a] font-black text-base sm:text-lg flex items-center justify-center shrink-0 shadow-md border border-[#C7A24A]/40">
                      {item.num}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                        <span
                          className={`text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.tagBg}`}
                        >
                          {item.tag}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 font-bold">
                          QUESTION 0{item.num} OF 04
                        </span>
                      </div>

                      <h3 className="text-base sm:text-[17px] font-serif font-extrabold text-[#0a1f3d] leading-snug">
                        {item.q}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium text-slate-500">
                    Honest Decision Checkpoint
                  </span>
                  <span className="text-[#0f4a9b] font-bold">IB DP Physics</span>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>

        {/* Dynamic Controls Bar: Pause/Play Button & Click-to-swap Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 sm:mt-6">
          
          {/* Small Pause / Play Toggle Button */}
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? "Resume auto-play" : "Pause auto-play"}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border shadow-2xs active:scale-95 ${
              isPaused
                ? 'bg-[#0f4a9b] text-white border-[#0f4a9b] hover:bg-[#0a3a7c]'
                : 'bg-white text-slate-700 border-slate-200 hover:border-[#0f4a9b]/40 hover:text-[#0f4a9b]'
            }`}
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 fill-current text-[#fde68a]" />
                <span>Resume Autoplay</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 fill-current text-[#0f4a9b]" />
                <span>Pause</span>
              </>
            )}
          </button>

          {/* Click to Swap Pill Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-slate-500 text-xs font-medium shadow-2xs">
            <MousePointerClick className="w-3.5 h-3.5 text-[#0f4a9b]" />
            <span>Click any card to swap</span>
          </div>

        </div>

      </div>
    </section>
  );
}

