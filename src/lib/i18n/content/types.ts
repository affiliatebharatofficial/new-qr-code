export interface LocalizedSector {
  name: string;
  description: string;
  benefit?: string;
}

export interface LocalizedStep {
  title: string;
  description: string;
}

export interface LocalizedUseCase {
  title: string;
  description: string;
  example?: string;
}

export interface LocalizedFaq {
  question: string;
  answer: string;
}

export interface LocalizedRelatedTool {
  name: string;
  slug: string;
  description: string;
}

export interface LocalizedPageContent {
  slug: string;
  qrTypeId: string;
  title: string;
  description: string;
  h1: string;
  subheadline: string;
  heading: string;
  subheading: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  sectors: LocalizedSector[];
  howItWorks: LocalizedStep[];
  useCases: LocalizedUseCase[];
  tips: string[];
  technicalNotes?: string;
  faqs: LocalizedFaq[];
  relatedTools: LocalizedRelatedTool[];
}
