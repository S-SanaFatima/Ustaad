import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ReadMoreParagraphProps {
  preview: React.ReactNode;
  more: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function ReadMoreParagraph({ preview, more, className = '', dark = false }: ReadMoreParagraphProps) {
  const [expanded, setExpanded] = useState(false);

  const btn = dark ? (
    <button
      onClick={() => setExpanded(v => !v)}
      className="inline-flex items-center gap-1 ml-1.5 text-[12px] font-semibold text-[#C7A24A] hover:text-[#e0bb6a] transition-colors duration-200 whitespace-nowrap align-middle underline-offset-2 hover:underline"
    >
      {expanded ? 'Read less' : 'Read more'}
      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
    </button>
  ) : (
    <button
      onClick={() => setExpanded(v => !v)}
      className="inline-flex items-center gap-1 ml-1.5 text-[12px] font-semibold text-[#0f4a9b] hover:text-[#0a3a79] transition-colors duration-200 whitespace-nowrap align-middle underline-offset-2 hover:underline"
    >
      {expanded ? 'Read less' : 'Read more'}
      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
    </button>
  );

  return (
    <p className={`text-justify ${className}`}>
      {preview}
      {!expanded && <>{'… '}{btn}</>}
      {expanded && <>{' '}{more}{' '}{btn}</>}
    </p>
  );
}
