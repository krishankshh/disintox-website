import Hero from "@/components/sections/Hero";
import USPSection from "@/components/sections/USPSection";
import DemoForm from "@/components/forms/DemoForm";
import { APPROVALS, SECTORS, PRODUCT_FEATURES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />

      <USPSection />

      {/* Approvals & Certifications Section */}
      <section className="py-16 bg-clinical-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-clinical-gray-900 mb-12">
            Certified & Approved By Leading Regulatory Bodies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {APPROVALS.map((approval) => (
              <div
                key={approval.organization}
                className="flex flex-col items-center text-center space-y-2"
              >
                <div className="h-16 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary-600">{approval.organization}</div>
                </div>
                <p className="text-xs text-clinical-gray-600">{approval.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Sector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-clinical-gray-900 mb-4">
              Tailored Solutions for Every Healthcare Sector
            </h2>
            <p className="text-lg text-clinical-gray-600 max-w-3xl mx-auto">
              From hospitals to laboratories, our disinfection technology adapts to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTORS.map((sector, index) => (
              <div
                key={index}
                className="border-2 border-clinical-gray-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-clinical transition-all"
              >
                <h3 className="text-xl font-heading font-bold text-clinical-gray-900 mb-3">
                  {sector.name}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-accent-red mb-1">Challenge:</p>
                    <p className="text-sm text-clinical-gray-600">{sector.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-chlorine-600 mb-1">Solution:</p>
                    <p className="text-sm text-clinical-gray-600">{sector.solution}</p>
                  </div>
                  {sector.caseSnippet && (
                    <div className="pt-4 border-t border-clinical-gray-200">
                      <p className="text-xs text-primary-600 italic">{sector.caseSnippet}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-gradient-clinical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-clinical-gray-900 mb-4">
              Unmatched Product Advantages
            </h2>
            <p className="text-lg text-clinical-gray-600">
              Why Disintox® outperforms conventional disinfectants
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PRODUCT_FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-card flex items-center space-x-3"
              >
                <svg className="w-5 h-5 text-chlorine-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-clinical-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Upgrade Your Disinfection Protocol?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join hundreds of healthcare facilities across India trusting Disintox® for superior infection control
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo-form"
              className="btn-primary group text-center"
            >
              <span className="relative z-10">Request a Demo</span>
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/products"
              className="btn-secondary group text-center"
            >
              View Products
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      <DemoForm />
    </>
  );
}
