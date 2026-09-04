import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home,
  ChevronRight as ChevronRightIcon, MessageCircle, Download,
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: '10 Questions Before Hiring a Private Tutor in Abu Dhabi | Ustaad',
  titleLine1: '10 Honest Questions to Ask Before You Hire a',
  titleLine2: 'Private Tutor in Abu Dhabi',
  slug: '10-questions-hiring-private-tutor-abu-dhabi',
  description:
    'Ten practical questions UAE parents should ask before hiring a private tutor in Abu Dhabi, plus a free interview worksheet to compare tutors side by side.',
  heroImage: '/images/blogs/tutor_vetting_hero.jpg',
  heroAlt: 'Parent, high school student, and private tutor discussing study progress in Abu Dhabi',
  heroCaption:
    'Choosing a tutor is one of the least visible decisions a parent makes, and often one of the biggest.',
  datePublished: '2026-08-28',
  dateModified: '2026-08-28',
  author: 'Nimra Shahzada',
  reviewer: 'Nida Iqbal',
  readTime: '13 min read',
  tags: ['Private Tutors', 'Abu Dhabi', 'Parent Guidance', 'IGCSE', 'A-Level', 'IB', 'Tutor Matching'],
};

const FAQS = [
  {
    q: 'How many trial sessions should I try before choosing a tutor in Abu Dhabi?',
    a: 'One well-watched trial is usually enough to sense the fit, though a second helps if your child was nervous or the subject is tricky. Watch how the tutor listens and adapts, not just how much they cover.',
  },
  {
    q: 'Is an online tutor as good as an in-person tutor in Abu Dhabi?',
    a: 'For most subjects and ages, a strong online tutor in Abu Dhabi works as well as an in-person one, as long as your child has a calm space and a steady routine. Teaching quality matters far more than the screen.',
  },
  {
    q: 'How much does a private tutor in Abu Dhabi cost?',
    a: 'Rates vary with the subject, the level (IGCSE, A-Level, IB), the tutor\'s experience, and whether sessions are online or in-person, so ask for pricing against your child\'s exact needs rather than a headline figure. The more useful question is what you get for the fee: diagnosis, progress tracking, and a tutor who suits your child.',
  },
  {
    q: 'How soon should I expect to see progress?',
    a: 'Confidence often shifts within a few weeks, while grades usually take a term or more, depending on where your child started. Agree with your tutor what early progress should look like so you measure the same thing.',
  },
  {
    q: 'What is the difference between a subject tutor and an exam-focused tutor?',
    a: 'A subject tutor strengthens overall knowledge, while an exam-focused tutor also trains technique, timing, and mark-scheme skill for one board. Close to exams, curriculum know-how and past-paper practice matter most.',
  },
  {
    q: 'Should my child\'s tutor keep in touch with me?',
    a: 'Yes. Light, regular contact, like a short summary or a periodic review, keeps everyone aligned without turning tutoring into surveillance. Agree the format and how often right at the start.',
  },
];

const QUICK_ANSWERS = [
  { n: 1, id: 'why-do-i-want-a-tutor', q: 'Why do I want a tutor at all?', a: 'Name the real goal first, so you can tell later if it worked.' },
  { n: 2, id: 'checked-what-child-needs', q: 'Has anyone checked what my child actually needs?', a: 'A good tutor finds the gaps before they start teaching.' },
  { n: 3, id: 'qualifications-or-teaching', q: 'Am I hiring qualifications, or good teaching?', a: 'Knowing a subject and explaining it well are two different skills.' },
  { n: 4, id: 'how-will-i-know-working', q: 'How will I know the tutoring is working?', a: 'Ask for simple proof you can see, not just kind words.' },
  { n: 5, id: 'if-child-still-does-not-get-it', q: 'What if my child still does not get it?', a: 'Look for a tutor who changes the method, not just the volume.' },
  { n: 6, id: 'knows-child-curriculum', q: 'Does this tutor really know my child\'s curriculum?', a: 'The right exam board and mark scheme is where marks are won.' },
  { n: 7, id: 'independence-or-dependence', q: 'Will this build independence or dependence?', a: 'Great tutoring slowly makes itself less needed.' },
  { n: 8, id: 'parent-job', q: 'What is my job as a parent?', a: 'Support the routine, stay in touch, and let the tutor teach.' },
  { n: 9, id: 'promises-to-pause', q: 'Which promises should make me pause?', a: 'Be careful with guaranteed grades and instant results.' },
  { n: 10, id: 'trust-this-person', q: 'Would I trust this person with my child?', a: 'After the facts, trust your impression of the person.' },
];

