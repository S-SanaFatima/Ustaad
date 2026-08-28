import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle, ShieldCheck } from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { faqSchema } from './shared/schemas';

const BLOG = {
  title: 'IGCSE Preparation: Past Papers Are the Final Step | Ustaad',
  titleLine1: 'USTAAD UAE · IGCSE PREPARATION',
  titleLine2: 'IGCSE Preparation: Why Past Papers Are the Final Step, Not the First',
  slug: 'igcse-preparation-past-papers-final-step',
  description: 'IGCSE preparation is like building a house. See why past papers are the roof, not the foundation, and how to prepare in the right order to lift grades.',
  heroImage: '/images/blogs/igcse-preparation-past-papers-hero.jpg',
  heroAlt: 'UAE parent and IGCSE student reviewing revision plans and past paper preparation at home',
  heroCaption: 'Past papers are the roof of IGCSE preparation — essential, but only after the foundation is set.',
  datePublished: '2026-08-27',
  dateModified: '2026-08-27',
  author: 'Nimra Shahzada, Content Lead, Ustaad UAE',
  reviewer: 'Nida Iqbal, MPhil in Education Leadership and Management',
  readTime: '10 min read',
  tags: ['IGCSE preparation', 'IGCSE revision', 'IGCSE past papers', 'Cambridge IGCSE', 'exam technique', 'concept mastery', 'topic practice'],
};

const FAQS: { q: string; a: string; aNode?: React.ReactNode }[] = [
  {
    q: 'When should students start IGCSE past papers?',
    a: 'Once the foundation and walls are in place, not before, meaning the core concepts are secure and each topic has been practised on its own. Started too early, full papers only measure gaps a student has not yet had the chance to repair.',
  },
  {
    q: 'How many IGCSE past papers should a student complete?',
    a: 'Quantity is the wrong target. Ten papers worked through carefully, each followed by fixing what it exposed, lift a grade more than thirty rushed and forgotten. Spend longer on the corrections than on the paper itself.',
  },
  {
    q: 'Are topic questions better than full past papers?',
    a: 'They do different jobs. Topic questions belong to the walls stage, securing one area at a time. Full papers belong to the roof, testing whether everything holds together under timed conditions. Use topic questions to build, and full papers to check the finished structure.',
  },
  {
    q: 'Can past papers improve grades on their own?',
    a: 'Rarely. A past paper measures learning; it does not create it. Sit paper after paper without strengthening the weak concepts each one reveals, and the grade plateaus. They lift results only when each is followed by targeted work on the gap it exposed, whether from the student, a teacher, or online IGCSE tutoring.',
    aNode: (
      <>
        Rarely. A past paper measures learning; it does not create it. Sit paper after paper without strengthening the weak concepts each one reveals, and the grade plateaus. They lift results only when each is followed by targeted work on the gap it exposed, whether from the student, a teacher, or{' '}
        <a href="/igcse" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">online IGCSE tutoring</a>.
      </>
    ),
  },
];

const TOC_ITEMS = [
  { label: 'Preparing for IGCSE is like building a house', id: 'preparing-for-igcse-is-like-building-a-house' },
  { label: 'The foundation: concept mastery', id: 'the-foundation-concept-mastery' },
  { label: 'The walls: topic-by-topic practice', id: 'the-walls-topic-by-topic-practice' },
  { label: 'The interior: the skills no one lists', id: 'the-interior-the-skills-no-one-lists' },
  { label: 'The roof: timed past papers', id: 'the-roof-timed-past-papers' },
  { label: 'Why so many students plateau', id: 'why-so-many-students-plateau' },
  { label: 'Building in the right order', id: 'building-in-the-right-order' },
  { label: 'What this means for parents', id: 'what-this-means-for-parents' },
  { label: 'Frequently asked questions', id: 'frequently-asked-questions' },
  { label: 'Where past papers finally belong', id: 'where-past-papers-finally-belong' },
  { label: 'Sources and further reading', id: 'sources-and-further-reading' },
];

