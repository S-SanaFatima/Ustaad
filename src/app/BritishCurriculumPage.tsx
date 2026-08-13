import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// AnimatePresence kept for BritishPathwaySection
import {
  Atom, Award, BookOpen, Brain, Briefcase, Calculator,
  ChevronDown, Dna, FileText, FlaskConical, GraduationCap,
  HelpCircle, Landmark, MapPin, MessageCircle, Target, TrendingUp,
} from 'lucide-react';
import { Layout, GradientHeadingText, FinalCTA, StatsBar, HeroCTABlock } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const britishSchemaFaqs = [
  { q: "What is the difference between the British Curriculum and the American Curriculum?", a: "The British system is subject-based and assessed through external exams like GCSE, IGCSE, and A-Level. The American model is GPA- and credit-based, measured continuously through the year. Study specialises by Year 12 in the British Curriculum, while American programmes stay broader until graduation." },
  { q: "At what age does the British Curriculum start in UAE schools?", a: "Most schools admit children from age three, into Foundation Stage, and continue through Year 13. Formal subject teaching begins at Year 7, with the first external exams at the end of Year 11." },
  { q: "Which examination boards administer IGCSE, GCSE, and A-Level in the UAE?", a: "UAE schools typically use Cambridge International (CAIE) and Pearson Edexcel for IGCSE and A-Level, alongside AQA, OCR, and Edexcel for GCSE. The exact board is set at school level." },
  { q: "How many A-Level subjects do students usually take?", a: "Most students take three A-Levels across Years 12 and 13. Four are sometimes taken when a stronger profile is needed for competitive courses like medicine or engineering." },
  { q: "Can a student switch from another curriculum into the British Curriculum?", a: "Yes. Students from American, IB, Indian, or French systems commonly transfer in. The smoothest moves happen before Year 7 or Year 10, ahead of external GCSE exams." },
  { q: "Does Ustaad support students studying the British Curriculum?", a: "Yes. We support GCSE, IGCSE, and A-Level students across the UAE through one-to-one tutoring, matched to their school and exam board." },
];

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="font-semibold underline underline-offset-2" style={{ color: '#5b3a8a' }}>{children}</a>
);

const pathwayStages = [
  { key: "ks3",    stage: "Key Stage 3",  years: "Years 7–9",   icon: <Target    className="h-6 w-6 text-white" />, wm: <Target    className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.8} />, desc: "Broader subjects and the first taste of independent, curious thinking." },
  { key: "gcse",   stage: "GCSE / IGCSE", years: "Years 9–11",  icon: <FileText  className="h-6 w-6 text-white" />, wm: <FileText  className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.8} />, desc: "Recognised qualifications across English, mathematics, sciences, and other school subjects." },
  { key: "alevel", stage: "A-Level",      years: "Years 12–13", icon: <Award     className="h-6 w-6 text-white" />, wm: <Award     className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.8} />, desc: "Chosen subjects studied in greater depth, with sharper academic focus." },
];

