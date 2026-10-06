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
import { WhatsAppIcon } from './shared/WhatsAppIcon';

const BLOG = {
  title: 'Command Words in IGCSE & A-Level Exams: Guide | Ustaad',
  titleLine1: 'Command Words: The One Word in Every',
  titleLine2: 'IGCSE and A-Level Question That Decides the Marks',
  heading: 'Command Words: The One Word in Every IGCSE and A-Level Question That Decides the Marks',
  subtitle: 'Your child knows the content but loses marks anyway. The reason is usually command words. Here is how to read them and answer exactly what the examiner wants.',
  categoryBadge: 'USTAAD UAE · ACADEMIC & EXAM SKILLS',
  categoryUrl: '/blogs/academic-exam-skills',
  slug: 'command-words-igcse-a-level-exams',
  canonical: '/blogs/command-words-igcse-a-level-exams',
  description:
    "A parent's guide to IGCSE and A-Level command words: what each one asks for, how mark schemes reward it, and a five-second habit to practise at home.",
  heroImage: '/images/blogs/command-words-hero.webp',
  heroAlt: 'Secondary student in UAE reviewing Cambridge and Edexcel IGCSE exam paper mark scheme and command words',
  heroCaption: 'Command words usually sit in the first few words of a question.',
  datePublished: '2026-09-25',
  dateModified: '2026-09-28',
  publishedText: 'Sep 2026',
  reviewedText: 'Sep 2026',
  readTime: '6 min read',
  author: 'Cambridge IGCSE & A-Level Examiner (name withheld)',
  authorRole: 'Cambridge IGCSE & A-Level Examiner',
  authorUrl: '/editorial#examiner-writer',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Curriculum & Academic Review Board',
  reviewerUrl: '/editorial',
  tags: [
    'Academic & Exam Skills',
    'Command Words',
    'IGCSE Exam Technique',
    'A-Level Exam Technique',
    'Mark Schemes',
    'Exam Preparation UAE',
  ],
};

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

const FAQS = [
  {
    q: 'Does this apply to IB students?',
    a: 'Yes. The IB calls them command terms and publishes its own list for each subject. The principle is the same: the term tells your child what kind of answer earns the marks. For MYP and DP students, keep the subject guide\'s list of command terms beside every past paper.'
  },
  {
    q: 'Why does my child lose marks when they clearly know the topic?',
    a: 'Usually because they answered the wrong type of question. Knowing the topic is not enough if the answer does not match the command word. Writing what happens when the question asked why will lose the reasoning marks every single time.'
  },
  {
    q: 'What does "suggest" mean in a science paper?',
    a: 'It usually signals a situation your child has not met before, where more than one answer can earn the mark. They are expected to apply what they know to the new example rather than recall a fact from the textbook. A sensible idea with a clear reason is what scores.'
  },
  {
    q: 'Are command words the same across different subjects?',
    a: 'Within one exam board, largely yes. Across boards the definitions differ slightly, and some subjects add terms of their own, so check the list for your child\'s board: Cambridge, Pearson Edexcel and AQA each publish one. The habit of reading the command word first carries over to every paper.'
  },
  {
    q: 'How can I help if I do not know the subject?',
    a: 'You do not need to. Sit with a past paper and simply circle the command word in each question together, then ask your child what each one wants. You are training how they read the question, which needs no subject knowledge from you at all.'
  },
  {
    q: 'How quickly can this improve grades?',
    a: 'It varies from child to child. Because the knowledge is usually already there, many students start keeping marks they used to lose once they reliably read the command word first. A few timed past papers is the quickest way to see where your child stands.'
  }
];

