import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle, ShieldCheck, CheckCircle2, FileText, ExternalLink, Download } from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { faqSchema } from './shared/schemas';

const BLOG = {
  title: 'A-Level Tutoring in the UAE and Independent Thinking | Ustaad',
  titleLine1: 'USTAAD UAE · A-LEVEL STUDY PSYCHOLOGY',
  titleLine2: 'A-Level Tutoring in the UAE Starts With Independent Thinking',
  slug: 'a-level-tutoring-uae-independent-thinking',
  description: 'UAE A-Level exams move to portfolios and coursework in 2026, so more past papers are not enough. See how independent thinking lifts your teen\'s grades.',
  heroImage: '/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp',
  heroAlt: 'A-Level tutoring session in the UAE supporting Cambridge, Pearson Edexcel and OxfordAQA students',
  heroCaption: 'Doing more past papers is not enough for A-Level. See how independent thinking lifts your teenager\'s grades.',
  datePublished: '2026-08-24',
  dateModified: '2026-08-24',
  author: 'Nimra Shahzada, Content Lead, Ustaad UAE',
  reviewer: 'Nida Iqbal, MPhil in Education Leadership and Management',
  readTime: '8 min read',
  tags: ['A-Level', 'A-Level Tutoring', 'UAE Education', 'Independent Thinking', 'Cambridge A-Level', 'Edexcel A-Level', 'Dubai Tutors', 'Abu Dhabi Tutors'],
};

const FAQS = [
  {
    q: 'If assessment is portfolio based, does tutoring still help?',
    a: 'It helps more, not less. Portfolios and coursework grades reward sustained, authentic work and clear reasoning across the year, which is exactly what good tutoring develops. A tutor cannot complete the work for a student, because teachers must verify the work was produced by the student themselves, so the value lies in coaching real skill.',
  },
  {
    q: 'How is independent thinking different from just being clever?',
    a: 'It is a habit, not a fixed trait. Also called self-regulated learning, it is the trained willingness to start an unfamiliar question, choose a method and adjust when needed. Most students can develop it with the right coaching, whatever their current grade.',
  },
  {
    q: 'How long before we see a grade change?',
    a: 'Families usually notice a shift in confidence within four to six weeks, with grade movement following over a term. The pace depends on how entrenched the habit is and how consistently the new routines are practised at home and in school.',
  },
  {
    q: 'Does this apply to every A-Level subject and exam board?',
    a: 'Yes. In sciences and maths it shows in method selection, in essay subjects it shows in argument and evaluation. The underlying skill of committing to your own reasoning stays the same across Cambridge, Edexcel and OxfordAQA courses, whether lessons are in person or online.',
  },
];

const TOC_ITEMS = [
  { label: 'What is independent thinking at A-Level?', id: 'what-is-independent-thinking-at-a-level' },
  { label: 'The year the exam hall went quiet', id: 'the-year-the-exam-hall-went-quiet' },
  { label: 'Why more past papers stopped working', id: 'why-more-past-papers-stopped-working' },
  { label: 'What independent thinking looks like at A-Level', id: 'what-independent-thinking-looks-like-at-a-level' },
  { label: 'Why some students stop improving', id: 'why-some-students-stop-improving' },
  { label: 'How good A-Level tutoring in the UAE develops independent thinkers', id: 'how-good-a-level-tutoring-in-the-uae-develops-independent-thinkers' },
  { label: 'Practical tips for parents', id: 'practical-tips-for-parents' },
  { label: 'Frequently asked questions', id: 'frequently-asked-questions' },
  { label: 'Book a free A-Level trial', id: 'book-a-free-a-level-trial' },
  { label: 'Sources and further reading', id: 'sources-and-further-reading' },
];

