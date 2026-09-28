import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar, Clock, BookOpen, ChevronDown, ChevronUp,
  Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle,
  Sparkles, ArrowRight, User, Activity
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'Command Words in IGCSE and A-Level Exams: A Guide | Ustaad',
  titleLine1: 'The One Word in Every Exam Question',
  titleLine2: 'That Decides Your Marks',
  heading: 'The One Word in Every Exam Question That Decides Your Marks',
  subtitle: 'Your child knows the content but loses marks anyway. The reason is usually command words. Here is how to read them and answer exactly what the examiner wants.',
  categoryBadge: 'USTAAD UAE · ACADEMIC & EXAM SKILLS',
  categoryUrl: '/blogs/academic-exam-skills',
  slug: 'command-words-igcse-a-level-exams',
  canonical: '/blogs/command-words-igcse-a-level-exams',
  description:
    'Your child knows the content but loses marks anyway. The reason is usually command words. Here is how to read them and answer exactly what the examiner wants.',
  heroImage: '/images/blogs/command-words-hero.png',
  heroAlt: 'Secondary student in UAE reviewing Cambridge and Edexcel IGCSE exam paper mark scheme and command words',
  heroCaption: 'Examiners award marks based on the command word, not volume of text. Missing the command word means missing the mark scheme.',
  datePublished: '2026-09-25',
  dateModified: '2026-09-25',
  publishedText: 'September 2026',
  reviewedText: 'September 2026',
  author: 'Nimra Shahzada',
  authorRole: 'writer on learning and the psychology of studying',
  authorPhoto: '/images/team/nimra-shahzada-v2.jpg',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Curriculum & Academic Review Board',
  reviewerPhoto: '/UpdatedImages/private-tutor-student-1-to-1-session-uae.webp',
  reviewerUrl: '/editorial',
  tags: [
    'Psychology of Learning',
    'Active Recall',
    'Retrieval Practice',
    'IGCSE Revision',
    'A-Level Study Tips',
    'Exam Preparation UAE',
    'Cognitive Load',
  ],
};

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

const FAQS = [
  {
    q: 'What are command words in an exam?',
    a: 'They are the instruction verbs in a question, such as describe, explain, compare or evaluate. Each one tells you what kind of answer will earn the marks, and the mark scheme is built directly around them.'
  },
  {
    q: 'Why does my child lose marks when they clearly know the topic?',
    a: 'Usually because they answered the wrong type of question. Knowing the topic is not enough if the answer does not match the command word. Writing what happens when the question asked why will lose the reasoning marks every single time.'
  },
  {
    q: 'What is the difference between describe and explain?',
    a: 'Describe asks for what happens or what you observe. Explain asks for why it happens. A useful test: if the answer needs the word "because" to make sense, it is an explain question, and every sentence should build toward that reason.'
  },
  {
    q: 'Are command words the same across different subjects?',
    a: 'Broadly yes. Describe, explain, compare and evaluate mean the same thing in biology, history and economics. That is why practising them is such an efficient use of time: the skill transfers across every subject at once.'
  },
  {
    q: 'How can I help if I do not know the subject?',
    a: 'You do not need to. Sit with a past paper and simply circle the command word in each question together, then ask your child what each one wants. You are training how they read the question, which needs no subject knowledge from you at all.'
  },
  {
    q: 'How quickly can this improve grades?',
    a: 'Faster than most things, because the content is already there. Once a student reliably reads and answers the command word, marks they were leaking start to appear within a few weeks of practice.'
  }
];

const TOC_ITEMS = [
  { label: '01. Quick answers before you read', id: 'quick-answers' },
  { label: '02. What a command word actually is', id: 'what-it-actually-is' },
  { label: '03. The command words that cost the most marks', id: 'words-that-cost-marks' },
  { label: '04. Describe versus explain', id: 'describe-vs-explain' },
  { label: '05. State and give versus explain', id: 'state-give-vs-explain' },
  { label: '06. Compare, Evaluate and Discuss', id: 'compare-evaluate-discuss' },
  { label: '07. How the mark scheme really reads a command word', id: 'how-mark-scheme-reads' },
  { label: '08. The five-second habit that fixes it', id: 'five-second-habit' },
  { label: '09. How parents can practise this at home', id: 'home-practice' },
  { label: '10. Quick reference for common command words', id: 'quick-reference' },
  { label: '11. Bringing it together', id: 'bringing-it-together' },
  { label: '12. Frequently asked questions', id: 'faqs' }
];

