import React from 'react';
import { Play, Award, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-sky-500/20 to-orange-500/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Fly with
              <span className="bg-gradient-to-r from-[#a47764] to-[#c49882] bg-clip-text text-transparent block">
                evilla
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional drone videography and aerial cinematography for real estate, 
              film production, tourism, and commercial projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="flex items-center space-x-2 bg-[#a47764] hover:bg-[#8d6854] text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-semibold text-lg"
            >
              <Play className="h-5 w-5" />
              <span>View Portfolio</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 border-2 border-[#a47764] text-[#a47764] hover:bg-[#a47764] hover:text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-semibold text-lg"
            >
              <span>Get Quote</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="flex items-center space-x-2 text-gray-400">
              <Award className="h-5 w-5 text-[#a47764]" />
              <span>FAA Part 107 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="h-5 w-5 text-[#a47764]" />
              <span>Available Nationwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;