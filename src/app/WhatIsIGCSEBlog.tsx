import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  GraduationCap,
  Layers,
  Globe2,
  CalendarDays,
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema } from './shared/schemas';

/*
 * Target keywords: what is IGCSE (primary), IGCSE full form, IGCSE meaning, Cambridge IGCSE,
 * IGCSE curriculum, IGCSE grades, IGCSE subjects, IGCSE exam dates and results.
 * Different intent from /blogs/igcse-vs-gcse-curriculum-differences-uae (a comparison):
 * this is the definition / explainer page, and it links to the comparison for the GCSE detail.
 */

const BOOKING_URL = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20read%20your%20guide%20to%20IGCSE%20and%20would%20like%20help%20for%20my%20child.';

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

const BLOG = {
  title: 'What Is IGCSE? Full Form, Meaning, Grades | Ustaad',
  h1: 'What Is IGCSE? Full Form, Meaning, Subjects and Grades Explained for UAE Parents',
  titleLine1: 'What Is IGCSE?',
  titleLine2: 'Full Form, Meaning, Subjects and Grades Explained for UAE Parents',
  categoryBadge: 'USTAAD UAE | PARENT GUIDANCE',
  slug: 'what-is-igcse-full-form-meaning-uae',
  description:
    'IGCSE full form and meaning for UAE parents: who sets the exams, subjects, Core and Extended tiers, A*–G and 9–1 grades, exam dates and results.',
  subtitle:
    'IGCSE is the qualification most students in UAE British-curriculum schools sit at the end of Year 11. Here is what the letters stand for, how the exams work, how they are graded, and what comes next, in plain language.',
  heroImage: '/images/blogs/what-is-igcse-full-form-meaning-uae-hero.webp',
  heroAlt:
    'IGCSE full form spelled out letter by letter: International General Certificate of Secondary Education',
  heroCaption: 'Five words, one qualification: the International General Certificate of Secondary Education.',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  publishedText: '13 November 2026',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Every guide is checked for accuracy and parent clarity',
  reviewerUrl: '/editorial',
  readTime: '10 min read',
  tags: [
    'What Is IGCSE',
    'IGCSE Full Form',
    'Cambridge IGCSE',
    'Edexcel International GCSE',
    'IGCSE Grades',
    'IGCSE Exam Dates',
    'UAE Schools',
    'Parent Guidance',
  ],
};

