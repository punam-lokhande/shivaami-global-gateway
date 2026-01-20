import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Shield, Cloud, Server, Globe, Lock, AlertTriangle, Lightbulb, TrendingUp, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyRSPL = () => {
  const objectives = [
    "Address security concerns in on-premises infrastructure",
    "Resolve scalability issues during traffic spikes",
    "Improve poor website performance and loading times",
    "Enhance data protection and threat detection",
    "Enable seamless handling of promotional traffic"
  ];

  const implementations = [
    { icon: Server, text: "Migrated e-commerce website to Google Cloud Platform (GCP)" },
    { icon: Cloud, text: "Implemented Google Compute Engine for optimal resource allocation" },
    { icon: Globe, text: "Deployed Global Load Balancer for traffic distribution across regions" },
    { icon: Zap, text: "Integrated Cloud CDN for faster content delivery" },
    { icon: Shield, text: "Enabled Identity and Access Management for security" },
    { icon: Lock, text: "Implemented encryption at rest and in transit with real-time threat detection" }
  ];

  const achievements = [
    "Implementation of advanced security features including IAM and encryption",
    "Improved scalability ensuring consistent high-performance user experience",
    "Faster page loading times and minimal downtime",
    "Higher customer satisfaction leading to retention",
    "Attraction of new customers through improved performance",
    "Even distribution of traffic across regions and data centers"
  ];

  const challenges = [
    "Security Concerns: Existing infrastructure lacked robust security measures, exposing to data breaches",
    "Scalability Issues: Frequent traffic spikes during promotions strained the on-premises setup",
    "Poor Website Performance: Slow page loading times and frequent downtime affected user experience"
  ];

  const solutions = [
    "Leveraged Google Cloud's security features including IAM, encryption, and real-time threat detection",
    "Utilized GCP's scaling capabilities to handle traffic spikes during promotions seamlessly",
    "Optimized website performance through Compute Engine, Global Load Balancer, and Cloud CDN",
    "Migration attracted new customers and retained existing ones"
  ];

  const results = [
    "Significant reduction in security threats",
    "Seamless handling of increased traffic",
    "Dramatic improvement in website performance",
    "Boosted customer satisfaction",
    "Substantial customer growth",
    "Increased sales and revenue"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-[#0C4594] via-[#1a5cb8] to-[#38B6FF] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium mb-6">
              Resources — Case Study
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              RSPL Group Moved to<br />
              <span className="text-[#38B6FF]">Google Cloud</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl">
              RSPL Group is a prominent player in the online retail industry, boasting over a decade of experience. Prior to migration to Google Cloud Platform with Shivaami's support, they faced significant challenges with on-premises infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Info Strip */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {[
              { label: "Industry", value: "Consumer Goods" },
              { label: "Old Infrastructure", value: "On-Premises" },
              { label: "Employees", value: "25,000+" },
              { label: "Solution", value: "Google Cloud" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="py-6 px-4 sm:px-8 text-center"
              >
                <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                <p className="text-lg font-bold text-[#0C4594]">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What They Wanted */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0C4594] mb-4">
                What They Wanted to Do
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] rounded-full" />
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-5 bg-gradient-to-br from-[#0C4594]/5 to-[#38B6FF]/5 rounded-xl border border-[#0C4594]/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#38B6FF] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{objective}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What They Did */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0C4594] mb-4">
                What They Did
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] rounded-full mb-4" />
              <p className="text-gray-600 text-lg">
                RSPL Group successfully addressed their challenges by migrating to Google Cloud Platform with Shivaami's expertise:
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {implementations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0C4594]">Challenges</h2>
                </div>
                
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-white rounded-xl border-l-4 border-amber-400 shadow-sm"
                    >
                      <p className="text-gray-700">{challenge}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0C4594]">Solutions</h2>
                </div>
                
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-white rounded-xl border-l-4 border-green-500 shadow-sm"
                    >
                      <p className="text-gray-700">{solution}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0C4594] to-[#1a5cb8]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-[#38B6FF]" />
                <span className="text-white font-medium">Results & Impact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                The Outcome
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                RSPL Group's migration to Google Cloud showcased the transformative power of cloud technology in the competitive e-commerce industry.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#38B6FF] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white font-medium">{result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C4594] mb-4">
              Ready to Transform Your E-commerce Platform?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Let Shivaami Cloud Services help you achieve similar results with Google Cloud Platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#38B6FF]/30 transition-all"
              >
                Get Started Today
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#0C4594] text-[#0C4594] font-semibold rounded-full hover:bg-[#0C4594] hover:text-white transition-all"
              >
                View More Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyRSPL;
