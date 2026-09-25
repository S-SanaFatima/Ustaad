import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GradientHeadingText } from './GradientHeadingText';
import { personSchema } from './schemas';
import {
  ShieldCheck,
  BookOpen,
  Clock,
  Sparkles,
  ArrowUpRight,
  Crown,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCw,
} from 'lucide-react';

export type TeamMember = {
  name: string;
  role: string;
  tag: string;
  desc: string;
  oneLiner: string;
  focus: string[];
  initials: string;
  profileHref?: string;
  image: string;
  imageAlt: string;
  objectPosition: string;
};

export const TEAM: TeamMember[] = [
  {
    name: 'F. Zaman',
    role: 'Founder & Academic Director',
    tag: 'Academic Direction',
    oneLiner: "Sets tutoring standards and curriculum strategy across British, IB, and American boards in the UAE.",
    desc: "Sets Ustaad's academic direction and tutoring standards, and oversees how tutors are selected and reviewed across British, IB, and American curriculums.",
    focus: ['10+ Yrs UAE', 'Curriculum Strategy'],
    initials: 'FZ',
    image: '/images/team/f-zaman-v3.jpg',
    imageAlt: 'F. Zaman, Founder and Academic Director at Ustaad',
    objectPosition: 'center top',
  },
  {
    name: 'Nida Iqbal',
    role: 'Tutor Quality & Development Lead',
    tag: 'Tutor Quality',
    oneLiner: "Oversees top 5% tutor vetting, live classroom observations, and pedagogy standards.",
    desc: 'Oversees tutor selection, classroom observation, and ongoing pedagogy training so academic standards stay consistent.',
    focus: ['Tutor Vetting', 'Pedagogy Audits'],
    initials: 'NI',
    profileHref: '/authors/nida-iqbal',
    image: '/images/team/nida-iqbal-v2.jpg',
    imageAlt: 'Nida Iqbal, Tutor Quality and Development Lead at Ustaad',
    objectPosition: 'center 16%',
  },
  {
    name: 'Nimra Shahzada',
    role: 'Content Lead & Academic Consultant',
    tag: 'Exam Research',
    oneLiner: "Researches UAE student challenges and authors board-exact revision blueprints and guides.",
    desc: 'Researches learning challenges faced by UAE students and authors clear revision guides and exam blueprints.',
    focus: ['Exam Blueprints', 'Board Criteria'],
    initials: 'NS',
    profileHref: '/authors/nimra-shahzada',
    image: '/images/team/nimra-shahzada-v2.jpg',
    imageAlt: 'Nimra Shahzada, Content Lead and Academic Consultant at Ustaad',
    objectPosition: 'center 16%',
  },
  {
    name: 'Mehwish Masood',
    role: 'Academic Coordinator',
    tag: 'Operations',
    oneLiner: "Matches students with compatible tutors suited to their board, syllabus, and learning style.",
    desc: 'Manages lesson operations and matches each student with a tutor suited to their board, year group, and learning style.',
    focus: ['Tutor Matching', 'Syllabus Alignment'],
    initials: 'MM',
    image: '/images/team/mehwish-masood-v2.jpg',
    imageAlt: 'Mehwish Masood, Academic Coordinator at Ustaad',
    objectPosition: 'center 16%',
  },
  {
    name: 'Maheen Gul',
    role: 'Head of Admissions & Parent Relations',
    tag: 'Parent Relations',
    oneLiner: "Dedicated liaison guiding families through consultation, tutor enrolment, and progress reports.",
    desc: 'First point of contact for families. Guides parents through consultation, enrolment, and ongoing progress updates.',
    focus: ['Family Liaison', 'Progress Updates'],
    initials: 'MG',
    image: '/images/team/maheen-gul-v2.jpg',
    imageAlt: 'Maheen Gul, Head of Admissions and Parent Relations at Ustaad',
    objectPosition: 'center 16%',
  },
  {
    name: 'Imran Ahmed',
    role: 'Student Progress & Outcomes Advisor',
    tag: 'Student Outcomes',
    oneLiner: 'Tracks student progress, reviews learning outcomes, and flags where extra academic support may be needed.',
    desc: 'Tracks student progress, reviews learning outcomes, and helps identify where additional academic support may be needed.',
    focus: ['Progress Tracking', 'Outcome Reviews'],
    initials: 'IA',
    image: '/images/team/imran-ahmed-v2.jpg',
    imageAlt: 'Imran Ahmed, Student Progress and Outcomes Advisor at Ustaad',
    objectPosition: 'center 14%',
  },
];

