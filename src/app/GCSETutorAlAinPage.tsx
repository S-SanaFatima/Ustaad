import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Calculator, BookOpen, FlaskConical, Atom, Briefcase, PenLine,
  ChevronDown, MessageCircle, Star, Search, ClipboardCheck, CalendarCheck, CheckCircle2, Info,
} from 'lucide-react';
import { Layout, StatsBar, SchoolsMarquee, RelatedContent } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

/*
 * GCSE Tutor Al Ain — landing page.
 * Primary keyword: "GCSE tutor Al Ain". Secondary: GCSE tuition Al Ain, online GCSE tutor,
 * GCSE maths / English / science tutor, AQA / Edexcel / OCR GCSE tutor, GCSE resits.
 * Content is deliberately different from the Dubai / Abu Dhabi GCSE pages and the Al Ain
 * IGCSE and A-Level pages: GCSE vs IGCSE check, 9–1 grades and tiers, board syllabus codes,
 * the Year 10–11 timeline and the November resit series.
 */

const URL_PATH = '/gcse-tutor-al-ain';
const BOOKING = '/contact#form';
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20in%20Al%20Ain%20and%20looking%20for%20a%20GCSE%20tutor.%20My%20child%27s%20exam%20board%20is%3A%20';
const GOLD = 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)';

const TITLE = 'GCSE Tutor Al Ain | Online AQA, Edexcel & OCR | Ustaad';
const DESCRIPTION = 'Online 1-to-1 GCSE tutors for Al Ain students in Years 10 and 11. AQA, Edexcel and OCR Maths, English and Science. Free 15-min orientation.';

/* ── Content ─────────────────────────────────────────────────────────── */

const AL_AIN_SCHOOL_LOGOS = [
  { name: 'Brighton College Al Ain', file: 'brighton-college-al-ain.webp', src: '/images/schools/al-ain/brighton-college-al-ain.webp', alt: 'Brighton College Al Ain logo, a British-curriculum school in Al Ain' },
  { name: 'Al Ain British Academy', file: 'al-ain-british-academy.webp', src: '/images/schools/al-ain/al-ain-british-academy.webp', alt: 'Al Ain British Academy logo, an Aldar Academies British-curriculum school' },
  { name: 'Al Ain English Speaking School', file: 'aaess.webp', src: '/images/schools/al-ain/aaess.webp', alt: 'Al Ain English Speaking School (AAESS) logo, a UK National Curriculum school in Al Ain' },
  { name: 'Belvedere International School', file: 'belvedere-international.webp', src: '/images/schools/al-ain/belvedere-international.webp', alt: 'Belvedere International School Al Ain logo, a National Curriculum for England school' },
  { name: 'Excel International School', file: 'excel-international.webp', src: '/images/schools/al-ain/excel-international.webp', alt: 'Excel International School Al Ain logo' },
  { name: 'Global English School', file: 'global-english-school.webp', src: '/images/schools/al-ain/global-english-school.webp', alt: 'Global English School Al Muwaiji, Al Ain logo' },
];

const COMPARE = [
  { label: 'Who sets it', gcse: 'UK boards: AQA, Pearson Edexcel, OCR', igcse: 'Cambridge (CAIE) or Pearson Edexcel International' },
  { label: 'Grades', gcse: '9 to 1 in every subject', igcse: 'A* to G or 9 to 1 (Cambridge), 9 to 1 (Edexcel International)' },
  { label: 'Typical code on the exam entry', gcse: '8300 (AQA Maths), 1MA1 (Edexcel Maths), J560 (OCR Maths)', igcse: '0580 (Cambridge Maths), 4MA1 (Edexcel International Maths)' },
  { label: 'Content', gcse: 'Written for schools in England, with set UK texts in English Literature', igcse: 'Written for international schools, with wider text choices' },
];

const GRADES = [
  { g: '9', note: 'Top grade, above the old A*', band: 'top' },
  { g: '8', note: 'Between the old A and A*', band: 'top' },
  { g: '7', note: 'Equivalent to the old A', band: 'top' },
  { g: '6', note: 'Often asked for in A-Level subjects', band: 'mid' },
  { g: '5', note: 'Strong pass', band: 'mid' },
  { g: '4', note: 'Standard pass, the old C', band: 'mid' },
  { g: '3', note: 'Just below a standard pass', band: 'low' },
  { g: '2', note: 'Lower grades', band: 'low' },
  { g: '1', note: 'Lowest pass grade', band: 'low' },
];

