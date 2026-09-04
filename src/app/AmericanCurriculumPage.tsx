import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calculator, Atom, FlaskConical, Dna, BookOpen, Briefcase,
  GraduationCap, Target, HelpCircle, ChevronDown, MessageCircle,
  MapPin, FileText, TrendingUp, ClipboardList, Brain, Layers,
  Clock, PenTool, BarChart3, ArrowRight,
} from 'lucide-react';
import { Layout, GradientHeadingText, StatsBar, HeroCTABlock, FinalCTA } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

export default function AmericanCurriculumPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stages = [
    {
      eyebrow: 'Grades 6 to 8',
      title: 'Middle School',
      bullets: ['Habit building', 'Subject foundations', 'Classroom routines'],
      href: '/middle-school',
      cta: 'Explore Middle School',
      icon: <BookOpen className="h-6 w-6 text-white" />,
      wm: <BookOpen className="h-40 w-40 text-[#0f4a9b]/5" strokeWidth={0.6} />,
    },
    {
      eyebrow: 'Grades 9 to 12',
      title: 'High School',
      bullets: ['Course grades', 'Credit tracking', 'GPA building'],
      href: '/high-school',
      cta: 'Explore High School',
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      wm: <GraduationCap className="h-40 w-40 text-[#0f4a9b]/5" strokeWidth={0.6} />,
    },
    {
      eyebrow: 'Within High School',
      title: 'AP Courses',
      bullets: ['College-level study', 'May exam papers', 'University application weight'],
      href: '/ap',
      cta: 'Explore AP',
      icon: <Target className="h-6 w-6 text-white" />,
      wm: <Target className="h-40 w-40 text-[#0f4a9b]/5" strokeWidth={0.6} />,
    },
  ];

  const subjects = [
    { name: 'Mathematics', topics: 'Polynomial Functions · Logarithms · Conic Sections', href: '/maths', wm: <Calculator className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Physics', topics: "Kinematics · Newton's Laws · Rotational Dynamics", href: '/physics', wm: <Atom className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Chemistry', topics: 'Gas Laws · Solutions · Electrochemistry', href: '/chemistry', wm: <FlaskConical className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Biology', topics: 'Cell Division · Heredity · Biodiversity', href: '/biology', wm: <Dna className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'English', topics: 'Persuasive Essay · Rhetorical Analysis · Research Writing', href: '/english', wm: <BookOpen className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Business', topics: 'Entrepreneurship · Operations · Market Research', href: '/business', wm: <Briefcase className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
  ];

  const studentNeeds = [
    { title: 'Steady Pace', desc: 'American Curriculum grades come weekly, so steady habits matter more than cramming.', icon: <Clock className="h-7 w-7 text-white" strokeWidth={2} /> },
    { title: 'GPA Watch', desc: 'Grade 9 onwards, each course grade rolls into the GPA universities review.', icon: <BarChart3 className="h-7 w-7 text-white" strokeWidth={2} /> },
    { title: 'Yearly Depth', desc: 'Each grade level adds new content, so subject understanding must grow steadily.', icon: <Layers className="h-7 w-7 text-white" strokeWidth={2} /> },
    { title: 'Sharp Writing', desc: 'FRQs and essays reward clear claims, strong evidence, and structured argument.', icon: <PenTool className="h-7 w-7 text-white" strokeWidth={2} /> },
    { title: 'AP Mindset', desc: 'AP needs independent revision, timed practice, and steady weekly synoptic review.', icon: <Brain className="h-7 w-7 text-white" strokeWidth={2} /> },
  ];

  const ustaadSupport = [
    { title: 'Continuous Pressure', desc: 'Weekly quizzes, projects, and tests held steady so every grade lands cleanly.', icon: <ClipboardList className="h-6 w-6 text-white" strokeWidth={2} /> },
    { title: 'GPA Awareness', desc: 'From Grade 9, each course grade is protected because GPA starts counting then.', icon: <TrendingUp className="h-6 w-6 text-white" strokeWidth={2} /> },
    { title: 'Free-Response Practice', desc: 'Essays and FRQs marked the way College Board readers mark them in May.', icon: <FileText className="h-6 w-6 text-white" strokeWidth={2} /> },
    { title: 'AP-Ready Habits', desc: 'Independent study, timed practice, and synoptic review built in before AP year.', icon: <Target className="h-6 w-6 text-white" strokeWidth={2} /> },
  ];

  const faqs = [
    {
      q: 'Which stages of the American Curriculum does Ustaad support?',
      a: (<><a href="/middle-school" className="text-[#0f4a9b] font-semibold underline">Middle School</a> (Grades 6 to 8), <a href="/high-school" className="text-[#0f4a9b] font-semibold underline">High School</a> (Grades 9 to 12), and AP courses within High School. Each stage is supported by a tutor matched to the school's unit pace and assessment calendar.</>),
    },
    {
      q: 'How is academic performance measured in the American Curriculum?',
      a: 'A rolling mix of weekly quizzes, unit tests, projects, classwork, and class participation. Each piece is weighted by the school district and combines into a course grade every semester, not a single year-end exam.',
    },
    {
      q: 'When does GPA start counting toward university applications?',
      a: (<>GPA usually starts counting from <a href="/high-school" className="text-[#0f4a9b] font-semibold underline">Grade 9</a>. Middle School grades sit on report cards but do not enter the cumulative GPA universities review at admissions.</>),
    },
    {
      q: 'How are Honors and AP courses different?',
      a: (<>Honors are advanced versions of standard High School courses, graded internally by the school. <a href="/ap" className="text-[#0f4a9b] font-semibold underline">AP courses</a> run at first-year college level and end with a standardised May exam scored 1 to 5, recognised by US universities for credit.</>),
    },
    {
      q: 'Does Ustaad help with course selection and AP planning?',
      a: (<>Yes. Tutors and academic mentors walk families through which Honors and <a href="/ap" className="text-[#0f4a9b] font-semibold underline">AP</a> combinations fit the target university course, the GPA implications, and whether the current workload realistically supports another rigorous subject.</>),
    },
    {
      q: 'Are AP scores accepted by UAE universities?',
      a: (<>Many UAE universities accept <a href="/ap" className="text-[#0f4a9b] font-semibold underline">AP</a> scores of 4 or 5 for course credit or competitive admissions, particularly in engineering, medicine, and business programmes. Policies vary by institution, so the specific subject combination matters as much as the score.</>),
    },
  ];

  const cities = [
    { name: 'Abu Dhabi', note: 'Khalifa City · Saadiyat · Reem · Yas' },
    { name: 'Dubai', note: 'Dubai Hills · Ranches · Marina · Palm' },
    { name: 'Sharjah', note: 'Northern Emirates' },
    { name: 'Ajman', note: 'Rolling grading system' },
    { name: 'Al Ain', note: 'Capital region' },
    { name: 'Ras Al Khaimah', note: 'Northern coast' },
    { name: 'Fujairah', note: 'East coast' },
    { name: 'Umm Al Quwain', note: '7th Emirate' },
  ];

  return (
    <Layout>
      <SEOHead
        title="American Curriculum Tutors UAE | K-12 & AP | Ustaad"
        description="Online tutoring for American Curriculum students across Middle School, High School, and AP courses. Expert tutors matched to your child's grade and school district across the UAE."
        canonical="/american-curriculum"
        ogImage="/UpdatedImages/american-curriculum-ap-sat-private-tutoring-uae.webp"
        schema={[
          localBusinessSchema,
          serviceSchema('American Curriculum Tutoring UAE', 'One-to-one American Curriculum tutoring across the UAE.', '/american-curriculum'),
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'American Curriculum', url: '/american-curriculum' }]),
          faqSchema([
            { q: 'Which stages of the American Curriculum does Ustaad support?', a: 'Middle School (Grades 6 to 8), High School (Grades 9 to 12), and AP courses within High School.' },
            { q: 'How is academic performance measured in the American Curriculum?', a: 'A rolling mix of weekly quizzes, unit tests, projects, classwork, and class participation.' },
            { q: 'When does GPA start counting toward university applications?', a: 'GPA usually starts counting from Grade 9. Middle School grades do not enter the cumulative GPA universities review at admissions.' },
            { q: 'How are Honors and AP courses different?', a: 'Honors are advanced versions of standard High School courses. AP courses run at first-year college level and end with a standardised May exam scored 1 to 5.' },
            { q: 'Does Ustaad help with course selection and AP planning?', a: 'Yes. Tutors and academic mentors walk families through which Honors and AP combinations fit the target university course.' },
            { q: 'Are AP scores accepted by UAE universities?', a: 'Many UAE universities accept AP scores of 4 or 5 for course credit or competitive admissions.' },
          ]),
        ]}
      />

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
        <img
          src="/UpdatedImages/american-curriculum-ap-sat-private-tutoring-uae.webp"
          alt="Ustaad tutor helping AP and SAT students with private one-to-one American curriculum lessons in Dubai and Abu Dhabi UAE"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
                width={1200} height={800} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl pr-8 sm:pr-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <GraduationCap className="h-4 w-4" /> American Curriculum
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
              <GradientHeadingText text="One-to-One Support For Every Grade" />
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
            <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-xl">
              Online tutoring for American Curriculum students across Middle School, High School, and AP courses.
            </p>
            <HeroCTABlock>
              Book Your Free Trial
            </HeroCTABlock>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ── SECTION 3: THREE SCHOOL STAGES ── */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Three American Curriculum School Stages" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Three school stages your child moves through across the American Curriculum journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stages.map((card, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl border border-[#0f4a9b]/10 shadow-[0_4px_24px_rgba(15,74,155,0.06)] hover:shadow-[0_16px_48px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                <div className="absolute -bottom-4 -right-4 pointer-events-none select-none">{card.wm}</div>
                <div className="p-8 pt-10 flex flex-col flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(15,74,155,0.35)] flex-shrink-0 group-hover:shadow-[0_0_24px_rgba(15,74,155,0.55)] transition-shadow duration-300">
                    {card.icon}
                  </div>
                  <div className="inline-flex items-center self-start px-3 py-1 bg-[#0f4a9b]/[0.08] border border-[#0f4a9b]/20 rounded-full mb-3">
                    <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">{card.eyebrow}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-4 group-hover:text-[#0f4a9b] transition-colors duration-200">{card.title}</h3>
                  <ul className="space-y-2 mb-6 flex-1">
                    {card.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-500 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b]/40 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={card.href}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white text-sm font-bold shadow-[0_4px_14px_rgba(15,74,155,0.25)] hover:shadow-[0_6px_20px_rgba(15,74,155,0.40)] transition-all duration-200 mt-auto"
                  >
                    {card.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SUBJECTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="American Curriculum Subjects We Cover" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Six core subjects across Middle School, High School, and AP coursework, taught to the same syllabus.
            </p>
          </div>
          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {subjects.slice(0, 3).map((subj, i) => (
                <div key={i} className="group relative flex flex-col gap-2 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-3 right-3 pointer-events-none select-none">{subj.wm}</div>
                  <a href={subj.href} className="text-xl font-extrabold text-[#0f4a9b] hover:text-[#0a3a79] transition-colors duration-200 relative z-10">{subj.name}</a>
                  <p className="text-gray-500 text-sm leading-relaxed relative z-10">{subj.topics}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {subjects.slice(3).map((subj, i) => (
                <div key={i + 3} className="group relative flex flex-col gap-2 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
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

      {/* ── SECTION 5: WHAT STUDENTS NEED ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="What American Curriculum Students Need" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Five academic needs that shape how an American Curriculum student moves from Grade 6 to AP.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
            {studentNeeds.slice(0, 3).map((need, i) => (
              <div key={i} className="relative bg-white border border-gray-200 rounded-[24px] p-6 md:p-8 flex flex-col items-center text-center hover:shadow-[0_15px_40px_rgba(15,74,155,0.10)] transition duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] to-[#1e5bb3]" />
                <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(15,74,155,0.3)]">
                  {need.icon}
                </div>
                <h3 className="text-base font-extrabold text-[#0a1f3d] mb-2">{need.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{need.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {studentNeeds.slice(3).map((need, i) => (
              <div key={i + 3} className="relative bg-white border border-gray-200 rounded-[24px] p-6 md:p-8 flex flex-col items-center text-center hover:shadow-[0_15px_40px_rgba(15,74,155,0.10)] transition duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] to-[#1e5bb3]" />
                <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(15,74,155,0.3)]">
                  {need.icon}
                </div>
                <h3 className="text-base font-extrabold text-[#0a1f3d] mb-2">{need.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{need.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HOW USTAAD SUPPORTS ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="How Ustaad Supports American Curriculum Students" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Each need above answered in lessons, from Grade 6 right through to the AP exam.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ustaadSupport.map((s, i) => (
              <div key={i} className="bg-white border border-[#0f4a9b]/10 rounded-[24px] p-6 md:p-8 flex flex-col items-start text-left hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] transition duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(199,162,74,0.4)] mb-4">
                  {s.icon}
                </div>
                <h3 className="text-base font-extrabold text-[#0a1f3d] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: UAE ── */}
      <section className="py-16 lg:py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
            <MapPin className="h-3.5 w-3.5 text-[#C7A24A]" />
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Across the UAE</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              American Curriculum Support{' '}
              <span className="text-[#C7A24A]">Across the UAE</span>
            </h2>
            <p className="text-blue-100/50 text-sm leading-relaxed max-w-xs lg:text-right">
              American Curriculum tutors in every emirate, matched to your child's school district and current grade.
            </p>
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
            <p className="text-white/70 text-sm leading-relaxed">
              American Curriculum schools operate across Abu Dhabi, Dubai, Sharjah, Ajman, Al Ain, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Every school grades on the same rolling system, so the same tutoring rhythm fits each district, but matching the lesson to the right unit each week is what holds the grade steady. Ustaad pairs each student with a tutor who knows the school, the grade level, and the current units. Sessions run online after school hours so the schedule fits family life rather than forcing it to fit the tutor.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQs ── */}
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
              <p className="text-gray-600 text-[15px] leading-relaxed">Common American Curriculum parent questions.</p>
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

      {/* ── SECTION 9: FINAL CTA ── */}
      


      <FinalCTA
        title="Book Your American Curriculum Tutor"
        subtitle="American Curriculum, your grade."
        button1Text="Book Your Free Trial" />
    </Layout>
  );
}