const [FOUNDER, ...FACULTY] = TEAM;

export const teamPersonSchemas = TEAM.map((member) =>
  personSchema({
    name: member.name,
    jobTitle: member.role,
    description: member.desc,
    image: member.image,
    ...(member.profileHref && { url: member.profileHref }),
    ...(member.profileHref && {
      sameAs: 'https://www.linkedin.com/company/ustaad-ae',
    }),
  })
);

const viewportReplay = { once: false, amount: 0.25, margin: '0px 0px -6% 0px' } as const;

const ROTATION_TIME_MS = 5500;

export default function TeamSection() {
  const [activeFaculty, setActiveFaculty] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation timer: advances to next profile unless paused (by tap/click) or hovered
  useEffect(() => {
    if (isPaused || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveFaculty((prev) => (prev < FACULTY.length - 1 ? prev + 1 : 0));
    }, ROTATION_TIME_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isHovered, activeFaculty]);

  // When user clicks/taps any profile pill: stay on that profile
  const handleSelectFaculty = (idx: number) => {
    setActiveFaculty(idx);
    setIsPaused(true);
  };

  // When user clicks/taps the profile card: stay on that profile
  const handleCardTap = () => {
    setIsPaused(true);
  };

  const handlePrev = () => {
    setActiveFaculty((prev) => (prev > 0 ? prev - 1 : FACULTY.length - 1));
    setIsPaused(true);
  };

  const handleNext = () => {
    setActiveFaculty((prev) => (prev < FACULTY.length - 1 ? prev + 1 : 0));
    setIsPaused(true);
  };

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPaused((prev) => !prev);
  };

  const currentFaculty = FACULTY[activeFaculty];

  return (
    <section
      id="team"
      className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-[#F4F8FD] via-white to-[#F4F8FD] isolate"
      aria-labelledby="team-heading"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(rgba(15,74,155,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-[#C7A24A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-[#0f4a9b]/8 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-8 sm:mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReplay}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/10 text-[#A8892A] text-xs font-extrabold rounded-full mb-3 border border-[#C7A24A]/25 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C7A24A]" />
            Academic Leadership
          </div>
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl font-black text-[#0a1f3d] tracking-tight"
          >
            <GradientHeadingText text="Our Academic and Operations Team" />
          </h2>
          <p className="text-[#3a4f6e] text-[15px] leading-relaxed mt-2.5 tracking-[-0.01em] max-w-xl">
            Experienced educators and curriculum leads actively overseeing lesson quality and student progress.
          </p>
        </motion.div>

        {/* TOP: One Big Card of Founder */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReplay}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mb-8 sm:mb-10 overflow-hidden rounded-[1.75rem] border border-[#0f4a9b]/15 bg-white shadow-[0_16px_44px_rgba(15,74,155,0.07)]"
        >
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#C7A24A] via-[#A8892A] to-[#C7A24A]" />

          <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-7 lg:gap-8 p-5 sm:p-7 lg:p-8 items-center sm:items-start">
            {/* Founder Portrait */}
            <div className="relative mx-auto sm:mx-0 w-32 sm:w-40 lg:w-44 shrink-0">
              <div className="relative aspect-[3.4/4] rounded-2xl overflow-hidden bg-[#e8eef8] ring-2 ring-[#C7A24A]/35 shadow-lg">
                <img
                  src={FOUNDER.image}
                  srcSet={`${FOUNDER.image} 300w`}
                  sizes="(max-width: 640px) 128px, 176px"
                  alt={FOUNDER.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{ objectPosition: FOUNDER.objectPosition }}
                  loading="eager"
                />
              </div>
            </div>

            {/* Founder Content */}
            <div className="relative flex-1 min-w-0 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C7A24A] text-[#0a1f3d] text-[10px] font-extrabold uppercase tracking-[0.1em] shadow-sm">
                  <Crown className="w-3 h-3" />
                  Founder
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0f4a9b]/8 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f4a9b] border border-[#0f4a9b]/12">
                  {FOUNDER.tag}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#C7A24A]">
                  Leading Ustaad since day one
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] tracking-tight leading-tight mb-1">
                {FOUNDER.name}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-[#0f4a9b] mb-2.5">
                {FOUNDER.role}
              </p>
              <p className="text-[13px] sm:text-[14px] text-[#3a4f6e] leading-relaxed mb-3.5 max-w-2xl mx-auto sm:mx-0">
                {FOUNDER.desc}
              </p>

              <blockquote className="relative mb-3.5 max-w-2xl mx-auto sm:mx-0 rounded-xl border border-[#C7A24A]/30 bg-gradient-to-br from-[#fdfaf3] to-[#f8fafd] px-4 py-3 sm:px-5 sm:py-3.5 text-left">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#C7A24A] mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#C7A24A]" /> Founder Message
                </p>
                <p className="text-[13px] sm:text-[14px] text-[#0a1f3d] leading-relaxed font-medium italic">
                  &ldquo;Ustaad was built on a simple belief: the right teacher can change more than a student&apos;s grades, they can build confidence, inspire ambition, and shape a better future.&rdquo;
                </p>
              </blockquote>

              <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
                {FOUNDER.focus.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center text-[10px] sm:text-[11px] font-bold text-[#0a1f3d] bg-[#f4f7fc] px-2.5 py-1 rounded-md border border-[#0f4a9b]/10"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        {/* BELOW: One Single Card of Faculty with Interactive Next/Prev & Auto-Rotation */}
        <div className="relative">
          {/* Section Subheader & Tab Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="text-[10px] sm:text-xs font-bold sm:font-extrabold uppercase tracking-wider sm:tracking-[0.12em] text-[#0a1f3d]/75">
                Our Academic and Operations Team
              </h3>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#0f4a9b] bg-[#0f4a9b]/8 px-2 py-0.5 rounded-full border border-[#0f4a9b]/12 shrink-0">
                Member {activeFaculty + 1} of {FACULTY.length}
              </span>

              {/* Auto-Rotation / Stay Status Badge */}
              <button
                type="button"
                onClick={handleTogglePlay}
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all ${
                  isPaused
                    ? 'bg-amber-500/10 text-amber-700 border border-amber-300 hover:bg-amber-500/20'
                    : 'bg-emerald-500/10 text-emerald-700 border border-emerald-300 hover:bg-emerald-500/20'
                }`}
                title={isPaused ? "Auto-scroll paused (tapped to stay). Click to resume auto-rotation" : "Auto-scrolling every 5.5s. Click or tap card to stay"}
              >
                {isPaused ? (
                  <>
                    <Play className="w-2.5 h-2.5 fill-current text-amber-600" />
                    <span>Stayed · Tap to Resume</span>
                  </>
                ) : (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <Pause className="w-2.5 h-2.5 fill-current text-emerald-600" />
                    <span>Auto-Rotating</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick-Select Faculty Pills */}
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-1 max-w-full">
              {FACULTY.map((member, idx) => {
                const isActive = activeFaculty === idx;
                return (
                  <button
                    key={member.name}
                    onClick={() => handleSelectFaculty(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#0f4a9b] text-white shadow-md'
                        : 'bg-white border border-slate-200 text-[#0a1f3d]/70 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#C7A24A]' : 'bg-gray-300'}`} />
                    <span>{member.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Single Active Faculty Card (Tap-to-Stay) */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeFaculty}
                onClick={handleCardTap}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-[0_12px_36px_rgba(15,74,155,0.06)] p-5 sm:p-7 cursor-pointer transition-shadow hover:shadow-[0_16px_44px_rgba(15,74,155,0.12)]"
              >
                {/* Visual Progress Timer Bar when Auto-Rotating */}
                {!isPaused && (
                  <motion.div
                    key={`progress-bar-${activeFaculty}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: ROTATION_TIME_MS / 1000, ease: 'linear' }}
                    className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b] z-20"
                  />
                )}
                {isPaused && (
                  <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent z-20" />
                )}

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7">
                  {/* Portrait */}
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden bg-[#e8eef8] ring-1 ring-slate-200 shadow-md">
                    <img
                      src={currentFaculty.image}
                      srcSet={`${currentFaculty.image} 300w`}
                      sizes="(max-width: 640px) 112px, 144px"
                      alt={currentFaculty.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: currentFaculty.objectPosition }}
                      loading="lazy"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 mb-1.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#0f4a9b]/8 text-[10px] font-bold uppercase tracking-wider text-[#0f4a9b] border border-[#0f4a9b]/12">
                        {currentFaculty.tag}
                      </span>
                      {currentFaculty.profileHref && (
                        <a
                          href={currentFaculty.profileHref}
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs font-bold text-[#0f4a9b] hover:text-[#C7A24A] transition-colors inline-flex items-center"
                        >
                          View Full Profile
                        </a>
                      )}
                    </div>

                    <h4 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] tracking-tight leading-tight">
                      {currentFaculty.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#0f4a9b] mt-0.5 mb-2.5">
                      {currentFaculty.role}
                    </p>

                    <p className="text-xs sm:text-sm text-[#3a4f6e] leading-relaxed mb-3">
                      {currentFaculty.desc}
                    </p>

                    <div className="p-3 bg-[#f8fafd] rounded-xl border border-slate-100 mb-3 text-left">
                      <p className="text-[11px] sm:text-xs text-[#0a1f3d]/90 font-medium leading-relaxed">
                        <strong className="text-[#0f4a9b]">Academic Focus:</strong> {currentFaculty.oneLiner}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                      {currentFaculty.focus.map((f) => (
                        <span
                          key={f}
                          className="text-[10px] sm:text-[11px] font-bold text-[#0a1f3d] bg-[#f4f7fc] px-2.5 py-1 rounded-md border border-[#0f4a9b]/10"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Tap-to-stay UX indicator */}
                    <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-400 font-medium flex items-center justify-center sm:justify-start gap-1.5">
                      {isPaused ? (
                        <span className="text-amber-700 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          Stayed on {currentFaculty.name} (auto-rotation paused)
                        </span>
                      ) : (
                        <span className="text-slate-500 flex items-center gap-1">
                          <RotateCw className="w-3 h-3 text-[#0f4a9b] animate-spin" />
                          Auto-rotating every 5.5s · Tap card to stay on this profile
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Navigation Controls: Previous, Indicators, Next */}
            <div className="flex items-center justify-between mt-4 sm:mt-5 gap-3">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-[#0a1f3d] text-xs sm:text-sm font-bold shadow-sm hover:border-[#0f4a9b]/30 hover:bg-slate-50 transition-all active:scale-95 cursor-pointer"
                aria-label="Previous faculty member"
              >
                <ChevronLeft className="w-4 h-4 text-[#0f4a9b]" />
                <span>Previous</span>
              </button>

              {/* Progress Dots */}
              <div className="flex items-center gap-1.5">
                {FACULTY.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectFaculty(idx)}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                      activeFaculty === idx
                        ? 'w-6 bg-[#0f4a9b]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to faculty member ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                aria-label="Next faculty member"
              >
                <span>Next Member</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReplay}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl p-5 sm:p-6 shadow-[0_12px_32px_rgba(15,74,155,0.18)]"
          style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0d2c58 45%, #0f4a9b 100%)' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-left">
            <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-3 first:pt-0">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#f0d080]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white tracking-tight">Top 5% Tutor Acceptance</p>
                <p className="text-[12px] text-blue-100/70 leading-snug mt-0.5">Rigorous 3-tier vetting &amp; live lessons</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-[#f0d080]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white tracking-tight">Curriculum Specialists Only</p>
                <p className="text-[12px] text-blue-100/70 leading-snug mt-0.5">Board-exact Cambridge, IB &amp; AP tutors</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#f0d080]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white tracking-tight">Continuous Quality Audits</p>
                <p className="text-[12px] text-blue-100/70 leading-snug mt-0.5">Ongoing reviews by academic directors</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
