import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SiteSelector from "./pages/SiteSelector";
import Dashboard from "./pages/Dashboard";
import FeatureAttribution from "./pages/FeatureAttribution";
import Settings from "./pages/Settings";
import ModelPerformance from "./pages/ModelPerformance";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sites" element={<SiteSelector />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attribution" element={<FeatureAttribution />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/performance" element={<ModelPerformance />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
