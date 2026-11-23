import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  User,
  Clock,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Mail,
  Home,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema } from './shared/schemas';

/*
 * Target keywords: IB grade boundaries (primary), IB exams (primary), IB predicted grades,
 * IB Diploma points / 45 points, IB results day, IB passing score.
 * Owner page for these terms in the approved keyword plan (16 Nov 2026).
 * Different intent from /ib-curriculum (what the IB is and tutoring) and from
 * /blogs/how-to-read-examiner-reports-igcse-a-level (examiner reports, not grading).
 */

const BOOKING_URL = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20read%20your%20guide%20to%20IB%20exams%20and%20grade%20boundaries%20and%20would%20like%20IB%20support.';

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

const BLOG = {
  title: 'IB Exams and Grade Boundaries: UAE Guide 2027 | Ustaad',
  h1: 'IB Exams and Grade Boundaries Explained: How 1–7 Grades, 45 Points and Predicted Grades Work for UAE Students',
  titleLine1: 'IB Exams and Grade Boundaries Explained:',
  titleLine2: 'How 1–7 Grades, 45 Points and Predicted Grades Work for UAE Students',
  categoryBadge: 'USTAAD UAE | ACADEMIC & EXAM SKILLS',
  slug: 'ib-exams-grade-boundaries-uae',
  description:
    'How IB exams are graded: the 1–7 scale, 45 points, how grade boundaries are set, predicted grades, results day and remarks, explained for UAE students.',
  subtitle:
    'IB Diploma students in the UAE sit their final exams in May 2027. Here is how those papers turn into a 1–7 grade and a score out of 45, why grade boundaries move every session, and how to use them in revision.',
  heroImage: '/images/blogs/ib-exams-grade-boundaries-uae-hero.webp',
  heroAlt:
    'IB Diploma points explained: six subjects graded 1 to 7, plus 3 core points for TOK and the Extended Essay, for a maximum of 45 and 24 to pass',
  heroCaption: 'Six subjects graded 1 to 7, up to 3 core points, 45 in total: the arithmetic behind every IB Diploma score.',
  datePublished: '2026-11-16',
  dateModified: '2026-11-16',
  publishedText: '16 November 2026',
  author: 'Ustaad Subject Specialists',
  authorRole: 'Practising teachers and exam board examiners',
  authorUrl: '/authors/ustaad-subject-specialists',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Every guide is checked for accuracy and parent clarity',
  reviewerUrl: '/editorial',
  readTime: '8 min read',
  tags: [
    'IB Exams',
    'IB Grade Boundaries',
    'IB Diploma',
    'Predicted Grades',
    'IB Results Day',
    'Exam Technique',
    'UAE Schools',
  ],
};

const FAQS = [
  {
    q: 'What is the pass mark for the IB Diploma?',
    a: 'The minimum is 24 points out of 45. Points alone are not enough: CAS must be completed, TOK and the Extended Essay cannot be graded E, and there are subject-level conditions, such as no grade 1 and minimum point totals across Higher Level and Standard Level subjects. Your IB coordinator can check a student against the full list.',
  },
  {
    q: 'Are IB grade boundaries the same every year?',
    a: 'No. Grade boundaries are set again for every subject, level and component after each exam session, once the papers have been marked. A paper that proves harder than usual gets lower boundaries, so the same raw mark can earn a different grade in different sessions.',
  },
  {
    q: 'When are IB results released in 2027?',
    a: 'For the May session, the IB releases results to candidates on 6 July at 12:00 GMT, which is 4pm in the UAE. Students log in to the IB candidate results website with the personal code and PIN their coordinator gives them. Check the exact date with your school each year.',
  },
  {
    q: 'How are IB predicted grades decided?',
    a: 'Teachers predict each subject grade from coursework, internal assessment drafts, class tests and, above all, mock exams. Schools give predictions to universities early in the final year, and later submit predicted grades to the IB for every subject before the May exams.',
  },
  {
    q: 'Can an IB grade be remarked?',
    a: 'Yes, through an enquiry upon results, which the IB coordinator submits for the student. For the May session the IB deadline is 15 September, and schools often set an earlier one. A re-mark can raise or lower a grade, and the fee is refunded if the grade changes.',
  },
  {
    q: 'What happened to IB exams in the UAE in May 2026?',
    a: 'Final IB exams in the UAE and other Gulf states were cancelled because of regional security concerns. Students received grades through the IB’s Non-Exam Contingency Measure, which draws on coursework and teacher evidence instead of final papers. Results were released on 6 July 2026.',
  },
];