const RELATED = [
  {
    slug: 'igcse-maths-revision-low-marks',
    category: 'Academic',
    title: 'Hours of Revision, Still Low Marks',
    description: 'Why hours of IGCSE maths revision do not turn into marks, and how active past-paper drills change the outcome.',
  },
  {
    slug: 'why-igcse-biology-students-lose-marks-on-6-mark-questions',
    category: 'Academic',
    title: 'Why IGCSE Biology Students Lose Marks on 6-Mark Questions',
    description: 'IGCSE Biology 6-mark questions cost students marks every year. See what Cambridge and Pearson mark schemes reward.',
  },
  {
    slug: 'a-level-tutoring-uae-independent-thinking',
    category: 'Psychology of Learning',
    title: 'A-Level Tutoring in the UAE Starts With Independent Thinking',
    description: 'Once IGCSEs are behind them, the same build-in-order idea grows into independent thinking at A-Level.',
  },
  {
    slug: 'igcse-vs-gcse-curriculum-differences-uae',
    category: 'Parent Guidance',
    title: 'IGCSE vs GCSE: Curriculum Differences UAE Parents Should Know',
    description: 'Understanding British curriculum pathways, exam board variations, and choosing the right track for your child in the UAE.',
  },
];

const BUILD_ORDER = [
  {
    title: 'Pour the foundation',
    body: 'Secure the core concepts until a student can explain why, not only what.',
  },
  {
    title: 'Raise the walls',
    body: 'Practise topic by topic until each one is consistent on its own.',
  },
  {
    title: 'Fit the interior',
    body: 'Train command words, application, timing and mark-scheme awareness.',
  },
  {
    title: 'Add the roof',
    body: 'Sit full, timed past papers under exam conditions.',
  },
  {
    title: 'Run the repair loop',
    body: 'Let every paper send you back to the exact stage that needs fixing, then climb forward again.',
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

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mx-auto my-6 max-w-xl">
      <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-slate-50">
        <img src={src} alt={alt} loading="lazy" className="w-full aspect-[16/9] object-cover block" />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">{caption}</figcaption>
      )}
    </figure>
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
                      {faq.aNode ?? faq.a}
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

