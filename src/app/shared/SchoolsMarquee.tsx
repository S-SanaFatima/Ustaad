import { ReactNode } from 'react';

export const PARTNER_SCHOOLS = ['BCA','GCIA','ACS','CIS','CAD','GAAA','GWAA','RIS','YASM','MAMO','BWA','ARIS','ADPS','LISA','BCAL','AAES','AAAS','UASA','BISA'];

export interface SchoolLogoItem {
  name: string;
  file: string;
}

export const FEATURED_SCHOOL_LOGOS: SchoolLogoItem[] = [
  { name: 'The British International School Abu Dhabi', file: 'bisad.png' },
  { name: 'Cranleigh Abu Dhabi', file: 'cranleigh.png' },
  { name: 'Nord Anglia International School', file: 'nord-anglia.png' },
  { name: 'Repton School Abu Dhabi', file: 'repton.png' },
  { name: 'Brighton College Abu Dhabi', file: 'brighton.png' },
  { name: 'Raha International School', file: 'raha.png' },
  { name: 'Dubai College', file: 'dubai.png' },
  { name: 'Royal Grammar School Guildford Dubai', file: 'rgs.png' },
  { name: 'Amity International School', file: 'amity.png' },
  { name: 'Merryland International School', file: 'merryland.png' },
  { name: 'Al Basma British School', file: 'al-basma.png' },
  { name: 'Belvedere International School', file: 'belvedere.png' },
  { name: 'JESS Dubai', file: 'jess.png' },
  { name: 'Sunmarke School', file: 'sunmarke.png' },
  { name: 'Deira International School', file: 'deira.png' },
  { name: 'Creative British School', file: 'creative-british.png' },
];

interface SchoolsMarqueeProps {
  /** Optional header rendered above the marquee (page-specific copy). */
  header?: ReactNode;
  /** Optional override for school logo list. */
  logoList?: SchoolLogoItem[];
}

const SchoolLogoCard = ({ logo }: { logo: SchoolLogoItem }) => (
  <div
    title={logo.name}
    className="shrink-0 w-[140px] sm:w-[160px] h-[75px] sm:h-[85px] flex items-center justify-center rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_16px_rgba(15,74,155,0.06)] px-4 py-3 cursor-default relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(15,74,155,0.12)] hover:-translate-y-0.5"
  >
    <img
      src={`/school-logos/${logo.file}`}
      alt={`${logo.name} logo`}
      className="max-w-full max-h-full object-contain filter drop-shadow-sm"
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextElementSibling?.classList.remove('hidden');
        e.currentTarget.nextElementSibling?.classList.add('flex');
      }}
    />
    <div className="hidden absolute inset-0 items-center justify-center p-2 text-center bg-white text-[11px] font-bold text-[#0a1f3d] leading-tight">
      {logo.name}
    </div>
  </div>
);

/**
 * Reusable floating school logos marquee component for landing pages.
 * Displays high-resolution school logo images in an infinite marquee strip.
 */
export default function SchoolsMarquee({
  header,
  logoList = FEATURED_SCHOOL_LOGOS,
}: SchoolsMarqueeProps) {
  return (
    <section className="py-8 sm:py-10 lg:py-12 relative overflow-hidden bg-gradient-to-r from-slate-50 via-blue-50/30 to-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {header || (
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-2">
              Partner Schools & Communities
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d]">
              Trusted by Students Across Leading UAE Schools
            </h2>
          </div>
        )}
        <div className="relative">
          <style>{`
            @keyframes ustaad-logo-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ustaad-logo-marquee {
              animation: ustaad-logo-marquee 35s linear infinite;
            }
            .ustaad-logo-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          {/* Gradient fade masks on left and right */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <div className="flex w-full overflow-hidden py-2">
            <div className="flex shrink-0 ustaad-logo-marquee gap-4 sm:gap-5 items-center pr-4 sm:pr-5 min-w-full">
              {logoList.map((logo, idx) => (
                <SchoolLogoCard key={`${logo.file}-${idx}`} logo={logo} />
              ))}
            </div>
            <div aria-hidden="true" className="flex shrink-0 ustaad-logo-marquee gap-4 sm:gap-5 items-center pr-4 sm:pr-5 min-w-full">
              {logoList.map((logo, idx) => (
                <SchoolLogoCard key={`${logo.file}-dup-${idx}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

