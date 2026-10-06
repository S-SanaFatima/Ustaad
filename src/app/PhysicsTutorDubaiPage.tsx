import { useState, useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Atom, Zap, Waves, Thermometer, Gauge,
  CheckCircle2, X,
  ChevronDown, ChevronLeft, ChevronRight, Sparkles, FileSearch, Wrench, Timer, PenTool, ShieldCheck,
  ClipboardCheck, Target, Star, MessageCircle, FlaskConical,
  Calculator, MapPin, Phone, Mail, ArrowRight, Layers, Compass, GraduationCap, Check, HelpCircle, Award
} from 'lucide-react';

import { Layout, GoldButton, FinalCTA, StatsBar, SchoolsMarquee, WhatsAppIcon, DUBAI_SCHOOL_LOGOS, RelatedContent } from './shared';
import { CurriculumTransitionClipboard3D } from './shared/CurriculumTransitionClipboard3D';
import { InteractivePaper2Whiteboard } from './shared/InteractivePaper2Whiteboard';
import { PhysicsLaboratoryThemesStation } from './shared/PhysicsLaboratoryThemesStation';
import { InteractiveCriterionDecoder3D } from './shared/InteractiveCriterionDecoder3D';
import { InteractiveLabCriteriaCards } from './shared/InteractiveLabCriteriaCards';
import { PhysicsCurriculumJourney3D } from './shared/PhysicsCurriculumJourney3D';
import { PhysicsDiagnosticApproach3D } from './shared/PhysicsDiagnosticApproach3D';
import { PhysicsHlSlFourQuestionsScroll } from './shared/PhysicsHlSlFourQuestionsScroll';
import { PhysicsTwoYearTimeline } from './shared/PhysicsTwoYearTimeline';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, courseSchema } from './shared/schemas';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20support%20with%20Physics%20in%20Dubai.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