type Subject = { Icon: typeof Calculator; name: string; codes: string; focus: string; href: string; link: string };
const SUBJECTS: Subject[] = [
  { Icon: Calculator, name: 'GCSE Maths', codes: 'AQA 8300 · Edexcel 1MA1 · OCR J560', focus: 'Three papers, one without a calculator. We drill the non-calculator paper first, because it shows the real gaps in number and algebra.', href: '/maths', link: 'Maths tutoring' },
  { Icon: PenLine, name: 'GCSE English Language', codes: 'AQA 8700 · Edexcel 1EN0', focus: 'Reading unseen extracts and writing to a clear plan. Students practise timed answers for the language and structure questions.', href: '/english', link: 'English tutoring' },
  { Icon: BookOpen, name: 'GCSE English Literature', codes: 'AQA 8702 · Edexcel 1ET0', focus: 'The set play, novel and poetry anthology your school chose, with a short list of quotations your child can actually remember.', href: '/english', link: 'English tutoring' },
  { Icon: FlaskConical, name: 'Combined Science', codes: 'AQA Trilogy 8464 · Edexcel 1SC0 · OCR J250', focus: 'Biology, chemistry and physics in one double award. Sessions cover the required practicals and the longer six-mark answers.', href: '/sciences', link: 'Science tutoring' },
  { Icon: Atom, name: 'Separate Sciences', codes: 'AQA 8461 · 8462 · 8463 · Edexcel 1BI0 · 1CH0 · 1PH0', focus: 'One specialist per science for students taking triple science, with extra depth for Higher tier and A-Level plans.', href: '/sciences', link: 'Science tutoring' },
  { Icon: Briefcase, name: 'Business & Economics', codes: 'AQA Business 8132 · Edexcel 1BS0 · AQA Economics 8136', focus: 'Applying theory to the case study in front of you, and the calculations that examiners expect in the shorter questions.', href: '/business', link: 'Business tutoring' },
];

const TIMELINE = [
  { when: 'Year 10, autumn', title: 'Start of the GCSE course', text: 'The first lessons find the Year 9 topics that are still shaky, before new GCSE content builds on them.' },
  { when: 'Year 10, summer', title: 'End-of-year exams', text: 'The first full papers. The results usually guide the school’s Foundation or Higher tier decision.' },
  { when: 'Year 11, Nov to Jan', title: 'Mock exams', text: 'Mock papers are marked against the board mark scheme so your child sees where each mark was won or lost.' },
  { when: 'Year 11, May to June', title: 'GCSE exam season', text: 'Sessions switch to past papers and timing. New teaching stops a few weeks before the first paper.' },
  { when: 'August', title: 'Results day', text: 'If a grade is short of a sixth-form requirement, we help plan the next step with you and the school.' },
  { when: 'November', title: 'Resit series', text: 'GCSE Maths and English Language can be resat in November for students who meet the board’s age rule.' },
];

const STEPS = [
  { Icon: Search, title: 'Tell us the board and tier', text: 'Send the subject, exam board and tier, or a photo of the exam entry. We match a tutor who teaches that exact specification.' },
  { Icon: ClipboardCheck, title: 'First lesson, plus orientation', text: 'The first lesson includes a free 15-minute orientation. The tutor looks at recent tests and agrees one clear target with your child.' },
  { Icon: CalendarCheck, title: 'A steady weekly slot', text: 'Lessons run online at a set time each week, after school, in the evening or at the weekend, with homework your child can manage.' },
];

const FAQS = [
  { q: 'Can a GCSE tutor come to our home in Al Ain?', a: 'No. Ustaad teaches online only, so our tutors do not visit homes in Al Ain or anywhere else. Your child joins from home on a laptop, with the tutor and a shared whiteboard on screen. Teaching online lets us match a specialist in your child’s exact exam board, not just whoever lives nearby.' },
  { q: 'Are GCSE lessons one-to-one or in a group?', a: 'One-to-one only. Every lesson is your child and one tutor, so the whole hour goes on their own papers, their mistakes and their board’s mark scheme. We do not run group classes.' },
  { q: 'How much do GCSE lessons cost, and how long is each lesson?', a: 'Each lesson is one hour. The price depends on the subject and how many lessons a week your child takes, so we confirm it on WhatsApp once you tell us the subject, exam board and tier, before anything is paid.' },
  { q: 'Is there a free trial or demo class?', a: 'A free trial is available on request. Most families start with the first 1-hour lesson instead, which opens with a free 15-minute orientation where the tutor finds the gaps before any teaching begins.' },
  { q: 'Can we ask for a female GCSE tutor?', a: 'Yes. Tell us when you message, and we will match a female GCSE specialist for that subject and exam board where one is available.' },
  { q: 'My child is homeschooled or a private candidate. Can you help with GCSE?', a: 'Yes. We tutor homeschooled students and private candidates through the course, following the exact specification they will sit. Private candidates book their exams through a registered centre, such as the British Council, so share the entry and exam dates and we plan the lessons around them.' },
  { q: 'My child takes some subjects at GCSE and others at IGCSE. Can you cover both?', a: 'Yes. We match each subject to its own specification code, so AQA 8300 Maths and Cambridge 0620 Chemistry, for example, are taught by tutors who know those exact papers and mark schemes.' },
  { q: 'Can you help with a GCSE resit?', a: 'Yes. GCSE Maths and English Language can be resat in November as well as in the summer, for students who meet the board’s age rule. Other subjects are resat in the summer series. A resit plan starts from the marks lost on the last attempt.' },
];

