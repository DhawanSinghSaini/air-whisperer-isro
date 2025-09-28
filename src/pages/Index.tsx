import { HeroSection } from "@/components/HeroSection";
import { MissionOverview } from "@/components/MissionOverview";
import { HowItWorks } from "@/components/HowItWorks";
import { LiveStatus } from "@/components/LiveStatus";
import { AboutTeam } from "@/components/AboutTeam";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MissionOverview />
      <HowItWorks />
      <LiveStatus />
      <AboutTeam />
      <Footer />
    </div>
  );
};

export default Index;