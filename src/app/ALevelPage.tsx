import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom, BookOpen, Brain, Briefcase, Calculator, ChevronDown,
  Dna, FileText, FlaskConical, GraduationCap, HelpCircle, Landmark,
  MapPin, MessageCircle, PenTool, Target, TrendingUp, Lightbulb,
  ArrowRight, ShieldCheck,
} from 'lucide-react';
import { Layout, GradientHeadingText, FinalCTA, StatsBar, GoldButton, WhatsAppIcon } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const aLevelSchemaFaqs = [
  {
    q: "Are A-Level lessons online or in person?",
    a: "All lessons are live, one-to-one and online. A student in Dubai, Sharjah or Al Ain has the same choice of tutors, with no travel time."
  },
  {
    q: "Can we book a tutor for one A-Level subject only?",
    a: "Yes. You can start with a single subject and add another later; each subject has its own specialist tutor."
  },
  {
    q: "Which A-Level exam boards do you support?",
    a: "Cambridge International, Pearson Edexcel International, AQA, and OCR. Tutors are paired with the exact specification your child's school sits."
  },
  {
    q: "How many A-Level subjects should students take?",
    a: "Most students take three subjects, sometimes four where Further Mathematics fits the timetable. The right combination depends on the universities and courses being considered."
  },
  {
    q: "Do you help students prepare for university entrance tests?",
    a: "Yes. Common tests include the LNAT, TMUA, UCAT, and Oxford and Cambridge subject-specific admissions papers, all of which Ustaad covers."
  },
  {
    q: "When should A-Level preparation realistically begin?",
    a: "The strongest results come from steady support across both Year 12 and Year 13. Catching ground earlier in Year 12 is much easier than catching up in the months before final papers."
  },
  {
    q: "Do you support the Extended Project Qualification (EPQ)?",
    a: "Yes. EPQ support covers topic choice, research planning, written drafts, and presentation rehearsal, all aligned with how examiners mark each section."
  },
  {
    q: "What is the difference between AS-Level and A-Level?",
    a: "AS-Level covers the first year of A-Level study and can be sat as a standalone qualification on some specifications. Most UAE schools now follow linear A-Level, with all papers sat at the end of Year 13."
  },
  {
    q: "Do you support both linear and modular A-Level specifications?",
    a: "Yes. Cambridge International runs modular AS plus A2 examinations, while UK-based linear A-Levels sit all papers at the end of Year 13. Tutors work with whichever route the student is on."
  },
  {
    q: "Can A-Level support also help with predicted grades?",
    a: "Yes. Predicted grades carry significant weight in university applications, and stronger preparation through Year 12 directly improves the predicted grades a school will issue."
  },
];

const WA_URL = "https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20need%20an%20A-Level%20tutor%20for";

