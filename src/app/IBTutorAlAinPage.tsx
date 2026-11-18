import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type PointerEvent as RPointerEvent } from 'react';
import { motion } from 'motion/react';
import {
  Calculator, Atom, FlaskConical, Dna, BookOpen, TrendingUp,
  ChevronDown, MessageCircle, Search, ClipboardCheck, CalendarCheck, CheckCircle2, Info,
  School, Repeat, Globe2, ShieldCheck, Layers, Award, ClipboardList, CalendarDays, ArrowRight,
} from 'lucide-react';
import { Layout, StatsBar, SchoolsMarquee, RelatedContent } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

/*
 * IB Tutor Al Ain — landing page.
 * Primary keyword: "IB tutor Al Ain". Secondary: IB tutors Al Ain, IB tutoring Al Ain, online IB tutor,
 * MYP tutor Al Ain, IB Diploma tutor, IB Maths AA / AI tutor, IB Physics / Chemistry / Biology tutor,
 * IA, Extended Essay and TOK support, IGCSE to IB.
 * Content is deliberately different from /ib-tutor-dubai, /ib-tutor-abu-dhabi and the Al Ain
 * IGCSE / GCSE / A-Level pages: the IB in Al Ain, MYP / DP1 / DP2 stages, SL and HL subjects,
 * the core with academic-honesty rules, and the IGCSE-to-IB switch.
 */

const URL_PATH = '/ib-tutor-al-ain';
const BOOKING = '/contact#form';
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20in%20Al%20Ain%20and%20looking%20for%20an%20IB%20tutor.%20My%20child%27s%20programme%20and%20subjects%20are%3A%20';
const GOLD = 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)';
const GOLD_TEXT = { background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } as const;

const TITLE = 'IB Tutor Al Ain | Online MYP & DP Tutors, SL and HL | Ustaad';
const DESCRIPTION = 'Online IB tutor for Al Ain students: MYP criteria, DP Maths AA/AI, sciences, Economics and English at SL or HL, plus IA, EE and TOK guidance.';

/* ── Content ─────────────────────────────────────────────────────────── */

/* Al Ain schools whose students we support, including those moving from IGCSE to the IB Diploma */
const AL_AIN_SCHOOL_LOGOS = [
  { name: 'Brighton College Al Ain', file: 'brighton-college-al-ain.webp', src: '/images/schools/al-ain/brighton-college-al-ain.webp', alt: 'Brighton College Al Ain logo, a school whose Al Ain students Ustaad supports online' },
  { name: 'Al Ain British Academy', file: 'al-ain-british-academy.webp', src: '/images/schools/al-ain/al-ain-british-academy.webp', alt: 'Al Ain British Academy logo, an Aldar Academies school in Al Ain' },
  { name: 'Al Ain English Speaking School', file: 'aaess.webp', src: '/images/schools/al-ain/aaess.webp', alt: 'Al Ain English Speaking School (AAESS) logo, an Al Ain school for ages 3 to 18' },
  { name: 'Belvedere International School', file: 'belvedere-international.webp', src: '/images/schools/al-ain/belvedere-international.webp', alt: 'Belvedere International School Al Ain logo' },
  { name: 'Excel International School', file: 'excel-international.webp', src: '/images/schools/al-ain/excel-international.webp', alt: 'Excel International School Al Ain logo' },
  { name: 'Global English School', file: 'global-english-school.webp', src: '/images/schools/al-ain/global-english-school.webp', alt: 'Global English School Al Muwaiji, Al Ain logo' },
];

const AL_AIN_CONTEXT = [
  { Icon: School, title: 'Few IB schools in the city', text: 'Most Al Ain schools teach the British or American curriculum, so IB year groups are small. A student may be the only one taking HL Physics, with fewer classmates to work through problems with.' },
  { Icon: Repeat, title: 'Many students join the IB later', text: 'Students often arrive in the Diploma from IGCSE or an American high school, or move between Al Ain and Abu Dhabi schools. The first DP term is where gaps from the old curriculum show up.' },
  { Icon: Globe2, title: 'Specialists online, not by postcode', text: 'Lessons are live and online, so your child works with a tutor who knows their exact IB subject and level, whether they live in Al Jimi, Al Towayya, Zakher or Al Hili.' },
];

type Stage = { key: string; label: string; years: string; title: string; points: string[]; link: { href: string; text: string } };
const STAGES: Stage[] = [
  {
    key: 'myp', label: 'MYP', years: 'MYP 1 to 5 (ages 11 to 16)',
    title: 'Middle Years: learn what each criterion asks for',
    points: [
      'Every MYP subject is marked against criteria A to D, each out of 8. We go through the task sheet with your child so they know which criterion each part of the task is marked on before they start.',
      'Maths, sciences and language and literature tasks are planned against the strand descriptors, not just the topic.',
      'Support for the Personal Project in MYP 5, and for on-screen eAssessment where the school uses it.',
    ],
    link: { href: '/myp', text: 'MYP tutoring' },
  },
  {
    key: 'dp1', label: 'DP1', years: 'Diploma year 1 (Year 12)',
    title: 'First Diploma year: settle the HL subjects early',
    points: [
      'The step up from IGCSE or MYP is steepest in HL Maths and the sciences. We close the gaps in the first term, before new topics build on them.',
      'Choosing IA topics that can actually reach the top mark band, and planning the Extended Essay research question with the supervisor’s guidance.',
      'End-of-year DP1 exams matter: teachers use them, with the mocks, for predicted grades and university references.',
    ],
    link: { href: '/dp-hl', text: 'DP Higher Level tutoring' },
  },
  {
    key: 'dp2', label: 'DP2', years: 'Diploma year 2 (Year 13)',
    title: 'Final Diploma year: deadlines, mocks and May papers',
    points: [
      'A clear plan for the IA, EE and TOK deadlines that cluster in the first half of DP2, so subject revision does not stop.',
      'Mock exams marked against the IB mark bands, with the paper-by-paper mark gap to the next grade.',
      'Timed past papers from spring to the May exams, in the order your child sits them.',
    ],
    link: { href: '/blogs/ib-exams-grade-boundaries-uae', text: 'How IB grades and boundaries work' },
  },
];

type Subject = { Icon: typeof Calculator; name: string; levels: string; watch: string; href: string };
const SUBJECTS: Subject[] = [
  { Icon: Calculator, name: 'Maths: Analysis and Approaches', levels: 'SL · HL', watch: 'Proof, calculus and the non-calculator paper. The jump from IGCSE algebra to HL is the biggest in the Diploma.', href: '/maths' },
  { Icon: TrendingUp, name: 'Maths: Applications and Interpretation', levels: 'SL · HL', watch: 'Statistics and modelling with the GDC. Marks are lost on interpreting results, not on the button presses.', href: '/statistics' },
  { Icon: Atom, name: 'Physics', levels: 'SL · HL', watch: 'Data-based questions and the extended-response parts, plus the uncertainty work that runs through the IA.', href: '/physics' },
  { Icon: FlaskConical, name: 'Chemistry', levels: 'SL · HL', watch: 'Energetics, equilibrium and organic mechanisms, and writing an IA method that can be repeated by someone else.', href: '/chemistry' },
  { Icon: Dna, name: 'Biology', levels: 'SL · HL', watch: 'Precise wording in the long answers, data analysis, and keeping the HL content load manageable.', href: '/biology' },
  { Icon: BookOpen, name: 'English A and Economics', levels: 'SL · HL', watch: 'Paper 1 analysis and the individual oral in English A; diagrams, evaluation and the commentary portfolio in Economics.', href: '/english' },
];

const CORE = [
  { code: 'IA', name: 'Internal Assessment', what: 'Every DP subject has one, marked by the teacher and checked by an IB moderator.', facts: [['6 of 6', 'subjects'], ['Moderated', 'by the IB']], help: ['Picking a focused research question', 'Reading the criteria before writing', 'Feedback on structure, data handling and evaluation'] },
  { code: 'EE', name: 'Extended Essay', what: 'An independent research essay in one subject, graded A to E.', facts: [['4,000', 'word limit'], ['A to E', 'grade']], help: ['Narrowing the topic to a question that can be answered', 'Planning research and sources', 'Questions that help the student improve their own draft'] },
  { code: 'TOK', name: 'Theory of Knowledge', what: 'An essay on a prescribed title and an exhibition, also graded A to E.', facts: [['1,600', 'word essay limit'], ['3 objects', 'in the exhibition']], help: ['Unpacking the prescribed title', 'Building real-life examples', 'Practising a clear, balanced argument'] },
];

const SWITCH = [
  { Icon: Layers, label: 'Number of subjects', a: '8 to 10 IGCSEs', b: '6 subjects, 3 at HL and 3 at SL, plus the core' },
  { Icon: Award, label: 'Grades', a: 'A* to G or 9 to 1', b: '1 to 7 per subject, 45 points in total' },
  { Icon: ClipboardList, label: 'Coursework', a: 'In a few subjects only', b: 'An IA in every subject, plus the EE and TOK' },
  { Icon: CalendarDays, label: 'Final exams', a: 'End of Year 11', b: 'May of Year 13 (DP2)' },
];

