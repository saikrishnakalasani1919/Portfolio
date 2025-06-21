
import { Code, Database, Palette, Smartphone, Globe, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "SASS"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase", "Redux"],
      color: "from-green-600 to-teal-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch", "Framer"],
      color: "from-pink-600 to-rose-600"
    },
    {
      icon: Globe,
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Nginx"],
      color: "from-orange-600 to-yellow-600"
    },
    {
      icon: Zap,
      title: "Emerging Tech",
      skills: ["Three.js", "WebGL", "AI/ML", "Blockchain", "WebRTC", "PWA"],
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-float animation-delay-400"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-full border border-purple-500/30 text-sm font-medium text-purple-300 mb-6">
            🚀 Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Technical</span>{' '}
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit spanning modern technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`glass-card p-8 hover-lift cyber-glow group animate-scale-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-full h-full text-white" />
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`flex items-center space-x-3 animate-slide-up`}
                      style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-gray-300 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "30+", label: "Technologies" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center animate-slide-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
