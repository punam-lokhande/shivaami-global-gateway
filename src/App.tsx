import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { RegionProvider } from "@/contexts/RegionContext";
import { HelmetProvider } from "react-helmet-async";

// Only the landing page is eagerly loaded for FCP/LCP
import Index from "./pages/Index";

// All other pages are lazy-loaded for code splitting
const NotFound = lazy(() => import("./pages/NotFound"));
const GeminiEnterprise = lazy(() => import("./pages/GeminiEnterprise"));
const GoogleAIUltra = lazy(() => import("./pages/GoogleAIUltra"));
const Glean = lazy(() => import("./pages/Glean"));
const BookDomain = lazy(() => import("./pages/BookDomain"));
const AppSheet = lazy(() => import("./pages/AppSheet"));
const GoogleWorkspace = lazy(() => import("./pages/GoogleWorkspace"));
const Microsoft365 = lazy(() => import("./pages/Microsoft365"));
const ZohoMail = lazy(() => import("./pages/ZohoMail"));
const JumpCloud = lazy(() => import("./pages/JumpCloud"));
const Viami = lazy(() => import("./pages/Viami"));
const Scalefusion = lazy(() => import("./pages/Scalefusion"));
const Jamf = lazy(() => import("./pages/Jamf"));
const Okta = lazy(() => import("./pages/Okta"));
const MiniOrange = lazy(() => import("./pages/MiniOrange"));
const SuperOps = lazy(() => import("./pages/SuperOps"));
const Atera = lazy(() => import("./pages/Atera"));
const AWS = lazy(() => import("./pages/AWS"));
const Azure = lazy(() => import("./pages/Azure"));
const JioCloud = lazy(() => import("./pages/JioCloud"));
const GoogleCloudPlatform = lazy(() => import("./pages/GoogleCloudPlatform"));
const PaloAlto = lazy(() => import("./pages/PaloAlto"));
const Wiz = lazy(() => import("./pages/Wiz"));
const CheckPoint = lazy(() => import("./pages/CheckPoint"));
const Tenable = lazy(() => import("./pages/Tenable"));
const SSLCertificates = lazy(() => import("./pages/SSLCertificates"));
const GoSimulator = lazy(() => import("./pages/GoSimulator"));
const GoDmarc = lazy(() => import("./pages/GoDmarc"));
const VMC = lazy(() => import("./pages/VMC"));
const BecomePartner = lazy(() => import("./pages/BecomePartner"));
const PartnerThankYou = lazy(() => import("./pages/PartnerThankYou"));
const Chromebook = lazy(() => import("./pages/Chromebook"));
const Chromebox = lazy(() => import("./pages/Chromebox"));
const ChromeOSFlex = lazy(() => import("./pages/ChromeOSFlex"));
const ChromeEnterprise = lazy(() => import("./pages/ChromeEnterprise"));
const GoogleMeetHardware = lazy(() => import("./pages/GoogleMeetHardware"));
const SwiftMove = lazy(() => import("./pages/SwiftMove"));
const ChangePath = lazy(() => import("./pages/ChangePath"));
const Pulse360 = lazy(() => import("./pages/Pulse360"));
const SecureSight = lazy(() => import("./pages/SecureSight"));
const TalentEdge = lazy(() => import("./pages/TalentEdge"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyZepto = lazy(() => import("./pages/CaseStudyZepto"));
const CaseStudyPWLive = lazy(() => import("./pages/CaseStudyPWLive"));
const CaseStudyRSPL = lazy(() => import("./pages/CaseStudyRSPL"));
const CaseStudyGupshup = lazy(() => import("./pages/CaseStudyGupshup"));
const CaseStudyDunzo = lazy(() => import("./pages/CaseStudyDunzo"));
const CaseStudyAGS = lazy(() => import("./pages/CaseStudyAGS"));
const CaseStudyBMM = lazy(() => import("./pages/CaseStudyBMM"));
const CaseStudyKredX = lazy(() => import("./pages/CaseStudyKredX"));
const CaseStudyDatametica = lazy(() => import("./pages/CaseStudyDatametica"));
const CaseStudyMicroLabs = lazy(() => import("./pages/CaseStudyMicroLabs"));
const CaseStudyLogicash = lazy(() => import("./pages/CaseStudyLogicash"));
const CaseStudyBILT = lazy(() => import("./pages/CaseStudyBILT"));
const CaseStudyRJCorp = lazy(() => import("./pages/CaseStudyRJCorp"));
const CaseStudyLandmark = lazy(() => import("./pages/CaseStudyLandmark"));
const CaseStudyCedCommerce = lazy(() => import("./pages/CaseStudyCedCommerce"));
const CaseStudyDinshaws = lazy(() => import("./pages/CaseStudyDinshaws"));
const CaseStudyAdani = lazy(() => import("./pages/CaseStudyAdani"));
const CaseStudyArya = lazy(() => import("./pages/CaseStudyArya"));
const CaseStudy1mg = lazy(() => import("./pages/CaseStudy1mg"));
const CaseStudyRefyne = lazy(() => import("./pages/CaseStudyRefyne"));
const CaseStudyShriramPistons = lazy(() => import("./pages/CaseStudyShriramPistons"));
const CaseStudyTreebo = lazy(() => import("./pages/CaseStudyTreebo"));
const CaseStudyIntas = lazy(() => import("./pages/CaseStudyIntas"));
const CaseStudyApsara = lazy(() => import("./pages/CaseStudyApsara"));
const CaseStudyMindgate = lazy(() => import("./pages/CaseStudyMindgate"));
const CaseStudyJayaTV = lazy(() => import("./pages/CaseStudyJayaTV"));
const CaseStudyMuktaArts = lazy(() => import("./pages/CaseStudyMuktaArts"));
const CaseStudyNavnit = lazy(() => import("./pages/CaseStudyNavnit"));
const CaseStudyFlovel = lazy(() => import("./pages/CaseStudyFlovel"));
const CaseStudyRRGlobal = lazy(() => import("./pages/CaseStudyRRGlobal"));
const CaseStudyDHSecheron = lazy(() => import("./pages/CaseStudyDHSecheron"));
const CaseStudyiOPEX = lazy(() => import("./pages/CaseStudyiOPEX"));
const CaseStudyPayalGroup = lazy(() => import("./pages/CaseStudyPayalGroup"));
const CaseStudySchemax = lazy(() => import("./pages/CaseStudySchemax"));
const CaseStudyShauryaTechnosoft = lazy(() => import("./pages/CaseStudyShauryaTechnosoft"));
const CaseStudyEmxcel = lazy(() => import("./pages/CaseStudyEmxcel"));
const CaseStudyNelito = lazy(() => import("./pages/CaseStudyNelito"));
const CaseStudySitapurEyeHospital = lazy(() => import("./pages/CaseStudySitapurEyeHospital"));
const CaseStudyPrism = lazy(() => import("./pages/CaseStudyPrism"));
const CaseStudyDhani = lazy(() => import("./pages/CaseStudyDhani"));
const CaseStudyNavodaya = lazy(() => import("./pages/CaseStudyNavodaya"));
const CaseStudyGRP = lazy(() => import("./pages/CaseStudyGRP"));
const CaseStudyImperial = lazy(() => import("./pages/CaseStudyImperial"));
const CaseStudyPermacel = lazy(() => import("./pages/CaseStudyPermacel"));
const CaseStudyAmkette = lazy(() => import("./pages/CaseStudyAmkette"));
const CaseStudySenseselec = lazy(() => import("./pages/CaseStudySenseselec"));
const CaseStudyPRARealty = lazy(() => import("./pages/CaseStudyPRARealty"));
const CaseStudySoleGroup = lazy(() => import("./pages/CaseStudySoleGroup"));
const CaseStudyICTOnline = lazy(() => import("./pages/CaseStudyICTOnline"));
const CaseStudyMerinoIndia = lazy(() => import("./pages/CaseStudyMerinoIndia"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const CareerThankYou = lazy(() => import("./pages/CareerThankYou"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const HealthcarePharma = lazy(() => import("./pages/HealthcarePharma"));
const FinancialServices = lazy(() => import("./pages/FinancialServices"));
const Retail = lazy(() => import("./pages/Retail"));
const Manufacturing = lazy(() => import("./pages/Manufacturing"));
const AdvertisingMedia = lazy(() => import("./pages/AdvertisingMedia"));
const SoftwareTechnology = lazy(() => import("./pages/SoftwareTechnology"));
const Hospitality = lazy(() => import("./pages/Hospitality"));
const TransportationLogistics = lazy(() => import("./pages/TransportationLogistics"));
const CloudCapabilities = lazy(() => import("./pages/CloudCapabilities"));
const AppsScript = lazy(() => import("./pages/AppsScript"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const GoogleWorkspacePricingIndia = lazy(() => import("./pages/GoogleWorkspacePricingIndia"));
const SupportServices = lazy(() => import("./pages/SupportServices"));
const SupportPackages = lazy(() => import("./pages/SupportPackages"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Achievements = lazy(() => import("./pages/Achievements"));
const OnDemandWebinars = lazy(() => import("./pages/OnDemandWebinars"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const RegisterWebinar = lazy(() => import("./pages/RegisterWebinar"));
const OnDemandSecurityPrivacy = lazy(() => import("./pages/OnDemandSecurityPrivacy"));
const OnDemandGWSWithGemini = lazy(() => import("./pages/OnDemandGWSWithGemini"));
const OnDemandPromptEngineering = lazy(() => import("./pages/OnDemandPromptEngineering"));
const OnDemandGeminiGems = lazy(() => import("./pages/OnDemandGeminiGems"));
const OnDemandNotebookLM = lazy(() => import("./pages/OnDemandNotebookLM"));
const OnDemandGoogleVids = lazy(() => import("./pages/OnDemandGoogleVids"));
const OnDemandGlean = lazy(() => import("./pages/OnDemandGlean"));
const OnDemandGeminiEnterprise = lazy(() => import("./pages/OnDemandGeminiEnterprise"));
const ThankYouContact = lazy(() => import("./components/ThankYouContact"));
const SmarterSolutions = lazy(() => import("./pages/SmarterSolutions"));
const SaferSecurity = lazy(() => import("./pages/SaferSecurity"));
const SmootherServices = lazy(() => import("./pages/SmootherServices"));

const queryClient = new QueryClient();

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Minimal loading fallback to prevent CLS
const PageFallback = () => (
  <div className="min-h-screen bg-background" />
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <RegionProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/gemini-enterprise" element={<GeminiEnterprise />} />
                <Route path="/google-ai-ultra" element={<GoogleAIUltra />} />
                <Route path="/glean" element={<Glean />} />
                <Route path="/book-domain" element={<BookDomain />} />
                <Route path="/appsheet" element={<AppSheet />} />
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
                <Route path="/terms-of-service" element={<TermsAndConditions />} />
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
                <Route path="/on-demand-glean" element={<OnDemandGlean />} />
                <Route path="/on-demand-gemini-enterprise" element={<OnDemandGeminiEnterprise />} />
                <Route path="/smarter-solutions" element={<SmarterSolutions />} />
                <Route path="/safer-security" element={<SaferSecurity />} />
                <Route path="/smoother-services" element={<SmootherServices />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </RegionProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
