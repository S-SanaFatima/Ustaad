import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom, BookOpen, Brain, Briefcase, Calculator, ChevronDown,
  Dna, FileText, FlaskConical, GraduationCap, HelpCircle, Landmark, Link2, MapPin,
  MessageCircle, PenTool, Target, TrendingUp, Lightbulb, BarChart3,
} from 'lucide-react';
import { Layout, GradientHeadingText, FinalCTA, StatsBar, HeroCTABlock, SchoolsMarquee } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const aLevelSchemaFaqs = [
  { q: "Which A-Level exam boards do you support?", a: "Cambridge International, Pearson Edexcel International, AQA, and OCR. Tutors are paired with the exact specification your child's school sits." },
  { q: "How many A-Level subjects should students take?", a: "Most students take three subjects, sometimes four where Further Mathematics fits the timetable. The right combination depends on the universities and courses being considered." },
  { q: "Do you help students prepare for university entrance tests?", a: "Yes. Common tests include the LNAT, TMUA, UCAT, and Oxford and Cambridge subject-specific admissions papers, all of which Ustaad covers." },
  { q: "When should A-Level preparation realistically begin?", a: "The strongest results come from steady support across both Year 12 and Year 13. Catching ground earlier in Year 12 is much easier than catching up in the months before final papers." },
  { q: "Do you support the Extended Project Qualification (EPQ)?", a: "Yes. EPQ support covers topic choice, research planning, written drafts, and presentation rehearsal, all aligned with how examiners mark each section." },
  { q: "What is the difference between AS-Level and A-Level?", a: "AS-Level covers the first year of A-Level study and can be sat as a standalone qualification on some specifications. Most UAE schools now follow linear A-Level, with all papers sat at the end of Year 13." },
  { q: "Do you support both linear and modular A-Level specifications?", a: "Yes. Cambridge International runs modular AS plus A2 examinations, while UK-based linear A-Levels sit all papers at the end of Year 13. Tutors work with whichever route the student is on." },
  { q: "Can A-Level support also help with predicted grades?", a: "Yes. Predicted grades carry significant weight in university applications, and stronger preparation through Year 12 directly improves the predicted grades a school will issue." },
];

