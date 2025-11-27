import { USP, Sector, Certificate, Approval, NavigationLink, ProductFeature } from './types';

export const COMPANY_INFO = {
  name: 'Disinfect Sales & Marketing LLP',
  brand: 'Disintox®',
  tagline: 'LET THE DISINFECTION BEGIN',
  founded: 'August 2020',
  patentNumber: '386338',
  address: 'Shop # S001, A-1 CHSL, Chhatrapati Shivaji Road, Off M. G. Road, Kandivali West, Mumbai 400067, Maharashtra, India',
  phone: '+91 7045 66 44 66',
  email: 'customercare@dis-infect.in',
  website: 'www.dis-infect.in',
  drugLicenceNumbers: ['20B-MH-MZ7-565919', '21B-MH-MZ7-565920'],
};

export const HERO_CONTENT = {
  h1: 'Hospital-Grade Disinfection for Healthcare Facilities',
  h2: 'Chlorine Dioxide (ClO₂) Disintox® Tablets - The most advanced, patented disinfection technology trusted by hospitals nationwide',
  primaryCTA: 'Request a Demo',
  secondaryCTA: 'Download Brochure',
};

export const USPS: USP[] = [
  {
    icon: 'shield',
    title: '99.99% Pathogen Elimination',
    description: 'Proven efficacy against bacteria, viruses, fungi, spores, and antibiotic-resistant strains including COVID-19, SARS-CoV-2, and MDRO.',
  },
  {
    icon: 'clock',
    title: 'Fast-Acting Formula',
    description: 'Rapid 3-4 hour fumigation vs conventional 12-14 hours. Short contact time ensures minimal disruption to hospital operations.',
  },
  {
    icon: 'leaf',
    title: 'Safe & Non-Toxic',
    description: 'Non-corrosive, non-carcinogenic with no harmful residues. Safe for patients, staff, and medical equipment.',
  },
  {
    icon: 'award',
    title: 'Patented Technology',
    description: 'Patent No. 386338. Listed in Maharashtra EDL. Approved by WHO, US EPA, and FDA across 5 countries.',
  },
];

export const SECTORS: Sector[] = [
  {
    name: 'Hospitals',
    problem: 'Hospital-Acquired Infections (HAIs) remain a formidable challenge, with antibiotic-resistant pathogens threatening patient safety and increasing healthcare costs.',
    solution: 'Disintox® provides comprehensive surface and air disinfection across wards, ICUs, operation theatres, and emergency rooms, eliminating 99.99% of pathogens including MRSA, VRE, and C. difficile.',
    caseSnippet: 'Reported reduction in HAI rates at major MCGM hospitals.',
  },
  {
    name: 'Water Treatment',
    problem: 'Contaminated hospital water systems harbor Legionella and other waterborne pathogens that pose serious health risks.',
    solution: 'Our Chlorine Dioxide (ClO2) tablets provide effective water disinfection without creating harmful THMs or chlorinated by-products.',
  },
  {
    name: 'Food Processing',
    problem: 'Food safety standards demand rigorous sanitization to prevent contamination and ensure product quality.',
    solution: 'Disintox® tablets sanitize equipment, surfaces, and water systems while being food-safe and leaving no residue.',
  },
  {
    name: 'Laboratories',
    problem: 'Research and testing environments require pristine sterility to maintain sample integrity and prevent cross-contamination.',
    solution: 'Gas-phase sterilization reaches all crawl spaces and equipment without damaging sensitive instruments.',
  },
  {
    name: 'Transport',
    problem: 'Ambulances and medical transport vehicles require rapid, thorough disinfection between patient transfers.',
    solution: 'Portable, easy-to-use tablets provide complete vehicle fumigation and odor elimination in minimal time.',
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    name: 'Patent Certificate (Govt. of India)',
    thumbnail: '/images/certs/patent-thumb.jpg',
    pdfUrl: '/pdfs/patent-certificate.pdf',
  },
  {
    name: 'Essential Drug List (EDL) Maharashtra',
    thumbnail: '/images/certs/edl-thumb.jpg',
    pdfUrl: '/pdfs/edl-maharashtra.pdf',
  },
  {
    name: 'Dubai Municipality Report',
    thumbnail: '/images/certs/dubai-thumb.jpg',
    pdfUrl: '/pdfs/dubai-municipality.pdf',
  },
  {
    name: 'University of Antioquia (COVID-19)',
    thumbnail: '/images/certs/university-thumb.jpg',
    pdfUrl: '/pdfs/university-antioquia-covid19.pdf',
  },
];

