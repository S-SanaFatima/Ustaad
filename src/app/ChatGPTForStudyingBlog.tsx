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
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20would%20like%20to%20book%20a%20diagnostic%20session%20for%20my%20child.';

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

const BLOG = {
  title: 'ChatGPT for Studying: Does AI Hurt Memory? | Ustaad',
  h1: 'ChatGPT for Studying: Does AI Hurt Memory? How UAE Students Can Use It the Smart Way',
  titleLine1: 'ChatGPT for Studying: Does AI Hurt Memory?',
  titleLine2: 'How UAE Students Can Use It the Smart Way',
  categoryBadge: 'USTAAD UAE · PSYCHOLOGY OF LEARNING',
  slug: 'chatgpt-for-studying-does-ai-hurt-memory',
  description:
    "Does ChatGPT hurt students' memory? See what research shows, plus 6 rules to use AI for revision without losing what you learn. A guide for UAE families.",
  subtitle:
    "Does ChatGPT hurt students' memory? See what the research shows, plus six rules for using AI to revise without losing what you learn.",
  heroImage: '/images/blogs/chatgpt-for-studying-teenager-uae.webp',
  heroAlt:
    'Teenage student at a desk with a notebook and a laptop, deciding whether to try the problem first',
  heroCaption: 'AI can be a coach or a crutch. The difference is who does the thinking first.',
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  publishedText: '2 Nov 2026',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Every guide is checked for accuracy, educational validity and parent clarity',
  reviewerUrl: '/editorial',
  readTime: '11 min read',
  tags: [
    'ChatGPT for Studying',
    'AI and Memory',
    'AI Homework Help',
    'Revision Techniques',
    'Cognitive Offloading',
    'IGCSE Revision',
    'Parent Guidance',
  ],
};

const FAQ_SCHEMA_DATA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Does ChatGPT hurt students' memory?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can, when it replaces the effort that builds memory, such as retrieving an answer or working through a problem. In a large study of high school maths students, those who used a standard ChatGPT-style tool scored lower than classmates once it was taken away, while a hint-based version largely avoided that harm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay to use ChatGPT for homework?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It can be, if used to quiz yourself, get hints after you have tried, or check your explanation. It is usually harmful when it provides answers to copy. Always follow your school's policy.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can ChatGPT help with revision?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, when it makes you do the work. Asking it to quiz you one question at a time, give hints and check your explanations supports retrieval practice. Asking for summaries to read instead of revising is far less effective.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can students use AI in IGCSE or A-Level exams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Internet-enabled AI tools are not allowed in supervised written exams. For coursework, boards allow only limited, acknowledged use, and treat undeclared or inappropriate use as malpractice. Always check your school's policy and the board's current guidance.",
      },
    },
    {
      '@type': 'Question',
      name: 'How can I tell if my child is relying on AI too much?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look for polished homework that your child cannot explain, a big gap between homework and test results, and difficulty with similar questions when the numbers change. Ask them to show how they used it and to explain a step aloud.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does AI help students learn faster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can improve performance while it is in use, and well-designed tools that give hints can support learning. But better performance with AI is not the same as learning, so always test what your child can do without it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best way to use AI to study?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Try the problem first, ask for hints rather than answers, let AI quiz you, explain concepts back in your own words, check what it says against your notes and the mark scheme, and finish with a few questions without AI.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should parents handle AI and homework?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stay curious rather than accusatory. Ask your child to show how they used it, agree a try-first approach, and focus on whether they can do it without the tool.',
      },
    },
  ],
};

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Does ChatGPT hurt students' memory?",
    a: 'It can, when it replaces the effort that builds memory, such as retrieving an answer or working through a problem. In a large study of high school maths students, those who used a standard ChatGPT-style tool scored lower than classmates once it was taken away, while a hint-based version largely avoided that harm.',
  },
  {
    q: 'Is it okay to use ChatGPT for homework?',
    a: "It can be, if used to quiz yourself, get hints after you have tried, or check your explanation. It is usually harmful when it provides answers to copy. Always follow your school's policy.",
  },
  {
    q: 'Can ChatGPT help with revision?',
    a: 'Yes, when it makes you do the work. Asking it to quiz you one question at a time, give hints and check your explanations supports retrieval practice. Asking for summaries to read instead of revising is far less effective.',
  },
  {
    q: 'Can students use AI in IGCSE or A-Level exams?',
    a: "No. Internet-enabled AI tools are not allowed in supervised written exams. For coursework, boards allow only limited, acknowledged use, and treat undeclared or inappropriate use as malpractice. Always check your school's policy and the board's current guidance.",
  },
  {
    q: 'How can I tell if my child is relying on AI too much?',
    a: 'Look for polished homework that your child cannot explain, a big gap between homework and test results, and difficulty with similar questions when the numbers change. Ask them to show how they used it and to explain a step aloud.',
  },
  {
    q: 'Does AI help students learn faster?',
    a: 'It can improve performance while it is in use, and well-designed tools that give hints can support learning. But better performance with AI is not the same as learning, so always test what your child can do without it.',
  },
  {
    q: 'What is the best way to use AI to study?',
    a: 'Try the problem first, ask for hints rather than answers, let AI quiz you, explain concepts back in your own words, check what it says against your notes and the mark scheme, and finish with a few questions without AI.',
  },
  {
    q: 'How should parents handle AI and homework?',
    a: (
      <>
        Stay curious rather than accusatory. Ask your child to show how they used it, agree a try-first approach, and focus on whether they can do it without the tool. Our guide to{' '}
        <a href="/blogs/how-much-should-parents-help-with-homework" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
          homework help
        </a>{' '}
        covers the balance.
      </>
    ),
  },
];

