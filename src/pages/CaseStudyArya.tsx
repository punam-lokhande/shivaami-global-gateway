import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Shield, Cloud, Database, Server, Lock, AlertTriangle, Lightbulb, TrendingUp, Zap, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyArya = () => {
  const challenges = [
    "Unmanaged databases with no disaster recovery plan",
    "Inability to isolate regulated NBFC workloads from other services",
    "Lack of centralized security visibility and threat response",
    "Manual data pipelines slowing down business decision-making",
    "Exposure to security threats, including DDoS attacks and mismanaged credentials"
  ];

  const solutions = [
    { icon: Database, text: "Cloud SQL deployed to decouple databases from VMs with automated backups and Point-In-Time Recovery (PITR)" },
    { icon: Server, text: "Shared VPC implemented to isolate NBFC-regulated workloads for better audit readiness" },
    { icon: Shield, text: "Cloud Armor used to secure public endpoints by allowing only specific IPs and blocking DDoS traffic" },
    { icon: Eye, text: "Security Command Center (SCC) Premium for centralized security findings, alerting, and risk mitigation" },
    { icon: Lock, text: "Secret Manager adopted for secure credential and API key storage, reducing data leak risks" },
    { icon: Zap, text: "Cloud Trace for performance optimization and identifying service-level bottlenecks" },
    { icon: Cloud, text: "Dataflow and Datastream for real-time data processing and replication" }
  ];

  const results = [
    "Downtime during database recovery reduced from hours to minutes",
    "Security posture improved with proactive DDoS protection",
    "Centralized threat visibility across the organization",
    "Sensitive credentials now securely stored and managed",
    "Faster and more efficient regulatory audits",
    "Near real-time data access for smarter business decisions",
    "Infrastructure costs reduced by 20%"
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
              Arya.ag — Scaling Fintech<br />
              <span className="text-[#38B6FF]">Infrastructure for Security and Compliance</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl">
              Arya.ag, one of India's leading agritech platforms, needed to modernize its cloud infrastructure to serve its expansive warehousing, lending, and trading operations. As an RBI-regulated entity, they required robust solutions for compliance, scalability, performance, and security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Info Strip */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {[
              { label: "Industry", value: "AgriTech / Fintech" },
              { label: "Regulation", value: "RBI Compliant" },
              { label: "Solution", value: "Google Cloud" },
              { label: "Cost Reduction", value: "20%" }
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

      {/* Challenges */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0C4594]">Challenges</h2>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] rounded-full" />
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200"
                >
                  <p className="text-gray-700 font-medium">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0C4594]">Solution</h2>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] rounded-full mb-4" />
              <p className="text-gray-600 text-lg">
                Arya.ag transformed its cloud environment by adopting a modular architecture using Google Cloud services:
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {solutions.map((item, index) => (
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
                Arya.ag's cloud transformation delivered significant improvements across security, compliance, and operational efficiency.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              Ready to Modernize Your Cloud Infrastructure?
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

export default CaseStudyArya;
