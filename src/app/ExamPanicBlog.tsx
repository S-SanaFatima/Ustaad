import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle } from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: '"My Child Only Panics Right Before Exams": What UAE Parents Often Notice Too Late',
  titleLine1: '"My Child Only Panics Right Before Exams"',
  titleLine2: 'What UAE Parents Often Notice Too Late',
  slug: 'exam-panic-before-exams-uae',
  description: 'Exam panic builds quietly across the term. Discover early signs in homework and mocks long before parents notice them as exam stress.',
  heroImage: '/images/blogs/uae-teenager-exam-stress-quiet.webp',
  heroAlt: 'UAE teenager studying at home showing quiet signs of exam stress before exam season',
  heroCaption: 'Exam stress rarely starts in exam week. It builds quietly across the term.',
  datePublished: '2026-06-23',
  dateModified: '2026-08-05',
  author: 'Nimra Shahzada | Education Counsellor & Student Support Specialist | Ustaad UAE',
  reviewer: 'Nida Iqbal | MPhil in Education Leadership and Management',
  readTime: '10 min read',
  tags: ['Exam Stress', 'UAE Students', 'Student Wellbeing', 'IGCSE', 'A-Level', 'Exam Panic'],
};

const FAQS = [
  {
    q: 'Why does my child study but still panic before exams?',
    a: 'Many students prepare well but still feel performance anxiety. They may understand the material but feel overwhelmed by time pressure, expectations, or fear of making mistakes.',
  },
  {
    q: 'Is exam panic in teenagers a sign of a serious problem?',
    a: 'Not always. Short-term stress is common. It becomes more concerning when it starts affecting sleep, mood, or daily behaviour over longer periods.',
  },
  {
    q: 'How early should parents in the UAE start building exam routines at home?',
    a: 'Usually from the start of the academic term. Students handle pressure more calmly when routines stay steady all year rather than being introduced suddenly during exam months.',
  },
  {
    q: 'What is the difference between normal exam nerves and something more serious?',
    a: 'Normal nerves come and go around exams. More serious stress stays in the background longer and can lead to academic burnout, where students feel drained even outside exam periods.',
  },
  {
    q: 'My child completely avoids studying when exams are close. Is this normal?',
    a: 'This is usually avoidance behaviour, not lack of interest. Many students avoid studying when pressure feels overwhelming, especially when stress has been building quietly.',
  },
];

const TOC_ITEMS = [
  { label: 'What Parents Usually Notice First', id: 'what-parents-usually-notice-first' },
  { label: 'What Is Happening Beneath the Panic', id: 'what-is-happening-beneath-the-panic' },
  { label: 'Why Stress Often Appears Suddenly Before Exams', id: 'why-stress-often-appears-suddenly-before-exams' },
  { label: 'Common Misconceptions About Exam Panic', id: 'common-misconceptions-about-exam-panic' },
  { label: 'What Steadier Students Do Differently', id: 'what-steadier-students-do-differently' },
  { label: 'How Parents Can Help, Before and During Exam Season', id: 'how-parents-can-help' },
  { label: 'When Extra Support May Help', id: 'when-extra-support-may-help' },
  { label: 'Final Thoughts for Parents', id: 'final-thoughts-for-parents' },
];

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

// ── Section heading ───────────────────────────────────────────────
function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-8 mb-3 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/40 mb-1">{num}</span>
      <h2 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h2>
    </div>
  );
}

// ── Bullet list ───────────────────────────────────────────────────
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

// ── Narrative / story box ─────────────────────────────────────────
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

