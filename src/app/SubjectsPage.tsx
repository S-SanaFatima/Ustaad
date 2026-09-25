import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AlertTriangle, BadgeCheck, Banknote, BookMarked, BookOpen, Brain, BrainCircuit, Briefcase, Calculator,
  CalendarCheck, ChevronDown, FlaskConical, GraduationCap, HardHat, HelpCircle, Landmark,
  Lightbulb, LineChart, MessageCircle, Microscope, NotebookPen, Receipt, ScrollText, Sigma, SlidersHorizontal,
  Target, Timer, TrendingUp, Zap, Layers, Sparkles
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, FinalCTA, StatsBar, HeroCTABlock, Subject3DCard, CurriculumExpectations3D, StudyHabits3DSection, LessonPlanningTimeline3D, HigherGrades3DSection, SwipeIndicator, type SubjectItem } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';

const CORE_SUBJECTS: SubjectItem[] = [
  {
    id: 'maths',
    name: 'Mathematics',
    category: 'core',
    topics: 'Algebra · Geometry · Calculus · Trigonometry',
    skills: 'Problem Solving · Exam Techniques · Proofs',
    href: '/maths',
    cta: 'Explore Maths',
    curricula: ['IGCSE', 'A-Level', 'IB HL/SL', 'AP'],
  },
  {
    id: 'physics',
    name: 'Physics',
    category: 'core',
    topics: 'Mechanics · Electricity · Waves · Thermal',
    skills: 'Numerical Practice · Formula Mastery · Applied Study',
    href: '/physics',
    cta: 'Explore Physics',
    curricula: ['IGCSE', 'A-Level', 'IB HL/SL', 'AP Physics 1, 2, C'],
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    category: 'core',
    topics: 'Organic · Inorganic · Physical · Reactions',
    skills: 'Stoichiometry · Mechanism Analysis · Exam Prep',
    href: '/chemistry',
    cta: 'Explore Chemistry',
    curricula: ['IGCSE', 'A-Level', 'IB HL/SL', 'AP'],
  },
  {
    id: 'biology',
    name: 'Biology',
    category: 'core',
    topics: 'Cells · Genetics · Ecology · Physiology',
    skills: 'Core Concepts · Diagram Mastery · Exam Keywords',
    href: '/biology',
    cta: 'Explore Biology',
    curricula: ['IGCSE', 'A-Level', 'IB', 'AP Bio'],
  },
  {
    id: 'english',
    name: 'English Language and Literature',
    category: 'core',
    topics: 'Writing · Grammar · Literature · Rhetoric',
    skills: 'Text Analysis · Essay Structure · Critical Thought',
    href: '/english',
    cta: 'Explore English',
    curricula: ['IGCSE', 'A-Level', 'IB English A & B', 'AP Lang & Lit'],
  },
];

const COMMERCE_SUBJECTS: SubjectItem[] = [
  {
    id: 'business',
    name: 'Business Studies',
    category: 'commerce',
    topics: 'Marketing · Finance · Strategy · Global Enterprise',
    skills: 'Case Studies · 12-Mark Exam Techniques · Evaluation',
    href: '/business',
    cta: 'Explore Business',
    curricula: ['IGCSE', 'A-Level', 'IB HL/SL', 'AP'],
  },
  {
    id: 'economics',
    name: 'Economics',
    category: 'commerce',
    topics: 'Microeconomics · Macroeconomics · Development',
    skills: 'Data Interpretation · Diagram Analysis · Evaluation',
    href: '/economics',
    cta: 'Explore Economics',
    curricula: ['IGCSE', 'A-Level', 'IB', 'AP Micro/Macro'],
  },
  {
    id: 'accounting',
    name: 'Accounting',
    category: 'commerce',
    topics: 'Financial Reporting · Costing · Ledgers',
    skills: 'Ledger Accuracy · Balance Sheet Mastery · Exam Prep',
    href: '/accounting',
    cta: 'Explore Accounting',
    curricula: ['IGCSE', 'A-Level'],
  },
  {
    id: 'finance',
    name: 'Finance',
    category: 'commerce',
    topics: 'Investment · Banking · Corporate Finance · Valuations',
    skills: 'Financial Analysis · Decision Making · Quantitative',
    href: '/finance',
    cta: 'Explore Finance',
    curricula: ['A-Level'],
  },
];

