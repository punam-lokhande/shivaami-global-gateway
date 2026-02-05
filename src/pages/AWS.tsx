import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetStartedDialog from "@/components/GetStartedDialog";
import { 
  Server, 
  Database, 
  Cloud, 
  Network, 
  Shield, 
  BarChart3, 
  Layers, 
  Settings,
  Brain,
  GraduationCap,
  HeadphonesIcon,
  Calendar,
  CheckCircle2,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import awsBanner from "@/assets/banners/aws-banner.jpg";
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
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${awsBanner})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/90 via-[#0C4594]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>
      <motion.div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36" style={{ opacity }}>
        <div className="max-w-3xl">
          <motion.h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
           <span className="text-[#38B6FF]">AWS : Build on Cloud</span> Infrastructure Solutions
          </motion.h1>
          <motion.p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
           Amazon Web Services provides comprehensive cloud infrastructure including compute, storage, databases, and networking with global reach. Shivaami, an Advanced AWS Consulting Partner, architects and manages AWS environments for enterprises across India.
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
    title: "Compute Services",
    description: "EC2 instances provide flexible virtual servers for any workload. Lambda enables serverless computing without infrastructure management. Elastic Container Service runs containerized applications at scale."
  },
  {
    icon: Database,
    title: "Storage Solutions",
    description: "SS3 object storage offers unlimited scalability with high durability. EBS volumes provide block storage for databases and applications. Glacier archives data cost-effectively for long-term retention."
  },
  {
    icon: Layers,
    title: "Database Services",
    description: "RDS manages relational databases including PostgreSQL, MySQL, and Oracle. DynamoDB delivers NoSQL performance at any scale. Aurora provides MySQL and PostgreSQL compatibility with cloud advantages."
  },
  {
    icon: Network,
    title: "Networking Capabilities",
    description: "VPC creates isolated network environments with complete control. Direct Connect establishes dedicated connections to AWS. CloudFront CDN delivers content globally with low latency."
  },
  {
    icon: Shield,
    title: "Security and Identity",
    description: "IAM controls access with granular permissions and policies. CloudTrail logs all API activity for audit and compliance. AWS Shield protects against DDoS attacks automatically."
  },
  {
    icon: BarChart3,
    title: "Analytics and AI",
    description: "Redshift enables petabyte-scale data warehousing. SageMaker simplifies machine learning model development and deployment. Athena queries data directly in S3 without infrastructure."
  },
  {
    icon: Cloud,
    title: "Application Integration",
    description: "API Gateway creates and manages APIs at any scale. SNS provides messaging for distributed applications. SQS queues messages reliably for asynchronous processing."
  },
  {
    icon: Settings,
    title: "Management Tools",
    description: "CloudWatch monitors applications and infrastructure comprehensively. Systems Manager automates operational tasks across resources. Cost Explorer analyzes spending and identifies optimization opportunities."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What AWS Cloud Delivers
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
    description: "We assess your applications and design AWS cloud architecture. Our team creates migration strategies with risk mitigation plans. You get detailed roadmap with business case and timelines."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami migrates workloads using proven methodologies and automation. We configure networking, security, and operational tools. Your applications run on AWS with optimized performance."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our security specialists implement AWS best practices and controls. We configure monitoring, logging, and incident response capabilities. Compliance frameworks align with regulatory requirements."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We train development and operations teams on AWS services. Knowledge transfer ensures your staff manages infrastructure effectively. Documentation and runbooks support ongoing operations."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami provides managed services with 24/7 monitoring and support. We continuously optimize costs, performance, and architecture. Regular reviews identify modernization opportunities."
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
          As an Advanced AWS Partner, we access specialized resources and support
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

const AWS = () => {
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
      question: "What is AWS (Amazon Web Services)?",
      answer: "AWS (Amazon Web Services) is Amazon's comprehensive cloud computing platform that provides on-demand services, including computing power, storage solutions, databases, machine learning, analytics, and networking. It enables organizations to build, deploy, and scale applications with flexibility and cost-efficiency."
    },
    {
      question: "How can AWS be used for business operations? ",
      answer: "AWS supports diverse business needs, including web hosting, application deployment, data storage and backup, big data analytics, machine learning model training, IoT solutions, and disaster recovery. It provides scalable infrastructure for startups, enterprises, and government organizations."
    },
    {
      question: "Is AWS only for large enterprises, or can small businesses benefit too? ",
      answer: "AWS serves businesses of all sizes with its flexible pay-as-you-go pricing model. Small businesses and startups benefit from low initial costs and scalability, while large enterprises leverage their comprehensive services and global infrastructure for complex requirements."
    },
    {
      question: "Is AWS compliant with industry standards and regulations? ",
      answer: "Yes, AWS maintains compliance with major industry standards, including ISO 27001, SOC 1/2/3, HIPAA, GDPR, PCI DSS, and FedRAMP. AWS provides compliance documentation and tools to help customers meet their specific regulatory requirements."
    },
    {
      question: "What security features does AWS provide? ",
      answer: "AWS offers enterprise-grade security with data encryption, identity and access management (IAM), network firewalls, DDoS protection, security monitoring tools, and compliance certifications. AWS follows a shared responsibility model for comprehensive security coverage."
    },
    {
      question: "Can Shivaami customize AWS solutions for my specific business needs? ",
      answer: "Yes, Shivaami provides tailored AWS implementation and migration services designed to address your unique business requirements. Our expertise ensures optimal cloud architecture, cost optimization, security configuration, and seamless deployment for maximum results."
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
    "name": "What is AWS (Amazon Web Services)?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AWS (Amazon Web Services) is Amazon's comprehensive cloud computing platform that provides on-demand services, including computing power, storage solutions, databases, machine learning, analytics, and networking. It enables organizations to build, deploy, and scale applications with flexibility and cost-efficiency."
    }
  },{
    "@type": "Question",
    "name": "How can AWS be used for business operations?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AWS supports diverse business needs, including web hosting, application deployment, data storage and backup, big data analytics, machine learning model training, IoT solutions, and disaster recovery. It provides scalable infrastructure for startups, enterprises, and government organizations."
    }
  },{
    "@type": "Question",
    "name": "Is AWS only for large enterprises, or can small businesses benefit too?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AWS serves businesses of all sizes with its flexible pay-as-you-go pricing model. Small businesses and startups benefit from low initial costs and scalability, while large enterprises leverage their comprehensive services and global infrastructure for complex requirements."
    }
  },{
    "@type": "Question",
    "name": "Is AWS compliant with industry standards and regulations?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, AWS maintains compliance with major industry standards, including ISO 27001, SOC 1/2/3, HIPAA, GDPR, PCI DSS, and FedRAMP. AWS provides compliance documentation and tools to help customers meet their specific regulatory requirements."
    }
  },{
    "@type": "Question",
    "name": "What security features does AWS provide?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AWS offers enterprise-grade security with data encryption, identity and access management (IAM), network firewalls, DDoS protection, security monitoring tools, and compliance certifications. AWS follows a shared responsibility model for comprehensive security coverage."
    }
  },{
    "@type": "Question",
    "name": "Can Shivaami customize AWS solutions for my specific business needs?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Shivaami provides tailored AWS implementation and migration services designed to address your unique business requirements. Our expertise ensures optimal cloud architecture, cost optimization, security configuration, and seamless deployment for maximum results."
    }
  }]
}




  return (

    <>
  <Helmet>
<title>AWS Partner in India & USA | Cloud Solutions by Shivaami</title>
 <meta name="description" content="Deploy AWS cloud infrastructure with Shivaami. Expert migration, architecture design, and managed services. Advanced AWS consulting partner in India." />
<link rel="canonical" href="https://www.shivaami.com/aws" />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 </Helmet>


    <div className="min-h-screen bg-white">
      <Header />
      <main><HeroSection /><FeaturesSection /><ActivationSection /> <FAQSection /> <CTASection /></main>
      <Footer />
      <GetStartedDialog open={showGetStartedDialog} onOpenChange={setShowGetStartedDialog} />
    </div></>
  );
};
export default AWS;
