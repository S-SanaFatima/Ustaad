import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, 
  ChevronRight as ChevronRightIcon, MessageCircle, ShieldCheck, CheckCircle2,
  AlertTriangle, ArrowRight, Sparkles, GraduationCap, Scale, FileText, Check, Activity
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'UAE Mock Exams: Why They Count More Than Before | Ustaad',
  titleLine1: 'UAE Mock Exams:',
  titleLine2: 'Why They Count More Than Before',
  categoryBadge: 'USTAAD UAE · PARENT GUIDANCE',
  slug: 'mock-exams-uae-not-what-they-were',
  description:
    "UAE mock exams now shape predicted grades and school records, not just practice. Here's what changed and how parents should read the results.",
  heroImage: '/images/blogs/mock-exam-uae-hero.jpg',
  heroAlt: 'UAE high school students in an international school examination hall sitting a timed mock exam paper under formal conditions',
  heroCaption: 'Mock season looks the same as it always did. What UAE schools now do with the result does not.',
  datePublished: '2026-09-14',
  dateModified: '2026-09-14',
  author: 'Ustaad UAE Editorial Team',
  authorRole: 'Academic Insights Desk',
  authorBio: 'The Ustaad UAE Editorial Team synthesises input from experienced British and IB curriculum specialists, parent counselling cases, and UAE school assessment policies to produce practical guides for families.',
  reviewer: 'Nida Iqbal',
  reviewerRole: 'MPhil in Education Leadership and Management',
  reviewerBio: 'Nida checks each guide for educational accuracy, structure, and parent clarity before it is published. See how our editorial review works.',
  readTime: '8 min read',
  tags: [
    'IGCSE Mock Exams UAE',
    'Mock Exam Results',
    'A-Level Mocks UAE',
    'Predicted Grades UAE',
    'Mock Exam Preparation',
    'Cambridge IGCSE',
    'Pearson Edexcel',
    'IB DP',
  ],
};

const FAQS = [
  {
    q: 'Do all UAE schools use mock exams to set predicted grades?',
    a: "No. Policy varies by school and curriculum. However, across British (Cambridge/Edexcel) and IB schools in Dubai and Abu Dhabi, mock exams frequently serve as primary evidentiary data points when teachers determine UCAS and university predictions.",
  },
  {
    q: 'Can a predicted grade be changed after a weak mock?',
    a: "Sometimes, if supported by subsequent objective evidence (such as an official retake, strong modular assessments, or verified mitigating circumstances). Because this is at the school's internal discretion, parents should clarify the review process early.",
  },
  {
    q: 'Are IGCSE mocks as high-stakes as A-Level mocks?',
    a: 'Generally no. IGCSE mocks remain primarily diagnostic; they identify syllabus weaknesses before final summer papers. A-Level mocks carry higher administrative stakes because they directly anchor university conditional offers.',
  },
  {
    q: 'How many mocks does a student usually sit before final exams?',
    a: 'Most UAE schools schedule one comprehensive mock series in January/February of Year 11 and Year 13. High-demand private schools often add an earlier Year 12 summer mock or a March checkpoint series.',
  },
  {
    q: "What should parents ask their child's school before mock season?",
    a: "Ask specifically: Does this mock feed into official predicted grades or tier placement? What is the procedure if a student has documented illness? And how will late-stage revision improvements be weighed?",
  },
  {
    q: 'How should parents respond within 48 hours of receiving a mock report?',
    a: 'Avoid panic and resist treating the grade as final. Request the paper alongside the official mark scheme, isolate content gaps from exam craft/time deficits, and set a 6-week targeted recovery schedule.',
  },
];

const TOC_ITEMS = [
  { label: 'Why "it\'s only a mock" stopped being true', id: 'why-its-only-a-mock-stopped-being-true' },
  { label: 'What actually changed, and when', id: 'what-actually-changed-and-when' },
  { label: 'How UAE schools use mock results today', id: 'how-uae-schools-use-mock-results-today' },
  { label: 'IGCSE mocks vs A-Level mocks: Stakes compared', id: 'igcse-mocks-and-a-level-mocks-stakes' },
  { label: "Predicted grades: The part parents don't see", id: 'predicted-grades-what-parents-dont-see' },
  { label: 'The perception gap: Parents vs schools', id: 'the-perception-gap' },
  { label: 'What a mock exam is actually testing', id: 'what-a-mock-exam-is-actually-testing' },
  { label: 'How to prepare for a mock that counts', id: 'how-to-prepare-for-a-mock-that-counts' },
  { label: 'What to do in the 48 hours after results land', id: 'the-48-hours-after-results-land' },
  { label: 'Frequently asked questions', id: 'frequently-asked-questions' },
  { label: 'Sources and further reading', id: 'sources-and-further-reading' },
];

