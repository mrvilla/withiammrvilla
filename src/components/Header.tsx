import { useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import FlyWithIamIcon from './FlyWithIamIconGradient';
import GradientButton from './GradientButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <FlyWithIamIcon className="h-8 w-8 text-sky-400" size={32} />
            <span className="text-xl font-bold text-white">Fly with iammrvilla</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-[#08908D] transition-colors font-medium"
            >
              Home
            </button>
            {/* <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-[#08908D] transition-colors font-medium"
            >
              Portfolio
            </button> */}
            {/* <button
              onClick={() => scrollToSection('photography')}
              className="text-gray-300 hover:text-[#08908D] transition-colors font-medium"
            >
              Photography
            </button> */}
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-[#08908D] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-[#08908D] transition-colors font-medium"
            >
              Services
            </button>
            <div className="flex space-x-4 items-center justify-center">
                  <a title='Instagram' href="https://www.instagram.com/fly_iammrvilla/reels/" className="text-gray-400 hover:text-[#06B391] transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  {/* <a title='Youtube' href="https://www.youtube.com/@flyiammrvilla" className="text-gray-400 hover:text-[#06B391] transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a> */}
              </div>
            <GradientButton onClick={() => scrollToSection('contact')}>
              Book Now
            </GradientButton>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-gray-300 hover:text-[#08908D] transition-colors w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block px-3 py-2 text-gray-300 hover:text-[#08908D] transition-colors w-full text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('reel')}
                className="block px-3 py-2 text-gray-300 hover:text-[#08908D] transition-colors w-full text-left"
              >
                Reel
              </button>
              <button
                onClick={() => scrollToSection('photography')}
                className="block px-3 py-2 text-gray-300 hover:text-[#08908D] transition-colors w-full text-left"
              >
                Photography
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-300 hover:text-[#08908D] transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-300 hover:text-[#08908D] transition-colors w-full text-left"
              >
                Services
              </button>
              <GradientButton onClick={() => scrollToSection('contact')} className="w-full mt-2">Book Now</GradientButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;