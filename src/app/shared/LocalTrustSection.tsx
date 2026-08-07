import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface TrustItem {
  icon: LucideIcon;
  text: string;
  color: string;
}

interface LocalTrustSectionProps {
  subject: string;
  location: string;
  title: string;
  description: string;
  descriptionNode?: ReactNode;
  backgroundImage: string;
  trustItems: TrustItem[];
  badgeText: string;
  badgeIcon: LucideIcon;
}

export default function LocalTrustSection({ 
  subject, 
  location, 
  title, 
  description, 
  descriptionNode,
  backgroundImage,
  trustItems,
  badgeText,
  badgeIcon: BadgeIcon
}: LocalTrustSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
              <img
                src={backgroundImage}
                alt={`${location} skyline`}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f4a9b]/70 via-[#0f4a9b]/40 to-transparent"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-[#d4a574] to-[#c89666] p-2 rounded-lg">
                    <BadgeIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0a1f3d]">Serving {location}</div>
                    <div className="text-xs text-gray-600">Since 2015</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-[#0f4a9b]/20 to-[#d4a574]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent rounded-full mb-4 border border-[#0f4a9b]/10">
              <BadgeIcon className="h-4 w-4 text-[#0f4a9b]" />
              <span className="text-sm font-bold text-[#0f4a9b]">{badgeText}</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
              {title || `${subject} Tuition in ${location}`}
            </h2>

            <div className="text-gray-600 text-base leading-relaxed mb-6">
              {descriptionNode ?? description}
            </div>

            <div className="space-y-3 mb-6">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <div className={`bg-gradient-to-br ${item.color} p-2 rounded-lg shadow-sm`}>
                    <item.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
