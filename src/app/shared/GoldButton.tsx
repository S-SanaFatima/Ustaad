import { ReactNode } from 'react';

export const GoldButton = ({ children, className = "", href = "/contact#form", onClick }: { children: ReactNode; className?: string; href?: string; onClick?: () => void }) => (
  <a href={href} onClick={onClick} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={`inline-flex items-center justify-center bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] text-white font-bold rounded-xl hover:brightness-110 hover:shadow-xl hover:shadow-[#C7A24A]/40 transition transform hover:-translate-y-0.5 active:scale-95 ${className}`}>
    {children}
  </a>
);
