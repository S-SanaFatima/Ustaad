import { useState, useRef, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FlaskConical,
  Atom,
  Calculator,
  Flame,
  Zap,
  Droplet,
  Clock,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Star,
  Sparkles,
  BookOpen,
  Video,
  Award,
  TrendingUp,
  FileText,
  Layers,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';
import { Layout, StatsBar, SchoolsMarquee, DUBAI_SCHOOL_LOGOS, WhatsAppIcon, RelatedContent } from './shared';
import SEOHead from './shared/SEOHead';
import {
  cityLocalBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  reviewSchema,
} from './shared/schemas';
import { chemistryDiagnosticLottie } from './chemistryDiagnosticLottie';

const BOOKING_URL = '/contact?offer=free-trial#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20a%20Chemistry%20tutor%20in%20Dubai.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

// --- SSR-SAFE CHEMISTRY LOTTIE ANIMATION ---
function ChemistryDiagnosticLottieAnimation({ className = 'w-full h-full' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let anim: any = null;

    import('lottie-web').then((lottieModule) => {
      const lottie = lottieModule.default || lottieModule;
      if (containerRef.current) {
        anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: chemistryDiagnosticLottie,
        });
      }
    });

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, []);

  return <div ref={containerRef} className={className} />;
}

// --- BACKGROUND GRID PATTERN ---
const LabGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'chem-grid-l' : 'chem-grid-d'} width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke={light ? 'rgba(15,74,155,0.05)' : 'rgba(255,255,255,0.04)'}
          strokeWidth="1"
        />
        <circle cx="40" cy="40" r="1" fill={light ? 'rgba(199,162,74,0.2)' : 'rgba(240,201,106,0.15)'} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'chem-grid-l' : 'chem-grid-d'})`} />
  </svg>
);

// --- FLOATING CHEMISTRY BACKGROUND ELEMENTS ---
function FloatingChemistryElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Benzene Ring Left */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-2 top-8 sm:left-4 sm:top-10 opacity-30 sm:opacity-40"
      >
        <svg width="76" height="88" viewBox="0 0 100 115" fill="none" stroke="#0f4a9b" strokeWidth="2.5">
          <polygon points="50,5 95,30 95,85 50,110 5,85 5,30" />
          <circle cx="50" cy="57.5" r="28" strokeDasharray="6 4" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Orbiting Atom Right */}
      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -right-4 top-6 sm:right-6 sm:top-8 opacity-30 sm:opacity-40"
      >
        <svg width="86" height="86" viewBox="0 0 100 100" fill="none" stroke="#C7A24A" strokeWidth="2">
          <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(-30 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(90 50 50)" />
          <circle cx="50" cy="50" r="5" fill="#0f4a9b" />
          <circle cx="85" cy="40" r="3" fill="#C7A24A" />
          <circle cx="20" cy="65" r="3" fill="#0f4a9b" />
        </svg>
      </motion.div>

      {/* Floating Formula: ΔH < 0 */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute left-[6%] bottom-10 hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs border border-[#0f4a9b]/15 text-[#0f4a9b]/70 text-[11px] font-mono font-semibold shadow-xs"
      >
        <span>ΔH &lt; 0</span>
        <span className="text-[10px] text-[#C7A24A] font-sans font-medium">Exothermic</span>
      </motion.div>

      {/* Floating Formula: PV = nRT */}
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -4, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute right-[6%] bottom-12 hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs border border-[#C7A24A]/25 text-[#0a1f3d]/70 text-[11px] font-mono font-semibold shadow-xs"
      >
        <span>PV = nRT</span>
      </motion.div>

      {/* Floating Ion: SO₄²⁻ */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-2, 3, -2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute left-[2%] top-[45%] hidden xl:flex px-2.5 py-1 rounded-lg bg-white/70 border border-slate-200/90 text-slate-500 text-xs font-mono shadow-2xs"
      >
        SO₄²⁻
      </motion.div>

      {/* Floating Molecule: H₂O (l) */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [3, -2, 3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute right-[2%] top-[48%] hidden xl:flex px-2.5 py-1 rounded-lg bg-white/70 border border-slate-200/90 text-slate-500 text-xs font-mono shadow-2xs"
      >
        H₂O (l)
      </motion.div>

      {/* Mini Beaker silhouette */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
        className="absolute left-[16%] top-5 opacity-20 hidden sm:block"
      >
        <FlaskConical className="w-8 h-8 text-[#0f4a9b]" />
      </motion.div>

      {/* Mini Atom silhouette */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute right-[18%] top-6 opacity-20 hidden sm:block"
      >
        <Atom className="w-8 h-8 text-[#C7A24A]" />
      </motion.div>
    </div>
  );
}

// --- SECTION 02: LIVE EQUATION BALANCER COMPONENT ---
function EquationBalancerVisual() {
  const [isBalanced, setIsBalanced] = useState<boolean>(true);

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 p-4 sm:p-5 shadow-[0_15px_35px_rgba(15,74,155,0.06)] relative overflow-hidden text-left">
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />
      
      {/* Ambient background glows */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#0f4a9b]/[0.05] rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#C7A24A]/[0.06] rounded-full blur-2xl pointer-events-none" />

      {/* Terminal Top Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 pb-2.5 border-b border-slate-100 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0a1f3d] to-[#122e56] text-[#f0c96a] flex items-center justify-center shadow-xs">
            <FlaskConical className="w-3.5 h-3.5 text-[#f0c96a]" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a1f3d] block">
              Live Mark Scheme Balancer
            </span>
            <p className="text-[10px] text-slate-500 font-medium">Interactive Examiner Diagnostics</p>
          </div>
        </div>

        {/* Interactive Segmented Pill Switcher */}
        <div className="flex items-center p-0.5 rounded-xl bg-slate-100/90 border border-slate-200/90 shadow-inner">
          <button
            type="button"
            onClick={() => setIsBalanced(false)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold transition-all duration-200 cursor-pointer ${
              !isBalanced
                ? 'bg-white text-rose-700 shadow-xs border border-rose-200/80 ring-1 ring-rose-500/10'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <AlertCircle className="w-3 h-3 text-rose-500" />
            <span>Common Mistake</span>
          </button>
          <button
            type="button"
            onClick={() => setIsBalanced(true)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold transition-all duration-200 cursor-pointer ${
              isBalanced
                ? 'bg-white text-emerald-800 shadow-xs border border-emerald-200/80 ring-1 ring-emerald-500/10'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>Model Answer (+2 Marks)</span>
          </button>
        </div>
      </div>

      {/* Main Workbench Display Area */}
      <div className="my-3 bg-gradient-to-b from-[#F8FAFC] via-[#F4F8FB] to-[#EDF4FA] rounded-xl p-3 sm:p-4 border border-slate-200/90 relative overflow-hidden shadow-inner">
        <div className="relative z-10">
          {/* Reaction Header Tag */}
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white border border-slate-200/90 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-[#0a1f3d] shadow-2xs">
              Spec Focus: Paper 4 Theory
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-normal">Combustion of Hydrogen Gas</span>
            </span>
          </div>

          <AnimatePresence mode="wait">
            {isBalanced ? (
              <motion.div
                key="balanced"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5"
              >
                {/* Reaction Molecular Formula Tiles */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 flex-wrap py-1">
                  {/* Reactant 1 */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#0a1f3d] text-[#f0c96a] font-black text-xs shadow-2xs">
                      2
                    </span>
                    <span className="font-mono font-bold text-sm sm:text-base text-[#0a1f3d]">H₂</span>
                    <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-1 py-0.5 rounded border border-emerald-300/80">(g)</span>
                  </div>

                  <span className="w-5 h-5 rounded-full bg-slate-200/70 text-slate-600 font-bold flex items-center justify-center text-[10px]">+</span>

                  {/* Reactant 2 */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#0a1f3d] text-[#f0c96a] font-black text-xs shadow-2xs">
                      1
                    </span>
                    <span className="font-mono font-bold text-sm sm:text-base text-[#0a1f3d]">O₂</span>
                    <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-1 py-0.5 rounded border border-emerald-300/80">(g)</span>
                  </div>

                  <span className="text-[#C7A24A] font-bold text-base px-0.5">→</span>

                  {/* Product */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs ring-1 ring-emerald-500/20">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#0a1f3d] text-[#f0c96a] font-black text-xs shadow-2xs">
                      2
                    </span>
                    <span className="font-mono font-bold text-sm sm:text-base text-[#0a1f3d]">H₂O</span>
                    <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-1 py-0.5 rounded border border-emerald-300/80">(l)</span>
                  </div>
                </div>

                {/* Scorecard Callout */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-semibold shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Stoichiometry Balanced (4H &amp; 2O) + Full State Symbols [+2 Marks]</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="unbalanced"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5"
              >
                {/* Unbalanced Formula Tiles */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 flex-wrap py-1">
                  {/* Reactant 1 */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/70 border border-dashed border-rose-300">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md border border-dashed border-rose-400 bg-rose-50 text-rose-600 font-bold text-[10px]">
                      ?
                    </span>
                    <span className="font-mono font-bold text-sm sm:text-base text-slate-400">H₂</span>
                    <span className="text-[9px] font-mono text-slate-400 bg-slate-100 px-1 py-0.5 rounded border border-dashed border-slate-300">[?]</span>
                  </div>

                  <span className="w-5 h-5 rounded-full bg-slate-200/50 text-slate-400 font-bold flex items-center justify-center text-[10px]">+</span>

                  {/* Reactant 2 */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/70 border border-dashed border-rose-300">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md border border-dashed border-rose-400 bg-rose-50 text-rose-600 font-bold text-[10px]">
                      ?
                    </span>
                    <span className="font-mono font-bold text-sm sm:text-base text-slate-400">O₂</span>
                    <span className="text-[9px] font-mono text-slate-400 bg-slate-100 px-1 py-0.5 rounded border border-dashed border-slate-300">[?]</span>
                  </div>

                  <span className="text-[#C7A24A] font-bold text-base px-0.5">→</span>

                  {/* Product */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/70 border border-dashed border-rose-300">
                    <span className="font-mono font-bold text-sm sm:text-base text-slate-400">H₂O</span>
                    <span className="text-[9px] font-mono text-slate-400 bg-slate-100 px-1 py-0.5 rounded border border-dashed border-slate-300">[?]</span>
                  </div>
                </div>

                {/* Scorecard Callout */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-[11px] sm:text-xs font-semibold shadow-2xs">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>Unbalanced: Missing coefficients &amp; state symbols [-2 Marks on Paper 4]</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Terminal Integrated Bottom Banner */}
      <div className="pt-2 text-center border-t border-slate-100">
        <p className="text-[11px] sm:text-xs text-slate-600 font-medium">
          A specialist chemistry tutor finds the exact step where marks leak and fixes it before the next mock.
        </p>
      </div>
    </div>
  );
}

// --- ANIMATED TEST TUBE VISUAL ---
function AnimatedTestTube({ color, fillPct }: { color: string; fillPct: string }) {
  return (
    <div className="relative w-4 h-9 rounded-b-full border-[1.5px] border-slate-700/30 overflow-hidden bg-slate-100/90 flex items-end shadow-inner p-[1px] flex-shrink-0">
      {/* Test tube glass specular highlight reflection */}
      <div className="absolute top-1 left-0.5 w-[1.5px] h-5 bg-white/70 rounded-full z-20 pointer-events-none" />
      
      {/* Liquid Body with animated wave & bubbles */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: fillPct }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full rounded-b-[5px] relative overflow-hidden transition-all duration-300 group-hover:brightness-110"
        style={{ backgroundColor: color }}
      >
        {/* Meniscus / Liquid Top Line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/50" />

        {/* Animated Rising Micro-Bubble 1 */}
        <motion.div
          animate={{ y: [6, -10], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="absolute bottom-0.5 left-0.5 w-1 h-1 rounded-full bg-white/80"
        />

        {/* Animated Rising Micro-Bubble 2 */}
        <motion.div
          animate={{ y: [8, -12], opacity: [0, 0.9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
          className="absolute bottom-0 right-0.5 w-1 h-1 rounded-full bg-white/70"
        />
      </motion.div>
    </div>
  );
}

// --- SECTION 03: 6 MARK LOSS TEST-TUBE CARDS ---
const MARK_LOSS_PATTERNS: Array<{
  num: string;
  title: string;
  spec: string;
  copy: ReactNode;
  color: string;
  fillPct: string;
  tag: string;
  icon: any;
}> = [
  {
    num: '01',
    title: 'Mole Calculations',
    spec: 'n = m / M_r · Gas Vol · Titrations',
    copy: (
      <>
        Limiting reagents, gas volumes and concentration questions fall apart when students skip the unit check or miss{' '}
        <a href="/maths-tutor-dubai" className="text-[#0f4a9b] font-semibold hover:underline">
          the maths underneath the calculations
        </a>.
      </>
    ),
    color: '#0f4a9b',
    fillPct: '75%',
    tag: 'Formula Framework Fixed',
    icon: Calculator,
  },
  {
    num: '02',
    title: 'Equations & State Symbols',
    spec: 'Ionic · Net Redox · (aq) (s) (g)',
    copy: 'Unbalanced equations and missing (aq), (s), (g) are the quietest mark losses on any chemistry paper.',
    color: '#C7A24A',
    fillPct: '60%',
    tag: 'Conservation Drilled',
    icon: RefreshCw,
  },
  {
    num: '03',
    title: 'Electrolysis & Half-Equations',
    spec: 'Anode (+) vs Cathode (-) · Molten/Aq',
    copy: 'Students mix up what happens at the anode and cathode, and lose both ionic and observation marks.',
    color: '#0284c7',
    fillPct: '85%',
    tag: 'Electrode Logic Simplified',
    icon: Zap,
  },
  {
    num: '04',
    title: 'Organic Chemistry',
    spec: 'IUPAC Naming · Isomers · Reagents',
    copy: 'Naming, isomers and reaction conditions blur together without a clear flow-chart system.',
    color: '#b45309',
    fillPct: '90%',
    tag: 'Reaction Pathways Mapped',
    icon: Atom,
  },
  {
    num: '05',
    title: 'Rates & Equilibrium',
    spec: 'Collision Theory · Le Chatelier',
    copy: (
      <>
        Graph interpretation and &ldquo;explain using collision theory&rdquo; answers lose marks when students miss{' '}
        <a href="/blogs/command-words-igcse-a-level-exams" className="text-[#0f4a9b] font-semibold hover:underline">
          what the command words actually ask for
        </a>.
      </>
    ),
    color: '#1e5bb3',
    fillPct: '70%',
    tag: 'Examiner Keywords Trained',
    icon: TrendingUp,
  },
  {
    num: '06',
    title: 'Practical & 6-Mark Answers',
    spec: 'Paper 6 · Ion Tests · Extended Logic',
    copy: 'Planning, ion tests and extended responses need structure, not more revision time.',
    color: '#0a1f3d',
    fillPct: '65%',
    tag: 'Full Structure Templates',
    icon: FileText,
  },
];

// --- SECTION 04: BOARDS WE COVER DATA ---
const BOARDS: Array<{
  code: string;
  shortName: string;
  board: string;
  papers: ReactNode;
  focus: ReactNode;
}> = [
  {
    code: '0620',
    shortName: 'Cambridge',
    board: 'Cambridge IGCSE Chemistry',
    papers: 'Paper 1 or 2 (MCQ, Core or Extended), Paper 3 or 4 (Theory, Core or Extended), Paper 5 or 6 (Practical Test or Alternative to Practical)',
    focus: 'Mole ratios, qualitative inorganic analysis, stoichiometry & kinetic theory precision.',
  },
  {
    code: '4CH1',
    shortName: 'Edexcel IGCSE',
    board: 'Pearson Edexcel International GCSE',
    papers: 'Paper 1C (110 marks) & Paper 2C (70 marks)',
    focus: 'Detailed calculation chains, organic chemistry series, and industrial processes.',
  },
  {
    code: '8462',
    shortName: 'AQA GCSE',
    board: 'AQA GCSE Chemistry / 8464 Combined',
    papers: 'Paper 1 & Paper 2 (Foundation & Higher Tier)',
    focus: 'Required practicals, electrolysis discharge rules, and energy change profiles.',
  },
  {
    code: '1CH0',
    shortName: 'Edexcel GCSE',
    board: 'Pearson Edexcel GCSE Chemistry',
    papers: 'Paper 1 & Paper 2 (Higher Tier 100 marks each)',
    focus: 'Quantitative chemistry, dynamic equilibrium, transition metals, and polymers.',
  },
  {
    code: 'J248',
    shortName: 'OCR Gateway',
    board: 'OCR Gateway GCSE Chemistry A',
    papers: 'Paper 1 & Paper 2 (Higher & Foundation routes)',
    focus: 'Mathematical modelling, chemical cells, nanoparticles, and chemical analysis.',
  },
  {
    code: 'DP/A-L',
    shortName: 'A-Level & IB',
    board: 'A-Level & IB DP Chemistry (SL & HL)',
    papers: 'IB DP Papers 1 and 2 plus the Internal Assessment, and the full A-Level paper set',
    focus: (
      <>
        Thermodynamics, Born-Haber cycles, reaction mechanisms (SN1/SN2), and spectroscopic NMR/IR analysis for{' '}
        <a href="/ib-curriculum" className="text-[#0f4a9b] font-semibold hover:underline">
          IB DP chemistry
        </a>{' '}
        across{' '}
        <a href="/dp-hl" className="text-[#0f4a9b] font-semibold hover:underline">
          Higher Level
        </a>{' '}
        and{' '}
        <a href="/dp-sl" className="text-[#0f4a9b] font-semibold hover:underline">
          Standard Level chemistry
        </a>{' '}
        alongside full A-Level syllabus modules.
      </>
    ),
  },
];

// --- SECTION 04: INTERACTIVE BOARD ALIGNMENT CONSOLE ---
function BoardAlignmentConsole() {
  const [activeCode, setActiveCode] = useState<string>('0620');
  const activeBoard = BOARDS.find((b) => b.code === activeCode) || BOARDS[0];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Console Frame */}
      <div className="grid lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
        {/* Left Side: Board Selector Rail (Horizontally scrollable on mobile, column on desktop) */}
        <div className="lg:col-span-5 flex overflow-x-auto sm:grid sm:grid-cols-3 lg:grid-cols-1 gap-2 pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 flex-nowrap">
          {BOARDS.map((b) => {
            const isSelected = b.code === activeCode;
            return (
              <button
                key={b.code}
                type="button"
                onClick={() => setActiveCode(b.code)}
                className={`relative flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer flex-shrink-0 sm:flex-shrink ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#0f4a9b] to-[#1559b5] text-white border-[#0f4a9b] shadow-md shadow-[#0f4a9b]/20'
                    : 'bg-white/90 hover:bg-white text-slate-700 border-slate-200/90 hover:border-[#0f4a9b]/35 shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`px-1.5 py-0.5 rounded font-mono font-bold text-[10.5px] sm:text-[11px] flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-white/20 text-[#f0c96a] border border-white/30'
                        : 'bg-slate-100 text-slate-700 border border-slate-200/80'
                    }`}
                  >
                    {b.code}
                  </span>
                  <div className="min-w-0">
                    <div className={`text-xs sm:text-[13px] font-bold ${isSelected ? 'text-white' : 'text-[#0a1f3d]'}`}>
                      <span className="hidden lg:inline">{b.board}</span>
                      <span className="lg:hidden whitespace-nowrap">{b.shortName}</span>
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <ChevronRight className="w-4 h-4 text-[#f0c96a] flex-shrink-0 hidden lg:block ml-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Side: Active Specification Dossier */}
        <div className="lg:col-span-7">
          <div className="h-full rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 p-4 sm:p-5 shadow-[0_12px_32px_rgba(15,74,155,0.06)] relative overflow-hidden flex flex-col justify-between text-left">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />

            {/* Ambient Background Glow */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#0f4a9b]/5 rounded-full blur-2xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeBoard.code}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Bar: Code Chip & Badges */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-gradient-to-r from-[#0f4a9b] to-[#1559b5] text-[#f0c96a] font-mono font-bold text-xs shadow-xs">
                        {activeBoard.code}
                      </span>
                      <span className="text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        SPECIFICATION
                      </span>
                    </div>

                    <span className="text-[#0f4a9b] font-bold font-mono text-[10px] bg-amber-50 text-amber-900 border border-amber-200/60 px-2.5 py-0.5 rounded-full">
                      1-to-1 Specialist
                    </span>
                  </div>

                  {/* Board Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] mb-2.5 leading-snug">
                    {activeBoard.board}
                  </h3>

                  {/* Papers & Architecture */}
                  <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-2.5 sm:p-3 mb-2">
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#0f4a9b]" /> Exam Papers & Architecture
                    </div>
                    <div className="text-xs sm:text-[12.5px] font-semibold text-[#0f4a9b] leading-relaxed">
                      {activeBoard.papers}
                    </div>
                  </div>

                  {/* Focus & Mark Scheme Mechanics */}
                  <div className="bg-white rounded-xl border border-slate-200/70 p-2.5 sm:p-3 shadow-2xs mb-2">
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <FileText className="w-3 h-3 text-[#C7A24A]" /> Core Focus & Precision
                    </div>
                    <p className="text-xs sm:text-[12px] text-slate-700 leading-relaxed font-normal">
                      {activeBoard.focus}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-2 mt-1 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0f4a9b]" />
                    Mark Scheme Aligned
                  </span>
                  <span className="text-slate-400 text-[10px] hidden sm:inline">
                    Select any specification to inspect breakdown
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SECTION 05: 4-PHASE TERM PLAN DATA ---
const TERM_PHASES = [
  {
    phase: '01',
    name: 'September Diagnostic',
    subtitle: 'Baseline & Topic Mapping',
    desc: 'Diagnostic across atomic structure, bonding, moles and periodic table, mapped to syllabus to catch foundation gaps early.',
    tag: 'Topic-by-Topic Audit',
    color: '#0f4a9b',
    icon: ShieldCheck,
  },
  {
    phase: '02',
    name: 'November Mock Repair',
    subtitle: 'Mark-Loss Correction',
    desc: 'Post-mock repair focused on calculation chains, equation balancing and command-word precision across past papers.',
    tag: 'Mock Paper Dissection',
    color: '#C7A24A',
    icon: RefreshCw,
  },
  {
    phase: '03',
    name: 'February Mock Push',
    subtitle: 'Timed Exam Drills',
    desc: 'Paper-by-paper pacing, organic reaction pathways and rates and equilibrium explanations under strictly timed conditions.',
    tag: 'Full Timed Papers',
    color: '#0284c7',
    icon: Clock,
  },
  {
    phase: '04',
    name: 'May Final Sprint',
    subtitle: 'Grade Boundary Polish',
    desc: 'Targeting hardest discriminator questions: multi-step calculations, unfamiliar contexts and 6-mark answers for Grade 8/9.',
    tag: 'Grade 8 & 9 Push',
    color: '#f0c96a',
    icon: Award,
  },
];

// --- SECTION 06: TOPIC HUB DATA ---
const TOPICS = [
  {
    symbol: 'At',
    num: '01',
    title: 'Atomic Structure & Periodic Table',
    sub: 'Electron shells · Groups · Trends',
    desc: 'Core ideas every later topic builds on.',
    icon: <Atom className="w-4 h-4 text-[#0f4a9b]" />,
  },
  {
    symbol: 'Bd',
    num: '02',
    title: 'Bonding & Structure',
    sub: 'Ionic · Covalent · Metallic',
    desc: 'Why structure explains properties.',
    icon: <Layers className="w-4 h-4 text-[#C7A24A]" />,
  },
  {
    symbol: 'Mo',
    num: '03',
    title: 'Moles & Calculations',
    sub: 'Reacting masses · Gas volumes · Concentration',
    desc: 'Step-by-step method, unit checks included.',
    icon: <Calculator className="w-4 h-4 text-[#0f4a9b]" />,
  },
  {
    symbol: 'Ac',
    num: '04',
    title: 'Acids, Bases & Salts',
    sub: 'Titration · Neutralisation · Salt prep',
    desc: 'Calculation and practical together.',
    icon: <Droplet className="w-4 h-4 text-[#C7A24A]" />,
  },
  {
    symbol: 'El',
    num: '05',
    title: 'Electrochemistry',
    sub: 'Electrolysis · Half-equations · Cells',
    desc: 'Anode and cathode without the confusion.',
    icon: <Zap className="w-4 h-4 text-[#0f4a9b]" />,
  },
  {
    symbol: 'Rt',
    num: '06',
    title: 'Rates & Equilibrium',
    sub: 'Collision theory · Le Chatelier',
    desc: 'Graphs and explanation answers.',
    icon: <TrendingUp className="w-4 h-4 text-[#C7A24A]" />,
  },
  {
    symbol: 'Or',
    num: '07',
    title: 'Organic Chemistry',
    sub: 'Alkanes · Alkenes · Alcohols · Polymers',
    desc: 'Naming, reactions and mechanisms.',
    icon: <FlaskConical className="w-4 h-4 text-[#0f4a9b]" />,
  },
  {
    symbol: 'An',
    num: '08',
    title: 'Analysis & Practical',
    sub: 'Ion tests · Chromatography · Paper 6',
    desc: 'Planning and evaluation marks.',
    icon: <Flame className="w-4 h-4 text-[#C7A24A]" />,
  },
];

// --- SECTION 06: MINI ANIMATED CHEMICAL APPARATUS VISUALIZERS FOR EACH CARD ---
function MiniCardVisualizer({ index }: { index: number }) {
  if (index === 0) {
    // 0: Atomic Structure (Bohr Orbitals)
    return (
      <div className="relative w-full h-14 sm:h-16 rounded-xl bg-gradient-to-b from-blue-50/60 to-slate-100/80 border border-slate-200/70 flex items-center justify-center overflow-hidden mb-2">
        {/* Orbit 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="absolute w-12 h-12 rounded-full border border-dashed border-[#0f4a9b]/40 flex items-start justify-center"
        >
          <div className="w-1.5 h-1.5 -mt-0.5 rounded-full bg-[#0f4a9b] shadow-[0_0_4px_#0f4a9b]" />
        </motion.div>
        {/* Orbit 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'linear' }}
          className="absolute w-16 h-8 rounded-full border border-[#C7A24A]/50 flex items-end justify-center"
        >
          <div className="w-1.5 h-1.5 -mb-0.5 rounded-full bg-[#C7A24A] shadow-[0_0_4px_#C7A24A]" />
        </motion.div>
        {/* Nucleus */}
        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#0a1f3d] to-[#0f4a9b] flex items-center justify-center text-[6.5px] font-bold text-[#f0c96a] font-mono shadow-xs z-10">
          6p⁺
        </div>
        <div className="absolute bottom-1 right-2 text-[7.5px] font-mono text-slate-500 font-bold">
          1s² 2s² 2p²
        </div>
      </div>
    );
  }

  if (index === 1) {
    // 1: Bonding & Structure (Lattice / Ionic Attraction)
    return (
      <div className="relative w-full h-14 sm:h-16 rounded-xl bg-gradient-to-b from-blue-50/60 to-slate-100/80 border border-slate-200/70 flex items-center justify-center overflow-hidden mb-2">
        <div className="flex items-center gap-2 relative z-10">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-[7.5px] font-mono font-bold shadow-xs"
          >
            Na⁺
          </motion.div>
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], width: ['10px', '18px', '10px'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-[2px] bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-emerald-600 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[7.5px] font-mono font-bold shadow-xs"
          >
            Cl⁻
          </motion.div>
        </div>
        <div className="absolute bottom-0.5 right-2 text-[7.5px] font-mono text-emerald-700 font-bold">
          Lattice
        </div>
      </div>
    );
  }

  if (index === 2) {
    // 2: Moles & Calculations (Stoichiometric Conversion)
    return (
      <div className="relative w-full h-14 sm:h-16 rounded-xl bg-gradient-to-b from-blue-50/60 to-slate-100/80 border border-slate-200/70 flex flex-col items-center justify-center overflow-hidden mb-2 p-1">
        <div className="flex items-center gap-1 text-[9.5px] font-mono font-bold text-[#0a1f3d]">
          <span className="px-1 py-0.2 rounded bg-white border border-slate-200 text-[8px]">n</span>
          <span className="text-[#C7A24A]">=</span>
          <span className="px-1 py-0.2 rounded bg-[#0f4a9b] text-white text-[8px]">m/Mᵣ</span>
          <span className="text-[#C7A24A]">=</span>
          <span className="px-1 py-0.2 rounded bg-white border border-slate-200 text-[8px]">c×V</span>
        </div>
        <div className="text-[7.5px] font-mono text-[#0f4a9b] font-bold mt-1 bg-white/90 px-1.5 py-0.2 rounded-full border border-blue-100">
          6.02 × 10²³ mol⁻¹
        </div>
      </div>
    );
  }

  if (index === 3) {
    // 3: Acids, Bases & Salts (Titration Dropper & Indicator)
    return (
      <div className="relative w-full h-14 sm:h-16 rounded-xl bg-gradient-to-b from-blue-50/60 to-slate-100/80 border border-slate-200/70 flex items-center justify-center gap-3 overflow-hidden mb-2">
        {/* Burette Droplet */}
        <div className="flex flex-col items-center">
          <div className="w-2 h-4 bg-slate-300 rounded-t-xs relative">
            <div className="absolute inset-x-0 bottom-0 top-1 bg-rose-500" />
          </div>
          <motion.div
            animate={{ y: [0, 8], opacity: [1, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeIn' }}
            className="w-1 h-1.5 rounded-full bg-rose-500 mt-0.5"
          />
        </div>
        {/* pH Scale Indicator */}
        <div className="space-y-0.5">
          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-rose-500 via-emerald-400 to-indigo-600 relative">
            <motion.div
              animate={{ x: ['10%', '80%', '10%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2.5 h-2.5 -top-0.5 absolute bg-white rounded-full border border-slate-800 shadow-xs"
            />
          </div>
          <div className="flex justify-between text-[6.5px] font-mono font-bold text-slate-600">
            <span className="text-rose-600">pH 1</span>
            <span className="text-emerald-600">pH 7</span>
            <span className="text-indigo-600">pH 14</span>
          </div>
        </div>
      </div>
    );
  }

  if (index === 4) {
    // 4: Electrochemistry (Electrolysis Flow)
    return (
      <div className="relative w-full h-14 sm:h-16 rounded-xl bg-gradient-to-b from-blue-50/60 to-slate-100/80 border border-slate-200/70 flex items-center justify-center gap-2 overflow-hidden mb-2">
        <div className="flex flex-col items-center">
          <div className="w-2.5 h-6 bg-slate-700 rounded-xs text-[5px] text-white font-mono flex items-center justify-center font-bold">
            +
          </div>
          <span className="text-[6px] font-mono text-rose-700 font-bold">Anode</span>
        </div>
        <div className="w-12 flex flex-col items-center">
          <div className="h-[2px] w-full bg-slate-300 relative overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-2.5 h-full bg-[#0f4a9b]"
            />
          </div>
          <span className="text-[6.5px] font-mono text-[#0f4a9b] font-bold">e⁻ Flow</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-2.5 h-6 bg-amber-600 rounded-xs text-[5px] text-white font-mono flex items-center justify-center font-bold">
            -
          </div>
          <span className="text-[6px] font-mono text-blue-700 font-bold">Cathode</span>
        </div>
      </div>
    );
  }

  if (index === 5) {
    // 5: Rates & Equilibrium (Dynamic Equilibrium)
    return (
      <div className="relative w-full h-14 sm:h-16 rounded-xl bg-gradient-to-b from-blue-50/60 to-slate-100/80 border border-slate-200/70 flex flex-col items-center justify-center overflow-hidden mb-2">
        <div className="flex items-center gap-1 text-[9.5px] font-mono font-bold text-[#0a1f3d]">
          <span>Reactants</span>
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#C7A24A] font-bold text-xs"
          >
            ⇌
          </motion.span>
          <span>Products</span>
        </div>
        <div className="text-[7.5px] font-mono text-emerald-700 font-bold mt-0.5 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
          Le Chatelier Shift
        </div>
      </div>
    );
  }

  if (index === 6) {
    // 6: Organic Chemistry (Hydrocarbon Chain)
    return (
      <div className="relative w-full h-14 sm:h-16 rounded-xl bg-gradient-to-b from-blue-50/60 to-slate-100/80 border border-slate-200/70 flex items-center justify-center gap-1 overflow-hidden mb-2">
        <span className="px-1 py-0.2 rounded bg-white text-[8px] font-mono font-bold text-[#0a1f3d] border border-slate-200">
          C=C
        </span>
        <motion.span
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="text-[#0f4a9b] font-mono font-bold text-[10px]"
        >
          →
        </motion.span>
        <span className="px-1 py-0.2 rounded bg-[#0f4a9b] text-[8px] font-mono font-bold text-[#f0c96a]">
          C-OH
        </span>
        <div className="absolute bottom-0.5 right-2 text-[7px] font-mono text-slate-500 font-bold">
          IUPAC
        </div>
      </div>
    );
  }

  // 7: Analysis & Practical (Chromatography Paper)
  return (
    <div className="relative w-full h-14 sm:h-16 rounded-xl bg-gradient-to-b from-blue-50/60 to-slate-100/80 border border-slate-200/70 flex items-center justify-center gap-2 overflow-hidden mb-2">
      <div className="w-10 h-11 bg-white rounded border border-slate-300 relative overflow-hidden flex flex-col justify-between p-0.5">
        <div className="border-b border-dashed border-slate-300 text-[4.5px] font-mono text-slate-500">
          Front
        </div>
        <div className="space-y-0.5 relative">
          <motion.div
            animate={{ y: [5, 0, 5] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-rose-500 ml-1"
          />
          <motion.div
            animate={{ y: [8, 0, 8] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }}
            className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] ml-4"
          />
        </div>
        <div className="border-t border-slate-300 text-[4.5px] font-mono text-slate-500">
          Base
        </div>
      </div>
      <div className="text-[7.5px] font-mono text-[#0a1f3d] font-bold">
        Rf = d₁ / d₀
      </div>
    </div>
  );
}

// --- SECTION 13: FAQS DATA ---
const CHEMISTRY_FAQS = [
  {
    q: 'Do you teach IGCSE, GCSE, A-Level and IB chemistry in Dubai?',
    a: 'Yes. We match a chemistry specialist to your child’s board: Cambridge IGCSE 0620, Edexcel 4CH1, AQA, Edexcel and OCR GCSE, A-Level and IB DP SL/HL.',
  },
  {
    q: 'How do I know which chemistry board my child sits?',
    a: 'Tell us the school and year group, and we confirm the board and specification code before the first lesson.',
  },
  {
    q: 'My child is weak at moles and calculations. Can you help?',
    a: 'Yes. This is the most common gap we fix. We use a fixed step-by-step method with unit checks, then build up to multi-step exam questions.',
  },
  {
    q: 'Do you support Paper 6 and practical questions online?',
    a: 'Yes. We cover planning, ion tests, titration, chromatography and evaluation questions using diagrams and past-paper practice, even without lab access.',
  },
  {
    q: 'Is Combined Science chemistry covered as well as Triple?',
    a: 'Yes. We teach both routes, and we focus on the chemistry content your child’s paper actually examines.',
  },
  {
    q: 'Can chemistry lessons fit around Ramadan and school holidays?',
    a: 'Yes. We schedule lessons around fasting hours, iftar, UAE public holidays and mock periods.',
  },
  {
    q: 'My child is moving from IGCSE chemistry to A-Level or IB. How do you bridge the gap?',
    a: 'We run a bridging block on mole fluency, organic mechanisms and energetics, so the jump in depth doesn’t hit in the first term.',
  },
  {
    q: 'Can I try a lesson before committing?',
    a: 'Yes. The 30-minute free trial is a real diagnostic with a matched chemistry tutor.',
  },
];

// --- SECTION 12: REVIEWS DATA ---
const CHEMISTRY_REVIEWS = [
  {
    name: 'Parent of Year 11 Student, Dubai Community',
    initials: 'DC',
    subject: 'Cambridge IGCSE Chemistry (0620)',
    text: 'Our son was heading for a grade 5 in Cambridge IGCSE Chemistry at his Dubai school. His tutor worked through Paper 4 calculations live, rebuilt his electrolysis and organic notes, and showed exactly where he was dropping marks. He finished with a grade 7.',
  },
  {
    name: 'Tariq M., Arabian Ranches',
    initials: 'TM',
    subject: 'Edexcel IGCSE Chemistry (4CH1)',
    text: 'Six-mark organic answers went from vague bullet points to structured, full-mark responses. The step-by-step mole calculation method made a massive difference before mock exams.',
  },
  {
    name: 'Sarah K., Emirates Hills',
    initials: 'SK',
    subject: 'IB DP Chemistry HL',
    text: 'Rebuilt kinetics, energetics and organic reaction mechanisms with clear digital whiteboard notes. The tutor tailored every session to the exact IB mark schemes.',
  },
];

function ReviewsScroller() {
  const n = CHEMISTRY_REVIEWS.length;
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (n <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % n), 5500);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [n]);

  const go = (idx: number) => {
    if (n <= 1) return;
    setActive(((idx % n) + n) % n);
    startTimer();
  };

  const prevIdx = (active - 1 + n) % n;
  const nextIdx = (active + 1) % n;

  const SideCard = ({ idx }: { idx: number }) => (
    <button
      type="button"
      onClick={() => go(idx)}
      className="hidden md:block w-[22%] shrink-0 text-left opacity-40 hover:opacity-70 transition duration-300 cursor-pointer"
      aria-label={`Show review by ${CHEMISTRY_REVIEWS[idx].name}`}
    >
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs relative overflow-hidden h-full">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]" />
        <div className="flex gap-0.5 mb-2">
          {[1, 2, 3, 4, 5].map((j) => (
            <Star key={j} className="h-3 w-3 fill-[#C7A24A] text-[#C7A24A]" />
          ))}
        </div>
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">&ldquo;{CHEMISTRY_REVIEWS[idx].text}&rdquo;</p>
        <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-100">
          <div
            className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-[10px] notranslate shrink-0"
            translate="no"
          >
            {CHEMISTRY_REVIEWS[idx].initials}
          </div>
          <span className="font-bold text-[#0a1f3d] text-xs notranslate truncate" translate="no">
            {CHEMISTRY_REVIEWS[idx].name.split(',')[0]}
          </span>
        </div>
      </div>
    </button>
  );

  const r = CHEMISTRY_REVIEWS[active];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-stretch gap-3 lg:gap-4">
        <SideCard idx={prevIdx} />

        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_32px_rgba(15,74,155,0.08)] relative overflow-hidden text-left"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Star key={j} className="h-4 w-4 fill-[#C7A24A] text-[#C7A24A]" />
                  ))}
                </div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
                  Parent Testimonial
                </span>
              </div>
              <p className="text-[#374151] text-[15px] sm:text-[16px] leading-relaxed mb-6 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_8px_rgba(15,74,155,0.28)] notranslate shrink-0"
                  translate="no"
                >
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold text-[#0a1f3d] text-[15px] notranslate truncate" translate="no">
                    {r.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5 truncate">{r.subject} · Parent Feedback</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <SideCard idx={nextIdx} />
      </div>
    </div>
  );
}

// --- SECTION 08: INTERACTIVE ANIMATED PROGRESSION ARC ---
function GradeTransitionInteractive() {
  const [activeStage, setActiveStage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const stages = [
    {
      id: 0,
      badge: 'Starting Baseline',
      grade: 'Grade 4 / C',
      desc: 'Gaps in mole calculations & redox',
      ph: 'Starting Concentration',
      beaconLabel: 'Baseline',
      color: '#e11d48',
      bgLight: 'bg-rose-50/80',
      borderLight: 'border-rose-400',
      activeShadow: 'shadow-[0_6px_20px_rgba(225,29,72,0.12)]',
      barPos: '16%',
      fillWidth: '22%',
    },
    {
      id: 1,
      badge: 'TYPICAL ARC',
      grade: 'First Mock → Final Paper',
      desc: 'First mock, second mock, final paper',
      ph: 'Titrating Toward Endpoint',
      beaconLabel: 'Mock Progress',
      color: '#d97706',
      bgLight: 'bg-amber-50/80',
      borderLight: 'border-amber-400',
      activeShadow: 'shadow-[0_6px_20px_rgba(217,119,6,0.14)]',
      barPos: '50%',
      fillWidth: '60%',
    },
    {
      id: 2,
      badge: 'Final Outcome',
      grade: 'Grade 7–9 (A/A*)',
      desc: 'Full-mark 6-mark answers & Paper 6 fluency',
      ph: 'Endpoint Reached',
      beaconLabel: 'Mastery',
      color: '#0f4a9b',
      bgLight: 'bg-blue-50/80',
      borderLight: 'border-blue-400',
      activeShadow: 'shadow-[0_6px_20px_rgba(15,74,155,0.14)]',
      barPos: '84%',
      fillWidth: '100%',
    },
  ];

  return (
    <div className="relative p-3.5 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_24px_rgba(15,74,155,0.06)] overflow-hidden text-left">
      {/* Top glowing accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-[#f0c96a] to-[#0f4a9b]" />

      {/* Ambient glowing radial effects */}
      <div className="absolute -top-12 left-1/4 w-36 h-36 bg-blue-100/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 right-1/4 w-36 h-36 bg-amber-100/35 rounded-full blur-2xl pointer-events-none" />

      {/* Header Spectrum Labels */}
      <div className="flex flex-wrap items-center justify-between text-[9.5px] sm:text-[10.5px] font-mono pb-2 mb-2.5 border-b border-slate-100 gap-1.5 relative z-10">
        <span className="flex items-center gap-1.5 text-rose-600 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          STARTING CONCENTRATION (GRADE 4 / FOUNDATION)
        </span>
        <span className="text-[#0f4a9b] font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[9px] sm:text-[10px]">
          TITRATING TOWARD THE ENDPOINT
        </span>
        <span className="flex items-center gap-1.5 text-[#0f4a9b] font-bold">
          ENDPOINT REACHED (GRADE 7–9 / MASTERY)
          <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] animate-pulse" />
        </span>
      </div>

      {/* Animated Spectrum Progress Track */}
      <div className="relative mb-3.5 pt-1.5 pb-2 relative z-10">
        <div className="h-2.5 sm:h-3 w-full rounded-full bg-slate-100 p-0.5 border border-slate-200/80 relative overflow-hidden shadow-inner flex items-center">
          {/* Animated Spectrum Gradient Fill */}
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-rose-500 via-[#f0c96a] to-[#0f4a9b]"
            animate={{ width: stages[activeStage].fillWidth }}
            transition={{ type: 'spring', stiffness: 100, damping: 14 }}
          />
        </div>

        {/* Floating Indicator Beacon */}
        <motion.div
          animate={{ left: stages[activeStage].barPos }}
          transition={{ type: 'spring', stiffness: 100, damping: 14 }}
          className="absolute -top-1.5 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20"
        >
          <div className="px-2 py-0.5 rounded-full bg-[#0a1f3d] text-white font-mono font-black text-[10px] shadow-[0_3px_10px_rgba(10,31,61,0.3)] border-2 border-white flex items-center gap-1">
            <span>{stages[activeStage].beaconLabel}</span>
          </div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#0a1f3d] -mt-1" />
        </motion.div>
      </div>

      {/* 3 Interactive Sub-Cards */}
      <div className="grid sm:grid-cols-3 gap-2.5 sm:gap-3 items-stretch relative z-10">
        {stages.map((st, idx) => {
          const isActive = activeStage === idx;
          return (
            <motion.button
              key={st.id}
              onClick={() => setActiveStage(idx)}
              whileHover={{ y: -1.5 }}
              animate={{
                scale: isActive ? 1.02 : 0.98,
              }}
              transition={{ duration: 0.2 }}
              className={`p-3 sm:p-3.5 rounded-xl text-left flex flex-col justify-between transition-all duration-300 relative overflow-hidden cursor-pointer ${
                isActive
                  ? `bg-white border-2 ${st.borderLight} ${st.activeShadow}`
                  : 'bg-slate-50/70 border border-slate-200/80 hover:bg-slate-100/60'
              }`}
            >
              {/* Subtle top indicator bar */}
              {isActive && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: st.color }}
                />
              )}

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className="text-[9.5px] font-mono uppercase tracking-wider font-extrabold"
                    style={{ color: isActive ? st.color : '#64748b' }}
                  >
                    {st.badge}
                  </span>
                  <span
                    className="text-[8.5px] font-mono px-1.5 py-0.5 rounded border font-semibold"
                    style={{
                      borderColor: isActive ? st.color : '#cbd5e1',
                      color: isActive ? st.color : '#64748b',
                      background: isActive ? `${st.color}12` : '#ffffff',
                    }}
                  >
                    {st.ph}
                  </span>
                </div>

                <div
                  className="text-base sm:text-lg font-black mb-1 transition-colors leading-tight"
                  style={{ color: isActive ? '#0a1f3d' : '#334155' }}
                >
                  {st.grade}
                </div>

                <p className="text-[10.5px] sm:text-[11px] text-slate-600 leading-snug font-normal">
                  {st.desc}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-500">
                <span className="font-mono">{idx === 0 ? 'Stage 1' : idx === 1 ? 'Progress Phase' : 'Target Goal'}</span>
                {isActive && (
                  <span className="flex items-center gap-1 font-bold font-mono" style={{ color: st.color }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ background: st.color }} />
                    Active
                  </span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// SECTION 09: ANIMATED CHEMISTRY BADGES
// ==========================================

// 1. Live 1-to-1 Interactive Whiteboard & Benzene Molecule Badge
function LiveWhiteboardMoleculeBadge() {
  return (
    <div className="relative w-full h-20 sm:h-22 rounded-xl bg-gradient-to-b from-[#f0f6fc] to-[#e8f1fb] border border-blue-100/80 overflow-hidden flex items-center justify-center p-2 mb-2.5 group-hover:border-[#0f4a9b]/40 transition-colors duration-300">
      {/* Blueprint Grid lines */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0f4a9b 0.75px, transparent 0.75px)',
          backgroundSize: '12px 12px'
        }}
      />

      {/* Floating live tag */}
      <div className="absolute top-1.5 left-2 z-10 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white/90 backdrop-blur-xs border border-blue-200/80 shadow-2xs text-[9px] font-mono font-bold text-[#0a1f3d]">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>LIVE LAB</span>
      </div>

      {/* Specialist 1-to-1 tag */}
      <div className="absolute top-1.5 right-2 z-10 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#0a1f3d] text-[#f0c96a] text-[8.5px] font-mono font-bold shadow-2xs">
        <Video className="w-2 h-2" />
        <span>1-to-1</span>
      </div>

      {/* Central Interactive Benzene / Molecule Structure SVG */}
      <div className="relative z-0 flex items-center justify-center">
        <svg width="110" height="60" viewBox="0 0 130 90" fill="none" className="overflow-visible">
          {/* Hexagonal Rings - Benzene Molecular System */}
          <polygon
            points="45,15 65,26 65,50 45,61 25,50 25,26"
            stroke="#0f4a9b"
            strokeWidth="2"
            fill="rgba(15, 74, 155, 0.05)"
            strokeLinejoin="round"
          />
          <motion.circle
            cx="45"
            cy="38"
            r="12"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ originX: "45px", originY: "38px" }}
          />

          <polygon
            points="85,15 105,26 105,50 85,61 65,50 65,26"
            stroke="#0f4a9b"
            strokeWidth="2"
            fill="rgba(15, 74, 155, 0.05)"
            strokeLinejoin="round"
          />
          <motion.circle
            cx="85"
            cy="38"
            r="12"
            stroke="#f0c96a"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ originX: "85px", originY: "38px" }}
          />

          <line x1="45" y1="15" x2="45" y2="4" stroke="#0f4a9b" strokeWidth="2" strokeLinecap="round" />
          <circle cx="45" cy="4" r="3.5" fill="#f0c96a" stroke="#0a1f3d" strokeWidth="1" />

          {[
            { cx: 25, cy: 26, color: "#0f4a9b" },
            { cx: 25, cy: 50, color: "#0284c7" },
            { cx: 45, cy: 61, color: "#0f4a9b" },
            { cx: 65, cy: 26, color: "#0a1f3d" },
            { cx: 65, cy: 50, color: "#0a1f3d" },
            { cx: 85, cy: 61, color: "#0f4a9b" },
            { cx: 105, cy: 26, color: "#0284c7" },
            { cx: 105, cy: 50, color: "#0f4a9b" },
            { cx: 85, cy: 15, color: "#0f4a9b" },
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r={2.8}
              fill={node.color}
              animate={{ r: [2.8, 3.8, 2.8], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25 }}
            />
          ))}

          {/* Orbiting reaction particle */}
          <motion.circle
            r="2.5"
            fill="#38bdf8"
            animate={{
              cx: [25, 45, 65, 85, 105, 85, 65, 45, 25],
              cy: [26, 15, 26, 15, 26, 50, 61, 50, 26],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Floating chemical reaction banner at bottom */}
      <div className="absolute bottom-1.5 left-2 right-2 z-10 flex items-center justify-between px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs border border-blue-100 shadow-2xs">
        <span className="font-mono text-[9px] font-bold text-[#0f4a9b] tracking-tight">
          2H₂ + O₂ ⇌ 2H₂O
        </span>
        <span className="text-[8px] font-mono text-slate-500 font-semibold">
          Equilibrium · Whiteboard
        </span>
      </div>
    </div>
  );
}

// 2. Recorded for Revision - Animated Distillation & Kinetic Replay Flask Badge
function RecordedDistillationBadge() {
  return (
    <div className="relative w-full h-20 sm:h-22 rounded-xl bg-gradient-to-b from-[#f0fbf8] to-[#e6f7f2] border border-emerald-100/80 overflow-hidden flex items-center justify-center p-2 mb-2.5 group-hover:border-[#0f4a9b]/40 transition-colors duration-300">
      {/* Blueprint Grid lines */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#059669 0.75px, transparent 0.75px)',
          backgroundSize: '12px 12px'
        }}
      />

      {/* Floating speed badge */}
      <div className="absolute top-1.5 left-2 z-10 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white/90 backdrop-blur-xs border border-emerald-200/80 shadow-2xs text-[9px] font-mono font-bold text-[#0a1f3d]">
        <RefreshCw className="w-2.5 h-2.5 text-[#059669] animate-spin" style={{ animationDuration: '6s' }} />
        <span>REPLAY ARCHIVE</span>
      </div>

      {/* Speed multiplier pill */}
      <div className="absolute top-1.5 right-2 z-10 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-gradient-to-r from-[#0a1f3d] to-[#0f4a9b] text-[#f0c96a] text-[8.5px] font-mono font-extrabold shadow-2xs">
        <span>1.25x / 1.5x</span>
      </div>

      {/* Central Conical Flask SVG */}
      <div className="relative z-0 flex items-center justify-center">
        <svg width="100" height="60" viewBox="0 0 120 90" fill="none" className="overflow-visible">
          <ellipse
            cx="60"
            cy="52"
            rx="46"
            ry="18"
            stroke="#059669"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            opacity="0.4"
          />

          {/* Rotating scrubber particle */}
          <motion.circle
            r="2.8"
            fill="#059669"
            animate={{
              cx: [14, 60, 106, 60, 14],
              cy: [52, 34, 52, 70, 52],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          />

          <path
            d="M 52 14 L 68 14 L 68 28 L 86 64 C 88 68 85 72 80 72 L 40 72 C 35 72 32 68 34 64 L 52 28 Z"
            fill="rgba(255, 255, 255, 0.85)"
            stroke="#0a1f3d"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          <rect x="50" y="11" width="20" height="3.5" rx="1.5" fill="#0a1f3d" />

          <path
            d="M 40 52 C 48 50, 54 54, 60 52 C 66 50, 72 54, 80 52 L 84 65 C 85 68 83 70 79 70 L 41 70 C 37 70 35 68 36 65 Z"
            fill="url(#liquidGradRevision)"
            opacity="0.9"
          />

          <line x1="58" y1="42" x2="63" y2="42" stroke="#0a1f3d" strokeWidth="1" opacity="0.6" />
          <line x1="56" y1="48" x2="63" y2="48" stroke="#0a1f3d" strokeWidth="1.2" opacity="0.8" />
          <line x1="54" y1="54" x2="63" y2="54" stroke="#0a1f3d" strokeWidth="1" opacity="0.6" />
          <line x1="51" y1="60" x2="63" y2="60" stroke="#0a1f3d" strokeWidth="1.2" opacity="0.8" />

          <motion.circle
            cx="50"
            cy="65"
            r="2"
            fill="#ffffff"
            animate={{ cy: [65, 46, 32], opacity: [0, 0.9, 0], scale: [0.8, 1.2, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.circle
            cx="62"
            cy="66"
            r="2.8"
            fill="#ffffff"
            animate={{ cy: [66, 44, 26], opacity: [0, 1, 0], scale: [0.7, 1.3, 0.4] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
          />

          <defs>
            <linearGradient id="liquidGradRevision" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="60%" stopColor="#059669" />
              <stop offset="100%" stopColor="#0f4a9b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating note at bottom */}
      <div className="absolute bottom-1.5 left-2 right-2 z-10 flex items-center justify-between px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs border border-emerald-100 shadow-2xs">
        <span className="font-mono text-[9px] font-bold text-[#059669] tracking-tight">
          Half-Equation Derivations
        </span>
        <span className="text-[8px] font-mono text-slate-500 font-semibold">
          High-Def Video
        </span>
      </div>
    </div>
  );
}

// 3. Ramadan-Friendly Timing - Celestial Crescent & Orbital Atomic Clock Badge
function RamadanAtomicClockBadge() {
  return (
    <div className="relative w-full h-20 sm:h-22 rounded-xl bg-gradient-to-b from-[#fbf8f0] to-[#f7f0df] border border-amber-200/80 overflow-hidden flex items-center justify-center p-2 mb-2.5 group-hover:border-[#0f4a9b]/40 transition-colors duration-300">
      {/* Blueprint Grid lines */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#d97706 0.75px, transparent 0.75px)',
          backgroundSize: '12px 12px'
        }}
      />

      {/* Floating timing tag */}
      <div className="absolute top-1.5 left-2 z-10 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white/90 backdrop-blur-xs border border-amber-200/80 shadow-2xs text-[9px] font-mono font-bold text-[#0a1f3d]">
        <Clock className="w-2.5 h-2.5 text-[#d97706] animate-pulse" />
        <span>ADAPTIVE HOURS</span>
      </div>

      {/* Ramadan schedule tag */}
      <div className="absolute top-1.5 right-2 z-10 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#0a1f3d] text-[#f0c96a] text-[8.5px] font-mono font-bold shadow-2xs">
        <span>Iftar &amp; Holiday</span>
      </div>

      {/* Central Celestial Crescent & Atomic Orbital SVG */}
      <div className="relative z-0 flex items-center justify-center">
        <svg width="110" height="60" viewBox="0 0 130 90" fill="none" className="overflow-visible">
          {/* Orbital Electron Ring 1 */}
          <ellipse
            cx="65"
            cy="45"
            rx="48"
            ry="17"
            stroke="#0f4a9b"
            strokeWidth="1.4"
            strokeDasharray="5 3"
            transform="rotate(-25 65 45)"
            opacity="0.55"
          />

          {/* Orbital Electron Ring 2 */}
          <ellipse
            cx="65"
            cy="45"
            rx="48"
            ry="17"
            stroke="#d97706"
            strokeWidth="1.4"
            strokeDasharray="5 3"
            transform="rotate(35 65 45)"
            opacity="0.55"
          />

          {/* Orbiting Electron Node 1 */}
          <motion.circle
            r="2.8"
            fill="#0f4a9b"
            animate={{
              cx: [20, 65, 110, 65, 20],
              cy: [58, 30, 32, 60, 58],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          {/* Orbiting Electron Node 2 */}
          <motion.circle
            r="2.8"
            fill="#d97706"
            animate={{
              cx: [25, 65, 105, 65, 25],
              cy: [30, 62, 58, 28, 30],
            }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "linear" }}
          />

          {/* Crescent Moon & Atomic Nucleus Fusion */}
          <g transform="translate(50, 30)">
            <path
              d="M 16 0 C 7.16 0 0 7.16 0 16 C 0 24.84 7.16 32 16 32 C 19.5 32 22.7 30.9 25.4 29 C 17.5 27.5 11.5 20.5 11.5 12 C 11.5 7.2 13.7 2.9 17.2 0.2 C 16.8 0.1 16.4 0 16 0 Z"
              fill="url(#goldCrescentGrad)"
              filter="drop-shadow(0 2px 6px rgba(217, 119, 6, 0.35))"
            />
            {/* Glowing Atomic Core / Star */}
            <circle cx="21" cy="11" r="3.5" fill="#f0c96a" stroke="#0a1f3d" strokeWidth="1" />
            <motion.circle
              cx="21"
              cy="11"
              r="6"
              fill="none"
              stroke="#f0c96a"
              strokeWidth="1.2"
              animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>

          <defs>
            <linearGradient id="goldCrescentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f0c96a" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating note at bottom */}
      <div className="absolute bottom-1.5 left-2 right-2 z-10 flex items-center justify-between px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs border border-amber-200 shadow-2xs">
        <span className="text-[8.5px] font-mono text-slate-500 font-semibold">
          School &amp; Iftar Aligned
        </span>
      </div>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT: ChemistryTutorDubaiPage
// ==========================================
export default function ChemistryTutorDubaiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      <SEOHead
        title="Chemistry Tutor Dubai | IGCSE, GCSE, A-Level & IB | Ustaad"
        description="One-to-one online chemistry tutors in Dubai for IGCSE, GCSE, A-Level and IB. Fix mole calculations, organic and 6-mark answers. Book a free trial."
        keywords="chemistry tutor Dubai, IGCSE chemistry tutor Dubai, GCSE chemistry tutor Dubai, A-Level chemistry tutor Dubai, IB chemistry tutor Dubai, online chemistry tuition Dubai, private chemistry tutor UAE"
        canonical="/chemistry-tutor-dubai"
        placename="Dubai, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Dubai',
            url: '/chemistry-tutor-dubai',
            name: 'Ustaad · Chemistry Tutor Dubai',
            description:
              'Expert 1-to-1 online chemistry tutoring across Dubai for IGCSE, GCSE, A-Level and IB curricula.',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Subjects', url: '/subjects' },
            { name: 'Chemistry Tutor Dubai', url: '/chemistry-tutor-dubai' },
          ]),
          serviceSchema(
            'Chemistry Tutoring Dubai',
            'Targeted one-to-one online tuition covering Cambridge 0620, Edexcel 4CH1, AQA, OCR, A-Level and IB DP Chemistry.',
            '/chemistry-tutor-dubai'
          ),
          faqSchema(CHEMISTRY_FAQS),
          reviewSchema('Chemistry Tutoring Dubai', [
            {
              author: 'Parent in Dubai',
              reviewBody:
                'Our son was heading for a grade 5 in Cambridge IGCSE Chemistry at his Dubai school. His tutor worked through Paper 4 calculations live, rebuilt his electrolysis and organic notes, and showed exactly where he was dropping marks. He finished with a grade 7.',
              ratingValue: 5,
            },
          ]),
        ]}
      />

      {/* ── HERO SECTION (USTAAD SIGNATURE NAVY & GOLD) ── */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center min-h-[78vh] md:min-h-[74vh]">
        {/* Seamless Merged Chemistry Canvas Backdrop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Ambient Radial Color Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#0f4a9b]/25 via-[#0284c7]/15 to-[#f0c96a]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/4 left-[8%] w-80 h-80 bg-[#0f4a9b]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-[8%] w-80 h-80 bg-[#f0c96a]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Mobile Chemistry Vector Canvas */}
          <svg viewBox="0 0 420 720" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full md:hidden" aria-hidden="true">
            <defs>
              <linearGradient id="chemCyanGradMob" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="chemGoldGradMob" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.3" />
              </linearGradient>
              <radialGradient id="chemFlaskFluidMob" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0.15" />
              </radialGradient>
              <filter id="chemGlowMob"><feGaussianBlur stdDeviation="2.5" /></filter>
            </defs>

            {/* Subtle Mobile Dot Matrix */}
            {(() => {
              const dots: ReactNode[] = [];
              for (let x = 20; x < 420; x += 40)
                for (let y = 20; y < 720; y += 40)
                  dots.push(<circle key={`m_dot_${x}_${y}`} cx={x} cy={y} r="0.9" fill="rgba(255,255,255,0.05)" />);
              return dots;
            })()}

            {/* TOP-LEFT: Aromatic Benzene Ring & Bonding */}
            <g transform="translate(10, 35)" opacity="0.9">
              <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="rgba(95,211,230,0.04)" stroke="url(#chemCyanGradMob)" strokeWidth="1.6" strokeLinejoin="round" />
              <polygon points="80,32 110,15 140,32 140,68 110,85 80,68" fill="rgba(240,201,106,0.03)" stroke="url(#chemGoldGradMob)" strokeWidth="1.6" strokeLinejoin="round" />
              <circle cx="50" cy="50" r="16" stroke="rgba(95,211,230,0.6)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
              <circle cx="110" cy="50" r="16" stroke="rgba(240,201,106,0.6)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
              <circle cx="20" cy="32" r="2.8" fill="#5fd3e6" />
              <circle cx="50" cy="15" r="2.8" fill="#f0c96a" />
              <circle cx="80" cy="32" r="3.6" fill="#ffffff" filter="url(#chemGlowMob)" />
              <circle cx="110" cy="15" r="2.8" fill="#5fd3e6" />
              <circle cx="140" cy="32" r="2.8" fill="#f0c96a" />
              <circle cx="140" cy="68" r="2.8" fill="#5fd3e6" />
              <circle cx="110" cy="85" r="2.8" fill="#f0c96a" />
              <circle cx="50" cy="85" r="2.8" fill="#5fd3e6" />
              <circle cx="20" cy="68" r="2.8" fill="#f0c96a" />
              <text x="15" y="105" fill="rgba(95,211,230,0.75)" fontSize="9" fontFamily="monospace" fontWeight="bold">C₆H₆ Resonance</text>
            </g>

            {/* TOP-RIGHT: Atomic Orbital with Orbiting Electrons */}
            <g transform="translate(260, 40)" opacity="0.9">
              <ellipse cx="75" cy="55" rx="65" ry="22" transform="rotate(-30 75 55)" stroke="url(#chemGoldGradMob)" strokeWidth="1.3" fill="none" strokeDasharray="5 3" />
              <ellipse cx="75" cy="55" rx="65" ry="22" transform="rotate(30 75 55)" stroke="url(#chemCyanGradMob)" strokeWidth="1.3" fill="none" strokeDasharray="5 3" />
              <circle cx="75" cy="55" r="5" fill="#f0c96a" />
              <circle cx="25" cy="30" r="3" fill="#5fd3e6" filter="url(#chemGlowMob)" />
              <circle cx="125" cy="80" r="3" fill="#f0c96a" filter="url(#chemGlowMob)" />
              <circle cx="120" cy="30" r="2.5" fill="#ffffff" />
              <text x="35" y="102" fill="rgba(240,201,106,0.75)" fontSize="9" fontFamily="monospace">e⁻ Configuration</text>
            </g>

            {/* MID BACKGROUND: Floating Chemistry Formula Linework */}
            <g opacity="0.6">
              <text x="25" y="240" fill="rgba(95,211,230,0.5)" fontSize="10" fontFamily="monospace">pH = -log[H⁺]</text>
              <text x="310" y="240" fill="rgba(240,201,106,0.5)" fontSize="10" fontFamily="monospace">ΔH &lt; 0</text>
              <text x="25" y="470" fill="rgba(240,201,106,0.55)" fontSize="10" fontFamily="monospace" fontWeight="bold">n = c × V</text>
              <text x="280" y="470" fill="rgba(95,211,230,0.55)" fontSize="10" fontFamily="monospace">PV = nRT</text>
            </g>

            {/* BOTTOM-RIGHT: Conical Flask Silhouette with Kinetic Bubbles */}
            <g transform="translate(295, 520)" opacity="0.85">
              <path
                d="M 50 20 L 68 20 L 68 36 L 92 85 C 95 90 91 95 85 95 L 33 95 C 27 95 23 90 26 85 L 50 36 Z"
                fill="url(#chemFlaskFluidMob)"
                stroke="#5fd3e6"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <rect x="48" y="17" width="22" height="3" rx="1" fill="#5fd3e6" />
              <line x1="62" y1="52" x2="68" y2="52" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
              <line x1="60" y1="64" x2="68" y2="64" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
              <line x1="58" y1="76" x2="68" y2="76" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
              <circle cx="52" cy="85" r="1.8" fill="#ffffff" opacity="0.9" />
              <circle cx="62" cy="78" r="2.5" fill="#f0c96a" opacity="0.95" />
              <circle cx="72" cy="82" r="1.8" fill="#5fd3e6" opacity="0.9" />
              <text x="20" y="112" fill="rgba(95,211,230,0.7)" fontSize="8.5" fontFamily="monospace">Volumetric</text>
            </g>

            {/* BOTTOM-LEFT: Reaction Equilibrium Line */}
            <g transform="translate(15, 545)" opacity="0.85">
              <rect x="0" y="0" width="130" height="26" rx="6" fill="rgba(15,74,155,0.25)" stroke="rgba(95,211,230,0.3)" strokeWidth="1" />
              <text x="8" y="17" fill="rgba(95,211,230,0.85)" fontSize="9" fontFamily="monospace" fontWeight="bold">2H₂ + O₂ ⇌ 2H₂O</text>
              <text x="8" y="38" fill="rgba(240,201,106,0.7)" fontSize="8" fontFamily="monospace">ΔH = -483.6 kJ/mol</text>
            </g>
          </svg>

          {/* Desktop Merged Chemistry Vector Canvas */}
          <svg viewBox="0 0 1440 650" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full hidden md:block" aria-hidden="true">
            <defs>
              <linearGradient id="chemCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="chemGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.25" />
              </linearGradient>
              <radialGradient id="chemFlaskFluid" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0f4a9b" stopOpacity="0.1" />
              </radialGradient>
              <filter id="chemGlowEffect"><feGaussianBlur stdDeviation="3" /></filter>
              <marker id="chemArrowHead" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(95,211,230,0.8)" />
              </marker>
            </defs>

            {/* Subtle Laboratory Dot Matrix */}
            {(() => {
              const dots: ReactNode[] = [];
              for (let x = 40; x < 1440; x += 55)
                for (let y = 30; y < 650; y += 55)
                  dots.push(<circle key={`chem_dot_${x}_${y}`} cx={x} cy={y} r="1" fill="rgba(255,255,255,0.035)" />);
              return dots;
            })()}

            {/* ── LEFT FLANK: BENZENE MOLECULAR RESONANCE & REACTION PATHWAY ── */}
            <g transform="translate(60, 160)" opacity="0.85">
              {/* Connected Aromatic Hexagons */}
              <polygon points="90,40 130,62 130,108 90,130 50,108 50,62" fill="rgba(95,211,230,0.03)" stroke="url(#chemCyanGrad)" strokeWidth="1.8" strokeLinejoin="round" />
              <polygon points="130,62 170,40 210,62 210,108 170,130 130,108" fill="rgba(240,201,106,0.03)" stroke="url(#chemGoldGrad)" strokeWidth="1.8" strokeLinejoin="round" />
              <polygon points="90,130 130,152 130,198 90,220 50,198 50,152" fill="rgba(95,211,230,0.02)" stroke="rgba(95,211,230,0.4)" strokeWidth="1.4" strokeLinejoin="round" strokeDasharray="5 4" />

              {/* Resonance Circles */}
              <circle cx="90" cy="85" r="22" stroke="rgba(95,211,230,0.5)" strokeWidth="1.2" strokeDasharray="4 3" fill="none" />
              <circle cx="170" cy="85" r="22" stroke="rgba(240,201,106,0.5)" strokeWidth="1.2" strokeDasharray="4 3" fill="none" />

              {/* Bonding Nodes */}
              <circle cx="50" cy="62" r="3.5" fill="#5fd3e6" />
              <circle cx="90" cy="40" r="3.5" fill="#f0c96a" />
              <circle cx="130" cy="62" r="4.5" fill="#ffffff" filter="url(#chemGlowEffect)" />
              <circle cx="170" cy="40" r="3.5" fill="#5fd3e6" />
              <circle cx="210" cy="62" r="3.5" fill="#f0c96a" />
              <circle cx="210" cy="108" r="3.5" fill="#5fd3e6" />
              <circle cx="170" cy="130" r="3.5" fill="#f0c96a" />
              <circle cx="90" cy="220" r="3.5" fill="#5fd3e6" />

              {/* Reaction Equilibrium Annotation */}
              <text x="35" y="270" fill="rgba(95,211,230,0.6)" fontSize="12" fontFamily="monospace" fontWeight="bold">2H₂ + O₂ ⇌ 2H₂O</text>
              <text x="35" y="292" fill="rgba(240,201,106,0.6)" fontSize="11" fontFamily="monospace">ΔH = -483.6 kJ/mol</text>
              <text x="35" y="15" fill="rgba(255,255,255,0.4)" fontSize="10.5" fontFamily="monospace">C₆H₆ Resonance</text>
            </g>

            {/* ── RIGHT FLANK: VOLUMETRIC GLASSWARE & ATOMIC ORBITALS ── */}
            <g transform="translate(1120, 150)" opacity="0.85">
              {/* Atomic Electron Orbital Ellipses */}
              <ellipse cx="140" cy="130" rx="130" ry="42" transform="rotate(-30 140 130)" stroke="url(#chemGoldGrad)" strokeWidth="1.4" fill="none" strokeDasharray="6 4" />
              <ellipse cx="140" cy="130" rx="130" ry="42" transform="rotate(30 140 130)" stroke="url(#chemCyanGrad)" strokeWidth="1.4" fill="none" strokeDasharray="6 4" />

              {/* Orbiting Electron Nodes */}
              <circle cx="45" cy="80" r="4" fill="#f0c96a" filter="url(#chemGlowEffect)" />
              <circle cx="235" cy="80" r="4" fill="#5fd3e6" filter="url(#chemGlowEffect)" />

              {/* Conical Flask Silhouette */}
              <path
                d="M 125 70 L 155 70 L 155 95 L 190 175 C 193 182 188 188 180 188 L 100 188 C 92 188 87 182 90 175 L 125 95 Z"
                fill="url(#chemFlaskFluid)"
                stroke="#5fd3e6"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect x="122" y="66" width="36" height="4.5" rx="1.5" fill="#5fd3e6" />
              <path d="M 105 155 C 120 150, 140 158, 160 152 C 168 150, 175 154, 185 152 L 187 182 C 188 186 185 187 180 187 L 100 187 C 95 187 92 186 93 182 Z" fill="rgba(95,211,230,0.25)" />
              
              {/* Measurement marks */}
              <line x1="148" y1="120" x2="155" y2="120" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
              <line x1="145" y1="135" x2="155" y2="135" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
              <line x1="142" y1="150" x2="155" y2="150" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />

              {/* Kinetic Bubbles */}
              <circle cx="130" cy="172" r="2.5" fill="#ffffff" opacity="0.8" />
              <circle cx="145" cy="162" r="3.5" fill="#f0c96a" opacity="0.9" />
              <circle cx="160" cy="168" r="2" fill="#5fd3e6" opacity="0.8" />

              {/* Formulas */}
              <text x="60" y="270" fill="rgba(240,201,106,0.6)" fontSize="12" fontFamily="monospace" fontWeight="bold">n = c × V</text>
              <text x="60" y="292" fill="rgba(95,211,230,0.6)" fontSize="11" fontFamily="monospace">PV = nRT · Ka = [H⁺][A⁻]/[HA]</text>
              <text x="85" y="50" fill="rgba(255,255,255,0.4)" fontSize="10.5" fontFamily="monospace">Volumetric Analysis</text>
            </g>

            {/* Subtle floating formulas in central space */}
            <text x="500" y="100" fill="rgba(95,211,230,0.25)" fontSize="11" fontFamily="monospace">pH = -log[H⁺]</text>
            <text x="860" y="100" fill="rgba(240,201,106,0.25)" fontSize="11" fontFamily="monospace">ΔG = ΔH - TΔS</text>
          </svg>
        </div>

        {/* Central Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-22 md:pb-16 max-w-4xl w-full"
        >
          {/* Eyebrow with Animated Atom Icon */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-3.5 bg-white/[0.08] border border-white/15 backdrop-blur-md shadow-inner"
          >
            <Atom className="w-3.5 h-3.5 text-[#f0c96a] animate-spin" style={{ animationDuration: '14s' }} />
            <span className="text-blue-100/90 text-[11px] sm:text-[12px] font-mono font-bold tracking-wider">ONLINE CHEMISTRY TUITION · DUBAI</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
            className="font-extrabold tracking-tight text-white leading-[1.08] mb-3 md:mb-5 text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] max-w-[95%] sm:max-w-none"
          >
            Chemistry Tutors in Dubai{' '}
            <span className="block sm:inline" style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Who Turn Grades Around
            </span>
          </motion.h1>

          {/* Lead */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="text-blue-100/80 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mb-6 md:mb-8 px-2 italic"
          >
            One-to-one online chemistry tutoring for GCSE, IGCSE, A-Level and IB students, matched to your child&apos;s exact exam board and school syllabus.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md sm:max-w-none px-4"
          >
            {/* Mobile CTAs */}
            <div className="sm:hidden w-full flex flex-col items-center gap-3">
              <a
                href={BOOKING_URL}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-[15px] text-white transition-all hover:-translate-y-0.5 text-center active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 6px 20px rgba(15,74,155,0.45)' }}
              >
                Book Your Free Trial
              </a>
              <span className="text-blue-200/60 text-[11px]">✦ No Commitment · Cancel Anytime</span>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20 active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" /> WhatsApp Us
              </a>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-start justify-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <a
                  href={BOOKING_URL}
                  className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[15px] md:text-base text-white transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 20px rgba(15,74,155,0.6)' }}
                >
                  Book Your Free Trial
                </a>
                <p className="text-blue-200/50 text-[11px]">✦ No Commitment · Cancel Anytime</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Ustaad on WhatsApp"
                  className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[14px] md:text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS STRIP */}
      <StatsBar />

      {/* SCHOOLS MARQUEE */}
      <SchoolsMarquee
        logoList={DUBAI_SCHOOL_LOGOS}
        header={
          <div className="text-center mb-4 sm:mb-5 max-w-2xl mx-auto px-4">
            <p className="text-xs sm:text-sm font-bold text-[#0a1f3d] leading-relaxed">
              Tutoring chemistry students across Dubai's leading British, IB, and International schools since 2015.
            </p>
          </div>
        }
      />

      {/* ==========================================
          SECTION 02: WHY CHEMISTRY NEEDS A SPECIALIST
      ========================================== */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-white via-[#F8FAFC] to-white relative overflow-hidden border-b border-slate-200/60">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#0f4a9b]/5 via-[#C7A24A]/5 to-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none" />
        <LabGrid light={true} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-7 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#0f4a9b]/15 text-[#0f4a9b] text-[11px] font-mono font-semibold uppercase tracking-widest mb-2.5 shadow-xs">
              <Atom className="w-3.5 h-3.5 text-[#C7A24A]" />
              <span>DUBAI CHEMISTRY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-3.5xl font-extrabold text-[#0a1f3d] leading-tight mb-2.5 tracking-tight">
              Chemistry is where strong students <span className="bg-gradient-to-r from-[#0f4a9b] via-[#1b6fd8] to-[#0f4a9b] bg-clip-text text-transparent">quietly lose marks</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Chemistry looks like memorisation, but the marks sit in method. Learn{' '}
              <a href="/blogs/why-chemistry-fades-from-memory" className="text-[#0f4a9b] font-semibold hover:underline">
                why chemistry fades from memory
              </a>, and how a student can know the content and still drop a grade on a mole calculation, a half-equation or a missing state symbol.
            </p>
          </motion.div>

          {/* 3 Interactive Cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {/* Callout 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-[#0f4a9b]/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f0c96a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Prominent Floating Watermark Icon */}
              <motion.div 
                animate={{ rotate: [0, 4, -4, 0], y: [0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 w-28 h-28 text-[#0f4a9b]/20 group-hover:text-[#0f4a9b]/35 transition-colors duration-300 pointer-events-none"
              >
                <Calculator className="w-full h-full stroke-[1.5]" />
              </motion.div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#0f4a9b] shadow-xs group-hover:scale-105 group-hover:bg-[#0f4a9b] group-hover:text-white transition-all duration-300">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-500 uppercase bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                    Multi-Step
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d] mb-1.5 group-hover:text-[#0f4a9b] transition-colors">
                  Calculation Chains
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  One wrong step early on carries forward and costs every mark after it on multi-step titration and gas volume questions.
                </p>
              </div>
            </motion.div>

            {/* Callout 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-[#C7A24A]/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Prominent Floating Watermark Icon */}
              <motion.div 
                animate={{ rotate: [0, -4, 4, 0], y: [0, -3, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 w-28 h-28 text-[#C7A24A]/25 group-hover:text-[#C7A24A]/45 transition-colors duration-300 pointer-events-none"
              >
                <FileText className="w-full h-full stroke-[1.5]" />
              </motion.div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#C7A24A] shadow-xs group-hover:scale-105 group-hover:bg-[#C7A24A] group-hover:text-white transition-all duration-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-500 uppercase bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                    Mark Schemes
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d] mb-1.5 group-hover:text-[#0f4a9b] transition-colors">
                  Precise Language
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "Reacts with" and "is oxidised by" score differently on the mark scheme. Command words dictate exact chemical terminology.
                </p>
              </div>
            </motion.div>

            {/* Callout 03 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-[#0284c7]/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Prominent Floating Watermark Icon */}
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0], y: [0, -4, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 w-28 h-28 text-[#0284c7]/20 group-hover:text-[#0284c7]/38 transition-colors duration-300 pointer-events-none"
              >
                <FlaskConical className="w-full h-full stroke-[1.5]" />
              </motion.div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-[#0284c7] shadow-xs group-hover:scale-105 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-500 uppercase bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                    Paper 6 & ATP
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d] mb-1.5 group-hover:text-[#0f4a9b] transition-colors">
                  Practical Paper Pressure
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Paper 6 and the planning questions catch out students who have only watched demonstrations without practicing systematic ion tests.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 02-B: LIVE EQUATION BALANCER LAB
      ========================================== */}
      <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-[#F4F8FB] via-white to-[#F0F5FA] relative overflow-hidden text-slate-900 border-b border-slate-200/60">
        <LabGrid light={true} />
        <FloatingChemistryElements />
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0f4a9b]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#C7A24A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center max-w-2xl mx-auto mb-3.5 sm:mb-4.5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#0f4a9b]/15 text-[#0f4a9b] text-[11px] font-mono font-semibold uppercase tracking-widest mb-1.5 shadow-xs">
              <FlaskConical className="w-3.5 h-3.5 text-[#C7A24A]" />
              <span>LIVE EXAMINER LAB</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1 tracking-tight">
              See how mark schemes <span className="bg-gradient-to-r from-[#0f4a9b] via-[#1b6fd8] to-[#0f4a9b] bg-clip-text text-transparent">award chemical precision</span>
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed max-w-lg mx-auto">
              Interactive diagnostic showing the difference between a student submission that drops marks and the exact standard required for full marks.
            </p>
          </motion.div>

          {/* Interactive Live Equation Balancer */}
          <EquationBalancerVisual />
        </div>
      </section>

      {/* ==========================================
          SECTION 03: WHERE DUBAI CHEMISTRY STUDENTS SLIP
      ========================================== */}
      <section className="py-5 sm:py-6 lg:py-8 bg-gradient-to-b from-white via-[#F4F8FB] to-white relative overflow-hidden border-b border-slate-200/60">
        <LabGrid light={true} />
        {/* Ambient Glows */}
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-[#0f4a9b]/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -right-24 w-80 h-80 bg-[#C7A24A]/[0.05] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-2xl mx-auto mb-4 sm:mb-5"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-[#0f4a9b]/15 text-[#0f4a9b] text-[10.5px] font-mono font-semibold uppercase tracking-widest mb-1 shadow-xs">
              <AlertCircle className="w-3 h-3 text-[#C7A24A]" />
              <span>TARGETED EXAM REPAIR</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1 tracking-tight">
              Six chemistry <span className="bg-gradient-to-r from-[#0f4a9b] via-[#1b6fd8] to-[#0f4a9b] bg-clip-text text-transparent">mark-loss patterns</span> we fix
            </h2>
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto">
              Identified across hundreds of Cambridge, Edexcel, AQA and IB chemistry scripts in the UAE.
            </p>
          </motion.div>

          {/* 6 Test Tube Style Interactive Cards (Swipeable on mobile, grid on desktop) */}
          <div className="w-full flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 lg:gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory py-1 scrollbar-none">
            {MARK_LOSS_PATTERNS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group relative rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-3.5 sm:p-4 shadow-[0_4px_16px_rgba(15,74,155,0.04)] hover:shadow-[0_12px_28px_rgba(15,74,155,0.09)] hover:border-[#0f4a9b]/35 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between text-left overflow-hidden w-[86vw] max-w-[330px] sm:w-auto sm:max-w-none snap-center flex-shrink-0 sm:flex-shrink"
                >
                  {/* Top Color Accent Line on Hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${item.color}, #0f4a9b)` }}
                  />

                  {/* Watermark Background Icon */}
                  <div className="absolute -right-3 -bottom-3 w-20 h-20 text-slate-900/[0.03] group-hover:text-[#0f4a9b]/[0.06] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 pointer-events-none z-0">
                    <Icon className="w-full h-full" />
                  </div>

                  <div className="relative z-10">
                    {/* Top Bar: Tube Graphic, Icon & Specs */}
                    <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <AnimatedTestTube color={item.color} fillPct={item.fillPct} />
                        <div className="w-6 h-6 rounded-md bg-slate-100/80 border border-slate-200/60 flex items-center justify-center text-slate-600 group-hover:text-[#0f4a9b] group-hover:border-[#0f4a9b]/30 group-hover:bg-[#0f4a9b]/10 transition-all">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded text-[9.5px] sm:text-[10px] font-mono font-bold uppercase bg-slate-100/90 text-slate-600 border border-slate-200/70 group-hover:border-[#0f4a9b]/20 group-hover:bg-[#0f4a9b]/5 group-hover:text-[#0f4a9b] transition-all text-right truncate">
                        {item.spec}
                      </span>
                    </div>

                    <h3 className="text-[14.5px] sm:text-[15.5px] font-extrabold text-[#0a1f3d] mb-1 leading-snug group-hover:text-[#0f4a9b] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11.5px] sm:text-[12px] text-slate-600 leading-relaxed font-normal">
                      {item.copy}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between gap-2 text-xs font-semibold relative z-10">
                    <span className="inline-flex items-center gap-1 text-[#0f4a9b] font-mono text-[10.5px] font-bold truncate">
                      ✦ {item.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-[9.5px] font-bold border border-emerald-200/60 flex-shrink-0">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                      Verified Repair
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="flex sm:hidden justify-center items-center mt-2 text-[10.5px] text-slate-400 font-mono">
            <span>Swipe to explore patterns</span>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 04: BOARDS WE COVER
      ========================================== */}
      <section className="py-5 sm:py-6 lg:py-8 bg-gradient-to-b from-[#F4F8FB] via-white to-[#F0F5FA] relative overflow-hidden border-b border-slate-200/60">
        <LabGrid light={true} />
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0f4a9b]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#C7A24A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-2xl mx-auto mb-4 sm:mb-5"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-[#0a1f3d]/15 text-[#0a1f3d] text-[10.5px] font-mono font-semibold uppercase tracking-widest mb-1 shadow-xs">
              <FileText className="w-3 h-3 text-[#C7A24A]" />
              <span>EXAM BOARD ALIGNMENT</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1 tracking-tight">
              Calibrated to your child's <span className="bg-gradient-to-r from-[#0f4a9b] via-[#1b6fd8] to-[#0f4a9b] bg-clip-text text-transparent">exact chemistry specification</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto">
              Dubai families sit chemistry under several different boards. We confirm your child's specification before
              the first lesson, so every minute of tuition is aimed at the right mark scheme.
            </p>
          </motion.div>

          {/* Interactive Specification Calibration Console */}
          <BoardAlignmentConsole />
        </div>
      </section>

      {/* ==========================================
          SECTION 05: THE CHEMISTRY TERM PLAN (4 PHASES)
      ========================================== */}
      <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-[#0f4a9b] via-[#0c3e80] to-[#0a2f64] text-white relative overflow-hidden border-b border-white/10">
        <LabGrid />
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C7A24A]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-2xl mx-auto mb-4 sm:mb-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#f0c96a] text-[10.5px] font-mono font-semibold uppercase tracking-widest mb-1 shadow-xs">
              <Calendar className="w-3 h-3 text-[#f0c96a]" />
              <span>UAE ACADEMIC CALENDAR</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-1 tracking-tight">
              How a Dubai Chemistry Term <span className="text-[#f0c96a]">Runs With Us</span>
            </h2>
            <p className="text-blue-100/80 text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto">
              Four structured phases, synchronised with the UAE school year and mock examination calendar.
            </p>
          </motion.div>

          {/* Connected Reaction Pathway Pipeline */}
          <div className="relative">
            {/* Desktop Horizontal Glowing Connecting Pipe */}
            <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#f0c96a]/20 via-[#f0c96a]/70 to-[#f0c96a]/20 z-0 pointer-events-none">
              <motion.div
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-[4px] -top-[1px] relative bg-gradient-to-r from-transparent via-[#f0c96a] to-transparent rounded-full blur-[1px]"
              />
            </div>

            {/* Reaction Pathway Progress Grid */}
            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory py-2 scrollbar-none relative z-10 items-stretch">
              {TERM_PHASES.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.phase}
                    className="relative rounded-3xl rounded-tr-[38px] rounded-bl-[38px] bg-gradient-to-b from-white/[0.12] via-white/[0.07] to-white/[0.03] backdrop-blur-xl border border-white/20 p-4 sm:p-4.5 text-left flex flex-col justify-between shadow-[0_14px_32px_rgba(0,0,0,0.18)] overflow-hidden w-[82vw] max-w-[290px] sm:w-auto sm:max-w-none snap-center flex-shrink-0 sm:flex-shrink h-full"
                  >
                    {/* Top Accent Gradient Rim */}
                    <div className="absolute top-0 left-0 right-10 h-[3px] bg-gradient-to-r from-[#f0c96a] via-[#f0c96a]/60 to-transparent pointer-events-none" />

                    {/* Watermark Icon (Static) */}
                    <div className="absolute -right-2 -bottom-2 w-20 h-20 text-white/[0.04] pointer-events-none z-0">
                      <Icon className="w-full h-full" />
                    </div>

                    <div className="relative z-10 flex flex-col flex-1">
                      {/* Top Header: Phase Pill + Sculpted Top-Right Icon Crest */}
                      <div className="flex items-start justify-between pb-2.5 mb-2.5 border-b border-white/10">
                        <div className="flex items-center gap-1.5 pt-0.5">
                          <span className="px-2 py-0.5 rounded-full font-mono font-bold text-[10px] bg-[#f0c96a]/20 text-[#f0c96a] border border-[#f0c96a]/30 shadow-xs tracking-wider">
                            PHASE {p.phase}
                          </span>
                          <span className="text-[9.5px] font-mono text-blue-200/70 font-semibold">
                            • Step 0{idx + 1}
                          </span>
                        </div>

                        {/* Sculpted Corner Milestone Disc */}
                        <div className="w-8 h-8 -mr-1 -mt-1 rounded-full bg-gradient-to-br from-[#f0c96a] to-[#d4af37] text-[#0a2f64] flex items-center justify-center font-bold shadow-[0_3px_10px_rgba(240,201,106,0.30)] flex-shrink-0">
                          <Icon className="w-4 h-4 text-[#0a2f64]" />
                        </div>
                      </div>

                      {/* Title with uniform min-height for alignment */}
                      <h3 className="text-[14.5px] sm:text-[15px] font-extrabold text-white mb-0.5 leading-snug min-h-[2.5rem] flex items-center">
                        {p.name}
                      </h3>
                      {/* Subtitle with uniform min-height */}
                      <p className="text-[11.5px] font-semibold text-[#f0c96a] mb-2 min-h-[1.25rem] flex items-center">
                        {p.subtitle}
                      </p>
                      {/* Description with flex-1 for balanced vertical distribution */}
                      <p className="text-[11px] sm:text-[11.5px] text-blue-100/90 leading-relaxed font-normal flex-1 mb-2">
                        {p.desc}
                      </p>
                    </div>

                    {/* Bottom Tag */}
                    <div className="pt-2.5 mt-auto border-t border-white/10 flex items-center justify-between text-[10.5px] relative z-10">
                      <span className="font-mono text-[#f0c96a] font-semibold flex items-center gap-1">
                        ✦ {p.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 06: SUBJECTS AND TOPICS (CURRICULUM HUB)
      ========================================== */}
      <section className="py-6 sm:py-8 lg:py-10 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0a1f3d]/5 border border-[#0a1f3d]/15 text-[#0a1f3d] text-[10.5px] font-mono uppercase tracking-widest mb-1 shadow-2xs">
              <BookOpen className="w-3 h-3 text-[#C7A24A]" />
              <span>CURRICULUM HUB</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1">
              Chemistry topics we <span className="text-[#0f4a9b]">teach in Dubai</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-[13px] max-w-xl mx-auto">
              Comprehensive module-by-module mastery for IGCSE, GCSE, A-Level and IB sciences.
            </p>
          </div>

          {/* 8 Chemistry Catalyst Laboratory Cards Grid */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 mb-4 sm:mb-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory py-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {TOPICS.map((t, idx) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="relative rounded-2xl bg-white border border-slate-200/90 hover:border-[#0f4a9b] p-3 sm:p-3.5 text-left flex flex-col justify-between shadow-[0_6px_20px_rgba(15,74,155,0.05)] hover:shadow-[0_12px_28px_rgba(15,74,155,0.10)] transition-all duration-300 w-[82vw] max-w-[280px] sm:w-auto sm:max-w-none snap-center flex-shrink-0 sm:flex-shrink group overflow-hidden"
              >
                {/* Top Accent Gradient Rim on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Card Header: Element Symbol & Module Number */}
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-md bg-blue-50 text-[#0f4a9b] border border-blue-100 flex items-center justify-center shadow-2xs group-hover:bg-[#0f4a9b] group-hover:text-white transition-colors duration-300">
                        {t.icon}
                      </div>
                      <span className="font-mono font-black text-[11px] text-[#0a1f3d] bg-slate-100 px-1.5 py-0.2 rounded border border-slate-200">
                        {t.symbol}
                      </span>
                    </div>

                    <span className="text-[9.5px] font-mono text-slate-400 font-semibold">
                      #{t.num}
                    </span>
                  </div>

                  {/* Dedicated Mini Animated Chemistry Simulation Stage */}
                  <MiniCardVisualizer index={idx} />

                  {/* Title & Subtopics */}
                  <h3 className="text-[13px] sm:text-[13.5px] font-extrabold text-[#0a1f3d] leading-snug mb-0.5 group-hover:text-[#0f4a9b] transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-[10px] sm:text-[10.5px] font-mono font-semibold text-[#0f4a9b] mb-1 leading-tight">
                    {t.sub}
                  </p>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    {t.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Exam Preparation High-Impact Plaque */}
          <div className="rounded-xl bg-gradient-to-r from-[#0a1f3d] via-[#0f4a9b] to-[#0a1f3d] p-3.5 sm:p-4 text-white text-left flex flex-col md:flex-row items-center justify-between gap-3 shadow-md border border-white/10">
            <div className="space-y-0.5">
              <div className="inline-flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-wider text-[#f0c96a]">
                <span>EXAM PREPARATION &amp; HIGH IMPACT REVISION</span>
              </div>
              <p className="text-xs sm:text-[12.5px] font-bold text-white">
                Timed past papers, mark-scheme dissection and examiner-language training for mocks and finals.
              </p>
            </div>
            <a
              href={BOOKING_URL}
              className="shrink-0 px-5 py-2 rounded-lg bg-gradient-to-r from-[#f0c96a] via-[#e5bd57] to-[#d4af37] hover:from-[#f5d580] hover:to-[#dfbb43] text-[#0a1f3d] font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_4px_14px_rgba(240,201,106,0.35)] hover:shadow-[0_6px_18px_rgba(240,201,106,0.5)] active:scale-[0.98]"
            >
              Start Exam Prep
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 07: FREE TRIAL (4 STEPS)
      ========================================== */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F4F8FB] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[11px] font-mono uppercase tracking-widest mb-2">
              <Clock className="w-3.5 h-3.5 text-[#C7A24A]" />
              <span>FREE TRIAL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
              Thirty free minutes that <span className="text-[#0f4a9b]">tell you everything</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Free, and a real diagnostic, not a sales call, identifying{' '}
              <a href="/blogs/early-signs-chemistry-help-uae" className="text-[#0f4a9b] font-semibold hover:underline">
                the early signs a child needs chemistry help
              </a>.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-5 items-stretch">
            {/* Left 7 cols: 4 Diagnostic Steps in a clean 2x2 grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3.5 sm:gap-4">
              {[
                {
                  step: '01',
                  title: 'An honest conversation',
                  desc: 'About the board, the school and the target grade.',
                  icon: <MessageCircle className="w-3.5 h-3.5 text-[#0f4a9b]" />,
                  iconBg: 'bg-[#0f4a9b]/8 border-[#0f4a9b]/15',
                },
                {
                  step: '02',
                  title: 'A real chemistry question, live',
                  desc: 'Your child works a genuine exam-style calculation with the tutor.',
                  icon: <Calculator className="w-3.5 h-3.5 text-[#C7A24A]" />,
                  iconBg: 'bg-amber-500/10 border-amber-500/20',
                },
                {
                  step: '03',
                  title: 'A clear plan and target',
                  desc: 'You leave with a starting point and the route to the grade.',
                  icon: <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />,
                  iconBg: 'bg-emerald-500/10 border-emerald-500/20',
                },
                {
                  step: '04',
                  title: 'Method marks live in the steps',
                  desc: 'Working shown line by line, not just the final answer.',
                  icon: <FileText className="w-3.5 h-3.5 text-[#0f4a9b]" />,
                  iconBg: 'bg-[#0f4a9b]/8 border-[#0f4a9b]/15',
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="group relative p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-[#0f4a9b]/35 text-left flex flex-col justify-between shadow-[0_4px_16px_rgba(15,74,155,0.04)] hover:shadow-[0_8px_24px_rgba(15,74,155,0.09)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0f4a9b] via-[#f0c96a] to-[#0f4a9b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-lg bg-gradient-to-br from-[#0a1f3d] to-[#0f4a9b] text-[#f0c96a] font-mono font-extrabold text-[11px] shadow-xs tracking-wider">
                        STEP {s.step}
                      </span>
                      <div className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ${s.iconBg}`}>
                        {s.icon}
                      </div>
                    </div>
                    <h3 className="text-[13.5px] sm:text-sm font-extrabold text-[#0a1f3d] mb-1.5 group-hover:text-[#0f4a9b] transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-[11.5px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right 5 cols: Lottie Animation Diagnostic Stage */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="h-full w-full p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_28px_rgba(15,74,155,0.06)] relative overflow-hidden flex flex-col items-center justify-between text-center min-h-[280px]">
                {/* Ambient glow backgrounds */}
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-blue-100/50 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-rose-100/40 blur-2xl pointer-events-none" />

                {/* Status indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f4a9b]/6 border border-[#0f4a9b]/15 text-[#0f4a9b] text-[10.5px] font-mono uppercase tracking-wider z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LIVE DIAGNOSTIC LAB</span>
                </div>

                {/* Lottie Animation Display */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center my-auto z-10">
                  <ChemistryDiagnosticLottieAnimation className="w-full h-full" />
                </div>

                {/* Micro note */}
                <div className="z-10 pt-1">
                  <p className="text-xs font-bold text-[#0a1f3d]">
                    30-Minute Live Specialist Assessment
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                    Diagnostic calculation · No sales pitch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 08: TYPICAL OUTCOMES & PROGRESSION ARC
      ========================================== */}
      <section className="py-5 sm:py-7 lg:py-8 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto mb-3.5 sm:mb-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] leading-tight mb-1">
              What progress actually looks like, <span className="text-[#0f4a9b]">term by term</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-[13px]">
              It shows first in mocks, then in confidence, then in the grade that counts.
            </p>
          </div>

          <GradeTransitionInteractive />
        </div>
      </section>

      {/* ==========================================
          SECTION 09: DUBAI COVERAGE AND ONLINE FORMAT
      ========================================== */}
      <section className="py-5 sm:py-6 lg:py-7 bg-[#F4F8FB] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-3.5 sm:mb-4.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0a1f3d]/5 border border-[#0a1f3d]/15 text-[#0a1f3d] text-[10px] font-mono uppercase tracking-widest mb-1 shadow-2xs">
              <span>DUBAI &amp; UAE</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1">
              We teach families <span className="text-[#0f4a9b]">right across Dubai</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto">
              Every lesson is online, so your child learns from home in Downtown Dubai, Dubai Marina, Jumeirah, Arabian
              Ranches, Emirates Hills, Palm Jumeirah or anywhere in the UAE.
            </p>
          </div>

          {/* 3 Interactive Cards (Swipeable Carousel on Mobile, 3-Col Grid on Desktop) */}
          <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory py-1 pb-3 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {/* CARD 1: Live 1-to-1 Sessions */}
            <div className="w-[84vw] max-w-[340px] md:w-auto md:max-w-none snap-center flex-shrink-0 md:flex-shrink p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-[#0f4a9b]/40 text-left shadow-[0_4px_16px_rgba(15,74,155,0.04)] hover:shadow-[0_8px_24px_rgba(15,74,155,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                {/* Chemistry Badge 1: Benzene Molecular Whiteboard */}
                <LiveWhiteboardMoleculeBadge />

                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-lg bg-[#0a1f3d] text-[#f0c96a] flex items-center justify-center shrink-0 shadow-2xs">
                    <Video className="w-3 h-3" />
                  </div>
                  <h3 className="text-[14px] sm:text-[15px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-tight">
                    Live 1-to-1 Sessions
                  </h3>
                </div>

                <p className="text-[11px] sm:text-[12px] text-slate-600 leading-snug font-normal">
                  Same specialist every week, with an interactive digital whiteboard for balancing equations, organic reaction mechanisms and multi-step calculations.
                </p>
              </div>

              {/* Bottom Feature Tags */}
              <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9.5px] font-mono text-slate-600">
                <span className="px-2 py-0.5 rounded-md bg-blue-50/80 text-[#0f4a9b] border border-blue-100/60 font-semibold">
                  ✓ Dedicated Specialist
                </span>
                <span className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/60">
                  ✓ Live Whiteboard
                </span>
              </div>
            </div>

            {/* CARD 2: Recorded for Revision */}
            <div className="w-[84vw] max-w-[340px] md:w-auto md:max-w-none snap-center flex-shrink-0 md:flex-shrink p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-[#0f4a9b]/40 text-left shadow-[0_4px_16px_rgba(15,74,155,0.04)] hover:shadow-[0_8px_24px_rgba(15,74,155,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                {/* Chemistry Badge 2: Distillation & Kinetic Replay Flask */}
                <RecordedDistillationBadge />

                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-lg bg-[#0a1f3d] text-[#C7A24A] flex items-center justify-center shrink-0 shadow-2xs">
                    <RefreshCw className="w-3 h-3" />
                  </div>
                  <h3 className="text-[14px] sm:text-[15px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-tight">
                    Recorded for Revision
                  </h3>
                </div>

                <p className="text-[11px] sm:text-[12px] text-slate-600 leading-snug font-normal">
                  Rewatch any worked calculation, half-equation derivation, or mock question before examinations at 1.25x or 1.5x speed.
                </p>
              </div>

              {/* Bottom Feature Tags */}
              <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9.5px] font-mono text-slate-600">
                <span className="px-2 py-0.5 rounded-md bg-emerald-50/80 text-emerald-700 border border-emerald-100/60 font-semibold">
                  ✓ Full Video Archive
                </span>
                <span className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/60">
                  ✓ 1.25x &amp; 1.5x Speed
                </span>
              </div>
            </div>

            {/* CARD 3: Ramadan-Friendly Timing */}
            <div className="w-[84vw] max-w-[340px] md:w-auto md:max-w-none snap-center flex-shrink-0 md:flex-shrink p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-[#0f4a9b]/40 text-left shadow-[0_4px_16px_rgba(15,74,155,0.04)] hover:shadow-[0_8px_24px_rgba(15,74,155,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                {/* Chemistry Badge 3: Celestial Crescent & Atomic Orbital Mechanism */}
                <RamadanAtomicClockBadge />

                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-lg bg-[#0a1f3d] text-[#0284c7] flex items-center justify-center shrink-0 shadow-2xs">
                    <Clock className="w-3 h-3" />
                  </div>
                  <h3 className="text-[14px] sm:text-[15px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-tight">
                    Ramadan-Friendly Timing
                  </h3>
                </div>

                <p className="text-[11px] sm:text-[12px] text-slate-600 leading-snug font-normal">
                  Lessons scheduled flexibly around fasting hours, school timings, iftar periods, and holiday revision blocks.
                </p>
              </div>

              {/* Bottom Feature Tags */}
              <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9.5px] font-mono text-slate-600">
                <span className="px-2 py-0.5 rounded-md bg-amber-50/80 text-amber-800 border border-amber-100/60 font-semibold">
                  ✓ Fasting-Aware Slots
                </span>
                <span className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/60">
                  ✓ Term Break Revision
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ==========================================
          SECTION 12: PARENT REVIEWS (From Dubai Families)
      ========================================== */}
      <section className="py-12 lg:py-16 relative overflow-hidden bg-[#f4f7fc] border-y border-slate-100">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#0f4a9b]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#C7A24A]/10 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-[#0a1f3d] mb-3 shadow-xs">
              <span className="text-[#C7A24A] tracking-tighter">★★★★★</span>
              <span>5.0 ★ · Dubai Parent Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d]">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Dubai Families</span>
            </h2>
          </div>
          <ReviewsScroller />
        </div>
      </section>

      {/* ==========================================
          SECTION 13: FAQS ACCORDION (Parents Often Ask)
      ========================================== */}
      <section className="py-14 sm:py-18 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-24"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/12 text-[#0f4a9b] text-xs font-bold mb-4">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0f4a9b]/10 text-[10px]">?</span>
                COMMON QUESTIONS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight mb-3">
                Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Often Ask</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Honest answers to the Chemistry tutoring questions Dubai parents ask before their first session.
              </p>
            </motion.div>

            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {CHEMISTRY_FAQS.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{
                          width: 40,
                          height: 40,
                          minWidth: 40,
                          minHeight: 40,
                          background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                          color: isOpen ? '#fff' : '#0f4a9b',
                          transition: 'background 300ms ease, color 300ms ease',
                          cursor: 'pointer',
                          border: 'none',
                          boxShadow: 'inset 0 0 0 2px #fff',
                        }}
                      >
                        ?
                      </button>

                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border bg-white shadow-xs"
                        style={{
                          minHeight: '52px',
                          padding: '10px 16px',
                          cursor: 'pointer',
                          borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)',
                        }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{f.q}</span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 32,
                            height: 32,
                            minWidth: 32,
                            minHeight: 32,
                            borderRadius: '50%',
                            background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                            color: isOpen ? '#fff' : '#0f4a9b',
                            transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </span>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="ml-[52px] overflow-hidden"
                        >
                          <div
                            className="flex items-start gap-3 rounded-2xl border p-4 bg-[#f8fafc]"
                            style={{
                              borderColor: 'rgba(15,74,155,0.15)',
                              boxShadow: '0 4px 16px rgba(15,74,155,0.06)',
                            }}
                          >
                            <p className="flex-1 text-gray-600 text-[13.5px] leading-relaxed">{f.a}</p>
                            <span
                              className="flex-shrink-0 flex items-center justify-center rounded-full"
                              style={{
                                width: 32,
                                height: 32,
                                minWidth: 32,
                                minHeight: 32,
                                background: '#0f4a9b',
                                color: '#fff',
                              }}
                            >
                              <MessageCircle className="h-4 w-4" />
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 14: FINAL CTA
      ========================================== */}
      <section className="py-14 sm:py-20 bg-white text-[#0a1f3d] relative overflow-hidden border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1f3d] leading-tight">
              Book your free chemistry trial in <span className="text-[#0f4a9b]">Dubai</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Tell us the subject, year group and school. We match a chemistry specialist fast.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={BOOKING_URL}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1e5bb3] to-[#0f4a9b] hover:from-[#256fd8] hover:to-[#1258b5] text-white font-bold text-sm shadow-md transition active:scale-[0.99]"
              >
                Book a Free Trial Lesson
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm inline-flex items-center justify-center gap-2 transition shadow-md shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Message Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 15: RELATED GUIDES & PROGRAMMES
      ========================================== */}
      <RelatedContent
        subjects={[
          {
            label: 'Physics Tutor Dubai',
            href: '/physics-tutor-dubai',
            note: 'One-to-one mechanics, fields and IB/A-Level physics tutoring.'
          },
          {
            label: 'Maths Tutor Dubai',
            href: '/maths-tutor-dubai',
            note: 'Coordinate calculus, vectors, and mechanics support in Dubai.'
          },
          {
            label: 'Chemistry Subject Hub',
            href: '/chemistry',
            note: 'Comprehensive overview of chemistry faculty and syllabus tracks.'
          },
        ]}
        curricula={[
          {
            label: 'IB DP Chemistry (SL & HL)',
            href: '/ib-curriculum',
            note: 'Organic mechanisms, energetics and internal assessment guidance.'
          },
          {
            label: 'IGCSE Chemistry Dubai',
            href: '/igcse-tutor-dubai',
            note: 'Cambridge 0620 and Edexcel 4CH1 past paper preparation.'
          },
          {
            label: 'A-Level Chemistry',
            href: '/a-level',
            note: 'AQA, OCR and Edexcel inorganic, physical and organic chemistry.'
          },
        ]}
      />
    </Layout>
  );
}