export const APPROVALS: Approval[] = [
  { organization: 'WHO', logo: '/images/approvals/who.jpg', year: '1992', description: 'Approved for drinking water disinfection' },
  { organization: 'US EPA', logo: '/images/approvals/epa.png', year: '1967-1988', description: 'Registered as sanitizer, disinfectant & sterilizer' },
  { organization: 'FDA', logo: '/images/approvals/fda.jpg', year: '1985-2002', description: 'Approved in 5 countries for medical device sterilization' },
  { organization: 'FSSAI', logo: '/images/approvals/fssai.jpg', year: '2024', description: 'Food safety certification' },
  // { organization: 'ISO 9001:2015', logo: '/images/approvals/iso.jpg', year: '2024', description: 'Quality management system' },
  { organization: 'NSF', logo: '/images/approvals/nsf.png', year: '2024', description: 'Public health standards' },
  { organization: 'Dubai Municipality', logo: '/images/approvals/dubai-municipality.avif', year: '2023', description: 'Water safety certification' },
  { organization: 'Maharashtra Government', logo: '/images/approvals/maharashtra-govt.jpg', year: '2024', description: 'State approval' },
  { organization: 'MCGM', logo: '/images/approvals/mcgm.png', year: '2024', description: 'Municipal approval' },
  { organization: 'University of Antioquia', logo: '/images/approvals/university-antioquia.png', year: '2021', description: 'COVID-19 (SARS-CoV-2) efficacy certification' },
];

export const PRODUCT_FEATURES: ProductFeature[] = [
  // Features with realistic photos (7 items)
  { text: 'Effective at lower concentration (100 PPM vs 1000+ PPM)', icon: '/images/product-advantages/low-concentration.jpg', isImage: true },
  { text: 'No large storage required', icon: '/images/product-advantages/no-storage.jpg', isImage: true },
  { text: 'No Residue or Harmful by-products', icon: '/images/product-advantages/no-residue.jpg', isImage: true },
  { text: 'Non-Carcinogenic', icon: '/images/product-advantages/non-carcinogenic.jpg', isImage: true },
  { text: 'Short contact time', icon: '/images/product-advantages/short-contact-time.jpg', isImage: true },
  { text: 'Easy application - no machinery required', icon: '/images/product-advantages/easy-application.jpg', isImage: true },
  { text: 'Cost effective', icon: '/images/product-advantages/cost-effective.jpg', isImage: true },

  // Features with SVG icons - placeholders for future photos (8 items)
  { text: 'Non-Corrosive', icon: '/images/product-advantages/non-corrosive.png', isImage: true },
  { text: 'Non-toxic and environment friendly', icon: '/images/product-advantages/non-toxic.png', isImage: true },
  { text: 'No Anti-Microbial resistance', icon: '/images/product-advantages/noresistance.png', isImage: true },
  { text: 'Soil Load Reduction', icon: '/images/product-advantages/soilloadreduction.png', isImage: true },
  { text: 'Effective on smallest pathogens (0.124 nm)', icon: '/images/product-advantages/smallpathogen.jpg', isImage: true },
  { text: 'Does not stain fabric', icon: '/images/product-advantages/nostain.jpg', isImage: true },
  { text: 'Broad-Spectrum Antimicrobial', icon: '/images/product-advantages/broadspectrum.jpg', isImage: true },
  { text: 'Versatile (liquid, solid & gaseous forms)', icon: '/images/product-advantages/versatile.png', isImage: true },
];

export const ORGANISMS_KILLED = {
  bacteria: [
    'Blakeslea tripora',
    'E. coli 0157:H7',
    'Erwinia carotovora',
    'Fusarium sambucinum',
    'Legionella',
    'Listeria monocytogenes',
    'Salmonella enterica',
    'Shigella',
    'Staphylococcus aureus',
    'Many others',
  ],
  viruses: [
    'COVID-19 (SARS-CoV-2)',
    'Influenza-A virus',
    'Mouse Hepatitis Virus',
    'Poliovirus-1',
    'Rotavirus',
    'Rhinovirus',
    'Influenza A virus (H1N1)',
    'Foot and Mouth disease',
    'Many others',
  ],
  spores: [
    'Bacillus anthracis',
    'Bacillus pumilus',
    'Bacillus subtilis (multiple)',
    'Clostridium sporogenes',
    'Many others',
  ],
  fungi: [
    'Aspergillus clavatus',
    'Aspergillus (multiple)',
    'Candida (multiple)',
    'Fusarium solani',
    'Many others',
  ],
};

export const APPLICATION_METHODS = [
  'Wiping',
  'Mopping',
  'Spraying',
  'Fogging',
  'Air decontamination',
  'Hand sanitizer',
  'Odor control',
];

