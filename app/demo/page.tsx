import Link from 'next/link';

export const metadata = {
  title: 'Product Demonstration - Disintox®',
  description: 'Watch detailed video demonstrations of Disintox® chlorine dioxide products. Learn proper usage, application methods, and safety protocols.',
};

// Demo videos data
const demoVideos = [
  {
    id: 1,
    title: 'Disintox® Tablets - Complete Usage Guide',
    description: 'Learn how to properly dissolve and use Disintox® tablets for surface disinfection and fumigation.',
    videoUrl: '/demo.mp4',
    duration: '5:30',
    topics: [
      'Tablet dissolution procedure',
      'Proper concentration measurement',
      'Surface application techniques',
      'Fumigation setup',
      'Safety precautions'
    ]
  },
  {
    id: 2,
    title: 'Disintox® Gel - Application Demonstration',
    description: 'Step-by-step guide for applying Disintox® gel on vertical surfaces, bathrooms, and targeted areas.',
    videoUrl: '/demo.mp4',
    duration: '4:15',
    topics: [
      'Proper application technique',
      'Coverage guidelines',
      'Contact time requirements',
      'Bathroom sanitization',
      'Mold and odor removal'
    ]
  },
  {
    id: 3,
    title: 'Disintox® Solution - Spray & Fog Application',
    description: 'Comprehensive guide for using pre-mixed solution in spraying and fogging systems.',
    videoUrl: '/demo.mp4',
    duration: '6:45',
    topics: [
      'Spray bottle setup',
      'Fogging machine operation',
      'HVAC system disinfection',
      'Large area coverage',
      'Post-application ventilation'
    ]
  },
  {
    id: 4,
    title: 'Hospital Fumigation Protocol',
    description: 'Complete procedure for fumigating hospital rooms, operation theaters, and ICUs using Disintox®.',
    videoUrl: '/demo.mp4',
    duration: '8:20',
    topics: [
      'Room preparation',
      'Tablet calculation for room size',
      'Fumigation execution',
      'Air quality monitoring',
      'Room clearance protocol'
    ]
  },
  {
    id: 5,
    title: 'Water Treatment Application',
    description: 'How to use Disintox® tablets for water disinfection in tanks, pipelines, and treatment systems.',
    videoUrl: '/demo.mp4',
    duration: '5:50',
    topics: [
      'Water volume calculation',
      'Dosage determination',
      'Tablet dissolution in water',
      'Contact time requirements',
      'Water quality testing'
    ]
  },
  {
    id: 6,
    title: 'Safety & Storage Guidelines',
    description: 'Essential safety protocols, storage requirements, and handling procedures for Disintox® products.',
    videoUrl: '/demo.mp4',
    duration: '4:30',
    topics: [
      'Personal protective equipment (PPE)',
      'Storage conditions',
      'Handling precautions',
      'Emergency procedures',
      'Disposal guidelines'
    ]
  }
];

export default function DemoPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-clinical-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-clinical-gray-900 mb-4">
            Product Demonstrations
          </h1>
          <p className="text-xl text-clinical-gray-600 max-w-3xl mx-auto">
            Watch comprehensive video tutorials on how to properly use Disintox® products for maximum efficacy and safety.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm border border-clinical-gray-200 p-6 text-center">
            <div className="text-4xl mb-3">🎥</div>
            <div className="text-2xl font-bold text-primary-600 mb-2">6</div>
            <div className="text-sm text-clinical-gray-600">Video Tutorials</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-clinical-gray-200 p-6 text-center">
            <div className="text-4xl mb-3">⏱️</div>
            <div className="text-2xl font-bold text-primary-600 mb-2">35 min</div>
            <div className="text-sm text-clinical-gray-600">Total Duration</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-clinical-gray-200 p-6 text-center">
            <div className="text-4xl mb-3">✅</div>
            <div className="text-2xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-sm text-clinical-gray-600">Best Practices</div>
          </div>
        </div>

        {/* Video Demonstrations */}
        <div className="space-y-8">
          {demoVideos.map((video, index) => (
            <article
              key={video.id}
              className="bg-white rounded-lg shadow-sm border border-clinical-gray-200 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left: Video Player */}
                <div className="bg-clinical-gray-900 relative">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster="/logo.png"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-4 right-4 bg-clinical-gray-900 bg-opacity-75 text-white px-3 py-1 rounded text-sm font-semibold">
                    {video.duration}
                  </div>
                </div>

                {/* Right: Video Info */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Video {index + 1}
                    </span>
                    <span className="text-clinical-gray-500 text-sm">{video.duration}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-clinical-gray-900 mb-3">
                    {video.title}
                  </h2>

                  <p className="text-clinical-gray-700 mb-6 leading-relaxed">
                    {video.description}
                  </p>

                  <h3 className="text-lg font-bold text-clinical-gray-900 mb-3">
                    Topics Covered:
                  </h3>
                  <ul className="space-y-2">
                    {video.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-clinical-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-clinical-gray-200 p-8">
          <h2 className="text-2xl font-bold text-clinical-gray-900 mb-6 text-center">
            Need More Information?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📄</div>
              <h3 className="font-bold text-clinical-gray-900 mb-2">Documentation</h3>
              <p className="text-sm text-clinical-gray-600 mb-4">
                Download user manuals, safety data sheets, and technical specifications
              </p>
              <Link
                href="/resources"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                View Resources →
              </Link>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-bold text-clinical-gray-900 mb-2">Product Details</h3>
              <p className="text-sm text-clinical-gray-600 mb-4">
                Explore complete product specifications and comparison data
              </p>
              <Link
                href="/products"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                View Products →
              </Link>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-bold text-clinical-gray-900 mb-2">Contact Support</h3>
              <p className="text-sm text-clinical-gray-600 mb-4">
                Get personalized training and support from our technical team
              </p>
              <Link
                href="/contact"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started with Disintox®?
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Contact our team for product samples, pricing information, and procurement assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-clinical-gray-50 transition-colors"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
