import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Calculator, MessageSquareQuote, List, ArrowRightLeft, FlaskConical, PenTool,
  CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Star, MessageCircle, BookOpen, Video, Timer,
  MapPin, Atom, Dna, Briefcase, LineChart, ClipboardList, Users, ShieldCheck,
  Building2, ArrowRight, ClipboardCheck, Play, Pause, RotateCw,
} from 'lucide-react';
import { 
  Layout, StatsBar, SchoolsMarquee, DUBAI_SCHOOL_LOGOS, 
  GradientHeadingText,
  MathsArtifact, PhysicsArtifact, ChemistryArtifact, BiologyArtifact, BusinessArtifact, EnglishArtifact, ExamPrepArtifact,
} from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, reviewSchema } from './shared/schemas';

const PARENT_REVIEWS = [
  {
    initials: 'NM',
    name: 'Nadia M., Emirates Hills',
    subject: 'Cambridge IGCSE Mathematics 0580 · Verified Google Review',
    text: 'Our son was set for a grade 6 in Cambridge IGCSE Maths at his Dubai British school when we started with Ustaad in November. His tutor walked through Paper 4 past papers live, corrected the working step by step, and showed exactly where he was leaking marks. He walked into the May exam confident and came out with a grade 8.',
  },
];

const BOOKING = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20an%20IGCSE%20tutor%20in%20Dubai.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

const IgcseGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'igcse-dubai-grid-l' : 'igcse-dubai-grid-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(15,74,155,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'igcse-dubai-grid-l' : 'igcse-dubai-grid-d'})`} />
  </svg>
);

type Challenge = { icon: ReactNode; title: string; problem: string };

const CHALLENGES: Challenge[] = [
  { icon: <List className="w-5 h-5" />, title: 'Six-Mark Biology Answers', problem: 'Six-mark Biology questions demand exact examiner keywords rather than long descriptions.' },
  { icon: <ArrowRightLeft className="w-5 h-5" />, title: 'Formula Rearranging', problem: 'Physics marks are lost when equation substitution and unit conversions are not fluent.' },
  { icon: <Calculator className="w-5 h-5" />, title: 'Stoichiometry & Moles', problem: 'Chemistry mole calculations require clear multi-step workings to secure method marks.' },
  { icon: <MessageSquareQuote className="w-5 h-5" />, title: 'Literature Quote Analysis', problem: 'English essay responses stay thin without structured text quotes and contextual analysis.' },
  { icon: <FlaskConical className="w-5 h-5" />, title: 'Experimental Procedures', problem: 'Paper 6 and Paper 4 practical questions expect precise lab methods and graph interpretation.' },
  { icon: <PenTool className="w-5 h-5" />, title: 'Timed Paper Pacing', problem: 'Students run out of time on long-answer questions without disciplined paper timing practice.' },
];

const FAQS = [
  {
    q: 'Which Dubai schools sit Cambridge IGCSE and which sit Pearson Edexcel International GCSE?',
    a: "Most British-curriculum schools in Dubai sit Cambridge IGCSE (0580, 0625, 0620, 0610), including Dubai College, JESS Dubai, and Nord Anglia Dubai. A smaller group of Dubai schools sit Pearson Edexcel International GCSE (4MA1, 4PH1, 4CH1, 4BI1), including The Winchester School and Deira International School. Tell us your child's school and we confirm the exact board before the first lesson.",
  },
  {
    q: "My child attends a school in Dubai that switched boards this academic year. What do we do about the past-paper practice we've already done?",
    a: "Board switches during Year 10 or Year 11 are the single most common reason parents in Dubai come to us mid-year. Your child's completed past-paper work is not wasted, since core content overlaps. What changes is command-word phrasing and mark-scheme structure. Our tutors rebuild the exam-technique layer without redoing the content.",
  },
  {
    q: 'Do Dubai IGCSE exam centres run any differently from UK centres?',
    a: 'Cambridge and Edexcel exams in Dubai are timetabled by the boards on the same global schedule as the UK. Some sittings fall on Fridays, which is a school-day in most Dubai British-curriculum schools, so students walk into a familiar routine on paper day. For deeper board comparison see our IGCSE hub.',
  },
  {
    q: 'My child is applying to competitive Year 12 pathways at a top Dubai school. How does grade 8 tutoring differ from grade 9 tutoring?',
    a: 'A grade 8 requires strong content plus consistent mark-scheme wording. A grade 9 additionally requires students to hold nerve on the hardest single-mark decisions on the paper, where most candidates lose one or two marks. Grade 9 sessions drill those late-paper questions specifically.',
  },
  {
    q: 'Can lessons be scheduled around Ramadan and UAE public holidays?',
    a: 'Yes. Lesson slots shift during Ramadan to align with fasting hours where families prefer, and UAE public holidays are built into the tutoring calendar. Recorded sessions cover any lesson your child needs to reschedule.',
  },
  {
    q: 'Our child is finishing IGCSE in Dubai and moving to A-Level next year. How do you bridge that jump?',
    a: 'Our IGCSE tutors flag which A-Level subjects the current IGCSE grade profile realistically opens, then hold the top-grade IGCSE topics steady so nothing is lost over the summer transition. Where families prefer, the same tutor can continue into A-Level. See our A-Level Tutor Dubai page for the transition path.',
  },
  {
    q: "My child does IGCSE at a Dubai school but we're returning to the UK before Year 12. Is IGCSE accepted by UK sixth forms?",
    a: 'Yes. Cambridge IGCSE and Pearson Edexcel International GCSE are both accepted by UK sixth forms and used interchangeably with UK GCSE for entry. If your child is preparing for a UK GCSE syllabus specifically rather than IGCSE, see GCSE Tutor Dubai.',
  },
];

