import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar, Clock, BookOpen, ChevronDown, ChevronUp,
  Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle,
  Sparkles, ArrowRight, User
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';
import { WhatsAppIcon } from './shared/WhatsAppIcon';

const BLOG = {
  title: 'Sleep and Memory: Why All-Nighters Fail Students | Ustaad',
  titleLine1: 'Sleep and Memory:',
  titleLine2: 'Why All-Nighters Backfire for UAE Students',
  heading: 'Sleep and Memory: Why All-Nighters Backfire for UAE Students',
  subtitle:
    "Extra revision hours feel productive, but sleep is where memory is actually built. Here is how to plan revision so your child's sleep works for them, not against them.",
  categoryBadge: 'USTAAD UAE · PSYCHOLOGY OF LEARNING',
  categoryUrl: '/blogs/psychology-of-learning',
  slug: 'sleep-and-memory-why-all-nighters-backfire',
  canonical: '/blogs/sleep-and-memory-why-all-nighters-backfire',
  description:
    'Does sleep matter more than extra revision? Learn how sleep builds memory, why all-nighters backfire, and how UAE students can plan revision around sleep.',
  heroImage: '/images/blogs/sleep-and-memory-students-uae-hero.webp',
  heroAlt: 'UAE teenage student asleep at a tidy bedroom desk beside closed revision notes with a moon visible through the window',
  datePublished: '2026-09-28',
  dateModified: '2026-09-28',
  publishedText: 'Sep 2026',
  readTime: '9 min read',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  authorPhoto: '/images/team/nimra-shahzada-v2.jpg',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Ustaad Editorial Team',
  reviewerRole: 'Curriculum & Academic Review Board',
  reviewerUrl: '/editorial',
  tags: [
    'Sleep and Memory',
    'All-Nighters',
    'Teenage Sleep',
    'Memory Consolidation',
    'Revision Schedule',
    'Exam Preparation UAE',
    'Ramadan Study Routine'
  ],
};

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

const FAQS = [
  {
    q: 'How much sleep do teenagers need for exams?',
    a: 'Sleep medicine guidance suggests roughly 8 to 10 hours a night for ages 13 to 18. During exam season it helps to aim for the middle of that range and to keep bedtimes consistent across the whole week, not only the night before.'
  },
  {
    q: 'Is it better to stay up revising or to sleep before an exam?',
    a: 'Usually sleep. Studies of students show that trading sleep for extra study is linked to more trouble understanding and worse performance the next day, and tired brains encode new information less well.'
  },
  {
    q: 'Does sleeping after studying really help memory?',
    a: 'Research indicates that sleep helps consolidate what has just been learned. A short, calm review before bed followed by a full night\'s sleep is a sensible pairing.'
  },
  {
    q: 'Should my child study late at night or early in the morning?',
    a: 'Neither is ideal for hard thinking. Most students do best with demanding retrieval work after school and lighter review in the evening. Very early morning cramming is better than an all-nighter, but only if it does not cost sleep.'
  },
  {
    q: 'How can we protect sleep during Ramadan mocks?',
    a: 'Shorten sessions, choose the best available window (often after iftar), avoid late-night marathons, and ask the school how mocks are scheduled. Consistency matters more than volume.'
  },
  {
    q: 'Can a tutor help with revision planning around sleep?',
    a: 'A good tutor can help build a realistic weekly plan, prioritise topics so late-night catch-up is not needed, and teach efficient retrieval methods that make each hour count. Persistent sleep problems should also involve a doctor or the school\'s pastoral team.'
  }
];

