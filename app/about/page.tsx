import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'About Us - Disintox®',
  description: 'Learn about Disinfect Sales & Marketing LLP and our mission to provide clinical-grade disinfection solutions.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-clinical">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-clinical-gray-900 mb-6">
              About {COMPANY_INFO.brand}
            </h1>
            <p className="text-xl text-clinical-gray-600 max-w-3xl mx-auto">
              Leading the way in clinical-grade chlorine dioxide disinfection technology since {COMPANY_INFO.founded}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-chlorine-50 border border-chlorine-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-clinical-gray-900 mb-4">Our Company</h3>
              <p className="text-clinical-gray-700 mb-3">
                <strong>{COMPANY_INFO.name}</strong> is a pioneer in providing advanced disinfection solutions for healthcare facilities across India.
              </p>
              <p className="text-clinical-gray-600">
                Founded in {COMPANY_INFO.founded}, we hold Indian Patent No. {COMPANY_INFO.patentNumber} for our innovative chlorine dioxide technology.
              </p>
            </div>

            <div className="bg-chlorine-50 border border-chlorine-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-clinical-gray-900 mb-4">Our Mission</h3>
              <p className="text-clinical-gray-700">
                To protect patients and healthcare workers by providing the most effective, safe, and environmentally responsible disinfection solutions available.
              </p>
            </div>
          </div>

          <div className="bg-clinical-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-clinical-gray-900 mb-6 text-center">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-clinical-gray-700 mb-1">Address</p>
                <p className="text-clinical-gray-600">{COMPANY_INFO.address}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-clinical-gray-700 mb-1">Phone</p>
                <p className="text-clinical-gray-600">{COMPANY_INFO.phone}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-clinical-gray-700 mb-1">Email</p>
                <p className="text-clinical-gray-600">{COMPANY_INFO.email}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-clinical-gray-700 mb-1">Website</p>
                <p className="text-clinical-gray-600">{COMPANY_INFO.website}</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-clinical-gray-600 mb-6">
              More detailed information about our company history, team, and certifications will be available soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#demo-form"
                className="bg-gradient-hero text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-clinical hover:shadow-xl transition-all transform hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                href="/"
                className="border-2 border-brand-red-600 text-brand-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-red-50 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