const TOC_ITEMS = [
  { label: 'Quick answers before you read', id: 'quick-answers' },
  { label: 'What a command word actually is', id: 'what-it-actually-is' },
  { label: 'The command words that cost the most marks', id: 'words-that-cost-marks' },
  { label: 'Describe versus explain', id: 'describe-vs-explain' },
  { label: 'State and give versus explain', id: 'state-give-vs-explain' },
  { label: 'Compare, Evaluate and Discuss', id: 'compare-evaluate-discuss' },
  { label: 'How the mark scheme really reads a command word', id: 'how-mark-scheme-reads' },
  { label: 'The five-second habit that fixes it', id: 'five-second-habit' },
  { label: 'How parents can practise this at home', id: 'home-practice' },
  { label: 'A quick reference for the common command words', id: 'quick-reference' },
  { label: 'Bringing it together', id: 'bringing-it-together' },
  { label: 'Frequently asked questions', id: 'faqs' }
];

const COMMAND_WORDS_TABLE = [
  { word: 'State / Give', wants: 'A short, direct fact', markIn: 'One correct line, nothing more', example: '"State the unit of electrical resistance." -> Ohms (Omega)', tag: 'Direct' },
  { word: 'Describe', wants: 'What happens or what you observe', markIn: 'Accurate observations and steps', example: '"Describe how the rate of reaction changes over time."', tag: 'Observation' },
  { word: 'Explain', wants: 'Why it happens', markIn: 'Reasons: because, therefore, this causes', example: '"Explain why the rate of reaction decreases as reactants are consumed."', tag: 'Reasoning' },
  { word: 'Compare', wants: 'Similarities and differences, linked', markIn: 'whereas, both, in contrast', example: '"Compare the structure of arteries and veins."', tag: 'Comparative' },
  { word: 'Calculate', wants: 'A numerical answer with working', markIn: 'Correct method shown, then the value', example: '"Calculate the kinetic energy of the 0.5 kg cart."', tag: 'Quantitative' },
  { word: 'Suggest', wants: 'A sensible idea for an unfamiliar case', markIn: 'Applying what you know to a new situation', example: '"Suggest why deep-sea organisms have flexible cell membranes."', tag: 'Application' },
  { word: 'Evaluate', wants: 'Weigh it up, then reach a judgement', markIn: 'Evidence on both sides and a clear verdict', example: '"Evaluate the economic and environmental impacts of wind farms."', tag: 'Judgement' },
  { word: 'Discuss', wants: 'Explore the issue in depth, from more than one side', markIn: 'A structured argument, with a conclusion where the mark scheme asks for one', example: '"Discuss the factors affecting exchange rates."', tag: 'Judgement' },
];

