import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar, Clock, BookOpen, ChevronDown, ChevronUp,
  Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle,
  Sparkles, ArrowRight, User, Target
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';
import { WhatsAppIcon } from './shared/WhatsAppIcon';

const BLOG = {
  title: "Why Teenagers Procrastinate on Revision | Ustaad",
  titleLine1: 'Why Teenagers Procrastinate on Revision',
  titleLine2: "(And Why It Isn't Laziness)",
  heading: "Why Teenagers Procrastinate on Revision (And Why It Isn't Laziness)",
  subtitle:
    "Your teenager keeps putting off revision, and it is easy to call it laziness. The psychology says otherwise. Here is what is really going on, and how UAE families can help.",
  categoryBadge: 'USTAAD UAE · PSYCHOLOGY OF LEARNING',
  categoryUrl: '/blogs/psychology-of-learning',
  slug: 'why-teenagers-procrastinate-on-revision',
  canonical: '/blogs/why-teenagers-procrastinate-on-revision',
  description:
    "Your teenager won't start revising? Procrastination is rarely laziness. Learn the psychology behind it and 7 evidence-based ways UAE parents can help.",
  heroImage: '/images/blogs/parent-helping-teen-start-revision-uae.webp',
  heroAlt: 'UAE father sitting beside teenage son at study desk helping him start IGCSE revision with clear goals and a timer',
  heroCaption: 'Breaking the inertia: a parent sitting quietly beside their teenager to start the first ten minutes turns an overwhelming revision mountain into manageable steps.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  publishedText: '9 October 2026',
  readTime: '10 min read',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  authorPhoto: '/images/team/nimra-shahzada-v2.jpg',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Curriculum & Academic Review Board',
  reviewerUrl: '/editorial',
  tags: [
    'Procrastination',
    'Teenage Motivation',
    'Study Habits',
    'Revision Routine',
    'Exam Preparation UAE',
    'Parent Guidance',
    'Self-Regulation'
  ],
};

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

const FAQS = [
  {
    q: 'Why does my teenager procrastinate even when exams are close?',
    a: 'Because the avoidance is driven by feelings in the moment (overwhelm, fear of a poor result, boredom), not by a lack of awareness. The exam being close can even make it worse by raising the stakes and the dread. Shrinking the first step usually helps more than reminding them of the deadline.'
  },
  {
    q: 'Is procrastination a sign of laziness or lack of motivation?',
    a: 'Rarely. Research describes it as a way of managing unpleasant feelings and is linked to task difficulty, low confidence and distraction. Many students who procrastinate are working very hard at avoiding something that feels threatening.'
  },
  {
    q: 'How can I get my teenager to start revising without nagging?',
    a: "Agree a small, specific starting task and a fixed time together, using an if-then plan. Offer to sit nearby for the first ten minutes. Ask 'what is the hardest part to start?' instead of 'why haven\'t you started?'"
  },
  {
    q: 'Does procrastination affect exam results?',
    a: 'Studies find that habitual procrastination is associated, on average, with lower academic performance. That does not mean one lost evening decides anything. Habits can change, and the earlier a pattern is addressed, the more time there is to rebuild.'
  },
  {
    q: "Should I take my child's phone away during revision?",
    a: 'It usually works better to agree together that the phone lives outside the study space during work blocks, rather than confiscating it as a punishment. Moving it out of sight reduces temptation without turning revision into a battle.'
  },
  {
    q: 'Can a tutor help with procrastination?',
    a: 'A tutor can provide a fixed, scheduled start, small clear tasks and a safe place to rebuild confidence in weaker topics, all of which address the levers in the motivation formula. If avoidance is widespread and persistent, it is also worth involving the school\'s pastoral team.'
  }
];

const TOC_ITEMS = [
  { id: 'feelings-problem', label: 'Procrastination is a feelings problem, not a time problem' },
  { id: 'five-reasons', label: 'Five reasons teenagers avoid starting' },
  { id: 'motivation-formula', label: 'The motivation formula (and why "just try harder" fails)' },
  { id: 'teenage-brain', label: 'Why the teenage brain makes it harder' },
  { id: 'uae-factor', label: 'The UAE factor: why the pile feels bigger here' },
  { id: 'seven-strategies', label: 'Seven strategies that actually help' },
  { id: 'ten-minute-restart', label: 'The 10-minute restart after a lost week' },
  { id: 'parent-phrases', label: 'What parents can say (and avoid saying)' },
  { id: 'more-than-procrastination', label: 'When it is more than procrastination' },
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
    <div className="my-5 rounded-xl border border-[#0f4a9b]/12 bg-[#f4f7fc] overflow-hidden">
      <div className="px-4 py-2 border-b border-[#0f4a9b]/10 bg-[#0f4a9b]/5 flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-[#0f4a9b]" />
        <span className="text-[10px] font-extrabold text-[#0f4a9b] uppercase tracking-[0.13em]">{label}</span>
      </div>
      <div className="px-4 py-3.5 text-sm text-gray-700 leading-[1.75] text-justify space-y-2">{children}</div>
    </div>
  );
}

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mx-auto my-6 max-w-xl">
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

