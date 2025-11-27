import Image from 'next/image';
import Hero from "@/components/sections/Hero";
import USPSection from "@/components/sections/USPSection";
import ApprovalsSection from "@/components/sections/ApprovalsSection";
import ImageComparisonSlider from "@/components/ui/ImageComparisonSlider";
import { PRODUCT_FEATURES } from "@/lib/constants";
import { ProductIcons } from "@/components/icons/ProductIcons";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Before/After Comparison Section - simplified */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto">
            <div className="bg-white border border-Hospital-gray-200 shadow-sm p-4 sm:p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">99.99%</div>
              <p className="text-sm text-Hospital-gray-600">Pathogen Elimination</p>
            </div>
            <div className="bg-white border border-Hospital-gray-200 shadow-sm p-4 sm:p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">5 Mins</div>
              <p className="text-sm text-Hospital-gray-600">Contact Time</p>
            </div>
            <div className="bg-white border border-Hospital-gray-200 shadow-sm p-4 sm:p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">Safe</div>
              <p className="text-sm text-Hospital-gray-600">Non-Toxic Formula</p>
            </div>
          </div>
        </div>
      </section>

      <USPSection />

      <ApprovalsSection />

      {/* Product Features - simplified */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-Hospital-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Unmatched</span> Product Advantages
            </h2>
            <p className="text-lg text-Hospital-gray-600">
              Discover why Disintox® outperforms conventional disinfectants
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {PRODUCT_FEATURES.map((feature, index) => {
              const isImage = feature.isImage || feature.icon.startsWith('/');

              return (
                <div
                  key={index}
                  className="bg-white border-2 border-Hospital-gray-200 p-4 sm:p-5 rounded-xl shadow-md flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 hover:shadow-lg hover:border-primary-300 transition-all group"
                >
                  <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform">
                    {isImage ? (
                      <div className="w-14 h-14 relative rounded-lg overflow-hidden">
                        <Image
                          src={feature.icon}
                          alt={feature.text}
                          width={56}
                          height={56}
                          className="object-cover rounded-lg"
                          quality={85}
                        />
                      </div>
                    ) : (
                      (() => {
                        const IconComponent = ProductIcons[feature.icon as keyof typeof ProductIcons];
                        return <IconComponent />;
                      })()
                    )}
                  </div>
                  <span className="text-sm sm:text-base text-Hospital-gray-700 font-medium text-center sm:text-left">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section - simplified */}
      <section className="py-10 sm:py-16 bg-primary-600 text-white">
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
