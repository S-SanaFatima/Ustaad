import type { ReactNode } from 'react';
import { GoldButton } from './GoldButton';
import GoogleReviewCard from './GoogleReviewCard';

interface HeroCTABlockProps {
  children: ReactNode;
  trustText: ReactNode;
  className?: string;
  buttonClassName?: string;
  trustClassName?: string;
  href?: string;
}

export default function HeroCTABlock({
  children,
  trustText,
  className = '',
  buttonClassName = '',
  trustClassName = '',
  href,
}: HeroCTABlockProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="flex flex-col gap-2">
          <GoldButton href={href} className={`w-full sm:w-auto px-8 py-3.5 text-sm shadow-[0_0_20px_rgba(199,162,74,0.35)] ${buttonClassName}`}>
            {children}
          </GoldButton>
          <p className={`text-xs text-gray-400 font-medium text-center sm:text-left tracking-wide ${trustClassName}`}>
            {trustText}
          </p>
        </div>
      </div>
      <GoogleReviewCard />
    </div>
  );
}
