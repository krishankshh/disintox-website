import Link from 'next/link';

export const metadata = {
  title: 'Resources & Downloads - Disintox®',
  description: 'Download product specifications, certificates, technical data sheets, and documentation for Disintox® Chlorine Dioxide (ClO2) disinfection products.',
};

// Resource categories for B2G procurement
const resourceCategories = [
  {
    title: 'Product Documentation',
    description: 'Detailed specifications and technical information',
    icon: '📄',
    resources: [
      {
        name: 'Product Specification Sheet',
        description: 'Complete technical specifications for Disintox® tablets and gel',
        fileSize: 'PDF, 2.5 MB',
        file: '/pdfs/product-specification.pdf'
      },
      {
        name: 'Product Brochure',
        description: 'Overview of Disintox® products and applications',
        fileSize: 'PDF, 3.2 MB',
        file: '/pdfs/product-brochure.pdf'
      },
      {
        name: 'User Manual',
        description: 'Detailed instructions for use and safety guidelines',
        fileSize: 'PDF, 1.8 MB',
        file: '/pdfs/user-manual.pdf'
      }
    ]
  },
  {
    title: 'Certificates & Approvals',
    description: 'Regulatory approvals and certifications',
    icon: '🏆',
    resources: [
      {
        name: 'Patent Certificate, Govt. of India',
        description: 'Patent No. 386338',
        fileSize: 'PDF, 0.5 MB',
        file: '/pdfs/patent-certificate.pdf'
      },
      {
        name: 'Maharashtra EDL Listing',
        description: 'Essential Drug List approval certificate',
        fileSize: 'PDF, 0.8 MB',
        file: '/pdfs/edl-certificate.pdf'
      },
      // {
      //   name: 'ISO 9001:2015 Certificate',
      //   description: 'Quality management system certification',
      //   fileSize: 'PDF, 0.6 MB',
      //   file: '/pdfs/iso-certificate.pdf'
      // },
      {
        name: 'Drug License',
        description: 'Manufacturing and distribution licenses',
        fileSize: 'PDF, 1.2 MB',
        file: '/pdfs/drug-license.pdf'
      }
    ]
  },
  {
    title: 'Safety & Compliance',
    description: 'Safety data and compliance documentation',
    icon: '🔒',
    resources: [
      {
        name: 'Safety Data Sheet (SDS)',
        description: 'Material safety and handling information',
        fileSize: 'PDF, 0.9 MB',
        file: '/pdfs/sds.pdf'
      },
      {
        name: 'Efficacy Test Reports',
        description: 'Laboratory test results showing 99.99% efficacy',
        fileSize: 'PDF, 4.5 MB',
        file: '/pdfs/efficacy-reports.pdf'
      },
      {
        name: 'WHO Guidelines Compliance',
        description: 'Documentation of WHO guideline adherence',
        fileSize: 'PDF, 1.1 MB',
        file: '/pdfs/who-compliance.pdf'
      }
    ]
  },
  {
    title: 'Tender Documents',
    description: 'Ready-to-use procurement documentation',
    icon: '📋',
    resources: [
      {
        name: 'Price List & Rate Card',
        description: 'Current pricing for government procurement',
        fileSize: 'PDF, 0.4 MB',
        file: '/pdfs/price-list.pdf'
      },
      {
        name: 'Company Profile',
        description: 'Detailed company information and credentials',
        fileSize: 'PDF, 2.1 MB',
        file: '/pdfs/company-profile.pdf'
      },
      {
        name: 'Technical Bid Template',
        description: 'Pre-filled technical specifications for tenders',
        fileSize: 'PDF, 1.5 MB',
        file: '/pdfs/technical-bid.pdf'
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
              View Demo
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
