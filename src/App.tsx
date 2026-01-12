import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegionProvider } from "@/contexts/RegionContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GeminiEnterprise from "./pages/GeminiEnterprise";
import GoogleAIUltra from "./pages/GoogleAIUltra";
import Glean from "./pages/Glean";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RegionProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gemini-enterprise" element={<GeminiEnterprise />} />
            <Route path="/google-ai-ultra" element={<GoogleAIUltra />} />
            <Route path="/glean" element={<Glean />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RegionProvider>
  </QueryClientProvider>
);

export default App;
