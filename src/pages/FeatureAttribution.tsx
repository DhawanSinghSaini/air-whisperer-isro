import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Info, BarChart3, Thermometer, Wind, Cloud, Sun, Droplets } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const featureData = {
  O3: [
    { feature: "Temperature", importance: 0.85, description: "Higher temperatures increase photochemical O₃ formation", icon: Thermometer },
    { feature: "Solar Radiation", importance: 0.72, description: "UV radiation drives ozone-forming reactions", icon: Sun },
    { feature: "Wind Speed", importance: 0.64, description: "Wind patterns affect pollutant dispersion", icon: Wind },
    { feature: "Humidity", importance: 0.58, description: "Moisture levels influence chemical reactions", icon: Droplets },
    { feature: "Pressure", importance: 0.45, description: "Atmospheric pressure affects pollutant concentration", icon: Cloud },
    { feature: "Previous O₃", importance: 0.38, description: "Historical ozone levels show temporal patterns", icon: BarChart3 }
  ],
  NO2: [
    { feature: "Traffic Density", importance: 0.89, description: "Vehicle emissions are primary NO₂ source", icon: BarChart3 },
    { feature: "Wind Direction", importance: 0.73, description: "Wind patterns determine pollutant transport", icon: Wind },
    { feature: "Temperature", importance: 0.61, description: "Temperature affects NO₂ chemical reactions", icon: Thermometer },
    { feature: "Industrial Activity", importance: 0.56, description: "Industrial emissions contribute to NO₂ levels", icon: Cloud },
    { feature: "Previous NO₂", importance: 0.42, description: "Temporal patterns in nitrogen dioxide", icon: BarChart3 },
    { feature: "Humidity", importance: 0.35, description: "Moisture affects atmospheric chemistry", icon: Droplets }
  ]
};

const FeatureAttribution = () => {
  const [selectedPollutant, setSelectedPollutant] = useState<'O3' | 'NO2'>('O3');
  
  const currentData = featureData[selectedPollutant];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-foreground">
            Feature <span className="text-primary">Attribution</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Understand which environmental factors most influence air quality predictions
          </p>
        </div>

        {/* Pollutant Toggle */}
        <div className="flex items-center space-x-4 mb-8">
          <span className="text-sm font-medium text-muted-foreground">Select pollutant:</span>
          <div className="flex space-x-2">
            <Button
              variant={selectedPollutant === 'O3' ? 'default' : 'outline'}
              onClick={() => setSelectedPollutant('O3')}
              className="flex items-center space-x-2"
            >
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span>O₃ Ozone</span>
            </Button>
            <Button
              variant={selectedPollutant === 'NO2' ? 'default' : 'outline'}
              onClick={() => setSelectedPollutant('NO2')}
              className="flex items-center space-x-2"
            >
              <div className="w-3 h-3 bg-accent rounded-full" />
              <span>NO₂ Nitrogen Dioxide</span>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Feature Importance Chart */}
          <Card className="satellite-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="text-primary" size={20} />
                <span>Feature Importance Scores</span>
              </CardTitle>
              <CardDescription>
                SHAP values showing each feature's contribution to {selectedPollutant} predictions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={currentData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis type="number" domain={[0, 1]} />
                    <YAxis dataKey="feature" type="category" width={100} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, 'Importance']}
                    />
                    <Bar 
                      dataKey="importance" 
                      fill={selectedPollutant === 'O3' ? 'hsl(var(--primary))' : 'hsl(var(--accent))'}
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Feature Descriptions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center space-x-2">
              <Brain className="text-accent" size={24} />
              <span>Feature Explanations</span>
            </h2>
            
            <div className="space-y-3">
              {currentData.map((feature, index) => {
                const Icon = feature.icon;
                const importancePercent = (feature.importance * 100).toFixed(1);
                
                return (
                  <Card key={index} className="satellite-card">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-10 h-10 ${selectedPollutant === 'O3' ? 'bg-primary/10' : 'bg-accent/10'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className={selectedPollutant === 'O3' ? 'text-primary' : 'text-accent'} size={18} />
                        </div>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-foreground">{feature.feature}</h3>
                            <Badge variant="outline">
                              {importancePercent}% impact
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                          
                          {/* Importance Bar */}
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-700 ${selectedPollutant === 'O3' ? 'bg-primary' : 'bg-accent'}`}
                              style={{ width: `${feature.importance * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Methodology Info */}
        <Card className="satellite-card mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Info className="text-accent" size={20} />
              <span>Attribution Methodology</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">SHAP Analysis</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  SHapley Additive exPlanations (SHAP) values provide unified framework for interpreting 
                  model predictions by quantifying each feature's contribution to individual forecasts.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Feature Engineering</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Features combine satellite observations, meteorological reanalysis data, and 
                  ground-based measurements to capture atmospheric processes driving pollution dynamics.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FeatureAttribution;