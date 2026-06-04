import Header from "@/components/layout/Header";
import { Helmet } from 'react-helmet-async';
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import WatchOnDemandForm from "@/components/WatchOnDemandForm";

const OnDemandGlean = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <link rel="canonical" href="https://www.shivaami.com/on-demand-glean" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-r from-[#0C4594] via-[#0C4594] to-[#1a5cb8]">
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
              Glean
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#38B6FF] drop-shadow-lg leading-tight">
              Beyond Search: Learn to Build Autonomous AI Agents that Act for You
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-[#0C4594] font-medium">
                  <Calendar className="w-5 h-5" />
                  <span>Wednesday, February 11, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-[#0C4594]" />
                  <span>1:00 PM - 1:45 PM EST</span>
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
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Join us for our upcoming webinar to learn to build autonomous AI agents. Connect over 100 enterprise connectors to transform your scattered data into a unified, active workforce.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="agenda" className="mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#0C4594] text-white">
                          <th className="text-left p-3 text-sm font-semibold">Time (EST)</th>
                          <th className="text-left p-3 text-sm font-semibold">Session</th>
                          <th className="text-left p-3 text-sm font-semibold">Key Focus</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-gray-700">
                        {[
                          ["1:00 PM", "Welcome", "Setting the stage for the shift from passive information retrieval to proactive, automated work."],
                          ["1:05 PM", "The Power of Work AI in Action", "Showcasing Glean's unified search and generative AI answers across multiple enterprise apps."],
                          ["1:15 PM", "Live Demo: Creating a Custom AI Agent", "A live, no-code walkthrough of building an AI agent to solve a specific business task."],
                          ["1:30 PM", "Real-World Impact & Q&A", "Presenting case studies of measurable ROI and answering audience questions."],
                          ["1:40 PM", "Closing and Next Steps", "Summarizing key takeaways and outlining the next steps for attendees."],
                        ].map(([t, s, k]) => (
                          <tr key={t} className="border-b border-gray-200">
                            <td className="p-3 font-medium text-[#0C4594] whitespace-nowrap align-top">{t}</td>
                            <td className="p-3 align-top">{s}</td>
                            <td className="p-3 align-top">{k}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <WatchOnDemandForm
                moduleNumber="Glean"
                moduleName="Beyond Search: Learn to Build Autonomous AI Agents that Act for You"
                youtubeUrl="https://youtu.be/fLAia5QbxoM?si=4JopuxmucMvWtq90"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnDemandGlean;