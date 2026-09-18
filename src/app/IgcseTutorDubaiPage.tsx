import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Calculator, MessageSquareQuote, List, ArrowRightLeft, FlaskConical, PenTool,
  CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Star, MessageCircle, BookOpen, Video, Timer,
  MapPin, Atom, Dna, Briefcase, LineChart, ClipboardList, Users, ShieldCheck,
  Building2,
} from 'lucide-react';
import { Layout, StatsBar, SchoolsMarquee, DUBAI_SCHOOL_LOGOS } from './shared';
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
  const [active, setActive] = useState<number>(0);
  return (
    <div className="relative">
      <div className="flex flex-col gap-[10px]">
        {challenges.map((c, i) => {
          const isOpen = active === i;
          return (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setActive(isOpen ? -1 : i)} className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 40, height: 40, minWidth: 40, minHeight: 40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms ease, color 300ms ease', cursor: 'pointer', border: 'none', boxShadow: 'inset 0 0 0 2px #fff' }}>
                  <span className="flex items-center justify-center w-full h-full">{c.icon}</span>
                </button>
                <button type="button" onClick={() => setActive(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex-1 flex items-center gap-2 sm:gap-3 text-left rounded-full border bg-white shadow-2xs" style={{ minHeight: '48px', padding: '8px 12px sm:14px', cursor: 'pointer', borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)' }}>
                  <span className="flex-1 font-semibold text-[#0a1f3d] text-[13px] sm:text-[14px] leading-snug">{c.title}</span>
                  <span className="flex-shrink-0 flex items-center justify-center" style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, borderRadius: '50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }} className="overflow-hidden">
                    <div className="ml-0 sm:ml-[52px] mt-1">
                      <div className="rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3" style={{ background: '#f4f7fc', border: '1px solid rgba(15,74,155,0.14)' }}>
                        <p className="text-[12.5px] sm:text-[13px] text-[#3a4f6e] leading-relaxed">{c.problem}</p>
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

const UAE_COMMUNITIES = [
  'Emirates Hills', 'Jumeirah', 'Arabian Ranches', 'Dubai Hills', 
  'Downtown Dubai', 'Palm Jumeirah', 'Dubai Marina', 'Business Bay'
];

function UaeAssistance3DSwitcher() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      id: 0,
      label: '2,500+ Families',
      sublabel: 'UAE Curricula Trust',
      Icon: Users,
      badge: '2,500+ Taught',
      accentColor: '#0f4a9b',
      accentGradient: 'from-[#0f4a9b] to-[#1e5ba8]',
      title: 'Trusted by 2,500+ families across the UAE',
      text: 'Our tutoring team supports students across British (IGCSE, GCSE, A-Level), IB (MYP, DP), and American (AP) curricula, along with SAT preparation. All enquiries receive a response within 15 minutes during working hours.',
      pills: ['British (IGCSE, GCSE, A-Level)', 'IB (MYP, DP)', 'American (AP Curricula)', 'SAT Preparation', '15-Min Response Time'],
    },
    {
      id: 1,
      label: 'Dubai Communities',
      sublabel: 'Online In All Areas',
      Icon: MapPin,
      badge: 'All Emirates',
      accentColor: '#C7A24A',
      accentGradient: 'from-[#C7A24A] to-[#A8892A]',
      title: 'Comprehensive Private Tutoring Across Dubai Communities',
      text: 'Our online tutoring platform connects students in Downtown Dubai, Dubai Marina, Jumeirah, Arabian Ranches, Emirates Hills, and Palm Jumeirah with specialist educators. Book your free 30-minute trial today.',
      pills: UAE_COMMUNITIES,
    },
    {
      id: 2,
      label: 'Tailored Tutoring',
      sublabel: 'Targeted Prep Formats',
      Icon: ShieldCheck,
      badge: '100% Customised',
      accentColor: '#059669',
      accentGradient: 'from-emerald-600 to-teal-700',
      title: 'Tailored Academic Tutoring',
      text: 'Whether you require short-term exam prep, intensive mock revision, or weekly academic tutoring, Ustaad pairs your child with top-rated private tutors across all Dubai communities.',
      pills: ['Short-Term Exam Prep', 'Intensive Mock Revision', 'Weekly 1-to-1 Mentorship', 'Live Digital Whiteboards'],
    },
  ];

  const current = tabs[activeTab];

  return (
    <div className="max-w-4xl mx-auto">
      {/* 3D Tabs Header */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-4 sm:mb-5 p-1 sm:p-1.5 bg-slate-200/70 rounded-2xl border border-slate-300/60 shadow-inner">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const TabIcon = tab.Icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 py-2.5 sm:py-3 px-1 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-white text-[#0a1f3d] shadow-[0_8px_20px_rgba(15,74,155,0.14)] border border-[#0f4a9b]/15 -translate-y-0.5'
                  : 'text-slate-600 hover:text-[#0a1f3d] hover:bg-white/60'
              }`}
            >
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ${
                  isActive ? `bg-gradient-to-br ${tab.accentGradient} text-white shadow-xs` : 'bg-slate-200/80 text-slate-500'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="text-center sm:text-left min-w-0">
                <span className="block truncate font-extrabold text-[11px] sm:text-xs md:text-sm leading-tight">{tab.label}</span>
                <span className="hidden sm:block text-[10.5px] text-slate-400 font-medium truncate">{tab.sublabel}</span>
              </div>
              {isActive && (
                <div
                  className="absolute bottom-0 left-2 sm:left-3 right-2 sm:right-3 h-0.5 rounded-full"
                  style={{ backgroundColor: tab.accentColor }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* 3D Animated Card Container with Perspective */}
      <div style={{ perspective: '1200px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, rotateX: -10, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, rotateX: 10, y: -14, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-slate-200 shadow-[0_12px_36px_rgba(15,74,155,0.08)] overflow-hidden"
          >
            {/* Top Accent Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: current.accentColor }}
            />

            {/* Ambient Corner Glow */}
            <div
              className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ backgroundColor: current.accentColor }}
            />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-3 sm:mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white shadow-md shrink-0"
                  style={{ background: `linear-gradient(135deg, ${current.accentColor}, #0a1f3d)` }}
                >
                  <current.Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-[#0a1f3d] leading-snug">
                    {current.title}
                  </h3>
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-400">Verified Dubai Academic Coverage</span>
                </div>
              </div>
              <span
                className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-extrabold self-start sm:self-auto uppercase tracking-wider shadow-2xs shrink-0"
                style={{
                  backgroundColor: `${current.accentColor}12`,
                  color: current.accentColor,
                  border: `1px solid ${current.accentColor}30`,
                }}
              >
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {current.badge}
              </span>
            </div>

            {/* Preserved Full Text */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
              {current.text}
            </p>

            {/* Dynamic Community / Curricula Pill Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {current.pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-semibold bg-slate-50 border border-slate-200 text-[#0a1f3d] hover:border-[#0f4a9b]/40 hover:bg-blue-50/40 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: current.accentColor }} />
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
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

      {/* ── MISSION / GRADE 8 & 9 SUPPORT BANNER ── */}
      <section className="relative z-20 max-w-4xl mx-auto px-4 text-center mt-6 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f4a9b]/8 text-[#0f4a9b] text-xs font-bold tracking-wide mb-2.5 border border-[#0f4a9b]/15">
          <span>Our IGCSE mission in Dubai</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] tracking-tight mb-2">
          Grade 8 and 9 Support for Dubai IGCSE Students
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Targeted one-to-one tutoring and structured exam technique designed to help Dubai students achieve top tier results in Cambridge and Edexcel IGCSEs.
        </p>
      </section>

      {/* ── STATS BAR ── */}
      <StatsBar />

      {/* ── SCHOOLS MARQUEE ── */}
      <SchoolsMarquee
        title="Preparing IGCSE students at Dubai's leading British curriculum schools."
        logoList={DUBAI_SCHOOL_LOGOS}
      />

      {/* ── TARGETED EXAM REPAIR / COMMON HURDLES ── */}
      <section className="py-14 lg:py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-[#0f4a9b] text-xs font-extrabold uppercase tracking-widest bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
              Targeted Exam Repair
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mt-3 tracking-tight">
              Common IGCSE Exam Hurdles We Fix
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2 italic">
              IGCSE boards test exam technique as much as subject knowledge. Our tutors address exact mark loss areas.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ChallengesAccordion challenges={CHALLENGES} />
          </div>
        </div>
      </section>

      {/* ── SPECIALISED TUTORING / IGCSE SUBJECTS ── */}
      <section className="py-14 lg:py-20 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-100">
        <IgcseGrid light />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3 shadow-xs">
              Specialised Tutoring
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
              IGCSE Subjects We Cover in Dubai
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
              Expert 1-to-1 support across Cambridge (CIE) and Pearson Edexcel specifications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {[
              {
                Icon: Calculator,
                title: 'IGCSE Mathematics',
                tag: 'Codes: Cambridge 0580 Extended & Edexcel 4MA1 Higher',
                href: '/maths',
                desc1: 'The two tiers taught across most British curriculum schools in the emirate, including Dubai College, Repton, Nord Anglia, and JESS.',
                desc2: 'Focus on algebra fluency, vector geometry, and calculator paper technique so working shows the marks examiners expect at the top grades.',
              },
              {
                Icon: Atom,
                title: 'IGCSE Physics',
                tag: 'Codes: Cambridge 0625 & Edexcel 4PH1',
                href: '/physics',
                desc1: 'Formula sheet recall and unit conversion rebuilt for students preparing at Cambridge schools or Edexcel schools, including those who transfer between boards mid year.',
                desc2: 'Practical questions covered separately for each board, whether the Cambridge Alternative to Practical or the Edexcel written practical style.',
              },
              {
                Icon: FlaskConical,
                title: 'IGCSE Chemistry',
                tag: 'Codes: Cambridge 0620 & Edexcel 4CH1',
                href: '/chemistry',
                desc1: 'Mole calculations, organic reaction pathways, and practical write ups covered as three distinct skill areas rather than lumped into revision.',
                desc2: 'Recent past papers used every session so working is rebuilt against real mark schemes, protecting method marks even when the final answer slips.',
              },
              {
                Icon: Dna,
                title: 'IGCSE Biology',
                tag: 'Codes: Cambridge 0610 & Edexcel 4BI1',
                href: '/biology',
                desc1: 'Extended response questions are where strong students often plateau, and they are the main focus of our sessions.',
                desc2: 'Cambridge and Edexcel mark schemes read side by side so answers are shaped around the terminology examiners reward, not paraphrased versions.',
              },
              {
                Icon: Briefcase,
                title: 'IGCSE Business & Economics',
                tag: 'Codes: Cambridge 0450/0455 & Edexcel 4BS1/4EC1',
                href: '/business',
                desc1: 'Case study analysis and higher tariff evaluation questions taught as structured skills rather than as content revision.',
                desc2: 'Extended responses coached for balanced argument, data interpretation from the case study, and a clear final judgement line.',
              },
              {
                Icon: BookOpen,
                title: 'IGCSE English Language & Literature',
                tag: 'Codes: Cambridge 0500/0475 & Edexcel 4EA1/4ET1',
                href: '/english',
                desc1: 'Written for candidates in Dubai\'s multilingual classrooms, where marks turn on structure and analytical vocabulary rather than vocabulary alone.',
                desc2: 'Sessions cover directed writing frameworks, quotation recall for set texts, and the analytical language rewarded on unseen extracts.',
              },
            ].map((sub, idx) => (
              <motion.a
                key={idx}
                href={sub.href}
                aria-label={`${sub.title} — ${sub.tag}`}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-2xl border border-gray-200/80 p-6 shadow-[0_4px_20px_rgba(15,74,155,0.05)] hover:shadow-[0_20px_42px_rgba(15,74,155,0.12)] hover:-translate-y-1.5 hover:border-[#0f4a9b]/40 transition-all duration-300 flex flex-col h-full group overflow-hidden cursor-pointer"
              >
                {/* Top Accent Gradient Indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A] group-hover:h-1.5 transition-all duration-300" />

                {/* Ambient Soft Blue Corner Glow */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full blur-2xl bg-[#0f4a9b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Stylish Icon Badge */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white shadow-[0_4px_12px_rgba(15,74,155,0.2)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shrink-0">
                  <sub.Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>

                <h3 className="text-[17px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-1.5 leading-snug">
                  {sub.title}
                </h3>

                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#0f4a9b]/8 text-[#0f4a9b] border border-[#0f4a9b]/15 mb-3 w-fit tracking-wide group-hover:bg-[#0f4a9b]/12 transition-colors">
                  {sub.tag}
                </span>

                <div className="space-y-2 text-[13px] text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed flex-1">
                  <p>{sub.desc1}</p>
                  <p>{sub.desc2}</p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center text-xs font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
                  <span>Explore {sub.title}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="/exam-preparation"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex items-center gap-4 rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-white via-[#f4f7fc] to-white border border-[#0f4a9b]/15 hover:border-[#0f4a9b]/35 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_32px_rgba(15,74,155,0.14)] hover:-translate-y-1 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <CheckCircle2 className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-[17px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">Exam Preparation</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#C7A24A]/15 text-[#A8892A] border border-[#C7A24A]/30 uppercase tracking-wider">High Impact</span>
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed">Past papers, timing drills and mark-scheme practice for mocks and final exams.</p>
            </div>
          </motion.a>
        </div>
      </section>

      {/* ── EXAM BOARD ALIGNMENT ── */}
      <section className="py-14 lg:py-20 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-[#0f4a9b] text-xs font-extrabold uppercase tracking-widest bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
              Exam Board Alignment
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mt-3 tracking-tight">
              Cambridge (CIE) &amp; Pearson Edexcel IGCSE Preparation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2 italic">
              Every lesson uses past papers, mark schemes, and command word guides specific to your child&apos;s exam board.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f8fafd] rounded-2xl p-7 border border-[#0f4a9b]/15 shadow-xs relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_38px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/40 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0f4a9b] group-hover:h-1.5 transition-all duration-300" />
              <div className="inline-block px-3 py-1 bg-[#0f4a9b] text-white text-xs font-extrabold rounded-md mb-4 shadow-xs group-hover:shadow-md transition-all duration-300">
                CAMBRIDGE (CIE) IGCSE
              </div>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-300 mb-3">Core &amp; Extended Paper Mastery</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Cambridge IGCSE exams emphasise technical accuracy, core vs extended tier differentiation, and alternative to practical paper 6 methods.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span>Mathematics 0580 (Core &amp; Extended)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span>Sciences 0625 / 0620 / 0610 (Paper 2, 4 &amp; 6)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span>English First Language 0500 &amp; Literature 0475</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8fafd] rounded-2xl p-7 border border-[#C7A24A]/30 shadow-xs relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_38px_rgba(199,162,74,0.16)] hover:border-[#C7A24A]/60 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C7A24A] to-amber-600 group-hover:h-1.5 transition-all duration-300" />
              <div className="inline-block px-3 py-1 bg-[#C7A24A] text-[#0a1f3d] text-xs font-extrabold rounded-md mb-4 shadow-xs group-hover:shadow-md transition-all duration-300">
                PEARSON EDEXCEL IGCSE
              </div>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] group-hover:text-[#C7A24A] transition-colors duration-300 mb-3">Specification A &amp; B Preparation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Edexcel IGCSE exams place strong weight on structured multi-step calculations, case study application, and clear 6 to 9-mark extended answers.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A24A] shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span>Mathematics 4MA1 (Higher &amp; Foundation)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A24A] shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span>Double &amp; Triple Sciences 4PH1 / 4CH1 / 4BI1</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A24A] shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span>Business 4BS1 &amp; Economics 4EC1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── UAE ACADEMIC ASSISTANCE & SEO TRUST SECTION ── */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-slate-100/70 border-b border-gray-200/70 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-[#0f4a9b]/5 via-[#C7A24A]/5 to-[#0a3a79]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6">
          
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] text-xs font-extrabold uppercase tracking-widest mb-3 border border-[#0f4a9b]/20">
              <Building2 className="w-3.5 h-3.5" />
              <span>UAE Academic Assistance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3">
              How Fast We Reply to Dubai Families
            </h2>
            <div className="text-gray-700 text-xs sm:text-sm leading-relaxed bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-2xs text-center max-w-2xl mx-auto font-medium">
              <p>
                Our academic team responds within 15 minutes across every Dubai community. WhatsApp the subject and school, and we match a specialist to your child&apos;s board.
              </p>
            </div>
          </div>

          <UaeAssistance3DSwitcher />

        </div>

        <div className="text-center text-xs font-semibold text-gray-500 py-3.5 bg-slate-100 border-t border-gray-200 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
          <span>Friendly academic consultation guaranteed. Response within 15 minutes during UAE office hours.</span>
        </div>
      </section>

      {/* ── HOW ONLINE IGCSE TUTORING WORKS ── */}
      <section className="py-14 lg:py-20 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-100">
        <IgcseGrid light />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3 shadow-xs">
              Interactive Learning Platform
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
              How Online IGCSE Tutoring Works for Dubai Students
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(15,74,155,0.05)] relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,74,155,0.13)] hover:border-[#0f4a9b]/40 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0f4a9b] group-hover:h-1.5 transition-all duration-300" />
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0f4a9b] flex items-center justify-center mb-4 font-extrabold text-lg group-hover:scale-110 group-hover:bg-[#0f4a9b] group-hover:text-white transition-all duration-300 shadow-xs">
                1
              </div>
              <h3 className="font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-300 text-lg mb-2">Diagnostic Assessment</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We review your child&apos;s school, target grades, and current weak areas to pair them with a specialist tutor who knows their exact exam board.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(15,74,155,0.05)] relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(199,162,74,0.16)] hover:border-[#C7A24A]/50 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C7A24A] group-hover:h-1.5 transition-all duration-300" />
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C7A24A] flex items-center justify-center mb-4 font-extrabold text-lg group-hover:scale-110 group-hover:bg-[#C7A24A] group-hover:text-white transition-all duration-300 shadow-xs">
                2
              </div>
              <h3 className="font-extrabold text-[#0a1f3d] group-hover:text-[#C7A24A] transition-colors duration-300 text-lg mb-2">Live 1-to-1 Interactive Sessions</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lessons feature real-time digital whiteboards, live past paper solving, immediate feedback, and session recordings for easy exam revision.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(15,74,155,0.05)] relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500 group-hover:h-1.5 transition-all duration-300" />
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 font-extrabold text-lg group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-xs">
                3
              </div>
              <h3 className="font-extrabold text-[#0a1f3d] group-hover:text-emerald-700 transition-colors duration-300 text-lg mb-2">Continuous Progress Tracking</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Parents receive regular progress updates after lessons and mock assessments, keeping learning on track for grade 8 and 9 outcomes.
              </p>
            </div>
          </div>
        </div>
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
