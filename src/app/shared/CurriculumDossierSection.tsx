import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Library, ArrowRight, RotateCw, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { GradientHeadingText } from './GradientHeadingText';
import { GoldButton } from './Buttons';
import { BritishLandmarkWatermark, AmericanLandmarkWatermark, IBWorldWatermark } from './Watermarks';

interface CurriculumData {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  Watermark: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badges: string[];
  examBoards: string[];
  popularSubjects: string[];
  achievement: string;
}

const CURRICULUMS: CurriculumData[] = [
  {
    id: 'british',
    title: 'British Curriculum',
    subtitle: 'National Curriculum for England',
    desc: 'Structured, syllabus-aligned tutoring designed for deep conceptual mastery and peak exam performance.',
    href: '/british-curriculum',
    icon: BookOpen,
    Watermark: BritishLandmarkWatermark,
    accentColor: '#0f4a9b',
    badges: ['IGCSE', 'A-Level', 'GCSE', 'Key Stage 3'],
    examBoards: ['Cambridge (CIE)', 'Edexcel', 'AQA', 'OCR'],
    popularSubjects: ['Maths & Further Maths', 'Physics & Chemistry', 'Biology', 'English Lit', 'Economics'],
    achievement: '89% Achieved Grades 8–9 (A*–A)',
  },
  {
    id: 'american',
    title: 'American Curriculum',
    subtitle: 'US Common Core & AP Pathways',
    desc: 'Targeted support for high school GPA optimization, AP course mastery, and standardized assessment readiness.',
    href: '/american-curriculum',
    icon: GraduationCap,
    Watermark: AmericanLandmarkWatermark,
    accentColor: '#0a3a79',
    badges: ['AP Courses', 'High School GPA', 'Middle School', 'SAT Prep'],
    examBoards: ['College Board AP', 'Common Core', 'NGSS Science'],
    popularSubjects: ['AP Calculus AB/BC', 'AP Physics & Chem', 'AP Biology', 'Algebra & Geometry', 'Economics'],
    achievement: '94% Scored 4 or 5 on AP Exams',
  },
  {
    id: 'ib',
    title: 'IB Curriculum',
    subtitle: 'International Baccalaureate Organization',
    desc: 'In-depth inquiry tutoring, Internal Assessment (IA) guidance, and rigorous analytical coaching.',
    href: '/ib-curriculum',
    icon: Library,
    Watermark: IBWorldWatermark,
    accentColor: '#0f4a9b',
    badges: ['IB DP (HL & SL)', 'IB MYP', 'Internal Assessments (IA)', 'TOK & EE Support'],
    examBoards: ['IB Diploma Programme', 'IB Middle Years Programme'],
    popularSubjects: ['Maths Analysis & Approaches', 'Physics HL', 'Chemistry HL', 'Biology HL', 'Economics HL'],
    achievement: '36.8 Average IB Diploma Score',
  },
];

