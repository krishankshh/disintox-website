import Link from 'next/link';
import Image from 'next/image';
import { LogoWithTagline } from '@/components/ui/Logo';
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-clinical-gray-900 text-clinical-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green-500 opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-4">
              <LogoWithTagline className="filter brightness-200" />
            </div>
            <p className="text-sm mb-4 leading-relaxed text-clinical-gray-400">
              {COMPANY_INFO.brand} - Advanced Chlorine Dioxide disinfection technology for healthcare facilities.
              Patented, WHO & EPA approved, listed in Maharashtra EDL.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong className="text-brand-red-400">Patent No:</strong> {COMPANY_INFO.patentNumber}</p>
              <p><strong className="text-brand-green-400">Drug Licence:</strong> {COMPANY_INFO.drugLicenceNumbers.join(' | ')}</p>
              <p><strong className="text-white">Founded:</strong> {COMPANY_INFO.founded} | Startup India Initiative</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="font-semibold text-white">Customer Care</p>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-primary-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-primary-400 transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://${COMPANY_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  {COMPANY_INFO.website}
                </a>
              </li>
              <li className="text-xs pt-2">
                <p className="leading-relaxed">{COMPANY_INFO.address}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-clinical-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Compliance Note */}
        <div className="mt-6 p-4 bg-clinical-gray-800 rounded-lg text-xs text-clinical-gray-400">
          <p>
            <strong>Regulatory Compliance:</strong> Disintox® is manufactured under strict quality controls and
            complies with all applicable regulations. Always use as directed. For professional and institutional use only.
          </p>
        </div>

        {/* KMATS Branding - Responsive */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-clinical-gray-400 px-4">
          <span className="text-center">Website and Digital Presence by</span>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
            <Image
              src="/kmats_logo.png"
              alt="KMATS"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="font-bold text-clinical-gray-900">KMATS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
