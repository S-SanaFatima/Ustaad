import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award, BookOpen, ChevronDown, ChevronLeft, ChevronRight, ClipboardList, Clock, Flag, Globe, GraduationCap, Landmark,
  Lightbulb, MessageCircle, MessageSquare, PenLine, Phone, RotateCw, ShieldCheck, Star, Target, TrendingUp, UserCheck,
  Users, CheckCircle2, ArrowRight
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

  useEffect(() => {
    const param = searchParams.get('city');
    setCityName(param ? (CITY_NAMES[param] ?? null) : null);
  }, [searchParams]);

  const selectionSteps = [
    { 
      step: "01",
      title: "Curriculum Knowledge Evaluation",    
      shortTitle: "Curriculum Command",
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
      shortTitle: "Live Teaching",
      desc: "We assess explanation clarity, lesson pacing, student engagement, and the tutor's ability to simplify complex academic concepts into intuitive, digestible steps.", 
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
      shortTitle: "Academic Depth",
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
      shortTitle: "Professionalism",
      desc: "Communication standards, lesson preparation, punctuality, and commitment to family progress are rigorously evaluated to maintain executive quality.", 
      icon: ShieldCheck,
      highlights: [
        "Strict Punctuality & Communication Audit",
        "KHDA & ADEK Compliance Framework",
        "Regular Parent Feedback Monitoring"
      ]
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Private Tutors in Dubai & UAE — IGCSE, A-Level, IB & AP | Ustaad"
        description="Meet Ustaad's curriculum-specialist private tutors in Dubai, Abu Dhabi and across the UAE. Expert 1-to-1 tutoring for IGCSE, GCSE, A-Level, IB (MYP/SL/HL) and AP. Free trial, no commitment."
        canonical="/tutors"
        ogImage="/UpdatedImages/tutor-page.webp"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tutors", url: "/tutors" }]),
          faqSchema(tutorsSchemaFaqs)
        ]}
      />

      {/* ── 1. HERO (FITS BEAUTIFULLY ON 100% DESKTOP RESOLUTION) ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F4F8FD] via-white to-[#fcfaf5] py-8 sm:py-10 lg:py-12">
        {/* Animated Radial Ambient Glow Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-br from-[#0f4a9b]/15 via-[#1e5ba8]/10 to-[#C7A24A]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-tr from-[#C7A24A]/12 via-[#0f4a9b]/8 to-transparent rounded-full blur-[70px] sm:blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4" 
        />
        <div className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0f4a9b 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 xl:gap-12 items-center">

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs sm:text-sm font-bold rounded-full mb-3 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.12)]">
                <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> {cityName ? `Private Tutors in ${cityName}` : 'Our Tutors'}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#0a1f3d] mb-3 leading-[1.15] tracking-tight">
                <GradientHeadingText text={cityName ? `Expert Tutors in ${cityName}` : 'Learn from the Right Tutor'} />
              </h1>
              <div className="w-14 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3" />
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-5 leading-relaxed max-w-xl font-medium">
                Every Ustaad tutor is evaluated for curriculum command, subject depth, and clear teaching before joining our UAE faculty.
              </p>
              <HeroCTABlock className="mb-2">
                Book Your Free Trial
              </HeroCTABlock>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[350px] xl:h-[380px] rounded-2xl sm:rounded-[28px] overflow-hidden shadow-[0_15px_45px_rgba(15,74,155,0.12)] border-4 border-white group z-10"
            >
              <img
                src="/UpdatedImages/tutor-page.webp"
                alt="Curriculum-specialist Ustaad tutor walking an IGCSE student through exam-board past paper practice"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                width={1200}
                height={800}
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a9b]/35 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      <StatsBar />

      {/* ── 3. THE RIGHT TUTOR, GUARANTEED (EVERY CURRICULUM) ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-xs font-bold rounded-full mb-2.5 border border-[#C7A24A]/20 shadow-xs">
              <Landmark className="h-3.5 w-3.5" /> Every Curriculum
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
              <GradientHeadingText text="The Right Tutor: Guaranteed." />
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center max-w-2xl mx-auto">
              Specialist tutors for the British, American, and IB curricula followed across Dubai, Abu Dhabi, and the UAE.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                flag: (
                  <svg viewBox="0 0 60 36" width="48" height="28" className="rounded-md shadow-xs mb-3" xmlns="http://www.w3.org/2000/svg">
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
                cta: "View Curriculum",
                ctaHref: "/british-curriculum",
                discover: "Request a Tutor Match",
              },
              {
                flag: (
                  <svg viewBox="0 0 60 36" width="48" height="28" className="rounded-md shadow-xs mb-3" xmlns="http://www.w3.org/2000/svg">
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
                cta: "View Curriculum",
                ctaHref: "/american-curriculum",
                discover: "Request a Tutor Match",
              },
              {
                flag: (
                  <div className="w-[48px] h-[28px] rounded-md shadow-xs mb-3 bg-[#0f4a9b] flex items-center justify-center">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                ),
                badge: "MYP • SL • HL",
                title: "IB Curriculum Tutors",
                desc: "Tutoring for IB MYP and Diploma Programme subjects, shaped to coursework, subject demands, and exams.",
                cta: "View Curriculum",
                ctaHref: "/ib-curriculum",
                discover: "Request a Tutor Match",
              },
            ].map((c, i) => (
              <div key={i} className="relative bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-5 flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_36px_rgba(199,162,74,0.15)] hover:border-[#C7A24A]/60 transition-all overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent" />
                {c.flag}
                <h3 className="text-sm sm:text-base font-extrabold text-[#0a1f3d] mb-1.5">{c.title}</h3>
                {c.badge && (
                  <div className="inline-flex items-center self-start px-2 py-0.5 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] text-white text-[9.5px] font-extrabold uppercase tracking-wider rounded-full shadow-2xs mb-2.5">
                    {c.badge}
                  </div>
                )}
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-4">{c.desc}</p>
                <div className="w-10 h-0.5 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3" />
                <a href={c.ctaHref} className="mt-auto inline-flex items-center justify-center w-full px-3 py-2 bg-transparent border border-[#0f4a9b]/30 text-[#0a1f3d] font-bold text-xs rounded-xl hover:border-[#0f4a9b] hover:text-[#0f4a9b] transition-all">
                  {c.cta}
                </a>
                <GoldButton href="/contact#form" className="mt-2 w-full py-2 text-xs shadow-xs">
                  {c.discover}
                </GoldButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MEET A FEW OF OUR SCREENED TUTORS ── */}
      <MeetTutorsSection />

      {/* ── 5. HOW WE SELECT OUR TUTORS (SLEEK TABBED DECK — FITS 100% DESKTOP SCREEN) ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-blue-50/40 via-white to-gray-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-xs font-bold rounded-full mb-2 border border-[#C7A24A]/20 shadow-xs">
              <Star className="h-3.5 w-3.5 text-[#C7A24A]" /> The Ustaad Standard
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-1.5 tracking-tight">
              <GradientHeadingText text="How We Select Our Tutors" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Every tutor is evaluated, verified, and audited across 4 core benchmarks before teaching.
            </p>
          </div>

          {/* Interactive 4-Step Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 max-w-3xl mx-auto">
            {selectionSteps.map((step, idx) => {
              const IconComponent = step.icon;
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0f4a9b] text-white border-[#0f4a9b] shadow-md shadow-[#0f4a9b]/20 font-bold'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#0f4a9b]/40 hover:bg-blue-50/30'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? 'bg-white/15 text-[#C7A24A]' : 'bg-gray-100 text-[#0f4a9b]'}`}>
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className={`text-[9px] uppercase tracking-wider block leading-none mb-0.5 ${isSelected ? 'text-blue-200' : 'text-gray-400'}`}>
                      Step {step.step}
                    </span>
                    <span className="text-xs font-bold truncate block leading-tight">
                      {step.shortTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="max-w-3xl mx-auto mb-6">
            <AnimatePresence mode="wait">
              {(() => {
                const activeData = selectionSteps[activeStepIndex];
                const IconComponent = activeData.icon;

                return (
                  <motion.div
                    key={activeStepIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_12px_36px_rgba(15,74,155,0.08)] overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />

                    <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center shadow-md shadow-[#0f4a9b]/20 shrink-0">
                          <IconComponent className="h-5 w-5 text-[#C7A24A]" />
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold text-[#C7A24A] uppercase tracking-widest block">
                            Evaluation Step {activeData.step} of 04
                          </span>
                          <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] leading-snug">
                            {activeData.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => setActiveStepIndex(prev => (prev === 0 ? 3 : prev - 1))}
                          className="p-1.5 rounded-lg bg-gray-100 hover:bg-[#0f4a9b] hover:text-white transition-all text-gray-600 cursor-pointer border border-gray-200"
                          aria-label="Previous step"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setActiveStepIndex(prev => (prev === 3 ? 0 : prev + 1))}
                          className="p-1.5 rounded-lg bg-gray-100 hover:bg-[#0f4a9b] hover:text-white transition-all text-gray-600 cursor-pointer border border-gray-200"
                          aria-label="Next step"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                      {activeData.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                      {activeData.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-[#0a1f3d]">
                          <div className="w-4 h-4 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center shrink-0 text-[9px] font-extrabold">
                            ✓
                          </div>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Bottom KHDA & ADEK Verified Banner */}
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gradient-to-r from-[#0a1f3d] via-[#0d2c58] to-[#0f4a9b] rounded-2xl p-3.5 sm:p-4 shadow-md border border-white/15 overflow-hidden flex items-center gap-3.5 text-left">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-xl flex items-center justify-center text-white shadow-xs">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-white/95 text-xs sm:text-sm leading-relaxed font-medium">
                Our tutors are subject specialists with verified teaching credentials. Every lesson aligns with KHDA and ADEK inspection standards.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. FROM ENQUIRY TO FIRST LESSON (4-STEP HORIZONTAL PROCESS) ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-xs font-bold rounded-full mb-2 border border-[#C7A24A]/20 shadow-xs">
              <Star className="h-3.5 w-3.5 text-[#C7A24A]" /> Streamlined Onboarding
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-1.5">
              <GradientHeadingText text="From Enquiry to First Lesson" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">
              A 4-step process built around your requirements and finding the right specialist tutor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto">
            {[
              { 
                step: "01", 
                title: "Initial Consultation", 
                desc: "A personalized discussion exploring your child's curriculum, school targets, and specific academic requirements.", 
                icon: Phone,
                highlight: "Needs Analysis"
              },
              { 
                step: "02", 
                title: "Specialist Tutor Match", 
                desc: "We handpick and recommend specialist tutors based on syllabus command, teaching style, and availability.", 
                icon: UserCheck,
                highlight: "Vetted Expert Allocation"
              },
              { 
                step: "03", 
                title: "Free Trial Lesson", 
                desc: "Experience an initial online trial session to assess tutor rapport, teaching clarity, and student engagement.", 
                icon: BookOpen,
                highlight: "Zero-Commitment Trial"
              },
              { 
                step: "04", 
                title: "Ongoing Lessons & Tracking", 
                desc: "Structured weekly lessons with ongoing parent updates, mock past-paper reviews, and academic tracking.", 
                icon: TrendingUp,
                highlight: "Continuous Reports"
              },
            ].map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 bg-white hover:border-[#0f4a9b]/40 hover:shadow-md p-4 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center shadow-xs">
                        <IconComp className="h-4 w-4 text-[#C7A24A]" />
                      </div>
                      <span className="px-2 py-0.5 bg-[#C7A24A]/10 text-[#A8892A] text-[10px] font-extrabold rounded-full border border-[#C7A24A]/20 uppercase">
                        Step {item.step}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold text-[#0a1f3d] mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed mb-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-[#0f4a9b]">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center shrink-0 text-[9px] font-black">
                      ✓
                    </span>
                    <span>{item.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 7. WHAT TO EXPECT FROM A LESSON (CLEAN 4-CARD HORIZONTAL FLOW) ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs font-extrabold rounded-full mb-2 border border-[#0f4a9b]/20 shadow-xs">
              <Clock className="h-3.5 w-3.5 text-[#0f4a9b]" /> Inside a Lesson
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-1.5 tracking-tight">
              <GradientHeadingText text="What to Expect From a Lesson" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Each online lesson follows a steady pace, so topics are covered thoroughly without feeling rushed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto">
            {[
              { 
                step: "01",
                title: "Topic Introduction",   
                desc: "The lesson begins with the day's topic, checking understanding and resolving early questions.", 
                icon: MessageSquare,
              },
              { 
                step: "02",
                title: "Question Practice",    
                desc: "The student works through practice questions while the tutor catches and corrects method mistakes.", 
                icon: PenLine,
              },
              { 
                step: "03",
                title: "Quick Topic Recap",          
                desc: "Recent topics are briefly reviewed to cement concepts and maintain long-term memory retrieval.", 
                icon: RotateCw,
              },
              { 
                step: "04",
                title: "Exam-Board Practice",        
                desc: "Lessons drill timed questions, command words, and official mark-scheme solutions.", 
                icon: ClipboardList,
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md border border-gray-200/70 transition-all flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-gray-50 text-[#0f4a9b] border border-gray-100 flex items-center justify-center">
                        <IconComp className="h-4 w-4 text-[#C7A24A]" />
                      </div>
                      <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-[#C7A24A] font-black text-xs flex items-center justify-center shadow-xs">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold text-[#0a1f3d] mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 8. YOUR PRIVACY & IDEA BEHIND USTAAD ── */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Privacy Card */}
            <div className="bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-white/15 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-white/15 border border-white/25 rounded-xl flex items-center justify-center mb-3 text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">
                  Your Family's Privacy
                </h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  Student details, lesson content, and academic progress remain strictly confidential and protected under our UAE privacy framework.
                </p>
              </div>
            </div>

            {/* Idea Behind Ustaad Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-xl flex items-center justify-center mb-3 text-white shadow-xs">
                  <Lightbulb className="h-5 w-5 text-[#C7A24A]" />
                </div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2">
                  The Idea Behind Ustaad
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
                  We believe 1-to-1 teaching done with genuine subject depth permanently transforms a student's confidence and grade trajectory.
                </p>
              </div>
              <a href="/editorial" className="text-xs text-[#0f4a9b] font-bold underline hover:text-[#0a3a79] inline-flex items-center gap-1">
                Meet our editorial &amp; review team <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section className="py-8 sm:py-10 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.65fr] gap-8 lg:gap-12 items-start">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs font-bold rounded-full mb-3 border border-[#0f4a9b]/20 shadow-xs">
                <MessageCircle className="h-3.5 w-3.5" /> FAQ
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
                Parents Often{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Ask</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Clear answers to common questions parents ask before scheduling their first trial session.
              </p>
            </div>
            <div>
              <FAQAccordion faqs={tutorsSchemaFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <FinalCTA
        title="Arrange a Conversation"
        subtitle="A short conversation, before any commitment. We'll discuss your child's subjects, school, and what you're hoping tutoring will change."
        button1Text="Get Matched with a Tutor"
        button2Text="Ask Your Question"
      />
    </Layout>
  );
}

function MeetTutorsSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-white via-[#F8F5EF] to-white relative overflow-hidden" id="tutorsSection">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-xs font-bold rounded-full mb-2 border border-[#C7A24A]/20 shadow-xs">
            <Users className="h-3.5 w-3.5 text-[#C7A24A]" /> Our Tutors
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-1.5 tracking-tight">
            <GradientHeadingText text="Meet a Few of Our Screened Tutors" />
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Every Ustaad tutor is signed off by our academic team before teaching. Click any card for the full profile.
          </p>
        </div>

        {/* 3-Bullet Trust Strip (Desktop / Tablet) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 max-w-3xl mx-auto mb-6">
          <div className="flex items-center gap-2.5 bg-white p-2.5 sm:p-3 rounded-xl border border-[#0b3d80]/10 shadow-xs">
            <div className="w-7 h-7 rounded-lg flex-shrink-0 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] grid place-items-center text-white shadow-xs font-bold text-xs">
              ✓
            </div>
            <span className="text-xs font-semibold text-[#0a1f3d] leading-snug">
              Personally screened faculty
            </span>
          </div>

          <div className="flex items-center gap-2.5 bg-white p-2.5 sm:p-3 rounded-xl border border-[#0b3d80]/10 shadow-xs">
            <div className="w-7 h-7 rounded-lg flex-shrink-0 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] grid place-items-center text-white shadow-xs font-bold text-xs">
              ✓
            </div>
            <span className="text-xs font-semibold text-[#0a1f3d] leading-snug">
              Board &amp; school matched
            </span>
          </div>

          <div className="flex items-center gap-2.5 bg-white p-2.5 sm:p-3 rounded-xl border border-[#0b3d80]/10 shadow-xs">
            <div className="w-7 h-7 rounded-lg flex-shrink-0 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] grid place-items-center text-white shadow-xs font-bold text-xs">
              ✓
            </div>
            <span className="text-xs font-semibold text-[#0a1f3d] leading-snug">
              Free 30-min trial session
            </span>
          </div>
        </div>

        {/* TUTOR CARDS: Clean 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          
          {/* FAHAD KHAN */}
          <article className="group bg-white rounded-2xl overflow-hidden border border-[#0b3d80]/10 shadow-[0_8px_24px_rgba(11,61,128,0.06)] hover:shadow-[0_16px_36px_rgba(11,61,128,0.12)] hover:border-[#C7A24A]/60 transition-all duration-300 flex flex-col hover:-translate-y-1">
            <div className="relative h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-[#0e448c] to-[#082d61]">
              <img
                src="/images/tutors/fahad-khan-cover.jpg"
                alt="Fahad Khan, Maths tutor at Ustaad"
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082d61]/40 via-transparent to-transparent" />
              
              <span className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#C7A24A] to-[#A8892A] text-white text-[9.5px] font-extrabold tracking-wider uppercase shadow-xs">
                Ustaad Screened
              </span>

              <span className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#0a1f3d] text-[9.5px] font-bold shadow-xs">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22C55E]" />
                </span>
                Available
              </span>
            </div>

            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] leading-snug mb-0.5">
                Fahad Khan
              </h3>
              <div className="text-[10.5px] uppercase tracking-wider text-[#0b3d80] font-bold mb-2.5">
                Senior Mathematics Faculty
              </div>

              <div className="grid grid-cols-2 gap-2 py-2 border-y border-[#0b3d80]/10 mb-3">
                <div>
                  <div className="text-[8.5px] uppercase tracking-wider text-gray-400 font-extrabold">Experience</div>
                  <div className="text-xs font-bold text-[#0a1f3d]">10+ Years</div>
                </div>
                <div>
                  <div className="text-[8.5px] uppercase tracking-wider text-gray-400 font-extrabold">Qualification</div>
                  <div className="text-xs font-bold text-[#0a1f3d]">BS Maths &amp; B.Ed</div>
                </div>
                <div>
                  <div className="text-[8.5px] uppercase tracking-wider text-gray-400 font-extrabold">Curricula</div>
                  <div className="text-xs font-bold text-[#0a1f3d]">IGCSE, GCSE, A-Level</div>
                </div>
                <div>
                  <div className="text-[8.5px] uppercase tracking-wider text-gray-400 font-extrabold">Subjects</div>
                  <div className="text-xs font-bold text-[#0a1f3d]">Pure Maths, Mechanics</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                <span className="text-[9.5px] font-semibold px-2 py-0.5 rounded-full bg-[#F8F5EF] border border-[#0b3d80]/10 text-[#0b3d80]">Mathematics</span>
                <span className="text-[9.5px] font-semibold px-2 py-0.5 rounded-full bg-[#F8F5EF] border border-[#0b3d80]/10 text-[#0b3d80]">Cambridge</span>
                <span className="text-[9.5px] font-semibold px-2 py-0.5 rounded-full bg-[#F8F5EF] border border-[#0b3d80]/10 text-[#0b3d80]">Edexcel</span>
              </div>

              <a
                href="/tutors/fahad-khan"
                className="mt-auto flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#0b3d80] to-[#0e448c] text-white font-bold text-xs transition-all duration-300 group-hover:from-[#C7A24A] group-hover:to-[#A8892A] shadow-xs text-center"
              >
                <span>View Full Profile</span>
              </a>
            </div>
          </article>

          {/* TABRAIZ KHAN */}
          <article className="group bg-white rounded-2xl overflow-hidden border border-[#0b3d80]/10 shadow-[0_8px_24px_rgba(11,61,128,0.06)] hover:shadow-[0_16px_36px_rgba(11,61,128,0.12)] hover:border-[#C7A24A]/60 transition-all duration-300 flex flex-col hover:-translate-y-1">
            <div className="relative h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-[#0e448c] to-[#082d61]">
              <img
                src="/images/tutors/tabraiz-khan-cover.jpg"
                alt="Tabraiz Khan, Cambridge Certified Maths, Physics and Statistics tutor at Ustaad"
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082d61]/40 via-transparent to-transparent" />
              
              <span className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#C7A24A] to-[#A8892A] text-white text-[9.5px] font-extrabold tracking-wider uppercase shadow-xs">
                Ustaad Screened
              </span>

              <span className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#0a1f3d] text-[9.5px] font-bold shadow-xs">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22C55E]" />
                </span>
                Available
              </span>
            </div>

            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] leading-snug mb-0.5">
                Tabraiz Khan
              </h3>
              <div className="text-[10.5px] uppercase tracking-wider text-[#0b3d80] font-bold mb-2.5">
                Maths, Physics &amp; Statistics
              </div>

              <div className="grid grid-cols-2 gap-2 py-2 border-y border-[#0b3d80]/10 mb-3">
                <div>
                  <div className="text-[8.5px] uppercase tracking-wider text-gray-400 font-extrabold">Experience</div>
                  <div className="text-xs font-bold text-[#0a1f3d]">9 Years</div>
                </div>
                <div>
                  <div className="text-[8.5px] uppercase tracking-wider text-gray-400 font-extrabold">Qualification</div>
                  <div className="text-xs font-bold text-[#0a1f3d]">Master in Statistics</div>
                </div>
                <div>
                  <div className="text-[8.5px] uppercase tracking-wider text-gray-400 font-extrabold">Curricula</div>
                  <div className="text-xs font-bold text-[#0a1f3d]">IGCSE, A-Level, IB, AP</div>
                </div>
                <div>
                  <div className="text-[8.5px] uppercase tracking-wider text-gray-400 font-extrabold">Certification</div>
                  <div className="text-xs font-bold text-[#0a1f3d]">Cambridge Certified</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                <span className="text-[9.5px] font-semibold px-2 py-0.5 rounded-full bg-[#F8F5EF] border border-[#0b3d80]/10 text-[#0b3d80]">Physics</span>
                <span className="text-[9.5px] font-semibold px-2 py-0.5 rounded-full bg-[#F8F5EF] border border-[#0b3d80]/10 text-[#0b3d80]">Math AA/AI</span>
                <span className="text-[9.5px] font-semibold px-2 py-0.5 rounded-full bg-[#F8F5EF] border border-[#0b3d80]/10 text-[#0b3d80]">Statistics</span>
              </div>

              <a
                href="/tutors/tabraiz-khan"
                className="mt-auto flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#0b3d80] to-[#0e448c] text-white font-bold text-xs transition-all duration-300 group-hover:from-[#C7A24A] group-hover:to-[#A8892A] shadow-xs text-center"
              >
                <span>View Full Profile</span>
              </a>
            </div>
          </article>

        </div>

        {/* GET MATCHED BLOCK */}
        <div className="mt-8 max-w-3xl mx-auto rounded-2xl p-5 sm:p-6 text-[#F8F5EF] relative overflow-hidden shadow-[0_16px_40px_rgba(11,61,128,0.2)] border border-[#C7A24A]/30"
          style={{
            background: 'radial-gradient(500px 300px at 90% 10%, rgba(199,162,74,0.2), transparent 60%), linear-gradient(135deg, #0e448c 0%, #0b3d80 50%, #082d61 100%)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.9fr] gap-5 items-center relative z-10">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight mb-2">
                Don't see the right fit?{' '}
                <span className="text-[#C7A24A]">Get matched.</span>
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4">
                We hold a screened faculty pool across every UAE curriculum and subject. Tell us what your child needs.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="/contact#form"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] shadow-sm hover:brightness-110 transition-all"
                >
                  <span>Get Matched with a Tutor</span>
                </a>

                <a
                  href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20be%20matched%20with%20a%20tutor."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-sm transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-white/15 pt-4 md:pt-0 md:pl-5">
              {[
                "1. Send brief: Year, board, & stuck topics.",
                "2. We shortlist a tutor from our screened pool.",
                "3. Free 30-min trial. Continue only if it clicks."
              ].map((txt, i) => (
                <div key={i} className="text-xs text-white/90 leading-snug flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#C7A24A]/25 text-[#C7A24A] border border-[#C7A24A]/40 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {i+1}
                  </span>
                  <span>{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
