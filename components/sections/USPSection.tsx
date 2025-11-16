'use client';

import ScrollReveal from '../animations/ScrollReveal';

const bentoFeatures = [
  {
    size: 'normal',
    icon: '🛡️',
    title: '99.99% Pathogen Elimination',
    description: 'Proven efficacy against bacteria, viruses, fungi, spores, and antibiotic-resistant strains including COVID-19, SARS-CoV-2, and MDRO.',
    color: 'from-primary-500 to-primary-600'
  },
  {
    size: 'normal',
    icon: '⚡',
    title: 'Fast-Acting Formula',
    description: 'Rapid 3-4 hour fumigation vs conventional 12-14 hours. Minimal disruption to operations.',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    size: 'normal',
    icon: '🌿',
    title: 'Safe & Non-Toxic',
    description: 'Non-corrosive, non-carcinogenic with no harmful residues. Safe for patients, staff, and equipment.',
    color: 'from-accent-500 to-accent-600'
  },
  {
    size: 'normal',
    icon: '🏆',
    title: 'Patented Technology',
    description: 'Indian Patent No. 386338. Listed in Maharashtra EDL. Approved by WHO, US EPA, and FDA.',
    color: 'from-primary-600 to-secondary-600'
  },
  {
    size: 'normal',
    icon: '🧪',
    title: 'Broad Spectrum',
    description: 'Effective on smallest pathogens (0.124 nm) across all states - liquid, solid & gas.',
    color: 'from-primary-400 to-primary-500'
  },
  {
    size: 'normal',
    icon: '💧',
    title: 'Low Concentration',
    description: 'Effective at 100 PPM vs 1000+ PPM for traditional disinfectants. More economical.',
    color: 'from-secondary-400 to-secondary-500'
  },
  {
    size: 'normal',
    icon: '🏥',
    title: 'Hospital-Safe',
    description: 'Meticulously formulated for precision & stability. Compatible with all hospital surfaces.',
    color: 'from-accent-400 to-accent-500'
  },
  {
    size: 'normal',
    icon: '🌬️',
    title: 'Odor Control',
    description: 'Deep penetrating vapor for complete odor elimination. Fresh, clean environment.',
    color: 'from-primary-500 to-secondary-500'
  },
];

export default function USPSection() {
  return (
    <section className="py-16 sm:py-24 bg-clinical-gray-50">
      {/* Removed background decorations for simplicity */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - simplified */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-block bg-primary-50 border border-primary-200 rounded-full px-6 py-2">
            <span className="text-primary-700 font-semibold text-sm">Why Choose Disintox®</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-gray-900 leading-tight px-4">
            The <span className="text-primary-600">Ultimate</span>
            <br />Disinfection Solution
          </h2>
          <p className="text-lg sm:text-xl text-clinical-gray-600 max-w-3xl mx-auto px-4">
            Discover the unique advantages of Chlorine Dioxide ClO₂ technology
          </p>
        </div>

        {/* Simplified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bentoFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg border border-clinical-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 min-h-[280px] flex flex-col">
              {/* Icon */}
              <div className="text-5xl mb-4">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-clinical-gray-900 mb-3 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-clinical-gray-600 leading-relaxed text-base flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA - simplified */}
        <div className="mt-16 text-center px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-white rounded-lg border border-clinical-gray-200 shadow-md px-8 py-6 max-w-2xl mx-auto">
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-sm text-clinical-gray-600 font-medium">Healthcare Facilities Trust Us</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-clinical-gray-200"></div>
            <div>
              <a href="/demo" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block">
                View Demo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
