import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  Calculator, Atom, FlaskConical, Dna, BookOpen, TrendingUp,
  ChevronDown, MessageCircle, Search, ClipboardCheck, CalendarCheck, CheckCircle2, Info,
  School, Repeat, Globe2, FileText, PenTool, Lightbulb, ShieldCheck,
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
  { Icon: FileText, name: 'Internal Assessment (IA)', what: 'Every DP subject has one, marked by the teacher and checked by an IB moderator.', help: ['Picking a focused research question', 'Reading the criteria before writing', 'Feedback on structure, data handling and evaluation'] },
  { Icon: PenTool, name: 'Extended Essay (EE)', what: 'A 4,000-word research essay, graded A to E, that counts towards the 3 core points.', help: ['Narrowing the topic to a question that can be answered', 'Planning research and sources', 'Questions that help the student improve their own draft'] },
  { Icon: Lightbulb, name: 'Theory of Knowledge (TOK)', what: 'An essay on a set title and an exhibition, also graded A to E and combined with the EE.', help: ['Unpacking the prescribed title', 'Building real-life examples', 'Practising a clear, balanced argument'] },
];

const SWITCH = [
  { label: 'Number of subjects', a: '8 to 10 IGCSEs', b: '6 subjects, 3 at HL and 3 at SL, plus the core' },
  { label: 'Grades', a: 'A* to G or 9 to 1', b: '1 to 7 per subject, 45 points in total' },
  { label: 'Coursework', a: 'In a few subjects only', b: 'An IA in every subject, plus the EE and TOK' },
  { label: 'Final exams', a: 'End of Year 11', b: 'May of Year 13 (DP2)' },
];

