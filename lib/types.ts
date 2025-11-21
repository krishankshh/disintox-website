export interface Product {
  _id: string;
  title: string;
  slug: string;
  shortPitch: string;
  description: string;
  specs: ProductSpec[];
  images: string[];
  downloadableFiles: DownloadableFile[];
  useCases: string[];
  features: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface DownloadableFile {
  title: string;
  url: string;
  type: 'pdf' | 'doc' | 'video';
}

export interface CaseStudy {
  _id: string;
  title: string;
  slug: string;
  sector: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  evidenceFiles: DownloadableFile[];
  publishedAt: string;
}

export interface Resource {
  _id: string;
  type: 'pdf' | 'video';
  title: string;
  tags: string[];
  file: string;
  description: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  title: string;
  organization: string;
  quote: string;
  logo?: string;
}

export interface SiteSettings {
  contactEmail: string;
  contactPhone: string;
  address: string;
  gaKey?: string;
  linkedInTag?: string;
  primaryCTAText: string;
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface DemoFormData {
  name: string;
  organization: string;
  role: string;
  phone: string;
  email: string;
  sector: string;
  message: string;
  rfpFile?: File;
  privacyConsent: boolean;
}

export interface USP {
  icon: string;
  title: string;
  description: string;
}

export interface Sector {
  name: string;
  problem: string;
  solution: string;
  caseSnippet?: string;
}

export interface Certificate {
  name: string;
  thumbnail: string;
  pdfUrl: string;
}

export interface Approval {
  organization: string;
  logo: string;
  year: string;
  description: string;
}

export interface NavigationLink {
  name: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
  }[];
}
