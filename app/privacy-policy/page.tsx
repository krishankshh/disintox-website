import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'Privacy Policy - Disintox®',
  description: 'Privacy policy for Disintox® website and services.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-clinical">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-clinical-gray-900 mb-6">
            Privacy Policy
          </h1>

          <div className="prose prose-clinical max-w-none">
            <p className="text-clinical-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-clinical-gray-900 mb-4">Introduction</h2>
              <p className="text-clinical-gray-700 mb-4">
                {COMPANY_INFO.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-clinical-gray-900 mb-4">Information We Collect</h2>
              <p className="text-clinical-gray-700 mb-4">
                When you request a product demonstration or contact us, we may collect:
              </p>
              <ul className="list-disc pl-6 text-clinical-gray-700 space-y-2 mb-4">
                <li>Name and professional title</li>
                <li>Organization name and type</li>
                <li>Contact information (email, phone number)</li>
                <li>Industry sector and specific requirements</li>
                <li>Any additional information you choose to provide</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-clinical-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-clinical-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-clinical-gray-700 space-y-2 mb-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Schedule and conduct product demonstrations</li>
                <li>Send you product information and updates</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-clinical-gray-900 mb-4">Data Security</h2>
              <p className="text-clinical-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-clinical-gray-900 mb-4">Your Rights</h2>
              <p className="text-clinical-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-clinical-gray-700 space-y-2 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-clinical-gray-900 mb-4">Contact Us</h2>
              <p className="text-clinical-gray-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-clinical-gray-50 rounded-lg p-6">
                <p className="text-clinical-gray-700"><strong>Email:</strong> {COMPANY_INFO.email}</p>
                <p className="text-clinical-gray-700"><strong>Phone:</strong> {COMPANY_INFO.phone}</p>
                <p className="text-clinical-gray-700 mt-2"><strong>Address:</strong> {COMPANY_INFO.address}</p>
              </div>
            </section>

            <div className="bg-chlorine-50 border border-chlorine-200 rounded-lg p-6 mt-8">
              <p className="text-sm text-clinical-gray-600">
                <strong>Note:</strong> This is a basic privacy policy template. A comprehensive privacy policy will be published soon to comply with all applicable data protection regulations.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
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
