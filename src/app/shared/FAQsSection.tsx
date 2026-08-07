import { useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: ReactNode;
}

interface FAQsSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  faqs: FAQItem[];
}

export default function FAQsSection({ title, subtitle, description, faqs }: FAQsSectionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-3">
            {title}{' '}
            {subtitle && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">
                {subtitle}
              </span>
            )}
          </h2>
          {description && (
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">{description}</p>
          )}
        </div>

        <div className="flex flex-col gap-[10px]">
          {faqs.map((faq, i) => {
            const isOpen = activeFaq === i;
            return (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 40, height: 40,
                      minWidth: 40, minHeight: 40,
                      background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                      color: isOpen ? '#fff' : '#0f4a9b',
                      transition: 'background 300ms ease, color 300ms ease',
                      cursor: 'pointer',
                      border: 'none',
                      boxShadow: 'inset 0 0 0 2px #fff',
                    }}
                  >
                    <span className="font-extrabold text-base">?</span>
                  </button>

                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex-1 flex items-center gap-3 text-left rounded-full border"
                    style={{
                      minHeight: '48px',
                      padding: '8px 14px',
                      cursor: 'pointer',
                      background: 'transparent',
                      borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)',
                    }}
                  >
                    <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                    <span
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: 32, height: 32,
                        minWidth: 32, minHeight: 32,
                        borderRadius: '50%',
                        background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                        color: isOpen ? '#fff' : '#0f4a9b',
                        transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </div>

                {/* Answer always in DOM — max-height CSS keeps it indexable by Google */}
                <div
                  className="ml-[52px]"
                  style={{
                    maxHeight: isOpen ? '600px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.28s ease',
                  }}
                  aria-hidden={!isOpen}
                >
                  <div
                    className="flex items-start gap-3 rounded-2xl border p-4"
                    style={{
                      background: '#f8fafc',
                      borderColor: 'rgba(15,74,155,0.15)',
                      boxShadow: '0 4px 16px rgba(15,74,155,0.06)',
                    }}
                  >
                    <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                    <span
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{
                        width: 32, height: 32,
                        minWidth: 32, minHeight: 32,
                        background: '#0f4a9b',
                        color: '#fff',
                      }}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
