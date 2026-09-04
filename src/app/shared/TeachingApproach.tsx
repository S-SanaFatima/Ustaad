import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ApproachFeature {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

interface TeachingApproachProps {
  title: string;
  subtitle?: string;
  description: string;
  descriptionNode?: ReactNode;
  features: ApproachFeature[];
  badgeText: string;
  badgeIcon: LucideIcon;
  backgroundImage?: string;
  footerLinkText?: string;
  footerLinkHref?: string;
}

const defaultImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
];

export default function TeachingApproach({ 
  title, 
  subtitle, 
  description,
  descriptionNode,
  features, 
  badgeText,
  badgeIcon: BadgeIcon,
  footerLinkText,
  footerLinkHref
}: TeachingApproachProps) {
  return (
    <section className="py-20 bg-[#F4F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent rounded-full mb-4 border border-[#0f4a9b]/10 text-[#0f4a9b]">
            <BadgeIcon className="h-4 w-4" />
            <span className="text-sm font-bold">{badgeText}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
            {title}{' '}
            {subtitle && <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">{subtitle}</span>}
          </h2>
          <div className="text-gray-600 text-base lg:text-lg leading-relaxed">
            {descriptionNode ?? description}
          </div>
        </div>

        {/* Cards Grid, image background with dark blurred overlay, 2 rows x 3 cols */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-[22px] overflow-hidden border border-white/70 shadow-[0_10px_35px_rgba(10,31,61,0.12)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,74,155,0.18)] transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={feature.image || defaultImages[i]}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark blurred overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07172d]/92 via-[#0a1f3d]/72 to-[#0a1f3d]/38 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/15"></div>
              </div>

              {/* Content on top */}
              <div className="relative z-10 p-6 md:p-7 min-h-[280px] flex flex-col">
                <div className="relative w-max mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4a574]/20 to-[#c89666]/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[#d4a574]/30">
                    <feature.icon className="h-6 w-6 text-[#d4a574]" strokeWidth={2} />
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 bg-gradient-to-br from-[#d4a574] to-[#c89666] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md ring-2 ring-[#0a1f3d]">{feature.number}</span>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3 leading-tight">{feature.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed flex-grow text-justify" dangerouslySetInnerHTML={{ __html: feature.description }}></p>
              </div>
            </motion.div>
          ))}
        </div>

        {footerLinkText && footerLinkHref && (
          <div className="text-center mt-10">
            <a href={footerLinkHref} className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#0f4a9b]/30 transition-all text-sm font-bold text-[#0f4a9b]">
              {footerLinkText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
