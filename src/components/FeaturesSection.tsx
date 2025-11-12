import { Search, BrainCircuit, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Automated Job Scraping",
    description: "Pulls new jobs 24/7 from LinkedIn, Indeed, and more based on your smart searches.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Analysis",
    description: "Our AI ranks every job against your resume, giving you a 'fit score' from 1-10.",
  },
  {
    icon: LayoutDashboard,
    title: "Smart Kanban Tracker",
    description: "Manage all your applications in a simple, drag-and-drop board.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Everything you need to land your dream job
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Powerful automation meets intelligent insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="fade-up p-8 rounded-2xl bg-background border border-border/40 transition-all hover:border-primary/40 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