const COMPARISON_ROWS = [
  { good: 'Finds the learning gaps before teaching', flag: 'Starts teaching without checking what your child needs' },
  { good: 'Tracks progress with evidence you can see', flag: 'Offers vague reassurance that "it\'s going well"' },
  { good: 'Knows your child\'s exact exam board', flag: 'Knows the subject, but not the board or mark scheme' },
  { good: 'Builds independence over time', flag: 'Creates ongoing dependence on the sessions' },
  { good: 'Makes honest, realistic promises', flag: 'Guarantees grades or instant results' },
];

const TOC_ITEMS = [
  ...QUICK_ANSWERS.map((item) => ({ label: item.q, id: item.id })),
  { label: 'A good tutor vs a red flag, at a glance', id: 'good-tutor-vs-red-flag' },
  { label: 'Bringing the ten questions together', id: 'bringing-questions-together' },
  { label: 'Frequently Asked Questions', id: 'frequently-asked-questions' },
];

const RELATED = [
  {
    slug: 'uae-exams-return-students-never-sat-one',
    category: 'Psychology of Learning',
    title: 'Exams Are Back in the UAE. What Changes for Your Child',
    description: 'After portfolio grading, what changes for students who have never sat a real paper, and how parents can help.',
  },
  {
    slug: 'gcse-revision-tips-uae-parents',
    category: 'Parent Guidance',
    title: 'GCSE & IGCSE Revision Tips for UAE Parents',
    description: 'The study skills that actually raise grades, and how to support your child without taking over.',
  },
  {
    slug: 'igcse-preparation-past-papers-final-step',
    category: 'Academic',
    title: 'IGCSE Preparation: Why Past Papers Are the Final Step',
    description: 'Past papers are the roof of IGCSE preparation — essential, but only after the foundation is set.',
  },
  {
    slug: 'exam-panic-before-exams-uae',
    category: 'Parent Guidance',
    title: 'What UAE Parents Miss About Exam Panic Right Before Exams',
    description: 'Why exam anxiety peaks in the final days before papers — and how parents can help protect working memory.',
  },
];

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

