import type { ReactNode } from 'react';
import { GoldButton } from './GoldButton';
import { CTA_SUBTEXT } from './ctaCopy';

interface HeroCTABlockProps {
  children: ReactNode;
  trustText?: ReactNode;
  className?: string;
  buttonClassName?: string;
  trustClassName?: string;
  href?: string;
}

export default function HeroCTABlock({
  children,
  trustText = CTA_SUBTEXT,
  className = '',
  buttonClassName = '',
  trustClassName = '',
  href,
}: HeroCTABlockProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="flex flex-col items-start gap-2 w-fit">
          <GoldButton href={href} className={`w-fit px-8 py-3.5 text-sm shadow-[0_0_20px_rgba(199,162,74,0.35)] ${buttonClassName}`}>
            {children}
          </GoldButton>
          <p className={`text-xs text-gray-400 font-medium text-left tracking-wide ${trustClassName}`}>
            {trustText}
          </p>
        </div>
      </div>
    </div>
  );
}