const COMMAND_WORDS_TABLE = [
  { word: 'State / Give', wants: 'A short, direct fact', markIn: 'One correct line, nothing more', example: '"State the unit of electrical resistance." -> Ohms (Omega)', tag: 'Direct' },
  { word: 'Describe', wants: 'What happens or what you observe', markIn: 'Accurate observations and steps', example: '"Describe how the rate of reaction changes over time."', tag: 'Observation' },
  { word: 'Explain', wants: 'Why it happens', markIn: 'Reasons: because, therefore, this causes', example: '"Explain why the rate of reaction decreases as reactants are consumed."', tag: 'Reasoning' },
  { word: 'Compare', wants: 'Similarities and differences, linked', markIn: 'whereas, both, in contrast', example: '"Compare the structure of arteries and veins."', tag: 'Comparative' },
  { word: 'Calculate', wants: 'A numerical answer with working', markIn: 'Correct method shown, then the value', example: '"Calculate the kinetic energy of the 0.5 kg cart."', tag: 'Quantitative' },
  { word: 'Suggest', wants: 'A sensible idea for an unfamiliar case', markIn: 'Applying what you know to a new situation', example: '"Suggest why deep-sea organisms have flexible cell membranes."', tag: 'Application' },
  { word: 'Evaluate / Discuss', wants: 'Both sides, then a judgement', markIn: 'For, against, and a clear conclusion', example: '"Evaluate the economic and environmental impacts of wind farms."', tag: 'Synoptic' },
];

const RELATED_BLOGS = [
  {
    slug: 'exam-stamina-uae-students',
    category: 'Psychology of Learning',
    title: "Exam Stamina: Why Your Child Can't Sit the Full Paper",
    description: 'Why unbroken focus breaks down halfway through a paper and how to build cognitive endurance before exam season.',
  },
  {
    slug: 'physics-understanding-vs-marks',
    category: 'Psychology of Learning',
    title: 'Your Child Understands Physics. So Why Are the Marks Still Low?',
    description: 'The gap between understanding and exam performance: retrieval, working memory overload, and nerves.',
  },
];

function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-8 mb-3 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/40 mb-1">{num}</span>
      <h2 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h2>
    </div>
  );
}

