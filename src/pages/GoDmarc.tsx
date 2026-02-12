import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useRegion } from '@/contexts/RegionContext';
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Shield, 
  Key, 
  Lock, 
  BarChart3, 
  AlertTriangle, 
  TrendingUp, 
  Zap, 
  FileCheck,
  Brain,
  Settings,
  GraduationCap,
  HeadphonesIcon,
  Calendar,
  CheckCircle2,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import goDmarcBanner from "@/assets/banners/godmarc-banner.jpg";
import strategicPlanning from "@/assets/activation/strategic-planning.jpg";
import technicalDeployment from "@/assets/activation/technical-deployment.jpg";
import securityConfig from "@/assets/activation/security-config.jpg";
import teamTraining from "@/assets/activation/team-training.jpg";
import ongoingSupport from "@/assets/activation/ongoing-support.jpg";
import GetStartedDialog from "@/components/GetStartedDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Helmet } from "react-helmet-async";

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
          style={{ backgroundImage: `url(${goDmarcBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/90 via-[#0C4594]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      <motion.div 
        className="relative z-10 w-full px-8 lg:px-16 xl:px-24"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          <span className="text-[#38B6FF]">GoDMARC: Email</span> Domain Protection
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
           GoDMARC is an email authentication platform implementing DMARC, SPF, and DKIM to protect domains from spoofing and fraud. Shivaami partners with GoDMARC to deliver email security in India and the US.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg"
              onClick={handleGetStarted}
              className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

const features = [
  {
    icon: Shield,
    title: "DMARC Implementation",
    description: "Authenticate emails sent from your domain with the industry-standard protocol. Prevent attackers from spoofing your domain in phishing attacks. Policy enforcement tells recipients how to handle unauthenticated emails."
  },
  {
    icon: Key,
    title: "SPF Configuration",
    description: "Specify which mail servers can send email for your domain. Simple validation prevents basic spoofing attempts. Works alongside DMARC for comprehensive protection."
  },
  {
    icon: Lock,
    title: "DKIM Signing",
    description: "Cryptographic signatures verify email integrity and authenticity. Prevents message tampering during transmission. Receiving servers validate signatures automatically."
  },
  {
    icon: BarChart3,
    title: "Monitoring and Reporting",
    description: "Track all emails sent using your domain. Identify unauthorized sending sources quickly. Aggregate reports show authentication success rates."
  },
  {
    icon: AlertTriangle,
    title: "Policy Enforcement",
    description: "Gradually move from monitoring to enforcement with confidence. Quarantine or reject unauthenticated emails at recipient servers. Protect recipients while maintaining legitimate email flow."
  },
  {
    icon: TrendingUp,
    title: "Deliverability Improvement",
    description: "Authenticated emails bypass spam filters more reliably. Major email providers prioritize properly authenticated messages. Reputation benefits from demonstrated security practices."
  },
  {
    icon: Zap,
    title: "Threat Intelligence",
    description: "Identify phishing campaigns targeting your domain. Receive alerts when spoofing attempts occur. Intelligence informs security awareness training."
  },
  {
    icon: FileCheck,
    title: "Compliance Support",
    description: "Meet regulatory requirements for email security. Documentation supports audit and compliance processes. Demonstrate proactive email protection measures."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What GoDMARC Delivers
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
    description: "We audit your current email authentication configuration. Our team identifies all legitimate email sources for your domain. You get a roadmap for complete DMARC implementation."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami configures SPF, DKIM, and DMARC records correctly. We work with email service providers to enable authentication. Your domain gains protection without disrupting legitimate email."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our experts monitor authentication reports and identify issues. We gradually enforce policies as confidence grows. Complete protection prevents domain spoofing effectively."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We explain email authentication to stakeholders clearly. Communication addresses any concerns about email deliverability. Guidance ensures a smooth transition to enforcement."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami monitors your DMARC environment continuously. We add new email sources as your business evolves. Regular reviews ensure ongoing protection and compliance."
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

const CalendarCTASection = () => {
  const { region } = useRegion();
  const consultationLink = region === 'india' 
    ? 'https://calendar.app.google/gV1KaLLVkPR32C1p9'
    : 'https://app.apollo.io/#/meet/40u-obp-ihl/30-min';

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#1565C0] to-[#0D47A1]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
          <Calendar className="w-16 h-16 text-[#38B6FF] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Implement Email Authentication with GoDMARC
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Schedule a consultation with our email security specialists
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left max-w-3xl mx-auto">
            {[
              "Email authentication audit",
              "SPF/DKIM/DMARC configuration",
              "Policy enforcement planning",
              "Deliverability monitoring",
              "Threat intelligence alerts",
              "Compliance documentation"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#38B6FF] flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
                size="lg" 
                onClick={() => document.dispatchEvent(new CustomEvent('openGetStartedDialog'))}
                className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            <a href={consultationLink} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GoDmarc = () => {
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
      question: "Why is DMARC needed for email security?",
      answer: "DMARC (Domain-based Message Authentication, Reporting, and Conforming) helps organizations authenticate legitimate email senders and prevent unauthorized use of their domain. It protects against email spoofing, phishing attacks, and brand impersonation by verifying sender identity."
    },
    {
      question: "Does DMARC affect the way my emails get delivered?",
      answer: "DMARC can be configured with different policy levels (none, quarantine, reject) that determine how receiving servers handle failed authentication. Organizations typically start with monitoring mode to avoid delivery issues, then gradually implement stricter policies based on authentication data."
    },
    {
      question: "What is GoDMARC, and how does it help organizations?",
      answer: "GoDMARC is a SaaS and Managed Services solution that simplifies DMARC deployment and management for businesses. It provides easy implementation, real-time monitoring, detailed reporting, and expert support to protect your domain from email-based threats."
    },
    {
      question: "How does DMARC work with SPF and DKIM?",
      answer: "DMARC builds upon existing email authentication protocols, SPF (Sender Policy Framework) and DKIM (DomainKeys Identified Mail). It requires at least one of these authentication methods to pass and provides domain owners with visibility and control over email authentication results."
    },
    {
      question: "What reports does DMARC provide?",
      answer: "DMARC generates aggregate reports showing authentication results and forensic reports with detailed information about failed authentication attempts. These reports help identify legitimate sending sources, detect spoofing attempts, and monitor email channel health."
    },
    {
      question: "How long does it take to implement DMARC?",
      answer: "DMARC implementation is a phased process. Initial setup with a monitoring policy can be completed within hours, but moving to enforcement policies typically takes several weeks to months as organizations analyze reports, identify legitimate sources, and ensure proper authentication."
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
    "name": "Why is DMARC needed for email security?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DMARC (Domain-based Message Authentication, Reporting, and Conforming) helps organizations authenticate legitimate email senders and prevent unauthorized use of their domain. It protects against email spoofing, phishing attacks, and brand impersonation by verifying sender identity."
    }
  },{
    "@type": "Question",
    "name": "Does DMARC affect the way my emails get delivered?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DMARC can be configured with different policy levels (none, quarantine, reject) that determine how receiving servers handle failed authentication. Organizations typically start with monitoring mode to avoid delivery issues, then gradually implement stricter policies based on authentication data."
    }
  },{
    "@type": "Question",
    "name": "What is GoDMARC, and how does it help organizations?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "GoDMARC is a SaaS and Managed Services solution that simplifies DMARC deployment and management for businesses. It provides easy implementation, real-time monitoring, detailed reporting, and expert support to protect your domain from email-based threats."
    }
  },{
    "@type": "Question",
    "name": "How does DMARC work with SPF and DKIM?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DMARC builds upon existing email authentication protocols, SPF (Sender Policy Framework) and DKIM (DomainKeys Identified Mail). It requires at least one of these authentication methods to pass and provides domain owners with visibility and control over email authentication results."
    }
  },{
    "@type": "Question",
    "name": "What reports does DMARC provide?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DMARC generates aggregate reports showing authentication results and forensic reports with detailed information about failed authentication attempts. These reports help identify legitimate sending sources, detect spoofing attempts, and monitor email channel health."
    }
  },{
    "@type": "Question",
    "name": "How long does it take to implement DMARC?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DMARC implementation is a phased process. Initial setup with a monitoring policy can be completed within hours, but moving to enforcement policies typically takes several weeks to months as organizations analyze reports, identify legitimate sources, and ensure proper authentication."
    }
  }]
}



  return (
    <>

 <Helmet>
<title>GoDMARC Partner India | Email Authentication by Shivaami</title>
 <meta name="description" content="Deploy GoDMARC email authentication with Shivaami. Protect your domain from spoofing and phishing. Expert DMARC implementation and monitoring." />
<link rel="canonical" href="https://www.shivaami.com/godmarc" />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 </Helmet>


    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ActivationSection />
        <FAQSection />
        <CalendarCTASection />
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div></>
  );
};

export default GoDmarc;
