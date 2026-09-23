import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import {
  Calculator, MessageSquareQuote, List, ArrowRightLeft, FlaskConical, PenTool,
  CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Star, MessageCircle, BookOpen, Video, Timer,
  MapPin, Atom, Dna, Briefcase, LineChart, ClipboardList, X, Users, ShieldCheck,
  Clock, TrendingUp, Target, ArrowRight, Laptop, Calendar,
} from 'lucide-react';
import { 
  Layout, 
  StatsBar, 
  SchoolsMarquee, 
  DUBAI_SCHOOL_LOGOS, 
  HowOnlineSessions3DSection, 
  WhyFamiliesChoose3DSection, 
  MathsArtifact,
  EnglishArtifact,
  PhysicsArtifact,
  ChemistryArtifact,
  BiologyArtifact,
  BusinessArtifact,
  EconomicsArtifact,
  StatisticsArtifact,
  InteractiveComparisonBook3D,
  FreeTrialTimelineSection,
  DubaiAreasInteractiveCard,
  WhatsAppIcon,
  type SchoolLogoItem 
} from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, reviewSchema } from './shared/schemas';

const PARENT_REVIEWS = [
  {
    initials: 'KA',
    name: 'Khalid A., Dubai Downtown',
    subject: 'AQA GCSE English Literature (8702) · Verified parent',
    text: 'My daughter was preparing for AQA GCSE English Literature through a UK distance-learning school while we were posted in Dubai. Her Ustaad tutor built a quotation bank for the poetry anthology and drilled essay structure for Paper 1. She jumped from a grade 5 in her January mock to a grade 7 in her summer exam.',
  },
];

const BOOKING = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20support%20with%20GCSE.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

const GcseGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'dubai-ggrid-l' : 'dubai-ggrid-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(15,74,155,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'dubai-ggrid-l' : 'dubai-ggrid-d'})`} />
  </svg>
);

const DUBAI_MARK_LOSS_PATTERNS = [
  {
    num: '01',
    heading: 'Board switch marks',
    body: 'Cambridge-to-AQA command-word gaps quietly cost marks after a syllabus change.',
  },
  {
    num: '02',
    heading: 'Hidden topic gaps',
    body: 'Mid-year Dubai school moves leave chapter gaps hidden until the mock lands.',
  },
  {
    num: '03',
    heading: 'Compressed revision',
    body: 'UAE summer heat and travel shrink revision to a tighter window than UK peers.',
  },
  {
    num: '04',
    heading: 'Ramadan schedule',
    body: 'Fasting hours and iftar times collapse the traditional after-school study block.',
  },
  {
    num: '05',
    heading: 'Multi-board siblings',
    body: 'One family, two syllabi. IGCSE and GCSE need separate specialists per subject.',
  },
  {
    num: '06',
    heading: 'Predicted grade pressure',
    body: 'Dubai-school predicted grades shape UK sixth-form offers. We target the source mocks.',
  },
];

