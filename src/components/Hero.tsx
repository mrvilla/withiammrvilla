import { Award, MapPin } from 'lucide-react';

const Hero = () => {
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   element?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-sky-500/20 to-orange-500/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Drone videography and aerial cinematography for real estate, 
              film production, tourism, and commercial projects.
            </h1>
          </div>

          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="flex items-center space-x-2 bg-[#06B391] hover:bg-[#0A7389] text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-semibold text-lg"
            >
              <Play className="h-5 w-5" />
              <span>View Portfolio</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 border-2 border-[#06B391] text-[#0A7389] hover:bg-[#a47764] hover:text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-semibold text-lg"
            >
              <span>Get Quote</span>
            </button>
          </div> */}

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="flex items-center space-x-2 text-gray-400">
              <Award className="h-5 w-5 text-[#06B391]" />
              <span>European A2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="h-5 w-5 text-[#06B391]" />
              <span>Available Nationwide (Travel Available)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;