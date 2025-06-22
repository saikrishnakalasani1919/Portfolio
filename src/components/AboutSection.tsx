
import { Code, Heart, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-900/50 rounded-full text-sm font-medium text-blue-300 mb-6">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Who</span>{' '}
            <span className="text-gradient">I Am</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi! I'm <span className="text-blue-400 font-semibold">Saikrishna Kalasani</span>, 
                a passionate developer focused on creating meaningful web applications using Python and modern web technologies.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                I enjoy building full-stack applications that solve real-world problems. 
                My journey in programming started with Python, and I've expanded my skills 
                to include web development frameworks like Flask and React.
              </p>

              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, I'm learning new technologies, working on personal projects, 
                or exploring ways to improve user experiences through clean, efficient code.
              </p>
            </div>

            {/* Right Side - Passion Cards */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg p-3 flex-shrink-0">
                    <Code className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Problem Solving
                    </h3>
                    <p className="text-gray-300 text-sm">
                      I love breaking down complex problems into simple, elegant solutions using Python and web technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-600 rounded-lg p-3 flex-shrink-0">
                    <Heart className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      User Experience
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Creating applications that are not just functional, but also intuitive and enjoyable to use.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg p-3 flex-shrink-0">
                    <Target className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Continuous Learning
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Always exploring new technologies and best practices to improve my development skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
