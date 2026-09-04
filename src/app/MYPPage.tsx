import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Award, BookOpen, Brain, Calculator, CheckCircle, ChevronDown, Compass,
  FileText, FlaskConical, GraduationCap, HelpCircle, Lightbulb, MapPin,
  MessageCircle, PenTool, Target,
} from 'lucide-react';
import { Layout, GradientHeadingText, StatsBar, HeroCTABlock, FinalCTA } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const mypSchemaFaqs = [
  { q: "How is MYP assessed?", a: "Through criterion-based evaluation. Each subject is marked against four criteria, each carrying 8 marks." },
  { q: "Why do students lose marks despite understanding the content?", a: "Because MYP rewards application and criterion descriptors, not just knowledge recall." },
  { q: "Do you support MYP assessments and the Personal Project?", a: "Yes. IA-style tasks, research projects, and the Year 10 Personal Project are all supported." },
  { q: "Which MYP subjects does Ustaad support?", a: "Mathematics, Sciences, English Language and Literature, Individuals and Societies, Language Acquisition, and Design." },
  { q: "How does MYP prepare students for the Diploma Programme?", a: "By building inquiry, research, academic writing, and reflection habits that the DP assumes from day one." },
  { q: "What are ATL skills in the MYP?", a: "Approaches to Learning skills: Communication, Social, Self-Management, Research, and Thinking skills." },
  { q: "Can students switch from MYP to GCSE or another curriculum?", a: "Yes, though the criteria and subject mix differ. Ustaad supports students through the transition." },
  { q: "Is the MYP recognised by UAE universities?", a: "MYP itself is not a university entry qualification. It builds toward the IB Diploma, which UAE universities accept." },
];

