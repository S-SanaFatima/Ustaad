import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type UIEvent } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronDown, MessageCircle, CheckCircle2, Info, School, Repeat, Globe2 } from 'lucide-react';
import { Layout, StatsBar, RelatedContent } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

/*
 * Maths Tutor Al Ain — landing page.
 * Primary keyword: "maths tutor Al Ain". Secondary: math tutor Al Ain, maths tuition Al Ain,
 * online maths tutor, private maths tutor, IGCSE / GCSE / A-Level / IB / American maths,
 * Further Maths, calculator and non-calculator papers, home maths tuition (answered: online only).
 * The Al Ain curriculum pages (IGCSE, GCSE, A-Level, IB) cover every subject for one curriculum;
 * this page covers one subject, maths, across every curriculum, so the two sets do not compete.
 */

const URL_PATH = '/maths-tutor-al-ain';
const BOOKING = '/contact#form';
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20in%20Al%20Ain%20and%20looking%20for%20a%20maths%20tutor.%20My%20child%27s%20year%20group%20and%20exam%20board%20are%3A%20';
const GOLD = 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)';
const GOLD_TEXT = { background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } as const;

const TITLE = 'Maths Tutor Al Ain | Online IGCSE, A-Level & IB | Ustaad';
const DESCRIPTION = 'Online 1-to-1 maths tutor for Al Ain students: IGCSE, GCSE, A-Level, IB AA/AI and American maths, matched to the exact exam board. Free 15-min orientation.';

const NAVY = '#0f4a9b';
const INK = '#0a1f3d';
const GOLD_C = '#C7A24A';

/* ── Content ─────────────────────────────────────────────────────────── */

const CONTEXT = [
  { Icon: School, pt: 'A', title: 'Every board asks for maths differently', text: 'Cambridge, Edexcel, AQA, the IB and American courses cover many of the same topics but test them in different ways. The tutor works from your child’s own specification and past papers, not a generic course.' },
  { Icon: Repeat, pt: 'B', title: 'Gaps carry forward', text: 'Maths builds on itself. Shaky algebra in Year 9 becomes lost marks on quadratics in Year 11 and on calculus at A-Level. Lessons find the earliest gap and fix that first.' },
  { Icon: Globe2, pt: 'C', title: 'The right specialist, online', text: 'Further Maths, Mechanics or IB AA HL need a tutor who teaches that course every week. Online lessons bring that specialist to your child, whether you live in Al Muwaiji, Al Khabisi or Falaj Hazza.' },
];

type Stage = { key: string; mark: string; label: string; title: string; boards: string; points: string[]; links: { href: string; text: string }[] };
const STAGES: Stage[] = [
  {
    key: 'y7', mark: 'Y7–9', label: 'Years 7 to 9', title: 'Lower secondary: build the foundations',
    boards: 'British KS3 · IB MYP 1 to 3 · American Grades 6 to 8',
    points: [
      'Fractions, negative numbers, ratio and percentages until they are automatic, because every later topic leans on them.',
      'Forming and solving equations, plus the first steps in graphs, sequences and angle facts.',
      'Clear written working from the start, so method marks come easily later at IGCSE or GCSE.',
    ],
    links: [{ href: '/middle-school', text: 'Middle school tutoring' }],
  },
  {
    key: 'y10', mark: 'Y10–11', label: 'Years 10 and 11', title: 'IGCSE and GCSE maths: pick the tier, then aim high',
    boards: 'Cambridge IGCSE 0580 · Edexcel IGCSE 4MA1 · GCSE AQA, Edexcel, OCR',
    points: [
      'Core or Extended for Cambridge, Foundation or Higher for Edexcel and GCSE. The tier sets the highest grade your child can reach, so it is worth getting right.',
      'Algebra, quadratics, functions, vectors and circle theorems: the Extended and Higher topics where the top grades are decided.',
      'Timed past papers from the mocks onwards, with regular non-calculator practice.',
    ],
    links: [{ href: '/igcse-tutor-al-ain', text: 'IGCSE tutoring in Al Ain' }, { href: '/gcse-tutor-al-ain', text: 'GCSE tutoring in Al Ain' }],
  },
  {
    key: 'al', mark: 'A-Level', label: 'Years 12 and 13 (A-Level)', title: 'A-Level Maths and Further Maths',
    boards: 'Cambridge 9709 · Edexcel International A-Level · Edexcel 9MA0 · AQA 7357',
    points: [
      'Pure maths first: proof, trigonometric identities, differentiation and integration carry most of the marks.',
      'Mechanics and Statistics taught as their own papers, including the modelling assumptions examiners ask about.',
      'Further Maths for students heading to engineering, physics, computer science or maths degrees.',
    ],
    links: [{ href: '/a-level-tutor-al-ain', text: 'A-Level tutoring in Al Ain' }],
  },
  {
    key: 'ib', mark: 'IB DP', label: 'IB Diploma (Years 12 and 13)', title: 'IB Maths: AA or AI, at SL or HL',
    boards: 'Analysis and Approaches · Applications and Interpretation · SL and HL',
    points: [
      'Analysis and Approaches: proof, calculus and the Paper 1 with no calculator. Applications and Interpretation: statistics and modelling with the GDC.',
      'HL Paper 3: longer problem-solving questions that reward a clear line of reasoning.',
      'The maths exploration (IA): choosing a topic with enough real maths in it. The writing stays your child’s own.',
    ],
    links: [{ href: '/ib-tutor-al-ain', text: 'IB tutoring in Al Ain' }],
  },
  {
    key: 'us', mark: 'US 9–12', label: 'American curriculum (Grades 9 to 12)', title: 'From Algebra I to AP Calculus and the SAT',
    boards: 'Algebra I and II · Geometry · Pre-Calculus · AP Calculus AB and BC · SAT Math',
    points: [
      'Algebra I and II, Geometry and Pre-Calculus, following the unit your child is on in class.',
      'AP Calculus AB and BC, and AP Statistics, with practice on the free-response questions.',
      'SAT Math on the digital test, including when the built-in Desmos calculator saves time.',
    ],
    links: [{ href: '/ap', text: 'AP tutoring' }, { href: '/high-school', text: 'High school tutoring' }],
  },
];

