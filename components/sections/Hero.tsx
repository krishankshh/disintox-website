'use client';

import Image from 'next/image';
import CountUpNumber from '../animations/CountUpNumber';

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(14, 165, 233, 0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Content */}
          <div className="space-y-10 animate-fade-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-6 py-3 animate-fade-in-down">
              <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></span>
              <span className="text-primary-700 font-semibold text-sm">Patented ClO₂ Technology</span>
            </div>

            {/* Main Headline - MUCH LARGER */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-clinical-gray-900">
              Clinical-Grade
              <br />
              <span className="gradient-text-premium">Disinfection</span>
              <br />
              That Works
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl text-clinical-gray-600 leading-relaxed max-w-xl font-light">
              Eliminate <span className="font-bold gradient-text">99.99%</span> of pathogens with
              <span className="text-primary-600 font-semibold"> chlorine dioxide tablets</span> —
              trusted by India's leading healthcare facilities
            </p>

            {/* Stats Row - Enhanced Visibility */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 max-w-4xl">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary-100 hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="text-6xl md:text-4xl font-black text-primary-600 mb-3">
                  <CountUpNumber end={99.99} decimals={2} suffix="%" />
                </div>
                <div className="text-base font-bold text-clinical-gray-700 uppercase tracking-wide">Efficacy Rate</div>
                <div className="text-xs text-clinical-gray-500 mt-1">Pathogen Elimination</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-secondary-100 hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="text-6xl md:text-4xl font-black text-secondary-600 mb-3">
                  <CountUpNumber end={100} suffix="%" />
                </div>
                <div className="text-base font-bold text-clinical-gray-700 uppercase tracking-wide">Non-Toxic</div>
                <div className="text-xs text-clinical-gray-500 mt-1">Safe for Humans</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-accent-100 hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="text-6xl md:text-4xl font-black text-accent-600 mb-3">3-4h</div>
                <div className="text-base font-bold text-clinical-gray-700 uppercase tracking-wide">Fumigation</div>
                <div className="text-xs text-clinical-gray-500 mt-1">vs 12-14h Traditional</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button
                onClick={scrollToDemo}
                className="btn-primary group text-center"
              >
                <span className="relative z-10">Request Demo</span>
                <span className="ml-3 inline-block transition-transform group-hover:translate-x-1 text-xl">→</span>
              </button>
              <a
                href="/products"
                className="btn-secondary group text-center"
              >
                View Products
                <span className="ml-3 inline-block transition-transform group-hover:translate-x-1 text-xl">→</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-clinical-gray-200">
              <span className="text-sm text-clinical-gray-500 font-medium">Approved by:</span>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-white rounded-lg shadow-card hover-lift cursor-pointer border border-clinical-gray-100">
                  <span className="text-primary-600 font-bold text-sm">WHO</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-card hover-lift cursor-pointer border border-clinical-gray-100">
                  <span className="text-primary-600 font-bold text-sm">US EPA</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-card hover-lift cursor-pointer border border-clinical-gray-100">
                  <span className="text-primary-600 font-bold text-sm">FDA</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-card hover-lift cursor-pointer border border-clinical-gray-100">
                  <span className="text-secondary-600 font-bold text-sm">ISO 9001</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative animate-fade-in-right">
            {/* Main Product Card with 3D Effect */}
            <div className="card-3d bg-gradient-to-br from-primary-500 to-secondary-500 rounded-[3rem] p-12 shadow-3d relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

              {/* Content */}
              <div className="relative z-10 text-center text-white space-y-8">
                {/* ClO₂ Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-xl animate-pulse-glow">
                  <span className="text-3xl font-black gradient-text">ClO₂</span>
                </div>

                {/* Tagline */}
                <div className="space-y-2">
                  <p className="text-lg opacity-90 font-medium">Chlorine Dioxide Disintox® Tablets</p>
                  <p className="text-2xl font-light italic opacity-95 leading-relaxed">
                    Empowering healthcare<br />with science-driven hygiene
                  </p>
                </div>

                {/* S.H.I.E.L.D. */}
                <div className="space-y-4 py-8">
                  <h2 className="text-7xl font-black tracking-wider animate-float drop-shadow-lg">
                    S.H.I.E.L.D.
                  </h2>
                  <p className="text-sm leading-relaxed max-w-sm mx-auto opacity-90">
                    <span className="font-bold">S</span>cience-driven{' '}
                    <span className="font-bold">H</span>ygiene{' '}
                    <span className="font-bold">I</span>nnovations for<br />
                    <span className="font-bold">E</span>ffective and{' '}
                    <span className="font-bold">L</span>ong-lasting{' '}
                    <span className="font-bold">D</span>isinfection
                  </p>
                </div>

                {/* Logo */}
                <div className="inline-block bg-white px-8 py-6 rounded-2xl shadow-2xl">
                  <Image
                    src="/logo.png"
                    alt="Disintox Logo"
                    width={130}
                    height={175}
                    className="mx-auto"
                  />
                </div>

                {/* Made in India */}
                <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-bold text-white text-sm">🇮🇳 Made in India</span>
                </div>
              </div>
            </div>

            {/* Floating Info Cards */}
            <div className="absolute left-0 top-1/4 premium-card w-56 animate-float z-20">
              <div className="text-3xl font-black gradient-text mb-2">Patent #</div>
              <div className="text-4xl font-black text-primary-600 mb-1">386338</div>
              <div className="text-xs text-clinical-gray-600 font-medium">Indian Patent</div>
            </div>

            <div className="absolute right-0 bottom-1/4 premium-card w-56 animate-float-slow z-20">
              <div className="text-5xl font-black gradient-text mb-2">1000+</div>
              <div className="text-sm text-clinical-gray-700 font-semibold">Hospitals Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-clinical-gray-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary-300 rounded-full p-1">
            <div className="w-1 h-3 bg-primary-500 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
