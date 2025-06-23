
import { Clock, Smartphone, Zap, Users, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "10-Minute Delivery",
      description: "Get your professionally edited reels delivered in just 10 minutes. Faster than ordering food!"
    },
    {
      icon: Smartphone,
      title: "iPhone Excellence",
      description: "Shot entirely on latest iPhones with professional techniques for stunning cinematic quality."
    },
    {
      icon: Zap,
      title: "Instant Editing",
      description: "Our expert editors work in real-time to deliver polished, ready-to-post content immediately."
    },
    {
      icon: Users,
      title: "Wedding Specialists",
      description: "Specialized packages for weddings with multiple event coverage and Instagram handle integration."
    },
    {
      icon: MapPin,
      title: "Global Reach",
      description: "Operating across Hyderabad and United Kingdom with local teams in both locations."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Studio-quality output with professional color grading, music sync, and creative transitions."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Reel Rush</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We've revolutionized content creation with lightning-fast delivery and iPhone-powered excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 hover-glow group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-colors">
                    <feature.icon className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-400">Happy Couples</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10</div>
            <div className="text-gray-400">Minute Delivery</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2</div>
            <div className="text-gray-400">Countries</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
