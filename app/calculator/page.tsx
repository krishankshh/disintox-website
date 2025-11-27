import PPMCalculator from "@/components/tools/PPMCalculator";

export const metadata = {
  title: "PPM Calculator | Disintox® - Dosage Calculator",
  description: "Calculate the correct dosage of Disintox® tablets for your disinfection needs. Easy-to-use PPM calculator for optimal Chlorine Dioxide (ClO<sub>2</sub>) concentration.",
};

// Risk Level Effectiveness data
const riskLevelData = {
  'High risk': [
    { location: 'All ICUs', level: 'High', ppm: '100-200 or above', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Casualty treatment area', level: 'High', ppm: '100-200 or above', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Haemodialysis unit', level: 'High', ppm: '100-200 or above', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Labour room', level: 'High', ppm: '100-200 or above', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Operation theatre', level: 'High', ppm: '100-200 or above', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Procedure rooms', level: 'High', ppm: '100-200 or above', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Respiratory therapy room/area', level: 'High', ppm: '100-200 or above', dirtyTime: '10 mins', cleanTime: '5 mins' }
  ],
  'Medium risk': [
    { location: 'Burn ward', level: 'High', ppm: '100 or above', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'CSSD', level: 'High', ppm: '100 or above', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Laboratory', level: 'High', ppm: '100 or above', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'General ward', level: 'High', ppm: '100 or above', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Patient rooms (Patient on isolation precautions)', level: 'High', ppm: '100 or above', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Soiled linen collection area', level: 'High', ppm: '100 or above', dirtyTime: '10 mins', cleanTime: '5 mins' }
  ],
  'Low risk': [
    { location: 'Echocardiography (No patients with respiratory infection)', level: 'Low', ppm: '100', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'General public areas', level: 'Low', ppm: '100', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Offices', level: 'Low', ppm: '100', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Patient rooms (Patient not on isolation precautions)', level: 'Low', ppm: '100', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Pharmacy', level: 'Low', ppm: '100', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Physiotherapy', level: 'Low', ppm: '100', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Radiology', level: 'Low', ppm: '100', dirtyTime: '10 mins', cleanTime: '5 mins' },
    { location: 'Reception area', level: 'Low', ppm: '100', dirtyTime: '10 mins', cleanTime: '5 mins' }
  ]
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

        {/* Risk Level Effectiveness Section */}
        <section className="mt-16 bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8">
          <h2 className="text-3xl font-bold text-Hospital-gray-900 mb-6 text-center">
            Risk Level Effectiveness
          </h2>
          <p className="text-center text-Hospital-gray-600 mb-8 max-w-3xl mx-auto">
            Disinfection guidelines by risk classification for optimal safety and efficacy
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-Hospital-gray-100">
                  <th className="border border-Hospital-gray-300 px-4 py-3 text-left font-bold text-Hospital-gray-900">
                    Risk Classification
                  </th>
                  <th className="border border-Hospital-gray-300 px-4 py-3 text-left font-bold text-Hospital-gray-900">
                    Location
                  </th>
                  <th className="border border-Hospital-gray-300 px-4 py-3 text-left font-bold text-Hospital-gray-900">
                    Disinfection Level Required
                  </th>
                  <th className="border border-Hospital-gray-300 px-4 py-3 text-left font-bold text-Hospital-gray-900">
                    PPM
                  </th>
                  <th className="border border-Hospital-gray-300 px-4 py-3 text-center font-bold text-Hospital-gray-900" colSpan={2}>
                    Contact Time
                  </th>
                </tr>
                <tr className="bg-Hospital-gray-100">
                  <th colSpan={4}></th>
                  <th className="border border-Hospital-gray-300 px-4 py-2 text-center font-semibold text-Hospital-gray-700 text-sm">
                    Dirty Condition
                  </th>
                  <th className="border border-Hospital-gray-300 px-4 py-2 text-center font-semibold text-Hospital-gray-700 text-sm">
                    Clean Condition
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(riskLevelData).map(([riskCategory, locations]) => (
                  locations.map((item, index) => (
                    <tr
                      key={`${riskCategory}-${index}`}
                      className={
                        riskCategory === 'High risk' ? 'bg-red-50' :
                          riskCategory === 'Medium risk' ? 'bg-yellow-50' :
                            'bg-orange-50'
                      }
                    >
                      {index === 0 && (
                        <td
                          className="border border-Hospital-gray-300 px-4 py-3 font-bold text-Hospital-gray-900 capitalize align-top"
                          rowSpan={locations.length}
                        >
                          <img
                            src={
                              riskCategory === 'High risk' ? '/risk-high.png' :
                                riskCategory === 'Medium risk' ? '/risk-medium.png' :
                                  '/risk-low.png'
                            }
                            alt={riskCategory}
                            className="w-32 mx-auto"
                          />
                        </td>
                      )}
                      <td className="border border-Hospital-gray-300 px-4 py-3 text-sm text-Hospital-gray-700">
                        {item.location}
                      </td>
                      <td className="border border-Hospital-gray-300 px-4 py-3 text-sm text-Hospital-gray-700 font-semibold">
                        {item.level}
                      </td>
                      <td className="border border-Hospital-gray-300 px-4 py-3 text-sm text-Hospital-gray-700 font-semibold">
                        {item.ppm}
                      </td>
                      <td className="border border-Hospital-gray-300 px-4 py-3 text-sm text-Hospital-gray-700 text-center">
                        {item.dirtyTime}
                      </td>
                      <td className="border border-Hospital-gray-300 px-4 py-3 text-sm text-Hospital-gray-700 text-center">
                        {item.cleanTime}
                      </td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        </section>

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
