import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle, Download } from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'Read a UAE School Report Card Like a Counsellor | Ustaad',
  titleLine1: 'How to Read a UAE School Report Card',
  titleLine2: 'Like an Education Counsellor',
  slug: 'read-uae-school-report-card',
  description: 'Report card comments follow patterns most parents miss. A UAE education counsellor decodes the phrases teachers use, and what they actually mean.',
  heroImage: '/images/blogs/uae-school-report-card-parent-guide.webp',
  heroAlt: 'UAE parent sitting at a home desk reading a school report card carefully',
  heroCaption: 'Report card comments follow patterns most parents miss. A UAE education counsellor decodes the phrases teachers use, and what they actually mean.',
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
  author: 'Nimra Shahzada',
  reviewer: 'Nida Iqbal',
  readTime: '8 min read',
  tags: ['Report Cards', 'UAE Parents', 'Parent Guidance', 'KHDA', 'ADEK', 'IGCSE', 'A-Level', 'IB'],
};

const FAQS = [
  {
    q: 'What does "making steady progress" mean on a UAE school report card?',
    a: 'It means the student is meeting minimum expectations and no more. There is no acceleration, no standout achievement, and no formal concern flagged yet. While fine for Year 7 or 8, in a Year 10 or 11 report before IGCSE mocks, it serves as a soft warning that the student is not yet performing at the level required for top grades.',
  },
  {
    q: 'What does it mean when effort grade and attainment grade do not match?',
    a: 'The gap between effort and attainment carries essential diagnostic information. High effort with low attainment suggests the student is trying hard but using the wrong study method or exam technique. Low effort with high attainment indicates the student is coasting on natural ability, which often leads to a sudden grade drop in Year 11 or 12 when subject content jumps.',
  },
  {
    q: 'How should parents respond to a school report in the first 48 hours?',
    a: 'In the first hour, read the comments twice before speaking to process initial emotions. In hour two, ask about specific comments (e.g., "What do you think your teacher meant by checking working?") rather than starting with the letter grade. On the same day, compare this term\'s comments with last term\'s for the same subject to track trajectory, and wait until day two before booking tutoring sessions.',
  },
  {
    q: 'When is it necessary to request a meeting with the school about a report card?',
    a: 'Request a meeting in three key situations: 1) When teacher comments contain diplomatic or coded language you don\'t fully understand, 2) When effort and attainment grades move in opposite directions, or 3) When a subject-specific comment mentions a concept your child cannot explain at home. Frame the meeting around a specific, answerable question.',
  },
  {
    q: 'Why do teacher comments on UAE report cards seem so diplomatic?',
    a: 'Teachers in KHDA and ADEK schools write comments for three simultaneous audiences: the parent (who needs clarity without panic), the head of year (who needs specificity for tracking), and the student (who reads it personally). This triple audience creates a diplomatic style that signals underlying needs without putting alarmist language on official school records.',
  },
];

const TOC_ITEMS = [
  { label: 'Why Report Cards Are Written More Carefully Than Parents Realise', id: 'why-report-cards-are-written-more-carefully' },
  { label: 'The Three Layers of a School Report', id: 'the-three-layers-of-a-school-report' },
  { label: 'Decoding the Most Common Phrases', id: 'decoding-the-most-common-phrases' },
  { label: 'Effort Grades and Attainment Grades: The Mismatch That Matters', id: 'effort-and-attainment-mismatch' },
  { label: 'When the Report Card and Your Child\'s Words Do Not Match', id: 'when-report-card-and-childs-words-do-not-match' },
  { label: 'What to Do With the Report Card in the Next 48 Hours', id: 'what-to-do-in-next-48-hours' },
  { label: 'When to Ask the School for a Meeting', id: 'when-to-ask-school-for-meeting' },
  { label: 'Print, Save, Use Later: Report Card Resources for UAE Parents', id: 'report-card-resources' },
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
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0f4a9b]">In This Guide</span>
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

