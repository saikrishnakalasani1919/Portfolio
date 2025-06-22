
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProblemSolvingSection from '@/components/ProblemSolvingSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProblemSolvingSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Saikrishna Kalasani
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
