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
  FileText,
  Download,
  Printer,
  ExternalLink,
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema } from './shared/schemas';
import { WhatsAppIcon } from './shared/WhatsAppIcon';

const BLOG = {
  title: "How to Read an Examiner's Report: The Secret Document That Turns B Grades into A*s | Ustaad",
  titleLine1: "How to Read an Examiner's Report:",
  titleLine2: "The Secret Document That Turns B Grades into A*s",
  h1: "How to Read an Examiner's Report: The Secret Document That Turns B Grades into A*s",
  subtitle:
    "Mark schemes tell you what the answer is. Examiner reports tell you why thousands of students lost marks on it. Here is how Cambridge, Edexcel, and IB students in the UAE can use them to stop bleeding marks.",
  categoryBadge: 'USTAAD UAE · ACADEMIC & EXAM SKILLS',
  slug: 'how-to-read-examiner-reports-igcse-a-level',
  canonical: '/blogs/how-to-read-examiner-reports-igcse-a-level',
  description:
    "Learn how to use Cambridge CAIE, Pearson Edexcel and IB examiner reports to jump grade boundaries. Includes a printable past paper error-log template.",
  heroImage: '/images/blogs/how-to-read-examiner-reports-igcse-a-level-hero.webp',
  heroAlt: 'Secondary school student in the UAE reviewing an official Cambridge examiner report alongside past paper questions',
  heroCaption:
    'The mark scheme shows the right answer. The examiner report reveals the exact reasoning errors and misconceptions that cost candidates marks.',
  datePublished: '2026-10-26',
  dateModified: '2026-10-26',
  publishedText: '26 October 2026',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Curriculum & Academic Review Board',
  reviewerUrl: '/editorial',
  readTime: '10 min read',
  tags: [
    'Examiner Reports',
    'Exam Technique',
    'Cambridge IGCSE',
    'Pearson Edexcel',
    'A-Level Preparation',
    'IB Diploma',
    'Past Paper Revision',
    'Study Skills UAE',
    'Error Log Worksheet'
  ],
};

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

const FAQ_SCHEMA_DATA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is an Examiner Report, and how does it differ from a Mark Scheme?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A mark scheme shows the acceptable answers, keywords, and mark allocations. An Examiner Report (published by Cambridge, Pearson Edexcel, AQA, or the IB after every exam series) is written by the Chief Examiner. It provides a question-by-question analysis of candidate performance, explaining which misconceptions were widespread, where high-achieving students dropped marks, and why specific common phrasings were awarded zero.",
      },
    },
    {
      '@type': 'Question',
      name: "Where can students in Dubai and Abu Dhabi find official Examiner Reports?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For Cambridge (CAIE), reports are published on the School Support Hub and public revision hubs (e.g. PapaCambridge, Dynamic Papers, or your school portal under 'Examiner Reports' or 'Report on the Examination'). For Pearson Edexcel, they are listed alongside question papers under 'Examiner Reports'. For IB Diploma, teachers access Subject Reports on My IB, and copies are shared via school portals.",
      },
    },
    {
      '@type': 'Question',
      name: "When should a student start reading Examiner Reports during revision?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Never start with them before knowing the core content. The ideal time is during the past-paper phase (typically 8 to 12 weeks before mocks or final exams). Whenever you complete a paper under timed conditions, use the mark scheme first to count marks, then open the Examiner Report specifically for the questions you dropped marks on.",
      },
    },
    {
      '@type': 'Question',
      name: "How many past papers should I cross-reference with Examiner Reports?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Three to five full papers per subject cross-referenced in depth are far more valuable than blindly completing twenty papers without reading examiner commentary. Quality of analysis and logging recurring habits beats sheer volume every time.",
      },
    },
    {
      '@type': 'Question',
      name: "Why do examiners penalise students who write correct textbook facts?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Because examination questions frequently test application rather than recall. If a question includes a graph, diagram, or data table ('Referring to Figure 1...'), reciting correct textbook theory without explicitly incorporating values, coordinates, or trends from the stimulus earns zero application marks.",
      },
    },
    {
      '@type': 'Question',
      name: "How does 1-to-1 tutoring help with examiner feedback?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "An experienced tutor acts as an active examiner beside the student. Instead of merely re-explaining the topic, the mentor reviews the student's handwritten scripts, diagnoses the psychological or structural reason behind the lost mark, and enforces board-specific phrasing that guarantees the mark scheme criteria are fulfilled.",
      },
    },
  ],
};