function PhraseDecoderCard({ phrase, surface, working }: { phrase: string; surface: string; working: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-[#0f4a9b]/15 bg-gradient-to-br from-white to-[#f8fafd] p-5 shadow-[0_2px_12px_rgba(15,74,155,0.04)]">
      <h3 className="text-base font-extrabold text-[#0a1f3d] mb-3 border-b border-[#0f4a9b]/10 pb-2">
        "{phrase}"
      </h3>
      <div className="grid md:grid-cols-2 gap-4 text-xs lg:text-[13px]">
        <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80">
          <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">
            Surface Reading
          </span>
          <p className="text-gray-700 leading-relaxed">{surface}</p>
        </div>
        <div className="bg-[#0f4a9b]/6 rounded-xl p-3.5 border border-[#0f4a9b]/15">
          <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#0f4a9b] mb-1">
            Working Meaning
          </span>
          <div className="text-gray-800 leading-relaxed">{working}</div>
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

export default function ReadSchoolReportCardBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <Layout>
      <SEOHead
        title="Read a UAE School Report Card Like a Counsellor | Ustaad"
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
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[200px]">Parent Reference Guide</span>
        </div>
      </div>

      {/* Hero header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Category tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">USTAAD UAE · PARENT REFERENCE GUIDE</span>
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
              <span className="flex items-center gap-1 mr-3"><User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />Written by: <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] font-semibold underline">{BLOG.author}</a> | Education Counsellor at Ustaad UAE</span>
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
            <p>Report card season creates a specific silence in a UAE household. The envelope opens. The grades get read first, then the comments. Most parents give the comments a scan, feel reassured or worried, and move on.</p>
            <p>The comments were not written to be scanned. Teachers in KHDA and ADEK-registered schools spend hours on report writing at the end of every term. Every phrase is chosen. What looks like a compliment sometimes carries a small warning. What looks like a warning is sometimes routine language. In my counselling work with UAE families, I often go through reports line by line with parents who thought everything was fine. Nine times out of ten, the same comments read differently once you know the pattern.</p>

            {/* 01 */}
            <SectionHeading num="01" id="why-report-cards-are-written-more-carefully">Why Report Cards Are Written More Carefully Than Parents Realise</SectionHeading>
            <p>Teachers write comments knowing three audiences will read them:</p>
            <ul className="my-3 space-y-2 pl-2">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                <span><strong className="text-[#0a1f3d]">The parent:</strong> needs enough clarity to respond, but not language that alarms.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                <span><strong className="text-[#0a1f3d]">The head of year:</strong> needs enough specificity to track progress across terms.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                <span><strong className="text-[#0a1f3d]">The student:</strong> a Year 10 will read the comment and take it personally.</span>
              </li>
            </ul>
            <p>That triple audience shapes the language. A comment cannot be too direct, because a Year 10 student will read it and take it to heart. It cannot be too vague, because the head of year needs to track progress. It cannot be alarmist, because it goes home to a family the school wants to keep supporting.</p>
            <p>The result is a diplomatic style that carries information underneath the surface. Every experienced UAE teacher has a vocabulary for signalling 'this student needs help' without writing those words in a document that stays on the school record. This is not evasive. It is professional. But it means parents have to read the report differently from how they read a text message.</p>

            {/* 02 */}
            <SectionHeading num="02" id="the-three-layers-of-a-school-report">The Three Layers of a School Report</SectionHeading>
            <p>Every comment on a UAE school report carries three layers. Read all three together, or the surface layer alone will mislead.</p>

            <div className="my-5 space-y-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="block text-[11px] font-extrabold uppercase tracking-widest text-slate-600 mb-1">SURFACE</span>
                <p className="text-sm font-semibold text-[#0a1f3d]">The sentence the parent reads at first glance.</p>
              </div>
              <div className="rounded-xl border border-[#0f4a9b]/20 bg-[#0f4a9b]/5 p-4">
                <span className="block text-[11px] font-extrabold uppercase tracking-widest text-[#0f4a9b] mb-1">SECOND</span>
                <p className="text-sm font-semibold text-[#0a1f3d]">What the teacher observed in class over the term.</p>
              </div>
              <div className="rounded-xl border border-[#0a1f3d]/20 bg-[#0a1f3d]/5 p-4">
                <span className="block text-[11px] font-extrabold uppercase tracking-widest text-[#0a1f3d] mb-1">THIRD</span>
                <p className="text-sm font-semibold text-[#0a1f3d]">What the teacher recommends, translated into report-card-safe language.</p>
              </div>
            </div>

            <p>A comment like <em>'A pleasant member of the class who contributes when prompted'</em> looks positive. The surface says the student is well behaved. The second layer says the student rarely volunteers answers. The third layer, the recommendation, is that the student is coasting and needs pushing. Once parents can see all three layers, most report cards start telling a fuller story.</p>

            <InlineImage
              src="/images/blogs/parent-teen-report-card-discussion.webp"
              alt="Parent and high school student having a calm discussion about a school progress report"
              caption="Discussing report card feedback calmly as a family allows parents and students to align on progress beyond surface letter grades."
            />

            {/* 03 */}
            <SectionHeading num="03" id="decoding-the-most-common-phrases">Decoding the Most Common Phrases</SectionHeading>
            <p>Each phrase below has a surface reading (what parents hear) and a working meaning (what the teacher intended). The working meaning is the one that matters.</p>

            <PhraseDecoderCard
              phrase="Making steady progress"
              surface="The student is doing well."
              working="The student is meeting expectations and no more. No acceleration, no standout, no concern. Fine at Year 7-8. In a Year 10 or 11 report before IGCSE mocks, this can be a soft warning that the student is not yet at the level required for a strong final grade."
            />

            <PhraseDecoderCard
              phrase="Would benefit from..."
              surface="A gentle suggestion the teacher is making."
              working="The most polite way a UAE teacher tells you something is missing. 'Would benefit from consistent homework' signals that homework is being missed. Read every 'would benefit from' as 'currently is not, and needs to'."
            />

            <PhraseDecoderCard
              phrase="Encouraged to..."
              surface="The teacher is nudging the student."
              working="Similar to 'would benefit from', slightly softer. A coaching prompt the teacher wants recorded without formally flagging a concern. 'Encouraged to review notes daily' usually means the student is only revising at the last minute."
            />

            <PhraseDecoderCard
              phrase="Has shown improvement in..."
              surface="Something has got better."
              working="The reverse tell. When a teacher singles out improvement in one specific area, it often means that area was the problem. If the comment says 'improvement in showing full working', earlier reports likely flagged missing working."
            />

            <PhraseDecoderCard
              phrase="Works well when focused"
              surface="The student can work well."
              working="Watch the conditional. 'When focused'. 'When engaged'. The teacher is saying the student has ability but is not consistently applying it. Very common on Year 9-10 capable students, and almost always precedes a Year 11 dip if nothing changes."
            />

            <PhraseDecoderCard
              phrase="A pleasure to teach"
              surface="The teacher likes the student."
              working="Genuinely positive. But when it appears alone with no academic observation, the teacher may be avoiding writing anything critical. Behaviour comments are safe territory. When they fill the whole box, look at the grade instead."
            />

            <PhraseDecoderCard
              phrase="Silence in the comment box"
              surface="The teacher was busy."
              working="If a teacher used to write two or three lines and this term writes only 'good work this term', that shift is worth reading. The teacher may have a specific concern they chose not to record, preferring to open a conversation instead. Ask for that conversation."
            />

            <PhraseDecoderCard
              phrase="The subject-specific tells"
              surface="Standard subject-specific phrasing."
              working={
                <span>
                  In biology: watch for 'would benefit from more precise terminology' or 'encouraged to link structure to function'. In chemistry: any comment on the mole, stoichiometry, or practical work is worth taking seriously. See <a href="/blogs/why-chemistry-fades-from-memory" className="text-[#0f4a9b] font-semibold hover:underline">why chemistry fades from memory</a> and <a href="/blogs/early-signs-chemistry-help-uae" className="text-[#0f4a9b] font-semibold hover:underline">early signs your child needs help in chemistry</a> for the pattern in more depth.
                </span>
              }
            />

            {/* 04 */}
            <SectionHeading num="04" id="effort-and-attainment-mismatch">Effort Grades and Attainment Grades: The Mismatch That Matters</SectionHeading>
            <p>Most UAE reports carry two grades per subject: an effort grade (sometimes called approach or attitude) and an attainment grade. Parents read them together. The gap between the two carries the most information, and it maps neatly onto four quadrants.</p>

            {/* 2x2 Matrix Component */}
            <div className="my-6 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 bg-[#0a1f3d] text-[11px] font-extrabold uppercase tracking-wider text-white text-center py-2.5">
                <div>LOW ATTAINMENT</div>
                <div>HIGH ATTAINMENT</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {/* Quadrant 1 */}
                <div className="p-4 bg-[#0f4a9b]/5">
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#0f4a9b] mb-1">HIGH EFFORT / LOW ATTAINMENT</span>
                  <h4 className="font-extrabold text-[#0a1f3d] text-base mb-1">Approach is wrong</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Student is trying but the study method is off. A good problem to have; effort is harder to build. Fix is in study method or exam technique, not motivation.</p>
                </div>
                {/* Quadrant 2 */}
                <div className="p-4 bg-slate-50">
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#0a1f3d] mb-1">HIGH EFFORT / HIGH ATTAINMENT</span>
                  <h4 className="font-extrabold text-[#0a1f3d] text-base mb-1">Healthy state</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Comments here will usually be detailed and specific. A suddenly generic comment feels different.</p>
                </div>
                {/* Quadrant 3 */}
                <div className="p-4 bg-slate-100/70 border-t border-slate-200">
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-700 mb-1">LOW EFFORT / LOW ATTAINMENT</span>
                  <h4 className="font-extrabold text-[#0a1f3d] text-base mb-1">Fastest response needed</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Both metrics dropping in the same term is rarely accidental. Book a meeting.</p>
                </div>
                {/* Quadrant 4 */}
                <div className="p-4 bg-[#f8fafd] border-t border-slate-200">
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#0f4a9b] mb-1">LOW EFFORT / HIGH ATTAINMENT</span>
                  <h4 className="font-extrabold text-[#0a1f3d] text-base mb-1">Coasting on ability</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Looks fine until Year 11 or 12 content jumps. Comments usually include 'has capacity for more'.</p>
                </div>
              </div>
            </div>

            <p>The follow-up piece <a href="/blogs/physics-understanding-vs-marks" className="text-[#0f4a9b] font-semibold hover:underline">why students understand physics but lose marks</a> covers the classic high effort, low attainment pattern.</p>

            {/* 05 */}
            <SectionHeading num="05" id="when-report-card-and-childs-words-do-not-match">When the Report Card and Your Child's Words Do Not Match</SectionHeading>
            <p>This is the moment parents notice first: the report shows a drop, and the child says everything is fine. Or the report is glowing, and the child seems worried.</p>
            <p>In my experience, the child is usually giving you information the report cannot capture. A Year 12 student who says 'chemistry feels heavier this year' but has an A- on the report is telling you the effort behind that A- has doubled. A Year 10 student who says 'maths is fine' but has a lower grade than last term is often protecting the parent from their own frustration, or protecting themselves from a difficult conversation.</p>
            <p>When there is a mismatch, take the child's version seriously. Reports show what has already happened, not what is happening now. What a student feels this week usually shows up on the next report, not the current one. If the child mentions anything about stress, sleep, or exam nerves, the blog <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-semibold hover:underline">what UAE parents miss about exam panic</a> is worth reading before deciding on next steps.</p>

            {/* 06 */}
            <SectionHeading num="06" id="what-to-do-in-next-48-hours">What to Do With the Report Card in the Next 48 Hours</SectionHeading>
            <p>The first 48 hours after a report arrives shape whether the term ahead improves or repeats the same pattern.</p>

            <div className="my-5 space-y-3">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="shrink-0 px-2.5 py-1 rounded-md bg-[#0f4a9b] text-white text-xs font-extrabold">HOUR 1</span>
                <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">Read the comments twice before saying anything. The first read is emotional. The second read is where the pattern shows.</p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="shrink-0 px-2.5 py-1 rounded-md bg-[#0f4a9b] text-white text-xs font-extrabold">HOUR 2</span>
                <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">Do not lead with the grade. Ask about a specific comment. 'Your maths teacher wrote that you would benefit from checking your working. What do you think she meant?' This gets a real answer. 'Why did you get a B?' does not.</p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="shrink-0 px-2.5 py-1 rounded-md bg-[#0f4a9b] text-white text-xs font-extrabold">SAME DAY</span>
                <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">Compare this term's comments to last term's for the same subject. One report tells you where the student is. Two consecutive reports tell you where they are moving.</p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="shrink-0 px-2.5 py-1 rounded-md bg-[#0f4a9b] text-white text-xs font-extrabold">DAY 2</span>
                <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">Wait until day two before deciding whether extra support is needed. Reports read differently after a night's sleep. Panic-booking tutors on the same evening rarely leads to the right match.</p>
              </div>
            </div>

            {/* 07 */}
            <SectionHeading num="07" id="when-to-ask-school-for-meeting">When to Ask the School for a Meeting</SectionHeading>
            <p>A meeting is worth requesting in three situations:</p>
            <ol className="my-3 space-y-2 pl-2">
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] font-bold text-xs flex items-center justify-center">1</span>
                <span><strong className="text-[#0a1f3d]">When a comment contains language you do not fully understand</strong> and you want the teacher to translate. Schools appreciate parents who ask rather than assume.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] font-bold text-xs flex items-center justify-center">2</span>
                <span><strong className="text-[#0a1f3d]">When the effort grade and the attainment grade have moved in opposite directions.</strong> One of them is telling a story the report format has flattened.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] font-bold text-xs flex items-center justify-center">3</span>
                <span><strong className="text-[#0a1f3d]">When a subject-specific comment references a topic your child cannot explain at home.</strong></span>
              </li>
            </ol>
            <p>Meetings work best when they are booked around a specific question. 'I want to understand what changed in chemistry between term one and term two' is answerable. 'I am worried about the report' is harder to respond to.</p>

            <InlineImage
              src="/images/blogs/parent_teacher_report_meeting.png"
              alt="Parent and teacher discussing student report card in a school office"
              caption="Booking a parent-teacher meeting around specific report card phrases helps turn general concerns into an actionable study plan."
            />

            {/* 08 */}
            <SectionHeading num="08" id="report-card-resources">Print, Save, Use Later: Report Card Resources for UAE Parents</SectionHeading>
            <p>Three practical resources to save or print for the next report card cycle. Each takes under one minute to use and works with any UAE curriculum.</p>

            <div className="my-6 space-y-4">
              {/* Resource 1 */}
              <div className="rounded-2xl border border-[#0f4a9b]/15 bg-[#f8fafd] p-5 flex items-start gap-4">
                <div className="shrink-0 flex flex-col items-center justify-center w-12 h-14 rounded-xl bg-[#0f4a9b]/10 text-[#0f4a9b] font-black text-xl leading-none">
                  <span>0</span>
                  <span>1</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-extrabold text-[#0a1f3d] text-base mb-1">The Report Card Decoder</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">One-page cheat sheet with the eight most common phrases decoded (surface reading versus working meaning). Print and keep with the term's report cards.</p>
                  <a href="/downloads/ustaad-report-card-decoder.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4a9b] hover:underline">
                    <Download className="h-3.5 w-3.5" /> Download → ustaad-report-card-decoder.pdf · under 300 KB
                  </a>
                </div>
              </div>

              {/* Resource 2 */}
              <div className="rounded-2xl border border-[#0f4a9b]/15 bg-[#f8fafd] p-5 flex items-start gap-4">
                <div className="shrink-0 flex flex-col items-center justify-center w-12 h-14 rounded-xl bg-[#0f4a9b]/10 text-[#0f4a9b] font-black text-xl leading-none">
                  <span>0</span>
                  <span>2</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-extrabold text-[#0a1f3d] text-base mb-1">The 48-Hour Parent Response Plan</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">The printable action checklist for the first two days after a report arrives. Hour-by-hour prompts, questions to ask, and what not to do.</p>
                  <a href="/downloads/ustaad-48-hour-response-plan.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4a9b] hover:underline">
                    <Download className="h-3.5 w-3.5" /> Download → ustaad-48-hour-response-plan.pdf · under 300 KB
                  </a>
                </div>
              </div>

              {/* Resource 3 */}
              <div className="rounded-2xl border border-[#0f4a9b]/15 bg-[#f8fafd] p-5 flex items-start gap-4">
                <div className="shrink-0 flex flex-col items-center justify-center w-12 h-14 rounded-xl bg-[#0f4a9b]/10 text-[#0f4a9b] font-black text-xl leading-none">
                  <span>0</span>
                  <span>3</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-extrabold text-[#0a1f3d] text-base mb-1">Parent-Teacher Meeting Question Template</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">A short template of specific, answerable questions to bring to a meeting instead of general concerns. One version for high effort or low attainment, one for silence in the comment box, one for a subject-specific concern.</p>
                  <a href="/downloads/ustaad-parent-teacher-questions.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4a9b] hover:underline">
                    <Download className="h-3.5 w-3.5" /> Download → ustaad-parent-teacher-questions.pdf · under 300 KB
                  </a>
                </div>
              </div>
            </div>

            <div className="my-4 p-3.5 rounded-xl bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-xs text-[#0a1f3d] leading-relaxed">
              <strong className="text-[#0f4a9b]">Parent Note:</strong> Downloadable PDF cheat sheets and meeting templates can be saved or printed ahead of term-end parent-teacher meetings. All files follow Ustaad parent reference design guidelines.
            </div>

            {/* Related Reading section */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-base font-extrabold text-[#0a1f3d] mb-3">Related reading from the Ustaad blog</h3>
              <ul className="space-y-2 text-xs lg:text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                  <a href="/blogs/igcse-maths-revision-low-marks" className="text-[#0f4a9b] font-semibold hover:underline">Why IGCSE students forget maths in exams</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                  <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-semibold hover:underline">What UAE parents miss about exam panic</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                  <a href="/blogs/igcse-physics-formulas-exam" className="text-[#0f4a9b] font-semibold hover:underline">Why IGCSE physics formulas stop working in exams</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                  <a href="/blogs/physics-understanding-vs-marks" className="text-[#0f4a9b] font-semibold hover:underline">Why students understand physics but lose marks</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                  <a href="/blogs/why-chemistry-fades-from-memory" className="text-[#0f4a9b] font-semibold hover:underline">Why chemistry fades from memory</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                  <a href="/blogs/early-signs-chemistry-help-uae" className="text-[#0f4a9b] font-semibold hover:underline">Early signs your child needs help in chemistry</a>
                </li>
              </ul>
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
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-28 mt-4">Nimra Shahzada | Education Counsellor at Ustaad UAE</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nimra Shahzada holds a Bachelor's degree in Psychology and works as an Education Counsellor with children across different school settings and age groups. Her work focuses on parent communication, report interpretation, and early-stage learning support. She helps families notice the small routine shifts that appear before performance drops.</p>
            </div>
            <div className="relative rounded-2xl border border-[#0f4a9b]/10 bg-gradient-to-br from-white to-[#f8fafd] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#0f4a9b] border border-[#0f4a9b]/15 bg-[#0f4a9b]/5">Reviewed By</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-24 mt-4">Nida Iqbal | MPhil in Education Leadership and Management</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nida Iqbal reviewed this article for educational accuracy and parent relevance, ensuring the guidance reflects sound classroom practice for UAE families navigating report card season.</p>
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
            <h3 className="text-lg lg:text-xl font-extrabold text-white mb-2">Need help translating your child's report card into a clear study plan?</h3>
            <p className="text-white/75 mb-5 max-w-lg mx-auto text-sm">
              Our UAE education counsellors and subject specialist tutors can help decode subject reports, identify core learning gaps, and build a targeted revision roadmap.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="/contact#form"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white hover:brightness-110 transition text-sm sm:w-auto"
                style={{ background: 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)' }}>
                Book a Free Consultation →
              </a>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
