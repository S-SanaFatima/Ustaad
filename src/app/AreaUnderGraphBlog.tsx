import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle, CheckCircle2, Compass } from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'Area Under a Graph: What It Means in Physics & Maths | Ustaad',
  titleLine1: 'What Does the Area Under a Graph Mean?',
  titleLine2: 'Velocity-Time, Force-Extension and More, Explained',
  slug: 'area-under-graph-meaning-physics-maths',
  description: 'What the area under a velocity-time, force-extension or current-time graph represents, how to calculate it, and how to estimate it under curves. IGCSE, GCSE and A-Level.',
  heroImage: '/images/blogs/area-under-velocity-time-graph-hero.jpg',
  heroAlt: 'Velocity-time graph with the area under the line shaded and split into a triangle, a rectangle and a second triangle, labelled area equals distance travelled',
  heroCaption: 'Split the shape, add the areas, and the total is the distance travelled: 108 metres in this example.',
  datePublished: '2026-11-06',
  dateModified: '2026-11-06',
  author: 'Tabraiz Khan',
  readTime: '9 min read',
  tags: ['Physics', 'Maths', 'Area Under a Graph', 'Velocity-Time Graphs', 'Trapezium Rule', 'IGCSE', 'GCSE', 'A-Level'],
};

const FAQS = [
  {
    q: 'What does the area under a velocity-time graph represent?',
    a: 'The area under a velocity-time graph is the displacement, or the distance travelled when the object moves in one direction. Velocity in m/s multiplied by time in s gives metres, which is why the area comes out as a distance.',
  },
  {
    q: 'How do you find the area under a velocity-time graph?',
    a: 'Split the region between the line and the time axis into rectangles and triangles, work out each area (base × height for a rectangle, ½ × base × height for a triangle), and add them. A sloping section between two velocities can also be treated as one trapezium: ½ × (a + b) × h.',
  },
  {
    q: 'Is the area under a speed-time graph the same as under a velocity-time graph?',
    a: 'For motion in one direction, yes: both give the distance travelled. The difference appears at A-Level, where velocity can be negative. Area below the time axis on a velocity-time graph counts as negative displacement, while a speed-time graph never goes below the axis.',
  },
  {
    q: 'What does the area under a force-extension graph represent?',
    a: 'It represents the work done to stretch the spring or material, which is stored as elastic potential energy. For the straight-line region where Hooke’s law applies, the area is a triangle: ½ × force × extension, giving joules.',
  },
  {
    q: 'How do you find the area under a curved graph?',
    a: 'In Physics you estimate it by counting squares: count the whole squares, combine part squares, then multiply by the value of one square. In Maths you use the trapezium rule, splitting the area into equal-width strips. Both give estimates, so say whether yours is an overestimate or underestimate if asked.',
  },
  {
    q: 'What is the difference between gradient and area under a graph?',
    a: 'The gradient divides the y-quantity by the x-quantity, so it gives a rate (for example speed or acceleration). The area multiplies them, so it gives a total (for example distance or energy). Checking the units of y × x tells you instantly what any area means.',
  },
];

const TOC_ITEMS = [
  { label: '01. Why Area Confuses Students', id: 'why-area' },
  { label: '02. The Units Trick: y × x', id: 'units-trick' },
  { label: '03. Velocity-Time Graphs: Area = Distance', id: 'velocity-time' },
  { label: '04. Speed vs Velocity: Area Below the Axis', id: 'below-axis' },
  { label: '05. Other Graphs Where the Area Matters', id: 'other-graphs' },
  { label: '06. Curved Graphs: Counting Squares & the Trapezium Rule', id: 'curved-graphs' },
  { label: '07. Gradient or Area? A 5-Second Check', id: 'gradient-or-area' },
  { label: '08. Where Students Lose Marks', id: 'lost-marks' },
  { label: '09. Teacher Challenge', id: 'teacher-challenge' },
  { label: '10. Teacher’s Takeaway', id: 'takeaway' },
  { label: 'Frequently Asked Questions', id: 'frequently-asked-questions' },
];

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-8 mb-3 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/40 mb-1">{num}</span>
      <h2 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h2>
    </div>
  );
}

function NarrativeBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-[#0f4a9b]/12 bg-[#f4f7fc] overflow-hidden">
      <div className="px-4 py-2 border-b border-[#0f4a9b]/10 bg-[#0f4a9b]/5">
        <span className="text-[10px] font-extrabold text-[#0f4a9b] uppercase tracking-[0.13em]">{label}</span>
      </div>
      <div className="px-4 py-3.5 text-sm text-gray-700 leading-[1.75] text-justify space-y-2">{children}</div>
    </div>
  );
}

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mx-auto my-6 max-w-xl">
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/9] bg-slate-100">
        <img src={src} alt={alt} width={1408} height={768} loading="lazy" className="w-full h-full object-cover block" />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">{caption}</figcaption>
      )}
    </figure>
  );
}

