import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home,
  ChevronRight as ChevronRightIcon, MessageCircle, ShieldCheck, CheckCircle2,
  Sparkles, Brain, Scale, Activity, ArrowRight, Lightbulb, Check, X
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'The Illusion of Competence in Revision: Why Reading Notes Fails | Ustaad',
  titleLine1: 'The Illusion of Competence:',
  titleLine2: 'Why Re-Reading Notes Gives UAE Students False Confidence',
  categoryBadge: 'USTAAD UAE · PSYCHOLOGY OF LEARNING',
  slug: 'illusion-of-competence-revision-false-confidence',
  description:
    'Why highlighting and re-reading notes tricks the brain into false exam confidence, and how UAE students can build real retrieval strength.',
  heroImage: '/images/blogs/illusion-of-competence-hero.jpg',
  heroAlt: 'High school student studying at a sunlit wooden desk in Dubai with highlighted revision notes and an open Cambridge exam paper',
  heroCaption: 'Re-reading creates a pleasant feeling of familiarity. That feeling is the exact trap that unravels under exam pressure.',
  datePublished: '2026-09-21',
  dateModified: '2026-09-21',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  authorBio: 'Nimra writes on study technique, memory consolidation, and exam preparation for British and IB curriculum students across the UAE.',
  reviewer: 'Nida Iqbal',
  reviewerRole: 'MPhil in Education Leadership and Management',
  reviewerBio: 'Nida checks each guide for educational accuracy, structure, and parent clarity before it is published. See how our editorial review works.',
  readTime: '8 min read',
  tags: [
    'Psychology of Learning',
    'Active Recall',
    'Retrieval Practice',
    'IGCSE Revision',
    'A-Level Study Tips',
    'Exam Preparation UAE',
    'Cognitive Load',
  ],
};

const FAQS = [
  {
    q: 'How many hours should my child study without burning out?',
    a: 'There is no single number, because it depends on age, exam stage and the quality of the sessions. As a rule, focused blocks with real breaks work better than long, unbroken stretches, and a well-designed hour of retrieval practice does more than three hours of re-reading. If your child is exhausted but cannot recall much, the problem is likely method, not effort.',
  },
  {
    q: 'Is making summary notes completely useless?',
    a: 'No. Summarising can help a student organise ideas and understand the structure of a topic. The problem is treating notes as the finished product. Use them as a starting point, then close them and test yourself from memory.',
  },
  {
    q: "How do I help my child if they get anxious when they can't remember during active recall?",
    a: "Reframe the struggle. Forgetting during practice is not failure. It is the exact moment learning happens, and it is far better to find gaps at home than in the exam hall. Start with low-stakes recall, such as short blurting sessions with no marking, and build up gradually. If anxiety is significant or persistent, speak to your child's school or a qualified professional.",
  },
  {
    q: 'When should past papers be introduced into this cycle?',
    a: 'After the content has been learned and retrieved at least once or twice, so that a past paper reveals genuine gaps rather than simply confirming that the student has not yet studied the material. Past papers are best treated as the final stage of preparation.',
  },
];

const TOC_ITEMS = [
  { label: 'Recognition is not recall', id: 'recognition-is-not-recall' },
  { label: 'The neuroscience of "fluency" vs "mastery"', id: 'the-neuroscience-of-fluency-vs-mastery' },
  { label: 'Why highlighting and summarising often backfire', id: 'why-highlighting-and-summarising-backfire' },
  { label: 'The 3 warning signs of false revision competence', id: 'the-3-warning-signs-of-false-competence' },
  { label: 'The working memory breakdown in STEM and humanities', id: 'working-memory-breakdown-in-stem-and-humanities' },
  { label: 'The "retrieval practice" antidote: A 4-step home protocol', id: 'the-retrieval-practice-antidote' },
  { label: 'How parents can spot the illusion early', id: 'how-parents-can-spot-the-illusion-early' },
  { label: 'Frequently asked questions', id: 'frequently-asked-questions' },
  { label: 'Sources and further reading', id: 'sources-and-further-reading' },
];

const RELATED = [
  {
    slug: 'exam-stamina-uae-students',
    category: 'Psychology of Learning',
    title: "Exam Stamina: Why Your Child Can't Sit the Full Paper",
    description: 'Why unbroken focus breaks down halfway through a paper and how to build cognitive endurance before exam season.',
  },
  {
    slug: 'physics-understanding-vs-marks',
    category: 'Psychology of Learning',
    title: 'Your Child Understands Physics. So Why Are the Marks Still Low?',
    description: 'The gap between understanding and exam performance: retrieval, working memory overload, and nerves.',
  },
];

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #1e5ba8 100%)';

function SectionHeading({ num, id, children }: { num: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-10 mb-4 scroll-mt-24">
      <span className="block text-[11px] font-extrabold text-[#0f4a9b]/50 tracking-widest uppercase mb-1">{num}</span>
      <h2 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h2>
    </div>
  );
}

