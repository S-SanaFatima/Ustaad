import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Atom, FlaskConical, Leaf, Wrench, ClipboardCheck, ArrowRight, ChevronDown } from 'lucide-react';
import { GradientHeadingText } from './GradientHeadingText';
import { GoldButton } from './GoldButton';
import { 
  MathsArtifact, 
  PhysicsArtifact, 
  ChemistryArtifact, 
  BiologyArtifact, 
  EngineeringArtifact, 
  ExamPrepArtifact 
} from './SubjectArtifacts';

/* ── Subjects Data with Bespoke Artifacts ── */
const SUBJECTS = [
  { 
    title: "Mathematics", 
    desc: "Building logical thinking through mathematics.", 
    icon: Calculator,
    color: "#0f4a9b",
    artifact: MathsArtifact,
    href: "/maths",
  },
  { 
    title: "Physics", 
    desc: "Exploring motion, energy, and the world around us.", 
    icon: Atom,
    color: "#2563eb",
    artifact: PhysicsArtifact,
    href: "/physics",
  },
  { 
    title: "Chemistry", 
    desc: "Making complex chemical ideas easier to understand.", 
    icon: FlaskConical,
    color: "#0d9488",
    artifact: ChemistryArtifact,
    href: "/chemistry",
  },
  { 
    title: "Biology", 
    desc: "Exploring how living systems grow and function.", 
    icon: Leaf,
    color: "#059669",
    artifact: BiologyArtifact,
    href: "/biology",
  },
  { 
    title: "Engineering", 
    desc: "Mechanical, electrical & civil engineering basics.", 
    icon: Wrench,
    color: "#c17b2f",
    artifact: EngineeringArtifact,
    href: "/engineering",
  },
  { 
    title: "Exam Prep", 
    desc: "Past papers, timed practice, and exam technique.", 
    icon: ClipboardCheck,
    color: "#C7A24A",
    artifact: ExamPrepArtifact,
    href: "/exam-preparation",
  },
] as const;

export function AcademicExpertiseSection() {
  return (
    <section id="subjects" className="py-16 lg:py-24 bg-[#F4F8FD] relative overflow-hidden isolate">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#0a1f3d] mb-4 tracking-tight">
            <GradientHeadingText text="Academic Expertise" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg font-medium">
            Ustaad offers expert support across the subjects students often find most challenging.
          </p>
        </div>

        {/* 6 Subject Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-6 sm:mb-10">
          {SUBJECTS.map((subj, i) => {
            const Icon = subj.icon;
            const Artifact = subj.artifact;

            return (
              <motion.a
                href={subj.href}
                key={i}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-2xl border border-gray-200/80 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(15,74,155,0.14)] hover:border-[#0f4a9b]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer group overflow-hidden"
              >
                {/* Header: Subject Icon & Title */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shadow-xs shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${subj.color}, #0a1f3d)`,
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200 leading-tight">
                      {subj.title}
                    </h3>
                    <div
                      className="w-8 h-[2px] mt-1 rounded-full group-hover:w-16 transition-all duration-300"
                      style={{ backgroundColor: subj.color }}
                    />
                  </div>
                </div>

                {/* Exact Description */}
                <p className="text-[#4b5563] group-hover:text-[#1f2937] transition-colors duration-200 text-sm leading-relaxed mb-4 flex-grow">
                  {subj.desc}
                </p>

                {/* Bespoke Interactive Subject Artifact */}
                <div className="my-2 group-hover:scale-[1.02] transition-transform duration-300">
                  <Artifact />
                </div>

                {/* Footer Link */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200">
                  <span>Explore {subj.title}</span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* View All Subjects CTA Button */}
        <div className="flex justify-center mt-4 sm:mt-8">
          <GoldButton href="/subjects" className="px-10 py-4 text-base shadow-[0_0_20px_rgba(199,162,74,0.35)]">
            View All Subjects
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
