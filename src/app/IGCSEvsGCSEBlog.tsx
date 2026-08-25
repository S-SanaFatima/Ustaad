import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { faqSchema } from './shared/schemas';

const BLOG = {
  title: 'IGCSE vs GCSE: Curriculum Differences for UAE Parents | Ustaad',
  titleLine1: 'USTAAD UAE · BRITISH CURRICULUM GUIDE',
  titleLine2: 'IGCSE vs GCSE: Curriculum Differences UAE Parents Should Know',
  slug: 'igcse-vs-gcse-curriculum-differences-uae',
  description: 'On paper, IGCSE and GCSE look almost identical. In practice, a few real differences can shape your child\'s two years. A UAE educationist explains them in plain words, so you can pick the right fit.',
  heroImage: '/images/blogs/igcse-vs-gcse-father-son-subject-list.webp',
  heroAlt: 'Father and son reviewing GCSE subject choices list and study plans on laptop at home',
  heroCaption: 'On paper, IGCSE and GCSE look almost identical. In practice, a few real differences can shape your child\'s two years.',
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
  author: 'A UAE educationist working closely with students across Dubai and Abu Dhabi',
  reviewer: 'A curriculum expert, for factual accuracy on exam boards, grading and assessment',
  readTime: '9 min read',
  tags: ['IGCSE', 'GCSE', 'British Curriculum', 'UAE Parents', 'Curriculum Choice', 'Dubai Schools', 'Abu Dhabi Schools', 'Exam Preparation'],
};

const FAQS = [
  {
    q: 'Is IGCSE harder than GCSE?',
    a: 'Not really. The two ask for a similar level of work. How hard it feels depends more on the subject, the exam board and the teaching than on the name.',
  },
  {
    q: 'Which one is better for UAE students?',
    a: 'There is no single best. International GCSE is offered by many UAE British schools and suits families whose children move between countries or school systems. GCSE can suit families tied closely to the UK. The school itself weighs more than the label.',
  },
  {
    q: 'Is IGCSE accepted around the world?',
    a: 'Yes. Cambridge IGCSE is taught in more than 150 countries, and International GCSE qualifications are widely recognised by universities and sixth forms, including in the UAE, the UK, Europe and North America. Requirements can vary by university and course, so it is worth checking a specific programme.',
  },
  {
    q: 'What is the main difference between GCSE and IGCSE?',
    a: 'GCSE was made for UK schools, uses mostly UK-based content, and is graded 9 to 1 in England. International GCSE was made for a worldwide audience, with international content and grading that depends on the board. Edexcel uses 9 to 1, while Cambridge commonly uses A* to G.',
  },
  {
    q: 'Do UAE British schools offer both?',
    a: 'Some do, but many UAE British schools offer IGCSE because it suits children from many countries. Always ask a school which exam, which board and which level they use, so you know exactly what your child will study.',
  },
];

const TOC_ITEMS = [
  { label: 'What Are GCSE and IGCSE?', id: 'what-are-gcse-and-igcse' },
  { label: 'IGCSE vs GCSE at a Glance', id: 'igcse-vs-gcse-at-a-glance' },
  { label: 'The Curriculum Differences That Matter Most', id: 'the-curriculum-differences-that-matter-most' },
  { label: 'How the Two Are Tested', id: 'how-the-two-are-tested' },
  { label: 'Which One Suits UAE Students Better?', id: 'which-one-suits-uae-students-better' },
  { label: 'Do Universities Treat Them the Same?', id: 'do-universities-treat-them-the-same' },
  { label: 'Final Advice for Parents', id: 'final-advice-for-parents' },
  { label: 'Frequently Asked Questions', id: 'frequently-asked-questions' },
];