function InlineImage({
  src,
  alt,
  width = 1200,
  height = 675,
  caption,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}) {
  return (
    <figure className="mx-auto my-7 max-w-2xl">
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="w-full h-auto object-cover block"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-gray-500 italic leading-relaxed px-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ── Bespoke Hero Illustration Artwork ──
function IllusionHeroArtworkSVG() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#07172c] relative overflow-hidden flex items-center justify-center p-4 sm:p-8">
      {/* Background Subtle Grid & Neural Glows */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Radial ambient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#C7A24A]/20 blur-3xl pointer-events-none -top-10 -right-10" />
      <div className="absolute w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none -bottom-10 -left-10" />

      {/* Main Graphic Canvas */}
      <div className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-white/20 shadow-2xl text-white">
        <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#C7A24A] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-[#C7A24A]">
              Cognitive Architecture &middot; UAE Student Study Insights
            </span>
          </div>
          <span className="text-[10px] bg-white/15 px-2.5 py-0.5 rounded-full font-mono text-slate-200">
            Psychology of Learning
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Left: The Passive Trap */}
          <div className="rounded-xl bg-rose-950/40 border border-rose-500/30 p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-300">The False Trap</span>
                <span className="text-[9px] bg-rose-500/20 text-rose-200 px-2 py-0.5 rounded font-bold">Passive Recognition</span>
              </div>
              <p className="text-xs text-rose-100/90 leading-snug mb-2">
                Re-reading highlighted notes creates immediate visual familiarity.
              </p>
            </div>
            <div className="mt-2 pt-2 border-t border-rose-500/20 flex items-center justify-between text-[10px] text-rose-300 font-mono font-bold">
              <span>Exam Recall: ~15%</span>
              <span className="text-rose-400">High Blanking Risk</span>
            </div>
          </div>

          {/* Right: The Retrieval Fix */}
          <div className="rounded-xl bg-emerald-950/40 border border-emerald-400/40 p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">The Real Fix</span>
                <span className="text-[9px] bg-emerald-500/25 text-emerald-200 px-2 py-0.5 rounded font-bold">Active Recall</span>
              </div>
              <p className="text-xs text-emerald-100/90 leading-snug mb-2">
                Closed-book retrieval & self-testing forge permanent memory circuits.
              </p>
            </div>
            <div className="mt-2 pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[10px] text-emerald-300 font-mono font-bold">
              <span>Exam Recall: ~85%</span>
              <span className="text-emerald-300">Peak Stamina</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300">
          <span className="flex items-center gap-1.5 font-medium">
            <Brain className="w-3.5 h-3.5 text-[#C7A24A]" /> Dunlosky & Bjork Desirable Difficulty Protocol
          </span>
          <span className="font-semibold text-white">Ustaad UAE Editorial Desk</span>
        </div>
      </div>
    </div>
  );
}

// ── Custom SVG Infographic 1: The Active Recall Consolidation Cycle ──
function RetrievalCycleDiagramSVG() {
  return (
    <div className="my-7 p-4 sm:p-6 rounded-2xl bg-[#f8fafd] border border-[#0f4a9b]/15 shadow-sm">
      <div className="text-center mb-4">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0f4a9b] bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
          Cognitive Model
        </span>
        <h3 className="text-sm sm:text-base font-extrabold text-[#0a1f3d] mt-2 mb-0.5">
          The 4-Stage Memory Consolidation Cycle
        </h3>
        <p className="text-xs text-gray-500 max-w-md mx-auto mb-0">
          How effortful retrieval converts short-term recognition into resilient exam recall
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0f4a9b] flex items-center justify-center font-extrabold text-xs mb-2 border border-blue-100">
            01
          </div>
          <span className="text-xs font-bold text-[#0a1f3d] mb-1">Encoding</span>
          <p className="text-[11px] text-gray-500 leading-tight mb-0">Initial reading & concept structuring</p>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center font-extrabold text-xs mb-2 border border-amber-200">
            02
          </div>
          <span className="text-xs font-bold text-[#0a1f3d] mb-1">Delay & Decay</span>
          <p className="text-[11px] text-gray-500 leading-tight mb-0">Forgetting curve creates necessary friction</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#0f4a9b] text-white border border-[#0f4a9b] shadow-xs flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-full bg-white text-[#0f4a9b] flex items-center justify-center font-extrabold text-xs mb-2">
            03
          </div>
          <span className="text-xs font-bold text-white mb-1">Forced Retrieval</span>
          <p className="text-[11px] text-blue-100 leading-tight mb-0">Blank-page testing & mental reconstruction</p>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-emerald-200 bg-emerald-50/40 shadow-2xs flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-extrabold text-xs mb-2 border border-emerald-200">
            04
          </div>
          <span className="text-xs font-bold text-emerald-800 mb-1">Consolidation</span>
          <p className="text-[11px] text-gray-600 leading-tight mb-0">Neural pathway reinforced for exam pressure</p>
        </div>
      </div>
    </div>
  );
}

