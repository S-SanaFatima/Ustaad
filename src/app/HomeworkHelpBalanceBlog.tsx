import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  User,
  Clock,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Mail,
  Home,
  ChevronRight as ChevronRightIcon,
  MessageCircle,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Share2,
  Download,
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: "How Much Should Parents Help With Homework? | Ustaad UAE",
  h1: "How Much Should Parents Help With Homework? A UAE Parent's Guide to Getting the Balance Right",
  titleLine1: "How Much Should Parents Help With Homework?",
  titleLine2: "A UAE Parent's Guide to Getting the Balance Right",
  categoryBadge: "PARENT GUIDANCE",
  slug: "how-much-should-parents-help-with-homework",
  description:
    "How much homework help is too much? A practical UAE parent's guide to supporting your child without doing the work for them, by subject and age.",
  subtitle:
    "How much homework help is too much? A practical UAE parent's guide to supporting your child without doing the work for them, by subject and age.",
  heroImage: "/images/blogs/homework-help-balance-uae-parent-child.webp",
  heroAlt: "Mother sitting beside her son at a study desk at home in the UAE as he writes independently in his notebook",
  heroCaption: "The most useful kind of homework help is often the kind that makes itself unnecessary over time.",
  datePublished: "2026-10-05",
  dateModified: "2026-10-05",
  publishedText: "5 Oct 2026",
  author: "Nimra Shahzada",
  authorFull: "Nimra Shahzada | Writer on learning and the psychology of studying",
  authorUrl: "/authors/nimra-shahzada",
  reviewer: "Ustaad Editorial Team",
  reviewerUrl: "/editorial",
  readTime: "9 min read",
  tags: [
    "Homework Help",
    "Parent Guidance",
    "Study Independence",
    "British Curriculum UAE",
    "IGCSE Homework",
    "Academic Confidence",
  ],
};

const FAQS = [
  {
    q: "How much should parents help with homework?",
    a: "Enough to get a child started and unstuck when they are genuinely stuck, not enough to produce the answer for them. A useful check is whether the finished work reflects the child's own understanding or yours.",
  },
  {
    q: "Is it bad to sit with my child while they do homework?",
    a: "Not at all, particularly for younger children. The distinction is between being present and available versus actively supplying answers or corrections throughout.",
  },
  {
    q: "My child says the homework method is different from what I learned. What should I do?",
    a: "Say so honestly, and have them check their class notes or textbook rather than teaching your version. A second method can confuse them while the class is learning another one.",
  },
  {
    q: "Should older students (IGCSE, A-Level, IB) still get homework help from parents?",
    a: "Mostly in the form of structure and logistics (planning, time management, reducing stress) rather than content. Independent working is itself part of what is being assessed at these levels.",
  },
  {
    q: "How do I know if my child needs a tutor rather than just more homework help from me?",
    a: "If you find yourself reteaching whole topics most evenings, across more than one subject, that is usually a sign the gap is bigger than homework support alone can close. A conversation with the teacher or a short, targeted block of tutoring is often faster and less stressful for everyone.",
  },
];

const TOC_ITEMS = [
  { label: "The two mistakes parents make with homework", id: "two-mistakes-parents-make" },
  { label: "What homework is actually supposed to do", id: "what-homework-is-supposed-to-do" },
  { label: "A simple test: whose work is it?", id: "simple-test-whose-work-is-it" },
  { label: "How much help looks right, by age", id: "how-much-help-by-age" },
  { label: "By subject: where to step in and where to step back", id: "by-subject-where-to-step-in-step-back" },
  { label: "The questions to ask instead of giving answers", id: "questions-to-ask-instead-of-giving-answers" },
  { label: "When a struggle is useful and when it is not", id: "when-struggle-is-useful-and-not" },
  { label: "Homework and tutoring: where one ends and the other begins", id: "homework-and-tutoring-boundaries" },
  { label: "Red flags that homework stress has become something more", id: "red-flags-homework-stress" },
  { label: "A simple homework check-in routine", id: "simple-homework-check-in-routine" },
  { label: "Frequently asked questions", id: "faqs" },
  { label: "Sources and further reading", id: "sources" },
];

