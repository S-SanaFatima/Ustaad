import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  User,
  Clock,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Mail,
  Home,
  ChevronRight as ChevronRightIcon,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Calculator,
  ShieldCheck,
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'What Does the y-Intercept Actually Mean? | Ustaad',
  h1: 'What Does the y-Intercept Actually Mean? (And When It Means Nothing at All)',
  titleLine1: 'What Does the y-Intercept Actually Mean?',
  titleLine2: '(And When It Means Nothing at All)',
  slug: 'what-does-y-intercept-mean-maths',
  description: 'What does the y-intercept mean in a real-life graph? A maths teacher explains how to read it in context, and when it means nothing at all.',
  heroImage: '/images/blogs/what-does-y-intercept-mean-hero.webp',
  heroAlt: 'Secondary student in Dubai attending an online one-to-one tutoring session for IGCSE and GCSE Maths graphs of functions',
  heroCaption: 'One-to-one online coaching trains students to understand what linear graph equations and y-intercepts actually represent in real-world contexts.',
  datePublished: '2026-10-02',
  dateModified: '2026-10-02',
  author: 'Fahad Khan',
  authorFull: 'Fahad Khan, Maths Tutor, IGCSE, GCSE & A-Level, Ustaad UAE',
  authorUrl: '/tutors/fahad-khan',
  reviewer: 'Ustaad Editorial Team',
  reviewerUrl: '/editorial',
  readTime: '7 min read',
  tags: [
    'Maths',
    'y-Intercept',
    'Coordinate Geometry',
    'y = mx + c',
    'Interpolation and Extrapolation',
    'IGCSE Maths',
    'GCSE Maths',
    'A-Level Maths',
    'Exam Technique'
  ],
};

const FAQS = [
  {
    q: 'What does the y-intercept represent in a real-life graph?',
    a: 'It represents the starting value of whatever is on the y-axis, before the variable on the x-axis has changed at all, for example, a fixed charge before any distance is travelled, or a starting amount before any time has passed.',
  },
  {
    q: 'Why is the y-intercept sometimes meaningless?',
    a: 'Because the line was only built from data within a certain range, and x = 0 can fall well outside that range. When that happens, the line is being extrapolated into a situation it was never designed to describe, and the resulting value often is not realistic.',
  },
  {
    q: 'What is the difference between interpolation and extrapolation?',
    a: 'Interpolation is reading a line within the range of the data you actually have. Extrapolation is reading it beyond that range, where the line may no longer reflect reality.',
  },
  {
    q: 'Can the y-intercept be negative?',
    a: 'Yes. A negative intercept simply means the line crosses the y-axis below zero. Whether that value makes sense depends entirely on the situation it is modelling.',
  },
  {
    q: 'Does every straight-line graph have a y-intercept?',
    a: 'No. A vertical line such as x = 3 never crosses the y-axis, so it has no y-intercept. The one exception is the line x = 0, which is the y-axis itself.',
  },
];

const TOC_ITEMS = [
  { label: '01. The intercept is the starting value', id: 'intercept-starting-value' },
  { label: '02. A UAE example: the taxi meter', id: 'uae-taxi-meter-example' },
  { label: '03. How to write it for the marks', id: 'write-it-for-the-marks' },
  { label: '04. When the intercept means something', id: 'when-intercept-means-something' },
  { label: '05. When the intercept means nothing', id: 'when-intercept-means-nothing' },
  { label: '06. What changes at A-Level', id: 'what-changes-at-a-level' },
  { label: '07. Spot the error', id: 'spot-the-error' },
  { label: '08. One habit before the exam', id: 'habit-before-the-exam' },
  { label: 'Frequently Asked Questions', id: 'frequently-asked-questions' },
];

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-10 mb-4 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/50 tracking-wider mb-1">{num}</span>
      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] leading-snug tracking-tight">{children}</h2>
    </div>
  );
}

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mx-auto my-7 max-w-xl">
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/9] bg-slate-100">
        <img
          src={src}
          alt={alt}
          width={1376}
          height={774}
          loading="lazy"
          className="w-full h-full object-cover block"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ── SVG Diagram 1: Coordinate Line y = 2x + 12 ──