const TOPICS = [
  { key: 'algebra', name: 'Algebra', slip: 'Sign errors when expanding brackets or moving terms across the equals sign.', fix: 'Balance-method working, one line per step, until it is routine.' },
  { key: 'geometry', name: 'Geometry and circle theorems', slip: 'The right angle, but no reason written, so the reasoning marks are lost.', fix: 'The exact wording of each theorem, written next to every angle found.' },
  { key: 'trig', name: 'Trigonometry', slip: 'The calculator in the wrong mode, or the sine rule used where the cosine rule is needed.', fix: 'A quick check of which sides and angles are given before choosing a rule.' },
  { key: 'calculus', name: 'Calculus', slip: 'Differentiating correctly, then stopping before the question is answered, such as giving the maximum value.', fix: 'Reading the command word and ending on the value the question asks for.' },
  { key: 'stats', name: 'Statistics', slip: 'Misreading grouped data, histograms and cumulative frequency graphs.', fix: 'Saying in words what the graph shows before any calculation.' },
  { key: 'prob', name: 'Probability', slip: 'Adding probabilities on a tree diagram where they should be multiplied.', fix: 'Drawing the full tree and checking that each set of branches adds to 1.' },
];

const PAPERS = [
  { board: 'Cambridge IGCSE 0580', rule: 'Papers 1 and 2 are non-calculator; Papers 3 and 4 allow one.', calc: 'mixed' },
  { board: 'Edexcel IGCSE 4MA1', rule: 'A calculator is allowed on both papers.', calc: 'yes' },
  { board: 'GCSE (AQA, Edexcel, OCR)', rule: 'One of the three papers is non-calculator; the other two allow one.', calc: 'mixed' },
  { board: 'IB Maths AA', rule: 'Paper 1 without a GDC; Paper 2, and HL Paper 3, with one.', calc: 'mixed' },
  { board: 'IB Maths AI', rule: 'A GDC is allowed on every paper.', calc: 'yes' },
  { board: 'A-Level Maths', rule: 'A calculator is allowed on every paper.', calc: 'yes' },
  { board: 'Digital SAT Math', rule: 'A calculator is allowed throughout, with Desmos built in.', calc: 'yes' },
];

const LESSON = [
  { tag: 'Find the gap', time: '10 min', text: 'The tutor works through two or three questions with your child and watches the method, not only the answer.' },
  { tag: 'Teach the method', time: '20 min', text: 'One idea at a time on the shared whiteboard, with your child writing the working rather than just watching.' },
  { tag: 'Exam-style practice', time: '25 min', text: 'Questions from your child’s own exam board, marked the way an examiner would, method marks included.' },
  { tag: 'Set the next step', time: '5 min', text: 'A short practice set before the next lesson, and a progress note for parents on request.' },
];

const STEPS = [
  { title: 'Send the year group and exam board', text: 'On WhatsApp or the form. A photo of a recent test or the syllabus page is enough.' },
  { title: 'First lesson, with a free orientation', text: 'The first 15 minutes are free: the tutor looks at recent work with your child and sets the first goal.' },
  { title: 'A fixed weekly maths slot', text: 'Weekday evenings or weekends, adjusted around mocks and exam dates.' },
];

const FAQS = [
  { q: 'Do you offer home maths tuition in Al Ain?', a: 'No. Lessons are online only, and Ustaad does not send tutors to homes. Your child joins a live video lesson with a shared whiteboard. That is what lets a family in Al Ain work with a specialist in their exact course, such as Edexcel IGCSE Higher or IB Analysis and Approaches HL.' },
  { q: 'Which maths courses and exam boards do you cover?', a: 'Cambridge IGCSE 0580, Edexcel IGCSE 4MA1, GCSE with AQA, Edexcel and OCR, A-Level and Further Maths with Cambridge, Edexcel (UK and International) and AQA, IB Maths AA and AI at SL and HL, the MYP, and American courses from Algebra I to AP Calculus, AP Statistics and SAT Math.' },
  { q: 'Should my child sit Core or Extended, or Foundation or Higher?', a: 'The school makes the final entry, usually after the Year 10 or Year 11 mocks. The higher tier opens the top grades but has harder questions. The lower tier caps the grade: grade C for Cambridge IGCSE 0580 Core, and grade 5 for Edexcel IGCSE and GCSE Foundation. If your child is between tiers, the tutor can show you which topics separate them.' },
  { q: 'Can you help with A-Level Further Maths?', a: 'Yes. Further Maths is taught by tutors who teach it every week, covering Further Pure, and the Mechanics, Statistics or Decision options your child’s school has chosen. Many students take it alongside A-Level Maths, so lessons often cover both.' },
  { q: 'How much does maths tuition cost in Al Ain?', a: 'Fees vary with the level your child is studying and the number of lessons each week. Tell us the year group, the exam board and how many lessons you have in mind, and we send a quote on WhatsApp. You agree the fee before the first lesson is booked.' },
  { q: 'Is one maths lesson a week enough?', a: 'For most students, yes, as long as they do the short practice set between lessons. A second weekly lesson helps when several gaps show up at once, such as weak algebra and trigonometry in Year 10, or in the term before final exams. After the first lesson the tutor will tell you if one a week looks too little.' },
  { q: 'Can my daughter have a female maths tutor?', a: 'Ask for one in your first message. We match a female maths specialist whenever one is free for your child’s course and preferred times, and we confirm the tutor with you before anything is booked.' },
  { q: 'Can my child send a maths question between lessons?', a: 'Yes. Reply Solution on our WhatsApp and send a clear photo of the question. A worked solution comes back in writing, with each line of method shown, so your child can follow the steps and try the next question alone. It is for practice and homework questions; marked coursework such as the IB maths exploration stays your child’s own work.' },
  { q: 'Is it too late to start a few weeks before a maths exam?', a: 'Not if the goal is realistic. In a few weeks a tutor can drill one or two high-mark topics and run timed papers on your child’s exact board, which often lifts marks quickly. Rebuilding years of weak foundations takes longer. Send the exam date and board, and we will be straight with you about what fits.' },
  { q: 'Do you offer a free maths trial lesson?', a: 'If you would like a free trial, ask and we can arrange one. Most families go straight to a paid 1-hour lesson, since its first 15 minutes are a free orientation: the tutor works through a recent test with your child to find where marks are being lost, so you can judge the fit before agreeing a weekly time.' },
];

