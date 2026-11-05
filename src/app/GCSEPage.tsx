import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AlertTriangle, Atom, BarChart3, BookOpen, Briefcase, Calculator, CheckCircle,
  ChevronDown, ClipboardCheck, Clock, Dna, FileText, FlaskConical, GraduationCap,
  HelpCircle, Landmark, Lightbulb, MapPin, MessageCircle, PenTool, Target, TrendingUp,
} from 'lucide-react';
import { Layout, GradientHeadingText, FinalCTA, StatsBar, HeroCTABlock } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const gcseSchemaFaqs = [
  { q: "Which GCSE boards do you support?", a: "AQA, OCR, and Pearson Edexcel across all six core GCSE subjects. Tutors are paired with the specific board your child's school sits." },
  { q: "What is the difference between Foundation and Higher at GCSE?", a: "Higher covers more demanding content and reaches grades 7 to 9. Foundation focuses on core content and caps at grade 5." },
  { q: "Do you support GCSE coursework and non-exam assessment?", a: "Yes. Coursework and controlled assessments are planned, drafted, and tightened with the mark scheme in view from the start." },
  { q: "How early should GCSE preparation start?", a: "Most students begin in Year 10, but earlier support in Year 9 helps when foundations need strengthening before the GCSE syllabus begins." },
  { q: "What is the difference between GCSE and IGCSE?", a: "GCSE is the aligned qualification sat by Year 10 and 11 students. IGCSE is the international equivalent. Both lead to the same A-Level pathways." },
  { q: "Can students switch between Foundation and Higher mid-course?", a: "Yes, with enough time and the right support. Most changes happen by the end of Year 10, before the final mock examinations." },
  { q: "Do you support students returning to the United Kingdom for Sixth Form?", a: "Yes. Many Ustaad students sit GCSE in the UAE and continue Sixth Form in the United Kingdom, and the qualifications transfer directly." },
  { q: "What grade results can families realistically expect?", a: "Outcomes depend on the student's starting point and the time available, but a clear gap analysis at the start gives an honest grade target for each subject." },
];

