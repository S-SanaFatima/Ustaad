import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom, Award, BarChart3, BookOpen, Calculator, ChevronDown, Clock,
  Dna, FileText, FlaskConical, HelpCircle, MapPin, MessageCircle, PenTool, Target, TrendingUp,
} from 'lucide-react';
import { Layout, GradientHeadingText, StatsBar, HeroCTABlock, FinalCTA } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const dpslSchemaFaqs = [
  { q: "How many subjects do SL students take?", a: "Typically six subjects, often three SL and three HL, plus TOK, EE, and CAS." },
  { q: "How are SL subjects assessed?", a: "Through Internal Assessments worth 20 to 30% and external May or November examinations." },
  { q: "How many hours does each SL subject get?", a: "150 teaching hours across the two-year Diploma Programme." },
  { q: "Why do SL students struggle despite understanding the content?", a: "Because SL marks are won at the assessment objective level, not just at the content level." },
  { q: "Do you support SL Internal Assessments?", a: "Yes. IA structure, methodology, sample reading, and academic writing support are all part of the standard offer." },
  { q: "Which SL subjects does Ustaad support?", a: "Mathematics (AA and AI), Physics, Chemistry, Biology, English, and Economics at Standard Level." },
  { q: "What is a good IB Diploma score for university?", a: "Around 38 to 42 points for competitive universities; 32 to 36 points for many UK and UAE programmes." },
  { q: "Where are IB exams sat in the UAE?", a: "School testing centres in Dubai, Abu Dhabi, and other emirates during the May and November windows." },
];

