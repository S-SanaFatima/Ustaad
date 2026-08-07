import { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen, Brain, Calculator, ChevronDown, ClipboardList,
  Clock, FileText, FlaskConical, GraduationCap, HelpCircle,
  MapPin, MessageCircle, PenTool, TrendingUp,
} from 'lucide-react';
import { Layout, GradientHeadingText, StatsBar, HeroCTABlock, FinalCTA, ReadMoreParagraph } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

export default function MiddleSchoolPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subjects = [
    { name: 'Mathematics', topics: 'Fractions · Decimals · Percentages', href: '/maths', wm: <Calculator className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Science', topics: 'Earth Science · Life Science · Physical Science', href: '/sciences', wm: <FlaskConical className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'English Language Arts', topics: 'Vocabulary · Narrative Writing · Punctuation', href: '/english', wm: <BookOpen className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
  ];

  const skillItems = [
    { num: '01', title: 'Reading Beyond Text', desc: 'Interpret meaning, evidence, and author intent independently.', icon: <BookOpen className="h-5 w-5 text-[#0f4a9b]" /> },
    { num: '02', title: 'Structured Writing', desc: 'Write clear explanations backed by relevant supporting evidence.', icon: <PenTool className="h-5 w-5 text-[#0f4a9b]" /> },
    { num: '03', title: 'Math Reasoning', desc: 'Show every working step clearly, not only the final answer.', icon: <Calculator className="h-5 w-5 text-[#0f4a9b]" /> },
    { num: '04', title: 'Scientific Thinking', desc: 'Analyse evidence and justify each conclusion clearly.', icon: <Brain className="h-5 w-5 text-[#0f4a9b]" /> },
  ];

  const trackItems = [
    { title: 'Weekly Quizzes', desc: 'Short Friday quizzes check recent classroom learning.', icon: <Clock className="h-6 w-6 text-white" />, wm: <Clock className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
    { title: 'Unit Tests', desc: 'End-of-unit tests gather multiple topic chapters into one paper.', icon: <FileText className="h-6 w-6 text-white" />, wm: <FileText className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
    { title: 'Projects', desc: 'Research and presentations build wider academic skills.', icon: <ClipboardList className="h-6 w-6 text-white" />, wm: <ClipboardList className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
    { title: 'Participation', desc: 'Class engagement and attendance support overall progress.', icon: <GraduationCap className="h-6 w-6 text-white" />, wm: <GraduationCap className="h-28 w-28 text-[#0f4a9b]/8" strokeWidth={0.6} /> },
  ];

  const cities = [
    { name: 'Abu Dhabi', note: 'Khalifa City · Saadiyat · Reem · Yas' },
    { name: 'Dubai', note: 'Dubai Hills · Ranches · Marina · Palm' },
    { name: 'Sharjah', note: 'American Curriculum schools' },
    { name: 'Ajman', note: 'Rolling grade system' },
    { name: 'Al Ain', note: 'American system schools' },
    { name: 'Ras Al Khaimah', note: 'Northern Emirates' },
    { name: 'Fujairah', note: 'East coast' },
    { name: 'Umm Al Quwain', note: '8th Emirate' },
  ];

  const faqs = [
    {
      q: 'Why does Middle School feel like a step up from Elementary?',
      a: 'Students rotate between five or six different teachers across the school day, each with their own deadlines and grading style. Subject content deepens, and for many students this is the first time they juggle multiple long-term assignments at once.',
    },
    {
      q: 'How is performance measured in Middle School?',
      a: "A rolling mix of weekly quizzes, end-of-unit tests, research projects, classwork, and class participation. Each weight varies by school district and teacher, but the combined score forms the student's grade for that subject every quarter.",
    },
    {
      q: 'How does Middle School prepare students for High School?',
      a: <>The day-to-day routines built in Middle School, like tracking assignments across classes, drafting essays in stages, revising for unit tests, and meeting weekly deadlines, are exactly what <a href="/high-school" className="text-[#0f4a9b] font-semibold underline">Grade 9</a> expects from day one.</>,
    },
    {
      q: 'Which grades are considered Middle School?',
      a: 'Grades 6, 7, and 8 sit within Middle School in most American Curriculum schools. A few schools include Grade 5 in the Middle School cohort, but it remains an Elementary year for grading and report-card purposes.',
    },
    {
      q: 'Does Middle School performance affect university applications?',
      a: <>Middle School grades do not appear on the <a href="/high-school" className="text-[#0f4a9b] font-semibold underline">High School</a> transcript universities review, so they don't enter the GPA. The study habits built in these three years, however, directly shape Grade 9 performance, which does count toward the transcript.</>,
    },
    {
      q: 'When should parents consider tutoring during Middle School?',
      a: 'Usually at the point a subject starts slipping behind the class pace, or before a known transition such as Grade 5 to 6, or Grade 8 to 9. Starting early lets the gap close before it widens into a transcript problem later.',
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Middle School Tutors UAE | Grades 6–8 Tutoring | Ustaad"
        description="Online tutoring for Grades 6 to 8 across core subjects, focused on study habits and academic foundations. Book your first Middle School lesson."
        canonical="/middle-school"
        ogImage="/UpdatedImages/american-middle-school-tutoring-grades-6-8-uae.webp"
        schema={[
          localBusinessSchema,
          serviceSchema('Middle School Tutoring UAE', 'Expert 1-to-1 tutoring for middle school students across the UAE.', '/middle-school'),
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Middle School', url: '/middle-school' }]),
          faqSchema(faqs.map(f => ({ q: f.q, a: typeof f.a === 'string' ? f.a : '' }))),
        ]}
      />

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <img
          src="/UpdatedImages/american-middle-school-tutoring-grades-6-8-uae.webp"
          alt="Ustaad tutor building core academic foundations for Grade 6 to 8 American middle school students across Dubai and Abu Dhabi UAE"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
                width={1200} height={800} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl pr-8 sm:pr-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <BookOpen className="h-4 w-4" /> Middle School
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
              <GradientHeadingText text="Building Skills for What Comes Next." />
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
            <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-xl">
              Online tutoring for Grades 6 to 8 across core subjects, focused on study habits and academic foundations.
            </p>
            <HeroCTABlock trustText="✦ First lesson free. No commitment.">
              Book Your First Middle School Lesson
            </HeroCTABlock>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ── SECTION 3: ADJUSTING TO MIDDLE SCHOOL LIFE ── */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Adjusting To Middle School Life" />
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white border border-[#0f4a9b]/10 rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(15,74,155,0.06)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/60 to-transparent" />
              <div className="absolute bottom-4 right-6 pointer-events-none select-none opacity-[0.04]">
                <BookOpen className="h-40 w-40 text-[#0f4a9b]" strokeWidth={0.5} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(15,74,155,0.35)]">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <ReadMoreParagraph
                className="text-gray-700 text-base leading-relaxed relative z-10"
                preview="Middle School covers Grades 6 to 8 and brings more responsibility, higher expectations, and the start of independent learning. Students rotate between multiple teachers, manage their own deadlines, and meet weekly assignments across English Language Arts, Mathematics, and Science."
                more="Those who build strong organisation and study habits early adapt more easily as demands grow. Ustaad tutors sit alongside students during this shift, holding the work steady so the new pace doesn't outrun them. The first few weeks focus on organisation habits such as folder structure, deadline tracking, and homework rhythm, before adding subject content on top. Parents get a short note after each session showing where the student has steadied and where the next push will land."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CORE MIDDLE SCHOOL SUBJECTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Core Middle School Subjects" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Three core Middle School subjects taught across Grades 6, 7, and 8.
            </p>
          </div>
          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {subjects.map((subj, i) => (
                <div key={i} className="group relative flex flex-col gap-2 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-3 right-3 pointer-events-none select-none">{subj.wm}</div>
                  <a href={subj.href} className="text-xl font-extrabold text-[#0f4a9b] hover:text-[#0a3a79] transition-colors duration-200 relative z-10">{subj.name}</a>
                  <p className="text-gray-500 text-sm leading-relaxed relative z-10">{subj.topics}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />

      {/* ── SECTION 5: ACADEMIC SKILLS THAT DEMAND MORE ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Academic Skills That Demand More" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Students need stronger independent learning skills as expectations increase across subjects.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="border border-gray-200 rounded-2xl overflow-hidden mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
                {skillItems.slice(0, 2).map((item, i) => (
                  <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                    <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{item.num}</div>
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/[0.12] flex items-center justify-center flex-shrink-0 relative z-10">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                {skillItems.slice(2).map((item, i) => (
                  <div key={i + 2} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                    <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">{item.num}</div>
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/[0.12] flex items-center justify-center flex-shrink-0 relative z-10">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-[#0f4a9b]/10 rounded-xl p-6 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#0f4a9b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-5 w-5 text-[#0f4a9b]" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ustaad tutors build each of these skills one at a time, week by week, until the student uses them in classwork without being prompted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HOW MIDDLE SCHOOL TRACKS PROGRESS ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="How Middle School Tracks Progress" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Students are assessed through multiple activities throughout the year.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
              {trackItems.map((m, i) => (
                <div key={i} className="relative bg-white border border-[#0f4a9b]/10 rounded-[24px] p-5 sm:p-8 pt-8 sm:pt-10 flex flex-col items-start text-left hover:shadow-[0_8px_32px_rgba(15,74,155,0.10)] hover:border-[#0f4a9b]/40 hover:ring-2 hover:ring-[#0f4a9b]/15 transition-all duration-300 overflow-hidden" style={{ minHeight: 180 }}>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-[0_0_15px_rgba(15,74,155,0.4)] z-10 flex-shrink-0">{m.icon}</div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] mb-1 z-10">{m.title}</h3>
                  <p className="text-gray-500 text-sm font-medium z-10">{m.desc}</p>
                  <div className="absolute right-4 bottom-4 pointer-events-none select-none">{m.wm}</div>
                </div>
              ))}
            </div>
            <div className="bg-white border border-[#0f4a9b]/10 rounded-xl p-6 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#0f4a9b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <ClipboardList className="h-5 w-5 text-[#0f4a9b]" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ustaad prepares students for each format separately, so the quiz, the test, the project, and the participation grade each get their own focused practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PREPARING FOR HIGH SCHOOL ── */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Preparing For High School" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              The shift from Grade 8 to <a href="/high-school" className="text-[#0f4a9b] font-semibold underline">Grade 9</a> brings longer assignments, deeper readings, and the start of GPA-counting coursework.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white border border-[#0f4a9b]/10 rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(15,74,155,0.06)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C7A24A]/60 to-transparent" />
              <div className="absolute bottom-4 right-6 pointer-events-none select-none opacity-[0.04]">
                <TrendingUp className="h-40 w-40 text-[#0f4a9b]" strokeWidth={0.5} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(199,162,74,0.4)]">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <ReadMoreParagraph
                className="text-gray-700 text-base leading-relaxed relative z-10"
                preview="Students used to organising work across multiple classes, drafting essays in stages, and revising for unit tests adapt more smoothly. Middle School is where those habits get built, through nightly homework, weekly quizzes, and unit projects."
                more={<>Ustaad works alongside Grade 8 students to set those habits in place before <a href="/high-school" className="text-[#0f4a9b] font-semibold underline">Grade 9</a> makes them essential. Sessions deliberately mirror <a href="/high-school" className="text-[#0f4a9b] font-semibold underline">Grade 9</a> cadence with longer essays, multi-week unit reviews, and GPA-style expectations, so the academic jump feels gradual rather than abrupt. Families see a clear handover plan as the student moves into the first year that counts toward the transcript.</>}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: UAE ── */}
      <section className="py-16 lg:py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
            <MapPin className="h-3.5 w-3.5 text-[#C7A24A]" />
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Across the UAE</span>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Middle School Across{' '}
              <span className="text-[#C7A24A]">The UAE</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {cities.map((loc, i) => (
              <div key={i} className="relative bg-[#162238] border border-white/10 rounded-xl p-5 hover:border-[#C7A24A]/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-8 h-8 bg-[#0f4a9b]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-[#4a90d9]" />
                  </div>
                  <div className="w-2 h-2 bg-[#C7A24A] rounded-full" />
                </div>
                <h3 className="text-white font-bold text-base mb-1">{loc.name}</h3>
                <p className="text-white/50 text-xs">{loc.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#162238] border border-white/10 rounded-xl p-6 flex items-center gap-4">
            <div className="w-10 h-10 bg-[#0f4a9b]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 text-[#4a90d9]" />
            </div>
            <ReadMoreParagraph
              className="text-white/70 text-sm leading-relaxed"
              dark
              preview="Middle School students across Abu Dhabi, Dubai, Sharjah, Ajman, Al Ain, Ras Al Khaimah, Fujairah, and Umm Al Quwain follow the American Curriculum at schools that grade on a rolling basis through Grades 6 to 8. Quizzes, projects, classwork, and tests all feed into a final report card students carry into Grade 9."
              more="Ustaad tutors meet students online from every emirate, matched to the school's curriculum and the specific units being taught that term. Each tutor knows the grading rubric the student's district uses, so the lesson follows the rubric in front of the student rather than a generic version. Sessions slot into the school day rhythm rather than crowding it."
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FAQs ── */}
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
              <p className="text-gray-600 text-[15px] leading-relaxed">Common Middle School parent questions.</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        style={{ width: 40, height: 40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold', fontSize: '18px', border: 'none', cursor: 'pointer' }}
                      >?</button>
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border"
                        style={{ minHeight: '48px', padding: '8px 14px', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)', background: isOpen ? 'rgba(15,74,155,0.04)' : 'transparent', cursor: 'pointer' }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                        <span style={{ width: 32, height: 32, borderRadius: '50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                          <ChevronDown className="h-3.5 w-3.5" style={{ color: isOpen ? '#fff' : '#0f4a9b' }} />
                        </span>
                      </button>
                    </div>
                    {isOpen && (
                      <div
                        className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
                        style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 4px 16px rgba(15,74,155,0.06)' }}
                      >
                        <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                        <span style={{ width: 32, height: 32, background: '#0f4a9b', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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
        title="Book A Middle School Tutor"
        subtitle="Middle School, your grade."
        button1Text="Book Your First Middle School Lesson"
        subtext1="Free trial. No commitment."
      />
    </Layout>
  );
}