export default function IGCSEPreparationPastPapersBlog() {
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
    "timeRequired": "PT10M",
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
    { name: 'Academic', url: '/blogs/academic-exam-skills' },
    { name: 'IGCSE Past Papers', url: `/blogs/${BLOG.slug}` }
  ];

  return (
    <Layout>
      <SEOHead
        title={BLOG.title}
        description={BLOG.description}
        canonical={`/blogs/${BLOG.slug}`}
        author="Nimra Shahzada"
        preloadHeroImage={BLOG.heroImage}
        ogImage={BLOG.heroImage}
        schema={[
          customArticleSchema,
          faqSchema(FAQS.map(({ q, a }) => ({ q, a }))),
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
      <section className="bg-white pt-6 sm:pt-8 pb-0">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

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
                <a href="/blogs/academic-exam-skills" className="hover:text-[#0f4a9b] transition">Academic</a>
              </li>
              <li><ChevronRightIcon className="h-3 w-3 text-gray-300" /></li>
              <li className="text-gray-800 font-medium truncate max-w-[200px] sm:max-w-none">
                IGCSE Past Papers
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
            <div className="mb-4 mt-2 space-y-3 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <div><span className="font-medium">Written by:</span> <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">Nimra Shahzada</a></div>
                  <div className="text-gray-500 mt-0.5">Content Lead, Ustaad UAE</div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <div><span className="font-medium">Reviewed by:</span> <a href="/authors/nida-iqbal" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">Nida Iqbal</a></div>
                  <div className="text-gray-500 mt-0.5">MPhil in Education Leadership and Management</div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 text-xs text-gray-500 pt-3 border-t border-slate-100 mt-2">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  Last updated: 27 Aug 2026
                </time>
                <span className="flex items-start gap-1.5 text-emerald-700 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 mt-0.5" /> Fact-checked against official exam-board sources (August 2026)
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />{BLOG.readTime}
                </span>
                <div className="mt-1">
                  <SocialShare url={shareUrl} title={BLOG.title} />
                </div>
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
          <div className="text-gray-700 text-sm lg:text-[15px] leading-[1.8] [&_p]:text-left sm:[&_p]:text-justify [&_p]:mb-4">

            {/* Trust Box Card */}
            <div className="my-6 p-4 sm:p-5 bg-[#f8fafd] border border-slate-200 rounded-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                <h3 className="font-extrabold text-[#0a1f3d] text-xs uppercase tracking-wider">Why you can trust this guide</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0 text-left">
                Ask a builder why a project fell behind, and they will rarely blame the roof. The trouble began underground, in work nobody sees once the house is finished. IGCSE preparation fails the same quiet way: past papers are treated as the whole plan when they were only ever meant to be the roof.
              </p>
            </div>

            {/* Intro Lead */}
            <p>
              Ask a builder why a project fell behind, and they will rarely blame the roof. The roof is almost always fine. The trouble began underground, weeks earlier, in the work nobody can see once the house is finished. IGCSE preparation goes wrong in the same quiet way.
            </p>
            <p>
              Every year, capable students work through one past paper after another and watch the grade refuse to move. The instinct is to reach for more of them. Yet the problem is almost never the number of papers sat. It is that the preparation underneath was built in the wrong order, and past papers were handed a job they were never designed to do.
            </p>
            <p>
              This is not only intuition. Decades of learning science, summarised by the{' '}
              <a href="https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold underline">Education Endowment Foundation</a>, show that knowledge lasts when it is retrieved and applied, not when it is passively reread.
            </p>

            {/* Section 01 */}
            <SectionHeading num="01" id="preparing-for-igcse-is-like-building-a-house">Preparing for IGCSE is like building a house</SectionHeading>
            <p>
              Nobody builds a house by hanging the curtains first. You pour a foundation, you raise the walls, you fit the interior, and only then do you put on the roof. Each stage depends entirely on the one beneath it. Skip a step, or take them out of order, and the whole structure is compromised long before anyone notices.
            </p>
            <p>
              IGCSE past papers are the roof. They are essential, they are the visible finish, and they protect everything underneath. But a roof cannot hold up a building that was never constructed below it. Most students who stall have tried to fit the roof before the foundation had set, and no amount of roofing will fix that. Good IGCSE preparation follows the sequence of a build, not the panic of an exam countdown.
            </p>
            <InlineImage src="/images/blogs/igcse_building_metaphor.jpg" alt="Building foundation and roof metaphor with educational materials" caption="Without a strong foundation of concepts, the 'roof' of past papers has nothing to rest on." />
            <p>
              What follows is that build, layer by layer, and why the order is the whole point.
            </p>

            {/* Section 02 */}
            <SectionHeading num="02" id="the-foundation-concept-mastery">The foundation: concept mastery</SectionHeading>

            <Blockquote>
              <strong>THE FOUNDATION:</strong> Concept mastery is not knowing that something is true; it is understanding why it is true, so the idea still stands when a question comes at it from an unfamiliar angle.
            </Blockquote>

            <p>
              A foundation is the part of a house nobody admires. It sits underground, unseen, and yet every wall and beam above it depends on how well it was laid. Concept mastery is the same. It is not knowing that something is true; it is understanding why it is true, so that the idea still stands when a question comes at it from an unfamiliar angle.
            </p>
            <p>
              Consider a student revising Cambridge IGCSE Chemistry (0620) who has learned that a reaction speeds up when you raise the temperature. That is a fact, and it will earn a mark on a straightforward question. But the moment the paper asks them to explain a rate graph they have never seen, the fact alone collapses, because they never built the idea underneath it: that heat gives particles more energy and more frequent, harder collisions. One student memorised a sentence. The other poured a foundation. Only one of them can build upward.
            </p>

            {/* Section 03 */}
            <SectionHeading num="03" id="the-walls-topic-by-topic-practice">The walls: topic-by-topic practice</SectionHeading>

            <Blockquote>
              <strong>THE WALLS:</strong> Topic practice is not the same as sitting whole past papers. Cover the syllabus piece by piece until every part of the structure carries its share.
            </Blockquote>

            <p>
              Walls go up one row at a time, and each row has to be solid before the next rests on it. This is the stage for topic practice, and it is not the same as sitting whole past papers. Your child takes one topic, works it until it is secure, then moves to the next. The syllabus gets covered piece by piece, not in scattered patches.
            </p>
            <p>
              In IGCSE Maths (0580), that means getting algebra solid before trigonometry leans on it, because the later topic quietly assumes the earlier one. This is where steady IGCSE revision pays off. A student with strong walls stops swinging between an A on one paper and a D on the next, because every part of the structure now carries its share.
            </p>

            {/* Section 04 */}
            <SectionHeading num="04" id="the-interior-the-skills-no-one-lists">The interior: the skills no one lists</SectionHeading>

            <Blockquote>
              <strong>THE INTERIOR:</strong> Exam skills are almost never written in a textbook, which is exactly why they are so often missed — and why marks get left on the table.
            </Blockquote>

            <p>
              A house with a foundation and walls is still not somewhere you can live. It needs the interior: the wiring, the plumbing, the fittings that make the structure usable. In IGCSE preparation these are the exam skills, and they are almost never written in a textbook, which is exactly why they are so often missed.
            </p>
            <p>
              Four of them matter most. The first is reading command words precisely. Cambridge publishes a standard set of command words, and “state”, “describe”, “explain” and “evaluate” are not interchangeable; each asks for a different depth of answer and a different number of marks. The second is applying knowledge to a context the student has not met before, rather than reciting it. The third is managing time so the last question is not answered in a rushed two minutes. The fourth is reading a mark scheme well enough to see what an examiner is actually rewarding.
            </p>
            <InlineImage src="/images/blogs/igcse_exam_timing.jpg" alt="Student writing an exam with a stopwatch" caption="Time management and understanding command words are the interior 'fittings' needed before sitting a full paper." />
            <p>
              A small example makes the point. In IGCSE Physics (0625), a question that says “state” wants one clean line and one mark. A question that says “explain” wants a chain of reasoning, and a student who writes a single line there has left marks on the table they had already earned in their head. The knowledge was built. The interior to deliver it was not.
            </p>

            {/* Section 05 */}
            <SectionHeading num="05" id="the-roof-timed-past-papers">The roof: timed past papers</SectionHeading>

            <Blockquote>
              <strong>THE ROOF:</strong> Used at the right moment, past papers are the most powerful tool in the whole process. Used too early, they simply photograph an unfinished house.
            </Blockquote>

            <p>
              Only now, with the foundation set, the walls up and the interior fitted, does the roof make sense. This is where IGCSE past papers finally earn their reputation. Sat under proper timed conditions and marked honestly against the scheme, they test whether the whole structure holds together on the day. They build stamina, they sharpen timing, and they show precisely where the rain gets in.
            </p>
            <p>
              Notice what a paper does and does not do. It reveals a weak topic; it does not teach the topic. It exposes a misread command word; it does not, by itself, fix the habit. A roof keeps out the weather, but it was never designed to build the rooms below it. Used at the right moment, they are the most powerful tool in the whole process. Used too early, they simply photograph an unfinished house.
            </p>

            {/* Section 06 */}
            <SectionHeading num="06" id="why-so-many-students-plateau">Why so many students plateau</SectionHeading>

            <Blockquote>
              <strong>ASSESSMENT vs LEARNING:</strong> Past papers assess learning. They rarely create it. That single distinction is where most IGCSE grades are won or lost.
            </Blockquote>

            <p>
              This brings us to the quiet mistake at the centre of most stalled preparation. Many students, and many well-meaning families, mistake assessment for learning. Sitting a past paper feels like studying. It is demanding, it takes an hour, it produces a score, and so it wears the costume of hard work. But it is a measurement, not a lesson.
            </p>
            <p>
              Think of stepping on the bathroom scales. Weighing yourself every morning tells you where you stand, but the scale itself changes nothing; the change comes from what you do between weigh-ins. A student who sits twenty papers without going back to repair what each one exposed has not learned twenty times over. They have simply measured the same three weaknesses twenty times and grown discouraged by a number that will not move.
            </p>
            <p>
              Past papers assess learning. They rarely create it. That single distinction is where most IGCSE grades are won or lost.
            </p>
            <InlineImage src="/images/blogs/igcse_targeted_repair.jpg" alt="Exam paper with highlights and correction notes" caption="The learning doesn't happen during the paper. It happens when targeted corrections are made afterwards." />
            <p>
              Papers become powerful the moment a student treats each one as a survey of the building. A dropped mark on collision theory sends them back to the foundation. A lost mark on an “explain” question sends them back to the interior. The paper points; the learning happens in the returning.
            </p>

            {/* Section 07 */}
            <SectionHeading num="07" id="building-in-the-right-order">Building in the right order</SectionHeading>
            <p>
              Set out plainly, the sequence is not complicated, and its power is entirely in the order.
            </p>

            <div className="my-6 space-y-3">
              {BUILD_ORDER.map((step, i) => (
                <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d] mb-1">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 08 */}
            <SectionHeading num="08" id="what-this-means-for-parents">What this means for parents</SectionHeading>
            <p>
              Most parents assume they cannot help unless they know the subject themselves. You can, and it comes down to what you ask. When your child reaches for another past paper out of worry, do not ask how many they have finished. Ask what the last one taught them, and what they changed because of it.
            </p>
            <p>
              Ask to see the corrections, not the score. A student who can point to the topic they went back and rebuilt after a paper is preparing properly; a student who only reports a mark is measuring, not building. If a subject keeps revealing the same crack, that is the signal for structured help. This is where an experienced{' '}
              <a href="/igcse-tutor-abu-dhabi" className="text-[#0f4a9b] font-bold underline">IGCSE tutor in the UAE</a>{' '}
              earns their place: not by handing over more papers, but by finding which layer of the build gave way and rebuilding it, whether the gap sits in the Cambridge curriculum concepts or in{' '}
              <a href="/exam-preparation" className="text-[#0f4a9b] font-bold underline">exam technique</a>.
            </p>
            <p>
              The same build-in-order idea is not unique to IGCSE. Younger students meet the same logic in the four stages of GCSE revision, and once IGCSEs are behind them, it grows into the case for{' '}
              <a href="/blogs/a-level-tutoring-uae-independent-thinking" className="text-[#0f4a9b] font-bold underline">independent thinking at A-Level</a>.
            </p>
            <p>
              Want to see which layer of the build your child is standing on?{' '}
              <a href="/contact#form" className="text-[#0f4a9b] font-bold underline">Book a free IGCSE assessment</a>{' '}
              with an Ustaad tutor in the UAE. In one session we map the foundation, walls, interior and roof, pinpoint the layer holding the grade back, and give you a clear plan to strengthen it. No obligation. Explore our full{' '}
              <a href="/igcse" className="text-[#0f4a9b] font-bold underline">IGCSE tutoring programme</a>{' '}
              to see how the build is coached one to one.
            </p>

            {/* Section 09 */}
            <SectionHeading num="09" id="frequently-asked-questions">Frequently asked questions</SectionHeading>
            <FAQAccordion />

            {/* Section 10 */}
            <SectionHeading num="10" id="where-past-papers-finally-belong">Where past papers finally belong</SectionHeading>
            <p>
              Past papers are the roof of IGCSE preparation, and they matter. But a roof is the last thing you build, not the first. Once the concepts are secure, the topics are consistent, and the exam skills are in place, past papers finally do their real job: not building the grade, but proving the work underneath was done properly.
            </p>
            <p>
              Prepare in that order, foundation first and roof last, and the papers stop being something to dread. They become the clearest sign that your child is genuinely ready.
            </p>

            {/* Section 11 */}
            <SectionHeading num="11" id="sources-and-further-reading">Sources and further reading</SectionHeading>
            <p className="text-xs text-gray-500 mb-3">Every claim about IGCSE preparation and the learning research is drawn from these primary sources:</p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold">•</span>
                <span>
                  <a href="https://www.cambridgeinternational.org/" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">
                    <strong>Cambridge International:</strong> Cambridge IGCSE programmes and qualifications
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold">•</span>
                <span>
                  <a href="https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">
                    <strong>Education Endowment Foundation:</strong> Metacognition and Self-Regulated Learning
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f4a9b] font-bold">•</span>
                <span>
                  <a href="/igcse" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">
                    <strong>Ustaad:</strong> IGCSE tutoring in the UAE
                  </a>
                  {' '}and{' '}
                  <a href="/exam-preparation" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">exam preparation</a>
                </span>
              </li>
            </ul>

            <p className="mt-4 text-xs sm:text-sm text-gray-500 leading-relaxed italic">
              Editorial note: The exam-board details in this guide were checked against Cambridge International&apos;s published IGCSE materials and reviewed for accuracy before publishing. It was written by Nimra Shahzada, a content lead at Ustaad with a background in psychology who writes on how students prepare for Cambridge IGCSE and A-Level, and reviewed by Nida Iqbal, who holds an MPhil in Education Leadership and Management. Our{' '}
              <a href="/editorial" className="text-[#0f4a9b] font-bold underline not-italic">editorial standards</a>{' '}
              set out how Ustaad researches and checks every article.
            </p>

            {/* Meet the Writers E-E-A-T Block */}
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
                    <a href="/authors/nimra-shahzada" className="font-bold text-[#0f4a9b] underline">Nimra Shahzada</a> is a content lead at Ustaad with a background in psychology. She writes on how students prepare for Cambridge IGCSE and A-Level in the UAE, working closely with the tutors who teach these students.
                  </p>
                </div>

                <div className="p-4 bg-[#f8fafd] border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-[#C7A24A]" />
                    <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Reviewed by</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-0">
                    <a href="/authors/nida-iqbal" className="font-bold text-[#0f4a9b] underline">Nida Iqbal</a> holds an MPhil in Education Leadership and Management and reviews Ustaad&apos;s academic guidance for accuracy and curriculum alignment.
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
                Ready for a free IGCSE assessment?
              </h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
                Our UAE education counsellors and <a href="/tutors" className="text-white font-bold underline hover:text-white/90">subject specialist tutors</a> map the foundation, walls, interior and roof of your child&apos;s preparation, then build a clear plan to strengthen the layer holding the grade back.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact#form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-extrabold text-white hover:brightness-110 transition text-sm shadow-md border border-white/10"
                  style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
                >
                  Book Your Free IGCSE Assessment →
                </a>
              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
