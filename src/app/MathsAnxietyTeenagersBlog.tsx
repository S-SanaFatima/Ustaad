import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar, Clock, BookOpen, ChevronDown, ChevronUp,
  Mail, Home, ChevronRight as ChevronRightIcon,
  ArrowRight, User, AlertCircle, CheckCircle2, TrendingUp, HelpCircle
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';
import { WhatsAppIcon } from './shared/WhatsAppIcon';

const BLOG = {
  title: 'Maths Anxiety in Teenagers: Signs, Causes and Help | Ustaad',
  titleLine1: 'Maths Anxiety in Teenagers:',
  titleLine2: 'Why Your Child Says "I\'m Just Bad at Maths" (and How to Help)',
  heading: 'Maths Anxiety in Teenagers: Why Your Child Says "I\'m Just Bad at Maths" (and How to Help)',
  subtitle:
    "Does your child say they're bad at maths? Learn the signs of maths anxiety in teenagers, what causes it, and practical ways UAE parents can help.",
  categoryBadge: 'USTAAD UAE · PSYCHOLOGY OF LEARNING',
  categoryUrl: '/blogs/psychology-of-learning',
  slug: 'maths-anxiety-teenagers-signs-causes-help',
  canonical: '/blogs/maths-anxiety-teenagers-signs-causes-help',
  description:
    "Does your child say they're bad at maths? Learn the signs of maths anxiety in teenagers, what causes it, and practical ways UAE parents can help.",
  heroImage: '/images/blogs/maths-anxiety-teenager-uae.webp',
  heroAlt: 'Teenage student looking uneasy at a maths worksheet at a home desk in the UAE',
  heroCaption: 'When maths shows up, some students stop thinking about the problem and start thinking about the feeling.',
  datePublished: '2026-10-20',
  dateModified: '2026-10-20',
  publishedText: '20 October 2026',
  readTime: '10 min read',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  authorPhoto: '/images/team/nimra-shahzada-v2.jpg',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Curriculum & Academic Review Board',
  reviewerUrl: '/editorial',
  tags: [
    'Maths Anxiety',
    'Maths Confidence',
    'Teenage Learning',
    'IGCSE Maths',
    'Exam Anxiety',
    'Parent Guidance',
    'Working Memory'
  ],
};

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

const FAQS = [
  {
    q: 'What is maths anxiety?',
    a: 'A feeling of worry, tension or dread about maths that interferes with doing it. It affects access to what the student knows, so it can look like a lack of ability even when the skills are there.'
  },
  {
    q: 'What are the signs of maths anxiety in teenagers?',
    a: "Avoiding maths homework, stomach aches or illness before maths, freezing or leaving blanks on multi-step questions, saying I'm just not a maths person, and doing better at home than in tests."
  },
  {
    q: 'Is maths anxiety real, or is my child making excuses?',
    a: 'It is a well-studied pattern in research. A student who dreads maths is usually not making excuses but experiencing a real feeling that gets in the way of thinking.'
  },
  {
    q: 'What causes maths anxiety?',
    a: 'Usually a combination: gaps in earlier knowledge that snowball, embarrassing moments, beliefs that only maths people succeed, high stakes, and the attitudes of adults around them.'
  },
  {
    q: 'Can maths anxiety go away?',
    a: 'It can improve a great deal. Rebuilding foundations, small successes, strategies for managing worry and supportive language at home all help, and confidence tends to grow as evidence of success builds.'
  },
  {
    q: "How can I help my child if I'm bad at maths myself?",
    a: "You don't need to be good at maths. Stay curious, avoid saying you hate it, ask your child to explain their thinking, and let the teacher or a tutor lead on method."
  },
  {
    q: 'Is maths anxiety the same as dyscalculia?',
    a: 'No. Dyscalculia is a specific learning difference affecting number sense and arithmetic, while maths anxiety is about feelings and can affect students with strong skills. The signs overlap, and some students have both. If you suspect dyscalculia, ask the school about an assessment.'
  }
];

const TOC_ITEMS = [
  { id: 'what-maths-anxiety-is', label: 'What maths anxiety actually is' },
  { id: 'what-it-looks-like', label: 'What it looks like at home and at school' },
  { id: 'why-it-happens', label: 'Why it happens' },
  { id: 'what-worry-does', label: 'What worry does to the thinking brain' },
  { id: 'anxiety-gap-or-panic', label: 'Maths anxiety, a knowledge gap, or exam panic?' },
  { id: 'seven-ways-to-help', label: 'Seven ways to help' },
  { id: 'igcse-pressure-points', label: 'Extra pressure points for IGCSE students' },
  { id: 'more-than-maths-anxiety', label: 'When it is more than maths anxiety' },
  { id: 'faqs', label: 'Frequently asked questions' },
  { id: 'sources', label: 'Sources and further reading' },
];

