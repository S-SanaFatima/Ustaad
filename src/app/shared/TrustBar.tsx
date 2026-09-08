
interface TrustBarProps {
  scrolled?: boolean;
}

export default function TrustBar({ scrolled = false }: TrustBarProps) {
  return (
    <div 
      className={`fixed top-0 left-0 right-0 h-7 z-[10000] bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white px-4 text-[11px] sm:text-xs font-medium tracking-wide flex items-center justify-center transition-transform duration-300 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <span className="font-bold">{"More Than Tutoring. Real Academic Mentorship."}</span>
      </div>
    </div>
  );
}
