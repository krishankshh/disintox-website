import Link from 'next/link';
import { PRODUCT_FEATURES, ORGANISMS_KILLED, APPLICATION_METHODS, COMPARISON_DATA, FAQS } from '@/lib/constants';

export const metadata = {
  title: 'Products - Disintox® Chlorine Dioxide (ClO2) Disinfection',
  description: 'Disintox® Chlorine Dioxide (ClO2) products for healthcare disinfection. Effervescent tablets and ready-to-use gel with 99.99% efficacy against pathogens.',
};

// Product catalog data
const products = [
  {
    id: 1,
    anchor: 'tablets',
    name: 'Disintox® Tablets',
    tagline: 'Effervescent Chlorine Dioxide (ClO2) Tablets',
    description: 'Our flagship product - patented effervescent tablets that dissolve in water to create a powerful Chlorine Dioxide (ClO2) disinfection solution.',
    image: '/products/tablet.jpg',
    applications: ['Surface Disinfection', 'Fumigation', 'Water Treatment', 'Equipment Sterilization'],
    specifications: [
      { label: 'Efficacy', value: '99.99% pathogen elimination' },
      { label: 'Concentration', value: '100 PPM (adjustable)' },
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
    image: '/logo.png',
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
            Two powerful Disintox® Chlorine Dioxide (ClO2) formulations for superior healthcare disinfection. Patented technology, proven 99.99% efficacy.
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
                      View Demo →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Product Features Section */}
        <section id="features" className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8 mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-Hospital-gray-900 mb-6 text-center">
            Why Choose Disintox® Products?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PRODUCT_FEATURES.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-Hospital-gray-50 p-3 rounded-lg"
              >
                <svg className="w-5 h-5 text-secondary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-Hospital-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Organisms Killed Section */}
        <section id="efficacy" className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8 mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-Hospital-gray-900 mb-6 text-center">
            Proven Efficacy Against Pathogens
          </h2>
          <p className="text-center text-Hospital-gray-600 mb-8 max-w-3xl mx-auto">
            Disintox® eliminates 99.99% of the following categories of organisms
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(ORGANISMS_KILLED).map(([category, organisms]) => (
              <div key={category} className="bg-Hospital-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-600 mb-4 capitalize">{category}</h3>
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
                      className={`border border-Hospital-gray-300 px-4 py-3 text-left font-bold ${
                        index === 0 ? 'bg-primary-50 text-primary-700' : 'text-Hospital-gray-900'
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
                        className={`border border-Hospital-gray-300 px-4 py-3 text-sm ${
                          colIndex === 0 ? 'bg-primary-50 font-semibold text-primary-700' : 'text-Hospital-gray-700'
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
