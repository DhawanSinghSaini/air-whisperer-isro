import { Github, Mail, ExternalLink, Cloud, Brain } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Cloud className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold">ISRO Forecast</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Satellite-powered air quality predictions for a cleaner tomorrow.
            </p>
            <div className="text-xs text-background/50">
              Made with ☁️ + 🧠 by Team ISRO
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#dashboard" className="text-background/70 hover:text-background transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#forecasts" className="text-background/70 hover:text-background transition-colors">
                  Forecasts
                </a>
              </li>
              <li>
                <a href="#api" className="text-background/70 hover:text-background transition-colors">
                  API Access
                </a>
              </li>
              <li>
                <a href="#data" className="text-background/70 hover:text-background transition-colors">
                  Data Sources
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#methodology" className="text-background/70 hover:text-background transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#research" className="text-background/70 hover:text-background transition-colors">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#support" className="text-background/70 hover:text-background transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-background/70 hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="space-y-3">
              <a 
                href="#github" 
                className="flex items-center space-x-2 text-background/70 hover:text-background transition-colors"
              >
                <Github size={16} />
                <span className="text-sm">Open Source</span>
                <ExternalLink size={12} />
              </a>
              <a 
                href="#contact" 
                className="flex items-center space-x-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">Contact Team</span>
              </a>
              <a 
                href="#isro" 
                className="flex items-center space-x-2 text-background/70 hover:text-background transition-colors"
              >
                <Brain size={16} />
                <span className="text-sm">ISRO.gov.in</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              © 2025 ISRO Forecast Dashboard. All rights reserved.
            </div>
            <div className="text-xs text-background/50">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};