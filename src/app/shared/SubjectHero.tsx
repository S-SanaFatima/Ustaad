import { ReactNode } from 'react';
import { useState } from 'react';
import { Sun, Moon, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import HeroCTABlock from './HeroCTABlock';

interface SubjectHeroProps {
  subject: string;
  title: string;
  subtitle: string;
  description: string;
  descriptionNode?: ReactNode;
  backgroundImage: string;
  isDarkHero?: boolean;
  compact?: boolean;
  onToggleTheme?: () => void;
  curriculum?: string;
  location?: string;
  primaryCtaHref?: string;
  primaryCtaText?: string;
  secondaryCtaHref?: string;
  secondaryCtaText?: string;
}

export default function SubjectHero({ 
  subject, 
  title, 
  subtitle, 
  description, 
  descriptionNode,
  backgroundImage,
  isDarkHero = false,
  compact = false,
  onToggleTheme,
  curriculum = "IGCSE, GCSE, A-Level, IB & American curriculum",
  location = "Dubai & Abu Dhabi",
  primaryCtaHref = "/contact",
  primaryCtaText = "Book Your Free Trial",
  secondaryCtaHref,
  secondaryCtaText
}: SubjectHeroProps) {
  return (
    <section className={`relative flex items-center overflow-hidden ${compact ? 'min-h-[540px] lg:min-h-[620px]' : 'min-h-[600px] lg:min-h-[700px]'}`}>
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={`Professional ${subject} tutor teaching student`}
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        {/* Conditional Gradient Overlays */}
        {!isDarkHero ? (
          <>
            {/* Light Version - Current */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40 transition-opacity duration-500"></div>
          </>
        ) : (
          <>
            {/* Dark Version - Premium Visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f3d]/85 via-[#0a1f3d]/70 to-transparent transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/80 via-transparent to-transparent transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f4a9b]/20 to-[#d4a574]/20 transition-opacity duration-500"></div>
          </>
        )}
      </div>

      {/* Toggle Button */}
      {onToggleTheme && (
        <button
          onClick={onToggleTheme}
          className={`absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold border-2 transition-all hover:scale-105 shadow-lg ${
            isDarkHero
              ? 'bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20'
              : 'bg-[#0a1f3d]/5 backdrop-blur-sm text-[#0a1f3d] border-[#0a1f3d]/10 hover:bg-[#0a1f3d]/10'
          }`}
        >
          {isDarkHero ? (
            <>
              <Sun className="h-4 w-4" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="h-4 w-4" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      )}

      {/* Content */}
      <div className={`relative z-10 w-full ${compact ? 'py-14 lg:py-16' : 'py-20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={compact ? 'max-w-3xl' : 'max-w-2xl'}>
            {/* Premium Badge */}
            <div className={`inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#A8892A] text-sm font-bold rounded-full mb-6 border-2 border-[#C7A24A]/60 shadow-[0_0_20px_rgba(199,162,74,0.18)] ${
              isDarkHero ? 'bg-white/10 border-white/20 text-white' : ''
            }`}>
              <Shield className="h-4 w-4 text-[#C7A24A]" /> Trusted by 200+ Abu Dhabi families since 2015
            </div>

            <h1 className={`text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] transition-all ${compact ? 'mb-4' : 'mb-6'}`}>
              <span className={isDarkHero ? 'text-white drop-shadow-lg' : 'text-[#0a1f3d]'}>
                {title}{' '}
              </span>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] via-[#0f4a9b] to-[#0a3a79] transition-all ${
                isDarkHero ? 'drop-shadow-2xl' : ''
              }`}>
                {subtitle}
              </span>
            </h1>

            <div className={`w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full ${compact ? 'mb-4' : 'mb-6'}`}></div>

            <div className={`leading-relaxed transition-all ${compact ? 'text-base lg:text-lg mb-6 max-w-2xl' : 'text-lg lg:text-xl mb-10 max-w-xl'} ${
              isDarkHero ? 'text-blue-100 drop-shadow-md' : 'text-gray-600'
            }`}>
              {descriptionNode ?? description}{curriculum ? ` ${curriculum}, serving students across the UAE.` : ''}
            </div>

            <div className={`flex flex-col sm:flex-row items-start gap-4 ${compact ? 'mb-2' : 'mb-4'}`}>
              <HeroCTABlock
                trustClassName={isDarkHero ? 'text-blue-200' : ''}
                buttonClassName=""
                href={primaryCtaHref}
             >
                {primaryCtaText}
              </HeroCTABlock>
              {secondaryCtaHref && secondaryCtaText && (
                <a
                  href={secondaryCtaHref}
                  target={secondaryCtaHref.startsWith('http') ? '_blank' : undefined}
                  rel={secondaryCtaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white/80 border-2 border-[#0f4a9b]/20 text-[#0a1f3d] font-bold rounded-xl hover:border-[#0f4a9b] hover:bg-white transition text-sm backdrop-blur-sm"
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>

</div>
        </div>
      </div>

      {/* Decorative Glowing Elements */}
      <div className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDarkHero
          ? 'bg-gradient-to-r from-[#0f4a9b]/30 to-[#d4a574]/30'
          : 'bg-gradient-to-r from-[#0f4a9b]/10 to-[#d4a574]/10'
      }`}></div>
      <div className={`absolute bottom-20 right-40 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDarkHero
          ? 'bg-gradient-to-r from-[#d4a574]/30 to-[#0f4a9b]/30'
          : 'bg-gradient-to-r from-[#d4a574]/10 to-[#0f4a9b]/10'
      }`}></div>
    </section>
  );
}
