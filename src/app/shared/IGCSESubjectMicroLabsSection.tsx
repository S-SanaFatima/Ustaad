import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

/* ── 1. MATHS MICRO-LAB: Dynamic Sine Wave & Coordinate Grid ── */
function MathsMicroLab({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f4a9b]/10 to-[#0a1f3d]/05 border border-[#0f4a9b]/20">
      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#0f4a9b_1px,transparent_1px),linear-gradient(to_bottom,#0f4a9b_1px,transparent_1px)] bg-[size:8px_8px]" />

      <svg viewBox="0 0 60 60" className="w-10 h-10 overflow-visible relative z-10">
        {/* Coordinate Axis */}
        <line x1="6" y1="30" x2="54" y2="30" stroke="#0f4a9b" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="30" y1="6" x2="30" y2="54" stroke="#0f4a9b" strokeWidth="1" strokeOpacity="0.4" />

        {/* Dynamic Sine Wave */}
        <motion.path
          d="M 6,30 Q 18,12 30,30 T 54,30"
          fill="none"
          stroke="#0f4a9b"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{
            d: isHovered
              ? [
                  'M 6,30 Q 18,8 30,30 T 54,30',
                  'M 6,30 Q 18,52 30,30 T 54,30',
                  'M 6,30 Q 18,8 30,30 T 54,30',
                ]
              : [
                  'M 6,30 Q 18,14 30,30 T 54,30',
                  'M 6,30 Q 18,46 30,30 T 54,30',
                  'M 6,30 Q 18,14 30,30 T 54,30',
                ],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.4 : 2.8, ease: 'easeInOut' }}
        />

        {/* Gliding Tangent Node */}
        <motion.circle
          cx="30"
          cy="30"
          r="3"
          fill="#c9a24c"
          animate={{
            cy: [30, 14, 30, 46, 30],
            cx: [10, 20, 30, 40, 50],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.4 : 2.8, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

/* ── 2. PHYSICS MICRO-LAB: 3D Orbiting Electron Atom ── */
function PhysicsMicroLab({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f4a9b]/10 to-[#c9a24c]/10 border border-[#0f4a9b]/20">
      <svg viewBox="0 0 60 60" className="w-11 h-11 overflow-visible">
        {/* Core Nucleus */}
        <circle cx="30" cy="30" r="4.5" fill="#0f4a9b" />
        <circle cx="30" cy="30" r="2" fill="#c9a24c" />

        {/* Orbit Ring 1 */}
        <motion.ellipse
          cx="30"
          cy="30"
          rx="22"
          ry="8"
          fill="none"
          stroke="#0f4a9b"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: isHovered ? 4 : 8, ease: 'linear' }}
          style={{ originX: '30px', originY: '30px' }}
        />

        {/* Orbit Ring 2 */}
        <motion.ellipse
          cx="30"
          cy="30"
          rx="22"
          ry="8"
          fill="none"
          stroke="#c9a24c"
          strokeWidth="1.2"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: isHovered ? 3.5 : 7, ease: 'linear' }}
          style={{ originX: '30px', originY: '30px', rotate: '60deg' }}
        />

        {/* Orbit Ring 3 */}
        <motion.ellipse
          cx="30"
          cy="30"
          rx="22"
          ry="8"
          fill="none"
          stroke="#0284c7"
          strokeWidth="1.2"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: isHovered ? 5 : 9, ease: 'linear' }}
          style={{ originX: '30px', originY: '30px', rotate: '120deg' }}
        />

        {/* Orbiting Particle */}
        <motion.circle
          cx="52"
          cy="30"
          r="2"
          fill="#c9a24c"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: isHovered ? 4 : 8, ease: 'linear' }}
          style={{ originX: '30px', originY: '30px' }}
        />
      </svg>
    </div>
  );
}

