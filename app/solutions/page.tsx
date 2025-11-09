import Link from 'next/link';

export const metadata = {
  title: 'Solutions - Disintox®',
  description: 'Comprehensive disinfection solutions for hospitals, water treatment, food processing, and more.',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-clinical">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-clinical-gray-900 mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl text-clinical-gray-600 mb-8 max-w-3xl mx-auto">
            Tailored disinfection solutions for hospitals, water treatment plants, food processing facilities, laboratories, and medical transport.
          </p>
          <div className="bg-chlorine-50 border border-chlorine-200 rounded-lg p-8 mb-8">
            <p className="text-lg text-clinical-gray-700 mb-4">
              This page is currently under development. Detailed industry-specific solutions will be available soon.
            </p>
            <p className="text-clinical-gray-600">
              For immediate consultation on solutions for your facility, please contact our team.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#demo-form"
              className="bg-gradient-hero text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-clinical hover:shadow-xl transition-all transform hover:scale-105"
            >
              Discuss Your Needs
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
    </main>
  );
}
