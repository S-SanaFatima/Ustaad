import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, 
  ChevronRight as ChevronRightIcon, MessageCircle, Timer, Brain, Zap, 
  Target, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, BarChart3, Check, X 
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'Exams Are Back in the UAE. What Changes for Your Child',
  titleLine1: 'Exams Are Back.',
  titleLine2: 'What Changes for Students Who Have Never Sat One',
  slug: 'uae-exams-return-students-never-sat-one',
  description:
    'UAE exams are returning after a year of portfolio grading. Here is what changes for students who have never sat a real paper, and how parents can help.',
  heroImage: '/images/blogs/uae-exam-hall-return.webp',
  heroAlt: 'UAE secondary students sitting timed papers under invigilation in an international school exam hall',
  heroCaption: 'The next series is expected to run in full. Many students will face a real invigilated exam hall for the first time.',
  datePublished: '2026-09-03',
  dateModified: '2026-09-04',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and study psychology',
  reviewer: 'Nida Iqbal',
  reviewerRole: 'MPhil, Education Leadership & Management',
  readTime: '11 min read',
  tags: ['UAE Exams Return', 'IGCSE Exams UAE', 'A-Level Exams UAE', 'Exam Preparation UAE', 'Exam Stamina', 'Portfolio of Evidence'],
};

const FAQS = [
  {
    q: 'Will exams definitely go ahead this year in the UAE?',
    a: 'Exam boards have indicated the next main series is expected to run in full. Confirm with your child\'s school, since arrangements can change and schools receive board updates directly.',
  },
  {
    q: 'Are last year\'s portfolio grades worth less than exam grades?',
    a: 'No. They were awarded by the same boards, marked by external examiners, and are recognised by universities and employers in the same way. The difference is in what they measured, not in their value.',
  },
  {
    q: 'My child did well last year. Do they still need to prepare differently?',
    a: 'Yes. A strong portfolio grade shows your child can learn and produce work over time. It does not show they can produce it in a timed hall from memory. That skill needs its own practice, however strong the grades.',
  },
  {
    q: 'How early should timed practice start?',
    a: 'Early in the term, not weeks before the exam. One timed section a week from now, marked properly, will do more than a burst of full papers in the final month.',
  },
  {
    q: 'Should my child do more past papers to make up for it?',
    a: 'More is not the answer. Better is. A past paper done under real conditions, marked against the mark scheme, with the lost marks written down, is worth several done casually with the book open. Volume without honest marking builds confidence without building skill.',
  },
  {
    q: 'Is this a good reason to get a tutor?',
    a: 'It can be, if the tutor\'s first job is diagnosis rather than teaching. A tutor who starts by putting your child through a timed section and marking it will show you the real gap. One who starts by reteaching content will spend weeks on things your child may already know.',
  },
];

const QUICK_ANSWERS = [
  {
    n: '01',
    q: 'What actually happened?',
    a: 'Boards cancelled the UAE summer series and graded students on portfolios of coursework, mocks and internal work.',
    id: 'what-actually-happened',
  },
  {
    n: '02',
    q: 'Why does it matter now?',
    a: 'The next series is expected to run as normal, so this cohort sits real external papers for the first time.',
    id: 'portfolio-vs-exam',
  },
  {
    n: '03',
    q: 'What is missing?',
    a: 'Not knowledge. The craft of producing knowledge cold, under time, for a marker who will not ask follow-ups.',
    id: 'five-exam-skills',
  },
  {
    n: '04',
    q: 'Is my child behind?',
    a: 'Not in content. In exam craft, yes, and so is every classmate. The gap is fixable, but it does not close alone.',
    id: 'year-11-year-13',
  },
  {
    n: '05',
    q: 'What should I do?',
    a: 'Build timed practice early, treat mocks as the real thing, and watch for avoidance rather than panic.',
    id: 'what-parents-can-do',
  },
];

const TOC_ITEMS = [
  { label: 'Quick Answers Before You Read', id: 'quick-answers' },
  { label: 'What Actually Happened', id: 'what-actually-happened' },
  { label: 'Portfolio Grades vs Exam Craft', id: 'portfolio-vs-exam' },
  { label: 'Five Things Exams Ask That Coursework Never Did', id: 'five-exam-skills' },
  { label: 'Year 11 and Year 13 Face This Differently', id: 'year-11-year-13' },
  { label: 'What Parents Can Actually Do', id: 'what-parents-can-do' },
  { label: 'Good Signs and Warning Signs', id: 'good-signs-warning-signs' },
  { label: 'Bringing It Together', id: 'bringing-it-together' },
];