/* ── 3. CHEMISTRY MICRO-LAB: Bubbling Reaction Flask ── */
function ChemistryMicroLab({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f4a9b]/10 to-[#10b981]/10 border border-[#0f4a9b]/20">
      <svg viewBox="0 0 60 60" className="w-10 h-10 overflow-visible">
        {/* Flask Body */}
        <path
          d="M 26,10 L 34,10 L 34,22 L 48,46 C 50,49 48,52 44,52 L 16,52 C 12,52 10,49 12,46 L 26,22 Z"
          fill="rgba(15,74,155,0.08)"
          stroke="#0f4a9b"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Liquid Layer */}
        <motion.path
          d="M 15,44 Q 30,40 45,44 L 44,52 L 16,52 Z"
          fill="url(#chemFluidGrad)"
          animate={{
            d: [
              'M 15,44 Q 30,40 45,44 L 44,52 L 16,52 Z',
              'M 15,42 Q 30,46 45,42 L 44,52 L 16,52 Z',
              'M 15,44 Q 30,40 45,44 L 44,52 L 16,52 Z',
            ],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 1 : 2, ease: 'easeInOut' }}
        />

        <defs>
          <linearGradient id="chemFluidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f4a9b" />
            <stop offset="100%" stopColor="#c9a24c" />
          </linearGradient>
        </defs>

        {/* Effervescent Rising Bubbles */}
        <motion.circle
          cx="28"
          cy="48"
          r="1.8"
          fill="#c9a24c"
          animate={{ cy: [48, 26, 12], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: isHovered ? 0.9 : 1.8, ease: 'easeOut' }}
        />
        <motion.circle
          cx="34"
          cy="46"
          r="1.4"
          fill="#38bdf8"
          animate={{ cy: [46, 28, 14], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.2 : 2.2, delay: 0.4, ease: 'easeOut' }}
        />
        <motion.circle
          cx="22"
          cy="50"
          r="1.5"
          fill="#ffffff"
          animate={{ cy: [50, 32, 18], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.1 : 2.0, delay: 0.8, ease: 'easeOut' }}
        />
      </svg>
    </div>
  );
}

