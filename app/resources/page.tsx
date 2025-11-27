import Link from 'next/link';

export const metadata = {
  title: 'Resources & Downloads - Disintox®',
  description: 'Watch video demonstrations and download product specifications, certificates, technical data sheets, and documentation for Disintox® Chlorine Dioxide (ClO₂) disinfection products.',
};

// Video demonstrations data
const demoVideos = [
  {
    id: 1,
    title: 'Disintox® Product Overview & Usage Guide',
    description: 'Comprehensive guide on Disintox® tablets and gel - proper usage, application methods, and safety protocols.',
    videoUrl: '/demo.mp4',
    duration: '5:30',
    thumbnail: '/logo.png'
  },
  {
    id: 2,
    title: 'Hospital Fumigation Protocol',
    description: 'Step-by-step demonstration of hospital room fumigation using Disintox® tablets for complete disinfection.',
    videoUrl: '/demo.mp4',
    duration: '6:45',
    thumbnail: '/logo.png'
  },
  {
    id: 3,
    title: 'Water Treatment Application',
    description: 'How to use Disintox® for water disinfection in tanks, pipelines, and treatment systems.',
    videoUrl: '/demo.mp4',
    duration: '4:50',
    thumbnail: '/logo.png'
  }
];

// Resource categories for B2G procurement
const resourceCategories = [
  {
    title: 'Product Documentation',
    description: 'Detailed specifications and technical information',
    icon: '📄',
    resources: [
      {
        name: 'Disintox® Product Brochure',
        description: 'Comprehensive overview of Disintox® products, applications, and benefits',
        fileSize: 'PDF, 3.1 MB',
        file: '/pdfs/disintox-brochure.pdf'
      },
      {
        name: 'Product Leaflet',
        description: 'Quick reference guide for Disintox® disinfection products',
        fileSize: 'PDF, 1.6 MB',
        file: '/pdfs/disinfect-leaflet.pdf'
      }
    ]
  },
  {
    title: 'Certificates & Approvals',
    description: 'Regulatory approvals and certifications',
    icon: '🏆',
    resources: [
      {
        name: 'Patent Certificate (Govt. of India)',
        description: 'Patent No. 386338 - Official government patent certificate',
        fileSize: 'PDF, 657 KB',
        file: '/pdfs/patent-certificate.pdf'
      },
      {
        name: 'Maharashtra EDL Listing',
        description: 'Essential Drug List approval certificate',
        fileSize: 'PDF, 413 KB',
        file: '/pdfs/edl-maharashtra.pdf'
      },
      {
        name: 'FDA Approval (5 Countries)',
        description: 'FDA approval documentation from 5 countries for medical device sterilization',
        fileSize: 'PDF, 2.4 MB',
        file: '/pdfs/fda-5-countries.pdf'
      }
    ]
  },
  {
    title: 'Safety & Compliance',
    description: 'Efficacy reports and test documentation',
    icon: '🔒',
    resources: [
      {
        name: 'Dubai Municipality Report',
        description: 'Water safety and disinfection efficacy test report',
        fileSize: 'PDF, 157 KB',
        file: '/pdfs/dubai-municipality.pdf'
      },
      {
        name: 'MCGM Microbiology Report',
        description: 'Municipal Corporation of Greater Mumbai laboratory test results and official correspondence',
        fileSize: 'PDF, 567 KB',
        file: '/pdfs/mcgm-microbiology-report.pdf'
      },
      {
        name: 'University of Antioquia COVID-19 Study',
        description: 'Research report and case study on SARS-CoV-2 efficacy',
        fileSize: 'PDF, 4.8 MB',
        file: '/pdfs/university-antioquia-covid19.pdf'
      },
      {
        name: 'Shriram Institute Lab Report',
        description: 'Comprehensive laboratory efficacy test report',
        fileSize: 'PDF, 6.0 MB',
        file: '/pdfs/shriram-institute-report.pdf'
      }
    ]
  },
  {
    title: 'Tender Documents',
    description: 'Reference materials for procurement',
    icon: '📋',
    resources: [
      {
        name: 'NMMC Work Order',
        description: 'Navi Mumbai Municipal Corporation work order (Reference for tenders)',
        fileSize: 'PDF, 190 KB',
        file: '/pdfs/nmmc-work-order.pdf'
      }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-Hospital-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-Hospital-gray-900 mb-4">
            Resources & Downloads
          </h1>
          <p className="text-xl text-Hospital-gray-600 max-w-3xl mx-auto">
            Access product specifications, certificates, technical data sheets, and documentation for procurement and compliance.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resourceCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8">
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{category.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-Hospital-gray-900 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-Hospital-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Resources Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.resources.map((resource, resourceIndex) => (
                  <div
                    key={resourceIndex}
                    className="border border-Hospital-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-Hospital-gray-900 mb-2">
                      {resource.name}
                    </h3>
                    <p className="text-sm text-Hospital-gray-600 mb-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-Hospital-gray-500">
                        {resource.fileSize}
                      </span>
                      <a
                        href={resource.file}
                        download
                        className="bg-primary-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-primary-700 transition-colors"
                      >
                        Download ↓
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Video Demonstrations Section */}
        <section id="videos" className="mt-12 scroll-mt-24">
          <div className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-5xl">🎥</div>
              <div>
                <h2 className="text-3xl font-bold text-Hospital-gray-900 mb-2">
                  Video Demonstrations
                </h2>
                <p className="text-Hospital-gray-600">
                  Watch detailed tutorials on product usage, application methods, and safety protocols
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {demoVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-Hospital-gray-50 rounded-lg overflow-hidden border border-Hospital-gray-200 hover:shadow-lg transition-shadow"
                >
                  {/* Video Player */}
                  <div className="relative bg-Hospital-gray-900 aspect-video">
                    <video
                      controls
                      className="w-full h-full object-cover"
                      poster={video.thumbnail}
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-3 right-3 bg-Hospital-gray-900 bg-opacity-75 text-white px-2 py-1 rounded text-xs font-semibold">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-Hospital-gray-900 mb-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-Hospital-gray-600 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-Hospital-gray-900 mb-4">
            Need Additional Documentation?
          </h2>
          <p className="text-Hospital-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact our team for custom documentation, technical support, or procurement assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View Gallery
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Quick Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-6 text-center">
            <div className="text-3xl mb-2">📞</div>
            <div className="font-semibold text-Hospital-gray-900">Phone</div>
            <div className="text-sm text-Hospital-gray-600">+91 7045 66 44 66</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-6 text-center">
            <div className="text-3xl mb-2">✉️</div>
            <div className="font-semibold text-Hospital-gray-900">Email</div>
            <div className="text-sm text-Hospital-gray-600">customercare@dis-infect.in</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-6 text-center">
            <div className="text-3xl mb-2">🕒</div>
            <div className="font-semibold text-Hospital-gray-900">Business Hours</div>
            <div className="text-sm text-Hospital-gray-600">Mon-Sat: 9:00 AM - 6:00 PM</div>
          </div>
        </div>
      </div>
    </main>
  );
}
