import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudiesBanner from "@/assets/banners/case-studies-banner.jpg";
import googleWorkspaceBanner from "@/assets/banners/google-workspace-banner.jpg";

const CaseStudyNavodaya = () => {
  const highlights = [
    "Google Workspace for Education deployment",
    "Secure email for students and faculty",
    "Google Classroom for virtual learning",
    "Google Drive for educational resources",
    "Admin controls for student safety",
    "Training for teachers and staff"
  ];

  const challenges = [
    "Need for modern digital learning infrastructure",
    "Student data privacy and safety requirements",
    "Teachers required easy-to-use collaboration tools"
  ];

  const solutions = [
    "Deployed Google Workspace for Education with safety controls",
    "Configured age-appropriate settings and content filters",
    "Comprehensive training for faculty on Google Classroom"
  ];

  const results = [
    { label: "Students Connected", value: "100%" },
    { label: "Digital Learning", value: "Enabled" },
    { label: "Teacher Adoption", value: "High" },
    { label: "Safety Controls", value: "Active" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(to right, rgba(12, 69, 148, 0.95) 0%, rgba(12, 69, 148, 0.7) 50%, rgba(12, 69, 148, 0.4) 100%), url(${caseStudiesBanner})` }}
      >
        <div className="w-full px-8 lg:px-16 xl:px-24 pt-32 pb-16">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Navodaya HS Transformed with<br />
              <span className="text-[#38B6FF]">Google Workspace for Education</span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
              An educational institution modernized their learning environment with Google Workspace for Education, enabling digital collaboration for students and teachers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Info Strip */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {[
              { label: "Industry", value: "Education" },
              { label: "Solution", value: "Workspace Education" },
              { label: "Focus", value: "Digital Learning" },
              { label: "Users", value: "Students & Faculty" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="py-5 px-4 text-center"
              >
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-sm sm:text-base font-bold text-[#0C4594]">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Highlights with Image */}
      <section className="py-12 sm:py-16">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0C4594] mb-3">
                What We Implemented
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] rounded-full mb-6" />
              
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-2 p-3 bg-gradient-to-br from-[#0C4594]/5 to-[#38B6FF]/5 rounded-lg border border-[#0C4594]/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#38B6FF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src={googleWorkspaceBanner} 
                alt="Google Workspace for Education Implementation" 
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium text-sm">Digital learning for modern education</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions - Compact */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </motion.div>
                <h2 className="text-xl font-bold text-[#0C4594]">Challenges</h2>
              </motion.div>
              
              <div className="space-y-3">
                {challenges.map((challenge, index) => (
                  <motion.div 
                    key={index} 
                    className="p-3 bg-white rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md hover:border-amber-500 transition-all cursor-default"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <p className="text-sm text-gray-700">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Lightbulb className="w-5 h-5 text-green-600" />
                </motion.div>
                <h2 className="text-xl font-bold text-[#0C4594]">Solutions</h2>
              </motion.div>
              
              <div className="space-y-3">
                {solutions.map((solution, index) => (
                  <motion.div 
                    key={index} 
                    className="p-3 bg-white rounded-lg border-l-4 border-green-500 shadow-sm hover:shadow-md hover:border-green-600 transition-all cursor-default"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.15, duration: 0.4 }}
                    whileHover={{ x: -5, scale: 1.02 }}
                  >
                    <p className="text-sm text-gray-700">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#0C4594] to-[#1a5cb8]">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-[#38B6FF]" />
              <span className="text-white text-sm font-medium">Results & Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The Outcome
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-[#38B6FF] mb-1">{result.value}</p>
                <p className="text-white/80 text-sm">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0C4594] mb-3">
              Ready to Transform Your Educational Institution?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Let Shivaami help you achieve similar results with Google Workspace for Education.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] text-white font-semibold rounded-full hover:shadow-lg transition-all"
              >
                Get Started Today
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#0C4594] text-[#0C4594] font-semibold rounded-full hover:bg-[#0C4594] hover:text-white transition-all"
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

export default CaseStudyNavodaya;