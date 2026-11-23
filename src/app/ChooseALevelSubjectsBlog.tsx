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
  Users,
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema } from './shared/schemas';

/*
 * Target keyword: how to choose A-Level subjects (primary).
 * Secondary: A-Level subject choices, how many A-Levels should I take, A-Level subjects
 * for medicine, A-Levels for engineering, A-Level options UAE / Dubai, A-Levels for UAE universities.
 * Different intent from /blogs/how-to-choose-igcse-subjects-uae (Year 9 IGCSE options),
 * /a-level (service page) and /blogs/a-level-tutoring-uae-independent-thinking (study approach).
 */

const BOOKING_URL = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20read%20your%20guide%20to%20choosing%20A-Level%20subjects%20and%20would%20like%20support%20for%20my%20child.';

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

const BLOG = {
  title: 'How to Choose A-Level Subjects: UAE Parent Guide | Ustaad',
  h1: 'How to Choose A-Level Subjects: A UAE Parent Guide to Year 11 Options',
  titleLine1: 'How to Choose A-Level Subjects:',
  titleLine2: 'A UAE Parent Guide to Year 11 Options',
  categoryBadge: 'USTAAD UAE | PARENT GUIDANCE',
  slug: 'how-to-choose-a-level-subjects-uae',
  description:
    'How many A-Levels to take, which subjects medicine, engineering and economics ask for, UAE university checks and the mistakes to avoid in Year 11.',
  subtitle:
    'Most Year 11 students in UAE British-curriculum schools choose their A-Levels between late autumn and spring. Here is how to pick subjects that keep the right university doors open, without choosing for the wrong reasons.',
  heroImage: '/images/blogs/choose-a-level-subjects-uae-parent-hero.webp',
  heroAlt:
    'Year 11 student and her mother at a kitchen table in Dubai reviewing a sixth form options booklet and an A-Level subject choice form',
  heroCaption: 'Three or four subjects, chosen in Year 11, shape the degrees your child can apply for.',
  datePublished: '2026-11-23',
  dateModified: '2026-11-23',
  publishedText: '23 November 2026',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and family guidance for UAE students',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Every guide is checked for accuracy and parent clarity',
  reviewerUrl: '/editorial',
  readTime: '8 min read',
  tags: [
    'A-Level Subject Choices',
    'Year 11 Options',
    'Sixth Form',
    'University Entry Requirements',
    'UAE Universities',
    'Cambridge and Edexcel',
    'Parent Guidance',
  ],
};

