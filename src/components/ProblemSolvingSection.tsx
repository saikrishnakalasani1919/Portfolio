import { Code, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProblemSolvingSection = () => {
  const platforms = [
    {
      name: 'LeetCode',
      count: '100+',
      link: 'https://leetcode.com/u/saikrishnakalasani/',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'HackerRank',
      count: '90+',
      link: 'https://www.hackerrank.com/profile/saikalasani1919',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'CodeChef',
      count: '400+',
      link: 'https://www.codechef.com/users/ksaikrishna19',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="problem-solving" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-r from-green-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-full border border-purple-500/30 text-sm font-medium text-purple-300 mb-6">
            🧩 Coding Journey
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Problem</span>{' '}
            <span className="text-gradient">Solving</span>
          </h2>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <Card key={index} className="glass-card border-gray-700/50 hover:border-purple-400/40 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.gradient} rounded-xl p-4 mx-auto mb-4`}>
                  <Code className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-white text-xl">{platform.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">{platform.count}</div>
                  <p className="text-gray-400">Problems Solved</p>
                </div>
                <Button 
                  className="w-full border border-purple-500/30 bg-transparent text-purple-300 hover:bg-purple-600/10 hover:text-purple-200 transition-colors"
                  onClick={() => window.open(platform.link, '_blank')}
                >
                  View Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolvingSection;
