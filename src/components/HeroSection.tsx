
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleResumeClick = () => {
    // Open resume in new tab for viewing
    const viewUrl = 'https://drive.google.com/file/d/1sK9jwz8pPVhAcAWo6wrO_QYt4nnqlF8Z/view?usp=sharing';
    window.open(viewUrl, '_blank');
    
    // Also trigger download
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=1sK9jwz8pPVhAcAWo6wrO_QYt4nnqlF8Z';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Saikrishna_Kalasani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Simple greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-900/50 rounded-full text-sm font-medium text-blue-300">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gradient">SAI KRISHNA KALASANI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Passionate about Python development and creating modern web applications
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={handleResumeClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg"
            >
              View My Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/saikrishnakalasani1919" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/saikrishna-kalasani/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-300" />
            </a>
            <a 
              href="mailto:saikrishnakalasani@gmail.com" 
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-300" />
            </a>
          </div>

          {/* Simple scroll indicator */}
          <div>
            <ArrowDown className="w-6 h-6 text-blue-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