// ── SVG Diagram 1: Velocity-time graph split into shapes ──
function VelocityTimeAreaSVG() {
  // scale: x 0..14 s -> 50..380 (23.57 px/s), y 0..12 m/s -> 185..55 (10.83 px per m/s)
  return (
    <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#f8faff] to-[#edf3fc] border border-[#0f4a9b]/15 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0f4a9b]" />
          <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">Velocity-Time Graph (v-t)</span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#0f4a9b] bg-white px-2.5 py-0.5 rounded-md border border-[#0f4a9b]/20">Area = Distance (m)</span>
      </div>
      <div className="w-full bg-white rounded-xl p-3 sm:p-4 border border-slate-200/80">
        <svg viewBox="0 0 420 225" className="w-full h-auto max-h-[240px]" role="img" aria-label="Velocity-time graph split into a triangle of 36 metres, a rectangle of 48 metres and a triangle of 24 metres">
          <line x1="50" y1="185" x2="400" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="50" y1="185" x2="50" y2="30" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="300" y="215" fontSize="10.5" fill="#475569" fontWeight="bold">Time t (s)</text>
          <text x="8" y="22" fontSize="10.5" fill="#475569" fontWeight="bold">Velocity v (m/s)</text>

          {/* Shaded shapes */}
          <polygon points="50,185 191.4,55 191.4,185" fill="rgba(37,99,235,0.18)" />
          <polygon points="191.4,55 285.7,55 285.7,185 191.4,185" fill="rgba(22,163,74,0.18)" />
          <polygon points="285.7,55 380,185 285.7,185" fill="rgba(225,29,72,0.16)" />

          {/* Divider lines */}
          <line x1="191.4" y1="55" x2="191.4" y2="185" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="285.7" y1="55" x2="285.7" y2="185" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />

          {/* Graph line */}
          <polyline points="50,185 191.4,55 285.7,55 380,185" fill="none" stroke="#0a1f3d" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />

          {/* Axis ticks */}
          <text x="36" y="59" fontSize="10" fill="#64748b" fontWeight="bold">12</text>
          <text x="47" y="199" fontSize="10" fill="#64748b" fontWeight="bold">0</text>
          <text x="187" y="199" fontSize="10" fill="#64748b" fontWeight="bold">6</text>
          <text x="279" y="199" fontSize="10" fill="#64748b" fontWeight="bold">10</text>
          <text x="374" y="199" fontSize="10" fill="#64748b" fontWeight="bold">14</text>

          {/* Area labels */}
          <text x="150" y="160" fontSize="11" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">A = 36 m</text>
          <text x="238.5" y="125" fontSize="11" fill="#15803d" fontWeight="bold" textAnchor="middle">B = 48 m</text>
          <text x="327" y="170" fontSize="11" fill="#be123c" fontWeight="bold" textAnchor="middle">C = 24 m</text>

          <rect x="262" y="22" width="130" height="22" rx="6" fill="#0a1f3d" />
          <text x="327" y="37" fontSize="10.5" fill="#fff" fontWeight="bold" textAnchor="middle">Total = 108 m</text>
        </svg>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2 font-medium">
        Accelerate for 6 s, cruise at 12 m/s for 4 s, then brake for 4 s. Each shape is a separate distance, and the total is 108 m.
      </p>
    </div>
  );
}

// ── SVG Diagram 2: Area below the axis ──
function BelowAxisSVG() {
  return (
    <div className="my-6 p-4 sm:p-5 rounded-2xl bg-[#fdf8f6] border border-orange-200/80 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
          <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">A-Level: Velocity Goes Negative</span>
        </div>
        <span className="text-[11px] font-mono font-bold text-orange-800 bg-orange-100/70 px-2.5 py-0.5 rounded-md border border-orange-300">Below axis = negative displacement</span>
      </div>
      <div className="w-full bg-white rounded-xl p-3 sm:p-4 border border-orange-100">
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-[230px]" role="img" aria-label="Velocity-time graph with 20 metres of area above the axis and 5 metres below it">
          {/* axis y=0 at 120; 10 px per m/s; x: 0..6 s -> 50..350 (50 px/s) */}
          <line x1="50" y1="120" x2="390" y2="120" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="50" y1="200" x2="50" y2="25" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="330" y="112" fontSize="10.5" fill="#475569" fontWeight="bold">t (s)</text>
          <text x="58" y="14" fontSize="10.5" fill="#475569" fontWeight="bold">v (m/s)</text>

          <polygon points="50,20 250,120 50,120" fill="rgba(37,99,235,0.18)" />
          <polygon points="250,120 300,170 350,120" fill="rgba(225,29,72,0.18)" />
          <polyline points="50,20 250,120 300,170 350,120" fill="none" stroke="#0a1f3d" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />

          <text x="32" y="24" fontSize="10" fill="#64748b" fontWeight="bold">10</text>
          <text x="34" y="174" fontSize="10" fill="#64748b" fontWeight="bold">-5</text>
          <text x="246" y="135" fontSize="10" fill="#64748b" fontWeight="bold">4</text>
          <text x="346" y="135" fontSize="10" fill="#64748b" fontWeight="bold">6</text>

          <text x="62" y="110" fontSize="10" fill="#1d4ed8" fontWeight="bold">+20 m (forwards)</text>
          <text x="300" y="195" fontSize="10" fill="#be123c" fontWeight="bold" textAnchor="middle">−5 m (backwards)</text>
        </svg>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2 font-medium">
        Distance travelled = 20 + 5 = 25 m. Displacement = 20 − 5 = 15 m from the start.
      </p>
    </div>
  );
}