export default function ALevelPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      <SEOHead
        title="A-Level Tutors UAE | Dubai & Abu Dhabi | Ustaad"
        description="Specialised A-Level tutoring across Cambridge, Edexcel, AQA, and OCR for Year 12 and 13 students in the UAE. First lesson free."
        canonical="/a-level"
        ogImage="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp"
        schema={[
          localBusinessSchema,
          serviceSchema("Private A-Level Tutoring UAE", "Specialised 1-to-1 A-Level tutoring for all subjects across the UAE.", "/a-level"),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Curriculum", url: "/curriculum" }, { name: "A-Level", url: "/a-level" }]),
          faqSchema(aLevelSchemaFaqs),
        ]}
      />
      {/* ── HERO CANVAS ── */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Background image with blur */}
        <img
          src="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp"
          srcSet="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp 1x, /UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.jpeg 2x"
          alt="Ustaad tutor supporting Year 12 and Year 13 A-Level students through Cambridge Edexcel and AQA exam preparation across the UAE"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
                width={1200} height={800} fetchPriority="high" />
        {/* Overlay — white from left fading to dark right, so left text area is bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />

        {/* Content — dark text on bright left side */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl pr-8 sm:pr-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <Landmark className="h-4 w-4" /> A-Level
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
              Pre-University Subject{' '}
              <GradientHeadingText text="Specialists." />
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
            <p className="text-gray-700 text-lg mb-4 leading-relaxed max-w-xl">
              Specialised tutoring across Cambridge, Edexcel, AQA, and OCR A-Levels for Year 12 and 13 students in the UAE.
            </p>
            <p className="text-[#0f4a9b] text-sm font-semibold mb-8">
              Based in Abu Dhabi? See our dedicated <a href="/a-level-tutor-abu-dhabi" className="underline font-bold hover:text-[#0a1f3d]">A-Level Tutor Abu Dhabi</a> page.
            </p>
            <HeroCTABlock className="mb-4" trustText="✦ First lesson free. No commitment.">
              Book Your First A-Level Lesson
            </HeroCTABlock>
          </motion.div>
        </div>

      </section>

      <StatsBar />

      <SchoolsMarquee
        header={
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-2">
              Partner Schools & Communities
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d]">
              Leading Abu Dhabi Schools
            </h2>
          </div>
        }
      />

      {/* ── WHY A-LEVELS ARE ACADEMICALLY DIFFERENT ── */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

            {/* Left: heading */}
            <div className="lg:w-[320px] xl:w-[360px] flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-5">
                <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Differences</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-5 leading-tight">
                <GradientHeadingText text="Why A-Levels Are Academically Different" />
              </h2>
 <p className="text-gray-500 text-base leading-relaxed">
                What changes between <a href="/gcse" className="text-[#0f4a9b] font-semibold underline">GCSE</a> and A-Level, and why preparation matters.
              </p>
            </div>

            {/* Right: 2×2 zero-margin grid */}
            <div className="flex-1 border border-gray-200 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
                {[
                  { title: "Sharper Content",     desc: "A-Level Mathematics introduces calculus, never seen at GCSE, used through university.",         icon: <Calculator className="h-5 w-5" />, num: '01' },
                  { title: "Independent Thought", desc: "Schools typically pair one taught period with two hours of independent study.",                 icon: <Brain className="h-5 w-5" />,       num: '02' },
                ].map((m, i) => (
                  <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                    <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                      <svg width="0" height="0" className="absolute"><defs><linearGradient id={`alevDiffIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                      {React.cloneElement(m.icon, { style: { stroke: `url(#alevDiffIcon${i})` } })}
                    </div>
                    <h3 className="text-base font-extrabold text-[#0a1f3d] relative z-10">{m.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500 text-justify relative z-10">{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                {[
                  { title: "Longer Answers", desc: "A-Level History essays run around 800 words; English Literature responses 1,200 words.",   icon: <FileText className="h-5 w-5" />, num: '03' },
                  { title: "Subject Focus",  desc: "Students pick three or four subjects and study them in much greater depth than at GCSE.",  icon: <Target className="h-5 w-5" />,    num: '04' },
                ].map((m, i) => (
                  <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                    <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{m.num}</div>
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                      <svg width="0" height="0" className="absolute"><defs><linearGradient id={`alevDiffIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                      {React.cloneElement(m.icon, { style: { stroke: `url(#alevDiffIcon${i + 2})` } })}
                    </div>
                    <h3 className="text-base font-extrabold text-[#0a1f3d] relative z-10">{m.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500 text-justify relative z-10">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── A-LEVEL SUBJECTS WE COVER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="A-Level Subjects We Cover" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Six A-Level subjects, mapped to the university routes they open up.</p>
          </div>
          {(() => {
            const subjects = [
              { name: "Mathematics", desc: "Differentiation · Integration · Differential Equations",    href: "/maths",     wm: <Calculator className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Physics",     desc: "Quantum Mechanics · Fields · Particle Physics",             href: "/physics",   wm: <Atom className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />       },
              { name: "Chemistry",   desc: "Transition Metals · Aromatic Chemistry · Spectroscopy",     href: "/chemistry", wm: <FlaskConical className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
              { name: "Biology",     desc: "Gene Expression · Nervous Coordination · Populations",      href: "/biology",   wm: <Dna className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />        },
              { name: "English",     desc: "Tragedy · Drama · Unseen Prose",                            href: "/english",   wm: <BookOpen className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />   },
              { name: "Business",    desc: "Strategic Direction · Global Business · Investment Appraisal", href: "/business", wm: <Briefcase className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />  },
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
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-[0_8px_32px_rgba(15,74,155,0.25)]">
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#C7A24A]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.1)]">
                <Lightbulb className="h-5 w-5 text-[#C7A24A]" />
              </div>
              <div className="relative flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C7A24A] mb-0.5">Also Available</p>
                <p className="text-white/90 text-sm font-medium leading-snug">Further Mathematics, Economics, and Computer Science are also covered where needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FROM KNOWLEDGE TO ANALYSIS ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="From Knowledge to Analysis" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              A-Level study asks more of your child than GCSE ever did.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { title: "Applying Knowledge",   desc: "Familiar ideas now appear in questions your child has never seen before.",          icon: <Brain className="h-6 w-6 text-white" />,     wm: <Brain className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
              { title: "Connecting Topics",    desc: "Topics no longer sit alone; they must link across the whole syllabus.",             icon: <Link2 className="h-6 w-6 text-white" />,     wm: <Link2 className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
              { title: "Evaluating Evidence",  desc: "Sources, claims, and answers all need to hold up under clear reasoning.",           icon: <FileText className="h-6 w-6 text-white" />,  wm: <FileText className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
              { title: "Independent Thinking", desc: "Marks come from analysis and judgement, not from cramming the night before.",       icon: <Lightbulb className="h-6 w-6 text-white" />, wm: <Lightbulb className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
            ].map((m, i) => (
              <div key={i} className="relative bg-white border border-[#0f4a9b]/10 rounded-[24px] p-5 sm:p-8 pt-8 sm:pt-10 flex flex-col items-start text-left hover:shadow-[0_8px_32px_rgba(15,74,155,0.10)] hover:border-[#0f4a9b]/40 hover:ring-2 hover:ring-[#0f4a9b]/15 transition-all duration-300 overflow-hidden" style={{ minHeight: 180 }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-[0_0_15px_rgba(15,74,155,0.4)] z-10 flex-shrink-0">{m.icon}</div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] mb-1 z-10">{m.title}</h3>
                <p className="text-gray-500 text-sm font-medium text-justify z-10">{m.desc}</p>
                <div className="absolute right-4 bottom-4 pointer-events-none select-none">{m.wm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILDING INDEPENDENT ACADEMIC THINKING ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
              <GradientHeadingText text="Building Independent Academic Thinking" />
            </h2>
 <p className="text-gray-500 text-base leading-relaxed">
              What A-Level study looks like outside lessons, and where Ustaad steadies the work.
            </p>
          </div>

          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {[
                { title: "Self-Direction",  desc: "Revision becomes your child's job at Year 12; Ustaad keeps the work from drifting.", icon: <Target className="h-5 w-5" />, num: '01' },
                { title: "Sound Judgement", desc: "Each week your child must pick what to study next; we guide that choice.",            icon: <Brain className="h-5 w-5" />,  num: '02' },
              ].map((item, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{item.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`alevIndIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(item.icon, { style: { stroke: `url(#alevIndIcon${i})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {[
                { title: "Layered Problems", desc: "Compound problems need a written plan first; tutors coach that habit until it sticks.", icon: <BarChart3 className="h-5 w-5" />,  num: '03' },
                { title: "Workload Habits",  desc: "Three A-Levels need five to six hours each week; we keep schedules on track.",           icon: <TrendingUp className="h-5 w-5" />, num: '04' },
              ].map((item, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{item.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg width="0" height="0" className="absolute"><defs><linearGradient id={`alevIndIcon${i + 2}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                    {React.cloneElement(item.icon, { style: { stroke: `url(#alevIndIcon${i + 2})` } })}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE USTAAD APPROACH ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="The Ustaad Approach to A-Level Excellence" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Four ways Ustaad supports students through the two A-Level years.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { title: "Address Gaps Early", desc: "Year 11 trigonometry gaps surface in Year 12 Mechanics within the first half-term.",             icon: <Target className="h-7 w-7" />,     wm: <Target className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
              { title: "Joining Topics",     desc: "Tutors help students connect ideas across the syllabus, which higher-mark questions reward.",    icon: <Link2 className="h-7 w-7" />,      wm: <Link2 className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
              { title: "Sharper Writing",    desc: "Essays and longer answers sharpen through drafting, marking, and feedback.",      icon: <PenTool className="h-7 w-7" />,    wm: <PenTool className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
              { title: "Two-Year Rhythm",    desc: "Year 12 mocks in May, Year 13 mocks in November, final papers from May.",                       icon: <TrendingUp className="h-7 w-7" />, wm: <TrendingUp className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
            ].map((m, i) => (
              <div key={i} className="relative bg-white border border-[#0f4a9b]/10 rounded-[24px] p-5 sm:p-8 pt-8 sm:pt-10 flex flex-col items-center text-center hover:shadow-[0_8px_32px_rgba(15,74,155,0.10)] hover:border-[#0f4a9b]/40 hover:ring-2 hover:ring-[#0f4a9b]/15 transition-all duration-300 overflow-hidden" style={{ minHeight: 180 }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                <svg width="0" height="0" className="absolute"><defs><linearGradient id={`alevApproachIcon${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e5ba8" /><stop offset="100%" stopColor="#0a3a79" /></linearGradient></defs></svg>
                <div className="w-12 h-12 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center mb-5 z-10 flex-shrink-0">{React.cloneElement(m.icon, { style: { stroke: `url(#alevApproachIcon${i})` } })}</div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-1 z-10">{m.title}</h3>
                <p className="text-gray-500 text-sm font-medium text-justify z-10">{m.desc}</p>
                <div className="absolute right-4 bottom-4 pointer-events-none select-none">{m.wm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNIVERSITY PATHWAYS ── */}
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
                <span className="text-white/70 text-[11px] font-bold uppercase tracking-[0.15em]">University Pathways</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                University Pathways and{' '}
                <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">Competitive Admissions</span>
              </h2>
              <p className="text-blue-100/60 text-sm leading-relaxed">How A-Level choices shape university access and competitive degree applications.</p>
            </div>

            {/* Right: three premium paragraphs */}
            <div className="flex-1">
              <div className="rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.25)] border border-white/10 flex flex-col gap-5" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', backdropFilter: 'blur(16px)'}}>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#C7A24A] to-[#f0d080] rounded-full" />
                <p className="text-blue-100/85 text-sm leading-relaxed">Every offer letter turns on two things: A-Level grades and the subjects behind them.</p>
                <p className="text-blue-100/85 text-sm leading-relaxed">Medicine, engineering, and law each set their own non-negotiable subject combinations and minimum grades.</p>
                <p className="text-blue-100/85 text-sm leading-relaxed">Ustaad guides A-Level choices in <a href="/igcse" className="font-semibold underline" style={{color: '#C7A24A'}}>Year 11</a> and protects each predicted grade through finals.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SUPPORTING STUDENTS ACROSS UAE ── */}
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
                Supporting A-Level Students{' '}
                <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">Across the UAE</span>
              </h2>
            </div>
            <p className="text-blue-100/50 text-sm leading-relaxed max-w-xs lg:text-right">A-Level students across every emirate, Year 12 through Year 13.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {[
              { city: "Abu Dhabi",      note: "Capital of the UAE" },
              { city: "Dubai",          note: "Most populous emirate" },
              { city: "Sharjah",        note: "Growing A-Level community" },
              { city: "Ajman",          note: "British system schools" },
              { city: "Al Ain",         note: "Garden City" },
              { city: "Ras Al Khaimah", note: "Northern Emirates" },
              { city: "Fujairah",       note: "East coast" },
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

          <div className="bg-white/5 border border-white/8 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center shadow-[0_0_16px_rgba(15,74,155,0.4)]">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed text-justify flex-1">
              A-Level study unfolds over two demanding years, during which UAE families often balance final-year preparation with university applications, predicted grades, and entrance test windows. Whether a student attends a{' '}
              <a href="/british-curriculum" className="text-[#C7A24A] font-semibold underline">British system school</a>{' '}
              in Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, or Fujairah, the A-Level path runs in parallel with the wider admissions cycle. Ustaad's A-Level tutors work alongside students through both Year 12 and Year 13, holding subject understanding steady from first-year topics through to final-year synoptic papers, while parents and schools focus on the larger university plan.
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
              <p className="text-gray-600 text-[15px] leading-relaxed">Common questions from parents and students about A-Level tutoring.</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {([
                { q: "Which A-Level exam boards do you support?",
                  a: "Cambridge International, Pearson Edexcel International, AQA, and OCR. Tutors are paired with the exact specification your child's school sits." },
                { q: "How many A-Level subjects should students take?",
                  a: "Most students take three subjects, sometimes four where Further Mathematics fits the timetable. The right combination depends on the universities and courses being considered." },
                { q: "Do you help students prepare for university entrance tests?",
                  a: "Yes. Common tests include the LNAT, TMUA, UCAT, and Oxford and Cambridge subject-specific admissions papers, all of which Ustaad covers. See our exam preparation page for details." },
                { q: "When should A-Level preparation realistically begin?",
                  a: "The strongest results come from steady support across both Year 12 and Year 13. Catching ground earlier in Year 12 is much easier than catching up in the months before final papers." },
                { q: "Do you support the Extended Project Qualification (EPQ)?",
                  a: "Yes. EPQ support covers topic choice, research planning, written drafts, and presentation rehearsal, all aligned with how examiners mark each section." },
                { q: "What is the difference between AS-Level and A-Level?",
                  a: "AS-Level covers the first year of A-Level study and can be sat as a standalone qualification on some specifications. Most UAE schools now follow linear A-Level, with all papers sat at the end of Year 13." },
                { q: "Do you support both linear and modular A-Level specifications?",
                  a: "Yes. Cambridge International runs modular AS plus A2 examinations, while UK-based linear A-Levels sit all papers at the end of Year 13. Tutors work with whichever route the student is on." },
                { q: "Can A-Level support also help with predicted grades?",
                  a: "Yes. Predicted grades carry significant weight in university applications, and stronger preparation through Year 12 directly improves the predicted grades a school will issue." },
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
        title="Book an A-Level Tutor"
        subtitle="Your offer, on track."
        button1Text="Book Your First A-Level Lesson"
        subtext1="First lesson free. No commitment."
      />

    </Layout>
  );
}
