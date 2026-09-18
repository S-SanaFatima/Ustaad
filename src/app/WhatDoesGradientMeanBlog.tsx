import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home, ChevronRight as ChevronRightIcon, MessageCircle, CheckCircle2, Compass } from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'What Does the Gradient Actually Mean? A Teacher Explains It from Maths to Physics | Ustaad',
  titleLine1: 'What Does the Gradient Actually Mean?',
  titleLine2: 'A Teacher Explains It from Maths to Physics',
  slug: 'what-does-gradient-mean-maths-physics',
  description: 'A Maths and Physics teacher explains what the gradient number actually tells you, not just how to calculate it, across straight-line graphs, distance-time and velocity-time graphs.',
  heroImage: '/images/blogs/what-does-gradient-mean-hero.jpg',
  heroAlt: 'Secondary student in Dubai attending an online one-to-one tutoring session with a specialist teacher explaining motion formulas on a digital board',
  heroCaption: 'One-to-one online coaching breaks down the physical meaning behind kinematics formulas and graph gradients.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  author: 'Tabraiz Khan',
  authorFull: 'Tabraiz Khan | Cambridge Certified Maths & Physics Specialist, Ustaad UAE',
  authorUrl: '/tutors/tabraiz-khan',
  reviewer: 'Nida Iqbal | MPhil in Education Leadership and Management',
  readTime: '7 min read',
  tags: ['Maths', 'Physics', 'Gradient', 'Rate of Change', 'IGCSE', 'A-Level', 'Exam Technique'],
};

const FAQS = [
  {
    q: 'What does the gradient of a graph actually mean?',
    a: 'The gradient tells you the rate of change between the two quantities on the axes: how much the y-value changes for every one unit change in the x-value. What that rate of change represents (speed, acceleration, cost per item, and so on) depends entirely on what the axes measure.',
  },
  {
    q: 'Why is the gradient of a distance-time graph called speed?',
    a: 'Because the y-axis is distance and the x-axis is time, the gradient (change in distance ÷ change in time) works out in units of metres per second (m/s), which is the fundamental definition of speed.',
  },
  {
    q: 'What does a negative gradient mean on a velocity-time graph?',
    a: 'It means the object is decelerating (its velocity is decreasing over time), not that it is moving backwards. The object can still be travelling forward in the positive direction while the gradient is negative.',
  },
  {
    q: 'Why do students lose marks even when their gradient calculation is correct?',
    a: 'Most mark schemes award separate marks for the calculation and for stating what the result means in context, with the correct units. Students who write only the number often miss the interpretation mark even when the arithmetic is flawless.',
  },
  {
    q: 'Is the gradient formula different in physics compared to maths?',
    a: 'No, the formula (change in y ÷ change in x) never changes. What changes is the meaning of the result, because physics axes carry physical units that mathematical coordinate systems usually do not.',
  },
];

const TOC_ITEMS = [
  { label: '01. The Question Teachers Ask', id: 'the-question' },
  { label: '02. Gradient = Rate of Change', id: 'rate-of-change' },
  { label: '03. The Same Formula, Different Meaning', id: 'same-formula' },
  { label: '04. Distance-Time Graphs: Gradient = Speed', id: 'distance-time' },
  { label: '05. Velocity-Time Graphs: Gradient = Acceleration', id: 'velocity-time' },
  { label: '06. A Common Student Mistake', id: 'common-mistake' },
  { label: '07. Teacher Challenge: Read the Graph', id: 'teacher-challenge' },
  { label: '08. Teacher’s Takeaway', id: 'takeaway' },
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
        <img src={src} alt={alt} width={1376} height={774} loading="lazy" className="w-full h-full object-cover block" />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">{caption}</figcaption>
      )}
    </figure>
  );
}