export default function MYPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    { q: "How is MYP assessed?", a: "Through criterion-based evaluation. Each subject is marked against four criteria, each carrying 8 marks." },
    { q: "Why do students lose marks despite understanding the content?", a: "Because MYP rewards application and criterion descriptors, not just knowledge recall." },
    { q: "Do you support MYP assessments and the Personal Project?", a: <>Yes. IA-style tasks, research projects, and the Year 10 <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold underline">Personal Project</a> are all supported.</> },
    { q: "Which MYP subjects does Ustaad support?", a: <><a href="/maths" className="text-[#0f4a9b] font-semibold underline">Mathematics</a>, Sciences, <a href="/english" className="text-[#0f4a9b] font-semibold underline">English Language and Literature</a>, Individuals and Societies, Language Acquisition, and Design.</> },
    { q: "How does MYP prepare students for the Diploma Programme?", a: <>By building inquiry, research, academic writing, and reflection habits that the <a href="/ib-curriculum" className="text-[#0f4a9b] font-semibold underline">DP</a> assumes from day one.</> },
    { q: "What are ATL skills in the MYP?", a: <><a href="/exam-preparation" className="text-[#0f4a9b] font-semibold underline">Approaches to Learning</a> skills: Communication, Social, Self-Management, Research, and Thinking skills.</> },
    { q: "Can students switch from MYP to GCSE or another curriculum?", a: <>Yes, though the criteria and subject mix differ. Ustaad supports students through the transition. See <a href="/gcse" className="text-[#0f4a9b] font-semibold underline">GCSE</a>.</> },
    { q: "Is the MYP recognised by UAE universities?", a: <>MYP itself is not a university entry qualification. It builds toward the <a href="/ib-curriculum" className="text-[#0f4a9b] font-semibold underline">IB Diploma</a>, which UAE universities accept.</> },
  ];
  return (
    <Layout>
      <SEOHead
        title="MYP Tutors UAE | IB Middle Years Programme | Ustaad"
        description="Grades 6 to 10 tutoring focused on criteria, ATL skills, and conceptual depth. Book your first MYP lesson."
        canonical="/myp"
        schema={[
          localBusinessSchema,
          serviceSchema("MYP Tutoring UAE", "Expert 1-to-1 MYP tutoring across the UAE.", "/myp"),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Curriculum", url: "/curriculum" }, { name: "MYP", url: "/myp" }]),
          faqSchema(mypSchemaFaqs),
        ]}
      />

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
        <img
          src="/UpdatedImages/MYP.webp"
          alt="MYP students learning"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
                width={1200} height={800} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl pr-8 sm:pr-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <Award className="h-4 w-4" /> MYP
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79] bg-clip-text text-transparent">Learning Through Inquiry, Concepts, and Reflection.</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
            <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-xl">
              Grades 6 to 10 tutoring focused on criteria, ATL skills, and conceptual depth.
            </p>
            <HeroCTABlock className="mb-4">
              Book Your First MYP Lesson
            </HeroCTABlock>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ── ACADEMIC EXPECTATIONS IN THE MYP ── */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8fafc] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0f4a9b]/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C7A24A]/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d]">
              <GradientHeadingText text="Academic Expectations in the MYP" />
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="group relative bg-white border border-gray-200/80 rounded-3xl p-10 sm:p-12 overflow-hidden shadow-[0_8px_30px_rgba(15,74,155,0.04)] hover:shadow-[0_12px_50px_rgba(15,74,155,0.08)] transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent opacity-60" />

              <div className="absolute right-8 bottom-6 pointer-events-none select-none opacity-[0.04] group-hover:opacity-[0.06] transition-opacity duration-500">
                <BookOpen className="h-48 w-48 text-[#0f4a9b]" strokeWidth={0.5} />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f4a9b]/20 to-[#0a3a79]/20 rounded-2xl blur-md" />
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f0f4ff] to-white border border-[#0f4a9b]/15 flex items-center justify-center shadow-sm">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id="mypExpectBadge" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    <BookOpen className="h-6 w-6" style={{ stroke: 'url(#mypExpectBadge)' }} strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0f4a9b]/60 mb-0.5">Grades 6 to 10</p>
                  <p className="text-sm font-extrabold text-[#0a1f3d]">Inquiry and Concepts</p>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-gray-700 text-base sm:text-lg leading-[1.8] text-justify">
                  Grades 6 to 10 in the MYP ask for more than memorising. Every task wants students to use a concept, back it with evidence, and write to clear assessment criteria. Most students follow the lessons well but lose marks because no one shows them the writing format the rubric expects. Ustaad teaches that format step by step, so what a student already knows lands on the page in the way that earns top grades.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON CHALLENGES FACED BY MYP STUDENTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

            <div className="lg:w-[320px] xl:w-[360px] flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-5">
                <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Challenges</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-5 leading-tight">
                <GradientHeadingText text="Common Challenges Faced by MYP Students" />
              </h2>
 <p className="text-gray-500 text-base leading-relaxed">
                Where MYP marks slip even when students know the content.
              </p>
            </div>

            <div className="flex-1 border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {[
                { title: "Applying Concepts", desc: "Students understand lessons in class but lose marks applying concepts in unfamiliar contexts.", icon: <Lightbulb className="h-5 w-5" />, wm: <Lightbulb className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
                { title: "Meeting Criteria", desc: "Students miss marks by not addressing every level descriptor that the rubric requires.", icon: <CheckCircle className="h-5 w-5" />, wm: <CheckCircle className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-3 right-3 pointer-events-none select-none">{m.wm}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`mypChalIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#mypChalIcon${i})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {[
                { title: "Reflection Writing", desc: "Genuine reflection writing is rarely taught explicitly; students often write description instead.", icon: <PenTool className="h-5 w-5" />, wm: <PenTool className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
                { title: "Source Selection", desc: "Students need help selecting evidence, citing sources, and structuring research findings clearly.", icon: <FileText className="h-5 w-5" />, wm: <FileText className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-3 right-3 pointer-events-none select-none">{m.wm}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`mypChalIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#mypChalIcon${i + 2})` } })}
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

      {/* ── HOW USTAAD SOLVES EACH CHALLENGE ── */}
      <section className="py-20 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="How Ustaad Solves Each Challenge" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Each challenge above gets one fix. Each fix is what Ustaad tutors actually do.</p>
          </div>
          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {[
                { title: "Applying Concepts", desc: "Students work through unfamiliar problems with tutor support, applying concepts step by step.", icon: <Lightbulb className="h-5 w-5" />, num: '01' },
                { title: "Meeting Criteria", desc: "Ustaad marks practice work against every rubric descriptor, not just generic class comments.", icon: <CheckCircle className="h-5 w-5" />, num: '02' },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`mypSolveIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#mypSolveIcon${i})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {[
                { title: "Reflection Writing", desc: "We teach the reflection structure step by step, covering parts classrooms rarely explain.", icon: <PenTool className="h-5 w-5" />, num: '03' },
                { title: "Source Selection", desc: "Tutors guide students through source choice and citation, structuring findings line by line.", icon: <FileText className="h-5 w-5" />, num: '04' },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`mypSolveIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#mypSolveIcon${i + 2})` } })}
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

      {/* ── COACHING MYP INQUIRY, ATL, AND CRITERIA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Coaching MYP Inquiry, ATL, and Criteria" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">How Ustaad teaches MYP students through inquiry, criteria, and reflection.</p>
          </div>
          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {[
                { title: "Inquiry Coaching", desc: "Tutors work with the school's unit questions and conceptual lenses, not parallel material.", icon: <Compass className="h-5 w-5" />, num: '01' },
                { title: "Rubric-Aligned Marking", desc: "Practice questions marked against Criterion A through D descriptors, not generic comments.", icon: <CheckCircle className="h-5 w-5" />, num: '02' },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`mypCoachIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#mypCoachIcon${i})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {[
                { title: "ATL Skill Practice", desc: "Research, self-management, and communication skills built through real assignments.", icon: <Brain className="h-5 w-5" />, num: '03' },
                { title: "Personal Project Drafting", desc: "Year 10 Personal Project planned, drafted, and reviewed across the academic year.", icon: <Target className="h-5 w-5" />, num: '04' },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`mypCoachIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#mypCoachIcon${i + 2})` } })}
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

      {/* ── MYP SUBJECTS WE SUPPORT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="MYP Subjects We Support" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Three MYP subject groups covered across Grades 6 to 10.</p>
          </div>
          {(() => {
            const subjects = [
              { name: "Mathematics", desc: "Number Patterns · Linear Equations · Coordinate Geometry", href: "/maths", wm: <Calculator className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Sciences", desc: "Practical Skills · Investigation Design · Scientific Method", href: "/subjects", wm: <FlaskConical className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "English Language and Literature", desc: "Reading Interpretation · Oral Commentary · Stylistic Analysis", href: "/english", wm: <BookOpen className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
            ];
            return (
              <div className="max-w-5xl mx-auto mb-8 border border-gray-200 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                  {subjects.map((subj, i) => (
                    <a key={i} href={subj.href} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                      <div className="absolute bottom-3 right-3 pointer-events-none select-none">{subj.wm}</div>
                      <span className="text-sm font-bold text-[#0f4a9b] tabular-nums relative z-10">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{subj.name}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed relative z-10">{subj.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

      {/* ── PREPARING FOR THE IB DIPLOMA PROGRAMME ── */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8fafc] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0f4a9b]/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C7A24A]/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d]">
              <GradientHeadingText text="Preparing for the IB Diploma Programme" />
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="group relative bg-white border border-gray-200/80 rounded-3xl p-10 sm:p-12 overflow-hidden shadow-[0_8px_30px_rgba(15,74,155,0.04)] hover:shadow-[0_12px_50px_rgba(15,74,155,0.08)] transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent opacity-60" />

              <div className="absolute right-8 bottom-6 pointer-events-none select-none opacity-[0.04] group-hover:opacity-[0.06] transition-opacity duration-500">
                <GraduationCap className="h-48 w-48 text-[#0f4a9b]" strokeWidth={0.5} />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f4a9b]/20 to-[#0a3a79]/20 rounded-2xl blur-md" />
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f0f4ff] to-white border border-[#0f4a9b]/15 flex items-center justify-center shadow-sm">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id="mypDPBadge" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    <GraduationCap className="h-6 w-6" style={{ stroke: 'url(#mypDPBadge)' }} strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0f4a9b]/60 mb-0.5">Foundation</p>
                  <p className="text-sm font-extrabold text-[#0a1f3d]">DP Readiness</p>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-gray-700 text-base sm:text-lg leading-[1.8] text-justify">
                  The MYP builds the foundation for the <a href="/ib-curriculum" className="text-[#5b3a8a] font-semibold underline">Diploma Programme</a>. Students who arrive at <a href="/dp-sl" className="text-[#5b3a8a] font-semibold underline">SL</a> and <a href="/dp-hl" className="text-[#5b3a8a] font-semibold underline">HL</a> with strong research habits, academic writing, and reflection skills adapt to the DP workload more smoothly.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPORTING MYP STUDENTS ACROSS THE UAE ── */}
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
                Supporting MYP Students{' '}
                <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">Across the UAE</span>
              </h2>
            </div>
            <p className="text-blue-100/50 text-sm leading-relaxed max-w-xs lg:text-right">MYP students across every emirate.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {[
              { city: "Abu Dhabi", note: "Khalifa City · Saadiyat · Yas" },
              { city: "Dubai", note: "Dubai Hills · Ranches · Palm" },
              { city: "Sharjah", note: "MYP partner schools" },
              { city: "Ajman", note: "IB MYP schools" },
              { city: "Al Ain", note: "Garden City" },
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
              MYP students across Abu Dhabi (including Al Ain), Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah follow the same four criteria across every subject. Families in Khalifa City, Yas Island, Saadiyat Island, Mohammed Bin Zayed City, Dubai Hills, Arabian Ranches, and Palm Jumeirah see the same <a href="/exam-preparation" className="text-[#4a90d9] font-semibold underline">Personal Project</a> deadlines, criterion-based reports, and inquiry-based assessment expectations.
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
              <p className="text-gray-600 text-[15px] leading-relaxed">Common questions about MYP tutoring.</p>
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
        title="Book an MYP Tutor"
        subtitle="Criteria mastered, marks up."
        button1Text="Book Your First MYP Lesson" />

    </Layout>
  );
}
