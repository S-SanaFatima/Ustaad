import { useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Calculator, BookOpen, FlaskConical, Atom, Briefcase, PenLine,
  ChevronDown, MessageCircle, Search, ClipboardCheck, CalendarCheck, CheckCircle2, Info,
} from 'lucide-react';
import { Layout, StatsBar, HowOnlineSessions3DSection, RelatedContent } from './shared';
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

const COMPARE = [
  { label: 'Who sets it', gcse: 'UK boards: AQA, Pearson Edexcel, OCR', igcse: 'Cambridge (CAIE) or Pearson Edexcel International' },
  { label: 'Grades', gcse: '9 to 1 in every subject', igcse: 'A* to G (Cambridge) or 9 to 1 (Edexcel International)' },
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
  { when: 'Year 10, autumn', title: 'Start of the GCSE course', text: 'A short diagnostic shows which Year 9 topics are shaky before new GCSE content builds on them.' },
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
  { q: 'Does my child in Al Ain take GCSE or IGCSE?', a: 'Many British-curriculum schools in Al Ain enter students for IGCSE, and some use UK GCSE in certain subjects. The quickest check is the code on your child’s exam entry or subject handbook. Codes such as 8300, 1MA1 or J560 are UK GCSE. Codes such as 0580 or 4MA1 are IGCSE, and our IGCSE Tutor Al Ain page covers those.' },
  { q: 'Are your GCSE lessons online or in person in Al Ain?', a: 'All lessons are live and online, one-to-one, with a shared whiteboard. Students in Al Ain work with the same subject specialists as families in Abu Dhabi and Dubai, without travelling to a centre.' },
  { q: 'Which GCSE exam boards do you tutor?', a: 'AQA, Pearson Edexcel and OCR. Many schools use different boards for different subjects, so we match each subject to a tutor who knows that board’s papers and mark scheme.' },
  { q: 'What is the difference between Foundation and Higher tier?', a: 'In tiered subjects such as Maths and the sciences, Foundation tier papers lead to grades 1 to 5 and Higher tier papers to grades 4 to 9. If your child needs a 6 or above for A-Level, they usually need to sit Higher tier. The school makes the final entry decision.' },
  { q: 'What GCSE grade counts as a pass?', a: 'Grade 4 is a standard pass and grade 5 is a strong pass. Grade 7 is roughly the old A, and grade 9 is above the old A*. Sixth forms often ask for a 6 or 7 in the subjects a student wants to take at A-Level.' },
  { q: 'Can you help with a GCSE resit?', a: 'Yes. GCSE Maths and English Language can be resat in November as well as in the summer, for students who meet the board’s age rule. Other subjects are resat in the summer series. A resit plan starts from the marks lost on the last attempt.' },
  { q: 'When should we start GCSE tutoring?', a: 'Starting in Year 10 gives the most time, because gaps can be fixed before they affect new topics. Many families start in Year 11, before the mock exams. A short exam-focused plan is also possible in the final weeks before the May and June papers.' },
];

/* ── Small building blocks ───────────────────────────────────────────── */

function SectionHead({ eyebrow, title, intro, light = false }: { eyebrow: string; title: ReactNode; intro?: string; light?: boolean }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      <span className={`inline-block text-[11px] font-bold uppercase tracking-[0.16em] mb-3 ${light ? 'text-[#f0d58c]' : 'text-[#8a6a1f]'}`}>{eyebrow}</span>
      <h2 className={`text-2xl sm:text-3xl lg:text-[34px] font-extrabold leading-tight mb-3 ${light ? 'text-white' : 'text-[#0a1f3d]'}`}>{title}</h2>
      {intro && <p className={`text-[15px] leading-relaxed ${light ? 'text-blue-100/80' : 'text-[#4a5a72]'}`}>{intro}</p>}
    </div>
  );
}