const TOC_ITEMS = [
  { label: 'What the research says about AI and learning', id: 'what-the-research-says-about-ai-and-learning' },
  { label: 'Why AI can weaken memory', id: 'why-ai-can-weaken-memory' },
  { label: 'AI in UAE schools and exam rooms', id: 'ai-in-uae-schools-and-exam-rooms' },
  { label: 'A traffic-light guide: green, amber and red uses', id: 'a-traffic-light-guide-green-amber-and-red-uses' },
  { label: 'Six rules for using ChatGPT to study', id: 'six-rules-for-using-chatgpt-to-study' },
  { label: 'Copy-and-paste prompts that build memory', id: 'copy-and-paste-prompts-that-build-memory' },
  { label: 'What parents can look for (and say)', id: 'what-parents-can-look-for-and-say' },
  { label: 'Coursework, honesty and the rules', id: 'coursework-honesty-and-the-rules' },
  { label: 'When reliance on AI is a sign of something else', id: 'when-reliance-on-ai-is-a-sign-of-something-else' },
  { label: 'Frequently asked questions', id: 'faqs' },
  { label: 'Sources and further reading', id: 'sources' },
];

const RELATED_GUIDES = [
  {
    slug: 'why-students-freeze-exam-questions-scaffolding-trap',
    title: 'The Scaffolding Trap: Why Students Freeze on Exam Questions',
  },
  {
    slug: 'illusion-of-competence-revision-false-confidence',
    title: 'The Illusion of Competence: Why Re-Reading Notes Gives False Confidence',
  },
  {
    slug: 'maths-anxiety-teenagers-signs-causes-help',
    title: 'Maths Anxiety in Teenagers: Why Your Child Says "I\'m Just Bad at Maths"',
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

function InlineImage({
  src,
  alt,
  caption,
  width,
  height,
  aspectRatio = 'aspect-[16/9]',
  objectFit = 'object-cover',
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  objectFit?: 'object-cover' | 'object-contain';
}) {
  return (
    <figure className="mx-auto my-7 max-w-xl">
      <div className={`rounded-2xl overflow-hidden border border-slate-200 shadow-md ${aspectRatio} bg-white flex items-center justify-center p-1 sm:p-2`}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className={`w-full h-full ${objectFit} block`}
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

export default function ChatGPTForStudyingBlog() {
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
        preloadHeroImage={BLOG.heroImage}
        author={BLOG.author}
        placename="Dubai, UAE"
        ogType="article"
        schema={[
          {
            ...articleSchema({
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
              timeRequired: 'PT11M',
            }),
            inLanguage: 'en-GB',
            articleSection: 'Psychology of Learning',
            keywords:
              'ChatGPT for studying, does ChatGPT hurt memory, AI for revision, AI homework help UAE, cognitive offloading',
          },
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
            { name: 'ChatGPT for Studying: Does AI Hurt Memory?', url: canonical },
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
          <a href="/blogs/psychology-of-learning" className="hover:text-[#0f4a9b] transition truncate max-w-[160px]">
            Psychology of Learning
          </a>
          <span>/</span>
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[190px]">
            ChatGPT for Studying: Does AI Hurt Memory?
          </span>
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
                  <span className="leading-snug">
                    Published {BLOG.publishedText} &middot; Last updated {BLOG.publishedText}
                  </span>
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
                fetchPriority="high"
                decoding="async"
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
              It is 9:40 p.m. in Sharjah. A Year 10 student finishes his maths homework in twelve minutes. Every answer is correct, neatly laid out, with working shown. His mother is impressed.
            </p>
            <p>
              The next morning, he sits a short class test on the same topic and scores far below his homework. Nothing about him changed overnight. The difference was that, the night before, ChatGPT had been open in the next tab.
            </p>
            <p>
              Families across the UAE are asking the same question: is ChatGPT for studying a shortcut to better grades, or a shortcut around learning? The honest answer is that it can be either, and the difference comes down to one thing: who does the thinking first.
            </p>

            <div className="my-5 rounded-2xl border border-[#0f4a9b]/15 bg-[#f8fafd] p-4 sm:p-5 text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#0a1f3d]">The short answer:</strong> Yes, AI can hurt memory, but only when it does the thinking that builds memory. In a large field experiment with nearly 1,000 high school maths students, those who used a standard ChatGPT-style tool did much better in practice, then scored 17% lower than classmates who never had it once the tool was taken away. When the tool gave hints instead of answers, most of that harm disappeared. How a student uses AI matters more than whether they do.
            </div>
          </div>

          {/* ── 01. What the research says about AI and learning ── */}
          <SectionHeading num="01" id="what-the-research-says-about-ai-and-learning">
            What the research says about AI and learning
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              The best evidence so far comes from a study by Hamsa Bastani and colleagues, published in the <em>Proceedings of the National Academy of Sciences</em> in 2025. They worked with a high school in Turkey and gave nearly a thousand maths students one of three set-ups during practice sessions:
            </p>
            <ul className="space-y-2 my-3 pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">GPT Base:</strong> a tool that behaved like standard ChatGPT.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">GPT Tutor:</strong> the same underlying model, but set up with safeguards: it gave incremental hints and common-mistake warnings rather than full solutions.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">No AI:</strong> a control group.
                </span>
              </li>
            </ul>
            <p>
              In a later exam, taken with no AI at all, the results split sharply.
            </p>

            <div className="my-5 overflow-hidden rounded-2xl border border-slate-200 shadow-xs text-left">
              <table className="block sm:table w-full text-left text-xs border-collapse">
                <thead className="hidden sm:table-header-group">
                  <tr className="bg-[#0a1f3d] text-white">
                    <th className="p-3.5 font-bold border-b border-slate-700 align-top w-[28%]">Group</th>
                    <th className="p-3.5 font-bold border-b border-slate-700 align-top w-[36%]">Practice session (AI available)</th>
                    <th className="p-3.5 font-bold border-b border-slate-700 align-top w-[36%]">Exam (AI removed)</th>
                  </tr>
                </thead>
                <tbody className="block sm:table-row-group divide-y divide-slate-200 sm:divide-slate-100 bg-white">
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-2 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Group"
                      className="block sm:table-cell sm:p-3.5 font-extrabold text-[#0f4a9b] sm:align-top pb-1.5 sm:pb-3.5 border-b border-slate-100 sm:border-none"
                    >
                      GPT Base
                    </td>
                    <td
                      data-label="Practice session (AI available)"
                      className="block sm:table-cell sm:p-3.5 text-slate-700 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      About 48% better than the control group
                    </td>
                    <td
                      data-label="Exam (AI removed)"
                      className="block sm:table-cell sm:p-3.5 text-rose-700 font-semibold sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      About 17% worse than the control group
                    </td>
                  </tr>
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-2 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Group"
                      className="block sm:table-cell sm:p-3.5 font-extrabold text-[#0f4a9b] sm:align-top pb-1.5 sm:pb-3.5 border-b border-slate-100 sm:border-none"
                    >
                      GPT Tutor (with hints)
                    </td>
                    <td
                      data-label="Practice session (AI available)"
                      className="block sm:table-cell sm:p-3.5 text-slate-700 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      About 127% better than the control group
                    </td>
                    <td
                      data-label="Exam (AI removed)"
                      className="block sm:table-cell sm:p-3.5 text-emerald-700 font-semibold sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      Roughly the same as the control group
                    </td>
                  </tr>
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-2 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Group"
                      className="block sm:table-cell sm:p-3.5 font-extrabold text-[#0f4a9b] sm:align-top pb-1.5 sm:pb-3.5 border-b border-slate-100 sm:border-none"
                    >
                      No AI
                    </td>
                    <td
                      data-label="Practice session (AI available)"
                      className="block sm:table-cell sm:p-3.5 text-slate-600 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      Baseline
                    </td>
                    <td
                      data-label="Exam (AI removed)"
                      className="block sm:table-cell sm:p-3.5 text-slate-600 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      Baseline
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* IMAGE 2: Bastani results chart */}
            <InlineImage
              src="/images/blogs/ai-practice-vs-exam-results-bastani-study.webp"
              alt="Bar chart comparing practice and exam results for students with GPT Base, GPT Tutor and no AI"
              caption="With AI available, practice scores jumped. With AI removed, the unguided group fell behind."
              width={1024}
              height={637}
              aspectRatio="aspect-auto"
              objectFit="object-contain"
            />

            <p>Two lessons stand out:</p>
            <ul className="space-y-2 my-3 pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Better performance with AI is not the same as learning.</strong> Practice scores soared, but the knowledge did not travel with the students.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Design matters.</strong> The harm was largely avoided when AI behaved like a tutor, giving hints and making the student work, rather than an answer machine. The researchers also found that students who used AI tended to overestimate how much they had learned.
                </span>
              </li>
            </ul>
            <p>
              <strong className="text-[#0a1f3d]">A note of caution.</strong> This was one school, one subject and one version of the technology, so results may differ elsewhere. But it matches what decades of memory research would predict.
            </p>

            <NarrativeBox label="PARENT TAKEAWAY">
              The question is not &ldquo;does my child use AI?&rdquo; It is &ldquo;when the AI is switched off, can they still do it?&rdquo; That is the test the exam hall applies.
            </NarrativeBox>
          </div>

          {/* ── 02. Why AI can weaken memory ── */}
          <SectionHeading num="02" id="why-ai-can-weaken-memory">
            Why AI can weaken memory
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Memory is built by effort, and AI is very good at removing effort. Four mechanisms are worth knowing.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">It skips retrieval.</strong> The act of pulling information out of your head is what strengthens it, a finding known as the testing effect (Roediger and Karpicke). If AI supplies the answer, there is nothing to retrieve. Our guide to{' '}
              <a href="/blogs/illusion-of-competence-revision-false-confidence" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                The Illusion of Competence
              </a>{' '}
              explains why recognising an answer feels like knowing it.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">It skips generation.</strong> Information you produce yourself is remembered better than information you simply read, known as the generation effect (Slamecka and Graf). A neatly written AI answer is read, not generated.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">It encourages cognitive offloading.</strong> People naturally lean on external tools to reduce mental effort, and research on cognitive offloading (Risko and Gilbert) suggests this can reduce what we remember ourselves. That is fine for a phone number. It is a problem for a chemistry mechanism that will be tested in a silent hall.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">It creates a feeling of understanding.</strong> A clear, confident explanation feels like learning. Students who read an AI explanation often feel they have understood, but a feeling of fluency is not the same as being able to reproduce the idea. This is the same trap that makes re-reading feel productive.
            </p>
            <p>
              There is also a practical problem: AI makes mistakes. It can state wrong answers confidently, and a student who has not tried the problem first is poorly placed to notice.
            </p>
            <p>
              The same mechanism sits behind the pattern in{' '}
              <a href="/blogs/why-students-freeze-exam-questions-scaffolding-trap" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                The Scaffolding Trap: Why Students Freeze on Exam Questions
              </a>
              . A tool that is always available is the most powerful scaffold a student has ever had, and the exam removes it.
            </p>
          </div>

          {/* ── 03. AI in UAE schools and exam rooms ── */}
          <SectionHeading num="03" id="ai-in-uae-schools-and-exam-rooms">
            AI in UAE schools and exam rooms
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              AI is not going away, and the UAE is leaning in. The Ministry of Education introduced AI as a formal subject across public schools from kindergarten to Grade 12 from the 2025–26 academic year, and some private schools have introduced it too. Students are being taught to understand and use AI, which makes careful habits more important, not less.
            </p>
            <p>Meanwhile, the rules for assessments are firm:</p>
            <ul className="space-y-2.5 my-3 pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Supervised exams are AI-free.</strong> Internet-enabled AI tools are not allowed in written IGCSE and A-Level papers.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Coursework has strict rules.</strong> Cambridge and Pearson allow only limited, acknowledged AI use in some coursework, and treat unacknowledged or inappropriate use as malpractice. Rules differ by board and subject and change over time, and Cambridge notes that centres and teachers hold primary responsibility for spotting inappropriate use.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Your school&apos;s policy comes first.</strong> Many schools have their own AI policy that is stricter than the board&apos;s.
                </span>
              </li>
            </ul>
            <p>
              In other words, in the places where marks are decided, a student&apos;s own memory is still the only tool. See our guide on{' '}
              <a href="/blogs/a-level-tutoring-uae-independent-thinking" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                independent thinking in A-Level tutoring
              </a>{' '}
              for why this matters more at A-Level.
            </p>
          </div>

          {/* ── 04. A traffic-light guide: green, amber and red uses ── */}
          <SectionHeading num="04" id="a-traffic-light-guide-green-amber-and-red-uses">
            A traffic-light guide: green, amber and red uses
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Not all AI use is equal. A simple traffic light helps families sort it.
            </p>

            <div className="my-5 overflow-hidden rounded-2xl border border-slate-200 shadow-xs text-left">
              <table className="block sm:table w-full text-left text-xs border-collapse">
                <thead className="hidden sm:table-header-group">
                  <tr className="bg-[#0a1f3d] text-white">
                    <th className="p-3.5 font-bold border-b border-slate-700 align-top w-[24%]">Colour</th>
                    <th className="p-3.5 font-bold border-b border-slate-700 align-top w-[42%]">Uses</th>
                    <th className="p-3.5 font-bold border-b border-slate-700 align-top w-[34%]">Why</th>
                  </tr>
                </thead>
                <tbody className="block sm:table-row-group divide-y divide-slate-200 sm:divide-slate-100 bg-white">
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-2 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Colour"
                      className="block sm:table-cell sm:p-3.5 font-extrabold text-emerald-700 sm:align-top pb-1.5 sm:pb-3.5 border-b border-slate-100 sm:border-none"
                    >
                      Green: builds memory
                    </td>
                    <td
                      data-label="Uses"
                      className="block sm:table-cell sm:p-3.5 text-slate-700 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      Quizzing you one question at a time. Giving a hint after you have tried. Marking your explanation and asking questions back. Generating practice questions without answers.
                    </td>
                    <td
                      data-label="Why"
                      className="block sm:table-cell sm:p-3.5 text-slate-600 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      You do the retrieval and the thinking. AI provides the challenge and feedback.
                    </td>
                  </tr>
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-2 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Colour"
                      className="block sm:table-cell sm:p-3.5 font-extrabold text-amber-700 sm:align-top pb-1.5 sm:pb-3.5 border-b border-slate-100 sm:border-none"
                    >
                      Amber: use with care
                    </td>
                    <td
                      data-label="Uses"
                      className="block sm:table-cell sm:p-3.5 text-slate-700 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      Feedback on a draft you have already written. Explaining a worked example you have tried to follow. Summarising an article you have already read.
                    </td>
                    <td
                      data-label="Why"
                      className="block sm:table-cell sm:p-3.5 text-slate-600 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      Helpful only if you attempt first and check the output yourself.
                    </td>
                  </tr>
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-2 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Colour"
                      className="block sm:table-cell sm:p-3.5 font-extrabold text-rose-700 sm:align-top pb-1.5 sm:pb-3.5 border-b border-slate-100 sm:border-none"
                    >
                      Red: stop
                    </td>
                    <td
                      data-label="Uses"
                      className="block sm:table-cell sm:p-3.5 text-slate-700 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      Asking for the answer first. Copying working into homework. Having AI write paragraphs or essays. Revising only from AI summaries. Using AI in an exam or handing in AI work as your own.
                    </td>
                    <td
                      data-label="Why"
                      className="block sm:table-cell sm:p-3.5 text-slate-600 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      The thinking is skipped, so the memory is not built. In exams and assessed work, it is also malpractice (section 08).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ── 05. Six rules for using ChatGPT to study ── */}
          <SectionHeading num="05" id="six-rules-for-using-chatgpt-to-study">
            Six rules for using ChatGPT to study
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              <strong className="text-[#0a1f3d]">1. Try first, for at least ten minutes.</strong> Before opening AI, attempt the question on paper. Struggling for a few minutes is not wasted time: it is where memory forms. If you get stuck, note exactly where.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">2. Ask for hints, not answers.</strong> Use a hint ladder: first a nudge, then a hint, then a worked step, and only after another attempt, the full solution. This is the design that protected learning in the research.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">3. Let AI quiz you.</strong> The best use of AI for revision is retrieval practice: it asks, you answer from memory, then it gives feedback. That is far closer to an exam than reading an AI summary.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">4. Teach it back.</strong> Explain the idea in your own words, then ask AI what you missed. Saying it aloud or writing it out forces generation, and the feedback fills the gaps.
            </p>
            <p>
              <strong className="text-[#0a1f3d]">5. Check what it tells you.</strong> Treat AI as a fallible tutor, not an authority. Check facts against your textbook, notes and the official mark scheme. In maths, check answers by substituting them back (see our guide to{' '}
              <a href="/blogs/silly-mistakes-maths-exams" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                silly mistakes in maths exams
              </a>
              ).
            </p>
            <p>
              <strong className="text-[#0a1f3d]">6. End with a no-AI test.</strong> After a study session, close the laptop and answer five questions cold. If you cannot, the learning has not stuck. This is the closest home version of the exam.
            </p>

            {/* IMAGE 6: No-AI finish beside Rule 6 */}
            <InlineImage
              src="/images/blogs/closing-laptop-no-ai-test-after-study.webp"
              alt="Student closing a laptop to answer practice questions from memory"
              caption="Finish every session with the laptop closed and five questions answered from memory."
              width={1024}
              height={572}
            />

            <NarrativeBox label="PARENT TAKEAWAY">
              If your child follows only one rule, make it the last: finish with a few questions and no AI. It tells you what they actually know.
            </NarrativeBox>
          </div>

          {/* ── 06. Copy-and-paste prompts that build memory ── */}
          <SectionHeading num="06" id="copy-and-paste-prompts-that-build-memory">
            Copy-and-paste prompts that build memory
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Students often ask for better &ldquo;ChatGPT prompts for revision&rdquo;. These are built to keep the thinking with the student. Replace the brackets with your subject, board and topic.
            </p>

            <div className="my-5 overflow-hidden rounded-2xl border border-slate-200 shadow-xs text-left">
              <table className="block sm:table w-full text-left text-xs border-collapse">
                <thead className="hidden sm:table-header-group">
                  <tr className="bg-[#0a1f3d] text-white">
                    <th className="p-3.5 font-bold border-b border-slate-700 align-top w-[26%]">Purpose</th>
                    <th className="p-3.5 font-bold border-b border-slate-700 align-top w-[74%]">Prompt</th>
                  </tr>
                </thead>
                <tbody className="block sm:table-row-group divide-y divide-slate-200 sm:divide-slate-100 bg-white">
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-1.5 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Purpose"
                      className="block sm:table-cell sm:p-3.5 font-extrabold text-[#0f4a9b] sm:align-top pb-1 sm:pb-3.5 border-b border-slate-100 sm:border-none"
                    >
                      Quiz mode
                    </td>
                    <td
                      data-label="Prompt"
                      className="block sm:table-cell sm:p-3.5 text-slate-700 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;Act as my [board] [subject] tutor. Ask me one question at a time on [topic]. Do not show the answer until I reply. After I answer, tell me what I got right, what I missed, and the first step where my thinking went wrong.&rdquo;
                    </td>
                  </tr>
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-1.5 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Purpose"
                      className="block sm:table-cell sm:p-3.5 font-extrabold text-[#0f4a9b] sm:align-top pb-1 sm:pb-3.5 border-b border-slate-100 sm:border-none"
                    >
                      Hint ladder
                    </td>
                    <td
                      data-label="Prompt"
                      className="block sm:table-cell sm:p-3.5 text-slate-700 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;I&apos;m stuck on this question. Do not solve it. Give me one small hint and wait. If I ask for more, give a bigger hint, but do not give the final answer until I have tried again and ask for the full solution.&rdquo;
                    </td>
                  </tr>
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-1.5 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Purpose"
                      className="block sm:table-cell sm:p-3.5 font-extrabold text-[#0f4a9b] sm:align-top pb-1 sm:pb-3.5 border-b border-slate-100 sm:border-none"
                    >
                      Teach-back
                    </td>
                    <td
                      data-label="Prompt"
                      className="block sm:table-cell sm:p-3.5 text-slate-700 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;I will explain [concept] in my own words. Tell me what is correct, what is missing, and ask me two questions to test my understanding.&rdquo;
                    </td>
                  </tr>
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-1.5 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Purpose"
                      className="block sm:table-cell sm:p-3.5 font-extrabold text-[#0f4a9b] sm:align-top pb-1 sm:pb-3.5 border-b border-slate-100 sm:border-none"
                    >
                      Error finder
                    </td>
                    <td
                      data-label="Prompt"
                      className="block sm:table-cell sm:p-3.5 text-slate-700 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;Here is my working. Do not rewrite it. Tell me only the first line that contains an error, and why it is wrong.&rdquo;
                    </td>
                  </tr>
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-1.5 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Purpose"
                      className="block sm:table-cell sm:p-3.5 font-extrabold text-[#0f4a9b] sm:align-top pb-1 sm:pb-3.5 border-b border-slate-100 sm:border-none"
                    >
                      Practice questions
                    </td>
                    <td
                      data-label="Prompt"
                      className="block sm:table-cell sm:p-3.5 text-slate-700 sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;Write five questions on [topic] in the style of [board] papers, getting harder, with no answers. I will send my answers before you show any mark points.&rdquo;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Always verify against the official mark scheme. AI marking is a useful second opinion, but it is not a substitute for the board&apos;s own marking guidance.
            </p>

            {/* IMAGE 4: Quiz mode in action */}
            <InlineImage
              src="/images/blogs/student-answering-ai-quiz-from-memory.webp"
              alt="Student writing an answer by hand before checking a tablet"
              caption="Writing the answer by hand first keeps the retrieval effort with the student."
              width={1024}
              height={572}
            />
          </div>

          {/* ── 07. What parents can look for (and say) ── */}
          <SectionHeading num="07" id="what-parents-can-look-for-and-say">
            What parents can look for (and say)
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              You do not need to understand the technology. You need to notice the gap between homework and understanding.
            </p>
            <p className="font-bold text-[#0a1f3d]">Signs AI may be doing too much of the thinking:</p>
            <ul className="space-y-2 my-3 pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>Homework is polished, but the child cannot explain it aloud</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>Class-test results are far below homework results</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>Your child cannot do a similar question when you change the numbers</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>A sudden jump in the quality of writing that does not match their usual voice</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>Reluctance to show rough working or the first attempt</span>
              </li>
            </ul>

            <p className="font-bold text-[#0a1f3d]">What to say:</p>

            <div className="my-5 overflow-hidden rounded-2xl border border-slate-200 shadow-xs text-left">
              <table className="block sm:table w-full text-left text-xs border-collapse">
                <thead className="hidden sm:table-header-group">
                  <tr className="bg-[#0a1f3d] text-white">
                    <th className="p-3.5 font-bold border-b border-slate-700 align-top w-[42%]">Instead of&hellip;</th>
                    <th className="p-3.5 font-bold border-b border-slate-700 align-top w-[58%]">Try&hellip;</th>
                  </tr>
                </thead>
                <tbody className="block sm:table-row-group divide-y divide-slate-200 sm:divide-slate-100 bg-white">
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-2 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Instead of…"
                      className="block sm:table-cell sm:p-3.5 text-slate-600 font-medium sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;Are you cheating with ChatGPT?&rdquo;
                    </td>
                    <td
                      data-label="Try…"
                      className="block sm:table-cell sm:p-3.5 text-[#0f4a9b] font-semibold sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-[#0f4a9b]/60 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;Show me how you used it. Where did you get stuck first?&rdquo;
                    </td>
                  </tr>
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-2 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Instead of…"
                      className="block sm:table-cell sm:p-3.5 text-slate-600 font-medium sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;Don&apos;t touch AI.&rdquo;
                    </td>
                    <td
                      data-label="Try…"
                      className="block sm:table-cell sm:p-3.5 text-[#0f4a9b] font-semibold sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-[#0f4a9b]/60 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;Try it on paper first, then use AI for hints and feedback.&rdquo;
                    </td>
                  </tr>
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-2 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Instead of…"
                      className="block sm:table-cell sm:p-3.5 text-slate-600 font-medium sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;This looks perfect!&rdquo;
                    </td>
                    <td
                      data-label="Try…"
                      className="block sm:table-cell sm:p-3.5 text-[#0f4a9b] font-semibold sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-[#0f4a9b]/60 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;Explain this step to me as if I&apos;d never seen it.&rdquo;
                    </td>
                  </tr>
                  <tr className="block sm:table-row p-4 sm:p-0 space-y-2 sm:space-y-0 hover:bg-slate-50/80">
                    <td
                      data-label="Instead of…"
                      className="block sm:table-cell sm:p-3.5 text-slate-600 font-medium sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-slate-400 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;Why did you do worse on the test?&rdquo;
                    </td>
                    <td
                      data-label="Try…"
                      className="block sm:table-cell sm:p-3.5 text-[#0f4a9b] font-semibold sm:align-top before:content-[attr(data-label)] before:block before:text-[10px] before:font-extrabold before:uppercase before:tracking-wider before:text-[#0f4a9b]/60 before:mb-0.5 sm:before:hidden"
                    >
                      &ldquo;Let&apos;s try a few without AI and see which parts feel shaky.&rdquo;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              A simple family agreement helps: try first, ask for hints, quiz yourself, and finish with a no-AI check. Researchers and educators suggest a short reflection after any AI-assisted work: where did I get stuck, what hint did I ask for, what did I use, and can I now solve a similar question alone? Our guide on{' '}
              <a href="/blogs/how-much-should-parents-help-with-homework" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                how much parents should help with homework
              </a>{' '}
              covers the wider balance.
            </p>

            {/* IMAGE 5: Parent and teen talking */}
            <InlineImage
              src="/images/blogs/parent-teen-conversation-about-ai-homework.webp"
              alt="Parent and teenager talking calmly about how they use AI for homework"
              caption="Curious, calm questions about how a child used AI work far better than accusations."
              width={1024}
              height={572}
            />
          </div>

          {/* ── 08. Coursework, honesty and the rules ── */}
          <SectionHeading num="08" id="coursework-honesty-and-the-rules">
            Coursework, honesty and the rules
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Where marks count towards a qualification, honesty matters most.
            </p>
            <ul className="space-y-2.5 my-3 pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Check your school&apos;s AI policy</strong> and the exam board&apos;s current guidance before using AI for any assessed work.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Declare any permitted use</strong> in the format the school or board requires.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Never submit AI-generated text as your own.</strong> Passing off AI work as a student&apos;s own is treated as malpractice, with consequences that can include lost marks or disqualification.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">Keep drafts and notes.</strong> Schools often check progress at intermediate stages, and your own drafts show the work is yours.
                </span>
              </li>
            </ul>
            <p>
              If you are unsure whether a use is allowed, ask the teacher before you do it.
            </p>
          </div>

          {/* ── 09. When reliance on AI is a sign of something else ── */}
          <SectionHeading num="09" id="when-reliance-on-ai-is-a-sign-of-something-else">
            When reliance on AI is a sign of something else
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Sometimes heavy AI use is not laziness but a way of managing a feeling. A student may reach for AI immediately because:
            </p>
            <ul className="space-y-2.5 my-3 pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">They feel anxious about getting it wrong.</strong> See our guide to{' '}
                  <a href="/blogs/maths-anxiety-teenagers-signs-causes-help" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    maths anxiety in teenagers
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">They find it hard to start.</strong> See{' '}
                  <a href="/blogs/why-teenagers-procrastinate-on-revision" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    why teenagers procrastinate on revision
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">They are overwhelmed or exhausted.</strong> Sleep and workload both matter (see{' '}
                  <a href="/blogs/sleep-and-memory-why-all-nighters-backfire" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    Sleep and Memory
                  </a>
                  ).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#0a1f3d]">They have a genuine gap and no one to ask.</strong>
                </span>
              </li>
            </ul>
            <p>
              In each case, banning the tool treats the symptom. Addressing the cause usually reduces the reliance. If a gap is the reason, a few lessons with a tutor, or a talk with the subject teacher, can rebuild the foundation, so AI becomes a coach rather than a crutch.
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
              <strong>Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakc&#305;, &Ouml;., &amp; Mariman, R. (2025).</strong>{' '}
              <a
                href="https://www.pnas.org/doi/10.1073/pnas.2422633122"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]"
              >
                Generative AI without guardrails can harm learning: Evidence from high school mathematics
              </a>
              . <em>Proceedings of the National Academy of Sciences</em>, 122(26), e2422633122.
            </p>
            <p>
              <strong>Roediger, H. L., &amp; Karpicke, J. D. (2006).</strong> Test-enhanced learning: Taking memory tests improves long-term retention. <em>Psychological Science</em>.
            </p>
            <p>
              <strong>Slamecka, N. J., &amp; Graf, P. (1978).</strong> The generation effect: Delineation of a phenomenon. <em>Journal of Experimental Psychology: Human Learning and Memory</em>.
            </p>
            <p>
              <strong>Risko, E. F., &amp; Gilbert, S. J. (2016).</strong> Cognitive offloading. <em>Trends in Cognitive Sciences</em>.
            </p>
            <p>
              <strong>Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., &amp; Willingham, D. T. (2013).</strong> Improving students&apos; learning with effective learning techniques. <em>Psychological Science in the Public Interest</em>.
            </p>
            <p>
              <strong>Gulf News:</strong>{' '}
              <a
                href="https://gulfnews.com/uae/education/uae-to-launch-ai-curriculum-starting-in-kindergarten-7-core-concepts-revealed-1.500115415"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]"
              >
                UAE to launch AI curriculum starting in kindergarten
              </a>
              .
            </p>
            <p>
              <strong>Cambridge International:</strong>{' '}
              <a
                href="https://cambridgeinternational.org/exam-administration/cambridge-exams-officers-guide/phase-3-coursework-and-moderation/generative-ai-in-coursework"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]"
              >
                Guidance on generative AI in coursework
              </a>
              .
            </p>
            <p>
              <strong>JCQ:</strong>{' '}
              <a
                href="https://www.jcq.org.uk/exams-office/malpractice/artificial-intelligence-ai-use-in-assessments/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]"
              >
                AI Use in Assessments: Protecting the Integrity of Qualifications
              </a>
              .
            </p>
          </div>

          {/* CTA block: Diagnostic Session */}
          <div
            className="my-10 rounded-2xl p-6 sm:p-8 border border-white/10 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] rounded-full mb-3 text-[10px] font-extrabold tracking-wider uppercase">
              FIRST SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              Is AI doing your child&apos;s thinking, or helping it?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              Every first 1-hour lesson includes a free 15-minute orientation, so your child and their tutor can agree where to focus first. Sessions are online and 1-to-1, for families in every emirate. No commitment. Cancel anytime.
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
                {BLOG.author}, {BLOG.authorRole}
              </a>
              <p className="text-xs text-gray-500 leading-relaxed">
                Nimra writes guides for parents on study technique, memory and exam preparation for British and IB curriculum students across the UAE.
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
                Ustaad Editorial Team. Every guide is checked for accuracy, educational validity and parent clarity before it is published.
              </p>
            </div>
          </div>

          {/* Related Guides on Psychology of Learning */}
          <div className="my-8 p-5 rounded-2xl border border-slate-200 bg-white">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-3">
              Related Guides on Psychology of Learning
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

