import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Scan, 
  Bug, 
  Settings as SettingsIcon, 
  AlertTriangle, 
  Users, 
  Box, 
  Database, 
  FileCheck,
  Brain,
  Settings,
  Shield,
  GraduationCap,
  HeadphonesIcon,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Link,
  HelpCircle
} from "lucide-react";
import wizBanner from "@/assets/banners/wiz-banner.jpg";
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
          style={{ backgroundImage: `url(${wizBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/90 via-[#0C4594]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      <motion.div 
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-28"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.h1 
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          <span className="text-[#38B6FF]">Wiz: Unified </span> Cloud Security Solutions
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
           Wiz is a cloud security platform providing complete visibility across AWS, Azure, and Google Cloud with agentless deployment. Shivaami partners with Wiz to implement cloud security solutions for enterprises.
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
    title: "Agentless Scanning",
    description: "Complete visibility without installing agents on workloads or containers. API-based scanning discovers all cloud resources automatically. Coverage includes VMs, containers, serverless functions, and managed services."
  },
  {
    icon: Bug,
    title: "Vulnerability Management",
    description: "Identify vulnerabilities in operating systems, applications, and container images. Risk-based: prioritization focuses on exploitable issues first. Integration with CI/CD pipelines prevents vulnerable code deployment."
  },
  {
    icon: SettingsIcon,
    title: "Cloud Misconfiguration Detection",
    description: "Detect security misconfigurations across IAM, network, and storage services. Pre-built rules align with CIS benchmarks and compliance frameworks. Custom policies address organization-specific requirements."
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    description: "Identify active threats, including malware, cryptominers, and suspicious processes. Network analysis detects lateral movement and data exfiltration. Real-time alerts enable rapid incident response."
  },
  {
    icon: Users,
    title: "IAM Security",
    description: "Visualize identity permissions and access relationships across cloud accounts. Identify excessive permissions and privilege escalation paths. Recommendations enable least-privilege access implementation."
  },
  {
    icon: Box,
    title: "Container Security",
    description: "Scan container images for vulnerabilities and malware. Runtime security detects anomalous container behavior. Kubernetes security validates cluster configurations."
  },
  {
    icon: Database,
    title: "Data Security",
    description: "Discover sensitive data across cloud storage services. Identify publicly exposed resources and overly permissive access. Data classification supports compliance and governance."
  },
  {
    icon: FileCheck,
    title: "Compliance Monitoring",
    description: "Pre-built frameworks support PCI DSS, HIPAA, SOC 2, and other standards. Continuous monitoring tracks compliance posture over time. Audit-ready reports demonstrate adherence to requirements."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What Wiz Delivers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Agentless deployment, comprehensive coverage, and actionable risk prioritization
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
    description: "We assess your cloud security posture and identify high-priority risks. Our team designs the Wiz configuration and integration approach. You get a security improvement roadmap with clear priorities."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami connects Wiz to your AWS, Azure, and Google Cloud environments. We configure scanning, policies, and alerting aligned with your needs. Your cloud infrastructure gains visibility within hours."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our security experts tune policies and risk prioritization. We configure compliance frameworks and reporting. Integration with security tools enables automated response."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We train security teams on risk investigation and remediation workflows. Documentation supports ongoing security operations. Best practices guidance improves cloud security effectiveness."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami provides managed security services with continuous monitoring. We investigate alerts, validate findings, and guide remediation. Regular reviews optimize policies and reduce false positives."
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

const Wiz = () => {
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
      question: "What exactly does Wiz do?",
      answer: "Wiz is a cloud-native security platform that provides complete visibility into cloud environments. It identifies security risks such as misconfigurations, vulnerabilities, excessive permissions, and exposed data across cloud workloads, helping organizations secure their cloud infrastructure proactively."
    },
    {
      question: "Is Wiz part of AWS?",
      answer: "No, Wiz is not part of AWS. Wiz is an independent cloud security company that integrates with AWS, Microsoft Azure, Google Cloud Platform (GCP), and other cloud environments. It operates as a vendor-neutral platform supporting multi-cloud security."
    },
    {
      question: "How does Wiz protect cloud environments?",
      answer: "Wiz uses an agentless approach to continuously scan cloud infrastructure, workloads, identities, and configurations. It correlates risks across the cloud stack to identify real attack paths and provides prioritized, actionable remediation steps to reduce cloud security exposure."
    },
    {
      question: "What cloud platforms does Wiz support?",
      answer: "Wiz supports all major cloud platforms, including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud environments. This allows organizations to maintain consistent security visibility and controls across multi-cloud architectures."
    },
    {
      question: " What are the key benefits of using Wiz for cloud security?",
      answer: "Key benefits of Wiz include agentless deployment, unified multi-cloud visibility, real-time risk detection, vulnerability prioritization, compliance monitoring, and simplified cloud security management. Wiz helps security teams focus on the most critical risks without adding operational overhead."
    },
    {
      question: "How can organizations in India implement Wiz?",
      answer: "Organizations in India can implement Wiz by working with an experienced cloud security partner like Shivaami. The implementation includes cloud security assessment, Wiz onboarding, risk and policy configuration, compliance alignment, and ongoing monitoring to strengthen cloud security posture."
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
    "name": "What exactly does Wiz do?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Wiz is a cloud-native security platform that provides complete visibility into cloud environments. It identifies security risks such as misconfigurations, vulnerabilities, excessive permissions, and exposed data across cloud workloads, helping organizations secure their cloud infrastructure proactively."
    }
  },{
    "@type": "Question",
    "name": "Is Wiz part of AWS?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No, Wiz is not part of AWS. Wiz is an independent cloud security company that integrates with AWS, Microsoft Azure, Google Cloud Platform (GCP), and other cloud environments. It operates as a vendor-neutral platform supporting multi-cloud security."
    }
  },{
    "@type": "Question",
    "name": "How does Wiz protect cloud environments?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Wiz uses an agentless approach to continuously scan cloud infrastructure, workloads, identities, and configurations. It correlates risks across the cloud stack to identify real attack paths and provides prioritized, actionable remediation steps to reduce cloud security exposure."
    }
  },{
    "@type": "Question",
    "name": "What cloud platforms does Wiz support?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Wiz supports all major cloud platforms, including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud environments. This allows organizations to maintain consistent security visibility and controls across multi-cloud architectures."
    }
  },{
    "@type": "Question",
    "name": "What are the key benefits of using Wiz for cloud security?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Key benefits of Wiz include agentless deployment, unified multi-cloud visibility, real-time risk detection, vulnerability prioritization, compliance monitoring, and simplified cloud security management. Wiz helps security teams focus on the most critical risks without adding operational overhead."
    }
  },{
    "@type": "Question",
    "name": "How can organizations in India implement Wiz?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Organizations in India can implement Wiz by working with an experienced cloud security partner like Shivaami. The implementation includes cloud security assessment, Wiz onboarding, risk and policy configuration, compliance alignment, and ongoing monitoring to strengthen cloud security posture."
    }
  }]
}





  return (
    <>
    <Helmet>
<title>Wiz Partner in India & USA | Cloud Security Platform by Shivaami</title>
 <meta name="description" content="Deploy Wiz cloud security with Shivaami. Unified visibility across AWS, Azure, and GCP. Expert cloud security implementation and management." />
<link rel="canonical" href="https://www.shivaami.com/wiz" />
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

export default Wiz;
