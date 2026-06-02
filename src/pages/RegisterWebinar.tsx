import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Gift, Sparkles, Target, ShieldCheck, FileText, LineChart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroBanner from "@/assets/banners/webinar-online-meeting.jpg";
import nextGenAiImg from "@/assets/banners/next-gen-ai-webinar.jpg";

const RegisterWebinar = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
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
              Agentic Workplace Transformation
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#38B6FF] drop-shadow-lg leading-tight mb-6">
              with Gemini Enterprise — 3 Hour 1:1 Workshop
            </h2>
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
                3 hours. Working agents. Real ROI.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                An intensive 3 hour 1:1 workshop with Shivaami's Gemini Enterprise team to design, build and validate AI agents that deliver immediate, measurable value — curated around your use cases and your industry. Available for individual leaders and full teams. You leave with working agents, a production blueprint, and a costed business case in hand.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#0C4594] font-medium">
                  <Calendar className="w-5 h-5" />
                  <span>Flexible scheduling — book your slot</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-[#0C4594]" />
                  <span>3 Hour 1:1 Workshop</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-[#0C4594]" />
                  <span>Online · Google funded · No cost</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={nextGenAiImg}
                alt="Enterprise team working through AI agent design in a hands-on workshop"
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

              <div className="bg-gradient-to-r from-[#38B6FF]/10 to-[#0C4594]/10 border border-[#38B6FF]/30 rounded-xl p-4 mb-8">
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    <strong className="text-[#0C4594]">Google funded · No cost to your organization.</strong> Every hour invested ties back to measurable value, with agents shaped around your use cases and industry.
                  </p>
                </div>
              </div>

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
                    Who It's For
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Many organizations have a clear vision for agentic AI but face a critical execution gap. The primary hurdles are validating technical feasibility with existing enterprise systems (like Salesforce or SAP) and building a concrete business case to justify investment. A theoretical plan is not enough; you need tangible proof of what's possible.
                    </p>

                    <p>
                      Shivaami's Gemini Enterprise 3 Hour Workshop is the answer — a dedicated working session focused entirely on building, testing and planning deployment of AI agents shaped around the use cases and industry context that matter most to your organization.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 pt-2">The Value You Walk Away With</h3>
                    <p>
                      Three hours. Working agents. Outcomes tied to your business. Every outcome is shaped around your use cases and industry, not a generic demo.
                    </p>

                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Accelerate Your Agentic AI Initiative:</strong> Move directly from concept to functioning Proof of Concept agents shaped around your use cases. Build momentum and show stakeholders progress they can see in a single session.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Mitigate Implementation Risk:</strong> By building and testing agents in a simulated version of your environment, you confirm technical viability for your industry's systems before committing significant budget or engineering time.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Custom Production Blueprint:</strong> Receive a comprehensive Technical Design Document and a roadmap tailored to your organization and industry, giving your team a clear path from PoC to production deployment.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <LineChart className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Data Driven Business Case:</strong> The workshop concludes with a detailed cost analysis for building and running your agents, providing the precise data needed to forecast budgets and secure executive buy-in.
                        </div>
                      </li>
                    </ul>

                    {/* Bonus Alert */}
                    <div className="mt-6 bg-gradient-to-r from-[#0C4594] to-[#1a5cb8] rounded-xl p-5 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-[#38B6FF]" />
                        <span className="font-semibold">Close the gap between vision and value</span>
                      </div>
                      <p className="text-white/90 text-sm">
                        Every board has issued the agentic AI mandate, but most teams are stuck at step one. Walk away with working agents, a production blueprint, and a costed business case — in just three focused hours.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="agenda" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">Hour 1</div>
                      <div className="text-gray-700">
                        Discovery & Use Case Shaping — align on your industry context, prioritize workflows, and define the agents to build.
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">Hour 2</div>
                      <div className="text-gray-700">
                        Build & Test — construct PoC agents on Gemini Enterprise and validate them in a simulated version of your environment.
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">Hour 3</div>
                      <div className="text-gray-700">
                        Production Blueprint & Business Case — Technical Design Document, deployment roadmap, and a detailed cost analysis for budgeting.
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="audience" className="mt-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <h4 className="font-semibold text-[#0C4594] mb-1">Agentic AI Strategy Owners</h4>
                      <p className="text-gray-700 text-sm">Leaders responsible for driving the organization's agentic AI implementation strategy from vision to rollout.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <h4 className="font-semibold text-[#0C4594] mb-1">ROI & Viability Champions</h4>
                      <p className="text-gray-700 text-sm">Decision makers tasked with proving the ROI and technical viability of new automation technologies before scaling investment.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <h4 className="font-semibold text-[#0C4594] mb-1">Production Systems Leaders</h4>
                      <p className="text-gray-700 text-sm">Architects and engineering leaders responsible for the design of production grade, integrated AI systems across the enterprise stack.</p>
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
                  <h3 className="text-xl font-bold text-white">Register Now</h3>
                  <p className="text-white/80 text-sm mt-1">Secure your spot for this exclusive webinar</p>
                </div>
                
                <form className="p-6 space-y-5">
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
                      Phone Number
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="border-gray-300 focus:border-[#38B6FF] focus:ring-[#38B6FF]"
                    />
                  </div>

                  <div className="pt-2">
                    <div className="bg-[#38B6FF]/10 rounded-lg p-3 mb-4">
                      <p className="text-sm text-[#0C4594] font-medium">
                        🎯 Gemini Enterprise · 3 Hour 1:1 Workshop · Google funded
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#38B6FF] to-[#0C4594] hover:shadow-lg text-white font-semibold py-6"
                  >
                    Register Now
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By registering, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>

              {/* Discount Banner */}
              <div className="mt-6 bg-gradient-to-r from-[#38B6FF]/10 to-[#0C4594]/10 rounded-xl p-4 border border-[#38B6FF]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#38B6FF] to-[#0C4594] rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong className="text-[#0C4594]">Google funded · No cost.</strong> Walk away with working agents, a production blueprint, and a costed business case.
                  </p>
                </div>
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
