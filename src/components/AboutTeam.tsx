import { Rocket, Users, Award } from "lucide-react";
import isroSatellite from "@/assets/isro-satellite.jpg";

export const AboutTeam = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative">
            <img 
              src={isroSatellite} 
              alt="ISRO Satellite" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Pioneering 
                <span className="text-primary block">Environmental Intelligence</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                This initiative represents a collaborative effort between ISRO's Earth Observation Program 
                and advanced AI research teams. We leverage decades of satellite expertise combined with 
                cutting-edge machine learning to create actionable environmental insights for policy makers 
                and citizens across India.
              </p>
            </div>

            {/* Stats/Features */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Rocket className="text-primary" size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-xs text-muted-foreground">Satellites</p>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="text-accent" size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-xs text-muted-foreground">Scientists</p>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
                  <Award className="text-success" size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">24/7</p>
                  <p className="text-xs text-muted-foreground">Monitoring</p>
                </div>
              </div>
            </div>

            {/* Contributors */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Contributors</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Indian Space Research Organisation (ISRO)</p>
                <p>• National Remote Sensing Centre (NRSC)</p>
                <p>• Indian Institute of Technology (IIT) Research Teams</p>
                <p>• Department of Space, Government of India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};