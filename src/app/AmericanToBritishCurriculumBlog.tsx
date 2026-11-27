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
 * Target keyword: American to British curriculum UAE (primary): switching from an American
 * to a British-curriculum school.
 * Secondary: American grade to British year group, Grade 9 to Year 10, joining IGCSE from the
 * American curriculum, changing schools in Dubai / Abu Dhabi, curriculum transfer UAE, catch-up tutoring.
 * Different intent from /blogs/igcse-vs-gcse-curriculum-differences-uae (two British qualifications),
 * /blogs/what-is-igcse-full-form-meaning-uae (what IGCSE is) and /curriculum (service overview).
 */

const BOOKING_URL = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20my%20child%20is%20moving%20from%20an%20American%20to%20a%20British%20school%20and%20needs%20help%20catching%20up.';

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

const BLOG = {
  title: 'American to British Curriculum Switch: UAE Guide | Ustaad',
  h1: 'Switching From an American to a British School in the UAE: Year Groups, Gaps and How to Catch Up',
  titleLine1: 'Switching From an American to a British School in the UAE:',
  titleLine2: 'Year Groups, Gaps and How to Catch Up',
  categoryBadge: 'USTAAD UAE | PARENT GUIDANCE',
  slug: 'american-to-british-curriculum-uae',
  description:
    'Moving from an American to a British school in the UAE? How grades map to year groups, when to switch before IGCSE, the usual gaps and a 6-week catch-up plan.',
  subtitle:
    'Families in Dubai, Abu Dhabi and Sharjah change curriculum all the time, after a move, a new job or a new school place. Here is how an American grade maps to a British year group, which timing works, and how to close the gaps before they show up in exams.',
  heroImage: '/images/blogs/american-to-british-curriculum-uae-parent-hero.webp',
  heroAlt:
    'Mother and teenage son seen from behind at a dining table in Dubai, reading an American high school schedule beside a British school Year 10 timetable and IGCSE subject list',
  heroCaption: 'A British year group is numbered one higher than the American grade for the same age.',
  datePublished: '2026-11-27',
  dateModified: '2026-11-27',
  publishedText: '27 November 2026',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and family guidance for UAE students',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Every guide is checked for accuracy and parent clarity',
  reviewerUrl: '/editorial',
  readTime: '8 min read',
  tags: [
    'American to British Curriculum',
    'Changing Schools UAE',
    'Year Group Placement',
    'IGCSE',
    'KHDA and ADEK',
    'Catch-Up Tutoring',
    'Parent Guidance',
  ],
};

