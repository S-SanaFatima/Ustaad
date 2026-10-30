import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar, Clock, BookOpen, ChevronDown, ChevronUp,
  Mail, Home, ChevronRight as ChevronRightIcon,
  User, CheckCircle2, MessageCircle, Sparkles
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';
import { WhatsAppIcon } from './shared/WhatsAppIcon';

const BLOG = {
  title: 'The Scaffolding Trap: Why Students Freeze on Exam Questions | Ustaad',
  titleLine1: 'The Scaffolding Trap:',
  titleLine2: 'Why Students Freeze on Exam Questions',
  heading: 'The Scaffolding Trap: Why Students Freeze on Exam Questions',
  subtitle:
    'Following a lesson and starting an exam question alone are different skills. Here is why the gap appears, and how UAE parents can help close it.',
  categoryBadge: 'USTAAD UAE | PSYCHOLOGY OF LEARNING',
  categoryUrl: '/blogs/psychology-of-learning',
  slug: 'why-students-freeze-exam-questions-scaffolding-trap',
  canonical: '/blogs/why-students-freeze-exam-questions-scaffolding-trap',
  description:
    'Your child follows every lesson but freezes on exam questions? Learn how the scaffolding trap works and how UAE parents can build exam independence.',
  heroImage: '/images/blogs/why-students-freeze-exam-questions-scaffolding-trap.webp',
  heroAlt: 'Year 11 student in Dubai pausing over a chemistry exam question at her desk',
  heroCaption:
    'Following an explanation feels like mastery, but generating the very first step on a blank exam page requires a completely different cognitive muscle.',
  datePublished: '2026-10-23',
  dateModified: '2026-10-23',
  publishedText: '23 October 2026',
  readTime: '9 min read',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Every guide is checked for accuracy, educational validity and parent clarity',
  reviewerUrl: '/editorial',
  tags: [
    'Scaffolding Trap',
    'Exam Technique',
    'Independent Problem Solving',
    'Cognitive Load Theory',
    'IGCSE Exams',
    'A-Level Preparation',
    'IB Diploma',
    'Parent Guidance',
    'Study Skills'
  ],
};

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

const FAQS = [
  {
    q: 'Why does my child understand maths and science in class but fail tests?',
    a: 'In class, the teacher provides the starting schema, cues, and sequence, meaning the student only needs to evaluate individual steps. In an exam, all cues are removed, and the student must diagnose which topic is being tested and initiate the entry step entirely alone. Understanding is passive recognition; exam performance is unassisted production.'
  },
  {
    q: 'What is the "scaffolding trap"?',
    a: 'The scaffolding trap occurs when educational support (such as worked examples, textbook chapter headings, teacher prompts, or colour-coded notes) remains in place for too long. The student feels competent because the answer makes sense, but they have never practised navigating the problem without support.'
  },
  {
    q: 'How can I tell if my teenager has fallen into the scaffolding trap?',
    a: 'Watch how they revise. If they look at the mark scheme or textbook solution after 30 seconds of being stuck, re-read worked examples rather than doing fresh blank questions, or only do problems grouped neatly under topic headings, they are relying on scaffolding rather than retrieval.'
  },
  {
    q: 'What is the "Cover and Re-solve" rule?',
    a: 'When a student checks an answer or studies a worked example, they must not simply say "Oh, I see what I did." They must cover the entire solution with a blank sheet of paper and write out the full derivation or answer from memory until the final step is verified.'
  },
  {
    q: 'Why are Cambridge IGCSE and IB exam questions harder than textbook exercises?',
    a: 'Textbook questions often test near transfer: applying a formula right after reading its chapter. Many exam questions test far transfer: using a topic in an unfamiliar context, with no chapter heading to point the way. Without practice in starting problems unprompted, students freeze.'
  },
  {
    q: 'How does private tutoring help overcome the scaffolding trap?',
    a: 'A high-calibre tutor does not spoon-feed answers or explain every hurdle. Instead, they practise "fading support": they guide the first question, prompt only the diagnostic framework on the second, and sit back in complete silence on the third, teaching the student to tolerate initial uncertainty and find the entry point themselves.'
  }
];

