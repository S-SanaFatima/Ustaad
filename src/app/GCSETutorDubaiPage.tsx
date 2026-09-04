import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Calculator, MessageSquareQuote, List, ArrowRightLeft, FlaskConical, PenTool,
  CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Star, MessageCircle, BookOpen, Video, Timer,
  MapPin, Atom, Dna, Briefcase, LineChart, ClipboardList, X, Users, ShieldCheck,
  Clock, TrendingUp, Target, ArrowRight, Laptop,
} from 'lucide-react';
import { Layout, StatsBar, SchoolsMarquee, type SchoolLogoItem } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, reviewSchema } from './shared/schemas';

const PARENT_REVIEWS = [
  {
    initials: 'LM',
    name: 'Layla M., Emirates Hills, Dubai',
    subject: 'Verified Google review · Edexcel GCSE Maths',
    text: 'The online setup worked perfectly for our daughter in Emirates Hills. Her Edexcel Maths tutor walked through past papers live and explained exactly where marks were lost. She moved from a 5 to a 7 by her summer exams.',
  },
  {
    initials: 'KA',
    name: 'Khalid A., Arabian Ranches, Dubai',
    subject: 'Verified Google review · AQA Combined Science',
    text: 'Our son kept losing marks on six-mark science questions even though he knew the content. His AQA tutor drilled the structure until it became automatic. Mock scores rose two grades within a term.',
  },
  {
    initials: 'SR',
    name: 'Sara R., Jumeirah, Dubai',
    subject: 'Verified Google review · Edexcel English Literature',
    text: 'English Literature essays were thin and short on quotations. The tutor built a clear quotation bank and paragraph method for each set text. Her predicted grade moved from a 5 to a strong 7.',
  },
  {
    initials: 'OH',
    name: 'Omar H., Dubai Hills, Dubai',
    subject: 'Verified Google review · OCR GCSE Physics',
    text: 'Formula rearranging was the weak spot in Physics. Live worked examples and timed paper practice fixed that fast. He went into the OCR exams calm and finished with a grade higher than predicted.',
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

type Challenge = { icon: ReactNode; title: string; problem: string };

const CHALLENGES: Challenge[] = [
  { icon: <Calculator className="w-5 h-5" />, title: 'Paper 1 Non-Calc', problem: 'Paper 1 Maths exposes gaps that later calculator papers hide.' },
  { icon: <MessageSquareQuote className="w-5 h-5" />, title: 'Set Text Recall', problem: 'English Literature answers thin without exact quotations memorised.' },
  { icon: <List className="w-5 h-5" />, title: 'Six-Mark Structure', problem: 'Six-mark science needs three linked points, not one long paragraph.' },
  { icon: <ArrowRightLeft className="w-5 h-5" />, title: 'Formula Rearranging', problem: 'Physics loses marks when v=u+at or F=ma cannot be rearranged.' },
  { icon: <FlaskConical className="w-5 h-5" />, title: 'Practical Language', problem: 'Required practical questions expect specific method language examiners reward.' },
  { icon: <PenTool className="w-5 h-5" />, title: 'Method Marks', problem: 'Maths method marks vanish when only the final answer is written.' },
];

const DUBAI_GCSE_SCHOOL_LOGOS: SchoolLogoItem[] = [
  { name: 'Dubai College', file: 'dubai-college.png' },
  { name: 'Repton School Dubai', file: 'repton-dubai.png' },
  { name: 'Durham School Dubai', file: 'durham-school-dubai.png' },
  { name: 'Horizon International School', file: 'horizon-international-school.png' },
  { name: 'Hartland International School', file: 'hartland-international-school.png' },
  { name: 'Brighton College Dubai', file: 'brighton-college-dubai.png' },
  { name: 'Nord Anglia International School Dubai', file: 'nord-anglia-dubai.png' },
  { name: 'GEMS World Academy', file: 'gems-world-academy.png', scale: 0.72 },
];

const FAQS = [
  { q: 'My child is only in Year 10. Is it too early to start?', a: 'Not at all. Starting earlier means small gaps are caught while there is still plenty of time, so Year 11 feels far calmer. We grow confidence steadily instead of cramming it all in later.' },
  { q: 'Can you stretch a strong student aiming for top grades?', a: 'Yes. For confident students we focus on the harder application questions and the polish that separates a good answer from a top one, at a pace that keeps them stretched but never overwhelmed.' },
  { q: 'My child knows the work but freezes in exams. Can you help?', a: 'This is one of the most common reasons families come to us. We shift the focus from simply knowing the content to staying calm and clear under exam pressure, practising until nerves stop getting in the way.' },
  { q: 'My child fell behind after changing school. Can they catch up?', a: 'Yes. We start by finding exactly where the gaps are, then rebuild the missing foundations in order, so your child stops feeling lost and starts following lessons in class again.' },
  { q: 'Is my child doing GCSE or IGCSE in Dubai?', a: "Many British-curriculum schools in Dubai actually teach IGCSE rather than GCSE. Tell us your child's school and we'll confirm the exact board and specification before the first lesson, so the right past papers and mark schemes are used from day one." },
  { q: 'How do you keep a GCSE student motivated through the year?', a: 'Small, visible wins. Every session ends somewhere your child can feel progress, and a steady weekly rhythm keeps momentum through the tougher stretches, so motivation does not depend on mood.' },
  { q: 'How will we know the tutoring is actually working?', a: 'You will hear it in how your child talks about the subject, see it in steadier mocks, and read it in the short note we send you. Confidence usually shifts first, and the grade follows.' },
];

function ReviewsScroller() {
  const n = PARENT_REVIEWS.length;
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % n), 5500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (idx: number) => {
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
                <button type="button" onClick={() => setActive(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex-1 flex items-center gap-3 text-left rounded-full border" style={{ minHeight: '48px', padding: '8px 14px', cursor: 'pointer', background: 'transparent', borderColor: 'rgba(15,74,155,0.1)' }}>
                  <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{c.title}</span>
                  <span className="flex-shrink-0 flex items-center justify-center" style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, borderRadius: '50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }} className="overflow-hidden">
                    <div className="ml-[52px] mt-1">
                      <div className="rounded-2xl px-4 py-3" style={{ background: 'linear-gradient(135deg, rgba(15,74,155,0.06) 0%, rgba(30,91,168,0.03) 100%)', border: '1px solid rgba(15,74,155,0.12)', backdropFilter: 'blur(8px)' }}>
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
          <img
            src="/UpdatedImages/gcse-tutor-abu-dhabi-online-year-11-session.webp"
            alt="Online GCSE tutor in Dubai teaching a Year 11 student in a live 1-to-1 video lesson"
            className="w-full h-full object-cover opacity-40 md:opacity-25 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060f22]/60 via-[#060f22]/30 to-[#060f22]" />
        </div>

        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 md:opacity-100">
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMaxYMid slice" className="absolute inset-0 w-full h-full" aria-hidden="true">
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
            <path d="M 50 450 Q 300 450 600 150" fill="none" stroke="url(#dubaiGrowthGrad)" strokeWidth="3" filter="url(#dubaiPglow)" />
            <path d="M 50 450 Q 300 450 600 150" fill="none" stroke="url(#dubaiGrowthGrad)" strokeWidth="1.5" markerEnd="url(#dubaiArrow)" />
            <line x1="40" y1="450" x2="650" y2="450" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="50" y1="460" x2="50" y2="100" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <text x="590" y="130" fill="rgba(95,211,230,0.8)" fontSize="14" fontFamily="monospace" fontWeight="bold">Target: Grade 7+</text>
            <text x="600" y="470" fill="rgba(255,255,255,0.4)" fontSize="12" fontFamily="monospace">Exam Week</text>
            <text x="60" y="470" fill="rgba(255,255,255,0.4)" fontSize="12" fontFamily="monospace">Current</text>
            {(() => {
              const HX = 1100;
              const HY = 250;
              const SIZE = 90;
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
                  <text x={HX} y={HY + 6} textAnchor="middle" fill="#f0c96a" fontSize="18" fontWeight="900" fontFamily="sans-serif">GCSE</text>
                  <text x={HX - 140} y={HY - 60} fill="rgba(95,211,230,0.7)" fontSize="12" fontFamily="monospace">AQA 8464</text>
                  <text x={HX + 90} y={HY - 80} fill="rgba(180,180,255,0.7)" fontSize="12" fontFamily="monospace">E = mc²</text>
                  <text x={HX + 120} y={HY + 70} fill="rgba(240,201,106,0.7)" fontSize="12" fontFamily="monospace">Edexcel 1MA1</text>
                </>
              );
            })()}
          </svg>
        </div>

        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-20 md:pb-14 max-w-5xl w-full">
          <motion.div variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2.5" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f0c96a' }} />
            <span className="text-blue-100/80 text-[11px] sm:text-[12px] font-semibold tracking-wide">ONLINE GCSE TUITION · DUBAI</span>
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }} className="font-extrabold tracking-tight text-white leading-[1.05] mb-3 md:mb-5 text-[clamp(1.5rem,5vw,3.4rem)] max-w-[90%] sm:max-w-none">
            GCSE Tutors in Dubai{' '}
            <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Who Lift Grades</span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className="text-blue-100/80 text-[clamp(0.88rem,2vw,1.02rem)] leading-relaxed max-w-2xl mb-6 md:mb-8 px-4 italic">
            One-to-one with AQA, Edexcel and OCR specialists. First lesson free.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full px-4 mt-2">
            <div className="sm:hidden w-full max-w-[340px] flex flex-col items-center gap-2.5 p-3.5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}>
              <a
                href={BOOKING}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white transition-all hover:-translate-y-0.5 text-center"
                style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 16px rgba(15,74,155,0.5)' }}
              >
                Book Your Free Trial
              </a>
              <span className="text-blue-200/50 text-[11px]">✦ No Commitment · Cancel Anytime</span>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20">
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

      <StatsBar />

      {/* ── SECTION 03: DUBAI SCHOOLS MARQUEE ── */}
      <SchoolsMarquee
        title="Trusted by GCSE Students Across Leading Dubai Schools"
        logoList={DUBAI_GCSE_SCHOOL_LOGOS}
      />

      {/* ── YEAR 11 SQUEEZE ── */}
      <section className="py-14 lg:py-18 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-100">
        <GcseGrid light />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full mb-5">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-bold">Dubai Year 11</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
                Year 11 in Dubai{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">comes at you fast</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6 max-w-md">
                The spring term is when pressure peaks, and the gaps that felt small in autumn start to show in mocks.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['Nine subjects', 'Mocks looming', 'Grades slipping'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-bold text-[#0f4a9b] bg-white border border-[#0f4a9b]/12 shadow-[0_2px_8px_rgba(15,74,155,0.06)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f0c96a]" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-[0_4px_24px_rgba(15,74,155,0.06)] overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-400" />
                <div className="flex items-start gap-4 pl-2">
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                    <Timer className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-[#0a1f3d] mb-2">When the squeeze hits</h3>
                    <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
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
                className="relative rounded-2xl p-6 sm:p-7 overflow-hidden shadow-[0_12px_32px_rgba(15,74,155,0.18)]"
                style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 100%)' }}
              >
                <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#f0c96a]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-[#f0c96a] mb-2">How a specialist closes the gap</h3>
                    <p className="text-blue-100/90 text-[14px] sm:text-[15px] leading-relaxed">
                      A dedicated <strong className="text-white font-bold">GCSE tutor in Dubai</strong> finds the leak and fixes it before the next mock. One focused hour a week with a specialist who knows your child&apos;s board.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW SESSIONS RUN ── */}
      <section className="py-14 lg:py-20 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-100">
        <GcseGrid light />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3 shadow-xs">
              Session Blueprint
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
              How Online GCSE Sessions Run
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
              Live past papers, marked in real time, with your child on screen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {[
              {
                step: '01',
                title: 'Live Past Papers',
                desc: 'AQA, OCR and Edexcel past papers opened on screen together.',
                icon: BookOpen,
                highlight: 'Real-time Screen Collaboration',
              },
              {
                step: '02',
                title: 'Live Mark Scheme',
                desc: 'Answers marked in the same session against the board scheme.',
                icon: CheckCircle2,
                highlight: 'Official Board Criteria',
              },
              {
                step: '03',
                title: 'Session Recordings',
                desc: 'Every session recorded so tricky topics can be rewatched before a mock.',
                icon: Video,
                highlight: 'On-Demand Revision Archive',
              },
              {
                step: '04',
                title: 'Same Tutor Weekly',
                desc: 'One specialist, never a rotating pool. The same face every week.',
                icon: Users,
                highlight: 'Continuous 1-to-1 Specialist',
              },
              {
                step: '05',
                title: 'Fortnightly Report',
                desc: 'A short, honest progress note every two weeks on progress and gaps.',
                icon: Target,
                highlight: 'Transparent Parent Updates',
              },
              {
                step: '06',
                title: 'Just a Laptop',
                desc: 'Just a laptop and Wi-Fi from anywhere in Dubai. We handle the rest.',
                icon: Laptop,
                highlight: 'Zero Travel · Across Dubai',
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,74,155,0.05)] hover:shadow-[0_20px_42px_rgba(15,74,155,0.12)] hover:-translate-y-1.5 hover:border-[#0f4a9b]/35 transition-all duration-300 flex flex-col group overflow-hidden"
              >
                {/* Top Accent Gradient Indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A] group-hover:h-1.5 transition-all duration-300" />

                {/* Ambient Soft Blue Corner Glow */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full blur-2xl bg-[#0f4a9b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Header: Icon & Step Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(15,74,155,0.2)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shrink-0">
                    <s.icon className="w-5 h-5 text-white" strokeWidth={2.2} />
                  </div>
                  <span className="text-[12px] font-mono font-bold text-[#A8892A] bg-[#C7A24A]/10 border border-[#C7A24A]/25 px-2.5 py-0.5 rounded-lg tracking-wider">
                    Step {s.step}
                  </span>
                </div>

                {/* Exact Title */}
                <h3 className="text-[18px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-2 leading-snug">
                  {s.title}
                </h3>

                {/* Exact Description */}
                <p className="text-[13px] text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed flex-1">
                  {s.desc}
                </p>

                {/* Subtle Bottom Feature Highlight */}
                <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#0f4a9b]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0f4a9b] shrink-0" />
                  <span>{s.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRIND VS USTAAD ── */}
      <section className="py-14 lg:py-18 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-100">
        <GcseGrid light />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3 shadow-sm">
              The Ustaad Difference
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
              The usual grind, rethought for GCSE
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[#0f4a9b]/10 shadow-[0_16px_48px_rgba(15,74,155,0.1)] bg-white">
              {/* Usual grind */}
              <div className="relative p-6 sm:p-8 lg:p-9 bg-white border-b lg:border-b-0 lg:border-r border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 mb-0.5">Before</p>
                    <h3 className="text-lg font-extrabold text-[#64748b] leading-none">The usual grind</h3>
                  </div>
                </div>
                <ul className="space-y-3.5">
                  {[
                    'A packed timetable with no clear priority.',
                    'A general tutor, strong here, shaky there.',
                    'Endless videos that never answer the real question.',
                    'The slip only surfaces when the mock lands.',
                  ].map((item, i) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl bg-[#f8fafc] border border-slate-100 px-3.5 py-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[10px] font-bold text-red-500 border border-red-100">
                        {i + 1}
                      </span>
                      <span className="text-[14px] text-[#64748b] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center VS badge — desktop */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#C7A24A]/40 shadow-[0_8px_24px_rgba(15,74,155,0.15)] flex items-center justify-center">
                  <span className="text-[11px] font-black tracking-wider text-[#A8892A]">VS</span>
                </div>
              </div>

              {/* Mobile VS divider */}
              <div className="lg:hidden flex justify-center py-0 bg-white relative z-10 -my-px">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#C7A24A]/40 shadow-md flex items-center justify-center -my-5">
                  <span className="text-[10px] font-black tracking-wider text-[#A8892A]">VS</span>
                </div>
              </div>

              {/* With Ustaad */}
              <div
                className="relative p-6 sm:p-8 lg:p-9 text-white"
                style={{ background: 'linear-gradient(145deg, #0a1f3d 0%, #0d2c58 45%, #0f4a9b 100%)' }}
              >
                <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#C7A24A]/20 border border-[#C7A24A]/35 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-[#f0c96a]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-200/60 mb-0.5">After</p>
                      <h3 className="text-lg font-extrabold text-[#f0c96a] leading-none">With Ustaad</h3>
                    </div>
                  </div>
                  <ul className="space-y-3.5">
                    {[
                      'We spend the hour on the subjects dragging the grade down.',
                      'A separate specialist for each subject your child takes.',
                      "A real tutor answering your child's exact question, live.",
                      'A specialist steadies the wobble weeks before the mock.',
                    ].map((item, i) => (
                      <li key={item} className="flex items-start gap-3 rounded-xl bg-white/8 border border-white/10 px-3.5 py-3 backdrop-blur-sm">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C7A24A]/20 text-[10px] font-bold text-[#f0c96a] border border-[#C7A24A]/30">
                          {i + 1}
                        </span>
                        <span className="text-[14px] text-blue-50/95 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARKS VANISH ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#f4f7fc] relative overflow-hidden">
        <GcseGrid light />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full mb-5"><Target className="h-4 w-4" /><span className="text-sm font-bold">Exam Insight</span></div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">Six Places GCSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">Students Lose Marks</span></h2>
              <p className="text-gray-600 text-[15px] leading-relaxed italic">The per-paper mark leaks we fix on repeat, week after week.</p>
            </div>
            <ChallengesAccordion challenges={CHALLENGES} />
          </div>
        </div>
      </section>

      {/* ── FREE TRIAL ── */}
      <section className="py-14 lg:py-18 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3">Free Trial</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">Thirty free minutes that tell you everything</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">Free, and a real diagnostic, not a sales call.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'An honest conversation', desc: 'About the subject, the school, and the target grade.' },
              { title: 'A real past paper, live', desc: 'Your child works a genuine exam question with the tutor.' },
              { title: 'A clear plan and target', desc: 'You leave with a starting point and the route ahead.' },
              { title: 'Method marks live in the steps', desc: 'Step-by-step working shown live, not just the final answer.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#0f4a9b]/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_32px_rgba(15,74,155,0.12)] hover:-translate-y-1 hover:border-[#0f4a9b]/20 transition-all duration-300 flex items-start gap-4">
                <div className="text-3xl font-black text-[#0f4a9b]/40 leading-none mt-1">{(i + 1).toString().padStart(2, '0')}</div>
                <div>
                  <h3 className="text-lg font-extrabold mb-2 text-[#0f4a9b]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#3a4f6e] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-14 lg:py-18 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3">Curriculum Hub</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">GCSE subjects we tutor in Dubai</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">Matched to your child&apos;s board and tier, Foundation or Higher.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              { Icon: Calculator, title: 'Maths', tag: 'Algebra · Trig · Vectors', href: '/maths', body: 'Foundation and Higher, calculator and non-calculator.' },
              { Icon: BookOpen, title: 'English', tag: 'Poetry · Analysis · Writing', href: '/english', body: 'Language and Literature, from unseen texts to essays.' },
              { Icon: Atom, title: 'Physics', tag: 'Forces · Electricity · Waves', href: '/physics', body: 'Combined or Triple Science route.' },
              { Icon: FlaskConical, title: 'Chemistry', tag: 'Bonding · Organic · Rates', href: '/chemistry', body: 'Combined or Triple Science route.' },
              { Icon: Dna, title: 'Biology', tag: 'Cells · Ecology · Inheritance', href: '/biology', body: 'Combined or Triple Science route.' },
              { Icon: Briefcase, title: 'Business Studies', tag: 'Case Studies · Finance', href: '/business', body: 'Case studies, finance and exam technique.' },
              { Icon: LineChart, title: 'Economics', tag: 'Micro · Macro · Data', href: '/economics', body: 'Micro, macro and data-response answers.' },
              { Icon: ClipboardList, title: 'Statistics', tag: 'Data · Probability', href: '/statistics', body: 'Data handling, probability and interpretation.' },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,74,155,0.05)] hover:shadow-[0_20px_42px_rgba(15,74,155,0.12)] hover:-translate-y-1.5 hover:border-[#0f4a9b]/40 transition-all duration-300 flex flex-col h-full group overflow-hidden cursor-pointer"
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
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white shadow-[0_4px_12px_rgba(15,74,155,0.2)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shrink-0"
                >
                  <item.Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>

                {/* Subject Title */}
                <h3 className="text-[17px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-1.5 leading-snug">
                  {item.title}
                </h3>

                {/* Topic Breakdown Pill in Ustaad Brand Blue */}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#0f4a9b]/8 text-[#0f4a9b] border border-[#0f4a9b]/15 mb-3 w-fit tracking-wide group-hover:bg-[#0f4a9b]/12 transition-colors">
                  {item.tag}
                </span>

                {/* Body Text */}
                <p className="text-[13px] text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed flex-1">
                  {item.body}
                </p>

                {/* Bottom Action Strip with sliding arrow */}
                <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
                  <span>Explore {item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0f4a9b] group-hover:translate-x-1.5 transition-transform duration-300" />
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
            className="mt-6 flex items-center gap-4 rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-[#f4f7fc] via-white to-[#f4f7fc] border border-[#0f4a9b]/15 hover:border-[#0f4a9b]/35 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_32px_rgba(15,74,155,0.14)] hover:-translate-y-1 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Target className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-[17px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">Exam Preparation</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#C7A24A]/15 text-[#A8892A] border border-[#C7A24A]/30 uppercase tracking-wider">High Impact</span>
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed">Past papers, timing drills and mark-scheme practice for mocks and final exams.</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-white border border-[#0f4a9b]/15 flex items-center justify-center group-hover:bg-[#0f4a9b] group-hover:text-white transition-all shrink-0">
              <ArrowRight className="w-4 h-4 text-[#0f4a9b] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </div>
          </motion.a>
        </div>
      </section>

      {/* ── WHY DUBAI FAMILIES ── */}
      <section className="py-14 lg:py-18 bg-[#f4f7fc] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">Why Dubai families choose Ustaad</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <ShieldCheck className="w-5 h-5 text-[#0f4a9b]" />, title: 'Specialist tutors, carefully vetted', desc: 'Interviewed for how they teach, and reference-checked.' },
              { icon: <BookOpen className="w-5 h-5 text-[#0f4a9b]" />, title: 'Tutors who know Dubai schools', desc: "They teach to your child's exact school scheme." },
              { icon: <Users className="w-5 h-5 text-[#0f4a9b]" />, title: 'The same tutor every week', desc: 'One consistent face, never a rotating pool.' },
              { icon: <PenTool className="w-5 h-5 text-[#0f4a9b]" />, title: 'Explained until it clicks', desc: 'Hard topics broken down until they finally make sense.' },
              { icon: <Target className="w-5 h-5 text-[#0f4a9b]" />, title: 'Parents kept in the loop', desc: 'A short, honest progress note every fortnight.' },
              { icon: <Clock className="w-5 h-5 text-[#0f4a9b]" />, title: 'Built around your week', desc: 'Evening, weekend and Ramadan slots, moved when you travel.' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,74,155,0.12)' }} className="flex flex-col px-5 py-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.04)]">
                <div className="w-11 h-11 rounded-2xl bg-white border border-[#0f4a9b]/15 shadow-[0_4px_20px_rgba(15,74,155,0.15)] flex items-center justify-center mb-3">{s.icon}</div>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-1">{s.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUBAI AREAS + TURNAROUNDS ── */}
      <section className="py-14 lg:py-18 bg-[#f4f7fc] relative overflow-hidden border-b border-slate-100">
        <GcseGrid light />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full mb-5">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-bold">Dubai &amp; UAE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
                We teach families{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">right across Dubai</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6 max-w-md">
                Every lesson is online, so your child learns from home, anywhere in Dubai or the UAE.
              </p>
              <div className="flex items-start gap-4 rounded-2xl bg-white border border-[#0f4a9b]/10 p-5 shadow-[0_4px_20px_rgba(15,74,155,0.06)]">
                <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-[#0f4a9b]/8 border border-[#0f4a9b]/12 flex items-center justify-center">
                  <Video className="w-5 h-5 text-[#0f4a9b]" />
                </div>
                <div>
                  <h3 className="text-[14px] font-extrabold text-[#0a1f3d] mb-1">Fully online, no travel</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">Live 1-to-1 sessions from home. Same specialist every week, recorded to rewatch.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-3xl bg-white border border-gray-200/90 p-6 sm:p-7 shadow-[0_10px_32px_rgba(15,74,155,0.06)] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xs font-black uppercase tracking-wider text-[#0a1f3d]">Areas we cover</p>
                </div>
                <span className="text-[11px] font-extrabold text-[#0f4a9b] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 uppercase tracking-wider">
                  Live Across Dubai
                </span>
              </div>

              {/* Scrolling Horizontal Marquee Tracks */}
              <div className="relative py-2 space-y-3 overflow-hidden select-none">
                {/* Gradient Fade Masks on Edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

                {/* Line 1: Smoothly scrolling left */}
                <div className="overflow-hidden py-1">
                  <motion.div
                    className="flex gap-3 w-max"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                  >
                    {[
                      'Downtown Dubai',
                      'Business Bay',
                      'JBR',
                      'Emirates Hills',
                      'Arabian Ranches',
                      'Downtown Dubai',
                      'Business Bay',
                      'JBR',
                      'Emirates Hills',
                      'Arabian Ranches',
                    ].map((area, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-bold text-[#0a1f3d] bg-[#f8fafc] border border-[#0f4a9b]/15 shadow-2xs hover:border-[#0f4a9b]/40 hover:bg-white transition-all duration-200 shrink-0"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#0f4a9b] shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Line 2: Smoothly scrolling right */}
                <div className="overflow-hidden py-1">
                  <motion.div
                    className="flex gap-3 w-max"
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                  >
                    {[
                      'The Meadows',
                      'The Springs',
                      'Motor City',
                      'Sports City',
                      'Arabian Ranches',
                      'The Meadows',
                      'The Springs',
                      'Motor City',
                      'Sports City',
                      'Arabian Ranches',
                    ].map((area, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-bold text-[#0a1f3d] bg-[#f8fafc] border border-[#0f4a9b]/15 shadow-2xs hover:border-[#0f4a9b]/40 hover:bg-white transition-all duration-200 shrink-0"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#0f4a9b] shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Available in all Dubai communities &amp; across the UAE</span>
                </span>
              </div>
            </motion.div>
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
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
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
                  <MessageCircle className="w-5 h-5" />
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
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-5 mx-auto"><MessageCircle className="w-8 h-8" /></div>
              <h3 className="text-[18px] font-extrabold text-[#0a1f3d] mb-2">Get a Free Solution in 15 Min</h3>
              <p className="text-[14px] text-gray-500 mb-6 leading-relaxed flex-1">Send any past-paper question and get a reply in fifteen minutes.</p>
              <a href={WA_URL} target="_blank" rel="noopener" className="mt-auto w-full min-h-[48px] bg-[#25D366] hover:bg-[#20b958] text-white py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2"><MessageCircle className="w-4 h-4" /> Message Us</a>
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