function SectionHeading({ num, id, children }: { num?: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-8 mb-3 scroll-mt-24">
      {num ? <span className="block text-[11px] font-extrabold text-[#0f4a9b]/40 mb-1">{num}</span> : null}
      <h2 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h2>
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

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="my-3 space-y-2 pl-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
          <span className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
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
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center gap-2.5 group py-0.5"
            >
              <span className="shrink-0 text-[10px] font-extrabold text-[#0f4a9b]/35 w-4">
                {i < 10 ? String(i + 1).padStart(2, '0') : '·'}
              </span>
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
                style={{ width: 36, height: 36, minWidth: 36, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', border: 'none', cursor: 'pointer' }}>
                <span className="font-extrabold text-sm">?</span>
              </button>
              <button onClick={() => setActive(isOpen ? null : i)} aria-expanded={isOpen}
                className="flex-1 flex items-center gap-2.5 text-left rounded-full border"
                style={{ minHeight: 44, padding: '7px 14px', cursor: 'pointer', background: 'transparent', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)' }}>
                <span className="flex-1 font-semibold text-[#0a1f3d] text-[13px] leading-snug">{faq.q}</span>
                <span className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{ width: 28, height: 28, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 300ms' }}>
                  <ChevronDown className="h-3 w-3" />
                </span>
              </button>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.24 }} className="ml-[48px]">
                  <div className="flex items-start gap-2.5 rounded-2xl border p-3.5"
                    style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.12)' }}>
                    <p className="flex-1 text-gray-600 text-[13px] leading-relaxed text-justify">{faq.a}</p>
                    <span className="flex-shrink-0 flex items-center justify-center rounded-full w-7 h-7 bg-[#0f4a9b] text-white">
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

export default function HirePrivateTutorAbuDhabiBlog() {
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
        author="Nimra Shahzada"
        placename="Abu Dhabi, UAE"
        ogType="article"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: BLOG.titleLine2, url: canonical },
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
              jobTitle: 'Education Counsellor & Student Support Specialist',
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
              affiliation: 'Ustaad UAE',
            },
            reviewer: {
              name: 'Nida Iqbal',
              url: '/authors/nida-iqbal',
              jobTitle: 'MPhil in Education Leadership and Management',
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
              affiliation: 'Ustaad Editorial',
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
          <a href="/blogs/parent-guidance" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">Parent Guidance</a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">Hiring a Tutor</span>
        </div>
      </div>

      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">USTAAD · PARENT GUIDE</span>
            </div>

            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-justify">{BLOG.description}</p>

            <div className="mb-4 mt-2 space-y-2">
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <div>
                    <span className="font-medium">Written by:</span>{' '}
                    <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] font-semibold underline">{BLOG.author}</a>
                  </div>
                  <div className="text-gray-400 mt-0.5">Education Counsellor &amp; Student Support Specialist | Ustaad UAE</div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <div>
                    <span className="font-medium">Reviewed by:</span>{' '}
                    <a href="/authors/nida-iqbal" className="text-[#0f4a9b] font-semibold underline">{BLOG.reviewer}</a>
                  </div>
                  <div className="text-gray-400 mt-0.5">
                    MPhil in Education Leadership and Management ·{' '}
                    Ustaad Editorial
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 pt-1">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  First published: August 2026 · Last reviewed: August 2026
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
            <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">{BLOG.heroCaption}</figcaption>
          </motion.figure>

          <TOC open={tocOpen} setOpen={setTocOpen} />
        </div>
      </section>

      <article className="pb-4 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-sm lg:text-[15px] leading-[1.8] [&_p]:text-justify [&_p]:mb-3">

            <p>Choosing a private tutor is one of the least visible decisions a parent makes, and often one of the biggest. There is no ceremony to it. You send a few messages, compare a few profiles, and someone new steps into your child&apos;s week. Yet that person will shape how your child feels about a subject, and sometimes about themselves.</p>
            <p>Degrees and years of teaching matter. But they only tell you the surface of what you are choosing. What you are really deciding is who sits beside your child on a hard evening, and whether that hour leaves them calmer or more discouraged. After years of arranging private tutoring in Abu Dhabi for families across the emirate, we have found that the same handful of questions separate a strong match from an expensive mismatch. The ten below help you look past the CV. Some are for the tutor, and some are for you.</p>

            <div className="my-6 rounded-2xl border border-[#0f4a9b]/15 bg-[#f8fafd] p-5 text-center">
              <p className="text-sm font-semibold text-[#0a1f3d] mb-2">Print it and take it with you</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                Download the free Parent Tutor Interview Worksheet (PDF) so you can write down each tutor&apos;s answers during a trial session and compare them side by side.
              </p>
              <a href="/downloads/ustaad-parent-tutor-interview-worksheet.pdf" download="ustaad-parent-tutor-interview-worksheet.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition hover:brightness-110"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                <Download className="h-4 w-4" />
                Download the worksheet (PDF)
              </a>
            </div>

            {/* VISUAL PROCESS DIAGRAM: 4-Stage Tutor Vetting Roadmap */}
            <div className="my-8 rounded-2xl border border-[#0f4a9b]/20 bg-gradient-to-br from-[#f8fafd] to-white p-5 lg:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] text-[10px] font-extrabold uppercase tracking-widest">
                  Visual Roadmap
                </span>
                <span className="text-xs font-bold text-[#0a1f3d]">The 4-Phase Tutor Vetting Process</span>
              </div>
              <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                Follow this structured sequence to select a tutor who matches your child&apos;s curriculum, learning style, and academic goals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Phase 1 */}
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm relative overflow-hidden group hover:border-[#0f4a9b]/40 transition">
                  <div className="w-7 h-7 rounded-lg bg-[#0f4a9b] text-white font-black text-xs grid place-items-center mb-2">
                    01
                  </div>
                  <h4 className="text-xs font-extrabold text-[#0a1f3d] mb-1">Define Real Goal</h4>
                  <p className="text-[11px] text-gray-500 leading-snug">
                    Identify whether your child needs gap repair, exam technique, or stretching.
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-[#0f4a9b]">
                    <span>Step 1 of 4</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm relative overflow-hidden group hover:border-[#0f4a9b]/40 transition">
                  <div className="w-7 h-7 rounded-lg bg-[#0f4a9b] text-white font-black text-xs grid place-items-center mb-2">
                    02
                  </div>
                  <h4 className="text-xs font-extrabold text-[#0a1f3d] mb-1">Diagnostic Check</h4>
                  <p className="text-[11px] text-gray-500 leading-snug">
                    Audit specific topic gaps and past test errors before teaching begins.
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-[#0f4a9b]">
                    <span>Step 2 of 4</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm relative overflow-hidden group hover:border-[#0f4a9b]/40 transition">
                  <div className="w-7 h-7 rounded-lg bg-[#C7A24A] text-white font-black text-xs grid place-items-center mb-2">
                    03
                  </div>
                  <h4 className="text-xs font-extrabold text-[#0a1f3d] mb-1">Board Alignment</h4>
                  <p className="text-[11px] text-gray-500 leading-snug">
                    Verify exact mark scheme mastery (Cambridge, Pearson Edexcel, IB, AP).
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-[#A8892A]">
                    <span>Step 3 of 4</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm relative overflow-hidden group hover:border-[#0f4a9b]/40 transition">
                  <div className="w-7 h-7 rounded-lg bg-[#0a1f3d] text-white font-black text-xs grid place-items-center mb-2">
                    04
                  </div>
                  <h4 className="text-xs font-extrabold text-[#0a1f3d] mb-1">Track &amp; Hand Off</h4>
                  <p className="text-[11px] text-gray-500 leading-snug">
                    Require visible progress notes and build independent study habits.
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-[#0a1f3d]">
                    <span>Step 4 of 4</span>
                    <span>✓</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-lg font-extrabold text-[#0a1f3d] mt-8 mb-3">Quick answers before you read</h2>
            <p className="text-sm text-gray-600 mb-4">Short on time? Here are the ten questions with a one-line answer for each. Tap any question to jump to the full section.</p>
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

            <SectionHeading num="01" id="why-do-i-want-a-tutor">Why do I want a tutor at all?</SectionHeading>
            <p>Before you judge anyone else, get honest about what you want to change. &quot;Better grades&quot; is rarely the full answer.</p>
            <p className="font-semibold text-[#0a1f3d] text-sm">Common reasons parents reach out:</p>
            <BulletList items={[
              'catching up after a tough term',
              'getting ready for IGCSE or A-Level exams',
              'fixing shaky basics and restoring confidence',
              'stretching a bright child who is coasting',
              'forming stronger study habits',
            ]} />
            <p>Each reason needs a different kind of tutor and a different pace. When you name the real goal, you also give yourself a fair way to measure success later. A tutor hired to restore confidence should not be judged only on a mock score three weeks in.</p>
            <ParentTakeaway>Write your one real reason in a single sentence before you contact anyone. It becomes the yardstick for every choice after.</ParentTakeaway>

            <SectionHeading num="02" id="checked-what-child-needs">Has anyone checked what my child actually needs?</SectionHeading>
            <p>A good tutor does not start teaching on day one. They start by finding out where the gaps really are.</p>
            <p>Ask how they will check your child&apos;s level before lessons begin. Good signs:</p>
            <BulletList items={[
              'a short first chat or quiz to spot weak areas',
              'a look at recent tests or exam papers',
              <>curiosity about <em>why</em> a topic feels hard, not just what is on the syllabus</>,
            ]} />
            <p>A child who &quot;hates maths&quot; often has two or three exact gaps, not a general weakness, and naming them changes everything. The warning sign is the opposite: a tutor who launches straight into teaching with no check often spends the first month on things your child already knew.</p>
            <p>If low marks keep coming back even after revision, the real problem is usually an unfixed gap, something we cover in our post on <a href="/blogs/igcse-maths-revision-low-marks" className="text-[#0f4a9b] font-semibold hover:underline">why IGCSE maths revision sometimes fails to lift marks</a>.</p>
            <ParentTakeaway>If a tutor cannot explain how they will find your child&apos;s real gaps, they are guessing, and you are paying for the guess.</ParentTakeaway>

            {/* VISUAL INFOGRAPHIC: Diagnostic vs. Guesswork Framework */}
            <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">
                  Diagnostic Check vs. Guesswork Teaching
                </span>
                <span className="text-[10px] font-bold text-[#0f4a9b] bg-[#0f4a9b]/10 px-2.5 py-0.5 rounded-full">
                  Diagnostic Framework
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Left: Guesswork */}
                <div className="p-3.5 rounded-xl bg-red-50/70 border border-red-200/70">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-red-500 text-white font-bold text-[10px] grid place-items-center">✕</span>
                    <span className="text-xs font-bold text-red-900">Guesswork Approach</span>
                  </div>
                  <ul className="text-[11px] text-red-700 space-y-1.5 leading-relaxed">
                    <li>• Starts teaching Chapter 1 without auditing prior knowledge</li>
                    <li>• Explains topics already understood by the student</li>
                    <li>• Misses underlying foundational gaps from previous years</li>
                    <li>• <strong>Result:</strong> Slow progress and repeated exam mistakes</li>
                  </ul>
                </div>

                {/* Right: Diagnostic */}
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/70">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] grid place-items-center">✓</span>
                    <span className="text-xs font-bold text-emerald-900">Diagnostic Approach</span>
                  </div>
                  <ul className="text-[11px] text-emerald-800 space-y-1.5 leading-relaxed">
                    <li>• Audits exam papers and specific weak topic clusters first</li>
                    <li>• Targets exact conceptual gaps with surgical precision</li>
                    <li>• Verifies understanding through active recall questions</li>
                    <li>• <strong>Result:</strong> Fast confidence recovery and grade jumps</li>
                  </ul>
                </div>
              </div>
            </div>

            <figure className="my-6">
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.08)]">
                <img src="/images/blogs/diagnostic_assessment_sheet.jpg" alt="Academic diagnostic assessment report for IGCSE and A-Level subjects in Abu Dhabi" className="w-full h-auto block" loading="lazy" />
              </div>
              <figcaption className="mt-2 text-center text-xs text-gray-400 italic">Academic Diagnostic Report: Auditing specific topic proficiency and learning gaps before tutoring starts.</figcaption>
            </figure>

            <SectionHeading num="03" id="qualifications-or-teaching">Am I hiring qualifications, or good teaching?</SectionHeading>
            <p>Strong credentials and clear teaching are not the same thing. Some of the most qualified people struggle to explain one idea to a nervous fourteen-year-old.</p>
            <p>In your first talk, listen for how they explain a hard topic:</p>
            <BulletList items={[
              'Do they reach for a simple, everyday example?',
              'Do they slow down or change tack when you look lost?',
              'Do they talk about lesson structure and pace, not just the subject?',
            ]} />
            <p>A first-class degree tells you what someone knows. It does not tell you whether your child will follow them. So try this: ask them to explain a tricky topic from your child&apos;s course in plain words. Their answer tells you more than any certificate.</p>
            <p>A high mark and real understanding are not the same thing either, a gap we unpack in <a href="/blogs/physics-understanding-vs-marks" className="text-[#0f4a9b] font-semibold hover:underline">why some students understand physics but still lose marks</a>.</p>
            <ParentTakeaway>Hire for the ability to teach clearly, not only for the ability to know deeply. Your child needs the first one far more.</ParentTakeaway>

            {/* VISUAL INFOGRAPHIC: Qualifications vs Pedagogical Skill Matrix */}
            <div className="my-6 rounded-2xl border border-[#C7A24A]/30 bg-[#fdf8ee] p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C7A24A]" />
                <h4 className="text-xs font-black text-[#0a1f3d] uppercase tracking-wider">
                  The Pedagogy Matrix: Degrees vs. Teaching Delivery
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Subject Expertise</span>
                  <p className="font-extrabold text-[#0a1f3d] mb-1">Mastery of Subject Content</p>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    Knows every formula, equation, and academic term in the syllabus. Necessary foundation, but insufficient on its own.
                  </p>
                </div>

                <div className="bg-[#0f4a9b]/5 p-3.5 rounded-xl border border-[#0f4a9b]/30 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f4a9b] block mb-1">Pedagogical Delivery ★</span>
                  <p className="font-extrabold text-[#0f4a9b] mb-1">Explanatory Skill &amp; Adaptability</p>
                  <p className="text-gray-600 text-[11px] leading-relaxed">
                    Simplifies complex concepts, adjusts pacing live, listens to student cues, and builds confidence under pressure.
                  </p>
                </div>
              </div>
            </div>

            <SectionHeading num="04" id="how-will-i-know-working">How will I know the tutoring is working?</SectionHeading>
            <p>Good tutoring gives you proof you can see, not just reassurance you have to trust.</p>
            <p>Ask how progress will be tracked and shared. Reasonable answers include:</p>
            <BulletList items={[
              'short notes after each session',
              'regular check-ins against the goals you agreed',
              'marked past papers',
              'a simple record of topics covered and how confident your child feels',
            ]} />
            <p>&quot;He&apos;s doing well&quot; is nice to hear and hard to act on, so ask for something you can actually look at. Agree at the start what a good month looks like, so you and the tutor are measuring the same thing.</p>
            <p>It also helps to read the signals your child&apos;s school already gives you. Our guide to <a href="/blogs/read-uae-school-report-card" className="text-[#0f4a9b] font-semibold hover:underline">making sense of your child&apos;s report card</a> shows what to look for between tutoring updates.</p>
            <ParentTakeaway>Ask for evidence, not adjectives. A tutor who is sure of their method will happily show you the progress.</ParentTakeaway>

            {/* VISUAL DASHBOARD: Digital Progress Tracking */}
            <figure className="my-6">
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.08)]">
                <img src="/images/blogs/progress_tracking_dashboard.jpg" alt="Interactive student progress tracking dashboard showing subject trajectory and tutor feedback" className="w-full h-auto block" loading="lazy" />
              </div>
              <figcaption className="mt-2 text-center text-xs text-gray-400 italic">Digital Parent Progress Dashboard: Track academic trajectory, mark gains, and weekly tutor notes.</figcaption>
            </figure>

            <SectionHeading num="05" id="if-child-still-does-not-get-it">What happens if my child still does not get it?</SectionHeading>
            <p>Every child hits a wall at some point. What matters is what the tutor does next.</p>
            <p>Look for flexibility, not force:</p>
            <BulletList items={[
              'changes the method instead of repeating the same one louder or slower',
              'goes back to check for an earlier gap',
              'tries a picture, a story, or a real-life example',
              'stays patient and never blames the child',
            ]} />
            <p>Steady patience under pressure is one of the truest signs of a good teacher, and it almost never shows up on a profile.</p>
            <ParentTakeaway>Ask directly how they handle a topic that is not landing. The answer tells you if you have a teacher or just a presenter.</ParentTakeaway>

            <SectionHeading num="06" id="knows-child-curriculum">Does this tutor really know my child&apos;s curriculum?</SectionHeading>
            <p>Knowing a subject and knowing an exam board are two different things, and the gap between them costs marks.</p>
            <p>The same topic is tested very differently across IGCSE, IB, GCSE, and the American curriculum. So ask plainly:</p>
            <BulletList items={[
              'Have you taught my child\'s exact board, whether Cambridge, Pearson Edexcel, IB, or AP?',
              'How recently?',
              'Do you know its mark scheme, command words, and paper layout?',
            ]} />
            <p>This fluency matters whether you are looking for a <a href="/maths-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">maths tutor</a>, a science tutor, an <a href="/ib-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">IB tutor</a>, or an <a href="/a-level-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">A-Level tutor in Abu Dhabi</a>, and it counts as much for GCSE and IGCSE students as it does for those sitting their final A-Level papers. A good sign is a tutor who asks which board and tier your child is on before you even mention it.</p>
            <ParentTakeaway>Match the tutor to the exam board, not just the subject. That fluency is where marks are won.</ParentTakeaway>

            {/* VISUAL DIAGRAM: Curriculum Board Alignment Infographic */}
            <figure className="my-6">
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.08)]">
                <img src="/images/blogs/curriculum_board_infographic.jpg" alt="Curriculum board alignment showing Cambridge IGCSE, Pearson Edexcel, IB Diploma, and American AP materials" className="w-full h-auto block" loading="lazy" />
              </div>
              <figcaption className="mt-2 text-center text-xs text-gray-400 italic">Exam Board Alignment: Cambridge IGCSE, Pearson Edexcel, IB Diploma, and AP require board-specific mark scheme mastery.</figcaption>
            </figure>

            <SectionHeading num="07" id="independence-or-dependence">Will this build independence or dependence?</SectionHeading>
            <p>The goal of good tutoring is, in a way, to make itself unnecessary.</p>
            <p>Ask how the tutor plans to hand work back to your child over time:</p>
            <BulletList items={[
              'teaches a method, then lets the child try it alone',
              'corrects gently instead of rescuing instantly',
              'aims for your child to need them less, not more',
            ]} />
            <p>Watch for the opposite. If your child cannot start homework without the tutor beside them, that looks like progress but quietly weakens it. Real learning has to survive on its own once the session ends, which is why we wrote about <a href="/blogs/why-chemistry-fades-from-memory" className="text-[#0f4a9b] font-semibold hover:underline">why chemistry so often fades from memory and how to make it stick</a>.</p>
            <ParentTakeaway>The best tutors work toward their own redundancy. Ask how independence is part of the plan.</ParentTakeaway>

            {/* VISUAL CALLOUT GRAPHIC: Coaching vs Spoonfeeding */}
            <figure className="my-6">
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.08)]">
                <img src="/images/blogs/callout-coaching-vs-spoonfeeding.webp" alt="Visual comparison showing coaching for independence versus spoonfeeding dependence" className="w-full h-auto block" loading="lazy" />
              </div>
              <figcaption className="mt-2 text-center text-xs text-gray-400 italic">Coaching vs. Spoonfeeding: Great tutoring builds self-sustaining confidence.</figcaption>
            </figure>

            <SectionHeading num="08" id="parent-job">What is my job as a parent?</SectionHeading>
            <p>Tutoring works best as a partnership, and your part is smaller and steadier than many parents expect.</p>
            <p>You do not need to sit in on every lesson or become a second teacher. What helps most:</p>
            <BulletList items={[
              'protect a calm, regular time and place to study',
              'keep expectations realistic',
              'share what you notice at home',
            ]} />
            <p>Ask a tutor how and how often they like to update parents. Their answer tells you whether they see you as a partner or an interruption. Hovering rarely helps; a set time, a quiet space, and honest feedback help far more.</p>
            <ParentTakeaway>Your job is to support the conditions, not to run the lessons. Agree early on how you and the tutor will stay in touch.</ParentTakeaway>

            <SectionHeading num="09" id="promises-to-pause">Which promises should make me pause?</SectionHeading>
            <p>In a busy market, some offers are built to calm your worry rather than help your child.</p>
            <p>Be careful with:</p>
            <BulletList items={[
              'guaranteed grades',
              'promises of instant improvement',
              'the claim that one method fits every student',
            ]} />
            <p>Learning does not move in a straight line, and any honest tutor will say so. Confidence is welcome; certainty about a future exam result is not something anyone can responsibly sell. The tutors worth trusting tend to promise less and then show you the work.</p>
            <p>And if your child is anxious rather than behind, the fix is rarely a bigger promise. Our post on <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-semibold hover:underline">calming exam panic before UAE exams</a> may help more than any guarantee.</p>
            <ParentTakeaway>Be wary of guarantees. Honest tutors offer effort and method, never a fixed result on a paper they have not seen.</ParentTakeaway>

            <SectionHeading num="10" id="trust-this-person">Would I trust this person with my child?</SectionHeading>
            <p>After the facts and the logistics, one quieter question remains, and it is often the most reliable.</p>
            <p>Picture the tutor sitting with your child on a hard day, and ask yourself:</p>
            <BulletList items={[
              'Do I sense warmth, respect, and calm?',
              'Does my child seem at ease with them?',
            ]} />
            <p>Trust is not a soft extra here. Children learn far more readily from someone they feel safe with, and you usually sense that ease within one conversation. This is exactly what a free trial session is for: it lets you and your child feel the fit before you commit to anything.</p>
            <ParentTakeaway>Trust your impression of the person, not only their paperwork. If the ease is not there, keep looking.</ParentTakeaway>

            <SectionHeading id="good-tutor-vs-red-flag">A good tutor vs a red flag, at a glance</SectionHeading>
            <p>If you remember nothing else, remember this contrast. It sums up what the ten questions are really looking for.</p>
            
            {/* VISUAL INFOGRAPHIC: Traffic Light Vetting System */}
            <div className="my-6 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md">
              <div className="bg-[#0a1f3d] px-5 py-3 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C7A24A] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-white ml-2">
                    Tutor Selection Traffic-Light System
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#C7A24A] uppercase font-bold">Parent Decision Tool</span>
              </div>

              <div className="p-4 space-y-3">
                {COMPARISON_ROWS.map((row, i) => (
                  <div key={i} className="grid sm:grid-cols-2 gap-2 text-xs">
                    {/* Green Flag */}
                    <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 flex items-start gap-2.5">
                      <span className="shrink-0 w-4 h-4 rounded-full bg-emerald-600 text-white font-bold text-[9px] grid place-items-center mt-0.5">
                        ✓
                      </span>
                      <div>
                        <span className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wide block mb-0.5">
                          Green Flag (High Trust)
                        </span>
                        <p className="text-emerald-950 font-medium leading-relaxed">{row.good}</p>
                      </div>
                    </div>

                    {/* Red Flag */}
                    <div className="p-3 rounded-xl bg-red-50/80 border border-red-200/80 flex items-start gap-2.5">
                      <span className="shrink-0 w-4 h-4 rounded-full bg-red-500 text-white font-bold text-[9px] grid place-items-center mt-0.5">
                        ✕
                      </span>
                      <div>
                        <span className="text-[10px] font-extrabold text-red-800 uppercase tracking-wide block mb-0.5">
                          Red Flag (Proceed with Caution)
                        </span>
                        <p className="text-red-950 font-medium leading-relaxed">{row.flag}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SectionHeading id="bringing-questions-together">Bringing the ten questions together</SectionHeading>
            <p>Notice that only a few of these questions are about subject knowledge. Most are about finding the gap, explaining it clearly, being honest, growing independence, and trust. That is not an accident. The tutors who change a child&apos;s year are rarely the ones with the longest list of degrees. They are the ones who find the real problem, explain it simply, show you the progress, and then gradually step back.</p>
            <p>Take these questions into your next conversation and let the answers do the work. A careful choice, made slowly, tends to outlast a quick one made under pressure. Your child does not need the most impressive tutor available. They need the right one, chosen with care. If you are also supporting revision at home, our <a href="/blogs/gcse-revision-tips-uae-parents" className="text-[#0f4a9b] font-semibold hover:underline">GCSE and IGCSE revision tips for UAE parents</a> may help you spot whether tutoring is filling a gap or compensating for weak study habits.</p>

            {/* VISUAL WORKSHEET MOCKUP PREVIEW */}
            <div className="my-6 rounded-2xl border-2 border-dashed border-[#C7A24A]/50 bg-gradient-to-br from-[#fdf8ee] to-white p-5 lg:p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-[#C7A24A]/20">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C7A24A]/20 text-[#A8892A] text-[10px] font-extrabold uppercase tracking-widest block mb-1">
                    Free Printable Resource
                  </span>
                  <h4 className="text-sm font-black text-[#0a1f3d]">Parent Tutor Interview Worksheet Preview</h4>
                </div>
                <a href="/downloads/ustaad-parent-tutor-interview-worksheet.pdf" download="ustaad-parent-tutor-interview-worksheet.pdf" target="_blank" rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md transition hover:brightness-110"
                  style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                  <Download className="h-3.5 w-3.5" />
                  Download PDF
                </a>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm mb-4">
                <img src="/images/blogs/parent_interview_worksheet.jpg" alt="Printable Parent Tutor Interview Worksheet with checklist and rating fields" className="w-full h-auto block" loading="lazy" />
              </div>

              {/* Worksheet Form Field Layout Mockup */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 text-xs shadow-inner">
                <div className="grid grid-cols-3 gap-2 pb-2 border-b border-slate-100 font-extrabold text-[#0a1f3d] text-[11px]">
                  <div>Vetting Criteria</div>
                  <div>Tutor Candidate A</div>
                  <div>Tutor Candidate B</div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px] text-gray-600 border-b border-slate-100 pb-2">
                  <div className="font-semibold text-[#0a1f3d]">1. Diagnostic Gap Audit</div>
                  <div className="bg-slate-50 p-2 rounded text-emerald-700 font-medium">✓ Conducts prior gap quiz</div>
                  <div className="bg-slate-50 p-2 rounded text-red-600 font-medium">✕ Starts Chapter 1 direct</div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px] text-gray-600 border-b border-slate-100 pb-2">
                  <div className="font-semibold text-[#0a1f3d]">2. Board Mark Scheme</div>
                  <div className="bg-slate-50 p-2 rounded text-emerald-700 font-medium">✓ Cambridge 0625 Specialist</div>
                  <div className="bg-slate-50 p-2 rounded text-amber-700 font-medium">△ Generic Physics Tutor</div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px] text-gray-600">
                  <div className="font-semibold text-[#0a1f3d]">3. Progress Tracking</div>
                  <div className="bg-slate-50 p-2 rounded text-emerald-700 font-medium">✓ Weekly written log</div>
                  <div className="bg-slate-50 p-2 rounded text-red-600 font-medium">✕ Verbal reassurance only</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 mb-8 rounded-2xl p-6 lg:p-8 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <h3 className="text-lg lg:text-xl font-extrabold text-white mb-2">See the fit for yourself</h3>
            <p className="text-white/75 mb-5 max-w-lg mx-auto text-sm leading-relaxed">
              You do not have to judge a tutor from a profile alone. Ustaad matches your child with an experienced, vetted private tutor in Abu Dhabi who fits their curriculum, their pace, and their personality, whether you are in Khalifa City, Al Reem Island, Saadiyat Island, or Yas Island, or learning online across the UAE. Then we give you a free trial session to test the fit.
            </p>
            <p className="text-white/70 mb-5 max-w-lg mx-auto text-xs leading-relaxed">
              Bring these ten questions to that first lesson. If the match is right, you will feel it. If it is not, you have lost nothing but an hour, and learned exactly what to ask next time.
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

          <div className="mt-7 grid md:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[#0f4a9b]/10 bg-gradient-to-br from-white to-[#f4f7fd] p-4">
              <span className="inline-block mb-2 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#0f4a9b] border border-[#0f4a9b]/15 bg-[#0f4a9b]/5">About the Author</span>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1">
                <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] hover:underline">Nimra Shahzada</a>
              </p>
              <p className="text-[10px] text-[#0f4a9b] font-semibold mb-2">Education Counsellor &amp; Student Support Specialist | Ustaad UAE</p>
              <p className="text-xs text-gray-500 leading-relaxed">Nimra writes our parent-facing guides on learning and the psychology of studying, turning the questions UAE families ask at home into practical steps they can follow.</p>
            </div>
            <div className="rounded-2xl border border-[#0f4a9b]/10 bg-gradient-to-br from-white to-[#f8fafd] p-4">
              <span className="inline-block mb-2 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#0f4a9b] border border-[#0f4a9b]/15 bg-[#0f4a9b]/5">Reviewed By</span>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1">
                <a href="/authors/nida-iqbal" className="text-[#0f4a9b] hover:underline">Nida Iqbal</a>
              </p>
              <p className="text-[10px] text-[#0f4a9b] font-semibold mb-2">MPhil in Education Leadership and Management · Ustaad Editorial</p>
              <p className="text-xs text-gray-500 leading-relaxed">Nida reviews Ustaad&apos;s academic content for accuracy and parent relevance, ensuring guidance reflects sound classroom practice for UAE families.</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-[#f8fafd] border border-slate-100 text-xs text-gray-600 leading-relaxed text-center">
            <span className="font-extrabold text-[#0a1f3d]">About the writers: </span>
            This guide comes from the people who teach and counsel Ustaad families every week, not an anonymous marketing desk. You can see who reviews Ustaad&apos;s academic content and how we keep it trustworthy on our <a href="/editorial" className="text-[#0f4a9b] font-semibold underline">editorial page</a>.
          </div>

          <div className="mt-5 flex flex-wrap gap-2 mb-10">
            {BLOG.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-[#0a1f3d]">{tag}</span>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
}