/* Rich Physics Hero Background with animated vectors, orbital models, wave interference and formulas */
const PhysicsHeroBackground = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
    {/* Ambient Glow Orbs */}
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.38, 0.25] }}
      transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      className="absolute -top-16 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#0f4a9b]/40 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.28, 0.15] }}
      transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
      className="absolute top-10 right-0 w-[380px] h-[380px] bg-[#f0c96a]/20 rounded-full blur-[100px]"
    />
    <motion.div
      animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.22, 0.12] }}
      transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 2 }}
      className="absolute bottom-10 left-0 w-[360px] h-[360px] bg-[#22b8cd]/20 rounded-full blur-[90px]"
    />

    {/* Desktop Physics SVG Background */}
    <svg
      viewBox="0 0 1440 540"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full hidden md:block opacity-90"
      aria-hidden="true"
    >
      <defs>
        <pattern id="phys-grid-desk" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
          <circle cx="48" cy="48" r="0.75" fill="rgba(95,211,230,0.2)" />
        </pattern>

        <linearGradient id="physGoldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#C7A24A" />
        </linearGradient>

        <linearGradient id="physCyanGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f4a9b" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
        </linearGradient>

        <radialGradient id="atomCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#f0c96a" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
        </radialGradient>

        <filter id="physGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <marker id="physArrowCyan" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(56,189,248,0.85)" />
        </marker>
        <marker id="physArrowGold" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(240,201,106,0.9)" />
        </marker>
      </defs>

      {/* Grid Pattern */}
      <rect width="100%" height="100%" fill="url(#phys-grid-desk)" />

      {/* HUD Header telemetry */}
      <text x="60" y="44" fill="rgba(56,189,248,0.7)" fontSize="10" fontFamily="monospace" letterSpacing="0.14em">
        DUBAI · 25.2048° N, 55.2708° E · IB DP THEMES A–E
      </text>
      <text x="1380" y="44" textAnchor="end" fill="rgba(240,201,106,0.6)" fontSize="9.5" fontFamily="monospace" letterSpacing="0.12em">
        EXAM PRECISION · A-LEVEL 9702/9PH0
      </text>
      <line x1="60" y1="52" x2="1380" y2="52" stroke="rgba(56,189,248,0.15)" strokeWidth="0.8" strokeDasharray="4 6" />

      {/* --- LEFT VISUAL: VECTOR RESOLUTION & PROJECTILE TRAJECTORY (THEME A) --- */}
      <g transform="translate(130, 240)" opacity="0.85">
        {/* Coordinate axes */}
        <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" markerEnd="url(#physArrowCyan)" />
        <line x1="0" y1="100" x2="0" y2="-60" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" markerEnd="url(#physArrowCyan)" />
        <text x="195" y="116" fill="rgba(255,255,255,0.5)" fontSize="9.5" fontFamily="monospace">x (m)</text>
        <text x="-24" y="-52" fill="rgba(255,255,255,0.5)" fontSize="9.5" fontFamily="monospace">y (m)</text>

        {/* Parabolic Trajectory */}
        <path
          d="M 0 100 Q 80 -40 160 100"
          fill="none"
          stroke="url(#physCyanGrad)"
          strokeWidth="2"
          strokeDasharray="5 5"
        />

        {/* Animated Projectile Particle */}
        <motion.circle
          cx="0"
          cy="0"
          r="4"
          fill="#38bdf8"
          filter="url(#physGlow)"
          animate={{
            cx: [0, 80, 160],
            cy: [100, -10, 100],
            opacity: [0.2, 1, 0.2]
          }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        />

        {/* Vector Components at Launch */}
        <line x1="0" y1="100" x2="60" y2="30" stroke="#f0c96a" strokeWidth="2" markerEnd="url(#physArrowGold)" />
        <line x1="0" y1="100" x2="60" y2="100" stroke="rgba(240,201,106,0.45)" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="60" y1="100" x2="60" y2="30" stroke="rgba(240,201,106,0.45)" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M 22 100 A 22 22 0 0 0 18 84" fill="none" stroke="#f0c96a" strokeWidth="1" />
        <text x="24" y="93" fill="#f0c96a" fontSize="9.5" fontFamily="monospace" fontStyle="italic">θ</text>
        <text x="38" y="48" fill="#fde68a" fontSize="10.5" fontFamily="monospace" fontWeight="bold">v₀</text>
        <text x="26" y="114" fill="rgba(240,201,106,0.7)" fontSize="8.5" fontFamily="monospace">v₀·cosθ</text>
        <text x="65" y="68" fill="rgba(240,201,106,0.7)" fontSize="8.5" fontFamily="monospace">v₀·sinθ</text>

        {/* Label */}
        <text x="0" y="132" fill="rgba(56,189,248,0.7)" fontSize="8.5" fontFamily="monospace">
          THEME A · 2D VECTOR KINEMATICS
        </text>
      </g>

      {/* --- RIGHT VISUAL: BOHR ATOM & QUANTUM ORBITALS (THEME E) --- */}
      <g transform="translate(1280, 240)" opacity="0.9">
        {/* Core Nucleus Glow */}
        <circle cx="0" cy="0" r="28" fill="url(#atomCoreGlow)" />
        <circle cx="0" cy="0" r="5" fill="#f0c96a" filter="url(#physGlow)" />
        <circle cx="0" cy="0" r="2" fill="#ffffff" />

        {/* Orbit 1 (Tilted Ellipse) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        >
          <ellipse cx="0" cy="0" rx="78" ry="30" fill="none" stroke="rgba(56,189,248,0.35)" strokeWidth="1.2" strokeDasharray="4 4" transform="rotate(-30)" />
          <circle cx="68" cy="-38" r="3" fill="#38bdf8" filter="url(#physGlow)" />
        </motion.g>

        {/* Orbit 2 (Opposite Tilt) */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
        >
          <ellipse cx="0" cy="0" rx="78" ry="30" fill="none" stroke="rgba(240,201,106,0.35)" strokeWidth="1.2" strokeDasharray="4 4" transform="rotate(45)" />
          <circle cx="-55" cy="55" r="2.8" fill="#f0c96a" filter="url(#physGlow)" />
        </motion.g>

        {/* Orbit 3 (Horizontal Ring) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
        >
          <ellipse cx="0" cy="0" rx="90" ry="32" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 5" />
          <circle cx="90" cy="0" r="2.5" fill="#22d3ee" />
        </motion.g>

        {/* Photon Wave Emission */}
        <path
          d="M 10 0 Q 25 -12 40 0 T 70 0 T 100 0"
          fill="none"
          stroke="url(#physGoldGrad)"
          strokeWidth="1.4"
          markerEnd="url(#physArrowGold)"
        />
        <text x="55" y="-10" fill="#fde68a" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
          E = hf
        </text>

        <text x="-65" y="84" fill="rgba(240,201,106,0.7)" fontSize="8.5" fontFamily="monospace">
          THEME E · QUANTUM TRANSITIONS
        </text>
      </g>



      {/* --- FLOATING SCIENTIFIC FORMULAS ACROSS EDGES --- */}
      <text x="110" y="115" fill="rgba(56,189,248,0.3)" fontSize="11" fontFamily="monospace">
        F = ma · p = mv
      </text>
      <text x="80" y="440" fill="rgba(240,201,106,0.3)" fontSize="10.5" fontFamily="monospace">
        Δx · Δp ≥ ℏ / 2
      </text>
      <text x="1230" y="120" fill="rgba(240,201,106,0.35)" fontSize="11" fontFamily="monospace">
        pV = nRT · ΔU = Q - W
      </text>
      <text x="1250" y="445" fill="rgba(56,189,248,0.3)" fontSize="10.5" fontFamily="monospace">
        ε = -N(dΦ / dt)
      </text>
    </svg>

    {/* Mobile Physics SVG Background */}
    <svg
      viewBox="0 0 360 480"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full md:hidden opacity-90 pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="phys-grid-mob" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
          <circle cx="32" cy="32" r="0.6" fill="rgba(56,189,248,0.25)" />
        </pattern>
        <marker id="mobPhysArrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(240,201,106,0.9)" />
        </marker>
      </defs>

      <rect width="100%" height="100%" fill="url(#phys-grid-mob)" />

      {/* Mobile Top Telemetry */}
      <text x="16" y="32" fill="rgba(56,189,248,0.7)" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
        DUBAI · 25.2° N · IB DP THEMES A–E
      </text>
      <line x1="16" y1="38" x2="344" y2="38" stroke="rgba(56,189,248,0.15)" strokeWidth="0.8" strokeDasharray="3 4" />

      {/* Top Right: Animated Bohr Orbitals (Theme E) */}
      <g transform="translate(310, 85)" opacity="0.85">
        <circle cx="0" cy="0" r="16" fill="rgba(240,201,106,0.15)" />
        <circle cx="0" cy="0" r="3" fill="#f0c96a" />
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
        >
          <ellipse cx="0" cy="0" rx="36" ry="14" fill="none" stroke="rgba(56,189,248,0.4)" strokeWidth="1" strokeDasharray="3 3" transform="rotate(-30)" />
          <circle cx="32" cy="-16" r="2.2" fill="#38bdf8" />
        </motion.g>
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        >
          <ellipse cx="0" cy="0" rx="36" ry="14" fill="none" stroke="rgba(240,201,106,0.4)" strokeWidth="1" strokeDasharray="3 3" transform="rotate(45)" />
          <circle cx="-25" cy="25" r="2" fill="#f0c96a" />
        </motion.g>
        <text x="-40" y="28" fill="#fde68a" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
          E=hf
        </text>
      </g>

      {/* Left Wing: Vector & Kinematics (Theme A) */}
      <g transform="translate(18, 140)" opacity="0.75">
        <line x1="0" y1="50" x2="60" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="0" y1="50" x2="0" y2="10" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="0" y1="50" x2="36" y2="20" stroke="#f0c96a" strokeWidth="1.5" markerEnd="url(#mobPhysArrow)" />
        <text x="40" y="24" fill="#fde68a" fontSize="8" fontFamily="monospace" fontWeight="bold">v₀</text>
        <path d="M 0 50 Q 25 15 50 50" fill="none" stroke="rgba(56,189,248,0.4)" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      {/* Floating Formulas in empty margins */}
      <text x="18" y="240" fill="rgba(56,189,248,0.35)" fontSize="9" fontFamily="monospace">
        F = ma
      </text>
      <text x="300" y="235" fill="rgba(240,201,106,0.35)" fontSize="8.5" fontFamily="monospace">
        pV = nRT
      </text>
      <text x="18" y="340" fill="rgba(240,201,106,0.35)" fontSize="8.5" fontFamily="monospace">
        Δx·Δp ≥ ℏ/2
      </text>
      <text x="290" y="345" fill="rgba(56,189,248,0.35)" fontSize="8.5" fontFamily="monospace">
        v = fλ
      </text>
      <text x="20" y="440" fill="rgba(56,189,248,0.4)" fontSize="8" fontFamily="monospace">
        v² = u² + 2as · E = mc²
      </text>
    </svg>
  </div>
);

/* Faint physics grid background for light sections */
const PhysGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'dubai-pgrid-l' : 'dubai-pgrid-d'} width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke={light ? 'rgba(15,74,155,0.05)' : 'rgba(255,255,255,0.04)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'dubai-pgrid-l' : 'dubai-pgrid-d'})`} />
  </svg>
);

const Eyebrow = ({ icon, text, dark = false }: { icon: React.ReactNode; text: string; dark?: boolean }) => (
  <div
    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.16em] mb-2.5 border ${
      dark
        ? 'bg-white/5 border-white/15 text-blue-200'
        : 'bg-[#0f4a9b]/5 border-[#0f4a9b]/15 text-[#0f4a9b]'
    }`}
  >
    {icon}
    {text}
  </div>
);

/* Parents Testimonial Slider: Dubai Parents */
const PARENT_REVIEWS = [
  { 
    name: 'Rashid A.', 
    initials: 'RA', 
    location: 'Dubai Hills Estate, Dubai', 
    subject: 'IB DP Physics Higher Level (HL) · Verified Parent',
    text: 'My son at JESS Arabian Ranches was finding the IB Physics HL syllabus challenging, particularly wave mechanics and his Internal Assessment data analysis. His Ustaad tutor broke down difficult multi-topic problems with great clarity. He went from a predicted 5 to achieving a strong 7.' 
  },
  { 
    name: 'Kavita M.', 
    initials: 'KM', 
    location: 'Emirates Hills, Dubai', 
    subject: 'IB DP Physics Standard Level (SL) · Verified Parent',
    text: 'Our daughter was struggling with Criterion B and C in MYP Sciences and transitioned into DP Physics with anxiety. Her Ustaad tutor methodically rebuilt her uncertainty propagation and graph interpretation skills. Her confidence grew significantly, and she achieved top marks in her IA.' 
  },
  { 
    name: 'Jonathan P.', 
    initials: 'JP', 
    location: 'Dubai Marina, Dubai', 
    subject: 'A-Level Physics (9PH0) & IB Bridge · Verified Parent',
    text: 'Transitioning to Year 12 Physics at Brighton College Dubai was a steep step. Ustaad provided a fantastic specialist who taught exact examiner mark-scheme phrasing and statistical error treatment. Truly a dependable tutoring service.' 
  },
];

function ParentsSlider() {
  const [index, setIndex] = useState(0);
  const count = PARENT_REVIEWS.length;
  const go = (i: number) => setIndex(((i % count) + count) % count);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count]);

  const r = PARENT_REVIEWS[index];

  return (
    <div>
      <div className="relative min-h-[190px] sm:min-h-[170px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl p-5 sm:p-7 overflow-hidden text-left"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
            }}
          >
            <div
              className="absolute top-2 left-3 text-[70px] font-black leading-none select-none pointer-events-none"
              style={{ color: 'rgba(240,201,106,0.12)', fontFamily: 'Georgia, serif' }}
            >
              “
            </div>
            <div className="relative z-10">
              <div className="flex gap-1 mb-2.5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="h-3.5 w-3.5 fill-[#f0c96a] text-[#f0c96a]" />
                ))}
              </div>
              <p className="text-white text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/15">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold text-white shrink-0 border border-white/20 notranslate shadow-xs"
                  translate="no"
                  style={{ background: 'linear-gradient(135deg, rgba(240,201,106,0.5), rgba(199,162,74,0.8))' }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-white font-extrabold text-xs sm:text-sm leading-tight notranslate" translate="no">{r.name}</p>
                  <p className="text-blue-200/80 text-[11px] mt-0.5 notranslate" translate="no">{r.location} · {r.subject}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous review"
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:-translate-x-0.5 cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20"
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </button>

          <div className="flex items-center gap-1.5">
            {PARENT_REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to review ${i + 1}`}
                className="rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: i === index ? 20 : 6,
                  height: 6,
                  background: i === index ? 'linear-gradient(92deg,#f0c96a,#fde68a)' : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(index + 1)}
            aria-label="Next review"
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:translate-x-0.5 cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20"
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function PhysicsTutorDubaiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCurriculumTab, setActiveCurriculumTab] = useState(1);
  const [activeDomainTab, setActiveDomainTab] = useState(0);

  // 1. DP Themes A to E
  const dpPhysicsThemes = [
    {
      id: 'theme-a',
      name: 'Theme A: Space, Time & Motion',
      icon: <Gauge className="w-4 h-4" />,
      tag: 'DP Theme A',
      title: 'Kinematics, Forces, Work, Energy & Circular Dynamics',
      desc: "Kinematics in 1D and 2D, projectile trajectories, forces and Newton's laws of motion, momentum, work, energy and power, circular motion, and gravitational fields.",
      keyFormulas: ['v = u + at', 's = ut + ½at²', 'F = ma', 'p = mv', 'W = Fs cos θ', 'a = v²/r'],
      examTip: 'Examiners look for vector resolution along perpendicular axes before setting up resultant dynamic equations.'
    },
    {
      id: 'theme-b',
      name: 'Theme B: Particulate Nature of Matter',
      icon: <Thermometer className="w-4 h-4" />,
      tag: 'DP Theme B',
      title: 'Thermal Energy, Gas Laws & Thermodynamics',
      desc: 'Thermal energy transfers, specific heat capacity and latent heat, ideal gas equation of state, kinetic model of an ideal gas, and first & second laws of thermodynamics (HL).',
      keyFormulas: ['Q = mcΔT', 'Q = mL', 'pV = nRT', 'Ek = 3/2 kBT', 'ΔU = Q - W'],
      examTip: 'Always convert temperature from Celsius to Kelvin before substituting into the ideal gas equation.'
    },
    {
      id: 'theme-c',
      name: 'Theme C: Wave Behaviour',
      icon: <Waves className="w-4 h-4" />,
      tag: 'DP Theme C',
      title: 'Simple Harmonic Motion, Wave Models & Interference',
      desc: 'Simple harmonic motion kinematics and dynamics, travelling wave properties, standing waves on strings and in pipes, single-slit diffraction, interference and Doppler effect.',
      keyFormulas: ['v = fλ', 'T = 2π√(m/k)', 's = λD/d', 'θ = λ/b', 'f\' = f(v ± vo)/(v ∓ vs)'],
      examTip: 'Calculate phase difference in radians and distinguish clearly between node-antinode spacing (λ/2).'
    },
    {
      id: 'theme-d',
      name: 'Theme D: Fields',
      icon: <Zap className="w-4 h-4" />,
      tag: 'DP Theme D',
      title: 'Gravitational, Electric & Magnetic Fields and Induction',
      desc: 'Gravitational fields and orbits, electrostatic potential and Coulomb force, electric circuits and potential dividers, magnetic force on charges/currents, and electromagnetic induction.',
      keyFormulas: ['F = G(m1m2)/r²', 'F = k(q1q2)/r²', 'V = IR', 'ε = -N(ΔΦ/Δt)', 'F = qvB sin θ'],
      examTip: 'Sketch field line directions and apply Lenz’s law with clear magnetic flux polarity reasoning.'
    },
    {
      id: 'theme-e',
      name: 'Theme E: Nuclear & Quantum Physics',
      icon: <Atom className="w-4 h-4" />,
      tag: 'DP Theme E',
      title: 'Atomic Transitions, Radioactivity, Quantum & Particle Physics',
      desc: 'Discrete energy levels and photons, radioactive decay law and half-life, nuclear binding energy and mass defect, fission and fusion, wave-particle duality, and the standard model.',
      keyFormulas: ['E = hf', 'hf = Φ + Ek,max', 'λ = h/p', 'N = N0 e^(-λt)', 'E = mc²'],
      examTip: 'Convert electron-volts to Joules (1 eV = 1.60 × 10⁻¹⁹ J) and unified atomic mass units to MeV accurately.'
    }
  ];

  // 2. IB Physics Lab Work Assessed
  const ibLabWork = [
    {
      icon: <Target className="w-5 h-5 text-[#0f4a9b]" />,
      title: 'Research Question & Variables',
      desc: 'Formulating focused, testable research questions with explicitly defined independent, dependent, and controlled variables (Criterion B).'
    },
    {
      icon: <Calculator className="w-5 h-5 text-[#0f4a9b]" />,
      title: 'Data Processing & Uncertainties',
      desc: 'Propagating absolute, fractional, and percentage uncertainties across calculated quantities with accurate significant figure rules.'
    },
    {
      icon: <FlaskConical className="w-5 h-5 text-[#0f4a9b]" />,
      title: 'Gradient & Error Bar Analysis',
      desc: 'Plotting error bars, fitting lines of best fit, and constructing maximum/minimum gradient lines to quantify gradient uncertainty.'
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-[#0f4a9b]" />,
      title: 'Methodological Evaluation',
      desc: 'Isolating specific systematic vs random errors and proposing realistic, quantifiable improvements to experimental apparatus.'
    }
  ];

  // 3. Curriculum Pathways (MYP, DP SL, DP HL)
  const curriculumTabs = [
    {
      name: 'MYP Sciences (Physics)',
      level: 'Years 7–10 / MYP 1–5',
      boards: 'IB Middle Years Programme',
      lead: 'Building scientific inquiry, Criterion B experimental design, and Criterion C quantitative data analysis before the Diploma.',
      bullets: [
        'Criterion A: Knowledge & understanding of mechanics, energy & waves',
        'Criterion B: Inquiring & designing rigorous scientific investigations',
        'Criterion C: Processing data, graphing & mathematical modeling',
        'Criterion D: Reflecting on the real-world scientific & ethical impacts'
      ],
      link: { label: 'Explore MYP Sciences', href: '/myp' }
    },
    {
      name: 'IB DP Physics (Standard Level)',
      level: 'Years 12–13 / DP 1–2',
      boards: 'IB Diploma Programme SL · Themes A–E',
      lead: 'Core syllabus mastery, Paper 1A/1B & Paper 2 exam techniques, and full Internal Assessment (IA) scientific report coaching.',
      bullets: [
        'Themes A–E core conceptual and mathematical mastery',
        'Paper 1 (Multiple choice & data-based) & Paper 2 structured theory',
        'Internal Assessment (IA) research design and uncertainty propagation',
        'Focused past-paper drills targeting IB mark-scheme command terms'
      ],
      link: { label: 'Explore DP Physics SL', href: '/dp-sl' }
    },
    {
      name: 'IB DP Physics (Higher Level)',
      level: 'Years 12–13 / DP 1–2',
      boards: 'IB Diploma Programme HL · Advanced Extension',
      lead: 'Advanced mathematical derivations, HL extension topics (rotational dynamics, thermodynamics, induction), and complex IA data processing.',
      bullets: [
        'Full HL extension topics: fields, induction, thermodynamics & quantum',
        'Advanced calculus and vector modeling alongside Maths AA',
        'Rigorous IA statistical modeling, maximum/minimum gradient analysis',
        'Multi-concept Paper 2 extended problem solving under timed pressure'
      ],
      link: { label: 'Explore DP Physics HL', href: '/dp-hl' }
    }
  ];

  // 4. Seven Dubai FAQs from PDF Guide
  const faqs: { q: string; a: React.ReactNode; plain: string }[] = [
    {
      q: 'What is the Internal Assessment, and how much does it affect the final grade?',
      plain: 'The IA is an investigation your child designs, runs and writes up over several weeks, assessed on the research question, the data and the evaluation rather than on getting a tidy result. It carries a significant share of the DP Physics grade and is completed long before the exams, which makes it the most controllable mark on the course.',
      a: <>The IA is an investigation your child designs, runs and writes up over several weeks, assessed on the research question, the data and the evaluation rather than on getting a tidy result. It carries a significant share of the DP Physics grade and is completed long before the exams, which makes it the most controllable mark on the course.</>
    },
    {
      q: "My child's IA keeps losing marks in the data section. What is usually wrong?",
      plain: 'Most often, students present raw data without propagated uncertainties, or draw a trend line without showing whether the error bars justify the slope. IB mark schemes require processed data with propagated uncertainties, max and min gradient lines, and an explicit calculation of the gradient uncertainty.',
      a: <>Most often, students present raw data without propagated uncertainties, or draw a trend line without showing whether the error bars justify the slope. IB mark schemes require processed data with propagated uncertainties, max and min gradient lines, and an explicit calculation of the gradient uncertainty.</>
    },
    {
      q: 'The MYP report mentions Criterion B and Criterion C. What do those mean in Sciences?',
      plain: 'Criterion B measures "Inquiring and designing" (how well your child formulates testable hypotheses, identifies variables, and designs a controlled method). Criterion C measures "Processing and evaluating" (how data is transformed into tables, graphs, and evaluated for validity). Marks lost here are almost always scientific communication and analysis errors, not lack of physics understanding.',
      a: <>Criterion B measures "Inquiring and designing" (how well your child formulates testable hypotheses, identifies variables, and designs a controlled method). Criterion C measures "Processing and evaluating" (how data is transformed into tables, graphs, and evaluated for validity). Marks lost here are almost always scientific communication and analysis errors, not lack of physics understanding.</>
    },
    {
      q: 'Should my child take Physics HL or SL?',
      plain: 'If your child is aiming for Engineering, Physics, or Physical Sciences at university, HL is generally required. If they are taking it for general scientific literacy or medicine, SL is often sufficient. The major difference is not just extra topics, but the depth of algebraic modeling and data analysis required. We recommend assessing their Math AA/AI comfort before finalizing.',
      a: <>If your child is aiming for Engineering, Physics, or Physical Sciences at university, HL is generally required. If they are taking it for general scientific literacy or medicine, SL is often sufficient. The major difference is not just extra topics, but the depth of algebraic modeling and data analysis required. We recommend assessing their Math AA/AI comfort before finalizing.</>
    },
    {
      q: 'We are moving into IB from a British curriculum. How far behind will my child be?',
      plain: 'Content-wise, they will not be behind at all—IGCSE covers rigorous foundation physics. The only gap is adjusting to how IB grades practical investigations and requires multi-stage evaluations instead of single-answer calculations. A few targeted sessions on Criterion B/C and error analysis quickly bridges this.',
      a: <>Content-wise, they will not be behind at all—IGCSE covers rigorous foundation physics. The only gap is adjusting to how IB grades practical investigations and requires multi-stage evaluations instead of single-answer calculations. A few targeted sessions on Criterion B/C and error analysis quickly bridges this.</>
    },
    {
      q: 'Do you teach the current DP Physics syllabus themes?',
      plain: 'Yes. All our IB Physics tutors are fully aligned with the current IB DP Physics syllabus organized around Themes A through E (Space, Time and Motion; The Particulate Nature of Matter; Wave Behaviour; Fields; and Nuclear and Quantum Physics).',
      a: <>Yes. All our IB Physics tutors are fully aligned with the current IB DP Physics syllabus organized around Themes A through E (Space, Time and Motion; The Particulate Nature of Matter; Wave Behaviour; Fields; and Nuclear and Quantum Physics).</>
    },
    {
      q: 'Who will actually teach my child?',
      plain: 'Your child will be taught 1-to-1 by a verified IB Physics specialist, such as Tabraiz Khan (Cambridge certified, MSc in Statistics with 9+ years of IB teaching experience). Every tutor is screened and approved by Ustaad academic leadership before their first session.',
      a: <>Your child will be taught 1-to-1 by a verified IB Physics specialist, such as <a href="/tutors/tabraiz-khan" className="text-[#0f4a9b] font-semibold underline">Tabraiz Khan</a> (Cambridge certified, MSc in Statistics with 9+ years of IB teaching experience). Every tutor is screened and approved by Ustaad academic leadership before their first session.</>
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Physics Tutor Dubai | IB DP & A-Level Physics Tuition | Ustaad"
        description="Expert 1-to-1 IB DP and A-Level physics tutors in Dubai. Specialized in MYP Sciences, DP Themes A–E, Internal Assessment (IA) data analysis, and exam precision."
        canonical="/physics-tutor-dubai"
        placename="Dubai, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Dubai',
            url: '/physics-tutor-dubai',
            name: 'Ustaad | Physics Tutor Dubai',
            description: 'Expert 1-to-1 IB DP and A-Level physics tutors in Dubai. Specialized in MYP Sciences, DP Themes A–E, Internal Assessment (IA) data analysis, and exam precision.',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Physics', url: '/physics' },
            { name: 'Physics Tutor Dubai', url: '/physics-tutor-dubai' },
          ]),
          serviceSchema('Private Physics Tutoring Dubai', 'One-to-one physics tutors in Dubai for IB DP (Themes A–E), MYP Sciences, and A-Level students. Trusted by Dubai families since 2015.', '/physics-tutor-dubai'),
          courseSchema({
            courseName: 'IB & A-Level Physics Tutoring Dubai',
            description: 'Expert 1-to-1 physics tutors in Dubai for IB DP and A-Level Physics.',
            url: '/physics-tutor-dubai',
            city: 'Dubai',
          }),
          faqSchema(faqs.map(f => ({ q: f.q, a: f.plain }))),
        ]}
      />

      {/* SECTION 01: HERO */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center pt-8 pb-4 md:pt-12 md:pb-6">
        <PhysicsHeroBackground />
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-3 sm:pt-24 sm:pb-4 max-w-4xl w-full">
          {/* Hero pill tags */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3">
            {['IB DP Themes A–E', 'A-Level 9702/9PH0'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold text-blue-100/80 bg-white/[0.08] border border-white/15"
              >
                <span className="w-1.5 h-1.5 rounded-full inline-block shrink-0 bg-[#f0c96a]" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-extrabold tracking-tight text-white leading-[1.12] mb-3 text-[clamp(1.75rem,4.5vw,3.1rem)] max-w-3xl">
            Physics Tutor Dubai,{' '}
            <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Built For Exam Precision
            </span>
          </h1>

          <p className="text-blue-100/80 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl mb-6 px-4 font-medium">
            Master multi-step calculations, vector resolutions, and internal assessment data analysis with 1-to-1 physics specialists in Dubai.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4">
            <a
              href={BOOKING}
              className="inline-flex items-center justify-center gap-2 px-7 h-11 rounded-full font-bold text-sm sm:text-base text-white transition-all hover:-translate-y-0.5 shadow-lg"
              style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 16px rgba(15,74,155,0.5)' }}
            >
              Book Your Free Trial
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-md shadow-[#25D366]/20"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp a Tutor
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 02: STATS BAR */}
      <StatsBar />

      {/* SECTION 03: TRUSTED BY DUBAI SCHOOLS */}
      <SchoolsMarquee
        logoList={DUBAI_SCHOOL_LOGOS}
        header={
          <div className="text-center mb-4 sm:mb-5 max-w-2xl mx-auto px-4">
            <p className="text-xs sm:text-sm font-bold text-[#0a1f3d] leading-relaxed">
              Tutoring physics students across Dubai's leading British, IB, and International schools since 2015.
            </p>
          </div>
        }
      />

      {/* SECTION 04 (NEW): CRITERION DECODER (What B and C actually mean) */}
      <InteractiveCriterionDecoder3D />

      {/* SECTION 05: DP PHYSICS THEMES A–E & MYP */}
      <PhysicsLaboratoryThemesStation bookingUrl={BOOKING} />

      {/* SECTION 06: THE DP PHYSICS TIMELINE (LUXURY CARDS & MOBILE HORIZONTAL SCROLL) */}
      <PhysicsTwoYearTimeline />

      {/* SECTION 07: THE PHYSICS LAB WORK IB ACTUALLY ASSESSES */}
      <section className="py-8 sm:py-10 lg:py-12 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-7">
            <Eyebrow icon={<FlaskConical className="h-3.5 w-3.5" />} text="INTERNAL ASSESSMENT &amp; PRACTICAL" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1.5">
              The physics lab work <span className="text-[#0f4a9b]">IB actually assesses</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Physics Internal Assessments test rigorous experimental modeling and statistical error treatment. We cover all criteria with mark-scheme precision.
            </p>
          </div>

          {/* Micro-Animated Physics Laboratory Criteria Cards */}
          <InteractiveLabCriteriaCards />
        </div>
      </section>

      {/* SECTION 08: TABRAIZ KHAN - THE STATISTICIAN IN THE PHYSICS LAB (COMPACT EXECUTIVE VIEW) */}
      <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-white via-blue-50/20 to-slate-50/70 relative overflow-hidden text-left border-t border-slate-100">
        
        {/* Background Ambient Physics Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-blue-100/30 via-amber-50/30 to-blue-100/30 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-4 sm:mb-5 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1 tracking-tight">
              The statistician in the <span className="text-[#0f4a9b]">physics lab</span>
            </h2>
            
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto">
              Most IB Physics students lose Internal Assessment marks in statistical data treatment, not the experiment itself. We ensure your error bars, gradients, and evaluation survive examiner scrutiny.
            </p>
          </div>

          {/* ── COHESIVE EXECUTIVE FACULTY SHOWCASE CARD ── */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_12px_36px_-10px_rgba(15,74,155,0.1)] overflow-hidden max-w-4xl mx-auto">
            
            {/* Top Verification Ribbon */}
            <div className="bg-gradient-to-r from-[#0a1f3d] via-[#0f4a9b] to-[#0a2a6e] text-white px-4 sm:px-5 py-2 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[10.5px] font-bold tracking-wider">
              <span className="text-blue-100 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                SENIOR FACULTY SPOTLIGHT · DUBAI
              </span>
              <span className="text-[#fde68a] uppercase tracking-widest flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
                <CheckCircle2 className="w-3 h-3 text-[#fde68a]" />
                CAMBRIDGE CERTIFIED &amp; MSC STATISTICS
              </span>
            </div>

            <div className="p-4 sm:p-5 lg:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
                
                {/* Left Column: Tutor Profile + Key IA Competencies */}
                <div className="lg:col-span-7 space-y-3">
                  
                  {/* Tutor Header Info */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative w-14 h-18 sm:w-16 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border-2 border-[#C7A24A]/50 shrink-0 shadow-sm">
                      <img
                        src="/images/tutors/tabraiz-khan.jpg"
                        alt="Tabraiz Khan, IB Physics tutor at Ustaad, teaching students online across Dubai"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-serif font-extrabold text-[#0a1f3d] leading-tight">
                        Tabraiz Khan
                      </h3>
                      <p className="text-xs font-bold text-[#0f4a9b] mt-0.5">
                        Senior IB Physics &amp; Mathematics Specialist
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-blue-50 text-[#0f4a9b] border border-blue-200/80 text-[9.5px] font-extrabold uppercase">
                          9+ Yrs Exp
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-amber-50 text-[#9E7B24] border border-amber-200/80 text-[9.5px] font-extrabold uppercase">
                          MSc Statistics
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[9.5px] font-bold">
                          DP HL / SL / Math AA
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Why IA Statistics Mastery Matters (Pill Cards) */}
                  <div className="space-y-2 pt-0.5">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-2.5">
                      <div className="w-4.5 h-4.5 rounded-md bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[9.5px]">
                        ✓
                      </div>
                      <div>
                        <div className="text-[11.5px] font-extrabold text-[#0a1f3d]">Uncertainty &amp; Propagation Modeling</div>
                        <p className="text-[10.5px] text-slate-600 leading-snug">
                          Calculates compound fractional &amp; absolute uncertainties across non-linear equations.
                        </p>
                      </div>
                    </div>

                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-2.5">
                      <div className="w-4.5 h-4.5 rounded-md bg-[#C7A24A]/15 text-[#9E7B24] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[9.5px]">
                        ✓
                      </div>
                      <div>
                        <div className="text-[11.5px] font-extrabold text-[#0a1f3d]">Max / Min Gradient Analysis</div>
                        <p className="text-[10.5px] text-slate-600 leading-snug">
                          Plots steepness bounds that prove whether conclusions survive actual experimental scatter.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right Column: Error-Bar Graphic Box + Quote + Direct Action Buttons */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-2.5">
                  
                  {/* Clean Physics Regression Graphic */}
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br from-blue-50/60 via-slate-50/50 to-amber-50/40 border border-slate-200/80 shadow-inner">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[9.5px] font-mono font-bold text-[#0f4a9b] uppercase tracking-wider">
                        CRITERION C: DATA ANALYSIS
                      </span>
                      <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-extrabold">
                        R² = 0.994
                      </span>
                    </div>

                    <div className="w-full h-20 sm:h-22 bg-white rounded-xl border border-slate-200/90 p-1.5 shadow-2xs relative flex items-center justify-center">
                      <svg viewBox="0 0 160 85" className="w-full h-full">
                        {/* Axes */}
                        <line x1="20" y1="72" x2="150" y2="72" stroke="#94a3b8" strokeWidth="1.2" />
                        <line x1="20" y1="72" x2="20" y2="10" stroke="#94a3b8" strokeWidth="1.2" />
                        <text x="148" y="80" fontSize="7" fill="#64748b" textAnchor="end" fontFamily="monospace">x (m)</text>
                        <text x="12" y="14" fontSize="7" fill="#64748b" fontFamily="monospace">y (V)</text>

                        {/* Max / Min gradient dashed boundary lines */}
                        <line x1="25" y1="67" x2="140" y2="18" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="25" y1="61" x2="140" y2="28" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />

                        {/* Best Fit Line */}
                        <line x1="25" y1="64" x2="140" y2="23" stroke="#0f4a9b" strokeWidth="1.8" />

                        {/* Data Points with Error Bars */}
                        {[
                          { x: 38, y: 59, ey: 5 },
                          { x: 62, y: 50, ey: 6 },
                          { x: 88, y: 41, ey: 6.5 },
                          { x: 114, y: 31, ey: 7 },
                          { x: 136, y: 24, ey: 7.5 }
                        ].map((pt) => (
                          <g key={pt.x}>
                            <line x1={pt.x} y1={pt.y - pt.ey} x2={pt.x} y2={pt.y + pt.ey} stroke="#C7A24A" strokeWidth="1.4" />
                            <line x1={pt.x - 2.5} y1={pt.y - pt.ey} x2={pt.x + 2.5} y2={pt.y - pt.ey} stroke="#C7A24A" strokeWidth="1.4" />
                            <line x1={pt.x - 2.5} y1={pt.y + pt.ey} x2={pt.x + 2.5} y2={pt.y + pt.ey} stroke="#C7A24A" strokeWidth="1.4" />
                            <circle cx={pt.x} cy={pt.y} r="2" fill="#0a1f3d" />
                          </g>
                        ))}
                      </svg>
                    </div>

                    <p className="text-[10px] text-slate-600 italic leading-snug mt-1.5 text-center">
                      &ldquo;The experiment is the easy half. The error analysis is where Level 7s are made.&rdquo;
                    </p>
                    <div className="text-center pt-0.5">
                      <a
                        href="/blogs/what-does-gradient-mean-maths-physics"
                        className="inline-flex items-center text-[10.5px] font-bold text-[#0f4a9b] hover:text-[#0a1f3d] underline transition-colors"
                      >
                        <span>Read Teacher Guide: What Does Gradient Mean?</span>
                      </a>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>WhatsApp Us</span>
                    </a>
                    
                    <a
                      href="/tutors/tabraiz-khan"
                      className="w-full inline-flex items-center justify-center px-3 py-2 bg-[#0a1f3d] hover:bg-[#0f4a9b] text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
                    >
                      <span>View Faculty Profile</span>
                    </a>
                  </div>

                  <p className="text-[9.5px] text-slate-400 text-center leading-normal">
                    Free 30-min trial · Zero card required · 1-to-1 in Dubai &amp; Online
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09: HL OR SL: FOUR HONEST QUESTIONS (SCROLL-DRIVEN TOP-TO-BOTTOM MOTION) */}
      <PhysicsHlSlFourQuestionsScroll />

      {/* SECTION 10: THE PHYSICS JOURNEY WITH USTAAD (3D ANIMATED LIGHT THEME) */}
      <PhysicsCurriculumJourney3D />


      {/* SECTION 11: INSIDE AN IB PAPER 2 QUESTION */}
      <InteractivePaper2Whiteboard />

      {/* SECTION 12 (NEW): ARRIVING INTO IB MID-SCHOOL (MOVING INTO IB PARTWAY THROUGH) */}
      <CurriculumTransitionClipboard3D />

      {/* 3-STEP DIAGNOSTIC APPROACH */}
      <PhysicsDiagnosticApproach3D />

      {/* SECTION 13: WHAT PARENTS SAY */}
      <section className="py-8 sm:py-10 lg:py-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 50%, #1e5ba8 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                What Dubai Parents{' '}
                <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Say
                </span>
              </h2>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="h-3 w-3 fill-[#f0c96a] text-[#f0c96a]" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-[#f0c96a]">5.0 · Verified Reviews</span>
            </div>
          </div>
          <ParentsSlider />
        </div>
      </section>

      {/* SECTION 14: FAQS (What Dubai parents ask - 7 Questions) */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-24">
              <Eyebrow icon={<Atom className="h-3.5 w-3.5" />} text="Common Questions" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-2">
                What Dubai <span className="text-[#0f4a9b]">parents ask</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-2.5">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-sm rounded-full cursor-pointer"
                        style={{
                          width: 36,
                          height: 36,
                          minWidth: 36,
                          minHeight: 36,
                          background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                          color: isOpen ? '#fff' : '#0f4a9b',
                          transition: 'background 250ms ease, color 250ms ease',
                          border: 'none',
                          boxShadow: 'inset 0 0 0 2px #fff',
                        }}
                      >
                        ?
                      </button>

                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-2.5 text-left rounded-full border bg-white shadow-2xs cursor-pointer"
                        style={{
                          minHeight: '46px',
                          padding: '8px 14px',
                          borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)',
                        }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-xs sm:text-[13.5px] leading-snug">{f.q}</span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 28,
                            height: 28,
                            minWidth: 28,
                            minHeight: 28,
                            borderRadius: '50%',
                            background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                            color: isOpen ? '#fff' : '#0f4a9b',
                            transition: 'background 250ms ease, color 250ms ease, transform 250ms cubic-bezier(0.22,1,0.36,1)',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className="ml-[46px] overflow-hidden"
                        >
                          <div
                            className="flex items-start gap-2.5 rounded-xl border p-3.5 bg-[#f8fafc] text-left"
                            style={{ borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 3px 12px rgba(15,74,155,0.05)' }}
                          >
                            <p className="flex-1 text-slate-600 text-xs sm:text-[13px] leading-relaxed">{f.a}</p>
                            <span
                              className="flex-shrink-0 flex items-center justify-center rounded-full"
                              style={{ width: 28, height: 28, minWidth: 28, minHeight: 28, background: '#0f4a9b', color: '#fff' }}
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
          </div>
        </div>
      </section>

      {/* SECTION 15: FINAL CTA */}
      <FinalCTA
        title="Start Physics Support in Dubai Today"
        subtitle=""
        subtitleNode={null}
        button1Text="Book First Free Trial"
        button1Href={BOOKING}
        subtext1=""
        button2Text="Ask on WhatsApp"
        subtext2=""
      />

      {/* SECTION 16: RELATED GUIDES & PROGRAMMES */}
      <RelatedContent
        subjects={[
          {
            label: 'Maths Tutor Dubai',
            href: '/maths-tutor-dubai',
            note: 'Coordinate calculus, vectors, and mechanics support in Dubai.'
          },
          {
            label: 'Chemistry Tutor Dubai',
            href: '/chemistry-tutor-dubai',
            note: 'One-to-one IGCSE, GCSE, A-Level & IB chemistry tutoring in Dubai.'
          },
          {
            label: 'Physics Subject Hub',
            href: '/physics',
            note: 'Comprehensive overview of our physics faculty and curriculum tracks.'
          },
        ]}
        curricula={[
          {
            label: 'IB DP Physics (SL & HL)',
            href: '/ib-curriculum',
            note: 'Core syllabus preparation, HL theory & internal assessment coaching.'
          },
          {
            label: 'MYP Sciences | IB Middle Years',
            href: '/myp',
            note: 'Years 7–10 inquiry, experimental design & Criterion C analysis.'
          },
          {
            label: 'A-Level Physics',
            href: '/a-level',
            note: 'Cambridge & Edexcel mechanics, fields & exam preparation.'
          },
        ]}
      />
    </Layout>
  );
}
