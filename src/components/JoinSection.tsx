
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slack, MessageSquare, Calendar, CheckCircle } from 'lucide-react';

const JoinSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Complete Application",
      description: "Fill out our simple application form to tell us about yourself and your faith journey."
    },
    {
      icon: Slack,
      title: "Join Slack",
      description: "Get invited to our Slack workspace where all the daily conversations and connections happen."
    },
    {
      icon: Calendar,
      title: "Attend Bible Study",
      description: "Join us for your first Sunday Bible study and start building meaningful relationships."
    }
  ];

  const benefits = [
    "24/7 access to a supportive community of Christian men in tech",
    "Weekly Bible studies designed for busy college schedules",
    "Prayer support during challenging seasons",
    "Resources for integrating faith and technology"
  ];

  return (
    <section id="join" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-darker to-tech-dark"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-accent to-purple-400 bg-clip-text text-transparent">
              Join Our Brotherhood
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to connect with Christian brothers who share your passion for technology? 
            <br />Join our growing community of 250 members worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border-white/10 p-7 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-tech-accent to-purple-500 rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-lg font-bold text-tech-accent">Step {index + 1}</span>
                      <h4 className="text-lg font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="w-8 h-8 text-tech-accent mr-3" />
                Membership Benefits
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-tech-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-tech-accent/20 to-purple-500/20 rounded-xl p-6 border border-tech-accent/30">
              <h4 className="text-lg font-bold text-white mb-3">Who Can Join?</h4>
              <div className="space-y-2 text-gray-300">
                <p>• Male college students studying Computer Science or related fields</p>
                <p>• Committed Christians seeking community and growth</p>
                <p>• Those passionate about using technology for God's glory</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
            <Slack className="w-16 h-16 text-tech-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Click the button below to begin your application. We typically respond within 24-48 hours 
              and would love to welcome you into our community!
            </p>
            <a
              href="https://forms.gle/6s5EJ1FPXgmyVXsQ7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-tech-accent to-purple-500 hover:from-tech-accent/80 hover:to-purple-500/80 text-white px-8 py-4 text-lg glow-blue w-full sm:w-auto"
              >
                Apply to Join Community
              </Button>
            </a>
          </div>
      </div>
    </section>
  );
};

export default JoinSection;
