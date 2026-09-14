import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, 
  ChevronRight as ChevronRightIcon, MessageCircle, Timer, Brain, Zap, 
  Target, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, BarChart3, Check, X,
  Flame, BatteryCharging, Award, Activity, Compass, Dumbbell, Sparkles
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: "Exam Stamina: Why Your Child Can't Sit the Full Paper",
  titleLine1: 'Exam Stamina:',
  titleLine2: "Why Your Child Can't Sit the Full Paper",
  slug: 'exam-stamina-uae-students',
  description:
    'Your child studies for hours but fades halfway through a paper. Exam stamina is the missing skill, and here is how to build it before exams start.',
  heroImage: '/images/blogs/exam-stamina-uae-students-hero.jpg',
  heroAlt: 'Focused British and IB curriculum high school student in an international school exam hall working through a timed past paper against a countdown timer',
  heroCaption: 'Exam stamina is not content recall. It is the trained cognitive capacity to maintain full cognitive accuracy across ninety minutes to three hours under strict time constraints.',
  datePublished: '2026-09-07',
  dateModified: '2026-09-07',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  reviewer: 'Nida Iqbal',
  reviewerRole: 'MPhil in Education Leadership and Management',
  readTime: '10 min read',
  tags: [
    'Exam Stamina',
    'Concentration During Exams',
    'Timed Past Papers',
    'Exam Endurance',
    'Studying Under Timed Conditions',
    'Working Memory Exam',
    'IGCSE Exam Skills',
    'A-Level Exam Technique',
  ],
};

const FAQS = [
  {
    q: 'How long does it take to build exam stamina?',
    a: 'With consistent, progressive practice, most students can expand their cognitive endurance to full paper length over 6 to 8 weeks. The secret is progressive overload: beginning 15 minutes below their current wall and lengthening the session by 10 to 15 minutes each week.',
  },
  {
    q: "My child studies for hours every day. Why isn't that building stamina?",
    a: 'Because standard home study is fragmented. Even when a student spends three hours at their desk, they typically study in 15 to 20 minute bursts broken up by snacks, notifications, note review, or checking answers. This trains the brain to anticipate constant micro breaks, which is the exact opposite of what a 2 to 3 hour unbroken exam paper demands.',
  },
  {
    q: 'Is exam stamina really separate from subject knowledge?',
    a: 'Completely separate. Subject knowledge is stored in long-term memory, while exam performance depends on active working memory, executive function, and physical focus under time. A student can know the syllabus perfectly and still drop 15 to 25 marks in the second half of a paper simply because their cognitive stamina collapses.',
  },
  {
    q: 'What is the single most impactful change parents can make at home?',
    a: 'Remove the smartphone completely from the room during study sessions and transition from passive review to closed book, timed output. These two changes immediately force the brain to sustain uninterrupted focus without the micro resets that undermine endurance.',
  },
  {
    q: 'How do timed past papers specifically train exam endurance?',
    a: 'A timed past paper is the only rehearsal tool that forces concurrent execution: reading dense text, managing the clock, retrieving facts from memory, performing multistep calculations, and writing legibly. Doing this against an unbroken timer conditions the nervous system to handle prolonged cognitive load.',
  },
  {
    q: 'Should younger students in Year 9 or 10 practise exam stamina?',
    a: 'Yes. While they should not be subjected to punishing three hour drills, introducing regular 45 to 60 minute unbroken, phone free problem-solving sessions builds the baseline stamina needed when GCSE and IGCSE exam years begin.',
  },
];

const QUICK_ANSWERS = [
  {
    n: '01',
    q: 'What is exam stamina?',
    a: 'The physical and mental capacity to concentrate, retrieve knowledge, and write with precision across the entire duration of a paper, not just the opening hour.',
    id: 'what-exam-stamina-is',
  },
  {
    n: '02',
    q: 'Why does my child fade halfway through?',
    a: 'Unbroken concentration is a cognitive skill. Fragmented studying builds sprint capability, leaving working memory exhausted when an exam demands a continuous marathon.',
    id: 'the-cognitive-cost',
  },
  {
    n: '03',
    q: 'Is this a knowledge problem or laziness?',
    a: 'Neither. When marks plummet strictly in the final third of a paper while early sections score 85%+, you are observing a stamina deficit, not an intellectual gap.',
    id: 'diagnosing-the-fade',
  },
  {
    n: '04',
    q: 'Can exam endurance be trained quickly?',
    a: 'Yes. Much like cardiovascular fitness, stamina responds directly to systematic progressive overload over a 6 to 8 week cycle of timed past paper blocks.',
    id: 'step-by-step-protocol',
  },
  {
    n: '05',
    q: 'What test day tactics protect concentration?',
    a: 'Strategic question ordering, banking early marks, zero late-night cramming, and intentional 10 second posture and breathing resets between major exam sections.',
    id: 'test-day-tactics',
  },
];

