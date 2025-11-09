'use client';

import Image from 'next/image';
import FloatingParticles from '../animations/FloatingParticles';

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Red Background Section with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-900">
        {/* Floating Particles */}
        <FloatingParticles />

        {/* Wavy White Overlay */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
          <path
            d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
            fill="white"
            opacity="0.1"
          />
          <path
            d="M0,500 Q300,300 600,500 T1200,500 L1200,800 L0,800 Z"
            fill="white"
            opacity="0.15"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Diamond Frame */}
          <div className="relative animate-fade-in-left">
            <div className="relative aspect-[3/4] max-w-md mx-auto hover-lift">
              {/* White textured border */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 transform rotate-2"
                   style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>

              {/* Inner content area */}
              <div className="absolute inset-4 bg-gray-600 overflow-hidden"
                   style={{clipPath: 'polygon(50% 2%, 98% 26%, 98% 74%, 50% 98%, 2% 74%, 2% 26%)'}}>

                <div className="w-full h-full bg-gray-700 flex flex-col items-center justify-center p-8 text-center relative">
                  {/* ClO2 badge with pulse effect */}
                  <div className="absolute top-4 right-4 animate-pulse-glow">
                    <div className="bg-yellow-400 text-red-600 font-black text-lg px-4 py-2 rounded-full border-4 border-yellow-500 shadow-xl">
                      ClO₂
                    </div>
                  </div>

                  {/* Heading */}
                  <div className="space-y-2 mb-6">
                    <p className="text-yellow-400 text-sm font-semibold">
                      Chlorine Dioxide (ClO₂) Disintox® Tablets
                    </p>
                    <p className="text-white text-lg font-light italic leading-relaxed">
                      Empowering every<br />
                      healthcare space<br />
                      with the most necessary
                    </p>
                  </div>

                  {/* S.H.I.E.L.D. */}
                  <div className="mb-6">
                    <h2 className="text-yellow-400 text-5xl md:text-6xl font-black tracking-wider mb-2 animate-float">
                      S.H.I.E.L.D.
                    </h2>
                    <p className="text-white text-xs leading-relaxed max-w-xs mx-auto">
                      <span className="text-yellow-400 font-semibold">S</span>cience-driven{' '}
                      <span className="text-yellow-400 font-semibold">H</span>ygiene{' '}
                      <span className="text-yellow-400 font-semibold">I</span>nnovations for<br />
                      <span className="text-yellow-400 font-semibold">E</span>ffective and{' '}
                      <span className="text-yellow-400 font-semibold">L</span>ong-lasting{' '}
                      <span className="text-yellow-400 font-semibold">D</span>isinfection
                    </p>
                  </div>

                  {/* Logo */}
                  <div className="bg-white p-4 rounded-lg shadow-xl">
                    <Image
                      src="/logo.png"
                      alt="Disintox Logo"
                      width={150}
                      height={75}
                      className="mx-auto"
                    />
                  </div>

                  {/* Approval badges with hover effect */}
                  <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover-lift cursor-pointer">
                      <span className="text-[8px] font-bold text-blue-600">WHO</span>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover-lift cursor-pointer">
                      <span className="text-[8px] font-bold text-blue-600">EPA</span>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover-lift cursor-pointer">
                      <span className="text-[8px] font-bold text-red-600">FDA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Made in India badge */}
            <div className="absolute bottom-4 left-4 bg-red-700 text-white px-3 py-1.5 rounded text-xs font-bold shadow-xl hover-lift cursor-pointer">
              MADE IN INDIA
            </div>
          </div>

          {/* Right Content - Text and CTA */}
          <div className="text-white space-y-8 animate-fade-in-right">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-fade-in-up">
                Advanced Hospital <span className="text-yellow-400">Disinfection</span>
              </h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-red-100">
                Chlorine Dioxide (ClO₂) tablets delivering{' '}
                <span className="font-bold text-yellow-400 text-3xl gradient-text">99.99%</span>{' '}
                pathogen elimination with zero toxicity
              </p>
            </div>

            {/* Key benefits with glassmorphism */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="glass p-6 rounded-2xl border border-white/20 card-interactive">
                <div className="text-4xl font-black text-yellow-400 mb-2">99.99%</div>
                <div className="text-sm text-red-100">Efficacy Rate</div>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/20 card-interactive">
                <div className="text-4xl font-black text-yellow-400 mb-2">100%</div>
                <div className="text-sm text-red-100">Non-Toxic</div>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/20 card-interactive">
                <div className="text-4xl font-black text-yellow-400 mb-2">EPA</div>
                <div className="text-sm text-red-100">Approved</div>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/20 card-interactive">
                <div className="text-4xl font-black text-yellow-400 mb-2">WHO</div>
                <div className="text-sm text-red-100">Recognized</div>
              </div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToDemo}
                className="btn-primary group"
              >
                <span className="relative z-10">Request Demo</span>
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button className="btn-secondary group">
                Download Brochure
                <span className="ml-2 inline-block transition-transform group-hover:translate-y-1">↓</span>
              </button>
            </div>

            {/* Trust indicators with badge pulse */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="glass px-6 py-3 rounded-full text-sm font-semibold border border-white/20 hover-lift badge-pulse">
                ✓ Patent #386338
              </div>
              <div className="glass px-6 py-3 rounded-full text-sm font-semibold border border-white/20 hover-lift">
                ✓ EDL Maharashtra
              </div>
              <div className="glass px-6 py-3 rounded-full text-sm font-semibold border border-white/20 hover-lift">
                ✓ ISO Certified
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
