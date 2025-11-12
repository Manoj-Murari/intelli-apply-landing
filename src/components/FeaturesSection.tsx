import { Search, BrainCircuit, LayoutDashboard, Mic } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Search,
    title: "Automated Job Scraping",
    description: "Pulls new jobs 24/7 from LinkedIn, Indeed, and more based on your smart searches.",
    comingSoon: false,
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Analysis",
    description: "Our AI ranks every job against your resume, giving you a 'fit score' from 1-10.",
    comingSoon: false,
  },
  {
    icon: LayoutDashboard,
    title: "Smart Kanban Tracker",
    description: "Manage all your applications in a simple, drag-and-drop board.",
    comingSoon: false,
  },
  {
    icon: Mic,
    title: "AI Mock Interview",
    description: "Practice your interview skills with an AI that asks you questions based on your resume and the job description.",
    comingSoon: true,
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const animation = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      ref={animation.ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "scroll-fade-up p-8 rounded-2xl bg-background border border-border/40 transition-all hover:border-primary/40 hover:shadow-lg",
        animation.isVisible && "is-visible"
      )}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
        <feature.icon size={24} />
      </div>
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-xl font-bold text-text-primary">
          {feature.title}
        </h3>
        {feature.comingSoon && (
          <Badge variant="secondary" className="text-xs px-2 py-0.5">
            Coming Soon
          </Badge>
        )}
      </div>
      <p className="text-text-secondary leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  const header = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="features" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={cn(
            "scroll-fade-up text-center mb-16",
            header.isVisible && "is-visible"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Everything you need to land your dream job
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Powerful automation meets intelligent insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