// ── SVG Diagram 1: Coordinate Rise over Run ──
function CoordinateSlopeChart() {
  return (
    <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#f8faff] to-[#edf3fc] border border-[#0f4a9b]/15 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0f4a9b]" />
          <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">Coordinate Geometry: Pure Maths</span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#0f4a9b] bg-white px-2.5 py-0.5 rounded-md border border-[#0f4a9b]/20">m = Δy / Δx = 2</span>
      </div>
      <div className="w-full bg-white rounded-xl p-3 sm:p-4 border border-slate-200/80">
        <svg viewBox="0 0 400 220" className="w-full h-auto max-h-[220px]">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="400" height="220" fill="url(#grid)" />

          {/* Axes */}
          <line x1="40" y1="190" x2="370" y2="190" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="40" y1="190" x2="40" y2="20" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="375" y="194" fontSize="11" fill="#64748b" fontWeight="bold">x</text>
          <text x="36" y="15" fontSize="11" fill="#64748b" fontWeight="bold">y</text>

          {/* Gradient Triangle Background */}
          <polygon points="100,150 280,150 280,40" fill="rgba(15,74,155,0.08)" />

          {/* Δx and Δy dashed lines */}
          <line x1="100" y1="150" x2="280" y2="150" stroke="#0f4a9b" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="280" y1="150" x2="280" y2="40" stroke="#0f4a9b" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Main Slope Line */}
          <line x1="60" y1="174.4" x2="310" y2="21.6" stroke="#0f4a9b" strokeWidth="3" strokeLinecap="round" />

          {/* Points */}
          <circle cx="100" cy="150" r="5" fill="#0f4a9b" stroke="#fff" strokeWidth="2" />
          <text x="65" y="145" fontSize="11" fill="#0a1f3d" fontWeight="bold">(1, 3)</text>

          <circle cx="280" cy="40" r="5" fill="#0f4a9b" stroke="#fff" strokeWidth="2" />
          <text x="288" y="42" fontSize="11" fill="#0a1f3d" fontWeight="bold">(4, 9)</text>

          {/* Delta labels */}
          <text x="170" y="168" fontSize="11" fill="#0f4a9b" fontWeight="bold" textAnchor="middle">Run: Δx = 4 - 1 = 3</text>
          <text x="290" y="100" fontSize="11" fill="#0f4a9b" fontWeight="bold">Rise: Δy = 9 - 3 = 6</text>

          {/* Formula pill */}
          <rect x="130" y="75" width="105" height="26" rx="6" fill="#0a1f3d" />
          <text x="182.5" y="92" fontSize="10.5" fill="#fff" fontWeight="bold" textAnchor="middle">Gradient = 6 ÷ 3 = 2</text>
        </svg>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2 font-medium">
        In pure mathematics, the gradient is 2 (pure scalar ratio). For every 1 step across, the line climbs 2 units up.
      </p>
    </div>
  );
}

// ── SVG Diagram 2: Distance-Time Graph ──
function DistanceTimeGraphSVG() {
  return (
    <div className="my-6 p-4 sm:p-5 rounded-2xl bg-[#f4faf7] border border-emerald-200/70 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
          <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">Distance-Time Graph (s-t)</span>
        </div>
        <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-md border border-emerald-300">Gradient = Speed (m/s)</span>
      </div>
      <div className="w-full bg-white rounded-xl p-3 sm:p-4 border border-emerald-100">
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-[220px]">
          {/* Axes */}
          <line x1="45" y1="185" x2="395" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="45" y1="185" x2="45" y2="25" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="330" y="202" fontSize="10.5" fill="#475569" fontWeight="bold">Time t (seconds)</text>
          <text x="10" y="20" fontSize="10.5" fill="#475569" fontWeight="bold">Distance d (m)</text>

          {/* Grid guides */}
          <line x1="45" y1="75" x2="395" y2="75" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
          <text x="20" y="79" fontSize="10" fill="#94a3b8" fontWeight="bold">30m</text>
          <line x1="180" y1="185" x2="180" y2="75" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
          <text x="175" y="198" fontSize="10" fill="#94a3b8" fontWeight="bold">6s</text>
          <line x1="280" y1="185" x2="280" y2="75" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
          <text x="275" y="198" fontSize="10" fill="#94a3b8" fontWeight="bold">9s</text>

          {/* Section 1: Constant Speed (0 to 6s, 0 to 30m) */}
          <line x1="45" y1="185" x2="180" y2="75" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
          
          {/* Section 2: Stationary (6 to 9s, at 30m) */}
          <line x1="180" y1="75" x2="280" y2="75" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />

          {/* Section 3: Faster Speed (9 to 12s, 30 to 60m) */}
          <line x1="280" y1="75" x2="380" y2="25" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />

          {/* Annotations */}
          <rect x="75" y="105" width="95" height="24" rx="5" fill="#ecfdf5" stroke="#a7f3d0" />
          <text x="122.5" y="121" fontSize="9.5" fill="#047857" fontWeight="bold" textAnchor="middle">Speed = 5 m/s</text>

          <rect x="195" y="50" width="85" height="20" rx="4" fill="#fffbeb" stroke="#fde68a" />
          <text x="237.5" y="64" fontSize="9" fill="#b45309" fontWeight="bold" textAnchor="middle">Stationary (0 m/s)</text>

          <rect x="305" y="32" width="85" height="20" rx="4" fill="#f0f9ff" stroke="#bae6fd" />
          <text x="347.5" y="46" fontSize="9" fill="#0369a1" fontWeight="bold" textAnchor="middle">Faster (10 m/s)</text>
        </svg>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2 font-medium">
        The units are metres divided by seconds (m/s). Flat line = zero speed (at rest), steeper line = higher speed.
      </p>
    </div>
  );
}