/* ── Animation styles ────────────────────────────────────────────────── */

const MATH_CSS = `
@keyframes mta-draw { from { stroke-dashoffset: var(--len, 600); } to { stroke-dashoffset: 0; } }
@keyframes mta-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes mta-tilt { 0%,15% { transform: rotate(-9deg); } 45%,100% { transform: rotate(0deg); } }
@keyframes mta-grow { 0% { transform: scaleY(0); } 40%,100% { transform: scaleY(1); } }
@keyframes mta-spin { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
@keyframes mta-fade { 0%,30% { opacity: 0; } 50%,100% { opacity: 1; } }
@keyframes mta-blink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
@keyframes mta-type { from { width: 0; } to { width: var(--w, 14ch); } }
.mta-draw { stroke-dasharray: var(--len, 600); animation: mta-draw 3.2s cubic-bezier(.45,.05,.3,1) infinite alternate; }
.mta-float { animation: mta-float 6s ease-in-out infinite; animation-delay: var(--d, 0s); }
.mta-tilt { transform-box: fill-box; transform-origin: 50% 100%; animation: mta-tilt 3.6s ease-in-out infinite alternate; }
.mta-grow { transform-box: fill-box; transform-origin: 50% 100%; animation: mta-grow 3s ease-out infinite alternate; animation-delay: var(--d, 0s); }
.mta-spin { transform-box: view-box; transform-origin: 70px 70px; animation: mta-spin 6s linear infinite; }
.mta-fade { animation: mta-fade 3.2s ease-in-out infinite alternate; animation-delay: var(--d, 0s); }
.mta-cursor { animation: mta-blink 1s steps(1) infinite; }
.mta-type { display: inline-block; overflow: hidden; white-space: nowrap; vertical-align: bottom; animation: mta-type 1.6s steps(16) both; }
.mta-grid { background-image: linear-gradient(rgba(15,74,155,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(15,74,155,.07) 1px, transparent 1px); background-size: 28px 28px; }
.mta-paper { background-image: linear-gradient(transparent 31px, rgba(15,74,155,.12) 32px); background-size: 100% 32px; }
@media (prefers-reduced-motion: reduce) {
  .mta-draw, .mta-float, .mta-tilt, .mta-grow, .mta-spin, .mta-fade, .mta-cursor, .mta-type { animation: none !important; }
  .mta-draw { stroke-dashoffset: 0 !important; }
}
`;
const d = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;
const len = (n: number) => ({ '--len': n }) as CSSProperties;

/* ── Small building blocks ───────────────────────────────────────────── */

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7">
      <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8a6a1f] mb-2">
        <span className="w-5 h-[2px] rounded-full" style={{ background: GOLD }} />{eyebrow}<span className="w-5 h-[2px] rounded-full" style={{ background: GOLD }} />
      </span>
      <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#0a1f3d] leading-tight mb-2">{title}</h2>
      {intro && <p className="text-[13px] sm:text-[14.5px] text-[#4a5a72] leading-relaxed">{intro}</p>}
    </div>
  );
}

/* Hero: graph paper with a curve being plotted, a point riding the curve with its tangent, floating symbols */
function HeroGraph() {
  const curve = 'M-20 470 C 180 470, 260 120, 520 160 S 860 520, 1120 260 S 1380 60, 1480 120';
  const symbols: [string, string, number][] = [
    ['π', 'left-[6%] top-[18%] text-4xl', 0], ['√x', 'left-[12%] bottom-[16%] text-3xl', 1.2], ['∑', 'right-[8%] top-[20%] text-4xl', 0.6],
    ['∫', 'right-[14%] bottom-[14%] text-5xl', 1.8], ['x²', 'left-[24%] top-[8%] text-2xl', 2.4], ['θ', 'right-[26%] top-[9%] text-2xl', 3],
  ];
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(147,197,253,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,.07) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice">
        <line x1="0" y1="470" x2="1440" y2="470" stroke="rgba(147,197,253,.22)" strokeWidth="1.5" />
        <line x1="120" y1="0" x2="120" y2="560" stroke="rgba(147,197,253,.22)" strokeWidth="1.5" />
        <path d={curve} fill="none" stroke="url(#mta-hero-g)" strokeWidth="3" strokeLinecap="round" className="mta-draw" style={len(1800)} />
        <g>
          <line x1="-70" y1="0" x2="70" y2="0" stroke="#f0c96a" strokeWidth="2" strokeDasharray="6 5" opacity=".8" />
          <circle r="7" fill="#f0c96a" />
          <circle r="14" fill="none" stroke="#f0c96a" strokeOpacity=".35" />
          <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" path={curve} />
        </g>
        <defs>
          <linearGradient id="mta-hero-g" x1="0" x2="1">
            <stop offset="0" stopColor="#60a5fa" stopOpacity=".15" />
            <stop offset=".5" stopColor="#93c5fd" stopOpacity=".55" />
            <stop offset="1" stopColor="#f0c96a" stopOpacity=".4" />
          </linearGradient>
        </defs>
      </svg>
      {symbols.map(([s, pos, delay]) => (
        <span key={s} className={`absolute ${pos} hidden sm:block font-serif italic text-blue-200/20 mta-float`} style={d(delay)}>{s}</span>
      ))}
    </div>
  );
}

/* Section 2: schools strip + three reason cards, each with its own small maths diagram */
const SCHOOL_GROUPS = [
  { tag: 'British', names: ['Brighton College Al Ain', 'Al Ain English Speaking School', 'Al Ain British Academy'] },
  { tag: 'IB', names: ['Emirates National School'] },
];