/* ── 4. BIOLOGY MICRO-LAB: 3D Twisting DNA Double-Helix ── */
function BiologyMicroLab({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f4a9b]/10 to-[#0284c7]/10 border border-[#0f4a9b]/20">
      <svg viewBox="0 0 60 60" className="w-10 h-10 overflow-visible">
        {/* DNA Strand 1 */}
        <motion.path
          d="M 16,8 Q 30,22 44,36 T 16,64"
          fill="none"
          stroke="#0f4a9b"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            d: [
              'M 16,8 Q 30,22 44,36 T 16,64',
              'M 44,8 Q 30,22 16,36 T 44,64',
              'M 16,8 Q 30,22 44,36 T 16,64',
            ],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.4 : 2.6, ease: 'easeInOut' }}
        />

        {/* DNA Strand 2 */}
        <motion.path
          d="M 44,8 Q 30,22 16,36 T 44,64"
          fill="none"
          stroke="#c9a24c"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            d: [
              'M 44,8 Q 30,22 16,36 T 44,64',
              'M 16,8 Q 30,22 44,36 T 16,64',
              'M 44,8 Q 30,22 16,36 T 44,64',
            ],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.4 : 2.6, ease: 'easeInOut' }}
        />

        {/* Base Pair Connecting Rungs */}
        {[14, 24, 34, 44].map((y, idx) => (
          <motion.line
            key={idx}
            x1="20"
            y1={y}
            x2="40"
            y2={y}
            stroke="#0a1f3d"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            animate={{
              x1: [20, 26, 20],
              x2: [40, 34, 40],
            }}
            transition={{ repeat: Infinity, duration: isHovered ? 1.4 : 2.6, delay: idx * 0.15, ease: 'easeInOut' }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ── 5. ENGLISH MICRO-LAB: Turning Book Pages & Literary Glow ── */
function EnglishMicroLab({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f4a9b]/10 to-[#c9a24c]/10 border border-[#0f4a9b]/20">
      <svg viewBox="0 0 60 60" className="w-10 h-10 overflow-visible">
        {/* Book Spine & Base */}
        <path
          d="M 12,42 C 20,40 28,42 30,44 C 32,42 40,40 48,42 L 48,18 C 40,16 32,18 30,20 C 28,18 20,16 12,18 Z"
          fill="#ffffff"
          stroke="#0f4a9b"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Center Spine Line */}
        <line x1="30" y1="20" x2="30" y2="44" stroke="#0f4a9b" strokeWidth="1.5" />

        {/* Animated Page Turning */}
        <motion.path
          d="M 30,20 Q 38,17 46,19 L 46,43 Q 38,41 30,44 Z"
          fill="rgba(201,162,76,0.18)"
          stroke="#c9a24c"
          strokeWidth="1.2"
          animate={{
            d: isHovered
              ? [
                  'M 30,20 Q 38,17 46,19 L 46,43 Q 38,41 30,44 Z',
                  'M 30,20 Q 30,15 30,20 L 30,44 Q 30,44 30,44 Z',
                  'M 30,20 Q 22,17 14,19 L 14,43 Q 22,41 30,44 Z',
                  'M 30,20 Q 38,17 46,19 L 46,43 Q 38,41 30,44 Z',
                ]
              : [
                  'M 30,20 Q 38,18 46,20 L 46,43 Q 38,41 30,44 Z',
                  'M 30,20 Q 34,16 38,18 L 38,42 Q 34,40 30,44 Z',
                  'M 30,20 Q 38,18 46,20 L 46,43 Q 38,41 30,44 Z',
                ],
          }}
          transition={{ repeat: Infinity, duration: isHovered ? 1.6 : 3.2, ease: 'easeInOut' }}
        />

        {/* Floating Quotation / Annotation Mark */}
        <motion.text
          x="30"
          y="13"
          textAnchor="middle"
          fontSize="11"
          fontWeight="bold"
          fill="#c9a24c"
          animate={{ y: [13, 10, 13], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          " "
        </motion.text>
      </svg>
    </div>
  );
}

/* ── 6. BUSINESS MICRO-LAB: Ascending Growth Trend & Profit Vector ── */
function BusinessMicroLab({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f4a9b]/10 to-[#10b981]/10 border border-[#0f4a9b]/20">
      <svg viewBox="0 0 60 60" className="w-10 h-10 overflow-visible">
        {/* Coordinate Base */}
        <line x1="8" y1="48" x2="52" y2="48" stroke="#0f4a9b" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="8" y1="12" x2="8" y2="48" stroke="#0f4a9b" strokeWidth="1" strokeOpacity="0.3" />

        {/* Candlestick / Bar Columns */}
        {[
          { x: 14, h: 10, fill: '#0f4a9b' },
          { x: 22, h: 18, fill: '#0284c7' },
          { x: 30, h: 24, fill: '#0f4a9b' },
          { x: 38, h: 32, fill: '#c9a24c' },
        ].map((bar, idx) => (
          <motion.rect
            key={idx}
            x={bar.x}
            y={48 - bar.h}
            width="5"
            height={bar.h}
            rx="1.5"
            fill={bar.fill}
            opacity="0.75"
            animate={{
              height: isHovered ? [bar.h, bar.h + 5, bar.h] : bar.h,
              y: isHovered ? [48 - bar.h, 48 - bar.h - 5, 48 - bar.h] : 48 - bar.h,
            }}
            transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.15 }}
          />
        ))}

        {/* Ascending Trend Line */}
        <motion.path
          d="M 12,42 L 22,32 L 32,26 L 46,14"
          fill="none"
          stroke="#c9a24c"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Peak Growth Indicator Node */}
        <motion.circle
          cx="46"
          cy="14"
          r="3"
          fill="#c9a24c"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        />
      </svg>
    </div>
  );
}

/* ── SUBJECT CARDS DEFINITION ── */
const SUBJECTS = [
  {
    id: 'maths',
    title: 'IGCSE Maths',
    body: 'Cambridge 0580 and Edexcel 4MA1: algebra, geometry, statistics and calculator technique for the paper.',
    linkText: 'Maths Tutor Abu Dhabi',
    href: '/maths-tutor-abu-dhabi',
    syllabus: '0580 · 4MA1',
    accentColor: '#0f4a9b',
    MicroLab: MathsMicroLab,
  },
  {
    id: 'physics',
    title: 'IGCSE Physics',
    body: 'Cambridge 0625 and Edexcel 4PH1: mechanics, waves, electricity and required practicals for the exam.',
    linkText: 'Physics Tutor Abu Dhabi',
    href: '/physics-tutor-abu-dhabi',
    syllabus: '0625 · 4PH1',
    accentColor: '#c9a24c',
    MicroLab: PhysicsMicroLab,
  },
  {
    id: 'chemistry',
    title: 'IGCSE Chemistry',
    body: 'Cambridge 0620 and Edexcel 4CH1: moles, bonding, organic chemistry and Paper 6 practical writing.',
    linkText: 'Chemistry Tutor Abu Dhabi',
    href: '/chemistry-tutor-abu-dhabi',
    syllabus: '0620 · 4CH1',
    accentColor: '#0f4a9b',
    MicroLab: ChemistryMicroLab,
  },
  {
    id: 'biology',
    title: 'IGCSE Biology',
    body: 'Cambridge 0610 and Edexcel 4BI1: genetics, physiology, ecology and required practical questions.',
    linkText: 'Biology Tutor Abu Dhabi',
    href: '/biology-tutor-abu-dhabi',
    syllabus: '0610 · 4BI1',
    accentColor: '#0284c7',
    MicroLab: BiologyMicroLab,
  },
  {
    id: 'english',
    title: 'IGCSE English',
    body: 'Cambridge 0500 or Edexcel English: reading comprehension, directed writing and creative composition.',
    linkText: 'English Tutoring',
    href: '/english',
    syllabus: '0500 · Edexcel',
    accentColor: '#0a1f3d',
    MicroLab: EnglishMicroLab,
  },
  {
    id: 'business',
    title: 'IGCSE Business',
    body: 'Cambridge 0450 or Edexcel Business: enterprise, marketing, finance and structured case-study answers.',
    linkText: 'Business Tutoring',
    href: '/business',
    syllabus: '0450 · Business',
    accentColor: '#c9a24c',
    MicroLab: BusinessMicroLab,
  },
];

/* ── MAIN COMPONENT: INTERACTIVE MICRO-LABS SECTION ── */
export function IGCSESubjectMicroLabsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-14 lg:py-18 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#0f4a9b]/05 via-[#c9a24c]/05 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3 uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-[#c9a24c]" />
            Curriculum Hub
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">
            IGCSE Subjects We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] via-[#0f4a9b] to-[#0a3a79]">
              Walk Students Through
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Deeper coverage lives on each subject page. Pick your subject and jump.
          </p>
        </div>

        {/* ── Micro-Lab Subject Cards Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto mb-10">
          {SUBJECTS.map((item) => {
            const isHovered = hoveredCard === item.id;
            const MicroLabComponent = item.MicroLab;

            return (
              <motion.article
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#c9a24c]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                style={{
                  boxShadow: isHovered
                    ? '0 16px 36px rgba(10,31,60,0.10), 0 0 0 1px rgba(201,162,76,0.35)'
                    : '0 4px 20px rgba(10,31,60,0.04), 0 0 0 1px rgba(15,23,42,0.04)',
                }}
              >
                {/* Top Subtle Aura on Hover */}
                <div
                  className={`absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-40' : 'opacity-0'
                  }`}
                  style={{ background: item.accentColor }}
                />

                <div>
                  {/* Micro-Lab Interactive Simulation Badge + Syllabus Code */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <MicroLabComponent isHovered={isHovered} />

                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100/80 text-slate-600 border border-slate-200/60 tracking-wider">
                      {item.syllabus}
                    </span>
                  </div>

                  {/* Subject Title */}
                  <h3
                    className="text-[19px] font-extrabold text-[#0a1f3d] mb-2 leading-snug group-hover:text-[#0f4a9b] transition-colors"
                    style={{ fontFamily: 'var(--font-serif,"Fraunces",Georgia,serif)' }}
                  >
                    {item.title}
                  </h3>

                  {/* Subject Summary Body */}
                  <p className="text-[13.5px] text-[#3a4f6e] leading-relaxed mb-5">
                    {item.body}
                  </p>
                </div>

                {/* Footer Action Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={item.href}
                    className="text-xs font-bold text-[#0f4a9b] group-hover:text-[#0a1f3d] transition-colors"
                  >
                    {item.linkText}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ── Footer Additional Subjects Note ── */}
        <p className="text-center text-xs text-gray-500 max-w-2xl mx-auto">
          Also available on request: Additional Mathematics (Cambridge 0606), Economics (Cambridge 0455) and Computer Science (Cambridge 0478).{' '}
          <a href="/economics" className="text-[#0f4a9b] hover:underline font-semibold">
            Economics
          </a>{' '}
          is available as a full subject page.
        </p>
      </div>
    </section>
  );
}
