import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, Clock, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

// Mock forecast data
const forecastData = [
  { time: "00:00", O3_actual: 42, O3_predicted: 45, NO2_actual: 18, NO2_predicted: 20, confidence_upper: 50, confidence_lower: 40 },
  { time: "06:00", O3_actual: 38, O3_predicted: 41, NO2_actual: 22, NO2_predicted: 24, confidence_upper: 46, confidence_lower: 36 },
  { time: "12:00", O3_actual: 55, O3_predicted: 52, NO2_actual: 28, NO2_predicted: 26, confidence_upper: 57, confidence_lower: 47 },
  { time: "18:00", O3_actual: 48, O3_predicted: 50, NO2_actual: 32, NO2_predicted: 30, confidence_upper: 55, confidence_lower: 45 },
  { time: "24:00", O3_actual: null, O3_predicted: 44, NO2_actual: null, NO2_predicted: 25, confidence_upper: 49, confidence_lower: 39 },
];

const modelInfo = {
  type: "LSTM-GRU Ensemble",
  accuracy: 94.2,
  lastTrained: "2025-01-25",
  features: 12,
  confidence: 92
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Air Quality <span className="text-primary">Dashboard</span>
            </h1>
            <p className="text-lg text-muted-foreground">South Delhi Station</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <Select defaultValue="south-delhi">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="south-delhi">South Delhi</SelectItem>
                <SelectItem value="west-delhi">West Delhi</SelectItem>
                <SelectItem value="central-delhi">Central Delhi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Current Status Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="satellite-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span>O₃ Ozone Level</span>
              </CardTitle>
              <CardDescription>Current and 24h forecast</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-foreground">42.1 μg/m³</span>
                  <div className="flex items-center space-x-1 text-success">
                    <TrendingDown size={16} />
                    <span className="text-sm">-2.3%</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">24h Prediction</span>
                    <span className="font-medium">44.0 μg/m³</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: '42%' }} />
                  </div>
                </div>
                
                <Badge variant="outline" className="text-warning">Moderate</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="satellite-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span>NO₂ Nitrogen Dioxide</span>
              </CardTitle>
              <CardDescription>Current and 24h forecast</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-foreground">18.3 μg/m³</span>
                  <div className="flex items-center space-x-1 text-destructive">
                    <TrendingUp size={16} />
                    <span className="text-sm">+1.7%</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">24h Prediction</span>
                    <span className="font-medium">25.0 μg/m³</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full transition-all duration-500" style={{ width: '36%' }} />
                  </div>
                </div>
                
                <Badge variant="outline" className="text-success">Good</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Forecast Chart */}
        <Card className="satellite-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="text-primary" size={20} />
              <span>24-Hour Forecast Trend</span>
            </CardTitle>
            <CardDescription>Historical data vs AI predictions with confidence intervals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={forecastData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  
                  {/* Confidence Band */}
                  <Area
                    type="monotone"
                    dataKey="confidence_upper"
                    stackId="1"
                    stroke="none"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.1}
                  />
                  <Area
                    type="monotone" 
                    dataKey="confidence_lower"
                    stackId="1"
                    stroke="none"
                    fill="hsl(var(--background))"
                    fillOpacity={1}
                  />
                  
                  {/* Actual Data */}
                  <Line
                    type="monotone"
                    dataKey="O3_actual"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                    name="O₃ Actual"
                  />
                  
                  {/* Predicted Data */}
                  <Line
                    type="monotone"
                    dataKey="O3_predicted"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                    name="O₃ Predicted"
                  />
                  
                  <Line
                    type="monotone"
                    dataKey="NO2_actual"
                    stroke="hsl(var(--accent))"
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
                    name="NO₂ Actual"
                  />
                  
                  <Line
                    type="monotone"
                    dataKey="NO2_predicted"
                    stroke="hsl(var(--accent))"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
                    name="NO₂ Predicted"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Model Information */}
        <Card className="satellite-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="text-accent" size={20} />
              <span>Model Information</span>
            </CardTitle>
            <CardDescription>Current AI model performance and metadata</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">{modelInfo.type}</div>
                <div className="text-sm text-muted-foreground">Model Architecture</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-success">{modelInfo.accuracy}%</div>
                <div className="text-sm text-muted-foreground">Accuracy Score</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center space-x-1">
                  <Clock size={16} className="text-muted-foreground" />
                  <div className="text-lg font-bold text-foreground">{modelInfo.lastTrained}</div>
                </div>
                <div className="text-sm text-muted-foreground">Last Retrained</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-accent">{modelInfo.confidence}%</div>
                <div className="text-sm text-muted-foreground">Confidence Level</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;