function ReviewsScroller() {
  const n = PARENT_REVIEWS.length;
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (n <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % n), 5500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [n]);

  const go = (idx: number) => {
    if (n <= 1) return;
    setActive(((idx % n) + n) % n);
    startTimer();
  };

  const prevIdx = (active - 1 + n) % n;
  const nextIdx = (active + 1) % n;

  const SideCard = ({ idx }: { idx: number }) => (
    <button
      type="button"
      onClick={() => go(idx)}
      className="hidden md:block w-[22%] shrink-0 text-left opacity-40 hover:opacity-70 transition duration-300"
      aria-label={`Show review by ${PARENT_REVIEWS[idx].name}`}
    >
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden h-full">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]" />
        <div className="flex gap-0.5 mb-2">
          {[1, 2, 3, 4, 5].map((j) => <Star key={j} className="h-3 w-3 fill-[#C7A24A] text-[#C7A24A]" />)}
        </div>
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">&ldquo;{PARENT_REVIEWS[idx].text}&rdquo;</p>
        <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-100">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-[10px] notranslate shrink-0" translate="no">
            {PARENT_REVIEWS[idx].initials}
          </div>
          <span className="font-bold text-[#0a1f3d] text-xs notranslate truncate" translate="no">{PARENT_REVIEWS[idx].name.split(',')[0]}</span>
        </div>
      </div>
    </button>
  );

  const r = PARENT_REVIEWS[active];

  if (n === 1) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_32px_rgba(15,74,155,0.08)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((j) => <Star key={j} className="h-4 w-4 fill-[#C7A24A] text-[#C7A24A]" />)}
            </div>
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">Google · Verified Parent</span>
          </div>
          <p className="text-[#374151] text-[15px] sm:text-[16px] leading-relaxed mb-6 italic">
            &ldquo;{r.text}&rdquo;
          </p>
          <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_8px_rgba(15,74,155,0.28)] notranslate shrink-0" translate="no">
              {r.initials}
            </div>
            <div className="min-w-0">
              <div className="font-extrabold text-[#0a1f3d] text-[15px] notranslate truncate" translate="no">{r.name}</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5 truncate">{r.subject.replace('Verified Google review · ', '')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-stretch gap-3 lg:gap-4">
        <SideCard idx={prevIdx} />

        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_8px_32px_rgba(15,74,155,0.10)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((j) => <Star key={j} className="h-4 w-4 fill-[#C7A24A] text-[#C7A24A]" />)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f4a9b]/70 bg-[#0f4a9b]/6 px-2.5 py-1 rounded-full">Google · Verified</span>
              </div>
              <p className="text-[#374151] text-[15px] sm:text-base leading-relaxed mb-5">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_8px_rgba(15,74,155,0.28)] notranslate shrink-0" translate="no">
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold text-[#0a1f3d] text-sm notranslate truncate" translate="no">{r.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5 truncate">{r.subject.replace('Verified Google review · ', '')}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <SideCard idx={nextIdx} />
      </div>

      <div className="flex items-center justify-center gap-3 mt-5">
        <button
          type="button"
          onClick={() => go(active - 1)}
          aria-label="Previous review"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white hover:border-[#0f4a9b] transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {PARENT_REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-[#0f4a9b]' : 'w-1.5 bg-slate-300 hover:bg-slate-400'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label="Next review"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white hover:border-[#0f4a9b] transition-all"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function ChallengesAccordion({ challenges }: { challenges: Challenge[] }) {
  const [active, setActive] = useState<number>(-1);
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden divide-y divide-slate-100">
      {challenges.map((c, i) => {
        const isOpen = active === i;
        return (
          <div
            key={i}
            className={`transition-colors duration-200 ${
              isOpen ? 'bg-[#0f4a9b]/[0.02]' : 'hover:bg-slate-50/70'
            }`}
          >
            <button
              type="button"
              onClick={() => setActive(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 py-3.5 sm:px-5 sm:py-4 text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] text-white shadow-xs'
                      : 'bg-[#0f4a9b]/8 text-[#0f4a9b] group-hover:bg-[#0f4a9b]/12'
                  }`}
                >
                  {c.icon}
                </div>
                <span
                  className={`font-bold text-[14px] sm:text-[15px] leading-snug transition-colors truncate ${
                    isOpen ? 'text-[#0f4a9b]' : 'text-[#0a1f3d] group-hover:text-[#0f4a9b]'
                  }`}
                >
                  {c.title}
                </span>
              </div>

              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#0f4a9b] text-white rotate-180 shadow-xs'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-[#0f4a9b]/10 group-hover:text-[#0f4a9b]'
                }`}
              >
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-3.5 sm:px-5 sm:pb-4 pt-0">
                    <div className="rounded-xl px-4 py-2.5 bg-[#f4f7fc] border border-[#0f4a9b]/10 border-l-[3px] border-l-[#0f4a9b]">
                      <p className="text-[12.5px] sm:text-[13px] text-[#3a4f6e] leading-relaxed mb-0">
                        {c.problem}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

const UAE_COMMUNITIES = [
  'Emirates Hills', 'Jumeirah', 'Arabian Ranches', 'Dubai Hills', 
  'Downtown Dubai', 'Palm Jumeirah', 'Dubai Marina', 'Business Bay'
];

function UaeAssistance3DSwitcher() {
  const cards = [
    {
      Icon: Users,
      badge: '2,500+ Taught',
      accentColor: '#0f4a9b',
      title: 'Trusted by 2,500+ Families',
      text: 'Our tutoring team supports students across British (IGCSE, GCSE, A-Level), IB (MYP, DP), and American (AP) curricula, along with SAT preparation. All enquiries receive a fast 15-minute response.',
      pills: ['15-Min Response', 'Board-Matched Tutors', 'Online & In-Person', 'UAE School Calendar'],
    },
    {
      Icon: MapPin,
      badge: 'All Emirates',
      accentColor: '#C7A24A',
      title: 'Dubai Communities',
      text: 'Connecting students across Downtown Dubai, Dubai Marina, Jumeirah, Arabian Ranches, Emirates Hills, and Palm Jumeirah with specialist private tutors for online lessons.',
      pills: ['Downtown & Marina', 'Jumeirah & Hills', 'Arabian Ranches', 'Palm Jumeirah'],
    },
    {
      Icon: ShieldCheck,
      badge: '100% Customised',
      accentColor: '#059669',
      title: 'Tailored Academic Tutoring',
      text: 'Whether you require short-term exam prep, intensive mock revision, or weekly academic tutoring, Ustaad pairs your child with top-rated private tutors across Dubai.',
      pills: ['Past Paper Drills', 'Mock Exam Simulation', 'Board Alignment', 'Parent Progress Reports'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {cards.map((card, idx) => {
          const CardIcon = card.Icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2.5 mb-2.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: card.accentColor }}
                  >
                    <CardIcon className="w-4.5 h-4.5" />
                  </div>
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider shrink-0"
                    style={{
                      backgroundColor: `${card.accentColor}12`,
                      color: card.accentColor,
                      border: `1px solid ${card.accentColor}30`,
                    }}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#0a1f3d] mb-1.5 leading-snug">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-3">
                  {card.text}
                </p>
              </div>

              {/* Single Line Rotating Pill Track within its Own Card */}
              <div className="pt-2.5 border-t border-slate-100 overflow-hidden relative">
                {/* Edge fade gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                  className="flex items-center gap-2 w-max whitespace-nowrap py-0.5"
                  animate={{ x: ['0%', '-33.333%'] }}
                  transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 14 + idx * 2,
                  }}
                >
                  {[...card.pills, ...card.pills, ...card.pills].map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10.5px] font-semibold bg-slate-50 border border-slate-200/90 text-slate-700 shrink-0 select-none"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: card.accentColor }}
                      />
                      {pill}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type IgcseSubjectItem = {
  id: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  tag: string;
  href: string;
  color: string;
  artifact: React.ComponentType;
  desc: string;
};

const IGCSE_SUBJECTS_LIST: IgcseSubjectItem[] = [
  {
    id: 'maths',
    title: 'IGCSE Mathematics',
    tag: 'Cambridge 0580 Extended & Edexcel 4MA1 Higher',
    desc: 'Master algebra, vector geometry, and calculator paper technique to secure every method mark.',
    icon: Calculator,
    color: '#0f4a9b',
    artifact: MathsArtifact,
    href: '/maths',
  },
  {
    id: 'physics',
    title: 'IGCSE Physics',
    tag: 'Cambridge 0625 & Edexcel 4PH1',
    desc: 'Build formula recall, unit accuracy, and paper technique for Cambridge and Edexcel practicals.',
    icon: Atom,
    color: '#2563eb',
    artifact: PhysicsArtifact,
    href: '/physics',
  },
  {
    id: 'chemistry',
    title: 'IGCSE Chemistry',
    tag: 'Cambridge 0620 & Edexcel 4CH1',
    desc: 'Demystify mole calculations, organic pathways, and mark schemes that protect method marks.',
    icon: FlaskConical,
    color: '#0d9488',
    artifact: ChemistryArtifact,
    href: '/chemistry',
  },
  {
    id: 'biology',
    title: 'IGCSE Biology',
    tag: 'Cambridge 0610 & Edexcel 4BI1',
    desc: 'Target 6-mark extended answers using exact examiner keywords and board-specific mark schemes.',
    icon: Dna,
    color: '#059669',
    artifact: BiologyArtifact,
    href: '/biology',
  },
  {
    id: 'business',
    title: 'IGCSE Business & Economics',
    tag: 'Cambridge 0450/0455 & Edexcel 4BS1/4EC1',
    desc: 'Master case study analysis, data extraction, and balanced evaluation to secure Grades 8 & 9.',
    icon: Briefcase,
    color: '#c17b2f',
    artifact: BusinessArtifact,
    href: '/business',
  },
  {
    id: 'english',
    title: 'IGCSE English Language & Lit',
    tag: 'Cambridge 0500/0475 & Edexcel 4EA1/4ET1',
    desc: 'Sharpen directed writing frameworks, set-text quotations, and analytical essay vocabulary.',
    icon: BookOpen,
    color: '#4f46e5',
    artifact: EnglishArtifact,
    href: '/english',
  },
];

function IgcseSubjectCard({ sub, idx }: { sub: IgcseSubjectItem; idx: number }) {
  const Icon = sub.icon;
  const Artifact = sub.artifact;

  return (
    <motion.a
      href={sub.href}
      key={sub.id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: (idx % 3) * 0.06 }}
      className="relative bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_38px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group overflow-hidden w-[82vw] max-w-[325px] sm:w-full sm:max-w-[340px] mx-auto shrink-0 snap-center select-none"
    >
      {/* Top Accent Gradient Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all duration-300"
        style={{
          background: `linear-gradient(90deg, ${sub.color}, #0a1f3d)`,
        }}
      />

      {/* Header: Subject Icon & Title */}
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300"
          style={{
            background: `linear-gradient(135deg, ${sub.color}, #0a1f3d)`,
          }}
        >
          <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
        </div>
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200 leading-snug truncate">
            {sub.title}
          </h3>
          <div
            className="w-8 h-[2px] mt-1 rounded-full group-hover:w-14 transition-all duration-300"
            style={{ backgroundColor: sub.color }}
          />
        </div>
      </div>

      {/* Specification Tag */}
      <div className="mb-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10.5px] font-semibold bg-[#f4f7fc] text-[#0f4a9b] border border-[#0f4a9b]/15 tracking-tight truncate max-w-full">
          {sub.tag}
        </span>
      </div>

      {/* Description - Crisp 2 lines without ellipsis */}
      <p className="text-[#4b5563] group-hover:text-[#1f2937] transition-colors duration-200 text-xs sm:text-[13px] leading-relaxed mb-2 min-h-[38px] flex items-center">
        {sub.desc}
      </p>

      {/* Bespoke Interactive Subject Artifact */}
      <div className="my-1 group-hover:scale-[1.01] transition-transform duration-300">
        <Artifact />
      </div>

      {/* Footer Link */}
      <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200">
        <span>Explore {sub.title}</span>
        <ArrowRight className="w-3.5 h-3.5 text-[#0f4a9b] transform group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </motion.a>
  );
}

function IgcseSubjectsShowcase() {
  const [activeSlide, setActiveSlide] = useState<0 | 1>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const stemSubjects = IGCSE_SUBJECTS_LIST.slice(0, 3);
  const humanitiesSubjects = IGCSE_SUBJECTS_LIST.slice(3, 6);
  const currentSlideSubjects = activeSlide === 0 ? stemSubjects : humanitiesSubjects;

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const cardWidth = el.scrollWidth / IGCSE_SUBJECTS_LIST.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    if (idx !== mobileIndex && idx >= 0 && idx < IGCSE_SUBJECTS_LIST.length) {
      setMobileIndex(idx);
    }
  };

  const scrollToMobileIndex = (idx: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.scrollWidth / IGCSE_SUBJECTS_LIST.length;
    scrollRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
    setMobileIndex(idx);
  };

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#F4F8FD] relative overflow-hidden isolate border-b border-slate-100">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Category Tabs & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5 sm:mb-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-white border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-xs font-bold mb-2 shadow-2xs">
              Specialised Tutoring
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] tracking-tight">
              <GradientHeadingText text="IGCSE Subjects We Cover in Dubai" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-medium mt-1">
              Expert 1-to-1 support across Cambridge (CIE) and Pearson Edexcel specifications.
            </p>
          </div>

          {/* Desktop Controls: Category Tabs */}
          <div className="hidden sm:flex items-center justify-center md:justify-end shrink-0">
            <div className="bg-white/90 p-1 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveSlide(0)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeSlide === 0
                    ? 'bg-[#0f4a9b] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0a1f3d] hover:bg-slate-100/70'
                }`}
              >
                Core STEM (3)
              </button>
              <button
                type="button"
                onClick={() => setActiveSlide(1)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeSlide === 1
                    ? 'bg-[#0f4a9b] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0a1f3d] hover:bg-slate-100/70'
                }`}
              >
                Humanities &amp; Bio (3)
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View: 1-Row Animated Slider */}
        <div className="hidden sm:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: activeSlide === 0 ? -16 : 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeSlide === 0 ? 16 : -16 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="grid grid-cols-3 gap-4 lg:gap-5 mb-4"
            >
              {currentSlideSubjects.map((sub, idx) => (
                <IgcseSubjectCard key={sub.id} sub={sub} idx={idx} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile View: Swipeable Horizontal Track */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleMobileScroll}
            className="flex gap-3.5 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {IGCSE_SUBJECTS_LIST.map((sub, idx) => (
              <IgcseSubjectCard key={sub.id} sub={sub} idx={idx} />
            ))}
          </div>

          {/* Mobile Dot Indicators & Hint */}
          <div className="flex items-center justify-between px-1 mt-2.5">
            <span className="text-[11px] text-slate-400 font-medium">← Swipe to explore</span>
            <div className="flex items-center gap-1.5">
              {IGCSE_SUBJECTS_LIST.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to subject ${i + 1}`}
                  onClick={() => scrollToMobileIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    mobileIndex === i ? 'w-5 bg-[#0f4a9b]' : 'w-1.5 bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Compact Exam Prep Banner */}
        <motion.a
          href="/exam-preparation"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-3 sm:mt-4 relative bg-white rounded-xl border border-gray-200/80 p-3.5 sm:p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(199,162,74,0.14)] hover:border-[#C7A24A]/60 hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-3 group overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#b38728]" />

          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-xs shrink-0 bg-gradient-to-br from-[#C7A24A] to-[#9a7620] text-white group-hover:scale-105 transition-transform duration-300">
              <ClipboardCheck className="h-4 w-4" strokeWidth={2.2} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-tight">
                  IGCSE Exam Preparation &amp; Mock Mastery
                </h3>
                <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-[#C7A24A]/15 text-[#8c6c19] border border-[#C7A24A]/30 uppercase tracking-wider">
                  High Impact
                </span>
              </div>
              <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed mt-0.5">
                Timed past paper drills and mark-scheme dissection to convert predicted Grade 6s into Grade 8s and 9s.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-[#0f4a9b] shrink-0 group-hover:translate-x-1 transition-transform">
            <span>Explore Exam Prep</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}

type BoardTab = 'cambridge' | 'edexcel' | 'compare';

/* ── 3D VECTOR EMBLEM: CAMBRIDGE (CIE) ── */
function Cambridge3DEmblem() {
  return (
    <div className="relative w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center select-none pointer-events-none shrink-0">
      {/* Ambient Pulsing Glow */}
      <motion.div
        className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl pointer-events-none"
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />

      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="cieShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="60%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#0a1f3d" />
          </linearGradient>
          <linearGradient id="cieGoldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>
          <filter id="cieShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#0f4a9b" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Orbiting Compass Ring */}
        <motion.ellipse
          cx="50"
          cy="50"
          rx="44"
          ry="16"
          fill="none"
          stroke="#C7A24A"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          style={{ originX: '50px', originY: '50px' }}
        />

        {/* Orbiting Satellite Particle */}
        <motion.circle
          cx="50"
          cy="50"
          r="3"
          fill="#38bdf8"
          animate={{
            cx: [10, 50, 90, 50, 10],
            cy: [50, 36, 50, 64, 50],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />

        {/* Main 3D Cambridge Shield with Auto-Movement */}
        <motion.g
          filter="url(#cieShadow)"
          animate={{
            y: [-3, 3, -3],
            rotate: [-2, 2, -2],
          }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        >
          {/* Shield Outer Rim */}
          <path
            d="M 50 12 Q 78 12 80 34 C 80 62 50 86 50 86 C 50 86 20 62 20 34 Q 22 12 50 12 Z"
            fill="url(#cieShieldGrad)"
            stroke="url(#cieGoldTrim)"
            strokeWidth="2.5"
          />

          {/* 3D Interior Chevron Divider */}
          <path
            d="M 50 20 L 74 34 C 74 56 50 78 50 78 C 50 78 26 56 26 34 Z"
            fill="#0f4a9b"
            opacity="0.6"
          />

          {/* Golden Star Crest */}
          <circle cx="50" cy="42" r="9" fill="url(#cieGoldTrim)" />
          <path
            d="M 50 35 L 52.5 40 L 58 40.5 L 54 44.5 L 55.5 50 L 50 47 L 44.5 50 L 46 44.5 L 42 40.5 L 47.5 40 Z"
            fill="#0a1f3d"
          />

          {/* Floating Tag Label */}
          <rect x="34" y="60" width="32" height="12" rx="3" fill="#ffffff" stroke="#C7A24A" strokeWidth="1" />
          <text x="50" y="69" textAnchor="middle" fill="#0f4a9b" fontSize="7.5" fontWeight="900" fontFamily="monospace">
            CIE 0580
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 3D VECTOR EMBLEM: PEARSON EDEXCEL ── */
function Edexcel3DEmblem() {
  return (
    <div className="relative w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center select-none pointer-events-none shrink-0">
      {/* Ambient Pulsing Glow */}
      <motion.div
        className="absolute inset-0 bg-amber-400/25 rounded-full blur-xl pointer-events-none"
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />

      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="edxGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="45%" stopColor="#C7A24A" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>
          <linearGradient id="edxCubeFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a1f3d" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <filter id="edxShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#C7A24A" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Orbiting Halo Ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#0f4a9b"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
          style={{ originX: '50px', originY: '50px' }}
        />

        {/* 3D Stepped Isometric Cube with Auto-Movement */}
        <motion.g
          filter="url(#edxShadow)"
          animate={{
            y: [3, -3, 3],
            rotate: [2, -2, 2],
          }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        >
          {/* Top Hex / Diamond Plate */}
          <polygon points="50,15 78,31 50,47 22,31" fill="url(#edxGoldGrad)" stroke="#ffffff" strokeWidth="1.2" />

          {/* Left Isometric Face */}
          <polygon points="22,31 50,47 50,78 22,62" fill="url(#edxCubeFace)" stroke="#C7A24A" strokeWidth="1.2" />

          {/* Right Isometric Face */}
          <polygon points="50,47 78,31 78,62 50,78" fill="#0f4a9b" stroke="#C7A24A" strokeWidth="1.2" />

          {/* Stepped Evaluation Mark Layers */}
          <line x1="22" y1="41" x2="50" y2="57" stroke="#C7A24A" strokeWidth="1.5" opacity="0.8" />
          <line x1="22" y1="51" x2="50" y2="67" stroke="#C7A24A" strokeWidth="1.5" opacity="0.8" />
          <line x1="50" y1="57" x2="78" y2="41" stroke="#fef08a" strokeWidth="1.5" opacity="0.8" />
          <line x1="50" y1="67" x2="78" y2="51" stroke="#fef08a" strokeWidth="1.5" opacity="0.8" />

          {/* Floating Grade 9 Badge */}
          <circle cx="50" cy="47" r="7.5" fill="#ffffff" stroke="#C7A24A" strokeWidth="1.2" />
          <text x="50" y="50" textAnchor="middle" fill="#9a7620" fontSize="7.5" fontWeight="900">
            9-1
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ── 3D VECTOR EMBLEM: QUICK COMPARISON ── */
function Comparison3DEmblem() {
  return (
    <div className="relative w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center select-none pointer-events-none shrink-0">
      <motion.div
        className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        {/* Dynamic 3D Balance Beam with Auto-Movement */}
        <motion.g
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          style={{ originX: '50px', originY: '30px' }}
        >
          {/* Central Fulcrum Joint */}
          <circle cx="50" cy="30" r="5" fill="#0f4a9b" stroke="#C7A24A" strokeWidth="1.5" />
          {/* Horizontal Beam */}
          <line x1="16" y1="30" x2="84" y2="30" stroke="#0a1f3d" strokeWidth="3" strokeLinecap="round" />
          {/* Left CIE Pan */}
          <line x1="20" y1="30" x2="16" y2="52" stroke="#0f4a9b" strokeWidth="1.2" />
          <line x1="28" y1="30" x2="32" y2="52" stroke="#0f4a9b" strokeWidth="1.2" />
          <path d="M 12 52 Q 24 64 36 52 Z" fill="#0f4a9b" stroke="#C7A24A" strokeWidth="1.2" />
          <text x="24" y="60" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="800">CIE</text>

          {/* Right Edexcel Pan */}
          <line x1="72" y1="30" x2="68" y2="52" stroke="#C7A24A" strokeWidth="1.2" />
          <line x1="80" y1="30" x2="84" y2="52" stroke="#C7A24A" strokeWidth="1.2" />
          <path d="M 64 52 Q 76 64 88 52 Z" fill="#C7A24A" stroke="#0a1f3d" strokeWidth="1.2" />
          <text x="76" y="60" textAnchor="middle" fill="#0a1f3d" fontSize="6.5" fontWeight="800">EDX</text>
        </motion.g>
        {/* Stand Base */}
        <path d="M 48 30 L 46 80 L 36 84 L 64 84 L 54 80 L 52 30 Z" fill="#0a1f3d" />
      </svg>
    </div>
  );
}

function IgcseBoardConsole() {
  const [activeBoard, setActiveBoard] = useState<BoardTab>('cambridge');

  return (
    <section className="py-5 sm:py-10 lg:py-14 bg-[#f8fafd] border-b border-slate-100 relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#0f4a9b_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-2.5 sm:mb-5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-[10px] sm:text-xs font-bold mb-1 shadow-2xs">
            Exam Board Alignment
          </div>
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] tracking-tight leading-tight">
            Cambridge (CIE) &amp; Pearson Edexcel
          </h2>
          <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5 sm:mt-1 leading-snug line-clamp-1 sm:line-clamp-none">
            Calibrated to official mark schemes, command words, and paper formats.
          </p>
        </div>

        {/* Animated Segmented Switcher Console */}
        <div className="flex justify-center mb-2.5 sm:mb-5">
          <div className="inline-flex p-1 sm:p-1.5 rounded-xl sm:rounded-2xl bg-slate-200/80 backdrop-blur-md border border-slate-300/60 shadow-inner max-w-full overflow-x-auto">
            {[
              { id: 'cambridge', label: 'Cambridge (CIE) IGCSE', shortLabel: 'Cambridge', badge: '0580 / 0625' },
              { id: 'edexcel', label: 'Pearson Edexcel IGCSE', shortLabel: 'Edexcel', badge: '4MA1 / 4PH1' },
              { id: 'compare', label: 'Quick Comparison', shortLabel: 'Compare', badge: 'Key Diffs' },
            ].map((tab) => {
              const isActive = activeBoard === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveBoard(tab.id as BoardTab)}
                  className={`relative px-2.5 sm:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-extrabold transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 select-none cursor-pointer whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="boardConsolePill"
                      className="absolute inset-0 rounded-lg sm:rounded-xl shadow-md"
                      style={{
                        background:
                          tab.id === 'cambridge'
                            ? 'linear-gradient(135deg, #0f4a9b, #0a3570)'
                            : tab.id === 'edexcel'
                            ? 'linear-gradient(135deg, #C7A24A, #9a7620)'
                            : 'linear-gradient(135deg, #0a1f3d, #1e3a8a)',
                      }}
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 sm:hidden">{tab.shortLabel}</span>
                  <span className="relative z-10 hidden sm:inline">{tab.label}</span>
                  <span
                    className={`relative z-10 hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-300/70 text-slate-700'
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stable Console Card */}
        <div className="w-full">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 p-3.5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgba(15,74,155,0.06)] overflow-hidden select-none">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#38bdf8] to-[#C7A24A]" />

            <AnimatePresence mode="wait">
              {activeBoard === 'cambridge' && (
                <motion.div
                  key="cambridge"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid md:grid-cols-12 gap-3 sm:gap-6 items-center"
                >
                  {/* Left Column: Summary, 3D Emblem & Dubai Schools */}
                  <div className="md:col-span-7 flex flex-col justify-between h-full" style={{ transform: 'translateZ(25px)' }}>
                    <div>
                      <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                        <Cambridge3DEmblem />
                        <div>
                          <span className="inline-block px-2 py-0.5 bg-[#0f4a9b] text-white text-[9.5px] sm:text-[11px] font-extrabold rounded shadow-2xs uppercase">
                            CAMBRIDGE (CIE) IGCSE
                          </span>
                          <h3 className="text-sm sm:text-lg font-extrabold text-[#0a1f3d] mt-0.5 leading-snug">
                            Core &amp; Extended Paper Mastery
                          </h3>
                        </div>
                      </div>

                      <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed mb-2 sm:mb-3 pl-0.5 sm:pl-1">
                        Cambridge IGCSE exams heavily weight strict command-word adherence, algebraic precision, and Paper 6 Alternative to Practical experimental design.
                      </p>
                    </div>

                    {/* Top Dubai Schools */}
                    <div className="pt-2 sm:pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1 sm:gap-1.5 text-[10.5px] sm:text-xs text-slate-600 mb-2 md:mb-0">
                      <span className="font-bold text-[#0a1f3d]">Dubai Schools:</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-slate-100 font-medium">Dubai College</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-slate-100 font-medium">JESS Dubai</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-slate-100 font-medium">Nord Anglia</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-slate-100 font-medium">Repton</span>
                    </div>
                  </div>

                  {/* Right Column: 3D Stage with Spec Chips & Auto-Scanning Laser Meter */}
                  <div
                    className="md:col-span-5 bg-gradient-to-br from-[#f4f7fc] to-[#edf3fc] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-[#0f4a9b]/20 flex flex-col gap-1.5 sm:gap-2.5 relative overflow-hidden shadow-inner"
                    style={{ transform: 'translateZ(35px)' }}
                  >
                    {/* Auto-Scanning Radar Laser Line */}
                    <motion.div
                      className="absolute -inset-y-4 w-14 bg-gradient-to-r from-transparent via-blue-400/25 to-transparent pointer-events-none"
                      animate={{ x: [-30, 260, -30] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                    />

                    <div className="text-[10px] sm:text-[11px] font-extrabold text-[#0f4a9b] uppercase tracking-wider flex items-center justify-between relative z-10">
                      <span>Key Specifications</span>
                      <span className="text-[9.5px] sm:text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-[#0f4a9b]/20 shadow-2xs">
                        0580 · 0625
                      </span>
                    </div>

                    <div className="space-y-1 sm:space-y-1.5 relative z-10">
                      <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/95 border border-slate-200/90 text-[10.5px] sm:text-xs font-medium text-slate-700 shadow-2xs">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0f4a9b] shrink-0" />
                          <span>Mathematics 0580</span>
                        </div>
                        <span className="text-[9.5px] sm:text-[10px] font-bold text-[#0f4a9b] bg-blue-50 px-1.5 py-0.5 rounded">Core &amp; Ext</span>
                      </div>

                      <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/95 border border-slate-200/90 text-[10.5px] sm:text-xs font-medium text-slate-700 shadow-2xs">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0f4a9b] shrink-0" />
                          <span>Sciences 0625 / 0620 / 0610</span>
                        </div>
                        <span className="text-[9.5px] sm:text-[10px] font-bold text-[#0f4a9b] bg-blue-50 px-1.5 py-0.5 rounded">Paper 2, 4 &amp; 6</span>
                      </div>

                      <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/95 border border-slate-200/90 text-[10.5px] sm:text-xs font-medium text-slate-700 shadow-2xs">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0f4a9b] shrink-0" />
                          <span>English First Language 0500</span>
                        </div>
                        <span className="text-[9.5px] sm:text-[10px] font-bold text-[#0f4a9b] bg-blue-50 px-1.5 py-0.5 rounded">Set Texts</span>
                      </div>
                    </div>

                    {/* Micro Mark Scheme Meter with Pulsing Dot */}
                    <div className="pt-1 border-t border-[#0f4a9b]/15 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-600 relative z-10">
                      <span className="font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping inline-block" />
                        Examiner Focus:
                      </span>
                      <span className="font-mono font-bold text-[#0f4a9b] bg-white px-1.5 py-0.5 rounded border border-[#0f4a9b]/20 shadow-2xs text-[9.5px] sm:text-[10px]">
                        [M1] Method + [A1] Acc
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeBoard === 'edexcel' && (
                <motion.div
                  key="edexcel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid md:grid-cols-12 gap-3 sm:gap-6 items-center"
                >
                  {/* Left Column: Summary, 3D Emblem & Dubai Schools */}
                  <div className="md:col-span-7 flex flex-col justify-between h-full" style={{ transform: 'translateZ(25px)' }}>
                    <div>
                      <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                        <Edexcel3DEmblem />
                        <div>
                          <span className="inline-block px-2 py-0.5 bg-[#C7A24A] text-[#0a1f3d] text-[9.5px] sm:text-[11px] font-extrabold rounded shadow-2xs uppercase">
                            PEARSON EDEXCEL IGCSE
                          </span>
                          <h3 className="text-sm sm:text-lg font-extrabold text-[#0a1f3d] mt-0.5 leading-snug">
                            Structured Multi-Step &amp; Case Analysis
                          </h3>
                        </div>
                      </div>

                      <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed mb-2 sm:mb-3 pl-0.5 sm:pl-1">
                        Edexcel IGCSE papers reward structured multi-step calculations, case study data extraction, and higher-tariff 6 to 9-mark extended evaluation chains.
                      </p>
                    </div>

                    {/* Top Dubai Schools */}
                    <div className="pt-2 sm:pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1 sm:gap-1.5 text-[10.5px] sm:text-xs text-slate-600 mb-2 md:mb-0">
                      <span className="font-bold text-[#0a1f3d]">Dubai Schools:</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-slate-100 font-medium">The Winchester School</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-slate-100 font-medium">Deira International</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-slate-100 font-medium">Regent International</span>
                    </div>
                  </div>

                  {/* Right Column: 3D Stage with Spec Chips & Auto-Scanning Laser Meter */}
                  <div
                    className="md:col-span-5 bg-gradient-to-br from-[#fffdf7] to-[#fef8ea] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-[#C7A24A]/30 flex flex-col gap-1.5 sm:gap-2.5 relative overflow-hidden shadow-inner"
                    style={{ transform: 'translateZ(35px)' }}
                  >
                    {/* Auto-Scanning Radar Laser Line */}
                    <motion.div
                      className="absolute -inset-y-4 w-14 bg-gradient-to-r from-transparent via-amber-400/25 to-transparent pointer-events-none"
                      animate={{ x: [-30, 260, -30] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                    />

                    <div className="text-[10px] sm:text-[11px] font-extrabold text-[#9a7620] uppercase tracking-wider flex items-center justify-between relative z-10">
                      <span>Key Specifications</span>
                      <span className="text-[9.5px] sm:text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-[#C7A24A]/35 shadow-2xs">
                        4MA1 · 4PH1
                      </span>
                    </div>

                    <div className="space-y-1 sm:space-y-1.5 relative z-10">
                      <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/95 border border-slate-200/90 text-[10.5px] sm:text-xs font-medium text-slate-700 shadow-2xs">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A24A] shrink-0" />
                          <span>Mathematics 4MA1</span>
                        </div>
                        <span className="text-[9.5px] sm:text-[10px] font-bold text-[#9a7620] bg-amber-50 px-1.5 py-0.5 rounded">Higher 1H &amp; 2H</span>
                      </div>

                      <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/95 border border-slate-200/90 text-[10.5px] sm:text-xs font-medium text-slate-700 shadow-2xs">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A24A] shrink-0" />
                          <span>Sciences 4PH1 / 4CH1</span>
                        </div>
                        <span className="text-[9.5px] sm:text-[10px] font-bold text-[#9a7620] bg-amber-50 px-1.5 py-0.5 rounded">Paper 1 &amp; 2</span>
                      </div>

                      <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/95 border border-slate-200/90 text-[10.5px] sm:text-xs font-medium text-slate-700 shadow-2xs">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A24A] shrink-0" />
                          <span>Business 4BS1 &amp; 4EC1</span>
                        </div>
                        <span className="text-[9.5px] sm:text-[10px] font-bold text-[#9a7620] bg-amber-50 px-1.5 py-0.5 rounded">Case Studies</span>
                      </div>
                    </div>

                    {/* Micro Mark Ladder with Pulsing Dot */}
                    <div className="pt-1 border-t border-[#C7A24A]/20 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-600 relative z-10">
                      <span className="font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping inline-block" />
                        Examiner Focus:
                      </span>
                      <span className="font-mono font-bold text-[#9a7620] bg-white px-1.5 py-0.5 rounded border border-[#C7A24A]/30 shadow-2xs text-[9.5px] sm:text-[10px]">
                        AO1 → AO2 → AO3
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeBoard === 'compare' && (
                <motion.div
                  key="compare"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2.5 sm:space-y-4"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-1" style={{ transform: 'translateZ(25px)' }}>
                    <Comparison3DEmblem />
                    <div>
                      <span className="inline-block px-2 py-0.5 bg-[#0a1f3d] text-white text-[9.5px] sm:text-[11px] font-extrabold rounded shadow-2xs uppercase">
                        SIDE-BY-SIDE EVALUATION
                      </span>
                      <h3 className="text-sm sm:text-lg font-extrabold text-[#0a1f3d] mt-0.5 leading-snug">
                        Key Differences Between Boards
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4" style={{ transform: 'translateZ(30px)' }}>
                    <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col shadow-2xs">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0f4a9b] mb-0.5">
                        Mark Scheme Style
                      </span>
                      <h4 className="font-extrabold text-xs sm:text-sm text-[#0a1f3d] mb-0.5">Rigid Steps vs Leveled Rubrics</h4>
                      <p className="text-[10.5px] sm:text-xs text-slate-600 leading-relaxed">
                        Cambridge requires exact command-word phrasing and step-by-step working. Edexcel mark bands reward analytical synthesis and context application.
                      </p>
                    </div>

                    <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col shadow-2xs">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#C7A24A] mb-0.5">
                        Science Practical Papers
                      </span>
                      <h4 className="font-extrabold text-xs sm:text-sm text-[#0a1f3d] mb-0.5">Paper 6 vs Embedded Papers</h4>
                      <p className="text-[10.5px] sm:text-xs text-slate-600 leading-relaxed">
                        Cambridge Sciences feature a dedicated written practical paper (Paper 6). Edexcel tests practical methods directly within Papers 1 &amp; 2.
                      </p>
                    </div>

                    <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-blue-50/60 border border-blue-200/80 flex flex-col shadow-2xs">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0f4a9b] mb-0.5">
                        Mid-Year School Moves
                      </span>
                      <h4 className="font-extrabold text-xs sm:text-sm text-[#0a1f3d] mb-0.5">Seamless Board Transfer</h4>
                      <p className="text-[10.5px] sm:text-xs text-slate-600 leading-relaxed">
                        If your child switches schools between Cambridge and Edexcel in Dubai, our tutors rebuild exam technique without redoing overlapping syllabus topics.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HOW ONLINE IGCSE TUTORING WORKS (CIRCULAR MOTION ORBIT SHOWCASE) ── */
const TUTORING_FLOW_STEPS = [
  {
    step: 1,
    num: '01',
    title: 'Diagnostic Assessment',
    desc: "We review your child's school, target grades, and current weak areas to pair them with a specialist tutor who knows their exact exam board.",
    color: '#0f4a9b',
    gradient: 'from-[#0f4a9b] to-[#1e5bb3]',
    icon: ClipboardCheck,
    pills: ['School & Board Review', 'Target Grade Gap Analysis', 'Specialist Tutor Pairing'],
  },
  {
    step: 2,
    num: '02',
    title: 'Live 1-to-1 Interactive Sessions',
    desc: 'Lessons feature real-time digital whiteboards, live past paper solving, immediate feedback, and session recordings for easy exam revision.',
    color: '#C7A24A',
    gradient: 'from-[#C7A24A] to-[#9a7620]',
    icon: Video,
    pills: ['Interactive Digital Whiteboard', 'Live Past Paper Solving', 'Recorded for 24/7 Revision'],
  },
  {
    step: 3,
    num: '03',
    title: 'Continuous Progress Tracking',
    desc: 'Parents receive regular progress updates after lessons and mock assessments, keeping learning on track for grade 8 and 9 outcomes.',
    color: '#10b981',
    gradient: 'from-[#10b981] to-[#047857]',
    icon: LineChart,
    pills: ['Regular Parent WhatsApp Updates', 'Timed Mock Assessments', 'Grade 8/9 Target Trajectory'],
  },
];

function HowTutoringWorksCircularShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance circular motion continuously every 3.8 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % TUTORING_FLOW_STEPS.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = TUTORING_FLOW_STEPS[activeStep];
  const CurrentIcon = current.icon;

  // Orbit Geometry: 3 nodes spaced at 120° intervals
  // When activeStep changes, wheel rotates by -activeStep * 120° so that active node faces the showcase card
  const wheelRotation = -activeStep * 120;

  return (
    <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <div className="text-center mb-2.5 sm:mb-6 lg:mb-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:py-1 bg-white border border-[#0f4a9b]/15 text-[#0f4a9b] rounded-full text-[10px] sm:text-xs font-bold mb-1 sm:mb-2 shadow-2xs">
          Interactive Learning Platform
        </div>
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-1 sm:mb-2 tracking-tight leading-tight">
          <GradientHeadingText text="How Online IGCSE Tutoring Works" />
        </h2>
        <p className="text-gray-600 text-[11px] sm:text-xs lg:text-sm font-medium line-clamp-1 sm:line-clamp-none">
          Step-by-step guidance designed for Cambridge &amp; Edexcel success in the UAE.
        </p>
      </div>

      {/* Main Interactive Stage: Circular Orbit Console + Active Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-10 items-center">
        {/* Left Column: 3D Circular Orbit Wheel */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-[170px] h-[170px] sm:w-[230px] sm:h-[230px] lg:w-[320px] lg:h-[320px] select-none flex items-center justify-center">
            {/* Ambient Background Radial Glow */}
            <motion.div
              className="absolute inset-2 sm:inset-4 rounded-full blur-2xl sm:blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
              style={{ backgroundColor: current.color }}
            />

            {/* Orbit SVG Ring Tracks */}
            <svg viewBox="0 0 340 340" className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="orbitRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#C7A24A" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.25" />
                </linearGradient>
              </defs>
              {/* Outer Track */}
              <circle cx="170" cy="170" r="139" fill="none" stroke="rgba(15,74,155,0.06)" strokeWidth="1" />
              {/* Main Orbit Ring with dashed guide */}
              <circle
                cx="170"
                cy="170"
                r="115"
                fill="none"
                stroke="url(#orbitRingGrad)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {/* Inner Track */}
              <circle cx="170" cy="170" r="80" fill="none" stroke="rgba(15,74,155,0.08)" strokeWidth="1" />
            </svg>

            {/* Center Orbital Core */}
            <div className="relative z-10 w-14 h-14 sm:w-18 sm:h-18 lg:w-22 lg:h-22 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-[0_4px_16px_rgba(15,74,155,0.08)] flex flex-col items-center justify-center text-center p-1 select-none">
              <div
                className={`w-1.5 h-1.5 rounded-full mb-0.5 transition-colors duration-500 ${isPaused ? '' : 'animate-ping'}`}
                style={{ backgroundColor: current.color }}
              />
              <span className="text-[8px] sm:text-[9.5px] font-black uppercase tracking-wider text-slate-400 leading-none">
                Step
              </span>
              <span
                className="text-sm sm:text-lg lg:text-2xl font-black transition-colors duration-500 leading-tight"
                style={{ color: current.color }}
              >
                0{activeStep + 1}
              </span>
            </div>

            {/* Revolving Wheel Container: Rotates in circular motion */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ rotate: wheelRotation }}
              transition={{ type: 'spring', stiffness: 55, damping: 13 }}
            >
              {TUTORING_FLOW_STEPS.map((item, idx) => {
                const baseRad = ((idx * 120) * Math.PI) / 180;
                // Percentage geometry so wheel scales to ANY container width/height!
                const nodeX = 50 + 34 * Math.cos(baseRad);
                const nodeY = 50 + 34 * Math.sin(baseRad);
                const isActive = activeStep === idx;
                const NodeIcon = item.icon;

                return (
                  <div
                    key={item.step}
                    style={{
                      position: 'absolute',
                      left: `${nodeX}%`,
                      top: `${nodeY}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className="pointer-events-auto"
                  >
                    {/* Counter-rotate so the icon stays upright! */}
                    <motion.div
                      animate={{ rotate: -wheelRotation }}
                      transition={{ type: 'spring', stiffness: 55, damping: 13 }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setActiveStep(idx);
                        }}
                        aria-label={`Select ${item.title}`}
                        className={`group relative flex items-center justify-center rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 scale-110 shadow-[0_8px_20px_rgba(0,0,0,0.18)] ring-2 sm:ring-4 ring-white'
                            : 'w-9 h-9 sm:w-11 sm:h-11 lg:w-13 lg:h-13 hover:scale-105 bg-white/95 border border-slate-200 shadow-2xs hover:border-[#0f4a9b]/40'
                        }`}
                        style={{
                          backgroundColor: isActive ? item.color : '#ffffff',
                        }}
                      >
                        {/* Step number badge */}
                        <span
                          className={`absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full text-[8.5px] sm:text-[10px] font-black flex items-center justify-center shadow-xs transition-colors ${
                            isActive
                              ? 'bg-white text-[#0a1f3d]'
                              : 'bg-slate-100 text-slate-600 border border-slate-200'
                          }`}
                        >
                          {item.step}
                        </span>

                        {/* Node Icon */}
                        <NodeIcon
                          className={`transition-transform duration-300 ${
                            isActive ? 'w-4.5 h-4.5 sm:w-6 sm:h-6 text-white' : 'w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110'
                          }`}
                          style={{ color: isActive ? '#ffffff' : item.color }}
                          strokeWidth={2.2}
                        />

                        {/* Active Aura Pulse */}
                        {isActive && (
                          <motion.div
                            className="absolute -inset-1.5 sm:-inset-2.5 rounded-xl sm:rounded-2xl pointer-events-none opacity-30 blur-md -z-10"
                            style={{ backgroundColor: item.color }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
                            transition={{ repeat: Infinity, duration: 2.2 }}
                          />
                        )}
                      </button>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Orbit Controls (Pause / Resume Button) */}
          <div className="mt-1.5 sm:mt-3 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Resume rotation" : "Pause rotation"}
              className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] sm:text-xs font-semibold bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0f4a9b]/30 shadow-2xs text-slate-700 transition-all cursor-pointer active:scale-95"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  isPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'
                }`}
              />
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-slate-500 fill-slate-500" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Active Step Showcase Card with Rich Animations */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-8 border border-slate-200/90 shadow-[0_8px_24px_rgba(15,74,155,0.06)] overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 sm:h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${current.color}, #0a1f3d)`,
                }}
              />

              {/* Ghost Step Number Watermark */}
              <div
                className="absolute top-2 right-4 text-5xl sm:text-7xl lg:text-8xl font-black pointer-events-none select-none opacity-[0.04]"
                style={{ color: current.color }}
              >
                {current.num}
              </div>

              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <div
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-xs shrink-0"
                    style={{ background: `linear-gradient(135deg, ${current.color}, #0a1f3d)` }}
                  >
                    <CurrentIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5" strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0">
                    {current.title ? (
                      <h3 className="text-base sm:text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">
                        {current.title}
                      </h3>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Exact Written Content Preserved 100% */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2.5 sm:mb-4 font-normal">
                {current.desc}
              </p>

              {/* Key Features Pill Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2 sm:pt-3 border-t border-slate-100 mb-2.5 sm:mb-4">
                {current.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-md sm:rounded-lg text-[10.5px] sm:text-xs font-semibold bg-slate-50 border border-slate-200 text-[#0a1f3d]"
                  >
                    <CheckCircle2 className="w-3 h-3" style={{ color: current.color }} />
                    {pill}
                  </span>
                ))}
              </div>

              {/* Step Progress Indicator & Pause / Play Controller */}
              <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-[11px] sm:text-xs font-extrabold text-[#0a1f3d]">
                    Step 0{activeStep + 1} of 03
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPaused((prev) => !prev)}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10.5px] sm:text-[11px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    title={isPaused ? "Resume Rotation" : "Pause Rotation"}
                    aria-label={isPaused ? "Resume Rotation" : "Pause Rotation"}
                  >
                    {isPaused ? (
                      <>
                        <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 fill-emerald-600" />
                        <span>Resume</span>
                      </>
                    ) : (
                      <>
                        <Pause className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-600 fill-slate-600" />
                        <span>Pause</span>
                      </>
                    )}
                  </button>
                  <div className="w-16 sm:w-28 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      key={`${activeStep}-${isPaused}`}
                      className="h-full rounded-full"
                      style={{ backgroundColor: current.color }}
                      initial={{ width: isPaused ? '100%' : '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: isPaused ? 0 : 3.8, ease: 'linear' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function IgcseTutorDubaiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const serviceNode = {
    ...serviceSchema('IGCSE Tutoring Dubai', 'Expert online IGCSE tutors in Dubai. Cambridge and Edexcel specialists. Private 1-to-1 live lessons and free trial.', '/igcse-tutor-dubai'),
    areaServed: { '@type': 'City', name: 'Dubai' },
  };

  return (
    <Layout>
      <SEOHead
        title="IGCSE Tutor Dubai | Cambridge & Edexcel Specialists | Ustaad"
        description="Expert online IGCSE tutors in Dubai for Cambridge and Edexcel. Private 1-to-1 tutoring for Mathematics, Sciences, English and Business. Book a free trial today."
        canonical="/igcse-tutor-dubai"
        ogImage="/UpdatedImages/private-subject-tutoring-igcse-ib-a-level-uae.webp"
        placename="Dubai, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Dubai',
            url: '/igcse-tutor-dubai',
            name: 'Ustaad, IGCSE Tutor Dubai',
            description: 'Expert online IGCSE tutors in Dubai. Cambridge and Edexcel specialists. Private 1-to-1 lessons, recorded sessions, and free trial.',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'IGCSE', url: '/igcse' },
            { name: 'IGCSE Tutor Dubai', url: '/igcse-tutor-dubai' },
          ]),
          serviceNode,
          faqSchema(FAQS),
          reviewSchema('Ustaad, Online IGCSE Tutor Dubai', PARENT_REVIEWS.map((r) => ({
            author: r.name.split(',')[0].trim(),
            reviewBody: r.text,
            ratingValue: 5,
          }))),
        ]}
      />

      {/* ── HERO ── */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          
          {/* Desktop SVG graphics positioned cleanly at margins */}
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full hidden md:block" aria-hidden="true">
            <defs>
              <linearGradient id="igcseGrowthGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="igcseHexGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0c96a" />
                <stop offset="100%" stopColor="#C7A24A" />
              </linearGradient>
              <radialGradient id="igcseHexGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
              </radialGradient>
              <filter id="igcsePglow"><feGaussianBlur stdDeviation="3" /></filter>
              <marker id="igcseArrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(95,211,230,0.8)" />
              </marker>
            </defs>
            {(() => {
              const dots: ReactNode[] = [];
              for (let x = 40; x < 1400; x += 55)
                for (let y = 30; y < 600; y += 55)
                  dots.push(<circle key={`d${x}${y}`} cx={x} cy={y} r="1" fill="rgba(255,255,255,0.03)" />);
              return dots;
            })()}

            {/* Left growth trajectory line & label */}
            <path d="M 40 480 Q 200 460 360 140" fill="none" stroke="url(#igcseGrowthGrad)" strokeWidth="3" filter="url(#igcsePglow)" />
            <path d="M 40 480 Q 200 460 360 140" fill="none" stroke="url(#igcseGrowthGrad)" strokeWidth="1.5" markerEnd="url(#igcseArrow)" />
            <line x1="30" y1="480" x2="380" y2="480" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="40" y1="490" x2="40" y2="100" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <text x="350" y="115" fill="rgba(95,211,230,0.85)" fontSize="13" fontFamily="monospace" fontWeight="bold">Target: Grade 8/9</text>
            <text x="350" y="500" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">Final Exams</text>
            <text x="45" y="500" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">Baseline</text>

            {/* Right IGCSE Hexagon badge — pushed to far right X=1270 */}
            {(() => {
              const HX = 1270;
              const HY = 240;
              const SIZE = 80;
              const pts = [];
              for (let i = 0; i < 6; i++) {
                const angle_rad = (Math.PI / 180) * (60 * i - 30);
                pts.push(`${HX + SIZE * Math.cos(angle_rad)},${HY + SIZE * Math.sin(angle_rad)}`);
              }
              return (
              <>
                <circle cx={HX} cy={HY} r={SIZE * 1.5} fill="url(#igcseHexGlow)" />
                <polygon points={pts.join(' ')} fill="none" stroke="url(#igcseHexGrad)" strokeWidth="2" filter="url(#igcsePglow)" />
                <polygon points={pts.join(' ')} fill="none" stroke="rgba(240,201,106,0.5)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx={HX} cy={HY} r="25" fill="rgba(240,201,106,0.1)" stroke="#f0c96a" strokeWidth="1.5" />
                <text x={HX} y={HY + 6} textAnchor="middle" fill="#f0c96a" fontSize="15" fontWeight="900" fontFamily="sans-serif">IGCSE</text>
                <text x={HX - 100} y={HY - 65} fill="rgba(95,211,230,0.7)" fontSize="11" fontFamily="monospace">CIE 0580</text>
                <text x={HX + 45} y={HY - 75} fill="rgba(180,180,255,0.7)" fontSize="11" fontFamily="monospace">CIE 0625</text>
                <text x={HX + 60} y={HY + 75} fill="rgba(240,201,106,0.7)" fontSize="11" fontFamily="monospace">Edexcel 4MA1</text>
              </>
              );
            })()}
          </svg>

          {/* Clean ambient background glowing accents on mobile */}
          <div className="md:hidden absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#0f4a9b]/25 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-0 w-[200px] h-[200px] bg-[#C7A24A]/15 rounded-full blur-[80px]" />
          </div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-20 md:pb-14 max-w-5xl w-full">

          <motion.div variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-3" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f0c96a' }} />
            <span className="text-blue-100/90 text-[11px] sm:text-[12px] font-semibold tracking-wide">ONLINE IGCSE TUITION · DUBAI</span>
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }} className="font-extrabold tracking-tight text-white leading-[1.08] mb-3 md:mb-5 text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] max-w-[95%] sm:max-w-none">
            IGCSE Tutors in Dubai{' '}
            <span className="block sm:inline" style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Who Elevate Grades</span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className="text-blue-100/80 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mb-6 md:mb-8 px-2 italic">
            One-to-one tutoring with Cambridge and Edexcel specialists.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }} className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md sm:max-w-none px-4">
            <div className="sm:hidden w-full flex flex-col items-center gap-3">
              <a
                href={BOOKING}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-[15px] text-white transition-all hover:-translate-y-0.5 text-center active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 6px 20px rgba(15,74,155,0.45)' }}
              >
                Book Your Free Trial
              </a>
              <span className="text-blue-200/60 text-[11px]">✦ No Commitment · Cancel Anytime</span>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20 active:scale-[0.98]">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>

            <div className="hidden sm:flex items-start justify-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <a
                  href={BOOKING}
                  className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[15px] md:text-base text-white transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 18px rgba(15,74,155,0.55)' }}
                >
                  Book Your Free Trial
                </a>
                <p className="text-blue-200/50 text-[11px]">✦ No Commitment · Cancel Anytime</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Ustaad on WhatsApp"
                  className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[14px] md:text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* ── STATS BAR ── */}
      <StatsBar />

      {/* ── SCHOOLS MARQUEE ── */}
      <SchoolsMarquee
        title="Preparing IGCSE students at Dubai's leading British curriculum schools."
        logoList={DUBAI_SCHOOL_LOGOS}
      />

      {/* ── TARGETED EXAM REPAIR / COMMON HURDLES ── */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8fafd] rounded-3xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
              {/* Left Column: Heading & Context */}
              <div className="lg:col-span-5 text-left">
                <span className="inline-flex items-center text-[#0f4a9b] text-xs font-extrabold uppercase tracking-widest bg-[#0f4a9b]/8 px-3.5 py-1.5 rounded-full border border-[#0f4a9b]/15 mb-4">
                  Targeted Exam Repair
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2]">
                  Common IGCSE Exam Hurdles We Fix
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3.5 italic mb-0">
                  IGCSE boards test exam technique as much as subject knowledge. Our tutors address exact mark loss areas.
                </p>
              </div>

              {/* Right Column: Challenges Accordion in One Unified Card */}
              <div className="lg:col-span-7">
                <ChallengesAccordion challenges={CHALLENGES} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIALISED TUTORING / IGCSE SUBJECTS SHOWCASE (IN ONE SECTION) ── */}
      <IgcseSubjectsShowcase />

      {/* ── EXAM BOARD ALIGNMENT (COMPACT INTERACTIVE CONSOLE) ── */}
      <IgcseBoardConsole />

      {/* ── UAE ACADEMIC ASSISTANCE & SEO TRUST SECTION ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-slate-50 to-slate-100/70 border-b border-gray-200/70 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-[#0f4a9b]/5 via-[#C7A24A]/5 to-[#0a3a79]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-4 sm:mb-5">
          
          <div className="max-w-3xl mx-auto text-center mb-5 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-widest mb-2 border border-[#0f4a9b]/20">
              <Building2 className="w-3 h-3" />
              <span>UAE Academic Assistance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-2">
              How Fast We Reply to Dubai Families
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
              Our academic team responds within 15 minutes across every Dubai community. WhatsApp the subject and school, and we match a specialist to your child&apos;s board.
            </p>
          </div>

          <UaeAssistance3DSwitcher />

        </div>

        <div className="text-center text-[11px] font-semibold text-gray-500 py-2.5 bg-slate-100/80 border-t border-gray-200/80 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
          <span>Friendly academic consultation guaranteed. Response within 15 minutes during UAE office hours.</span>
        </div>
      </section>



      {/* ── HOW ONLINE IGCSE TUTORING WORKS (CIRCULAR MOTION ORBIT SHOWCASE) ── */}
      <section className="py-4 sm:py-8 lg:py-16 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-100">
        <IgcseGrid light />
        <HowTutoringWorksCircularShowcase />
      </section>

      {/* ── PARENT REVIEWS CAROUSEL ── */}
      <section className="py-12 lg:py-16 relative overflow-hidden bg-[#f4f7fc] border-y border-slate-100">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#0f4a9b]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#C7A24A]/10 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-[#0a1f3d] mb-3 shadow-xs">
              <span className="text-[#C7A24A] tracking-tighter">★★★★★</span>
              <span>5.0 · Verified Google reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d]">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Dubai Families</span>
            </h2>
          </div>
          <ReviewsScroller />
        </div>
      </section>

      {/* ── FAQS SECTION ── */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-24"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/12 text-[#0f4a9b] text-xs font-bold mb-4">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0f4a9b]/10 text-[10px]">?</span>
                COMMON QUESTIONS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight mb-3">
                Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Often Ask</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Honest answers to the IGCSE questions Dubai parents ask before their first session.
              </p>
            </motion.div>

            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {FAQS.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-sm sm:text-base rounded-full"
                        style={{
                          width: 36, height: 36, minWidth: 36, minHeight: 36,
                          background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                          color: isOpen ? '#fff' : '#0f4a9b',
                          transition: 'background 300ms ease, color 300ms ease',
                          cursor: 'pointer', border: 'none', boxShadow: 'inset 0 0 0 2px #fff',
                        }}
                      >
                        ?
                      </button>

                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-2.5 sm:gap-3 text-left rounded-full border bg-white shadow-2xs"
                        style={{ minHeight: '48px', padding: '8px 14px', cursor: 'pointer', borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)' }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[13px] sm:text-[14px] leading-snug">{f.q}</span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 28, height: 28, minWidth: 28, minHeight: 28, borderRadius: '50%',
                            background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                            color: isOpen ? '#fff' : '#0f4a9b',
                            transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="ml-0 sm:ml-[48px] overflow-hidden"
                        >
                          <div className="flex items-start gap-2.5 sm:gap-3 rounded-2xl border p-3.5 sm:p-4.5 bg-[#f8fafc]" style={{ borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 4px 16px rgba(15,74,155,0.06)' }}>
                            <p className="flex-1 text-gray-600 text-[12.5px] sm:text-[13.5px] leading-relaxed">{f.a}</p>
                            <span className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 28, height: 28, minWidth: 28, minHeight: 28, background: '#0f4a9b', color: '#fff' }}>
                              <MessageCircle className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING ACTION / DUAL CTA CARDS ── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4">
              Book your free IGCSE trial in Dubai
            </h2>
            <p className="text-gray-600 text-[15px]">
              Tell us the subject, year group and school. We match a specialist fast.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12 items-stretch">
            {/* Free First Lesson Card */}
            <div className="bg-[#f4f7fc] p-8 rounded-[24px] border border-[#0f4a9b]/10 flex flex-col h-full text-center hover:shadow-[0_12px_32px_rgba(15,74,155,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#f0c96a]/20 text-[#b8883f] flex items-center justify-center mb-5 mx-auto">
                <Star className="w-8 h-8 fill-current" />
              </div>
              <h3 className="text-[18px] font-extrabold text-[#0a1f3d] mb-2">Free First Lesson</h3>
              <p className="text-[14px] text-gray-500 mb-6 leading-relaxed flex-1">
                Thirty online minutes with a matched IGCSE tutor to see if it&apos;s the right fit.
              </p>
              <a
                href={BOOKING}
                className="mt-auto w-full min-h-[48px] bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] hover:brightness-110 text-white py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(199,162,74,0.3)] hover:-translate-y-0.5"
              >
                Book a Free Trial Lesson
              </a>
            </div>

            {/* Free Solution in 15 Min WhatsApp Card */}
            <div className="bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgba(37,211,102,0.08)] border border-[#25D366]/20 flex flex-col h-full text-center hover:shadow-[0_12px_40px_rgba(37,211,102,0.15)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-5 mx-auto">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-[18px] font-extrabold text-[#0a1f3d] mb-2">Get a Free Solution in 15 Min</h3>
              <p className="text-[14px] text-gray-500 mb-6 leading-relaxed flex-1">
                Send any past-paper question and get a reply in fifteen minutes.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full min-h-[48px] bg-[#25D366] hover:bg-[#20b958] text-white py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Message Us
              </a>
            </div>
          </div>

          {/* Related pages */}
          <div className="bg-[#f4f7fc] rounded-3xl p-6 sm:p-8 border border-gray-100">
            <h4 className="text-[15px] font-bold text-[#0a1f3d] mb-6 border-b border-gray-200 pb-4">Related pages</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <a href="/igcse" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">IGCSE Hub (All Subjects)</a>
                <p className="text-[12px] text-gray-500">For board comparison, subject list and the full IGCSE framework across the UAE.</p>
              </div>
              <div>
                <a href="/maths" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">IGCSE Maths</a>
                <p className="text-[12px] text-gray-500">For Cambridge 0580 and Edexcel 4MA1 past paper mark scheme mastery.</p>
              </div>
              <div>
                <a href="/english" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">IGCSE English</a>
                <p className="text-[12px] text-gray-500">For Language 0500 and Literature 0475 quotation recall frameworks.</p>
              </div>
              <div>
                <a href="/physics" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">IGCSE Physics</a>
                <p className="text-[12px] text-gray-500">For Cambridge 0625 and Edexcel 4PH1 structured equation substitution training.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
