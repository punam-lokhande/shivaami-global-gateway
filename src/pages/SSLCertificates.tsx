import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useRegion } from '@/contexts/RegionContext';
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Lock, 
  Shield, 
  TrendingUp, 
  FileCheck, 
  Building, 
  Award, 
  Globe, 
  Layers,
  Brain,
  Settings,
  GraduationCap,
  HeadphonesIcon,
  Calendar,
  CheckCircle2,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import sslBanner from "@/assets/banners/ssl-banner.jpg";
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
          style={{ backgroundImage: `url(${sslBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/90 via-[#0C4594]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      <motion.div 
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-24 sm:pb-28 md:pb-32 lg:pb-36"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.h1 
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          <span className="text-[#38B6FF]">SSL Certificates: Website</span> Security Essentials
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            SSL certificates encrypt data between browsers and servers, authenticating website identity and enabling HTTPS for security and trust. Shivaami provides SSL certificates from trusted authorities, handling procurement, installation, and renewal.
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
    icon: Lock,
    title: "Data Encryption",
    description: "Protect sensitive information, including passwords, payment details, and personal data. 256-bit encryption prevents interception during transmission. The browser padlock indicates a secure connection to visitors."
  },
  {
    icon: Shield,
    title: "Website Authentication",
    description: "Certificates verify your website's identity to visitors. Prevent phishing attacks that impersonate your domain. Trust indicators build confidence with customers."
  },
  {
    icon: TrendingUp,
    title: "SEO Benefits",
    description: "Google prioritizes HTTPS websites in search rankings. Secure connections improve your visibility online. Modern browsers flag non-HTTPS sites as insecure."
  },
  {
    icon: FileCheck,
    title: "Domain Validation Certificates",
    description: "Quick issuance validates domain ownership only. Affordable option for blogs, small websites, and testing. Installation takes minutes after validation."
  },
  {
    icon: Building,
    title: "Organization Validation Certificates",
    description: "Verify your organization's legal identity and domain ownership. Display the organization name in the certificate details. Higher trust level for business websites."
  },
  {
    icon: Award,
    title: "Extended Validation Certificates",
    description: "The highest level of authentication with a rigorous vetting process. The browser address bar shows the organization name prominently. Ideal for e-commerce and financial services."
  },
  {
    icon: Globe,
    title: "Wildcard Certificates",
    description: "Secure unlimited subdomains with a single certificate. Cost-effective for organizations with many subdomains. Simplifies certificate management."
  },
  {
    icon: Layers,
    title: "Multi-Domain Certificates",
    description: "Protect multiple domains with one certificate. Reduce costs compared to individual certificates. Centralized management improves efficiency."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What SSL Certificates Deliver
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Security, customer trust, and SEO rankings for your websites
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
    description: "We assess your domain structure and recommend appropriate certificate types. Our team identifies coverage requirements and validation levels. You get clear guidance on certificate selection."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami handles certificate purchase and domain validation. We install certificates on your web servers or load balancers. Your website gains HTTPS protection with proper configuration."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our experts verify complete certificate chain installation. We configure HTTP to HTTPS redirects properly. Security headers enhance protection beyond basic encryption."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We document certificate details and renewal schedules. Training helps your team understand certificate management. Procedures ensure renewals happen before expiration."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami monitors certificate expiration and handles renewals proactively. We manage certificate updates across your infrastructure. Regular checks ensure continuous HTTPS availability."
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
          We work with multiple certificate authorities to provide options
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
            Secure Your Website with SSL Certificates
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Schedule a consultation with our security specialists
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left max-w-3xl mx-auto">
            {[
              "Certificate type assessment",
              "Domain validation support",
              "Server installation service",
              "HTTPS redirect configuration",
              "Security header setup",
              "Renewal management"
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

const SSLCertificates = () => {
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
      question: "How will visitors know that my website is secure with SSL?",
      answer: 'When visitors access an SSL-protected website, their browser displays a padlock icon and "https://" in the URL address bar. Visitors can click the padlock to view the certificate details, issuer information, and validation status for additional assurance.'
    },
    {
      question: "How does someone know they can trust digitally signed code?",
      answer: "When users attempt to download or run unsigned code, their browser displays a security warning or blocks the content based on security settings. Digitally signed code with a valid Code Signing Certificate shows the publisher's identity and confirms the code hasn't been tampered with."
    },
    {
      question: "After purchasing a Code Signing Certificate, what are the next steps?",
      answer: "After purchasing a Code Signing Certificate, you need to generate and submit a Certificate Signing Request (CSR). Depending on your platform and use case, you can create the CSR automatically through your system or use certificate management tools to generate it."
    },
    {
      question: "What are the benefits of having an SSL Certificate on my website?",
      answer: "SSL Certificates encrypt sensitive data, including passwords, credit card details, and personal information, during transmission. They build visitor trust, improve search engine rankings, ensure regulatory compliance, and display visual trust indicators like the padlock icon in browsers."
    },
    {
      question: " Do I need different SSL Certificates for multiple domains?",
      answer: "It depends on your needs. A standard SSL Certificate covers a single domain, while Multi-Domain (SAN) Certificates can secure multiple domains, and Wildcard SSL Certificates protect a domain and all its subdomains under one certificate."
    },
    {
      question: "How long does it take to activate an SSL Certificate after purchase?",
      answer: "Domain Validation (DV) SSL Certificates can be issued within minutes to hours. Organization Validation (OV) and Extended Validation (EV) Certificates require business verification and typically take 1-5 business days for issuance after documentation submission."
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
    "name": "How will visitors know that my website is secure with SSL?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When visitors access an SSL-protected website, their browser displays a padlock icon and \"https://\" in the URL address bar. Visitors can click the padlock to view the certificate details, issuer information, and validation status for additional assurance."
    }
  },{
    "@type": "Question",
    "name": "How does someone know they can trust digitally signed code?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When users attempt to download or run unsigned code, their browser displays a security warning or blocks the content based on security settings. Digitally signed code with a valid Code Signing Certificate shows the publisher's identity and confirms the code hasn't been tampered with."
    }
  },{
    "@type": "Question",
    "name": "After purchasing a Code Signing Certificate, what are the next steps?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After purchasing a Code Signing Certificate, you need to generate and submit a Certificate Signing Request (CSR). Depending on your platform and use case, you can create the CSR automatically through your system or use certificate management tools to generate it."
    }
  },{
    "@type": "Question",
    "name": "What are the benefits of having an SSL Certificate on my website?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "SSL Certificates encrypt sensitive data, including passwords, credit card details, and personal information, during transmission. They build visitor trust, improve search engine rankings, ensure regulatory compliance, and display visual trust indicators like the padlock icon in browsers."
    }
  },{
    "@type": "Question",
    "name": "Do I need different SSL Certificates for multiple domains?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It depends on your needs. A standard SSL Certificate covers a single domain, while Multi-Domain (SAN) Certificates can secure multiple domains, and Wildcard SSL Certificates protect a domain and all its subdomains under one certificate."
    }
  },{
    "@type": "Question",
    "name": "How long does it take to activate an SSL Certificate after purchase?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Domain Validation (DV) SSL Certificates can be issued within minutes to hours. Organization Validation (OV) and Extended Validation (EV) Certificates require business verification and typically take 1-5 business days for issuance after documentation submission."
    }
  }]
}



  return (
    <>
  <Helmet>
<title>SSL Certificate Provider in India & USA | Secure Websites by Shivaami</title>
 <meta name="description" content="Get SSL certificates from Shivaami. Domain validation, organization validation, and EV certificates. Expert installation and certificate management support." />
<link rel="canonical" href="https://www.shivaami.com/ssl-certificates" />
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

export default SSLCertificates;
