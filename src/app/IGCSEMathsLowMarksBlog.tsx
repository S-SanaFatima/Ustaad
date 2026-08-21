import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle } from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'Why IGCSE Maths Students Suffer Low Marks | Ustaad',
  titleLine1: 'Hours of Revision, Still Low Marks:',
  titleLine2: 'The Real Reason Why IGCSE Maths Students Suffer',
  slug: 'igcse-maths-revision-low-marks',
  description: 'Why do IGCSE students forget maths in exams despite studying hard? A closer look at what is really happening, and what actually helps.',
  heroImage: '/images/blogs/igcse-maths-student-revision-uae.webp',
  heroAlt: 'IGCSE maths student in the UAE revising past papers at a home study desk',
  heroCaption: 'Hours of revision do not always translate to higher IGCSE maths marks.',
  datePublished: '2026-06-16',
  dateModified: '2026-08-05',
  author: 'IGCSE Maths Specialist | Ustaad UAE',
  reviewer: 'Nida Iqbal | MPhil in Education Leadership and Management',
  readTime: '8 min read',
  tags: ['IGCSE Maths', 'UAE', 'Revision', 'Study Tips', 'Cambridge 0580', 'Edexcel 4MA1'],
};

const FAQS = [
  {
    q: 'Why does my child forget maths in exams even after studying for hours?',
    a: 'Usually because the revision built familiarity with question patterns rather than deep understanding of the concept itself. When the exam changes the presentation slightly, students struggle to adapt the method independently.',
  },
  {
    q: 'Is my child weak in maths?',
    a: 'Not necessarily. Many capable students struggle because their preparation relied heavily on memorising procedures instead of understanding mathematical reasoning. The issue is often methodological, not intellectual.',
  },
  {
    q: 'Why does my child panic during unfamiliar questions?',
    a: 'Unfamiliar questions force students to think independently instead of recalling rehearsed patterns. If conceptual understanding is weak, stress rises very quickly during timed exams.',
  },
  {
    q: 'What is the most important topic to strengthen first?',
    a: 'Algebra. Weak algebra affects performance across multiple IGCSE maths topics, even those that initially appear unrelated.',
  },
  {
    q: 'How long does it take to rebuild confidence in maths?',
    a: 'Confidence often improves within a few weeks once students begin understanding concepts more clearly and solving unfamiliar questions independently. Visible grade improvement usually follows gradually after that.',
  },
];

const TOC_ITEMS = [
  { label: 'What Actually Happens Inside the Exam Hall', id: 'what-actually-happens-inside-the-exam-hall' },
  { label: 'A Simple Equation That Explains the Entire Problem', id: 'a-simple-equation-that-explains-the-entire-problem' },
  { label: 'Where Revision Starts Breaking Down', id: 'where-revision-starts-breaking-down' },
  { label: 'The Emotional Shift Parents Often Notice Too Late', id: 'the-emotional-shift-parents-often-notice-too-late' },
  { label: 'What Real Understanding Actually Looks Like', id: 'what-real-understanding-actually-looks-like' },
  { label: 'How IGCSE Maths Revision Should Actually Work', id: 'how-igcse-maths-revision-should-actually-work' },
  { label: 'What Kind of Support Actually Helps Students Improve', id: 'what-kind-of-support-actually-helps-students-improve' },
  { label: 'Final Thoughts for Parents', id: 'final-thoughts-for-parents' },
  { label: 'Frequently Asked Questions', id: 'frequently-asked-questions' },
];

const RELATED = [
  {
    category: 'IGCSE Maths',
    title: 'My Child Only Panics Right Before Exams: What Is Actually Happening?',
    description: 'A closer look at why exam anxiety peaks in the final days before an IGCSE paper — and what parents can do before it becomes a bigger problem.',
  },
  {
    category: 'Study Strategy',
    title: 'Why Past Papers Alone Are Not Enough for IGCSE Maths Revision',
    description: 'Past papers are useful — but only when used correctly. Here is what most students miss when they rely on them as their primary revision tool.',
  },
];

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-');
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return `${parseInt(d)} ${months[parseInt(m) - 1]} ${y}`;
}

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

