import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom, Award, BookOpen, Briefcase, Calculator, ChevronDown, ClipboardList,
  Dna, FileText, FlaskConical, GraduationCap, HelpCircle,
  MapPin, MessageCircle, Target, TrendingUp,
} from 'lucide-react';
import { Layout, GradientHeadingText, StatsBar, HeroCTABlock, FinalCTA, ReadMoreParagraph } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

export default function HighSchoolPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subjects = [
    { name: 'Mathematics', topics: 'Rational Functions · Inequalities · Matrices', href: '/maths', wm: <Calculator className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Physics', topics: 'Momentum · Heat Transfer · Circuits', href: '/physics', wm: <Atom className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Chemistry', topics: 'Molarity · Phase Changes · Polymers', href: '/chemistry', wm: <FlaskConical className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Biology', topics: 'Anatomy · Immune System · Microbiology', href: '/biology', wm: <Dna className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'English', topics: 'Literary Devices · Thesis Writing · Speech Craft', href: '/english', wm: <BookOpen className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Business', topics: 'Leadership · Personal Finance · Business Ethics', href: '/business', wm: <Briefcase className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
  ];

  const trackingItems = [
    { title: 'GPA', desc: 'Each course grade adds to the cumulative GPA universities review at admissions.', icon: <Award className="h-5 w-5 text-[#0f4a9b]" />, num: '01' },
    { title: 'Course Credits', desc: 'Students earn credits by completing required and elective subjects each year.', icon: <ClipboardList className="h-5 w-5 text-[#0f4a9b]" />, num: '02' },
    { title: 'Graduation Pathway', desc: 'Required courses and credit totals decide whether a student graduates.', icon: <Target className="h-5 w-5 text-[#0f4a9b]" />, num: '03' },
  ];

  const cities = [
    { name: 'Abu Dhabi', note: 'Khalifa City · Saadiyat · Reem · Yas' },
    { name: 'Dubai', note: 'Dubai Hills · Ranches · Marina · Palm' },
    { name: 'Sharjah', note: 'American Curriculum schools' },
    { name: 'Ajman', note: 'GPA-based grading' },
    { name: 'Al Ain', note: 'Credit system schools' },
    { name: 'Ras Al Khaimah', note: 'Northern Emirates' },
    { name: 'Fujairah', note: 'East coast' },
    { name: 'Umm Al Quwain', note: '8th Emirate' },
  ];

  const faqs = [
    {
      q: 'How is High School academic performance measured?',
      a: <>Each course grade rolls into a cumulative GPA, weighted by course rigour across regular, Honors, and <a href="/ap" className="text-[#0f4a9b] font-semibold underline">AP</a>. Universities review GPA alongside SAT or ACT scores and individual AP exam results, so the transcript carries more than a single number.</>,
    },
    {
      q: 'When does Ustaad recommend starting High School tutoring?',
      a: 'Most families come to us in Grade 9, the first year that counts toward the GPA universities see. Starting then lets the student build a steady record from the first semester rather than rebuilding it later.',
    },
    {
      q: 'Can Ustaad help with Honors and AP course selection?',
      a: <>Yes. Tutors and academic mentors walk through which Honors and <a href="/ap" className="text-[#0f4a9b] font-semibold underline">AP</a> courses fit the student's target university course, the GPA implications, and whether the current workload realistically supports another rigorous subject.</>,
    },
    {
      q: 'What GPA is considered competitive for university admissions?',
      a: 'Top US universities typically expect an unweighted GPA above 3.7 on the 4.0 scale. UK universities focus more on Honors and AP performance in the subjects relevant to the chosen degree.',
    },
    {
      q: 'What is the difference between Honors and AP?',
      a: <>Honors are advanced versions of standard High School courses, graded at school. <a href="/ap" className="text-[#0f4a9b] font-semibold underline">AP</a> courses run at first-year college level and end with a standardised May exam scored 1 to 5, recognised by US universities for college credit.</>,
    },
    {
      q: 'How does Ustaad handle a school change mid-High School?',
      a: "We re-match the student to a tutor familiar with the new school's curriculum and unit pace, and run a quick gap-check against the previous syllabus so the move doesn't cost the year on the transcript.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="High School Tutors UAE | Grades 9–12 Tutoring | Ustaad"
        description="Online tutoring for Grades 9 to 12 American Curriculum students, focused on course grades and university preparation. Book your first High School lesson."
        canonical="/high-school"
        ogImage="/UpdatedImages/american-high-school-tutoring-sat-ap-grades-9-12-uae.webp"
        schema={[
          localBusinessSchema,
          serviceSchema('High School Tutoring UAE', 'Expert 1-to-1 tutoring for high school students across the UAE.', '/high-school'),
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'High School', url: '/high-school' }]),
          faqSchema(faqs.map(f => ({ q: f.q, a: typeof f.a === 'string' ? f.a : '' }))),
        ]}
      />

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <img
          src="/UpdatedImages/american-high-school-tutoring-sat-ap-grades-9-12-uae.webp"
          alt="Ustaad tutor supporting Grade 9 to 12 American high school students with SAT prep and AP coursework across Dubai and Abu Dhabi"
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
              <GraduationCap className="h-4 w-4" /> High School
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
              <GradientHeadingText text="GPA, Credits, and Transcripts." />
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
            <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-xl">
              Online tutoring for Grades 9 to 12 American Curriculum students, focused on course grades and university preparation.
            </p>
            <HeroCTABlock trustText="✦ First lesson free. No commitment.">
              Book Your First High School Lesson
            </HeroCTABlock>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ── SECTION 3: WHAT CHANGES DURING HIGH SCHOOL ── */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="What Changes During High School" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Academic expectations rise as coursework deepens, GPA starts counting, and university planning begins shaping subject choices.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white border border-[#0f4a9b]/10 rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(15,74,155,0.06)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/60 to-transparent" />
              <div className="absolute bottom-4 right-6 pointer-events-none select-none opacity-[0.04]">
                <GraduationCap className="h-40 w-40 text-[#0f4a9b]" strokeWidth={0.5} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(15,74,155,0.35)]">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <ReadMoreParagraph
                className="text-gray-700 text-base leading-relaxed relative z-10"
                preview="High School is the first stage where academic performance carries long-term weight. Students manage more demanding coursework, hold consistent grades across each semester, meet rolling deadlines, and start making subject choices that shape later study options."
                more="A slip in any one course shows up on the transcript universities review, so the recovery window is shorter than in earlier years. Ustaad tutors hold subject understanding steady from Grade 9, so the grades that count toward the transcript don't slip during the transition. Each session is anchored to the current school unit, so coursework support runs in step with the classroom rather than alongside it."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CORE HIGH SCHOOL SUBJECTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Core High School Subjects" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Six core High School subjects across Grades 9 to 12, taught by Honors and <a href="/ap" className="text-[#0f4a9b] font-semibold underline">AP</a>-ready tutors.
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

      {/* ── SECTION 5: HOW ACADEMIC PROGRESS IS TRACKED ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="How Academic Progress Is Tracked" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Grades, credits, and required course choices feed into the cumulative record universities review at admissions.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="border border-gray-200 rounded-2xl overflow-hidden mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                {trackingItems.map((item, i) => (
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
            </div>
            <div className="bg-white border border-[#0f4a9b]/10 rounded-xl p-6 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#0f4a9b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-[#0f4a9b]" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ustaad helps families track each of these threads, so course choices, credit totals, and GPA stay aligned with the universities and courses in view.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CHOOSING FUTURE COURSES ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Choosing Future Courses" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Subject choices made early in High School shape which university courses stay open four years later.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white border border-[#0f4a9b]/10 rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(15,74,155,0.06)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/60 to-transparent" />
              <div className="absolute bottom-4 right-6 pointer-events-none select-none opacity-[0.04]">
                <FileText className="h-40 w-40 text-[#0f4a9b]" strokeWidth={0.5} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(15,74,155,0.35)]">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <ReadMoreParagraph
                className="text-gray-700 text-base leading-relaxed relative z-10"
                preview={<>By Grade 9, students start choosing courses that match their strengths, interests, and university goals. Honors and <a href="/ap" className="text-[#0f4a9b] font-semibold underline">AP</a> options carry more weight and shape the GPA differently from standard courses.</>}
                more={<>A balanced workload, challenging but achievable, usually outperforms an overloaded one that drags the GPA down across the year. Ustaad helps families plan the course mix early, so the transcript reflects the student's strengths in the subjects that matter most. Course-mix planning starts before each school year, so Honors and <a href="/ap" className="text-[#0f4a9b] font-semibold underline">AP</a> choices fit the student's actual workload rather than an ambitious estimate.</>}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PREPARING FOR UNIVERSITY PATHWAYS ── */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Preparing For University Pathways" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              What students do across Grades 9 to 12 shapes which universities and degree paths stay realistic.
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
                preview="High School performance, course choices, and consistency together shape future university options across US, UK, and European admissions."
                more={<>Ustaad supports families through course choice, <a href="/ap" className="text-[#0f4a9b] font-semibold underline">AP</a> planning, and the standardised test windows that shape final applications. Tutors and academic mentors meet families across Grade 11 to map the SAT, ACT, and <a href="/ap" className="text-[#0f4a9b] font-semibold underline">AP</a> calendar against the school year.</>}
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
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              High School Across{' '}
              <span className="text-[#C7A24A]">The UAE</span>
            </h2>
            <p className="text-blue-100/50 text-sm leading-relaxed max-w-xs lg:text-right">
              High School tutors in every emirate, matched to the school's GPA-and-credits system and current course load.
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
            <ReadMoreParagraph
              className="text-white/70 text-sm leading-relaxed"
              dark
              preview="High School students across Abu Dhabi, Dubai, Sharjah, Ajman, Al Ain, Ras Al Khaimah, Fujairah, and Umm Al Quwain follow American Curriculum schools that grade on the GPA-and-credits system. Each course feeds the transcript, each grade level brings tighter graduation requirements, and Grade 11 is where university planning starts in earnest."
              more={<>Ustaad tutors meet students online from every emirate, hold course grades steady, and run targeted practice for the SAT, ACT, and <a href="/ap" className="text-[#4a90d9] font-semibold underline">AP</a> exams that shape university applications. Sessions run after school hours across UAE time zones, so the schedule fits the school day rather than disrupting it.</>}
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
              <p className="text-gray-600 text-[15px] leading-relaxed">Common High School parent questions.</p>
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
      


      <FinalCTA
        title="Book A High School Tutor"
        subtitle="Online, matched to your school."
        button1Text="Book Your First High School Lesson"
        subtext1="Free trial. No commitment."
      />
    </Layout>
  );
}
