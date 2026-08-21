import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award, BarChart3, BookOpen, ChevronDown, ChevronLeft, ChevronRight, ClipboardList, Clock, Flag, Globe, GraduationCap, Landmark, Layers,
  Lightbulb, MessageCircle, MessageSquare, PenLine, Phone, RotateCw, ShieldCheck, Star, Target, TrendingUp, UserCheck,
  Users,
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, FinalCTA, StatsBar, HeroCTABlock, FAQAccordion } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, faqSchema } from './shared/schemas';

const tutorsSchemaFaqs = [
  { q: "How does Ustaad select its private tutors?", a: "Every Ustaad tutor passes a four-part evaluation: curriculum knowledge test, live teaching assessment, subject qualification review, and professional-standards check. Our screening aligns with KHDA and ADEK expectations." },
  { q: "Are Ustaad tutors qualified to teach IGCSE, A-Level, IB and AP?", a: "Yes. Our tutors are subject specialists with verified academic qualifications and teaching experience in their exam boards: CIE, Edexcel, AQA, Cambridge IB, and College Board AP." },
  { q: "Can I choose or change my child's tutor?", a: "Yes. After the free trial you can request a different tutor if the fit isn't right. We'll re-match at no cost." },
  { q: "Are Ustaad lessons online or in person?", a: "Ustaad specialises in online one-to-one tutoring. This lets us match students in any Emirate to the best-fit tutor without location limits, and lessons are recordable for revision." },
  { q: "How does the free trial lesson work?", a: "The trial is one full lesson at your family's chosen time. No commitment to continue. Your child meets the matched tutor, works on a real topic, and you decide whether to proceed after." },
  { q: "Do tutors follow the student's school and syllabus?", a: "Yes. Tutors work from your child's actual school scheme of work, past-paper set, and upcoming assessments, not a generic curriculum." },
  { q: "Do you offer past-paper practice and exam preparation?", a: "Yes. Regular past-paper practice is built into every course, with intensive exam-prep blocks scheduled before mocks and finals." },
  { q: "What happens if my child misses a lesson?", a: "Lessons can be rescheduled with 24 hours' notice. Missed sessions are never forfeited." },
  { q: "How are parents updated on progress?", a: "Parents receive lesson summaries after key milestones and direct contact with the tutor." },
  { q: "What subjects and exam boards do you cover?", a: "Maths, Physics, Chemistry, Biology, English, Economics, Business Studies, Accounting, Finance, Statistics, and Engineering across Cambridge, Edexcel, AQA, IB and AP." },
];


const CITY_NAMES: Record<string, string> = {
  'abu-dhabi': 'Abu Dhabi',
  'al-ain': 'Al Ain',
  'dubai': 'Dubai',
  'sharjah': 'Sharjah',
  'ajman': 'Ajman',
  'ras-al-khaimah': 'Ras Al Khaimah',
  'fujairah': 'Fujairah',
  'umm-al-quwain': 'Umm Al Quwain',
};

