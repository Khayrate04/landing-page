/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StepItem {
  id: number;
  text: string;
}

export interface Deal {
  id: string;
  title: string;
  category: string;
  timeToComplete: string;
  provider: string;
  imageType: 'survey' | 'game' | 'trial' | 'quiz';
  isCompleted: boolean;
  logoColor: string;
  details: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface RegistrationData {
  email: string;
  fullName: string;
  postcode: string;
  phoneNumber: string;
  ageAgreed: boolean;
}

export type ClaimStage = 'landing' | 'register' | 'deals' | 'reward';

