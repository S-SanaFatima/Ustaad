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
  ChevronRight as ChevronRightIcon,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Target,
  Copy,
  Check,
  CheckCircle2
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BOOKING_URL = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20have%20questions%20following%20a%20parent-teacher%20meeting%20and%20would%20like%20to%20discuss%20academic%20support%20for%20my%20child.';

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

const BLOG = {
  title: 'Parent-Teacher Meeting Questions for UAE Parents | Ustaad',
  h1: 'Parent-Teacher Meetings in the UAE: What to Ask When Your Child Is in IGCSE or A-Level',
  titleLine1: 'Parent-Teacher Meetings in the UAE:',
  titleLine2: 'What to Ask When Your Child Is in IGCSE or A-Level',
  categoryBadge: 'PARENT GUIDANCE',
  slug: 'parent-teacher-meeting-questions-uae',
  description:
    'Preparing for a parent-teacher meeting? Questions to ask about predicted grades, mocks and progress for IGCSE and A-Level students in the UAE.',
  subtitle:
    'Preparing for a parent-teacher meeting? Questions to ask about predicted grades, mocks and progress for IGCSE and A-Level students in the UAE.',
  heroImage: '/images/blogs/parent-teacher-meeting-uae-secondary-school.jpg',
  heroAlt:
    'Parent and teacher talking at a table during a secondary-school parent-teacher meeting in the UAE',
  heroCaption: 'A good parent-teacher meeting is short, specific and ends with a plan.',
  datePublished: '2026-10-19',
  dateModified: '2026-10-19',
  publishedText: '19 Oct 2026',
  author: 'Nimra Shahzada',
  authorFull: 'Nimra Shahzada | Writer on learning and the psychology of studying',
  authorRole: 'Writer on learning and the psychology of studying',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Every guide is checked for syllabus accuracy and parent clarity',
  reviewerUrl: '/editorial',
  readTime: '10 min read',
  tags: [
    'Parent Teacher Meeting',
    'PTM Questions',
    'UAE Parents',
    'IGCSE Parents',
    'A-Level Parents',
    'Predicted Grades',
    'School Communication'
  ]
};

const FAQS = [
  {
    q: 'What should I ask at a parent-teacher meeting for a secondary-school student?',
    a: 'Start with three questions: what is my child working at now and what is that based on, what one change would help most, and what should we practise at home. Then add subject-specific and grade questions.'
  },
  {
    q: 'How long is a parent-teacher meeting, and how do I make the most of it?',
    a: 'Slots are often only a few minutes per teacher. Choose three priority subjects, open with your top question, and ask for any remaining questions to be answered by email or in a longer follow-up.'
  },
  {
    q: 'Should my teenager come to the parent-teacher meeting?',
    a: 'Policies differ by school. Many older students benefit from hearing feedback first-hand, because it makes the plan theirs. Ask your child, and check what your school allows.'
  },
  {
    q: 'What is the difference between a working-at grade, a target grade and a predicted grade?',
    a: 'Broadly, a working-at grade reflects current performance, a target grade is what the school aims for, and a predicted grade is a forecast of the final result. Schools use these terms differently, so ask for your school’s definitions.'
  },
  {
    q: 'What if I disagree with what the teacher says?',
    a: 'Ask for evidence such as marked work and the mark scheme, and ask what would help from home. If a concern remains, speak to the head of year or pastoral team and keep a brief written record.'
  },
  {
    q: 'Can I tell the teacher my child has a tutor?',
    a: 'Yes. It helps everyone work to the same plan, and relevant feedback can be shared, particularly if the tutor is targeting a specific topic the teacher has identified.'
  }
];