const RELATED_BLOGS = [
  {
    slug: 'igcse-preparation-past-papers-final-step',
    category: 'Academic & Exam Skills',
    title: 'IGCSE Preparation: Why Past Papers Are the Final Step, Not the First',
    description: 'Why past papers should be the final diagnostic step, not the foundation of revision, and how to sequence practice effectively.',
  },
  {
    slug: 'why-igcse-biology-students-lose-marks-on-6-mark-questions',
    category: 'Academic & Exam Skills',
    title: 'Why IGCSE Biology Students Lose Marks on 6-Mark Questions',
    description: 'The exact reasons students drop marks on extended response questions in IGCSE Biology and how mark schemes really award points.',
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

function SubSectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-8 mb-3 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/40 mb-1">{num}</span>
      <h3 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h3>
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
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#25d366]/10 hover:bg-[#25d366]/20 transition text-[#25d366]"
        aria-label="Share on WhatsApp"
      >
        <WhatsAppIcon className="w-4 h-4 fill-current" />
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

  const tags = ['All', 'Direct', 'Observation', 'Reasoning', 'Comparative', 'Quantitative', 'Application', 'Judgement'];

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
            { name: 'Command Words in Exams', url: canonical },
          ]),
          articleSchema({
            title: BLOG.heading,
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: {
              name: 'Cambridge IGCSE & A-Level Examiner (name withheld)',
              url: 'https://ustaad.ae/editorial#examiner-writer',
              jobTitle: 'Cambridge IGCSE & A-Level Examiner',
              worksFor: {
                '@id': 'https://ustaad.ae/#organization',
              },
            },
            reviewer: {
              name: 'Ustaad Editorial Team',
              url: 'https://ustaad.ae/editorial',
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
                  <a href="/editorial#examiner-writer" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    Cambridge IGCSE &amp; A-Level Examiner
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Reviewed by:</span>{' '}
                  <a href="/editorial" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">Ustaad Editorial Team</a>
                  {' '}| <a href="/editorial" className="text-gray-500 hover:text-[#0f4a9b]">Curriculum &amp; Academic Review Board</a>
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
              As examiners, this is the single most common way we see capable students throw marks away. It is also one of the more fixable problems a student can have. You do not need to learn more content. You need to learn to read six or seven words properly.
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
              { q: 'How do we fix it?', a: 'Train your child to circle the command word before writing anything, and to know what each one demands.' },
              { q: 'Is this a quick win?', a: 'Often, yes. The knowledge is usually already there; what changes is how your child reads the question.' }
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
              The mark scheme is built around the command word, not around how much you know. For an explain question, the marks are sitting behind the words <em>because</em> and <em>therefore</em> and <em>this causes</em>. For a describe question, they are sitting behind what you observe. Same topic, completely different answer, and the command word is the only thing telling you which one to give. Exam boards like Cambridge International publish an{' '}
              <a
                href="https://www.cambridgeinternational.org/support-and-training-for-schools/support-for-teachers/command-words/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]"
              >
                official command words list
              </a>
              {' '}to help students and teachers align with these exact mark-scheme requirements.
            </p>
          </div>

          <NarrativeBox label="EXAMINER'S NOTE">
            <p className="font-semibold text-[#0a1f3d]">
              A question is a topic plus a command word. Most students read the topic and skip the command word. The marks live in the command word.
            </p>
          </NarrativeBox>

          <InlineImage
            src="/images/blogs/command-words-exam-hall.webp"
            alt="Secondary school students in the UAE sitting Cambridge and Edexcel examinations under timed conditions in an exam hall"
            caption="Students sitting timed papers in a UAE exam hall."
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
          <SubSectionHeading num="04" id="describe-vs-explain">
            Describe versus explain
          </SubSectionHeading>
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
              src="/images/blogs/describe-vs-explain-command-words.webp"
              alt="Study notebook with structured visual comparison between Describe and Explain exam answers"
              caption="Describe records what happens; explain gives the reason, usually with 'because' or 'so'."
            />
          </div>

          {/* 05. State and give vs explain */}
          <SubSectionHeading num="05" id="state-give-vs-explain">
            State and give versus explain
          </SubSectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              <strong>State</strong> and <strong>give</strong> are asking for a short, direct answer. A fact, a name, a number. No sentence needed, no reasoning, no padding. Students often over-write these, spending three minutes and a paragraph on a question that wanted four words. That wastes time they will need later in the paper. If the command word is state, one line is the correct length.
            </p>
          </div>

          {/* 06. Compare, Evaluate and Discuss */}
          <SubSectionHeading num="06" id="compare-evaluate-discuss">
            Compare, Evaluate and Discuss
          </SubSectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Compare is a trap for a specific reason. It asks what is alike and what is different about two things. Cambridge's own wording is &ldquo;similarities and/or differences&rdquo;, but the answers that score well link the two in one sentence rather than describing each thing separately.
            </p>
            <p>
              Evaluate and discuss appear more at{' '}
              <a href="/a-level" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                A-Level
              </a>{' '}
              and carry the most marks per question, but they are not quite the same. Evaluate asks your child to weigh something up and reach a judgement. Discuss asks for a structured, in-depth look at the issue from more than one side, and many A-Level mark schemes still reward a conclusion. In both, a student who argues only one side has answered half the question.
            </p>
          </div>

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
              , and command words are one of the biggest reasons it happens. Building this habit into timed practice is a large part of how we approach{' '}
              <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                exam preparation with a 1-to-1 tutor
              </a>.
            </p>
          </div>

          {/* 08. Five-second habit */}
          <SectionHeading num="08" id="five-second-habit">
            The five-second habit that fixes it
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              The fix is small. Before writing a single word of an answer, your child does three things.
            </p>

            <div className="space-y-2.5 my-4">
              <div className="p-4 rounded-xl border border-[#0f4a9b]/15 bg-[#f8fafd] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <h3 className="font-bold text-xs text-[#0a1f3d] mb-1">Circle the command word.</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Physically circle it on the paper. This one action stops the brain from racing straight into brain-dumping everything it knows.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#0f4a9b]/15 bg-[#f8fafd] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <h3 className="font-bold text-xs text-[#0a1f3d] mb-1">Say what it wants.</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    In their head: <em>this says explain, so I need reasons, not just what happens.</em>
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#0f4a9b]/15 bg-[#f8fafd] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <h3 className="font-bold text-xs text-[#0a1f3d] mb-1">Check the marks.</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    A four-mark question wants roughly four points. That number tells them how much to write, so they do not under-answer or waste time over-answering.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Together, that takes about five seconds per question. It feels too small to matter, but when the content is already there, aiming it is often the part that was missing.
            </p>

            {/* Section 08 Image: The 5-Second Circling Habit */}
            <InlineImage
              src="/images/blogs/command-word-circling-habit.webp"
              alt="Student using a highlighter to circle the command word Evaluate on an IGCSE Physics paper before planning their answer"
              caption="Marking the command word before writing."
            />
          </div>

          {/* 09. Home practice */}
          <SectionHeading num="09" id="home-practice">
            How parents can practise this at home
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              You do not need to know the subject to help with this. Within one exam board, command words mean the same across biology, history and economics, so you can drill them without understanding the topic at all.
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
              src="/images/blogs/command-words-home-practice.webp"
              alt="Mother and teenage son practising past exam papers together at home, identifying command words"
              caption="A parent and teenager going through a past paper together."
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
              Keep this near your child's desk. It covers the command words that appear most often across{' '}
              <a href="/igcse" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                IGCSE
              </a>{' '}
              and{' '}
              <a href="/a-level" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                A-Level
              </a>{' '}
              papers.
            </p>

            <InlineImage
              src="/images/blogs/command-words-reference.webp"
              alt="Cork pin-up board above a study desk displaying a quick reference guide of key command word definitions"
              caption="A command-word reference sheet above a study desk."
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
              A student who circles the command word, knows what it demands, and aims every sentence at it, will pull marks out of knowledge they already had. It is often one of the quicker things to change, and it starts with a past paper and a pen this evening, not more revision.
            </p>
            <p>
              If your child is writing plenty and scoring less than they should, sit with their last marked paper and check one thing: did each answer do what the command word asked?
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
              Related Guides on Academic &amp; Exam Skills
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
              <h4 className="font-extrabold text-[#0a1f3d] text-base mb-0.5">
                Cambridge IGCSE &amp; A-Level Examiner
              </h4>
              <p className="text-xs text-gray-500 italic mb-2.5">
                Name withheld on request
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Marks Cambridge IGCSE and A-Level papers and tutors 1-to-1 with Ustaad. Exam boards restrict examiners from publicising their role.{' '}
                <a href="/editorial#examiner-writer" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                  About our examiner writer
                </a>
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
              Find out which command words are costing your child marks
            </h3>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-6 max-w-xl mx-auto font-normal">
              In a free 30-minute diagnostic session, an Ustaad tutor gives your child a timed question, marks it against the real mark scheme and shows you where the marks went. Often it is a command-word mismatch rather than a gap in knowledge.
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
                href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20read%20your%20guide%20on%20command%20words%20and%20would%20like%20a%20free%20diagnostic%20session%20for%20my%20child."
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