const FAQS = [
  {
    q: 'How many A-Levels should my child take?',
    a: 'Most students take three. University offers are usually based on three A-Levels, so a fourth only helps when it adds something, such as Further Maths for engineering or a strong student who wants breadth. Three good grades are worth more than four weaker ones.',
  },
  {
    q: 'Which A-Levels are needed for medicine?',
    a: 'Chemistry is required by almost every medical school, and most also ask for Biology. A third science or Maths is a common choice, though some schools accept any third subject. Always check each university’s own course page, as requirements differ.',
  },
  {
    q: 'Which A-Levels are needed for engineering?',
    a: 'Maths and Physics are the usual requirements for engineering degrees. Further Maths is helpful for the most competitive courses, and Chemistry is needed for chemical engineering.',
  },
  {
    q: 'Do UAE universities accept A-Levels?',
    a: 'Yes. UAE universities accept Cambridge and Pearson Edexcel International A-Levels, but each sets its own subject and grade requirements, and the Ministry of Education sets equivalency rules for the British system, including a minimum number of IGCSE and AS or A-Level passes. Arabic and Islamic Education do not count towards that total.',
  },
  {
    q: 'Can my child change A-Level subjects after starting Year 12?',
    a: 'Often, in the first few weeks of Year 12, if the timetable allows. After that, catching up becomes hard, so it is better to choose carefully in Year 11 and use the school’s taster days and options evening.',
  },
  {
    q: 'What IGCSE grades are needed to study a subject at A-Level?',
    a: 'Each sixth form sets its own entry grades. Many ask for a 6 or 7 (a B or an A) in the subject itself, and a high grade in Maths for A-Level Maths or Physics. Check your school’s sixth form booklet for the exact rules.',
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
  { label: 'When UAE students choose A-Levels', id: 'when-to-choose-a-levels' },
  { label: 'How many A-Levels to take', id: 'how-many-a-levels' },
  { label: 'Work backwards from the degree', id: 'a-levels-by-degree' },
  { label: 'If your child may study in the UAE', id: 'uae-universities' },
  { label: 'Four mistakes to avoid', id: 'mistakes-to-avoid' },
  { label: 'Questions to ask at options evening', id: 'options-evening-questions' },
  { label: 'Frequently asked questions', id: 'faqs' },
  { label: 'Sources and further reading', id: 'sources' },
];

const RELATED_GUIDES = [
  {
    slug: 'how-to-choose-igcse-subjects-uae',
    title: 'How to Help Your Child Choose IGCSE Subjects: A UAE Parent Guide to Year 9 Options',
  },
  {
    slug: 'what-is-igcse-full-form-meaning-uae',
    title: 'What Is IGCSE? Full Form, Meaning, Subjects and Grades Explained for UAE Parents',
  },
  {
    slug: 'parent-teacher-meeting-questions-uae',
    title: 'Parent-Teacher Meetings in the UAE: What to Ask When Your Child Is in IGCSE or A-Level',
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

function CheckList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5 my-3 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
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

/* Stacked-on-mobile table, matching the other guides */
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

/* In-article photo: lazy-loaded, fixed dimensions to avoid layout shift */
function BlogFigure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-7">
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] bg-slate-100">
        <img src={src} alt={alt} width={1344} height={752} loading="lazy" decoding="async" className="w-full h-full object-cover block" />
      </div>
      <figcaption className="mt-2 text-center text-xs text-gray-400 italic">{caption}</figcaption>
    </figure>
  );
}


