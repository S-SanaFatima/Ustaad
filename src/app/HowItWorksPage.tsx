import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award, BookOpen, Calendar, ChevronDown, Crosshair, Eye, Globe, GraduationCap, HelpCircle, Layers, Map, MessageCircle, MessageSquare,
  RotateCw, Search, ShieldCheck, Star, TrendingUp, UserCheck, Zap,
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, FinalCTA, StatsBar, HeroCTABlock} from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, faqSchema } from './shared/schemas';

const howItWorksSchemaFaqs = [
  { q: "How long does it usually take to see results?", a: "Most families start to notice steadier homework and calmer revision within the first term, with stronger exam performance often following over the school year." },
  { q: "How does the tutor know what to teach in the early lessons?", a: "The first few lessons are spent reading the student's level, the school's pace, and the topics that feel uncertain, which then shape the plan for the term." },
  { q: "What happens if a student is struggling with a particular topic?", a: "The tutor pauses, goes back to the basics, and works through them carefully before moving on, even if it takes a few extra lessons." },
  { q: "Can parents sit in on lessons?", a: "Most families let the lesson run between student and tutor, but parents are welcome to observe occasionally if that helps everyone feel comfortable." },
  { q: "Do lessons continue during school holidays and exam weeks?", a: "Families choose. Some pause during half-term, others keep going lightly, and many step up sessions in the weeks before mocks or finals." },
  { q: "What if my child needs help with multiple subjects?", a: "Each subject is taught by a tutor matched to it, so a student studying maths and chemistry will have a specialist for each, not one tutor stretched across both." },
];

const emiratesData = [
  {
    id: 0,
    title: "Wherever You Are in the UAE",
    shortTitle: "Location",
    desc: "We work with families in Dubai, Abu Dhabi, Sharjah, Al Ain, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",
    iconBlue: <Globe className="h-6 w-6 text-[#0f4a9b]" strokeWidth={1.5} />,
    iconWhite: <Globe className="h-6 w-6 text-white" strokeWidth={1.5} />,
    details: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
    detailLabel: "Emirates we serve",
  },
  {
    id: 1,
    title: "Lessons That Fit Your Week",
    shortTitle: "Scheduling",
    desc: "Sessions are booked around school hours, after-school clubs, weekends, and term breaks, with calendar adjustments year-round.",
    iconBlue: <Calendar className="h-6 w-6 text-[#0f4a9b]" strokeWidth={1.5} />,
    iconWhite: <Calendar className="h-6 w-6 text-white" strokeWidth={1.5} />,
    details: ["School hours", "After-school clubs", "Weekend sessions", "Term breaks", "Year-round adjustments"],
    detailLabel: "When lessons happen",
  },
  {
    id: 2,
    title: "Online, So Distance Isn't an Issue",
    shortTitle: "Online",
    desc: "All lessons happen live online, so a tutor's location never affects who your child is matched with.",
    iconBlue: <BookOpen className="h-6 w-6 text-[#0f4a9b]" strokeWidth={1.5} />,
    iconWhite: <BookOpen className="h-6 w-6 text-white" strokeWidth={1.5} />,
    details: ["Live 1-to-1 sessions", "Any device, anywhere", "Best-fit tutor matching", "No commute needed", "Full-year continuity"],
    detailLabel: "How it's delivered",
  },
];

