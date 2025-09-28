import { Button } from "@/components/ui/button";
import { Satellite, ChevronRight } from "lucide-react";
import heroSatellite from "@/assets/hero-satellite.jpg";

export const HeroSection = () => {
  const handleViewForecasts = () => {
    // Navigate to dashboard - placeholder for now
    console.log("Navigating to dashboard...");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSatellite})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
      </div>

      {/* Floating Satellite Icon */}
      <div className="absolute top-20 right-20 float-animation opacity-30">
        <Satellite size={80} className="text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Forecast the Future.
            <br />
            <span className="text-primary-glow">Breathe Better.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Real-time air quality predictions powered by satellite data and AI.
          </p>

          <div className="pt-8">
            <Button 
              onClick={handleViewForecasts}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              View Forecasts
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-primary-glow/20 blur-xl animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-accent/20 blur-lg animate-pulse delay-1000" />
    </section>
  );
};