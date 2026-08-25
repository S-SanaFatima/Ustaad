import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronDown, ChevronUp, Mail, MessageCircle, Sparkles, Home, ChevronRightIcon, User, Calendar, Clock } from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'Why IGCSE Biology Students Lose Marks on 6-Mark Questions',
  titleLine1: 'USTAAD UAE · IGCSE BIOLOGY INSIGHTS',
  titleLine2: 'Why IGCSE Biology Students Lose Marks on 6-Mark Questions',
  slug: 'why-igcse-biology-students-lose-marks-on-6-mark-questions',
  description: 'IGCSE Biology 6-mark questions cost students marks every year. This board-specific guide explains what Cambridge and Pearson mark schemes reward.',
  heroImage: '/images/blogs/uae-parent-igcse-biology-6-mark-review.webp',
  heroAlt: 'UAE parent and IGCSE Biology student reviewing a 6-mark answer against the mark scheme at home, Ustaad UAE.',
  heroCaption: 'Your child knows the biology, revises for hours, and still loses marks on the long questions.',
  datePublished: '2026-08-17',
  dateModified: '2026-08-17', // Last reviewed: August 2026
  author: 'Ustaad UAE Editorial Team | Biology Editorial Desk',
  reviewer: 'Nida Iqbal | MPhil in Education Leadership and Management',
  readTime: '6 min read',
  tags: ['Biology', 'IGCSE', 'Cambridge 0610', 'Pearson Edexcel 4BI1', 'UAE Parents', 'Exam Technique'],
};

const FAQS = [
  {
    q: 'How many 6-mark questions are on the IGCSE Biology paper?',
    a: 'The number and placement of 6-mark questions vary between paper variants and examination series. Students should practise all higher-tariff structured questions rather than expecting a fixed number. Cambridge 0610 Paper 4 is an 80-mark theory paper; Pearson Edexcel International GCSE 4BI1 sits across Paper 1B (110 marks) and Paper 2B (70 marks).',
  },
  {
    q: 'Is bullet-point format allowed on 6-mark questions?',
    a: 'Bullet points may receive credit where the required biological content is clear and the command word does not require developed prose. For questions asking students to discuss or explain, structured prose that develops reasoning is usually the safer format. Check the mark scheme for that question type when practising.',
  },
  {
    q: 'Should students memorise model answers from past papers?',
    a: 'No. Study model answers for structure and linking words, not word-for-word. Papers rarely repeat the same question, and rehearsed answers miss the command word of the question in front of the student.',
  },
  {
    q: 'How long should a 6-mark answer take?',
    a: 'As a rough guide, allow approximately six minutes on Cambridge Paper 4 and around six to seven minutes on Pearson 4BI1. The exact time should reflect the question type and the student\'s full-paper pacing strategy.',
  },
  {
    q: 'Can technique alone move a grade, or does content matter more?',
    a: 'Technique and content usually need to be worked on together. Where content knowledge is already secure, technique work on planning, command words and mark-scheme matching can lift long-question performance. Where the underlying content is not secure, technique alone will not close the gap. A short diagnostic separates content gaps from technique gaps. Families exploring one-to-one support can start with our <a href="/biology-tutor-abu-dhabi" class="text-[#0f4a9b] underline">Biology tutoring in Abu Dhabi</a> page for how diagnostic sessions are structured.',
  },
];

const TOC_ITEMS = [
  { label: 'What Happens on the 6-Mark Question', id: 'what-happens-on-the-6-mark-question' },
  { label: 'Why Students Lose Marks, and How to Resolve It', id: 'why-students-lose-marks-and-how-to-resolve-it' },
  { label: 'Why Writing More Backfires', id: 'why-writing-more-backfires' },
  { label: 'Command Words Students Misread', id: 'command-words-students-misread' },
  { label: 'Diagrams and Labelling, the Silent Mark-Losers', id: 'diagrams-and-labelling-the-silent-mark-losers' },
  { label: 'How UAE Students Turn 3-Mark Answers into 6-Mark Ones', id: 'how-uae-students-turn-3-mark-answers-into-6-mark-ones' },
  { label: 'What Parents Can Do at Home', id: 'what-parents-can-do-at-home' },
  { label: 'Frequently Asked Questions', id: 'frequently-asked-questions' },
];

