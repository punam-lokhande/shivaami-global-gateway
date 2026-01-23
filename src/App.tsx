import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { RegionProvider } from "@/contexts/RegionContext";
import { HelmetProvider } from "react-helmet-async";
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
import GoogleCloudPlatform from "./pages/GoogleCloudPlatform";
import PaloAlto from "./pages/PaloAlto";
import Wiz from "./pages/Wiz";
import CheckPoint from "./pages/CheckPoint";
import Tenable from "./pages/Tenable";
import SSLCertificates from "./pages/SSLCertificates";
import GoSimulator from "./pages/GoSimulator";
import GoDmarc from "./pages/GoDmarc";
import VMC from "./pages/VMC";
import BecomePartner from "./pages/BecomePartner";
import PartnerThankYou from "./pages/PartnerThankYou";
import Chromebook from "./pages/Chromebook";
import Chromebox from "./pages/Chromebox";
import ChromeOSFlex from "./pages/ChromeOSFlex";
import ChromeEnterprise from "./pages/ChromeEnterprise";
import GoogleMeetHardware from "./pages/GoogleMeetHardware";
import SwiftMove from "./pages/SwiftMove";
import ChangePath from "./pages/ChangePath";
import Pulse360 from "./pages/Pulse360";
import SecureSight from "./pages/SecureSight";
import TalentEdge from "./pages/TalentEdge";
import AboutUs from "./pages/AboutUs";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyZepto from "./pages/CaseStudyZepto";
import CaseStudyPWLive from "./pages/CaseStudyPWLive";
import CaseStudyRSPL from "./pages/CaseStudyRSPL";
import CaseStudyGupshup from "./pages/CaseStudyGupshup";
import CaseStudyDunzo from "./pages/CaseStudyDunzo";
import CaseStudyAGS from "./pages/CaseStudyAGS";
import CaseStudyBMM from "./pages/CaseStudyBMM";
import CaseStudyKredX from "./pages/CaseStudyKredX";
import CaseStudyDatametica from "./pages/CaseStudyDatametica";
import CaseStudyMicroLabs from "./pages/CaseStudyMicroLabs";
import CaseStudyLogicash from "./pages/CaseStudyLogicash";
import CaseStudyBILT from "./pages/CaseStudyBILT";
import CaseStudyRJCorp from "./pages/CaseStudyRJCorp";
import CaseStudyLandmark from "./pages/CaseStudyLandmark";
import CaseStudyCedCommerce from "./pages/CaseStudyCedCommerce";
import CaseStudyDinshaws from "./pages/CaseStudyDinshaws";
import CaseStudyAdani from "./pages/CaseStudyAdani";
import CaseStudyArya from "./pages/CaseStudyArya";
import CaseStudy1mg from "./pages/CaseStudy1mg";
import CaseStudyRefyne from "./pages/CaseStudyRefyne";
import CaseStudyShriramPistons from "./pages/CaseStudyShriramPistons";
import CaseStudyTreebo from "./pages/CaseStudyTreebo";
import CaseStudyIntas from "./pages/CaseStudyIntas";
import CaseStudyApsara from "./pages/CaseStudyApsara";
import CaseStudyMindgate from "./pages/CaseStudyMindgate";
import CaseStudyJayaTV from "./pages/CaseStudyJayaTV";
import CaseStudyMuktaArts from "./pages/CaseStudyMuktaArts";
import CaseStudyNavnit from "./pages/CaseStudyNavnit";
import CaseStudyFlovel from "./pages/CaseStudyFlovel";
import CaseStudyRRGlobal from "./pages/CaseStudyRRGlobal";
import CaseStudyDHSecheron from "./pages/CaseStudyDHSecheron";
import CaseStudyiOPEX from "./pages/CaseStudyiOPEX";
import CaseStudyPayalGroup from "./pages/CaseStudyPayalGroup";
import CaseStudySchemax from "./pages/CaseStudySchemax";
import CaseStudyShauryaTechnosoft from "./pages/CaseStudyShauryaTechnosoft";
import CaseStudyEmxcel from "./pages/CaseStudyEmxcel";
import CaseStudyNelito from "./pages/CaseStudyNelito";
import CaseStudySitapurEyeHospital from "./pages/CaseStudySitapurEyeHospital";
import CaseStudyPrism from "./pages/CaseStudyPrism";
import CaseStudyDhani from "./pages/CaseStudyDhani";
import CaseStudyNavodaya from "./pages/CaseStudyNavodaya";
import CaseStudyGRP from "./pages/CaseStudyGRP";
import CaseStudyImperial from "./pages/CaseStudyImperial";
import CaseStudyPermacel from "./pages/CaseStudyPermacel";
import CaseStudyAmkette from "./pages/CaseStudyAmkette";
import CaseStudySenseselec from "./pages/CaseStudySenseselec";
import CaseStudyPRARealty from "./pages/CaseStudyPRARealty";
import CaseStudySoleGroup from "./pages/CaseStudySoleGroup";
import CaseStudyICTOnline from "./pages/CaseStudyICTOnline";
import CaseStudyMerinoIndia from "./pages/CaseStudyMerinoIndia";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import CareerThankYou from "./pages/CareerThankYou";
import ThankYou from "./pages/ThankYou";
import HealthcarePharma from "./pages/HealthcarePharma";
import FinancialServices from "./pages/FinancialServices";
import Retail from "./pages/Retail";
import Manufacturing from "./pages/Manufacturing";
import AdvertisingMedia from "./pages/AdvertisingMedia";
import SoftwareTechnology from "./pages/SoftwareTechnology";
import Hospitality from "./pages/Hospitality";
import TransportationLogistics from "./pages/TransportationLogistics";
import CloudCapabilities from "./pages/CloudCapabilities";
import AppsScript from "./pages/AppsScript";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GoogleWorkspacePricingIndia from "./pages/GoogleWorkspacePricingIndia";
import SupportServices from "./pages/SupportServices";
import SupportPackages from "./pages/SupportPackages";
import Certifications from "./pages/Certifications";
import Achievements from "./pages/Achievements";
import OnDemandWebinars from "./pages/OnDemandWebinars";
import Newsletter from "./pages/Newsletter";
import RegisterWebinar from "./pages/RegisterWebinar";
import OnDemandSecurityPrivacy from "./pages/OnDemandSecurityPrivacy";
import OnDemandGWSWithGemini from "./pages/OnDemandGWSWithGemini";
import OnDemandPromptEngineering from "./pages/OnDemandPromptEngineering";
import OnDemandGeminiGems from "./pages/OnDemandGeminiGems";
import OnDemandNotebookLM from "./pages/OnDemandNotebookLM";
import OnDemandGoogleVids from "./pages/OnDemandGoogleVids";
import ThankYouContact from "./components/ThankYouContact";
const queryClient = new QueryClient();

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <RegionProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
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
              <Route path="/google-cloud-platform" element={<GoogleCloudPlatform />} />
              <Route path="/paloalto" element={<PaloAlto />} />
              <Route path="/wiz" element={<Wiz />} />
              <Route path="/checkpoint" element={<CheckPoint />} />
              <Route path="/tenable" element={<Tenable />} />
              <Route path="/ssl-certificates" element={<SSLCertificates />} />
              <Route path="/gosimulator" element={<GoSimulator />} />
              <Route path="/godmarc" element={<GoDmarc />} />
              <Route path="/vmc" element={<VMC />} />
              <Route path="/become-partner" element={<BecomePartner />} />
              <Route path="/become-partner/thank-you" element={<PartnerThankYou />} />
              <Route path="/chromebook" element={<Chromebook />} />
              <Route path="/chromebox" element={<Chromebox />} />
              <Route path="/chromeos-flex" element={<ChromeOSFlex />} />
              <Route path="/chrome-enterprise" element={<ChromeEnterprise />} />
              <Route path="/google-meet-hardware" element={<GoogleMeetHardware />} />
              <Route path="/swiftmove" element={<SwiftMove />} />
              <Route path="/changepath" element={<ChangePath />} />
              <Route path="/pulse360" element={<Pulse360 />} />
              <Route path="/securesight" element={<SecureSight />} />
              <Route path="/talentedge" element={<TalentEdge />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/zepto" element={<CaseStudyZepto />} />
              <Route path="/case-studies/pw-live" element={<CaseStudyPWLive />} />
              <Route path="/case-studies/rspl" element={<CaseStudyRSPL />} />
              <Route path="/case-studies/gupshup" element={<CaseStudyGupshup />} />
              <Route path="/case-studies/dunzo" element={<CaseStudyDunzo />} />
              <Route path="/case-studies/ags" element={<CaseStudyAGS />} />
              <Route path="/case-studies/bmm" element={<CaseStudyBMM />} />
              <Route path="/case-studies/kredx" element={<CaseStudyKredX />} />
              <Route path="/case-studies/datametica" element={<CaseStudyDatametica />} />
              <Route path="/case-studies/microlabs" element={<CaseStudyMicroLabs />} />
              <Route path="/case-studies/logicash" element={<CaseStudyLogicash />} />
              <Route path="/case-studies/bilt" element={<CaseStudyBILT />} />
              <Route path="/case-studies/rjcorp" element={<CaseStudyRJCorp />} />
              <Route path="/case-studies/landmark" element={<CaseStudyLandmark />} />
              <Route path="/case-studies/cedcommerce" element={<CaseStudyCedCommerce />} />
              <Route path="/case-studies/dinshaws" element={<CaseStudyDinshaws />} />
              <Route path="/case-studies/adani" element={<CaseStudyAdani />} />
              <Route path="/case-studies/arya" element={<CaseStudyArya />} />
              <Route path="/case-studies/1mg" element={<CaseStudy1mg />} />
              <Route path="/case-studies/refyne" element={<CaseStudyRefyne />} />
              <Route path="/case-studies/shriram-pistons" element={<CaseStudyShriramPistons />} />
              <Route path="/case-studies/treebo" element={<CaseStudyTreebo />} />
              <Route path="/case-studies/intas" element={<CaseStudyIntas />} />
              <Route path="/case-studies/apsara" element={<CaseStudyApsara />} />
              <Route path="/case-studies/mindgate" element={<CaseStudyMindgate />} />
              <Route path="/case-studies/jaya-tv" element={<CaseStudyJayaTV />} />
              <Route path="/case-studies/mukta-arts" element={<CaseStudyMuktaArts />} />
              <Route path="/case-studies/navnit" element={<CaseStudyNavnit />} />
              <Route path="/case-studies/flovel" element={<CaseStudyFlovel />} />
              <Route path="/case-studies/rr-global" element={<CaseStudyRRGlobal />} />
              <Route path="/case-studies/dh-secheron" element={<CaseStudyDHSecheron />} />
              <Route path="/case-studies/iopex" element={<CaseStudyiOPEX />} />
              <Route path="/case-studies/payal-group" element={<CaseStudyPayalGroup />} />
              <Route path="/case-studies/schemax" element={<CaseStudySchemax />} />
              <Route path="/case-studies/shaurya-technosoft" element={<CaseStudyShauryaTechnosoft />} />
              <Route path="/case-studies/emxcel" element={<CaseStudyEmxcel />} />
              <Route path="/case-studies/nelito" element={<CaseStudyNelito />} />
              <Route path="/case-studies/sitapur-eye-hospital" element={<CaseStudySitapurEyeHospital />} />
              <Route path="/case-studies/prism" element={<CaseStudyPrism />} />
              <Route path="/case-studies/dhani" element={<CaseStudyDhani />} />
              <Route path="/case-studies/navodaya" element={<CaseStudyNavodaya />} />
              <Route path="/case-studies/grp" element={<CaseStudyGRP />} />
              <Route path="/case-studies/imperial" element={<CaseStudyImperial />} />
              <Route path="/case-studies/permacel" element={<CaseStudyPermacel />} />
              <Route path="/case-studies/amkette" element={<CaseStudyAmkette />} />
              <Route path="/case-studies/merino-india" element={<CaseStudyMerinoIndia />} />
              <Route path="/case-studies/senseselec" element={<CaseStudySenseselec />} />
              <Route path="/case-studies/pra-realty" element={<CaseStudyPRARealty />} />
              <Route path="/case-studies/sole-group" element={<CaseStudySoleGroup />} />
              <Route path="/case-studies/ict-online" element={<CaseStudyICTOnline />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/thank-you" element={<CareerThankYou />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/contact-us-thankyou" element={<ThankYouContact />} />
              <Route path="/healthcare-pharma" element={<HealthcarePharma />} />
              <Route path="/financial-services" element={<FinancialServices />} />
              <Route path="/retail" element={<Retail />} />
              <Route path="/manufacturing" element={<Manufacturing />} />
              <Route path="/advertising-media" element={<AdvertisingMedia />} />
              <Route path="/software-technology" element={<SoftwareTechnology />} />
              <Route path="/hospitality" element={<Hospitality />} />
              <Route path="/transportation-logistics" element={<TransportationLogistics />} />
              <Route path="/cloud-capabilities" element={<CloudCapabilities />} />
              <Route path="/apps-script" element={<AppsScript />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/google-workspace-pricing-india" element={<GoogleWorkspacePricingIndia />} />
              <Route path="/support" element={<SupportServices />} />
              <Route path="/support-packages" element={<SupportPackages />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/on-demand-webinars" element={<OnDemandWebinars />} />
              <Route path="/webinar" element={<OnDemandWebinars />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/register-webinar" element={<RegisterWebinar />} />
              <Route path="/on-demand-security-privacy" element={<OnDemandSecurityPrivacy />} />
              <Route path="/on-demand-gws-with-gemini" element={<OnDemandGWSWithGemini />} />
              <Route path="/on-demand-prompt-engineering" element={<OnDemandPromptEngineering />} />
              <Route path="/on-demand-gemini-gems" element={<OnDemandGeminiGems />} />
              <Route path="/on-demand-notebooklm" element={<OnDemandNotebookLM />} />
              <Route path="/on-demand-google-vids" element={<OnDemandGoogleVids />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </RegionProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
