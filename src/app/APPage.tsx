import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom, Award, BarChart3, BookOpen, Brain, Calculator, ChevronDown,
  ClipboardList, Dna, FileText, FlaskConical, HelpCircle,
  MapPin, MessageCircle, Target, TrendingUp, Zap,
} from 'lucide-react';
import { Layout, GradientHeadingText, StatsBar, HeroCTABlock, FinalCTA, ReadMoreParagraph } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

export default function APPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subjects = [
    { name: 'Mathematics', topics: 'Limits · Series · Confidence Intervals', href: '/maths', wm: <Calculator className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Physics', topics: 'Torque · Fluid Mechanics · Capacitors', href: '/physics', wm: <Atom className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Chemistry', topics: 'Activation Energy · Thermochemistry · Titrations', href: '/chemistry', wm: <FlaskConical className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Biology', topics: 'Evolutionary Genetics · Cellular Energetics · Animal Behavior', href: '/biology', wm: <Dna className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'English', topics: 'Argumentation · Synthesis Essay · Literary Criticism', href: '/english', wm: <BookOpen className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
    { name: 'Economics', topics: 'Elasticity · Monetary Policy · Comparative Advantage', href: '/economics', wm: <BarChart3 className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} /> },
  ];

  const collegeLevelItems = [
    {
      num: '01',
      title: <>Faster Than <a href="/high-school" className="text-[#0f4a9b] underline">High School</a></>,
      desc: 'AP covers a year of college material in roughly nine months.',
      icon: <Zap className="h-5 w-5 text-[#0f4a9b]" />,
    },
    {
      num: '02',
      title: 'Deeper Content',
      desc: <>Each unit goes further than the equivalent <a href="/high-school" className="text-[#0f4a9b] underline">High School</a> course typically covers.</>,
      icon: <Brain className="h-5 w-5 text-[#0f4a9b]" />,
    },
    {
      num: '03',
      title: 'Stronger Analysis',
      desc: 'FRQs reward argument with evidence and reasoning, not factual recall alone.',
      icon: <Target className="h-5 w-5 text-[#0f4a9b]" />,
    },
    {
      num: '04',
      title: 'Independent Study',
      desc: 'AP students plan revision, sit practice papers, and self-review each week.',
      icon: <ClipboardList className="h-5 w-5 text-[#0f4a9b]" />,
    },
  ];

  const cities = [
    { name: 'Abu Dhabi', note: 'Khalifa City · Saadiyat · Yas' },
    { name: 'Dubai', note: 'Dubai Hills · Ranches · Marina · Palm' },
    { name: 'Sharjah', note: 'AP testing centres' },
    { name: 'Ajman', note: 'May examination window' },
    { name: 'Al Ain', note: 'AP coursework support' },
    { name: 'Ras Al Khaimah', note: 'Northern Emirates' },
    { name: 'Fujairah', note: 'East coast' },
    { name: 'Umm Al Quwain', note: '8th Emirate' },
  ];

  const faqs = [
    {
      q: 'What makes AP courses different from standard High School courses?',
      a: 'AP courses run at first-year college level, cover a full year of college material in roughly nine months, end in a standardised May exam scored 1 to 5, and earn weighted GPA points on the transcript.',
    },
    {
      q: 'How many AP courses should a student take?',
      a: "Most students take 2 to 5 across Grades 10 to 12. Competitive university applications often combine 4 to 8, but the right number depends on the student's grade record, target universities, and realistic weekly workload.",
    },
    {
      q: 'How does Ustaad support AP coursework through the year?',
      a: "Tutors meet weekly from September, hold each unit steady as it's taught at school, mark practice essays, and flag topics that aren't landing before the unit test arrives.",
    },
    {
      q: 'How does Ustaad prepare students for the May AP exam?',
      a: 'Full content review across the spring, FRQ practice marked the way College Board readers mark in May, and full-length timed mock papers in the final eight weeks before exam day.',
    },
    {
      q: 'Are AP qualifications recognised by UAE universities?',
      a: 'Many UAE universities accept AP scores of 4 or 5 for course credit or competitive admissions. Policies vary by institution, so the specific subject combination matters as much as the score.',
    },
    {
      q: 'Where are AP exams sat in the UAE?',
      a: "At authorised testing centres in Dubai and Abu Dhabi during the standardised May window each year. Schools register students directly; Ustaad doesn't administer the exam, only the preparation.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="AP Tutors UAE | AP Exam Prep Dubai & Abu Dhabi | Ustaad"
        description="Online tutoring across AP subjects, from coursework through to May exam papers. Book your first AP lesson."
        canonical="/ap"
        ogImage="/UpdatedImages/Ap-img.webp"
        schema={[
          localBusinessSchema,
          serviceSchema('AP Tutoring UAE', 'Expert 1-to-1 AP tutoring across all subjects in the UAE.', '/ap'),
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'AP', url: '/ap' }]),
          faqSchema(faqs.map(f => ({ q: f.q, a: f.a }))),
        ]}
      />

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <img
          src="/UpdatedImages/Ap-img.webp"
          alt="Ustaad tutor preparing AP students for College Board exams across Sciences Maths and Humanities in Dubai and Abu Dhabi UAE"
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
              <Award className="h-4 w-4" /> AP Courses
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
              <GradientHeadingText text="College-Level Study in High School." />
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
            <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-xl">
              Online tutoring across AP subjects, from coursework through to May exam papers.
            </p>
            <HeroCTABlock>
              Book Your First AP Lesson
            </HeroCTABlock>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ── SECTION 3: WHY AP COURSES MATTER ── */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Why AP Courses Matter" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              AP courses build stronger subject knowledge, study habits, and academic readiness for rigorous future pathways.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white border border-[#0f4a9b]/10 rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(15,74,155,0.06)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b]/60 to-transparent" />
              <div className="absolute bottom-4 right-6 pointer-events-none select-none opacity-[0.04]">
                <Award className="h-40 w-40 text-[#0f4a9b]" strokeWidth={0.5} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(15,74,155,0.35)]">
                <Award className="h-6 w-6 text-white" />
              </div>
              <ReadMoreParagraph
                className="text-gray-700 text-base leading-relaxed relative z-10"
                preview={<>AP coursework moves faster than standard <a href="/high-school" className="text-[#0f4a9b] font-semibold underline">High School</a> courses, covers a full college year in roughly nine months, and ends with a single graded May exam. Without strong planning, consistent weekly work, and independent study, students fall behind early in the year and the gap is hard to close before exam day.</>}
                more="Ustaad tutors hold unit content steady from September through May, so the workload stays manageable across the year. Each session is matched to the student's current AP unit and the FRQ structure of the relevant exam."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: AP SUBJECTS WE SUPPORT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="AP Subjects We Support" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Six AP subjects covered across coursework, content review, and the May exam papers in every emirate.
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

      {/* ── SECTION 5: ADAPTING TO COLLEGE-LEVEL EXPECTATIONS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Adapting to College-Level Expectations" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Four ways AP coursework sits above the standard <a href="/high-school" className="text-[#0f4a9b] font-semibold underline">High School</a> course.
            </p>
          </div>
          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {collegeLevelItems.slice(0, 2).map((item, i) => (
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
              {collegeLevelItems.slice(2).map((item, i) => (
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
        </div>
      </section>

      {/* ── SECTION 6: BALANCING AP WORKLOAD ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Balancing AP Workload" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Strong AP results require steady weekly work across the year, not sprints before the May exam window.
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
                preview="AP students juggle two demands at once: a year-long course grade tracked by the school, and a single AP exam in May graded externally. Both feed the academic record, and without a steady weekly pace, the second demand catches up too quickly in April and pulls the course grade down with it."
                more="Ustaad tutors keep unit understanding current through the year and run timed practice papers in the final eight weeks before exam day. The plan stays the same across both demands, so coursework and exam preparation don't pull against each other."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: AP & UNIVERSITY PATHWAYS ── */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="AP and University Pathways" />
            </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              How strong AP performance shapes university applications, course credits, and admissions at the most selective institutions.
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
                preview="Strong AP performance shows universities the student can handle first-year college work before they arrive on campus. A score of 4 or 5 is widely accepted by US universities for college credit, and increasingly weighted by UK and European institutions during admissions."
                more="Ustaad tutors hold unit understanding steady from September through May, so the score reflects what the student actually knows. We also help families plan the AP combination that fits the university course in view, so the scores carry real weight at admissions."
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
              AP Students Across{' '}
              <span className="text-[#C7A24A]">The UAE</span>
            </h2>
            <p className="text-blue-100/50 text-sm leading-relaxed max-w-xs lg:text-right">
              AP tutors in every emirate, matched to the school course schedule and the May exam window.
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
              preview="AP students across Abu Dhabi, Dubai, Sharjah, Ajman, Al Ain, Ras Al Khaimah, Fujairah, and Umm Al Quwain combine multiple AP subjects with their regular High School load. May exams are sat at authorised testing centres across Dubai and Abu Dhabi, with a single shared window the whole region works toward."
              more="Ustaad tutors meet students online from every emirate, hold unit understanding steady through the year, and run timed practice papers in the final eight weeks before each AP exam. Sessions run after school hours across UAE time zones, so AP preparation fits the school day rather than disrupting it."
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
              <p className="text-gray-600 text-[15px] leading-relaxed">Common AP parent questions.</p>
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
        title="Book An AP Tutor"
        subtitle="Online, matched to AP subject."
        button1Text="Book Your First AP Lesson" />
    </Layout>
  );
}
