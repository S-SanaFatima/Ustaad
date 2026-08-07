import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom, Award, BarChart3, BookOpen, Brain, Calculator, CheckCircle, ChevronDown, Compass,
  Dna, FileText, FlaskConical, GraduationCap, HelpCircle, Layers, Lightbulb, MapPin,
  MessageCircle, PenTool, Target, TrendingUp, Users,
} from 'lucide-react';
import { Layout, GradientHeadingText, StatsBar, HeroCTABlock, FinalCTA } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const ibSchemaFaqs = [
  { q: "Which IB programmes does Ustaad support?", a: "MYP, DP Standard Level (SL), and DP Higher Level (HL) subjects across the six core subject areas." },
  { q: "Can Ustaad improve IB assessment marks?", a: "Yes. Tutors work to the criteria so students earn marks the rubric explicitly rewards, not just demonstrate knowledge." },
  { q: "Do you support Internal Assessments and Extended Essays?", a: "Yes. IA structure, sample reading, supervisor-style feedback, and EE drafting are all part of the standard offer." },
  { q: "How does Ustaad help students manage IB workload?", a: "Tutors build term-by-term plans around mock dates, IA deadlines, EE drafts, and TOK milestones." },
  { q: "Which IB subjects does Ustaad support?", a: "Mathematics (AA and AI), Physics, Chemistry, Biology, English, and Economics across SL and HL." },
  { q: "Does Ustaad support TOK essays and CAS reflection?", a: "Yes. TOK essay planning and CAS reflection writing are covered separately from subject tutoring." },
  { q: "Is the IB Diploma recognised by UAE universities?", a: "Yes. Most UAE universities accept the IB Diploma; minimum points and subject requirements vary by university." },
  { q: "Does Ustaad support IB students across the UAE?", a: "Yes. Students across all seven emirates are supported online and at home." },
];

