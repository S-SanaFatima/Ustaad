import { ReactNode } from 'react';

export interface SchoolLogoItem {
  name: string;
  file: string;
  alt?: string;
  scale?: number;
}

export const DUBAI_SCHOOL_LOGOS: SchoolLogoItem[] = [
  { name: 'Dubai College', file: 'dubai-college.png' },
  { name: 'Repton School Dubai', file: 'repton-dubai.png' },
  { name: 'Nord Anglia International School Dubai', file: 'nord-anglia-dubai.png' },
  { name: 'JESS Dubai', file: 'jess.png' },
  { name: 'Brighton College Dubai', file: 'brighton-college-dubai.png' },
  { name: 'Hartland International School Dubai', file: 'hartland-international-school.png' },
  { name: 'Horizon International School Dubai', file: 'horizon-international-school.png' },
  { name: 'Durham School Dubai', file: 'durham-school-dubai.png' },
  { name: 'Sunmarke School Dubai', file: 'sunmarke.png' },
  { name: 'Deira International School Dubai', file: 'deira.png' },
  { name: 'Royal Grammar School Guildford Dubai', file: 'rgs.png' },
  { name: 'Safa Community School Dubai', file: 'safa.png' },
  { name: 'GEMS World Academy Dubai', file: 'gems-world-academy.png', scale: 0.72 },
  { name: 'GEMS Wellington International School Dubai', file: 'gems-wis.png', scale: 0.85 },
  { name: 'Victory Heights Primary School Dubai', file: 'victory_heights.png' },
  { name: 'Dwight School Dubai', file: 'dwight.png' },
];

export const ABU_DHABI_SCHOOL_LOGOS: SchoolLogoItem[] = [
  { name: 'The British International School Abu Dhabi', file: 'bisad.png' },
  { name: 'Cranleigh Abu Dhabi', file: 'cranleigh.png' },
  { name: 'Al Basma British School Abu Dhabi', file: 'albasma.png' },
  { name: 'Raha International School Abu Dhabi', file: 'raha.png' },
  { name: 'Amity International School Abu Dhabi', file: 'amity.png' },
  { name: 'Merryland International School Abu Dhabi', file: 'merryland.png' },
  { name: 'Belvedere International School Abu Dhabi', file: 'belvedere.png' },
  { name: 'Creative British School Abu Dhabi', file: 'creative-british.png' },
  { name: 'American International School Abu Dhabi', file: 'aisa-abu-dhabi.png' },
  { name: 'Al Yasmina Academy Abu Dhabi', file: 'al-yasmina-academy-abu-dhabi.png' },
  { name: 'British School Al Khubairat Abu Dhabi', file: 'british-school-al-khubairat-abu-dhabi.png' },
];

export const FEATURED_SCHOOL_LOGOS: SchoolLogoItem[] = [
  ...DUBAI_SCHOOL_LOGOS,
  ...ABU_DHABI_SCHOOL_LOGOS,
];

interface SchoolsMarqueeProps {
  /** Optional header rendered above the marquee (page-specific copy). */
  header?: ReactNode;
  /** Optional title for marquee header. */
  title?: string;
  /** Optional override for school logo list. */
  logoList?: SchoolLogoItem[];
}

const SchoolLogoCard = ({ logo, isAriaHidden }: { logo: SchoolLogoItem; isAriaHidden?: boolean }) => (
  <div
    title={logo.name}
    aria-hidden={isAriaHidden ? "true" : undefined}
    className="shrink-0 w-[180px] sm:w-[240px] h-[100px] sm:h-[130px] flex items-center justify-center px-4 cursor-default relative transition-all duration-300 hover:scale-110 hover:-translate-y-1"
  >
    <img
      src={`/school-logos/${logo.file}`}
      srcSet={`/school-logos/${logo.file} 280w`}
      sizes="(max-width: 640px) 180px, 240px"
      alt={logo.alt || `${logo.name} logo`}
      width={240}
      height={100}
      style={{ transform: logo.scale ? `scale(${logo.scale})` : undefined }}
      className="w-full h-full max-h-[85px] sm:max-h-[100px] object-contain filter drop-shadow-sm mix-blend-multiply"
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
  title,
  logoList = DUBAI_SCHOOL_LOGOS,
}: SchoolsMarqueeProps) {
  return (
    <section className="py-8 sm:py-10 lg:py-12 relative overflow-hidden bg-gradient-to-r from-slate-50 via-blue-50/30 to-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {header || (
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d]">
              {title || "Trusted by Families Across Leading UAE Schools"}
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
              animation: ustaad-logo-marquee 75s linear infinite;
            }
            .ustaad-logo-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          {/* Gradient fade masks on left and right */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <div className="flex w-full overflow-hidden py-2">
            <div className="flex shrink-0 ustaad-logo-marquee gap-4 sm:gap-5 items-center pr-4 sm:pr-5 w-max">
              {[...logoList, ...logoList, ...logoList, ...logoList].map((logo, idx) => (
                <SchoolLogoCard
                  key={`${logo.file}-${idx}`}
                  logo={logo}
                  isAriaHidden={idx >= logoList.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