const TOC_ITEMS = [
  { label: 'Why secondary-school meetings are different', id: 'why-secondary-school-meetings-are-different' },
  { label: 'Before you go: the 20-minute preparation', id: 'before-you-go-the-20-minute-preparation' },
  { label: 'Three questions that work in every subject', id: 'three-questions-that-work-in-every-subject' },
  { label: 'Questions by subject', id: 'questions-by-subject' },
  { label: 'Grades, predictions and exams: which grade is it?', id: 'grades-predictions-and-exams' },
  { label: 'Decoding what teachers say', id: 'decoding-what-teachers-say' },
  { label: 'Beyond marks: confidence, wellbeing and effort', id: 'beyond-marks-confidence-wellbeing-effort' },
  { label: 'If you only get five minutes', id: 'if-you-only-get-five-minutes' },
  { label: 'The 24-hour follow-up', id: 'the-24-hour-follow-up' },
  { label: 'When the answers are unclear, or you disagree', id: 'when-answers-unclear-or-disagree' },
  { label: 'Frequently asked questions', id: 'faqs' },
  { label: 'Sources and further reading', id: 'sources' }
];

const RELATED_GUIDES = [
  {
    slug: 'read-uae-school-report-card',
    category: 'Parent Guidance',
    title: 'How to Read a UAE School Report Card Like an Education Counsellor',
    description:
      'What KHDA, ADEK and British curriculum descriptors really mean, and how to spot subtle grade risks before mocks.'
  },
  {
    slug: 'mock-exams-uae-not-what-they-were',
    category: 'Parent Guidance',
    title: 'UAE Mock Exams: Why They Count More Than Before',
    description:
      'How UAE schools use mock series to determine predicted grades, tiers and university references.'
  },
  {
    slug: 'how-much-should-parents-help-with-homework',
    category: 'Parent Guidance',
    title: 'How Much Should Parents Help With Homework? Getting the Balance Right',
    description:
      'A practical UAE parent’s guide to supporting your child without doing the work for them, by subject and age.'
  }
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
        <span className="text-xs font-bold">𝕏</span>
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

export default function ParentTeacherMeetingBlog() {
  const [tocOpen, setTocOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://ustaad.ae${canonical}`;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCopyEmail = () => {
    const emailText = `Dear [Mr/Ms Surname],

Thank you for your time at the meeting on [date]. To confirm what we discussed: [Name] is currently working at [grade] in [subject], the main area to improve is [area], and we will practise [action] at home each week. Could you let me know if there is a [specific resource, e.g. past paper] we should use? I would welcome a short check-in around [date].

Kind regards,
[Your name]`;

    navigator.clipboard.writeText(emailText).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    });
  };

  return (
    <Layout>
      <SEOHead
        title={BLOG.title}
        description={BLOG.description}
        canonical={canonical}
        placename="Dubai, UAE"
        schema={[
          articleSchema({
            title: BLOG.title,
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
              url: '/editorial',
            },
            image: BLOG.heroImage,
            timeRequired: 'PT10M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Parent Guidance', url: '/blogs/parent-guidance' },
            { name: 'Parent-Teacher Meeting Questions', url: canonical }
          ]),
          faqSchema(FAQS.map((f) => ({ q: f.q, a: f.a })))
        ]}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1">
            <Home className="h-3 w-3" /> Home
          </a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs/parent-guidance" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">
            Parent Guidance
          </a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">Parent-Teacher Meeting Questions</span>
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

            {/* H1 Heading with Gradient / Italic Subtitle */}
            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            {/* Subtitle / Description */}
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
                <span className="text-gray-300" aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  <span>{BLOG.readTime}</span>
                </span>
                <SocialShare url={shareUrl} title={BLOG.title} />
              </div>
            </div>

          </motion.div>

          {/* Hero Image */}
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

          {/* Opening Narrative Hook */}
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              It is 5:10 p.m. in a school hall in Sharjah. A father has a list of eight teachers and a plan to see them all before the doors close at seven.
            </p>
            <p>
              Five minutes with the maths teacher, who says his daughter is &ldquo;a lovely girl, working at a 6&rdquo;. Five minutes with English: &ldquo;She could contribute more.&rdquo; Chemistry: &ldquo;Fine, nothing to worry about.&rdquo; By the last desk, he has heard eight pleasant sentences and has no idea what to do differently on Monday.
            </p>
            <p>
              Nothing went wrong in any single conversation. The problem is that a secondary-school meeting is a very short window with a lot of people in it, and without a plan, politeness fills the time.
            </p>
            <p>
              This guide gives you that plan: what to do before you go, three questions that work in every subject, prompts for specific subjects and for grades and predictions, how to read what teachers say, and what to do in the 24 hours afterwards.
            </p>
          </div>

          {/* Table of Contents Accordion */}
          <TOC open={tocOpen} setOpen={setTocOpen} />

          {/* ── 01. Why secondary-school meetings are different ── */}
          <SectionHeading num="01" id="why-secondary-school-meetings-are-different">
            Why secondary-school meetings are different
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              A primary-school meeting is usually one conversation with one teacher who sees your child all day. A secondary-school meeting for an IGCSE or A-Level student is different in four ways:
            </p>
            <ul className="space-y-2.5 my-3 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold mt-0.5">&bull;</span>
                <div>
                  <strong className="text-[#0a1f3d]">Many teachers, few minutes:</strong> Eight to ten subjects can mean eight to ten conversations, often with only a few minutes each.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold mt-0.5">&bull;</span>
                <div>
                  <strong className="text-[#0a1f3d]">Higher stakes:</strong> Results now feed mock grades, predictions, tier decisions and, later, university applications. Our guide to{' '}
                  <a href="/blogs/mock-exams-uae-not-what-they-were" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    UAE mock exams
                  </a>{' '}
                  explains why.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold mt-0.5">&bull;</span>
                <div>
                  <strong className="text-[#0a1f3d]">More independent children:</strong> Teenagers tell you less at home. &ldquo;What did you do today?&rdquo; gets &ldquo;Nothing&rdquo; far more often than it did at eight years old.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold mt-0.5">&bull;</span>
                <div>
                  <strong className="text-[#0a1f3d]">Less contact as children get older:</strong> School leaders quoted in a Gulf News report estimated that attendance at these meetings falls as students move up the school, from very high in primary to around half in the senior years. That is exactly when the information matters most.
                </div>
              </li>
            </ul>
            <p>
              Teachers hold the data. You hold something they do not: how your child sleeps, copes, works at home and talks about school. The meeting is where those two halves meet.
            </p>
            <p>
              The aim is not to hear everything. It is to leave each important conversation with three things: where your child stands now, the one change that would help most, and what you will each do next.
            </p>

            <NarrativeBox label="PARENT TAKEAWAY">
              Five minutes is enough if you arrive knowing what you want to find out. Without a plan, the time disappears into pleasantries.
            </NarrativeBox>
          </div>

          {/* ── 02. Before you go: the 20-minute preparation ── */}
          <SectionHeading num="02" id="before-you-go-the-20-minute-preparation">
            Before you go: the 20-minute preparation
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <ol className="space-y-3 list-none pl-0 my-3">
              <li className="p-4 rounded-xl bg-[#f8fafd] border border-slate-200/80">
                <strong className="text-[#0a1f3d] block mb-1">1. Ask your child first</strong>
                A few minutes at home changes the meeting. Ask which subjects they feel most and least comfortable in, what they would like you to ask, and whether there is anything they would prefer you did not raise. Older students often have a sharper view of the problem than the report suggests.
              </li>
              <li className="p-4 rounded-xl bg-[#f8fafd] border border-slate-200/80">
                <strong className="text-[#0a1f3d] block mb-1">2. Gather what you already know</strong>
                Have the latest report, any mock results or marked papers, and teacher comments to hand. Know each subject&apos;s exam board and tier (for example Foundation or Higher, Core or Extended), since predictions and advice depend on it. See our guide to{' '}
                <a href="/blogs/gcse-revision-tips-uae-parents" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                  GCSE and IGCSE revision tips
                </a>{' '}
                for details on getting this specification data from school.
              </li>
              <li className="p-4 rounded-xl bg-[#f8fafd] border border-slate-200/80">
                <strong className="text-[#0a1f3d] block mb-1">3. Choose three priorities, not ten</strong>
                Rank subjects by where a concern is clearest: a grade that dropped, a subject your child avoids, or a strength that is not being stretched. These get your best questions and your first minutes.
              </li>
              <li className="p-4 rounded-xl bg-[#f8fafd] border border-slate-200/80">
                <strong className="text-[#0a1f3d] block mb-1">4. Note what only you can tell the teacher</strong>
                Sleep, workload, confidence, activities, a recent family change, whether your child has outside tutoring. A teacher cannot see any of it, and it often explains a pattern.
              </li>
              <li className="p-4 rounded-xl bg-[#f8fafd] border border-slate-200/80">
                <strong className="text-[#0a1f3d] block mb-1">5. Check the logistics</strong>
                Some schools run meetings online. Test the link beforehand, and find out whether you can book back-to-back slots or ask for a longer follow-up.
              </li>
            </ol>

            {/* Inline Image 2 */}
            <InlineImage
              src="/images/blogs/parent-preparing-for-parent-teacher-meeting.jpg"
              alt="Parent at a home table with a child's marked papers and a short list of questions"
              caption="Gathering marked papers and clarifying your three core questions turns a rushed conversation into an actionable roadmap."
            />
          </div>

          {/* ── 03. Three questions that work in every subject ── */}
          <SectionHeading num="03" id="three-questions-that-work-in-every-subject">
            Three questions that work in every subject
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Whatever the subject, three questions turn a pleasant chat into a plan. Think of them as <strong className="text-[#0f4a9b]">Now, Gap, Next</strong>.
            </p>

            {/* Interactive Visual Graphic: NOW, GAP, NEXT */}
            <div className="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#07244f] text-white shadow-md relative overflow-hidden">
              <div className="text-center mb-5">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#f0c96a] uppercase bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  THE UNIVERSAL FRAMEWORK
                </span>
                <h3 className="text-base sm:text-lg font-black text-white mt-2">
                  Three Questions, One Plan: Now · Gap · Next
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 border border-white/15 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-black text-[#f0c96a] bg-black/20 px-2 py-0.5 rounded">
                        01. NOW
                      </span>
                      <Target className="w-4 h-4 text-[#38bdf8]" />
                    </div>
                    <p className="text-xs sm:text-[13px] font-bold text-white mb-2 leading-snug">
                      &ldquo;What is my child working at right now, and what is that based on?&rdquo;
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-[11px] text-blue-100">
                    <strong>Gets you:</strong> A real starting point, grounded in mocks, class tests, or coursework evidence.
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 border border-white/15 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-black text-[#f0c96a] bg-black/20 px-2 py-0.5 rounded">
                        02. GAP
                      </span>
                      <Sparkles className="w-4 h-4 text-[#f0c96a]" />
                    </div>
                    <p className="text-xs sm:text-[13px] font-bold text-white mb-2 leading-snug">
                      &ldquo;What is the one thing between their current grade and the next?&rdquo;
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-[11px] text-blue-100">
                    <strong>Gets you:</strong> The specific lever: exam technique, extended response precision, or topic gaps.
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 border border-white/15 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-black text-[#f0c96a] bg-black/20 px-2 py-0.5 rounded">
                        03. NEXT
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                    </div>
                    <p className="text-xs sm:text-[13px] font-bold text-white mb-2 leading-snug">
                      &ldquo;What should we practise at home each week, and how can we check it?&rdquo;
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-[11px] text-blue-100">
                    <strong>Gets you:</strong> Concrete action, recommended past-paper banks, and an accountability benchmark.
                  </div>
                </div>
              </div>
            </div>

            <p>
              Asking these three questions in order cuts through polite generalities. It stops the conversation getting stuck on how hard your child tries, and focuses on what they can actually do.
            </p>
          </div>

          {/* ── 04. Questions by subject ── */}
          <SectionHeading num="04" id="questions-by-subject">
            Questions by subject
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Different subjects lose marks in very different ways. Use these tailored prompts to get to the root of the issue quickly:
            </p>

            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl border border-slate-200/90 bg-[#f8fafd]">
                <h4 className="font-extrabold text-[#0a1f3d] text-sm mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0f4a9b]" />
                  Maths (IGCSE &amp; A-Level)
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-600 mb-2">
                  Are marks being dropped on core calculation, problem-solving, or multi-step questions? Is timing an issue? Is my child showing sufficient working for method marks, or relying on mental maths?
                </p>
                <p className="text-xs text-[#0f4a9b] font-medium">
                  Related reading:{' '}
                  <a href="/blogs/silly-mistakes-maths-exams" className="underline hover:text-[#0a3a79]">
                    Silly Mistakes in Maths Exams
                  </a>{' '}
                  &bull;{' '}
                  <a href="/blogs/igcse-maths-low-marks-good-student" className="underline hover:text-[#0a3a79]">
                    When Good Students Score Low in IGCSE Maths
                  </a>
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 bg-[#f8fafd]">
                <h4 className="font-extrabold text-[#0a1f3d] text-sm mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0f4a9b]" />
                  Sciences (Biology, Chemistry, Physics)
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-600 mb-2">
                  Is the issue recall of facts, applying concepts to unfamiliar scenarios, or practical and data-handling questions? In biology and chemistry, are they hitting mark-scheme keywords on 6-mark questions?
                </p>
                <p className="text-xs text-[#0f4a9b] font-medium">
                  Related reading:{' '}
                  <a href="/blogs/command-words-gcse-science" className="underline hover:text-[#0a3a79]">
                    Command Words in GCSE &amp; IGCSE Science
                  </a>{' '}
                  &bull;{' '}
                  <a href="/blogs/how-to-answer-igcse-biology-6-mark-questions" className="underline hover:text-[#0a3a79]">
                    6-Mark Questions in Biology
                  </a>{' '}
                  &bull;{' '}
                  <a href="/blogs/early-signs-chemistry-struggles" className="underline hover:text-[#0a3a79]">
                    Early Signs of Chemistry Struggles
                  </a>
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 bg-[#f8fafd]">
                <h4 className="font-extrabold text-[#0a1f3d] text-sm mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0f4a9b]" />
                  English Literature &amp; Language
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-600 mb-2">
                  Does my child know the texts, and can they build an argument under timed conditions? What is holding them back: quotation recall, structure, analysis of technique, or vocabulary?
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 bg-[#f8fafd]">
                <h4 className="font-extrabold text-[#0a1f3d] text-sm mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0f4a9b]" />
                  Humanities &amp; Social Sciences (History, Geography, Economics, Business)
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-600 mb-2">
                  Are they losing marks on factual recall, or on evaluation and judgment in longer essays? Are case studies and data-response questions being answered in enough detail?
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 bg-[#f8fafd]">
                <h4 className="font-extrabold text-[#0a1f3d] text-sm mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0f4a9b]" />
                  Languages
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-600 mb-2">
                  Which of the four papers (listening, reading, speaking, writing) is the weakest? How is their confidence in spoken exams, and are they practising vocabulary spaced over time?
                </p>
              </div>
            </div>
          </div>

          {/* ── 05. Grades, predictions and exams ── */}
          <SectionHeading num="05" id="grades-predictions-and-exams">
            Grades, predictions and exams: which grade is it?
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              One of the easiest ways for parents to leave a meeting confused is when the teacher uses the word &ldquo;grade&rdquo; without specifying which kind. In UAE secondary schools, teachers track multiple grades simultaneously:
            </p>

            <div className="my-5 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#0a1f3d] text-white">
                    <th className="p-3 font-bold border-b border-slate-700">Term</th>
                    <th className="p-3 font-bold border-b border-slate-700">What It Usually Means</th>
                    <th className="p-3 font-bold border-b border-slate-700">What to Ask</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Current working-at grade</td>
                    <td className="p-3 text-slate-600">Performance right now, based on recent classwork, homework, and in-class tests.</td>
                    <td className="p-3 text-slate-800 font-medium">&ldquo;Which assessments is this based on?&rdquo;</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Target grade</td>
                    <td className="p-3 text-slate-600">A statistical benchmark often derived from baseline CAT4 or baseline tests.</td>
                    <td className="p-3 text-slate-800 font-medium">&ldquo;Is this an aspiration or an expectation?&rdquo;</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Predicted grade</td>
                    <td className="p-3 text-slate-600">The teacher’s professional forecast of the final exam outcome. Sent to universities.</td>
                    <td className="p-3 text-slate-800 font-medium">&ldquo;What specific evidence is needed to move this up?&rdquo;</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-bold text-[#0f4a9b]">Mock grade</td>
                    <td className="p-3 text-slate-600">The result of a full, timed trial exam under formal conditions.</td>
                    <td className="p-3 text-slate-800 font-medium">&ldquo;How does this compare with the grade boundaries used?&rdquo;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              In Year 11 and Year 13, also ask about exam tiers (Foundation vs Higher in maths and science) and coursework or NEA weighting. If a student is sitting the wrong tier, their grade ceiling is hard-capped.
            </p>
          </div>

          {/* ── 06. Decoding what teachers say ── */}
          <SectionHeading num="06" id="decoding-what-teachers-say">
            Decoding what teachers say
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Teachers want to be encouraging, and they have five minutes before the next parent sits down. Gentle phrases often conceal specific academic concerns. Here is how to decode them constructively:
            </p>

            <div className="grid grid-cols-1 gap-3 my-4">
              <div className="p-4 rounded-xl bg-[#f8fafd] border border-slate-200">
                <span className="text-xs font-bold text-[#92400e] bg-amber-100/80 px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-1">
                  &ldquo;A lovely student, very quiet in class&rdquo;
                </span>
                <p className="text-xs sm:text-[13px] text-slate-700 mb-1">
                  <strong>What it often means:</strong> They do not ask when they are confused, participate rarely, or hide when difficult concepts arise.
                </p>
                <p className="text-xs font-semibold text-[#0f4a9b]">
                  <strong>What to ask:</strong> &ldquo;When they get stuck, what do they do? Do they put their hand up, or do they wait for the answer to be written on the board?&rdquo;
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafd] border border-slate-200">
                <span className="text-xs font-bold text-[#92400e] bg-amber-100/80 px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-1">
                  &ldquo;Capable of more&rdquo; / &ldquo;Has great potential&rdquo;
                </span>
                <p className="text-xs sm:text-[13px] text-slate-700 mb-1">
                  <strong>What it often means:</strong> The teacher sees intelligence in verbal answers, but written output, homework consistency, or revision discipline is missing.
                </p>
                <p className="text-xs font-semibold text-[#0f4a9b]">
                  <strong>What to ask:</strong> &ldquo;Where is the gap showing up most: homework completion, test technique, or independent revision?&rdquo;
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafd] border border-slate-200">
                <span className="text-xs font-bold text-[#92400e] bg-amber-100/80 px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-1">
                  &ldquo;Lacks focus at times&rdquo;
                </span>
                <p className="text-xs sm:text-[13px] text-slate-700 mb-1">
                  <strong>What it often means:</strong> They drift when working independently, talk to neighbours, or give up when a task is hard.
                </p>
                <p className="text-xs font-semibold text-[#0f4a9b]">
                  <strong>What to ask:</strong> &ldquo;Is the focus drop happening during teacher explanation, or when they are set an independent task? Where are they seated?&rdquo;
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafd] border border-slate-200">
                <span className="text-xs font-bold text-[#92400e] bg-amber-100/80 px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-1">
                  &ldquo;Needs to read more widely&rdquo;
                </span>
                <p className="text-xs sm:text-[13px] text-slate-700 mb-1">
                  <strong>What it often means:</strong> Written vocabulary is repetitive, analysis lacks contextual depth, or reading speed is too slow for exam papers.
                </p>
                <p className="text-xs font-semibold text-[#0f4a9b]">
                  <strong>What to ask:</strong> &ldquo;Which two specific publications, journals, or texts would you recommend they start with this month?&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* ── 07. Beyond marks: confidence, wellbeing and effort ── */}
          <SectionHeading num="07" id="beyond-marks-confidence-wellbeing-effort">
            Beyond marks: confidence, wellbeing and effort
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Exam results are the output, but wellbeing, emotional stamina, and classroom habits are the engine. In secondary school, exam panic, revision avoidance, and peer dynamics often drive falling grades before any report reflects them:
            </p>
            <ul className="space-y-2.5 my-3 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold mt-0.5">&bull;</span>
                <div>
                  <strong className="text-[#0a1f3d]">Classroom posture and body language:</strong> Does your child seem engaged, or slumped and defensive? Ask: &ldquo;How does their confidence look in class compared to last term?&rdquo;
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold mt-0.5">&bull;</span>
                <div>
                  <strong className="text-[#0a1f3d]">Exam room stamina vs homework performance:</strong> Many teenagers do well at home but lock up in timed exam halls. Check out our guides on{' '}
                  <a href="/blogs/exam-panic-secondary-students" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    handling exam panic
                  </a>{' '}
                  and{' '}
                  <a href="/blogs/exam-stamina-fatigue-long-papers" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    exam stamina
                  </a>.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold mt-0.5">&bull;</span>
                <div>
                  <strong className="text-[#0a1f3d]">Sleep and screen routines:</strong> UAE teenagers frequently report staying up late on messaging groups or studying past midnight. Research consistently shows that sleep loss damages working memory and recall. Read our breakdown on{' '}
                  <a href="/blogs/sleep-and-memory-students" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    sleep, memory and exams
                  </a>.
                </div>
              </li>
            </ul>
          </div>

          {/* ── 08. If you only get five minutes ── */}
          <SectionHeading num="08" id="if-you-only-get-five-minutes">
            If you only get five minutes
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              When queues are long and the bell rings every 300 seconds, use this disciplined 5-minute protocol:
            </p>

            <div className="p-5 rounded-2xl bg-[#f8fafd] border border-slate-200 space-y-3 my-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <div>
                  <strong className="text-[#0a1f3d] text-sm block">Minute 1: The Opener</strong>
                  <p className="text-xs sm:text-[13px] text-slate-600">
                    &ldquo;Thank you for seeing me. I want to make sure I understand where [Name] stands right now, and what one change would help most before mocks.&rdquo;
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <div>
                  <strong className="text-[#0a1f3d] text-sm block">Minutes 2–3: The Core Diagnosis</strong>
                  <p className="text-xs sm:text-[13px] text-slate-600">
                    Listen without interrupting while the teacher shares current data. Look at the paper or test scores on the desk.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <div>
                  <strong className="text-[#0a1f3d] text-sm block">Minute 4: Home Action &amp; Target</strong>
                  <p className="text-xs sm:text-[13px] text-slate-600">
                    &ldquo;What specific topic or skill should we practice at home this week to move from a [Current Grade] to [Target Grade]?&rdquo;
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <div>
                  <strong className="text-[#0a1f3d] text-sm block">Minute 5: Confirm Next Step</strong>
                  <p className="text-xs sm:text-[13px] text-slate-600">
                    &ldquo;I will send a short email confirming what we agreed on past papers, and check back in a month. Thank you.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── 09. The 24-hour follow-up ── */}
          <SectionHeading num="09" id="the-24-hour-follow-up">
            The 24-hour follow-up
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              The difference between a meeting that changes grades and one that fades away happens in the 24 hours immediately following it:
            </p>
            <ol className="space-y-2.5 my-3 pl-2 list-none">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#0f4a9b]">1.</span>
                <div>
                  <strong className="text-[#0a1f3d]">Debrief with your teenager calmly:</strong> Share the strengths first. Ask how their own perspective aligns with the teacher&apos;s feedback. Avoid turning the debrief into an interrogation.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#0f4a9b]">2.</span>
                <div>
                  <strong className="text-[#0a1f3d]">Pick two changes, not ten:</strong> Trying to fix maths, chemistry, history, and French all at once causes fatigue. Select two high-priority topics to resolve first.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#0f4a9b]">3.</span>
                <div>
                  <strong className="text-[#0a1f3d]">Send a 3-line confirmation email:</strong> Teachers see 60+ parents in an evening. A polite, written summary creates an agreed record and sets a check-in point.
                </div>
              </li>
            </ol>

            {/* Email Follow-Up Copy Box */}
            <div className="my-5 p-4 sm:p-5 rounded-2xl bg-[#0a1f3d] text-white shadow-sm">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#f0c96a]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    One-Click Teacher Follow-Up Template
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-xs text-white transition cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy Template'}</span>
                </button>
              </div>

              <pre className="whitespace-pre-wrap font-sans text-xs sm:text-[13px] text-slate-300 leading-relaxed select-all">
{`Dear [Mr/Ms Surname],

Thank you for your time at the meeting on [date]. To confirm what we discussed: [Name] is currently working at [grade] in [subject], the main area to improve is [area], and we will practise [action] at home each week. Could you let me know if there is a [specific resource, e.g. past paper] we should use? I would welcome a short check-in around [date].

Kind regards,
[Your name]`}
              </pre>
            </div>
          </div>

          {/* ── 10. When the answers are unclear, or you disagree ── */}
          <SectionHeading num="10" id="when-answers-unclear-or-disagree">
            When the answers are unclear, or you disagree
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>Not every meeting leaves you satisfied. If answers are vague:</p>
            <ul className="space-y-2.5 my-3 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold mt-0.5">&bull;</span>
                <div>
                  <strong className="text-[#0a1f3d]">Ask for data, not opinion:</strong> &ldquo;Can I see the marked paper and the mark scheme?&rdquo;
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold mt-0.5">&bull;</span>
                <div>
                  <strong className="text-[#0a1f3d]">Stay curious, not accusatory:</strong> &ldquo;What would you like to see from us at home?&rdquo; opens more doors than &ldquo;Why hasn&apos;t he improved?&rdquo;
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold mt-0.5">&bull;</span>
                <div>
                  <strong className="text-[#0a1f3d]">Escalate calmly:</strong> If a concern persists, contact the head of year or pastoral team, and keep a short record of what you have asked and what you were told.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold mt-0.5">&bull;</span>
                <div>
                  <strong className="text-[#0a1f3d]">Consider outside help for a specific gap:</strong> If a teacher names a particular topic or skill (such as 6-mark biology explanations, or calculus method marks), a short, targeted block of support can help. Our{' '}
                  <a href="/blogs/private-tutoring-uae-parent-guide" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    private tutoring guide
                  </a>{' '}
                  explains how to decide, and the{' '}
                  <a href="/blogs/10-questions-hiring-private-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    10 questions to ask before hiring a tutor
                  </a>{' '}
                  shows how to choose.
                </div>
              </li>
            </ul>
            <p>
              If your child has outside tutoring, it is reasonable to mention it to teachers and to share relevant feedback, so everyone is working to the same plan.
            </p>
          </div>

          {/* ── 11. Frequently asked questions ── */}
          <SectionHeading num="11" id="faqs">
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

          {/* ── 12. Sources and further reading ── */}
          <SectionHeading num="12" id="sources">
            Sources and further reading
          </SectionHeading>
          <div className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed my-4">
            <p>&bull; <strong>Hill, N. E., &amp; Tyson, D. F. (2009).</strong> Parental involvement in middle school: A meta-analytic assessment of the strategies that promote achievement. <em>Developmental Psychology</em>.</p>
            <p>&bull; <strong>Wilder, S. (2014).</strong> Effects of parental involvement on academic achievement: A meta-synthesis. <em>Educational Review</em>.</p>
            <p>&bull; <strong>Jeynes, W. H. (2007).</strong> The relationship between parental involvement and urban secondary school student academic achievement: A meta-analysis. <em>Urban Education</em>.</p>
            <p>&bull; <strong>Gulf News:</strong> Schools report high parent attendance in parent-teacher meetings. (Archive report quoting UAE school principals on attendance patterns across primary and secondary phases).</p>
            <p>&bull; <strong>Cambridge International &amp; Pearson Edexcel:</strong> Published guidance on tiers, grading criteria, and exam entries for IGCSE, International GCSE and A-Level.</p>
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
                  <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
                </a>
              ))}
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
                Nimra writes about the study problems UAE parents see at home: children who revise for hours but still lose marks, homework that never gets finished, and exam stress that builds before mocks.
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
                Every guide is checked for syllabus accuracy and parent clarity before it is published.
              </p>
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

          {/* Diagnostic Assessment CTA Banner */}
          <div
            className="my-10 rounded-2xl p-6 sm:p-8 border border-white/10 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] rounded-full mb-3 text-[10px] font-extrabold tracking-wider uppercase">
              DIAGNOSTIC SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              Left the meeting with questions still unanswered?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              An Ustaad curriculum specialist can run a short online 1-to-1 session with your child, check the topics a teacher mentioned against the exam board’s mark scheme, and show you where extra help would make the most difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-xs sm:text-sm w-full sm:w-auto shadow-md"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
              >
                Book a Free Trial
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

        </div>
      </article>
    </Layout>
  );
}
