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
    <section className="py-32 bg-gradient-to-b from-white via-clinical-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-20 animate-float"></div>

      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 relative">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-block bg-primary-50 border border-primary-200 rounded-full px-6 py-2">
              <span className="text-primary-700 font-semibold text-sm">Why Choose Disintox®</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-clinical-gray-900 leading-tight">
              The <span className="gradient-text-premium">Ultimate</span>
              <br />Disinfection Solution
            </h2>
            <p className="text-2xl text-clinical-gray-600 max-w-3xl mx-auto font-light">
              Discover the unique advantages of Chlorine Dioxide ClO₂ technology
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {bentoFeatures.map((feature, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 50}
            >
              <div className={`
                bento-card group
                ${feature.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''}
                ${feature.size === 'wide' ? 'md:col-span-2' : ''}
                ${feature.size === 'tall' ? 'md:row-span-2' : ''}
                bg-white relative overflow-hidden
              `}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-8">
                  {/* Icon */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-clinical-gray-900 mb-4 leading-tight group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-clinical-gray-600 leading-relaxed text-lg flex-grow">
                    {feature.description}
                  </p>

                  {/* Decorative dot pattern */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 premium-card px-12 py-8">
              <div>
                <div className="text-5xl font-black gradient-text mb-2">1000+</div>
                <div className="text-sm text-clinical-gray-600 font-medium">Healthcare Facilities Trust Us</div>
              </div>
              <div className="w-px h-16 bg-clinical-gray-200"></div>
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