// ── SVG Diagram 3: Trapezium rule on a curve ──
function TrapeziumRuleSVG() {
  // curve y = x^2 from 0 to 4, strips width 1. x: 0..4 -> 60..340 (70 px), y: 0..16 -> 190..30 (10 px)
  const pts = [0, 1, 2, 3, 4].map(x => ({ x: 60 + x * 70, y: 190 - x * x * 10 }));
  const curve = Array.from({ length: 41 }, (_, i) => {
    const x = i / 10;
    return `${60 + x * 70},${190 - x * x * 10}`;
  }).join(' ');
  return (
    <div className="my-6 p-4 sm:p-5 rounded-2xl bg-[#f4faf7] border border-emerald-200/70 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
          <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">Trapezium Rule: y = x², 0 to 4</span>
        </div>
        <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-md border border-emerald-300">Estimate = 22 · Exact = 21⅓</span>
      </div>
      <div className="w-full bg-white rounded-xl p-3 sm:p-4 border border-emerald-100">
        <svg viewBox="0 0 400 215" className="w-full h-auto max-h-[230px]" role="img" aria-label="Curve y equals x squared with four trapezium strips under it, showing the strips slightly overestimate the area">
          <line x1="60" y1="190" x2="370" y2="190" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="60" y1="190" x2="60" y2="20" stroke="#94a3b8" strokeWidth="1.5" />
          {pts.slice(0, 4).map((p, i) => (
            <polygon key={i} points={`${p.x},190 ${p.x},${p.y} ${pts[i + 1].x},${pts[i + 1].y} ${pts[i + 1].x},190`}
              fill={i % 2 === 0 ? 'rgba(5,150,105,0.16)' : 'rgba(5,150,105,0.26)'} stroke="#059669" strokeWidth="1" />
          ))}
          <polyline points={curve} fill="none" stroke="#0a1f3d" strokeWidth="2.5" />
          {pts.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="3.5" fill="#0a1f3d" />
              <text x={p.x} y="205" fontSize="10" fill="#64748b" fontWeight="bold" textAnchor="middle">{i}</text>
            </g>
          ))}
          <text x="345" y="28" fontSize="10" fill="#0a1f3d" fontWeight="bold">y = x²</text>
          <text x="40" y="34" fontSize="10" fill="#64748b" fontWeight="bold">16</text>
          <text x="72" y="40" fontSize="9.5" fill="#047857" fontWeight="bold">Straight tops sit just above the curve,</text>
          <text x="72" y="53" fontSize="9.5" fill="#047857" fontWeight="bold">so this is an overestimate.</text>
        </svg>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2 font-medium">
        ½ × 1 × [0 + 16 + 2(1 + 4 + 9)] = 22. The curve bends upwards, so every strip slightly overshoots it.
      </p>
    </div>
  );
}