export default function ALevelPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      <SEOHead
        title="A-Level Tutors in Dubai, Abu Dhabi & UAE | Ustaad"
        description="Online 1-to-1 AS and A-Level tutors for Cambridge, Edexcel, AQA and OCR. Maths, Physics, Chemistry, Biology and more. Free 30-minute trial."
        canonical="/a-level"
        ogImage="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp"
        schema={[
          localBusinessSchema,
          serviceSchema(
            "Private A-Level Tutoring UAE",
            "Online 1-to-1 AS and A-Level tutors for Cambridge, Edexcel, AQA and OCR. Maths, Physics, Chemistry, Biology and more. Free 30-minute trial.",
            "/a-level"
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Curriculum", url: "/curriculum" },
            { name: "A-Level", url: "/a-level" }
          ]),
          faqSchema(aLevelSchemaFaqs),
        ]}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative w-full min-h-[520px] lg:min-h-[580px] xl:min-h-[620px] flex items-center overflow-hidden">
        {/* Background image with blur */}
        <img
          src="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp"
          srcSet="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp 1x, /UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.jpeg 2x"
          alt="Ustaad tutor supporting Year 12 and Year 13 A-Level students through Cambridge Edexcel and AQA exam preparation across the UAE"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
          width={1200}
          height={800}
          fetchPriority="high"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl pr-6 sm:pr-0"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <Landmark className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> A-Level
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold text-[#0a1f3d] mb-2 leading-[1.15] tracking-tight">
              A-Level Tutors in Dubai and Across the UAE
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-bold text-[#0f4a9b] mb-2.5 leading-snug">
              AS and A-Level subject specialists for Year 12 and Year 13.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3" />
            <p className="text-gray-700 text-sm sm:text-base mb-2.5 leading-relaxed max-w-xl">
              One-to-one online tutoring for Cambridge, Edexcel, AQA and OCR. Your child works with a tutor who teaches their subject and follows their school's specification.
            </p>
            <p className="text-[#0f4a9b] text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
              Based in Abu Dhabi? See our dedicated{' '}
              <a href="/a-level-tutor-abu-dhabi" className="underline font-bold hover:text-[#0a1f3d]">
                A-Level Tutor Abu Dhabi
              </a>{' '}
              page.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-2.5">
              <GoldButton
                href="/contact#form"
                className="w-full sm:w-auto px-7 py-3 text-sm shadow-[0_0_20px_rgba(199,162,74,0.35)] text-center justify-center"
              >
                Book a Free A-Level Trial
              </GoldButton>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask on WhatsApp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all duration-200"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              Free 30-minute trial. No commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* ── SECTION 2: A-LEVEL SUBJECTS WE COVER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Curriculum Coverage</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="A-Level Subjects We Cover" />
            </h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Choose a subject to see how we teach it.
            </p>
          </div>

          {(() => {
            const subjects = [
              { name: "A-Level Maths", desc: "Differentiation · Integration · Differential Equations", href: "/maths", wm: <Calculator className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "A-Level Physics", desc: "Quantum Mechanics · Fields · Particle Physics", href: "/physics", wm: <Atom className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "A-Level Chemistry", desc: "Transition Metals · Aromatic Chemistry · Spectroscopy", href: "/chemistry", wm: <FlaskConical className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "A-Level Biology", desc: "Gene Expression · Nervous Coordination · Populations", href: "/biology", wm: <Dna className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "A-Level English", desc: "Tragedy · Drama · Unseen Prose", href: "/english", wm: <BookOpen className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "A-Level Business", desc: "Strategic Direction · Global Business · Investment Appraisal", href: "/business", wm: <Briefcase className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
            ];
            const Card = ({ subj, i }: { subj: typeof subjects[0]; i: number }) => (
              <a
                href={subj.href}
                className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden"
              >
                <div className="absolute bottom-3 right-3 pointer-events-none select-none">{subj.wm}</div>
                <span className="text-sm font-bold text-[#0f4a9b] tabular-nums relative z-10">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10 flex items-center justify-between">
                  <span>{subj.name}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#0f4a9b]" />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{subj.desc}</p>
              </a>
            );
            return (
              <div className="max-w-5xl mx-auto mb-8 border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
                  {subjects.slice(0, 3).map((subj, i) => (
                    <Card key={i} subj={subj} i={i} />
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                  {subjects.slice(3).map((subj, i) => (
                    <Card key={i + 3} subj={subj} i={i + 3} />
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Also Available */}
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-[0_8px_32px_rgba(15,74,155,0.25)]">
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#C7A24A]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.1)]">
                <Lightbulb className="h-5 w-5 text-[#C7A24A]" />
              </div>
              <div className="relative flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C7A24A] mb-0.5">Also Available</p>
                <p className="text-white/90 text-sm font-medium leading-snug">
                  Further Mathematics,{' '}
                  <a href="/economics" className="text-[#C7A24A] font-bold underline hover:text-white transition-colors">
                    Economics
                  </a>
                  , and Computer Science are also covered where needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HOW USTAAD TUTORS A-LEVEL STUDENTS ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Tutoring Method</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="How Ustaad Tutors A-Level Students" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Four things an Ustaad tutor does across the two A-Level years.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Address Gaps Early",
                desc: "Year 11 trigonometry gaps surface in Year 12 Mechanics within the first half-term.",
                icon: <Target className="h-7 w-7" />,
                wm: <Target className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} />,
              },
              {
                title: "Mixed-Topic Practice",
                desc: "Tutors set questions that combine two or more topics, the format the higher-mark papers use.",
                icon: <Brain className="h-7 w-7" />,
                wm: <Brain className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} />,
              },
              {
                title: "Past-Paper Marking",
                desc: "Timed papers are marked against the board's mark scheme, and every lost mark is explained.",
                icon: <PenTool className="h-7 w-7" />,
                wm: <PenTool className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} />,
              },
              {
                title: "Two-Year Rhythm",
                desc: "Year 12 mocks in May, Year 13 mocks in November, final papers from May.",
                icon: <TrendingUp className="h-7 w-7" />,
                wm: <TrendingUp className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} />,
              },
            ].map((m, i) => (
              <div
                key={i}
                className="relative bg-white border border-[#0f4a9b]/10 rounded-[24px] p-6 sm:p-8 pt-8 sm:pt-10 flex flex-col items-start text-left hover:shadow-[0_8px_32px_rgba(15,74,155,0.10)] hover:border-[#0f4a9b]/40 hover:ring-2 hover:ring-[#0f4a9b]/15 transition-all duration-300 overflow-hidden"
                style={{ minHeight: 200 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id={`alevMethodIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e5ba8" />
                      <stop offset="100%" stopColor="#0a3a79" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="w-12 h-12 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center mb-5 z-10 flex-shrink-0">
                  {React.cloneElement(m.icon, { style: { stroke: `url(#alevMethodIcon${i})` } })}
                </div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2 z-10">{m.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed text-justify z-10">{m.desc}</p>
                <div className="absolute right-4 bottom-4 pointer-events-none select-none">{m.wm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: MEET THE A-LEVEL TUTORS ── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
            <GraduationCap className="h-4 w-4 text-[#0f4a9b]" />
            <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Our Educators</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
            <GradientHeadingText text="Meet the A-Level Tutors" />
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            See who tutors our A-Level students. Each profile lists the tutor's subjects, exam boards and background, so you know who is teaching before the first lesson.
          </p>
          <div>
            <a
              href="/tutors"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] hover:from-[#1a5bb8] hover:to-[#0f4a9b] shadow-[0_4px_16px_rgba(15,74,155,0.25)] hover:shadow-[0_6px_20px_rgba(15,74,155,0.35)] transition-all duration-200"
            >
              <span>Meet the Ustaad tutors</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: QUALITY A-LEVEL TUTORING AT A FAIR COST ── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] text-white p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(15,74,155,0.25)] border border-white/15">
            {/* Background Ambient Glows & Watermark */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7A24A]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <ShieldCheck className="absolute -bottom-10 right-4 w-72 h-72 text-white/[0.03] pointer-events-none select-none" strokeWidth={0.8} />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold mb-4 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-[#C7A24A]" />
                <span className="tracking-wide">Screened Academic Quality</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                Quality A-Level Tutoring at a{' '}
                <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">
                  Fair Cost
                </span>
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#C7A24A] to-[#f0d080] rounded-full mb-5" />
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed text-justify font-normal">
                Tutor marketplaces list hundreds of profiles and leave parents to judge who can teach. At Ustaad, our academic team screens every A-Level tutor before they take a student, so you are not paying to find out. Families get specialist one-to-one teaching at a cost-effective rate, with the fee agreed before the first paid lesson.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HOW THE FREE A-LEVEL TRIAL WORKS ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Get Started</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="How the Free A-Level Trial Works" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Three steps from first message to first lesson.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                num: "01",
                step: "Share Subject and Exam Board",
                desc: "Send the form or a WhatsApp message with your child's year group, subjects and school.",
              },
              {
                num: "02",
                step: "Get Your Matched Tutor",
                desc: "We pair your child with a tutor for that subject and board, then agree a time that suits your family.",
              },
              {
                num: "03",
                step: "Take Your Free Lesson",
                desc: "It is online and one-to-one. The tutor teaches one topic your child is studying now, and you decide afterwards whether to continue.",
              },
            ].map((st, i) => (
              <div
                key={i}
                className="relative bg-[#f8fafc] border border-gray-200 rounded-2xl p-7 flex flex-col justify-between hover:border-[#0f4a9b]/30 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <span className="text-3xl font-black text-[#0f4a9b]/25 tabular-nums block mb-4">
                    {st.num}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-3 leading-snug">
                    {st.step}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <GoldButton
              href="/contact#form"
              className="px-8 py-3.5 text-sm shadow-[0_0_20px_rgba(199,162,74,0.35)]"
            >
              Book a Free A-Level Trial
            </GoldButton>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: WHY A-LEVEL IS HARDER THAN GCSE ── */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">
            {/* Left: heading */}
            <div className="lg:w-[320px] xl:w-[360px] flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-5">
                <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">The Step Up</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-5 leading-tight">
                <GradientHeadingText text="Why A-Level Is Harder Than GCSE" />
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Four changes after Year 11 that catch strong GCSE students out.
              </p>
            </div>

            {/* Right: 2x2 grid */}
            <div className="flex-1 border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
                {[
                  {
                    title: "New Content",
                    desc: "A-Level Maths takes calculus far beyond the introduction some IGCSE courses give, and the sciences add topics with no GCSE equivalent.",
                    icon: <Calculator className="h-5 w-5" />,
                    num: "01",
                  },
                  {
                    title: "Fewer Subjects, More Depth",
                    desc: "Students move from eight or more GCSE subjects to three or four, each studied in far greater detail.",
                    icon: <Target className="h-5 w-5" />,
                    num: "02",
                  },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden"
                  >
                    <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">
                      {m.num}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                      <svg width="0" height="0" className="absolute">
                        <defs>
                          <linearGradient id={`alevDiffIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e5ba8" />
                            <stop offset="100%" stopColor="#0a3a79" />
                          </linearGradient>
                        </defs>
                      </svg>
                      {React.cloneElement(m.icon, { style: { stroke: `url(#alevDiffIcon${i})` } })}
                    </div>
                    <h3 className="text-base font-extrabold text-[#0a1f3d] relative z-10">{m.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600 text-justify relative z-10">{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                {[
                  {
                    title: "Longer Answers",
                    desc: "History, English Literature and Business are assessed through extended essays, where marks come from analysis and judgement.",
                    icon: <FileText className="h-5 w-5" />,
                    num: "03",
                  },
                  {
                    title: "Independent Study",
                    desc: "Lessons cover less of the course than at GCSE, so your child is expected to read, practise and revise alone every week.",
                    icon: <Brain className="h-5 w-5" />,
                    num: "04",
                  },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden"
                  >
                    <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">
                      {m.num}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                      <svg width="0" height="0" className="absolute">
                        <defs>
                          <linearGradient id={`alevDiffIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e5ba8" />
                            <stop offset="100%" stopColor="#0a3a79" />
                          </linearGradient>
                        </defs>
                      </svg>
                      {React.cloneElement(m.icon, { style: { stroke: `url(#alevDiffIcon${i + 2})` } })}
                    </div>
                    <h3 className="text-base font-extrabold text-[#0a1f3d] relative z-10">{m.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600 text-justify relative z-10">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: UNIVERSITY PATHWAYS AND COMPETITIVE ADMISSIONS ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] relative overflow-hidden text-white flex items-center min-h-fit">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C7A24A]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#4a90d9]/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-7 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/15 rounded-full mb-2.5">
              <GraduationCap className="h-3.5 w-3.5 text-[#C7A24A]" />
              <span className="text-white/80 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em]">University Pathways</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white mb-1.5 leading-tight">
              University Pathways and{' '}
              <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">
                Competitive Admissions
              </span>
            </h2>
            <p className="text-blue-100/70 text-xs sm:text-sm leading-relaxed">
              How A-Level choices shape university access and competitive degree applications.
            </p>
          </div>

          {/* Single Unified Container */}
          <div
            className="rounded-2xl sm:rounded-3xl border border-white/15 overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.3)] bg-white/5 backdrop-blur-md"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10 items-stretch">
              
              {/* Left Column: 3 Guidance Points & Note */}
              <div className="lg:col-span-5 p-5 sm:p-6 lg:p-7 flex flex-col justify-between gap-4">
                <div>
                  <div className="w-8 h-1 bg-gradient-to-r from-[#C7A24A] to-[#f0d080] rounded-full mb-4" />
                  <div className="space-y-3 text-xs sm:text-[13px] text-blue-100/90 leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] mt-1.5 shrink-0" />
                      <p>Every offer letter turns on two things: A-Level grades and the subjects behind them.</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] mt-1.5 shrink-0" />
                      <p>Medicine, engineering, and law each set their own non-negotiable subject combinations and minimum grades.</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] mt-1.5 shrink-0" />
                      <p>
                        Ustaad guides A-Level choices in{' '}
                        <a href="/igcse" className="font-semibold underline hover:text-white transition-colors" style={{ color: '#C7A24A' }}>
                          Year 11
                        </a>{' '}
                        and protects each predicted grade through finals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-blue-200/60 italic">
                  Requirements differ by university, so check each course page before choosing.
                </div>
              </div>

              {/* Right Column: Degree Table */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/10 border-b border-white/10">
                        <th className="py-2.5 px-4 sm:px-6 font-extrabold text-[11px] sm:text-xs text-[#C7A24A] uppercase tracking-wider w-2/5">
                          Degree
                        </th>
                        <th className="py-2.5 px-4 sm:px-6 font-extrabold text-[11px] sm:text-xs text-[#C7A24A] uppercase tracking-wider">
                          A-Level subjects usually expected
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-xs sm:text-[13px]">
                      {[
                        { degree: "Medicine", expected: "Chemistry, plus Biology at most universities" },
                        { degree: "Engineering", expected: "Maths and Physics" },
                        { degree: "Economics", expected: "Maths" },
                        { degree: "Computer Science", expected: "Maths" },
                        { degree: "Law", expected: "No fixed subjects; an essay subject helps" },
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/5 transition-colors">
                          <td className="py-2.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                            {row.degree}
                          </td>
                          <td className="py-2.5 px-4 sm:px-6 text-blue-100/85 leading-snug">
                            {row.expected}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: A-LEVEL TUTORS ACROSS THE UAE ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-[#f8fafe] to-white relative overflow-hidden border-y border-gray-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#0f4a9b]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#C7A24A]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-3.5">
                <MapPin className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">Across the UAE</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight">
                A-Level Tutors{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                  Across the UAE
                </span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xs lg:text-right">
              A-Level students across every emirate, Year 12 through Year 13.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { city: "Abu Dhabi", note: "Capital of the UAE", href: "/a-level-tutor-abu-dhabi" },
              { city: "Dubai", note: "Most populous emirate", href: undefined },
              { city: "Sharjah", note: "Growing A-Level community", href: undefined },
              { city: "Ajman", note: "British system schools", href: undefined },
              { city: "Al Ain", note: "Garden City", href: undefined },
              { city: "Ras Al Khaimah", note: "Northern Emirates", href: undefined },
              { city: "Fujairah", note: "East coast", href: undefined },
              { city: "Umm Al Quwain", note: "Smallest emirate", href: undefined },
            ].map((loc, i) => {
              const CardContent = (
                <div className="relative bg-white hover:bg-[#f0f6ff] border border-[#0f4a9b]/15 hover:border-[#0f4a9b]/40 rounded-2xl p-5 transition-all duration-300 shadow-[0_4px_16px_rgba(15,74,155,0.04)] hover:shadow-[0_8px_24px_rgba(15,74,155,0.12)] hover:-translate-y-0.5 overflow-hidden h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center shadow-[0_2px_8px_rgba(15,74,155,0.25)] group-hover:scale-105 transition-transform">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#C7A24A] shadow-[0_0_6px_rgba(199,162,74,0.6)]" />
                  </div>
                  <div>
                    <p className="text-[#0a1f3d] group-hover:text-[#0f4a9b] font-extrabold text-base leading-tight flex items-center justify-between transition-colors">
                      <span>{loc.city}</span>
                    </p>
                    <p className="text-gray-500 text-xs font-medium mt-1 leading-snug">{loc.note}</p>
                  </div>
                </div>
              );

              return loc.href ? (
                <a key={i} href={loc.href} className="group block focus:outline-none">
                  {CardContent}
                </a>
              ) : (
                <div key={i} className="group">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FAQS ── */}
      <section id="faqs" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-start">
            <div className="flex flex-col items-start text-left lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <HelpCircle className="h-3.5 w-3.5" />
                <span className="text-xs uppercase tracking-wider">Common Questions</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-3">
                A-Level Tutoring{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                  FAQs
                </span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Common questions from parents and students about A-Level tutoring.
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              {aLevelSchemaFaqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{
                          width: 40,
                          height: 40,
                          minWidth: 40,
                          minHeight: 40,
                          background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                          color: isOpen ? '#fff' : '#0f4a9b',
                          transition: 'background 300ms ease, color 300ms ease',
                          border: 'none',
                          boxShadow: 'inset 0 0 0 2px #fff',
                        }}
                      >
                        <span className="flex items-center justify-center w-full h-full">?</span>
                      </button>
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border"
                        style={{
                          minHeight: '48px',
                          padding: '8px 14px',
                          cursor: 'pointer',
                          background: 'transparent',
                          borderColor: 'rgba(15,74,155,0.1)',
                        }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">
                          {faq.q}
                        </span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 32,
                            height: 32,
                            minWidth: 32,
                            minHeight: 32,
                            borderRadius: '50%',
                            background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                            color: isOpen ? '#fff' : '#0f4a9b',
                            transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    </div>
                    {isOpen && (
                      <div
                        className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
                        style={{
                          background: '#f8fafc',
                          borderColor: 'rgba(15,74,155,0.15)',
                          boxShadow: '0 4px 16px rgba(15,74,155,0.06)',
                        }}
                      >
                        <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                        <span
                          className="flex-shrink-0 flex items-center justify-center rounded-full"
                          style={{
                            width: 32,
                            height: 32,
                            minWidth: 32,
                            minHeight: 32,
                            background: '#0f4a9b',
                            color: '#fff',
                          }}
                        >
                          <MessageCircle className="h-4 w-4" />
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: BOOK AN A-LEVEL TUTOR (FINAL CTA) ── */}
      <FinalCTA
        title="Book an A-Level Tutor"
        subtitle="Your offer, on track."
        button1Text="Book a Free A-Level Trial"
        button1Href="/contact#form"
        subtext1="No commitment."
      />
    </Layout>
  );
}
