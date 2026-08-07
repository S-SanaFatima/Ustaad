import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle } from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'Early Signs Your Child Needs Help in Chemistry | Ustaad',
  titleLine1: 'Early Signs Your Child Needs Help in Chemistry',
  titleLine2: '',
  slug: 'early-signs-chemistry-help-uae',
  description: 'Six early signs your child is struggling in IGCSE or A-Level chemistry, well before the report card drops. Calm guidance from a UAE education counsellor.',
  heroImage: '/images/blogs/chemistry_tutor_session.jpg',
  heroAlt: 'Ustaad private tutor working one-to-one with a student in the UAE',
  heroCaption: 'The drop is almost never the first sign. It is the last one. The earlier signs appear at home, in the notebook, and in one honest conversation.',
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
  author: 'Nimra Shahzada',
  reviewer: 'Nida Iqbal',
  readTime: '8 min read',
  tags: ['Chemistry', 'IGCSE', 'A-Level', 'UAE Parents', 'Early Warning Signs', 'Parent Guidance'],
};

const FAQS = [
  {
    q: 'How can I tell if my child is struggling in chemistry before the report card shows it?',
    a: 'Look for behavioural signs at home: they stop explaining what they studied, their notebook stops filling by mid-term, they delay practical write-ups more than tests, and homework takes longer without marks improving. Two or three of these signs together, present for more than three weeks, usually means a shortfall is already forming under the surface.',
  },
  {
    q: 'My child says chemistry is fine but their notebook seems empty. What does that mean?',
    a: 'A thinning chemistry notebook mid-term is one of the most reliable early signals. During a healthy term, chemistry notebooks fill fast with equations, diagrams and mark scheme phrasing. When a student stops writing, it usually means the class is moving faster than they can keep up, and they are trying to appear on top of the subject rather than admit the gap.',
  },
  {
    q: 'When is the right time to bring in chemistry support?',
    a: 'When two or more warning signs stay present for longer than three weeks, and your child is heading into IGCSE 0620, A-Level, IB Chemistry or AP Chemistry, a single diagnostic session is worth the time. Not a full course yet. A specialist can locate whether the shortfall sits in bonding, calculations or exam technique, and give an honest answer on whether ongoing support is needed.',
  },
  {
    q: 'Is a small drop in chemistry marks the same as a small drop in maths or English?',
    a: 'No. A drop in maths or English usually reflects last term’s topic. A drop in chemistry often reflects a gap from two or three terms earlier that finally showed up under exam-style questions. That is why waiting to see if it resolves rarely works in chemistry, and why the small drop deserves attention now rather than at the end of the year.',
  },
  {
    q: 'My child gets top marks in short tests but drops in the mock. Why?',
    a: 'Short tests reward recognition. Mocks reward independent application. In chemistry especially, students can recognise correct answers on a short quiz for weeks before they can produce them on a full paper. The drop in the mock is often the first time the underlying weakness becomes visible on paper.',
  },
];

