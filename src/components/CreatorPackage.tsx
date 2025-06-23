
import { Camera, Clock, Video, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CreatorPackage = () => {
  const creatorPackages = [
    {
      name: "Half Day Shoot",
      price: "₹3,000",
      duration: "4 Hours",
      reels: 2,
      description: "Perfect for content creators and small businesses",
      features: [
        "4-Hour Shoot Duration",
        "2 Professional Reels",
        "iPhone 15 Pro Max Quality",
        "10-Minute Delivery",
        "Basic Color Grading",
        "Trending Music Integration"
      ],
      icon: Camera
    },
    {
      name: "Creator Starter",
      price: "₹4,500",
      duration: "6 Hours",
      reels: 3,
      description: "Ideal for influencers and brand collaborations",
      features: [
        "6-Hour Shoot Duration",
        "3 Professional Reels",
        "iPhone 15 Pro Max Quality",
        "Priority 5-Minute Delivery",
        "Advanced Color Grading",
        "Premium Music Library",
        "Custom Transitions",
        "Brand Integration Support"
      ],
      icon: Video,
      popular: true
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="creator-pack" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Creator <span className="gradient-text">Packages</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Designed for content creators, influencers, and businesses looking for professional reel content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {creatorPackages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`bg-gray-800/50 border-gray-700 hover-glow transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-red-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Popular Choice
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
                    <div className="font-bold text-red-400">{pkg.duration}</div>
                    <div className="text-gray-400">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-red-400">{pkg.reels}</div>
                    <div className="text-gray-400">Reels</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="h-2 w-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></div>
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
                  Book Creator Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-800/30 border-gray-700 text-center">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Rush Delivery</h3>
              <p className="text-gray-400 text-sm">Need it faster? Get your reels in 5 minutes with our rush service</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700 text-center">
            <CardContent className="p-6">
              <Palette className="h-8 w-8 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Custom Branding</h3>
              <p className="text-gray-400 text-sm">Add your brand colors, logos, and custom graphics to your reels</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700 text-center">
            <CardContent className="p-6">
              <Video className="h-8 w-8 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Multiple Formats</h3>
              <p className="text-gray-400 text-sm">Get your content optimized for Instagram, TikTok, and YouTube</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            All creator packages include professional equipment and expert editing
          </p>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
          >
            Discuss Custom Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreatorPackage;
