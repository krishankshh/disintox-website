'use client';

import { APPROVALS } from '@/lib/constants';

export default function ApprovalsSection() {
  return (
    <section className="py-10 sm:py-16 bg-Hospital-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-Hospital-gray-900 mb-8 sm:mb-12">
          Molecule Approved By Leading Regulatory Bodies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8 items-center">
          {APPROVALS.map((approval) => (
            <div
              key={approval.organization}
              className="flex flex-col items-center text-center space-y-2 sm:space-y-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              title={approval.description}
            >
              <div className="h-20 w-full flex items-center justify-center relative p-3 rounded">
                <div className="absolute inset-0 bg-white rounded"></div>
                <img
                  src={approval.logo}
                  alt={`${approval.organization} logo`}
                  className="max-h-16 max-w-full object-contain transition-all duration-300 hover:scale-110 relative z-10"
                  style={{
                    backgroundColor: 'white',
                    padding: '4px',
                    borderRadius: '4px'
                  }}
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback-text text-2xl font-bold text-primary-600';
                      fallback.textContent = approval.organization;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-Hospital-gray-900">{approval.organization}</p>
                <p className="text-xs text-Hospital-gray-600">{approval.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
