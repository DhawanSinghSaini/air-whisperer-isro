import { Link, useLocation } from "react-router-dom";
import { Cloud, Home, MapPin, BarChart3, Brain, Settings, TrendingUp, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/sites", label: "Sites", icon: MapPin },
  { path: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { path: "/attribution", label: "Attribution", icon: Brain },
  { path: "/performance", label: "Performance", icon: TrendingUp },
  { path: "/settings", label: "Settings", icon: Settings },
  { path: "/contact", label: "Contact", icon: Phone },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Cloud className="text-white" size={16} />
            </div>
            <span className="text-xl font-bold text-foreground">ISRO Forecast</span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Settings size={16} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};