const RELATED = [
  {
    slug: 'igcse-maths-revision-low-marks',
    category: 'IGCSE Maths',
    title: 'Why IGCSE Maths Students Suffer Low Marks After Revision',
    description: 'Hours of revision do not always translate to high marks. Discover the root cause and how to fix it before exams.',
  },
  {
    slug: 'igcse-physics-formulas-exam',
    category: 'IGCSE Physics',
    title: 'Why IGCSE Physics Formulas Stop Working in Exams',
    description: 'Students memorise equations but struggle when question formats change. Here is how to build true analytical reasoning.',
  },
  {
    slug: 'exam-panic-before-exams-uae',
    category: 'Parent Guidance',
    title: 'What UAE Parents Miss About Exam Panic Right Before Exams',
    description: 'A closer look at why exam anxiety peaks in the final days before an IGCSE paper — and how parents can help.',
  },
  {
    slug: 'why-chemistry-fades-from-memory',
    category: 'IGCSE Chemistry',
    title: 'Why Chemistry Fades From Memory (and What Helps)',
    description: 'Understanding why chemical concepts evaporate quickly without active retrieval and spaced practice.',
  },
];

function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-8 mb-3 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/50 mb-1">{num}</span>
      <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h2>
    </div>
  );
}

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mx-auto my-6 max-w-xl">
      <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-slate-50">
        <img src={src} alt={alt} loading="lazy" className="w-full aspect-[16/9] object-cover block" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-gray-500 italic leading-relaxed px-2">{caption}</figcaption>
      )}
    </figure>
  );
}

function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-[#C7A24A] pl-4 pr-4 py-3 italic text-sm sm:text-base text-[#0a1f3d] my-4 bg-[#C7A24A]/[0.05] rounded-r-xl leading-relaxed">
      {children}
    </blockquote>
  );
}

