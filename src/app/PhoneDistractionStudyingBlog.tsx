import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  User,
  Clock,
  Brain,
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

/*
 * Target keywords: phone distraction while studying (primary), how to stop getting
 * distracted by your phone while studying, how to focus while studying, phone ban
 * UAE schools, screen time and grades, study focus tips for teenagers.
 * Different intent from /blogs/why-teenagers-procrastinate-on-revision (starting work),
 * /blogs/exam-stamina-uae-students (sustaining a full paper) and
 * /blogs/sleep-and-memory-why-all-nighters-backfire (night-time use). Those posts
 * mention phones in passing; this is the owner page for phone distraction.
 */

const BOOKING_URL = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20read%20your%20guide%20to%20phone%20distraction%20while%20studying%20and%20would%20like%20support%20for%20my%20child.';

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

const BLOG = {
  title: 'Phone Distraction While Studying: A UAE Guide | Ustaad',
  h1: 'Phone Distraction While Studying: Why Teenagers Lose Focus, and What Actually Works for UAE Students',
  titleLine1: 'Phone Distraction While Studying:',
  titleLine2: 'Why Teenagers Lose Focus, and What Actually Works for UAE Students',
  categoryBadge: 'USTAAD UAE | PSYCHOLOGY OF LEARNING',
  slug: 'phone-distraction-while-studying-uae',
  description:
    'Why a phone breaks focus even on silent, what the UAE school phone ban means for study at home, and a 5-step plan to revise without phone distraction.',
  subtitle:
    'UAE schools have taken phones out of the classroom. At home, the phone is still on the desk. Here is what the psychology of attention says about phone distraction while studying, and a five-step plan that works without a daily argument.',
  heroImage: '/images/blogs/phone-distraction-while-studying-uae-hero.webp',
  heroAlt:
    'Teenage student in a Dubai apartment writing maths working at a study desk while a smartphone sits face down in a basket by the door, away from the desk',
  heroCaption: 'The phone is out of reach, not just on silent. That small distance protects the whole study block.',
  datePublished: '2026-11-20',
  dateModified: '2026-11-20',
  publishedText: '20 November 2026',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Every guide is checked for accuracy and parent clarity',
  reviewerUrl: '/editorial',
  readTime: '8 min read',
  tags: [
    'Phone Distraction',
    'Study Focus',
    'Attention',
    'Screen Time',
    'UAE Schools',
    'Revision Tips',
    'Parent Guidance',
  ],
};