const RELATED = [
  {
    slug: 'physics-understanding-vs-marks',
    category: 'Physics & Study Skills',
    title: 'Why Physics Understanding Does Not Mean High Marks',
    description: 'Comprehension is not the same as exam execution. Learn how to bridge the gap between understanding concepts and earning top marks.',
  },
  {
    slug: 'exam-panic-before-exams-uae',
    category: 'Parent Guidance',
    title: 'What UAE Parents Miss About Exam Panic Right Before Exams',
    description: 'A closer look at why exam anxiety peaks in the final days before papers — and how parents can help protect working memory.',
  },
  {
    slug: 'igcse-vs-gcse-curriculum-differences-uae',
    category: 'Parent Guidance',
    title: 'IGCSE vs GCSE: Curriculum Differences UAE Parents Should Know',
    description: 'Understanding British curriculum pathways, exam board variations, and choosing the right track for your child in the UAE.',
  },
  {
    slug: 'read-uae-school-report-card',
    category: 'Parent Guidance',
    title: 'How to Read a UAE School Report Card Like an Education Counsellor',
    description: 'Learn to decode grade reports, spot hidden learning gaps early, and build a targeted support strategy.',
  },
];

function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-10 mb-4 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/50 mb-1">{num}</span>
      <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h2>
    </div>
  );
}

function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 p-4 sm:p-5 rounded-2xl border-l-4 border-[#0f4a9b] bg-[#f8fafd] text-[#0a1f3d] text-xs sm:text-sm leading-relaxed shadow-sm">
      {children}
    </div>
  );
}

