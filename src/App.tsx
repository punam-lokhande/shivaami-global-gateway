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
import ChangePath from "./pages/ChangePath";
import Pulse360 from "./pages/Pulse360";
import SecureSight from "./pages/SecureSight";
import AboutUs from "./pages/AboutUs";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyZepto from "./pages/CaseStudyZepto";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import HealthcarePharma from "./pages/HealthcarePharma";
import FinancialServices from "./pages/FinancialServices";
import Retail from "./pages/Retail";
import Manufacturing from "./pages/Manufacturing";
import AdvertisingMedia from "./pages/AdvertisingMedia";
import SoftwareTechnology from "./pages/SoftwareTechnology";
import Hospitality from "./pages/Hospitality";
import TransportationLogistics from "./pages/TransportationLogistics";

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
            <Route path="/changepath" element={<ChangePath />} />
            <Route path="/pulse360" element={<Pulse360 />} />
            <Route path="/securesight" element={<SecureSight />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/zepto" element={<CaseStudyZepto />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/healthcare-pharma" element={<HealthcarePharma />} />
            <Route path="/financial-services" element={<FinancialServices />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/advertising-media" element={<AdvertisingMedia />} />
            <Route path="/software-technology" element={<SoftwareTechnology />} />
            <Route path="/hospitality" element={<Hospitality />} />
            <Route path="/transportation-logistics" element={<TransportationLogistics />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RegionProvider>
  </QueryClientProvider>
);

export default App;
