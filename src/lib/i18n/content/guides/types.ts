import type { Locale } from '../../config';

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideSection {
  id: string;
  heading: string;
  paragraphs: string[];
  subsections?: {
    subheading: string;
    text: string;
  }[];
  bullets?: string[];
  callout?: {
    title: string;
    text: string;
    type?: 'info' | 'warning' | 'tip';
  };
}

export interface GuideArticleData {
  title: string;
  description: string;
  badge: string;
  h1: string;
  subheadline: string;
  readingTime: string;
  updatedDate: string;
  quickTakeawaysTitle: string;
  quickTakeaways: { label: string; text: string }[];
  tocTitle: string;
  sections: GuideSection[];
  faqsTitle: string;
  faqs: GuideFaq[];
  ctaTitle: string;
  ctaDesc: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
}

export interface GuideHubCard {
  slug: string;
  title: string;
  desc: string;
  readTime: string;
  icon: string;
}

export interface GuideHubData {
  title: string;
  description: string;
  badge: string;
  h1: string;
  subheadline: string;
  guides: GuideHubCard[];
}
