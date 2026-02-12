import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Scan, 
  Cloud, 
  Box, 
  Globe, 
  Target, 
  Users, 
  Cpu, 
  FileCheck,
  Brain,
  Settings,
  Shield,
  GraduationCap,
  HeadphonesIcon,
  Calendar,
  CheckCircle2,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import tenableBanner from "@/assets/banners/tenable-banner.jpg";
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
          style={{ backgroundImage: `url(${tenableBanner})` }}
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
         <span className="text-[#38B6FF]">Tenable: Manage</span> Cyber Risk Solutions
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          Tenable is an exposure platform that identifies and prioritises vulnerabilities across IT infrastructure, cloud environments, and applications. Shivaami partners with Tenable to deliver management for enterprises in India and the US.
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
    icon: Scan,
    title: "Continuous Network Scanning",
    description: "Nessus technology discovers assets and identifies vulnerabilities automatically. Agent and agentless scanning options fit different environments. Credentialed scans provide deeper insight into system configurations."
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Tenable Cloud Security assesses AWS, Azure, and Google Cloud environments. Misconfiguration detection identifies security weaknesses in cloud resources. Compliance monitoring tracks adherence to security standards."
  },
  {
    icon: Box,
    title: "Container Security",
    description: "Scan container images for vulnerabilities before deployment. Runtime security monitors container behavior for threats. Integration with CI/CD pipelines prevents vulnerable code promotion."
  },
  {
    icon: Globe,
    title: "Web Application Scanning",
    description: "Automated testing identifies vulnerabilities in web applications and APIs. Dynamic and static analysis techniques provide comprehensive coverage. Integration with development tools enables shift-left security."
  },
  {
    icon: Target,
    title: "Vulnerability Prioritization",
    description: " Predictive prioritization scores vulnerabilities by exploit likelihood. Asset criticality analysis focuses on business-critical systems. Remediation guidance provides clear action steps."
  },
  {
    icon: Users,
    title: "Active Directory Assessment",
    description: "Identify privilege escalation paths and weak configurations. Attack path analysis shows how attackers could move through the environment. Hardening recommendations improve Active Directory security."
  },
  {
    icon: Cpu,
    title: "Operational Technology Security",
    description: "Discover and assess industrial control systems and SCADA devices. Passive monitoring avoids disrupting production systems. OT-specific vulnerability intelligence supports safe operations."
  },
  {
    icon: FileCheck,
    title: "Compliance Reporting",
    description: "Pre-built audit templates support PCI DSS, HIPAA, NIST, and other frameworks. Continuous monitoring tracks compliance status over time. Executive dashboards communicate risk to business leaders."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What Tenable Delivers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive visibility, accurate risk scoring, and remediation guidance
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
    description: "We assess your current vulnerability management approach and designan improvement roadmap. Our team identifies scanning requirements and asset coverage needs. You get a deployment plan for comprehensive exposure management."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami deploys Tenable scanners and configures scan policies. We integrate with IT systems for asset discovery and enrichment. Your environment gains vulnerability visibility quickly."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our experts configure prioritization models and compliance templates. We tune scanning to balance coverage and operational impact. Reporting demonstrates risk posture and improvement trends."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We train security teams on vulnerability analysis and remediation workflows. Integration with ticketing systems enables tracking of remediation. Process guidance improves vulnerability management effectiveness."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami provides managed vulnerability services with continuous scanning. We analyze results, validate findings, and track remediation. Regular reviews optimize scan coverage and prioritization models."
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

const Tenable = () => {
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
      question: "Is Tenable a monitoring tool?",
      answer: "Yes, Tenable is a vulnerability management and security monitoring platform. It continuously scans IT infrastructure, cloud environments, endpoints, and operational technology to identify, assess, and prioritise security vulnerabilities and exposure risks across the organisation."
    },
    {
      question: "What does Tenable do?",
      answer: "Tenable helps organisations identify a wide range of security risks, including software vulnerabilities, misconfigurations, exposed assets, weak credentials, and attack paths across IT infrastructure, cloud environments, Active Directory, and operational technology. It prioritises these risks based on real-world exploitability and business impact."
    },
    {
      question: "How does Tenable help with compliance?",
      answer: "Tenable supports compliance by continuously assessing systems against regulatory and security frameworks such as PCI DSS, ISO 27001, NIST, and HIPAA. It provides automated compliance reporting, risk tracking, and remediation insights to simplify audits and governance."
    },
    {
      question: "Is Tenable suitable for businesses of all sizes?",
      answer: "Yes, Tenable offers scalable vulnerability management solutions suitable for small businesses, mid-market organisations, and large enterprises. Flexible deployment options and subscription-based licensing make it accessible without heavy infrastructure requirements."
    },
    {
      question: " Is Check Point suitable for small and mid-sized businesses?",
      answer: "Yes, Check Point offers scalable security solutions suitable for small and mid-sized businesses. Flexible licensing, cloud-based security options, and centralized management make enterprise-grade protection accessible without high operational complexity."
    },
    {
      question: "How can organisations in India implement Tenable?",
      answer: "Organisations in India can implement Tenable by working with an experienced cybersecurity partner like Shivaami. The implementation includes asset discovery, vulnerability scanning configuration, compliance alignment, risk prioritisation, and ongoing monitoring to ensure effective cyber risk management."
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
                  >                   <AccordionTrigger className="text-[#0C4594] hover:text-[#38B6FF] text-left py-4 hover:no-underline text-sm">
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
    "name": "Is Tenable a monitoring tool?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Tenable is a vulnerability management and security monitoring platform. It continuously scans IT infrastructure, cloud environments, endpoints, and operational technology to identify, assess, and prioritise security vulnerabilities and exposure risks across the organisation."
    }
  },{
    "@type": "Question",
    "name": "What does Tenable do?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Tenable helps organisations discover and manage cyber risk by providing visibility into assets, vulnerabilities, misconfigurations, and exposures. It enables security teams to prioritise remediation efforts and improve overall security posture across on-premises, cloud, and hybrid environments."
    }
  },{
    "@type": "Question",
    "name": "What types of security risks does Tenable help identify?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Tenable helps organisations identify a wide range of security risks, including software vulnerabilities, misconfigurations, exposed assets, weak credentials, and attack paths across IT infrastructure, cloud environments, Active Directory, and operational technology. It prioritises these risks based on real-world exploitability and business impact."
    }
  },{
    "@type": "Question",
    "name": "How does Tenable help with compliance?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Tenable supports compliance by continuously assessing systems against regulatory and security frameworks such as PCI DSS, ISO 27001, NIST, and HIPAA. It provides automated compliance reporting, risk tracking, and remediation insights to simplify audits and governance."
    }
  },{
    "@type": "Question",
    "name": "Is Tenable suitable for businesses of all sizes?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Tenable offers scalable vulnerability management solutions suitable for small businesses, mid-market organisations, and large enterprises. Flexible deployment options and subscription-based licensing make it accessible without heavy infrastructure requirements."
    }
  },{
    "@type": "Question",
    "name": "How can organisations in India implement Tenable?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Organisations in India can implement Tenable by working with an experienced cybersecurity partner like Shivaami. The implementation includes asset discovery, vulnerability scanning configuration, compliance alignment, risk prioritisation, and ongoing monitoring to ensure effective cyber risk management."
    }
  }]
}




  return (

    <>
     <Helmet>
<title>Tenable Partner India | Vulnerability Management by Shivaami</title>
 <meta name="description" content="Deploy Tenable vulnerability management with Shivaami. Continuous exposure assessment and risk prioritization. Certified Tenable partner in India." />
<link rel="canonical" href="https://www.shivaami.com/tenable" />
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

export default Tenable;
