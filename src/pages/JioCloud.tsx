import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetStartedDialog from "@/components/GetStartedDialog";
import { Server, Database, Brain as BrainIcon, Network, Shield, MapPin, FileCheck, Cloud, Brain, Settings, GraduationCap, HeadphonesIcon, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import jioCloudBanner from "@/assets/banners/jiocloud-banner.jpg";
import strategicPlanning from "@/assets/activation/strategic-planning.jpg";
import technicalDeployment from "@/assets/activation/technical-deployment.jpg";
import securityConfig from "@/assets/activation/security-config.jpg";
import teamTraining from "@/assets/activation/team-training.jpg";
import ongoingSupport from "@/assets/activation/ongoing-support.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleGetStarted = () => {
    window.dispatchEvent(new CustomEvent('openGetStartedDialog'));
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] max-h-[700px] flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${jioCloudBanner})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/90 via-[#0C4594]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>
      <motion.div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36" style={{ opacity }}>
        <div className="max-w-3xl">
          <motion.h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Scale with <span className="text-[#38B6FF]">Jio AI Cloud</span> Infrastructure
          </motion.h1>
          <motion.p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            Jio AI Cloud is an Indian cloud platform delivering compute, storage, AI, and networking services. Enterprise-grade infrastructure with data residency in India.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <Button size="lg" onClick={handleGetStarted} className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const features = [
  {
    icon: Server,
    title: "Compute Resources",
    description: "Virtual machines with flexible configurations. High-performance computing for demanding applications. Bare metal servers for specialized requirements."
  },
  {
    icon: Database,
    title: "Storage Solutions",
    description: "Object storage for unstructured data at scale. Block storage provides high-performance volumes. File storage enables shared access across resources."
  },
  {
    icon: BrainIcon,
    title: "AI and ML Services",
    description: "Pre-trained models accelerate AI application development. GPU instances support training and inference. AI platform simplifies model deployment."
  },
  {
    icon: Network,
    title: "Networking Services",
    description: "Virtual private cloud creates isolated network environments. Load balancing distributes traffic across resources. CDN improves application performance."
  },
  {
    icon: Cloud,
    title: "Database Services",
    description: "Managed databases reduce operational overhead. Support for MySQL, PostgreSQL, and other engines. Backup and high availability built in."
  },
  {
    icon: Shield,
    title: "Security Features",
    description: "Identity and access management controls permissions. Network security groups protect resources. Encryption at rest and in transit standard."
  },
  {
    icon: MapPin,
    title: "Indian Data Residency",
    description: "Data centers located across India for compliance. Meets data localization requirements. Reduced latency for Indian users."
  },
  {
    icon: FileCheck,
    title: "Compliance and Governance",
    description: "Aligned with Indian regulatory requirements. Audit capabilities support governance needs. Compliance certifications for enterprise requirements."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What Jio AI Cloud Delivers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Local presence, AI capabilities, and compliance with Indian regulations
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        {...staggerContainer}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            variants={{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 }
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#0C4594] to-[#1E88E5] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#0C4594] mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

interface FlipCardProps {
  image: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const FlipCard = ({ image, icon: Icon, title, description }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[280px] cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/90 via-[#0C4594]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#0C4594] to-[#1E88E5] p-5 flex flex-col justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const activationSteps = [
  {
    image: strategicPlanning,
    icon: Brain,
    title: "Strategy and Planning",
    description: "We assess your cloud requirements and regulatory constraints. Our team designs Jio Cloud architecture for your workloads."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami deploys infrastructure and migrates applications to Jio Cloud. We configure networking, security, and operational tools."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our experts implement security controls and access policies. We configure compliance monitoring and reporting."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We train teams on Jio Cloud services and management. Knowledge transfer enables effective operations."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami manages your Jio Cloud environment with local support. We optimize performance, costs, and configurations."
  }
];

const ActivationSection = () => (
  <section className="py-20 bg-white">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          How Shivaami Helps You Succeed?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our Jio Cloud partnership delivers local expertise and support
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        {...staggerContainer}
      >
        {activationSteps.map((step, index) => (
          <motion.div
            key={index}
            variants={{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 }
            }}
          >
            <FlipCard {...step} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const CalendarCTASection = () => (
  <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#1565C0] to-[#0D47A1]">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
        <Calendar className="w-16 h-16 text-[#38B6FF] mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Deploy on Jio AI Cloud Infrastructure
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Schedule a consultation with our cloud specialists
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left max-w-3xl mx-auto">
          {[
            "Indian data residency requirements",
            "Regulatory compliance assessment",
            "AI and ML services integration",
            "Hybrid cloud strategy",
            "Cost optimization planning",
            "Local support and expertise"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#38B6FF] flex-shrink-0 mt-0.5" />
              <span className="text-white/90 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Schedule a Call Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  </section>
);

const JioCloud = () => {
  const [showGetStartedDialog, setShowGetStartedDialog] = useState(false);
  useEffect(() => {
    const handleOpenDialog = () => setShowGetStartedDialog(true);
    window.addEventListener('openGetStartedDialog', handleOpenDialog);
    return () => window.removeEventListener('openGetStartedDialog', handleOpenDialog);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main><HeroSection /><FeaturesSection /><ActivationSection /><CalendarCTASection /></main>
      <Footer />
      <GetStartedDialog open={showGetStartedDialog} onOpenChange={setShowGetStartedDialog} />
    </div>
  );
};
export default JioCloud;