const THEME_GRADIENT = "linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)";

function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-10 mb-4 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/50 tracking-wider mb-1">{num}</span>
      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] leading-snug tracking-tight">{children}</h2>
    </div>
  );
}

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mx-auto my-7 max-w-xl">
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

function NarrativeBox({ label = "PARENT TAKEAWAY", children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/15 bg-gradient-to-br from-white to-[#f8fafd] p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="h-4 w-4 text-[#C7A24A]" />
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#0a1f3d]">{label}</span>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed font-serif italic">{children}</div>
    </div>
  );
}

function SocialShare({ url, title }: { url: string; title: string }) {
  const enc = encodeURIComponent(url);
  const encT = encodeURIComponent(title);
  return (
    <div className="flex items-center gap-1.5 ml-auto">
      <a
        href={`https://twitter.com/intent/tweet?url=${enc}&text=${encT}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500 hover:text-[#0f4a9b]"
        aria-label="Share on X"
      >
        <span className="text-xs font-bold">𝕏</span>
      </a>
      <a
        href={`https://wa.me/?text=${encT}%20${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 transition text-[#25D366]"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="h-3.5 w-3.5" />
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
                  cursor: 'pointer',
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
                  borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)',
                }}
              >
                <span className="flex-1 text-xs sm:text-[13px] font-bold text-gray-700 leading-snug">
                  {faq.q}
                </span>
                <span
                  className="text-xs text-gray-400 transition-transform duration-200"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  ▼
                </span>
              </button>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div
                    className="ml-11 mr-2 p-3.5 rounded-xl border text-xs text-gray-600 leading-relaxed bg-slate-50"
                    style={{ borderColor: 'rgba(15,74,155,0.1)' }}
                  >
                    {faq.a}
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

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function HomeworkHelpBalanceBlog() {
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
        preloadHeroImage={BLOG.heroImage}
        author={BLOG.author}
        placename="United Arab Emirates"
        ogType="article"
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Parent Guidance', url: '/blogs/parent-guidance' },
            { name: 'Homework Balance', url: canonical },
          ]),
          articleSchema({
            title: BLOG.h1,
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: {
              name: BLOG.author,
              url: '/authors/nimra-shahzada',
              jobTitle: 'Content Writer, Study and Exam Topics',
            },
            reviewer: {
              name: BLOG.reviewer,
              url: '/authors/nida-iqbal',
              jobTitle: 'Editorial Reviewer',
            },
            image: BLOG.heroImage,
            timeRequired: 'PT9M',
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
          <a href="/blogs/parent-guidance" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">
            Parent Guidance
          </a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">Homework Help Balance</span>
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
                    {' '}<span className="text-gray-500">| Every guide is checked for syllabus accuracy and parent clarity</span>
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
            <figcaption className="mt-2 text-center text-xs text-gray-400 italic">
              {BLOG.heroCaption}
            </figcaption>
          </figure>

          {/* Intro Narrative */}
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              A parent in Dubai sits beside her Year 7 son most evenings, not because the school asked her to, but because without her there the worksheet does not get finished. She reads the question aloud, breaks it into steps, and sometimes, when he is tired and it is late, she tells him the next line so they can both get to bed.
            </p>
            <p>
              Across town, another parent takes the opposite approach. She hands her daughter the homework and leaves the room, on the principle that children need to learn to struggle. The daughter, confused by a method the class moved past weeks ago, fills the page with guesses and closes the book feeling worse than when she opened it.
            </p>
            <p>
              Neither parent is doing anything unreasonable. Both are responding, sensibly, to a question that schools rarely answer clearly: how much help is actually helpful? This guide sets out a practical answer, by age and by subject, and a simple way to tell when you are helping and when you have started doing the work yourself.
            </p>
          </div>

          {/* Table of contents */}
          <TOC open={tocOpen} setOpen={setTocOpen} />

          {/* 01. The two mistakes parents make with homework */}
          <SectionHeading num="01" id="two-mistakes-parents-make">
            The two mistakes parents make with homework
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Almost every pattern of homework help falls into one of two failure modes, and they look very different from the outside.
            </p>
            <p>
              <strong>Over-helping</strong> looks caring and often feels necessary in the moment. A parent sits with the child for the whole session, supplies the method, corrects errors as they appear, and occasionally just writes the answer because it is 9 p.m. and everyone is exhausted. The homework gets done, often to a high standard. What does not happen is the child discovering, on their own, what they do and do not understand.
            </p>
            <p>
              <strong>Under-helping</strong> looks like building independence and often is, but not always. A parent who steps back completely assumes the child has the tools to struggle productively. Younger children and children who are already behind usually do not. Left alone with material they cannot access, they do not practise resilience; they practise confusion, and often disengagement.
            </p>
            <p>
              The useful target sits between the two: present, but not holding the pen.
            </p>

            <NarrativeBox label="PARENT TAKEAWAY">
              <p className="font-semibold text-[#0a1f3d]">
                The question is rarely "should I help?" It is "what kind of help am I giving, and whose understanding is actually growing from it?"
              </p>
            </NarrativeBox>
          </div>

          {/* 02. What homework is actually supposed to do */}
          <SectionHeading num="02" id="what-homework-is-supposed-to-do">
            What homework is actually supposed to do
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Before deciding how to help, it is worth being clear on what homework is for, because the two common purposes call for different kinds of support.
            </p>
            <p>
              <strong>Practice homework</strong> (a worksheet of similar problems, a reading comprehension, a set of past questions) is meant to consolidate something already taught in class. The right kind of help here is a nudge in the right direction when the child is stuck, not a demonstration of the method.
            </p>
            <p>
              <strong>New-material homework</strong> (a flipped-classroom video to watch before a lesson, a research task, an open-ended project) asks the child to encounter something for the first time alone. This kind can carry more parent involvement, because the child has not yet had a teacher explain it, and a parent reading alongside is closer to being a second source of instruction than someone correcting work.
            </p>

            {/* IMAGE: Open-ended project work */}
            <InlineImage
              src="/images/blogs/parent-child-open-ended-project-homework.webp"
              alt="Mother and daughter collaborating on a creative building project at a desk at home in the UAE"
              caption="Open-ended projects and new material naturally benefit from collaborative exploration without taking over the thinking."
            />

            <p>
              Confusing the two is a common source of friction. A parent who treats a practice worksheet like new material ends up re-teaching the whole topic, which both takes far longer than the homework was meant to and quietly tells the child that the version from class was not enough.
            </p>
          </div>

          {/* 03. A simple test: whose work is it? */}
          <SectionHeading num="03" id="simple-test-whose-work-is-it">
            A simple test: whose work is it?
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Here is a question worth asking yourself partway through any homework session: if a teacher looked at this answer, whose understanding would it reflect?
            </p>

            {/* Comparison Table */}
            <div className="my-5 rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#0f4a9b] text-white">
                      <th className="p-3 w-1/3 font-bold border-r border-white/10">Scenario</th>
                      <th className="p-3 w-1/3 font-bold border-r border-white/10">Appropriate Help</th>
                      <th className="p-3 w-1/3 font-bold">Over-Helping</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">Starting a stuck problem</td>
                      <td className="p-3 border-r border-slate-100 text-emerald-700 font-medium">"What's the first thing you know for certain here?"</td>
                      <td className="p-3 text-rose-600">Working through the first two steps for them</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-[#f8fafd]">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">A wrong answer</td>
                      <td className="p-3 border-r border-slate-100 text-emerald-700 font-medium">Pointing to which line it went wrong, letting them fix it</td>
                      <td className="p-3 text-rose-600">Correcting it and explaining why</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">An unfamiliar word</td>
                      <td className="p-3 border-r border-slate-100 text-emerald-700 font-medium">Asking them to guess from context first, then confirming</td>
                      <td className="p-3 text-rose-600">Defining it immediately</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-[#f8fafd]">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">Running out of time</td>
                      <td className="p-3 border-r border-slate-100 text-emerald-700 font-medium">Stopping and telling the teacher honestly</td>
                      <td className="p-3 text-rose-600">Finishing it so it looks complete</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 border-r border-slate-100 font-semibold text-slate-700">A whole essay or project</td>
                      <td className="p-3 border-r border-slate-100 text-emerald-700 font-medium">Reading a draft and asking questions about it</td>
                      <td className="p-3 text-rose-600">Rewriting sentences or paragraphs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* IMAGE 2 */}
            <InlineImage
              src="/images/blogs/parent-child-homework-question-prompt.webp"
              alt="Mother in a hijab guiding her son through a maths exercise at a study desk at home in the UAE"
              caption="Pointing gently to the exact step where thinking broke down preserves student ownership."
            />

            <p>
              The right-hand column is not always wrong in isolation, a tired child on a Thursday night sometimes just needs to get to bed, but if it becomes the pattern, the homework stops being a signal of what the child can do, for the child, the teacher, or you.
            </p>
          </div>

          {/* 04. How much help looks right, by age */}
          <SectionHeading num="04" id="how-much-help-by-age">
            How much help looks right, by age
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Independence is a skill, not a switch, and it is built gradually across school years.
            </p>
            <p>
              <strong>Primary years (roughly ages 5 to 10).</strong> Sitting nearby is usually appropriate, and for the youngest children, necessary. Read instructions together if reading is still developing. Help them get started and get organised. The goal at this stage is mostly about building the habit of sitting down and finishing something, more than independent problem-solving.
            </p>
            <p>
              <strong>Middle years (roughly ages 11 to 13).</strong> This is the stage to deliberately step back. Be available in the house, not at the desk. Check the homework is complete and ask what they found hard, rather than reviewing every answer. Mistakes that survive to the teacher are useful information for the teacher.
            </p>
            <p>
              <strong>IGCSE and GCSE years (roughly ages 14 to 16).</strong> Support shifts from the content to the system around it: helping them plan a week with five subjects' worth of homework, checking a revision timetable is realistic, asking about exam board specifics. Direct content help should be rare and specific (a single topic that genuinely was not covered well in class), not routine.
            </p>
            <p>
              <strong>A-Level and IB years (roughly ages 16 to 18).</strong> Independent learning is itself part of what is being assessed, particularly in IB Internal Assessments and A-Level extended writing. The useful parental role here is almost entirely logistical and emotional: protecting time, asking how a piece of coursework is going, noticing stress. Content help at this stage, even well-intentioned, more often gets in the way than it helps, and coursework at this level must be the student's own work.
            </p>

            {/* Infographic: Homework help by age */}
            <InlineImage
              src="/images/blogs/homework-help-by-age.webp"
              alt="Chart showing how much homework help suits each age group, from primary to A-Level and IB"
            />
          </div>

          {/* 05. By subject: where to step in and where to step back */}
          <SectionHeading num="05" id="by-subject-where-to-step-in-step-back">
            By subject: where to step in and where to step back
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Subjects differ in how safely a parent can help without accidentally doing the thinking.
            </p>
            <p>
              <strong>Maths and sciences.</strong> These are method-driven subjects where there is usually one correct process, and it is tempting to simply show it. The safer move is to ask the child to explain their working so far out loud; the gap in their explanation usually reveals where they went wrong, without you supplying the fix. If the method being taught now is different from the one you learned, say so honestly and let them check their notes rather than teaching your version, since a second method can confuse them while the class is learning another one.
            </p>
            <p>
              <strong>English and humanities.</strong> The temptation here is editing: smoothing a sentence, adding a stronger word, restructuring a paragraph. Teachers can usually tell when writing has shifted register partway through a piece, and overly polished homework from a struggling writer sometimes does more harm than good at the next assessment, when the support is not there. Ask questions about the draft instead: "What's your main point in this paragraph?" is more useful than rewriting it.
            </p>
            <p>
              <strong>Languages.</strong> Vocabulary and pronunciation support are low-risk, since there is little room to accidentally take over the thinking. Full sentence construction and translation are higher-risk, for the same reasons as essay writing.
            </p>
            <p>
              <strong>Research and project work.</strong> Helping a child find and evaluate sources is a genuinely useful, teachable skill. Choosing their argument or writing their analysis for them is not.
            </p>
          </div>

          {/* 06. The questions to ask instead of giving answers */}
          <SectionHeading num="06" id="questions-to-ask-instead-of-giving-answers">
            The questions to ask instead of giving answers
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              A short list of prompts covers most situations where the instinct is to simply explain:
            </p>

            <ul className="space-y-2.5 my-3 pl-2">
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span><em>"What do you already know that might help here?"</em></span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span><em>"Where exactly did you get stuck? Show me the last thing you were sure about."</em></span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span><em>"What would happen if you tried it this way?"</em></span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span><em>"Is there an example in your notes or textbook that's similar?"</em></span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] mt-1.5 shrink-0" />
                <span><em>"What did your teacher say about this in class?"</em></span>
              </li>
            </ul>

            <p>
              These work because they hand the next step back to the child instead of taking it. If the question genuinely has them stuck beyond what a nudge can fix, that is useful information to flag to the subject teacher, not a reason to reteach the whole topic at the kitchen table.
            </p>
          </div>

          {/* 07. When a struggle is useful and when it is not */}
          <SectionHeading num="07" id="when-struggle-is-useful-and-not">
            When a struggle is useful and when it is not
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Not all struggle is the same, and this is where the two mistakes in section 01 usually come from: a reasonable instinct applied to the wrong situation.
            </p>
            <p>
              <strong>Productive struggle</strong> happens when a child has the underlying knowledge but has not yet connected it to this particular problem. Given a little time and a nudge, they get there, and what they remember afterwards tends to be more durable than if they had been shown the answer. This is worth protecting, even when it is slow.
            </p>
            <p>
              <strong>Unproductive struggle</strong> happens when the child is missing a foundational piece entirely, a method never properly understood, vocabulary never learned, and no amount of staring at the page will produce it. Here, persistence just produces frustration and, over time, a belief that they are "bad at" the subject. This is the moment to step in, briefly, with the missing piece, and then let them continue independently.
            </p>
            <p>
              Telling the two apart is mostly a matter of time: if a child is stuck but still actively trying different approaches, give it a few more minutes. If they have stopped trying and are just staring at the page or getting visibly upset, that is unproductive struggle, and it is time to help.
            </p>

            {/* Infographic: Stuck on homework wait or step in */}
            <InlineImage
              src="/images/blogs/homework-struggle-wait-or-step-in.webp"
              alt="Two cards comparing productive and unproductive homework struggle, with what a parent should do in each case"
            />
          </div>

          {/* 08. Homework and tutoring: where one ends and the other begins */}
          <SectionHeading num="08" id="homework-and-tutoring-boundaries">
            Homework and tutoring: where one ends and the other begins
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              A pattern worth naming honestly: if homework help at home has turned into reteaching entire topics most nights, across multiple subjects, that is no longer homework support. It is informal, unplanned tutoring, usually delivered by an exhausted parent after a full working day, without a lesson plan or a diagnostic sense of what is actually missing.
            </p>
            <p>
              This is not a failure on the parent's part. It is simply a sign that the gap is bigger than an evening's nudge can close, and that a structured, diagnostic conversation with the subject teacher, or a short, targeted block with <a href="/tutors" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">an online 1-to-1 tutor</a>, is likely to close it faster and with far less friction at home. Our guide on{' '}
              <a href="/blogs/private-tutoring-uae-parent-guide" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                private tutoring in the UAE
              </a>{' '}
              covers how to tell whether a single topic gap or a broader pattern is behind the struggle, and how to choose the right kind of support.
            </p>

            {/* IMAGE: Homework vs Tutoring Boundary */}
            <InlineImage
              src="/images/blogs/homework-help-vs-tutoring-boundary.webp"
              alt="Father reading in an armchair while his son does his homework on his own at a desk at home in the UAE"
              caption="When nightly homework help turns into re-teaching, a structured plan can take the pressure off the evenings."
            />

            <NarrativeBox label="PARENT TAKEAWAY">
              <p className="font-semibold text-[#0a1f3d]">
                If homework help has quietly become a nightly re-teaching session, that is a signal to get outside support, not a sign you are not helping enough.
              </p>
            </NarrativeBox>
          </div>

          {/* 09. Red flags that homework stress has become something more */}
          <SectionHeading num="09" id="red-flags-homework-stress">
            Red flags that homework stress has become something more
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              Most homework friction is ordinary and improves with a clearer approach. Some signs are worth taking more seriously:
            </p>

            <ul className="space-y-2.5 my-3 pl-2">
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span>Tears, shutdowns or refusal most evenings, not just occasionally</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span>Homework consistently taking far longer than the time the school estimates for it</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span>A child who says they "can't do" an entire subject, rather than a specific topic</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span>Avoidance behaviours: claiming homework does not exist, hiding it, or losing it repeatedly</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span>A sustained drop in confidence that extends beyond homework into how they talk about school generally</span>
              </li>
            </ul>

            {/* IMAGE 3: Student thinking / stress reflection */}
            <InlineImage
              src="/images/blogs/student-thinking-through-stuck-problem.webp"
              alt="Teenage student pausing to think about a homework problem at his desk by a window"
              caption="Recognising when normal homework friction turns into chronic overwhelm is the key to stepping in with targeted support."
            />

            <p>
              If several of these persist over weeks, it is worth raising directly with the class or subject teacher, who can say whether what you are seeing at home matches what they see in class. Our guide on{' '}
              <a href="/blogs/read-uae-school-report-card" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                reading a UAE school report card
              </a>{' '}
              has more on spotting early signs before they show up formally in grades, and our guide on{' '}
              <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                managing exam panic
              </a>{' '}
              offers practical guidance if stress escalates near assessment season.
            </p>
          </div>

          {/* 10. A simple homework check-in routine */}
          <SectionHeading num="10" id="simple-homework-check-in-routine">
            A simple homework check-in routine
          </SectionHeading>
          <div className="space-y-3.5 text-sm lg:text-[15px] text-gray-700 leading-[1.8] text-justify">
            <p>
              A short, repeatable structure removes a lot of the nightly negotiation:
            </p>

            <div className="space-y-2.5 my-4">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-[#f8fafd]">
                <p className="text-xs font-bold text-[#0a1f3d] mb-1">1. Before starting</p>
                <p className="text-xs text-gray-600">Ask what the homework is and roughly how long the school expects it to take. This sets a natural stopping point.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-[#f8fafd]">
                <p className="text-xs font-bold text-[#0a1f3d] mb-1">2. During</p>
                <p className="text-xs text-gray-600">Stay nearby or check in once, rather than sitting through the whole thing. Step in only when the struggle looks unproductive (section 07).</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-[#f8fafd]">
                <p className="text-xs font-bold text-[#0a1f3d] mb-1">3. If the time runs out</p>
                <p className="text-xs text-gray-600">Stop. An honest note to the teacher that it was not finished in the expected time is more useful information than a late night and a resentful child.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-[#f8fafd]">
                <p className="text-xs font-bold text-[#0a1f3d] mb-1">4. Afterwards</p>
                <p className="text-xs text-gray-600">Ask one open question, "What was the hardest part?", rather than checking every answer. Hard parts are the useful signal to carry into the next class or the next conversation with the teacher.</p>
              </div>
            </div>

            {/* Downloadable Attachment Box */}
            <div className="my-7 p-6 sm:p-7 rounded-[22px] border border-slate-200 bg-[#f8fafd] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="space-y-1.5 max-w-md">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] tracking-tight">
                  Print the homework check-in sheet
                </h3>
                <p className="text-xs sm:text-[13.5px] text-gray-500 leading-relaxed">
                  One page with the four steps, the five questions to ask, and a weekly log you can show the teacher.
                </p>
              </div>
              <a
                href="/homework-check-in-sheet-ustaad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="homework-check-in-sheet-ustaad.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#0f4a9b] hover:bg-[#0a3a79] transition shadow-xs hover:shadow shrink-0"
              >
                <Download className="h-4 w-4" />
                Download the PDF
              </a>
            </div>

            <p>
              This keeps a parent genuinely involved without becoming the one doing the thinking, and it gives both the child and the school honest information about what is and is not landing.
            </p>
          </div>

          {/* 11. Frequently asked questions */}
          <SectionHeading num="11" id="faqs">
            Frequently asked questions
          </SectionHeading>
          <div className="my-5">
            <FAQAccordion />
          </div>

          {/* 12. Sources and further reading */}
          <SectionHeading num="12" id="sources">
            Sources and further reading
          </SectionHeading>
          <div className="space-y-2.5 my-4 text-xs text-gray-600 leading-relaxed bg-[#f8fafd] p-4 rounded-xl border border-slate-200">
            <p>• Cooper, H., Robinson, J. C., &amp; Patall, E. A. (2006). Does homework improve academic achievement? A synthesis of research, 1987–2003. <em>Review of Educational Research</em>.</p>
            <p>• Patall, E. A., Cooper, H., &amp; Robinson, J. C. (2008). Parent involvement in homework: A research synthesis. <em>Review of Educational Research</em>.</p>
            <p>• Pomerantz, E. M., Moorman, E. A., &amp; Litwack, S. D. (2007). The how, whom, and why of parents' involvement in children's academic lives. <em>Review of Educational Research</em>.</p>
          </div>

          {/* Related Guides */}
          <div className="my-8 p-5 rounded-2xl border border-slate-200 bg-white">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-3">Related Guides on Parent Guidance</h3>
            <div className="space-y-2 text-xs">
              <a href="/blogs/private-tutoring-uae-parent-guide" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">Private Tutoring in the UAE: A Complete Parent Guide</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/read-uae-school-report-card" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">How to Read a UAE School Report Card Like an Education Counsellor</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-0.5 transition" />
              </a>
              <a href="/blogs/gcse-revision-tips-uae-parents" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-gray-700 hover:text-[#0f4a9b] transition group">
                <span className="font-semibold">GCSE &amp; IGCSE Revision Tips UAE: Skills That Raise Grades</span>
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
                Nimra writes about the study problems UAE parents see at home: children who revise for hours but still lose marks, homework that never gets finished, and exam stress that builds before mocks.
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
                Every guide is checked for syllabus accuracy and parent clarity before it is published.
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
              Not sure if it's a homework gap or something bigger?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-lg mx-auto">
              An Ustaad curriculum specialist can run a short online 1-to-1 session with your child, work out exactly which topics need rebuilding, and show you where a tutor's help would actually save your evenings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="/contact#form"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-xs sm:text-sm w-full sm:w-auto shadow-md"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
              >
                Book a Free Trial
              </a>
              <a
                href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20have%20a%20question%20about%20homework%20support%20and%20diagnostics."
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
