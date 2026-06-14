/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, Deal } from './types';

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'deals-duration',
    question: 'How long do the deals take?',
    answer: 'Most deals can be completed in just a few minutes. Depending on the offers you select, the entire process usually takes between 10 to 15 minutes to fully complete and verify.'
  },
  {
    id: 'what-are-deals',
    question: 'What are deals?',
    answer: 'Deals are promotional offers sponsored by our brand partners (such as mobile games, trial services, and research surveys). Completing these offers allows us to fund and reward users with $750 Sam\'s Club gift cards.'
  },
  {
    id: 'deals-quantity',
    question: 'How many deals do I have to do?',
    answer: 'To claim your $750 Sam\'s Club gift card, you must complete at least 4 sponsored deals. Each deal has different requirements, and they will be verified upon completion.'
  },
  {
    id: 'reward-timing',
    question: 'When will I receive my reward?',
    answer: 'Once you successfully complete the required number of sponsored deals, your digital $750 Sam\'s Club gift card voucher including your exclusive claim voucher code will be generated on-screen immediately, and a PDF version will be sent to your registered email address.'
  }
];

export const INITIAL_DEALS: Deal[] = [
  {
    id: 'deal-survey',
    title: 'High Street Foodie Survey',
    category: 'Market Research',
    timeToComplete: '3 mins',
    provider: 'Opinions Unlimited',
    imageType: 'survey',
    isCompleted: false,
    logoColor: 'from-blue-500 to-indigo-600',
    details: 'Answer a quick series of 6 simple multiple-choice questions about your shopping habits and Sam\'s Club membership preferences.',
    difficulty: 'Easy'
  },
  {
    id: 'deal-trivia',
    title: 'Ultimate Sam\'s Club Trivia Challenge',
    category: 'Intellectual Quiz',
    timeToComplete: '2 mins',
    provider: 'TriviaNation',
    imageType: 'quiz',
    isCompleted: false,
    logoColor: 'from-emerald-500 to-teal-600',
    details: 'Test your memory and complete a retail store trivia selection correctly to unlock quick sponsorship credits.',
    difficulty: 'Easy'
  },
  {
    id: 'deal-game',
    title: 'Merge Harvest Kingdom',
    category: 'Mobile Game Install',
    timeToComplete: '5 mins',
    provider: 'ArcadePlay Labs',
    imageType: 'game',
    isCompleted: false,
    logoColor: 'from-purple-500 to-pink-600',
    details: 'Unlock the harvesting fun! Tap play inside the mini simulator, rearrange 3 items to merge crops and complete level 3.',
    difficulty: 'Medium'
  },
  {
    id: 'deal-trial',
    title: 'Audiobook Discovery Premium',
    category: 'Free Service Trial',
    timeToComplete: '4 mins',
    provider: 'ReadStream Audio',
    imageType: 'trial',
    isCompleted: false,
    logoColor: 'from-amber-500 to-orange-600',
    details: 'Activate a virtual 30-day trial of audiobook streams. Explore a diverse catalog of over 100,000 global audiobooks.',
    difficulty: 'Medium'
  },
  {
    id: 'deal-fintech',
    title: 'PaySafe Cash Wallet Signup',
    category: 'Fintech Account',
    timeToComplete: '5 mins',
    provider: 'PaySafe Global',
    imageType: 'trial',
    isCompleted: false,
    logoColor: 'from-cyan-500 to-blue-600',
    details: 'Register for a digital spending account with PaySafe to discover contactless rewards.',
    difficulty: 'Hard'
  }
];