function FAQAccordion() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-2">
      {FAQS.map((faq, i) => {
        const isOpen = active === i;
        return (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setActive(isOpen ? null : i)}
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  minWidth: 36,
                  background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                  color: isOpen ? '#fff' : '#0f4a9b',
                  transition: 'background 300ms, color 300ms',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <span className="font-extrabold text-sm">?</span>
              </button>
              <button
                onClick={() => setActive(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex-1 flex items-center gap-2.5 text-left rounded-full border"
                style={{
                  minHeight: 44,
                  padding: '7px 14px',
                  cursor: 'pointer',
                  background: 'transparent',
                  borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)'
                }}
              >
                <span className="flex-1 font-semibold text-[#0a1f3d] text-[13px] leading-snug">{faq.q}</span>
                <span
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: 28,
                    height: 28,
                    minWidth: 28,
                    borderRadius: '50%',
                    background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                    color: isOpen ? '#fff' : '#0f4a9b',
                    transition: 'background 300ms, color 300ms, transform 300ms',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <ChevronDown className="h-3 w-3" />
                </span>
              </button>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  className="ml-[48px]"
                >
                  <div
                    className="flex items-start gap-2.5 rounded-2xl border p-3.5"
                    style={{
                      background: '#f8fafc',
                      borderColor: 'rgba(15,74,155,0.12)',
                      boxShadow: '0 3px 12px rgba(15,74,155,0.05)'
                    }}
                  >
                    <p className="flex-1 text-gray-600 text-[13px] leading-relaxed text-justify">{faq.a}</p>
                    <span
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{ width: 28, height: 28, minWidth: 28, background: '#0f4a9b', color: '#fff' }}
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ── Motivation Formula Graphic ── */
function MotivationFormulaGraphic() {
  return (
    <div className="my-6 rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a2756] text-white shadow-lg border border-[#0f4a9b]/30">
      <div className="text-center mb-5">
        <span className="inline-block px-3 py-0.5 bg-white/10 text-[#f0d080] text-[10px] font-mono font-bold uppercase tracking-widest rounded-full mb-1.5">
          Temporal Motivation Theory
        </span>
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
          The Motivation Formula
        </h3>
        <p className="text-blue-100/80 text-xs mt-0.5">
          Why "just try harder" fails to move any of the four real levers.
        </p>
      </div>

      <div className="max-w-xs sm:max-w-sm mx-auto bg-white/10 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-white/20 mb-5 text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3 font-mono font-bold text-xs sm:text-sm">
          <span className="text-[#f0d080] shrink-0">Motivation</span>
          <span className="text-white/60">=</span>
          <div className="flex flex-col items-center">
            <span className="text-emerald-300 pb-0.5 px-2 border-b border-white/40">
              Confidence × Value
            </span>
            <span className="text-rose-300 pt-0.5 px-2">
              Distraction × Delay
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left text-xs">
        <div className="bg-white/5 border border-emerald-400/25 rounded-lg p-2.5 flex items-start gap-2">
          <span className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold shrink-0 text-xs">↑</span>
          <div>
            <strong className="text-emerald-300 block">1. Raise Confidence</strong>
            <span className="text-blue-100/80 leading-snug">Shrink the first step into a tiny, winnable task.</span>
          </div>
        </div>
        <div className="bg-white/5 border border-emerald-400/25 rounded-lg p-2.5 flex items-start gap-2">
          <span className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold shrink-0 text-xs">↑</span>
          <div>
            <strong className="text-emerald-300 block">2. Raise Value</strong>
            <span className="text-blue-100/80 leading-snug">Connect the topic to a clear personal goal.</span>
          </div>
        </div>
        <div className="bg-white/5 border border-rose-400/25 rounded-lg p-2.5 flex items-start gap-2">
          <span className="w-5 h-5 rounded bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold shrink-0 text-xs">↓</span>
          <div>
            <strong className="text-rose-300 block">3. Lower Distraction</strong>
            <span className="text-blue-100/80 leading-snug">Park phones outside before opening books.</span>
          </div>
        </div>
        <div className="bg-white/5 border border-rose-400/25 rounded-lg p-2.5 flex items-start gap-2">
          <span className="w-5 h-5 rounded bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold shrink-0 text-xs">↓</span>
          <div>
            <strong className="text-rose-300 block">4. Shorten Delay</strong>
            <span className="text-blue-100/80 leading-snug">Give work a visible finish within 25 minutes.</span>
          </div>
        </div>
      </div>
      <p className="text-center text-[10px] text-white/50 italic mt-3">
        Four levers, not one. Pressure alone moves none of them.
      </p>
    </div>
  );
}

/* ── Procrastination Avoidance Cycle Graphic ── */
function AvoidanceCycleGraphic() {
  return (
    <div className="my-6 rounded-2xl p-5 sm:p-6 bg-[#f8fafd] border border-[#0f4a9b]/15 text-slate-800 shadow-sm">
      <div className="text-center mb-4">
        <span className="inline-block px-2.5 py-0.5 bg-[#0f4a9b]/10 text-[#0f4a9b] text-[10px] font-mono font-bold uppercase tracking-wider rounded-full mb-1">
          Psychological Loop
        </span>
        <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
          The Procrastination Avoidance Cycle
        </h3>
        <p className="text-gray-500 text-xs mt-0.5">
          Relief now feeds guilt later, making the next start even harder.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
        <div className="bg-white border border-rose-200 rounded-xl p-2.5 shadow-2xs">
          <span className="text-base block mb-0.5">😣</span>
          <span className="text-rose-700 font-bold block">1. Unpleasant Feeling</span>
          <span className="text-gray-400 text-[10px] block mt-0.5">Dread, doubt, boredom</span>
        </div>
        <div className="bg-white border border-amber-200 rounded-xl p-2.5 shadow-2xs">
          <span className="text-base block mb-0.5">📱</span>
          <span className="text-amber-700 font-bold block">2. Avoid Task</span>
          <span className="text-gray-400 text-[10px] block mt-0.5">Tidying, phone, tea</span>
        </div>
        <div className="bg-white border border-blue-200 rounded-xl p-2.5 shadow-2xs">
          <span className="text-base block mb-0.5">😌</span>
          <span className="text-blue-700 font-bold block">3. Instant Relief</span>
          <span className="text-gray-400 text-[10px] block mt-0.5">Brain rewards delay</span>
        </div>
        <div className="bg-white border border-purple-200 rounded-xl p-2.5 shadow-2xs">
          <span className="text-base block mb-0.5">😔</span>
          <span className="text-purple-700 font-bold block">4. Guilt & Dread</span>
          <span className="text-gray-400 text-[10px] block mt-0.5">The pile grows heavier</span>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs flex items-center gap-2">
        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[10px] shrink-0">✓</span>
        <span className="text-emerald-900 font-semibold">
          How to break the loop: <span className="font-normal text-emerald-800">Use a 2-minute tiny first step + self-forgiveness.</span>
        </span>
      </div>
    </div>
  );
}

export default function WhyTeenagersProcrastinateBlog() {
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
            { name: 'Teenage Procrastination', url: canonical },
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
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">Teenage Procrastination</span>
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
            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            {/* Description / Subtitle */}
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-justify">
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
                    {' '}<a href="/editorial" className="text-gray-500 hover:text-[#0f4a9b]">| Curriculum &amp; Academic Review Board</a>
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

          {/* Hero image */}
          <figure className="my-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/9] bg-slate-100">
              <img
                src={BLOG.heroImage}
                alt={BLOG.heroAlt}
                width={1376}
                height={774}
                className="w-full h-full object-cover block"
              />
            </div>
            {BLOG.heroCaption && (
              <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">
                {BLOG.heroCaption}
              </figcaption>
            )}
          </figure>

          {/* Intro Narrative */}
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              It is Sunday afternoon in Abu Dhabi, and a Year 10 student has a mock in three weeks.
            </p>
            <p>
              At 2:00 p.m. she sits down to revise. By 2:15 she has sharpened four pencils. By 3:00 she has rewritten her timetable in three colours, tidied her desk and made tea. At 3:40 she watches "just one video" about study tips. At 8:00 p.m. the chemistry textbook is exactly where it was at lunchtime, still closed, and she feels terrible.
            </p>
            <p>
              Her mother has watched the afternoon pass and says what any worried parent might: <em>"You're not even trying."</em>
            </p>
            <p>
              But look closely at that afternoon. It was full of effort. The tidying, the timetable and the tea were all work, of a kind. What she was doing, with real energy, was avoiding a feeling. This guide explains what that feeling is, why teenagers are especially vulnerable to it, and what actually helps.
            </p>
          </div>

          {/* Table of Contents */}
          <TOC open={tocOpen} setOpen={setTocOpen} />

          {/* 01. Procrastination is a feelings problem */}
          <SectionHeading num="01" id="feelings-problem">
            Procrastination is a feelings problem, not a time problem
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Most of us picture procrastination as poor time management. The research points somewhere else.
            </p>
            <p>
              Fuschia Sirois and Timothy Pychyl, who have studied procrastination for years, describe it as a way of managing mood in the short term. The task in front of us triggers an unpleasant feeling (boredom, anxiety, doubt, overwhelm), and putting the task off brings instant relief. We give in to feeling better now at the expense of our future selves.
            </p>
            <p>
              That relief is the trap. It feels like a solution, so the brain learns it. The next time the same task appears, avoiding it feels even more appealing.
            </p>
            <p>
              Large reviews of the research, including Piers Steel's meta-analysis, point the same way. Procrastination is linked to how unpleasant a task feels, how confident the person is that they can do it, and how easily they are distracted. It is not simply a time-management skill that some people lack.
            </p>
            <p>
              The practical consequence is important. If avoidance is about managing a feeling, then lectures about deadlines address the wrong problem, and often make the feeling worse.
            </p>
          </div>

          <InlineImage
            src="/images/blogs/teen-revision-overwhelm-igcse-dubai.webp"
            alt="UAE high school student at her study desk looking overwhelmed by stacks of Cambridge IGCSE revision binders"
            caption="When the revision pile feels threatening, the brain seeks instant relief by avoiding. Procrastination is an emotional response to overwhelm, not a character flaw."
          />

          <NarrativeBox label="PARENT TAKEAWAY">
            <p>
              A teenager who will not start is rarely short of information. They already know the exam is coming. What they are short of is a way to start that does not feel bad.
            </p>
          </NarrativeBox>

          {/* 02. Five reasons teenagers avoid starting */}
          <SectionHeading num="02" id="five-reasons">
            Five reasons teenagers avoid starting
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              "I'll do it later" can hide very different problems. Working out which one is in play changes what helps.
            </p>
          </div>

          <div className="overflow-x-auto my-5 rounded-xl border border-slate-200 text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0a1f3d]">
                  <th className="p-3 font-bold">What you see</th>
                  <th className="p-3 font-bold">What is often underneath</th>
                  <th className="p-3 font-bold">What helps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-gray-600">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-800">Endless tidying, planning and re-planning, but no actual work</td>
                  <td className="p-3">The task feels too big. "Revise chemistry" has no obvious first step</td>
                  <td className="p-3 text-[#0f4a9b] font-medium">Shrink the first step until it is almost trivial (strategy 1)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-800">Dodging past papers or marked scripts</td>
                  <td className="p-3">Fear of finding out. A low mark would feel like a verdict on them</td>
                  <td className="p-3 text-[#0f4a9b] font-medium">Start with low-stakes recall; treat marks as information, not judgement</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-800">"What's the point?" and heavy sighing</td>
                  <td className="p-3">Low sense of value. The topic feels pointless or dull</td>
                  <td className="p-3 text-[#0f4a9b] font-medium">Connect the task to something they care about; mix topics to keep it fresh</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-800">"I'm too far behind, there's no point starting now"</td>
                  <td className="p-3">Shame about the gap. Falling behind makes starting feel hopeless</td>
                  <td className="p-3 text-[#0f4a9b] font-medium">Restart small and without punishment (section 07)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-800">Phone in hand, "just five minutes" that becomes an hour</td>
                  <td className="p-3">Instant rewards beat delayed ones. The phone wins every contest on the spot</td>
                  <td className="p-3 text-[#0f4a9b] font-medium">Change the environment, not the willpower (strategy 4)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <InlineImage
            src="/images/blogs/productive-procrastination-stationery-desk.webp"
            alt="Student study desk with colour-coded highlighters, detailed timetable, and an unopened chemistry textbook"
            caption="Productive procrastination: reorganising stationery and rewriting timetables often consumes real energy while delaying the actual first step of revision."
          />

          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Most students have a mix, but one reason usually dominates. A useful question for a calm moment is not <em>"why won't you start?"</em> but <strong>"which part of starting feels worst?"</strong>
            </p>
          </div>

          {/* 03. The motivation formula */}
          <SectionHeading num="03" id="motivation-formula">
            The motivation formula (and why "just try harder" fails)
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Piers Steel and Cornelius König proposed a model of motivation known as <strong>temporal motivation theory</strong>. Stripped to its essentials, it shows where the true motivational levers lie:
            </p>
          </div>

          <MotivationFormulaGraphic />

          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              This is a model, not a measurement, but it is a useful one, because it shows where the levers are.
            </p>
            <p>
              "Just try harder" does not move any of them. It only adds pressure, which can lower confidence and raise dread. More helpful is to work on the four parts directly:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              <li><strong>Raise confidence</strong> with small, winnable first tasks.</li>
              <li><strong>Raise value</strong> by linking a task to a real goal or by making it more interesting.</li>
              <li><strong>Lower distraction</strong> by changing the setting.</li>
              <li><strong>Shorten the delay</strong> by giving the effort a visible, near-term payoff, such as a finished set of questions, a tick on the list or a proper break.</li>
            </ul>
            <p>
              The exam in May is a very long way away. A closed notebook and a phone in the hand are right here. The formula explains why the second often wins, and how to even the contest.
            </p>
          </div>

          {/* 04. Why the teenage brain makes it harder */}
          <SectionHeading num="04" id="teenage-brain">
            Why the teenage brain makes it harder
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Adolescence adds another layer. Laurence Steinberg's work on adolescent development describes how the brain's reward-seeking systems become highly active in the early teens, while the systems that support planning, impulse control and long-term thinking are still maturing, and continue to develop into the early twenties.
            </p>
            <p>
              In everyday terms: a teenager's brain is especially sensitive to what feels good right now, and the machinery for choosing the slower payoff is still being built. A student can understand perfectly well that revising now helps in May, and still find the phone far more compelling at 4:30 p.m. That gap is not a character flaw. It is a stage of development, and it is a reason to build external structure rather than rely on willpower alone.
            </p>
            <p>
              None of this makes procrastination harmless. Reviews of the research, such as the meta-analysis by Kim and Seo, find that habitual procrastination is associated with lower academic performance on average. But a single lost evening does not decide anything, and the habit is changeable, especially when families focus on the right target.
            </p>
          </div>

          {/* 05. The UAE factor */}
          <SectionHeading num="05" id="uae-factor">
            The UAE factor: why the pile feels bigger here
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              The psychology is universal, but some features of life for many UAE students make starting harder:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>A heavy subject load:</strong> IGCSE students often study eight to ten subjects. "Revise" is not one task but a dozen, and choosing where to begin can be paralysing.</li>
              <li><strong>Several systems at once:</strong> Families are often navigating Cambridge, Edexcel, IB or American requirements, each with its own papers and deadlines.</li>
              <li><strong>A packed evening:</strong> Early starts, long commutes, sport, music and tutoring can leave a short window, which makes the pressure to "use it well" even heavier. Pressure to perform in a short window can increase the urge to avoid.</li>
              <li><strong>Broken rhythm:</strong> Long breaks and travel make restarting a routine feel like a fresh hill each time.</li>
              <li><strong>More adults managing the plan:</strong> When parents, school and tutors all hold the timetable, the student can feel it as something done to them rather than something they own, and ownership matters for motivation. Our guide on <a href="/blogs/gcse-revision-tips-uae-parents" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">GCSE & IGCSE revision tips for UAE parents</a> describes a split that tends to work: parents own the environment and routines, the student owns the studying.</li>
            </ul>
          </div>

          <InlineImage
            src="/images/blogs/uae-student-curriculum-load-breakdown.webp"
            alt="Infographic illustrating why the revision workload feels heavier in the UAE across British, IB, and American school systems"
            caption="The UAE workload matrix: navigating 8 to 10 exam subjects across compressed evening windows requires a clear division of ownership between parents and students."
          />

          <NarrativeBox label="PARENT TAKEAWAY">
            <p>
              If your child freezes in front of a long list of subjects, the problem is rarely their work ethic. It is that the list has no obvious first step.
            </p>
          </NarrativeBox>

          {/* 06. Seven strategies that actually help */}
          <SectionHeading num="06" id="seven-strategies">
            Seven strategies that actually help
          </SectionHeading>
          <div className="space-y-4 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <div>
              <h3 className="font-bold text-base text-[#0a1f3d] mb-1">
                1. Make the first step almost embarrassingly small
              </h3>
              <p>
                "Revise chemistry" is a mountain. "Close the book and write down three things you remember about ionic bonding" is a two-minute task. Because the hardest part of procrastination is starting, the goal is to make starting so easy that it barely registers. Once a student is underway, the resistance usually drops. A good first step also doubles as retrieval practice, which is exactly what builds memory, as we explain in <a href="/blogs/illusion-of-competence-revision-false-confidence" className="text-[#0f4a9b] underline hover:text-[#0a3a79]">The Illusion of Competence</a>.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base text-[#0a1f3d] mb-1">
                2. Replace "I'll start soon" with an if-then plan
              </h3>
              <p>
                Peter Gollwitzer's research on implementation intentions shows that deciding in advance exactly when, where and how to act makes follow-through considerably more likely. A meta-analysis by Gollwitzer and Sheeran found a medium-to-large effect across many studies.
              </p>

              <div className="overflow-x-auto my-4 rounded-xl border border-slate-200 text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[#0a1f3d]">
                      <th className="p-3 font-bold w-1/3">Vague intention</th>
                      <th className="p-3 font-bold w-2/3">If-then plan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-gray-600">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-700">"I'll revise this evening."</td>
                      <td className="p-3 text-[#0f4a9b] font-medium">"If it is 4:30 p.m. and I've had a snack, then I'll sit at the desk and do the first ten-minute recall task."</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-700">"I'll do past papers this weekend."</td>
                      <td className="p-3 text-[#0f4a9b] font-medium">"If it is Saturday at 10:00 a.m., then I'll do one timed section at the dining table."</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-700">"I'll stop using my phone."</td>
                      <td className="p-3 text-[#0f4a9b] font-medium">"If I sit down to revise, then my phone goes in the hallway basket first."</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-base text-[#0a1f3d] mb-1">
                3. Name the feeling
              </h3>
              <p>
                Research on affect labelling, including work by Matthew Lieberman and colleagues, suggests that putting a feeling into words can reduce its intensity. Before starting, a student can say or write one sentence: <em>"I'm avoiding this because I'm worried it'll show I don't understand it."</em> Naming the fear takes some of its power, and it gives a parent something concrete to respond to.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base text-[#0a1f3d] mb-1">
                4. Change the environment, not the willpower
              </h3>
              <p>
                Willpower is a poor plan against a phone. Make the right thing the easy thing:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
                <li>The same desk, at the same time, most days</li>
                <li>Phone out of the room, not on silent beside the book (see the research in our <a href="/blogs/exam-stamina-uae-students" className="text-[#0f4a9b] underline hover:text-[#0a3a79]">Exam Stamina</a> guide)</li>
                <li>Books and materials laid out the night before, so starting needs no setup</li>
                <li>Browser tabs closed except the one needed</li>
              </ul>

              <InlineImage
                src="/images/blogs/teen-focused-study-phone-parked-outside-uae.webp"
                alt="Teenage student focused on revision at a dedicated study desk with books and study materials"
                caption="A prepared, distraction-free study environment eliminates friction, allowing sustained focus on revision."
              />
            </div>

            <div>
              <h3 className="font-bold text-base text-[#0a1f3d] mb-1">
                5. Use a short time-box with a visible end
              </h3>
              <p>
                "Revise until you've done enough" has no finish line. "Work for 25 minutes, then a proper five-minute break" does. Many students find a defined end makes starting less threatening. As concentration grows, the blocks can lengthen over a few weeks.
              </p>

              <InlineImage
                src="/images/blogs/pomodoro-timer-25-minute-revision.webp"
                alt="High school student calmly writing study notes beside a 25-minute Pomodoro countdown timer"
                caption="A visible 25-minute finish line: short, bounded study intervals make starting far less intimidating than open-ended study marathons."
              />
            </div>

            <div>
              <h3 className="font-bold text-base text-[#0a1f3d] mb-1">
                6. Plan by what gets produced, not by hours
              </h3>
              <p>
                "Study for two hours" is easy to fill with drifting. "Do eight questions and mark them against the mark scheme" is concrete, and finishing it brings a real, near-term sense of progress. This also fits the advice to measure revision by what a student can produce from a blank page, not by time spent.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base text-[#0a1f3d] mb-1">
                7. Build in self-forgiveness
              </h3>
              <p>
                This one surprises parents. In a study by Michael Wohl, Timothy Pychyl and Shannon Bennett, students who forgave themselves for procrastinating before their first exam procrastinated less before the next one. Guilt feels like motivation but tends to feed the avoid-and-feel-bad cycle. A student who can say "that afternoon was lost, and I'm starting now" is far more likely to start than one who spends the evening in self-criticism.
              </p>
            </div>
          </div>

          <AvoidanceCycleGraphic />

          {/* 07. The 10-minute restart after a lost week */}
          <SectionHeading num="07" id="ten-minute-restart">
            The 10-minute restart after a lost week
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Sometimes a week disappears, and the pile feels impossible. A short, repeatable restart works better than a dramatic new plan.
            </p>
          </div>

          <div className="my-5 rounded-xl border border-[#0f4a9b]/12 bg-[#f4f7fc] p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-3 text-[#0a1f3d] font-bold text-sm">
              <Target className="w-4 h-4 text-[#0f4a9b]" />
              <span>The 4-Step Restart Routine</span>
            </div>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li><strong>Choose one overdue thing, not the whole backlog:</strong> Pick the smallest meaningful task.</li>
              <li><strong>Set a 15-minute timer and give yourself permission to do it badly:</strong> A rough first attempt beats a perfect plan that never begins.</li>
              <li><strong>Write two lines afterwards:</strong> what I did, and what I found hard. The hard part is the useful information, not a failure.</li>
              <li><strong>Decide tomorrow's first task now:</strong> and attach an if-then trigger to it (strategy 2).</li>
            </ol>
          </div>

          <InlineImage
            src="/images/blogs/ten-minute-restart-routine-protocol.webp"
            alt="Infographic outlining the 4-step restart routine protocol for breaking revision inertia"
            caption="The 4-Step Restart Protocol: isolating one small task and giving permission for an imperfect attempt rebuilds momentum within 15 minutes."
          />

          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              That is the whole routine. It deliberately avoids resolutions about "catching up on everything", because those usually collapse by Wednesday. Small restarts rebuild confidence, the first lever in the motivation formula.
            </p>
            <p>
              If the backlog is large and the exam is close, the next move is to ask the subject teacher or an <a href="/exam-preparation" className="text-[#0f4a9b] underline hover:text-[#0a3a79]">exam preparation tutor</a> to help prioritise which topics matter most, so the student faces a short list instead of a mountain. If last-minute panic is also part of the pattern, our guide on <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] underline hover:text-[#0a3a79]">why some children only panic right before exams</a> explains what often sits underneath it.
            </p>
          </div>

          {/* 08. What parents can say */}
          <SectionHeading num="08" id="parent-phrases">
            What parents can say (and avoid saying)
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Nagging usually deepens avoidance, because it adds guilt without removing the obstacle. The aim is to lower the threat of starting while keeping expectations clear.
            </p>
          </div>

          <div className="overflow-x-auto my-5 rounded-xl border border-slate-200 text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0a1f3d]">
                  <th className="p-3 font-bold w-1/2">Instead of…</th>
                  <th className="p-3 font-bold w-1/2">Try…</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-gray-600">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 text-rose-700 bg-rose-50/30">"You're just being lazy."</td>
                  <td className="p-3 text-emerald-800 font-semibold bg-emerald-50/30">"Which part of starting feels hardest right now?"</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 text-rose-700 bg-rose-50/30">"You've had all weekend!"</td>
                  <td className="p-3 text-emerald-800 font-semibold bg-emerald-50/30">"What's one small thing you could do before dinner?"</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 text-rose-700 bg-rose-50/30">"Put your phone away and study."</td>
                  <td className="p-3 text-emerald-800 font-semibold bg-emerald-50/30">"Where should the phone live while you work so it isn't tempting?"</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 text-rose-700 bg-rose-50/30">"Everyone else is revising."</td>
                  <td className="p-3 text-emerald-800 font-semibold bg-emerald-50/30">"What would make today feel like a win?"</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 text-rose-700 bg-rose-50/30">"If you don't do this, you'll fail."</td>
                  <td className="p-3 text-emerald-800 font-semibold bg-emerald-50/30">"I'll sit nearby for the first ten minutes if that helps you begin."</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Some small things that help at home:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              <li><strong>Sit nearby for the start:</strong> Many students find it easier to begin when someone is quietly present, such as a parent reading at the same table. Staying for ten minutes is different from supervising the whole session.</li>
              <li><strong>Praise the start, not just the result:</strong> "You sat down when you didn't feel like it" reinforces exactly the skill you want.</li>
              <li><strong>Keep the plan collaborative:</strong> A timetable the student helped design is one they are far more likely to follow.</li>
              <li><strong>Look at the pattern, not the day:</strong> One lost evening is normal. Several weeks of avoidance is worth a calm conversation.</li>
            </ul>
          </div>

          <InlineImage
            src="/images/blogs/parent-sitting-nearby-while-teen-starts-revising.webp"
            alt="Parent reading quietly at the table while a teenager begins revising"
            caption="Quiet co-presence during the first ten minutes can provide the low-pressure anchor needed to start."
          />

          <NarrativeBox label="PARENT TAKEAWAY">
            <p>
              You cannot make a teenager want to start. You can make starting smaller, clearer and less frightening, and that is usually enough to change what happens next.
            </p>
          </NarrativeBox>

          {/* 09. When it is more than procrastination */}
          <SectionHeading num="09" id="more-than-procrastination">
            When it is more than procrastination
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Most procrastination is ordinary and responds well to the strategies above. Some signs suggest that a student needs more than study skills:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Difficulty focusing, organising or starting tasks across all areas of life, not only revision, lasting for months</li>
              <li>Persistent low mood, loss of interest in things they used to enjoy, or withdrawal from friends</li>
              <li>Anxiety so strong that sitting down to work brings tears, panic or physical symptoms (in subjects like mathematics, this often presents as <a href="/blogs/maths-anxiety-teenagers-signs-causes-help" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">maths anxiety</a>)</li>
              <li>Significant changes in sleep or appetite</li>
              <li>A strong belief that they are "stupid" or "hopeless" that does not shift</li>
            </ul>
            <p className="text-xs text-gray-400 italic">
              If several of these persist, speak to the school's counsellor or pastoral team, and consider your family doctor or paediatrician. They can look at the full picture, including whether an assessment would help. This article is educational guidance and does not replace professional advice.
            </p>
          </div>

          {/* 10. Frequently asked questions */}
          <SectionHeading num="10" id="faqs">
            Frequently asked questions
          </SectionHeading>
          <div className="my-5">
            <FAQAccordion />
          </div>

          {/* 11. Sources and further reading */}
          <SectionHeading num="11" id="sources">
            Sources and further reading
          </SectionHeading>
          <div className="space-y-2 text-xs text-gray-500 leading-relaxed">
            <p>• Steel, P. (2007). The nature of procrastination: A meta-analytic and theoretical review of quintessential self-regulatory failure. <em>Psychological Bulletin</em>.</p>
            <p>• Steel, P., &amp; König, C. J. (2006). Integrating theories of motivation. <em>Academy of Management Review</em>.</p>
            <p>• Sirois, F., &amp; Pychyl, T. (2013). Procrastination and the priority of short-term mood regulation: Consequences for future self. <em>Social and Personality Psychology Compass</em>.</p>
            <p>• Wohl, M. J. A., Pychyl, T. A., &amp; Bennett, S. H. (2010). I forgive myself, now I can study: How self-forgiveness for procrastinating can reduce future procrastination. <em>Personality and Individual Differences</em>.</p>
            <p>• Gollwitzer, P. M., &amp; Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. <em>Advances in Experimental Social Psychology</em>.</p>
            <p>• Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., Tom, S. M., Pfeifer, J. H., &amp; Way, B. M. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. <em>Psychological Science</em>.</p>
            <p>• Steinberg, L. (2005). Cognitive and affective development in adolescence. <em>Trends in Cognitive Sciences</em>.</p>
            <p>• Kim, K. R., &amp; Seo, E. H. (2015). The relationship between procrastination and academic performance: A meta-analysis. <em>Personality and Individual Differences</em>.</p>
          </div>

          {/* Related Guides */}
          <div className="my-8 p-5 rounded-2xl border border-slate-200 bg-white">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-3">Related Guides on Psychology of Learning</h3>
            <div className="space-y-2 text-xs">
              <a href="/blogs/maths-anxiety-teenagers-signs-causes-help" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">Maths Anxiety in Teenagers: Signs, Causes and Practical Help</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/sleep-and-memory-why-all-nighters-backfire" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">Sleep and Memory: Why All-Nighters Backfire for UAE Students</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/exam-stamina-uae-students" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">Exam Stamina: Why Your Child Can't Sit the Full Paper</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/illusion-of-competence-revision-false-confidence" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">The Illusion of Competence: Why Re-Reading Notes Gives False Confidence</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/exam-panic-before-exams-uae" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">My Child Only Panics Right Before Exams</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
            </div>
          </div>

          {/* About author & reviewer */}
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
                Every guide is checked for accuracy, educational validity and parent clarity by curriculum specialists before publication.
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
              DIAGNOSTIC SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              Is it avoidance, or a gap your child doesn't want to face?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              An Ustaad tutor can work through a short, board-specific task with your child, notice where starting feels hardest, and help you build a small, realistic plan that gets revision moving again. Sessions are online and 1-to-1, for families in every emirate.
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
                href="https://wa.me/971561249005?text=Hello%20Ustaad%20team,%20I%20have%20a%20question%20about%20revision%20planning%20and%20tutoring."
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