const STEPS = [
  { Icon: Search, tag: 'WhatsApp or the form', title: 'Tell us the programme and subjects', text: 'MYP year, or DP subjects with HL and SL. A photo of the subject list or timetable is enough.' },
  { Icon: ClipboardCheck, tag: 'Free 15-minute orientation', title: 'First lesson, plus orientation', text: 'A free 15-minute orientation starts the first lesson: the tutor reviews a recent IA draft, test or MYP task and sets the first goal with your child.' },
  { Icon: CalendarCheck, tag: 'Evenings or weekends', title: 'A steady weekly slot', text: 'One fixed online slot per subject each week, on weekday evenings or weekends, adjusted around IA, EE and mock deadlines.' },
];

const FAQS = [
  { q: 'Do IB lessons happen at our home in Al Ain, or online?', a: 'Online only. Ustaad does not send tutors to homes. Lessons use video, a shared whiteboard and your child’s own IB materials, which is what lets a student in Al Ain work with a specialist in HL Chemistry or Maths AA, wherever that tutor is based.' },
  { q: 'Which IB subjects do you tutor?', a: 'Maths Analysis and Approaches, Maths Applications and Interpretation, Physics, Chemistry, Biology, English A and Economics, at SL and HL. We also support the Internal Assessments, the Extended Essay and Theory of Knowledge, and MYP subjects in the same areas.' },
  { q: 'Will the tutor write my child’s IA or Extended Essay?', a: 'No. The IB requires every IA, Extended Essay and TOK essay to be the student’s own work. Tutors explain the criteria, help choose a workable question, and give feedback that helps your child improve their own draft. The writing is always theirs.' },
  { q: 'Should my child take Maths AA or Maths AI, and at HL or SL?', a: 'It depends on the university course. Engineering, physics and many maths-heavy degrees ask for AA HL, while some economics, psychology and social science courses accept AI. Check the entry requirements for the courses your child is considering before DP1 begins.' },
  { q: 'My child is moving from an IGCSE school in Al Ain to the IB Diploma. Can you help?', a: 'Yes. The usual gaps are algebra for HL Maths, extended writing, and coursework habits for the IA. A few lessons in the summer before DP1, or in the first term, make the switch much easier.' },
  { q: 'Do you support the MYP as well as the Diploma?', a: 'Yes. MYP lessons follow the criteria A to D your child is marked on, and help with planning task responses, the Personal Project and eAssessment preparation where the school uses it.' },
  { q: 'How much do IB lessons cost?', a: 'Each lesson is one hour. The price depends on the programme, the subject and how many lessons a week your child takes, so we confirm it on WhatsApp once you tell us the details, before anything is paid.' },
  { q: 'Is a female IB tutor available?', a: 'Often, yes. Mention it in your first message and we look for a female specialist in that IB subject and level; if none is free for your preferred times, we tell you before booking.' },
];

/* ── Small building blocks ───────────────────────────────────────────── */

function SectionHead({ eyebrow, title, intro, light = false }: { eyebrow: string; title: ReactNode; intro?: string; light?: boolean }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
      <span className={`inline-block text-[10.5px] font-bold uppercase tracking-[0.16em] mb-1.5 ${light ? 'text-[#f0d58c]' : 'text-[#8a6a1f]'}`}>{eyebrow}</span>
      <h2 className={`text-xl sm:text-2xl lg:text-[27px] font-extrabold leading-tight mb-1.5 ${light ? 'text-white' : 'text-[#0a1f3d]'}`}>{title}</h2>
      {intro && <p className={`text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto ${light ? 'text-blue-100/80' : 'text-[#4a5a72]'}`}>{intro}</p>}
    </div>
  );
}

