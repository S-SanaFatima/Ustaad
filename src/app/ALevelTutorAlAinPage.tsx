import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award, BookOpen, Clock, GraduationCap,
  MessageCircle, Target, Calculator,
  Atom, FlaskConical, Dna, LineChart,
  CheckCircle2, ChevronDown, Check,
  Sparkles, Compass, Briefcase, Scale, RotateCw,
  Layers, PenTool, Star, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Layout, WhatsAppIcon, StatsBar } from './shared';
import SEOHead from './shared/SEOHead';
import {
  cityLocalBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema
} from './shared/schemas';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20an%20A-Level%20tutor%20in%20Al%20Ain.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

/* ── HERO BACKGROUND (Bespoke Animated Al Ain Sixth-Form Horizon & Orbital Specification Canvas) ── */
const AlAinAlevelHeroBackground = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
    {/* Soft Breathing Ambient Glow Orbs — GPU hardware-accelerated radial gradients */}
    <div
      className="absolute -top-24 left-1/2 -translate-x-1/2 w-[580px] h-[580px] rounded-full blur-[90px] pointer-events-none opacity-40 will-change-transform"
      style={{
        background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, rgba(15,74,155,0) 70%)',
        transform: 'translate3d(-50%, 0, 0)',
      }}
    />
    <div
      className="absolute top-8 -right-12 w-[420px] h-[420px] rounded-full blur-[80px] pointer-events-none opacity-20 will-change-transform"
      style={{
        background: 'radial-gradient(circle, rgba(240,201,106,0.3) 0%, rgba(240,201,106,0) 70%)',
        transform: 'translate3d(0, 0, 0)',
      }}
    />
    <div
      className="absolute bottom-6 -left-12 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-20 will-change-transform"
      style={{
        background: 'radial-gradient(circle, rgba(34,184,205,0.3) 0%, rgba(34,184,205,0) 70%)',
        transform: 'translate3d(0, 0, 0)',
      }}
    />
    <div
      className="absolute top-1/3 left-1/4 w-[320px] h-[320px] rounded-full blur-[75px] pointer-events-none opacity-15 will-change-transform"
      style={{
        background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0) 70%)',
        transform: 'translate3d(0, 0, 0)',
      }}
    />

    {/* Desktop Animated SVG Canvas */}
    <svg
      viewBox="0 0 1440 580"
      preserveAspectRatio="xMidYMid slice"
      className="hidden md:block absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="alAinArcGold" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22b8cd" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f0c96a" stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id="alAinCurveArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.14" />
          <stop offset="55%" stopColor="#22b8cd" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="alAinHorizonFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.12" />
          <stop offset="60%" stopColor="#0f4a9b" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="alAinRidgeCyan" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22b8cd" stopOpacity="0" />
          <stop offset="30%" stopColor="#22b8cd" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#f0c96a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f0c96a" stopOpacity="0" />
        </linearGradient>

        <filter id="alAinSoftGlow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <pattern id="alain-architectural-grid" width="52" height="52" patternUnits="userSpaceOnUse">
          <path d="M 52 0 L 0 0 0 52" fill="none" stroke="rgba(255,255,255,0.028)" strokeWidth="0.6" />
          <circle cx="52" cy="52" r="0.8" fill="rgba(240,201,106,0.14)" />
        </pattern>
      </defs>

      {/* Architectural Coordinate Grid */}
      <rect width="100%" height="100%" fill="url(#alain-architectural-grid)" />

      {/* Top Academic Telemetry & Meridian Guide */}
      <g opacity="0.42">
        <line x1="60" y1="36" x2="1380" y2="36" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" strokeDasharray="3 6" />
        <text x="68" y="28" fill="rgba(148,163,184,0.45)" fontSize="8.5" fontFamily="monospace" letterSpacing="1.6">
          AL AIN · 24.2075° N, 55.7447° E · SIXTH FORM (YEAR 12 AS &amp; YEAR 13 A2)
        </text>
        <text x="1372" y="28" textAnchor="end" fill="rgba(240,201,106,0.45)" fontSize="8.5" fontFamily="monospace" letterSpacing="1.6">
          CAIE 9709 / 9702 / 9701 · EDEXCEL IAL · OXFORDAQA
        </text>
      </g>

      {/* ── LEFT FLANK: AS-to-A2 Synoptic Elevation & Calculus Tangent Bridge (x = 45..330) ── */}
      <g opacity="0.58">
        {/* Coordinate Axes for AS -> A2 Elevation */}
        <line x1="58" y1="420" x2="325" y2="420" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="58" y1="115" x2="58" y2="420" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

        {/* Horizontal Grade Threshold Guides */}
        <line x1="58" y1="340" x2="310" y2="340" stroke="rgba(255,255,255,0.05)" strokeWidth="0.75" strokeDasharray="3 5" />
        <line x1="58" y1="245" x2="310" y2="245" stroke="rgba(34,184,205,0.12)" strokeWidth="0.75" strokeDasharray="3 5" />
        <line x1="58" y1="145" x2="310" y2="145" stroke="rgba(240,201,106,0.18)" strokeWidth="0.75" strokeDasharray="3 5" />

        {/* Shaded Integral Area Under the Curve */}
        <path
          d="M 58 385 C 125 375, 165 315, 205 245 C 245 175, 275 150, 310 135 L 310 420 L 58 420 Z"
          fill="url(#alAinCurveArea)"
        />

        {/* Secondary Baseline Curve (Unguided Trajectory) */}
        <path
          d="M 58 385 C 135 380, 210 355, 310 315"
          fill="none"
          stroke="rgba(148,163,184,0.22)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />

        {/* Primary AS -> A2 Mastery Curve */}
        <path
          d="M 58 385 C 125 375, 165 315, 205 245 C 245 175, 275 150, 310 135"
          fill="none"
          stroke="url(#alAinArcGold)"
          strokeWidth="2.4"
          filter="url(#alAinSoftGlow)"
        />

        {/* Calculus Tangent Line at Inflection Point */}
        <line
          x1="145"
          y1="332"
          x2="255"
          y2="162"
          stroke="rgba(34,184,205,0.38)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* Animated Pulses Travelling Along the AS -> A2 Curve */}
        <motion.circle
          r="3.5"
          fill="#f0c96a"
          filter="url(#alAinSoftGlow)"
          animate={{
            cx: [58, 135, 205, 265, 310],
            cy: [385, 352, 245, 162, 135],
            opacity: [0.2, 0.95, 1, 0.95, 0.2]
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          r="2.5"
          fill="#22b8cd"
          animate={{
            cx: [310, 265, 205, 135, 58],
            cy: [135, 162, 245, 352, 385],
            opacity: [0.15, 0.7, 0.85, 0.7, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />

        {/* Milestone Node 1: AS Foundation */}
        <g transform="translate(95, 374)">
          <circle cx="0" cy="0" r="4" fill="#22b8cd" />
          <circle cx="0" cy="0" r="8" fill="none" stroke="#22b8cd" strokeWidth="0.8" opacity="0.45" />
          <text x="12" y="4" fill="rgba(226,232,240,0.55)" fontSize="9.5" fontFamily="monospace">
            Year 12 · AS Core
          </text>
        </g>

        {/* Milestone Node 2: Synoptic Step-Up */}
        <g transform="translate(205, 245)">
          <circle cx="0" cy="0" r="4.5" fill="#38bdf8" />
          <motion.circle
            cx="0"
            cy="0"
            r="10"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1"
            animate={{ scale: [1, 1.45, 1], opacity: [0.55, 0.1, 0.55] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <rect x="-112" y="-26" width="102" height="20" rx="4" fill="rgba(10,25,54,0.75)" stroke="rgba(56,189,248,0.28)" strokeWidth="0.7" />
          <text x="-61" y="-13" textAnchor="middle" fill="rgba(186,230,253,0.8)" fontSize="8.5" fontFamily="monospace">
            dy/dx · Paper 4 &amp; 5
          </text>
        </g>

        {/* Milestone Node 3: Year 13 A* / A Target */}
        <g transform="translate(310, 135)">
          <circle cx="0" cy="0" r="5" fill="#f0c96a" filter="url(#alAinSoftGlow)" />
          <motion.circle
            cx="0"
            cy="0"
            r="12"
            fill="none"
            stroke="#f0c96a"
            strokeWidth="1.1"
            animate={{ scale: [1, 1.5, 1], opacity: [0.65, 0.12, 0.65] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <rect x="-125" y="-32" width="118" height="22" rx="5" fill="rgba(10,25,54,0.82)" stroke="rgba(240,201,106,0.4)" strokeWidth="0.8" />
          <text x="-66" y="-18" textAnchor="middle" fill="#f0c96a" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            Year 13 · Grade A* / A
          </text>
        </g>

        {/* Subtle Mathematical & Scientific Formula Watermarks on Left Flank */}
        <text x="68" y="132" fill="rgba(240,201,106,0.32)" fontSize="10.5" fontFamily="monospace">
          ∫ f(x)dx = F(b) − F(a)
        </text>
        <text x="68" y="442" fill="rgba(148,163,184,0.38)" fontSize="8.5" fontFamily="monospace" letterSpacing="1">
          MODULAR (IAL) &amp; LINEAR (CAIE) PROGRESSION
        </text>
      </g>

      {/* ── RIGHT FLANK: Sixth-Form Concentric Astrolabe & Specification Dial (cx = 1255, cy = 265) ── */}
      <g opacity="0.58">
        {/* Outer Static Degree Scale Ring */}
        <circle
          cx="1255"
          cy="265"
          r="132"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
        <circle
          cx="1255"
          cy="265"
          r="142"
          fill="none"
          stroke="rgba(240,201,106,0.14)"
          strokeWidth="0.7"
          strokeDasharray="2 8"
        />

        {/* Slowly Rotating Outer Orbital Ring */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '1255px 265px' }}
        >
          <circle
            cx="1255"
            cy="265"
            r="112"
            fill="none"
            stroke="rgba(240,201,106,0.26)"
            strokeWidth="1.1"
            strokeDasharray="10 6 2 6"
          />
          <circle cx="1255" cy="153" r="3.5" fill="#f0c96a" filter="url(#alAinSoftGlow)" />
          <circle cx="1367" cy="265" r="3" fill="#22b8cd" />
          <circle cx="1255" cy="377" r="3" fill="#f0c96a" />
          <circle cx="1143" cy="265" r="3" fill="#38bdf8" />
        </motion.g>

        {/* Counter-Rotating Inner Meridian Ring & Geometric Compass Star */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '1255px 265px' }}
        >
          <circle
            cx="1255"
            cy="265"
            r="78"
            fill="none"
            stroke="rgba(34,184,205,0.28)"
            strokeWidth="1"
            strokeDasharray="6 4"
          />
          {/* 8-Pointed Oasis Star / Compass Geometry */}
          <rect
            x="1205"
            y="215"
            width="100"
            height="100"
            rx="6"
            fill="none"
            stroke="rgba(240,201,106,0.18)"
            strokeWidth="0.85"
          />
          <rect
            x="1205"
            y="215"
            width="100"
            height="100"
            rx="6"
            fill="none"
            stroke="rgba(34,184,205,0.18)"
            strokeWidth="0.85"
            transform="rotate(45 1255 265)"
          />
        </motion.g>

        {/* Crosshair Axis Lines */}
        <line x1="1110" y1="265" x2="1400" y2="265" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />
        <line x1="1255" y1="120" x2="1255" y2="410" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />

        {/* Central Hub Badge */}
        <circle cx="1255" cy="265" r="34" fill="rgba(8,22,48,0.88)" stroke="rgba(240,201,106,0.45)" strokeWidth="1.2" />
        <text x="1255" y="261" textAnchor="middle" fill="#f0c96a" fontSize="10" fontFamily="monospace" fontWeight="bold">
          1-TO-1
        </text>
        <text x="1255" y="274" textAnchor="middle" fill="rgba(186,230,253,0.8)" fontSize="8" fontFamily="monospace">
          AL AIN
        </text>

        {/* Floating Specification Badges Around the Astrolabe */}
        <motion.g
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="1185" y="102" width="140" height="24" rx="6" fill="rgba(10,25,54,0.82)" stroke="rgba(240,201,106,0.38)" strokeWidth="0.8" />
          <text x="1255" y="118" textAnchor="middle" fill="#f0c96a" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            CAIE 9709 · 9702 · 9701
          </text>
        </motion.g>

        <motion.g
          animate={{ y: [3, -3, 3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <rect x="1180" y="405" width="150" height="24" rx="6" fill="rgba(10,25,54,0.82)" stroke="rgba(34,184,205,0.38)" strokeWidth="0.8" />
          <text x="1255" y="421" textAnchor="middle" fill="#67e8f9" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            Edexcel IAL · Modular
          </text>
        </motion.g>

        <g transform="translate(1092, 200)">
          <rect x="0" y="0" width="68" height="20" rx="4" fill="rgba(10,25,54,0.75)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.7" />
          <text x="34" y="13" textAnchor="middle" fill="rgba(226,232,240,0.75)" fontSize="8.5" fontFamily="monospace">
            P1–P5 · S1 · M1
          </text>
        </g>

        <g transform="translate(1348, 315)">
          <rect x="0" y="0" width="66" height="20" rx="4" fill="rgba(10,25,54,0.75)" stroke="rgba(240,201,106,0.24)" strokeWidth="0.7" />
          <text x="33" y="13" textAnchor="middle" fill="rgba(240,201,106,0.8)" fontSize="8.5" fontFamily="monospace">
            UCAS · UAEU
          </text>
        </g>
      </g>

      {/* ── BOTTOM HORIZON: Multi-Layered Jebel Hafeet & Garden City Contour Waves ── */}
      <g opacity="0.48" transform="translate(0, 425)">
        {/* Distant Mountain & Dune Ridge */}
        <path
          d="M 0 120 Q 190 68 390 102 T 780 86 T 1140 62 T 1440 105 L 1440 160 L 0 160 Z"
          fill="url(#alAinHorizonFill)"
        />
        <path
          d="M 0 120 Q 190 68 390 102 T 780 86 T 1140 62 T 1440 105"
          fill="none"
          stroke="url(#alAinRidgeCyan)"
          strokeWidth="1.3"
        />

        {/* Secondary Topographic Contour Line */}
        <path
          d="M 0 136 Q 240 94 510 122 T 980 102 T 1440 126"
          fill="none"
          stroke="rgba(240,201,106,0.2)"
          strokeWidth="0.9"
          strokeDasharray="5 5"
        />
      </g>
    </svg>

    {/* Mobile Clean Ambient Glow & Blueprint Grid Canvas (Refined for Mobile Clarity) */}
    <div className="md:hidden absolute inset-0 w-full h-full">
      {/* Soft Ambient Radiance Orbs — GPU hardware-accelerated radial gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full blur-[55px] pointer-events-none opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(15,74,155,0.45) 0%, rgba(15,74,155,0) 70%)',
          transform: 'translate3d(-50%, 0, 0)',
        }}
      />
      <div
        className="absolute top-1/3 -right-10 w-[200px] h-[200px] rounded-full blur-[45px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(240,201,106,0.3) 0%, rgba(240,201,106,0) 70%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      <div
        className="absolute bottom-10 -left-10 w-[200px] h-[200px] rounded-full blur-[45px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(34,184,205,0.3) 0%, rgba(34,184,205,0) 70%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      <svg
        viewBox="0 0 360 540"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-65 pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="alain-grid-mob" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.6" />
            <circle cx="36" cy="36" r="0.6" fill="rgba(240,201,106,0.14)" />
          </pattern>
          <linearGradient id="alAinMobHorizon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#0f4a9b" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Architectural Grid */}
        <rect width="100%" height="100%" fill="url(#alain-grid-mob)" />

        {/* Mobile Top Telemetry Bar */}
        <g opacity="0.45">
          <text x="16" y="24" fill="rgba(148,163,184,0.6)" fontSize="7" fontFamily="monospace" letterSpacing="1.1">
            AL AIN · 24.2° N · AS &amp; A2
          </text>
          <text x="344" y="24" textAnchor="end" fill="rgba(240,201,106,0.6)" fontSize="7" fontFamily="monospace" letterSpacing="1">
            CAIE · EDEXCEL IAL
          </text>
          <line x1="16" y1="30" x2="344" y2="30" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" strokeDasharray="3 4" />
        </g>

        {/* Minimal Corner Astrolabe Accent (Static, Clean, Non-intrusive) */}
        <g opacity="0.35" transform="translate(320, 85)">
          <circle cx="0" cy="0" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="32" fill="none" stroke="rgba(240,201,106,0.2)" strokeWidth="0.8" strokeDasharray="6 4" />
          <circle cx="0" cy="0" r="14" fill="rgba(8,22,48,0.8)" stroke="rgba(240,201,106,0.3)" strokeWidth="0.8" />
          <text x="0" y="3" textAnchor="middle" fill="#f0c96a" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
            A* / A
          </text>
        </g>

        {/* Elegant Subtle Watermark Formulas Along Margins */}
        <text x="16" y="100" fill="rgba(240,201,106,0.22)" fontSize="7" fontFamily="monospace">
          ∫ f(x)dx · dy/dx
        </text>
        <text x="16" y="440" fill="rgba(56,189,248,0.22)" fontSize="7" fontFamily="monospace">
          9709 · 9702 · 9701
        </text>
        <text x="344" y="440" textAnchor="end" fill="rgba(240,201,106,0.22)" fontSize="7" fontFamily="monospace">
          UCAS · UAEU
        </text>

        {/* Bottom Jebel Hafeet Horizon Contour Wave */}
        <g opacity="0.45" transform="translate(0, 460)">
          <path
            d="M 0 50 Q 80 25 160 40 T 300 28 T 360 42 L 360 80 L 0 80 Z"
            fill="url(#alAinMobHorizon)"
          />
          <path
            d="M 0 50 Q 80 25 160 40 T 300 28 T 360 42"
            fill="none"
            stroke="rgba(34,184,205,0.3)"
            strokeWidth="1"
          />
          <path
            d="M 0 60 Q 90 40 180 52 T 360 48"
            fill="none"
            stroke="rgba(240,201,106,0.2)"
            strokeWidth="0.75"
            strokeDasharray="4 4"
          />
        </g>
      </svg>
    </div>
  </div>
);

/* ── DATA: CORE SUBJECTS ── */
interface SubjectCardData {
  id: string;
  name: string;
  syllabus: string;
  desc: string;
  icon: typeof Calculator;
  color: string;
  tracks: ('medicine' | 'engineering' | 'business')[];
}

const A_LEVEL_SUBJECTS: SubjectCardData[] = [
  {
    id: 'maths',
    name: 'A-Level Maths',
    syllabus: 'Pure, Mechanics, Statistics',
    desc: 'Mastery of calculus, algebra, coordinate geometry, probability distributions, hypothesis testing, and Newton’s laws for CAIE 9709 and Edexcel IAL.',
    icon: Calculator,
    color: 'from-blue-600 to-indigo-600',
    tracks: ['medicine', 'engineering', 'business']
  },
  {
    id: 'further-maths',
    name: 'Further Maths',
    syllabus: 'For engineering and maths courses',
    desc: 'Advanced modules in complex numbers, matrix algebra, differential equations, hyperbolic functions, and pure mechanics (M2/M3) for competitive STEM degrees.',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-600',
    tracks: ['engineering']
  },
  {
    id: 'physics',
    name: 'A-Level Physics',
    syllabus: 'Fields, waves, practical skills',
    desc: 'Rigorous exploration of electric and gravitational fields, quantum phenomena, thermal physics, nuclear decay, and experimental data handling for Paper 3 and 5.',
    icon: Atom,
    color: 'from-cyan-500 to-blue-600',
    tracks: ['engineering']
  },
  {
    id: 'chemistry',
    name: 'A-Level Chemistry',
    syllabus: 'Organic, physical, calculations',
    desc: 'Comprehensive instruction across equilibria (Kc, Kp), thermodynamics, Born-Haber cycles, organic synthesis mechanisms, and spectroscopic analysis.',
    icon: FlaskConical,
    color: 'from-emerald-500 to-teal-600',
    tracks: ['medicine', 'engineering']
  },
  {
    id: 'biology',
    name: 'A-Level Biology',
    syllabus: 'Essays, data and practical skills',
    desc: 'In-depth breakdown of biochemistry, gene expression, homeostatic control, statistical analysis (t-test, chi-squared), and extended-response technique.',
    icon: Dna,
    color: 'from-rose-500 to-pink-600',
    tracks: ['medicine']
  },
  {
    id: 'economics',
    name: 'A-Level Economics',
    syllabus: 'Diagrams, evaluation and data response',
    desc: 'Precision diagram construction, micro market failure analysis, macroeconomic monetary/fiscal policies, international trade, and extended evaluation chains.',
    icon: LineChart,
    color: 'from-purple-500 to-indigo-600',
    tracks: ['business']
  }
];

/* ── DATA: AL AIN SCHOOLS ── */
const AL_AIN_SCHOOLS = [
  {
    name: 'Brighton College Al Ain',
    alt: 'Brighton College Al Ain British curriculum school logo',
    logo: '/images/schools/al-ain/brighton-college-al-ain.webp'
  },
  {
    name: 'Al Ain British Academy',
    alt: 'Al Ain British Academy Aldar Academies logo',
    logo: '/images/schools/al-ain/al-ain-british-academy-crest.webp'
  },
  {
    name: 'Al Ain English Speaking School',
    alt: 'Al Ain English Speaking School AAESS logo',
    logo: '/images/schools/al-ain/aaess.webp'
  },
  {
    name: 'Belvedere International School',
    alt: 'Belvedere International School Al Ain logo',
    logo: '/images/schools/al-ain/belvedere-international.webp'
  },
  {
    name: 'Global English School, Al Muwaiji',
    alt: 'Global English School Al Muwaiji Al Ain Cambridge AS and A Level logo',
    logo: '/images/schools/al-ain/global-english-school.webp'
  }
];

/* ── DATA: FAQS (5 questions matched to Round 2 revisions) ── */
interface AlAinFaqItem {
  q: string;
  a: string;
  renderAnswer?: React.ReactNode;
}

const AL_AIN_A_LEVEL_FAQS: AlAinFaqItem[] = [
  {
    q: "How much does an A-Level tutor cost in Al Ain?",
    a: "Your fee depends on the subject and how many lessons a week your child needs, and we share it with you before any paid lesson is booked. Every first 1-hour lesson includes a free 15-minute orientation."
  },
  {
    q: "Our school offers both A-Levels and the IB Diploma. Do you tutor both?",
    a: "Yes. Ustaad tutors both routes, so whichever one your child chooses, they are matched with a specialist for that programme. For the Diploma, see our IB tutors in Abu Dhabi.",
    renderAnswer: (
      <>
        Yes. Ustaad tutors both routes, so whichever one your child chooses, they are matched with a specialist for that programme. For the Diploma, see our{' '}
        <a href="/ib-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a1f3d]">
          IB tutors in Abu Dhabi
        </a>
        .
      </>
    )
  },
  {
    q: "Can my child study an A-Level their school doesn’t teach, such as Further Maths?",
    a: "A tutor can teach the full course online. The exam entry still has to go through a school or registered exam centre, so ask your child’s school whether it can enter them before you start."
  },
  {
    q: "Can a tutor help with Edexcel IAL units sat in January or October?",
    a: "Yes. Edexcel International A Level units can be sat in January, June or October, so many students take some units early. The tutor plans revision around the units your child is entered for."
  },
  {
    q: "How do lessons fit around the school week in Al Ain?",
    a: "Weekday lessons start once school finishes, and the shorter school day on Friday leaves room for an earlier slot. Weekend lessons are available too, and lessons can be moved around prayer times."
  }
];

/* ── DATA: VERIFIED PARENT REVIEWS (AL AIN A-LEVEL) ── */
const AL_AIN_A_LEVEL_REVIEWS = [
  {
    name: 'Mariam Al Dhaheri, Al Ain',
    initials: 'MA',
    subject: 'Cambridge International A-Level Maths & Physics · Verified Google Review',
    stars: 5,
    text: 'My son attends Brighton College Al Ain and found the jump into Year 12 Maths and Physics quite steep. His Ustaad tutor structured weekly past paper practice and went through the exact mark schemes line by line. His confidence improved remarkably, and he scored an A in his recent mock.',
  },
  {
    name: 'Dr. Tariq M., Falaj Hazzaa, Al Ain',
    initials: 'TM',
    subject: 'Edexcel A-Level Chemistry & Biology · Verified Google Review',
    stars: 5,
    text: 'Living in Al Ain, finding high-calibre A-Level science tutors locally was always a challenge before Ustaad. The online sessions saved hours of commuting, and the tutor knew Edexcel International A-Level specifications inside out. Highly recommended for sixth formers.',
  },
  {
    name: 'Sarah Jenkins, Zakher, Al Ain',
    initials: 'SJ',
    subject: 'Cambridge A-Level Further Maths · Verified Google Review',
    stars: 5,
    text: "Our daughter was taking Further Mathematics which required specialised support her school couldn't offer 1-to-1. Ustaad paired her with a tutor who was exceptional with complex calculus and mechanics. She went into her Year 13 papers fully prepared.",
  },
];

function AlAinAlevelReviewsScroller() {
  const n = AL_AIN_A_LEVEL_REVIEWS.length;
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (n <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % n), 6000);
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
      aria-label={`Show review by ${AL_AIN_A_LEVEL_REVIEWS[idx].name}`}
    >
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs relative overflow-hidden h-full">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]" />
        <div className="flex gap-0.5 mb-2">
          {[1, 2, 3, 4, 5].map((j) => (
            <Star key={j} className="h-3 w-3 fill-[#C7A24A] text-[#C7A24A]" />
          ))}
        </div>
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
          &ldquo;{AL_AIN_A_LEVEL_REVIEWS[idx].text}&rdquo;
        </p>
        <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-100">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-[10px] notranslate shrink-0" translate="no">
            {AL_AIN_A_LEVEL_REVIEWS[idx].initials}
          </div>
          <span className="font-bold text-[#0a1f3d] text-xs notranslate truncate" translate="no">
            {AL_AIN_A_LEVEL_REVIEWS[idx].name.split(',')[0]}
          </span>
        </div>
      </div>
    </button>
  );

  const r = AL_AIN_A_LEVEL_REVIEWS[active];

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
              className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-[0_8px_32px_rgba(15,74,155,0.08)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Star key={j} className="h-4 w-4 fill-[#C7A24A] text-[#C7A24A]" />
                  ))}
                </div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
                  Google · Verified Parent
                </span>
              </div>
              <p className="text-[#374151] text-[15px] sm:text-base leading-relaxed mb-5 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_8px_rgba(15,74,155,0.28)] notranslate shrink-0" translate="no">
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold text-[#0a1f3d] text-[15px] notranslate truncate" translate="no">
                    {r.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5 truncate">
                    {r.subject.replace('Verified Google review · ', '')}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <SideCard idx={nextIdx} />
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-3 mt-5">
        <button
          type="button"
          onClick={() => go(active - 1)}
          aria-label="Previous review"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white hover:border-[#0f4a9b] transition-all cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {AL_AIN_A_LEVEL_REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === active ? 'w-6 bg-[#0f4a9b]' : 'w-1.5 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label="Next review"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white hover:border-[#0f4a9b] transition-all cursor-pointer"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ── DATA: RELATED PATHWAYS (8 interactive micro-cards) ── */
const RELATED_PATHWAYS = [
  {
    title: 'A-Level Maths Tutor',
    sub: 'Pure, Mechanics & Statistics',
    href: '/maths-tutor-abu-dhabi',
    icon: Calculator,
    bg: 'bg-blue-50 border border-blue-100',
    color: 'text-[#0f4a9b]',
    tag: 'CAIE & Edexcel'
  },
  {
    title: 'A-Level Physics Tutor',
    sub: 'Fields, Waves & Practical',
    href: '/physics-tutor-abu-dhabi',
    icon: Atom,
    bg: 'bg-cyan-50 border border-cyan-100',
    color: 'text-cyan-700',
    tag: 'Paper 4 & 5'
  },
  {
    title: 'A-Level Chemistry Tutor',
    sub: 'Organic & Physical Prep',
    href: '/chemistry-tutor-abu-dhabi',
    icon: FlaskConical,
    bg: 'bg-emerald-50 border border-emerald-100',
    color: 'text-emerald-700',
    tag: 'Mechanisms'
  },
  {
    title: 'A-Level Biology Tutor',
    sub: 'Genetics, Data & Essays',
    href: '/biology-tutor-abu-dhabi',
    icon: Dna,
    bg: 'bg-rose-50 border border-rose-100',
    color: 'text-rose-700',
    tag: 'Extended Response'
  },
  {
    title: 'A-Level Tutors Dubai',
    sub: 'All Subjects, Sixth Form',
    href: '/a-level-tutor-dubai',
    icon: GraduationCap,
    bg: 'bg-amber-50 border border-amber-100',
    color: 'text-amber-800',
    tag: 'Dubai Hub'
  },
  {
    title: 'A-Level Tutors Abu Dhabi',
    sub: 'Sixth-Form Mentorship',
    href: '/a-level-tutor-abu-dhabi',
    icon: Award,
    bg: 'bg-indigo-50 border border-indigo-100',
    color: 'text-indigo-700',
    tag: 'Capital Specialists'
  },
  {
    title: 'IGCSE Tutor Abu Dhabi',
    sub: 'Year 10 to 11 Foundation',
    href: '/igcse-tutor-abu-dhabi',
    icon: BookOpen,
    bg: 'bg-sky-50 border border-sky-100',
    color: 'text-sky-700',
    tag: 'Pre-A-Level'
  },
  {
    title: 'IB Tutor Abu Dhabi',
    sub: 'DP SL & HL Higher Level',
    href: '/ib-tutor-abu-dhabi',
    icon: Compass,
    bg: 'bg-purple-50 border border-purple-100',
    color: 'text-purple-700',
    tag: 'IB Diploma'
  }
];

/* ── DATA: EXAM BOARDS (Interactive Animated Nodes) ── */
const EXAM_BOARDS = [
  {
    id: 'cambridge' as const,
    name: 'Cambridge International (CAIE)',
    shortName: 'Cambridge Linear',
    specType: 'CAIE 9709, 9702, 9701, 9708',
    icon: Award,
    accent: '#0f4a9b',
    glowColor: 'rgba(15, 74, 155, 0.15)',
    iconBg: 'bg-blue-50 text-[#0f4a9b] border-blue-200',
    activeBadge: 'bg-blue-50 text-[#0f4a9b] border-blue-200',
    title: 'Paper structure, command words, practical papers',
    desc: 'Cambridge specifications (such as 9709 Maths, 9702 Physics, 9701 Chemistry, and 9708 Economics) require meticulous command word decoding. We train students to navigate Paper 1 multiple-choice speed, Paper 2 structured theory, Paper 4 extended problems, and Paper 5 experimental design.',
    codes: ['CAIE 9709 Maths', 'CAIE 9702 Physics', 'CAIE 9701 Chemistry', 'CAIE 9708 Economics'],
    checks: [
      'Mastery of CAIE Paper 4 extended response questions',
      'Paper 5 planning, analysis and evaluation techniques',
      'Examiner mark scheme phrasing calibration',
      'Linear syllabus revision bridging AS and A2 content'
    ],
    mobileKey: 'Linear 9709, 9702, 9701 Exam Focus',
    mobilePoints: [
      'Paper 4 structured theory and extended problems',
      'Paper 5 practical planning and data analysis',
      'Official mark scheme phrasing and command words'
    ]
  },
  {
    id: 'edexcel' as const,
    name: 'Pearson Edexcel International A Level',
    shortName: 'Edexcel Modular',
    specType: 'Edexcel IAL WMA11-14, WPH11-16, WCH11-16, WEC11-14',
    icon: GraduationCap,
    accent: '#92400e',
    glowColor: 'rgba(199, 162, 74, 0.18)',
    iconBg: 'bg-amber-50 text-[#92400e] border-amber-200',
    activeBadge: 'bg-amber-50 text-[#92400e] border-amber-200',
    title: 'Core papers, mathematical and practical skills',
    desc: 'Edexcel International A Levels are sat unit by unit (for example WMA11 for Pure Mathematics 1), with exam series in January, June and October. We plan revision around the units your child is entered for and drill the practical-skills questions on paper.',
    codes: ['IAL Maths', 'IAL Physics', 'IAL Chemistry', 'IAL Economics'],
    checks: [
      'Modular unit retake prep (P1, P2, P3, P4, S1, M1)',
      'Multi-step method marks optimization for pure and applied papers',
      'Official Edexcel Pearson rubric alignment'
    ],
    mobileKey: 'Edexcel IAL WMA11-14, WPH11-16, WCH11-16, WEC11-14',
    mobilePoints: [
      'Modular unit series in January, June and October',
      'Multi-step method marks optimization for pure and applied units',
      'Practical-skills paper drilling and Pearson rubric alignment'
    ]
  }
];

export default function ALevelTutorAlAinPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedTrack, setSelectedTrack] = useState<'medicine' | 'engineering' | 'business'>('medicine');
  const [selectedBoard, setSelectedBoard] = useState<'cambridge' | 'edexcel'>('cambridge');

  // Build LocalBusiness schema matching Ustaad's registered Abu Dhabi address, removing geo & priceRange
  const rawCitySchema = cityLocalBusinessSchema({
    city: 'Al Ain',
    url: '/a-level-tutor-al-ain',
    name: 'Ustaad: A-Level Tutor Al Ain',
    description: 'Online 1-to-1 A-Level lessons for Year 12 and 13 students in Al Ain, matched to Cambridge, Edexcel or OxfordAQA, with no drive to Abu Dhabi.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abu Dhabi',
      addressRegion: 'Abu Dhabi',
      addressCountry: 'AE'
    }
  });
  const { priceRange: _unusedPrice, geo: _unusedGeo, ...citySchemaRest } = rawCitySchema as Record<string, any>;
  const alAinLocalBusinessSchema = {
    ...citySchemaRest,
    paymentAccepted: 'Credit Card, Bank Transfer'
  };

  const alAinCourseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Ustaad: A-Level Tutor Al Ain',
    description: 'Online 1-to-1 A-Level tutoring for students in Al Ain.',
    provider: {
      '@type': 'EducationalOrganization',
      '@id': 'https://ustaad.ae/#organization',
      name: 'Ustaad',
      url: 'https://ustaad.ae'
    }
  };

  return (
    <Layout>
      <SEOHead
        title="A-Level Tutor Al Ain | Online Year 12 & 13 Support | Ustaad"
        description="Online 1-to-1 A-Level lessons for Year 12 and 13 students in Al Ain, matched to Cambridge, Edexcel or OxfordAQA, with no drive to Abu Dhabi."
        canonical="/a-level-tutor-al-ain"
        robots="index, follow"
        ogImage="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp"
        placename="Al Ain, Abu Dhabi, UAE"
        schema={[
          alAinLocalBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'A-Level', url: '/a-level' },
            { name: 'A-Level Tutor Al Ain', url: '/a-level-tutor-al-ain' }
          ]),
          serviceSchema(
            'A-Level Tutor Al Ain',
            'Online 1-to-1 A-Level lessons for Year 12 and 13 students in Al Ain, matched to Cambridge, Edexcel or OxfordAQA, with no drive to Abu Dhabi.',
            '/a-level-tutor-al-ain'
          ),
          alAinCourseSchema,
          faqSchema(AL_AIN_A_LEVEL_FAQS.map(({ q, a }) => ({ q, a })))
        ]}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative -mt-10 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center pt-14 pb-12 sm:pt-16 sm:pb-14 md:pt-16 md:pb-14">
        <AlAinAlevelHeroBackground />
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-blue-100/90 bg-white/[0.08] border border-white/15 mb-3 shadow-sm">
            AL AIN | CAMBRIDGE &amp; EDEXCEL | AS &amp; A2
          </div>

          {/* H1 */}
          <h1 className="font-extrabold tracking-tight text-white leading-[1.14] mb-3 text-[clamp(1.75rem,4.2vw,3rem)] max-w-3xl">
            A-Level Tutor in Al Ain,{' '}
            <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Without the Drive to Abu Dhabi
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-blue-100/85 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mb-5 px-4 font-medium">
            One-to-one online lessons with A-Level subject specialists, taught to the exam board your child’s school uses, from the first AS topic to the final A2 paper.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 mb-4">
            <a
              href={BOOKING}
              className="inline-flex items-center justify-center gap-2 px-7 h-11 rounded-full font-bold text-xs sm:text-sm text-white transition-all hover:-translate-y-0.5 shadow-lg"
              style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 16px rgba(15,74,155,0.5)' }}
            >
              Book Your First Session
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-md shadow-[#25D366]/20"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>

          {/* Value Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-blue-200/75">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#f0c96a]" /> 1-to-1 online
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#f0c96a]" /> Free 15-min orientation
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#f0c96a]" /> Cambridge &amp; Edexcel
            </span>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <StatsBar />

      {/* ── SECTION A: LEARNING FROM HOME IN AL AIN (3-Card Layout) ── */}
      <section className="relative py-6 sm:py-8 lg:py-8 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Ambient Background Accents */}
        <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-amber-400/6 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#0f4a9b] bg-blue-50 border border-blue-200/60 mb-2">
              LEARNING FROM HOME IN AL AIN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight leading-tight">
              Why Online A-Level Tutoring Suits Al Ain Families
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Al Ain has well-established British sixth forms, but a tutor who specialises in one board’s papers, such as Cambridge 9709 Pure Mathematics 3 or Edexcel International Further Maths, can be hard to find in the city.
            </p>
          </div>

          {/* Mobile Swipe Cue */}
          <div className="flex lg:hidden justify-center mb-3">
            <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold text-[#0f4a9b] bg-blue-50/90 border border-blue-200/60 shadow-2xs">
              Swipe to see more
            </span>
          </div>

          {/* 3-Column Bento Grid (Desktop) / Horizontal Snap Carousel (Mobile) */}
          <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible gap-4 sm:gap-5 pb-3 lg:pb-0 snap-x snap-mandatory scrollbar-none w-full">
            
            {/* ── CARD 1: NO DRIVE TO ABU DHABI ── */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="w-[300px] sm:w-[330px] lg:w-auto shrink-0 snap-center relative bg-white rounded-2xl p-5 border border-slate-200/90 shadow-[0_8px_30px_rgb(15,23,42,0.05)] hover:shadow-[0_16px_36px_rgb(15,74,155,0.09)] hover:border-blue-300/80 transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Gradient Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] via-blue-500 to-indigo-500" />

              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-blue-600 text-white flex items-center justify-center shadow-sm shadow-blue-900/15">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#0f4a9b] border border-blue-200/60">
                    Direct Access
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0a192f] tracking-tight">
                  No Drive to Abu Dhabi
                </h3>

                {/* Clean Interactive Comparison Console */}
                <div className="my-3.5 p-3 rounded-xl bg-slate-50/90 border border-slate-200/70 space-y-2.5">
                  <div>
                    <div className="flex justify-between items-center text-[11px] mb-1">
                      <span className="font-semibold text-slate-500">Abu Dhabi Road Trip</span>
                      <span className="font-bold text-slate-600">90 Mins Each Way</span>
                    </div>
                    <div className="grid grid-cols-6 gap-1 h-2">
                      <div className="bg-slate-300 rounded-xs" />
                      <div className="bg-slate-300 rounded-xs" />
                      <div className="bg-slate-300 rounded-xs" />
                      <div className="bg-slate-300 rounded-xs" />
                      <div className="bg-slate-300 rounded-xs" />
                      <div className="bg-slate-300 rounded-xs" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-[11px] mb-1">
                      <span className="font-bold text-[#0a192f]">Online Specialist Lesson</span>
                      <span className="font-bold text-[#0f4a9b]">At Your Child’s Desk</span>
                    </div>
                    <div className="w-full h-2.5 bg-blue-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#0f4a9b] via-blue-600 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 pt-1">
                    <span className="text-[10px] font-semibold text-[#0f4a9b] bg-white border border-blue-200/60 rounded-md py-1 text-center shadow-2xs">
                      Zero Travel
                    </span>
                    <span className="text-[10px] font-semibold text-[#0f4a9b] bg-white border border-blue-200/60 rounded-md py-1 text-center shadow-2xs">
                      1-to-1 Focus
                    </span>
                    <span className="text-[10px] font-semibold text-[#0f4a9b] bg-white border border-blue-200/60 rounded-md py-1 text-center shadow-2xs">
                      Live Board
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialist A-Level tutors are easier to find in Abu Dhabi, about 90 minutes away by road. Online lessons bring that specialist to your child’s desk instead.
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                <Target className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                <span>More energy saved for independent past-paper practice</span>
              </div>
            </motion.div>

            {/* ── CARD 2: TAUGHT FROM YOUR BOARD'S PAPERS ── */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="w-[300px] sm:w-[330px] lg:w-auto shrink-0 snap-center relative bg-white rounded-2xl p-5 border border-slate-200/90 shadow-[0_8px_30px_rgb(15,23,42,0.05)] hover:shadow-[0_16px_36px_rgb(245,158,11,0.10)] hover:border-amber-300/80 transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Gradient Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400" />

              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-sm shadow-amber-900/15">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200/70">
                    Board Specific
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0a192f] tracking-tight">
                  Taught From Your Board’s Papers
                </h3>

                {/* 3 Clean Board Cards */}
                <div className="my-3.5 p-2.5 rounded-xl bg-amber-50/50 border border-amber-200/60 space-y-2">
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white border border-amber-200/70 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-amber-500 text-white text-[10px] font-extrabold flex items-center justify-center shrink-0">
                        01
                      </span>
                      <span className="text-xs font-bold text-[#0a192f]">Cambridge CAIE</span>
                    </div>
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                      9709 / 9702 / 9701
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white border border-amber-200/70 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-amber-500 text-white text-[10px] font-extrabold flex items-center justify-center shrink-0">
                        02
                      </span>
                      <span className="text-xs font-bold text-[#0a192f]">Pearson Edexcel</span>
                    </div>
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                      IAL Modular Units
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white border border-amber-200/70 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-amber-500 text-white text-[10px] font-extrabold flex items-center justify-center shrink-0">
                        03
                      </span>
                      <span className="text-xs font-bold text-[#0a192f]">OxfordAQA</span>
                    </div>
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                      Mark Schemes
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Your child’s tutor works from their own board’s past papers and mark schemes, so a Cambridge student and an Edexcel student are never handed the same notes.
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Separate past papers and mark schemes for every board</span>
              </div>
            </motion.div>

            {/* ── CARD 3: FITS THE AL AIN SCHOOL WEEK ── */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="w-[300px] sm:w-[330px] lg:w-auto shrink-0 snap-center relative bg-white rounded-2xl p-5 border border-slate-200/90 shadow-[0_8px_30px_rgb(15,23,42,0.05)] hover:shadow-[0_16px_36px_rgb(16,185,129,0.10)] hover:border-emerald-300/80 transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Gradient Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400" />

              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-sm shadow-emerald-900/15">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                    School Timetable
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0a192f] tracking-tight">
                  Fits the Al Ain School Week
                </h3>

                {/* Weekly Schedule Breakdown Console */}
                <div className="my-3.5 p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-200/60">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200/70 text-center shadow-2xs">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-emerald-100 text-emerald-800 mb-1">
                        MON-THU
                      </span>
                      <span className="block text-xs font-bold text-[#0a192f]">Weekdays</span>
                      <span className="block text-[10px] text-slate-500 mt-0.5">After School</span>
                    </div>

                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200/70 text-center shadow-2xs">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-emerald-100 text-emerald-800 mb-1">
                        FRIDAY
                      </span>
                      <span className="block text-xs font-bold text-[#0a192f]">Early Finish</span>
                      <span className="block text-[10px] text-slate-500 mt-0.5">Afternoon Slot</span>
                    </div>

                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200/70 text-center shadow-2xs">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-emerald-100 text-emerald-800 mb-1">
                        WEEKEND
                      </span>
                      <span className="block text-xs font-bold text-[#0a192f]">Sat &amp; Sun</span>
                      <span className="block text-[10px] text-slate-500 mt-0.5">Flexible Slots</span>
                    </div>
                  </div>

                  <div className="mt-2 pt-2 border-t border-emerald-200/50 flex items-center justify-between px-1 text-[10px] font-semibold text-emerald-800">
                    <span>Al Ain Sixth-Form Schedule</span>
                    <span>Prayer-Time Friendly</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Weekday lessons start once school ends, and the early finish on Friday opens up an afternoon slot.
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                <PenTool className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Consistent weekly slots around your family routine</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SECTION B: SUBJECTS (Track-Filtered Compact View) ── */}
      <section className="py-10 sm:py-12 bg-slate-50/70 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f4a9b] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Curriculum Breadth
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mt-2.5 tracking-tight">
              Specialist A-Level Subjects We Teach
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Each tutor is matched to the board your child sits: Cambridge, Pearson Edexcel or OxfordAQA.
            </p>
          </div>

          {/* Category Track Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-6">
            <span className="text-xs font-bold text-gray-500 mr-1.5">A-Level Pathway:</span>
            {[
              { id: 'medicine', label: 'Medicine Track (Chem, Bio, Maths)' },
              { id: 'engineering', label: 'Engineering Track (Maths, FM, Phys)' },
              { id: 'business', label: 'Business & Economics Track' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTrack(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedTrack === tab.id
                    ? 'bg-[#0f4a9b] text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-slate-200 hover:border-[#0f4a9b]/30 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mobile Swipe Cue */}
          <div className="flex md:hidden justify-center mb-3">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-semibold text-slate-500 bg-white border border-slate-200/80">
              Swipe to see more
            </span>
          </div>

          {/* Filtered Subject Cards (Single Row on Desktop, Horizontal Swipe on Mobile) */}
          <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 sm:gap-5 pb-2 md:pb-0 snap-x snap-mandatory scrollbar-none max-w-5xl mx-auto w-full">
            {A_LEVEL_SUBJECTS.filter(sub => sub.tracks.includes(selectedTrack)).map((sub) => {
              const Icon = sub.icon;

              return (
                <div
                  key={sub.id}
                  className="w-[280px] shrink-0 snap-center md:w-auto rounded-2xl p-5 bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(15,74,155,0.05)] hover:shadow-md hover:border-[#0f4a9b]/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${sub.color} flex items-center justify-center text-white shadow-sm`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-blue-50 text-[#0f4a9b] border border-blue-100">
                          AS
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-amber-50 text-[#92400e] border border-amber-200">
                          A2
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#0a1f3d] mb-1">
                      {sub.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0f4a9b] mb-2">
                      {sub.syllabus}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0f4a9b]">
                    <span>Cambridge, Edexcel &amp; OxfordAQA</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION C: CHOOSING YOUR PATH (AS, A2 and Subject Combinations) ── */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f4a9b] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Strategic Decision-Making
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mt-3 tracking-tight">
              Choosing Your Path: AS, A2 and Subject Combinations
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Sixth form success is not just about hard work; it requires strategic subject planning aligned with target degree requirements.
            </p>
          </div>

          {/* Visual 2-Stage Track: AS to A2 */}
          <div className="max-w-3xl mx-auto mb-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-amber-50 border border-slate-200/90 shadow-2xs">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#0f4a9b] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  AS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a1f3d]">Year 12: AS-Level Foundations</h4>
                  <p className="text-xs text-gray-500">Core theory, Paper 1 &amp; 2 technique, diagnostic mock milestones.</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center justify-center px-4">
                <div className="w-8 h-[2px] bg-blue-200/80 rounded-full" />
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#C7A24A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  A2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a1f3d]">Year 13: A2 Synoptic Mastery</h4>
                  <p className="text-xs text-gray-500">Paper 4 &amp; 5 precision, extended responses, university offer achievement.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Swipe Cue */}
          <div className="flex md:hidden justify-center mb-3">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-semibold text-slate-500 bg-slate-100 border border-slate-200/80">
              Swipe to see more
            </span>
          </div>

          {/* 3 Decision Cards */}
          <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 md:gap-6 pb-2 md:pb-0 snap-x snap-mandatory scrollbar-none w-full">
            <div className="w-[280px] shrink-0 snap-center md:w-auto p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0f4a9b]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0f4a9b] flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0a1f3d] mb-1.5">Keep four, drop to three</h3>
                <p className="text-xs font-semibold text-[#0f4a9b] mb-2.5">How to decide after AS.</p>
                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                  At AAESS, for example, students choose four AS subjects in Year 12 and narrow to three for A2 in Year 13. If managing four creates grade dilution, dropping one subject after Year 12 allows complete focus on the three required for your primary UCAS conditional offer.
                </p>
              </div>
            </div>

            <div className="w-[280px] shrink-0 snap-center md:w-auto p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0f4a9b]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#92400e] flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0a1f3d] mb-1.5">Subjects for your goal</h3>
                <p className="text-xs font-semibold text-[#92400e] mb-2.5">Medicine, engineering, business, law.</p>
                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                  Most Medicine courses ask for Chemistry, and most Engineering courses ask for Maths and usually Physics. Check each university’s entry page before Year 12 choices are fixed.
                </p>
              </div>
            </div>

            <div className="w-[280px] shrink-0 snap-center md:w-auto p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0f4a9b]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#065f46] flex items-center justify-center mb-4">
                  <RotateCw className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0a1f3d] mb-1.5">Resits and gap years</h3>
                <p className="text-xs font-semibold text-[#065f46] mb-2.5">How focused support works for retakes.</p>
                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                  When a student falls short of an expected grade, retaking in the next series (November for Cambridge; January, June or October for Edexcel IAL) needs a clear diagnosis rather than re-reading notes. We isolate marks lost to question misinterpretation and drill mark schemes systematically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION D: AL AIN SCHOOLS WHERE STUDENTS SIT A-LEVELS ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0f4a9b] bg-blue-50 border border-blue-100 mb-2">
              AL AIN SIXTH FORMS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] tracking-tight">
              Al Ain Schools Where Students Sit A-Levels
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Your child’s tutor teaches to the same specification their school follows.
            </p>
          </div>

          {/* Mobile Swipe Cue */}
          <div className="flex lg:hidden justify-center mb-3">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-semibold text-slate-500 bg-white border border-slate-200/80">
              Swipe to see more
            </span>
          </div>

          {/* 5 Schools: 1 single row on desktop (lg:grid-cols-5), horizontal swipe on mobile/tablet */}
          <div className="flex lg:grid lg:grid-cols-5 overflow-x-auto lg:overflow-visible gap-3 sm:gap-4 pb-3 lg:pb-0 snap-x snap-mandatory scrollbar-none w-full">
            {AL_AIN_SCHOOLS.map((school, idx) => (
              <div
                key={idx}
                className="w-[190px] sm:w-[210px] shrink-0 snap-center lg:w-auto group relative bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_12px_rgba(15,74,155,0.03)] hover:shadow-lg hover:border-[#0f4a9b]/35 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-h-[110px] sm:min-h-[130px]"
                title={school.name}
              >
                <img
                  src={school.logo}
                  alt={school.alt}
                  width="160"
                  height="80"
                  className={`max-h-16 sm:max-h-20 max-w-[150px] sm:max-w-[160px] w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                    school.name.includes("Belvedere") ? "scale-115 sm:scale-120" : ""
                  }`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION E: EXAM BOARDS (Single Unified H2, Responsive Console) ── */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white border-b border-slate-200/70 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Unified Section Header (Single H2 across all viewports) */}
          <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0f4a9b] bg-blue-50 border border-blue-100 mb-1.5 sm:mb-2">
              Exam Board Specifics
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0a1f3d] tracking-tight leading-tight">
              Specialized Support Across Major A-Level Boards
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-1.5 leading-relaxed">
              Every lesson is tailored to the exact specification followed by your child&apos;s Al Ain school.
            </p>
          </div>

          {/* ────────── MOBILE VIEW (< md): ULTRA-COMPACT 1-SCREEN FIT ────────── */}
          <div className="block md:hidden">
            {/* Compact 2-Button Toggle */}
            <div className="grid grid-cols-2 gap-2 mb-2.5">
              {EXAM_BOARDS.map((board) => {
                const isSelected = selectedBoard === board.id;
                return (
                  <button
                    key={board.id}
                    type="button"
                    onClick={() => setSelectedBoard(board.id)}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-bold transition-all border ${
                      isSelected
                        ? 'bg-white text-[#0a1f3d] border-[#0f4a9b] shadow-xs ring-1 ring-[#0f4a9b]/30'
                        : 'bg-slate-50 text-gray-500 border-slate-200'
                    }`}
                  >
                    <board.icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#0f4a9b]' : 'text-gray-400'}`} />
                    <span className="truncate">{board.shortName}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Spec Node */}
            <AnimatePresence mode="wait">
              {(() => {
                const board = EXAM_BOARDS.find((b) => b.id === selectedBoard)!;
                return (
                  <motion.div
                    key={board.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="relative bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2.5px]"
                      style={{
                        background:
                          board.id === 'cambridge'
                            ? 'linear-gradient(90deg, #0f4a9b, #38bdf8, #0f4a9b)'
                            : 'linear-gradient(90deg, #92400e, #f59e0b, #92400e)'
                      }}
                    />

                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${board.activeBadge}`}>
                        {board.name}
                      </span>
                      <span className="text-[10px] font-medium text-gray-400">
                        {board.shortName}
                      </span>
                    </div>

                    <h3 className="text-xs font-bold text-[#0a1f3d] mb-2 leading-tight">
                      {board.mobileKey}
                    </h3>

                    <p className="text-[11px] text-gray-600 leading-relaxed mb-2.5">
                      {board.desc}
                    </p>

                    <ul className="space-y-1.5 text-[11px] text-gray-600">
                      {board.mobilePoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#0f4a9b] shrink-0 mt-0.5" />
                          <span className="leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* ────────── DESKTOP VIEW (md+): EXPANDED INTERACTIVE CONSOLE ────────── */}
          <div className="hidden md:block">
            {/* 2 Animated Interactive Board Objects */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-5">
              {EXAM_BOARDS.map((board, idx) => {
                const isSelected = selectedBoard === board.id;
                return (
                  <motion.button
                    key={board.id}
                    type="button"
                    onClick={() => setSelectedBoard(board.id)}
                    animate={{
                      y: isSelected ? [0, -3, 0] : [0, -2, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: idx === 0 ? 3.6 : 4.2,
                      ease: 'easeInOut'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer overflow-hidden border ${
                      isSelected
                        ? 'bg-white border-[#0f4a9b] shadow-[0_8px_24px_rgba(15,74,155,0.12)] ring-2 ring-[#0f4a9b]/20'
                        : 'bg-[#f8fafc] border-slate-200 hover:border-slate-300 hover:bg-white shadow-2xs'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                        className="absolute top-4 left-4 w-9 h-9 rounded-xl pointer-events-none"
                        style={{ backgroundColor: board.glowColor }}
                      />
                    )}

                    <div className="flex items-center gap-3 relative z-10">
                      <div className={`w-9 h-9 rounded-xl ${board.iconBg} border flex items-center justify-center shrink-0 shadow-2xs`}>
                        <board.icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="text-[13px] font-bold text-[#0a1f3d] truncate">
                            {board.name}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${isSelected ? board.activeBadge : 'bg-slate-100 text-gray-600 border-slate-200'}`}>
                            {board.shortName}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 truncate mt-0.5">
                          {board.specType}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Animated Board Spec Node Console */}
            <AnimatePresence mode="wait">
              {(() => {
                const board = EXAM_BOARDS.find((b) => b.id === selectedBoard)!;
                return (
                  <motion.div
                    key={board.id}
                    initial={{ opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,74,155,0.06)] overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{
                        background:
                          board.id === 'cambridge'
                            ? 'linear-gradient(90deg, #0f4a9b, #38bdf8, #0f4a9b)'
                            : 'linear-gradient(90deg, #92400e, #f59e0b, #92400e)'
                      }}
                    />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${board.activeBadge}`}>
                          {board.name}
                        </span>
                        <span className="text-[11px] text-gray-500 font-medium">
                          Official Specification Focus
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5">
                        {board.codes.map((code, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-50 text-slate-700 border border-slate-200"
                          >
                            {code}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-5 items-start">
                      <div className="col-span-7">
                        <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d] mb-2 leading-snug">
                          {board.title}
                        </h3>
                        <p className="text-[13px] text-gray-600 leading-relaxed">
                          {board.desc}
                        </p>
                      </div>

                      <div className="col-span-5 bg-[#f8fafc] rounded-xl p-4 border border-slate-200/80">
                        <h4 className="text-xs font-bold text-[#0a1f3d] uppercase tracking-wider mb-2.5">
                          Exam Technique Checklist
                        </h4>
                        <ul className="space-y-2 text-xs text-gray-700">
                          {board.checks.map((checkText, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-[#0f4a9b] shrink-0 mt-0.5" />
                              <span className="leading-snug">{checkText}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── SECTION F: TUTOR SPOTLIGHT (Matched to Tutor Profiles) ── */}
      <section className="relative py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/60 to-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Animated Background Atmosphere */}
        <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(15, 74, 155, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 74, 155, 0.08) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />

          <motion.div
            animate={{
              x: [0, 24, 0],
              y: [0, -18, 0],
              scale: [1, 1.08, 1]
            }}
            transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
            className="absolute -top-10 -left-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-blue-400/22 sm:bg-blue-400/12 blur-[60px] sm:blur-[80px]"
          />

          <motion.div
            animate={{
              x: [0, -22, 0],
              y: [0, 18, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut' }}
            className="absolute -bottom-10 -right-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-amber-400/20 sm:bg-amber-400/12 blur-[60px] sm:blur-[90px]"
          />

          <motion.div
            animate={{
              opacity: [0.25, 0.5, 0.25],
              scale: [0.96, 1.04, 0.96]
            }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] h-[240px] sm:h-[320px] rounded-full bg-indigo-300/18 sm:bg-indigo-300/10 blur-[70px] sm:blur-[110px]"
          />

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 7.5, ease: 'easeInOut' }}
            className="absolute top-4 left-2 sm:top-12 sm:left-[6%] text-[#0f4a9b]/[0.10] sm:text-[#0f4a9b]/[0.05]"
          >
            <Atom className="w-12 h-12 sm:w-20 sm:h-20" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 8.5, ease: 'easeInOut' }}
            className="absolute bottom-4 right-2 sm:bottom-12 sm:right-[6%] text-[#92400e]/[0.12] sm:text-[#92400e]/[0.05]"
          >
            <FlaskConical className="w-12 h-12 sm:w-20 sm:h-20" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="absolute top-14 right-3 sm:top-20 sm:right-[18%] text-[#0f4a9b]/[0.12] sm:text-[#0f4a9b]/[0.05]"
          >
            <Sparkles className="w-10 h-10 sm:w-16 sm:h-16" />
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0f4a9b] bg-white/90 border border-blue-100/80 mb-2 shadow-2xs backdrop-blur-xs">
              Verified Faculty
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] tracking-tight">
              Meet Your A-Level Specialists
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Every Ustaad tutor is verified by academic credentials, subject depth, and proven examination pedagogy.
            </p>
          </div>

          {/* Mobile Swipe Cue */}
          <div className="flex md:hidden justify-center mb-3">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-semibold text-slate-500 bg-white border border-slate-200/80">
              Swipe to see more
            </span>
          </div>

          <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible gap-4 md:gap-6 pb-2 md:pb-0 snap-x snap-mandatory scrollbar-none w-full">
            {/* Fahad Khan - Maths Specialist */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="w-[300px] sm:w-[340px] shrink-0 snap-center md:w-auto group relative bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(15,74,155,0.04)] hover:shadow-[0_16px_36px_rgba(15,74,155,0.08)] hover:border-[#0f4a9b]/35 transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center gap-4 mb-3.5">
                  <div className="relative shrink-0">
                    <img
                      src="/images/tutors/fahad-khan-thumb.webp"
                      alt="Fahad Khan, A-Level Mathematics Tutor at Ustaad"
                      width="72"
                      height="72"
                      loading="lazy"
                      decoding="async"
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white shadow-xs group-hover:scale-102 transition-transform duration-200"
                    />
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#0f4a9b] bg-blue-50 border border-blue-100 mb-1.5">
                      10+ Years Experience
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
                      Fahad Khan
                    </h3>
                    <p className="text-xs font-semibold text-[#0f4a9b]">
                      BS Mathematics &amp; B.Ed, A-Level Specialist
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-3.5">
                  10+ years teaching Maths at IGCSE, GCSE and A-Level. Builds lessons around past papers, mark schemes and weekly progress checks, and is patient with students who arrive nervous about Maths.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-bold text-gray-700">
                    A-Level Maths
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-bold text-gray-700">
                    IGCSE
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-bold text-gray-700">
                    GCSE
                  </span>
                </div>
              </div>
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-start">
                <a
                  href="/tutors/fahad-khan"
                  className="text-xs font-bold text-[#0f4a9b] hover:text-[#0a1f3d] transition hover:underline"
                >
                  View full profile
                </a>
              </div>
            </motion.div>

            {/* Tabraiz Khan - Maths, Physics & Stats Specialist */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="w-[300px] sm:w-[340px] shrink-0 snap-center md:w-auto group relative bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(15,74,155,0.04)] hover:shadow-[0_16px_36px_rgba(15,74,155,0.08)] hover:border-[#92400e]/35 transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center gap-4 mb-3.5">
                  <div className="relative shrink-0">
                    <img
                      src="/images/tutors/tabraiz-khan-thumb.webp"
                      alt="Tabraiz Khan, Cambridge Certified Maths, Physics and Statistics Tutor at Ustaad"
                      width="72"
                      height="72"
                      loading="lazy"
                      decoding="async"
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white shadow-xs group-hover:scale-102 transition-transform duration-200"
                    />
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#92400e] bg-amber-50 border border-amber-200 mb-1.5">
                      9 Years Experience, Cambridge Certified
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
                      Tabraiz Khan
                    </h3>
                    <p className="text-xs font-semibold text-[#0f4a9b]">
                      Master in Statistics, Cambridge Certified Teacher
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-3.5">
                  Teaches A-Level Maths, Physics and Statistics. Combines analytical rigor with calm pacing: concept first, then technique, then the exam paper. Guides students to master experimental uncertainties, fields, and pure calculus.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-bold text-gray-700">
                    A-Level Mathematics
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-bold text-gray-700">
                    A-Level Physics (9702)
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-bold text-gray-700">
                    Advanced Statistics
                  </span>
                </div>
              </div>
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-start">
                <a
                  href="/tutors/tabraiz-khan"
                  className="text-xs font-bold text-[#0f4a9b] hover:text-[#0a1f3d] transition hover:underline"
                >
                  View full profile
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION: VERIFIED REVIEWS FROM AL AIN FAMILIES ── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-[#0a1f3d] mb-3 shadow-xs">
              <span className="text-[#C7A24A] tracking-tighter">★★★★★</span>
              <span>5.0 · Verified Google reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d]">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Al Ain Sixth-Form Families</span>
            </h2>
          </div>
          <AlAinAlevelReviewsScroller />
        </div>
      </section>

      {/* ── SECTION G: FAQS (What Al Ain Families Ask) ── */}
      <section id="faqs" className="py-16 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Header Column */}
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
                What Al Ain Families <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Ask About A-Level Tutoring</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Fees, school routes, exam series and the school week, answered for Al Ain families.
              </p>
            </motion.div>

            {/* Right Accordion Column */}
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {AL_AIN_A_LEVEL_FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-label={`Toggle FAQ: ${faq.q}`}
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
                        className="flex-1 flex items-center gap-3 text-left rounded-full border bg-white shadow-xs transition-colors hover:border-[#0f4a9b]/50"
                        style={{
                          minHeight: '52px',
                          padding: '10px 18px',
                          cursor: 'pointer',
                          borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)',
                        }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[13.5px] sm:text-[14px] leading-snug">
                          {faq.q}
                        </span>
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
                            className="flex items-start gap-3 rounded-2xl border p-4 sm:p-4.5 bg-[#f8fafc]"
                            style={{
                              borderColor: 'rgba(15,74,155,0.15)',
                              boxShadow: '0 4px 16px rgba(15,74,155,0.06)',
                            }}
                          >
                            <p className="flex-1 text-gray-600 text-[13px] sm:text-[13.5px] leading-relaxed">
                              {faq.renderAnswer ?? faq.a}
                            </p>
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

      {/* ── SECTION H: INTERNAL LINKS HUB (Related Pathways) ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-[#0f4a9b] bg-blue-50 border border-blue-100 mb-2.5 tracking-wide">
              UAE Curriculum Ecosystem
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0a1f3d] tracking-tight">
              Explore Related UAE Tutoring Pathways
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-lg mx-auto leading-relaxed">
              Online 1-to-1 tutoring for families in Dubai, Abu Dhabi and Al Ain, matched to their curriculum.
            </p>
          </div>

          {/* Mobile Swipe Cue */}
          <div className="flex sm:hidden justify-center mb-3">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-semibold text-slate-500 bg-slate-100 border border-slate-200/80">
              Swipe to see more
            </span>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible gap-3.5 sm:gap-4 pb-2 sm:pb-0 snap-x snap-mandatory scrollbar-none w-full">
            {RELATED_PATHWAYS.map((pathway) => (
              <a
                key={pathway.href}
                href={pathway.href}
                className="w-[230px] shrink-0 snap-center sm:w-auto group relative bg-[#f8fafc] hover:bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-[#0f4a9b]/35 shadow-[0_2px_8px_rgba(15,74,155,0.02)] hover:shadow-[0_8px_24px_rgba(15,74,155,0.08)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl ${pathway.bg} ${pathway.color} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200`}>
                      <pathway.icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-600 bg-white px-2 py-0.5 rounded-full border border-slate-200/60 shadow-2xs">
                      {pathway.tag}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-snug mb-1">
                    {pathway.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {pathway.sub}
                  </p>
                </div>
                <div className="pt-2.5 mt-2.5 border-t border-slate-200/60 text-[11px] font-semibold text-[#0f4a9b] group-hover:underline">
                  Explore Pathway
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CONVERSION CTA (Compact White Card) ── */}
      <section className="py-10 sm:py-14 bg-[#f8fafc] relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-9 md:p-10 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,74,155,0.06)] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />
            
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-[#0f4a9b] bg-blue-50 border border-blue-100 mb-3 sm:mb-3.5 shadow-2xs">
              Start A-Level Support in Al Ain Today
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#0a1f3d] mb-3 leading-snug">
              Start A-Level Lessons{' '}
              <span style={{ background: 'linear-gradient(92deg,#0f4a9b 0%,#1e5bb3 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                From Home in Al Ain
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed font-normal">
              Every first 1-hour lesson includes a free 15-minute orientation, so your child and their tutor get to know each other before the work starts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
              <a
                href={BOOKING}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-xs sm:text-sm text-white transition-all hover:-translate-y-0.5 shadow-md shadow-[#0f4a9b]/25"
                style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)' }}
              >
                Book Your First Session
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-md shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-4 h-4" /> Ask on WhatsApp
              </a>
            </div>

            <p className="text-[11px] sm:text-xs text-gray-400 mt-3.5 font-medium">
              No commitment. Cancel anytime.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