const FAQS = [
  {
    q: 'Which Dubai schools actually sit UK GCSE rather than IGCSE?',
    a: 'Most Dubai British-curriculum schools sit IGCSE, not GCSE. UK national GCSE is more common among children being homeschooled toward UK sixth-form entry, students at very small UK-programme schools in Dubai, or families temporarily in Dubai on short-term postings. If your child sits IGCSE, see IGCSE Tutor Dubai.',
  },
  {
    q: "We're returning to the UK for Sixth Form. Should our child sit UK GCSE or IGCSE in Dubai?",
    a: "UK universities and sixth forms accept both equally. The practical question is which syllabus your child's Dubai school teaches now, and whether the receiving UK school prefers GCSE-specific prep. We can advise on the transition based on your target school; the GCSE hub explains the board and specification differences.",
  },
  {
    q: 'My child is doing GCSE remotely with a UK school while living in Dubai. Can you support that?',
    a: 'Yes. We work with distance-learning GCSE students in Dubai, matching tutors to the exact AQA, OCR, or Edexcel specification the UK school uses and aligning lesson timing to the UK exam schedule rather than the UAE academic year.',
  },
  {
    q: 'Are AQA, OCR, and Edexcel GCSE past papers available for Dubai-based students to practise on?',
    a: 'Yes. All three boards publish past papers publicly, and our tutors use them live in every session. There is no logistical barrier for a Dubai-based student sitting UK GCSE with a British Council or private exam centre in the UAE.',
  },
  {
    q: 'What if my child sits GCSE in some subjects and IGCSE in others?',
    a: 'This is more common than parents realise. We match a separate specialist per subject to the exact syllabus, so an AQA GCSE English tutor and a Cambridge IGCSE Maths tutor run side by side in the same weekly plan.',
  },
  {
    q: 'How do predicted grades work for Dubai GCSE students applying to UK sixth forms?',
    a: 'Predicted grades come from the Dubai school teaching the subject. Our tutors help students hit or exceed predicted grades by focusing on the mock papers the school uses to generate them, so the predicted grade on the UCAS-style application reflects the current level.',
  },
  {
    q: 'Can you help a Dubai student catch up on GCSE content missed during a move to the UAE mid-Year 10?',
    a: "Yes. Mid-year moves are one of the most common Dubai GCSE tutoring reasons. The first session maps what's already been taught in the previous school against the new school's scheme, so nothing is assumed and no chapter is silently missed. For subject-specific catch-up see our Maths Tutor Dubai or Physics Tutor Dubai.",
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

function MagneticSlipCard({
  num,
  heading,
  body,
  index,
}: {
  num: string;
  heading: string;
  body: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
    setSpotlight({ x: mouseX, y: mouseY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="w-[82vw] max-w-[320px] sm:w-full sm:max-w-none flex-shrink-0 sm:flex-shrink snap-center relative rounded-2xl p-[1.5px] group h-full shadow-[0_10px_32px_rgba(15,74,155,0.08),0_2px_8px_rgba(199,162,74,0.06)] hover:shadow-[0_22px_48px_rgba(15,74,155,0.16),0_4px_16px_rgba(199,162,74,0.14)] hover:-translate-y-1 transition-all duration-500"
    >
      {/* Animated spinning conic-gradient halo border (Luminous & active by default) */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div
          className="absolute -inset-[150%] opacity-80 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4.5s_linear_infinite]"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0deg 180deg, rgba(15,74,155,0.6) 240deg, #0f4a9b 280deg, #C7A24A 325deg, #f0c96a 345deg, transparent 360deg)',
          }}
        />
      </div>

      {/* Subtle border backdrop layer */}
      <div className="absolute inset-0 rounded-2xl border border-slate-200/60 pointer-events-none" />

      {/* Main card body with 3D elevation */}
      <div
        style={{ transform: 'translateZ(18px)' }}
        className="relative h-full bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 lg:p-5 flex flex-col justify-between overflow-hidden"
      >
        {/* Specular glass spotlight sheen (Active ambient gradient + dynamic cursor track) */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: spotlight.opacity
              ? `radial-gradient(350px circle at ${spotlight.x}px ${spotlight.y}px, rgba(15,74,155,0.1), rgba(199,162,74,0.05) 45%, transparent 75%)`
              : 'radial-gradient(350px circle at 85% 15%, rgba(199,162,74,0.08), transparent 70%)',
          }}
        />

        {/* Ambient luminous corner glow (Active by default) */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-[#C7A24A]/15 via-[#0f4a9b]/8 to-transparent rounded-full blur-xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Number badge with active beacon ping */}
          <div className="flex items-center justify-between mb-2 sm:mb-2.5">
            <span className="font-mono text-[11px] font-bold text-[#C7A24A] tracking-wider px-2 py-0.5 rounded-md bg-gradient-to-r from-[#C7A24A]/15 to-[#f0c96a]/15 border border-[#C7A24A]/35 inline-flex items-center gap-1.5 shadow-[0_2px_8px_rgba(199,162,74,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] animate-ping" style={{ animationDuration: '2.5s' }} />
              {num}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]/40 group-hover:bg-[#0f4a9b] group-hover:scale-125 transition-all duration-300 shadow-xs" />
          </div>

          {/* Heading */}
          <h3 className="font-extrabold text-[#0a1f3d] text-[14.5px] sm:text-[15.5px] lg:text-[16px] mb-1.5 leading-snug group-hover:text-[#0f4a9b] transition-colors duration-300">
            {heading}
          </h3>

          {/* Body */}
          <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed">
            {body}
          </p>
        </div>

        {/* Bottom accent footer (Luminous gradient active by default) */}
        <div className="relative z-10 pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[9.5px] font-mono font-semibold text-[#0f4a9b] uppercase tracking-wider">
            Pattern {num}
          </span>
          <div className="h-1 w-10 group-hover:w-16 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A] rounded-full transition-all duration-300 shadow-xs" />
        </div>
      </div>
    </motion.div>
  );
}

function DubaiGcseStudentsSlipSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    if (offsetWidth === 0) return;
    const cardWidth = offsetWidth * 0.82;
    const newIdx = Math.round(scrollLeft / cardWidth);
    setActiveIdx(Math.min(Math.max(0, newIdx), DUBAI_MARK_LOSS_PATTERNS.length - 1));
  };

  const scrollToCard = (idx: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.84;
    scrollRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
    setActiveIdx(idx);
  };

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#f8fafc] relative overflow-hidden border-b border-slate-200/60">
      <GcseGrid light />
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#0f4a9b]/4 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-[11px] font-bold font-mono tracking-wider uppercase mb-1.5">
            <Target className="w-3.5 h-3.5 text-[#C7A24A]" />
            DUBAI MARK-LOSS PATTERNS
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] tracking-tight mb-1.5">
            Where Dubai GCSE Students Slip
          </h2>
          <p className="text-gray-600 text-xs sm:text-[13.5px] max-w-xl mx-auto leading-relaxed">
            Six mark-loss patterns Dubai families hit that generic UK GCSE prep misses.
          </p>
        </div>

        {/* Scrollable on Mobile / 3x2 Grid on Tablet & Desktop (Single Viewport Fit) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-4.5 items-stretch overflow-x-auto sm:overflow-visible snap-x snap-mandatory pt-1 pb-3 sm:pb-0 px-4 sm:px-0 -mx-4 sm:mx-0 scrollbar-none"
        >
          {DUBAI_MARK_LOSS_PATTERNS.map((item, idx) => (
            <MagneticSlipCard
              key={item.num}
              num={item.num}
              heading={item.heading}
              body={item.body}
              index={idx}
            />
          ))}
        </div>

        {/* Mobile Swipe Dots Navigation */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 mt-3 pt-0.5">
          {DUBAI_MARK_LOSS_PATTERNS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to pattern ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIdx === idx ? 'w-6 bg-[#0f4a9b]' : 'w-1.5 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const GCSE_SUBJECTS = [
  { Icon: Calculator, title: 'Maths', tag: 'Algebraic Fractions · Trigonometry · Vectors', href: '/maths', body: 'Foundation and Higher, calculator and non-calculator.', Artifact: MathsArtifact },
  { Icon: BookOpen, title: 'English', tag: 'Poetry · Analysis · Writing', href: '/english', body: 'Language and Literature, from unseen texts to essays.', Artifact: EnglishArtifact },
  { Icon: Atom, title: 'Physics', tag: 'Forces · Electricity · Waves', href: '/physics', body: 'Combined or Triple Science route.', Artifact: PhysicsArtifact },
  { Icon: FlaskConical, title: 'Chemistry', tag: 'Bonding · Organic · Rates', href: '/chemistry', body: 'Combined or Triple Science route.', Artifact: ChemistryArtifact },
  { Icon: Dna, title: 'Biology', tag: 'Cells · Ecology · Inheritance', href: '/biology', body: 'Combined or Triple Science route.', Artifact: BiologyArtifact },
  { Icon: Briefcase, title: 'Business Studies', tag: 'Case Studies · Finance', href: '/business', body: 'Case studies, finance and exam technique.', Artifact: BusinessArtifact },
  { Icon: LineChart, title: 'Economics', tag: 'Micro · Macro · Data', href: '/economics', body: 'Micro, macro and data-response answers.', Artifact: EconomicsArtifact },
  { Icon: ClipboardList, title: 'Statistics', tag: 'Data · Probability', href: '/statistics', body: 'Data handling, probability and interpretation.', Artifact: StatisticsArtifact },
];

function GCSESubjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const cardWidth = 280;
    const newIdx = Math.round(scrollLeft / cardWidth);
    setActiveIdx(Math.min(Math.max(newIdx, 0), GCSE_SUBJECTS.length - 1));
  };

  const scrollToSubject = (idx: number) => {
    if (!scrollRef.current) return;
    const cardWidth = 280;
    scrollRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-[11px] font-bold mb-1.5">Curriculum Hub</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a1f3d] mb-1 tracking-tight">GCSE subjects we tutor in Dubai</h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed italic">Matched to your child&apos;s board and tier, Foundation or Higher.</p>
        </div>

        {/* Scrollable Container (Mobile: Horizontal Snap Carousel, Desktop: 4-Column Responsive Grid) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 lg:gap-3.5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-3.5 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {GCSE_SUBJECTS.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              aria-label={`${item.title} — ${item.tag}`}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="w-[82vw] max-w-[290px] sm:w-auto sm:max-w-none shrink-0 sm:shrink snap-center relative bg-white rounded-2xl border border-gray-200/80 p-3.5 sm:p-4 shadow-[0_4px_16px_rgba(15,74,155,0.04)] hover:shadow-[0_16px_36px_rgba(15,74,155,0.12)] hover:-translate-y-1 hover:border-[#0f4a9b]/40 transition-all duration-300 flex flex-col h-full group overflow-hidden cursor-pointer"
            >
              {/* Top Accent Indicator Strip in Ustaad Brand Gradient */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A] transition-all duration-300 group-hover:h-1.5"
              />

              {/* Ambient Corner Glow */}
              <div
                className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full blur-2xl bg-[#0f4a9b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />

              {/* Stylish Icon Badge in Ustaad Royal Blue */}
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-2 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white shadow-xs group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300 shrink-0"
              >
                <item.Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
              </div>

              {/* Subject Title with em-dash separator */}
              <h3 className="text-[15px] sm:text-base font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-0.5 leading-snug flex items-center gap-1.5">
                <span>{item.title}</span>
                <span aria-hidden="true" className="text-gray-300 font-normal select-none">—</span>
                <span className="sr-only"> — </span>
              </h3>

              {/* Topic Breakdown Pill in Ustaad Brand Blue */}
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-bold bg-[#0f4a9b]/8 text-[#0f4a9b] border border-[#0f4a9b]/15 mb-1.5 w-fit tracking-wide group-hover:bg-[#0f4a9b]/12 transition-colors">
                {item.tag}
              </span>

              {/* Body Text */}
              <p className="text-[11px] sm:text-[11.5px] text-gray-600 group-hover:text-gray-700 transition-colors leading-snug line-clamp-1 mb-2">
                {item.body}
              </p>

              {/* Bespoke Interactive Animated Subject Artifact */}
              <div className="mt-auto mb-2 group-hover:scale-[1.02] transition-transform duration-300">
                <item.Artifact />
              </div>

              {/* Bottom Action Strip */}
              <div className="pt-2 border-t border-gray-100 flex items-center text-[11px] sm:text-xs font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
                <span>Explore {item.title}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile Swipe Pagination Dots & Indicator */}
        <div className="flex sm:hidden items-center justify-between mt-2.5 px-1">
          <span className="text-[11px] text-slate-500 font-medium">Swipe to view subjects ({activeIdx + 1}/{GCSE_SUBJECTS.length})</span>
          <div className="flex items-center gap-1.5">
            {GCSE_SUBJECTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToSubject(i)}
                aria-label={`Scroll to ${GCSE_SUBJECTS[i].title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIdx === i
                    ? 'w-5 bg-[#0f4a9b]'
                    : 'w-1.5 bg-[#0f4a9b]/25 hover:bg-[#0f4a9b]/50'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.a
          href="/exam-preparation"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-3 flex items-center gap-3.5 rounded-xl p-2.5 sm:p-3 bg-gradient-to-r from-[#f4f7fc] via-white to-[#f4f7fc] border border-[#0f4a9b]/15 hover:border-[#0f4a9b]/35 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white shadow-xs group-hover:scale-105 transition-transform duration-300">
            <Target className="h-4 w-4" strokeWidth={2.2} />
          </div>
          <div className="min-w-0 flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div className="flex items-center gap-2">
              <h3 className="text-[14px] sm:text-[15px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">Exam Preparation</h3>
              <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[#C7A24A]/15 text-[#A8892A] border border-[#C7A24A]/30 uppercase tracking-wider">High Impact</span>
            </div>
            <p className="text-[11px] sm:text-xs text-gray-500 leading-tight truncate">Past papers, timing drills and mark-scheme practice for mocks and final exams.</p>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

function MobileHeroBackground() {
  return (
    <div className="md:hidden absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* ── AMBIENT LUMINESCENT ORBS ── */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.45, 0.35] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-[#0f4a9b]/40 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
        className="absolute top-20 -right-10 w-[220px] h-[220px] bg-[#f0c96a]/25 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-24 -left-10 w-[200px] h-[200px] bg-[#22b8cd]/20 rounded-full blur-[75px]"
      />

      {/* ── VECTOR BLUEPRINT CANVAS (Portrait Aspect Ratio) ── */}
      <svg
        viewBox="0 0 380 620"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-90"
      >
        <defs>
          <linearGradient id="mobGoldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#C7A24A" />
          </linearGradient>

          <radialGradient id="mobOrbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#0f4a9b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
          </radialGradient>

          <filter id="mobGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Micro-Dot Blueprint Matrix */}
        {(() => {
          const dots: ReactNode[] = [];
          for (let x = 20; x < 380; x += 40) {
            for (let y = 25; y < 620; y += 42) {
              dots.push(
                <circle
                  key={`mbd_${x}_${y}`}
                  cx={x}
                  cy={y}
                  r="1"
                  fill="rgba(255,255,255,0.06)"
                />
              );
            }
          }
          return dots;
        })()}

        {/* Dubai GPS Coordinates & Curriculum Micro-Telemetry */}
        <text x="24" y="46" fill="rgba(95,211,230,0.65)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.1em">
          DUBAI · 25.2048° N, 55.2708° E
        </text>
        <text x="24" y="60" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace" letterSpacing="0.08em">
          AQA · EDEXCEL · OCR 1-TO-1
        </text>

        {/* Frame Boundary Accents */}
        <line x1="20" y1="68" x2="360" y2="68" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="3 4" />
        <line x1="20" y1="540" x2="360" y2="540" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="3 4" />
        <line x1="20" y1="68" x2="20" y2="540" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="3 4" />
        <line x1="360" y1="68" x2="360" y2="540" stroke="rgba(95,211,230,0.12)" strokeWidth="0.8" strokeDasharray="3 4" />

        {/* Top-Right Rotating GCSE Orbital Astrolabe */}
        <g transform="translate(322, 102)">
          <circle cx="0" cy="0" r="42" fill="url(#mobOrbGlow)" />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
          >
            <circle cx="0" cy="0" r="32" fill="none" stroke="rgba(240,201,106,0.35)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="22" fill="none" stroke="rgba(95,211,230,0.35)" strokeWidth="0.8" strokeDasharray="2 3" />
            <circle cx="32" cy="0" r="2" fill="#f0c96a" />
            <circle cx="-22" cy="0" r="1.5" fill="#5fd3e6" />
          </motion.g>
          <circle cx="0" cy="0" r="15" fill="rgba(240,201,106,0.12)" stroke="url(#mobGoldGrad)" strokeWidth="1.2" />
          <text x="0" y="3.5" textAnchor="middle" fill="#f0c96a" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
            GCSE
          </text>
        </g>

        {/* Baseline Node (Lower-left margin) */}
        <circle cx="30" cy="500" r="3.5" fill="#22b8cd" />
        <circle cx="30" cy="500" r="7" fill="none" stroke="#22b8cd" strokeWidth="0.8" opacity="0.6" />
        <text x="44" y="504" fill="rgba(255,255,255,0.5)" fontSize="8.5" fontFamily="monospace">
          Baseline (4-5)
        </text>

        {/* Target Grade 9 Beacon (Top-right near GCSE emblem) */}
        <motion.circle
          cx="322"
          cy="102"
          r="4.5"
          fill="#f0c96a"
          filter="url(#mobGlow)"
          animate={{ r: [4, 6.5, 4], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        />
        <text x="238" y="90" fill="#f0c96a" fontSize="10" fontFamily="monospace" fontWeight="bold">
          Target: Grade 9 ★
        </text>

        {/* Elegant Margin Academic Watermarks (Strictly along left & right borders, not in center) */}
        <text x="24" y="195" fill="rgba(95,211,230,0.35)" fontSize="11" fontFamily="monospace">
          E = mc²
        </text>
        <text x="24" y="320" fill="rgba(240,201,106,0.32)" fontSize="10.5" fontFamily="monospace">
          dy/dx = 2x
        </text>
        <text x="24" y="440" fill="rgba(255,255,255,0.28)" fontSize="9" fontFamily="monospace">
          F = ma · W = Fs
        </text>
        <text x="250" y="475" fill="rgba(95,211,230,0.3)" fontSize="10" fontFamily="monospace">
          pH = -log[H⁺]
        </text>
      </svg>
    </div>
  );
}

function DubaiGcseTermPhasesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const PHASES = [
    {
      step: 'PHASE 01',
      month: 'SEPTEMBER',
      season: 'September Diagnostic',
      term: 'Term 1 · Autumn',
      title: 'Baseline & Board Mapping',
      desc: "Diagnostic assessment mapped to your child's exact AQA, Edexcel or OCR specification. Identifies foundational knowledge leaks early.",
      highlight: 'Topic-by-Topic Audit',
      headerBg: 'bg-gradient-to-r from-[#092244] via-[#0f4a9b] to-[#185cb8]',
      accentLine: 'bg-sky-400',
    },
    {
      step: 'PHASE 02',
      month: 'NOVEMBER',
      season: 'November Mock Repair',
      term: 'Term 1 · Winter',
      title: 'Mark-Loss Correction',
      desc: 'Immediate post-mock repair. Drills 6-mark structures, formula rearranging, and set text quote recall before errors become ingrained.',
      highlight: 'Mock Paper Dissection',
      headerBg: 'bg-gradient-to-r from-[#081f3e] via-[#0e448e] to-[#1656ad]',
      accentLine: 'bg-[#f0c96a]',
    },
    {
      step: 'PHASE 03',
      month: 'FEBRUARY',
      season: 'February Mock Push',
      term: 'Term 2 · Spring',
      title: 'Timed Exam Drills',
      desc: 'Intensive past-paper pacing under timed exam conditions. Focus on non-calculator fluency and multi-step method mark protection.',
      highlight: 'Full Timed Papers',
      headerBg: 'bg-gradient-to-r from-[#0a254c] via-[#104ea0] to-[#1960c0]',
      accentLine: 'bg-sky-300',
    },
    {
      step: 'PHASE 04',
      month: 'MAY',
      season: 'May Final Sprint',
      term: 'Term 3 · Summer Exam',
      title: 'Grade Boundary Polish',
      desc: 'Targeting the hardest single-mark discriminator questions on the paper to convert secure grade 7s into grade 8 and 9 outcomes.',
      highlight: 'Grade 8 & 9 Push',
      headerBg: 'bg-gradient-to-r from-[#061a35] via-[#0d4085] to-[#1452a3]',
      accentLine: 'bg-emerald-400',
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    const newIdx = Math.round(scrollLeft / (offsetWidth * 0.8));
    setActiveIdx(Math.min(Math.max(newIdx, 0), PHASES.length - 1));
  };

  const scrollToPhase = (idx: number) => {
    if (!scrollRef.current) return;
    const children = scrollRef.current.children;
    if (children[idx]) {
      (children[idx] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveIdx(idx);
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(15,74,155,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] text-xs font-bold mb-3 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#0f4a9b]" />
            <span>UAE Academic Calendar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
            How a Dubai GCSE Term Runs With Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Four structured phases synchronized with the UAE academic year to take students from baseline to exam-day confidence.
          </p>
        </div>

        {/* 4 Calendar-Shaped Phase Cards with Smooth Scroll on Mobile */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-4 items-stretch overflow-x-auto sm:overflow-visible snap-x snap-mandatory pt-3 pb-4 sm:pb-0 px-4 sm:px-0 -mx-4 sm:mx-0 scrollbar-none"
        >
          {PHASES.map((phase, idx) => (
            <div
              key={idx}
              className="w-[82vw] max-w-[320px] sm:w-full sm:max-w-none flex-shrink-0 sm:flex-shrink snap-center relative pt-2.5 group"
            >
              {/* Twin Calendar Binder Rings at Top */}
              <div className="absolute top-0 left-8 sm:left-10 w-3.5 h-5.5 rounded-full bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 border border-slate-400/90 shadow-sm z-30 flex items-center justify-center pointer-events-none">
                <div className="w-1 h-3 rounded-full bg-slate-800/70 shadow-inner" />
              </div>
              <div className="absolute top-0 right-8 sm:right-10 w-3.5 h-5.5 rounded-full bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 border border-slate-400/90 shadow-sm z-30 flex items-center justify-center pointer-events-none">
                <div className="w-1 h-3 rounded-full bg-slate-800/70 shadow-inner" />
              </div>

              {/* Main Calendar Body */}
              <div className="h-full bg-white rounded-2xl shadow-[0_6px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_16px_36px_rgba(15,74,155,0.14)] border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
                {/* Top Calendar Blue Header Bar */}
                <div className={`${phase.headerBg} text-white px-5 pt-4 pb-3.5 relative overflow-hidden`}>
                  {/* Subtle top color accent border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${phase.accentLine}`} />

                  {/* Subtle grid pattern overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '14px 14px' }} />

                  {/* Top row: Phase Badge & Season */}
                  <div className="relative z-10 flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border bg-white/15 text-white border-white/25 backdrop-blur-xs">
                      {phase.step}
                    </span>
                    <span className="text-[11px] font-semibold text-blue-100 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#f0c96a]" />
                      {phase.season}
                    </span>
                  </div>

                  {/* Main Month Display */}
                  <div className="relative z-10 flex items-baseline justify-between pt-0.5">
                    <span className="text-xl sm:text-2xl font-black tracking-wider uppercase text-white drop-shadow-xs">
                      {phase.month}
                    </span>
                    <span className="text-[11px] font-medium text-blue-100/90">
                      {phase.term}
                    </span>
                  </div>
                </div>

                {/* Perforation Tear Line with Side Notches */}
                <div className="relative bg-white py-1 flex items-center px-3 border-b border-dashed border-slate-200">
                  <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-100 border border-slate-300" />
                  <div className="w-full border-b border-dashed border-slate-200" />
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-100 border border-slate-300" />
                </div>

                {/* Calendar Page Content */}
                <div className="p-4 sm:p-5 lg:p-4 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-extrabold text-[#0a1f3d] text-base sm:text-base lg:text-[15px] mb-2 group-hover:text-[#0f4a9b] transition-colors leading-snug">
                      {phase.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-xs lg:text-[12px] leading-relaxed mb-3">
                      {phase.desc}
                    </p>
                  </div>

                  {/* Bottom Milestone Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold flex items-center gap-1.5 text-[#0f4a9b]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                      {phase.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Dots Navigation */}
        <div className="sm:hidden flex items-center justify-center gap-2 mt-4 pt-1">
          {PHASES.map((phase, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToPhase(idx)}
              aria-label={`Go to ${phase.step}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIdx === idx ? 'w-6 bg-[#0f4a9b]' : 'w-1.5 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── DUBAI YEAR 11 SQUEEZE SECTION (Tap-to-Slide Mobile Toggle + Desktop Grid) ──
function DubaiYear11SqueezeSection() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const toggleCard = () => {
    setActiveCard((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section className="py-6 sm:py-10 lg:py-18 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-100">
      <GcseGrid light />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full mb-2 sm:mb-5">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-bold">Dubai Year 11</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-1.5 sm:mb-4 leading-tight">
              Year 11 in Dubai{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">comes at you fast</span>
            </h2>
            <p className="text-gray-600 text-[13px] sm:text-[15px] leading-relaxed mb-3 sm:mb-6 max-w-md">
              The spring term is when pressure peaks, and the gaps that felt small in autumn start to show in mocks.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2.5 mb-3 sm:mb-0">
              {['Nine subjects', 'Mocks looming', 'Grades slipping'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-[12px] font-bold text-[#0f4a9b] bg-white border border-[#0f4a9b]/12 shadow-[0_2px_8px_rgba(15,74,155,0.06)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f0c96a]" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Interactive Cards Container */}
          <div className="flex flex-col">
            {/* Mobile Tab Switcher (Tap to switch cards) */}
            <div className="sm:hidden flex items-center bg-slate-200/80 p-1 rounded-xl mb-3 border border-slate-300/60 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveCard(0)}
                className={`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 ${
                  activeCard === 0
                    ? 'bg-white text-[#0a1f3d] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Timer className="w-3.5 h-3.5 text-amber-600" />
                <span>1. The Squeeze</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveCard(1)}
                className={`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 ${
                  activeCard === 1
                    ? 'bg-[#0f4a9b] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Target className="w-3.5 h-3.5 text-[#f0c96a]" />
                <span>2. Specialist Fix</span>
              </button>
            </div>

            {/* Mobile View: Tap to Slide Animated Card */}
            <div className="sm:hidden overflow-hidden">
              <AnimatePresence mode="wait">
                {activeCard === 0 ? (
                  <motion.div
                    key="card-problem"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    onClick={toggleCard}
                    className="cursor-pointer relative rounded-2xl bg-white border border-slate-200/90 p-4.5 shadow-[0_4px_24px_rgba(15,74,155,0.06)] overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-400" />
                    <div className="flex items-start gap-3 pl-1">
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                        <Timer className="w-4 h-4 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="text-[14px] font-extrabold text-[#0a1f3d]">When the squeeze hits</h3>
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">Challenge</span>
                        </div>
                        <p className="text-gray-600 text-[12.5px] leading-relaxed mb-3">
                          By spring of Year 11, the squeeze hits. Nine subjects, mocks looming, and one or two quietly slipping.
                        </p>
                        <div className="flex items-center justify-between text-[11px] font-bold text-[#0f4a9b] pt-2 border-t border-slate-100">
                          <span>Tap card to see the fix</span>
                          <span className="text-xs">Next →</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="card-solution"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    onClick={toggleCard}
                    className="cursor-pointer relative rounded-2xl p-4.5 overflow-hidden shadow-[0_12px_32px_rgba(15,74,155,0.18)]"
                    style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 100%)' }}
                  >
                    <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <div className="relative flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                        <Target className="w-4 h-4 text-[#f0c96a]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="text-[14px] font-extrabold text-[#f0c96a]">How a specialist closes the gap</h3>
                          <span className="text-[10px] font-bold text-[#f0c96a] bg-white/10 px-2 py-0.5 rounded border border-white/20">Solution</span>
                        </div>
                        <p className="text-blue-100/90 text-[12.5px] leading-relaxed mb-3">
                          A dedicated <strong className="text-white font-bold">GCSE tutor in Dubai</strong> finds the leak and fixes it before the next mock. One focused hour a week with a specialist who knows your child&apos;s board.
                        </p>
                        <div className="flex items-center justify-between text-[11px] font-bold text-[#f0c96a] pt-2 border-t border-white/15">
                          <span>Tap card to switch back</span>
                          <span className="text-xs">← Back</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Clickable Indicator Dots */}
              <div className="flex items-center justify-center gap-2 mt-2.5">
                <button
                  type="button"
                  onClick={() => setActiveCard(0)}
                  aria-label="View challenge"
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeCard === 0 ? 'w-6 bg-[#0f4a9b]' : 'w-2 bg-slate-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setActiveCard(1)}
                  aria-label="View solution"
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeCard === 1 ? 'w-6 bg-[#0f4a9b]' : 'w-2 bg-slate-300'
                  }`}
                />
              </div>
            </div>

            {/* Desktop View: Stacked Dual Cards */}
            <div className="hidden sm:flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="relative rounded-2xl bg-white border border-slate-200/90 p-6 lg:p-7 shadow-[0_4px_24px_rgba(15,74,155,0.06)] overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-400" />
                <div className="flex items-start gap-4 pl-2">
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                    <Timer className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-[#0a1f3d] mb-2">When the squeeze hits</h3>
                    <p className="text-gray-600 text-[14px] lg:text-[15px] leading-relaxed">
                      By spring of Year 11, the squeeze hits. Nine subjects, mocks looming, and one or two quietly slipping.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="relative rounded-2xl p-6 lg:p-7 overflow-hidden shadow-[0_12px_32px_rgba(15,74,155,0.18)]"
                style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 100%)' }}
              >
                <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#f0c96a]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-[#f0c96a] mb-2">How a specialist closes the gap</h3>
                    <p className="text-blue-100/90 text-[14px] lg:text-[15px] leading-relaxed">
                      A dedicated <strong className="text-white font-bold">GCSE tutor in Dubai</strong> finds the leak and fixes it before the next mock. One focused hour a week with a specialist who knows your child&apos;s board.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GCSETutorDubaiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const serviceNode = {
    ...serviceSchema('GCSE Tutoring Dubai', 'Expert online GCSE tutors in Dubai. AQA, Edexcel and OCR specialists. Private 1-to-1, recorded lessons, free trial.', '/gcse-tutor-dubai'),
    areaServed: { '@type': 'City', name: 'Dubai' },
  };

  return (
    <Layout>
      <SEOHead
        title="GCSE Tutor Dubai | AQA, Edexcel & OCR | Ustaad"
        description="Expert online GCSE tutors in Dubai. AQA, Edexcel & OCR specialists. Private 1-to-1, recorded lessons, free trial. Trusted UAE families since 2015."
        canonical="/gcse-tutor-dubai"
        ogImage="/UpdatedImages/gcse-tutor-abu-dhabi-online-year-11-session.webp"
        placename="Dubai, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Dubai',
            url: '/gcse-tutor-dubai',
            name: 'Ustaad, GCSE Tutor Dubai',
            description: 'Expert online GCSE tutors in Dubai. AQA, Edexcel and OCR specialists. Private 1-to-1, recorded lessons, free trial.',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'GCSE', url: '/gcse' },
            { name: 'GCSE Tutor Dubai', url: '/gcse-tutor-dubai' },
          ]),
          serviceNode,
          faqSchema(FAQS),
          reviewSchema('Ustaad — Online GCSE Tutor Dubai', PARENT_REVIEWS.map((r) => ({
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
              <linearGradient id="dubaiGrowthGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="dubaiHexGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0c96a" />
                <stop offset="100%" stopColor="#C7A24A" />
              </linearGradient>
              <radialGradient id="dubaiHexGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
              </radialGradient>
              <filter id="dubaiPglow"><feGaussianBlur stdDeviation="3" /></filter>
              <marker id="dubaiArrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
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
            <path d="M 40 480 Q 200 460 360 140" fill="none" stroke="url(#dubaiGrowthGrad)" strokeWidth="3" filter="url(#dubaiPglow)" />
            <path d="M 40 480 Q 200 460 360 140" fill="none" stroke="url(#dubaiGrowthGrad)" strokeWidth="1.5" markerEnd="url(#dubaiArrow)" />
            <line x1="30" y1="480" x2="380" y2="480" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="40" y1="490" x2="40" y2="100" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <text x="350" y="115" fill="rgba(95,211,230,0.85)" fontSize="13" fontFamily="monospace" fontWeight="bold">Target: Grade 7+</text>
            <text x="350" y="500" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">Exam Week</text>
            <text x="45" y="500" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">Current</text>

            {/* Right GCSE Hexagon badge — pushed to far right X=1270 */}
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
                <circle cx={HX} cy={HY} r={SIZE * 1.5} fill="url(#dubaiHexGlow)" />
                <polygon points={pts.join(' ')} fill="none" stroke="url(#dubaiHexGrad)" strokeWidth="2" filter="url(#dubaiPglow)" />
                <polygon points={pts.join(' ')} fill="none" stroke="rgba(240,201,106,0.5)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx={HX} cy={HY} r="25" fill="rgba(240,201,106,0.1)" stroke="#f0c96a" strokeWidth="1.5" />
                <text x={HX} y={HY + 6} textAnchor="middle" fill="#f0c96a" fontSize="16" fontWeight="900" fontFamily="sans-serif">GCSE</text>
                <text x={HX - 100} y={HY - 65} fill="rgba(95,211,230,0.7)" fontSize="11" fontFamily="monospace">AQA 8464</text>
                <text x={HX + 45} y={HY - 75} fill="rgba(180,180,255,0.7)" fontSize="11" fontFamily="monospace">E = mc²</text>
                <text x={HX + 60} y={HY + 75} fill="rgba(240,201,106,0.7)" fontSize="11" fontFamily="monospace">Edexcel 1MA1</text>
              </>
              );
            })()}
          </svg>

          {/* Rich Mobile Hero Background Graphic (Academic Blueprint, Coordinates, Trajectory & GCSE Astrolabe) */}
          <MobileHeroBackground />
        </div>

        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-20 md:pb-14 max-w-5xl w-full">

          <motion.div variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-3" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f0c96a' }} />
            <span className="text-blue-100/90 text-[11px] sm:text-[12px] font-semibold tracking-wide">ONLINE GCSE TUITION · DUBAI</span>
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }} className="font-extrabold tracking-tight text-white leading-[1.08] mb-3 md:mb-5 text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] max-w-[95%] sm:max-w-none">
            GCSE Tutors in Dubai{' '}
            <span className="block sm:inline" style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Who Elevate Grades</span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className="text-blue-100/80 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mb-6 md:mb-8 px-2 italic">
            One-to-one tutoring with AQA, Edexcel and OCR specialists.
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
                <WhatsAppIcon className="w-4 h-4 text-white" /> WhatsApp Us
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
                  <WhatsAppIcon className="w-4 h-4 text-white" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <StatsBar />

      {/* ── SECTION 03: DISTANCE LEARNING GCSE ROUTES IN DUBAI ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] text-xs font-bold mb-3">
              <span>UK National GCSE In Dubai</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
              Preparing for UK GCSE from Dubai
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Most Dubai British-curriculum schools sit IGCSE. We support Dubai families preparing for UK national GCSE through the distance-learning routes below. If your child sits IGCSE, see <a href="/igcse-tutor-dubai" className="text-[#0f4a9b] font-bold hover:underline">IGCSE Tutor Dubai</a>.
            </p>
          </div>

          {/* Mobile Auto-Scrolling Marquee */}
          <div className="sm:hidden relative w-full overflow-hidden py-1">
            {/* Soft Edge Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-3.5 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 16,
              }}
            >
              {[
                {
                  name: "King's InterHigh",
                  logo: '/images/providers/kings-interhigh.png',
                  alt: "King's InterHigh Leading Online School",
                  imgClass: 'max-h-11',
                },
                {
                  name: 'Cambridge Home School Online',
                  logo: '/images/providers/cambridge-home-school.png',
                  alt: 'Cambridge Home School Online',
                  imgClass: 'max-h-11',
                },
                {
                  name: 'Wolsey Hall Oxford',
                  logo: '/images/providers/wolsey-hall-oxford.png',
                  alt: 'Wolsey Hall Oxford Homeschooling College',
                  imgClass: 'max-h-14 scale-125',
                },
                {
                  name: 'Oxford Home Schooling',
                  logo: '/images/providers/oxford-home-schooling.png',
                  alt: 'Oxford Home Schooling Distance Learning',
                  imgClass: 'max-h-11 scale-110',
                },
                {
                  name: 'British Council',
                  logo: '/images/providers/british-council.png',
                  alt: 'British Council Official Exam Centre',
                  imgClass: 'max-h-10 scale-105',
                },
                {
                  name: "King's InterHigh",
                  logo: '/images/providers/kings-interhigh.png',
                  alt: "King's InterHigh Leading Online School",
                  imgClass: 'max-h-11',
                },
                {
                  name: 'Cambridge Home School Online',
                  logo: '/images/providers/cambridge-home-school.png',
                  alt: 'Cambridge Home School Online',
                  imgClass: 'max-h-11',
                },
                {
                  name: 'Wolsey Hall Oxford',
                  logo: '/images/providers/wolsey-hall-oxford.png',
                  alt: 'Wolsey Hall Oxford Homeschooling College',
                  imgClass: 'max-h-14 scale-125',
                },
                {
                  name: 'Oxford Home Schooling',
                  logo: '/images/providers/oxford-home-schooling.png',
                  alt: 'Oxford Home Schooling Distance Learning',
                  imgClass: 'max-h-11 scale-110',
                },
                {
                  name: 'British Council',
                  logo: '/images/providers/british-council.png',
                  alt: 'British Council Official Exam Centre',
                  imgClass: 'max-h-10 scale-105',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-[200px] flex-shrink-0 bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_4px_16px_rgba(15,74,155,0.04)] flex items-center justify-center min-h-[92px] overflow-hidden"
                >
                  <img
                    src={item.logo}
                    alt={item.alt}
                    loading="lazy"
                    className={`${item.imgClass} w-auto object-contain`}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Tablet & Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 items-center max-w-5xl mx-auto">
            {[
              {
                name: "King's InterHigh",
                logo: '/images/providers/kings-interhigh.png',
                alt: "King's InterHigh Leading Online School",
                imgClass: 'max-h-12 sm:max-h-14',
              },
              {
                name: 'Cambridge Home School Online',
                logo: '/images/providers/cambridge-home-school.png',
                alt: 'Cambridge Home School Online',
                imgClass: 'max-h-12 sm:max-h-14',
              },
              {
                name: 'Wolsey Hall Oxford',
                logo: '/images/providers/wolsey-hall-oxford.png',
                alt: 'Wolsey Hall Oxford Homeschooling College',
                imgClass: 'max-h-16 sm:max-h-[76px] scale-125 sm:scale-135',
              },
              {
                name: 'Oxford Home Schooling',
                logo: '/images/providers/oxford-home-schooling.png',
                alt: 'Oxford Home Schooling Distance Learning',
                imgClass: 'max-h-12 sm:max-h-14 scale-110 sm:scale-125',
              },
              {
                name: 'British Council',
                logo: '/images/providers/british-council.png',
                alt: 'British Council Official Exam Centre',
                imgClass: 'max-h-11 sm:max-h-13 scale-110',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_4px_16px_rgba(15,74,155,0.04)] hover:shadow-[0_12px_28px_rgba(15,74,155,0.10)] hover:border-[#0f4a9b]/35 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-h-[105px] sm:min-h-[120px] group overflow-hidden"
              >
                <img
                  src={item.logo}
                  alt={item.alt}
                  loading="lazy"
                  className={`${item.imgClass} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YEAR 11 SQUEEZE (Interactive Mobile Tabs & Swipe + Desktop Grid) ── */}
      <DubaiYear11SqueezeSection />

      {/* ── HOW A DUBAI GCSE TERM RUNS (UAE SCHOOL CALENDAR PLAN) ── */}
      <DubaiGcseTermPhasesSection />

      {/* ── WHERE DUBAI GCSE STUDENTS SLIP (DUBAI MARK-LOSS PATTERNS) ── */}
      <DubaiGcseStudentsSlipSection />

      {/* ── 3D INTERACTIVE COMPARISON BOOK (Closed by default, opens on tap) ── */}
      <InteractiveComparisonBook3D />

      {/* ── FREE TRIAL ── */}
      <FreeTrialTimelineSection location="Dubai" />

      {/* ── GRADE MOVEMENT ── */}
      <section className="py-14 lg:py-18 bg-[#f4f7fc] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3"><TrendingUp className="w-3.5 h-3.5" /> Typical Outcomes</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">Most students move one to three grades</h2>
          <p className="text-gray-600 text-[15px] mb-10 max-w-xl mx-auto leading-relaxed italic">It shows first in mocks, then confidence, then the grade that counts.</p>
          <div className="rounded-3xl p-8 text-center max-w-sm mx-auto" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 100%)' }}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div>
                <div className="text-[11px] font-bold text-blue-200/70 uppercase tracking-wider mb-1">Before</div>
                <div className="text-4xl font-black text-white/60">4</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ArrowRight className="w-6 h-6 text-[#f0c96a]" />
                <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full" style={{ background: 'rgba(240,201,106,0.2)', color: '#f0c96a' }}>+3 grades</span>
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#f0c96a] uppercase tracking-wider mb-1">After</div>
                <div className="text-4xl font-black text-[#f0c96a]">7+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBJECTS ── */}
      <GCSESubjectsSection />

      {/* ── WHY DUBAI FAMILIES 3D CENTERPIECE ── */}
      <WhyFamiliesChoose3DSection location="Dubai" />


      {/* ── DUBAI AREAS + TURNAROUNDS ── */}
      <section className="py-14 lg:py-18 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-100">
        <GcseGrid light />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 lg:mb-20">
            {/* Left Side: Animated Typography & Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="text-left"
            >
              {/* Badge with animated beacon */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full mb-5"
              >
                <MapPin className="h-4 w-4 animate-bounce" style={{ animationDuration: '2.5s' }} />
                <span className="text-sm font-bold">Dubai &amp; UAE</span>
              </motion.div>

              {/* Animated Typography Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                  }}
                  className="inline-block mr-2"
                >
                  We teach families
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.1 } },
                  }}
                  className="inline-block bg-clip-text text-transparent font-black"
                  style={{
                    backgroundImage: 'linear-gradient(115deg, #0a1f3d 0%, #0f4a9b 25%, #C7A24A 50%, #1e5ba8 75%, #0a1f3d 100%)',
                    backgroundSize: '250% auto',
                  }}
                  animate={{
                    backgroundPosition: ['0% center', '250% center'],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: 'linear',
                  }}
                >
                  right across Dubai
                </motion.span>
              </h2>

              {/* Subtitle with soft fade in */}
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.15 } },
                }}
                className="text-gray-600 text-[15px] leading-relaxed mb-6 max-w-md"
              >
                Every lesson is online, so your child learns from home, anywhere in Dubai or the UAE.
              </motion.p>

              {/* Feature card (Blue Luxury Style) */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
                whileHover={{ y: -2 }}
                className="flex items-start gap-4 rounded-2xl bg-gradient-to-r from-[#0a1f3d] via-[#0d2a54] to-[#0f4a9b] border border-blue-400/20 p-5 shadow-[0_10px_28px_rgba(15,74,155,0.18)] hover:shadow-[0_14px_36px_rgba(15,74,155,0.25)] transition-all duration-300 text-white"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#f0c96a]">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[14px] font-extrabold text-white mb-1">Fully online, no travel</h3>
                  <p className="text-[13px] text-blue-100/90 leading-relaxed">Live 1-to-1 sessions from home. Same specialist every week, recorded to rewatch.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Creative Interactive Radar & Beacon Card */}
            <DubaiAreasInteractiveCard />
          </div>

          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3">
              <TrendingUp className="w-3.5 h-3.5" /> Real Outcomes
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-2">Real GCSE turnarounds in Dubai</h3>
            <p className="text-gray-500 text-sm italic">Anonymised, everyday outcomes from families across the emirate.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                area: 'Year 11, Arabian Ranches',
                outcome: 'A grade 5 autumn mock became a secure grade 7 by summer.',
                before: '5',
                after: '7',
                accentColor: '#0f4a9b',
                jump: '+2 Grades',
              },
              {
                area: 'Year 10, Emirates Hills',
                outcome: 'Panicked six-mark answers turned into full-mark responses within a term.',
                before: null,
                after: null,
                highlight: 'Full marks',
                accentColor: '#0d9488',
                badge: '100% Score',
              },
              {
                area: 'Year 11, Downtown Dubai',
                outcome: 'A quotation bank and clear structure lifted Paper 1 from a 4 to a 6.',
                before: '4',
                after: '6',
                accentColor: '#C7A24A',
                jump: '+2 Grades',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl p-6 bg-white border border-gray-200/90 shadow-[0_8px_30px_rgba(15,74,155,0.06)] hover:shadow-[0_16px_38px_rgba(15,74,155,0.12)] transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                {/* Top Accent Indicator Strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: card.accentColor }}
                />

                {/* Location */}
                <div className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{card.area}</span>
                </div>

                {/* Visual Score Transformation Block */}
                <div className="flex items-center justify-between mb-5 px-4 py-3.5 rounded-xl bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] border border-gray-200/70">
                  {card.before && card.after ? (
                    <>
                      {/* Before Pill */}
                      <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-xs flex flex-col items-center justify-center">
                        <span className="text-[8.5px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-0.5">
                          Before
                        </span>
                        <span className="text-xl font-black text-gray-500 leading-none">
                          {card.before}
                        </span>
                      </div>

                      {/* Progression Bridge */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-px bg-gray-300" />
                          <div className="w-6 h-6 rounded-full bg-white border border-gray-200 shadow-xs flex items-center justify-center">
                            <ArrowRight className="w-3 h-3 text-[#C7A24A]" />
                          </div>
                          <div className="w-3 h-px bg-gray-300" />
                        </div>
                        <span className="text-[9.5px] font-extrabold text-[#0f4a9b] bg-white px-2 py-0.5 rounded-full border border-blue-100 shadow-xs">
                          {card.jump}
                        </span>
                      </div>

                      {/* After Pill */}
                      <div
                        className="w-12 h-12 rounded-xl text-white shadow-xs flex flex-col items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${card.accentColor}, #0a1f3d)`,
                        }}
                      >
                        <span className="text-[8.5px] font-bold text-white/80 uppercase tracking-wider leading-none mb-0.5">
                          After
                        </span>
                        <span className="text-xl font-black text-white leading-none">
                          {card.after}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0d9488] to-[#0f766e] text-white shadow-xs flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-[#f0d080]" />
                        </div>
                        <div>
                          <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider block">
                            Exam Technique
                          </span>
                          <span className="text-base font-black text-[#0a1f3d] leading-none">
                            {card.highlight}
                          </span>
                        </div>
                      </div>
                      <span className="text-[9.5px] font-extrabold text-[#0d9488] bg-white px-2.5 py-1 rounded-full border border-teal-100 shadow-xs uppercase tracking-wider">
                        {card.badge}
                      </span>
                    </>
                  )}
                </div>

                {/* Outcome Quote */}
                <div className="mt-auto pt-3.5 border-t border-gray-100">
                  <p className="text-[13.5px] text-[#0a1f3d] font-medium leading-relaxed italic">
                    &ldquo;{card.outcome}&rdquo;
                  </p>
                </div>

                {/* Verified Tag */}
                <div className="mt-3 flex items-center gap-1.5 text-[10.5px] font-bold text-gray-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Verified Dubai Academic Outcome</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHATSAPP ── */}
      <section className="py-14 lg:py-18 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#0f4a9b]/15 shadow-[0_16px_40px_rgba(15,74,155,0.1)]"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0d2c58 50%, #0f4a9b 100%)' }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
            <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-[#25D366]/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 p-8 sm:p-10 lg:p-12 text-center sm:text-left grid sm:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-100 text-[11px] font-semibold uppercase tracking-[0.12em] mb-4">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  Stuck on a GCSE question?
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 leading-tight">
                  Get a free solution in 15 minutes
                </h2>
                <p className="text-blue-100/80 text-[14px] sm:text-[15px] leading-relaxed max-w-xl mb-5">
                  Send any AQA, OCR or Pearson Edexcel GCSE past-paper question. A specialist replies with a clear worked solution.
                </p>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/8 border border-white/12 text-[12px] font-medium text-blue-100/90">
                  <Timer className="w-3.5 h-3.5 text-[#f0c96a]" />
                  Average reply time: 12 minutes
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-end gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20b958] text-white px-7 py-3.5 rounded-xl font-bold text-[14px] shadow-[0_10px_28px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  Ask on WhatsApp
                </a>
                <p className="text-[11px] text-blue-200/55 font-medium">No commitment · Reply from our academic team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARENT REVIEWS ── */}
      <section className="py-12 lg:py-14 relative overflow-hidden bg-[#f4f7fc] border-y border-slate-100">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#0f4a9b]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#C7A24A]/10 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-[#0a1f3d] mb-3 shadow-sm">
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

      {/* ── FAQS ── */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
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
                Honest answers to the GCSE questions Dubai parents ask before their first session.
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
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{
                          width: 40, height: 40, minWidth: 40, minHeight: 40,
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
                        className="flex-1 flex items-center gap-3 text-left rounded-full border bg-white shadow-sm"
                        style={{ minHeight: '52px', padding: '10px 16px', cursor: 'pointer', borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)' }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{f.q}</span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 32, height: 32, minWidth: 32, minHeight: 32, borderRadius: '50%',
                            background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                            color: isOpen ? '#fff' : '#0f4a9b',
                            transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        >
                          <ChevronDown className="h-4 w-4" />
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
                          className="ml-[52px] overflow-hidden"
                        >
                          <div className="flex items-start gap-3 rounded-2xl border p-4.5 bg-[#f8fafc]" style={{ borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 4px 16px rgba(15,74,155,0.06)' }}>
                            <p className="flex-1 text-gray-600 text-[13.5px] leading-relaxed">{f.a}</p>
                            <span className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, background: '#0f4a9b', color: '#fff' }}>
                              <MessageCircle className="h-4 w-4" />
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

      {/* ── CLOSING CTA ── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4">Book your free GCSE trial in Dubai</h2>
            <p className="text-gray-600 text-[15px]">Tell us the subject, year group and school. We match a specialist fast.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-12 items-stretch">
            <div className="bg-[#f4f7fc] p-8 rounded-[24px] border border-[#0f4a9b]/10 flex flex-col h-full text-center hover:shadow-[0_12px_32px_rgba(15,74,155,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#f0c96a]/20 text-[#b8883f] flex items-center justify-center mb-5 mx-auto"><Star className="w-8 h-8 fill-current" /></div>
              <h3 className="text-[18px] font-extrabold text-[#0a1f3d] mb-2">Free First Lesson</h3>
              <p className="text-[14px] text-gray-500 mb-6 leading-relaxed flex-1">Thirty online minutes with a matched GCSE tutor to see if it&apos;s the right fit.</p>
              <a href={BOOKING} className="mt-auto w-full min-h-[48px] bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] hover:brightness-110 text-white py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(199,162,74,0.3)] hover:-translate-y-0.5">Book a Free Trial Lesson</a>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgba(37,211,102,0.08)] border border-[#25D366]/20 flex flex-col h-full text-center hover:shadow-[0_12px_40px_rgba(37,211,102,0.15)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-5 mx-auto"><WhatsAppIcon className="w-8 h-8 text-[#25D366]" /></div>
              <h3 className="text-[18px] font-extrabold text-[#0a1f3d] mb-2">Get a Free Solution in 15 Min</h3>
              <p className="text-[14px] text-gray-500 mb-6 leading-relaxed flex-1">Send any past-paper question and get a reply in fifteen minutes.</p>
              <a href={WA_URL} target="_blank" rel="noopener" className="mt-auto w-full min-h-[48px] bg-[#25D366] hover:bg-[#20b958] text-white py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2"><WhatsAppIcon className="w-4 h-4 text-white" /> Message Us</a>
            </div>
          </div>

          <div className="bg-[#f4f7fc] rounded-3xl p-6 sm:p-8 border border-gray-100">
            <h4 className="text-[15px] font-bold text-[#0a1f3d] mb-6 border-b border-gray-200 pb-4">Related pages</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div><a href="/gcse" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">GCSE Hub (All Subjects)</a><p className="text-[12px] text-gray-500">For board comparison, subject list and the full GCSE framework across the UAE.</p></div>
              <div><a href="/maths" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">GCSE Maths</a><p className="text-[12px] text-gray-500">For non-calc drills, Paper 1 timing and Higher tier prep.</p></div>
              <div><a href="/english" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">GCSE English</a><p className="text-[12px] text-gray-500">For English Language reading and Literature essay support.</p></div>
              <div><a href="/physics" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">GCSE Physics</a><p className="text-[12px] text-gray-500">For forces, motion, waves and required practicals.</p></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