export const FAQS = [
  {
    question: 'How does Disintox® differ from chlorine bleach?',
    answer: 'Unlike chlorine bleach (sodium hypochlorite), Chlorine Dioxide (ClO2) is an oxidizing agent, not a chlorinating agent. It works through selective oxidation without creating harmful THMs or chlorinated by-products. It\'s effective at much lower concentrations (100 PPM vs 1000+ PPM) and is non-corrosive and non-toxic.',
  },
  {
    question: 'Is Disintox® safe for use in occupied hospital areas?',
    answer: 'For surface disinfection, yes - when used as directed, it\'s safe around patients and staff. For fumigation/air decontamination, the area must be vacant during the 3-4 hour treatment period, followed by a 10-15 minute ventilation period before reoccupation.',
  },
  {
    question: 'What is the shelf life and storage requirement?',
    answer: 'Disintox® tablets have a long shelf life when stored in a cool, dry place away from direct sunlight. Once dissolved in water, the solution can be stored air-tight for up to 7 days while maintaining effectiveness.',
  },
  {
    question: 'Does Disintox® contribute to antimicrobial resistance?',
    answer: 'No. Chlorine Dioxide (ClO2) works through oxidation which physically destroys pathogens at the cellular level. This mechanism prevents the development of antimicrobial resistance, unlike antibiotics or some conventional disinfectants.',
  },
  {
    question: 'What documentation do you provide for regulatory compliance?',
    answer: 'We provide comprehensive documentation including: Patent Certificate, EDL Maharashtra listing, Dubai Municipality reports, University certification for COVID-19 efficacy, SDS (Safety Data Sheet), efficacy test reports, and drug licence numbers for procurement compliance.',
  },
];

export const COMPARISON_DATA = {
  agents: ['ClO₂', 'Sodium Hypochlorite', 'Glutaraldehyde', 'Iodine', 'Quaternary Ammonium', 'Peracetic Acid'],
  metrics: [
    { label: 'Performance', values: ['High', 'Moderate', 'Moderate to high', 'Moderate', 'Moderate to high', 'Moderate'] },
    { label: 'Contact Time', values: ['Seconds to minutes', 'Minutes to hours', '30 min to several hours', 'Minutes to hours', 'Minutes to hours', 'Minutes'] },
    { label: 'Concentration', values: ['0.1-100 ppm', '1,000 ppm to 1%', '500 ppm to 1%', '500 ppm to 1%', '100 ppm to 1%', '200-400 ppm'] },
    { label: 'pH', values: ['Neutral to Acidic', 'Alkaline', 'Neutral', 'Neutral to Acidic', 'Acidic to Neutral', 'Acidic'] },
    { label: 'Corrosiveness', values: ['Negligible', 'Corrosive to iron/aluminum', 'Negligible', 'Corrosive to iron/stainless', 'Corrosive to iron/copper/brass', 'Corrosive to iron'] },
    { label: 'Cost', values: ['Moderate', 'Low', 'Moderate to high', 'Moderate to high', 'Moderate to high', 'Moderate to high'] },
  ],
};

export const SEO_KEYWORDS = [
  'Chlorine Dioxide (ClO2) disinfectant',
  'hospital fumigation India',
  'Disintox tablets',
  'ClO2 sterilizer',
  'hospital disinfectant ClO2',
  'healthcare surface disinfection',
  'antimicrobial resistance prevention',
  'COVID-19 disinfectant',
  'HAI prevention solution',
  'medical device sterilization',
];

export const NAVIGATION_LINKS: NavigationLink[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Products',
    href: '/products',
    dropdown: [
      { name: 'Disintox® Tablets', href: '/products#tablets' },
      { name: 'Disintox® Gel', href: '/products#gel' },
      { name: 'Product Features', href: '/products#features' },
      { name: 'Efficacy & Specifications', href: '/products#efficacy' },
    ]
  },
  {
    name: 'Applications',
    href: '/applications',
    dropdown: [
      { name: 'Hospitals', href: '/applications#hospitals' },
      { name: 'Water Treatment', href: '/applications#water-treatment' },
      { name: 'Food Processing', href: '/applications#food-processing' },
      { name: 'Laboratories', href: '/applications#laboratories' },
      { name: 'Transport', href: '/applications#transport' },
    ]
  },
  {
    name: 'Case Studies',
    href: '/case-studies',
    dropdown: [
      { name: 'Hospitals', href: '/case-studies#hospitals' },
      { name: 'Water Treatment', href: '/case-studies#water' },
      { name: 'Food Processing', href: '/case-studies#food' },
      { name: 'Laboratories', href: '/case-studies#labs' },
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    dropdown: [
      { name: 'Documentation', href: '/resources#documentation' },
      { name: 'Certifications', href: '/resources#certifications' },
      { name: 'FAQs', href: '/resources#faqs' },
      { name: 'Downloads', href: '/resources#downloads' },
    ]
  },
  { name: 'Gallery', href: '/demo' },
  { name: 'PPM Calculator', href: '/calculator' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];
