import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// AnimatePresence kept for BritishPathwaySection
import {
  Atom, Award, BookOpen, Brain, Briefcase, Calculator,
  ChevronDown, ChevronLeft, ChevronRight, Dna, FileText, FlaskConical, GraduationCap,
  HelpCircle, Landmark, MapPin, MessageCircle, Pause, Play, Target, TrendingUp,
} from 'lucide-react';
import { Layout, GradientHeadingText, FinalCTA, StatsBar, HeroCTABlock, UstaadMethodology3DSection, BritishCurriculumJourney3D, SwipeIndicator } from './shared';
import {
  MathsArtifact,
  PhysicsArtifact,
  ChemistryArtifact,
  BiologyArtifact,
  EnglishArtifact,
  BusinessArtifact,
} from './shared/SubjectArtifacts';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const britishSchemaFaqs = [
  { q: "What is the difference between the British Curriculum and the American Curriculum?", a: "The British system is subject-based and assessed through external exams like GCSE, IGCSE, and A-Level. The American model is GPA- and credit-based, measured continuously through the year. Study specialises by Year 12 in the British Curriculum, while American programmes stay broader until graduation." },
  { q: "At what age does the British Curriculum start in UAE schools?", a: "Most schools admit children from age three, into Foundation Stage, and continue through Year 13. Formal subject teaching begins at Year 7, with the first external exams at the end of Year 11." },
  { q: "Which examination boards administer IGCSE, GCSE, and A-Level in the UAE?", a: "UAE schools typically use Cambridge International (CAIE) and Pearson Edexcel for IGCSE and A-Level, alongside AQA, OCR, and Edexcel for GCSE. The exact board is set at school level." },
  { q: "How many A-Level subjects do students usually take?", a: "Most students take three A-Levels across Years 12 and 13. Four are sometimes taken when a stronger profile is needed for competitive courses like medicine or engineering." },
  { q: "Can a student switch from another curriculum into the British Curriculum?", a: "Yes. Students from American, IB, Indian, or French systems commonly transfer in. The smoothest moves happen before Year 7 or Year 10, ahead of external GCSE exams." },
  { q: "Does Ustaad support students studying the British Curriculum?", a: "Yes. We support GCSE, IGCSE, and A-Level students across the UAE through one-to-one tutoring, matched to their school and exam board." },
];

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="font-semibold underline underline-offset-2" style={{ color: '#5b3a8a' }}>{children}</a>
);

const pathwayStages = [
  {
    key: "ks3",
    stage: "Key Stage 3",
    years: "Years 7–9",
    stepNum: "01",
    icon: Target,
    desc: "Broader subjects and the first taste of independent, curious thinking.",
  },
  {
    key: "gcse",
    stage: "GCSE / IGCSE",
    years: "Years 9–11",
    stepNum: "02",
    icon: FileText,
    desc: "Recognised qualifications across English, mathematics, sciences, and other school subjects.",
  },
  {
    key: "alevel",
    stage: "A-Level",
    years: "Years 12–13",
    stepNum: "03",
    icon: Award,
    desc: "Chosen subjects studied in greater depth, with sharper academic focus.",
  },
];

function BritishPathwaySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const DURATION = 5000;
  const current = pathwayStages[activeIndex];

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % pathwayStages.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + pathwayStages.length) % pathwayStages.length);
    setProgress(0);
  };

  const handleSelect = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setProgress(0);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 40;
    const increment = (intervalTime / DURATION) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]);

  const CurrentIcon = current.icon;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 24 : -24,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 30 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -24 : 24,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 30 },
        opacity: { duration: 0.18 },
      },
    }),
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-[#f8fafe] to-white relative overflow-hidden border-b border-gray-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#0f4a9b]/5 via-[#C7A24A]/5 to-sky-400/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/6 border border-[#0f4a9b]/15 rounded-full mb-3.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] animate-pulse" />
            <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">Year 7 to Year 13</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
            <GradientHeadingText text="The British Curriculum Pathway" />
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            A clear academic pathway through the secondary years, supported by Ustaad at every stage.
          </p>
        </div>

        {/* ONE UNIFIED SECTION CARD */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#0f4a9b]/15 shadow-[0_12px_45px_rgba(15,74,155,0.08)] overflow-hidden">
          {/* Top Decorative Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0a3a79]" />

          {/* Integrated Stage Tabs Header (Inside the single card) */}
          <div className="p-2 sm:p-4 bg-[#f6f8fc] border-b border-[#0f4a9b]/10">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
              {pathwayStages.map((s, idx) => {
                const isActive = idx === activeIndex;
                const isPast = idx < activeIndex;

                return (
                  <button
                    key={s.key}
                    onClick={() => handleSelect(idx)}
                    className={`relative flex flex-col items-center sm:items-start p-2 sm:p-3.5 rounded-xl text-left transition-all duration-300 cursor-pointer overflow-hidden group ${
                      isActive
                        ? 'bg-gradient-to-br from-[#0a1f3d] to-[#0f4a9b] text-white shadow-[0_6px_18px_rgba(15,74,155,0.22)]'
                        : isPast
                        ? 'bg-white hover:bg-blue-50/60 text-[#0a1f3d] border border-gray-200/70'
                        : 'bg-white/60 hover:bg-white text-gray-600 border border-gray-200/50'
                    }`}
                  >
                    <div className="w-full flex items-center justify-between gap-1 mb-1">
                      <span
                        className={`text-[9px] sm:text-xs font-mono font-black tracking-wider px-1.5 py-0.5 rounded ${
                          isActive
                            ? 'bg-[#C7A24A] text-[#0a1f3d]'
                            : isPast
                            ? 'bg-[#0f4a9b]/10 text-[#0f4a9b]'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {s.stepNum}
                      </span>
                      <span
                        className={`text-[8px] min-[360px]:text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider ${
                          isActive ? 'text-blue-100' : 'text-gray-400'
                        }`}
                      >
                        {s.years}
                      </span>
                    </div>

                    <div className="w-full font-extrabold text-[11px] min-[360px]:text-xs sm:text-sm leading-tight truncate">
                      {s.stage}
                    </div>

                    {/* Progress Indicator inside Tab */}
                    <div className="w-full h-1 bg-white/15 rounded-full mt-1.5 sm:mt-2 overflow-hidden">
                      {isActive ? (
                        <div
                          className="h-full bg-gradient-to-r from-[#C7A24A] to-[#f0d080] rounded-full transition-all duration-75"
                          style={{ width: `${progress}%` }}
                        />
                      ) : isPast ? (
                        <div className="h-full w-full bg-[#0f4a9b]/40 rounded-full" />
                      ) : (
                        <div className="h-full w-0 bg-transparent rounded-full" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card Body with Slide Animation */}
          <div className="p-4 sm:p-8 min-h-[200px] flex flex-col justify-between relative bg-white">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.key}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid md:grid-cols-12 gap-4 sm:gap-6 items-center"
              >
                {/* Left Column: Stage Detail & Content */}
                <div className="md:col-span-8 flex flex-col items-start order-2 md:order-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-[#C7A24A]/15 to-[#A8892A]/10 border border-[#C7A24A]/30 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A]" />
                      <span className="text-[#C7A24A] text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.14em]">
                        {current.years}
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-gray-400">
                      Step {activeIndex + 1} of {pathwayStages.length}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-2 sm:mb-2.5 tracking-tight">
                    {current.stage}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
                    {current.desc}
                  </p>
                </div>

                {/* Right Column: Visual Medallion */}
                <div className="md:col-span-4 flex items-center justify-center order-1 md:order-2 py-2 md:py-0">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center">
                    {/* Animated Ripple Rings */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0f4a9b]/10 to-[#C7A24A]/10 animate-pulse" />
                    <div className="absolute inset-2 sm:inset-2.5 rounded-full border border-dashed border-[#0f4a9b]/25 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-4 sm:inset-5 rounded-full border border-slate-200/80 shadow-inner bg-gradient-to-b from-[#f8fafe] to-white" />

                    {/* Central Medallion */}
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="relative z-10 w-13 h-13 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-2xl bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-[0_10px_24px_rgba(15,74,155,0.3)] border border-white/25 cursor-pointer"
                    >
                      <CurrentIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9 text-[#f0d080]" strokeWidth={1.75} />
                    </motion.div>

                    {/* Accent Orbit Dots */}
                    <div className="absolute top-1 right-2 sm:top-1.5 sm:right-3 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#C7A24A] shadow-[0_0_8px_rgba(199,162,74,0.6)] animate-bounce" />
                    <div className="absolute bottom-1.5 left-2 sm:bottom-2 sm:left-3 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#0f4a9b] shadow-[0_0_8px_rgba(15,74,155,0.6)]" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Slider Controls */}
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
              {/* Left: Play / Pause Control */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#0a1f3d] text-[11px] sm:text-xs font-bold transition-colors cursor-pointer"
                title={isPlaying ? "Pause auto-advance" : "Play auto-advance"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#0f4a9b]" />
                    <span>Auto-Playing</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#C7A24A]" />
                    <span>Paused</span>
                  </>
                )}
              </button>

              {/* Right: Step Dots + Prev / Next Controls */}
              <div className="flex items-center gap-2.5 sm:gap-4">
                {/* Step Dots */}
                <div className="flex items-center gap-1 sm:gap-1.5">
                  {pathwayStages.map((s, idx) => (
                    <button
                      key={s.key}
                      onClick={() => handleSelect(idx)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeIndex
                          ? 'w-5 sm:w-6 bg-[#0f4a9b]'
                          : 'w-1.5 sm:w-2 bg-gray-200 hover:bg-gray-300'
                      }`}
                      aria-label={`Go to ${s.stage}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-gray-200 hover:border-[#0f4a9b]/30 bg-white hover:bg-blue-50/50 flex items-center justify-center text-[#0a1f3d] transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
                    aria-label="Previous Stage"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-gray-200 hover:border-[#0f4a9b]/30 bg-white hover:bg-blue-50/50 flex items-center justify-center text-[#0a1f3d] transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
                    aria-label="Next Stage"
                  >
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BritishCurriculumPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [howWeHelpExpanded, setHowWeHelpExpanded] = useState(false);

  return (
    <Layout>
      <SEOHead
        title="British Curriculum Tutors UAE | IGCSE & A-Level | Ustaad"
        description="One-to-one tutoring shaped around the academic standards, examination demands, and long-term expectations of the British Curriculum."
        canonical="/british-curriculum"
        ogImage="/UpdatedImages/british-curriculum-tutors-uae-hero.webp"
        schema={[
          localBusinessSchema,
          serviceSchema("British Curriculum Focused Support UAE", "One-to-one British Curriculum tutoring for IGCSE, GCSE, and A-Level across the UAE.", "/british-curriculum"),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Curriculum", url: "/curriculum" }, { name: "British Curriculum", url: "/british-curriculum" }]),
          faqSchema(britishSchemaFaqs),
        ]}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative w-full min-h-[calc(100dvh-84px)] lg:min-h-[calc(100dvh-92px)] flex items-center overflow-hidden">
        {/* Full-bleed background image */}
        <img
          src="/UpdatedImages/british-curriculum-tutors-uae-hero.webp"
          alt="Expert British curriculum tutor guiding a student with IGCSE and A-Level coursework in the UAE"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] lg:object-center"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        {/* Crisp gradient overlay to ensure perfect contrast for the text on the left while showcasing the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 sm:via-white/75 sm:to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f4a9b]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-5 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.12)] backdrop-blur-sm">
              <Landmark className="h-4 w-4" /> British Curriculum
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79] bg-clip-text text-transparent">Focused Support.</span>{' '}
              Steady Progress.
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed max-w-xl font-normal">
              One-to-one tutoring shaped around the academic standards, examination demands, and long-term expectations of the British Curriculum.
            </p>
            <HeroCTABlock className="mb-4">
              Book Your Free Trial
            </HeroCTABlock>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST SIGNALS ── */}
      <StatsBar />

      {/* ── SECTION 3: THE BRITISH CURRICULUM JOURNEY (3D Interactive Objects & Note Modal) ── */}
      <BritishCurriculumJourney3D />

      {/* ── SECTION 4: HOW WE HELP ── */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
            {/* Left Header */}
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/20 rounded-full mb-5">
                <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">How We Help</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
                How We Help British Curriculum{' '}
                <span className="bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8] bg-clip-text text-transparent">Students</span>
              </h2>
              <div className="w-14 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-5" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Targeted guidance tailored to the rigorous demands and marking schemes of the British academic system.
              </p>
            </div>

            {/* Right Card with Animated Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] text-white rounded-2xl sm:rounded-3xl shadow-[0_15px_50px_rgba(15,74,155,0.22)] border border-white/15 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C7A24A] via-white/80 to-[#C7A24A]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7A24A]/10 rounded-full blur-3xl pointer-events-none" />
              <Brain className="absolute -bottom-6 -right-6 w-44 h-44 text-white/[0.04] pointer-events-none" strokeWidth={0.8} />

              <div className="relative z-10 p-7 sm:p-10">
                {/* Animated Chips */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-7">
                  {[
                    { icon: <Target className="h-3.5 w-3.5 text-[#C7A24A]" />,   label: "Every Stage" },
                    { icon: <FileText className="h-3.5 w-3.5 text-[#C7A24A]" />, label: "IGCSE · GCSE · A-Level" },
                    { icon: <Brain className="h-3.5 w-3.5 text-[#C7A24A]" />,    label: "One-to-One" },
                  ].map((chip, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.1 }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white/10 border border-white/15 rounded-full backdrop-blur-sm shadow-xs"
                    >
                      {chip.icon}
                      <span className="text-white/90 text-[11px] font-bold tracking-wide">{chip.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Animated Typography Paragraphs */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-blue-50/90 text-sm sm:text-[15.5px] leading-[1.95] mb-5 text-justify font-normal"
                >
                  Most British Curriculum students don't fall behind because they can't do the work. They miss what a question is really asking, skip what the mark scheme rewards, or study in ways that don't stick. Ustaad's one-to-one tutors sit with your child and unpack each of those moments. Lessons follow the exact specification their school uses, matched to the topic and exam paper they're working on now.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className={`text-blue-50/90 text-sm sm:text-[15.5px] leading-[1.95] text-justify font-normal ${howWeHelpExpanded ? '' : 'hidden'} sm:block`}
                >
                  Across a term, that looks like reading command words the way examiners do, breaking assessment objectives into clear steps, past paper practice marked to real grade boundaries, and short revision routines your child can run alone. You stay in the loop, so progress is never hidden.
                </motion.p>

                <button
                  onClick={() => setHowWeHelpExpanded(!howWeHelpExpanded)}
                  className="sm:hidden mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 text-xs font-bold transition-colors duration-200"
                >
                  {howWeHelpExpanded ? <><ChevronDown className="h-3.5 w-3.5 rotate-180" /> Read Less</> : <><ChevronDown className="h-3.5 w-3.5" /> Read More</>}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SUBJECTS WE SUPPORT ── */}
      <section className="py-20 bg-[#F4F8FD] relative overflow-hidden isolate border-y border-gray-100">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Subjects We Support" />
            </h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Six core subjects, supported across the British Curriculum.
            </p>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 sm:pb-0 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-stretch">
            {[
              { name: "Mathematics", desc: "Pure · Mechanics · Statistics", icon: Calculator, color: "#0f4a9b", artifact: MathsArtifact, href: "/maths" },
              { name: "Physics", desc: "Thermodynamics · Optics · Astrophysics", icon: Atom, color: "#2563eb", artifact: PhysicsArtifact, href: "/physics" },
              { name: "Chemistry", desc: "Bonding · Kinetics · Equilibria", icon: FlaskConical, color: "#0d9488", artifact: ChemistryArtifact, href: "/chemistry" },
              { name: "Biology", desc: "Physiology · Evolution · Biotechnology", icon: Dna, color: "#059669", artifact: BiologyArtifact, href: "/biology" },
              { name: "English", desc: "Comprehension · Argument · Analysis", icon: BookOpen, color: "#6366f1", artifact: EnglishArtifact, href: "/english" },
              { name: "Business", desc: "Case Studies · Finance · Strategy", icon: Briefcase, color: "#c17b2f", artifact: BusinessArtifact, href: "/business" },
            ].map((s, i) => {
              const Icon = s.icon;
              const Artifact = s.artifact;

              return (
                <motion.a
                  href={s.href}
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-[84vw] max-w-[320px] sm:w-auto sm:max-w-none shrink-0 snap-center relative bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(15,74,155,0.14)] hover:border-[#0f4a9b]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer group overflow-hidden"
                >
                  {/* Header: Subject Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shadow-xs shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${s.color}, #0a1f3d)`,
                      }}
                    >
                      <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200 leading-tight">
                        {s.name}
                      </h3>
                      <div
                        className="w-8 h-[2px] mt-1 rounded-full group-hover:w-16 transition-all duration-300"
                        style={{ backgroundColor: s.color }}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#4b5563] group-hover:text-[#1f2937] transition-colors duration-200 text-sm leading-relaxed mb-4 flex-grow">
                    {s.desc}
                  </p>

                  {/* Bespoke Interactive Subject Artifact */}
                  <div className="my-2 group-hover:scale-[1.02] transition-transform duration-300">
                    <Artifact />
                  </div>

                  {/* Footer Link */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200">
                    <span>Explore {s.name}</span>
                    <span className="text-gray-400 group-hover:text-[#0f4a9b] group-hover:translate-x-1 transition-all duration-200">→</span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Swipe indicator on mobile */}
          <SwipeIndicator text="Swipe across all 6 subjects" className="mt-4" />
        </div>
      </section>

      {/* ── SECTION 6: THE BRITISH CURRICULUM PATHWAY ── */}
      <BritishPathwaySection />

      {/* ── SECTION 7: USTAAD METHODOLOGY (3D Interactive Objects & Focus Node) ── */}
      <UstaadMethodology3DSection />

      {/* ── SECTION 8: BRITISH CURRICULUM IN UAE ── */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/20 rounded-full mb-4">
              <MapPin className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">British Curriculum in UAE</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 leading-tight">
              <GradientHeadingText text="British Curriculum in the UAE" />
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Academic stability and tailored one-to-one support across all seven emirates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Blue Card 1 */}
            <div className="relative bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-white/15 shadow-[0_12px_40px_rgba(15,74,155,0.18)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.28)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C7A24A]/10 rounded-full blur-2xl pointer-events-none" />
              <Landmark className="absolute -bottom-8 -right-8 w-44 h-44 text-white/[0.04] pointer-events-none group-hover:scale-110 transition-transform duration-500" strokeWidth={0.6} />

              <div className="relative z-10">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Landmark className="h-5 w-5 text-[#C7A24A]" />
                  </div>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-[#C7A24A] to-[#f0d080] rounded-full" />
                </div>
                <p className="text-blue-100 text-sm sm:text-[15px] leading-relaxed text-justify font-normal">
                  The British Curriculum is widely taught across Abu Dhabi, Dubai, and the Northern Emirates, offering syllabus consistency and smooth transitions between schools.
                </p>
              </div>
            </div>

            {/* Blue Card 2 */}
            <div className="relative bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-white/15 shadow-[0_12px_40px_rgba(15,74,155,0.18)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.28)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C7A24A]/10 rounded-full blur-2xl pointer-events-none" />
              <MapPin className="absolute -bottom-8 -right-8 w-44 h-44 text-white/[0.04] pointer-events-none group-hover:scale-110 transition-transform duration-500" strokeWidth={0.6} />

              <div className="relative z-10">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-5 w-5 text-[#C7A24A]" />
                  </div>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-[#C7A24A] to-[#f0d080] rounded-full" />
                </div>
                <p className="text-blue-100 text-sm sm:text-[15px] leading-relaxed text-justify font-normal">
                  Ustaad supports families inside that system with one-to-one tutors across every emirate, each matched to your child's school, board, and current year group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FREQUENTLY ASKED QUESTIONS ── */}
      <section id="faqs" className="py-8 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">

            {/* Left: Heading */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <HelpCircle className="h-3.5 w-3.5" />
                <span className="text-xs uppercase tracking-wider">Common Questions</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Questions</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Common questions from parents and students about the British Curriculum.
              </p>
            </div>

            {/* Right: Accordion */}
            <div className="flex flex-col gap-[10px]">
              {([
                {
                  q: "What is the difference between the British Curriculum and the American Curriculum?",
                  a: <>The British system is subject-based and assessed through external exams like GCSE, IGCSE, and A-Level. The American model is GPA- and credit-based, measured continuously through the year. In the British Curriculum, study specialises by Year 12, while American programmes stay broader until graduation.</>,
                },
                {
                  q: "At what age does the British Curriculum start in UAE schools?",
                  a: <>Most schools admit children from age three, into Foundation Stage, and continue through Year 13. Formal subject teaching begins at Year 7, with the first external exams at the end of Year 11.</>,
                },
                {
                  q: "Which examination boards administer IGCSE, GCSE, and A-Level in the UAE?",
                  a: <>UAE schools typically use Cambridge International (CAIE) and Pearson Edexcel for <L href="/igcse">IGCSE</L> and <L href="/a-level">A-Level</L>, alongside AQA, OCR, and Edexcel for GCSE. The exact board is set at school level, so your child's specification follows the school they attend.</>,
                },
                {
                  q: "How many A-Level subjects do students usually take?",
                  a: <>Most students take three <L href="/a-level">A-Levels</L> across Years 12 and 13. Four are sometimes taken when a stronger profile is needed for competitive courses like medicine or engineering. Subjects are usually finalised at the end of Year 11.</>,
                },
                {
                  q: "Can a student switch from another curriculum into the British Curriculum?",
                  a: <>Yes. Students from American, IB, Indian, or French systems commonly transfer in. The smoothest moves happen before Year 7 or Year 10, ahead of external <L href="/gcse">GCSE</L> exams.</>,
                },
                {
                  q: "Does Ustaad support students studying the British Curriculum?",
                  a: <>Yes. We support <L href="/gcse">GCSE</L>, <L href="/igcse">IGCSE</L>, and <L href="/a-level">A-Level</L> students across the UAE through one-to-one tutoring, matched to their school and exam board.</>,
                },
              ] as { q: string; a: React.ReactNode }[]).map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    {/* Question row */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{
                          width: 40, height: 40, minWidth: 40, minHeight: 40,
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
                          minHeight: '48px', padding: '8px 14px', cursor: 'pointer',
                          background: 'transparent', borderColor: 'rgba(15,74,155,0.1)',
                        }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 32, height: 32, minWidth: 32, minHeight: 32,
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

                    {/* Answer panel */}
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
                          style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, background: '#0f4a9b', color: '#fff' }}
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
        </div>
      </section>

      {/* ── SECTION 10: FINAL CTA ── */}
      


      <FinalCTA
        title="Find Your British Curriculum Tutor"
        subtitle="Matched in minutes."
        button1Text="Book Your Free Trial" />

    </Layout>
  );
}
