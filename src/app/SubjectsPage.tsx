import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AlertTriangle, ArrowRight, BadgeCheck, Banknote, BookMarked, BookOpen, Brain, BrainCircuit, Briefcase, Calculator,
  CalendarCheck, ChevronDown, FlaskConical, GraduationCap, HardHat, HelpCircle, Landmark,
  Lightbulb, LineChart, MessageCircle, Microscope, NotebookPen, Receipt, ScrollText, Sigma, SlidersHorizontal,
  Target, Timer, TrendingUp, Zap, Layers,
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, FinalCTA, StatsBar, HeroCTABlock} from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';

export default function SubjectsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <Layout>
      <SEOHead title="Subjects | Private Tutoring for All Subjects UAE | Ustaad" description="Private tutoring for all major subjects in UAE. Maths, Physics, Chemistry, Biology, English, Business & Economics. IGCSE, A-Level, IB, AP." canonical="/subjects" ogImage="/UpdatedImages/private-subject-tutoring-igcse-ib-a-level-uae.webp" schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }])]} />
      {/* ── HERO ── */}
      <section className="pt-10 pb-20 lg:pt-20 lg:pb-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <BookOpen className="h-4 w-4" /> Subjects
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
                <GradientHeadingText text="Master Every Subject, the Right Way" />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                Subject-focused 1-to-1 tutoring across IGCSE, GCSE, A-Level, IB, and AP, developed for real exam and coursework demands.
              </p>
              <HeroCTABlock className="mb-4">
                Book Your Free Trial
              </HeroCTABlock>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-8 border-white group z-10"
            >
              <img
                src="/UpdatedImages/private-subject-tutoring-igcse-ib-a-level-uae.webp"
                alt="Ustaad private tutor delivering one-to-one subject tutoring in Maths Physics Chemistry Biology and English for IGCSE and IB students UAE"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                width={1200} height={800} fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a9b]/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      <StatsBar />

      {/* ── SUBJECT GRID ── */}
      <section id="subject-grid" className="py-14 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Subjects We Cover" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">Subjects across all curricula, built for accuracy and results.</p>
          </div>

          {/* Core Subjects */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6 max-w-6xl mx-auto">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(15,74,155,0.3)]">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0a1f3d]">Core Subjects</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {[
                { name: "Mathematics", topics: "Algebra · Geometry · Calculus",      skills: "Problem Solving · Exam Techniques",  icon: <Calculator   className="h-6 w-6 text-white" strokeWidth={2.5} />, wm: <Calculator   className="h-28 w-28 text-[#0f4a9b]/[0.08]" strokeWidth={0.4} />, href: "/maths",     cta: "Explore Maths"     },
                { name: "Physics",     topics: "Mechanics · Electricity · Waves",    skills: "Numerical Practice · Applied Study",           icon: <Zap          className="h-6 w-6 text-white" strokeWidth={2.5} />, wm: <Zap          className="h-28 w-28 text-[#0f4a9b]/[0.08]" strokeWidth={0.4} />, href: "/physics",   cta: "Explore Physics"   },
                { name: "Chemistry",   topics: "Organic · Physical · Reactions",     skills: "Revision · Exam Preparation",          icon: <FlaskConical className="h-6 w-6 text-white" strokeWidth={2.5} />, wm: <FlaskConical className="h-28 w-28 text-[#0f4a9b]/[0.08]" strokeWidth={0.4} />, href: "/chemistry", cta: "Explore Chemistry" },
                { name: "Biology",     topics: "Cells · Genetics · Ecology",      skills: "Core Concepts · Applied Practice",          icon: <Microscope   className="h-6 w-6 text-white" strokeWidth={2.5} />, wm: <Microscope   className="h-28 w-28 text-[#0f4a9b]/[0.08]" strokeWidth={0.4} />, href: "/biology",   cta: "Explore Biology"   },
                { name: "English",     topics: "Writing · Grammar · Literature",    skills: "Text Analysis · Essay Structure",   icon: <NotebookPen  className="h-6 w-6 text-white" strokeWidth={2.5} />, wm: <NotebookPen  className="h-28 w-28 text-[#0f4a9b]/[0.08]" strokeWidth={0.4} />, href: "/english",   cta: "Explore English"   },
              ].map((s, i) => (
                <a key={i} href={s.href} className="relative bg-white rounded-[20px] border border-[#E5E7EB] p-6 flex flex-col overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300">
                  <div className="absolute right-4 bottom-4 pointer-events-none select-none z-0">{s.wm}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-4 shadow-[0_4px_14px_rgba(15,74,155,0.25)] group-hover:scale-110 transition-transform duration-300 flex-shrink-0 z-10">{s.icon}</div>
                  <h4 className="text-[15px] font-extrabold text-[#1F3F66] mb-1.5 z-10">{s.name}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3 z-10">{s.topics}</p>
                  <div className="w-10 h-[2px] bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3 z-10" />
                  <p className="text-xs text-[#0a1f3d] font-semibold leading-relaxed z-10">{s.skills}</p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-bold z-10 bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8] bg-clip-text text-transparent group-hover:gap-2.5 transition-all duration-200">
                    {s.cta}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Commerce & Business */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6 max-w-6xl mx-auto">
              <div className="w-10 h-10 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(199,162,74,0.3)]">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0a1f3d]">Commerce & Business</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {[
                { name: "Business Studies", topics: "Marketing · Finance · Strategy",     skills: "Case Studies · Exam Techniques",        icon: <TrendingUp className="h-6 w-6 text-white" strokeWidth={2.5} />, wm: <TrendingUp className="h-28 w-28 text-[#C7A24A]/[0.10]" strokeWidth={0.4} />, href: "/business",   cta: "Explore Business"   },
                { name: "Economics",        topics: "Microeconomics · Macroeconomics",          skills: "Data Interpretation · Essay Analysis",     icon: <LineChart  className="h-6 w-6 text-white" strokeWidth={2.5} />, wm: <LineChart  className="h-28 w-28 text-[#C7A24A]/[0.10]" strokeWidth={0.4} />, href: "/economics",  cta: "Explore Economics"  },
                { name: "Accounting",       topics: "Financial Reporting · Costing · Principles",      skills: "Ledger Accuracy · Exam Application",         icon: <Receipt    className="h-6 w-6 text-white" strokeWidth={2.5} />, wm: <Receipt    className="h-28 w-28 text-[#C7A24A]/[0.10]" strokeWidth={0.4} />, href: "/accounting", cta: "Explore Accounting" },
                { name: "Finance",          topics: "Investment · Banking · Corporate Finance",      skills: "Financial Analysis · Decision Making",      icon: <Banknote   className="h-6 w-6 text-white" strokeWidth={2.5} />, wm: <Banknote   className="h-28 w-28 text-[#C7A24A]/[0.10]" strokeWidth={0.4} />, href: "/finance",    cta: "Explore Finance"    },
              ].map((s, i) => (
                <a key={i} href={s.href} className="relative bg-white rounded-[20px] border border-[#E5E7EB] p-6 flex flex-col overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(199,162,74,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#C7A24A]/40 transition-all duration-300">
                  <div className="absolute right-4 bottom-4 pointer-events-none select-none z-0">{s.wm}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-2xl flex items-center justify-center mb-4 shadow-[0_4px_14px_rgba(199,162,74,0.3)] group-hover:scale-110 transition-transform duration-300 flex-shrink-0 z-10">{s.icon}</div>
                  <h4 className="text-[15px] font-extrabold text-[#1F3F66] mb-1.5 z-10">{s.name}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3 z-10">{s.topics}</p>
                  <div className="w-10 h-[2px] bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3 z-10" />
                  <p className="text-xs text-[#0a1f3d] font-semibold leading-relaxed z-10">{s.skills}</p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-bold z-10 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] bg-clip-text text-transparent group-hover:gap-2.5 transition-all duration-200">
                    {s.cta}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Specialised & Test Prep */}
          <div className="mb-0">
            <div className="flex items-center gap-3 mb-6 max-w-6xl mx-auto">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(15,74,155,0.3)]">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0a1f3d]">Specialised & Test Prep</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {[
                { name: "Statistics",           topics: "Probability · Data Analysis · Modelling",  skills: "Interpretation · Quantitative Reasoning",       icon: <Sigma   className="h-6 w-6 text-white" strokeWidth={2.5} />, wm: <Sigma   className="h-28 w-28 text-[#0f4a9b]/[0.08]" strokeWidth={0.4} />, href: "/statistics",       cta: "Explore Statistics" },
                { name: "Engineering", topics: "Forces · Materials · Structural Design",   skills: "Applied Problem Solving · Technical Drawing",        icon: <HardHat className="h-6 w-6 text-white" strokeWidth={2.5} />, wm: <HardHat className="h-28 w-28 text-[#0f4a9b]/[0.08]" strokeWidth={0.4} />, href: "/engineering",      cta: "Explore Engineering"   },
                { name: "Exam Preparation",     topics: "Past Papers · Revision · Mock Exams",             skills: "Time Management · Question Practice",       icon: <Target  className="h-6 w-6 text-white" strokeWidth={2.5} />, wm: <Target  className="h-28 w-28 text-[#0f4a9b]/[0.08]" strokeWidth={0.4} />, href: "/exam-preparation", cta: "Explore Exam Prep"  },
              ].map((s, i) => (
                <a key={i} href={s.href} className="relative bg-white rounded-[20px] border border-[#E5E7EB] p-6 flex flex-col overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300">
                  <div className="absolute right-4 bottom-4 pointer-events-none select-none z-0">{s.wm}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-4 shadow-[0_4px_14px_rgba(15,74,155,0.25)] group-hover:scale-110 transition-transform duration-300 flex-shrink-0 z-10">{s.icon}</div>
                  <h4 className="text-[15px] font-extrabold text-[#1F3F66] mb-1.5 z-10">{s.name}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3 z-10">{s.topics}</p>
                  <div className="w-10 h-[2px] bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3 z-10" />
                  <p className="text-xs text-[#0a1f3d] font-semibold leading-relaxed z-10">{s.skills}</p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-bold z-10 bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8] bg-clip-text text-transparent group-hover:gap-2.5 transition-all duration-200">
                    {s.cta}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />
      </div>

      {/* ── HOW SUBJECTS DIFFER ACROSS CURRICULA ── */}
      <section className="py-14 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20">
              <Layers className="h-4 w-4" /> Curriculum Focus
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="The Same Subject, Different Expectations" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              <a href="/maths" className="text-[#0f4a9b] font-semibold underline">Mathematics</a>, <a href="/physics" className="text-[#0f4a9b] font-semibold underline">Physics</a>, <a href="/chemistry" className="text-[#0f4a9b] font-semibold underline">Chemistry</a>, and other subjects vary widely across IGCSE, A-Level, IB, and AP programmes. Teaching methods, question styles, and exam approaches shift to match each.
            </p>
          </div>

          {/* Curriculum Comparison Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
            {[
              { name: "IGCSE & GCSE", desc: "Students learn how to solve problems accurately under exam conditions.",   icon: <ScrollText className="h-6 w-6 text-white" />,    wm: <ScrollText className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
              { name: "A-Level",      desc: "The focus shifts toward deeper thinking and more complex questions.",      icon: <GraduationCap className="h-6 w-6 text-white" />, wm: <GraduationCap className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
              { name: "AP",           desc: "Students balance ongoing coursework with regular tests and end-of-course examinations.", icon: <Landmark className="h-6 w-6 text-white" />,      wm: <Landmark className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
              { name: "IB",           desc: "Lessons often involve analysing, investigating, and making connections between ideas.", icon: <BookMarked className="h-6 w-6 text-white" />,    wm: <BookMarked className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
            ].map((c, i) => (
              <div key={i} className="relative bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300 overflow-hidden group" style={{ minHeight: 180 }}>
                <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(15,74,155,0.35)] z-10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{c.icon}</div>
                <h4 className="text-base font-extrabold text-[#0a1f3d] mb-1 z-10">{c.name}</h4>
                <p className="text-gray-500 text-xs font-medium z-10 leading-relaxed">{c.desc}</p>
                <div className="absolute right-2 bottom-2 pointer-events-none select-none">{c.wm}</div>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-[#0f4a9b]/10 shadow-[0_8px_40px_rgba(15,74,155,0.08)]">
              <div className="absolute -left-16 -top-16 w-48 h-48 bg-[#0f4a9b]/8 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-[#C7A24A]/8 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C7A24A] to-[#A8892A] rounded-l-2xl" />
              <div className="relative px-8 py-6 sm:px-10 sm:py-7 pl-10 flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-xl flex items-center justify-center shadow-[0_4px_14px_rgba(199,162,74,0.35)] flex-shrink-0">
                  <BadgeCheck className="h-5 w-5 text-white" />
                </div>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  <span className="font-semibold text-[#0a1f3d]">Each tutor is chosen for both subject expertise and curriculum experience.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />
      </div>

      {/* ── THE CHANGES PARENTS OFTEN NOTICE ── */}
      <section className="py-14 lg:py-20 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              The Changes Parents Often Notice
            </h2>
            <p className="text-blue-200 text-base lg:text-lg leading-relaxed">
              As lessons settle in, parents notice these three changes most often.{' '}
              <a href="/blogs/igcse-maths-revision-low-marks" className="text-[#C7A24A] font-semibold underline">Read more on why revision hours do not always pay off</a>.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                title: "More Organised Revision",
                desc: "Schoolwork feels more manageable when revision becomes a weekly habit.",
                icon: <CalendarCheck className="h-6 w-6 text-white" />,
              },
              {
                title: "Less Last-Minute Pressure",
                desc: "Term-long prep lowers stress before mocks, assessments, and exams.",
                icon: <Timer className="h-6 w-6 text-white" />,
              },
              {
                title: "Confident Independent Study",
                desc: "Students gain confidence solving problems and revising on their own.",
                icon: <BrainCircuit className="h-6 w-6 text-white" />,
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 border border-white/15 rounded-2xl p-7 flex flex-col items-start hover:bg-white/15 transition duration-300" style={{ minHeight: 200 }}>
                <div className="w-12 h-12 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-xl flex items-center justify-center mb-5 shadow-[0_4px_14px_rgba(199,162,74,0.4)] flex-shrink-0">{item.icon}</div>
                <h3 className="text-base font-extrabold text-white mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HABITS THAT OFTEN HOLD STUDENTS BACK ── */}
      <section id="why-students-understand-in-class-but-struggle-alone" className="py-14 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Habits That Often Hold Students Back" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              For many students, effort isn't the issue. It's how revision is done.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Just Reading Notes",
                desc: "Re-reading feels useful, but solving questions builds real skill.",
                icon: <BookOpen className="h-10 w-10 text-[#0f4a9b]" strokeWidth={2} />,
              },
              {
                title: "Memorising Everything",
                desc: "Formulas come easily, but reworded exam questions cause trouble.",
                icon: <Brain className="h-10 w-10 text-[#0f4a9b]" strokeWidth={2} />,
              },
              {
                title: "Skipping Hard Topics",
                desc: "Easy work feels safe while tough chapters cost marks.",
                icon: <AlertTriangle className="h-10 w-10 text-[#0f4a9b]" strokeWidth={2} />,
              },
            ].map((item, i) => (
              <a
                key={i}
                href="/blogs/igcse-maths-revision-low-marks"
                className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent opacity-40"></div>
                <div className="mb-6 mt-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-extrabold text-[#1F3F66] mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />
      </div>

      {/* ── HOW LESSONS ARE PLANNED ── */}
      <section className="py-14 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="How Lessons Are Planned" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Students do better when <a href="/how-it-works" className="text-[#0f4a9b] font-semibold underline">lessons</a> feel organised, focused, and easy to follow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Idea, Then Practice",
                desc: "Each idea is taught fully, then practised with questions.",
                icon: <Lightbulb className="h-10 w-10 text-[#0f4a9b]" strokeWidth={2} />,
              },
              {
                title: "Set for Each Student",
                desc: "Some students need slower explanations, others want extra challenge.",
                icon: <SlidersHorizontal className="h-10 w-10 text-[#0f4a9b]" strokeWidth={2} />,
              },
              {
                title: "Feedback as You Go",
                desc: "Small corrections during lessons catch mistakes before they stick.",
                icon: <BadgeCheck className="h-10 w-10 text-[#0f4a9b]" strokeWidth={2} />,
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent opacity-40"></div>
                <div className="mb-6 mt-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-extrabold text-[#1F3F66] mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW SUBJECTS CHANGE IN HIGHER GRADES ── */}
      <section className="py-14 lg:py-20 bg-gradient-to-br from-[#0a1f3d] to-[#0a3a79]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              How Subjects Change in Higher Grades
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mx-auto" />
          </div>

          {/* Large frosted glass card */}
          <div className="relative overflow-hidden rounded-2xl bg-white/8 border border-white/12 backdrop-blur-sm shadow-[0_8px_40px_rgba(0,0,0,0.2)] p-8 sm:p-10">
            {/* Subtle orbs */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#C7A24A]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#0f4a9b]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative space-y-6 text-blue-100 text-sm sm:text-base leading-relaxed text-justify">
              <p>
                As students reach higher grades, subjects become more detailed, quicker to cover, and more demanding in exams. Lower grades focus on core ideas and routine practice. Higher levels, from{' '}
                <a href="/curriculum" className="text-[#C7A24A] font-semibold underline">IGCSE and GCSE through to A-Level, IB, and AP</a>,{' '}
                expect students to solve unfamiliar questions, write fuller answers, and apply ideas on their own.
              </p>
              <p>
                The shift depends heavily on the subject. Problem-solving subjects like Mathematics and Physics need speed and precision under pressure. Content-heavy subjects like Biology and Chemistry test how much students can manage and recall. Writing-based subjects like English, Economics, and Business Studies reward interpretation and longer answers.
              </p>
              <p>
                Many students struggle in this jump, not from a lack of effort, but because the style of teaching and assessment changes at each level. This is why getting the right help early, as a subject steps up a level, matters more than catching up later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faqs" className="py-8 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <HelpCircle className="h-3.5 w-3.5" />
                <span className="text-xs uppercase tracking-wider">Common Questions</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Questions</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">Common questions from parents and students about subjects and tutoring.</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {[
                { q: "Which subjects do you provide tutoring for?", a: "We tutor Mathematics, Physics, Chemistry, Biology, English, Economics, Business Studies, Accounting, Finance, Statistics, and selected engineering subjects at school and university level." },
                { q: "Is a subject taught differently depending on the curriculum?", a: "Yes. Each subject is taught and assessed differently under IGCSE, A-Level, IB, and AP, so lessons follow each curriculum's own approach." },
                { q: "Do tutors help with revision and exam preparation?", a: "Revision and exam preparation are a core focus. Students get help with past papers, coursework, assignments, and preparation for tests, mocks, and final exams." },
                { q: "Are university-level subjects also available?", a: "Yes. Tutoring also covers selected university and engineering subjects, depending on the topic and academic level." },
                { q: "Which subjects usually need more regular practice?", a: "Subjects like Mathematics, Physics, Chemistry, Statistics, and Accounting usually need steady practice, because topics build on previous concepts." },
                { q: "Do all subjects need the same study approach?", a: "Not always. Problem-solving subjects are often more practice-based, while English, Economics, and Business Studies rely more on explanation, analysis, and written answers." },
              ].map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button onClick={() => toggleFaq(i)}
                        style={{ width:40, height:40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontWeight:'bold', fontSize:'18px', border:'none', cursor:'pointer' }}>?</button>
                      <button onClick={() => toggleFaq(i)}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border"
                        style={{ minHeight:'48px', padding:'8px 14px', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)', background: isOpen ? 'rgba(15,74,155,0.04)' : 'transparent', cursor:'pointer' }}>
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                        <span style={{ width:32, height:32, borderRadius:'50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform 0.2s' }}>
                          <ChevronDown className="h-3.5 w-3.5" style={{ color: isOpen ? '#fff' : '#0f4a9b' }} />
                        </span>
                      </button>
                    </div>
                    {isOpen && (
                      <div className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
                        style={{ background:'#f8fafc', borderColor:'rgba(15,74,155,0.15)', boxShadow:'0 4px 16px rgba(15,74,155,0.06)' }}>
                        <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                        <span style={{ width:32, height:32, background:'#0f4a9b', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
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

      {/* ── FINAL CTA ── */}
      <FinalCTA
        title="Find the Right Subject Tutor"
        subtitle="Get matched with an expert tutor for your subject and curriculum."
        button1Text="Start Your First Session Today"
        button2Text="Ask Your Question"
      />

    </Layout>
  );
}
