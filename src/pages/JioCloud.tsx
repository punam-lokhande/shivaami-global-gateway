import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetStartedDialog from "@/components/GetStartedDialog";
import { Server, Database, Brain as BrainIcon, Network, Shield, MapPin, FileCheck, Cloud, Brain, Settings, GraduationCap, HeadphonesIcon, Calendar, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
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
    document.dispatchEvent(new CustomEvent('openGetStartedDialog'));
  };

  return (
    <section ref={sectionRef} className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] max-h-[700px] flex items-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${jioCloudBanner})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/90 via-[#0C4594]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>
      <motion.div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36" style={{ opacity }}>
        <div className="max-w-3xl">
          <motion.h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <span className="text-[#38B6FF]">Jio AI Cloud: Scale with</span> Infrastructure Solutions
          </motion.h1>
          <motion.p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          Jio AI Cloud is an Indian cloud platform delivering compute, storage, AI, and networking with data residency in India. Shivaami partners with Jio to architect and manage cloud solutions for Indian organizations.
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
    description: "Virtual machines with flexible configurations for diverse workloads. High-performance computing for demanding applications. Bare metal servers for specialized requirements."
  },
  {
    icon: Database,
    title: "Storage Solutions",
    description: "Object storage for unstructured data at scale. Block storage provides high-performance volumes. File storage enables shared access across resources."
  },
  {
    icon: BrainIcon,
    title: "AI and ML Services",
    description: "Pre-trained models accelerate AI application development. GPU instances support training and inference workloads. AI platform simplifies model deployment and management."
  },
  {
    icon: Network,
    title: "Networking Services",
    description: "Virtual private cloud creates isolated network environments. Load balancing distributes traffic across resources. Content delivery network improves application performance."
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
    description: "We assess your cloud requirements and regulatory constraints. Our team designs Jio Cloud architecture for your workloads. You get implementation plan addressing data residency needs."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami deploys infrastructure and migrates applications to Jio Cloud. We configure networking, security, and operational tools. Your workloads run on Indian cloud infrastructure."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our experts implement security controls and access policies. We configure compliance monitoring and reporting. Architecture ensures data remains in India."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We train teams on Jio Cloud services and management. Knowledge transfer enables effective operations. Documentation supports ongoing administration."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami manages your Jio Cloud environment with local support. We optimize performance, costs, and configurations. Regular reviews ensure continued alignment with needs."
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

import CTASection from '@/components/sections/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Helmet } from "react-helmet-async";

const JioCloud = () => {
  const [showGetStartedDialog, setShowGetStartedDialog] = useState(false);
  useEffect(() => {
    const handleOpenDialog = () => setShowGetStartedDialog(true);
    document.addEventListener('openGetStartedDialog', handleOpenDialog);
    return () => document.removeEventListener('openGetStartedDialog', handleOpenDialog);
  }, []);

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "What is JioAICloud?",
      answer: "JioAICloud is Reliance Jio's advanced cloud computing platform that integrates artificial intelligence capabilities with secure cloud storage and services. It provides individuals and businesses with AI-powered tools, data management, and scalable cloud solutions within India's digital ecosystem."
    },
    {
      question: "Is JioAICloud free to use?",
      answer: "JioAICloud offers basic cloud storage and features at no additional cost with a valid Jio account. Premium plans with enhanced storage capacity, advanced AI features, and additional cloud services are available through paid subscription options."
    },
    {
      question: "How do I download and set up JioAICloud? ",
      answer: "JioAICloud can be accessed through the JioCloud app available on Google Play Store and Apple App Store. Simply download the app, log in with your Jio account credentials, and begin using cloud storage and AI-powered features immediately."
    },
    {
      question: "How do I stop or manage JioAICloud storage? ",
      answer: "Users can manage and free up JioAICloud storage by navigating to the storage settings within the JioCloud app. From there, you can review, delete, or back up files, and manage or cancel your subscription plan as needed."
    },
    {
      question: "Is JioAICloud safe and secure to use? ",
      answer: "Yes, JioAICloud implements enterprise-grade security features including end-to-end data encryption, secure authentication, and compliance with Indian data protection regulations. Your personal and business data remains protected and accessible only to authorized users."
    },
    {
      question: "What are the key benefits of using JioAICloud? ",
      answer: "JioAICloud offers several advantages including AI-powered data management, secure and reliable cloud storage, seamless integration with Jio services, scalable solutions for businesses, and advanced analytics capabilities designed to support India's growing digital infrastructure needs."
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
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=500&fit=crop" 
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
    "name": "What is JioAICloud?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JioAICloud is Reliance Jio's advanced cloud computing platform that integrates artificial intelligence capabilities with secure cloud storage and services. It provides individuals and businesses with AI-powered tools, data management, and scalable cloud solutions within India's digital ecosystem."
    }
  },{
    "@type": "Question",
    "name": "Is JioAICloud free to use?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JioAICloud offers basic cloud storage and features at no additional cost with a valid Jio account. Premium plans with enhanced storage capacity, advanced AI features, and additional cloud services are available through paid subscription options."
    }
  },{
    "@type": "Question",
    "name": "How do I download and set up JioAICloud?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JioAICloud can be accessed through the JioCloud app available on Google Play Store and Apple App Store. Simply download the app, log in with your Jio account credentials, and begin using cloud storage and AI-powered features immediately."
    }
  },{
    "@type": "Question",
    "name": "How do I stop or manage JioAICloud storage?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Users can manage and free up JioAICloud storage by navigating to the storage settings within the JioCloud app. From there, you can review, delete, or back up files, and manage or cancel your subscription plan as needed."
    }
  },{
    "@type": "Question",
    "name": "Is JioAICloud safe and secure to use?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, JioAICloud implements enterprise-grade security features including end-to-end data encryption, secure authentication, and compliance with Indian data protection regulations. Your personal and business data remains protected and accessible only to authorized users."
    }
  },{
    "@type": "Question",
    "name": "What are the key benefits of using JioAICloud?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JioAICloud offers several advantages including AI-powered data management, secure and reliable cloud storage, seamless integration with Jio services, scalable solutions for businesses, and advanced analytics capabilities designed to support India's growing digital infrastructure needs."
    }
  }]
}



  return (

<>
 <Helmet>
<title>Jio AI Cloud Partner India | Enterprise Cloud by Shivaami</title>
 <meta name="description" content="Deploy Jio AI Cloud with Shivaami. Indian cloud infrastructure with AI capabilities. Expert implementation and managed services for enterprises." />
<link rel="canonical" href="https://www.shivaami.com/jiocloud" />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 </Helmet>


    <div className="min-h-screen bg-white">
      <Header />
      <main><HeroSection /><FeaturesSection /><ActivationSection /><FAQSection /><CTASection /></main>
      <Footer />
      <GetStartedDialog open={showGetStartedDialog} onOpenChange={setShowGetStartedDialog} />
    </div></>
  );
};
export default JioCloud;
