import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, Target, Clock, Zap, AlertCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const performanceData = [
  { site: "South Delhi", rmse: 8.2, mae: 6.1, r2: 0.89, accuracy: 94.2 },
  { site: "West Delhi", rmse: 9.5, mae: 7.3, r2: 0.85, accuracy: 91.8 },
  { site: "Central Delhi", rmse: 7.8, mae: 5.9, r2: 0.91, accuracy: 95.1 },
  { site: "East Delhi", rmse: 10.1, mae: 8.2, r2: 0.82, accuracy: 89.7 },
  { site: "North Delhi", rmse: 8.7, mae: 6.8, r2: 0.87, accuracy: 92.5 },
  { site: "Dwarka", rmse: 7.2, mae: 5.4, r2: 0.93, accuracy: 96.3 }
];

const trainingHistory = [
  { date: "2025-01-01", rmse: 12.3, mae: 9.8, r2: 0.78 },
  { date: "2025-01-08", rmse: 10.5, mae: 8.2, r2: 0.82 },
  { date: "2025-01-15", rmse: 9.1, mae: 7.1, r2: 0.86 },
  { date: "2025-01-22", rmse: 8.4, mae: 6.5, r2: 0.89 },
  { date: "2025-01-29", rmse: 8.2, mae: 6.1, r2: 0.91 }
];

const retrainingLogs = [
  { date: "2025-01-29", model: "LSTM-GRU v2.1", status: "completed", duration: "2h 15m", improvement: "+2.1%" },
  { date: "2025-01-22", model: "LSTM-GRU v2.0", status: "completed", duration: "2h 8m", improvement: "+1.8%" },
  { date: "2025-01-15", model: "LSTM-GRU v1.9", status: "completed", duration: "1h 52m", improvement: "+3.2%" },
  { date: "2025-01-08", model: "LSTM-GRU v1.8", status: "completed", duration: "1h 45m", improvement: "+1.5%" },
  { date: "2025-01-01", model: "LSTM-GRU v1.7", status: "failed", duration: "0h 32m", improvement: "N/A" }
];

const ModelPerformance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-foreground">
            Model <span className="text-primary">Performance</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Track AI model accuracy, training metrics, and system performance
          </p>
        </div>

        {/* Overall Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="satellite-card">
            <CardContent className="p-6 text-center">
              <div className="space-y-2">
                <Target className="mx-auto text-primary" size={24} />
                <div className="text-2xl font-bold text-foreground">93.2%</div>
                <div className="text-sm text-muted-foreground">Average Accuracy</div>
              </div>
            </CardContent>
          </Card>

          <Card className="satellite-card">
            <CardContent className="p-6 text-center">
              <div className="space-y-2">
                <TrendingUp className="mx-auto text-success" size={24} />
                <div className="text-2xl font-bold text-foreground">8.6</div>
                <div className="text-sm text-muted-foreground">Average RMSE</div>
              </div>
            </CardContent>
          </Card>

          <Card className="satellite-card">
            <CardContent className="p-6 text-center">
              <div className="space-y-2">
                <Zap className="mx-auto text-accent" size={24} />
                <div className="text-2xl font-bold text-foreground">2.3s</div>
                <div className="text-sm text-muted-foreground">Prediction Time</div>
              </div>
            </CardContent>
          </Card>

          <Card className="satellite-card">
            <CardContent className="p-6 text-center">
              <div className="space-y-2">
                <Calendar className="mx-auto text-warning" size={24} />
                <div className="text-2xl font-bold text-foreground">Jan 29</div>
                <div className="text-sm text-muted-foreground">Last Retrained</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Performance by Site */}
          <Card className="satellite-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="text-primary" size={20} />
                <span>Accuracy by Site</span>
              </CardTitle>
              <CardDescription>Model performance across all monitoring locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData} margin={{ bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="site" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      fontSize={12}
                    />
                    <YAxis domain={[85, 100]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      formatter={(value: number) => [`${value}%`, 'Accuracy']}
                    />
                    <Bar 
                      dataKey="accuracy" 
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Training Progress */}
          <Card className="satellite-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="text-success" size={20} />
                <span>Training Progress</span>
              </CardTitle>
              <CardDescription>Model improvement over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trainingHistory}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="rmse"
                      stroke="hsl(var(--destructive))"
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--destructive))', strokeWidth: 2, r: 4 }}
                      name="RMSE"
                    />
                    <Line
                      type="monotone"
                      dataKey="r2"
                      stroke="hsl(var(--success))"
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 4 }}
                      name="R² Score"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Performance Table */}
        <Card className="satellite-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="text-accent" size={20} />
              <span>Detailed Performance Metrics</span>
            </CardTitle>
            <CardDescription>Comprehensive evaluation scores for each monitoring site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-medium text-foreground">Site</th>
                    <th className="text-center py-3 px-2 font-medium text-foreground">RMSE</th>
                    <th className="text-center py-3 px-2 font-medium text-foreground">MAE</th>
                    <th className="text-center py-3 px-2 font-medium text-foreground">R² Score</th>
                    <th className="text-center py-3 px-2 font-medium text-foreground">Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((site, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-2 font-medium text-foreground">{site.site}</td>
                      <td className="text-center py-3 px-2 text-muted-foreground">{site.rmse}</td>
                      <td className="text-center py-3 px-2 text-muted-foreground">{site.mae}</td>
                      <td className="text-center py-3 px-2 text-muted-foreground">{site.r2}</td>
                      <td className="text-center py-3 px-2">
                        <Badge variant={site.accuracy > 95 ? "default" : site.accuracy > 90 ? "secondary" : "outline"}>
                          {site.accuracy}%
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Retraining Logs */}
        <Card className="satellite-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="text-warning" size={20} />
              <span>Recent Training Activity</span>
            </CardTitle>
            <CardDescription>Model retraining history and performance improvements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {retrainingLogs.map((log, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      log.status === 'completed' ? 'bg-success' : 
                      log.status === 'failed' ? 'bg-destructive' : 'bg-warning'
                    }`} />
                    
                    <div className="space-y-1">
                      <div className="font-medium text-foreground">{log.model}</div>
                      <div className="text-sm text-muted-foreground">{log.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <div className="text-muted-foreground">Duration</div>
                      <div className="font-medium text-foreground">{log.duration}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-muted-foreground">Improvement</div>
                      <div className={`font-medium ${
                        log.status === 'completed' ? 'text-success' : 'text-muted-foreground'
                      }`}>
                        {log.improvement}
                      </div>
                    </div>
                    
                    <Badge variant={log.status === 'completed' ? 'default' : 'destructive'}>
                      {log.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ModelPerformance;