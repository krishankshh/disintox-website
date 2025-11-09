'use client';

import ScrollReveal from '../animations/ScrollReveal';

const features = [
  {
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.87-.96-7-5.17-7-9V8.3l7-3.5 7 3.5V11c0 3.83-3.13 8.04-7 9z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'ClO₂ is a most versatile molecule',
    description: 'effective in Liquid, Solid & Gaseous State.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        <circle cx="12" cy="10" r="2" fill="white"/>
        <circle cx="12" cy="14" r="2" fill="white"/>
        <circle cx="12" cy="18" r="1.5" fill="white"/>
      </svg>
    ),
    title: 'A broad spectrum microbial disinfectant',
    description: 'effective on Virus, Bacteria, Fungus, Mold & Pathogens.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        <path fill="white" d="M13 9h-2v2h2V9zm0 4h-2v6h2v-6z"/>
      </svg>
    ),
    title: 'ClO₂ is known for its fast-acting properties',
    description: '& its eco-friendly nature.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path fill="white" stroke="white" strokeWidth="2" d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Superior Disinfection Efficacy',
    description: 'Unlike traditional disinfectants, ClO₂ has a unique mode of action, targeting pathogens by disrupting their cell walls and enzymatic processes.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2"/>
      </svg>
    ),
    title: 'Safe for Hospital Use & Human Friendly',
    description: 'In a healthcare environment, the necessity of prioritizing safety is paramount. Our tablets meticulously dispense ClO₂ with precision & stability.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path fill="white" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
        <line x1="8" y1="12" x2="16" y2="12" stroke="red" strokeWidth="3"/>
      </svg>
    ),
    title: 'Non-Corrosive & Non Carcinogenic',
    description: 'Set your worries about potential harm to hospital surfaces and equipment aside. Our precise formulation ensures compatibility with an array of surfaces.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path fill="white" d="M9 10h6v1H9v-1zm0 3h6v1H9v-1zm0 3h4v1H9v-1z"/>
      </svg>
    ),
    title: 'Odor Control',
    description: 'Chlorine Dioxide Disintox® is one of the strongest and safest odor removal chemicals. It releases a deep penetrating vapor when in contact with water.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Convenient & Portable',
    description: 'Experience the unparalleled convenience and portability of our tablets. They empower you to maintain top-notch infection control standards across your entire facility.'
  }
];

export default function USPSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-clinical-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red-100 rounded-full blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green-100 rounded-full blur-3xl opacity-20 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <h2 className="section-title">
              Why Choose <span className="gradient-text">Disintox<sup className="text-3xl">®</sup></span>?
            </h2>
            <p className="section-subtitle">
              Discover the unique advantages of Chlorine Dioxide ClO₂ technology
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid with staggered animations */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 100}
            >
              <div className="flex flex-col md:flex-row items-start gap-8 group p-6 rounded-2xl hover:bg-white hover:shadow-card-hover transition-all duration-300">
                {/* Icon with enhanced effects */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center shadow-lg hover-lift group-hover:shadow-xl-colored transition-all duration-300 relative">
                    {feature.icon}
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-clinical-gray-900 mb-3 leading-tight group-hover:text-brand-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-clinical-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom accent bar with gradient */}
        <ScrollReveal direction="up" delay={800}>
          <div className="mt-20 h-3 bg-gradient-green rounded-full shadow-glow-green relative overflow-hidden">
            <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