// ── SVG Diagram 3: Velocity-Time Graph ──
function VelocityTimeGraphSVG() {
  return (
    <div className="my-6 p-4 sm:p-5 rounded-2xl bg-[#fdf8f6] border border-orange-200/80 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
          <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">Velocity-Time Graph (v-t)</span>
        </div>
        <span className="text-[11px] font-mono font-bold text-orange-800 bg-orange-100/70 px-2.5 py-0.5 rounded-md border border-orange-300">Gradient = Acceleration (m/s²)</span>
      </div>
      <div className="w-full bg-white rounded-xl p-3 sm:p-4 border border-orange-100">
        <svg viewBox="0 0 420 220" className="w-full h-auto max-h-[220px]">
          {/* Axes */}
          <line x1="45" y1="185" x2="395" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="45" y1="185" x2="45" y2="25" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="330" y="202" fontSize="10.5" fill="#475569" fontWeight="bold">Time t (seconds)</text>
          <text x="10" y="20" fontSize="10.5" fill="#475569" fontWeight="bold">Velocity v (m/s)</text>

          {/* Grid guides */}
          <line x1="45" y1="75" x2="395" y2="75" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
          <text x="16" y="79" fontSize="10" fill="#94a3b8" fontWeight="bold">12 m/s</text>
          <line x1="160" y1="185" x2="160" y2="75" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
          <text x="155" y="198" fontSize="10" fill="#94a3b8" fontWeight="bold">6s</text>
          <line x1="260" y1="185" x2="260" y2="75" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
          <text x="255" y="198" fontSize="10" fill="#94a3b8" fontWeight="bold">10s</text>
          <line x1="360" y1="185" x2="360" y2="185" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
          <text x="355" y="198" fontSize="10" fill="#94a3b8" fontWeight="bold">14s</text>

          {/* Phase 1: Constant Acceleration (0 to 6s, 0 to 12 m/s) */}
          <line x1="45" y1="185" x2="160" y2="75" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />

          {/* Phase 2: Constant Velocity (6 to 10s, 12 m/s) */}
          <line x1="160" y1="75" x2="260" y2="75" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />

          {/* Phase 3: Constant Deceleration (10 to 14s, 12 to 0 m/s) */}
          <line x1="260" y1="75" x2="360" y2="185" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />

          {/* Annotations */}
          <rect x="65" y="105" width="95" height="24" rx="5" fill="#eff6ff" stroke="#bfdbfe" />
          <text x="112.5" y="121" fontSize="9" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">a = +2 m/s² (Accel)</text>

          <rect x="175" y="50" width="80" height="20" rx="4" fill="#f0fdf4" stroke="#bbf7d0" />
          <text x="215" y="64" fontSize="9" fill="#15803d" fontWeight="bold" textAnchor="middle">Constant Speed (a=0)</text>

          <rect x="285" y="105" width="95" height="24" rx="5" fill="#fff1f2" stroke="#fecdd3" />
          <text x="332.5" y="121" fontSize="9" fill="#be123c" fontWeight="bold" textAnchor="middle">a = -3 m/s² (Decel)</text>
        </svg>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2 font-medium">
        On a v-t graph, negative gradient indicates deceleration (slowing down), while flat section means travelling at steady speed (zero acceleration).
      </p>
    </div>
  );
}

