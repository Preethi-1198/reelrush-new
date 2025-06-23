
import { MessageSquare, Camera, Pencil, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: MessageSquare,
      title: "Brief & Book",
      description: "Tell us your vision, select your package, and book your slot in just minutes through our streamlined booking process."
    },
    {
      step: 2,
      icon: Camera,
      title: "Professional Shoot",
      description: "Our team captures stunning footage using professional iPhone techniques and creative angles for maximum impact."
    },
    {
      step: 3,
      icon: Pencil,
      title: "Expert Editing",
      description: "Advanced post-production with trending effects, music sync, color grading, and seamless transitions for viral-ready content."
    },
    {
      step: 4,
      icon: Download,
      title: "Instant Delivery",
      description: "Receive your professionally edited reel in 10 minutes or less, ready to upload and engage your audience immediately."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From idea to viral reel in just 4 simple steps. Our streamlined process ensures quality and speed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/30 border-gray-700 hover-glow group cursor-pointer relative overflow-hidden"
            >
              <CardContent className="p-6 text-center">
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-red-600/20 rounded-2xl group-hover:bg-red-600/30 transition-colors">
                    <step.icon className="h-8 w-8 text-red-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {step.description}
                </p>
              </CardContent>

              {/* Connection Line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-red-600/50 to-transparent"></div>
              )}
            </Card>
          ))}
        </div>

        {/* Process Timeline for Mobile */}
        <div className="lg:hidden mt-12 flex justify-center">
          <div className="flex flex-col space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="w-px h-8 bg-gradient-to-b from-red-600/50 to-red-600/20 mx-auto"></div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6">
              Join 500+ satisfied clients who trust Reel Rush for their content creation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('packages');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover-glow transition-all"
              >
                View Packages
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