// ── Fraction display ──────────────────────────────────────────────
function Frac({ n, d }: { n: string; d: string }) {
  return (
    <span className="inline-flex flex-col items-center text-center leading-none align-middle mx-0.5">
      <span className="border-b border-current px-0.5 pb-[2px] text-[0.85em]">{n}</span>
      <span className="pt-[2px] text-[0.85em]">{d}</span>
    </span>
  );
}

// ── Equation box ──────────────────────────────────────────────────
function EquationBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 flex flex-col items-center">
      <div
        className="inline-flex items-center justify-center bg-[#f4f7fc] border border-[#0f4a9b]/10 rounded-lg shadow-[0_2px_8px_rgba(15,74,155,0.05)]"
        style={{ padding: '10px 24px', minWidth: 160 }}
      >
        <span className="text-[15px] font-bold text-[#0a1f3d] font-mono leading-relaxed text-center">{children}</span>
      </div>
    </div>
  );
}

// ── Section heading ───────────────────────────────────────────────
function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-8 mb-3 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/40 mb-1">{num}</span>
      <h2 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h2>
    </div>
  );
}

// ── Step card (no visible number) ─────────────────────────────────
function StepCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 bg-[#f8fafd] rounded-xl border border-slate-100 mb-2">
      <p className="font-bold text-[#0a1f3d] text-sm mb-1.5">{title}</p>
      <div className="text-sm text-gray-600 leading-relaxed text-justify">{children}</div>
    </div>
  );
}

// ── Bullet list ───────────────────────────────────────────────────
function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="my-2 space-y-1.5 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
          <span className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-[#0f4a9b]/50" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ── Blockquote ────────────────────────────────────────────────────
function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-[#C7A24A] pl-4 pr-4 py-3 italic text-base text-[#0a1f3d] my-4 bg-[#C7A24A]/[0.05] rounded-r-xl">
      {children}
    </blockquote>
  );
}

// ── Image with white border stroke (like homepage hero) ───────────
function InlineImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="mx-auto my-6 max-w-xl">
      <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
      </div>
    </figure>
  );
}

