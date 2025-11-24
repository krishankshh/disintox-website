import Link from 'next/link';

export const metadata = {
  title: 'Case Studies - Disintox®',
  description: 'Real-world success stories of Disintox® implementation in healthcare facilities across India. See proven results in infection control.',
};

// Case studies data - B2G focused
const caseStudies = [
  {
    id: 1,
    title: '500-Bed Government Hospital, Maharashtra',
    sector: 'Government Healthcare',
    location: 'Mumbai, Maharashtra',
    challenge: 'High rate of Hospital-Acquired Infections (HAI) in ICU and operation theaters. Traditional fumigation taking 12-14 hours causing operational delays.',
    solution: 'Implemented Disintox® chlorine dioxide tablets for daily fumigation of ICU, OT, and high-risk areas. Reduced fumigation time to 3-4 hours.',
    results: [
      '67% reduction in HAI within 3 months',
      '70% reduction in fumigation time',
      'Zero equipment corrosion reported',
      'Annual cost savings of ₹4.2 lakhs'
    ],
    metrics: {
      haiReduction: '67%',
      timeSaved: '70%',
      costSavings: '₹4.2L/year'
    },
    testimonial: 'Disintox® has significantly improved our infection control protocol. The faster fumigation time means less disruption to patient care.',
    designation: 'Chief Medical Officer'
  },
  {
    id: 2,
    title: 'Municipal Water Treatment Plant',
    sector: 'Water Treatment',
    location: 'Pune, Maharashtra',
    challenge: 'Chlorination creating harmful disinfection byproducts (DBPs). Need for safer alternative meeting WHO standards.',
    solution: 'Switched to Disintox® chlorine dioxide for water disinfection. Implemented at 100 PPM concentration vs 1000+ PPM with traditional chlorine.',
    results: [
      '99.99% pathogen elimination maintained',
      '80% reduction in DBP formation',
      'WHO and EPA compliance achieved',
      'Reduced chemical consumption by 90%'
    ],
    metrics: {
      efficacy: '99.99%',
      dbpReduction: '80%',
      chemicalSavings: '90%'
    },
    testimonial: 'The switch to chlorine dioxide has improved water quality while reducing our chemical footprint significantly.',
    designation: 'Plant Operations Manager'
  },
  {
    id: 3,
    title: 'Multi-Specialty Private Hospital Chain',
    sector: 'Private Healthcare',
    location: 'Delhi NCR',
    challenge: 'MDRO (Multi-Drug Resistant Organisms) outbreak affecting multiple wards. Need for broad-spectrum disinfection without equipment damage.',
    solution: 'Emergency implementation of Disintox® gel and tablet fumigation across all affected areas. Daily disinfection protocol established.',
    results: [
      'MDRO outbreak controlled in 2 weeks',
      '100% surface coverage achieved',
      'No damage to sensitive medical equipment',
      'Protocol adopted across 5 hospital locations'
    ],
    metrics: {
      outbreakControl: '2 weeks',
      coverage: '100%',
      equipmentDamage: '0%'
    },
    testimonial: 'Disintox® gave us the aggressive disinfection we needed without compromising our expensive equipment. A true game-changer.',
    designation: 'Director, Infection Control'
  },
  {
    id: 4,
    title: 'Central Government Laboratory',
    sector: 'Research & Laboratory',
    location: 'Bangalore, Karnataka',
    challenge: 'BSL-3 laboratory requiring stringent decontamination. Existing methods not achieving complete pathogen elimination in all phases.',
    solution: 'Deployed Disintox® for fumigation in gas phase for complete room sterilization. Effective on smallest pathogens (0.124 nm).',
    results: [
      'Complete sterility validation passed',
      'Effective in solid, liquid, and gas phases',
      'Reduced decontamination time by 60%',
      'Annual regulatory audit passed'
    ],
    metrics: {
      sterility: '100%',
      timeReduction: '60%',
      compliance: 'Passed'
    },
    testimonial: 'The ability to achieve complete decontamination in all three phases makes Disintox® invaluable for high-biosafety applications.',
    designation: 'Laboratory Safety Director'
  },
  {
    id: 5,
    title: 'District Hospital COVID-19 Isolation Ward',
    sector: 'Government Healthcare',
    location: 'Nashik, Maharashtra',
    challenge: 'COVID-19 isolation ward requiring rapid turnaround for bed availability. Need for proven efficacy against SARS-CoV-2.',
    solution: 'Implemented Disintox® for terminal cleaning of isolation rooms. 3-4 hour fumigation enabling same-day patient admissions.',
    results: [
      '99.99% efficacy against SARS-CoV-2',
      'Bed turnaround time reduced to 4 hours',
      '150+ additional patients treated per month',
      'Zero healthcare worker infections in treated areas'
    ],
    metrics: {
      virusEfficacy: '99.99%',
      turnaroundTime: '4 hrs',
      capacity: '+150/month'
    },
    testimonial: 'During the pandemic, Disintox® allowed us to maximize our isolation bed capacity while ensuring healthcare worker safety.',
    designation: 'District Health Officer'
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-Hospital-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-Hospital-gray-900 mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-Hospital-gray-600 max-w-3xl mx-auto">
            Real-world success stories from healthcare facilities and institutions across India using Disintox® for superior infection control.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-sm text-Hospital-gray-600">Facilities Served</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">99.99%</div>
            <div className="text-sm text-Hospital-gray-600">Average Efficacy</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">70%</div>
            <div className="text-sm text-Hospital-gray-600">Time Saved</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-sm text-Hospital-gray-600">Years Experience</div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {study.sector}
                  </span>
                  <span className="text-Hospital-gray-500 text-sm">📍 {study.location}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-Hospital-gray-900">
                  {study.title}
                </h2>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <h3 className="text-lg font-bold text-primary-600 mb-2">Challenge</h3>
                    <p className="text-Hospital-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-lg font-bold text-secondary-600 mb-2">Solution</h3>
                    <p className="text-Hospital-gray-700 leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-Hospital-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
                    <p className="text-Hospital-gray-700 italic mb-3">"{study.testimonial}"</p>
                    <p className="text-sm text-Hospital-gray-600 font-semibold">
                      — {study.designation}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Results */}
                  <div>
                    <h3 className="text-lg font-bold text-Hospital-gray-900 mb-3">Results Achieved</h3>
                    <ul className="space-y-3">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-Hospital-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Metrics */}
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-Hospital-gray-900 mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(study.metrics).map(([key, value], index) => (
                        <div key={index}>
                          <div className="text-2xl font-bold text-primary-600 mb-1">{value}</div>
                          <div className="text-xs text-Hospital-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-Hospital-gray-900 mb-4">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-Hospital-gray-600 mb-6 max-w-2xl mx-auto">
            Join 1000+ healthcare facilities across India that trust Disintox® for superior infection control and patient safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View Demo
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