export default function TutorsPage() {
  const [searchParams] = useSearchParams();
  const [cityName, setCityName] = useState<string | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeLessonPhase, setActiveLessonPhase] = useState(0);

  useEffect(() => {
    const param = searchParams.get('city');
    setCityName(param ? (CITY_NAMES[param] ?? null) : null);
  }, [searchParams]);

  return (
    <Layout>
      <SEOHead title="Private Tutors in Dubai & UAE — IGCSE, A-Level, IB & AP | Ustaad" description="Meet Ustaad's curriculum-specialist private tutors in Dubai, Abu Dhabi and across the UAE. Expert 1-to-1 tutoring for IGCSE, GCSE, A-Level, IB (MYP/SL/HL) and AP. Free trial, no commitment." canonical="/tutors" ogImage="/UpdatedImages/tutor-page.webp" schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tutors", url: "/tutors" }]), faqSchema(tutorsSchemaFaqs)]} />
      {/* ── HERO ── */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-20 lg:pb-32 relative overflow-hidden bg-gradient-to-br from-[#F4F8FD] via-white to-[#fcfaf5]">
        {/* Animated Radial Ambient Glow Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-gradient-to-br from-[#0f4a9b]/15 via-[#1e5ba8]/10 to-[#C7A24A]/10 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none translate-x-1/4 -translate-y-1/4" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-[#C7A24A]/12 via-[#0f4a9b]/8 to-transparent rounded-full blur-[80px] sm:blur-[110px] pointer-events-none -translate-x-1/4 translate-y-1/4" 
        />
        {/* Subtle Ambient Dots Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0f4a9b 1px, transparent 0)', backgroundSize: '36px 36px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 sm:gap-12 lg:gap-20 items-center">

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              {/* Visible Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="mb-3 sm:mb-4">
                <ol className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <li>
                    <a href="/" className="hover:text-[#0f4a9b] transition-colors">Home</a>
                  </li>
                  <li className="text-gray-400">/</li>
                  <li className="text-[#0f4a9b] font-bold" aria-current="page">
                    {cityName ? `Our Tutors (${cityName})` : 'Our Tutors'}
                  </li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs sm:text-sm font-bold rounded-full mb-4 sm:mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> {cityName ? `Private Tutors in ${cityName}` : 'Our Tutors'}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-3 sm:mb-4 leading-[1.15] sm:leading-[1.1] tracking-tight">
                <GradientHeadingText text={cityName ? `Expert Tutors in ${cityName}` : 'Learn from the Right Tutor'} />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-4 sm:mb-6" />
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 leading-relaxed max-w-xl">
                UAE tutors chosen for curriculum fit, subject depth, and clear teaching.
              </p>
              <HeroCTABlock className="mb-4" trustText="✦ No commitment to continue.">
                Book Your Free Trial
              </HeroCTABlock>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[260px] sm:h-[380px] lg:h-[600px] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-4 sm:border-8 border-white group z-10"
            >
              <img
                src="/UpdatedImages/tutor-page.webp"
                alt="Curriculum-specialist Ustaad tutor walking an IGCSE Chemistry student through exam-board past paper practice in Sharjah"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                width={1200} height={800} fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a9b]/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      <StatsBar />

      {/* ── THE RIGHT TUTOR, GUARANTEED ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
              <Landmark className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Every Curriculum
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2 sm:mb-3">
              <GradientHeadingText text="The Right Tutor: Guaranteed." />
            </h2>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed text-center">
              Specialist tutors for the British, American, and IB curricula followed across the UAE.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                flag: (
                  <svg viewBox="0 0 60 36" width="60" height="36" className="rounded-md shadow-sm mb-4 sm:mb-5" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="36" fill="#012169"/>
                    <path d="M0,0 L60,36 M60,0 L0,36" stroke="white" strokeWidth="7.2"/>
                    <path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" strokeWidth="4.8"/>
                    <path d="M30,0 V36 M0,18 H60" stroke="white" strokeWidth="12"/>
                    <path d="M30,0 V36 M0,18 H60" stroke="#C8102E" strokeWidth="7.2"/>
                  </svg>
                ),
                badge: "IGCSE • GCSE • A-Level",
                title: "British Curriculum Tutors",
                desc: "Tutoring for IGCSE, GCSE, and A-Level subjects, focused on school topics, revision, and exam preparation.",
                cta: "View Curriculum →",
                ctaHref: "/british-curriculum",
                discover: "Request a Tutor Match",
                discoverIcon: <Landmark className="h-4 w-4 text-[#0f4a9b]" />,
              },
              {
                flag: (
                  <svg viewBox="0 0 60 36" width="60" height="36" className="rounded-md shadow-sm mb-4 sm:mb-5" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="36" fill="#B22234"/>
                    <rect y="2.77" width="60" height="2.77" fill="white"/>
                    <rect y="8.31" width="60" height="2.77" fill="white"/>
                    <rect y="13.85" width="60" height="2.77" fill="white"/>
                    <rect y="19.38" width="60" height="2.77" fill="white"/>
                    <rect y="24.92" width="60" height="2.77" fill="white"/>
                    <rect y="30.46" width="60" height="2.77" fill="white"/>
                    <rect width="24" height="19.38" fill="#3C3B6E"/>
                    <g fill="white">
                      {[0,1,2,3,4].map(row => [0,1,2,3,4,5].slice(0, row % 2 === 0 ? 6 : 5).map((col, ci) => (
                        <circle key={`${row}-${ci}`} cx={row % 2 === 0 ? 2 + col * 4 : 4 + col * 4} cy={2 + row * 3.6} r="0.9"/>
                      )))}
                    </g>
                  </svg>
                ),
                badge: "School Support • AP • SAT",
                title: "American Curriculum Tutors",
                desc: "Tutoring for AP and school-level subjects, matched to classroom work, assignments, and assessments.",
                cta: "View Curriculum →",
                ctaHref: "/american-curriculum",
                discover: "Request a Tutor Match",
                discoverIcon: <Flag className="h-4 w-4 text-[#0f4a9b]" />,
              },
              {
                flag: (
                  <div className="w-[60px] h-[36px] rounded-md shadow-sm mb-4 sm:mb-5 bg-[#0f4a9b] flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                ),
                badge: "MYP • SL • HL",
                title: "IB Curriculum Tutors",
                desc: "Tutoring for IB MYP and Diploma Programme subjects, shaped to coursework, subject demands, and exams.",
                cta: "View Curriculum →",
                ctaHref: "/ib-curriculum",
                discover: "Request a Tutor Match",
                discoverIcon: <Globe className="h-4 w-4 text-[#0f4a9b]" />,
              },
            ].map((c, i) => (
              <div key={i} className="relative bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(199,162,74,0.18)] hover:border-[#C7A24A]/60 transition-all overflow-hidden group">
                {/* Golden top bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent" />
                {c.flag}
                <h3 className="text-base font-extrabold text-[#0a1f3d] mb-2">{c.title}</h3>
                {c.badge && (
                  <div className="inline-flex items-center self-start px-2 py-0.5 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-sm mb-3">
                    {c.badge}
                  </div>
                )}
                <p className="text-gray-600 text-[13px] leading-relaxed mb-3 z-10">{c.desc}</p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-4" />
                <a href={c.ctaHref} className="mt-auto inline-flex items-center justify-center w-full px-4 py-2.5 bg-transparent border-2 border-[#0f4a9b]/30 text-[#0a1f3d] font-bold text-[13px] rounded-xl hover:border-[#0f4a9b] hover:text-[#0f4a9b] transition-all">
                  {c.cta}
                </a>
                <GoldButton href="/contact#form" className="mt-2.5 w-full py-2.5 text-[13px] shadow-[0_0_15px_rgba(199,162,74,0.3)]">
                  {c.discover}
                </GoldButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE SELECT OUR TUTORS (3D Card Dealer Showcase - Clean White & Gradient Theme) ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-blue-50/50 via-white to-gray-50 relative overflow-hidden">
        {/* Ambient Radial Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-[#0f4a9b]/10 via-[#C7A24A]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-gradient-to-br from-[#C7A24A]/10 via-[#0f4a9b]/10 to-transparent rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
              <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#C7A24A]" /> The Ustaad Standard
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-3 sm:mb-4 tracking-tight">
              <GradientHeadingText text="How We Select Our Tutors" />
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore how every tutor is evaluated and verified before joining Ustaad.
            </p>
          </div>

          {/* 3D Card Dealer Deck Canvas */}
          <div className="relative max-w-3xl mx-auto min-h-[380px] mb-10 sm:mb-12" style={{ perspective: '1200px' }}>
            
            {/* Background 3D Stacked Card Layers */}
            <div className="absolute inset-0 bg-white/80 rounded-2xl sm:rounded-3xl translate-y-3 sm:translate-y-4 scale-[0.94] border border-gray-200/60 shadow-lg pointer-events-none opacity-50" />
            <div className="absolute inset-0 bg-white/90 rounded-2xl sm:rounded-3xl translate-y-1.5 sm:translate-y-2 scale-[0.97] border border-gray-200/80 shadow-xl pointer-events-none opacity-80" />

            {/* Active Dealt 3D Card */}
            <AnimatePresence mode="wait">
              {(() => {
                const steps = [
                  { 
                    step: "01",
                    title: "Curriculum Knowledge Evaluation",    
                    desc: "Candidates demonstrate complete syllabus command across British (IGCSE, A-Level), IB (MYP, DP), and American (AP, SAT) curriculum expectations before teaching their first student.", 
                    icon: BookOpen,
                    highlights: [
                      "Syllabus & Past-Paper Command Verified",
                      "Exam Board Specific Mark-Scheme Alignment",
                      "Grade Boundary & Command Word Mastery"
                    ]
                  },
                  { 
                    step: "02",
                    title: "Live Teaching & Explanation Assessment",     
                    desc: "We assess explanation clarity, lesson pacing, student engagement, and the tutor's ability to simplify complex academic concepts into intuitive steps.", 
                    icon: Target,
                    highlights: [
                      "Recorded Simulated Lesson Review",
                      "Concept Breakdown & Diagnostic Clarity",
                      "Interactive Whiteboard & Digital Tool Fluency"
                    ]
                  },
                  { 
                    step: "03",
                    title: "Academic Qualifications & Subject Expertise",       
                    desc: "Degrees, academic credentials, and relevant subject teaching background are thoroughly verified before approval to ensure depth of subject mastery.", 
                    icon: Award,
                    highlights: [
                      "Verified University Degree Credentials",
                      "Specialist Subject Matching by Level",
                      "Proven Academic Track Record"
                    ]
                  },
                  { 
                    step: "04",
                    title: "Professional Standards & Reliability Check",  
                    desc: "Communication standards, lesson preparation, punctuality, and commitment to family progress are rigorously evaluated to maintain executive quality.", 
                    icon: ShieldCheck,
                    highlights: [
                      "Strict Punctuality & Communication Audit",
                      "KHDA & ADEK Compliance Framework",
                      "Regular Parent Feedback Monitoring"
                    ]
                  },
                ];

                const activeData = steps[activeStepIndex];
                const IconComponent = activeData.icon;

                return (
                  <motion.div
                    key={activeStepIndex}
                    initial={{ opacity: 0, rotateY: 90, z: -100, scale: 0.88 }}
                    animate={{ opacity: 1, rotateY: 0, z: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateY: -90, z: -100, scale: 0.88 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-gray-100 shadow-[0_25px_60px_rgba(15,74,155,0.12)] flex flex-col justify-between overflow-hidden"
                  >
                    {/* Metallic Gold Top Accent Trim */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />

                    <div>
                      {/* Top Bar: Icon + Step Title + Next Button */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5 sm:mb-6 relative z-10">
                        <div className="flex items-center gap-3.5 sm:gap-4">
                          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center shadow-lg shadow-[#0f4a9b]/20 shrink-0">
                            <IconComponent className="h-5 w-5 sm:h-7 sm:w-7 text-[#C7A24A]" />
                          </div>
                          <div>
                            <span className="text-[10px] sm:text-xs font-extrabold text-[#C7A24A] uppercase tracking-widest block mb-0.5">
                              Evaluation Step {activeData.step} of 04
                            </span>
                            <h3 className="text-xl sm:text-3xl font-extrabold text-[#0a1f3d] leading-snug">
                              {activeData.title}
                            </h3>
                          </div>
                        </div>

                        {/* Next Step & Previous Controls */}
                        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-gray-100">
                          <button
                            onClick={() => setActiveStepIndex(prev => (prev === 0 ? 3 : prev - 1))}
                            className="p-2.5 sm:p-3 rounded-full bg-gray-100 hover:bg-[#0f4a9b] hover:text-white transition-all text-gray-600 cursor-pointer border border-gray-200"
                            aria-label="Previous evaluation step"
                          >
                            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                          </button>
                          <button
                            onClick={() => setActiveStepIndex(prev => (prev === 3 ? 0 : prev + 1))}
                            className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white font-extrabold text-xs sm:text-sm hover:scale-105 transition-all shadow-md shadow-[#0f4a9b]/25 cursor-pointer"
                          >
                            <span>Next Step</span>
                            <ChevronRight className="h-4 w-4 text-[#C7A24A]" />
                          </button>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 relative z-10 font-medium">
                        {activeData.desc}
                      </p>
                    </div>

                    {/* Assessment Benchmarks List */}
                    <div className="pt-4 sm:pt-6 border-t border-gray-100 relative z-10">
                      <div className="text-[10px] sm:text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3 sm:mb-4">
                        Key Assessment Requirements
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                        {activeData.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2.5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gray-50/80 border border-gray-100 text-xs sm:text-sm font-bold text-[#0a1f3d]">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center shrink-0 text-[10px] sm:text-xs font-extrabold">
                              ✓
                            </div>
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Bottom KHDA & ADEK Verified Banner */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-[#0a1f3d] via-[#0d2c58] to-[#0f4a9b] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_15px_45px_rgba(15,74,155,0.25)] border border-white/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7A24A]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md text-white">
                  <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <p className="text-white/95 text-xs sm:text-base leading-relaxed font-medium">
                  Our tutors are subject specialists with verified teaching experience, who pass a thorough review before joining Ustaad. Our approach aligns with KHDA and ADEK assessment expectations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

      {/* ── FROM ENQUIRY TO FIRST LESSON (3D Horizontal Accordion Cards - Mobile Optimized) ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
              <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#C7A24A]" /> Streamlined Onboarding
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-3 sm:mb-4">
              <GradientHeadingText text="From Enquiry to First Lesson" />
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg leading-relaxed text-center">
              A 4-step process built around your requirements and finding the right specialist tutor.
            </p>
          </div>

          {/* 3D Horizontal Accordion Cards Container */}
          <div className="flex flex-col md:flex-row gap-3.5 sm:gap-4 max-w-5xl mx-auto items-stretch min-h-[340px]">
            {[
              { 
                step: "01", 
                title: "Initial Consultation", 
                shortTitle: "Consultation",
                desc: "A personalized discussion exploring your child's curriculum, school targets, and specific academic requirements.", 
                icon: Phone,
                highlight: "Targeted Needs Analysis & Goals Setup"
              },
              { 
                step: "02", 
                title: "Specialist Tutor Match", 
                shortTitle: "Tutor Match",
                desc: "We handpick and recommend specialist tutors based on syllabus command, teaching style, and schedule availability.", 
                icon: UserCheck,
                highlight: "Vetted Subject Expert Allocation"
              },
              { 
                step: "03", 
                title: "Free Trial Lesson", 
                shortTitle: "Trial Session",
                desc: "Experience a initial online trial session to assess tutor rapport, diagnostic teaching clarity, and student engagement.", 
                icon: BookOpen,
                highlight: "Zero-Commitment Trial Evaluation"
              },
              { 
                step: "04", 
                title: "Ongoing Lessons & Tracking", 
                shortTitle: "Progress Track",
                desc: "Structured weekly lessons with ongoing parent updates, mock past-paper reviews, and academic progress tracking.", 
                icon: TrendingUp,
                highlight: "Continuous Grade Improvement Reports"
              },
            ].map((item, index) => {
              const IconComp = item.icon;
              const isActive = activeProcessStep === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveProcessStep(index)}
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-500 ease-out cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? 'md:flex-[3.5] flex-1 bg-white border-[#0f4a9b]/30 shadow-[0_25px_60px_rgba(15,74,155,0.14)] p-5 sm:p-8 scale-[1.01]'
                      : 'md:flex-[1] flex-1 bg-white/80 hover:bg-white border-gray-200/80 hover:border-[#0f4a9b]/30 p-4 sm:p-5 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Active Top Metallic Accent Bar */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />
                  )}

                  {isActive ? (
                    /* Expanded Active View */
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        {/* Header Row: Icon + Step Badge */}
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center shadow-lg shadow-[#0f4a9b]/20">
                            <IconComp className="h-5 w-5 sm:h-7 sm:w-7 text-[#C7A24A]" />
                          </div>
                          <span className="px-3 py-1 bg-[#C7A24A]/10 text-[#A8892A] text-[10px] sm:text-xs font-extrabold rounded-full border border-[#C7A24A]/20 uppercase tracking-widest">
                            Step {item.step} of 04
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-lg sm:text-2xl font-extrabold text-[#0a1f3d] mb-2 sm:mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6 font-medium">
                          {item.desc}
                        </p>
                      </div>

                      {/* Bottom Highlight Badge */}
                      <div className="pt-3 sm:pt-4 border-t border-gray-100 flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#0a1f3d]">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center shrink-0 text-[10px] sm:text-xs font-extrabold">
                          ✓
                        </div>
                        <span className="leading-snug">{item.highlight}</span>
                      </div>
                    </div>
                  ) : (
                    /* Collapsed Inactive View */
                    <div className="flex flex-row md:flex-col items-center justify-between h-full py-1">
                      <div className="flex items-center md:flex-col gap-3 md:gap-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center font-bold group-hover:bg-[#0f4a9b] group-hover:text-white transition-colors">
                          <IconComp className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] text-[11px] sm:text-xs font-black flex items-center justify-center">
                          {item.step}
                        </span>
                      </div>

                      {/* Vertical Title on Desktop, Horizontal on Mobile */}
                      <div className="text-right md:text-center">
                        <h4 className="text-xs sm:text-sm font-extrabold text-gray-700 md:[writing-mode:vertical-rl] md:rotate-180 md:tracking-wider whitespace-nowrap">
                          {item.shortTitle}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── WHAT TO EXPECT FROM A LESSON (Sleek 4-Step Vertical Timeline List — All Open) ── */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0f4a9b]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C7A24A]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs font-extrabold rounded-full mb-3 border border-[#0f4a9b]/20 shadow-sm">
              <Clock className="h-3.5 w-3.5 text-[#0f4a9b]" /> Inside a Lesson
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
              <GradientHeadingText text="What to Expect From a Lesson" />
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Each online lesson follows a steady pace, so topics are covered thoroughly without feeling rushed.
            </p>
          </div>

          {/* Vertical Timeline List (All 4 Open & Visible — Small Sized Cards) */}
          <div className="relative pl-6 sm:pl-9 space-y-4 sm:space-y-5">
            {/* Vertical Connecting Line */}
            <div className="absolute left-3 sm:left-4 top-3 bottom-3 w-1 bg-gradient-to-b from-[#0f4a9b] via-[#0a3a79] to-[#C7A24A] rounded-full" />

            {[
              { 
                step: "01",
                title: "Topic Introduction",   
                desc: "The lesson begins with the day's topic, with time for any early questions.", 
                icon: MessageSquare,
              },
              { 
                step: "02",
                title: "Question Practice",    
                desc: "The student works through practice questions while the tutor watches for small mistakes.", 
                icon: PenLine,
              },
              { 
                step: "03",
                title: "Quick Recap",          
                desc: "Recent topics are briefly reviewed to keep them fresh in the student's mind.", 
                icon: RotateCw,
              },
              { 
                step: "04",
                title: "Exam Practice",        
                desc: "Closer to exams, lessons cover timed questions, written answers, and exam-board past papers.", 
                icon: ClipboardList,
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="relative group">
                  
                  {/* Timeline Circle Node Badge */}
                  <div className="absolute -left-6 sm:-left-9 top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-[#C7A24A] font-black text-xs flex items-center justify-center shadow-md border-2 border-white group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>

                  {/* Small Sized Card Content */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(15,74,155,0.06)] hover:shadow-[0_15px_40px_rgba(15,74,155,0.12)] border border-gray-100/90 transition-all duration-300 relative overflow-hidden flex items-start gap-4">
                    
                    {/* Metallic Gold Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />

                    {/* Icon Box */}
                    <div className="w-10 h-10 rounded-xl bg-gray-50 text-[#0f4a9b] border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComp className="h-5 w-5 text-[#C7A24A]" />
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── YOUR PRIVACY ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="w-14 h-14 bg-white/15 border border-white/30 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 text-center">
              Your Privacy
            </h2>
            <p className="text-white/90 text-[15px] leading-relaxed text-center">
              Privacy matters to many families. We honour your privacy. Student information, lesson content, and academic discussions remain confidential and protected.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE IDEA BEHIND USTAAD ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(15,74,155,0.35)]">
            <Lightbulb className="h-7 w-7 text-white" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4">
            The Idea Behind Ustaad
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-3xl mx-auto text-center">
            We started Ustaad because we believe one-to-one teaching, done with care, changes a student's relationship with their subject. Every tutor we work with shares that view. We hope to work with your family.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Prefer to read first? See{' '}
            <a href="/editorial" className="text-[#0f4a9b] font-semibold underline">who writes our guidance</a>
            {' '}for UAE parents.
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

      {/* ── FAQ ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">
            {/* Left: Heading */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-4 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.1)]">
                <MessageCircle className="h-4 w-4" /> FAQ
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
                Parents Often{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Ask</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Honest answers to the questions families ask before their first session.
              </p>
            </div>
            {/* Right: Accordion */}
            <div>
              <FAQAccordion faqs={tutorsSchemaFaqs} />
            </div>
          </div>
        </div>
      </section>



      <FinalCTA
        title="Arrange a Conversation"
        subtitle="A short conversation, before any commitment. We'll discuss your child's subjects, school, and what you're hoping tutoring will change."
        button1Text="Get Matched with a Tutor"
        button2Text="Ask Your Question"
      />

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </Layout>
  );
}
