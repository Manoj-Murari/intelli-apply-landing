import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 0%, hsl(var(--hero-gradient-start)), hsl(var(--hero-gradient-end)))`,
        }}
      />

      <div className="container mx-auto px-6 text-center">
        <h1 className="fade-in text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-text-primary max-w-4xl mx-auto leading-tight">
          Your job search, automated.
        </h1>
        
        <p className="fade-in-delay-1 mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          IntelliApply scrapes, analyzes, and tracks job postings for you, so you can focus on what matters: landing the interview.
        </p>

        <div className="fade-in-delay-2 mt-10">
          <Button size="lg" className="text-base px-8 py-6 glow-effect">
            Get Started for Free
          </Button>
        </div>

        {/* Optional: Stats or badges */}
        <div className="fade-in-delay-3 mt-16 flex flex-wrap justify-center gap-8 text-sm text-text-tertiary">
          <div>
            <span className="block text-2xl font-bold text-text-primary">10K+</span>
            <span>Jobs Tracked</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-text-primary">95%</span>
            <span>Accuracy Rate</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-text-primary">24/7</span>
            <span>Monitoring</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