function CoordinateInterceptChart() {
  return (
    <div className="my-7 p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#f8faff] to-[#edf3fc] border border-[#0f4a9b]/15 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">
            Coordinate Geometry: y = 2x + 12
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#0f4a9b] bg-white px-2.5 py-1 rounded-md border border-[#0f4a9b]/20 shadow-2xs">
          y-intercept (c) = (0, 12)
        </span>
      </div>

      <div className="w-full bg-white rounded-xl p-3 sm:p-4 border border-slate-200/80 shadow-inner">
        <svg viewBox="0 0 440 240" className="w-full h-auto max-h-[250px]" aria-label="Line graph of y = 2x + 12 showing the y-intercept marked at (0, 12)">
          <defs>
            <pattern id="math-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="440" height="240" fill="url(#math-grid)" rx="8" />

          {/* Axes */}
          <line x1="50" y1="210" x2="410" y2="210" stroke="#94a3b8" strokeWidth="1.75" />
          <line x1="50" y1="210" x2="50" y2="20" stroke="#94a3b8" strokeWidth="1.75" />
          <text x="415" y="214" fontSize="11" fill="#475569" fontWeight="bold">x</text>
          <text x="45" y="15" fontSize="11" fill="#475569" fontWeight="bold">y</text>

          {/* Axis Ticks & Numbers */}
          <text x="50" y="224" fontSize="10" fill="#94a3b8" textAnchor="middle">0</text>
          
          {/* x ticks */}
          <line x1="130" y1="210" x2="130" y2="214" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="130" y="224" fontSize="10" fill="#64748b" textAnchor="middle">2</text>
          
          <line x1="210" y1="210" x2="210" y2="214" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="210" y="224" fontSize="10" fill="#64748b" textAnchor="middle">4</text>
          
          <line x1="290" y1="210" x2="290" y2="214" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="290" y="224" fontSize="10" fill="#64748b" textAnchor="middle">6</text>

          <line x1="370" y1="210" x2="370" y2="214" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="370" y="224" fontSize="10" fill="#64748b" textAnchor="middle">8</text>

          {/* y ticks */}
          <line x1="46" y1="140" x2="50" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="40" y="144" fontSize="10" fill="#64748b" textAnchor="end">12</text>

          <line x1="46" y1="70" x2="50" y2="70" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="40" y="74" fontSize="10" fill="#64748b" textAnchor="end">24</text>

          {/* Gradient Triangle */}
          <polygon points="130,122.5 290,122.5 290,35" fill="rgba(15,74,155,0.06)" />
          <line x1="130" y1="122.5" x2="290" y2="122.5" stroke="#0f4a9b" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="290" y1="122.5" x2="290" y2="35" stroke="#0f4a9b" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="210" y="137" fontSize="10" fill="#0f4a9b" fontWeight="bold" textAnchor="middle">Run: Δx = 4</text>
          <text x="298" y="85" fontSize="10" fill="#0f4a9b" fontWeight="bold">Rise: Δy = 8 (m = 2)</text>

          {/* The Main Line y = 2x + 12 */}
          <line x1="50" y1="140" x2="350" y2="35" stroke="#0f4a9b" strokeWidth="3.2" strokeLinecap="round" />

          {/* Intercept Highlight Circle and Callout */}
          <circle cx="50" cy="140" r="10" fill="rgba(199,162,74,0.25)" />
          <circle cx="50" cy="140" r="5.5" fill="#C7A24A" stroke="#0a1f3d" strokeWidth="2" />
          
          {/* Point badge */}
          <g transform="translate(68, 140)">
            <rect x="0" y="-14" width="130" height="28" rx="6" fill="#0a1f3d" />
            <text x="65" y="4" fontSize="11" fill="#F5D77F" fontWeight="bold" textAnchor="middle">
              y-intercept: (0, 12)
            </text>
          </g>

          {/* Equation Tag */}
          <g transform="translate(180, 28)">
            <rect x="0" y="0" width="115" height="24" rx="6" fill="#0f4a9b" />
            <text x="57.5" y="16" fontSize="11" fill="#ffffff" fontWeight="bold" textAnchor="middle">
              y = 2x + 12
            </text>
          </g>
        </svg>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2.5 font-medium">
        Figure 1: The line crosses the y-axis exactly at <span className="font-bold text-[#0a1f3d]">(0, 12)</span>. The intercept is 12 (the value of y before x begins to increase).
      </p>
    </div>
  );
}

// ── SVG Diagram 2: Scatter Plot & Extrapolation Warning ──
function ExtrapolationScatterChart() {
  return (
    <div className="my-7 p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#fffaf7] to-[#fdf2ea] border border-amber-300/60 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">
            Height vs Age: Interpolation vs Extrapolation
          </span>
        </div>
        <span className="text-[11px] font-bold text-rose-800 bg-rose-100 px-2.5 py-0.5 rounded-md border border-rose-300">
          Extrapolation Alert at x = 0
        </span>
      </div>

      <div className="w-full bg-white rounded-xl p-3 sm:p-4 border border-amber-200/70 shadow-inner">
        <svg viewBox="0 0 460 255" className="w-full h-auto max-h-[265px]" aria-label="Scatter plot showing student heights between ages 11 and 16, with a solid line through the data and a dotted extrapolation line back to age 0">
          <defs>
            <pattern id="scatter-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f8fafc" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="460" height="250" fill="url(#scatter-grid)" rx="8" />

          {/* Shaded Danger Extrapolation Zone (x = 0 to 11) */}
          <rect x="50" y="20" width="160" height="190" fill="rgba(244,63,94,0.06)" />
          <rect x="210" y="20" width="200" height="190" fill="rgba(16,185,129,0.05)" />

          {/* Axes */}
          <line x1="50" y1="205" x2="430" y2="205" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="50" y1="205" x2="50" y2="20" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="20" y="14" fontSize="10.5" fill="#475569" fontWeight="bold">Height (cm) ↑</text>
          
          {/* Axis Ticks & Values */}
          <line x1="50" y1="205" x2="50" y2="209" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="50" y="222" fontSize="10" fill="#e11d48" fontWeight="bold" textAnchor="middle">0 (Birth)</text>
          
          <line x1="210" y1="205" x2="210" y2="209" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="210" y="222" fontSize="10" fill="#047857" fontWeight="bold" textAnchor="middle">11 yrs</text>

          <line x1="390" y1="205" x2="390" y2="209" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="390" y="222" fontSize="10" fill="#047857" fontWeight="bold" textAnchor="middle">16 yrs</text>

          {/* Dedicated X-Axis Title Centered Beneath Ticks */}
          <text x="250" y="242" fontSize="10.5" fill="#475569" fontWeight="bold" textAnchor="middle">Age (years) →</text>

          {/* y-axis tick 90cm and 50cm */}
          <line x1="46" y1="160" x2="50" y2="160" stroke="#e11d48" strokeWidth="1.5" />
          <text x="42" y="164" fontSize="9.5" fill="#e11d48" fontWeight="bold" textAnchor="end">90 cm</text>

          <line x1="46" y1="195" x2="50" y2="195" stroke="#64748b" strokeWidth="1" />
          <text x="42" y="198" fontSize="8.5" fill="#64748b" textAnchor="end">~50cm</text>

          {/* Real data zone header */}
          <rect x="230" y="28" width="165" height="22" rx="4" fill="#ecfdf5" stroke="#a7f3d0" />
          <text x="312.5" y="43" fontSize="9.5" fill="#065f46" fontWeight="bold" textAnchor="middle">
            Observed Data (Ages 11–16)
          </text>

          {/* Extrapolation zone header */}
          <rect x="62" y="28" width="135" height="22" rx="4" fill="#fff1f2" stroke="#fecdd3" />
          <text x="129.5" y="43" fontSize="9.5" fill="#9f1239" fontWeight="bold" textAnchor="middle">
            Outside Data (Extrapolation)
          </text>

          {/* Scatter points in range x=11 to 16 */}
          <circle cx="215" cy="103" r="3.5" fill="#0f4a9b" />
          <circle cx="235" cy="97" r="3.5" fill="#0f4a9b" />
          <circle cx="260" cy="90" r="3.5" fill="#0f4a9b" />
          <circle cx="280" cy="86" r="3.5" fill="#0f4a9b" />
          <circle cx="310" cy="78" r="3.5" fill="#0f4a9b" />
          <circle cx="330" cy="74" r="3.5" fill="#0f4a9b" />
          <circle cx="360" cy="66" r="3.5" fill="#0f4a9b" />
          <circle cx="385" cy="58" r="3.5" fill="#0f4a9b" />

          {/* Solid line through observed data (x=11 to 16) */}
          <line x1="210" y1="105" x2="390" y2="55" stroke="#0f4a9b" strokeWidth="3" strokeLinecap="round" />

          {/* Dotted extension back to x = 0 (intercept at y=90cm -> pixel y=160) */}
          <line x1="50" y1="160" x2="210" y2="105" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="5 4" />

          {/* Intercept false point at x=0 */}
          <circle cx="50" cy="160" r="5" fill="#e11d48" stroke="#ffffff" strokeWidth="2" />
          
          {/* Label at intercept */}
          <g transform="translate(62, 155)">
            <rect x="0" y="-12" width="135" height="24" rx="4" fill="#9f1239" />
            <text x="67.5" y="4" fontSize="9.5" fill="#ffffff" fontWeight="bold" textAnchor="middle">
              False Intercept: 90 cm at age 0
            </text>
          </g>

          {/* Real newborn marker */}
          <circle cx="50" cy="195" r="3.5" fill="#10b981" />
          <text x="62" y="198" fontSize="8.5" fill="#059669" fontWeight="bold">Real newborn height (~50 cm)</text>
        </svg>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2.5 font-medium">
        Figure 2: The line predicts a 90 cm newborn because it is <span className="text-rose-700 font-bold">extrapolated</span> back to x = 0. The intercept has no physical meaning because x = 0 is far outside the measured dataset.
      </p>
    </div>
  );
}

// ── Interactive UAE Taxi Fare Simulator Widget ──
function TaxiFareSimulator() {
  const [distance, setDistance] = useState<number>(10);
  const fixedCharge = 12;
  const ratePerKm = 2;
  const totalFare = fixedCharge + ratePerKm * distance;

  return (
    <div className="my-7 rounded-2xl border border-[#0f4a9b]/20 bg-gradient-to-br from-[#f8faff] via-white to-[#f0f5fc] p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-[#0f4a9b]/10 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#0f4a9b] text-white">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-extrabold text-[#0a1f3d] uppercase tracking-wider">
              UAE Taxi Meter Equation Simulator
            </h3>
            <span className="text-[11px] text-gray-500 font-medium">fare = 2 × distance + 12</span>
          </div>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#0f4a9b] bg-[#0f4a9b]/10 px-2.5 py-1 rounded-md">
          y = mx + c
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 items-center">
        <div>
          <label htmlFor="distance-slider" className="block text-xs font-bold text-[#0a1f3d] mb-1.5 flex justify-between">
            <span>Trip Distance (x):</span>
            <span className="font-mono text-[#0f4a9b] text-sm">{distance} km</span>
          </label>
          <input
            id="distance-slider"
            type="range"
            min="0"
            max="30"
            step="1"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0f4a9b]"
          />
          <div className="flex justify-between text-[10px] text-gray-400 font-semibold mt-1">
            <span>0 km (Meter Start)</span>
            <span>15 km</span>
            <span>30 km</span>
          </div>

          <p className="text-xs text-gray-500 mt-3 leading-relaxed">
            Drag the slider to <strong className="text-[#0a1f3d]">0 km</strong>. Notice that even before the taxi moves, the meter already displays <strong className="text-[#0f4a9b]">AED 12</strong>. That is the y-intercept.
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-[#0f4a9b]/15 shadow-sm space-y-2.5">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500">Fixed Starting Fare (c):</span>
            <span className="font-mono font-bold text-[#C7A24A]">AED 12.00</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500">Distance Charge (2 × {distance} km):</span>
            <span className="font-mono font-bold text-[#0f4a9b]">AED {(ratePerKm * distance).toFixed(2)}</span>
          </div>
          <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
            <span className="text-xs font-extrabold text-[#0a1f3d]">Total Fare (y):</span>
            <span className="text-base font-extrabold text-[#0a1f3d] font-mono bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-lg border border-emerald-200">
              AED {totalFare.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Interactive Spot the Error Component ──
function SpotTheErrorInteractive() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="my-7 rounded-2xl border border-rose-200 bg-gradient-to-b from-[#fffaf8] to-[#fdf4f0] p-5 sm:p-6 overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <span className="p-1.5 rounded-lg bg-rose-600 text-white">
          <XCircle className="w-4 h-4" />
        </span>
        <span className="text-xs font-extrabold text-rose-900 uppercase tracking-wider">
          Section 07 · Spot The Examiner Trap
        </span>
      </div>

      <div className="p-4 bg-white rounded-xl border border-rose-100 mb-4 shadow-2xs">
        <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider block mb-1">
          Student Exam Answer:
        </span>
        <p className="text-sm font-serif italic text-slate-800 leading-snug">
          "The intercept is −180, so the shop sells −180 ice creams at 0°C."
        </p>
      </div>

      <p className="text-xs text-slate-600 font-medium mb-3.5">
        Before clicking below, think: <strong className="text-[#0a1f3d]">what crucial error did this student make in their interpretation?</strong>
      </p>

      <button
        type="button"
        onClick={() => setRevealed(!revealed)}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0a1f3d] hover:bg-[#0f4a9b] transition-colors shadow-sm"
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-[#F5D77F]" />
        {revealed ? 'Hide Examiner Model Answer' : 'Reveal Full Model Answer & Examiner Breakdown'}
      </button>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-rose-200/80 space-y-3"
          >
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-2">
              <div className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full Examiner Model Answer:</span>
              </div>
              <p className="leading-relaxed font-medium">
                The intercept is −180, but it has <strong>no real meaning</strong> here. 0°C is far outside the temperatures recorded (25°C to 45°C), and a shop cannot sell a negative number of ice creams anyway. The number comes out of the algebraic equation, but the real-world situation it describes does not exist.
              </p>
            </div>

            <figure className="my-3 rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-white">
              <img
                src="/images/blogs/07-spot-the-error-marked-answer.webp"
                alt="Practice question (IGCSE style) marked answer on y-intercept extrapolation error"
                width={1200}
                height={680}
                loading="lazy"
                className="w-full h-auto object-cover block"
              />
              <figcaption className="py-2 px-3 text-center text-xs text-gray-500 italic bg-slate-50 border-t border-slate-100">
                Always check whether zero is inside the range of the data.
              </figcaption>
            </figure>

            <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-[11.5px] text-amber-900 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-0.5">Key Exam Mark Scheme Rule:</span>
                Never treat mathematical extrapolation as automatic reality. If x = 0 is outside the observed data, state explicitly: <em className="font-semibold">"The intercept has no meaning because x = 0 is outside the range of the data."</em>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Table of Contents Component ──
function TOC({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/10 bg-[#f8fafd] overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-3.5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0f4a9b]">In This Article</span>
        </div>
        <span className="lg:hidden text-[#0f4a9b]">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <div className={`lg:block ${open ? 'block' : 'hidden'}`}>
        <div className="px-5 pb-3.5 space-y-1">
          {TOC_ITEMS.map((item, i) => (
            <a
              key={i}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center gap-2.5 group py-1"
            >
              <span className="shrink-0 text-[10px] font-extrabold text-[#0f4a9b]/35 w-4">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[13px] text-gray-500 group-hover:text-[#0f4a9b] transition-colors leading-snug">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Social Share Component ──
function SocialShare({ url, title, center }: { url: string; title: string; center?: boolean }) {
  const enc = encodeURIComponent(url);
  const encT = encodeURIComponent(title);
  return (
    <div className={`flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
      <a
        href={`https://wa.me/?text=${encT}%20${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#25d366]/10 hover:bg-[#25d366]/20 transition"
        aria-label="Share on WhatsApp"
      >
        <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="w-4 h-4" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1877f2]/10 hover:bg-[#1877f2]/20 transition text-[#1877f2] font-extrabold text-xs"
        aria-label="Share on Facebook"
      >
        f
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${enc}&title=${encT}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 transition text-[#0a66c2] font-extrabold text-xs"
        aria-label="Share on LinkedIn"
      >
        in
      </a>
      <a
        href={`mailto:?subject=${encT}&body=${enc}`}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500"
        aria-label="Share via Email"
      >
        <Mail className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

// ── FAQ Accordion ──
function FAQAccordion() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2.5">
      {FAQS.map((faq, i) => {
        const isOpen = active === i;
        return (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setActive(isOpen ? null : i)}
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  minWidth: 36,
                  background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                  color: isOpen ? '#fff' : '#0f4a9b',
                  transition: 'background 300ms, color 300ms',
                  border: 'none',
                  cursor: 'pointer',
                }}
                aria-label={`Toggle FAQ: ${faq.q}`}
              >
                <span className="font-extrabold text-sm">?</span>
              </button>
              <button
                onClick={() => setActive(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex-1 flex items-center gap-2.5 text-left rounded-full border"
                style={{
                  minHeight: 44,
                  padding: '7px 14px',
                  cursor: 'pointer',
                  background: 'transparent',
                  borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)',
                }}
              >
                <span className="flex-1 font-semibold text-[#0a1f3d] text-[13px] leading-snug">{faq.q}</span>
                <span
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: 28,
                    height: 28,
                    minWidth: 28,
                    borderRadius: '50%',
                    background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                    color: isOpen ? '#fff' : '#0f4a9b',
                    transition: 'background 300ms, color 300ms, transform 300ms',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <ChevronDown className="h-3 w-3" />
                </span>
              </button>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  className="ml-[48px]"
                >
                  <div
                    className="flex items-start gap-2.5 rounded-2xl border p-4"
                    style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.12)', boxShadow: '0 3px 12px rgba(15,74,155,0.05)' }}
                  >
                    <p className="flex-1 text-gray-600 text-[13px] leading-relaxed text-justify">{faq.a}</p>
                    <span
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{ width: 28, height: 28, minWidth: 28, background: '#0f4a9b', color: '#fff' }}
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function WhatDoesYInterceptMeanBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <Layout>
      <SEOHead
        title={BLOG.title}
        description={BLOG.description}
        canonical={canonical}
        ogImage={BLOG.heroImage}
        author={BLOG.author}
        placename="United Arab Emirates"
        ogType="article"
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Academic & Exam Skills', url: '/blogs/academic-exam-skills' },
            { name: 'What Does the y-Intercept Mean?', url: canonical },
          ]),
          articleSchema({
            title: BLOG.h1,
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: {
              name: 'Fahad Khan',
              url: '/tutors/fahad-khan',
              jobTitle: 'Maths Tutor, IGCSE, GCSE & A-Level | Ustaad UAE',
            },
            reviewer: {
              name: 'Ustaad Editorial Team',
              url: '/editorial',
              jobTitle: 'Ustaad Editorial Team',
            },
            image: BLOG.heroImage,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* Breadcrumbs */}
      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1">
            <Home className="h-3 w-3" /> Home
          </a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs" className="hover:text-[#0f4a9b] transition">
            Blog
          </a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs/academic-exam-skills" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">
            Academic &amp; Exam Skills
          </a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">y-Intercept Meaning</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Stream Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">
                USTAAD UAE · ACADEMIC &amp; EXAM SKILLS
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span
                className="italic"
                style={{
                  background: THEME_GRADIENT,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {BLOG.titleLine2}
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-4 text-justify">
              What does the y-intercept mean in a real-life graph? A maths teacher explains how to read it in context, and when it means nothing at all.
            </p>

            {/* Author & Reviewer Meta */}
            <div className="mb-4 mt-2 space-y-2 border-y border-slate-100 py-3">
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Written by:</span>{' '}
                  <a href="/tutors/fahad-khan" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    Fahad Khan
                  </a>
                  <span className="block sm:inline">
                    {' '}| Maths Tutor, IGCSE, GCSE &amp; A-Level, Ustaad UAE
                  </span>
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <ShieldCheck className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Reviewed by:</span>{' '}
                  <a href="/editorial" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                    Ustaad Editorial Team
                  </a>
                  <span className="block sm:inline">
                    {' '}| Every guide is checked for syllabus accuracy and parent clarity
                  </span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 pt-1">
                <time dateTime={BLOG.datePublished} className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  Published: 2 October 2026 · Ustaad UAE
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A]" />
                  {BLOG.readTime}
                </span>
                <SocialShare url={shareUrl} title={BLOG.title} />
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-0"
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-[16/9] bg-slate-100">
              <img
                src={BLOG.heroImage}
                alt={BLOG.heroAlt}
                width={1376}
                height={774}
                fetchPriority="high"
                className="w-full h-full object-cover block"
              />
            </div>
            <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">
              {BLOG.heroCaption}
            </figcaption>
          </motion.figure>

          {/* Table of Contents */}
          <TOC open={tocOpen} setOpen={setTocOpen} />
        </div>
      </section>

      {/* Article Body */}
      <article className="pb-6 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-sm lg:text-[15px] leading-[1.85] [&_p]:text-justify [&_p]:mb-3.5 [&_li]:text-justify break-words">

            {/* Intro Narrative */}
            <p>
              A student has the equation <em>y = 2x + 12</em> in front of them. I ask what <em>c</em> is. "Twelve," they say, straight away, no hesitation.
            </p>
            <p className="font-semibold text-[#0a1f3d]">"Twelve what?"</p>
            <p>Nobody answers.</p>
            <p>
              This happens in almost every class I teach, at every level. Students learn to find the intercept long before they learn to say what it means, and the two skills get marked very differently. One earns a method mark. The other earns an interpretation mark, and that is the one most students give away for free.
            </p>
            <p>
              This article covers what the intercept means, how to write that meaning so it earns the mark, and, just as important, when it does not mean anything at all.
            </p>

            {/* 01 */}
            <SectionHeading num="01" id="intercept-starting-value">
              The intercept is the starting value
            </SectionHeading>
            <p>
              The y-intercept is the value of <em>y</em> when <em>x</em> is 0. It is whatever you have before anything changes: before any time passes, before any distance is travelled, before any input is added.
            </p>
            <p>
              In <em>y = 2x + 12</em>, the intercept is 12. That is the point (0, 12), where the line crosses the y-axis.
            </p>
            <p>
              The other number in the equation, the gradient, tells you how fast that starting value changes. My colleague Tabraiz Khan explains{' '}
              <a href="/blogs/what-does-gradient-mean-maths-physics" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                what the gradient means
              </a>{' '}
              in a separate guide, so I will not repeat it here.
            </p>

            {/* DIAGRAM 1 */}
            <CoordinateInterceptChart />

            {/* 02 */}
            <SectionHeading num="02" id="uae-taxi-meter-example">
              A UAE example: the taxi meter
            </SectionHeading>
            <p>
              Say a taxi charges AED 12 just to start the meter, then AED 2 for every kilometre after that. (These are illustrative figures for this example, not a quote from any real fare table; actual rates change and usually include a minimum fare, so do not use these numbers to estimate a real trip.)
            </p>
            <p>The equation for the fare looks like this:</p>
            
            <div className="my-4 p-4 rounded-xl bg-gradient-to-r from-[#0f4a9b]/8 to-[#C7A24A]/10 border border-[#0f4a9b]/15 text-center">
              <span className="block text-xs font-bold text-[#0f4a9b] uppercase tracking-wider mb-1">Linear Formula</span>
              <p className="text-base sm:text-lg font-mono font-extrabold text-[#0a1f3d]">
                fare = 2 × distance + 12
              </p>
            </div>

            <p>
              The intercept, 12, is what you pay before the car has moved a single metre. The gradient, 2, is the price of each extra kilometre.
            </p>
            <p>
              Try it for a 10 km trip: <em>2 × 10 + 12 = AED 32</em>.
            </p>
            <p>
              That is the whole idea. The intercept is the fixed part. The gradient is the part that grows.
            </p>

            {/* Interactive Widget */}
            <TaxiFareSimulator />

            <InlineImage
              src="/images/blogs/02-taxi-meter-fixed-charge-12.webp"
              alt="Taxi meter showing AED 12.00 at 0.0 km, with the Dubai skyline behind"
              caption="A taxi meter before the trip starts."
            />

            {/* 03 */}
            <SectionHeading num="03" id="write-it-for-the-marks">
              How to write it for the marks
            </SectionHeading>
            <p>
              Exam questions often ask what the intercept represents, and this is where students lose marks even when they have found the right number.
            </p>

            {/* Answer Comparison Callout */}
            <div className="my-5 grid sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50">
                <div className="flex items-center gap-1.5 text-rose-700 font-extrabold text-xs mb-1.5">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>Weak answer</span>
                </div>
                <p className="text-xs font-serif italic text-slate-800 bg-white p-2.5 rounded-lg border border-rose-100 mb-2">
                  "The intercept is 12."
                </p>
                <p className="text-[11.5px] text-rose-900 leading-snug">
                  Correct number, but zero context or units. Loses the interpretation mark.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50">
                <div className="flex items-center gap-1.5 text-emerald-800 font-extrabold text-xs mb-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Full Examiner Answer (Full Marks)</span>
                </div>
                <p className="text-xs font-serif italic text-slate-800 bg-white p-2.5 rounded-lg border border-emerald-100 mb-2">
                  "The intercept is 12, which means there is a fixed charge of AED 12 before any distance is travelled."
                </p>
                <p className="text-[11.5px] text-emerald-950 leading-snug">
                  Includes the numerical value, the real-world units, and context at x = 0.
                </p>
              </div>
            </div>

            <p>The weak answer is correct and worth almost nothing. The full answer earns the mark because it has three things in it:</p>

            <div className="my-4 rounded-xl bg-[#f8fafd] border border-[#0f4a9b]/15 p-4 space-y-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                <div><strong className="text-[#0a1f3d]">The number:</strong> 12</div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                <div><strong className="text-[#0a1f3d]">The units:</strong> AED</div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                <div><strong className="text-[#0a1f3d]">What it means in this situation:</strong> the fixed charge before any distance is travelled</div>
              </div>
            </div>

            <InlineImage
              src="/images/blogs/04-full-answer-number-units-meaning.webp"
              alt="Handwritten maths exam answer breakdown showing number, units, and real-world meaning"
            />

            <p>
              Train yourself to hit all three every time you are asked to interpret an intercept. It is the same habit described in our guide on{' '}
              <a href="/blogs/command-words-igcse-a-level-exams" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                command words
              </a>
              , where the question is telling you exactly what kind of answer it wants, and &ldquo;interpret&rdquo; or &ldquo;what does this represent&rdquo; wants all three parts, not just the number.
            </p>

            <p>
              For students preparing for Cambridge or Edexcel papers, Ustaad's{' '}
              <a href="/maths" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                1-to-1 maths tutoring
              </a>{' '}
              specifically drills these precision interpretation marks across algebra, coordinate geometry, and statistics.
            </p>

            {/* 04 */}
            <SectionHeading num="04" id="when-intercept-means-something">
              When the intercept means something
            </SectionHeading>
            <p>
              Take this example: <em>test score = 8 × hours of revision + 35</em>.
            </p>
            <p>
              The intercept, 35, is the score a student would be expected to get with zero hours of revision.
            </p>
            <p>
              This one makes sense, because zero hours of revision is a real, possible situation. A student could genuinely do no revision at all. The intercept sits inside a situation that could actually happen, so it is worth interpreting.
            </p>

            <div className="my-5 p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-950 space-y-1">
              <span className="font-extrabold text-emerald-900 block text-xs uppercase tracking-wider mb-1">
                The Practical Test: Does x = 0 Make Sense?
              </span>
              <p>
                <strong>The test to apply here:</strong> is <em>x = 0</em> a real situation, and is it inside the range the data actually covers? If yes, the intercept means something and you should say what.
              </p>
            </div>

            {/* 05 */}
            <SectionHeading num="05" id="when-intercept-means-nothing">
              When the intercept means nothing
            </SectionHeading>
            <p>
              This is the part most revision skips, and it is often where marks are lost.
            </p>
            <p>
              <strong>Example A: height and age.</strong>
              <br />
              Say a line of best fit, built from students aged 11 to 16, gives:
              <br />
              <span className="font-mono font-bold text-[#0a1f3d] block my-1.5 pl-3 border-l-2 border-[#0f4a9b]">
                height = 5 × age + 90 (height in cm)
              </span>
              At age 0, this line says a baby is 90 cm tall. A newborn is about 50 cm. The line is simply wrong there, because it was never built from babies. It was built from 11 to 16 year olds, and it only describes that range safely.
            </p>

            <InlineImage
              src="/images/blogs/05-height-age-growth-chart.webp"
              alt="Teenage boy having his height measured against a wall ruler, with a framed baby photo on the table beside him"
              caption="A teenager's height being measured at home."
            />

            <p>
              <strong>Example B: ice cream sales and temperature.</strong>
              <br />
              For days between 25°C and 45°C, suppose: <em>sales = 12 × temperature − 180</em>.
              <br />
              At 0°C, the line says sales = −180 ice creams. You cannot sell a negative number of ice creams. The model breaks down completely outside the temperatures it was built from.
            </p>

            <InlineImage
              src="/images/blogs/06-ice-cream-kiosk-hot-day-dubai.webp"
              alt="Ice cream kiosk on a hot day in Dubai illustrating temperature vs sales data limits"
              caption="An ice cream kiosk on a hot day in Dubai."
            />

            {/* DIAGRAM 2 */}
            <ExtrapolationScatterChart />

            <p>
              There is a name for this. Reading a line within the range of the data you have is called <strong>interpolation</strong>. Reading it beyond that range, the way we just did at age 0 and at 0°C, is called <strong>extrapolation</strong>, and it is exactly where these intercepts fall apart.
            </p>

            <div className="my-5 p-4 rounded-xl bg-gradient-to-r from-[#0a1f3d] to-[#0f3a7a] text-white shadow-md">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#F5D77F] block mb-1">
                THE SENTENCE THAT EARNS THE MARK
              </span>
              <p className="text-sm font-semibold italic text-slate-100">
                "The intercept has no meaning here because x = 0 is outside the range of the data."
              </p>
            </div>

            <p>
              That is it. You do not need to explain why the number is wrong in detail. You need to say clearly that it falls outside the data the line was built from.
            </p>

            {/* 06 */}
            <SectionHeading num="06" id="what-changes-at-a-level">
              What changes at A-Level
            </SectionHeading>
            <p>
              In statistics, a regression line's intercept often exists only to make the line fit the data correctly; it is not meant to represent anything real on its own. At A-Level, you are expected to say explicitly whether interpreting the intercept is sensible in context, and to avoid extrapolating beyond the range of the data used to calculate the line.
            </p>

            <div className="my-4 p-4 rounded-xl border border-[#0f4a9b]/15 bg-[#f4f7fc] text-xs text-gray-700 leading-relaxed">
              <span className="font-bold text-[#0a1f3d] block mb-1">A-Level Statistics note:</span>
              In Pearson Edexcel A-Level Maths (9MA0), students interpret a regression line in context and are expected to recognise the danger of extrapolating beyond the data. Cambridge 9709 does not include regression, but the same care applies to any line of best fit.
            </div>

            {/* 07 */}
            <SectionHeading num="07" id="spot-the-error">
              Spot the error
            </SectionHeading>
            <p>
              Here is a student's answer to the ice cream question from section 05:
            </p>

            <SpotTheErrorInteractive />

            {/* 08 */}
            <SectionHeading num="08" id="habit-before-the-exam">
              One habit before the exam
            </SectionHeading>
            <p>Before you write anything about <em>c</em>, ask yourself one question:</p>

            <div className="my-5 rounded-2xl border border-[#0f4a9b]/20 bg-gradient-to-b from-[#f8fafd] to-white p-5 shadow-sm">
              <span className="text-xs font-bold text-[#0f4a9b] uppercase tracking-wider block mb-2">
                The Pre-Exam Decision Rule:
              </span>
              <p className="text-sm font-extrabold text-[#0a1f3d] mb-4">
                "Is x = 0 inside my data, and is it a real situation?"
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <span className="font-extrabold text-emerald-900 block mb-1">If YES:</span>
                  <p className="text-emerald-950">
                    State the number, the units, and what it means in context at starting conditions.
                  </p>
                </div>
                <div className="p-3 bg-rose-50 rounded-xl border border-rose-200">
                  <span className="font-extrabold text-rose-900 block mb-1">If NO:</span>
                  <p className="text-rose-950">
                    Say it is outside the range of the data (extrapolation), and leave it there.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Practise this habit on real past papers before sitting your final exams. If you are building a structured revision timetable, see our guide on{' '}
              <a href="/blogs/igcse-preparation-past-papers-final-step" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                IGCSE preparation and why past papers are the final step
              </a>{' '}
              to make sure foundational concepts are solidified first.
            </p>

            {/* Section CTA / Free Trial */}
            <div className="my-8 rounded-2xl p-6 lg:p-8 text-center text-white shadow-xl"
              style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-[#F5D77F] uppercase tracking-wider mb-2.5 border border-white/15">
                Online 1-to-1 Maths Tuition Across UAE
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2.5">
                Can your child explain every number on the graph?
              </h3>
              <p className="text-white/85 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
                In a free 30-minute trial, <a href="/tutors/fahad-khan" className="text-[#F5D77F] font-bold underline hover:text-white">Fahad Khan</a> works through a real-life graph question with your child and shows where the interpretation marks are being missed. Lessons are online and 1-to-1, for families in every emirate.
              </p>
              <div className="flex flex-col items-center gap-2.5">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full sm:w-auto">
                  <a
                    href="/contact#form"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-sm shadow-md h-11"
                    style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
                  >
                    Book a Free Trial
                  </a>
                  <a
                    href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20would%20like%20to%20book%20a%20free%20trial%20session%20with%20Fahad%20Khan%20for%20Maths."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] border border-transparent rounded-full font-bold text-white transition text-sm shadow-md h-11"
                  >
                    <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="h-4 w-4" />
                    Ask on WhatsApp
                  </a>
                </div>
                <span className="text-[11px] text-white/70 font-medium">Free 30-min trial · No commitment</span>
              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <div id="frequently-asked-questions" className="mt-10 pt-8 border-t border-slate-100 scroll-mt-24">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0f4a9b]/6 text-[#0f4a9b] text-xs font-bold rounded-full mb-2.5 border border-[#0f4a9b]/10">
                <BookOpen className="h-3 w-3" />
                <span className="text-[10px] uppercase tracking-wider">Exam &amp; Concept Q&amp;A</span>
              </div>
              <h2 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d]">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion />
          </div>

          {/* Share Bottom */}
          <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col items-center gap-3">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Found this helpful? Share it</p>
            <SocialShare url={shareUrl} title={BLOG.title} center />
          </div>

          {/* Author & Reviewer Cards */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="relative rounded-2xl border border-[#0f4a9b]/10 bg-gradient-to-br from-white to-[#f4f7fd] p-5 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#0f4a9b] border border-[#0f4a9b]/15 bg-[#0f4a9b]/5">
                  About the Author
                </span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-0.5 pr-24 mt-2">
                <a href="/tutors/fahad-khan" className="hover:text-[#0f4a9b] hover:underline">
                  Fahad Khan
                </a>
              </p>
              <p className="text-[11px] font-semibold text-[#0f4a9b] mb-2">
                Maths Tutor, IGCSE, GCSE &amp; A-Level
              </p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                10+ years of teaching experience, BS Mathematics &amp; B.Ed, specialising in Cambridge and Edexcel Maths from IGCSE through A-Level. Focuses on mark-scheme accuracy, algebra confidence, and calm exam technique for UAE students.
              </p>
            </div>

            <div className="relative rounded-2xl border border-[#C7A24A]/20 bg-gradient-to-br from-white to-[#fdf9f0] p-5 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6">
                  Reviewed By
                </span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-0.5 pr-24 mt-2">
                <a href="/editorial" className="hover:text-[#0f4a9b] hover:underline">
                  Ustaad Editorial Team
                </a>
              </p>
              <p className="text-[11px] font-semibold text-[#C7A24A] mb-2">
                Educational Validity &amp; Curriculum Accuracy
              </p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                Every guide is checked for accuracy, educational validity and parent clarity before it is published. Verified against current Cambridge 0580 and Edexcel 4MA1 coordinate geometry syllabuses.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {BLOG.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-[#0a1f3d]">
                {tag}
              </span>
            ))}
          </div>

          {/* Meet the Writers */}
          <div className="mt-6 mb-8 px-4 py-4 rounded-2xl bg-[#f8fafd] border border-[#0f4a9b]/10 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              Meet the writers and reviewers behind Ustaad UAE on our{' '}
              <a href="/editorial" className="text-[#0f4a9b] font-semibold hover:underline">
                editorial page
              </a>
              .
            </p>
          </div>

        </div>
      </article>
    </Layout>
  );
}
