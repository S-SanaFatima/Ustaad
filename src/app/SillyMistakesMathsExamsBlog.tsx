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
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema } from './shared/schemas';
import { WhatsAppIcon } from './shared/WhatsAppIcon';

const BLOG = {
  title: 'Silly Mistakes in Maths Exams: How to Catch Them | Ustaad',
  titleLine1: 'Silly Mistakes in Maths Exams:',
  titleLine2: 'Why They Happen and a 3-Minute Checking Routine',
  h1: 'Silly Mistakes in Maths Exams: Why They Happen and a 3-Minute Checking Routine',
  subtitle:
    'Silly mistakes in maths exams cost marks on questions you know how to do. A maths tutor explains how to find the first wrong step and check your answer.',
  categoryBadge: 'USTAAD UAE · ACADEMIC & EXAM SKILLS',
  slug: 'silly-mistakes-maths-exams',
  canonical: '/blogs/silly-mistakes-maths-exams',
  description:
    'Why do silly mistakes in maths exams happen? A maths tutor shows how to find the first wrong step and use a 3-minute check to verify your answers.',
  heroImage: '/images/blogs/student-learning-online-maths-silly-mistakes.webp',
  heroAlt: 'Student in the UAE checking her maths working line by line during an online 1-to-1 lesson',
  heroCaption: 'One-to-one online mathematics tutoring helps students locate the first incorrect line and build reliable checking routines.',
  datePublished: '2026-10-12',
  dateModified: '2026-10-12',
  publishedText: '12 October 2026',
  author: 'Fahad Khan',
  authorRole: 'Maths Tutor, IGCSE, GCSE & A-Level, Ustaad UAE',
  authorUrl: '/tutors/fahad-khan',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Curriculum & Academic Review Board',
  reviewerUrl: '/editorial',
  readTime: '6 min read',
  tags: [
    'Maths Exam Technique',
    'IGCSE Maths',
    'GCSE Maths',
    'Algebra',
    'Checking Answers',
    'Error Log',
  ],
};

const FAQ_SCHEMA_DATA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do I keep making silly mistakes in maths when I know the method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often the method is known, but one step breaks, or a rule such as signs or brackets is not secure yet. Tracing your working to find the first incorrect line, and recording it in an error log, shows which it is.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I check my maths answers quickly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Substitute the answer into the original equation, estimate whether it is sensible, reverse the operation, and check units. Choose the check that does not repeat the same steps.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a careless mistake and a gap in understanding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A one-off slip appears once and is fixed as soon as you see it. If the same kind of error keeps returning, a rule or prerequisite skill probably needs more work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to check every question in the exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Prioritise questions with several steps, negative signs, fractions or brackets, where an error is easier to make and harder to see.',
      },
    },
  ],
};

const FAQS = [
  {
    q: 'Why do I keep making silly mistakes in maths when I know the method?',
    a: 'Often the method is known, but one step breaks, or a rule such as signs or brackets is not secure yet. Tracing your working to find the first incorrect line, and recording it in an error log, shows which it is.',
  },
  {
    q: 'How can I check my maths answers quickly?',
    a: 'Substitute the answer into the original equation, estimate whether it is sensible, reverse the operation, and check units. Choose the check that does not repeat the same steps.',
  },
  {
    q: 'What is the difference between a careless mistake and a gap in understanding?',
    a: 'A one-off slip appears once and is fixed as soon as you see it. If the same kind of error keeps returning, a rule or prerequisite skill probably needs more work.',
  },
  {
    q: 'Do I need to check every question in the exam?',
    a: 'Not necessarily. Prioritise questions with several steps, negative signs, fractions or brackets, where an error is easier to make and harder to see.',
  },
];

const TOC_ITEMS = [
  { label: 'Three types of maths mistakes that can cost marks', id: 'three-types-of-mistakes' },
  { label: 'Why repeating the calculation may not catch the mistake', id: 'why-repeating-fails' },
  { label: 'My 3-minute checking routine: Trace, Test, Verify', id: 'three-minute-routine' },
  { label: 'Can you spot the first incorrect step?', id: 'spot-first-incorrect-step' },
  { label: 'One mistake is a slip. A repeated mistake is a clue.', id: 'mistake-is-a-slip' },
  { label: 'Frequently asked questions', id: 'faqs' },
];

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

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

function FahadTipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-[#0f4a9b]/12 bg-[#f4f7fc] overflow-hidden">
      <div className="px-4 py-2 border-b border-[#0f4a9b]/10 bg-[#0f4a9b]/5 flex items-center">
        <span className="text-[10px] font-extrabold text-[#0f4a9b] uppercase tracking-[0.13em]">MY TIP</span>
      </div>
      <div className="px-4 py-3.5 text-sm text-gray-700 leading-[1.75] text-justify space-y-2">
        {children}
      </div>
    </div>
  );
}

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-6">
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto block"
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

export default function SillyMistakesMathsExamsBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);
  const [revealedChallenges, setRevealedChallenges] = useState<Record<number, boolean>>({});

  const toggleChallenge = (id: number) => {
    setRevealedChallenges((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
            { name: 'Academic & Exam Skills', url: '/blogs/academic-exam-skills' },
            { name: 'Silly Mistakes in Maths Exams', url: canonical },
          ]),
          articleSchema({
            title: BLOG.h1,
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: {
              name: BLOG.author,
              url: BLOG.authorUrl,
              role: BLOG.authorRole,
            },
            reviewer: {
              name: BLOG.reviewer,
              url: BLOG.reviewerUrl,
            },
            image: BLOG.heroImage,
            timeRequired: 'PT6M',
          }),
          FAQ_SCHEMA_DATA,
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
          <a href="/blogs/academic-exam-skills" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">
            Academic &amp; Exam Skills
          </a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[180px]">Silly Mistakes in Maths Exams</span>
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
                  <span className="block sm:inline">
                    {' '}<a href={BLOG.reviewerUrl} className="text-gray-500 hover:text-[#0f4a9b]">| {BLOG.reviewerRole}</a>
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
                className="w-full h-full object-cover block"
                loading="eager"
              />
            </div>
            {BLOG.heroCaption && (
              <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">
                {BLOG.heroCaption}
              </figcaption>
            )}
          </figure>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ── */}
      <section className="pb-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Table of Contents */}
          <TOC open={tocOpen} setOpen={setTocOpen} />

          {/* Introductory Worked Diagnostic */}
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify mb-8">
            <p>
              Solve <strong className="text-[#0a1f3d] font-mono">3(x − 2) = 15</strong>.
            </p>
            <p>
              A student writes:
            </p>

            <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-4 font-mono text-sm sm:text-base text-[#0a1f3d] space-y-1.5 my-3 shadow-2xs">
              <div className="text-slate-700">3(x − 2) = 15</div>
              <div className="text-slate-700">x − 2 = 5</div>
              <div className="text-red-600 font-bold flex items-center justify-between">
                <span>x = 3</span>
                <span className="text-[11px] font-sans font-semibold bg-red-100 text-red-700 px-2 py-0.5 rounded">
                  Incorrect
                </span>
              </div>
            </div>

            <p>
              The answer is wrong. Before reading on, can you find the first incorrect step?
            </p>

            <p>
              It is the last line. Dividing both sides by 3 to reach <code className="font-mono font-bold text-[#0f4a9b] bg-blue-50 px-1 py-0.5 rounded">x − 2 = 5</code> was correct. But to get <code className="font-mono">x</code> on its own, the student needed to add 2 to both sides, and subtracted 2 instead. The correct answer is <strong className="text-emerald-700 font-mono">x = 7</strong>.
            </p>

            <InlineImage
              src="/images/blogs/silly-mistakes-maths-exams-handwritten-working.svg"
              alt="Handwritten working for 3(x − 2) = 15 with the incorrect last line circled"
              caption="Handwritten working for 3(x − 2) = 15 showing the critical subtraction slip on the final line."
            />

            <p>
              Notice what a wrong answer does and does not tell you. It tells you that something went wrong. It does not tell you where. Only the working can do that, and finding the first incorrect line is a skill worth practising, whether you sit IGCSE or GCSE maths.
            </p>

            <p>
              As a maths tutor, I would rather a student learn to locate the error than simply be told to "check harder". This article shows you how.
            </p>
          </div>

          {/* 01. Three types of maths mistakes */}
          <SectionHeading num="01" id="three-types-of-mistakes">
            Three types of maths mistakes that can cost marks
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Mistakes are not all the same, and the right check depends on the type. Here are three worth knowing.
            </p>

            <h3 className="text-base font-bold text-[#0a1f3d] pt-2">Copying or transcription errors</h3>
            <p>
              The working is fine, but the starting point is not. Typical examples are copying 36 instead of 63, dropping a negative sign, or taking the wrong value from the question.
            </p>
            <p>
              Suppose the question says <code className="font-mono font-bold text-slate-800">3x − 7 = −10</code> and the student writes <code className="font-mono font-bold text-red-600">3x − 7 = 10</code>. Every later line may be neat and correct, but it solves a different equation.
            </p>

            <h3 className="text-base font-bold text-[#0a1f3d] pt-2">Errors in mathematical operations</h3>
            <p>
              The method is right, but a rule is misapplied. This often happens when expanding brackets.
            </p>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs sm:text-sm space-y-1">
              <div className="font-bold text-[#0a1f3d]">2(x + 3) = 14</div>
              <div className="text-red-600">Incorrect expansion: 2x + 3 = 14</div>
              <div className="text-emerald-700 font-bold">Correct expansion: 2x + 6 = 14, so x = 4</div>
            </div>
            <p>
              The 2 multiplies everything inside the bracket, not just the first term.
            </p>

            <h3 className="text-base font-bold text-[#0a1f3d] pt-2">Calculation and final-answer errors</h3>
            <p>
              The method is sound, but the end goes wrong. These include an arithmetic slip (writing <code className="font-mono">12 ÷ 2</code> as 10), a missing unit, or an incomplete response, such as solving for <code className="font-mono">x</code> when the question asks for a perimeter. A mostly correct solution can still lose marks here.
            </p>

            <FahadTipBox>
              Identify the type of error before deciding how to correct it. A copying error is caught by comparing with the question, an operation error by inspecting the rule, and a final-answer error by re-reading what was asked.
            </FahadTipBox>
          </div>

          {/* 02. Why repeating the calculation may not catch the mistake */}
          <SectionHeading num="02" id="why-repeating-fails">
            Why repeating the calculation may not catch the mistake
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              When a student redoes a calculation the same way, they often reproduce the same error. If you believe "subtract 2" is the right move, doing it again will agree with you.
            </p>
            <p>
              Independent verification works differently. It checks the answer by a route that does not depend on the working being right. For equations, that route is substitution.
            </p>
            <p>
              Take <code className="font-mono font-bold">3(x − 2) = 15</code> and the proposed answer <code className="font-mono font-bold">x = 3</code>. Substitute it into the original equation:
            </p>
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl font-mono text-xs sm:text-sm text-red-900">
              3(3 − 2) = 3 × 1 = 3
            </div>
            <p>
              Since 3 ≠ 15, the answer is incorrect. Now try <code className="font-mono font-bold">x = 7</code>:
            </p>
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl font-mono text-xs sm:text-sm text-emerald-900">
              3(7 − 2) = 3 × 5 = 15
            </div>
            <p>
              Both sides are equal, so <code className="font-mono font-bold text-emerald-700">x = 7</code> is correct.
            </p>

            <InlineImage
              src="/images/blogs/substitution-check-3x-minus-2-equals-15.svg"
              alt="Substituting x = 3 and x = 7 into 3(x − 2) = 15 to see which answer is correct"
              caption="Substituting candidate solutions into the original equation provides an independent verification route."
            />

            <p>
              Substitution suits equations best. For other questions, other independent checks help, such as estimating whether an answer is sensible or reversing an operation.
            </p>
          </div>

          {/* 03. Fahad's 3-minute checking routine */}
          <SectionHeading num="03" id="three-minute-routine">
            My 3-minute checking routine: Trace, Test, Verify
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Use this as a practice routine, not as a guarantee that every question can be checked in exactly three minutes. On a short question it may take thirty seconds. On a long one, choose the steps most likely to hide an error.
            </p>

            <h3 className="text-base font-bold text-[#0a1f3d] pt-2">Minute 1: Trace the working</h3>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>Check copied values, signs and brackets against the question.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>Compare consecutive lines to find the first questionable step.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>
                  Make sure you have interpreted the question correctly. Our guide to{' '}
                  <a href="/blogs/command-words-igcse-a-level-exams" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    command words
                  </a>{' '}
                  explains how to read what a question is asking.
                </span>
              </li>
            </ul>

            <h3 className="text-base font-bold text-[#0a1f3d] pt-2">Minute 2: Test the vulnerable step</h3>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>Recalculate the suspicious operation.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>Check that each operation has been applied to both sides of an equation.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>Inspect arithmetic, fractions and algebraic signs.</span>
              </li>
            </ul>

            <h3 className="text-base font-bold text-[#0a1f3d] pt-2">Minute 3: Verify the final answer</h3>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>Substitute the result into the original equation.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>Check units where relevant.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>Confirm that your answer addresses what the question actually asks.</span>
              </li>
            </ul>

            <InlineImage
              src="/images/blogs/trace-test-verify-maths-checking-routine.svg"
              alt="Three-step checking routine: trace the working, test the vulnerable step, verify the final answer"
              caption="Three connected checking panels: Trace the working, test the vulnerable step, verify the final answer."
            />
          </div>

          {/* 04. Can you spot the first incorrect step? */}
          <SectionHeading num="04" id="spot-first-incorrect-step">
            Can you spot the first incorrect step?
          </SectionHeading>
          <div className="space-y-4 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Try these before reading the answers.
            </p>

            {/* Challenge 1 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
              <span className="text-xs font-bold text-[#0f4a9b] uppercase tracking-wider block mb-1">Challenge 1</span>
              <div className="font-mono text-sm sm:text-base text-slate-800 bg-slate-50 p-3 rounded-lg mb-3 space-y-0.5">
                <div>2x + 5 = 17</div>
                <div>2x = 12</div>
                <div className="text-red-600 font-bold">x = 12 − 2 = 10</div>
              </div>
              <button
                onClick={() => toggleChallenge(1)}
                className="text-xs font-bold text-[#0f4a9b] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{revealedChallenges[1] ? 'Hide Answer' : 'Reveal Answer'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${revealedChallenges[1] ? 'rotate-180' : ''}`} />
              </button>
              {revealedChallenges[1] && (
                <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                  <strong>Answer:</strong> The first incorrect step is the last line. 2x = 12 is correct. But 2x means 2 × x, so the opposite operation is division: x = 12 ÷ 2 = 6. Check: 2(6) + 5 = 17.
                </div>
              )}
            </div>

            {/* Challenge 2 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
              <span className="text-xs font-bold text-[#0f4a9b] uppercase tracking-wider block mb-1">Challenge 2</span>
              <div className="font-mono text-sm sm:text-base text-slate-800 bg-slate-50 p-3 rounded-lg mb-2 space-y-0.5">
                <div>4(x − 1) = 20</div>
                <div className="text-red-600 font-bold">4x − 1 = 20</div>
              </div>
              <p className="text-xs text-gray-600 mb-2">Why is the second line wrong?</p>
              <button
                onClick={() => toggleChallenge(2)}
                className="text-xs font-bold text-[#0f4a9b] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{revealedChallenges[2] ? 'Hide Answer' : 'Reveal Answer'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${revealedChallenges[2] ? 'rotate-180' : ''}`} />
              </button>
              {revealedChallenges[2] && (
                <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                  <strong>Answer:</strong> The 4 must multiply both terms in the bracket, so the line should read 4x − 4 = 20. Then 4x = 24 and x = 6. Check: 4(6 − 1) = 4 × 5 = 20.
                </div>
              )}
            </div>

            {/* Challenge 3 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
              <span className="text-xs font-bold text-[#0f4a9b] uppercase tracking-wider block mb-1">Challenge 3</span>
              <div className="font-mono text-sm sm:text-base text-slate-800 bg-slate-50 p-3 rounded-lg mb-3 space-y-0.5">
                <div>5 − 2x = 11</div>
                <div>−2x = 6</div>
                <div className="text-red-600 font-bold">x = 3</div>
              </div>
              <button
                onClick={() => toggleChallenge(3)}
                className="text-xs font-bold text-[#0f4a9b] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{revealedChallenges[3] ? 'Hide Answer' : 'Reveal Answer'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${revealedChallenges[3] ? 'rotate-180' : ''}`} />
              </button>
              {revealedChallenges[3] && (
                <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                  <strong>Answer:</strong> The second line is correct. The error is in the last line: 6 ÷ (−2) = −3, not 3, so x = −3. Check: 5 − 2(−3) = 5 + 6 = 11. Substituting x = 3 would have given 5 − 6 = −1, which is not 11.
                </div>
              )}
            </div>

            <FahadTipBox>
              Explain why a line is wrong, not just what the right answer is. Knowing which rule broke helps you spot similar errors in unfamiliar questions.
            </FahadTipBox>
          </div>

          {/* 05. One mistake is a slip */}
          <SectionHeading num="05" id="mistake-is-a-slip">
            One mistake is a slip. A repeated mistake is a clue.
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              A single arithmetic slip is one thing. The same kind of error appearing again and again is different. It may mean a rule, such as working with negative numbers, is not yet secure.
            </p>
            <p>
              An error log helps you tell the two apart. For each mistake, record:
            </p>
            <ul className="space-y-1.5 pl-2">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>the original question</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>the first incorrect step</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>why that step was incorrect</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-2 shrink-0" />
                <span>the check that would have caught it</span>
              </li>
            </ul>

            {/* Error Log Table */}
            <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[#0a1f3d] font-bold">
                    <th className="py-2.5 px-3">Question</th>
                    <th className="py-2.5 px-3">First incorrect step</th>
                    <th className="py-2.5 px-3">Why it was incorrect</th>
                    <th className="py-2.5 px-3">Check that would have caught it</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#0f4a9b]">4(x − 1) = 20</td>
                    <td className="py-2.5 px-3 font-mono text-red-600">4x − 1 = 20</td>
                    <td className="py-2.5 px-3">4 multiplies both terms in the bracket</td>
                    <td className="py-2.5 px-3">Substituting 5.25 gives 4(4.25) = 17, not 20</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#0f4a9b]">5 − 2x = 11</td>
                    <td className="py-2.5 px-3 font-mono text-red-600">x = 3</td>
                    <td className="py-2.5 px-3">6 ÷ (−2) = −3: a positive number divided by a negative gives a negative</td>
                    <td className="py-2.5 px-3">5 − 2(3) = −1, not 11</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#0f4a9b]">1/2 + 1/3 = 2/5</td>
                    <td className="py-2.5 px-3 text-red-600">Added numerators &amp; denominators</td>
                    <td className="py-2.5 px-3">Fractions need a common denominator first (correct answer 5/6)</td>
                    <td className="py-2.5 px-3">Estimation: sum must be &gt; 1/2, but 2/5 is less</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              If three rows show negative signs, that is a pattern worth working on directly. Not every repeated error is carelessness. Sometimes a rule or an earlier skill needs more practice.
            </p>
            <p>
              Review your log before attempting similar questions, and aim to fix the pattern, not just memorise the right answer. If you are already working through{' '}
              <a href="/blogs/igcse-maths-revision-low-marks" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                past papers
              </a>
              , the log is where those mistakes become useful.
            </p>

            <h3 className="text-lg font-bold text-[#0a1f3d] pt-4">Find the error, not just the correct answer</h3>
            <p>
              Go back to the opening: <code className="font-mono text-red-600 font-bold">x = 3</code> was wrong because of one line, and the line was easy to find once it was traced. Trace your working, test the vulnerable step and verify the final answer. Over time, your error log shows which skills deserve more attention.
            </p>
            <p>
              If your child keeps running into trouble with particular skills, such as negative signs, fractions or brackets, or experiences freezing and{' '}
              <a href="/blogs/maths-anxiety-teenagers-signs-causes-help" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                maths anxiety
              </a>{' '}
              on multi-step questions,{' '}
              <a href="/maths" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                1-to-1 maths tutoring
              </a>{' '}
              can help pinpoint the first incorrect step and build the habit of checking.
            </p>
          </div>

          {/* 06. Frequently asked questions */}
          <SectionHeading num="06" id="faqs">
            Frequently asked questions
          </SectionHeading>
          <div className="my-5">
            <FAQAccordion />
          </div>

          {/* CTA Box */}
          <div className="my-10 p-6 rounded-2xl bg-gradient-to-br from-[#0a1f3d] to-[#0f4a9b] text-white shadow-lg">
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/10 text-[#fef08a] text-[11px] font-bold uppercase tracking-wider mb-3">
              Free 15-Min Orientation
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Can your child find the first wrong step?</h3>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-6">
              In the first lesson, Fahad Khan spends 15 free minutes getting to know your child, then works through worked equations with your child, shows where the first incorrect step tends to occur, and explains which checks would catch it. Lessons are online and 1-to-1, for families in every emirate.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="/contact#form"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-[#0a1f3d] bg-gradient-to-r from-[#C7A24A] via-[#dfba63] to-[#C7A24A] hover:brightness-105 transition text-xs sm:text-sm shadow-sm"
              >
                <span>Book First Session</span>
              </a>
              <a
                href="https://wa.me/971561249005?text=Hi%20Fahad%2C%20I%27d%20like%20to%20book%20a%20session%20to%20help%20my%20child%20catch%20silly%20mistakes%20in%20maths%20exams."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition text-xs sm:text-sm shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* About Author & Reviewer */}
          <div className="my-8 pt-6 border-t border-slate-100 space-y-4 text-xs text-gray-500">
            <div>
              <strong className="text-[#0a1f3d] block text-sm mb-0.5">About the Author</strong>
              <p className="leading-relaxed">
                <a href={BLOG.authorUrl} className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">Fahad Khan</a>, Maths Tutor, IGCSE, GCSE &amp; A-Level. 10+ years of teaching experience, BS Mathematics &amp; B.Ed, working with Cambridge and Edexcel Maths.
              </p>
            </div>
            <div>
              <strong className="text-[#0a1f3d] block text-sm mb-0.5">Reviewed By</strong>
              <p className="leading-relaxed">
                <a href={BLOG.reviewerUrl} className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">Ustaad Editorial Team</a>. Every guide is checked for accuracy, educational validity and parent clarity before it is published.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