function TOC({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-[#f8fafd] overflow-hidden transition-all shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left font-extrabold text-[#0a1f3d] text-xs sm:text-sm tracking-wide uppercase bg-slate-100/60 hover:bg-slate-100 transition"
      >
        <span className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-[#0f4a9b]" />
          In this guide ({TOC_ITEMS.length} sections)
        </span>
        {open ? <ChevronUp className="h-4 w-4 text-gray-500" /> : <ChevronDown className="h-4 w-4 text-gray-500" />}
      </button>

      <div className={`px-4 pb-4 pt-2 ${open ? 'block' : 'hidden sm:block'}`}>
        <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2 pt-2 border-t border-slate-200/60">
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
              <span className="text-xs sm:text-[13px] text-gray-600 group-hover:text-[#0f4a9b] transition-colors leading-snug">{item.label}</span>
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
                style={{ width: 36, height: 36, minWidth: 36, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms, color 300ms', border: 'none', cursor: 'pointer' }}
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
                  className="ml-0 sm:ml-[48px] mt-1"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="flex items-start gap-2.5 rounded-2xl border p-4 bg-[#f8fafc] border-[#0f4a9b]/15 shadow-sm">
                    <p className="flex-1 text-gray-600 text-xs sm:text-[13px] leading-relaxed text-left" itemProp="text">
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

export default function ALevelIndependentThinkingBlog() {
  const [tocOpen, setTocOpen] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://ustaad.ae/blogs/${BLOG.slug}`;

  const customArticleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": BLOG.titleLine2,
    "description": BLOG.description,
    "image": `https://ustaad.ae${BLOG.heroImage}`,
    "datePublished": BLOG.datePublished,
    "dateModified": BLOG.dateModified,
    "timeRequired": "PT8M",
    "author": {
      "@type": "Person",
      "name": "Nimra Shahzada",
      "url": "https://ustaad.ae/authors/nimra-shahzada",
      "jobTitle": "Content Lead",
      "worksFor": {
        "@type": "Organization",
        "name": "Ustaad UAE"
      }
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "Ustaad UAE",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ustaad.ae/logo.png"
      }
    },
    "reviewedBy": {
      "@type": "Person",
      "name": "Nida Iqbal",
      "url": "https://ustaad.ae/authors/nida-iqbal",
      "jobTitle": "Editorial Reviewer",
      "description": "MPhil in Education Leadership and Management"
    }
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blogs' },
    { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
    { name: 'A-Level Independent Thinking', url: `/blogs/${BLOG.slug}` }
  ];

  return (
    <Layout>
      <SEOHead
        title={BLOG.title}
        description={BLOG.description}
        canonical={`/blogs/${BLOG.slug}`}
        author="Nimra Shahzada"
        preloadHeroImage={BLOG.heroImage}
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

      {/* Header / Hero Header Section */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50/20 to-white pt-8 pb-10 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
              <li>
                <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1">
                  <Home className="h-3 w-3" /> Home
                </a>
              </li>
              <li><ChevronRightIcon className="h-3 w-3 text-gray-300" /></li>
              <li>
                <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
              </li>
              <li><ChevronRightIcon className="h-3 w-3 text-gray-300" /></li>
              <li>
                <a href="/blogs/psychology-of-learning" className="hover:text-[#0f4a9b] transition">Psychology of Learning</a>
              </li>
              <li><ChevronRightIcon className="h-3 w-3 text-gray-300" /></li>
              <li className="text-gray-800 font-medium truncate max-w-[200px] sm:max-w-none">
                A-Level Independent Thinking
              </li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 mb-3">
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">{BLOG.titleLine1}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.25] mb-3">
              {BLOG.titleLine2}
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-4 text-left sm:text-justify">{BLOG.description}</p>

            {/* Meta Byline Box */}
            <div className="mb-4 mt-2 space-y-2 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Written by:</span> <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">Nimra Shahzada</a>, Content Lead, Ustaad UAE
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Reviewed by:</span> <a href="/authors/nida-iqbal" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">Nida Iqbal</a>, MPhil in Education Leadership and Management
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 pt-1 border-t border-slate-100 mt-2">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  Last updated: July 2026 · Fact-checked against official exam-board sources (July 2026)
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A]" />{BLOG.readTime}
                </span>
                <SocialShare url={shareUrl} title={BLOG.title} />
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.figure initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-0">
            <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_40px_rgba(15,74,155,0.12)]">
              <img src={BLOG.heroImage} alt={BLOG.heroAlt} fetchPriority="high" className="w-full h-auto block" />
            </div>
            <figcaption className="mt-2 text-center text-xs text-gray-400 italic leading-relaxed px-2">{BLOG.heroCaption}</figcaption>
          </motion.figure>

          {/* Table of Contents */}
          <TOC open={tocOpen} setOpen={setTocOpen} />
        </div>
      </section>

      {/* Main Article Body */}
      <article className="pb-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-sm lg:text-[15px] leading-[1.8] [&_p]:text-left sm:[&_p]:text-justify [&_p]:mb-4">
            
            {/* Trust Box Card */}
            <div className="my-6 p-4 sm:p-5 bg-[#f8fafd] border border-slate-200 rounded-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                <h3 className="font-extrabold text-[#0a1f3d] text-xs uppercase tracking-wider">Why you can trust this guide</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0 text-left">
                Every July, a version of the same conversation reaches me. On social media, in parent groups, and in messages from families across Dubai and Abu Dhabi, the worry is always the same. Their teenager has done everything right. They finished the textbook, sat through every revision class and worked through stacks of past papers, yet the grade still will not move past a C or a B.
              </p>
            </div>

            {/* Intro Lead */}
            <p>
              The question that follows is usually the same too: does my child simply need more practice? Having spent years writing about A-Level tutoring in the UAE and working alongside the tutors who deliver it, I can tell you the honest answer is usually no. What most A-Level students are missing is not another paper. It is the confidence to think for themselves.
            </p>

            {/* Section 01 */}
            <SectionHeading num="01" id="what-is-independent-thinking-at-a-level">What is independent thinking at A-Level?</SectionHeading>
            <p>
              Independent thinking at A-Level is a student's ability to approach an unfamiliar question without a memorised template: to analyse what is being asked, choose a suitable method, and justify each step on their own.
            </p>
            <p>
              It draws on critical thinking, metacognition and problem-solving rather than recall alone. It is the skill that separates a grade B from an A or A*, because top marks reward reasoning applied to new problems.
            </p>

            {/* Section 02 */}
            <SectionHeading num="02" id="the-year-the-exam-hall-went-quiet">The year the exam hall went quiet</SectionHeading>
            
            <Blockquote>
              <strong>THE 2026 EXAM CHANGES:</strong> The 2026 exam changes mean students can no longer rely on last-minute cramming to get through.
            </Blockquote>

            <p>
              This year the point matters more than ever. For the May and June 2026 series, Cambridge, Pearson Edexcel and OxfordAQA all cancelled their A-Level exams in the UAE, a decision taken with the authorities after regional disruption. In place of the single timed paper, each board now builds grades from a portfolio of evidence gathered across the year.
            </p>
            <p>
              The detail differs by board. Cambridge grades a portfolio of work marked against the syllabus assessment objectives, with teachers confirming the work is the student's own. Pearson Edexcel awards grades from a portfolio that can include past papers, mock exams and predicted grades. OxfordAQA uses banked unit results, or a portfolio assessed by its examiners where a student has none.
            </p>
            <p>
              The common thread is simple. A grade built from a year of work cannot be crammed the night before. It rewards the teenager who can plan an answer, defend a method and apply an idea to a problem they have not seen before, the exact skill that endless drilling never taught them.
            </p>

            {/* Section 03 */}
            <SectionHeading num="03" id="why-more-past-papers-stopped-working">Why more past papers stopped working</SectionHeading>

            <Blockquote>
              <strong>ANALYTICAL REASONING vs MEMORISATION:</strong> Doing more papers builds speed, but the marks go to students who can reason.
            </Blockquote>

            <p>
              Practice is not the enemy. A sound exam technique matters, and methods like active recall and retrieval practice genuinely strengthen memory, which is why they earn their place in revision. The problem starts when families treat volume as the whole plan. They hope the twentieth past paper will unlock the grade the previous nineteen did not.
            </p>
            <p>
              At A-Level, the top marks are not given for repeating a method from memory. They are given for choosing the right method, explaining why it works, and adjusting when the question changes. That is analytical reasoning, and it is a different skill from recall. A student can memorise fifty worked solutions and still freeze when an examiner rewords the question, because they were trained to remember, not to think.
            </p>

            {/* Comparison Table */}
            <div className="my-6 overflow-x-auto rounded-2xl border border-[#0f4a9b]/20 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
                <thead>
                  <tr className="bg-[#0f4a9b] text-white">
                    <th className="p-3.5 font-extrabold text-xs tracking-wider uppercase border-b border-[#0f4a9b]/20 w-1/4">Feature</th>
                    <th className="p-3.5 font-extrabold text-xs tracking-wider uppercase border-b border-[#0f4a9b]/20 w-3/8">Past paper practice alone</th>
                    <th className="p-3.5 font-extrabold text-xs tracking-wider uppercase border-b border-[#0f4a9b]/20 w-3/8">Independent thinking</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-gray-700">
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3.5 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Main focus</td>
                    <td className="p-3.5">Repeats familiar question types</td>
                    <td className="p-3.5 font-medium text-[#0a1f3d]">Applies methods to unfamiliar problems</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3.5 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Skill trained</td>
                    <td className="p-3.5">Recall and speed</td>
                    <td className="p-3.5 font-medium text-[#0a1f3d]">Reasoning, analysis and judgement</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3.5 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">When the question changes</td>
                    <td className="p-3.5 text-rose-600 font-medium">The student freezes</td>
                    <td className="p-3.5 text-emerald-700 font-semibold">The student adapts the method</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3.5 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Fit with 2026 portfolios</td>
                    <td className="p-3.5">Limited; work can look rehearsed</td>
                    <td className="p-3.5 font-medium text-[#0a1f3d]">Strong; shows genuine understanding</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3.5 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Typical ceiling</td>
                    <td className="p-3.5 text-amber-700 font-medium">Plateaus around B or C</td>
                    <td className="p-3.5 text-[#0f4a9b] font-bold">Reaches the top bands (A / A*)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 04 */}
            <SectionHeading num="04" id="what-independent-thinking-looks-like-at-a-level">What independent thinking looks like at A-Level</SectionHeading>

            <Blockquote>
              <strong>THE FIRST SIXTY SECONDS:</strong> It shows in how a student starts a hard question, not whether they finish it.
            </Blockquote>

            <p>
              When Ustaad's tutors watch two students meet the same unfamiliar problem, the difference is obvious in the first sixty seconds. The dependent student scans for a matching example and stalls when none appears. The self-regulated student annotates the question, notes what is given, asks what the examiner is really testing and commits to a first step even without certainty.
            </p>
            <p>
              That opening move is everything. In a Cambridge 9709 mechanics question or a 9701 chemistry synthesis, the marks live in the thinking, and that thinking only begins once a student trusts their own judgement enough to start. This kind of cognitive flexibility is not raw talent. It is a trained habit of starting before you feel ready.
            </p>

            {/* Section 05 */}
            <SectionHeading num="05" id="why-some-students-stop-improving">Why some students stop improving</SectionHeading>

            <Blockquote>
              <strong>DEPENDENCE vs CONFIDENCE:</strong> Leaning on model answers slowly chips away at a student's willingness to be wrong.
            </Blockquote>

            <p>
              With a background in psychology, I read this stall as an emotional pattern as much as an academic one. Teenagers who have always been rewarded for neat, correct answers can develop a real fear of the blank page. Every past paper studied with the answers open beside it sends one quiet message: the right method already exists, so find it, do not create it. Over a year, this teaches dependence. The student gets good at spotting solutions and anxious about producing their own.
            </p>
            <p>
              This is not only opinion. Reviewing hundreds of studies, the Education Endowment Foundation finds that metacognition and self-regulated learning, teaching students to plan, monitor and evaluate their own work, add around eight months of extra progress over a year. Retrieval practice and active recall build memory, but the larger gains come when a student also learns to manage and question their own thinking. The way out of the plateau is that same habit: asking why a method works rather than just copying it, so that not knowing feels like the start of learning instead of proof of failure.
            </p>

            {/* Section 06 */}
            <SectionHeading num="06" id="how-good-a-level-tutoring-in-the-uae-develops-independent-thinkers">How good A-Level tutoring in the UAE develops independent thinkers</SectionHeading>

            <Blockquote>
              <strong>COACHING OVER SPOON-FEEDING:</strong> The right tutor talks less and asks better questions.
            </Blockquote>

            <p>
              This is where thoughtful tutoring earns its place. A tutor who spoon-feeds every answer keeps a student comfortable but dependent. Whether your child needs a Cambridge A-Level tutor in the UAE or an Edexcel A-Level tutor, the approach that works is the same, and it works across Maths, Physics, Chemistry and Economics. The tutors I work alongside coach students to think for themselves and practise with purpose rather than handing over solutions.
            </p>
            <p>
              They pass the pen back, they ask a student to attempt the first line before any hint, they treat a wrong step as useful information, and they step back gradually as the student's judgement steadies. The aim of every session is a student who needs the tutor less next week, not more.
            </p>

            {/* Case Studies Card */}
            <div className="my-6 p-5 bg-[#f8fafd] border border-slate-200 rounded-2xl space-y-4">
              <h3 className="font-extrabold text-[#0a1f3d] text-sm uppercase tracking-wider">Real Student Case Studies</h3>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200/80">
                <p className="text-xs font-bold text-[#0f4a9b] mb-1">Dubai Student · Cambridge 9702 Physics</p>
                <p className="text-xs text-gray-600 leading-relaxed mb-0">
                  One Year 13 student in Al Barsha, Dubai, sitting Cambridge 9702 physics, had a wall of past papers and a stubborn C. Her Ustaad tutor stopped marking papers and spent three weeks on a single instruction: explain your first step out loud before writing. Her portfolio work moved to an A because she finally trusted her own reasoning.
                </p>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200/80">
                <p className="text-xs font-bold text-[#0f4a9b] mb-1">Abu Dhabi Student · Edexcel A-Level Economics</p>
                <p className="text-xs text-gray-600 leading-relaxed mb-0">
                  A Year 12 student in Al Reem Island, Abu Dhabi, preparing Edexcel A-Level economics, could recite every model but froze on data-response questions. Working with his tutor on exam technique, he practised committing to an argument before checking it against his notes, and his evaluation marks lifted from a low D to a B.
                </p>
              </div>
            </div>

            <p>
              If your teenager is stuck on a plateau like this, a single diagnostic session with an Ustaad mentor can show you exactly where the dependence is holding the grade back.
            </p>
            <p>
              Based in the capital? See how our <a href="/a-level-tutor-abu-dhabi" className="text-[#0f4a9b] font-bold underline">A-Level tutoring in Abu Dhabi</a> works one to one, or explore the <a href="/a-level" className="text-[#0f4a9b] font-bold underline">full A-Level tutoring programme</a>.
            </p>

            {/* Section 07 */}
            <SectionHeading num="07" id="practical-tips-for-parents">Practical tips for parents</SectionHeading>

            <Blockquote>
              <strong>FIVE HOME HABITS:</strong> Five small habits at home that protect your child's ability to think for themselves.
            </Blockquote>

            <p>
              You do not need to teach the syllabus to help. You just need to change how you respond when your child is stuck. These five habits do more than any extra worksheet.
            </p>

            <div className="my-6 space-y-3">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d] mb-1">Ask “What have you tried so far?” before you help</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0">It makes your child show their thinking instead of waiting for yours.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d] mb-1">Use a ten-minute rule</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0">When they hit a wall, they try alone for ten minutes before asking anyone, so their brain does the first work.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d] mb-1">Praise the method, not the mark</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0">Say “I like how you worked that out,” so effort and reasoning feel rewarded even when the answer is wrong.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d] mb-1">Keep the model answer closed until they attempt it</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0">Let them produce a first version before comparing it to the mark scheme.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d] mb-1">Ask them to teach you one idea a week</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0">Explaining it out loud exposes gaps far better than silently rereading notes.</p>
                </div>
              </div>
            </div>

            {/* Downloadable Resource Box */}
            <div className="my-8 p-5 bg-gradient-to-br from-[#0f4a9b]/5 via-blue-50/40 to-slate-50 border border-[#0f4a9b]/20 rounded-2xl text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0f4a9b] text-white mb-3 shadow-sm">
                <Download className="h-5 w-5" />
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-[#0a1f3d] mb-1">Free Download for Parents</h4>
              <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mb-4 leading-relaxed">
                Keep these five habits on the fridge. Download <strong>The Parent’s Independent Thinking Toolkit (PDF)</strong>, a one-page printable guide you can use tonight.
              </p>
              <a
                href="/contact#form"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm text-white shadow-md hover:brightness-110 transition"
                style={{ background: 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)' }}
              >
                Request Free Printable PDF Guide →
              </a>
            </div>

            <p>
              For the emotional side of this, read <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-bold underline">what UAE parents miss about exam panic</a>, and if your child understands the work but marks stay low, see <a href="/blogs/physics-understanding-vs-marks" className="text-[#0f4a9b] font-bold underline">why understanding does not always show in the grade</a>.
            </p>

            {/* Section 08 */}
            <SectionHeading num="08" id="frequently-asked-questions">Frequently asked questions</SectionHeading>
            <FAQAccordion />

            {/* Section 09 */}
            <SectionHeading num="09" id="book-a-free-a-level-trial">Book a free A-Level trial</SectionHeading>
            <p>
              Ready to help your teenager think for themselves rather than drill in circles? Book a free trial session of online A-Level tutoring in the UAE. In that first hour, your child's tutor runs a short diagnostic to find where the reasoning breaks down, gives personalised feedback on a real exam question, and maps a simple study plan you keep. There is no obligation, and you leave with the plan either way.
            </p>

            {/* Section 10 */}
            <SectionHeading num="10" id="sources-and-further-reading">Sources and further reading</SectionHeading>
            <p className="text-xs text-gray-500 mb-3">Every claim about the 2026 assessment changes and the learning research is drawn from these primary sources:</p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold">•</span>
                <span><strong>Cambridge International:</strong> Portfolio of Evidence (June 2026 series guidance)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold">•</span>
                <span><strong>Pearson Edexcel:</strong> Arrangements for International GCSE and A Level exams, May/June 2026</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold">•</span>
                <span><strong>OxfordAQA:</strong> Support for schools in the Gulf and Middle East region</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold">•</span>
                <span><strong>Education Endowment Foundation:</strong> Metacognition and Self-Regulated Learning Evidence Review</span>
              </li>
            </ul>

            {/* Section 11 - Meet the Writers E-E-A-T Block */}
            <div id="meet-the-writers" className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="text-base font-extrabold text-[#0a1f3d] mb-2">Meet the writers behind Ustaad UAE</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Our articles are written by content specialists, reviewed by qualified educators, and fact-checked against primary sources before they are published. You can read more about our <a href="/editorial" className="text-[#0f4a9b] font-bold underline">editorial standards</a> and the people behind each piece.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#f8fafd] border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-[#C7A24A]" />
                    <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">About the Author</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-0">
                    <a href="/authors/nimra-shahzada" className="font-bold text-[#0f4a9b] underline">Nimra Shahzada</a> is a content lead at Ustaad with a background in psychology. She writes about the learning habits, motivation and study psychology behind strong A-Level results in the UAE, working closely with the tutors who teach these students.
                  </p>
                </div>

                <div className="p-4 bg-[#f8fafd] border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-[#C7A24A]" />
                    <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Reviewed by</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-0">
                    <a href="/authors/nida-iqbal" className="font-bold text-[#0f4a9b] underline">Nida Iqbal</a> holds an MPhil in Education Leadership and Management and reviews Ustaad's academic guidance for accuracy and curriculum alignment.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles Cards */}
            <div className="mt-10 pt-6 border-t border-slate-200">
              <h3 className="text-sm font-extrabold text-[#0a1f3d] mb-4 uppercase tracking-wider">Related Articles for UAE Parents</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {RELATED.map((item, i) => (
                  <a key={i} href={`/blogs/${item.slug}`} className="group p-4 bg-slate-50 hover:bg-[#0f4a9b]/[0.03] border border-slate-200 rounded-2xl transition">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f4a9b]">{item.category}</span>
                    <h4 className="text-xs font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mt-0.5 mb-1">{item.title}</h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Share */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-medium text-gray-500">Found this helpful? Share with other UAE parents:</span>
              <SocialShare url={shareUrl} title={BLOG.title} />
            </div>

            {/* Bottom Dark Blue CTA Banner */}
            <div
              className="mt-12 mb-2 rounded-3xl p-6 sm:p-8 lg:p-10 text-center text-white shadow-xl"
              style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-3 tracking-tight leading-snug">
                Need help lifting your child's A-Level confidence and grades?
              </h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
                Our UAE education counsellors and <a href="/tutors" className="text-white font-bold underline hover:text-white/90">subject specialist tutors</a> can help decode subject reports, identify core learning gaps, and build a targeted revision roadmap.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact#form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-extrabold text-white hover:brightness-110 transition text-sm shadow-md border border-white/10"
                  style={{ background: 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)' }}
                >
                  Book a Free Trial Session →
                </a>
              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
