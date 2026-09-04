import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string | React.ReactNode;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
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
                  width: 40, height: 40, minWidth: 40, minHeight: 40,
                  background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                  color: isOpen ? '#fff' : '#0f4a9b',
                  transition: 'background 300ms ease, color 300ms ease',
                  cursor: 'pointer', border: 'none',
                  boxShadow: 'inset 0 0 0 2px #fff',
                }}
              >
                <span className="font-extrabold text-base">?</span>
              </button>
              <button
                onClick={() => setActiveFaq(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                className="flex-1 flex items-center gap-3 text-left rounded-full border"
                style={{
                  minHeight: '48px', padding: '8px 14px', cursor: 'pointer',
                  background: 'transparent',
                  borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)',
                }}
              >
                <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                <span
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: 32, height: 32, minWidth: 32, minHeight: 32, borderRadius: '50%',
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
            <motion.div
              initial={false}
              animate={{ 
                height: isOpen ? 'auto' : 0,
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : -8 
              }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="ml-0 sm:ml-[52px] overflow-hidden"
              style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
              id={`faq-answer-${i}`}
            >
              <div
                className="flex items-start gap-3 rounded-2xl border p-4 my-2"
                style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 4px 16px rgba(15,74,155,0.06)' }}
              >
                <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                <span
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, background: '#0f4a9b', color: '#fff' }}
                >
                  <MessageCircle className="h-4 w-4" />
                </span>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
