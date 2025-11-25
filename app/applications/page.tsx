import { SECTORS, APPLICATION_METHODS } from "@/lib/constants";

export const metadata = {
  title: "Applications | Disintox® - Healthcare Disinfection Solutions",
  description: "Discover how Disintox® Chlorine Dioxide (ClO<sub>2</sub>) disinfection technology serves hospitals, water treatment, food processing, laboratories, and transport sectors with versatile application methods.",
};

export default function ApplicationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full px-8 py-3 shadow-lg mb-6">
              <span className="font-bold text-base">Applications</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-Hospital-gray-900 mb-6">
              Versatile Solutions for Every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Industry
              </span>
            </h1>
            <p className="text-xl text-Hospital-gray-600 max-w-3xl mx-auto">
              From healthcare to food processing, discover how Disintox® adapts to your specific disinfection needs
            </p>
          </div>
        </div>
      </section>

      {/* Solutions by Sector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-Hospital-gray-900 mb-4">
              Tailored Solutions for Every Healthcare Sector
            </h2>
            <p className="text-lg text-Hospital-gray-600 max-w-3xl mx-auto">
              From hospitals to laboratories, our disinfection technology adapts to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTORS.map((sector, index) => (
              <div
                key={index}
                id={sector.name.toLowerCase().replace(/\s+/g, '-')}
                className="bg-white border-2 border-Hospital-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:border-primary-400 transition-all duration-300 p-6 group scroll-mt-24"
              >
                <h3 className="text-2xl font-bold text-Hospital-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {sector.name}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-primary-600 mb-2 flex items-center gap-2">
                      <span className="text-lg">⚠️</span> Challenge:
                    </p>
                    <p className="text-sm text-Hospital-gray-600 leading-relaxed">{sector.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary-600 mb-2 flex items-center gap-2">
                      <span className="text-lg">✅</span> Solution:
                    </p>
                    <p className="text-sm text-Hospital-gray-600 leading-relaxed">{sector.solution}</p>
                  </div>
                  {sector.caseSnippet && (
                    <div className="pt-4 border-t border-Hospital-gray-200">
                      <p className="text-xs text-primary-600 italic font-medium bg-primary-50 p-3 rounded-lg">
                        💡 {sector.caseSnippet}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Methods */}
      <section className="py-20 bg-Hospital-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-Hospital-gray-900 mb-4">
              Flexible Application Methods
            </h2>
            <p className="text-lg text-Hospital-gray-600">
              Multiple delivery options for maximum effectiveness
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {APPLICATION_METHODS.map((method, index) => (
              <div
                key={index}
                className="bg-white border-2 border-primary-200 rounded-xl shadow-md hover:shadow-xl hover:border-primary-400 transition-all duration-300 p-6 text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {method === 'Wiping' && '🧽'}
                  {method === 'Mopping' && '🧹'}
                  {method === 'Spraying' && '💦'}
                  {method === 'Fogging' && '🌫️'}
                  {method === 'Air decontamination' && '🌬️'}
                  {method === 'Hand sanitizer' && '🧴'}
                  {method === 'Odor control' && '🌸'}
                </div>
                <h3 className="text-base font-bold text-Hospital-gray-900 group-hover:text-primary-600 transition-colors">
                  {method}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Implement Disintox® in Your Facility?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contact our team to discuss your specific application needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-Hospital-gray-50 transition-colors shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