/* ── Small building blocks ───────────────────────────────────────────── */

function SectionHead({ eyebrow, title, intro, light = false }: { eyebrow: string; title: ReactNode; intro?: string; light?: boolean }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5">
      <span className={`inline-block text-[10.5px] font-bold uppercase tracking-[0.16em] mb-1.5 ${light ? 'text-[#f0d58c]' : 'text-[#8a6a1f]'}`}>{eyebrow}</span>
      <h2 className={`text-xl sm:text-2xl lg:text-[27px] font-extrabold leading-tight mb-1.5 ${light ? 'text-white' : 'text-[#0a1f3d]'}`}>{title}</h2>
      {intro && <p className={`text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto ${light ? 'text-blue-100/80' : 'text-[#4a5a72]'}`}>{intro}</p>}
    </div>
  );
}

function GcseAlAinHeroBackground() {
  // Faint decorative canvas, in the same style as the other landing-page heroes:
  // a rising 1→9 grade line on the left, an orbit of exam-board codes on the right.
  const pts = [[60, 470], [96, 458], [132, 444], [168, 425], [204, 400], [240, 370], [276, 332], [312, 286], [348, 232]];
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
      <div className="absolute -top-24 left-1/2 w-[580px] h-[580px] rounded-full blur-[90px] opacity-40" style={{ background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, rgba(15,74,155,0) 70%)', transform: 'translateX(-50%)' }} />
      <div className="absolute top-8 -right-12 w-[420px] h-[420px] rounded-full blur-[80px] opacity-20" style={{ background: 'radial-gradient(circle, rgba(240,201,106,0.3) 0%, rgba(240,201,106,0) 70%)' }} />
      {/* Mobile and tablet: the same motifs, smaller and fainter, pinned to the corners */}
      <svg viewBox="0 0 200 200" className="absolute -right-24 -top-10 w-[190px] h-[190px] lg:hidden opacity-80" aria-hidden="true">
        <g transform="translate(100 100)">
          <circle r="96" fill="none" stroke="rgba(255,255,255,0.09)" />
          <circle r="64" fill="none" stroke="rgba(240,201,106,0.28)" strokeDasharray="3 6" />
          <circle r="28" fill="rgba(240,201,106,0.06)" stroke="rgba(240,201,106,0.45)" />
          <circle cx="-83" cy="48" r="3" fill="#5b8fd6" opacity="0.7" />
          <circle cx="-48" cy="-83" r="3" fill="#5b8fd6" opacity="0.7" />
          <circle cx="0" cy="96" r="3" fill="#f0c96a" opacity="0.6" />
        </g>
      </svg>
      <svg viewBox="0 0 160 220" className="absolute -left-6 bottom-2 w-[96px] h-[132px] lg:hidden opacity-80" aria-hidden="true">
        <defs>
          <linearGradient id="gal-line-m" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#5b8fd6" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#5b8fd6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f0c96a" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <line x1="12" y1="212" x2="150" y2="212" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 5" />
        <polyline points="12,205 34,198 54,186 72,168 88,144 102,114 114,78 124,40" fill="none" stroke="url(#gal-line-m)" strokeWidth="2" />
        {[[34, 198], [54, 186], [72, 168], [88, 144], [102, 114], [114, 78], [124, 40]].map(([x, y], k) => (
          <circle key={k} cx={x} cy={y} r={k === 6 ? 4 : 2.5} fill={k >= 5 ? '#f0c96a' : '#5b8fd6'} opacity={0.6} />
        ))}
      </svg>
      <svg viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full hidden lg:block">
        <defs>
          <linearGradient id="gal-line" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#5b8fd6" stopOpacity="0.15" />
            <stop offset="60%" stopColor="#5b8fd6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f0c96a" stopOpacity="0.95" />
          </linearGradient>
          <filter id="gal-glow"><feGaussianBlur stdDeviation="3" /></filter>
        </defs>
        {/* Left: grade progression 1 → 9 */}
        <line x1="50" y1="490" x2="370" y2="490" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 6" />
        <line x1="50" y1="500" x2="50" y2="200" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 6" />
        <polyline points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke="url(#gal-line)" strokeWidth="3" filter="url(#gal-glow)" />
        <polyline points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke="url(#gal-line)" strokeWidth="1.5" />
        {pts.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={i === 8 ? 6 : 3.5} fill={i >= 6 ? '#f0c96a' : '#5b8fd6'} opacity={i >= 6 ? 0.95 : 0.7} />
            <text x={x} y="512" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.32)" fontFamily="ui-monospace, monospace">{i + 1}</text>
          </g>
        ))}
        <text x="336" y="214" textAnchor="end" fontSize="13" fontWeight="700" fill="rgba(240,201,106,0.85)" fontFamily="ui-monospace, monospace">Grade 9</text>
        <line x1="50" y1="425" x2="370" y2="425" stroke="rgba(255,255,255,0.10)" strokeDasharray="2 6" />
        <text x="60" y="417" fontSize="11" fill="rgba(255,255,255,0.35)" fontFamily="ui-monospace, monospace">grade 4 · standard pass</text>
        {/* Right: orbit of exam-board codes around Al Ain */}
        <g transform="translate(1260 260)">
          <circle r="150" fill="none" stroke="rgba(255,255,255,0.07)" />
          <circle r="104" fill="none" stroke="rgba(240,201,106,0.25)" strokeDasharray="3 7" />
          <circle r="46" fill="rgba(240,201,106,0.06)" stroke="rgba(240,201,106,0.6)" />
          <text y="-3" textAnchor="middle" fontSize="15" fontWeight="800" fill="#f0c96a" fontFamily="ui-sans-serif, system-ui">GCSE</text>
          <text y="15" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.5)" fontFamily="ui-monospace, monospace" letterSpacing="1.5">AL AIN</text>
          {[[-70, 'AQA 8300'], [160, 'Edexcel 1MA1'], [80, 'OCR J560']].map(([a, label]) => {
            const r = ((a as number) * Math.PI) / 180;
            const x = Math.cos(r) * 150; const y = Math.sin(r) * 150;
            return (
              <g key={label as string}>
                <circle cx={x} cy={y} r="3.5" fill="#5b8fd6" />
                <text x={x + 10} y={y + 4} textAnchor="start" fontSize="11" fill="rgba(147,197,253,0.7)" fontFamily="ui-monospace, monospace">{label}</text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}


/* ── Subjects spotlight: list on the left, animated detail panel on the right ──
   Every panel is server-rendered (inactive ones use `hidden`), so all subjects and
   specification codes stay in the HTML for search engines. Auto-advance runs only
   while the section is on screen, pauses on hover/focus, stops after the first
   interaction, and is off under prefers-reduced-motion. */
const SPOT_CSS = `
.gsp-bar{position:absolute;left:0;bottom:0;height:3px;width:0;background:linear-gradient(90deg,#C7A24A,#0f4a9b);border-radius:3px}
.gsp-run .gsp-tab[aria-selected="true"] .gsp-bar{animation:gspFill 4.5s linear forwards}
.gsp-hold .gsp-tab[aria-selected="true"] .gsp-bar{animation-play-state:paused}
@keyframes gspFill{to{width:100%}}
.gsp-panel:not([hidden]) .gsp-big svg *{stroke-dasharray:120;stroke-dashoffset:120;animation:gspDraw 1.1s ease forwards}
@keyframes gspDraw{to{stroke-dashoffset:0}}
.gsp-panel:not([hidden]) .gsp-up{opacity:0;transform:translateY(8px);animation:gspUp .45s ease forwards}
@keyframes gspUp{to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.gsp-bar,.gsp-big svg *,.gsp-up{animation:none!important;opacity:1!important;transform:none!important;stroke-dashoffset:0!important}}
`;

function SubjectSpotlight({ items }: { items: Subject[] }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(false);
  const [inView, setInView] = useState(false);
  const [hold, setHold] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => { setAuto(!window.matchMedia('(prefers-reduced-motion: reduce)').matches); }, []);
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!auto || !inView || hold) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % items.length), 4500);
    return () => window.clearTimeout(t);
  }, [auto, inView, hold, active, items.length]);
  // keep the active tab visible inside the horizontal row on phones
  useEffect(() => {
    const row = listRef.current, tab = tabRefs.current[active];
    if (row && tab && row.scrollWidth > row.clientWidth) row.scrollTo({ left: tab.offsetLeft - 16, behavior: 'smooth' });
  }, [active]);

  const choose = (i: number, focus = false) => { setAuto(false); setActive(i); if (focus) tabRefs.current[i]?.focus(); };
  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = items.length; let next: number | null = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % n;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i - 1 + n) % n;
    else if (e.key === 'Home') next = 0; else if (e.key === 'End') next = n - 1;
    if (next !== null) { e.preventDefault(); choose(next, true); }
  };

  return (
    <div ref={rootRef} className={`grid lg:grid-cols-[320px_1fr] gap-4 lg:gap-6 items-stretch ${auto && inView ? 'gsp-run' : ''} ${hold ? 'gsp-hold' : ''}`}
      onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)} onFocusCapture={() => setHold(true)} onBlurCapture={() => setHold(false)}>
      <style>{SPOT_CSS}</style>
      <div ref={listRef} role="tablist" aria-label="GCSE subjects" aria-orientation="vertical"
        className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 pb-1 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((s, i) => {
          const on = active === i;
          return (
            <button key={s.name} ref={(el) => { tabRefs.current[i] = el; }} type="button" role="tab" id={`gsp-tab-${i}`}
              aria-selected={on} aria-controls={`gsp-panel-${i}`} tabIndex={on ? 0 : -1}
              onClick={() => choose(i)} onKeyDown={(e) => onKey(e, i)}
              className={`gsp-tab relative shrink-0 flex items-center gap-3 rounded-2xl border text-left overflow-hidden transition-all duration-300 px-3 py-2.5 lg:px-3.5 lg:py-3 ${on ? 'bg-white border-[#e3eaf5] shadow-[0_12px_30px_-20px_rgba(10,58,121,0.5)] text-[#0a1f3d]' : 'bg-transparent border-transparent text-[#33465f] hover:bg-white/70'}`}>
              <span className={`w-8 h-8 lg:w-9 lg:h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${on ? 'bg-[#0a3a79] text-[#f0c96a]' : 'bg-[#f6efdc] text-[#0a3a79]'}`}>
                <s.Icon className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
              </span>
              <span className="text-[13px] lg:text-[15px] font-bold whitespace-nowrap">{s.name}</span>
              <span className="gsp-bar" aria-hidden="true" />
            </button>
          );
        })}
      </div>
      <p className="lg:hidden -mt-1 text-center text-[12px] font-semibold text-[#4a5a72]">Scroll to view more</p>

      <div className="relative rounded-3xl overflow-hidden text-white min-h-[290px]" style={{ background: 'linear-gradient(150deg, #0a1f3d 0%, #0a3a79 60%, #0f4a9b 100%)' }}>
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(199,162,74,0.35), transparent 70%)' }} aria-hidden="true" />
        {items.map((s, i) => (
          <div key={s.name} role="tabpanel" id={`gsp-panel-${i}`} aria-labelledby={`gsp-tab-${i}`} hidden={active !== i}
            className="gsp-panel relative p-6 sm:p-8 lg:p-9">
            <div className="gsp-big w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/10 text-[#f0c96a] flex items-center justify-center mb-4">
              <s.Icon className="w-7 h-7 lg:w-8 lg:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold mb-3">{s.name}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {s.codes.split(' · ').map((c, k) => (
                <span key={c} className="gsp-up inline-flex items-center rounded-lg border border-white/20 bg-white/[0.08] px-2.5 py-1 text-[11.5px] font-mono font-semibold" style={{ animationDelay: `${0.08 * k}s` }}>{c}</span>
              ))}
            </div>
            <p className="gsp-up text-[14.5px] sm:text-base leading-relaxed text-white/85 max-w-xl mb-5" style={{ animationDelay: '0.35s' }}>{s.focus}</p>
            <a href={s.href} className="gsp-up inline-flex text-sm font-bold text-[#f0c96a] hover:text-white transition-colors" style={{ animationDelay: '0.5s' }}>{s.link}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function GCSETutorAlAinPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const rawCitySchema = cityLocalBusinessSchema({
    city: 'Al Ain',
    url: URL_PATH,
    name: 'Ustaad: GCSE Tutor Al Ain',
    description: DESCRIPTION,
    address: { '@type': 'PostalAddress', addressLocality: 'Abu Dhabi', addressRegion: 'Abu Dhabi', addressCountry: 'AE' },
  });
  const { priceRange: _p, geo: _g, ...citySchema } = rawCitySchema as Record<string, unknown>;

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'GCSE Tutoring for Al Ain Students',
    description: 'Online 1-to-1 GCSE tutoring for Years 10 and 11, matched to AQA, Pearson Edexcel or OCR, at Foundation or Higher tier.',
    provider: { '@type': 'EducationalOrganization', '@id': 'https://ustaad.ae/#organization', name: 'Ustaad', url: 'https://ustaad.ae' },
    url: `https://ustaad.ae${URL_PATH}`,
    educationalLevel: 'GCSE (Years 10 and 11)',
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT1H' },
    offers: { '@type': 'Offer', category: 'Paid', priceCurrency: 'AED' },
  };

  return (
    <Layout>
      <SEOHead
        title={TITLE}
        description={DESCRIPTION}
        canonical={URL_PATH}
        robots="index, follow"
        ogImage="/UpdatedImages/gcse-tutor-al-ain-online-aqa-edexcel-ocr.webp"
        placename="Al Ain, Abu Dhabi, UAE"
        schema={[
          { ...citySchema, paymentAccepted: 'Credit Card, Bank Transfer' },
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'GCSE', url: '/gcse' }, { name: 'GCSE Tutor Al Ain', url: URL_PATH }]),
          serviceSchema('GCSE Tutor Al Ain', DESCRIPTION, URL_PATH),
          courseSchema,
          faqSchema(FAQS),
        ]}
      />

      {/* ── 01 HERO ── */}
      <section className="relative -mt-10 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center pt-14 pb-12 sm:pt-16 sm:pb-14">
        <GcseAlAinHeroBackground />
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-blue-100/90 bg-white/[0.08] border border-white/15 mb-3 shadow-sm">
            AL AIN | AQA, EDEXCEL &amp; OCR | YEARS 10 &amp; 11
          </div>
          <h1 className="font-extrabold tracking-tight text-white leading-[1.14] mb-3 text-[clamp(1.75rem,4.2vw,3rem)] max-w-3xl">
            GCSE Tutor in Al Ain,{' '}
            <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Matched to Your Exam Board
            </span>
          </h1>
          <p className="text-blue-100/85 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mb-5 px-4 font-medium">
            Live online GCSE tuition for Al Ain students, one to one, at Foundation or Higher tier. Maths, English and the sciences, from the first Year 10 topic to the last Year 11 paper.
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
            {['1-to-1 online', 'Free 15-min orientation', 'Foundation & Higher'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f0c96a]" /> {t}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <StatsBar />

      <SchoolsMarquee logoList={AL_AIN_SCHOOL_LOGOS} title="Supporting Students at British-Curriculum Schools in Al Ain" />

      {/* ── 02 GCSE OR IGCSE (1-Desktop Viewport Compact) ── */}
      <section className="py-7 sm:py-8 lg:py-9 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Check this first"
            title={<>GCSE or IGCSE? <span className="text-[#0f4a9b]">Check before you book</span></>}
            intro="Parents in Al Ain often hear both names. They are different qualifications with different papers, so we confirm which one your child sits before choosing a tutor."
          />
          <div className="rounded-xl border border-[#0f4a9b]/12 overflow-hidden shadow-xs">
            <div className="hidden md:grid grid-cols-[0.8fr_1.1fr_1.1fr] bg-[#0a1f3d] text-white text-xs font-bold">
              <div className="px-4 py-2.5" />
              <div className="px-4 py-2.5">UK GCSE <span className="text-[#f0d58c]">(this page)</span></div>
              <div className="px-4 py-2.5">IGCSE / International GCSE</div>
            </div>
            {COMPARE.map((r, i) => (
              <div key={r.label} className={`grid md:grid-cols-[0.8fr_1.1fr_1.1fr] text-xs sm:text-[13px] ${i % 2 ? 'bg-[#f8fafd]' : 'bg-white'} border-t border-[#0f4a9b]/8 first:border-t-0`}>
                <div className="px-4 py-2 sm:py-2.5 font-bold text-[#0a1f3d]">{r.label}</div>
                <div className="px-4 py-1.5 sm:py-2.5 text-[#2c3e5c]"><span className="md:hidden block text-[10px] font-bold uppercase tracking-wider text-[#8a6a1f] mb-0.5">UK GCSE</span>{r.gcse}</div>
                <div className="px-4 pb-2.5 sm:py-2.5 text-[#4a5a72]"><span className="md:hidden block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">IGCSE</span>{r.igcse}</div>
              </div>
            ))}
          </div>
          <div className="mt-3.5 flex items-center gap-2.5 rounded-xl bg-[#f4f7fc] border border-[#0f4a9b]/10 px-4 py-2 text-xs sm:text-[12.5px] text-[#2c3e5c] leading-relaxed">
            <Info className="w-4 h-4 text-[#0f4a9b] shrink-0" />
            <p>
              Sitting IGCSE instead? See our <a href="/igcse-tutor-al-ain" className="font-bold text-[#0f4a9b] underline underline-offset-2">IGCSE Tutor Al Ain</a> page. For differences, read{' '}
              <a href="/blogs/igcse-vs-gcse-curriculum-differences-uae" className="font-bold text-[#0f4a9b] underline underline-offset-2">IGCSE vs GCSE in the UAE</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 GRADES AND TIERS (1-Desktop Viewport Balanced) ── */}
      <section className="py-7 sm:py-8 lg:py-9 bg-[#f4f7fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Grades and tiers"
            title={<>What the <span className="text-[#0f4a9b]">9 to 1 grades</span> mean</>}
            intro="GCSEs are graded from 9, the highest, down to 1. In Maths and the sciences your child is also entered for a Foundation or Higher tier, which sets the grades they can reach."
          />
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
            {/* Left: Compact 9-to-1 Scale */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-[#0f4a9b]/10 p-3.5 sm:p-4 shadow-xs flex flex-col justify-between">
              <ol className="flex flex-col gap-1" aria-label="GCSE grades from 9 to 1">
                {GRADES.map((r) => (
                  <li key={r.g} className="grid grid-cols-[34px_1fr] items-center gap-2.5">
                    <span className={`h-7 w-8.5 rounded-md flex items-center justify-center font-extrabold text-xs shrink-0 ${r.band === 'top' ? 'text-white' : r.band === 'mid' ? 'bg-[#0f4a9b] text-white' : 'bg-[#e6ecf6] text-[#0a1f3d]'}`}
                      style={r.band === 'top' ? { background: GOLD } : undefined}>{r.g}</span>
                    <span className={`text-xs ${r.note ? 'text-[#0a1f3d] font-semibold' : 'text-gray-400'}`}>{r.note || '—'}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right: Tier Cards + Concise Tier Decision Strip */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="grid sm:grid-cols-2 gap-3 lg:flex-1">
                {/* Foundation Tier Card */}
                <div className="bg-white rounded-xl border border-[#0f4a9b]/10 p-3.5 sm:p-4 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0a1f3d]">Foundation tier</h3>
                      <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-[#e6ecf6] text-[#0a1f3d]">Grades 1 to 5</span>
                    </div>
                    <p className="text-xs text-[#4a5a72] leading-relaxed">Shorter steps and more accessible questions. The highest grade available is 5, a strong pass.</p>
                  </div>
                </div>

                {/* Higher Tier Card */}
                <div className="bg-white rounded-xl border border-[#C7A24A]/40 p-3.5 sm:p-4 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0a1f3d]">Higher tier</h3>
                      <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: GOLD }}>Grades 4 to 9</span>
                    </div>
                    <p className="text-xs text-[#4a5a72] leading-relaxed">Harder, multi-step questions. The only tier that can lead to grades 6 to 9.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Guidance Card */}
              <div className="rounded-xl p-3.5 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 shadow-xs" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 100%)' }}>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#f0c96a] mb-0.5">Not sure which tier fits?</h3>
                  <p className="text-[11.5px] sm:text-xs text-blue-100/85 leading-relaxed">The school decides entry. After the first lessons, your tutor shares an honest working grade so you can align with your child's teacher.</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-[11px] sm:text-xs text-[#4a5a72]">English Language and English Literature are not tiered: every student sits the same papers.</p>
        </div>
      </section>

      {/* ── 04 SUBJECTS BY BOARD (Spotlight: list + animated panel) ── */}
      <section className="py-7 sm:py-8 lg:py-9 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Subjects"
            title={<>GCSE subjects we tutor, <span className="text-[#0f4a9b]">by exam board</span></>}
            intro="Each subject has its own specification code. We match the tutor to that code, so lessons follow the same topics, papers and mark scheme as your child’s school."
          />
          <SubjectSpotlight items={SUBJECTS} />
        </div>
      </section>

      {/* ── 05 YEAR 10 TO RESULTS (1-Desktop Viewport Compact) ── */}
      <section className="py-7 sm:py-8 lg:py-9 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead light eyebrow="The GCSE years" title={<>From Year 10 to <span className="text-[#f0c96a]">results day</span></>} intro="The two GCSE years have clear checkpoints. Here is what we focus on at each one." />
          <ol className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-px-4 sm:scroll-px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 sm:pb-0 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
            {TIMELINE.map((t, i) => (
              <motion.li key={t.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="shrink-0 w-[84%] sm:w-auto snap-start rounded-xl border border-white/12 bg-white/[0.06] p-3.5 sm:p-4 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold text-[#0a1f3d]" style={{ background: 'linear-gradient(135deg,#f0c96a,#C7A24A)' }}>{i + 1}</span>
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#f0d58c]">{t.when}</span>
                  </div>
                  <h3 className="text-sm sm:text-[15px] font-extrabold mb-1">{t.title}</h3>
                  <p className="text-xs sm:text-[12.5px] text-blue-100/85 leading-relaxed">{t.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>


      {/* ── 07 HOW WE MATCH (1-Desktop Viewport Compact) ── */}
      <section className="py-7 sm:py-8 lg:py-9 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Getting started" title={<>How we match your <span className="text-[#0f4a9b]">GCSE tutor</span></>} intro="Three steps, from your first message to a regular weekly lesson." />
          <ol className="grid md:grid-cols-3 gap-3.5 sm:gap-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative rounded-xl bg-[#f4f7fc] border border-[#0f4a9b]/10 p-4 sm:p-4.5 flex flex-col justify-between">
                <span className="absolute top-3.5 right-4 text-[22px] font-black text-[#0f4a9b]/12 leading-none">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <span className="w-8 h-8 rounded-lg bg-white text-[#0f4a9b] border border-[#0f4a9b]/10 flex items-center justify-center mb-2.5 shadow-2xs"><s.Icon className="w-4 h-4" /></span>
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0a1f3d] mb-1">{s.title}</h3>
                  <p className="text-xs sm:text-[12.5px] text-[#4a5a72] leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <ul className="mt-4 grid sm:grid-cols-3 gap-2 text-xs sm:text-[12.5px] text-[#2c3e5c]">
            {['Tutor matched to the exact board and tier', 'Mock and past papers marked against the mark scheme', 'Lessons at times that fit the school week'].map((t) => (
              <li key={t} className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f4a9b] mt-0.5 shrink-0" /><span>{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 08 VERIFIED REVIEWS (1-Desktop Viewport Compact) ── */}
      <section className="py-7 sm:py-8 lg:py-9 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4 sm:mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-slate-200 text-[10.5px] font-bold text-[#0a1f3d] mb-2 shadow-xs">
              <span className="text-[#C7A24A] tracking-tighter">★★★★★</span>
              <span>5.0 · Verified Google reviews</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[27px] font-extrabold text-[#0a1f3d]">What Parents Say on Google</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_8px_32px_rgba(15,74,155,0.08)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((j) => <Star key={j} className="h-4 w-4 fill-[#C7A24A] text-[#C7A24A]" />)}
                </div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">GOOGLE REVIEW</span>
              </div>
              <p className="text-[#374151] text-[15px] sm:text-[16px] leading-relaxed mb-6 italic">
                &ldquo;Finding experienced GCSE tutors in Al Ain who understand Pearson Edexcel and AQA marking rubrics made all the difference for our daughter. Her tutor broke down multi-step exam questions and guided her from a grade 5 in mocks to achieving grade 8s across her science and maths papers. Highly recommended!&rdquo;
              </p>
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_8px_rgba(15,74,155,0.28)] notranslate shrink-0" translate="no">RA</div>
                <div className="min-w-0">
                  <div className="font-extrabold text-[#0a1f3d] text-[15px] notranslate truncate" translate="no">Reem Al Dhaheri, Al Ain</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5 truncate">Google review</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 09 FAQ (1-Desktop Viewport Compact) ── */}
      <section id="faqs" className="py-7 sm:py-8 lg:py-9 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-20">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/12 text-[#0f4a9b] text-xs font-bold mb-2.5">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0f4a9b]/10 text-[10px]">?</span>
                COMMON QUESTIONS
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-[27px] font-extrabold text-[#0a1f3d] leading-tight mb-2">
                What Al Ain Families <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Ask About GCSE Tutoring</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed">
                Home visits, one-to-one lessons, fees, first lessons, private candidates and resits, answered for Al Ain families.
              </p>
            </motion.div>

            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                const tone = { background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b' };
                return (
                  <motion.div key={faq.q} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => setOpenFaq(isOpen ? null : i)} aria-label={`Toggle FAQ: ${faq.q}`}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{ width: 40, height: 40, minWidth: 40, minHeight: 40, ...tone, transition: 'background 300ms ease, color 300ms ease', cursor: 'pointer', border: 'none', boxShadow: 'inset 0 0 0 2px #fff' }}>
                        ?
                      </button>
                      <button type="button" onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border bg-white shadow-xs transition-colors hover:border-[#0f4a9b]/50"
                        style={{ minHeight: '52px', padding: '10px 18px', cursor: 'pointer', borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)' }}>
                        <h3 className="flex-1 font-semibold text-[#0a1f3d] text-[13.5px] sm:text-[14px] leading-snug">{faq.q}</h3>
                        <span className="flex-shrink-0 flex items-center justify-center"
                          style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, borderRadius: '50%', ...tone, transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          <ChevronDown className="h-4 w-4" />
                        </span>
                      </button>
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="ml-[52px] overflow-hidden">
                          <div className="flex items-start gap-3 rounded-2xl border p-4 sm:p-4.5 bg-[#f8fafc]" style={{ borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 4px 16px rgba(15,74,155,0.06)' }}>
                            <p className="flex-1 text-gray-600 text-[13px] sm:text-[13.5px] leading-relaxed">{faq.a}</p>
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

      {/* ── 10 CTA (1-Desktop Viewport Compact) ── */}
      <section className="py-7 sm:py-8 lg:py-9 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-6 sm:p-8 text-center text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold mb-2">Start GCSE tutoring in Al Ain</h2>
            <p className="text-blue-100/85 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-5">
              Tell us the subject, exam board and tier. We will match a GCSE specialist and add a free 15-minute orientation to the first lesson.
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
        title="More support for Al Ain families"
        subtitle="Other Ustaad pages for students in Al Ain and across the UAE."
        subjects={[
          { label: 'Maths Tutoring', href: '/maths', note: 'Number, algebra and problem solving for GCSE Foundation and Higher tier.' },
          { label: 'English Tutoring', href: '/english', note: 'GCSE English Language and Literature, including set texts.' },
          { label: 'Science Tutoring', href: '/sciences', note: 'Combined and separate sciences, with required practicals.' },
        ]}
        curricula={[
          { label: 'IGCSE Tutor Al Ain', href: '/igcse-tutor-al-ain', note: 'Cambridge and Edexcel International GCSE support in Al Ain.' },
          { label: 'A-Level Tutor Al Ain', href: '/a-level-tutor-al-ain', note: 'The next step after GCSE, for Years 12 and 13.' },
          { label: 'GCSE Tutoring UAE', href: '/gcse', note: 'Our main GCSE page, with every subject and board.' },
        ]}
      />
    </Layout>
  );
}
