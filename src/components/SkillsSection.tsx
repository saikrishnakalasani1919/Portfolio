
import { Code, Database, Palette, BookOpen, HardDrive } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: ["HTML", "CSS", "React"],
      color: "bg-blue-600"
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Flask", "Node.js"],
      color: "bg-sky-600"
    },
    {
      icon: Palette,
      title: "Languages",
      skills: ["Python", "Java", "JavaScript"],
      color: "bg-blue-500"
    },
    {
      icon: HardDrive,
      title: "Databases",
      skills: ["SQL"],
      color: "bg-sky-500"
    },
    {
      icon: BookOpen,
      title: "CS Fundamentals",
      skills: ["Data Structures", "Algorithms"],
      color: "bg-blue-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-900/50 rounded-full text-sm font-medium text-blue-300 mb-6">
            My Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">What I</span>{' '}
            <span className="text-gradient">Know</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and programming concepts I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card p-8 text-center hover:shadow-xl transition-shadow"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg ${category.color} p-4 mx-auto mb-6`}>
                  <IconComponent className="w-full h-full text-white" />
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="text-gray-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2+", label: "Projects" },
              { number: "1+", label: "Years Learning" },
              { number: "6+", label: "Technologies" },
              { number: "Always", label: "Learning" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
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
