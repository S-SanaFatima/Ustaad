import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertTriangle, Atom, BookOpen, Briefcase, Brain, Calculator,
  ChevronDown, ClipboardCheck, Clock, Dna, FileText, FlaskConical, GraduationCap,
  HelpCircle, Landmark, Layers, Lightbulb, MapPin, MessageCircle, PenTool, Target, TrendingUp, XCircle,
} from 'lucide-react';
import { Layout, GradientHeadingText, FinalCTA, StatsBar, HeroCTABlock } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const igcseSchemaFaqs = [
  { q: "Which IGCSE subjects do you support?", a: "Mathematics, Physics, Chemistry, Biology, English, and Business across the IGCSE qualification. Additional Mathematics, Economics, and Computer Science are available on request." },
  { q: "Do you support both Cambridge and Edexcel IGCSE subjects?", a: "Yes. Both boards are covered, with tutors paired to each specification." },
  { q: "Can students receive support for more than one IGCSE subject?", a: "Yes. Many students work with Ustaad across several IGCSE subjects at once." },
  { q: "What is the difference between Core and Extended IGCSE pathways?", a: "Extended is the deeper version with the top grades available. Core is the focused version covering essential topics." },
  { q: "How are IGCSE subjects assessed?", a: "Methods vary by subject and board. Typical formats include written papers, multiple-choice papers, practical work or coursework, and data-response questions." },
  { q: "Do you help students prepare for IGCSE examinations?", a: "Yes. Tutors work through topic revision, past paper practice, command words, and exam rehearsal across both boards." },
  { q: "What is the difference between Cambridge IGCSE and Pearson Edexcel International GCSE?", a: "Both qualifications are internationally recognised, but specifications, paper structures, and assessment formats differ between boards." },
  { q: "Is support available for students planning to study A-Level subjects?", a: "Yes. Ustaad helps students strengthen the IGCSE foundations needed for A-Level Mathematics, Physics, Chemistry, Biology, English, and Business." },
];