/* Hero canvas: a hexagon of the six DP subject groups around the core, and a 1–7 grade ladder */
function IbAlAinHeroBackground() {
  const groups = ['Lang & Lit', 'Lang Acq', 'Societies', 'Sciences', 'Maths', 'Arts'];
  const ladder = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
      <div className="absolute -top-24 left-1/2 w-[580px] h-[580px] rounded-full blur-[90px] opacity-40" style={{ background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, rgba(15,74,155,0) 70%)', transform: 'translateX(-50%)' }} />
      <div className="absolute top-10 -left-12 w-[380px] h-[380px] rounded-full blur-[80px] opacity-20" style={{ background: 'radial-gradient(circle, rgba(240,201,106,0.3) 0%, rgba(240,201,106,0) 70%)' }} />
      {/* Mobile and tablet: small, faint corner motifs */}
      <svg viewBox="0 0 200 200" className="absolute -right-20 -top-8 w-[180px] h-[180px] lg:hidden opacity-70">
        <g transform="translate(100 100)">
          <polygon points="0,-80 69,-40 69,40 0,80 -69,40 -69,-40" fill="none" stroke="rgba(240,201,106,0.35)" strokeDasharray="3 6" />
          <circle r="26" fill="rgba(240,201,106,0.06)" stroke="rgba(240,201,106,0.5)" />
        </g>
      </svg>
      <svg viewBox="0 0 120 200" className="absolute -left-4 bottom-2 w-[70px] h-[118px] lg:hidden opacity-70">
        {ladder.map((g, i) => (
          <rect key={g} x="20" y={180 - i * 24} width={30 + i * 9} height="14" rx="4" fill={g === 7 ? 'rgba(240,201,106,0.6)' : 'rgba(91,143,214,0.35)'} />
        ))}
      </svg>
      {/* Desktop */}
      <svg viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full hidden lg:block">
        <defs>
          <filter id="ibaa-glow"><feGaussianBlur stdDeviation="3" /></filter>
        </defs>
        {/* Left: 1–7 grade ladder */}
        {ladder.map((g, i) => (
          <g key={g}>
            <rect x="70" y={460 - i * 44} width={90 + i * 26} height="26" rx="7" fill={g === 7 ? 'rgba(240,201,106,0.55)' : 'rgba(91,143,214,0.22)'} stroke={g === 7 ? 'rgba(240,201,106,0.9)' : 'rgba(147,197,253,0.25)'} />
            <text x="58" y={478 - i * 44} textAnchor="end" fontSize="12" fill={g === 7 ? 'rgba(240,201,106,0.9)' : 'rgba(255,255,255,0.35)'} fontFamily="ui-monospace, monospace">{g}</text>
          </g>
        ))}
        <text x="70" y="160" fontSize="12" fontWeight="700" fill="rgba(240,201,106,0.8)" fontFamily="ui-monospace, monospace">7 · top grade</text>
        {/* Right: six subject groups around the core */}
        <g transform="translate(1212 285)">
          <polygon points="0,-120 104,-60 104,60 0,120 -104,60 -104,-60" fill="none" stroke="rgba(255,255,255,0.08)" />
          <polygon points="0,-82 71,-41 71,41 0,82 -71,41 -71,-41" fill="none" stroke="rgba(240,201,106,0.25)" strokeDasharray="3 7" />
          <circle r="44" fill="rgba(240,201,106,0.06)" stroke="rgba(240,201,106,0.6)" filter="url(#ibaa-glow)" />
          <circle r="44" fill="none" stroke="rgba(240,201,106,0.6)" />
          <text y="-4" textAnchor="middle" fontSize="13" fontWeight="800" fill="#f0c96a" fontFamily="ui-sans-serif, system-ui">IA · EE · TOK</text>
          <text y="14" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.5)" fontFamily="ui-monospace, monospace" letterSpacing="1.5">AL AIN</text>
          {groups.map((label, i) => {
            const a = ((-90 + i * 60) * Math.PI) / 180;
            const x = Math.cos(a) * 120; const y = Math.sin(a) * 120;
            return (
              <g key={label}>
                <circle cx={x} cy={y} r="4" fill="#5b8fd6" />
                <text x={x + (x >= 0 ? 10 : -10)} y={y + 4} textAnchor={x >= 0 ? 'start' : 'end'} fontSize="11" fill="rgba(147,197,253,0.7)" fontFamily="ui-monospace, monospace">{label}</text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

/* ── "The IB in Al Ain": light 3D rotating carousel ───────────────────────────
   All three cards are always in the HTML. The front card faces the reader; the
   other two stand angled behind it. It turns by itself every few seconds while on
   screen (paused on hover, focus or touch, and never under reduced motion), and
   students can click a side card, swipe, or use the dots. */

const CAROUSEL_CSS = `
.ibc-stage{perspective:1400px;perspective-origin:50% 40%}
.ibc-card{transition:transform .85s cubic-bezier(.22,1,.36,1),opacity .85s ease,filter .85s ease;transform-style:preserve-3d;will-change:transform}
.ibc-badge{transform:translateZ(46px)}
.ibc-num{transform:translateZ(22px)}
@keyframes ibcFloat{0%,100%{transform:translateZ(46px) translateY(0) rotate(-4deg)}50%{transform:translateZ(46px) translateY(-6px) rotate(3deg)}}
.ibc-front .ibc-badge{animation:ibcFloat 4s ease-in-out infinite}
@keyframes ibcShine{0%{transform:translateX(-120%) skewX(-18deg)}60%,100%{transform:translateX(220%) skewX(-18deg)}}
.ibc-front .ibc-shine{animation:ibcShine 3.6s ease-in-out infinite}
@media (prefers-reduced-motion: reduce){.ibc-card{transition:none}.ibc-front .ibc-badge,.ibc-front .ibc-shine{animation:none}}
`;

function AlAinCarousel() {
  const n = AL_AIN_CONTEXT.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const swiped = useRef(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % n), 4800);
    return () => clearInterval(t);
  }, [paused, inView, n]);

  const go = (i: number) => setActive(((i % n) + n) % n);
  const onDown = (e: RPointerEvent<HTMLDivElement>) => { startX.current = e.clientX; swiped.current = false; setPaused(true); };
  const onUp = (e: RPointerEvent<HTMLDivElement>) => {
    if (startX.current !== null) {
      const dx = e.clientX - startX.current;
      if (Math.abs(dx) > 40) { swiped.current = true; go(active + (dx < 0 ? 1 : -1)); }
    }
    startX.current = null;
    if (e.pointerType !== 'mouse') setTimeout(() => setPaused(false), 6000);
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Why IB students in Al Ain look for a tutor"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <style>{CAROUSEL_CSS}</style>
      <div ref={stageRef} className="ibc-stage relative select-none touch-pan-y" onPointerDown={onDown} onPointerUp={onUp} onPointerCancel={() => { startX.current = null; }}>
        {/* soft floor shadow under the front card */}
        <div className="absolute left-1/2 bottom-1 -translate-x-1/2 w-[62%] sm:w-[34%] h-6 rounded-[50%] blur-xl bg-[#0a1f3d]/15 pointer-events-none" aria-hidden="true" />
        <div className="grid justify-items-center py-4 sm:py-3 [--ibc-side:58%] [--ibc-side-op:0.28] sm:[--ibc-side:80%] sm:[--ibc-side-op:0.62]">
          {AL_AIN_CONTEXT.map(({ Icon, title, text }, i) => {
            let d = (i - active + n) % n; if (d === n - 1) d = -1;
            const front = d === 0;
            const style: CSSProperties = front
              ? { transform: 'translateX(0) translateZ(0) rotateY(0deg) scale(1)', opacity: 1, zIndex: 3, filter: 'none' }
              : { transform: `translateX(calc(var(--ibc-side) * ${d})) translateZ(-240px) rotateY(${d * -40}deg) scale(0.88)`, opacity: 'var(--ibc-side-op)' as unknown as number, zIndex: 1, filter: 'saturate(0.85)' };
            return (
              <div key={title} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${n}`}
                onClick={() => { if (swiped.current) { swiped.current = false; return; } if (!front) go(i); }}
                className={`ibc-card ${front ? 'ibc-front' : 'cursor-pointer'} [grid-area:1/1] w-[min(80vw,390px)] rounded-[26px] bg-white border border-[#C7A24A]/20 overflow-hidden`}
                style={{ ...style, boxShadow: front ? '0 30px 60px -28px rgba(10,31,61,0.35), 0 2px 0 rgba(199,162,74,0.25) inset' : '0 18px 40px -26px rgba(10,31,61,0.3)' }}>
                {/* top band: cream with a floating 3D badge and a large number */}
                <div className="relative h-[118px] sm:h-[96px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #fbf3df 0%, #fffaf0 55%, #f4f7fc 100%)', transformStyle: 'preserve-3d' }}>
                  <div className="absolute -right-6 -top-10 w-40 h-40 rounded-full bg-[#C7A24A]/10" aria-hidden="true" />
                  <div className="absolute -left-8 bottom-[-46px] w-32 h-32 rounded-full bg-[#0f4a9b]/[0.06]" aria-hidden="true" />
                  <span className="ibc-num absolute right-5 top-3 text-[64px] leading-none font-black text-transparent select-none" style={{ WebkitTextStroke: '1.5px rgba(168,137,42,0.45)' }} aria-hidden="true">0{i + 1}</span>
                  <span className="ibc-badge absolute left-6 top-6 sm:top-4 flex w-[68px] h-[68px] items-center justify-center rounded-[20px] text-white overflow-hidden"
                    style={{ background: 'linear-gradient(145deg, #1e5ba8 0%, #0f4a9b 45%, #0a2a5c 100%)', boxShadow: '0 16px 26px -12px rgba(10,31,61,0.55), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -4px 8px rgba(0,0,0,0.25)' }}>
                    <span className="ibc-shine absolute inset-y-0 left-0 w-1/3 bg-white/25" aria-hidden="true" />
                    <Icon className="w-8 h-8 relative" strokeWidth={1.8} />
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white" style={{ background: 'linear-gradient(135deg,#f0c96a,#A8892A)' }} aria-hidden="true" />
                  </span>
                </div>
                <div className="p-6 pt-5 sm:px-6 sm:pt-4 sm:pb-5">
                  <h3 className="text-[17px] sm:text-lg font-extrabold text-[#0a1f3d] mb-2 leading-snug">{title}</h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#4a5a72] leading-relaxed">{text}</p>
                  <div className="mt-5 sm:mt-4 h-[3px] w-14 rounded-full" style={{ background: GOLD }} aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-2 sm:mt-1 flex flex-col items-center gap-2 sm:gap-1.5">
        <div className="flex items-center gap-2">
          {AL_AIN_CONTEXT.map((c, i) => (
            <button key={c.title} type="button" onClick={() => go(i)} aria-label={`Show card ${i + 1}: ${c.title}`} aria-current={i === active}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-[#0f4a9b]' : 'w-2.5 bg-[#0f4a9b]/20 hover:bg-[#0f4a9b]/40'}`} />
          ))}
        </div>
        <span className="text-[11px] text-[#8a6a1f] font-semibold tracking-wide"><span className="sm:hidden">Swipe or tap a card to turn</span><span className="hidden sm:inline">Click a side card to turn</span></span>
      </div>
    </div>
  );
}

/* ── Subjects: an animated scene for each subject ─────────────────────────────
   Picking a subject plays a short SVG animation about that subject (a curve and
   its tangent for Maths AA, a line of best fit for AI, a pendulum and a wave for
   Physics, and so on). The list and the detail panel carry the real text (all six
   panels are in the HTML, inactive ones use `hidden`); the scenes are decorative.
   Auto-advances while on screen, pauses on hover/focus/touch, and stays still
   under reduced motion. */

const SUBJ_SHORT = ['Maths AA', 'Maths AI', 'Physics', 'Chemistry', 'Biology', 'English & Econ'];
const SUBJ_LINK = ['Maths tutoring', 'Statistics tutoring', 'Physics tutoring', 'Chemistry tutoring', 'Biology tutoring', 'English tutoring'];

const SCENE_CSS = `
.ibs-scene{animation:ibsIn .5s ease both}
@keyframes ibsIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.ibs-draw{stroke-dasharray:1;stroke-dashoffset:1;animation:ibsDraw 1.4s cubic-bezier(.45,0,.2,1) forwards;animation-delay:var(--d,0s)}
@keyframes ibsDraw{to{stroke-dashoffset:0}}
.ibs-pop{opacity:0;transform-box:fill-box;transform-origin:center;animation:ibsPop .5s cubic-bezier(.34,1.56,.64,1) forwards;animation-delay:var(--d,0s)}
@keyframes ibsPop{from{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}
.ibs-fade{opacity:0;animation:ibsFade .8s ease forwards;animation-delay:var(--d,0s)}
@keyframes ibsFade{to{opacity:1}}
.ibs-growx{transform-box:fill-box;transform-origin:left center;transform:scaleX(0);animation:ibsGrowX .7s ease-out forwards;animation-delay:var(--d,0s)}
@keyframes ibsGrowX{to{transform:scaleX(1)}}
.ibs-swing{transform-box:view-box;transform-origin:88px 34px;animation:ibsSwing 2.4s ease-in-out infinite alternate}
@keyframes ibsSwing{from{transform:rotate(-26deg)}to{transform:rotate(26deg)}}
.ibs-wave{animation:ibsWave 1.6s linear infinite}
@keyframes ibsWave{to{transform:translateX(-60px)}}
.ibs-bubble{transform-box:fill-box;transform-origin:center;opacity:0;animation:ibsBubble 2.6s ease-in infinite;animation-delay:var(--d,0s)}
@keyframes ibsBubble{0%{opacity:0;transform:translateY(0) scale(.6)}15%{opacity:.9}100%{opacity:0;transform:translateY(-70px) scale(1.1)}}
.ibs-slosh{animation:ibsSlosh 2.2s ease-in-out infinite alternate}
@keyframes ibsSlosh{from{transform:translateX(-14px)}to{transform:translateX(0)}}
.ibs-spin{transform-box:fill-box;transform-origin:center;animation:ibsSpin 14s linear infinite}
@keyframes ibsSpin{to{transform:rotate(360deg)}}
.ibs-rung{transform-box:fill-box;transform-origin:center;animation:ibsRung 3.2s ease-in-out infinite;animation-delay:var(--d,0s)}
@keyframes ibsRung{0%,100%{transform:scaleX(1)}50%{transform:scaleX(-1)}}
.ibs-pulse{transform-box:fill-box;transform-origin:center;animation:ibsPulse 3s ease-in-out infinite}
@keyframes ibsPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
.ibs-float{animation:ibsFloat 3.4s ease-in-out infinite alternate;animation-delay:var(--d,0s)}
@keyframes ibsFloat{from{transform:translateY(0)}to{transform:translateY(-8px)}}
.ibs-shift{animation:ibsShift 1s cubic-bezier(.22,1,.36,1) forwards;animation-delay:var(--d,0s);transform:translateX(-25px);opacity:0}
@keyframes ibsShift{0%{transform:translateX(0);opacity:0}25%{opacity:1}100%{transform:translateX(0);opacity:1}}
@media (prefers-reduced-motion: reduce){
  .ibs-scene,.ibs-swing,.ibs-wave,.ibs-bubble,.ibs-slosh,.ibs-spin,.ibs-rung,.ibs-pulse,.ibs-float{animation:none}
  .ibs-draw{animation:none;stroke-dashoffset:0}.ibs-pop,.ibs-fade,.ibs-shift{animation:none;opacity:1;transform:none}.ibs-growx{animation:none;transform:none}
  .ibs-bubble{opacity:.6}
}
`;

const NAVY = '#0f4a9b';
const NAVY_D = '#0a2a5c';
const GOLD_C = '#C7A24A';
const INK = '#0a1f3d';
const d = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;

function Axes({ x0 = 40, y0 = 186, x1 = 300, y1 = 22 }: { x0?: number; y0?: number; x1?: number; y1?: number }) {
  return (
    <g stroke={INK} strokeOpacity="0.55" strokeWidth="1.6" strokeLinecap="round" fill="none">
      <path d={`M${x0} ${y0}H${x1}M${x1 - 6} ${y0 - 4}l6 4-6 4`} />
      <path d={`M${x0} ${y0}V${y1}M${x0 - 4} ${y1 + 6}l4-6 4 6`} />
    </g>
  );
}

function Chip({ x, y, w, text, delay = 0, gold = false }: { x: number; y: number; w: number; text: string; delay?: number; gold?: boolean }) {
  return (
    <g className="ibs-pop" style={d(delay)}>
      <g className="ibs-float" style={d(delay)}>
        <rect x={x} y={y} width={w} height="24" rx="12" fill={gold ? '#fbf3df' : '#ffffff'} stroke={gold ? GOLD_C : NAVY} strokeOpacity="0.45" />
        <text x={x + w / 2} y={y + 16} textAnchor="middle" fontSize="12" fontWeight="800" fill={gold ? '#7A5E10' : NAVY} fontStyle="italic">{text}</text>
      </g>
    </g>
  );
}

const AA_CURVE = 'M48 160 C 92 30, 150 34, 178 104 S 252 196, 292 52';

function SceneMathsAA() {
  return (
    <>
      <Axes />
      <path d="M48 186 V160 C 92 30, 150 34, 178 104 V186 Z" fill={NAVY} fillOpacity="0.09" className="ibs-fade" style={d(1.3)} />
      <path d={AA_CURVE} pathLength={1} className="ibs-draw" fill="none" stroke={NAVY} strokeWidth="3.5" strokeLinecap="round" />
      <g className="ibs-fade" style={d(1.4)}>
        <g>
          <animateMotion path={AA_CURVE} dur="6s" begin="1.4s" repeatCount="indefinite" rotate="auto"
            keyPoints="0.04;0.96;0.04" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
          <line x1="-34" y1="0" x2="34" y2="0" stroke={GOLD_C} strokeWidth="3" strokeLinecap="round" />
          <circle r="6.5" fill="#fff" stroke={NAVY} strokeWidth="3" />
        </g>
      </g>
      <Chip x={196} y={20} w={78} text="f′(x) = 0" delay={1.6} gold />
      <Chip x={70} y={148} w={70} text="∫ f(x) dx" delay={1.9} />
    </>
  );
}

const AI_PTS: [number, number][] = [[62, 168], [84, 150], [98, 160], [120, 132], [140, 138], [160, 112], [184, 104], [204, 92], [222, 98], [246, 70], [268, 64]];
function SceneMathsAI() {
  return (
    <>
      <Axes />
      {[60, 100, 140].map((y) => <line key={y} x1="40" x2="296" y1={y} y2={y} stroke={NAVY} strokeOpacity="0.07" />)}
      {AI_PTS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5.5" fill={i % 3 === 0 ? GOLD_C : NAVY} className="ibs-pop" style={d(0.1 + i * 0.08)} />)}
      <path d="M52 176 L284 56" pathLength={1} className="ibs-draw" style={d(1.1)} stroke={NAVY_D} strokeWidth="3" strokeLinecap="round" strokeDasharray="1" fill="none" />
      <Chip x={60} y={22} w={76} text="r = 0.96" delay={2} gold />
      <Chip x={196} y={140} w={96} text="ŷ = 0.5x + 3" delay={2.3} />
    </>
  );
}

function wavePath() {
  let p = 'M160 118';
  for (let x = 160; x < 400; x += 60) p += ` q 15 -34 30 0 t 30 0`;
  return p;
}
function ScenePhysics() {
  return (
    <>
      <path d="M44 34 H132" stroke={INK} strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
      {[52, 64, 76, 88, 100, 112, 124].map((x) => <path key={x} d={`M${x} 34 l-8 -9`} stroke={INK} strokeOpacity="0.25" strokeWidth="1.5" />)}
      <path d="M44 132 A 104 104 0 0 0 132 132" fill="none" stroke={NAVY} strokeOpacity="0.25" strokeDasharray="4 5" className="ibs-fade" />
      <line x1="88" y1="34" x2="88" y2="146" stroke={NAVY} strokeOpacity="0.15" strokeDasharray="3 4" />
      <g className="ibs-swing">
        <line x1="88" y1="34" x2="88" y2="140" stroke={INK} strokeWidth="2" />
        <circle cx="88" cy="146" r="15" fill="url(#ibsBall)" />
        <circle cx="83" cy="141" r="4" fill="#fff" fillOpacity="0.45" />
      </g>
      <circle cx="88" cy="34" r="4" fill={INK} />
      <clipPath id="ibsWaveClip"><rect x="160" y="60" width="140" height="120" /></clipPath>
      <line x1="160" y1="118" x2="300" y2="118" stroke={NAVY} strokeOpacity="0.15" />
      <g clipPath="url(#ibsWaveClip)">
        <path className="ibs-wave" d={wavePath()} fill="none" stroke={NAVY} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      <path d="M188 74 H248" stroke={GOLD_C} strokeWidth="2" className="ibs-fade" style={d(0.6)} />
      <path d="M188 70 v8 M248 70 v8" stroke={GOLD_C} strokeWidth="2" className="ibs-fade" style={d(0.6)} />
      <text x="218" y="66" textAnchor="middle" fontSize="14" fontWeight="800" fontStyle="italic" fill="#7A5E10" className="ibs-fade" style={d(0.6)}>λ</text>
      <Chip x={196} y={170} w={70} text="v = fλ" delay={0.9} gold />
      <Chip x={40} y={176} w={96} text="T = 2π√(l/g)" delay={1.2} />
    </>
  );
}

function SceneChemistry() {
  const hex = [0, 1, 2, 3, 4, 5].map((k) => { const a = (Math.PI / 3) * k - Math.PI / 2; return [234 + 46 * Math.cos(a), 104 + 46 * Math.sin(a)]; });
  return (
    <>
      <clipPath id="ibsFlask"><path d="M80 40 h36 v44 l44 90 a10 10 0 0 1 -9 14 h-106 a10 10 0 0 1 -9 -14 l44 -90 z" /></clipPath>
      <g clipPath="url(#ibsFlask)">
        <rect x="20" y="40" width="200" height="160" fill="#f7fbff" />
        <g className="ibs-slosh">
          <path d="M20 128 q 14 -8 28 0 t 28 0 t 28 0 t 28 0 t 28 0 t 28 0 t 28 0 V200 H20 Z" fill={NAVY} fillOpacity="0.85" />
          <path d="M20 128 q 14 -8 28 0 t 28 0 t 28 0 t 28 0 t 28 0 t 28 0 t 28 0" fill="none" stroke="#5f8fd0" strokeWidth="3" />
        </g>
        {[[84, 180, 0], [100, 186, 0.7], [118, 178, 1.3], [94, 170, 1.9], [126, 188, 0.4]].map(([x, y, t], i) => (
          <circle key={i} cx={x} cy={y} r={3 + (i % 3)} fill="#fff" fillOpacity="0.85" className="ibs-bubble" style={d(t)} />
        ))}
      </g>
      <path d="M80 40 h36 v44 l44 90 a10 10 0 0 1 -9 14 h-106 a10 10 0 0 1 -9 -14 l44 -90 z" fill="none" stroke={INK} strokeOpacity="0.7" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M74 40 h48" stroke={INK} strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />
      <g className="ibs-spin">
        <polygon points={hex.map((p) => p.join(',')).join(' ')} fill="none" stroke={NAVY} strokeWidth="3" strokeLinejoin="round" />
        <circle cx="234" cy="104" r="26" fill="none" stroke={GOLD_C} strokeWidth="2.5" strokeDasharray="5 5" />
        {hex.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="7" fill={i % 2 ? '#ffffff' : NAVY} stroke={NAVY} strokeWidth="2.5" />)}
      </g>
      <Chip x={204} y={164} w={60} text="C₆H₆" delay={0.5} gold />
      <Chip x={172} y={18} w={124} text="2H₂ + O₂ → 2H₂O" delay={0.9} />
    </>
  );
}

function SceneBiology() {
  return (
    <>
      {Array.from({ length: 9 }, (_, i) => {
        const y = 28 + i * 20;
        return (
          <g key={i} className="ibs-rung" style={d(-i * 0.32)}>
            <line x1="56" y1={y} x2="136" y2={y} stroke={i % 2 ? GOLD_C : NAVY} strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
            <circle cx="56" cy={y} r="6.5" fill={NAVY} />
            <circle cx="136" cy={y} r="6.5" fill={GOLD_C} />
          </g>
        );
      })}
      <g className="ibs-pulse">
        <ellipse cx="232" cy="104" rx="62" ry="54" fill="#eef4fc" stroke={NAVY} strokeOpacity="0.6" strokeWidth="2.5" />
        <circle cx="240" cy="98" r="20" fill={NAVY} fillOpacity="0.85" />
        <circle cx="246" cy="92" r="6" fill="#fff" fillOpacity="0.5" />
      </g>
      <g className="ibs-float" style={d(0)}>
        <ellipse cx="202" cy="128" rx="13" ry="7" fill={GOLD_C} fillOpacity="0.8" transform="rotate(-20 202 128)" />
      </g>
      <g className="ibs-float" style={d(1.2)}>
        <ellipse cx="268" cy="134" rx="11" ry="6" fill={GOLD_C} fillOpacity="0.8" transform="rotate(25 268 134)" />
      </g>
      <g className="ibs-float" style={d(0.6)}>
        <circle cx="206" cy="76" r="4" fill={NAVY} fillOpacity="0.5" />
        <circle cx="274" cy="80" r="3" fill={NAVY} fillOpacity="0.5" />
      </g>
      <Chip x={196} y={172} w={74} text="ATP" delay={0.6} gold />
    </>
  );
}

function SceneEnglishEcon() {
  return (
    <>
      <rect x="22" y="26" width="128" height="162" rx="12" fill="#fff" stroke={INK} strokeOpacity="0.2" />
      <rect x="36" y="42" width="64" height="8" rx="4" fill={NAVY} className="ibs-growx" style={d(0.1)} />
      {[66, 82, 98, 114, 130, 146, 162].map((y, i) => (
        <rect key={y} x="36" y={y} width={i % 3 === 2 ? 62 : 100} height="5" rx="2.5" fill={INK} fillOpacity="0.22" className="ibs-growx" style={d(0.35 + i * 0.22)} />
      ))}
      <rect x="36" y="82" width="58" height="5" rx="2.5" fill={GOLD_C} fillOpacity="0.8" className="ibs-growx" style={d(0.6)} />
      <Axes x0={176} y0={186} x1={304} y1={30} />
      <path d="M182 184 L296 66" pathLength={1} className="ibs-draw" style={d(0.4)} stroke={NAVY} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M185 75 L285 185" pathLength={1} className="ibs-draw" style={d(0.8)} stroke={GOLD_C} strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="236.3" cy="131.5" r="5.5" fill="#fff" stroke={INK} strokeWidth="2.5" className="ibs-pop" style={d(1.6)} />
      <g className="ibs-shift" style={d(2.1)}>
        <path d="M210 75 L310 185" stroke={GOLD_C} strokeWidth="2.5" strokeDasharray="6 5" strokeLinecap="round" fill="none" />
      </g>
      <circle cx="249.1" cy="118.1" r="5.5" fill={NAVY} className="ibs-pop" style={d(2.9)} />
      <text x="298" y="62" fontSize="12" fontWeight="800" fill={NAVY} className="ibs-fade" style={d(1.2)}>S</text>
      <text x="270" y="198" fontSize="12" fontWeight="800" fill="#7A5E10" className="ibs-fade" style={d(1.4)}>D</text>
      <text x="296" y="170" fontSize="12" fontWeight="800" fill="#7A5E10" className="ibs-fade" style={d(2.6)}>D₁</text>
    </>
  );
}

const SCENES = [SceneMathsAA, SceneMathsAI, ScenePhysics, SceneChemistry, SceneBiology, SceneEnglishEcon];

function SubjectScenes() {
  const n = SUBJECTS.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (paused || !inView || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, inView, n]);

  const pick = (i: number) => { setActive(i); setPaused(true); };
  const Scene = SCENES[active];
  const { Icon } = SUBJECTS[active];

  return (
    <div ref={ref} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      className="grid lg:grid-cols-[220px_1fr_320px] gap-3 sm:gap-5 lg:gap-7 items-center">
      <style>{SCENE_CSS}</style>

      {/* Subject list */}
      <div className="order-2 lg:order-1">
        <div role="tablist" aria-label="IB subjects" className="grid grid-cols-3 lg:flex lg:flex-col gap-1.5 sm:gap-2">
          {SUBJECTS.map(({ Icon: TabIcon }, i) => {
            const on = i === active;
            return (
              <button key={SUBJ_SHORT[i]} role="tab" id={`ibq-tab-${i}`} aria-selected={on} aria-controls={`ibq-panel-${i}`} onClick={() => pick(i)}
                className={`flex items-center justify-center sm:justify-start gap-2.5 rounded-full lg:rounded-xl px-2 sm:pl-1.5 sm:pr-4 lg:pr-3 py-2 sm:py-1.5 lg:py-2 text-center sm:text-left text-[11.5px] sm:text-[13px] font-bold whitespace-nowrap border transition-all ${on ? 'bg-[#0f4a9b] text-white border-[#0f4a9b] shadow-md lg:translate-x-1' : 'bg-white text-[#0a1f3d] border-[#0f4a9b]/12 hover:border-[#0f4a9b]/40'}`}>
                <span className={`hidden sm:flex w-7 h-7 items-center justify-center rounded-full lg:rounded-lg ${on ? 'bg-white/15 text-[#f0c96a]' : 'bg-[#f6efdc] text-[#0a3a79]'}`}><TabIcon className="w-4 h-4" /></span>
                {SUBJ_SHORT[i]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated scene */}
      <div className="order-1 lg:order-2" aria-hidden="true">
        <div className="relative rounded-[24px] border border-[#0f4a9b]/12 bg-white overflow-hidden shadow-[0_24px_50px_-32px_rgba(10,31,61,0.4)]"
          style={{ backgroundImage: 'radial-gradient(rgba(15,74,155,0.10) 1px, transparent 1px)', backgroundSize: '18px 18px' }}>
          <div className="flex items-center justify-between px-4 pt-3 sm:pt-3.5">
            <span className="inline-flex items-center gap-2 text-[12.5px] font-extrabold text-[#0a1f3d]">
              <span className="flex w-7 h-7 items-center justify-center rounded-lg text-white" style={{ background: 'linear-gradient(145deg,#1e5ba8,#0a2a5c)' }}><Icon className="w-4 h-4" /></span>
              {SUBJ_SHORT[active]}
            </span>
            <span className="text-[10px] font-extrabold tracking-wider text-[#7A5E10] bg-[#C7A24A]/15 border border-[#C7A24A]/40 px-2.5 py-0.5 rounded-full">SL · HL</span>
          </div>
          <svg key={active} viewBox="0 0 320 210" className="ibs-scene block w-full h-[178px] sm:h-[250px]" fontFamily="inherit">
            <defs>
              <radialGradient id="ibsBall" cx="35%" cy="35%" r="70%"><stop offset="0%" stopColor="#3b78c8" /><stop offset="100%" stopColor={NAVY_D} /></radialGradient>
            </defs>
            <Scene />
          </svg>
          <div className="flex justify-center gap-1.5 pb-2.5 sm:pb-3">
            {SUBJECTS.map((_, i) => <span key={i} className={`h-1.5 rounded-full transition-all ${i === active ? 'w-5 bg-[#0f4a9b]' : 'w-1.5 bg-[#0f4a9b]/20'}`} />)}
          </div>
        </div>
      </div>

      {/* Detail panel: all six in the HTML */}
      <div className="order-3">
        {SUBJECTS.map(({ name, levels, watch, href }, i) => (
          <div key={name} role="tabpanel" id={`ibq-panel-${i}`} aria-labelledby={`ibq-tab-${i}`} hidden={i !== active}
            className="relative rounded-[22px] bg-white border border-[#C7A24A]/25 px-5 py-4 sm:p-6 shadow-[0_24px_50px_-30px_rgba(10,31,61,0.35)]">
            <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full" style={{ background: GOLD }} />
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#8a6a1f]">0{i + 1} / 0{n}</span>
              <span className="text-[10.5px] font-extrabold tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 px-2.5 py-0.5 rounded-full">{levels}</span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] mb-1.5 sm:mb-2 leading-snug">{name}</h3>
            <p className="text-[13px] sm:text-[13.5px] text-[#4a5a72] leading-relaxed mb-3 sm:mb-4">{watch}</p>
            <a href={href} className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0f4a9b] hover:text-[#0a3a79]">
              {SUBJ_LINK[i]} <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Diploma core: three cards side by side from md up; on phones a segmented
   IA / EE / TOK control shows one card at a time (all three are in the HTML). */
function CoreCards() {
  const [active, setActive] = useState(0);
  return (
    <>
      <div role="tablist" aria-label="Diploma core components" className="md:hidden grid grid-cols-3 gap-1 p-1 mb-3 rounded-xl bg-white border border-slate-200/80">
        {CORE.map(({ code }, i) => (
          <button key={code} type="button" role="tab" id={`core-tab-${i}`} aria-selected={i === active} aria-controls={`core-card-${i}`} onClick={() => setActive(i)}
            className={`rounded-lg py-2 text-[13px] font-extrabold transition-colors ${i === active ? 'bg-[#0a1f3d] text-[#f0c96a]' : 'text-[#0a1f3d] hover:bg-[#0f4a9b]/[0.06]'}`}>{code}</button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-3 sm:gap-4">
        {CORE.map(({ code, name, what, facts, help }, i) => (
          <article key={code} id={`core-card-${i}`} aria-labelledby={`core-h-${i}`}
            className={`${i === active ? 'flex' : 'hidden md:flex'} relative flex-col rounded-2xl bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(10,31,61,0.04),0_12px_32px_-24px_rgba(10,31,61,0.35)] transition-shadow hover:shadow-[0_1px_2px_rgba(10,31,61,0.04),0_20px_40px_-24px_rgba(10,31,61,0.45)] overflow-hidden`}>
            <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg,#0f4a9b,#C7A24A)' }} aria-hidden="true" />
            <div className="px-4 sm:px-5 pt-4 pb-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex w-10 h-10 shrink-0 items-center justify-center rounded-xl bg-[#0a1f3d] text-[#f0c96a] text-[12.5px] font-black tracking-wide" aria-hidden="true">{code}</span>
                <h3 id={`core-h-${i}`} className="text-[15.5px] font-extrabold text-[#0a1f3d] leading-tight">{name} <span className="font-bold text-[#8a6a1f]">({code})</span></h3>
              </div>
              <p className="text-[12.5px] text-[#4a5a72] leading-relaxed">{what}</p>
            </div>
            <dl className="grid grid-cols-2 mx-4 sm:mx-5 rounded-xl border border-slate-200/80 divide-x divide-slate-200/80 bg-[#fafbfd]">
              {facts.map(([v, l]) => (
                <div key={l} className="px-3 py-1.5">
                  <dt className="sr-only">{l}</dt>
                  <dd className="text-[15px] font-black text-[#0f4a9b] leading-tight">{v}</dd>
                  <dd className="text-[10px] font-semibold uppercase tracking-wider text-[#6b7a90]">{l}</dd>
                </div>
              ))}
            </dl>
            <div className="px-4 sm:px-5 pt-2.5 pb-3.5">
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#8a6a1f] mb-1.5">How lessons help</p>
              <ol className="space-y-1.5">
                {help.map((h, k) => (
                  <li key={h} className="flex items-start gap-2.5 text-[12.5px] text-[#2c3e5c] leading-snug">
                    <span className="flex w-[18px] h-[18px] shrink-0 items-center justify-center rounded-md bg-[#0f4a9b]/[0.08] text-[#0f4a9b] text-[10px] font-extrabold mt-px">{k + 1}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

/* MYP / DP1 / DP2: a progress stepper with a two-column detail panel.
   All three panels are server-rendered; inactive ones use `hidden`. */
const STAGE_META = [
  { name: 'Middle Years', when: 'Ages 11 to 16' },
  { name: 'Diploma year 1', when: 'Year 12' },
  { name: 'Diploma year 2', when: 'Year 13' },
];

function StageSwitcher() {
  const [active, setActive] = useState(1);
  const pct = (active / (STAGES.length - 1)) * 100;
  return (
    <div className="max-w-5xl mx-auto">
      {/* Stepper */}
      <div className="relative max-w-3xl mx-auto mb-4 sm:mb-5 px-2">
        <div className="absolute left-[16.66%] right-[16.66%] top-[18px] sm:top-[22px] h-[3px] rounded-full bg-[#0f4a9b]/12" aria-hidden="true" />
        <div className="absolute left-[16.66%] top-[18px] sm:top-[22px] h-[3px] rounded-full transition-all duration-500 ease-out" style={{ width: `calc((100% - 33.32%) * ${pct / 100})`, background: 'linear-gradient(90deg,#0f4a9b,#C7A24A)' }} aria-hidden="true" />
        <div role="tablist" aria-label="IB stage" className="relative grid grid-cols-3">
          {STAGES.map((s, i) => {
            const on = i === active; const done = i < active;
            return (
              <button key={s.key} role="tab" id={`ib-stage-tab-${s.key}`} aria-selected={on} aria-controls={`ib-stage-${s.key}`} onClick={() => setActive(i)}
                className="group flex flex-col items-center gap-1 sm:gap-1.5 focus:outline-none">
                <span className={`flex w-9 h-9 sm:w-11 sm:h-11 items-center justify-center rounded-full text-[12px] sm:text-[13px] font-extrabold border-2 transition-all duration-300 ${on ? 'bg-[#0f4a9b] border-[#0f4a9b] text-white shadow-[0_6px_16px_-4px_rgba(15,74,155,0.5)] scale-105' : done ? 'bg-white border-[#0f4a9b] text-[#0f4a9b]' : 'bg-white border-[#0f4a9b]/20 text-[#0a1f3d]/50 group-hover:border-[#0f4a9b]/50'} group-focus-visible:ring-4 group-focus-visible:ring-[#0f4a9b]/20`}>
                  {done ? <CheckCircle2 className="w-5 h-5" /> : s.label}
                </span>
                <span className={`text-[13px] sm:text-sm font-extrabold transition-colors ${on ? 'text-[#0a1f3d]' : 'text-[#0a1f3d]/60 group-hover:text-[#0a1f3d]'}`}>{s.label} <span className="hidden sm:inline font-semibold text-[#4a5a72]">· {STAGE_META[i].name}</span></span>
                <span className="text-[10.5px] sm:text-[11px] font-semibold text-[#8a6a1f]">{STAGE_META[i].when}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Panels */}
      {STAGES.map((s, i) => (
        <div key={s.key} id={`ib-stage-${s.key}`} role="tabpanel" aria-labelledby={`ib-stage-tab-${s.key}`} hidden={i !== active}
          className="rounded-2xl bg-white border border-slate-200 shadow-[0_12px_40px_-24px_rgba(10,31,61,0.25)] overflow-hidden">
          <div className="grid md:grid-cols-[0.85fr_1.15fr]">
            <div className="px-4 py-3.5 sm:p-5 md:border-r border-b md:border-b-0 border-slate-100 bg-[#fbfcfe]">
              <span className="inline-flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#8a6a1f]">
                <span className="w-5 h-[2px]" style={{ background: GOLD }} />{s.years}
              </span>
              <h3 className="mt-1.5 sm:mt-2.5 text-[15.5px] sm:text-xl font-extrabold text-[#0a1f3d] leading-snug">{s.title}</h3>
              <a href={s.link.href} className="mt-1.5 sm:mt-4 inline-flex items-center gap-2 sm:h-10 sm:px-4 sm:rounded-lg sm:border border-[#0f4a9b]/25 text-[12.5px] sm:text-[13px] font-bold text-[#0f4a9b] sm:hover:bg-[#0f4a9b] sm:hover:text-white hover:border-[#0f4a9b] transition-colors">
                {s.link.text} <span aria-hidden="true">→</span>
              </a>
            </div>
            <ol className="px-4 py-3 sm:px-6 sm:py-5 divide-y divide-slate-100">
              {s.points.map((p, k) => (
                <li key={p} className="flex gap-3 sm:gap-4 py-2 sm:py-2.5 first:pt-0 last:pb-0">
                  <span className="shrink-0 text-[12px] font-extrabold tabular-nums text-[#0f4a9b] bg-[#0f4a9b]/[0.07] rounded-md w-7 h-6 sm:w-8 sm:h-7 flex items-center justify-center">0{k + 1}</span>
                  <span className="text-[12.5px] sm:text-[14px] text-[#2c3e5c] leading-snug sm:leading-relaxed">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function IBTutorAlAinPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const rawCitySchema = cityLocalBusinessSchema({
    city: 'Al Ain',
    url: URL_PATH,
    name: 'Ustaad: IB Tutor Al Ain',
    description: DESCRIPTION,
    address: { '@type': 'PostalAddress', addressLocality: 'Al Ain', addressRegion: 'Abu Dhabi', addressCountry: 'AE' },
  });
  const { priceRange: _p, geo: _g, ...citySchema } = rawCitySchema as Record<string, unknown>;

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'IB Tutoring for Al Ain Students: MYP and Diploma Programme',
    description: 'Online 1-to-1 IB tutoring for MYP and the Diploma Programme at SL and HL, including Internal Assessment, Extended Essay and Theory of Knowledge guidance.',
    provider: { '@type': 'EducationalOrganization', '@id': 'https://ustaad.ae/#organization', name: 'Ustaad', url: 'https://ustaad.ae' },
    url: `https://ustaad.ae${URL_PATH}`,
    educationalLevel: 'IB MYP and Diploma Programme',
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT1H' },
    offers: { '@type': 'Offer', category: 'Paid', priceCurrency: 'AED' },
  };

  return (
    <Layout>
      <SEOHead
        title={TITLE}
        description={DESCRIPTION}
        canonical={URL_PATH}
        ogImage="/UpdatedImages/ib-tutor-al-ain-online-myp-diploma.webp"
        placename="Al Ain, Abu Dhabi, UAE"
        schema={[
          { ...citySchema, paymentAccepted: 'Credit Card, Bank Transfer' },
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'IB Curriculum', url: '/ib-curriculum' }, { name: 'IB Tutor Al Ain', url: URL_PATH }]),
          serviceSchema('IB Tutor Al Ain', DESCRIPTION, URL_PATH),
          courseSchema,
          faqSchema(FAQS),
        ]}
      />

      {/* ── 01 HERO ── */}
      <section className="relative -mt-10 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center pt-14 pb-12 sm:pt-16 sm:pb-14">
        <IbAlAinHeroBackground />
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-blue-100/90 bg-white/[0.08] border border-white/15 mb-3 shadow-sm">
            AL AIN | MYP &amp; DIPLOMA | SL &amp; HL
          </div>
          <h1 className="font-extrabold tracking-tight text-white leading-[1.14] mb-3 text-[clamp(1.75rem,4.2vw,3rem)] max-w-3xl">
            IB Tutor in Al Ain{' '}
            <span style={GOLD_TEXT}>for the MYP and the Diploma</span>
          </h1>
          <p className="text-blue-100/85 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mb-5 px-4 font-medium">
            One-to-one IB support for Al Ain students, taught live over video by a specialist in your child’s subject and level, from MYP criteria to the May Diploma papers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 mb-4">
            <a href={BOOKING} className="inline-flex items-center justify-center gap-2 w-full max-w-[290px] sm:w-auto sm:max-w-none sm:min-w-[220px] px-7 h-11 rounded-full font-bold text-xs sm:text-sm text-white transition-all hover:-translate-y-0.5 shadow-lg"
              style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 16px rgba(15,74,155,0.5)' }}>
              Book Your First Session
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full max-w-[290px] sm:w-auto sm:max-w-none sm:min-w-[220px] px-6 h-11 rounded-full font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-md shadow-[#25D366]/20">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-blue-200/75">
            {['1-to-1 online', 'Free 15-min orientation', 'IA, EE & TOK guidance'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f0c96a]" /> {t}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <StatsBar />

      <SchoolsMarquee logoList={AL_AIN_SCHOOL_LOGOS} title="Supporting Students From Schools Across Al Ain" />

      {/* ── 02 THE IB IN AL AIN (light 3D carousel) ── */}
      <section className="py-8 sm:py-6 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="The IB in Al Ain"
            title={<>Why IB students in Al Ain <span className="text-[#0f4a9b]">look for a tutor</span></>}
            intro="The IB is taught in only a handful of Al Ain schools, such as Emirates National School, which offers the programme from primary through to the Diploma. That shapes the support IB students here need."
          />
          <AlAinCarousel />
        </div>
      </section>

      {/* ── 03 STAGE SWITCHER ── */}
      <section className="py-6 sm:py-7 bg-[#f4f7fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Your child’s stage"
            title={<>MYP, DP1 or DP2: <span className="text-[#0f4a9b]">what we focus on</span></>}
            intro="The IB asks for different things at each stage. Choose your child’s stage to see where lessons put the time."
          />
          <StageSwitcher />
        </div>
      </section>

      {/* ── 04 SUBJECTS AT SL AND HL (animated subject scenes) ── */}
      <section className="py-6 sm:py-10 overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Diploma subjects"
            title={<>IB subjects we tutor, <span className="text-[#0f4a9b]">at SL and HL</span></>}
            intro="Pick a subject to see where students most often lose marks, and what lessons work on first."
          />
          <SubjectScenes />
          <p className="mt-3 sm:mt-4 text-center text-[12px] text-[#4a5a72]">
            Comparing levels? See <a href="/dp-hl" className="font-bold text-[#0f4a9b] underline underline-offset-2">DP Higher Level</a> and <a href="/dp-sl" className="font-bold text-[#0f4a9b] underline underline-offset-2">DP Standard Level</a> tutoring.
          </p>
        </div>
      </section>

      {/* ── 05 THE CORE ── */}
      <section className="py-6 sm:py-5 bg-[#f6f8fc] border-y border-[#0f4a9b]/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="The Diploma core" title={<>IA, Extended Essay and TOK, <span className="text-[#0f4a9b]">done the right way</span></>} intro="Coursework and the core can decide a Diploma. We guide the thinking and the planning; the work your child submits is always their own." />
          <CoreCards />
          <div className="mt-3 grid md:grid-cols-[0.8fr_1.2fr] gap-2 sm:gap-3">
            <div className="flex items-center gap-3 rounded-xl bg-white border border-slate-200/80 px-4 py-2.5">
              <span className="text-[26px] font-black leading-none text-[#0f4a9b]">+3</span>
              <p className="text-[12px] sm:text-[12.5px] text-[#2c3e5c] leading-snug"><strong className="text-[#0a1f3d]">Core points.</strong> The EE and TOK grades combine for up to 3 of the 45 Diploma points.</p>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-[#fffaf0] border border-[#C7A24A]/35 px-4 py-2.5">
              <ShieldCheck className="w-5 h-5 text-[#A8892A] shrink-0 mt-0.5" />
              <p className="text-[12px] sm:text-[12.5px] text-[#4a3a12] leading-snug"><strong className="text-[#0a1f3d]">Academic honesty.</strong> The IB treats work written by someone else as academic misconduct, which can cost a student the Diploma. Our tutors never write IA, EE or TOK work for a student.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 IGCSE TO IB ── */}
      <section className="py-6 sm:py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Switching curriculum"
            title={<>From IGCSE to the <span className="text-[#0f4a9b]">IB Diploma</span></>}
            intro="Many Al Ain students start the Diploma after IGCSE at a British-curriculum school. Here is what changes."
          />
          {/* column badges: aligned over the value columns */}
          <div className="grid grid-cols-[1fr_28px_1.2fr] sm:grid-cols-[190px_1fr_36px_1.25fr] gap-x-2 sm:gap-x-3 items-end px-2.5 sm:px-3 mb-1.5 sm:mb-2">
            <span className="hidden sm:block" />
            <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#6b7a90]"><span className="w-2 h-2 rounded-full bg-slate-300" />IGCSE<span className="hidden sm:inline"> · Years 10 to 11</span></span>
            <span />
            <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#0f4a9b]"><span className="w-2 h-2 rounded-full" style={{ background: GOLD }} />IB Diploma<span className="hidden sm:inline"> · Years 12 to 13</span></span>
          </div>
          <ul className="space-y-2" aria-label="What changes from IGCSE to the IB Diploma">
            {SWITCH.map(({ Icon, label, a, b }) => (
              <li key={label} className="rounded-2xl bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(10,31,61,0.04),0_10px_28px_-24px_rgba(10,31,61,0.35)] p-2.5 sm:grid sm:grid-cols-[190px_1fr_36px_1.25fr] sm:gap-x-3 sm:items-center">
                <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-0">
                  <span className="flex w-7 h-7 sm:w-9 sm:h-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#0a1f3d] text-[#f0c96a]"><Icon className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]" /></span>
                  <span className="text-[13px] sm:text-[13.5px] font-extrabold text-[#0a1f3d] leading-tight">{label}</span>
                </div>
                <div className="grid grid-cols-[1fr_28px_1.2fr] sm:contents items-stretch gap-x-2">
                  <p className="rounded-xl bg-slate-50 border border-slate-200/70 px-2.5 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[13px] text-[#4a5a72] leading-snug">
                    <span className="sr-only">IGCSE: </span>{a}
                  </p>
                  <span className="self-center flex w-6 h-6 sm:w-8 sm:h-8 mx-auto items-center justify-center rounded-full text-white shadow-sm" style={{ background: GOLD }} aria-hidden="true"><ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></span>
                  <p className="rounded-xl bg-[#0f4a9b]/[0.06] border border-[#0f4a9b]/15 px-2.5 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[13px] font-bold text-[#0a1f3d] leading-snug">
                    <span className="sr-only">IB Diploma: </span>{b}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-2xl bg-[#f4f7fc] border border-[#0f4a9b]/10 px-4 py-2.5">
            <p className="flex items-center gap-2 text-[12.5px] sm:text-[13px] font-semibold text-[#2c3e5c] sm:mr-auto"><Info className="w-4 h-4 text-[#0f4a9b] shrink-0" />Not at the IB stage yet?</p>
            <div className="flex flex-wrap gap-2">
              <a href="/igcse-tutor-al-ain" className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#0f4a9b]/20 px-3.5 py-1.5 text-[12.5px] font-bold text-[#0f4a9b] hover:border-[#0f4a9b]/50 hover:bg-[#0f4a9b]/[0.04] transition-colors">IGCSE Tutor Al Ain <ArrowRight className="w-3.5 h-3.5" /></a>
              <a href="/a-level-tutor-al-ain" className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#0f4a9b]/20 px-3.5 py-1.5 text-[12.5px] font-bold text-[#0f4a9b] hover:border-[#0f4a9b]/50 hover:bg-[#0f4a9b]/[0.04] transition-colors">A-Level route in Al Ain <ArrowRight className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 HOW WE MATCH ── */}
      <section className="py-6 sm:py-8 bg-[#f4f7fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Getting started" title={<>How we match your <span className="text-[#0f4a9b]">IB tutor</span></>} intro="From a WhatsApp message to a fixed weekly IB lesson in three steps." />
          <ol className="relative grid md:grid-cols-3 gap-2.5 md:gap-5">
            {/* connecting line between the step markers (desktop) */}
            <div className="hidden md:block absolute top-[22px] left-[16.66%] right-[16.66%] h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg,#0f4a9b,#C7A24A)' }} aria-hidden="true" />
            {STEPS.map(({ Icon, tag, title, text }, i) => (
              <li key={title} className="relative flex md:flex-col gap-3 md:gap-0 md:items-center">
                {/* marker: number in a ring; on phones a vertical rail joins the markers */}
                <div className="relative flex flex-col items-center md:mb-4">
                  <span className="relative z-10 flex w-9 h-9 md:w-11 md:h-11 items-center justify-center rounded-full bg-[#0a1f3d] text-[#f0c96a] text-[14px] md:text-[15px] font-black ring-4 ring-[#f4f7fc] shadow-[0_8px_18px_-8px_rgba(10,31,61,0.6)]">{i + 1}</span>
                  {i < STEPS.length - 1 && <span className="md:hidden flex-1 w-[2px] mt-1 -mb-3 rounded-full bg-gradient-to-b from-[#0f4a9b]/40 to-[#C7A24A]/40" aria-hidden="true" />}
                </div>
                <div className="flex-1 w-full rounded-2xl bg-white border border-slate-200/80 px-3.5 py-3 md:p-5 shadow-[0_1px_2px_rgba(10,31,61,0.04),0_12px_30px_-24px_rgba(10,31,61,0.4)] md:text-center">
                  <div className="flex md:justify-center items-center gap-2 mb-1.5 md:mb-2">
                    <span className="flex w-7 h-7 md:w-8 md:h-8 items-center justify-center rounded-lg bg-[#0f4a9b]/[0.07] text-[#0f4a9b]"><Icon className="w-4 h-4" /></span>
                    <span className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#8a6a1f]">Step {i + 1}</span>
                    <span className="md:hidden ml-auto inline-flex items-center gap-1 rounded-full bg-[#fbf3df] border border-[#C7A24A]/40 px-2 py-0.5 text-[10.5px] font-bold text-[#7A5E10]">{tag}</span>
                  </div>
                  <h3 className="text-[14.5px] md:text-[15px] font-extrabold text-[#0a1f3d] mb-1 md:mb-1.5 leading-snug">{title}</h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#4a5a72] leading-relaxed md:mb-3">{text}</p>
                  <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#fbf3df] border border-[#C7A24A]/40 px-2.5 py-0.5 text-[11px] font-bold text-[#7A5E10]"><CheckCircle2 className="w-3 h-3" />{tag}</span>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-4 md:mt-5 flex justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white px-5 py-2.5 text-[13px] font-bold shadow-md shadow-[#25D366]/30 transition-colors">
              <MessageCircle className="w-4 h-4" /> Start step 1 on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── 08 FAQ ── */}
      <section id="faqs" className="py-8 sm:py-10 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col items-start text-left lg:sticky lg:top-20">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/12 text-[#0f4a9b] text-xs font-bold mb-2.5">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0f4a9b]/10 text-[10px]">?</span>
                COMMON QUESTIONS
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-[27px] font-extrabold text-[#0a1f3d] leading-tight mb-2">
                What Al Ain Families <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Ask About IB Tutoring</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed">
                Online lessons, subjects, the IA and Extended Essay, choosing Maths AA or AI, switching from IGCSE, and fees.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-2">
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                const tone = { background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b' };
                return (
                  <div key={faq.q} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => setOpenFaq(isOpen ? null : i)} aria-label={`Toggle FAQ: ${faq.q}`}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{ width: 40, height: 40, minWidth: 40, minHeight: 40, ...tone, transition: 'background 300ms ease, color 300ms ease', cursor: 'pointer', border: 'none', boxShadow: 'inset 0 0 0 2px #fff' }}>
                        ?
                      </button>
                      <button type="button" onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`ib-al-ain-faq-${i}`}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border bg-white shadow-xs transition-colors hover:border-[#0f4a9b]/50"
                        style={{ minHeight: '44px', padding: '7px 16px', cursor: 'pointer', borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)' }}>
                        <h3 className="flex-1 font-semibold text-[#0a1f3d] text-[13.5px] sm:text-[14px] leading-snug">{faq.q}</h3>
                        <span className="flex-shrink-0 flex items-center justify-center"
                          style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, borderRadius: '50%', ...tone, transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          <ChevronDown className="h-4 w-4" />
                        </span>
                      </button>
                    </div>
                    {/* Always in the HTML (indexable); shown when open */}
                    <div id={`ib-al-ain-faq-${i}`} hidden={!isOpen} className="ml-[52px]">
                      <div className="flex items-start gap-3 rounded-2xl border p-4 lg:px-4 lg:py-3 bg-[#f8fafc]" style={{ borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 4px 16px rgba(15,74,155,0.06)' }}>
                        <p className="flex-1 text-gray-600 text-[13px] sm:text-[13.5px] leading-relaxed">{faq.a}</p>
                        <span className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, background: '#0f4a9b', color: '#fff' }}>
                          <MessageCircle className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 09 CTA ── */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-6 sm:p-8 text-center text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold mb-2">Start IB tutoring in Al Ain</h2>
            <p className="text-blue-100/85 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-5">
              Send the MYP year or DP subjects with HL and SL. We reply with a matched IB specialist, and the first lesson includes a free 15-minute orientation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2.5">
              <a href={BOOKING} className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[190px] h-10 px-6 rounded-full font-bold text-xs sm:text-sm text-white shadow-md hover:brightness-110 transition" style={{ background: GOLD }}>Book First Session</a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[190px] h-10 px-6 rounded-full font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md transition">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent
        title="More support for IB and Al Ain families"
        subtitle="Other Ustaad pages for IB students and for families in Al Ain."
        subjects={[
          { label: 'IB Curriculum Tutoring', href: '/ib-curriculum', note: 'Our main IB page, covering the MYP and the Diploma.' },
          { label: 'IB Tutor Abu Dhabi', href: '/ib-tutor-abu-dhabi', note: 'For families who move between Al Ain and Abu Dhabi schools.' },
          { label: 'IB Exams and Grade Boundaries', href: '/blogs/ib-exams-grade-boundaries-uae', note: 'How the 1 to 7 grades and 45 points are worked out.' },
        ]}
        curricula={[
          { label: 'IGCSE Tutor Al Ain', href: '/igcse-tutor-al-ain', note: 'For Al Ain students still in Years 9 to 11 before the Diploma.' },
          { label: 'GCSE Tutor Al Ain', href: '/gcse-tutor-al-ain', note: 'UK GCSE with AQA, Edexcel and OCR in Al Ain.' },
          { label: 'A-Level Tutor Al Ain', href: '/a-level-tutor-al-ain', note: 'The A-Level route for Years 12 and 13 in Al Ain.' },
        ]}
      />
    </Layout>
  );
}
