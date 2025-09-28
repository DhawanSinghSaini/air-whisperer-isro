import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, TrendingUp, Calendar, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const monitoringSites = [
  {
    id: "south-delhi",
    name: "South Delhi",
    location: "28.5355°N, 77.2910°E",
    avgAQI: 156,
    lastUpdated: "2025-01-28",
    status: "moderate",
    description: "Urban residential area with mixed commercial activity"
  },
  {
    id: "west-delhi", 
    name: "West Delhi",
    location: "28.6692°N, 77.1355°E",
    avgAQI: 189,
    lastUpdated: "2025-01-28",
    status: "poor",
    description: "Industrial corridor with heavy traffic density"
  },
  {
    id: "central-delhi",
    name: "Central Delhi",
    location: "28.6448°N, 77.2167°E", 
    avgAQI: 134,
    lastUpdated: "2025-01-28",
    status: "moderate",
    description: "Government district with commercial establishments"
  },
  {
    id: "east-delhi",
    name: "East Delhi",
    location: "28.6358°N, 77.2906°E",
    avgAQI: 201,
    lastUpdated: "2025-01-28", 
    status: "poor",
    description: "Dense residential area with industrial activities"
  },
  {
    id: "north-delhi",
    name: "North Delhi", 
    location: "28.7041°N, 77.1025°E",
    avgAQI: 167,
    lastUpdated: "2025-01-28",
    status: "moderate",
    description: "Mixed urban area with transportation hubs"
  },
  {
    id: "dwarka",
    name: "Dwarka",
    location: "28.5921°N, 77.0460°E",
    avgAQI: 112,
    lastUpdated: "2025-01-28",
    status: "good",
    description: "Planned residential township with green spaces"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'good': return 'text-success';
    case 'moderate': return 'text-warning'; 
    case 'poor': return 'text-destructive';
    default: return 'text-muted-foreground';
  }
};

const SiteSelector = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-foreground">
            Monitoring <span className="text-primary">Sites</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Select a monitoring site to view detailed air quality forecasts and analysis
          </p>
        </div>

        {/* Site Selector */}
        <div className="mb-8">
          <div className="max-w-md">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Quick site selection" />
              </SelectTrigger>
              <SelectContent>
                {monitoringSites.map((site) => (
                  <SelectItem key={site.id} value={site.id}>
                    {site.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Sites Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {monitoringSites.map((site) => (
            <Card key={site.id} className="satellite-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="text-primary" size={20} />
                    <span>{site.name}</span>
                  </CardTitle>
                  <div className={`text-sm font-medium ${getStatusColor(site.status)}`}>
                    {site.status.toUpperCase()}
                  </div>
                </div>
                <CardDescription>{site.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Location */}
                <div className="text-sm text-muted-foreground">
                  📍 {site.location}
                </div>

                {/* AQI Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="text-muted-foreground" size={16} />
                    <span className="text-sm text-muted-foreground">Avg AQI</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground">{site.avgAQI}</span>
                </div>

                {/* Last Updated */}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>Updated: {site.lastUpdated}</span>
                </div>

                {/* Actions */}
                <div className="pt-2">
                  <Link to="/dashboard" state={{ selectedSite: site.id }}>
                    <Button className="w-full flex items-center space-x-2">
                      <Eye size={16} />
                      <span>View Dashboard</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Site Locations</h2>
          <div className="satellite-card p-8 text-center">
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="mx-auto text-primary" size={48} />
                <p className="text-muted-foreground">Interactive map coming soon</p>
                <p className="text-sm text-muted-foreground">
                  Click on sites above to explore detailed forecasts
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SiteSelector;