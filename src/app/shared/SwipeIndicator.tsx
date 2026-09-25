import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SwipeIndicatorProps {
  text?: string;
  className?: string;
  dark?: boolean;
}

export default function SwipeIndicator({
  text = "Swipe horizontally to view more",
  className = "",
  dark = false,
}: SwipeIndicatorProps) {
  return (
    <div
      className={`sm:hidden flex items-center justify-center gap-2 py-1.5 px-3.5 rounded-full text-xs font-bold transition-all mx-auto max-w-fit select-none ${
        dark
          ? 'bg-white/10 text-blue-100 border border-white/20 shadow-xs'
          : 'bg-gradient-to-r from-blue-50/90 via-amber-50/60 to-blue-50/90 text-[#0a1f3d] border border-[#0f4a9b]/15 shadow-2xs'
      } ${className}`}
    >
      <ArrowLeft className="w-3.5 h-3.5 text-[#C7A24A] animate-pulse" />
      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] shrink-0" />
      <span className="text-[11px] font-extrabold tracking-tight">{text}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] shrink-0" />
      <ArrowRight className="w-3.5 h-3.5 text-[#C7A24A] animate-pulse" />
    </div>
  );
}
