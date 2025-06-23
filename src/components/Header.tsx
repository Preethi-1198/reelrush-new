
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/c2d793ac-fd55-45b5-9948-75e9d7d76b51.png" 
              alt="Reel Rush Logo" 
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold gradient-text">REEL RUSH</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection('creator-pack')}
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              Creator Pack
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Phone className="h-4 w-4" />
              <span>8143325858</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-300 hover:text-red-400 transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-gray-300 hover:text-red-400 transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('packages')}
                className="text-left text-gray-300 hover:text-red-400 transition-colors"
              >
                Packages
              </button>
              <button 
                onClick={() => scrollToSection('creator-pack')}
                className="text-left text-gray-300 hover:text-red-400 transition-colors"
              >
                Creator Pack
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-300 hover:text-red-400 transition-colors"
              >
                Contact
              </button>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>8143325858</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
