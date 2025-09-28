import { Zap, Globe, Brain } from "lucide-react";
import pollutionMolecules from "@/assets/pollution-molecules.jpg";

export const MissionOverview = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Satellite Intelligence for
                <span className="text-primary block">Cleaner Cities</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                ISRO Forecast Dashboard uses satellite imagery, reanalysis data, and deep learning 
                to predict air pollution levels across Indian cities. Our advanced models process 
                real-time atmospheric data to provide accurate forecasts for O₃, NO₂, and AOD levels.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Globe className="text-primary" size={24} />
                </div>
                <p className="text-sm font-medium text-foreground">Satellite Data</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                  <Brain className="text-accent" size={24} />
                </div>
                <p className="text-sm font-medium text-foreground">AI Predictions</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="text-success" size={24} />
                </div>
                <p className="text-sm font-medium text-foreground">Real-time</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <img 
              src={pollutionMolecules} 
              alt="Pollution molecule visualization" 
              className="rounded-2xl shadow-2xl float-animation"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};