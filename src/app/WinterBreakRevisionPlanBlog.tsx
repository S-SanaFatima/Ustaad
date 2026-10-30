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
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema } from './shared/schemas';

const BOOKING_URL = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20would%20like%20to%20plan%20winter%20break%20revision%20for%20my%20child.';

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

const BLOG = {
  title: 'Winter Break Revision Plan for UAE Students 2026 | Ustaad',
  h1: 'Winter Break Revision Plan for UAE Students: How to Rest, Reset and Be Ready for the New Term',
  titleLine1: 'Winter Break Revision Plan for UAE Students:',
  titleLine2: 'How to Rest, Reset and Be Ready for the New Term',
  categoryBadge: 'USTAAD UAE | PARENT GUIDANCE',
  slug: 'winter-break-revision-plan-uae-students',
  description:
    'UAE winter break runs 14 Dec to 3 Jan. A realistic three-week revision plan for IGCSE and A-Level students, with rest built in, before mocks.',
  subtitle:
    'UAE winter break runs 14 December to 3 January. Here is a realistic three-week revision plan for IGCSE and A-Level students, with rest built in, so the new term starts well.',
  heroImage: '/images/blogs/winter-break-revision-plan-uae-family.webp',
  heroAlt:
    'Parent and teenager agreeing a winter break revision plan at a table with morning light',
  heroCaption: 'A good break plan is short, specific and protects the rest.',
  datePublished: '2026-10-30',
  dateModified: '2026-10-30',
  publishedText: '30 October 2026',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Every guide is checked for accuracy and parent clarity',
  reviewerUrl: '/editorial',
  readTime: '10 min read',
  tags: [
    'Winter Break Revision',
    'UAE School Holidays',
    'Revision Plan',
    'IGCSE Mocks',
    'A-Level Revision',
    'Parent Guidance',
    'Study Routine',
  ],
};

const FAQ_SCHEMA_DATA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the UAE winter break for 2026-27?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For most schools, it runs from Monday 14 December 2026 to Sunday 3 January 2027, with students returning on Monday 4 January 2027. Some private schools differ, so check your school's calendar.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much should my child revise over the winter break?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the year group. As a starting point, about 8 to 10 hours in total across the three weeks for Year 11, less for younger students and slightly more for Year 13 or IB Diploma, spread into short sessions with plenty of rest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should students revise during the winter break at all?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A short, structured amount usually helps, because memory fades without use and the term after the break is busy. It should be small, spaced out, and balanced with proper rest and sleep.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if we are travelling for most of the winter break?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use a minimum plan: three 20 to 25-minute recall sessions a week, plus one longer session in the last few days. Online lessons can continue from abroad if you are working with a tutor, subject to time zones and availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop arguments about revision during the holidays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agree a revision window, a minimum and protected rest days before the break starts, and keep a short weekly check-in. Specific plans and shared decisions cause far fewer arguments than daily nagging.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should Year 9 and Year 10 students do over the winter break?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A little: a few short recall sessions on topics from term 1 that felt shaky, plus reading. The goal is a steady habit, not mock preparation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay if my child takes the first week of the winter break completely off?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A few days of proper rest at the start makes the later sessions more effective. That is why the plan begins with a reset week.',
      },
    },
  ],
};

const FAQS = [
  {
    q: 'When is the UAE winter break for 2026-27?',
    a: "For most schools, it runs from Monday 14 December 2026 to Sunday 3 January 2027, with students returning on Monday 4 January 2027. Some private schools differ, so check your school's calendar.",
  },
  {
    q: 'How much should my child revise over the winter break?',
    a: 'It depends on the year group. As a starting point, about 8 to 10 hours in total across the three weeks for Year 11, less for younger students and slightly more for Year 13 or IB Diploma, spread into short sessions with plenty of rest.',
  },
  {
    q: 'Should students revise during the winter break at all?',
    a: 'A short, structured amount usually helps, because memory fades without use and the term after the break is busy. It should be small, spaced out, and balanced with proper rest and sleep.',
  },
  {
    q: 'What if we are travelling for most of the break?',
    a: 'Use a minimum plan: three 20 to 25-minute recall sessions a week, plus one longer session in the last few days. Online lessons can continue from abroad if you are working with a tutor, subject to time zones and availability.',
  },
  {
    q: 'How do I stop arguments about revision during the holidays?',
    a: 'Agree a revision window, a minimum and protected rest days before the break starts, and keep a short weekly check-in. Specific plans and shared decisions cause far fewer arguments than daily nagging.',
  },
  {
    q: 'What should Year 9 and Year 10 students do over the winter break?',
    a: 'A little: a few short recall sessions on topics from term 1 that felt shaky, plus reading. The goal is a steady habit, not mock preparation.',
  },
  {
    q: 'Is it okay if my child takes the first week completely off?',
    a: 'Yes. A few days of proper rest at the start makes the later sessions more effective. That is why the plan begins with a reset week.',
  },
];

