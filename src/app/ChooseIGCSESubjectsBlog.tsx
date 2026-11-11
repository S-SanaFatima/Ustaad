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
  Heart,
  TrendingUp,
  DoorOpen,
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema } from './shared/schemas';

const BOOKING_URL = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20would%20like%20help%20with%20my%20child%27s%20IGCSE%20subject%20choices.';

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

const BLOG = {
  title: 'How to Choose IGCSE Subjects: A UAE Parent Guide | Ustaad',
  h1: 'How to Help Your Child Choose IGCSE Subjects: A UAE Parent Guide to Year 9 Options',
  titleLine1: 'How to Help Your Child Choose IGCSE Subjects:',
  titleLine2: 'A UAE Parent Guide to Year 9 Options',
  categoryBadge: 'USTAAD UAE | PARENT GUIDANCE',
  slug: 'how-to-choose-igcse-subjects-uae',
  description:
    'Choosing IGCSE subjects in Year 9? A UAE parent guide to core and option subjects, triple vs combined science, how many IGCSEs, and keeping A-Level doors open.',
  subtitle:
    'Year 9 options forms arrive in most UAE British-curriculum schools in the second term. Here is how to help your child choose IGCSE subjects they will enjoy, do well in, and that keep the right doors open for A-Level and university.',
  heroImage: '/images/blogs/choose-igcse-subjects-student-options-desk-dubai.webp',
  heroAlt:
    'Year 9 student at a study desk in Dubai comparing two IGCSE subject option sheets with a highlighter',
  heroCaption: 'A good options choice starts with evidence, not a guess the night before the form is due.',
  datePublished: '2026-11-09',
  dateModified: '2026-11-09',
  publishedText: '9 November 2026',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Every guide is checked for accuracy and parent clarity',
  reviewerUrl: '/editorial',
  readTime: '11 min read',
  tags: [
    'IGCSE Subject Choices',
    'Year 9 Options',
    'Triple vs Combined Science',
    'IGCSE Maths Tiers',
    'A-Level Pathways',
    'UAE Schools',
    'Parent Guidance',
  ],
};

const FAQS = [
  {
    q: 'How many IGCSE subjects should my child take?',
    a: 'Most students in UAE British-curriculum schools take between 8 and 10 IGCSEs, including English, Maths and Science. Universities care far more about the grades in the subjects that matter for the course than about the total number, so a strong set of 8 is usually better than a stretched set of 11.',
  },
  {
    q: 'Is triple science better than combined science?',
    a: 'Separate (triple) science gives three IGCSEs and the most depth, which suits students who enjoy science and are aiming for science A-Levels. Co-ordinated Sciences gives two IGCSEs and is a solid route to science A-Levels when grades are strong. Combined Science gives one IGCSE and suits students who are unlikely to take science further. Check your school’s sixth-form entry requirements before deciding.',
  },
  {
    q: 'What IGCSE subjects are needed for medicine?',
    a: 'There is no fixed IGCSE list, but medicine courses usually require A-Level Chemistry and often Biology, and they look closely at GCSE or IGCSE grades in Maths, English and the sciences. Keeping Biology, Chemistry and Physics, or Co-ordinated Sciences, with strong grades in Maths and English, keeps that route open.',
  },
  {
    q: 'Can my child change an IGCSE subject after choosing?',
    a: 'Many schools allow a change in the first few weeks of Year 10 if there is space in the class and the timetable allows it. After that it becomes harder, because missed coursework and content build up. Ask the school what its deadline is before the form is submitted.',
  },
  {
    q: 'Do Arabic and Islamic Education count towards UAE university equivalency?',
    a: 'They are studied in UAE private schools, but they are not counted among the subjects that make up the UAE Ministry of Education equivalency for the British system. Check the current Ministry guidance and your target university’s published entry criteria, because the exact subject and grade rules can change.',
  },
  {
    q: 'Should my child take the Extended or Core tier in IGCSE Maths?',
    a: 'If your child may take A-Level Maths, Physics, Economics or a science, Extended tier is usually expected, because the Core tier caps the top grade at C. Additional Maths is worth considering for confident mathematicians who are aiming for A-Level Maths or Further Maths.',
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
  { label: 'When UAE schools ask you to choose', id: 'when-uae-schools-ask-you-to-choose' },
  { label: 'What is already decided for you', id: 'what-is-already-decided' },
  { label: 'How many IGCSEs is enough?', id: 'how-many-igcses' },
  { label: 'Science: triple, co-ordinated or combined?', id: 'science-triple-coordinated-or-combined' },
  { label: 'Maths: tiers and Additional Maths', id: 'maths-tiers-and-additional-maths' },
  { label: 'The three-filter test for every option', id: 'the-three-filter-test' },
  { label: 'Matching subjects to future pathways', id: 'matching-subjects-to-pathways' },
  { label: 'Five common mistakes families make', id: 'five-common-mistakes' },
  { label: 'The conversation at home', id: 'the-conversation-at-home' },
  { label: 'When to get extra support', id: 'when-to-get-extra-support' },
  { label: 'Frequently asked questions', id: 'faqs' },
  { label: 'Sources and further reading', id: 'sources' },
];

const RELATED_GUIDES = [
  {
    slug: 'igcse-vs-gcse-curriculum-differences-uae',
    title: 'IGCSE vs GCSE: Curriculum Differences UAE Parents Should Know',
  },
  {
    slug: 'parent-teacher-meeting-questions-uae',
    title: 'Parent-Teacher Meetings in the UAE: What to Ask',
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

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mx-auto my-7 max-w-xl">
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/9] bg-slate-100">
        <img src={src} alt={alt} width={1376} height={774} loading="lazy" className="w-full h-full object-cover block" />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">{caption}</figcaption>
      )}
    </figure>
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