export default function IBCurriculumPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    { q: "Which IB programmes does Ustaad support?", a: <><a href="/myp" className="text-[#0f4a9b] font-semibold underline">MYP</a>, DP <a href="/dp-sl" className="text-[#0f4a9b] font-semibold underline">Standard Level (SL)</a>, and DP <a href="/dp-hl" className="text-[#0f4a9b] font-semibold underline">Higher Level (HL)</a> subjects across the six core subject areas.</> },
    { q: "Can Ustaad improve IB assessment marks?", a: "Yes. Tutors work to the criteria so students earn marks the rubric explicitly rewards, not just demonstrate knowledge." },
    { q: "Do you support Internal Assessments and Extended Essays?", a: <>Yes. <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold underline">IA structure, sample reading, supervisor-style feedback, and EE drafting</a> are all part of the standard offer.</> },
    { q: "How does Ustaad help students manage IB workload?", a: "Tutors build term-by-term plans around mock dates, IA deadlines, EE drafts, and TOK milestones." },
    { q: "Which IB subjects does Ustaad support?", a: <><a href="/maths" className="text-[#0f4a9b] font-semibold underline">Mathematics</a> (AA and AI), <a href="/physics" className="text-[#0f4a9b] font-semibold underline">Physics</a>, <a href="/chemistry" className="text-[#0f4a9b] font-semibold underline">Chemistry</a>, <a href="/biology" className="text-[#0f4a9b] font-semibold underline">Biology</a>, <a href="/english" className="text-[#0f4a9b] font-semibold underline">English</a>, and <a href="/economics" className="text-[#0f4a9b] font-semibold underline">Economics</a> across SL and HL.</> },
    { q: "Does Ustaad support TOK essays and CAS reflection?", a: <>Yes. <a href="/exam-preparation" className="text-[#0f4a9b] font-semibold underline">TOK essay planning and CAS reflection writing</a> are covered separately from subject tutoring.</> },
    { q: "Is the IB Diploma recognised by UAE universities?", a: "Yes. Most UAE universities accept the IB Diploma; minimum points and subject requirements vary by university." },
    { q: "Does Ustaad support IB students across the UAE?", a: "Yes. Students across all seven emirates are supported online and at home." },
  ];
  return (
    <Layout>
      <SEOHead
        title="IB Curriculum Tutors UAE | MYP & DP Tutoring | Ustaad"
        description="MYP and Diploma Programme tutoring focused on criteria, academic writing, and independent learning. Book your first IB lesson."
        canonical="/ib-curriculum"
        ogImage="/UpdatedImages/ib-myp-diploma-sl-hl-private-tutoring-uae.webp"
        schema={[
          localBusinessSchema,
          serviceSchema("IB Curriculum Tutoring UAE", "Expert 1-to-1 IB tutoring across the UAE.", "/ib-curriculum"),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Curriculum", url: "/curriculum" }, { name: "IB Curriculum", url: "/ib-curriculum" }]),
          faqSchema(ibSchemaFaqs),
        ]}
      />

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
        <img
          src="/UpdatedImages/ib-myp-diploma-sl-hl-private-tutoring-uae.webp"
          alt="Ustaad IB tutor guiding MYP and Diploma Programme students through internal assessments and final exams in Dubai and Abu Dhabi"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
                width={1200} height={800} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl pr-8 sm:pr-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <Award className="h-4 w-4" /> IB Curriculum
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79] bg-clip-text text-transparent">Thinking Beyond the Subject.</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
            <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-xl">
              MYP and Diploma Programme tutoring focused on criteria, academic writing, and independent learning.
            </p>
            <HeroCTABlock className="mb-4" trustText="✦ First lesson free. No commitment.">
              Book Your First IB Lesson
            </HeroCTABlock>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ── BUILDING SUCCESS ACROSS THE IB PATHWAY ── */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8fafc] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0f4a9b]/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C7A24A]/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Building Success Across the IB Pathway" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Three IB stages, each with its own assessment style and academic demands.</p>
          </div>
          
          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {[
                { stage: "GRADES 6 TO 10", title: "MYP", desc: "Inquiry-based study across eight subject groups, assessed against four criteria per subject.", link: "/myp", num: '01' },
                { stage: "YEARS 11 TO 12", title: "DP Standard Level", desc: "Six SL subjects combining coursework, Internal Assessments, and final May exam papers.", link: "/dp-sl", num: '02' },
                { stage: "YEARS 11 TO 12", title: "DP Higher Level", desc: "Higher Level subjects with deeper content, longer essays, and demanding analytical evaluation.", link: "/dp-hl", num: '03' },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0f4a9b]/60 mb-1 relative z-10">{m.stage}</p>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10 mb-3">{m.desc}</p>
                  <a href={m.link} className="inline-flex items-center gap-2 text-[#5b3a8a] font-bold text-sm hover:gap-3 transition-all duration-200 relative z-10">
                    Explore {m.title.split(' ')[0]} <span className="text-lg">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

      {/* ── ACADEMIC CHALLENGES ACROSS THE IB CONTINUUM ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Academic Challenges Across the IB Continuum" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Where each IB stage tests students hardest, beyond subject content alone.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "MYP Stage", desc: "Students apply concepts, meet four assessment criteria, and develop research and reflection skills.", link: "/myp", icon: <Compass className="h-6 w-6 text-white" />, wm: <Compass className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "SL Stage", desc: "Students balance Internal Assessments, May examinations, TOK essay deadlines, and CAS commitments.", link: "/dp-sl", icon: <BookOpen className="h-6 w-6 text-white" />, wm: <BookOpen className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "HL Stage", desc: "Students deliver deeper analysis, stronger evaluation, and demanding subject-specific written tasks.", link: "/dp-hl", icon: <GraduationCap className="h-6 w-6 text-white" />, wm: <GraduationCap className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
            ].map((m, i) => (
              <a key={i} href={m.link} className="relative bg-white border border-[#0f4a9b]/10 rounded-2xl p-8 pt-10 flex flex-col items-start text-left hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] hover:border-[#0f4a9b]/40 hover:ring-2 hover:ring-[#0f4a9b]/15 transition-all duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(15,74,155,0.4)] flex-shrink-0">{m.icon}</div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2 group-hover:text-[#0f4a9b] transition-colors">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                <div className="absolute right-4 bottom-4 pointer-events-none select-none">{m.wm}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

      {/* ── WHY IB STUDENTS SEEK ADDITIONAL ACADEMIC SUPPORT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Why IB Students Seek Additional Academic Support" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Three places where IB students typically struggle, even when they know the content.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Applying Knowledge", desc: "Students grasp concepts in class but lose marks applying them in IB assessments.", icon: <Lightbulb className="h-6 w-6 text-white" />, wm: <Lightbulb className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Academic Writing", desc: "IB rewards argument with evidence; many students need support with academic register.", icon: <PenTool className="h-6 w-6 text-white" />, wm: <PenTool className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Managing Workload", desc: "Internal Assessments, mocks, EE drafts, and TOK essays often pile up together.", icon: <Target className="h-6 w-6 text-white" />, wm: <Target className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
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

      {/* ── TUTORING ACROSS THE IB PATHWAY ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Tutoring Across the IB Pathway" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">How Ustaad teaches, supports, and prepares IB students across the full pathway.</p>
          </div>
          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {[
                { title: "MYP to DP Transition", desc: "Tutors help students adapt to academic writing, research, and reflection demands of Diploma.", icon: <TrendingUp className="h-5 w-5" />, num: '01' },
                { title: "Criteria-Focused Marking", desc: "Practice work is marked against IB rubrics, so marks improve at criterion level.", icon: <CheckCircle className="h-5 w-5" />, num: '02' },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`ibTutIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#ibTutIcon${i})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {[
                { title: "Long-Form Writing Support", desc: "Extended Essay drafts, TOK essays, and Internal Assessments reviewed line by line.", icon: <PenTool className="h-5 w-5" />, num: '03' },
                { title: "Workload Planning", desc: "Term plans built around mocks, IAs, EE deadlines, and TOK milestones together.", icon: <Target className="h-5 w-5" />, num: '04' },
              ].map((m, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`ibTutIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(m.icon, { style: { stroke: `url(#ibTutIcon${i + 2})` } })}
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

      {/* ── UNDERSTANDING IB ASSESSMENT REQUIREMENTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Understanding IB Assessment Requirements" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Four ways IB measures performance from MYP through to HL examinations.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Assessment Criteria", desc: "Subject-specific criteria measure knowledge, application, analysis, and communication on a graded scale.", icon: <CheckCircle className="h-6 w-6 text-white" />, wm: <CheckCircle className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "IA Component", desc: "Most subjects require independent research and written analysis marked by class teachers.", icon: <FileText className="h-6 w-6 text-white" />, wm: <FileText className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Final Examinations", desc: "Final papers test conceptual understanding, evaluation, and application under timed exam conditions.", icon: <Target className="h-6 w-6 text-white" />, wm: <Target className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Written Argument", desc: "Students build clear arguments using evidence, reflection, and subject-specific written precision.", icon: <PenTool className="h-6 w-6 text-white" />, wm: <PenTool className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
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

      {/* ── SKILLS REQUIRED FOR SUCCESS IN THE IB ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Skills Required for Success in the IB" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Four academic skills the IB rewards across every subject group.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Analysis and Evaluation", desc: "Students interpret information, weigh perspectives, and support conclusions with reasoned evidence.", icon: <BarChart3 className="h-6 w-6 text-white" />, wm: <BarChart3 className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Research and Reflection", desc: "Students investigate topics independently and reflect on what their findings actually show.", icon: <Compass className="h-6 w-6 text-white" />, wm: <Compass className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Subject-Specific Writing", desc: "Students communicate ideas through clear, evidence-based, subject-specific writing at academic level.", icon: <PenTool className="h-6 w-6 text-white" />, wm: <PenTool className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Independent Learning", desc: "Students manage responsibilities, meet deadlines, and take real ownership of their study.", icon: <Target className="h-6 w-6 text-white" />, wm: <Target className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
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

      {/* ── THE IB DIPLOMA CORE: TOK, EE, AND CAS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="The IB Diploma Core: TOK, EE, and CAS" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Three Diploma core requirements that sit alongside every subject choice.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Theory of Knowledge", desc: "A 1,600-word essay and the TOK exhibition; tutors sharpen argument structure and reasoning skills.", icon: <Brain className="h-6 w-6 text-white" />, wm: <Brain className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Extended Essay", desc: "A 4,000-word independent research project in Year 13; we guide planning, drafts, and references.", icon: <FileText className="h-6 w-6 text-white" />, wm: <FileText className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Creativity, Activity, Service", desc: "A two-year portfolio across the seven CAS outcomes; Ustaad keeps reflection deadlines on schedule.", icon: <Users className="h-6 w-6 text-white" />, wm: <Users className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
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

      {/* ── IB SUBJECTS WE SUPPORT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="IB Subjects We Support" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Six core IB subjects covered across MYP, SL, and HL specifications.</p>
          </div>
          {(() => {
            const subjects = [
              { name: "Mathematics", desc: "Functions · Complex Numbers · Mathematical Proof", href: "/maths", wm: <Calculator className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Physics", desc: "Relativity · Wave Phenomena · Engineering Physics", href: "/physics", wm: <Atom className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Chemistry", desc: "Energetics · Redox · Biochemistry", href: "/chemistry", wm: <FlaskConical className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Biology", desc: "Molecular Biology · Metabolism · Plant Biology", href: "/biology", wm: <Dna className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "English", desc: "Individual Oral · Intertextuality · Comparative Essay", href: "/english", wm: <BookOpen className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Economics", desc: "Global Economy · Market Failures · International Trade", href: "/economics", wm: <BarChart3 className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
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

      {/* ── SUPPORTING IB STUDENTS ACROSS THE UAE ── */}
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
                Supporting IB Students{' '}
                <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">Across the UAE</span>
              </h2>
            </div>
            <p className="text-blue-100/50 text-sm leading-relaxed max-w-xs lg:text-right">IB students across every emirate.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {[
              { city: "Abu Dhabi", note: "Khalifa City · Saadiyat · Yas" },
              { city: "Dubai", note: "Dubai Hills · Ranches · Palm" },
              { city: "Sharjah", note: "MYP and DP schools" },
              { city: "Ajman", note: "IB curriculum" },
              { city: "Al Ain", note: "Criteria-based" },
              { city: "Ras Al Khaimah", note: "Northern Emirates" },
              { city: "Fujairah", note: "East coast" },
            ].map((loc, i) => (
              <div key={i} className="group relative bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20 rounded-2xl px-4 py-4 transition-all duration-200 cursor-default overflow-hidden">
                <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#C7A24A] shadow-[0_0_6px_rgba(199,162,74,0.8)]" />
                <MapPin className="h-4 w-4 text-[#4a90d9] mb-2.5" strokeWidth={1.5} />
                <p className="text-white font-bold text-sm leading-tight">{loc.city}</p>
                <p className="text-white/35 text-[10px] mt-1 leading-snug">{loc.note}</p>
              </div>
            ))}
            <div className="group relative bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20 rounded-2xl px-4 py-4 transition-all duration-200 cursor-default overflow-hidden">
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#C7A24A] shadow-[0_0_6px_rgba(199,162,74,0.8)]" />
              <MapPin className="h-4 w-4 text-[#4a90d9] mb-2.5" strokeWidth={1.5} />
              <p className="text-white font-bold text-sm leading-tight">Umm Al Quwain</p>
              <p className="text-white/35 text-[10px] mt-1 leading-snug">8th Emirate</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/8 rounded-2xl px-8 py-6">
            <p className="text-blue-100/70 text-sm leading-relaxed text-justify">
              IB students across Abu Dhabi, Dubai, Sharjah, Ajman, Al Ain, Ras Al Khaimah, and Fujairah work within a framework that asks for more than content knowledge. From <a href="/myp" className="text-[#4a90d9] font-semibold underline">MYP</a> through DP, students engage with assessment criteria, research tasks, academic writing, reflection, and sustained independent learning. Schools in Khalifa City, Yas Island, Saadiyat Island, Reem Island, Dubai Hills, Arabian Ranches, and Palm Jumeirah follow the same IB criteria as international peers. Ustaad supports IB students through one-to-one tutoring that strengthens concepts, addresses subject gaps, and improves performance against IB assessment criteria.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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
              <p className="text-gray-600 text-[15px] leading-relaxed">Common questions about IB tutoring.</p>
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
        title="Book an IB Tutor"
        subtitle="MYP, SL, or HL. Tell us the subject, year group, and current grade target."
        button1Text="Book Your First IB Lesson"
        subtext1="First lesson free. No commitment."
      />

    </Layout>
  );
}