const TOC_ITEMS = [
  { label: 'The dates: this winter break is shorter', id: 'the-dates-this-winter-break-is-shorter' },
  { label: 'Rest is part of the plan', id: 'rest-is-part-of-the-plan' },
  { label: 'The Reset, Repair, Rehearse plan', id: 'the-reset-repair-rehearse-plan' },
  { label: 'Choosing what to revise', id: 'choosing-what-to-revise' },
  { label: 'Methods that work in a holiday', id: 'methods-that-work-in-a-holiday' },
  { label: 'If you are travelling', id: 'if-you-are-travelling' },
  { label: 'Keeping it a holiday: the family agreement', id: 'keeping-it-a-holiday-the-family-agreement' },
  { label: 'Getting ready for the first day back', id: 'getting-ready-for-the-first-day-back' },
  { label: 'When the break shows a bigger problem', id: 'when-the-break-shows-a-bigger-problem' },
  { label: 'Frequently asked questions', id: 'faqs' },
  { label: 'Sources and further reading', id: 'sources' },
];

const RELATED_GUIDES = [
  {
    slug: 'mock-exams-uae-not-what-they-were',
    title: 'UAE Mock Exams: Why They Count More Than Before',
  },
  {
    slug: 'gcse-revision-tips-uae-parents',
    title: 'GCSE & IGCSE Revision Tips for UAE Parents',
  },
  {
    slug: 'parent-teacher-meeting-questions-uae',
    title: 'Parent-Teacher Meetings in the UAE: What to Ask',
  },
];

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
        <img
          src={src}
          alt={alt}
          width={1376}
          height={774}
          loading="lazy"
          className="w-full h-full object-cover block"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">
          {caption}
        </figcaption>
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

