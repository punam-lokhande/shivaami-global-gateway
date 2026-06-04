import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Gift, Sparkles, Target, ShieldCheck, FileText, LineChart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroBanner from "@/assets/banners/webinar-online-meeting.jpg";
import webinarHeroEdu from "@/assets/banners/webinar-hero-edu.jpg";
import speakerBrian from "@/assets/speakers/speaker-brian.jpeg";
import speakerKunal from "@/assets/speakers/speaker-kunal.png";
import speakerNikunj from "@/assets/speakers/speaker-nikunj.jpg";

const RegisterWebinar = () => {
  return (
    <div className="min-h-screen bg-white">
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
              Build Your Agentic Workforce with Gemini Enterprise for Education
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
                Wednesday, June 10 · 1:00 to 1:45 PM EDT
              </p>
              <p className="text-gray-600 leading-relaxed">
                Join Google Cloud and Shivaami for a deep dive session on how to scale secure, context-aware AI agents across your campus ecosystem, transforming institutional efficiency while keeping student data completely locked down. Learn to build AI agents that ease the load on your teams, simplify everyday workflows, and automate the busy work by connecting with 250+ connectors.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#0C4594] font-medium">
                  <Calendar className="w-5 h-5" />
                  <span>Wednesday, June 10</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-[#0C4594]" />
                  <span>1:00 to 1:45 PM EDT</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-[#0C4594]" />
                  <span>Webinar — Google Meet invite shared upon registration</span>
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
                src={webinarHeroEdu}
                alt="Education leaders joining the Gemini Enterprise for Education webinar"
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
                    <strong className="text-[#0C4594]">Bonus.</strong> Webinar attendees will be eligible for receiving Gemini Enterprise free 30-day trial with organization-specific hands-on agent build sessions. Two custom Gems will be shared with all attendees: the Gemini Enterprise Use Case Validator Gem and ROI Calculator Gem.
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
                    Speakers
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong className="text-[#0C4594]">Webinar:</strong> Gemini Enterprise live demo.
                    </p>
                    <p>
                      <strong className="text-[#0C4594]">Interactive Q&A:</strong> Q&A with Google Cloud and Shivaami experts.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 pt-2">The Agenda</h3>
                    <p>
                      Tight, crisp, and built to send you back with a clear next move, learn how to build, deploy, and scale AI agents for your institution.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 pt-2">When &amp; Where</h3>
                    <ul className="text-gray-700 space-y-1 list-disc pl-5">
                      <li>Wednesday, June 10</li>
                      <li>1:00 PM to 1:45 PM EDT</li>
                      <li>Webinar, Google Meet invite shared upon registration</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 pt-2">What You'll Learn</h3>
                    <p>
                      A session worth your time, designed for education leaders ready to put AI agents to work, not just talk about them.
                    </p>

                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">A leader's playbook for AI agents in education:</strong> See where AI agents make the biggest difference, easing day-to-day workloads, speeding up learner onboarding, and giving faculty and staff time back, with a clear plan you can take to your leadership or cabinet.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <LineChart className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Gemini Enterprise for Education: Live Demo.</strong> Watch an AI agent come together step by step, connecting to the tools your institution already uses like Gmail, Outlook, ServiceNow, Canvas, and more, no heavy lifting required.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Student Privacy Protections Under FERPA by Design:</strong> Make sure agents only share what each learner, faculty member, or staff role should see, with every action tracked and student data protected under FERPA from day one.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Leave with more than just notes:</strong> To help you immediately apply these insights, all attendees will receive two custom-built Gems — the Gemini Enterprise Use Case Validator (a simple yes/no framework to instantly qualify your project ideas) and the Gemini Enterprise ROI Calculator (a practical tool to forecast and measure the impact of your initiatives).
                        </div>
                      </li>
                    </ul>

                    {/* Bonus Alert */}
                    <div className="mt-6 bg-gradient-to-r from-[#0C4594] to-[#1a5cb8] rounded-xl p-5 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-[#38B6FF]" />
                        <span className="font-semibold">About Shivaami</span>
                      </div>
                      <p className="text-white/90 text-sm">
                        Shivaami is a premier Google Cloud Partner with a team of experts trained by Google. With 22 years of experience, Shivaami has served over 20,000 customers across diverse industries, empowering organisations to make their IT ecosystem smarter, safer and smoother through secure Cloud and AI solutions.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="agenda" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">1:00 PM</div>
                      <div className="text-gray-700">
                        <strong className="text-[#0C4594]">The AI Agent Mandate for Education.</strong> From overstretched teams to disconnected systems, education leaders are being asked to do more with less. We unpack where AI agents create the biggest wins, how they differ from chatbots and AI assistants, and the approaches leading universities and districts are using right now.
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">1:10 PM</div>
                      <div className="text-gray-700">
                        <strong className="text-[#0C4594]">Gemini Enterprise Live Demo.</strong> Watch a hands-on demo showing how an AI agent can answer common questions, automate everyday workflows, and connect to the tools you already use like Gmail, Outlook, ServiceNow, Canvas, and more, with privacy and trust built in.
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">1:35 PM</div>
                      <div className="text-gray-700">
                        <strong className="text-[#0C4594]">Deep Dive Question and Answer: Bring Your Challenges.</strong> An open conversation from 1:35 to 1:45 PM. Share your real-world blockers around data privacy, connecting systems, governance, and team capacity, and get tactical input from peers and our experts.
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="audience" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <img src={speakerBrian} alt="Brian Seifert" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#0C4594] mb-1">Brian Seifert — Head of Sales, Public Sector (State, Local, Education), Google Cloud</h4>
                        <p className="text-gray-700 text-sm">Integral part of the Google Cloud team, partnering with higher education and K-12 customers to bring Gemini Enterprise for Education to life and automate campus processes.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <img src={speakerKunal} alt="Kunal Thacker" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#0C4594] mb-1">Kunal Thacker — Vice President, Shivaami</h4>
                        <p className="text-gray-700 text-sm">11+ years in the cloud and AI industry at Shivaami, partnering with leaders on both strategy and hands-on execution to turn ambitious AI mandates into shipped outcomes.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <img src={speakerNikunj} alt="Nikunj Thakkar" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#0C4594] mb-1">Nikunj Thakkar — Customer Engineer, Shivaami</h4>
                        <p className="text-gray-700 text-sm">Google-certified professional and agentic AI expert at Shivaami, with a track record of helping customers solve complex problems and deliver measurable success.</p>
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
                  <p className="text-white/80 text-sm mt-1">Google Meet webinar link sent upon registration.</p>
                </div>
                
                <form className="p-6 space-y-5">
                  <p className="text-sm font-semibold text-[#0C4594]">
                    Webinar: Build Your Agentic Workforce with Gemini Enterprise
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
                        🎯 Webinar · Wednesday, June 10 · 1:00 to 1:45 PM EDT
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

              {/* Discount Banner */}
              <div className="mt-6 bg-gradient-to-r from-[#38B6FF]/10 to-[#0C4594]/10 rounded-xl p-4 border border-[#38B6FF]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#38B6FF] to-[#0C4594] rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong className="text-[#0C4594]">Bonus:</strong> Free 30-day Gemini Enterprise trial with organization-specific hands-on agent build sessions, plus two custom Gems — the Use Case Validator and the ROI Calculator.
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