const RELATED = [
  {
    category: 'IGCSE Maths',
    title: 'Why IGCSE students forget maths in exams',
    url: '/blogs/igcse-maths-revision-low-marks'
  },
  {
    category: 'Exam Strategy',
    title: 'What UAE parents miss about exam panic',
    url: '/blogs/exam-panic-before-exams-uae'
  },
  {
    category: 'Chemistry',
    title: 'Why chemistry fades from memory (and what helps)',
    url: '/blogs/why-chemistry-fades-from-memory'
  },
  {
    category: 'Chemistry',
    title: 'Early signs your child needs help in chemistry',
    url: '/blogs/early-signs-chemistry-help-uae'
  },
  {
    category: 'Parent Guidance',
    title: 'How to read a UAE school report card like an education counsellor',
    url: '/blogs/read-uae-school-report-card'
  },
  {
    category: 'Biology',
    title: 'Explore Biology tutoring in Abu Dhabi',
    url: '/biology-tutor-abu-dhabi'
  }
];

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-');
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return `${parseInt(d)} ${months[parseInt(m) - 1]} ${y}`;
}

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

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

// ── Image with white border stroke ────────────────────────────────
function InlineImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="mx-auto my-6 max-w-xl">
      <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <picture>
          <source type="image/webp" srcSet={src} />
          <img src={src.replace('.webp', '.jpg')} alt={alt} loading="lazy" className="w-full h-auto block" />
        </picture>
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
          <div key={i} className="flex flex-col gap-1.5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <div className="flex items-center gap-2.5">
              <button onClick={() => setActive(isOpen ? null : i)}
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{ width: 36, height: 36, minWidth: 36, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms, color 300ms', border: 'none', cursor: 'pointer' }}>
                <span className="font-extrabold text-sm">?</span>
              </button>
              <button onClick={() => setActive(isOpen ? null : i)} aria-expanded={isOpen}
                className="flex-1 flex items-center gap-2.5 text-left rounded-full border"
                style={{ minHeight: 44, padding: '7px 14px', cursor: 'pointer', background: 'transparent', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)' }}>
                <span className="flex-1 font-semibold text-[#0a1f3d] text-[13px] leading-snug" itemProp="name">{faq.q}</span>
                <span className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: 28, height: 28, minWidth: 28, borderRadius: '50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms, color 300ms, transform 300ms', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <ChevronDown className="h-3 w-3" />
                </span>
              </button>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }} className="ml-[48px]" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div className="flex items-start gap-2.5 rounded-2xl border p-3.5"
                    style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.12)', boxShadow: '0 3px 12px rgba(15,74,155,0.05)' }}>
                    <p className="flex-1 text-gray-600 text-[13px] leading-relaxed text-justify" itemProp="text" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
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

