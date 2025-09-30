import { MapPin, TrendingUp, TrendingDown } from "lucide-react";

const delhiSites = [
  
  { site: "South Delhi", O3: 42.1, NO2: 18.3, status: "moderate", trend: "up" },
  { site: "West Delhi", O3: 35.7, NO2: 22.9, status: "poor", trend: "down" },
  { site: "Central Delhi", O3: 39.2, NO2: 15.8, status: "good", trend: "down" },
  { site: "East Delhi", O3: 48.5, NO2: 26.1, status: "poor", trend: "up" },
  { site: "North Delhi", O3: 33.8, NO2: 19.7, status: "moderate", trend: "down" },
  { site: "North-West Delhi", O3: 29.4, NO2: 14.2, status: "good", trend: "down" },
  { site: "South-West Delhi", O3: 59.0, NO2: 27.0, status: "moderate", trend: "up" }


];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'good': return 'status-good';
    case 'moderate': return 'status-moderate';
    case 'poor': return 'status-poor';
    default: return 'status-moderate';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'good': return 'Good';
    case 'moderate': return 'Moderate';
    case 'poor': return 'Poor';
    default: return 'Unknown';
  }
};

export const LiveStatus = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Live Air Quality <span className="text-primary">Status</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time pollutant levels across Delhi metropolitan area
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Updated 5 minutes ago</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {delhiSites.map((site, index) => (
            <div key={index} className="satellite-card p-6 space-y-4 hover:scale-105 transition-transform duration-300">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-primary" size={16} />
                  <h3 className="font-semibold text-foreground">{site.site}</h3>
                </div>
                
                <div className="flex items-center space-x-1">
                  {site.trend === 'up' ? (
                    <TrendingUp className="text-destructive" size={16} />
                  ) : (
                    <TrendingDown className="text-success" size={16} />
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(site.status)}`}>
                {getStatusText(site.status)}
              </div>

              {/* Pollutant Levels */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">O₃ Level</span>
                  <span className="text-lg font-bold text-foreground">{site.O3} μg/m³</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">NO₂ Level</span>
                  <span className="text-lg font-bold text-foreground">{site.NO2} μg/m³</span>
                </div>

                {/* Progress Bars */}
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${Math.min((site.O3 / 60) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${Math.min((site.NO2 / 40) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