// ── Table of contents ─────────────────────────────────────────────
function TOC({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/10 bg-[#f8fafd] overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-3.5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0f4a9b]">In This Article</span>
        </div>
        <span className="lg:hidden text-[#0f4a9b]">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <div className={`lg:block ${open ? 'block' : 'hidden'}`}>
        <div className="px-5 pb-3.5 space-y-0.5">
          {TOC_ITEMS.map((item, i) => (
            <a key={i} href={`#${item.id}`}
              onClick={e => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
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

// ── Social share ──────────────────────────────────────────────────
function SocialShare({ url, title, center }: { url: string; title: string; center?: boolean }) {
  const enc = encodeURIComponent(url);
  const encT = encodeURIComponent(title);
  return (
    <div className={`flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
      <a href={`https://wa.me/?text=${encT}%20${enc}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#25d366]/10 hover:bg-[#25d366]/20 transition" aria-label="Share on WhatsApp">
        <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="w-4 h-4" />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1877f2]/10 hover:bg-[#1877f2]/20 transition text-[#1877f2] font-extrabold text-xs" aria-label="Share on Facebook">f</a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${enc}&title=${encT}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 transition text-[#0a66c2] font-extrabold text-xs" aria-label="Share on LinkedIn">in</a>
      <a href={`mailto:?subject=${encT}&body=${enc}`}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500" aria-label="Share via Email">
        <Mail className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

// ── FAQ accordion ─────────────────────────────────────────────────
function FAQAccordion() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-2">
      {FAQS.map((faq, i) => {
        const isOpen = active === i;
        return (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <button onClick={() => setActive(isOpen ? null : i)}
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{ width: 36, height: 36, minWidth: 36, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms, color 300ms', border: 'none', cursor: 'pointer' }}>
                <span className="font-extrabold text-sm">?</span>
              </button>
              <button onClick={() => setActive(isOpen ? null : i)} aria-expanded={isOpen}
                className="flex-1 flex items-center gap-2.5 text-left rounded-full border"
                style={{ minHeight: 44, padding: '7px 14px', cursor: 'pointer', background: 'transparent', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)' }}>
                <span className="flex-1 font-semibold text-[#0a1f3d] text-[13px] leading-snug">{faq.q}</span>
                <span className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: 28, height: 28, minWidth: 28, borderRadius: '50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms, color 300ms, transform 300ms', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <ChevronDown className="h-3 w-3" />
                </span>
              </button>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }} className="ml-[48px]">
                  <div className="flex items-start gap-2.5 rounded-2xl border p-3.5"
                    style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.12)', boxShadow: '0 3px 12px rgba(15,74,155,0.05)' }}>
                    <p className="flex-1 text-gray-600 text-[13px] leading-relaxed text-justify">{faq.a}</p>
                    <span className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{ width: 28, height: 28, minWidth: 28, background: '#0f4a9b', color: '#fff' }}>
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

// ── Main component ────────────────────────────────────────────────
export default function IGCSEMathsLowMarksBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <Layout>
      <SEOHead
        title="Why IGCSE Maths Students Lose Marks After Revision | Ustaad"
        description={BLOG.description}
        canonical={canonical}
        ogImage={BLOG.heroImage}
        author={BLOG.author}
        placename="United Arab Emirates"
        ogType="article"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: BLOG.title, url: canonical },
          ]),
          articleSchema({
            title: BLOG.title,
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: {
              name: 'IGCSE Maths Specialist',
              url: '/editorial',
              jobTitle: 'IGCSE Maths Specialist | Ustaad UAE',
            },
            reviewer: {
              name: 'Nida Iqbal',
              url: '/authors/nida-iqbal',
              jobTitle: 'MPhil in Education Leadership and Management',
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
            },
            image: BLOG.heroImage,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1"><Home className="h-3 w-3" /> Home</a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs/academic-exam-skills" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">Subject & Exam Skills</a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">IGCSE Maths Revision</span>
        </div>
      </div>

      {/* Hero header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Category tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">USTAAD UAE · IGCSE MATHS INSIGHTS</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-justify">{BLOG.description}</p>

            {/* Meta */}
            <div className="mb-4 mt-2 space-y-2">
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Written by:</span>{' '}
                  {BLOG.author} <span className="text-gray-400">(name withheld on request) · <a href="/editorial" className="text-[#0f4a9b] underline">Ustaad editorial standards</a></span>
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Reviewed by:</span>{' '}
                  <a href="/authors/nida-iqbal" className="text-[#0f4a9b] font-semibold underline">{BLOG.reviewer}</a>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 pt-1">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  Last reviewed: August 2026 · Ustaad UAE Editorial Team
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A]" />{BLOG.readTime}
                </span>
                <SocialShare url={shareUrl} title={BLOG.title} />
              </div>
            </div>
          </motion.div>

          {/* Hero image — no cropping, white border stroke */}
          <motion.figure initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-0">
            <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_40px_rgba(15,74,155,0.12)]">
              <img src={BLOG.heroImage} alt={BLOG.heroAlt} fetchPriority="high" className="w-full h-auto block" />
            </div>
          </motion.figure>

          {/* TOC */}
          <TOC open={tocOpen} setOpen={setTocOpen} />
        </div>
      </section>

      {/* Article body */}
      <article className="pb-4 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-sm lg:text-[15px] leading-[1.8] [&_p]:text-justify [&_p]:mb-3">

            {/* Opening */}
            <p>There is a pattern many parents across the UAE begin noticing around exam season. Their child spends weeks revising, completes worksheets regularly, attends classes consistently, and walks into the IGCSE maths exam looking fully prepared. But after the paper, the response is often uncertain:</p>
            <Blockquote>"I don't know how it went."</Blockquote>
            <p>Then the results arrive, and the marks are far lower than expected.</p>
            <p>For many families, the confusing part is that the effort was genuinely there. The student studied consistently, revised carefully, and appeared disciplined at home. Yet somehow, the final performance still failed to reflect the preparation.</p>
            <p>This is one of the most common concerns parents raise during Year 10 and Year 11, especially in competitive British curriculum schools across Dubai and Abu Dhabi where academic pressure quietly increases as board exams approach.</p>
            <p>In many cases, the issue is not laziness, distraction, or lack of revision time.</p>
            <p>The real difficulty begins when students are expected to apply what they know independently under timed exam conditions.</p>
            <p>And by the time parents notice the problem clearly, the gap has often been developing for much longer beneath the surface.</p>

            {/* 01 */}
            <SectionHeading num="01" id="what-actually-happens-inside-the-exam-hall">What Actually Happens Inside the Exam Hall</SectionHeading>
            <p>The early signs are usually subtle.</p>
            <p>A student may revise confidently the night before the exam, solve familiar textbook questions comfortably, and even explain a topic correctly at home.</p>
            <p>Then the paper presents the same concept in a slightly different form.</p>
            <p>Suddenly, the method that felt obvious during revision no longer feels obvious anymore.</p>
            <p>This is where many IGCSE maths students begin losing marks.</p>
            <p>Not because they never studied the topic, but because their understanding was built around familiar question patterns instead of the mathematical idea underneath them.</p>
            <p>Cambridge IGCSE 0580 and Edexcel IGCSE 4MA1 papers are designed specifically to test application, flexibility, and reasoning. Examiners regularly change wording, restructure question layouts, and combine concepts together inside one problem.</p>
            <p>Students who rely mainly on repetition often struggle when the presentation changes.</p>
            <p>Students who understand the logic behind the method usually adapt more calmly.</p>
            <p>Over time, repeated moments like this do more than affect grades. They slowly change how students feel before exams and often become part of a much larger emotional pattern that many UAE families notice during assessment season, especially when stress is only addressed at the last minute. That experience is explored further in <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-semibold hover:underline">maths exam anxiety</a>, what UAE parents often notice too late.</p>

            {/* 02 */}
            <SectionHeading num="02" id="a-simple-equation-that-explains-the-entire-problem">A Simple Equation That Explains the Entire Problem</SectionHeading>
            <p>Here is a real classroom observation that explains the issue very clearly.</p>
            <p>A student is shown the equation:</p>
            <EquationBlock label="Slope–Intercept Form">y = mx + b</EquationBlock>
            <p>They answer confidently.</p>
            <BulletList items={[<><strong>m</strong> is the gradient</>, <><strong>b</strong> is the y-intercept</>]} />
            <p>When the equation appears as:</p>
            <EquationBlock>y = 2x + 3</EquationBlock>
            <p>the student immediately identifies:</p>
            <BulletList items={['gradient = 2', 'intercept = 3']} />
            <p>That part feels easy.</p>
            <p>Then the same concept appears differently:</p>
            <EquationBlock label="Same Line — Rewritten">2x + y = 3</EquationBlock>
            <p>And suddenly confusion begins.</p>
            <p>Many students glance at this and immediately assume the gradient is 2 because their mind connects the term "2x" to familiar practice questions.</p>
            <p>But the equation first needs rearranging:</p>
            <EquationBlock label="Gradient Is −2, Not 2">y = −2x + 3</EquationBlock>
            <p>Now the gradient becomes −2.</p>
            <p>The mathematics never changed. Only the presentation changed.</p>
            <p>And that small shift is often enough to expose weak conceptual understanding.</p>
            <p>What many students are actually missing is not algebra itself, but the ability to recognise what the equation represents beyond its layout on the page.</p>
            <p>Once students begin connecting ideas across different chapters instead of memorising isolated patterns, unfamiliar questions stop feeling completely new.</p>
            <p>That is exactly what many IGCSE maths exams are testing.</p>

            <InlineImage
              src="/images/blogs/igcse-maths-equation-rearrangement-diagram.webp"
              alt="Diagram showing how rearranging 2x plus y equals 3 changes the gradient in an IGCSE maths problem"
            />

            {/* 03 */}
            <SectionHeading num="03" id="where-revision-starts-breaking-down">Where Revision Starts Breaking Down</SectionHeading>
            <p>One of the biggest misunderstandings parents hear is:</p>
            <Blockquote>"Just practise more questions."</Blockquote>
            <p>Practice matters.</p>
            <p>But in maths, repetition without understanding can quietly create another problem.</p>
            <p>A student may solve twenty similar questions correctly during revision and still freeze during the exam when the structure changes slightly.</p>
            <p>Why?</p>
            <p>Because the brain memorised a pattern, not the reasoning behind it.</p>
            <p>This becomes especially common in students balancing school, tuition, homework, and revision schedules across busy academic environments in the UAE. Many become extremely familiar with predictable question styles but struggle when independent thinking is suddenly required under pressure.</p>
            <p>That is why two students can spend the same number of hours studying and still achieve very different outcomes.</p>
            <p>One student understands:</p>
            <BulletList items={['why the method works', 'when it applies', 'how to adapt it']} />
            <p>The other mainly remembers steps attached to a familiar layout.</p>
            <p>The difference becomes visible only when the exam changes the structure.</p>

            {/* 04 */}
            <SectionHeading num="04" id="the-emotional-shift-parents-often-notice-too-late">The Emotional Shift Parents Often Notice Too Late</SectionHeading>
            <p>This is usually the stage where maths stops feeling like "just another subject."</p>
            <p>At first, students assume they simply made careless mistakes.</p>
            <p>Then the same thing happens again in another test.</p>
            <p>Slowly, a more damaging thought begins forming:</p>
            <Blockquote>"Maybe I'm just not good at maths."</Blockquote>
            <p>That belief changes behaviour very quickly.</p>
            <p>Students begin:</p>
            <BulletList items={[
              'hesitating during questions',
              'avoiding difficult topics',
              'relying heavily on memorised methods',
              'panicking faster in exams',
              'losing confidence before even attempting unfamiliar problems',
            ]} />
            <p>The issue is no longer purely academic. It becomes emotional.</p>
            <p>For many families in the UAE, this emotional shift develops gradually through repeated moments where effort does not seem to match results.</p>
            <p>The encouraging part is that confidence usually returns once understanding becomes clearer.</p>
            <p>Not through pressure. Not through longer study hours. But through repeated experiences where the student finally understands why something works.</p>

            <InlineImage
              src="/images/blogs/igcse-student-low-maths-marks-confidence.webp"
              alt="Teenage IGCSE student looking discouraged after a low maths exam result"
            />

            {/* 05 */}
            <SectionHeading num="05" id="what-real-understanding-actually-looks-like">What Real Understanding Actually Looks Like</SectionHeading>
            <p>Fractions provide a very simple example.</p>
            <p>Take this:</p>
            <EquationBlock><Frac n="1" d="4" /> + <Frac n="1" d="6" /></EquationBlock>
            <p>Some students memorise separate rules for:</p>
            <BulletList items={['addition', 'subtraction', 'multiplication', 'division']} />
            <p>That approach may work for routine exercises.</p>
            <p>But once questions become mixed, layered, or unfamiliar, confusion starts appearing because the student is remembering procedures without understanding the relationship underneath them.</p>
            <p>Now compare that with a student who genuinely understands fractions.</p>
            <p>They understand that fractions represent parts of a whole.</p>
            <p>So when solving:</p>
            <EquationBlock><Frac n="1" d="4" /> + <Frac n="1" d="6" /> = <Frac n="3" d="12" /> + <Frac n="2" d="12" /></EquationBlock>
            <p>they understand why equal parts are needed before addition becomes possible.</p>
            <p>Similarly:</p>
            <EquationBlock><Frac n="2" d="3" /> × <Frac n="3" d="5" /> = <Frac n="6" d="15" /></EquationBlock>
            <p>feels logical because multiplication scales one quantity by another.</p>
            <p>And division becomes easier to interpret when students understand why:</p>
            <EquationBlock><Frac n="2" d="3" /> ÷ <Frac n="3" d="5" /> = <Frac n="2" d="3" /> × <Frac n="5" d="3" /></EquationBlock>
            <p>instead of treating it like a rule that simply needs memorising.</p>
            <p>Once understanding becomes deeper, students stop depending entirely on fixed patterns. They become more flexible when questions appear in unfamiliar forms.</p>
            <p>That flexibility is what IGCSE maths papers reward most.</p>

            {/* 06 */}
            <SectionHeading num="06" id="how-igcse-maths-revision-should-actually-work">How IGCSE Maths Revision Should Actually Work</SectionHeading>
            <p>As an IGCSE maths teacher, this is something I often explain very honestly to parents:</p>
            <p>The issue is usually not how many hours a student studies. It is how those hours are being used.</p>
            <p>Here are a few approaches that genuinely improve performance over time.</p>

            <StepCard title="Focus on understanding before speed">
              Students should first understand why a method works before trying to solve questions quickly. Fast revision without clarity often creates panic later.
            </StepCard>

            <StepCard title="Practise the same concept in different forms">
              Doing twenty identical questions creates familiarity. Doing the same concept through different question styles builds flexibility. That flexibility matters far more in IGCSE exams.
            </StepCard>

            <StepCard title="Use past papers diagnostically">
              <p className="mb-1.5">Past papers should not become memorisation exercises. The important questions are:</p>
              <BulletList items={[
                'Where did the student hesitate?',
                'Which step caused confusion?',
                'At what point did reasoning break down?',
              ]} />
              <p className="mt-1.5 mb-0">That is where meaningful improvement begins.</p>
            </StepCard>

            <StepCard title="Show full working clearly">
              In IGCSE maths, method marks matter heavily. Even when the final answer is incorrect, students can still gain marks through correct reasoning and structured steps.
            </StepCard>

            <StepCard title="Strengthen algebra continuously">
              Many struggles in trigonometry, graphs, geometry, probability, and functions eventually trace back to weak algebraic fluency. The same pattern shows up across physics, where algebraic confidence often decides whether a student can move flexibly through problems under timed conditions. This overlap is one reason Abu Dhabi families exploring <a href="/physics-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline">physics tutoring in Abu Dhabi</a> often see improvement once their child's algebra strengthens too. When algebra improves, performance often rises across multiple topics simultaneously.
            </StepCard>

            <InlineImage
              src="/images/blogs/diagnostic-igcse-maths-tutoring-uae.webp"
              alt="Tutor reviewing an IGCSE maths student's working step by step during a one to one session"
            />

            {/* 07 */}
            <SectionHeading num="07" id="what-kind-of-support-actually-helps-students-improve">What Kind of Support Actually Helps Students Improve</SectionHeading>
            <p>One thing many parents eventually realise is that more tuition does not automatically solve the problem.</p>
            <p>Sometimes students already spend hours attending classes, revising notes, and completing worksheets.</p>
            <p>What they actually need is more personalised academic observation.</p>
            <p>The most effective support usually begins by identifying:</p>
            <BulletList items={[
              'the exact step where confusion begins',
              'the point where reasoning stops',
              'where the student starts guessing instead of thinking clearly',
            ]} />
            <p>That is very different from simply re-teaching an entire chapter again.</p>
            <p>This is also why many families eventually move away from repetitive tuition models and begin looking for more personalised academic guidance that focuses on how the student thinks, not just what they memorise.</p>
            <p>Platforms like Ustaad are becoming increasingly relevant for UAE families because the approach focuses more on diagnostic learning, behavioural understanding, and concept clarity instead of simply increasing worksheet volume.</p>
            <p>For Abu Dhabi families looking for this kind of focused, concept-led support, Ustaad's{' '}
              <a href="/maths-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">maths tutoring in Abu Dhabi</a>{' '}
              is built around exactly these principles.</p>
            <p>And in many cases, that shift changes far more than marks alone. It changes how students experience the subject emotionally.</p>

            {/* 08 */}
            <SectionHeading num="08" id="final-thoughts-for-parents">Final Thoughts for Parents</SectionHeading>
            <p>If your child has been studying consistently but the marks still do not reflect the effort, the worst conclusion to draw is that they are incapable.</p>
            <p>Most of the time, the problem is not intelligence.</p>
            <p>It is a preparation style that does not fully match what modern IGCSE maths exams are actually testing.</p>
            <p>This is one of the most fixable academic problems students face.</p>
            <p>But solving it usually requires a different kind of revision:</p>
            <BulletList items={[
              'less dependence on memorised patterns',
              'more focus on reasoning',
              'stronger conceptual connections',
              'more independent thinking',
              'calmer learning environments',
            ]} />
            <p>Once that shift begins, improvement often follows surprisingly quickly. Then confidence slowly returns after it. And the subject that once felt overwhelming starts becoming manageable again, with the right kind of support.</p>
            <p>Which, in the long run, is the kind of progress that actually lasts.</p>
            <p>If a student continues to struggle despite consistent effort, personalised academic support may help identify the underlying issue and build a more effective path forward.</p>
          </div>

          {/* FAQ */}
          <div id="frequently-asked-questions" className="mt-8 pt-7 border-t border-slate-100 scroll-mt-24">
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0f4a9b]/6 text-[#0f4a9b] text-xs font-bold rounded-full mb-2.5 border border-[#0f4a9b]/10">
                <BookOpen className="h-3 w-3" />
                <span className="text-[10px] uppercase tracking-wider">Common Questions</span>
              </div>
              <h2 className="text-lg lg:text-xl font-extrabold text-[#0a1f3d]">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion />
          </div>

          {/* Share bottom */}
          <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col items-center gap-3">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Found this helpful? Share it</p>
            <SocialShare url={shareUrl} title={BLOG.title} center />
          </div>

          {/* Author & Reviewer */}
          <div className="mt-7 grid md:grid-cols-2 gap-3">
            <div className="relative rounded-2xl border border-[#0f4a9b]/10 bg-gradient-to-br from-white to-[#f4f7fd] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#0f4a9b] border border-[#0f4a9b]/15 bg-[#0f4a9b]/5">About the Author</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-28 mt-4">IGCSE Maths Specialist | Ustaad UAE (name withheld on request)</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">This article was written by a senior IGCSE Mathematics specialist at Ustaad UAE with classroom experience across Cambridge IGCSE (0580) and Edexcel IGCSE (4MA1). The author works closely with Year 10 and Year 11 students in Dubai and Abu Dhabi, with a focus on diagnostic teaching, conceptual fluency, and exam technique. The author's name has been withheld on request.</p>
            </div>
            <div className="relative rounded-2xl border border-[#C7A24A]/15 bg-gradient-to-br from-white to-[#fdf9f0] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6">Reviewed By</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-24 mt-4">Nida Iqbal | MPhil in Education Leadership and Management</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nida Iqbal holds an MPhil in Education Leadership and Management. She reviewed this article for educational accuracy and parent relevance, ensuring the guidance reflects sound IGCSE classroom practice for UAE families.</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {BLOG.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-[#0a1f3d]">{tag}</span>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 mb-12 rounded-2xl p-6 lg:p-8 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <p className="text-white/75 mb-5 max-w-lg mx-auto text-sm">
              Ustaad supports IGCSE maths students across the UAE through diagnostic, concept-led learning aligned to Cambridge IGCSE Mathematics (0580) and Edexcel IGCSE Mathematics (4MA1).
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="/contact#form"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-sm"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book Your Free Trial →
              </a>
              <a href="https://wa.me/971561249005" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white/10 border border-white/20 rounded-full font-bold text-white hover:bg-white/20 transition text-sm">
                <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
