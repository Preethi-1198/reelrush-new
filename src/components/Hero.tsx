
import { Clock, Video, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/c2d793ac-fd55-45b5-9948-75e9d7d76b51.png" 
              alt="Reel Rush Logo" 
              className="h-24 w-24 mx-auto mb-4 glow-red"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional Reels
            <br />
            <span className="gradient-text">Delivered in 10 Minutes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            iPhone-shot, studio-quality reels delivered faster than your lunch order. 
            Perfect for weddings, events, and content creation.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2">
              <Clock className="h-5 w-5 text-red-400" />
              <span className="text-sm font-medium">10 Min Delivery</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2">
              <Smartphone className="h-5 w-5 text-red-400" />
              <span className="text-sm font-medium">iPhone Quality</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2">
              <Video className="h-5 w-5 text-red-400" />
              <span className="text-sm font-medium">Professional Editing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToPackages}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold hover-glow group"
            >
              View Packages
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-gray-400 text-sm">
            <p>Trusted by 500+ couples across Hyderabad & UK</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
          <div className="w-2 h-3 bg-red-400 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