const SPECIALISED_SUBJECTS: SubjectItem[] = [
  {
    id: 'statistics',
    name: 'Statistics and Probability',
    category: 'specialised',
    topics: 'Probability · Data Analysis · Hypothesis Models',
    skills: 'Quantitative Reasoning · Interpretation · Formulas',
    href: '/statistics',
    cta: 'Explore Statistics',
    curricula: ['A-Level', 'AP Stats', 'IB AI/AA'],
  },
  {
    id: 'engineering',
    name: 'Engineering Sciences',
    category: 'specialised',
    topics: 'Forces · Materials · Structural & Mechanical Design',
    skills: 'Applied Problem Solving · Engineering Maths',
    href: '/engineering',
    cta: 'Explore Engineering',
    curricula: ['A-Level', 'BTEC'],
  },
  {
    id: 'exam-prep',
    name: 'Exam Preparation',
    category: 'specialised',
    topics: 'Past Papers · Mark Scheme Rubrics · Timed Mocks',
    skills: 'Time Management · Error Correction · Grade 9 / A*',
    href: '/exam-preparation',
    cta: 'Explore Exam Prep',
    curricula: ['IGCSE', 'A-Level', 'IB DP', 'AP'],
  },
];

export default function SubjectsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'core' | 'commerce' | 'specialised'>('core');
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  const filterTabs = [
    { id: 'core', label: 'Core Sciences and Maths', count: 5 },
    { id: 'commerce', label: 'Commerce and Finance', count: 4 },
    { id: 'specialised', label: 'Specialised and Test Prep', count: 3 },
  ] as const;

  return (
    <Layout>
      <SEOHead
        title="Private Subject Tutors UAE | IGCSE, A-Level, IB, AP | Ustaad"
        description="Private 1-to-1 subject tutors in the UAE for IGCSE, A-Level, IB and AP. Maths, Sciences, English, Commerce. Free 30-minute trial. Since 2015."
        canonical="/subjects"
        ogImage="/UpdatedImages/private-subject-tutoring-igcse-ib-a-level-uae.webp"
        schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }])]}
      />
      {/* ── HERO ── */}
      <section className="min-h-[calc(100dvh-84px)] lg:min-h-[calc(100dvh-92px)] flex items-center relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 xl:gap-16 items-center">

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs sm:text-sm font-bold rounded-full mb-3.5 sm:mb-4 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Subjects
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-3 sm:mb-4 leading-[1.15] tracking-tight">
                <GradientHeadingText text="Master Every Subject, the Right Way" />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3.5 sm:mb-5" />
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-5 sm:mb-7 leading-relaxed max-w-xl">
                Subject-focused 1-to-1 tutoring across IGCSE, GCSE, A-Level, IB, and AP, developed for real exam and coursework demands.
              </p>
              <HeroCTABlock className="mb-4">
                Book Your Free Trial
              </HeroCTABlock>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[420px] xl:h-[460px] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-4 sm:border-8 border-white group z-10"
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

      {/* ── SUBJECT GRID WITH 3D PARALLAX CARDS ── */}
      <section id="subject-grid" className="py-8 sm:py-10 lg:py-12 bg-[#f8fafc] relative overflow-hidden">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0f4a9b]/5 via-transparent to-[#C7A24A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-2 tracking-tight">
              <GradientHeadingText text="Subjects We Cover" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Explore 1-to-1 subject tutoring across all major UK, US, and IB curricula, built for accuracy, deep conceptual clarity, and top exam scores.
            </p>
          </div>

          {/* Interactive Category Tabs Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white shadow-[0_4px_16px_rgba(15,74,155,0.3)] scale-105'
                      : 'bg-white text-[#475569] border border-slate-200 hover:border-[#0f4a9b]/40 hover:text-[#0f4a9b] shadow-xs'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`min-w-[22px] px-2 py-0.5 rounded-full text-[11px] font-extrabold flex items-center justify-center transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                    style={{ borderRadius: '100px' }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Category 1: Core Subjects (Present in HTML / SSR for crawling) */}
          <div className={activeCategory === 'core' ? 'block' : 'hidden'}>
            <div className="flex flex-nowrap overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-4 sm:gap-5 max-w-6xl mx-auto snap-x snap-mandatory pb-4 pt-1 px-4 sm:px-0 -mx-4 sm:mx-auto">
              {CORE_SUBJECTS.map((subject) => (
                <div key={subject.id} className="w-[82vw] max-w-[320px] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex-shrink-0 sm:flex-shrink flex snap-center">
                  <Subject3DCard subject={subject} />
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Commerce and Business (Present in HTML / SSR for crawling) */}
          <div className={activeCategory === 'commerce' ? 'block' : 'hidden'}>
            <div className="flex flex-nowrap overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto snap-x snap-mandatory pb-4 pt-1 px-4 sm:px-0 -mx-4 sm:mx-auto">
              {COMMERCE_SUBJECTS.map((subject) => (
                <div key={subject.id} className="w-[80vw] max-w-[300px] sm:w-auto flex-shrink-0 sm:flex-shrink snap-center flex">
                  <Subject3DCard subject={subject} />
                </div>
              ))}
            </div>
          </div>

          {/* Category 3: Specialised and Test Prep (Present in HTML / SSR for crawling) */}
          <div className={activeCategory === 'specialised' ? 'block' : 'hidden'}>
            <div className="flex flex-nowrap overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-4 sm:gap-5 max-w-6xl mx-auto snap-x snap-mandatory pb-4 pt-1 px-4 sm:px-0 -mx-4 sm:mx-auto">
              {SPECIALISED_SUBJECTS.map((subject) => (
                <div key={subject.id} className="w-[82vw] max-w-[320px] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex-shrink-0 sm:flex-shrink flex snap-center">
                  <Subject3DCard subject={subject} />
                </div>
              ))}
            </div>
          </div>

          {/* Swipe indicator on mobile */}
          <SwipeIndicator text="Swipe horizontally to explore all subjects" className="mt-4" />
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />
      </div>

      {/* ── HOW SUBJECTS DIFFER ACROSS CURRICULA (3D PARALLAX PODS & DEEP-DIVE) ── */}
      <CurriculumExpectations3D />

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />
      </div>

      {/* ── THE CHANGES PARENTS OFTEN NOTICE ── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#0f4a9b]/5 via-transparent to-[#C7A24A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
              <GradientHeadingText text="The Changes Parents Often Notice" />
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              As lessons settle in, parents notice these three changes most often.{' '}
              <a href="/blogs/igcse-maths-revision-low-marks" className="text-[#0f4a9b] font-semibold underline">
                Read more on why revision hours do not always pay off
              </a>.
            </p>
          </div>

          <div className="flex flex-nowrap overflow-x-auto sm:grid md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto snap-x snap-mandatory pb-4 pt-1 px-4 sm:px-0 -mx-4 sm:mx-auto">
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
              <div
                key={i}
                className="w-[80vw] max-w-[310px] sm:w-auto flex-shrink-0 sm:flex-shrink snap-center bg-gradient-to-br from-[#0b3d80] via-[#0f4a9b] to-[#072a59] border border-white/10 rounded-2xl p-7 flex flex-col items-start shadow-[0_10px_30px_rgba(11,61,128,0.18)] hover:shadow-[0_18px_45px_rgba(11,61,128,0.28)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                style={{ minHeight: 210 }}
              >
                {/* Top Subtle Gold Accent Shimmer */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent opacity-80" />

                <div className="w-12 h-12 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-xl flex items-center justify-center mb-5 shadow-[0_4px_14px_rgba(199,162,74,0.4)] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-[17px] font-extrabold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Swipe indicator on mobile */}
          <SwipeIndicator text="Swipe across all 3 benefits" className="mt-4" />
        </div>
      </section>

      {/* ── HABITS THAT OFTEN HOLD STUDENTS BACK (3D OBJECTS WITH STICKY NOTES) ── */}
      <StudyHabits3DSection />

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />
      </div>

      {/* ── HOW LESSONS ARE PLANNED (3D TIMELINE ORBIT PIPELINE) ── */}
      <LessonPlanningTimeline3D />

      {/* ── HOW SUBJECTS CHANGE IN HIGHER GRADES (TYPEWRITER FONT ANIMATION ON SCROLL) ── */}
      <HigherGrades3DSection />


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
