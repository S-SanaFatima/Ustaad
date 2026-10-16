import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Target, Layers, GraduationCap, ShieldCheck } from 'lucide-react';
import { BritishLandmarkWatermark } from './Watermarks';

export default function IGCSETutoringTreeSection() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white border-b border-gray-100 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-6 sm:mb-7 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-2 shadow-2xs">
            <ShieldCheck className="w-3 h-3 text-[#0f4a9b]" />
            <span className="text-[#0f4a9b] text-[10px] font-bold uppercase tracking-[0.14em]">Our Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0a1f3d] mb-1 leading-tight tracking-tight">
            How Ustaad Tutors <span className="text-[#0f4a9b]">IGCSE Students</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal">
            What tutoring covers between Year 9 and the Year 11 exams.
          </p>
        </div>

        {/* ── 3D TREE INFOGRAPHIC MAIN STAGE (COMPACT VIEWPORT FIT) ── */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#edf4fc] via-[#f4f8fe] to-[#e8f1fb] border border-[#d2e2f3] shadow-[0_8px_30px_rgba(15,74,155,0.06)] overflow-hidden p-6 sm:p-8">
          
          {/* ── ACADEMIC SCHOOL CREST & BRITISH WATERMARK IN BACKGROUND ── */}
          <div className="absolute inset-0 flex items-center justify-between px-12 pointer-events-none opacity-[0.07] select-none">
            <BritishLandmarkWatermark className="h-64 w-auto object-contain" />
            <div className="flex flex-col items-center justify-center">
              <GraduationCap className="w-48 h-48 text-[#0f4a9b]" />
            </div>
          </div>

          {/* ── 4 LARGE WATERMARK NUMBERS (EXACT CORNER PLACEMENT) ── */}
          <div className="absolute inset-0 pointer-events-none font-black select-none text-[#8faec8]/[0.16] leading-none">
            {/* 01 - Top Left */}
            <span className="absolute top-6 left-6 text-7xl sm:text-8xl tracking-tighter">01</span>
            {/* 02 - Top Right */}
            <span className="absolute top-6 right-6 text-7xl sm:text-8xl tracking-tighter">02</span>
            {/* 03 - Bottom Left */}
            <span className="absolute bottom-6 left-6 text-7xl sm:text-8xl tracking-tighter">03</span>
            {/* 04 - Bottom Right */}
            <span className="absolute bottom-6 right-6 text-7xl sm:text-8xl tracking-tighter">04</span>
          </div>

          {/* ── RESPONSIVE 3-COLUMN TREE DIAGRAM (MOBILE, TABLET & DESKTOP) ── */}
          <div className="relative z-10 grid grid-cols-12 gap-1.5 sm:gap-4 items-center min-h-[250px] sm:min-h-[300px]">
            
            {/* ── LEFT COLUMN: 01 & 03 CONTENT ── */}
            <div className="col-span-4 flex flex-col justify-between h-full py-1 space-y-6 sm:space-y-10 text-right">
              
              {/* TOP-LEFT: 01 SUBJECT PLANNING */}
              <motion.div
                onMouseEnter={() => setHoveredNode(1)}
                onMouseLeave={() => setHoveredNode(null)}
                className="group cursor-default"
                animate={{ scale: hoveredNode === 1 ? 1.02 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xs sm:text-base md:text-lg font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-0.5 sm:mb-1 leading-snug">
                  Subject Planning
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs leading-tight sm:leading-relaxed font-medium max-w-[240px] ml-auto">
                  A clear plan for revision, coursework, mock exams, and final exams across every IGCSE subject.
                </p>
              </motion.div>

              {/* BOTTOM-LEFT: 03 FULL SYLLABUS COVERAGE */}
              <motion.div
                onMouseEnter={() => setHoveredNode(3)}
                onMouseLeave={() => setHoveredNode(null)}
                className="group cursor-default"
                animate={{ scale: hoveredNode === 3 ? 1.02 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xs sm:text-base md:text-lg font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-0.5 sm:mb-1 leading-snug">
                  Full Syllabus Coverage
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs leading-tight sm:leading-relaxed font-medium max-w-[240px] ml-auto">
                  Every chapter of the IGCSE syllabus covered in full, with no exceptions or skipped earlier topics.
                </p>
              </motion.div>
            </div>

            {/* ── CENTER COLUMN: 3D TREE TRUNK & 4 FROSTED GLASS NODES ── */}
            <div className="col-span-4 relative h-[250px] sm:h-[300px] flex items-center justify-center select-none">
              
              <svg viewBox="0 0 280 300" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                <defs>
                  {/* 3D Trunk Gradient */}
                  <linearGradient id="trunkGradClean" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#7a9dbd" />
                    <stop offset="40%" stopColor="#96b6d4" />
                    <stop offset="80%" stopColor="#b4cfe6" />
                    <stop offset="100%" stopColor="#d5e6f5" />
                  </linearGradient>

                  {/* 3D Node Outer Glass Bevel */}
                  <radialGradient id="nodeOrbClean" cx="35%" cy="30%" r="65%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="45%" stopColor="#eef5fb" stopOpacity="0.95" />
                    <stop offset="80%" stopColor="#d4e4f2" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#b4cee5" stopOpacity="1" />
                  </radialGradient>

                  {/* Inner Node Recessed Shadow */}
                  <radialGradient id="nodeInnerClean" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f8fbfe" />
                    <stop offset="75%" stopColor="#e8f1fa" />
                    <stop offset="100%" stopColor="#cbdff0" />
                  </radialGradient>

                  {/* Soft Drop Shadow */}
                  <filter id="shadowClean" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0f4a9b" floodOpacity="0.18" />
                  </filter>
                  <filter id="branchShadowClean" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0f4a9b" floodOpacity="0.12" />
                  </filter>
                </defs>

                {/* ── 3D TREE BRANCH PATHS (ORGANIC CURVED Y-TRUNK) ── */}
                <g filter="url(#branchShadowClean)">
                  {/* Bottom Main Trunk */}
                  <path
                    d="M 140,290 L 140,150"
                    fill="none"
                    stroke="url(#trunkGradClean)"
                    strokeWidth="11"
                    strokeLinecap="round"
                  />

                  {/* Top-Left Arcing Branch */}
                  <path
                    d="M 140,150 C 140,80 85,55 50,50"
                    fill="none"
                    stroke="url(#trunkGradClean)"
                    strokeWidth="8.5"
                    strokeLinecap="round"
                  />

                  {/* Top-Right Arcing Branch */}
                  <path
                    d="M 140,150 C 140,80 195,55 230,50"
                    fill="none"
                    stroke="url(#trunkGradClean)"
                    strokeWidth="8.5"
                    strokeLinecap="round"
                  />

                  {/* Bottom-Left Horizontal Branch */}
                  <path
                    d="M 140,215 C 105,215 80,210 50,205"
                    fill="none"
                    stroke="url(#trunkGradClean)"
                    strokeWidth="7.5"
                    strokeLinecap="round"
                  />

                  {/* Bottom-Right Horizontal Branch */}
                  <path
                    d="M 140,215 C 175,215 200,210 230,205"
                    fill="none"
                    stroke="url(#trunkGradClean)"
                    strokeWidth="7.5"
                    strokeLinecap="round"
                  />
                </g>

                {/* ── NODE 1 (TOP LEFT - TARGET) ── */}
                <g
                  filter="url(#shadowClean)"
                  onMouseEnter={() => setHoveredNode(1)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer transition-transform duration-200"
                >
                  <circle cx="50" cy="50" r="28" fill="url(#nodeOrbClean)" stroke="#ffffff" strokeWidth="2.2" />
                  <circle cx="50" cy="50" r="19" fill="url(#nodeInnerClean)" stroke="#b8d1e8" strokeWidth="1" />
                  <circle cx="50" cy="50" r="12" fill="none" stroke="#0f4a9b" strokeWidth="1.8" />
                  <circle cx="50" cy="50" r="7" fill="none" stroke="#0f4a9b" strokeWidth="1.8" />
                  <circle cx="50" cy="50" r="3" fill="#0f4a9b" />
                  <line x1="50" y1="34" x2="50" y2="66" stroke="#0f4a9b" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="34" y1="50" x2="66" y2="50" stroke="#0f4a9b" strokeWidth="1.2" strokeLinecap="round" />
                </g>

                {/* ── NODE 2 (TOP RIGHT - LAYERS) ── */}
                <g
                  filter="url(#shadowClean)"
                  onMouseEnter={() => setHoveredNode(2)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer transition-transform duration-200"
                >
                  <circle cx="230" cy="50" r="28" fill="url(#nodeOrbClean)" stroke="#ffffff" strokeWidth="2.2" />
                  <circle cx="230" cy="50" r="19" fill="url(#nodeInnerClean)" stroke="#b8d1e8" strokeWidth="1" />
                  <polygon points="230,38 243,44 230,50 217,44" fill="#0f4a9b" opacity="0.9" />
                  <polygon points="230,44 243,50 230,56 217,50" fill="#1e5ba8" opacity="0.8" />
                  <polygon points="230,50 243,56 230,62 217,56" fill="#38bdf8" opacity="0.85" />
                </g>

                {/* ── NODE 3 (BOTTOM LEFT - OPEN BOOK) ── */}
                <g
                  filter="url(#shadowClean)"
                  onMouseEnter={() => setHoveredNode(3)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer transition-transform duration-200"
                >
                  <circle cx="50" cy="205" r="28" fill="url(#nodeOrbClean)" stroke="#ffffff" strokeWidth="2.2" />
                  <circle cx="50" cy="205" r="19" fill="url(#nodeInnerClean)" stroke="#b8d1e8" strokeWidth="1" />
                  <path
                    d="M 40,197 Q 50,201 50,211 Q 50,201 60,197 L 60,210 Q 50,214 50,220 Q 50,214 40,210 Z"
                    fill="none"
                    stroke="#0f4a9b"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <line x1="50" y1="201" x2="50" y2="220" stroke="#0f4a9b" strokeWidth="1.8" />
                </g>

                {/* ── NODE 4 (BOTTOM RIGHT - CALENDAR) ── */}
                <g
                  filter="url(#shadowClean)"
                  onMouseEnter={() => setHoveredNode(4)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer transition-transform duration-200"
                >
                  <circle cx="230" cy="205" r="28" fill="url(#nodeOrbClean)" stroke="#ffffff" strokeWidth="2.2" />
                  <circle cx="230" cy="205" r="19" fill="url(#nodeInnerClean)" stroke="#b8d1e8" strokeWidth="1" />
                  <rect x="220" y="195" width="20" height="19" rx="3" fill="none" stroke="#0f4a9b" strokeWidth="1.8" />
                  <line x1="220" y1="201" x2="240" y2="201" stroke="#0f4a9b" strokeWidth="1.4" />
                  <line x1="225" y1="193" x2="225" y2="196" stroke="#0f4a9b" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="235" y1="193" x2="235" y2="196" stroke="#0f4a9b" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="226" cy="207" r="1.2" fill="#0f4a9b" />
                  <circle cx="230" cy="207" r="1.2" fill="#0f4a9b" />
                  <circle cx="234" cy="207" r="1.2" fill="#0f4a9b" />
                </g>
              </svg>

            </div>

            {/* ── RIGHT COLUMN: 02 & 04 CONTENT ── */}
            <div className="col-span-4 flex flex-col justify-between h-full py-1 space-y-6 sm:space-y-10 text-left">
              
              {/* TOP-RIGHT: 02 BOARD QUESTION STYLES */}
              <motion.div
                onMouseEnter={() => setHoveredNode(2)}
                onMouseLeave={() => setHoveredNode(null)}
                className="group cursor-default"
                animate={{ scale: hoveredNode === 2 ? 1.02 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xs sm:text-base md:text-lg font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-0.5 sm:mb-1 leading-snug">
                  Board Question Styles
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs leading-tight sm:leading-relaxed font-medium max-w-[240px]">
                  Your child practises each question style their board uses, from short structured answers to longer written responses.
                </p>
              </motion.div>

              {/* BOTTOM-RIGHT: 04 FIXED WEEKLY LESSONS */}
              <motion.div
                onMouseEnter={() => setHoveredNode(4)}
                onMouseLeave={() => setHoveredNode(null)}
                className="group cursor-default"
                animate={{ scale: hoveredNode === 4 ? 1.02 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xs sm:text-base md:text-lg font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-0.5 sm:mb-1 leading-snug">
                  Fixed Weekly Lessons
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs leading-tight sm:leading-relaxed font-medium max-w-[240px]">
                  Lessons run at a set time each week, so revision keeps moving through every school term.
                </p>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