function DossierCard({ item, index }: { item: CurriculumData; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = item.icon;
  const Watermark = item.Watermark;

  return (
    <div
      style={{ perspective: '1200px' }}
      className="w-full max-w-[360px] mx-auto h-[410px] [contain:paint] isolate"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      aria-label={${item.title} — click to flip dossier}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        }
      }}
    >
      <motion.div
        className="w-full h-full relative cursor-pointer select-none"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 140 }}
      >
        {/* ========================================================= */}
        {/* FRONT FACE: Luxury Executive Dossier Cover               */}
        {/* ========================================================= */}
        <div
          className="absolute inset-0 bg-white rounded-[22px] border border-gray-100 shadow-[0_8px_30px_rgba(15,74,155,0.06)] hover:shadow-[0_20px_45px_rgba(15,74,155,0.12)] p-6 flex flex-col justify-between overflow-hidden transition-shadow duration-300"
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)' }}
        >
          {/* Top Brand Bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />

          {/* Watermarked Emblem */}
          <div className="absolute right-2 bottom-3 w-32 h-32 opacity-40 pointer-events-none text-[#0f4a9b]">
            <Watermark className="w-full h-full" />
          </div>

          {/* Top Content */}
          <div className="relative z-10">
            {/* Header with Icon & Flip Prompt */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-xl flex items-center justify-center shadow-[0_6px_16px_rgba(15,74,155,0.22)] border border-white/20">
                <Icon className="h-6 w-6 text-white" strokeWidth={2.2} />
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#C7A24A] bg-[#C7A24A]/10 px-2.5 py-1 rounded-full border border-[#C7A24A]/25">
                <RotateCw className="w-3 h-3 animate-[spin_8s_linear_infinite]" />
                Hover to Flip
              </span>
            </div>

            <p className="text-[11px] font-bold uppercase tracking-wider text-[#c17b2f] mb-1">
              {item.subtitle}
            </p>
            <h3 className="text-xl font-black text-[#0a1f3d] mb-2.5 leading-snug">
              {item.title}
            </h3>

            {/* Gold Divider Line */}
            <div className="w-12 h-[2.5px] bg-gradient-to-r from-[#C7A24A] to-transparent rounded-full mb-3.5" />

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {item.desc}
            </p>

            {/* Key Qualifications Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.badges.slice(0, 3).map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 bg-[#F4F8FD] text-[#0f4a9b] text-xs font-semibold rounded-md border border-[#0f4a9b]/10"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="relative z-10 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0f4a9b]">
            <span className="inline-flex items-center gap-1">
              View Detailed Dossier
            </span>
            <span className="w-7 h-7 rounded-full bg-[#0f4a9b]/10 flex items-center justify-center text-[#0f4a9b] group-hover:bg-[#0f4a9b] group-hover:text-white transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BACK FACE: Deep Royal Academic Dossier Specification       */}
        {/* ========================================================= */}
        <div
          className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-[#0a1f3d] via-[#0d284f] to-[#0f4a9b] text-white p-6 flex flex-col justify-between shadow-[0_16px_40px_rgba(10,31,61,0.35)] border border-white/15 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(1px) rotateY(180deg)',
          }}
        >
          {/* Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#C7A24A]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

          {/* Subtle Grid Lines Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Top Header of Dossier */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C7A24A]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#f8e596]">
                  Academic Dossier
                </span>
              </div>
              <span className="text-[10px] text-white/60 font-mono tracking-wider">
                USTAAD-{item.id.toUpperCase()}
              </span>
            </div>

            {/* Exam Boards / Standards */}
            <div className="mb-3.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-200/80 mb-1.5 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#C7A24A]" />
                Exam Boards & Standards
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.examBoards.map((eb) => (
                  <span
                    key={eb}
                    className="text-[11px] font-medium bg-white/10 border border-white/15 px-2 py-0.5 rounded text-white/95"
                  >
                    {eb}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Subjects Tutored */}
            <div className="mb-3.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-200/80 mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C7A24A]" />
                Key Subjects Tutored
              </p>
              <div className="flex flex-wrap gap-1">
                {item.popularSubjects.map((subj) => (
                  <span
                    key={subj}
                    className="text-[11px] font-medium bg-blue-950/60 border border-blue-400/20 px-2 py-0.5 rounded text-blue-100"
                  >
                    {subj}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action & Stats */}
          <div className="relative z-10 pt-3 border-t border-white/10">
            {/* Stat callout */}
            <div className="flex items-center justify-between mb-3 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
              <span className="text-[10px] uppercase font-semibold text-white/70">Verified Outcome</span>
              <span className="text-xs font-black text-[#f8e596]">{item.achievement}</span>
            </div>

            {/* Navigation Button */}
            <a
              href={item.href}
              onClick={(e) => e.stopPropagation()}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C7A24A] via-[#d4af37] to-[#A8892A] text-[#0a1f3d] text-xs font-black uppercase tracking-wider shadow-[0_4px_16px_rgba(199,162,74,0.3)] hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <span>Explore {item.title.replace(' Curriculum', '')} Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function CurriculumDossierSection() {
  return (
    <section id="curriculum" className="py-16 lg:py-24 bg-[#F7FAFE] overflow-hidden relative isolate">
      {/* Ambient background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#0f4a9b]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#C7A24A]" />
            <span>International Curriculums</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 tracking-tight">
            <GradientHeadingText text="Curriculum We Support" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg font-medium leading-relaxed">
            Individual online tutoring tailored precisely to each syllabus followed in UAE international schools.
            <span className="block text-xs text-gray-500 mt-1.5">Hover or tap any card to view curriculum specifics & exam boards.</span>
          </p>
        </div>

        {/* 3D Dossier Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {CURRICULUMS.map((curr, i) => (
            <DossierCard key={curr.id} item={curr} index={i} />
          ))}
        </div>

        {/* Bottom Full View Button */}
        <div className="flex justify-center mt-12">
          <GoldButton href="/curriculum" className="px-10 py-4 text-base shadow-[0_0_20px_rgba(199,162,74,0.35)]">
            View All Curriculum Details
          </GoldButton>
        </div>

      </div>
    </section>
  );
}