// ── Custom SVG Infographic 2: Passive Recognition vs Active Retrieval Pathways ──
function MemoryLoadDiagramSVG() {
  return (
    <div className="my-7 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0f4a9b]">
            Neural Retrieval Pathway
          </span>
          <h4 className="text-xs sm:text-sm font-extrabold text-[#0a1f3d] mt-0.5 mb-0">
            Why Passive Review Fails Under Exam Conditions
          </h4>
        </div>
        <span className="text-[10px] bg-slate-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
          Cognitive Load
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <h5 className="font-bold text-xs text-rose-900">Passive Recognition Path</h5>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            External visual cues (highlighter, textbook page, open mark scheme) simulate understanding. Without cues in the exam hall, the pathway breaks down.
          </p>
          <div className="p-2.5 rounded-lg bg-white border border-rose-200 text-[11px] text-rose-700 font-semibold">
            Result: Exam blanking & slow retrieval
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <h5 className="font-bold text-xs text-emerald-900">Active Recall Path</h5>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Internal retrieval cues are forged through closed-book testing, self-explanation, and practice drills. The memory schema is self-sufficient.
          </p>
          <div className="p-2.5 rounded-lg bg-white border border-emerald-200 text-[11px] text-emerald-800 font-semibold">
            Result: Rapid recall & multi-step transfer
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Custom SVG Illustration 1: Recognition vs Recall Pathway ──
function RecognitionVsRecallIllustrationSVG() {
  return (
    <div className="my-7 p-4 sm:p-6 rounded-2xl bg-[#f8fafd] border border-[#0f4a9b]/15 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0f4a9b]">
            Visual Architecture
          </span>
          <h4 className="text-xs sm:text-sm font-extrabold text-[#0a1f3d] mt-0.5 mb-0">
            Perceptual Recognition vs Independent Neural Recall
          </h4>
        </div>
        <span className="text-[10px] bg-blue-50 text-[#0f4a9b] font-bold px-2.5 py-1 rounded-full border border-blue-100">
          Memory Pathway
        </span>
      </div>

      <div className="w-full bg-white rounded-xl p-4 border border-slate-200">
        <svg viewBox="0 0 500 190" className="w-full h-auto">
          {/* Top Branch: Passive */}
          <rect x="20" y="20" width="130" height="48" rx="8" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1.5" />
          <text x="85" y="42" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#9f1239">Open Notes / Book</text>
          <text x="85" y="56" textAnchor="middle" fontSize="8.5" fill="#be123c">Visual Cues Present</text>

          <line x1="150" y1="44" x2="210" y2="44" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="210,40 218,44 210,48" fill="#f43f5e" />

          <rect x="220" y="20" width="130" height="48" rx="8" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1.5" />
          <text x="285" y="42" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#9f1239">Visual Match</text>
          <text x="285" y="56" textAnchor="middle" fontSize="8.5" fill="#be123c">&quot;Looks Familiar&quot;</text>

          <line x1="350" y1="44" x2="385" y2="44" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="385,40 393,44 385,48" fill="#f43f5e" />

          <rect x="395" y="20" width="90" height="48" rx="8" fill="#f43f5e" />
          <text x="440" y="42" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">Exam Blank</text>
          <text x="440" y="56" textAnchor="middle" fontSize="8" fill="#ffe4e6">No Cues Available</text>

          {/* Bottom Branch: Active */}
          <rect x="20" y="110" width="130" height="48" rx="8" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.5" />
          <text x="85" y="132" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#065f46">Closed Book</text>
          <text x="85" y="146" textAnchor="middle" fontSize="8.5" fill="#047857">Blank Whiteboard</text>

          <line x1="150" y1="134" x2="210" y2="134" stroke="#10b981" strokeWidth="2.5" />
          <polygon points="210,130 218,134 210,138" fill="#10b981" />

          <rect x="220" y="110" width="130" height="48" rx="8" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.5" />
          <text x="285" y="132" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#065f46">Effortful Search</text>
          <text x="285" y="146" textAnchor="middle" fontSize="8.5" fill="#047857">Neural Reconstruction</text>

          <line x1="350" y1="134" x2="385" y2="134" stroke="#10b981" strokeWidth="2.5" />
          <polygon points="385,130 393,134 385,138" fill="#10b981" />

          <rect x="395" y="110" width="90" height="48" rx="8" fill="#0f4a9b" />
          <text x="440" y="132" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">Full Recall</text>
          <text x="440" y="146" textAnchor="middle" fontSize="8" fill="#e0e7ff">Exam Stamina</text>
        </svg>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2.5 font-medium italic">
        Recognition relies on external cues, while recall builds self-contained neural pathways.
      </p>
    </div>
  );
}

// ── Custom SVG Illustration 2: The 3-Step Blurting Protocol ──
function BlurtingProtocolIllustrationSVG() {
  return (
    <div className="my-7 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0f4a9b]">
            Visual Protocol
          </span>
          <h4 className="text-xs sm:text-sm font-extrabold text-[#0a1f3d] mt-0.5 mb-0">
            The 3-Step &quot;Blurting&quot; Gap Analysis Method
          </h4>
        </div>
        <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-full border border-emerald-200">
          High Utility
        </span>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-full bg-[#0a1f3d] text-white font-extrabold text-xs flex items-center justify-center mx-auto mb-2">
              1
            </div>
            <h5 className="font-bold text-xs text-[#0a1f3d] mb-1">Learn &amp; Close</h5>
            <p className="text-[11px] text-gray-600 mb-0 leading-snug">
              Review topic for 10 mins. Then close all notes, screens, and textbooks completely.
            </p>
          </div>
          <span className="mt-3 text-[10px] text-[#0f4a9b] font-bold bg-blue-50 py-1 rounded">No Peek Rule</span>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-center flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-full bg-[#0f4a9b] text-white font-extrabold text-xs flex items-center justify-center mx-auto mb-2">
              2
            </div>
            <h5 className="font-bold text-xs text-[#0a1f3d] mb-1">5-Min Brain Dump</h5>
            <p className="text-[11px] text-gray-600 mb-0 leading-snug">
              On a blank paper, write every formula, definition, and mechanism recalled in black ink.
            </p>
          </div>
          <span className="mt-3 text-[10px] text-blue-700 font-bold bg-white py-1 rounded border border-blue-200">Forced Retrieval</span>
        </div>

        <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 text-center flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-full bg-rose-600 text-white font-extrabold text-xs flex items-center justify-center mx-auto mb-2">
              3
            </div>
            <h5 className="font-bold text-xs text-rose-950 mb-1">Red-Pen Audit</h5>
            <p className="text-[11px] text-gray-600 mb-0 leading-snug">
              Reopen book. Add missing parts in red ink. The red points become your true revision target.
            </p>
          </div>
          <span className="mt-3 text-[10px] text-rose-700 font-bold bg-white py-1 rounded border border-rose-200">Targeted Repair</span>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-3 mb-0 font-medium italic">
        Active retrieval practice under low-stakes conditions transforms fragile recognition into automatic recall.
      </p>
    </div>
  );
}

// ── Custom SVG Illustration 3: Parent Kitchen-Table Diagnostic ──
function ParentDiagnosticChecklistSVG() {
  return (
    <div className="my-7 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#f8fafd] to-white border border-[#0f4a9b]/20 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0f4a9b]">
            Parent Tool
          </span>
          <h4 className="text-xs sm:text-sm font-extrabold text-[#0a1f3d] mt-0.5 mb-0">
            Kitchen-Table Revision Diagnostic: What to Ask
          </h4>
        </div>
        <span className="text-[10px] bg-amber-50 text-amber-800 font-bold px-2.5 py-1 rounded-full border border-amber-200">
          Home Check-In
        </span>
      </div>

      <div className="space-y-3">
        <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
            ✕
          </div>
          <div>
            <span className="text-xs font-bold text-rose-900">Low-Value Question: &quot;Did you finish your revision?&quot;</span>
            <p className="text-[11px] text-gray-600 mb-0 mt-0.5">
              Measures time and task completion rather than recall strength. Encourages passive checklist ticking.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
            ✓
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-900">High-Value Prompt: &quot;Teach me Section 2 without opening your book.&quot;</span>
            <p className="text-[11px] text-gray-600 mb-0 mt-0.5">
              Forces Feynman-style verbal retrieval. Reveals hesitations and conceptual gaps within 90 seconds.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
            ✓
          </div>
          <div>
            <span className="text-xs font-bold text-[#0a1f3d]">High-Value Drill: &quot;Solve Question 4 on a blank sheet with a 4-min timer.&quot;</span>
            <p className="text-[11px] text-gray-600 mb-0 mt-0.5">
              Simulates true exam hall constraints without cues, building resilience and authentic exam stamina.
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-3 mb-0 font-medium italic">
        Kitchen-table check-ins work best when parents ask for blank-page explanations rather than checking hours spent.
      </p>
    </div>
  );
}

// ── Custom Infographic 4: The Leitner 4-Box Spaced Engine ──
function LeitnerSystemVisual() {
  return (
    <div className="my-7 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0f4a9b]">
            High-Utility Strategy
          </span>
          <h4 className="text-xs sm:text-sm font-extrabold text-[#0a1f3d] mt-0.5 mb-0">
            The Leitner Spaced-Box Protocol
          </h4>
        </div>
        <span className="text-[10px] bg-blue-50 text-[#0f4a9b] px-2.5 py-1 rounded-full font-bold border border-blue-100">
          Smart Sorting
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 text-center">
          <div className="text-[10px] font-extrabold uppercase text-rose-700 tracking-wider">Box 01</div>
          <div className="text-xs font-bold text-rose-950 mt-0.5 mb-1">Every Day</div>
          <p className="text-[11px] text-gray-600 mb-0 leading-tight">New & missed cards requiring daily recall</p>
        </div>

        <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-center">
          <div className="text-[10px] font-extrabold uppercase text-amber-700 tracking-wider">Box 02</div>
          <div className="text-xs font-bold text-amber-950 mt-0.5 mb-1">Every 3 Days</div>
          <p className="text-[11px] text-gray-600 mb-0 leading-tight">Partially retained cards under consolidation</p>
        </div>

        <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200 text-center">
          <div className="text-[10px] font-extrabold uppercase text-blue-700 tracking-wider">Box 03</div>
          <div className="text-xs font-bold text-blue-950 mt-0.5 mb-1">Weekly</div>
          <p className="text-[11px] text-gray-600 mb-0 leading-tight">Mastered concepts checked weekly for decay</p>
        </div>

        <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 text-center">
          <div className="text-[10px] font-extrabold uppercase text-emerald-700 tracking-wider">Box 04</div>
          <div className="text-xs font-bold text-emerald-950 mt-0.5 mb-1">Pre-Exam</div>
          <p className="text-[11px] text-gray-600 mb-0 leading-tight">Permanent recall items verified before test</p>
        </div>
      </div>

      <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-gray-600 flex items-center justify-between gap-2">
        <span className="flex items-center gap-1 text-emerald-700 font-semibold">
          <Check className="w-3.5 h-3.5" /> Correct: Advance to next box
        </span>
        <span className="text-gray-300">|</span>
        <span className="flex items-center gap-1 text-rose-700 font-semibold">
          <X className="w-3.5 h-3.5" /> Incorrect: Reset back to Box 1
        </span>
      </div>
    </div>
  );
}

function ParentTakeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border-l-4 border-[#0f4a9b] bg-[#f0f4fa] p-4 sm:p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-1.5">
        <ShieldCheck className="h-4 w-4 text-[#0f4a9b]" />
        <span className="text-[11px] font-black uppercase tracking-widest text-[#0f4a9b]">Parent Takeaway</span>
      </div>
      <p className="text-sm sm:text-[14.5px] font-medium text-[#0a1f3d] leading-relaxed italic mb-0">{children}</p>
    </div>
  );
}

function TOC({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/10 bg-[#f8fafd] overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-3.5" aria-expanded={open}>
        <div className="flex items-center gap-2">
          <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0f4a9b]">In This Guide ({TOC_ITEMS.length} Sections)</span>
        </div>
        <span className="text-[#0f4a9b]">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <div className={open ? 'block' : 'hidden'}>
        <div className="px-5 pb-3.5 grid sm:grid-cols-2 gap-x-4 gap-y-1">
          {TOC_ITEMS.map((item, i) => (
            <a
              key={i}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center gap-2.5 group py-1 text-left"
            >
              <span className="shrink-0 text-[10px] font-extrabold text-[#0f4a9b]/40 w-4">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[13px] text-gray-600 group-hover:text-[#0f4a9b] transition-colors leading-snug">{item.label}</span>
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

function FAQAccordion() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-2.5 my-6">
      {FAQS.map((faq, i) => {
        const isOpen = active === i;
        return (
          <div key={i} className="flex flex-col gap-1.5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
                aria-label={`Toggle question: ${faq.q}`}
              >
                <span className="font-extrabold text-sm">?</span>
              </button>
              <button
                onClick={() => setActive(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex-1 flex items-center gap-2.5 text-left rounded-2xl border p-3.5 transition-colors bg-white hover:bg-slate-50/80 border-slate-200"
              >
                <span className="flex-1 font-bold text-xs sm:text-sm text-[#0a1f3d] leading-snug" itemProp="name">
                  {faq.q}
                </span>
                {isOpen ? <ChevronUp className="h-4 w-4 text-[#0f4a9b] shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />}
              </button>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="ml-0 sm:ml-[46px] mt-1"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="flex items-start gap-2.5 rounded-2xl border p-4 bg-[#f8fafc] border-[#0f4a9b]/15 shadow-sm">
                    <p className="flex-1 text-gray-600 text-xs sm:text-[13px] leading-relaxed text-left mb-0" itemProp="text">
                      {faq.a}
                    </p>
                    <span className="flex-shrink-0 flex items-center justify-center rounded-full bg-[#0f4a9b] text-white w-7 h-7">
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

export default function IllusionOfCompetenceBlog() {
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
        preloadHeroImage={BLOG.heroImage}
        author={BLOG.author}
        placename="United Arab Emirates"
        ogType="article"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
            { name: 'The Illusion of Competence', url: canonical },
          ]),
          articleSchema({
            title: BLOG.title,
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: {
              name: BLOG.author,
              url: '/authors/nimra-shahzada',
              jobTitle: BLOG.authorRole,
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
            },
            reviewer: {
              name: BLOG.reviewer,
              url: '/authors/nida-iqbal',
              jobTitle: BLOG.reviewerRole,
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
            },
            image: BLOG.heroImage,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* Visible Breadcrumb for Blog Articles */}
      <nav aria-label="Breadcrumb" className="bg-[#f8fafd] border-b border-slate-100">
        <ol className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400 list-none m-0">
          <li>
            <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1">
              <Home className="h-3 w-3" /> Home
            </a>
          </li>
          <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
          <li>
            <a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          </li>
          <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
          <li>
            <a href="/blogs/psychology-of-learning" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">Psychology of Learning</a>
          </li>
          <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
          <li className="text-[#0f4a9b] font-semibold truncate max-w-[150px]" aria-current="page">
            The Illusion of Competence
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <section className="pt-7 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/8 rounded-full mb-3 border border-[#0f4a9b]/15">
              <Brain className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wider uppercase">{BLOG.categoryBadge}</span>
            </div>

            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span className="italic font-serif inline-block pb-1" style={{ background: THEME_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {BLOG.titleLine2}
              </span>
            </h1>

            <p className="text-gray-600 text-sm lg:text-[15px] leading-relaxed mb-4 text-left">
              {BLOG.description}
            </p>

            {/* Author & Reviewer Metadata Card */}
            <div className="mb-4 mt-2 space-y-3">
              <div className="rounded-xl border border-slate-100 bg-[#f8fafd] p-3 sm:p-3.5 space-y-2.5">
                <div className="flex items-start gap-2.5 min-w-0">
                  <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                  <div className="min-w-0 leading-snug">
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">Written by</p>
                    <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] font-semibold text-xs sm:text-[13px] underline underline-offset-2 break-words">
                      {BLOG.author}
                    </a>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{BLOG.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100 min-w-0">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0 mt-0.5" />
                  <div className="min-w-0 leading-snug">
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">Fact-checked &amp; reviewed by</p>
                    <a href="/authors/nida-iqbal" className="text-[#0f4a9b] font-semibold text-xs sm:text-[13px] underline underline-offset-2 break-words">
                      {BLOG.reviewer}
                    </a>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{BLOG.reviewerRole}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-400">
                <time dateTime={BLOG.dateModified} className="flex items-center gap-1.5 min-w-0">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  <span className="leading-snug">Published Sep 2026</span>
                </time>
                <span className="text-gray-300" aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  <span>{BLOG.readTime}</span>
                </span>
                <SocialShare url={shareUrl} title={BLOG.title} />
              </div>
            </div>
          </motion.div>

          {/* Hero Figure */}
          <motion.figure initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-0">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[16/9] bg-[#0a1f3d]">
              <img
                src={BLOG.heroImage}
                alt={BLOG.heroAlt}
                width={1200}
                height={630}
                fetchPriority="high"
                className="w-full h-full object-cover block"
              />
            </div>
            {BLOG.heroCaption && (
              <figcaption className="mt-2.5 text-center text-xs text-gray-500 italic leading-relaxed px-2">
                {BLOG.heroCaption}
              </figcaption>
            )}
          </motion.figure>
        </div>
      </section>

      {/* Main Article Body */}
      <article className="pb-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Table of Contents Accordion */}
          <TOC open={tocOpen} setOpen={setTocOpen} />

          {/* Opening Narrative */}
          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 mb-6 text-left">
            <p className="text-base sm:text-[16.5px] font-medium text-[#0a1f3d] leading-relaxed">
              Ask a student why they feel ready after 15 hours of revision, and they will show you their colour-coded notes. Ask an examiner why that same student dropped 25 marks, and they will point to retrieval failure.
            </p>
            <p>
              Every exam season in Dubai, Abu Dhabi and Sharjah, the same story repeats. A conscientious student spends the weekend highlighting chapters, rewriting summaries and producing beautiful flashcards. They walk into the exam hall feeling prepared. Then question 4 arrives, and the page in their head is blank.
            </p>
            <p>
              This is not laziness, and it is not a lack of intelligence. It is one of the best-documented traps in the psychology of learning: <strong>the illusion of competence</strong>. This article explains why it happens, how to spot it early, and what UAE students can do instead.
            </p>
          </div>

          {/* ── RECOGNITION IS NOT RECALL ── */}
          <div id="recognition-is-not-recall" className="mt-8 mb-4 scroll-mt-24">
            <h2 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">
              Recognition is not recall
            </h2>
          </div>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              Your brain does two very different things with information:
            </p>
            <div className="grid sm:grid-cols-2 gap-3.5 my-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d] mb-1">Recognition</h4>
                <p className="text-xs text-gray-600 mb-0">
                  What happens when you look at a page and think, <em>&quot;Yes, I know this.&quot;</em> The information is in front of you, and your brain matches it to something familiar.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#0f4a9b]/5 border border-[#0f4a9b]/20">
                <h4 className="font-bold text-xs sm:text-sm text-[#0f4a9b] mb-1">Recall</h4>
                <p className="text-xs text-gray-700 mb-0">
                  What the exam demands. There is no page. You must generate the concept from scratch, under time pressure, in response to an unfamiliar question format.
                </p>
              </div>
            </div>

            <RecognitionVsRecallIllustrationSVG />

            <p>
              Re-reading trains recognition. Exams test recall. A student can be excellent at the first and still fail at the second, and they will not find out until it is too late to fix.
            </p>
          </div>

          {/* ── SECTION 01 ── */}
          <SectionHeading num="01" id="the-neuroscience-of-fluency-vs-mastery">
            The neuroscience of &quot;fluency&quot; vs &quot;mastery&quot;
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              When you re-read a chapter for the third time, it feels easy. The words flow, the diagrams look familiar, and nothing surprises you. Psychologists call this <em>fluency</em>, and the brain treats it as a signal: this feels easy, therefore I must know it.
            </p>
            <p>
              That signal is unreliable. Ease of processing tells you the material is familiar. It does not tell you that you can retrieve it, apply it, or explain it. The student is mistaking visual familiarity for understanding.
            </p>
          </div>

          {/* Image 2: Recognition vs Recall */}
          <InlineImage
            src="/images/blogs/recognition-vs-recall.jpg"
            alt="Student studying with a handheld whiteboard actively writing physics formulas from memory alongside study timer and closed textbook"
            width={1200}
            height={675}
            caption="Closed-book active recall forces mental reconstruction, building durable memory pathways that survive exam pressure."
          />

          {/* Comparison Matrix Table */}
          <div className="my-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-[#f8fafd] px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0a1f3d] uppercase tracking-wider flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-[#0f4a9b]" /> Fluency vs Mastery in Practice
              </span>
              <span className="text-[10px] text-gray-500 font-medium">Cognitive Psychology</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 text-[#0a1f3d] font-bold border-b border-slate-100">
                    <th className="py-2.5 px-3.5 w-1/4">Stage / Dimension</th>
                    <th className="py-2.5 px-3.5 w-3/8 text-rose-700">The Passive Reader</th>
                    <th className="py-2.5 px-3.5 w-3/8 text-emerald-700">The Active Retriever</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-gray-600">
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#0a1f3d]">Method</td>
                    <td className="py-2.5 px-3.5 text-gray-700">Highlights, re-reads, admires the notes</td>
                    <td className="py-2.5 px-3.5 text-[#0a1f3d] font-semibold">Closes the book and writes from memory</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#0a1f3d]">At Home</td>
                    <td className="py-2.5 px-3.5 text-gray-700">Feels around 90% prepared</td>
                    <td className="py-2.5 px-3.5 text-[#0a1f3d]">Feels uncomfortable, stumbles, spots gaps</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#0a1f3d]">In the Exam Hall</td>
                    <td className="py-2.5 px-3.5 text-rose-700 font-semibold">Blanks on question 4</td>
                    <td className="py-2.5 px-3.5 text-emerald-700 font-bold">Recalls under pressure and scores well</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#0a1f3d]">What They Trained</td>
                    <td className="py-2.5 px-3.5 text-rose-600 font-medium">Recognition (Passive)</td>
                    <td className="py-2.5 px-3.5 text-emerald-700 font-bold">Retrieval (Active)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              The uncomfortable feeling is the point. Struggling to remember is not a sign that revision is failing. It is the exact biological mechanism by which memory is built.
            </p>
          </div>

          {/* ── SECTION 02 ── */}
          <SectionHeading num="02" id="why-highlighting-and-summarising-backfire">
            Why highlighting and summarising often backfire
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              Many UAE students invest serious effort in their notes: coloured pens, neat headings, consistent layouts. The effort is real, but the return is poor, because the work is largely copying and organising rather than remembering.
            </p>
            <p>
              The most cited evidence here is{' '}
              <a
                href="https://journals.sagepub.com/doi/10.1177/1529100612453266"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f4a9b] font-semibold hover:underline"
              >
                Dunlosky et al. (2013)
              </a>{' '}
              in their comprehensive review of ten common learning techniques. It rated highlighting, re-reading and summarising as <em>low-utility strategies</em>, while practice testing and spaced practice came out as <em>high-utility</em>. In other words, the methods students prefer are often not the methods that work.
            </p>
            <p>
              The reason connects to research from the{' '}
              <a
                href="https://bjorklab.psych.ucla.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f4a9b] font-semibold hover:underline"
              >
                Bjork Learning &amp; Forgetting Lab (UCLA)
              </a>{' '}
              on <strong>desirable difficulty</strong>. Learning that feels effortful in the moment tends to last longer than learning that feels smooth. Low-effort habits produce a pleasant feeling of progress and very little durable memory. Higher-effort habits feel slower and more frustrating, and they are the ones that survive the exam.
            </p>
            <p>
              This is also why past papers are best used at the right point in the cycle, not as a first step. We cover that in our guide on <a href="/blogs/igcse-preparation-past-papers-final-step" className="text-[#0f4a9b] font-semibold hover:underline">IGCSE Preparation: Why Past Papers Are the Final Step</a>.
            </p>
          </div>

          {/* ── SECTION 03 ── */}
          <SectionHeading num="03" id="the-3-warning-signs-of-false-competence">
            The 3 warning signs of false revision competence
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              Parents and students can catch the illusion early if they know what to look for:
            </p>

            {/* Image 5: The 3 Warning Signs */}
            <InlineImage
              src="/images/blogs/three-warning-signs-false-competence.jpg"
              alt="UAE student in a hijab sitting at a bright study desk in Dubai, looking frustrated while staring at a blank exam paper unable to recall answers from memory"
              width={1200}
              height={675}
              caption="The friction of struggling to recall information without open notes is the exact moment real learning and memory consolidation occur."
            />

            <div className="space-y-3 my-5">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Sign 01: &quot;I know it when I look at the answer.&quot;</h4>
                  <p className="text-xs text-gray-600 mt-0.5 mb-0">
                    If a student says they understood everything once they saw the mark scheme, that is hindsight at work. Once the answer is visible, it feels as though they always knew it. The real test is whether they could have produced it beforehand on a blank page.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Sign 02: Revision without friction.</h4>
                  <p className="text-xs text-gray-600 mt-0.5 mb-0">
                    If revision feels smooth, calm and pleasant throughout, memory is probably not consolidating. Some struggle, hesitation and error should be part of every good session.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Sign 03: Chapter-order dependence.</h4>
                  <p className="text-xs text-gray-600 mt-0.5 mb-0">
                    Some students can only solve problems when they are guided by textbook headings or when questions arrive in the order they were taught. Real exams mix topics freely. If a student cannot identify which topic a question belongs to, they have learned the content but not the retrieval.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 04 ── */}
          <SectionHeading num="04" id="working-memory-breakdown-in-stem-and-humanities">
            The working memory breakdown in STEM and humanities
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              The illusion of competence rarely announces itself at home. It shows up in the exam hall, in different ways depending on the subject:
            </p>
            <p>
              <strong>In Maths and Physics:</strong> Students often recognise the formula on a formula sheet but cannot tell when to apply it in an unfamiliar word problem. They know the tool but not the situation it fits. This is explored in more depth in our article on <a href="/blogs/igcse-physics-formulas-exam" className="text-[#0f4a9b] font-semibold hover:underline">Why IGCSE Physics Formulas Stop Working in Exams</a>.
            </p>
            <p>
              <strong>In Biology, Chemistry and Humanities:</strong> Students memorise keywords and definitions but cannot organise them into a logical, structured argument. A 6-mark question does not reward a list of terms; it rewards an uninterrupted chain of reasoning, which only forms through practice retrieving and connecting ideas. See our guide on <a href="/blogs/why-igcse-biology-students-lose-marks-on-6-mark-questions" className="text-[#0f4a9b] font-semibold hover:underline">Why IGCSE Biology Students Lose Marks on 6-Mark Questions</a> for a closer look.
            </p>
            <p>
              In both cases, working memory is overloaded because the knowledge has not been practised enough to become automatic. Under exam pressure, a student who has only recognised material has nothing reliable to draw on.
            </p>

            <MemoryLoadDiagramSVG />

            <BlurtingProtocolIllustrationSVG />
          </div>

          {/* ── SECTION 05 ── */}
          <SectionHeading num="05" id="the-retrieval-practice-antidote">
            The &quot;retrieval practice&quot; antidote: a 4-step home protocol
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              The fix does not require more hours. It requires changing what those hours contain:
            </p>

            {/* Image 3: The 4-Step Retrieval Practice Protocol */}
            <InlineImage
              src="/images/blogs/retrieval-practice-4-step-protocol.jpg"
              alt="Flatlay of active retrieval tools including a multi-slot Leitner flashcard box, blurting notebook with red-pen gap corrections, and study timer"
              width={1200}
              height={675}
              caption="Evidence-based study tools in action: a 4-box Leitner flashcard system paired with closed-book blurting and targeted red-pen audit."
            />

            <RetrievalCycleDiagramSVG />

            <div className="grid sm:grid-cols-2 gap-3.5 my-5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-xs">1</span>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Brain Dumps (Blurting)</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-0">
                  After reading a topic, close the book. On a blank page, write down everything you can remember. Then open the notes and mark what you missed in a different colour. The gaps you find are your real revision list.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-xs">2</span>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">The Feynman Technique</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-0">
                  Pick a tricky concept and explain it out loud, in plain English, as if teaching a younger student. Wherever you stumble or reach for jargon, you have found a weak spot.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-xs">3</span>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Interleaving</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-0">
                  Instead of doing an hour of one topic, mix several topics in a session. It feels harder and less tidy, but it trains the skill exams actually test: deciding which method a question needs.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-xs">4</span>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Leitner Box Flashcards</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-0">
                  Sort cards into boxes by how well you know them. Correct answers move to a box reviewed less often; wrong answers return to box 1. Time goes to weak cards, not the comfortable ones.
                </p>
              </div>
            </div>

            <LeitnerSystemVisual />

            <p>
              Spacing these sessions over days and weeks, rather than cramming, strengthens all four steps.
            </p>
          </div>

          {/* ── SECTION 06 ── */}
          <SectionHeading num="06" id="how-parents-can-spot-the-illusion-early">
            How parents can spot the illusion early
          </SectionHeading>

          <div className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              <em>&quot;Did you finish revising?&quot;</em> is the wrong question. A student can answer yes and still be caught in the illusion. Better questions test retrieval directly:
            </p>
            <ul className="my-3 space-y-2 pl-1">
              <li className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0f4a9b] shrink-0 mt-2" />
                <span><em>&quot;Can you teach me question 3 without looking at the textbook?&quot;</em></span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0f4a9b] shrink-0 mt-2" />
                <span><em>&quot;Can you do this problem on a blank whiteboard with a 5-minute timer?&quot;</em></span>
              </li>
            </ul>

            {/* Image 4: Parent Takeaway Whiteboard Check */}
            <InlineImage
              src="/images/blogs/parent-whiteboard-check.jpg"
              alt="Supportive parent and teenage daughter at a Dubai home dining table smiling as the student explains a science diagram on a handheld whiteboard"
              width={1200}
              height={675}
              caption="Kitchen-table diagnostic: asking students to teach a concept on a blank whiteboard reveals real exam readiness in minutes."
            />

            <ParentDiagnosticChecklistSVG />

            <p>
              If the answer is hesitant, that is useful information, and it arrives while there is still time to act.
            </p>
          </div>

          <ParentTakeaway>
            Do not measure revision by hours or by how neat the notes are. Measure it by what your child can produce from a blank page. A student who struggles at the kitchen table in February is far better placed than one who feels confident and has never been tested.
          </ParentTakeaway>

          {/* ── SECTION 07: FREQUENTLY ASKED QUESTIONS ── */}
          <SectionHeading num="07" id="frequently-asked-questions">
            Frequently asked questions
          </SectionHeading>
          <FAQAccordion />

          {/* Social Share Bar Under FAQ */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-3">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Share this practical guide with other UAE parents</p>
            <SocialShare url={shareUrl} title={BLOG.title} center />
          </div>

          {/* ── SECTION 08: SOURCES & FURTHER READING ── */}
          <SectionHeading num="08" id="sources-and-further-reading">
            Sources and further reading
          </SectionHeading>

          <div className="text-xs text-gray-600 leading-relaxed space-y-2 mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <ul className="space-y-1.5 list-disc list-inside">
              <li>
                <a
                  href="https://journals.sagepub.com/doi/10.1177/1529100612453266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0f4a9b] hover:underline font-bold"
                >
                  Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., &amp; Willingham, D. T. (2013):
                </a>{' '}
                <em>Improving Students&apos; Learning With Effective Learning Techniques: Promising Directions From Cognitive and Educational Psychology.</em> Psychological Science in the Public Interest.
              </li>
              <li>
                <a
                  href="https://bjorklab.psych.ucla.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0f4a9b] hover:underline font-bold"
                >
                  Bjork Learning &amp; Forgetting Lab (UCLA) / Bjork, R. A. &amp; Bjork, E. L.:
                </a>{' '}
                <em>Desirable Difficulties in Learning and Memory Consolidation.</em> University of California, Los Angeles (UCLA).
              </li>
              <li>
                <a href="/blogs/exam-stamina-uae-students" className="text-[#0f4a9b] hover:underline font-medium">
                  Exam Stamina: Why Your Child Can&apos;t Sit the Full Paper
                </a>: How to build cognitive endurance for long exam sessions.
              </li>
              <li>
                <a href="/blogs/igcse-preparation-past-papers-final-step" className="text-[#0f4a9b] hover:underline font-medium">
                  IGCSE Preparation: Why Past Papers Are the Final Step, Not the First
                </a>: Sequencing concept mastery before practice testing.
              </li>
            </ul>
          </div>

          {/* Related Articles 2x2 Grid */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <h3 className="text-sm font-extrabold text-[#0a1f3d] mb-4 uppercase tracking-wider">
              Related Guides on Psychology of Learning
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {RELATED.map((item, i) => (
                <a key={i} href={`/blogs/${item.slug}`} className="group p-4 bg-slate-50 hover:bg-[#0f4a9b]/[0.03] border border-slate-200 rounded-2xl transition">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f4a9b]">{item.category}</span>
                  <p className="text-sm font-extrabold text-[#0a1f3d] mt-1 mb-1 group-hover:text-[#0f4a9b] transition">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-0">{item.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Author & Reviewer Info Cards */}
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[#0f4a9b]/10 bg-gradient-to-br from-white to-[#f4f7fd] p-4 sm:p-5">
              <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#0f4a9b] border border-[#0f4a9b]/15 bg-[#0f4a9b]/5 mb-3">
                About the Author
              </span>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1">
                <a href="/authors/nimra-shahzada" className="text-[#0f4a9b] hover:underline">{BLOG.author}</a>
              </p>
              <p className="text-[11px] text-[#0f4a9b] font-semibold mb-2 leading-snug">{BLOG.authorRole}</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-0">
                {BLOG.authorBio}
              </p>
            </div>
            <div className="rounded-2xl border border-[#C7A24A]/15 bg-gradient-to-br from-white to-[#fdf9f0] p-4 sm:p-5">
              <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6 mb-3">
                Reviewed By
              </span>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1">
                <a href="/authors/nida-iqbal" className="text-[#0f4a9b] hover:underline">{BLOG.reviewer}</a>
              </p>
              <p className="text-[11px] text-[#0f4a9b] font-semibold mb-2 leading-snug">{BLOG.reviewerRole}</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-0">
                Nida checks each guide for accuracy, educational validity, and parent clarity before it is published. See{' '}
                <a href="/editorial" className="text-[#0f4a9b] font-semibold hover:underline">how our editorial review works</a>.
              </p>
            </div>
          </div>

          {/* Tags Cloud */}
          <div className="mt-5 flex flex-wrap gap-2">
            {BLOG.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-[#0a1f3d]">{tag}</span>
            ))}
          </div>

          {/* Diagnostic Callout CTA Box at End */}
          <div
            className="mt-10 mb-6 rounded-2xl p-6 sm:p-8 border border-[#0f4a9b]/20 text-white text-center relative overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A24A]/20 border border-[#C7A24A]/30 text-[#f0c96a] text-xs font-bold mb-3">
              <Activity className="w-3.5 h-3.5" /> Diagnostic Assessment
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug mb-3 max-w-xl mx-auto">
              Pinpoint where your child&apos;s revision is leaking marks
            </h3>
            <p className="text-sm text-white/80 leading-relaxed mb-6 max-w-lg mx-auto">
              Our curriculum tutors run short diagnostic sessions that show exactly where recognition is standing in for recall, and how to fix it before the exam.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="/contact#form"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-sm w-full sm:w-auto shadow-md"
                style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
              >
                Book a Free Trial
              </a>
              <a
                href="https://wa.me/971561249005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] border border-transparent rounded-full font-bold text-white transition text-sm shadow-md w-full sm:w-auto"
              >
                <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </article>
    </Layout>
  );
}