export default function IGCSEBiology6MarkBlog() {
  const [tocOpen, setTocOpen] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://ustaad.ae/blogs/${BLOG.slug}`;

  // Organization author schema to match editor-team requirements
  const customArticleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": BLOG.title,
    "description": BLOG.description,
    "image": `https://ustaad.ae${BLOG.heroImage}`,
    "datePublished": BLOG.datePublished,
    "dateModified": BLOG.dateModified,
    "author": {
      "@type": "Organization",
      "name": "Ustaad UAE Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ustaad UAE",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ustaad.ae/logo.png"
      }
    },
    "reviewedBy": {
      "@type": "Person",
      "name": "Nida Iqbal",
      "jobTitle": "Editorial Reviewer",
      "description": "MPhil in Education Leadership and Management"
    },
    "isBasedOn": [
      "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-biology-0610",
      "https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses-and-edexcel-certificates/international-gcse-biology-2017.html"
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blogs' },
    { name: 'Subject & Exam Skills', url: '/blogs/academic-exam-skills' },
    { name: 'IGCSE Biology 6-Mark Questions', url: `/blogs/${BLOG.slug}` }
  ];

  return (
    <Layout>
      <SEOHead 
        title={BLOG.title}
        description={BLOG.description}
        canonical={`/blogs/${BLOG.slug}`}
        author="Ustaad UAE Editorial Team"
        schema={[
          customArticleSchema,
          faqSchema(FAQS),
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((b, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": b.name,
              "item": `https://ustaad.ae${b.url}`
            }))
          }
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
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">IGCSE Biology</span>
        </div>
      </div>

      {/* Hero header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">{BLOG.titleLine1}</span>
            </div>
            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine2}
            </h1>
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-justify">{BLOG.description}</p>
            <div className="mb-4 mt-2 space-y-2">
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Written by:</span> {BLOG.author.split(' | ')[0]}
                  <span className="block sm:inline">
                    {' '}| {BLOG.author.split(' | ')[1]} <span className="text-gray-400">· <a href="/editorial" className="text-[#0f4a9b] underline">Ustaad editorial standards</a></span>
                  </span>
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Reviewed by:</span> {BLOG.reviewer.split(' | ')[0]}
                  <span className="block sm:inline">
                    {' '}| {BLOG.reviewer.split(' | ')[1]}
                  </span>
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

          <motion.figure initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-0">
            <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_40px_rgba(15,74,155,0.12)]">
              <img src={BLOG.heroImage} alt={BLOG.heroAlt} fetchPriority="high" className="w-full h-auto block" />
            </div>
            <figcaption className="mt-2 text-[11px] text-gray-400 text-center font-medium">{BLOG.heroCaption}</figcaption>
          </motion.figure>

          <TOC open={tocOpen} setOpen={setTocOpen} />
        </div>
      </section>

      {/* Article body */}
      <article className="pb-4 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-sm lg:text-[15px] leading-[1.8] [&_p]:text-justify [&_p]:mb-3 space-y-2 pt-6">
            <p>Your child knows the biology. They can define osmosis. They can list the stages of mitosis. They revise for hours. Yet the mock report keeps showing the same pattern: full marks on the short questions, and only two or three out of six on the long ones.</p>
            <p>Sound familiar? For most UAE families sitting Cambridge IGCSE 0610 or Pearson Edexcel International GCSE 4BI1, this shortfall between effort and outcome is what pushes them to seek support. Once a student sees what each board actually rewards on a 6-mark question, the fix becomes clearer.</p>
            <p>The content on the syllabus does not need to change for a student to score better on long questions. What often needs to change is how the student meets the question. Individual results vary, and any student who is behind on the underlying content will need to close that gap alongside technique work.</p>

            {/* 01 */}
            <SectionHeading num="01" id="what-happens-on-the-6-mark-question">What Happens on the 6-Mark Question</SectionHeading>
            <p>The 6-mark question is not asking your child to write everything they know. It asks them to link biological ideas in a structured chain: cause to mechanism to effect, or structure to function to outcome. Whether the topic is diffusion, respiration or gas exchange, that structured chain is what mark schemes reward.</p>
            <p>The two boards approach this differently, and the difference matters when you are helping your child prepare.</p>
            
            <StepCard title="Cambridge IGCSE 0610">
              Cambridge assesses Biology through three Assessment Objectives, or AOs. AO1 tests knowledge with understanding. AO2 tests handling information and problem-solving. AO3 tests experimental skills and investigations. Paper 4 is an 80-mark theory paper containing compulsory short-answer and structured questions, and it primarily tests AO1 and AO2. AO3 is assessed through Paper 5 or Paper 6, the practical components. Higher-tariff questions on Paper 4 draw credit from a list of accepted marking points defined in the mark scheme.
            </StepCard>
            
            <StepCard title="Pearson Edexcel International GCSE 4BI1">
              Pearson's Biology sits across two written papers, Paper 1B (110 marks) and Paper 2B (70 marks). The papers use a mix of multiple-choice, short-answer, calculation and extended open-response questions. Pearson's specification gives AO3 a broader role. Experimental skills, data handling and methods are tested across the written papers, not just in a separate practical. Longer questions can draw on applied methodology as well as recall. Credit is awarded across defined categories in the mark scheme rather than as a flat count of factual statements.
            </StepCard>

            <p>In both boards, every tick on the script comes from a defined mark scheme. Content that is factually correct but does not match the mark scheme earns nothing. That is why two students writing on the same topic can score very differently on the same question.</p>
            <p>For families exploring one-to-one support, our <a href="/biology-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline">Biology tutoring in Abu Dhabi</a> page explains how a diagnostic session identifies where the mark-scheme gap sits.</p>

            <InlineImage
              src="/images/blogs/igcse-biology-6-mark-answer-comparison.webp"
              alt="IGCSE Biology 6-mark answer comparison, long answer scoring 2 out of 6 beside a short answer scoring 6 out of 6, Ustaad UAE."
            />

            {/* 02 */}
            <SectionHeading num="02" id="why-students-lose-marks-and-how-to-resolve-it">Why Students Lose Marks, and How to Resolve It</SectionHeading>
            <p>Below are the six patterns examiners flag most often on IGCSE Biology 6-mark answers. Each pattern is written as the question a parent or student would ask, with the fix directly underneath.</p>
            
            <StepCard title="Why does my child write full pages and still score 2/6?">
              Because the mark scheme awards credit for a defined set of relevant, developed points, not for length or effort.<br /><br /><strong>Fix:</strong> treat the mark value as a guide to how much developed credit is required. Before writing, plan enough distinct, relevant ideas to reach the available marks, and follow the command word rather than forcing every answer into six separate sentences.
            </StepCard>
            <StepCard title="Why do answers keep missing the &quot;why&quot; when the question says &quot;explain&quot;?">
              Because students confuse command words. Describe only asks what. Explain asks why.<br /><br /><strong>Fix:</strong> underline the command word in the question stem before writing a single sentence.
            </StepCard>
            <StepCard title="Why does factually correct Biology sometimes earn no credit?">
              Because it was not asked for. Off-topic content earns nothing, and it takes up time that could have gone into the ideas the question actually rewards.<br /><br /><strong>Fix:</strong> re-read the question stem after every two lines. Check the answer is still on the named organ, process or organism.
            </StepCard>
            <StepCard title="Why do labelled diagrams keep losing marks?">
              Because the label line does not touch the structure, or an unclear abbreviation was used.<br /><br /><strong>Fix:</strong> land each label line exactly on the structure, and use clear, unambiguous biological terminology. Some abbreviations are accepted in particular mark schemes, but full terms are safer when the student is unsure.
            </StepCard>
            <StepCard title="Why do students contradict themselves in one answer?">
              Because they rush and lose track of direction (into vs out of, active vs passive).<br /><br /><strong>Fix:</strong> finish the plan first, then write one line at a time, checking direction each time.
            </StepCard>
            <StepCard title="Why does the same student score full marks on short questions but not long ones?">
              Because long questions reward linked, developed reasoning, not just more content. Short questions test recall. Long questions test how those ideas connect.<br /><br /><strong>Fix:</strong> learn a small set of linking phrases and use them deliberately. See Section 06 for the specific phrases and how to slot them in.
            </StepCard>

            <InlineImage
              src="/images/blogs/igcse-biology-6-mark-scheme-mapping.webp"
              alt="IGCSE Biology 6-mark question with six mark-scheme points circled and six linking phrases underlined in a model answer, Ustaad UAE."
            />

            {/* 03 */}
            <SectionHeading num="03" id="why-writing-more-backfires">Why Writing More Backfires</SectionHeading>
            <p>Many students believe longer answers score higher. In IGCSE Biology, they usually do not, and over-writing carries real costs.</p>
            <p>First, over-writing wastes exam time. If one 6-mark answer takes fourteen minutes instead of six, the last few questions on the paper get rushed and lose marks that were fully available. Time control is part of technique.</p>
            <p>Second, over-writing invites contradictions. A student writes "oxygen enters the alveoli" in one line, then "oxygen leaves the alveoli" three lines later. Cambridge mark schemes state that credit should not be awarded for a correct statement that is contradicted within the same question part. Pearson marking depends on the wording and guidance for the individual question, so contradictions are risky under either board.</p>
            <p>Third, extra text tends to drag in irrelevant material. Examiners award marks for valid content that answers the question asked, but off-topic writing uses up the space and time that could have gone into developing the required points properly.</p>
            <p>The goal is not to write the fewest words possible. It is to stay in control of the answer. Match the depth of the response to the mark value. Some 6-mark questions reward six independent facts. Others reward three developed explanations linked by cause and effect. The command word and the question structure decide which.</p>

            {/* 04 */}
            <SectionHeading num="04" id="command-words-students-misread">Command Words Students Misread</SectionHeading>
            <p><strong>Describe</strong> asks what happens. <strong>Explain</strong> asks why it happens. <strong>Suggest</strong> asks for a reasoned inference from the data or diagram in front of the student. <strong>Compare</strong> asks for similarities and differences in the same sentence structure. <strong>Discuss</strong>, where it appears, asks the student to address a topic in depth in a structured way.</p>
            <p>Students who treat these command words as interchangeable lose marks predictably. Writing a full explanation for a question that only asks for a description does not earn extra credit, and it uses time the student needs elsewhere.</p>
            <p>If your child finishes a Biology paper with time to spare and still scores below expectation, the command word check is worth investigating first. A calm re-read of the command word before writing keeps the answer aligned with what the question actually asks.</p>

            {/* 05 */}
            <SectionHeading num="05" id="diagrams-and-labelling-the-silent-mark-losers">Diagrams and Labelling, the Silent Mark-Losers</SectionHeading>
            <p>Diagrams and data representations appear regularly across IGCSE Biology papers on both Cambridge and Edexcel. Students are asked to interpret them, label them, or complete them. Labelling errors are among the more common reasons students lose marks on diagram questions.</p>
            <p>Diagrams appear across the specification: the heart, the kidney nephron, the leaf cross-section (including stomata and photosynthesis pathways), the digestive tract, and plant transport tissues (xylem and phloem). Students who revise the content without practising the drawings often freeze when a labelled diagram appears in the exam. Regular drawing practice as part of revision turns passive recognition into an exam-ready skill.</p>
            <p>When calculating magnification, convert the image size and actual size into compatible units before dividing. Follow the answer format, significant-figure instructions and mark scheme for the specific question.</p>

            <InlineImage
              src="/images/blogs/igcse-biology-alveolus-labelling-diagram.webp"
              alt="IGCSE Biology alveolus and capillary diagrams, correct labelling next to common student labelling errors, Ustaad UAE."
            />

            {/* 06 */}
            <SectionHeading num="06" id="how-uae-students-turn-3-mark-answers-into-6-mark-ones">How UAE Students Turn 3-Mark Answers into 6-Mark Ones</SectionHeading>
            <p>For students who are already secure on the content, adopting a short planning habit before writing is often what shifts long-question performance. Three steps make up the plan.</p>
            
            <StepCard title="Step 1: Count">
              Look at the mark value. Jot down enough distinct, relevant ideas to reach the credit total, planned before the first sentence. Do not force every answer into six separate points if the command word rewards developed reasoning.
            </StepCard>
            <StepCard title="Step 2: Chain">
              Slot linking phrases between the ideas ("which causes", "resulting in", "because", "so that", "as a result of", "which allows"). This is what turns a list of facts into the connected reasoning mark schemes reward.
            </StepCard>
            <StepCard title="Step 3: Cross-check">
              Re-read the question stem. Ask: did I address the named process, organ or organism? If not, add one line that names it directly.
            </StepCard>

            <p>Focused technique work can lift long-question performance when the underlying content is already secure. Where content itself is the gap, technique alone will not close it. Individual outcomes vary between students, and the honest starting point is a short diagnostic that separates content gaps from technique gaps.</p>
            
            <div className="bg-[#f4f7fc] p-5 rounded-xl border border-[#0f4a9b]/10 my-6 shadow-sm">
              <p className="font-bold text-[#0a1f3d] mb-2 text-[15px]">Case study. Example diagnostic.</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">A Year 10 Cambridge IGCSE 0610 student in Al Barsha, Dubai was scoring inconsistently on 6-mark questions across mocks. A diagnostic session showed that most lost marks came from writing full-page answers without matching them to the mark-scheme structure. Focused technique work then centred on mark-scheme matching and structured planning.</p>
              
              <p className="font-bold text-[#0a1f3d] mb-2 text-[15px] pt-4 border-t border-[#0f4a9b]/10">Case study. Example diagnostic.</p>
              <p className="text-sm text-gray-700 leading-relaxed">A Year 11 Pearson Edexcel 4BI1 student in Khalifa City, Abu Dhabi had a mock diagnostic that showed lost marks on 6-mark questions clustered around diagram labelling and command-word errors. Sessions focused on those two areas over the following weeks, using past-paper questions from the relevant paper variants. Our <a href="/biology-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline">Biology tutoring in Abu Dhabi</a> page explains how these diagnostics are structured.</p>
            </div>

            {/* 07 */}
            <SectionHeading num="07" id="what-parents-can-do-at-home">What Parents Can Do at Home</SectionHeading>
            <p>Ask your child to show you the last 6-mark question they answered and the mark scheme next to it. Do not review the biology. You do not need to. Ask them to circle every mark-scheme point their answer earned, and every point the mark scheme awards that their answer missed.</p>
            <p>This simple side-by-side reveals what part of the answer is not landing. Sometimes it is content the student never fully learned. Sometimes it is command-word confusion. Sometimes it is answer structure. Different causes need different fixes.</p>
            <p>The second habit to protect is timing. On weekend revision days, set a phone timer for the recommended time per question and hand the student one past-paper 6-marker. When the timer ends, they stop. This trains the pacing needed in the real exam hall.</p>
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

          {/* Related Reading */}
          <div className="mt-8 pt-7 border-t border-slate-100">
            <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-4">Related reading from the Ustaad blog</h3>
            <ul className="space-y-3">
              {RELATED.map((item, i) => (
                <li key={i} className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold text-[#0f4a9b] uppercase tracking-wider">{item.category}</span>
                  <a href={item.url} className="text-[14px] text-gray-700 hover:text-[#0f4a9b] hover:underline transition-colors font-medium">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Share bottom */}
          <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col items-center gap-3">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Found this helpful? Share it</p>
            <SocialShare url={shareUrl} title={BLOG.title} center />
          </div>

          {/* Sources and Transparency */}
          <div className="mt-7 p-5 bg-[#f8fafd] rounded-2xl border border-[#0f4a9b]/10 text-xs text-gray-600 leading-relaxed text-justify space-y-3">
            <h4 className="font-bold text-[#0a1f3d] text-sm mb-2">Sources and Transparency</h4>
            <p>The examination-board information in this article was checked against the official sources listed below. Requirements can vary by paper and examination series, so students should also consult the mark scheme for the exact question they are practising.</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Cambridge IGCSE Biology (0610) syllabus, 2026 to 2028, Cambridge Assessment International Education.</li>
              <li>Pearson Edexcel International GCSE Biology (4BI1) specification, Issue 3, September 2024, Pearson Education.</li>
              <li>Cambridge IGCSE Biology (0610) Paper 4 mark scheme, sample series.</li>
              <li>Pearson Edexcel International GCSE Biology (4BI1) Paper 1B and Paper 2B mark schemes, sample series.</li>
              <li>Cambridge command-word definitions, Cambridge International glossary of command words.</li>
            </ul>
            <p>Student-side patterns are drawn from Ustaad UAE tutor observations across parent-facing counselling and revision sessions. Case study framings are illustrative and not attached to any single named student. If a specific claim in this article does not match your current syllabus, examiner report or mark scheme, please tell us and we will correct it in the next editorial pass.</p>
          </div>

          {/* Author & Reviewer */}
          <div className="mt-7 grid md:grid-cols-2 gap-3">
            <div className="relative rounded-2xl border border-[#0f4a9b]/10 bg-gradient-to-br from-white to-[#f4f7fd] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#0f4a9b] border border-[#0f4a9b]/15 bg-[#0f4a9b]/5">About the Authors</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-28 mt-4">{BLOG.author}</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">This article was prepared by the Ustaad UAE Editorial Team, drawing on published Cambridge Assessment International Education (0610) and Pearson Edexcel (4BI1) syllabus documents, publicly available examiner reports, and mark scheme samples. Visit our <a href="/editorial" className="text-[#0f4a9b] underline">editorial page</a> to see the profiles of the people behind each piece.</p>
            </div>
            <div className="relative rounded-2xl border border-[#C7A24A]/15 bg-gradient-to-br from-white to-[#fdf9f0] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6">Reviewed By</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-24 mt-4">{BLOG.reviewer}</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nida Iqbal holds an MPhil in Education Leadership and Management. She reviewed this article for educational accessibility, tone and parent relevance. Subject-specific mark-scheme review by a current Cambridge 0610 or Pearson 4BI1 specialist is pending.</p>
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
            <p className="text-white font-extrabold text-xl mb-2">Ready for a personalised session?</p>
            <p className="text-white/75 mb-5 max-w-lg mx-auto text-sm">
              A diagnostic session can help identify whether the main difficulty is subject knowledge, command-word interpretation, answer structure or exam timing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="/contact#form"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-sm"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book Your Free Trial →
              </a>
              <a href="https://wa.me/971561249005" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] border border-transparent rounded-full font-bold text-white transition text-sm shadow-md">
                <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
