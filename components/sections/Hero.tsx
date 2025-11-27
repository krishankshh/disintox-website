'use client';

import Image from 'next/image';
import CountUpNumber from '../animations/CountUpNumber';

export default function Hero() {

  return (
    <section className="relative min-h-[600px] lg:min-h-screen flex items-center bg-gradient-to-b from-Hospital-gray-50 to-white overflow-x-hidden">
      {/* Simple background - removed mesh and grid patterns */}

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT: Content */}
          <div className="space-y-4 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
            {/* Badge - simplified */}
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <span className="w-2 h-2 bg-secondary-500 rounded-full"></span>
              <span className="text-primary-700 font-semibold text-xs sm:text-sm">Patented ClO₂ Technology</span>
            </div>

            {/* Main Headline - simplified sizing */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-Hospital-gray-900">
              Hospital-Grade
              <br />
              <span className="text-primary-600">Disinfection</span>
              <br />
              That Works
            </h1>

            {/* Subheadline - simplified */}
            <p className="text-lg sm:text-xl text-Hospital-gray-600 leading-relaxed max-w-xl">
              Eliminates <span className="font-bold text-primary-600">99.99%</span> of pathogens with
              <span className="text-Hospital-gray-900 font-semibold"> Chlorine Dioxide (ClO<sub>2</sub>) tablets</span> —
              trusted by India's leading healthcare facilities
            </p>

            {/* Stats Row - simplified */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 max-w-4xl">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-Hospital-gray-200">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  <CountUpNumber end={99.99} decimals={2} suffix="%" />
                </div>
                <div className="text-sm font-semibold text-Hospital-gray-700">Efficacy Rate</div>
                <div className="text-xs text-Hospital-gray-500 mt-1">Pathogen Elimination</div>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-Hospital-gray-200">
                <div className="text-4xl font-bold text-secondary-600 mb-2">
                  <CountUpNumber end={100} suffix="%" />
                </div>
                <div className="text-sm font-semibold text-Hospital-gray-700">Non-Toxic</div>
                <div className="text-xs text-Hospital-gray-500 mt-1">Safe for Humans</div>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-Hospital-gray-200">
                <div className="text-4xl font-bold text-accent-600 mb-2">3-4 Hours</div>
                <div className="text-sm font-semibold text-Hospital-gray-700">Fumigation</div>
                <div className="text-xs text-Hospital-gray-500 mt-1">vs 12-14h Traditional</div>
              </div>
            </div>

            {/* CTAs - simplified buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/demo"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Gallery →
              </a>
              <a
                href="/products"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
              >
                View Products →
              </a>
            </div>

            {/* Trust Badges - simplified */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-Hospital-gray-200">
              <span className="text-sm text-Hospital-gray-500 font-medium w-full sm:w-auto">Approved by:</span>
              <div className="flex flex-wrap items-center gap-3">
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-Hospital-gray-200">
                  <span className="text-primary-600 font-bold text-sm">WHO</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-Hospital-gray-200">
                  <span className="text-primary-600 font-bold text-sm">US EPA</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-Hospital-gray-200">
                  <span className="text-primary-600 font-bold text-sm">FDA</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-Hospital-gray-200">
                  <span className="text-secondary-600 font-bold text-sm">ISO 9001</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Hero Image */}
          <div className="relative -mt-8 lg:-mt-72 order-1 lg:order-2">
            {/* COMMENTED OUT - L-shaped frames
            <div className="absolute -top-2 -left-2 pointer-events-none z-10">
              <div className="w-[250px] h-5 bg-primary-600"></div>
              <div className="w-5 h-[300px] bg-primary-600"></div>
            </div>

            <div className="absolute -bottom-2 -right-2 pointer-events-none z-10">
              <div className="absolute bottom-0 right-0 w-5 h-[300px] bg-secondary-600"></div>
              <div className="absolute bottom-0 right-0 w-[250px] h-5 bg-secondary-600"></div>
            </div>
            */}

            <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md h-[500px] lg:h-[600px]">
              <Image
                src="/hero_image.jpg"
                alt="Disintox Product Package"
                fill
                className="object-contain"
                priority
                quality={95}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - simplified, removed animations */}
      <div className="hidden sm:flex absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-Hospital-gray-500">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary-300 rounded-full p-1">
            <div className="w-1 h-3 bg-primary-500 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