const FAQS = [
  {
    q: 'How do I stop getting distracted by my phone while studying?',
    a: 'Put the phone in another room for each study block, not just on silent. Turn on a focus mode so notifications stay quiet, work in blocks of 25 to 45 minutes, and check the phone only in the planned break. Removing the phone works far better than relying on willpower.',
  },
  {
    q: 'Is it enough to put my phone on silent while I study?',
    a: 'Usually not. Research on notifications found that simply receiving an alert, without answering it, disrupted attention on a focused task. A phone on the desk also invites quick checks. Out of sight and out of reach is the setting that protects focus.',
  },
  {
    q: 'Are phones banned in UAE schools?',
    a: 'The UAE Ministry of Education bans student phones in public schools and in private schools that follow the Ministry curriculum, under its student behaviour rules. Phones found with students can be confiscated and parents are informed. Other private schools set their own rules, so check your school’s policy.',
  },
  {
    q: 'Does screen time affect exam results?',
    a: 'Heavy leisure use is linked to lower results. In the OECD’s PISA 2022 study, students who used devices for leisure up to an hour a day at school scored well above those using them for five to seven hours. The link is a correlation, not proof that phones alone caused the gap.',
  },
  {
    q: 'How long should a teenager study before taking a phone break?',
    a: 'Most students focus well in blocks of 25 to 45 minutes, followed by a short break. Younger students can start shorter and build up. Ending each block at a natural stopping point, with a note of the next step, makes it easier to switch back in.',
  },
  {
    q: 'Should parents take a teenager’s phone away during exams?',
    a: 'Agreeing a plan together works better than confiscating the phone as a punishment. Set a charging spot outside the study room and the bedroom, agree the study blocks and the breaks, and keep the same rule for everyone at home where you can.',
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
  { label: 'Why the phone wins: the psychology of attention', id: 'why-phones-break-focus' },
  { label: 'What the research says about phones and grades', id: 'phones-and-grades-research' },
  { label: 'UAE schools are phone-free. Home is not', id: 'uae-school-phone-ban' },
  { label: 'A five-step plan for phone-free study at home', id: 'phone-free-study-plan' },
  { label: 'For parents: making it work without a fight', id: 'for-parents' },
  { label: 'Frequently asked questions', id: 'faqs' },
  { label: 'Sources and further reading', id: 'sources' },
];

const RELATED_GUIDES = [
  {
    slug: 'why-teenagers-procrastinate-on-revision',
    title: "Why Teenagers Procrastinate on Revision (And Why It Isn't Laziness)",
  },
  {
    slug: 'illusion-of-competence-revision-false-confidence',
    title: 'The Illusion of Competence: Why Re-Reading Notes Gives UAE Students False Confidence',
  },
  {
    slug: 'sleep-and-memory-why-all-nighters-backfire',
    title: 'Sleep and Memory: Why All-Nighters Backfire for UAE Students',
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

/* Coded graphic: one study hour, interrupted versus protected */
function FocusTimeline() {
  // Each segment: minutes and kind. Illustrative only.
  const interrupted = [
    { m: 9, k: 'focus' }, { m: 3, k: 'check' }, { m: 4, k: 'residue' }, { m: 8, k: 'focus' }, { m: 4, k: 'check' },
    { m: 4, k: 'residue' }, { m: 7, k: 'focus' }, { m: 5, k: 'check' }, { m: 4, k: 'residue' }, { m: 12, k: 'focus' },
  ];
  const protectedHour = [{ m: 40, k: 'focus' }, { m: 10, k: 'break' }, { m: 10, k: 'focus' }];
  const color: Record<string, string> = {
    focus: 'linear-gradient(135deg,#1e5ba8,#0f4a9b)',
    check: '#e11d48',
    residue: '#fda4af',
    break: 'linear-gradient(135deg,#f0c96a,#A8892A)',
  };
  const sum = (a: { m: number; k: string }[]) => a.filter((s) => s.k === 'focus').reduce((t, s) => t + s.m, 0);
  const Row = ({ label, segs }: { label: string; segs: { m: number; k: string }[] }) => (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between text-[12.5px] font-semibold text-[#0a1f3d] mb-1.5">
        <span>{label}</span>
        <span><strong className="text-[#0f4a9b]">{sum(segs)} min</strong> of focused work</span>
      </div>
      <div className="flex h-7 rounded-lg overflow-hidden" aria-hidden="true">
        {segs.map((s, i) => (
          <div key={i} style={{ width: `${(s.m / 60) * 100}%`, background: color[s.k] }} />
        ))}
      </div>
    </div>
  );
  return (
    <figure className="my-7 rounded-2xl border border-[#0f4a9b]/15 bg-white p-4 sm:p-5 shadow-sm">
      <span className="block text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider mb-1">One study hour, two ways</span>
      <p className="text-[12px] text-gray-500 mb-4">Illustration only, to show how short checks and the time it takes to refocus add up.</p>
      <Row label="Phone on the desk" segs={interrupted} />
      <Row label="Phone in another room" segs={protectedHour} />
      <figcaption className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[11.5px] text-gray-600">
        <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: color.focus }} />Focused work</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: color.check }} />Checking the phone</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: color.residue }} />Getting back into the task</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: color.break }} />Planned break</span>
      </figcaption>
    </figure>
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