function EmiratesSection() {
  const [active, setActive] = useState<number>(0);
  const item = emiratesData[active];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-sm font-bold rounded-full mb-6 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
            Across the Emirates
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
            <GradientHeadingText text="Tutoring Across Every Emirate" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Families across the UAE arrange lessons that fit their week, their school calendar, and where they live.
          </p>
        </div>

        {/* Expandable rows */}
        <div className="space-y-3">
          {emiratesData.map((e, idx) => (
            <div key={e.id} className="rounded-[20px] overflow-hidden border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(199,162,74,0.12)] transition-shadow duration-300">

              {/* Row header */}
              <button
                onClick={() => setActive(active === e.id ? -1 : e.id)}
                className={`w-full flex items-center gap-4 sm:gap-5 px-5 sm:px-8 py-5 sm:py-6 text-left transition-all duration-300 ${
                  active === e.id
                    ? 'bg-gradient-to-r from-[#0a1f3d] to-[#0f4a9b]'
                    : 'bg-white hover:bg-gray-50/80'
                }`}
              >
                {/* Number — hidden on very small screens */}
                <span className={`hidden sm:block text-4xl font-black leading-none select-none w-10 text-center flex-shrink-0 ${
                  active === e.id ? 'text-white/20' : 'text-[#0f4a9b]/15'
                }`}>{String(idx + 1).padStart(2,'0')}</span>

                {/* Icon badge — blue bg with blue icon when inactive, golden bg with white icon when active */}
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  active === e.id
                    ? 'bg-gradient-to-br from-[#C7A24A] to-[#A8892A] shadow-[0_0_20px_rgba(199,162,74,0.5)]'
                    : 'bg-gradient-to-br from-[#0f4a9b]/15 to-[#0a3a79]/15'
                }`}>
                  {active === e.id ? e.iconWhite : e.iconBlue}
                </div>

                {/* Title block */}
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                    active === e.id ? 'text-[#C7A24A]' : 'text-[#0f4a9b]/60'
                  }`}>{e.shortTitle}</p>
                  <h3 className={`text-base sm:text-lg font-extrabold leading-tight ${
                    active === e.id ? 'text-white' : 'text-[#0a1f3d]'
                  }`}>{e.title}</h3>
                </div>

                {/* Chevron */}
                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  active === e.id ? 'bg-white/15' : 'bg-[#E5E7EB]'
                }`}>
                  <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                    active === e.id ? 'rotate-180 text-[#C7A24A]' : 'text-[#0f4a9b]'
                  }`} />
                </div>
              </button>

              {/* Expanded body */}
              <AnimatePresence initial={false}>
                {active === e.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white px-5 sm:px-8 pt-6 pb-7">
                      <p className="text-[#C7A24A] text-xs font-bold uppercase tracking-widest mb-4">{e.detailLabel}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                        {e.details.map((d, di) => (
                          <motion.div
                            key={d}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: di * 0.05 }}
                            className="flex items-center gap-2.5"
                          >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#C7A24A] to-[#A8892A] flex-shrink-0" />
                            <span className="text-sm text-[#0a1f3d] font-medium">{d}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  return (
    <Layout>
      <SEOHead title="How It Works | Ustaad Private Tutoring Process UAE" description="Discover how Ustaad's 1-to-1 private tutoring works. Diagnostic assessment, personalised plan, curriculum-aligned sessions, and tracked progress. Book your free trial today." canonical="/how-it-works" ogImage="/UpdatedImages/how-ustaad-private-tutoring-works-uae-families.webp" schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "How It Works", url: "/how-it-works" }]), faqSchema(howItWorksSchemaFaqs)]} />
      {/* ── HERO ── */}
      <section className="pt-10 pb-16 lg:pt-20 lg:pb-20 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-sm font-bold rounded-full mb-6 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
                <Layers className="h-4 w-4" /> How It Works
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
                <GradientHeadingText text="How Tutoring Works at Ustaad" />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                A calm, patient way of teaching, planned around how UAE students learn across a full school year, not against it.
              </p>
              <HeroCTABlock className="mb-4">
                Book Your Free Trial
              </HeroCTABlock>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[400px] lg:h-[580px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-8 border-white group z-10"
            >
              <img
                src="/UpdatedImages/how-ustaad-private-tutoring-works-uae-families.webp"
                alt="Ustaad student in a structured one-to-one private tutoring session tailored to their curriculum and learning pace in the UAE"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                width={1200} height={800} fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a9b]/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      <StatsBar />

      {/* ── THE 4-STEP PROCESS ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-sm font-bold rounded-full mb-6 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
              Our Approach
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="The Ustaad Method" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Here is how teaching takes shape with each student.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Getting to Know the Student", desc: "The tutor learns your child's current level, the topics they find tricky, and their school's pace.", icon: <Search   className="h-6 w-6 text-white" strokeWidth={1.5} />, wm: <Search   className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Strong Basics First", desc: "If something in the basics needs attention, that comes first before moving on to harder topics.", icon: <BookOpen className="h-6 w-6 text-white" strokeWidth={1.5} />, wm: <BookOpen className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Question Practice", desc: "With basics in place, your child works through past papers and exam-style questions with the tutor.", icon: <RotateCw className="h-6 w-6 text-white" strokeWidth={1.5} />, wm: <RotateCw className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
              { title: "Working More Independently", desc: "As your child gains confidence, lessons shift toward more independent practice and the tutor steps back.", icon: <TrendingUp className="h-6 w-6 text-white" strokeWidth={1.5} />, wm: <TrendingUp className="h-28 w-28 text-[#0f4a9b]/10" strokeWidth={0.8} /> },
            ].map((step, i) => (
              <div key={i} className="relative bg-white rounded-[24px] border border-[#E5E7EB] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300 overflow-hidden group" style={{ minHeight: 220 }}>
                <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(15,74,155,0.4)] z-10 flex-shrink-0">
                  {step.icon}
                </div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-3 z-10 leading-tight">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow z-10">{step.desc}</p>
                <div className="absolute right-4 bottom-4 pointer-events-none select-none">{step.wm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LESSON FLOW ── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-sm font-bold rounded-full mb-6 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
              Lesson Flow
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="How Online Lessons Are Managed" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              A few quiet routines that keep lessons calm, organised, and easy to follow over the school year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Notes and Topic Tracking", desc: "The tutor keeps a record so families know what's been covered, what's coming, and what needs revising.", icon: <BookOpen className="h-9 w-9 text-[#0f4a9b]" strokeWidth={1.5} /> },
              { title: "Questions Welcome at Any Point", desc: "Students are encouraged to interrupt, ask, and reread, rather than nod through topics that don't make sense.", icon: <MessageSquare className="h-9 w-9 text-[#0f4a9b]" strokeWidth={1.5} /> },
              { title: "Revision Across the Year", desc: "Older topics are quietly revisited inside regular lessons, so revision never piles up the week before exams.", icon: <RotateCw className="h-9 w-9 text-[#0f4a9b]" strokeWidth={1.5} /> },
              { title: "Calm Communication With Parents", desc: "Parents receive short updates from the tutor on lesson focus, scheduling, and anything worth raising at home.", icon: <UserCheck className="h-9 w-9 text-[#0f4a9b]" strokeWidth={1.5} /> },
            ].map((flow, i) => (
              <div key={i} className="relative bg-white rounded-[24px] border border-[#E5E7EB] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300 overflow-hidden group flex flex-col items-center text-center" style={{ minHeight: 200 }}>
                <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent opacity-40" />
                <div className="mb-5 flex-shrink-0">
                  {flow.icon}
                </div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-3 leading-tight">{flow.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{flow.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />
      </div>

      {/* ── TUTORING ACROSS EVERY EMIRATE ── */}
      <EmiratesSection />

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
              <p className="text-gray-600 text-[15px] leading-relaxed">A few things parents tend to ask before starting.</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {howItWorksSchemaFaqs.map((faq, i) => {
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
      {/* ── 4-STAGE MATCHING FRAMEWORK ── */}
      <section className="py-14 bg-[#f8fafe] border-y border-[#0f4a9b]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f4a9b] bg-[#0f4a9b]/10 px-3 py-1 rounded-full border border-[#0f4a9b]/20">Ustaad Matching Standard</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mt-3 mb-3">Our 4-Stage Tutor Pairing Framework</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Matching a student with the right tutor is the single most important decision in private tuition. We follow a 4-stage process to ensure complete alignment with your child's curriculum, personality, and academic goals.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <span className="text-xs font-black text-[#0f4a9b] bg-[#0f4a9b]/10 px-2.5 py-1 rounded-full">STAGE 1</span>
              <h3 className="font-bold text-[#0a1f3d] text-sm mt-3 mb-1.5">Curriculum Audit</h3>
              <p className="text-xs text-gray-600 leading-relaxed">We identify your child's exact examination board (Cambridge, Edexcel, AQA, IB, AP) and specific syllabus code.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <span className="text-xs font-black text-[#0f4a9b] bg-[#0f4a9b]/10 px-2.5 py-1 rounded-full">STAGE 2</span>
              <h3 className="font-bold text-[#0a1f3d] text-sm mt-3 mb-1.5">Tutor Shortlisting</h3>
              <p className="text-xs text-gray-600 leading-relaxed">We select an educator who specializes in that exact level (IGCSE, A-Level, IB SL/HL) and has proven student results.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <span className="text-xs font-black text-[#0f4a9b] bg-[#0f4a9b]/10 px-2.5 py-1 rounded-full">STAGE 3</span>
              <h3 className="font-bold text-[#0a1f3d] text-sm mt-3 mb-1.5">30-Min Free Trial</h3>
              <p className="text-xs text-gray-600 leading-relaxed">A zero-commitment trial session lets student and parent evaluate tutor rapport, teaching style, and digital whiteboard tools.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <span className="text-xs font-black text-[#0f4a9b] bg-[#0f4a9b]/10 px-2.5 py-1 rounded-full">STAGE 4</span>
              <h3 className="font-bold text-[#0a1f3d] text-sm mt-3 mb-1.5">Tracked Progress</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Parents receive regular lesson summaries, topic completion updates, and mock exam review feedback throughout the term.</p>
            </div>
          </div>
        </div>
      </section>

      
          <div className="mt-8 bg-white p-6 rounded-2xl border border-slate-200/80 text-xs text-gray-600 leading-relaxed space-y-2">
            <h3 className="text-sm font-bold text-[#0a1f3d]">Continuous Academic Quality Control</h3>
            <p>Beyond initial tutor matching, Ustaad maintains continuous oversight over every student's learning journey. Academic coordinators conduct monthly check-ins with parents, review past-paper practice scores, and refine session objectives as mock exams approach. This ongoing support ensures that tuition remains targeted, efficient, and aligned with your child's evolving school requirements.</p>
          </div>

      <FinalCTA
        title="Start with a Short Conversation"
        subtitle="A first call lets us hear what your child needs, before any lessons are arranged."
        button1Text="Start Your First Session"
        button2Text="Ask Your Question"
      />

    </Layout>
  );
}
