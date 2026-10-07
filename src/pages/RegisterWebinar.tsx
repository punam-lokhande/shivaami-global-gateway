import Header from "@/components/layout/Header";
import { Helmet } from 'react-helmet-async';
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Sparkles, Target, ShieldCheck, FileText, LineChart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import webinarHeroEdu from "@/assets/banners/webinar-hero-edu.jpg";
import speakerRobert from "@/assets/speakers/Robert.jpg";
import speakerDaniel from "@/assets/speakers/Daniel.jpg";
import speakerSteve from "@/assets/speakers/Steve.jpg";
import speakerKunal from "@/assets/speakers/Kunal.jpg";

const RegisterWebinar = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <link rel="canonical" href="https://www.shivaami.com/register-webinar" />
      </Helmet>
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={webinarHeroEdu}
            alt="Online Meeting Webinar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-[#0C4594]/40" />
        </div>
        
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
              Build, Scale, and Secure your Multi-agent Ecosystem
            </h1>
            <Button
              asChild
              className="mt-6 bg-[#38B6FF] hover:bg-[#1b9dd8] text-white font-semibold px-6 py-5 text-base rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#registration-form">
                Register Now
                <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Image + Intro Strip */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594]">
                Webinar
              </h2>
              <p className="text-[#1b9dd8] font-semibold">
                Wednesday, Oct 21, 2026 · 01:00 PM – 01:45 PM EDT
              </p>
              <p className="text-gray-600 leading-relaxed">
                Join Google Cloud and Shivaami AI experts for a webinar to learn how the Gemini Enterprise Assistant gives teams one secure place to search and act across every system, and how the Gemini Enterprise Agent Platform turns core workflows into governed agents that maximize ROI.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#0C4594] font-medium">
                  <Calendar className="w-5 h-5" />
                  <span>Wednesday, Oct 21, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-[#0C4594]" />
                  <span>01:00 PM – 01:45 PM EDT</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-[#0C4594]" />
                  <span>Webinar</span>
                </div>
              </div>
              <p className="text-[#0C4594] font-semibold">
                Limited spots - Book your spot now
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={webinarHeroEdu}
                alt="Build, Scale, and Secure your Multi-agent Ecosystem webinar"
                className="w-full h-[300px] lg:h-[360px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details + Registration Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >

              {/* Tabs Section */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start bg-transparent border-b border-gray-200 rounded-none h-auto p-0 gap-6">
                  <TabsTrigger 
                    value="overview" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#0C4594] data-[state=active]:bg-transparent data-[state=active]:text-[#0C4594] px-0 pb-3 font-medium"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="agenda"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#0C4594] data-[state=active]:bg-transparent data-[state=active]:text-[#0C4594] px-0 pb-3 font-medium"
                  >
                    Agenda
                  </TabsTrigger>
                  <TabsTrigger 
                    value="audience"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#0C4594] data-[state=active]:bg-transparent data-[state=active]:text-[#0C4594] px-0 pb-3 font-medium"
                  >
                    Speakers
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900">What Will You Learn In This Webinar?</h3>

                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Workflow Selection Framework:</strong> How to identify and scope 1 to 3 core business processes (e.g., cross-system fulfillment, incident response, contract billing) for maximum operational impact.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <LineChart className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Zero-Migration System Integration:</strong> How Model Context Protocol (MCP) servers let the Gemini Enterprise Assistant and Agent Platform search, aggregate context, and act across isolated CRM, ERP, PM, and ITSM data silos without moving your data.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Enterprise Security &amp; Governance:</strong> How to deploy Model Armor to enforce real-time PII/PCI redaction, block prompt injection, and mandate human-in-the-loop authorization for sensitive actions.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Prove and Maximize ROI:</strong> How to measure ROI with concrete operational metrics on cycle-time reduction, error elimination, and resource optimization from real-world agent deployments on the Gemini Enterprise Agent Platform.
                        </div>
                      </li>
                    </ul>

                    {/* About Shivaami */}
                    <div className="mt-6 bg-gradient-to-r from-[#0C4594] to-[#1a5cb8] rounded-xl p-5 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-[#38B6FF]" />
                        <span className="font-semibold">About Shivaami</span>
                      </div>
                      <p className="text-white/90 text-sm">
                        Shivaami is an authorized and premier Google Cloud Partner with over 21 years of experience in Cloud and AI across North America and Asia Pacific. With a team of 250+ Google-certified professionals, Shivaami empowers organizations to make work smarter, safer, and smoother through secure Cloud and AI products and services. Learn more at www.shivaami.com
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="agenda" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">01:00 PM – 01:10 PM</div>
                      <div className="text-gray-700">
                        <strong className="text-[#0C4594]">Scope High-Impact Workflows Beyond AI 101.</strong> Move from personal productivity to operational impact by identifying and scoping 1 to 3 core processes, such as cross-system fulfillment, incident response, or contract billing
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">01:10 PM – 01:30 PM</div>
                      <div className="text-gray-700">
                        <strong className="text-[#0C4594]">Live Architectural Showcase: Gemini Enterprise Assistant &amp; Agent Platform.</strong> A continuous, real-time software demonstration in a fully connected enterprise environment:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li><strong className="text-[#0C4594]">Cross-Silo Reach:</strong> live, zero-data-migration context aggregation across CRM, ERP, Project Management, and ITSM platforms via Model Context Protocol (MCP).</li>
                          <li><strong className="text-[#0C4594]">Autonomous Workflow Execution:</strong> custom agent fleets on the Gemini Enterprise Agent Platform taking multi-system actions automatically while adhering to strict tool governance.</li>
                          <li><strong className="text-[#0C4594]">Google Cloud Model Armor in Action:</strong> live demonstration of real-time PII/PCI redaction, confidential data protection, and prompt injection defense.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">1:30 PM – 01:35 PM</div>
                      <div className="text-gray-700">
                        <strong className="text-[#0C4594]">Maximize ROI &amp; Plan the Path to Execution.</strong> Connect cycle-time reduction, error elimination, and resource optimization to measurable operational impact from real-world agent deployments.
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">01:35 PM – 01:45 PM</div>
                      <div className="text-gray-700">
                        <strong className="text-[#0C4594]">Interactive Technical Q&amp;A.</strong> Unscripted Q&amp;A with Google and Shivaami enterprise architects covering custom MCP deployment, security guardrails, and architecture.
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="audience" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <img src={speakerRobert} alt="Robert Iledar" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#0C4594] mb-1">Robert Iledar</h4>
                        <p className="text-gray-700 text-sm">AI Specialist, Google Cloud</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <img src={speakerDaniel} alt="Daniel Chisikovsky" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#0C4594] mb-1">Daniel Chisikovsky</h4>
                        <p className="text-gray-700 text-sm">Strategic Partner Manager, Google Cloud</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <img src={speakerSteve} alt="Steve Holly" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#0C4594] mb-1">Steve Holly</h4>
                        <p className="text-gray-700 text-sm">Head of Solutions and Delivery, North America, Shivaami</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <img src={speakerKunal} alt="Kunal Thacker" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#0C4594] mb-1">Kunal Thacker</h4>
                        <p className="text-gray-700 text-sm">Vice President, Shivaami</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>

            {/* Right Side - Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <div id="registration-form" className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden scroll-mt-28">
                <div className="bg-gradient-to-r from-[#0C4594] to-[#1a5cb8] p-6">
                  <h3 className="text-xl font-bold text-white">Register now to secure your spot.</h3>
                  <p className="text-white/80 text-sm mt-1">Limited spots - Book your spot now</p>
                </div>
                
                <form className="p-6 space-y-5">
                  <p className="text-sm font-semibold text-[#0C4594]">
                    Webinar: Build, Scale, and Secure your Multi-agent Ecosystem
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">
                      Name (First Name, Last Name) <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your full name" 
                      className="border-gray-300 focus:border-[#38B6FF] focus:ring-[#38B6FF]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Business Email <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your business email" 
                      className="border-gray-300 focus:border-[#38B6FF] focus:ring-[#38B6FF]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-gray-700">
                      Company Website <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="website" 
                      placeholder="https://yourcompany.com" 
                      className="border-gray-300 focus:border-[#38B6FF] focus:ring-[#38B6FF]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="border-gray-300 focus:border-[#38B6FF] focus:ring-[#38B6FF]"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <div className="bg-[#38B6FF]/10 rounded-lg p-3 mb-4">
                      <p className="text-sm text-[#0C4594] font-medium">
                        🎯 Webinar · Wednesday, Oct 21, 2026 · 01:00 PM – 01:45 PM EDT
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#38B6FF] to-[#0C4594] hover:shadow-lg text-white font-semibold py-6"
                  >
                    Register
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By selecting "Yes," you provide express written consent for Shivaami LLC to contact you with marketing via automated technology or AI/prerecorded voice at the number provided. Consent is not a condition of purchase.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegisterWebinar;