const RELATED = [
  {
    slug: 'igcse-preparation-past-papers-final-step',
    category: 'Academic & Exam Skills',
    title: 'IGCSE Preparation: Why Past Papers Are the Final Step, Not the First',
    description: 'How to sequence concept mastery, topic drills, and timed endurance so practice papers build real exam technique.',
  },
  {
    slug: 'exam-stamina-uae-students',
    category: 'Psychology of Learning',
    title: "Exam Stamina: Why Your Child Can't Sit the Full Paper",
    description: 'Why unbroken focus breaks down halfway through a paper and how to build cognitive endurance before exam season.',
  },
  {
    slug: 'uae-exams-return-students-never-sat-one',
    category: 'Psychology of Learning',
    title: 'Exams Are Back. What Changes for Students Who Have Never Sat One',
    description: 'Why the return to external exam halls demands new exam craft after years of portfolio grading.',
  },
  {
    slug: 'a-level-tutoring-uae-independent-thinking',
    category: 'Academic & Exam Skills',
    title: 'A-Level Tutoring in the UAE Starts With Independent Thinking',
    description: 'How independent analysis and mark-scheme precision elevate performance beyond GCSE-style memorisation.',
  },
];

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-10 mb-4 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/50 tracking-widest uppercase mb-1">{num}</span>
      <h2 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h2>
    </div>
  );
}

function ParentTakeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border-l-4 border-[#0f4a9b] bg-[#f0f4fa] p-4 sm:p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-1.5">
        <ShieldCheck className="h-4 w-4 text-[#0f4a9b]" />
        <span className="text-[11px] font-black uppercase tracking-widest text-[#0f4a9b]">Parent Takeaway</span>
      </div>
      <p className="text-sm sm:text-[14.5px] font-medium text-[#0a1f3d] leading-relaxed italic mb-0">{children}</p>
    </div>
  );
}

function NarrativeBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/15 bg-gradient-to-br from-white to-[#f8fafd] p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="h-4 w-4 text-[#C7A24A]" />
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#0a1f3d]">{title}</span>
      </div>
      <div className="text-sm text-gray-600 leading-relaxed space-y-2 italic">{children}</div>
    </div>
  );
}

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mx-auto my-7 max-w-2xl">
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/9] bg-slate-100">
        <img src={src} alt={alt} width={1376} height={774} loading="lazy" className="w-full h-full object-cover block" />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-gray-500 italic leading-relaxed px-2">{caption}</figcaption>
      )}
    </figure>
  );
}