function SectionHeading({ num, children, id }: { num: string; children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="scroll-mt-20 group text-xl lg:text-2xl font-bold text-[#0a1f3d] mt-10 mb-4 pt-6 border-t border-slate-100 flex items-baseline gap-3">
      <span className="text-xs font-mono font-extrabold text-[#0f4a9b]/40 tracking-wider group-hover:text-[#0f4a9b] transition-colors">
        {num}
      </span>
      <span className="leading-snug">{children}</span>
    </h2>
  );
}

function NarrativeBox({ label = 'PARENT TAKEAWAY', children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-[#0f4a9b]/15 bg-[#f4f7fc] overflow-hidden shadow-xs">
      <div className="px-4 py-2 border-b border-[#0f4a9b]/10 bg-[#0f4a9b]/5 flex items-center">
        <span className="text-[10px] font-extrabold text-[#0f4a9b] uppercase tracking-[0.13em]">{label}</span>
      </div>
      <div className="px-4 py-3.5 text-sm text-gray-700 leading-[1.75] space-y-2">{children}</div>
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
          height={768}
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

function SocialShare({ url, title, center }: { url: string; title: string; center?: boolean }) {
  const enc = encodeURIComponent(url);
  const encT = encodeURIComponent(title);
  return (
    <div className={`flex items-center gap-1.5 ${center ? 'justify-center' : 'ml-auto sm:ml-2'}`}>
      <a
        href={`https://wa.me/?text=${encT}%20${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#25d366]/10 hover:bg-[#25d366]/20 transition"
        aria-label="Share on WhatsApp"
      >
        <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="w-3.5 h-3.5" />
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
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-3.5">
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
              className="flex items-center gap-2.5 group py-1"
            >
              <span className="shrink-0 text-[10px] font-extrabold text-[#0f4a9b]/40 w-4">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[13px] text-gray-600 group-hover:text-[#0f4a9b] transition-colors leading-snug">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQAccordion() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-2.5 my-6">
      {FAQS.map((faq, i) => {
        const isOpen = active === i;
        return (
          <div key={i} className="flex flex-col gap-1.5 border border-slate-200/80 rounded-2xl bg-white p-2 sm:p-3 transition-shadow hover:shadow-sm">
            <button
              onClick={() => setActive(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex items-center gap-3 w-full text-left cursor-pointer p-1"
            >
              <span
                className="flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold transition-colors"
                style={{
                  width: 32,
                  height: 32,
                  background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                  color: isOpen ? '#fff' : '#0f4a9b',
                }}
              >
                Q{i + 1}
              </span>
              <span className="flex-1 font-bold text-sm sm:text-base text-[#0a1f3d] leading-snug">
                {faq.q}
              </span>
              <span className="text-gray-400 shrink-0">
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="pt-2 pb-1 px-3 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/** Coded interactive diagram for the Maths Anxiety Avoidance Loop */
function MathsAnxietyLoopDiagram() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const nodes = [
    { label: 'Gap in an Earlier Topic', sub: 'Foundational concepts missed', color: 'from-blue-600 to-indigo-600' },
    { label: 'Wrong Answers on New Work', sub: 'Struggling as content advances', color: 'from-indigo-600 to-purple-600' },
    { label: 'Worry', sub: 'Dread, tension & doubt', color: 'from-purple-600 to-rose-600' },
    { label: 'Avoiding Maths', sub: 'Delaying homework, shutting the book', color: 'from-rose-600 to-amber-600' },
    { label: 'Less Practice', sub: 'Fewer problems attempted', color: 'from-amber-600 to-orange-600' },
    { label: 'The Gap Grows', sub: 'Snowballing into new topics', color: 'from-orange-600 to-blue-600' },
  ];

  return (
    <figure className="my-8 rounded-2xl border border-slate-200/90 bg-gradient-to-b from-[#f8fafd] to-white p-5 sm:p-7 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0f4a9b] block">Interactive Diagram</span>
          <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d]">The Self Reinforcing Maths Anxiety Loop</h3>
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-semibold">
          <span>A small success breaks the loop</span>
        </div>
      </div>

      {/* Grid representation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {nodes.map((node, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredNode(i)}
            onMouseLeave={() => setHoveredNode(null)}
            className={`relative p-3.5 rounded-xl border transition-all duration-200 cursor-default ${
              hoveredNode === i
                ? 'bg-white border-[#0f4a9b] shadow-md scale-[1.02]'
                : 'bg-white/80 border-slate-200/80 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-mono text-[10px] font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-[10px] text-gray-400 font-medium">Step {i + 1} of 6</span>
            </div>
            <div className="font-bold text-sm text-[#0a1f3d]">{node.label}</div>
            <div className="text-[11px] text-gray-500 mt-0.5">{node.sub}</div>
          </div>
        ))}
      </div>

      {/* Breakout Callout */}
      <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-200 text-xs flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
        <div>
          <span className="font-bold text-[#7A5E10] block">The Exit Point:</span>
          <span className="text-gray-700">
            Find the first gap and rebuild it with small, untimed questions.
          </span>
        </div>
      </div>

      <figcaption className="mt-3 text-center text-xs text-gray-400 italic">
        Each turn of the loop makes the next start harder. A small success is how the loop breaks.
      </figcaption>
    </figure>
  );
}

/** Coded Small Steps Confidence Ladder */
function SmallStepsLadder() {
  const steps = [
    {
      level: 'Step 4',
      title: 'Past Paper Section',
      desc: 'Standard exam conditions with multi-mark questions and a realistic timer.',
      badge: 'Target Goal',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      bg: 'bg-emerald-50/50 border-emerald-200'
    },
    {
      level: 'Step 3',
      title: 'Add a Gentle Timer',
      desc: 'Generous countdown with permission to pause if heart rate spikes.',
      badge: 'Building Pace',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      bg: 'bg-blue-50/40 border-blue-200'
    },
    {
      level: 'Step 2',
      title: 'Slightly Harder / Multi-Step',
      desc: 'Introduce multi-step algebra or worded questions, still completely untimed.',
      badge: 'Expanding Scope',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      bg: 'bg-amber-50/40 border-amber-200'
    },
    {
      level: 'Step 1',
      title: 'Easy, Untimed & Low Stakes',
      desc: 'Questions from an earlier year or core foundation. Early wins build confidence.',
      badge: 'Starting Point',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      bg: 'bg-indigo-50/40 border-indigo-200'
    },
  ];

  return (
    <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="mb-4">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0f4a9b] block">STRATEGY 2 VISUALISED</span>
        <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d]">The Maths Confidence Ladder</h3>
        <p className="text-xs text-gray-500 mt-0.5">
          Work upwards from Step 1. Never jump to timed past papers until earlier rungs feel calm.
        </p>
      </div>

      <div className="space-y-2.5">
        {steps.map((st, i) => (
          <div key={i} className={`p-3.5 rounded-xl border ${st.bg} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2`}>
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-xs text-[#0a1f3d] shadow-2xs shrink-0">
                {4 - i}
              </span>
              <div>
                <span className="font-bold text-sm text-[#0a1f3d] block">{st.title}</span>
                <span className="text-xs text-gray-600 block mt-0.5">{st.desc}</span>
              </div>
            </div>
            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border self-start sm:self-auto shrink-0 ${st.badgeColor}`}>
              {st.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MathsAnxietyTeenagersBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <Layout>
      <SEOHead
        title={BLOG.title}
        description={BLOG.description}
        canonical={canonical}
        ogImage={BLOG.heroImage}
        author={BLOG.author}
        placename="United Arab Emirates"
        ogType="article"
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
            { name: 'Maths Anxiety in Teenagers', url: canonical },
          ]),
          articleSchema({
            title: BLOG.heading,
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: {
              name: 'Nimra Shahzada',
              url: '/authors/nimra-shahzada',
              jobTitle: 'Writer on learning and the psychology of studying',
            },
            reviewer: {
              type: 'Organization',
              name: 'Ustaad Editorial Team',
              url: '/editorial',
            },
            image: BLOG.heroImage,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1">
            <Home className="h-3 w-3" /> Home
          </a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs/psychology-of-learning" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">
            Psychology of Learning
          </a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">Maths Anxiety in Teenagers</span>
        </div>
      </div>

      {/* Hero header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Category tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">{BLOG.categoryBadge}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl lg:text-[2.15rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.25] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            {/* Description / Subtitle */}
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3">
              {BLOG.subtitle}
            </p>

            {/* Meta */}
            <div className="mb-4 mt-2 space-y-2">
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Written by:</span>{' '}
                  <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">Nimra Shahzada</a>
                  <span className="block sm:inline">
                    {' '}<a href="/authors/nimra-shahzada" className="text-gray-500 hover:text-[#0f4a9b]">| Writer on learning and the psychology of studying</a>
                  </span>
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Reviewed by:</span>{' '}
                  <a href="/editorial" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">Ustaad Editorial Team</a>
                  <span className="block sm:inline">
                    {' '}<a href="/editorial" className="text-gray-500 hover:text-[#0f4a9b]">| Every guide is checked for accuracy, educational validity and parent clarity</a>
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

            {/* Hero image */}
            <div className="mt-5 rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-[16/9] bg-slate-100">
              <img
                src={BLOG.heroImage}
                alt={BLOG.heroAlt}
                width={1376}
                height={768}
                fetchPriority="high"
                className="w-full h-full object-cover block"
              />
            </div>
            <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">
              {BLOG.heroCaption}
            </figcaption>

            {/* Table of contents */}
            <TOC open={tocOpen} setOpen={setTocOpen} />

          </motion.div>
        </div>
      </section>

      {/* Main body content */}
      <section className="py-6 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-[1.8] text-[15px] space-y-5">

          {/* Intro Story */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 italic text-gray-700 text-sm leading-relaxed space-y-3">
            <p>
              A Year 9 student opens his maths homework, reads the first question and closes the book. Ten minutes later he is working on his English essay instead. When his mother asks about maths, the answer is short: <span className="font-semibold text-slate-800">"I'm just not a maths person."</span>
            </p>
            <p>
              Yet last weekend, with his dad sitting calmly beside him and no clock running, he solved the same kind of question without trouble.
            </p>
          </div>

          <p>
            His parents wonder whether he is lazy, unlucky or simply weak at maths. A better question is a different one: <strong>what is happening to him in the moment he sees the page?</strong>
          </p>

          <p>
            For many students, the answer is <strong>maths anxiety</strong>. It is common, it is often missed, and it responds well to the right kind of help. This guide explains what it is, how to tell it apart from a knowledge gap or ordinary exam nerves, and what UAE families can do about it.
          </p>

          {/* 01. What maths anxiety actually is */}
          <SectionHeading num="01" id="what-maths-anxiety-is">
            What maths anxiety actually is
          </SectionHeading>

          <p>
            Maths anxiety is a feeling of tension, worry or dread around maths, in lessons, homework and tests, that gets in the way of doing it. Researchers have studied it for decades, and three points matter most for parents:
          </p>

          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0 mt-1" />
              <span>
                <strong>It is not the same as being bad at maths.</strong> Students with strong skills can have it. What it affects is access: the student knows the method but cannot reach it while worried.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0 mt-1" />
              <span>
                <strong>It is different from general anxiety.</strong> A student can be relaxed in history and tense in maths. Research by Maloney and Beilock describes maths anxiety as a distinct pattern, related to general anxiety but not identical to it.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0 mt-1" />
              <span>
                <strong>It is a recognised pattern in research, not a diagnosis on its own.</strong> It is also found across many countries, and studies using international assessment data link it with lower maths performance (Foley and colleagues).
              </span>
            </li>
          </ul>

          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              <strong>A note of caution:</strong> Estimates of how common it is vary widely, depending on who is measured and how. Treat any single percentage you read with care.
            </span>
          </div>

          <NarrativeBox label="PARENT TAKEAWAY">
            Maths anxiety is about the feeling, not the ability. A student can know the method and still be unable to reach it while worried.
          </NarrativeBox>

          {/* 02. What it looks like at home and at school */}
          <SectionHeading num="02" id="what-it-looks-like">
            What it looks like at home and at school
          </SectionHeading>

          <p>
            Maths anxiety rarely announces itself. Students do not usually say <em>"I feel anxious about maths"</em>. They show it in ways that can look like laziness, stubbornness or boredom.
          </p>

          {/* Comparison Table */}
          <div className="my-6 rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="bg-[#0a1f3d] text-white px-4 py-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <span>Where you see it</span>
              <span>What it can look like</span>
            </div>
            <div className="divide-y divide-slate-100 bg-white text-xs sm:text-sm">
              <div className="p-3.5 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <span className="font-bold text-[#0a1f3d]">Before maths lessons</span>
                <span className="text-gray-600">Stomach aches or headaches on maths days, sudden "illness", "forgetting" the homework</span>
              </div>
              <div className="p-3.5 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50/50">
                <span className="font-bold text-[#0a1f3d]">At homework</span>
                <span className="text-gray-600">Leaving maths until last, rereading the question without starting, rubbing out, reaching for the calculator for easy steps, asking for the answer very quickly</span>
              </div>
              <div className="p-3.5 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <span className="font-bold text-[#0a1f3d]">In tests</span>
                <span className="text-gray-600">Leaving multi-step questions blank, freezing in the first few minutes, doing far better on the same questions afterwards at home</span>
              </div>
              <div className="p-3.5 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50/50">
                <span className="font-bold text-[#0a1f3d]">In what they say</span>
                <span className="text-gray-600">"I'm just not a maths person." "I'm stupid at maths." "What's the point?"</span>
              </div>
              <div className="p-3.5 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <span className="font-bold text-[#0a1f3d]">Across subjects</span>
                <span className="text-gray-600">Capable and confident elsewhere, with maths as the glaring exception</span>
              </div>
            </div>
          </div>

          <p>
            One sign is especially telling: <strong>a student who can do a question calmly at the kitchen table but not in a lesson or test.</strong> That gap suggests the problem lies less in what they know and more in what happens to their thinking under pressure.
          </p>

          <InlineImage
            src="/images/blogs/teenager-explaining-maths-step-aloud.webp"
            alt="Student explaining a maths step aloud to a parent at a home table"
            caption="When the clock is removed, students can often work through problems calmly at the kitchen table that would freeze them in school."
          />

          <p>
            Avoidance is a hallmark. If your child puts off maths in particular, our guide to{' '}
            <a href="/blogs/why-teenagers-procrastinate-on-revision" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
              why teenagers procrastinate on revision
            </a>{' '}
            explains how avoiding an unpleasant feeling can easily be mistaken for laziness.
          </p>

          {/* 03. Why it happens */}
          <SectionHeading num="03" id="why-it-happens">
            Why it happens
          </SectionHeading>

          <p>
            There is rarely one single cause. Several usually combine:
          </p>

          <div className="space-y-3.5 my-4">
            <div className="p-4 rounded-xl border border-slate-200/90 bg-white">
              <h4 className="font-bold text-sm text-[#0a1f3d] mb-1">Gaps that snowball</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Maths is cumulative. A shaky grasp of fractions, negative numbers or basic algebraic rearrangement in Year 7 or 8 can surface as "I'm completely lost" in Year 10, because every single new topic stands on the earlier ones.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/90 bg-white">
              <h4 className="font-bold text-sm text-[#0a1f3d] mb-1">Painful moments</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Being wrong in front of the class, being made to feel slow, a timed test that went badly, or constant comparison with classmates. One or two such moments can leave a student linking maths with embarrassment.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/90 bg-white">
              <h4 className="font-bold text-sm text-[#0a1f3d] mb-1">Beliefs about innate ability</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                <em>"Some people are just maths people"</em> is an unhelpful belief. A student who holds it can read every struggle as proof they lack ability, rather than as a problem to work through.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/90 bg-white">
              <h4 className="font-bold text-sm text-[#0a1f3d] mb-1">High stakes</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Maths is often treated as the subject that counts, with tier decisions, predicted grades and university admission requirements behind it. The bigger the stakes feel, the more threatening a single question becomes.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/90 bg-white">
              <h4 className="font-bold text-sm text-[#0a1f3d] mb-1">The attitudes around them</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Parents and teachers can pass on maths anxiety without meaning to. In a landmark study of first and second graders in the United States, Maloney and colleagues found that children of highly maths-anxious parents learned less maths over the school year and became more anxious themselves, but only when those parents helped with maths homework frequently. It was a study of young children, and it does not mean parents should stop helping. It suggests that the emotional temperature around the maths matters just as much as the academic help.
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-[#0a1f3d] mt-6 mb-2">The loop</h3>
          <p>
            These causes feed each other in a relentless cycle:
          </p>

          <p className="text-center font-mono font-bold text-xs sm:text-sm text-[#0f4a9b] bg-slate-50 py-3 rounded-xl border border-slate-200">
            Gap in an earlier topic → Wrong answers on new work → Worry → Avoiding maths → Less practice → The gap grows
          </p>

          <p>
            A review by Carey and colleagues concluded that the link between maths anxiety and performance probably runs both ways. Anxiety can lower performance, and poor performance can create anxiety. That is why it is unwise to assume anxiety is always the original cause. Very often, a hidden curriculum gap came first.
          </p>

          {/* Coded interactive SVG diagram */}
          <MathsAnxietyLoopDiagram />

          {/* 04. What worry does to the thinking brain */}
          <SectionHeading num="04" id="what-worry-does">
            What worry does to the thinking brain
          </SectionHeading>

          <p>
            Worry takes up working memory, the mental space a student needs for multi-step maths (Ashcraft and Kirk). That is why easy questions often go fine while long ones stall, and why the same question feels manageable at the kitchen table. We explain this in more detail in{' '}
            <a href="/blogs/physics-understanding-vs-marks" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
              Your Child Understands Physics. So Why Are the Marks Still Low?
            </a>
          </p>

          {/* 05. Maths anxiety, a knowledge gap, or exam panic? */}
          <SectionHeading num="05" id="anxiety-gap-or-panic">
            Maths anxiety, a knowledge gap, or exam panic?
          </SectionHeading>

          <p>
            The right help depends entirely on which problem you are really facing. Often there is a mix, but one usually leads:
          </p>

          {/* 3-Column Diagnostic Table */}
          <div className="my-6 rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="grid grid-cols-3 bg-[#0a1f3d] text-white p-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-center">
              <span>Maths Anxiety</span>
              <span className="border-x border-white/20">Knowledge Gap</span>
              <span>General Exam Panic</span>
            </div>
            <div className="divide-y divide-slate-100 bg-white text-xs leading-relaxed">
              <div className="p-3.5 bg-slate-50 font-bold text-[#0a1f3d] text-[11px] uppercase tracking-wider">
                When it shows
              </div>
              <div className="grid grid-cols-3 p-3 gap-2 text-gray-700">
                <span>Whenever maths appears: lessons, homework, tests</span>
                <span className="border-x border-slate-100 px-2">On particular topics or operations</span>
                <span>Mostly before and during exams, across many subjects</span>
              </div>

              <div className="p-3.5 bg-slate-50 font-bold text-[#0a1f3d] text-[11px] uppercase tracking-wider">
                Typical sign
              </div>
              <div className="grid grid-cols-3 p-3 gap-2 text-gray-700">
                <span>Dread, avoidance, "I'm bad at maths"</span>
                <span className="border-x border-slate-100 px-2">Gets the same type of question wrong, calmly</span>
                <span>Nerves and physical panic across subjects before papers</span>
              </div>

              <div className="p-3.5 bg-slate-50 font-bold text-[#0a1f3d] text-[11px] uppercase tracking-wider">
                At the kitchen table
              </div>
              <div className="grid grid-cols-3 p-3 gap-2 text-gray-700">
                <span>Often can do it, slowly and nervously</span>
                <span className="border-x border-slate-100 px-2">Cannot do it, even without any pressure</span>
                <span>Usually completely fine</span>
              </div>

              <div className="p-3.5 bg-slate-50 font-bold text-[#0a1f3d] text-[11px] uppercase tracking-wider">
                What helps first
              </div>
              <div className="grid grid-cols-3 p-3 gap-2 text-gray-700 font-medium">
                <span className="text-[#0f4a9b]">Rebuild confidence in small steps and manage the worry</span>
                <span className="border-x border-slate-100 px-2 text-[#0f4a9b]">Teach the missing topic, then practise</span>
                <span className="text-[#0f4a9b]">Routines, timed practice under pressure, calming strategies</span>
              </div>
            </div>
          </div>

          <p>
            <strong>A simple home diagnostic test:</strong> Pick three or four easier questions from an earlier year, in a calm weekend moment, with no timer running. If your child manages them comfortably, the issue leans towards pressure and confidence. If they struggle even then, there is almost certainly a foundational gap that needs rebuilding first.
          </p>

          <p>
            For the exam-panic column, our guide to{' '}
            <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
              why some children only panic right before exams
            </a>{' '}
            explains what usually sits behind general exam nerves.
          </p>

          {/* 06. Seven ways to help */}
          <SectionHeading num="06" id="seven-ways-to-help">
            Seven ways to help
          </SectionHeading>

          <div className="space-y-6 my-4">
            {/* Strategy 1 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-base font-bold text-[#0a1f3d] flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-xs font-mono">1</span>
                Find the first gap and rebuild from there
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Doing more of the current topic rarely helps if the foundation is shaky. If algebraic fractions are causing tears, the issue is often Year 7 numerical fractions or Year 8 basic factorising. Work backwards until you find where understanding stops, then rebuild forwards. A <a href="/maths" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">maths specialist</a> can do this quickly with a short diagnostic.
              </p>
            </div>

            {/* Strategy 2 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-base font-bold text-[#0a1f3d] flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-xs font-mono">2</span>
                Make success small and frequent
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Anxiety shrinks with evidence. Start with questions that are easy, untimed and low stakes, then gradually add difficulty, and only later add time pressure. Each calm success weakens the subconscious "maths equals danger" link.
              </p>
              <SmallStepsLadder />
            </div>

            {/* Strategy 3 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-base font-bold text-[#0a1f3d] flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-xs font-mono">3</span>
                Write the worry down before a test
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Park, Ramirez and Beilock found that students who spent a few minutes writing about their worries before a maths test did better on the hard questions, especially those most anxious about maths. A student writes freely: <em>"What I'm worried about is…"</em> Getting the worry onto paper offloads working memory, leaving more cognitive room for the maths.
              </p>
              <InlineImage
                src="/images/blogs/student-writing-worries-before-maths-test.webp"
                alt="Student writing their worries on a sheet of paper before a maths test"
                caption="Writing worries down for a few minutes before a test offloads working memory so the brain can focus on maths."
              />
            </div>

            {/* Strategy 4 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-base font-bold text-[#0a1f3d] flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-xs font-mono">4</span>
                Reframe the body's signals
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A racing heart and butterflies are the body preparing to perform, not an omen of failure. In research by Jamieson and colleagues, students taught to see nervous arousal as helpful did better on the maths section of a graduate-school admissions test than those who tried to suppress it. <em>"My body is getting ready"</em> is a far more functional thought than <em>"I'm panicking"</em>.
              </p>
            </div>

            {/* Strategy 5 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-base font-bold text-[#0a1f3d] flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-xs font-mono">5</span>
                Explain, don't just calculate
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ask your child to say aloud what each step means and why they are doing it. This builds conceptual understanding and reveals exactly where thinking breaks down. It is the same habit Fahad Khan describes in his guide to{' '}
                <a href="/blogs/what-does-y-intercept-mean-maths" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                  what the y-intercept actually means
                </a>, where calculating a number without real meaning leaves a student fragile under pressure.
              </p>
            </div>

            {/* Strategy 6 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-base font-bold text-[#0a1f3d] flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-xs font-mono">6</span>
                Treat mistakes as information
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A wrong answer is not proof of inadequacy; it shows where thinking slipped off track. A short error log, recording the first incorrect step and why it happened, turns mistakes into a structured roadmap. Our guide to{' '}
                <a href="/blogs/silly-mistakes-maths-exams" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                  silly mistakes in maths exams
                </a>{' '}
                shows how to build this habit into daily practice.
              </p>
            </div>

            {/* Strategy 7 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-base font-bold text-[#0a1f3d] flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-xs font-mono">7</span>
                Watch the language at home
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Children pick up adult attitudes with remarkable speed. Subtle shifts in vocabulary transform the emotional atmosphere:
              </p>

              {/* Language comparison table */}
              <div className="rounded-xl border border-slate-200 overflow-hidden text-xs sm:text-sm">
                <div className="grid grid-cols-2 bg-slate-100 p-2.5 font-bold text-[#0a1f3d]">
                  <span>Instead of…</span>
                  <span>Try…</span>
                </div>
                <div className="divide-y divide-slate-100 bg-white">
                  <div className="grid grid-cols-2 p-3 gap-2 text-gray-600">
                    <span className="text-rose-700 italic">"I was never good at maths either."</span>
                    <span className="text-emerald-800 font-medium">"Some of it is tricky. Let's find the first step you're sure about."</span>
                  </div>
                  <div className="grid grid-cols-2 p-3 gap-2 text-gray-600 bg-slate-50/50">
                    <span className="text-rose-700 italic">"You're just not a maths person."</span>
                    <span className="text-emerald-800 font-medium">"Which part stops making sense? Let's find that point."</span>
                  </div>
                  <div className="grid grid-cols-2 p-3 gap-2 text-gray-600">
                    <span className="text-rose-700 italic">"It's easy, just do it!"</span>
                    <span className="text-emerald-800 font-medium">"It's okay if it feels hard. Hard doesn't mean you can't."</span>
                  </div>
                  <div className="grid grid-cols-2 p-3 gap-2 text-gray-600 bg-slate-50/50">
                    <span className="text-rose-700 italic">"Hurry up, you'll run out of time."</span>
                    <span className="text-emerald-800 font-medium">"Go slowly first. We'll add the timer later."</span>
                  </div>
                  <div className="grid grid-cols-2 p-3 gap-2 text-gray-600">
                    <span className="text-rose-700 italic">"62%? What happened?"</span>
                    <span className="text-emerald-800 font-medium">"Which questions cost you marks? Let's look at the first slip."</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-4">
                If you feel anxious about maths yourself, you are not alone, and you do not need to hide it. Stay curious (<em>"let's work it out together"</em>), avoid saying you hate the subject, and let the teacher or an experienced tutor lead on method. Our guide to{' '}
                <a href="/blogs/how-much-should-parents-help-with-homework" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                  how much parents should help with homework
                </a>{' '}
                covers finding the right balance.
              </p>
            </div>
          </div>

          <NarrativeBox label="PARENT TAKEAWAY">
            You don't have to be good at maths to help. Calm curiosity, small steps and kind language do more than any explanation of long division.
          </NarrativeBox>

          {/* 07. Extra pressure points for IGCSE students */}
          <SectionHeading num="07" id="igcse-pressure-points">
            Extra pressure points for IGCSE students
          </SectionHeading>

          <p>
            Three specific features of Cambridge and Edexcel IGCSE maths frequently intensify the feeling of threat for UAE students:
          </p>

          <InlineImage
            src="/images/blogs/igcse-maths-exam-pressure-points-uae.webp"
            alt="Three secondary students in school uniform looking over a maths paper together in a school corridor"
            caption="Tier decisions, non-calculator arithmetic, and multi-step questions create specific pressure points in Cambridge and Edexcel IGCSE Maths."
          />

          <div className="space-y-3.5 my-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h4 className="font-bold text-sm text-[#0a1f3d] mb-1">Tier decisions</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Foundation or Core entry caps the highest grade available (often at Grade 5 or C), whereas Higher or Extended carries much more demanding abstract content. Worry alone should never decide the tier, nor should panic. The decision must rest on objective diagnostic evidence of what your child can do, so discuss it carefully with their subject teacher.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h4 className="font-bold text-sm text-[#0a1f3d] mb-1">The non-calculator paper</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Without the safety blanket of a calculator, small arithmetic slips, negative numbers and fraction operations come to the very front. Practise these core arithmetic skills calmly and separately before they appear in the middle of a past paper.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h4 className="font-bold text-sm text-[#0a1f3d] mb-1">Multi-step questions</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Long, 4- to 6-mark questions place the heaviest load on working memory. Writing every sub-step down, rather than holding it in mind, reduces the load.
              </p>
            </div>
          </div>

          {/* 08. When it is more than maths anxiety */}
          <SectionHeading num="08" id="more-than-maths-anxiety">
            When it is more than maths anxiety
          </SectionHeading>

          <p>
            Most maths anxiety improves steadily with patient, structured support. However, if maths worry comes with panic attacks, school avoidance or low mood that lasts for weeks, speak to the school counsellor and your family doctor.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-gray-700 space-y-2">
            <h4 className="font-bold text-[#0a1f3d]">Maths Anxiety vs Dyscalculia</h4>
            <p>
              Maths anxiety is <strong>not the same as dyscalculia</strong>, a specific learning difference that affects basic number sense, subitising and arithmetic reasoning. The symptoms can overlap, and a student can have both. If your child has struggled with fundamental number concepts since early primary school, regardless of effort or emotional state, ask the school about an assessment by an educational psychologist.
            </p>
            <p className="text-[11px] text-gray-400 italic pt-1">
              Disclaimer: This article provides educational guidance and does not replace clinical or medical advice.
            </p>
          </div>

          {/* 09. Frequently asked questions */}
          <SectionHeading num="09" id="faqs">
            Frequently asked questions
          </SectionHeading>

          <FAQAccordion />

          {/* 10. Sources and further reading */}
          <SectionHeading num="10" id="sources">
            Sources and further reading
          </SectionHeading>

          <div className="space-y-2 text-xs text-gray-500 leading-relaxed border-t border-slate-100 pt-3">
            <p>• Ashcraft, M. H., &amp; Kirk, E. P. (2001). The relationships among working memory, math anxiety, and performance. <em>Journal of Experimental Psychology: General</em>.</p>
            <p>• Maloney, E. A., &amp; Beilock, S. L. (2012). Math anxiety: Who has it, why it develops, and how to guard against it. <em>Trends in Cognitive Sciences</em>.</p>
            <p>• Maloney, E. A., Ramirez, G., Gunderson, E. A., Levine, S. C., &amp; Beilock, S. L. (2015). Intergenerational effects of parents' math anxiety on children's math achievement and anxiety. <em>Psychological Science</em>.</p>
            <p>• Carey, E., Hill, F., Devine, A., &amp; Szűcs, D. (2016). The chicken or the egg? The direction of the relationship between mathematics anxiety and mathematics performance. <em>Frontiers in Psychology</em>.</p>
            <p>• Dowker, A., Sarkar, A., &amp; Looi, C. Y. (2016). Mathematics anxiety: What have we learned in 60 years? <em>Frontiers in Psychology</em>.</p>
            <p>• Foley, A. E., Herts, J. B., Borgonovi, F., Guerriero, S., Levine, S. C., &amp; Beilock, S. L. (2017). The math anxiety-performance link: A global phenomenon. <em>Current Directions in Psychological Science</em>.</p>
            <p>• Park, D., Ramirez, G., &amp; Beilock, S. L. (2014). The role of expressive writing in math anxiety. <em>Journal of Experimental Psychology: Applied</em>.</p>
            <p>• Jamieson, J. P., Mendes, W. B., Blackstock, E., &amp; Schmader, T. (2010). Turning the knots in your stomach into bows: Reappraising arousal improves performance on the GRE. <em>Journal of Experimental Social Psychology</em>.</p>
          </div>

          {/* Related Guides on Psychology of Learning */}
          <div className="my-8 p-5 rounded-2xl border border-slate-200 bg-white">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-3">Related Guides on Psychology of Learning</h3>
            <div className="space-y-2 text-xs">
              <a href="/blogs/why-teenagers-procrastinate-on-revision" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">Why Teenagers Procrastinate on Revision (And Why It Isn't Laziness)</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/exam-stamina-uae-students" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">Exam Stamina: Why Your Child Can't Sit the Full Paper</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/exam-panic-before-exams-uae" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">My Child Only Panics Right Before Exams</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/physics-understanding-vs-marks" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">Your Child Understands Physics. So Why Are the Marks Still Low?</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/silly-mistakes-maths-exams" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">Silly Mistakes in Maths Exams: Why They Happen and a 3-Minute Checking Routine</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/what-does-y-intercept-mean-maths" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">What Does the y-Intercept Actually Mean? (And When It Means Nothing at All)</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
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
              <a href="/authors/nimra-shahzada" className="font-bold text-xs text-[#0a1f3d] hover:text-[#0f4a9b] block mb-1">
                Nimra Shahzada
              </a>
              <p className="text-xs text-gray-500 leading-relaxed">
                Writer on learning and the psychology of studying. Nimra writes guides for parents on study technique, memory and exam preparation for British and IB curriculum students across the UAE.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-[#f8fafd]">
              <div className="flex items-center gap-1.5 mb-2">
                <User className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[11px] font-bold text-[#0f4a9b] uppercase tracking-wider">Reviewed By</span>
              </div>
              <a href="/editorial" className="font-bold text-xs text-[#0a1f3d] hover:text-[#0f4a9b] block mb-1">
                Ustaad Editorial Team
              </a>
              <p className="text-xs text-gray-500 leading-relaxed">
                Every guide is checked for accuracy, educational validity and parent clarity before it is published.
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

          {/* Diagnostic Assessment CTA */}
          <div
            className="my-10 rounded-2xl p-6 sm:p-8 border border-white/10 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] rounded-full mb-3 text-[10px] font-extrabold tracking-wider uppercase">
              FIRST SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              Is it maths anxiety, or a gap your child can't see?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              In the first lesson, an Ustaad maths specialist works out which topics are causing the stall and starts rebuilding from the first shaky step. Every first lesson includes a free 15-minute orientation. Sessions are online, for families in every emirate.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="/contact#form"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-xs sm:text-sm w-full sm:w-auto shadow-md"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
              >
                Book First Session
              </a>
              <a
                href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I'd%20like%20to%20book%20a%20maths%20diagnostic%20session%20for%20my%20child."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-xs sm:text-sm transition shadow-md w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" /> Ask on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
