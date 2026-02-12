import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Gift, ChevronRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import nikunjPhoto from "@/assets/speakers/nikunj-thakkar.jpg";
import heroBanner from "@/assets/banners/webinar-online-meeting.jpg";

const RegisterWebinar = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
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
              Beyond the Basics:
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#38B6FF] drop-shadow-lg leading-tight">
              Unlocking Next-Generation AI with Google AI Ultra
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Hero Section - Two Column */}
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
                  <span>Wednesday, February 19, 2026</span>
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

              <div className="bg-gradient-to-r from-[#38B6FF]/10 to-[#0C4594]/10 border border-[#38B6FF]/30 rounded-xl p-4 mb-8">
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Webinar attendees will be eligible to receive a <strong className="text-[#0C4594]">50% discount*</strong> on the first three months of Google AI Ultra membership. <span className="text-gray-500">*T&C apply.</span>
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
                      Join Shivaami and Google Cloud for an exclusive webinar designed to show you how to harness the most advanced AI capabilities with Google AI Ultra for Business.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 pt-2">Overview</h3>
                    <p>
                      This session is for businesses with creatives, developers, researchers, and other AI super-users who need to tackle their most ambitious projects. We'll explore how your teams can accelerate video creation, visualize new ideas, and automate complex research tasks faster than ever before.
                    </p>
                    
                    <p className="font-medium text-gray-900">
                      We will dive deep into three groundbreaking Labs tools, available exclusively through the Google AI Ultra add-on:
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#38B6FF] rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Flow:</strong> Discover a state-of-the-art AI filmmaking tool that allows you to create cinematic scenes and stories with incredible consistency.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#38B6FF] rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Whisk:</strong> Learn how to quickly explore and visualize new ideas with an AI tool that generates and animates images using both text and image prompts.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#38B6FF] rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <strong className="text-[#0C4594]">Project Mariner:</strong> See how to streamline time-consuming tasks like research and data entry by assigning them to AI agents that work in the background.
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
                        Introduction to Google AI Ultra for Business
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#38B6FF]">
                      <div className="text-sm font-medium text-[#0C4594] whitespace-nowrap">
                        01:20 pm – 01:35 pm
                      </div>
                      <div className="text-gray-700">
                        Flow, Whisk & Mariner in Action | Demo
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
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
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
                        📅 Google AI Ultra - Wednesday, February 19, 2026
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
                    Get <strong className="text-[#0C4594]">50% off</strong> your first 3 months of Google AI Ultra membership!
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
