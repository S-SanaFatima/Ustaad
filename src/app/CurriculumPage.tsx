import { Fragment, useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, BarChart3, BookOpen, BrainCircuit, CheckCircle, ChevronDown,
  Flag, GraduationCap, HelpCircle, Layers, LibraryBig, MapPin, MessageCircle, MessageCircleQuestion,
  Orbit, PenLine, School, Sparkles,
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, BritishLandmarkWatermark, AmericanLandmarkWatermark, IBWorldWatermark, FinalCTA, StatsBar, HeroCTABlock } from './shared';
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
      <section className="pt-10 pb-20 lg:pt-20 lg:pb-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-sm font-bold rounded-full mb-6 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
                <Sparkles className="h-4 w-4" /> Tailored Academic Support
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
                <GradientHeadingText text="Every Curriculum." />
                <span className="block">One Standard.</span>
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">Every curriculum has its own style of teaching, so we guide students in the way they already learn at school.</p>
              <HeroCTABlock className="mb-4">
                Book Your Free Trial
              </HeroCTABlock>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-8 border-white group z-10"
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

      {/* ── CURRICULUM CARDS ── */}
      <section id="curricula" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Find Your Child's Curriculum" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg">British, American, and IB students all study differently. Choose your child's curriculum below to see how our support fits their learning style.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-full mx-auto mb-8 px-1 sm:px-0">

            {/* British Curriculum */}
            <div className="relative bg-white rounded-[24px] px-4 py-10 sm:p-8 border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/40 transition-all duration-300 flex flex-col cursor-pointer group overflow-hidden" style={{ minHeight: 380 }}>
              <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(15,74,155,0.35)] z-10 text-white flex-shrink-0">
                <LibraryBig className="h-6 w-6" />
              </div>
              <a href="/british-curriculum" className="text-xl font-extrabold text-[#0a1f3d] mb-2 leading-tight z-10 hover:text-[#0f4a9b] transition-colors">British Curriculum</a>
              <div className="inline-flex items-center px-3 py-1 bg-[#0f4a9b]/5 text-[#0f4a9b] text-xs font-bold rounded-lg border border-[#0f4a9b]/10 w-max mb-4 z-10">IGCSE · GCSE · A-Level</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 z-10">Lessons matched to how British exam boards mark and reward answers.</p>
              <div className="w-8 h-[2px] bg-[#C7A24A] mb-3 z-10" />
              <p className="text-gray-600 text-xs mb-5 z-10">Cambridge · Edexcel · AQA</p>
              <div className="flex flex-col gap-4 mt-auto z-10">
                <a href="/british-curriculum" className="w-full py-3.5 text-sm font-bold text-[#0a1f3d] border-2 border-gray-200 rounded-xl hover:border-[#0f4a9b] hover:text-[#0f4a9b] transition-colors text-center">View Curriculum</a>
                <GoldButton className="w-full py-3.5 text-sm shadow-[0_0_15px_rgba(199,162,74,0.3)]" href="/contact?intent=trial&source=curriculum-british">Book Your Free Trial</GoldButton>
              </div>
              <div className="absolute right-4 bottom-4 pointer-events-none select-none">
                <BritishLandmarkWatermark className="h-28 w-28 text-[#0f4a9b]/15 transition-transform group-hover:scale-110" />
              </div>
            </div>

            {/* American Curriculum */}
            <div className="relative bg-white rounded-[24px] px-4 py-10 sm:p-8 border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/40 transition-all duration-300 flex flex-col cursor-pointer group overflow-hidden" style={{ minHeight: 380 }}>
              <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(15,74,155,0.35)] z-10 text-white flex-shrink-0">
                <Flag className="h-6 w-6" />
              </div>
              <a href="/american-curriculum" className="text-xl font-extrabold text-[#0a1f3d] mb-2 leading-tight z-10 hover:text-[#0f4a9b] transition-colors">American Curriculum</a>
              <div className="inline-flex items-center px-3 py-1 bg-[#0f4a9b]/5 text-[#0f4a9b] text-xs font-bold rounded-lg border border-[#0f4a9b]/10 w-max mb-4 z-10">Grade 6-12 · AP · SAT</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 z-10">Tutoring that mirrors US coursework alongside AP and SAT prep work.</p>
              <div className="w-8 h-[2px] bg-[#C7A24A] mb-3 z-10" />
              <p className="text-gray-600 text-xs mb-5 z-10">College Board · AP · SAT</p>
              <div className="flex flex-col gap-4 mt-auto z-10">
                <a href="/american-curriculum" className="w-full py-3.5 text-sm font-bold text-[#0a1f3d] border-2 border-gray-200 rounded-xl hover:border-[#0f4a9b] hover:text-[#0f4a9b] transition-colors text-center">View Curriculum</a>
                <GoldButton className="w-full py-3.5 text-sm shadow-[0_0_15px_rgba(199,162,74,0.3)]" href="/contact?intent=trial&source=curriculum-american">Book Your Free Trial</GoldButton>
              </div>
              <div className="absolute right-4 bottom-4 pointer-events-none select-none">
                <AmericanLandmarkWatermark className="h-28 w-28 text-[#0f4a9b]/15 transition-transform group-hover:scale-110" />
              </div>
            </div>

            {/* IB Curriculum */}
            <div className="relative bg-white rounded-[24px] px-4 py-10 sm:p-8 border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/40 transition-all duration-300 flex flex-col cursor-pointer group overflow-hidden" style={{ minHeight: 380 }}>
              <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(15,74,155,0.35)] z-10 text-white flex-shrink-0">
                <Orbit className="h-6 w-6" />
              </div>
              <a href="/ib-curriculum" className="text-xl font-extrabold text-[#0a1f3d] mb-2 leading-tight z-10 hover:text-[#0f4a9b] transition-colors">IB Curriculum</a>
              <div className="inline-flex items-center px-3 py-1 bg-[#0f4a9b]/5 text-[#0f4a9b] text-xs font-bold rounded-lg border border-[#0f4a9b]/10 w-max mb-4 z-10">MYP · DP · SL & HL</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 z-10">Tuition that handles analytical depth and the real academic pressure of IB.</p>
              <div className="w-8 h-[2px] bg-[#C7A24A] mb-3 z-10" />
              <p className="text-gray-600 text-xs mb-5 z-10">IB MYP · IB Diploma Programme</p>
              <div className="flex flex-col gap-4 mt-auto z-10">
                <a href="/ib-curriculum" className="w-full py-3.5 text-sm font-bold text-[#0a1f3d] border-2 border-gray-200 rounded-xl hover:border-[#0f4a9b] hover:text-[#0f4a9b] transition-colors text-center">View Curriculum</a>
                <GoldButton className="w-full py-3.5 text-sm shadow-[0_0_15px_rgba(199,162,74,0.3)]" href="/contact?intent=trial&source=curriculum-ib">Book Your Free Trial</GoldButton>
              </div>
              <div className="absolute right-4 bottom-4 pointer-events-none select-none">
                <IBWorldWatermark className="h-28 w-28 text-[#0f4a9b]/15 transition-transform group-hover:scale-110" />
              </div>
            </div>

            {/* Find the Right Fit */}
            <div className="relative bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-[24px] p-5 sm:p-8 border border-[#E5E7EB]/30 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-white/40 transition-all duration-300 flex flex-col justify-center items-center text-center overflow-hidden cursor-pointer group" style={{ minHeight: 380 }}>
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#C7A24A]/20 to-[#A8892A]/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-inner z-10 border border-white/20">
                <MessageCircleQuestion className="h-10 w-10 text-[#C7A24A]" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3 z-10">How Can We Help You?</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-8 z-10 max-w-[240px]">Tell us your needs, we'll guide you from here.</p>
              <GoldButton className="w-full py-4 text-sm shadow-[0_0_20px_rgba(199,162,74,0.4)] z-10" href="/contact#form">
                Get Started
              </GoldButton>
            </div>

          </div>
        </div>
      </section>

      {/* ── ACADEMIC STAGES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-sm font-bold rounded-full mb-5 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
              <GraduationCap className="h-4 w-4" /> Who We Teach
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Academic Stages Across Each Curriculum" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Clear academic progression from foundation years to advanced examination stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-0">
            {academicStages.map((curriculum) => (
              <div
                key={curriculum.title}
                className="relative bg-white rounded-[28px] p-6 sm:p-7 border border-[#E8EDF5] shadow-[0_8px_40px_rgba(15,74,155,0.08)] hover:shadow-[0_24px_60px_rgba(15,74,155,0.14)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                {/* Subtle top glow accent */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#0f4a9b]/20 to-transparent" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(15,74,155,0.35)] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {curriculum.icon}
                  </div>
                  <div>
                    <p className="text-[19px] font-extrabold text-[#0a1f3d] leading-tight">{curriculum.title}</p>
                    <p className="text-[10px] font-bold text-[#0f4a9b]/50 uppercase tracking-[0.15em] mt-1">{curriculum.subtitle.replace(/\s*\|\s*/g, ' • ')}</p>
                  </div>
                </div>

                {/* Vertical stage list */}
                <div className="space-y-0">
                  {curriculum.stages.map((stage, idx) => {
                    const isLast = idx === curriculum.stages.length - 1;
                    return (
                      <div key={`${curriculum.title}-${stage.label}`} className="flex gap-3">
                        {/* Dot + connecting line */}
                        <div className="flex flex-col items-center flex-shrink-0 pt-[26px]">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] shadow-[0_0_8px_rgba(15,74,155,0.45)] flex-shrink-0 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-white/70" />
                          </div>
                          {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-[#0f4a9b]/25 to-transparent mt-1.5 mb-1.5" />}
                        </div>
                        {/* Stage row */}
                        <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-2.5'}`}>
                          <div className="bg-[#f6f9fd] border border-[#0f4a9b]/[0.06] rounded-2xl px-4 py-3.5">
                            <p className="text-sm font-extrabold text-[#0a1f3d] leading-snug">{stage.label}</p>
                            <p className="text-xs text-[#0f4a9b]/60 font-semibold mt-0.5">{stage.detail}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR TEACHING APPROACH ── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 text-center">
              <GradientHeadingText text="Our Teaching Approach Across Each Curriculum" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-center">Lessons follow how each curriculum assesses students, not a copy-paste method applied across every board.</p>
          </div>

          <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-stretch">
            <div className="bg-white rounded-[32px] p-6 shadow-[0_20px_60px_rgba(15,74,155,0.08)] flex flex-col gap-4">
              {teachingApproach.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveApproach(item.key)}
                  className={`w-full text-left rounded-[24px] px-5 py-5 border transition-all flex items-center gap-4 ${activeApproach === item.key ? 'border-[#0f4a9b] bg-[#eff5ff] shadow-[0_15px_35px_rgba(15,74,155,0.15)]' : 'border-[#E5E7EB] bg-white hover:border-[#0f4a9b]/40'}`}
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

            <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0f2f63] via-[#0a3a79] to-[#06214b] text-white p-10 shadow-[0_30px_80px_rgba(6,33,75,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent)]" />
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white/70 tracking-wide">{activeApproachContent.subtitle}</p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mt-2">{activeApproachContent.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 flex-shrink-0 mt-1">
                  {activeApproachContent.icon}
                </div>
              </div>
              <div className="relative z-10 mt-8">
                <ul className="space-y-5">
                  {activeApproachContent.bullets.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1">
                        <CheckCircle className="h-4 w-4 text-[#facc15]" />
                      </span>
                      <p className="text-base leading-relaxed text-white/90 text-justify">{point}</p>
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
          <a href="/subjects" className="inline-flex items-center gap-2 bg-white text-[#0f4a9b] font-bold px-6 py-3 rounded-full shadow-lg hover:bg-white/90 flex-shrink-0 relative z-10">
            Explore our full subject list
          </a>
        </div>
      </div>

      {/* ── CURRICULUM SUPPORT ── */}
      <section className="py-20 bg-gradient-to-b from-[#081a3f] via-[#04112b] to-[#010814] text-white mt-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(15,74,155,0.5), transparent 55%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold">Curriculum Support Across the UAE</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#facc15] to-[#f97316] mx-auto mt-4" />
          </div>

          <div className="bg-white/5 border border-white/15 rounded-[32px] p-8 sm:p-10 shadow-[0_40px_90px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mb-5">
                <MapPin className="h-8 w-8 text-[#facc15]" />
              </div>
 <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
                Ustaad provides British curriculum tutoring, American curriculum tutoring, and IB tutoring across <a href="/tutors" className="text-[#facc15] font-semibold underline">Dubai</a>, <a href="/tutors" className="text-[#facc15] font-semibold underline">Abu Dhabi</a>, <a href="/tutors" className="text-[#facc15] font-semibold underline">Al Ain</a>, <a href="/tutors" className="text-[#facc15] font-semibold underline">Sharjah</a>, and the wider <a href="/tutors" className="text-[#facc15] font-semibold underline">UAE</a>. Our tutors support students from leading UAE schools including <a href="/tutors" className="text-[#93c5fd] font-semibold underline">Cranleigh</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">Brighton College</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">Repton</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">GEMS Wellington</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">Raha International</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">GEMS American Academy</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">Dubai International Academy</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">Yasmina British Academy</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">The British School Al Khubairat</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">GEMS Cambridge International</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">Yasmina American School</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">ACS Abu Dhabi</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">ATHS</a>, <a href="/tutors" className="text-[#93c5fd] font-semibold underline">ATS</a>, and <a href="/tutors" className="text-[#93c5fd] font-semibold underline">STS</a>.
              </p>
            </div>
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#facc15] to-[#f97316] mx-auto mb-8 rounded-full" />
            <div className="flex flex-wrap gap-2.5 max-w-4xl mx-auto justify-start sm:justify-center">
              {[
                "Al Khalidiyah", "Al Raha Beach", "Saadiyat Island",
                "Al Falah", "Al Shamkha", "Al Reef",
                "Dubai Hills", "Al Barsha", "Mirdif",
                "Silicon Oasis", "Nad Al Sheba", "Damac Hills",
                "Al Jimi", "Zakher", "Al Towayya",
              ].map((area) => (
                <span
                  key={area}
                  className="flex-1 min-w-[100px] sm:flex-none sm:min-w-0 flex items-center justify-center text-center px-4 py-2 bg-white/10 text-white/90 text-xs font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:text-white transition-colors cursor-default backdrop-blur-md shadow-sm min-h-[36px] sm:min-h-0"
                >
                  {area}
                </span>
              ))}
            </div>
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
        subtext2="Stuck? Send it, we'll explain it."
      />

    </Layout>
  );
}