const TOC_ITEMS = [
  { label: 'Quick Answers Before You Read', id: 'quick-answers' },
  { label: 'What Exam Stamina Actually Is', id: 'what-exam-stamina-is' },
  { label: 'The Cognitive Cost: Working Memory Depletion', id: 'the-cognitive-cost' },
  { label: 'Diagnosing the Stamina Fade at Home', id: 'diagnosing-the-fade' },
  { label: 'Why Typical Study Habits Undermine Endurance', id: 'why-revision-fails' },
  { label: 'Step by Step Progressive Stamina Protocol', id: 'step-by-step-protocol' },
  { label: 'In Exam Tactical Resets at the 75 Minute Mark', id: 'test-day-tactics' },
  { label: 'High Stamina vs. Stamina Deficit at a Glance', id: 'comparison-matrix' },
  { label: 'Bringing It Together: Predictable Exam Endurance', id: 'bringing-it-together' },
  { label: 'Frequently Asked Questions', id: 'frequently-asked-questions' },
];

const RELATED = [
  {
    slug: 'uae-exams-return-students-never-sat-one',
    category: 'Psychology of Learning',
    title: 'Exams Are Back. What Changes for Students Who Have Never Sat One',
    description: 'Why the return to external exam halls demands new exam craft after years of portfolio grading.',
  },
  {
    slug: 'physics-understanding-vs-marks',
    category: 'Academic & Exam Skills',
    title: 'Your Child Understands Physics. So Why Are the Marks Still Low?',
    description: 'How working memory strain and formula translation fail students even when comprehension is sound.',
  },
  {
    slug: 'igcse-maths-revision-low-marks',
    category: 'Academic & Exam Skills',
    title: 'Hours of Revision, Still Low Marks in IGCSE Mathematics',
    description: 'Why passive textbook review fails to convert into marks on calculator and non-calculator papers.',
  },
  {
    slug: 'igcse-preparation-past-papers-final-step',
    category: 'Academic & Exam Skills',
    title: 'IGCSE Preparation: Why Past Papers Are the Final Step, Not the First',
    description: 'How to sequence content mastery and timed endurance so practice papers build real exam technique.',
  },
];

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-10 mb-4 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/50 tracking-widest uppercase mb-1">{num}</span>
      <h2 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h2>
    </div>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="my-3 space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0f4a9b] shrink-0 mt-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ParentTakeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border-l-4 border-[#0f4a9b] bg-[#f0f4fa] p-4 sm:p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-1.5">
        <ShieldCheck className="h-4 w-4 text-[#0f4a9b]" />
        <span className="text-[11px] font-black uppercase tracking-widest text-[#0f4a9b]">Parent Takeaway</span>
      </div>
      <p className="text-sm sm:text-[14.5px] font-medium text-[#0a1f3d] leading-relaxed italic mb-0">{children}</p>
    </div>
  );
}

function NarrativeBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/15 bg-gradient-to-br from-white to-[#f8fafd] p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="h-4 w-4 text-[#C7A24A]" />
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#0a1f3d]">{title}</span>
      </div>
      <div className="text-sm text-gray-600 leading-relaxed space-y-2 italic">{children}</div>
    </div>
  );
}

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mx-auto my-7 max-w-2xl">
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/9] bg-slate-100">
        <img src={src} alt={alt} width={1376} height={774} loading="lazy" className="w-full h-full object-cover block" />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-gray-500 italic leading-relaxed px-2">{caption}</figcaption>
      )}
    </figure>
  );
}