function TOC({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/10 bg-[#f8fafd] overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-3.5" aria-expanded={open}>
        <div className="flex items-center gap-2">
          <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0f4a9b]">In This Guide ({TOC_ITEMS.length} Sections)</span>
        </div>
        <span className="text-[#0f4a9b]">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <div className={open ? 'block' : 'hidden'}>
        <div className="px-5 pb-3.5 grid sm:grid-cols-2 gap-x-4 gap-y-1">
          {TOC_ITEMS.map((item, i) => (
            <a
              key={i}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center gap-2.5 group py-1 text-left"
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

function SocialShare({ url, title, center }: { url: string; title: string; center?: boolean }) {
  const enc = encodeURIComponent(url);
  const encT = encodeURIComponent(title);
  return (
    <div className={`flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
      <a
        href={`https://wa.me/?text=${encT}%20${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#25d366]/10 hover:bg-[#25d366]/20 transition"
        aria-label="Share on WhatsApp"
      >
        <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="w-4 h-4" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1877f2]/10 hover:bg-[#1877f2]/20 transition text-[#1877f2] font-extrabold text-xs"
        aria-label="Share on Facebook"
      >
        f
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${enc}&title=${encT}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 transition text-[#0a66c2] font-extrabold text-xs"
        aria-label="Share on LinkedIn"
      >
        in
      </a>
      <a
        href={`mailto:?subject=${encT}&body=${enc}`}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500"
        aria-label="Share via Email"
      >
        <Mail className="h-3.5 w-3.5" />
      </a>
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
          <div key={i} className="flex flex-col gap-1.5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
                  cursor: 'pointer',
                }}
                aria-label={`Toggle question: ${faq.q}`}
              >
                <span className="font-extrabold text-sm">?</span>
              </button>
              <button
                onClick={() => setActive(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex-1 flex items-center gap-2.5 text-left rounded-2xl border p-3.5 transition-colors bg-white hover:bg-slate-50/80 border-slate-200"
              >
                <span className="flex-1 font-bold text-xs sm:text-sm text-[#0a1f3d] leading-snug" itemProp="name">
                  {faq.q}
                </span>
                {isOpen ? <ChevronUp className="h-4 w-4 text-[#0f4a9b] shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />}
              </button>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="ml-0 sm:ml-[46px] mt-1"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="flex items-start gap-2.5 rounded-2xl border p-4 bg-[#f8fafc] border-[#0f4a9b]/15 shadow-sm">
                    <p className="flex-1 text-gray-600 text-xs sm:text-[13px] leading-relaxed text-left mb-0" itemProp="text">
                      {faq.a}
                    </p>
                    <span className="flex-shrink-0 flex items-center justify-center rounded-full bg-[#0f4a9b] text-white w-7 h-7">
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

export default function MockExamsUAEBlog() {
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
        preloadHeroImage={BLOG.heroImage}
        author={BLOG.author}
        placename="United Arab Emirates"
        ogType="article"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Parent Guidance', url: '/blogs/parent-guidance' },
            { name: 'Mock Exams UAE', url: canonical },
          ]),
          articleSchema({
            title: BLOG.title,
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: {
              name: BLOG.author,
              url: '/editorial',
              jobTitle: 'Academic Insights Desk',
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
            },
            reviewer: {
              name: BLOG.reviewer,
              url: '/authors/nida-iqbal',
              jobTitle: BLOG.reviewerRole,
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
            },
            image: BLOG.heroImage,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* Visible Breadcrumb for Blog Articles */}
      <nav aria-label="Breadcrumb" className="bg-[#f8fafd] border-b border-slate-100">
        <ol className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400 list-none m-0">
          <li>
            <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1">
              <Home className="h-3 w-3" /> Home
            </a>
          </li>
          <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
          <li>
            <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          </li>
          <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
          <li>
            <a href="/blogs/parent-guidance" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">Parent Guidance</a>
          </li>
          <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
          <li className="text-[#0f4a9b] font-semibold truncate max-w-[150px]" aria-current="page">
            Mock Exams UAE
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 rounded-full mb-3 border border-[#0f4a9b]/15">
              <GraduationCap className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wider uppercase">{BLOG.categoryBadge}</span>
            </div>

            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic font-serif" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            <p className="text-gray-600 text-sm lg:text-[15px] leading-relaxed mb-4 text-left">
              {BLOG.description}
            </p>

            {/* Author & Reviewer Metadata Card */}
            <div className="mb-4 mt-2 space-y-3">
              <div className="rounded-xl border border-slate-100 bg-[#f8fafd] p-3 sm:p-3.5 space-y-2.5">
                <div className="flex items-start gap-2.5 min-w-0">
                  <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                  <div className="min-w-0 leading-snug">
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">Written by</p>
                    <a href="/editorial" className="text-[#0f4a9b] font-semibold text-xs sm:text-[13px] underline underline-offset-2 break-words">
                      {BLOG.author}
                    </a>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{BLOG.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100 min-w-0">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0 mt-0.5" />
                  <div className="min-w-0 leading-snug">
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">Fact-checked &amp; reviewed by</p>
                    <a href="/authors/nida-iqbal" className="text-[#0f4a9b] font-semibold text-xs sm:text-[13px] underline underline-offset-2 break-words">
                      {BLOG.reviewer}
                    </a>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{BLOG.reviewerRole}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-400">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1.5 min-w-0">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  <span className="leading-snug">Published Sep 2026</span>
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

          {/* Hero Figure */}
          <motion.figure initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-0">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-[16/9] bg-slate-100">
              <img src={BLOG.heroImage} alt={BLOG.heroAlt} width={1376} height={774} fetchPriority="high" className="w-full h-full object-cover block" />
            </div>
            {BLOG.heroCaption && (
              <figcaption className="mt-2.5 text-center text-xs text-gray-500 italic leading-relaxed px-2">
                {BLOG.heroCaption}
              </figcaption>
            )}
          </motion.figure>
        </div>
      </section>

      {/* Main Article Body */}
      <article className="pb-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Table of Contents Accordion */}
          <TOC open={tocOpen} setOpen={setTocOpen} />

          {/* Opening Narrative */}
          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 mb-6 text-left">
            <p className="text-base sm:text-[16.5px] font-medium text-[#0a1f3d] leading-relaxed">
              Ask a parent what a mock exam is for, and most will say practice. Ask a school what it does with the result, and increasingly across the UAE, the answer is something closer to <em>evidence</em>.
            </p>
            <p>
              Both are describing the exact same paper. Neither is wrong. But the gap between those two answers is where families lose ground every single year, usually discovering it only when a university-facing predicted grade or set placement is finalised.
            </p>
          </div>

          {/* ── SECTION 01 ── */}
          <SectionHeading num="01" id="why-its-only-a-mock-stopped-being-true">
            Why &quot;it&apos;s only a mock&quot; stopped being true
          </SectionHeading>
          
          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              For decades, the school mock exam had a single pedagogical purpose: low-stakes rehearsal. It allowed a teenager to sit a full paper under formal conditions, experience the pressure of the clock, discover their weak topics, and repair them before the summer exams that determined their future.
            </p>
            <p>
              That framing remains true in spirit. But administratively, many UAE international schools now operate under a different regulatory and admissions landscape, and the mock is where that shift shows up most clearly.
            </p>
          </div>

          {/* Infographic: Before vs Today Comparison */}
          <div className="my-7 bg-white text-[#0a1f3d] rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm">
            <div className="text-center mb-5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0f4a9b] bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
                Structural Shift
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] mt-2">
                How Mock Exams Shifted in UAE Schools
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {/* Column 1: Before */}
              <div className="bg-[#f8fafd] border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <h4 className="font-bold text-[#0a1f3d] text-xs sm:text-sm">Mock Exams, Traditional Rehearsal</h4>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span><strong>Private Diagnostic:</strong> Raw score stayed strictly between teacher and student.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span><strong>Zero Administrative Trail:</strong> Never appeared on formal university transcripts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span><strong>No Forward Consequence:</strong> An off-day carried zero systemic penalty.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-200 text-[11px] text-gray-500 font-medium">
                  Result: Informational practice only
                </div>
              </div>

              {/* Column 2: Today */}
              <div className="bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white rounded-xl p-4 flex flex-col justify-between shadow-md border border-[#0f4a9b]">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C7A24A]" />
                    <h4 className="font-bold text-[#f5d77f] text-xs sm:text-sm">Mock Exams, Contemporary Reality</h4>
                  </div>
                  <ul className="space-y-2 text-xs text-blue-50">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C7A24A] font-bold">•</span>
                      <span><strong>Permanent Record:</strong> Recorded in school information systems and progress reports.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C7A24A] font-bold">•</span>
                      <span><strong>Predicted Grade Anchor:</strong> Primary data point for UCAS and global university offers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C7A24A] font-bold">•</span>
                      <span><strong>Tier Placement:</strong> Informs entry decisions for tiered subjects. Foundation/Higher on Edexcel IGCSE, Core/Extended on Cambridge IGCSE.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-2.5 border-t border-white/15 text-[11px] text-[#f5d77f] font-bold">
                  Result: Documented academic evidence
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 02 ── */}
          <SectionHeading num="02" id="what-actually-changed-and-when">
            What actually changed, and when
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              The structural change occurred during the exam-cancellation years. When international boards (such as Cambridge Assessment International Education and Pearson Edexcel) were forced to replace public examinations with Teacher Assessed Grades (TAGs), a shift we cover in <a href="/blogs/uae-exams-return-students-never-sat-one" className="text-[#0f4a9b] font-semibold hover:underline">Exams Are Back. What Changes for Students Who Have Never Sat One</a>, schools had to assemble defensible, auditable portfolios of evidence.
            </p>
            <p>
              The central pillar of every portfolio was the mock exam. It was standardised, sat under timed conditions, and marked against official schemes. That historical period permanently trained school leadership and department heads to view mock performance as <em>actionable institutional evidence</em>.
            </p>
            <p>
              Many British-curriculum schools now use mocks as evidence to validate teacher predictions against overshoot, particularly at A-Level where predictions feed UCAS submissions.
            </p>
          </div>

          {/* ── SECTION 03 ── */}
          <SectionHeading num="03" id="how-uae-schools-use-mock-results-today">
            How UAE schools use mock results today
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              While policies vary between international school groups in Dubai, Abu Dhabi, and Sharjah, three core institutional use cases dominate:
            </p>

            <div className="grid sm:grid-cols-3 gap-3.5 my-5 items-stretch">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-start h-full text-left">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-[#C7A24A] flex items-center justify-center font-bold text-xs mb-2.5">
                  01
                </div>
                <h4 className="font-extrabold text-xs sm:text-sm text-[#0a1f3d] mb-1.5 text-left">Predicted Grades</h4>
                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed mb-0 text-left flex-1">
                  University predicted grades submitted through UCAS are directly anchored to student mock performance.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-start h-full text-left">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#0f4a9b] flex items-center justify-center font-bold text-xs mb-2.5">
                  02
                </div>
                <h4 className="font-extrabold text-xs sm:text-sm text-[#0a1f3d] mb-1.5 text-left">Exam Tiering</h4>
                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed mb-0 text-left flex-1">
                  In tiered IGCSE subjects (Foundation/Higher on Edexcel, Core/Extended on Cambridge), mock exam scores inform which tier a student is entered for.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-start h-full text-left">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mb-2.5">
                  03
                </div>
                <h4 className="font-extrabold text-xs sm:text-sm text-[#0a1f3d] mb-1.5 text-left">Formal Records</h4>
                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed mb-0 text-left flex-1">
                  Official school transcripts record mock marks to guide headteacher references and scholarship entries.
                </p>
              </div>
            </div>
          </div>

          {/* ── SECTION 04 ── */}
          <SectionHeading num="04" id="igcse-mocks-and-a-level-mocks-stakes">
            IGCSE mocks and A-Level mocks are not the same stakes
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              This is the crucial nuance most home discussions miss.
            </p>
            <p>
              <strong>IGCSE mocks</strong> (in Year 10 and Year 11) remain predominantly diagnostic. If a student drops marks in January, there is a clear 4-month runway to diagnose the root cause, drill past papers, and secure an A* on the actual summer paper. The external world will only ever see the final certificate issued by the exam board.
            </p>
            <p>
              <strong>A-Level mocks</strong> (in Year 12 and Year 13) carry external consequences. UK universities issue conditional offers via UCAS that rest heavily on predicted grades. European, US and UAE admissions weigh predicted grades differently. US applications also lean on essays, standardised tests and extracurriculars, and many UAE and US universities look at final grades rather than predictions. Even so, a conservative prediction still narrows the shortlist a student can realistically apply to.
            </p>
          </div>

          <InlineImage
            src="/images/blogs/mock-exam-study-prep.jpg"
            alt="UAE high school student completing structured past paper revision in a modern school library"
            caption="Independent practice with official board past papers bridges the gap between classroom theory and timed exam execution."
          />

          {/* Stakes Comparison Matrix Table */}
          <div className="my-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-[#f8fafd] px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0a1f3d] uppercase tracking-wider flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-[#0f4a9b]" /> Comparative Stakes: IGCSE vs A-Level Mocks
              </span>
              <span className="text-[10px] text-gray-500 font-medium">UAE British Curriculum</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 text-[#0a1f3d] font-bold border-b border-slate-100">
                    <th className="py-2.5 px-3.5 w-1/4">Dimension</th>
                    <th className="py-2.5 px-3.5 w-3/8 text-[#0f4a9b]">IGCSE Mock Exams</th>
                    <th className="py-2.5 px-3.5 w-3/8 text-[#C7A24A]">A-Level Mock Exams</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-gray-600">
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#0a1f3d]">Primary Purpose</td>
                    <td className="py-2.5 px-3.5 text-gray-700">Diagnostic gap-finding & timing test</td>
                    <td className="py-2.5 px-3.5 text-[#0a1f3d] font-semibold">Predicted grade evidence + diagnostic</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#0a1f3d]">External Stakes</td>
                    <td className="py-2.5 px-3.5 text-emerald-700 font-medium">Low (internal to school &amp; home)</td>
                    <td className="py-2.5 px-3.5 text-rose-700 font-bold">High (shapes university offers)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#0a1f3d]">University Impact</td>
                    <td className="py-2.5 px-3.5 text-gray-700">None (final certificate matters)</td>
                    <td className="py-2.5 px-3.5 text-[#0a1f3d] font-semibold">Directly caps UCAS choices</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#0a1f3d]">Timing of Sitting</td>
                    <td className="py-2.5 px-3.5 text-gray-700">January / February of Year 11</td>
                    <td className="py-2.5 px-3.5 text-gray-700">End of Year 12 &amp; Jan of Year 13</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#0a1f3d]">Correction Window</td>
                    <td className="py-2.5 px-3.5 text-emerald-700">3–4 months before final papers</td>
                    <td className="py-2.5 px-3.5 text-rose-700">Must appeal via formal school review</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ── SECTION 05 ── */}
          <SectionHeading num="05" id="predicted-grades-what-parents-dont-see">
            Predicted grades: the part most parents don&apos;t see
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              A predicted grade is not a casual forecast. In British curriculum schools, teachers are required by senior management to defend every predicted grade with documented evidence. When an exam officer or head of department audits predictions, the mock exam mark sheet is the first document examined.
            </p>
            <p>
              If a student sits an A-Level mock underprepared, fatigued, or on an off-day, teachers find it administratively difficult to predict two grades above what the mock score reflects, even if they believe the student is capable of higher marks.
            </p>
            <p>
              This is a real bind for teachers. They want their students to succeed, but schools also face audit from examination boards and university admissions offices when predicted grades consistently overshoot final results. The mock mark is the piece of evidence that protects both the teacher and the school if the prediction is later challenged.
            </p>
          </div>

          {/* ── SECTION 06 ── */}
          <SectionHeading num="06" id="the-perception-gap">
            The perception gap: why parents and schools read mocks differently
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              Here is where communication breaks down between home and school:
            </p>
            <p>
              Parents often ask their child, <em>&quot;How did the mock go?&quot;</em> as a private pulse check, thinking there is still plenty of time before the real exams. Meanwhile, the school records the percentage into their tracking database to finalise UCAS references and tiering lists.
            </p>
            <p>
              Understanding this mismatch is not about inducing panic; it is about proactive advocacy. A parent who understands the institutional role of mocks can engage with teachers effectively: asking for second assessments, discussing appeal protocols, or arranging targeted intervention well ahead of reporting deadlines.
            </p>
          </div>

          {/* ── SECTION 07 ── */}
          <SectionHeading num="07" id="what-a-mock-exam-is-actually-testing">
            What a mock exam is actually testing
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              Beyond the administrative dimension, sitting a formal mock tests three distinct cognitive competencies that homework and chapter tests cannot assess:
            </p>
            <ul className="my-3 space-y-2 pl-1">
              <li className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0f4a9b] shrink-0 mt-2" />
                <span><strong>Multi-Topic Retrieval Under Time Pressure:</strong> Accessing facts, formulas, and case studies across the entire two-year syllabus without chapter prompts.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0f4a9b] shrink-0 mt-2" />
                <span><strong>Working Memory &amp; Cognitive Stamina:</strong> Sustaining high-precision writing, unit tracking, and logical reasoning past the 60-minute fatigue mark. Read our detailed guide on <a href="/blogs/exam-stamina-uae-students" className="text-[#0f4a9b] font-semibold hover:underline">building exam stamina</a>.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0f4a9b] shrink-0 mt-2" />
                <span><strong>Command Word &amp; Mark Scheme Alignment:</strong> Accurately interpreting subtle command terms (&quot;Evaluate&quot;, &quot;Deduce&quot;, &quot;Explain&quot;) exactly as examiners grade them.</span>
              </li>
            </ul>
            <p>
              As outlined in our guide on <a href="/blogs/igcse-preparation-past-papers-final-step" className="text-[#0f4a9b] font-semibold hover:underline">IGCSE past paper preparation</a>, timed past papers represent the roof of revision. If a student attempts full mocks before their concept foundation is secure, the paper simply reveals that the underlying structure is incomplete.
            </p>
          </div>

          {/* ── SECTION 08 ── */}
          <SectionHeading num="08" id="how-to-prepare-for-a-mock-that-counts">
            How to prepare for a mock that counts
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              Preparing effectively for high-stakes mocks requires a structured, four-part protocol:
            </p>

            <div className="space-y-3 my-5">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Clarify the stakes before sitting the exam</h4>
                  <p className="text-xs text-gray-600 mt-0.5 mb-0">
                    Ask the head of year directly: Will this mock series establish UCAS predictions or set placements? If so, what is the school&apos;s policy on mitigating circumstances or subsequent progress evidence?
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Execute closed-book timed rehearsals</h4>
                  <p className="text-xs text-gray-600 mt-0.5 mb-0">
                    Never revise solely by reading textbooks or memorising summaries. Complete past exam sections against a strict countdown timer with notes and phones removed from the room.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Master mark-scheme command words</h4>
                  <p className="text-xs text-gray-600 mt-0.5 mb-0">
                    Examiners award marks for specific keyword triggers and logical progressions. Review official mark schemes side-by-side with student responses to spot where marks slip unnecessarily.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Flag genuine disruptions early</h4>
                  <p className="text-xs text-gray-600 mt-0.5 mb-0">
                    If severe illness, bereavement, or acute distress affects exam day performance, communicate this to the school in writing immediately, not months later when grades are already logged.
                  </p>
                </div>
              </div>
            </div>

            <InlineImage
              src="/images/blogs/exam-mark-scheme-stamina-analysis.jpg"
              alt="Detailed examination script analysis against official board mark scheme rubrics"
              caption="Scrutinising marked scripts against official mark schemes isolates technique errors from conceptual misunderstandings."
            />
          </div>

          {/* ── SECTION 09 ── */}
          <SectionHeading num="09" id="the-48-hours-after-results-land">
            What to do in the 48 hours after results land
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              When the mock report card arrives, emotional reactions can derail constructive progress. The 48-hour post-mock window is critical for setting up the recovery cycle.
            </p>

            <InlineImage
              src="/images/blogs/parent-student-mock-review.jpg"
              alt="UAE parent and student reviewing a mock exam report together, Ustaad UAE"
              caption="The conversation that matters most happens after the mock results land, not during the exam itself."
            />

            <div className="bg-[#f0f4fa] border-l-4 border-[#0f4a9b] rounded-2xl p-4 sm:p-5 my-6">
              <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0f4a9b]" /> The 3-Step Post-Mock Recovery Protocol
              </h4>
              <ol className="space-y-2.5 text-xs sm:text-[13px] text-gray-700 list-decimal list-inside pl-1">
                <li>
                  <strong>Obtain the Marked Script:</strong> Never settle for just the overall percentage. Request the full paper and official mark scheme to analyse where marks were dropped.
                </li>
                <li>
                  <strong>Categorise the Errors:</strong> Separate <em>Knowledge Gaps</em> (concepts never learned) from <em>Exam Craft Gaps</em> (misreading questions, running out of time, or careless unit errors).
                </li>
                <li>
                  <strong>Establish a 6-Week Action Plan:</strong> If university predictions or tier entries are at risk, meet with the subject teacher with a structured plan for remedial testing.
                </li>
              </ol>
            </div>

            <p>
              Families seeking experienced curriculum mentors can connect with our <a href="/igcse-tutor-dubai" className="text-[#0f4a9b] font-semibold hover:underline">IGCSE tutors in Dubai</a> and <a href="/a-level-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">A-Level tutors in Abu Dhabi</a>. You can also read our guide on <a href="/blogs/10-questions-hiring-private-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">questions to ask before hiring a private tutor in Abu Dhabi</a>.
            </p>
          </div>

          <ParentTakeaway>
            Do not let a disappointing mock grade define your child&apos;s academic ceiling. Treat the mock report as an audit roadmap: clarify what the school uses it for, pinpoint the exact skill breakdown, and rebuild technique systematically before the real papers begin.
          </ParentTakeaway>

          {/* ── SECTION 10: FREQUENTLY ASKED QUESTIONS ── */}
          <SectionHeading num="10" id="frequently-asked-questions">
            Frequently asked questions
          </SectionHeading>
          <FAQAccordion />

          {/* Social Share Bar Under FAQ */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-3">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Share this practical guide with other UAE parents</p>
            <SocialShare url={shareUrl} title={BLOG.title} center />
          </div>

          {/* ── SECTION 11: SOURCES & FURTHER READING ── */}
          <SectionHeading num="11" id="sources-and-further-reading">
            Sources and further reading
          </SectionHeading>

          <div className="text-xs text-gray-600 leading-relaxed space-y-2 mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <ul className="space-y-1.5 list-disc list-inside">
              <li>
                <a href="/blogs/uae-exams-return-students-never-sat-one" className="text-[#0f4a9b] hover:underline font-medium">
                  Exams Are Back. What Changes for Students Who Have Never Sat One
                </a>: On the shift from portfolio grading to formal hall conditions.
              </li>
              <li>
                <a href="/blogs/gcse-revision-tips-uae-parents" className="text-[#0f4a9b] hover:underline font-medium">
                  GCSE and IGCSE Revision Tips for UAE Parents
                </a>: Practical home strategies for British curriculum exam prep.
              </li>
              <li>
                <a href="/blogs/read-uae-school-report-card" className="text-[#0f4a9b] hover:underline font-medium">
                  How to Read a UAE School Report Card
                </a>: Decoding teacher comments and grade metrics across UAE schools.
              </li>
              <li>
                <a href="https://www.ucas.com/undergraduate/applying-university/predicted-grades" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] hover:underline font-semibold">
                  UCAS Guidance on Predicted Grades
                </a>: Official principles for school predicted grades and university conditional offers.
              </li>
              <li>
                <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] hover:underline font-semibold">
                  Cambridge International Assessment Education
                </a>: Assessment frameworks and mock examination standards for Cambridge IGCSE centres.
              </li>
              <li>
                <a href="https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses.html" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] hover:underline font-semibold">
                  Pearson Edexcel International GCSE
                </a>: Assessment frameworks and mock examination standards for Edexcel centres.
              </li>
            </ul>
            <p className="pt-2 text-[11px] text-gray-500 italic border-t border-slate-200 mb-0">
              Editorial note: School-level assessment frameworks and mock weightings vary across UAE institutions. This guide reflects general patterns observed across British and IB curriculum schools. Always verify your specific school&apos;s prediction and reporting policies with the administration.
            </p>
          </div>

          {/* Related Articles 2x2 Grid */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <h3 className="text-sm font-extrabold text-[#0a1f3d] mb-4 uppercase tracking-wider">
              Related Guides on Academic &amp; Exam Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {RELATED.map((item, i) => (
                <a key={i} href={`/blogs/${item.slug}`} className="group p-4 bg-slate-50 hover:bg-[#0f4a9b]/[0.03] border border-slate-200 rounded-2xl transition">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f4a9b]">{item.category}</span>
                  <p className="text-sm font-extrabold text-[#0a1f3d] mt-1 mb-1 group-hover:text-[#0f4a9b] transition">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-0">{item.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Author & Reviewer Info Cards */}
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[#0f4a9b]/10 bg-gradient-to-br from-white to-[#f4f7fd] p-4 sm:p-5">
              <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#0f4a9b] border border-[#0f4a9b]/15 bg-[#0f4a9b]/5 mb-3">
                About the Author
              </span>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1">
                <a href="/editorial" className="text-[#0f4a9b] hover:underline">{BLOG.author}</a>
              </p>
              <p className="text-[11px] text-[#0f4a9b] font-semibold mb-2 leading-snug">{BLOG.authorRole}</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-0">
                {BLOG.authorBio}
              </p>
            </div>
            <div className="rounded-2xl border border-[#C7A24A]/15 bg-gradient-to-br from-white to-[#fdf9f0] p-4 sm:p-5">
              <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6 mb-3">
                Reviewed By
              </span>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1">
                <a href="/authors/nida-iqbal" className="text-[#0f4a9b] hover:underline">{BLOG.reviewer}</a>
              </p>
              <p className="text-[11px] text-[#0f4a9b] font-semibold mb-2 leading-snug">{BLOG.reviewerRole}</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-0">
                Nida checks each guide for accuracy, educational validity, and parent clarity before it is published. See{' '}
                <a href="/editorial" className="text-[#0f4a9b] font-semibold hover:underline">how our editorial review works</a>.
              </p>
            </div>
          </div>

          {/* Tags Cloud */}
          <div className="mt-5 flex flex-wrap gap-2">
            {BLOG.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-[#0a1f3d]">{tag}</span>
            ))}
          </div>

          {/* Diagnostic Callout CTA Box at End */}
          <div
            className="mt-10 mb-6 rounded-2xl p-6 sm:p-8 border border-[#0f4a9b]/20 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] text-xs font-bold mb-3">
              <Activity className="w-3.5 h-3.5" /> Ustaad Mock Diagnostic Session
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug mb-3 max-w-xl mx-auto">
              Understand what your child&apos;s mock score really means
            </h3>
            <p className="text-sm text-white/80 leading-relaxed mb-6 max-w-lg mx-auto">
              Book a one-to-one diagnostic assessment with an Ustaad curriculum specialist. We analyse marked scripts against board mark schemes to build a targeted 6-week grade recovery plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="/contact#form"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-sm w-full sm:w-auto shadow-md"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
              >
                Book a Free Trial
              </a>
              <a
                href="https://wa.me/971561249005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] border border-transparent rounded-full font-bold text-white transition text-sm shadow-md w-full sm:w-auto"
              >
                <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </article>
    </Layout>
  );
}
