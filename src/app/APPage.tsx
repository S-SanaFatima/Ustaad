import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom, Award, BarChart3, BookOpen, Brain, Calculator, ChevronDown,
  Clock, Dna, FileText, FlaskConical, GraduationCap, HelpCircle,
  MapPin, MessageCircle, Sparkles, Target, TrendingUp, Zap, Calendar,
  ShieldCheck, ArrowRight,
} from 'lucide-react';
import { Layout, GradientHeadingText, StatsBar, GoldButton, WhatsAppIcon, FinalCTA } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const apSchemaFaqs = [
  {
    q: "Are AP lessons online or in person?",
    a: "Every lesson is live, one-to-one and online. The tutor shares past exam questions on screen, and your child joins from home in any emirate.",
  },
  {
    q: "When should my child start AP tutoring?",
    a: "September is best, because tutoring then runs alongside the school course. Students who start in January still have time for a full content review and timed practice.",
  },
  {
    q: "Can my child sit an AP exam if the school does not offer the course?",
    a: "Yes. Students can self-study with a tutor and sit the exam at an authorised test centre. Registration usually closes in the autumn, so confirm the deadline with the centre early.",
  },
  {
    q: "How many AP courses should a student take?",
    a: "Most students take between two and four AP courses per academic year, depending on their target universities and overall workload. Focusing on quality scores (4s and 5s) in relevant subjects is far more impactful than taking too many courses.",
  },
  {
    q: "Are AP qualifications recognised by UAE universities?",
    a: "Yes. UAE universities and international branch campuses recognize AP exam scores for admission, and many award credit or advanced standing for scores of 3, 4, or 5.",
  },
  {
    q: "Where are AP exams sat in the UAE?",
    a: "AP exams are administered at authorized test centres and participating schools across Dubai, Abu Dhabi, and other emirates during the first two weeks of May.",
  },
];

const WA_URL = "https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20need%20an%20AP%20tutor%20for";