const TOC_ITEMS = [
  { id: 'what-sleep-does-for-memory', label: 'What sleep actually does for memory' },
  { id: 'the-all-nighter-trade', label: 'The all-nighter trade: more hours, fewer marks' },
  { id: 'why-teenage-sleep-runs-late', label: 'Why teenage sleep runs late (and school starts early)' },
  { id: 'the-sleep-smart-revision-day', label: 'The sleep-smart revision day' },
  { id: 'seven-sleep-rules', label: 'Seven sleep rules that protect exam performance' },
  { id: 'ramadan-mocks-shifted-sleep', label: 'Ramadan, mocks and shifted sleep' },
  { id: 'what-parents-can-say', label: 'What parents can say (and avoid saying)' },
  { id: 'when-poor-sleep-more-than-habit', label: 'When poor sleep is more than a habit' },
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

function NarrativeBox({ label = "EXAMINER'S NOTE", children }: { label?: string; children: React.ReactNode }) {
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

export default function SleepAndMemoryBlog() {
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
            { name: 'Sleep and Memory', url: canonical },
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
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">Sleep and Memory</span>
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
                    {' '}<a href="/editorial" className="text-gray-500 hover:text-[#0f4a9b]">| Curriculum &amp; Academic Review Board</a>
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

          {/* Hero image (IMAGE 1) */}
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
          </figure>

          {/* Intro Narrative */}
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              It is 2:10 a.m. in Dubai. A Year 12 student has been at her desk since dinner, her physics notes spread across it, a can of energy drink beside the laptop. The mock starts at 8:00. She has decided that three more hours of revision beats three hours of sleep.
            </p>
            <p>
              At 8:40 the next morning she reaches question 3, a topic she covered again at midnight, and finds she can only half-remember it. Her mark on the paper is lower than her practice scores from the week before.
            </p>
            <p>
              She did not revise too little. She removed the step that makes revision last.
            </p>
            <p>
              This guide explains what sleep does for memory, why trading it for extra study often costs marks, and how UAE families can build revision routines that protect both.
            </p>
          </div>

          {/* Table of Contents */}
          <TOC open={tocOpen} setOpen={setTocOpen} />

          {/* 01. What sleep actually does for memory */}
          <SectionHeading num="01" id="what-sleep-does-for-memory">
            What sleep actually does for memory
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Learning happens in two stages. First the brain takes in information (<em>encoding</em>). Then it has to stabilise that information so it can be retrieved later (<em>consolidation</em>).
            </p>
            <p>
              A great deal of consolidation happens while we sleep. Research reviewed by Susanne Diekelmann and Jan Born describes how the brain reactivates recently learned material during sleep and strengthens it, helping to move it into more durable long-term storage.
            </p>
            <p>
              Think of revision as loading boxes into a warehouse, and sleep as the night shift that sorts and shelves them. Skip the night shift and the boxes are still there in the morning, but they are piled by the door and much harder to find in an exam.
            </p>
            <p>
              Sleep also matters before learning. Matthew Walker and colleagues found that people who were sleep-deprived formed weaker new memories than those who had slept. Studying while exhausted is less efficient, so late-night hours produce less than daytime hours do.
            </p>
          </div>

          {/* IMAGE 2: Warehouse photo */}
          <InlineImage
            src="/images/blogs/sleep-memory-consolidation-warehouse-metaphor.webp"
            alt="Teenage boy asleep in his bedroom at night, with subject folders on the shelf and the Dubai skyline outside the window"
          />

          <NarrativeBox label="PARENT TAKEAWAY">
            <p className="font-semibold text-[#0a1f3d]">
              Sleep is not time taken away from revision. It is the part of revision that makes the rest of it last.
            </p>
          </NarrativeBox>

          {/* 02. The all-nighter trade */}
          <SectionHeading num="02" id="the-all-nighter-trade">
            The all-nighter trade: more hours, fewer marks
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              A diary study by Gillen-O'Neel, Huynh and Fuligni tracked 535 US high school students, who logged their study time and sleep for 14 days in each of grades 9, 10 and 12. On days when students cut sleep to study more, they were more likely to report not understanding something taught in class and doing poorly on a test, quiz or homework the next day. Extra hours bought at the expense of sleep did not pay off.
            </p>
            <p>
              Part of the explanation is what sleep loss does to the brain's day-to-day tools. A meta-analysis by Lim and Dinges found that short-term sleep deprivation impairs attention and working memory, which are used constantly during an exam: holding a question in mind, choosing a method, tracking multi-step working.
            </p>
            <p>
              It also tends to hurt in the least noticeable way. A tired student usually still feels capable, but makes more careless errors, reads instructions less carefully and slows down on multi-step problems. This is the same pattern we describe in our guide on{' '}
              <a href="/blogs/exam-stamina-uae-students" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                Exam Stamina: Why Your Child Can't Sit the Full Paper
              </a>
              , where working memory runs short during a long paper. Poor sleep makes that fade arrive sooner.
            </p>

            {/* Side-by-side Table */}
            <div className="my-5 rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#0f4a9b] text-white">
                      <th className="p-3 w-1/3 font-bold border-r border-white/10">Factor</th>
                      <th className="p-3 w-1/3 font-bold border-r border-white/10">The 2 a.m. session</th>
                      <th className="p-3 w-1/3 font-bold">Lights out at a reasonable hour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">Extra study time</td>
                      <td className="p-3 border-r border-slate-100 text-slate-600">2 to 3 more hours</td>
                      <td className="p-3 text-slate-600">None</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-[#f8fafd]">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">Quality of those hours</td>
                      <td className="p-3 border-r border-slate-100 text-rose-600 font-medium">Low: tired brain encodes less well</td>
                      <td className="p-3 text-slate-600">Higher: the day's study was done while alert</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">Consolidation of day's learning</td>
                      <td className="p-3 border-r border-slate-100 text-rose-600 font-medium">Reduced</td>
                      <td className="p-3 text-emerald-700 font-semibold">Protected</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-[#f8fafd]">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">Next-morning attention</td>
                      <td className="p-3 border-r border-slate-100 text-rose-600 font-medium">Impaired</td>
                      <td className="p-3 text-emerald-700 font-semibold">Sharper</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">Exam-day working memory</td>
                      <td className="p-3 border-r border-slate-100 text-rose-600 font-medium">Under strain</td>
                      <td className="p-3 text-emerald-700 font-semibold">Available</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-[#f8fafd]">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">Typical result</td>
                      <td className="p-3 border-r border-slate-100 text-rose-700 font-bold">Familiar-feeling but shaky recall</td>
                      <td className="p-3 text-emerald-700 font-bold">Cleaner, faster recall</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* IMAGE 4: All-nighter image */}
          <InlineImage
            src="/images/blogs/all-nighter-vs-full-night-sleep-exam-results.webp"
            alt="Tired teenage boy at his desk late at night with a laptop, an energy drink can and revision notes"
            caption="Late-night revision the night before a paper."
          />

          <NarrativeBox label="PARENT TAKEAWAY">
            <p className="font-semibold text-[#0a1f3d]">
              The hours saved by cutting sleep are usually the least productive hours of the day, and the cost lands on the exam.
            </p>
          </NarrativeBox>

          {/* 03. Why teenage sleep runs late */}
          <SectionHeading num="03" id="why-teenage-sleep-runs-late">
            Why teenage sleep runs late (and school starts early)
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Many parents assume a late-sleeping teenager is being lazy. Biology is part of the story. Mary Carskadon's research describes how adolescence brings a shift in the body clock, so that teenagers naturally feel sleepy later at night and wake later in the morning. She has called it a "perfect storm" when combined with early school starts and busy evenings.
            </p>
            <p>
              In the UAE, that storm often looks like this:
            </p>

            <ul className="space-y-2.5 my-3 pl-2">
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>A school day that begins early, sometimes with a long bus or car commute across Dubai, Abu Dhabi, or Sharjah.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>After-school activities, sport, music and tutoring that push homework into the late evening.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>Late family meals and social evenings, especially at weekends.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>A phone that stays within reach and turns a "ten more minutes" into an hour.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>Heat that limits outdoor time in the afternoon, so exercise and downtime move to the evening.</span>
              </li>
            </ul>

            <p>
              The result is a student who is biologically drifting later while the timetable insists on earlier. Add exam pressure and sleep is the first thing to be squeezed.
            </p>
            <p>
              The practical response is not to demand an earlier bedtime overnight. It is to protect a consistent window and reduce the things that push bedtime later, described below.
            </p>
          </div>

          {/* IMAGE 5: Teen body clock */}
          <InlineImage
            src="/images/blogs/teenage-body-clock-school-start-uae.webp"
            alt="Teenage girl sitting on her bed rubbing her eyes early in the morning, with her school uniform ready on a chair"
            caption="Teenage body clocks shift later just as the school day starts early."
          />

          {/* 04. The sleep-smart revision day */}
          <SectionHeading num="04" id="the-sleep-smart-revision-day">
            The sleep-smart revision day
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Rather than adding hours at the end of the day, move the demanding work earlier.
            </p>

            {/* Revision schedule table */}
            <div className="my-5 rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#0f4a9b] text-white">
                      <th className="p-3 w-1/4 font-bold border-r border-white/10">Time of day</th>
                      <th className="p-3 w-1/3 font-bold border-r border-white/10">What to do</th>
                      <th className="p-3 w-5/12 font-bold">Why</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">After school (fresh)</td>
                      <td className="p-3 border-r border-slate-100 text-slate-600">The hardest retrieval work: closed-book blurting, past-paper questions</td>
                      <td className="p-3 text-slate-600 font-medium">Best attention and working memory</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-[#f8fafd]">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">Early evening</td>
                      <td className="p-3 border-r border-slate-100 text-slate-600">Second block on a different topic, interleaved</td>
                      <td className="p-3 text-slate-600 font-medium">Spacing and variety help retention</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">After dinner</td>
                      <td className="p-3 border-r border-slate-100 text-slate-600">Lighter tasks: flashcards, formula review, tidy notes</td>
                      <td className="p-3 text-slate-600 font-medium">Lower demand, easier to wind down from</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-[#f8fafd]">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">30 to 45 mins before bed</td>
                      <td className="p-3 border-r border-slate-100 text-slate-600">A quick, calm review of the day's key points, then screens away</td>
                      <td className="p-3 text-slate-600 font-medium">A short review before sleep suits consolidation, and removes "I haven't done enough" worry</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">Bedtime</td>
                      <td className="p-3 border-r border-slate-100 text-emerald-700 font-semibold">Consistent lights-out</td>
                      <td className="p-3 text-emerald-700 font-semibold">Gives the brain the night to store the day's work</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              <strong>What to avoid after about 9:30 p.m.:</strong> starting new topics, full timed papers, and anything that raises stress. These tend to keep the brain alert and eat into sleep.
            </p>
            <p>
              For students following the retrieval and spacing methods in our guide on{' '}
              <a href="/blogs/illusion-of-competence-revision-false-confidence" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                The Illusion of Competence
              </a>
              , this fits neatly: hard retrieval earlier, light review later, sleep in between. If your child needs help building a realistic plan like this, it is a large part of how we approach{' '}
              <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                exam preparation with a 1-to-1 tutor
              </a>.
            </p>
          </div>

          {/* IMAGE 3: Sleep-smart revision day timeline */}
          <InlineImage
            src="/images/blogs/sleep-smart-revision-day-timeline.webp"
            alt="Student in school uniform writing revision notes at her desk in late-afternoon light"
          />

          {/* 05. Seven sleep rules */}
          <SectionHeading num="05" id="seven-sleep-rules">
            Seven sleep rules that protect exam performance
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <div className="space-y-3 my-4">
              {[
                { n: '1', title: 'Keep a steady wake-up time.', desc: 'Try to stay within about an hour of the school-day wake time, even at weekends. A consistent morning helps the body clock more than an occasional early night.' },
                { n: '2', title: 'Charge the phone outside the bedroom.', desc: 'A visible or buzzing phone invites "just one more scroll". A cheap alarm clock solves the excuse.' },
                { n: '3', title: 'Set a caffeine cut-off.', desc: 'Stop energy drinks and strong caffeinated drinks by mid-afternoon, since caffeine stays in the body for hours.' },
                { n: '4', title: 'Dim the evening.', desc: 'Lower lights and screens in the last hour. Whether or not blue light itself matters much, engaging content is what keeps most teenagers up.' },
                { n: '5', title: 'Cool, dark and quiet.', desc: 'In the UAE climate, a comfortably cool bedroom and blackout curtains make a real difference, particularly on bright mornings.' },
                { n: '6', title: 'Use naps carefully.', desc: 'A short nap of about 20 to 30 minutes in the early afternoon can refresh a tired student. Long or late naps can push bedtime later.' },
                { n: '7', title: 'Get morning light and movement.', desc: 'Daylight early in the day and regular activity help set the body clock and make evening sleep come more easily.' }
              ].map((rule) => (
                <div key={rule.n} className="p-4 rounded-xl border border-[#0f4a9b]/15 bg-[#f8fafd] flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">{rule.n}</span>
                  <div>
                    <h4 className="font-bold text-xs text-[#0a1f3d] mb-1">{rule.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <NarrativeBox label="EXAM-WEEK SHORTCUT">
              <p className="font-semibold text-[#0a1f3d]">
                In the week before major papers, treat sleep like a revision task that has to be ticked off each day. Something as simple as a lights-out time on the family calendar makes it visible.
              </p>
            </NarrativeBox>
          </div>

          {/* IMAGE 7: Phone charging outside the bedroom */}
          <InlineImage
            src="/images/blogs/phone-charging-outside-bedroom-sleep-routine.webp"
            alt="Phone charging on a shelf outside a bedroom with an analogue alarm clock by the bed"
            caption="A phone left charging outside the bedroom."
          />

          {/* 06. Ramadan, mocks and shifted sleep */}
          <SectionHeading num="06" id="ramadan-mocks-shifted-sleep">
            Ramadan, mocks and shifted sleep
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Ramadan currently falls in late winter and moves about 11 days earlier each year. Ramadan 2027 is expected to begin around 8 February, subject to moon sighting. For many families it overlaps with mock exams and the spring-term revision block, which are important stretches of the school year.
            </p>
            <p>
              During Ramadan, sleep often changes shape: later nights, an early suhoor meal and altered school hours. Total sleep can fall and timing can become fragmented.
            </p>
            <p>
              Some practical adjustments:
            </p>

            <ul className="space-y-2.5 my-3 pl-2">
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>
                  <strong>Shorten and reschedule sessions:</strong> Rather than trying to keep the usual load, twenty focused minutes on most days beats an ambitious plan that collapses.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>
                  <strong>Choose the best window:</strong> For many students, the peak window for demanding work is after iftar once energy returns, rather than late into the early hours.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>
                  <strong>Protect total sleep:</strong> Keep one consistent core block of sleep, plus a short afternoon rest if the school day allows it.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>
                  <strong>Avoid late-night marathons:</strong> Marathon sessions trade the following morning's clarity for very little retention.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>
                  <strong>Check mock timetables:</strong> Ask the school early about how mocks are being scheduled around Ramadan, since arrangements vary across UAE schools.
                </span>
              </li>
            </ul>

            <p className="text-xs text-slate-500 italic">
              Families with a student who has a medical condition should follow their doctor's advice on fasting and routine. This guide is educational and does not replace medical advice.
            </p>
          </div>

          {/* IMAGE 8: Ramadan-friendly study window */}
          <InlineImage
            src="/images/blogs/ramadan-revision-routine-after-iftar.webp"
            alt="Student revising at a desk after iftar with a lantern and a short study timer"
            caption="Revising after iftar, with a short timer on the desk."
          />

          {/* 07. What parents can say */}
          <SectionHeading num="07" id="what-parents-can-say">
            What parents can say (and avoid saying)
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Policing bedtime often leads to hidden phones and arguments. Framing sleep as part of the revision plan works better.
            </p>

            {/* Instead of / Try table */}
            <div className="my-5 rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-[#0f4a9b] text-white">
                    <th className="p-3 w-1/2 font-bold border-r border-white/10">Instead of…</th>
                    <th className="p-3 w-1/2 font-bold">Try…</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 border-r border-slate-100 text-slate-600 font-medium">"Go to bed. It's late."</td>
                    <td className="p-3 text-emerald-800 font-semibold">"Let's agree lights-out time together and treat it as part of the plan."</td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-[#f8fafd]">
                    <td className="p-3 border-r border-slate-100 text-slate-600 font-medium">"Why are you still awake?"</td>
                    <td className="p-3 text-emerald-800 font-semibold">"What's left tonight that can wait until after school tomorrow?"</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 border-r border-slate-100 text-slate-600 font-medium">"You need to stop studying."</td>
                    <td className="p-3 text-emerald-800 font-semibold">"Do a fifteen-minute review, then close it. Your brain will file it overnight."</td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-[#f8fafd]">
                    <td className="p-3 border-r border-slate-100 text-slate-600 font-medium">"You always leave things to the last minute."</td>
                    <td className="p-3 text-emerald-800 font-semibold">"Which two topics should we move to tomorrow's first block?"</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 border-r border-slate-100 text-slate-600 font-medium">"Sleep is more important than exams."</td>
                    <td className="p-3 text-emerald-800 font-semibold">"Sleep is how tonight's revision sticks. It's part of the plan."</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Some small things that help at home:
            </p>

            <ul className="space-y-2 my-3 pl-2">
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span><strong>Model it:</strong> Households where the whole family winds down at a similar time find it easier.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span><strong>Make the plan visible:</strong> Keep exam-week schedules visible on the fridge, including sleep, meals and downtime.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span><strong>Morning check-in:</strong> <em>"How did you sleep?"</em> is far more constructive than <em>"How much did you revise?"</em></span>
              </li>
            </ul>
          </div>

          {/* IMAGE 6: Parent and teen planning together */}
          <InlineImage
            src="/images/blogs/parent-teen-sleep-plan-exam-week-uae.webp"
            alt="UAE parent and teenager agreeing an exam-week routine together at a home table"
            caption="A parent and teenager planning exam week together."
          />

          <NarrativeBox label="PARENT TAKEAWAY">
            <p className="font-semibold text-[#0a1f3d]">
              Negotiate a sleep window as part of the timetable, instead of enforcing it as a punishment.
            </p>
          </NarrativeBox>

          {/* 08. When poor sleep is more than a habit */}
          <SectionHeading num="08" id="when-poor-sleep-more-than-habit">
            When poor sleep is more than a habit
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Most sleep problems in students come from routines, screens and schedules. Some signs suggest something more:
            </p>

            <ul className="space-y-2.5 my-3 pl-2">
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>Regularly taking a long time to fall asleep, or waking repeatedly, over several weeks</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>Loud snoring or pauses in breathing at night</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>Extreme daytime sleepiness despite enough time in bed</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>Sleep problems alongside persistent low mood, anxiety or withdrawal</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span>Sleep worries that grow worse as exams approach</span>
              </li>
            </ul>

            <p>
              If you notice these over a sustained period, speak to your family doctor or paediatrician, and inform the school's pastoral team, who commonly deal with exam-season sleep and stress. This article is general educational guidance and not a substitute for professional advice.
            </p>
            <p>
              If worry about exams is what's keeping your child awake, our guide on{' '}
              <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                why some children only panic right before exams
              </a>{' '}
              explains what usually sits behind that panic and how parents can help before and during exam season.
            </p>
          </div>

          {/* 09. Frequently asked questions */}
          <SectionHeading num="09" id="faqs">
            Frequently asked questions
          </SectionHeading>
          <div className="my-5">
            <FAQAccordion />
          </div>

          {/* 10. Sources and further reading */}
          <SectionHeading num="10" id="sources">
            Sources and further reading
          </SectionHeading>
          <div className="space-y-2.5 my-4 text-xs text-gray-600 leading-relaxed bg-[#f8fafd] p-4 rounded-xl border border-slate-200">
            <p>• <a href="https://doi.org/10.1038/nrn2762" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] underline hover:text-[#0a3a79]">Diekelmann, S., &amp; Born, J. (2010). The memory function of sleep. <em>Nature Reviews Neuroscience</em>.</a></p>
            <p>• <a href="https://doi.org/10.1038/nn1851" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] underline hover:text-[#0a3a79]">Yoo, S.-S., Hu, P. T., Gujar, N., Jolesz, F. A., &amp; Walker, M. P. (2007). A deficit in the ability to form new human memories without sleep. <em>Nature Neuroscience</em>.</a></p>
            <p>• <a href="https://doi.org/10.1111/j.1467-8624.2012.01834.x" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] underline hover:text-[#0a3a79]">Gillen-O'Neel, C., Huynh, V. W., &amp; Fuligni, A. J. (2013). To study or to sleep? The academic costs of extra studying at the expense of sleep. <em>Child Development</em>.</a></p>
            <p>• <a href="https://doi.org/10.1037/a0018883" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] underline hover:text-[#0a3a79]">Lim, J., &amp; Dinges, D. F. (2010). A meta-analysis of the impact of short-term sleep deprivation on cognitive variables. <em>Psychological Bulletin</em>.</a></p>
            <p>• <a href="https://pubmed.ncbi.nlm.nih.gov/21600346/" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] underline hover:text-[#0a3a79]">Carskadon, M. A. (2011). Sleep in adolescents: The perfect storm. <em>Pediatric Clinics of North America</em>.</a></p>
            <p>• <a href="https://doi.org/10.5664/jcsm.5866" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] underline hover:text-[#0a3a79]">Paruthi, S., et al. (2016). Recommended amount of sleep for pediatric populations: A consensus statement of the American Academy of Sleep Medicine. <em>Journal of Clinical Sleep Medicine</em>.</a></p>
          </div>

          {/* Related Guides */}
          <div className="my-8 p-5 rounded-2xl border border-slate-200 bg-white">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-3">Related Guides on Psychology of Learning</h3>
            <div className="space-y-2 text-xs">
              <a href="/blogs/exam-stamina-uae-students" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">Exam Stamina: Why Your Child Can't Sit the Full Paper</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/illusion-of-competence-revision-false-confidence" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">The Illusion of Competence: Why Re-Reading Notes Gives False Confidence</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/exam-panic-before-exams-uae" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">My Child Only Panics Right Before Exams</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
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
              DIAGNOSTIC SESSION
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug max-w-xl mx-auto">
              Is your child's revision routine costing them sleep?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              An Ustaad tutor can look at your child's weekly routine with you, spot where revision time is being wasted or squeezed, and build a realistic plan that protects sleep through exam season. Sessions are online and 1-to-1, for families in every emirate.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="/contact#form"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-xs sm:text-sm w-full sm:w-auto shadow-md"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
              >
                Book a Free Trial Session
              </a>
              <a
                href="https://wa.me/971561249005?text=Hello%20Ustaad%20team,%20I%20have%20a%20question%20about%20revision%20planning%20and%20tutoring."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-xs sm:text-sm transition shadow-md w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" /> Ask on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
