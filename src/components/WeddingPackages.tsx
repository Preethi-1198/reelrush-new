
import { Check, Crown, Heart, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WeddingPackages = () => {
  const packages = [
    {
      name: "Single Event",
      price: "₹6,799",
      events: 1,
      reels: 3,
      description: "Perfect for engagement or one special ceremony",
      features: [
        "1 Event Coverage",
        "3 Professional Reels",
        "iPhone 15 Pro Max Quality",
        "10-Minute Delivery",
        "Basic Color Grading",
        "Music Sync"
      ],
      popular: false,
      icon: Heart
    },
    {
      name: "Triple Celebration",
      price: "₹20,499",
      events: 3,
      reels: 12,
      description: "For mehendi, sangeet, and wedding day",
      features: [
        "3 Events Coverage",
        "12 Professional Reels",
        "iPhone 15 Pro Max Quality",
        "10-Minute Delivery",
        "Advanced Color Grading",
        "Premium Music Library",
        "Custom Transitions"
      ],
      popular: true,
      icon: Star
    },
    {
      name: "Grand Celebration",
      price: "₹44,499",
      events: 4,
      reels: 15,
      description: "Complete pre-wedding to reception coverage",
      features: [
        "4 Events Coverage",
        "15 Professional Reels",
        "iPhone 15 Pro Max Quality",
        "Priority 5-Minute Delivery",
        "Premium Color Grading",
        "Exclusive Music Library",
        "Custom Effects & Transitions",
        "Drone Shot Integration"
      ],
      popular: false,
      icon: Crown
    },
    {
      name: "Ultimate Wedding",
      price: "₹67,499",
      events: 6,
      reels: 25,
      description: "Complete wedding journey with Instagram handle",
      features: [
        "6 Events Coverage",
        "25 Professional Reels",
        "iPhone 15 Pro Max Quality",
        "Instant 3-Minute Delivery",
        "Cinematic Color Grading",
        "Exclusive Music Library",
        "Custom Branding",
        "Instagram Handle Integration",
        "Drone Shot Integration",
        "24/7 Priority Support"
      ],
      popular: false,
      icon: Crown
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Wedding <span className="gradient-text">Packages</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From intimate ceremonies to grand celebrations, we have the perfect package for your special day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative bg-gray-800/50 border-gray-700 hover-glow transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-red-500 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-red-600/20 rounded-lg">
                    <pkg.icon className="h-8 w-8 text-red-400" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold gradient-text mt-2">{pkg.price}</div>
                <p className="text-gray-400 text-sm mt-2">{pkg.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex justify-center space-x-6 mb-6 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-red-400">{pkg.events}</div>
                    <div className="text-gray-400">Events</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-red-400">{pkg.reels}</div>
                    <div className="text-gray-400">Reels</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-red-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            All packages include 10-minute delivery, professional editing, and 24/7 support
          </p>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
          >
            Need a Custom Package? Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeddingPackages;
