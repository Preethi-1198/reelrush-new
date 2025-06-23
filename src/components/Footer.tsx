
import { Heart, MapPin, Phone, Mail, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/c2d793ac-fd55-45b5-9948-75e9d7d76b51.png" 
                alt="Reel Rush Logo" 
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold gradient-text">REEL RUSH</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional reels delivered in 10 minutes. iPhone-powered excellence for 
              weddings, events, and content creation across Hyderabad and UK.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-red-400" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-red-400" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Youtube className="h-5 w-5 text-gray-400 hover:text-red-400" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-red-400 transition-colors">Features</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-red-400 transition-colors">Wedding Packages</a></li>
              <li><a href="#creator-pack" className="text-gray-400 hover:text-red-400 transition-colors">Creator Pack</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-400 text-sm">8143325858</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-400 text-sm">reelrushhyd@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-400 mt-1" />
                <div className="text-gray-400 text-sm">
                  <div>Hyderabad, India</div>
                  <div>United Kingdom</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Reel Rush. All rights reserved.
          </div>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>for content creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
