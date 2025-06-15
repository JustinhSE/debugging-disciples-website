
import { Card } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcus J.",
      role: "Software Engineering Student, Georgia Tech",
      content: "Debugging Disciples has been a game-changer for me. Finding other Christian men in tech who understand both the pressures of CS coursework and the importance of faith has been incredible. The weekly Bible studies keep me grounded.",
      gradient: "from-tech-accent to-purple-500"
    },
    {
      name: "David L.",
      role: "Computer Science Major, University of Washington",
      content: "I was struggling to balance my faith with the secular environment of my CS program. This community showed me I'm not alone. The brothers here genuinely care about each other's spiritual and professional growth.",
      gradient: "from-purple-500 to-cyan-400"
    },
    {
      name: "Jonathan K.",
      role: "CS Student, MIT",
      content: "The support I've received during difficult seasons has been amazing. Whether it's debugging code or working through personal challenges, I know I have brothers who will pray for me and offer godly wisdom.",
      gradient: "from-cyan-400 to-tech-accent"
    },
    {
      name: "Samuel R.",
      role: "Software Development Intern",
      content: "Being part of Debugging Disciples has helped me see how my skills in technology can be used for God's glory. The community challenges me to pursue excellence not just in code, but in character.",
      gradient: "from-tech-accent to-purple-500"
    },
    {
      name: "Timothy M.",
      role: "CS Major, Stanford University",
      content: "The weekly Bible studies have deepened my understanding of Scripture while the daily Slack conversations keep me encouraged. It's beautiful to see how God is using technology to build His kingdom through us.",
      gradient: "from-purple-500 to-cyan-400"
    },
    {
      name: "Andrew P.",
      role: "Computer Engineering Student",
      content: "I joined as a freshman feeling overwhelmed by both college and maintaining my faith. The older brothers in this community have mentored me and shown me how to navigate the tech world with integrity.",
      gradient: "from-cyan-400 to-tech-accent"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark to-tech-darker"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-accent to-purple-400 bg-clip-text text-transparent">
              What Our Brothers Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Real stories from real members about how Debugging Disciples has impacted their 
            faith journey and career in technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-white/10 p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join the Conversation</h3>
            <p className="text-gray-300 mb-6">
              Ready to become part of a community that will encourage your faith and 
              support your journey in technology? We're excited to welcome you as our newest brother.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-tech-accent">150+</div>
                <div className="text-sm text-gray-400">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">Community Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">Global</div>
                <div className="text-sm text-gray-400">Reach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
