import { Badge } from '@/components/ui/badge';

const CompaniesSection = () => {
  const companies = [
    "Google",
    "Microsoft",
    "Apple",
    "Meta",
    "Amazon",
    "Netflix",
    "Tesla",
    "Stripe",
    "Figma",
    "Airbnb",
    "Uber",
    "Spotify",
    "Adobe",
    "Salesforce",
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-darker to-tech-dark"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-accent to-purple-400 bg-clip-text text-transparent">
              Members from Top Companies
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Our community includes talented engineers and developers from some of the world's most innovative companies. 
            Feel free to import components and insights from your organizations and share your experiences with the brotherhood.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {/* {companies.map((company, index) => (
              <Badge 
                key={index}
                className="px-4 py-2 text-base bg-gradient-to-r from-tech-accent/20 to-purple-500/20 border border-tech-accent/30 text-white hover:from-tech-accent/30 hover:to-purple-500/30 transition-colors"
              >
                {company}
              </Badge>
            ))} */}
            (Coming Soon!)
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
