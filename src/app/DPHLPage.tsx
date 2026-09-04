import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom, Award, BarChart3, Calculator, ChevronDown,
  Dna, FileText, FlaskConical, GraduationCap, HelpCircle, Lightbulb, MapPin,
  MessageCircle, PenTool, Target,
} from 'lucide-react';
import { Layout, GradientHeadingText, StatsBar, HeroCTABlock, FinalCTA } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const dphlSchemaFaqs = [
  { q: "How many hours of teaching does an HL subject receive?", a: "240 hours, compared with 150 for SL — a 90-hour delta per subject across the two-year Diploma." },
  { q: "How are HL subjects assessed?", a: "Through Internal Assessment plus three external papers, including Paper 3 which tests AHL topics directly." },
  { q: "Why do students struggle at HL despite strong SL performance?", a: "Because HL asks for synthesis and evaluation across AHL plus SL topics, not just deeper analysis." },
  { q: "Do you support HL Internal Assessments?", a: "Yes. HL IAs in Sciences run 2,400 words, History runs 4,000 words; both are supported through structure and drafting." },
  { q: "Which HL subjects does Ustaad cover?", a: "Mathematics (AA and AI), Physics, Chemistry, Biology, English, and Economics at HL." },
  { q: "What HL combinations do medicine and engineering universities expect?", a: "Medicine: HL Chemistry + HL Biology. Engineering: HL Mathematics + HL Physics. Confirm with target universities." },
  { q: "What IB Diploma score is competitive for top universities?", a: "Russell Group and Ivy-tier universities typically expect 38 to 42 points with 6 to 7 in named HL subjects." },
  { q: "Can HL preparation start in Year 13?", a: "It can, but the strongest results come from steady support starting in Year 12." },
];

