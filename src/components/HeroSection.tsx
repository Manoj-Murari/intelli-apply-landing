import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const headline = useScrollAnimation({ threshold: 0.2 });
  const tagline = useScrollAnimation({ threshold: 0.2 });
  const cta = useScrollAnimation({ threshold: 0.2 });
  const stats = useScrollAnimation({ threshold: 0.2 });

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
        <h1
          ref={headline.ref as React.RefObject<HTMLHeadingElement>}
          className={cn(
            "scroll-fade-up text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-text-primary max-w-4xl mx-auto leading-tight",
            headline.isVisible && "is-visible"
          )}
        >
          Your job search, automated.
        </h1>
        
        <p
          ref={tagline.ref as React.RefObject<HTMLParagraphElement>}
          className={cn(
            "scroll-fade-up mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed",
            tagline.isVisible && "is-visible"
          )}
          style={{ transitionDelay: "0.1s" }}
        >
          IntelliApply scrapes, analyzes, and tracks job postings for you, so you can focus on what matters: landing the interview.
        </p>

        <div
          ref={cta.ref as React.RefObject<HTMLDivElement>}
          className={cn("scroll-scale-in mt-10", cta.isVisible && "is-visible")}
          style={{ transitionDelay: "0.2s" }}
        >
          <Button size="lg" className="text-base px-8 py-6 glow-effect">
            Get Started for Free
          </Button>
        </div>

        {/* Optional: Stats or badges */}
        <div
          ref={stats.ref as React.RefObject<HTMLDivElement>}
          className={cn(
            "scroll-fade-in mt-16 flex flex-wrap justify-center gap-8 text-sm text-text-tertiary",
            stats.isVisible && "is-visible"
          )}
          style={{ transitionDelay: "0.3s" }}
        >
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
