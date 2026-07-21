export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  applications: string[];
  features?: string[];
  specifications: Record<string, string>;
  industries: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Certificate {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  quantity: string;
  specifications: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
