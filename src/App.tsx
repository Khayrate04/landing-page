/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import FAQSection from './components/FAQSection';
import { INITIAL_FAQS } from './data';

export default function App() {
  const affiliateUrl = "https://linkthem.net/aff_c?offer_id=4252&aff_id=182131";

  return (
    <div className="min-h-screen bg-[#F4F7FA] flex flex-col items-center justify-start py-8 px-4 font-sans relative overflow-x-hidden selection:bg-sams-blue/15 selection:text-sams-blue">
      
      {/* CORE WRAPPER */}
      <div className="w-full max-w-md mx-auto flex flex-col justify-start">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,75,135,0.05)] border border-slate-100 overflow-hidden flex flex-col"
        >
          {/* TOP SECTION (WHITE BACKGROUND) */}
          <div className="bg-white px-6 pt-10 pb-6 flex flex-col items-center">
            {/* Title */}
            <h1 className="text-[28px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 text-center leading-tight mb-3">
              Join Our Review Program
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 font-semibold text-center text-[14px] sm:text-[15px] leading-relaxed max-w-[340px] px-2">
              Your opinions about Sam's Club matter. Help us improve the shopping experience and receive <span className="text-sams-blue font-bold">$750</span> as our way of saying thanks.
            </p>
          </div>

          {/* REWARD CARD IMAGES (GRID) */}
          <div className="bg-white px-6 pb-8">
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1: Closeup */}
              <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-[0_4px_16px_rgba(0,75,135,0.02)] p-1.5 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,75,135,0.06)] hover:-translate-y-0.5">
                <div className="aspect-[1.58/1] overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center">
                  <img
                    src="/src/assets/images/sams_750_card_closeup_1781459178861.jpg"
                    alt="$750 Sam's Club Gift Card Closeup"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase">Digital Voucher</span>
                </div>
              </div>

              {/* Image 2: Batch */}
              <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-[0_4px_16px_rgba(0,75,135,0.02)] p-1.5 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,75,135,0.06)] hover:-translate-y-0.5">
                <div className="aspect-[1.58/1] overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center">
                  <img
                    src="/src/assets/images/sams_club_750_cards_1781458808629.jpg"
                    alt="Sam's Club Gift Cards Batch"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase">Member Pack</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM STEPS SECTION (SLATE/GRAY BACKGROUND WITH ROUNDED-T-3XL) */}
          <div className="bg-[#F8FAFC] border-t border-slate-100/60 rounded-t-[32px] px-6 py-8 flex flex-col gap-6">
            {/* STEP List */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Step 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-8.5 h-8.5 rounded-full bg-sams-blue text-white flex items-center justify-center font-extrabold text-sm shrink-0 mt-0.5 shadow-sm">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-[15px] sm:text-[16px] flex items-center gap-1.5">
                    Get Started <span className="text-base select-none">🚀</span>
                  </h3>
                  <p className="text-slate-500 text-[13px] sm:text-[13.5px] mt-0.5 font-medium leading-relaxed">
                    Click the button below to begin your review journey
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-8.5 h-8.5 rounded-full bg-sams-blue text-white flex items-center justify-center font-extrabold text-sm shrink-0 mt-0.5 shadow-sm">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-[15px] sm:text-[16px] flex items-center gap-1.5">
                    Share Your Details <span className="text-base select-none">📝</span>
                  </h3>
                  <p className="text-slate-500 text-[13px] sm:text-[13.5px] mt-0.5 font-medium leading-relaxed">
                    Provide your email and basic information
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 items-start">
                <div className="w-8.5 h-8.5 rounded-full bg-sams-blue text-white flex items-center justify-center font-extrabold text-sm shrink-0 mt-0.5 shadow-sm">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-[15px] sm:text-[16px] flex items-center gap-1.5">
                    Complete 3-5 Deals <span className="text-base select-none">🛍️</span>
                  </h3>
                  <p className="text-slate-500 text-[13px] sm:text-[13.5px] mt-0.5 font-medium leading-relaxed">
                    Complete recommended deals tailored for you
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4 items-start">
                <div className="w-8.5 h-8.5 rounded-full bg-sams-blue text-white flex items-center justify-center font-extrabold text-sm shrink-0 mt-0.5 shadow-sm">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-[15px] sm:text-[16px] flex items-center gap-1.5">
                    Claim Your Reward <span className="text-base select-none">🎁</span>
                  </h3>
                  <p className="text-slate-500 text-[13px] sm:text-[13.5px] mt-0.5 font-medium leading-relaxed">
                    Receive your Sam's Club reward instantly
                  </p>
                </div>
              </div>
            </div>

            {/* CTA BUTTON */}
            <div className="mt-2">
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-sams-blue hover:bg-[#003c6c] text-white py-4 px-6 rounded-2xl font-black text-[17px] sm:text-[18px] transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-[0.99] cursor-pointer select-none"
              >
                Start Now
              </a>
            </div>
          </div>
        </motion.div>

        {/* FOOTER (UNDER THE MAIN CARD) */}
        <div className="flex items-center justify-center gap-1.5 mt-6 mb-2 text-slate-400 font-semibold text-[11px] sm:text-xs select-none">
          <ShieldCheck className="w-4 h-4 text-sams-cyan shrink-0" strokeWidth={2.5} />
          <span>Official Sam's Club Feedback Network</span>
        </div>

        {/* ACCORDION FAQ SECTION COMPONENT */}
        <FAQSection faqs={INITIAL_FAQS} />
      </div>
    </div>
  );
}


