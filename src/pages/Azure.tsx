import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetStartedDialog from "@/components/GetStartedDialog";
import { Server, Layers, Cloud, Database, Shield, Network, Brain as BrainIcon, Users, Brain, Settings, GraduationCap, HeadphonesIcon, Calendar, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import azureBanner from "@/assets/banners/azure-banner.jpg";
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
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${azureBanner})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/90 via-[#0C4594]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>
      <motion.div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36" style={{ opacity }}>
        <div className="max-w-3xl">
          <motion.h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
           <span className="text-[#38B6FF]">Microsoft Azure: Transform</span> with Cloud Solutions
          </motion.h1>
          <motion.p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          Microsoft Azure is an enterprise cloud platform offering computing, analytics, storage, and networking with seamless Microsoft integration. Shivaami, a certified Azure partner, designs and manages cloud solutions for Indian enterprises.
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
    title: "Virtual Machines",
    description: "Run Windows and Linux servers with flexible sizing options. Broad selection of instance types for different workloads. Reserved instances reduce costs for predictable usage."
  },
  {
    icon: Layers,
    title: "App Services",
    description: "Platform-as-a-service for web, mobile, and API applications. Automatic scaling handles traffic fluctuations. Built-in DevOps integration accelerates deployment."
  },
  {
    icon: Cloud,
    title: "Azure Kubernetes Service",
    description: " Managed Kubernetes simplifies container orchestration. Integrated monitoring and security enhance operations. Serverless Kubernetes reduces infrastructure management."
  },
  {
    icon: Database,
    title: "Storage Services",
    description: "Blob storage for unstructured data with massive scale. File storage provides SMB shares in the cloud. Managed disks deliver high-performance block storage."
  },
  {
    icon: Users,
    title: "Azure Active Directory",
    description: "Identity platform connects with Microsoft 365 seamlessly. Conditional access policies enforce security requirements. B2B collaboration enables secure partner access."
  },
  {
    icon: Network,
    title: "Networking Solutions",
    description: "Virtual Network isolates resources with complete control. ExpressRoute provides dedicated private connectivity. Application Gateway load balances and secures web applications."
  },
  {
    icon: BrainIcon,
    title: "AI and Machine Learning:",
    description: "Cognitive Services add vision, speech, and language capabilities. Machine Learning Studio enables model development without coding. Bot Service creates intelligent conversational interfaces."
  },
  {
    icon: Shield,
    title: "SQL Database",
    description: "Fully managed SQL Server with automatic tuning. Built-in intelligence optimizes performance continuously. Hyperscale tier supports databases up to 100TB."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What Microsoft Azure Delivers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Unified Microsoft ecosystem for Windows workloads and .NET applications
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
    description: "We evaluate your Microsoft technology stack and cloud readiness. Our team designs Azure architecture optimized for your applications."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami migrates workloads using Azure native tools and automation. We configure networking, identity, and security controls."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our experts implement Azure Security Center recommendations. We configure policies, monitoring, and access controls."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We train IT teams on Azure services and management tools. Best practices guidance improves operational efficiency."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami provides managed Azure services with proactive monitoring. We optimize costs, performance, and resource utilization."
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
          As a Microsoft partner, we leverage Azure specializations and support resources
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

const Azure = () => {
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
      question: "What is Microsoft Azure used for?",
      answer: "Microsoft Azure is used to build, deploy, and manage cloud-based applications and infrastructure. Businesses use Azure for virtual machines, application hosting, data storage, analytics, AI, disaster recovery, and hybrid cloud deployments. In India, Azure is widely adopted for enterprise workloads, Microsoft 365 integration, and secure cloud migration."
    },
    {
      question: "How do I deploy Microsoft Azure for my business in India?",
      answer: "Businesses can deploy Microsoft Azure by working with a certified Azure partner like Shivaami. The process includes cloud assessment, architecture design, migration, security configuration, and ongoing managed services to ensure performance, compliance, and cost optimization."
    },
    {
      question: "What is Microsoft Azure best known for?",
      answer: "Microsoft Azure is best known for its hybrid cloud capabilities, enterprise-grade security, and deep integration with Microsoft products. It is widely recognized for supporting Windows workloads, .NET applications, Azure Active Directory, and scalable cloud infrastructure for businesses of all sizes."
    },
    {
      question: "How can I get Microsoft Azure certification?",
      answer: "To get Microsoft Azure certified, start by choosing a role-based certification such as Azure Fundamentals, Administrator, Developer, or Solutions Architect. You can prepare using Microsoft Learn’s free training modules and then take the certification exam online or at an authorized test center in India."
    },
    {
      question: "Is Microsoft Azure difficult to learn?",
      answer: "Microsoft Azure is not difficult to learn if you have basic IT or cloud knowledge. Beginners can start with Azure Fundamentals, while professionals with experience in Windows, networking, or DevOps find Azure easier due to familiar tools and interfaces. Structured training and hands-on practice make learning Azure manageable."
    },
    {
      question: "Is Microsoft Azure free to use?",
      answer: "Microsoft Azure offers a free account that includes limited access to popular services for 12 months, along with a credit to explore paid services. Some services remain free beyond the trial period, making Azure suitable for testing, learning, and small workloads before full-scale deployment."
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
    "name": "What is Microsoft Azure used for?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Microsoft Azure is used to build, deploy, and manage cloud-based applications and infrastructure. Businesses use Azure for virtual machines, application hosting, data storage, analytics, AI, disaster recovery, and hybrid cloud deployments. In India, Azure is widely adopted for enterprise workloads, Microsoft 365 integration, and secure cloud migration."
    }
  },{
    "@type": "Question",
    "name": "How do I deploy Microsoft Azure for my business in India?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Businesses can deploy Microsoft Azure by working with a certified Azure partner like Shivaami. The process includes cloud assessment, architecture design, migration, security configuration, and ongoing managed services to ensure performance, compliance, and cost optimization."
    }
  },{
    "@type": "Question",
    "name": "What is Microsoft Azure best known for?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Microsoft Azure is best known for its hybrid cloud capabilities, enterprise-grade security, and deep integration with Microsoft products. It is widely recognized for supporting Windows workloads, .NET applications, Azure Active Directory, and scalable cloud infrastructure for businesses of all sizes."
    }
  },{
    "@type": "Question",
    "name": "How can I get Microsoft Azure certification?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To get Microsoft Azure certified, start by choosing a role-based certification such as Azure Fundamentals, Administrator, Developer, or Solutions Architect. You can prepare using Microsoft Learn’s free training modules and then take the certification exam online or at an authorized test center in India."
    }
  },{
    "@type": "Question",
    "name": "Is Microsoft Azure difficult to learn?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Microsoft Azure is not difficult to learn if you have basic IT or cloud knowledge. Beginners can start with Azure Fundamentals, while professionals with experience in Windows, networking, or DevOps find Azure easier due to familiar tools and interfaces. Structured training and hands-on practice make learning Azure manageable."
    }
  },{
    "@type": "Question",
    "name": "Is Microsoft Azure free to use?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Microsoft Azure offers a free account that includes limited access to popular services for 12 months, along with a credit to explore paid services. Some services remain free beyond the trial period, making Azure suitable for testing, learning, and small workloads before full-scale deployment."
    }
  }]
}




  return (
<>
<Helmet>
<title>Azure Partner in India & USA | Cloud Solutions by Shivaami</title>
 <meta name="description" content="Deploy Microsoft Azure with Shivaami. Expert cloud migration, architecture design, and managed services. Certified Azure partner in India." />
<link rel="canonical" href="https://www.shivaami.com/azure" />
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
export default Azure;
