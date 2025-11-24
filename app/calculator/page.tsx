import PPMCalculator from "@/components/tools/PPMCalculator";

export const metadata = {
  title: "PPM Calculator | Disintox® - Dosage Calculator",
  description: "Calculate the correct dosage of Disintox® tablets for your disinfection needs. Easy-to-use PPM calculator for optimal chlorine dioxide concentration.",
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-Hospital-gray-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full px-8 py-3 shadow-lg mb-6">
            <span className="font-bold text-base">🧮 Dosage Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-Hospital-gray-900 mb-6">
            PPM Calculator
          </h1>
          <p className="text-xl text-Hospital-gray-600 max-w-3xl mx-auto">
            Calculate the perfect dosage for your disinfection requirements
          </p>
        </div>

        {/* Calculator Component */}
        <PPMCalculator />

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md border border-Hospital-gray-200 p-6">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-lg font-bold text-Hospital-gray-900 mb-2">Easy to Use</h3>
            <p className="text-sm text-Hospital-gray-600">
              Simply enter your water volume and desired PPM to get instant tablet calculations
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-Hospital-gray-200 p-6">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-bold text-Hospital-gray-900 mb-2">Accurate Dosing</h3>
            <p className="text-sm text-Hospital-gray-600">
              Based on Disintox® standard ratio: 1 tablet per 10L produces 100 PPM
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-Hospital-gray-200 p-6">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="text-lg font-bold text-Hospital-gray-900 mb-2">Optimal Results</h3>
            <p className="text-sm text-Hospital-gray-600">
              Achieve the perfect concentration for your specific disinfection needs
            </p>
          </div>
        </div>

        {/* Safety Notice */}
        <div className="mt-12 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">⚠️</div>
            <div>
              <h3 className="text-lg font-bold text-yellow-900 mb-2">Important Safety Information</h3>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Always follow manufacturer guidelines and safety protocols</li>
                <li>• Ensure proper ventilation during fumigation procedures</li>
                <li>• Wear appropriate PPE when handling concentrated solutions</li>
                <li>• Store tablets in a cool, dry place away from direct sunlight</li>
                <li>• Consult product documentation for specific application requirements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Help with Dosing?
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Our technical team can provide customized dosing recommendations for your specific application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-Hospital-gray-50 transition-colors shadow-lg"
            >
              Contact Technical Support
            </a>
            <a
              href="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Products
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
