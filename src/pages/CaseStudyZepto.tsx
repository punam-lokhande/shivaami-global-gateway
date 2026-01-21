import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Building2, Users, Mail, Shield, Cloud, Monitor, Key, FolderLock, Smartphone, Settings, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyZepto = () => {
  const achievements = [
    "A secure and scalable Workspace environment ready for enterprise growth",
    "Improved data governance and compliance posture",
    "Centralized device, identity, and access management",
    "Reduced risk of data leakage via controlled sharing and DLP",
    "Enhanced user authentication experience through SSO",
    "Clear separation of users and policies through structured OUs",
    "Operational readiness with defined support and escalation processes"
  ];

  const implementations = [
    { icon: Cloud, text: "Activation and configuration of Google Workspace Enterprise Standard features" },
    { icon: Users, text: "OU structuring for ~1,500+ users across 16 organizational units" },
    { icon: Key, text: "Enabling 2-Step Verification (2SV) for ~2,600 users" },
    { icon: FolderLock, text: "Configuring Google Vault with indefinite retention rules" },
    { icon: Shield, text: "Implementing Drive sharing restrictions to prevent external data leakage" },
    { icon: Mail, text: "Gmail DLP rules for inbound and outbound email communications" },
    { icon: Monitor, text: "Windows device management (BYOD) with GCPW rollout on ~250 devices" },
    { icon: Settings, text: "SAML SSO integrations for key third-party applications" },
    { icon: Users, text: "Definition of standardized offboarding and compliance processes" },
    { icon: Smartphone, text: "Conducting POCs for advanced features like Context-Aware Access (CAA) and Advanced Mobile Device Management (MDM)" }
  ];

  const objectives = [
    "Upgrade to Google Workspace Enterprise Standard",
    "Strengthen security, data protection, and compliance",
    "Implement centralized identity and access management",
    "Control data sharing and communication risks",
    "Enable seamless SSO and endpoint management",
    "Standardize onboarding and offboarding processes"
  ];

  const challenges = [
    "Some advanced security features required internal approvals and staged rollout",
    "GCPW implementation issues on certain Windows devices due to TPM and Microsoft dependency constraints",
    "Feature rollouts like CAA, Advanced MDM, and Security Key enforcement were temporarily put on hold for further evaluation",
    "Coordination across multiple internal stakeholders slowed final confirmations and ticket closure"
  ];

  const solutions = [
    "Adopted a phased and POC-based approach for advanced security features",
    "Created separate support tickets for post-deployment and enhancement requests",
    "Provided Zepto with a clear escalation matrix and dedicated support process",
    "Continued advisory support for SSO, device management, and security enhancements",
    "Ensured seamless transition from deployment to ongoing support operations"
  ];

  const results = [
    "Stronger control over users, devices, and data",
    "A flexible framework to progressively enable advanced security features",
    "Reduced operational risk while supporting rapid organizational growth",
    "A clear support and escalation model ensuring business continuity"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-[#0C4594] via-[#1a5cb8] to-[#38B6FF] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Zepto Upgraded to<br />
              <span className="text-[#38B6FF]">Google Workspace Enterprise Standard</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl">
              Zepto is a fast-growing quick-commerce company operating at scale, with a rapidly expanding workforce and multiple internal teams requiring secure, reliable, and centrally managed collaboration and identity systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Info Strip */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {[
              { label: "Industry", value: "Quick E-commerce" },
              { label: "Old Email Service", value: "Google Workspace" },
              { label: "Employees", value: "2,600+" },
              { label: "Organizational Units", value: "16" }
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
        <div className="w-full px-8 lg:px-16 xl:px-24">
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
                className="flex items-start gap-3 p-5 bg-gradient-to-br from-[#0C4594]/5 to-[#38B6FF]/5 rounded-xl border border-[#0C4594]/10 hover:border-[#38B6FF]/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#38B6FF] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{objective}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What They Did */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
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
              With Shivaami Cloud Services' deployment team, Zepto implemented a phased rollout that included:
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
                className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#38B6FF]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What They Achieved */}
      <section className="py-16 sm:py-20">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C4594] mb-4">
              What They Achieved
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] rounded-full" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-gradient-to-br from-[#0C4594] to-[#38B6FF] rounded-2xl text-white overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
                <CheckCircle2 className="w-8 h-8 text-white/80 mb-4" />
                <p className="font-medium relative z-10">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
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

            {/* Solutions */}
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
      </section>

      {/* Results */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0C4594] to-[#1a5cb8]">
        <div className="w-full px-8 lg:px-16 xl:px-24">
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
              Zepto successfully transitioned to a production-ready Google Workspace Enterprise Standard environment, with core security and collaboration features fully operational.
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
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C4594] mb-4">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Let Shivaami Cloud Services help you achieve similar results with a tailored Google Workspace implementation.
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

export default CaseStudyZepto;
