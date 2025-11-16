import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'Contact Us - Disintox®',
  description: 'Get in touch with Disintox® for product inquiries, demos, and support.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-clinical">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-clinical-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-clinical-gray-600 max-w-3xl mx-auto">
              We&apos;re here to answer your questions and discuss how Disintox® can help protect your facility.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-chlorine-50 border border-chlorine-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-clinical-gray-900 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-clinical-gray-700 mb-1">Phone</p>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-brand-red-600 hover:underline">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-clinical-gray-700 mb-1">Email</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-red-600 hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-clinical-gray-700 mb-1">Website</p>
                    <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="text-brand-red-600 hover:underline">
                      {COMPANY_INFO.website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-clinical-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-clinical-gray-900 mb-4">Office Address</h3>
                <p className="text-clinical-gray-700">
                  {COMPANY_INFO.name}
                </p>
                <p className="text-clinical-gray-600 mt-2">
                  {COMPANY_INFO.address}
                </p>
              </div>

              <div className="bg-chlorine-50 border border-chlorine-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-clinical-gray-900 mb-4">Drug Licence Numbers</h3>
                <div className="space-y-2">
                  {COMPANY_INFO.drugLicenceNumbers.map((licence, index) => (
                    <p key={index} className="text-clinical-gray-700 font-mono text-sm">
                      {licence}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-clinical rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-clinical-gray-900 mb-4">
                Watch Product Demonstrations
              </h3>
              <p className="text-clinical-gray-700 mb-6">
                Experience the effectiveness of Disintox® firsthand. Watch our detailed product demonstration videos to see how our disinfection solutions work in real healthcare settings.
              </p>
              <Link
                href="/demo"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors text-center"
              >
                View Demonstrations →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-block border-2 border-brand-red-600 text-brand-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-red-50 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
