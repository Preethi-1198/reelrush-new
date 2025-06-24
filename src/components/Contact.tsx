
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your inquiry! We will get back to you within 10 minutes.');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to create amazing reels? Contact us now and get your content delivered in 10 minutes!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MapPin className="h-5 w-5 text-red-400 mr-3" />
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Hyderabad, India</h4>
                    <p className="text-gray-400">
                      Narsingi, Hyderabad<br />
                      Telangana 500034, India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">United Kingdom</h4>
                    <p className="text-gray-400">
                      London Office<br />
                      Service across UK
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Clock className="h-5 w-5 text-red-400 mr-3" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday - Sunday</span>
                    <span className="text-white">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Emergency Service</span>
                    <span className="text-red-400">24/7 Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gray-800/50 border-gray-700 hover-glow">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-red-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Call Us</h4>
                  <p className="text-gray-400">8143325858</p>
                  <Button 
                    className="mt-3 w-full bg-red-600 hover:bg-red-700"
                    onClick={() => window.open('tel:8143325858')}
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover-glow">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-red-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Email Us</h4>
                  <p className="text-gray-400 text-sm">reelrushhyd@gmail.com</p>
                  <Button 
                    className="mt-3 w-full bg-red-600 hover:bg-red-700"
                    onClick={() => window.open('mailto:reelrushhyd@gmail.com')}
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Send Us a Message</CardTitle>
              <p className="text-gray-400">
                Fill out the form below and we'll get back to you within 10 minutes!
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-400"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-400"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-400"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-400 min-h-32"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-16 bg-gray-800/50 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need <span className="gradient-text">Immediate</span> Assistance?
          </h3>
          <p className="text-gray-400 mb-6">
            For urgent bookings or quick questions, contact us directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
              onClick={() => window.open('https://wa.me/918143325858', '_blank')}
            >
              WhatsApp Us
            </Button>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3"
              onClick={() => window.open('tel:8143325858')}
            >
              Call Now: 8143325858
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