function TOC({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/10 bg-[#f8fafd] overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-3.5" aria-expanded={open}>
        <div className="flex items-center gap-2">
          <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0f4a9b]">In This Guide</span>
        </div>
        <span className="text-[#0f4a9b]">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <div className={open ? 'block' : 'hidden'}>
        <div className="px-5 pb-3.5 space-y-1">
          {TOC_ITEMS.map((item, i) => (
            <a
              key={i}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center gap-2.5 group py-1 text-left"
            >
              <span className="shrink-0 text-[10px] font-extrabold text-[#0f4a9b]/40 w-4">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[13px] text-gray-600 group-hover:text-[#0f4a9b] transition-colors leading-snug">{item.label}</span>
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
                aria-label={`Toggle question: ${faq.q}`}
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
                  className="ml-0 sm:ml-[46px] mt-1"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="flex items-start gap-2.5 rounded-2xl border p-4 bg-[#f8fafc] border-[#0f4a9b]/15 shadow-sm">
                    <p className="flex-1 text-gray-600 text-xs sm:text-[13px] leading-relaxed text-left mb-0" itemProp="text">
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

export default function ExamStaminaBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <Layout>
      <SEOHead
        title={`${BLOG.title} | Ustaad`}
        description={BLOG.description}
        canonical={canonical}
        ogImage={BLOG.heroImage}
        preloadHeroImage={BLOG.heroImage}
        author={BLOG.author}
        placename="United Arab Emirates"
        ogType="article"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
            { name: 'Exam Stamina', url: canonical },
          ]),
          articleSchema({
            title: BLOG.title,
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: {
              name: 'Nimra Shahzada',
              url: '/authors/nimra-shahzada',
              jobTitle: 'Content Writer, Study and Exam Topics',
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
            },
            reviewer: {
              name: 'Nida Iqbal',
              url: '/authors/nida-iqbal',
              jobTitle: 'MPhil in Education Leadership and Management',
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
            },
            image: BLOG.heroImage,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* Visible Breadcrumb for Blog Articles */}
      <nav aria-label="Breadcrumb" className="bg-[#f8fafd] border-b border-slate-100">
        <ol className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400 list-none m-0">
          <li>
            <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1">
              <Home className="h-3 w-3" /> Home
            </a>
          </li>
          <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
          <li>
            <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          </li>
          <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
          <li>
            <a href="/blogs/psychology-of-learning" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">Psychology of Learning</a>
          </li>
          <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
          <li className="text-[#0f4a9b] font-semibold truncate max-w-[150px]" aria-current="page">
            Exam Stamina
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 rounded-full mb-3 border border-[#0f4a9b]/15">
              <Dumbbell className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wider uppercase">USTAAD UAE · PSYCHOLOGY OF LEARNING</span>
            </div>

            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            <p className="text-gray-600 text-sm lg:text-[15px] leading-relaxed mb-4 text-justify">
              {BLOG.description}
            </p>

            {/* Author & Reviewer Metadata Card */}
            <div className="mb-4 mt-2 space-y-3">
              <div className="rounded-xl border border-slate-100 bg-[#f8fafd] p-3 sm:p-3.5 space-y-2.5">
                <div className="flex items-start gap-2.5 min-w-0">
                  <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                  <div className="min-w-0 leading-snug">
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">Written by</p>
                    <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] font-semibold text-xs sm:text-[13px] underline underline-offset-2 break-words">
                      {BLOG.author}
                    </a>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{BLOG.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100 min-w-0">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0 mt-0.5" />
                  <div className="min-w-0 leading-snug">
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">Fact-checked &amp; reviewed by</p>
                    <a href="/authors/nida-iqbal" className="text-[#0f4a9b] font-semibold text-xs sm:text-[13px] underline underline-offset-2 break-words">
                      {BLOG.reviewer}
                    </a>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{BLOG.reviewerRole}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-400">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1.5 min-w-0">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  <span className="leading-snug">Published Sep 2026</span>
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

          {/* Hero Figure */}
          <motion.figure initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-0">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-[16/9] bg-slate-100">
              <img src={BLOG.heroImage} alt={BLOG.heroAlt} width={1376} height={774} fetchPriority="high" className="w-full h-full object-cover block" />
            </div>
            <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">{BLOG.heroCaption}</figcaption>
          </motion.figure>

          <TOC open={tocOpen} setOpen={setTocOpen} />
        </div>
      </section>

      {/* Main      {/* Article body */}
      <article className="pb-8 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-sm lg:text-[15px] leading-[1.8] [&_p]:text-justify [&_p]:mb-3.5">

            <p>
              Here is a recurring puzzle that blindsides hundreds of families across Dubai and Abu Dhabi every exam season: A teenager spends four solid hours in their bedroom studying. They can define every term at the dinner table and solve individual textbook questions without hesitation.
            </p>
            <p>
              Then, they sit a full mock paper for IGCSE, GCSE, IB, or A-Level, and somewhere around the 65-minute mark, their performance visibly crumbles. The handwriting loosens, calculated answers miss final units, and multistep working is abandoned.
            </p>
            <p>
              The instinctive reaction for both parent and student is to assume a <em>knowledge problem</em>: that they simply need to review the content more thoroughly. Or worse, parents dismiss it as careless laziness.
            </p>
            <p>
              In our tutoring rooms and across <a href="/blogs/psychology-of-learning" className="text-[#0f4a9b] font-semibold hover:underline">our Psychology of Learning stream</a>, we see that it is almost never a lack of intelligence. What you are witnessing is a student running out of a specific cognitive capacity: <strong>exam stamina</strong>.
            </p>

            {/* Quick Impact Stats */}
            <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 items-stretch">
              <div className="p-3 sm:p-3.5 rounded-2xl border border-[#0f4a9b]/12 bg-[#f4f7fc] text-center flex flex-col justify-between min-h-[104px] sm:min-h-[110px]">
                <div className="text-sm sm:text-base lg:text-[17px] font-black text-[#0f4a9b] tracking-tight leading-tight">
                  2 to 3 hours
                </div>
                <div className="text-[11px] text-gray-500 font-semibold leading-snug mt-1.5">
                  Typical UAE exam paper length
                </div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl border border-[#0f4a9b]/12 bg-[#f4f7fc] text-center flex flex-col justify-between min-h-[104px] sm:min-h-[110px]">
                <div className="text-sm sm:text-base lg:text-[17px] font-black text-[#0f4a9b] tracking-tight leading-tight">
                  90 to 180 min
                </div>
                <div className="text-[11px] text-gray-500 font-semibold leading-snug mt-1.5">
                  Continuous focus required per paper
                </div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl border border-[#C7A24A]/30 bg-[#fdf9ee] text-center flex flex-col justify-between min-h-[104px] sm:min-h-[110px]">
                <div className="text-sm sm:text-base lg:text-[17px] font-black text-[#A8892A] tracking-tight leading-tight">
                  6 to 8 weeks
                </div>
                <div className="text-[11px] text-gray-500 font-semibold leading-snug mt-1.5">
                  Recommended stamina training window
                </div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/60 text-center flex flex-col justify-between min-h-[104px] sm:min-h-[110px]">
                <div className="text-sm sm:text-base lg:text-[17px] font-black text-emerald-700 tracking-tight leading-tight">
                  1 phone in room
                </div>
                <div className="text-[11px] text-gray-500 font-semibold leading-snug mt-1.5">
                  Measurably reduces working memory
                </div>
              </div>
            </div>

            {/* Quick Answers Jump Box */}
            <div id="quick-answers" className="scroll-mt-24">
              <h2 className="text-lg font-extrabold text-[#0a1f3d] mt-8 mb-3">Quick answers before you read</h2>
              <div className="grid gap-2 mb-6">
                {QUICK_ANSWERS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="p-3 rounded-xl border border-slate-100 bg-[#f8fafd] hover:bg-[#f0f4fa] transition text-left group flex items-start gap-3"
                  >
                    <span className="text-xs font-black text-[#0f4a9b] shrink-0 mt-0.5">{item.n}</span>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors block">{item.q}</span>
                      <span className="text-xs text-gray-500 leading-snug block mt-0.5">{item.a}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Section 01 */}
            <SectionHeading num="01" id="what-exam-stamina-is">What exam stamina actually is (and why it is not a knowledge problem)</SectionHeading>
            <p>
              Consider the difference between a person who jogs 2 kilometres twice a week and an athlete training for a 21 kilometre half marathon. Both people know how to run. Their mechanics are identical. But if you place the recreational runner on a marathon course, they will hit a wall long before the finish line. They are not lazy or undisciplined; they simply have never conditioned their muscles to sustain output for that duration.
            </p>
            <p>
              <strong>Exam stamina</strong> is the cognitive equivalent of marathon endurance. An official examination paper does not just test whether information exists in the brain. It tests whether that information can be retrieved, synthesised, and transcribed under strict timed conditions for 90 to 180 continuous minutes without a pause. In British curriculum and IB schools across the UAE, students face a significant shock if they have never experienced external examination halls, as explored in our guide on <a href="/blogs/uae-exams-return-students-never-sat-one" className="text-[#0f4a9b] font-semibold hover:underline">why exams returning challenges students who never sat external papers</a>.
            </p>
            <p>
              Holding continuous vigilance across 12 to 24 dense pages demands immense mental energy. If an adolescent has only ever practised in 20 minute bursts, their brain will inevitably signal mental exhaustion long before the invigilator calls time.
            </p>

            <ParentTakeaway>
              Exam stamina is a physical and cognitive fitness, not an intellectual fact. Knowing the complete syllabus does not automatically grant the stamina to write it out for two hours straight.
            </ParentTakeaway>

            <InlineImage
              src="/images/blogs/uae-student-timed-past-paper-stamina.jpg"
              alt="UAE student sitting a timed past paper at home with a countdown clock"
              caption="True exam stamina cannot be built through passive reading. It requires structured, closed book timed past paper drills with zero digital interruptions."
            />

            {/* Section 02 */}
            <SectionHeading num="02" id="the-cognitive-cost">The cognitive cost: working memory depletion in a 2 hour paper</SectionHeading>
            <p>
              To understand why capable students hit a wall, you must look at how the human brain processes an exam paper. Unlike long-term memory (which stores rules, formulas, and vocabulary), <strong>working memory</strong> is the conscious workbench where active problem-solving occurs.
            </p>
            <p>
              In an exam setting, working memory carries a massive, concurrent burden:
            </p>

            <BulletList
              items={[
                <><strong>Deciphering dense command words:</strong> Parsing what an examiner actually wants in multipart questions, such as the extended response requirements analysed in our guide on <a href="/blogs/why-igcse-biology-students-lose-marks-on-6-mark-questions" className="text-[#0f4a9b] font-semibold hover:underline">why IGCSE Biology students lose marks on 6-mark questions</a>.</>,
                <><strong>Suppression of exam anxiety:</strong> Keeping distracting thoughts about time limits from overwhelming executive focus, as detailed in our guide on <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-semibold hover:underline">exam panic right before major tests</a>.</>,
                <><strong>Motor endurance and transcription:</strong> Sustaining clear, legible handwriting across thousands of words so examiners can award method marks without ambiguity.</>,
                <><strong>Multistep error checking:</strong> Verifying negative signs in algebraic proofs, applying equations without dropping units in Physics, and tracking stoichiometric ratios in Chemistry.</>,
              ]}
            />

            <p>
              Working memory is fuelled by glucose and neural vigilance. When a student enters hour two without prior endurance conditioning, <strong>cognitive fatigue</strong> takes over. The brain instinctively searches for energy-saving shortcuts. It skips reading the last sentence of a prompt. It writes one-sentence answers to five-mark questions. It stops double checking calculations.
            </p>

            {/* Section 03 */}
            <SectionHeading num="03" id="diagnosing-the-fade">How to diagnose the stamina fade at home (the downward mark slope)</SectionHeading>
            <p>
              Parents often ask our team: <em>&quot;How do I know if my child has a stamina gap versus a study gap?&quot;</em>
            </p>
            <p>
              The answer lies in the <strong>shape of their mark curve</strong> across a timed paper. When reviewing a completed mock against the official mark scheme, we often uncover the disconnect discussed in our article on <a href="/blogs/physics-understanding-vs-marks" className="text-[#0f4a9b] font-semibold hover:underline">why understanding a subject does not automatically convert into exam marks</a>. We track mark retention from front to back:
            </p>

            <InlineImage
              src="/images/blogs/exam-mark-scheme-stamina-analysis.jpg"
              alt="Official GCSE mathematics past paper being graded against an examiner mark scheme showing mark drops in later questions"
              caption="Diagnosing stamina: In fatigue affected papers, early foundational questions score near 90%, but multistep questions in the final 30% of the paper show catastrophic mark drops."
            />

            {/* Diagnostic Table */}
            <div className="my-6 overflow-hidden rounded-2xl border border-[#0f4a9b]/15 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-[#0a1f3d] to-[#0f4a9b] px-4 py-3 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-[#C7A24A]" />
                  <span className="text-xs font-extrabold tracking-wider uppercase">Diagnostic Pattern</span>
                </div>
                <span className="text-[11px] font-medium text-white/80">Content Deficit vs. Stamina Deficit</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-[13px]">
                  <thead className="bg-[#f8fafd] text-[#0a1f3d] border-b border-slate-100">
                    <tr>
                      <th className="p-3 sm:p-3.5 font-bold">Paper Section</th>
                      <th className="p-3 sm:p-3.5 font-bold text-amber-700">True Stamina Deficit</th>
                      <th className="p-3 sm:p-3.5 font-bold text-red-700">Genuine Knowledge Gap</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-gray-600">
                    <tr>
                      <td className="p-3 sm:p-3.5 font-bold text-[#0a1f3d]">First third of the paper</td>
                      <td className="p-3 sm:p-3.5 text-emerald-700 font-semibold">85% to 95% accuracy; meticulous steps</td>
                      <td className="p-3 sm:p-3.5 text-red-600 font-semibold">Spotty; struggle begins immediately on basics</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-3.5 font-bold text-[#0a1f3d]">Middle third of the paper</td>
                      <td className="p-3 sm:p-3.5 text-amber-700 font-semibold">65% to 75%; slight rushing, handwriting shifts</td>
                      <td className="p-3 sm:p-3.5 text-red-600 font-semibold">Consistent 40% to 50% error rate across topics</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-3.5 font-bold text-[#0a1f3d]">Final third of the paper</td>
                      <td className="p-3 sm:p-3.5 text-red-700 font-black">20% to 35%; blank lines, abandoned working</td>
                      <td className="p-3 sm:p-3.5 text-red-600 font-semibold">Identical difficulty to middle sections</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-3.5 font-bold text-[#0a1f3d]">Error Nature</td>
                      <td className="p-3 sm:p-3.5 text-gray-700">Silly arithmetic slips on topics they know cold</td>
                      <td className="p-3 sm:p-3.5 text-gray-700">Conceptual misunderstanding of the syllabus</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              If your child&apos;s marks slope downward like a ski ramp, reteaching them the topic of Question 18 will not solve the problem. They knew the concept at 4:00 PM; they failed it at 5:15 PM because their mental endurance expired. Spotting this early is crucial, much like learning <a href="/blogs/read-uae-school-report-card" className="text-[#0f4a9b] font-semibold hover:underline">how to read a UAE school report card like an education counsellor</a> before term end grades lock in.
            </p>

            <ParentTakeaway>
              Stamina problems have an undeniable geometry: a steep downward slope. When marks collapse strictly in the final third of a paper while the first half is pristine, you are looking at cognitive fatigue, not intellectual inability.
            </ParentTakeaway>

            {/* Section 04 */}
            <SectionHeading num="04" id="why-revision-fails">Why typical home study actively sabotages exam endurance</SectionHeading>
            <p>
              Here is the difficult paradox: the conventional way teenagers study at home actually trains their brains to become <em>less</em> capable of sitting a full paper.
            </p>
            <p>
              Observe an average Year 11 or Year 13 student studying on a weekend. They sit with a textbook, flashcards, or a laptop. Every twelve minutes, they take a micro break: glancing at a message notification, replaying an educational video, grabbing water, or listening to music. Even when they spend three hours at their desk, they are operating in micro sprints of 15 to 20 minutes separated by cognitive relief.
            </p>
            <p>
              This conditions the neurological threshold to expect rest whenever friction appears. Then, we place them in a silent exam hall with an invigilator pacing the aisles, no phones, no music, and demand two continuous hours of high-stakes analytical output.
            </p>
            <p>
              In our analysis of study habits, this mismatch between home study and test conditions is the single most common culprit. As highlighted in our guide on <a href="/blogs/igcse-preparation-past-papers-final-step" className="text-[#0f4a9b] font-semibold hover:underline">why past papers are the critical final step in exam preparation</a>, unstructured studying conditions teenagers for short bursts, leaving them unprepared when a full exam demands continuous cognitive output.
            </p>

            {/* Section 05 */}
            <SectionHeading num="05" id="step-by-step-protocol">The step by step progressive overload stamina protocol (Weeks 1 to 8)</SectionHeading>
            <p>
              Because exam stamina is a cognitive capacity, it must be developed using the same principle used in athletic conditioning: <strong>progressive overload</strong>.
            </p>
            <p>
              You do not train for a marathon by running 42 kilometres on day one. If you force a fatigued student to sit a grueling 3 hour paper cold, they will crash, panic, and internalise the false belief that they &quot;can&apos;t do it.&quot;
            </p>

            <InlineImage
              src="/images/blogs/uae-parent-teen-stamina-routine.jpg"
              alt="UAE father and teenage student reviewing an organised weekly timed study planner together at home"
              caption="Progressive overload ladder: Starting with achievable 40 minute unbroken blocks and advancing incrementally builds rock-solid confidence before official school mocks arrive."
            />

            {/* Progressive Ladder Table */}
            <div className="my-6 overflow-hidden rounded-2xl border border-[#0f4a9b]/15 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-[#0a1f3d] to-[#0f4a9b] px-4 py-3 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-[#C7A24A]" />
                  <span className="text-xs font-extrabold tracking-wider uppercase">Progressive Overload Ladder</span>
                </div>
                <span className="text-[11px] font-medium text-white/80">6 to 8 Week Stamina Conditioning</span>
              </div>
              <div className="p-4 sm:p-5 space-y-4">
                <div className="flex items-start gap-3.5 pb-3.5 border-b border-slate-100">
                  <span className="w-8 h-8 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] font-black text-xs flex items-center justify-center shrink-0">01</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-sm font-extrabold text-[#0a1f3d]">Phase 1: The 40 Minute Anchor (Baseline Unbroken Focus)</h4>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#0f4a9b]/8 text-[#0f4a9b] border border-[#0f4a9b]/15 shrink-0">Weeks 1 to 2</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Single subject. Zero phones in the room. A short question set (e.g., 5 to 7 medium-difficulty questions) worked against a ticking countdown clock. The goal is zero pauses, establish rhythm, and end on a feeling of mastery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pb-3.5 border-b border-slate-100">
                  <span className="w-8 h-8 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] font-black text-xs flex items-center justify-center shrink-0">02</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-sm font-extrabold text-[#0a1f3d]">Phase 2: The 60 Minute Threshold (Section Endurance)</h4>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#0f4a9b]/8 text-[#0f4a9b] border border-[#0f4a9b]/15 shrink-0">Weeks 3 to 4</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Transition from loose questions to an authentic <strong>Section A or Paper 1</strong>. Introduce mark scheme constraints: exactly 1 minute per mark. Teach the student to recognise the 45 minute fatigue wobble without quitting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pb-3.5 border-b border-slate-100">
                  <span className="w-8 h-8 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] font-black text-xs flex items-center justify-center shrink-0">03</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-sm font-extrabold text-[#0a1f3d]">Phase 3: The 90 Minute Full Component</h4>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#0f4a9b]/8 text-[#0f4a9b] border border-[#0f4a9b]/15 shrink-0">Weeks 5 to 6</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Sit a complete 90 minute paper under full examination silence. Grade the paper immediately afterward with an examiner mark scheme. Log exactly which question numbers suffered from rushed arithmetic or shortened prose.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-8 h-8 rounded-full bg-[#C7A24A]/20 text-[#A8892A] font-black text-xs flex items-center justify-center shrink-0">04</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-sm font-extrabold text-[#0a1f3d]">Phase 4: Full Paper &amp; Dual-Session Rehearsal</h4>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#C7A24A]/20 text-[#A8892A] border border-[#C7A24A]/30 shrink-0">Weeks 7 to 8+</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Rehearse authentic 2 hour or 2.5 hour papers. Once every two weeks, simulate a <em>Double Exam Day</em> (e.g., Morning Maths Paper 1 followed by Afternoon Chemistry Paper 2 with a 90 minute break between) to eliminate exam schedule shock. For senior students, this mirrors the sustained analytical endurance demanded by <a href="/blogs/a-level-tutoring-uae-independent-thinking" className="text-[#0f4a9b] font-semibold hover:underline">A-Level independent thinking</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <NarrativeBox title="The Three Essential Rules of Stamina Training">
              <p>
                <strong>Rule 1: The phone leaves the room entirely.</strong> Not on silent, not face down on the desk. Research from the University of Texas found that a smartphone visible on the desk measurably reduced working memory scores, even when the phone was powered off.
              </p>
              <p>
                <strong>Rule 2: Every session must require active production.</strong> Reading study guides builds zero endurance. Endurance is built exclusively through output under time: writing solutions, deriving equations, and formulating essays.
              </p>
              <p>
                <strong>Rule 3: Protect deep recovery between drills.</strong> Cognitive capacity regenerates during sleep and active rest. Piling four hours of cramming immediately after a timed paper erodes the very neural recovery needed for endurance to expand.
              </p>
            </NarrativeBox>

            {/* Section 06 */}
            <SectionHeading num="06" id="test-day-tactics">In exam tactical resets: what to do when the wall hits at 75 minutes</SectionHeading>
            <p>
              Conditioning builds the engine. But what should a student do on the actual morning of an exam when fatigue inevitably threatens their working memory?
            </p>
            <p>
              Our examination coaches teach students five high impact exam tactics:
            </p>

            <BulletList
              items={[
                <>
                  <strong className="text-[#0a1f3d]">The 10 Second Tactical Reset:</strong> At the 60 or 75 minute mark, when thoughts start fuzzing, put the pen down on the desk. Lean back, roll the shoulders, close the eyes, and take three slow nasal breaths. It costs ten seconds; it resets executive function and prevents the frantic rushing that loses 8 marks on the next page.
                </>,
                <>
                  <strong className="text-[#0a1f3d]">Strategic Mark Banking (Question Sequencing):</strong> Never spend the first 30 minutes grinding against a high-friction question that drains working memory. Scan the paper during reading time, bank high-confidence marks first, and save difficult unstructured questions for when momentum is secure.
                </>,
                <>
                  <strong className="text-[#0a1f3d]">Pre Exam Glucose Stabilisation:</strong> A massive sugar boost (energy drinks, chocolate bars) triggers an insulin spike that leads to an acute cognitive crash around minute 50. Complex carbohydrates, protein, and proper hydration maintain steady cerebral blood flow.
                </>,
                <>
                  <strong className="text-[#0a1f3d]">The Working Memory &quot;Brain Dump&quot;:</strong> As soon as the invigilator says you may begin, jot down easily forgotten formulas, trigonometric ratios, or citation acronyms on the blank margin of the paper. This offloads working memory so it is not taxed trying to retain static numbers while calculating.
                </>,
              ]}
            />

            {/* Section 07 */}
            <SectionHeading num="07" id="comparison-matrix">High stamina vs. stamina deficit at a glance</SectionHeading>
            <p>
              Use this diagnostic checklist to identify whether your child is approaching exam season with genuine athletic endurance or vulnerable sprint habits:
            </p>

            {/* Contrast Table */}
            <div className="my-6 overflow-hidden rounded-2xl border border-[#0f4a9b]/15 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-[#0a1f3d] to-[#0f4a9b] px-4 py-3 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#C7A24A]" />
                  <span className="text-xs font-extrabold tracking-wider uppercase">Exam Endurance Matrix</span>
                </div>
                <span className="text-[11px] font-medium text-white/80">Prepared vs. At-Risk</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-[13px]">
                  <thead className="bg-[#f8fafd] text-[#0a1f3d] border-b border-slate-100">
                    <tr>
                      <th className="p-3.5 font-bold">Observation Dimension</th>
                      <th className="p-3.5 font-bold text-emerald-700">High Stamina Student</th>
                      <th className="p-3.5 font-bold text-red-700">Stamina Deficient Student</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-gray-600">
                    <tr>
                      <td className="p-3.5 font-bold text-[#0a1f3d]">Study Block Length</td>
                      <td className="p-3.5 text-emerald-700">Works comfortably in 60 to 90m unbroken stretches</td>
                      <td className="p-3.5 text-red-600">Restless and seeking dopamine hits after 20 minutes</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#0a1f3d]">Handwriting Consistency</td>
                      <td className="p-3.5 text-emerald-700">Even, readable script from Page 1 to Page 20</td>
                      <td className="p-3.5 text-red-600">Clear at start; degrades into rushed illegible scrawl</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#0a1f3d]">Practice Fidelity</td>
                      <td className="p-3.5 text-emerald-700">Full timed sections with strict mark scheme review</td>
                      <td className="p-3.5 text-red-600">Untimed questions with textbook or answers open</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#0a1f3d]">Final 15 Minutes</td>
                      <td className="p-3.5 text-emerald-700">Calm error checking and unit verification</td>
                      <td className="p-3.5 text-red-600">Staring blankly at the wall or closing the booklet early</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#0a1f3d]">Phone Discipline</td>
                      <td className="p-3.5 text-emerald-700">Phone placed in another room entirely</td>
                      <td className="p-3.5 text-red-600">Phone beside the notebook, vibrating periodically</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 08 */}
            <SectionHeading num="08" id="bringing-it-together">Bringing it together: transforming anxiety into predictable exam endurance</SectionHeading>
            <p>
              When a capable teenager repeatedly fades halfway through their mock exams, the emotional fallout is corrosive. They begin to believe they are &quot;bad at exams&quot; or that all their hard work is useless. Parents grow anxious, piling on more pressure or booking indiscriminate reteaching sessions that fail to address the true root cause.
            </p>
            <p>
              As Nimra Shahzada highlights across our educational guides, recognising that this is an <strong>endurance deficit</strong> completely changes the emotional equation. It removes the shame. There is nothing defective about your child&apos;s mind; their engine simply has not been conditioned for the distance yet.
            </p>
            <p>
              And unlike elusive talent or subject intuition, stamina responds to structured training faster and more predictably than almost any other exam skill. Through targeted <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold hover:underline">exam preparation</a>, a student who begins progressive overload six to eight weeks before their real papers will walk into the examination hall knowing exactly what the 90th minute feels like, and having the trained mental reserves to push through it with composure.
            </p>

            <ParentTakeaway>
              Do not wait for the catastrophic mock grade to discover the stamina gap. Start the progressive overload ladder this week, take the phone out of the room, and watch your child transform from an anxious sprinter into a composed, confident marathon finisher.
            </ParentTakeaway>

            {/* Section 09 - Frequently Asked Questions */}
            <SectionHeading num="09" id="frequently-asked-questions">Frequently asked questions</SectionHeading>
            <FAQAccordion />

            {/* Social Share */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-3">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Share this practical guide with other UAE parents</p>
              <SocialShare url={shareUrl} title={BLOG.title} center />
            </div>

            {/* Related Articles */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="text-sm font-extrabold text-[#0a1f3d] mb-4 uppercase tracking-wider">Related Guides on Psychology of Learning</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {RELATED.map((item, i) => (
                  <a key={i} href={`/blogs/${item.slug}`} className="group p-4 bg-slate-50 hover:bg-[#0f4a9b]/[0.03] border border-slate-200 rounded-2xl transition">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f4a9b]">{item.category}</span>
                    <p className="text-sm font-extrabold text-[#0a1f3d] mt-1 mb-1 group-hover:text-[#0f4a9b] transition">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mb-0">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Author & Reviewer Info Cards */}
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#0f4a9b]/10 bg-gradient-to-br from-white to-[#f4f7fd] p-4 sm:p-5">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#0f4a9b] border border-[#0f4a9b]/15 bg-[#0f4a9b]/5 mb-3">
                  About the Author
                </span>
                <p className="font-extrabold text-[#0a1f3d] text-sm mb-1">
                  <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] hover:underline">{BLOG.author}</a>
                </p>
                <p className="text-[11px] text-[#0f4a9b] font-semibold mb-2 leading-snug">{BLOG.authorRole}</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Nimra writes guides for parents on learning psychology, study skills, and exam craft for Ustaad UAE. She turns common study worries into small, doable steps families can use at home.
                </p>
              </div>
              <div className="rounded-2xl border border-[#C7A24A]/15 bg-gradient-to-br from-white to-[#fdf9f0] p-4 sm:p-5">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6 mb-3">
                  Reviewed By
                </span>
                <p className="font-extrabold text-[#0a1f3d] text-sm mb-1">
                  <a href="/authors/nida-iqbal" className="text-[#0f4a9b] hover:underline">{BLOG.reviewer}</a>
                </p>
                <p className="text-[11px] text-[#0f4a9b] font-semibold mb-2 leading-snug">{BLOG.reviewerRole}</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Nida checks each guide for accuracy and parent clarity before it is published. See{' '}
                  <a href="/editorial" className="text-[#0f4a9b] font-semibold hover:underline">how our editorial review works</a>.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {BLOG.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-[#0a1f3d]">{tag}</span>
              ))}
            </div>

            {/* Diagnostic Callout CTA Box at End of Blog */}
            <div className="mt-10 mb-6 rounded-2xl p-6 sm:p-8 border border-[#0f4a9b]/20 text-white text-center relative overflow-hidden shadow-xl"
              style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] text-xs font-bold mb-3">
                <Activity className="w-3.5 h-3.5" /> Ustaad Diagnostic Session
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug mb-3 max-w-xl mx-auto">
                See where your child&apos;s exam stamina really breaks down
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6 max-w-lg mx-auto">
                A one-to-one diagnostic session with an Ustaad curriculum specialist runs your child through an official board specific timed section to map their exact fatigue point and build a personalised progressive training ladder.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                <a
                  href="/contact#form"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-sm w-full sm:w-auto shadow-md"
                  style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
                >
                  Book a Free Trial
                </a>
                <a
                  href="https://wa.me/971561249005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] border border-transparent rounded-full font-bold text-white transition text-sm shadow-md w-full sm:w-auto"
                >
                  <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="h-4 w-4" /> Ask on WhatsApp
                </a>
                </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
