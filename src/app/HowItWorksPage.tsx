import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award, BookOpen, Calendar, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Crosshair, Eye, Globe, GraduationCap, HelpCircle, Home, Layers, Map, MessageCircle, MessageSquare,
  RotateCw, Search, ShieldCheck, Sparkles, Star, TrendingUp, UserCheck, X, Zap,
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, FinalCTA, StatsBar, HeroCTABlock} from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, faqSchema, organizationSchema, websiteSchema } from './shared/schemas';

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Ustaad Private 1-to-1 Tutoring Works in the UAE",
  description: "A step-by-step guide to starting personalized private tutoring with Ustaad, from diagnostic gap assessment to ongoing progress tracking.",
  totalTime: "PT30M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "1. Diagnostic Gap Assessment & Consultation",
      text: "We review your child's current subject level, exam board syllabus, upcoming mocks, and specific learning gaps.",
      url: "https://ustaad.ae/how-it-works#step-1"
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "2. Curriculum-Matched Tutor Selection",
      text: "We match your child with a verified subject specialist experienced in their exact board (Cambridge, Edexcel, AQA, IB, AP).",
      url: "https://ustaad.ae/how-it-works#step-2"
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "3. Personalized 1-to-1 Online Lessons",
      text: "Interactive live sessions focused on concept clarity, worked past paper practice, and exam technique.",
      url: "https://ustaad.ae/how-it-works#step-3"
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "4. Continuous Progress Tracking & Reports",
      text: "Regular feedback, performance monitoring, and tailored plan adjustments ahead of mock and final exams.",
      url: "https://ustaad.ae/how-it-works#step-4"
    }
  ]
};

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
    badge: "UAE Regional Reach",
    meta: "8 Emirates & Cities",
    desc: "We work with families in Dubai, Abu Dhabi, Sharjah, Al Ain, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",
    icon: Globe,
    details: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
    detailLabel: "Emirates we serve",
    highlightText: "Live 1-to-1 matching across every corner of the UAE with zero geographical boundaries.",
  },
  {
    id: 1,
    title: "Lessons That Fit Your Week",
    shortTitle: "Scheduling",
    badge: "Flexible Timetable",
    meta: "7 Days a Week",
    desc: "Sessions are booked around school hours, after-school clubs, weekends, and term breaks, with calendar adjustments year-round.",
    icon: Calendar,
    details: ["School hours", "After-school clubs", "Weekend sessions", "Term breaks", "Year-round adjustments"],
    detailLabel: "When lessons happen",
    highlightText: "Seamlessly tailored around your school timetable, mock exams, and family travels.",
  },
  {
    id: 2,
    title: "Online, So Distance Isn't an Issue",
    shortTitle: "Online",
    badge: "Digital Classroom",
    meta: "Direct 1-to-1",
    desc: "All lessons happen live online, so a tutor's location never affects who your child is matched with.",
    icon: BookOpen,
    details: ["Live 1-to-1 sessions", "Any device, anywhere", "Best-fit tutor matching", "No commute needed", "Full-year continuity"],
    detailLabel: "How it's delivered",
    highlightText: "High-engagement interactive whiteboard, screen sharing, audio clarity, and dedicated session notes.",
  },
];