function NarrativeBox({ label, children }: { label: string; children: React.ReactNode }) {
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

export default function CommandWordsBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const filteredWords = selectedTag === 'All'
    ? COMMAND_WORDS_TABLE
    : COMMAND_WORDS_TABLE.filter(w => w.tag === selectedTag);

  const tags = ['All', 'Direct', 'Observation', 'Reasoning', 'Comparative', 'Quantitative', 'Application', 'Synoptic'];

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
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Academic & Exam Skills', url: '/blogs/academic-exam-skills' },
            { name: 'Command Words in Exams', url: canonical },
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
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
            },
            reviewer: {
              name: 'Ustaad Editorial Team',
              url: '/editorial',
              jobTitle: 'Curriculum & Academic Review Board',
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
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">Command Words in Exams</span>
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
                    {' '}<a href="/authors/nimra-shahzada" className="text-gray-500 hover:text-[#0f4a9b]">| writer on learning and the psychology of studying</a>
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
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 pt-1">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  First published: {BLOG.publishedText} · Last reviewed: {BLOG.reviewedText}
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A]" />{BLOG.readTime}
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
              Here is something that happens in exam halls across the UAE every single session. A student reads a question, recognises the topic, feels a wave of relief, and writes down everything they know about it. Three neat paragraphs. Then the paper comes back and the six-mark question scored two.
            </p>
            <p>
              The student is upset, and understandably so. They knew the material. They wrote a lot. So where did the marks go?
            </p>
            <p>
              Almost always, the answer is a single word near the start of the question that the student read straight past. <em>Describe</em>. <em>Explain</em>. <em>Compare</em>. <em>Evaluate</em>. <em>State</em>. These are called command words, and they are the exam telling you, in plain language, exactly what kind of answer will earn the marks. Miss the command word and you can write a page of correct facts and still lose most of the marks, because you answered a question the examiner did not ask.
            </p>
            <p>
              As examiners, this is the single most common way we see capable students throw marks away. The good news is that it is also one of the fastest things to fix. You do not need to learn more content. You need to learn to read six or seven words properly.
            </p>
          </div>

          {/* Table of Contents */}
          <TOC open={tocOpen} setOpen={setTocOpen} />

          {/* 01. Quick answers */}
          <SectionHeading num="01" id="quick-answers">
            Quick answers before you read
          </SectionHeading>
          <div className="space-y-2.5 my-4">
            {[
              { q: '1. What is a command word?', a: 'The verb in a question that tells you what to do: describe, explain, compare, evaluate, and so on.' },
              { q: '2. Why does it matter so much?', a: 'The mark scheme rewards a specific type of answer for each command word. The wrong type scores low even when the facts are right.' },
              { q: '3. Which one costs the most marks?', a: 'Confusing \'describe\' with \'explain\' is the classic. One wants what happens, the other wants why.' },
              { q: '4. How do we fix it?', a: 'Train your child to circle the command word before writing anything, and to know what each one demands.' },
              { q: '5. Is this a quick win?', a: 'Yes. It is content they already have, unlocked by better reading. Marks can move within weeks.' }
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-[#0f4a9b]/12 bg-[#f8fafd]">
                <span className="font-bold text-xs text-[#0a1f3d] block mb-1">{item.q}</span>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">{item.a}</p>
              </div>
            ))}
          </div>

          {/* 02. What a command word actually is */}
          <SectionHeading num="02" id="what-it-actually-is">
            What a command word actually is
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Every exam question is really two parts joined together. There is the topic, which is what the question is about, and there is the command word, which is what the question wants you to do with that topic.
            </p>
            <p>
              Take a question like: <em>"Explain why a plant wilts when it is not watered."</em> The topic is plant water loss. The command word is <strong>explain</strong>. A student who knows about osmosis and turgor pressure has the topic covered. But if they only describe what happens, the leaves droop, the stem bends, they have not explained why, and the marks for reasoning are gone.
            </p>
            <p>
              The mark scheme is built around the command word, not around how much you know. For an explain question, the marks are sitting behind the words <em>because</em> and <em>therefore</em> and <em>this causes</em>. For a describe question, they are sitting behind what you observe. Same topic, completely different answer, and the command word is the only thing telling you which one to give.
            </p>
          </div>

          <NarrativeBox label="EXAMINER'S NOTE">
            <p className="font-semibold text-[#0a1f3d]">
              A question is a topic plus a command word. Most students read the topic and skip the command word. The marks live in the command word.
            </p>
          </NarrativeBox>

          <InlineImage
            src="/images/blogs/command-words-exam-hall.png"
            alt="Secondary school students in the UAE sitting Cambridge and Edexcel examinations under timed conditions in an exam hall"
            caption="In the exam hall: Under timed pressure, reading past the command word is the most common reason students lose marks on topics they understand."
          />

          {/* 03. Words that cost marks */}
          <SectionHeading num="03" id="words-that-cost-marks">
            The command words that cost the most marks
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Some command words are close cousins, and the small difference between them is exactly where students slip. These are the ones we see cost the most marks, session after session.
            </p>
          </div>

          {/* 04. Describe vs Explain */}
          <SectionHeading num="04" id="describe-vs-explain">
            Describe versus explain
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              This is the big one, and it appears in almost every subject. <strong>Describe</strong> asks for what happens. <strong>Explain</strong> asks for why it happens. They look similar and they are not.
            </p>

            {/* Side-by-side table */}
            <div className="my-5 rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-[#0f4a9b] text-white">
                    <th className="p-3 w-1/2 font-bold border-r border-white/10">"Describe" wants</th>
                    <th className="p-3 w-1/2 font-bold">"Explain" wants</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 border-r border-slate-100 text-slate-700 font-medium">What you see or what occurs</td>
                    <td className="p-3 text-slate-700 font-medium">The reason it occurs</td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-[#f8fafd]">
                    <td className="p-3 border-r border-slate-100 text-slate-600">The graph rises then levels off</td>
                    <td className="p-3 text-slate-600">The rate slows because the substrate runs out</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 border-r border-slate-100 text-slate-600">Facts, observations, steps</td>
                    <td className="p-3 text-slate-600">Causes, mechanisms, <em>because</em> and <em>therefore</em></td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-[#f8fafd]">
                    <td className="p-3 border-r border-slate-100 text-slate-600 font-semibold text-rose-600">No reasoning needed</td>
                    <td className="p-3 text-slate-600 font-semibold text-emerald-700">Reasoning is the whole point</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              A quick test your child can use in the hall: if they can answer without ever writing the word <strong>because</strong>, the question was probably describe. If the answer only makes sense with a <em>because</em> in it, the question was explain and every sentence should be building toward that reason.
            </p>

            {/* Describe vs Explain Visual Comparison Image */}
            <InlineImage
              src="/images/blogs/describe-vs-explain-command-words.jpg"
              alt="Study notebook with structured visual comparison between Describe and Explain exam answers"
              caption="Comparative breakdown: Notice how 'Describe' focuses on key observable characteristics, while 'Explain' requires formulaic reasoning with causal connectors (because, so, due to)."
            />
          </div>

          {/* 05. State and give vs explain */}
          <SectionHeading num="05" id="state-give-vs-explain">
            State and give versus explain
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              <strong>State</strong> and <strong>give</strong> are asking for a short, direct answer. A fact, a name, a number. No sentence needed, no reasoning, no padding. Students often over-write these, spending three minutes and a paragraph on a question that wanted four words. That wastes time they will need later in the paper. If the command word is state, one line is the correct length.
            </p>
          </div>

          {/* 06. Compare, Evaluate and Discuss */}
          <SectionHeading num="06" id="compare-evaluate-discuss">
            Compare, Evaluate and Discuss
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              <strong>Compare</strong> is a trap for a specific reason. It asks for similarities and differences between two things, in the same sentence. A student who writes a paragraph about the first thing, then a separate paragraph about the second, has not compared them, they have described two things side by side. The mark scheme wants linked statements: <em>"A is faster than B, whereas B is more accurate."</em> The words <em>whereas</em>, <em>both</em>, and <em>in contrast</em> are what earn the marks here.
            </p>
            <p>
              <strong>Evaluate and discuss</strong> appear more at A-Level and carry the most marks per question. They ask for a two-sided answer and a judgement. Arguments for, arguments against, then a conclusion that actually decides something. A student who argues only one side, however well, has answered half the question. The marks at the top of the scheme are reserved for the student who weighs both sides and then commits to a view.
            </p>
          </div>

          <NarrativeBox label="EXAMINER'S NOTE">
            <p className="font-semibold text-[#0a1f3d]">
              Describe wants what, explain wants why, compare wants linked differences, evaluate wants both sides plus a verdict. Knowing which is which is worth more than knowing extra content.
            </p>
          </NarrativeBox>

          {/* 07. How the mark scheme reads */}
          <SectionHeading num="07" id="how-mark-scheme-reads">
            How the mark scheme really reads a command word
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Parents rarely see a mark scheme, so this part is worth understanding. When we mark, we are not rewarding effort or the amount written. We are matching what the student wrote against a list of specific points the command word requires.
            </p>
            <p>
              On an explain question worth four marks, the scheme usually lists four reasoning points. A student earns a mark each time they hit one, and writing three descriptive sentences that never reach a reason earns nothing, no matter how neat or long they are. This is why a student can fill the space, feel they did well, and still score low. They wrote plenty. They just did not write the type of thing the command word was pointing at.
            </p>
            <p>
              It also explains a comment parents hear a lot: <em>"my child understands it, they just do not show it in exams."</em> Often the understanding is genuinely there. What is missing is the habit of aiming the answer at the command word so the understanding actually lands on the mark scheme. We wrote about that gap more fully in{' '}
              <a href="/blogs/physics-understanding-vs-marks" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                Your Child Understands Physics. So Why Are the Marks Still Low?
              </a>
              , and command words are one of the biggest reasons it happens.
            </p>
          </div>

          {/* 08. Five-second habit */}
          <SectionHeading num="08" id="five-second-habit">
            The five-second habit that fixes it
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              The fix is almost embarrassingly simple, which is why it works. Before writing a single word of an answer, your child does three things.
            </p>

            <div className="space-y-2.5 my-4">
              <div className="p-4 rounded-xl border border-[#0f4a9b]/15 bg-[#f8fafd] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <h4 className="font-bold text-xs text-[#0a1f3d] mb-1">Circle the command word.</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Physically circle it on the paper. This one action stops the brain from racing straight into brain-dumping everything it knows.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#0f4a9b]/15 bg-[#f8fafd] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <h4 className="font-bold text-xs text-[#0a1f3d] mb-1">Say what it wants.</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    In their head: <em>this says explain, so I need reasons, not just what happens.</em>
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#0f4a9b]/15 bg-[#f8fafd] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <h4 className="font-bold text-xs text-[#0a1f3d] mb-1">Check the marks.</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    A four-mark question wants roughly four points. That number tells them how much to write, so they do not under-answer or waste time over-answering.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Three seconds each, before every question. It feels almost too small to matter, and it routinely moves a grade, because the content was never the problem. The aim was.
            </p>

            {/* Section 08 Image: The 5-Second Circling Habit */}
            <InlineImage
              src="/images/blogs/command-word-circling-habit.jpg"
              alt="Student using a highlighter to circle the command word Evaluate on an IGCSE Physics paper before planning their answer"
              caption="The 5-second habit: Circling the command verb on the exam paper forces active identification before rushing into the answer."
            />
          </div>

          {/* 09. Home practice */}
          <SectionHeading num="09" id="home-practice">
            How parents can practise this at home
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              You do not need to know the subject to help with this. Command words are the same across biology, history and economics, so you can drill them without understanding the topic at all.
            </p>

            <ul className="space-y-2.5 my-3 pl-2">
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>
                  <strong>Take any past paper:</strong> Go through it together and just circle the command word in every question. Do not answer them. The circling is the skill.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>
                  <strong>Ask what each command word wants:</strong> Ask your child what each command word wants before they attempt the answer. If they can say <em>"describe wants what happens,"</em> they are already ahead of most of the hall.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>
                  <strong>Verify against the mark scheme:</strong> When they mark their own work against the mark scheme, ask one question: did the answer match the command word? Lost marks are very often a command-word mismatch, not a knowledge gap.
                </span>
              </li>
            </ul>

            <InlineImage
              src="/images/blogs/command-words-home-practice.png"
              alt="Mother and teenage son practising past exam papers together at home, identifying command words"
              caption="Home practice in action: You don't need to be an expert in the subject—simply going through past papers together and circling the command words builds an instinctive habit before exam day."
            />

            <p>
              If you have not started working with past papers yet, our guide to{' '}
              <a href="/blogs/igcse-preparation-past-papers-final-step" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                why past papers are the final step, not the first
              </a>
              , explains how to sequence them so command-word practice fits in at the right stage.
            </p>
          </div>

          {/* 10. Quick Reference Table */}
          <SectionHeading num="10" id="quick-reference">
            A quick reference for the common command words
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Keep this near your child's desk. It covers the command words that appear most often across IGCSE and A-Level papers.
            </p>

            <InlineImage
              src="/images/blogs/command-words-reference.png"
              alt="Cork pin-up board above a study desk displaying a quick reference guide of key command word definitions"
              caption="Visual study reference: Having a clean command-word summary sheet on a study board reminds students of the vital distinction between stating, describing, explaining, comparing, and evaluating."
            />

            {/* Filter pills */}
            <div className="flex flex-wrap gap-1.5 my-3">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTag(t)}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition ${
                    selectedTag === t
                      ? 'bg-[#0f4a9b] text-white border-[#0f4a9b]'
                      : 'bg-[#f8fafd] text-gray-600 border-slate-200 hover:border-[#0f4a9b]/40'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="my-4 rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#0f4a9b] text-white">
                      <th className="p-3 font-bold">Command word</th>
                      <th className="p-3 font-bold">What it wants</th>
                      <th className="p-3 font-bold">The mark is in</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {filteredWords.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 1 ? 'bg-[#f8fafd]' : 'hover:bg-slate-50'}>
                        <td className="p-3 font-bold text-[#0a1f3d] whitespace-nowrap">{row.word}</td>
                        <td className="p-3 text-slate-700">{row.wants}</td>
                        <td className="p-3 text-[#0f4a9b] font-medium">{row.markIn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 11. Bringing it together */}
          <SectionHeading num="11" id="bringing-it-together">
            Bringing it together
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Command words are the quietest reason capable students underperform, and one of the easiest to fix. There is no new content to learn. There is just a word in every question that has been telling the student what to do all along, and a habit of reading it before the pen moves.
            </p>
            <p>
              A student who circles the command word, knows what it demands, and aims every sentence at it, will pull marks out of knowledge they already had. That is the fastest kind of improvement there is, and it starts with a past paper and a pen this evening, not with more revision.
            </p>
            <p>
              If your child is writing plenty and scoring less than they should, do not add more content. Watch how they read the question first. The marks are usually hiding in that one word they keep reading past.
            </p>
          </div>

          {/* 12. FAQ Section */}
          <SectionHeading num="12" id="faqs">
            Frequently asked questions
          </SectionHeading>
          <div className="my-5">
            <FAQAccordion />
          </div>

          {/* Related Articles */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <h3 className="text-sm font-extrabold text-[#0a1f3d] mb-4 uppercase tracking-wider">
              Related Guides on Psychology of Learning
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {RELATED_BLOGS.map((item, i) => (
                <a
                  key={i}
                  href={`/blogs/${item.slug}`}
                  className="group p-5 bg-[#f8fafd] hover:bg-[#0f4a9b]/[0.03] border border-[#0f4a9b]/15 rounded-2xl transition shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#0f4a9b]">
                      {item.category}
                    </span>
                    <p className="text-sm font-extrabold text-[#0a1f3d] mt-2 mb-1.5 group-hover:text-[#0f4a9b] transition leading-snug">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed mb-0">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Author & Reviewer Info Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#0f4a9b]/15 bg-white p-5 shadow-xs flex flex-col justify-start">
              <span className="inline-block self-start px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-[#0f4a9b] border border-[#0f4a9b]/20 bg-[#0f4a9b]/8 mb-3">
                ABOUT THE AUTHOR
              </span>
              <h4 className="font-extrabold text-[#0a1f3d] text-base mb-1">
                <a href="/authors/nimra-shahzada" className="text-[#0a1f3d] hover:text-[#0f4a9b] transition">
                  Nimra Shahzada
                </a>
              </h4>
              <p className="text-xs text-[#0f4a9b] font-semibold mb-2.5 leading-snug">
                Writer on learning and the psychology of studying
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Nimra writes on study technique, memory consolidation, and exam preparation for British and IB curriculum students across the UAE.
              </p>
            </div>

            <div className="rounded-2xl border border-[#C7A24A]/25 bg-[#fffdfa] p-5 shadow-xs flex flex-col justify-start">
              <span className="inline-block self-start px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-[#A8892A] border border-[#C7A24A]/30 bg-[#C7A24A]/12 mb-3">
                REVIEWED BY
              </span>
              <h4 className="font-extrabold text-[#0a1f3d] text-base mb-1">
                <a href="/editorial" className="text-[#0a1f3d] hover:text-[#0f4a9b] transition">
                  Ustaad Editorial Team
                </a>
              </h4>
              <p className="text-xs text-[#A8892A] font-semibold mb-2.5 leading-snug">
                Academic &amp; Curriculum Review Board
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                The Ustaad Editorial Team reviews each guide for accuracy, educational validity, and parent clarity before it is published. See{' '}
                <a href="/editorial" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                  how our editorial review works
                </a>.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {BLOG.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 bg-[#f0f4f8] rounded-full text-xs font-bold text-[#0a1f3d]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Diagnostic Assessment CTA Card */}
          <div
            className="mt-10 mb-8 rounded-3xl p-6 sm:p-8 md:p-10 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C7A24A]/40 text-[#f5d77f] text-xs font-bold mb-4 backdrop-blur-sm">
              <Activity className="w-3.5 h-3.5 text-[#C7A24A]" /> Diagnostic Assessment
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug mb-3 max-w-xl mx-auto tracking-tight">
              Pinpoint where your child&apos;s revision is leaking marks
            </h3>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-6 max-w-xl mx-auto font-normal">
              Our curriculum tutors run short diagnostic sessions that show exactly where recognition is standing in for recall, and how to fix it before the exam.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="/contact#form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white hover:brightness-110 transition text-sm w-full sm:w-auto shadow-md"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
              >
                Book a Free Trial
              </a>
              <a
                href="https://wa.me/971561249005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] border border-transparent rounded-xl font-bold text-white transition text-sm shadow-md w-full sm:w-auto"
              >
                <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Social share bottom */}
          <div className="my-6 py-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-[#0a1f3d]">Share this guide with other parents:</span>
            <SocialShare url={shareUrl} title={BLOG.title} />
          </div>

        </div>
      </section>
    </Layout>
  );
}
