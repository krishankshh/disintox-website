import Link from 'next/link';
import { ORGANISMS_KILLED, APPLICATION_METHODS, COMPARISON_DATA, FAQS } from '@/lib/constants';

export const metadata = {
  title: 'Products - Disintox® Chlorine Dioxide (ClO<sub>2</sub>) Disinfection',
  description: 'Disintox® Chlorine Dioxide (ClO<sub>2</sub>) products for healthcare disinfection. Effervescent tablets and ready-to-use gel with 99.99% efficacy against pathogens.',
};

// Product catalog data
const products = [
  {
    id: 1,
    anchor: 'tablets',
    name: 'Disintox® Tablets',
    tagline: 'Effervescent Chlorine Dioxide (ClO2) Tablets',
    description: 'Our flagship product - patented effervescent tablets that dissolve in water to create a powerful Chlorine Dioxide (ClO<sub>2</sub>) disinfection solution.',
    image: '/products/tablet.jpg',
    applications: ['Surface Disinfection', 'Fumigation', 'Water Treatment', 'Equipment Sterilization'],
    specifications: [
      { label: 'Efficacy', value: '99.99% pathogen elimination' },
      { label: 'Concentration', value: '100 - 120 PPM (adjustable)' },
      { label: 'Contact Time', value: '30 seconds - 4 hours' },
      { label: 'Coverage', value: '1 tablet per 10L water' },
      { label: 'Shelf Life', value: '24 months' },
      { label: 'Storage', value: 'Cool, dry place' }
    ],
    packaging: [
      '10 tablets per strip',
      '100 tablets per box',
      'Bulk packaging available'
    ],
    advantages: [
      'No machinery required - simple dissolution in water',
      'Portable and easy to transport',
      'Long shelf life in tablet form',
      'Precise dosing control',
      'Cost-effective for large-scale use'
    ]
  },
  {
    id: 2,
    anchor: 'gel',
    name: 'Disintox® Gel',
    tagline: 'Ready-to-Use Chlorine Dioxide (ClO2) Gel',
    description: 'Viscous gel formulation ideal for vertical surfaces, equipment, and targeted application areas requiring extended contact time.',
    image: '/products/gel.png',
    applications: ['Vertical Surface Disinfection', 'Bathroom Sanitization', 'Mold Removal', 'Odor Elimination'],
    specifications: [
      { label: 'Efficacy', value: '99.99% pathogen elimination' },
      { label: 'Form', value: 'Viscous gel' },
      { label: 'Contact Time', value: '2-5 minutes' },
      { label: 'pH', value: 'Neutral (6.5-7.5)' },
      { label: 'Shelf Life', value: '12 months' },
      { label: 'Ready to Use', value: 'No dilution required' }
    ],
    packaging: [
      '500ml bottles',
      '1L bottles',
      '5L containers'
    ],
    advantages: [
      'Adheres to vertical surfaces',
      'Ready-to-use formulation',
      'Extended contact time',
      'Ideal for restrooms and wet areas',
      'Deep penetration for mold and odor'
    ]
  },
];

// Dimension Scale data
const dimensionScale = [
  { name: 'ClO₂ Molecule', size: '0.124 nm', subtext: '(124 pm)' },
  { name: 'Norovirus', size: '27-38 nm', subtext: '' },
  { name: 'HIV', size: '120 nm', subtext: '' },
  { name: 'Mycobacterium tuberculosis', size: '2-4 μm', subtext: '' },
  { name: 'Fog / Mist Droplet', size: '5 μm', subtext: '' },
];

