import Hero from "@/components/sections/Hero";
import USPSection from "@/components/sections/USPSection";
import ApprovalsSection from "@/components/sections/ApprovalsSection";
import ImageComparisonSlider from "@/components/ui/ImageComparisonSlider";
import { PRODUCT_FEATURES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Before/After Comparison Section - simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-Hospital-gray-900 mb-4">
              See The <span className="text-primary-600">Disintox® Difference</span>
            </h2>
            <p className="text-lg text-Hospital-gray-600 max-w-2xl mx-auto">
              Witness the powerful cleaning and disinfection results. Drag the slider to compare before and after treatment.
            </p>
          </div>

          <ImageComparisonSlider
            beforeImage="/comparison-before.png"
            afterImage="/comparison-after.png"
            beforeLabel="Before Disinfection"
            afterLabel="After Disintox®"
            className="max-w-4xl mx-auto"
          />

          {/* Stats below comparison - simplified */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white border border-Hospital-gray-200 shadow-sm p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">99.99%</div>
              <p className="text-sm text-Hospital-gray-600">Pathogen Elimination</p>
            </div>
            <div className="bg-white border border-Hospital-gray-200 shadow-sm p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">30 Sec</div>
              <p className="text-sm text-Hospital-gray-600">Contact Time</p>
            </div>
            <div className="bg-white border border-Hospital-gray-200 shadow-sm p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">Safe</div>
              <p className="text-sm text-Hospital-gray-600">Non-Toxic Formula</p>
            </div>
          </div>
        </div>
      </section>

      <USPSection />

      <ApprovalsSection />

      {/* Product Features - simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-Hospital-gray-900 mb-4">
              Unmatched Product Advantages
            </h2>
            <p className="text-lg text-Hospital-gray-600">
              Why Disintox® outperforms conventional disinfectants
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PRODUCT_FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-Hospital-gray-200 p-4 rounded-lg shadow-sm flex items-center space-x-3"
              >
                <svg className="w-5 h-5 text-secondary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-Hospital-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - simplified */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Disinfection Protocol?
          </h2>
          <p className="text-lg mb-8">
            Join hundreds of healthcare facilities across India trusting Disintox® for superior infection control
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-Hospital-gray-50 transition-colors"
            >
              View Demo →
            </a>
            <a
              href="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Products →
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
