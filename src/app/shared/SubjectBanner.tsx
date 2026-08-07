import { LucideIcon } from 'lucide-react';

interface StatItem {
  number: string;
  label: string;
}

interface SubjectBannerProps {
  subject: string;
  location: string;
  title: string;
  description: string;
  backgroundImage: string;
  badgeText: string;
  badgeIcon: LucideIcon;
  stats: StatItem[];
  keywords: string[];
}

export default function SubjectBanner({ 
  subject, 
  location, 
  title, 
  description, 
  backgroundImage,
  badgeText,
  badgeIcon: BadgeIcon,
  stats,
  keywords
}: SubjectBannerProps) {
  const highlightedText = (text: string) => {
    return text.split(' ').map((word, index) => 
      keywords.some(keyword => word.toLowerCase().includes(keyword.toLowerCase())) ? 
        <strong key={index} className="text-white">{word}</strong> : 
        <span key={index}>{word}</span>
    ).reduce((acc, curr, i) => i === 0 ? [curr] : [...acc, ' ', curr], [] as JSX.Element[]);
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={`${subject} equations background`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a3a79]/95 via-[#0f4a9b]/90 to-[#1e5ba8]/95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTYiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
          <BadgeIcon className="h-4 w-4" />
          <span className="text-sm font-bold">{badgeText}</span>
        </div>

        <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">
          {title} in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a574] to-[#f4d4a8]">
            {location}
          </span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 text-base lg:text-lg text-blue-100 leading-relaxed">
          {description.split('\n\n').map((paragraph, index) => (
            <p key={index}>
              {highlightedText(paragraph)}
            </p>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-extrabold text-[#d4a574] mb-1">{stat.number}</div>
              <div className="text-xs text-blue-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Glowing Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[#d4a574]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#d4a574]/20 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