// Tested Organisms data
const testedOrganisms = {
  'Bacteria': [
    'Blakeslea tripora',
    'E. coli O157:H7',
    'Erwinia carotovora',
    'Fusarium sambucinum',
    'Legionella',
    'Listeria monocytogenes',
    'Salmonella enterica',
    'Shigella',
    'Staphylococcus aureus',
    'Many others'
  ],
  'Viruses': [
    'COVID-19 (SARS-COV-2)',
    'Influenza-A virus',
    'Mouse Hepatitis Virus',
    'Poliovirus-1',
    'Rotavirus',
    'Rhinovirus',
    'Influenza A virus (formerly called swine flu)',
    'Foot and Mouth disease',
    'Many others'
  ],
  'Bacterial Spores': [
    'Bacillus anthracis',
    'Bacillus pumilus',
    'Bacillus subtilis (multiple)',
    'Clostridium sporogenes',
    'Many others'
  ],
  'Algae/Fungi/Mold/Yeast': [
    'Aspergillus clavatus',
    'Aspergillus (multiple)',
    'Candida (multiple)',
    'Fusarium solani',
    'Many others'
  ]
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-Hospital-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-Hospital-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-Hospital-gray-600 max-w-3xl mx-auto">
            Two powerful Disintox® Chlorine Dioxide (ClO<sub>2</sub>) formulations for superior healthcare disinfection. Patented technology, proven 99.99% efficacy.
          </p>
        </div>

        {/* Product Cards */}
        <div className="space-y-12 mb-16">
          {products.map((product, index) => (
            <article
              key={product.id}
              id={product.anchor}
              className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 overflow-hidden scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Left: Product Image & Basic Info */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8 mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto mx-auto"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-Hospital-gray-900 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-primary-600 font-semibold mb-4">{product.tagline}</p>
                  <p className="text-Hospital-gray-700 leading-relaxed">{product.description}</p>
                </div>

                {/* Middle: Specifications & Applications */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Applications */}
                  <div>
                    <h3 className="text-lg font-bold text-Hospital-gray-900 mb-3">Applications</h3>
                    <div className="space-y-2">
                      {product.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-secondary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-Hospital-gray-700 text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h3 className="text-lg font-bold text-Hospital-gray-900 mb-3">Specifications</h3>
                    <div className="space-y-2">
                      {product.specifications.map((spec, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-Hospital-gray-600 font-medium">{spec.label}:</span>
                          <span className="text-Hospital-gray-900 font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Packaging */}
                  <div>
                    <h3 className="text-lg font-bold text-Hospital-gray-900 mb-3">Packaging Options</h3>
                    <ul className="space-y-1">
                      {product.packaging.map((pack, idx) => (
                        <li key={idx} className="text-Hospital-gray-700 text-sm">• {pack}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Advantages */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-bold text-Hospital-gray-900 mb-4">Key Advantages</h3>
                  <ul className="space-y-3">
                    {product.advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary-600 font-bold text-xl flex-shrink-0">+</span>
                        <span className="text-Hospital-gray-700 text-sm">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-Hospital-gray-200">
                    <Link
                      href="/demo"
                      className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block w-full text-center"
                    >
                      Gallery →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dimension Scale Section */}
        <section className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8 mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-Hospital-gray-900 mb-6 text-center">
            Dimension Scale
          </h2>
          <p className="text-center text-Hospital-gray-600 mb-8 max-w-3xl mx-auto">
            Understanding the size spectrum of organisms that Disintox® effectively eliminates
          </p>

          {/* Horizontal Timeline */}
          <div className="relative overflow-x-auto pb-8">
            {/* Background gradient */}
            <div className="bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 rounded-xl p-8 min-w-[900px]">
              {/* Scale baseline */}
              <div className="relative">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 rounded-full"></div>

                {/* Timeline items */}
                <div className="flex items-end justify-around pb-4 relative">
                  {dimensionScale.map((item, index) => {
                    // Variable sizes for visual hierarchy
                    const sizes = ['w-8 h-8', 'w-10 h-10', 'w-12 h-12', 'w-16 h-16', 'w-20 h-20'];
                    const markerHeights = [60, 80, 100, 120, 140];

                    return (
                      <div key={index} className="flex flex-col items-center relative" style={{ marginBottom: `${markerHeights[index]}px` }}>
                        {/* Organism/particle visual */}
                        <div className={`${sizes[index]} rounded-full mb-4 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 ${index === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-700 animate-pulse' :
                          index === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-700' :
                            index === 2 ? 'bg-gradient-to-br from-purple-500 to-purple-700' :
                              index === 3 ? 'bg-gradient-to-br from-secondary-500 to-secondary-700' :
                                'bg-gradient-to-br from-accent-500 to-accent-700'
                          }`}>
                          <svg className="w-1/2 h-1/2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            {index === 0 ? (
                              // Molecule icon
                              <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 2a5 5 0 110 10 5 5 0 010-10z" />
                            ) : index === 1 || index === 2 ? (
                              // Virus icon
                              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12z" />
                            ) : index === 3 ? (
                              // Bacteria icon
                              <circle cx="10" cy="10" r="4" />
                            ) : (
                              // Droplet icon
                              <path d="M10 2s-4 4.5-4 8a4 4 0 008 0c0-3.5-4-8-4-8z" />
                            )}
                          </svg>
                        </div>

                        {/* Connecting line to baseline */}
                        <div className="w-0.5 bg-gradient-to-b from-Hospital-gray-400 to-Hospital-gray-600 absolute bottom-0" style={{ height: `${markerHeights[index]}px`, top: 'auto' }}></div>

                        {/* Info card */}
                        <div className="bg-white rounded-lg shadow-md p-4 text-center border-2 border-Hospital-gray-200 min-w-[140px] relative z-10">
                          <div className="font-bold text-primary-700 text-xl mb-1">
                            {item.size}
                          </div>
                          {item.subtext && (
                            <div className="text-xs text-Hospital-gray-500 mb-2 italic">
                              {item.subtext}
                            </div>
                          )}
                          <div className="text-xs text-Hospital-gray-700 font-semibold leading-tight">
                            {item.name}
                          </div>
                          {/* Arrow pointer */}
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-Hospital-gray-200"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Scale labels */}
              <div className="flex justify-between items-center mt-6 px-4">
                <div className="text-xs font-semibold text-primary-700 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Smallest (nm)
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-Hospital-gray-900 uppercase tracking-wide">Size Scale</div>
                  <div className="text-xs text-Hospital-gray-600">Nanometers (nm) to Micrometers (μm)</div>
                </div>
                <div className="text-xs font-semibold text-accent-700 flex items-center gap-2">
                  Largest (μm)
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tested Organisms Section */}
        <section id="efficacy" className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8 mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-Hospital-gray-900 mb-6 text-center">
            Tested Organisms
          </h2>
          <p className="text-center text-Hospital-gray-600 mb-8 max-w-3xl mx-auto">
            Disintox® is known to be effective on these tested organisms:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(testedOrganisms).map(([category, organisms]) => (
              <div key={category} className="bg-Hospital-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-600 mb-4 uppercase">{category}</h3>
                <ul className="space-y-2">
                  {organisms.map((organism, index) => (
                    <li key={index} className="text-sm text-Hospital-gray-700 flex items-start gap-2">
                      <span className="text-secondary-600">•</span>
                      <span>{organism}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Application Methods Section */}
        <section className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-bold text-Hospital-gray-900 mb-6 text-center">
            Multiple Application Methods
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {APPLICATION_METHODS.map((method, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-4 rounded-lg text-center"
              >
                <p className="text-sm font-semibold text-Hospital-gray-900">{method}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-bold text-Hospital-gray-900 mb-6 text-center">
            Comparative Analysis
          </h2>
          <p className="text-center text-Hospital-gray-600 mb-8">
            See how Disintox® (ClO₂) compares to conventional disinfectants
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-Hospital-gray-100">
                  <th className="border border-Hospital-gray-300 px-4 py-3 text-left font-bold text-Hospital-gray-900">
                    Metric
                  </th>
                  {COMPARISON_DATA.agents.map((agent, index) => (
                    <th
                      key={index}
                      className={`border border-Hospital-gray-300 px-4 py-3 text-left font-bold ${index === 0 ? 'bg-primary-50 text-primary-700' : 'text-Hospital-gray-900'
                        }`}
                    >
                      {agent}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.metrics.map((metric, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-Hospital-gray-50'}>
                    <td className="border border-Hospital-gray-300 px-4 py-3 font-semibold text-Hospital-gray-900">
                      {metric.label}
                    </td>
                    {metric.values.map((value, colIndex) => (
                      <td
                        key={colIndex}
                        className={`border border-Hospital-gray-300 px-4 py-3 text-sm ${colIndex === 0 ? 'bg-primary-50 font-semibold text-primary-700' : 'text-Hospital-gray-700'
                          }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-bold text-Hospital-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {FAQS.map((faq, index) => (
              <div key={index} className="border-b border-Hospital-gray-200 pb-6 last:border-0">
                <h3 className="text-lg font-bold text-Hospital-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-Hospital-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Upgrade Your Disinfection Protocol?
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Contact our team for product samples, technical specifications, pricing, and procurement documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-Hospital-gray-50 transition-colors"
            >
              View Product Demo
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Download Documentation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