const FAQS = [
  {
    q: 'Will my child have to repeat a year when moving from an American to a British school?',
    a: 'Usually not. Placement in the UAE is mainly by age, and a British year group is numbered one higher than the American grade for the same age, so a Grade 8 student normally joins Year 9 rather than repeating anything. The receiving school makes the final decision using age, transcripts and sometimes an assessment.',
  },
  {
    q: 'Can my child join a British school in Year 11 from an American school?',
    a: 'Sometimes, but it is the hardest point to join. IGCSE courses run across Years 10 and 11, so a Year 11 joiner has to cover a year of content they missed while preparing for exams. Ask the school which subjects and exam boards your child would sit, and whether a reduced set of IGCSEs is possible.',
  },
  {
    q: 'Is the British curriculum harder than the American curriculum?',
    a: 'It is not harder overall, but it is assessed differently. American grades build up through homework, quizzes and projects across the year, while British grades in Years 10 to 13 depend mainly on final exams. Students used to continuous assessment often need practice with timed papers and exam wording.',
  },
  {
    q: 'Do American school grades and GPA transfer to a British school?',
    a: 'The transcript is used for placement, but the GPA itself does not convert into British grades. Once your child starts IGCSE or A-Level, their results will come from the British exams they sit.',
  },
  {
    q: 'How long does it take to catch up after switching curriculum?',
    a: 'For most students in Years 7 to 10, the main gaps close within one term with focused practice, usually in maths topics taught in a different order and in timed written answers. Students joining in Year 11 or Year 12 need a more intensive plan from the first week.',
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
  { label: 'How American grades map to British year groups', id: 'grade-to-year-group' },
  { label: 'When to switch, and when it is risky', id: 'when-to-switch' },
  { label: 'The gaps that usually show up', id: 'common-gaps' },
  { label: 'What American-curriculum students bring', id: 'strengths' },
  { label: 'A 6-week catch-up plan', id: 'catch-up-plan' },
  { label: 'Questions to ask the new school', id: 'questions-for-school' },
  { label: 'Frequently asked questions', id: 'faqs' },
  { label: 'Sources and further reading', id: 'sources' },
];

const RELATED_GUIDES = [
  {
    slug: 'what-is-igcse-full-form-meaning-uae',
    title: 'What Is IGCSE? Full Form, Meaning, Subjects and Grades Explained for UAE Parents',
  },
  {
    slug: 'how-to-choose-igcse-subjects-uae',
    title: 'How to Help Your Child Choose IGCSE Subjects: A UAE Parent Guide to Year 9 Options',
  },
  {
    slug: 'read-uae-school-report-card',
    title: 'How to Read a UAE School Report Card Like an Education Counsellor',
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


/* Coded graphic: how risky a switch is at each stage */
function SwitchTiming() {
  const stages = [
    { when: 'Up to Year 9', grade: 'Grade 8 or below', level: 1, label: 'Lower risk', note: 'Time to close gaps before IGCSE starts.' },
    { when: 'Start of Year 10', grade: 'Grade 9', level: 2, label: 'Workable', note: 'Joins the two-year IGCSE course from day one.' },
    { when: 'During Year 10 or 11', grade: 'Grade 9 or 10', level: 3, label: 'Highest risk', note: 'Content already covered; exam entries near.' },
    { when: 'Start of Year 12', grade: 'Grade 11', level: 2, label: 'Workable', note: 'Needs IGCSE-level foundations in each A-Level.' },
  ];
  const tone = ['', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500'];
  return (
    <figure className="my-7 rounded-2xl border border-[#0f4a9b]/15 bg-[#f8fafd] p-4 sm:p-5 shadow-sm">
      <span className="block text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider mb-1">When a switch is easiest</span>
      <p className="text-[12px] text-gray-500 mb-4">General guidance. The receiving school decides placement for each child.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stages.map((s) => (
          <div key={s.when} className="rounded-xl bg-white border border-slate-200 p-3.5 flex flex-col">
            <span className="text-[13px] font-bold text-[#0a1f3d]">{s.when}</span>
            <span className="text-[11px] text-gray-500 mb-2.5">{s.grade}</span>
            <span className="flex gap-1 mb-1.5" aria-hidden="true">
              {[1, 2, 3].map((n) => (
                <span key={n} className={`h-1.5 flex-1 rounded-full ${n <= s.level ? tone[s.level] : 'bg-slate-200'}`} />
              ))}
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#A8892A] mb-1">{s.label}</span>
            <span className="mt-auto text-[11.5px] text-gray-500 italic leading-snug">{s.note}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}

export default function AmericanToBritishCurriculumBlog() {
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
            keywords: 'American to British curriculum UAE, switching from American to British school, American grade to British year group, Grade 9 to Year 10, joining IGCSE from American curriculum, changing schools Dubai, curriculum transfer UAE',
          },
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Parent Guidance', url: '/blogs/parent-guidance' },
            { name: 'American to British Curriculum', url: canonical },
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
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[180px]">American to British Curriculum</span>
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
              In the UAE, changing curriculum is ordinary. A family moves from Abu Dhabi to Dubai, a sibling gets a place at a different school, or parents decide they want IGCSEs and A-Levels rather than a high school diploma. For many children that means switching from an American to a British school, and the first questions are always the same: which year will my child join, will they fall behind, and what do we need to fix first?
            </p>
            <p>
              The good news is that most students settle within a term. The switch goes wrong mainly when the timing is poor or when nobody spots the gaps until the first set of exams. This guide covers both.
            </p>
          </div>

          {/* Quick answer */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl text-white shadow-md" style={{ background: THEME_GRADIENT }}>
            <span className="block text-[10px] uppercase tracking-[0.14em] text-[#F5D77F] font-extrabold mb-1.5">Quick answer</span>
            <p className="text-[13.5px] leading-relaxed text-white/95">
              A British year group is numbered one higher than the American grade for the same age, so Grade 9 usually becomes Year 10. The easiest time to switch is before Year 10, when the two-year IGCSE course starts. The usual gaps are maths topics taught in a different order, three sciences studied together, and timed exam writing. The receiving school decides placement, so get its decision in writing.
            </p>
          </div>

          {/* 01 */}
          <SectionHeading num="01" id="grade-to-year-group">How American grades map to British year groups</SectionHeading>
          <div className={proseCls}>
            <p>
              Both systems place children mainly by age, but they number the years differently. British schools start counting a year earlier, so the British year group is one number higher than the American grade for a child of the same age.
            </p>
          </div>
          <ResponsiveTable
            headers={['American grade', 'British year group', 'What happens that year']}
            widths={['w-[26%]', 'w-[26%]', 'w-[48%]']}
            rows={[
              ['Grade 6 to 8', 'Year 7 to 9', 'Key Stage 3: broad subjects, the base for IGCSE'],
              ['Grade 9', 'Year 10', 'First year of the two-year IGCSE course'],
              ['Grade 10', 'Year 11', 'IGCSE exams in May and June'],
              ['Grade 11', 'Year 12', 'First year of A-Levels (AS in many UAE schools)'],
              ['Grade 12', 'Year 13', 'Final A-Level exams and university applications'],
            ]}
          />
          <div className={proseCls}>
            <p>
              The table is the usual pattern, not a guarantee. The receiving school decides where your child goes, using age, the transfer certificate and transcripts from the previous school, and sometimes its own assessment. In Dubai, placement follows KHDA rules; in Abu Dhabi, ADEK rules; and in the other emirates, the Ministry of Education. Age cut-off dates can differ between regulators, so a child born in the summer may be placed differently from the table above. Ask for the placement in writing before you accept a seat.
            </p>
          </div>

          {/* 02 */}
          <SectionHeading num="02" id="when-to-switch">When to switch, and when it is risky</SectionHeading>
          <div className={proseCls}>
            <p>
              Timing matters more than anything else. IGCSE is a two-year course across Years 10 and 11, so a student who arrives halfway through has to learn a year of content they missed while also preparing for exams. The earlier the switch, the more time there is to close gaps calmly.
            </p>
          </div>
          <SwitchTiming />
          <h3 className="mt-6 mb-2 text-base sm:text-lg font-extrabold text-[#0a1f3d]">If your child joins at the start of Year 10</h3>
          <div className={proseCls}>
            <p>
              This works well for most students. Your child joins the IGCSE course with everyone else, but they will need to choose subjects quickly. Our guide to <a href="/blogs/how-to-choose-igcse-subjects-uae" className={linkCls}>choosing IGCSE subjects</a> walks through the options form, and <a href="/blogs/what-is-igcse-full-form-meaning-uae" className={linkCls}>what IGCSE means</a> explains the grades and exam boards.
            </p>
          </div>
          <h3 className="mt-6 mb-2 text-base sm:text-lg font-extrabold text-[#0a1f3d]">If your child joins in Year 12</h3>
          <div className={proseCls}>
            <p>
              Sixth forms usually set entry grades for each A-Level, normally based on IGCSE results. A student coming from Grade 10 in an American school has no IGCSEs, so many schools use an entrance test or interview instead. Expect questions on algebra for A-Level Maths and Physics, and on extended writing for essay subjects.
            </p>
          </div>

          {/* 03 */}
          <SectionHeading num="03" id="common-gaps">The gaps that usually show up</SectionHeading>
          <div className={proseCls}>
            <p>
              American and British courses cover much of the same knowledge, but in a different order and assessed in different ways. These are the gaps tutors see most often in students who switch.
            </p>
          </div>
          <ResponsiveTable
            headers={['Subject', 'Typical American background', 'What the British course expects']}
            widths={['w-[18%]', 'w-[41%]', 'w-[41%]']}
            rows={[
              ['Maths', 'Algebra I and Geometry taught as separate year-long courses', 'Algebra, geometry, vectors, statistics and probability taught together every year, plus non-calculator papers in some boards'],
              ['Science', 'One science per year, such as Biology in Grade 9', 'Biology, Chemistry and Physics studied side by side, with set practicals'],
              ['English', 'Essays and projects written over days', 'Timed responses to unseen texts in the exam hall'],
              ['Assessment', 'Grades built from homework, quizzes and projects', 'Grades decided mainly by final exams, with precise command words'],
            ]}
          />
          <BlogFigure
            src="/images/blogs/american-to-british-maths-revision-desk.webp"
            alt="Teenage student in a UAE school polo shirt, seen over her shoulder, working through an exam-style maths paper on quadratic and simultaneous equations with a calculator and topic checklist"
            caption="Maths gaps are usually about order, not ability: topics the British course expects earlier."
          />
          <div className={proseCls}>
            <p>
              The biggest change is often not the content but the exam style. Students used to continuous assessment can know the material and still lose marks because they misread what a question asks. Our guide to <a href="/blogs/command-words-igcse-a-level-exams" className={linkCls}>command words in IGCSE and A-Level exams</a> is a good first read for any student making the switch.
            </p>
          </div>

          {/* 04 */}
          <SectionHeading num="04" id="strengths">What American-curriculum students bring</SectionHeading>
          <div className={proseCls}>
            <p>
              It is not all catching up. Students from American schools are often confident speakers, used to class discussion and presentations, and comfortable with research projects. Those strengths help in English, the humanities and later in A-Level coursework. The aim of the first term is to keep that confidence while adding exam technique, not to make your child feel they are starting again.
            </p>
          </div>
          <NarrativeBox label="PARENT TAKEAWAY">
            Most switching students are not behind in ability. They are behind in a handful of topics and in exam habits, and both can be fixed in weeks if you find them early.
          </NarrativeBox>

          {/* 05 */}
          <SectionHeading num="05" id="catch-up-plan">A 6-week catch-up plan</SectionHeading>
          <div className={proseCls}>
            <p>
              Start in the first week at the new school, before the first tests. Short, regular work beats a weekend cram.
            </p>
            <CheckList
              items={[
                <><strong>Week 1: Find the gaps.</strong> Ask each teacher for the scheme of work and compare it with what your child has covered. Mark topics as done, partly done or new.</>,
                <><strong>Weeks 2 and 3: Maths first.</strong> Close the algebra and geometry gaps, because later topics build on them. Practise without a calculator if your child will sit a non-calculator paper.</>,
                <><strong>Weeks 3 and 4: Sciences.</strong> Cover the basics of the science your child has not studied recently, and learn the required practicals by name.</>,
                <><strong>Week 5: Exam writing.</strong> Answer short past-paper questions to time, then check them against the mark scheme.</>,
                <><strong>Week 6: Review.</strong> Sit one short paper per core subject and update the gap list before the first school assessment.</>,
              ]}
            />
            <p>
              A specialist tutor can speed this up, because they know both systems and can spot a gap from one worked answer. Ustaad runs online, 1-to-1 <a href="/igcse" className={linkCls}>IGCSE tutoring</a> and <a href="/maths" className={linkCls}>maths tutoring</a> for students across the UAE, and our tutors also teach the <a href="/american-curriculum" className={linkCls}>American curriculum</a>, so they can see exactly what your child already knows.
            </p>
          </div>
          <BlogFigure
            src="/images/blogs/online-tutor-curriculum-switch-uae.webp"
            alt="Teenage boy with headphones in an online 1-to-1 lesson while a tutor marks a structured science exam answer on a shared whiteboard, with a weekly study plan beside the laptop"
            caption="A tutor who knows both systems can turn the gap list into a weekly plan."
          />

          {/* 06 */}
          <SectionHeading num="06" id="questions-for-school">Questions to ask the new school</SectionHeading>
          <div className={proseCls}>
            <p>Before you accept a place, ask:</p>
            <CheckList
              items={[
                'Which year group will my child join, and can we have that in writing?',
                'Which exam boards does the school use for each IGCSE or A-Level subject, Cambridge or Pearson Edexcel?',
                'Which topics has the class already covered this year, and is there a catch-up plan for new students?',
                'Will my child be placed in a maths or science set, and when is that reviewed?',
                'Are there subjects my child cannot start mid-course, such as a language?',
              ]}
            />
            <p>
              Once your child has started, the first report will show how the switch is going. Our guide to <a href="/blogs/read-uae-school-report-card" className={linkCls}>reading a UAE school report card</a> explains what to look for.
            </p>
          </div>

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
                      aria-controls={`ab-faq-${index}`}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#0f4a9b] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </h3>
                  {/* Always in the HTML (indexable); shown when open */}
                  <div id={`ab-faq-${index}`} hidden={!isOpen} className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
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
              <strong>KHDA (Dubai):</strong>{' '}
              <a href="https://web.khda.gov.ae/en/Guides/Parents/Student-Placement-Guidelines-for-Dubai-Private-Sch" target="_blank" rel="noopener noreferrer" className={linkCls}>Student placement guidelines for Dubai private schools</a>.
            </p>
            <p>
              <strong>ADEK (Abu Dhabi):</strong>{' '}
              <a href="https://adek.gov.ae/Education-System/Private-Schools/Curriculum/British-Curriculum" target="_blank" rel="noopener noreferrer" className={linkCls}>British curriculum in Abu Dhabi private schools</a>.
            </p>
            <p>
              <strong>UAE Ministry of Education:</strong>{' '}
              <a href="https://moe.gov.ae/en/guides/Pages/guide-to-academic-certificate-equivalency-for-private-schools2024-2025.aspx" target="_blank" rel="noopener noreferrer" className={linkCls}>Guide to academic certificate equivalency for private schools</a>.
            </p>
            <p>The receiving school’s admissions team confirms the year group, exam boards and catch-up support that apply to your child.</p>
          </div>

          {/* CTA */}
          <div className="my-10 rounded-2xl p-6 sm:p-8 border border-white/10 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] rounded-full mb-3 text-[10px] font-extrabold tracking-wider uppercase">
              FIRST SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              Switching to a British school this year?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              A tutor who teaches both curricula can check what your child already knows, build the gap list with you and close it before the first assessments, from IGCSE Maths and the sciences to exam writing. Lessons are online and 1-to-1, and every first 1-hour lesson includes a free 15-minute orientation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a href={BOOKING_URL}
                className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[210px] h-11 px-6 rounded-full font-bold text-white hover:brightness-110 transition text-sm shadow-md whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book First Session
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Ustaad about curriculum switch support"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[210px] h-11 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-sm transition shadow-md whitespace-nowrap">
                <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Us
              </a>
            </div>
            <p className="mt-4 text-[11px] text-white/70">
              IGCSE support by city: <a href="/igcse-tutor-dubai" className="underline hover:text-white">IGCSE tutors in Dubai</a> · <a href="/igcse-tutor-abu-dhabi" className="underline hover:text-white">IGCSE tutors in Abu Dhabi</a> · <a href="/igcse-tutor-al-ain" className="underline hover:text-white">IGCSE tutors in Al Ain</a>
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
                Nimra writes Ustaad&apos;s guides for UAE families on school choices, exams and study habits, turning school rules and requirements into clear next steps.
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
