'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { NAVIGATION_LINKS } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/98 backdrop-blur-md shadow-md border-b border-clinical-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-clinical-gray-700 hover:text-brand-red-600 transition-colors font-semibold text-sm relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <button className="bg-gradient-hero text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105">
              Request Demo
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-clinical-gray-700 hover:bg-clinical-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-clinical-gray-200">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-clinical-gray-700 hover:text-brand-red-600 transition-colors font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-gradient-hero text-white px-6 py-3 rounded-lg font-bold hover:shadow-xl transition-all">
                Request Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