function SocialShare({ url, title }: { url: string; title: string }) {
  const enc = encodeURIComponent(url);
  const encT = encodeURIComponent(title);
  return (
    <div className="flex items-center gap-1.5 ml-auto">
      <a
        href={`https://twitter.com/intent/tweet?url=${enc}&text=${encT}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500 hover:text-[#0f4a9b]"
        aria-label="Share on X"
      >
        <span className="text-xs font-bold">X</span>
      </a>
      <a
        href={`https://wa.me/?text=${encT}%20${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 transition text-[#25D366]"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="h-3.5 w-3.5" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1877f2]/10 hover:bg-[#1877f2]/20 transition text-[#1877f2] font-bold text-xs"
        aria-label="Share on Facebook"
      >
        f
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${enc}&title=${encT}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 transition text-[#0a66c2] font-bold text-xs"
        aria-label="Share on LinkedIn"
      >
        in
      </a>
      <a
        href={`mailto:?subject=${encT}&body=${enc}`}
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500"
        aria-label="Share via Email"
      >
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
            <a
              key={i}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center gap-2.5 group py-0.5"
            >
              <span className="shrink-0 text-[10px] font-extrabold text-[#0f4a9b]/35 w-4">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[13px] text-gray-500 group-hover:text-[#0f4a9b] transition-colors leading-snug">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* IMAGE 2: Coded Reset, Repair, Rehearse timeline (navy & gold palette) */
function ResetRepairRehearseTimeline() {
  const weeks = [
    {
      step: 'WEEK 01',
      dates: '14 to 20 Dec',
      title: 'Reset',
      summary: 'Proper rest and normal sleep. Gather marked papers and sort topics into red, amber and green.',
      sessions: '3 sessions, 20 to 30 min',
    },
    {
      step: 'WEEK 02',
      dates: '21 to 27 Dec',
      title: 'Repair',
      summary: 'Active recall on red topics with the book closed, check against notes, fix gaps and log mistakes.',
      sessions: '4 sessions, 45 to 60 min',
    },
    {
      step: 'WEEK 03',
      dates: '28 Dec to 3 Jan',
      title: 'Rehearse',
      summary: 'Mixed recall across topics, one timed section in exam conditions, and shift to school sleep times.',
      sessions: '3 sessions, about 60 min',
    },
  ];

  return (
    <figure
      className="my-7 text-left"
      role="img"
      aria-label="Three-week timeline showing Reset, Repair and Rehearse from 14 December to 3 January"
    >
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#07244f] text-white shadow-md border border-[#C7A24A]/30">
        <div className="text-center mb-5">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#f0c96a] uppercase bg-white/10 px-3 py-1 rounded-full border border-[#C7A24A]/30">
            THREE-WEEK WINTER BREAK TIMELINE
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-white mt-2">
            Reset, Repair, Rehearse (14 Dec to 3 Jan)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch">
          {weeks.map((item) => (
            <div
              key={item.step}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-[#C7A24A]/30 flex flex-col justify-between h-full text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-mono font-black text-[#0a1f3d] bg-[#f0c96a] px-2 py-0.5 rounded shrink-0">
                    {item.step}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#f0c96a] whitespace-nowrap">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    {item.dates}
                  </span>
                </div>
                <p className="text-base font-extrabold text-white mb-1.5 leading-snug">{item.title}</p>
                <p className="text-xs text-blue-100 leading-relaxed mb-3.5 text-left">{item.summary}</p>
              </div>
              <div className="pt-2.5 border-t border-white/15 flex items-center gap-1.5 text-[11px] font-bold text-[#f0c96a] whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>{item.sessions}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">
        Three weeks, three jobs. The first one is rest.
      </figcaption>
    </figure>
  );
}

/* IMAGE 3: Coded Red, Amber, Green topic sort */
function RedAmberGreenTriageGraphic() {
  const columns = [
    {
      label: 'Red',
      badgeBg: 'bg-rose-600 text-white',
      cardBg: 'bg-rose-50/70 border-rose-200',
      headingColor: 'text-rose-900',
      meaning: 'Cannot do it without notes, or loses marks here repeatedly',
      action: 'Revise first, and revisit at least twice during the break',
    },
    {
      label: 'Amber',
      badgeBg: 'bg-amber-500 text-white',
      cardBg: 'bg-amber-50/70 border-amber-200',
      headingColor: 'text-amber-900',
      meaning: 'Can do it slowly, or with errors',
      action: 'One session each, then mark and log mistakes',
    },
    {
      label: 'Green',
      badgeBg: 'bg-emerald-600 text-white',
      cardBg: 'bg-emerald-50/70 border-emerald-200',
      headingColor: 'text-emerald-900',
      meaning: 'Confident, accurate, quick',
      action: 'A quick recall check only',
    },
  ];

  return (
    <figure
      className="my-7 text-left"
      role="img"
      aria-label="Three columns sorting revision topics into red, amber and green"
    >
      <div className="p-5 sm:p-6 rounded-2xl bg-[#f8fafd] border border-slate-200 shadow-sm">
        <div className="text-center mb-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#0f4a9b] uppercase bg-[#0f4a9b]/10 px-3 py-1 rounded-full">
            EVIDENCE-BASED TOPIC TRIAGE
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] mt-2">
            Red, Amber and Green Topic Sort
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {columns.map((col) => (
            <div
              key={col.label}
              className={`rounded-xl p-4 border flex flex-col justify-between ${col.cardBg}`}
            >
              <div>
                <span className={`inline-block text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md mb-2.5 ${col.badgeBg}`}>
                  {col.label}
                </span>
                <p className={`text-xs sm:text-[13px] font-bold mb-2 leading-snug ${col.headingColor}`}>
                  {col.meaning}
                </p>
              </div>
              <div className="pt-2.5 border-t border-black/10 text-xs text-slate-700">
                <strong className="text-[#0a1f3d]">What to do:</strong> {col.action}
              </div>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

export default function WinterBreakRevisionPlanBlog() {
  const [tocOpen, setTocOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://ustaad.ae${canonical}`;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
        schema={[
          articleSchema({
            title: BLOG.h1,
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: {
              name: BLOG.author,
              url: BLOG.authorUrl,
              jobTitle: BLOG.authorRole,
            },
            reviewer: {
              type: 'Organization',
              name: BLOG.reviewer,
              url: BLOG.reviewerUrl,
            },
            image: BLOG.heroImage,
            timeRequired: 'PT10M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Parent Guidance', url: '/blogs/parent-guidance' },
            { name: 'Winter Break Revision Plan', url: canonical },
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
          <a href="/blogs/parent-guidance" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">
            Parent Guidance
          </a>
          <span>/</span>
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[180px]">Winter Break Revision Plan</span>
        </div>
      </div>

      {/* Main Content Article */}
      <article className="pt-7 pb-16 bg-white antialiased">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Category Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">{BLOG.categoryBadge}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span
                className="italic"
                style={{
                  background: THEME_GRADIENT,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {BLOG.titleLine2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-justify">
              {BLOG.subtitle}
            </p>

            {/* Meta Row: Author, Reviewer, Date, Read Time, Social Share */}
            <div className="mb-4 mt-2 space-y-2">
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Written by:</span>{' '}
                  <a href={BLOG.authorUrl} className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    {BLOG.author}
                  </a>
                  <span className="block sm:inline">
                    {' '}<a href={BLOG.authorUrl} className="text-gray-500 hover:text-[#0f4a9b]">| {BLOG.authorRole}</a>
                  </span>
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Reviewed by:</span>{' '}
                  <a href={BLOG.reviewerUrl} className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    {BLOG.reviewer}
                  </a>
                  <span className="block sm:inline">
                    {' '}<span className="text-gray-500">| {BLOG.reviewerRole}</span>
                  </span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-400 pt-1">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1.5 min-w-0">
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

          {/* IMAGE 1: Hero Image */}
          <figure className="my-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/9] bg-slate-100">
              <img
                src={BLOG.heroImage}
                alt={BLOG.heroAlt}
                width={1376}
                height={774}
                className="w-full h-full object-cover block"
                loading="eager"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-gray-400 italic">
              {BLOG.heroCaption}
            </figcaption>
          </figure>

          {/* Table of Contents */}
          <TOC open={tocOpen} setOpen={setTocOpen} />

          {/* Opening Narrative Hook */}
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              It is the last day of term in Dubai. A Year 11 student walks in with a bag of revision packs and a mock timetable for the new year. The family flies out on the 22nd and returns on the 2nd.
            </p>
            <p>
              Her mother has a plan: three hours every morning. Her daughter has a different one: &ldquo;It&apos;s a holiday. I&apos;m doing nothing.&rdquo;
            </p>
            <p>
              Both are partly right. Three weeks off is a real break, and she has earned it. But the weeks after it are short, mocks are coming, and a student who does nothing at all for 21 days returns to topics that have faded.
            </p>
            <p>
              This guide offers a middle path: a realistic three-week plan, built around the UAE calendar, that fits around travel and takes the argument out of the break.
            </p>
          </div>

          {/* ── 01. The dates: this winter break is shorter ── */}
          <SectionHeading num="01" id="the-dates-this-winter-break-is-shorter">
            The dates: this winter break is shorter
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Under the UAE Ministry of Education&apos;s three-year calendar, the 2026-27 winter break runs from Monday 14 December 2026 to Sunday 3 January 2027, with students returning on Monday 4 January 2027. That is 21 days, a week shorter than last year&apos;s four-week break (8 December 2025 to 4 January 2026). The spring break has also been trimmed to one week, from 5 to 11 April 2027, and the school year ends on 2 July 2027.
            </p>
            <p>
              Most private schools follow this calendar, but some differ, so check your own school&apos;s dates.
            </p>

            <div className="my-5 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#0a1f3d] text-white">
                    <th className="p-3 font-bold border-b border-slate-700">When</th>
                    <th className="p-3 font-bold border-b border-slate-700">What happens</th>
                    <th className="p-3 font-bold border-b border-slate-700">Why it matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b] whitespace-nowrap">14 Dec to 3 Jan</td>
                    <td className="p-3 text-slate-700">Winter break (21 days)</td>
                    <td className="p-3 text-slate-600">The longest window for focused catch-up in the school year</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b] whitespace-nowrap">From 4 Jan</td>
                    <td className="p-3 text-slate-700">Term resumes. Mocks at many schools fall in January or February, but dates vary</td>
                    <td className="p-3 text-slate-600">
                      Results can feed predicted grades and tier decisions (see our guide to{' '}
                      <a href="/blogs/mock-exams-uae-not-what-they-were" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                        UAE mock exams
                      </a>
                      )
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b] whitespace-nowrap">Around 8 Feb to early Mar</td>
                    <td className="p-3 text-slate-700">Ramadan is expected, subject to moon sighting</td>
                    <td className="p-3 text-slate-600">Routines shift, sessions get shorter</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b] whitespace-nowrap">5 to 11 Apr</td>
                    <td className="p-3 text-slate-700">Spring break (one week)</td>
                    <td className="p-3 text-slate-600">Too short for a big catch-up</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b] whitespace-nowrap">May to June</td>
                    <td className="p-3 text-slate-700">Main IGCSE and A-Level exam series</td>
                    <td className="p-3 text-slate-600">The break is the last long stretch before the run-in</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <NarrativeBox label="PARENT TAKEAWAY">
              With a three-week break, a short spring break and a Ramadan stretch ahead, the break is the best chance to build a calm base before the busiest months of the year.
            </NarrativeBox>
          </div>

          {/* ── 02. Rest is part of the plan ── */}
          <SectionHeading num="02" id="rest-is-part-of-the-plan">
            Rest is part of the plan
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Many families treat revision and rest as opposites. They work together.
            </p>
            <p>
              A rested brain remembers better. Sleep is when recently learned material is reactivated and stabilised, as we explain in{' '}
              <a href="/blogs/sleep-and-memory-why-all-nighters-backfire" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                Sleep and Memory
              </a>
              . A student who spends the break exhausted, or who treats it as a sprint, undermines the very thing they are trying to build.
            </p>
            <p>
              Doing nothing for three weeks has a cost too. Memory fades without use. Research on distributed practice, including a large review by Cepeda and colleagues, finds that revisiting material in spaced sessions supports long-term retention better than one block of study. For a three-week break, that means little and often is more effective than nothing, and far more effective than one marathon day.
            </p>
            <p>
              The aim is the smallest amount of work that makes a difference, placed where it counts, with the rest left alone.
            </p>

            <InlineImage
              src="/images/blogs/student-short-spaced-revision-rest-plan-uae.webp"
              alt="Student doing a short, focused study session by a bright terrace window with rest days planned on the wall calendar"
              caption="Little and often beats marathon study days: short, focused sessions leave the rest of the break free."
            />
          </div>

          {/* ── 03. The Reset, Repair, Rehearse plan ── */}
          <SectionHeading num="03" id="the-reset-repair-rehearse-plan">
            The Reset, Repair, Rehearse plan
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Think of the break as three weeks, each with a different job.
            </p>

            <div className="my-5 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#0a1f3d] text-white">
                    <th className="p-3 font-bold border-b border-slate-700">Week</th>
                    <th className="p-3 font-bold border-b border-slate-700">Job</th>
                    <th className="p-3 font-bold border-b border-slate-700">What to do</th>
                    <th className="p-3 font-bold border-b border-slate-700">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b] whitespace-nowrap">Week 1 (Mon 14 to Sun 20 Dec)</td>
                    <td className="p-3 font-bold text-[#0a1f3d]">Reset</td>
                    <td className="p-3 text-slate-600">
                      A few days of proper rest and normal sleep. Gather marked papers and the mock topic list. Sort topics into red, amber and green (section 04). Two or three gentle recall sessions.
                    </td>
                    <td className="p-3 text-slate-700 font-medium whitespace-nowrap">3 sessions, 20 to 30 min</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b] whitespace-nowrap">Week 2 (Mon 21 to Sun 27 Dec)</td>
                    <td className="p-3 font-bold text-[#0a1f3d]">Repair</td>
                    <td className="p-3 text-slate-600">
                      Work on the red topics: close the book, write what you remember, check against notes, fix the gaps, and record mistakes. Keep at least one full day of no revision.
                    </td>
                    <td className="p-3 text-slate-700 font-medium whitespace-nowrap">4 sessions, 45 to 60 min</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b] whitespace-nowrap">Week 3 (Mon 28 Dec to Sun 3 Jan)</td>
                    <td className="p-3 font-bold text-[#0a1f3d]">Rehearse</td>
                    <td className="p-3 text-slate-600">
                      Mixed recall across topics, then one timed section or paper in exam conditions (correct board and tier), marked honestly. Move to school-day sleep times from about 1 January.
                    </td>
                    <td className="p-3 text-slate-700 font-medium">3 sessions, about 60 min, one of them timed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For a Year 11 or Year 13 student, that comes to roughly 8 to 10 hours across three weeks, far less than most families fear, but spread so that it works.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">How much, by year group.</strong> These are starting points, not rules. If your school has set holiday work, do that first.
            </p>

            <div className="my-5 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#0a1f3d] text-white">
                    <th className="p-3 font-bold border-b border-slate-700">Year group</th>
                    <th className="p-3 font-bold border-b border-slate-700">Suggested total across the break</th>
                    <th className="p-3 font-bold border-b border-slate-700">Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Years 7 and 8</td>
                    <td className="p-3 text-slate-700">Light: reading and a few short tasks</td>
                    <td className="p-3 text-slate-600">Keep curiosity alive. No formal revision needed</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Years 9 and 10</td>
                    <td className="p-3 text-slate-700">About 3 to 4 hours</td>
                    <td className="p-3 text-slate-600">
                      Fill gaps from term 1 and build the habit (see{' '}
                      <a href="/blogs/gcse-revision-tips-uae-parents" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                        GCSE &amp; IGCSE revision tips
                      </a>
                      )
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Year 11</td>
                    <td className="p-3 text-slate-700">About 8 to 10 hours</td>
                    <td className="p-3 text-slate-600">Mock topics, weak areas, one timed section</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Year 12</td>
                    <td className="p-3 text-slate-700">About 6 to 8 hours</td>
                    <td className="p-3 text-slate-600">Consolidate term 1 content and any set coursework</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Year 13 and IB Diploma</td>
                    <td className="p-3 text-slate-700">About 10 to 12 hours, plus coursework or IA deadlines</td>
                    <td className="p-3 text-slate-600">Mock preparation alongside applications and coursework</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* IMAGE 2: Coded Reset, Repair, Rehearse Timeline */}
            <ResetRepairRehearseTimeline />
          </div>

          {/* ── 04. Choosing what to revise ── */}
          <SectionHeading num="04" id="choosing-what-to-revise">
            Choosing what to revise
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Revising &ldquo;everything&rdquo; is how a break turns into nothing. Pick based on evidence, not mood.
            </p>
            <p className="font-bold text-[#0a1f3d]">Gather the evidence:</p>
            <ul className="space-y-2 my-3 pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>The last marked papers and mock results</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  The most recent report and teacher comments (our guide to{' '}
                  <a href="/blogs/read-uae-school-report-card" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    reading a UAE report card
                  </a>{' '}
                  helps)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>The mock topic list, if the school has issued one</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>The exam board, specification and tier for each subject</span>
              </li>
            </ul>

            <p className="font-bold text-[#0a1f3d]">Sort each topic into three colours:</p>

            {/* IMAGE 3: Coded Red, Amber, Green Topic Triage */}
            <RedAmberGreenTriageGraphic />

            <div className="my-5 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#0a1f3d] text-white">
                    <th className="p-3 font-bold border-b border-slate-700">Colour</th>
                    <th className="p-3 font-bold border-b border-slate-700">Meaning</th>
                    <th className="p-3 font-bold border-b border-slate-700">What to do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-rose-700">Red</td>
                    <td className="p-3 text-slate-700">Cannot do it without notes, or loses marks here repeatedly</td>
                    <td className="p-3 text-slate-600">Revise first, and revisit at least twice during the break</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-amber-700">Amber</td>
                    <td className="p-3 text-slate-700">Can do it slowly, or with errors</td>
                    <td className="p-3 text-slate-600">One session each, then mark and log mistakes</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-emerald-700">Green</td>
                    <td className="p-3 text-slate-700">Confident, accurate, quick</td>
                    <td className="p-3 text-slate-600">A quick recall check only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong className="text-[#0a1f3d]">Put the highest-mark red topics first.</strong> Students naturally start with the topics they enjoy. A break plan works best when the first sessions go to the topics that are both weak and heavily marked.
            </p>
            <p>
              If you are not sure which topics those are, a conversation with the subject teacher is the quickest route. Our guide to{' '}
              <a href="/blogs/parent-teacher-meeting-questions-uae" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                parent-teacher meeting questions
              </a>{' '}
              shows what to ask.
            </p>
          </div>

          {/* ── 05. Methods that work in a holiday ── */}
          <SectionHeading num="05" id="methods-that-work-in-a-holiday">
            Methods that work in a holiday
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Time is short, so choose methods that give the most for the least.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">Recall before re-reading.</strong> Close the book and write everything remembered about a topic, then check what was missed. Testing yourself improves long-term retention more than rereading, as Roediger and Karpicke showed, and the evidence reviewed by Dunlosky and colleagues rates it as a high-utility technique. Our guide to{' '}
              <a href="/blogs/illusion-of-competence-revision-false-confidence" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                The Illusion of Competence
              </a>{' '}
              explains why highlighting and rereading feel productive but do little.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">Space it.</strong> Return to each red topic at least twice across the three weeks, rather than doing it once and moving on.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">Mark honestly, and log mistakes.</strong> Use the mark scheme, and note the first incorrect step in each error. Our guide to{' '}
              <a href="/blogs/silly-mistakes-maths-exams" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                silly mistakes in maths exams
              </a>{' '}
              shows a simple error log.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">Save the timed paper for week 3.</strong> Past papers work best once the weak topics are repaired, which is why{' '}
              <a href="/blogs/igcse-preparation-past-papers-final-step" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                past papers are the final step, not the first
              </a>
              . Use the correct board and tier.
            </p>

            {/* IMAGE 4: Short morning session */}
            <InlineImage
              src="/images/blogs/teenager-short-morning-revision-session-window.webp"
              alt="Teenager doing a short revision session at a desk by a window in the morning"
              caption="Short, closed-book morning recall sessions leave the rest of the day free."
            />
          </div>

          {/* ── 06. If you are travelling ── */}
          <SectionHeading num="06" id="if-you-are-travelling">
            If you are travelling
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Most UAE families travel at least part of the break. Plan around it, rather than pretending it will not happen.
            </p>

            <div className="my-5 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#0a1f3d] text-white">
                    <th className="p-3 font-bold border-b border-slate-700">Your situation</th>
                    <th className="p-3 font-bold border-b border-slate-700">Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Staying in the UAE</td>
                    <td className="p-3 text-slate-600">
                      Use mornings for revision, before the day&apos;s activities. Two or three blocks a week is enough. Do the full three-week plan
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Away for about a week</td>
                    <td className="p-3 text-slate-600">
                      Do Week 1 before you leave and part of Week 2 or 3 when you return. While away, one 20-minute recall session a day on a notebook or phone flashcards, with no heavy books
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Away for most of the break</td>
                    <td className="p-3 text-slate-600">
                      Minimum plan: three 20 to 25-minute recall sessions a week, plus one 45-minute session in the last three days. Return to school-day sleep times before you fly back, if you can
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Anywhere with a stable connection</td>
                    <td className="p-3 text-slate-600">
                      Online 1-to-1 sessions can continue from wherever you are. Check your tutor&apos;s availability and time zones
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Do not pack every textbook. A single folder holding the priority topics and a few marked papers is enough, and it avoids the guilt of a bag full of unopened books.
            </p>

            {/* IMAGE 5: Travelling light */}
            <InlineImage
              src="/images/blogs/student-revising-while-travelling-hotel-desk-v3.webp"
              alt="UAE student reviewing notes and attending a 1-to-1 online session at a desk"
              caption="One slim folder with priority topics and a few marked papers is enough when travelling."
            />
          </div>

          {/* ── 07. Keeping it a holiday: the family agreement ── */}
          <SectionHeading num="07" id="keeping-it-a-holiday-the-family-agreement">
            Keeping it a holiday: the family agreement
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              The best break plans are agreed together, not imposed. A five-minute conversation before the break saves a fortnight of arguments.
            </p>

            <div className="my-5 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#0a1f3d] text-white">
                    <th className="p-3 font-bold border-b border-slate-700">Agree on...</th>
                    <th className="p-3 font-bold border-b border-slate-700">For example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">The revision window</td>
                    <td className="p-3 text-slate-600">&ldquo;10:00 to 11:00 on Tuesday, Wednesday, Thursday and Sunday&rdquo;</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">The minimum</td>
                    <td className="p-3 text-slate-600">&ldquo;Three 25-minute recall sessions in week 1&rdquo;</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Protected rest</td>
                    <td className="p-3 text-slate-600">&ldquo;Fridays and any day we are out all day&rdquo;</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">The phone</td>
                    <td className="p-3 text-slate-600">&ldquo;In the hallway basket during sessions&rdquo;</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">The check-in</td>
                    <td className="p-3 text-slate-600">&ldquo;Sunday evening, ten minutes: what did you do and what&apos;s next?&rdquo;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Fixing the window in advance helps. Research by Gollwitzer and Sheeran shows that specific if-then plans, such as &ldquo;If it is 10:00 and breakfast is done, I sit down at the desk&rdquo;, make follow-through far more likely than good intentions. If starting is the hard part, our guide to{' '}
              <a href="/blogs/why-teenagers-procrastinate-on-revision" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                why teenagers procrastinate on revision
              </a>{' '}
              explains how to make the first step small.
            </p>

            <p className="font-bold text-[#0a1f3d]">What to say:</p>

            <div className="my-5 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#0a1f3d] text-white">
                    <th className="p-3 font-bold border-b border-slate-700">Instead of...</th>
                    <th className="p-3 font-bold border-b border-slate-700">Try...</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 text-slate-600 font-medium">&ldquo;You&apos;ll revise every day, no exceptions.&rdquo;</td>
                    <td className="p-3 text-[#0f4a9b] font-semibold">&ldquo;Let&apos;s agree three or four short sessions and protect the rest.&rdquo;</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 text-slate-600 font-medium">&ldquo;You&apos;ve done nothing all week!&rdquo;</td>
                    <td className="p-3 text-[#0f4a9b] font-semibold">&ldquo;What&apos;s one 25-minute thing you could do before lunch?&rdquo;</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 text-slate-600 font-medium">&ldquo;Your friends are all revising.&rdquo;</td>
                    <td className="p-3 text-[#0f4a9b] font-semibold">&ldquo;What would make this break feel balanced for you?&rdquo;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <NarrativeBox label="PARENT TAKEAWAY">
              Agree the plan together, keep it small, and protect the rest. A student who feels the break is genuinely theirs is far more likely to do the work.
            </NarrativeBox>

            {/* IMAGE 6: Rest and family time */}
            <InlineImage
              src="/images/blogs/family-winter-break-rest-outdoors-uae-v3.webp"
              alt="UAE student completing a short winter break session while parents relax nearby in a Dubai home"
              caption="Protecting proper rest and family time makes the short revision blocks far more effective."
            />
          </div>

          {/* ── 08. Getting ready for the first day back ── */}
          <SectionHeading num="08" id="getting-ready-for-the-first-day-back">
            Getting ready for the first day back
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              The break ends on Sunday 3 January, and school restarts on Monday 4 January. A rough first week can undo some of the break&apos;s value, so plan the landing.
            </p>
            <ul className="space-y-2.5 my-3 pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Shift sleep gradually.</strong> Move wake-up times earlier by 15 to 30 minutes a day over the last three or four days, so Monday is not a shock.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Pack the bag the night before,</strong> with the timetable, charged devices and any holiday work.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Ask about the mock timetable</strong> and the topics to be covered, if you have not already.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Plan the first week lightly.</strong> One short recall session a day, and an early night.
                </span>
              </li>
            </ul>
            <p>
              <strong className="text-[#0a1f3d]">Think ahead to Ramadan.</strong> It is expected to begin around 8 February, subject to moon sighting. The weeks between early January and then are the best time to build a steady routine before sessions shorten. Our guide to{' '}
              <a href="/blogs/sleep-and-memory-why-all-nighters-backfire" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                Sleep and Memory
              </a>{' '}
              has practical advice for revising around Ramadan.
            </p>
          </div>

          {/* ── 09. When the break shows a bigger problem ── */}
          <SectionHeading num="09" id="when-the-break-shows-a-bigger-problem">
            When the break shows a bigger problem
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              A holiday sometimes makes a problem visible. Signs worth acting on:
            </p>
            <ul className="space-y-2.5 my-3 pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>A student cannot do the &ldquo;red&rdquo; topics even with notes open</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>They avoid starting for days despite a small, agreed plan</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>Panic or tears around a particular subject</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>The same errors keep appearing in marked work</span>
              </li>
            </ul>
            <p>
              Acting early helps. A few weeks before mocks is a good time to ask for help, not the week after the result. Speak to the subject teacher, and if the gap is specific, a short, targeted block with a tutor can help. Our{' '}
              <a href="/blogs/private-tutoring-uae-parent-guide" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                private tutoring guide
              </a>{' '}
              explains how to decide, and{' '}
              <a href="/blogs/10-questions-hiring-private-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                10 honest questions to ask before hiring a tutor
              </a>{' '}
              shows how to choose.
            </p>
          </div>

          {/* ── 10. Frequently asked questions ── */}
          <SectionHeading num="10" id="faqs">
            Frequently asked questions
          </SectionHeading>
          <div className="space-y-3 my-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-[#0a1f3d] text-sm sm:text-base hover:bg-slate-50 transition cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0f4a9b] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* ── 11. Sources and further reading ── */}
          <SectionHeading num="11" id="sources">
            Sources and further reading
          </SectionHeading>
          <div className="text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed my-4 bg-[#f8fafd] p-5 rounded-2xl border border-slate-200">
            <p>
              <strong>UAE Ministry of Education:</strong> Academic calendar for public and private schools, 2026-27 to 2028-29 (winter break 14 December 2026 to 3 January 2027, spring break 5 to 11 April 2027).
            </p>
            <p>
              <strong>Gulf News:</strong> UAE approves school dates for 2026-2029 across public and private sectors, and UAE school calendar 2026-2029: holidays and key exceptions explained.
            </p>
            <p>
              <strong>Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., &amp; Rohrer, D. (2006).</strong> Distributed practice in verbal recall tasks: A review and quantitative synthesis. <em>Psychological Bulletin</em>.
            </p>
            <p>
              <strong>Roediger, H. L., &amp; Karpicke, J. D. (2006).</strong> Test-enhanced learning: Taking memory tests improves long-term retention. <em>Psychological Science</em>.
            </p>
            <p>
              <strong>Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., &amp; Willingham, D. T. (2013).</strong> Improving students&apos; learning with effective learning techniques. <em>Psychological Science in the Public Interest</em>.
            </p>
            <p>
              <strong>Diekelmann, S., &amp; Born, J. (2010).</strong> The memory function of sleep. <em>Nature Reviews Neuroscience</em>.
            </p>
            <p>
              <strong>Gollwitzer, P. M., &amp; Sheeran, P. (2006).</strong> Implementation intentions and goal achievement: A meta-analysis of effects and processes. <em>Advances in Experimental Social Psychology</em>.
            </p>
            <p>
              <strong>Related:</strong>{' '}
              <a href="/blogs/mock-exams-uae-not-what-they-were" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                UAE Mock Exams: Why They Count More Than Before
              </a>
            </p>
            <p>
              <strong>Related:</strong>{' '}
              <a href="/blogs/gcse-revision-tips-uae-parents" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                GCSE &amp; IGCSE Revision Tips for UAE Parents
              </a>
            </p>
          </div>

          {/* CTA block: Diagnostic Session */}
          <div
            className="my-10 rounded-2xl p-6 sm:p-8 border border-white/10 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] rounded-full mb-3 text-[10px] font-extrabold tracking-wider uppercase">
              DIAGNOSTIC SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              Want a break plan built around your child&apos;s mock topics?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              Every first Ustaad lesson starts with 15 free minutes to pinpoint the gaps and agree where to focus next. Sessions are online and 1-to-1, for families in every emirate, so they can continue from wherever you spend the break. No commitment. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-xs sm:text-sm w-full sm:w-auto shadow-md"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
              >
                Book First Session
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-xs sm:text-sm transition shadow-md w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 fill-white" /> Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* About Author & Reviewer */}
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-[#f8fafd]">
              <div className="flex items-center gap-1.5 mb-2">
                <User className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[11px] font-bold text-[#0f4a9b] uppercase tracking-wider">About the Author</span>
              </div>
              <a href={BLOG.authorUrl} className="font-bold text-xs text-[#0a1f3d] hover:text-[#0f4a9b] block mb-1">
                {BLOG.author}
              </a>
              <p className="text-xs text-gray-500 leading-relaxed">
                Nimra Shahzada writes about the study problems UAE parents see at home: children who revise for hours but still lose marks, homework that never gets finished, and exam stress that builds before mocks.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-[#f8fafd]">
              <div className="flex items-center gap-1.5 mb-2">
                <ShieldCheck className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[11px] font-bold text-[#0f4a9b] uppercase tracking-wider">Reviewed By</span>
              </div>
              <a href={BLOG.reviewerUrl} className="font-bold text-xs text-[#0a1f3d] hover:text-[#0f4a9b] block mb-1">
                {BLOG.reviewer}
              </a>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ustaad Editorial Team. Every guide is checked for accuracy and parent clarity before it is published.
              </p>
            </div>
          </div>

          {/* Related Guides on Parent Guidance */}
          <div className="my-8 p-5 rounded-2xl border border-slate-200 bg-white">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-3">
              Related Guides on Parent Guidance
            </h3>
            <div className="space-y-2 text-xs">
              {RELATED_GUIDES.map((guide) => (
                <a
                  key={guide.slug}
                  href={`/blogs/${guide.slug}`}
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group"
                >
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
                <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </article>
    </Layout>
  );
}

