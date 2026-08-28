import { useCallback, useEffect, useRef, useState } from 'react';
import { GradientHeadingText } from './GradientHeadingText';

const AUTO_MS = 2800;

type TeamMember = {
  name: string;
  role: string;
  tag: string;
  desc: string;
  focus: string[];
  initials: string;
};

const TEAM: TeamMember[] = [
  {
    name: 'F. Zaman',
    role: 'Founder & Academic Director',
    tag: 'Leadership',
    desc: "Sets Ustaad's academic direction and tutoring standards, and oversees how tutors are selected and reviewed across every subject.",
    focus: ['Academic direction', 'Tutor standards'],
    initials: 'FZ',
  },
  {
    name: 'Nida Iqbal',
    role: 'Tutor Quality & Development Lead',
    tag: 'Quality',
    desc: 'Reviews tutor performance and ongoing development so standards stay consistent across every session.',
    focus: ['Tutor vetting', 'Ongoing review'],
    initials: 'NI',
  },
  {
    name: 'Nimra Shahzada',
    role: 'Content Lead & Academic Consultant',
    tag: 'Content',
    desc: "Researches the study and academic challenges UAE students face, and writes clear, practical guidance around them as Ustaad's content lead.",
    focus: ['Student research', 'Editorial writing', 'Curriculum planning'],
    initials: 'NS',
  },
  {
    name: 'Mehwish Masood',
    role: 'Academic Coordinator',
    tag: 'Coordination',
    desc: 'Handles day-to-day academic coordination and matches each student with a tutor suited to their subject and level.',
    focus: ['Tutor matching', 'Scheduling'],
    initials: 'MM',
  },
  {
    name: 'Maheen Gul',
    role: 'Head of Admissions & Parent Relations',
    tag: 'Admissions',
    desc: 'First point of contact for parents. Walks families through enrolment and keeps communication clear at every step.',
    focus: ['Enrolment', 'Parent liaison'],
    initials: 'MG',
  },
];

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function TeamSection() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [barKey, setBarKey] = useState(0);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const autoActive = !reducedRef.current;

  const goTo = useCallback((next: number) => {
    const i = ((next % TEAM.length) + TEAM.length) % TEAM.length;

    if (reducedRef.current) {
      setIdx(i);
      return;
    }

    setFading(true);
    window.setTimeout(() => {
      setIdx(i);
      setFading(false);
    }, 140);
  }, []);

  useEffect(() => {
    if (!autoActive) return;
    setBarKey((k) => k + 1);
    const timer = window.setTimeout(() => goTo(idx + 1), AUTO_MS);
    return () => window.clearTimeout(timer);
  }, [autoActive, idx, goTo]);

  const member = TEAM[idx];

  return (
    <section
      id="team"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#F4F8FD] via-white to-[#fcfaf5]"
      aria-labelledby="team-heading"
    >
      <style>{`
        @keyframes ustTeamPlaybar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .ust-team-playbar {
          transform-origin: left center;
          animation: ustTeamPlaybar ${AUTO_MS}ms linear forwards;
        }
        @keyframes ustTeamChipIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ust-team-chip {
          animation: ustTeamChipIn .4s cubic-bezier(.2,.7,.2,1) forwards;
          opacity: 0;
        }
        .ust-team-chip:nth-child(1) { animation-delay: .05s; }
        .ust-team-chip:nth-child(2) { animation-delay: .12s; }
        .ust-team-chip:nth-child(3) { animation-delay: .2s; }
        @media (prefers-reduced-motion: reduce) {
          .ust-team-playbar { animation: none !important; transform: scaleX(0); }
          .ust-team-chip { animation: none !important; opacity: 1; transform: none; }
        }
      `}</style>

      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-gradient-to-br from-[#0f4a9b]/10 to-[#C7A24A]/5 rounded-full blur-[110px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-gradient-to-tr from-[#0f4a9b]/8 to-transparent rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 lg:mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#C7A24A]/15 to-[#A8892A]/10 text-[#A8892A] text-xs font-bold rounded-full mb-4 border border-[#C7A24A]/25 uppercase tracking-wider shadow-[0_0_15px_rgba(199,162,74,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A]" aria-hidden="true" />
            Our people
          </div>
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a1f3d] leading-tight mb-4"
          >
            <GradientHeadingText text="The team behind Ustaad" />
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-5" />
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl">
            Academic expertise, thoughtful coordination and dedicated support behind every tutoring journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.95fr] gap-5 lg:gap-7 items-stretch">
          {/* Featured navy card */}
          <article
            className="relative rounded-[24px] p-6 sm:p-7 lg:p-8 flex flex-col gap-5 min-h-0 lg:min-h-[380px] overflow-hidden bg-gradient-to-br from-[#0a1f3d] via-[#0d2c58] to-[#0f4a9b] border border-[#0f4a9b]/50 shadow-[0_20px_50px_rgba(15,74,155,0.25)]"
            aria-live="polite"
          >
            <div className="absolute top-0 right-0 w-[340px] h-[340px] bg-gradient-to-br from-[#C7A24A]/15 to-transparent rounded-full blur-[80px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[260px] h-[260px] bg-[#0f4a9b]/40 rounded-full blur-[70px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C7A24A] via-[#C7A24A]/60 to-transparent" aria-hidden="true" />

            {autoActive && (
              <div
                key={barKey}
                className="ust-team-playbar absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#C7A24A] to-[#f0d080] opacity-95 z-20"
                aria-hidden="true"
              />
            )}

            <div className="relative z-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#C7A24A] to-[#A8892A] text-[#0a1f3d] font-extrabold text-sm grid place-items-center shadow-[0_8px_20px_rgba(199,162,74,0.32)] notranslate" translate="no">
                  {member.initials}
                </div>
                <div className="text-sm font-bold tracking-wide text-white/90">
                  <span
                    className={`inline-block min-w-[1.4em] text-[#C7A24A] transition-all duration-300 ${
                      fading ? '-translate-y-1 opacity-40' : ''
                    }`}
                  >
                    {pad(idx + 1)}
                  </span>
                  <span className="text-white/40"> / {pad(TEAM.length)}</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-bold uppercase tracking-[0.15em] text-[#f0d080] backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] shadow-[0_0_8px_rgba(199,162,74,0.8)]" aria-hidden="true" />
                {member.tag}
              </div>
            </div>

            <div
              className={`relative z-10 flex flex-col gap-3 flex-1 transition-all duration-300 ${
                fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C7A24A] m-0">
                {member.role}
              </p>
              <h3 className="text-[28px] sm:text-3xl lg:text-[38px] font-extrabold text-white leading-[1.06] tracking-tight m-0">
                {member.name}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-blue-100/85 m-0 max-w-xl min-h-[4em]">
                {member.desc}
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2" aria-label="Focus areas" key={idx}>
                {member.focus.map((f) => (
                  <span
                    key={f}
                    className="ust-team-chip inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-[#0a1f3d] bg-gradient-to-r from-[#C7A24A] to-[#e0c06a] px-3 py-1.5 rounded-full shadow-[0_4px_12px_rgba(199,162,74,0.25)]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Index list panel */}
          <div className="bg-white/90 backdrop-blur-sm rounded-[24px] border border-[#0f4a9b]/10 shadow-[0_14px_36px_rgba(10,31,61,0.08)] p-3 sm:p-3.5 flex flex-col">
            <ol
              className="list-none p-0 m-0 flex flex-col flex-1"
              role="tablist"
              aria-label="Team members"
              onKeyDown={(e) => {
                if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                  e.preventDefault();
                  goTo(idx + 1);
                }
                if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                  e.preventDefault();
                  goTo(idx - 1);
                }
                if (e.key === 'Home') {
                  e.preventDefault();
                  goTo(0);
                }
                if (e.key === 'End') {
                  e.preventDefault();
                  goTo(TEAM.length - 1);
                }
              }}
            >
              {TEAM.map((m, i) => {
                const active = i === idx;
                return (
                  <li key={m.name} className="m-0">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-current={active ? 'true' : undefined}
                      onClick={() => goTo(i)}
                      className={`group w-full grid grid-cols-[38px_1fr_auto] items-center gap-3 py-3 sm:py-3.5 px-2.5 sm:px-3 rounded-xl text-left transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C7A24A] focus-visible:outline-offset-2 ${
                        active
                          ? 'text-[#0a1f3d] bg-gradient-to-r from-[#0f4a9b]/[0.08] via-[#C7A24A]/10 to-transparent ring-1 ring-[#0f4a9b]/15 shadow-sm'
                          : 'text-gray-500 hover:text-[#0a1f3d] hover:bg-[#0f4a9b]/[0.04]'
                      }`}
                    >
                      <span
                        className={`w-9 h-9 rounded-xl grid place-items-center text-[13px] font-extrabold transition-all ${
                          active
                            ? 'bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white shadow-[0_6px_14px_rgba(15,74,155,0.28)]'
                            : 'bg-[#0f4a9b]/[0.06] text-[#0f4a9b]/70 group-hover:bg-[#0f4a9b]/10'
                        }`}
                      >
                        {pad(i + 1)}
                      </span>
                      <span className="min-w-0">
                        <span
                          className={`block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.11em] mb-0.5 transition-colors truncate ${
                            active ? 'text-[#C7A24A]' : 'text-gray-400'
                          }`}
                        >
                          {m.role}
                        </span>
                        <span className="block text-base sm:text-lg font-extrabold text-current tracking-tight leading-snug truncate">
                          {m.name}
                        </span>
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full grid place-items-center transition-all duration-300 ${
                          active
                            ? 'opacity-100 bg-[#C7A24A]/15 text-[#A8892A]'
                            : 'opacity-0 group-hover:opacity-60 text-gray-400'
                        }`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 6l6 6-6 6" />
                        </svg>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="flex items-center justify-between mt-2 pt-3 px-2 border-t border-[#0a1f3d]/[0.06] text-xs tracking-wide text-gray-400">
              <span>
                Ustaad leadership · <em className="not-italic font-bold text-[#0f4a9b]">five roles</em>
              </span>
              <span className="font-semibold text-[#C7A24A]">Since 2015</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
