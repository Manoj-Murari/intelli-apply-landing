const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Upload your resume and set your job preferences. Our AI learns what you're looking for.",
  },
  {
    number: "02",
    title: "Run Your Search",
    description: "Activate smart searches. We'll continuously monitor job boards and find new opportunities.",
  },
  {
    number: "03",
    title: "Apply & Track",
    description: "Review AI-scored matches, apply with one click, and track everything in your personalized board.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4">
            How it works
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get started in minutes, not hours
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="fade-up flex flex-col md:flex-row gap-6 items-start"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary text-2xl font-bold">
                  {step.number}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