export default function GCSEPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeChallenge, setActiveChallenge] = useState<number>(0);
  const [activeFramework, setActiveFramework] = useState<number>(0);

  return (
    <Layout
      headerLogoAlt="Ustaad logo — AQA, OCR and Pearson Edexcel GCSE tutors for Foundation and Higher tier students across the UAE"
      footerLogoAlt="Ustaad — Foundation and Higher tier GCSE tutors building pathways toward Sixth Form engineering, finance and medical degrees"
      floatingWhatsappAlt="Send an AQA, OCR or Pearson Edexcel GCSE command-word question to Ustaad on WhatsApp for examiner-led answer guidance"
    >
      <SEOHead
        title="GCSE Tutors UAE | AQA, OCR, Pearson Edexcel | Ustaad"
        description="One-to-one GCSE tutoring for AQA, OCR, and Pearson Edexcel students in Years 10 and 11 across the UAE."
        canonical="/gcse"
        ogImage="/UpdatedImages/year-11-gcse-foundation-tier-aqa-maths-ocr-combined-science-tutor-uae.webp"
        schema={[
          localBusinessSchema,
          serviceSchema("GCSE Tutoring UAE", "One-to-one GCSE tutoring for AQA, OCR, and Pearson Edexcel students across the UAE.", "/gcse"),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Curriculum", url: "/curriculum" }, { name: "GCSE", url: "/gcse" }]),
          faqSchema(gcseSchemaFaqs),
        ]}
      />
      {/* ── HERO ── */}
      <section className="relative w-full min-h-[500px] lg:min-h-[560px] flex items-center overflow-hidden">
        <img
          src="/UpdatedImages/year-11-gcse-foundation-tier-aqa-maths-ocr-combined-science-tutor-uae.webp"
          alt="Ustaad GCSE tutor coaching a Year 11 Foundation tier student through AQA Mathematics and OCR Combined Science revision"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
          width={1200}
          height={800}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 w-full">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl pr-4 sm:pr-0">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 border border-[#0f4a9b]/20 shadow-sm">
              <Landmark className="h-3.5 w-3.5" /> GCSE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-[#0a1f3d] mb-2.5 sm:mb-3 leading-[1.14] tracking-tight">
              AQA, OCR, and Pearson Edexcel,{' '}
              <span className="bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79] bg-clip-text text-transparent">Tutored with Precision.</span>
            </h1>
            <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3 sm:mb-3.5" />
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-2 sm:mb-2.5 leading-relaxed max-w-2xl font-medium">
              One-to-one GCSE tutoring for AQA, OCR, and Pearson Edexcel students in Years 10 and 11 across the UAE.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed max-w-2xl">
              Studying IGCSE instead?{' '}
              <a href="/igcse" className="text-[#0f4a9b] font-semibold underline">Read about Ustaad's IGCSE tutoring across Cambridge and Edexcel.</a>{' '}
              Based in Dubai? <a href="/gcse-tutor-dubai" className="text-[#0f4a9b] font-semibold underline">GCSE tutor Dubai</a> hub available.{' '}
              Based in Abu Dhabi? <a href="/gcse-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline">GCSE tutor Abu Dhabi</a> hub available.
            </p>
            <HeroCTABlock className="mb-0">
              Book Your First GCSE Lesson
            </HeroCTABlock>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ── WHAT GCSE SUCCESS REALLY REQUIRES ── */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#f8fafc] border-y border-slate-200/70 relative overflow-hidden">
        {/* Soft ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0f4a9b]/[0.025] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C7A24A]/[0.025] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-3.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Requirements</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 leading-tight tracking-tight">
                <GradientHeadingText text="What GCSE Success Really Requires" />
              </h2>

              <div className="w-12 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-4" />

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Four habits stand behind strong GCSE results: subject depth, steady revision, exam interpretation, and mark-scheme fluency.
              </p>
            </motion.div>

            {/* Right Column: 4 Distinct Executive Cards (Mobile Swipeable) */}
            <div className="flex-1 min-w-0">
              {/* Mobile swipe indicator */}
              <div className="flex sm:hidden items-center text-xs font-semibold text-[#0f4a9b] mb-2 px-0.5">
                Swipe to see more
              </div>

              <div className="flex sm:grid sm:grid-cols-2 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth no-scrollbar">
                {[
                  {
                    title: "Full Understanding",
                    desc: "Higher-mark questions and extended responses reward real depth across the GCSE syllabus.",
                    icon: Lightbulb,
                    num: "01",
                  },
                  {
                    title: "Effective Revision",
                    desc: "Content layers across Years 10 and 11, so steady revision beats cramming.",
                    icon: BookOpen,
                    num: "02",
                  },
                  {
                    title: "Exam Interpretation",
                    desc: "Misreading the question loses marks even when students know the topic well.",
                    icon: FileText,
                    num: "03",
                  },
                  {
                    title: "Mark Scheme Fluency",
                    desc: "Knowing what GCSE examiners look for shapes how students write higher-mark answers.",
                    icon: ClipboardCheck,
                    num: "04",
                  },
                ].map((m, i) => {
                  const Icon = m.icon;
                  return (
                    <motion.div
                      key={m.num}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="group relative bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 hover:border-[#0f4a9b]/35 shadow-[0_2px_12px_rgba(15,74,155,0.03)] hover:shadow-[0_12px_28px_rgba(15,74,155,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden shrink-0 w-[82vw] max-w-[290px] sm:w-auto sm:max-w-none snap-center"
                    >
                      {/* Top subtle highlight border on hover */}
                      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div>
                        {/* Top Row: Icon + Number Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center text-white shadow-xs group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300">
                            <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
                          </div>
                          <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-slate-500 group-hover:text-[#0f4a9b] group-hover:border-blue-200 group-hover:bg-blue-50/80 transition-colors tabular-nums">
                            {m.num}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200 mb-1.5 leading-snug">
                          {m.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-[13px] leading-relaxed text-gray-500 font-medium">
                          {m.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GCSE SUBJECTS WE SUPPORT ── */}
      <section className="relative py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-[#f8fafd] via-white to-[#f8fafd] border-y border-slate-200/60 overflow-hidden flex flex-col justify-center min-h-[480px] lg:min-h-[520px]">
        {/* Ambient subtle architectural grid & soft glowing backlight */}
        <div className="absolute inset-0 bg-[radial-gradient(#0f4a9b_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-[#0f4a9b]/[0.035] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-5 sm:mb-7 max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold text-[#0f4a9b] bg-blue-50 border border-blue-200/60 mb-2 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] animate-pulse" />
              AQA · OCR · Pearson Edexcel
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0a1f3d] tracking-tight leading-tight">
              <GradientHeadingText text="GCSE Subjects We Support" />
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Six core GCSE subjects across AQA, OCR, and Pearson Edexcel.
            </p>
          </motion.div>

          {/* 6 Subjects Grid */}
          {(() => {
            const subjects = [
              {
                num: "01",
                name: "Mathematics",
                topics: ["Sequences", "Ratio", "Rates of Change"],
                href: "/maths",
                icon: Calculator,
                accentLine: "from-[#0f4a9b] to-[#1e5bb3]",
                iconBox: "bg-[#0f4a9b]/8 text-[#0f4a9b] border-[#0f4a9b]/20 group-hover:bg-[#0f4a9b] group-hover:text-white",
                chipStyle: "bg-slate-50 text-slate-700 border-slate-200/80 group-hover:border-[#0f4a9b]/30 group-hover:bg-blue-50/50",
              },
              {
                num: "02",
                name: "Physics",
                topics: ["Particle Model", "Pressure", "Space Physics"],
                href: "/physics",
                icon: Atom,
                accentLine: "from-[#0a1f3d] to-[#0f4a9b]",
                iconBox: "bg-slate-100 text-[#0a1f3d] border-slate-200 group-hover:bg-[#0a1f3d] group-hover:text-white",
                chipStyle: "bg-slate-50 text-slate-700 border-slate-200/80 group-hover:border-[#0a1f3d]/30 group-hover:bg-slate-100/60",
              },
              {
                num: "03",
                name: "Chemistry",
                topics: ["Atmospheric Chemistry", "Chemical Analysis", "Resources"],
                href: "/chemistry",
                icon: FlaskConical,
                accentLine: "from-[#C7A24A] to-[#9a7620]",
                iconBox: "bg-[#C7A24A]/12 text-[#8c6c19] border-[#C7A24A]/30 group-hover:bg-[#C7A24A] group-hover:text-white",
                chipStyle: "bg-slate-50 text-slate-700 border-slate-200/80 group-hover:border-[#C7A24A]/40 group-hover:bg-[#C7A24A]/10",
              },
              {
                num: "04",
                name: "Biology",
                topics: ["Organisation", "Infection & Response", "Homeostasis"],
                href: "/biology",
                icon: Dna,
                accentLine: "from-[#1b7a54] to-[#0f4a9b]",
                iconBox: "bg-emerald-50 text-emerald-800 border-emerald-200/70 group-hover:bg-[#1b7a54] group-hover:text-white",
                chipStyle: "bg-slate-50 text-slate-700 border-slate-200/80 group-hover:border-emerald-300 group-hover:bg-emerald-50/50",
              },
              {
                num: "05",
                name: "English",
                topics: ["Shakespeare", "19th-Century Novel", "Poetry"],
                href: "/english",
                icon: BookOpen,
                accentLine: "from-[#0f4a9b] to-[#C7A24A]",
                iconBox: "bg-[#0f4a9b]/8 text-[#0f4a9b] border-[#0f4a9b]/20 group-hover:bg-[#0f4a9b] group-hover:text-white",
                chipStyle: "bg-slate-50 text-slate-700 border-slate-200/80 group-hover:border-[#0f4a9b]/30 group-hover:bg-blue-50/50",
              },
              {
                num: "06",
                name: "Business",
                topics: ["Stakeholders", "Business Growth", "Decision Making"],
                href: "/business",
                icon: Briefcase,
                accentLine: "from-[#9a7620] to-[#0a1f3d]",
                iconBox: "bg-amber-50 text-[#8c6c19] border-amber-200/70 group-hover:bg-[#9a7620] group-hover:text-white",
                chipStyle: "bg-slate-50 text-slate-700 border-slate-200/80 group-hover:border-amber-300 group-hover:bg-amber-50/50",
              },
            ];

            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 max-w-6xl mx-auto mb-4 sm:mb-5">
                {subjects.map((subj, i) => {
                  const Icon = subj.icon;
                  return (
                    <motion.a
                      key={subj.name}
                      href={subj.href}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      whileHover={{ y: -3, scale: 1.01 }}
                      className="group relative bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-200/90 shadow-2xs hover:shadow-[0_8px_24px_rgba(15,74,155,0.08)] hover:border-[#0f4a9b]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                      {/* Top subtle brand accent line */}
                      <div className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${subj.accentLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                      {/* Floating Watermark in background */}
                      <div className="absolute -bottom-2 -right-2 text-slate-900/[0.03] group-hover:text-[#0f4a9b]/[0.05] group-hover:scale-115 group-hover:-rotate-6 transition-all duration-500 pointer-events-none select-none">
                        <Icon className="h-22 w-22 sm:h-24 sm:w-24" strokeWidth={1.2} />
                      </div>

                      <div className="relative z-10">
                        {/* Top Row: Icon + Title + Number */}
                        <div className="flex items-center justify-between gap-2.5 mb-2.5">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-xl border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-all duration-300 shrink-0 ${subj.iconBox}`}>
                              <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
                            </div>
                            <h3 className="text-sm sm:text-base font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors truncate">
                              {subj.name}
                            </h3>
                          </div>

                          <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#0f4a9b] transition-colors px-2 py-0.5 rounded-md bg-slate-50 group-hover:bg-blue-50/60 border border-slate-200/70 group-hover:border-blue-200/80 tabular-nums shrink-0">
                            {subj.num}
                          </span>
                        </div>

                        {/* Bottom Row: Micro Topic Chips */}
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {subj.topics.map((t) => (
                            <span
                              key={t}
                              className={`text-[10.5px] font-medium px-2 py-0.5 rounded-md border ${subj.chipStyle} transition-colors`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            );
          })()}

          {/* Also Supporting Bar — Soft, luminous brand banner */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-50/80 via-white to-amber-50/50 p-3 sm:py-2.5 sm:px-4 flex items-center gap-2.5 sm:gap-3 border border-slate-200/90 shadow-2xs group hover:border-[#0f4a9b]/30 transition-all duration-300">
              <div className="w-7 h-7 rounded-lg bg-[#C7A24A]/15 border border-[#C7A24A]/30 flex items-center justify-center shrink-0 shadow-2xs group-hover:rotate-6 transition-transform duration-300">
                <Lightbulb className="h-3.5 w-3.5 text-[#8c6c19]" />
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs min-w-0">
                <span className="font-extrabold uppercase tracking-wider text-[#0f4a9b] text-[10.5px] bg-[#0f4a9b]/10 border border-[#0f4a9b]/20 px-2 py-0.5 rounded-full shrink-0">
                  Also Supporting:
                </span>
                <span className="text-slate-600 font-medium text-xs sm:text-[13px] truncate sm:whitespace-normal">
                  Further Mathematics, Economics, and Computer Science at GCSE on request.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── COMMON CHALLENGES (INTERACTIVE 4-OBJECT SELECTOR) ── */}
      <section className="py-16 sm:py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Common Challenges Faced by GCSE Students" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Where GCSE study most often gets hard, beyond subject content itself.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* 4 Interactive Objects */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {[
                { title: "Heavy Workload",  icon: AlertTriangle },
                { title: "Time Pressure",   icon: Clock },
                { title: "Marked Projects", icon: PenTool },
                { title: "Level Choice",    icon: TrendingUp },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = activeChallenge === idx;
                return (
                  <motion.button
                    key={idx}
                    type="button"
                    onClick={() => setActiveChallenge(idx)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                      isActive
                        ? 'bg-white border-2 border-[#0f4a9b] shadow-[0_12px_30px_rgba(15,74,155,0.14)] ring-4 ring-[#0f4a9b]/10'
                        : 'bg-white/80 hover:bg-white border border-gray-200 hover:border-[#0f4a9b]/30 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeChallengeBar"
                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    <div className="mb-3">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white shadow-md shadow-[#0f4a9b]/30 scale-105'
                            : 'bg-gray-100 text-gray-500 hover:text-[#0f4a9b]'
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className={`text-sm sm:text-base font-extrabold leading-snug ${isActive ? 'text-[#0a1f3d]' : 'text-gray-700'}`}>
                        {item.title}
                      </h3>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Selected Object Info Display */}
            <div className="relative bg-white rounded-3xl border border-[#0f4a9b]/15 shadow-xl p-6 sm:p-10 overflow-hidden min-h-[160px] flex items-center">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0f4a9b] via-[#2563eb] to-[#0a3a79]" />

              <AnimatePresence mode="wait">
                {(() => {
                  const challenges = [
                    { title: "Heavy Workload",  desc: "Nine subjects, around eighteen final papers, and hundreds of hours of content.",                                              icon: AlertTriangle },
                    { title: "Time Pressure",   desc: "Higher tier Maths gives 90 minutes per paper, around three to four minutes a question.",                                     icon: Clock },
                    { title: "Marked Projects", desc: "Art coursework is worth 60% of the final grade and Design and Technology coursework 50%.",                                   icon: PenTool },
                    { title: "Level Choice",    desc: "Foundation caps at grade 5; Higher reaches grade 9 at greater difficulty.",                                                  icon: TrendingUp },
                  ];
                  const current = challenges[activeChallenge];
                  const CurrentIcon = current.icon;

                  return (
                    <motion.div
                      key={activeChallenge}
                      initial={{ opacity: 0, y: 10, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.99 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7 relative z-10"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center text-white shadow-lg shadow-[#0f4a9b]/30 shrink-0">
                        <CurrentIcon className="h-7 w-7" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] mb-2">
                          {current.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {current.desc}
                        </p>
                      </div>

                      {/* Subtle watermark in background */}
                      <div className="absolute -right-4 -bottom-6 pointer-events-none select-none opacity-5 sm:opacity-10">
                        <CurrentIcon className="h-36 w-36 sm:h-44 sm:w-44 text-[#0f4a9b]" strokeWidth={0.8} />
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREPARATION FRAMEWORK (DYNAMIC SPLIT CONSOLE / IN-PLACE ACCORDION) ── */}
      <section className="py-10 sm:py-16 lg:py-20 bg-[#f8fafc] border-y border-gray-100 relative overflow-hidden">
        {/* Ambient subtle glow backdrop */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0f4a9b]/[0.03] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-2.5 sm:mb-4 leading-tight">
              <GradientHeadingText text="Ustaad's GCSE Preparation Framework" />
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Four threads run through every GCSE tutoring programme at Ustaad.
            </p>
          </div>

          {(() => {
            const frameworkThreads = [
              {
                num: "01",
                title: "Topic Reinforcement",
                desc: "Lessons cover every subtopic that has appeared on three or more recent papers.",
                icon: Target,
              },
              {
                num: "02",
                title: "Project Support",
                desc: "Project pieces are planned, drafted, and tightened to the right mark scheme.",
                icon: PenTool,
              },
              {
                num: "03",
                title: "Grade Boundaries",
                desc: "Tutors decode grade boundaries by board, showing what each higher grade requires.",
                icon: BarChart3,
              },
              {
                num: "04",
                title: "Exam Technique",
                desc: "Timed papers, marked against examiner reports, identify the exact technique gap.",
                icon: FileText,
              },
            ];

            const current = frameworkThreads[activeFramework >= 0 ? activeFramework : 0];
            const CurrentIcon = current.icon;

            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5 lg:gap-8 max-w-6xl mx-auto items-stretch">
                {/* Left (Desktop) / Full In-Place Accordion (Mobile) */}
                <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3 justify-center">
                  {frameworkThreads.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = activeFramework === idx;
                    return (
                      <motion.div
                        key={item.num}
                        layout
                        className={`relative rounded-2xl transition-all duration-300 border overflow-hidden ${
                          isActive
                            ? 'bg-white border-[#0f4a9b] shadow-[0_8px_20px_rgba(15,74,155,0.1)] ring-1.5 ring-[#0f4a9b]/20'
                            : 'bg-white/80 hover:bg-white border-gray-200/90 hover:border-[#0f4a9b]/30 shadow-xs'
                        }`}
                      >
                        {/* Active vertical accent bar */}
                        {isActive && (
                          <motion.div
                            layoutId="activeFrameworkPill"
                            className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0f4a9b] via-[#2563eb] to-[#0a3a79]"
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          />
                        )}

                        {/* Clickable Header Button */}
                        <button
                          type="button"
                          onClick={() => {
                            if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                              setActiveFramework(prev => (prev === idx ? -1 : idx));
                            } else {
                              setActiveFramework(idx);
                            }
                          }}
                          onMouseEnter={() => {
                            if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                              setActiveFramework(idx);
                            }
                          }}
                          className="w-full text-left p-3 sm:p-4 flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 pl-1">
                            <div
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                                isActive
                                  ? 'bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white shadow-md shadow-[#0f4a9b]/25 scale-105'
                                  : 'bg-gray-100 text-gray-500'
                              }`}
                            >
                              <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                            </div>
                            <div className="min-w-0">
                              <h3 className={`text-sm sm:text-base font-extrabold truncate transition-colors ${
                                isActive ? 'text-[#0a1f3d]' : 'text-gray-700'
                              }`}>
                                {item.title}
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border tabular-nums ${
                              isActive
                                ? 'bg-blue-50 border-blue-200 text-[#0f4a9b]'
                                : 'bg-slate-50 border-slate-200 text-slate-400'
                            }`}>
                              {item.num}
                            </span>
                            {/* Chevron only on mobile */}
                            <ChevronDown
                              className={`h-4 w-4 lg:hidden transition-transform duration-300 ${
                                isActive ? 'rotate-180 text-[#0f4a9b]' : 'text-gray-400'
                              }`}
                            />
                          </div>
                        </button>

                        {/* In-Place Accordion Content (Mobile Only) */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="lg:hidden overflow-hidden"
                            >
                              <div className="px-4 pb-3.5 pt-1 pl-4 sm:pl-14 border-t border-slate-100 bg-blue-50/20 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                                {item.desc}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Right: Dynamic Showcase Display Console (Desktop Only) */}
                <div className="hidden lg:flex lg:col-span-7">
                  <div className="relative w-full h-full min-h-[320px] rounded-3xl bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] text-white p-8 sm:p-10 shadow-2xl border border-white/15 flex flex-col justify-between overflow-hidden">
                    {/* Background Radial Ambient Glow in Ustaad Tones */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#C7A24A]/15 rounded-full blur-[70px] pointer-events-none" />

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFramework}
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative z-10 flex flex-col justify-between h-full"
                      >
                        <div>
                          {/* Top Row: Icon Orb + Thread Counter */}
                          <div className="flex items-center justify-between mb-6 sm:mb-8">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl shadow-black/20">
                              <CurrentIcon className="h-7 w-7 sm:h-8 sm:w-8" />
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-bold tracking-widest text-[#f0c96a] bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                                {current.num} / 04
                              </span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-white tracking-tight leading-tight mb-4">
                            {current.title}
                          </h3>

                          {/* Description */}
                          <p className="text-white/90 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                            {current.desc}
                          </p>
                        </div>

                        {/* Bottom Interactive Step Indicator Dots */}
                        <div className="pt-6 sm:pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {frameworkThreads.map((step, sIdx) => (
                              <button
                                key={sIdx}
                                type="button"
                                onClick={() => setActiveFramework(sIdx)}
                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                  activeFramework === sIdx
                                    ? 'w-8 bg-[#f0c96a]'
                                    : 'w-2 bg-white/30 hover:bg-white/60'
                                }`}
                                aria-label={`View thread ${step.num}`}
                              />
                            ))}
                          </div>

                          <span className="text-xs font-mono font-medium text-white/50 tracking-wider">
                            THREAD {current.num}
                          </span>
                        </div>

                        {/* Subtle embedded watermark */}
                        <div className="absolute -bottom-6 -right-6 text-white/[0.04] pointer-events-none select-none">
                          <CurrentIcon className="h-44 w-44 sm:h-52 sm:w-52" strokeWidth={0.8} />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── EXAM TECHNIQUE (ANIMATED PHYSICAL OBJECTS) ── */}
      <section className="py-16 sm:py-20 bg-[#f8fafc] border-y border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="GCSE Exam Technique & Assessment Skills" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Where exam technique earns marks beyond what subject knowledge alone can carry.
            </p>
          </div>

          {/* Mobile swipe hint */}
          <div className="flex sm:hidden items-center justify-center text-xs font-semibold text-[#0f4a9b] mb-4 bg-blue-50/80 border border-blue-200/60 py-1.5 px-3.5 rounded-full w-fit mx-auto shadow-xs">
            Swipe to see more
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth no-scrollbar">
            {[
              {
                title: "Command Words",
                desc: "Words like 'evaluate', 'compare', and 'explain' each demand a different answer structure.",
                renderObject: () => (
                  <div className="relative w-28 h-24 flex items-center justify-center">
                    <div className="absolute -bottom-1 w-24 h-3 bg-[#0a1f3d]/15 rounded-full blur-xs" />
                    <svg viewBox="0 0 120 90" className="w-full h-full drop-shadow-md overflow-visible">
                      <defs>
                        <linearGradient id="bookCoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0f4a9b" />
                          <stop offset="100%" stopColor="#0a1f3d" />
                        </linearGradient>
                        <linearGradient id="pageGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#e2e8f0" />
                          <stop offset="30%" stopColor="#ffffff" />
                          <stop offset="100%" stopColor="#f1f5f9" />
                        </linearGradient>
                        <linearGradient id="pageGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f1f5f9" />
                          <stop offset="70%" stopColor="#ffffff" />
                          <stop offset="100%" stopColor="#e2e8f0" />
                        </linearGradient>
                      </defs>

                      {/* Hardcover base */}
                      <path d="M 12 72 Q 60 84 108 72 L 106 78 Q 60 90 14 78 Z" fill="url(#bookCoverGrad)" />
                      <path d="M 12 72 Q 60 84 60 82 Q 60 84 108 72 L 108 20 Q 60 32 60 30 Q 60 32 12 20 Z" fill="#071b36" opacity="0.35" />

                      {/* Left Page Stack */}
                      <path d="M 14 69 Q 60 78 60 74 L 60 22 Q 60 24 14 16 Z" fill="url(#pageGradLeft)" stroke="#cbd5e1" strokeWidth="0.8" />
                      {/* Right Page Stack */}
                      <path d="M 60 74 Q 60 78 106 69 L 106 16 Q 60 24 60 22 Z" fill="url(#pageGradRight)" stroke="#cbd5e1" strokeWidth="0.8" />

                      {/* Ruled lines on left page */}
                      <line x1="22" y1="28" x2="52" y2="33" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="22" y1="38" x2="48" y2="43" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="22" y1="48" x2="52" y2="53" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="22" y1="58" x2="42" y2="63" stroke="#0f4a9b" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />

                      {/* Ruled lines on right page */}
                      <line x1="68" y1="33" x2="98" y2="28" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="68" y1="43" x2="94" y2="38" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="68" y1="53" x2="98" y2="48" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="68" y1="63" x2="88" y2="58" stroke="#0f4a9b" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />

                      {/* Center Golden Ribbon Bookmark */}
                      <path d="M 60 22 Q 62 46 66 76 L 62 82 L 58 76 Q 59 46 60 22 Z" fill="#C7A24A" />
                    </svg>
                  </div>
                ),
              },
              {
                title: "Mark Schemes",
                desc: "Marks on GCSE papers have precise triggers written into each board's scheme.",
                renderObject: () => (
                  <div className="relative w-28 h-24 flex items-center justify-center">
                    <div className="absolute -bottom-1 w-22 h-3 bg-[#0a1f3d]/15 rounded-full blur-xs" />
                    <svg viewBox="0 0 120 90" className="w-full h-full drop-shadow-md overflow-visible">
                      <defs>
                        <linearGradient id="boardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#334155" />
                          <stop offset="100%" stopColor="#1e293b" />
                        </linearGradient>
                        <linearGradient id="clipMetal" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#94a3b8" />
                          <stop offset="50%" stopColor="#f8fafc" />
                          <stop offset="100%" stopColor="#64748b" />
                        </linearGradient>
                      </defs>

                      {/* Clipboard Backboard */}
                      <rect x="22" y="8" width="76" height="78" rx="8" fill="url(#boardGrad)" stroke="#475569" strokeWidth="1" />

                      {/* Top Metallic Clip */}
                      <rect x="42" y="4" width="36" height="12" rx="3" fill="url(#clipMetal)" stroke="#64748b" strokeWidth="0.8" />
                      <circle cx="60" cy="9" r="2.5" fill="#334155" />

                      {/* White Exam Rubric Paper */}
                      <rect x="28" y="18" width="64" height="64" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />

                      {/* Checklist rows with Checkmarks */}
                      <circle cx="38" cy="30" r="5" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
                      <path d="M 35.5 30 L 37.5 32 L 41 28" fill="none" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="48" y1="30" x2="82" y2="30" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />

                      <circle cx="38" cy="44" r="5" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
                      <path d="M 35.5 44 L 37.5 46 L 41 42" fill="none" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="48" y1="44" x2="78" y2="44" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />

                      <circle cx="38" cy="58" r="5" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
                      <path d="M 35.5 58 L 37.5 60 L 41 56" fill="none" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="48" y1="58" x2="84" y2="58" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />

                      {/* Examiner Stamp */}
                      <g transform="translate(68, 54) rotate(-12)">
                        <circle cx="10" cy="10" r="11" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2 1" />
                        <circle cx="10" cy="10" r="8" fill="none" stroke="#ef4444" strokeWidth="0.8" />
                        <text x="10" y="13" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#ef4444" fontFamily="sans-serif">MAX</text>
                      </g>
                    </svg>
                  </div>
                ),
              },
              {
                title: "Time Management",
                desc: "Tight clocks mean timing per question matters as much as content itself.",
                renderObject: () => (
                  <div className="relative w-28 h-24 flex items-center justify-center">
                    <div className="absolute -bottom-1 w-20 h-3 bg-[#0a1f3d]/15 rounded-full blur-xs" />
                    <svg viewBox="0 0 120 90" className="w-full h-full drop-shadow-md overflow-visible">
                      <defs>
                        <linearGradient id="clockBezel" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="50%" stopColor="#0f4a9b" />
                          <stop offset="100%" stopColor="#0a1f3d" />
                        </linearGradient>
                        <linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#94a3b8" />
                          <stop offset="50%" stopColor="#f8fafc" />
                          <stop offset="100%" stopColor="#64748b" />
                        </linearGradient>
                      </defs>

                      {/* Stopwatch top button / crown */}
                      <rect x="56" y="5" width="8" height="8" rx="1.5" fill="url(#crownGrad)" stroke="#475569" strokeWidth="0.8" />
                      <path d="M 52 7 C 52 1, 68 1, 68 7" fill="none" stroke="url(#crownGrad)" strokeWidth="2.2" strokeLinecap="round" />
                      <rect x="80" y="14" width="6" height="5" rx="1" transform="rotate(35 83 16)" fill="url(#crownGrad)" />

                      {/* Outer Bezel */}
                      <circle cx="60" cy="48" r="34" fill="url(#clockBezel)" stroke="#38bdf8" strokeWidth="1" />
                      {/* Inner Dial Face */}
                      <circle cx="60" cy="48" r="29" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />

                      {/* Active Countdown Arc */}
                      <circle
                        cx="60"
                        cy="48"
                        r="25"
                        fill="none"
                        stroke="#0284c7"
                        strokeWidth="3.5"
                        strokeDasharray="110 50"
                        strokeLinecap="round"
                        transform="rotate(-90 60 48)"
                        opacity="0.25"
                      />

                      {/* Dial Hour Ticks */}
                      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                        <line
                          key={deg}
                          x1="60"
                          y1="22"
                          x2="60"
                          y2={deg % 90 === 0 ? "26" : "24"}
                          stroke="#475569"
                          strokeWidth={deg % 90 === 0 ? "1.8" : "0.9"}
                          transform={`rotate(${deg} 60 48)`}
                        />
                      ))}

                      {/* Minute Hand */}
                      <line x1="60" y1="48" x2="60" y2="28" stroke="#0a1f3d" strokeWidth="2.4" strokeLinecap="round" />
                      {/* Hour Hand */}
                      <line x1="60" y1="48" x2="74" y2="48" stroke="#0a1f3d" strokeWidth="2.8" strokeLinecap="round" />

                      {/* Rotating Second Hand */}
                      <g className="animate-[spin_4s_linear_infinite] origin-[60px_48px]">
                        <line x1="60" y1="54" x2="60" y2="24" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" />
                        <circle cx="60" cy="27" r="1.5" fill="#f59e0b" />
                      </g>

                      {/* Center Cap */}
                      <circle cx="60" cy="48" r="3" fill="#0f4a9b" stroke="#ffffff" strokeWidth="1" />
                    </svg>
                  </div>
                ),
              },
              {
                title: "Long Answers",
                desc: "Six and twelve-mark questions need clear paragraphs, evidence, and a final judgement.",
                renderObject: () => (
                  <div className="relative w-28 h-24 flex items-center justify-center">
                    <div className="absolute -bottom-1 w-24 h-3 bg-[#0a1f3d]/15 rounded-full blur-xs" />
                    <svg viewBox="0 0 120 90" className="w-full h-full drop-shadow-md overflow-visible">
                      <defs>
                        <linearGradient id="pencilWood" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#f59e0b" />
                          <stop offset="50%" stopColor="#fbbf24" />
                          <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                        <linearGradient id="paperScript" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="100%" stopColor="#f8fafc" />
                        </linearGradient>
                      </defs>

                      {/* Folded Exam Script Sheet */}
                      <rect x="18" y="14" width="70" height="66" rx="5" fill="url(#paperScript)" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="32" y1="14" x2="32" y2="80" stroke="#fca5a5" strokeWidth="1" strokeDasharray="1 1" />

                      {/* Ruled Paragraph Lines */}
                      <line x1="38" y1="26" x2="78" y2="26" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="38" y1="36" x2="82" y2="36" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="38" y1="46" x2="72" y2="46" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="38" y1="56" x2="80" y2="56" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
                      <line x1="38" y1="66" x2="68" y2="66" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />

                      {/* Drafting Pencil */}
                      <g transform="translate(68, 22) rotate(38)">
                        <rect x="0" y="0" width="8" height="6" rx="2" fill="#f43f5e" />
                        <rect x="0" y="6" width="8" height="5" fill="#94a3b8" stroke="#64748b" strokeWidth="0.4" />
                        <line x1="0" y1="8.5" x2="8" y2="8.5" stroke="#475569" strokeWidth="0.4" />
                        <rect x="0" y="11" width="8" height="28" fill="url(#pencilWood)" />
                        <line x1="2.6" y1="11" x2="2.6" y2="39" stroke="#b45309" strokeWidth="0.4" />
                        <line x1="5.3" y1="11" x2="5.3" y2="39" stroke="#fde68a" strokeWidth="0.4" />
                        <polygon points="0,39 8,39 4,49" fill="#fde68a" />
                        <polygon points="2.5,45 5.5,45 4,49" fill="#1e293b" />
                      </g>
                    </svg>
                  </div>
                ),
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center hover:shadow-[0_16px_36px_rgba(15,74,155,0.09)] hover:border-[#0f4a9b]/35 transition-all duration-300 overflow-hidden shrink-0 w-[82vw] max-w-[290px] sm:w-auto sm:max-w-none snap-center"
              >
                {/* Top subtle highlight border */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Object Presentation Stage */}
                <div className="w-full py-2 mb-4 bg-gradient-to-b from-[#f8fafd] to-white rounded-xl border border-slate-100/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {m.renderObject()}
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-2">
                  {m.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── A-LEVELS & FUTURE PATHWAYS ── */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-y border-slate-100">
        {/* Soft ambient backlight */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0f4a9b]/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 lg:items-center">

            {/* Left Column: Heading & Subtitle with Scroll-Triggered Font Animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.06, delayChildren: 0.05 },
                },
              }}
              className="lg:w-[340px] xl:w-[380px] flex-shrink-0"
            >
              {/* Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-5 shadow-xs"
              >
                <GraduationCap className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.14em]">Future Pathways</span>
              </motion.div>

              {/* Staggered Heading Words */}
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
                {["Preparing", "for", "A-Levels,", "Sixth", "Form", "and"].map((word, wIdx) => (
                  <motion.span
                    key={wIdx}
                    variants={{
                      hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="inline-block bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] bg-clip-text text-transparent"
                >
                  Future Pathways
                </motion.span>
              </h2>

              {/* Subtitle */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.25 },
                  },
                }}
                className="text-gray-600 text-sm sm:text-base leading-relaxed"
              >
                How GCSE results shape the A-Level choices and university options that follow.
              </motion.p>
            </motion.div>

            {/* Right Column: Ustaad Signature Blue Card with Scroll Animation */}
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="flex-1"
            >
              <div className="relative bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] rounded-3xl p-7 sm:p-10 shadow-[0_20px_50px_rgba(15,74,155,0.25)] border border-white/15 overflow-hidden text-white group hover:shadow-[0_25px_60px_rgba(15,74,155,0.35)] transition-all duration-500">
                {/* Ambient Interior Lights */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C7A24A]/15 rounded-full blur-[60px] pointer-events-none" />

                {/* Animated Gold Rule Line */}
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.65, delay: 0.35 }}
                  className="w-12 h-1 bg-gradient-to-r from-[#C7A24A] to-[#f0d080] rounded-full mb-6"
                />

                {/* Card Text Content with Fade & Slide */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: 0.3 }}
                  className="text-white/90 text-sm sm:text-[15px] leading-relaxed font-normal relative z-10"
                >
                  GCSE marks the end of Key Stage 4, and the choices that follow shape the next two years of school. Most students continue into Years 12 and 13, picking{' '}
                  <a href="/a-level" className="text-[#C7A24A] font-semibold underline underline-offset-2 hover:text-[#f0d080] transition-colors">
                    A-Level subjects
                  </a>{' '}
                  that fit university plans and GCSE strengths. Some return to the United Kingdom for Sixth Form, others continue at their UAE school, and a few take BTECs or alternative routes. Strong GCSE grades widen the A-Level options available, particularly for medical, legal, engineering, and finance university pathways. Ustaad supports students through the GCSE years so the next-stage choice rests on grades that actually open doors.
                </motion.p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── GCSE STUDENTS ACROSS UAE ── */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f8fafd] via-white to-[#f8fafd] border-y border-slate-200/60 relative overflow-hidden">
        {/* Subtle architectural grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/20 rounded-full mb-3.5 shadow-xs">
                <MapPin className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">Across the UAE</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight">
                GCSE Students{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79]">
                  Across the UAE
                </span>
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base font-medium max-w-xs lg:text-right leading-relaxed">
              GCSE is widely studied across every emirate in the UAE.
            </p>
          </div>

          {/* 8 Location Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {[
              { city: "Abu Dhabi",      note: "Capital of the UAE", href: "/gcse-tutor-abu-dhabi" },
              { city: "Dubai",          note: "Most populous emirate", href: "/gcse-tutor-dubai" },
              { city: "Sharjah",        note: "Growing GCSE community" },
              { city: "Ajman",          note: "AQA & Edexcel coverage" },
              { city: "Al Ain",         note: "Garden City" },
              { city: "Ras Al Khaimah", note: "Northern Emirates" },
              { city: "Fujairah",       note: "East coast" },
              { city: "Umm Al Quwain",  note: "Smallest emirate" },
            ].map((loc, i) => {
              const inner = (
                <>
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0a3a79] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/8 group-hover:bg-gradient-to-br group-hover:from-[#0f4a9b] group-hover:to-[#0a3a79] flex items-center justify-center transition-all duration-300">
                      <MapPin className="h-4 w-4 text-[#0f4a9b] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-tight">
                      {loc.city}
                    </h3>
                    <p className="text-gray-500 text-[11px] sm:text-xs font-medium mt-1 leading-snug">
                      {loc.note}
                    </p>
                  </div>
                </>
              );
              return loc.href ? (
                <motion.a
                  key={i}
                  href={loc.href}
                  whileHover={{ y: -3 }}
                  className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-[#0f4a9b]/40 shadow-[0_4px_16px_rgba(15,74,155,0.04)] hover:shadow-[0_12px_28px_rgba(15,74,155,0.10)] transition-all duration-300 overflow-hidden block"
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-[#0f4a9b]/40 shadow-[0_4px_16px_rgba(15,74,155,0.04)] hover:shadow-[0_12px_28px_rgba(15,74,155,0.10)] transition-all duration-300 overflow-hidden cursor-default"
                >
                  {inner}
                </motion.div>
              );
            })}
          </div>

          {/* Overview Banner */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,74,155,0.05)] flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0f4a9b] via-[#2563eb] to-[#0a3a79]" />

            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-md shadow-[#0f4a9b]/25 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed text-left flex-1 font-normal">
              For many families in the UAE, GCSE is part of a longer plan that traces back to the United Kingdom or follows a{' '}
              <a href="/british-curriculum" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79] transition-colors">
                British system school
              </a>.
              {' '}Students are often the children of expatriate professionals, returning UAE nationals educated abroad, or families planning a move to Sixth Form colleges in the United Kingdom after Year 11. The pathway works at every emirate from Abu Dhabi and Dubai through to Sharjah, Ajman, and the Northern Emirates. Ustaad's GCSE tutors are familiar with the demands of leading British system schools across the UAE and the specific expectations of AQA, OCR, and Pearson Edexcel papers.
            </p>
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
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Common questions from parents and students about GCSE tutoring.
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              {([
                { q: "Which GCSE boards do you support?",
                  a: <>AQA, OCR, and Pearson Edexcel across all <a href="/subjects" className="text-[#0f4a9b] font-semibold underline">six core GCSE subjects</a>. Tutors are paired with the specific board your child's school sits.</> },
                { q: "What is the difference between Foundation and Higher at GCSE?",
                  a: "Higher covers more demanding content and reaches grades 7 to 9. Foundation focuses on core content and caps at grade 5." },
                { q: "Do you support GCSE coursework and non-exam assessment?",
                  a: "Yes. Coursework and controlled assessments are planned, drafted, and tightened with the mark scheme in view from the start." },
                { q: "How early should GCSE preparation start?",
                  a: "Most students begin in Year 10, but earlier support in Year 9 helps when foundations need strengthening before the GCSE syllabus begins." },
                { q: "What is the difference between GCSE and IGCSE?",
                  a: <>GCSE is the aligned qualification sat by Year 10 and 11 students. <a href="/igcse" className="text-[#0f4a9b] font-semibold underline">IGCSE</a> is the international equivalent. Both lead to the same <a href="/a-level" className="text-[#0f4a9b] font-semibold underline">A-Level pathways</a>.</> },
                { q: "Can students switch between Foundation and Higher mid-course?",
                  a: "Yes, with enough time and the right support. Most changes happen by the end of Year 10, before the final mock examinations." },
                { q: "Do you support students returning to the United Kingdom for Sixth Form?",
                  a: "Yes. Many Ustaad students sit GCSE in the UAE and continue Sixth Form in the United Kingdom, and the qualifications transfer directly." },
                { q: "What grade results can families realistically expect?",
                  a: "Outcomes depend on the student's starting point and the time available, but a clear gap analysis at the start gives an honest grade target for each subject." },
              ] as { q: string; a: React.ReactNode }[]).map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{
                          width: 40, height: 40, minWidth: 40, minHeight: 40,
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
                          minHeight: '48px', padding: '8px 14px', cursor: 'pointer',
                          background: 'transparent', borderColor: 'rgba(15,74,155,0.1)',
                        }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 32, height: 32, minWidth: 32, minHeight: 32,
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
                          style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, background: '#0f4a9b', color: '#fff' }}
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

      {/* ── FINAL CTA ── */}
      <FinalCTA
        title="Book a GCSE Tutor"
        subtitle="AQA, OCR, or Pearson Edexcel. Year 10 or Year 11. Tailored one-to-one curriculum support."
        button1Text="Book Your First GCSE Lesson" />

    </Layout>
  );
}