const FAQS = [
  {
    q: 'What is the full form of IGCSE?',
    a: 'IGCSE stands for International General Certificate of Secondary Education. It is an international version of the UK GCSE, usually taken at the end of Year 11, around age 16.',
  },
  {
    q: 'Is IGCSE the same as GCSE?',
    a: 'No. They are taken at the same age and lead to the same next steps, but GCSE is written for schools in England, while IGCSE is written for international schools, with different syllabuses, set texts and, in some subjects, different grading. Most UAE British-curriculum schools offer IGCSE.',
  },
  {
    q: 'Which grade is IGCSE equivalent to?',
    a: 'IGCSE is usually completed at the end of Year 11, which is the same stage as Grade 10 in the American system and Grade 10 in the Indian CBSE system. It is a school-leaving level qualification, not a university-entry one: students normally go on to A-Levels, the IB Diploma or another post-16 course.',
  },
  {
    q: 'How many subjects do students take at IGCSE?',
    a: 'There is no fixed number. In UAE British-curriculum schools most students take between 7 and 10, including English, Maths and at least one science. Universities look more closely at the grades in relevant subjects than at the total count.',
  },
  {
    q: 'Is IGCSE recognised in the UAE?',
    a: 'Yes. Cambridge IGCSE and Pearson Edexcel International GCSE are taught in many private schools approved by KHDA in Dubai and ADEK in Abu Dhabi. For UAE university entry, students also need the right post-16 qualifications, and the Ministry sets equivalency rules, so check the current requirements with the school.',
  },
  {
    q: 'When are IGCSE results released?',
    a: 'For Cambridge IGCSE, results from the May/June exams come out in August, and results from the October/November exams come out in January. Pearson Edexcel publishes summer results in August too. Schools confirm the exact date each year.',
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
  { label: 'IGCSE full form and meaning', id: 'igcse-full-form-and-meaning' },
  { label: 'Who sets IGCSE exams', id: 'who-sets-igcse-exams' },
  { label: 'Who takes IGCSE in the UAE', id: 'who-takes-igcse-in-the-uae' },
  { label: 'IGCSE subjects: how many and which', id: 'igcse-subjects' },
  { label: 'Core and Extended: the two tiers', id: 'core-and-extended-tiers' },
  { label: 'How IGCSE is graded', id: 'how-igcse-is-graded' },
  { label: 'How IGCSE is assessed', id: 'how-igcse-is-assessed' },
  { label: 'IGCSE exam dates and results', id: 'igcse-exam-dates-and-results' },
  { label: 'What comes after IGCSE', id: 'what-comes-after-igcse' },
  { label: 'How parents can help', id: 'how-parents-can-help' },
  { label: 'Frequently asked questions', id: 'faqs' },
  { label: 'Sources and further reading', id: 'sources' },
];

const RELATED_GUIDES = [
  {
    slug: 'igcse-vs-gcse-curriculum-differences-uae',
    title: 'IGCSE vs GCSE: Curriculum Differences UAE Parents Should Know',
  },
  {
    slug: 'how-to-choose-igcse-subjects-uae',
    title: 'How to Help Your Child Choose IGCSE Subjects',
  },
  {
    slug: 'read-uae-school-report-card',
    title: 'How to Read a UAE School Report Card',
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


/* Coded graphic: IGCSE at a glance */
function AtAGlance() {
  const items = [
    { icon: GraduationCap, label: 'Usual age', value: '14 to 16', note: 'Years 10 and 11' },
    { icon: CalendarDays, label: 'Course length', value: '2 years', note: 'Exams at the end of Year 11' },
    { icon: Layers, label: 'Typical load', value: '7 to 10', note: 'subjects per student' },
    { icon: Globe2, label: 'Main boards', value: '2', note: 'Cambridge and Pearson Edexcel' },
  ];
  return (
    <div className="my-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      {items.map(({ icon: Icon, label, value, note }) => (
        <div key={label} className="rounded-2xl border border-[#0f4a9b]/12 bg-gradient-to-b from-white to-[#f4f7fc] p-3.5 text-center shadow-sm">
          <span className="mx-auto mb-2 flex w-9 h-9 items-center justify-center rounded-xl bg-[#f6efdc] text-[#0a3a79]"><Icon className="w-[18px] h-[18px]" /></span>
          <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#8a6a1f]">{label}</span>
          <span className="block text-xl font-extrabold text-[#0a1f3d] leading-tight my-0.5">{value}</span>
          <span className="block text-[11.5px] text-gray-500 leading-snug">{note}</span>
        </div>
      ))}
    </div>
  );
}