function BritishPathwaySection() {
  const [activeKey, setActiveKey] = useState(pathwayStages[0].key);
  const activeIndex = pathwayStages.findIndex(s => s.key === activeKey);
  const current = pathwayStages[activeIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/6 border border-[#0f4a9b]/15 rounded-full mb-4">
            <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">Year 7 to Year 13</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
            <GradientHeadingText text="The British Curriculum Pathway" />
          </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            A clear academic pathway through the secondary years, supported by Ustaad at every stage.
          </p>
        </div>

        {/* Desktop: pill progress bar */}
        <div className="hidden md:flex relative items-center bg-[#f4f6fb] rounded-2xl p-2 gap-1 mb-6">
          <div
            className="absolute left-2 top-2 bottom-2 bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] rounded-xl transition-all duration-300 pointer-events-none"
            style={{ width: `calc(${((activeIndex + 1) / pathwayStages.length) * 100}% - 16px)` }}
          />
          {pathwayStages.map((s, i) => {
            const isActive = s.key === activeKey;
            const isPast = i < activeIndex;
            return (
              <button
                key={s.key}
                onClick={() => setActiveKey(s.key)}
                className="relative z-10 flex-1 flex flex-col items-center gap-0.5 py-3 px-2 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <span className={`text-[10px] font-extrabold uppercase tracking-[0.12em] leading-none ${isActive ? 'text-[#C7A24A]' : isPast ? 'text-white/50' : 'text-gray-400'}`}>
                  {s.years}
                </span>
                <span className={`text-sm font-extrabold leading-tight ${isActive ? 'text-white' : isPast ? 'text-white/80' : 'text-[#0a1f3d]'}`}>
                  {s.stage}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile: vertical stacked list */}
        <div className="flex md:hidden flex-col gap-2 mb-6">
          {pathwayStages.map((s, i) => {
            const isActive = s.key === activeKey;
            const isPast = i < activeIndex;
            return (
              <button
                key={s.key}
                onClick={() => setActiveKey(s.key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 text-left
                  ${isActive
                    ? 'bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] border-transparent shadow-[0_4px_16px_rgba(15,74,155,0.25)]'
                    : isPast
                      ? 'bg-[#f4f6fb] border-[#0f4a9b]/10'
                      : 'bg-white border-[#E5E7EB]'
                  }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 ${isActive ? 'bg-white/15' : isPast ? 'bg-[#0f4a9b]/10' : 'bg-[#f2f4f7]'}`}>
                  <span className={`text-[10px] font-extrabold ${isActive ? 'text-[#C7A24A]' : isPast ? 'text-[#0f4a9b]/50' : 'text-gray-400'}`}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`text-sm font-extrabold block leading-tight ${isActive ? 'text-white' : 'text-[#0a1f3d]'}`}>{s.stage}</span>
                  <span className={`text-[10px] font-semibold ${isActive ? 'text-[#C7A24A]' : 'text-gray-400'}`}>{s.years}</span>
                </div>
                {isActive && <div className="w-1.5 h-5 rounded-full bg-[#C7A24A] flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white border border-[#0f4a9b]/10 rounded-2xl p-8 overflow-hidden shadow-[0_8px_40px_rgba(15,74,155,0.07)]"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A]" />
            <div className="absolute right-4 bottom-4 pointer-events-none select-none">{current.wm}</div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center shadow-[0_0_15px_rgba(15,74,155,0.4)] flex-shrink-0">
                {current.icon}
              </div>
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#C7A24A]/15 to-[#A8892A]/10 border border-[#C7A24A]/30 rounded-full mb-2">
                  <span className="text-[#C7A24A] text-[11px] font-extrabold uppercase tracking-[0.15em]">{current.years}</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">{current.stage}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{current.desc}</p>
              </div>
            </div>

            {/* Step indicator dots */}
            <div className="flex items-center gap-2 mt-6">
              {pathwayStages.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => setActiveKey(s.key)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${s.key === activeKey ? 'w-6 bg-[#0f4a9b]' : i < activeIndex ? 'w-3 bg-[#0f4a9b]/30' : 'w-3 bg-gray-200'}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default function BritishCurriculumPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [howWeHelpExpanded, setHowWeHelpExpanded] = useState(false);

  return (
    <Layout>
      <SEOHead
        title="British Curriculum Tutors UAE | IGCSE & A-Level | Ustaad"
        description="One-to-one tutoring shaped around the academic standards, examination demands, and long-term expectations of the British Curriculum. First lesson free."
        canonical="/british-curriculum"
        ogImage="/UpdatedImages/year-11-igcse-cambridge-edexcel-exam-paper-tutor-ras-al-khaimah.webp"
        schema={[
          localBusinessSchema,
          serviceSchema("British Curriculum Focused Support UAE", "One-to-one British Curriculum tutoring for IGCSE, GCSE, and A-Level across the UAE.", "/british-curriculum"),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Curriculum", url: "/curriculum" }, { name: "British Curriculum", url: "/british-curriculum" }]),
          faqSchema(britishSchemaFaqs),
        ]}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
        <img
          src="/UpdatedImages/year-11-igcse-cambridge-edexcel-exam-paper-tutor-ras-al-khaimah.webp"
          alt="Ustaad tutor guiding Year 11 IGCSE students through Cambridge and Edexcel exam paper preparation in Ras Al Khaimah"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
                width={1200} height={800} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl pr-8 sm:pr-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <Landmark className="h-4 w-4" /> British Curriculum
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79] bg-clip-text text-transparent">Focused Support.</span>{' '}
              Steady Progress.
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
            <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-xl">
              One-to-one tutoring shaped around the academic standards, examination demands, and long-term expectations of the British Curriculum.
            </p>
            <HeroCTABlock className="mb-4" trustText="✦ First lesson free. No commitment.">
              Book Your Free Trial
            </HeroCTABlock>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST SIGNALS ── */}
      <StatsBar />

      {/* ── SECTION 3: THE BRITISH CURRICULUM JOURNEY ── */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="The British Curriculum Journey" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Three British Curriculum stages your child moves through during school.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                eyebrow: "Years 9 to 11",
                title: "IGCSE",
                points: ["Foundation building", "Exam preparation", "Subject understanding"],
                href: "/igcse",
                cta: "Explore IGCSE",
                icon: <BookOpen className="h-6 w-6 text-white" />,
                wm: <BookOpen className="h-40 w-40 text-[#0f4a9b]/5" strokeWidth={0.6} />,
              },
              {
                eyebrow: "Years 10 to 11",
                title: "GCSE",
                points: ["Grade improvement", "Exam technique", "Coursework support"],
                href: "/gcse",
                cta: "Explore GCSE",
                icon: <GraduationCap className="h-6 w-6 text-white" />,
                wm: <GraduationCap className="h-40 w-40 text-[#0f4a9b]/5" strokeWidth={0.6} />,
              },
              {
                eyebrow: "Years 12 to 13",
                title: "A-Level",
                points: ["Advanced subject mastery", "Independent learning", "University preparation"],
                href: "/a-level",
                cta: "Explore A-Level",
                icon: <Award className="h-6 w-6 text-white" />,
                wm: <Award className="h-40 w-40 text-[#0f4a9b]/5" strokeWidth={0.6} />,
              },
            ].map((card, i) => (
              <div key={i} className="relative bg-white rounded-2xl border border-[#0f4a9b]/10 shadow-[0_4px_24px_rgba(15,74,155,0.06)] hover:shadow-[0_16px_48px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                <div className="absolute -bottom-4 -right-4 pointer-events-none select-none">{card.wm}</div>
                <div className="p-8 pt-10 flex flex-col flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(15,74,155,0.35)] flex-shrink-0 group-hover:shadow-[0_0_24px_rgba(15,74,155,0.55)] transition-shadow duration-300">{card.icon}</div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-3 group-hover:text-[#0f4a9b] transition-colors duration-200">{card.title}</h3>
                  <div className="inline-flex items-center self-start px-3 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/20 rounded-full mb-4">
                    <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">{card.eyebrow}</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {card.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-500 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]/50 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={card.href}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white text-sm font-bold shadow-[0_4px_14px_rgba(15,74,155,0.25)] hover:shadow-[0_6px_20px_rgba(15,74,155,0.40)] transition-all duration-200 mt-auto"
                  >
                    {card.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HOW WE HELP ── */}
      <section className="py-24 bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#C7A24A]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
                <BookOpen className="h-3.5 w-3.5 text-[#C7A24A]" />
                <span className="text-white/70 text-[11px] font-bold uppercase tracking-[0.15em]">How We Help</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">
                How We Help British Curriculum{' '}
                <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">Students</span>
              </h2>
            </div>

            <div className="relative bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.20)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#4a90d9] to-[#C7A24A]" />
              <Brain className="absolute -bottom-6 -right-6 w-40 h-40 text-white/[0.04] pointer-events-none" strokeWidth={0.8} />

              <div className="relative z-10 p-8 sm:p-10">
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { icon: <Target className="h-3.5 w-3.5 text-[#C7A24A]" />,   label: "Every Stage" },
                    { icon: <FileText className="h-3.5 w-3.5 text-[#C7A24A]" />, label: "IGCSE · GCSE · A-Level" },
                    { icon: <Brain className="h-3.5 w-3.5 text-[#C7A24A]" />,    label: "One-to-One" },
                  ].map((chip, i) => (
                    <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/15 rounded-full">
                      {chip.icon}
                      <span className="text-white/80 text-[11px] font-bold">{chip.label}</span>
                    </div>
                  ))}
                </div>

                <p className="text-blue-100/75 text-[15px] leading-[1.95] mb-5 text-justify">
                  Most British Curriculum students don't fall behind because they can't do the work. They miss what a question is really asking, skip what the mark scheme rewards, or study in ways that don't stick. Ustaad's one-to-one tutors sit with your child and unpack each of those moments. Lessons follow the exact specification their school uses, matched to the topic and exam paper they're working on now.
                </p>
                <p className={`text-blue-100/75 text-[15px] leading-[1.95] text-justify ${howWeHelpExpanded ? '' : 'hidden'} sm:block`}>
                  Across a term, that looks like reading command words the way examiners do, breaking assessment objectives into clear steps, past paper practice marked to real grade boundaries, and short revision routines your child can run alone. You stay in the loop, so progress is never hidden.
                </p>
                <button
                  onClick={() => setHowWeHelpExpanded(!howWeHelpExpanded)}
                  className="sm:hidden mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 text-xs font-bold transition-colors duration-200"
                >
                  {howWeHelpExpanded ? <><ChevronDown className="h-3.5 w-3.5 rotate-180" /> Read Less</> : <><ChevronDown className="h-3.5 w-3.5" /> Read More</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SUBJECTS WE SUPPORT ── */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Subjects We Support" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Six core subjects, supported across the British Curriculum.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { name: "Mathematics", desc: "Pure · Mechanics · Statistics",            icon: <Calculator className="h-5 w-5 text-white" />, wm: <Calculator className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.8} />, href: "/maths" },
              { name: "Physics",     desc: "Thermodynamics · Optics · Astrophysics",   icon: <Atom className="h-5 w-5 text-white" />,       wm: <Atom className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.8} />,       href: "/physics" },
              { name: "Chemistry",   desc: "Bonding · Kinetics · Equilibria",          icon: <FlaskConical className="h-5 w-5 text-white" />, wm: <FlaskConical className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.8} />, href: "/chemistry" },
              { name: "Biology",     desc: "Physiology · Evolution · Biotechnology",   icon: <Dna className="h-5 w-5 text-white" />,        wm: <Dna className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.8} />,        href: "/biology" },
              { name: "English",     desc: "Comprehension · Argument · Analysis",      icon: <BookOpen className="h-5 w-5 text-white" />,    wm: <BookOpen className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.8} />,    href: "/english" },
              { name: "Business",    desc: "Case Studies · Finance · Strategy",        icon: <Briefcase className="h-5 w-5 text-white" />,   wm: <Briefcase className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.8} />,   href: "/business" },
            ].map((s, i) => (
              <div key={i} className="relative bg-white border border-[#0f4a9b]/10 rounded-2xl p-6 pt-8 hover:shadow-[0_8px_32px_rgba(15,74,155,0.10)] hover:border-[#0f4a9b]/40 hover:ring-2 hover:ring-[#0f4a9b]/15 transition-all duration-300 flex flex-col gap-3 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                <div className="w-10 h-10 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(15,74,155,0.35)]">{s.icon}</div>
                <a href={s.href} className="text-[#0a1f3d] font-extrabold text-base hover:text-[#0f4a9b] transition-colors">{s.name}</a>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="absolute right-3 bottom-3 pointer-events-none select-none">{s.wm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: THE BRITISH CURRICULUM PATHWAY ── */}
      <BritishPathwaySection />

      {/* ── SECTION 7: USTAAD METHODOLOGY ── */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Ustaad Methodology" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Our method matches what the curriculum asks at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Build Strong Foundations",    desc: "Small learning gaps grow quickly. We strengthen core concepts before they widen.",                 icon: <Target className="h-6 w-6 text-white" />,    wm: <Target className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Develop Independent Thinking", desc: "British exams reward thinking over recall. Application over memorisation.",                        icon: <Brain className="h-6 w-6 text-white" />,     wm: <Brain className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Higher Stage Ahead",           desc: "Students step into IGCSE, GCSE, and A-Levels ready for sharper academic demands.",                 icon: <TrendingUp className="h-6 w-6 text-white" />, wm: <TrendingUp className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
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

      {/* ── SECTION 8: BRITISH CURRICULUM IN UAE ── */}
      <section className="py-24 bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C7A24A]/5 rounded-full blur-[100px] pointer-events-none" />
        <Landmark className="absolute -bottom-10 -left-10 w-72 h-72 text-white/[0.03] pointer-events-none" strokeWidth={0.5} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full mb-6">
              <MapPin className="h-3.5 w-3.5 text-[#C7A24A]" />
              <span className="text-white/70 text-[11px] font-bold uppercase tracking-[0.15em]">British Curriculum in UAE</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">
              British Curriculum{' '}
              <span className="bg-gradient-to-r from-[#C7A24A] to-[#f0d080] bg-clip-text text-transparent">in the UAE</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <div className="bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl p-8 hover:bg-white/10 transition-all duration-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#C7A24A]/20 border border-[#C7A24A]/30 flex items-center justify-center flex-shrink-0">
                  <Landmark className="h-4 w-4 text-[#C7A24A]" />
                </div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#C7A24A] to-[#f0d080] rounded-full" />
              </div>
              <p className="text-blue-100/75 text-sm leading-relaxed text-justify">
                The British Curriculum is one of the most widely chosen school systems in the UAE, taught across Abu Dhabi, Dubai, and the Northern Emirates. If your child changes school within the UAE, the syllabus, year groups, and exam boards stay the same, so the year's progress isn't lost in the move.
              </p>
            </div>
            <div className="bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl p-8 hover:bg-white/10 transition-all duration-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#C7A24A]/20 border border-[#C7A24A]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-[#C7A24A]" />
                </div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#C7A24A] to-[#f0d080] rounded-full" />
              </div>
              <p className="text-blue-100/75 text-sm leading-relaxed text-justify">
                Ustaad supports families inside that system with one-to-one tutors across every emirate, each matched to your child's school, board, and current year group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FREQUENTLY ASKED QUESTIONS ── */}
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
                Common questions from parents and students about the British Curriculum.
              </p>
            </div>

            {/* Right: Accordion */}
            <div className="flex flex-col gap-[10px]">
              {([
                {
                  q: "What is the difference between the British Curriculum and the American Curriculum?",
                  a: <>The British system is subject-based and assessed through external exams like GCSE, IGCSE, and A-Level. The American model is GPA- and credit-based, measured continuously through the year. In the British Curriculum, study specialises by Year 12, while American programmes stay broader until graduation.</>,
                },
                {
                  q: "At what age does the British Curriculum start in UAE schools?",
                  a: <>Most schools admit children from age three, into Foundation Stage, and continue through Year 13. Formal subject teaching begins at Year 7, with the first external exams at the end of Year 11.</>,
                },
                {
                  q: "Which examination boards administer IGCSE, GCSE, and A-Level in the UAE?",
                  a: <>UAE schools typically use Cambridge International (CAIE) and Pearson Edexcel for <L href="/igcse">IGCSE</L> and <L href="/a-level">A-Level</L>, alongside AQA, OCR, and Edexcel for GCSE. The exact board is set at school level, so your child's specification follows the school they attend.</>,
                },
                {
                  q: "How many A-Level subjects do students usually take?",
                  a: <>Most students take three <L href="/a-level">A-Levels</L> across Years 12 and 13. Four are sometimes taken when a stronger profile is needed for competitive courses like medicine or engineering. Subjects are usually finalised at the end of Year 11.</>,
                },
                {
                  q: "Can a student switch from another curriculum into the British Curriculum?",
                  a: <>Yes. Students from American, IB, Indian, or French systems commonly transfer in. The smoothest moves happen before Year 7 or Year 10, ahead of external <L href="/gcse">GCSE</L> exams.</>,
                },
                {
                  q: "Does Ustaad support students studying the British Curriculum?",
                  a: <>Yes. We support <L href="/gcse">GCSE</L>, <L href="/igcse">IGCSE</L>, and <L href="/a-level">A-Level</L> students across the UAE through one-to-one tutoring, matched to their school and exam board.</>,
                },
              ] as { q: string; a: React.ReactNode }[]).map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    {/* Question row */}
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

                    {/* Answer panel */}
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

      {/* ── SECTION 10: FINAL CTA ── */}
      


      <FinalCTA
        title="Find Your British Curriculum Tutor"
        subtitle="Matched in minutes."
        button1Text="Book Your Free Trial"
        subtext1="Free trial. No commitment. IGCSE, GCSE, and A-Level supported."
      />

    </Layout>
  );
}
