import { Fragment, useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, BarChart3, BookOpen, BrainCircuit, Building2, CheckCircle, ChevronDown,
  Flag, GraduationCap, HelpCircle, Layers, LibraryBig, MapPin, MessageCircle, MessageCircleQuestion,
  Orbit, PenLine, School, Sparkles,
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, BritishLandmarkWatermark, AmericanLandmarkWatermark, IBWorldWatermark, FinalCTA, StatsBar, HeroCTABlock, SwipeIndicator } from './shared';
import RelatedContent from './shared/RelatedContent';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, faqSchema } from './shared/schemas';

export default function CurriculumPage() {
  type Stage = {
    label: string;
    detail: string;
    highlight?: boolean;
    badges?: string[];
    note?: string;
  };

  type CurriculumStage = {
    title: string;
    subtitle: string;
    icon: ReactNode;
    stages: Stage[];
  };

  type TeachingApproachItem = {
    key: string;
    title: string;
    subtitle: string;
    icon: ReactNode;
    bullets: string[];
  };

  const academicStages: CurriculumStage[] = [
    {
      title: 'British Curriculum',
      subtitle: 'Cambridge | Edexcel | AQA',
      icon: <LibraryBig className="h-6 w-6 text-white" />,
      stages: [
        { label: 'KS3', detail: 'Ages 11-14' },
        { label: 'IGCSE / GCSE', detail: 'Ages 14-16' },
        { label: 'A-Level', detail: 'Ages 16-18' },
      ],
    },
    {
      title: 'American Curriculum',
      subtitle: 'College Board | AP | SAT',
      icon: <School className="h-6 w-6 text-white" />,
      stages: [
        { label: 'Middle School', detail: 'Grades 6-8' },
        { label: 'High School', detail: 'Grades 9-12' },
        { label: 'AP Courses', detail: 'Advanced Placement' },
      ],
    },
    {
      title: 'IB Curriculum',
      subtitle: 'IB MYP | IB Diploma Programme',
      icon: <Layers className="h-6 w-6 text-white" />,
      stages: [
        { label: 'MYP', detail: 'Ages 11-16' },
        { label: 'Diploma Programme', detail: 'Ages 16-19' },
        { label: 'SL / HL', detail: 'Standard or Higher Level' },
      ],
    },
  ];

  const teachingApproach: TeachingApproachItem[] = [
    {
      key: 'british',
      title: 'British Curriculum',
      subtitle: 'IGCSE · GCSE · A-Level',
      icon: <PenLine className="h-5 w-5" />,
      bullets: [
        'Past papers from session one. Students learn the marking criteria each British exam board uses, from Cambridge IGCSE 0580 to Edexcel A-Level Mathematics.',
        'Timed written practice built in early. Accuracy of working becomes habit well before the exam hall.',
        'Foundations rebuilt where they weakened, topic by topic, before any advanced work begins.',
      ],
    },
    {
      key: 'american',
      title: 'American Curriculum',
      subtitle: 'School Support · AP · SAT',
      icon: <BarChart3 className="h-5 w-5" />,
      bullets: [
        "Lessons paced to your child's school timeline, so coursework, internal grading, and assignment deadlines drive every session.",
        'Problem-based learning that mirrors US classrooms. Students apply knowledge the way American teachers grade.',
        'AP and SAT preparation from day one, coursework, quiz prep, and timed exam practice live inside one teaching plan.',
      ],
    },
    {
      key: 'ib',
      title: 'IB Curriculum',
      subtitle: 'MYP · DP · SL · HL',
      icon: <BrainCircuit className="h-5 w-5" />,
      bullets: [
        'Internal Assessment support all year. Students plan, draft, and refine IAs long before submission deadlines tighten.',
        'Paper 1, 2, and 3 technique inside every lesson so analytical writing becomes each student’s strongest answer.',
        'Lessons connect ideas the way the IB Diploma expects, building the deeper thinking examiners reward.',
      ],
    },
  ];

  const faqItems = [
    {
      question: 'Why do students struggle in British curriculum exams despite hours of revision?',
      answer: 'British exams test application, not recall. Children who memorise hit a wall when questions are phrased unfamiliarly. Curriculum specific tutoring builds the written technique and exam board logic revision alone cannot.',
    },
    {
      question: 'How does Ustaad help students understand instead of memorise?',
      answer: 'Lessons rebuild reasoning before exam practice begins. Students learn to apply concepts across different question styles, which is what every British, American, and IB paper rewards.',
    },
    {
      question: 'What makes the American curriculum demand analytical thinking?',
      answer: 'US classrooms grade discussion, written assignments, project work, and applied reasoning throughout the year. Strong AP and SAT outcomes follow children who think clearly, not the ones who memorise.',
    },
    {
      question: 'Why do one-to-one online lessons work better for curriculum specific learning?',
      answer: "Each child learns at their own pace, with lessons tied directly to their school's syllabus, assessments, and exam board. Group classrooms cannot deliver that level of curriculum match.",
    },
    {
      question: 'Why is conceptual depth central to the IB curriculum?',
      answer: 'IB papers reward analysis, evaluation, and connection across subjects, not direct recall. Students who genuinely understand concepts outperform memorisers on Paper 1, 2, and 3 every time.',
    },
    {
      question: 'How does Ustaad help students manage IB workload pressure?',
      answer: 'Tutors help IB students plan revision, break down hard topics, and pace coursework calmly. The panic before deadlines lifts. Internal Assessment submissions get stronger. Students walk into exams feeling more in control.',
    },
  ];

  const [activeApproach, setActiveApproach] = useState(teachingApproach[0].key);
  const activeApproachContent = teachingApproach.find((item) => item.key === activeApproach) ?? teachingApproach[0];
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout>
      <SEOHead title="Curriculum Tutoring UAE | British, IB & American | Ustaad" description="Curriculum-specific online tutoring across the UAE for British, American & IB students. 1-to-1 lessons matched to Cambridge, Edexcel & IB assessments." canonical="/curriculum" ogImage="/UpdatedImages/igcse-ib-a-level-all-curriculum-tutoring-uae.webp" schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Curriculum", url: "/curriculum" }]), faqSchema(faqItems.map(({ question, answer }) => ({ q: question, a: answer })))]} />
      {/* ── HERO ── */}
      <section className="min-h-[calc(100dvh-84px)] lg:min-h-[calc(100dvh-92px)] flex items-center relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 xl:gap-16 items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-xs sm:text-sm font-bold rounded-full mb-3.5 sm:mb-4 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Tailored Academic Support
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-3 sm:mb-4 leading-[1.15] tracking-tight">
                <GradientHeadingText text="Every Curriculum." />
                <span className="block">One Standard.</span>
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3.5 sm:mb-5" />
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-5 sm:mb-7 leading-relaxed max-w-xl">Every curriculum has its own style of teaching, so we guide students in the way they already learn at school.</p>
              <HeroCTABlock className="mb-4">
                Book Your Free Trial
              </HeroCTABlock>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[420px] xl:h-[460px] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-4 sm:border-8 border-white group z-10"
            >
              <img
                src="/UpdatedImages/igcse-ib-a-level-all-curriculum-tutoring-uae.webp"
                alt="Private tutoring for British American and IB curriculum students in the UAE covering IGCSE A-Level IB Diploma and AP programmes"
                width={1200}
                height={800}
                fetchPriority="high"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a9b]/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      <StatsBar />

      {/* ── CURRICULUM CARDS (3D Landmark Pedestal Showcase with Interactive Expander) ── */}
      <section id="curricula" className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 flex flex-col justify-center relative overflow-hidden">
        {/* Ambient 3D Stage Atmospheric Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-tr from-[#0f4a9b]/[0.04] via-[#C7A24A]/[0.03] to-[#1d4ed8]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-2 sm:mb-3">
              <GradientHeadingText text="Find Your Child's Curriculum" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              British, American, and IB students all study differently. Choose your child's curriculum below to see how our support fits their learning style.
            </p>
          </motion.div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-full mx-auto mb-2 px-4 sm:px-0 -mx-4 sm:mx-0 overflow-x-auto md:overflow-visible pb-4 md:pb-0 pt-2 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-stretch [perspective:1200px]">

            {/* 1. 🇬🇧 British Curriculum 3D Landmark Pedestal */}
            <motion.div
              initial={{ opacity: 0, y: 35, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-[84vw] max-w-[330px] md:w-auto md:max-w-none shrink-0 snap-center relative bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 lg:p-5 xl:p-6 border border-white/80 shadow-[0_10px_35px_rgba(15,74,155,0.07)] hover:shadow-[0_25px_60px_rgba(15,74,155,0.18)] hover:-translate-y-2 hover:border-[#0f4a9b]/35 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Top ambient glass reflection */}
              <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

              {/* 3D Landmark Pedestal Showcase Stage */}
              <div className="relative w-full h-32 mb-3 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#0f4a9b]/[0.04] to-[#0f4a9b]/[0.08] border border-[#0f4a9b]/10">
                {/* 3D Pedestal Glowing Base Ring */}
                <div className="absolute bottom-2.5 w-36 h-8 rounded-[100%] bg-gradient-to-r from-[#0f4a9b]/20 via-[#38bdf8]/40 to-[#0f4a9b]/20 blur-sm group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-3 w-32 h-6 rounded-[100%] border border-[#0f4a9b]/30 shadow-[0_0_15px_rgba(15,74,155,0.3)] bg-white/40 backdrop-blur-sm" />

                {/* 3D Floating Big Ben & Westminster Palace Landmark */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="relative z-10 flex flex-col items-center group-hover:scale-110 transition-transform duration-300"
                >
                  <BritishLandmarkWatermark className="h-20 w-20 text-[#0f4a9b] drop-shadow-[0_8px_16px_rgba(15,74,155,0.35)]" />
                </motion.div>

                {/* Floating Curriculum Icon Badge */}
                <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-lg bg-[#0f4a9b] text-white flex items-center justify-center shadow-md">
                  <LibraryBig className="h-4 w-4" />
                </div>
              </div>

              {/* Content */}
              <a href="/british-curriculum" className="text-lg sm:text-xl font-extrabold text-[#0a1f3d] mb-1.5 leading-tight z-10 hover:text-[#0f4a9b] transition-colors">British Curriculum</a>
              <div className="inline-flex items-center px-2.5 py-0.5 bg-[#0f4a9b]/5 text-[#0f4a9b] text-[11px] font-bold rounded-md border border-[#0f4a9b]/15 w-max mb-2.5 z-10 shadow-sm">IGCSE · GCSE · A-Level</div>
              <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-3 z-10">Lessons matched to how British exam boards mark and reward answers.</p>
              
              {/* Expanding Gold Accent Line */}
              <div className="w-8 group-hover:w-16 h-[2px] bg-gradient-to-r from-[#C7A24A] to-[#E5C368] mb-2.5 z-10 transition-all duration-300 rounded-full" />
              
              <p className="text-gray-500 text-[11px] sm:text-xs mb-5 z-10 font-medium">Cambridge · Edexcel · AQA</p>
              
              <div className="flex flex-col gap-2 mt-auto z-10">
                <a href="/british-curriculum" className="w-full py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#0a1f3d] bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-xl hover:border-[#0f4a9b] hover:text-[#0f4a9b] transition-all text-center shadow-sm">View Curriculum</a>
                <GoldButton className="w-full py-2.5 sm:py-3 text-xs sm:text-sm shadow-[0_4px_15px_rgba(199,162,74,0.3)] hover:shadow-[0_8px_25px_rgba(199,162,74,0.5)]" href="/contact?intent=trial&source=curriculum-british">Book Your Free Trial</GoldButton>
              </div>
            </motion.div>

            {/* 2. 🇺🇸 American Curriculum 3D Landmark Pedestal */}
            <motion.div
              initial={{ opacity: 0, y: 35, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-[84vw] max-w-[330px] md:w-auto md:max-w-none shrink-0 snap-center relative bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 lg:p-5 xl:p-6 border border-white/80 shadow-[0_10px_35px_rgba(29,78,216,0.07)] hover:shadow-[0_25px_60px_rgba(29,78,216,0.18)] hover:-translate-y-2 hover:border-[#1d4ed8]/35 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Top ambient glass reflection */}
              <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-gradient-to-r from-transparent via-[#1d4ed8]/40 to-transparent" />

              {/* 3D Landmark Pedestal Showcase Stage */}
              <div className="relative w-full h-32 mb-3 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#1d4ed8]/[0.04] to-[#1d4ed8]/[0.08] border border-[#1d4ed8]/10">
                {/* 3D Pedestal Glowing Base Ring */}
                <div className="absolute bottom-2.5 w-36 h-8 rounded-[100%] bg-gradient-to-r from-[#1d4ed8]/20 via-[#60a5fa]/40 to-[#1d4ed8]/20 blur-sm group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-3 w-32 h-6 rounded-[100%] border border-[#1d4ed8]/30 shadow-[0_0_15px_rgba(29,78,216,0.3)] bg-white/40 backdrop-blur-sm" />

                {/* 3D Floating Statue of Liberty & Capitol Landmark */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.4, ease: 'easeInOut', delay: 0.4 }}
                  className="relative z-10 flex flex-col items-center group-hover:scale-110 transition-transform duration-300"
                >
                  <AmericanLandmarkWatermark className="h-20 w-20 text-[#1d4ed8] drop-shadow-[0_8px_16px_rgba(29,78,216,0.35)]" />
                </motion.div>

                {/* Floating Curriculum Icon Badge */}
                <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-lg bg-[#1d4ed8] text-white flex items-center justify-center shadow-md">
                  <Flag className="h-4 w-4" />
                </div>
              </div>

              {/* Content */}
              <a href="/american-curriculum" className="text-lg sm:text-xl font-extrabold text-[#0a1f3d] mb-1.5 leading-tight z-10 hover:text-[#0f4a9b] transition-colors">American Curriculum</a>
              <div className="inline-flex items-center px-2.5 py-0.5 bg-[#1d4ed8]/5 text-[#1d4ed8] text-[11px] font-bold rounded-md border border-[#1d4ed8]/15 w-max mb-2.5 z-10 shadow-sm">Grade 6-12 · AP · SAT</div>
              <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-3 z-10">Tutoring that mirrors US coursework alongside AP and SAT prep work.</p>
              
              {/* Expanding Gold Accent Line */}
              <div className="w-8 group-hover:w-16 h-[2px] bg-gradient-to-r from-[#C7A24A] to-[#E5C368] mb-2.5 z-10 transition-all duration-300 rounded-full" />
              
              <p className="text-gray-500 text-[11px] sm:text-xs mb-5 z-10 font-medium">College Board · AP · SAT</p>
              
              <div className="flex flex-col gap-2 mt-auto z-10">
                <a href="/american-curriculum" className="w-full py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#0a1f3d] bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-xl hover:border-[#0f4a9b] hover:text-[#0f4a9b] transition-all text-center shadow-sm">View Curriculum</a>
                <GoldButton className="w-full py-2.5 sm:py-3 text-xs sm:text-sm shadow-[0_4px_15px_rgba(199,162,74,0.3)] hover:shadow-[0_8px_25px_rgba(199,162,74,0.5)]" href="/contact?intent=trial&source=curriculum-american">Book Your Free Trial</GoldButton>
              </div>
            </motion.div>

            {/* 3. 🌐 IB Curriculum 3D Landmark Pedestal */}
            <motion.div
              initial={{ opacity: 0, y: 35, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-[84vw] max-w-[330px] md:w-auto md:max-w-none shrink-0 snap-center relative bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 lg:p-5 xl:p-6 border border-white/80 shadow-[0_10px_35px_rgba(15,74,155,0.07)] hover:shadow-[0_25px_60px_rgba(15,74,155,0.18)] hover:-translate-y-2 hover:border-[#0f4a9b]/35 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Top ambient glass reflection */}
              <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

              {/* 3D Landmark Pedestal Showcase Stage */}
              <div className="relative w-full h-32 mb-3 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#0f4a9b]/[0.04] to-[#0f4a9b]/[0.08] border border-[#0f4a9b]/10">
                {/* 3D Pedestal Glowing Base Ring */}
                <div className="absolute bottom-2.5 w-36 h-8 rounded-[100%] bg-gradient-to-r from-[#0f4a9b]/20 via-[#38bdf8]/40 to-[#0f4a9b]/20 blur-sm group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-3 w-32 h-6 rounded-[100%] border border-[#0f4a9b]/30 shadow-[0_0_15px_rgba(15,74,155,0.3)] bg-white/40 backdrop-blur-sm" />

                {/* 3D Floating IB World Orbit Landmark */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 0.8 }}
                  className="relative z-10 flex flex-col items-center group-hover:scale-110 transition-transform duration-300"
                >
                  <IBWorldWatermark className="h-20 w-20 text-[#0f4a9b] drop-shadow-[0_8px_16px_rgba(15,74,155,0.35)]" />
                </motion.div>

                {/* Floating Curriculum Icon Badge */}
                <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-lg bg-[#0f4a9b] text-white flex items-center justify-center shadow-md">
                  <Orbit className="h-4 w-4" />
                </div>
              </div>

              {/* Content */}
              <a href="/ib-curriculum" className="text-lg sm:text-xl font-extrabold text-[#0a1f3d] mb-1.5 leading-tight z-10 hover:text-[#0f4a9b] transition-colors">IB Curriculum</a>
              <div className="inline-flex items-center px-2.5 py-0.5 bg-[#0f4a9b]/5 text-[#0f4a9b] text-[11px] font-bold rounded-md border border-[#0f4a9b]/15 w-max mb-2.5 z-10 shadow-sm">MYP · DP · SL & HL</div>
              <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-3 z-10">Tuition that handles analytical depth and the real academic pressure of IB.</p>
              
              {/* Expanding Gold Accent Line */}
              <div className="w-8 group-hover:w-16 h-[2px] bg-gradient-to-r from-[#C7A24A] to-[#E5C368] mb-2.5 z-10 transition-all duration-300 rounded-full" />
              
              <p className="text-gray-500 text-[11px] sm:text-xs mb-5 z-10 font-medium">IB MYP · IB Diploma Programme</p>
              
              <div className="flex flex-col gap-2 mt-auto z-10">
                <a href="/ib-curriculum" className="w-full py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#0a1f3d] bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-xl hover:border-[#0f4a9b] hover:text-[#0f4a9b] transition-all text-center shadow-sm">View Curriculum</a>
                <GoldButton className="w-full py-2.5 sm:py-3 text-xs sm:text-sm shadow-[0_4px_15px_rgba(199,162,74,0.3)] hover:shadow-[0_8px_25px_rgba(199,162,74,0.5)]" href="/contact?intent=trial&source=curriculum-ib">Book Your Free Trial</GoldButton>
              </div>
            </motion.div>

            {/* 4. 💬 Help / Contact Hub 3D Pedestal */}
            <motion.div
              initial={{ opacity: 0, y: 35, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-[84vw] max-w-[330px] md:w-auto md:max-w-none shrink-0 snap-center relative bg-gradient-to-br from-[#0a2550]/95 via-[#0f4a9b]/95 to-[#061838]/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 lg:p-5 xl:p-6 border border-white/20 shadow-[0_12px_45px_rgba(15,74,155,0.25)] hover:shadow-[0_25px_65px_rgba(15,74,155,0.35)] hover:-translate-y-2 hover:border-[#C7A24A]/50 transition-all duration-300 flex flex-col justify-center items-center text-center overflow-hidden group"
            >
              {/* 3D Golden Floating Aura */}
              <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-gradient-to-br from-[#C7A24A]/25 via-[#F5D77F]/15 to-transparent rounded-full blur-[60px] pointer-events-none" />

              {/* 3D Pedestal Showcase Stage for Help Beacon */}
              <div className="relative w-full h-32 mb-3 flex items-center justify-center overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                {/* 3D Golden Pedestal Glowing Base Ring */}
                <div className="absolute bottom-2.5 w-36 h-8 rounded-[100%] bg-gradient-to-r from-[#C7A24A]/30 via-[#F5D77F]/50 to-[#C7A24A]/30 blur-sm group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-3 w-32 h-6 rounded-[100%] border border-[#C7A24A]/40 shadow-[0_0_20px_rgba(199,162,74,0.4)] bg-white/10 backdrop-blur-sm" />

                {/* 3D Floating Glowing Help Beacon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                  className="relative z-10 flex flex-col items-center group-hover:scale-110 transition-transform duration-300"
                >
                  <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                    className="absolute -inset-2.5 rounded-2xl bg-[#C7A24A]/30 blur-md pointer-events-none"
                  />
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    <MessageCircleQuestion className="h-8 w-8 text-[#C7A24A] drop-shadow-[0_4px_10px_rgba(199,162,74,0.5)]" strokeWidth={2.2} />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1.5 z-10 leading-tight">How Can We Help You?</h3>
              <p className="text-blue-100/80 text-xs sm:text-[13px] leading-relaxed mb-5 z-10 max-w-[210px]">Tell us your needs, we'll guide you from here.</p>
              
              <div className="w-full mt-auto z-10">
                <GoldButton className="w-full py-3 sm:py-3.5 text-xs sm:text-sm shadow-[0_0_25px_rgba(199,162,74,0.45)] hover:shadow-[0_0_35px_rgba(199,162,74,0.7)] group-hover:scale-[1.02] transition-all" href="/contact#form">
                  Get Started
                </GoldButton>
              </div>
            </motion.div>

          </div>

          {/* Swipe indicator on mobile */}
          <SwipeIndicator text="Swipe across all curricula" className="mt-4" />
        </div>
      </section>

      {/* ── ACADEMIC STAGES ── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#fbfdff] to-white flex flex-col justify-center relative overflow-hidden">
        {/* Ambient subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-[#0f4a9b]/[0.03] via-[#C7A24A]/[0.03] to-[#0f4a9b]/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-xs sm:text-sm font-bold rounded-full mb-3 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
              <GraduationCap className="h-4 w-4" /> Who We Teach
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-2 sm:mb-3">
              <GradientHeadingText text="Academic Stages Across Each Curriculum" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Clear academic progression from foundation years to advanced examination stages.
            </p>
          </motion.div>

          <div className="flex md:grid md:grid-cols-3 gap-5 lg:gap-7 max-w-6xl mx-auto w-full overflow-x-auto md:overflow-visible pb-4 md:pb-0 pt-1 -mx-4 px-4 md:mx-auto md:px-0 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-stretch">
            {academicStages.map((curriculum, cardIdx) => {
              // Custom curriculum aesthetic accents
              const isBritish = curriculum.title.includes('British');
              const isAmerican = curriculum.title.includes('American');
              
              const theme = isBritish
                ? {
                    topGlow: 'via-[#0f4a9b]/40',
                    iconBg: 'from-[#0f4a9b] to-[#0a3a79]',
                    iconShadow: 'shadow-[0_8px_20px_rgba(15,74,155,0.3)]',
                    nodeGradient: 'from-[#0f4a9b] to-[#1e40af]',
                    nodeGlow: 'shadow-[0_0_10px_rgba(15,74,155,0.6)]',
                    nodeRing: 'ring-[#0f4a9b]/30',
                    lightTrail: 'from-[#0f4a9b]/10 via-[#0f4a9b] to-[#0f4a9b]/10',
                    activeBorder: 'border-[#0f4a9b]/30 shadow-[0_6px_20px_rgba(15,74,155,0.08)]',
                    borderHover: 'hover:border-[#0f4a9b]/30 hover:shadow-[0_20px_50px_rgba(15,74,155,0.12)]',
                    watermark: <BritishLandmarkWatermark className="absolute -bottom-8 -right-8 w-44 h-44 text-[#0f4a9b]/[0.03] group-hover:text-[#0f4a9b]/[0.08] group-hover:scale-105 transition-all duration-500 pointer-events-none" />,
                  }
                : isAmerican
                ? {
                    topGlow: 'via-[#1d4ed8]/40',
                    iconBg: 'from-[#1e40af] to-[#0f4a9b]',
                    iconShadow: 'shadow-[0_8px_20px_rgba(29,78,216,0.3)]',
                    nodeGradient: 'from-[#1d4ed8] to-[#0284c7]',
                    nodeGlow: 'shadow-[0_0_10px_rgba(29,78,216,0.55)]',
                    nodeRing: 'ring-[#2563eb]/30',
                    lightTrail: 'from-[#1d4ed8]/10 via-[#2563eb] to-[#1d4ed8]/10',
                    activeBorder: 'border-[#1d4ed8]/30 shadow-[0_6px_20px_rgba(29,78,216,0.08)]',
                    borderHover: 'hover:border-[#1d4ed8]/30 hover:shadow-[0_20px_50px_rgba(29,78,216,0.12)]',
                    watermark: <AmericanLandmarkWatermark className="absolute -bottom-8 -right-8 w-44 h-44 text-[#1e40af]/[0.03] group-hover:text-[#1e40af]/[0.08] group-hover:scale-105 transition-all duration-500 pointer-events-none" />,
                  }
                : {
                    topGlow: 'via-[#0d9488]/40',
                    iconBg: 'from-[#4338ca] to-[#0d9488]',
                    iconShadow: 'shadow-[0_8px_20px_rgba(13,148,136,0.25)]',
                    nodeGradient: 'from-[#4338ca] to-[#0d9488]',
                    nodeGlow: 'shadow-[0_0_10px_rgba(13,148,136,0.5)]',
                    nodeRing: 'ring-[#0d9488]/30',
                    lightTrail: 'from-[#0d9488]/10 via-[#0d9488] to-[#0d9488]/10',
                    activeBorder: 'border-[#0d9488]/30 shadow-[0_6px_20px_rgba(13,148,136,0.08)]',
                    borderHover: 'hover:border-[#0d9488]/30 hover:shadow-[0_20px_50px_rgba(13,148,136,0.1)]',
                    watermark: <IBWorldWatermark className="absolute -bottom-8 -right-8 w-44 h-44 text-[#4338ca]/[0.03] group-hover:text-[#0d9488]/[0.07] group-hover:scale-105 transition-all duration-500 pointer-events-none" />,
                  };

              return (
                <motion.div
                  key={curriculum.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: cardIdx * 0.15 }}
                  className={`w-[84vw] max-w-[340px] md:w-auto md:max-w-none shrink-0 snap-center relative bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-[#E8EDF5] shadow-[0_10px_35px_rgba(15,74,155,0.06)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group flex flex-col ${theme.borderHover}`}
                >
                  {/* Subtle top glow accent line */}
                  <div className={`absolute top-0 left-6 right-6 h-[2.5px] bg-gradient-to-r from-transparent ${theme.topGlow} to-transparent`} />

                  {/* Background Watermark */}
                  {theme.watermark}

                  {/* Header */}
                  <div className="flex items-center gap-3.5 mb-5 sm:mb-6 relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${theme.iconBg} text-white flex items-center justify-center ${theme.iconShadow} flex-shrink-0 group-hover:scale-110 group-hover:rotate-1 transition-all duration-300`}>
                      {curriculum.icon}
                    </div>
                    <div>
                      <p className="text-base sm:text-lg font-extrabold text-[#0a1f3d] leading-tight tracking-tight">{curriculum.title}</p>
                      <p className="text-[10px] sm:text-[11px] font-bold text-[#0f4a9b]/60 uppercase tracking-[0.15em] mt-0.5">{curriculum.subtitle.replace(/\s*\|\s*/g, ' • ')}</p>
                    </div>
                  </div>

                  {/* Living Academic Journey Vertical Roadmap with Sequential Turn-Wise Reveal */}
                  <div className="space-y-0 mt-auto relative z-10">
                    {curriculum.stages.map((stage, idx) => {
                      const isLast = idx === curriculum.stages.length - 1;
                      const baseDelay = cardIdx * 0.15 + idx * 0.35 + 0.25;

                      return (
                        <div key={`${curriculum.title}-${stage.label}`} className="flex gap-3 sm:gap-3.5 group/stage">
                          {/* Node + Sequential Connecting Light Conduit */}
                          <div className="flex flex-col items-center flex-shrink-0 pt-[14px]">
                            {/* Milestone Dot with Spark Entrance and Pulsing Glow */}
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              viewport={{ once: false, amount: 0.15 }}
                              transition={{ duration: 0.4, delay: baseDelay, type: 'spring', stiffness: 260, damping: 20 }}
                              className="relative flex items-center justify-center"
                            >
                              {/* Pulsing Aura */}
                              <motion.span
                                animate={{
                                  scale: [1, 1.45, 1],
                                  opacity: [0.15, 0.45, 0.15],
                                }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 3,
                                  delay: idx * 0.9,
                                  ease: 'easeInOut',
                                }}
                                className={`absolute -inset-1.5 rounded-full bg-gradient-to-br ${theme.nodeGradient} blur-[2px]`}
                              />
                              <div className={`relative w-3.5 h-3.5 rounded-full bg-gradient-to-br ${theme.nodeGradient} ${theme.nodeGlow} flex items-center justify-center transition-all duration-300 group-hover/stage:scale-125 group-hover/stage:ring-2 ${theme.nodeRing}`}>
                                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                              </div>
                            </motion.div>

                            {/* Connecting vertical line: animates down sequentially, then continuously scrolls light */}
                            {!isLast && (
                              <div className="relative w-[2px] flex-1 my-1.5 bg-slate-200/70 overflow-hidden rounded-full min-h-[36px]">
                                {/* Initial draw line down */}
                                <motion.div
                                  initial={{ height: '0%' }}
                                  whileInView={{ height: '100%' }}
                                  viewport={{ once: false, amount: 0.15 }}
                                  transition={{ duration: 0.35, delay: baseDelay + 0.15, ease: 'easeOut' }}
                                  className={`w-full bg-gradient-to-b ${theme.nodeGradient} opacity-60`}
                                />
                                {/* Continuous traveling light photon */}
                                <motion.div
                                  className={`absolute inset-x-0 w-full h-12 bg-gradient-to-b ${theme.lightTrail}`}
                                  animate={{
                                    y: ['-120%', '280%'],
                                  }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 2.6,
                                    ease: 'easeInOut',
                                    delay: idx * 0.85,
                                  }}
                                />
                              </div>
                            )}
                          </div>

                          {/* Sub-Card: Slides in and appears turn-wise after the light arrives */}
                          <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-3'}`}>
                            <motion.div
                              initial={{ opacity: 0, x: 22, filter: 'blur(4px)' }}
                              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                              viewport={{ once: false, amount: 0.15 }}
                              transition={{
                                duration: 0.5,
                                delay: baseDelay + 0.1,
                                ease: [0.25, 1, 0.5, 1],
                              }}
                              className="bg-[#f8fafc] border border-slate-200/70 rounded-xl px-4 py-3 transition-all duration-300 group-hover/stage:bg-white group-hover/stage:border-[#0f4a9b]/25 group-hover/stage:shadow-[0_8px_20px_rgba(15,74,155,0.08)] group-hover/stage:translate-x-1"
                            >
                              <p className="text-xs sm:text-[13px] font-extrabold text-[#0a1f3d] leading-snug group-hover/stage:text-[#0f4a9b] transition-colors duration-200">
                                {stage.label}
                              </p>
                              <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                                {stage.detail}
                              </p>
                            </motion.div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Swipe indicator on mobile */}
          <SwipeIndicator text="Swipe across all 3 pathways" className="mt-4" />
        </div>
      </section>

      {/* ── OUR TEACHING APPROACH ── */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#f8fafc] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-2 sm:mb-3 text-center">
              <GradientHeadingText text="Our Teaching Approach Across Each Curriculum" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed text-center">Lessons follow how each curriculum assesses students, not a copy-paste method applied across every board.</p>
          </div>

          {/* Mobile Pill Tabs (Clean Horizontal Segmented Switcher) */}
          <div className="flex lg:hidden bg-slate-200/80 p-1.5 rounded-2xl gap-1.5 mb-4 overflow-x-auto no-scrollbar">
            {teachingApproach.map((item) => {
              const isActive = activeApproach === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setActiveApproach(item.key)}
                  className={`flex-1 min-w-[95px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 select-none ${
                    isActive
                      ? 'bg-[#0f4a9b] text-white shadow-md shadow-[#0f4a9b]/25'
                      : 'text-[#0a1f3d] hover:bg-white/60'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 flex items-center justify-center ${isActive ? 'text-white' : 'text-[#0f4a9b]'}`}>
                    {item.icon}
                  </span>
                  <span className="truncate">{item.title.replace(' Curriculum', '')}</span>
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-8 items-stretch">
            {/* Desktop Vertical Sidebar Selector */}
            <div className="hidden lg:flex bg-white rounded-[32px] p-6 shadow-[0_20px_60px_rgba(15,74,155,0.08)] flex-col gap-4">
              {teachingApproach.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveApproach(item.key)}
                  className={`w-full text-left rounded-[24px] px-5 py-4 sm:py-5 border transition-all flex items-center gap-4 ${activeApproach === item.key ? 'border-[#0f4a9b] bg-[#eff5ff] shadow-[0_15px_35px_rgba(15,74,155,0.15)]' : 'border-[#E5E7EB] bg-white hover:border-[#0f4a9b]/40'}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${activeApproach === item.key ? 'bg-[#0f4a9b] text-white' : 'bg-[#f2f4f7] text-[#0f4a9b]' }`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-extrabold text-[#0a1f3d] whitespace-nowrap">{item.title}</p>
                    <p className="text-[11px] font-semibold text-gray-500 tracking-wide whitespace-nowrap">{item.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Content Display Card */}
            <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0f2f63] via-[#0a3a79] to-[#06214b] text-white p-5 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(6,33,75,0.3)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent)]" />
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white/70 tracking-wide">{activeApproachContent.subtitle}</p>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mt-1 sm:mt-2">{activeApproachContent.title}</h3>
                </div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 flex-shrink-0">
                  {activeApproachContent.icon}
                </div>
              </div>
              <div className="relative z-10 mt-5 sm:mt-7">
                <ul className="space-y-3 sm:space-y-4">
                  {activeApproachContent.bullets.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                      <span className="mt-0.5 sm:mt-1 flex-shrink-0">
                        <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#facc15]" />
                      </span>
                      <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-white/90">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="px-4 sm:px-6 lg:px-8 my-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] text-white rounded-[32px] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_25px_60px_rgba(10,31,61,0.35)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(199,162,74,0.12),transparent_60%)] pointer-events-none" />
          <div className="text-center md:text-left relative z-10">
            <p className="text-lg font-extrabold mb-1">Want to know which subjects your child can study with Ustaad?</p>
            <p className="text-sm text-white/75">Explore every subject we teach across British, American, and IB curricula.</p>
          </div>
          <GoldButton href="/subjects" className="px-7 py-3.5 text-sm shadow-[0_0_20px_rgba(199,162,74,0.35)] flex-shrink-0 relative z-10">
            Explore our full subject list
          </GoldButton>
        </div>
      </div>

      {/* ── CURRICULUM SUPPORT ACROSS THE UAE (Compact One-Screen Desktop Section) ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-[#f8fafd] via-white to-[#f4f7fb] text-[#0a1f3d] relative overflow-hidden border-t border-slate-100 [perspective:1200px]">
        {/* Subtle Ambient Depth Lighting */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#0f4a9b]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#C7A24A]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[11px] font-black uppercase tracking-wider mb-2 shadow-xs">
              <MapPin className="h-3.5 w-3.5 text-[#0f4a9b]" /> Nationwide Coverage Network
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0a1f3d] mb-1.5 tracking-tight">
              Curriculum Support <span className="text-[#0f4a9b]">Across the UAE</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Tailored 1-to-1 British, American, and IB curriculum tutoring for leading schools and families across every emirate.
            </p>
          </div>

          {/* Compact 3D Animated White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto items-stretch mb-5">
            
            {/* 3D Card 1: Emirates */}
            <div className="relative [perspective:1000px] group">
              <div 
                className="relative bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-300 group-hover:border-[#C7A24A]/60 group-hover:shadow-[0_18px_40px_rgba(199,162,74,0.14)] group-hover:-translate-y-1.5 h-full shadow-[0_10px_28px_rgba(15,74,155,0.05)] overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Subtle Hover Gradient Flare */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(199,162,74,0.1)_0%,transparent_70%)]" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C7A24A] to-[#987820] text-white flex items-center justify-center shadow-md shadow-[#C7A24A]/25 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-[10.5px] font-black text-[#8a6b18] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#C7A24A]/12 border border-[#C7A24A]/25">
                      Emirates
                    </span>
                  </div>

                  <h3 className="text-base sm:text-[17px] font-black text-[#0a1f3d] mb-1 tracking-tight">
                    Major Emirates Covered
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    Specialist online and in-person private tutors matched to local UAE school sessions.
                  </p>
                </div>

                {/* Scrolling Horizontal Tracks (Emirates) */}
                <div 
                  className="pt-3 border-t border-slate-100 space-y-1.5 overflow-hidden"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                  }}
                >
                  {/* Row 1: Scrolling Left */}
                  <div className="overflow-hidden py-0.5">
                    <motion.div
                      className="flex gap-1.5 w-max"
                      animate={{ x: ['0%', '-50%'] }}
                      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    >
                      {[
                        'Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain',
                        'Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain',
                      ].map((item, idx) => (
                        <a
                          key={idx}
                          href="/tutors"
                          className="px-2.5 py-1 rounded-lg bg-[#fdf9ee] hover:bg-[#C7A24A] hover:text-white text-[#8a6b18] text-[11px] sm:text-xs font-bold transition-all border border-[#C7A24A]/30 whitespace-nowrap shrink-0 shadow-2xs"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  </div>

                  {/* Row 2: Scrolling Right */}
                  <div className="overflow-hidden py-0.5">
                    <motion.div
                      className="flex gap-1.5 w-max"
                      animate={{ x: ['-50%', '0%'] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      {[
                        'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Wider UAE',
                        'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Wider UAE',
                      ].map((item, idx) => (
                        <a
                          key={idx}
                          href="/tutors"
                          className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-[#0f4a9b] hover:text-white text-slate-700 text-[11px] sm:text-xs font-bold transition-all border border-slate-200 whitespace-nowrap shrink-0 shadow-2xs"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Card 2: Top Schools */}
            <div className="relative [perspective:1000px] group">
              <div 
                className="relative bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-300 group-hover:border-[#0f4a9b]/50 group-hover:shadow-[0_18px_40px_rgba(15,74,155,0.14)] group-hover:-translate-y-1.5 h-full shadow-[0_10px_28px_rgba(15,74,155,0.05)] overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Subtle Hover Gradient Flare */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(15,74,155,0.08)_0%,transparent_70%)]" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center shadow-md shadow-[#0f4a9b]/25 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-[10.5px] font-black text-[#0f4a9b] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0f4a9b]/10 border border-[#0f4a9b]/20">
                      Top Schools
                    </span>
                  </div>

                  <h3 className="text-base sm:text-[17px] font-black text-[#0a1f3d] mb-1 tracking-tight">
                    Premier Schools Supported
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    Mentorship for students across premier British, American, and IB curriculum schools.
                  </p>
                </div>

                {/* Scrolling Horizontal Tracks (Schools) */}
                <div 
                  className="pt-3 border-t border-slate-100 space-y-1.5 overflow-hidden"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                  }}
                >
                  {/* Row 1: Scrolling Left */}
                  <div className="overflow-hidden py-0.5">
                    <motion.div
                      className="flex gap-1.5 w-max"
                      animate={{ x: ['0%', '-50%'] }}
                      transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                    >
                      {[
                        'Cranleigh', 'Brighton College', 'Repton', 'GEMS Wellington', 'Raha Int.', 'GEMS American',
                        'Cranleigh', 'Brighton College', 'Repton', 'GEMS Wellington', 'Raha Int.', 'GEMS American',
                      ].map((school, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-[#f0f4fa] text-[#0f4a9b] text-[11px] sm:text-xs font-semibold border border-[#0f4a9b]/15 whitespace-nowrap shrink-0 shadow-2xs hover:bg-[#0f4a9b] hover:text-white transition-colors"
                        >
                          {school}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Row 2: Scrolling Right */}
                  <div className="overflow-hidden py-0.5">
                    <motion.div
                      className="flex gap-1.5 w-max"
                      animate={{ x: ['-50%', '0%'] }}
                      transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                    >
                      {[
                        'Dubai Int. Academy', 'Yasmina British', 'BSAK', 'ACS Abu Dhabi', 'ATHS', 'STS',
                        'Dubai Int. Academy', 'Yasmina British', 'BSAK', 'ACS Abu Dhabi', 'ATHS', 'STS',
                      ].map((school, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-[#f0f4fa] text-[#0f4a9b] text-[11px] sm:text-xs font-semibold border border-[#0f4a9b]/15 whitespace-nowrap shrink-0 shadow-2xs hover:bg-[#0f4a9b] hover:text-white transition-colors"
                        >
                          {school}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Card 3: Communities */}
            <div className="relative [perspective:1000px] group">
              <div 
                className="relative bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-300 group-hover:border-emerald-500/50 group-hover:shadow-[0_18px_40px_rgba(16,185,129,0.14)] group-hover:-translate-y-1.5 h-full shadow-[0_10px_28px_rgba(15,74,155,0.05)] overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Subtle Hover Gradient Flare */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.08)_0%,transparent_70%)]" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md shadow-emerald-600/25 group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-[10.5px] font-black text-emerald-800 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                      Communities
                    </span>
                  </div>

                  <h3 className="text-base sm:text-[17px] font-black text-[#0a1f3d] mb-1 tracking-tight">
                    Key Residential Areas
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    Flexible after-school schedules structured for students in key family communities.
                  </p>
                </div>

                {/* Scrolling Horizontal Tracks (Communities) */}
                <div 
                  className="pt-3 border-t border-slate-100 space-y-1.5 overflow-hidden"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                  }}
                >
                  {/* Row 1: Scrolling Left */}
                  <div className="overflow-hidden py-0.5">
                    <motion.div
                      className="flex gap-1.5 w-max"
                      animate={{ x: ['0%', '-50%'] }}
                      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    >
                      {[
                        'Saadiyat Island', 'Al Raha Beach', 'Dubai Hills', 'Al Barsha', 'Damac Hills', 'Mirdif',
                        'Saadiyat Island', 'Al Raha Beach', 'Dubai Hills', 'Al Barsha', 'Damac Hills', 'Mirdif',
                      ].map((area, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-emerald-50/80 text-emerald-900 text-[11px] sm:text-xs font-semibold border border-emerald-500/20 whitespace-nowrap shrink-0 shadow-2xs hover:bg-emerald-600 hover:text-white transition-colors"
                        >
                          {area}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Row 2: Scrolling Right */}
                  <div className="overflow-hidden py-0.5">
                    <motion.div
                      className="flex gap-1.5 w-max"
                      animate={{ x: ['-50%', '0%'] }}
                      transition={{ duration: 27, repeat: Infinity, ease: 'linear' }}
                    >
                      {[
                        'Al Khalidiyah', 'Silicon Oasis', 'Al Falah', 'Al Shamkha', 'Al Reef', 'Al Jimi',
                        'Al Khalidiyah', 'Silicon Oasis', 'Al Falah', 'Al Shamkha', 'Al Reef', 'Al Jimi',
                      ].map((area, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-emerald-50/80 text-emerald-900 text-[11px] sm:text-xs font-semibold border border-emerald-500/20 whitespace-nowrap shrink-0 shadow-2xs hover:bg-emerald-600 hover:text-white transition-colors"
                        >
                          {area}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Compact Trust & Action Strip */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shadow-[0_6px_20px_rgba(15,74,155,0.04)]">
            <div className="flex items-center gap-3 text-left w-full sm:w-auto">
              <div className="w-8 h-8 rounded-xl bg-[#0f4a9b]/10 border border-[#0f4a9b]/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-4 w-4 text-[#0f4a9b]" />
              </div>
              <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed">
                Syllabus-matched tuition for <span className="text-[#0a1f3d] font-bold">Cambridge · Edexcel · AQA · IB DP/MYP · AP</span> across the UAE.
              </p>
            </div>
            <GoldButton href="/contact#form" className="w-full sm:w-auto px-5 py-2.5 text-xs shadow-xs flex-shrink-0 font-bold justify-center text-center">
              Book a Free Trial Session
            </GoldButton>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faqs" className="py-8 lg:py-12 bg-white border-y border-gray-100">
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
              <p className="text-gray-600 text-[15px] leading-relaxed">Clear answers about our tutoring approach, structure, and policies.</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {faqItems.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button onClick={() => toggleFaq(i)}
                        style={{ width:40, height:40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontWeight:'bold', fontSize:'18px', border:'none', cursor:'pointer' }}>?</button>
                      <button onClick={() => toggleFaq(i)}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border"
                        style={{ minHeight:'48px', padding:'8px 14px', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)', background: isOpen ? 'rgba(15,74,155,0.04)' : 'transparent', cursor:'pointer' }}>
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{item.question}</span>
                        <span style={{ width:32, height:32, borderRadius:'50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform 0.2s' }}>
                          <ChevronDown className="h-3.5 w-3.5" style={{ color: isOpen ? '#fff' : '#0f4a9b' }} />
                        </span>
                      </button>
                    </div>
                    {isOpen && (
                      <div className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
                        style={{ background:'#f8fafc', borderColor:'rgba(15,74,155,0.15)', boxShadow:'0 4px 16px rgba(15,74,155,0.06)' }}>
                        <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{item.answer}</p>
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

      <RelatedContent
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Curriculum', href: '/curriculum' },
        ]}
        subjects={[
          { label: 'Maths', href: '/maths' },
          { label: 'Physics', href: '/physics' },
          { label: 'Chemistry', href: '/chemistry' },
          { label: 'Biology', href: '/biology' },
          { label: 'English', href: '/english' },
        ]}
        curricula={[
          { label: 'British Curriculum', href: '/british-curriculum' },
          { label: 'IGCSE', href: '/igcse' },
          { label: 'A-Level', href: '/a-level' },
          { label: 'IB Curriculum', href: '/ib-curriculum' },
          { label: 'American Curriculum', href: '/american-curriculum' },
          { label: 'AP', href: '/ap' },
        ]}
      />
      <FinalCTA
        title="Find Your Child's Tutor"
        subtitle="Get support that fits your child's curriculum and learning style."
        button1Text="Start Your First Session Today"
      />

    </Layout>
  );
}