const TOC_ITEMS = [
  { id: 'the-classroom-paradox', label: 'The classroom paradox: following vs initiating' },
  { id: 'anatomy-of-scaffolding-trap', label: 'The anatomy of the scaffolding trap' },
  { id: 'near-transfer-vs-far-transfer', label: 'Near transfer vs far transfer in UAE exams' },
  { id: 'why-the-brain-freezes', label: 'Why the brain freezes on unstructured questions' },
  { id: 'four-step-fading-protocol', label: 'The 4-step "fading support" protocol' },
  { id: 'how-parents-can-help-at-home', label: 'Five question prompts UAE parents can use at home' },
  { id: 'how-ustaad-tutoring-breaks-cycle', label: 'How 1-to-1 mentorship restores exam independence' },
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

export default function WhyStudentsFreezeExamQuestionsBlog() {
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
            { name: 'Why Students Freeze on Exam Questions', url: canonical },
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
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">Why Students Freeze on Exam Questions</span>
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
              A Year 11 student in Dubai sits down at her revision desk, completes eight chemistry problems from the end-of-chapter review, and gets seven of them correct. Her notes are beautifully arranged in highlighters, and she feels ready.
            </p>
            <p>
              Two weeks later, during mock examinations, she opens Paper 4. On question three, she stares at the page for six minutes in total silence. Her mind feels completely blank. She writes down a stray formula, crosses it out, and moves on with a racing heart.
            </p>
          </div>

          <p>
            When the graded papers are returned, her parents ask the inevitable question: <em>&ldquo;You did questions like this on Tuesday evening. Why couldn&rsquo;t you do this one?&rdquo;</em>
          </p>

          <p>
            The student assumes she panicked or is &ldquo;just bad at exams.&rdquo; Often the cause is more specific: <strong>the scaffolding trap</strong>.
          </p>

          <NarrativeBox label="KEY PRINCIPLE">
            <p>
              Following a worked solution is a <strong>recognition task</strong>. But walking into an unprompted exam question and determining what to do first is an <strong>unassisted production and retrieval task</strong>. When students mistake the comfort of following an explanation for the ability to initiate it from scratch, they fall into the scaffolding trap.
            </p>
          </NarrativeBox>

          {/* 01. The classroom paradox: following vs initiating */}
          <SectionHeading num="01" id="the-classroom-paradox">
            The classroom paradox: following vs initiating
          </SectionHeading>

          <p>
            To understand why students freeze, we must look at what actually happens during classroom instruction. When a teacher or tutor presents a multi-step problem, whether in <a href="/maths" className="text-[#0f4a9b] font-semibold underline">IGCSE Mathematics</a>, <a href="/physics" className="text-[#0f4a9b] font-semibold underline">IB Physics</a>, or <a href="/chemistry" className="text-[#0f4a9b] font-semibold underline">A-Level Chemistry</a>, they provide three invisible cognitive supports that the student does not notice:
          </p>

          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0 mt-1" />
              <span>
                <strong>Topic Framing:</strong> The problem is delivered under a specific banner (e.g. <em>&ldquo;Chapter 4: Conservation of Momentum&rdquo;</em>). The student never has to ask themselves what formula applies.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0 mt-1" />
              <span>
                <strong>Entry Point Cueing:</strong> The teacher states the opening assumption: <em>&ldquo;First, let us resolve horizontal vectors...&rdquo;</em> The student is relieved of the single hardest cognitive task: finding the entry step.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0 mt-1" />
              <span>
                <strong>Working Memory Offloading:</strong> The interim calculations are displayed visually. The student only evaluates whether step 3 follows step 2.
              </span>
            </li>
          </ul>

          <p>
            Because every step makes sense, the student feels they understand the topic. Our guide to <a href="/blogs/illusion-of-competence-revision-false-confidence" className="text-[#0f4a9b] font-semibold underline">the illusion of competence</a> explains why that feeling is so convincing. In reality, they understand the story of the topic when an expert tells it.
          </p>

          {/* 02. The anatomy of the scaffolding trap */}
          <SectionHeading num="02" id="anatomy-of-scaffolding-trap">
            The anatomy of the scaffolding trap
          </SectionHeading>

          <p>
            The term scaffolding comes from Wood, Bruner and Ross (1976), building on Vygotsky’s idea that learners can do more with support than alone. It refers to temporary support structures that let a learner complete tasks they could not yet manage independently.
          </p>

          <p>
            A scaffolding <em>trap</em> develops when the supports are never systematically removed before the examination. Instead of building self-reliant cognitive paths, the student becomes dependent on subtle environmental crutches:
          </p>

          <div className="my-6 rounded-2xl border border-slate-200 overflow-hidden shadow-xs bg-white text-xs sm:text-[13px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0a1f3d] text-white font-bold">
                  <th className="p-3 sm:p-3.5">Study Habit</th>
                  <th className="p-3 sm:p-3.5">The Invisible Scaffolding</th>
                  <th className="p-3 sm:p-3.5">What Happens in the Exam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-gray-700">
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 sm:p-3.5 font-semibold text-[#0a1f3d]">Re-reading worked examples</td>
                  <td className="p-3 sm:p-3.5">The complete pathway is visible before problem-solving begins.</td>
                  <td className="p-3 sm:p-3.5 text-rose-700 font-medium">Freezes because the page is blank and offers no forward cues.</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 sm:p-3.5 font-semibold text-[#0a1f3d]">Immediate mark scheme checking</td>
                  <td className="p-3 sm:p-3.5">Checking after 30 seconds of resistance avoids mental struggle.</td>
                  <td className="p-3 sm:p-3.5 text-rose-700 font-medium">Lacks stamina when stuck; gives up after one attempt.</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 sm:p-3.5 font-semibold text-[#0a1f3d]">Topic-by-topic textbook drills</td>
                  <td className="p-3 sm:p-3.5">Every question belongs to the chapter heading above it.</td>
                  <td className="p-3 sm:p-3.5 text-rose-700 font-medium">Cannot identify which topic an unlabelled question belongs to.</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 sm:p-3.5 font-semibold text-[#0a1f3d]">Spoon-feeding revision sessions</td>
                  <td className="p-3 sm:p-3.5">A peer, parent or tutor steps in whenever hesitation occurs.</td>
                  <td className="p-3 sm:p-3.5 text-rose-700 font-medium">Experiences panic without an adult validating early calculations.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 03. Near transfer vs far transfer in UAE exams */}
          <SectionHeading num="03" id="near-transfer-vs-far-transfer">
            Near transfer vs far transfer in UAE exams
          </SectionHeading>

          <p>
            Students in British and IB schools across the UAE sit exams that test whether they can apply what they know, not just recall it.
          </p>

          <p>
            Learning scientists describe two kinds of transfer (Barnett and Ceci):
          </p>

          <div className="grid sm:grid-cols-2 gap-3.5 my-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-[#0a1f3d] uppercase tracking-wider mb-1.5">
                Near Transfer (Textbooks)
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                The question looks identical to classroom demonstrations, with only the numbers changed. E.g., calculating velocity using <em>v = u + at</em> with all three variables provided in the first line.
              </p>
            </div>

            <div className="bg-[#0f4a9b]/5 p-4 rounded-xl border border-[#0f4a9b]/20">
              <div className="text-xs font-bold text-[#0f4a9b] uppercase tracking-wider mb-1.5">
                Far Transfer (Exam Papers)
              </div>
              <p className="text-xs text-gray-700 leading-relaxed font-medium">
                The concept is disguised inside an unfamiliar context (e.g. a speed question set inside a roller-coaster diagram, where the student must first spot that energy conservation applies). The student must diagnose the underlying principle with zero explicit cues.
              </p>
            </div>
          </div>

          <p>
            When students spend their term studying with scaffolding, they train purely for <em>near transfer</em>. The moment they open Paper 4 in <a href="/igcse-tutor-dubai" className="text-[#0f4a9b] font-semibold underline">IGCSE</a> or Paper 2 in <a href="/ib-tutor-dubai" className="text-[#0f4a9b] font-semibold underline">IB Diploma</a>, the absence of familiar clues causes cognitive overload.
          </p>

          {/* 04. Why the brain freezes on unstructured questions */}
          <SectionHeading num="04" id="why-the-brain-freezes">
            Why the brain freezes on unstructured questions
          </SectionHeading>

          <p>
            When a student meets a question that does not match their memorised templates, their working memory overloads, an effect John Sweller described in cognitive load theory.
          </p>

          <p>
            Working memory can hold only a few items at once. When a student is confident and scaffold-free, the problem schema is retrieved as a single mental chunk: <em>&ldquo;This is a projectile motion problem where I must resolve initial velocity into components.&rdquo;</em>
          </p>

          <p>
            However, when a student is caught in the scaffolding trap, their working memory must simultaneously juggle:
          </p>

          <ul className="space-y-2 pl-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span>Scanning the paragraphs for keywords they might recognise.</span>
            </li>
            <li className="flex items-start gap-2">
              <span>Panicking about the ticking clock in the examination hall.</span>
            </li>
            <li className="flex items-start gap-2">
              <span>Wondering which formula on the formula sheet might fit the numbers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span>Remembering what their teacher wrote on the whiteboard last month.</span>
            </li>
          </ul>

          <p>
            With working memory full, the student freezes, stares at the blank answer lines and assumes they are &ldquo;just bad at exams.&rdquo; In reality, they were never trained to start a problem alone. Our guide to <a href="/blogs/physics-understanding-vs-marks" className="text-[#0f4a9b] font-semibold underline">why physics understanding does not always show in marks</a> covers the working-memory side in more detail.
          </p>

          <InlineImage
            src="/images/blogs/student-thinking-through-stuck-problem.webp"
            alt="Secondary student sitting at a revision desk in Dubai pausing thoughtfully over an unstructured question"
            caption="When familiar hints and textbook chapter titles are removed, students must learn to tolerate initial uncertainty and diagnose the first step independently."
          />

          {/* 05. The 4-step "fading support" protocol */}
          <SectionHeading num="05" id="four-step-fading-protocol">
            The 4-step "fading support" protocol
          </SectionHeading>

          <p>
            Breaking the scaffolding trap does not mean throwing a struggling teenager into deep past papers without help. It means removing support one step at a time, which researchers call fading (Renkl and Atkinson):
          </p>

          <div className="space-y-3.5 my-6">
            <div className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0f4a9b] font-bold text-xs flex items-center justify-center shrink-0 border border-blue-200">
                1
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0a1f3d] mb-0.5">
                  Step 1: Worked model with reasoning verbalisation
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  The student reviews one complete worked example, but with one critical rule: they must explain aloud <em>why</em> the first line was chosen. Not what the calculation is, but what clue in the question forced that exact opening.
                </p>
              </div>
            </div>

            <div className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 border border-amber-200">
                2
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0a1f3d] mb-0.5">
                  Step 2: The &ldquo;Cover &amp; Re-solve&rdquo; rule
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Immediately after reviewing a solution, the student covers it entirely with an index card or blank sheet. They must write out the derivation on clean paper from memory. If they get stuck, they may peek for two seconds, re-cover, and start the line again.
                </p>
              </div>
            </div>

            <div className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 border border-emerald-200">
                3
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0a1f3d] mb-0.5">
                  Step 3: Prompt stripping (removing sub-steps)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Textbooks often give parts (a), (b), and (c) to guide students gently to the final conclusion. In Step 3, fold the paper to hide parts (a) and (b), presenting only the initial data and the final goal in part (c). The student must plan their own stepping stones.
                </p>
              </div>
            </div>

            <div className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-800 font-bold text-xs flex items-center justify-center shrink-0 border border-purple-200">
                4
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0a1f3d] mb-0.5">
                  Step 4: Interleaved &ldquo;jumbled papers&rdquo;
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Avoid revising one topic in a single long block. Mix questions from three unrelated units (e.g. one circle theorem question, one stoichiometry problem, one kinematics graph). This makes the student practise problem identification: working out which topic a question belongs to.
                </p>
              </div>
            </div>
          </div>

          <InlineImage
            src="/images/blogs/retrieval-practice-4-step-protocol.webp"
            alt="Study desk with revision cards, a timer and a notebook of practice questions"
            caption="Transitioning systematically from assisted worked examples to unguided retrieval builds the independent cognitive stamina required for final examination papers."
          />

          {/* 06. Five question prompts UAE parents can use at home */}
          <SectionHeading num="06" id="how-parents-can-help-at-home">
            Five question prompts UAE parents can use at home
          </SectionHeading>

          <p>
            When parents sit beside a frustrated teenager doing revision at home in Dubai or Abu Dhabi, the natural instinct is to point at the textbook or say: <em>&ldquo;Look, remember you need to rearrange for x first?&rdquo;</em>
          </p>

          <p>
            While well-intentioned, this instantly replaces the student&rsquo;s mental initiative. Instead, use these five neutral coaching prompts that preserve independent thinking:
          </p>

          <div className="space-y-2.5 my-6">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-[13px]">
              <strong className="text-[#0a1f3d] block mb-1">Prompt 1: What is the question asking for in its final line?</strong>
              <span className="text-gray-600">Forces the student to focus on the target quantity and its required units before panicking over intermediate maths.</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-[13px]">
              <strong className="text-[#0a1f3d] block mb-1">Prompt 2: What pieces of data are directly provided with symbols?</strong>
              <span className="text-gray-600">Encourages listing known variables (e.g. m = 5 kg, v = 12 m/s), which immediately narrows down the viable formulas.</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-[13px]">
              <strong className="text-[#0a1f3d] block mb-1">Prompt 3: Have you seen a question like this before? How did that one start?</strong>
              <span className="text-gray-600">Activates analogical retrieval without giving away the exact procedure.</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-[13px]">
              <strong className="text-[#0a1f3d] block mb-1">Prompt 4: If you had to write a first line you knew might be wrong, what would it be?</strong>
              <span className="text-gray-600">Dispels perfectionism paralysis. Writing down any relevant equation often triggers the next logical deduction.</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-[13px]">
              <strong className="text-[#0a1f3d] block mb-1">Prompt 5: Talk me through your working line by line until where it stopped.</strong>
              <span className="text-gray-600">Students often spot their own sign or conceptual slip the moment they articulate it aloud.</span>
            </div>
          </div>

          <InlineImage
            src="/images/blogs/parent-child-homework-question-prompt.webp"
            alt="UAE mother supporting her secondary school son with open past papers at a study desk"
            caption="Using neutral diagnostic question prompts at home encourages independent reasoning without stepping in to complete the calculation."
          />

          {/* 07. How 1-to-1 mentorship restores exam independence */}
          <SectionHeading num="07" id="how-ustaad-tutoring-breaks-cycle">
            How 1-to-1 mentorship restores exam independence
          </SectionHeading>

          <p>
            At Ustaad, tutors avoid doing the thinking for the student. A student whose tutor solves every hard step will feel the difference in the exam hall.
          </p>

          <p>
            Our <a href="/maths-tutor-dubai" className="text-[#0f4a9b] font-semibold underline">Maths</a>, <a href="/physics-tutor-dubai" className="text-[#0f4a9b] font-semibold underline">Physics</a>, <a href="/chemistry-tutor-dubai" className="text-[#0f4a9b] font-semibold underline">Chemistry</a> and <a href="/biology-tutor-dubai" className="text-[#0f4a9b] font-semibold underline">Biology</a> tutors work this way in lessons:
          </p>

          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0 mt-1" />
              <span>
                <strong>Diagnostic Socratic Questioning:</strong> When a student pauses, tutors do not give the next step. They ask the question the student should be asking themselves.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0 mt-1" />
              <span>
                <strong>Deliberate Tolerance of Productive Struggle:</strong> Allowing the student two minutes of quiet thinking builds the psychological tolerance required for real exam halls.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0 mt-1" />
              <span>
                <strong>Unstructured Exam Drills:</strong> Moving early from topical worksheets to mixed, multi-topic past papers so the student masters topic diagnosis.
              </span>
            </li>
          </ul>

          {/* 08. Frequently asked questions */}
          <SectionHeading num="08" id="faqs">
            Frequently asked questions
          </SectionHeading>
          <FAQAccordion />

          {/* 09. Sources and further reading */}
          <SectionHeading num="09" id="sources">
            Sources and further reading
          </SectionHeading>
          <div className="text-xs text-gray-500 space-y-2 leading-relaxed">
            <p>Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. <em>Cognitive Science</em>, 12(2), 257–285.</p>
            <p>Roediger, H. L., &amp; Karpicke, J. D. (2006). The power of testing memory: Basic research and implications for educational practice. <em>Perspectives on Psychological Science</em>, 1(3), 181–210.</p>
            <p>Vygotsky, L. S. (1978). <em>Mind in society: The development of higher psychological processes</em>. Harvard University Press.</p>
            <p>Wood, D., Bruner, J. S., &amp; Ross, G. (1976). The role of tutoring in problem solving. <em>Journal of Child Psychology and Psychiatry</em>, 17(2), 89–100.</p>
            <p>Renkl, A., &amp; Atkinson, R. K. (2003). Structuring the transition from example study to problem solving in cognitive skill acquisition: A cognitive load perspective. <em>Educational Psychologist</em>, 38(1), 15–22.</p>
            <p>Barnett, S. M., &amp; Ceci, S. J. (2002). When and where do we apply what we learn? A taxonomy for far transfer. <em>Psychological Bulletin</em>, 128(4), 612–637.</p>
            <p>Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., &amp; Willingham, D. T. (2013). Improving students&apos; learning with effective learning techniques. <em>Psychological Science in the Public Interest</em>, 14(1), 4–58.</p>
          </div>

          {/* Related Guides */}
          <div className="my-8 p-5 rounded-2xl border border-slate-200 bg-white">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-3">Related Guides on Psychology of Learning</h3>
            <div className="space-y-2 text-xs">
              <a href="/blogs/maths-anxiety-teenagers-signs-causes-help" className="block p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition">
                <span className="font-semibold">Maths Anxiety in Teenagers: Why Your Child Says &ldquo;I&rsquo;m Just Bad at Maths&rdquo; (and How to Help)</span>
              </a>
              <a href="/blogs/why-teenagers-procrastinate-on-revision" className="block p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition">
                <span className="font-semibold">Why Teenagers Procrastinate on Revision (And Why It Isn&rsquo;t Laziness)</span>
              </a>
              <a href="/blogs/illusion-of-competence-revision-false-confidence" className="block p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition">
                <span className="font-semibold">The Illusion of Competence: Why Re-Reading Notes Gives UAE Students False Confidence</span>
              </a>
              <a href="/blogs/sleep-and-memory-why-all-nighters-backfire" className="block p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition">
                <span className="font-semibold">Sleep and Memory: Why All-Nighters Backfire for UAE Students</span>
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
              FIRST SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              Is it exam panic, or the scaffolding trap?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              In the first lesson, an Ustaad tutor works through a board-specific question with your child, finds where they get stuck and plans the next steps. Every first lesson includes a free 15-minute orientation.
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
                href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20read%20your%20article%20on%20the%20scaffolding%20trap%20and%20would%20like%20to%20discuss%20mentoring%20for%20my%20child."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-xs sm:text-sm transition shadow-md w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