const FAQ_SCHEMA_DATA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const TOC_ITEMS = [
  { label: 'How IB Diploma exams work', id: 'how-ib-exams-work' },
  { label: 'The 1–7 scale and the 45-point total', id: 'ib-grades-and-45-points' },
  { label: 'What IB grade boundaries are', id: 'what-are-ib-grade-boundaries' },
  { label: 'IB predicted grades', id: 'ib-predicted-grades' },
  { label: 'IB results day, remarks and retakes', id: 'ib-results-day' },
  { label: 'How to use grade boundaries in revision', id: 'use-grade-boundaries-in-revision' },
  { label: 'Frequently asked questions', id: 'faqs' },
  { label: 'Sources and further reading', id: 'sources' },
];

const RELATED_GUIDES = [
  {
    slug: 'how-to-read-examiner-reports-igcse-a-level',
    title: 'How to Read an Examiner Report for IGCSE, A-Level and IB',
  },
  {
    slug: 'command-words-igcse-a-level-exams',
    title: 'The One Word in Every Exam Question That Decides Your Marks',
  },
  {
    slug: 'mock-exams-uae-not-what-they-were',
    title: 'Mock Exams Are Not What They Were Last Year: What UAE Parents Need to Know',
  },
];

const linkCls = 'text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]';
const proseCls = 'space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify';

function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-10 mb-4 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/50 tracking-wider mb-1">{num}</span>
      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] leading-snug tracking-tight">{children}</h2>
    </div>
  );
}