export default function DPSLPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    { q: "How many subjects do SL students take?", a: <>Typically six subjects, often three SL and three <a href="/dp-hl" className="text-[#5b3a8a] font-semibold underline">HL</a>, plus <a href="/exam-preparation" className="text-[#5b3a8a] font-semibold underline">TOK</a>, <a href="/exam-preparation" className="text-[#5b3a8a] font-semibold underline">EE</a>, and CAS.</> },
    { q: "How are SL subjects assessed?", a: <>Through <a href="/exam-preparation" className="text-[#5b3a8a] font-semibold underline">Internal Assessments</a> worth 20 to 30% and external May or November examinations.</> },
    { q: "How many hours does each SL subject get?", a: <>150 teaching hours across the two-year <a href="/ib-curriculum" className="text-[#5b3a8a] font-semibold underline">Diploma Programme</a>.</> },
    { q: "Why do SL students struggle despite understanding the content?", a: "Because SL marks are won at the assessment objective level, not just at the content level." },
    { q: "Do you support SL Internal Assessments?", a: <>Yes. <a href="/exam-preparation" className="text-[#5b3a8a] font-semibold underline">IA</a> structure, methodology, sample reading, and academic writing support are all part of the standard offer.</> },
    { q: "Which SL subjects does Ustaad support?", a: <><a href="/maths" className="text-[#5b3a8a] font-semibold underline">Mathematics</a> (AA and AI), <a href="/physics" className="text-[#5b3a8a] font-semibold underline">Physics</a>, <a href="/chemistry" className="text-[#5b3a8a] font-semibold underline">Chemistry</a>, <a href="/biology" className="text-[#5b3a8a] font-semibold underline">Biology</a>, <a href="/english" className="text-[#5b3a8a] font-semibold underline">English</a>, and <a href="/economics" className="text-[#5b3a8a] font-semibold underline">Economics</a> at Standard Level.</> },
    { q: "What is a good IB Diploma score for university?", a: <>Around 38 to 42 points for competitive universities; 32 to 36 points for many UK and UAE programmes. See <a href="/ib-curriculum" className="text-[#5b3a8a] font-semibold underline">IB Diploma</a> overview.</> },
    { q: "Where are IB exams sat in the UAE?", a: <><a href="/exam-preparation" className="text-[#5b3a8a] font-semibold underline">School testing centres</a> in Dubai, Abu Dhabi, and other emirates during the May and November windows.</> },
  ];
  return (
    <Layout>
      <SEOHead
        title="IB DP Standard Level (SL) Tutors UAE | Ustaad"
        description="DP SL tutoring focused on Internal Assessments, six-subject balance, and the May exam papers. Book your first DP SL lesson."
        canonical="/dp-sl"
        ogImage="/UpdatedImages/ib-diploma-sl-tutoring-uae-dubai-abu-dhabi.webp"
        schema={[
          localBusinessSchema,
          serviceSchema("DP Standard Level Tutoring UAE", "Expert 1-to-1 DP SL tutoring across the UAE.", "/dp-sl"),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Curriculum", url: "/curriculum" }, { name: "DP Standard Level", url: "/dp-sl" }]),
          faqSchema(dpslSchemaFaqs),
        ]}
      />

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
        <img
          src="/UpdatedImages/ib-diploma-sl-tutoring-uae-dubai-abu-dhabi.webp"
          alt="IB Diploma Standard Level student working through internal assessments and past papers with an Ustaad tutor in Dubai UAE"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
                width={1200} height={800} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl pr-8 sm:pr-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <Award className="h-4 w-4" /> DP Standard Level
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79] bg-clip-text text-transparent">Six Subjects, Steady Performance.</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
            <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-xl">
              DP SL tutoring focused on Internal Assessments, six-subject balance, and the May exam papers.
            </p>
            <HeroCTABlock className="mb-4" trustText="✦ First lesson free. No commitment.">
              Book Your First DP SL Lesson
            </HeroCTABlock>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ── COMMON CHALLENGES IN SL ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

            {/* Left: heading */}
            <div className="lg:w-[320px] xl:w-[360px] flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-5">
                <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Challenges</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-5 leading-tight">
                <GradientHeadingText text="Common Challenges in SL" />
              </h2>
 <p className="text-gray-500 text-base leading-relaxed">
                Four areas where SL students typically lose marks beyond subject content.
              </p>
            </div>

            {/* Right: 2×2 zero-margin grid */}
            <div className="flex-1 border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {[
                { title: "Question Targets", desc: "Students know content but miss marks by not addressing every objective the question targets.", icon: <Target className="h-5 w-5" />, wm: <Target className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
                { title: "IA Drafting", desc: "IAs need structure, methodology, and academic writing that classroom lessons rarely cover fully.", icon: <PenTool className="h-5 w-5" />, wm: <PenTool className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-3 right-3 pointer-events-none select-none">{m.wm}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`dpslChalIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#dpslChalIcon${i})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {[
                { title: "Steady Performance", desc: "Marks drift across the six SL subjects when revision focuses on the loudest deadline only.", icon: <TrendingUp className="h-5 w-5" />, wm: <TrendingUp className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
                { title: "Exam Application", desc: "Students struggle to apply knowledge under May exam timing and IB question framing.", icon: <Clock className="h-5 w-5" />, wm: <Clock className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-3 right-3 pointer-events-none select-none">{m.wm}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`dpslChalIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#dpslChalIcon${i + 2})` } })}
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

      {/* ── INSIDE USTAAD SL TUTORING ── */}
      <section className="py-20 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Inside Ustaad SL Tutoring" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">How Ustaad tutors SL students across the two-year Diploma.</p>
          </div>
          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {[
                { title: "Multi-Subject Tracking", desc: "Tutors track all six subject grades, not just the loudest one, across both DP years.", icon: <BarChart3 className="h-5 w-5" />, num: '01' },
                { title: "IA Coaching", desc: "IA methodology and write-up reviewed against <a href='/ib-curriculum' class='text-[#5b3a8a] font-semibold underline'>IB sample work</a> and rubrics.", icon: <PenTool className="h-5 w-5" />, num: '02' },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`dpslTutIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#dpslTutIcon${i})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10" dangerouslySetInnerHTML={{ __html: m.desc }} />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {[
                { title: "Objective Mapping", desc: "Past paper marking shows which AOs students miss most often, and why.", icon: <Target className="h-5 w-5" />, num: '03' },
                { title: "Term Planning", desc: "Plans built around IA deadlines, mocks, and the May exam window together.", icon: <Clock className="h-5 w-5" />, num: '04' },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`dpslTutIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#dpslTutIcon${i + 2})` } })}
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

      {/* ── IA AND EXAM PREPARATION ── */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="IA and Exam Preparation" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Two SL components decide the final grade. Ustaad supports both, all year long.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Internal Assessment Support", desc: "Planning, research, analysis, and academic writing guided across every IA from start.", icon: <PenTool className="h-6 w-6 text-white" />, wm: <PenTool className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Exam Preparation", desc: "Structured revision, past paper practice, and exam technique for the final papers.", icon: <FileText className="h-6 w-6 text-white" />, wm: <FileText className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
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

      {/* ── DP SL SUBJECTS WE SUPPORT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="DP SL Subjects We Support" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Six DP SL subjects covered across Internal Assessments and final exams.</p>
          </div>
          {(() => {
            const subjects = [
              { name: "Mathematics", desc: "Probability Distributions · Optimisation · Hypothesis Testing", href: "/maths", wm: <Calculator className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Physics", desc: "Circular Motion · Energy Production · Atomic Models", href: "/physics", wm: <Atom className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Chemistry", desc: "Periodicity · Acid Theories · Organic Functional Groups", href: "/chemistry", wm: <FlaskConical className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Biology", desc: "Human Physiology · Ecological Niches · DNA Structure", href: "/biology", wm: <Dna className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "English", desc: "Areas of Exploration · Translated Texts · Paper 1 Analysis", href: "/english", wm: <BookOpen className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Economics", desc: "Demand & Supply · Aggregate Demand · Market Structures", href: "/economics", wm: <BarChart3 className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
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

      {/* ── SUPPORTING SL STUDENTS ACROSS THE UAE ── */}
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
                Supporting SL Students{' '}
                <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">Across the UAE</span>
              </h2>
            </div>
            <p className="text-blue-100/50 text-sm leading-relaxed max-w-xs lg:text-right">DP SL students across every emirate.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {[
              { city: "Abu Dhabi", note: "Khalifa City · Saadiyat · Yas" },
              { city: "Dubai", note: "Dubai Hills · Ranches · Palm" },
              { city: "Sharjah", note: "Six SL subjects" },
              { city: "Ajman", note: "IB Diploma schools" },
              { city: "Al Ain", note: "Garden City" },
              { city: "Ras Al Khaimah", note: "Northern Emirates" },
              { city: "Fujairah", note: "East coast" },
              { city: "Umm Al Quwain", note: "Smallest emirate" },
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
              DP SL students across Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah balance six subjects, <a href="/exam-preparation" className="text-[#4a90d9] font-semibold underline">TOK</a>, <a href="/exam-preparation" className="text-[#4a90d9] font-semibold underline">EE</a>, CAS, and <a href="/exam-preparation" className="text-[#4a90d9] font-semibold underline">Internal Assessments</a> simultaneously. Families in Khalifa City, Yas Island, Saadiyat Island, Dubai Hills, Arabian Ranches, and Palm Jumeirah sit final exams in May at <a href="/exam-preparation" className="text-[#4a90d9] font-semibold underline">school testing centres</a> in Dubai and Abu Dhabi.
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
              <p className="text-gray-600 text-[15px] leading-relaxed">Common questions about DP Standard Level tutoring.</p>
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

      
      {/* UAE Curriculum Support Guarantee */}
      <section className="py-12 bg-[#f8fafe] border-y border-[#0f4a9b]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f4a9b] bg-[#0f4a9b]/10 px-3 py-1 rounded-full border border-[#0f4a9b]/20">Ustaad Academic Excellence</span>
          <h2 className="text-2xl font-extrabold text-[#0a1f3d] mt-3 mb-3">Personalised 1-to-1 Mentorship Tailored to UAE Schools</h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">Every lesson at Ustaad is structured around your child's specific school syllabus, target grades, and assessment schedule. Whether preparing for upcoming term exams, resolving concept gaps, or practicing past-paper techniques, our specialist tutors deliver dedicated 1-to-1 guidance online across Dubai, Abu Dhabi, Sharjah, and all UAE emirates.</p>
          <div className="grid sm:grid-cols-3 gap-4 text-xs text-left max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
              <h3 className="font-bold text-[#0a1f3d] mb-1">1-to-1 Custom Pace</h3>
              <p className="text-gray-500 leading-relaxed">Lessons adapt to your child's learning speed without classroom distraction or peer pressure.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
              <h3 className="font-bold text-[#0a1f3d] mb-1">Exam Board Precision</h3>
              <p className="text-gray-500 leading-relaxed">Coverage directly aligned with Cambridge, Edexcel, AQA, IB, and AP mark schemes.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
              <h3 className="font-bold text-[#0a1f3d] mb-1">Flexible UAE Timings</h3>
              <p className="text-gray-500 leading-relaxed">After-school and weekend session slots planned around UAE school terms and mock weeks.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Book a DP SL Tutor"
        subtitle="Steady performance, every subject."
        button1Text="Book Your First DP SL Lesson"
        subtext1="First lesson free. No commitment."
      />

    </Layout>
  );
}