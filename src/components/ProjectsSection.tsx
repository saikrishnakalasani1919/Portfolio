
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and advanced analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack"
    },
    {
      id: 2,
      title: "AI-Powered Dashboard",
      description: "An intelligent analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "A secure, user-friendly mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
      category: "Mobile"
    },
    {
      id: 4,
      title: "3D Portfolio Website",
      description: "An immersive 3D portfolio website showcasing creative projects with interactive animations, WebGL effects, and responsive design.",
      image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=600&h=400&fit=crop",
      tech: ["Three.js", "React", "GSAP", "WebGL"],
      category: "3D/Creative"
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "A next-generation social media platform with real-time messaging, content sharing, advanced privacy controls, and AI-powered content moderation.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Next.js", "GraphQL", "Redis", "AWS"],
      category: "Social"
    },
    {
      id: 6,
      title: "Blockchain Marketplace",
      description: "A decentralized NFT marketplace built on Ethereum blockchain with smart contracts, cryptocurrency payments, and advanced search capabilities.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop",
      tech: ["Solidity", "Web3.js", "React", "IPFS"],
      category: "Blockchain"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-600/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-full border border-purple-500/30 text-sm font-medium text-purple-300 mb-6">
            💼 My Work
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Featured</span>{' '}
            <span className="text-white">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my latest work spanning across different technologies and industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group perspective-1000 animate-slide-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative preserve-3d transition-all duration-700 hover:rotate-y-12">
                <div className="glass-card p-6 hover-lift cyber-glow backface-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/50 rounded-full text-xs font-medium text-gray-300 border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 rounded-full"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
