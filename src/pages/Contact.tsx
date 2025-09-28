import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Github, ExternalLink, MessageSquare, HelpCircle, Bug, Lightbulb } from "lucide-react";

const faqData = [
  {
    question: "How accurate are the air quality predictions?",
    answer: "Our LSTM-GRU ensemble models achieve 93.2% average accuracy across all monitoring sites. Accuracy varies by location and pollutant type, with ozone predictions typically more accurate than NO₂ due to stronger temporal patterns."
  },
  {
    question: "How often are forecasts updated?",
    answer: "Forecasts are updated every 15 minutes using real-time satellite data and meteorological inputs. The AI models are retrained weekly with new data to maintain prediction accuracy."
  },
  {
    question: "What data sources power the predictions?",
    answer: "We combine ISRO satellite observations, meteorological reanalysis data, ground-based sensor networks, and historical air quality records to create comprehensive environmental datasets for training our models."
  },
  {
    question: "Can I access the prediction API?",
    answer: "Yes, we provide RESTful API access for researchers and institutions. Contact our team for API documentation and access credentials. Rate limits and usage guidelines apply."
  },
  {
    question: "How far ahead can you predict air quality?",
    answer: "Current models provide reliable forecasts up to 72 hours ahead. Prediction confidence decreases with longer time horizons, but 24-hour forecasts maintain >90% accuracy."
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-foreground">
            Contact <span className="text-primary">& Support</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team or find answers to common questions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="satellite-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="text-primary" size={20} />
                  <span>Send Feedback</span>
                </CardTitle>
                <CardDescription>
                  Help us improve the ISRO Forecast Dashboard with your suggestions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What is this about?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bug-report">🐛 Bug Report</SelectItem>
                      <SelectItem value="feature-request">💡 Feature Request</SelectItem>
                      <SelectItem value="data-question">📊 Data Question</SelectItem>
                      <SelectItem value="api-access">🔌 API Access</SelectItem>
                      <SelectItem value="collaboration">🤝 Collaboration</SelectItem>
                      <SelectItem value="other">💬 Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us about your experience, suggestions, or questions..." 
                    rows={6}
                  />
                </div>

                <Button className="w-full flex items-center space-x-2">
                  <Mail size={16} />
                  <span>Send Message</span>
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="satellite-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="text-accent" size={20} />
                  <span>Frequently Asked Questions</span>
                </CardTitle>
                <CardDescription>
                  Common questions about air quality forecasting and our platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqData.map((faq, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="font-semibold text-foreground">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                      {index < faqData.length - 1 && (
                        <div className="border-b border-border/50" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Links */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="satellite-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" className="flex items-center space-x-2">
                    <Bug size={16} />
                    <span>Report Bug</span>
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" className="flex items-center space-x-2">
                    <Lightbulb size={16} />
                    <span>Suggest Feature</span>
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" className="flex items-center space-x-2">
                    <Github size={16} />
                    <span>GitHub Repository</span>
                    <ExternalLink size={12} />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="satellite-card">
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary flex-shrink-0" size={16} />
                    <div className="text-sm">
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">forecast@isro.gov.in</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-accent flex-shrink-0" size={16} />
                    <div className="text-sm">
                      <div className="font-medium text-foreground">Support</div>
                      <div className="text-muted-foreground">+91-080-22172290</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-4">
                  <div className="text-sm space-y-2">
                    <div className="font-medium text-foreground">Office Hours</div>
                    <div className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM IST
                    </div>
                    <div className="text-muted-foreground">
                      Response time: 24-48 hours
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team & Organization */}
            <Card className="satellite-card">
              <CardHeader>
                <CardTitle className="text-lg">About the Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-foreground">Lead Organization</div>
                    <div className="text-muted-foreground">Indian Space Research Organisation</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-foreground">Research Partners</div>
                    <div className="text-muted-foreground">
                      NRSC, IIT Network, DoS
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Atmospheric Science</Badge>
                  <Badge variant="outline">AI/ML Research</Badge>
                  <Badge variant="outline">Remote Sensing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;