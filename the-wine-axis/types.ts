
export type Language = 'it' | 'en';

export interface Localized<T> {
  it: T;
  en: T;
}

export interface ServiceFeature {
  title: Localized<string>;
  description: Localized<string>;
  cta?: Localized<string>;
}

export interface FAQItem {
  question: Localized<string>;
  answer: Localized<string>;
}

export interface Service {
  id: string;
  slug: string;
  category: 'B2B' | 'B2C' | 'Education';
  tier: 'Entry' | 'Core' | 'Premium';
  title: Localized<string>;
  shortDesc: Localized<string>;
  longDesc: Localized<string>;
  closingChapter: Localized<string>; // New field for mini-sales page structure
  features: ServiceFeature[];
  faqs: FAQItem[];
  keywords: Localized<string>;
  metaTitle: Localized<string>;
  metaDesc: Localized<string>;
  imageUrl: string;
  cta: Localized<string>;
  relatedSlugs?: string[];
  entities?: string[];
}

export interface Project {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Post {
  id: string;
  title: Localized<string>;
  excerpt: Localized<string>;
  date: string;
  category: Localized<string>;
  readTime: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  lang: Language;
}

export enum PageRoute {
  Home = '/',
  Services = '/services',
  ServiceDetail = '/services/:slug',
  Portfolio = '/portfolio',
  Blog = '/blog',
  Contact = '/contact'
}
