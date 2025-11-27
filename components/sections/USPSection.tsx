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
    description: 'Patent No. 386338. Listed in Maharashtra EDL. Approved by WHO, US EPA, and FDA.',
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
    <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full px-8 py-3 shadow-lg transform hover:scale-105 transition-transform">
            <span className="font-bold text-base">⭐ Why Choose Disintox® ?⭐</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-Hospital-gray-900 leading-tight px-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Ultimate</span>
            <br />Disinfection Solution
          </h2>
          <p className="text-xl sm:text-2xl text-Hospital-gray-700 max-w-3xl mx-auto px-4 font-medium">
            Discover the unique advantages of Chlorine Dioxide ClO₂ technology
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Grid with spotlight effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bentoFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-primary-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:border-primary-400 transition-all duration-300 p-4 sm:p-6 min-h-[220px] sm:min-h-[280px] flex flex-col relative overflow-hidden group">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>

              {/* Icon with enhanced styling */}
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title with accent */}
              <h3 className="text-xl font-extrabold text-Hospital-gray-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-Hospital-gray-700 leading-relaxed text-base flex-grow font-medium">
                {feature.description}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-400 opacity-10 rounded-bl-full"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="mt-10 sm:mt-16 text-center px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-gradient-to-r from-white to-primary-50 rounded-2xl border-2 border-primary-300 shadow-2xl px-6 sm:px-8 py-6 sm:py-8 max-w-2xl mx-auto hover:shadow-primary-500/50 transition-all duration-300">
            <div>
              <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-2">1000+</div>
              <div className="text-base text-Hospital-gray-700 font-bold">Healthcare Facilities Trust Us</div>
            </div>
            <div className="hidden sm:block w-px h-20 bg-gradient-to-b from-primary-400 to-secondary-400"></div>
            <div>
              <a href="/demo" className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-10 py-4 rounded-xl font-bold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:scale-105">
                Gallery →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
