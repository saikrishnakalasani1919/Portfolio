
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-l from-pink-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-full border border-purple-500/30 text-sm font-medium text-purple-300 mb-6">
            📧 Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Let's</span>{' '}
            <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 hover-lift cyber-glow animate-slide-up">
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project idea, need technical consultation, or just want to say hello, 
                I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-3">
                    <Mail className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">hello@portfolio.dev</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-3">
                    <Phone className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-3">
                    <MapPin className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 hover-lift cyber-glow animate-slide-up animation-delay-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
