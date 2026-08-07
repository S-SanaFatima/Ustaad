import { ReactNode } from 'react';
import { GoldButton } from './GoldButton';
import { GradientHeadingText } from './GradientHeadingText';

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  subtitleNode?: ReactNode;
  button1Text?: string;
  button1Href?: string;
  subtext1?: string;
}

export default function FinalCTA({
  title = "Find the Right Tutor for Your Curriculum",
  subtitle = "Get matched with an expert tutor for your subject and curriculum.",
  subtitleNode,
  button1Text = "Start Your First Session Today",
  button1Href = "/contact#form",
  subtext1 = "Free Trial • No Commitment",
}: FinalCTAProps) {
  return (
    <section className="py-8 lg:py-12 bg-gray-50 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#eab308]/5 to-[#d97706]/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl lg:text-3xl font-extrabold mb-4 text-[#0a1f3d] tracking-tight">
          <GradientHeadingText text={title} />
        </h2>
        <div className="text-gray-600 text-[15px] mb-8">
          {subtitleNode ?? subtitle}
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <GoldButton href={button1Href} className="px-10 py-4 text-base shadow-[0_0_20px_rgba(234,179,8,0.4)]">
              {button1Text}
            </GoldButton>
            <p className="text-xs text-gray-500 font-medium mt-2">{subtext1}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