function TOC({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/10 bg-[#f8fafd] overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0f4a9b]">In This Guide</span>
        </div>
        <span className="lg:hidden text-[#0f4a9b]">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <div className={`lg:block ${open ? 'block' : 'hidden'}`}>
        <div className="px-4 sm:px-5 pb-3.5 space-y-0.5">
          {TOC_ITEMS.map((item, i) => (
            <a key={i} href={`#${item.id}`}
              onClick={e => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              className="flex items-center gap-2.5 group py-0.5">
              <span className="shrink-0 text-[10px] font-extrabold text-[#0f4a9b]/35 w-4">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-xs sm:text-[13px] text-gray-500 group-hover:text-[#0f4a9b] transition-colors leading-snug">{item.label}</span>
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

function FAQAccordion() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-2 my-6">
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
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }} className="ml-0 sm:ml-[48px] mt-1" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div className="flex items-start gap-2.5 rounded-2xl border p-3.5"
                    style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.12)', boxShadow: '0 3px 12px rgba(15,74,155,0.05)' }}>
                    <p className="flex-1 text-gray-600 text-[13px] leading-relaxed text-left" itemProp="text">{faq.a}</p>
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

export default function IGCSEvsGCSEBlog() {
  const [tocOpen, setTocOpen] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://ustaad.ae/blogs/${BLOG.slug}`;

  const customArticleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": BLOG.title,
    "description": BLOG.description,
    "image": `https://ustaad.ae${BLOG.heroImage}`,
    "datePublished": BLOG.datePublished,
    "dateModified": BLOG.dateModified,
    "timeRequired": "PT9M",
    "author": {
      "@type": "Person",
      "name": "Nimra Shahzada",
      "url": "https://ustaad.ae/authors/nimra-shahzada",
      "jobTitle": "UAE Education Writer",
      "worksFor": {
        "@type": "Organization",
        "name": "Ustaad"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ustaad UAE",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ustaad.ae/logo.webp"
      }
    },
    "reviewedBy": {
      "@type": "Person",
      "name": "Curriculum Expert"
    }
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blogs' },
    { name: 'Parent Guidance', url: '/blogs/parent-guidance' },
    { name: 'IGCSE vs GCSE', url: `/blogs/${BLOG.slug}` }
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

      {/* Breadcrumb Top Bar */}
      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400 overflow-x-auto whitespace-nowrap">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1 shrink-0"><Home className="h-3 w-3" /> Home</a>
          <ChevronRightIcon className="h-3 w-3 shrink-0" />
          <a href="/blogs" className="hover:text-[#0f4a9b] transition shrink-0">Blog</a>
          <ChevronRightIcon className="h-3 w-3 shrink-0" />
          <a href="/blogs/parent-guidance" className="hover:text-[#0f4a9b] transition shrink-0">Parent Guidance</a>
          <ChevronRightIcon className="h-3 w-3 shrink-0" />
          <span className="text-[#0f4a9b] font-semibold shrink-0">IGCSE vs GCSE</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="pt-6 sm:pt-8 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Category tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">{BLOG.titleLine1}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.25] mb-3">
              {BLOG.titleLine2}
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-left sm:text-justify">{BLOG.description}</p>

            {/* Meta Byline */}
            <div className="mb-4 mt-2 space-y-2">
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Written by:</span> {BLOG.author}
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Verified by:</span> {BLOG.reviewer}
                </span>
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">
                <a href="/editorial" className="text-[#0f4a9b] underline hover:text-[#0a3a79] transition font-medium">
                  Ustaad UAE Editorial Team · Helping UAE parents choose the right curriculum since 2015
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 pt-1">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  Last reviewed: July 2026
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
            <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_40px_rgba(15,74,155,0.12)] bg-slate-50">
              <img src={BLOG.heroImage} alt={BLOG.heroAlt} fetchPriority="high" className="w-full aspect-[16/9] object-cover block" />
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
          <div className="text-gray-700 text-sm lg:text-[15px] leading-[1.8] [&_p]:text-left sm:[&_p]:text-justify [&_p]:mb-3.5">
            
            {/* Trust Box Card */}
            <div className="my-6 p-4 sm:p-5 bg-[#f8fafd] border border-slate-200 rounded-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                <h3 className="font-extrabold text-[#0a1f3d] text-xs uppercase tracking-wider">Why you can trust this guide</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0 text-left">
                It is written by a UAE educationist who works with students day to day, and the exam-board facts (series dates, grading and tiering) are checked against official Cambridge, Pearson Edexcel and Ofqual guidance. Ustaad has supported more than 2,500 UAE students since 2015. We help parents choose the right curriculum for their child with clear, practical advice, not sales pressure.
              </p>
            </div>

            {/* Intro Lead */}
            <p>
              On paper, IGCSE and GCSE look almost identical. In practice, a few real differences can shape your child's two years. A UAE educationist explains them in plain words, so you can pick the right fit.
            </p>
            <p>
              IGCSE or GCSE? For parents choosing a school in the UAE, it is one of the most common questions, and a fair one. The two names look almost the same. The single letter "I" is the only visible clue. No one really stops to explain what sits behind it.
            </p>
            <p>
              So let us keep it simple. IGCSE and GCSE are close relatives. They lead to the same place. But they are not identical twins, and the small gaps between them can matter for your child. Here is what you actually need to know.
            </p>

            {/* Section 01 */}
            <SectionHeading num="01" id="what-are-gcse-and-igcse">What Are GCSE and IGCSE?</SectionHeading>
            <p>GCSE stands for General Certificate of Secondary Education. It is the exam most students in the UK take at around age 16. It was built for schools inside the UK.</p>
            <p>IGCSE stands for International General Certificate of Secondary Education. It is the worldwide version of the same exam. It is run mainly by Cambridge and Pearson Edexcel, and it is taught in more than 150 countries. This is why you see IGCSE in so many UAE schools. It was made for classrooms full of children from many different countries.</p>
            <p>Both are two-year courses. Children usually study them in Years 10 and 11. Grading depends on the board: GCSE in England and Pearson Edexcel International GCSE both use 9 to 1, while Cambridge IGCSE commonly uses A* to G. Either way, schools and universities treat the two qualifications as broadly comparable. The real gap is in how each one is built and tested.</p>

            {/* Section 02 */}
            <SectionHeading num="02" id="igcse-vs-gcse-at-a-glance">IGCSE vs GCSE at a Glance</SectionHeading>
            <p>Here is the full picture in one table. Keep it next to any school brochure you are reading.</p>

            <div className="my-6 overflow-x-auto rounded-2xl border border-[#0f4a9b]/20 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
                <thead>
                  <tr className="bg-[#0f4a9b] text-white">
                    <th className="p-3 sm:p-4 font-extrabold text-xs tracking-wider uppercase border-b border-[#0f4a9b]/20 w-1/4">Feature</th>
                    <th className="p-3 sm:p-4 font-extrabold text-xs tracking-wider uppercase border-b border-[#0f4a9b]/20 w-3/8">GCSE</th>
                    <th className="p-3 sm:p-4 font-extrabold text-xs tracking-wider uppercase border-b border-[#0f4a9b]/20 w-3/8">IGCSE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-gray-700">
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Made for</td>
                    <td className="p-3 sm:p-4">Children in UK schools</td>
                    <td className="p-3 sm:p-4">Children from many countries</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Main exam boards</td>
                    <td className="p-3 sm:p-4">AQA, OCR, Pearson Edexcel, WJEC</td>
                    <td className="p-3 sm:p-4">Cambridge and Pearson Edexcel</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Where you find it</td>
                    <td className="p-3 sm:p-4">Mostly the UK</td>
                    <td className="p-3 sm:p-4">Worldwide; offered by many British curriculum schools in the UAE</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Grades</td>
                    <td className="p-3 sm:p-4">9 to 1 in England (9 is highest)</td>
                    <td className="p-3 sm:p-4">Depends on the board: Edexcel uses 9 to 1; Cambridge commonly uses A* to G</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Content</td>
                    <td className="p-3 sm:p-4">Uses UK examples and set books</td>
                    <td className="p-3 sm:p-4">Uses examples from around the world</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Subjects and levels</td>
                    <td className="p-3 sm:p-4">Foundation and Higher tiers in some subjects</td>
                    <td className="p-3 sm:p-4">Tiering varies by board (Cambridge Core/Extended, Edexcel Foundation/Higher, some untiered)</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Exam dates</td>
                    <td className="p-3 sm:p-4">Mainly summer; November series for English and Maths</td>
                    <td className="p-3 sm:p-4">Depends on board and subject; commonly May/June and November</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <InlineImage
              src="/images/blogs/igcse-gcse-grade-scale-comparison.webp"
              alt="Side-by-side grade scale chart comparing GCSE 9 to 1, Edexcel IGCSE 9 to 1, and Cambridge IGCSE A star to G, showing how the top grades line up across all three systems."
              caption="Side-by-side grade scale chart comparing GCSE 9 to 1, Edexcel IGCSE 9 to 1, and Cambridge IGCSE A* to G, showing how top grades line up across all three systems."
            />

            {/* Section 03 */}
            <SectionHeading num="03" id="the-curriculum-differences-that-matter-most">The Curriculum Differences That Matter Most</SectionHeading>
            <p>The easiest way to see the difference is to ask one question: who was each course made for?</p>
            <p>GCSE is built around the UK. In English Literature, for example, students must study Shakespeare. History and Geography often use British and European examples. This is not a fault. It is simply who the course was made for.</p>
            <p>IGCSE is built for children around the world. It uses examples from many countries. Its English set texts vary by board and syllabus, and may not centre on Shakespeare the way GCSE does. Subjects like Geography and Business often use cases a child in Dubai, London or Nairobi can all follow.</p>
            <p>This shows up in the classroom. A child who has never lived in the UK can feel lost when a lesson assumes they grew up there. International content can make that gap smaller, which for expat families can make a real difference to how settled a child feels.</p>
            <p>IGCSE can also be flexible on level. Some subjects are split into tiers, so a school can enter your child at the level that fits instead of pushing everyone down one path. The names differ by board: Cambridge uses Core and Extended, Edexcel uses Foundation and Higher, and some subjects have no tiers at all.</p>

            <Blockquote>
              <strong>ONE THING TO KEEP IN MIND:</strong> None of this changes how hard the work is. A strong IGCSE and a strong GCSE ask for the same effort and depth over two years. The style is different. The hard work is not.
            </Blockquote>

            <InlineImage
              src="/images/blogs/igcse-vs-gcse-where-offered-world-map.webp"
              alt="World map illustration showing GCSE mainly used in the United Kingdom, while IGCSE is offered across many countries including the UAE, India, Singapore, Kenya, Malaysia and Canada."
              caption="World map illustration showing GCSE primarily used in the United Kingdom, while IGCSE is offered across many countries including the UAE."
            />

            {/* Section 04 */}
            <SectionHeading num="04" id="how-the-two-are-tested">How the Two Are Tested</SectionHeading>
            <p>For years, the big split was coursework. GCSE had more of it. IGCSE leaned on final exams. That gap has now mostly closed. Here is where things stand today.</p>

            <div className="my-6 overflow-x-auto rounded-2xl border border-[#0f4a9b]/20 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
                <thead>
                  <tr className="bg-[#0f4a9b] text-white">
                    <th className="p-3 sm:p-4 font-extrabold text-xs tracking-wider uppercase border-b border-[#0f4a9b]/20 w-1/4">How it is tested</th>
                    <th className="p-3 sm:p-4 font-extrabold text-xs tracking-wider uppercase border-b border-[#0f4a9b]/20 w-3/8">GCSE</th>
                    <th className="p-3 sm:p-4 font-extrabold text-xs tracking-wider uppercase border-b border-[#0f4a9b]/20 w-3/8">IGCSE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-gray-700">
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Coursework</td>
                    <td className="p-3 sm:p-4">Removed from most subjects after the 2017 UK changes (kept in Art and a few others)</td>
                    <td className="p-3 sm:p-4">Still an option in many subjects; the school picks coursework or exam only</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Main focus</td>
                    <td className="p-3 sm:p-4">Almost all final exams at the end of Year 11</td>
                    <td className="p-3 sm:p-4">Final exams, with more choice of route</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Science practicals</td>
                    <td className="p-3 sm:p-4">Tested through exam questions on the required experiments</td>
                    <td className="p-3 sm:p-4">Often a written practical paper instead of lab marks</td>
                  </tr>
                  <tr className="hover:bg-[#0f4a9b]/[0.02] transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-[#0f4a9b] bg-[#0f4a9b]/[0.04]">Exam dates</td>
                    <td className="p-3 sm:p-4">Mainly summer; November series mainly for English and Maths (age 16+)</td>
                    <td className="p-3 sm:p-4">Depends on board and subject; commonly May/June and November</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <InlineImage
              src="/images/blogs/igcse-vs-gcse-assessment-mix-donut.webp"
              alt="Donut chart comparing assessment types for GCSE and IGCSE, showing GCSE as almost entirely final exams while IGCSE offers a mix of final exams, coursework option, and written practical papers for sciences."
              caption="Donut chart comparing assessment types for GCSE and IGCSE, showing GCSE final exam weightings versus IGCSE coursework and practical options."
            />

            <p>Exam dates depend on the board and the subject, so it is worth being precise. Cambridge IGCSE and Pearson Edexcel International GCSE commonly run May/June and November series, though not every subject sits in every series. (Pearson's old January series ended after January 2023.)</p>
            <p>GCSE exams are mainly taken in summer, and a November series is normally open only for English Language and Maths, usually to students aged 16 or over. If resits or entry timing matter to you, ask the school exactly which series your child's subjects are offered in.</p>
            <p>One word of care. Two schools may both say they teach "IGCSE Chemistry." But one may use Cambridge and the other Edexcel, with different papers, tiers and grading. Always ask the school which exam board and which level they use.</p>
            <p>Once you know the board, targeted practice on those exact papers is what lifts a grade. That focus sits at the heart of our <a href="/igcse" className="text-[#0f4a9b] font-bold underline">IGCSE tutoring</a>.</p>

            {/* Section 05 */}
            <SectionHeading num="05" id="which-one-suits-uae-students-better">Which One Suits UAE Students Better?</SectionHeading>
            <p>There is no single winner. Any honest teacher will tell you the same. The real question is which one fits your child and your family's plans.</p>

            <div className="grid sm:grid-cols-2 gap-4 my-5">
              <div className="p-4 bg-[#f8fafd] rounded-xl border border-slate-100">
                <p className="font-bold text-[#0f4a9b] text-sm mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0" /> IGCSE often fits when…
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#0f4a9b]">•</span><span>Your family may move country again.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#0f4a9b]">•</span><span>Your child has studied in more than one school system.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#0f4a9b]">•</span><span>You want the international version, built for a global student body.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#0f4a9b]">•</span><span>A tiered subject (Core/Extended or Foundation/Higher) would suit your child.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#0f4a9b]">•</span><span>It is simply the option your chosen school offers.</span></li>
                </ul>
              </div>

              <div className="p-4 bg-[#f8fafd] rounded-xl border border-slate-100">
                <p className="font-bold text-[#0a1f3d] text-sm mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-500 shrink-0" /> GCSE often fits when…
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#0a1f3d]">•</span><span>Your family is closely tied to the UK.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#0a1f3d]">•</span><span>You may move back for sixth form or university.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#0a1f3d]">•</span><span>Your child is happy with UK-based content.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#0a1f3d]">•</span><span>You want the same set-up they will meet later in the UK.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#0a1f3d]">•</span><span>It is the route your preferred school runs.</span></li>
                </ul>
              </div>
            </div>

            <p>In real life, the school counts for more than the name. A well-taught GCSE will help a child more than a poorly taught IGCSE. The other way round is just as true. Strong students can drift in a weak class, and average students can bloom in a good one. The people around the course count for the most.</p>
            <p>If your child is struggling in a subject under either course, one-to-one support can find the gap early, before it starts to pull their grades down. For students on the UK track, the same close attention shapes our <a href="/gcse" className="text-[#0f4a9b] font-bold underline">GCSE tutoring</a>.</p>

            {/* Section 06 */}
            <SectionHeading num="06" id="do-universities-treat-them-the-same">Do Universities Treat Them the Same?</SectionHeading>
            <p>This is the part most parents really want to hear, so let me be clear.</p>

            <Blockquote>
              <strong>THE SHORT ANSWER:</strong> Both GCSE and International GCSE are widely recognised by schools and universities around the world, and are generally treated as comparable. But exact entry requirements vary by university, course and subject.
            </Blockquote>

            <p>What matters most is not which version your child sat, but the grades, the subjects chosen, and whether those subjects fit the next step, such as <a href="/a-level-tutor-abu-dhabi" className="text-[#0f4a9b] font-bold underline">A-Level</a> or IB. Requirements do vary, especially for English Language, Maths and competitive courses, so it is always worth checking what a specific university and programme ask for. A child aiming at medicine, for example, needs strong science grades either way.</p>
            <p>So put the name lower on your list. Put subject choice, likely grades and good teaching at the top. These are the things that carry a child into sixth form and beyond.</p>

            {/* Section 07 */}
            <SectionHeading num="07" id="final-advice-for-parents">Final Advice for Parents</SectionHeading>
            <p>If you remember one thing, remember this. IGCSE and GCSE are close cousins, not rivals. The gaps are small. Both work well when the grades are strong.</p>
            <p>Start with your child, not the label. A child who does well in final exams, and who may head to a UK sixth form, can do very well with GCSE. A child who has moved between systems, or whose school teaches it, may be better suited to International GCSE. Many British-curriculum schools in the UAE offer International GCSE, so often the school you choose will settle the question.</p>
            <p>Then look at the school itself. The teachers. The support on offer. Pick the place where your child will feel known and pushed in the right way. Get that right, and either course will take them where they need to go.</p>

            <InlineImage
              src="/images/blogs/igcse-vs-gcse-mother-daughter-hd.webp"
              alt="Mother and daughter studying together on laptop for British curriculum guidance"
              caption="Choosing between GCSE and IGCSE depends on long-term family plans, subject choices, and target qualifications."
            />

            {/* Section 08 */}
            <SectionHeading num="08" id="frequently-asked-questions">Frequently Asked Questions</SectionHeading>
            <FAQAccordion />

            {/* How Ustaad helps you choose */}
            <div className="my-8 p-5 sm:p-6 bg-[#f8fafd] border border-slate-200 rounded-2xl">
              <h3 className="text-base font-extrabold text-[#0a1f3d] mb-2">How Ustaad helps you choose</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                Choosing between IGCSE, GCSE, A-Level, IB and the American curriculum is one of the biggest early decisions a UAE family makes. We help parents think it through, matching the pathway to the child's strengths, their school, and where the family is heading next. Since 2015 we have supported more than 2,500 students across every emirate, on both Cambridge and Edexcel routes.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                In the capital, families can also work with our dedicated <a href="/igcse-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline">IGCSE tutors in Abu Dhabi</a> and <a href="/gcse-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline">GCSE tutors in Abu Dhabi</a>.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/contact#form" className="px-4 py-2 bg-[#0f4a9b] hover:bg-[#0a3a79] text-white font-bold rounded-xl text-xs transition shadow-xs">
                  Book a Free Trial Session
                </a>
                <a href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20curriculum%20guidance%20on%20IGCSE%20vs%20GCSE." target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5 shadow-xs">
                  <MessageCircle className="w-3.5 h-3.5 text-white" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Author & Verifier Section */}
            <div className="my-8 p-5 sm:p-6 bg-[#f8fafd] border border-slate-200 rounded-2xl space-y-4">
              <div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#0f4a9b] mb-1">About the Author</h4>
                <h3 className="text-sm font-extrabold text-[#0a1f3d]">Written by a UAE educationist at Ustaad</h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  This guide was written by a UAE-based educationist who works closely with students across Dubai and Abu Dhabi. Their focus is curriculum guidance: helping families see how British-curriculum pathways fit each child, and turning exam-board detail into plain advice parents can act on.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#0f4a9b] mb-1">Verified By</h4>
                <h3 className="text-sm font-extrabold text-[#0a1f3d]">Reviewed by a curriculum expert</h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  A curriculum expert with direct knowledge of Cambridge IGCSE, Pearson Edexcel International GCSE and GCSE in England checked this article for factual accuracy, including exam-board series, grading scales, tiering and assessment. The guidance is reviewed and updated as exam-board rules change.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <div className="text-xs font-bold text-[#0a1f3d]">Meet the Writers Behind Ustaad UAE</div>
                <a href="/editorial" className="text-xs font-extrabold text-[#0f4a9b] hover:underline flex items-center gap-1">
                  View Editorial Team <ChevronRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Tags */}
            <div className="my-6 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-gray-400 mr-1">Article tags:</span>
              {BLOG.tags.map((tag, i) => (
                <span key={i} className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            {/* Sources */}
            <div className="my-6 p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
              <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Sources</h4>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Pearson Edexcel: International GCSE November series from 2023</li>
                <li>• GOV.UK: November GCSE English Language and Mathematics exam entries</li>
                <li>• Ofqual: GCSE English Language and Maths results from the November series</li>
              </ul>
            </div>

            {/* Related Reading */}
            <div className="my-8 pt-6 border-t border-slate-200">
              <h3 className="text-base font-extrabold text-[#0a1f3d] mb-4">Related reading from the Ustaad blog</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {RELATED.map((item, i) => (
                  <a key={i} href={`/blogs/${item.slug}`} className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-[#0f4a9b]/30 hover:shadow-md transition group">
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

            {/* Bottom Dark Blue CTA Banner - at the absolute end right before footer */}
            <div className="mt-12 mb-2 rounded-3xl p-6 sm:p-8 lg:p-10 text-center text-white shadow-xl"
              style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-3 tracking-tight leading-snug">
                Need help translating a report card into a study plan?
              </h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
                Our UAE education counsellors and <a href="/tutors" className="text-white font-bold underline hover:text-white/90">subject specialist tutors</a> can help decode subject reports, identify core learning gaps, and build a targeted revision roadmap.
              </p>
              <div className="flex justify-center">
                <a href="/contact#form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-extrabold text-white hover:brightness-110 transition text-sm shadow-md border border-white/10"
                  style={{ background: 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)' }}>
                  Book a Free Consultation →
                </a>
              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
