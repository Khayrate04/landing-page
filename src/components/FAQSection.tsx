/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FAQItem } from '../types';

interface FAQSectionProps {
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full px-5 md:px-0 max-w-xl mx-auto mt-12 mb-16">
      <h2 className="text-2xl font-bold text-sams-blue tracking-tight text-left mb-6 font-sans">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-gray-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sams-blue/40 rounded-2xl"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-gray-800 text-[15px] pr-4 select-none leading-snug">
                  {faq.question}
                </span>
                <div
                  className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-sams-blue' : ''
                  }`}
                >
                  <ChevronDown className="w-5 h-5" strokeWidth={2.2} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-5 pb-5 pt-1 text-[14px] leading-relaxed text-gray-600 border-t border-gray-50 select-none">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
