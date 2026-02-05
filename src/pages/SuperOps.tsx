import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetStartedDialog from "@/components/GetStartedDialog";
import { 
  Monitor, 
  Headphones, 
  Briefcase, 
  RefreshCw, 
  Package, 
  Users, 
  BarChart3, 
  Workflow,
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
import superopsBanner from "@/assets/banners/superops-banner.jpg";
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
    <section 
      ref={sectionRef}
      className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] max-h-[700px] flex items-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${superopsBanner})` }}
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
            <span className="text-[#38B6FF]">SuperOps: Flexible</span> IT Operations Solutions
          </motion.h1>
            

          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          SuperOps is a unified platform combining remote monitoring, service desk, and professional services automation into one integrated solution. Shivaami partners with SuperOps to implement and optimize IT operations for managed service providers across India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
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
    icon: Monitor,
    title: "Remote Monitoring and Management",
    description: "Monitor devices, servers, and network infrastructure in real time. Automated alerts notify teams of issues before users report them. Remote access enables quick troubleshooting and resolution."
  },
  {
    icon: Headphones,
    title: "Integrated Service Desk",
    description: "Ticketing system tracks requests from submission to resolution. SLA management ensures timely response and resolution. Self-service portal reduces routine IT requests."
  },
  {
    icon: Briefcase,
    title: "Professional Services Automation",
    description: "Project management tools track time, budgets, and deliverables. Client billing integrates with time tracking and expenses. Resource scheduling optimizes team utilization."
  },
  {
    icon: RefreshCw,
    title: "Patch Management",
    description: "Automate patch deployment across Windows, macOS, and third-party applications. Approval workflows control update timing and testing. Compliance reporting demonstrates patch coverage."
  },
  {
    icon: Package,
    title: "Asset Management",
    description: "Track hardware and software inventory automatically. License management prevents over-licensing or compliance gaps. Asset lifecycle data supports planning and budgeting."
  },
  {
    icon: Users,
    title: "Client Portal",
    description: "Customers view ticket status and submit requests independently. Knowledge base articles reduce repetitive support questions. Transparency improves client satisfaction."
  },
  {
    icon: BarChart3,
    title: "Reporting and Analytics",
    description: "Performance dashboards show ticket volume, response times, and resolution rates. Client health scores identify accounts needing attention. Business reports support data-driven decisions."
  },
  {
    icon: Workflow,
    title: "Automation and Workflows",
    description: "Automate routine tasks like onboarding and software deployment. Custom scripts extend platform capabilities. Integration with other tools eliminates manual data entry."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What SuperOps Delivers
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
    icon: Brain,
    title: "Strategy and Planning",
    description: "We assess your current IT operations and identify consolidation opportunities. Our team designs SuperOps configuration aligned with the service delivery model. You get an implementation plan that streamlines operations."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami configures SuperOps modules and organizational structure. We migrate data from existing tools and establish integrations. Your team starts using the unified platform quickly."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our experts implement access controls and audit logging. We configure patch management and compliance reporting. Security settings protect both your organization and clients."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We train IT staff on platform features and best practices. Documentation supports ongoing operations and troubleshooting. Process guidance helps teams leverage full platform capabilities."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami guides workflow optimization and automation. We help refine processes as your operations evolve. Regular reviews identify opportunities to increase efficiency."
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
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

const SuperOps = () => {
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
      question: "What is SuperOps used for?",
      answer: "SuperOps is used to manage IT operations through a unified platform that combines Remote Monitoring and Management (RMM), Service Desk, and Professional Services Automation (PSA). IT teams and managed service providers use SuperOps to monitor infrastructure, manage tickets, automate workflows, and deliver IT services efficiently."
    },
    {
      question: "Who should use SuperOps?",
      answer: "SuperOps is designed for managed service providers (MSPs) and internal IT teams that want to consolidate multiple IT management tools into one platform. It is well suited for organizations looking to improve service delivery, streamline workflows, and gain better visibility into operations and client performance."
    },
    {
      question: "How does SuperOps help improve IT service delivery?",
      answer: "SuperOps improves IT service delivery by centralizing monitoring, ticketing, asset management, and automation. Real-time alerts, SLA tracking, and workflow automation help teams resolve issues faster, reduce downtime, and deliver consistent support experiences to end users and clients."
    },
    {
      question: "What is the difference between SuperOps and traditional RMM or PSA tools?",
      answer: "Unlike standalone RMM or PSA tools, SuperOps combines monitoring, service desk, project management, billing, and automation into a single integrated platform. This reduces tool sprawl, eliminates data silos, and gives IT teams a unified view of operations and service performance."
    },
    {
      question: "Can SuperOps replace multiple IT management tools?",
      answer: "Yes, SuperOps can replace multiple IT management tools by providing RMM, PSA, service desk, asset management, patching, and reporting in one solution. This consolidation simplifies operations, lowers licensing costs, and improves efficiency by reducing manual handoffs between systems."
    },
    {
      question: "How can IT teams in India implement SuperOps?",
      answer: "IT teams in India can implement SuperOps by working with a certified partner like Shivaami. The implementation includes operational assessment, platform configuration, data migration, workflow automation, staff training, and ongoing optimization to ensure effective and scalable IT service delivery."
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
    "name": "What is SuperOps used for?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "SuperOps is used to manage IT operations through a unified platform that combines Remote Monitoring and Management (RMM), Service Desk, and Professional Services Automation (PSA). IT teams and managed service providers use SuperOps to monitor infrastructure, manage tickets, automate workflows, and deliver IT services efficiently."
    }
  },{
    "@type": "Question",
    "name": "Who should use SuperOps?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "SuperOps is designed for managed service providers (MSPs) and internal IT teams that want to consolidate multiple IT management tools into one platform. It is well suited for organizations looking to improve service delivery, streamline workflows, and gain better visibility into operations and client performance."
    }
  },{
    "@type": "Question",
    "name": "How does SuperOps help improve IT service delivery?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "SuperOps improves IT service delivery by centralizing monitoring, ticketing, asset management, and automation. Real-time alerts, SLA tracking, and workflow automation help teams resolve issues faster, reduce downtime, and deliver consistent support experiences to end users and clients."
    }
  },{
    "@type": "Question",
    "name": "What is the difference between SuperOps and traditional RMM or PSA tools?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Unlike standalone RMM or PSA tools, SuperOps combines monitoring, service desk, project management, billing, and automation into a single integrated platform. This reduces tool sprawl, eliminates data silos, and gives IT teams a unified view of operations and service performance."
    }
  },{
    "@type": "Question",
    "name": "Can SuperOps replace multiple IT management tools?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, SuperOps can replace multiple IT management tools by providing RMM, PSA, service desk, asset management, patching, and reporting in one solution. This consolidation simplifies operations, lowers licensing costs, and improves efficiency by reducing manual handoffs between systems."
    }
  },{
    "@type": "Question",
    "name": "How can IT teams in India implement SuperOps?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "IT teams in India can implement SuperOps by working with a certified partner like Shivaami. The implementation includes operational assessment, platform configuration, data migration, workflow automation, staff training, and ongoing optimization to ensure effective and scalable IT service delivery."
    }
  }]
}





  return (
    <>
     <Helmet>
<title>SuperOps Partner in India & USA | IT Operations Platform by Shivaami</title>
 <meta name="description" content="Deploy SuperOps unified IT operations platform with Shivaami. RMM, PSA, and service desk in one solution. Streamline managed services delivery." />
<link rel="canonical" href="https://www.shivaami.com/superops" />
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
      <GetStartedDialog open={showGetStartedDialog} onOpenChange={setShowGetStartedDialog} />
    </div></>
  );
};

export default SuperOps;