function HeroGraphic() {
  // 9–1 grade ladder: bars rise from grade 1 to grade 9, with the two tier ranges marked.
  const bars = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <svg viewBox="0 0 420 300" className="w-full h-auto" role="img" aria-label="GCSE grades 1 to 9, with Foundation tier covering grades 1 to 5 and Higher tier covering grades 4 to 9">
      <defs>
        <linearGradient id="gal-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1e5ba8" />
          <stop offset="100%" stopColor="#5b8fd6" />
        </linearGradient>
        <linearGradient id="gal-gold" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#A8892A" />
          <stop offset="100%" stopColor="#f0c96a" />
        </linearGradient>
      </defs>
      <line x1="30" y1="240" x2="400" y2="240" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      {bars.map((g, i) => {
        const x = 40 + i * 40;
        const h = 22 + g * 21;
        const top = g >= 7;
        return (
          <g key={g}>
            <rect x={x} y={240 - h} width="26" height={h} rx="6" fill={top ? 'url(#gal-gold)' : 'url(#gal-bar)'} opacity={g === 4 ? 1 : 0.92} />
            <text x={x + 13} y="258" textAnchor="middle" fontSize="13" fontWeight="800" fill={top ? '#f0c96a' : 'rgba(255,255,255,0.85)'} fontFamily="ui-sans-serif, system-ui">{g}</text>
          </g>
        );
      })}
      {/* Tier ranges */}
      <line x1="40" y1="276" x2="226" y2="276" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" />
      <text x="40" y="293" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="ui-monospace, monospace">Foundation 1–5</text>
      <line x1="160" y1="270" x2="386" y2="270" stroke="#f0c96a" strokeWidth="2" strokeLinecap="round" />
      <text x="386" y="293" textAnchor="end" fontSize="11" fill="#f0c96a" fontFamily="ui-monospace, monospace">Higher 4–9</text>
      {/* Pass marker */}
      <line x1="40" y1="131" x2="400" y2="131" stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="4 5" />
      <text x="34" y="124" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="ui-monospace, monospace">grade 4 = standard pass</text>
      {/* Board chips */}
      {[['AQA', 40, 54], ['Edexcel', 104, 76], ['OCR', 190, 54]].map(([b, x, w]) => (
        <g key={b as string}>
          <rect x={x as number} y="10" width={w as number} height="26" rx="13" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
          <text x={(x as number) + (w as number) / 2} y="27" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="ui-sans-serif, system-ui">{b}</text>
        </g>
      ))}
    </svg>
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
      <section className="relative -mt-16 overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #060f22 0%, #0a1f3d 45%, #0f3a7a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-60" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 lg:pt-36 lg:pb-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
            <nav aria-label="Breadcrumb" className="text-[12px] text-blue-100/60 mb-4">
              <a href="/" className="hover:text-white">Home</a> <span className="mx-1">/</span>
              <a href="/gcse" className="hover:text-white">GCSE</a> <span className="mx-1">/</span>
              <span className="text-blue-100/90">GCSE Tutor Al Ain</span>
            </nav>
            <h1 className="font-extrabold tracking-tight leading-[1.08] mb-4 text-[clamp(2rem,5vw,3.3rem)]">
              GCSE Tutor Al Ain{' '}
              <span className="block mt-1" style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                1-to-1 Online Tutoring
              </span>
            </h1>
            <p className="text-blue-100/85 text-[15px] sm:text-base leading-relaxed max-w-xl mb-6">
              Live online GCSE tuition for Al Ain students, matched to your child’s exam board (AQA, Pearson Edexcel or OCR) and tier. Maths, English and the sciences, from the first Year 10 topic to the last Year 11 paper.
            </p>
            <ul className="flex flex-wrap gap-2 mb-8" aria-label="What is included">
              {['Years 10 & 11', 'AQA · Edexcel · OCR', 'Foundation & Higher', 'Mock paper marking', 'Free 15-min orientation'].map((t) => (
                <li key={t} className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-white/90 bg-white/10 border border-white/15">{t}</li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <a href={BOOKING} className="inline-flex items-center justify-center h-12 px-7 rounded-full font-bold text-[15px] text-white shadow-lg hover:brightness-110 transition" style={{ background: GOLD }}>
                Book First Session
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full font-bold text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg transition">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="rounded-3xl border border-white/12 bg-white/[0.04] p-5 sm:p-7 backdrop-blur-sm shadow-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f0d58c] mb-3">GCSE grades at a glance</p>
            <HeroGraphic />
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ── 02 GCSE OR IGCSE ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Check this first"
            title={<>GCSE or IGCSE? <span className="text-[#0f4a9b]">Check before you book</span></>}
            intro="Parents in Al Ain often hear both names. They are different qualifications with different papers, so we confirm which one your child sits before choosing a tutor."
          />
          <div className="rounded-2xl border border-[#0f4a9b]/12 overflow-hidden shadow-[0_8px_30px_rgba(15,74,155,0.06)]">
            <div className="hidden md:grid grid-cols-[0.8fr_1.1fr_1.1fr] bg-[#0a1f3d] text-white text-[13px] font-bold">
              <div className="px-5 py-3.5" />
              <div className="px-5 py-3.5">UK GCSE <span className="text-[#f0d58c]">(this page)</span></div>
              <div className="px-5 py-3.5">IGCSE / International GCSE</div>
            </div>
            {COMPARE.map((r, i) => (
              <div key={r.label} className={`grid md:grid-cols-[0.8fr_1.1fr_1.1fr] text-[14px] ${i % 2 ? 'bg-[#f8fafd]' : 'bg-white'} border-t border-[#0f4a9b]/8 first:border-t-0`}>
                <div className="px-5 pt-4 md:py-4 font-bold text-[#0a1f3d]">{r.label}</div>
                <div className="px-5 py-2 md:py-4 text-[#2c3e5c]"><span className="md:hidden block text-[11px] font-bold uppercase tracking-wider text-[#8a6a1f] mb-0.5">UK GCSE</span>{r.gcse}</div>
                <div className="px-5 pb-4 pt-1 md:py-4 text-[#4a5a72]"><span className="md:hidden block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">IGCSE</span>{r.igcse}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#f4f7fc] border border-[#0f4a9b]/10 px-5 py-4 text-[14px] text-[#2c3e5c] leading-relaxed">
            <Info className="w-5 h-5 text-[#0f4a9b] shrink-0 mt-0.5" />
            <p>
              Sitting IGCSE instead? See our <a href="/igcse-tutor-al-ain" className="font-bold text-[#0f4a9b] underline underline-offset-2">IGCSE Tutor Al Ain</a> page. For the full differences, read{' '}
              <a href="/blogs/igcse-vs-gcse-curriculum-differences-uae" className="font-bold text-[#0f4a9b] underline underline-offset-2">IGCSE vs GCSE in the UAE</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 GRADES AND TIERS ── */}
      <section className="py-14 lg:py-20 bg-[#f4f7fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Grades and tiers"
            title={<>What the <span className="text-[#0f4a9b]">9 to 1 grades</span> mean</>}
            intro="GCSEs are graded from 9, the highest, down to 1. In Maths and the sciences your child is also entered for a Foundation or Higher tier, which sets the grades they can reach."
          />
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <div className="bg-white rounded-2xl border border-[#0f4a9b]/10 p-5 sm:p-6 shadow-[0_6px_24px_rgba(15,74,155,0.06)]">
              <ol className="flex flex-col gap-1.5" aria-label="GCSE grades from 9 to 1">
                {GRADES.map((r) => (
                  <li key={r.g} className="grid grid-cols-[44px_1fr] items-center gap-3">
                    <span className={`h-9 rounded-lg flex items-center justify-center font-extrabold text-[15px] ${r.band === 'top' ? 'text-white' : r.band === 'mid' ? 'bg-[#0f4a9b] text-white' : 'bg-[#e6ecf6] text-[#0a1f3d]'}`}
                      style={r.band === 'top' ? { background: GOLD } : undefined}>{r.g}</span>
                    <span className={`text-[14px] ${r.note ? 'text-[#0a1f3d] font-semibold' : 'text-gray-400'}`}>{r.note || '—'}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl border border-[#0f4a9b]/10 p-6 shadow-[0_6px_24px_rgba(15,74,155,0.06)]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[17px] font-extrabold text-[#0a1f3d]">Foundation tier</h3>
                  <span className="text-[12px] font-bold px-2.5 py-1 rounded-full bg-[#e6ecf6] text-[#0a1f3d]">Grades 1 to 5</span>
                </div>
                <p className="text-[14px] text-[#4a5a72] leading-relaxed">Shorter steps and more accessible questions. The highest grade available is a 5, a strong pass.</p>
              </div>
              <div className="bg-white rounded-2xl border border-[#C7A24A]/40 p-6 shadow-[0_6px_24px_rgba(199,162,74,0.10)]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[17px] font-extrabold text-[#0a1f3d]">Higher tier</h3>
                  <span className="text-[12px] font-bold px-2.5 py-1 rounded-full text-white" style={{ background: GOLD }}>Grades 4 to 9</span>
                </div>
                <p className="text-[14px] text-[#4a5a72] leading-relaxed">Harder, multi-step questions. Needed for grades 6 to 9, which sixth forms often ask for in A-Level subjects.</p>
              </div>
              <div className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 100%)' }}>
                <h3 className="text-[16px] font-extrabold mb-1.5">Not sure which tier fits?</h3>
                <p className="text-[14px] text-blue-100/85 leading-relaxed">The school decides the entry. After a few lessons, the tutor can tell you honestly where your child is working, so you can talk it through with the teacher.</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-[13px] text-[#4a5a72]">English Language and English Literature are not tiered: every student sits the same papers.</p>
        </div>
      </section>

      {/* ── 04 SUBJECTS BY BOARD ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Subjects"
            title={<>GCSE subjects we tutor, <span className="text-[#0f4a9b]">by exam board</span></>}
            intro="Each subject has its own specification code. We match the tutor to that code, so lessons follow the same topics, papers and mark scheme as your child’s school."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUBJECTS.map((s) => (
              <article key={s.name} className="group flex flex-col rounded-2xl border border-[#0f4a9b]/10 bg-white p-6 shadow-[0_4px_20px_rgba(15,74,155,0.05)] hover:shadow-[0_14px_34px_rgba(15,74,155,0.12)] hover:-translate-y-1 hover:border-[#0f4a9b]/25 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-11 h-11 rounded-xl bg-[#f6efdc] text-[#0a3a79] flex items-center justify-center shrink-0"><s.Icon className="w-5 h-5" /></span>
                  <h3 className="text-[17px] font-extrabold text-[#0a1f3d] leading-snug">{s.name}</h3>
                </div>
                <p className="text-[12px] font-mono font-semibold text-[#0f4a9b] bg-[#f4f7fc] border border-[#0f4a9b]/10 rounded-lg px-3 py-2 mb-3">{s.codes}</p>
                <p className="text-[14px] text-[#4a5a72] leading-relaxed flex-1 mb-4">{s.focus}</p>
                <a href={s.href} className="text-[14px] font-bold text-[#0f4a9b] hover:text-[#1e5ba8]">{s.link}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 YEAR 10 TO RESULTS ── */}
      <section className="py-14 lg:py-20 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead light eyebrow="The GCSE years" title={<>From Year 10 to <span className="text-[#f0c96a]">results day</span></>} intro="The two GCSE years have clear checkpoints. Here is what we focus on at each one." />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIMELINE.map((t, i) => (
              <motion.li key={t.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-extrabold text-[#0a1f3d]" style={{ background: 'linear-gradient(135deg,#f0c96a,#C7A24A)' }}>{i + 1}</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#f0d58c]">{t.when}</span>
                </div>
                <h3 className="text-[16px] font-extrabold mb-1.5">{t.title}</h3>
                <p className="text-[14px] text-blue-100/85 leading-relaxed">{t.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 06 HOW ONLINE SESSIONS RUN ── */}
      <HowOnlineSessions3DSection location="Al Ain" title="How Online GCSE Lessons Run from Al Ain" />

      {/* ── 07 HOW WE MATCH ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Getting started" title={<>How we match your <span className="text-[#0f4a9b]">GCSE tutor</span></>} intro="Three steps, from your first message to a regular weekly lesson." />
          <ol className="grid md:grid-cols-3 gap-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl bg-[#f4f7fc] border border-[#0f4a9b]/10 p-6">
                <span className="absolute top-5 right-5 text-[32px] font-black text-[#0f4a9b]/10 leading-none">{String(i + 1).padStart(2, '0')}</span>
                <span className="w-11 h-11 rounded-xl bg-white text-[#0f4a9b] border border-[#0f4a9b]/10 flex items-center justify-center mb-4"><s.Icon className="w-5 h-5" /></span>
                <h3 className="text-[17px] font-extrabold text-[#0a1f3d] mb-2">{s.title}</h3>
                <p className="text-[14px] text-[#4a5a72] leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-[14px] text-[#2c3e5c]">
            {['Tutor matched to the exact board and tier', 'Mock and past papers marked against the mark scheme', 'Lessons at times that fit the school week'].map((t) => (
              <li key={t} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#0f4a9b] mt-0.5 shrink-0" />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 08 FAQ ── */}
      <section className="py-14 lg:py-20 bg-[#f4f7fc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="FAQ" title="GCSE Tutor Al Ain: FAQs" />
          <div className="flex flex-col gap-3">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="rounded-2xl bg-white border border-[#0f4a9b]/8 overflow-hidden" style={{ boxShadow: isOpen ? '0 10px 30px rgba(15,74,155,0.07)' : '0 2px 10px rgba(15,74,155,0.03)' }}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen} className="w-full text-left px-5 py-4 flex items-center justify-between gap-4">
                    <h3 className="font-bold text-[#0a1f3d] text-[15px]">{f.q}</h3>
                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#0f4a9b] text-white' : 'bg-[#f4f7fc] text-[#0f4a9b]'}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden">
                        <p className="px-5 pb-5 pt-1 text-[14px] text-[#4a5a72] leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 09 CTA ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Start GCSE tutoring in Al Ain</h2>
            <p className="text-blue-100/85 text-[15px] leading-relaxed max-w-xl mx-auto mb-7">
              Tell us the subject, exam board and tier. We will match a GCSE specialist and add a free 15-minute orientation to the first lesson.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a href={BOOKING} className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[210px] h-12 px-7 rounded-full font-bold text-[15px] text-white shadow-md hover:brightness-110 transition" style={{ background: GOLD }}>Book First Session</a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[210px] h-12 px-7 rounded-full font-bold text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md transition">
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
