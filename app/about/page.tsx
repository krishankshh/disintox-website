import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'About Us - Dis-Infect',
  description: 'Learn about Dis-Infect Sales & Marketing LLP and our mission to provide hospital-grade disinfection solutions.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-Hospital-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-Hospital-gray-900 mb-4">
            About {COMPANY_INFO.brand}
          </h1>
          <p className="text-xl text-Hospital-gray-600 max-w-3xl mx-auto">
            Leading the way in hospital-grade Chlorine Dioxide (ClO₂) disinfection technology since {COMPANY_INFO.founded}.
          </p>
        </div>

        {/* Leadership Card */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-Hospital-gray-200 p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-primary-100 px-4 py-2 rounded-full text-sm font-semibold text-primary-700 mb-4">
                Leadership
              </div>
              <h2 className="text-4xl font-bold text-Hospital-gray-900 mb-2">
                Hemang Shah
              </h2>
              <p className="text-2xl font-semibold text-primary-600 mb-6">
                Founder & CEO
              </p>
              <p className="text-lg text-Hospital-gray-700 mb-8 leading-relaxed italic max-w-2xl mx-auto">
                [Bio message will be added here]
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:hemang@dis-infect.in"
                  className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <span>📧</span>
                  <span>hemang@dis-infect.in</span>
                </a>
                <a
                  href="tel:+919323122194"
                  className="bg-Hospital-gray-100 text-Hospital-gray-700 hover:bg-Hospital-gray-200 px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2"
                >
                  <span>📱</span>
                  <span>+91 9323122194</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg border-2 border-primary-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🎯</div>
              <h2 className="text-2xl font-bold text-Hospital-gray-900">Our Mission</h2>
            </div>
            <p className="text-Hospital-gray-700 leading-relaxed">
              Our Mission is to provide cost-effective, high-performance, and sustainable disinfection solutions that help healthcare institutions and government agencies maintain the highest hygiene and safety standards.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border-2 border-secondary-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🔭</div>
              <h2 className="text-2xl font-bold text-Hospital-gray-900">Our Vision</h2>
            </div>
            <p className="text-Hospital-gray-700 leading-relaxed">
              We envision becoming India's leading provider of advanced disinfection solutions, setting new benchmarks in hospital hygiene, infection control, and public health safety including emergency situations & pandemic preparedness.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-Hospital-gray-900 mb-2">Core Values</h2>
            <p className="text-Hospital-gray-600">The principles that guide our work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-lg p-6">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-lg font-bold text-Hospital-gray-900 mb-2">Innovation & Excellence</h3>
              <p className="text-sm text-Hospital-gray-700">Delivering high-quality, research-backed disinfectants for maximum protection.</p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-white border border-secondary-200 rounded-lg p-6">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-bold text-Hospital-gray-900 mb-2">Safety & Compliance</h3>
              <p className="text-sm text-Hospital-gray-700">Ensuring that our products meet national and international healthcare standards.</p>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-white border border-accent-200 rounded-lg p-6">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-Hospital-gray-900 mb-2">Integrity & Transparency</h3>
              <p className="text-sm text-Hospital-gray-700">Operating with ethical business practices and government procurement compliance.</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-lg p-6">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-lg font-bold text-Hospital-gray-900 mb-2">Sustainability & Responsibility</h3>
              <p className="text-sm text-Hospital-gray-700">Offering eco-friendly solutions that support green healthcare initiatives.</p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-white border border-secondary-200 rounded-lg p-6">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold text-Hospital-gray-900 mb-2">User-Centric Approach</h3>
              <p className="text-sm text-Hospital-gray-700">Prioritizing the needs of hospitals, government institutions, and healthcare professionals.</p>
            </div>
          </div>
        </section>

        {/* Government Benefits */}
        <section className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl shadow-xl p-8 mb-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Why Government Institutions Choose Us</h2>
            <p className="text-white opacity-90">Benefits for Government Hospitals & Healthcare Facilities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🏆</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Start Up India & Patented</h3>
                  <p className="text-sm text-white opacity-90">
                    We are registered in government initiative 'Start Up India' and our product is Patented, thus ensuring a trusted, compliant, transparent & hassle-free purchasing process.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💰</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Cost-Efficient & Scalable Solutions</h3>
                  <p className="text-sm text-white opacity-90">
                    Broad spectrum functionality, lower concentration methods as compared to conventional disinfectants, that helps in reducing costs. Also, long shelf life & easy storage, minimizing inventory management challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🏥</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Advanced Disinfection for Hospitals</h3>
                  <p className="text-sm text-white opacity-90">
                    Highly effective against bacteria, viruses, fungi, and spores, preventing HAIs. Ideal for ICUs, operation theatres, patient rooms, medical equipment, and hospital water treatment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Compliance with Government Policies</h3>
                  <p className="text-sm text-white opacity-90">
                    Meets the Health Department regulations and complies with Make in India & Atmanirbhar Bharat policies, promoting local manufacturing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 md:col-span-2">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🌿</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Eco-Friendly & Safe for Healthcare Use</h3>
                  <p className="text-sm text-white opacity-90">
                    Leaves no harmful residues, ensuring patient and staff safety. Effective in low concentration, hence it is non-carcinogenic, non-corrosive, no skin irritation or stain on fabric unlike other chemicals used.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-Hospital-gray-900 mb-6 text-center">Company Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-Hospital-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-Hospital-gray-900 mb-4">About Our Company</h3>
              <p className="text-Hospital-gray-700 mb-3">
                <strong>{COMPANY_INFO.name}</strong> is a pioneer in providing advanced disinfection solutions for healthcare facilities across India.
              </p>
              <p className="text-Hospital-gray-600">
                Founded in {COMPANY_INFO.founded}, we hold Patent No. {COMPANY_INFO.patentNumber} for our innovative Chlorine Dioxide (ClO₂) technology.
              </p>
            </div>

            <div className="bg-Hospital-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-Hospital-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-Hospital-gray-700">Address</p>
                  <p className="text-Hospital-gray-600">{COMPANY_INFO.address}</p>
                </div>
                <div>
                  <p className="font-semibold text-Hospital-gray-700">Phone</p>
                  <p className="text-Hospital-gray-600">{COMPANY_INFO.phone}</p>
                </div>
                <div>
                  <p className="font-semibold text-Hospital-gray-700">Email</p>
                  <p className="text-Hospital-gray-600">{COMPANY_INFO.email}</p>
                </div>
                <div>
                  <p className="font-semibold text-Hospital-gray-700">Website</p>
                  <p className="text-Hospital-gray-600">{COMPANY_INFO.website}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
