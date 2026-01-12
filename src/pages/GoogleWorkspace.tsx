import { motion } from 'framer-motion';
import { Users, Shield, Cloud, Video, Mail, Smartphone, Settings, Puzzle, Target, Rocket, Lock, GraduationCap, Headphones, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const HeroSection = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0C4594] via-[#1a5cb8] to-[#0C4594]">
    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
    
    <div className="container mx-auto px-4 py-20 relative z-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
            Cloud Productivity Suite
          </span>
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Transform Work with Google Workspace
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto">
          Google Workspace, previously known as G Suite, is a cloud productivity suite built for modern teams. It includes Gmail, Drive, Meet, Docs, Sheets, and collaborative tools that work together seamlessly. Organizations choose it for real-time collaboration, enterprise-grade security, and flexibility across devices.
        </motion.p>

        <motion.p variants={fadeInUp} className="text-lg text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
          Shivaami is a certified Google Workspace reseller and implementation partner in India. We help enterprises migrate, secure, and scale their digital workplace with confidence.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-white text-[#0C4594] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all">
            Talk to a Specialist
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Real-Time Collaboration",
      description: "Teams work together on documents, spreadsheets, and presentations simultaneously. Changes sync instantly across all devices. No version conflicts or email attachments needed."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Built-in protection includes phishing defense, malware scanning, and data loss prevention. Admin controls let you enforce policies at scale. Two-factor authentication and endpoint management keep data secure."
    },
    {
      icon: Cloud,
      title: "Cloud Storage and Access",
      description: "Every user gets secure cloud storage with Drive. Files are accessible from any device, anywhere. Advanced search and AI-powered suggestions speed up work."
    },
    {
      icon: Video,
      title: "Video Conferencing Built In",
      description: "Google Meet supports HD video calls for up to 500 participants. Screen sharing, live captions, and recording come standard. No additional licenses or plugins required."
    },
    {
      icon: Mail,
      title: "Seamless Email Management",
      description: "Gmail for business includes a custom domain email with powerful spam filtering. Smart compose and priority inbox boost productivity. Integration with Calendar and Tasks keeps teams organized."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "All apps work fully on iOS and Android devices. Offline mode ensures productivity without connectivity. Device management tools secure mobile access."
    },
    {
      icon: Settings,
      title: "Admin Controls and Insights",
      description: "Centralized dashboard manages users, devices, and security policies. Usage reports show adoption trends and storage needs. Audit logs track all account activity."
    },
    {
      icon: Puzzle,
      title: "Third-Party Integration",
      description: "Connect with thousands of business apps through the Workspace Marketplace. APIs enable custom integrations with existing tools. Single sign-on simplifies access across platforms."
    }
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Google Workspace Delivers
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#0C4594] to-[#1a5cb8] rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ActivationSection = () => {
  const steps = [
    {
      icon: Target,
      title: "Strategy and Planning",
      description: "We assess your current infrastructure and design a migration roadmap. Our team identifies security requirements and compliance needs upfront. You get a clear deployment plan with timelines and milestones."
    },
    {
      icon: Rocket,
      title: "Deployment and Integration",
      description: "Shivaami handles the complete migration from legacy systems or competitor platforms. We configure domain settings, user accounts, and organizational structures. Your email, files, and calendars transfer with zero data loss."
    },
    {
      icon: Lock,
      title: "Security and Compliance",
      description: "Our experts implement data loss prevention policies and access controls. We configure mobile device management and endpoint security. Audit logging and compliance reporting align with your industry standards."
    },
    {
      icon: GraduationCap,
      title: "User Enablement and Adoption",
      description: "We deliver customized training sessions for end-users and administrators. Change management support ensures teams adopt new workflows smoothly. Quick reference guides and on-demand resources speed up learning."
    },
    {
      icon: Headphones,
      title: "Ongoing Optimization and Support",
      description: "Shivaami provides dedicated technical support for your Google Workspace environment. We monitor performance, manage updates, and optimize configurations to ensure optimal performance. Regular health checks identify opportunities to improve efficiency and security."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Shivaami Helps You Succeed?
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#0C4594] to-[#1a5cb8] rounded-xl flex items-center justify-center">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100"
        >
          <p className="text-gray-700 leading-relaxed text-center">
            Our team becomes your extended IT partner. We handle licensing, billing, and renewals directly. You focus on business growth while we manage your cloud productivity platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const CalendarCTASection = () => {
  const benefits = [
    "Migration strategy tailored to your current environment",
    "Security and compliance requirements for your industry",
    "User adoption approach that minimizes disruption",
    "Total cost comparison with licensing optimization",
    "Timeline and resource planning for deployment"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#1a5cb8] to-[#0C4594] relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-4">
            Ready to modernize your workplace with Google Workspace?
          </motion.p>
          
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-6">
            Schedule a consultation with our certified specialists
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-white/80 mb-8">
            In this 30-minute session, you'll discover:
          </motion.p>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4 mb-10 text-left max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <Button size="lg" className="bg-white text-[#0C4594] hover:bg-gray-100 font-semibold px-10 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all">
              Book Your Session Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const GoogleWorkspace = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ActivationSection />
        <CalendarCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default GoogleWorkspace;
