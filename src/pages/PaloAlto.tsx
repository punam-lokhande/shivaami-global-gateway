import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Shield, 
  Zap, 
  Cloud, 
  Lock, 
  Globe, 
  Settings as SettingsIcon, 
  Monitor, 
  BarChart3,
  Brain,
  Settings,
  GraduationCap,
  HeadphonesIcon,
  Calendar,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Link
} from "lucide-react";
import paloAltoBanner from "@/assets/banners/paloalto-banner.jpg";
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
          style={{ backgroundImage: `url(${paloAltoBanner})` }}
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
          <span className="text-[#38B6FF]">Palo Alto: Zero</span> <br/> Trust Security
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
           Palo Alto Networks delivers next-generation cybersecurity protecting networks, cloud, and endpoints with advanced firewalls and zero-trust architecture. Shivaami, a certified partner, designs and manages security solutions for organizations.
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
    icon: Shield,
    title: "Next-Generation Firewalls",
    description: "Inspect all traffic, including encrypted connections, without performance impact. Application-based policies control access regardless of port or protocol. Integrated threat prevention blocks exploits, malware, and command-and-control traffic."
  },
  {
    icon: Zap,
    title: "Advanced Threat Prevention",
    description: "Machine learning identifies and blocks unknown malware and zero-day attacks. WildFire cloud sandbox analyzes suspicious files in real time. Threat intelligence updates protect against the latest attack techniques."
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Prisma Cloud secures workloads across AWS, Azure, Google Cloud, and Kubernetes. Cloud-native application protection identifies vulnerabilities in development. Compliance monitoring ensures adherence to security standards."
  },
  {
    icon: Lock,
    title: "Zero Trust Network Access",
    description: "Prisma Access provides secure remote access without a traditional VPN. Identity-based policies enforce least-privilege access. Global infrastructure ensures fast, secure connectivity for remote users."
  },
  {
    icon: Globe,
    title: "DNS Security",
    description: "Block access to malicious domains and prevent DNS tunneling attacks. Machine learning predicts threats before they reach threat databases. Real-time enforcement protects users at the DNS layer."
  },
  {
    icon: SettingsIcon,
    title: "Security Orchestration",
    description: "Cortex XSOAR automates security operations and incident response. Playbooks standardize investigation and remediation procedures. Integration with other tools eliminates manual work."
  },
  {
    icon: Monitor,
    title: "Endpoint Protection",
    description: "Cortex XDR correlates data across endpoints, the network, and the cloud. Behavioral analytics detect sophisticated attack techniques. Automated response contains threats before damage occurs."
  },
  {
    icon: BarChart3,
    title: "Security Analytics",
    description: "Centralized logging and analysis provide visibility across security infrastructure. AI-powered analytics identify anomalies and threats. Reporting demonstrates security posture and compliance status."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What Palo Alto Networks Delivers
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
    description: "We assess your security architecture and identify gaps in protection. Our team designs solutions aligned with the threat landscape and business risk. You get a security roadmap with prioritized recommendations."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami deploys and configures Palo Alto Networks solutions to your specifications. We integrate with existing security tools and network infrastructure. Your environment gains advanced protection with minimal disruption."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our security experts configure policies, threat prevention profiles, and monitoring. We implement zero-trust principles and least-privilege access. Compliance reporting supports regulatory requirements."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We train security teams on platform features and threat investigation. Runbooks document response procedures for common security events. Knowledge transfer ensures your team can operate and optimize solutions."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami provides managed security services with continuous monitoring. We tune policies, investigate alerts, and respond to threats. Regular security reviews ensure protection evolves with the threat landscape."
  }
];