function NarrativeBox({ label = 'PARENT TAKEAWAY', children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/15 bg-gradient-to-br from-white to-[#f8fafd] p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="h-4 w-4 text-[#C7A24A]" />
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#0a1f3d]">{label}</span>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed italic">{children}</div>
    </div>
  );
}

function CheckList({ items, icon = 'check' }: { items: React.ReactNode[]; icon?: 'check' | 'cross' }) {
  return (
    <ul className="space-y-2.5 my-3 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          {icon === 'check' ? (
            <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
          ) : (
            <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-1" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SocialShare({ url, title }: { url: string; title: string }) {
  const enc = encodeURIComponent(url);
  const encT = encodeURIComponent(title);
  return (
    <div className="flex items-center gap-1.5 ml-auto">
      <a href={`https://twitter.com/intent/tweet?url=${enc}&text=${encT}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500 hover:text-[#0f4a9b]" aria-label="Share on X">
        <span className="text-xs font-bold">X</span>
      </a>
      <a href={`https://wa.me/?text=${encT}%20${enc}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 transition text-[#25D366]" aria-label="Share on WhatsApp">
        <MessageCircle className="h-3.5 w-3.5" />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1877f2]/10 hover:bg-[#1877f2]/20 transition text-[#1877f2] font-bold text-xs" aria-label="Share on Facebook">f</a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${enc}&title=${encT}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 transition text-[#0a66c2] font-bold text-xs" aria-label="Share on LinkedIn">in</a>
      <a href={`mailto:?subject=${encT}&body=${enc}`}
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500" aria-label="Share via Email">
        <Mail className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function TOC({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/10 bg-[#f8fafd] overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-3.5 text-left">
        <div className="flex items-center gap-2">
          <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0f4a9b]">In This Guide</span>
        </div>
        <span className="lg:hidden text-[#0f4a9b]">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <div className={`lg:block ${open ? 'block' : 'hidden'}`}>
        <div className="px-5 pb-3.5 space-y-0.5">
          {TOC_ITEMS.map((item, i) => (
            <a key={i} href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              className="flex items-center gap-2.5 group py-0.5">
              <span className="shrink-0 text-[10px] font-extrabold text-[#0f4a9b]/35 w-4">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[13px] text-gray-500 group-hover:text-[#0f4a9b] transition-colors leading-snug">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Stacked-on-mobile table, matching the Winter Break guide's mobile card layout */
function ResponsiveTable({ headers, rows, widths }: { headers: string[]; rows: React.ReactNode[][]; widths: string[] }) {
  return (
    <div className="my-6 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
        <thead className="hidden sm:table-header-group bg-[#0a1f3d] text-white">
          <tr>
            {headers.map((h, i) => (
              <th key={h} className={`px-3.5 py-3 font-bold align-top ${widths[i]}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {rows.map((row, ri) => (
            <tr key={ri} className="block sm:table-row even:bg-slate-50/60">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  data-label={headers[ci]}
                  className={
                    ci === 0
                      ? 'block sm:table-cell px-3.5 py-2.5 sm:align-top font-bold text-white bg-[#0f4a9b] sm:bg-transparent sm:text-[#0a1f3d]'
                      : "block sm:table-cell px-3.5 py-2 sm:py-2.5 sm:align-top text-gray-700 before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-[#0f4a9b]/70 before:mb-0.5 sm:before:hidden"
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


/* Coded graphic: how the 45 points add up */
function PointsBuilder() {
  const parts = [
    { label: '3 Higher Level subjects', calc: '3 × 7', pts: 21 },
    { label: '3 Standard Level subjects', calc: '3 × 7', pts: 21 },
    { label: 'TOK + Extended Essay', calc: 'core matrix', pts: 3 },
  ];
  return (
    <div className="my-7 rounded-2xl border border-[#0f4a9b]/15 bg-[#f8fafd] p-4 sm:p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">How 45 points add up</span>
        <span className="text-[11px] font-bold text-[#0f4a9b] bg-white px-2.5 py-0.5 rounded-md border border-[#0f4a9b]/20">24 points is the minimum to pass</span>
      </div>
      <div className="space-y-2">
        {parts.map((p) => (
          <div key={p.label} className="flex items-center gap-3 rounded-xl bg-white border border-slate-200 px-3 py-2.5">
            <span className="flex-1 text-[13px] font-semibold text-[#0a1f3d] leading-snug">{p.label}</span>
            <span className="text-[11px] text-gray-500 whitespace-nowrap">{p.calc}</span>
            <span className="w-10 text-right text-lg font-extrabold text-[#0f4a9b]">{p.pts}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl px-3 py-3 text-white" style={{ background: 'linear-gradient(135deg,#0a1f3d,#0f3a7a)' }}>
        <span className="text-[13px] font-bold">Maximum IB Diploma score</span>
        <span className="text-2xl font-extrabold text-[#F5D77F]">45</span>
      </div>
      <div className="mt-3" aria-hidden="true">
        <div className="relative h-2.5 rounded-full bg-[#e6ecf6] overflow-hidden">
          <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${(24 / 45) * 100}%`, background: 'linear-gradient(90deg,#0f4a9b,#1e5ba8)' }} />
        </div>
        <div className="mt-1 flex justify-between text-[10.5px] font-semibold text-gray-500">
          <span>0</span><span>24 pass</span><span>45</span>
        </div>
      </div>
    </div>
  );
}

/* Coded graphic: one raw mark, two sessions, two grades */
function BoundaryShift() {
  return (
    <div className="my-7 rounded-2xl border border-[#0f4a9b]/15 bg-white p-4 sm:p-5 shadow-sm">
      <span className="block text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider mb-1">Why boundaries move</span>
      <p className="text-[12px] text-gray-500 mb-4">Illustration only. Real boundaries differ by subject, level and session.</p>
      {[
        { session: 'Session A: harder paper', cut: 62, grade: '7' },
        { session: 'Session B: easier paper', cut: 70, grade: '6' },
      ].map((s) => (
        <div key={s.session} className="mb-4 last:mb-0">
          <div className="flex items-center justify-between text-[12.5px] font-semibold text-[#0a1f3d] mb-1.5">
            <span>{s.session}</span>
            <span>Grade 7 from <strong className="text-[#0f4a9b]">{s.cut}%</strong></span>
          </div>
          <div className="relative h-7 rounded-lg bg-[#e6ecf6]">
            <div className="absolute inset-y-0 rounded-r-lg" style={{ left: `${s.cut}%`, right: 0, background: 'linear-gradient(135deg,#f0c96a,#A8892A)' }} />
            <div className="absolute -top-1 -bottom-1 w-[3px] rounded bg-[#0a1f3d]" style={{ left: '66%' }} />
            <span className="absolute top-1/2 -translate-y-1/2 text-[11px] font-extrabold text-white" style={{ right: '8px' }}>7</span>
          </div>
          <span className="block mt-1 text-[11.5px] text-gray-600">A student on <strong>66%</strong> gets a <strong>{s.grade}</strong></span>
        </div>
      ))}
    </div>
  );
}

export default function IBExamsGradeBoundariesBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const [tocOpen, setTocOpen] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://ustaad.ae${canonical}`;

  return (
    <Layout>
      <SEOHead
        title={BLOG.title}
        description={BLOG.description}
        canonical={canonical}
        ogImage={BLOG.heroImage}
        author={BLOG.author}
        placename="Dubai, UAE"
        ogType="article"
        preloadHeroImage={BLOG.heroImage}
        schema={[
          articleSchema({
            title: BLOG.h1,
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: { name: BLOG.author, url: BLOG.authorUrl, jobTitle: BLOG.authorRole },
            reviewer: { type: 'Organization', name: BLOG.reviewer, url: BLOG.reviewerUrl },
            image: BLOG.heroImage,
            timeRequired: 'PT8M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Academic & Exam Skills', url: '/blogs/academic-exam-skills' },
            { name: 'IB Exams and Grade Boundaries', url: canonical },
          ]),
          FAQ_SCHEMA_DATA,
        ]}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1"><Home className="h-3 w-3" /> Home</a>
          <span>/</span>
          <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          <span>/</span>
          <a href="/blogs/academic-exam-skills" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">Academic &amp; Exam Skills</a>
          <span>/</span>
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[180px]">IB Grade Boundaries</span>
        </div>
      </div>

      <article className="pt-7 pb-16 bg-white antialiased">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">{BLOG.categoryBadge}</span>
            </div>

            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-justify">{BLOG.subtitle}</p>

            <div className="mb-4 mt-2 space-y-2">
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Written by:</span>{' '}
                  <a href={BLOG.authorUrl} className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">{BLOG.author}</a>
                  <span className="block sm:inline">{' '}<a href={BLOG.authorUrl} className="text-gray-500 hover:text-[#0f4a9b]">| {BLOG.authorRole}</a></span>
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Reviewed by:</span>{' '}
                  <a href={BLOG.reviewerUrl} className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">{BLOG.reviewer}</a>
                  <span className="block sm:inline">{' '}<span className="text-gray-500">| {BLOG.reviewerRole}</span></span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-400 pt-1">
                <time dateTime={BLOG.datePublished} className="flex items-center gap-1.5 min-w-0">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  <span className="leading-snug">Published {BLOG.publishedText}</span>
                </time>
                <span className="text-gray-300" aria-hidden="true">|</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" /><span>{BLOG.readTime}</span></span>
                <SocialShare url={shareUrl} title={BLOG.title} />
              </div>
            </div>
          </motion.div>

          <figure className="my-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/9] bg-slate-100">
              <img src={BLOG.heroImage} alt={BLOG.heroAlt} width={1376} height={774} className="w-full h-full object-cover block" loading="eager" fetchPriority="high" />
            </div>
            <figcaption className="mt-2 text-center text-xs text-gray-400 italic">{BLOG.heroCaption}</figcaption>
          </figure>

          <TOC open={tocOpen} setOpen={setTocOpen} />

          {/* Opening */}
          <div className={proseCls}>
            <p>
              Ask an IB student in Dubai what they need for their university offer and they will usually give you a number: 36, 38, perhaps 40. Ask them how a 66% on Physics Paper 2 becomes a 6 or a 7, and most cannot say. That gap matters, because the way IB exams are graded should shape the way students revise.
            </p>
            <p>
              The question is sharper in the UAE than elsewhere. In May 2026, final IB exams across the UAE were cancelled and grades were awarded without exams. The class sitting in May 2027 will be the first in two years to have every grade decided in the exam hall, and many have never sat a full IB paper under real conditions.
            </p>
          </div>

          {/* Quick answer */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl text-white shadow-md" style={{ background: THEME_GRADIENT }}>
            <span className="block text-[10px] uppercase tracking-[0.14em] text-[#F5D77F] font-extrabold mb-1.5">Quick answer</span>
            <p className="text-[13.5px] leading-relaxed text-white/95">
              Each IB Diploma subject is graded from 1 to 7. Six subjects give up to 42 points, and Theory of Knowledge with the Extended Essay add up to 3 more, for a maximum of 45. A student needs at least 24 points, plus a few other conditions, to earn the Diploma. Grade boundaries are the raw marks needed for each grade; the IB sets them again after every exam session, so they change from year to year.
            </p>
          </div>

          {/* 01 */}
          <SectionHeading num="01" id="how-ib-exams-work">How IB Diploma exams work</SectionHeading>
          <div className={proseCls}>
            <p>
              The IB runs two exam sessions a year. UAE schools almost all use the <strong>May session</strong>, which runs from late April into May of the second Diploma year (Year 13, or DP2). The <strong>November session</strong> is used mainly by schools in the southern hemisphere and by students retaking a subject.
            </p>
            <p>
              Every subject has two parts to its grade:
            </p>
            <CheckList
              items={[
                <><strong>External assessment:</strong> the written exam papers in May, marked by IB examiners. These usually carry most of the grade.</>,
                <><strong>Internal assessment (IA):</strong> coursework such as a Maths exploration, a science investigation or an oral, marked by the teacher and checked by an IB moderator.</>,
              ]}
            />
          </div>
          <h3 className="mt-6 mb-2 text-base sm:text-lg font-extrabold text-[#0a1f3d]">Internal assessment counts before May</h3>
          <div className={proseCls}>
            <p>
              Because the IA is finished during the course, part of every grade is decided long before the exams. A strong IA gives a student a cushion going into May; a rushed one is marks that cannot be won back in the exam hall.
            </p>
          </div>

          {/* 02 */}
          <SectionHeading num="02" id="ib-grades-and-45-points">The 1–7 scale and the 45-point total</SectionHeading>
          <div className={proseCls}>
            <p>
              Each of the six subjects, three at <a href="/dp-hl" className={linkCls}>Higher Level</a> and three at <a href="/dp-sl" className={linkCls}>Standard Level</a> for most students, is graded from 1 (lowest) to 7 (highest). Theory of Knowledge (TOK) and the Extended Essay (EE) are graded A to E and combined in a matrix worth up to 3 points.
            </p>
          </div>
          <PointsBuilder />
          <h3 className="mt-6 mb-2 text-base sm:text-lg font-extrabold text-[#0a1f3d]">What it takes to pass the Diploma</h3>
          <div className={proseCls}>
            <p>24 points is the threshold, but not the only rule. A student also needs to:</p>
            <CheckList
              items={[
                'Complete CAS (Creativity, Activity, Service), which earns no points but is required.',
                'Avoid an E in TOK or the Extended Essay.',
                'Avoid a grade 1 in any subject, and meet the minimum point totals across Higher Level and Standard Level subjects.',
              ]}
            />
            <p>
              University offers are usually written as a total, such as 36 points, often with a minimum grade in named HL subjects, such as a 6 in HL Maths. That second condition is where many students fall short.
            </p>
          </div>

          {/* 03 */}
          <SectionHeading num="03" id="what-are-ib-grade-boundaries">What IB grade boundaries are</SectionHeading>
          <div className={proseCls}>
            <p>
              A <strong>grade boundary</strong> is the lowest mark that earns a grade. Examiners mark papers in raw marks; boundaries convert those marks into the 1 to 7 scale. Each component, such as Paper 1, Paper 2 and the IA, has its own boundaries, and the subject grade comes from the weighted total.
            </p>
          </div>
          <h3 className="mt-6 mb-2 text-base sm:text-lg font-extrabold text-[#0a1f3d]">Why boundaries change every session</h3>
          <div className={proseCls}>
            <p>
              The IB sets boundaries after marking, in a grade award meeting just before results. Senior examiners judge where the 7, the 4 and the 3 should fall, using sample scripts, the grade descriptors, statistics and the previous year&apos;s standard; the other boundaries are set between them. If a paper turns out harder than usual, the boundaries drop, so students are not penalised for a tougher paper.
            </p>
          </div>
          <BoundaryShift />
          <h3 className="mt-6 mb-2 text-base sm:text-lg font-extrabold text-[#0a1f3d]">Where to find past grade boundaries</h3>
          <div className={proseCls}>
            <p>
              The IB publishes boundaries to schools after each session, so the DP coordinator or subject teacher is the person to ask. Unofficial copies circulate online, but they are often for a different session or time zone, so use them with care.
            </p>
          </div>

          {/* 04 */}
          <SectionHeading num="04" id="ib-predicted-grades">IB predicted grades</SectionHeading>
          <div className={proseCls}>
            <p>
              Predicted grades are teachers&apos; best estimate of each final grade. There are two sets, and they are easy to confuse:
            </p>
            <CheckList
              items={[
                <><strong>Predictions for universities</strong>, given early in DP2 for applications through UCAS and other systems. For students applying abroad from the UAE, these decide which offers they receive.</>,
                <><strong>Predictions sent to the IB</strong> in spring, before the May exams, for every subject.</>,
              ]}
            />
            <p>
              Both lean heavily on mock exams and IA drafts. That is why the DP1 end-of-year exams and the DP2 mocks matter so much: they are the evidence teachers predict from. In 2026, when UAE exams were cancelled, grades were awarded through the IB&apos;s Non-Exam Contingency Measure, which relied on coursework and teacher evidence. Strong work during the course protected those students.
            </p>
          </div>
          <NarrativeBox label="STUDENT TAKEAWAY">
            Treat every mock as the exam it might replace. A prediction is built from the work your teachers have already seen.
          </NarrativeBox>

          {/* 05 */}
          <SectionHeading num="05" id="ib-results-day">IB results day, remarks and retakes</SectionHeading>
          <div className={proseCls}>
            <p>The dates that matter after the May 2027 papers:</p>
          </div>
          <ResponsiveTable
            headers={['What', 'When', 'What to do']}
            widths={['w-[28%]', 'w-[30%]', 'w-[42%]']}
            rows={[
              ['May session results', '6 July, 12:00 GMT (4pm UAE)', 'Log in to the IB candidate results site with the code and PIN from your coordinator'],
              ['Enquiry upon results (re-mark)', 'IB deadline 15 September; schools set earlier dates', 'Ask the coordinator; a re-mark can raise or lower the grade'],
              ['Retake', 'November session, or the next May', 'Weigh it against the university offer and its deadlines'],
            ]}
          />
          <div className={proseCls}>
            <p>
              Results also show two codes worth knowing: <strong>P</strong> means a grade is still pending, and <strong>N</strong> means no grade could be awarded because a requirement was not completed. Students with UK offers should check that their results are being released to UCAS. For university entry in the UAE, confirm each university&apos;s IB requirements directly, as they differ.
            </p>
          </div>

          {/* 06 */}
          <SectionHeading num="06" id="use-grade-boundaries-in-revision">How to use grade boundaries in revision</SectionHeading>
          <div className={proseCls}>
            <p>
              Boundaries are most useful as a revision tool, not a prediction. Used well, they turn a vague goal (&ldquo;get a 7&rdquo;) into a mark target for each paper.
            </p>
            <CheckList
              items={[
                'Mark every past paper against the boundaries for that same session, not this year’s guess.',
                'Work out the mark gap to the next grade for each component. A 5 to a 6 is often 6 to 8 marks on one paper.',
                'Find which component costs the most marks, often Paper 2 in the sciences or the data-response questions in Economics, and practise that first.',
                <>Read the examiner&apos;s comments as well as the mark scheme. Our guide to <a href="/blogs/how-to-read-examiner-reports-igcse-a-level" className={linkCls}>reading examiner reports</a> shows how.</>,
                <>Learn the <a href="/blogs/command-words-igcse-a-level-exams" className={linkCls}>command words</a>: &ldquo;explain&rdquo;, &ldquo;evaluate&rdquo; and &ldquo;discuss&rdquo; ask for different answers.</>,
                'Finish the IA early. It is the one component where time spent now is guaranteed to count.',
              ]}
            />
            <p>
              For students who missed real exams in 2026, timed practice matters even more. Sitting a full paper under exam conditions is a skill, and our article on <a href="/blogs/exam-stamina-uae-students" className={linkCls}>exam stamina</a> explains how to build it before May. Students who want a specialist to mark past papers with them can work online, one to one, with an <a href="/ib-tutor-dubai" className={linkCls}>IB tutor in Dubai</a> or an <a href="/ib-tutor-abu-dhabi" className={linkCls}>IB tutor in Abu Dhabi</a>.
            </p>
          </div>
          <NarrativeBox label="PARENT TAKEAWAY">
            Ask your child for one number per subject: how many marks they are from the next grade on their last past paper. That number is more useful than any overall score.
          </NarrativeBox>

          {/* FAQs */}
          <SectionHeading num="07" id="faqs">Frequently asked questions</SectionHeading>
          <div className="space-y-3 my-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white">
                  <h3 className="m-0">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-[#0a1f3d] text-sm sm:text-base hover:bg-slate-50 transition cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={`ib-faq-${index}`}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#0f4a9b] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </h3>
                  {/* Always in the HTML (indexable); shown when open */}
                  <div id={`ib-faq-${index}`} hidden={!isOpen} className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sources */}
          <SectionHeading num="08" id="sources">Sources and further reading</SectionHeading>
          <div className="text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed my-4 bg-[#f8fafd] p-5 rounded-2xl border border-slate-200">
            <p>
              <strong>International Baccalaureate:</strong>{' '}
              <a href="https://ibo.org/programmes/diploma-programme/assessment-and-exams/getting-results/assessment-faq/" target="_blank" rel="noopener noreferrer" className={linkCls}>Diploma Programme assessment FAQ</a>{' '}
              and{' '}
              <a href="https://ibo.org/research/assessment-research/research-studies/statistical-grade-boundary-setting-approaches/" target="_blank" rel="noopener noreferrer" className={linkCls}>research on grade boundary setting</a>.
            </p>
            <p>
              <strong>UCAS:</strong>{' '}
              <a href="https://qips.ucas.com/qip/international-baccalaureate-ib-diploma" target="_blank" rel="noopener noreferrer" className={linkCls}>International Baccalaureate Diploma qualification information</a>.
            </p>
            <p>
              <strong>Khaleej Times:</strong>{' '}
              <a href="https://www.khaleejtimes.com/uae/education/ib-results-day-2026-dates-ucas-guidance-scores" target="_blank" rel="noopener noreferrer" className={linkCls}>IB results day 2026: dates, UCAS guidance and scores</a>{' '}
              and{' '}
              <a href="https://www.khaleejtimes.com/uae/education/may-2026-ib-results-out" target="_blank" rel="noopener noreferrer" className={linkCls}>May 2026 IB results</a>.
            </p>
            <p>Your school&apos;s DP coordinator confirms exam timetables, boundaries for past sessions and deadlines for re-marks.</p>
          </div>

          {/* CTA */}
          <div className="my-10 rounded-2xl p-6 sm:p-8 border border-white/10 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] rounded-full mb-3 text-[10px] font-extrabold tracking-wider uppercase">
              FIRST SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              A few marks from the next grade before May?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              An IB specialist can mark a recent past paper with your child, find the component costing the most marks and plan the months to May. Lessons are online and 1-to-1, and every first 1-hour lesson includes a free 15-minute orientation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a href={BOOKING_URL}
                className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[210px] h-11 px-6 rounded-full font-bold text-white hover:brightness-110 transition text-sm shadow-md whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book First Session
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Ustaad about IB support"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[210px] h-11 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-sm transition shadow-md whitespace-nowrap">
                <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Us
              </a>
            </div>
            <p className="mt-4 text-[11px] text-white/70">
              IB support by city: <a href="/ib-tutor-dubai" className="underline hover:text-white">IB tutors in Dubai</a> · <a href="/ib-tutor-abu-dhabi" className="underline hover:text-white">IB tutors in Abu Dhabi</a> · <a href="/ib-curriculum" className="underline hover:text-white">IB tutoring across the UAE</a>
            </p>
          </div>

          {/* Author & Reviewer */}
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-[#f8fafd]">
              <div className="flex items-center gap-1.5 mb-2">
                <User className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[11px] font-bold text-[#0f4a9b] uppercase tracking-wider">About the Author</span>
              </div>
              <a href={BLOG.authorUrl} className="font-bold text-xs text-[#0a1f3d] hover:text-[#0f4a9b] block mb-1">{BLOG.author}</a>
              <p className="text-xs text-gray-500 leading-relaxed">
                A group of practising teachers and exam board examiners who write Ustaad&apos;s exam guides. Many teach in UAE schools and share their subjects and experience rather than their names.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-[#f8fafd]">
              <div className="flex items-center gap-1.5 mb-2">
                <ShieldCheck className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[11px] font-bold text-[#0f4a9b] uppercase tracking-wider">Reviewed By</span>
              </div>
              <a href={BLOG.reviewerUrl} className="font-bold text-xs text-[#0a1f3d] hover:text-[#0f4a9b] block mb-1">{BLOG.reviewer}</a>
              <p className="text-xs text-gray-500 leading-relaxed">Ustaad Editorial Team. Every guide is checked for accuracy and parent clarity before it is published.</p>
            </div>
          </div>

          {/* Related */}
          <div className="my-8 p-5 rounded-2xl border border-slate-200 bg-white">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-3">Related Guides on Academic &amp; Exam Skills</h3>
            <div className="space-y-2 text-xs">
              {RELATED_GUIDES.map((guide) => (
                <a key={guide.slug} href={`/blogs/${guide.slug}`}
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                  <span className="font-semibold">{guide.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="my-8 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-wider">Tags</span>
            <div className="flex flex-wrap gap-1.5">
              {BLOG.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 text-gray-600">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
