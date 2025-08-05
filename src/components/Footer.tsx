import { Mail, MapPin, Instagram, Youtube } from 'lucide-react';
import FlyWithIamIcon from './FlyWithIamIconGradient';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <FlyWithIamIcon className="h-8 w-8 text-sky-400" size={32} />
              <span className="text-xl font-bold text-white">Fly with evilla</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional drone videography and aerial cinematography services for all your creative needs.
            </p>
            <div className="flex space-x-4">
              <a title='Instagram' href="https://www.instagram.com/fly_iammrvilla/reels/" className="text-gray-400 hover:text-[#a47764] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a title='Youtube' href="https://www.youtube.com/@flyiammrvilla" className="text-gray-400 hover:text-[#a47764] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-[#a47764] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-[#a47764] transition-colors text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('photography')}
                  className="text-gray-400 hover:text-[#a47764] transition-colors text-left"
                >
                  Photography
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#a47764] transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-[#a47764] transition-colors text-left"
                >
                  Services
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Real Estate Photography</li>
              <li>Film & TV Production</li>
              <li>Tourism & Events</li>
              <li>Commercial Projects</li>
              <li>Wedding Coverage</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">fly@iammrvilla.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Nationwide Coverage</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} Fly with iammrvilla. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;