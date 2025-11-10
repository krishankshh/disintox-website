'use client';

import ScrollReveal from '../animations/ScrollReveal';

const bentoFeatures = [
  {
    size: 'large', // 2x2
    icon: '🛡️',
    title: '99.99% Pathogen Elimination',
    description: 'Proven efficacy against bacteria, viruses, fungi, spores, and antibiotic-resistant strains including COVID-19, SARS-CoV-2, and MDRO.',
    color: 'from-primary-500 to-primary-600'
  },
  {
    size: 'normal',
    icon: '⚡',
    title: 'Fast-Acting Formula',
    description: 'Rapid 3-4 hour fumigation vs conventional 12-14 hours.',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    size: 'normal',
    icon: '🌿',
    title: 'Safe & Non-Toxic',
    description: 'Non-corrosive, non-carcinogenic with no harmful residues.',
    color: 'from-accent-500 to-accent-600'
  },
  {
    size: 'wide', // 2x1
    icon: '🏆',
    title: 'Patented Technology',
    description: 'Indian Patent No. 386338. Listed in Maharashtra EDL. Approved by WHO, US EPA, and FDA across 5 countries.',
    color: 'from-primary-600 to-secondary-600'
  },
  {
    size: 'normal',
    icon: '🧪',
    title: 'Broad Spectrum',
    description: 'Effective on smallest pathogens (0.124 nm) and across all states - liquid, solid & gas.',
    color: 'from-primary-400 to-primary-500'
  },
  {
    size: 'normal',
    icon: '💧',
    title: 'Low Concentration',
    description: 'Effective at 100 PPM vs 1000+ PPM for traditional disinfectants.',
    color: 'from-secondary-400 to-secondary-500'
  },
  {
    size: 'tall', // 1x2
    icon: '🏥',
    title: 'Hospital-Safe',
    description: 'Meticulously formulated for precision & stability. Compatible with all hospital surfaces and equipment.',
    color: 'from-accent-400 to-accent-500'
  },
  {
    size: 'normal',
    icon: '🌬️',
    title: 'Odor Control',
    description: 'Deep penetrating vapor for complete odor elimination.',
    color: 'from-primary-500 to-secondary-500'
  },
];

export default function USPSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-clinical-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-20 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
            <div className="inline-block bg-primary-50 border border-primary-200 rounded-full px-4 sm:px-6 py-2">
              <span className="text-primary-700 font-semibold text-xs sm:text-sm">Why Choose Disintox®</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-clinical-gray-900 leading-tight px-4">
              The <span className="gradient-text-premium">Ultimate</span>
              <br />Disinfection Solution
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-clinical-gray-600 max-w-3xl mx-auto font-light px-4">
              Discover the unique advantages of Chlorine Dioxide ClO₂ technology
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid - Responsive, no overlaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bentoFeatures.map((feature, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 50}
            >
              <div className={`
                bento-card group
                ${feature.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''}
                ${feature.size === 'wide' ? 'md:col-span-2' : ''}
                ${feature.size === 'tall' ? 'md:col-span-1 lg:col-span-1' : ''}
                bg-white relative overflow-hidden min-h-[280px]
              `}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
                  {/* Icon */}
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-clinical-gray-900 mb-3 sm:mb-4 leading-tight group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-clinical-gray-600 leading-relaxed text-base sm:text-lg flex-grow">
                    {feature.description}
                  </p>

                  {/* Decorative dot pattern */}
                  <div className="hidden sm:block absolute bottom-6 sm:bottom-8 right-6 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                      <div className="w-2 h-2 rounded-full bg-secondary-400"></div>
                      <div className="w-2 h-2 rounded-full bg-secondary-400"></div>
                      <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA - Responsive */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 premium-card px-6 sm:px-12 py-6 sm:py-8 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">1000+</div>
                <div className="text-xs sm:text-sm text-clinical-gray-600 font-medium">Healthcare Facilities Trust Us</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-clinical-gray-200"></div>
              <div>
                <a href="#demo-form" className="btn-primary inline-block">
                  Join Them Today →
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
