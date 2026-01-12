import { motion } from 'framer-motion';
import { FileText, Users, Mail, FolderOpen, Shield, Lock, Smartphone, Scale, Target, Rocket, ShieldCheck, GraduationCap, Headphones, ArrowRight, CheckCircle } from 'lucide-react';
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
            Integrated Productivity Cloud Suite
          </span>
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Microsoft 365: Integrated Productivity Cloud Suite
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto">
          Microsoft 365, previously known as Office Suite, combines Office apps, cloud services, and enterprise security in one platform. It includes Teams, Outlook, Word, Excel, SharePoint, and advanced threat protection. Organizations choose it for integrated productivity, compliance tools, and hybrid work capabilities.
        </motion.p>

        <motion.p variants={fadeInUp} className="text-lg text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
          Shivaami is a certified Microsoft 365 partner delivering solutions across India. We help enterprises deploy, secure, and optimize their Microsoft cloud environment. Our team ensures successful migrations, security alignment, and user adoption at scale.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-white text-[#0C4594] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all">
            Talk to a Specialist Now
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
      icon: FileText,
      title: "Complete Office Suite",
      description: "Access Word, Excel, PowerPoint, and Outlook across all devices. Cloud-based collaboration enables real-time co-authoring and commenting. Desktop apps include advanced features with regular updates."
    },
    {
      icon: Users,
      title: "Microsoft Teams Integration",
      description: "Unified platform for chat, video meetings, and file collaboration. Channels organize conversations by project or department. Integration with Office apps keeps work in one place."
    },
    {
      icon: Mail,
      title: "Enterprise Email and Calendar",
      description: "Exchange Online delivers reliable email with a 50 GB mailbox per user. Advanced calendar features include scheduling assistants and room booking. Mobile apps provide full functionality on iOS and Android."
    },
    {
      icon: FolderOpen,
      title: "SharePoint and OneDrive",
      description: "Provide Centralized document management with version control and permissions. One terabyte of cloud storage per user for personal files. SharePoint sites enable team collaboration and intranet publishing."
    },
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "AI-powered security detects phishing, malware, and suspicious activity. Safe Links and Safe Attachments scan content before delivery. Anti-spam filtering reduces inbox clutter and risks."
    },
    {
      icon: Lock,
      title: "Information Protection",
      description: "Data loss prevention policies prevent sensitive information from leaving your organization. Encryption and rights management control document access. Compliance tools support regulatory requirements."
    },
    {
      icon: Smartphone,
      title: "Device Management",
      description: "Intune manages Windows, macOS, iOS, and Android devices from one console. Conditional access policies enforce security requirements. Remote wipe protects data on lost or stolen devices."
    },
    {
      icon: Scale,
      title: "Compliance and Governance",
      description: "Retention policies and legal hold preserve data for regulatory needs. eDiscovery tools search across email, documents, and conversations. Audit logs track user activity and administrative changes."
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
            What Microsoft 365 Delivers
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
      description: "We assess your current infrastructure and design a Microsoft 365 migration strategy. Our team identifies licensing requirements and feature needs upfront. You get a phased implementation plan that minimizes disruption."
    },
    {
      icon: Rocket,
      title: "Deployment and Integration",
      description: "Shivaami handles tenant configuration, domain setup, and user provisioning. We migrate mailboxes, files, and SharePoint content from legacy systems. Your data transfers securely with complete integrity."
    },
    {
      icon: ShieldCheck,
      title: "Security and Compliance",
      description: "Our security experts configure threat protection, data loss prevention, and access controls. We implement multi-factor authentication and conditional access policies. Compliance settings align with your industry regulations."
    },
    {
      icon: GraduationCap,
      title: "User Enablement and Adoption",
      description: "We deliver training programs tailored to different user roles and skill levels. Change management guidance helps teams transition to new workflows. Support resources and quick guides accelerate adoption."
    },
    {
      icon: Headphones,
      title: "Ongoing Optimization and Support",
      description: "Shivaami provides managed services with proactive monitoring and issue resolution. We handle license management, updates, and feature optimization. Regular reviews ensure you maximize your investment."
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
            Our partnership gives you direct access to Microsoft resources and priority support. We manage renewals, billing, and technical escalations on your behalf. You get a dedicated team focused on your success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const CalendarCTASection = () => {
  const benefits = [
    "Migration approach tailored to your existing environment",
    "Security and compliance configuration for your industry",
    "Licensing optimization to reduce costs",
    "User adoption strategy that drives engagement",
    "Timeline and project plan for your deployment"
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
            Ready to modernize your productivity platform with Microsoft 365?
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
              Book Your Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Microsoft365 = () => {
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

export default Microsoft365;
