import React from 'react';
import { motion } from 'motion/react';
import { Calculator, Atom, FlaskConical, Leaf, Wrench, ClipboardCheck, ArrowRight } from 'lucide-react';
import { GradientHeadingText } from './GradientHeadingText';
import { GoldButton } from './GoldButton';

/* ── 1. Mathematics: Animated Coordinate Grid & Sine Wave ── */
function MathsArtifact() {
  return (
    <div className="relative w-full h-24 rounded-xl bg-blue-50/60 border border-blue-100/90 overflow-hidden flex items-center justify-center select-none">
      {/* Coordinate Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.06)_1px,transparent_1px)] bg-[size:12px_12px]" />
      {/* Coordinate Axes */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-[#0f4a9b]/25" />
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#0f4a9b]/25" />
      
      {/* Dynamic Sine Wave Path */}
      <svg viewBox="0 0 200 60" className="w-full h-full relative z-10">
        <motion.path
          d="M 10 30 Q 35 5, 60 30 T 110 30 T 160 30 T 190 30"
          fill="none"
          stroke="#0f4a9b"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{
            d: [
              "M 10 30 Q 35 5, 60 30 T 110 30 T 160 30 T 190 30",
              "M 10 30 Q 35 55, 60 30 T 110 30 T 160 30 T 190 30",
              "M 10 30 Q 35 5, 60 30 T 110 30 T 160 30 T 190 30",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Animated Tangent Cursor Blip */}
        <motion.circle
          r="4"
          fill="#C7A24A"
          stroke="#ffffff"
          strokeWidth="1.5"
          animate={{
            cx: [20, 60, 110, 160, 185],
            cy: [16, 30, 30, 30, 22],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Formula badges */}
      <div className="absolute top-2 right-2.5 font-mono text-[10px] font-bold text-[#0f4a9b] bg-white/90 px-1.5 py-0.5 rounded border border-[#0f4a9b]/15 shadow-2xs">
        f(x) = sin θ
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[9px] font-bold text-[#C7A24A] bg-white/90 px-1.5 py-0.5 rounded border border-[#C7A24A]/25">
        ∫ πr²
      </div>
    </div>
  );
}

/* ── 2. Physics: Quantum Orbit & Orbiting Electron Nodes ── */
function PhysicsArtifact() {
  return (
    <div className="relative w-full h-24 rounded-xl bg-blue-50/50 border border-blue-200/60 overflow-hidden flex items-center justify-center select-none">
      {/* Radial field gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)]" />
      
      {/* Center Nucleus */}
      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1e40af] shadow-[0_0_12px_rgba(37,99,235,0.6)] flex items-center justify-center z-10">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>

      {/* Orbit 1 with Electron Node */}
      <motion.div
        className="absolute w-28 h-12 rounded-[50%] border border-[#2563eb]/45"
        style={{ transform: 'rotate(-25deg)' }}
        animate={{ rotate: [-25, 335] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#2563eb] shadow-[0_0_6px_#2563eb] -translate-y-1.5 translate-x-12" />
      </motion.div>

      {/* Orbit 2 with Counter-Orbiting Electron */}
      <motion.div
        className="absolute w-28 h-12 rounded-[50%] border border-[#38bdf8]/55"
        style={{ transform: 'rotate(45deg)' }}
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8] -translate-y-1.5 translate-x-12" />
      </motion.div>

      {/* Physics tags */}
      <div className="absolute top-2 right-2.5 font-mono text-[10px] font-bold text-[#2563eb] bg-white/90 px-1.5 py-0.5 rounded border border-[#2563eb]/20 shadow-2xs">
        E = mc²
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[9px] font-bold text-gray-500 bg-white/90 px-1.5 py-0.5 rounded border border-gray-200">
        F = ma
      </div>
    </div>
  );
}

/* ── 3. Chemistry: Glass Reaction Beaker & Effervescent Bubbles ── */
function ChemistryArtifact() {
  return (
    <div className="relative w-full h-24 rounded-xl bg-teal-50/60 border border-teal-100/90 overflow-hidden flex items-center justify-center select-none">
      {/* Molecular dot matrix */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0d9488_1px,transparent_1px)] bg-[size:12px_12px]" />
      
      {/* Flask Outline & Liquid */}
      <div className="relative w-12 h-16 flex flex-col items-center justify-end z-10">
        {/* Flask Neck */}
        <div className="w-3.5 h-5 border-l-2 border-r-2 border-[#0d9488]/70 bg-transparent -mb-0.5 z-10" />
        {/* Flask Body */}
        <div className="w-12 h-10 border-2 border-[#0d9488] rounded-b-2xl rounded-t-xs relative overflow-hidden bg-white/40 shadow-sm flex items-end">
          {/* Animated Liquid Level */}
          <motion.div
            className="w-full bg-gradient-to-t from-[#0d9488] to-[#14b8a6]/80 rounded-b-xl"
            animate={{ height: ['55%', '72%', '55%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Bubbles */}
          <motion.div
            className="absolute bottom-1 left-3 w-1.5 h-1.5 rounded-full bg-white/95"
            animate={{ y: [-2, -20], opacity: [0.9, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute bottom-1 right-3.5 w-2 h-2 rounded-full bg-white/95"
            animate={{ y: [-1, -22], opacity: [0.9, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
          />
        </div>
      </div>

      {/* Floating Benzene Ring Graphic */}
      <svg viewBox="0 0 40 40" className="w-7 h-7 absolute left-4 top-3 text-[#0d9488]/35">
        <polygon points="20,2 35,11 35,29 20,38 5,29 5,11" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>

      {/* Chemistry tags */}
      <div className="absolute top-2 right-2.5 font-mono text-[10px] font-bold text-[#0d9488] bg-white/90 px-1.5 py-0.5 rounded border border-[#0d9488]/20 shadow-2xs">
        pH: 7.0
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[9px] font-bold text-gray-500 bg-white/90 px-1.5 py-0.5 rounded border border-gray-200">
        PV = nRT
      </div>
    </div>
  );
}

/* ── 4. Biology: Twisting DNA Double-Helix ── */
function BiologyArtifact() {
  return (
    <div className="relative w-full h-24 rounded-xl bg-emerald-50/60 border border-emerald-100/90 overflow-hidden flex items-center justify-center select-none">
      {/* Cellular micro texture */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#059669_1px,transparent_1px)] bg-[size:10px_10px]" />
      
      {/* Animated DNA Base Pairs */}
      <div className="flex items-center gap-3.5 z-10">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-between h-13 w-2"
            animate={{
              scaleY: [0.25, 1, 0.25],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.22,
            }}
          >
            {/* Top Node */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#059669] shadow-[0_0_6px_rgba(5,150,105,0.4)]" />
            {/* Hydrogen Bond Rung */}
            <div className="w-0.5 h-full bg-gradient-to-b from-[#059669] via-[#10b981]/50 to-[#34d399]" />
            {/* Bottom Node */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#34d399] shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
          </motion.div>
        ))}
      </div>

      {/* Biology tags */}
      <div className="absolute top-2 right-2.5 font-mono text-[10px] font-bold text-[#059669] bg-white/90 px-1.5 py-0.5 rounded border border-[#059669]/20 shadow-2xs">
        DNA: [A·T]
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[9px] font-bold text-gray-500 bg-white/90 px-1.5 py-0.5 rounded border border-gray-200">
        Cell Growth
      </div>
    </div>
  );
}

/* ── 5. Engineering: Meshing Mechanical CAD Gears ── */
function EngineeringArtifact() {
  return (
    <div className="relative w-full h-24 rounded-xl bg-amber-50/50 border border-amber-100/90 overflow-hidden flex items-center justify-center select-none">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(193,123,47,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(193,123,47,0.06)_1px,transparent_1px)] bg-[size:10px_10px]" />
      
      {/* Interlocking Gears */}
      <div className="relative w-28 h-20 flex items-center justify-center z-10">
        {/* Gear 1 (Clockwise) */}
        <motion.div
          className="absolute -left-1 w-13 h-13 rounded-full border-4 border-dashed border-[#c17b2f] flex items-center justify-center shadow-xs"
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-4.5 h-4.5 rounded-full border-2 border-[#c17b2f] bg-white/90 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c17b2f]" />
          </div>
        </motion.div>

        {/* Gear 2 (Counter-Clockwise) */}
        <motion.div
          className="absolute -right-1 w-10 h-10 rounded-full border-4 border-dashed border-[#d97706] flex items-center justify-center shadow-xs"
          animate={{ rotate: -360 }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-3.5 h-3.5 rounded-full border-2 border-[#d97706] bg-white/90 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#d97706]" />
          </div>
        </motion.div>
      </div>

      {/* CAD tags */}
      <div className="absolute top-2 right-2.5 font-mono text-[10px] font-bold text-[#c17b2f] bg-white/90 px-1.5 py-0.5 rounded border border-[#c17b2f]/20 shadow-2xs">
        CAD: ±0.01mm
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[9px] font-bold text-gray-500 bg-white/90 px-1.5 py-0.5 rounded border border-gray-200">
        Torque & Load
      </div>
    </div>
  );
}

/* ── 6. Exam Prep: Timed Stopwatch & Grade 9 / A* Seal ── */
function ExamPrepArtifact() {
  return (
    <div className="relative w-full h-24 rounded-xl bg-amber-50/40 border border-amber-200/60 overflow-hidden flex items-center justify-center select-none">
      {/* Background Target Rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <div className="w-20 h-20 rounded-full border border-[#C7A24A]" />
        <div className="w-14 h-14 rounded-full border border-dashed border-[#C7A24A]" />
      </div>

      {/* Stopwatch & Grade 9 Stamp Stage */}
      <div className="relative flex items-center gap-4 z-10">
        {/* Stopwatch Dial */}
        <div className="relative w-12 h-12 rounded-full border-2 border-[#C7A24A] bg-white shadow-sm flex items-center justify-center">
          {/* Top Stopwatch Push Button */}
          <div className="absolute -top-1.5 w-3 h-1.5 bg-[#C7A24A] rounded-xs" />
          {/* Sweeping Seconds Needle */}
          <motion.div
            className="w-0.5 h-5 bg-[#C7A24A] origin-bottom rounded-full -translate-y-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[#0a1f3d]" />
        </div>

        {/* Grade 9 / A* Gold Seal */}
        <div className="flex flex-col items-center justify-center px-3 py-1.5 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b38728] text-white shadow-[0_4px_12px_rgba(212,175,55,0.3)]">
          <span className="text-[14px] font-black leading-none">A*</span>
          <span className="text-[8px] font-extrabold tracking-widest uppercase mt-0.5">GRADE 9</span>
        </div>
      </div>

      {/* Exam Prep tags */}
      <div className="absolute top-2 right-2.5 font-mono text-[10px] font-bold text-[#b38728] bg-white/90 px-1.5 py-0.5 rounded border border-[#C7A24A]/30 shadow-2xs">
        TIMER: 45:00
      </div>
      <div className="absolute bottom-2 left-2.5 font-mono text-[9px] font-bold text-gray-500 bg-white/90 px-1.5 py-0.5 rounded border border-gray-200">
        Past Papers
      </div>
    </div>
  );
}

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
    desc: "Mechanical, electrical, and civil principles for school and university.", 
    icon: Wrench,
    color: "#c17b2f",
    artifact: EngineeringArtifact,
    href: "/engineering",
  },
  { 
    title: "Exam Prep", 
    desc: "Structured revision, past papers, and exam technique across boards.", 
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
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
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
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

                {/* Footer Link with animated sliding arrow */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200">
                  <span>Explore {subj.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300 text-[#0f4a9b]" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* View All Subjects CTA Button */}
        <div className="flex justify-center mt-8">
          <GoldButton href="/subjects" className="px-10 py-4 text-base shadow-[0_0_20px_rgba(199,162,74,0.35)]">
            View All Subjects
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