function AlAinReasons() {
  return (
    <div className="grid lg:grid-cols-[5fr_7fr] gap-2.5 sm:gap-4 lg:gap-6 items-stretch">
      {/* left: heading panel */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white flex flex-col" style={{ background: 'linear-gradient(155deg,#0a1f3d 0%,#0f3a7a 70%,#164a96 100%)' }}>
        <span className="hidden sm:block absolute right-6 bottom-4 text-[130px] leading-none font-serif italic text-white/[0.06] select-none" aria-hidden="true">π</span>
        <span className="relative inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f0c96a] mb-1.5 sm:mb-3">
          <span className="w-5 h-[2px] rounded-full" style={{ background: GOLD }} />Maths in Al Ain
        </span>
        <h2 className="relative text-[19px] sm:text-[30px] font-extrabold leading-tight mb-1.5 sm:mb-3">
          Why Al Ain families look for <span style={GOLD_TEXT}>a private maths tutor</span>
        </h2>
        <p className="relative text-[12px] sm:text-[14px] text-blue-100/80 leading-snug sm:leading-relaxed mb-2.5 sm:mb-5">
          Students in Al Ain sit very different maths exams depending on the school: British IGCSE, GCSE and A-Level, the IB, or American courses. A good tutor starts from your child’s own course.
        </p>
        <ul className="relative grid grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-1 sm:gap-y-2 sm:mb-6" aria-label="Al Ain schools and the curricula they teach">
          {SCHOOL_GROUPS.map((g) => g.names.map((n) => (
            <li key={n} className="flex items-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-[13px] font-semibold text-white/90 leading-tight">
              <span className="w-[46px] sm:w-[62px] shrink-0 text-center rounded-full bg-white/10 border border-white/15 py-0.5 text-[8.5px] sm:text-[10px] font-extrabold uppercase tracking-wide text-[#f0c96a]">{g.tag}</span>{n}
            </li>
          )))}
        </ul>
      </div>
      {/* right: numbered reasons */}
      <ol className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(10,31,61,0.04),0_18px_40px_-30px_rgba(10,31,61,0.5)] divide-y divide-slate-200/80 overflow-hidden">
        {CONTEXT.map(({ title, text }, i) => (
          <motion.li key={title} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group flex gap-3 sm:gap-5 px-4 py-3 sm:p-7 hover:bg-[#f7f9fd] transition-colors">
            <span className="shrink-0 w-8 sm:w-14 text-[22px] sm:text-[38px] font-black leading-none tabular-nums text-transparent bg-clip-text" style={{ backgroundImage: GOLD }}>0{i + 1}</span>
            <div>
              <h3 className="text-[14px] sm:text-[18px] font-extrabold text-[#0a1f3d] leading-snug mb-0.5 sm:mb-1.5">{title}</h3>
              <p className="text-[12px] sm:text-[14px] text-[#4a5a72] leading-snug sm:leading-relaxed">{text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

/* Section 3: number line selector for the year group */
const LAST = STAGES.length - 1;
const DWELL_MS = 3200;

function NumberLine() {
  const [active, setActive] = useState(0);     // card on show
  const [heading, setHeading] = useState(0);   // point the line is travelling to
  const [pausedUntil, setPausedUntil] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.2 });
  const s = STAGES[active];
  const pct = (heading / LAST) * 100;
  const looping = heading < active;

  // after a pause on each point, send the line on to the next point
  useEffect(() => {
    if (!inView || heading !== active) return;
    const wait = Math.max(DWELL_MS, pausedUntil - Date.now());
    const t = window.setTimeout(() => setHeading(active === LAST ? 0 : active + 1), wait);
    return () => window.clearTimeout(t);
  }, [active, heading, inView, pausedUntil]);

  const pick = (i: number) => { setHeading(i); setActive(i); setPausedUntil(Date.now() + DWELL_MS); };

  return (
    <div ref={rootRef}>
      <div className="relative px-4 sm:px-10 pt-2 pb-1" role="tablist" aria-label="Choose a year group">
        <div className="relative h-[3px] bg-[#0f4a9b]/15 rounded-full mt-[18px]">
          <motion.div className="absolute left-0 top-0 h-full rounded-full" style={{ background: GOLD }}
            initial={false} animate={{ width: `${pct}%` }}
            transition={{ duration: looping ? 0.7 : 1.3, ease: looping ? 'easeInOut' : 'linear' }}
            onAnimationComplete={() => { if (heading !== active) setActive(heading); }}>
            {/* travelling head of the line */}
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 block w-3 h-3 rounded-full bg-[#f0c96a] shadow-[0_0_0_4px_rgba(240,201,106,0.3),0_0_14px_rgba(199,162,74,0.8)]" aria-hidden="true" />
          </motion.div>
          <svg className="absolute -right-3 -top-[7px] w-4 h-4 text-[#0f4a9b]/40" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 2 L14 8 L2 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div className="absolute inset-x-4 sm:inset-x-10 top-2">
          {STAGES.map((st, i) => {
            const on = i === active;
            const passed = i < active;
            return (
              <button key={st.key} type="button" role="tab" aria-selected={on} aria-controls="mta-stage-panel" onClick={() => pick(i)}
                className="absolute top-0 flex flex-col items-center group" style={{ left: `${(i / (STAGES.length - 1)) * 100}%`, transform: 'translateX(-50%)' }}>
                <span className={`block rounded-full transition-all duration-300 ${on ? 'w-9 h-9 bg-[#0a1f3d] ring-4 ring-[#f0c96a]/50 shadow-lg' : passed ? 'w-5 h-5 mt-2 bg-[#C7A24A]' : 'w-5 h-5 mt-2 bg-white border-2 border-[#0f4a9b]/35 group-hover:border-[#0f4a9b]'}`}>
                  {on && <span className="flex w-full h-full items-center justify-center text-[#f0c96a] text-[11px] font-black">{i + 1}</span>}
                </span>
                <span className={`mt-2 whitespace-nowrap text-[11px] sm:text-[13px] font-extrabold ${on ? 'text-[#0a1f3d]' : 'text-[#6b7a90] group-hover:text-[#0f4a9b]'}`}>{st.mark}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="h-14 sm:h-14" />
      <AnimatePresence mode="wait">
        <motion.div key={s.key} id="mta-stage-panel" role="tabpanel" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}
          className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(10,31,61,0.04),0_18px_40px_-28px_rgba(10,31,61,0.5)] overflow-hidden min-h-[430px] md:min-h-[222px]">
          <div className="grid md:grid-cols-[260px_1fr] md:min-h-[222px]">
            <div className="relative px-4 py-3.5 sm:p-5 text-white overflow-hidden" style={{ background: 'linear-gradient(150deg,#0a1f3d 0%,#0f3a7a 100%)' }}>
              <span className="absolute -right-2 -bottom-5 whitespace-nowrap text-[72px] leading-none font-black text-white/[0.06] select-none" aria-hidden="true">{s.mark}</span>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f0c96a] mb-1">{s.label}</p>
              <h3 className="text-[16px] sm:text-[19px] font-extrabold leading-snug mb-1.5 sm:mb-3">{s.title}</h3>
              <p className="text-[11.5px] sm:text-[12px] text-blue-100/80 leading-snug sm:leading-relaxed">{s.boards}</p>
            </div>
            <div className="px-4 py-3.5 sm:p-5">
              <ul className="space-y-1.5 sm:space-y-2.5 mb-3 sm:mb-4">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[12.5px] sm:text-[13.5px] text-[#2c3e5c] leading-snug sm:leading-relaxed">
                    <span className="mt-[3px] flex w-4 h-4 shrink-0 items-center justify-center rounded-[4px] bg-[#0f4a9b]/[0.08] text-[#0f4a9b] text-[11px] font-black" aria-hidden="true">+</span>{p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {s.links.map((l) => (
                  <a key={l.href} href={l.href} className="inline-flex items-center rounded-full bg-[#f4f7fc] border border-[#0f4a9b]/15 px-3.5 py-1.5 text-[12.5px] font-bold text-[#0f4a9b] hover:border-[#0f4a9b]/45 transition-colors">{l.text}</a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Section 4: one small animated diagram per topic */
function TopicArt({ k }: { k: string }) {
  const stroke = { fill: 'none', stroke: '#0f4a9b', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (k === 'algebra') return (
    <svg viewBox="0 0 220 140" className="w-full h-full">
      <path d="M110 120 L96 132 H124 Z" fill="#C7A24A" />
      <line x1="110" y1="120" x2="110" y2="58" {...stroke} />
      <g className="mta-tilt" style={{ transformOrigin: '110px 58px' }}>
        <line x1="40" y1="58" x2="180" y2="58" stroke="#C7A24A" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="58" x2="50" y2="80" {...stroke} /><line x1="170" y1="58" x2="170" y2="80" {...stroke} />
        <rect x="22" y="80" width="56" height="26" rx="6" fill="#eef3fb" stroke="#0f4a9b" />
        <text x="50" y="98" textAnchor="middle" fill="#0a1f3d" fontSize="13" fontWeight="700" fontFamily="ui-monospace,monospace">2x+3</text>
        <rect x="142" y="80" width="56" height="26" rx="6" fill="#eef3fb" stroke="#0f4a9b" />
        <text x="170" y="98" textAnchor="middle" fill="#0a1f3d" fontSize="13" fontWeight="700" fontFamily="ui-monospace,monospace">11</text>
      </g>
      <text x="110" y="28" textAnchor="middle" fill="#9a7a1c" fontSize="13" fontWeight="700" fontFamily="ui-monospace,monospace" className="mta-fade">x = 4</text>
    </svg>
  );
  if (k === 'geometry') return (
    <svg viewBox="0 0 220 140" className="w-full h-full">
      <circle cx="110" cy="74" r="54" {...stroke} strokeOpacity=".5" />
      <circle cx="110" cy="74" r="3" fill="#0f4a9b" />
      <path d="M64 102 L110 74 L156 102" {...stroke} />
      <path d="M64 102 L110 20 L156 102" fill="none" stroke="#C7A24A" strokeOpacity=".25" strokeWidth="2" strokeLinejoin="round" />
      <path d="M64 102 L110 20 L156 102" fill="none" stroke="#C7A24A" strokeWidth="2" strokeLinejoin="round" className="mta-draw" style={len(260)} />
      <path d="M100 80 A 12 12 0 0 0 120 80" fill="none" stroke="#0f4a9b" strokeWidth="2" />
      <path d="M104 31 A 12 12 0 0 0 116 31" fill="none" stroke="#C7A24A" strokeWidth="2" />
      <text x="110" y="122" textAnchor="middle" fill="#0f4a9b" fontSize="11" fontWeight="700">2θ</text>
      <text x="138" y="44" fill="#9a7a1c" fontSize="11" fontWeight="700" className="mta-fade">θ</text>
    </svg>
  );
  if (k === 'trig') return (
    <svg viewBox="0 0 220 140" className="w-full h-full">
      <circle cx="70" cy="70" r="44" {...stroke} strokeOpacity=".5" />
      <line x1="20" y1="70" x2="210" y2="70" stroke="#0f4a9b" strokeOpacity=".3" />
      <g className="mta-spin"><line x1="70" y1="70" x2="114" y2="70" stroke="#C7A24A" strokeWidth="2.5" strokeLinecap="round" /><circle cx="114" cy="70" r="4.5" fill="#C7A24A" /></g>
      <path d="M120 70 C 130 26, 140 26, 150 70 S 170 114, 180 70 S 200 26, 210 70" {...stroke} strokeOpacity=".25" />
      <path d="M120 70 C 130 26, 140 26, 150 70 S 170 114, 180 70 S 200 26, 210 70" {...stroke} className="mta-draw" style={len(260)} />
      <text x="168" y="22" fill="#0f4a9b" fontSize="11" fontWeight="700" fontFamily="ui-monospace,monospace">sin θ</text>
    </svg>
  );
  if (k === 'calculus') {
    const p = 'M14 118 C 60 118, 70 24, 110 24 S 160 118, 206 118';
    return (
      <svg viewBox="0 0 220 140" className="w-full h-full">
        <path d={p} {...stroke} />
        <g>
          <line x1="-34" y1="0" x2="34" y2="0" stroke="#C7A24A" strokeWidth="2.5" strokeLinecap="round" />
          <circle r="4.5" fill="#C7A24A" />
          <animateMotion dur="5s" repeatCount="indefinite" rotate="auto" path={p} />
        </g>
        <line x1="110" y1="24" x2="110" y2="128" stroke="#0f4a9b" strokeOpacity=".35" strokeDasharray="4 4" />
        <text x="118" y="16" fill="#9a7a1c" fontSize="11" fontWeight="700" fontFamily="ui-monospace,monospace" className="mta-fade">dy/dx = 0</text>
      </svg>
    );
  }
  if (k === 'stats') return (
    <svg viewBox="0 0 220 140" className="w-full h-full">
      <line x1="20" y1="122" x2="206" y2="122" {...stroke} />
      {[[30, 30], [62, 58], [94, 86], [126, 64], [158, 38], [190, 18]].map(([x, h], i) => (
        <rect key={x} x={x - 2} y={122 - h - 4} width="28" height={h + 4} rx="3" fill={i === 2 ? '#C7A24A' : '#5b86c9'} className="mta-grow" style={d(i * 0.15)} />
      ))}
      <line x1="106" y1="14" x2="106" y2="122" stroke="#C7A24A" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="112" y="22" fill="#9a7a1c" fontSize="11" fontWeight="700" fontFamily="ui-monospace,monospace">median</text>
    </svg>
  );
  return (
    <svg viewBox="0 0 220 140" className="w-full h-full">
      <circle cx="24" cy="70" r="4" fill="#C7A24A" />
      {[[24, 70, 100, 36], [24, 70, 100, 104], [100, 36, 190, 18], [100, 36, 190, 54], [100, 104, 190, 86], [100, 104, 190, 122]].map(([x1, y1, x2, y2], i) => (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0f4a9b" strokeOpacity=".3" strokeWidth="2" strokeLinecap="round" />
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={i === 0 || i === 2 ? '#C7A24A' : '#0f4a9b'} strokeWidth="2" strokeLinecap="round" className="mta-draw" style={{ ...len(100), animationDelay: `${i < 2 ? 0 : 0.6}s` }} />
          <circle cx={x2} cy={y2} r="3" fill={i === 0 || i === 2 ? '#C7A24A' : '#0f4a9b'} />
        </g>
      ))}
      <text x="52" y="44" fill="#0f4a9b" fontSize="11" fontWeight="700" fontFamily="ui-monospace,monospace">0.3</text>
      <text x="140" y="20" fill="#9a7a1c" fontSize="11" fontWeight="700" fontFamily="ui-monospace,monospace">0.6</text>
      <text x="124" y="136" fill="#9a7a1c" fontSize="11" fontWeight="700" fontFamily="ui-monospace,monospace" className="mta-fade">0.3 × 0.6</text>
    </svg>
  );
}

function TopicLab() {
  const [active, setActive] = useState(0);
  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    setActive(Math.min(TOPICS.length - 1, Math.round(el.scrollLeft / (card.offsetWidth + 12))));
  };
  return (
    <div>
      <div onScroll={onScroll}
        className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TOPICS.map((t, i) => (
          <article key={t.key}
            className="group shrink-0 w-[84%] sm:w-auto snap-center rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(10,31,61,0.04),0_14px_32px_-24px_rgba(10,31,61,0.45)] hover:-translate-y-1 transition-transform">
            <div className="relative h-[120px] sm:h-[88px] px-6 pt-2 pb-1 mta-grid bg-gradient-to-b from-[#f7f9fd] to-white border-b border-slate-200/80 transition-transform duration-500 group-hover:scale-[1.04]" aria-hidden="true">
              <TopicArt k={t.key} />
            </div>
            <div className="px-4 py-3">
              <h3 className="text-[15px] sm:text-[14.5px] font-extrabold text-[#0a1f3d] mb-1">{t.name}</h3>
              <p className="text-[12.5px] sm:text-[12px] text-[#4a5a72] leading-snug mb-1"><span className="font-extrabold text-[#b4432f]">Where marks go: </span>{t.slip}</p>
              <p className="text-[12.5px] sm:text-[12px] text-[#4a5a72] leading-snug"><span className="font-extrabold text-[#0f4a9b]">What we do: </span>{t.fix}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="sm:hidden mt-2.5 flex items-center justify-center gap-1.5" aria-hidden="true">
        {TOPICS.map((t, i) => (
          <span key={t.key} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-5 bg-[#C7A24A]' : 'w-1.5 bg-[#0f4a9b]/25'}`} />
        ))}
        <span className="ml-2 text-[11px] font-semibold text-[#6b7a90]">Swipe for all 6 topics</span>
      </div>
    </div>
  );
}

/* Section 5: calculator body with an LCD, next to the paper rules */
function CalculatorPapers() {
  const keys = ['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '−', '0', '.', '=', '+'];
  return (
    <div className="grid lg:grid-cols-[300px_1fr] gap-5 lg:gap-8 items-start">
      <div className="mx-auto w-full max-w-[250px] sm:max-w-[300px] rounded-[28px] p-4 shadow-[0_24px_50px_-24px_rgba(10,31,61,0.65)]" style={{ background: 'linear-gradient(160deg,#1b2d4f 0%,#0a1f3d 100%)' }} aria-hidden="true">
        <div className="flex items-center justify-between px-1 mb-2">
          <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#f0c96a]">USTAAD fx</span>
          <span className="flex gap-1">{[0, 1, 2, 3].map((i) => <span key={i} className="w-3 h-2 rounded-[2px] bg-[#3a4d70]" />)}</span>
        </div>
        <div className="rounded-xl px-3 py-2.5 mb-3 font-mono text-[#0a2a12] shadow-inner" style={{ background: 'linear-gradient(180deg,#c9dcb6,#b2c99c)' }}>
          <div className="text-[10px] opacity-60 flex justify-between"><span>MATH</span><span>DEG</span></div>
          <div className="text-[14px] font-bold leading-tight text-right"><span className="mta-type" style={{ '--w': '16ch' } as CSSProperties}>PAPER 1: NO CALC</span><span className="mta-cursor">▌</span></div>
          <div className="text-[11px] text-right opacity-70">show every step</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {keys.map((k) => (
            <span key={k} className={`flex h-9 items-center justify-center rounded-lg text-[14px] font-bold ${k === '=' ? 'text-[#0a1f3d]' : ['÷', '×', '−', '+'].includes(k) ? 'bg-[#2c4a7d] text-[#f0c96a]' : 'bg-[#26395c] text-white'}`} style={k === '=' ? { background: GOLD } : undefined}>{k}</span>
          ))}
        </div>
      </div>
      <div>
        <ul className="divide-y divide-slate-200/80 rounded-2xl bg-white border border-slate-200/80 overflow-hidden" aria-label="Calculator rules by exam">
          {PAPERS.map((p) => (
            <li key={p.board} className="flex items-start sm:items-center gap-3 px-4 py-2.5">
              <span className={`mt-0.5 sm:mt-0 shrink-0 inline-flex items-center justify-center w-[74px] rounded-full px-2 py-0.5 text-[10.5px] font-extrabold uppercase tracking-wide ${p.calc === 'yes' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'}`}>{p.calc === 'yes' ? 'Calc' : 'Mixed'}</span>
              <div className="sm:flex sm:items-baseline sm:gap-3 min-w-0">
                <p className="text-[13.5px] font-extrabold text-[#0a1f3d] sm:w-[190px] shrink-0">{p.board}</p>
                <p className="text-[12.5px] sm:text-[13px] text-[#4a5a72] leading-snug">{p.rule}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-3 flex items-start gap-2 text-[12px] text-[#4a5a72] leading-relaxed">
          <Info className="w-4 h-4 mt-[1px] text-[#0f4a9b] shrink-0" />
          Cambridge changed its IGCSE maths papers for exams from 2025, so check the syllabus year on your child’s school materials. Lessons include regular mental and written methods, so a non-calculator paper is not a shock.
        </p>
      </div>
    </div>
  );
}

/* Section 6: a lesson written out like a worked solution in an exercise book */
function WorkedLesson() {
  return (
    <div className="relative rounded-2xl bg-[#fffdf7] border border-[#e9dfc4] shadow-[0_20px_44px_-30px_rgba(10,31,61,0.55)] overflow-hidden">
      <div className="absolute left-[46px] sm:left-[64px] top-0 bottom-0 w-[2px] bg-[#e8a0a0]/70" aria-hidden="true" />
      <div className="mta-paper relative pl-[60px] sm:pl-[84px] pr-4 sm:pr-8 py-5">
        <p className="text-[13px] sm:text-[14px] text-[#2c3e5c] leading-8"><span className="font-mono font-bold text-[#0f4a9b]">Given:</span> a recent test, homework or past paper from your child’s course.</p>
        <ol className="mt-1">
          {LESSON.map((l, i) => (
            <motion.li key={l.tag} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.35, delay: i * 0.12 }}
              className="relative leading-8">
              <span className="absolute -left-[50px] sm:-left-[70px] top-0 font-mono text-[12px] font-bold text-[#b4432f]">({i + 1})</span>
              <p className="text-[13px] sm:text-[14px] text-[#2c3e5c]">
                <span className="font-extrabold text-[#0a1f3d]">{l.tag}</span>
                <span className="mx-1.5 inline-flex items-center rounded-full bg-[#0f4a9b]/[0.07] px-2 text-[11px] font-bold text-[#0f4a9b] leading-5 align-middle">{l.time}</span>
                {l.text}
              </p>
            </motion.li>
          ))}
        </ol>
        <p className="mt-1 text-[13px] sm:text-[14px] leading-8 text-[#0a1f3d] font-bold">
          <span className="font-mono text-[#b4432f] mr-1">∴</span>Every lesson ends with one clear target for the week.
          <span className="ml-2 inline-block align-middle rounded-md border-2 border-[#0f4a9b] px-1.5 leading-5 text-[11px] font-black text-[#0f4a9b]">60 min</span>
        </p>
        <p className="text-[12.5px] text-[#4a5a72] leading-8">The first lesson starts with a free 15-minute orientation.</p>
      </div>
    </div>
  );
}

/* Section 7: three steps drawn as a rising staircase */
function StaircaseSteps() {
  return (
    <div>
      <ol className="grid md:grid-cols-3 gap-3 md:gap-4 md:items-end">
        {STEPS.map((s, i) => (
          <li key={s.title} className="relative">
            <div className="rounded-2xl bg-white border border-slate-200/80 p-4 shadow-[0_1px_2px_rgba(10,31,61,0.04),0_12px_30px_-24px_rgba(10,31,61,0.4)]">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-serif italic text-[18px] font-bold text-[#0f4a9b]">a<sub className="text-[11px] not-italic font-sans font-black text-[#A8892A]">{i + 1}</sub></span>
                <h3 className="text-[14.5px] font-extrabold text-[#0a1f3d] leading-snug">{s.title}</h3>
              </div>
              <p className="text-[12.5px] sm:text-[13px] text-[#4a5a72] leading-relaxed">{s.text}</p>
            </div>
            <div className="hidden md:block mt-2 rounded-t-lg" style={{ height: 18 + i * 26, background: i === 2 ? GOLD : `rgba(15,74,155,${0.15 + i * 0.12})` }} aria-hidden="true" />
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function MathsTutorAlAinPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const rawCitySchema = cityLocalBusinessSchema({
    city: 'Al Ain',
    url: URL_PATH,
    name: 'Ustaad: Maths Tutor Al Ain',
    description: DESCRIPTION,
    address: { '@type': 'PostalAddress', addressLocality: 'Al Ain', addressRegion: 'Abu Dhabi', addressCountry: 'AE' },
  });
  const { priceRange: _p, geo: _g, ...citySchema } = rawCitySchema as Record<string, unknown>;

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Online Maths Tutoring for Al Ain Students',
    description: 'Online 1-to-1 maths tutoring from Year 7 to Year 13: IGCSE, GCSE, A-Level and Further Maths, IB Maths AA and AI, and American courses to AP Calculus and SAT Math.',
    provider: { '@type': 'EducationalOrganization', '@id': 'https://ustaad.ae/#organization', name: 'Ustaad', url: 'https://ustaad.ae' },
    url: `https://ustaad.ae${URL_PATH}`,
    educationalLevel: 'Secondary school, Years 7 to 13',
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT1H' },
    offers: { '@type': 'Offer', category: 'Paid', priceCurrency: 'AED' },
  };

  return (
    <Layout>
      <SEOHead
        title={TITLE}
        description={DESCRIPTION}
        canonical={URL_PATH}
        ogImage="/UpdatedImages/maths-tutor-al-ain-online-lesson.webp"
        placename="Al Ain, Abu Dhabi, UAE"
        schema={[
          { ...citySchema, paymentAccepted: 'Credit Card, Bank Transfer' },
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Maths', url: '/maths' }, { name: 'Maths Tutor Al Ain', url: URL_PATH }]),
          serviceSchema('Maths Tutor Al Ain', DESCRIPTION, URL_PATH),
          courseSchema,
          faqSchema(FAQS),
        ]}
      />
      <style>{MATH_CSS}</style>

      {/* ── 01 HERO ── */}
      <section className="relative -mt-10 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center pt-14 pb-12 sm:pt-16 sm:pb-14">
        <HeroGraph />
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-blue-100/90 bg-white/[0.08] border border-white/15 mb-3 shadow-sm">
            AL AIN | YEAR 7 TO 13 | ONLINE 1-TO-1
          </div>
          <h1 className="font-extrabold tracking-tight text-white leading-[1.14] mb-3 text-[clamp(1.75rem,4.2vw,3rem)] max-w-3xl">
            Maths Tutor in Al Ain{' '}
            <span style={GOLD_TEXT}>for IGCSE, A-Level, IB and American Maths</span>
          </h1>
          <p className="text-blue-100/85 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mb-5 px-4 font-medium">
            Live one-to-one maths lessons with a tutor who knows your child’s exact exam board, from Year 7 algebra to A-Level Further Maths and IB Analysis and Approaches HL.
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
            {['1-to-1 online', 'Free 15-min orientation', 'Every exam board'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f0c96a]" /> {t}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <StatsBar />

      {/* ── 02 MATHS IN AL AIN ── */}
      <section className="py-4 sm:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <AlAinReasons />
        </div>
      </section>

      {/* ── 03 NUMBER LINE ── */}
      <section className="py-8 sm:py-10 bg-[#f4f7fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="By year group"
            title={<>From Year 7 to Year 13: <span style={{ color: NAVY }}>what lessons focus on</span></>}
            intro="Follow the number line through each stage, or tap a stage to stop on it and see the courses we cover."
          />
          <NumberLine />
        </div>
      </section>

      {/* ── 04 TOPIC LAB ── */}
      <section className="py-6 sm:py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Where marks slip"
            title={<>Six topics where students <span style={{ color: NAVY }}>lose the most marks</span></>}
            intro="The same few habits cost marks on every exam board. Here is each mistake and how lessons fix it."
          />
          <TopicLab />
          <p className="mt-3 text-center text-[12px] sm:text-[12.5px] text-[#4a5a72]">
            More on this: <a href="/blogs/silly-mistakes-maths-exams" className="font-bold text-[#0f4a9b] underline underline-offset-2">why students make silly mistakes in maths exams</a>.
          </p>
        </div>
      </section>

      {/* ── 05 CALCULATOR PAPERS ── */}
      <section className="py-8 sm:py-10 bg-[#f6f8fc] border-y border-[#0f4a9b]/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Exam papers"
            title={<>Calculator and <span style={{ color: NAVY }}>non-calculator papers</span></>}
            intro="Whether a calculator is allowed depends on the exam board. Students who use one for everything struggle when it is taken away."
          />
          <CalculatorPapers />
        </div>
      </section>

      {/* ── 06 INSIDE A LESSON ── */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Inside a lesson"
            title={<>How a one-hour <span style={{ color: NAVY }}>online maths lesson</span> runs</>}
            intro="Each lesson follows the same simple structure, written out here the way a worked solution would be."
          />
          <WorkedLesson />
        </div>
      </section>

      {/* ── 07 GETTING STARTED ── */}
      <section className="py-8 sm:py-10 bg-[#f4f7fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Getting started" title={<>Three steps to <span style={{ color: NAVY }}>your first lesson</span></>} intro="From a WhatsApp message to a fixed weekly maths lesson." />
          <StaircaseSteps />
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
                Questions Parents Ask <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">About Maths Tutoring</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed">
                Online lessons, exam boards, tiers, Further Maths, homework help and fees.
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
                      <button type="button" onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`maths-al-ain-faq-${i}`}
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
                    <div id={`maths-al-ain-faq-${i}`} hidden={!isOpen} className="ml-[52px]">
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
          <div className="relative overflow-hidden rounded-2xl p-6 sm:p-8 text-center text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${INK} 0%, #0f3a7a 60%, #1e5ba8 100%)` }}>
            <span className="absolute -left-2 -top-6 text-[110px] font-serif italic text-white/[0.05] select-none" aria-hidden="true">∫</span>
            <span className="absolute right-3 -bottom-8 text-[110px] font-serif italic text-white/[0.05] select-none" aria-hidden="true">π</span>
            <h2 className="relative text-xl sm:text-2xl lg:text-[26px] font-extrabold mb-2">Start maths tutoring in Al Ain</h2>
            <p className="relative text-blue-100/85 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-5">
              Send your child’s year group and exam board. We reply with a matched maths tutor, and the first lesson includes a free 15-minute orientation.
            </p>
            <div className="relative flex flex-col sm:flex-row justify-center items-center gap-2.5">
              <a href={BOOKING} className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[190px] h-10 px-6 rounded-full font-bold text-xs sm:text-sm text-white shadow-md hover:brightness-110 transition" style={{ background: GOLD }}>Book First Session</a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[190px] h-10 px-6 rounded-full font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md transition">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent
        title="More maths support and Al Ain pages"
        subtitle="Other Ustaad pages for maths students and for families in Al Ain."
        subjects={[
          { label: 'Maths Tutoring UAE', href: '/maths', note: 'Our main maths page, for every emirate and curriculum.' },
          { label: 'Maths Tutor Abu Dhabi', href: '/maths-tutor-abu-dhabi', note: 'For families who move between Al Ain and Abu Dhabi schools.' },
          { label: 'Statistics Tutoring', href: '/statistics', note: 'A-Level Statistics, IB Maths AI and AP Statistics support.' },
          { label: 'IGCSE Maths Revision', href: '/blogs/igcse-maths-revision-low-marks', note: 'Why revision is not lifting the marks, and what to change.' },
        ]}
        curricula={[
          { label: 'IGCSE Tutor Al Ain', href: '/igcse-tutor-al-ain', note: 'Every IGCSE subject for Al Ain students in Years 9 to 11.' },
          { label: 'GCSE Tutor Al Ain', href: '/gcse-tutor-al-ain', note: 'UK GCSE with AQA, Edexcel and OCR.' },
          { label: 'A-Level Tutor Al Ain', href: '/a-level-tutor-al-ain', note: 'Years 12 and 13, across all A-Level subjects.' },
          { label: 'IB Tutor Al Ain', href: '/ib-tutor-al-ain', note: 'MYP and Diploma, including the IA, EE and TOK.' },
        ]}
      />
    </Layout>
  );
}
