import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Zap, 
  Scale, 
  Shield, 
  DollarSign, 
  Server, 
  Settings, 
  Brain, 
  Headphones,
  Search,
  Layers,
  ArrowRight,
  RefreshCw,
  Lock,
  TrendingUp,
  Clock,
  Calendar,
  CheckCircle2,
  GraduationCap,
  HelpCircle
} from "lucide-react";
import cloudBanner from "@/assets/banners/cloud-capabilities-banner.jpg";
import strategicPlanning from "@/assets/activation/strategic-planning.jpg";
import technicalDeployment from "@/assets/activation/technical-deployment.jpg";
import securityConfig from "@/assets/activation/security-config.jpg";
import teamTraining from "@/assets/activation/team-training.jpg";
import ongoingSupport from "@/assets/activation/ongoing-support.jpg";
import GetStartedDialog from "@/components/GetStartedDialog";

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
    document.dispatchEvent(new CustomEvent('openGetStartedDialog'));
  };

  useEffect(() => {
    document.title = "Cloud Solutions & Services India | Shivaami Cloud Capabilities";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Build scalable cloud infrastructure with Shivaami. Expert cloud migration, architecture design, and managed services. Trusted enterprise cloud partner across India.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Build scalable cloud infrastructure with Shivaami. Expert cloud migration, architecture design, and managed services. Trusted enterprise cloud partner across India.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cloudBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/90 via-[#0C4594]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      <motion.div 
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.h1 
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          <span className="text-[#38B6FF]">Cloud Capabilities: Accelerating </span> Innovation at Scale
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
           Cloud computing delivers on-demand infrastructure, platforms, and applications for agility, cost efficiency, and faster innovation. Shivaami, a certified partner, helps enterprises in India and the US architect, migrate, and optimise infrastructure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const features = [
  {
    icon: Zap,
    title: "Application Agility and Speed",
    description: "Modern cloud-native applications deploy faster and scale automatically. Containerization and microservices enable independent updates without downtime. Continuous integration and delivery pipelines accelerate time to market."
  },
  {
    icon: Scale,
    title: "Scalable Infrastructure",
    description: "Resources scale up or down in response to demand. Compute, storage, and networking adjust automatically to workload changes. You pay only for what you use with no upfront hardware costs."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Built-in security controls and encryption protect your assets. Identity and access management safeguards resources at every layer. Compliance certifications meet industry standards, including ISO, SOC, HIPAA, and GDPR."
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description: "Cloud-native architectures reduce infrastructure expenses. Right-sizing and automation eliminate waste. Detailed cost analytics show spending by service and team."
  },
  {
    icon: Server,
    title: "High Availability and Resilience",
    description: "Multi-region deployments ensure business continuity. Automated failover minimizes downtime during outages. Disaster recovery solutions protect critical data and applications."
  },
  {
    icon: Settings,
    title: "DevOps and Automation",
    description: "Infrastructure as code enables repeatable deployments. Automated workflows reduce manual tasks and human error. Monitoring and observability provide real-time insights."
  },
  {
    icon: Brain,
    title: "Innovation with Emerging Technologies",
    description: "Access to artificial intelligence and machine learning services. Serverless computing for event-driven architectures. Advanced analytics platforms turn data into actionable insights."
  },
  {
    icon: Headphones,
    title: "Expert Guidance and Support",
    description: "Strategic consulting aligns cloud initiatives with business goals. Managed services handle ongoing operations and optimization. Round-the-clock support ensures your environment runs smoothly."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What Cloud Capabilities Deliver
        </h2>
        
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
    icon: Search,
    title: "Strategy and Assessment",
    description: "We evaluate your current infrastructure and identify cloud-ready workloads. Our team analyzes cost models and defines success metrics. You get a comprehensive cloud adoption strategy with clear business outcomes."
  },
  {
    image: technicalDeployment,
    icon: Layers,
    title: "Architecture and Design",
    description: "Shivaami designs secure, scalable cloud architectures aligned with your needs. We select optimal services for compute, storage, networking, and databases. Your infrastructure blueprint follows industry best practices and well-architected frameworks."
  },
  {
    image: securityConfig,
    icon: RefreshCw,
    title: "Migration and Modernization",
    description: "Our experts execute migrations from on-premise to cloud with minimal disruption. We handle lift-and-shift, re-platforming, and application refactoring. Your systems transfer with validated data integrity and performance benchmarks."
  },
  {
    image: teamTraining,
    icon: Lock,
    title: "Security and Governance",
    description: "We implement identity management, network security, and encryption standards. Cloud-native security tools monitor threats and enforce compliance policies. Role-based access controls protect resources across your environment."
  },
  {
    image: ongoingSupport,
    icon: TrendingUp,
    title: "Optimization and Cost Management",
    description: "Shivaami continuously monitors cloud spending and resource utilization. We implement auto-scaling, right-sizing, and reserved capacity strategies. Regular optimization reviews identify opportunities to reduce costs and improve performance."
  }
];

const ActivationSection = () => (
  <section className="py-20 bg-white">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          How Shivaami Helps You Succeed
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our team becomes your trusted cloud partner, managing vendor relationships and ensuring maximum value
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

const ManagedServicesSection = () => (
  <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            Managed Services and Support
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            variants={{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 }
            }}
          >
            <Clock className="w-10 h-10 text-[#38B6FF] mb-4" />
            <h3 className="text-lg font-semibold text-[#0C4594] mb-2">24/7 Monitoring</h3>
            <p className="text-gray-600 text-sm">We provide around-the-clock monitoring, incident response, and technical support.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            variants={{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 }
            }}
          >
            <Settings className="w-10 h-10 text-[#38B6FF] mb-4" />
            <h3 className="text-lg font-semibold text-[#0C4594] mb-2">Proactive Maintenance</h3>
            <p className="text-gray-600 text-sm">Proactive maintenance keeps your cloud environment secure and performant.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            variants={{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 }
            }}
          >
            <GraduationCap className="w-10 h-10 text-[#38B6FF] mb-4" />
            <h3 className="text-lg font-semibold text-[#0C4594] mb-2">Monthly Reports</h3>
            <p className="text-gray-600 text-sm">Monthly reports track SLAs, uptime, and optimization opportunities.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

import CTASection from '@/components/sections/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Helmet } from "react-helmet-async";

const CloudCapabilities = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleOpenDialog = () => setDialogOpen(true);
    document.addEventListener('openGetStartedDialog', handleOpenDialog);
    return () => document.removeEventListener('openGetStartedDialog', handleOpenDialog);
  }, []);

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "What is an enterprise cloud?",
      answer: "An enterprise cloud is a dedicated cloud computing environment designed to meet the specific needs of large organizations. It provides scalable infrastructure, enhanced security, and customizable services for data storage, application deployment, and business operations across the entire organization."
    },
    {
      question: "What are the 4 types of cloud services?",
      answer: "The four main types of cloud services are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS), and Function as a Service (FaaS). Each offers a different level of management and customization based on specific business requirements."
    },
    {
      question: "How can Shivaami help my organization with cloud migration and management?",
      answer: "Shivaami provides end-to-end cloud solutions, including assessment, planning, migration, and ongoing management across AWS, GCP, and Microsoft Azure. Our experts ensure a smooth transition tailored to your business needs, optimizing performance, security, and cost efficiency throughout the process."
    },
    {
      question: "What are the big 3 cloud companies?",
      answer: "The three leading cloud service providers are Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). These providers dominate the cloud computing market, offering comprehensive services ranging from basic infrastructure to advanced AI and machine learning capabilities."
    },
    {
      question: "What is a cloud-based enterprise system?",
      answer: "A cloud-based enterprise system is a centralized platform that delivers business applications, data management, and IT services over the internet. It enables organizations to streamline operations, enhance collaboration, and reduce on-premises infrastructure costs while maintaining high performance and security."
    },
    {
      question: "What are the key benefits of migrating to the cloud?",
      answer: "Cloud migration offers organizations significant advantages, including reduced IT infrastructure costs, increased scalability, improved data security, faster deployment of applications, enhanced disaster recovery capabilities, and seamless access to the latest technological innovations without heavy upfront investments."
    }
  ];

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0C4594]/20 to-[#38B6FF]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/faq.jpg" 
                  alt="FAQ Support"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-12 h-12 rounded-xl bg-[#38B6FF] flex items-center justify-center">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Need Help?</p>
                      <p className="text-white/80 text-sm">We're here 24x7</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - FAQ */}
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-6">
                Frequently Asked Questions
              </h2>
              
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`item-${idx}`}
                    className="bg-white border border-[#e2e8f0] rounded-xl px-4 overflow-hidden hover:border-[#38B6FF]/30 transition-colors"
                  >
                    <AccordionTrigger className="text-[#0C4594] hover:text-[#38B6FF] text-left py-4 hover:no-underline text-sm">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#64748b] pb-4 text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

                          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



const faqSchema ={
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is an enterprise cloud?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "An enterprise cloud is a dedicated cloud computing environment designed to meet the specific needs of large organizations. It provides scalable infrastructure, enhanced security, and customizable services for data storage, application deployment, and business operations across the entire organization."
    }
  },{
    "@type": "Question",
    "name": "What are the 4 types of cloud services?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The four main types of cloud services are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS), and Function as a Service (FaaS). Each offers a different level of management and customization based on specific business requirements."
    }
  },{
    "@type": "Question",
    "name": "How can Shivaami help my organization with cloud migration and management?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Shivaami provides end-to-end cloud solutions, including assessment, planning, migration, and ongoing management across AWS, GCP, and Microsoft Azure. Our experts ensure a smooth transition tailored to your business needs, optimizing performance, security, and cost efficiency throughout the process."
    }
  },{
    "@type": "Question",
    "name": "What are the big 3 cloud companies?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The three leading cloud service providers are Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). These providers dominate the cloud computing market, offering comprehensive services ranging from basic infrastructure to advanced AI and machine learning capabilities."
    }
  },{
    "@type": "Question",
    "name": "What is a cloud-based enterprise system?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A cloud-based enterprise system is a centralized platform that delivers business applications, data management, and IT services over the internet. It enables organizations to streamline operations, enhance collaboration, and reduce on-premises infrastructure costs while maintaining high performance and security."
    }
  },{
    "@type": "Question",
    "name": "What are the key benefits of migrating to the cloud?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Cloud migration offers organizations significant advantages, including reduced IT infrastructure costs, increased scalability, improved data security, faster deployment of applications, enhanced disaster recovery capabilities, and seamless access to the latest technological innovations without heavy upfront investments."
    }
  }]
}




  
  return (

    <>
  <Helmet>
<title>Transform Your Business with Advanced Cloud Solutions | Shivaami</title>
 <meta name="description" content="Build scalable cloud infrastructure with Shivaami. Expert cloud migration, architecture design, and managed services. Trusted enterprise cloud partner across India." />
<link rel="canonical" href="https://www.shivaami.com/cloud-capabilities" />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 </Helmet>



    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ActivationSection />
        <ManagedServicesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div></>
  );
};

export default CloudCapabilities;