const TOC_ITEMS = [
  { label: 'Why Chemistry Behaves Differently From Other Subjects', id: 'why-chemistry-behaves-differently-from-other-subjects' },
  { label: 'The Signs That Appear Long Before the Grade Drops', id: 'the-signs-that-appear-long-before-the-grade-drops' },
  { label: 'What Parents Often Miss About Chemistry Transitions', id: 'what-parents-often-miss-about-chemistry-transitions' },
  { label: 'What Happens When Parents Wait for the Report Card', id: 'what-happens-when-parents-wait-for-the-report-card' },
  { label: 'What Parents Can Do This Week', id: 'what-parents-can-do-this-week' },
  { label: 'When to Bring in Support', id: 'when-to-bring-in-support' },
  { label: 'A Note From an Education Counsellor', id: 'a-note-from-an-education-counsellor' },
  { label: 'Frequently Asked Questions', id: 'frequently-asked-questions' },
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
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0f4a9b]">What This Article Covers</span>
        </div>
        <span className="lg:hidden text-[#0f4a9b]">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <div className={`lg:block ${open ? 'block' : 'hidden'}`}>
        <div className="px-5 pb-3.5 space-y-0.5">
          {TOC_ITEMS.map((item, i) => (
            <a key={i} href={`#${item.id}`}
              onClick={e => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              className="flex items-center gap-2.5 group py-0.5">
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
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }} className="ml-[48px]">
                  <div className="flex items-start gap-2.5 rounded-2xl border p-3.5"
                    style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.12)', boxShadow: '0 3px 12px rgba(15,74,155,0.05)' }} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="flex-1 text-gray-600 text-[13px] leading-relaxed text-justify" itemProp="text">{faq.a}</p>
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

export default function EarlySignsChemistryBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <Layout>
      <SEOHead
        title="Early Signs Your Child Needs Help in Chemistry | Ustaad"
        description={BLOG.description}
        canonical={canonical}
        ogImage={BLOG.heroImage}
        author="Nimra Shahzada"
        placename="United Arab Emirates"
        ogType="article"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
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
              jobTitle: 'Education Counsellor & Student Support Specialist',
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
              description: 'Bachelor of Psychology, works with UAE families on early academic support',
              affiliation: 'Ustaad UAE'
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

      {/* Breadcrumb */}
      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1"><Home className="h-3 w-3" /> Home</a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[200px]">Chemistry Insights</span>
        </div>
      </div>

      {/* Hero header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Category tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">USTAAD UAE · CHEMISTRY & PARENT SUPPORT INSIGHTS</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              {BLOG.titleLine2 && <span className="italic" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>}
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-justify">{BLOG.description}</p>

            {/* Meta */}
            <div className="flex flex-wrap items-start gap-y-1 gap-x-0 mb-1 text-xs text-gray-500">
              <span className="flex items-center gap-1 mr-3"><User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />Written by: <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] font-semibold underline">{BLOG.author}</a> | Education Counsellor & Student Support Specialist | Ustaad UAE</span>
            </div>
            <div className="flex flex-wrap items-start gap-y-1 gap-x-0 mb-1 text-xs text-gray-500">
              <span className="flex items-center gap-1 mr-3"><User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />Reviewed by: <a href="/authors/nida-iqbal" className="text-[#0f4a9b] font-semibold underline">{BLOG.reviewer}</a> | MPhil in Education Leadership and Management</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-4 mt-2 text-xs text-gray-400">
              <time dateTime={BLOG.dateModified} className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-[#C7A24A]" />Last reviewed: July 2026 | Ustaad UAE Editorial Team
              </time>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-[#C7A24A]" />{BLOG.readTime}</span>
              <SocialShare url={shareUrl} title={BLOG.title} />
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.figure initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-0">
            <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_40px_rgba(15,74,155,0.12)]">
              <img src={BLOG.heroImage} alt={BLOG.heroAlt} fetchPriority="high" className="w-full h-auto block" />
            </div>
            <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">{BLOG.heroCaption}</figcaption>
          </motion.figure>

          {/* TOC */}
          <TOC open={tocOpen} setOpen={setTocOpen} />
        </div>
      </section>

      {/* Article body */}
      <article className="pb-4 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-sm lg:text-[15px] leading-[1.8] [&_p]:text-justify [&_p]:mb-3">

            {/* Opening */}
            <p>In my counselling work with UAE families, the chemistry conversation almost always begins after the report card. A parent shows me a drop from an A to a B, and asks what happened. The report offers a polite guess. The child in the next room knows the real story but cannot describe it.</p>
            <p>The drop is almost never the first sign. It is the last one. In chemistry, the earlier signs appear at home, in the notebook, and in one honest conversation. Parents just have to know where to look.</p>

            {/* 01 */}
            <SectionHeading num="01" id="why-chemistry-behaves-differently-from-other-subjects">Why Chemistry Behaves Differently From Other Subjects</SectionHeading>
            <p>Chemistry hides its problems in a way other subjects do not. In maths, a weak topic shows up in the next test within a week. In chemistry, students can copy definitions and pass a short quiz without understanding the topic underneath. The mark stays fine. The gap keeps growing.</p>
            <p>This is because chemistry topics sit on each other. If a Year 9 student never fully grasps ionic bonding, the mole feels harder in Year 10. If the mole is unclear, stoichiometry breaks. By Year 12, organic mechanisms feel unreachable, and the student cannot explain why.</p>
            <p>The good news: fixing a bonding gap in Year 9 takes two sessions. Fixing the same gap in Year 12, once it has spread through five other topics, takes half a term. That is why chemistry rewards early attention more than almost any other subject at <a href="/igcse" className="text-[#0f4a9b] font-semibold hover:underline">IGCSE</a> and <a href="/a-level" className="text-[#0f4a9b] font-semibold hover:underline">A-Level</a>.</p>
            <p>For the student-side view of how chemistry knowledge fades from memory once it has been learned, see <a href="/blogs/why-chemistry-fades-from-memory" className="text-[#0f4a9b] font-semibold hover:underline">Why Chemistry Fades From Memory</a>. That article covers what happens inside a student’s head. This one covers what parents can see from the outside.</p>

            {/* 02 */}
            <SectionHeading num="02" id="the-signs-that-appear-long-before-the-grade-drops">The Signs That Appear Long Before the Grade Drops</SectionHeading>
            <p>Six specific patterns show up in students who are about to struggle. None of them involve a low mark. All of them are visible at home, in the notebook, or in one honest conversation.</p>
            
            <h3 className="text-lg font-bold text-[#0a1f3d] mt-6 mb-2">They Stopped Explaining What They Studied</h3>
            <p>At the start of the year, most students will tell you what they did in class if you ask. When chemistry becomes uncomfortable, that stops. They say “we did chapter 4” without any content. If your child used to describe experiments or draw diagrams at the dining table and no longer does, the subject has quietly become something they want to avoid discussing.</p>

            <h3 className="text-lg font-bold text-[#0a1f3d] mt-6 mb-2">The Notebook Is Neat but Thin</h3>
            <p>Chemistry notebooks fill up quickly during a healthy term. Equations. Diagrams. Practical observations. Mark scheme phrasing copied from the board. When a student is falling behind, the notebook stays clean but stops growing. Pages have headings and dates but only two or three lines underneath. The neatness is the tell. It looks like the notebook of a student trying to appear on top of the subject rather than one actually working through it.</p>

            <InlineImage
              src="/images/blogs/chemistry_notebook_thin.jpg"
              alt="Close up of a very neat but almost completely empty chemistry notebook page"
              caption="When a student is falling behind, the notebook often stays neat but stops growing. The class moves faster than they can keep up."
            />

            <h3 className="text-lg font-bold text-[#0a1f3d] mt-6 mb-2">They Avoid Practical Write-Ups More Than Tests</h3>
            <p>I once spent an afternoon with a Year 11 chemistry teacher in Abu Dhabi, going through her students’ notebooks with her. She showed me the pattern she watches for. The students most at risk of a mock-exam drop were not the ones who missed homework. They were the ones who left practical write-ups until the last night. When a student understands a topic, the write-up is easy: describe what they did, what they observed, what it means. When they do not understand it, the write-up exposes it directly, because there is no formula to hide behind. If your child is finishing tests on time but delaying practical reports, that is the earlier signal.</p>

            <h3 className="text-lg font-bold text-[#0a1f3d] mt-6 mb-2">Textbook Terminology Sounds Foreign at Home</h3>
            <p>Chemistry has words that should feel familiar by the middle of Year 10. Ask your child what a mole is, without letting them open a book. If they explain it in their own words, the foundation is holding. If they answer with a copied definition, or say “it’s just a number teachers use”, the gap has already started. This check takes two minutes and works in any language.</p>

            <h3 className="text-lg font-bold text-[#0a1f3d] mt-6 mb-2">They Confuse Equations That Look Similar</h3>
            <p>There is a specific pattern where students mix up equations that share symbols. Rate equals concentration over time gets confused with concentration equals moles over volume. Ionic equations get written the same way as full equations because the student cannot see why anything should be cancelled. This is not carelessness. It is a sign that the underlying concept was never fully separated from the surface arithmetic. Teachers see this daily, and it is one of the strongest predictors of a mid-term drop.</p>

            <h3 className="text-lg font-bold text-[#0a1f3d] mt-6 mb-2">Homework Takes Longer Without Getting Better</h3>
            <p>A Year 10 student sat opposite me last term. His parents had told me he was studying chemistry for over an hour every evening but his marks had dropped from a B to a D. I asked him what he actually did in that hour. He told me: reread the chapter, look at the equations, ask a friend, redo one question, close the book. That was the whole hour. If chemistry homework used to take forty minutes and now takes ninety, but marks are the same or slightly worse, the extra time is being spent on guesswork. This is often the sign parents notice first, because it is measurable at the kitchen table.</p>

            <InlineImage
              src="/images/blogs/chemistry_homework_late.jpg"
              alt="Frustrated student studying chemistry late at night"
              caption="If homework takes twice as long but marks remain the same, the extra time is often being spent on guesswork rather than productive learning."
            />

            {/* 03 */}
            <SectionHeading num="03" id="what-parents-often-miss-about-chemistry-transitions">What Parents Often Miss About Chemistry Transitions</SectionHeading>
            <p>Three moments in a UAE student’s school path are riskier than the rest, and most families do not see them as transitions until after they have caused a problem.</p>
            <p>The first is the shift from Year 9 to Year 10. In Year 9, chemistry is more descriptive and forgiving. In Year 10, Cambridge IGCSE 0620 and Edexcel IGCSE 4CH1 introduce calculation-heavy topics quickly. A student who was comfortable last year can look confused within six weeks without any warning from the school.</p>
            <p>The second is the middle of Year 11, when past paper practice replaces new content. Weaknesses that were carried quietly through the syllabus become visible under exam-style questions. Parents interpret the sudden struggle as exam pressure. It is usually the accumulation of small gaps that were never addressed. For the emotional side of this pattern, our earlier piece <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-semibold hover:underline">What UAE Parents Miss About Exam Panic</a> explains how mock-season stress often traces back to earlier terms.</p>
            <p>The third is IGCSE to A-Level. A-Level chemistry expects fluent handling of concepts that were only introduced at IGCSE. Students who scraped a grade 7 or an A at IGCSE by memorising can find A-Level unreachable within the first term. Many families realise this only after the first internal exam, when the fix is far more expensive in time.</p>

            {/* 04 */}
            <SectionHeading num="04" id="what-happens-when-parents-wait-for-the-report-card">What Happens When Parents Wait for the Report Card</SectionHeading>
            <p>By the time a report shows a drop, roughly four to eight weeks of teaching have already moved on from the topic that caused it. The student is now trying to learn new material on top of the gap. Every fresh topic makes the gap harder to isolate.</p>
            <p>I have sat with families whose child was fine at Year 10 mocks and struggling by Year 11 mocks. In almost every case, the parents had noticed one of the six signs around week five or six of the previous term and waited to see if it resolved. It rarely does in chemistry.</p>
            <p>This is not about panicking at the first missed homework. It is about noticing when two or three signs appear together and taking a short, low-effort action while the gap is still small.</p>

            {/* 05 */}
            <SectionHeading num="05" id="what-parents-can-do-this-week">What Parents Can Do This Week</SectionHeading>
            <p>The most useful checks take under fifteen minutes and give parents a clearer picture than any report card.</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Ask a specific question, not a general one. “How is chemistry going?” almost always returns “fine”. “Can you explain what the mole is, without opening the book?” returns real information within thirty seconds.</li>
              <li>Look at the last practical write-up rather than the last test. The write-up shows whether they understood what they were doing. The test shows only whether they could recall the answer.</li>
              <li>Give them one past paper question from the current topic and watch how they start. Confident students read the question once and begin. Struggling students reread, flip through notes, or ask which formula to use. The first thirty seconds tell you almost everything.</li>
              <li>Check the notebook every three or four weeks. Not to inspect, but to see whether it is filling in. A thinning notebook in the middle of a term is almost always a signal of a topic that has become uncomfortable.</li>
            </ul>
            <p>None of this requires a chemistry background. It requires paying attention to the shape of your child’s work, not only the numbers on the report.</p>

            {/* 06 */}
            <SectionHeading num="06" id="when-to-bring-in-support">When to Bring in Support</SectionHeading>
            <p>If two or more of the six signs are present for longer than three weeks, and your child is heading into IGCSE 0620, A-Level, IB Chemistry, or AP Chemistry, that is the point where a diagnostic conversation is useful. Not a full course. A single session with someone who can identify whether the gap is in bonding, calculations, or exam technique.</p>
            <p>Early support works because the fix is usually small at that stage. Waiting turns a small fix into a term-long rebuild.</p>
            <p>At Ustaad, families in Abu Dhabi and Dubai often reach out at this stage precisely because their child has not dropped yet. That is the right window. A free trial session lets a specialist tutor identify the gap in one sitting and tell the parent honestly whether ongoing support is needed. Explore <a href="/chemistry" className="text-[#0f4a9b] font-semibold hover:underline">chemistry tutoring at Ustaad</a> or, if you are in Abu Dhabi, <a href="/chemistry-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">chemistry tutor Abu Dhabi</a> for the local option.</p>

            {/* 07 */}
            <SectionHeading num="07" id="a-note-from-an-education-counsellor">A Note From an Education Counsellor</SectionHeading>
            <p>I meet many parents who feel guilty for not noticing sooner. There is no reason to. Chemistry is hard to read from the outside, and schools rarely flag a student until the grade actually falls. The most useful thing a parent can do is stop waiting for the report card and read the smaller signals.</p>
            <p>None of this requires being a chemistry expert. It requires knowing where to look, and acting when two signals appear together. That is what keeps an early two-session fix small, rather than letting it grow into a term-long rescue project by Year 12.</p>
          </div>

          {/* FAQ */}
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

          {/* Share bottom */}
          <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col items-center gap-3">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Found this helpful? Share it</p>
            <SocialShare url={shareUrl} title={BLOG.title} center />
          </div>

          {/* Author & Reviewer */}
          <div className="mt-7 grid md:grid-cols-2 gap-3">
            <div className="relative rounded-2xl border border-[#0f4a9b]/10 bg-gradient-to-br from-white to-[#f4f7fd] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#0f4a9b] border border-[#0f4a9b]/15 bg-[#0f4a9b]/5">About the Author</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-28 mt-4">Nimra Shahzada | Education Counsellor & Student Support Specialist | Ustaad UAE</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nimra Shahzada holds a Bachelor’s degree in Psychology and works as an Education Counsellor with children across different school settings and age groups. Her work focuses on student wellbeing, academic confidence, and early-stage learning support. She helps families notice the small routine shifts that appear before performance drops.</p>
            </div>
            <div className="relative rounded-2xl border border-[#C7A24A]/15 bg-gradient-to-br from-white to-[#fdf9f0] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6">Reviewed By</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-24 mt-4">Nida Iqbal | MPhil in Education Leadership and Management</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nida Iqbal holds an MPhil in Education Leadership and Management. She reviewed this article for educational accuracy and parent relevance, ensuring the guidance reflects sound classroom practice for UAE families navigating early academic warning signs.</p>
            </div>
          </div>

          {/* Editorial block */}
          <div className="mt-6 p-4 rounded-xl bg-[#f8fafd] border border-slate-100 text-xs text-gray-600 leading-relaxed text-center">
            <span className="font-extrabold text-[#0a1f3d]">Meet the Writers Behind Ustaad UAE: </span>
            Every article on Ustaad is written or reviewed by a teacher, academic mentor or subject specialist working with students in the UAE. Visit our <a href="/editorial" className="text-[#0f4a9b] font-semibold underline">editorial page</a> to see the profiles of the people behind each piece.
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {BLOG.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-[#0a1f3d]">{tag}</span>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 mb-12 rounded-2xl p-6 lg:p-8 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <h3 className="text-lg lg:text-xl font-extrabold text-white mb-2">Noticing signs but not sure what they mean?</h3>
            <p className="text-white/75 mb-5 max-w-lg mx-auto text-sm">
              Sometimes the challenge is not the subject, it is knowing what a small pattern change actually means. A single diagnostic session with a specialist chemistry tutor can identify whether the gap is worth acting on now, or whether it will resolve on its own.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="/contact#form"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white hover:brightness-110 transition text-sm sm:w-auto"
                style={{ background: 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)' }}>
                Speak to an Ustaad Chemistry Mentor →
              </a>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