/* Coded graphic: the three-filter test */
function ThreeFilterGraphic() {
  const filters = [
    {
      icon: Heart,
      label: 'Filter 1',
      title: 'Interest',
      question: 'Will they still want to open this book in May of Year 11?',
      evidence: 'Topics they read about without being asked, lessons they talk about at dinner.',
      color: 'from-rose-50 to-white border-rose-200',
      iconBg: 'bg-rose-500',
    },
    {
      icon: TrendingUp,
      label: 'Filter 2',
      title: 'Evidence of strength',
      question: 'Do Year 8 and Year 9 results back this choice up?',
      evidence: 'Report card attainment, test scores and teacher comments, not one good mark.',
      color: 'from-amber-50 to-white border-amber-200',
      iconBg: 'bg-amber-500',
    },
    {
      icon: DoorOpen,
      label: 'Filter 3',
      title: 'Doors it keeps open',
      question: 'Does this subject protect an A-Level or university route they might want?',
      evidence: 'Sixth-form entry requirements and the pathways table in this guide.',
      color: 'from-emerald-50 to-white border-emerald-200',
      iconBg: 'bg-emerald-600',
    },
  ];
  return (
    <div className="my-7 rounded-2xl border border-[#0f4a9b]/15 bg-[#f8fafd] p-4 sm:p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">The three-filter test</span>
        <span className="text-[11px] font-bold text-[#0f4a9b] bg-white px-2.5 py-0.5 rounded-md border border-[#0f4a9b]/20">
          Strong choice = passes at least two
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {filters.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className={`rounded-xl border bg-gradient-to-b ${f.color} p-4`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-white ${f.iconBg}`}>
                  <Icon className="w-4 h-4" />
                </span>
                <div>
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-400">{f.label}</span>
                  <span className="block text-sm font-extrabold text-[#0a1f3d] leading-tight">{f.title}</span>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#0a1f3d] leading-relaxed mb-1.5">{f.question}</p>
              <p className="text-[11.5px] text-gray-500 leading-relaxed">
                <span className="font-bold text-gray-600">Look for: </span>
                {f.evidence}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ChooseIGCSESubjectsBlog() {
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
            timeRequired: 'PT11M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Parent Guidance', url: '/blogs/parent-guidance' },
            { name: 'How to Choose IGCSE Subjects', url: canonical },
          ]),
          FAQ_SCHEMA_DATA,
        ]}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1">
            <Home className="h-3 w-3" /> Home
          </a>
          <span>/</span>
          <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          <span>/</span>
          <a href="/blogs/parent-guidance" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">Parent Guidance</a>
          <span>/</span>
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[180px]">How to Choose IGCSE Subjects</span>
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
                  <span className="block sm:inline">
                    {' '}<a href={BLOG.authorUrl} className="text-gray-500 hover:text-[#0f4a9b]">| {BLOG.authorRole}</a>
                  </span>
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
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  <span>{BLOG.readTime}</span>
                </span>
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
              The options form comes home in a plain envelope in January. Twelve subjects, four boxes to tick, a deadline in three weeks. A Year 9 student in Abu Dhabi wants to drop Physics because her best friend is dropping it. Her father wants her to keep everything, because she once said she might like medicine.
            </p>
            <p>
              Both are deciding the next two years on a guess. The choice feels huge, and in one way it is: the subjects picked now shape which A-Levels are open in Year 12. In another way it is smaller than it looks, because most of the timetable is already fixed, and only a handful of choices really carry weight.
            </p>
            <p>
              This guide separates the decisions that matter from the ones that do not, and gives you a simple test to use on every option your child is considering.
            </p>
          </div>

          {/* Quick answer */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl text-white shadow-md" style={{ background: THEME_GRADIENT }}>
            <span className="block text-[10px] uppercase tracking-[0.14em] text-[#F5D77F] font-extrabold mb-1.5">Quick answer</span>
            <p className="text-[13.5px] leading-relaxed text-white/95">
              Keep English, Maths and Science strong, because every route needs them. Choose the science route and Maths tier that keep likely A-Levels open. Then pick the options your child enjoys and has real evidence of doing well in. Eight to ten good IGCSEs beat eleven stretched ones.
            </p>
          </div>

          {/* 01 */}
          <SectionHeading num="01" id="when-uae-schools-ask-you-to-choose">When UAE schools ask you to choose</SectionHeading>
          <div className={proseCls}>
            <p>
              In most British-curriculum schools in Dubai, Abu Dhabi and Sharjah, Year 9 students choose their IGCSE or GCSE options during the second term. A typical calendar looks like this, though every school sets its own dates:
            </p>
          </div>
          <ResponsiveTable
            headers={['When', 'What happens', 'What to do']}
            widths={['w-[22%]', 'w-[38%]', 'w-[40%]']}
            rows={[
              ['January to February, Year 9', 'Options evening, subject talks and the options booklet', 'Attend together and note each subject’s assessment style and entry advice'],
              ['February to March, Year 9', 'Options form deadline', 'Use the three-filter test in section 06 before you submit'],
              ['Term 3, Year 9', 'School confirms subjects and option blocks', 'Check the confirmed list matches what you chose'],
              ['August to September, Year 10', 'Two-year IGCSE courses begin', 'Ask how long changes are allowed after the start'],
              ['May to June, Year 11', 'Final IGCSE exams', 'Coursework and practicals are often finished earlier'],
            ]}
          />
          <div className={proseCls}>
            <p>
              Schools following Pearson Edexcel International GCSE or the UK GCSE use the same rhythm. If you are unsure which qualification your school offers, our guide to{' '}
              <a href="/blogs/igcse-vs-gcse-curriculum-differences-uae" className={linkCls}>IGCSE vs GCSE in the UAE</a>{' '}
              explains the difference.
            </p>
          </div>

          <InlineImage
            src="/images/blogs/igcse-options-evening-students-noticeboard-uae.webp"
            alt="Two Year 9 students in a UAE school corridor pointing at notes pinned to a noticeboard"
            caption="Talking options through with friends helps, but the final choice should rest on interest, evidence and the doors it keeps open."
          />

          {/* 02 */}
          <SectionHeading num="02" id="what-is-already-decided">What is already decided for you</SectionHeading>
          <div className={proseCls}>
            <p>Before your child picks anything, a large part of the Year 10 timetable is fixed. It usually includes:</p>
          </div>
          <div className={proseCls}>
            <CheckList
              items={[
                <><strong>English:</strong> English Language, and in many schools English Literature as well.</>,
                <><strong>Mathematics:</strong> the tier (Core or Extended) is decided with the school, covered in section 05.</>,
                <><strong>Science:</strong> every student studies science, but the route can be a choice, covered in section 04.</>,
                <><strong>UAE requirements:</strong> Arabic is taught to all students in UAE private schools, at a level that depends on whether Arabic is their first language, and Islamic Education is taught to Muslim students. Some schools also continue UAE Social Studies or Moral Education into Year 10.</>,
              ]}
            />
            <p>
              That often leaves three or four genuine choices, such as Business, Economics, Computer Science, Geography, History, Art, a modern language or Additional Maths. Those are the decisions worth your time.
            </p>
          </div>

          {/* 03 */}
          <SectionHeading num="03" id="how-many-igcses">How many IGCSEs is enough?</SectionHeading>
          <div className={proseCls}>
            <p>
              Most students in UAE British-curriculum schools finish with 8 to 10 IGCSEs, counting the core subjects. Some take 11 or 12. More is not automatically better.
            </p>
            <p>
              Sixth forms and universities look first at the grades in the subjects that matter for the course: Maths and English almost always, plus the subjects linked to the A-Levels your child will take. A set of 8 IGCSEs at grades 7 to 9 opens more doors than 11 IGCSEs at grades 4 to 6.
            </p>
            <p>
              If your child may apply to a UAE university, the Ministry of Education equivalency process asks for a minimum number of IGCSE or GCSE passes alongside AS or A-Level results. Arabic and Islamic Education are studied, but they do not count among those subjects. The exact rules change from time to time, so check the current Ministry guidance and the university&apos;s own entry criteria in Year 9, not Year 13.
            </p>
          </div>
          <NarrativeBox>
            Ask the school how many IGCSEs most of its students take and how many lessons a week each option gets. A heavy load in Year 10 leaves less time to revise the subjects that matter most.
          </NarrativeBox>

          {/* 04 */}
          <SectionHeading num="04" id="science-triple-coordinated-or-combined">Science: triple, co-ordinated or combined?</SectionHeading>
          <div className={proseCls}>
            <p>
              This is the choice parents ask about most, because it decides how many science IGCSEs your child earns and how much depth they reach. Cambridge and Pearson Edexcel offer three routes:
            </p>
          </div>
          <ResponsiveTable
            headers={['Route', 'IGCSEs earned', 'Depth', 'Best suited to']}
            widths={['w-[26%]', 'w-[18%]', 'w-[22%]', 'w-[34%]']}
            rows={[
              ['Separate (triple) science: Biology, Chemistry, Physics', '3', 'Most content', 'Students who enjoy science and are likely to take science A-Levels, medicine or engineering'],
              ['Co-ordinated Sciences (Cambridge) or Science Double Award (Edexcel)', '2', 'Solid core of all three', 'Students who may take a science A-Level and want time for other options'],
              ['Combined Science (Cambridge) or Science Single Award (Edexcel)', '1', 'Least content', 'Students unlikely to study science after Year 11'],
            ]}
          />
          <div className={proseCls}>
            <p>
              Many sixth forms accept either separate science or Co-ordinated Sciences for A-Level Biology, Chemistry or Physics, as long as the grade is strong, often a 6 or 7. Combined Science can make a science A-Level harder to start. Before choosing, read the sixth-form entry requirements of your school, or the school your child may move to, and check which route its students usually take.
            </p>
          </div>

          <InlineImage
            src="/images/blogs/igcse-physics-practical-student-lab-uae.webp"
            alt="IGCSE student in safety goggles timing a pendulum during a physics practical in a UAE school lab"
            caption="Separate science means more practical work in each subject, which suits students who enjoy the lab."
          />

          {/* 05 */}
          <SectionHeading num="05" id="maths-tiers-and-additional-maths">Maths: tiers and Additional Maths</SectionHeading>
          <div className={proseCls}>
            <p>
              IGCSE Maths is set at two levels. In Cambridge IGCSE Maths they are called Core and Extended. In Pearson Edexcel they are Foundation and Higher. The lower tier caps the top grade, at grade C on the Cambridge A* to G scale and at grade 5 in Edexcel Foundation.
            </p>
            <p>
              That cap matters. A-Level Maths, Physics, Economics and Chemistry usually expect a strong grade from the higher tier. If your child is near the boundary in Year 9, a few months of focused work can decide which tier they sit, so it is worth asking the Maths teacher directly where they stand.
            </p>
            <p>
              Confident mathematicians can also take{' '}
              <strong>Additional Maths</strong> (Cambridge) or <strong>Further Pure Maths</strong> (Edexcel). It is a strong preparation for A-Level Maths and Further Maths, but it adds workload, so it suits students who already find Extended Maths comfortable.
            </p>
          </div>

          {/* 06 */}
          <SectionHeading num="06" id="the-three-filter-test">The three-filter test for every option</SectionHeading>
          <div className={proseCls}>
            <p>
              For each option your child is considering, run it through three filters. A strong choice passes at least two. A choice that passes none, such as &ldquo;my friend is taking it&rdquo;, deserves a second look.
            </p>
          </div>
          <ThreeFilterGraphic />
          <div className={proseCls}>
            <p>
              The second filter is where report cards help. Look at attainment and teacher comments across Year 8 and Year 9, not a single test. Our guide on{' '}
              <a href="/blogs/read-uae-school-report-card" className={linkCls}>how to read a UAE school report card</a>{' '}
              shows what to look for.
            </p>
          </div>

          <InlineImage
            src="/images/blogs/student-weighing-igcse-subject-choices-notebook.webp"
            alt="Year 9 student at a desk thinking through IGCSE subject choices in a notebook with three columns"
            caption="Writing interest, evidence and doors-open side by side makes a hard choice clearer."
          />

          {/* 07 */}
          <SectionHeading num="07" id="matching-subjects-to-pathways">Matching subjects to future pathways</SectionHeading>
          <div className={proseCls}>
            <p>
              Your child does not need a career plan at 14. But if a route is already on the table, these IGCSEs keep it open. Treat this as a starting point and confirm with the school and the universities you have in mind.
            </p>
          </div>
          <ResponsiveTable
            headers={['If your child might study', 'IGCSEs worth keeping strong', 'Why']}
            widths={['w-[26%]', 'w-[36%]', 'w-[38%]']}
            rows={[
              ['Medicine, dentistry or pharmacy', 'Biology, Chemistry, Physics or Co-ordinated Sciences, Extended Maths, English', 'These courses usually require A-Level Chemistry and often Biology, and look closely at science and Maths grades'],
              ['Engineering or physics', 'Physics or a double science route, Extended Maths, Additional Maths if confident', 'A-Level Maths and Physics are standard entry subjects'],
              ['Computer science', 'Extended Maths, Computer Science, a science', 'A-Level Maths matters more than an IGCSE in Computer Science'],
              ['Business, economics or finance', 'Extended Maths, Economics or Business, English', 'Strong Maths keeps A-Level Economics and Maths open'],
              ['Law, humanities or media', 'English Language and Literature, History or Geography, a language', 'Essay writing and analysis are the skills to build'],
              ['Undecided', 'A balanced spread: a science route that allows A-Level science, Extended Maths, one humanity, one creative or language subject', 'Keeps the most doors open until Year 11'],
            ]}
          />
          <div className={proseCls}>
            <p>
              For how A-Level study differs from IGCSE, and why independent study habits matter so much in Year 12, see{' '}
              <a href="/blogs/a-level-tutoring-uae-independent-thinking" className={linkCls}>A-Level tutoring in the UAE and independent thinking</a>.
            </p>
          </div>

          {/* 08 */}
          <SectionHeading num="08" id="five-common-mistakes">Five common mistakes families make</SectionHeading>
          <div className={proseCls}>
            <CheckList
              icon="cross"
              items={[
                <><strong>Choosing for friends or a favourite teacher.</strong> Classes and teachers change in Year 10. The subject stays for two years.</>,
                <><strong>Picking an &ldquo;easy&rdquo; subject.</strong> No IGCSE is easy without interest. A subject your child dislikes is hard to revise in Year 11.</>,
                <><strong>Taking too many IGCSEs.</strong> An extra subject takes revision time from Maths, English and the sciences.</>,
                <><strong>Dropping a science too early.</strong> Moving to Combined Science can make science A-Levels harder to start.</>,
                <><strong>Leaving the Maths tier to chance.</strong> Ask in Year 9 where your child stands, while there is time to move up.</>,
              ]}
            />
          </div>

          {/* 09 */}
          <SectionHeading num="09" id="the-conversation-at-home">The conversation at home</SectionHeading>
          <div className={proseCls}>
            <p>
              The best decisions come from your child, with your questions shaping them. Instead of telling them what to choose, try these:
            </p>
            <CheckList
              items={[
                '“Which lessons do you look forward to, and why?”',
                '“Which subject would you be happy to revise on a Saturday in Year 11?”',
                '“What did your teachers say about you in this subject?”',
                '“Is there a course or job you are curious about, even a little?”',
                '“If you drop this subject, is there anything you might regret in two years?”',
              ]}
            />
            <p>
              Then take two or three questions to the options evening or a meeting with the subject teacher. Our list of{' '}
              <a href="/blogs/parent-teacher-meeting-questions-uae" className={linkCls}>questions to ask at UAE parent-teacher meetings</a>{' '}
              works well here too.
            </p>
          </div>
          <NarrativeBox>
            A choice your child owns is one they will work for. Your job is to make sure it is an informed choice, not to make it for them.
          </NarrativeBox>

          {/* 10 */}
          <SectionHeading num="10" id="when-to-get-extra-support">When to get extra support</SectionHeading>
          <div className={proseCls}>
            <p>Some signs in Year 9 are worth acting on before options are confirmed:</p>
            <CheckList
              items={[
                'Your child is near the boundary between the lower and higher Maths tier',
                'They want a separate science but their Year 9 science grades are inconsistent',
                'They are moving schools or switching from another curriculum into IGCSE',
                'They have no clear strength yet and the choice is causing stress at home',
              ]}
            />
            <p>
              A few targeted lessons in Year 9 can change which tier or science route your child starts Year 10 in. Ustaad works with students online and one-to-one across the UAE, with{' '}
              <a href="/igcse-tutor-dubai" className={linkCls}>IGCSE tutors in Dubai</a>,{' '}
              <a href="/igcse-tutor-abu-dhabi" className={linkCls}>IGCSE tutors in Abu Dhabi</a> and{' '}
              <a href="/igcse-tutor-al-ain" className={linkCls}>IGCSE tutors in Al Ain</a>. You can also read more about{' '}
              <a href="/igcse" className={linkCls}>IGCSE tutoring</a>, or our{' '}
              <a href="/blogs/private-tutoring-uae-parent-guide" className={linkCls}>private tutoring guide for UAE parents</a>{' '}
              if you are deciding whether a tutor is the right step.
            </p>
          </div>

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
              <a href="https://help.cambridgeinternational.org/hc/en-gb/articles/23173870607762-What-is-the-difference-between-the-IGCSEs-in-Combined-Science-and-Coordinated-Science" target="_blank" rel="noopener noreferrer" className={linkCls}>
                What is the difference between the IGCSEs in Combined Science and Coordinated Science?
              </a>{' '}
              (Combined Science is a single award; Co-ordinated Sciences is a double award, equivalent to two IGCSEs).
            </p>
            <p>
              <strong>Cambridge International:</strong>{' '}
              <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/" target="_blank" rel="noopener noreferrer" className={linkCls}>
                Cambridge IGCSE subjects and syllabuses
              </a>.
            </p>
            <p>
              <strong>Pearson Edexcel:</strong>{' '}
              <a href="https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses.html" target="_blank" rel="noopener noreferrer" className={linkCls}>
                Edexcel International GCSE qualifications
              </a>.
            </p>
            <p>
              <strong>UAE Ministry of Higher Education and Scientific Research:</strong>{' '}
              <a href="https://www.mohesr.gov.ae/En/EServices/ServiceCard/Napo/Documents/Admission%20Criteria/SUAD%20Entry%20criteria.pdf" target="_blank" rel="noopener noreferrer" className={linkCls}>
                Entry criteria for Foundation and Bachelor level
              </a>{' '}
              (university entry rules for school-leaver certificates).
            </p>
            <p>
              <strong>KHDA (Dubai)</strong> and <strong>ADEK (Abu Dhabi)</strong> publish the curriculum requirements for private schools in each emirate. Your school&apos;s options booklet is the final word on what it offers.
            </p>
          </div>

          {/* CTA */}
          <div
            className="my-10 rounded-2xl p-6 sm:p-8 border border-white/10 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] rounded-full mb-3 text-[10px] font-extrabold tracking-wider uppercase">
              FIRST SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              Unsure about a Maths tier or science route?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              Every first 1-hour lesson includes a free 15-minute orientation, so your child and their tutor can agree where to focus first. Sessions are online and 1-to-1, for families in every emirate. No commitment. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a href={BOOKING_URL}
                className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[210px] h-11 px-6 rounded-full font-bold text-white hover:brightness-110 transition text-sm shadow-md whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book First Session
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Ustaad about IGCSE subject choices"
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
              <p className="text-xs text-gray-500 leading-relaxed">
                Ustaad Editorial Team. Every guide is checked for accuracy and parent clarity before it is published.
              </p>
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