const FAQS = [
  {
    q: "What is an Examiner Report, and how does it differ from a Mark Scheme?",
    a: "A mark scheme shows the acceptable answers, keywords, and mark allocations. An Examiner Report (published by Cambridge, Pearson Edexcel, AQA, or the IB after every exam series) is written by the Chief Examiner. It provides a question-by-question analysis of candidate performance, explaining which misconceptions were widespread, where high-achieving students dropped marks, and why specific common phrasings were awarded zero."
  },
  {
    q: "Where can students in Dubai and Abu Dhabi find official Examiner Reports?",
    a: "For Cambridge (CAIE), reports are published on the School Support Hub and public revision hubs (e.g. PapaCambridge, Dynamic Papers, or your school portal under 'Examiner Reports' or 'Report on the Examination'). For Pearson Edexcel, they are listed alongside question papers under 'Examiner Reports'. For IB Diploma, teachers access Subject Reports on My IB, and copies are shared via school portals."
  },
  {
    q: "When should a student start reading Examiner Reports during revision?",
    a: "Never start with them before knowing the core content. The ideal time is during the past-paper phase (typically 8 to 12 weeks before mocks or final exams). Whenever you complete a paper under timed conditions, use the mark scheme first to count marks, then open the Examiner Report specifically for the questions you dropped marks on."
  },
  {
    q: "How many past papers should I cross-reference with Examiner Reports?",
    a: "Three to five full papers per subject cross-referenced in depth are far more valuable than blindly completing twenty papers without reading examiner commentary. Quality of analysis and logging recurring habits beats sheer volume every time."
  },
  {
    q: "Why do examiners penalise students who write correct textbook facts?",
    a: "Because examination questions frequently test application rather than recall. If a question includes a graph, diagram, or data table ('Referring to Figure 1...'), reciting correct textbook theory without explicitly incorporating values, coordinates, or trends from the stimulus earns zero application marks."
  },
  {
    q: "How does 1-to-1 tutoring help with examiner feedback?",
    a: "An experienced tutor acts as an active examiner beside the student. Instead of merely re-explaining the topic, the mentor reviews the student's handwritten scripts, diagnoses the psychological or structural reason behind the lost mark, and enforces board-specific phrasing that guarantees the mark scheme criteria are fulfilled."
  }
];