// ── Interactive Teacher Challenge ──
function TeacherChallengeInteractive() {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/20 bg-gradient-to-b from-[#f8faff] to-[#f0f5fc] p-5 sm:p-6 overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <span className="p-1.5 rounded-lg bg-[#0f4a9b] text-white">
          <Compass className="w-4 h-4" />
        </span>
        <span className="text-xs font-extrabold text-[#0f4a9b] uppercase tracking-wider">Interactive Classroom Challenge</span>
      </div>

      <p className="text-sm font-bold text-[#0a1f3d] mb-3 leading-snug">
        Graph Scenario: A cyclist’s velocity rises steadily from 0 m/s to 20 m/s in 4 seconds, then stays at 20 m/s for 3 seconds.
      </p>

      <div className="space-y-2 text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200/80 mb-4">
        <div className="flex items-start gap-2">
          <span className="font-bold text-[#0f4a9b]">Q1:</span>
          <span>What does the area under this graph represent?</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="font-bold text-[#0f4a9b]">Q2:</span>
          <span>Calculate the total distance travelled in the 7 seconds.</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="font-bold text-[#0f4a9b]">Q3:</span>
          <span>Use your answer to find the average speed over the whole journey.</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setRevealed(!revealed)}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0f4a9b] hover:bg-[#0d3f82] transition-colors shadow-sm"
      >
        <CheckCircle2 className="w-3.5 h-3.5" />
        {revealed ? 'Hide Model Answer & Mark Scheme' : 'Reveal Model Answer & Mark Breakdown'}
      </button>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-[#0f4a9b]/15 space-y-3"
          >
            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
              <div className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Model Answer (Full 4 Marks):</span>
              </div>
              <p>• <strong>Q1 (1 mark):</strong> The distance travelled (displacement), because m/s × s = m.</p>
              <p>• <strong>Q2 (2 marks):</strong> Triangle = ½ × 4 × 20 = 40 m. Rectangle = 3 × 20 = 60 m. Total = <strong>100 m</strong>.</p>
              <p>• <strong>Q3 (1 mark):</strong> Average speed = total distance ÷ total time = 100 ÷ 7 = <strong>14.3 m/s</strong> (3 s.f.).</p>
            </div>
            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-[11.5px] text-amber-900">
              <span className="font-bold block mb-0.5">Examiner Note:</span>
              The most common wrong answer to Q3 is (0 + 20) ÷ 2 = 10 m/s. Averaging the start and end speeds only works for one constant-acceleration section, never for a whole multi-stage journey.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
        <div className="px-5 pb-3.5 space-y-0.5">
          {TOC_ITEMS.map((item, i) => (
            <a key={i} href={`#${item.id}`}
              onClick={e => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              className="flex items-center gap-2.5 group py-0.5">
              <span className="shrink-0 text-[10px] font-extrabold text-[#0f4a9b]/35 w-4">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[13px] text-gray-500 group-hover:text-[#0f4a9b] transition-colors leading-snug">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialShare({ url, title, center }: { url: string; title: string; center?: boolean }) {
  const enc = encodeURIComponent(url);
  const encT = encodeURIComponent(title);
  return (
    <div className={`flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
      <a href={`https://wa.me/?text=${encT}%20${enc}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#25d366]/10 hover:bg-[#25d366]/20 transition" aria-label="Share on WhatsApp">
        <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="w-4 h-4" />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1877f2]/10 hover:bg-[#1877f2]/20 transition text-[#1877f2] font-extrabold text-xs" aria-label="Share on Facebook">f</a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${enc}&title=${encT}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 transition text-[#0a66c2] font-extrabold text-xs" aria-label="Share on LinkedIn">in</a>
      <a href={`mailto:?subject=${encT}&body=${enc}`}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500" aria-label="Share via Email">
        <Mail className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function FAQAccordion() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-2">
      {FAQS.map((faq, i) => {
        const isOpen = active === i;
        return (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <button onClick={() => setActive(isOpen ? null : i)}
                className="flex-shrink-0 flex items-center justify-center rounded-full" aria-label={`Toggle answer: ${faq.q}`}
                style={{ width: 36, height: 36, minWidth: 36, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms, color 300ms', border: 'none', cursor: 'pointer' }}>
                <span className="font-extrabold text-sm">?</span>
              </button>
              <button onClick={() => setActive(isOpen ? null : i)} aria-expanded={isOpen}
                className="flex-1 flex items-center gap-2.5 text-left rounded-full border"
                style={{ minHeight: 44, padding: '7px 14px', cursor: 'pointer', background: 'transparent', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)' }}>
                <span className="flex-1 font-semibold text-[#0a1f3d] text-[13px] leading-snug">{faq.q}</span>
                <span className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: 28, height: 28, minWidth: 28, borderRadius: '50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms, color 300ms, transform 300ms', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <ChevronDown className="h-3 w-3" />
                </span>
              </button>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }} className="ml-[48px]">
                  <div className="flex items-start gap-2.5 rounded-2xl border p-3.5"
                    style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.12)', boxShadow: '0 3px 12px rgba(15,74,155,0.05)' }}>
                    <p className="flex-1 text-gray-600 text-[13px] leading-relaxed text-justify">{faq.a}</p>
                    <span className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{ width: 28, height: 28, minWidth: 28, background: '#0f4a9b', color: '#fff' }}>
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

const linkCls = 'text-[#0f4a9b] font-semibold hover:underline';

export default function AreaUnderGraphBlog() {
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
        preloadHeroImage={BLOG.heroImage}
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Academic & Exam Skills', url: '/blogs/academic-exam-skills' },
            { name: 'What Does the Area Under a Graph Mean?', url: canonical },
          ]),
          articleSchema({
            title: 'What Does the Area Under a Graph Mean? Velocity-Time, Force-Extension and More, Explained',
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: {
              name: 'Tabraiz Khan',
              url: '/tutors/tabraiz-khan',
              jobTitle: 'Cambridge Certified Maths & Physics Specialist | Ustaad UAE',
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
            },
            reviewer: {
              name: 'Nimra Shahzada',
              url: '/authors/nimra-shahzada',
              jobTitle: 'Content Lead & Academic Consultant, Ustaad UAE',
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
            },
            image: BLOG.heroImage,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1"><Home className="h-3 w-3" /> Home</a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs/academic-exam-skills" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">Academic & Exam Skills</a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">Area Under a Graph</span>
        </div>
      </div>

      {/* Hero header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">USTAAD UAE · ACADEMIC &amp; EXAM SKILLS</span>
            </div>

            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-justify">
              The gradient tells you how fast something changes. The area under the graph tells you how much it added up to. A Maths and Physics teacher explains what that area means on every graph you will meet at IGCSE, GCSE and A-Level, and how to calculate it without losing marks.
            </p>

            <div className="mb-4 mt-2 space-y-2">
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Written by:</span>{' '}
                  <a href="/tutors/tabraiz-khan" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">Tabraiz Khan</a>
                  <span className="block sm:inline">
                    {' '}<a href="/tutors/tabraiz-khan" className="text-gray-500 hover:text-[#0f4a9b]">| Maths &amp; Physics Specialist, Ustaad UAE</a>
                  </span>
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-medium">Reviewed by:</span>{' '}
                  <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] font-semibold underline">Nimra Shahzada</a>
                  <span className="block sm:inline">
                    {' '}<a href="/authors/nimra-shahzada" className="text-gray-500 hover:text-[#0f4a9b]">| Content Lead &amp; Academic Consultant, Ustaad UAE</a>
                  </span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 pt-1">
                <time dateTime={BLOG.datePublished} className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  Published: 6 November 2026 · Ustaad UAE Editorial Team
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A]" />{BLOG.readTime}
                </span>
                <SocialShare url={shareUrl} title={BLOG.title} />
              </div>
            </div>
          </motion.div>

          <motion.figure initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-0">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-[16/9] bg-slate-100">
              <img src={BLOG.heroImage} alt={BLOG.heroAlt} width={1376} height={774} fetchPriority="high" className="w-full h-full object-cover block" />
            </div>
            <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">{BLOG.heroCaption}</figcaption>
          </motion.figure>

          <TOC open={tocOpen} setOpen={setTocOpen} />
        </div>
      </section>

      {/* Article body */}
      <article className="pb-4 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-sm lg:text-[15px] leading-[1.8] [&_p]:text-justify [&_p]:mb-3 [&_li]:text-justify break-words">

            {/* Quick answer for featured snippets */}
            <div className="my-5 p-4 rounded-xl text-white shadow-md" style={{ background: THEME_GRADIENT }}>
              <span className="block text-[10px] uppercase tracking-[0.14em] text-[#F5D77F] font-extrabold mb-1.5">Quick Answer</span>
              <p className="!text-left !mb-0 text-[13.5px] leading-relaxed text-white/90">
                The area under a graph is the y-quantity multiplied by the x-quantity. On a <strong className="text-white">velocity-time graph</strong> it is the <strong className="text-white">distance travelled</strong> (m/s × s = m). On a <strong className="text-white">force-extension graph</strong> it is the <strong className="text-white">work done</strong>, or elastic potential energy (N × m = J). On a <strong className="text-white">current-time graph</strong> it is the <strong className="text-white">charge</strong> that flowed (A × s = C).
              </p>
            </div>

            {/* 01 */}
            <SectionHeading num="01" id="why-area">Why the Area Under a Graph Confuses Students</SectionHeading>
            <p>In my last article on{' '}
              <a href="/blogs/what-does-gradient-mean-maths-physics" className={linkCls}>what the gradient actually means</a>, the lesson was simple: the formula calculates the number, and the axes tell you what it means. The area under a graph works the same way, but students find it harder for one reason. The gradient is a <em>slope</em> you can see. The area is empty space under a line, and nobody tells you it stands for anything.
            </p>
            <p>So a student can split a velocity-time graph into a neat triangle and rectangle, add them, and write "108". Then the question asks, "What does this value represent?" and the answer is a guess.</p>
            <p>The good news is that one habit answers every area question you will meet, in Physics and in Maths.</p>

            {/* 02 */}
            <SectionHeading num="02" id="units-trick">The Units Trick: Area Means y × x</SectionHeading>
            <p>Area is always the quantity on the y-axis multiplied by the quantity on the x-axis. So before calculating anything, multiply the units of the two axes. The result tells you exactly what the area represents.</p>

            <div className="my-5 p-4 rounded-xl bg-[#f4f7fc] border border-[#0f4a9b]/15 text-center">
              <span className="block text-xs uppercase tracking-wider text-[#0f4a9b] font-extrabold mb-1">The Rule</span>
              <span className="text-base sm:text-lg font-mono font-extrabold text-[#0a1f3d]">
                Gradient = y ÷ x &nbsp;·&nbsp; Area = y × x
              </span>
            </div>

            <p>Velocity (m/s) × time (s) = metres, so the area is a distance. Force (N) × extension (m) = newton-metres, which are joules, so the area is energy. You do not need to memorise a list. You need to multiply two units.</p>

            {/* 03 */}
            <SectionHeading num="03" id="velocity-time">Velocity-Time Graphs: Area = Distance Travelled</SectionHeading>
            <p>This is the area question that appears on almost every IGCSE and GCSE Physics paper. A car accelerates from rest to 12 m/s in 6 seconds, travels at 12 m/s for 4 seconds, then brakes to a stop in 4 seconds. How far does it travel?</p>

            <VelocityTimeAreaSVG />

            <p>Split the region between the line and the time axis into simple shapes, find each area, and add them:</p>
            <ul className="my-3 space-y-2 pl-1">
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-blue-600" />
                <span><strong>Triangle A</strong> (accelerating): ½ × 6 × 12 = 36 m</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-green-600" />
                <span><strong>Rectangle B</strong> (constant velocity): 4 × 12 = 48 m</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-rose-600" />
                <span><strong>Triangle C</strong> (braking): ½ × 4 × 12 = 24 m</span>
              </li>
            </ul>
            <p>Total distance = 36 + 48 + 24 = <strong>108 m</strong>. Notice that the braking section still adds distance. The car is slowing down, but it is still moving forwards.</p>

            <NarrativeBox label="Shortcut: The Trapezium Formula">
              <p>Any section where velocity changes steadily from <em>u</em> to <em>v</em> is a trapezium. Its area is ½ × (u + v) × t. That is exactly the SUVAT equation s = ½(u + v)t. The equation and the graph are the same idea written two ways, and examiners love questions that check you can move between them.</p>
            </NarrativeBox>

            <p>If converting units is where your child usually slips, check the axes before calculating. A time axis in minutes or a velocity axis in km/h will give the right shape and the wrong answer. Ustaad’s{' '}
              <a href="/physics" className={linkCls}>physics tutoring</a>{' '}
              drills this check until it becomes automatic.
            </p>

            {/* 04 */}
            <SectionHeading num="04" id="below-axis">Speed-Time vs Velocity-Time: Area Below the Axis</SectionHeading>
            <p>At IGCSE and GCSE, most graphs stay above the time axis, and the area under a speed-time graph and a velocity-time graph both give the distance travelled. At A-Level, velocity can become negative, which means the object is moving backwards.</p>

            <BelowAxisSVG />

            <p>Area above the axis is displacement in the positive direction. Area below the axis is displacement in the negative direction. That leads to two different answers, and the question wording decides which one you need:</p>
            <ul className="my-3 space-y-2 pl-1">
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-[#0f4a9b]" />
                <span><strong>Total distance travelled:</strong> add the sizes of all areas. 20 + 5 = 25 m.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-[#C7A24A]" />
                <span><strong>Final displacement:</strong> subtract the area below the axis. 20 − 5 = 15 m from the start.</span>
              </li>
            </ul>

            {/* 05 */}
            <SectionHeading num="05" id="other-graphs">Other Graphs Where the Area Matters</SectionHeading>
            <p>Once the units trick clicks, the same skill unlocks questions across the Physics specification. These are the ones that appear most often:</p>

            <div className="my-5 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs sm:text-[13px]">
                <thead className="bg-[#0a1f3d] text-white">
                  <tr>
                    <th className="px-3 py-2.5 font-bold">Graph</th>
                    <th className="px-3 py-2.5 font-bold">y × x units</th>
                    <th className="px-3 py-2.5 font-bold">Area represents</th>
                    <th className="px-3 py-2.5 font-bold">Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr><td className="px-3 py-2">Velocity-time</td><td className="px-3 py-2 font-mono">m/s × s = m</td><td className="px-3 py-2">Displacement / distance</td><td className="px-3 py-2">IGCSE, GCSE</td></tr>
                  <tr className="bg-slate-50/60"><td className="px-3 py-2">Force-extension</td><td className="px-3 py-2 font-mono">N × m = J</td><td className="px-3 py-2">Work done, elastic PE</td><td className="px-3 py-2">GCSE, A-Level</td></tr>
                  <tr><td className="px-3 py-2">Current-time</td><td className="px-3 py-2 font-mono">A × s = C</td><td className="px-3 py-2">Charge flowed</td><td className="px-3 py-2">GCSE, A-Level</td></tr>
                  <tr className="bg-slate-50/60"><td className="px-3 py-2">Acceleration-time</td><td className="px-3 py-2 font-mono">m/s² × s = m/s</td><td className="px-3 py-2">Change in velocity</td><td className="px-3 py-2">A-Level</td></tr>
                  <tr><td className="px-3 py-2">Force-time</td><td className="px-3 py-2 font-mono">N × s = N s</td><td className="px-3 py-2">Impulse (change in momentum)</td><td className="px-3 py-2">A-Level</td></tr>
                  <tr className="bg-slate-50/60"><td className="px-3 py-2">Power-time</td><td className="px-3 py-2 font-mono">W × s = J</td><td className="px-3 py-2">Energy transferred</td><td className="px-3 py-2">A-Level</td></tr>
                </tbody>
              </table>
            </div>

            <p><strong>Force-extension example:</strong> a spring obeys Hooke’s law and stretches 0.04 m under a 6 N force. The graph is a straight line through the origin, so the area is a triangle: ½ × 6 × 0.04 = <strong>0.12 J</strong> of elastic potential energy. Students who forget the ½ lose the mark every time.</p>
            <p><strong>Current-time example:</strong> a steady 2 A current for 30 s is a rectangle: 2 × 30 = <strong>60 C</strong> of charge. This is the graph version of Q = It.</p>

            <InlineImage
              src="/images/blogs/igcse-physics-student-revision-uae.webp"
              alt="IGCSE Physics student in the UAE revising graph questions at a desk with a calculator and past paper booklet"
              caption="The habit to build: read both axis labels and multiply the units before touching the numbers."
            />

            {/* 06 */}
            <SectionHeading num="06" id="curved-graphs">Curved Graphs: Counting Squares and the Trapezium Rule</SectionHeading>
            <p>When the line curves, there are no neat triangles. Exam questions then ask you to <em>estimate</em> the area, and the method depends on the subject.</p>

            <NarrativeBox label="Physics: Counting Squares">
              <ul className="space-y-1.5 text-xs">
                <li>• <strong>Count every whole square</strong> under the curve.</li>
                <li>• <strong>Pair up part squares:</strong> count a square if it is at least half under the curve, and ignore it if it is less than half.</li>
                <li>• <strong>Find the value of one square:</strong> its width in x-units multiplied by its height in y-units.</li>
                <li>• <strong>Multiply:</strong> number of squares × value of one square, and give the unit.</li>
              </ul>
            </NarrativeBox>

            <p><strong>Maths: the trapezium rule.</strong> Split the area into equal-width strips, treat each strip as a trapezium, and add them. The formula is:</p>
            <div className="my-4 p-4 rounded-xl bg-[#f4f7fc] border border-[#0f4a9b]/15 text-center">
              <span className="text-sm sm:text-base font-mono font-extrabold text-[#0a1f3d]">
                Area ≈ ½h [y₀ + yₙ + 2(y₁ + y₂ + … + yₙ₋₁)]
              </span>
            </div>
            <p>Here <em>h</em> is the strip width. Using four strips of width 1 under y = x² from 0 to 4 gives ½ × 1 × [0 + 16 + 2(1 + 4 + 9)] = 22. The exact area, found by integration at A-Level, is 21⅓.</p>

            <TrapeziumRuleSVG />

            <p>A very common follow-up question asks whether your estimate is too big or too small. Look at the shape. If the curve bends upwards, like y = x², the straight tops of the trapeziums sit above it, so you have an <strong>overestimate</strong>. If it bends downwards, you have an <strong>underestimate</strong>. Using more, narrower strips makes the estimate more accurate.</p>

            {/* 07 */}
            <SectionHeading num="07" id="gradient-or-area">Gradient or Area? A 5-Second Check</SectionHeading>
            <p>Many students lose marks before they start because they pick the wrong tool. Ask what the question wants:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-[#fbfcfe]">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f4a9b] block mb-1">Use the Gradient</span>
                <p className="text-xs text-slate-700 leading-relaxed !mb-0">
                  When the question asks for a <strong>rate</strong>: speed, acceleration, how quickly something changes. Words to spot: "rate", "per second", "how fast".
                </p>
              </div>
              <div className="p-3.5 rounded-xl border border-[#0f4a9b]/20 bg-[#f4f7fc]">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0a1f3d] block mb-1">Use the Area</span>
                <p className="text-xs text-slate-700 leading-relaxed !mb-0">
                  When the question asks for a <strong>total</strong>: distance travelled, energy stored, charge that flowed. Words to spot: "how far", "total", "how much".
                </p>
              </div>
            </div>
            <p>The same velocity-time graph can carry both questions: its gradient gives acceleration and its area gives distance. Reading the{' '}
              <a href="/blogs/command-words-igcse-a-level-exams" className={linkCls}>command words in IGCSE and A-Level exam questions</a>{' '}
              carefully is what tells you which one the examiner wants.
            </p>

            {/* 08 */}
            <SectionHeading num="08" id="lost-marks">Where Students Lose Marks on Area Questions</SectionHeading>
            <p>These are the errors I see most often when marking mock papers with students in Dubai and Abu Dhabi:</p>
            <ul className="my-3 space-y-2 pl-1">
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-rose-500" />
                <span><strong>Forgetting the ½ on triangles.</strong> It doubles the answer and loses both method and answer marks.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-rose-500" />
                <span><strong>Reading the scale wrong.</strong> One small square is rarely worth 1. Check what each grid line represents first.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-rose-500" />
                <span><strong>Mixing units.</strong> km/h on one axis and seconds on the other gives a meaningless area. Convert first.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-rose-500" />
                <span><strong>Stopping at the number.</strong> "108" is not a full answer. "108 m, the distance travelled by the car" is.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-rose-500" />
                <span><strong>Averaging speeds for the whole journey.</strong> Average speed is total distance ÷ total time, which means you need the area first.</span>
              </li>
            </ul>
            <p>Most of these are attention errors rather than gaps in understanding. Our guide to{' '}
              <a href="/blogs/silly-mistakes-maths-exams" className={linkCls}>silly mistakes in maths exams and a 3-minute checking routine</a>{' '}
              shows how to catch them before the paper is handed in.
            </p>

            {/* 09 */}
            <SectionHeading num="09" id="teacher-challenge">Teacher Challenge: Read the Area</SectionHeading>
            <p>If you tried the challenge in the gradient article, this is the same graph. This time the question asks what the space underneath it means.</p>

            <TeacherChallengeInteractive />

            {/* 10 */}
            <SectionHeading num="10" id="takeaway">Teacher’s Takeaway</SectionHeading>
            <p className="font-semibold text-[#0a1f3d]">The gradient divides the axes. The area multiplies them. Multiply the units, and you know what the area means.</p>
            <p>That single check works on every graph a student meets, from IGCSE motion graphs to A-Level force-time and power-time graphs. Together with the{' '}
              <a href="/blogs/what-does-gradient-mean-maths-physics" className={linkCls}>gradient</a>{' '}
              and the{' '}
              <a href="/blogs/what-does-y-intercept-mean-maths" className={linkCls}>y-intercept</a>, it completes the three ideas that unlock nearly every graph question on the paper.
            </p>
            <p>Ustaad supports students across the UAE with one-to-one, concept-led tutoring aligned to IGCSE, GCSE, A-Level and IB. Families can work with a{' '}
              <a href="/physics-tutor-dubai" className={linkCls}>physics tutor in Dubai</a>, a{' '}
              <a href="/physics-tutor-abu-dhabi" className={linkCls}>physics tutor in Abu Dhabi</a>{' '}
              or a{' '}
              <a href="/maths-tutor-dubai" className={linkCls}>maths tutor in Dubai</a>. To find out exactly where the gaps are,{' '}
              <a href="/contact#form" className={linkCls}>book your first session with Tabraiz Khan</a>.
            </p>

            <div className="my-5 flex flex-col items-center gap-1.5">
              <a href="/contact#form"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-white text-sm hover:brightness-110 transition"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book Your First Session with Tabraiz Khan
              </a>
              <p className="text-xs text-gray-500 font-medium">No commitment. Cancel anytime.</p>
            </div>

          </div>

          {/* FAQ Section */}
          <div id="frequently-asked-questions" className="mt-8 pt-7 border-t border-slate-100 scroll-mt-24">
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0f4a9b]/6 text-[#0f4a9b] text-xs font-bold rounded-full mb-2.5 border border-[#0f4a9b]/10">
                <BookOpen className="h-3 w-3" />
                <span className="text-[10px] uppercase tracking-wider">Common Questions</span>
              </div>
              <h2 className="text-lg lg:text-xl font-extrabold text-[#0a1f3d]">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion />
          </div>

          <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col items-center gap-3">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Found this helpful? Share it</p>
            <SocialShare url={shareUrl} title={BLOG.title} center />
          </div>

          {/* Author & Reviewer */}
          <div className="mt-7 grid md:grid-cols-2 gap-3">
            <div className="relative rounded-2xl border border-[#0f4a9b]/10 bg-gradient-to-br from-white to-[#f4f7fd] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#0f4a9b] border border-[#0f4a9b]/15 bg-[#0f4a9b]/5">About the Author</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-0.5 pr-28 mt-4">
                <a href="/tutors/tabraiz-khan" className="hover:text-[#0f4a9b] hover:underline">Tabraiz Khan</a>
              </p>
              <p className="text-[11px] font-semibold text-[#0f4a9b] mb-1.5">Cambridge Certified Maths &amp; Physics Specialist</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Cambridge Certified Teacher with a Master’s in Statistics and 9 years teaching Maths, Physics and Statistics across IGCSE, GCSE, A-Level, and IB curricula in Dubai and Abu Dhabi. Specialises in analytical concept building, kinematics, and exam mark-scheme precision.</p>
            </div>
            <div className="relative rounded-2xl border border-[#C7A24A]/15 bg-gradient-to-br from-white to-[#fdf9f0] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6">Reviewed By</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-24 mt-4">
                <a href="/authors/nimra-shahzada" className="hover:text-[#0f4a9b] hover:underline">Nimra Shahzada</a> | Content Lead &amp; Academic Consultant
              </p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nimra Shahzada reviewed this article as part of Ustaad’s editorial process, checking that each explanation is clear and easy to follow for students and parents. She holds a Bachelor’s degree in Psychology and leads content at Ustaad UAE.</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {BLOG.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-[#0a1f3d]">{tag}</span>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 mb-12 rounded-2xl p-6 lg:p-8 text-center text-white shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">Book First Session with Tabraiz Khan</h3>
            <p className="text-white/80 mb-5 max-w-lg mx-auto text-sm leading-relaxed">
              Work one-to-one with Cambridge Certified specialist <a href="/tutors/tabraiz-khan" className="text-[#F5D77F] font-bold underline hover:text-white">Tabraiz Khan</a> to master graph questions, from gradients to areas, across IGCSE, GCSE, A-Level and IB Maths &amp; Physics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a href="/contact#form"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[210px] h-11 px-6 rounded-full font-bold text-white hover:brightness-110 transition text-sm shadow-md whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book First Session
              </a>
              <a href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20would%20like%20to%20book%20a%20first%20Physics%20session." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Ustaad to book a first session"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[210px] h-11 px-6 bg-[#25D366] hover:bg-[#20bd5a] rounded-full font-bold text-white transition text-sm shadow-md whitespace-nowrap">
                <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="" className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
            <p className="mt-3 text-xs text-white/60 font-medium">No commitment · Cancel anytime</p>
          </div>

          <div className="mt-6 mb-8 px-4 py-4 rounded-2xl bg-[#f8fafd] border border-[#0f4a9b]/10 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              Meet the writers behind Ustaad UAE on our{' '}
              <a href="/editorial" className="text-[#0f4a9b] font-semibold hover:underline">editorial page</a>.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
