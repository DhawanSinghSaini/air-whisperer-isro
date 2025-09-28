import { Database, Cpu, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Ingestion",
    description: "Collect satellite imagery, meteorological data, and ground-based measurements from multiple sources",
    color: "primary"
  },
  {
    icon: Cpu,
    title: "Model Forecasting", 
    description: "LSTM/GRU neural networks process temporal patterns to predict future air quality levels",
    color: "accent"
  },
  {
    icon: BarChart3,
    title: "User Insights",
    description: "Interactive dashboard with feature attribution and actionable environmental intelligence",
    color: "success"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From satellite to screen: our three-step process transforms raw atmospheric data into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border z-0">
                    <div className="absolute right-0 w-3 h-3 bg-primary rounded-full -translate-y-1/2" />
                  </div>
                )}

                {/* Card */}
                <div className="satellite-card p-8 text-center space-y-6 relative z-10 bg-card">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-${step.color}/10 rounded-2xl flex items-center justify-center mx-auto`}>
                    <Icon className={`text-${step.color}`} size={32} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};