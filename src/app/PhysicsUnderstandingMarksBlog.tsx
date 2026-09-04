import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle } from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'Why Physics Understanding Does Not Mean High Marks | Ustaad',
  titleLine1: 'Your Child Understands Physics.',
  titleLine2: 'So Why Are the Marks Still Low?',
  slug: 'physics-understanding-vs-marks',
  description: 'Ustaad\'s content team explores the gap between comprehension and exam performance in Physics, and what parents can do when their child clearly understands but still scores poorly.',
  heroImage: '/images/blogs/uae-physics-student-understanding-vs-marks.webp',
  heroAlt: 'UAE physics student at home who understands the material but still receives low exam marks',
  heroCaption: 'Understanding a chapter at home does not always translate to the exam paper. Learning and performance are two different processes.',
  datePublished: '2026-07-07',
  dateModified: '2026-08-05',
  author: 'Nimra Shahzada',
  reviewer: 'Nida Iqbal | MPhil in Education Leadership and Management',
  readTime: '9 min read',
  tags: ['Physics', 'Psychology of Learning', 'UAE Students', 'IGCSE', 'A-Level', 'Exam Performance'],
};

const FAQS = [
  {
    q: 'My child understands Physics but still gets low marks. Why?',
    a: 'Understanding at home usually builds recognition, the ability to follow a worked example or spot a correct answer. Exams require retrieval: producing knowledge on a blank page under time pressure. These are different skills. A student can understand the chapter fully and still struggle to retrieve it during a timed exam.',
  },
  {
    q: 'Does getting low marks in Physics mean my child is not intelligent?',
    a: 'Not at all. Intelligence is only one input to exam performance. Attention, organisation, planning, emotional regulation, and flexible thinking matter just as much. Many very capable students score below their ability because of factors that have nothing to do with how smart they are.',
  },
  {
    q: 'Why do bright students make careless mistakes?',
    a: 'Careless mistakes often happen when working memory is overloaded. Physics simultaneously demands reading the question, interpreting diagrams, selecting formulas, calculating, and checking units. When these tasks compete for limited working memory, one or more steps get dropped — and what looks like carelessness is actually cognitive overload.',
  },
  {
    q: 'Can anxiety affect Physics performance?',
    a: 'Yes, significantly. Worry consumes working memory resources. A student who feels anxious in an exam has less cognitive capacity available for the actual questions — not because they know less, but because part of their thinking is occupied by worry. This is why students sometimes do worse under exam conditions than in informal settings.',
  },
  {
    q: 'How can parents support their child?',
    a: 'Practice full exam-style questions under timed conditions, not just chapter reading. Reflect on thinking strategies behind mistakes, not just the wrong answer. Praise effort and clear reasoning rather than results alone. If the gap between home understanding and exam performance persists, structured support from an experienced tutor can identify the specific point where retrieval breaks down.',
  },
];

