
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float animation-delay-400"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float animation-delay-800"></div>
      </div>

      {/* 3D floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float animation-delay-200"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float animation-delay-600"></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-float animation-delay-400"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated greeting */}
          <div className="mb-6 animate-slide-down">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-full border border-purple-500/30 text-sm font-medium text-purple-300">
              ✨ Welcome to my digital space
            </span>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
            <span className="block text-gradient">Creative</span>
            <span className="block text-white">Developer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            I craft exceptional digital experiences through innovative design and cutting-edge technology
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animation-delay-400">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-scale-in animation-delay-600">
            <a 
              href="#" 
              className="p-3 glass-card hover-lift cyber-glow transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
            <a 
              href="#" 
              className="p-3 glass-card hover-lift cyber-glow transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a 
              href="#" 
              className="p-3 glass-card hover-lift cyber-glow transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-pink-400 transition-colors duration-300" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-purple-400 mx-auto animate-glow" />
          </div>
        </div>
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-20 right-20 w-20 h-20 border-2 border-purple-500/30 rotate-45 animate-rotate-3d hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-pink-500/30 rotate-12 animate-float hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;
