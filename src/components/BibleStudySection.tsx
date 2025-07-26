
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Book } from 'lucide-react';

const BibleStudySection = () => {
  return (
    <section id="bible-study" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark to-tech-darker"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-accent to-purple-400 bg-clip-text text-transparent">
              Weekly Bible Study
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join us every Sunday for an engaging Bible study designed to deepen our faith, 
            explore God's Word together, and apply biblical principles to our lives in tech.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-tech-accent/10 to-purple-500/10 backdrop-blur-sm border-tech-accent/20 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-tech-accent to-purple-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Every Sunday</h3>
                  <p className="text-gray-300">Weekly consistent gathering</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-400/10 backdrop-blur-sm border-purple-500/20 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">5:00 PM EST</h3>
                  <p className="text-gray-300">Perfect timing for college schedules</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-400/10 to-tech-accent/10 backdrop-blur-sm border-cyan-400/20 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-tech-accent rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Interactive Format</h3>
                  <p className="text-gray-300">Discussion-based, not lecture-style</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <Book className="w-8 h-8 text-tech-accent" />
                <h3 className="text-2xl font-bold text-white">What to Expect</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tech-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Opening Prayer:</strong> We begin each session centering our hearts on God
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Scripture Reading:</strong> We dive deep into God's Word together
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Group Discussion:</strong> Share insights and ask questions in a safe space
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tech-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Application:</strong> Connect biblical truths to our daily lives in tech
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Closing Prayer:</strong> Lift up concerns and pray for one another
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-tech-accent/20 to-purple-500/20 rounded-xl p-6 border border-tech-accent/30">
              <h4 className="text-lg font-bold text-white mb-3">Current Series</h4>
              <p className="text-gray-300 mb-4">
                We're reading Acts and discussing how its lessons apply to us as men in the brotherhood. Whether in college or just starting our careers, we all face unique challenges and opportunities to live out our faith.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-tech-accent to-purple-500 hover:from-tech-accent/80 hover:to-purple-500/80 text-white"
              >
                <a href="/join">
                  Join This Sunday
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BibleStudySection;
