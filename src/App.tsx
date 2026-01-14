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
import GoogleWorkspace from "./pages/GoogleWorkspace";
import Microsoft365 from "./pages/Microsoft365";
import ZohoMail from "./pages/ZohoMail";
import JumpCloud from "./pages/JumpCloud";
import Viami from "./pages/Viami";
import Scalefusion from "./pages/Scalefusion";
import Jamf from "./pages/Jamf";
import Okta from "./pages/Okta";
import MiniOrange from "./pages/MiniOrange";
import SuperOps from "./pages/SuperOps";
import Atera from "./pages/Atera";
import AWS from "./pages/AWS";
import Azure from "./pages/Azure";
import JioCloud from "./pages/JioCloud";
import PaloAlto from "./pages/PaloAlto";
import Wiz from "./pages/Wiz";
import CheckPoint from "./pages/CheckPoint";
import Tenable from "./pages/Tenable";
import SSLCertificates from "./pages/SSLCertificates";
import GoSimulator from "./pages/GoSimulator";
import GoDmarc from "./pages/GoDmarc";
import VMC from "./pages/VMC";
import BecomePartner from "./pages/BecomePartner";
import Chromebook from "./pages/Chromebook";
import Chromebox from "./pages/Chromebox";
import ChromeOSFlex from "./pages/ChromeOSFlex";
import ChromeEnterprise from "./pages/ChromeEnterprise";
import SwiftMove from "./pages/SwiftMove";

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
            <Route path="/google-workspace" element={<GoogleWorkspace />} />
            <Route path="/microsoft-365" element={<Microsoft365 />} />
            <Route path="/zoho-mail" element={<ZohoMail />} />
            <Route path="/jumpcloud" element={<JumpCloud />} />
            <Route path="/viami" element={<Viami />} />
            <Route path="/scalefusion" element={<Scalefusion />} />
            <Route path="/jamf" element={<Jamf />} />
            <Route path="/okta" element={<Okta />} />
            <Route path="/miniorange" element={<MiniOrange />} />
            <Route path="/superops" element={<SuperOps />} />
            <Route path="/atera" element={<Atera />} />
            <Route path="/aws" element={<AWS />} />
            <Route path="/azure" element={<Azure />} />
            <Route path="/jiocloud" element={<JioCloud />} />
            <Route path="/paloalto" element={<PaloAlto />} />
            <Route path="/wiz" element={<Wiz />} />
            <Route path="/checkpoint" element={<CheckPoint />} />
            <Route path="/tenable" element={<Tenable />} />
            <Route path="/ssl-certificates" element={<SSLCertificates />} />
            <Route path="/gosimulator" element={<GoSimulator />} />
            <Route path="/godmarc" element={<GoDmarc />} />
            <Route path="/vmc" element={<VMC />} />
            <Route path="/become-partner" element={<BecomePartner />} />
            <Route path="/chromebook" element={<Chromebook />} />
            <Route path="/chromebox" element={<Chromebox />} />
            <Route path="/chromeos-flex" element={<ChromeOSFlex />} />
            <Route path="/chrome-enterprise" element={<ChromeEnterprise />} />
            <Route path="/swiftmove" element={<SwiftMove />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RegionProvider>
  </QueryClientProvider>
);

export default App;