const STEPS = [
  { Icon: Search, title: 'Tell us the programme and subjects', text: 'MYP year, or DP subjects with HL and SL. A photo of the subject list or timetable is enough.' },
  { Icon: ClipboardCheck, title: 'First lesson, plus orientation', text: 'A free 15-minute orientation starts the first lesson: the tutor reviews a recent IA draft, test or MYP task and sets the first goal with your child.' },
  { Icon: CalendarCheck, title: 'A steady weekly slot', text: 'One fixed online slot per subject each week, on weekday evenings or weekends, adjusted around IA, EE and mock deadlines.' },
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

/* MYP / DP1 / DP2 switcher. All three panels are server-rendered; inactive ones use `hidden`. */
function StageSwitcher() {
  const [active, setActive] = useState(1);
  return (
    <div className="max-w-4xl mx-auto">
      <div role="tablist" aria-label="IB stage" className="flex justify-center gap-2 mb-4">
        {STAGES.map((s, i) => {
          const on = i === active;
          return (
            <button key={s.key} role="tab" id={`ib-stage-tab-${s.key}`} aria-selected={on} aria-controls={`ib-stage-${s.key}`} onClick={() => setActive(i)}
              className={`px-4 sm:px-6 h-10 rounded-full text-xs sm:text-sm font-extrabold border transition-all ${on ? 'bg-[#0f4a9b] text-white border-[#0f4a9b] shadow-md' : 'bg-white text-[#0a1f3d] border-[#0f4a9b]/15 hover:border-[#0f4a9b]/50'}`}>
              {s.label}
            </button>
          );
        })}
      </div>
      {STAGES.map((s, i) => (
        <div key={s.key} id={`ib-stage-${s.key}`} role="tabpanel" aria-labelledby={`ib-stage-tab-${s.key}`} hidden={i !== active}
          className="rounded-2xl border border-[#0f4a9b]/15 bg-white p-5 sm:p-7 shadow-[0_8px_32px_rgba(15,74,155,0.08)]">
          <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#8a6a1f]">{s.years}</span>
          <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] mt-1 mb-3">{s.title}</h3>
          <ul className="space-y-2.5">
            {s.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[13px] sm:text-sm text-[#2c3e5c] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] mt-0.5 shrink-0" /><span>{p}</span>
              </li>
            ))}
          </ul>
          <a href={s.link.href} className="inline-block mt-4 text-[13px] font-bold text-[#0f4a9b] underline underline-offset-2">{s.link.text}</a>
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

      {/* ── 02 THE IB IN AL AIN ── */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="The IB in Al Ain"
            title={<>Why IB students in Al Ain <span className="text-[#0f4a9b]">look for a tutor</span></>}
            intro="The IB is taught in only a handful of Al Ain schools, such as Emirates National School, which offers the programme from primary through to the Diploma. That shapes the support IB students here need."
          />
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            {AL_AIN_CONTEXT.map(({ Icon, title, text }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-[#0f4a9b]/12 bg-[#f8fbff] p-5 shadow-xs">
                <span className="flex w-10 h-10 items-center justify-center rounded-xl bg-[#0f4a9b] text-white mb-3"><Icon className="w-5 h-5" /></span>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] mb-1.5 leading-snug">{title}</h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#4a5a72] leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 STAGE SWITCHER ── */}
      <section className="py-8 sm:py-10 bg-[#f4f7fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Your child’s stage"
            title={<>MYP, DP1 or DP2: <span className="text-[#0f4a9b]">what we focus on</span></>}
            intro="The IB asks for different things at each stage. Choose your child’s stage to see where lessons put the time."
          />
          <StageSwitcher />
        </div>
      </section>

      {/* ── 04 SUBJECTS AT SL AND HL ── */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Diploma subjects"
            title={<>IB subjects we tutor, <span className="text-[#0f4a9b]">at SL and HL</span></>}
            intro="Each card shows where students in that subject most often lose marks, and what lessons work on first."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {SUBJECTS.map(({ Icon, name, levels, watch, href }, i) => (
              <motion.a key={name} href={href} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-md hover:border-[#0f4a9b]/35 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="flex w-10 h-10 items-center justify-center rounded-xl bg-[#f6efdc] text-[#0a3a79]"><Icon className="w-5 h-5" /></span>
                  <span className="text-[10.5px] font-extrabold tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 px-2.5 py-0.5 rounded-full">{levels}</span>
                </div>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] mb-1.5 leading-snug group-hover:text-[#0f4a9b] transition-colors">{name}</h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#4a5a72] leading-relaxed">{watch}</p>
              </motion.a>
            ))}
          </div>
          <p className="mt-4 text-center text-[12px] text-[#4a5a72]">
            Comparing levels? See <a href="/dp-hl" className="font-bold text-[#0f4a9b] underline underline-offset-2">DP Higher Level</a> and <a href="/dp-sl" className="font-bold text-[#0f4a9b] underline underline-offset-2">DP Standard Level</a> tutoring.
          </p>
        </div>
      </section>

      {/* ── 05 THE CORE ── */}
      <section className="py-8 sm:py-10 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead light eyebrow="The Diploma core" title={<>IA, Extended Essay and TOK, <span className="text-[#f0c96a]">done the right way</span></>} intro="Coursework and the core can decide a Diploma. We guide the thinking and the planning; the work your child submits is always their own." />
          <div className="grid md:grid-cols-3 gap-3 sm:gap-4">
            {CORE.map(({ Icon, name, what, help }) => (
              <div key={name} className="rounded-2xl bg-white/[0.06] border border-white/15 p-5 backdrop-blur-sm">
                <span className="flex w-10 h-10 items-center justify-center rounded-xl bg-[#f0c96a]/15 text-[#f0c96a] mb-3"><Icon className="w-5 h-5" /></span>
                <h3 className="text-[15px] font-extrabold text-white mb-1">{name}</h3>
                <p className="text-[12.5px] text-blue-100/80 leading-relaxed mb-3">{what}</p>
                <ul className="space-y-1.5">
                  {help.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[12.5px] text-white/90"><CheckCircle2 className="w-3.5 h-3.5 text-[#f0c96a] mt-0.5 shrink-0" /><span>{h}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 max-w-3xl mx-auto flex items-start gap-2.5 rounded-xl bg-white/[0.07] border border-white/15 px-4 py-3 text-[12px] sm:text-[12.5px] text-blue-50/90 leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-[#f0c96a] shrink-0 mt-0.5" />
            <p>The IB treats work written by someone else as academic misconduct, which can cost a student the Diploma. Our tutors never write IA, EE or TOK work for a student.</p>
          </div>
        </div>
      </section>

      {/* ── 06 IGCSE TO IB ── */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Switching curriculum"
            title={<>From IGCSE to the <span className="text-[#0f4a9b]">IB Diploma</span></>}
            intro="Many Al Ain students start the Diploma after IGCSE at a British-curriculum school. Here is what changes."
          />
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="hidden sm:grid grid-cols-[1fr_1fr_1.3fr] bg-[#0f4a9b] text-white text-[12px] font-extrabold uppercase tracking-wider">
              <span className="px-4 py-2.5">&nbsp;</span><span className="px-4 py-2.5">IGCSE</span><span className="px-4 py-2.5">IB Diploma</span>
            </div>
            {SWITCH.map((r, i) => (
              <div key={r.label} className={`grid sm:grid-cols-[1fr_1fr_1.3fr] text-[13px] ${i % 2 ? 'bg-[#f8fafd]' : 'bg-white'} border-t border-slate-100 first:border-t-0`}>
                <span className="px-4 pt-3 sm:py-3 font-extrabold text-[#0a1f3d]">{r.label}</span>
                <span className="px-4 py-1 sm:py-3 text-[#4a5a72]"><span className="sm:hidden font-bold text-[#8a6a1f]">IGCSE: </span>{r.a}</span>
                <span className="px-4 pb-3 sm:py-3 text-[#0a1f3d] font-semibold"><span className="sm:hidden font-bold text-[#0f4a9b]">IB: </span>{r.b}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-[#f4f7fc] border border-[#0f4a9b]/10 px-4 py-2.5 text-xs sm:text-[12.5px] text-[#2c3e5c] leading-relaxed">
            <Info className="w-4 h-4 text-[#0f4a9b] shrink-0 mt-0.5" />
            <p>
              Still at IGCSE? See our <a href="/igcse-tutor-al-ain" className="font-bold text-[#0f4a9b] underline underline-offset-2">IGCSE Tutor Al Ain</a> page, or compare with the <a href="/a-level-tutor-al-ain" className="font-bold text-[#0f4a9b] underline underline-offset-2">A-Level route in Al Ain</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── 07 HOW WE MATCH ── */}
      <section className="py-8 sm:py-10 bg-[#f4f7fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Getting started" title={<>How we match your <span className="text-[#0f4a9b]">IB tutor</span></>} intro="From a WhatsApp message to a fixed weekly IB lesson in three steps." />
          <ol className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            {STEPS.map(({ Icon, title, text }, i) => (
              <li key={title} className="relative rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <span className="absolute top-4 right-4 text-[11px] font-extrabold text-[#0f4a9b]/40">0{i + 1}</span>
                <span className="flex w-10 h-10 items-center justify-center rounded-xl bg-[#0f4a9b]/8 text-[#0f4a9b] mb-3"><Icon className="w-5 h-5" /></span>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] mb-1.5">{title}</h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#4a5a72] leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
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