const TOC_ITEMS = [
  { label: 'The document top students read (and 96% ignore)', id: 'the-document-top-students-read' },
  { label: 'Mark scheme vs examiner report: the critical distinction', id: 'mark-scheme-vs-examiner-report' },
  { label: 'Where to find official reports (Cambridge, Edexcel, IB)', id: 'where-to-find-reports' },
  { label: 'The 4 recurring traps Chief Examiners report every summer', id: 'four-recurring-examiner-traps' },
  { label: 'The 3-Pass Past Paper Protocol (Black, Green, Purple pen)', id: 'the-three-pass-protocol' },
  { label: 'Attachment 01: Past Paper Error-Log & Audit Matrix', id: 'interactive-attachment-error-log' },
  { label: 'Turning examiner critiques into high-yield flashcards', id: 'turning-critiques-into-flashcards' },
  { label: 'How 1-to-1 mentorship fixes script habits before exam day', id: 'how-mentorship-fixes-script-habits' },
  { label: 'Frequently asked questions', id: 'faqs' },
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

export default function HowToReadExaminerReportsBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handlePrint = () => {
    const printWindow = window.open('/downloads/past-paper-error-log-examiner-audit.pdf', '_blank');
    if (printWindow) {
      printWindow.focus();
    }
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
            { name: "How to Read an Examiner's Report", url: canonical },
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
            timeRequired: 'PT10M',
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
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[180px]">How to Read an Examiner's Report</span>
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
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-left">
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

          {/* Hero image matching exact aspect-[16/9] styling of Silly Mistakes blog */}
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

          {/* ── PROSE CONTENT ── */}
          <div className="space-y-4 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-left">

            {/* SECTION 01 */}
            <SectionHeading num="01" id="the-document-top-students-read">
              The document top students read (and 96% ignore)
            </SectionHeading>

            <p>
              Every August, after more than 300,000 Cambridge (CAIE) and Pearson Edexcel papers have been marked and grade boundaries set, each Principal Examiner writes an unsparing, question-by-question post-mortem. It is formally titled the <strong>Examiner Report</strong> (or <em>Report on the Examination</em>).
            </p>
            <p>
              In top British and IB curriculum international schools across Dubai and Abu Dhabi, from Dubai College and JESS to Cranleigh and BSAK, academic heads of department spend whole inset days dissecting these reports line-by-line. They look for the exact trends where their cohorts slipped.
            </p>
            <p>
              Yet among candidates themselves, fewer than four in a hundred ever download one.
            </p>
            <p>
              Most students treat past papers like vending machines: complete questions, count up marks against the mark scheme, assume a 64% simply means <em>"I need to revise more definitions,"</em> and immediately print another paper. As highlighted in our guide on <a href="/blogs/igcse-preparation-past-papers-final-step" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">why past papers are the final step</a>, that repetition feels industrious, but it repeats identical cognitive mistakes across eight papers in a row.
            </p>
            <p>
              A mark scheme only tells you <strong>what the correct answer was</strong>. The Examiner Report tells you <strong>why thousands of capable students wrote an answer they thought was right, and were awarded zero</strong>.
            </p>

            {/* CALLOUT BOX */}
            <div className="my-5 rounded-xl border border-[#0f4a9b]/12 bg-[#f4f7fc] overflow-hidden">
              <div className="px-4 py-2 border-b border-[#0f4a9b]/10 bg-[#0f4a9b]/5 flex items-center">
                <span className="text-[10px] font-extrabold text-[#0f4a9b] uppercase tracking-[0.13em]">EXAMINER REALITY CHECK</span>
              </div>
              <div className="px-4 py-3.5 text-sm text-gray-700 leading-[1.75] text-left space-y-2">
                <p>
                  Senior examiners do not grade papers to catch students out, but they are legally constrained by board standardisation. When 60% of candidates write the word <em>"equal"</em> instead of <em>"constant"</em> in chemistry equilibrium, examiners cannot award discretion marks. That nuance lives exclusively in the Examiner Report.
                </p>
              </div>
            </div>

            {/* SECTION 02 */}
            <SectionHeading num="02" id="mark-scheme-vs-examiner-report">
              Mark scheme vs examiner report: the critical distinction
            </SectionHeading>

            <p>
              To understand why relying solely on mark schemes stalls grades at a B (Grade 6), compare what each document reveals about the exact same examination question:
            </p>

            <div className="overflow-x-auto my-6 border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0f4a9b]/5 text-[#0a1f3d] font-bold border-b border-slate-200">
                    <th className="p-3">Feature</th>
                    <th className="p-3">The Mark Scheme (MS)</th>
                    <th className="p-3 bg-blue-50/50">The Examiner Report (ER)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-2.5 font-semibold text-slate-800">What it shows</td>
                    <td className="p-2.5 text-slate-600">Accepted keywords &amp; alternative paths.</td>
                    <td className="p-2.5 text-slate-800 bg-blue-50/30 font-medium">Why candidates lost marks &amp; common misconceptions.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-slate-800">Misconceptions</td>
                    <td className="p-2.5 text-slate-600">Notes "Reject [word]" without reasons.</td>
                    <td className="p-2.5 text-slate-800 bg-blue-50/30 font-medium">Explains the false logic behind writing that rejected word.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-slate-800">Student Timing</td>
                    <td className="p-2.5 text-slate-600">Zero commentary on timing or reading habits.</td>
                    <td className="p-2.5 text-slate-800 bg-blue-50/30 font-medium">Highlights which parts were skipped under time pressure.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-slate-800">Grade Jump</td>
                    <td className="p-2.5 text-slate-600">Helps reach Grade 5 or 6 (foundation baseline).</td>
                    <td className="p-2.5 text-slate-800 bg-blue-50/30 font-medium">Bridges the gap between Grade 7 and Grade 9 (or B to A*).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Editorial Image 1: Past Paper Audit Desk */}
            <figure className="my-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] bg-slate-100">
                <img
                  src="/images/blogs/past-paper-audit-diagnostic-desk.webp"
                  alt="Student study desk in the UAE with past paper exam papers, mark schemes, and examiner reports"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-2 text-center text-xs text-gray-400 italic leading-relaxed px-2">
                Cross-referencing past exam scripts with official Examiner Reports turns passive question-drilling into targeted grade repair.
              </figcaption>
            </figure>

            {/* SECTION 03 */}
            <SectionHeading num="03" id="where-to-find-reports">
              Where to find official reports (Cambridge, Edexcel, IB)
            </SectionHeading>

            <p>
              Unlike past papers which are hosted everywhere online, Examiner Reports are occasionally harder to find because exam boards categorise them as teacher resources. Here is the exact path for each major UAE curriculum:
            </p>

            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h4 className="font-bold text-[#0a1f3d] text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0f4a9b]" />
                  Cambridge Assessment International Education (CAIE for IGCSE &amp; A-Level)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Look under <em>Past Papers &amp; Resources</em> on past paper repositories (PapaCambridge, BestExamHelp, or GCE Guide). Look for files ending in <code>_er.pdf</code> (e.g. <code>0580_s24_er.pdf</code> for Summer 2024 IGCSE Maths). CAIE produces one consolidated PDF containing reports for every paper variant (P11, P12, P21, P22, etc.).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h4 className="font-bold text-[#0a1f3d] text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C7A24A]" />
                  Pearson Edexcel (IGCSE &amp; International A-Level)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Search the Pearson qualifications portal under your subject's <em>Specification and sample assessments</em>, then <em>Exam materials</em>, and open <em>Examiner Reports</em>. Edexcel provides detailed question-by-question statistical graphs showing the mean score achieved on every individual question.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h4 className="font-bold text-[#0a1f3d] text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  International Baccalaureate (IB DP &amp; MYP)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The IB publishes official <em>Subject Reports</em> for May and November examination sessions. These are distributed to DP Coordinators via <em>My IB</em> and shared internally via ManageBac or school portals. Ask your subject teacher directly for the May 2024 and May 2025 Subject Reports.
                </p>
              </div>
            </div>

            {/* SECTION 04 */}
            <SectionHeading num="04" id="four-recurring-examiner-traps">
              The 4 recurring traps Chief Examiners report every summer
            </SectionHeading>

            <p>
              Across twenty years of Examiner Reports in sciences, mathematics, humanities, and languages, four behavioural errors account for more than 60% of lost marks among otherwise well-prepared students:
            </p>

            <div className="space-y-3.5 my-5">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <span className="text-[10px] font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Trap 01 · 15-20% Mark Loss
                </span>
                <h4 className="font-bold text-[#0a1f3d] text-sm sm:text-base mt-2 mb-1">The "Textbook Brain Dump"</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  When a question starts with <em>"Using the data in Table 1..."</em> or <em>"Referring to Figure 3..."</em>, candidates write pristine textbook explanations without citing a single figure, coordinate, or trend from the provided stimulus.
                </p>
                <p className="mt-2 text-[11px] font-semibold text-slate-700">
                  <strong>Examiner verdict:</strong> "Candidates showed strong factual knowledge but failed to access Level 2 application marks."
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <span className="text-[10px] font-mono font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Trap 02 · 10-15% Mark Loss
                </span>
                <h4 className="font-bold text-[#0a1f3d] text-sm sm:text-base mt-2 mb-1">The Casual "Explain"</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Treating <em>"Describe"</em> and <em>"Explain"</em> as identical. Students accurately state <em>what</em> happened (e.g. "the rate decreases"), but leave out the biological or physical <em>mechanism</em> (e.g. "fewer successful collisions per second"). Master these distinctions in our guide to <a href="/blogs/command-words-igcse-a-level-exams" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">exam command words</a>.
                </p>
                <p className="mt-2 text-[11px] font-semibold text-slate-700">
                  <strong>Examiner verdict:</strong> "Candidates described the graph shape but offered zero scientific reasons for the change."
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Trap 03 · 8-12% Mark Loss
                </span>
                <h4 className="font-bold text-[#0a1f3d] text-sm sm:text-base mt-2 mb-1">Premature Rounding &amp; Precision</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Rounding intermediate working steps to 2 decimal places in multi-step physics and maths problems. By the final line, compounding rounding errors push the answer just outside the mark scheme's tolerance range.
                </p>
                <p className="mt-2 text-[11px] font-semibold text-slate-700">
                  <strong>Examiner verdict:</strong> "Premature rounding on line 3 cost candidates the final accuracy mark despite correct methods."
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <span className="text-[10px] font-mono font-bold text-purple-600 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Trap 04 · 5-10% Mark Loss
                </span>
                <h4 className="font-bold text-[#0a1f3d] text-sm sm:text-base mt-2 mb-1">Negative Qualifier Blindness</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Under exam adrenaline, the eyes glide right past negative modifiers: <em>"Which of the following is NOT a feature..."</em> or <em>"Explain why this reaction does NOT proceed..."</em>. This cognitive phenomenon is part of <a href="/blogs/why-students-freeze-exam-questions-scaffolding-trap" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">the scaffolding trap that makes students freeze on exams</a>.
                </p>
                <p className="mt-2 text-[11px] font-semibold text-slate-700">
                  <strong>Examiner verdict:</strong> "A significant number answered the affirmative question rather than the negative prompt."
                </p>
              </div>
            </div>

            {/* SECTION 05 */}
            <SectionHeading num="05" id="the-three-pass-protocol">
              The 3-Pass Past Paper Protocol (Black, Green, Purple pen)
            </SectionHeading>

            <p>
              To stop burning through past papers with minimal retention, high-achieving candidates follow the <strong>3-Pass Protocol</strong>. It transforms passive testing into deliberate diagnostic repair:
            </p>

            <div className="space-y-3.5 my-5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  P1
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Pass 1: Timed Execution (Black Pen)</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Sit the paper in exam conditions without books, phone, or music. When time expires, immediately lay down the black pen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/40">
                <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  P2
                </span>
                <div>
                  <h4 className="font-bold text-emerald-950 text-sm">Pass 2: Mark Scheme Audit (Green Pen)</h4>
                  <p className="text-xs text-emerald-900/80 mt-0.5">
                    Mark ruthlessly. If your answer does not have the exact underlined mark-scheme keyword or allowed synonym, award zero. Calculate your baseline raw percentage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-purple-200 bg-purple-50/40">
                <span className="w-7 h-7 rounded-lg bg-purple-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  P3
                </span>
                <div>
                  <h4 className="font-bold text-purple-950 text-sm">Pass 3: Examiner Report Audit (Purple Pen)</h4>
                  <p className="text-xs text-purple-900/80 mt-0.5">
                    Open the Examiner Report for that exact session. Scroll only to the questions you marked zero or partial credit in Pass 2. Read the Chief Examiner's commentary. Note down whether your mistake was a rare slip or one of the cohort's recurring traps.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Image 2: The 3-Pass Protocol in practice */}
            <figure className="my-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] bg-slate-100">
                <img
                  src="/images/blogs/three-pass-protocol-study-desk.webp"
                  alt="High school student in the UAE using black, green, and purple pens to audit exam past papers alongside the examiner report"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-2 text-center text-xs text-gray-400 italic leading-relaxed px-2">
                The 3-Pass Protocol in action: timed black-pen execution, mark scheme marking in green, and examiner post-mortem diagnosis in purple.
              </figcaption>
            </figure>

            {/* SECTION 06: ATTACHMENT DOWNLOAD CARD */}
            <SectionHeading num="06" id="interactive-attachment-error-log">
              Attachment 01: Past Paper Error-Log &amp; Audit Sheet (PDF)
            </SectionHeading>

            <p>
              Use the official Ustaad <strong>Past Paper Error-Log &amp; Examiner Audit Sheet</strong> after every timed past paper to classify lost marks into the four examiner audit categories, identify your cognitive error patterns, and formulate one strict rule for your next paper.
            </p>

            {/* ATTACHMENT CARD */}
            <div className="my-7 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-[#0f4a9b]/8 text-[#0f4a9b] flex items-center justify-center shrink-0 border border-[#0f4a9b]/12 shadow-2xs">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0f4a9b]/8 text-[#0f4a9b] text-[10.5px] font-extrabold uppercase tracking-wider mb-1">
                      Study Attachment · 01
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-[#0a1f3d] tracking-tight leading-snug truncate">
                      Past Paper Error-Log &amp; Examiner Audit Sheet
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 truncate">
                      1-Page Printable A4 Vector PDF · Cambridge, Pearson Edexcel &amp; IB
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <button
                    onClick={handlePrint}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition shadow-2xs"
                    title="Print A4"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-500" />
                    <span>Print</span>
                  </button>
                  <a
                    href="/downloads/past-paper-error-log-examiner-audit.pdf"
                    download="Ustaad_Past_Paper_Error_Log_Examiner_Audit.pdf"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] hover:brightness-110 hover:shadow-lg hover:shadow-[#C7A24A]/30 transition transform hover:-translate-y-0.5 active:scale-95 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>

            {/* SECTION 07 */}
            <SectionHeading num="07" id="turning-critiques-into-flashcards">
              Turning examiner critiques into high-yield flashcards
            </SectionHeading>

            <p>
              Once you identify a recurring misconception from the Examiner Report, do not leave it on the paper. The fastest way to lock in the correction is to write a <strong>Two-Sided Examiner Flashcard</strong> (in Anki, Quizlet, or on index cards):
            </p>

            <div className="space-y-3 my-5">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                <span className="text-[10px] font-bold text-[#0f4a9b] uppercase tracking-wider block mb-1">
                  Flashcard 1 · Physics Wave Motion
                </span>
                <p className="text-xs font-bold text-slate-800 mb-1.5">
                  Front: What do candidates regularly confuse about longitudinal sound waves?
                </p>
                <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium">
                  <strong>Back:</strong> Particles vibrate parallel to wave energy direction; sound waves do NOT physically carry air particles to the ear.
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                <span className="text-[10px] font-bold text-[#0f4a9b] uppercase tracking-wider block mb-1">
                  Flashcard 2 · Economics &amp; Business
                </span>
                <p className="text-xs font-bold text-slate-800 mb-1.5">
                  Front: What is the single word missing that stops evaluation marks in an 8-mark question?
                </p>
                <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium">
                  <strong>Back:</strong> A judgment criterion: "However, the success depends primarily on [interest rates / consumer confidence] because..."
                </div>
              </div>
            </div>

            {/* SECTION 08 */}
            <SectionHeading num="08" id="how-mentorship-fixes-script-habits">
              How 1-to-1 mentorship fixes script habits before exam day
            </SectionHeading>

            <p>
              Auditing an examiner report on your own requires high metacognition. Teenagers revising alone often justify their mistakes: <em>"I knew what I meant,"</em> or <em>"The examiner was being too harsh."</em>
            </p>
            <p>
              That rationalisation is dangerous because the real examiner in June will be just as unforgiving.
            </p>
            <p>
              This is where experienced private mentorship creates disproportionate gains. When an <a href="/tutors" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">Ustaad tutor</a> sits with an IGCSE or A-Level student in Dubai or Abu Dhabi, they don't simply reteach a syllabus chapter from scratch. They review the student's actual handwritten past papers, annotate the script with board-specific criteria, and run targeted 5-minute drills until full credit is earned on demand. Explore our dedicated <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">exam preparation tutoring</a> to target script gaps early.
            </p>

            {/* Editorial Image 3: 1-to-1 script diagnostic session */}
            <figure className="my-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] bg-slate-100">
                <img
                  src="/images/blogs/examiner-script-diagnostic-mentorship.webp"
                  alt="Student in Dubai working 1-to-1 with an Ustaad tutor reviewing handwritten exam scripts against mark scheme standards"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-2 text-center text-xs text-gray-400 italic leading-relaxed px-2">
                1-to-1 examiner mentorship identifies subtle script errors that mark schemes overlook, training students to hit Level 3 criteria systematically.
              </figcaption>
            </figure>

            {/* FIRST SESSION CTA BOX */}
            <div
              className="my-8 rounded-2xl p-6 border border-white/10 text-white text-center relative overflow-hidden shadow-xl"
              style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] rounded-full mb-3 text-[10px] font-extrabold tracking-wider uppercase">
                FIRST SESSION DIAGNOSTIC
              </div>
              <h3 className="text-base sm:text-xl font-extrabold text-white mb-2 leading-snug max-w-lg mx-auto">
                Is your child losing marks to content gaps, or examiner traps?
              </h3>
              <p className="text-xs sm:text-[13px] text-white/85 leading-relaxed mb-5 max-w-md mx-auto">
                In the first lesson, an Ustaad curriculum specialist audits your child's recent exam scripts, identifies which of the 4 examiner traps are draining grades, and builds an exact board-matched recovery plan. Every first lesson includes a free 15-minute orientation.
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
                  href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I'd%20like%20to%20book%20a%20script%20diagnostic%20session%20for%20my%20child."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-xs sm:text-sm transition shadow-md w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" /> Ask on WhatsApp
                </a>
              </div>
            </div>

            {/* SECTION 09: FAQS */}
            <SectionHeading num="09" id="faqs">
              Frequently asked questions
            </SectionHeading>

            <div className="flex flex-col gap-2 my-5">
              {FAQS.map((faq, i) => {
                const isOpen = activeFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : i)}
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
                          className="ml-[28px]"
                        >
                          <div
                            className="flex items-start gap-2.5 rounded-2xl border p-3.5"
                            style={{
                              background: '#f8fafc',
                              borderColor: 'rgba(15,74,155,0.12)',
                              boxShadow: '0 3px 12px rgba(15,74,155,0.05)'
                            }}
                          >
                            <p className="flex-1 text-gray-600 text-[13px] leading-relaxed text-left">{faq.a}</p>
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

          </div>

          {/* ── AUTHOR BOX ── */}
          <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-[#0a1f3d] text-sm mb-1">
              Written by <a href={BLOG.authorUrl} className="hover:underline text-[#0f4a9b]">{BLOG.author}</a>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-1.5">
              Nimra writes about the study problems UAE parents and students experience at home: children who revise diligently for hours but still lose marks, exam timing panic, and bridging the gap between textbook understanding and exam-board mark schemes.
            </p>
            <div className="text-[11px] text-slate-500">
              Curriculum Review by <a href={BLOG.reviewerUrl} className="font-semibold text-[#0f4a9b] hover:underline">Ustaad Editorial Team</a> · Verified for Cambridge, Pearson Edexcel and IB alignment.
            </div>
          </div>

          {/* ── RELATED ARTICLES ── */}
          <div className="mt-10 pt-6 border-t border-slate-200">
            <h3 className="text-base font-bold text-[#0a1f3d] mb-3">
              Related Guides for UAE Parents &amp; Students
            </h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/blogs/command-words-igcse-a-level-exams"
                className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#0f4a9b] transition group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9.5px] font-bold text-[#0f4a9b] uppercase tracking-wider block mb-1">Exam Technique</span>
                  <h4 className="font-bold text-xs text-slate-900 group-hover:text-[#0f4a9b] transition leading-snug">
                    The One Word in Every Exam Question That Decides Your Marks
                  </h4>
                </div>
                <span className="text-[11px] font-bold text-[#0f4a9b] mt-2.5 inline-flex items-center gap-1">
                  Read guide
                </span>
              </a>

              <a
                href="/blogs/why-students-freeze-exam-questions-scaffolding-trap"
                className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#0f4a9b] transition group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9.5px] font-bold text-purple-700 uppercase tracking-wider block mb-1">Cognitive Psychology</span>
                  <h4 className="font-bold text-xs text-slate-900 group-hover:text-purple-700 transition leading-snug">
                    The Scaffolding Trap: Why Students Freeze on Exam Questions
                  </h4>
                </div>
                <span className="text-[11px] font-bold text-purple-700 mt-2.5 inline-flex items-center gap-1">
                  Read guide
                </span>
              </a>

              <a
                href="/blogs/silly-mistakes-maths-exams"
                className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#0f4a9b] transition group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9.5px] font-bold text-[#C7A24A] uppercase tracking-wider block mb-1">Maths Checking</span>
                  <h4 className="font-bold text-xs text-slate-900 group-hover:text-[#C7A24A] transition leading-snug">
                    Silly Mistakes in Maths Exams: 3-Minute Checking Routine
                  </h4>
                </div>
                <span className="text-[11px] font-bold text-[#C7A24A] mt-2.5 inline-flex items-center gap-1">
                  Read guide
                </span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
