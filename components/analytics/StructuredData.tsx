import { COMPANY_INFO } from '@/lib/constants';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.brand,
    url: `https://${COMPANY_INFO.website}`,
    logo: `https://${COMPANY_INFO.website}/logo.png`,
    description: 'Leading manufacturer of Chlorine Dioxide (ClO<sub>2</sub>) disinfection products for healthcare facilities in India.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400067',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      `https://${COMPANY_INFO.website}`,
    ],
    foundingDate: '2020-08',
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Disintox® Chlorine Dioxide (ClO<sub>2</sub>) Tablets',
    brand: {
      '@type': 'Brand',
      name: COMPANY_INFO.brand,
    },
    description: 'Patented Chlorine Dioxide (ClO<sub>2</sub>) effervescent tablets for hospital disinfection. 99.99% efficacy against bacteria, viruses, and fungi.',
    manufacturer: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: {
        '@type': 'Organization',
        name: COMPANY_INFO.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  };

  const medicalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: COMPANY_INFO.name,
    image: `https://${COMPANY_INFO.website}/logo.png`,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400067',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.2076',
      longitude: '72.8477',
    },
    url: `https://${COMPANY_INFO.website}`,
    priceRange: '₹₹',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />
    </>
  );
}
