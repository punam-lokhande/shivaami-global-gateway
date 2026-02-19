import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Sparkles, ArrowLeft, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import nikunjPhoto from "@/assets/speakers/nikunj-thakkar.jpg";
import heroBanner from "@/assets/banners/prompt-engineering-webinar.jpg";
import WatchOnDemandForm from "@/components/WatchOnDemandForm";

const OnDemandPromptEngineering = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Prompt Engineering Webinar" 
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
            <Link to="/webinar" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Webinars</span>
            </Link>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
              The Art of the Ask:
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#38B6FF] drop-shadow-lg leading-tight">
              How to Get Extraordinary Results from Gemini
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Two Column */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-[#0C4594] font-medium">
                  <Calendar className="w-5 h-5" />
                  <span>Wednesday, September 17, 2025</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-[#0C4594]" />
                  <span>01:00 PM – 01:45 PM EDT</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-[#0C4594]" />
                  <span>Webinar (On-Demand)</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#38B6FF]/10 to-[#0C4594]/10 border border-[#38B6FF]/30 rounded-xl p-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    This webinar has ended. Watch the full recording on-demand below.
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
                    value="speakers"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#0C4594] data-[state=active]:bg-transparent data-[state=active]:text-[#0C4594] px-0 pb-3 font-medium"
                  >
                    Speakers
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Join Shivaami and Google Cloud for our exclusive webinar designed to empower your organization to confidently adopt and leverage the full potential of Google's Gemini.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 pt-2">Overview</h3>
                    <p>
                      This module focuses on the importance of <strong className="text-[#0C4594]">prompt engineering</strong> and best practices to enhance productivity, collaboration, and creativity. Effective prompt design plays a critical role in guiding AI models, reducing ambiguity, improving efficiency, ensuring safety and ethics, and controlling output diversity.
                    </p>
                    
                    <p>
                      The module will give users clear tips to create more productive prompts to ensure more valuable Gemini outputs.
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#38B6FF] rounded-full mt-2 flex-shrink-0" />
                        <div>
                          Master the fundamentals of effective prompt design
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#38B6FF] rounded-full mt-2 flex-shrink-0" />
                        <div>
                          Learn techniques to reduce ambiguity and improve AI outputs
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#38B6FF] rounded-full mt-2 flex-shrink-0" />
                        <div>
                          Get practical tips for creating productive prompts
                        </div>
                      </li>
                    </ul>

                    {/* Bonus Alert */}
                    <div className="mt-6 bg-gradient-to-r from-[#0C4594] to-[#1a5cb8] rounded-xl p-5 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-[#38B6FF]" />
                        <span className="font-semibold">Bonus Giveaway Alert:</span>
                      </div>
                      <p className="text-white/90 text-sm">
                        We're making this event even more rewarding! Lucky attendee who participates in all modules of the webinar will receive a special giveaway. It's our way of saying thanks for your dedicated engagement. Don't miss out on this chance to win!
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="agenda" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">
                        01:00 pm – 01:20 pm
                      </div>
                      <div className="text-gray-700">
                        From Vague to Valuable
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">
                        01:20 pm – 01:35 pm
                      </div>
                      <div className="text-gray-700">
                        Live Prompt Lab | Demo
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">
                        01:35 pm – 01:45 pm
                      </div>
                      <div className="text-gray-700">
                        Live Q&A Session
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="speakers" className="mt-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <img 
                        src={nikunjPhoto} 
                        alt="Nikunj Thakkar" 
                        className="w-24 h-24 rounded-full object-cover border-4 border-[#38B6FF]/30"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Nikunj Thakkar</h3>
                        <p className="text-[#0C4594]">Customer Engineer, Shivaami</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#38B6FF] to-[#0C4594] flex items-center justify-center text-white text-2xl font-bold border-4 border-[#38B6FF]/30">
                        FC
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Fern Chalik</h3>
                        <p className="text-[#0C4594]">Customer Engineer, Shivaami</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>

            {/* Right Side - Watch On-Demand Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <WatchOnDemandForm 
                moduleNumber="Module 2"
                moduleName="Prompt Engineering Best Practices"
                youtubeUrl="https://www.youtube.com/watch?v=Z6KCWrHgV00"
              />

              {/* Series Navigation */}
              <div className="mt-6 bg-gradient-to-r from-[#38B6FF]/10 to-[#0C4594]/10 rounded-xl p-4 border border-[#38B6FF]/30">
                <h4 className="font-semibold text-[#0C4594] mb-3">Gemini Adoption Series</h4>
                <div className="space-y-2 text-sm">
                  <Link to="/on-demand-security-privacy" className="block text-gray-600 hover:text-[#0C4594] transition-colors">→ Module 0: Security & Privacy</Link>
                  <Link to="/on-demand-gws-with-gemini" className="block text-gray-600 hover:text-[#0C4594] transition-colors">→ Module 1: Power of Google Workspace</Link>
                  <div className="text-[#0C4594] font-medium">✓ Module 2: Prompt Engineering (You are here)</div>
                  <Link to="/on-demand-gemini-gems" className="block text-gray-600 hover:text-[#0C4594] transition-colors">→ Module 3: Gemini Gems</Link>
                  <Link to="/on-demand-notebooklm" className="block text-gray-600 hover:text-[#0C4594] transition-colors">→ Module 4: NotebookLM</Link>
                  <Link to="/on-demand-google-vids" className="block text-gray-600 hover:text-[#0C4594] transition-colors">→ Module 5: Google Vids</Link>
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

export default OnDemandPromptEngineering;