const RELATED = [
  {
    slug: 'exam-panic-before-exams-uae',
    category: 'Psychology of Learning',
    title: 'What UAE Parents Miss About Exam Panic',
    description: 'Why last-minute exam panic usually traces back to quiet pressure earlier in the term.',
  },
  {
    slug: 'igcse-preparation-past-papers-final-step',
    category: 'Academic',
    title: 'IGCSE Preparation: Why Past Papers Are the Final Step',
    description: 'How to sequence past papers properly once exam craft becomes the priority.',
  },
  {
    slug: 'gcse-revision-tips-uae-parents',
    category: 'Parent Guidance',
    title: 'GCSE & IGCSE Revision Tips for UAE Parents',
    description: 'Study skills that raise grades, and how to support your child without taking over.',
  },
  {
    slug: 'a-level-tutoring-uae-independent-thinking',
    category: 'Psychology of Learning',
    title: 'A-Level Tutoring in the UAE Starts With Independent Thinking',
    description: 'Why portfolio years and A-Level papers demand more than more past papers alone.',
  },
];

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-8 mb-3 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/40 mb-1">{num}</span>
      <h2 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h2>
    </div>
  );
}

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

function NarrativeBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-[#0f4a9b]/12 bg-[#f4f7fc] overflow-hidden">
      <div className="px-4 py-2 border-b border-[#0f4a9b]/10">
        <span className="text-[10px] font-extrabold text-[#0f4a9b]/55 uppercase tracking-[0.13em]">{label}</span>
      </div>
      <div className="px-4 py-3.5 text-sm text-gray-600 leading-[1.75] text-justify space-y-2">{children}</div>
    </div>
  );
}

function ParentTakeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-xl border border-[#C7A24A]/25 bg-[#fdf8ee] px-4 py-3.5 text-xs lg:text-[13px] text-[#0a1f3d] leading-relaxed">
      <strong className="text-[#A8892A] uppercase tracking-wide text-[10px] mr-1">Parent takeaway:</strong>
      {children}
    </div>
  );
}

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mx-auto my-6 max-w-xl">
      <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">{caption}</figcaption>
      )}
    </figure>
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
    <div className="flex flex-col gap-2">
      {FAQS.map((faq, i) => {
        const isOpen = active === i;
        return (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <button onClick={() => setActive(isOpen ? null : i)}
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{ width: 36, height: 36, minWidth: 36, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms, color 300ms', border: 'none', cursor: 'pointer' }}>
                <span className="font-extrabold text-sm">?</span>
              </button>
              <button onClick={() => setActive(isOpen ? null : i)} aria-expanded={isOpen}
                className="flex-1 flex items-center gap-2.5 text-left rounded-full border"
                style={{ minHeight: 44, padding: '7px 14px', cursor: 'pointer', background: 'transparent', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)' }}>
                <span className="flex-1 font-semibold text-[#0a1f3d] text-[13px] leading-snug">{faq.q}</span>
                <span className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: 28, height: 28, minWidth: 28, borderRadius: '50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms, color 300ms, transform 300ms', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <ChevronDown className="h-3 w-3" />
                </span>
              </button>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }} className="ml-[48px]">
                  <div className="flex items-start gap-2.5 rounded-2xl border p-3.5"
                    style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.12)', boxShadow: '0 3px 12px rgba(15,74,155,0.05)' }}>
                    <p className="flex-1 text-gray-600 text-[13px] leading-relaxed text-justify">{faq.a}</p>
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

export default function UAEExamsReturnBlog() {
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
        author={BLOG.author}
        placename="United Arab Emirates"
        ogType="article"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
            { name: BLOG.title, url: canonical },
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

      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1"><Home className="h-3 w-3" /> Home</a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs/psychology-of-learning" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">Psychology of Learning</a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">UAE Exams Return</span>
        </div>
      </div>

      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">USTAAD | PSYCHOLOGY OF LEARNING</span>
            </div>

            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-justify">{BLOG.description}</p>

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
                <div className="h-px bg-slate-100" />
                <div className="flex items-start gap-2.5 min-w-0">
                  <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                  <div className="min-w-0 leading-snug">
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">Reviewed by</p>
                    <a href="/authors/nida-iqbal" className="text-[#0f4a9b] font-semibold text-xs sm:text-[13px] underline underline-offset-2 break-words">
                      {BLOG.reviewer}
                    </a>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{BLOG.reviewerRole}, Editorial</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1.5 min-w-0">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  <span className="leading-snug">Sep 2026, reviewed Sep 2026</span>
                </time>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />{BLOG.readTime}
                </span>
                <SocialShare url={shareUrl} title={BLOG.title} />
              </div>
            </div>
          </motion.div>

          <motion.figure initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-0">
            <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_40px_rgba(15,74,155,0.12)]">
              <img src={BLOG.heroImage} alt={BLOG.heroAlt} fetchPriority="high" className="w-full h-auto block" />
            </div>
            <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">{BLOG.heroCaption}</figcaption>
          </motion.figure>

          <TOC open={tocOpen} setOpen={setTocOpen} />
        </div>
      </section>

      <article className="pb-4 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-sm lg:text-[15px] leading-[1.8] [&_p]:text-justify [&_p]:mb-3">

            <p>Somewhere in Dubai sits a Year 11 student with a full set of <a href="/igcse" className="text-[#0f4a9b] font-semibold hover:underline">IGCSE</a> grades on paper, a strong report card, and a place in sixth form, who has never once sat in a hall and answered against a clock.</p>
            <p>That is not a criticism. Last summer&apos;s main series in the UAE was cancelled, and grades came through a portfolio of evidence instead. Results were good. Schools were relieved. Families moved on.</p>
            <p>But the next series is expected to run in full. The students preparing for it are the first group in years to walk into an exam hall without a single previous paper behind them. No mocks that counted. No timed papers under real conditions. No memory of what the third hour of a long paper feels like.</p>
            <p>Parents have noticed something is different. Most cannot quite say what. This guide names it plainly, and shows what you can do.</p>

            {/* Quick Impact Stats */}
            <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3.5 rounded-2xl border border-[#0f4a9b]/12 bg-[#f4f7fc] text-center">
                <div className="text-xl sm:text-2xl font-black text-[#0f4a9b]">0 Halls</div>
                <div className="text-[11px] text-gray-500 font-semibold mt-0.5 leading-snug">Official papers sat by this cohort</div>
              </div>
              <div className="p-3.5 rounded-2xl border border-[#0f4a9b]/12 bg-[#f4f7fc] text-center">
                <div className="text-xl sm:text-2xl font-black text-[#0f4a9b]">90 to 120m</div>
                <div className="text-[11px] text-gray-500 font-semibold mt-0.5 leading-snug">Unbroken cognitive stamina needed</div>
              </div>
              <div className="p-3.5 rounded-2xl border border-[#C7A24A]/30 bg-[#fdf9ee] text-center">
                <div className="text-xl sm:text-2xl font-black text-[#A8892A]">5 Skills</div>
                <div className="text-[11px] text-gray-500 font-semibold mt-0.5 leading-snug">Distinct hall-specific craft areas</div>
              </div>
              <div className="p-3.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/60 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-700">1x / Wk</div>
                <div className="text-[11px] text-gray-500 font-semibold mt-0.5 leading-snug">Weekly timed practice rhythm</div>
              </div>
            </div>

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
                    className="group flex gap-3 rounded-xl border border-slate-200/90 bg-white p-3.5 transition hover:border-[#0f4a9b]/30 hover:shadow-md"
                  >
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] text-xs font-extrabold grid place-items-center">{item.n}</span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-snug mb-0.5">{item.q}</span>
                      <span className="block text-xs text-gray-500 leading-relaxed">{item.a}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <SectionHeading num="01" id="what-actually-happened">What actually happened, in plain terms</SectionHeading>
            <p>In 2026, the three main boards used by British-curriculum schools in the UAE (Cambridge International, Pearson Edexcel and OxfordAQA) cancelled the summer series here. The reason was regional security, not the students or the schools.</p>
            <p>Instead of papers, students were graded through a portfolio of evidence. Schools gathered mocks, coursework, classwork and internal assessments. Board examiners marked and moderated that evidence. The IB applied a similar contingency route for Diploma students.</p>
            <p>It worked. Grades were issued on time and, across the UAE, results were strong. What it also did, quietly, is remove the one experience every previous cohort had taken for granted, at exactly the age when that experience is usually learned.</p>

            <SectionHeading num="02" id="portfolio-vs-exam">Portfolio grading measured something real. It just was not this.</SectionHeading>
            <p>A portfolio grade is not a fake grade. It reflects work a student genuinely did over months, marked by real examiners. If your child earned strong grades this way, they earned them.</p>
            <p>But a portfolio measures how well a student can learn and produce when they have time, notes, a teacher nearby, and the chance to revise a draft. An exam measures something different: whether they can produce what they know, from memory, in a fixed format, in a fixed window, alone.</p>
            <p>Those are not the same skill. Having one does not give you the other. That is the gap parents are sensing. Their child is capable, has proof of being capable, and has never been asked to show it the way the next paper will demand.</p>
            
            <ParentTakeaway>Your child&apos;s grades are real. What they have not yet built is the skill of producing those grades under exam conditions. That needs separate practice.</ParentTakeaway>

            {/* Table 1: Portfolio of Evidence vs Live Exam Hall */}
            <div className="my-6 overflow-hidden rounded-2xl border border-[#0f4a9b]/15 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-[#0a1f3d] to-[#0f4a9b] px-4 py-3 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-[#C7A24A]" />
                  <span className="text-xs font-extrabold tracking-wider uppercase">Direct Comparison Matrix</span>
                </div>
                <span className="text-[11px] font-medium text-white/75">Portfolio Model vs. Live Exam Series</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-slate-50 text-[#0a1f3d] border-b border-slate-200">
                      <th className="p-3.5 font-extrabold uppercase text-[11px] tracking-wider w-[24%]">Dimension</th>
                      <th className="p-3.5 font-extrabold uppercase text-[11px] tracking-wider text-[#0f4a9b] w-[38%]">Portfolio Route (2025 to 2026)</th>
                      <th className="p-3.5 font-extrabold uppercase text-[11px] tracking-wider text-amber-800 w-[38%]">Live Exam Series (Returning)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-gray-700">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Working Environment</td>
                      <td className="p-3.5">Familiar classroom or home desk; supportive teacher nearby; calm pace</td>
                      <td className="p-3.5 font-medium text-amber-900 bg-amber-50/30">Silent, invigilated hall; strict desk spacing; ticking wall clock</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Time & Pacing</td>
                      <td className="p-3.5">Multiple weeks to complete, redraft, review, and polish coursework</td>
                      <td className="p-3.5 font-medium text-amber-900 bg-amber-50/30">Strict 90 to 180 minute countdown; no pauses or extensions</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Cognitive Retrieval</td>
                      <td className="p-3.5">Assisted retrieval with revision notes, textbooks, and teacher guidance</td>
                      <td className="p-3.5 font-medium text-amber-900 bg-amber-50/30">100% cold retrieval from memory; zero reference materials allowed</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Error Correction</td>
                      <td className="p-3.5">Iterative drafting; red-pen feedback acted on before submission</td>
                      <td className="p-3.5 font-medium text-amber-900 bg-amber-50/30">One-shot execution; every lost mark on the paper is final</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">What It Actually Measures</td>
                      <td className="p-3.5 text-slate-600">Sustained learning capacity, consistency, and comprehension</td>
                      <td className="p-3.5 font-semibold text-[#0f4a9b] bg-amber-50/30">Exam craft: speed, stamina, command words, and calm under time</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <InlineImage
              src="/images/blogs/uae-student-timed-past-paper.webp"
              alt="UAE secondary student sitting at a study desk with an analog countdown timer practicing a timed past paper"
              caption="Portfolio work builds sustained coursework over months. An exam hall demands cold retrieval against a ticking countdown."
            />

            <SectionHeading num="03" id="five-exam-skills">The five things an exam asks for that coursework never did</SectionHeading>
            <p>None of these are about content. Your child may know the syllabus well. These are about what the hall itself demands.</p>

            {/* 5 Exam Skills Cards */}
            <div className="my-6 space-y-3.5">
              {/* Skill 1 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm hover:border-[#0f4a9b]/30 transition">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center shrink-0 mt-0.5">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-base font-extrabold text-[#0a1f3d]">1. Producing Knowledge Cold</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-[#0f4a9b]/10 text-[#0f4a9b]">Cognitive Retrieval</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2">
                      In coursework, knowledge is retrieved with support. Notes are nearby, teachers can clarify prompts, and students can pause. In an exam, retrieval is completely unassisted. A student who spent the previous year rereading may recognise every topic and still freeze when required to retrieve formulas, definitions, or mechanisms from memory.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[#0f4a9b] font-semibold bg-[#f4f7fc] p-2.5 rounded-xl border border-[#0f4a9b]/10">
                      <Zap className="h-3.5 w-3.5 shrink-0 text-[#C7A24A]" />
                      <span><strong>Training drill:</strong> 10-minute closed-book brain dumps of key concepts before attempting past paper questions.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skill 2 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm hover:border-[#0f4a9b]/30 transition">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Timer className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-base font-extrabold text-[#0a1f3d]">2. Working Against the Clock</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-amber-500/10 text-amber-700">Time Allocation</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2">
                      A two-hour paper is not two hours of thinking. It is 120 minutes minus reading time, arithmetic checking, and recalculating when an answer looks wrong. Students who have never sat against a strict clock either rush early questions carelessly or linger on tough 3-mark problems and leave final pages untouched.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-amber-900 font-semibold bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/60">
                      <Zap className="h-3.5 w-3.5 shrink-0 text-amber-600" />
                      <span><strong>Training drill:</strong> Strict 1 mark = 1 minute pacing discipline with a physical countdown clock visible.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skill 3 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm hover:border-[#0f4a9b]/30 transition">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-base font-extrabold text-[#0a1f3d]">3. Sustained Cognitive Stamina</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-emerald-500/10 text-emerald-700">Focus Span</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2">
                      Concentrating intensely for 90 to 120 minutes without breaks or phone interruptions is physically and mentally demanding in a way school lessons are not. A student can understand the material completely and still fade in the final 30 minutes simply because their mental stamina has never been stretched to paper length.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-emerald-900 font-semibold bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-200/60">
                      <Zap className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                      <span><strong>Training drill:</strong> Incremental stamina ladder: 45 min unbroken focus, progressing +15 mins each week up to 105 mins.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skill 4 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm hover:border-[#0f4a9b]/30 transition">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-base font-extrabold text-[#0a1f3d]">4. Decoding Command Words Under Time</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-indigo-500/10 text-indigo-700">Exam Technique</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2">
                      Command words carry specific mark structures. &quot;Describe&quot; and &quot;explain&quot; award marks differently. &quot;Evaluate&quot; requires a supported conclusion. In coursework portfolios, teachers frequently prompted students to elaborate. In an external hall, markers award nothing for implied reasoning that isn&apos;t explicitly stated on the lines.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-indigo-950 font-semibold bg-indigo-50/60 p-2.5 rounded-xl border border-indigo-200/60">
                      <Zap className="h-3.5 w-3.5 shrink-0 text-indigo-600" />
                      <span><strong>Training drill:</strong> Underline the command word and number of marks before writing any multi-mark answer.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skill 5 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm hover:border-[#0f4a9b]/30 transition">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-base font-extrabold text-[#0a1f3d]">5. Managing Adrenaline Without a Safety Net</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-rose-500/10 text-rose-700">Composure</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2">
                      Previous cohorts walked into finals knowing what a real paper felt like; they had survived the nerves before. For this cohort, their very first live paper may determine their final grades. Experiencing unfamiliar physical tension without previous conditioning can cause temporary cognitive blanking.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-rose-950 font-semibold bg-rose-50/60 p-2.5 rounded-xl border border-rose-200/60">
                      <Zap className="h-3.5 w-3.5 shrink-0 text-rose-600" />
                      <span><strong>Training drill:</strong> Rehearse a reset routine: when stuck, take two deep breaths, circle the question, and move immediately to the next one.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ParentTakeaway>The gap is not what your child knows. It is retrieval, timing, stamina, reading the question, and nerves. All five are trainable. None train themselves.</ParentTakeaway>

            <NarrativeBox label="Case Study: Year 11, Dubai, Cambridge IGCSE Mathematics 0580">
              <p>A Year 11 student in Dubai Hills finished Year 10 with a portfolio grade that mapped to a strong 7 in Cambridge 0580. Homework was accurate. Class tests with notes nearby looked solid. In her first full timed Paper 2 this term, under invigilation and with no calculator switch-outs mid-way, she left three multi-mark questions blank and scored a low 5.</p>
              <p>The content was not missing. Cold retrieval and clock management were. After six weeks of one timed section a week, marked against the 0580 scheme with lost marks written down, her next mock moved to a secure 6 with time left to check. Families preparing for British-curriculum papers in Dubai often start with board-matched{' '}
                <a href="/gcse-tutor-dubai" className="text-[#0f4a9b] font-semibold hover:underline">GCSE tutoring in Dubai</a>{' '}
                or Cambridge-aligned{' '}
                <a href="/igcse" className="text-[#0f4a9b] font-semibold hover:underline">IGCSE support</a>{' '}
                so the first timed papers use the right format from day one.</p>
            </NarrativeBox>

            <SectionHeading num="04" id="year-11-year-13">Year 11 and Year 13 face this differently</SectionHeading>
            <p><strong className="text-[#0a1f3d]">Year 11</strong> students sat no IGCSE or <a href="/gcse" className="text-[#0f4a9b] font-semibold hover:underline">GCSE</a> papers last year. Many also had reduced end-of-year tests in Year 10. So their first real external paper will be the one that decides their grades. The good news is they have the year ahead and schools will build mocks in. The risk is treating those mocks as low-stakes practice rather than the rehearsal they are.</p>
            <p><strong className="text-[#0a1f3d]">Year 13</strong> students are in a stranger position. Their <a href="/a-level" className="text-[#0f4a9b] font-semibold hover:underline">A-Level</a> grades last year came from portfolios, and those grades now feed predicted grades for university. They then face full papers with less examination experience than any A-Level cohort in living memory. For competitive courses, that matters: the offer is conditional on results from a format the student has never experienced.</p>
            <p>Neither group is doomed. Both need to start the term already knowing the missing skill is exam craft, not content.</p>

            <InlineImage
              src="/images/blogs/uae-exam-mark-scheme-review.webp"
              alt="UAE Year 13 and Year 11 student analyzing lost marks against official examiner mark scheme with highlighters"
              caption="Exam technique is built through granular review: logging lost marks directly against the official board mark scheme rather than just checking final percentages."
            />

            {/* Table 2: Year 11 vs Year 13 Roadmap */}
            <div className="my-6 overflow-hidden rounded-2xl border border-[#0f4a9b]/15 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-[#0a1f3d] to-[#0f4a9b] px-4 py-3 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-[#C7A24A]" />
                  <span className="text-xs font-extrabold tracking-wider uppercase">Strategic Roadmap</span>
                </div>
                <span className="text-[11px] font-medium text-white/75">Year 11 (IGCSE) vs. Year 13 (A-Level/IB)</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-slate-50 text-[#0a1f3d] border-b border-slate-200">
                      <th className="p-3.5 font-extrabold uppercase text-[11px] tracking-wider w-[22%]">Focus Area</th>
                      <th className="p-3.5 font-extrabold uppercase text-[11px] tracking-wider text-[#0f4a9b] w-[39%]">Year 11 (IGCSE / GCSE)</th>
                      <th className="p-3.5 font-extrabold uppercase text-[11px] tracking-wider text-indigo-950 w-[39%]">Year 13 (A-Level / IB DP)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-gray-700">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Exam Hall History</td>
                      <td className="p-3.5">Zero prior external exam hall experience</td>
                      <td className="p-3.5">Only internal school mocks; Year 11 was heavily portfolio-weighted</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Primary Stakes</td>
                      <td className="p-3.5">Sixth Form entry, A-Level/IB subject prerequisites, baseline academic profile</td>
                      <td className="p-3.5 font-semibold text-rose-700">Conditional university offers (UCAS, US, regional tier-1 programs)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Typical Failure Mode</td>
                      <td className="p-3.5">Pacing collapse: lingering on 2-mark questions, missing 6-mark essays</td>
                      <td className="p-3.5">Multi-step cognitive fatigue: freezing on novel synoptic application problems</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Weekly Practice Goal</td>
                      <td className="p-3.5 font-medium text-[#0f4a9b]">One 35 to 45 minute timed section weekly + marking against mark schemes</td>
                      <td className="p-3.5 font-medium text-[#0f4a9b]">Full 75 to 90 minute uninterrupted paper blocks under strict invigilation rules</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Key Revision Tool</td>
                      <td className="p-3.5">Command word breakdown & marking lost marks into a dedicated error log</td>
                      <td className="p-3.5">Examiner reports, high-mark model answers, and deep method adaptability</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <NarrativeBox label="Case Study: Year 13, Abu Dhabi, Pearson Edexcel A-Level Chemistry 9CH0">
              <p>A Year 13 student on Reem Island held a portfolio A in Edexcel 9CH0 and a predicted A for university applications. In his first school mock this autumn (Paper 1, full timing, no notes), organic mechanisms he could explain in tutorials collapsed under time. He finished twenty minutes early with thin answers on the last two questions and dropped a full grade.</p>
              <p>What changed the next month was not more note-making. It was weekly timed 9CH0 sections, stamina blocks that grew from forty to ninety minutes, and treating every mock as invigilated. His second mock recovered to the predicted band. Abu Dhabi families in this position often use board-specific{' '}
                <a href="/a-level-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">A-Level tutoring in Abu Dhabi</a>{' '}
                or{' '}
                <a href="/chemistry-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">chemistry tutoring in Abu Dhabi</a>{' '}
                so diagnosis starts with a timed paper, not a content reteach.</p>
            </NarrativeBox>

            <SectionHeading num="05" id="what-parents-can-do">What parents can actually do</SectionHeading>
            <p>You do not need to become an examiner. Four things make a real difference.</p>

            <h3 className="text-base font-extrabold text-[#0a1f3d] mt-5 mb-2">Get timed practice into the term early</h3>
            <p>Most families start timed past papers a few weeks before exam season. This year that is too late. From early in the term, one timed paper section a week, marked honestly against the mark scheme, does more than any amount of extra revision. The point is not the score. The point is working to a clock and seeing exactly where marks went.</p>
            <p>If your child has not started past papers yet,{' '}
              <a href="/blogs/igcse-preparation-past-papers-final-step" className="text-[#0f4a9b] font-semibold hover:underline">why past papers are the final step, not the first</a>{' '}
              explains how to sequence them properly. For families building a fuller plan, see also{' '}
              <a href="/blogs/gcse-revision-tips-uae-parents" className="text-[#0f4a9b] font-semibold hover:underline">GCSE revision tips for UAE parents</a>{' '}
              and our{' '}
              <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold hover:underline">exam preparation</a>{' '}
              overview.</p>

            <h3 className="text-base font-extrabold text-[#0a1f3d] mt-5 mb-2">Treat every mock as the real thing</h3>
            <p>Schools are running mocks more formally this year, partly because last year mock results were submitted as evidence. Encourage your child to treat them that way too: full timed conditions, no notes, the whole paper in one go. A mock taken seriously is the closest rehearsal your child will get.</p>

            <h3 className="text-base font-extrabold text-[#0a1f3d] mt-5 mb-2">Build stamina like a physical skill</h3>
            <p>Because that is what it is. Start with forty-minute focused sessions and extend by ten minutes each week until your child can hold concentration for a full paper length. This is separate from revision. It is training the ability to sit, focus and produce without a break.</p>

            <h3 className="text-base font-extrabold text-[#0a1f3d] mt-5 mb-2">Watch for avoidance, not just anxiety</h3>
            <p>A child who is scared of exams sometimes looks anxious. More often, at this age, they look uninterested. Homework gets put off. Past papers get &quot;forgotten&quot;. Revision becomes rereading, because rereading feels safe and testing does not.</p>
            <p>That avoidance is the signal. If you see it, the answer is not more pressure. It is making the next step small enough to be obviously doable. Not &quot;revise chemistry.&quot; &quot;Do these six questions with a timer on.&quot;</p>
            <ParentTakeaway>Your job is the routine and the conditions, not the teaching. Timed practice early, mocks taken seriously, stamina built gradually, and an eye on avoidance. That is the whole list.</ParentTakeaway>

            <InlineImage
              src="/images/blogs/uae-parent-teen-mock-routine.webp"
              alt="UAE parent and teenager at home study desk constructively reviewing mock exam schedule and past papers"
              caption="Supportive routine over pressure: setting low-friction, timed practice blocks at home builds confidence before official school mocks arrive."
            />

            <SectionHeading num="06" id="good-signs-warning-signs">Good signs and warning signs, at a glance</SectionHeading>
            <p>If you remember nothing else, remember this contrast. It helps you distinguish between normal teenage inertia and genuine exam-craft anxiety.</p>

            {/* Table 3: Diagnostic Observation Matrix */}
            <div className="my-6 overflow-hidden rounded-2xl border border-[#0f4a9b]/15 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-[#0a1f3d] to-[#0f4a9b] px-4 py-3 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#C7A24A]" />
                  <span className="text-xs font-extrabold tracking-wider uppercase">Diagnostic Observation Matrix</span>
                </div>
                <span className="text-[11px] font-medium text-white/75">What to Observe & How to Respond</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-50 text-[#0a1f3d] border-b border-slate-200">
                      <th className="p-3.5 font-extrabold uppercase text-[11px] tracking-wider w-[18%]">Observation Area</th>
                      <th className="p-3.5 font-extrabold uppercase text-[11px] tracking-wider text-emerald-700 bg-emerald-50/40 w-[27%]">
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" /> Adapting Well</span>
                      </th>
                      <th className="p-3.5 font-extrabold uppercase text-[11px] tracking-wider text-rose-700 bg-rose-50/40 w-[27%]">
                        <span className="flex items-center gap-1.5"><AlertTriangle className="h-3.5 w-3.5" /> Warning Sign</span>
                      </th>
                      <th className="p-3.5 font-extrabold uppercase text-[11px] tracking-wider text-[#0f4a9b] w-[28%]">Parent Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-gray-700">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Timed Drills</td>
                      <td className="p-3.5 text-emerald-950 bg-emerald-50/15">Initiates timed sections without parental friction or postponement</td>
                      <td className="p-3.5 text-rose-950 bg-rose-50/15">Avoids anything with a timer; revises only by passive re-reading</td>
                      <td className="p-3.5 text-xs text-gray-600">Start tiny: &quot;Let&apos;s just do 3 short questions with a 10-minute timer.&quot;</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Marking & Errors</td>
                      <td className="p-3.5 text-emerald-950 bg-emerald-50/15">Marks paper honestly against mark scheme; logs lost marks in an error book</td>
                      <td className="p-3.5 text-rose-950 bg-rose-50/15">Glances at final percentage only, closes paper, or avoids marking completely</td>
                      <td className="p-3.5 text-xs text-gray-600">Celebrate the mistakes found: &quot;Every lost mark identified here is saved in the real exam.&quot;</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Memory Retrieval</td>
                      <td className="p-3.5 text-emerald-950 bg-emerald-50/15">Can explain concepts, steps, or definitions aloud with books closed</td>
                      <td className="p-3.5 text-rose-950 bg-rose-50/15">Recognises notes when looking at them, but freezes when pages are covered</td>
                      <td className="p-3.5 text-xs text-gray-600">Switch from rereading to self-quizzing or explaining one concept over dinner.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">School Mocks</td>
                      <td className="p-3.5 text-emerald-950 bg-emerald-50/15">Treats school mocks as vital dress rehearsals and feedback milestones</td>
                      <td className="p-3.5 text-rose-950 bg-rose-50/15">Treats mocks as an unpleasant chore to &quot;survive&quot; or dreads going to school</td>
                      <td className="p-3.5 text-xs text-gray-600">De-escalate the grade stakes: emphasize stamina and pacing diagnostics over raw marks.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0a1f3d] bg-slate-50/50">Mindset</td>
                      <td className="p-3.5 text-emerald-950 bg-emerald-50/15">Talks about exams as physical skills that respond to deliberate training</td>
                      <td className="p-3.5 text-rose-950 bg-rose-50/15">Believes exams are an arbitrary threat that simply &quot;happens&quot; to them</td>
                      <td className="p-3.5 text-xs text-gray-600">Frame exam technique as athletic training: stamina and pacing improve with weekly reps.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <SectionHeading num="07" id="bringing-it-together">Bringing it together</SectionHeading>
            <p>The students sitting papers this year are not less capable than the ones before them. Many have shown more resilience, finishing courses through a disrupted year and earning grades through sustained work rather than one afternoon.</p>
            <p>What they lack is narrow and specific: the craft of the exam hall. Retrieval. Timing. Stamina. Reading the question. Steady nerves. Previous cohorts absorbed those almost by accident. This cohort will have to learn them on purpose.</p>
            <p>That is not bad news. Skills learned on purpose tend to be learned better. But it does mean the year cannot be treated as normal, and the mocks cannot be treated as a formality.</p>
            <p>If your child is in Year 11 or Year 13, this is the year to make exam practice a habit, not a last-minute scramble. Start early, keep it steady, and let the paper, not the panic, tell you where the work needs to go.</p>

            <div className="my-6 rounded-2xl border border-[#0f4a9b]/15 bg-[#f4f7fc] p-5 sm:p-6">
              <h3 className="text-base font-extrabold text-[#0a1f3d] mb-2">See where your child stands before the mocks do</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                A short diagnostic session does one thing: it puts your child in front of a timed section of their own board&apos;s paper, marks it honestly, and tells you which of the five skills above needs work. No teaching on the first day. Just a clear picture of where the gap is.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We match students across the UAE with tutors who know their exact board and tier (Cambridge, Pearson Edexcel, OxfordAQA or IB) in Dubai, Abu Dhabi, Sharjah and every emirate, in person or online. If you have never hired support before,{' '}
                <a href="/blogs/10-questions-hiring-private-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">ten honest questions to ask first</a>{' '}
                will help you judge the fit. Abu Dhabi families looking for British-curriculum timing practice can also start with{' '}
                <a href="/igcse-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">IGCSE tutoring in Abu Dhabi</a>{' '}
                or{' '}
                <a href="/gcse-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">GCSE tutoring in Abu Dhabi</a>.
              </p>
              <div className="flex flex-col items-center gap-1.5">
                <a href="/contact#form"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-white text-sm hover:brightness-110 transition"
                  style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                  Book a free trial session
                </a>
                <p className="text-xs text-gray-500 font-medium">Bring this article with you. No commitment.</p>
              </div>
            </div>

          </div>

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

          <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col items-center gap-3">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Found this helpful? Share it</p>
            <SocialShare url={shareUrl} title={BLOG.title} center />
          </div>

          <div className="mt-7 pt-6 border-t border-slate-200">
            <h3 className="text-sm font-extrabold text-[#0a1f3d] mb-4 uppercase tracking-wider">Related Articles for UAE Parents</h3>
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
                Nimra writes parent-facing guides on how UAE students learn, revise and cope under exam pressure. She turns common study worries into small, doable steps families can use at home.
              </p>
            </div>
            <div className="rounded-2xl border border-[#C7A24A]/15 bg-gradient-to-br from-white to-[#fdf9f0] p-4 sm:p-5">
              <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6 mb-3">
                Reviewed By
              </span>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1">
                <a href="/authors/nida-iqbal" className="text-[#0f4a9b] hover:underline">{BLOG.reviewer}</a>
              </p>
              <p className="text-[11px] text-[#0f4a9b] font-semibold mb-2 leading-snug">{BLOG.reviewerRole}, Editorial</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Nida checks each guide for accuracy and parent clarity before it is published. See{' '}
                <a href="/editorial" className="text-[#0f4a9b] font-semibold hover:underline">how our editorial review works</a>.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {BLOG.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-[#0a1f3d]">{tag}</span>
            ))}
          </div>

          <div className="mt-8 mb-12 rounded-2xl p-6 lg:p-8 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <p className="text-white/75 mb-5 max-w-lg mx-auto text-sm">
              Structured academic mentorship and exam-preparation guidance for UAE families who want a clear picture before mocks arrive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <a href="/contact#form"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-sm"
                  style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                  Book Your Free Trial
                </a>
                <p className="text-xs text-white/60 font-medium">No commitment. Cancel anytime.</p>
              </div>
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
