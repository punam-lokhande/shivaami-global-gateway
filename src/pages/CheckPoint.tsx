import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Shield, 
  Zap, 
  Cloud, 
  Smartphone, 
  Mail, 
  Monitor, 
  Cpu, 
  Settings as SettingsIcon,
  Brain,
  Settings,
  GraduationCap,
  HeadphonesIcon,
  Calendar,
  CheckCircle2,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import checkPointBanner from "@/assets/banners/checkpoint-banner.jpg";
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
      className="relative flex items-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${checkPointBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/90 via-[#0C4594]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      <motion.div 
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-10 md:pb-12 lg:pb-16"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.h1 
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          <span className="text-[#38B6FF]">Check Point :</span> Enterprise Security Protection 
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          Check Point delivers cybersecurity solutions protecting networks, cloud, mobile, and IoT with advanced firewalls and threat prevention. Shivaami, a certified partner, implements security solutions for enterprises across India & US.
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
    title: "Network Security Gateways",
    description: "Next-generation firewalls inspect all traffic with high performance. Application control manages access regardless of port or protocol. Unified threat management consolidates security functions in a single appliance."
  },
  {
    icon: Zap,
    title: "Advanced Threat Prevention",
    description: "SandBlast technology blocks zero-day malware and targeted attacks. CPU-level exploit prevention stops attacks before they execute. Threat extraction removes exploits from files before delivery."
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "CloudGuard protects workloads across AWS, Azure, Google Cloud, and Kubernetes. Automated security extends to containers and serverless functions. Unified policies ensure consistent protection across hybrid environments."
  },
  {
    icon: Smartphone,
    title: "Mobile Security",
    description: "Harmony Mobile protects devices against network and application threats. Mobile threat defense prevents phishing and man-in-the-middle attacks. Zero-phishing technology blocks credential theft attempts."
  },
  {
    icon: Mail,
    title: "Email Security",
    description: "Advanced threat protection blocks phishing emails and malicious attachments. URL protection prevents users from accessing dangerous websites. Data loss prevention stops sensitive information from leaving via email."
  },
  {
    icon: Monitor,
    title: "Endpoint Protection",
    description: "Harmony Endpoint provides complete endpoint security with a single agent. Ransomware protection uses behavioral analysis and threat intelligence. Forensic capabilities support incident investigation."
  },
  {
    icon: Cpu,
    title: "IoT Security",
    description: "Discover and classify IoT devices automatically. Vulnerability assessment identifies security weaknesses. Segmentation policies isolate IoT networks from critical systems."
  },
  {
    icon: SettingsIcon,
    title: "Unified Management",
    description: "A single management console controls all security infrastructure. Centralized policies simplify administration and ensure consistency. Reporting provides comprehensive security visibility."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What Check Point Delivers
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
    description: "We assess your security architecture and identify protection gaps. Our team designs Check Point solutions aligned with the threat landscape. You get a security roadmap with implementation priorities."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami deploys and configures Check Point security infrastructure. We integrate with existing network and security tools. Your environment gains advanced protection with proper segmentation."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our experts configure threat prevention policies and security controls. We implement best practices for network security and access control. Compliance reporting supports regulatory requirements."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We train security teams on platform management and threat investigation. Operational procedures document response to security events. Knowledge transfer ensures effective ongoing operations."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami provides managed security services with continuous monitoring. We tune policies, investigate alerts, and update protections. Regular security reviews ensure effectiveness against evolving threats."
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

const CheckPointBadgesSection = () => {
  const badges = [
    { src: '/badges/checkpoint-mssp-partner.jpg', alt: 'Check Point MSSP Partner 2026', label: 'MSSP Partner' },
    { src: '/badges/checkpoint-harmony-workspace.jpg', alt: 'Check Point Harmony Workspace Partner 2026', label: 'Harmony Workspace' },
    { src: '/badges/checkpoint-harmony-sase.jpg', alt: 'Check Point Harmony SASE Partner 2026', label: 'Harmony SASE' },
    { src: '/badges/checkpoint-advanced-partner.jpg', alt: 'Check Point Advanced Partner', label: 'Advanced Partner' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#eef6ff] to-[#e0f0ff]" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#38B6FF]/8 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#0C4594]/6 to-transparent rounded-full blur-[80px]" />
        
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0C4594 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute left-8 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-[#38B6FF]/20 to-transparent origin-top"
        />
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute right-8 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-[#0C4594]/20 to-transparent origin-top"
        />
      </div>
      
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-[#0C4594]">Certified to Protect.</span>{' '}
            <span className="bg-gradient-to-r from-[#38B6FF] to-[#0C4594] bg-clip-text text-transparent">Trusted to Deliver.</span>
          </h2>
          
          <p className="text-[#475569] text-lg leading-relaxed">
            Shivaami carries Check Point's most prestigious partner designations, so when it comes to securing your business, you're backed by verified expertise, not just promises.
          </p>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] rounded-full mx-auto mt-8"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#38B6FF]/30 to-[#0C4594]/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(56,182,255,0.15)] transition-all duration-500 border border-[#e2e8f0] hover:border-[#38B6FF]/40 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C4594] via-[#38B6FF] to-[#0C4594] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
                  />
                  
                  <div className="relative z-10 aspect-square flex items-center justify-center mb-3">
                    <img 
                      src={badge.src} 
                      alt={badge.alt}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="text-center">
                    <span className="text-xs font-medium text-[#64748b] group-hover:text-[#0C4594] transition-colors duration-300">{badge.label}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import CTASection from '@/components/sections/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Helmet } from "react-helmet-async";

const CheckPoint = () => {
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
      question: "What is Check Point?",
      answer: "Check Point is a global cybersecurity company that provides security solutions for networks, endpoints, cloud, and mobile environments. Organizations use Check Point to prevent cyber attacks, protect data, and maintain compliance across on-premises, hybrid, and cloud infrastructures."
    },
    {
      question: "What is Check Point software used for?",
      answer: "Check Point software is used for network security, firewall protection, intrusion prevention, threat detection, and data security. It monitors and controls network traffic, blocks malicious activity, and protects sensitive information across enterprise environments."
    },
    {
      question: "What are the key products offered by Check Point?",
      answer: "Check Point’s security portfolio includes:Quantum for network security and next-generation firewalls. Harmony for endpoint, email, and user protection. CloudGuard for cloud and workload security. Infinity Platform for unified security management and threat prevention. Together, these solutions provide end-to-end cyber protection."
    },
    {
      question: "How does Check Point protect against advanced cyber threats?",
      answer: "Check Point uses AI-powered threat prevention, deep packet inspection, and real-time threat intelligence to detect and block advanced cyber threats. Its multi-layered security architecture protects networks, applications, and data against ransomware, zero-day attacks, and advanced persistent threats."
    },
    {
      question: " Is Check Point suitable for small and mid-sized businesses?",
      answer: "Yes, Check Point offers scalable security solutions suitable for small and mid-sized businesses. Flexible licensing, cloud-based security options, and centralized management make enterprise-grade protection accessible without high operational complexity."
    },
    {
      question: "How can organizations in India implement Check Point?",
      answer: "Organizations in India can implement Check Point by working with an experienced cybersecurity partner like Shivaami. The implementation includes security assessment, solution design, deployment, policy configuration, integration with existing infrastructure, and ongoing monitoring to ensure strong protection and compliance."
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
    "name": "What is Check Point?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Wiz is a cloud-native security platform that provides complete visibility into cloud environments. It identifies security risks such as misconfigurations, vulnerabilities, excessive permissions, and exposed data across cloud workloads, helping organizations secure their cloud infrastructure proactively."
    }
  },{
    "@type": "Question",
    "name": "What is Check Point software used for?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Check Point software is used for network security, firewall protection, intrusion prevention, threat detection, and data security. It monitors and controls network traffic, blocks malicious activity, and protects sensitive information across enterprise environments."
    }
  },{
    "@type": "Question",
    "name": "What are the key products offered by Check Point?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Check Point’s security portfolio includes: Quantum for network security and next-generation firewalls. Harmony for endpoint, email, and user protection. CloudGuard for cloud and workload security. Infinity Platform for unified security management and threat prevention. Together, these solutions provide end-to-end cyber protection."
    }
  },{
    "@type": "Question",
    "name": "How does Check Point protect against advanced cyber threats?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Check Point uses AI-powered threat prevention, deep packet inspection, and real-time threat intelligence to detect and block advanced cyber threats. Its multi-layered security architecture protects networks, applications, and data against ransomware, zero-day attacks, and advanced persistent threats."
    }
  },{
    "@type": "Question",
    "name": "Is Check Point suitable for small and mid-sized businesses?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Check Point offers scalable security solutions suitable for small and mid-sized businesses. Flexible licensing, cloud-based security options, and centralized management make enterprise-grade protection accessible without high operational complexity."
    }
  },{
    "@type": "Question",
    "name": "How can organizations in India implement Check Point?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Organizations in India can implement Check Point by working with an experienced cybersecurity partner like Shivaami. The implementation includes security assessment, solution design, deployment, policy configuration, integration with existing infrastructure, and ongoing monitoring to ensure strong protection and compliance."
    }
  }]
}


  return (

    <>
 <Helmet>
<title>Check Point Partner India | Cybersecurity Solutions by Shivaami</title>
 <meta name="description" content="Deploy Check Point security solutions with Shivaami. Network security, cloud protection, and threat prevention. Certified Check Point partner in India." />
<link rel="canonical" href="https://www.shivaami.com/checkpoint" />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 </Helmet>

    
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ActivationSection />
        <CheckPointBadgesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div></>
  );
};

export default CheckPoint;