// ── Interactive Teacher Challenge Component ──
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
        Graph Scenario: Velocity increases steadily from 0 m/s to 20 m/s in 4 seconds, then remains flat at 20 m/s for 3 seconds.
      </p>

      <div className="space-y-2 text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200/80 mb-4">
        <div className="flex items-start gap-2">
          <span className="font-bold text-[#0f4a9b]">Q1:</span>
          <span>What does the gradient represent in this graph?</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="font-bold text-[#0f4a9b]">Q2:</span>
          <span>What is its numerical value, and what does that value mean for the object?</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="font-bold text-[#0f4a9b]">Q3:</span>
          <span>What do the units tell you, and how is the second flat section described differently?</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setRevealed(!revealed)}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0f4a9b] hover:bg-[#0d3f82] transition-colors shadow-sm"
      >
        <CheckCircle2 className="w-3.5 h-3.5" />
        {revealed ? 'Hide Examiner Answer & Mark Scheme' : 'Reveal Model Answer & Mark Breakdown'}
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
                <span>Model Answer (Full 3 Marks):</span>
              </div>
              <p>• <strong>Part 1 (1 Mark):</strong> Acceleration (the rate of change of velocity over time).</p>
              <p>• <strong>Part 2 (1 Mark):</strong> Gradient = 20 ÷ 4 = <strong>5 m/s²</strong>. This means the object's speed increases by 5 metres per second every second.</p>
              <p>• <strong>Part 3 (1 Mark):</strong> The second flat section has gradient = <strong>0 m/s²</strong>, which means <strong>constant speed of 20 m/s</strong> (zero acceleration, not stopped).</p>
            </div>
            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-[11.5px] text-amber-900">
              <span className="font-bold block mb-0.5">Examiner Note:</span>
              Students who write only "5" or state that the flat line means "the car stopped" lose 2 out of 3 marks.
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
                className="flex-shrink-0 flex items-center justify-center rounded-full"
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

export default function WhatDoesGradientMeanBlog() {
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
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Academic & Exam Skills', url: '/blogs/academic-exam-skills' },
            { name: 'What Does the Gradient Mean?', url: canonical },
          ]),
          articleSchema({
            title: 'What Does the Gradient Actually Mean? A Teacher Explains It from Maths to Physics',
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
              name: 'Nida Iqbal',
              url: '/authors/nida-iqbal',
              jobTitle: 'MPhil in Education Leadership and Management',
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
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">What Gradient Means</span>
        </div>
      </div>

      {/* Hero header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Category tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">USTAAD UAE · MATHS & PHYSICS INSIGHTS</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-justify">
              A Maths and Physics teacher explains why calculating the gradient is only half the question, and what the number is actually telling you once you have it.
            </p>

            {/* Meta */}
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
                  <a href="/authors/nida-iqbal" className="text-[#0f4a9b] font-semibold underline">Nida Iqbal</a>
                  <span className="block sm:inline">
                    {' '}<a href="/authors/nida-iqbal" className="text-gray-500 hover:text-[#0f4a9b]">| MPhil in Education Leadership and Management</a>
                  </span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 pt-1">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  Published: 18 September 2026 · Ustaad UAE Editorial Team
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A]" />{BLOG.readTime}
                </span>
                <SocialShare url={shareUrl} title={BLOG.title} />
              </div>
            </div>

          </motion.div>

          {/* Hero image */}
          <motion.figure initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-0">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-[16/9] bg-slate-100">
              <img src={BLOG.heroImage} alt={BLOG.heroAlt} width={1376} height={774} fetchPriority="high" className="w-full h-full object-cover block" />
            </div>
            <figcaption className="mt-2.5 text-center text-xs text-gray-400 italic leading-relaxed px-2">{BLOG.heroCaption}</figcaption>
          </motion.figure>

          {/* TOC */}
          <TOC open={tocOpen} setOpen={setTocOpen} />
        </div>
      </section>

      {/* Article body */}
      <article className="pb-4 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-sm lg:text-[15px] leading-[1.8] [&_p]:text-justify [&_p]:mb-3 [&_li]:text-justify break-words">

            {/* 01 */}
            <SectionHeading num="01" id="the-question">The Question Teachers Ask: "What Does the Gradient Mean?"</SectionHeading>
            <p>I draw a straight line on the board. Two points, a small triangle underneath, and a student works out the gradient: 2.</p>
            <p className="font-semibold text-[#0a1f3d]">"Good. What does that 2 mean?"</p>
            <p>Silence. Every time.</p>
            <p>Students can calculate a gradient long before they can explain one. That gap does not usually show up in class; it shows up in the exam, in the second half of a question, where the marks are not for the number but for what the number says about the situation. This article is not about how to calculate a gradient. It is about what to do with it once you have.</p>

            {/* 02 */}
            <SectionHeading num="02" id="rate-of-change">Gradient = Rate of Change</SectionHeading>
            <p>Every gradient, in every subject, answers the same question: <em>for every one step across, how many steps up or down?</em></p>
            
            <div className="my-5 p-4 rounded-xl bg-[#f4f7fc] border border-[#0f4a9b]/15 text-center">
              <span className="block text-xs uppercase tracking-wider text-[#0f4a9b] font-extrabold mb-1">Universal Definition</span>
              <span className="text-base sm:text-lg font-mono font-extrabold text-[#0a1f3d]">
                Gradient = Change in y ÷ Change in x = Δy / Δx
              </span>
            </div>

            <p>Take two points on a line: (1, 3) and (4, 9). The change in y is 6, the change in x is 3, so the gradient is 2. For every 1 unit moved across, the line rises 2 units.</p>
            
            <CoordinateSlopeChart />

            <p>That sign matters as much as the size:</p>
            <ul className="my-3 space-y-2 pl-1">
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-emerald-500" />
                <span><strong>Positive gradient</strong>: as x increases, y increases. The line climbs.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-rose-500" />
                <span><strong>Negative gradient</strong>: as x increases, y decreases. The line falls.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="shrink-0 mt-[7px] w-2 h-2 rounded-full bg-slate-400" />
                <span><strong>Zero gradient</strong>: y does not change at all. A completely flat horizontal line.</span>
              </li>
            </ul>

            <p>None of that is new to most students by the time they reach IGCSE. What is new, and what most revision skips, is that the formula never tells you what the axes are.</p>

            {/* 03 */}
            <SectionHeading num="03" id="same-formula">The Same Formula, Different Meaning</SectionHeading>
            <p>Change in y over change in x is the entire idea. But the same calculation means something completely different depending on what is on the two axes.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-[#fbfcfe]">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f4a9b] block mb-1">In Pure Maths</span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  For a line <em>y = mx + c</em>, the gradient is <em>m</em>, a fixed, unitless number describing steepness. It answers a question about pure geometry and shape.
                </p>
              </div>
              <div className="p-3.5 rounded-xl border border-[#0f4a9b]/20 bg-[#f4f7fc]">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0a1f3d] block mb-1">In Physics</span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The axes carry physical units, and the gradient inherits them. It transforms into a physical quantity: a speed, an acceleration, or a rate of change.
                </p>
              </div>
            </div>

            <p>The number does not change how it is calculated. It changes what it is allowed to mean.</p>
            <p>This is the habit worth building before Year 10: before touching the formula, look at the axes and ask what one unit of "up" and one unit of "across" actually represent.</p>

            {/* 04 */}
            <SectionHeading num="04" id="distance-time">Distance-Time Graphs: Gradient = Speed</SectionHeading>
            <p>Take a distance-time graph. The y-axis is distance in metres, the x-axis is time in seconds.</p>
            <p>A student walks from 0 m to 30 m in 6 seconds, along a straight line. The gradient is 30 ÷ 6 = 5.</p>
            <p>Now the interpretation: the units of the gradient are metres ÷ seconds, or m/s. The number 5 is not an abstract steepness; it is the student's speed. Five metres, every second.</p>
            
            <DistanceTimeGraphSVG />

            <NarrativeBox label="Reading Rules for Distance-Time (s-t) Graphs">
              <ul className="space-y-1.5 text-xs">
                <li>• <strong>A steeper line</strong> means a faster speed (more distance covered per second).</li>
                <li>• <strong>A flat horizontal section</strong> means the object has stopped (zero speed, not zero distance).</li>
                <li>• <strong>A gradient that changes partway</strong> means the speed itself changed (acceleration or deceleration).</li>
              </ul>
            </NarrativeBox>

            <p>This is where marks are usually lost. A student can calculate "5" correctly and still fail to write "5 m/s, meaning the object travelled at a constant speed of 5 metres per second," which is the sentence the mark scheme is actually looking for.</p>
            
            <InlineImage
              src="/images/blogs/distance-velocity-graph-whiteboard-analysis.jpg"
              alt="Whiteboard illustration comparing distance-time and velocity-time gradient calculation in IGCSE Physics"
              caption="Comparing gradient triangles across distance-time (speed) and velocity-time (acceleration) graphs."
            />

            <p>For students still shaky on rearranging the <em>y = mx + c</em> side of this before applying it to graphs, our piece on{' '}
              <a href="/blogs/igcse-maths-revision-low-marks" className="text-[#0f4a9b] font-semibold hover:underline">
                IGCSE maths revision and why hours of practice don't always convert into marks
              </a>{' '}
              covers the algebra habit that usually needs fixing first. Ustaad's{' '}
              <a href="/maths" className="text-[#0f4a9b] font-semibold hover:underline">
                maths tutoring
              </a>{' '}
              works through exactly this kind of graph-reading gap one-to-one.
            </p>

            {/* 05 */}
            <SectionHeading num="05" id="velocity-time">Velocity-Time Graphs: Gradient = Acceleration</SectionHeading>
            <p>Change the y-axis to velocity, in m/s, and keep time in seconds on the x-axis. Same formula. Different meaning again.</p>
            <p>A car's velocity rises from 0 to 12 m/s over 6 seconds. Gradient = 12 ÷ 6 = 2. The units are now m/s ÷ s, or m/s². This is acceleration, the rate at which velocity itself is changing.</p>
            
            <VelocityTimeGraphSVG />

            <div className="p-4 rounded-xl border border-amber-200/80 bg-amber-50/40 my-4">
              <span className="text-xs font-bold text-amber-900 block mb-1">Crucial Exam Distinction: Negative Gradient</span>
              <p className="text-xs text-amber-950 leading-relaxed">
                The genuinely useful part is the negative case. A negative gradient on a velocity-time graph does not mean the object is moving backwards. It means the object is <strong>decelerating</strong>: slowing down while still travelling forward. Students who treat every negative number as "wrong" or "moving in reverse" are usually missing this distinction, and it is a common point lost in mechanics questions.
              </p>
            </div>

            <p>This is precisely the reading gap covered from the physics side in{' '}
              <a href="/blogs/igcse-physics-formulas-exam" className="text-[#0f4a9b] font-semibold hover:underline">
                why IGCSE Physics formulas stop working in exams
              </a>, where the same equation behaves differently once a real situation and real units are attached to it. Families working through this at home can also look at Ustaad's{' '}
              <a href="/physics" className="text-[#0f4a9b] font-semibold hover:underline">
                physics tutoring
              </a>, which builds graph interpretation into every mechanics topic rather than treating it as a separate skill.
            </p>

            {/* 06 */}
            <SectionHeading num="06" id="common-mistake">A Common Student Mistake</SectionHeading>
            <p className="italic text-slate-800 font-medium">"I calculated the gradient, so I'm finished."</p>
            <p>This is the sentence behind more lost marks than any formula error. Exam questions rarely ask for the gradient as an end in itself. They ask for the gradient and what it tells you: the speed, the acceleration, the rate of reaction, the rate of change of profit. Skipping the interpretation line is the same mistake, whichever subject it happens in: the calculation is right, and the answer is still incomplete.</p>
            <p>Mark schemes are usually built around this exact split: one mark for the correct number and a separate mark for stating what it means in context, with units. Students who stop at the number are handing back marks they have already earned.</p>

            <InlineImage
              src="/images/blogs/maths-physics-tutor-velocity-graph.jpg"
              alt="Ustaad specialist tutor coaching a high school student in Dubai through motion graph interpretation"
              caption="One-to-one coaching trains students to look at axes and context before calculating."
            />

            {/* 07 */}
            <SectionHeading num="07" id="teacher-challenge">Teacher Challenge: Read the Graph</SectionHeading>
            <p>Picture a velocity-time graph: velocity rises in a straight line from 0 m/s to 20 m/s over 4 seconds, then stays flat at 20 m/s for the next 3 seconds.</p>
            
            <TeacherChallengeInteractive />

            <p>If the answer to question 3 stops at "the units are m/s²" without saying what that means physically, that is the exact half-answer this article has been describing.</p>

            {/* 08 */}
            <SectionHeading num="08" id="takeaway">Teacher's Takeaway</SectionHeading>
            <p className="font-semibold text-[#0a1f3d]">The formula calculates the gradient. The axes tell you what the gradient means.</p>
            <p>That one sentence is worth more at exam time than another hour of practising the calculation itself, because the calculation was never the part students were losing marks on. Once a student checks the axes before they touch the formula, distance-time, velocity-time, and every other graph they meet (in maths, physics, economics, or biology) starts reading the same way.</p>
            
            <p>Ustaad supports Maths and Physics students across the UAE through diagnostic, concept-led learning aligned to IGCSE, A-Level, and IB curricula.{' '}
              <a href="/contact#form?tutor=Tabraiz-Khan" className="text-[#0f4a9b] font-semibold hover:underline">
                Book a free trial with Tabraiz Khan
              </a>{' '}
              to find out exactly where the gaps are.
            </p>

            {/* Trial CTA */}
            <div className="my-5 flex flex-col items-center gap-1.5">
              <a href="/contact#form?tutor=Tabraiz-Khan"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-white text-sm hover:brightness-110 transition"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                Book Your Free Trial with Tabraiz Khan
              </a>
              <p className="text-xs text-gray-500 font-medium">Free 30-min trial. No commitment.</p>
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

          {/* Share bottom */}
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
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-24 mt-4">Nida Iqbal | MPhil in Education Leadership and Management</p>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">Nida Iqbal reviewed this article for pedagogical accuracy, verifying that the cross-curricular maths and physics graph explanations reflect standard UK and IB mark scheme criteria.</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {BLOG.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-[#0a1f3d]">{tag}</span>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 mb-12 rounded-2xl p-6 lg:p-8 text-center text-white shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">Book a Free Trial with Tabraiz Khan</h3>
            <p className="text-white/80 mb-5 max-w-lg mx-auto text-sm leading-relaxed">
              Work one-to-one with Cambridge Certified specialist <a href="/tutors/tabraiz-khan" className="text-[#F5D77F] font-bold underline hover:text-white">Tabraiz Khan</a> to master graph interpretation and exam problem-solving across IGCSE, GCSE, A-Level, and IB Maths &amp; Physics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <a href="/contact#form?tutor=Tabraiz-Khan"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-sm shadow-md"
                  style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}>
                  Book Free Trial with Tabraiz
                </a>
                <p className="text-xs text-white/60 font-medium">Free 30-min trial · Cancel anytime</p>
              </div>
              <a href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20request%20Tabraiz%20Khan%20for%20a%20trial%20lesson." target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] border border-transparent rounded-full font-bold text-white transition text-sm shadow-md">
                <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10">
              <a href="/tutors/tabraiz-khan" className="text-xs text-white/70 hover:text-white underline font-medium transition">
                View Tabraiz Khan's Full Teaching Profile &amp; Availability →
              </a>
            </div>
          </div>

          {/* Meet the Writers */}
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