const TOC_ITEMS = [
  { label: "Why Understanding at Home Doesn't Always Show Up in Exams", id: 'why-understanding-doesnt-transfer' },
  { label: "Why Intelligence Alone Doesn't Explain Low Physics Marks", id: 'intelligence-alone' },
  { label: 'Why Physics Overloads Working Memory More Than Other Subjects', id: 'working-memory-overload' },
  { label: 'Why Perfectionism Costs Bright Students Physics Marks', id: 'perfectionism-cost' },
  { label: 'When Anxiety Interrupts Thinking', id: 'when-anxiety-interrupts' },
  { label: 'A Note for Parents: How to Help', id: 'how-parents-can-help' },
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

export default function PhysicsUnderstandingMarksBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <Layout>
      <SEOHead
        title="Why Physics Understanding Does Not Mean High Marks | Ustaad"
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
              jobTitle: 'Content Lead at Ustaad',
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

      {/* Breadcrumb */}
      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1"><Home className="h-3 w-3" /> Home</a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs/psychology-of-learning" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">Psychology of Learning</a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">Physics Conceptual Marks</span>
        </div>
      </div>

      {/* Hero header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Category tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">USTAAD UAE · PSYCHOLOGY OF LEARNING</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-justify">{BLOG.description}</p>

            {/* Meta */}
            <div className="mb-4 mt-2 space-y-2">
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Written by:</span>{' '}
                  <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] font-semibold underline">{BLOG.author}</a>
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Reviewed by:</span>{' '}
                  <a href="/authors/nida-iqbal" className="text-[#0f4a9b] font-semibold underline">{BLOG.reviewer}</a>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 pt-1">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  Last reviewed: August 2026 · Ustaad UAE Editorial Team
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A]" />{BLOG.readTime}
                </span>
                <SocialShare url={shareUrl} title={BLOG.title} />
              </div>
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
            <p>Parents often say something like this in a first conversation: their child understands the topic, can explain it at home, and even helped a younger sibling through the same chapter. Then the exam paper arrives, and the marks do not reflect any of that.</p>
            <p>This is one of the most common patterns seen in students across the UAE. It is also one of the most misread. The gap is not about effort, intelligence, or even preparation. It is about the difference between two distinct cognitive processes: understanding and retrieval under pressure.</p>
            <p>Learning a concept and performing under exam conditions are two different processes. They draw on different mental skills, and students who are strong at one are not automatically strong at the other.</p>

            {/* 01 */}
            <SectionHeading num="01" id="why-understanding-doesnt-transfer">Why Understanding at Home Doesn't Always Show Up in Exam Marks</SectionHeading>
            <p>Home revision typically rewards recognition. A student reads through a worked example, follows the logic, and feels confident because the steps make sense. But feeling that something makes sense is not the same as being able to produce it independently on a blank page.</p>
            <p>Exams demand retrieval. The student must access knowledge on cue, under time pressure, without the textbook, and often in a format slightly different from anything they practised. Two students with comparable knowledge often achieve very different marks not because one understands more, but because one has practised retrieval and the other has not.</p>

            <NarrativeBox label="Case Study, Year 11 Physics, Abu Dhabi British School, Cambridge 0625">
              <p>A Year 11 student scored 88% on chapter tests done at home over the course of the year. She revised every topic, highlighted her notes, and could walk her mother through worked examples in the evenings. Her first school mock came back at 61%.</p>
              <p>The content was identical. What changed was the retrieval condition. She had built familiarity with the material but had never practised producing answers under timed, unsupported conditions. Her home revision had developed recognition; the exam tested retrieval. The gap between them was the gap in her marks.</p>
            </NarrativeBox>

            <InlineImage
              src="/images/blogs/physics-working-memory-cognitive-overload.webp"
              alt="Diagram illustrating how physics exam demands overload working memory with simultaneous tasks"
              caption="Physics simultaneously demands reading, diagram interpretation, formula selection, calculation, and unit-checking, each competing for limited working memory."
            />

            {/* 02 */}
            <SectionHeading num="02" id="intelligence-alone">Why Intelligence Alone Doesn't Explain Low Physics Marks</SectionHeading>
            <p>Intelligence is only one input to exam performance. Attention, organisation, planning, emotional regulation, and flexible thinking matter just as much. In physics, where questions frequently combine multiple concepts, a student who cannot shift flexibly between ideas mid-question will lose marks regardless of how well they understand each concept in isolation.</p>
            <p>This is particularly true for Physics, which requires students to hold several ideas in mind simultaneously, interpreting a diagram, identifying the relevant principle, selecting the correct formula, substituting values, calculating, and checking units, all within one question. This is not a test of intelligence. It is a test of executive function under pressure.</p>
            <p>Students with strong executive function manage this without noticing it. Students whose executive function is less developed, or whose working memory is reduced by stress, find it difficult even when they understand the material.</p>

            {/* 03 */}
            <SectionHeading num="03" id="working-memory-overload">Why Physics Overloads Working Memory More Than Other Subjects</SectionHeading>
            <p>Working memory is the mental space where active thinking happens. It is limited. When a task demands more than working memory can hold at once, performance degrades, not because the student lacks knowledge, but because the cognitive load exceeds capacity.</p>
            <p>Physics questions are particularly demanding in this regard. A single mechanics question may require a student to:</p>
            <BulletList items={[
              'Read and interpret the question scenario',
              'Identify forces and their directions from a written description',
              'Construct or interpret a free body diagram',
              'Identify the net force',
              'Select the correct equation',
              'Rearrange and substitute values',
              'Check that units are consistent',
              'Write a final answer with correct significant figures',
            ]} />
            <p>Each of these is a separate cognitive task. Students who have automatised the early steps, who draw diagrams without thinking, who identify forces as a reflex, free up working memory for the harder steps. Students who must consciously attend to every step simultaneously run out of cognitive space before they finish.</p>

            <NarrativeBox label="Case Study, Year 10, Dubai, Edexcel 4PH1">
              <p>A Year 10 student was strong across most topics but consistently lost marks on longer questions. His teacher noticed he was slow to start but accurate once he did. In a one-to-one session, it became clear that he was mentally sequencing every step before writing anything, treating each question as a novel problem rather than a familiar situation.</p>
              <p>Once he practised drawing the free body diagram first as a reflex, before reading the question fully, his starting time dropped, his working memory load reduced, and his marks on longer questions improved by an average of six marks per paper over six weeks.</p>
            </NarrativeBox>

            {/* 04 */}
            <SectionHeading num="04" id="perfectionism-cost">Why Perfectionism Costs Bright Students Physics Marks</SectionHeading>
            <p>Perfectionism in exams typically shows up as spending too long on one question. A bright student notices uncertainty in their answer and goes back. They rewrite, recalculate, reconsider. The question may only be worth three marks. The time cost is ten minutes. The questions left unattempted at the end of the paper each carry marks of their own.</p>
            <p>This pattern is almost always driven by fear of being wrong rather than genuine uncertainty about the method. The student does know how to answer the question. The difficulty is trusting that knowledge under pressure and moving on.</p>

            <InlineImage
              src="/images/blogs/physics-exam-perfectionism-time-pressure.webp"
              alt="Student spending excessive time on one physics question under timed exam conditions"
              caption="Perfectionism under time pressure often costs more marks than the mistake it is trying to avoid."
            />

            {/* 05 */}
            <SectionHeading num="05" id="when-anxiety-interrupts">When Anxiety Interrupts Thinking</SectionHeading>
            <p>Exam anxiety works against performance in a specific, measurable way. Worry consumes working memory. When a student is anxious, even when they appear composed, part of their cognitive capacity is occupied by worry rather than the question in front of them.</p>
            <p>This is why students sometimes describe knowing the answer but being unable to access it during the exam. The knowledge is there. The retrieval pathway is blocked by competing cognitive load from anxiety.</p>
            <p>Students with higher exam anxiety often perform significantly better in low-stakes practice than in formal exams. The gap is not a measure of what they know. It is a measure of how much working memory anxiety is consuming. For a broader look at how this anxiety builds across the term, see{' '}
              <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-semibold hover:underline">What UAE Parents Miss About Exam Panic</a>.</p>

            {/* 06 */}
            <SectionHeading num="06" id="how-parents-can-help">A Note for Parents: How to Help</SectionHeading>
            <p>The most useful shift for parents is moving from content focus to process focus. Rather than asking "did you revise chapter eight?" ask "did you practise a full exam question from chapter eight on a blank page, timed, without your notes?"</p>
            <p>These are not the same thing. The first builds familiarity. The second builds retrieval.</p>

            <InlineImage
              src="/images/blogs/uae-parent-teen-physics-marks-support.webp"
              alt="UAE parent and teenager discussing physics exam results and study approach at home"
              caption="Shifting from content focus to retrieval practice is often the most effective change parents can support at home."
            />

            <p>Practical steps that support retrieval without adding pressure:</p>
            <BulletList items={[
              'Ask your child to explain a physics concept to you out loud, without notes. Not to test them, but to build retrieval practice into everyday conversation',
              'Encourage full past paper attempts under timed conditions, at least once a fortnight from the start of Year 10 or Year 12',
              'After a paper, review the thinking behind mistakes, not just the wrong answer. Ask "where did the thinking go?" rather than "why did you get this wrong?"',
              'Praise reasoning and strategy, not only results. A student who identified the right approach but made an arithmetic error has demonstrated good physics thinking',
            ]} />

            <p>If the gap between home performance and exam marks persists despite consistent effort, structured support from an experienced tutor can help identify precisely where retrieval is breaking down and build habits that address it directly. For Abu Dhabi students, Ustaad's{' '}
              <a href="/physics-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">physics tutoring in Abu Dhabi</a>{' '}
              works through this kind of diagnostic, one question at a time. Students who struggle with the maths side of Physics will also find practical guidance in our article on{' '}
              <a href="/blogs/igcse-maths-revision-low-marks" className="text-[#0f4a9b] font-semibold hover:underline">why IGCSE students lose marks after hours of revision</a>, and Ustaad's{' '}
              <a href="/maths" className="text-[#0f4a9b] font-semibold hover:underline">maths tutoring</a>{' '}
              is available across the UAE for students who need targeted support on that side.</p>

            <div className="my-5 flex flex-col items-center gap-1.5">
              <a href="/contact#form"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-white text-sm hover:brightness-110 transition"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book Your Free Trial
              </a>
              <p className="text-xs text-gray-500 font-medium">No commitment. Cancel anytime.</p>
            </div>

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
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-28 mt-4">Nimra Shahzada | Content Lead at Ustaad</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nimra Shahzada holds a Bachelor's degree in Psychology. She assesses students and writes about the academic issues they face.</p>
            </div>
            <div className="relative rounded-2xl border border-[#C7A24A]/15 bg-gradient-to-br from-white to-[#fdf9f0] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6">Reviewed By</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-24 mt-4">Nida Iqbal | MPhil in Education Leadership and Management</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nida Iqbal reviewed this article for educational accuracy and parent relevance, ensuring the psychology and learning science discussed reflects sound practice for UAE families navigating exam performance gaps.</p>
            </div>
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
            <p className="text-white/75 mb-5 max-w-lg mx-auto text-sm">
              Ustaad supports students and families across the UAE through structured academic mentorship, exam preparation guidance, and personalised learning support.
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
          {/* Meet the Writers */}
          <div className="mt-6 mb-8 px-4 py-4 rounded-2xl bg-[#f8fafd] border border-[#0f4a9b]/10 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              Meet the writers behind Ustaad UAE on our{' '}
              <a href="/editorial" className="text-[#0f4a9b] font-semibold hover:underline">editorial page</a>.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
