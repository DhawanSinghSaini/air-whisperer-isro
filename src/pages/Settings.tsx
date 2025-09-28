import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Settings as SettingsIcon, Clock, Cpu, Palette, Filter, Save } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [forecastHorizon, setForecastHorizon] = useState([24]);
  const [smoothingLevel, setSmoothingLevel] = useState([3]);
  const [darkMode, setDarkMode] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [selectedModel, setSelectedModel] = useState("lstm-gru");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-foreground">
            <span className="text-primary">Settings</span> & Configuration
          </h1>
          <p className="text-lg text-muted-foreground">
            Customize your air quality forecasting experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Forecast Settings */}
          <Card className="satellite-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="text-primary" size={20} />
                <span>Forecast Configuration</span>
              </CardTitle>
              <CardDescription>
                Adjust prediction parameters and time horizons
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Forecast Horizon */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground">
                    Forecast Horizon
                  </label>
                  <span className="text-sm text-muted-foreground">
                    {forecastHorizon[0]} hours
                  </span>
                </div>
                <Slider
                  value={forecastHorizon}
                  onValueChange={setForecastHorizon}
                  max={72}
                  min={6}
                  step={6}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>6h</span>
                  <span>24h</span>
                  <span>48h</span>
                  <span>72h</span>
                </div>
              </div>

              {/* Update Frequency */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-foreground">
                    Auto Refresh
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Automatically update forecasts every 15 minutes
                  </p>
                </div>
                <Switch 
                  checked={autoRefresh} 
                  onCheckedChange={setAutoRefresh}
                />
              </div>
            </CardContent>
          </Card>

          {/* Model Settings */}
          <Card className="satellite-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cpu className="text-accent" size={20} />
                <span>AI Model Selection</span>
              </CardTitle>
              <CardDescription>
                Choose the prediction model and processing options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Model Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Prediction Model
                </label>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lstm-gru">LSTM-GRU Ensemble (Recommended)</SelectItem>
                    <SelectItem value="lstm">LSTM Only</SelectItem>
                    <SelectItem value="gru">GRU Only</SelectItem>
                    <SelectItem value="transformer">Transformer Network</SelectItem>
                    <SelectItem value="linear">Linear Regression (Fast)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Ensemble models provide better accuracy but require more processing time
                </p>
              </div>

              {/* Model Info */}
              <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                <h4 className="text-sm font-medium text-foreground">Current Model Info</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Accuracy:</span>
                    <span className="ml-2 font-medium text-success">94.2%</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Last Trained:</span>
                    <span className="ml-2 font-medium">2025-01-25</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Features:</span>
                    <span className="ml-2 font-medium">12 variables</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Prediction Time:</span>
                    <span className="ml-2 font-medium">~2.3s</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Processing */}
          <Card className="satellite-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="text-success" size={20} />
                <span>Data Processing</span>
              </CardTitle>
              <CardDescription>
                Configure data smoothing and filtering options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Smoothing Level */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground">
                    Data Smoothing
                  </label>
                  <span className="text-sm text-muted-foreground">
                    Level {smoothingLevel[0]}
                  </span>
                </div>
                <Slider
                  value={smoothingLevel}
                  onValueChange={setSmoothingLevel}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Raw</span>
                  <span>Light</span>
                  <span>Moderate</span>
                  <span>Heavy</span>
                  <span>Maximum</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Display Settings */}
          <Card className="satellite-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="text-warning" size={20} />
                <span>Display Preferences</span>
              </CardTitle>
              <CardDescription>
                Customize the visual appearance and theme
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-foreground">
                    Dark Mode
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Switch to dark theme for better visibility in low light
                  </p>
                </div>
                <Switch 
                  checked={darkMode} 
                  onCheckedChange={setDarkMode}
                />
              </div>

              {/* Units */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Concentration Units
                </label>
                <Select defaultValue="ug-m3">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ug-m3">μg/m³ (Micrograms per cubic meter)</SelectItem>
                    <SelectItem value="ppm">ppm (Parts per million)</SelectItem>
                    <SelectItem value="ppb">ppb (Parts per billion)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Save Settings */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline">Reset to Defaults</Button>
            <Button className="flex items-center space-x-2">
              <Save size={16} />
              <span>Save Settings</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;