export default function IGCSEPage() {
  const [boardExpanded, setBoardExpanded] = useState(false);
  const [coreExtTab, setCoreExtTab] = useState<'core' | 'extended'>('core');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout
      headerLogoAlt="Ustaad logo — Cambridge IGCSE and Edexcel International GCSE tutors for Years 9 to 11 across the UAE"
      footerLogoAlt="Ustaad — IGCSE English, Economics and Accounting tutors for Cambridge and Edexcel students in Umm Al Quwain"
      floatingWhatsappAlt="Send a Cambridge IGCSE or Edexcel International GCSE syllabus question to Ustaad on WhatsApp for tutor-led specification help"
    >
      <SEOHead
        title="IGCSE Tutors UAE | Cambridge and Edexcel | Ustaad"
        description="One-to-one IGCSE tutoring for Cambridge and Edexcel students in Years 9 to 11 across the UAE. First lesson free."
        canonical="/igcse"
        ogImage="/UpdatedImages/year-10-igcse-cambridge-0580-edexcel-4ma1-mathematics-tutor-uae.webp"
        schema={[
          localBusinessSchema,
          serviceSchema("IGCSE Tutoring UAE", "One-to-one IGCSE tutoring for Cambridge and Edexcel students across the UAE.", "/igcse"),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Curriculum", url: "/curriculum" }, { name: "IGCSE", url: "/igcse" }]),
          faqSchema(igcseSchemaFaqs),
        ]}
      />
      {/* ── HERO ── */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
        <img
          src="/UpdatedImages/year-10-igcse-cambridge-0580-edexcel-4ma1-mathematics-tutor-uae.webp"
          alt="Ustaad tutor coaching a Year 10 IGCSE student through Cambridge 0580 and Edexcel 4MA1 Mathematics specification preparation"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
                width={1200} height={800} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl pr-8 sm:pr-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <Landmark className="h-4 w-4" /> IGCSE
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
              Cambridge and Edexcel,{' '}
              <span className="bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79] bg-clip-text text-transparent">Tutored with Precision.</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
            <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-xl">
              One-to-one IGCSE tutoring for Cambridge and Edexcel students in Years 9 to 11 across the UAE.
            </p>
            {/* Cross-reference */}
            <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-xl">
              Studying GCSE instead?{' '}
              <a href="/gcse" className="text-[#0f4a9b] font-semibold underline">Read about Ustaad's GCSE tutoring across AQA, OCR, and Pearson Edexcel.</a>{' '}
              Based in Abu Dhabi? <a href="/igcse-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline">IGCSE tutor Abu Dhabi</a> hub available.
            </p>
            <HeroCTABlock className="mb-4" trustText="✦ First lesson free. No commitment.">
              Book Your First IGCSE Lesson
            </HeroCTABlock>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ── COMMON IGCSE ACADEMIC CHALLENGES ── */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

            {/* Left: heading + description */}
            <div className="lg:w-[200px] xl:w-[220px] flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-5">
                <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Challenges</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-5 leading-tight">
                <GradientHeadingText text="Common IGCSE Academic Challenges" />
              </h2>
 <p className="text-gray-500 text-base leading-relaxed">
                Common challenges IGCSE students meet between Year 9 and the final exams.
              </p>
            </div>

            {/* Right: 2×2 zero-margin grid */}
            <div className="flex-1 border border-gray-200 rounded-2xl overflow-hidden">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
                {[
                  { title: "Heavy Subject Load",     desc: "Eight to ten subjects, each carrying its own revision schedule, paper structure, and exam demands.",                               icon: <AlertTriangle className="h-5 w-5" />, num: '01' },
                  { title: "Boards Ask Differently", desc: <>Edexcel favours close-marked calculation;<br />Cambridge weights longer application questions more heavily.</>, icon: <Layers className="h-5 w-5" />,       num: '02' },
                ].map((m, i) => (
                  <div key={i} className="group relative flex flex-col gap-3 p-5 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                    <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                      <svg width="0" height="0" className="absolute"><defs><linearGradient id={`chalIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                      {React.cloneElement(m.icon, { style: { stroke: `url(#chalIcon${i})` } })}
                    </div>
                    <h3 className="text-base font-extrabold text-[#0a1f3d] relative z-10">{m.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500 relative z-10">{m.desc}</p>
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                {[
                  { title: "Content Deepens",      desc: "Year 9 introduces topics, Year 10 extends them, Year 11 tests them under real exam conditions.",                          icon: <TrendingUp className="h-5 w-5" />, num: '03' },
                  { title: "Different Exam Rules", desc: "Command words, paper structures, and assessment objectives vary across Cambridge and Edexcel.", icon: <FileText className="h-5 w-5" />,   num: '04' },
                ].map((m, i) => (
                  <div key={i} className="group relative flex flex-col gap-3 p-5 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                    <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                      <svg width="0" height="0" className="absolute"><defs><linearGradient id={`chalIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                      {React.cloneElement(m.icon, { style: { stroke: `url(#chalIcon${i + 2})` } })}
                    </div>
                    <h3 className="text-base font-extrabold text-[#0a1f3d] relative z-10">{m.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500 relative z-10">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW USTAAD SUPPORTS IGCSE STUDENTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-5">
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Our Support</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
              <GradientHeadingText text="How Ustaad Supports IGCSE Students" />
            </h2>
 <p className="text-gray-500 text-base leading-relaxed">
              Four ways Ustaad supports IGCSE students through Years 9 to 11.
            </p>
          </div>

          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {[
                { title: "Subject Planning",    desc: "A clear plan for revision, coursework, mock exams, and final exams across every IGCSE subject.",           icon: <Target className="h-5 w-5" />,    num: '01' },
                { title: "Real Paper Practice", desc: "Past papers from recent years, marked against each board's official mark scheme.", icon: <FileText className="h-5 w-5" />,  num: '02' },
              ].map((item, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{item.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`suppIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(item.icon, { style: { stroke: `url(#suppIcon${i})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {[
                { title: "Full Syllabus Coverage", desc: "Every chapter of the IGCSE syllabus covered in full, with no exceptions or skipped earlier topics.",              icon: <BookOpen className="h-5 w-5" />,      num: '03' },
                { title: "Assessment Preparation", desc: "Preparation matched to how Cambridge and Edexcel design papers and assessments.", icon: <ClipboardCheck className="h-5 w-5" />, num: '04' },
              ].map((item, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{item.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`suppIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(item.icon, { style: { stroke: `url(#suppIcon${i + 2})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAMBRIDGE & EDEXCEL COVERAGE ── */}
      <section className="py-24 bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C7A24A]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

            {/* Left: badge + heading */}
            <div className="lg:w-[320px] xl:w-[360px] flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full mb-6">
                <GraduationCap className="h-3.5 w-3.5 text-[#C7A24A]" />
                <span className="text-white/70 text-[11px] font-bold uppercase tracking-[0.15em]">Board Coverage</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                Cambridge &{' '}
                <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">Edexcel Coverage</span>
              </h2>
              <p className="text-blue-100/60 text-sm leading-relaxed">
                Specification-matched tutoring for both major IGCSE boards.
              </p>
            </div>

            {/* Right: single merged card with expand/collapse */}
            <div className="flex-1">
              <div className="bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl p-8">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#C7A24A] to-[#f0d080] rounded-full mb-5" />
                <p className="text-blue-100/75 text-sm leading-relaxed text-justify">
                  Ustaad supports students taking either Cambridge IGCSE or Pearson Edexcel International GCSE. Each child is taught by a tutor who knows the exact specification their school sits, so lessons follow the syllabus the student is studying.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── IGCSE SUBJECTS WE SUPPORT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="IGCSE Subjects We Support" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Six core IGCSE subjects across Cambridge and Edexcel boards, with additional support available on request.</p>
          </div>
          {(() => {
            const subjects = [
              { name: "Mathematics", desc: "Trigonometry · Vectors · Surface Area & Volume",       href: "/maths",     wm: <Calculator className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Physics",     desc: "Magnetism · Radioactivity · Energy Transfer",           href: "/physics",   wm: <Atom className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />       },
              { name: "Chemistry",   desc: "Stoichiometry · Periodic Table · Acids & Salts",        href: "/chemistry", wm: <FlaskConical className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Biology",     desc: "Enzymes · Respiration · Photosynthesis",                href: "/biology",   wm: <Dna className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />        },
              { name: "English",     desc: "Summary Writing · Directed Writing · Composition",      href: "/english",   wm: <BookOpen className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />   },
              { name: "Business",    desc: "Human Resources · Production · External Influences",    href: "/business",  wm: <Briefcase className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />  },
            ];
            const Card = ({ subj, i }: { subj: typeof subjects[0], i: number }) => (
              <a href={subj.href} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                <div className="absolute bottom-3 right-3 pointer-events-none select-none opacity-100">{subj.wm}</div>
                <span className="text-sm font-bold text-[#0f4a9b] tabular-nums relative z-10">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{subj.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{subj.desc}</p>
              </a>
            );
            return (
              <div className="max-w-5xl mx-auto mb-8 border border-gray-200 rounded-2xl overflow-hidden">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
                  {subjects.slice(0, 3).map((subj, i) => <Card key={i} subj={subj} i={i} />)}
                </div>
                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                  {subjects.slice(3).map((subj, i) => <Card key={i + 3} subj={subj} i={i + 3} />)}
                </div>
              </div>
            );
          })()}
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
                  Additional Mathematics, Economics, and Computer Science at IGCSE, available on request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY STRONG STUDENTS LOSE MARKS ── */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Why Strong Students Lose Marks" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Most lost marks have nothing to do with knowledge.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                line1: "Misread",
                line2: "the Question",
                desc: "Read it one way, but it asked for something else.",
                icon: <XCircle className="h-6 w-6 text-white" />,
                wm: <XCircle className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} />,
              },
              {
                line1: "Wrote",
                line2: "it Wrong",
                desc: "Content was strong, but layout and working cost the marks.",
                icon: <PenTool className="h-6 w-6 text-white" />,
                wm: <PenTool className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} />,
              },
              {
                line1: "Time",
                line2: "Ran Out",
                desc: <>Early questions ate the time,<br />but the heavy ones got skipped.</>,
                icon: <Clock className="h-6 w-6 text-white" />,
                wm: <Clock className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} />,
              },
              {
                line1: "Mind",
                line2: "Went Blank",
                desc: "Recall held in practice, but cracked when the pressure hit.",
                icon: <Brain className="h-6 w-6 text-white" />,
                wm: <Brain className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} />,
              },
            ].map((m, i) => (
              <div key={i} className="relative bg-white border border-[#0f4a9b]/10 rounded-[24px] p-8 pt-10 flex flex-col items-start text-left hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] hover:border-[#0f4a9b]/40 hover:ring-2 hover:ring-[#0f4a9b]/15 transition-all duration-300 overflow-hidden" style={{ minHeight: 180 }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(15,74,155,0.4)] z-10 flex-shrink-0">{m.icon}</div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-1 z-10 leading-snug">{m.line1}<br />{m.line2}</h3>
                <p className="text-gray-500 text-sm font-medium z-10">{m.desc}</p>
                <div className="absolute right-4 bottom-4 pointer-events-none select-none">{m.wm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE AND EXTENDED PATHWAYS ── */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-start max-w-6xl mx-auto">

            {/* Left: heading */}
            <div className="lg:w-[280px] xl:w-[320px] flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-5">
                <Layers className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Pathways</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
                <GradientHeadingText text="Core and Extended Pathways" />
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">Two routes through a Cambridge IGCSE subject, picked to match your child's target grade.</p>
            </div>

            {/* Right: interactive toggle card */}
            <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(15,74,155,0.07)] border border-gray-200/80">
              {/* Tab strip */}
              <div className="grid grid-cols-2 divide-x divide-gray-100">
                <button
                  onClick={() => setCoreExtTab('core')}
                  className={`px-6 py-4 flex items-center gap-3.5 transition-colors duration-200 ${coreExtTab === 'core' ? 'bg-gradient-to-r from-[#f0f4ff] to-[#f8faff]' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 ${coreExtTab === 'core' ? 'bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] shadow-[0_2px_8px_rgba(15,74,155,0.3)]' : 'bg-gray-100'}`}>
                    <Layers className={`h-4 w-4 ${coreExtTab === 'core' ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0f4a9b]/60 leading-none mb-0.5">Option A</p>
                    <p className={`font-extrabold text-sm leading-none ${coreExtTab === 'core' ? 'text-[#0a1f3d]' : 'text-gray-400'}`}>Core Pathway</p>
                  </div>
                </button>
                <button
                  onClick={() => setCoreExtTab('extended')}
                  className={`px-6 py-4 flex items-center gap-3.5 transition-colors duration-200 ${coreExtTab === 'extended' ? 'bg-gradient-to-r from-[#fffbf0] to-[#fffdf8]' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 ${coreExtTab === 'extended' ? 'bg-gradient-to-br from-[#C7A24A] to-[#A8892A] shadow-[0_2px_8px_rgba(199,162,74,0.35)]' : 'bg-gray-100'}`}>
                    <TrendingUp className={`h-4 w-4 ${coreExtTab === 'extended' ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#C7A24A]/70 leading-none mb-0.5">Option B</p>
                    <p className={`font-extrabold text-sm leading-none ${coreExtTab === 'extended' ? 'text-[#0a1f3d]' : 'text-gray-400'}`}>Extended Pathway</p>
                  </div>
                </button>
              </div>
              {/* Gradient divider */}
              <div className="h-px bg-gradient-to-r from-[#0f4a9b]/20 via-[#C7A24A]/20 to-[#0f4a9b]/20" />
              {/* Body */}
              <div className="p-8">
                {coreExtTab === 'core' ? (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    For students aiming at a steady pass on the core topics. Tutoring locks the essentials in and keeps confidence steady through the exam.
                  </p>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    For students aiming at top grades across the full syllabus. Tutoring covers every topic and trains for the toughest exam questions.
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── IGCSE TO A-LEVEL TRANSITION ── */}
      <section className="py-24 bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C7A24A]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#4a90d9]/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

            {/* Left: heading */}
            <div className="lg:w-[320px] xl:w-[360px] flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full mb-6">
                <GraduationCap className="h-3.5 w-3.5 text-[#C7A24A]" />
                <span className="text-white/70 text-[11px] font-bold uppercase tracking-[0.15em]">Next Steps</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                IGCSE to{' '}
                <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">A-Level Transition</span>
              </h2>
              <p className="text-blue-100/60 text-sm leading-relaxed">How IGCSE results shape the A-Level choices and university options that follow.</p>
            </div>

            {/* Right: card */}
            <div className="flex-1">
              <div className="rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.25)] border border-white/10" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', backdropFilter: 'blur(16px)'}}>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#C7A24A] to-[#f0d080] rounded-full mb-5" />
                <p className="text-blue-100/85 text-sm leading-relaxed">
                  At the end of Year 11, your child narrows from eight or more IGCSE subjects to three or four A-Levels. That choice shapes which university courses stay open. Ustaad tutors hold the IGCSE foundations steady so the right A-Level combination is still in reach, then help families plan the mix with the chosen course in view.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── IGCSE STUDENTS ACROSS THE UAE ── */}
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
                IGCSE Students{' '}
                <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">Across the UAE</span>
              </h2>
            </div>
            <p className="text-blue-100/50 text-sm leading-relaxed max-w-xs lg:text-right">
              IGCSE is one of the most portable secondary qualifications in the world.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {[
              { city: "Abu Dhabi",      note: "Capital · Anchor for ADEK schools" },
              { city: "Dubai",          note: "Most populous · All boards" },
              { city: "Sharjah",        note: "Growing IGCSE community" },
              { city: "Ajman",          note: "Cambridge & Edexcel" },
              { city: "Al Ain",         note: "Cambridge focused" },
              { city: "Ras Al Khaimah", note: "Northern Emirates" },
              { city: "Fujairah",       note: "East coast" },
              { city: "Umm Al Quwain", note: "Smallest emirate" },
            ].map((loc, i) => (
              <div
                key={i}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20 rounded-2xl px-4 py-4 transition-all duration-200 cursor-default overflow-hidden"
              >
                <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#C7A24A] shadow-[0_0_6px_rgba(199,162,74,0.8)]" />
                <MapPin className="h-4 w-4 text-[#4a90d9] mb-2.5" strokeWidth={1.5} />
                <p className="text-white font-bold text-sm leading-tight">{loc.city}</p>
                <p className="text-white/35 text-[10px] mt-1 leading-snug">{loc.note}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/8 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center shadow-[0_0_16px_rgba(15,74,155,0.4)]">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed text-justify flex-1">
              IGCSE is one of the most portable secondary qualifications in the world, which matters especially in the UAE. Many families relocate between emirates, between schools, or in and out of the country during the IGCSE years. Whether a student moves from a Cambridge IGCSE school in Dubai to an Edexcel International GCSE school in Abu Dhabi, or back to another country, the qualification travels with the student. Ustaad supports students through these transitions, switching tutors between Cambridge and Edexcel specifications when needed, so the student's learning carries forward.
            </p>
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faqs" className="py-8 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">

            {/* Left: Heading */}
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
                Common questions from parents and students about IGCSE tutoring.
              </p>
            </div>

            {/* Right: Accordion */}
            <div className="flex flex-col gap-[10px]">
              {([
                { q: "Which IGCSE subjects do you support?",
                  a: <><a href="/maths" className="text-[#0f4a9b] font-semibold underline">Mathematics</a>, <a href="/physics" className="text-[#0f4a9b] font-semibold underline">Physics</a>, <a href="/chemistry" className="text-[#0f4a9b] font-semibold underline">Chemistry</a>, <a href="/biology" className="text-[#0f4a9b] font-semibold underline">Biology</a>, <a href="/english" className="text-[#0f4a9b] font-semibold underline">English</a>, and <a href="/business" className="text-[#0f4a9b] font-semibold underline">Business</a> across the IGCSE qualification. Additional Mathematics, Economics, and Computer Science are available on request.</> },
                { q: "Do you support both Cambridge and Edexcel IGCSE subjects?",
                  a: "Yes. Both boards are covered, with tutors paired to each specification." },
                { q: "Can students receive support for more than one IGCSE subject?",
                  a: "Yes. Many students work with Ustaad across several IGCSE subjects at once." },
                { q: "What is the difference between Core and Extended IGCSE pathways?",
                  a: "Extended is the deeper version with the top grades available. Core is the focused version covering essential topics." },
                { q: "How are IGCSE subjects assessed?",
                  a: "Methods vary by subject and board. Typical formats include written papers, multiple-choice papers, practical work or coursework, and data-response questions." },
                { q: "Do you help students prepare for IGCSE examinations?",
                  a: "Yes. Tutors work through topic revision, past paper practice, command words, and exam rehearsal across both boards." },
                { q: "What is the difference between Cambridge IGCSE and Pearson Edexcel International GCSE?",
                  a: "Both qualifications are internationally recognised, but specifications, paper structures, and assessment formats differ between boards." },
                { q: "Is support available for students planning to study A-Level subjects?",
                  a: <><a href="/a-level" className="text-[#0f4a9b] font-semibold underline">Yes. Ustaad helps students strengthen the IGCSE foundations needed for A-Level Mathematics, Physics, Chemistry, Biology, English, and Business.</a></> },
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
        title="Book an IGCSE Tutor"
        subtitle="Matched in minutes."
        button1Text="Book Your First IGCSE Lesson"
        subtext1="Free trial. No commitment."
      />

    </Layout>
  );
}