export default function DPHLPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    { q: "How many hours of teaching does an HL subject receive?", a: <>240 hours, compared with 150 for <a href="/dp-sl" className="text-[#0f4a9b] font-semibold underline">SL</a> — a 90-hour delta per subject across the two-year <a href="/ib-curriculum" className="text-[#0f4a9b] font-semibold underline">Diploma</a>.</> },
    { q: "How are HL subjects assessed?", a: <>Through <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold underline">Internal Assessment</a> plus three external papers, including <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold underline">Paper 3</a> which tests <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold underline">AHL topics</a> directly.</> },
    { q: "Why do students struggle at HL despite strong SL performance?", a: <>Because HL asks for synthesis and evaluation across <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold underline">AHL</a> plus <a href="/dp-sl" className="text-[#0f4a9b] font-semibold underline">SL</a> topics, not just deeper analysis.</> },
    { q: "Do you support HL Internal Assessments?", a: <>Yes. <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold underline">HL IAs</a> in Sciences run 2,400 words, History runs 4,000 words; both are supported through structure and drafting.</> },
    { q: "Which HL subjects does Ustaad cover?", a: <><a href="/maths" className="text-[#0f4a9b] font-semibold underline">Mathematics</a> (AA and AI), <a href="/physics" className="text-[#0f4a9b] font-semibold underline">Physics</a>, <a href="/chemistry" className="text-[#0f4a9b] font-semibold underline">Chemistry</a>, <a href="/biology" className="text-[#0f4a9b] font-semibold underline">Biology</a>, <a href="/english" className="text-[#0f4a9b] font-semibold underline">English</a>, and <a href="/economics" className="text-[#0f4a9b] font-semibold underline">Economics</a> at HL.</> },
    { q: "What HL combinations do medicine and engineering universities expect?", a: "Medicine: HL Chemistry + HL Biology. Engineering: HL Mathematics + HL Physics. Confirm with target universities." },
    { q: "What IB Diploma score is competitive for top universities?", a: <>Russell Group and Ivy-tier universities typically expect 38 to 42 points with 6 to 7 in named HL subjects. See <a href="/ib-curriculum" className="text-[#0f4a9b] font-semibold underline">IB Diploma</a> overview.</> },
    { q: "Can HL preparation start in Year 13?", a: "It can, but the strongest results come from steady support starting in Year 12." },
  ];
  return (
    <Layout>
      <SEOHead
        title="IB DP Higher Level (HL) Tutors UAE | Ustaad"
        description="DP HL tutoring focused on AHL topics, synthesis, evaluation, and university preparation. Book your first DP HL lesson."
        canonical="/dp-hl"
        schema={[
          localBusinessSchema,
          serviceSchema("DP Higher Level Tutoring UAE", "Expert 1-to-1 DP HL tutoring across the UAE.", "/dp-hl"),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Curriculum", url: "/curriculum" }, { name: "DP Higher Level", url: "/dp-hl" }]),
          faqSchema(dphlSchemaFaqs),
        ]}
      />

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
        <img
          src="/UpdatedImages/ib-hl.webp"
          alt="DP Higher Level students studying"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
                width={1200} height={800} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl pr-8 sm:pr-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <Award className="h-4 w-4" /> DP Higher Level
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79] bg-clip-text text-transparent">Depth, Analysis, University Readiness.</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
            <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-xl">
              DP HL tutoring focused on AHL topics, synthesis, evaluation, and university preparation.
            </p>
            <HeroCTABlock className="mb-4">
              Book Your First DP HL Lesson
            </HeroCTABlock>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ── WHY STRONG STUDENTS SOMETIMES STRUGGLE AT HL ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

            <div className="lg:w-[320px] xl:w-[360px] flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-5">
                <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Challenges</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-5 leading-tight">
                <GradientHeadingText text="Why Strong Students Sometimes Struggle at HL" />
              </h2>
 <p className="text-gray-500 text-base leading-relaxed">
                Four reasons even strong MYP and <a href="/dp-sl" className="text-[#5b3a8a] font-semibold underline">SL</a> students lose marks at HL.
              </p>
            </div>

            <div className="flex-1 border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {[
                { title: "AHL Topics", desc: "AHL units appear in Paper 3 and synoptic Paper 2 questions; thinly-taught AHL costs marks.", icon: <Lightbulb className="h-5 w-5" />, wm: <Lightbulb className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
                { title: "Top Mark Bands", desc: "Top marks need weighing of competing perspectives, not just analysis of one position.", icon: <Award className="h-5 w-5" />, wm: <Award className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-3 right-3 pointer-events-none select-none">{m.wm}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`dphlStrugIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#dphlStrugIcon${i})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {[
                { title: "IA Word Counts", desc: "HL IAs run 2,400 words in Sciences and 4,000 words in History, both long-form academic writing.", icon: <PenTool className="h-5 w-5" />, wm: <PenTool className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
                { title: "Synoptic Questions", desc: "Final papers link AHL with core SL topics; weakness in either area damages both.", icon: <FileText className="h-5 w-5" />, wm: <FileText className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-3 right-3 pointer-events-none select-none">{m.wm}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`dphlStrugIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#dphlStrugIcon${i + 2})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

      {/* ── TUTORING HL FOR DEPTH AND UNIVERSITY ── */}
      <section className="py-20 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Tutoring HL for Depth and University" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">How Ustaad tutors HL students through depth, evaluation, and exam precision.</p>
          </div>
          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {[
                { title: "AHL Topic Coverage", desc: "HL-specific content taught at HL depth, not by extending SL material upward.", icon: <Lightbulb className="h-5 w-5" />, num: '01' },
                { title: "Cross-Topic Practice", desc: "Paper 3 questions and synoptic Paper 2 questions practised together for cross-topic linking.", icon: <Target className="h-5 w-5" />, num: '02' },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`dphlTutIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#dphlTutIcon${i})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {[
                { title: "Argument Marking", desc: "Top mark bands need weighing of arguments; tutors mark writing against those bands directly.", icon: <PenTool className="h-5 w-5" />, num: '03' },
                { title: "University-Targeted Prep", desc: "HL combinations checked against target university and degree requirements.", icon: <GraduationCap className="h-5 w-5" />, num: '04' },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`dphlTutIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#dphlTutIcon${i + 2})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

      {/* ── SKILLS THAT SEPARATE TOP HL GRADES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Skills That Separate Top HL Grades" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Three thinking moves the top HL grade bands explicitly reward.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Synthesis", desc: "Students learn to link ideas across topics inside one tightly structured HL answer.", icon: <Lightbulb className="h-6 w-6 text-white" />, wm: <Lightbulb className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Evaluation", desc: "Tutors teach students to weigh evidence, limits, and viewpoints before reaching a conclusion.", icon: <BarChart3 className="h-6 w-6 text-white" />, wm: <BarChart3 className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Application", desc: "Practice pushes students to apply concepts in unfamiliar contexts the textbook never showed.", icon: <Target className="h-6 w-6 text-white" />, wm: <Target className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
            ].map((m, i) => (
              <div key={i} className="relative bg-white border border-[#0f4a9b]/10 rounded-2xl p-8 pt-10 flex flex-col items-start text-left hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] hover:border-[#0f4a9b]/40 hover:ring-2 hover:ring-[#0f4a9b]/15 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(15,74,155,0.4)] flex-shrink-0">{m.icon}</div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                <div className="absolute right-4 bottom-4 pointer-events-none select-none">{m.wm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

      {/* ── PREPARING FOR HL COURSEWORK AND EXAMINATION SUCCESS ── */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Preparing for HL Coursework and Examination Success" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Two HL components Ustaad supports together through Year 12 and Year 13.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Internal Assessment Support", desc: "Tutors guide planning, research, structure, and academic writing across the full HL Internal Assessment.", icon: <PenTool className="h-6 w-6 text-white" />, wm: <PenTool className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "HL Examination Preparation", desc: "Sessions target HL paper formats, command words, and the precise expectations of HL examiners.", icon: <FileText className="h-6 w-6 text-white" />, wm: <FileText className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
            ].map((m, i) => (
              <div key={i} className="relative bg-white border border-[#0f4a9b]/10 rounded-2xl p-8 pt-10 flex flex-col items-start text-left hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] hover:border-[#0f4a9b]/40 hover:ring-2 hover:ring-[#0f4a9b]/15 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(15,74,155,0.4)] flex-shrink-0">{m.icon}</div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                <div className="absolute right-4 bottom-4 pointer-events-none select-none">{m.wm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

      {/* ── DP HL SUBJECTS WE COVER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="DP HL Subjects We Cover" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Six HL subjects mapped to the university routes they open up.</p>
          </div>
          {(() => {
            const subjects = [
              { name: "Mathematics", desc: "Maclaurin Series · Polar Coordinates · Graph Theory", href: "/maths", wm: <Calculator className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Physics", desc: "Electromagnetic Induction · Photoelectric Effect · Doppler Effect", href: "/physics", wm: <Atom className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Chemistry", desc: "Buffer Calculations · Reaction Mechanisms · Stereochemistry", href: "/chemistry", wm: <FlaskConical className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Biology", desc: "Animal Physiology · Neurobiology · Protein Synthesis", href: "/biology", wm: <Dna className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "English", desc: "HL Essay · Comparative Reading · Critical Perspectives", href: "/english", wm: <FileText className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Economics", desc: "Theory of the Firm · Game Theory · Development Economics", href: "/economics", wm: <BarChart3 className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
            ];
            const Card = ({ subj, i }: { subj: typeof subjects[0], i: number }) => (
              <a href={subj.href} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                <div className="absolute bottom-3 right-3 pointer-events-none select-none">{subj.wm}</div>
                <span className="text-sm font-bold text-[#0f4a9b] tabular-nums relative z-10">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{subj.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{subj.desc}</p>
              </a>
            );
            return (
              <div className="max-w-5xl mx-auto mb-8 border border-gray-200 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
                  {subjects.slice(0, 3).map((subj, i) => <Card key={i} subj={subj} i={i} />)}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                  {subjects.slice(3).map((subj, i) => <Card key={i + 3} subj={subj} i={i + 3} />)}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── SUPPORTING HL STUDENTS ACROSS THE UAE ── */}
      <section className="py-24 bg-[#0a1f3d] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0f4a9b]/20 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-[#C7A24A]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full mb-5">
                <MapPin className="h-3.5 w-3.5 text-[#C7A24A]" />
                <span className="text-white/70 text-[11px] font-bold uppercase tracking-[0.15em]">Across the UAE</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Supporting HL Students{' '}
                <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">Across the UAE</span>
              </h2>
            </div>
            <p className="text-blue-100/50 text-sm leading-relaxed max-w-xs lg:text-right">DP HL students across every emirate.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {[
              { city: "Abu Dhabi", note: "Khalifa City · Saadiyat · Yas" },
              { city: "Dubai", note: "Dubai Hills · Ranches · Palm" },
              { city: "Sharjah", note: "HL and SL subjects" },
              { city: "Ajman", note: "IB Diploma schools" },
              { city: "Al Ain", note: "Three HL subjects" },
              { city: "Ras Al Khaimah", note: "Northern Emirates" },
              { city: "Fujairah", note: "East coast" },
              { city: "Umm Al Quwain", note: "Smallest Emirate" },
            ].map((loc, i) => (
              <div key={i} className="group relative bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20 rounded-2xl px-4 py-4 transition-all duration-200 cursor-default overflow-hidden">
                <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#C7A24A] shadow-[0_0_6px_rgba(199,162,74,0.8)]" />
                <MapPin className="h-4 w-4 text-[#4a90d9] mb-2.5" strokeWidth={1.5} />
                <p className="text-white font-bold text-sm leading-tight">{loc.city}</p>
                <p className="text-white/35 text-[10px] mt-1 leading-snug">{loc.note}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/8 rounded-2xl px-8 py-6">
            <p className="text-blue-100/70 text-sm leading-relaxed text-justify">
              DP HL students across Abu Dhabi (including Al Ain), Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah balance three or four HL subjects with two or three <a href="/dp-sl" className="text-[#4a90d9] font-semibold underline">SL</a> subjects, plus TOK, EE, and CAS. Families in Khalifa City, Yas Island, Saadiyat Island, Reem Island, Dubai Hills, Arabian Ranches, Dubai Marina, and Palm Jumeirah sit May and November exams at school testing centres in Dubai and Abu Dhabi.
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
              <p className="text-gray-600 text-[15px] leading-relaxed">Common questions about DP Higher Level tutoring.</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setOpenFaq(isOpen ? null : i)}
                        style={{ width:40, height:40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontWeight:'bold', fontSize:'18px', border:'none', cursor:'pointer' }}>?</button>
                      <button onClick={() => setOpenFaq(isOpen ? null : i)}
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

      <FinalCTA
        title="Book a DP HL Tutor"
        subtitle="Six HL subjects, two years."
        button1Text="Book Your First DP HL Lesson" />

    </Layout>
  );
}