export default function APPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const apCourses = [
    {
      name: 'AP Statistics',
      topics: 'Sampling Distributions · Confidence Intervals · Chi-Square Tests',
      desc: 'Students practise writing conclusions in context, where most marks are lost.',
      href: '/statistics',
      wm: <Calculator className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />,
    },
    {
      name: 'AP Physics',
      topics: 'Torque · Fluid Mechanics · Capacitors',
      desc: 'Covers AP Physics 1, 2 and C, with practice in explaining reasoning in words.',
      href: '/physics',
      wm: <Atom className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />,
    },
    {
      name: 'AP Chemistry',
      topics: 'Activation Energy · Thermochemistry · Titrations',
      desc: 'Tutors teach the particle-level explanations the written questions ask for.',
      href: '/chemistry',
      wm: <FlaskConical className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />,
    },
    {
      name: 'AP Biology',
      topics: 'Evolutionary Genetics · Cellular Energetics · Animal Behavior',
      desc: 'Lessons include data analysis and experimental design questions.',
      href: '/biology',
      wm: <Dna className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />,
    },
    {
      name: 'AP English',
      topics: 'Synthesis Essay · Line of Reasoning · Literary Criticism',
      desc: 'Timed essays are marked to the College Board scoring rubric.',
      href: '/english',
      wm: <BookOpen className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />,
    },
    {
      name: 'AP Economics',
      topics: 'Elasticity · Monetary Policy · Comparative Advantage',
      desc: 'Covers Microeconomics and Macroeconomics, with graph drawing practised for the written section.',
      href: '/economics',
      wm: <BarChart3 className="h-24 w-24 text-[#0f4a9b]/8" strokeWidth={1.2} />,
    },
  ];

  const prepTimeline = [
    {
      when: 'September to December',
      what: "Keeps pace with the school's units and closes gaps after each unit test",
    },
    {
      when: 'January to February',
      what: 'Finishes the remaining content and starts mixed free-response practice',
    },
    {
      when: 'March',
      what: 'Runs the first full timed practice exam, marked to the official scoring guidelines',
    },
    {
      when: 'April',
      what: 'Sets one timed paper each week, with lessons on the weakest units',
    },
    {
      when: 'Early May',
      what: 'Reviews formulas, task verbs and timing for each exam section',
    },
  ];

  const trialSteps = [
    {
      num: '01',
      title: 'Name the AP Courses',
      desc: 'Tell us which AP courses your child takes and the score they are aiming for, by form or WhatsApp.',
    },
    {
      num: '02',
      title: 'Choose a Lesson Time',
      desc: 'We suggest a tutor for that course and offer lesson times that fit around school.',
    },
    {
      num: '03',
      title: 'Try a Real AP Question',
      desc: 'In 30 free minutes online, the tutor works through a recent free-response question with your child. You then decide whether to continue.',
    },
  ];

  const stepUpDifferences = [
    {
      num: '01',
      title: 'Faster Pace',
      desc: 'AP covers a year of college material in roughly nine months.',
      icon: <Zap className="h-5 w-5 text-[#0f4a9b]" />,
    },
    {
      num: '02',
      title: 'Deeper Content',
      desc: (
        <>
          Each unit goes further than the equivalent{' '}
          <a href="/high-school" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
            high school course
          </a>{' '}
          covers.
        </>
      ),
      icon: <Brain className="h-5 w-5 text-[#0f4a9b]" />,
    },
    {
      num: '03',
      title: 'Evidence-Based Answers',
      desc: 'Free-response questions reward argument with evidence and reasoning, not recall alone.',
      icon: <Target className="h-5 w-5 text-[#0f4a9b]" />,
    },
    {
      num: '04',
      title: 'One External Exam',
      desc: 'The school grades the course, but the College Board sets and scores a separate exam in May, from 1 to 5.',
      icon: <Award className="h-5 w-5 text-[#0f4a9b]" />,
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
    { name: 'Umm Al Quwain', note: 'Northern Emirates' },
  ];

  return (
    <Layout>
      <SEOHead
        title="AP Tutors in Dubai & Abu Dhabi | AP Exam Prep UAE | Ustaad"
        description="Online 1-to-1 AP tutors for Statistics, Physics, Chemistry, Biology and Economics. AP classes and exam prep through to May. Free 30-minute trial."
        canonical="/ap"
        ogImage="/UpdatedImages/Ap-img.webp"
        schema={[
          localBusinessSchema,
          serviceSchema(
            'AP Tutoring in Dubai and the UAE',
            'Online 1-to-1 AP tutors for Statistics, Physics, Chemistry, Biology and Economics. AP classes and exam prep through to May. Free 30-minute trial.',
            '/ap'
          ),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Curriculum', url: '/curriculum' },
            { name: 'AP', url: '/ap' },
          ]),
          faqSchema(apSchemaFaqs),
        ]}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative w-full min-h-[520px] lg:min-h-[580px] xl:min-h-[620px] flex items-center overflow-hidden">
        <img
          src="/UpdatedImages/Ap-img.webp"
          alt="Ustaad tutor preparing AP students for College Board exams across Sciences Maths and Humanities in Dubai and Abu Dhabi UAE"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
          width={1200}
          height={800}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/70 sm:to-black/30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl pr-6 sm:pr-0"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> AP Courses
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold text-[#0a1f3d] mb-2 leading-[1.15] tracking-tight">
              AP Tutors in Dubai and Across the UAE
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-bold text-[#0f4a9b] mb-2.5 leading-snug">
              One-to-one AP classes and exam prep, live online.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3.5" />
            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed max-w-xl">
              Your child works with a tutor who teaches their AP course to the College Board units, from the first unit test to the May exam.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-2.5">
              <GoldButton
                href="/contact#form"
                className="w-full sm:w-auto px-7 py-3 text-sm shadow-[0_0_20px_rgba(199,162,74,0.35)] text-center justify-center"
              >
                Book a Free AP Trial
              </GoldButton>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask on WhatsApp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all duration-200"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              Free 30-minute trial. No commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <StatsBar />

      {/* ── SECTION 2: AP COURSES WE TUTOR ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Courses</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3">
              <GradientHeadingText text="AP Courses We Tutor" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Each course is taught unit by unit to the College Board framework.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-8 border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {apCourses.slice(0, 3).map((subj, i) => (
                <a
                  key={i}
                  href={subj.href}
                  className="group relative flex flex-col gap-2.5 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden"
                >
                  <div className="absolute bottom-3 right-3 pointer-events-none select-none">{subj.wm}</div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10 flex items-center justify-between">
                    <span>{subj.name}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#0f4a9b]" />
                  </h3>
                  <p className="text-[#0f4a9b] text-xs font-semibold relative z-10">{subj.topics}</p>
                  <p className="text-gray-500 text-xs leading-relaxed relative z-10">{subj.desc}</p>
                </a>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {apCourses.slice(3).map((subj, i) => (
                <a
                  key={i + 3}
                  href={subj.href}
                  className="group relative flex flex-col gap-2.5 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden"
                >
                  <div className="absolute bottom-3 right-3 pointer-events-none select-none">{subj.wm}</div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10 flex items-center justify-between">
                    <span>{subj.name}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#0f4a9b]" />
                  </h3>
                  <p className="text-[#0f4a9b] text-xs font-semibold relative z-10">{subj.topics}</p>
                  <p className="text-gray-500 text-xs leading-relaxed relative z-10">{subj.desc}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <p className="text-gray-500 text-xs sm:text-sm font-medium">
              Taking a different AP course?{' '}
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">
                Message us
              </a>{' '}
              and we will confirm a tutor.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: AP EXAM PREP, SEPTEMBER TO MAY ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Exam Prep</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3">
              <GradientHeadingText text="AP Exam Prep, September to May" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              AP exams are sat in the first two weeks of May, so every plan works backwards from that date.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-6 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0f4a9b] text-white text-xs font-extrabold uppercase tracking-wider">
                    <th className="py-3.5 px-6 w-1/3 border-r border-white/10">When</th>
                    <th className="py-3.5 px-6">What the tutor does</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {prepTimeline.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                      <td className="py-3.5 px-6 font-bold text-[#0a1f3d] border-r border-gray-100 whitespace-nowrap">
                        {row.when}
                      </td>
                      <td className="py-3.5 px-6 text-gray-600 leading-relaxed font-normal">
                        {row.what}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-xs sm:text-sm font-medium">
              Starting late? Students who join in March or April follow a shorter plan built on past free-response questions.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: AP SPECIALISTS, NOT A TUTOR MARKETPLACE ── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
            <GraduationCap className="h-4 w-4 text-[#0f4a9b]" />
            <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Our Tutors</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
            <GradientHeadingText text="AP Specialists, Not a Tutor Marketplace" />
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            On a marketplace, anyone can list themselves as an AP tutor. At Ustaad, a tutor is offered for AP only after our academic team has checked they know the College Board course: its units, its free-response format and its 1 to 5 scoring. Read who they are and what they teach before you book.
          </p>
          <div>
            <a
              href="/tutors"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] hover:from-[#1a5bb8] hover:to-[#0f4a9b] shadow-[0_4px_16px_rgba(15,74,155,0.25)] hover:shadow-[0_6px_20px_rgba(15,74,155,0.35)] transition-all duration-200"
            >
              <span>Meet the AP Tutors</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOW THE FREE AP TRIAL WORKS ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Get Started</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3">
              <GradientHeadingText text="How the Free AP Trial Works" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Three steps, and the first lesson costs nothing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {trialSteps.map((st, i) => (
              <div
                key={i}
                className="relative bg-white border border-gray-200 rounded-2xl p-7 flex flex-col justify-between hover:border-[#0f4a9b]/30 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <span className="text-3xl font-black text-[#0f4a9b]/25 tabular-nums block mb-4">
                    {st.num}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-3 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <GoldButton
              href="/contact#form"
              className="px-8 py-3.5 text-sm shadow-[0_0_20px_rgba(199,162,74,0.35)]"
            >
              Book a Free AP Trial
            </GoldButton>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HOW AP DIFFERS FROM HIGH SCHOOL ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">The Step Up</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3">
              <GradientHeadingText text="How AP Differs From High School" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Four reasons an A in the regular course does not guarantee a 5 in AP.
            </p>
          </div>

          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
              {stepUpDifferences.slice(0, 2).map((item, i) => (
                <div key={i} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">
                    {item.num}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify relative z-10">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {stepUpDifferences.slice(2).map((item, i) => (
                <div key={i + 2} className="group relative flex flex-col gap-3 p-7 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-1 right-3 text-[7rem] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none tabular-nums">
                    {item.num}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] border border-[#0f4a9b]/12 flex items-center justify-center flex-shrink-0 relative z-10">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify relative z-10">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: AP SCORES AND UNIVERSITY PATHWAYS ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">University</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3">
              <GradientHeadingText text="AP Scores and University Pathways" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              How strong AP performance shapes university applications, course credits, and admissions at the most selective institutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white border border-[#0f4a9b]/10 rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(15,74,155,0.06)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C7A24A]/60 to-transparent" />
              <div className="absolute bottom-4 right-6 pointer-events-none select-none opacity-[0.04]">
                <TrendingUp className="h-40 w-40 text-[#0f4a9b]" strokeWidth={0.5} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(199,162,74,0.4)]">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed relative z-10 text-justify">
                <p>
                  Strong AP performance shows universities the student can handle first-year college work before they arrive on campus. A score of 4 or 5 is widely accepted by US universities for college credit, and increasingly weighted by UK and European institutions during admissions.
                </p>
                <p>
                  Ustaad tutors hold unit understanding steady from September through May, so the score reflects what the student actually knows. We also help families plan the AP combination that fits the university course in view, so the scores carry real weight at admissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: AP TUTORS ACROSS THE UAE ── */}
      <section className="py-20 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 rounded-full mb-4">
              <MapPin className="h-3.5 w-3.5 text-[#C7A24A]" />
              <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Across the UAE</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              AP Tutors{' '}
              <span className="text-[#C7A24A]">Across the UAE</span>
            </h2>
            <p className="text-blue-100/70 text-sm sm:text-base leading-relaxed">
              AP tutors in every emirate, matched to the school course schedule and the May exam window.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-5xl mx-auto">
            {cities.map((loc, i) => (
              <div key={i} className="relative bg-[#162238] border border-white/10 rounded-2xl p-5 hover:border-[#C7A24A]/30 transition-colors">
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
        </div>
      </section>

      {/* ── SECTION 9: AP TUTORING FAQS ── */}
      <section id="faqs" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4">
              <HelpCircle className="h-4 w-4 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">Common Questions</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3">
              <GradientHeadingText text="AP Tutoring FAQs" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Common questions from parents and students about AP tutoring.
            </p>
          </div>

          <div className="flex flex-col gap-[10px] max-w-3xl mx-auto">
              {apSchemaFaqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{
                          width: 40,
                          height: 40,
                          minWidth: 40,
                          minHeight: 40,
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
                          minHeight: '48px',
                          padding: '8px 14px',
                          cursor: 'pointer',
                          background: 'transparent',
                          borderColor: 'rgba(15,74,155,0.1)',
                        }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">
                          {faq.q}
                        </span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 32,
                            height: 32,
                            minWidth: 32,
                            minHeight: 32,
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
                          style={{
                            width: 32,
                            height: 32,
                            minWidth: 32,
                            minHeight: 32,
                            background: '#0f4a9b',
                            color: '#fff',
                          }}
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
        </section>

        {/* ── SECTION 10: BOOK AN AP TUTOR (FINAL CTA) ── */}
      <FinalCTA
        title="Book an AP Tutor"
        subtitle="Online, matched to your child's AP course."
        button1Text="Book a Free AP Trial"
        button1Href="/contact#form"
        subtext1="No commitment. Cancel anytime."
      />
    </Layout>
  );
}
