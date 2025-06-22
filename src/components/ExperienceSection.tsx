
import { Briefcase, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-l from-sky-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600/20 to-sky-600/20 backdrop-blur-xl rounded-full border border-blue-500/30 text-sm font-medium text-blue-300 mb-6">
            💼 My Journey
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Work</span>{' '}
            <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Experience Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="glass-card border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-sky-600 rounded-xl p-3">
                  <Briefcase className="w-full h-full text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-white">Python Full Stack Developer Intern</CardTitle>
                  <p className="text-blue-300 font-medium">Infosys Springboard</p>
                  <p className="text-gray-400 text-sm">Dec 2024 – Feb 2025 • Remote</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-600/10">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl glass-card border-blue-500/20">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-white">Python Full Stack Developer Intern</DialogTitle>
                    <DialogDescription className="text-blue-300">
                      Infosys Springboard — Remote (Dec 2024 – Feb 2025)
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      During my internship at Infosys Springboard, I worked on a real-world project titled 
                      "Unified Family Finance Tracker", designed to help families manage their budgets effectively. 
                      This experience gave me end-to-end exposure to full-stack development and hands-on 
                      implementation of scalable web applications.
                    </p>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Contributions:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>
                            <strong className="text-blue-300">Full-Stack Development:</strong> Built both the frontend 
                            and backend using Flask, HTML, CSS, JavaScript, and MySQL, creating a smooth and 
                            interactive user experience.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>
                            <strong className="text-blue-300">Budget Management System:</strong> Developed modules 
                            for category-wise and user-wise budget tracking, allowing users to set, edit, and 
                            monitor budgets with ease.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>
                            <strong className="text-blue-300">Expense Alerts:</strong> Integrated a feature to 
                            automatically send email notifications to users when their expenses exceeded 
                            predefined threshold values.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
