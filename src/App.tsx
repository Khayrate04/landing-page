/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Clipboard, Compass, Gift, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import FAQSection from './components/FAQSection';
import { INITIAL_FAQS } from './data';

export default function App() {
  const affiliateUrl = "https://linkthem.net/aff_c?offer_id=4252&aff_id=182131";

  return (
    <div className="min-h-screen bg-[#F4F7FA] flex flex-col items-center justify-start py-8 px-4 font-sans relative overflow-x-hidden selection:bg-sams-blue/15 selection:text-sams-blue">
      
      {/* CORE WRAPPER */}
      <div className="w-full max-w-xl mx-auto flex flex-col justify-start">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex flex-col w-full"
        >
          {/* BRAND AND SURVEY LABEL */}
          <div className="flex items-center justify-center gap-2 mb-3 mt-4">
            <span className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest px-3 py-1 bg-sams-blue/10 text-sams-blue rounded-full">
              Sam's Club
            </span>
            <span className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest px-3 py-1 bg-sams-cyan/15 text-sams-cyan rounded-full">
              Survey
            </span>
          </div>

          {/* HEADING HERO */}
          <div className="text-center px-4 mb-7">
            <h1 className="text-3xl md:text-[38px] font-black tracking-tight text-sams-blue leading-[1.1] mb-4 font-sans">
              Get a $750 Sam's Club<br /> Gift Card
            </h1>
            <p className="text-[14px] md:text-[15.5px] font-medium text-gray-500 max-w-sm mx-auto leading-relaxed">
              Take our quick survey about your shopping experience at Sam's Club and receive a $750 gift card as a thank you for your feedback.
            </p>
          </div>

          {/* SAM'S CLUB GIFT CARDS MOCKUP */}
          <div className="px-4 mb-7 animate-fade-in">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-gray-100/90 shadow-[0_15px_35px_rgba(0,75,135,0.06)] p-1.5 sm:p-2 flex items-center justify-center">
              <img
                src="/src/assets/images/sams_750_card_closeup_1781459178861.jpg"
                alt="$750 Sam's Club Gift Card"
                className="w-full h-auto max-h-[320px] object-contain rounded-xl sm:rounded-2xl select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* LANDING ACTION CTA BUTTON */}
          <div className="px-4 mb-8">
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-sams-blue hover:bg-[#003865] active:scale-[0.99] text-white py-4.5 sm:py-5 rounded-2xl font-black text-lg sm:text-xl tracking-wide transition-all duration-300 shadow-[0_10px_35px_rgba(0,75,135,0.18)] hover:shadow-xl border-b-4 border-[#002f54] flex items-center justify-center gap-2.5 cursor-pointer text-center group"
            >
              <span>Start Survey Now</span>
              <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1 text-sams-cyan" strokeWidth={3} />
            </a>

            {/* QUICK INFORMATION SUBTEXT */}
            <p className="text-[11px] sm:text-[12px] leading-relaxed text-gray-400 font-semibold text-center mt-3">
              *By clicking above, you will be redirected to the survey platform to complete sponsor requirements. No purchase necessary.
            </p>
          </div>

          {/* SIMPLE 3-STEP PROCESS SECTION */}
          <div className="px-4 mb-8">
            <h3 className="text-lg font-black text-gray-800 tracking-tight uppercase mb-4 text-center">
              Simple 3-Step Process
            </h3>
            
            <div className="space-y-3.5">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl border border-gray-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.01)] p-5 flex items-start gap-4 transition-all hover:border-gray-200/50">
                <div className="w-11 h-11 rounded-xl bg-sams-blue/10 flex items-center justify-center shrink-0 text-xl">
                  📋
                </div>
                <div className="text-left">
                  <h4 className="font-extrabold text-gray-900 text-[15px] sm:text-[16px] mb-0.5">
                    Take the Survey
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
                    Answer a few quick questions about your Sam's Club shopping experience.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl border border-gray-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.01)] p-5 flex items-start gap-4 transition-all hover:border-gray-200/50">
                <div className="w-11 h-11 rounded-xl bg-sams-blue/10 flex items-center justify-center shrink-0 text-xl">
                  🎯
                </div>
                <div className="text-left">
                  <h4 className="font-extrabold text-gray-900 text-[15px] sm:text-[16px] mb-0.5">
                    Complete 4–6 Simple Deals
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
                    Includes free trials, app downloads, and Sam's Club shopping surveys. You choose which ones work for you.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl border border-gray-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.01)] p-5 flex items-start gap-4 transition-all hover:border-gray-200/50">
                <div className="w-11 h-11 rounded-xl bg-sams-blue/10 flex items-center justify-center shrink-0 text-xl">
                  🎁
                </div>
                <div className="text-left">
                  <h4 className="font-extrabold text-gray-900 text-[15px] sm:text-[16px] mb-0.5">
                    Get Rewarded
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
                    Receive your $750 Sam's Club gift card after completing the survey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WHY PARTICIPATE SECTION */}
          <div className="px-4 mb-4">
            <div className="bg-white rounded-3xl border border-gray-100/95 shadow-[0_10px_30px_rgba(0,75,135,0.03)] p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sams-cyan/5 rounded-full blur-2xl -mr-6 -mt-6"></div>
              
              <h3 className="text-base font-black text-gray-800 tracking-tight uppercase mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sams-cyan" />
                <span>Why Participate?</span>
              </h3>

              <ul className="grid grid-cols-1 gap-3 text-[14px] text-gray-700 font-semibold">
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span>Get a $750 Sam's Club gift card</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span>Instant digital delivery</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span>Valid at any Sam's Club location</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span>No purchase necessary</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span>Help improve Sam's Club services</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ACCORDION FAQ SECTION COMPONENT */}
          <FAQSection faqs={INITIAL_FAQS} />
          
        </motion.div>

      </div>
    </div>
  );
}