export default function PhoneDistractionStudyingBlog() {
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
            articleSection: 'Psychology of Learning',
            keywords: 'phone distraction while studying, how to focus while studying, phone ban UAE schools, screen time and grades, study tips for teenagers',
          },
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
            { name: 'Phone Distraction While Studying', url: canonical },
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
          <a href="/blogs/psychology-of-learning" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">Psychology of Learning</a>
          <span>/</span>
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[180px]">Phone Distraction</span>
        </div>
      </div>

      <article className="pt-7 pb-16 bg-white antialiased">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <Brain className="h-3.5 w-3.5 text-[#0f4a9b]" />
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
              A Year 10 student in Abu Dhabi sits down at 5pm to revise chemistry. At 6pm the notes are open at the same page. Nothing dramatic happened. The phone buzzed, a reply was sent, a short video turned into four, and each time it took a few minutes to find the place again. Ask the student how the hour went and they will say they studied for an hour.
            </p>
            <p>
              That is what phone distraction while studying usually looks like: not one long break, but many small ones. It is also why telling a teenager to &ldquo;just focus&rdquo; rarely works. The problem is not effort. It is how attention works, and the fix is a set-up, not a lecture.
            </p>
          </div>

          {/* Quick answer */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl text-white shadow-md" style={{ background: THEME_GRADIENT }}>
            <span className="block text-[10px] uppercase tracking-[0.14em] text-[#F5D77F] font-extrabold mb-1.5">Quick answer</span>
            <p className="text-[13.5px] leading-relaxed text-white/95">
              Phones break focus in two ways: every check costs the minutes it takes to refocus, and even an unanswered notification pulls attention away. Silent mode is not enough. What works is a phone kept in another room for each study block, notifications off, blocks of 25 to 45 minutes, and phone time saved for the planned break.
            </p>
          </div>

          {/* 01 */}
          <SectionHeading num="01" id="why-phones-break-focus">Why the phone wins: the psychology of attention</SectionHeading>
          <div className={proseCls}>
            <p>
              Attention does not switch cleanly from one thing to another. In a well-known 2009 study, the organisational psychologist Sophie Leroy showed that when people move from an unfinished task to a new one, part of their attention stays behind on the first task. She called this <strong>attention residue</strong>, and it made performance on the next task worse.
            </p>
            <p>
              For a student, the &ldquo;quick check&rdquo; is the unfinished task. A message that needs a reply, a story half watched, a group chat still moving: the mind keeps returning to it after the phone is back on the desk. So a 30-second check does not cost 30 seconds. It costs the check plus the minutes spent getting back into a quadratic or a source question.
            </p>
            <p>
              The phone does not even need to be picked up. In a 2015 study published in the <em>Journal of Experimental Psychology</em>, researchers at Florida State University found that simply receiving a call or text notification, without answering it, disrupted performance on a task that needed sustained attention. The alert starts a train of thought that has nothing to do with the work.
            </p>
          </div>
          <BlogFigure
            src="/images/blogs/phone-notification-interrupting-maths-homework.webp"
            alt="Student's hand pausing over half-finished algebra working in an exercise book as a phone beside it lights up with a notification"
            caption="The pencil stops the moment the screen lights up, even before the phone is picked up."
          />
          <div className={proseCls}>
            <p>
              Teenagers are also more drawn than adults to rewards they can have right now, which is why a phone beats a textbook in any contest held on the spot. Our article on <a href="/blogs/why-teenagers-procrastinate-on-revision" className={linkCls}>why teenagers procrastinate on revision</a> explains that pull in more detail.
            </p>
          </div>
          <FocusTimeline />

          {/* 02 */}
          <SectionHeading num="02" id="phones-and-grades-research">What the research says about phones and grades</SectionHeading>
          <div className={proseCls}>
            <p>
              The largest evidence comes from the OECD&apos;s PISA 2022 study, which tested 15-year-olds in mathematics across dozens of education systems, including the UAE. Across OECD countries:
            </p>
            <CheckList
              items={[
                '65% of students said they were distracted by their own digital devices in at least some maths lessons, and 59% by other students’ devices.',
                'Students distracted by classmates’ devices in some or most lessons scored 15 points lower in maths than students who rarely were.',
                'Students who spent up to one hour a day on devices for leisure at school scored 49 points higher than those who spent five to seven hours, after accounting for family background.',
              ]}
            />
            <p>
              These are correlations, and the OECD is careful to say so: students who struggle may also be the ones reaching for their phones. The same study found that moderate use of devices for learning was linked to higher scores. The message is not that technology is the enemy. It is that leisure use during study time is.
            </p>
          </div>

          {/* 03 */}
          <SectionHeading num="03" id="uae-school-phone-ban">UAE schools are phone-free. Home is not</SectionHeading>
          <div className={proseCls}>
            <p>
              The UAE Ministry of Education has banned student phones in public schools and in private schools that follow the Ministry curriculum, as part of its student behaviour rules. Phones found on campus can be confiscated and parents are called in to collect them. Private schools on other curricula, including many British, American and IB schools in Dubai and Abu Dhabi, set their own rules, and many already restrict phones in class.
            </p>
            <p>
              The result is an odd split. During the school day, many UAE students now work without a phone in reach. Then they come home to revise, often with the phone on the desk and notifications on. Homework, past papers and exam revision all happen in the one setting with no rules at all.
            </p>
          </div>
          <NarrativeBox label="PARENT TAKEAWAY">
            If your child&apos;s school has gone phone-free, use that as the starting point at home: &ldquo;You already study without it all day. Let&apos;s keep the same rule for the hour after school.&rdquo;
          </NarrativeBox>

          {/* 04 */}
          <SectionHeading num="04" id="phone-free-study-plan">A five-step plan for phone-free study at home</SectionHeading>
          <div className={proseCls}>
            <p>
              Willpower is the weakest tool here, because the phone is designed to win against it. Each step below changes the set-up instead, so the student needs less self-control to stay on task.
            </p>
          </div>
          <ResponsiveTable
            headers={['Step', 'What to do', 'Why it works']}
            widths={['w-[24%]', 'w-[40%]', 'w-[36%]']}
            rows={[
              ['1. Distance', 'Put the phone in another room for the whole block, not face down on the desk.', <>Out of reach removes the quick check. Our <a href="/blogs/exam-stamina-uae-students" className={linkCls}>exam stamina guide</a> covers the research on phones in sight.</>],
              ['2. Silence', 'Turn on a focus or Do Not Disturb mode for study hours, with calls from parents allowed.', 'Unanswered alerts still pull attention, so stop them arriving at all.'],
              ['3. Blocks', 'Work in blocks of 25 to 45 minutes, then take a 5 to 10 minute break.', 'A known end point makes the block easier to start and to sustain.'],
              ['4. Clean stops', 'End each block at a natural point and write down the very next step.', 'Closing a task cleanly reduces attention residue when work restarts.'],
              ['5. Reward', 'The phone comes back in the planned break, not before.', 'Instant reward is used for the work rather than against it.'],
            ]}
          />
          <h3 className="mt-6 mb-2 text-base sm:text-lg font-extrabold text-[#0a1f3d]">When the phone is a study tool</h3>
          <div className={proseCls}>
            <p>
              Students often need a device for past papers, a calculator app or online homework. Use a laptop or tablet with only the study tab open where possible, download past papers and mark schemes before the block starts, and use a real calculator, which is what they will have in the exam anyway. If the phone must be used, keep it in focus mode with social apps hidden.
            </p>
          </div>
          <BlogFigure
            src="/images/blogs/phone-free-study-block-timer-past-paper.webp"
            alt="Teenage girl in a UAE home working through a printed past paper with a calculator and a kitchen timer, a laptop open on one document and no phone on the desk"
            caption="A timed block, a paper past paper and a real calculator: everything needed, nothing that buzzes."
          />
          <div className={proseCls}>
            <p>
              Phone-free time also makes revision itself more honest. Without constant interruptions, students notice which topics they cannot actually do from memory, which is the gap our guide to <a href="/blogs/illusion-of-competence-revision-false-confidence" className={linkCls}>the illusion of competence</a> warns about.
            </p>
          </div>

          {/* 05 */}
          <SectionHeading num="05" id="for-parents">For parents: making it work without a fight</SectionHeading>
          <div className={proseCls}>
            <p>
              Taking the phone away as a punishment usually turns study time into a battle and pushes phone use into hiding. These approaches tend to hold up better:
            </p>
            <CheckList
              items={[
                'Agree the plan together: which hours are study hours, where the phone lives, and when breaks happen.',
                <>Set up one charging spot outside the study room and outside the bedroom. Night-time scrolling costs sleep, and sleep is when memory is consolidated, as our guide to <a href="/blogs/sleep-and-memory-why-all-nighters-backfire" className={linkCls}>sleep and memory</a> explains.</>,
                'Keep the same rule for adults during study hours where you can. Students notice.',
                <>Check the work, not the phone. Asking your child to explain one thing they learned is a better measure than minutes logged. Our guide on <a href="/blogs/how-much-should-parents-help-with-homework" className={linkCls}>how much parents should help with homework</a> has more on getting that balance right.</>,
              ]}
            />
          </div>
          <BlogFigure
            src="/images/blogs/parent-teen-agree-study-plan-phones-charging.webp"
            alt="Father and teenage son in an Abu Dhabi apartment agreeing a weekly study plan at the dining table while their phones charge on a tray across the room"
            caption="Agreed together, with the phones charging across the room: a plan a teenager is more likely to keep."
          />
          <div className={proseCls}>
            <p>
              Sometimes phone use is a sign of something else. If your child cannot stop even when they want to, is losing sleep, or seems anxious without the phone, speak to the school counsellor. Avoiding schoolwork can also mean the work feels too hard, which is a learning gap rather than a discipline problem.
            </p>
          </div>

          {/* FAQs */}
          <SectionHeading num="06" id="faqs">Frequently asked questions</SectionHeading>
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
                      aria-controls={`pd-faq-${index}`}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#0f4a9b] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </h3>
                  {/* Always in the HTML (indexable); shown when open */}
                  <div id={`pd-faq-${index}`} hidden={!isOpen} className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sources */}
          <SectionHeading num="07" id="sources">Sources and further reading</SectionHeading>
          <div className="text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed my-4 bg-[#f8fafd] p-5 rounded-2xl border border-slate-200">
            <p>
              <strong>Leroy, S. (2009).</strong>{' '}
              <a href="https://ideas.repec.org/a/eee/jobhdp/v109y2009i2p168-181.html" target="_blank" rel="noopener noreferrer" className={linkCls}>Why is it so hard to do my work? The challenge of attention residue when switching between work tasks</a>. <em>Organizational Behavior and Human Decision Processes</em>, 109(2), 168–181.
            </p>
            <p>
              <strong>Stothart, C., Mitchum, A. and Yehnert, C. (2015).</strong>{' '}
              <a href="https://www.sciencedaily.com/releases/2015/07/150709133044.htm" target="_blank" rel="noopener noreferrer" className={linkCls}>The attentional cost of receiving a cell phone notification</a>. <em>Journal of Experimental Psychology: Human Perception and Performance</em>, 41(4), 893–897.
            </p>
            <p>
              <strong>OECD:</strong>{' '}
              <a href="https://www.oecd.org/en/about/news/press-releases/2023/12/decline-in-educational-performance-only-partly-attributable-to-the-covid-19-pandemic.html" target="_blank" rel="noopener noreferrer" className={linkCls}>PISA 2022 results press release</a>, on digital distraction and maths performance.
            </p>
            <p>
              <strong>Gulf News:</strong>{' '}
              <a href="https://gulfnews.com/uae/education/uae-ministry-of-education-bans-phones-in-schools-announces-new-inspection-rules-1.500247106" target="_blank" rel="noopener noreferrer" className={linkCls}>UAE Ministry of Education bans phones in schools</a>. Check your own school&apos;s policy for the rules that apply to your child.
            </p>
          </div>

          {/* CTA */}
          <div className="my-10 rounded-2xl p-6 sm:p-8 border border-white/10 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] rounded-full mb-3 text-[10px] font-extrabold tracking-wider uppercase">
              FIRST SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              Hours at the desk, but the marks are not moving?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              A focused hour with a subject specialist often does more than an evening of interrupted revision. Lessons are online and 1-to-1, built around a weekly plan your child can follow on their own, and every first 1-hour lesson includes a free 15-minute orientation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a href={BOOKING_URL}
                className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[210px] h-11 px-6 rounded-full font-bold text-white hover:brightness-110 transition text-sm shadow-md whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book First Session
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Ustaad about study support"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[210px] h-11 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-sm transition shadow-md whitespace-nowrap">
                <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Us
              </a>
            </div>
            <p className="mt-4 text-[11px] text-white/70">
              Support by curriculum: <a href="/igcse" className="underline hover:text-white">IGCSE tutoring</a> · <a href="/a-level" className="underline hover:text-white">A-Level tutoring</a> · <a href="/ib-curriculum" className="underline hover:text-white">IB tutoring</a> · <a href="/blogs/private-tutoring-uae-parent-guide" className="underline hover:text-white">Private tutoring in the UAE: parent guide</a>
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
                Nimra writes Ustaad&apos;s guides on how students learn, remember and revise, turning research on memory and attention into practical steps for UAE families.
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-3">Related Guides on Psychology of Learning</h3>
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