const ActivationSection = () => (
  <section className="py-20 bg-white">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          How Shivaami Helps You Succeed?
        </h2>
       
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

const PaloAlto = () => {
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
      question: "What does Palo Alto Networks do?",
      answer: "Palo Alto Networks is a global cybersecurity company that provides advanced security solutions to protect networks, cloud environments, endpoints, and applications. Organizations use Palo Alto Networks to prevent cyber threats, secure data, and gain visibility across modern hybrid and cloud-based IT environments."
    },
    {
      question: "What are the key products offered by Palo Alto Networks?",
      answer: "Palo Alto Networks offers a broad cybersecurity portfolio, including:Next-Generation Firewalls (NGFW) for network security. Prisma Cloud for cloud security and posture management. Cortex for endpoint detection, response, and security operations. Unit 42 for threat intelligence and incident response. These products work together to provide unified threat prevention across environments."
    },
    {
      question: "How does Palo Alto Networks protect against advanced cyber threats?",
      answer: "Palo Alto Networks uses AI-powered threat detection, machine learning, and behavioral analytics to identify and stop advanced threats in real time. Its platform continuously inspects traffic across networks, endpoints, and cloud workloads to prevent malware, ransomware, and zero-day attacks."
    },
    {
      question: "Which is better: Cisco or Palo Alto Networks?",
      answer: "Cisco and Palo Alto Networks both offer enterprise-grade security solutions. Cisco is often chosen for tightly integrated networking and security environments, while Palo Alto Networks is known for advanced threat prevention, next-generation firewalls, and cloud-native security. The right choice depends on your security architecture, threat landscape, and cloud strategy."
    },
    {
      question: "Is Palo Alto Networks suitable for small and mid-sized businesses?",
      answer: "Yes, Palo Alto Networks provides scalable security solutions suitable for small and mid-sized businesses. Flexible licensing, cloud-delivered security services, and managed deployment options allow SMBs to access enterprise-level protection without complex infrastructure."
    },
    {
      question: "How can organizations in India implement Palo Alto Networks?",
      answer: "Organizations in India can implement Palo Alto Networks by working with an experienced partner like Shivaami. The implementation includes security assessment, architecture design, firewall and cloud security deployment, policy configuration, and ongoing monitoring to ensure strong protection and regulatory compliance."
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






const faqSchema =
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What does Palo Alto Networks do?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Palo Alto Networks is a global cybersecurity company that provides advanced security solutions to protect networks, cloud environments, endpoints, and applications. Organizations use Palo Alto Networks to prevent cyber threats, secure data, and gain visibility across modern hybrid and cloud-based IT environments."
    }
  },{
    "@type": "Question",
    "name": "What are the key products offered by Palo Alto Networks?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Palo Alto Networks offers a broad cybersecurity portfolio, including:Next-Generation Firewalls (NGFW) for network security. Prisma Cloud for cloud security and posture management. Cortex for endpoint detection, response, and security operations. Unit 42 for threat intelligence and incident response. These products work together to provide unified threat prevention across environments."
    }
  },{
    "@type": "Question",
    "name": "How does Palo Alto Networks protect against advanced cyber threats?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Palo Alto Networks uses AI-powered threat detection, machine learning, and behavioral analytics to identify and stop advanced threats in real time. Its platform continuously inspects traffic across networks, endpoints, and cloud workloads to prevent malware, ransomware, and zero-day attacks."
    }
  },{
    "@type": "Question",
    "name": "Which is better: Cisco or Palo Alto Networks?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Cisco and Palo Alto Networks both offer enterprise-grade security solutions. Cisco is often chosen for tightly integrated networking and security environments, while Palo Alto Networks is known for advanced threat prevention, next-generation firewalls, and cloud-native security. The right choice depends on your security architecture, threat landscape, and cloud strategy."
    }
  },{
    "@type": "Question",
    "name": "Is Palo Alto Networks suitable for small and mid-sized businesses?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Palo Alto Networks provides scalable security solutions suitable for small and mid-sized businesses. Flexible licensing, cloud-delivered security services, and managed deployment options allow SMBs to access enterprise-level protection without complex infrastructure."
    }
  },{
    "@type": "Question",
    "name": "How can organizations in India implement Palo Alto Networks?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Organizations in India can implement Palo Alto Networks by working with an experienced partner like Shivaami. The implementation includes security assessment, architecture design, firewall and cloud security deployment, policy configuration, and ongoing monitoring to ensure strong protection and regulatory compliance."
    }
  }]
}



  return (
    <>
     <Helmet>
<title>Palo Alto Partner in India | Next-Gen Security by Shivaami</title>
 <meta name="description" content="Deploy Palo Alto Networks security solutions with Shivaami. Next-generation firewalls, cloud security, and threat prevention. Certified partner in India." />
<link rel="canonical" href="https://www.shivaami.com/paloalto" />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 </Helmet>

    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ActivationSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div></>
  );
};

export default PaloAlto;