function EmiratesSection() {
  const [active, setActive] = useState<number>(0);
  const current = emiratesData[active];
  const CurrentIcon = current.icon;

  const nextConsoleItem = () => {
    setActive((prev) => (prev + 1) % emiratesData.length);
  };

  const prevConsoleItem = () => {
    setActive((prev) => (prev - 1 + emiratesData.length) % emiratesData.length);
  };

  return (
    <section className="py-12 lg:py-16 bg-[#f8fafe] border-y border-[#0f4a9b]/10 relative overflow-hidden">
      {/* Ambient background micro grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,74,155,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C7A24A]/10 text-[#8a6d1f] text-xs sm:text-sm font-bold rounded-full mb-3 border border-[#C7A24A]/25">
            <Sparkles className="w-4 h-4 text-[#C7A24A]" />
            Across the Emirates
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#0a1f3d] mb-3 tracking-tight leading-tight">
            <GradientHeadingText text="Tutoring Across Every Emirate" />
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
            Families across the UAE arrange lessons that fit their week, their school calendar, and where they live.
          </p>
        </div>

        {/* Split-Screen Interactive Console Container */}
        <div className="bg-slate-100/90 p-2.5 sm:p-4 rounded-3xl border border-slate-200 shadow-lg">
          <div className="grid lg:grid-cols-[280px_1fr] gap-3 sm:gap-4 items-stretch">
            
            {/* Left Tactile Control Dock */}
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-2.5">
              {emiratesData.map((item, idx) => {
                const isSelected = active === idx;
                const ItemIcon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActive(idx)}
                    className={`group relative text-left p-3 sm:p-4 rounded-2xl transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-[#0a1f3d] text-white border-[#C7A24A]/60 shadow-md ring-1 ring-[#C7A24A]/30'
                        : 'bg-white text-[#0a1f3d] border-slate-200/90 hover:border-[#0f4a9b]/30 hover:bg-slate-50 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#0f4a9b] to-[#0a1f3d] text-[#f5d77f] border border-[#C7A24A]/40'
                            : 'bg-[#0f4a9b]/10 text-[#0f4a9b] group-hover:bg-[#0f4a9b]/15'
                        }`}
                      >
                        <ItemIcon className="w-4 h-4" strokeWidth={2.2} />
                      </div>

                      {/* Status indicator dot */}
                      <span
                        className={`hidden sm:inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-[#C7A24A]/20 text-[#f5d77f] border border-[#C7A24A]/30'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {item.meta}
                      </span>
                    </div>

                    <div>
                      <h4
                        className={`text-xs sm:text-sm font-extrabold leading-snug line-clamp-1 ${
                          isSelected ? 'text-white' : 'text-[#0a1f3d]'
                        }`}
                      >
                        {item.shortTitle}
                      </h4>
                      <p
                        className={`text-[11px] leading-tight mt-0.5 hidden sm:block ${
                          isSelected ? 'text-blue-100/70' : 'text-slate-400'
                        }`}
                      >
                        {item.badge}
                      </p>
                    </div>

                    {/* Active Edge Glow Bar */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeConsoleBar"
                        className="absolute -left-[2px] top-3 bottom-3 w-1 rounded-r-full bg-[#C7A24A] hidden lg:block"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Live Interactive Stage */}
            <div className="relative min-h-[340px] sm:min-h-[320px] bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between overflow-hidden">
              {/* Top Gold Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="flex flex-col justify-between h-full relative z-10"
                >
                  <div>
                    {/* Stage Header */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/10 px-3 py-1 rounded-full border border-[#0f4a9b]/20">
                        {current.badge}
                      </span>

                      <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 text-[#0f4a9b] flex items-center justify-center">
                        <CurrentIcon className="w-4 h-4" strokeWidth={2.2} />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] mb-2 leading-snug">
                      {current.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed mb-5">
                      {current.desc}
                    </p>

                    {/* Interactive Badges Grid */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <p className="text-[#8a6d1f] text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                          <ChevronRight className="w-3.5 h-3.5 text-[#C7A24A]" />
                          {current.detailLabel}
                        </p>
                        <span className="text-[11px] font-bold text-slate-400">
                          {current.details.length} Available
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {current.details.map((d) => (
                          <div
                            key={d}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-[13px] font-bold bg-slate-50 text-[#0a1f3d] border border-slate-200/90 shadow-2xs hover:border-[#0f4a9b]/30 hover:bg-white transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] flex-shrink-0" />
                            <span className="truncate">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stage Bottom Footer with Controls */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <p className="text-[11px] font-medium text-slate-500 hidden sm:flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0f4a9b]" />
                      {current.highlightText}
                    </p>

                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        onClick={prevConsoleItem}
                        aria-label="Previous mode"
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      {/* Segment Dots */}
                      <div className="flex items-center gap-1.5 px-2">
                        {emiratesData.map((e, idx) => (
                          <button
                            key={e.id}
                            onClick={() => setActive(idx)}
                            className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                              active === idx
                                ? 'w-5 bg-[#0f4a9b]'
                                : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                            }`}
                            aria-label={`View ${e.shortTitle}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={nextConsoleItem}
                        aria-label="Next mode"
                        className="w-8 h-8 rounded-lg bg-[#0f4a9b] hover:bg-[#0a3a79] text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Background Icon Watermark (No Numbers) */}
              <CurrentIcon
                aria-hidden="true"
                className="absolute -right-6 -bottom-6 w-40 h-40 text-slate-100/60 select-none pointer-events-none -rotate-12"
                strokeWidth={1}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

const PAIRING_FRAMEWORK_DATA = [
  {
    id: 0,
    title: "Curriculum Audit",
    shortBadge: "Exact Board & Syllabus",
    tag: "Exact Syllabus Code Verification",
    desc: "We identify your child's exact examination board (Cambridge, Edexcel, AQA, IB, AP) and specific syllabus code.",
    icon: Search,
  },
  {
    id: 1,
    title: "Tutor Shortlisting",
    shortBadge: "Specialist Matching",
    tag: "Proven Track Record at Level",
    desc: "We select an educator who specializes in that exact level (IGCSE, A-Level, IB SL/HL) and has proven student results.",
    icon: UserCheck,
  },
  {
    id: 2,
    title: "30-Min Free Trial",
    shortBadge: "Zero-Risk Evaluation",
    tag: "Rapport & Tools Trial",
    desc: "A zero-commitment trial session lets student and parent evaluate tutor rapport, teaching style, and digital whiteboard tools.",
    icon: Zap,
  },
  {
    id: 3,
    title: "Tracked Progress",
    shortBadge: "Ongoing Milestones",
    tag: "Term & Mock Exam Tracking",
    desc: "Parents receive regular lesson summaries, topic completion updates, and mock exam review feedback throughout the term.",
    icon: TrendingUp,
  },
];

function PairingFrameworkSection() {
  const [active, setActive] = useState<number>(0);
  const current = PAIRING_FRAMEWORK_DATA[active];
  const CurrentIcon = current.icon;

  const nextStage = () => {
    setActive((prev) => (prev + 1) % PAIRING_FRAMEWORK_DATA.length);
  };

  const prevStage = () => {
    setActive((prev) => (prev - 1 + PAIRING_FRAMEWORK_DATA.length) % PAIRING_FRAMEWORK_DATA.length);
  };

  return (
    <section className="py-12 lg:py-16 bg-[#f8fafe] border-y border-[#0f4a9b]/10 relative overflow-hidden">
      {/* Micro-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,74,155,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C7A24A]/10 text-[#8a6d1f] text-xs sm:text-sm font-bold rounded-full mb-3 border border-[#C7A24A]/25">
            <Sparkles className="w-4 h-4 text-[#C7A24A]" />
            Ustaad Matching Standard
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#0a1f3d] mb-3 tracking-tight leading-tight">
            <GradientHeadingText text="Our 4-Stage Tutor Pairing Framework" />
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
            Matching a student with the right tutor is the single most important decision in private tuition. We follow a 4-stage process to ensure complete alignment with your child's curriculum, personality, and academic goals.
          </p>
        </div>

        {/* 4 Orbital Satellite Nodes (Zero Numbers, Tactile Luxury Dock) */}
        <div className="bg-slate-100/90 p-2 sm:p-2.5 rounded-2xl border border-slate-200/90 mb-5 shadow-sm max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 relative">
            {PAIRING_FRAMEWORK_DATA.map((item, idx) => {
              const isSelected = active === idx;
              const ItemIcon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActive(idx)}
                  className={`group relative flex flex-col items-center justify-center text-center p-2.5 sm:p-3 rounded-xl transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#0a1f3d] text-white border-[#C7A24A]/50 shadow-md ring-1 ring-[#C7A24A]/30'
                      : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-50 hover:border-[#0f4a9b]/30 shadow-2xs'
                  }`}
                  aria-label={`Select ${item.title}`}
                >
                  {/* Mini Emblem */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 transition-colors ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#0f4a9b] to-[#0a1f3d] text-[#f5d77f] border border-[#C7A24A]/40'
                        : 'bg-[#0f4a9b]/10 text-[#0f4a9b] group-hover:bg-[#0f4a9b]/15'
                    }`}
                  >
                    <ItemIcon className="w-4 h-4" strokeWidth={2.2} />
                  </div>

                  <span
                    className={`text-xs sm:text-[13px] font-bold leading-tight line-clamp-1 ${
                      isSelected ? 'text-white' : 'text-[#0a1f3d]'
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeOrbitIndicator"
                      className="w-4 h-1 rounded-full bg-[#C7A24A] mt-1"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Central Quality Anchor & Active Stage Console */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-4 sm:gap-5 items-stretch">
          
          {/* Active Milestone Card (Dynamic Stage) */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between overflow-hidden min-h-[300px]">
            {/* Top Gold Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="flex flex-col justify-between h-full relative z-10"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/10 px-3 py-1 rounded-full border border-[#0f4a9b]/20">
                      {current.shortBadge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0a1f3d] to-[#0f4a9b] text-[#f5d77f] flex items-center justify-center shadow-xs border border-[#C7A24A]/40 flex-shrink-0">
                      <CurrentIcon className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] mb-2 leading-snug">
                    {current.title}
                  </h3>

                  {/* Word-for-Word Copy */}
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed mb-4">
                    {current.desc}
                  </p>

                  {/* Benefit / Quality Pill */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8a6d1f] bg-[#C7A24A]/10 px-3 py-1.5 rounded-lg border border-[#C7A24A]/25 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-[#C7A24A]" />
                    {current.tag}
                  </div>
                </div>

                {/* Milestone Footer with Navigation */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    {PAIRING_FRAMEWORK_DATA.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => setActive(idx)}
                        className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                          active === idx ? 'w-5 bg-[#0f4a9b]' : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                        }`}
                        aria-label={`Go to ${item.title}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevStage}
                      aria-label="Previous stage"
                      className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-[#0f4a9b] px-3 py-1.5 rounded-xl border border-slate-200 hover:border-[#0f4a9b]/30 bg-slate-50 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Previous</span>
                    </button>
                    <button
                      onClick={nextStage}
                      aria-label="Next stage"
                      className="flex items-center gap-1 text-xs font-bold text-white px-3 py-1.5 rounded-xl bg-[#0f4a9b] hover:bg-[#0a3a79] transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Next Phase</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Subtle Decorative Icon Watermark (No Numbers) */}
            <CurrentIcon
              aria-hidden="true"
              className="absolute -right-4 -bottom-4 w-32 h-32 text-slate-100/60 select-none pointer-events-none -rotate-12"
              strokeWidth={1}
            />
          </div>

          {/* Continuous Academic Quality Control (The Anchor Plinth) */}
          <div className="relative bg-[#0a1f3d] text-white rounded-3xl p-6 sm:p-7 border border-[#C7A24A]/40 shadow-lg flex flex-col justify-between overflow-hidden">
            {/* Top Gold Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent" />

            {/* Subtle background radial accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#C7A24A]/15 via-[#0f4a9b]/10 to-transparent rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#C7A24A]/15 text-[#f5d77f] border border-[#C7A24A]/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C7A24A]" />
                  Quality Anchor
                </div>

                {/* 3D Shield Crest */}
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0f4a9b] to-[#061224] text-[#f5d77f] flex items-center justify-center shadow-md border border-[#C7A24A]/50">
                  <ShieldCheck className="w-5 h-5 drop-shadow-[0_2px_6px_rgba(199,162,74,0.5)]" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2.5 leading-snug">
                Continuous Academic Quality Control
              </h3>

              {/* Exact Word-for-Word Copy */}
              <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed mb-5">
                Beyond initial tutor matching, Ustaad maintains continuous oversight over every student's learning journey. Academic coordinators conduct monthly check-ins with parents, review past-paper practice scores, and refine session objectives as mock exams approach. This ongoing support ensures that tuition remains targeted, efficient, and aligned with your child's evolving school requirements.
              </p>
            </div>

            {/* Live Synchronized Oversight Callout */}
            <div className="relative z-10 pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-blue-100/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span>Active Oversight Sync: <strong className="text-[#f5d77f]">{current.title}</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function TutorScreeningSection() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-[#061529] via-[#0a1f3d] to-[#0d2a52] text-white relative overflow-hidden isolate border-y border-[#C7A24A]/30">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C7A24A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0f4a9b]/20 rounded-full blur-[140px] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(199,162,74,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Card Container */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-lg bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
              
              {/* Top Badge: Under Review / Live Sign-off */}
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C7A24A]/15 border border-[#C7A24A]/40 text-[#f5d77f] rounded-full text-xs font-bold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#C7A24A] animate-pulse" />
                  Under Review
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300 bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
                  How Ustaad Screens Tutors
                </span>
              </div>

              {/* Tutor Sample Profile Card */}
              <div className="bg-white rounded-2xl p-5 text-gray-900 shadow-xl border border-gray-100 mb-6 transform transition hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0a1f3d] to-[#0f4a9b] text-[#f5d77f] font-black text-xl flex items-center justify-center border-2 border-[#C7A24A]/50 shadow-md shrink-0">
                    LK
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#0a1f3d] flex items-center gap-1.5">
                      Leila K.
                      <ShieldCheck className="w-4 h-4 text-[#0f4a9b]" />
                    </h3>
                    <p className="text-xs font-bold text-gray-500">
                      IGCSE Maths · 11 yrs experience
                    </p>
                  </div>
                </div>

                {/* Qualification Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  <span className="px-2.5 py-1 bg-slate-100 text-[#0a1f3d] font-extrabold text-[11px] rounded-lg border border-slate-200">
                    Cambridge
                  </span>
                  <span className="px-2.5 py-1 bg-slate-100 text-[#0a1f3d] font-extrabold text-[11px] rounded-lg border border-slate-200">
                    Edexcel
                  </span>
                  <span className="px-2.5 py-1 bg-[#0f4a9b]/10 text-[#0f4a9b] font-extrabold text-[11px] rounded-lg border border-[#0f4a9b]/20">
                    Ex-Head of Dept
                  </span>
                </div>
              </div>

              {/* Sub-label: Personally Signed Off By */}
              <div className="relative text-center mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/15" />
                </div>
                <span className="relative px-4 bg-[#081a33] text-[11px] font-black tracking-widest text-[#f5d77f] uppercase">
                  PERSONALLY SIGNED OFF BY
                </span>
              </div>

              {/* Sign-off Approver Avatars */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="relative mb-2">
                    <img 
                      src="/images/team/f-zaman-v2.jpg" 
                      srcSet="/images/team/f-zaman-v2.jpg 300w"
                      sizes="64px"
                      alt="F. Zaman" 
                      className="w-16 h-16 rounded-full object-cover object-[center_14%] border-2 border-[#C7A24A] shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-white">F. Zaman</h4>
                  <p className="text-[10px] font-extrabold text-[#f5d77f] uppercase tracking-wider mt-0.5">
                    FOUNDER & ACADEMIC DIRECTOR
                  </p>
                  <span className="mt-2 px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded-full border border-emerald-500/30">
                    Approved
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="relative mb-2">
                    <img 
                      src="/images/team/nida-iqbal-v2.jpg" 
                      srcSet="/images/team/nida-iqbal-v2.jpg 300w"
                      sizes="64px"
                      alt="Nida Iqbal" 
                      className="w-16 h-16 rounded-full object-cover object-[center_16%] border-2 border-[#C7A24A] shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-white">Nida Iqbal</h4>
                  <p className="text-[10px] font-extrabold text-[#f5d77f] uppercase tracking-wider mt-0.5">
                    TUTOR QUALITY & DEVELOPMENT LEAD
                  </p>
                  <span className="mt-2 px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded-full border border-emerald-500/30">
                    Approved
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#C7A24A]/15 border border-[#C7A24A]/30 text-[#f5d77f] text-xs font-bold rounded-full mb-4 tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-[#C7A24A]" />
              HOW USTAAD SCREENS TUTORS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
              Every tutor.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5d77f] via-[#C7A24A] to-[#f5d77f]">
                Personally screened.
              </span>
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8">
              Every tutor is reviewed by our named team before your child ever meets them. No anonymous checks. No marketplace shortcuts. Two real people put their name behind each approval.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#C7A24A]/20 border border-[#C7A24A]/50 text-[#f5d77f] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f5d77f]" />
                </div>
                <p className="text-slate-200 text-sm sm:text-base font-semibold">
                  Personally signed off by our Founder and Quality Lead
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#C7A24A]/20 border border-[#C7A24A]/50 text-[#f5d77f] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f5d77f]" />
                </div>
                <p className="text-slate-200 text-sm sm:text-base font-semibold">
                  Matched to your child's exact curriculum, board and school
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#C7A24A]/20 border border-[#C7A24A]/50 text-[#f5d77f] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f5d77f]" />
                </div>
                <p className="text-slate-200 text-sm sm:text-base font-semibold">
                  Complimentary first session. No card, no commitment.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/contact#form"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#f5d77f] via-[#C7A24A] to-[#A8892A] text-[#0a1f3d] font-black rounded-xl px-7 py-4 text-base hover:brightness-110 transition shadow-lg shadow-[#C7A24A]/20 transform hover:-translate-y-0.5"
              >
                Book a Free Trial →
              </a>
              <span className="text-xs text-slate-300 font-medium">
                Reply in <strong className="text-[#f5d77f]">12 minutes</strong> on WhatsApp
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function DiagnosticLens3D({ isHovered, size = 'md' }: { isHovered: boolean; size?: 'sm' | 'md' | 'lg' }) {
  const isLg = size === 'lg';
  const isSm = size === 'sm';
  const sizeClasses = isLg ? 'w-36 h-36 sm:w-40 sm:h-40' : isSm ? 'w-11 h-11' : 'w-20 h-20 sm:w-22 sm:h-22';
  const iconSize = isLg ? 'w-12 h-12' : isSm ? 'w-4 h-4' : 'w-7 h-7';

  return (
    <div style={{ perspective: '1000px' }} className={`relative ${sizeClasses} flex items-center justify-center`}>
      <motion.div
        animate={{
          rotateY: isHovered ? -16 : 0,
          rotateX: isHovered ? 12 : 0,
          y: isHovered ? -6 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full relative flex items-center justify-center cursor-pointer"
      >
        {/* Soft Gold Drop Glow */}
        <div
          className="absolute inset-2 rounded-full bg-[#C7A24A]/25 blur-md pointer-events-none"
          style={{ transform: 'translateZ(-16px)' }}
        />

        {/* 3D Coin Edge Stack (Metallic Gold Depth) */}
        {[...Array(isLg ? 10 : 6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? '#d4af37' : '#b38728',
              transform: `translateZ(${-i * (isLg ? 1.8 : 1.4)}px)`,
            }}
          />
        ))}

        {/* Front Face: Precision Optic Lens */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a3a6b] via-[#0a1f3d] to-[#061224] p-1.5 sm:p-2 border-[2px] sm:border-[3px] border-[#f5d77f] shadow-[inset_0_0_20px_rgba(0,0,0,0.6),0_8px_20px_rgba(10,31,61,0.25)] flex items-center justify-center overflow-hidden"
          style={{ transform: 'translateZ(2px)' }}
        >
          {/* Outer Golden Calibrated Ring */}
          <div className="absolute inset-1 rounded-full border border-dashed border-[#C7A24A]/40 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-full border border-white/10 pointer-events-none" />

          {/* Glass Lens Reflection Highlight */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/15 rounded-full blur-sm pointer-events-none" />

          {/* Center Golden Search Emblem */}
          <motion.div
            animate={{ scale: isHovered ? 1.12 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="relative z-10 flex items-center justify-center"
          >
            <Search className={`${iconSize} text-[#f5d77f] drop-shadow-[0_2px_8px_rgba(199,162,74,0.6)]`} strokeWidth={2.2} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function Mini3DBook({ isHovered, size = 'md' }: { isHovered: boolean; size?: 'sm' | 'md' | 'lg' }) {
  const isLg = size === 'lg';
  const isSm = size === 'sm';
  const sizeClasses = isLg ? 'w-36 h-36 sm:w-40 sm:h-40' : isSm ? 'w-11 h-11' : 'w-20 h-20 sm:w-22 sm:h-22';
  const iconSize = isLg ? 'w-12 h-12' : isSm ? 'w-4 h-4' : 'w-7 h-7';

  return (
    <div style={{ perspective: '1000px' }} className={`relative ${sizeClasses} flex items-center justify-center`}>
      <motion.div
        animate={{
          rotateY: isHovered ? -16 : 0,
          rotateX: isHovered ? 12 : 0,
          y: isHovered ? -6 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full relative flex items-center justify-center cursor-pointer"
      >
        {/* Soft Gold Drop Glow */}
        <div
          className="absolute inset-2 rounded-full bg-[#C7A24A]/25 blur-md pointer-events-none"
          style={{ transform: 'translateZ(-16px)' }}
        />

        {/* 3D Coin Edge Stack (Metallic Gold Depth) */}
        {[...Array(isLg ? 10 : 6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? '#d4af37' : '#b38728',
              transform: `translateZ(${-i * (isLg ? 1.8 : 1.4)}px)`,
            }}
          />
        ))}

        {/* Front Face: Core Knowledge Book Medallion */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a3a6b] via-[#0a1f3d] to-[#061224] p-1.5 sm:p-2 border-[2px] sm:border-[3px] border-[#f5d77f] shadow-[inset_0_0_20px_rgba(0,0,0,0.6),0_8px_20px_rgba(10,31,61,0.25)] flex items-center justify-center overflow-hidden"
          style={{ transform: 'translateZ(2px)' }}
        >
          {/* Outer Golden Calibrated Ring */}
          <div className="absolute inset-1 rounded-full border border-dashed border-[#C7A24A]/40 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-full border border-white/10 pointer-events-none" />

          {/* Glass Reflection Highlight */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/15 rounded-full blur-sm pointer-events-none" />

          {/* Center 3D Golden Open Book */}
          <motion.div
            animate={{
              scale: isHovered ? 1.15 : 1,
              rotateY: isHovered ? -10 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="relative z-10 flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full bg-[#f5d77f]/20 blur-xs pointer-events-none" />
              <BookOpen className={`${iconSize} text-[#f5d77f] drop-shadow-[0_2px_8px_rgba(199,162,74,0.6)] relative z-10`} strokeWidth={2.2} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function PracticePaper3D({ isHovered, size = 'md' }: { isHovered: boolean; size?: 'sm' | 'md' | 'lg' }) {
  const isLg = size === 'lg';
  const isSm = size === 'sm';
  const sizeClasses = isLg ? 'w-36 h-36 sm:w-40 sm:h-40' : isSm ? 'w-11 h-11' : 'w-20 h-20 sm:w-22 sm:h-22';
  const iconSize = isLg ? 'w-12 h-12' : isSm ? 'w-4 h-4' : 'w-7 h-7';

  return (
    <div style={{ perspective: '1000px' }} className={`relative ${sizeClasses} flex items-center justify-center`}>
      <motion.div
        animate={{
          rotateY: isHovered ? -16 : 0,
          rotateX: isHovered ? 12 : 0,
          y: isHovered ? -6 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full relative flex items-center justify-center cursor-pointer"
      >
        {/* Soft Gold Drop Glow */}
        <div
          className="absolute inset-2 rounded-full bg-[#C7A24A]/25 blur-md pointer-events-none"
          style={{ transform: 'translateZ(-16px)' }}
        />

        {/* 3D Coin Edge Stack (Metallic Gold Depth) */}
        {[...Array(isLg ? 10 : 6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? '#d4af37' : '#b38728',
              transform: `translateZ(${-i * (isLg ? 1.8 : 1.4)}px)`,
            }}
          />
        ))}

        {/* Front Face: Practice Exam Cycle Medallion */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a3a6b] via-[#0a1f3d] to-[#061224] p-1.5 sm:p-2 border-[2px] sm:border-[3px] border-[#f5d77f] shadow-[inset_0_0_20px_rgba(0,0,0,0.6),0_8px_20px_rgba(10,31,61,0.25)] flex items-center justify-center overflow-hidden"
          style={{ transform: 'translateZ(2px)' }}
        >
          {/* Outer Golden Calibrated Ring */}
          <div className="absolute inset-1 rounded-full border border-dashed border-[#C7A24A]/40 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-full border border-white/10 pointer-events-none" />

          {/* Glass Reflection Highlight */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/15 rounded-full blur-sm pointer-events-none" />

          {/* Center Practice Rotating Cycle Emblem */}
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{
              rotate: { duration: 1.2, ease: 'easeInOut' },
              scale: { type: 'spring', stiffness: 300, damping: 15 },
            }}
            className="relative z-10 flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full bg-[#f5d77f]/20 blur-xs pointer-events-none" />
              <RotateCw className={`${iconSize} text-[#f5d77f] drop-shadow-[0_2px_8px_rgba(199,162,74,0.6)] relative z-10`} strokeWidth={2.4} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function IndependentGrowth3D({ isHovered, size = 'md' }: { isHovered: boolean; size?: 'sm' | 'md' | 'lg' }) {
  const isLg = size === 'lg';
  const isSm = size === 'sm';
  const sizeClasses = isLg ? 'w-36 h-36 sm:w-40 sm:h-40' : isSm ? 'w-11 h-11' : 'w-20 h-20 sm:w-22 sm:h-22';
  const iconSize = isLg ? 'w-12 h-12' : isSm ? 'w-4 h-4' : 'w-7 h-7';

  return (
    <div style={{ perspective: '1000px' }} className={`relative ${sizeClasses} flex items-center justify-center`}>
      <motion.div
        animate={{
          rotateY: isHovered ? -16 : 0,
          rotateX: isHovered ? 12 : 0,
          y: isHovered ? -6 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full relative flex items-center justify-center cursor-pointer"
      >
        {/* Soft Gold Drop Glow */}
        <div
          className="absolute inset-2 rounded-full bg-[#C7A24A]/25 blur-md pointer-events-none"
          style={{ transform: 'translateZ(-16px)' }}
        />

        {/* 3D Coin Edge Stack (Metallic Gold Depth) */}
        {[...Array(isLg ? 10 : 6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? '#d4af37' : '#b38728',
              transform: `translateZ(${-i * (isLg ? 1.8 : 1.4)}px)`,
            }}
          />
        ))}

        {/* Front Face: Mastery Pedestal with Rising Gold Pillars */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a3a6b] via-[#0a1f3d] to-[#061224] p-1.5 sm:p-2 border-[2px] sm:border-[3px] border-[#f5d77f] shadow-[inset_0_0_20px_rgba(0,0,0,0.6),0_8px_20px_rgba(10,31,61,0.25)] flex flex-col items-center justify-center overflow-hidden"
          style={{ transform: 'translateZ(2px)' }}
        >
          {/* Inner Dashed Ring */}
          <div className="absolute inset-1.5 rounded-full border border-dashed border-[#C7A24A]/40 pointer-events-none" />

          {/* 3D Ascending Pillar Bars */}
          <div className="absolute inset-x-4 sm:inset-x-6 bottom-2 sm:bottom-3 flex items-end justify-center gap-0.5 sm:gap-1 opacity-40 pointer-events-none">
            <div className="w-1.5 sm:w-2 h-2 sm:h-3 bg-white/80 rounded-t-xs sm:rounded-t-sm" />
            <div className="w-1.5 sm:w-2 h-3.5 sm:h-5 bg-white/80 rounded-t-xs sm:rounded-t-sm" />
            <div className="w-1.5 sm:w-2 h-5 sm:h-7 bg-white/80 rounded-t-xs sm:rounded-t-sm" />
            <div className="w-1.5 sm:w-2 h-7 sm:h-10 bg-[#f5d77f] rounded-t-xs sm:rounded-t-sm" />
          </div>

          {/* Leaping Golden Arrow */}
          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
              x: isHovered ? 5 : 0,
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="relative z-10"
          >
            <TrendingUp className={`${iconSize} text-[#f5d77f] drop-shadow-[0_2px_8px_rgba(199,162,74,0.6)]`} strokeWidth={2.4} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

const METHOD_STEPS = [
  {
    step: "STEP 01",
    title: "Diagnostic Gap Assessment & Consultation",
    desc: "We begin with a detailed conversation about your child's current subject performance, exam board syllabus (Cambridge, Edexcel, AQA, IB, AP), upcoming school assessments, and specific learning hurdles.",
    details: "During the initial assessment, our academic team reviews recent school report cards, past test papers, and specific topics where your child feels unconfident. This enables us to pinpoint whether difficulty stems from foundational gaps, pacing issues, or exam technique.",
    Component: DiagnosticLens3D,
  },
  {
    step: "STEP 02",
    title: "Curriculum & Board-Exact Tutor Matching",
    desc: "We match your child with a verified subject specialist who has deep, firsthand experience teaching their exact curriculum board and year group across the UAE.",
    details: "Tutor matching at Ustaad is based on curriculum specialization first. A student preparing for Edexcel IGCSE Chemistry is matched with a tutor who knows Edexcel mark schemes inside out, ensuring lesson examples mirror actual exam expectations.",
    Component: Mini3DBook,
  },
  {
    step: "STEP 03",
    title: "Targeted 1-to-1 Live Online Sessions",
    desc: "Sessions focus on active concept building, step-by-step problem solving, and worked past paper practice using interactive whiteboards and direct live feedback.",
    details: "Lessons are designed around your child's active participation. Tutors break down complex multi-mark questions, model clear working out, and guide students through past papers to build confidence under exam conditions.",
    Component: PracticePaper3D,
  },
  {
    step: "STEP 04",
    title: "Independent Growth & Continuous Progress Tracking",
    desc: "As understanding deepens, students transition to independent question solving, supported by monthly academic progress reviews and parent check-ins.",
    details: "We track progress throughout the school year. Parents receive regular lesson summaries and milestone reports, allowing us to adjust session frequency ahead of mock exams or major school assessments.",
    Component: IndependentGrowth3D,
  },
];

function MethodStepCard({
  item,
  index,
  onClick,
}: {
  item: (typeof METHOD_STEPS)[0];
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComp = item.Component;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="relative group bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 p-2 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#0f4a9b]/35 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center cursor-pointer overflow-hidden justify-between h-full min-h-[165px] sm:min-h-[310px]"
    >
      {/* Top Gold Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C7A24A]/0 to-transparent group-hover:via-[#C7A24A] transition-all duration-300" />

      {/* Step Pill Header */}
      <div className="w-full flex items-center justify-center sm:justify-between mb-1 sm:mb-2">
        <span className="text-[7px] sm:text-[11px] font-black uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/10 px-1 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#0f4a9b]/20 group-hover:bg-[#0f4a9b] group-hover:text-white group-hover:border-[#0f4a9b] transition-all duration-300 whitespace-nowrap">
          {item.step}
        </span>
        <span className="hidden sm:flex text-[10px] font-bold text-slate-400 group-hover:text-[#C7A24A] transition-colors items-center gap-0.5">
          Tap to view <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>

      {/* Prominent 3D Object Hero Stage */}
      <div className="relative my-1 sm:my-3 w-full h-12 sm:h-28 flex items-center justify-center">
        {/* Subtle pedestal glow ring */}
        <div className="absolute w-12 sm:w-24 h-3 sm:h-5 rounded-full bg-gradient-to-r from-transparent via-[#0f4a9b]/10 to-transparent bottom-0 pointer-events-none group-hover:via-[#C7A24A]/30 transition-all duration-300" />
        <div className="sm:hidden">
          <IconComp isHovered={isHovered} size="sm" />
        </div>
        <div className="hidden sm:block">
          <IconComp isHovered={isHovered} size="md" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[10px] sm:text-lg font-extrabold text-[#0a1f3d] mb-1 sm:mb-2 leading-tight sm:leading-snug group-hover:text-[#0f4a9b] transition-colors duration-300">
        {item.title}
      </h3>

      {/* Action Trigger */}
      <div className="mt-1 inline-flex items-center gap-0.5 sm:gap-1.5 text-[7px] sm:text-xs font-bold text-[#0f4a9b] bg-slate-50 group-hover:bg-[#0f4a9b]/10 px-1.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full border border-slate-200/80 group-hover:border-[#0f4a9b]/30 transition-all duration-300 whitespace-nowrap">
        <span>Details</span>
        <ChevronRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </div>

      {/* Clean Step Number Watermark in Background */}
      <div
        aria-hidden
        className="absolute right-1 sm:right-3 bottom-0 text-xl sm:text-5xl font-black text-slate-100/60 select-none pointer-events-none group-hover:text-[#0f4a9b]/10 transition-colors duration-300"
      >
        0{index + 1}
      </div>
    </motion.div>
  );
}

const LESSON_FLOW_DATA = [
  {
    id: 0,
    shortTitle: "Notes & Tracking",
    title: "Notes and Topic Tracking",
    desc: "The tutor keeps a record so families know what's been covered, what's coming, and what needs revising.",
    tag: "Organised Academic Tracking",
    guarantee: "Full visibility for parents on covered concepts, upcoming chapters, and target revision points.",
    icon: BookOpen,
  },
  {
    id: 1,
    shortTitle: "Questions Welcome",
    title: "Questions Welcome at Any Point",
    desc: "Students are encouraged to interrupt, ask, and reread, rather than nod through topics that don't make sense.",
    tag: "Encouraging Open Inquiries",
    guarantee: "Low-pressure atmosphere encouraging immediate questions, rereading, and total conceptual clarity.",
    icon: MessageSquare,
  },
  {
    id: 2,
    shortTitle: "Year-Round Revision",
    title: "Revision Across the Year",
    desc: "Older topics are quietly revisited inside regular lessons, so revision never piles up the week before exams.",
    tag: "Continuous Spaced Practice",
    guarantee: "Systematic ongoing review woven into regular sessions so revision is continuous, not stressful.",
    icon: RotateCw,
  },
  {
    id: 3,
    shortTitle: "Parent Communication",
    title: "Calm Communication With Parents",
    desc: "Parents receive short updates from the tutor on lesson focus, scheduling, and anything worth raising at home.",
    tag: "Transparent Regular Updates",
    guarantee: "Regular lesson summaries and transparent progress sync directly from tutor to parent.",
    icon: UserCheck,
  },
];

function FlowMedallion3D({
  icon: Icon,
  isActive,
  isHovered,
}: {
  icon: typeof BookOpen;
  isActive: boolean;
  isHovered: boolean;
}) {
  return (
    <div style={{ perspective: '800px' }} className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
      <motion.div
        animate={{
          rotateY: isActive ? 0 : isHovered ? -14 : 0,
          rotateX: isActive ? 0 : isHovered ? 12 : 0,
          y: isActive ? -4 : isHovered ? -3 : 0,
          scale: isActive ? 1.08 : isHovered ? 1.04 : 1,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full relative flex items-center justify-center cursor-pointer"
      >
        {/* Soft Gold Glow for Active */}
        {isActive && (
          <div
            className="absolute inset-0 rounded-2xl bg-[#C7A24A]/30 blur-md pointer-events-none"
            style={{ transform: 'translateZ(-12px)' }}
          />
        )}

        {/* 3D Depth Layer */}
        <div
          className="absolute inset-0 rounded-2xl bg-[#b38728]"
          style={{ transform: 'translateZ(-4px)' }}
        />

        {/* Front Face: Sapphire & Gold Medallion */}
        <div
          className={`absolute inset-0 rounded-2xl p-1 flex items-center justify-center transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#061224] border-2 border-[#f5d77f] shadow-[0_8px_22px_rgba(15,74,155,0.35)]'
              : 'bg-white border border-slate-200 shadow-xs hover:border-[#0f4a9b]/40'
          }`}
          style={{ transform: 'translateZ(2px)' }}
        >
          <div className="absolute inset-1 rounded-xl border border-dashed border-[#C7A24A]/30 pointer-events-none" />
          <Icon
            className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 relative z-10 ${
              isActive
                ? 'text-[#f5d77f] drop-shadow-[0_2px_8px_rgba(199,162,74,0.6)]'
                : 'text-[#0f4a9b]'
            }`}
            strokeWidth={2.2}
          />
        </div>
      </motion.div>
    </div>
  );
}

function LessonFlowSection() {
  const [active, setActive] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const current = LESSON_FLOW_DATA[active];
  const CurrentIcon = current.icon;

  const nextRoutine = () => {
    setActive((prev) => (prev + 1) % LESSON_FLOW_DATA.length);
  };

  const prevRoutine = () => {
    setActive((prev) => (prev - 1 + LESSON_FLOW_DATA.length) % LESSON_FLOW_DATA.length);
  };

  return (
    <section className="py-10 lg:py-14 bg-gray-50/80 relative overflow-hidden border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header - Compact */}
        <div className="text-center mb-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/10 text-[#8a6d1f] text-xs font-bold rounded-full mb-2.5 border border-[#C7A24A]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#C7A24A]" />
            Lesson Flow
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0a1f3d] mb-2 tracking-tight leading-tight">
            <GradientHeadingText text="How Online Lessons Are Managed" />
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            A few quiet routines that keep lessons calm, organised, and easy to follow over the school year.
          </p>
        </div>

        {/* 4 Interactive 3D Icons Dock */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md sm:max-w-lg mx-auto mb-6">
          {LESSON_FLOW_DATA.map((item, idx) => {
            const isSelected = active === idx;
            const isHovered = hoveredIdx === idx;

            return (
              <button
                key={item.id}
                onClick={() => setActive(idx)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group flex flex-col items-center gap-1.5 focus:outline-hidden cursor-pointer"
                aria-label={`Select ${item.title}`}
              >
                {/* 3D Medallion */}
                <FlowMedallion3D
                  icon={item.icon}
                  isActive={isSelected}
                  isHovered={isHovered}
                />

                {/* Short Title */}
                <span
                  className={`text-[11px] sm:text-xs font-bold text-center leading-tight line-clamp-1 transition-colors duration-200 mt-1 ${
                    isSelected ? 'text-[#0f4a9b] font-extrabold' : 'text-slate-500 group-hover:text-slate-700'
                  }`}
                >
                  {item.shortTitle}
                </span>

                {isSelected && (
                  <motion.div
                    layoutId="activeDockIndicator"
                    className="w-5 h-1 rounded-full bg-[#0f4a9b] mt-0.5"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Routine Content Appears on Front */}
        <div className="w-full max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96, y: 15, rotateX: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15, rotateX: -6 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-lg flex flex-col justify-between overflow-hidden"
            >
              {/* Top Gold Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent" />

              <div>
                {/* Card Top Bar (Zero Numbering) */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/10 px-3 py-1 rounded-full border border-[#0f4a9b]/20">
                      Lesson Routine
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0a1f3d] to-[#0f4a9b] text-[#f5d77f] flex items-center justify-center shadow-xs border border-[#C7A24A]/40 flex-shrink-0">
                    <CurrentIcon className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1f3d] mb-2 leading-snug">
                  {current.title}
                </h3>

                {/* Word-for-Word Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {current.desc}
                </p>

                {/* Benefit Tag */}
                <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#8a6d1f] bg-[#C7A24A]/10 px-3 py-1 rounded-lg border border-[#C7A24A]/25 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#C7A24A]" />
                  {current.tag}
                </div>
              </div>

              {/* Navigation Controls (Go to second, then so on) */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 relative z-10">
                <button
                  onClick={prevRoutine}
                  aria-label="Previous routine"
                  className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-[#0f4a9b] px-3 py-1.5 rounded-xl border border-slate-200 hover:border-[#0f4a9b]/30 bg-slate-50/70 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                {/* Pagination Indicators */}
                <div className="flex items-center gap-1.5">
                  {LESSON_FLOW_DATA.map((flow) => (
                    <button
                      key={flow.id}
                      onClick={() => setActive(flow.id)}
                      className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                        active === flow.id
                          ? 'w-6 bg-[#0f4a9b]'
                          : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                      aria-label={`View ${flow.shortTitle}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextRoutine}
                  aria-label="Next routine"
                  className="flex items-center gap-1 text-xs font-bold text-white px-3.5 py-1.5 rounded-xl bg-[#0f4a9b] hover:bg-[#0a3a79] shadow-xs transition-colors cursor-pointer"
                >
                  <span>Next Routine</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Subtle Decorative Watermark Icon (No Numbers) */}
              <CurrentIcon
                aria-hidden="true"
                className="absolute -right-4 -bottom-4 w-32 h-32 text-slate-100/70 select-none pointer-events-none -rotate-12"
                strokeWidth={1}
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const [activeMethodStep, setActiveMethodStep] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMethodStep(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Layout>
      <SEOHead 
        title="How It Works | Ustaad Private Tutoring Process UAE" 
        description="Discover how Ustaad's 1-to-1 private tutoring works. Diagnostic assessment, personalised plan, curriculum-aligned sessions, and tracked progress. Book your free trial today." 
        canonical="/how-it-works" 
        ogImage="/UpdatedImages/how-ustaad-private-tutoring-works-uae-families.webp" 
        preloadHeroImage="/UpdatedImages/how-ustaad-private-tutoring-works-uae-families.webp"
        schema={[organizationSchema, websiteSchema, localBusinessSchema, howToSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "How It Works", url: "/how-it-works" }]), faqSchema(howItWorksSchemaFaqs)]} 
      />
      {/* ── HERO ── */}
      <section className="pt-8 pb-14 lg:pt-16 lg:pb-20 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Visible Breadcrumb UI */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a itemProp="item" href="/" className="hover:text-[#0f4a9b] transition-colors flex items-center gap-1.5 text-gray-600">
                  <Home className="w-3.5 h-3.5 text-[#0f4a9b]" />
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="text-[#0a1f3d] font-bold" aria-current="page">
                <span itemProp="name">How It Works</span>
                <link itemProp="item" href="https://ustaad.ae/how-it-works" />
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

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
                srcSet="/UpdatedImages/how-ustaad-private-tutoring-works-uae-families.webp 1200w"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                alt="Ustaad student in a structured one-to-one private tutoring session tailored to their curriculum and learning pace in the UAE"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 block"
                width={1200} height={800} loading="eager" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a9b]/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      <StatsBar />

      {/* ── THE 4-STEP PROCESS ── */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-xs sm:text-sm font-bold rounded-full mb-2 sm:mb-4 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
              Our Approach
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-1.5 sm:mb-3">
              <GradientHeadingText text="The Ustaad Method" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-base lg:text-lg leading-relaxed">
              Here is how teaching takes shape with each student.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Step Pipeline Track on Desktop */}
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#0f4a9b]/15 via-[#C7A24A]/30 to-[#0f4a9b]/15 pointer-events-none z-0">
              <motion.div
                className="h-full w-24 bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent"
                animate={{
                  x: ['-20%', '600%'],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            <div className="relative z-10 grid grid-cols-4 gap-1.5 sm:gap-6">
              {METHOD_STEPS.map((step, i) => (
                <MethodStepCard
                  key={step.step}
                  item={step}
                  index={i}
                  onClick={() => setActiveMethodStep(i)}
                />
              ))}
            </div>

            {/* Expanded 3D Inspection Modal ("Becomes Big & Users Read Content") */}
            <AnimatePresence>
              {activeMethodStep !== null && (() => {
                const step = METHOD_STEPS[activeMethodStep];
                const StepIcon = step.Component;

                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a1f3d]/70"
                    onClick={() => setActiveMethodStep(null)}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: 20 }}
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                      onClick={(e) => e.stopPropagation()}
                      className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-6 sm:p-8"
                    >
                      {/* Top Gold Accent Strip */}
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />

                      {/* Header Bar with Step Badge & Close ("Card End") */}
                      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-black uppercase tracking-wider text-white bg-[#0f4a9b] px-3.5 py-1 rounded-full shadow-sm">
                            {step.step}
                          </span>
                          <span className="text-xs font-bold text-gray-500">
                            Step {activeMethodStep + 1} of {METHOD_STEPS.length}
                          </span>
                        </div>

                        {/* Close / Card End Button */}
                        <button
                          onClick={() => setActiveMethodStep(null)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-gray-600 hover:text-[#0a1f3d] bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
                          aria-label="Close card"
                        >
                          <X className="w-4 h-4" />
                          <span>Close</span>
                        </button>
                      </div>

                      {/* Body: Big 3D Object & Content */}
                      <div className="grid sm:grid-cols-[200px_1fr] sm:gap-8 gap-6 items-center">
                        {/* Big 3D Interactive Stage (Clean Floating Artifact with Ambient Light) */}
                        <div className="relative flex items-center justify-center py-4 sm:py-6">
                          <div className="absolute w-36 h-36 bg-gradient-to-br from-[#0f4a9b]/10 via-[#C7A24A]/15 to-transparent rounded-full blur-xl pointer-events-none" />
                          <StepIcon isHovered={true} size="lg" />
                        </div>

                        {/* Content Area with 100% Crisp Typography */}
                        <div className="flex flex-col justify-center">
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3 leading-snug">
                            {step.title}
                          </h3>

                          <div className="w-12 h-1 bg-[#C7A24A] rounded-full mb-4" />

                          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium mb-3">
                            {step.desc}
                          </p>
                          {step.details && (
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                              {step.details}
                            </p>
                          )}

                          {/* Navigation & Done Actions */}
                          <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                            <button
                              disabled={activeMethodStep === 0}
                              onClick={() => setActiveMethodStep((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
                              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl border transition-all ${
                                activeMethodStep === 0
                                  ? 'text-gray-300 border-gray-200 cursor-not-allowed'
                                  : 'text-[#0a1f3d] border-slate-200 hover:border-[#0f4a9b] hover:bg-[#0f4a9b]/5 cursor-pointer'
                              }`}
                            >
                              <ChevronLeft className="w-4 h-4" />
                              <span className="hidden sm:inline">Previous</span>
                            </button>

                            <div className="flex items-center gap-1.5">
                              {METHOD_STEPS.map((_, i) => (
                                <button
                                  key={i}
                                  onClick={() => setActiveMethodStep(i)}
                                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                                    i === activeMethodStep ? 'w-7 bg-[#C7A24A]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                                  }`}
                                  aria-label={`Go to step ${i + 1}`}
                                />
                              ))}
                            </div>

                            {activeMethodStep < METHOD_STEPS.length - 1 ? (
                              <button
                                onClick={() => setActiveMethodStep((prev) => (prev !== null && prev < METHOD_STEPS.length - 1 ? prev + 1 : prev))}
                                className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-[#0f4a9b] text-white hover:bg-[#0a3a79] shadow-sm transition-all cursor-pointer"
                              >
                                <span>Next Step</span>
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            ) : (
                              <button
                                onClick={() => setActiveMethodStep(null)}
                                className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-[#C7A24A] text-[#0a1f3d] hover:bg-[#b5923f] shadow-sm transition-all cursor-pointer"
                              >
                                <span>Done</span>
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 2. OUR 4-STAGE TUTOR PAIRING FRAMEWORK ── */}
      <PairingFrameworkSection />

      {/* ── 3. EVERY TUTOR. PERSONALLY SCREENED. ── */}
      <TutorScreeningSection />

      {/* ── 4. HOW ONLINE LESSONS ARE MANAGED ── */}
      <LessonFlowSection />

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />
      </div>

      {/* ── 5. TUTORING ACROSS EVERY EMIRATE ── */}
      <EmiratesSection />

      {/* ── 6. FREQUENTLY ASKED QUESTIONS ── */}
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

      <FinalCTA
        title="Start with a Short Conversation"
        subtitle="A first call lets us hear what your child needs, before any lessons are arranged."
        button1Text="Start Your First Session"
        button2Text="Ask Your Question on WhatsApp"
        button2Href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20have%20a%20question%20about%20how%20tutoring%20works."
      />

    </Layout>
  );
}
