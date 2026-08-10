import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle } from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'Why IGCSE Physics Formulas Stop Working in Exams',
  titleLine1: 'Why IGCSE Physics Formulas',
  titleLine2: 'Stop Working in Exams',
  slug: 'igcse-physics-formulas-exam',
  description: 'A Physics teacher explains why Year 10 & 11 students freeze on exam questions after memorising formulas, and what habits actually change results.',
  heroImage: '/images/blogs/igcse-physics-student-revision-uae.webp',
  heroAlt: 'IGCSE Physics student in the UAE revising formulas and free body diagrams at a home study desk',
  heroCaption: 'Memorising every formula is not enough. The gap appears in the moment between reading the question and writing the first equation.',
  datePublished: '2026-06-30',
  dateModified: '2026-08-05',
  author: 'F. Zaman',
  authorFull: 'F. Zaman | Senior IGCSE Physics Teacher',
  reviewer: 'Nida Iqbal | MPhil in Education Leadership and Management',
  readTime: '8 min read',
  tags: ['IGCSE Physics', 'UAE', 'Physics Formulas', 'Cambridge 0625', 'Edexcel 4PH1', 'Exam Technique'],
};

const FAQS = [
  {
    q: 'Why does my child memorise physics formulas but still get low marks?',
    a: 'Formula recall is only the first step. IGCSE Physics questions require students to identify which formula applies, set up a free body diagram or graph correctly, and then calculate. Students who memorise without practising interpretation freeze in exams because they have never built the habit of reading the question before writing.',
  },
  {
    q: 'How important are diagrams in IGCSE Physics?',
    a: 'Very important. Cambridge 0625 and Edexcel 4PH1 mark schemes award marks for free body diagrams independently of the final calculation. A student who skips the diagram and gets the right number can still lose marks. Drawing first is not optional. It is part of the answer.',
  },
  {
    q: 'What is the difference between calculation and theory questions in physics?',
    a: 'Calculation questions follow a procedure: identify, draw, calculate. Theory questions ask students to explain why something happens. They cannot be answered by recalling steps. Students who relied on procedure for calculations often freeze on theory because they never built the habit of explaining physics in their own words.',
  },
  {
    q: 'Why does my child do well in maths but struggle in physics?',
    a: 'In maths, a graph is a graph. In physics, the same graph can represent acceleration, energy transfer, momentum, or current, depending on the context. Students who are strong in maths sometimes struggle because they expect physics to follow the same purely procedural logic. Physics requires reading the physical situation first, then applying the maths.',
  },
  {
    q: 'When should physics revision start for IGCSE students?',
    a: 'Ideally from the beginning of Year 10, building habits of diagram-drawing, question-reading, and spaced practice from the start. Students who begin revision habits early find that mock season and final exams feel far less overwhelming because the approach is already familiar.',
  },
];

const TOC_ITEMS = [
  { label: 'Why Formula Memorisation Stops Working Around Year 10', id: 'why-formula-memorisation-stops-working' },
  { label: 'A Worked Example: The Box on a Rough Floor', id: 'a-worked-example-box-on-rough-floor' },
  { label: 'The First Thirty Seconds of a Question', id: 'the-first-thirty-seconds' },
  { label: 'Reading the Wording: Hidden Physics Cues', id: 'reading-the-wording' },
  { label: 'Where Physics and Mathematics Meet', id: 'where-physics-and-mathematics-meet' },
  { label: 'Theory Questions and What They Reveal', id: 'theory-questions' },
  { label: 'A Different Way to Revise IGCSE Physics', id: 'a-different-way-to-revise' },
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

function StepBox({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 bg-[#f8fafd] rounded-xl border border-slate-100 mb-2">
      <p className="font-bold text-[#0a1f3d] text-sm mb-1.5">
        <span className="text-[#0f4a9b]/50 mr-1">Step {num}:</span>
        <span>{title}</span>
      </p>
      <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
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

export default function IGCSEPhysicsFormulasBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <Layout>
      <SEOHead
        title="Why IGCSE Physics Formulas Stop Working in Exams | Ustaad"
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
              name: 'F. Zaman',
              url: '/authors/ustaad-subject-specialists',
              jobTitle: "Master's in Physics | Senior IGCSE Physics Teacher",
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
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[200px]">IGCSE Physics Insights</span>
        </div>
      </div>

      {/* Hero header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Category tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">USTAAD UAE · IGCSE PHYSICS INSIGHTS</span>
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
            <div className="flex flex-wrap items-start gap-y-1 gap-x-0 mb-1 text-xs text-gray-500">
              <span className="flex items-center gap-1 mr-3"><User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />Written by: <a href="/authors/ustaad-subject-specialists" className="text-[#0f4a9b] font-semibold underline">{BLOG.authorFull}</a></span>
            </div>
            <div className="flex flex-wrap items-start gap-y-1 gap-x-0 mb-1 text-xs text-gray-500">
              <span className="flex items-center gap-1 mr-3"><User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />Reviewed by: <a href="/authors/nida-iqbal" className="text-[#0f4a9b] font-semibold underline">{BLOG.reviewer}</a></span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-4 mt-2 text-xs text-gray-400">
              <time dateTime={BLOG.dateModified} className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-[#C7A24A]" />Last reviewed: August 2026 | Ustaad UAE Editorial Team
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
            <p>A Year 10 student stayed behind after class last term holding a mechanics worksheet. He had solved nine questions correctly. One near the bottom had been crossed out three times.</p>
            <p>"Sir, I know the formula. I just don't know how it fits in this question."</p>
            <p>After more than a decade teaching physics, I hear a version of that sentence every term. The maths was not the problem; he could rearrange equations and solve numerical problems. The gap was the moment between reading the question and writing the first equation, and that is where most IGCSE Physics marks are lost. The fix is not more hours. It is a different habit.</p>

            {/* 01 */}
            <SectionHeading num="01" id="why-formula-memorisation-stops-working">Why Formula Memorisation Stops Working Around Year 10</SectionHeading>
            <p>Earlier in school, physics rewards substitution. Numbers go in, an answer comes out. By IGCSE, the same equations start rewarding reading. Most students do not adjust to this shift.</p>
            <p>Year 7 to Year 9 problems hand you the values cleanly. Year 10 problems do not. Mechanics questions get longer, diagrams appear, and two or three ideas combine inside one question.</p>
            <p>Three equations show this pattern most clearly:</p>
            <BulletList items={[
              <><em>F = ma</em>. Exam questions rarely hand you the net force. You usually have to calculate it by combining or resolving other forces first.</>,
              <><em>V = IR</em>. Easy in a single-resistor circuit. Difficult once series and parallel combinations appear in one question.</>,
              <>Power = Work ÷ Time. Direct on its own. Hard when the question does not tell you which energy type is being transferred.</>,
            ]} />

            <NarrativeBox label="Case Study, Year 11 IGCSE Physics, Dubai British School, Cambridge 0625">
              <p>In a forces mock, six students applied <em>F = ma</em> cleanly but forgot that friction was acting in the opposite direction. The arithmetic was perfect. The physics was wrong. Average loss across one question: 4 marks.</p>
              <p>Equations describe what is happening. Interpretation is what makes them usable.</p>
            </NarrativeBox>

            {/* 02 */}
            <SectionHeading num="02" id="a-worked-example-box-on-rough-floor">A Worked Example: The Box on a Rough Floor</SectionHeading>
            <p>Picture a box being pushed across a rough floor. The pushing force is 20 N to the right. Friction is 5 N to the left. Most students write <em>F = ma</em> immediately and stop. They think the force is 20 N. It is not.</p>
            <p>The first thing I draw on the board is the force diagram.</p>

            <InlineImage
              src="/images/blogs/igcse-physics-free-body-diagram-box-friction.webp"
              alt="Free body diagram showing applied force, friction, normal force, and weight on a box for an IGCSE Physics F equals m a problem"
              caption="A free body diagram makes the net force visible before the calculation begins."
            />

            <p>The free body diagram shows the net force is 15 N, not 20 N. Once those four arrows are on the page, the answer is in front of them. A physics solution follows four short steps:</p>

            <StepBox num="1" title="Read the situation.">Identify what the object is doing and what is acting on it.</StepBox>
            <StepBox num="2" title="Draw the free body diagram.">Label every force with its size and direction.</StepBox>
            <StepBox num="3" title="Work out the net force.">Add or subtract the forces along each axis.</StepBox>
            <StepBox num="4" title="Apply F = ma.">Find acceleration, or rearrange to find the unknown the question asks for.</StepBox>

            <p>Most lost marks come from skipping Step 2.</p>
            <p>Motion graphs work the same way. A velocity-time graph rising in a straight line is already telling the story before any calculation begins.</p>

            <InlineImage
              src="/images/blogs/igcse-physics-velocity-time-graph-constant-acceleration.webp"
              alt="Velocity-time graph showing constant acceleration in IGCSE Physics, with velocity rising from zero to 12 metres per second over six seconds"
              caption="A straight-line velocity-time graph tells the story: constant acceleration. Picture the car pulling away from a traffic light."
            />

            <p>Vectors are where things get harder. A diagonal force is the first place many students lose confidence, because they have always thought in straight lines. The fix is to split the diagonal into one horizontal arrow and one vertical arrow. Analyse each direction separately. The question becomes two smaller questions, both solvable.</p>

            <InlineImage
              src="/images/blogs/igcse-physics-vector-resolution-components.webp"
              alt="Vector resolution diagram showing a diagonal force split into horizontal and vertical components for IGCSE Physics"
              caption="Splitting a diagonal force into components makes the question solvable. It becomes two separate straight-line problems."
            />

            {/* 03 */}
            <SectionHeading num="03" id="the-first-thirty-seconds">The First Thirty Seconds of a Question</SectionHeading>
            <p>The clearest difference between confident and struggling physics students appears in the first thirty seconds.</p>
            <p>Weak students start writing equations immediately. They are worried about time. Strong students sketch the situation first. They draw arrows, label distances, mark angles. Once the picture is on the page, the question is usually half-solved.</p>
            <p>The sketch does not need to be neat. Two arrows is enough. The point is to translate words into a physical picture before you calculate.</p>

            <NarrativeBox label="Case Study, Year 10 IGCSE Physics, Sharjah, Edexcel 4PH1">
              <p>A student kept getting pulley problems wrong on homework. In one class, she drew the two tension arrows correctly for the first time and solved the question without help. The next paper, she repeated the same approach on three pulley questions and scored full marks on each.</p>
              <p>A clear diagram removes half the confusion before the maths starts.</p>
            </NarrativeBox>

            {/* 04 */}
            <SectionHeading num="04" id="reading-the-wording">Reading the Wording: Hidden Physics Cues</SectionHeading>
            <p>Half of physics exam technique is reading the question properly. Students miss clues because they treat physics questions like maths exercises, when the wording usually carries the physics.</p>
            <p>A quick translation guide for the most common cues:</p>
            <BulletList items={[
              <><strong>"dropped"</strong> means initial velocity is zero</>,
              <><strong>"comes to rest"</strong> means final velocity is zero</>,
              <><strong>"constant speed"</strong> means acceleration is zero and forces are balanced</>,
            ]} />

            <NarrativeBox label="Case Study, Year 10 IGCSE Physics, Abu Dhabi British School, Cambridge 0625">
              <p>A student kept choosing the wrong SUVAT equation. He could recite all five. He just ignored the phrase "comes to rest" at the end of each question. Once he started underlining trigger phrases before writing, his next paper jumped one full grade.</p>
              <p>Once students start reading questions this way, theory sections feel less random. The wording is doing half the work for them.</p>
            </NarrativeBox>

            <p>For Abu Dhabi families looking for one-to-one support with habits like question reading and free body diagrams, Ustaad's{' '}
              <a href="/physics-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">physics tutoring in Abu Dhabi</a>{' '}
              is built around the same approach used in this class.</p>

            {/* 05 */}
            <SectionHeading num="05" id="where-physics-and-mathematics-meet">Where Physics and Mathematics Meet</SectionHeading>
            <p>Some students enjoy maths but dislike physics because it feels disorganised. It is not. Physics is mathematics with a body attached.</p>
            <p>In maths, a graph is a graph. In physics, the same graph can describe acceleration, energy transfer, momentum, or current change. The mathematics stays the same; the reading changes. A simple example: in maths, the gradient of a line tells you the rate of change. In physics, the gradient of a velocity-time graph is the acceleration of the object.</p>
            <p>For students struggling with the maths side of physics, our companion piece on{' '}
              <a href="/blogs/igcse-maths-revision-low-marks" className="text-[#0f4a9b] font-semibold hover:underline">IGCSE maths revision</a>{' '}
              explains how the same reading gap shows up in algebra and fractions. When the problem is rooted in maths foundations rather than physics intuition, Ustaad's{' '}
              <a href="/maths-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">maths tutoring in Abu Dhabi</a>{' '}
              can address it directly.</p>

            {/* 06 */}
            <SectionHeading num="06" id="theory-questions">Theory Questions and What They Reveal</SectionHeading>
            <p>Theory questions catch out students who relied on procedure. Calculation questions can be passed by following steps; theory questions cannot. I once asked a class why two forces acting in the same direction give the largest resultant. Half the room reached for their notes. The students who got it right pictured two people pushing a stalled car together, and the explanation became obvious because the image made sense first.</p>
            <p>This is why I push every class to explain physics aloud before they touch the calculator. Some students who freeze here are not short on knowledge. They are carrying exam pressure that started earlier in the term, a pattern explored further in{' '}
              <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-semibold hover:underline">What UAE Parents Miss About Exam Panic</a>.</p>

            {/* 07 */}
            <SectionHeading num="07" id="a-different-way-to-revise">A Different Way to Revise IGCSE Physics</SectionHeading>
            <p>When parents ask me for physics revision tips for IGCSE, the answer surprises them. Students do not need more hours with the textbook. They need different habits.</p>
            <BulletList items={[
              <><strong>Stop studying chapter by chapter. Revise by situation.</strong> Motion, energy and Newton's second law overlap inside one question. Students who revise by situation expect the overlap. Students who revise chapter-by-chapter panic when it arrives.</>,
              <><strong>Read the mark scheme, not just the answer.</strong> In Cambridge 0625 Paper 4 mark schemes, marks are awarded for the free body diagram itself, separately from the calculation. Students who skip the diagram lose those marks even when the final number is right.</>,
            ]} />

            <p>Year 10 is where students decide whether to develop patience or rely on shortcuts. The ones who do well in IGCSE Physics are rarely the fastest. They are the ones who spend the first minute reading, sketching and thinking before writing. By mock season, that habit is their biggest advantage.</p>

            <div className="my-5 flex justify-center">
              <a href="/contact#form"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-white text-sm hover:brightness-110 transition"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Speak to an Ustaad Physics Mentor
              </a>
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
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-28 mt-4">Ustaad Subject Specialists</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">A group of practising Maths, Science, and English teachers who add worked examples, exam tips, and fact checks to our articles. Many teach in UAE schools and prefer not to use their names in public, so we share their subjects and experience instead. Every contribution is reviewed by Nida Iqbal before publication.</p>
            </div>
            <div className="relative rounded-2xl border border-[#C7A24A]/15 bg-gradient-to-br from-white to-[#fdf9f0] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6">Reviewed By</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-24 mt-4">Nida Iqbal | MPhil in Education Leadership and Management</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nida Iqbal reviewed this article for educational accuracy and parent relevance, ensuring the IGCSE Physics teaching examples and revision guidance reflect sound classroom practice for UAE families.</p>
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
              Ustaad supports IGCSE Physics students across the UAE through diagnostic, concept-led learning aligned to Cambridge IGCSE Physics (0625) and Edexcel IGCSE Physics (4PH1).
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="/contact#form"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-sm"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book Your Free Trial →
              </a>
              <a href="https://wa.me/971561249005" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white/10 border border-white/20 rounded-full font-bold text-white hover:bg-white/20 transition text-sm">
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