/* Coded graphic: the two IGCSE grade scales and where they line up */
function GradeBridge() {
  const nine = ['9', '8', '7', '6', '5', '4', '3', '2', '1'];
  const letters = ['A*', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const tone = (g: string) => (['9', '8', '7', 'A*', 'A'].includes(g) ? 'gold' : ['6', '5', '4', 'B', 'C'].includes(g) ? 'blue' : 'light');
  const cls = (g: string) => {
    const t = tone(g);
    return t === 'gold' ? 'text-white' : t === 'blue' ? 'bg-[#0f4a9b] text-white' : 'bg-[#e6ecf6] text-[#0a1f3d]';
  };
  const gold = { background: 'linear-gradient(135deg,#f0c96a,#A8892A)' };
  return (
    <div className="my-7 rounded-2xl border border-[#0f4a9b]/15 bg-[#f8fafd] p-4 sm:p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">Two grade scales</span>
        <span className="text-[11px] font-bold text-[#0f4a9b] bg-white px-2.5 py-0.5 rounded-md border border-[#0f4a9b]/20">9 is the top grade, then A*</span>
      </div>
      {[['9 to 1 scale', nine], ['A* to G scale', letters]].map(([label, row]) => (
        <div key={label as string} className="mb-3 last:mb-0">
          <span className="block text-[11px] font-bold text-gray-500 mb-1.5">{label as string}</span>
          <div className="flex gap-1 sm:gap-1.5">
            {(row as string[]).map((g) => (
              <span key={g} className={`flex-1 h-9 sm:h-10 rounded-lg flex items-center justify-center text-sm sm:text-base font-extrabold ${cls(g)}`} style={tone(g) === 'gold' ? gold : undefined}>{g}</span>
            ))}
          </div>
        </div>
      ))}
      <ul className="mt-4 grid sm:grid-cols-3 gap-2 text-[12px] text-gray-600">
        <li className="rounded-lg bg-white border border-slate-200 px-3 py-2"><strong className="text-[#0a1f3d]">Grade 7</strong> lines up with the bottom of grade A</li>
        <li className="rounded-lg bg-white border border-slate-200 px-3 py-2"><strong className="text-[#0a1f3d]">Grade 4</strong> lines up with the bottom of grade C</li>
        <li className="rounded-lg bg-white border border-slate-200 px-3 py-2"><strong className="text-[#0a1f3d]">Grade 1</strong> lines up with the bottom of grade G</li>
      </ul>
    </div>
  );
}

export default function WhatIsIGCSEBlog() {
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
            timeRequired: 'PT10M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Parent Guidance', url: '/blogs/parent-guidance' },
            { name: 'What Is IGCSE?', url: canonical },
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
          <a href="/blogs/parent-guidance" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">Parent Guidance</a>
          <span>/</span>
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[180px]">What Is IGCSE?</span>
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
              A family moves to Dubai, enrols their son in Year 10, and the welcome pack says he will spend the next two years working towards his IGCSEs. The letters appear on every timetable, report and parents&apos; evening invitation, but nobody stops to explain them.
            </p>
            <p>
              This guide does. It covers what IGCSE stands for, who sets the exams, which subjects students take, how the two tiers and two grade scales work, when results arrive, and what the qualification leads to. If you want the side-by-side comparison with the UK GCSE, read our{' '}
              <a href="/blogs/igcse-vs-gcse-curriculum-differences-uae" className={linkCls}>IGCSE vs GCSE guide</a>{' '}
              after this one.
            </p>
          </div>

          {/* Quick answer */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl text-white shadow-md" style={{ background: THEME_GRADIENT }}>
            <span className="block text-[10px] uppercase tracking-[0.14em] text-[#F5D77F] font-extrabold mb-1.5">Quick answer</span>
            <p className="text-[13.5px] leading-relaxed text-white/95">
              IGCSE stands for International General Certificate of Secondary Education. It is a two-year qualification, usually taken in Years 10 and 11 (ages 14 to 16), set mainly by Cambridge International or Pearson Edexcel. Students take one exam per subject, often 7 to 10 subjects, graded A* to G or 9 to 1. It leads on to A-Levels, the IB Diploma or other post-16 courses.
            </p>
          </div>

          <AtAGlance />

          {/* 01 */}
          <SectionHeading num="01" id="igcse-full-form-and-meaning">IGCSE full form and meaning</SectionHeading>
          <div className={proseCls}>
            <p>
              <strong>IGCSE stands for International General Certificate of Secondary Education.</strong> Each word tells you something:
            </p>
            <CheckList
              items={[
                <><strong>International:</strong> written for schools outside the UK, with content and examples that suit students in many countries, including the UAE.</>,
                <><strong>General:</strong> it covers broad subjects, not a narrow vocational specialism.</>,
                <><strong>Certificate:</strong> each subject is graded and certified separately, so a student finishes with a set of IGCSEs, not one overall score.</>,
                <><strong>Secondary Education:</strong> it marks the end of the middle stage of secondary school, before post-16 study.</>,
              ]}
            />
            <p>
              Cambridge introduced the IGCSE in 1988 as an international alternative to the UK GCSE. Today it is one of the most widely taken qualifications for 16-year-olds in international schools, and the default end-of-Year-11 exam in most UAE British-curriculum schools.
            </p>
          </div>

          {/* 02 */}
          <SectionHeading num="02" id="who-sets-igcse-exams">Who sets IGCSE exams</SectionHeading>
          <div className={proseCls}>
            <p>
              &ldquo;IGCSE&rdquo; is used loosely for two qualifications from different exam boards. Your child&apos;s school chooses the board subject by subject, and some schools mix them.
            </p>
          </div>
          <ResponsiveTable
            headers={['Board', 'Name of the qualification', 'Grades', 'Example code (Maths)']}
            widths={['w-[24%]', 'w-[30%]', 'w-[22%]', 'w-[24%]']}
            rows={[
              ['Cambridge International (CAIE)', 'Cambridge IGCSE', 'A* to G, or 9 to 1 for some syllabuses', '0580'],
              ['Pearson Edexcel', 'Edexcel International GCSE', '9 to 1', '4MA1'],
              ['OxfordAQA', 'OxfordAQA International GCSE', '9 to 1', 'Offered in fewer UAE schools'],
            ]}
          />
          <div className={proseCls}>
            <p>
              The quickest way to tell which one your child sits is the syllabus code on the exam entry or subject handbook. A four-digit Cambridge code such as 0580 or 0610 means Cambridge IGCSE; a code such as 4MA1 means Edexcel International GCSE. The board matters, because each one has its own papers, mark schemes and past papers to practise with.
            </p>
          </div>

          {/* 03 */}
          <SectionHeading num="03" id="who-takes-igcse-in-the-uae">Who takes IGCSE in the UAE</SectionHeading>
          <div className={proseCls}>
            <p>
              IGCSE is taught in British-curriculum and many international schools across Dubai, Abu Dhabi, Al Ain, Sharjah and the Northern Emirates. These private schools are regulated by KHDA in Dubai and ADEK in Abu Dhabi.
            </p>
            <p>
              Most students start their IGCSE courses in Year 10, at around 14, and sit the final exams in May or June of Year 11. Some schools begin parts of the content in Year 9 or let strong students sit a subject early, such as a second language or Maths. Students joining from the American, Indian or IB systems usually join at the start of Year 10, and the first term is where gaps in prior knowledge show up most.
            </p>
          </div>

          {/* 04 */}
          <SectionHeading num="04" id="igcse-subjects">IGCSE subjects: how many and which</SectionHeading>
          <div className={proseCls}>
            <p>
              Cambridge alone offers more than 70 IGCSE subjects, but each school offers a smaller menu. In UAE schools most students take between 7 and 10 IGCSEs, made up of:
            </p>
            <CheckList
              items={[
                <><strong>Core subjects</strong> nearly everyone takes: English (First Language or as a Second Language), Mathematics and at least one science route.</>,
                <><strong>Options</strong> chosen in Year 9: for example Business, Economics, Computer Science, Geography, History, Art or a modern language.</>,
                <><strong>UAE requirements:</strong> Arabic, Islamic Education (for Muslim students) and UAE Social Studies are taught alongside, following Ministry rules, even when they are not sat as IGCSEs.</>,
              ]}
            />
            <p>
              Science can be taken as three separate sciences, as Co-ordinated Sciences (a double award) or as Combined Science (a single award). Our guide on{' '}
              <a href="/blogs/how-to-choose-igcse-subjects-uae" className={linkCls}>how to choose IGCSE subjects</a>{' '}
              explains which route keeps which A-Level doors open.
            </p>
          </div>

          {/* 05 */}
          <SectionHeading num="05" id="core-and-extended-tiers">Core and Extended: the two tiers</SectionHeading>
          <div className={proseCls}>
            <p>
              In subjects such as Maths and the sciences, students are entered for one of two tiers. The tier decides which papers they sit and which grades they can reach.
            </p>
          </div>
          <ResponsiveTable
            headers={['Tier', 'Board name', 'Grades available', 'Best for']}
            widths={['w-[18%]', 'w-[26%]', 'w-[26%]', 'w-[30%]']}
            rows={[
              ['Lower tier', 'Core (Cambridge), Foundation (Edexcel)', 'Up to C (Cambridge) or 5 (Edexcel)', 'Students securing a solid pass'],
              ['Higher tier', 'Extended (Cambridge), Higher (Edexcel)', 'A* to E (Cambridge) or 9 to 4 (Edexcel)', 'Students aiming for top grades or that subject at A-Level'],
            ]}
          />
          <NarrativeBox>
            The school makes the tier decision, usually after Year 10 tests and mocks. If your child wants a subject at A-Level, ask early whether they are on track for the higher tier, because the lower tier caps the grade.
          </NarrativeBox>

          {/* 06 */}
          <SectionHeading num="06" id="how-igcse-is-graded">How IGCSE is graded</SectionHeading>
          <div className={proseCls}>
            <p>
              IGCSE uses two grade scales. Cambridge IGCSE is mostly graded <strong>A* to G</strong>, with some syllabuses graded <strong>9 to 1</strong>. Edexcel International GCSE uses <strong>9 to 1</strong>, where 9 is the highest. A result below the lowest grade is shown as U (ungraded).
            </p>
          </div>
          <GradeBridge />
          <div className={proseCls}>
            <p>
              On the 9 to 1 scale, <strong>grade 4 is a standard pass</strong> and <strong>grade 5 a strong pass</strong>. Sixth forms in the UAE often ask for a 6 or 7 (a B or an A) in the subjects a student wants to take at A-Level, and some ask for more in Maths and the sciences.
            </p>
          </div>

          {/* 07 */}
          <SectionHeading num="07" id="how-igcse-is-assessed">How IGCSE is assessed</SectionHeading>
          <div className={proseCls}>
            <p>Most of the grade comes from written exams sat at the end of the course. Depending on the subject, assessment can also include:</p>
            <CheckList
              items={[
                <><strong>Practical work</strong> in the sciences, either as a practical test or a written paper about experiments, such as the Cambridge Alternative to Practical paper.</>,
                <><strong>Coursework</strong> in some subjects, such as Art and Design, and in optional coursework routes some schools choose.</>,
                <><strong>Speaking and listening</strong> components in languages and some English syllabuses.</>,
              ]}
            />
            <p>
              Because the final papers carry most of the marks, how a student answers matters as much as what they know. Learning the exam&apos;s{' '}
              <a href="/blogs/command-words-igcse-a-level-exams" className={linkCls}>command words</a>{' '}
              and practising with real{' '}
              <a href="/blogs/igcse-preparation-past-papers-final-step" className={linkCls}>past papers</a>{' '}
              is where many marks are won.
            </p>
          </div>

          {/* 08 */}
          <SectionHeading num="08" id="igcse-exam-dates-and-results">IGCSE exam dates and results</SectionHeading>
          <div className={proseCls}>
            <p>IGCSE exams run in fixed exam series each year. UAE schools mostly use the summer series:</p>
          </div>
          <ResponsiveTable
            headers={['Exam series', 'Board', 'Results usually released']}
            widths={['w-[34%]', 'w-[30%]', 'w-[36%]']}
            rows={[
              ['May/June', 'Cambridge and Edexcel', 'August'],
              ['October/November', 'Cambridge', 'January'],
              ['January', 'Edexcel, for many subjects', 'March'],
            ]}
          />
          <div className={proseCls}>
            <p>
              The November and January series are mostly used for resits or for students who need a result before the summer. Exact timetables and results dates are published by the boards each year, and your school&apos;s exams officer confirms them.
            </p>
          </div>

          {/* 09 */}
          <SectionHeading num="09" id="what-comes-after-igcse">What comes after IGCSE</SectionHeading>
          <div className={proseCls}>
            <p>IGCSE is a stepping stone, not the end of school. In Year 12 most UAE students move on to one of these routes:</p>
            <CheckList
              items={[
                <><strong>A-Levels</strong> (AS in Year 12, A2 in Year 13), usually three or four subjects. See our{' '}
                  <a href="/a-level" className={linkCls}>A-Level tutoring</a> page.</>,
                <><strong>The IB Diploma</strong>, six subjects plus the core, for students who want breadth.</>,
                <><strong>BTEC and other applied courses</strong>, offered by some schools for career-focused routes.</>,
              ]}
            />
            <p>
              Sixth forms set entry grades for each subject, so IGCSE results decide which post-16 courses are open. For UAE university entry, the Ministry sets equivalency rules for the British system, covering the number of IGCSE and A-Level passes. Check the current rules with your school, as they can change.
            </p>
          </div>

          {/* 10 */}
          <SectionHeading num="10" id="how-parents-can-help">How parents can help</SectionHeading>
          <div className={proseCls}>
            <CheckList
              items={[
                'Find out the board and syllabus code for every subject, and keep the list somewhere you can see it.',
                'Ask which tier your child is entered for in Maths and the sciences, and what it would take to move up.',
                'Note the mock exam dates in Year 11; mocks are the best early signal of the final grade.',
                <>Look at the subject reports for trends across terms, not one test score. Our guide to <a href="/blogs/read-uae-school-report-card" className={linkCls}>reading a UAE school report card</a> helps.</>,
                'Keep sleep, routine and a weekly revision rhythm steady in Year 11, rather than relying on last-minute cramming.',
              ]}
            />
            <p>
              If a subject is slipping, or your child has joined from another curriculum, a few months of targeted support in Year 10 is worth more than a rush before the exams. Ustaad teaches online and one-to-one, matched to the exact board and syllabus, with{' '}
              <a href="/igcse-tutor-dubai" className={linkCls}>IGCSE tutors in Dubai</a>,{' '}
              <a href="/igcse-tutor-abu-dhabi" className={linkCls}>IGCSE tutors in Abu Dhabi</a> and{' '}
              <a href="/igcse-tutor-al-ain" className={linkCls}>IGCSE tutors in Al Ain</a>. You can also read about our{' '}
              <a href="/igcse" className={linkCls}>IGCSE tutoring</a> across the UAE.
            </p>
          </div>
          <NarrativeBox>
            You do not need to know the syllabus to help. Knowing the board, the tier and the mock dates already puts you ahead of most of the year group.
          </NarrativeBox>

          {/* FAQs */}
          <SectionHeading num="11" id="faqs">Frequently asked questions</SectionHeading>
          <div className="space-y-3 my-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-[#0a1f3d] text-sm sm:text-base hover:bg-slate-50 transition cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#0f4a9b] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Sources */}
          <SectionHeading num="12" id="sources">Sources and further reading</SectionHeading>
          <div className="text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed my-4 bg-[#f8fafd] p-5 rounded-2xl border border-slate-200">
            <p>
              <strong>Cambridge International:</strong>{' '}
              <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/" target="_blank" rel="noopener noreferrer" className={linkCls}>Cambridge IGCSE: subjects, syllabuses and grading</a>.
            </p>
            <p>
              <strong>Pearson Edexcel:</strong>{' '}
              <a href="https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses.html" target="_blank" rel="noopener noreferrer" className={linkCls}>Edexcel International GCSE qualifications</a>.
            </p>
            <p>
              <strong>OxfordAQA:</strong>{' '}
              <a href="https://www.oxfordaqa.com/" target="_blank" rel="noopener noreferrer" className={linkCls}>OxfordAQA International GCSEs</a>.
            </p>
            <p>
              <strong>KHDA (Dubai)</strong> and <strong>ADEK (Abu Dhabi)</strong> regulate private schools in each emirate; your school&apos;s exams officer confirms entries, tiers and exam dates.
            </p>
          </div>

          {/* CTA */}
          <div className="my-10 rounded-2xl p-6 sm:p-8 border border-white/10 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] rounded-full mb-3 text-[10px] font-extrabold tracking-wider uppercase">
              FIRST SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              Starting IGCSE, or worried about a subject?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              Every first 1-hour lesson includes a free 15-minute orientation, so your child and their tutor can agree where to focus first. Lessons are online and 1-to-1, matched to the exact IGCSE board and syllabus.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a href={BOOKING_URL}
                className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[210px] h-11 px-6 rounded-full font-bold text-white hover:brightness-110 transition text-sm shadow-md whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book First Session
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Ustaad about IGCSE support"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[210px] h-11 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-sm transition shadow-md whitespace-nowrap">
                <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Us
              </a>
            </div>
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
                Nimra Shahzada writes about the study problems UAE parents see at home: children who revise for hours but still lose marks, homework that never gets finished, and exam stress that builds before mocks.
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-3">Related Guides on Parent Guidance</h3>
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
