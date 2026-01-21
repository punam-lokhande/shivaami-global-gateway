import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Play, Calendar, Clock, User, ExternalLink, Sparkles } from "lucide-react";
import caseStudiesBanner from "@/assets/banners/case-studies-banner.jpg";
import { Button } from "@/components/ui/button";

const webinars = [
  {
    id: 1,
    title: "Security & Privacy",
    description: "Learn about security and privacy best practices when using Gemini in Google Workspace.",
    date: "Wednesday, August 20, 2025",
    time: "1:00 PM – 1:45 PM EDT",
    status: "on-demand",
    link: "https://www.shivaami.com/gemini-adoption/module-0/",
    module: "Module 0"
  },
  {
    id: 2,
    title: "Power of Google Workspace with Gemini",
    description: "Discover how Gemini transforms your daily tasks and boosts productivity across Google Workspace apps.",
    date: "Wednesday, September 03, 2025",
    time: "1:00 PM – 1:45 PM EDT",
    status: "on-demand",
    link: "https://www.shivaami.com/gemini-adoption/module-1/",
    module: "Module 1"
  },
  {
    id: 3,
    title: "Prompt Engineering Best Practices",
    description: "Master the art of crafting effective prompts to get the best results from Gemini AI.",
    date: "Wednesday, September 17, 2025",
    time: "1:00 PM – 1:45 PM EDT",
    status: "on-demand",
    link: "https://www.shivaami.com/gemini-adoption/module-2/",
    module: "Module 2"
  },
  {
    id: 4,
    title: "Gemini App & Gems",
    description: "Explore the Gemini app and learn how to create custom Gems for specialized tasks.",
    date: "Wednesday, October 01, 2025",
    time: "1:00 PM – 1:45 PM EDT",
    status: "on-demand",
    link: "https://www.shivaami.com/gemini-adoption/module-3/",
    module: "Module 3"
  },
  {
    id: 5,
    title: "NotebookLM",
    description: "Discover NotebookLM - your AI-powered research and writing companion for document analysis.",
    date: "Wednesday, October 15, 2025",
    time: "1:00 PM – 1:45 PM EDT",
    status: "on-demand",
    link: "https://www.shivaami.com/gemini-adoption/module-4/",
    module: "Module 4"
  },
  {
    id: 6,
    title: "Google Vids",
    description: "Learn to create professional videos with AI assistance using Google Vids.",
    date: "Wednesday, October 29, 2025",
    time: "1:00 PM – 1:45 PM EDT",
    status: "on-demand",
    link: "https://www.shivaami.com/gemini-adoption/module-5/",
    module: "Module 5"
  },
  {
    id: 7,
    title: "Google AI Ultra",
    description: "Explore advanced AI capabilities with Google AI Ultra for enterprise-grade solutions.",
    date: "Wednesday, November 19, 2025",
    time: "1:00 PM – 1:45 PM EDT",
    status: "upcoming",
    link: "https://www.shivaami.com/gemini-adoption/module-6/",
    module: "Module 6"
  },
];

const OnDemandWebinars = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(to right, rgba(12, 69, 148, 0.95) 0%, rgba(12, 69, 148, 0.7) 50%, rgba(12, 69, 148, 0.4) 100%), url(${caseStudiesBanner})` }}
      >
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pt-32 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              On-Demand Webinars
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mb-8">
              Discover Gemini's potential to transform your daily tasks in Google Workspace. Register for our six-part adoption series, available at no cost, presented by our Gemini expert.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Play className="w-4 h-4" />
                <span>6 Modules Available</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Clock className="w-4 h-4" />
                <span>45 Minutes Each</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <User className="w-4 h-4" />
                <span>Expert-Led Sessions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Webinar Grid */}
      <section className="py-16 lg:py-20">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C4594] mb-4">
              Webinar Schedule
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete Gemini Adoption Series. Watch on-demand or register for upcoming sessions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#38B6FF]/30 transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className={`p-4 ${webinar.status === 'upcoming' ? 'bg-gradient-to-r from-[#38B6FF] to-[#0C4594]' : 'bg-gradient-to-r from-[#0C4594] to-[#1a5ab8]'}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-xs font-medium">{webinar.module}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      webinar.status === 'upcoming' 
                        ? 'bg-white/20 text-white' 
                        : 'bg-white/20 text-white'
                    }`}>
                      {webinar.status === 'upcoming' ? 'Register Now' : 'On-Demand'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-2 line-clamp-2">
                    {webinar.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {webinar.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-[#0C4594]" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4 text-[#0C4594]" />
                      <span>{webinar.time}</span>
                    </div>
                  </div>

                  <a
                    href={webinar.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      className={`w-full group/btn ${
                        webinar.status === 'upcoming'
                          ? 'bg-gradient-to-r from-[#38B6FF] to-[#0C4594] hover:shadow-lg'
                          : 'bg-[#0C4594] hover:bg-[#0a3a7a]'
                      } text-white`}
                    >
                      {webinar.status === 'upcoming' ? 'Register Now' : 'Watch On-Demand'}
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0C4594] to-[#1a5cb8]">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#38B6FF]" />
              <span className="text-white/90 text-sm font-medium">Bonus Giveaway Alert</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Participate in All Modules & Win!
            </h2>
            <p className="text-white/80 mb-8">
              We're making this event even more rewarding! Lucky attendees who participate in all modules of the webinar will receive a special giveaway. It's our way of saying thanks for your dedicated engagement.
            </p>

            <a
              href="https://www.shivaami.com/gemini-adoption/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-[#0C4594] hover:bg-white/90 font-semibold px-8"
              >
                View Full Series
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnDemandWebinars;