// ── Misconception card ────────────────────────────────────────────
function MisconceptionCard({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 bg-[#f8fafd] rounded-xl border border-slate-100 mb-2">
      <p className="font-bold text-[#0a1f3d] text-sm mb-1.5">
        <span className="text-[#0f4a9b]/50 mr-1">Misconception {num}:</span>
        <span className="italic">{title}</span>
      </p>
      <div className="text-sm text-gray-600 leading-relaxed text-justify">{children}</div>
    </div>
  );
}

// ── Inline image with optional caption ───────────────────────────
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

// ── Table of contents ─────────────────────────────────────────────
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

// ── Social share ──────────────────────────────────────────────────
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

// ── FAQ accordion ─────────────────────────────────────────────────
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

// ── Main component ────────────────────────────────────────────────
export default function ExamPanicBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <Layout>
      <SEOHead
        title='"My Child Only Panics Right Before Exams": What UAE Parents Often Notice Too Late | Ustaad'
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
              jobTitle: 'Education Counsellor & Student Support Specialist',
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
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">Overcoming Exam Panic</span>
        </div>
      </div>

      {/* Hero header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Category tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">USTAAD UAE · STUDENT WELLBEING &amp; ACADEMIC INSIGHTS</span>
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
                  <span className="text-gray-400"> · Ustaad Editorial</span>
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

            {/* Opening paragraphs */}
            <p>Many UAE parents start noticing this pattern during the secondary school years. School expectations stay steady all year, so the pressure does not suddenly appear before exams. It builds quietly over time.</p>
            <p>A child may seem fine for months, and then become emotional or withdrawn as exams come closer. What surprises parents is how sudden this shift looks.</p>
            <p>But the stress was rarely sudden. It had been building for weeks, sometimes months, inside the child's routine. That quiet pressure is where the cycle begins, and where most parents miss it.</p>

            {/* 01 */}
            <SectionHeading num="01" id="what-parents-usually-notice-first">What Parents Usually Notice First</SectionHeading>
            <p>Most parents do not first recognise this as stress. They notice changes in behaviour.</p>
            <p>A child who studied on her own suddenly needs constant reassurance. An organised student starts delaying work or avoiding her books. Some become emotional over small things at home. Others go quiet.</p>
            <p>These changes often show up in everyday routines:</p>
            <BulletList items={[
              'unfinished homework',
              'disturbed sleep',
              'arguments about study time or screens',
              'emotional reactions after school',
            ]} />

            <NarrativeBox label="Homework Example, Year 10 IGCSE Student">
              <p>A Year 10 IGCSE student finishes all her maths homework correctly. The next day, her teacher gives a short timed quiz on the same topic. She freezes. Her marks drop. At home, her parents see this as carelessness, and she may start blaming herself too.</p>
              <p>But her understanding was real. It only worked when she did not feel watched, timed, or judged. The gap between "understands at home" and "performs in school" is where the cycle begins, and where the stress slowly starts to show.</p>
            </NarrativeBox>

            <p>This is also where the subject-level pattern starts to show. For a closer look at{' '}
              <a href="/blogs/igcse-maths-revision-low-marks" className="text-[#0f4a9b] font-semibold hover:underline">why hours of revision often do not turn into IGCSE maths marks</a>
              , see Why IGCSE Maths Students Suffer Low Marks | Ustaad.</p>

            <InlineImage
              src="/images/blogs/unfinished-homework-exam-stress-signs.webp"
              alt="Unfinished homework and closed schoolbooks showing early signs of academic stress in a UAE teenager's routine"
              caption="The first signs of exam stress usually appear in everyday routines, not in exam week."
            />

            {/* 02 */}
            <SectionHeading num="02" id="what-is-happening-beneath-the-panic">What Is Happening Beneath the Panic</SectionHeading>
            <p>Exam panic looks like a sudden emotional event. It rarely is.</p>
            <p>What students feel is the result of weeks of low-grade pressure with no release. They have been holding small worries quietly: questions they did not understand in class, marks that felt unfair, or comparisons they overheard at home or with peers.</p>
            <p>By exam time, the stress is not new. It is just finally showing up because the child can no longer hold it in. A sudden outburst, an unusual mistake, or a strange mood during exams often tells us more about your child's mental state than the result itself.</p>

            <NarrativeBox label="Classroom Story, Year 11 IGCSE Chemistry Mock">
              <p>I once worked with a Year 11 IGCSE Chemistry student in the UAE. She was usually confident, but during one mock, she stopped halfway through Paper 2. Her teacher noticed she had answered eight questions correctly, then started erasing and rewriting the same answer over and over.</p>
              <p>Afterwards, she said she felt fine until question nine, when she did not recognise the format. From that moment, her brain "stopped trusting itself," and she could not move on.</p>
            </NarrativeBox>

            <p>This is what cognitive load under pressure looks like in a real exam room. It is not a lack of knowledge. It is losing access to it.</p>

            {/* 03 */}
            <SectionHeading num="03" id="why-stress-often-appears-suddenly-before-exams">Why Stress Often Appears Suddenly Before Exams</SectionHeading>
            <p>After working with many UAE students, I have noticed that children in secondary school become very aware of expectations and comparisons. The pressure rarely arrives in one moment. It builds slowly, and then bursts when the child can no longer hold it in.</p>
            <p>Research across Gulf school contexts has also shown that students in high-expectation environments tend to hide their stress, especially when grades and performance are a regular topic at home.</p>
            <p>By the time formal exams begin, what looks like sudden panic is usually the point where quiet coping has finally run out.</p>

            <NarrativeBox label="Mock Exam Example, Year 12 A-Level Physics">
              <p>In a recent case, a Year 12 student preparing for A-Level Physics in Abu Dhabi was scoring 82–85% on past papers at home. In his first school mock, he scored 62%. Same content. Same student.</p>
              <p>What changed was the environment. Bright lighting, an invigilator in the room, and knowing the result would reach the head of department shifted his focus from the questions to himself. His preparation was solid; his exam state was not, and his confidence dropped sharply.</p>
            </NarrativeBox>

            <p>Drops like this are rarely about content. They are about how exam conditions meet the pressure that has been building unnoticed. For Abu Dhabi students preparing for physics exams, this kind of exam-state preparation is one of the focus areas at Ustaad's <a href="/physics-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline">physics tutoring in Abu Dhabi</a>.</p>

            <InlineImage
              src="/images/blogs/student-exam-hall-mock-stress.webp"
              alt="Secondary school student frozen mid question during a school mock exam under timed pressure"
              caption="What looks like sudden exam panic is usually the moment quiet coping finally runs out."
            />

            {/* 04 */}
            <SectionHeading num="04" id="common-misconceptions-about-exam-panic">Common Misconceptions About Exam Panic</SectionHeading>
            <p>Four common assumptions often get in the way of helping students:</p>

            <MisconceptionCard num="1" title={`"If they studied more, they wouldn't panic."`}>
              Most panicking students are already over-studying. They are not under-prepared; they are emotionally over-loaded.
            </MisconceptionCard>

            <MisconceptionCard num="2" title={`"They're just being dramatic."`}>
              What looks dramatic is usually stress that has been building quietly. Students rarely panic about something that started yesterday. This pressure has often been there for a long time.
            </MisconceptionCard>

            <MisconceptionCard num="3" title={`"They were fine last year, so they'll be fine this year."`}>
              Pressure compounds. A student who coped at IGCSE may struggle at A-Level, not because they are weaker, but because both the academic and emotional demands have grown.
            </MisconceptionCard>

            <MisconceptionCard num="4" title={`"They avoid studying because they don't care."`}>
              Most avoidance has nothing to do with not caring. It usually means the task feels heavier than the child knows how to handle right now.
            </MisconceptionCard>

            {/* 05 */}
            <SectionHeading num="05" id="what-steadier-students-do-differently">What Steadier Students Do Differently</SectionHeading>
            <p>I often tell parents that students who handle exam season more calmly are rarely the most gifted. They share a few habits, built quietly early in the term:</p>
            <BulletList items={[
              'They treat homework as thinking, not just task completion. When they get something wrong, they review the reasoning, not just the answer.',
              'They sit timed practice papers earlier in the term. By exam time, the format no longer surprises them, and they stop panicking under timed conditions.',
              'They talk about difficulty without shame. They tell parents or teachers when something does not make sense.',
              'They keep study sessions short and consistent rather than long and unfocused.',
            ]} />

            <NarrativeBox label="Classroom Story, A-Level Mathematics Revision Group">
              <p>Two A-Level Maths students started the term with similar grades. One checked only the final answer on his homework. The other reviewed every wrong working step and asked his teacher about it.</p>
              <p>By mock season, the second student was scoring fifteen marks higher on average. Not because he was brighter, but because his preparation built a more accurate picture of what he actually knew.</p>
            </NarrativeBox>

            <p>The pattern is consistent: steadier students reduce uncertainty early. Exam panic feeds on uncertainty.</p>

            {/* 06 */}
            <SectionHeading num="06" id="how-parents-can-help">How Parents Can Help, Before and During Exam Season</SectionHeading>
            <p>Helpful parent support is usually quieter than parents expect.</p>
            <p>Earlier in the term, what helps most is stability:</p>
            <BulletList items={[
              'predictable routines',
              'calm conversations at home',
              'realistic daily expectations',
              'short, consistent study habits',
              'noticing effort, not only outcomes',
            ]} />

            <NarrativeBox label="Parent Story, Abu Dhabi Mother">
              <p>A mother in Abu Dhabi described her daughter as feeling "completely different during exam months." Her daughter attended a British curriculum school and performed steadily through the year, but every exam period the atmosphere at home shifted. Sleep became irregular. Small questions turned into arguments. Routines felt tense.</p>
              <p>At first, the mother thought stricter discipline would help. Later she realised her daughter was not struggling with the schoolwork; she was carrying the weight of constant performance talk at home.</p>
              <p>When the family reduced exam talk and built calmer routines earlier, the atmosphere changed. The exams did not become easier. The emotional load became lighter. For Abu Dhabi families where this pressure shows up most clearly around a single subject, especially maths, structured help is available through Ustaad's{' '}
                <a href="/maths-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">maths tutoring in Abu Dhabi</a>.</p>
            </NarrativeBox>

            <p>Once a child is already overwhelmed, the approach needs to soften, not intensify. Shorter sessions, less pressure, and rebuilding small routines often help more than long schedules.</p>

            <InlineImage
              src="/images/blogs/uae-parent-teen-calm-conversation.webp"
              alt="UAE parent and teenage child having a calm conversation at home about school and exams"
              caption="Steady, low-pressure conversations earlier in the term often help more than intense exam-week support."
            />

            {/* 07 */}
            <SectionHeading num="07" id="when-extra-support-may-help">When Extra Support May Help</SectionHeading>
            <p>As a counsellor, I often see patterns families struggle to address on their own. When a child avoids studying despite wanting to do well, when gaps stay hidden in homework but appear under timed conditions, or when their emotional regulation drops across the term, these are usually signs the child is carrying more than effort alone can solve.</p>
            <p>In many UAE families I work with, this is where I recommend reaching out to Ustaad. Not as added pressure, but as calmer, structured guidance for parents trying to understand what is happening underneath.</p>
            <p>If a student continues to struggle despite consistent effort, personalised academic support may help identify the underlying issue and build a more effective path forward.</p>

            <div className="my-5 flex justify-center">
              <a href="/contact#form"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-white text-sm hover:brightness-110 transition"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book Your Free Trial →
              </a>
            </div>

            {/* 08 */}
            <SectionHeading num="08" id="final-thoughts-for-parents">Final Thoughts for Parents</SectionHeading>
            <p>When exam stress becomes visible, I find parents tend to focus only on the exam period itself. In my experience, the more important story is usually what was building before.</p>
            <p>Students cope better when support starts earlier in the year. Small routines and calmer communication make a real difference over time. Parents start to notice changes gradually: a child who is more willing to talk, less defensive, and more able to explain their thinking without shutting down.</p>
            <p>That shift comes from stability, not intensity.</p>
            <p>If your child only seems stressed during exam season, the most useful question is not "how do we get through this week?" but "what was happening in the months before?" From what I have seen, early awareness usually prevents the same cycle from repeating each term.</p>

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
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-28 mt-4">Nimra Shahzada | Education Counsellor &amp; Student Support Specialist</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nimra Shahzada holds a Bachelor's degree in Psychology and works as an Education Counsellor with children across different school settings and age groups. Her work focuses on student wellbeing, academic confidence, and emotional support during high-pressure learning periods. She helps families build calmer, more consistent routines before pressure starts affecting their child's performance and wellbeing.</p>
            </div>
            <div className="relative rounded-2xl border border-[#C7A24A]/15 bg-gradient-to-br from-white to-[#fdf9f0] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6">Reviewed By</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-24 mt-4">Nida Iqbal | MPhil in Education Leadership and Management</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nida Iqbal holds an MPhil in Education Leadership and Management. She reviewed this article for educational accuracy and parent relevance, ensuring the guidance reflects sound practice for UAE families navigating exam-related stress.</p>
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
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="/contact#form"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-sm"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book Your Free Trial →
              </a>
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
