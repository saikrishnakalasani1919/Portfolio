
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A simple e-commerce website built with React and CSS. Features product listing and shopping cart functionality.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "CSS", "JavaScript"],
      category: "Web App"
    },
    {
      id: 2,
      title: "Todo List App",
      description: "A basic todo list application with add, edit, and delete functionality. Built to practice React fundamentals.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["React", "HTML", "CSS"],
      category: "Practice"
    },
    {
      id: 3,
      title: "Weather App",
      description: "A simple weather application that shows current weather information using a weather API.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: ["JavaScript", "API", "CSS"],
      category: "Web App"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-900/50 rounded-full text-sm font-medium text-blue-300 mb-6">
            My Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Recent</span>{' '}
            <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some projects I've worked on while learning web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card p-6 hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-500 text-blue-300 hover:bg-blue-500/10 rounded-lg"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-500 text-blue-300 hover:bg-blue-500/10 px-8 py-3 rounded-lg"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
