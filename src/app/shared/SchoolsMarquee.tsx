import { ReactNode } from 'react';

/** Single source of truth for the Abu Dhabi partner-school short codes. */
export const PARTNER_SCHOOLS = ['BCA','GCIA','ACS','CIS','CAD','GAAA','GWAA','RIS','YASM','MAMO','BWA','ARIS','ADPS','LISA','BCAL','AAES','AAAS','UASA','BISA'];

interface SchoolsMarqueeProps {
  /** Optional header rendered above the marquee (page-specific copy). */
  header?: ReactNode;
  /** Override the school list if ever needed; defaults to PARTNER_SCHOOLS. */
  schools?: string[];
}

const Pill = ({ school }: { school: string }) => (
  <div className="shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 2px 12px rgba(15,74,155,0.08), inset 0 1px 0 rgba(255,255,255,0.8)' }}>
    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'linear-gradient(135deg,#0f4a9b,#4A7EC7)' }} />
    <span className="text-[12px] sm:text-[13px] font-bold text-[#1a2f5a] tracking-wide">{school}</span>
  </div>
);

/**
 * Reusable "Trusted by Abu Dhabi schools" infinite marquee strip.
 * The scrolling pill row is the shared widget; pass `header` for page-specific copy above it.
 */
export default function SchoolsMarquee({ header, schools = PARTNER_SCHOOLS }: SchoolsMarqueeProps) {
  return (
    <section className="py-7 sm:py-9 lg:py-12 relative" style={{ background: 'linear-gradient(135deg, #f8faff 0%, #eef2fb 50%, #f4f7ff 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {header}
        <div className="relative">
          <style>{`
            @keyframes ustaad-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ustaad-marquee {
              animation: ustaad-marquee 25s linear infinite;
            }
          `}</style>
          <div className="flex w-full overflow-hidden py-3">
            <div className="flex shrink-0 ustaad-marquee gap-4 items-center pr-4 min-w-full">
              {schools.map(school => <Pill key={school} school={school} />)}
            </div>
            <div aria-hidden="true" className="flex shrink-0 ustaad-marquee gap-4 items-center pr-4 min-w-full">
              {schools.map(school => <Pill key={`${school}-2`} school={school} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