/* Coded graphic: three ways to fill three A-Level slots */
function ChoicePaths() {
  const paths = [
    { who: 'Knows the degree', example: 'Wants medicine', slots: ['Chemistry', 'Biology', 'Maths or Physics'], note: 'Fill the required subjects first.' },
    { who: 'Has a direction', example: 'Leaning to business or economics', slots: ['Maths', 'Economics', 'A subject they enjoy'], note: 'Keep Maths; it is the common requirement.' },
    { who: 'Still unsure', example: 'No clear course yet', slots: ['Maths or a science', 'An essay subject', 'Their strongest subject'], note: 'Mix types to keep doors open.' },
  ];
  return (
    <figure className="my-7 rounded-2xl border border-[#0f4a9b]/15 bg-[#f8fafd] p-4 sm:p-5 shadow-sm">
      <span className="block text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider mb-1">Three ways to fill three A-Level slots</span>
      <p className="text-[12px] text-gray-500 mb-4">Examples only. Always check the exact entry requirements of each course.</p>
      <div className="grid sm:grid-cols-3 gap-3">
        {paths.map((p) => (
          <div key={p.who} className="rounded-xl bg-white border border-slate-200 p-3.5 flex flex-col">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#A8892A]">{p.who}</span>
            <span className="text-[13px] font-bold text-[#0a1f3d] mb-2.5">{p.example}</span>
            <ol className="space-y-1.5 mb-2.5">
              {p.slots.map((s, i) => (
                <li key={s} className="flex items-center gap-2 text-[12.5px] text-[#2c3e5c]">
                  <span className="flex w-5 h-5 shrink-0 items-center justify-center rounded-md bg-[#0f4a9b] text-white text-[10px] font-extrabold">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <span className="mt-auto text-[11.5px] text-gray-500 italic">{p.note}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}

export default function ChooseALevelSubjectsBlog() {
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
          {
            ...articleSchema({
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
            articleSection: 'Parent Guidance',
            keywords: 'how to choose A-Level subjects, A-Level subject choices, how many A-Levels, A-Level subjects for medicine, A-Levels for engineering, A-Level options UAE',
          },
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Parent Guidance', url: '/blogs/parent-guidance' },
            { name: 'How to Choose A-Level Subjects', url: canonical },
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
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[180px]">Choosing A-Level Subjects</span>
        </div>
      </div>

      <article className="pt-7 pb-16 bg-white antialiased">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <Users className="h-3.5 w-3.5 text-[#0f4a9b]" />
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
              <img src={BLOG.heroImage} alt={BLOG.heroAlt} width={1344} height={752} className="w-full h-full object-cover block" loading="eager" fetchPriority="high" />
            </div>
            <figcaption className="mt-2 text-center text-xs text-gray-400 italic">{BLOG.heroCaption}</figcaption>
          </figure>

          <TOC open={tocOpen} setOpen={setTocOpen} />

          {/* Opening */}
          <div className={proseCls}>
            <p>
              Two years after the IGCSE options form, many UAE families face a second, bigger one. In Year 11 your child picks the three or four A-Levels they will study in Years 12 and 13, and those subjects decide which degrees they can apply for. A student who drops Chemistry cannot apply for medicine. One who drops Maths finds many economics and computing courses closed.
            </p>
            <p>
              The good news is that choosing A-Level subjects follows a clear order. Start with the degree, or the kind of degree, your child is leaning towards. Check what it asks for. Then fill the remaining places with subjects your child is strong in and enjoys.
            </p>
          </div>

          {/* Quick answer */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl text-white shadow-md" style={{ background: THEME_GRADIENT }}>
            <span className="block text-[10px] uppercase tracking-[0.14em] text-[#F5D77F] font-extrabold mb-1.5">Quick answer</span>
            <p className="text-[13.5px] leading-relaxed text-white/95">
              Most students take three A-Levels. Choose them in this order: the subjects the intended degree requires, then subjects your child is strong in, then subjects they enjoy. If your child is unsure, keep Maths or a science alongside an essay subject. Check each university’s course page, and if your child may study in the UAE, the Ministry of Education equivalency rules too.
            </p>
          </div>

          {/* 01 */}
          <SectionHeading num="01" id="when-to-choose-a-levels">When UAE students choose A-Levels</SectionHeading>
          <div className={proseCls}>
            <p>
              Most British-curriculum schools in Dubai, Abu Dhabi and Sharjah run sixth form options in Year 11. A typical pattern is an options evening in the autumn term, taster lessons, a provisional choice in the spring term, and a final place confirmed after IGCSE results in August. Every school sets its own dates, so check your school’s calendar.
            </p>
            <p>
              Entry to each A-Level usually depends on IGCSE grades. Many sixth forms ask for a 6 or 7 in the subject itself, and a high Maths grade for A-Level Maths or Physics. That makes Year 11 mocks more than practice: they show whether a planned subject is realistic. Our guide to <a href="/blogs/what-is-igcse-full-form-meaning-uae" className={linkCls}>IGCSE grades</a> explains the 9 to 1 scale.
            </p>
          </div>

          {/* 02 */}
          <SectionHeading num="02" id="how-many-a-levels">How many A-Levels to take</SectionHeading>
          <div className={proseCls}>
            <p>
              Three is the standard, and university offers are usually written around three grades, such as AAB. A fourth A-Level rarely improves an offer. It makes sense when it adds something specific: Further Maths for a student aiming at engineering, physics or maths, or a fourth subject for a strong student who genuinely wants it. Three high grades are worth more than four lower ones.
            </p>
            <p>
              Most UAE schools offer Cambridge International or Pearson Edexcel International A-Levels. Both let students sit AS papers at the end of Year 12 that count towards the full A-Level, so some schools start students on four subjects and let them drop one after AS. Ask how your school handles this.
            </p>
          </div>
          <h3 className="mt-6 mb-2 text-base sm:text-lg font-extrabold text-[#0a1f3d]">Is Further Maths worth it?</h3>
          <div className={proseCls}>
            <p>
              Further Maths is a full A-Level taken alongside Maths, not instead of it. Some of the most competitive maths, engineering, physics and economics courses recommend it, and a few top courses expect it. For most other degrees it adds workload without improving the offer. It suits students who scored highly in IGCSE Maths, often an 8 or 9, and enjoy problem-solving for its own sake. If your child is unsure, ask the maths department whether Further Maths can be taken as an AS only.
            </p>
          </div>

          {/* 03 */}
          <SectionHeading num="03" id="a-levels-by-degree">Work backwards from the degree</SectionHeading>
          <div className={proseCls}>
            <p>
              Some degrees name the A-Levels they need; many do not. The table below shows the usual pattern at UK universities, which many UAE students apply to. Use it as a starting point, then check each university’s course page, or the Russell Group’s Informed Choices tool, for the exact requirements.
            </p>
          </div>
          <ResponsiveTable
            headers={['Degree area', 'Usually required', 'Helpful']}
            widths={['w-[26%]', 'w-[37%]', 'w-[37%]']}
            rows={[
              ['Medicine and dentistry', 'Chemistry, and usually Biology', 'Maths or Physics as the third subject'],
              ['Engineering', 'Maths and Physics', 'Further Maths; Chemistry for chemical engineering'],
              ['Economics', 'Maths', 'Economics, Further Maths'],
              ['Computer science', 'Maths', 'Further Maths, Computer Science, Physics'],
              ['Law, business, humanities', 'Usually no fixed subjects', 'Essay subjects such as English Literature or History for law; Maths for business'],
            ]}
          />
          <BlogFigure
            src="/images/blogs/a-level-subject-cards-decision-map.webp"
            alt="Student arranging subject cards for maths, sciences, economics and essay subjects into three columns on a desk to plan A-Level choices"
            caption="Fill the required subjects first, then the ones your child is strong in."
          />
          <ChoicePaths />
          <h3 className="mt-6 mb-2 text-base sm:text-lg font-extrabold text-[#0a1f3d]">Two examples from a Year 11 options form</h3>
          <div className={proseCls}>
            <p>
              <strong>A student set on medicine</strong> starts with Chemistry and Biology, because nearly every medical school asks for them. For the third place she weighs Maths, which supports Chemistry calculations, against Psychology, which she enjoys. Her IGCSE Maths grade is a 7, so she chooses Maths and keeps the widest choice of medical and science courses.
            </p>
            <p>
              <strong>A student who likes business but has no fixed course</strong> keeps Maths, because economics and finance degrees ask for it, adds Economics, and then picks History, his strongest essay subject. That combination still works for business, economics, law and politics, so he does not have to decide at 16.
            </p>
          </div>
          <NarrativeBox label="PARENT TAKEAWAY">
            If your child is unsure about the degree, Maths or a science plus an essay subject keeps the widest range of courses open. Dropping Maths at 16 closes more doors than most families expect.
          </NarrativeBox>

          {/* 04 */}
          <SectionHeading num="04" id="uae-universities">If your child may study in the UAE</SectionHeading>
          <div className={proseCls}>
            <p>
              UAE universities accept Cambridge and Pearson Edexcel International A-Levels, but they add two checks that UK universities do not. First, the Ministry of Education sets equivalency rules for the British system, including a minimum number of IGCSE and AS or A-Level passes. Arabic and Islamic Education are studied in UAE schools but do not count towards that total. Second, each university and programme sets its own subject requirements; health sciences programmes in particular often ask for named sciences and Maths.
            </p>
            <p>
              Because the rules change from year to year, check the Ministry’s current equivalency guide and the programme page of every university on your child’s list before the options form is due.
            </p>
          </div>

          {/* 05 */}
          <SectionHeading num="05" id="mistakes-to-avoid">Four mistakes to avoid</SectionHeading>
          <div className={proseCls}>
            <CheckList
              items={[
                <><strong>Choosing because friends are.</strong> Two years is a long time in a class your child chose for social reasons.</>,
                <><strong>Dropping Maths too early.</strong> Economics, computing, engineering, the sciences and many psychology courses use it.</>,
                <><strong>Picking a subject with a weak IGCSE base.</strong> The jump from IGCSE to A-Level is steepest in Maths and Chemistry. A 5 at IGCSE usually means a hard first term.</>,
                <><strong>Looking for an easy A-Level.</strong> Every A-Level is demanding. The easiest subject is the one your child is good at and enjoys.</>,
              ]}
            />
            <p>
              If a subject your child needs feels shaky, the summer before Year 12 is the best time to close the gap, and one-to-one <a href="/a-level" className={linkCls}>A-Level tutoring</a> can rebuild the IGCSE foundations first. Our article on <a href="/blogs/a-level-tutoring-uae-independent-thinking" className={linkCls}>how A-Level study differs from IGCSE</a> explains why the step up catches so many students out.
            </p>
          </div>

          {/* 06 */}
          <SectionHeading num="06" id="options-evening-questions">Questions to ask at options evening</SectionHeading>
          <div className={proseCls}>
            <p>Options evening is your best chance to get school-specific answers. Take these questions:</p>
            <CheckList
              items={[
                'What IGCSE grade does each subject need, and is there flexibility?',
                'Which subjects share a timetable block, so cannot be taken together?',
                'Does the school offer Cambridge or Edexcel for each subject, and does it use AS exams?',
                'Can students start with four subjects and drop one later?',
                'What did last year’s students in this subject go on to study?',
              ]}
            />
            <p>
              Our guide to <a href="/blogs/parent-teacher-meeting-questions-uae" className={linkCls}>parent-teacher meetings in the UAE</a> has more questions for the subject teachers themselves.
            </p>
          </div>
          <BlogFigure
            src="/images/blogs/a-level-options-evening-uae-school.webp"
            alt="Father and teenage son talking with a science teacher at a subject stand during a sixth form options evening in a UAE school hall"
            caption="Ask about entry grades and timetable blocks before the options form is due."
          />

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
                      aria-controls={`al-faq-${index}`}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#0f4a9b] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </h3>
                  {/* Always in the HTML (indexable); shown when open */}
                  <div id={`al-faq-${index}`} hidden={!isOpen} className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
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
              <strong>Russell Group:</strong>{' '}
              <a href="https://www.informedchoices.ac.uk/" target="_blank" rel="noopener noreferrer" className={linkCls}>Informed Choices</a>, an interactive guide to the A-Level subjects each degree asks for.
            </p>
            <p>
              <strong>UAE Ministry of Education:</strong>{' '}
              <a href="https://moe.gov.ae/en/guides/Pages/guide-to-academic-certificate-equivalency-for-private-schools2024-2025.aspx" target="_blank" rel="noopener noreferrer" className={linkCls}>Guide to academic certificate equivalency for private schools</a>.
            </p>
            <p>
              <strong>UCAS:</strong>{' '}
              <a href="https://www.ucas.com/" target="_blank" rel="noopener noreferrer" className={linkCls}>course search and entry requirements</a> for UK universities.
            </p>
            <p>Your school’s sixth form booklet sets the entry grades, subject blocks and deadlines that apply to your child.</p>
          </div>

          {/* CTA */}
          <div className="my-10 rounded-2xl p-6 sm:p-8 border border-white/10 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] rounded-full mb-3 text-[10px] font-extrabold tracking-wider uppercase">
              FIRST SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              Planning A-Levels, but one subject feels shaky?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              An A-Level specialist can check your child’s IGCSE foundations in the subjects they plan to take, from Maths and Chemistry to Physics and Economics, and close the gaps before Year 12. Lessons are online and 1-to-1, and every first 1-hour lesson includes a free 15-minute orientation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a href={BOOKING_URL}
                className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[210px] h-11 px-6 rounded-full font-bold text-white hover:brightness-110 transition text-sm shadow-md whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book First Session
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Ustaad about A-Level support"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[210px] h-11 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-sm transition shadow-md whitespace-nowrap">
                <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Us
              </a>
            </div>
            <p className="mt-4 text-[11px] text-white/70">
              A-Level support by city: <a href="/a-level-tutor-dubai" className="underline hover:text-white">A-Level tutors in Dubai</a> · <a href="/a-level-tutor-abu-dhabi" className="underline hover:text-white">A-Level tutors in Abu Dhabi</a> · <a href="/a-level-tutor-al-ain" className="underline hover:text-white">A-Level tutors in Al Ain</a>
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
                Nimra writes Ustaad&apos;s guides for UAE families on subject choices, exams and study habits, turning school and university requirements into clear next steps.
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
